function howManyHundreds(number){
 let result = (number - (number % 100)) / 100;
 console.log(`The total number ${number} is ${result}`);
 return result;
}
