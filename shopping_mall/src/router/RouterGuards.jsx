import React from 'react'
import { useLocation } from 'react-router';
import routerList from '../config/rootRouterList';
import { BrowserRouter, Switch,Route,Redirect} from 'react-router-dom';
export default function RouterGuards() {
    const location = useLocation()

    const userRoute = routerList.find(item => item.path === location.pathname)
    console.log(userRoute);
    if (userRoute) {
        return <Route exact path={userRoute.path} component={userRoute.component}></Route>
    } else {
        return <Redirect to='/404'></Redirect>
    }
}
