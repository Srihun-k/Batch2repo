var a=34
let b=20
const c=30

a=15
b=35
// c=35
// console.log("a",a)
// console.log("b",b)
// console.log("c",c)


const cars=["apple","ball",1223]
const car1=new Array("applw","dsdsd")
// console.log(cars)
// console.log(car1)

const add=(aa,ab)=>aa+ab

const add1=(a,b)=>{
    return a+b
}
// console.log(add(a,b))

//Arrow functions
let numbers=[1,2,3,5,3,5,54,85,4,5,45,4,5]
let doubled=numbers.map(n=>n*2)
let evens=numbers.filter(n=>n%2==0)
let sum=numbers.reduce((total,n)=>total+n,0) 
console.log(doubled)
console.log(evens)
console.log(sum)

