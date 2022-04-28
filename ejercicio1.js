var casas = [1, 1, 1, 0, 1, 1, 1, 1];
var dias = 2;

function calcularEstadoCeldas(casas, dias) {
  var salida = [];
  if (dias === 0) return casas;

  for (let i = 0; i < casas.length; i++) {
    salida[i] = (casas[i - 1] || 0) === (casas[i + 1] || 0) ? 0 : 1;
  }

  return calcularEstadoCeldas(salida, dias - 1);
}

console.log(calcularEstadoCeldas(casas, dias));

console.log(calcularEstadoCeldas(casa, dias));
