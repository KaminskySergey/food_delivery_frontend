
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

import Shop from "pages/Shop/Shop";

import Shoping from "pages/Shoping/Shoping";


import { Suspense, useEffect } from "react";
import RegisterForm from "pages/RegisterForm/RegisterForm";
import LoginForm from "pages/LoginForm/LoginForm";
import { RestrictedRoute } from "./RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";

import { selectedToken } from "redux/auth/selectors";
import { refresh } from "redux/auth/operations";
import Home from "pages/Home/Home";


const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectedToken)

  useEffect(() => {
    if (token) {
      dispatch(refresh());
    }
  }, [dispatch, token])
  return (
    <>
      <Layout>
        <Suspense>

        <Routes>
        <Route path='/' element={<RestrictedRoute component={Home} redirectTo="/shop"/>} />
        <Route path="/shop/" element={<RestrictedRoute component={Shop} redirectTo="/shop"/>} />
        <Route path="/shop/:shopId" element={<RestrictedRoute component={Shop} redirectTo="/shop"/>} />
        <Route path="/shoping" element={<RestrictedRoute component={Shoping} redirectTo="/shoping"/>} />
        <Route path="/register" element={<RestrictedRoute component={RegisterForm} redirectTo="/shop"/>} />
        <Route path="/login" element={<RestrictedRoute component={LoginForm} redirectTo="/shop"/>} />
      </Routes> 
      
        </Suspense>
      </Layout>
    </>
  );
};


      

export default App