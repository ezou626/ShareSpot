import React from 'react';

interface ItemProps {
    lat: string;
    lng: string;
    description: string;
    imagePath: string;
}

const UsbBox: React.FC<ItemProps> = ({lat, lng, description, imagePath}) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <img src={imagePath} className="w-full h-auto" />
      <h2 className="text-2xl font-semibold mt-4 text-gray-300">{description}</h2>
      <p className="text-gray-300 mt-2">`&lt;{lat}, {lng}&gt;`</p>
    </div>
  );
};

export default UsbBox;
