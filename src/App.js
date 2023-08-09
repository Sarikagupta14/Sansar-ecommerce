
import './App.css';
import Beauty from './Components/Beauty';
import Mens from './Components/Mens';
import { Route, Routes } from 'react-router-dom';
import Women from './Components/Women';
import Details from './Components/Details';
// import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Private from './Components/Private';
import Girls from './Components/Girls';
import Boys from './Components/Boys';
import Cart from './Components/Cart';
import Jewellery from './Components/Jewellery';
import Mobile from './Components/Mobile';
import Laptop from './Components/Laptop';
import Grocery from './Components/Grocery';
import Camera from './Components/Camera';
import Footware from './Components/Footware';
import { Box } from '@chakra-ui/react';
import Navbar1 from './Components/Navbar1';
import Home from './Components/Home';
import Payment from './Components/Payment';


function App() {
  return (
    <Box>

      <Box pb={'75px'}>
      <Navbar1/>
      
      </Box>
    
   
     
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/women' element={<Private><Women/></Private>}/> 
        <Route path='/men' element={<Private><Mens/></Private>}/> 
        <Route path='/addCart' element={<Private><Cart/></Private>}/> 
        <Route path='/beauty' element={<Private><Beauty/></Private>}/> 
        <Route path='/details' element={<Private><Details/></Private>}/> 
        <Route path='/girls' element={<Private><Girls/></Private>}/> 
        <Route path='/boys' element={<Private><Boys/></Private>}/> 
        <Route path='/jewellery' element={<Private><Jewellery/></Private>}/> 
        <Route path='/mobile' element={<Private><Mobile/></Private>}/> 
        <Route path='/laptop' element={<Private><Laptop/></Private>}/> 
        <Route path='/grocery' element={<Private><Grocery/></Private>}/> 
        <Route path='/camera' element={<Private><Camera/></Private>}/> 
        <Route path='/footwear' element={<Private><Footware/></Private>}/> 
        <Route path='/payment' element={<Private><Payment/></Private>}/> 
        <Route path='/signin' element={<Signin/>}/> 
        <Route path='/signup' element={<Signup/>}/> 

      </Routes>
   
    </Box>
  );
}

export default App;
