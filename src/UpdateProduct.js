import React from 'react';
import {Table,Card, CardBody, Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class UpdateProduct extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <p className="display-4 pt-5 mt-5 pb-5">Update Product</p>
                    <Row>
                        <Col xl="6">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail"><b>Product Serial Number</b></Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter product serial number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail"><b>Product Name</b></Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter product name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText"><b>Product Description</b></Label>
                                    <Input type="textarea" name="text" id="exampleText" placeholder="Enter product description" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail"><b>Product Price</b></Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter product price" />
                                </FormGroup>
                                
                                
                                <Button className="btn-dark">Submit</Button>
                            </Form>
                        </Col>
                        <Col xl="6">
                            <Form>
                                <FormGroup>
                                    <Label for="examplePassword"><b>Re-Enter Date</b></Label>
                                    <Input type="date" name="password" id="examplePassword" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile"><b>File</b></Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        This is some placeholder block-level help text for the above input.
                                        It's a bit lighter and easily wraps to a new line.
                                    </FormText>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row> 
                </Container>
            </div>
        )
    }
}

export default UpdateProduct;