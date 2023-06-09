import React from 'react';
import star from '../../../assets/rating-star.svg'
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../../utils/consts';
import cl from './DeviceItem.module.css'

const DeviceItem = ({device}) => {

    const history = useNavigate()

    const rating = []
    if (device.rating){
        for(let i = 0; i< device.rating; i++){
           rating.push(<img className={cl.ratingStar} src={star} key={device.id+i}/>)                     
        }
    }

    return ( 
        <div className={cl.device__card} >
            <img className={cl.deviceImg} src={process.env.REACT_APP_API_URL + device.img}/>
            <div className={cl.card_description}>
                <div style={{cursor: 'pointer', color:'var(--light-blue)'}} onClick={()=> history(DEVICE_ROUTE+'/'+device.id)}>Модель: {device.name}</div>
                <div className={cl.card_rating} style={{display: 'flex', alignItems: 'center', color:'var(--light-blue)'}}>
                    Рейтинг: {rating.length? rating : 'Нет оценок'}
                </div>
            </div>
            <div className={cl.buy_info}>
                <div style={{color:'var(--light-blue)'}}>Цена: {device.price} руб.</div>
                <button className={cl.btn__buy} onClick={()=> history(DEVICE_ROUTE+'/'+device.id)}>Купить</button>
            </div>       
        </div>
    );
}
 
export default DeviceItem;