import AbstractPage from "./AbstractPage.js";
const HTML = (name) => {
  const users = JSON.parse(localStorage.getItem("user"));
  const user = users.find((u) => u.firstName == name);
  let html = `
        <div class="user-container">
          <h1 class="add-user-title">Update your information....</h1>
          <input type="text"  value="${user.firstName}"  id="firstName" required/>
          <input type="text"  value="${user.lastName}"  id="lastName" required/>
          <input type="email" value="${user.email}"  id="email" required/>
          <input type="number"  value="${user.point}"  id="point" required/>
          <input type="text"  value="${user.phone}" id="phone" required/>
          <input type="text" value="${user.company}" id="company" required/>
        <input type="submit" id="update" value="Update User"/>
      </div>
    `;

  return html;
};

export default class extends AbstractPage {
  constructor(params) {
    super(params);
    this.params = params;
    this.setTitle(this.params.name);
  }
  async getHtml() {
    return HTML(this.params.name);
  }
}
