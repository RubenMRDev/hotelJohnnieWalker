import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    window.initMap = () => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 10,
      });
    };
    
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      window.initMap = undefined;
    };
  }, []);

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}></div>
  );
};


export default Map;