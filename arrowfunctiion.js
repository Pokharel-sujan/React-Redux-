function sum(a, b){
    return a + b
}
let sum2 = (a, b) => a + b 


function isPositive(number){
    return number >=0
}
let ispositive2 = (number) => number>=0 


function randomnumber(){
    return Math.random
}
let randomnumber2 = () => Math.random


document.getElementById('click', function(){
   console.log('click')
})
document.getElementById('click', () =>  console.log('click'))


class person {
    constructor(name) {
        this.name = name 
    }
    printNameArrow(){
        setTimeout(() => {
            console.log('arrow' + this.name)
        }, 100);
    }
    printNameFunction(){
        setTimeout(function(){
            console.log('Function'+ this.name)
        }, 100);
    }
}

let person = new person ('Bob')
person.printNameArrow() // yesle chai bob vanera print garxa 
person.printNameFunction() // iit doesn't print out any name  because it has standard  form of function 
console.log(this.name)


