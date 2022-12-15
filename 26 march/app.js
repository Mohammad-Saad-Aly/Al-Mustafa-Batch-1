// localStorage.setItem('name','Saad')
// localStorage.setItem('name1','hassaan')
// localStorage.clear()

// console.log(localStorage.getItem('name'))
// localStorage.clear()

function foo(){
    var a = document.getElementById('emailid').value
    var b = document.getElementById('passid').value
    localStorage.setItem('email',a)
    localStorage.setItem('password',b)
    alert('user sign up successfully')
    window.location.href = 'signin.html'
}


function ghi(){
    var a = document.getElementById('signemail').value
    var b = document.getElementById('signpass').value
    var c = localStorage.getItem('email')
    var d = localStorage.getItem('password')
    if(a == c && b == d){
        alert('user sign in sucessfully')
        location.href = 'welcum.html'
    }
    else{
        alert('chal beta sign up kar k aa')
        window.location.href = 'index.html'
    }
}
    