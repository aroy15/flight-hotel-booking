import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Signup from '../Pages/Login/Signup';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/Shared/ErrorPage';
import Details from '../Pages/Details';
import PrivateRoute from './PrivateRoute';
import ComingSoon from '../Pages/Shared/ComingSoon';
import SearchResult from '../Pages/SearchResult';
import Checkout from '../Pages/Checkout';
import DashboardLayout from '../Layout/DashboardLayout';
import Welcome from '../Pages/Dashboard/Welcome';
import MyBookings from '../Pages/Dashboard/MyBookings';
import BecomeAHost from '../Pages/Dashboard/BecomeAHost';

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
            },
            {
                path:'/coming-soon',
                element:<ComingSoon/>
            },
            {
                path:'/service-details',
                element:<Details/>
            },
            {
                path:'/search-result',
                element:<SearchResult/>
            },
            {
                path:'/checkout',
                element:<PrivateRoute><Checkout/></PrivateRoute>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path:'',
                element:<Welcome/>
            },
            {
                path:'my-bookings',
                element:<MyBookings/>
            },
            {
                path:'become-host',
                element:<BecomeAHost/>
            }
        ]
    }
])

export default router;