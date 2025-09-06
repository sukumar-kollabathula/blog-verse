let person={
    name:"sukumar",
    age:22,
    college:"jntugv"
}
console.log(person.name)
console.log(person['age'])

const {name,age,college}=person;//destructuring assignment
console.log(name)
console.log(age)

let fruits=["apple","banana","orange","grapes"];
console.log(fruits[0])
//array methods

let numbers=[1,2,3,4,5];

let squares=numbers.map((num)=>num*num);//transform each
console.log(squares)

let even=numbers.filter((num)=>num%2===0);//filter even numbers
console.log(even)

let sum=numbers.reduce((present,num)=>present+num,0);//sum of all numbers or reduce
console.log(sum)


let a=[{name :"sukumar",marks:45},{name:"bharath",marks:55},{name:"kova",marks:65}];
let maxmarks=0;
let topper="";
for(let person of persons){
    if(person.marks>maxmarks){
        maxmarks=person.marks;
        topper=person.name;
    }
}
console.log('topper is $(topper)' )

