var course = "Technology";
let myName = "Maya"

console.log(`"This page was created in the STEM Prep ${course} by ${myName}`);

alert(`"This page was created in the STEM Prep ${course} by ${myName}`);

function output()
{
  let name = document.getElementById("name").value;
  var school = document.getElementById("school").value;
  let grade = document.getElementById("grade").value;  

  let output = "Name: <b>" + name + "</b><br?";
  output += "Grade: <b>" + grade + "</b><br>";
  output += "School: <b>" + school + "</b><br>";

  document.getElementById("output").innerHTML = output;
}
