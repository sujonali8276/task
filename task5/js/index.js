import Add_User from "./pages/Add_User.js";
import Home from "./pages/Home.js";
import Update from "./pages/Update.js";
import View_User from "./pages/View_User.js";

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, index) => {
      return [key, values[index]];
    })
  );
};

const pathToRegex = (path) => {
  return new RegExp(
    "^" + path.replace(/\//, "\\/").replace(/:\w+/g, "(.+)") + "$"
  );
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/view/:name", view: View_User },
    { path: "/update/:name", view: Update },
    { path: "/addUser", view: Add_User },
  ];

  const matches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  const match = matches.find((match) => match.result !== null);
  if (!match) {
    match = {
      route: routes[0],
      result: "",
    };
  }

  const view = new match.route.view(getParams(match));
  document.querySelector("#page").innerHTML = await view.getHtml();

  const path = location.pathname.slice(0, 5);
  if (path == "/" || path == "/view") {
    action();
  } else if (path == "/addU") {
    addUser();
  } else if (path == "/upda") {
    updateUser();
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });
  router();
});

const action = () => {
  const search = document.querySelector("#search");
  if (search) {
    search.addEventListener("keydown", (e) => {
      var val = document.getElementById("search").value.toUpperCase();
      var tr = document.getElementsByTagName("tr");
      for (var i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0].innerText;
        if (td) {
          if (td.toUpperCase().indexOf(val) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    });
  }

  document.querySelector(".button").addEventListener("click", (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const new_user = user.filter((u) => u.email !== e.target.value);
    localStorage.clear();
    localStorage.setItem("user", JSON.stringify(new_user));
    history.pushState(null, null, "/");
    window.location.reload();
  });
};

const addUser = () => {
  document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const point = document.querySelector("#point").value;
    const company = document.querySelector("#company").value;

    if (!firstName || !lastName || !email || !phone || !point || !company) {
      alert("please fill the form carefully");
    } else {
      const users = JSON.parse(localStorage.getItem("user"));
      const nameMatch = users.find((u) => u.firstName == firstName);
      if (nameMatch) {
        alert("user already exists!!! please choose another name");
      } else {
        const user = { firstName, lastName, email, point, company, phone };
        users.unshift(user);
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(users));
        history.pushState(null, null, "/");
        window.location.reload();
      }
    }
  });
};

const updateUser = () => {
  document.querySelector("#update").addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const point = document.querySelector("#point").value;
    const company = document.querySelector("#company").value;

    if (!firstName || !lastName || !email || !phone || !point || !company) {
      alert("please fill the form carefully");
    } else {
      const users = JSON.parse(localStorage.getItem("user"));
      if (!users.find((u) => u.firstName == firstName)) {
        alert("you can not update your first name");
      } else {
        const updated_users = users.map((u) => {
          if (u.firstName == firstName) {
            const user = { firstName, lastName, email, phone, point, company };
            u = user;
          }
          return u;
        });

        alert("information updated successfully");
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(updated_users));
        history.pushState(null, null, "/");
        window.location.reload();
      }
    }
  });
};
