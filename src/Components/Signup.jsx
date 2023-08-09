import { Box, Button, FormControl, FormLabel, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const toast = useToast()
    const nav = useNavigate()
  
    const [data, setData] = useState({
     email: "",
     password: ""
    })
    const {email, password} = data
    const handleChange=(e)=>{
     setData({...data, [e.target.name]: e.target.value})
    }

    // storing data in localstorage
    const handleClick=()=>{
     if (!email.trim()) {
        toast({
          title: 'Error',
          description: 'Email is required',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        return;
     }
     if (!password.trim()) {
        toast({
          title: 'Error',
          description: 'Password is required',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        return;
     }

     const result = localStorage.setItem('Verification',JSON.stringify(data))
     console.log(data)
     toast({
        title: 'Data saved successfully' ,
        description: 'Saved successfully',
        position: 'top',
        status: 'success'
     })
     nav('/signin')
    }
    
    return (
      <Box h={'100vh'} mt={'18px'}>
        <Box bg={'blue.100'} m={'auto'} w={{ base: '90%', md: '50%', lg: '28%' }} h={'550px'} borderRadius={'10px'} padding={'8px'} shadow={'10px 10px 10px 7px teal'}>
          <Text align={'center'} color={'black'} fontSize={'30px'}>Signup</Text>
          <Text align={'center'} m={'10px'} color={'teal'}>Let's get started<br />First create your account</Text>

          <Box m={'auto'} borderRadius={'20px'} p={'10px'} bg={'white'} h={'400px'} w={'90%'}>
            <Image borderRadius={'50%'} mt={'5px'} ml={'130px'} h={'50px'} w={'50px'} src='https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png' />


            <FormLabel mt={'25px'} fontSize={'22px'}>Email:</FormLabel>
            <FormControl id="email" isRequired>
              <Input
                w={'99%'}
                m={'auto'}
                bg={'teal.100'}
                color={'black'}
                border={'2px solid white'}
                type='email'
                name='email'
                value={email}
                placeholder='User Email'
                onChange={handleChange} />
            </FormControl>

            <FormLabel mt={'25px'} fontSize={'22px'}>Password:</FormLabel>
            <FormControl id="password" isRequired>
              <Input
                w={'99%'}
                m={'auto'}
                bg={'teal.100'}
                color={'black'}
                border={'2px solid white'}
                type='password'
                name='password'
                value={password}
                placeholder='Password'
                onChange={handleChange} />
            </FormControl>

            <Button ml={'80px'} mt={'30px'} bg={'green.100'} color={'black'} fontSize={'17px'} onClick={handleClick}>Submit here</Button>
            <Text fontSize={'15px'} mt={'15px'} align={'center'} fontWeight={'600'} color={'teal'}>Already a member? <a href='/signin'>Login</a> </Text>
          </Box>
        </Box>
      </Box>
    )
}

export default Signup