 // var declaration in javascript
 // var, let, or const

  let accBalance = 100;
 const accNumber = 23231212;

 //console.log(accBalance)
// console.log(accNumber)

 // data types in javascript
 /*
 string
 number
 array
 booleans
 objects
 undefined
 null
 */

 const username = "MdAisha" // this a string
 console.log(username)

 accBalance = 1000 //this is a number
 console.log(accBalance)

 let students = ['aisha', 'fatima', 'ahmad', 'musa','amina','saratu'] // this is an array
 console.log(students) // return all the students
 console.log(students[3]) // return musa

 students.pop('') // remove name to end the array
 students.push('kabiru') // add kabiru to end of the array
 students.sort()
 console.log(students)

 // array inside an array
 let food = ['beans', 'rice', 'stew', 'meat', drink=['coke','malt','fanta']];
 console.log(food)

 //boolean
 let registered = true;
 let absent = false;

 // objects
 const Student = {
    fullname:"Fatima Kabir",
    age: 12,
    gender:"female",
    location:"Kaduna",
    SchoolAttended:{
        primary:'mbs academy',
        secondary:'ggss t/nupawa'
    }
 }
 console.log(Student)
 console.log(Student.SchoolAttended.primary)

 // undefined data type
 let car
 console.log(typeof(car))
  
 // null data type
 let siwes = null
 console.log(typeof(siwes))

 // array inside object
 const FamilyMember = {
    Name: "Saratu",
    Location :"Dakwa",
    State : "Abuja",
    Gender : "Female",
    Items:["Bags","Pencil","Cleaner",Book=["Chemistry","Biology"]]
 }
 console.log(" My name is " + FamilyMember.Name + " I am from  " +  FamilyMember.Location)
 console.log(" My name is " + FamilyMember.Name + " I am from  " +  FamilyMember.Location + " I have with me  " + FamilyMember.Items [3][0] + " and " + FamilyMember.Items[3][1] + " textbook  ")

 // string concatenation
 let Firstname = "Aminu"
 let Surname = "Ahmad"
 let fullname = Firstname + "  " + Surname;

 // string literals
 let output =`My name is ${FamilyMember.Name} I am from ${FamilyMember.Location} i have with me ${FamilyMember.Items[3][0]} and ${FamilyMember.Items[3][1]} textbook`;

 console.log(`Using String LIteral:${output}`)
 
 // intro to DOM
 const hello = document.querySelector("#name");
 hello.innerHTML = Student.fullname

 // function in javascript

 // if else statement

 //switch statement

 // loop
 // find even number
 for (let index = 2; index <= 50; index++){
   value = index % 2
   if (value == 0){
      console.log(index)
   }
 }

 // find odd number
 for(let index = 2; index <= 50; index++){
   value = index % 2
   if (value !=0){
      console.log(index)
   }
 }

 // find prime number
 for (let index = 2; index <=50; index++) {
   value = index % 2
   if (value ==1){
      console.log("prime number")
      console.log(index)
   }
   
 }  
 for (let index = 0; index < food.length; index++) {
   const element = food[index];
   console.log(element)
 }

 //let nums = [1,2,3,4,5]
 let val
 for (val in students){
   console.log(students[val])
 }

 // output object using for in
 for (key in Student){
   console.log(Student[key])
 }

 // while statement
 let i = 0
 while (i < 10){
   console.log(i)
   i++
 }

 // do while statement
//  do{
//    let x = 15
//    console.log(x)
//    x++
//  } while (x < 25);

// normal function
function arrowX(y){
   return "Hello "+ y;
}
const out = arrowX('Aisha')
console.log(out);

// arrow function
const arrowF =(x) => {
   return "hello " +x;
}
console.log(arrowF('mallam'))

// working with DOM continue
const imgCon = document.querySelector('.container');
const img = document.createElement('img');
img.src ='avatar_hat.jpg';
img.style = "width:400px; height: auto"

imgCon.append(img)