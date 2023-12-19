const student = {
    subjects: [],
  

    addSubject(subject) {
      if (!this.subjects.includes(subject)) {
        this.subjects.push(subject);
        console.log(`Предмет ${subject} додано.`);
      } else {
        console.log(`Ви вже вивчаєте предмет ${subject}.`);
      }
    },
  

    removeSubject(subject) {
      const index = this.subjects.indexOf(subject);
      if (index !== -1) {
        this.subjects.splice(index, 1);
        console.log(`Предмет ${subject} видалено.`);
      } else {
        console.log(`Ви не вивчаєте предмет ${subject}.`);
      }
    },
  };
  

  student.addSubject("Математика");
  student.addSubject("Історія");
  student.addSubject("Математика"); 
  console.log(student.subjects); 
  student.removeSubject("Історія");
  console.log(student.subjects); 
  student.removeSubject("Англійська"); 
  