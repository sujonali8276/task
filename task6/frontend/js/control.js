export const idealWeightCalculation = () => {
  commonForAllPage();
  ideal_us();
  ideal_metric();
};

const ideal_us = () => {
  document.querySelector("#us-calculate").addEventListener("click", (e) => {
    e.preventDefault();
    const age = parseFloat(document.querySelector("#us-age").value);
    const hft = parseFloat(document.querySelector("#us-ft").value);
    const hinch = parseFloat(document.querySelector("#us-inch").value);
    const male = document.querySelector("#us-male").checked;
    const female = document.querySelector("#us-female").checked;

    if (male) {
      if (!age || !hft || !hinch) {
        console.log("insuficient data");
      } else {
        const height_in_cm = hft * 30.48 + hinch * 2.54;
        const rw = (114.4 + 4 * (height_in_cm - 152.4)).toFixed(2) + " lb";
        const mw = (123 + 3.1 * (height_in_cm - 152.4)).toFixed(2) + " lb";
        const dw = (110 + 2 * (height_in_cm - 152.4)).toFixed(2) + " lb";
        setResult(rw, mw, dw);
      }
    } else if (female) {
      const height_in_cm = hft * 30.48 + hinch * 2.54;
      const rw = (100 + 4 * (height_in_cm - 152.4)).toFixed(2) + " lb";
      const mw = (100 + 3.1 * (height_in_cm - 152.4)).toFixed(2) + " lb";
      const dw = (100 + 2 * (height_in_cm - 152.4)).toFixed(2) + " lb";
      setResult(rw, mw, dw);
    }
  });

  const setResult = (rw, dw, mw) => {
    document.querySelector("#robinson-result").innerHTML = rw;
    document.querySelector("#miller-result").innerHTML = mw;
    document.querySelector("#devine-result").innerHTML = dw;
  };

  document.querySelector("#us-reset").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#us-age").value = "25";
    document.querySelector("#us-ft").value = "5";
    document.querySelector("#us-inch").value = "10";
  });
};

const ideal_metric = () => {
  document.querySelector("#metric-calculate").addEventListener("click", (e) => {
    e.preventDefault();
    const age = parseFloat(document.querySelector("#metric-age").value);
    const height = parseFloat(document.querySelector("#metric-cm").value);
    const male = document.querySelector("#metric-male").checked;
    const female = document.querySelector("#metric-female").checked;

    if (male) {
      if (!age || !height) {
        console.log("insuficient data");
      } else {
        const rw = (114.4 + 4 * (height - 152.4)).toFixed(2) + " lb";
        const mw = (123 + 3.1 * (height - 152.4)).toFixed(2) + " lb";
        const dw = (110 + 2 * (height - 152.4)).toFixed(2) + " lb";
        setResult(rw, mw, dw);
      }
    } else if (female) {
      const rw = (100 + 4 * (height - 152.4)).toFixed(2) + " lb";
      const mw = (100 + 3.1 * (height - 152.4)).toFixed(2) + " lb";
      const dw = (100 + 2 * (height - 152.4)).toFixed(2) + " lb";
      setResult(rw, mw, dw);
    }
  });

  const setResult = (rw, dw, mw) => {
    document.querySelector("#robinson-result").innerHTML = rw;
    document.querySelector("#miller-result").innerHTML = mw;
    document.querySelector("#devine-result").innerHTML = dw;
  };

  document.querySelector("#metric-reset").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#metric-age").value = "25";
    document.querySelector("#metric-cm").value = "160";
  });
};

export const bmiCalculation = () => {
  commonForAllPage();
  document.querySelector("#us-calculate").addEventListener("click", (e) => {
    e.preventDefault();
    const { height, weight, male } = common_us();

    if (male) {
      const bmi = weight / (height * height);
      document.querySelector("#bmi-result").innerHTML = bmi.toFixed(2);
    } else {
      const bmi = weight / (height * height);
      document.querySelector("#bmi-result").innerHTML = bmi.toFixed(2);
    }
  });

  document.querySelector("#metric-calculate").addEventListener("click", (e) => {
    e.preventDefault();
    const { height, weight, male } = common_metric();

    if (male) {
      const bmi = weight / (height * height);
      document.querySelector("#bmi-result").innerHTML = bmi.toFixed(2);
    } else {
      const bmi = weight / (height * height);
      document.querySelector("#bmi-result").innerHTML = bmi.toFixed(2);
    }
  });

  common_reset();
};

export const bmrCalculation = () => {
  commonForAllPage();
  document.querySelector("#us-calculate").addEventListener("click", (e) => {
    e.preventDefault();
    const { age, height, weight, male, female } = common_us();
    if (male) {
      const bmr = 665 + 9.6 * weight + 1.8 * height * 100 - 4.7 * age;
      document.querySelector("#bmr-result").innerHTML = bmr.toFixed(2);
    } else if (female) {
      const bmr = 66 + 13.7 * weight + 5 * height * 100 - 6.8 * age;
      document.querySelector("#bmr-result").innerHTML = bmr.toFixed(2);
    }
  });

  document.querySelector("#metric-calculate").addEventListener("click", (e) => {
    e.preventDefault();
    const { age, height, weight, male, female } = common_metric();
    if (male) {
      const bmr = 665 + 9.6 * weight + 1.8 * height * 100 - 4.7 * age;
      document.querySelector("#bmr-result").innerHTML = bmr.toFixed(2);
    } else if (female) {
      const bmr = 66 + 13.7 * weight + 5 * height * 100 - 6.8 * age;
      document.querySelector("#bmr-result").innerHTML = bmr.toFixed(2);
    }
  });

  common_reset();
};

const common_us = () => {
  const age = parseFloat(document.querySelector("#us-age").value);
  const ft = parseFloat(document.querySelector("#us-ft").value);
  const inch = parseFloat(document.querySelector("#us-inch").value);
  const male = document.querySelector("#us-male").checked;
  const female = document.querySelector("#us-female").checked;
  const weight = (
    parseFloat(document.querySelector("#us-weight").value) * 0.454
  ).toFixed(2);
  const height = ((ft * 30.48 + inch * 2.54) / 100).toFixed(2);

  return { age, height, male, female, weight };
};

const common_metric = () => {
  const age = parseFloat(document.querySelector("#metric-age").value);
  const ft = parseFloat(document.querySelector("#metric-cm").value);
  const male = document.querySelector("#metric-male").checked;
  const female = document.querySelector("#metric-female").checked;
  const weight = (
    parseFloat(document.querySelector("#metric-weight").value) * 0.454
  ).toFixed(2);
  const height = (ft / 100).toFixed(2);

  return { age, height, male, female, weight };
};

const common_reset = () => {
  document.querySelector("#us-reset").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#us-age").value = "25";
    document.querySelector("#us-ft").value = "5";
    document.querySelector("#us-inch").value = "10";
    document.querySelector("#us-weight").value = "160";
  });

  document.querySelector("#metric-reset").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#metric-age").value = "25";
    document.querySelector("#metric-cm").value = "160";
    document.querySelector("#metric-weight").value = "160";
  });
};

const commonForAllPage = () => {
  document.querySelector(".metric-tab-content").style.display = "none";
  document
    .querySelector(".us-tab")
    .addEventListener("click", () => commoHtml("", "none", "none"));

  document
    .querySelector(".metric-tab")
    .addEventListener("click", () => commoHtml("none", "", "none"));
};

const commoHtml = (us, metric, other) => {
  document.querySelector(".us-tab-content").style.display = us;
  document.querySelector(".metric-tab-content").style.display = metric;
};
