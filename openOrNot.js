// const password = 'supersecretpassword'
// const input = 'iamhackingyou'
// const loginAttemptsFailed = 2
// const maxLoginAttempts = 3

// const accountLocked = password !== input && loginAttemptsFailed + 1 >= maxLoginAttempts

// // const passwordCorrect = password === input
// // const finalLoginAttempt = loginAttemptsFailed + 1 >= maxLoginAttempts

// // const accountLocked = !passwordCorrect && finalLoginAttempt

// console.log(`Account locked? ${accountLocked}`)

const currentDay = 'wednesday'
const currentTime = 20
const christmasToday = false

const dayOff = 'monday'
const openingTime = 18
const closingTime = 23

const openDay = currentDay !== dayOff && !christmasToday
const openTime = currentTime >= openingTime && currentTime < closingTime
console.log(`Restaurant open? ${ openDay && openTime }`)
console.log(`Restaurant closed? ${  openDay || !openTime}`)