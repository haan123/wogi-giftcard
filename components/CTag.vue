<template>
  <button
    class="c-tag border rounded"
    :class="[
      isActive ? 'is-active bg-blue-500 border-blue-500 text-white' : 'bg-white',
      `c-tag--${color}`,
      `c-tag--${size}`,
    ]"
    @click="onClick"
  >
    <slot v-if="$slots.prepend" name="prepend" />
    <slot>{{ label }}</slot>
    <slot v-if="$slots.append" name="append" />
  </button>
</template>

<script>
export default {
  name: "CTag",
  props: {
    value: {
      type: [String, Boolean],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    checkedValue: {
      type: [String, Boolean],
      default: undefined
    },
    color: {
      type: String,
      default: 'neutral'
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit("input", val)
      },
    },
    checkedVal() {
      return this.checkedValue !== undefined ? this.checkedValue : true
    },
    isActive: {
      get() {
        return this.modelValue === this.checkedVal
      },
      set(val) {
        this.modelValue = val ? this.checkedVal : false
      },
    },
  },
  watch: {
    value(newVal) {
      this.modelValue = newVal
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
