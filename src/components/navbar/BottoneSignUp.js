import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormSignIn from './FormSignIn';

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
      <Button onClick={showModal}>SignIn</Button>
      <Modal
        title="SignIn"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormSignIn />
      </Modal>
    </>
  );
};

export default BottoneSignUp;
