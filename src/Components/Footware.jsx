import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputLeftElement, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";

const Footware = () => {
  const result = JSON.parse(localStorage.getItem('email'))
  const [data, setData] = useState([])
  const [userData, setUser] = useState({ search: '' });
  const fetchApi=async()=>{
     
      try{
          const res= await fetch ('https://jsonserver-production-f85d.up.railway.app/footwareData')
          const result = await res.json()
          // console.log(result)
          setData(result)
      }
      catch(error){
          console.log(error)
      }
      }
      const handlechange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };
   
    
  useEffect(()=>{
      fetchApi()
      // console.log(data)
  })
return (
  <Box w={'95%'} m={'auto'}>
                   {/* Input group */}
<Flex ml="20px" mb={'-14'} w={{ base: "80%", md: "50%", lg: "30%" }}>
<InputGroup>
<InputLeftElement
    ml="12px"
    mt="13px"
    h="35px"
    bgColor="transparent"
    pointerEvents="none"
    children={<FcSearch />}
    color="gray.300"
  />
  <Input
  mb={'20px'}
    bgColor="gray.100"
    border="2px solid teal"
    mt="10px"
    h="40px"
    w="100%"
    name="search"
    value={userData.search}
    ml="10px"
    onChange={handlechange}
    color="black"
    type="search"
    placeholder="Search here"
/>
</InputGroup>
</Flex>
  <Heading color={'white'}>Women's wear</Heading>
<SimpleGrid gap={'50px'}
columns={[1,2,3,4]}>{
  data && data.filter((item) => {
    if (!userData.search) { 
      console.log(userData.searchitem)
      return item;
   
    } else if (
      item.brand?.toLowerCase().includes(userData.search.toLowerCase())
    ) {
      return item;
    } else if (
      item.name?.toLowerCase().includes(userData.search.toLowerCase())
    ) {
      return item;
    } else {
    
      return null;
    
    }
  }
  )
  .map((item)=>{
      return(
        <Box
        p="10px"
        border={'2px solid black'}
        borderTopLeftRadius={'30px'}
        borderBottomRightRadius={'30px'}
        boxShadow={'10px 10px 10px black'}> 
         
        <Image  borderTopLeftRadius={'15px'} h={'270px'} w={'250px'} src={item.image} alt=''/>
        <Heading p={'5px'} fontSize={'18px'}>{item.name}</Heading>
        <Text p={'5px'} color={'teal'} fontSize={'20px'} fontWeight={'600'}>{item.brand}</Text>
        <Flex ml={'5px'} gap={'10px'}>
         <Text fontSize={'18px'} fontWeight={'500'} color={'gray'}>₹{item.price}</Text>
         <Text fontWeight={'600'}>-</Text>
         <Text fontSize={'18px'} fontWeight={'600'} color={'red'} textDecoration="line-through" textDecorationColor="red">(₹{item.discount_price})</Text>
        </Flex>

        <Link to={result ? "/details": '/signup'} state={item}>
        <Button border={'2px solid black'} bg={'green.100'} mb="20px" color={'red'}>View more</Button>
        </Link>
</Box>
      )
  })
  
}
</SimpleGrid>
</Box>
)
}


export default Footware
