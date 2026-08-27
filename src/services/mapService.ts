/**
 * DHAROHAR Map Service — Google Maps JS API Loader & Helper
 * Isolates all Google Maps loading and initialization logic.
 */

let loadPromise: Promise<any> | null = null;

export const mapService = {
  /**
   * Dynamically loads the Google Maps JavaScript API script.
   */
  loadGoogleMaps(): Promise<any> {
    if (loadPromise) return loadPromise;

    const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim() || '';

    loadPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject(new Error('Window is undefined'));
        return;
      }
      if ((window as any).google && (window as any).google.maps) {
        resolve((window as any).google);
        return;
      }

      const callbackName = 'initGoogleMapsCallback';
      (window as any)[callbackName] = () => {
        resolve((window as any).google);
        delete (window as any)[callbackName];
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry,marker&callback=${callbackName}`;
      script.async = true;
      script.defer = true;
      script.onerror = (err) => {
        console.error('Failed to load Google Maps script:', err);
        reject(err);
      };
      document.head.appendChild(script);
    });

    return loadPromise;
  }
};
