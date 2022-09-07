import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormSignUp from './FormSignUp';

const BottoneSignUp = () => {
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
      <Button className="btnNavbar" style={{
        'width': '170px',
        'height': '40px',
        'backgroundColor': '#CC00FF',
        'borderRadius': '6px',
        'color': '#ffff',
        'fontWeight': 'bold',
        'fontSize': '15px'
      }} onClick={showModal}>Sign Up</Button>
      <Modal title="SignUp" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <FormSignUp />
      </Modal>
    </>
  );
};

export default BottoneSignUp;
