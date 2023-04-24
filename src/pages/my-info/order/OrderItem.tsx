import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

import { Spin, Space } from "antd";
import { msToDate } from "@/utils/format-time";
import "./index.less";

interface ListItemProps {
  order: any;
}
const ListItem: React.FC<ListItemProps> = (props) => {
  const { order } = props;
  const navigate = useNavigate();

  const redirectOrderDetail = () => {
    window.open("/order/detail", "_blank");
  };

  return (
    <div className="item" onClick={redirectOrderDetail}>
=======
import { Spin } from "antd";
import { msToDate } from "@/utils/format-time";
import "./index.less";

const ListItem: React.FC = (props: any) => {
  const { order } = props;
  return (
    <div className="item">
>>>>>>> 0e392ebf7ef388bfcc1f87e2f9eb1e31fdbce4b5
      <h3>
        <span className="mr-20">
          订单号： <span className="card-order-id">{order.OrderID}</span>
        </span>
        <span className="mr-20">预订日期：{msToDate(order.BookingDate)}</span>
        <span>删除订单</span>
      </h3>

      <div className="order-items clearfix">
        <div className="order-info">
          <div className="order-item-title">
            <span>{order.OrderName}</span>
          </div>
          <div className="order-item-txt">
            <span>
              出发日期：{msToDate(order.VacationOrderItems[0].DepartureDate)} 至{" "}
              {msToDate(order.VacationOrderItems[0].EndDate)}
            </span>
          </div>
          <div className="order-item-txt">
            <span>出行人：{order.Passagers.join(" ")}</span>
          </div>
        </div>

        <div className="order-price-group">
          <div className="order-price-status">
            <span className="order-price-status-title">
              {order.OrderStatusName}
            </span>
          </div>
          <div className="order-price-detail">
            <div className="order-price-num">
              <span>
                <span className="order-price-num">总额 </span>
                <span className="order-blod-price">
                  ￥{order.OrderTotalPrice}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderListEmpty: React.FC = () => {
<<<<<<< HEAD
  return <div className="order_list_empty">暂时没有相关订单</div>;
};

const OrderItem: React.FC = (props: any) => {
  const { orderList } = props;
  const listItems = orderList.map((order: any) => (
    <ListItem key={order.OrderID} order={order} />
  ));

=======
  return (
    <div className='order_list_empty'>
      暂时没有相关订单
    </div>
  )
};

const OrderItem: React.FC = (props: any) => {
  console.log(props);
  
>>>>>>> 0e392ebf7ef388bfcc1f87e2f9eb1e31fdbce4b5
  return (
    <>
      {props.loading ? (
        <div className="spin-wrap">
<<<<<<< HEAD
          <Spin size="large" />
        </div>
      ) : (
        <div className="orders_list">
          {props.orderList.length ? listItems : <OrderListEmpty />}
=======
          <Spin />
        </div>
      ) : (
        <div className="orders_list">
          {props.orderList.length
            ? props.orderList.map((order: any) => {
                return <ListItem key={order.OrderID} order={order} />;
              })
            : <OrderListEmpty/>}
>>>>>>> 0e392ebf7ef388bfcc1f87e2f9eb1e31fdbce4b5
        </div>
      )}
    </>
  );
};

export default OrderItem;
