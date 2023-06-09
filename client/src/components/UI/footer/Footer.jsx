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
                <div style={{color:'var(--light-blue)'}}>
                    <a style={{color:'var(--light-blue)', textDecoration: 'none'}} href="https://github.com/sghttest">
                        Щепин В.В. ПКС-4
                    </a>
                </div>
                <div style={{color:'var(--light-blue)'}}>
                    <a style={{color:'var(--light-blue)', textDecoration: 'none'}} href="https://sghttest.github.io/">
                    ГБПОУ "СГХТ"
                    </a>
                </div>
                
            </div>
        </div>
    );
}
 
export default Footer;