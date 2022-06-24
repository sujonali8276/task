const HTML = async () => {
  const html = `
    <div class="result-container">
      <h3 >Result</h3>
      <h5> BMR : <span id="bmr-result">1565.24 </span> Calories/day</h5>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Activity Level</th>
              <th scope="col">Calorie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sedentary: little or no exercise</td>
              <td>216.00</td>
            </tr>
            <tr>
              <td>Exercise 1-3 times/week</td>
              <td> 160.80</td>
            </tr>
            <tr>
              <td>Exercise 4-5 times/week</td>
              <td>201.74</td>
            </tr>
            <tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
  return html;
};

export default class {
  constructor() {}

  async title() {
    return `
      <h2>BMR Calculator</h2>
    `;
  }

  async getHTML() {
    return HTML();
  }
}
