//apply method : It is similar to call method but in this we pass rest parameters in an array
//Object One
const name  = {
    firstname:"Shikhar",
    lastname:"Uttam"
}

//Object two
const name2={
    firstname:"Amit",
    lastname:"Pal"
}

function getFullName(hometown,state){
    console.log(`
    First Name : ${this.firstname}
    Last Name : ${this.lastname}
    Home Town : ${hometown}
    State : ${state}
    `);
}

getFullName.apply(name,["Ambala","haryana"]);
getFullName.apply(name2,["Ludhiana","Punjab"]);

