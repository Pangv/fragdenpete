<template>
<form>
        <div class="form-group">
           <label for="exampleInputEmail1">Deine Frage</label>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Wie funktioniert das Internet?" aria-label="Search for...">
          <span class="input-group-btn">
            <button class="btn btn-secondary" type="button" @click="addQuestion">Den Pete fragen!</button>
          </span>
        </div>
        </div>
    <h4>Antwort als: </h4>
    <div class="form-check">
      <label class="form-check-label">
        <input v-model="byMail" value="email" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1">
        Mail
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input v-model="byMail" value="telefon" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2">
        Rückruf
      </label>
      {{ greeting }}
    </div>
    <div class="input-group" v-if="byMail == 'email'" key="email-input">
      <span class="input-group-addon" id="basic-addon1"><i class="material-icons">contact_mail</i></span>
      <input type="text" class="form-control" placeholder="E-Mail Adresse" aria-label="E-Mail Adresse" aria-describedby="basic-addon1">
    </div>
    <div class="input-group" v-if="byMail == 'telefon'" key="telefon-input">
      <span class="input-group-addon" id="basic-addon1"><i class="material-icons">contact_phone</i></span>
      <input type="text" class="form-control" placeholder="Telefonnummer" aria-label="Telefonnummer" aria-describedby="basic-addon1">
    </div>
    </form>  
</template>


<script>
export default {
  name: "qForm",
  props: {
    greeting: String
  },
  data() {
    return {
      byMail: "email"
    };
  },
  methods: {
    addQuestion: function() {
      this.$emit("addQuestion");
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
