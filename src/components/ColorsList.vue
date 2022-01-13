<template>
  <div>
    <div v-for="item in itemList" :key="item.id" class="colors_item">
      <div class="title">{{ item.title }}</div>
      <ColorsItem
        v-for="colorsList in item.colors"
        :key="colorsList.id"
        v-bind:colorsList="colorsList"
      />
    </div>
  </div>
</template>
<script>
import ColorsItem from "@/components/ColorsItem";
export default {
  props: ["itemList"],
  components: {
    ColorsItem,
  },
};
</script>
<style>
.title {
  font-family: "Enriqueta", arial, serif;
  line-height: 1.25;
  margin: 0 0 10px;
  font-size: 1.16rem;
  font-weight: 400;
}
.colors_item {
  border: 1px solid;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
