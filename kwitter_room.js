
//ADD YOUR FIREBASE LINKS HERE


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyB6DYRTJT0_T-FR2i_CKQVicl89JsZABDw",
      authDomain: "kwitter2-1cbda.firebaseapp.com",
      databaseURL: "https://kwitter2-1cbda-default-rtdb.firebaseio.com",
      projectId: "kwitter2-1cbda",
      storageBucket: "kwitter2-1cbda.appspot.com",
      messagingSenderId: "678956547154",
      appId: "1:678956547154:web:bafd780960c2d29e7ab38b",
      measurementId: "G-128Y7KK775"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    function addroom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
 
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
