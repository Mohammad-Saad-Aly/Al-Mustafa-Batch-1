function addtodo() {
    var a = document.getElementById('gettodo')
    var b = document.getElementById('abc')
    var c = document.createElement('li')
    c.setAttribute('class','list-group-item')
    var d = document.createTextNode(a.value+" ")
    c.appendChild(d)
    b.appendChild(c)
    var e = document.createElement('button')
    var f = document.createTextNode('Delete ')
    e.setAttribute('class','btn btn-success')
    e.appendChild(f)
    c.appendChild(e)
    e.setAttribute('onclick', 'deletee(this)')
    a.value = ""
    var z = document.createElement('button')
    var k = document.createTextNode('Edit')
    z.appendChild(k)
    z.setAttribute('class','btn btn-info')
    c.appendChild(z)
    z.setAttribute('onclick','edittodo(this)')
}
function deletee(e) {
    e.parentNode.remove()
}

function deltodo() {
    document.getElementById('abc').innerHTML = ""
}

function edittodo(e){
    
    var a = prompt('enter updated value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}