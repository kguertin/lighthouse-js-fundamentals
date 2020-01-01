let loopyLighthouse = function(range, multiples, words){
  let workingArray= [],
      finalArray = [],
      tempElm;

  if(range.length > 2 || range.length < 2){
    return 'Please enter a range of two numbers';
  }

  for(let i = range[0]; i <= range[1]; i++){
    workingArray.push(i);
  }

  for(let i = 0; i < workingArray.length; i++){
    for(let j = 0; j < multiples.length; j++){
      if(workingArray[i] % multiples[j] === 0){
        tempElm += words[j];
      }
    }
    
    if(tempElm === undefined){
      finalArray.push(i);
    }else{
      finalArray.push(tempElm);
    }

    tempElm = undefined;
  }
  return finalArray;
}

//Not yet finished, can make it so we can take two of every paramater but code doest work if we introduce another multipul or word.
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));