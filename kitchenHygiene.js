// // given this person is vegetarian but not vegan:
// const vegetarian = true
// const vegan = false

// const doesNotEatMeat = vegan || vegetarian // resolves to true
// const canEatEggs = !vegan // resolves to true
// const canEatMeat = !vegan && !vegetarian // resolves to false

const startingShift = false
const cutVegetables = true
const cleanedFish = false
const cutChicken = true

const shouldWashHands = startingShift || cleanedFish || cutChicken
const noNeedToWashHands = !shouldWashHands

console.log(`Should I wash my hands? ${shouldWashHands}`)
console.log(`Can I do without washing? ${noNeedToWashHands}`)