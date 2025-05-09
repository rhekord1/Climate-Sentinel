import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";


mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;


const GLOBE_VIEW = { center: [0, 20], zoom: 2 }; 
const GHANA_VIEW = { center: [-1.0232, 7.9465], zoom: 6 }; 
const ATEWA_VIEW = { center: [-0.5893, 6.2338], zoom: 12 }; 


const forestZones = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Atewa Forest - Zone A",
        hasAlert: true,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.6149, 6.2538],
            [-0.5893, 6.2538],
            [-0.5893, 6.2338],
            [-0.6149, 6.2338],
            [-0.6149, 6.2538],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Atewa Forest - Zone B",
        hasAlert: false,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.6149, 6.2138],
            [-0.5893, 6.2138],
            [-0.5893, 6.1938],
            [-0.6149, 6.1938],
            [-0.6149, 6.2138],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Atewa Forest - Zone C",
        hasAlert: true,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.5793, 6.2338],
            [-0.5593, 6.2338],
            [-0.5593, 6.2138],
            [-0.5793, 6.2138],
            [-0.5793, 6.2338],
          ],
        ],
      },
    },
  ],
};

export default function MapboxMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [hoveredZone, setHoveredZone] = useState(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

  
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: GLOBE_VIEW.center,
      zoom: GLOBE_VIEW.zoom,
    });

    map.current.on("load", () => {
      if (!map.current) return;

    
      map.current.addSource("zones", {
        type: "geojson",
        data: forestZones,
      });

     
      map.current.addLayer({
        id: "zone-fills",
        type: "fill",
        source: "zones",
        paint: {
          "fill-color": [
            "case",
            ["get", "hasAlert"],
            "rgba(255, 0, 0, 0.2)",
            "rgba(0, 255, 0, 0.1)",
          ],
          "fill-opacity": [
            "case",
            ["==", ["get", "name"], hoveredZone],
            0.8,
            0.5,
          ],
        },
      });

      
      map.current.addLayer({
        id: "zone-borders",
        type: "line",
        source: "zones",
        paint: {
          "line-color": "#FFD700",
          "line-width": 2,
        },
      });

     
      map.current.addLayer({
        id: "zone-labels",
        type: "symbol",
        source: "zones",
        layout: {
          "text-field": ["get", "name"],
          "text-size": 12,
          "text-offset": [0, 0],
          "text-anchor": "center",
        },
        paint: {
          "text-color": "#ffffff",
          "text-halo-color": "#000000",
          "text-halo-width": 1,
        },
      });

      // Add hover effect
      map.current.on("mousemove", "zone-fills", (e) => {
        if (e.features && e.features[0]) {
          setHoveredZone(e.features[0].properties?.name || null);
        }
      });

      map.current.on("mouseleave", "zone-fills", () => {
        setHoveredZone(null);
      });

      
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    
      setTimeout(() => {
        map.current?.flyTo({
          center: GHANA_VIEW.center,
          zoom: GHANA_VIEW.zoom,
          duration: 3000,
          essential: true,
        });

        setTimeout(() => {
          map.current?.flyTo({
            center: ATEWA_VIEW.center,
            zoom: ATEWA_VIEW.zoom,
            duration: 3000,
            essential: true,
          });
        }, 3000);
      }, 1000);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  
  useEffect(() => {
    if (!map.current || !map.current.isStyleLoaded()) return;
    
    map.current.setPaintProperty("zone-fills", "fill-opacity", [
      "case",
      ["==", ["get", "name"], hoveredZone],
      0.8,
      0.5,
    ]);
  }, [hoveredZone]);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-grow relative">
        <div
          ref={mapContainer}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "550px"
          }}
        />
        
        
        {hoveredZone && (
          <div className="absolute left-1/2 bottom-4 z-10 -translate-x-1/2 bg-black/75 px-4 py-2 rounded-lg">
            <p className="text-white text-sm">{hoveredZone}</p>
          </div>
        )}
      </div>
    </div>
  );
}