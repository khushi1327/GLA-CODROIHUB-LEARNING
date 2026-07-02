console.log("Hello! This is External JavaScript.");
//number
let age=20;
//string
let name="khushi";
//boo;ean
let isStudent=true;
//undefined
let address;
//null
let phone=null;
// Bight
let population=12345678901234567890n;
//symbol
let id = Symbol("student");

// Print all values
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Address:", address);
console.log("Phone:", phone);
console.log("Population:", population);
console.log("ID:", id);

let studentName = "khushi";
let studentAge = 20;
let course = "Full Stack Development";
let city = "Raxaul";

console.log("Student Name:", studentName);
console.log("Age:", studentAge);
console.log("Course:", course);
console.log("City:", city);

let employee = {
    name: "khushi",
    department: "IT",
    salary: 40000,
    experience: "3 Years"
};

console.log(employee);
console.log(employee.name);
console.log(employee.salary);

employee.salary = 50000;

console.log(employee);

let mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 75000,
    color: "Black"
};

console.log(mobile);

mobile.price = 70000;

console.log(mobile);

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First Fruit:", fruits[0]);

console.log("Last Fruit:", fruits[fruits.length - 1]);

fruits.push("Kiwi");
fruits.push("Pineapple");

console.log("Length:", fruits.length);

console.log(fruits);

let subjects = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS"
];

console.log(subjects[0]);
console.log(subjects[2]);

subjects.push("MongoDB");

console.log(subjects.length);

console.log(subjects);
// task 8
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);
// task 9
let basicSalary = 25000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;

console.log("Total Salary:", totalSalary);
// task 10
let marks = 50;

marks += 10;
console.log(marks);

marks -= 5;
console.log(marks);

marks *= 2;
console.log(marks);

marks /= 5;
console.log(marks);

marks %= 4;
console.log(marks);

//task 11
let x = 10;
let y = 20;

console.log(x > y);
console.log(x < y);
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);

//task 12
let age2 = 22;

console.log(age2 > 18 && age2 < 30);

console.log(age2 > 25 || age2 < 30);

console.log(!(age2 > 18));
// task  13
let count = 10;

count++;
console.log(count);

count++;
console.log(count);

count--;
console.log(count);

// challenge 1
let product = {
    productName: "Laptop",
    price: 55000,
    category: "Electronics",
    rating: 4.8
};

console.log(product);

product.price = 50000;

console.log(product);

// challenge 2
let cities = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Jaipur",
    "Lucknow",
    "Pune",
    "Agra",
    "Noida",
    "Mathura"
];

console.log(cities[0]);

console.log(cities[cities.length - 1]);

cities.push("Bhopal");

console.log(cities.length);

console.log(cities);

/* ==========================
Challenge 3
========================== */

let myName = "Khushi";
let myAge = 22;

let profile = {
    name: "Khushi",
    course: "B.Tech",
    city: "Mathura"
};

let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(myName);
console.log(myAge);
console.log(profile);
console.log(skills);

/* ==========================
Mini Project
========================== */

let student = {
    name: "Khushi",
    age: 22,
    course: "B.Tech CSE"
};

let studentSkills = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log("Student Dashboard");

console.log(student);

console.log(studentSkills);

studentSkills.push("React");
studentSkills.push("NodeJS");

console.log("Updated Skills:");

console.log(studentSkills);

