<template>
  <div
    class="c-radio"
    :class="[
      isActive ? 'is-active' : '',
    ]"
  >
    <div class="relative flex items-center">
      <CIcon :name="isActive ? 'RadioButtonOn' : 'RadioButtonOff'" class="w-6 h-6" :class="isActive ? 'text-blue-500' : 'text-gray-300'" />

      <label
        v-if="label"
        :for="id"
        class="pl-1 cursor-pointer"
      >
        {{ label }}
      </label>

      <!-- Hidden input -->
      <input
        :id="id"
        ref="input"
        v-model="localValue"
        class="c-radio__input w-6"
        :value="checkedValue !== null ? checkedValue : true"
        :aria-checked="isActive"
        type="radio"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CRadio",
  props: {
    value: null, // dùng cho v-model
    label: String,
    id: String,
    checkedValue: {
      type: [String, Number, Boolean, null],
      default: null,
    },
  },
  data() {
    return {
      isFocused: false,
      uid: 0,
    }
  },
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit("input", val) // Vue 2 v-model
      },
    },
    isActive() {
      return this.localValue === (this.checkedValue !== null ? this.checkedValue : true)
    },
  }
}
</script>

<style lang="scss">
.c-radio__input {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
</style>
