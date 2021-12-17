import React, {useState, useEffect} from 'react'
import {Layout, Menu} from 'antd'
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import './style.less'

const {Header, Sider, Content} = Layout
const {SubMenu} = Menu

const IndexLayout: React.FC = (props:any) => {
  const location = useLocation();
  const [keyNmae, setKeyName] = useState('')
  const navigate = useNavigate()
  const handleClick = (e) => {
    setKeyName(e.key)
    navigate(e.key)
  }
  useEffect(() => {
    setKeyName(location.pathname)
  }, [location])
  return (
    <Layout>
      <Header>后台管理系统</Header>
      <Layout>
        <Sider>
          <Menu onClick={handleClick} style={{width: 200}} selectedKeys={[keyNmae]} mode="inline">
            <SubMenu key="sub2" title={<span>功能</span>}>
              <Menu.Item key="/index/complex">js繁转简</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{margin: '16px'}}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default IndexLayout;
