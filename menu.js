const dish1 = 'Mo\'s Salad'
const dish2 = 'Rembertatouille'
const dish3 = 'Tocino Tortilla'
const dish4 = 'Wouter\'s Waffles'
const dish5 = 'Arien\'s Cherry Tomato Soup'

const price1 = 9
const price2 = 12
const price3 = 8

console.log('Welcome to Chez Codaisseur')
console.log(`1.) ${dish1} - €${price1}`)
console.log(`2.) ${dish2} - €${price2}`)
console.log(`3.) ${dish3} - €${price2}`)
console.log(`4.) ${dish4} - €${price3}`)
console.log(`5.) ${dish5} - €${price1}`)

// At the bottom: 
// Make a menu deal with 3 dishes, add the total prices together and give a discount of 3 euros

console.log(`Menu deal: ${dish5}, ${dish2}, ${dish4} - €${price1 + price2 + price3 - 3}`)