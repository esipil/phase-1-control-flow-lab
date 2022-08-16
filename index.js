function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400) {
    result = 'This one is on me!' ;
  }
  else if ( feet > 2000) {
    result= 'I will gladly take your thirty bucks.' ;
  }
  if (feet > 2500 ) {
    result = 'No can do.'  ;
  }
  return result ;
}

function ternaryCheckCity(city){
   const place = 'NYC'
   const whereTo =  city === place? 'Ok, sounds good.' : 'No go.' ;
   return whereTo ;

}


function switchOnCharmFromTip(tip ){
  
  let gratitude ;

   switch( tip ) {
    case "generous" :
      gratitude = "Thank you so much." ;
      break ;
    case "not as generous" :
      gratitude = "Thank you." ;
      break;
    default:
      gratitude = "Bye."
  }
  return gratitude;
}