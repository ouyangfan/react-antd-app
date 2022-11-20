import React from 'react'
import styles from './index.module.less'
import { Input, Space, Button, Tooltip, Divider, Dropdown } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

const { Search } = Input

const items: MenuProps['items'] = [
  {
    label: '机票 + 相关订单',
    key: '0',
  },
  {
    label: '酒店订单',
    key: '1',
  },
  {
    label: '旅游订单',
    key: '2',
  },
  {
    label: '全部订单',
    key: '3',
  },
  {
    label: '火车票订单',
    key: '4',
  },
  {
    type: 'divider',
  },
  {
    label: '手机号查订单',
    key: '5',
  },
]

export class HeaderPage extends React.Component {
  render(): React.ReactNode {
    const onSearch = (value: string) => console.log(value)

    return (
      <>
        <div className={styles['header-wrap']}>
          <div className={styles['header-wrap_left']}>
            <a href="" className={styles.logo}>
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
            <a className="primary-text">
              <UserOutlined className="mr-5" />
              登录
            </a>
            <a className="primary-text ml-20">注册</a>
            <Dropdown menu={{ items }}>
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
      </>
    )
  }
}
