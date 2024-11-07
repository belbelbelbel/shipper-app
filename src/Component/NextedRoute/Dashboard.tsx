import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const Dashboard = () => {
  const [position, setPosition] = useState({ lat: 7.2905715, lng: 80.6337262 });
  const mapRef = useRef();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(pos:GeolocationPosition) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      setPosition({ lat: latitude, lng: longitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
    
  }, []); 

  const customMarkerIcon = new L.Icon({
    iconUrl: '/src/assets/location.png',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
    popupAnchor: [0, -25]
  });


  function ChangeMapView({ center }:any) {
    const map = useMap();
    useEffect(() => {
      map.flyTo(center, map.getZoom());
    }, [center]);
    return null;
  }

  return (
    <div className="w-full h-full">
      <div className="w-[35%] shadow-md m-4 h-[6rem] bg-white"></div>
      <MapContainer
        center={position}
        zoom={18}
        style={{ width: '100%', height: '80%' }}
        whenCreated={(mapInstance: any) => (mapRef.current = mapInstance)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ChangeMapView center={position} />
        <Marker position={position} icon={customMarkerIcon}>
          <Popup>
            You are here: <br /> Latitude: {position.lat}, Longitude: {position.lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
