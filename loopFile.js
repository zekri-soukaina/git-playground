// let alive = true
// while (alive) {
//     console.log("keep breathing")
// }
let number = 1
while (number < 10) {
    /* print the number */
    /* reassign number to number + 1 */
    console.log(number)
    number++
}

let letters = ["a", "b", "c"]
let index = 0

while (index < letters.length) {
    console.log(letters[index])
    index++
}

for (let index = letters.length; index < 0; index--) {
    // for (let index = letters.length - 1; index >= 0; index--) 
    console.log(letters[index])
}