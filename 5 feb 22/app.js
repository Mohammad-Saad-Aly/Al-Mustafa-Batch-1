// setinterval()   // loop chalta he rahega
// settimeout()    // 1 martaba khatam
// clearinterval()    // bana he setinterval kop khatam karne k lye


// setInterval(function(){
//     console.log("function chal raha he")
// },1000)

// setInterval(timer,1000)
// function timer(){
//     document.write("function chal raha he")
// }

// setTimeout(function(){
//     document.write("hello")
// },5000)
// var a = 0;
// var iii;
// iii = setInterval(timer, 1000)
// function timer() {
//     a++
//     console.log(a)
//     if(a == 2){
//         clearInterval(iii)
//     }
// }


var msec = 0;
var sec = 0;
var min = 0;
var a = document.getElementById('msec');
var b = document.getElementById('sec');
var c = document.getElementById('min');
var interval;


function foo() {

    interval = setInterval(function () {
        msec++
        a.innerHTML = msec
        if (msec >= 100) {
            sec++
            b.innerHTML = sec
            msec = 0
        }
        else if (sec >= 10) {
            min++
            c.innerHTML = min
            sec = 0
        }
    }, 10)

    var k = document.getElementById('hhh').disabled = true

}

function pause() {
    clearInterval(interval)
    var r = document.getElementById('hhh').disabled = false
}

function reset() {
    msec = 0
    sec = 0
    min = 0
    a.innerHTML = 0
    b.innerHTML = 0
    c.innerHTML = 0
}

























