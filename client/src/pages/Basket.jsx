import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { fetchBasket } from '../http/deviceAPI';
import { Context } from '..';
import DeviceList from '../components/DeviceList';
import BasketItem from '../components/UI/BasketItem/BasketItem';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import MyModal from '../components/UI/MyModal/MyModal';
import CreatePurchase from '../components/modals/CreatePurchase';

const Basket = observer(() => {

    const history = useNavigate()

    const {device} = useContext(Context)

    const {user} = useContext(Context)

    useEffect(()=>{
        fetchBasket(localStorage.getItem('email')).then(data=>{device.setBaskets(data)})
    }, [user.deleted])

    const [modal, setModal] = useState(false)

    return ( 
        <div>
            {
                device.baskets.length?
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div>
                    {device.baskets.map(basket=>
                        <BasketItem 
                            key={basket.id}
                            basket={basket}
                        />
                    )}
                    </div>
                    <button className='btn' style={{marginLeft: 'auto', marginBottom: '30px'}} onClick={()=>setModal(true)}>Оформить заказ</button>
                </div>
                :
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h2 style={{textAlign: 'center', marginBottom: '20px', marginTop: '30px'}}>Корзина пустая</h2>
                    <button className='btn' onClick={()=>history(SHOP_ROUTE)}>К покупкам</button>
                </div>

            }
            <MyModal visible={modal} setVisible={setModal}>
                <CreatePurchase/>
            </MyModal>
        </div>
    );
})
 
export default Basket;