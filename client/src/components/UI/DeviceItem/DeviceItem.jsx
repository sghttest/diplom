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
           rating.push(<img src={star} key={device.id+i}/>)                     
        }
    }

    return ( 
        <div onClick={()=> history(DEVICE_ROUTE+'/'+device.id)}>
            <div>
                <img className={cl.deviceImg} src={process.env.REACT_APP_API_URL + device.img}/>
                <div>
                    <div>{device.name}</div>
                    <div>
                        <div>{device.rating}</div>
                        {rating}
                    </div>
                    <div>{device.price}</div>
                </div>
            </div>
        </div>
    );
}
 
export default DeviceItem;