import { Avatar, Dropdown, Image, Menu, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { StyledHeader, StyledLogo, StyledNav } from './StyleComponent'
import { useAppDispatch, useAppSelecter } from '../app/hooks'
import { clearState } from "../features/auths/authSlice"
import Logo from "./Logo"

type Props = {}

const AppHeader = (props: Props) => {
  const { userInfo } = useAppSelecter(state => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const menu = userInfo ? (<Menu>
    <Menu.Item>
      <Link to={"/admin"}>Admin</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/profile"}>Profile</Link>
    </Menu.Item>
    <Menu.Item onClick={() => {
      dispatch(clearState());
      message.success("Logout success")
    }}>
      Logout
    </Menu.Item>
  </Menu>) : (<Menu>
    <Menu.Item>
      <Link to={"/login"}>Login</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/register"}>Register</Link>
    </Menu.Item>
  </Menu>);
  const pageLink = [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "Products",
      to: "/products"
    },
    {
      name: "About",
      to: "/about"
    }
  ];

  return (
    <StyledHeader>
      <Logo />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        {pageLink.map((page, index) => {
          const key = index + 1;
          return <Menu.Item key={key}> <Link style={{ textDecoration: "none" }} to={page.to}>{page.name}</Link> </Menu.Item>;
        })}
      </Menu>
      <StyledNav>
        <li><SearchOutlined /></li>
        <li><ShoppingCartOutlined /></li>
        {userInfo && <li> <span style={{ textTransform: "capitalize" }}>Hi! {userInfo?.username}</span> </li>}
        <li><Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
          <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        </Dropdown></li>
      </StyledNav>
    </StyledHeader>
  )
}

export default AppHeader