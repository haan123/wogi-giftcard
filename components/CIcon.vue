<template>
  <component
    v-if="AsyncIcon"
    :is="AsyncIcon"
    v-bind="$attrs"
    v-on="$listeners"
  />
  <span v-else class="inline-block w-5 h-5 bg-gray-200 animate-pulse"></span>
</template>

<script>
export default {
  name: "CIcon",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      AsyncIcon: null
    }
  },
  watch: {
    name: {
      immediate: true,
      handler(newVal) {
        if (!newVal) return

        import(`./icons/${newVal}.vue`)
          .then(mod => {
            this.AsyncIcon = mod.default
          })
          .catch(err => {
            console.error("Icon not found:", newVal, err)
            this.AsyncIcon = null
          })
      }
    }
  }
}
</script>
