const firebaseConfig = {
    apiKey: "AIzaSyBImGKIMqXICGncBJFX8RvjNymhoYnpNvA",
    authDomain: "forschool-1f15c.firebaseapp.com",
    databaseURL: "https://forschool-1f15c-default-rtdb.firebaseio.com",
    projectId: "forschool-1f15c",
    storageBucket: "forschool-1f15c.appspot.com",
    messagingSenderId: "489354616652",
    appId: "1:489354616652:web:5a87972e7b11cf88ef79e9",
    measurementId: "G-82Y3ELWM4Q"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function check(){
    var name = document.getElementById('Username').value ;
    var password = document.getElementById('Password').value;
     console.log(name);
     console.log(password);
    if(name != '' && password != ''){
      if(name == 'ARKA BHATTACHARYA' && password == 'ARKA@2023'){
        alert('WELCOME ARKA,');
        window.location = 'seacrh.html';
      }else{
        alert('INVALID INFORMATION')
      }
    }else{
        alert('Some Strings Are Missing From Arka Website;');
    }
  
}