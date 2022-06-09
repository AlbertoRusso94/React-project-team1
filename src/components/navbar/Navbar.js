import './Navbar.css';
import BottoneModale from './BottoneModale';
import BottoneSignUp from './BottoneSignUp';
import { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { Col, Row } from 'antd';
import logo from '../../imgs/logo.png';

export default function Navbar() {
  // const [visible, setVisible] = useState(false);
  const [stored, setStored] = useState(false);

  // const showDrawer = () => setVisible(true);
  // const onClose = () => setVisible(false);

  const handleStorage = (data) => {
    setStored(true);
    localStorage.setItem('login', 'true');
  };

  useEffect(() => {
    const log = localStorage.getItem('login');
    log && setStored(true);
  }, []);

  const handleLogout = () => {
    setStored(false);
    localStorage.removeItem('login');
  };

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
            {!stored && <BottoneSignUp />}
            {!stored && <BottoneModale onHandleStorage={handleStorage} />}

            {stored && <Button type="primary">Dashboard</Button>}
            {stored && <Button onClick={handleLogout}>Logout</Button>}
          </div>
        </nav>
      </Col>
    </Row>
  );
}
