import React from 'react';
import {
    Col,
    Row,
    Container,
    CardBody,
    CardTitle,
    Card
} from 'reactstrap';

class Header extends React.Component{
    render(){
        return(
            <div className="header bg-gradient-danger pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <Row>
                        {/* Traffic Column*/}
                        <Col lg="4" xl="3">
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                                Traffic
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">350,897</span>
                                        </div>
                                        <Col className="col-auto">
                                            <div className="icon icon-shape bg-info text-white shadow">
                                                <i className="fa fa-bar-chart fa-2x px-1 py-1"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                        <span className="text-success mr-2">
                                        <i className="fa fa-arrow-up" /> 3.48%
                                        </span>{" "}
                                        <span className="text-nowrap">Since last month</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Traffic Column*/}

                        {/* New Users*/}
                        <Col lg="4" xl="3">
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                                New Users
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">897</span>
                                        </div>
                                        <Col className="col-auto">
                                            <div className="icon icon-shape bg-info text-white shadow">
                                                <i className="fa fa-user fa-2x px-1 py-1"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                        <span className="text-success mr-2">
                                        <i className="fa fa-arrow-up" /> 1.37%
                                        </span>{" "}
                                        <span className="text-nowrap">Since last week</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* New Users*/}

                        {/* Earnings*/}
                        <Col lg="4" xl="3">
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                            Total Earnings
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">$ 5,400</span>
                                        </div>
                                        <Col className="col-auto">
                                            <div className="icon icon-shape bg-info text-white shadow">
                                                <i className="fa fa-usd fa-2x px-3 py-1"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                        <span className="text-danger mr-2">
                                        <i className="fa fa-arrow-down" /> 1.37%
                                        </span>{" "}
                                        <span className="text-nowrap">Since yesterday</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Earnings*/}

                        {/* Performance*/}
                        <Col lg="4" xl="3">
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h6" className="text-uppercase text-muted mb-0">
                                                Performance
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">33.29%</span>
                                        </div>
                                        <Col className="col-auto">
                                            <div className="icon icon-shape bg-info text-white shadow">
                                                <i className="fa fa-users fa-2x px-1 py-1"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                        <span className="text-success mr-2">
                                        <i className="fa fa-arrow-up" /> 7%
                                        </span>{" "}
                                        <span className="text-nowrap">Since yesterday</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Performance*/}
                    </Row>
                    <Row>
                        {/* Product likes*/}
                        <Col lg="4" xl="3" className="pt-4">
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h6" className="text-uppercase text-muted mb-0">
                                                Likes
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">6,476</span>
                                        </div>
                                        <Col className="col-auto">
                                            <div className="icon icon-shape bg-info text-white shadow">
                                                <i className="fa fa-thumbs-up fa-2x px-1 py-1"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                        <span className="text-danger mr-2">
                                        <i className="fa fa-arrow-down" /> 7%
                                        </span>{" "}
                                        <span className="text-nowrap">Since last month</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Product Likes*/}

                        {/* Comments*/}
                        <Col lg="4" xl="3" className="pt-4">
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h6" className="text-uppercase text-muted mb-0">
                                                Comments
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">7,410</span>
                                        </div>
                                        <Col className="col-auto">
                                            <div className="icon icon-shape bg-info text-white shadow">
                                                <i className="fa fa-comments fa-2x px-1 py-1"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                        <span className="text-danger mr-2">
                                        <i className="fa fa-arrow-down" /> 16%
                                        </span>{" "}
                                        <span className="text-nowrap">Since last month</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Comments*/}

                        {/* Subscribers*/}
                        <Col lg="4" xl="3" className="pt-4">
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h6" className="text-uppercase text-muted mb-0">
                                            Subscribers
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">17,410</span>
                                        </div>
                                        <Col className="col-auto">
                                            <div className="icon icon-shape bg-info text-white shadow">
                                                <i className="fa fa-heart fa-2x px-1 py-1"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                        <span className="text-info mr-2">
                                        <i className="fa fa-arrow-up" /> 46%
                                        </span>{" "}
                                        <span className="text-nowrap">Since last month</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Subscribers*/}

                        {/* Products*/}
                        <Col lg="4" xl="3" className="pt-4">
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h6" className="text-uppercase text-muted mb-0">
                                            Totoal Uploads 
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">110</span>
                                        </div>
                                        <Col className="col-auto">
                                            <div className="icon icon-shape bg-info text-white shadow">
                                                <i className="fa fa-product-hunt fa-2x px-1 py-1"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                        <span className="text-info mr-2">
                                        <i className="fa fa-arrow-up" /> 36%
                                        </span>{" "}
                                        <span className="text-nowrap">Since Joined</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* Products*/}
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Header;