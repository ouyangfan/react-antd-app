import React from 'react'
import { Departure } from './components/Departure'
import { Search } from './components/Search'
import styles from './index.module.less'
import { Col, Divider, Row } from 'antd'

export const Vacations: React.FC = () => {
  return (
    <>
      <Row gutter={20} className={styles.top}>
        <Col className="gutter-row" span={7}>
          <Departure></Departure>
        </Col>
        <Col className="gutter-row" span={17}>
          <Search></Search>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col className="gutter-row" span={7}></Col>
        <Col className="gutter-row" span={17}></Col>
      </Row>
    </>
  )
}
