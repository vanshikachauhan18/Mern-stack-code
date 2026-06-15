let numbers = [20,5,4,38,9];

//map
let sqr  = numbers.map((ele) => ele*ele);
console.log(sqr);

let half = numbers.map((num) => num/2);
console.log(half);

let cube = numbers.map((num) => num*num*num);
console.log(cube);

//filter
let even = numbers.filter((num) => num%2==0);
console.log(even);

let persons = [
    {
        id: 1 , 
        name: "John" , 
        class: 5,
        age : 12
    },
    {
        id: 2 , 
        name: "Sina" , 
        class: 7,
        age : 15
    },
    {
        id: 3 , 
        name: "Mia" , 
        class: 8, 
        age : 17
    },
    {
        id: 4 , 
        name: "Alem" , 
        class: 4, 
        age : 9
    },
    {
        id: 5 , 
        name: "Brody" , 
        class: 6,
        age : 15
    },
    {
        id: 6 , 
        name: "Stud" , 
        class: 10,
        age : 14
    }
]
let new_arr = persons.filter((i) => i.age>14);
console.log(new_arr);

//find
let array = persons.find((i) => i.id ==3);
console.log(array);

//slicing
let elements = [2,34,28,4,8,28,4];
console.log(elements.slice(1,4));  //accessing some element

elements.splice(4,3); //deleting some elements
console.log(elements);