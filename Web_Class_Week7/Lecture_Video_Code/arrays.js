let animals = ['lion', 'tiger', 'bear'] //oh my!

console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[3] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals[1] = 'zebra'
console.log(animals)

animals.push('elephant')
console.log(animals)

let lastAnimal = animals.pop()
console.log(lastAnimal)
console.log(animals)

animals.unshift('deer')
console.log(animals)

let firstAnimal = animals.shift()
console.log(firstAnimal)
console.log(animals)

animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

console.log(animals.indexOf('panda')) // if something is not found in array it is -1

if (animals.indexOf('walrus') == -1){
    console.log('walrus is not in the array')
}

if (animals.includes('bear')) {
    console.log('bear is in the array')
}

console.log(animals.join(' * '))

animals.forEach(function(animal){
    console.log(animal.toUpperCase())
})

// print the length of each animal name
// bear 4, giraffe 7, lion 4, zebra 5

animals.push('alligator')

animals.forEach(function(animal){
    console.log(animal.length)
})

// create an array [ 4, 7, 4, 5]

let animalNameLength = []
animals.forEach(function(animal){
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)