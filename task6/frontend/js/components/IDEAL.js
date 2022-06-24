const HTML = async () => {
  const html = `
      <div class="result-container">
        <h3>Result</h3>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Formula</th>
                <th scope="col">Ideal Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Robinson(1983)</td>
                <td id="robinson-result">216.00 lb</td>
              </tr>
              <tr>
                <td>Miller(1983)</td>
                <td id="miller-result">160.80 lb</td>
              </tr>
              <tr>
                <td>Devine (1974)</td>
                <td id="devine-result">201.74 lb</td>
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
      <h2>Ideal Weight Calculator</h2>
    `;
  }

  async getHTML() {
    return HTML();
  }
}
