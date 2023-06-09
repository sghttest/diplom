import React, { useContext } from 'react';
import star from '../../../assets/rating-star.svg'
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../../utils/consts';
import cl from './BasketItem.module.css'
import { removeFromBasket } from '../../../http/deviceAPI';
import { Context } from '../../..';

const BasketItem = ({basket}) => {

    const {device} = basket

    const {user} = useContext(Context)

    const {id, price, name, img, rating} = device

    const ratingM = []
    if (rating){
        for(let i = 0; i < rating; i++){
           ratingM.push(<img className={cl.ratingStar} src={star} key={id+i}/>)                     
        }
    }

    const removeBasket = () => {
        removeFromBasket(localStorage.getItem('email'), id)
        user.setDeleted(Date.now())
    }

    return ( 
        <div className={cl.device__card} >
            <img className={cl.deviceImg} src={process.env.REACT_APP_API_URL + img}/>
            <div className={cl.card_description}>
                <div style={{color:'var(--light-blue)'}} >Модель: {name}</div>
                <div className={cl.card_rating} style={{color:'var(--light-blue)', display: 'flex', alignItems: 'center'}}>
                    Рейтинг: {ratingM.length? ratingM : 'Нет оценок'}
                </div>
            </div>
            <div className={cl.buy_info}>
                <div style={{color:'var(--light-blue)'}}>Цена: {price} руб.</div>
                <button className={cl.btnRemove} onClick={removeBasket}>Удалить из корзины</button>
            </div>       
        </div>
    );
}
 
export default BasketItem;