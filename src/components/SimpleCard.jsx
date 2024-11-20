// SimpleCard.js
import React, { Component } from 'react';
import { Title } from './Title'; 
import Description from './Description'; 
import { Image } from './Image'; 

class SimpleCard extends Component {
  render() {
    return (
      <div className="flex mt-12 w-[35%] shadow-xl mx-auto p-6 ">
       
        <div className="w-[50%] shadow-xl rounded-md bg-gray-200 ">
          <Image
            imageUrl="https://static.nike.com/a/images/t_default/6140eab5-2b5c-4e0e-8de9-2573e81f31f2/W+NIKE+VERSAIR.png"
          />
        </div>

        
        <div className="flex flex-col gap-6 w-[50%] pl-6 pb-5 bg-aqua">
          <Title text="Nike Air Max 27" /> 
          <Description text="What's on the agenda today? Legs? Cardio? Fitness class? In the agile and flexible Versair, you can go after a wide range of workouts. Low to the ground and featuring a Zoom Air unit designed with female athletes in mind, it's ideal for wherever your fitness journey takes you." /> {/* Pass description text */}
          
        </div>
      </div>
    );
  }
}

export default SimpleCard;
