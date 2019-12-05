<template>
  <div class="playground-item" :class="itemClasses" @click="open">
    <template v-if="isMine">
      <img src="@/assets/bomb.png" alt="" />
    </template>
    <template v-else-if="item.isOpened">
      <span>{{ itemText }}</span>
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
    },
    minesAround: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isMine() {
      return this.item.isMine && this.item.isOpened;
    },
    itemClasses() {
      return {
        opened: this.item.isOpened,
        disabled: this.isGameOver,
        minesArround: this.minesAround
      };
    },
    itemText() {
      return this.minesAround ? "mines close" : "mines far";
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

.playground-item.opened {
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.5) inset;
}

.playground-item.minesArround.opened {
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.5) inset;
}

.disabled {
  background: grey;
}
</style>
