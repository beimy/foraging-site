import React, { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import Map from "./Map";

const render = (status: Status) => {
    return <h1>{status}</h1>;
};

const WrapperMap = () => {
    const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = React.useState(3); // initial zoom
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0,
    });

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
    };

    // const onIdle = (m: google.maps.Map) => {
    //     console.log("onIdle");
    //     setZoom(m.getZoom()!);
    //     setCenter(m.getCenter()!.toJSON());
    // };

    return (
        <div style={{display: "flex", height: "100%" }}>
            <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY!} render={render}>
                <Map    
                    center={center}
                    onClick={onClick}
                    zoom={zoom}
                    style={{ flexGrow: '1', height: '100%' }}
                ><h1>HERE</h1></Map>
            </Wrapper>
        </div>
    );
};

export default WrapperMap;