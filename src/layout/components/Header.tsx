import React from 'react'
import styles from '../index.module.less'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Input, Space, Button, Tooltip, Divider, Dropdown } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useSelector, useAppDispatch } from '@/redux/hooks'
import { setUserNull } from '@/redux/user/slice'

const { Search } = Input

const usernameItems: MenuProps['items'] = [
  {
    label: '我的携程首页',
    key: 'home',
  },
  {
    label: '我的钱包',
    key: 'wallet',
  },
  {
    label: '我的收藏',
    key: 'collection',
  },
  {
    type: 'divider',
  },
  {
    label: '退出登录',
    key: 'logout',
  },
]

const orderItems: MenuProps['items'] = [
  {
    label: '机票 + 相关订单',
    key: 'plane-ticket',
  },
  {
    label: '酒店订单',
    key: 'hotel',
  },
  {
    label: '旅游订单',
    key: 'vacations',
  },
  {
    label: '全部订单',
    key: 'all',
  },
  {
    label: '火车票订单',
    key: 'train',
  },
  {
    type: 'divider',
  },
  {
    label: '手机号查订单',
    key: 'phone-number',
  },
]

export const HeaderPage: React.FC = () => {
  const navigate = useNavigate()

  const username = useSelector((s) => s.user.username)
  const token = useSelector((s) => s.user.token)
  const dispatch = useAppDispatch()

  const onSearch = (value: string) => console.log(value)
  const handleLogin = () => {
    navigate('/login')
  }
  const handleMenuClick = (e) => {
    console.log(e.key)
    switch (e.key) {
      case 'logout': {
        dispatch(setUserNull())
        navigate('/login')
        break
      }
      default: {
        navigate(`/my-info/${e.key}`)
        break
      }
    }
  }

  return (
    <div className={styles['header-wrap']}>
      <div className={styles['header-wrap_left']}>
        <a href="/" className={styles.logo}>
          携程旅行网
        </a>

        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          className={styles.search}
        />
      </div>

      <div className={styles['header-wrap_right']}>
        {token ? (
          <Dropdown menu={{ items: usernameItems, onClick: handleMenuClick }}>
            <a onClick={(e) => e.preventDefault()} className="primary-text">
              <Space>
                Hello, {username}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        ) : (
          <>
            <a className="primary-text" onClick={(e) => handleLogin()}>
              <UserOutlined className="mr-5" />
              登录
            </a>
            <a className="primary-text ml-20">注册</a>
          </>
        )}

        <Dropdown menu={{ items: orderItems, onClick: handleMenuClick }}>
          <a onClick={(e) => e.preventDefault()} className="primary-text">
            <span className="iconfont icon-dingdan mr-5 ml-20"></span>
            <Space>
              我的订单
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Divider type="vertical" />
        <Tooltip title="携程客服" placement="bottom">
          <a className="iconfont primary-text icon-kefu mr-20"></a>
        </Tooltip>
        <Tooltip title="携程旅行手机版" placement="bottom">
          <a className="iconfont primary-text icon-tel"></a>
        </Tooltip>
        <Divider type="vertical" />
        <a className="primary-text ml-10">
          <span className="iconfont icon-cooperation mr-5"></span>
          无障碍阅读
        </a>
      </div>
    </div>
  )
}
