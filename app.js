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
        const div = document.createElement('div');
        //
        div.innerText = snap.key;
        //
        div.id = snap.key;
        listObject.appendChild(div);
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

function toggleContactInput() {
    var x = document.getElementById('mail');
    var y = document.getElementById('tel');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}

function checkContactInput() {
  var mail = document.getElementById('id');
  var tel = document.getElementById('id');

  var activedInput = false;

  if (document.mail.classList.contains('hidden')) {
    activedInput = false;
  }else {
    activedInput = true;
  }


  return activedInput;
}

function putQuestion() {
  var usernameRef = document.getElementById('user').value;
  var questionRef = document.getElementById('question').value;
  var contactRef = document.getElementById('mail').value;

  console.log(usernameRef);
  console.log(questionRef);
  console.log(contactRef);

  //emailjs.send('gmail','template_T3dtImZ2', {name: usernameRef, notes: questionRef});

  writeQuestionData(usernameRef, questionRef, contactRef);
}

function writeQuestionData(user, question, contact) {
    firebase.database().ref('questions/' + question).set({question: question, user: user, contact: contact});
}
