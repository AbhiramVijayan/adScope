import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Detailed.scss";
import ResolvedVsUnresolved from "../../component/ResolvedVsUnresolved/ResolvedVsUnresolved";
import DllRec from "../../component/DllRec/DllRec";
import UnresolvedDll from "../../component/UnresolvedDll/UnresolvedDll";

export default class Detailes extends Component {
  render() {
    return (
      <div className="Detailes">
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
                  <Col className="font-weight-bold">
                    {" "}
                    Total dll need to chnage{" "}
                  </Col>
                  <Col className="py-3">40</Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold">Unresolved dll</Col>
                  <Col className="py-3">6</Col>
                </Col>
                <Col md={2} className="border bg py-2">
                  <Col className="font-weight-bold"> no. suggested dll </Col>
                  <Col className="py-3">15</Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className=" justify-content-center ">
            <Col className="border mt-5 p-5" md={11}>
              <Col md={12}>
                {" "}
                <h3> Resolved vs Unresolved dll of each project</h3>{" "}
              </Col>

              <ResolvedVsUnresolved />
            </Col>
          </Row>{" "}
          <Row className=" justify-content-center ">
            <Col className="border mt-5 p-5" md={11}>
              <Col md={12}>
                {" "}
                <h3> Unresolved  assembly </h3>{" "}
              </Col>

             <UnresolvedDll/>
            </Col>
          </Row>
          <Row className=" justify-content-center ">
            <Col className="border mt-5 p-5" md={11}>
              <Col md={12}>
                {" "}
                <h3> Recomendations for converting dll </h3>{" "}
              </Col>

              <DllRec />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
