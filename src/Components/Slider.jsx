import React from "react";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";


const Slider = () => {
  const [counter,setCounter] = useState(0)

  const craouselData = [
    {
        url:"https://github.com/shwetra/assa/assets/104376252/c422ed8e-b88a-4e6b-bb8a-2c27dda0e246"
      },{
        url:"https://github.com/shwetra/assa/assets/104376252/f834fd90-2623-4013-bef5-5b0c72b4b52a"
      },
     
      {
        url:"https://github.com/Sarikagupta14/Amazon-clone/assets/121433831/6a291d80-4fee-477b-8dbb-21fe1a3dc684"
      },
      {
        url:"https://github.com/Sarikagupta14/Amazon-clone/assets/121433831/f8c9d421-ef99-4082-ac24-f3d27965c4b4"
      },
    

     
];


  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === craouselData.length - 1) {
        setCounter(-1);
      }setCounter((prev) => prev + 1);
    },3000)
   
    return () => {
      clearInterval(interval);
    };
  });

  return (
   
        <Box  h={{base:"200px",md:"300px",lg:"400px"}} >
          <Image
            boxSize={"100%"}
            objectFit="fill"
            src={craouselData[counter].url}
            alt="img"
            width={"100%"}
            className="darken"
          />
        </Box>
       
  );
};
  
  



export default Slider;