import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Container,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import faSearch from "@fortawesome/fontawesome-free-solid/faSearch";
import faQuestionCircle from "@fortawesome/fontawesome-free-solid/faQuestionCircle";

import "./TopNav.css";

class TopNav extends Component {
  render() {
    return (
      <Container>
        <Navbar fixed="top" dark className="bg-primary" expand={true}>
          <NavbarBrand href="#">0</NavbarBrand>
          <Nav className="ml-auto mr-auto" navbar>
            <Form inline>
              <InputGroup>
                <InputGroupAddon>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupAddon>
                <Input placeholder="filter" />
              </InputGroup>
            </Form>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon={faBars} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Version</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default TopNav;
