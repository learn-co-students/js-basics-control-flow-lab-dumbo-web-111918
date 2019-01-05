// Write your code in this file!

function scuberGreetingForFeet(num) {
  if (num <= 400) {
    return 'This one is on me!'
  } else if (num > 2000 && num < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (num > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  const mes1 = "Ok, sounds good.";
  const mes2 = "No go.";
  return city === "NYC" ? mes1 : mes2
}


function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
