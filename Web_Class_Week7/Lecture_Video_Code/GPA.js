// personal practice from videos. 

function calculateGPA(gpa){
    if (gpa >= 0 && gpa <= 4.0) {
        return true
    } else {
        return false
    }

}

console.log(calculateGPA(3.5)) // true
console.log(calculateGPA(-3)) // false
console.log(calculateGPA(2.7)) // true
console.log(calculateGPA(4.1)) // false

function cityStateAddress(city, state){
    let address = `${city}, ${state.toUpperCase()}` // this is a template string
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn')) 
console.log(cityStateAddress('Omaha', 'ne'))

let address = cityStateAddress('Chicago', 'il')
console.log(address)