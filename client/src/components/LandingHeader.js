import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { useAuth0 } from '@auth0/auth0-react';

// class LandingHeader extends Component {
//   state = { activeItem: "" };

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
    // const { activeItem } = this.state;
    const LoginButton = () => {

    
      const { loginWithRedirect } = useAuth0();
    return (
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
            className="btn btn-primary btn-block"
            onClick={() => loginWithRedirect()}
            
          />
        </Menu.Menu>
      </Menu>
    );
  // }
// }
    }
export default LoginButton;
