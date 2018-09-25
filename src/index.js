function compareNumeric( a, b ){
  return a - b;
}

module.exports = function solveEquation( equation ) {
  let a, 
    b, 
    c, 
    discriminant, 
    x1, 
    x2, 
    equationWithoutBlanks,
    arrayOfArguments = [],
    solutions = []; 
    
    

  equationWithoutBlanks = equation.replace(/\s+/g, '');
  arrayOfArguments = equationWithoutBlanks;

  arrayOfArguments = arrayOfArguments.split("*x^2");
  a = +arrayOfArguments[0];

  arrayOfArguments = arrayOfArguments[1].split("*x");
  b = +arrayOfArguments[0];
  c = +arrayOfArguments[1];

  discriminant = Math.pow(b,2) - 4 * a * c;
  x1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a) ); 
  x2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));
  solutions.push(x1,x2);

  return solutions.sort(compareNumeric);
}

