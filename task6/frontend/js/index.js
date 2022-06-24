import Sidebar from "./components/Sidebar.js";
import Common from "./components/Common.js";
import BMI from "./components/BMI.js";
import BMR from "./components/BMR.js";
import IDEAL from "./components/IDEAL.js";
import {
  bmiCalculation,
  bmrCalculation,
  idealWeightCalculation,
} from "./control.js";

const pathToRegex = (path) => {
  const regex = new RegExp(
    "^" + path.replace(/\//, "\\/").replace(/:\w+/g, "(.+)") + "$"
  );
  return regex;
};

const router = async () => {
  const routes = [
    { path: "/", page: IDEAL },
    { path: "/idealWeight", page: IDEAL },
    { path: "/bmi", page: BMI },
    { path: "/bmr", page: BMR },
  ];

  const maches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  const match = maches.find((m) => m.result !== null);
  if (!match) {
    match = {
      route: routes[0],
      result: "",
    };
  }

  checkPage(location.pathname);

  const object = new match.route.page();
  document.querySelector(".title").innerHTML = await object.title();
  document.querySelector(".result").innerHTML = await object.getHTML();

  if (location.pathname == "/" || location.pathname == "/idealWeight") {
    idealWeightCalculation();
  } else if (location.pathname == "/bmi") {
    bmiCalculation();
  } else if (location.pathname == "/bmr") {
    bmrCalculation();
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = new Sidebar();
  document.querySelector(".sidebar").innerHTML = await sidebar.getHTML();
  document.querySelector(".common").innerHTML = await new Common().commonHTML();
  router();
});

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  }
});

const checkPage = (path) => {
  if (path == "/" || path == "/idealWeight") {
    const weight = document.querySelector(".weight");
    weight.style.display = "none";
    const mtweight = document.querySelector(".mt-weight");
    mtweight.style.display = "none";
  } else {
    const weight = document.querySelector(".weight");
    weight.style.display = "";
    const mtweight = document.querySelector(".mt-weight");
    mtweight.style.display = "";
  }
};
