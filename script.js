// Student details: edit these values if needed.
const students = [
  { roll: "101", name: "Rahul", marks: 85 },
  { roll: "102", name: "Arjun", marks: 32 },
  { roll: "103", name: "Kiran", marks: 67 },
  { roll: "104", name: "Ravi", marks: 28 },
  { roll: "105", name: "Manoj", marks: 90 }
];

const studentData = document.getElementById("studentData");
let passed = 0;
let failed = 0;

students.forEach((student) => {
  const isPass = student.marks >= 40;
  const result = isPass ? "PASS" : "FAIL";

  if (isPass) {
    passed++;
  } else {
    failed++;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.roll}</td>
    <td>${student.name}</td>
    <td>${student.marks}</td>
    <td><span class="status ${result.toLowerCase()}">${result}</span></td>
  `;
  studentData.appendChild(row);
});

document.getElementById("totalStudents").textContent = students.length;
document.getElementById("passedCount").textContent = passed;
document.getElementById("failedCount").textContent = failed;
