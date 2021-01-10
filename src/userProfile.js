import React, { Component } from 'react';
import {Progress} from "reactstrap";
import './UserProfile.css';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
  } from "reactstrap";

import RetailerHeader from './RetailerHeader';

 class  My_Profile extends Component {
    render() {
        return (
            <div>
                <RetailerHeader/>
                <Container className="fluid mt--7 mb-5">
                    <Row>
                        {/* Update Field */}
                        <Col className=" order-xl-1"  xl="8">
                            <Card className="bg-light shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="">
                                        <Col xs="8" className="text-left">
                                            <h5>My account</h5> 
                                        </Col>
                                        <Col xs="4" className="text-right">
                                            <Button color="dark" href="#home" onClick={e => e.preventDefault()} size="sm">
                                                    UPDATE
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className="">
                                    <Form>
                                        <h6 className="text-muted mb-4 heading-small text-left">Account Details</h6>
                                        <div className="text-left">
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label className="font-weight-bold ">
                                                            First Name
                                                        </label>
                                                        <Input type="text" placeholder="Enter First Name">
                                                        </Input>
                                                    </FormGroup>

                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label className="font-weight-bold ">
                                                            Last Name
                                                        </label>
                                                        <Input type="text" placeholder="Enter Last Name">
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label className="font-weight-bold ">
                                                            Email Address
                                                        </label>
                                                        <Input type="email" placeholder="Enter email">
                                                        </Input>
                                                    </FormGroup>

                                                </Col>
                                                <Col lg="6">
                                                <FormGroup>
                                                        <label className="font-weight-bold ">
                                                            Contact No
                                                        </label>
                                                        <Input type="text" placeholder="Enter mobile number.">
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label className="font-weight-bold ">
                                                            Password
                                                        </label>
                                                        <Input type="password" placeholder="Enter password">
                                                        </Input>
                                                    </FormGroup>

                                                </Col>
                                                <Col lg="6">
                                                <FormGroup>
                                                        <label className="font-weight-bold ">
                                                            Confirm Password
                                                        </label>
                                                        <Input type="password" placeholder="Re-enter password">
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="text-left">
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                    <label className="font-weight-bold">
                                                        Address
                                                    </label>
                                                    <Input type="text" placeholder="Enter address">
                                                    </Input>
                                                    </FormGroup>
                                                    
                                                </Col>
                                            </Row>

                                            <Row className=''>
                                                <Col md="4">
                                                    <FormGroup>
                                                    <label className="font-weight-bold">
                                                    City
                                                    </label>
                                                    <Input type="text" placeholder="Mumbai"> 
                                                    </Input>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="4">
                                                        <FormGroup>
                                                        <label className="font-weight-bold">
                                                            State
                                                        </label> 
                                                        <Input type="text" placeholder="Maharashtra"> 
                                                        </Input>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="4">
                                                        <FormGroup>
                                                        <label className="font-weight-bold">
                                                            Postal Code
                                                        </label>
                                                        <Input type="number" placeholder="Postal code"> 
                                                        </Input>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-left">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label className="font-weight-bold">
                                                                Company Description
                                                            </label>
                                                            <Input type="textarea">
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>                                   
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>

                        {/* Information */}
                     <Col className=" order-xl-4 mb-5 mb-xl-0" xl="4">
                        <Card className="card-profile shadow  card">
                            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-3 bg-white">
                                <Row className="justify-content-center text-center align-items-center">
                                    <Col>
                                        <div className="card-profile-image" fluid>
                                            <img
                                            alt="img1"
                                            className="circle"
                                            src={require("./team-4-800x800.jpg")}
                                        />
                                        </div>
                                    </Col>
                                </Row>
                            </CardHeader>
                                <CardBody className=" mt-1 pt-0 pb-5 ">
                                     <div className="text-center">
                                        {/*User Status */}          
                                        <h3 className="pt-3">
                                        Jessica Jones
                                        <span className="font-weight-light font-weight-500">, 27</span>
                                        </h3>

                                        <div className="h5 brief mt-2 ">
                                            <b><strong className=" font-weight-300 mr-2">Bucharest, Romania</strong></b>
                                        </div>

                                        <div className="h5 brief location mt-4">
                                        <b className="font-weight-200  mr-2">Email - </b>
                                        123@gmail.com
                                        </div>

                                        <div className="phone brief">
                                            <b className=" font-weight-300 mr-2 ">Phone no :-</b>123456789
                                        </div>
                                            {/*User Status */} 
                                        <hr className="my-4" />
                                            {/*Progress bar */}
                                        <div>
                                        <div className="text-center" >60%</div>
                                            <Progress value={60} color="danger" />
                                        </div>
                                            {/*Progress bar */}                         
                                        
                                        <hr className="my-4" />
                                            {/* Address Section */} 
                                        <div className="text-left">
                                            <label className="text-muted">Address</label>
                                            <div>
                                                A/123,L.B Road,Kurla (E),M-400024
                                            </div>
                                        </div>
                                            {/* Address Section */}                          
                                        <a href="#" onClick={event => event.preventDefault()}>
                                            Show more
                                        </a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>  
                    </Row>
                </Container>
            </div>
        )
    }
}

export default My_Profile;
