// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


let students = [];
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
  this.getPercentage = function() {
    let total = 0;
    let length = 0;
    for (let prop in marks) {
      if (marks.hasOwnProperty(prop)) {
        total += marks[prop];
        length += 1;
      }
    }
    return name + ' - ' +(total/length) + '%';
  };
}
function randomNumbers() {
	return Math.floor((Math.random() * 100) + 1);
}
function assignStudentMarks() {
	for(let i= 1; i<=50; i += 1) {
    const name = 'Student ' + i;
    students.push(new Student(name, {Grammer: randomNumbers(), Accounts: randomNumbers()}));
  } 
  for(let i= 51; i<=100; i += 1) {
    const name = 'Student ' + i;
    students.push(new Student(name, {Grammer: randomNumbers(), Physics: randomNumbers()}));
  }
}
function resultsCard() {
  assignStudentMarks();
  let results = '';
  students.forEach(function(ele) {
    results += ele.getPercentage() + '\n';
  });
  return results;
}
resultsCard();