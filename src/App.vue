<template>
  <div id="app">
    <header class="navbar navbar-light bg-light">
      <a href="#0" class="navbar-brand">Frag den Pete</a>
    </header>
    <main class="container-fluid">
      <router-view v-on:addQuestion="addQuestion" :greeting="msg"></router-view>
    </main>
    <footer class="fixed-bottom">
      <pre>{{ test }}</pre>
      <div class="navbar navbar-light">
      <ul class="nav">
        <li class="nav-item bg-dark"><a class="nav-link text-white" href="#0">1. Link</a></li>
        <li class="nav-item bg-dark"><a class="nav-link text-white" href="#0">2. Link</a></li>
        <li class="nav-item bg-dark"><a class="nav-link text-white" href="#0">3. Link</a></li>
      </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import Firebase from "firebase";
// Initialize Firebase
let config = {
  apiKey: "AIzaSyCwj11nznprbUe6xwJbVYdU0c_b0gq-Ym8",
  authDomain: "fragedenpete.firebaseapp.com",
  databaseURL: "https://fragedenpete.firebaseio.com",
  projectId: "fragedenpete",
  storageBucket: "fragedenpete.appspot.com",
  messagingSenderId: "193018594689"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let questionsRef = db.ref("firebase");

export default {
  name: "app",
  firebase: {
    questions: questionsRef
  },
  data() {
    return {
      msg: "Frag den Pete",
      newQuestions: {
        title: "",
        answer: "",
        callback: "email"
      },
      test: 0
    };
  },
  methods: {
    addQuestion: function() {
      this.test += 1;
      this.$emit("Hello");
    }
  }
};
</script>

<style lang="scss">
  body {
    margin: 0;
    margin-bottom: 2rem;
    font-family: 'Firacode', sans-serif;
  }

</style>
