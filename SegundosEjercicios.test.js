const { NumPar, elemento, mayuculas, factorial, determinarSigno } = require('./SegundosEjercicios.js');

describe('conjunto de funciones', () => {


test('Verificar si un número es par', () => {
    expect(NumPar(4)).toBe(true);
    expect(NumPar(7)).toBe(false);
  });

test('Encuentra el elemento más grande en un array', () => {
    expect(elemento([1, 5, 3, 9, 2])).toBe(9);
  });

test('Convertir una cadena a mayúsculas', () => {
    expect(mayuculas('hola')).toBe('HOLA');
  });

test('Calcular el factorial de un número', () => {
    expect(factorial(5)).toBe(120);
  });

test('Determina el signo de un número', () => {
    expect(determinarSigno(5)).toBe('positivo'); 
    expect(determinarSigno(-2)).toBe('negativo'); 
    expect(determinarSigno(0)).toBe('cero'); 
  });
});