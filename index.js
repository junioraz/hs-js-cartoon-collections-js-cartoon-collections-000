function dwarfRollCall(dwarves) { 
  let dwarfNames = "";
  for (let i = 0; i < dwarves.length; i++) {
    let progression = i +1;
    dwarfNames += progression + ". " + dwarves[i] + " ";
  }
  return dwarfNames;
  
}

function summonCaptainPlanet(planeteerCalls){
  for (let i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
  return planeteerCalls
}




function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if(words[i].length > 4){
    return true;
  }
  else return false;
}
}

function findTheCheese (foods) {
  
  for (let i = 0; i < foods.length; i++){
    if(foods[i] =="cheddar"|| foods[i] =="gouda"||foods[i] =="camembert"){
      return foods[i];
    }
  }
  return "no cheese!";
}



  // words = [ "tank", "grapes", "boat", "bob"] => [ "boat", "bob" ]
  // function wordsWithB(words) {
  //   let bWords = []
  //   for(let i = 0 ; i < words.length; i++){
  //     if(words[i].startsWith('b')){
  //       bWords.push(words[i])
  //     }
  //   }
  //   return bWords
  // }

  

