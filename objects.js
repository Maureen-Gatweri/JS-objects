
//question1
// Given an array of objects, each object representing a person with a name and age property,
//write a function that returns a new array containing the names of all people who are 18 years or older.

const people=[
    {name:'Alice,',age:17},
    {name:'Eunice',age:22},
    {name:'Charlie',age:14},
    {name:'Max',age:19}
];
function getAdultAges(people){
    return people.filter(person => person.age >18).map(person=>person.name);
    
}
const adults = getAdultAges(people);
 
console.log(adults)

//question2 
//Write a function that takes an array of objects, where each object represents a product with a name, price and category property. 
//The function should return an object that groups the product by their categories, with the category names as keys and the arrays of products as values.
const products=[
    {name: 'Laptop',price:1200,category: 'Electronics'},
  {name:'Shirt',price:25, category:'Clothing'},
   {name:'Headphones',price:80, category:'Electronics'},
   {name:'Shoes',price:60, category:'Clothing'}

];

function groupProducts(products){

  let product = Object.groupBy(products,essential => essential.category);
  return product

};
 console.log(groupProducts((products)));


//question3
//Given an array of objects, where each object represents a student with a name and an array of scores, 
//write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85,
const students=[
  {name:'John',scores:[90,80,85]},
  {name:'Jane',scores:[95,92,88]},
  {name:'Jim',scores:[70,80,75]},
  {name:'Jili',scores:[85,90,84]},

];
function getStudentScores(students){
  return students.filter(student=>{ const avg =student.scores.reduce((acc, curr) => acc+curr,)/student.scores.length;
  return avg>=85}).map(student=>student.name);

}
console.log(getStudentScores(students))



//Question4 
//Given an object representing a car, with properties for make, mode, year, and a method to display the car's information, 
//write a function that takes the car object and adds a new method to the object called age. The age method should
// return the current age of the car based on the current year and the car's property.

const car = {
  make:'Ford',
  model: 'Ranger',
  year:2023,
  displayInfo(){
    console.log(`Make:${this.make},Model:${this.model},Year:${this.year}`);
  },


};
function addCarMethod(car){
  car["age"] = 2024 - car.year  
console.log(car)
}

addCarMethod(car)




