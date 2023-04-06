/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


//create a variable for jon and jamie's health 


let jonSnowHealthAttack = 35 
let jameieLannisterAttack = 35



if(jonSnowHealthAttack > jameieLannisterAttack){
    console.log(`jon has a greater attack`)
}else if(jonSnowHealthAttack === jameieLannisterAttack){
    console.log(`both have equal power `)
}else{
    console.log(`jamie has a greater attack`)
}

//create two variables for john for his health and defense 

let jonSnowHealth = 100
let jonSnowDefense = 0

if(jonSnowHealth <= jameieLannisterAttack){
    console.log('JonSnow has been killed ')
}else {
    console.log('jonSnow lives ')
}


//increase defense 

jonSnowDefense += 25; 

if(jonSnowHealth <= jameieLannisterAttack - jonSnowDefense){
    console.log(`Jon has been slain`)
}else {
    jonSnowHealth = jonSnowHealth - (jameieLannisterAttack - jonSnowDefense)
    console.log(jonSnowHealth)
}

if((jonSnowHealth + 50) >= 100){
    jonSnowHealth = 100
}else{
    jonSnowHealth + 50
}

// Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon’s head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).


let coinLandsHeads = false 

if(coinLandsHeads === true){
    console.log('take his head')
}else{
    console.log('allow jon to run away')
}

// for(let i = 0; i < 5; i++){
//     jonSnowHealth -= (jameieLannisterAttack - jonSnowDefense)
//     console.log(jonSnowHealth)
// }