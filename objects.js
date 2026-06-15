const user = {
    name : "Ayush",
    age : 25 ,
    gender : "Male" 
}

//Accessing any element
console.log(user.name);
console.log(user["name"]);

//Updating 
user.age = 32;
console.log(user.age);

//Adding 
user.city = "Bombay";
console.log(user.city);

//deleting 
delete user.gender;
console.log(user.gender);  //output undefined 

//loop (printing all elements)
for (let key in user){
    console.log(key + ":" + user[key]);
}
 
//array of objects 
let students = [
    {
        id: 1 , 
        name: "John" , 
        class: 5
    },
    {
        id: 2 , 
        name: "Sina" , 
        class: 7
    },
    {
        id: 3 , 
        name: "Mia" , 
        class: 8
    },
    {
        id: 4 , 
        name: "Alem" , 
        class: 4
    },
    {
        id: 5 , 
        name: "Brody" , 
        class: 6
    },
    {
        id: 6 , 
        name: "Stud" , 
        class: 10
    }
]
console.log(students[0]);
console.log(students[1].name);
