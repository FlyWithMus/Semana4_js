"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) =>
  setTimeout(
    () => resolve(Math.round(Math.random() * 100)),
    Math.random() * 1000
  )
);

const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(`${age} es menor`);
    } else if (age % 2 === 0) {
      setTimeout(() => {
        resolve(`${age} es par`);
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(`${age} es impar`);
      }, 2000);
    }
  });
};

agePromise.then((age) => {
  checkAge(age)
    .then((message) => {
      console.log(message);
    })
    .catch((errorMessage) => {
      console.error(`Error: ${errorMessage}`);
    });
});
