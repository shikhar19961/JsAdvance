//Call method : Using call method we can use different object in a same function
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

getFullName.call(name,"Ambala","haryana");
getFullName.call(name2,"Ludhiana","Punjab");

