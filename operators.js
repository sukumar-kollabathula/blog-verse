//arthematic operators
let x=10,y=6;
console.log("x+y",x+y)
console.log("x-y",x-y)
console.log("x*y",x*y)
console.log("x/y",x/y)
console.log("x**y",x**y)
console.log("x%y",x%y)
//assignment operators
let  z=5;
z+=5; 
console.log("z+=5",z)
z-=5;
console.log("z-=5",z)
z*=5;
console.log("z*=5",z)
z/=5;
console.log("z/=5",z)
z**=5;
console.log("z**=5",z)
z%=5;
console.log("z%=5",z)

//comparision operators
let a=5,b=10;
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a>=5 && b<=10)
console.log(a>=5 || b<=10)
console.log(!(a>=5 && b<=10))
console.log(!(a>=5 || b<=10))
//logical operators
let age=20
console.log(age>=20 && age<=30)
console.log(age>=20 || age<=30)
console.log(!(age>=20 && age<=30))
console.log(!(age>=20 || age<=30))
//string operators
let firstName="sukumar"
let lastName="kollabathula"
let fullname=firstName+lastName;
console.log(fullname)
console.log(firstName+" "+lastName)
let correctName=`hello, ${firstName} ${lastName},welcome tyo js`;
console.log(correctName)
let wrongName=`Hello, ${firstName} ${lastName},welcome tyo js`;
console.log(wrongName)
//Ternary operators
let myAge=19;
if(myAge>=18)  {
    console.log("you are eligible to vote")
}
else{
    console.log("you are not eligible to vote")
}
let result=myAge>=18 ? "you are eligible to vote" : "you are not eligible to vote";
console.log(result);
//increment and decrement operators
let count =5;
console.log(count++)
console.log(++count)
console.log(count--)
console.log(--count)
//typeof operator
console.log(typeof count)
console.log(typeof "sukumar")
console.log(typeof 18)