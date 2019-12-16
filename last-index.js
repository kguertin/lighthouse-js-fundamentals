function lastIndexOf(array, n){
  let position;

  for(let i = array.length - 1; i >= 0; i--){
    if(array[i] === n){
      position = i;
      break;
    }
  }

  if(position === undefined){
    return -1;
  }else{
    return position;
  }

}