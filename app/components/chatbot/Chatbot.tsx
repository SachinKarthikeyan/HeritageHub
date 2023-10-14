import React from 'react';

interface CircularImageProps {
  imageUrl: string;
  altText: string;
  size: number;
}

const CircularImage: React.FC<CircularImageProps> = ({ imageUrl, altText, size }) => {
  const imageStyle: React.CSSProperties = {
    borderRadius: '50%', // Create a circular shape
    width: size + 'px', // Set the width based on the 'size' prop
    height: size + 'px', // Set the height based on the 'size' prop
  };

  return (
    <img src={imageUrl} alt={altText} style={imageStyle} />
  );
};

export default CircularImage;
