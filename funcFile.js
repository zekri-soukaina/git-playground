function greet() {
    console.log('Hello there Stranger!')
}

// call multiple times
greet()
greet()

function learnTopic(topic) {
    console.log(`We are learning ${topic} right now!`)
}

learnTopic("function")
learnTopic("scope")
learnTopic("loop ")

// return: Getting values back out of functions:

function bmi(heightInM, weightInKg) {
    // return the result of the calculation
    return Math.round(weightInKg / (heightInM * heightInM))
}

// call the function with argument
// assign the value that is returned to a variable
const person1BMI = bmi(1.79, 83)
const person2BMI = bmi(1.66, 60)

// Use the variable in your program
console.log(person1BMI) // 26
console.log(person2BMI) // 21

function add(num1, num2) {

    return num1 + num2
}

const sum = add(4, 8)

console.log("the addition of two given numbers is: ", sum)

const multiply = function(a, b) {
    return a * b
}

console.log(multiply(2, 3))

function whatAreYouDoing() {
    console.log('I am cooking')
}
const chef = {
    name: 'Rein',
    chefName: 'Jeremiah Bocuse',
    age: 30,
    cook: whatAreYouDoing,
    speak: function() {
        console.log('Check yourself before you wreck yourself')
    }
}

chef.cook()
chef.speak()