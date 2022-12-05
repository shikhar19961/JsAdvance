//Bind : It store copy of an function , we can invoke it later

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

let printMyName = getFullName.bind(name,"Ambala","haryana"); //printMyName stores copy of getFullName function

printMyName();