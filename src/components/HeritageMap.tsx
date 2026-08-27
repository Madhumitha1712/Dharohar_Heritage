import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Compass, Clock, AlertTriangle } from 'lucide-react';
import { useStore } from '../store/store';
import { heritageService } from '../services/heritageService';
import { mapService } from '../services/mapService';
import { routingService } from '../services/routingService';
import { Monument } from '../types';

interface HeritageMapProps {
  selectedMonumentId: string | null;
  onSelectMonument?: (id: string) => void;
  onNavigateHere?: (id: string) => void;
  routeGeometry?: any;
  userLocationOverride?: { latitude: number; longitude: number } | null;
  onNavigate?: (route: string) => void;
}

export const HeritageMap: React.FC<HeritageMapProps> = ({
  selectedMonumentId,
  onSelectMonument,
  onNavigateHere,
  routeGeometry,
  userLocationOverride,
  onNavigate
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const polylineRef = useRef<any>(null);
  const infoWindowRef = useRef<any>(null);

  const userLocationFromStore = useStore((state) => state.userLocation);
  const travellerPreferences = useStore((state) => state.travellerPreferences);
  const userLocation = userLocationOverride || userLocationFromStore;

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasMapError, setHasMapError] = useState(false);
  const [activeMonument, setActiveMonument] = useState<Monument | null>(null);
  const [internalRoute, setInternalRoute] = useState<any>(null);

  const allMonuments = Object.values(heritageService.getMonuments());

  // Helper to construct custom HTML content for markers
  const createMarkerElement = (color: string, label: string) => {
    const div = document.createElement('div');
    div.style.background = color;
    div.style.color = '#17130F';
    div.style.padding = '5px 10px';
    div.style.borderRadius = '20px';
    div.style.border = '2px solid #F3EBDD';
    div.style.fontWeight = 'bold';
    div.style.fontSize = '10px';
    div.style.whiteSpace = 'nowrap';
    div.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.5)';
    div.innerText = label;
    return div;
  };

  // 1. Load Google Maps Script
  useEffect(() => {
    mapService.loadGoogleMaps()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error('Failed to load Google Maps script:', err);
        setHasMapError(true);
      });
  }, []);

  // 2. Initialize Google Map
  useEffect(() => {
    if (!isLoaded || !mapContainerRef.current) return;

    let centerCoords = { lat: 12.6163, lng: 80.1994 }; // Shore Temple coordinates

    if (selectedMonumentId) {
      const selectedMon = heritageService.getMonumentById(selectedMonumentId);
      if (selectedMon) {
        centerCoords = { lat: selectedMon.location.lat, lng: selectedMon.location.lng };
        setActiveMonument(selectedMon);
      }
    } else if (userLocation) {
      centerCoords = { lat: userLocation.latitude, lng: userLocation.longitude };
    }

    try {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: centerCoords,
        zoom: 14,
        mapId: 'DHAROHAR_MAP',
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT
        },
        styles: [
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            style: { color: '#8ec3b9' }
          }
        ]
      });

      mapRef.current = map;
      infoWindowRef.current = new window.google.maps.InfoWindow();

      return () => {
        mapRef.current = null;
      };
    } catch (err) {
      console.error('Google Map initialization error:', err);
      setHasMapError(true);
    }
  }, [isLoaded]);

  // 3. Render Markers & Adjust Bounds
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isLoaded) return;

    // Clear old markers
    markersRef.current.forEach((m) => m.marker.setMap(null));
    markersRef.current = [];

    // Add user location marker
    if (userLocation) {
      const userMarker = new window.google.maps.Marker({
        position: { lat: userLocation.latitude, lng: userLocation.longitude },
        map: map,
        title: 'Your Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#3B82F6',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2
        }
      });
      markersRef.current.push({ id: 'user', marker: userMarker });
    }

    const bounds = new window.google.maps.LatLngBounds();
    if (userLocation) {
      bounds.extend({ lat: userLocation.latitude, lng: userLocation.longitude });
    }

    // Add monument markers
    allMonuments.forEach((mon) => {
      const isActive = selectedMonumentId === mon.id;
      const markerOptions: any = {
        position: { lat: mon.location.lat, lng: mon.location.lng },
        map: map,
        title: mon.name
      };

      // Use custom styled marker icon
      markerOptions.icon = {
        path: 'M 0,-15 A 15,15 0 1,0 0,15 A 15,15 0 1,0 0,-15 Z',
        fillColor: isActive ? '#D4A85A' : '#B58A52',
        fillOpacity: 1,
        strokeColor: isActive ? '#F3EBDD' : '#D4A85A',
        strokeWeight: isActive ? 2.5 : 1,
        scale: isActive ? 1.1 : 0.9
      };

      const marker = new window.google.maps.Marker(markerOptions);

      marker.addListener('click', () => {
        if (onSelectMonument) onSelectMonument(mon.id);
        setActiveMonument(mon);

        // Pan to marker
        map.panTo({ lat: mon.location.lat, lng: mon.location.lng });
        map.setZoom(15);

        // Show customized Google Maps style InfoWindow
        const infoWindow = infoWindowRef.current;
        if (infoWindow) {
          const content = `
            <div style="color: #17130F; font-family: sans-serif; padding: 4px; max-width: 220px;">
              <div style="font-weight: bold; font-size: 13px; margin-bottom: 4px;">${mon.name}</div>
              <img src="${mon.heroImage}" alt="${mon.name}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 6px; margin-bottom: 6px; border: 1px solid #D4A85A;" />
              <p style="font-size: 10px; margin: 0 0 8px 0; color: #555; line-height: 1.4;">${mon.tagline}</p>
              <div style="display: flex; gap: 6px;">
                <button id="info-explore-${mon.id}" style="flex: 1; background: #2B2118; color: #D4A85A; border: 1px solid #D4A85A; padding: 4px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; cursor: pointer;">
                  EXPLORE
                </button>
                ${mon.has3DModel ? `
                  <button id="info-3d-${mon.id}" style="flex: 1; background: #D4A85A; color: #17130F; border: none; padding: 4px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; cursor: pointer;">
                    3D VIEW
                  </button>
                ` : ''}
              </div>
            </div>
          `;
          infoWindow.setContent(content);
          infoWindow.open(map, marker);

          // Bind navigation actions to InfoWindow buttons
          window.google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
            const expBtn = document.getElementById(`info-explore-${mon.id}`);
            if (expBtn) {
              expBtn.onclick = () => {
                if (onNavigate) {
                  onNavigate(`monument/${mon.id}`);
                } else {
                  window.location.hash = `/monument/${mon.id}`;
                }
              };
            }
            const tdBtn = document.getElementById(`info-3d-${mon.id}`);
            if (tdBtn) {
              tdBtn.onclick = () => {
                if (onNavigate) {
                  onNavigate(`monument/${mon.id}/3d`);
                } else {
                  window.location.hash = `/monument/${mon.id}/3d`;
                }
              };
            }
          });
        }
      });

      markersRef.current.push({ id: mon.id, marker: marker });
      bounds.extend({ lat: mon.location.lat, lng: mon.location.lng });
    });

    // Auto fit map bounds
    if (!routeGeometry && allMonuments.length > 0) {
      if (selectedMonumentId) {
        const mon = heritageService.getMonumentById(selectedMonumentId);
        if (mon) {
          map.setCenter({ lat: mon.location.lat, lng: mon.location.lng });
          map.setZoom(15);
        }
      } else {
        map.fitBounds(bounds, { top: 60, bottom: 60, left: 60, right: 60 });
      }
    }
  }, [selectedMonumentId, isLoaded, userLocation, routeGeometry]);

  // 3b. Programmatic Marker Trigger on selectedMonumentId Change
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isLoaded || !selectedMonumentId) return;

    const matched = markersRef.current.find((m) => m.id === selectedMonumentId);
    if (matched && matched.marker) {
      window.google.maps.event.trigger(matched.marker, 'click');
    }
  }, [selectedMonumentId, isLoaded]);

  // 3c. Calculate route internally when selectedMonumentId changes on Discovery Map
  useEffect(() => {
    if (routeGeometry) {
      setInternalRoute(routeGeometry);
      return;
    }

    if (!selectedMonumentId || !userLocation) {
      setInternalRoute(null);
      return;
    }

    const mon = heritageService.getMonumentById(selectedMonumentId);
    if (!mon) {
      setInternalRoute(null);
      return;
    }

    const fetchRoute = async () => {
      try {
        const origin = { lat: userLocation.latitude, lng: userLocation.longitude };
        const dest = { lat: mon.location.lat, lng: mon.location.lng };
        const routeData = await routingService.getWalkingRoute(origin, dest, 'foot-walking');
        setInternalRoute(routeData.geometry);
      } catch (err) {
        console.warn('Failed to calculate route on discovery map:', err);
        setInternalRoute(null);
      }
    };

    fetchRoute();
  }, [selectedMonumentId, userLocation, routeGeometry]);

  // 4. Drawing Directions Polyline
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isLoaded) return;

    if (polylineRef.current) {
      polylineRef.current.setMap(null);
      polylineRef.current = null;
    }

    if (internalRoute && internalRoute.coordinates) {
      const path = internalRoute.coordinates.map((coord: [number, number]) => ({
        lat: coord[1],
        lng: coord[0]
      }));

      const polyline = new window.google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#D4A85A',
        strokeOpacity: 0.85,
        strokeWeight: 6
      });

      polyline.setMap(map);
      polylineRef.current = polyline;

      // Adjust map bounds to fit route polyline
      const routeBounds = new window.google.maps.LatLngBounds();
      path.forEach((point: any) => routeBounds.extend(point));
      if (userLocation) {
        routeBounds.extend({ lat: userLocation.latitude, lng: userLocation.longitude });
      }
      map.fitBounds(routeBounds, { top: 60, bottom: 60, left: 60, right: 60 });
    }
  }, [internalRoute, isLoaded, userLocation]);

  // Distance / Time Helper
  const getDistanceAndDuration = (mon: Monument) => {
    const fromCoords = userLocation || { latitude: 12.6163, longitude: 80.1994 };
    const dist = heritageService.calculateDistance(
      fromCoords.latitude,
      fromCoords.longitude,
      mon.location.lat,
      mon.location.lng
    );
    const time = heritageService.estimateTravelTime(dist, travellerPreferences?.mobilityPreference);
    return { dist, time };
  };

  // --- FALLBACK / LOADING / ERROR LAYOUTS ---
  if (hasMapError) {
    const activeInfo = activeMonument || allMonuments[0];
    const { dist, time } = getDistanceAndDuration(activeInfo);

    return (
      <div className="relative rounded-3xl bg-[#2B2118] border border-[#D4A85A]/40 overflow-hidden min-h-[500px] flex flex-col justify-between p-6">
        <div className="flex items-center gap-2 p-3 bg-amber-900/20 border border-amber-500/30 rounded-xl text-xs text-[#D4A85A]">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>Google Maps failed to load. Using fallback cartographic view.</span>
        </div>

        <div className="relative my-6 w-full h-[320px] bg-[#17130F] rounded-2xl border border-[#D4A85A]/20 overflow-hidden flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 border-r border-[#D4A85A]/20 overflow-y-auto p-3 space-y-1.5 max-h-[320px] bg-[#2B2118]/40">
            {allMonuments.map((mon) => (
              <button
                key={mon.id}
                onClick={() => {
                  if (onSelectMonument) onSelectMonument(mon.id);
                  setActiveMonument(mon);
                }}
                className={`w-full text-left p-2.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-2 ${
                  selectedMonumentId === mon.id
                    ? 'bg-[#D4A85A] text-[#17130F] border-[#D4A85A]'
                    : 'bg-[#17130F] text-[#F3EBDD]/80 border-[#D4A85A]/10 hover:border-[#D4A85A]/40'
                }`}
              >
                <span className="truncate">{mon.name}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 p-6 flex flex-col justify-center items-center text-center relative select-none">
            <Compass className="w-12 h-12 text-[#D4A85A]/45 mb-3" />
            <h4 className="font-display text-sm font-bold text-[#F3EBDD]">{activeInfo.name}</h4>
            <p className="text-[10px] text-[#D4A85A] mt-0.5">{activeInfo.location.city}, {activeInfo.location.state}</p>
            <p className="text-xs text-[#F3EBDD]/60 mt-4">
              Coordinates: {activeInfo.location.lat.toFixed(4)}° N, {activeInfo.location.lng.toFixed(4)}° E
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { dist, time } = activeMonument ? getDistanceAndDuration(activeMonument) : { dist: 0, time: 0 };

  return (
    <div className="relative w-full h-[520px] rounded-3xl overflow-hidden border border-[#D4A85A]/40 shadow-2xl">
      <div ref={mapContainerRef} className="w-full h-full bg-[#17130F]" />

      {activeMonument && !routeGeometry && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-[#2B2118]/95 border border-[#D4A85A]/50 rounded-2xl p-5 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-[10px] text-[#D4A85A] uppercase tracking-wider font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{activeMonument.location.city}, {activeMonument.location.state}</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#F3EBDD]">
              {activeMonument.name}
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-[#F3EBDD]/85">
              <span>Distance: ~{dist.toFixed(1)} km</span>
              <span>Est. Walk: ~{time} mins</span>
            </div>
          </div>

          {onNavigateHere && (
            <button
              onClick={() => onNavigateHere(activeMonument.id)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D4A85A] text-[#17130F] text-xs font-bold uppercase tracking-wider hover:bg-[#F3EBDD] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
            >
              Navigate Here
            </button>
          )}
        </div>
      )}
    </div>
  );
};
