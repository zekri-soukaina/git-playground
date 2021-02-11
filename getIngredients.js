/****** Array ******/
/******    syntax:
    const groceries = ['asparagus', 'potatoes', 'walnuts']
                        ******/
// const groceries = ['asparagus', 'potatoes', 'walnuts']
// groceries[2] = 'pepitas'
// console.log(groceries)


const vegetables = ['ginger', 'onions', 'lentils', 'carrot']
const fruits = ['apple', 'tomato', 'pineapple']
const dairy = ['ice cream', 'sour cream', 'yoghurt']

const curry = [vegetables[0], vegetables[1], vegetables[2], fruits[1], dairy[2]]
const fruitSalad = [fruits[0], fruits[2], dairy[0]] /* Make a nice fruit salad! */
const tomatoSoup = [vegetables[1], vegetables[3], fruits[1], dairy[1]] /* And some tomato soup */

// if you need different ingredients, 
// reassign some of the elements of the original arrays

console.log(curry) // [ ginger, onions, lentils, tomato, yogurt ]
console.log(fruitSalad)
console.log(tomatoSoup)