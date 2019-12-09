function calculateRectangleArea(length,width){
  let area;

  if(length >= 0 && width >= 0){
    area = length * width;
  }

  return area;
}

function calculateTriangleArea(base, height){
  let area;

  if(base >= 0 && height > 0){
    area = (base * height) / 2;
  }

  return area;
}

function calculateCircleArea(radius){
  let area

  if(radius >= 0){
    area = Math.PI * (radius * radius);
  }

  return area;
}

console.log(calculateRectangleArea(10,10));
console.log(calculateRectangleArea(5,5));

console.log(calculateTriangleArea(10, 10));
console.log(calculateTriangleArea(5, 4));

console.log(calculateCircleArea(5));
console.log(calculateCircleArea(10));



