// const fs= require('fs');

// fs.writeFileSync('Hello.txt', 'Salut Salut Salut')

var nom='Marc'
var age= 24
var hobbies=true

const user= (userName, userAge, userHobbie)=> 
    'Le nom est '+userName+ 
    ",\nL'age est "+userAge+
    ',\nHobbies est '+userHobbie


console.log(user(nom,age,hobbies))