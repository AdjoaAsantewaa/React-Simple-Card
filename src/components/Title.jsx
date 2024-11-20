// Title.js
import React from 'react';
import { Typography } from '@material-tailwind/react'; // Import Typography

export function Title({ text }) {
  return (
    <Typography variant="h2" color="blue-gray" className="">
      {text}
    </Typography>
  );
}
