//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.
let num = prompt("enter the number");
let arr = [];
for(i=1;i<=num;i++) {
    arr[i-1] = i;
}
console.log(arr);
//using the reduce method to calculate sum of all numbers in the array.
let sum = arr.reduce((cur,next) => {
    return cur+next;
})
console.log("sum of all the numbers is",sum);
//using the reduce method to calculate product of all the numbers in the array
product = arr.reduce((cur,nxt) => {
    return cur*nxt;
})
console.log("product of all the numbers is",product);
