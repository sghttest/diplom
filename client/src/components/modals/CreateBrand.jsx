import React, { useState } from 'react';
import MyModal from '../UI/MyModal/MyModal';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = () => {

    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name:value}).then(data => setValue(''))
    }

    return ( 
        <div>
            <input value={value} onChange={e=>setValue(e.target.value)} type="text" placeholder='Введите бренд'/>
            <button onClick={()=> addBrand()}>Добавить бренд</button>
        </div>
    );
}
 
export default CreateBrand;