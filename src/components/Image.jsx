// Image.js
import React from 'react';

export function Image({ imageUrl }) {
  return <img src={imageUrl} alt="card-image" className="w-full h-full object-cover " />;
}
