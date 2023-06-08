import React, { useState } from 'react';
import MyModal from '../UI/MyModal/MyModal';
import { createType } from '../../http/deviceAPI';

const CreateType = () => {

    const [value, setValue] = useState('')
    const addType = () => {
        createType({name:value}).then(data => setValue(''))
    }

    return ( 
        <div>
            <input value={value} onChange={e=>setValue(e.target.value)} type="text" placeholder='Введите тип'/>
            <button onClick={()=> addType()}>Добавить тип</button>
        </div>
    );
}
 
export default CreateType;