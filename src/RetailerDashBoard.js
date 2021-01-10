import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Header from "./Header"
import PageTitle from "./PageTitle";
import CustomerOverview from "./CustomerOverview";
import CustomerByDevice from "./CustomerByDevice";
import AdminNavbar from "./NavBar";

const RetailerDashBoard = () => (
  <Container fluid className="main-content-container px-5" style={{backgroundColor: '#11cdef', height:'650px'}}>
    {/* Page Header */}
    <Row noGutters className="page-header pt-4">
      <h2 className="d-flex display-4"><b>DashBoard</b></h2>
    </Row>
    <Row>
        {/* Header */}
        <Col lg="12" md="12" sm="12" className="mb-4">
            <Header />
        </Col>
        {/* header */}

        {/* Users Overview */}
        <Col lg="8" md="12" sm="12" className="mb-4">
            <CustomerOverview />
        </Col>

        {/* Users by Device */}
        <Col lg="4" md="6" sm="12" className="mb-4">
            <CustomerByDevice />
        </Col>
    </Row>
  </Container>
);

export default RetailerDashBoard;