import React, { Component } from "react";

export default class UnresolvedDll extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Assembly Name</th>
              <th scope="col">Used By</th>
              <th scope="col">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Autofac, Version=4.8.1.0, Culture=neutral, PublicKeyToken=17863af14b0044da</td>
              <td> </td>
              <td>@Unresolved assembly</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Autofac.Integration.Mvc, Version=4.0.0.0, Culture=neutral, PublicKeyToken=17863af14b0044da</td>
              <td> </td>
              <td>@Unresolved assembly</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Autofac.Integration.Mvc, Version=4.0.0.0, Culture=neutral, PublicKeyToken=17863af14b0044da</td>
              <td> </td>
              <td>@Unresolved assembly</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
