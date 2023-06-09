import React, { useContext, useEffect } from 'react';
import TypeBar from '../components/UI/TypeBar/TypeBar';
import BrandBar from '../components/UI/BrandBar/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/UI/pagination/Pages';
import cl from './Shop.module.css'

const Shop = observer(() => {

    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data=>{
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        }
        )
    }, [])

    useEffect(()=>{
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(data=>{
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType.id, device.selectedBrand.id])

    return ( 
        <div className={cl.container}>
                <div className="col-3">
                    <TypeBar/>
                </div>
                <div className="col-9">
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </div>
        </div>
    );
})
 
export default Shop;