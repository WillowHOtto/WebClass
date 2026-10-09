// create an object that have your name
let user = { username: 'Willow', password: 'Sprinkles' }

// recommended way
console.log(user.username)// Willow
console.log(user['username'])// Willow

console.log(user.password)// Sprinkles
console.log(user['password'])// Sprinkles

let whatProperty = 'password'
console.log(user[whatProperty])// Sprinkles

let usernameProperty = 'username'
console.log(user[usernameProperty])// Willow

user.password = 'Chocolate'
console.log(user)

user['password'] = 'Vanilla'
console.log(user)

user.email = 'willow@cakeshake.com'
console.log(user)

