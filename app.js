//Truthy
//String with contents
//Object
//Array
//non 0 numbers
//Falsey
//Empty String
//0
//undefined
//null
//NaN


let me = {
  username: 'MegaMark',
  email: 'M@m.com',
  formal: 'Mr.',
  name: 'Mark',
  points: 100
}
let greeting = ''

function addPoints(num) {
  me.points += num
}


function greet(user) {
  // varibles created in the function only exist in the function unless returned
  // let test = "test"
  if (!user) {
    console.log('no user!')
    return
  }
  if (!user.formal) {
    greeting = 'Hello ' + user.name
    return
  }
  greeting = `Hello ${user.formal} ${user.name}`
}

greet()
let x = me.points
addPoints(10)
greet(me)
console.log(greeting)



function greet2(user) {
  if (!user) {
    return 'no user!'
  }
  if (!user.formal) {
    return 'Hello ' + user.name
  } else {
    return `Hello ${user.formal} ${user.name}`
  }
}
console.log(greet2())

function getRent(cityName) {
  // if (cityName == 'boise') {
  //   return 1000
  // }
  // else if (cityName == 'portland') {
  //   return 4000
  // }
  // else if (cityName == "losAngeles" || cityName == "new york" || cityName == "barcelona") {
  //   return 10000
  // }
  // return "no data"
  let out = 0
  switch (cityName.toLowerCase()) {
    case 'boise':
      out = 1000
      break;
    case 'portland':
      out = 4000
      break;
    case 'new york':
      console.log("hello from the big apple")
    case 'los angeles':
    case 'barcelona':
      out = 10000
      break;
    default:
      out = NaN
  }
  return out
}
console.log(getRent('boise'))



let rent = {
  boise: 1000,
  portland: 4000,
  losAngeles: 10000,
  freeLand: 0
}

function getRentFromData(cityName) {
  //dot notation looks for the literal property name
  //bracket notation is passing variables as property names
  debugger
  if (rent[cityName]) {
    return '$' + rent[cityName]  //rent.boise
  }
  return 'no data'
}


//given the numbers 0-6 return the day of the week where 0 is Sunday and 6 is Saturday

//good
function conditionalDay(num) {
  if (num == 0) {
    return "Sunday"
  }
  else if (num == 1) {
    return "Monday"
  }
  else if (num == 2) {
    return "Tuesday"
  }
  else if (num == 3) {
    return "Wednesday"
  }
  else if (num == 4) {
    return "Thursday"
  }
  else if (num == 5) {
    return "Friday"
  }
  else if (num == 6) {
    return "Saturday"
  }
}

//better
function switchDay(num) {
  let out = ''
  switch (num) {
    case 0:
      out = "Sunday"
      break;
    case 1:
      out = "Monday"
      break;
    case 2:
      out = "Tuesday"
      break;
    case 3:
      out = "Wednesday"
      break;
    case 4:
      out = "Thursday"
      break;
    case 5:
      out = "Friday"
      break;
    case 6:
      out = "Saturday"
      break;
    default:
      out = "invalid day"
  }
  return out
}

//best
let daysOfTheWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

function arrayDay(num) {
  debugger
  if (num > -1 && num < daysOfTheWeek.length) {
    return daysOfTheWeek[num]
  }
  return "invalid day"
}

let today = arrayDay(2)
console.log(today)

