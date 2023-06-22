import { Box, Flex, IconButton, Image,  Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer"  bg="gray.800" color="white">
      <Flex direction="column"  mx="auto">
        <Text fontSize="40px" color={'cyan.600'} align={'center'} fontWeight="600" letterSpacing={'2px'} mb={4}>
          @Sansar E-commerce
        </Text>
        <Flex marginLeft={{base:'50px'}} justifyContent={'space-around'}  direction={{base: 'column', md: 'row', lg: 'row'}}>
         <Box>
            <Image h={'150px'} src='https://github.com/shwetra/assa/assets/104376252/a6087b0b-1c78-48d6-a35f-2eb464231fd3' alt=''/>
         </Box>
            <Box  mr={'50px'}>
                <Text fontSize={'26px'} color={'white'} fontWeight={'600'}>About Us</Text>
                <Text>Contact</Text>
                <Text>Careers</Text>
                <Text> stories</Text>
                <Text>Press</Text>
            </Box>
            
         
          <Box mt={{base:'20px',md:'0px',lg:'0px'}} mb={{base:'20px'}}  mr={'50px'}>
                <Text fontSize={'26px'} color={'white'} fontWeight={'600'}>Help</Text>
                <Text>Payments</Text>
                <Text>Shipping</Text>
                <Text>Cancellation & returns</Text>
                <Text>FAQ</Text>
                <Text>Report refringment</Text>
            </Box>
            
         
          <Box  mr={'50px'}>
                <Text fontSize={'26px'} color={'white'} fontWeight={'600'}>Consumer family</Text>
                <Text>Return Policy</Text>
                <Text>Terms of Use</Text>
                <Text>Security</Text>
                <Text>Privacy</Text>
                <Text>EPR Compliance</Text>
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
          &copy; {new Date().getFullYear()} Sansar E-commerce. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}
export default Footer
