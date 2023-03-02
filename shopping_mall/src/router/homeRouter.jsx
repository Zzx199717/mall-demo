import React from 'react'
import { Switch, Route,Redirect} from 'react-router-dom';
import Home from '../pages/home/Home';
import User from '../pages/user/User'
import Role from '../pages/role/Role'
import Commodity from '../pages/commodity/Commodity'
import Varieties from '../pages/commodity/Varieties';
import Information from '../pages/information/Information'
import TransactionFlow from '../pages/information/TransactionFlow';
export default function homeRouter() {
    return (
        <Switch>
            <Redirect exact from='/shopping_mall' to='/shopping_mall/home'></Redirect>
            <Route exact path='/shopping_mall/home' component={Home}></Route>
            <Route exact path='/shopping_mall/user' component={User}></Route>
            <Route exact path='/shopping_mall/role' component={Role}></Route>
            <Route exact path='/shopping_mall/commodity' component={Commodity}></Route>
            <Route exact path='/shopping_mall/varieties' component={Varieties}></Route>
            <Route exact path='/shopping_mall/information' component={Information}></Route>
            <Route exact path='/shopping_mall/transactionFlow' component={TransactionFlow}></Route>
        </Switch>
    )
}
