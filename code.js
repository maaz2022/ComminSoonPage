var countDownDate = new Date("July 30, 2024 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    console.log("Distance: ", distance);  // Log distance

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    console.log("Days: ", days);  // Log days

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log("Hours: ", hours);  // Log hours

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    console.log("Minutes: ", minutes);  // Log minutes

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log("Seconds: ", seconds);  // Log seconds

    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Days").innerHTML = "00";
        document.getElementById("Hours").innerHTML = "00";
        document.getElementById("Minutes").innerHTML = "00";
        document.getElementById("Seconds").innerHTML = "00";
    }

}, 1000);
