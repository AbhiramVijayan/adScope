import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DetailedView from "../../component/DetailedView1/DetailedView";
import Time1 from "../../component/Time/Time1";
import "./Overview.scss";
export default class Overview extends Component {
  render() {
    return (
      <div className="Overview">
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
                  <Col className="font-weight-bold">Current Version</Col>
                  <Col className="py-3">CGEntities</Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold">Target Version</Col>
                  <Col className="py-3">
                    .NETFramework <br />
                    Version=v4.6.1
                  </Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold">Scaned date</Col>
                  <Col className="py-3">.NET 5</Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5 justify-content-center  ">
            <Col className="border" md={11}>
            <DetailedView />
            </Col>
          </Row>
          <Row className="mt-5 justify-content-center" >
          <Col className="border" md={11}>
          <Time1 />
</Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}
