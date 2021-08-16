import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { Col, Container, Row } from "react-bootstrap";

export default class ResolvedVsUnresolved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          labels: ["Resolved", "Unresolved"],
          datasets: [
            {
              label: "Rainfall",
              backgroundColor: ["#2FDE00", "#808080"],
              hoverBackgroundColor: ["#175000", "#501800"],
              data: [75, 25],
            },
          ],
        },
        {
            labels: ["Resolved", "Unresolved"],
            datasets: [
              {
                label: "Rainfall",
                backgroundColor: ["#2FDE00", "#808080"],
                hoverBackgroundColor: ["#175000", "#501800"],
                data: [95, 5],
              },
            ],
          },
        {
            labels: ["Resolved", "Unresolved"],
            datasets: [
              {
                label: "Rainfall",
                backgroundColor: ["#2FDE00", "#808080"],
                hoverBackgroundColor: ["#175000", "#501800"],
                data: [95, 5],
              },
            ],
          },
      ],
    };
  }

  render() {
    return (
      <div>
        
          <Row className="justify-content-around  ">
            <Col md={3} className="m-1 border">
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
            <Col md={3} className="m-1 border">
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
       
      </div>
    );
  }
}
