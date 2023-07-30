import { Box, Flex, Heading, Image, Input, InputGroup, InputLeftElement, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Footer from './Footer'
import { FcSearch } from "react-icons/fc";
import Slider from './Slider'


const Home = () => {
    const result = JSON.parse(localStorage.getItem('email'))
    const[data, setData] = useState([])
    const[data1, setData1] = useState([])
    const[data2, setData2] = useState([])
    const[data3, setData3] = useState([])

    const [userData, setUser] = useState({ search: '' });
  
    const fetchApi=async()=>{
        try{
            const res= await fetch ('https://frista-u1pn.onrender.com/Sansar')
            const result = await res.json()
            // console.log(result)
            setData(result)
        }
        catch(error){
            console.log(error)
        }
    }

    // secont api 
    const fetchApi1=async()=>{
      try{
          const res= await fetch ('https://frista-u1pn.onrender.com/Sansar1')
          const result = await res.json()
          // console.log(result)
          setData1(result)
      }
      catch(error){
          console.log(error)
      }
  }


  // thist  data 
  const fetchApi2=async()=>{
    try{
        const res= await fetch ('https://frista-u1pn.onrender.com/Sansar2')
        const result = await res.json()
        // console.log(result)
        setData2(result)
    }
    catch(error){
        console.log(error)
    }
}

// fetching last row data 
const fetchApi3=async()=>{
  try{
      const res= await fetch ('https://frista-u1pn.onrender.com/Sansar3')
      const result = await res.json()
      // console.log(result)
      setData3(result)
  }
  catch(error){
      console.log(error)
  }
}


        useEffect(()=>{
        fetchApi()
        fetchApi1()
        fetchApi2()
        fetchApi3()
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
<Flex ml="35px" mb={'-14'} w={{ base: "80%", md: "50%", lg: "30%" }}>
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
  
    zIndex={'1'}
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

    <Box>
      <Slider/>
      </Box>

     {/* Section-2 */}
     <Box backgroundColor={'#F6F7F9'}>
    
     <Box pt={'50px'} pb={'0px'} m={'auto'}>
      <Heading align={'center'}  color={'black'} fontWeight={'700'} fontSize={'20px'}>DISCOVER THE PERFECT PRODUCTS FOR YOUR EVERY NEED</Heading>
      <Box  w={{base:'95%',md:'90%',lg:'30%'}} m={'auto'} mt={'5px'}>
      <Text align={'center'} fontSize={'15px'} color={'#5F6A6A'}>Welcome to Sansar! Your one-stop shop for all your shopping needs.
      Explore our extensive collection of high quality products and find exactly what you're looking for.</Text>
      </Box>
     </Box>

{/* video and some product  */}
<Flex direction={{base:"column",md:"column",lg:"row"}} mt={{base:'10px',lg:'-50px'}}>
<Box
        as="video"
        width={{base:"100%",lg:"50%"}}
        m="auto"
       
        _hover={{ all: "none" }}
        borderRadius={"20px"}
        objectFit={{base:"cover",lg:"inherit"}}
        height={{ base: "350px", md: "750px", lg: "400px" }}
        autoPlay
        loop
        muted
        onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
        }}
      >
        <source src="https://v4.cdnpk.net/videvo_files/video/free/video0460/large_watermarked/_import_60cc33d23a8412.89418437_FPpreview.mp4" />
      </Box>



{/* down section of video  */}
<Box m="auto">
<SimpleGrid 
          
            m={'auto'}
            mb={'50px'}
            columns={[1,2,3,3]}
            mt={'100px'}
           >  {
         
    data3 && data3
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
            backgroundColor={'white'}
            // borderTop={'1px solid #EAEDED'}
            // borderLeft={'1px solid #EAEDED'}
            backdropBlur={'5px'}
            borderRadius={'20px'}
            w={'220px'}
            // borderTopLeftRadius={'30px'}
            // borderBottomRightRadius={'30px'}
            // boxShadow={'10px 10px 10px black'}
            > 
               <Link to={result ? "/details" : '/signup'} state={item}>
            <Image borderRadius={'10px'} h={'150px'} w={'160px'} src={item.image} alt=''/>
            {/* <Heading color={'#757575'} p={'5px'} fontSize={'18px'}>{item.name}</Heading> */}
            <Text p={'5px'} color={'black'} fontSize={'18px'} fontWeight={'600'}>{item.brand}</Text>
            <Flex ml={'5px'} gap={'10px'}>
             <Text fontSize={'15px'} color="#636363" fontWeight={'500'} >₹{item.price}</Text>
             {/* <Text fontWeight={'600'}>-</Text>
             <Text fontSize={'18px'} fontWeight={'600'} color={'red'} textDecoration="line-through" textDecorationColor="red">₹({item.discount_price})</Text> */}
            </Flex>
          </Link>
            </Box>
        )
    })
    
}
</SimpleGrid>
</Box>
</Flex>

   

 
<SimpleGrid gap={'50px'}
            w={'80%'}
            m={'auto'}
            mb={'50px'}
            columns={[1,2,3,5]}
            
           >  {
         
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
            backgroundColor={'white'}
            // borderTop={'1px solid #EAEDED'}
            // borderLeft={'1px solid #EAEDED'}
            backdropBlur={'5px'}
            borderRadius={'20px'}
            w={'220px'}
            // borderTopLeftRadius={'30px'}
            // borderBottomRightRadius={'30px'}
            // boxShadow={'10px 10px 10px black'}
            > 
               <Link to={result ? "/details" : '/signup'} state={item}>
            <Image borderRadius={'10px'} h={'150px'} w={'160px'} src={item.image} alt=''/>
            {/* <Heading color={'#757575'} p={'5px'} fontSize={'18px'}>{item.name}</Heading> */}
            <Text p={'5px'} color={'black'} fontSize={'18px'} fontWeight={'600'}>{item.brand}</Text>
            <Flex ml={'5px'} gap={'10px'}>
             <Text fontSize={'15px'} color="#636363" fontWeight={'500'} >₹{item.price}</Text>
             {/* <Text fontWeight={'600'}>-</Text>
             <Text fontSize={'18px'} fontWeight={'600'} color={'red'} textDecoration="line-through" textDecorationColor="red">₹({item.discount_price})</Text> */}
            </Flex>
          </Link>
            </Box>
        )
    })
    
}
</SimpleGrid>
{/* Footer */}
       <Box>
          <Heading align="center" color={'black'} fontSize={'20px'}>Why Choose Us?</Heading>
          <Text  align={'center'} fontSize={'15px'} color={'#5F6A6A'}>At Sansar, We take Pride in offering an exceptional Shopping Experience. Here is, why you should choose us.</Text>
        
        
    <SimpleGrid w={'50%'} m={'auto'} pt={'20px'} columns={[2,2,4]} gap={{base:'20px',lg:'20px'}}>
       
       <Box  m={{base:'auto'}} align={'center'}>
           <Image h={'90px'} w={'90px'}  src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/6f6349db-f4e0-4472-9c74-3c9b73efc1d8'/>
           {/* <Text color={'black'} fontWeight={'600'} fontSize={'25px'}>Free Shipping</Text> */}
           {/* <Text fontSize={'15px'} color={'#002c3e'}>Free shipping on all products above Rs.500</Text> */}
       </Box>
       
       <Box  m={{base:'auto'}}    align={'center'} >
         <Image h={'90px'} w={'90px'}  src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/81703e56-9f27-4adc-a468-c29ebd12e683'/>
           {/* <Text color={'black'} fontWeight={'600'} fontSize={'25px'}>30 Days Return</Text> */}
           {/* <Text fontSize={'15px'} color={'#002c3e'}>Simply return it within 30 days for exchange</Text> */}
       </Box>
       
       <Box  m={{base:'auto'}}  align={'center'}>
       <Box>
         <Image h={'90px'} w={'90px'}  src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/fbd2871c-6a95-4a3f-9ccd-47ea700abeaf'/>
           {/* <Text color={'black'} fontWeight={'600'} fontSize={'25px'}>100% Payment Secure</Text> */}
           {/* <Text fontSize={'15px'} color={'#002c3e'}>Get your 100% payment back after return everytime</Text> */}
       </Box>
       </Box>
       
       <Box  m={{base:'auto'}}  align={'center'}>
       <Box>
         <Image h={'90px'} w={'90px'} src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/b2269f6c-dab7-4ceb-8ec7-113635f71c93'/>
           {/* <Text color={'black'} fontWeight={'600'} fontSize={'25px'}>100% Payment Secure</Text> */}
           {/* <Text fontSize={'15px'} color={'#002c3e'}>Get your 100% payment back after return everytime</Text> */}
       </Box>
       </Box>
       
       </SimpleGrid>
        
        
        </Box>

     <Flex
        w="97%"
        m="auto"
        mt="20px"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        gap={"20px"}
      >
        <Box w={{ base: "100%", md: "100%", lg: "50%" }} mb="20px">
          <Image
           mb="20px"
            w="100%"
            src="https://github.com/shwetra/assa/assets/104376252/6e6baa8d-106e-41d1-b925-458613b0e979"
            alt=""
          />
          <Image
            w="100%"
            src="https://github.com/shwetra/assa/assets/104376252/8603b09f-b048-441c-9e0c-8850e6019110"
            alt=""
          />
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "50%" }} >
          <Image
          mb="20px"
            w="100%"
            src="https://github.com/shwetra/assa/assets/104376252/ae85d4b2-4f93-43de-8e21-58be10ce54f1"
            alt=""
          />
          <Image
            w="100%"
            src="https://github.com/shwetra/assa/assets/104376252/d0ef60f8-fa2e-4925-861b-b7440a08f968"
          />
        </Box>
      </Flex>

{/* second data  */}
<Box border={'2px solid gray'} m={'auto'}  mt={'10px'} w={'20%'}>
<Heading  p={'5px'} color={'black'} fontSize={'25px'} align="center"  textDecorationStyle={'double'} textDecorationLine={'blink'}>Trending Categories</Heading>
</Box> 
<SimpleGrid gap={'50px'}
            w={'80%'}
            m={'auto'}
            mb={'50px'}
            columns={[1,2,3,5]}
            mt={'50px'}
           >  {
         
    data1 && data1
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
            backgroundColor={'white'}
            // borderTop={'1px solid #EAEDED'}
            // borderLeft={'1px solid #EAEDED'}
            backdropBlur={'5px'}
            borderRadius={'20px'}
            w={'220px'}
            // borderTopLeftRadius={'30px'}
            // borderBottomRightRadius={'30px'}
            // boxShadow={'10px 10px 10px black'}
            > 
               <Link to={result ? "/details" : '/signup'} state={item}>
            <Image borderRadius={'10px'} h={'150px'} w={'160px'} src={item.image} alt=''/>
            {/* <Heading color={'#757575'} p={'5px'} fontSize={'18px'}>{item.name}</Heading> */}
            <Text p={'5px'} color={'black'} fontSize={'18px'} fontWeight={'600'}>{item.brand}</Text>
            <Flex ml={'5px'} gap={'10px'}>
             <Text fontSize={'15px'} color="#636363" fontWeight={'500'} >₹{item.price}</Text>
             {/* <Text fontWeight={'600'}>-</Text>
             <Text fontSize={'18px'} fontWeight={'600'} color={'red'} textDecoration="line-through" textDecorationColor="red">₹({item.discount_price})</Text> */}
            </Flex>
          </Link>
            </Box>
        )
    })
    
}
</SimpleGrid>

      {/* second section video */}
      <Box
        as="video"
        width="97%"
        m="auto"
        mt="60px"
        mb="50px"
        _hover={{ all: "none" }}
        borderRadius={"20px"}
        objectFit={{base:"cover",lg:"inherit"}}
        height={{ base: "450px", md: "750px", lg: "600px" }}
        autoPlay
        loop
        muted
        onEnded={(e) => {
          e.target.currentTime = 0; // Reset video playback
          e.target.play(); // Start playing again
        }}
      >
        <source src="https://github.com/shwetra/assa/assets/104376252/6006d114-0bd3-43e3-9827-522c3529e97b" />
      </Box>



{/* down section of video  */}
<Box border={'2px solid gray'} m={'auto'}  mt={'10px'} w={'20%'}>
<Heading p={'5px'} color={'black'} fontSize={'25px'} align="center"  textDecorationStyle={'double'} textDecorationLine={'blink'}>Popular Categories</Heading>
</Box>
<SimpleGrid gap={'50px'}
            w={'80%'}
            m={'auto'}
            mb={'50px'}
            columns={[1,2,3,5]}
            mt={'50px'}
           >  {
         
    data2 && data2
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
            backgroundColor={'white'}
            borderRadius={'20px'}
            w={'220px'}
          
            > 
               <Link to={result ? "/details" : '/signup'} state={item}>
            <Image borderRadius={'10px'} h={'150px'} w={'160px'} src={item.image} alt=''/>
            {/* <Heading color={'#757575'} p={'5px'} fontSize={'18px'}>{item.name}</Heading> */}
            <Text p={'5px'} color={'black'} fontSize={'18px'} fontWeight={'600'}>{item.brand}</Text>
            <Flex ml={'5px'} gap={'10px'}>
             <Text fontSize={'15px'} color="#636363" fontWeight={'500'} >₹{item.price}</Text>
             {/* <Text fontWeight={'600'}>-</Text>
             <Text fontSize={'18px'} fontWeight={'600'} color={'red'} textDecoration="line-through" textDecorationColor="red">₹({item.discount_price})</Text> */}
            </Flex>
          </Link>
            </Box>
        )
    })
    
}
</SimpleGrid>

{/* last  */}



<Footer/>
</Box>
</Box>
  )
}

export default Home