const age = process.argv[2]


if (age <= 13) {
    console.log(`${age} its for a kid`)
} else if (age > 13 && age < 19) {
    console.log(`${age} its for  a teenager`)
} else {
    console.log(`${age} its for an adult`)
}

const test = age <= 13 ?
    console.log(`${age} its for a kid`) :
    age > 13 && age < 19 ? console.log(`${age} its for  a teenager`) :
    console.log(`${age} its for an adult`)