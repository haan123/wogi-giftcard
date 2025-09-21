<template>
  <div class="c-tag-group flex gap-2">
    <CTag
      v-for="(option, i) in computedOptions"
      :key="option.value"
      v-model="option.active"
      :class="[option.class]"
      :label="option.label"
      :color="color"
      class="cursor-pointer"
      @click="onClick(option, i)"
    />

    <slot name="append" />
  </div>
</template>

<script>
function isEqual(a, b) {
  return String(a) === String(b)
}

export default {
  name: "CTagGroup",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: null,
    color: {
      type: String,
      default: 'outline'
    }
  },
  computed: {
    computedOptions() {
      return this.options.map((option, i) => {
        const active = isEqual(this.value, option.value)

        return {
          ...option,
          active,
        }
      })
    },
  },
  methods: {
    onClick(option) {
      this.$emit("input", option.value)
      this.$emit("change", option.value)
    },
  },
}
</script>
