import './Navbar.css';
import BottoneModale from './BottoneModale';
import BottoneSignIn from './BottoneSignIn';
import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Col, Row } from 'antd';
import logo from '../../imgs/logo.png';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <Row>
      <Col span={24}>
        <nav className="menuBar navHome">
          <div className="logo">
            <img src={logo} alt="logo" className="navImg" />
          </div>
          <div className="menuCon navBtnCont">
            {/* <Button className="barsMenu" type="primary" onClick={showDrawer}>
              <span className="barsBtn"></span>
            </Button> */}
            {/* <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <BottoneSignIn />
              <BottoneModale />
              <button>Dashboard</button>
            </Drawer> */}
            <BottoneSignIn />
            <BottoneModale />
            {/* <button>Dashboard</button> */}
          </div>
        </nav>
      </Col>
    </Row>
  );
}
