<template>
  <div class="overlay">
    <div class="gameover-modal">
      <h3 class="gameover-modal__title">Game Over. Do You want play again?</h3>
      <button class="gameover-modal__btn" @click="onClick">Play</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameOverModal",
  methods: {
    onClick() {
      this.$emit("onPlayAgain");
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.gameover-modal {
  max-width: 400px;
  width: 100%;
  background: #fff;
  padding: 10px 20px;
  text-align: center;
}
.gameover-modal__btn {
  background: #fff;
  border: none;
  padding: 5px 15px;
  font-size: 18px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 3px;
}
</style>
