import React, {FC, useRef, useState, useEffect} from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { mapMarkerDB } from "../../assets/mapMarkerDB.ts";

const MapComp: FC<{}> = ({}) => {
    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(3); // initial zoom
    const [markers, setMarkers] = useState<Marker[]>(mapMarkerDB);
    const [isLoading, setLoading] = useState(true);
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: 34.87061115856553,
        lng: -84.32288786268238,
    });
    const [activeMarker, setActiveMarker] = useState(null);

    const {height, width} = useWindowDimensions();

    const infoWindow: InfoWindow = new InfoWindow({});

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        };
        setActiveMarker(marker);
    };

    useEffect(() => {
        generateMarkersFromDB();
    }, [isLoading]);

    function generateMarkersFromDB() {
        // mapMarkerDB.map((marker) => {
            //     setMarkers([...markers, marker]);
            //     console.log(markers)
            // });
            setLoading(false);
    };
        
    const createMarker = (lat, lng) => {
        const position = {lat: lat, lng: lng};
        return new Marker({position: position})
    };

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
        console.log(e.latLng?.lat(), e.latLng?.lng())
    };

    const onDblClick = (e: google.maps.MapMouseEvent) => {
        const newMarker = createMarker(e.latLng?.lat(), e.latLng?.lng());
        setMarkers([...markers, newMarker!]);
        console.log(markers)
    };

    const onIdle = (m: google.maps.Map) => {
        console.log("onIdle");
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };

    const containerStyle = {
        width: `${width}px`,
        height: `${height}px`
    };

    const onLoad = marker => {
        console.log('marker: ', marker)
    };

    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }

    return (
       <LoadScript
            googleMapsApiKey='AIzaSyDcWPpWpMYL2iXw4cZbxcpngA25ac-YnBw'
       >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onClick={() => setActiveMarker(null)}
            onDblClick={onDblClick}
        >
        {markers.map((marker: Marker, index) => (
            <Marker
                key={index}
                onLoad={onLoad}
                position={marker.props.position}
                onClick={() => handleActiveMarker(index)}
            >
                {activeMarker === (index) ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div>
                            <h1>Name</h1>
                            <img></img>
                        </div>
                    </InfoWindow>
                ): null}
            </Marker>
        ))}
        </GoogleMap>
       </LoadScript>
    );
};



export default MapComp;

