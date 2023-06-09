import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import cl from './Navbar.module.css'
import { Context } from '../../..';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import { observer } from 'mobx-react-lite';
import MyInput from '../input/MyInput';
import profileIcon from '../../../assets/profileIcon.svg'
import shoppingCartIcon from '../../../assets/shoppingCartIcon.svg'
import logoCyber from '../../../assets/logo_cyber.svg'
import iconSearch from '../../../assets/icon_search.svg'

const Navbar = observer(() => {
    const {user} = useContext(Context)

    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        history(LOGIN_ROUTE)
    }

    return ( 
        <div className={cl.navbar__wrapper}>
            <div className={cl.navbar}>
                <div className={cl.logo}>
                    <button onClick={() => history(SHOP_ROUTE)} className={cl.navbar__link}>
                        <img src={logoCyber} alt=""/>
                    </button>
                </div>

                {user.isAuth 
                ?
                <div className={cl.navbar__links}>
                    <button onClick={() => history(BASKET_ROUTE)} className={cl.navbar__link}>
                        <img src={shoppingCartIcon} alt="" className={cl.navbar__icon}/>
                        Корзина
                    </button>
                    <button onClick={() => logOut()} className={cl.navbar__link}>
                        <img src={profileIcon} alt="" className={cl.navbar__icon}/>
                        Выйти
                    </button>
                </div>
                :
                <div className={cl.navbar__links}>
                    <button onClick={() => history(LOGIN_ROUTE)} className={cl.navbar__link}>
                        <img src={profileIcon} alt="" className={cl.navbar__icon}/>
                        Войти
                    </button>
                </div>
                }
            </div>
        </div>
    );
})
 
export default Navbar;