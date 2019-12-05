<template>
  <div class="playground" :style="gridStyles">
    <template v-for="item in items">
      <PlayGroundItem
        :key="item.id"
        :item="item"
        @openItem="openItem"
        :is-game-over="isGameOver"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import PlayGroundItem from "./PlayGroundItem";

export default {
  name: "PlayGround",
  components: {
    PlayGroundItem
  },
  computed: {
    ...mapGetters("minerStore", ["items", "counts"]),
    ...mapState("minerStore", ["columnCounts", "rowCounts", "isGameOver"]),
    gridStyles() {
      return {
        gridTemplateColumns: `repeat(${this.columnCounts}, minmax(100px, 1fr))`
      };
    }
  },
  methods: {
    ...mapActions("minerStore", ["openItem"])
  }
};
</script>

<style scoped>
.playground {
  margin-top: 15px;
  display: grid;
  grid-gap: 10px;
}
</style>
