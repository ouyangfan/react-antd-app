import React, { useState, useEffect } from "react";
import { Button, Alert, Tabs } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import http from "@/plugins/axios";

const OrderItem: React.FC = (props) => {
  console.log(props);

  return <>OrderItem</>;
};

const items = [
  {
    label: "全部订单",
    key: "all",
    OrderStatusCode: 'VACATION_ALL'
  },
  {
    label: "未出行",
    key: "noTravel",
    OrderStatusCode: 'VACATION_NOTravel'
  },
  {
    label: "待支付",
    key: "toBePaid",
    OrderStatusCode: 'VACATION_UNCOMMIT'
  },
  {
    label: "待点评",
    key: "toBeCommented",
    OrderStatusCode: 'VACATION_toBeCommented'

  },
];

const Order: React.FC = () => {
  const [orderList, setOrderList] = useState([]);

  const getOrderList = () => {
    http.get("/api/order/list").then((res: any) => {
      setOrderList(res.data.orderList);
    });
  };

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <>
      <Alert
        message="您可以在线查看近一年订单，如需查找更久之前的订单，请至携程app或致电95010"
        type="info"
        showIcon
      />
      <div className="mt-20">
        <Tabs
          defaultActiveKey="all"
          type="card"
          size="middle"
          items={items.map((item) => {
            return {
              ...item,
              children: (
                <OrderItem
                  orderList={orderList.filter(
                    (list: any) => list.OrderStatusCode === "VACATION_UNCOMMIT"
                  )}
                ></OrderItem>
              ),
            };
          })}
        />
      </div>
    </>
  );
};

export default Order;
