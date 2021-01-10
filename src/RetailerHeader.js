import React from 'react';
import './RetailerHeader.css';
/* React components */
import {
    Button,
    Row,
    Col,
    Container
}  from 'reactstrap';
/* *React components */
import AdminNavbar from "./NavBar";

class RetailerHeader extends React.Component{
    render(){
        return(
            <div>
                <div className="retailerHeader pb-8 d-flex align-items-center">
                    {/* Header Container.*/}
                    <Container>
                        <Row>
                            {/* 7 columns for large screen and 10 columns for medium screen.*/}
                            <Col lg="7" md="10">
                                <h2 className="display-2" color="dark">Hello User.</h2>
                                <p className="mt-0 mb-5" color="dark">
                                    This is your profile page. You can see the progress you've
                                    made with your products and manage or update your products or billing details
                                </p>
                                {/* Button to edit proifle.*/}
                                <Button color="dark" href="#" onClick={event => event.preventDefault()}>
                                    Edit profile
                                </Button>
                                {/* Button to edit proifle.*/}
                                
                            </Col>
                            {/* 7 columns for large screen and 10 columns for medium screen.*/}
                        </Row>
                    </Container>
                    {/* Header Container.*/}
                </div>
            </div>
        );
    }
}

export default RetailerHeader;

