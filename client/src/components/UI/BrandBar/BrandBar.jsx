import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../..';
import cl from './BrandBar.module.css'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return ( 
        <div className={cl.brandBar}>
            {device.brands.map((brand)=>
                <div 
                    key={brand.id}
                    className={brand.id === device.selectedBrand.id ? cl.brandBarItem +' '+ cl.active : cl.brandBarItem}
                    onClick={()=>device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </div>
            )}
            <div 
                    className={cl.brandBarItem}
                    onClick={()=>device.setSelectedBrand({})}
                >
                    Сбросить фильтр
            </div>
        </div>
    );
})
 
export default BrandBar;