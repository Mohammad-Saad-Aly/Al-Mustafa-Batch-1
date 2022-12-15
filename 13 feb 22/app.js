  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getDatabase , push , ref } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";  
  const firebaseConfig = {
    apiKey: "AIzaSyADofOAjFNYTE13bOXOh1HyWnj5Nc663sQ",
    authDomain: "smdev-1a411.firebaseapp.com",
    projectId: "smdev-1a411",
    storageBucket: "smdev-1a411.appspot.com",
    messagingSenderId: "408449216930",
    appId: "1:408449216930:web:52cec6ae7397966fb002fb",
    measurementId: "G-HTV91D65XL"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  var db = getDatabase();

//   console.log(db)


// var a = document.getElementById('abc')
// a.addEventListener('click',function(){
//     alert("hello")
// })


var c = document.getElementById('abx')
c.addEventListener('click',function(){
    var a = document.getElementById('emails').value
    var b = document.getElementById('pass').value
    // console.log(a,b)
    var obj = {
        name : a,
        pass : b
    }

    push(ref(db,'users/'),obj)
    alert('data inserted successfully')

})








