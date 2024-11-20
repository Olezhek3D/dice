function rollDice(){
   
   
   
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    const myH2 = document.getElementById("myH2");
    const myh2s = document.getElementById("myh2s");
   
    if(numOfDice > 999999999999999 ) {
        myh2s.textContent = "You are just kidding."
        myH2.textContent = "";
        diceResult.textContent = "";
        diceImages.innerHTML = ""; 
    }
    else if(numOfDice > 99999){
        myH2.textContent = "CRAZY? THIS IS TOO MUCH!!";
        diceResult.textContent = "";
        diceImages.innerHTML = ""; 
    }
    else{
        for(let i = 0; i < numOfDice; i++){
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(`<img src="img/${value}.png">`);
        } 
        diceResult.textContent = `dice: ${values.join(', ')}`;
        diceImages.innerHTML = images.join(''); 
    }
}