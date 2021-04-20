import React from "react";
import { Input, Menu } from "semantic-ui-react";

const LandingHeader = () => (
  <Menu secondary>
    <Menu.Menu position="right">
      <Menu.Item>
        <Input placeholder="Email Address..." />
      </Menu.Item>
      <Menu.Item>
        <Input placeholder="Password..." />
      </Menu.Item>
      <Menu.Item
        name="login"
        // active={activeItem === "login"}
      />
    </Menu.Menu>
  </Menu>
);

export default LandingHeader;
