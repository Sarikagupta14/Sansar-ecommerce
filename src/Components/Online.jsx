import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Text, Toast, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FcUnlock} from 'react-icons/fc'
import {VscCalendar} from 'react-icons/vsc'
import {BsCalendarMonth} from 'react-icons/bs'
import {FaUserTie} from 'react-icons/fa'
import {BsCreditCardFill} from 'react-icons/bs'
import { TbPassword } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
const Online = () => {
  const nav = useNavigate()
    const Toast= useToast()
    const [data,setData] = useState({
        card: "",
        user: "",
        month: "",
        cvv: "",
        year: ""
    })
    const {card,user,month,cvv,year} = data

    const match = JSON.parse(localStorage.getItem('userDetails'))
   console.log(match)
    const handleClick=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
      if (!user.trim()) {
        Toast({
          title: 'Error',
          description: 'Cardholder name not matched',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        return;
     }
     if (!card.trim()) {
      Toast({
        title: 'Error',
        description: 'Cardholder name not matched',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return;
   }
   if (!month.trim()) {
    Toast({
      title: 'Error',
      description: 'Month is missing',
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
    return;
 }
 if (!year.trim()) {
  Toast({
    title: 'Error',
    description: 'Year is missing',
    status: 'error',
    duration: 2000,
    isClosable: true,
  })
  return;
}
   if (!cvv.trim()) {
    Toast({
      title: 'Error',
      description: 'CVV not entered',
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
    return;
 }
    //   console.log(data)
    if(data.card === match.card){
        Toast({
           status: 'success',
           title: "Payment done",
           description: 'Your Products will be delieverd soon',
           position: 'top'
        })
        localStorage.clear('cartItems')
        nav('/')
    }
    else{
        Toast({
            status: 'error',
            title: "Payment failed",
            description: "Kindly check your details!",
            position: 'top'
         })
    }
    }
  return (
    <Box objectFit={'cover'} borderBottomLeftRadius={'23px'} backdropBlur={'2px'} bgImage={'https://wallpaperaccess.com/full/4597118.jpg'} >
 <Box ml={'50px'} mt={'5px'} >
  <Text color={'teal'} align={'center'} fontSize={'18px'} fontWeight={'600'}>Provide your credit card information</Text>
   <Image ml={'200px'} h={'100px'} w={'100px'} src="https://www.pngall.com/wp-content/uploads/5/Online-Payment-PNG-Photo.png" alt=""/>
  
   <FormControl id="user" isRequired>
  <Flex> <Box mt={'5px'} color={'teal'} fontSize={'20px'}><FaUserTie/></Box>
  <FormLabel ml={'5px'} color={'white'} fontSize={'20px'} fontWeight={'600'} >Cardholder Name: </FormLabel>
 </Flex> 
  <Input
  border={'1px solid teal'}
  w={{base:'90%',md:'90%',lg:'60%'}}
  type= 'text'
   name='user'
     color={'white'}
   value={user}
   onChange={handleClick}
   _placeholder={{
    color: 'red.500',
    opacity: 1,
   }}
   placeholder='User name' 
 />
 </FormControl>
  
{/* <Select>
    <option value="Mastercard">MaterCard</option>
    <option value="paytm">Paytm</option>
    <option value="UPI">UPI</option>
</Select> */}


<Box>  
<FormControl id="password" isRequired>
<Flex> <Box mt={'5px'} color={'teal'} fontSize={'20px'}><BsCreditCardFill/></Box>
   <FormLabel ml={'5px'} color={'white'} fontSize={'20px'} fontWeight={'600'} >Card number:</FormLabel>
  </Flex>
  <Input
   position={'relative'}
   w={{base:'90%',md:'90%',lg:'60%'}}
   border={'1px solid teal'}
   color={'white'}
  
   type= 'password'
   name='card'
   value={card}
   onChange={handleClick}
   placeholder='card number' />
</FormControl>
<Flex mt={'20px'} justifyContent={'space-evenly'} gap={'15px'}>

  <Box>
  <FormControl id="month" isRequired>
    <Flex>
    <Box mt="5px" color={'orange'} ><BsCalendarMonth/></Box>
    <FormLabel ml="5px" color={'gold'} fontSize={'20px'}>Expiry month</FormLabel>
    </Flex>
<Input type='number' color={'white'} onChange={handleClick} name='month' value={month} w={'100px'} border={'none'}  placeholder='MM' borderBottom={'2px'} borderBottomColor={'red'}/>
</FormControl>
  </Box>

  <Box> 
  <FormControl id="year" isRequired>
    <Flex>
    <Box mt="5px" color={'orange'} ><VscCalendar/></Box>
    <FormLabel ml="5px" fontSize={'20px'}  color={'gold'}>Expiry Year</FormLabel>
    </Flex>
  <Input type='number' color={'white'} onChange={handleClick} name='year' value={year} w={'100px'} border={'none'} placeholder='DD/MM/YYYY' borderBottom={'2px'} borderBottomColor={'red'}/>
  </FormControl>
  </Box>

  <Box>
  <FormControl id="cvv" isRequired>
 <Flex>
 <Box mt="5px" ><FcUnlock/></Box>
    <FormLabel ml="5px" fontSize={'20px'}  color={'gold'}>CVV</FormLabel>
  </Flex>
<Input type='password' color={'white'} onChange={handleClick} name='cvv' value={cvv} w={'100px'} border={'none'}  placeholder='676' borderBottom={'2px'} borderBottomColor={'red'}/>
</FormControl>
  </Box>
</Flex>

{/* <Image  position={'absolute'} mt={'22px'}  w={'62px'} h={'36px'} src='https://e7.pngegg.com/pngimages/962/794/png-clipart-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text.png' alt=''/> */}
  
  
 <Box w={'20%'} pb={'35px'} m={'auto'} >
 <Button fontWeight={'extrabold'} color={'black'} bg={'red.300'}  mt={'40px'} onClick={handleSubmit}>PAY</Button>
 </Box>


</Box>
    </Box>
    </Box> )
}

export default Online
   