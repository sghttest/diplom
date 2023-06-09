import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar';
import './styles/App.css'
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import Loader from './components/UI/Loader/Loader';
import Footer from './components/UI/footer/Footer';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    check().then(data=>{
      if (data){
        user.setUser(data)
        user.setIsAuth(true)
        console.log('Авторизован')
      }else{
        console.log('Не авторизован')
      }
    }).finally(()=>setLoading(false))  
    }, [user.isAuth])

  if(loading){
    return <Loader/>
  }

  return ( 
    <BrowserRouter>
      <Navbar/>
      <div className='forFooter'>
        <AppRouter/>
        <Footer/>
      </div>
      
    </BrowserRouter>
  );
})
 
export default App;