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
      <Button onClick={showModal}>Sign Up</Button>
      <Modal title="SignUp" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <FormSignUp />
      </Modal>
    </>
  );
};

export default BottoneSignUp;
