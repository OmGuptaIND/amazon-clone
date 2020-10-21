import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import { auth } from './firebase';
import './App.css';
import Checkout from './Checkout';
import Headers from './Header';
import Home from './Home';
import Layout from './Layout';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch]=useStateValue();


  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        //User is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });

    return () => {
      unsubscribe();
    }
  },[]);
  console.log("User is >>>>> ",user);


  return (
    
      <Router>
      <Layout>
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/others'>
            <About />
          </Route>
          <Route path='/orders'>
            <h1>orders</h1>
          </Route>
          <Route path='/category'>
            <h1>category</h1>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
    
      
  );
}

export default App;
