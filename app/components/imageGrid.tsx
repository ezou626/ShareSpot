import React from 'react';
import Link from 'next/link';

const ImageGrid: React.FC = () => {

    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg'
    ];

    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((imageUrl, index) => (
                <div key={index} className="aspect-square">
                    <Link href={{pathname: "/usbpage", query: {usbId: "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"}}} legacyBehavior>
                        <img
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
};

export default ImageGrid;
