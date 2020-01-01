function merge(array1, array2){
  let newArray = array1.concat(array2);

  newArray.sort(function(a,b){
    return a - b;
  })

  return newArray
}

console.log(sortArrays([5,2],[7, 1, 4, 8, 3,4]));
