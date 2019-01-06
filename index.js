// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400){
    result = "This one is on me!"
  }
  else if (someValue <= 2001) {
    result = "I will gladly take your thirty bucks."
  }
  else {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(num) {
  let result
  num === 'NYC'? result = 'Ok, sounds good.' : result = 'No go.'

  return result
}

function switchOnCharmFromTip(num) {
  let result
  switch(num){
    case 'generous':
      result = "Thank you so much."
      break;
    case 'not as generous':
      result = "Thank you."
      break;
    default:
      result = "Bye."
  }
  return result
}
