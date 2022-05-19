"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];
const combinaciones = [];

for (let a = 0; a < catalogo.length; a++) {
  for (let i = a + 1; i < catalogo.length; i++) {
    combinaciones.push(catalogo[a] + " y " + catalogo[i]);
  }
}
console.log(combinaciones);
