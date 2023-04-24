import React, { useState } from 'react'
import { Col, Carousel, Row } from 'antd'
import styles from './index.module.less'

const RightPanel: React.FC = () => {
  return (
    <>
      <Carousel autoplay dotPosition="right">
        <img
          src="../../src/assets/carousel-1.png"
          alt=""
          className={styles['carousel-img']}
        />

        <img
          src="../../src/assets/carousel-2.png"
          alt=""
          className={styles['carousel-img']}
        />
      </Carousel>

      <div className={styles['ad-con']}>
        <a href="">
          <img src="../../src/assets/ad-1.jpg" alt="" />
        </a>
        <a href="">
          <img src="../../src/assets/ad-2.jpg" alt="" />
        </a>
        <a href="">
          <img src="../../src/assets/ad-3.jpg" alt="" />
        </a>
        <a href="">
          <img src="../../src/assets/ad-4.jpg" alt="" />
        </a>
      </div>

      <div className={styles['ad-bottom']}>
        <a href="">
          <img src="../../src/assets/ad-bottom.jpg" alt="" />
        </a>
      </div>
    </>
  )
}

export default RightPanel
