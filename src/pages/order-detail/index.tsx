import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import {
  Col,
  Divider,
  Row,
  Breadcrumb,
  Card,
  Spin,
  Anchor,
  Button,
  Descriptions,
  Modal,
} from 'antd'
import {
  ProfileOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import http from '@/plugins/axios'
import './index.less'
import QuickOrderDetailCard from './QuickOrderDetailCard'
import OrderService from './OrderService'
import OrderJourneyTop from './OrderJourneyTop'
import ResourceTravel from './ResourceTravel'

const OrderDetailBreadcrumb: React.FC = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>我的携程</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/my-info/all">度假订单</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>订单详情</Breadcrumb.Item>
    </Breadcrumb>
  )
}

const OrderStatusCard: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal()
  const confirm = () => {
    modal.confirm({
      title: '提示',
      icon: <ExclamationCircleOutlined />,
      content: '确认取消吗？',
      okText: '确认',
      cancelText: '取消',
    })
  }
  return (
    <Card style={{ width: '100%' }}>
      <div className="status-line-one">
        <ProfileOutlined className="text-orange" />

        <span className="status-name text-orange">未提交</span>
        <span className="status-progress-text">查看订单进度</span>

        <span className="pull-right secondary-text order-id">
          订单号：32423423
        </span>
      </div>
      <div className="status-line-three">
        <Button type="primary" className="pull-right" onClick={confirm}>
          取消订单
        </Button>
        {contextHolder}
      </div>
    </Card>
  )
}

const OrderResourceTravelInfo: React.FC = () => {
  return (
    <Card style={{ width: '100%', marginTop: '20px' }}>
      <p className="card-title">行程</p>
      <p>以下时间均为当地时间</p>
      <p>6日套餐</p>
      <p>使用时间2023年03月25日</p>
    </Card>
  )
}

const BookingInfo: React.FC = () => {
  return (
    <Card style={{ width: '100%', marginTop: '20px' }}>
      <p className="card-title">预订信息</p>
      <Descriptions title="旅客1" column={1}>
        <Descriptions.Item label="中/英文姓名">习佳</Descriptions.Item>
        <Descriptions.Item label="国籍"> 中国大陆</Descriptions.Item>
        <Descriptions.Item label="证件类型">
          身份证 610524*******72029
        </Descriptions.Item>
        <Descriptions.Item label="证件有效期">empty</Descriptions.Item>
        <Descriptions.Item label="性别">女</Descriptions.Item>
        <Descriptions.Item label="出生日期">1990-10-17</Descriptions.Item>
        <Descriptions.Item label="手机号码">86-187****8239</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

const OrderDelivery: React.FC = () => {
  return (
    <Card style={{ width: '100%', marginTop: '20px' }}>
      <p className="card-title">配送信息</p>
      <Descriptions title="收件人信息" column={1}>
        <Descriptions.Item label="收件人姓名">赵康</Descriptions.Item>
        <Descriptions.Item label="联系号码">+86 187****8239</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

const TotalPriceCard: React.FC = () => {
  return (
    <Card style={{ width: '100%' }}>
      <div className="total-price-title">
        订单总额
        <span className="price">¥6484</span>
      </div>
    </Card>
  )
}

const OrderDetail: React.FC = () => {
  const [orderDetail, setOrderDetail] = useState<any>([])
  const [orderResourceDetail, setOrderResourceDetail] = useState<any>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getOrderDetail()
    getOrderResourceDetail()
  }, [])

  const getOrderDetail = () => {
    setLoading(true)
    http
      .get('/api/tour/order/GetOrderDetail')
      .then((res: any) => {
        setOrderDetail(res.data.orderDetail)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const getOrderResourceDetail = () => {
    setLoading(true)
    http
      .get('/api/tour/order/OrderResourceDetail')
      .then((res: any) => {
        setOrderResourceDetail(res.data.orderResourceDetail)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {loading ? (
        <div className="spin-wrap">
          <Spin size="large" />
        </div>
      ) : (
        <div className="order-detail">
          <div className="mt-20">
            <OrderDetailBreadcrumb />
          </div>
          <Row gutter={20} className="mt-20">
            <Col span={16}>
              {/* 订单状态 */}
              <OrderStatusCard />
              {/* 产品信息 */}
              <OrderJourneyTop product={orderDetail?.product} />
              {/* 机票 */}
              <ResourceTravel flight={orderResourceDetail?.Flight} />
              {/* 行程 */}
              <OrderResourceTravelInfo />
              {/* 预订信息 */}
              <BookingInfo />
              {/* 配送信息 */}
              <OrderDelivery />
              <OrderService />
            </Col>
            <Col span={8}>
              {/* 订单总额 */}
              <TotalPriceCard />
              {/* 二维码 */}
              <QuickOrderDetailCard />
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}
export default OrderDetail
