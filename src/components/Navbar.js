import "./Navbar.css";
import BottoneModale from "./BottoneModale";
import BottoneSignIn from "./BottoneSignIn";
import { useState } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Button, Drawer } from "antd";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("mail");

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="">logo</a>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          {/* <LeftMenu /> */}
          {/* <RightMenu /> */}
        </Drawer>
        <BottoneSignIn />
        <BottoneModale />
      </div>
    </nav>
  );
}
