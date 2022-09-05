import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './Bottoni.css';
import FormSignIn from './FormSignIn';
const BottoneModale = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className="btnNavbar btnNavbarColor" style={{
        'width': '170px',
        'height': '40px',
        'backgroundColor': '#00ADB5',
        'borderRadius': '6px',
        'color': '#ffff',
        'fontWeight': 'bold',
        'fontSize': '15px'
    }} 
    onClick={showModal}>
        Login
      </Button>
      <Modal title="Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <FormSignIn onHandleStorage={props.onHandleStorage} />
      </Modal>
    </>
  );
};

export default BottoneModale;
