import React, { useContext, useEffect, useState } from 'react';
import MySelect from '../UI/select/MySelect';
import { Context } from '../..';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(() => {

    const {device} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [typeId, setTypeId] = useState(1)
    const [brandId, setBrandId] = useState(1)
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) =>{
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    } 

    const addDevice = () =>{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', brandId)
        formData.append('typeId', typeId)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data=>{
            setName('')
            setPrice(0)
            setFile(null)
            setTypeId(1)
            setBrandId(1)
            setInfo([])
        })
    }

    return ( 
        <div>
            <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Введите название'/>
            <input value={price} onChange={e=>setPrice(Number(e.target.value))} type="text" placeholder='Введите цену'/>
            <MySelect
                value={typeId}
                onChange={value=>setTypeId(value)}
                defaultValue="Выберите тип"
                options={device.types.map(type=>type)}  
            />
            <MySelect
                value={brandId}
                onChange={value=>setBrandId(value)}
                defaultValue="Выберите бренд"
                options={device.brands.map(brand=>brand)}  
            />
            <input type="file" onChange={selectFile}/>
            <hr />
            <button onClick={addInfo}>Добавить характеристику</button>
            {info.map(i => 
                <div key={i.number}>
                    <div>
                        <input 
                        type="text" 
                        placeholder='Введите название характеристики'
                        value={i.title}
                        onChange={(e)=>changeInfo('title', e.target.value ,i.number)}
                        />
                    </div>

                    <div>
                        <input 
                        type="text" 
                        placeholder='Введите описание характеристики'
                        value={i.description}
                        onChange={(e)=>changeInfo('description', e.target.value ,i.number)}
                        />
                    </div>
                    <div>
                        <button onClick={()=>removeInfo(i.number)}>Удалить</button>
                    </div>
                </div>
            )
            }
            <button onClick={addDevice}>Добавить устройство</button>
        </div>
        
    );
})
 
export default CreateDevice;