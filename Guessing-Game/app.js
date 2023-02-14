let y = Math.floor(Math.random() * 10 + 1);
   // creates random number

let guess = 1;
// used to collect the amount of guesses it takes
document.getElementById("submitguess").onclick = function() {

  // number guessed by user    
    var x = document.getElementById("guessField").value;

    if(x == y)
    {    
      alert("Wow not bad, You got it right in "
            + guess + " amount of guesses ");
    }
    else if(x > y) /* if guessed number is greater than actual number*/
    {    
      guess++;
      alert("close but a weee bit lower");
    }
    else
    {
      guess++;
      alert("you must go higher")
    }
}