// Description.js
import React, { Component } from 'react';
import { Typography } from '@material-tailwind/react'; // Import Typography

class Description extends Component {
  render() {
    return (
      <Typography color="gray" className="text-xl">
        {this.props.text}
      </Typography>
    );
  }
}

export default Description;
