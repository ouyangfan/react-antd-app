import React from 'react'
import { Cascader, Input, Select, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styles from '../index.module.less'

const { Option } = Select

const options = [
  { value: 'all', label: '全部产品' },
  { value: '11', label: '出发地参团' },
  { value: '12', label: '目的地参团' },
  { value: '13', label: '自由行' },
  { value: '14', label: '目的地自由行' },
  { value: '15', label: '私家团' },
  { value: '16', label: '目的地私家团' },
  { value: '17', label: '游轮' },
  { value: '18', label: '游学' },
  { value: '19', label: '高端游' },
  { value: '20', label: '一日游' },
  { value: '21', label: '签证' },
]
export const Search: React.FC = () => {
  return (
    <>
      <Input.Group compact>
        <Select defaultValue="all" style={{ width: 136 }} size="large">
          {options.map((item) => (
            <Option value={item.value} key={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
        <Input style={{ width: 265 }} defaultValue="" size="large" />
        <Button type="primary" size="large" icon={<SearchOutlined />}>
          搜索
        </Button>
      </Input.Group>
    </>
  )
}
