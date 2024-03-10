/// <reference types="vite/client" />

declare global {
    namespace google.maps {
      interface GeocoderResult {
        address_components: {
          long_name: string;
          short_name: string;
          types: string[];
        }[];
        formatted_address: string;
        geometry: {
          bounds: {
            northeast: LatLng;
            southwest: LatLng;
          };
          location: LatLng;
          location_type: GeocoderLocationType;
          viewport: {
            northeast: LatLng;
            southwest: LatLng;
          };
        };
        partial_match: boolean;
        place_id: string;
        plus_code: {
          compound_code: string;
          global_code: string;
        };
        types: string[];
      }
    
      type GeocoderStatus = 'ERROR' | 'INVALID_REQUEST' | 'OK' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'UNKNOWN_ERROR';
    }
  }
  
