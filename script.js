let golfName= prompt ("Welcome to GC mini golf! What is your name?");
let intro = "Golfer name is "
intro += golfName;
console.log(intro);

let roundsPlaying= prompt (`Hi ${golfName}! Would you like to play 3 or 6 holes?`);
let roundOptions= roundsPlaying [3, 6];
console.log ("Rounds we are playing are " + roundsPlaying);


let totalPutts = 0;
for (let i = 1; i <= roundsPlaying; i++){
   let putts= parseInt(prompt(`How many putts for hole ${i}? (par: 3)`));
   totalPutts = totalPutts + putts;
}
console.log(`Total Putts: ${totalPutts}`);

if (roundsPlaying == 3 && totalPutts >9) {
    console.log (`Nice try, ${golfName}. Your total par was: +${totalPutts - 9}`)
}

else if (roundsPlaying == 3 && totalPutts < 9) {
    console.log (`Great job ${golfName}! Your total par was: ${totalPutts - 9}`)
}

else if  (roundsPlaying == 3 && totalPutts == 9 ) {
    console.log (`Good game ${golfName}. Your total par was: 0.`)
}

 else if (roundsPlaying == 6 && totalPutts >18) {
    console.log (`Nice try ${golfName}. Your total par was: +${totalPutts - 18}`)
}

else if (roundsPlaying == 6 && totalPutts <18) {
    console.log (`Great job ${golfName}! Your total par was: ${totalPutts - 18}`)
}

else if (roundsPlaying == 6 && totalPutts == 18) {
    console.log (`Good game ${golfName}. Your total par was: 0`)
}


