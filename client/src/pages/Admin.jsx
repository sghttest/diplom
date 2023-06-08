import React, { useState } from 'react';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import MyModal from '../components/UI/MyModal/MyModal';

const Admin = () => {

    const [modalType, setModalType] = useState(false)
    const [modalBrand, setModalBrand] = useState(false)
    const [modalDevice, setModalDevice] = useState(false)

    return ( 
        <div className='container'>
            <button onClick={()=>setModalType(true)}>Добавить тип</button>
            <button onClick={()=>setModalBrand(true)}>Добавить бренд</button>
            <button onClick={()=>setModalDevice(true)}>Добавить устройство</button>
            
            <MyModal visible={modalType} setVisible={setModalType}>
                <CreateType/>
            </MyModal>
            <MyModal visible={modalBrand} setVisible={setModalBrand}>
                <CreateBrand/>
            </MyModal>
            <MyModal visible={modalDevice} setVisible={setModalDevice}>
                <CreateDevice/>
            </MyModal>
            
            
        </div>
    );
}
 
export default Admin;