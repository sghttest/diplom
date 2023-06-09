import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBasketDevice, fetchOneDevice } from '../http/deviceAPI';
import star from '../assets/rating-star.svg'
import cl from './DevicePage.module.css'
import { Context } from '..';
import { LOGIN_ROUTE } from '../utils/consts';

const DevicePage = () => {

    const {user} = useContext(Context)
    const history = useNavigate()

    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(()=>{
        fetchOneDevice(id).then(data=>setDevice(data))
    }, [])

    const rating = []
    if (device.rating){
        for(let i = 0; i< device.rating; i++){
           rating.push(<img style={{margin: '5px'}} src={star} key={device.id+i}/>)                     
        }
    }

    const addToBasket = () => {
        createBasketDevice(localStorage.getItem('email'), id)
    }


    return ( 
        <div className={cl.container}>
            <h2 style={{textAlign:'center', marginBottom:'50px'}}>Товар</h2>
            <div className={cl.about}>
                <div>
                    <img className={cl.img} src={process.env.REACT_APP_API_URL + device.img}/>
                </div>

                <div className={cl.description}>
                    <div>Модель: {device.name}</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>Рейтинг: {rating.length? rating : 'Нет оценок'}</div>
                </div>

                <div className={cl.buy_info}>
                    <div>Цена: {device.price} руб.</div>
                    {
                        user.isAuth
                        ?
                        <button className={cl.btn_cart} onClick={addToBasket}>В корзину</button>
                        :
                        <button className={cl.btn_cart} onClick={()=>history(LOGIN_ROUTE)}>В корзину</button>
                    }
                    
                </div>
            </div>
            <div className={cl.device_info}>
                {device.info.length > 0 ? 'Характеристики' : ''}
                {device.info.map(item => 
                <div className={cl.info} key={item.name}>
                    <div>
                        {item.title} {item.description}
                    </div>
                </div>

                    )}
            </div>
        </div>
    );
}
 
export default DevicePage;