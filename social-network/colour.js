<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Интересная кнопка</title>
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  </style>
</head>
<body>

<button id="colorButton" onclick="changeColor()">Изменить цвет</button>

<script>
  function changeColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('colorButton').style.backgroundColor = randomColor;
  }
</script>

</body>
</html>
