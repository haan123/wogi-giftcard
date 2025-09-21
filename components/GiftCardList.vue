<template>
  <div class="c-gift-card-list grid grid-cols-2 lg:grid-cols-4 gap-6">
    <NuxtLink
      v-for="(item, i) in items"
      :key="i"
      :to="`gift-card/${item.id}`"
      class="rounded-lg bg-white overflow-hidden shadow text-black underline-none"
    >
      <div class="c-gift-card__img">
        <img
          v-if="item.img && item.img.src"
          :src="item.img.src"
          :alt="item.img.alt"
        />
        <img v-else src="https://placehold.co/600x400" />
      </div>

      <GiftCardMeta :item="item" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "GiftCardList",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
