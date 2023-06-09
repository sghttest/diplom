import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';
import cl from './Pages.module.css'

const Pages = observer(() => {
    const {device} = useContext(Context)
    
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++){
        pages.push(i+1)
    }

    return ( 
        <div className={cl.page__wrapper}>
        {pages.map(page=>
            <span 
                onClick={()=>device.setPage(page)}
                className={page === device.page ? cl.page+' '+cl.page__current : cl.page} 
                key={page}
            >
                {page}
            </span>  
        )}
    </div>
    );
})


 
export default Pages;