import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Checkout from './Checkout';
import Subtotal from './Subtotal';
import Login from './Login';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
 

const promise = loadStripe('pk_test_51MjKTrSCqNamx7Cmh3okMihklP6i8B7ur08Nq0xPhaOU3Wb6paAFfMpRl8TJ3L7kjTf9cNxrGnxyhUXBoAXdKnYj00anVYYIiC');



function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('the user is' ,authUser);

      if(authUser){
          //user logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      }else{
          //user logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    })
  },
  [])
  return (
    //BEM
    
    <Router>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Routes>
        <Route path='/checkout' element={<Header/>}/> 
      </Routes>
      <Routes>
        <Route path='/checkout' element={<Checkout/>}/> 
      </Routes>

      <Routes>
        <Route path='/login' element={<Login/>}/> 
      </Routes>

      <Routes>
        <Route path='/payment' element={<Header/>}/> 
      </Routes>
      <Routes>
        <Route path='/payment' element={<Payment/>}/>     
      </Routes>

 
       <Elements stripe={promise}>
          <Payment/>
        </Elements>  
           

    </div>
    </Router>
  );
}

// const Payment = () => {
//   return (
//     <ElementsConsumer>
//       {({elements, stripe}) => (
//         <Payment/>
//       )}
//     </ElementsConsumer>
//   );
// };

export default App;
