// 1. Let's create an inventory for a Nigerian supermarket
const inventory = [
    { id: 1, 
        name: "Indomie Noodles", 
        quantity: 500 },
    { id: 2, 
        name: "Peak Milk", 
        quantity: 200 },
    { id: 3, 
        name: "Garri", 
        quantity: 1000 },
    { id: 4, 
        name: "Palm Oil", 
        quantity: 150 }
];

// 2a. My favorite Nigerian fruits - yummy!
const fruits = ["Mango", "Pawpaw", "Banana", "Orange", "Cashew"];
console.log("First fruit:", fruits[0]); // Mango
console.log("Third fruit:", fruits[2]); // Banana
console.log("Last fruit:", fruits[fruits.length - 1]); // Soursop

// 2b. Numbers 1-10 in reverse
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Reversed:", numbers.reverse());

// 2c. Replace second element
numbers[1] = 20; // Changed 9 to 20 in our reversed array

// 2d. Add to beginning and remove from end
const cities = ["Lagos", "Abuja", "Ogun"];
cities.unshift("Kano", "Ibadan"); // Add to beginning
cities.pop(); // Remove Ogun from the end

// 3a. Printing of array elements using Nigerian states
function printArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`State ${i + 1}: ${arr[i]}`);
    }
}

// 3b. Sum of numbers - Maybe calculating daily sales
function calculateSum(numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

// 4a. Filter ages - Maybe for a Nigerian youth program
const ages = [16, 18, 21, 15, 25, 30, 17, 19];
const adults = ages.filter(age => age > 18);

// 4b. Sort names alphabetically
const names = ["Paul", "Faith", "Yinka", "Lizzy", "Seun"];
const sortedNames = names.sort();

// 4c. Find first number > 10
const numberSet = [2, 5, 8, 12, 15, 3, 7];
const firstOver10 = numberSet.find(num => num > 10);

// 4d. Check if value exists
const statesOfNigeria = ["Lagos", "Oyo", "Kano", "Rivers"];
console.log("Is Lagos a state?", statesOfNigeria.includes("Lagos"));

// 5. Remove duplicates - Maybe cleaning up a customer list
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 6. Calculate student grades - WAEC scores example
const grades = [75, 80, 95, 60, 85];
const averageGrade = grades.reduce((a, b) => a + b) / grades.length;
const highestGrade = Math.max(...grades);
const lowestGrade = Math.min(...grades);

// 7. My daily Task
let todoList = ["Buy yam", "Get palm oil", "Purchase rice"];

function addTask(task) {
    todoList.push(task);
}

function completeTask(task) {
    const index = todoList.indexOf(task);
    if(index > -1) {
        todoList.splice(index, 1);
    }
}

function viewTasks() {
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

// 8. Person object
const person = {
    name: "Paul",
    age: 10,
    hobby: "Talking"
};
console.log(`${person.name} loves ${person.hobby}`);
person.isStudent = true;

// 9. Greet function with Nigerian twist
function greet(name) {
    console.log(`Hello, ${name}! How you dey?`);
}

function square(number) {
    return number * number;
}

// 10. Add numbers and check even
const addNumbers = (a, b) => a + b;

function isEven(num) {
    return num % 2 === 0;
}

// 11. Arrow functions
const add = (a, b) => a + b;
const sumArray = arr => arr.reduce((a, b) => a + b, 0);

// 12. Introduction with Nigerian style
const introduce = (name, age, hobby) => {
    return `Howfa! I'm ${name}. I'm ${age} years old, and I love ${hobby}.`;
};

// 13. Find max and filter odd numbers
const findMax = numbers => Math.max(...numbers);

const filterOddNumbers = numbers => numbers.filter(num => num % 2 !== 0);

// 14. Temperature converter
function convertTemperature(temp, type) {
    if(type === "C") {
        return (temp * 9/5) + 32; // To Fahrenheit
    } else {
        return (temp - 32) * 5/9; // To Celsius
    }
}

// 15. Calculate tip - Restaurant bill calculator
function calculateTip(billAmount, tipPercentage) {
    const tip = billAmount * (tipPercentage / 100);
    return billAmount + tip;
}

// 16. Check prime number
function isPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

// 17. BMI Calculator with Nigerian health standards
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let message = "";
    
    if(bmi < 18.5) message = "Underweight";
    else if(bmi < 25) message = "Normal";
    else if(bmi < 30) message = "Overweight";
    else message = "Obese";
    
    return { bmi: bmi.toFixed(1), message };
}

// 18. Password validator for Nigerian banking app
function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    return hasMinLength && hasLetter && hasNumber;
}

// Test some functions with Nigerian context
console.log(introduce("Olayinka", 25, "cooking jollof rice"));
console.log(calculateBMI(75, 1.75));
console.log(validatePassword("Lagos2023"));