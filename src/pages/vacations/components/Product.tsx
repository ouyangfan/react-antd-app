import React from 'react'
import { Cascader, Input, Select, Space, Button, Tabs } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styles from '../index.module.less'

const { Option } = Select

const options = []

const tabItems = [
  {
    label: `精选`,
    key: '1',
    children: `精选`,
  },
  {
    label: `苏州`,
    key: '2',
    children: `苏州`,
  },
  {
    label: `上海`,
    key: '3',
    children: `上海`,
  },
  {
    label: `杭州`,
    key: '4',
    children: `Content of Tab Pane 3`,
  },
  {
    label: `南京`,
    key: '5',
    children: `南京`,
  },
  {
    label: `无锡`,
    key: '6',
    children: `无锡`,
  },
  {
    label: `黄山`,
    key: '7',
    children: `黄山`,
  },
  {
    label: `舟山`,
    key: '8',
    children: `舟山`,
  },
  {
    label: `常州`,
    key: '9',
    children: `常州`,
  },
  {
    label: `扬州`,
    key: '10',
    children: `扬州`,
  },
]
const onChange = (key: string) => {
  console.log(key)
}
const Product: React.FC = () => {
  return (
    <div className={styles['product-item']}>
      <div className={styles['product-item__left']}>
        <h2>周边当地游</h2>
        <div>
          <a href="">
            <img src="../../src/assets/where-to-play.jpg" alt="" />
          </a>
        </div>
      </div>
      <div className={styles['product-item__right']}>
        <Tabs defaultActiveKey="1" onChange={onChange} items={tabItems} />
      </div>
    </div>
  )
}

export default Product
