import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'
import { Context } from '../../..';
import { BASKET_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import { observer } from 'mobx-react-lite';

const Navbar = observer(() => {
    const {user} = useContext(Context)
    return ( 
        <div className={cl.navbar__wrapper}>
            <div className={cl.navbar}>
                <div className={cl.logo}>
                    <NavLink to={SHOP_ROUTE}>
                        <img src="img/logo_cyber.svg" alt=""/>
                    </NavLink>
                </div>
                <div className={cl.navbar__search}>
                    <input className={cl.search} type="text" placeholder="Поиск"/>
                    <button className={cl.btn__search}></button>
                </div>
                {user.isAuth 
                ?
                <div className={cl.navbar__links}>
                    <NavLink to={BASKET_ROUTE} className={cl.navbar__link}>
                        Админ
                    </NavLink>
                    <NavLink className={cl.navbar__link}>
                        <img src="img/shoppingCartIcon.svg" alt="" className={cl.navbar__icon}/>
                        Корзина
                    </NavLink>
                </div>
                :
                <div className={cl.navbar__links}>
                    <NavLink className={cl.navbar__link} onClick={()=>user.setIsAuth(true)}>
                        <img src="img/profileIcon.svg" alt="" className={cl.navbar__icon}/>
                        Войти
                    </NavLink>
                </div>
                }
            </div>
        </div>
    );
})
 
export default Navbar;