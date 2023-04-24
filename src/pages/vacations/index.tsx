import React from 'react'
import Top from './components/Top'
import Product from './components/Product'
import styles from './index.module.less'
import { Col, Divider, Row } from 'antd'

const Vacations: React.FC = () => {
  return (
    <>
      <Top/>
      <Product />
    </>
  )
}
export default Vacations
