import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout } from "antd"
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import { StyledTrademark } from '../components/StyleComponent'

type Props = {}

const WebsiteLayout = (props: Props) => {
  const navigate = useNavigate();
  const { Header, Footer, Content } = Layout
  const onSearch = (value: any) => console.log(value);
  return (
    <div>
      <Layout className='layout'>
        <Header style={{ position: 'fixed', zIndex: 99, width: '100%' }}>
          <AppHeader />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "20px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'><Outlet /></div>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
        <StyledTrademark>@Copyright by duongtaph13476</StyledTrademark>
      </Layout>
    </div>
  )
}

export default WebsiteLayout