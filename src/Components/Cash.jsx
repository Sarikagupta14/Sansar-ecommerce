import { Box, Button, Flex, FormControl, FormLabel,  Input,  useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cash = () => {
  const nav = useNavigate()
    const Toast= useToast()
    const [data,setData] = useState({
      user: ""
   })
    const {user} = data

    const match = JSON.parse(localStorage.getItem('userDetails'))
   console.log(match)
    const handleClick=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
  
    const handleSubmit=()=>{
      const match = JSON.parse(localStorage.getItem('userDetails'))
      console.log(match)
      if(data.user === match.address){
        Toast({
          title: 'Details recorded',
          description: "Product will be delievered to your address",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top'
        })
        localStorage.removeItem('cartItems')
        nav('/')
        
      }
      else{
        Toast({
          title: 'Re-enter Your address',
        
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      
      }
    //   if (!user.trim()) {
    //     Toast({
    //       title: 'Error',
    //       description: 'Address not matched',
    //       status: 'error',
    //       duration: 2000,
    //       isClosable: true,
    //     })
    //     return;
    //  }
   
  
 
    }
  return (
    <Box   h={'492px'}>
 <Box ml={'50px'} mt={'5px'} >
  
   <FormControl id="user" isRequired>
  
  <FormLabel pt={'70px'} ml={'5px'} color={'black'} fontSize={'20px'} fontWeight={'600'} >Address: </FormLabel>

  <Input
  border={'1px solid teal'}
  w={{base:'90%',md:'90%',lg:'90%'}}
  type= 'text'
   name='user'
     color={'black'}
   value={user}
   onChange={handleClick}
   _placeholder={{
    color: 'gray',
    opacity: 1,
   }}
   placeholder='Address' 
 />
 </FormControl>
  


 <Box  pb={'35px'} m={'auto'} >
 <Button display={'flex'} justifyContent={'center'} m={'auto'} w={'50%'} border={'1px solid gray'} fontWeight={'600'} color={'black'} bg={'#E5E7E9'}  mt={'40px'} onClick={handleSubmit}>Confirm Order</Button>
 </Box>

</Box>
    </Box>
   )
}

export default Cash
   