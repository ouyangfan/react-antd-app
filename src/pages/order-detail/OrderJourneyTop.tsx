import React, { useEffect, useState } from 'react'
import { Card } from 'antd'

interface OrderJourneyTopProps {
  product: any
}
const OrderJourneyTop: React.FC<OrderJourneyTopProps> = (props) => {
  const { product } = props

  return (
    product && (
      <Card style={{ width: '100%', marginTop: '20px' }}>
        <p className="card-title">产品信息</p>
        <p className="font-bold">{product.name}</p>
        <p>
          {product.bookDate.title}：{product.bookDate.date}
        </p>
        <p>
          {product.tourDate.title}：{product.tourDate.dateList[0]} -
          {product.tourDate.dateList[1]}
        </p>
      </Card>
    )
  )
}

export default OrderJourneyTop
