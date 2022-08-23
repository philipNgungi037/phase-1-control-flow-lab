// function scuberGreetingForFeet(someValue){}
// function scuberGreetingForFeet(){
//   if (someValue <= 400) {
//     return "This one is on me!"
//    } else if (someValue > 2000 && someValue <= 2500) {
//     return "I will gladly take your thirty bucks."
//    } else if (someValue > 2500) {
//      return "No can do."
//   }
// }

// function ternaryCheckCity(){
// function ternaryCheckCity(city){
//   return (city === "NYC" ? "Ok, sounds good." : "No go.")
// }

// function switchOnCharmFromTip(){
// function switchOnCharmFromTip(tip){

//   switch (tip) {
//     case tip = 'generous':
//     return 'Thank you so much.'
//     break;
//     case tip = 'not as generous' :
//     return 'Thank you.'
//     break;
//     default:
//       return "Bye."
//     }
// }
function scuberGreetingForFeet(feet){
  if(feet <= 400){
    return "This one is on me!"
  }
  else if(1999 < feet &&feet < 2500){
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }

  }
  let NYC;
  function ternaryCheckCity(city){
        return city==="NYC" ? ("Ok, sounds good.") : ("No go.");

  }
  function switchOnCharmFromTip(tip){
    switch(tip){
      case "generous":
        return "Thank you so much.";
        break;
        case "not as generous":
          return "Thank you.";
          break;
          default:
            return "Bye.";
    }
  }