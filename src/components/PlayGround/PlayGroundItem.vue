<template>
  <div class="playground-item" :class="itemClasses" @click="open">
    <template v-if="isMine">
      <img src="@/assets/bomb.png" alt="" />
    </template>
    <template v-else-if="item.isOpened">
      <span>Empty</span>
    </template>
  </div>
</template>

<script>
import Item from "@/store/models/Item";

export default {
  name: "PlayGroundItem",
  props: {
    item: {
      type: Item,
      required: true
    },
    isGameOver: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isMine() {
      return this.item.isMine && this.item.isOpened;
    },
    itemClasses() {
      return { opened: this.item.isOpened, disabled: this.isGameOver };
    }
  },
  methods: {
    open() {
      if (this.item.isOpened || this.isGameOver) return;
      this.$emit("openItem", this.item.id);
    }
  }
};
</script>

<style scoped>
.playground-item {
  height: 100px;
  width: 100px;
  margin: auto;
  background: lightblue;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.playground-item img {
  max-width: 70%;
}

.disabled {
  background: grey;
}
</style>
