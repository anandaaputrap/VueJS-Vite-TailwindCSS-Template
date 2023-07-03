<template>
  <div class="flex items-center">
    <input type="checkbox" v-model="isChecked" class="hidden" />
    <label
      @click="toggleCheckbox"
      :class="{ 'text-yellow-500': isChecked }"
      class="cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 fill-current"
        viewBox="0 0 20 20"
      >
        <path
          v-if="isChecked"
          d="M10 0l2.5 6.5H20l-5 3.5L15 17l-5-3.5L5 17l1.5-7L0 6.5h7.5L10 0z"
        />
        <path
          v-else
          d="M10 0l2.5 6.5H20l-5 3.5L15 17l-5-3.5L5 17l1.5-7L0 6.5h7.5L10 0z"
          opacity=".4"
        />
      </svg>
    </label>
    <span class="ml-2">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "StarCheckbox",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isChecked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    toggleCheckbox() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
