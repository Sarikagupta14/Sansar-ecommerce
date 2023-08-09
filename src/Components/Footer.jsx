import { Box, Flex, IconButton, Image,  Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer"  bg="gray.800" color="white">
      <Flex direction="column"  mx="auto" pt={'20px'}>
        {/* <Text fontSize="20px" color={'cyan.600'} align={'center'} fontWeight="600" letterSpacing={'2px'} mb={4}>
          @Sansar E-commerce
        </Text> */}
        <Flex marginLeft={{base:'50px'}} justifyContent={'space-around'}  direction={{base: 'column', md: 'row', lg: 'row'}}>
         <Box>
            <Image h={'80px'} src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/c9954925-eed5-40e3-9dd7-efd0e11eed77' alt=''/>
         </Box>
            <Box  mr={'50px'}>
                <Text fontSize={'24px'} color={'white'} fontWeight={'600'}>About Us</Text>
                <Text fontSize={'15px'}>Contact</Text>
                <Text fontSize={'15px'}>Careers</Text>
                <Text fontSize={'15px'}> stories</Text>
                <Text fontSize={'15px'}>Press</Text>
            </Box>
            
         
          <Box mt={{base:'20px',md:'0px',lg:'0px'}} mb={{base:'20px'}}  mr={'50px'}>
                <Text fontSize={'24px'} color={'white'} fontWeight={'600'}>Help</Text>
                <Text fontSize={'15px'}>Payments</Text>
                <Text fontSize={'15px'}>Shipping</Text>
                <Text fontSize={'15px'}>Cancellation & returns</Text>
                <Text fontSize={'15px'}>FAQ</Text>
                <Text fontSize={'15px'}>Report refringment</Text>
            </Box>
            
         
          <Box  mr={'50px'}>
                <Text fontSize={'24px'} color={'white'} fontWeight={'600'}>Consumer family</Text>
                <Text fontSize={'15px'}>Return Policy</Text>
                <Text fontSize={'15px'}>Terms of Use</Text>
                <Text fontSize={'15px'}>Security</Text>
                <Text fontSize={'15px'}>Privacy</Text>
                <Text fontSize={'15px'}>EPR Compliance</Text>
            </Box>
           
          {/* <Box mr={'50px'}>
                <Text fontSize={'26px'} color={'white'} fontWeight={'600'}>Help</Text>
                <Text>Kids</Text>
                <Text>Men</Text>
                <Text>Women</Text>
     
        </Box>
           */}
        </Flex>

        <Flex mb={'10px'}  m={'auto'} mt={'20px'}>
          <IconButton
          color={'white'}
            icon={<FaFacebook />}
            aria-label="Facebook"
            mx={1}
            fontSize="30px"
            variant="ghost"
          />
          <IconButton
           color={'white'}
            icon={<FaTwitter />}
            aria-label="Twitter"
            mx={1}
            fontSize="30px"
            variant="ghost"
          />
          <IconButton
           color={'white'}
            icon={<FaInstagram />}
            aria-label="Instagram"
            mx={1}
            fontSize="30px"
            variant="ghost"
          />
        </Flex>
        <Text  textAlign="center" color={'white'}>
          &copy; {new Date().getFullYear()} Shopika E-commerce. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}
export default Footer
