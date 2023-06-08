import React from 'react';
import cl from './BtnAuth.module.css'

const BtnAuth = ({children, ...props} ) => {
    return ( 
        <button {...props} className={cl.btnAuth}>{children}</button>
    );
}
 
export default BtnAuth;