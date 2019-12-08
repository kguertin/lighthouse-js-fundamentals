let num = 100;

for(let i = num; i <= 200; i++){
  if(num  % 3 === 0 && num % 4 === 0){
    console.log('LoopyLighthouse')
  }else if(num % 4 === 0){
    console.log('Lighthouse')
  }else if(num  % 3 === 0){ 
    console.log('Loopy')
  }else{
    console.log(num);
  }

  num++;
}