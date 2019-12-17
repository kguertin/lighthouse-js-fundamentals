//Using Concat Prototype
/*
function concat(arrayOne, arrayTwo){
  let combined = [].concat(arrayOne,arrayTwo);
  return combined; 
}
*/
//Without concat prototype using for loop
function concat(arrayOne, arrayTwo){
  let combined = arrayOne
  for(let i = 0; i < arrayTwo.length; i++){
    combined.push(arrayTwo[i]);
  }
  return combined;
}

console.log(concat([1,2,3], [4,5,6]));
