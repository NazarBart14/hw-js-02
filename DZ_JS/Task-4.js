function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
  }
  
  Student.prototype.addGrade = function (grade) {
    this.grades.push(grade);
  };
  
  Student.prototype.calculateAverage = function () {
    if (this.grades.length === 0) {
      return 0;
    }
  
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };
  
  function createStudent() {
    const firstName = prompt("Введіть ім'я студента:");
    const lastName = prompt("Введіть прізвище студента:");
  
    const numGrades = parseInt(prompt("Введіть кількість оцінок студента:"));
    if (isNaN(numGrades) || numGrades <= 0) {
      alert("Будь ласка, введіть коректну кількість оцінок.");
      return null;
    }
  
    const student = new Student(firstName, lastName);
  
    for (let i = 0; i < numGrades; i++) {
      let grade = parseFloat(prompt(`Введіть оцінку ${i + 1} (0-100):`));
      while (isNaN(grade) || grade < 0 || grade > 100) {
        alert("Будь ласка, введіть коректну оцінку.");
        grade = parseFloat(prompt(`Введіть оцінку ${i + 1} (0-100):`));
      }
  
      student.addGrade(grade);
    }
  
    return student;
  }
  
  const student = createStudent();
  
  if (student) {
    const average = student.calculateAverage();
    if (!isNaN(average)) {
      alert(
        `Середній бал студента ${student.firstName} ${student.lastName}: ${average.toFixed(1)}`
      );
    } else {
      alert("Некоректні дані для обчислення середнього балу.");
    }
  } else {
    alert("Введені некоректні дані для створення студента.");
  }
  