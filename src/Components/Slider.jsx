

import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Slider = () => {
  return (
    <Flex direction={{base:"column",md:"column",lg:"row"}}>
      <Box h={{base:"250px", md:"590px",lg:"500px"}} >
      <Box
        as="video"
       w="100%"
        m="auto"
      mt={{base:"-63px",lg:"0px"}}
       pr={{lg:'20px'}}
        _hover={{ all: "none" }}
        // borderRadius={"20px"}
        objectFit={{base:"contain",md:"contain",lg:"inherit"}}
        height={{ base: "350px", md: "750px", lg: "500px" }}
        autoPlay
        loop
        muted
        onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
        }}
      >
        <source src=" https://v4.cdnpk.net/videvo_files/video/free/video0460/large_watermarked/_import_60cc3145946a68.81672487_FPpreview.mp4
" />
      </Box>

      <Box mt={{base:'-220px',md:'-500px',lg:"-400px"}} w={'100%'}>
  <Text align={'center'} color={'#F7444E'} fontWeight={'extrabold'} fontFamily={'cursive'} fontSize={{base:'22px',md:'30px',lg:'4xl'}}>SALE 20% OFF</Text>
  <Text align={'center'} color={'white'} fontSize={{base:'25px',md:'35px',lg:'40px'}}> ON EVERYTHING</Text>
 
 <Text align={'center'} color={'#A6ACAF'} fontSize={{base:'15px',md:'15px',lg:'20px'}}>Shop more, save more!!</Text>
   <Box align="center" mt={{base:'5px',md:'5px',lg:'10px'}}>
    <Button  borderBottom={'1px solid white'}>SHOP NOW</Button>
    </Box>
</Box> 

      </Box>
    

    <Flex direction={{base:'row',md:"row",lg:"column"}} gap={'10px'} w={{base:"100%",lg:'40%'}}>
   
      
      <Box 
      // padding={'20px'}      
        as="video"
        width={{base:"50%",lg:"100%"}}
        m="auto"
       
        _hover={{ all: "none" }}
        // borderRadius={"20px"}
        objectFit={{base:"cover",lg:"inherit"}}
        height={{ base: "50%", md: "250px", lg: "250px" }}
        autoPlay  
        loop
        muted
        onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
        }}
      >
        <source src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_614f078b03bbf5.50327825_FPpreview.mp4" />
      </Box>
      {/* https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_605eee8b52cbb4.00054974_FPpreview.mp4 */}
       
      <Box       
        as="video"
        width={{base:"50%",lg:"100%"}}
        m="auto"
       
        _hover={{ all: "none" }}
        // borderRadius={"20px"}
        objectFit={{base:"cover",lg:"inherit"}}
        height={{ base: "50%", md: "250px", lg: "250px" }}
        autoPlay
        loop
        muted
        onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
        }}
      >
        <source src="https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_606083b6f08ae2.25578120_FPpreview.mp4" />
      </Box>




    </Flex>
    </Flex>
  )
}

export default Slider