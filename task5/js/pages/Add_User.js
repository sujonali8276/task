import AbstractPage from "./AbstractPage.js";

const HTML = (name) => {
  let html = `   
          <form class="user-container">
            <h1 class="add-user-title">Fill the form carefully....</h1>
            <input type="text" placeholder="firstname" id="firstName" required/>
            <input type="text" placeholder="lastname" id="lastName" required/>
            <input type="email" placeholder="email" id="email" required/>
            <input type="number" placeholder="point" id="point" required/>
            <input type="text" placeholder="phone" id="phone" required/>
            <input type="text" placeholder="company" id="company" required/>
            <input type="submit" id="submit" value="Add User"/>
          </form>
      `;

  return html;
};

export default class extends AbstractPage {
  constructor(params) {
    super(params);
    this.setTitle("Add User");
    this.params = params;
  }

  async getHtml() {
    return HTML();
  }
}
