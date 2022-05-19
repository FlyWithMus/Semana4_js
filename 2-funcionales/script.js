"use strict";
//REVISAR
// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

//Array modificado con puntuaciones totales de cada equipo
const puntuacionesConPuntosSumados = puntuaciones.map((puntuacionEquipo) => {
  const sumaDePuntos = puntuacionEquipo.puntos.reduce((previousValue, n) => {
    return previousValue + n;
  }, 0);
  return { equipo: puntuacionEquipo.equipo, puntos: sumaDePuntos }; //revisarlo
});

console.log(puntuacionesConPuntosSumados);

//Array con sólo las puntuaciones
const arrayPuntos = [];
for (let i = 0; i < puntuaciones.length; i++) {
  arrayPuntos.push(puntuaciones[i].puntos);
}

//Orden de puntuaciones
const ordenDeMayorAMenor = arrayPuntos.sort((a, b) => {
  return b - a;
});

console.log(arrayPuntos);

//Puntos máximos y mínimos (el primero y el último del array según orden de Mayor a menor)
const puntosGanador = arrayPuntos[0];
const puntosUltimo = arrayPuntos[arrayPuntos.length - 1];

//Nombre de los equipos con más y menos puntos
const equipoGanador = puntuaciones.filter((equipo) => {
  return equipo.puntos === puntosGanador;
});

const equipoUltimo = puntuaciones.filter((equipo) => {
  return equipo.puntos === puntosUltimo;
});

console.log(equipoGanador);
console.log(equipoUltimo);
