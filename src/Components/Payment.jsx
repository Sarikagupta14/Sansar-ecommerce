
  import { Box, Button, Flex, Heading, Image,  Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Online from './Online';
import Cash from './Cash';
import {AiFillDelete} from 'react-icons/ai'
// import {GiHealthDecrease,GiHealthIncrease} from 'react-icons/gi'
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'

const Payment = () => {
  const update = JSON.parse(localStorage.getItem('cartItems'));
  
//Delete function
  const [counts, setCounts] = useState(() => Array(update.length).fill(1));

const [activeComponent, setActiveComponent] = useState("online");
  const handleComponent = (componentName) => {
      setActiveComponent(componentName);
  };
    console.log(activeComponent)


    //Increase
  const handleIncrease = (index) => {
    const Default = [...counts];
    Default[index] += 1;
    setCounts(Default);
  };

   //Decrease
  const handleDecrease = (index) => {
    if (counts[index] > 1) {
      const Default = [...counts];
      Default[index] -= 1;
      setCounts(Default);
    }
  };

  const handleDelete = (index) => {
    const sarika = [...counts];   // length
    const sangam = [...update];   // localstorage
    sarika.splice(index, 1);      //
    sangam.splice(index, 1);
    setCounts(sarika);

    localStorage.setItem('cartItems', JSON.stringify(sangam));
  };



  // Calculate total price-reduce helps in returning total amount of items
  const totalPrice = update.reduce((total, item, index) => {
    return(item.price * counts[index]);
  }, 0);







  return (
    <Flex direction={{base:'column',md:'column',lg:'row'}} justifyContent={'space-around'} w={'100%'}>
      {/* Cart items */}
      <Box w={{base:'95%',md:'95%',lg:'50%'}} ml={'2%'}  mt={'30px'} borderRadius={'20px'}
      border={'2px solid black'} h={'580px'} overflowY={'scroll'}>
       <Flex justifyContent={'space-evenly'} pt={'10px'}>
        <Heading color={'gray'} fontSize={'25px'} ml={'100px'} fontFamily={'sans-serif'} textDecoration={'underline'}>
          Selected Products
        </Heading>

        <Text mt={4} fontSize="20px" fontWeight="bold" textAlign="center"
        color={'red'}>
          Total Price: ₹{totalPrice}
        </Text>
        </Flex>
        {update &&
          update.map((item, index) => {
            return (
              <Flex direction={{base:'column',md:'row',lg:'row'}} justifyContent={'space-between'} mt={'10px'} p="10px" borderTopLeftRadius={'30px'} borderBottomRightRadius={'30px'}>
                <Flex>
                <Box>
                  <Image m="20px" h={'100px'} w={'100px'} src={item.image} alt="" />
                </Box>

                <Box ml={'10px'} mt={'30px'} w={'70%'} h={'90px'} borderBottom={'1px solid gray'}>
                  <Heading ml={'10px'} fontSize={{base:'15px',lg:'20px'}}>
                    {item.name}
                  </Heading>
                  <Heading ml={'10px'} color={'#5D6D7E'} fontSize={{base:'12px',lg:'15px'}}>
                    {item.brand}
                  </Heading>
                  <Text ml={'10px'} color={'#5D6D7E'}>
                  ₹{item.price}
                  </Text>
                </Box>
             </Flex>
                
              
                <Flex direction={{base:'row',md:'column',lg:'column'}}>
                <Flex>
                  <Button color={'#5D6D7E'} bg={'transparent'} fontSize={'30px'} onClick={() => handleIncrease(index)}>
                    <AiFillCaretUp/>
                  </Button>
                  <Button color={'black'} bg={'transparent'} fontSize={'20px'}>
                    {counts[index]}
                  </Button>
                  <Button color={'#5D6D7E'} bg={'transparent'} fontSize={'30px'} onClick={() => handleDecrease(index)}>
                  <AiFillCaretDown/>
                  </Button>
                  </Flex>
                  <Box mt={'10px'}>
                <Button onClick={() => handleDelete(index)} bg={'transparent'} color={'red'}><AiFillDelete/></Button>
                </Box>
                
                </Flex>
               
                </Flex>
            
            );
          })}
      </Box>

      {/* User details */}
      <Box  borderRadius={'20px'}  mt={'40px'} w={{base:'100%',lg:'35%'}} h={'550px'} border={'2px solid black'} >
      
       <Flex justifyContent={'space-evenly'} mt={'10px'} >
        <Button bg={'gray.100'} border={'1px solid black'} fontSize={'18px'} onClick={()=>handleComponent('online')}>Online</Button>
        <Button bg={'gray.100'} border={'1px solid black'} fontSize={'18px'} onClick={()=>handleComponent('cash')}>Cash-on</Button>
       </Flex>
       <Box w={'100%'} h={'100%'} pt={'40px'}>
        {activeComponent === 'online' &&  <Online/>}
        {activeComponent === 'cash' &&  <Cash/>}
       </Box>
      </Box>
     </Flex>
  );
};

export default Payment;