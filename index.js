// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let response

    if (someValue <= 400) {
      return 'This one is on me!';
}
    else if (someValue > 2000 && someValue < 2500) {
      return 'I will gladly take your thirty bucks.'
    }
    else {
      return 'No can do.'
    }

}

function ternaryCheckCity(someCity) {
  if (someCity == "NYC") {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(someNumber) {
  switch (someNumber){
    case 'generous':
      return "Thank you so much."
    break;
    case 'not as generous':
      return "Thank you."
    break;
    default:
    return "Bye."

  }

}
