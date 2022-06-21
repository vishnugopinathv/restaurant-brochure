// let obj1={
//     name:"vishnu"
//     ,dob:{
//         year:1998,
//         date:27
//     }
// }
// console.log(obj1)
// let obj2=obj1;
// obj2.dob={
//     date:30,
//     year:2000
// }
// console.log(obj2)

// function palindrome(s){
//     let a=parseInt(s.toString().split("").reverse().join(""))
//     if(a===s){
//         console.log("palindrome")

//     }
//     else{
//         console.log("not a palindrome")
//     }
// }
// palindrome(123)


// console.log('vishnu')
// setTimeout(() => {
//    console.log('inside timer') 
// },0);
// while(true){
//     console.log('inside while')
// }
// console.log('task completed')

// const string="vishnu";

// console.log(...string);

// obj1={
//     name:'vishnu'
//     ,age:24
// }

// function introduce(interest){
//     console.log(this.name+"is"+this.age+'years old and he likes'+interest)
// }


// introduce.call(obj1,'cricket')

// console.log(1+2+'3'+4)

function discountPrices (prices, discount) {
    let discounted = []
  
    for (let i = 0; i < prices.length; i++) {
      let discountedPrice = prices[i] * (1 - discount)
      let finalPrice = Math.round(discountedPrice * 100) / 100
      discounted.push(finalPrice)
    }
  
    console.log(i)
    console.log(discountedPrice)
    console.log(finalPrice)
  
    return discounted
  }
  
  discountPrices([100, 200, 300], .5)
  