function computewindChill() {
    
    var highNum = 90;
    var lowNum = 66;
    var s = 5;
    var t = (highNum + lowNum) / 2; 
    var windchill = 35.74 + (0.6215 * t) - (35.75 * console.log(Math.pow(s, 0.16))) + (0.4275 * t * console.log(Math.pow(s, 0.16));
    
    get("output").innerHTML = windchill + "&degF";
}
