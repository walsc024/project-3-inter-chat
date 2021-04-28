import React from "react";

import { Container, Image, Menu, Segment } from "semantic-ui-react";
import Logo from "../Images/logo.png";

import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
    <Menu size="large" borderless shadowless fixed="top">
      <Menu.Item>
        <>
          <Image size="small" className="logo" src={Logo} alt={""} />
        </>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
