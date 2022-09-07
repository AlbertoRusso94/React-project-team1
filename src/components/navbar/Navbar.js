import './Navbar.css';
import BottoneModale from './BottoneSignin';
import BottoneSignUp from './BottoneSignUp';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { Col, Row } from 'antd';
import logo from '../../imgs/logo.png';
/* import svgLogo from '../../imgs/data-wave.svg' */
import { Link, useLocation } from 'react-router-dom';



export default function Navbar({ stored, setStored }) {
  const location = useLocation();
  // const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('/');

  // const showDrawer = () => setVisible(true);
  // const onClose = () => setVisible(false);

  const handleStorage = (data) => {
    setStored(true);
    localStorage.setItem('user', data);
  };

  useEffect(() => {
    const log = localStorage.getItem('user');
    if (log) setStored(true);
    setUrl(location.pathname);
  }, [location, setStored]);

  const handleLogout = () => {
    setStored(false);
    localStorage.removeItem('user');
  };

  return (
    <Row>
      <Col span={24}>
        <nav className="menuBar navHome">
          <div className="navbarLogo">
            <div>
              <h1 className="logo">WaveTrade</h1>
            </div>
            <a href="#Features" className="navsubtitle">Features</a>
            <a href="#Pricing" className='navsubtitle'>Pricing</a>
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

            {url === '/' ? (
              stored && (
                <Button style={{
                  'width': '170px',
                  'height': '40px',
                  'backgroundColor': '#CC00FF',
                  'borderRadius': '6px',
                  'color': '#ffff',
                  'fontWeight': 'bold',
                  'fontSize': '15px'
                }}>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              )
            ) : (
              <Button style={{
                'width': '170px',
                'height': '40px',
                'backgroundColor': '#CC00FF',
                'borderRadius': '6px',
                'color': '#ffff',
                'fontWeight': 'bold',
                'fontSize': '15px'
              }}>
                <Link to="/">Homepage</Link>
              </Button>
            )}
            {stored && (
              <Button onClick={handleLogout} style={{
                'width': '170px',
                'height': '40px',
                'backgroundColor': '#00ADB5',
                'borderRadius': '6px',
                'color': '#ffff',
                'fontWeight': 'bold',
                'fontSize': '15px'
            }}>
                <Link to="/">Logout</Link>
              </Button>
            )}
          </div>
        </nav>
      </Col>
    </Row>
  );
}

export function RenderedNavbar(props){
  return(
    <>
      {createPortal(<Navbar stored={props.stored} setStored={props.setStored} />, document.getElementById('navbarContainer'))}
    </>
  )
}
