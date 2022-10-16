function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function (marks) {
  let sum = 0;
  if (this.marks === undefined) {
    alert("У студента нет оценок!");
  } else {
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}



// ваш код для остальных методов


let student3 = new Student("Anna", "female", "34");
student3.setSubject("Algebra");
student3.addMark(5);
student3.addMark(4);
student3.addMark(5);
console.log(student3.getAverage());
let student4 = new Student("Igor", "male", "45");
student4.setSubject("Geometry");
student4.addMark(2);
student4.addMark(3);
student4.addMark(2);
student4.exclude('low grades');

console.log(student3);
console.log(student4);