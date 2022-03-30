import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "antd/dist/antd.css"
import { useAppDispatch, useAppSelecter } from './app/hooks'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './layouts/WebsiteLayout'
import Home from './pages/client/Home'
import About from './pages/client/About'
import Products from './pages/client/Products'
import ProductDetail from './pages/client/ProductDetail'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import List from './pages/admin/products/List'
import Add from './pages/admin/products/Add'
import Edit from './pages/admin/products/Edit'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' >
            <Route index element={<Products />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
        </Route>
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<List />} />
            <Route path='add' element={<Add />} />
            <Route path=':id/edit' element={<Edit />} />
          </Route>
        </Route>
      </Routes>
    </div >)
};

export default App
