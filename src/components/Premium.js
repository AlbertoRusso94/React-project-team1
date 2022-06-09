import { Card } from "antd";
import React from "react";

const Premium = () => (
  <Card
    style={{
      backgroundColor: '#27496D',
      borderStyle: 'solid',
      width: 350,
      height: 450,
    }}
  >
    <h3>Only $670 /year</h3>
    <h4>SAVE $134 ANNUALLY</h4>
    <p>Card content</p>
    <button className="btnButton">Premium</button>
  </Card>
);

export default Premium;
