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
          <BottoneSignIn />
          <BottoneModale />
          <button>Dashboard</button>
        </Drawer>
        <BottoneSignIn />
        <BottoneModale />
        <button>Dashboard</button>
      </div>
    </nav>
  );
}
