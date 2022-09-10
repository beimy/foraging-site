import { Marker } from '@react-google-maps/api';

interface MarkerData {
    key?: number,
    id: number,
    onLoad?: Function,
    position: {lat: number, lng: number}
};

const onLoad = marker => {
    console.log('marker: ', marker)
};

const marker1 = new Marker({position: {lat: 34.93670841506753, lng: -84.56223548969238} });
const marker2 = new Marker({position: {lat: 34.916481574201896, lng: -84.27938461303711} });
const marker3 = new Marker({position: {lat: 34.91696427121348, lng: -84.27197086188276} });
const marker4 = new Marker({position: {lat: 34.973578003562544, lng: -84.29302969518123} });

export const mapMarkerDB: Marker[] = [
    marker1, marker2, marker3, marker4
];

