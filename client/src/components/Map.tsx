import React, {useRef, useEffect} from "react";

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    children?: React.ReactNode;
}

const Map: React.FC<MapProps> = ({
    onClick,
    style,
    children,
    ...options
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    useEffect(() => {
        if(ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    useEffect(() => {
        if (map) {
          ["click", "idle"].forEach((eventName) =>
            google.maps.event.clearListeners(map, eventName)
          );
    
          if (onClick) {
            map.addListener("click", onClick);
          }
        }
      }, [map, onClick]);

    return (
        <>
            <div ref={ref} style={style} />
        </>
    )
};

export default Map;