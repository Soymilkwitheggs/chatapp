
var firebaseConfig = {
      apiKey: "AIzaSyCJ0HTpq9-9IzowLSthoGKGiH_4xOcYJmg",
      authDomain: "c931-1b6c6.firebaseapp.com",
      databaseURL: "https://c931-1b6c6-default-rtdb.firebaseio.com",
      projectId: "c931-1b6c6",
      storageBucket: "c931-1b6c6.appspot.com",
      messagingSenderId: "30288049725",
      appId: "1:30288049725:web:eed20fefa77a4f2f851c54"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "welcome "+user_name+"i";

function add_room() {
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname",room_name);

      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
