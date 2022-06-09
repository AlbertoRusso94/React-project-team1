import React, { useState } from "react";
import { Button, Modal } from "antd";
import FormModal from "./FormModal";
const BottoneModale = () => {
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
      <Button className="modifyBtnNavbar" type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormModal />
      </Modal>
    </>
  );
};

export default BottoneModale;
