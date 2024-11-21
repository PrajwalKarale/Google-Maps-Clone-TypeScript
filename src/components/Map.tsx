import Place from "../api/Place";
import 'leaflet/dist/leaflet.css';
// import {Map as LeafletMap} from 'leaflet';
import L from 'leaflet';
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

interface MapProps{
    place: Place | null;
};

const DefaultIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
});

L.Marker.prototype.options.icon = DefaultIcon;

function FlyToLocation({ place }: { place: Place | null }) {
    const map = useMap();
    useEffect(() => {
        if (place) {
            map.flyTo([place.latitude, place.longitude], 12); // Adjust zoom if needed
        }
    }, [place, map]);
    return null;
}
export default function Map({ place }: MapProps){
    // const mapRef = useRef<LeafletMap | null>(null);
    // useEffect(() => {
    //     if(mapRef.current && place){
    //         mapRef.current.flyTo([place.latitude, place.longitude])
    //     }
    // }, [place]);

    return (
        <MapContainer
            // ref = {mapRef}
            center={[40.7, -74]}
            zoom={12}
            scrollWheelZoom
            className="h-full"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {place && <Marker position={[place.latitude, place.longitude]}/>}
            <FlyToLocation place={place} />
        </MapContainer>
    );
}