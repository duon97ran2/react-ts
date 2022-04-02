import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  BarsOutlined,
  ShopOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';


type Props = {}

const { SubMenu } = Menu;
const { Sider } = Layout;
const Sidebar = (props: Props) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Sider collapsible theme='light' collapsed={collapse} onCollapse={() => { setCollapse(!collapse) }}>
      <div className="logo" />
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">

        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="dashboard">Dashboard</Link>
        </Menu.Item>
        <SubMenu key="products" icon={<ShopOutlined />} title="Products">
          <Menu.Item key="list" icon={<BarsOutlined />}>
            <Link to="products">Product List</Link>
          </Menu.Item>
          <Menu.Item key="add" icon={<PlusCircleOutlined />}>
            <Link to="products/add">Add product</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar