import React, { useState } from 'react'
import { Layout } from 'antd'
import { SiderBarPage } from './SiderBar'
import { HeaderPage } from './Header'
import styles from './index.module.less'
import { Outlet } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout

export const LayoutPage: React.FC = () => {
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
        <Footer className="text-center primary-text">
          Copyright©1999-2022, ctrip.com. All rights reserved. |
          ICP证：沪B2-20050130 | 沪ICP备08023580号-3
        </Footer>
      </Layout>
    </Layout>
  )
}
