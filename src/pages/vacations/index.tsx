import React from 'react'
import Departure from './components/Departure'
import Search from './components/Search'
import Destination from './components/Destination'
import RightPanel from './components/RightPanel'
import Product from './components/Product'
import styles from './index.module.less'
import { Col, Divider, Row } from 'antd'
const Vacations: React.FC = () => {
  return (
    <>
      <Row gutter={20} className={styles.top}>
        <Col span={7}>
          <Departure></Departure>
        </Col>
        <Col span={17}>
          <Search></Search>
        </Col>
      </Row>

      <Row gutter={20} style={{ marginTop: 20 }}>
        <Col span={7}>
          <Destination />
        </Col>
        <Col span={17}>
          <RightPanel />
        </Col>
      </Row>

      <div className={styles['product-wrap']}>
        <Product />
      </div>
    </>
  )
}
export default Vacations
