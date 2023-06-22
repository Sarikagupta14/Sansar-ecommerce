import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  IconButton,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Card,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Women from './Women'

const Navbar1 = () => {
  const result = JSON.parse(localStorage.getItem("email"));
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const { isOpen, onToggle } = useDisclosure();
  
 
  
  
  

  
  const handleLogin=()=>{
    nav('/signup')
  }
  const handleLogout=()=>{
     localStorage.clear()
     nav('/')
  }
  const handleLogo = () => {
    nav("/");
  };

  const handleHome = () => {
    nav("/");
  };

  const handleMen = () => {
    nav(result ? "/men" : "/signup");
  };

  const handleBeauty = () => {
    nav(result ? "/beauty" : "/signup");
  };

  const handleGirls = () => {
    nav(result ? "/girls" : "/signup");
  };

  const handleFootwear = () => {
    nav(result ? "/footwear" : "/signup");
  };

  const handleMobile = () => {
    nav(result ? "/mobile" : "/signup");
  };

  const handleLaptops = () => {
    nav(result ? "/laptop" : "/signup");
  };

  const handleBoys = () => {
    nav(result ? "/boys" : "/signup");
  };

  const handleGrocery = () => {
    nav(result ? "/grocery" : "/signup");
  };

  const handleCamera = () => {
    nav(result ? "/camera" : "/signup");
  };

  const handleWomen = () => {
    nav(result ? "/women" : "/signup");
  };
  
  const handleJewellery=()=>{
    nav(result ? "/jewellery" : "/signup")
  }
  const text = JSON.parse(localStorage.getItem("cartItems") || 0);
  //  getting data from signup
  const cart = JSON.parse(localStorage.getItem('Verification'))
  console.log(cart)
  return (
    <Card>
      <Box

        as="nav" 
        position={'fixed'}
        w={'100%'}
        bg="black"
        p="5px"
        pl="0px"
        h="75px"
        display="flex"
        justifyContent={"space-around"}
      >

        {/* logo */}
        <Image
          onClick={handleLogo}
          cursor="pointer"
          h={{ base: "60px", lg: "70px" }}
          src="https://github.com/shwetra/assa/assets/104376252/a6087b0b-1c78-48d6-a35f-2eb464231fd3"
        />

        <Text
          display={{ base: "none", md: "flex", lg: "flex" }}
          cursor="pointer"
          onClick={handleHome}
          fontSize="18px"
          mt="18px"
          color="#f7444e"
        >
          Home
        </Text>

        <Flex  ml={'-60px'} display={{ base: "none", md: "none", lg: "flex" }} justifyContent={'space-between'} w={'450px'}>
          <Menu>
            <MenuButton
              mt="10px"
              ml="20px"
              color="white"
              h="40px"
              variant="outline"
            >
              Kids
            </MenuButton>
            <MenuList>
              <MenuItem as={Button} onClick={handleBoys}>
                Boys
              </MenuItem>
              <MenuItem as={Button} onClick={handleGirls}>
                Girls
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              mt="10px"
              ml="20px"
              color="white"
              h="40px"
              onClick={handleMen}
              variant="outline"
            >
              Men
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton ml="20px" color="white" variant="outline">
              Women
            </MenuButton>
            <MenuList>
              <MenuItem as={Button} onClick={handleWomen}>
                Outfits
              </MenuItem>
              <MenuItem as={Button} onClick={handleBeauty}>
                Beauty
              </MenuItem>
              {/* <MenuItem as={Button} onClick={handleFootwear}>
                Footwear
              </MenuItem> */}
              <MenuItem as={Button} onClick={handleJewellery}>
                Jewellery
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton ml="20px" color="white" variant="outline">
              Gadgets
            </MenuButton>
            <MenuList>
              <MenuItem as={Button} onClick={handleMobile}>
                Mobiles
              </MenuItem>
              <MenuItem as={Button} onClick={handleLaptops}>
                Laptops
              </MenuItem>
              <MenuItem as={Button} onClick={handleCamera}>
                Camera
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton ml="20px" color="white" onClick={handleGrocery}>
              Groceries
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton ml="20px" color="white" onClick={handleFootwear}>
              Footwear
            </MenuButton>
          </Menu>
        </Flex>


        <Flex>
        {cart ? (
            <Button
            leftIcon={<BiUser />}
            w={'120px'}
            bg={'black'}
            mt="10px"
            onClick={handleLogout}
            border={'1px solid teal'}
            display={{ base: "none", lg: "block" }}
            color="white"
          >
            Logout
          </Button>
      ) : (
        <Button
        leftIcon={<BiUser />}
        w={'120px'}
        bg={'black'}
        mt="10px"
        onClick={handleLogin}
        border={'1px solid teal'}
        display={{ base: "none", lg: "block" }}
        color="white"
      >
        Signin
      </Button>
      )}
        
    

       

          <Button
            mt="10px"
            display={{ base: "none", lg: "block" }}
            ml="10px"
            leftIcon={<AiOutlineShoppingCart />}
            bg="white"
            color="red"
          >
            {text.length}
          </Button>
        </Flex>

        <Flex
          display={{ base: "flex", md: "flex", lg: "none" }}
          align="center"
          ml={{ md: "15%" }}
        >
          <IconButton
            icon={<AiOutlineMenu />}
            onClick={onToggle}
            variant="outline"
            colorScheme="white"
            mr={'15px'}
            ml="20px"
            size="md"
            color="white"
          />
        </Flex>
      </Box>


{/* For small and medium screen */}
      {isOpen && (
        <Box>
          <Box
          mt={'75px'}
        
            bg="teal"
            p="3"
            display={{ base: "flex", md: "flex" }}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Menu>
              <MenuButton color="white" h="40px" variant="outline">
                Kids
              </MenuButton>
              <MenuList>
                <MenuItem as={Button} onClick={handleBoys}>
                  Boys
                </MenuItem>
                <MenuItem as={Button} onClick={handleGirls}>
                  Girls
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                color="white"
                h="40px"
                onClick={handleMen}
                variant="outline"
              >
                Men
              </MenuButton>
            </Menu>

            <Menu>
              <MenuButton color="white" variant="outline">
                Women
              </MenuButton>
              <MenuList>
                <MenuItem as={Button} onClick={handleWomen}>
                  Outfits
                </MenuItem>
                <MenuItem as={Button} onClick={handleBeauty}>
                  Beauty
                </MenuItem>
                <MenuItem as={Button} onClick={handleFootwear}>
                  Footwear
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                color="white"
                onClick={handleFootwear}
                variant="outline"
              >
                Gadgets
              </MenuButton>
              <MenuList>
                <MenuItem as={Button} onClick={handleMobile}>
                  Mobiles
                </MenuItem>
                <MenuItem as={Button} onClick={handleLaptops}>
                  Laptops
                </MenuItem>
                <MenuItem as={Button} onClick={handleCamera}>
                  Camera
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton color="white" onClick={handleGrocery}>
                Groceries
              </MenuButton>
            </Menu>
          </Box>
          <Box
          mb={'-75px'}
            bg="teal"
            p="3"
            display={{ base: "flex", md: "flex" }}
            flexDirection="row"
            justifyContent="space-between"
          >
             {cart ? (
            <Button mt="10px" border="1px solid teal" bg="black" color="white" onClick={handleLogout}>
              <BiUser />
              Logout
            </Button>
             ):(
            <Button mt="10px" border="1px solid teal" bg="black" color="white" onClick={handleLogin}>
              <BiUser />
              Signin
            </Button>
             )
}
            <Button
              mt="10px"
              ml="10px"
              leftIcon={<AiOutlineShoppingCart />}
              bg="black"
              color="red"
            >
              {text.length}
            </Button>
          </Box>

          <Box display={'none'}>
          <Women/>
        </Box>

        </Box>
       
      )}
    </Card>
  );
};

export default Navbar1;


// <Flex ml="20px" w={{ base: "100%", md: "50%", lg: "30%" }}>
// <InputGroup>
//   <InputLeftElement
//     ml="12px"
//     mt="13px"
//     h="35px"
//     bgColor="black"
    
//     pointerEvents="none"
//     children={<FcSearch />}
//     color="gray.300"
//   />
//   <Input
//     bgColor="black"
//     border="2px solid teal"
//     mt="10px"
//     h="40px"
//     w="100%"
//     ml="10px"
//     color="teal"
//     type="search"
//     placeholder="Search here"
//     value={input}
//     onChange={handleChange}
//   />
// </InputGroup>
// </Flex>