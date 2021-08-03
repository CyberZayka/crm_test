import React, {memo} from "react";
import {Switch, Route, Redirect} from "react-router-dom"

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthPage from "../pages/AuthPage/AuthPage";

import VerticalTabs from "../components/Navbar/Navbar";

const AppRoutes = ({isAuth, logo}) => {

   return (
         <>            
            <Switch>
               <Redirect exact from='/' to='/api/main' />
               {isAuth && <Redirect exact from='/login' to='/api/main' />}
               <Route exact path='/login'>
                  <AuthPage isAuth={isAuth} />
               </Route>
               <ProtectedRoute exact path='/api/main' isAuth={isAuth}>
                  <VerticalTabs isAuth={isAuth} logo={logo} />
               </ProtectedRoute>
               <ProtectedRoute exact path='/api/companies' isAuth={isAuth}>
                  <VerticalTabs isAuth={isAuth} logo={logo} />
               </ProtectedRoute>
               <ProtectedRoute exact path='/api/employees' isAuth={isAuth}>
                  <VerticalTabs isAuth={isAuth} logo={logo} />
               </ProtectedRoute>
               <ProtectedRoute exact path='/api/about' isAuth={isAuth}>
                  <VerticalTabs isAuth={isAuth} logo={logo} />
               </ProtectedRoute>
               <ProtectedRoute>
               <Route path='*'><ErrorPage /></Route>
               </ProtectedRoute>
            </Switch>

         </>
   );
}

const ProtectedRoute = ({children, isAuth, ...rest}) => {
   return <Route {...rest} render={() => {
     if (isAuth) {
       return children
     } else {
       return <Redirect to='/login' />
     }
   }} />
 }

export default memo(AppRoutes);