import React, { Component } from "react";

export default class DllRec extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Target Type</th>
              <th scope="col">Target Member</th>
              <th scope="col">Assembly Name</th>
              <th scope="col"> Recommended Changes  </th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>T:System.Web.Http.Controllers.HttpActionContext</td>
              <td>T:System.Web.Http.Controllers.HttpActionContext</td>
              <td>@Sample.Core</td>
              <td>Remove usage.</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>T:Newtonsoft.Json.JsonConvert</td>
              <td>T:Newtonsoft.Json.JsonConvert</td>
              <td>@Sample.Core</td>
              <td>Remove usage.</td>
            </tr>  <tr>
              <th scope="row">3</th>
              <td>T:System.AppDomainSetup</td>
              <td>TT:System.AppDomainSetup</td>
              <td>@Sample.Core</td>
              <td>Remove usage.</td>
            </tr>  <tr>
              <th scope="row">4</th>
              <td>T:System.Web.Http.Dependencies.IDependencyResolver</td>
              <td>T:System.Web.Http.Dependencies.IDependencyResolver</td>
              <td>@Sample.Core</td>
              <td></td>
            </tr>  <tr>
              <th scope="row">5</th>
              <td>TT:System.Web.Http.HttpPostAttribute</td>
              <td>T:System.Web.Http.HttpPostAttribute</td>
              <td>@Sample.Core</td>
              <td></td>
       </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}
