const courseList = [
  {
    code: "ACIT 1620",
    name: "Web Fundamental Technologies",
  },
  {
    code: "ACIT 1515",
    name: "Scripting for IT",
  },
  {
    code: "ACIT 1420",
    name: "Intro to Systems Admin",
  },
];

let course_code;
do {
  course_code = prompt("Please enter the 4 digit course code", "1620");
  if (course_code.length == 4 && !isNaN(course_code)) {
    break;
  }
  alert("Please enter a valid course code");
} while (true);

for (let item of courseList) {
  if (item.code == course_code) {
    console.log(`Yes I am taking the ${item.code} - ${item.name}`);
  }
}
// inclues()
// indexOf()
