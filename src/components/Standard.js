import { Card } from "antd";
import React from "react";

const Standard = () => (
  <Card
    style={{
      width: 350,
      height: 450,
      backgroundColor: '#142850',
    }}
  >
    <h3>Only $67 /month</h3>
    <p>Card content</p>
    <p>Card content</p>
    <button className="btnButton">Standard</button>
  </Card>
);

export default Standard;
