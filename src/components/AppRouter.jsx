import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "./router/router";

const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to='/posts'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}

                <Redirect to='/login'/>
            </Switch>


    )
        ;
};

export default AppRouter;
{/*<Route path='/about'>*/
}
{/*    <About/>*/
}
{/*</Route>*/
}
{/*<Route exact path='/posts'>*/
}
{/*    <Posts/>*/
}
{/*</Route>*/
}
{/*<Route exact path='/posts/:id'>*/
}
{/*    <PostIdPage/>*/
}
{/*</Route>*/
}
{/*<Route path='/error'>*/
}
{/*    <Error/>*/
}
{/*</Route>*/
}