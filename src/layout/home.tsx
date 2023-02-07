import React, { useState } from 'react'
import { Layout } from 'antd'
import { SiderBarPage } from './components/HomeSiderBar'
import { HeaderPage } from './components/Header'
import { FooterPage } from './components/FooterPage'
import styles from './index.module.less'
import { Outlet } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout

const HomeLayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Sider collapsed={collapsed}>
        <SiderBarPage
          collapsed={collapsed}
          setCollapsed={() => setCollapsed(!collapsed)}
        ></SiderBarPage>
      </Sider>
      <Layout>
        <Header>
          <HeaderPage></HeaderPage>
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
        <Footer>
          <FooterPage></FooterPage>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default HomeLayoutPage
