
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA6CkfQYm4H5Pn0E2ZB82kJnrLUD-LWyrc",
  authDomain: "kwitter-webapp-d4c4c.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-d4c4c-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-d4c4c",
  storageBucket: "kwitter-webapp-d4c4c.appspot.com",
  messagingSenderId: "236897556450",
  appId: "1:236897556450:web:5e72040c4a16cacdf18bbb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    var user = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome, " + user + "!";

function addRoom(){
  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}
function log_out(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
