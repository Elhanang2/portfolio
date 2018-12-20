import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse} from "mdbreact";

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
}
  onClick(){
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  

  render() {
    return (
      <Navbar color="black" dark expand="md" style={{marginTop: "20px"}}>
          <NavbarBrand>
            <strong className="white-text">Portfolio</strong>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Contact</NavLink> 
              </NavItem>
            </NavbarNav>
            
          </Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;