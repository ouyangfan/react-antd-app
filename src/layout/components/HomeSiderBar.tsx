import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, Button } from 'antd'
import React, { useState } from 'react'
import styles from '../index.module.less'

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
  getItem('酒店', 'sub1', <span className="iconfont  icon-jiudian"></span>, [
    getItem('国内酒店', '1'),
    getItem('国外酒店', '2'),
  ]),
  getItem('机票', 'sub2', <span className="iconfont  icon-jipiao "></span>, [
    getItem('国内国际港澳台', '5'),
    getItem('特价机票', '6'),
    getItem('航班动态', '7'),
    getItem('值机选择', '8'),
    getItem('退票改签', '9'),
    getItem('机场攻略', '10'),
    getItem('定制包机', '11'),
  ]),
  getItem(
    '火车票',
    'sub3',
    <span className="iconfont  icon-huochepiao"></span>,
    [getItem('国内火车票', '12'), getItem('国际港澳台', '13')],
  ),
  getItem('旅游', 'sub4', <span className="iconfont  icon-lvyou"></span>, [
    getItem('旅游首页', '14'),
    getItem('周末游', '15'),
    getItem('跟团游', '16'),
    getItem('自由行', '17'),
    getItem('私家团', '18'),
    getItem('游轮', '19'),
    getItem('一日游', '20'),
    getItem('主题游', '21'),
    getItem('定制旅游', '22'),
  ]),
  getItem(
    '攻略 景点',
    'sub5',
    <span className="iconfont icon-gonglve"></span>,
    [],
  ),
  getItem(
    '汽车 船票',
    'sub6',
    <span className="iconfont  icon-qichepiao "></span>,
    [getItem('汽车票', '23'), getItem('船票', '24')],
  ),
  getItem(
    '门票 活动',
    'sub13',
    <span className="iconfont  icon-menpiao"></span>,
    [],
  ),
  getItem('用车', 'sub7', <span className="iconfont  icon-yongche"></span>, [
    getItem('国内租车', '25'),
    getItem('境外租车', '26'),
  ]),
  getItem(
    '全球购',
    'sub8',
    <span className="iconfont  icon-quanqiugou"></span>,
    [],
  ),
  getItem(
    '礼品卡',
    'sub9',
    <span className="iconfont  icon-lipinka"></span>,
    [],
  ),
  getItem(
    '企业商旅',
    'sub10',
    <span className="iconfont  icon-xiechengshanglv"></span>,
    [],
  ),
  getItem(
    '携程金融',
    'sub11',
    <span className="iconfont  icon-jinrongguanli "></span>,
    [],
  ),
]

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

interface PropTypes {
  collapsed: boolean
  setCollapsed: any
}
export const SiderBarPage: React.FC<PropTypes> = (props) => {
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  return (
    <>
      <div className={styles['collapsed-wrap']}>
        <Button type="primary" onClick={props.setCollapsed}>
          {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
      />
    </>
  )
}
