import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import DeviceItem from './UI/DeviceItem/DeviceItem';

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return ( 
        <div>
            {device.devices.map(device=>
                <DeviceItem 
                    key={device.id}
                    device={device}
                />
            )}
        </div>
    );
})
 
export default DeviceList;