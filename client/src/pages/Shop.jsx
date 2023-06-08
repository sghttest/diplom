import React, { useContext, useEffect } from 'react';
import TypeBar from '../components/UI/TypeBar/TypeBar';
import BrandBar from '../components/UI/BrandBar/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';

const Shop = observer(() => {

    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
        fetchDevices().then(data=>device.setDevices(data.rows))
    }, [])

    return ( 
        <div className='container'>
            <div className='row'>
                <div className="col-3">
                    <TypeBar/>
                </div>
                <div className="col-9">
                    <BrandBar/>
                    <DeviceList/>
                </div>
            </div>
        </div>
    );
})
 
export default Shop;