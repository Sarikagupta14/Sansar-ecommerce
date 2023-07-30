import { Box, Button, Flex, FormLabel, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const toast = useToast()
    const nav = useNavigate()
   
    const [data, setData] = useState({
     email: "",
     password: ""
    })
    const {email,password} = data
    const handleChange=(e)=>{
     setData({...data, [e.target.name]: e.target.value})
    }
    const handleClick=()=>{
    //   
    //  getting data from signup
     const text = JSON.parse(localStorage.getItem('Verification'))
    console.log(text)
    //  console.log(text)
     if(data.email === text.email && data.password === text.password){
        toast
        ({
            title: 'Login Successful',
            position: 'top',
            status: 'success'
        })
    // setting data of user in localstorage for further routes access--> will get this data in private route
        localStorage.setItem('email',JSON.stringify(email))
        nav('/')
    }
        else{
        toast({
            title: 'Login failed',
            description: ' Proceed to signup page',
            position: 'top',
            status: 'error'
        })
        }
     
      }
  return (
   
    <Box h={'100vh'} mt={'18px'}    objectFit={'cover'}  >
    <Flex>
     <Box bg={'teal.100'}   m={'auto'}   w={{base: '90%',md:'50%',lg:'30%'}} h={'550px'} borderRadius={'10px'} padding={'8px'} shadow={'10px 10px 10px 7px teal'}>
      <Text  align={'center'} color={'black'} fontSize={'30px'} >Login</Text>
        <Text align={'center'} m={'10px'} color={'teal'}>Get access to your Orders, Wishlist and Recommendations</Text>
  
  <Box m={'auto'} borderRadius={'20px'} p={'10px'} bg={'blackAlpha.800'} h={'400px'} w={'90%'}>
  <Image borderRadius={'50%'} mt={'5px'} ml={'130px'} h={'50px'} w={'50px'} src='https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'/>
   <FormLabel mt={'20px'} color={'white'} fontSize={'22px'}>Email:  </FormLabel>
   <Input 
      w ={'99%'}
      m={'auto'}
      bg={'teal.100'}
      color={'black'}
      border={'2px solid white'}
      type='email'
      name='email'
      value={email}
      placeholder='User Email'
      onChange={handleChange}/>
    
    
    <FormLabel mt={'25px'} color={'white'} fontSize={'22px'}>Password:</FormLabel>
    <Input
     w ={'99%'}
     m={'auto'}
      bg={'teal.100'}
      color={'black'}
      border={'2px solid white'}
      type='password'
      name='password'
      value={password}
      placeholder='User number'
      onChange={handleChange}/>
 
  
  
    <Button ml={'80px'} mt={'30px'} bg={'green.100'} color={'black'} fontSize={'17px'} onClick={handleClick}>Submit here</Button>
    {/* <Button m={'2px'} bg={'pink.100'} color={'black'} fontSize={'17px'} onClick={handleSignup}>Create account</Button> */}
    <Text  fontSize={'15px'} mt={'15px'} align={'center'} fontWeight={'600'} color={'teal'}>New to Website? <a href='/signup'>Create an account</a> </Text>
   
  </Box>
    </Box>
    </Flex>
   </Box>
  )
}
export default Signin
