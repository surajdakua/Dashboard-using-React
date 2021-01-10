import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'
// reactstrap components
import {
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Button
} from "reactstrap";
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Inventory from './Inventory';

class AdminNavbar extends React.Component {
  addProduct(){
    ReactDOM.render(<AddProduct />, document.getElementById('product'));
  }
  updateProduct(){
    ReactDOM.render(<UpdateProduct />, document.getElementById('product'));
  }
  listProduct(){
    ReactDOM.render(<Inventory />, document.getElementById('product'));
  }
  render() {
    return (
      <>
        <Navbar className="navbar-top" expand="md" id="navbar-main" style={{backgroundColor:"#11cdef"}}>
          <Container fluid> 
            <NavbarBrand className="text-lg"><h2><b>Bookskart.</b></h2></NavbarBrand>
            <Link to="./RetailerDashBoard" className="pl-5 pr-4 text-dark" activeClassName="active"><b> RetailerDashBoard</b></Link>
            <Link to="./userProfile" className="pr-4 text-dark" activeClassName="active"><b>User Profile</b></Link>
            <Link to="./My_Billing_Final" className="pr-4 text-dark" activeClassName="active"><b>Billing Details</b></Link>
            <Nav className="align-items-center d-flex" navbar>
              <UncontrolledDropdown>
                <DropdownToggle style={{backgroundColor:'#11cdef', border:'none'}}>
                  <Link to="./Inventory" className="pr-4 text-dark" activeClassName="active"><b>Warehouse</b></Link>                 
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem href="#" onClick={e => e.preventDefault()}>
                    <span><Button onClick={this.listProduct.bind(this)} color="link" style={{textDecoration:'none',color:'black'}}>Product List</Button></span>
                  </DropdownItem>
                  <DropdownItem href="#" onClick={e => e.preventDefault()}>
                    <span><Button onClick={this.addProduct.bind(this)} color="link" style={{textDecoration:'none',color:'black'}}>Add Product</Button></span>
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <span><Button onClick={this.updateProduct.bind(this)} color="link" style={{textDecoration:'none',color:'black'}}>Update Product</Button></span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Link to="./Help" className="pr-4 text-dark" activeClassName="active"><b> Help</b></Link>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
            <Nav className="align-items-center d-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center" style={{float:'right'}}>
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("./team-4-800x800.jpg")}
                        width="35"
                        height="35"
                        style={{borderRadius:'20px'}}
                      />
                    </span>
                    <Media className="d-flex">
                      <span className="mb-0 text-sm font-weight-bold pl-2" style={{color:'black', justifyContent:'flex-end'}}>
                        Jessica Jones
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem href="#" onClick={e => e.preventDefault()}>
                    <h6 className="text-overflow m-0">Settings</h6>
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;