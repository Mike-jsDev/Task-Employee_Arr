// 1.

let Employee = function (id, name, surname, salary, workExperience, isPrivileges, gender) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.salary = salary;
  this.workExperience = workExperience;
  this.isPrivileges = isPrivileges;
  this.gender = gender;
};

let employeeObj = new Employee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');

console.log(employeeObj);

// 2.

this.__proto__.getFullName = function () {
  return `${this.surname} ${this.name}`
}

console.log(employeeObj.getFullName());

// 3.

const emplyeeConstructArr = emplyeeArr.map(obj => emplyeeObj = new Emploee(obj.id, obj.name, obj.surname, obj.salary, obj.workExperience, obj.isPrivileges, obj.gender));
console.log(emplyeeConstructArr)


// 4.

let getFullNamesFromArr = function (array) {
  return array.map(obj => obj.getFullName())
};
getFullNamesFromArr(emplyeeConstructArr)


// 5.

let getMidleSalary = function (array) {
  let sumSalary = 0;
  array.forEach(obj => sumSalary += obj.salary)
  return sumSalary / array.length;
}
getMidleSalary(emplyeeConstructArr)

// 6.

let getRandomNumber = function () {
  let randomNumber = Math.random() * 10;
  console.log(Math.round(randomNumber));
};

getRandomNumber()

// Add task.

let getRandomEmployee = function (array) {
  let employeeIndex = Math.round(Math.random() * (array.length - 1));
  return array[employeeIndex]
};

getRandomEmployee(emplyeeConstructArr)