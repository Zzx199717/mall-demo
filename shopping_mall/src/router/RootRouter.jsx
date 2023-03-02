import React, { Suspense } from 'react'
import { BrowserRouter, Switch,Redirect,Route} from 'react-router-dom';
// import Main from "../pages/main/Main";
// import Login from "../pages/login/Login";
// const Register = React.lazy(() => import('../pages/register/Register'))
// const Notfound = React.lazy(() => import('../pages/404/Notfound'))
import RouterGuards from './RouterGuards';
export default function RootRouter() {
    console.log(11);
    return (
        <Suspense fallback={<h1>......加载中</h1>}>
            <BrowserRouter>
                <Switch>
                    <RouterGuards></RouterGuards>
                    {/* <Redirect exact from='/' to='/shopping_mall'></Redirect>
                    <Route exact path='/login' component={Login}></Route>
                    <Route  path='/shopping_mall' component={Main}></Route>
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path='/404' component={Notfound}></Route>
                    <Redirect to='/404'></Redirect> */}
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}
