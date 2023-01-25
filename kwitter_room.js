var firebaseConfig = {
      apiKey: "AIzaSyDVAROa83KUsmmfCQYC7AugpRfQ5KcdxBU",
      authDomain: "kwitter-6329e.firebaseapp.com",
      databaseURL: "https://kwitter-6329e-default-rtdb.firebaseio.com",
      projectId: "kwitter-6329e",
      storageBucket: "kwitter-6329e.appspot.com",
      messagingSenderId: "514539795203",
      appId: "1:514539795203:web:8d92938cf9e6dcbc75af36",
      measurementId: "G-XBB54QT383"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
      {
          room_name = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}