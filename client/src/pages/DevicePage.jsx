import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import star from '../assets/rating-star.svg'

const DevicePage = () => {

    
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(()=>{
        fetchOneDevice(id).then(data=>setDevice(data))
    }, [])

    const rating = []
    if (device.rating){
        for(let i = 0; i< device.rating; i++){
           rating.push(<img src={star} key={device.id+i}/>)                     
        }
    }


    return ( 
        <div className='container'>
            <div>
                <div>
                    <img src={process.env.REACT_APP_API_URL + device.img}/>
                </div>

                <div>
                    <h2>{device.name}</h2>
                    <div>{device.rating}</div>
                    <div>{rating}</div>
                </div>

                <div>
                    <h3>{device.price}</h3>
                    <button>В корзину</button>
                </div>
            </div>
            <div>
                {device.info.map(item => 
                <div key={item.name}>
                    <div>
                        {item.title}
                    </div>
                    <div>
                        {item.description}
                    </div>
                </div>

                    )}
            </div>
        </div>
    );
}
 
export default DevicePage;