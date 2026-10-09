let user = {
    name: 'Willow',
    password: 'Sprinkles',
    email: 'willow@cakeshake.com',
    roles: ['admin', 'editor', 'user'],
    contact: {
        office: 'W1213',
        telephone: '555-555-5555',
    }
}
user.salary = 1000000

user.roles.push('server admin')

user.contact.location = 'Minneapolis'

console.log(user)

// unable to copy the JSON in lecture video 8

