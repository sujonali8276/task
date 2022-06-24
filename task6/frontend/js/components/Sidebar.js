export default class {
  constructor() {}

  async getHTML() {
    return `
           <ul class="sidebar-container">
                <li><a href="/" data-link>HOME</a></li>
                <li><a href="/idealWeight" data-link>IDEAL WEIGHT</a></li>
                <li><a href="/bmi" data-link>BMI</a></li>
                <li><a href="/bmr" data-link>BMR</a></li>
           </ul>
        `;
  }
}
