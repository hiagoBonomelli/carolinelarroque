<!DOCTYPE html>
<html>
<head>
    <title>Senha Protegida</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Por favor, insira a senha:</h1>
        <input type="password" id="password" placeholder="Senha">
        <button onclick="checkPassword()">Entrar</button>
    </div>
    <script>
        function checkPassword() {
            var password = document.getElementById("password").value;
            if (password === "senha123") { // Substitua 'senha123' com a senha que você escolheu.
                window.location.href = "protected.html";
            } else {
                alert("Senha incorreta!");
            }
        }
    </script>
</body>
</html>