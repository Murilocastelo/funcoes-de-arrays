/*==================================
map()
==================================*/
//dobra numeros do array
const numbers = [0,1,4,5,6,7,8]
const doubledNumbers = numbers.map( num => num*2)
//console.log(doubledNumbers)

//fahrenheit para celsius
const fahreinheit = [0,1,12,32,45,50,36,78]
const celsius = fahreinheit.map(elem => Math.round((elem-32)*5/9))
//console.log(celsius)

/*==================================
filter()
==================================*/
const yetAnotherArray = [1,1,2,4,5,6,7,8,4,3,1,2,4]
const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf(elem)===index)
//console.log(uniqueArray)

/*==================================
reduce()
==================================*/
//array de objetos
const rockets=[
   {country: "Russia", launches: 32},
   {country: "US", launches: 23},
   {country: "China", launches: 16},
   {country: "Europe", launches: 7},
   {country: "India", launches: 4},
   {country: "Japan", launches: 3}
]
const totalLaunches = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0)
//console.log(totalLaunches)

/*==================================
every()
==================================*/
// usar quando for preciso testar se todos os elementos de um array
// passam por um teste em especifico
// filter = retorna novo array de objeto
// every = retorna booleano

//verificar se todos os elementos de um array são maiores que 10
const anotherArrray = [12, 5, 8, 130, 44]
// console.log(anotherArrray.every(elem => elem>10))

// verificar se todos tem mais que 18 anos
const turma = [
   {id: 12, name:"frederico", age:8},
   {id: 47, name:"francisca", age:7},
   {id: 77, name:"ramon", age:48},
   {id: 85, name:"zenon", age:52}
]
// console.log(turma.every(p=>p >= 18))

/*==================================
some()
==================================*/
//verificar se há algum numero primo
function isPrimo(value){
   for (let i = 2 ; i<value ; i++){
      if(value%i===0){
         return false
      }
   }
   return value > 1
}

const oneMoreArray = [6 , 8 , 11 , 14 , 42]
// console.log(oneMoreArray.some(isPrimo))

//verificar por condições em valores/objetos
const team = [
   {id: 12, name: "a", pilot: true},
   {id: 44, name: "b", pilot: true},
   {id: 59, name: "c", pilot: false},
   {id: 122, name: "d", pilot: false}
]
// console.log(team.some(person => person.pilot))

/*==================================
find()
==================================*/
const pizzas = [
   "calabresa",
   "mussarela",
   "frango",
   "marguerita",
]
const foundPizza = pizzas.find( p => p.startsWith("m"))
// console.log(foundPizza)

// frutas
const frutas =[
   {name:"jaca", quantity: 2},
   {name:"banana", quantity: 0},
   {name:"cereja", quantity: 5}
]
const foundFruit = frutas.find( frutas => frutas.name === "cereja")
// console.log(foundFruit)

/*==================================
includes()
==================================*/
//para saber se um array possui determinado valor ou objeto
console.log([1, 2, 3].includes(2))