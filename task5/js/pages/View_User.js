import AbstractPage from "./AbstractPage.js";

const HTML = (name) => {
  const users = JSON.parse(localStorage.getItem("user"));
  const user = users.find((u) => u.firstName == name);

  let html = `
      <div class="view-container">
        <h1>User Details :-</h1>
        <div>
          <b>Name : </b>${user.firstName + " " + user.lastName}<br/>
          <b>Email : </b>${user.email}<br/>
          <b>Phone : </b>${user.phone}<br/>
          <b>Point : </b>${user.point}<br/>
          <b>Company : </b>${user.company}
          <div class="button-container">
            <button><a href="/update/${
              user.firstName
            }" data-link>edit</a></button>
            <button class="button" value="${user.email}">delete</button> 
          </div>
        </div>
      </div>

  `;

  return html;
};

export default class extends AbstractPage {
  constructor(params) {
    super(params);
    this.params = params;
    this.setTitle(params.name);
  }

  async getHtml() {
    return HTML(this.params.name);
  }
}
