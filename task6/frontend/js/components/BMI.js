const HTML = async () => {
  const html = `
      <div class="result-container">
        <h3 >Result</h3>
        <h5> BMI : <span id="bmi-result">22.93</span> kg/m<sup>2</sup></span></h5>
        <div class="mt-3">
          <h4>Range:- </h4>
          <ol>   
            <li>Healthy BMI range: 18.5 kg/m<sup>2</sup></span> - 25 kg/m<sup>2</sup></span></li>
            <li>Healthy weight for the height: 114.6 lbs - 154.9 lbs</li>
            <li>Ponderal Index: 12 kg/m<sup>2</sup></span></li>
          </ol>
        </div> 
      </div>
  `;
  return html;
};

export default class {
  constructor(params) {}

  async title() {
    return `
      <h2>BMI Calculator</h2>
    `;
  }
  async getHTML() {
    return HTML();
  }
}
