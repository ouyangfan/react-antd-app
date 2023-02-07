import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import { FooterPage } from '@/layout/components/FooterPage'
import { LoginForm } from './LoginForm'

// import bg from '@/assets/login/bg.jpg'

const Login: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.login}>
      <div className={styles['top-container']}>
        <div>
          <a href="" className={styles.logo}></a>
        </div>
        <div>
          <a className="primary-text font-14" onClick={(e) => navigate('/')}>
            <HomeOutlined className="mr-5" />
            首页
          </a>
          <a className="primary-text ml-20 font-14">
            <span className="iconfont icon-cooperation mr-5"></span>
            无障碍阅读
          </a>
        </div>
      </div>
      <div className={styles['content-wrap']}>
        <div className={styles['mod-box']}>
          <div className={styles['form-wrap']}>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
      <FooterPage></FooterPage>
    </div>
  )
}

export default Login
