// Write your code in this file!
function scuberGreetingForFeet(someValue) {
    //this is where we can use conditionals given our argument, someValue
    //don't forget to return whatever the result is!

    //gives customers free sample if ride is less than or equal to 400 feet
    if (someValue > 2500){
        return 'No can do.'
    }else if (someValue <= 400) {
       return  "This one is on me!"
    }else if (someValue > 2000) {
        return 'I will gladly take your thirty bucks.'
    }

}


function ternaryCheckCity(str) {
   return str === 'NYC'? "Ok, sounds good." : "No go."
}



function switchOnCharmFromTip(tip) {
    switch (tip) {
        case 'generous':
            return "Thank you so much."
            break;
        case "not as generous":
            return "Thank you."
            break;
        default :
            return 'Bye.'
    }
}

