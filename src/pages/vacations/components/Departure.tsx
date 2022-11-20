import React, { useState } from 'react'
import { Cascader } from 'antd'

import styles from '../index.module.less'

interface Option {
  value: string | number
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
      },
    ],
  },
]

export const Departure: React.FC = () => {
  const [text, setText] = useState('请选择')

  const onChange = (_: string[], selectedOptions: Option[]) => {
    setText(selectedOptions[selectedOptions.length - 1].label)
  }

  return (
    <>
      <div className={styles.home_img_box}></div>
      <div className={styles.city_wrap}>
        <span> {text} &nbsp;</span>
        <Cascader
          options={options}
          onChange={onChange}
          className={styles.cascader}
        >
          <a href="#">切换出发地</a>
        </Cascader>
      </div>
    </>
  )
}
