var names = ['Irene', 'Jeroen', 'Violeta', 'Matias'];

function greet(name) {
    console.log(`Hello ${name}`);
}

var upperCaseNames = names.map(name => name.toUpperCase())

upperCaseNames.forEach(greet)
console.log(names);