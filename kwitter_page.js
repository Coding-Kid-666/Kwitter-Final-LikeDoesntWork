//YOUR FIREBASE LINKS
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

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("username");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                purpose:"When send clicked"
          })
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         myName = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         //All code of C-97
         name_with_tag = "<h4>" + myName + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + '</h4>';
         like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + " onclick='likesPlus(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
         //C-97 code end
      } });  }); }
getData();

//C-97 Code 2 
function likesPlus(message_id){
      console.log("like")
      console.log("like has been clicked" + message_id);
      button_id = message_id;
      number_of_likes = document.getElementById(button_id).value;
      updatedLikes = Number(number_of_likes) + 1;
      console.log(updatedLikes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updatedLikes
      });
}
//C-97 Code end

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}