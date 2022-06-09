import { Button, Modal } from "antd";
import { useState } from "react";
import FormSignIn from "./FormSignIn";
import '../components/BottoneSignIn.css'

const BottoneSignIn = () => {
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
      <Button type="primary" onClick={showModal} className="modifyBtnNavbar">
        SignIn
      </Button>
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

export default BottoneSignIn;
