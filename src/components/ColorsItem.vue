<template>
  <div>
    <ul>
      <div
        v-for="n in colorsList.count"
        :key="n"
        class="color"
        v-bind:style="{ 'background-color': colorsList.color }"
        @click="colorsList.reduceCount"
        v-show="colorsList.checked"
      ></div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colorCount: this.colorsList.count,
    };
  },
  props: {
    colorsList: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.color {
  width: 15px;
  height: 15px;
  display: inline-flex;
  margin: 0 1px 0;
}
</style>
