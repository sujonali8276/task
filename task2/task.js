const data = require("./data");
const filteredData = data.filter((d) => d.point >= 50);

filteredData.sort((a, b) =>
  a.point > b.point ? 1 : a.point < b.point ? -1 : 0
);
console.log("task 1 ------>\n");
console.log("Fullname\t\t\tPoint\t\t\tCompany Name");
console.log("--------\t\t\t------\t\t\t------------\n");
filteredData.forEach((item) => {
  let info =
    item.firstName +
    item.lastName +
    "\t\t\t" +
    item.point +
    "\t\t\t" +
    item.company;
  console.log(info);
});

console.log("\ntask 2 ------>\n");
const t2User = data.filter((d) => d.point < 50 && d.point > 20);
console.log(
  "The number of users who got more than 20 and less than 50 point is : " +
    t2User.length
);

console.log("\ntask 3 ------>\n");
const t3User = data.find((d) => d.email == "Tristian7@yahoo.com");
console.log("Point whose email is Tristian7@yahoo.com  : ", t3User.point);

console.log("User point and email whose point ", t3User.point, " is :--");
const desire_user = data.filter(
  (d) => d.point == t3User.point && d.email != "Tristian7@yahoo.com"
);
console.log("Point\t\t\tEmail");
console.log("-----\t\t\t------");
desire_user.forEach((u) => {
  let info = "" + u.point + "\t\t\t" + u.email;
  console.log(info);
});
