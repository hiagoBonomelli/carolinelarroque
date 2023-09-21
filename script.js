// Defina a data de término do contador regressivo
var countDownDate = new Date("December 31, 2023 23:59:59").getTime();

// Atualize o contador a cada segundo
var countdownInterval = setInterval(function() {
    var now = new Date().getTime();

    // Encontre a diferença entre agora e a data de término
    var distance = countDownDate - now;

    // Cálculos de tempo para dias, horas, minutos e segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Se o contador regressivo terminar, escreva algum texto
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "O tempo expirou!";
    }
}, 1000);
