"use strict";

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

const formatTimeText = (num, text) => {
  if (num === 1) {
    return `${num} ${text}`;
  } else {
    return `${num} ${text}s`;
  }
};
const intervalProgram = setInterval(() => {
  seconds += 5;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  if (hours === 24) {
    hours = 0;
    days += 1;
  }

  console.log(
    `Han pasado ${formatTimeText(days, "día")}, ${formatTimeText(
      hours,
      "hora"
    )}, ${formatTimeText(minutes, "minuto")}, y ${formatTimeText(
      seconds,
      "segundo"
    )}.`
  );
}, 5000);

const stopTimer = (number, unit) => {
  let delayMs;
  if (unit === "S") {
    delayMs = number * 1000;
  } else if (unit === "M") {
    delayMs = number * 60 * 1000;
  } else if (unit === "H") {
    delayMs = number * 60 * 60 * 1000;
  } else if (unit === "D") {
    delayMs = number * 24 * 60 * 60 * 1000;
  }
  console.log(`El timer se parará en ${delayMs} milisegundos`);
  setTimeout(() => {
    clearInterval(intervalProgram);
    console.log(`Se paró el Timer`);
  }, delayMs);
};

stopTimer(15, "M");
