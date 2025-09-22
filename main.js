function calcularDuracao() {
  const inicio = document.getElementById('inicio').value;
  const fim = document.getElementById('fim').value;
  const resultado = document.getElementById('resultado');

  if (!inicio || !fim) {
    resultado.textContent = "Por favor, insira os dois horários.";
    return;
  }

  // Converte os horários para minutos
  const [horaInicio, minutoInicio] = inicio.split(':').map(Number);
  const [horaFim, minutoFim] = fim.split(':').map(Number);

  let minutosInicio = horaInicio * 60 + minutoInicio;
  let minutosFim = horaFim * 60 + minutoFim;

  // Considera a virada de dia
  if (minutosFim < minutosInicio) {
    minutosFim += 24 * 60;
  }

  const duracaoMinutos = minutosFim - minutosInicio;
  const horas = Math.floor(duracaoMinutos / 60);
  const minutos = duracaoMinutos % 60;

  // Formata com zero à esquerda
  const horasFormatadas = String(horas).padStart(2, '0');
  const minutosFormatados = String(minutos).padStart(2, '0');

  resultado.textContent = `Duração da reunião: ${horasFormatadas} hora(s) e ${minutosFormatados} minuto(s).`;
}
