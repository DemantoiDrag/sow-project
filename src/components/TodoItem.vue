<template>
  <div>
    <ul>
      <li>
        <div class="List_title">
          <input
            type="checkbox"
            v-bind:id="'checkbox-' + colorListsItem.id"
            v-model="isOpen"
            style="display: none"
          />
          <label
            v-bind:for="'checkbox-' + colorListsItem.id"
            v-bind:class="{ opened_icon: isOpen }"
          >
            <i class="fas fa-angle-right" />
            <input
              type="checkbox"
              :indeterminate.prop="isIndeterminate"
              @change="mainCheck"
              v-model="isChecked"
            />
            {{ colorListsItem.title }}
          </label>
        </div>
        <ul v-show="isOpen">
          <li
            v-for="(color, index) in colorListsItem.colors"
            :key="color.id"
            class="color_item"
          >
            <span class="Color_title">
              <input
                type="checkbox"
                v-model="color.checked"
                @change="itemClick"
              />
              Item {{ index + 1 }}
            </span>

            <div>
              <input
                type="number"
                v-model="color.count"
                @input="changeValue"
                v-bind:data-id="color.id"
                min="0"
              />
              <input type="color" v-model="color.color" />
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      isChecked: false,
      isIndeterminate: false,
      colors: this.colorListsItem.colors,
    };
  },
  props: {
    colorListsItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeValue(el) {
      if (el.target.value.length > 2) {
        this.colors
          .find((x) => x.id == el.target.getAttribute("data-id").toString())
          .setCount(99);
      }
    },
    mainCheck() {
      this.isIndeterminate = false;
      this.colors.forEach((el) => {
        el.checked = this.isChecked;
      });
    },
    itemClick() {
      if (this.colors.every((item) => item.checked == true)) {
        this.isIndeterminate = false;
        this.isChecked = true;
      } else if (this.colors.every((item) => item.checked == false)) {
        this.isIndeterminate = false;
        this.isChecked = false;
      } else this.isIndeterminate = true;
    },
  },
};
</script>
<style>
ul {
  padding: 0;
  margin: 0 0 10px 0;
}

li {
  list-style-type: none;
}

input[type="color"] {
  appearance: none;
  border: none;
  padding: 0;
  width: 15px;
  height: 15px;
  margin: 0 5px 0;
  vertical-align: middle;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}

input[type="number"] {
  border: none;
  font-size: 1.07rem;
  width: 2em;
  text-align: right;
}

.color_item {
  display: flex;
  justify-content: space-between;
  margin: 0 0 3px 30px;
}

.List_title {
  font-family: "Enriqueta", arial, serif;
  line-height: 1.25;
  margin: 0 0 10px;
  font-size: 1.2rem;
  font-weight: 400;
}

.opened_icon svg {
  transform: rotate(90deg);
}
</style>
