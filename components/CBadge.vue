<template>
  <div class="c-badge inline-flex rounded px-2 py-1" :class="[color]">
    <slot />
  </div>
</template>

<script>
const BADGE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
}

const COLORS = {
  [BADGE_TYPES.SUCCESS]: 'bg-green-100 text-green-500',
  [BADGE_TYPES.ERROR]: 'bg-red-100 text-red-500',
}

export default {
  name: "CBadge",
  props: {
    type: {
      type: String,
      required: true,
      default: BADGE_TYPES.SUCCESS,
    },
  },
  computed: {
    color() {
      return COLORS[this.type]
    }
  }
};
</script>
