import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../..';
import cl from './TypeBar.module.css'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return ( 
        <div className={cl.typeBar}>
            {device.types.map(type=>
                <div
                    className={type.id === device.selectedType.id ? cl.typeBarItem +' '+ cl.active : cl.typeBarItem}
                    key={type.id}
                    onClick={()=>device.setSelectedType(type)}
                >
                    {type.name}
                </div>
                )}
                <div 
                    className={cl.typeBarItem}
                    onClick={()=>device.setSelectedType({})}
                >
                    Сбросить фильтр
            </div>
        </div>
    );
})
 
export default TypeBar;