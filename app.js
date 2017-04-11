(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCwj11nznprbUe6xwJbVYdU0c_b0gq-Ym8",
    authDomain: "fragedenpete.firebaseapp.com",
    databaseURL: "https://fragedenpete.firebaseio.com",
    projectId: "fragedenpete",
    storageBucket: "fragedenpete.appspot.com",
    messagingSenderId: "193018594689"
  };
  firebase.initializeApp(config);

  const preObject = document.getElementById('object');
  const listObject = document.getElementById('list');
  const dbRefObject = firebase.database().ref().child('frage');

  // Synch object changes
  dbRefObject.on('value', function (snap) {
    return preObject.innerText = JSON.stringify(snap.val(), 3);
  });

  // Synch list changes
  dbRefObject.on('child_added', function () {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);
  });

  

})();
