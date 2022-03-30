import { Dropdown, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { StyledHeader, StyledLogo, StyledNav } from './StyleComponent'

type Props = {}

const AppHeader = (props: Props) => {
  const menu = (<Menu>
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
      <StyledLogo>
        <img src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png" alt="logo" />
      </StyledLogo>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        {pageLink.map((page, index) => {
          const key = index + 1;
          return <Menu.Item key={key}> <Link style={{ textDecoration: "none" }} to={page.to}>{page.name}</Link> </Menu.Item>;
        })}
      </Menu>
      <StyledNav>
        <li><SearchOutlined /></li>
        <li><ShoppingCartOutlined /></li>
        <li> <span>Hello</span> </li>
        <li><Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
          <UserOutlined />
        </Dropdown></li>
      </StyledNav>
    </StyledHeader>
  )
}

export default AppHeader