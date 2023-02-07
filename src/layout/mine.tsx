import React, { useState } from 'react'
import { Layout } from 'antd'
import { SiderBarPage } from './components/HomeSiderBar'
import { HeaderPage } from './components/Header'
import { FooterPage } from './components/FooterPage'
import { MineSideBar } from './components/MineSideBar'
import styles from './index.module.less'
import { Outlet } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout

const LayoutPage: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Header>
        <HeaderPage></HeaderPage>
      </Header>
      <Layout className="layout-body">
        <Sider style={{ width: 160 }}>
          <MineSideBar></MineSideBar>
        </Sider>
        <Content style={{ margin: '0 20px' }}>
          <Outlet></Outlet>
        </Content>
      </Layout>
      <Footer>
        <FooterPage></FooterPage>
      </Footer>
    </Layout>
  )
}

export default LayoutPage
