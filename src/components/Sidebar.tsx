import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


type Props = {}

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = (props: Props) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Sider collapsible collapsed={collapse} onCollapse={() => { setCollapse(!collapse) }}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="products">Products</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar