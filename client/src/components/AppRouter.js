import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../router';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)

    return ( 
        <Routes>
            {user.isAuth && authRoutes.map(({path, component})=>
                <Route 
                    key={path} 
                    path={path} 
                    element={component}
                />
            )}
            {publicRoutes.map(({path, component})=>
                <Route 
                    key={path} 
                    path={path}
                    element={component}
                />
            )}
            <Route path="/*" element={<Navigate to="/" replace/>}/>
        </Routes>
    );
}
 
export default AppRouter;