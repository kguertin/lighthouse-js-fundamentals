//If statements 
/*
const raining = true;
const cold = false;

if(raining){
  console.log('Dont forget your umbrella');
}

if(cold){
  console.log('Make sure you pick out a scarf');
}

console.log('Now your ready to got outside')
*/

//Else statements
/*
const cold = false;

if(cold){
  console.log('Make sure you pick out a scarf.')
}else{
  console.log('Short sleeves are fine.')
}
*/

//If...Else Statements
/*
const temperature = 23;

if(temperature < 0){
  console.log('Make sure you pick out a scarf.');
} else if(temperature < 15){
  console.log('Short sleeves wont\'cut it');
}else{
  console.log('Short sleeves are fine.');
}

console.log('Now you\'re ready to go outside.');
*/

//Logical operators
const isCitizen = true;
const age = 17;

if(isCitizen && age > 18){
  console.log('You are eligible to vote.');
}

const temperature = 50;

if(temperature < -40 || temperature > 40){
  console.log('Maybe going outside isn\'t such a great idea.');
}

const raining = false;

if(!raining){
  console.log('leave your umbrella at home');
}
