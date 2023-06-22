import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputLeftElement, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {TbTruckReturn} from 'react-icons/tb'
import {GiReturnArrow} from 'react-icons/gi'
import {GiTakeMyMoney} from 'react-icons/gi'
import Footer from './Footer'
import { FcSearch } from "react-icons/fc";
import Slider from './Slider'


const Home = () => {
    const result = JSON.parse(localStorage.getItem('email'))
    const[data, setData] = useState([])

    const [userData, setUser] = useState({ search: '' });
  
    const fetchApi=async()=>{
        try{
            const res= await fetch ('https://jsonserver-production-f85d.up.railway.app/Sansar')
            const result = await res.json()
            // console.log(result)
            setData(result)
        }
        catch(error){
            console.log(error)
        }
    }
        useEffect(()=>{
        fetchApi()
        // console.log(data)
    })
    const handlechange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
      };
  return (
    <Box overflowX={'hidden'}>
       
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
    bgColor="transparent"
    border="2px solid teal"
    mt="10px"
    h="40px"
    w="100%"
    name="search"
    value={userData.search}
    ml="10px"
    onChange={handlechange}
    color="white"
    type="search"
    placeholder="Search here"
/>
</InputGroup>
</Flex>
        <Slider/>
   
     {/* Section-2 */}
     <Flex justifyContent={'space-evenly'} mt={'20px'} direction={{base:'column',md:'row',lg:'row'}} gap={{base:'20px'}}>
       
        <Box  m={{base:'auto'}} boxShadow={'10px 10px 10px 6px gray'} align={'center'} h={{md:'180px', lg:'150px'}} w={'300px'} p={'10px'} borderRadius={'15px'} border={'1px solid gray'}>
            <Text color={'black'} fontWeight={'600'} fontSize={'25px'}> <TbTruckReturn/>Free Shipping</Text>
            <Text fontSize={'15px'} color={'#002c3e'}>Free shipping on all products above Rs.500</Text>
        </Box>

        <Box  m={{base:'auto'}}  boxShadow={'10px 10px 10px 6px gray'}  h={{md:'180px', lg:'150px'}} w={'300px'}  align={'center'} p={'10px'} borderRadius={'15px'} border={'1px solid gray'}>
            <Text color={'black'} fontWeight={'600'} fontSize={'25px'}><GiReturnArrow/>30 Days Return</Text>
            <Text fontSize={'15px'} color={'#002c3e'}>Simply return it within 30 days for exchange</Text>
        </Box>

    <Box display={{md:'none',lg:'flex'}} m={{base:'auto'}}  boxShadow={'10px 10px 10px 6px gray'}  h={{md:'180px', lg:'150px'}} w={'300px'}  align={'center'}  p={'10px'} borderRadius={'15px'} border={'1px solid gray'}>
        <Box  >
            <Text color={'black'} fontWeight={'600'} fontSize={'25px'}><GiTakeMyMoney/>100% Payment Secure</Text>
            <Text fontSize={'15px'} color={'#002c3e'}>Get your 100% payment back after return everytime</Text>
        </Box>
    </Box>
     </Flex>
    
   
         <Flex mt={'50px'} mb={'50px'} justifyContent={'space-evenly'}>
                <Button  bg="linear-gradient(to right, pink, gray)" h={'70px'} fontSize={{base:'20px',lg:'27px'}} fontWeight={'600'} color={'black'}>Top Interesting</Button>
                <Button  bg="linear-gradient(to right, pink, gray)"  h={'70px'} fontSize={{base:'20px',lg:'27px'}} fontWeight={'600'} color={'black'}>New Arrivals</Button>
         </Flex>

            <SimpleGrid gap={'50px'}
            w={'95%'}
            m={'auto'}
            mb={'50px'}
    columns={[1,2,3,4]}>  {
        
    data && data
    .filter((item) => {
      if (!userData.search) { 
        // console.log(userData.searchitem)
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
               <Link to={result ? "/details" : '/signup'} state={item}>
            <Image  borderTopLeftRadius={'15px'} h={'270px'} w={'250px'} src={item.image} alt=''/>
            <Heading p={'5px'} fontSize={'18px'}>{item.name}</Heading>
            <Text p={'5px'} color={'teal'} fontSize={'20px'} fontWeight={'600'}>{item.brand}</Text>
            <Flex ml={'5px'} gap={'10px'}>
             <Text fontSize={'18px'} fontWeight={'500'} color={'gray'}>₹{item.price}</Text>
             <Text fontWeight={'600'}>-</Text>
             <Text fontSize={'18px'} fontWeight={'600'} color={'red'} textDecoration="line-through" textDecorationColor="red">₹({item.discount_price})</Text>
            </Flex>
          </Link>
            </Box>
        )
    })
    
}
</SimpleGrid>
{/* Footer */}

<Footer/>
</Box>
  )
}

export default Home
