<template>
  <div class="score">
    <span class="score__text">Your Total Score:</span>
    <span class="score__total">{{ score }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Score",
  computed: {
    ...mapState("minerStore", ["score"])
  }
};
</script>

<style scoped>
.score {
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid black;
}
.score__text {
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}
.score__total {
  font-size: 20px;
}
</style>
