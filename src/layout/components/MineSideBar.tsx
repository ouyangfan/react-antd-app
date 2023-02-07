import React, { useState, useEffect } from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useParams, useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  {
    label: '我的携程首页',
    key: 'home',
  },
  {
    label: '订单',
    key: 'order',
  },
  {
    label: '我的消息',
    key: 'message',
  },
  {
    label: '钱包',
    key: 'w',
    children: [
      {
        label: '我的钱包',
        key: 'wallet',
      },
      {
        label: '钱包安全设置',
        key: 'security-setting',
      },
    ],
  },
  {
    label: '优惠券',
    key: 'promocode',
  },
  {
    label: '积分',
    key: 'my-points',
  },
  {
    label: '我的收藏',
    key: 'collection',
  },
  {
    label: '我的发票',
    key: 'einvoice',
  },
  {
    label: '常用信息',
    key: 'common',
  },
  {
    label: '个人中心',
    key: 'userinfo',
  },
]

export const MineSideBar: React.FC = () => {
  const { menu } = useParams<MatchParams>()
  let [current, setCurrent] = useState(menu)

  const navigate = useNavigate()
  if (typeof current === 'undefined') {
    current = ''
  }

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigate(`/my-info/${e.key}`)
  }

  return (
    <Menu
      mode="inline"
      onClick={onClick}
      defaultSelectedKeys={[current]}
      items={items}
    />
  )
}
