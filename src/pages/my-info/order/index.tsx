import React, { useState, useEffect } from "react";
import { Button, Alert, Tabs } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import http from "@/plugins/axios";
import OrderItem from "./OrderItem";

const items = [
  {
    label: "全部订单",
    key: "ALL",
    OrderStatusCode: "VACATION_ALL",
  },
  {
    label: "未出行",
    key: "NOTra",
    OrderStatusCode: "VACATION_NOTra",
  },
  {
    label: "待支付",
    key: "UNCOMMIT",
    OrderStatusCode: "VACATION_UNCOMMIT",
  },
  {
    label: "待点评",
    key: "toBeCommented",
    OrderStatusCode: "VACATION_toBeCommented",
  },
];

const Order: React.FC = () => {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrderList();
  }, []);

  const getOrderList = () => {
    setLoading(true);
    http
      .get("/api/order/list")
      .then((res: any) => {
        setOrderList(res.data.orderList);
      })
      .finally(() => setLoading(false));
  };

  const filterOrderList = (OrderStatusCode: string) => {
    if (OrderStatusCode === "VACATION_ALL") {
      return orderList;
    }
    return orderList.filter(
      (list: any) => list.OrderStatusCode === OrderStatusCode
    );
  };

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
                  orderList={filterOrderList(item.OrderStatusCode)}
                  loading={loading}
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
