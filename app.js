// const fs= require('fs');

// fs.writeFileSync('Hello.txt', 'Salut Salut Salut')

// Fonctions
// let nom='Marc'
// let age= 24
// let hobbies=true

// const user= (userName, userAge, userHobbie)=> {
//    return (
//     'Le nom est '+userName+ 
//     ",\nL'age est "+userAge+
//     ',\nHobbies est '+userHobbie
//    )
// };
   
// console.log(user(nom,age,hobbies));

// Les objets, propriétés et methodes

// const person ={
//     name: 'Marco',
//     job: 'QA',
//     present () {
//         console.log('Salut, je suis '+ this.name)
//     }
// }
// person.present();

// structuration d'objet
// const prinName= ({name,}) =>{ 
//     console.log(name);
// }

// prinName(person)

// const {name, job}= person
// console.log(name, job);

// Les Arrays 

// const hobb =['sport', 'manger']

// structuration de tableau

// const [hob1, hob2]= hobb
// console.log(hob1, hob2);

// console.log(hobb.map(hobby =>{
//     return ('hobby :'+hobb)
// }));
// ou

// hobb.push("programmation")
// console.log(hobb.map(hobby => 'hobby :' +hobby))

// for (let hobbi of hobb){
//     console.log(hobbi)
// }

// const copiedHobb= hobb.slice()// copie du tableau
// const copiedHobb=[hobb]// immutabilité

// const copiedHobb=[...hobb] // avec opérateur de propagation
// console.log(copiedHobb);

// const pCopier= {...person}
// console.log(pCopier);

// const tab = (...arg)=>{ // opérateur de repos
//     return arg
// }

// console.log(tab(1,2,3));

// Code asynchrone

// setTimeout(() =>{
//     console.log('Cest bien fait');
// }, 200)

// const promesse1 = new Promise((resolve, reject ) =>{
//     const ale =Math.trunc(Math.random()*10)+1;

//     if (ale <= 5) {
//         resolve('Bien entre 1 et 5 !')
//     } else{
//         reject("Pas bon entre 6 et 10 !")
//     }
// })

// console.log(promesse1);


