<template>
  <div class="history">
    <label for="exampleInputEmail1">Bisher gestellte Fragen</label>
    <ul class="list-group">
      <li class="list-group-item" v-for="(q, index) in questions" :key="index">
        <a class="text-info dropdown-toggle" data-toggle="collapse" :href="'#'+q.qnum" aria-expanded="false" :aria-controls="'#'+q.index">
         {{q.question}} 
        </a>
        <div class="collapse" v-bind:id="q.qnum">
          <div class="text-light bg-dark">
            <p class="m-1"> {{q.answer}}</p>
          </div>
       </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "qHistory",
  data() {
    return {
      questions: [
        {
          qnum: 0,
          question: "Frage 1",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          qnum: 1,
          question: "Frage 2",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.history {
  max-height: 560px;
  overflow: auto;
}
</style>

