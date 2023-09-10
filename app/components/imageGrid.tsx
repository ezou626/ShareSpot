import React from 'react';
import Link from 'next/link';

const ImageGrid : React.FC = () => {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg'
    ];

    return(
    <div className="grid grid-cols-3 gap-4">
      {images.map((imageUrl, index) => (
        <div key={index} className="w-64 h-64">
                  <Link href="/temp" passHref legacyBehavior>
            <a>
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
          </Link>
        </div>
      ))}
    </div>
    )
};

export default ImageGrid;
