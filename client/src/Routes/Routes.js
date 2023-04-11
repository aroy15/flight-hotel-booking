import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Signup from '../Pages/Login/Signup';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/Shared/ErrorPage';
import Details from '../Pages/Details';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/signup',
                element:<Signup/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/details',
                element:<PrivateRoute><Details/></PrivateRoute>
            }
        ]
    }
])

export default router;