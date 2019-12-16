function range(start, end, step){
  let number = start;
  let numberArray = [];

  if(start === undefined || end === undefined || step === undefined){
    return numberArray;
  } else if(start > end){
    return numberArray;
  } else if(step <= 0){
    return numberArray;
  }

  for(let i = start; i <= end; i++){

    if(i === number){
      numberArray.push(number);
      number += step;
    }
  }

  return numberArray;

}

console.log(range(0,10,2));
console.log(range(0,100,5));
console.log(range(20, 10, 2));
console.log(range(-9, 3, 3));
