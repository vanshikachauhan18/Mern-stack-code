let i =0;//entry controlled
while (i<=5){
    console.log(i);
    i++;   
}

let x=0;//exit controlled
do {
    console.log(x);
    x++;
}while(x<5);

//for loop
for (let y=0;y<=20;y++){
    console.log(y);
}

for (let y=0;y<=20;y++){
    if(y%2==0){
        console.log(y);
    }
}

for (let y=0;y<=20;y++){
    console.log(y*y);
}

for( let y=20;y>=1;y--){
    console.log(y);
}