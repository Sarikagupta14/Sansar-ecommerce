import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text,useBreakpointValue, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Cart = () => {
  const smallScreen = useBreakpointValue({base:false,md:false,lg:true})
  const Toast = useToast()
  const nav = useNavigate()
const[data, setData] = useState({
  user: "",
  email: "",
  mobile: "", 
  address: "",
  pincode: "",
  card: ""
})
const {user, email, mobile, address, pincode,card} = data
  const handledetails=(e)=>{
   setData({...data,[e.target.name]: e.target.value})
  }


// getting data for cartitems for payment page
  const update = JSON.parse(localStorage.getItem('cartItems'))
  console.log(update)

  const handleClick=()=>{
    nav('/payment')

   
      
    // setting details in storage for userdetails
  localStorage.setItem('userDetails',JSON.stringify(data))
  // console.log(setuser)
  
    Toast({
      status: "success",
      title: "Your details has been added successfully",
      position: "top"
    })

    if (!user.trim()) {
      Toast({
        title: 'Error',
        description: 'Username is required',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    
    }
   if (!mobile.trim()) {
      Toast({
        title: 'Error',
        description: 'Phone number is required',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
   }
      if (!email.trim()) {
        Toast({
          title: 'Error',
          description: 'Email is required',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
 }

 if (!address.trim()) {
  Toast({
    title: 'Error',
    description: 'Address is required',
    status: 'error',
    duration: 2000,
    isClosable: true,
  })
}
  
if (!pincode.trim()) {
  Toast({
    title: 'Error',
    description: 'Pincode is required',
    status: 'error',
    duration: 2000,
    isClosable: true,
  })
}
if (!card.trim()) {
  Toast({
    title: 'Error',
    description: 'card is required',
    status: 'error',
    duration: 2000,
    isClosable: true,
  })
}
}
  return (
    <Flex direction={{base:'column', lg:'row'}}>

      {/* Cart items */}
    <Box w={{base:'90%',lg:'48%'}} ml={'2%'} mt={'20px'}>
    <Heading color={'#5D6D7E'} fontSize={'25px'} letterSpacing={'2px'} ml={'100px'}> Cart Items</Heading>
    {
    update && update.map((item)=>{
        return(
            <Flex 
            mt={'20px'}
            p="10px"
            border={'1px solid gray'}
           borderRadius={'20px'}>
            
           
             <Box>
             <Image  m='20px' h={'150px'} w={'150px'} src={item.image} alt=''/>
          </Box>
           
            <Box mt={'50px'} ml={'40px'} >
            <Heading fontSize={'20px'}>{item.name}</Heading>
            <Text color={'#85929E'} fontSize={'15px'}>{item.brand}</Text>
            <Text color={'#85929E '} fontSize={'15px'}>₹{item.price}</Text>
           <Link to="/details" state={item}>
           </Link>
            </Box> 
           </Flex>
           
        )
    })}
</Box>
   
   {/* User details */}
   {smallScreen ? (
<Box    ml={'55%'} borderRadius={'20px'} mt={'40px'} w={'40%'} h={'580px'}  border={'1px solid gray'} position={{lg:'fixed'}}>
 
 <Box>
 <Heading fontSize={'25px'} textDecoration={'underline'} mt={'15px'} align={'center'}>User Details</Heading>
 <Box ml={'50px'} mt={'5px'}>

 <FormControl>
  <FormLabel  fontSize={'20px'} fontWeight={'600'} >User Name:
  <Input
  border={'1px solid teal'}
  ml={'43px'}
   w={'60%'}
   mt={'20px'}
   type= 'text'
   name='user'
   placeholder='User name' 
   value={user}
   onChange={handledetails}/>
  </FormLabel>
  </FormControl>

  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>Mobile number:
   <Input
   border={'1px solid teal'}
   ml={'10px'}
   w={'60%'}
   mt={'20px'}
   type= 'number'
   name='mobile'
   placeholder='Mobile number' 
   value={mobile}
   onChange={handledetails}/>
  </FormLabel>
  </FormControl>

  
  <FormControl>
<FormLabel fontSize={'20px'} fontWeight={'600'}>User Email:
   <Input
   border={'1px solid teal'}
   ml={'50px'}
   w={'60%'}
   mt={'20px'}
   type= 'email'
   name='email'
   placeholder='User email' 
   value={email}
   onChange={handledetails}/>
  </FormLabel>
  </FormControl>
  
  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>Address:
   <Input
   border={'1px solid teal'}
   ml={'67px'}
   w={'60%'}
   mt={'20px'}
   type= 'text'
   name='address'
   placeholder='Address' 
   value={address}
   onChange={handledetails}/>
  </FormLabel>
  </FormControl>

  
  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>Pincode:
   <Input 
   border={'1px solid teal'}
   ml={'67px'}
   w={'60%'}
   mt={'20px'}
   type= 'number'
   name='pincode'
   placeholder='Pincode' 
   value={pincode}
   onChange={handledetails}/>
  </FormLabel>
  </FormControl>

  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>Card Number:
  <Input 
   border={'1px solid teal'}
   ml={'20px'}
   w={'60%'}
   mt={'20px'}
   type= 'password'
   name='card'
   onChange={handledetails}
   placeholder='Card number' 
   value={card}
  />
 
  </FormLabel>
  </FormControl>
  </Box>
<Box  m={'auto'} fontSize={'20px'} borderRadius={'15px'} mt={'40px'} w={'200px'} > 
   <Button onClick={handleClick}  color={'black'} border={'1px solid black'} bg={'gray.100'} fontWeight={'600'}>Proceed for payment</Button>
</Box>
</Box>
</Box>
): 
// small screen
(
  <Box  boxShadow={'10px 10px 10px 7px black'} m={'auto'} borderTopLeftRadius={'30px'}  ml={{lg:'55%'}} mt={'40px'}  w={{base:'90%',lg:'40%'}}  border={'2px solid black'} position={{lg:'fixed'}}>
 
 <Box>
 <Heading fontSize={'30px'} textDecoration={'underline'} mt={'15px'} align={'center'}>User Details</Heading>
 <Box ml={'50px'} mt={'5px'}>

 <FormControl>
  <FormLabel  fontSize={'20px'} fontWeight={'600'} >User Name: </FormLabel>
  <Input
  border={'1px solid teal'}
  
   w={'90%'}
   
   type= 'text'
   name='user'
   placeholder='User name' 
   value={user}
   onChange={handledetails}/>
 
  </FormControl>

  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>Mobile number:  </FormLabel>
   <Input
   border={'1px solid teal'}
   w={'90%'}
   type= 'number'
   name='mobile'
   placeholder='Mobile number' 
   value={mobile}
   onChange={handledetails}/>
   </FormControl>

  
  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>User Email: </FormLabel>
   <Input
   border={'1px solid teal'}
   
   w={'90%'}
   
   type= 'email'
   name='email'
   placeholder='User email' 
   value={email}
   onChange={handledetails}/>
 
  </FormControl>
  
  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>Address: </FormLabel>
   <Input
   border={'1px solid teal'}
  
   w={'90%'}

   type= 'text'
   name='address'
   placeholder='Address' 
   value={address}
   onChange={handledetails}/>
 
  </FormControl>

  
  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>Pincode: </FormLabel>
   <Input 
   border={'1px solid teal'}
  
   w={'90%'}
  
   type= 'number'
   name='pincode'
   placeholder='Pincode' 
   value={pincode}
   onChange={handledetails}/>
 
  </FormControl>

  <FormControl>
  <FormLabel fontSize={'20px'} fontWeight={'600'}>Card Number:</FormLabel>
  <Input 
   border={'1px solid teal'}
   
   w={'90%'}
   
   type= 'password'
   name='card'
   onChange={handledetails}
   placeholder='Card number' 
   value={card}
  />
 
  
  </FormControl>
  </Box>
<Box  m={'auto'} fontSize={'20px'} borderRadius={'15px'} mt={'20px'} w={'200px'} > 
   <Button onClick={handleClick} mb={'10px'} color={'white'} border={'1px solid black'} bg={'teal'} fontWeight={'600'}>Proceed for payment</Button>
</Box>
</Box>
</Box>
)} 
</Flex>
  )
}


export default Cart
