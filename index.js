<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>CP Webdev</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
    }
    label {
      display: block;
      margin: 10px 0 5px;
    }
    input[type="time"] {
      padding: 5px;
      font-size: 1em;
    }
    button {
      margin-top: 15px;
      padding: 10px 15px;
      font-size: 1em;
      cursor: pointer;
    }
    #resultado {
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
    <h1>Webdev CP01 - Ex01</h1>

  <h2>Calcular  tempo de duração de reunião</h2>

  <label for="inicio">Horário de Início:</label>
  <input type="time" id="inicio" required>

  <label for="fim">Horário de Término:</label>
  <input type="time" id="fim" required>

  <button onclick="calcularDuracao()">Calcular Duração</button>

  <div id="resultado"></div>
  
 <script src="./main.js"></script>
</body>
</html>
