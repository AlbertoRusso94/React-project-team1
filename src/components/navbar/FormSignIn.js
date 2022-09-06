import React from "react";
import './formModal.css'
import { Form, Input, Button, Checkbox } from "antd";

const FormSignIn = (props) => {
  const onFinish = (values) => {
    

    fetch("http://127.0.0.1:8000/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {if(response.message){ 
        window.alert(response.message)
        return
      }props.onHandleStorage(JSON.stringify(response))});
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item className="formItem"
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="login" style={{
          'backgroundColor': '#CC00FF',
          'width': '120px',
          'color': 'white',
          'fontWeight': 'bold',
          'border': '#00ADB5'
        }}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSignIn;
