const input = 'IVEGOTTHEPWR!'
const maxLoginAttempts = 3

const user = {
    name: 'Rein',
    age: '30',
    credentials: {
        username: 'pwrUser',
        password: 'IVEGOTTHEPWR!',
    },
    loginAttemptsFailed: '1',
    accountLocked: 'false'
}

// const passwordCorrect = user.credentials.password < input
// const finalLoginAttempt = user.loginAttemptsFailed + 1 >= maxLoginAttempts
// const accountLocked = user.accountLocked == false




// user.credentials.pasword < user.credentials.password
// should be:
const passwordCorrect = user.credentials.password === input

// user.loginAttemptsFailed = '1'
// '1' + 1 = 11
// 11 >= 3 = true
// So finalLoginAttempt is true (should be false because we only have 1 failed attempt)
// We can use parseInt to fix the problem
const finalLoginAttempt = parseInt(user.loginAttemptsFailed) + 1 >= maxLoginAttempts

// compare using strict comparison, change 'false' to false in the object
// reverse to logic from == to !==

const accountLocked = user.accountLocked !== false

// You can also rewrite the code to determine if the account is locked in a better way e.g.
// - Write an expressions that determines wether an account is locked based on other info



console.log(`Password correct? ${passwordCorrect}`) // wait what?
console.log(`Final Login Attempt? ${finalLoginAttempt}`) // but we've only had 1 attempt!?
console.log(`Account locked? ${accountLocked}`) // ..?