import "bootstrap";
import "./style.css";


//

// valor de carta aleatorio
function generatoRandomValue(){
  let value=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  let indexValue= Math.floor(Math.random()*value.length);
  return value[indexValue]; 
}

// Palo de carta aleatorio
function generatoRandomSuit(){
  let suit=["spade","heart","club","diamond"]
  let indexSuit= Math.floor(Math.random()*4);
  return suit[indexSuit];
}

// carta aleatoria
function generatorRandomCard(){
  let finalValue = generatoRandomValue();
  let finalSuit = generatoRandomSuit();


// simbolos de los palos 

 const suitSymbols = {
    heart: "♥",
    diamond: "♦",
    spade: "♠",
    club: "♣"
  };

  const symbol =suitSymbols[finalSuit];
  
//creo const para cambiar  clases
  const card = document.querySelector(".card");
  const topSuit= document.querySelector(".top-suit");
  const bottomSuit= document.querySelector(".bottom-suit");
  const number= document.querySelector(".value");

  //elimina las clases que habia antes
  card.classList.remove("heart", "diamond", "spade", "club");

  // añade clases 
  card.classList.add(finalSuit);

  // Poner el símbolo y el valor en el HTML
  topSuit.textContent = symbol;
  bottomSuit.textContent = symbol;
  number.textContent = finalValue;
}
 window.onload = () => {
  generatorRandomCard();
};