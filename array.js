let arr = [2,3,4,'A', 50, true];

//accessing an element
console.log(arr[2]);

//updating an element
arr[4] = 63;
console.log(arr[4]);

//adding an element
arr.push(26);//at the end 
console.log(arr[6]);

arr.unshift(32);// in the starting
console.log(arr[0]);

//delete an element
arr.pop();   //end element delete
arr.shift();  //delete from starting
console.log(arr);

//traversal of array or print of array
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);  //printing elements of array
}

arr.forEach(i => { console.log(i)});

//to check if the array contains particular element
console.log(arr.includes(5));
console.log(arr.includes(2));

//to check the index of element
console.log(arr.indexOf('A'));

//with function
function printElement(arr){
    for(let i =0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
const students = ['John','Sia','Anshul'];
printElement(students);
printElement(arr);

//function
let Arr=['Sanjeev','Mukesh','Bhushan']
function Family(Arr){
    for(let i =0;i<Arr.length;i++){
        console.log(Arr[i]);
    }
}
const members=['Vishu','Himanshu','Princy','Manan'];
Family(members);
Family(Arr);


//even odd
let numbers = [ 2,48,24,27,82,42,12,92,57,33,97];
function Classify(numbers){
    for(let i =0; i<numbers.length; i++){
        if(numbers[i]%2==0){
            console.log('even: ',numbers[i]);
        }
        else{
            console.log('odd: ', numbers[i]);
        }
    }
}
Classify(numbers);

function searchElement(arr,ele){
    for(let i =0; i<arr.length; i++){
        if(arr[i] == ele){
            console.log("Element found at index" , i);
        }
        else{
            console.log("not found");
        }
    }
}
let myarr = [2,6,4,1,7,9,8];
searchElement(myarr,1);
searchElement(myarr,8);