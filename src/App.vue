<template>
  <main>
    <TodoList v-bind:itemList="itemList" class="left_block" />
    <ColorsList v-bind:itemList="itemList" class="right_block" />
  </main>
</template>

<script>
import ColorsList from "@/components/ColorsList";
import TodoList from "@/components/TodoList";
import ColorClass from "@/components/classes/ColorClass.js";
export default {
  name: "App",
  components: {
    TodoList,
    ColorsList,
  },
  data() {
    return {
      itemList: [
        {
          id: 0,
          title: "List 1",
          colors: [new ColorClass("#FF0000", 4), new ColorClass("#0CFF00", 6)],
        },
        {
          id: 1,
          title: "List 2",
          colors: [new ColorClass("#004DFF", 3), new ColorClass("#FF00E0", 5)],
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  display: flex;
  justify-content: space-around;
  border: 1px solid;
  padding: 15px;
  min-height: 500px;
  margin: 35px;
}

.left_block,
.right_block {
  text-align: left;
  width: fill-available;
  border: 1px solid;
  padding: 25px;
  margin: 15px;
}
</style>
