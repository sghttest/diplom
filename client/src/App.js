import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar';
import './styles/App.css'
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import Loader from './components/UI/Loader/Loader';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    console.log('pere')
    check().then(data=>{
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(()=>setLoading(false))  
    }, [])

  if(loading){
    return <Loader/>
  }

  



  return ( 
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
})
 
export default App;