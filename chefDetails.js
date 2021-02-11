/*******   object   *******/

/*********** 
 syntax:  name { key: value,}
                     ***********/
// const chef = {
//     name: 'Rein',
//     chefName: 'Jeremiah Bocuse',
//     age: 30,
//     contactDetails: {
//         address: 'Ferdinand Bolstraat 333',
//         zipCode: '1072 LH',
//         city: 'Amsterdam',
//     }
// }
// chef.chefName = 'Justin Dufresne'
// console.log(chef.chefName) // Jeremiah Bocuse
// console.log(chef['name']) // Rein

// const question = 'age'

// // The member operator [] allows you to access 
// // properties using variables

// console.log(chef[question]) // 30
// console.log(chef.contactDetails.address)
const chef = {
    name: '',
    chefName: '..?',
    age: '..?',
    contactDetails: {
        address: '..?',
    },
    favoriteFood: '..?'
}

chef.name = 'Rein'
chef.chefName = 'Justin Dufresne'
chef.age = 30
chef.contactDetails.address = 'Ferdinand Bolstraat 333'
chef.favoriteFood = 'Dahl'

console.log(chef)