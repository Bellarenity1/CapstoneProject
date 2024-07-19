function test1(){
    let b = prompt("Do you like art?");
    return b;

}

function artLover() {
    let yourAnswer;
    let anyAnswer;

    yourAnswer = "yes";


anyAnswer = test1();

if( yourAnswer === anyAnswer) { alert("Good for you!!");}else{ alert("Art is awesome.")}

}