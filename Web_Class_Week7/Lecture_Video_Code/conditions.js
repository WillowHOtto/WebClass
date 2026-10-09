// you must be at least 30 years old
// you have to have been a US vitizen for 9 or more years
// you must live in the state you want to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Wisconsin'


if (age >= 30 && usCitizenTime >=9 && stateOfResidence == stateWantToRepresent){
    console.log('You are eligible to be a senator in ' + stateWantToRepresent)
} else {
    console.log('Sorry, you are not eligible to be a senator in ' + stateWantToRepresent)
}