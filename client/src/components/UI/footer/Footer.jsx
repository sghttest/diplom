import React from 'react';
import cl from './Footer.module.css'
import logoCyber from '../../../assets/logo_cyber.svg'

const Footer = () => {
    return ( 
        <div className={cl.footer__wrapper}>
            <div className={cl.footer}>
                <div className={cl.logo}>
                    <img src={logoCyber} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Footer;