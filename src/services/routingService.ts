import { mapService } from './mapService';

export interface RouteDetails {
  distanceMeters: number;
  durationSeconds: number;
  geometry: {
    type: 'LineString';
    coordinates: [number, number][]; // [lng, lat]
  };
  coordinates: [number, number][]; // [lng, lat]
}

export const routingService = {
  /**
   * Fetches walking route details and geometry coordinates using Google Maps Directions Service.
   */
  async getWalkingRoute(
    origin: { lat: number; lng: number },
    destination: { lat: number; lng: number },
    profile: 'foot-walking' | 'two-wheeler' | 'driving-car' | 'cycling-regular' | 'wheelchair' = 'foot-walking'
  ): Promise<RouteDetails> {
    // 1. Ensure Google Maps API is loaded
    await mapService.loadGoogleMaps();

    if (!window.google || !window.google.maps) {
      throw new Error('Google Maps API is not loaded or unavailable.');
    }

    // 2. Map profile to Google Maps TravelMode
    let travelMode = window.google.maps.TravelMode.WALKING;
    if (profile === 'driving-car' || profile === 'two-wheeler') {
      travelMode = window.google.maps.TravelMode.DRIVING;
    } else if (profile === 'cycling-regular') {
      travelMode = window.google.maps.TravelMode.BICYCLING;
    }

    const directionsService = new window.google.maps.DirectionsService();

    return new Promise<RouteDetails>((resolve, reject) => {
      directionsService.route(
        {
          origin: new window.google.maps.LatLng(origin.lat, origin.lng),
          destination: new window.google.maps.LatLng(destination.lat, destination.lng),
          travelMode: travelMode
        },
        (response, status) => {
          if (status === window.google.maps.DirectionsStatus.OK && response) {
            const route = response.routes[0];
            const leg = route.legs[0];
            
            // Map overview_path points to [lng, lat] array
            const coords = route.overview_path.map(
              (point) => [point.lng(), point.lat()] as [number, number]
            );

            resolve({
              distanceMeters: leg.distance?.value ?? 0,
              durationSeconds: leg.duration?.value ?? 0,
              geometry: {
                type: 'LineString',
                coordinates: coords
              },
              coordinates: coords
            });
          } else {
            reject(new Error(`Directions request failed with status: ${status}`));
          }
        }
      );
    });
  }
};
