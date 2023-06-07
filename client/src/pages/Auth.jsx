import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userAPI';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click  = async() => {
        try{
            let data
            if (isLogin){
                data = await login(email, password)
            }else{
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)  
            history(SHOP_ROUTE)
        }catch(e){
            alert(e.response.data.message)
        }
    }

    return ( 
        <div className='container' style={{height: window.innerHeight - 150}}>
            <h2 style={{textAlign: 'center'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <div style={{border: '1px solid black', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 15px'}}>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}  placeholder="Введите email" style={{width: '100%'}} />
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Введите password" style={{width: '100%'}} />
                {isLogin ?
                <div>
                    Нет аккаунта? 
                    <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
                :
                <div>
                    Уже есть аккаунт? 
                    <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
                }
                
                <button onClick={click}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
            </div>
        </div>
    );
})
 
export default Auth;