import { Avatar, Breadcrumb, Dropdown, Image, Layout, Menu, message } from 'antd'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import Logo from '../components/Logo'
import Sidebar from '../components/Sidebar'
import { StyledHeader, StyledLogo, StyledNav } from '../components/StyleComponent'
import { clearState } from '../features/auths/authSlice'

type Props = {}

const { Header, Content, Footer } = Layout

const AdminLayout = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Layout>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: "0 20px" }}>
            <StyledHeader>
              <Logo />
              <StyledNav>
                <li><Dropdown overlay={<Menu>
                  <Menu.Item>
                    <Link to={"/"}>Homepage</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={"/profile"}>Profile</Link>
                  </Menu.Item>
                  <Menu.Item onClick={() => {
                    dispatch(clearState());
                    message.success("Logout success", 2, () => {
                      navigate("/");
                    })
                  }}>
                    Logout
                  </Menu.Item>
                </Menu>} placement="bottom" arrow={{ pointAtCenter: true }}>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
                </Dropdown></li>
              </StyledNav>
            </StyledHeader>
          </Header>
          <Content style={{ margin: '20px auto', width: "80%" }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AdminLayout