console.log("This output is from the external JS file")
console.log("Name : Maya");
console.log("School: Mallard Creek High School");
console.log("Grade: Senior");

var name= "Maya";
let school = "Mallard Creek High School";
var grade = "Senior";

document.getElementById("name").innerHTML = "Name: <b>" + name + "</b>";
document.getElementById("grade").innerHTML = "Grade: <b>" + grade + "</b>";
document.getElementById("school").innerHTML = "School: <b>" + school + "</b>";
