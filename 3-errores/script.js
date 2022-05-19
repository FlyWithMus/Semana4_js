"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

// const dni = "00000000-A";

const validacionDNI = (dni) => {
  try {
    const dniNum = dni.split("-")[0];
    const dniLet = dni.split("-")[1];
    const resto = dniNum % 23;
    if (typeof dni !== "string" || dni.length !== 10) {
      throw new TypeError("El DNI debe contener 10 caracteres");
    } else if (dni.split("-").length !== 2) {
      throw new TypeError("El DNI debe estar separado por un guión(-)");
    } else if (isNaN(dniNum) || dniNum.length !== 8) {
      throw new TypeError("Los 8 primeros dígitos han de ser números");
    } else if (!isNaN(dniLet) || dniLet.length !== 1) {
      throw new TypeError(
        "El último caracter debe ser único y diferente de un número"
      );
    } else if (dniLet.toUpperCase() !== letras[resto]) {
      throw new TypeError("La letra no se corresponde con el número");
    } else console.log("El DNI es válido");
  } catch (TypeError) {
    console.error(TypeError.message);
  }
};
validacionDNI("52777387-S");

const dnia = "809896";
console.log(+dnia);
