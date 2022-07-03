var userDatabase = ["Jaida", "Anabelle", "Adison", "Magdalena", "Desirae", "Mirri", "Liezel","Boetie","Pappa","Mommy",];

let number;
let myAge=prompt("What is your age?");
switch(myAge){
    case "1":
        userDatabase.push("dogs", "cats", "horses");
        console.log(userDatabase);
}
switch(myAge){
    case "2":
        userDatabase.push("horses");
        console.log(userDatabase);
}
switch(myAge){
    case "3":
        userDatabase.pop();
        console.log(userDatabase);
}