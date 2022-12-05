//PollyFill for bind : If browser do not support bind method then we create our own bind method for it.

const name  = {
    firstname:"Shikhar",
    lastname:"Uttam"
}

//Object two
const name2={
    firstname:"Amit",
    lastname:"Pal"
}

function getFullName(hometown,state,country){
    console.log(`
    First Name : ${this.firstname}
    Last Name : ${this.lastname}
    Home Town : ${hometown}
    State : ${state}
    Country : ${country}
    `);
}
Function.prototype.mybind = function(...args){
    let obj = this;
    let restParameters = args.splice(1);
    return function(...args2){
       obj.apply(args[0],[...restParameters,...args2]);
    }
 }

let printMyName = getFullName.mybind(name,"Ambala","haryana"); //printMyName stores copy of getFullName function
printMyName("India");


