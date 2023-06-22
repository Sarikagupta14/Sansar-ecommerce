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
    <Box backgroundSize={['cover','content']} backgroundPosition={'center'}  h={'492px'} borderBottomLeftRadius={'23px'} backdropBlur={'2px'} bgImg={'https://sellercraft.co/wp-content/uploads/2023/03/shutterstock-769525906-e1565927344536.png'} >
 <Box ml={'50px'} mt={'5px'} >
  
   <FormControl id="user" isRequired>
  
  <FormLabel pt={'70px'} ml={'5px'} color={'black'} fontSize={'20px'} fontWeight={'600'} >Address: </FormLabel>

  <Input
  border={'1px solid teal'}
  w={{base:'90%',md:'90%',lg:'60%'}}
  type= 'text'
   name='user'
     color={'black'}
   value={user}
   onChange={handleClick}
   _placeholder={{
    color: 'red.500',
    opacity: 1,
   }}
   placeholder='Address' 
 />
 </FormControl>
  


 <Box w={'20%'} pb={'35px'} m={'auto'} >
 <Button fontWeight={'extrabold'} color={'black'} bg={'red.300'}  mt={'100px'} onClick={handleSubmit}>PAY</Button>
 </Box>


</Box>
    </Box>
   )
}

export default Cash
   