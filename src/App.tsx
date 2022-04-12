import React, { Suspense, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "antd/dist/antd.css"
import { useAppDispatch, useAppSelecter } from './app/hooks'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
const WebsiteLayout = React.lazy(() => import("./layouts/WebsiteLayout"))
const AdminLayout = React.lazy(() => import("./layouts/AdminLayout"))
const Home = React.lazy(() => import("./pages/client/Home"))
const About = React.lazy(() => import("./pages/client/About"))
const Products = React.lazy(() => import("./pages/client/Products"))
const ProductDetail = React.lazy(() => import("./pages/client/ProductDetail"))
const Login = React.lazy(() => import("./pages/client/Login"))
const Register = React.lazy(() => import("./pages/client/Register"))
const Dashboard = React.lazy(() => import("./pages/admin/Dashboard"))
const ProductList = React.lazy(() => import("./pages/admin/products/ProductList"))
const ProductAdd = React.lazy(() => import("./pages/admin/products/ProductAdd"))
const ProductEdit = React.lazy(() => import("./pages/admin/products/ProductEdit"))

import { fetchAsyncProductList } from './features/products/productThunk'
import { AsyncFetchCategoryList } from './features/categories/categoryThunk'
import { LoadingWrapper } from './components/StyleComponent'
import { Spin } from 'antd'
import PrivateRouter from './components/PrivateRouter'
import Search from './pages/client/Search'
import UserList from './pages/admin/users/UserList'
import UserAdd from './pages/admin/users/UserAdd'
import UserUpdate from './pages/admin/users/UserUpdate'
import CategoryAdd from './pages/admin/categories/CategoryAdd'
import CategoryList from './pages/admin/categories/CategoryList'
import CategoryEdit from './pages/admin/categories/CategoryEdit'
import { AsyncFetchCart } from './features/cart/cartThunk'
import Cart from './pages/client/Cart'
import ProductCategory from './pages/client/ProductCategory'



const Loading = (
  <LoadingWrapper>
    <Spin size="large" />
  </LoadingWrapper>
);



function App() {
  const { userInfo } = useAppSelecter(state => state.authReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAsyncProductList());
    dispatch(AsyncFetchCategoryList());
  }, [dispatch]);
  useEffect(() => {
    if (!userInfo) return
    dispatch(AsyncFetchCart(userInfo._id));
  }, [userInfo]);
  return (
    <Suspense fallback={Loading}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' >
              <Route index element={<Products />} />
              <Route path=':id' element={<ProductDetail />} />
            </Route>
            <Route path='category' >
              <Route index element={<ProductCategory />} />
              <Route path=':text' element={<ProductCategory />} />
            </Route>
            <Route path='search/:text' element={<Search />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route path='admin' element={<PrivateRouter user={userInfo} role={1}><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='products'>
              <Route index element={<ProductList />} />
              <Route path='add' element={<ProductAdd />} />
              <Route path=':id/edit' element={<ProductEdit />} />
            </Route>
            <Route path='categories'>
              <Route index element={<CategoryList />} />
              <Route path='add' element={<CategoryAdd />} />
              <Route path=':id/edit' element={<CategoryEdit />} />
            </Route>
            <Route path='users'>
              <Route index element={<UserList />} />
              <Route path='add' element={<UserAdd />} />
              <Route path=':id/edit' element={<UserUpdate />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
};

export default App
