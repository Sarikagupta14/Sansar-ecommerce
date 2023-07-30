// import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import {AiOutlineShoppingCart} from 'react-icons/ai'
// const Navbar = () => {
//     const result = JSON.parse(localStorage.getItem('flower'))
//     const nav = useNavigate()
//     const handleMen=()=>{
//         nav(result ? '/men' : '/signup')
//     }
  
//     const handleBeauty=()=>{
//         nav(result ? '/beauty' : '/signup')
//     }
//     const handleGirls=()=>{
//         nav(result ? '/girls' : '/signup')
//     }
//     const handleFootwear=()=>{
//         nav(result ? '/footwear' : '/signup')
//     }
//     const handleMobile=()=>{
//         nav(result ? '/mobile' : '/signup')
//     }
//     const handleJewellery=()=>{
//         nav(result ? '/jewellery' : '/signup')
//     }
//     const handleLaptop=()=>{
//         nav(result ? '/laptop' : '/signup')
//     }
//     const handleBoys=()=>{
//         nav(result ? '/boys' : '/signup')
//     }
//     const handleGrocery=()=>{
//         nav(result ? '/grocery' : '/signup')
//     }
//     const handleCamera=()=>{
//         nav(result ? '/camera' : '/signup')
//     }
//     //getting data from details to update cart
//     const text = JSON.parse(localStorage.getItem('sangam'))
//     console.log(text.length)
//   return (
//    <Box bg={'teal'} color={'white'} h={'60px'} m={'auto'} zIndex={1000}>
//     <Flex justifyContent={'space-evenly'} pt={'10px'} gap={'18px'} >
//     <Text fontSize={'17px'} cursor={'pointer'}  fontWeight={'500'} onClick={handleMen}>Mens</Text>
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleGirls}>Girls</Text>
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleBoys}>Boys</Text>
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleFootwear}>Footwear</Text>
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleJewellery}>Jewellery</Text>
//     <Input type={'search'} placeholder={'search here'}/>
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleBeauty}>Beauty</Text>
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleGrocery}>Grocery</Text>
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleMobile}>Mobile</Text>
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleLaptop}>Laptop</Text> 
//     <Text fontSize={'17px'} cursor={'pointer'} fontWeight={'500'} onClick={handleCamera}>Camera</Text>
//     <Button leftIcon={<AiOutlineShoppingCart/>}  bg={'gray.100'} color={'red'}>{text.length}</Button>

//     </Flex>
//     {/* <Box mt={'50px'} ml={'25%'} >
//         <Image src="https://images04.nicepage.com/feature/612016/ecommerce-websites.jpg" alt="image"/>
//     </Box> */}
//    </Box>
//   )
// }

// export default Navbar
