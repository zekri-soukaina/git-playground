 /*** ternary    ***/
 /***** sytax:
     boolean expression ? 'if true resolve to this' : 'if false to this'
     example:
     let programmer = true
 const message = programmer ? 'I know what I\'m doing!' : 'Uhh.. What??'
 console.log(message) // 'I know what I'm doing!'

             ******/

 // const currentDay = 'wednesday'
 // const currentTime = 17
 // const christmasToday = false

 // const dayOff = 'monday'
 // const openingTime = 18
 // const closingTime = 23

 // const openToday = currentDay !== dayOff && !christmasToday
 // const openRightNow = currentTime >= openingTime && currentTime < closingTime

 // // We need some parenethesis () so we can put our nested ternaries on multiple lines
 // const message = (!openToday ?
 //     'We \'re closed today' :
 //     openRightNow ?
 //     'Welcome!' :
 //     `We are open between ${openingTime}h and ${closingTime}h`
 // )

 // console.log(message) // We are open between 18h and 23h

 const password = 'supersecretpassword'
 const input = 'iamhackingyou'
 const loginAttemptsFailed = 0
 const maxLoginAttempts = 3

 const passwordCorrect = password === input
 const finalLoginAttempt = loginAttemptsFailed + 1 >= maxLoginAttempts

 const accountLocked = !passwordCorrect && finalLoginAttempt

 // just locking someone out of their account isn't very nice ...
 // We want to display some feedback:

 // If the password is correct -> 'Welcome'
 // If the account was locked -> 'You are trying to hack us! ACCESS DENIED!'
 // If the password was wrong but you can try again -> 
 // 'Wrong! You can try again x more time(s)'
 const message = (passwordCorrect ?
     'Welcome' :
     accountLocked ?
     'You are trying to hack us! ACCESS DENIED!' :
     `Wrong! You can try again ${maxLoginAttempts - (loginAttemptsFailed + 1)} more time(s)`
 )

 console.log(message)