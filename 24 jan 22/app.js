// function getname(){
//     alert("hello world")
// }


// function getvalue(){
//     var name = document.getElementById('abc').value
//     alert(name)
// }


// function xyz(){
//     var name = document.getElementById('abc')
//     name.innerHTML = 'hello world'
// }


function clr() {
    var name = document.getElementById('abc')
    name.value = ""
}


function getvalue(a) {
    var ok = document.getElementById('abc')
    ok.value += a
    // console.log(a)
}

function result(){
    var name = document.getElementById('abc')
    name.value = eval(name.value)
}











