import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Redirect, Routes, Route, useRoutes, Router, Navigate } from 'react-router-dom';
import routerList from '../config/rootRouterList'
export default function RootRouter() {
    console.log(11);
    return (
        <Suspense fallback={<h1>......加载中</h1>}>
            <BrowserRouter>
                <Routes>
                    {/* <RouterGuards></RouterGuards> */}
                    {/* <Redirect exact from='/' to='/shopping_mall'></Redirect>
                    <Route exact path='/login' component={Login}></Route>
                    <Route  path='/shopping_mall' component={Main}></Route>
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path='/404' component={Notfound}></Route>
                    <Redirect to='/404'></Redirect> */}
                    {routerList.map(item => {
                        if (item.children) {
                            return <Route key={item.path} path={item.path} element={item.element}>
                                {item.children.map(res => (
                                    <Route
                                        key={res.path}
                                        path={res.path}
                                        element={
                                            res.path=='/shopping_mall'?<Navigate to='home'/>:res.element
                                        }
                                    >
                                    </Route>
                                ))}
                            </Route>
                        } else {
                            return <Route key={item.path} path={item.path} element={
                                item.path=='/'?<Navigate to='/shopping_mall'/>:item.element
                            }></Route>
                        }
                    })}
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
