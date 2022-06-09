const to_do = () => {
  // task-01 : Write a program to convert decimal number into binary and vice varsa
  console.log("<------- task-01 ------>");
  const d = 10;
  console.log("Given decimal number : ", d);
  console.log("Binary of decimal ", d, " is : ", d.toString(2));
  const b = d.toString(2);
  console.log("Decimal of binary ", b, " is : ", parseInt(b, 2));

  // task-02 : Write a program to find the maximum value from nested array
  console.log("\n<------- task-02 ------>");
  const arr = [2, 3, 4, [5, 6, [17, 8], 9]];
  let max = -Infinity;
  const iteration = (a) => {
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        iteration(a[i]);
      } else {
        if (max < a[i]) {
          max = a[i];
        }
      }
    }
  };

  iteration(arr);
  console.log("Array : ", arr);
  console.log("Maximum element of the array is : ", max);

  //tast-03 : Write a program to find frequency of word in a string
  console.log("\n<------- task-03 ------>");
  const str =
    "Hi, I am Sujon Ali dept. of CSE, Rajshahi University of Engineering & Technology";

  const text = str.trim();
  let word_no = 0;
  for (let x of text) {
    if (x === " ") {
      word_no++;
    }
  }

  console.log("String : ", str);
  console.log("Word number of the sting is : ", word_no + 1);
};
module.exports = to_do;
