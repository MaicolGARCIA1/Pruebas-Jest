
function NumPar(number) {
    return number % 2 === 0;
  }

function elemento(array) {
    return Math.max(...array);
  }

function mayuculas(str) {
    return str.toUpperCase();
  }

function factorial(number) {
    if (number === 0 || number === 1) return 1;
    return number * factorial(number - 1);
  }
  
function determinarSigno(numero) {
    if (numero > 0) {
      return 'positivo';
    } else if (numero < 0) {
      return 'negativo';
    } else {
      return 'cero';
    }
  }

  module.exports = {
    NumPar,
    elemento,
    mayuculas,
    factorial,
    determinarSigno
  }