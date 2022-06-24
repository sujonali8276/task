const US = () => {
  const us = `
        <form id="us-elements"">
            <div class="age  mt-1">
                <span>Age : </span><br/>
                <input type="number" class="ms-1 ps-2" id="us-age" value="25"/>
            </div>
            <div class="gender mt-1 ">
                <span>Gender : </span>
                <input type="radio" class="ms-1 ps-2" name="gender" checked="checked" id="us-male" value="male">
                <lebel for="male">Male</lebel>
                <input type="radio" class="ms-1 ps-2" name="gender" id="us-female" value="female">
                <lebel for="female">Female</lebel>
            </div>
            <div class="height mt-1 ">
                <span>Height (ft & inch) : </span><br/>
                <input type="number" class="ms-1  ps-2" id="us-ft" value="5"/><br/>
                <input type="number" class="ms-1 mt-1  ps-2" id="us-inch" value="10"/>
            </div>
            <div class="weight mt-1 ">
                <span>Weight (pounds) : </span><br/>
                <input type="number" class="ms-1  ps-2" id="us-weight" value="160"/>
            </div>
            <div class="mt-2">
                <input type="submit" class="ms-1 btn btn-success" id="us-calculate" value="calculate"/>
                <input type="submit" class="ms-1 btn btn-secondary" id="us-reset" value="reset"/>
            </div>
        </div>
    `;
  return us;
};

const METRIC = () => {
  const metric = `
    <div id="metric-elements"">
        <div class="age mt-1">
            <span>Age : </span><br/>
            <input type="number" class="ms-1 ps-2" id="metric-age" value="25"/>
        </div>
        <div class="gender mt-1 ">
            <span>Gender : </span>
            <input type="radio" class="ms-1 ps-2" name="gender" checked="checked" id="metric-male" value="male">
            <lebel for="male">Male</lebel>
            <input type="radio" class="ms-1 ps-2" name="gender" id="metric-female" value="female">
            <lebel for="female">Female</lebel>
        </div>
        <div class="height mt-1">
            <span>Height (cm) : </span><br/>
            <input type="number" class="ms-1  ps-2" id="metric-cm" value="160"/>
        </div>
        <div class="mt-weight mt-1 ">
            <span>Weight (pounds) : </span><br/>
            <input type="number" class="ms-1  ps-2" id="metric-weight" value="160"/>
        </div>
        <div class="mt-2">
                <input type="submit" class="ms-1 btn btn-success" id="metric-calculate" value="calculate"/>
                <input type="submit" class="ms-1 btn btn-secondary" id="metric-reset" value="reset"/>
            </div>
    </form>
    `;
  return metric;
};

const HTML = () => {
  const html = `
        <div class="tab-containers  p-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a data-bs-toggle="tab" class="nav-link active us-tab" href="#us">US Units</a>
                </li>
                <li class="nav-item">
                    <a data-bs-toggle="tab" class="nav-link metric-tab" href="#metric">Metric Units</a>
                </li>
            </ul>

            <div class="tab-content ps-3 mt-2">
                <div id="us" class="tab-pane active us-tab-content">${US()}</div>
                <div id="metric" class="tab-pane fade metric-tab-content">${METRIC()}</div>
            </div>
        </div>
    `;
  return html;
};

export default class {
  constructor() {}
  async commonHTML() {
    return HTML();
  }
}
