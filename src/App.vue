<template>
  <div id="app">
    <Score />
    <PlayGround />
    <GameOverModal @onPlayAgain="initGame" v-if="isGameOver" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Score from "@/components/Score";
import PlayGround from "@/components/PlayGround/PlayGround";
import GameOverModal from "@/components/GameOverModal";

export default {
  name: "app",
  components: {
    Score,
    PlayGround,
    GameOverModal
  },
  computed: {
    ...mapState("minerStore", ["isGameOver"])
  },
  methods: {
    ...mapActions(["initGame"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 900px;
  margin: 15px auto;
}
</style>
