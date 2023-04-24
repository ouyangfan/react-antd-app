import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import { CloseOutlined, SwapRightOutlined } from '@ant-design/icons'

interface ResourceTravelProps {
  flight: any
}
const ResourceTravel: React.FC<ResourceTravelProps> = (props) => {
  const { flight } = props

  return (
    flight && (
      <Card style={{ width: '100%', marginTop: '20px' }}>
        <p className="card-title">机票</p>
        {flight.segmentInfoList.map((item, index) => (
          <p key={index} className="font-bold">
            <span className="mr-5">
              {item.showSegmentInfo.departDateTime}&nbsp;&nbsp;
              {item.showSegmentInfo.departCityName}
            </span>
            <SwapRightOutlined />
            <span className="ml-5">
              {item.showSegmentInfo.arriveDateTime}&nbsp;&nbsp;
              {item.showSegmentInfo.arriveCityName}
            </span>
          </p>
        ))}
      </Card>
    )
  )
}

export default ResourceTravel
