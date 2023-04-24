import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import "./index.less";
const QuickOrderDetailCard: React.FC = () => {
  const [isHide, setIsHide] = useState(false);

  const hideElement = () => {
    setIsHide(!isHide);
  };

  return (
    <Card
      style={{
        width: "100%",
        marginTop: "20px",
        display: isHide ? "none" : "block",
      }}
    >
      <div>
        <div className="clearfix">
          <span className="pull-left quick-order-detail-title">
            查看订单详情
          </span>
          <span className="pull-right cursor-poiner" onClick={hideElement}>
            <CloseOutlined />
          </span>
        </div>
        <div style={{ marginTop: "16px" }}>
          <img
            src="../../src/assets/ios_and_6_more.png"
            alt=""
            width="100"
            height="100"
          />
        </div>
      </div>
    </Card>
  );
};

export default QuickOrderDetailCard