import { Box, Button, Flex, Heading, Image, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
  const {state} = useLocation();
   const item = state
  //  console.log(item)
  const toast = useToast()
  const [data, setData] = useState([]);
  const nav = useNavigate()

  const handleCart=(item)=>{ 
  setData([...data, item]);
  // setting data of cart items in localstorage
    localStorage.setItem("cartItems", JSON.stringify([...data, item]));
   
  
    toast({
      title: 'Item added to cart',
      position: 'top',
      status: 'success',
      color: 'pink'
    })
    nav('/addCart')
  }
  //getting products added in cart in array
   useEffect(()=>{
      const storedData = JSON.parse(localStorage.getItem('cartItems')) || [];
      setData(storedData);
      
   },[])
   console.log(data)
  //  console.log(sarika.length)
  return (
    <Box
    w={{base:'100%',md:'100%',lg:'80%' }}
    m={'auto'}
    mt={'20px'}
    p="10px"
    border={'2px solid black'}
    borderTopLeftRadius={'30px'}
    borderBottomRightRadius={'30px'}
    boxShadow={'10px 10px 10px black'}> 
     
     <Flex direction={{base:'column',md:'column', lg:'row'}}>
      <Flex justifyContent={'space-between'}>
      <Box>
     <Image  borderTopLeftRadius={'15px'} h={'270px'} w={'250px'} src={item.image} alt=''/>
     </Box>
     <Box mt={'40px'} display={{base:'none',lg:'none'}}>
    <Image h={'100px'} src='https://github.com/shwetra/assa/assets/104376252/a6087b0b-1c78-48d6-a35f-2eb464231fd3' alt=''/>
    <Button ml={'40px'}   onClick={() => handleCart(item)} border={'2px solid black'} bg={'green.100'} mb="20px" color={'red'}>Add to Cart</Button>
    </Box>
      </Flex>
    

    <Box ml={{base:'0px',md:'0px',lg:'50px'}}>
    <Heading p={'5px'} textDecoration={'underline'} color={'teal'} fontSize={'20px'} fontWeight={'600'}>{item.name}</Heading>
    <Text p={'5px'} fontSize={'18px'} >{item.brand}</Text>
    <Text w={{base:'95%',lg:'600px'}} align={'justify'} p={'5px'} color={'black'} fontSize={'18px'} fontWeight={'500'}>{item.description}</Text>
    <Flex ml={'5px'} gap={'10px'}  mt={'30px'}>
     <Text fontSize={'18px'} fontWeight={'500'} color={'gray'}>₹{item.price}</Text>
     <Text fontWeight={'600'}>-</Text>
     <Text fontSize={'18px'} fontWeight={'600'} color={'red'} textDecoration="line-through" textDecorationColor="red">(₹{item.discountprice || item.discount_price} ) </Text>
    </Flex>
    
  
    </Box>
    <Box mt={'40px'} display={{md:'none',lg:'flex'}}>
      <Box>
      <Image h={'100px'} src='https://github.com/shwetra/assa/assets/104376252/a6087b0b-1c78-48d6-a35f-2eb464231fd3' alt=''/>
    <Button ml={'40px'}   onClick={() => handleCart(item)} border={'2px solid black'} bg={'green.100'} mb="20px" color={'red'}>Add to Cart</Button>
      </Box>
 
    </Box>
    </Flex>

    </Box>
  )
}

export default Details