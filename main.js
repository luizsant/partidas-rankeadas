document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcular").addEventListener("click", () => {
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);
    const resultado = calcularRankeada(vitorias, derrotas);
    document.getElementById("resultado").textContent = resultado;
  });
});

function calcularRankeada(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  // Lógica para determinar o nível
  if (vitorias < 10) nivel = "Ferro";
  else if (vitorias <= 20) nivel = "Bronze";
  else if (vitorias <= 50) nivel = "Prata";
  else if (vitorias <= 80) nivel = "Ouro";
  else if (vitorias <= 90) nivel = "Diamante";
  else if (vitorias <= 100) nivel = "Lendário";
  else nivel = "Imortal";

  return `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
}
