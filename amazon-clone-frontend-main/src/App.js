import React, {useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase';
import {useStateValue} from "./StateProvider";
import Payment from './Payment/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders/Orders';

const promise = loadStripe('pk_test_51IYmDdSEOVZ4Xi7rsA12ZnXjAmBNSv0PYLu1YO5SKiwiOk5wNP6zGXa1gDtbFfxQMXVR8Gr5BvRJ06n8Oyp76Uc000PHCGsrj0');
function App() {

 const [{}, dispatch] = useStateValue();
	
  useEffect(() => {
	  //will only run once when the app component loads..
	auth.onAuthStateChanged((authUser) => {
		console.log('the user is >>>',authUser);
		if(authUser) {
			dispatch({
				type: 'SET_USER',
				user: authUser
			});
		} else {
			dispatch({
				type: 'SET_USER',
				user: null,
			});
		}
	});
  },[]);
  	
  return (
	<Router>
    	<div className="App">
	    	<Switch>
	    			<Route exact path="/">
	    				<Header/>
	    				<Home/>
	    			</Route>
	    			<Route path="/checkout" >
	    				<Header/>
		    			<Checkout/>
	    			</Route>
	    			<Route path="/login" >
		    			<Login/>
	    			</Route>
					<Route path="/payment" >
						<Header/>
						<Elements stripe ={promise}>
							<Payment/>
						</Elements>
	    			</Route>
					<Route path="/order" >
						<Header/>
						<Orders/>
	    			</Route>
	    	</Switch>
	    </div>
  	</Router>

  );
}

export default App;
