import AbstractPage from "./AbstractPage.js";
import { data } from "../data.js";

const HTML = () => {
  if (localStorage.getItem("user") === null) {
    localStorage.setItem("user", JSON.stringify(data));
  } else if (JSON.parse(localStorage.getItem("user")).length === 0) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  let local_data = JSON.parse(localStorage.getItem("user"));
  let html = "";
  local_data.map((d) => {
    const rowData = `
          <tr>
            <td>${d.firstName + " " + d.lastName}</td>
            <td>${d.email}</td>
            <td>${d.phone}</td>
            <td>${d.point}</td>
            <td>${d.company}</td>
            <td><a href="/view/${d.firstName}" data-link>view</a></td>
            <td><a href="/update/${d.firstName}" data-link>update</a></td>
            <td><button class="button" value="${d.email}">delete</button></td>
          </tr>
        `;
    html += rowData;
  });

  return `
        <h1 class="title">Welcome to the landing page</h1>
        <hr>
        <div class="search-container">
            <input type="text" id="search" placeholder="serch user by name"/>
            <button class="add-btn"><a href="/addUser" data-link> Add User</a></button>
        </div>
        <table id="table"> 
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Point</th>
                  <th>Company</th>
                  <th></th>
                  <th></th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
            ${html}
          </tbody>
        </table>
  `;
};

export default class extends AbstractPage {
  constructor(params) {
    super(params);
    this.params = params;
    this.setTitle("SPA");
  }

  async getHtml() {
    return HTML();
  }
}
