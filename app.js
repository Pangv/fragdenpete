(function() {

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
    const dbRefObject = firebase.database().ref().child('questions');

    // Synch object changes
    dbRefObject.on('value', function(snap) {
        return preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

    // Synch list changes
    dbRefObject.on('child_added', function(snap) {
        const li = document.createElement('li');
        li.innerText = snap.key;
        li.id = snap.key;
        listObject.appendChild(li);
    });
    //
    dbRefObject.on('child_changed', function(snap) {
        const liChanged = document.getElementById(snap.key);
        liChanged.innerText = snap.val();
    });
    //
    dbRefObject.on('child_removed', function(snap) {
        const liToRemove = document.getElementById(snap.key);
        liToRemove.remove();
    });

})();

function putQuestion() {
  var usernameRef = document.getElementById('user').value;
  var questionRef = document.getElementById('question').value;

  console.log(usernameRef);
  console.log(questionRef);

  writeQuestionData(usernameRef, questionRef);
}

function writeQuestionData(user, question) {
    firebase.database().ref('questions/' + question).set({question: question, user: user});
}
