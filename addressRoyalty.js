// const employer = {
//     first_name: 'Charles',
//     last_name: 'Peterson',
//     title: 'queen',
//     gender: 'Male'
// }

const employer = [{
        first_name: 'Charles',
        last_name: 'Peterson',
        title: 'baron',
        gender: 'Male'
    },
    {
        first_name: 'Elisabeth',
        last_name: 'the Second',
        title: 'queen',
        gender: 'female'
    },
    {
        first_name: 'Elisabeth',
        last_name: 'the Third',
        title: 'duchess',
        gender: 'female'
    }
]

const findFormOfAddress = function(employer) {

    switch (employer.title) {
        case 'king':
        case 'queen':
            console.log(`Your Majesty`)
            break;
        case 'prince':
        case 'princess':
            console.log(`Your Royal Highness`)
            break;
        case 'duke':
        case 'duchess':
            console.log(`Your Grace`)
            break;
        case 'marquess':
        case 'earl':
        case 'viscount':
        case 'baron':
            console.log(`Men ${employer.last_name}`)
            break;
        case 'marchioness':
        case 'countess':
        case 'viscountess':
        case 'baroness':
            console.log(`Women ${employer.last_name}`)
            break;
        case 'baronet':
        case 'knight':
            console.log(`Sir ${employer.first_name}`)
            break;
        case 'dame':
            console.log(`Dame ${employer.first_name}`)
            break;
        default:
            console.log(`${employer.title} is not in the addressing list !`);

    }

}

// findFormOfAddress(employer)

findFormOfAddress(employer[0])
findFormOfAddress(employer[1])
findFormOfAddress(employer[2])



/**** other solution ******/

// const findFormOfAddress = function (employer) {
//   if (employer.title === 'King' || employer.title === 'Queen') {
//     console.log('Your Majesty')
//   } else if (employer.title === 'Prince' || employer.title === 'Princess') {
//     console.log('Your Royal Highness')
//   } else if (employer.title === 'Duke' || employer.title === 'Duchess') {
//     console.log('Your Grace')
//   } else if (employer.title === 'Baronet' || employer.title === 'Knight') {
//     console.log(`Sir ${employer.first_name}`)
//   } else if (employer.title === 'Dame') {
//     console.log(`Dame ${employer.first_name}`)
//   } else {
//     if (employer.gender === 'female') {
//       console.log(`Lady ${employer.last_name}`)
//     } else {
//       console.log(`Lord ${employer.last_name}`)
//     }
//   }
// }

// employers.forEach(function(employer) {
//   findFormOfAddress(employer)
// })