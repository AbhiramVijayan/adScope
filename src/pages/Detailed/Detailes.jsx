import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import  "./Detailed.scss"
import ResolvedVsUnresolved from "../../component/ResolvedVsUnresolved/ResolvedVsUnresolved";

export default class Detailes extends Component {
  render() {
    return (
      <div className="Detailes" >
        <Container fluid>
          <Row className="mt-5 justify-content-center ">
            <Col md={11} className="border ">
              <Row className="m-2">
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold">Project Name</Col>
                  <Col className="py-3">CGEntities</Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold">App Type</Col>
                  <Col className="py-3">Web Application</Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold">Components </Col>
                  <Col className="py-3">2</Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold"> Total dll need to chnage </Col>
                  <Col className="py-3">40</Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold">Unresolved  dll</Col>
                  <Col className="py-3">
                     6
                  </Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold"> no. suggested dll </Col>
                  <Col className="py-3">15</Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
          <Col className="border" md={11}>

            <ResolvedVsUnresolved/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
