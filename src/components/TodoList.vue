<template>
  <div>
    <TodoItem
      v-for="colorListsItem in itemList"
      :key="colorListsItem.id"
      v-bind:colorListsItem="colorListsItem"
    />
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["itemList"],
  components: {
    TodoItem,
  },
};
</script>
<style></style>
