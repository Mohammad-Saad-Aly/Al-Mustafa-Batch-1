// var count = 0;
// var interval = setInterval(timer, 1000)

// function timer() {
//     count++
//     console.log(count)

//     if (count == 2) {
//         clearInterval(interval)
//     }
// }

// setTimeout(function(){
//     console.log("hassaan")
// },3000)

// var a = document.getElementsByTagName('p')
// var b = a[0].hasAttribute('class')
// console.log(b)
// var b = a[0].getAttribute('class')
// console.log(b)

// var a = document.getElementsByTagName('p')
// var b = a[1].setAttribute('id','abc')


// function addmessage(){
// var a = document.getElementById('abc')
// var b = document.getElementById('xyz')
// b.innerHTML += a.value
// console.log(a.value)
// }


// var a = document.createElement('p')
// console.log(a)

// var b =  document.createTextNode('hello world')
// // console.log(b)

// a.appendChild(b)

function addtodo() {
    var a = document.getElementById('xyz')
    var b = document.getElementById('abc')
    var c = document.createElement('li')
    b.appendChild(c)
    var d = document.createTextNode(a.value)
    c.appendChild(d)
    var k = document.createElement('button')
    var j = document.createTextNode('delete')
    k.appendChild(j)
    c.appendChild(k)
    k.setAttribute('onclick', 'timer(this)')
    a.value = ""
}

function timer(e) {
    e.parentNode.remove()
}

function deleteall(){
    var r = document.getElementById('abc').innerHTML = ""
}






































