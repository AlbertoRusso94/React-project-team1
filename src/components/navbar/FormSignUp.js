import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import './formModal.css';



const FormSignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    fetch('http://127.0.0.1:8000/auth/signup',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
  }).then(response => response.json())
  .then(response => console.log(response))
  
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="signup"
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
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: 'email',
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
            message: 'Please input your password!',
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
        <Button htmlType="submit" style={{
          'backgroundColor': '#00ADB5',
          'width': '120px',
          'color': 'white',
          'fontWeight': 'bold',
          'border': '#00ADB5'
        }}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSignUp;
