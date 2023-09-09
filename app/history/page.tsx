// src/App.js

"use client"
import React, { useMemo, useRef } from "react";
import PastLocationsGrid from "../components/locationGrid"
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

const markers = [
    {lat: 39.952321, lng: -75.193730}, 
    {lat: 39.952183, lng: -73.193183 }
]

function Page() {
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(
        () => ({ lat: 39.952305, lng: -75.193703 }),
        []
    );

    const options = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: true
        }),
        []
    );

    type marker = {lat: number, lng: number}

    function fitBoundsToMarkers(map : google.maps.Map, markers : marker[]) {
        const bounds = new google.maps.LatLngBounds();

        markers.forEach((marker) => {
            bounds.extend(new google.maps.LatLng(marker.lat, marker.lng));
        });

        map.fitBounds(bounds);
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDWaP9uHirp36mON-N9-gVbUQ5XmqtRl5A' as string,
        libraries: libraries as any,
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div className="App">
            <PastLocationsGrid />
            <GoogleMap
                options={options}
                zoom={14}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '800px', height: '800px' }}
                onLoad={(map) => {
                    console.log('Map Component Loaded...');
                    fitBoundsToMarkers(map, markers);
                  }}
            >
            <MarkerF position={{lat: 39.952321, lng: -75.193730}} onLoad={() => console.log('Marker Loaded')} />
            <MarkerF position={{lat: 39.952183, lng: -73.193183}} onLoad={() => console.log('Marker Loaded')} />
            </GoogleMap>

        </div>
    );
}


export default Page;
