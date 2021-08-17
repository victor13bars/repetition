import React, {useContext} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "./router/router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

    const {isAuth,setIsAuth,isLoading} = useContext(AuthContext)
    console.log(isAuth)

    if(isLoading){
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
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
                        key={route.path}
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