import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, remove, push, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBgqb_LGF0lBUrY2ehO1FYIQhlNsCtC1Ws",
    authDomain: "sm-dev-a0030.firebaseapp.com",
    projectId: "sm-dev-a0030",
    storageBucket: "sm-dev-a0030.appspot.com",
    messagingSenderId: "351709523832",
    appId: "1:351709523832:web:cf0d9ee07f7ba27b0d628d",
    measurementId: "G-CP5WF3FD1L"
};

var app = initializeApp(firebaseConfig);
var db = getDatabase();


// var a = document.getElementById('bts')
// a.addEventListener('click', function () {
//     var c = document.getElementById('email')
//     var b = document.getElementById('pass')
//     var obj = {
//         email: c.value,
//         pass: b.value
//     }
//     push(ref(db, 'users/'), obj)
// })


// var b = document.getElementById('gdata')
// b.addEventListener('click', function () {
//     onValue(ref(db, 'users'), function (data) {
//         console.log(data.val())
//         // for(var key in data.val()){
//         //     document.write(key)
//         // }
//     })
// })


// var h = document.getElementById('del')
// h.addEventListener('click', function () {
//     remove(ref(db,'users/-MwHFSoppsA3DUcdqdf3'))
// })


// var j = document.getElementById('delall')
// j.addEventListener('click', function () {
//     remove(ref(db,'users'))
// })


var f = document.getElementById('kis')
f.addEventListener('click', function () {
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
})




var m = document.getElementById('kisses')
m.addEventListener('click', function () {
    var email = document.getElementById('semail').value
    var password = document.getElementById('spass').value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.password)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage,errorCode)
        });

})