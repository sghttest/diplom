import React, { useState } from 'react';

const CreatePurchase = () => {

    const [adres, setAdres] = useState('')
    const [number, setNumber] = useState('')

    const createPurchase = () =>{
        alert(`Ваш заказ по адресу ${adres} отправляется в обработку, ожидайте звонка по номеру ${number}`)
    }

    return ( 
        <div>
            <input value={adres} onChange={e=>setAdres(e.target.value)}  type="text" placeholder='Введите адрес'/>
            <input value={number} onChange={e=>setNumber(e.target.value)}  type="text" placeholder='Введите номер телефона'/>
            <button onClick={() => createPurchase()}>Оформить заказ</button>
        </div>
    );
}
 
export default CreatePurchase;