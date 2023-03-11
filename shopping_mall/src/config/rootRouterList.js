import React from 'react'
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Home from '../pages/home/Home';
import User from '../pages/user/User';
import Role from '../pages/role/Role';
import Commodity from '../pages/commodity/Commodity';
import Varieties from '../pages/commodity/Varieties';
import Information from '../pages/information/Information';
import TransactionFlow from '../pages/information/TransactionFlow';
import { Route } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
const Register = React.lazy(() => import('../pages/register/Register'))
const Notfound = React.lazy(() => import('../pages/404/Notfound'))
// router5写法
// export default [
//     {path:'/login',component:Login},
//     {path:'/register',component:Register},
//     {path:'/',component:Main,isLogin:true},
//     {path:'/404',component:Notfound},
//     {path:'/shopping_mall',component:Main},
//     {path:'/shopping_mall/home',component:Main},
//     {path:'/shopping_mall/user',component:Main},
//     {path:'/shopping_mall/role',component:Main},
//     {path:'/shopping_mall/commodity',component:Main},
//     {path:'/shopping_mall/varieties',component:Main},
//     {path:'/shopping_mall/information',component:Main},
//     {path:'/shopping_mall/transactionFlow',component:Main},
// ]

let routerList = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/', element: <Main /> },
    {
        path: '/shopping_mall', element: <Main />, children: [
            { path: '/shopping_mall', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'user', element: <User /> },
            { path: 'role', element: <Role /> },
            { path: 'commodity', element: <Commodity /> },
            { path: 'varieties', element: <Varieties /> },
            { path: 'information', element: <Information /> },
            { path: 'transactionFlow', element: <TransactionFlow /> },
        ]
    },
    { path: '/404', element: <Notfound /> },
]
export default routerList