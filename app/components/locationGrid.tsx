import React from "react";

var pastLocations = [{
    "id": 1,
    "location" : 'LOCATION A',
    "usbName" : 'Usbruh',
    "prompt" : "bruh prompt"
}]

const PastLocationsGrid = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Past locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastLocations.map((location) => (
          <div
            key={location.id}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-lg font-semibold mb-2">USB-id: {location.id}</h2>
            <p className="mb-2">Location: {location.location}</p>
            <p className="mb-2">USB Name: {location.usbName}</p>
            <p className="mb-2">Prompt: {location.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastLocationsGrid;
