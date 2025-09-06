let marks=20;
if (marks>=90){
    console.log("A+ grade")
}else if(marks>=80){
    console.log("A grade")
}else if(marks>=70){
    console.log("B+ grade")
}
else if(marks>=60){
    console.log("B grade")
}
else if(marks>=50){
    console.log("C grade")
}
else if(marks>=40){
    console.log("D grade")
}
else if(marks>=33){
    console.log("E grade")
}
else{
    console.log("fail")
}
let day=3;
switch(day){
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    default:
        console.log("invalid day")
}
let i=1;
for(i=1;i<=5;i++){
    console.log(i)
}
let j=1;
while(j<=5){
    console.log(j)
    j++;
}
let colors=["red","green","blue","yellow"];
for(let k=0;k<colors.length;k++){
    console.log(colors[k])
}
for(let color of colors){
    console.log(color)
}

let person={
    name:"sukumar",
    age:22,
    college:"jntugv"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}
for(let i=5;i>=1;i--){
    if(i===3){
        continue;
    }else if(i===2){
        break;
    }
    console.log(i)
}

