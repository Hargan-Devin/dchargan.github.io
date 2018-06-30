function computewindChill() {
    var t = (90 + 66) / 2;
    var power = Math.pow(5, 0.16);
    var u = 0.4275 * t;
    
    var a = 35.74;
    var b = 0.6215 * t;
    var c = 35.75 * power;
    var d = u * power;
    
    var f1 = a + b - c + d;
    var f2 = Math.round(f1 * 100) / 100;
    
    document.getElementById("output").innerHTML = "The wind chill is " + f2 + " ºF"
    
    return f2;
}

