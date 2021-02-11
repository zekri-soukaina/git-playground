let age = 18
if (age >= 18) {
    console.log("adult")
} else if (age > 12) {
    console.log("teenager")
} else {
    console.log("child")
}

const tired = false
const bored = true
if (tired) {
    console.log("go to bed")
} else if (bored) {
    console.log("do something fun")
} else {
    console.log("work hard")
}

const command = '';
switch (command) {
    case 'prepare starter':
        console.log('I am preparing a starter!');
        break;
    case 'prepare main':
        console.log('I am preparing a main!');
        break;
    case 'prepare dessert':
        console.log('I am preparing dessert!');
        break;
    default:
        console.log('I am cleaning!');
}
const taste = '';
switch (taste) {
    case 'good':
        console.log('yummy! gitthats good one!');
        break;
    case 'ok':
        console.log('lets say is ok!');
        break;
    case 'terrible':
        console.log('oh my, terrible!');
        break;
    default:
        console.log('lets add some herbs!');
}