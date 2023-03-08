const soma = document.getElementById('soma');
const subAmenosB = document.getElementById('subAmenosB');
const subBmenosA = document.getElementById('subBmenosA');
const multiplicacao = document.getElementById('multiplicacao');
const divAporB = document.getElementById('divAporB');
const divBporA = document.getElementById('divBporA');
const pwrAbaseB = document.getElementById('pwrAbaseB');
const pwrBbaseA = document.getElementById('pwrBbaseA');
const raizQuadrA = document.getElementById('raizQuadrA');
const raizQuadrB = document.getElementById('raizQuadrB');
const fatorialA = document.getElementById('fatorialA');
const fatorialB = document.getElementById('fatorialB');
const percArelatB = document.getElementById('percArelatB');
const percBrelatA = document.getElementById('percBrelatA');
const media = document.getElementById('media');

soma.innerHTML = 0;
subAmenosB.innerHTML = 0;
subBmenosA.innerHTML = 0;
multiplicacao.innerHTML = 0;
divAporB.innerHTML = 0;
divBporA.innerHTML = 0;
pwrAbaseB.innerHTML = 0;
pwrBbaseA.innerHTML = 0;
raizQuadrA.innerHTML = 0;
raizQuadrB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
percArelatB.innerHTML = 0;
percBrelatA.innerHTML = 0;
media.innerHTML = 0;

function calcular() {
  const inputA = document.getElementById('numA').value;
  const inputB = document.getElementById('numB').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calcSoma(a, b);
  subAmenosB.innerHTML = calcSubAmenosB(a, b);
  subBmenosA.innerHTML = calcSubBmenosA(a, b);
  multiplicacao.innerHTML = calcMultiplicacao(a, b);
  divAporB.innerHTML = calcDivAporB(a, b);
  divBporA.innerHTML = calcDivBporA(a, b);
  pwrAbaseB.innerHTML = calcPwrBelevA(a, b);
  pwrBbaseA.innerHTML = calcPwrAelevB(a, b);
  raizQuadrA.innerHTML = calcRaizQuadrA(a, b);
  raizQuadrB.innerHTML = calcRaizQuadrB(a, b);
  fatorialA.innerHTML = calcFatorialA(a, b);
  fatorialB.innerHTML = calcFatorialB(a, b);
  percArelatB.innerHTML = calcPercArelatB(a, b);
  percBrelatA.innerHTML = calcPercBrelatA(a, b);
  media.innerHTML = calcMedia(a, b);
}

function calcSoma(a, b) {
  return a + b;
}

function calcSubAmenosB(a, b) {
  return a - b;
}

function calcSubBmenosA(a, b) {
  return b - a;
}
function calcMultiplicacao(a, b) {
  return b * a;
}

function calcDivAporB(a, b) {
  return a / b;
}

function calcDivBporA(a, b) {
  return b / a;
}

function calcPwrAelevB(a, b) {
  return Math.pow(a, b).toFixed(2);
}

function calcPwrBelevA(a, b) {
  return Math.pow(b, a).toFixed(2);
}

function calcRaizQuadrA(a, b) {
  return Math.sqrt(a).toFixed(2);
}

function calcRaizQuadrB(a, b) {
  return Math.sqrt(b).toFixed(2);
}

function calcFatorialA(a) {
  var fatorial = a;
  var resultado = fatorial;
  for (var i = 1; i < fatorial; i++) {
    resultado *= i;
  }
  return resultado;
}

function calcFatorialB(b) {
  var fatorial = b;
  var resultado = fatorial;
  for (var i = 1; i < fatorial; i++) {
    resultado *= i;
  }
  return resultado;
}

function calcPercBrelatA(a, b) {
  var x = 0;
  var y = 0;
  resultado = 0;
  x = a;
  y = b;
  resultado = (b * 100) / a;
}

function calcPercArelatB(a, b) {
  return b * (a / 100);
}

function calcMedia(a, b) {
  return (a + b) / 2;
}
