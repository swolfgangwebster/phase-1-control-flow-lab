function scuberGreetingForFeet(d){
  // Write your code here!
  if (d <= 400) {return 'This one is on me!'}
  else if (d > 400 && d <= 2000) {return 'That will be twenty bucks.'}
  else if (d > 2000 && d<=2500) {return 'I will gladly take your thirty bucks.'}
  else {return 'No can do.'}
}

function ternaryCheckCity(c){
  // Write your code here!
  return c == "NYC" ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(t){
  // Write your code here!
  switch (t) {
    case 'generous' :
      return 'Thank you so much.'
    case 'not as generous':
      return "Thank you."
    default:
        return 'Bye.'
  }
}