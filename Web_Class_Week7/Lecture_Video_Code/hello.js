console.log('Hello, World!');

// This program is inside of the Web_Class_Week7 file and is named hello.js. 
// To execute this program, you need to put the directory of the file.
// For this program it is node .\Web_Class_Week7\hello.js

let color = 'blue'
var size = 'medium' //var is not recommended
const language = 'JavaScript' // can't change this value

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = 'Hi Programmers'
// do not mix quotes

console.log('There are ' + quantity + ' programmers')


let todayTemp = 75

console.log('Today\'s temp is ' + todayTemp + ' degrees fahrenheit')

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temp is ' + tempC.toFixed(2) + ' degrees celcius')

// with template string
console.log(`Today's temperature is ${tempC.toFixed(2)} degrees Celsius, which is equivalent to ${todayTemp} degrees Fahrenheit.`)

// video practice with template string
// make the sentence 'This class is ITEC 2560 Web Programming'

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)

