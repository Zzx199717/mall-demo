import React from 'react'
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
const Register = React.lazy(() => import('../pages/register/Register'))
const Notfound = React.lazy(() => import('../pages/404/Notfound'))
export default [
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/',component:Main,isLogin:true},
    {path:'/404',component:Notfound},
    {path:'/shopping_mall',component:Main},
]
