<template>
  <div class="history">
    <label for="exampleInputEmail1">Bisher gestellte Fragen</label>
    <ul class="list-group">
      <li class="list-group-item" v-for="(q, index) in questionRef" :key="index">
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
  props: {
    reference: Array
  },
  data() {
    return {
      questionRef: this.reference
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

