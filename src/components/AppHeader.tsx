import { Avatar, Card, Dropdown, Image, Menu, message, Popover, Select } from 'antd'
import BrandIcon from "./BrandIcon.svg"
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { StyledHeader, StyledLogo, StyledNav } from './StyleComponent'
import { useAppDispatch, useAppSelecter } from '../app/hooks'
import { clearState } from "../features/auths/authSlice"
import Logo from "./Logo"
import Search from 'antd/lib/input/Search'
import { clearCart } from '../features/cart/cartSlice'

type Props = {}
const { Option } = Select;
const AppHeader = (props: Props) => {
  const { userInfo } = useAppSelecter(state => state.authReducer);
  const { cart } = useAppSelecter(state => state.cartReducer);
  const { products } = useAppSelecter(state => state.productReducer);
  const [display, setDisplay] = useState<boolean>(false);
  const [result, setResult] = useState<any>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartCount = cart?.products ? cart.products.length : 0;
  const menu = userInfo ? (<Menu>
    <Menu.Item>
      <Link to={"/admin"}>Admin</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/profile"}>Profile</Link>
    </Menu.Item>
    <Menu.Item onClick={() => {
      dispatch(clearState());
      dispatch(clearCart());
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
      name: "Category",
      to: "/category"
    },
    {
      name: "About",
      to: "/about"
    }
  ];
  const options = (<></>);
  const onSearch = (value: string, e: any) => {
    const text = value;
    navigate(`search/${text}`);
  }

  return (
    <>
      <StyledHeader  >
        <StyledLogo onClick={() => { navigate("/") }}>
          <img src={BrandIcon} alt="" />
          <h2>Switch!</h2>
        </StyledLogo>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          {pageLink.map((page, index) => {
            const key = index + 1;
            return <Menu.Item key={key}> <Link style={{ textDecoration: "none" }} to={page.to}>{page.name}</Link> </Menu.Item>;
          })}
        </Menu>
        <StyledNav>
          <li >
            <Popover placement='bottom' content={<Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />}>                      <SearchOutlined />
            </Popover>
          </li>

          <li style={{ position: "relative", cursor: 'pointer' }} onClick={() => { navigate("/cart") }}><ShoppingCartOutlined /> <span style={{ position: "absolute", top: 15, left: 10, background: "var(--ant-primary-color)", lineHeight: "16px", width: "16px", height: "16px", textAlign: "center", borderRadius: "50%", fontSize: "12px", color: 'white' }}>{cartCount}</span></li>
          {userInfo && <li> <span style={{ textTransform: "capitalize" }}>Hi! {userInfo?.username}</span> </li>}
          <li><Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
            <Avatar src={<Image src={userInfo?.image?.url ?? "https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} />} />
          </Dropdown></li>
        </StyledNav>
      </StyledHeader >

    </>
  )
}

export default AppHeader