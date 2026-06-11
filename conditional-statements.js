let age = 20;
if( age > 18){
    console.log('can vote');
}
else{
    console.log("cannot vote");
}

let num=-20;
if(num>0){
    console.log("positive");
}
else{
    console.log("negative");
}

let marks=50;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=75 && marks<90){
    console.log("Grade A");
}
else if(marks>35 && marks<75){
    console.log("Grade B");
}
else{
    console.log("Fail");
}

let x = 10;
if(x%2==0){
    console.log("even");
}
else{
    console.log("odd");
}

let y = 20;
console.log(y%2==0? 'even':'odd');

//let city="Mohali";
//if(typeof city==string){
    //console.log("true");
//}
//else{
   // console.log("false");
//}


let day = 1;
switch (day){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Friday");
    break;
    case 6:console.log("Saturday");
    break;
    case 7:console.log("Sunday");
    break;
}
let amount = 20000;
let discount;

switch (true){
    case amount>=18000:
        discount = amount* 0.50;
        break;
        case amount>=10000 && amount<18000:
            dicount = amount*0.20;
        default : discount = 0;

}
console.log("discount is :", discount);