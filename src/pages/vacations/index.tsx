import React from 'react'
// import Departure from './components/Top/Departure'
// import Search from './components/Top/Search'
// import Destination from './components/Top/Destination'
// import RightPanel from './components/Top/RightPanel'
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
