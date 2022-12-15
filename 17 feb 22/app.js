import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { push, child, getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCfveiOT-SPUhbgwLxtVZ5oUT34OmAvg1w",
    authDomain: "practice-35626.firebaseapp.com",
    databaseURL: "https://practice-35626-default-rtdb.firebaseio.com",
    projectId: "practice-35626",
    storageBucket: "practice-35626.appspot.com",
    messagingSenderId: "1003419406151",
    appId: "1:1003419406151:web:3bb91209311df712774662",
    measurementId: "G-REKZR64LNQ"
};

const app = initializeApp(firebaseConfig);
var db = getDatabase()

var a = document.getElementById('fff')
a.addEventListener('click', function () {
    var e = document.getElementById('abc')
    var d = document.getElementById('def')
    var obj = {
        email: e.value,
        pass: d.value
    }
    push(ref(db, 'users/'), obj)

})

var h = document.getElementById('getData')
h.addEventListener('click', function () {
    onValue(ref(db, 'users'), function (data) {
        console.log(data.val())
    })
})

var z = document.getElementById('editData')
z.addEventListener('click', function () {
    var e = document.getElementById('abc')
    var d = document.getElementById('def')
    var obj = {
        email: e.value,
        pass: d.value
    }
    set(ref(db,'users/-Mw6leJ5CHqZelVoVlyA'),obj)
})




