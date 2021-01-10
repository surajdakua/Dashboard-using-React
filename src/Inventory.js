import React from 'react';
import {Table,Card, CardBody, Button, Container, Row, Col} from 'reactstrap';

 class Inventory extends React.Component{
    render(){
        return(
            <div id="product">
                <Container fluid style={{backgroundColor:"#11cdef",height:'300px'}}>
                    <Row>
                        <h1 className="px-4 mt-5">Welcome to Warehouse</h1>
                    </Row>
                    <Row>
                        <b><h4 className="px-4">Listing of Products :</h4></b>
                        {/* Warehouse product table */}
                        <Card className="px-1 mx-4 w-100" style={{backgroundColor:'#5e72a1'}}>
                            <CardBody>
                                <Table className="text-white">
                                <thead>
                                    <tr>
                                        <th>Serial No.</th>
                                        <th>Product Name</th>
                                        <th>Product Category</th>
                                        <th>Product Description</th>
                                        <th>Product Price</th>
                                        <th>Upload Date</th>    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">4</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">5</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">6</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">7</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">8</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">9</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">10</th>
                                        <td>Adidas Sneakers</td>
                                        <td>Shoes</td>
                                        <td>lorem ipsum love it made by hand</td>
                                        <td>$ 30</td>
                                        <td>22/10/2021</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                        {/* Warehouse product table */}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Inventory;