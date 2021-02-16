let amountGram;

function convertMass(amount, unit) {

    if (unit === 'pound') {

        amountGram = amount * 453.592,

            console.log(`amount in gram : ${Math.round(amountGram)} g`)

    } else if (unit === 'ounce') {

        amountGram = amount * 28.35,

            console.log(`amount in gram : ${Math.round(amountGram)} g`)
    } else {
        console.log(`the ${unit} is not between option we have`)
    }

}

convertMass(10, 'pound')
convertMass(4, 'ounce')