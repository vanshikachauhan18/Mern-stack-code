//function declaration
function greet(){     
    console.log("Good Morning");
}

console.log("Hi");
console.log("How are you?");
greet();  //function call

//Addition with parameters
function add(a,b){
    console.log(a+b);
}
add(7,8);

//multiplication with parameters
function mul(a,b,c){
    console.log("multiply:",a*b*c);
}
mul(2,5,4);

//even odd
function iseven(a){
    if(a%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
iseven(6);

//square of numbers
function square(x){
    console.log(x*x);
}
square(12);

//return statement
function Add(x,y){
    return x+y;
}
//1st way
console.log(add(5,6));
//2nd way
let result = add(5,6);
console.log(result);

//arrow function
const addition = (a,b) => { console.log(a+b); }
addition(8,4);

const welcome = () => { console.log("Welcome to our website");}
welcome();