// src/App.js

"use client"
import React, {useMemo} from "react";
import PastLocationsGrid from "../components/locationGrid"
import { useLoadScript, GoogleMap } from '@react-google-maps/api';

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
        scrollwheel: false
      }),
      []
    );
  
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
            options= {options}
            zoom={14}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: '800px', height: '800px' }}
            onLoad={() => console.log('Map Component Loaded...')}
          />
    </div>
  );
}






export default Page;
