<template>
  <div class="row">
    <div class="col-xs-12 col-sm-7">
      <q-form :greeting="greeting" v-on:addQuestion="addQuestion"/>
      <section>
        <h4>Anleitung</h4>
        <p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto corporis et accusamus minima ut, maiores magni? Sit cupiditate sequi, dicta sed placeat doloribus accusantium, id harum voluptatibus excepturi expedita.</span>
          <span>Dolor in fuga autem odio magni nobis quis tempore suscipit repellendus earum, nisi ea aliquam quidem reiciendis nulla, animi blanditiis maiores amet. Ab mollitia maiores sit! Architecto asperiores maiores debitis!</span>
          <span>Similique, tenetur iusto nulla numquam laborum expedita? Sit voluptas iure error atque harum quod facilis tempore impedit, iusto voluptates, blanditiis aliquid modi quia illum et perferendis nulla odio. Labore, incidunt!</span>
        </p>
      </section>
    </div>
    <div class="col-xs-12 col-sm-5">
      <q-history/>
    </div>
  </div>
</template>

<script>
import qHistory from "./History";
import qForm from "./QForm";

export default {
  name: "home",
  props: {
    greeting: String
  },
  components: { qHistory, qForm },
  data() {
    return {};
  },
  methods: {
    addQuestion: function() {
      this.$emit("addQuestion");
      this.$on(
        "Hello",
        function() {
          this.$emit("Hello");
        },
        10000
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
