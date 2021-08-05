import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Pie } from "react-chartjs-2";

export default class DetailedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          labels: ["portability", "Chnages"],
          datasets: [
            {
              label: "Rainfall",
              backgroundColor: ["#2FDE00", "#B21F00"],
              hoverBackgroundColor: ["#175000", "#501800"],
              data: [75, 25],
            },
          ],
        },
        {
          labels: ["portability", "Chnages"],
          datasets: [
            {
              label: "Rainfall",
              backgroundColor: ["#2FDE00", "#B21F00"],
              hoverBackgroundColor: ["#175000", "#501800"],
              data: [85, 15],
            },
          ],
        }
      ],
    };
  }
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-around  ">
            <Col md={5} className="m-1 border">
              
              <Pie
                data={this.state.data[0]}
                options={{
                  title: {
                    display: true,
                    text: "Sample.WebApi",
                    fontSize: 15,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Col>
            <Col md={5} className="m-1 border">
              <Pie
                data={this.state.data[1]}
                options={{
                  title: {
                    display: true,
                    text: "Sample.WebApp",
                    fontSize: 15,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
