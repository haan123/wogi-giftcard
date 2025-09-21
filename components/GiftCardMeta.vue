<template>
  <div class="c-gift-card-meta">
    <div class="p-3 border-t-2 border-gray-200 text-center flex justify-center flex-wrap gap-4 py-6">
      <h3 :title="item.title" class="truncate mt-2 text-xl w-full">
        {{ item.title }}
      </h3>

      <CBadge :type="getBadgeType(item)">{{ item.status }}</CBadge>
    </div>

    <div class="border-t border-gray-200 flex">
      <div class="py-3 px-2 text-center w-1/2">
        <span class="text-gray-500">Country</span>

        <p>{{ item.country }}</p>
      </div>
      <div class="py-3 px-2 text-center w-1/2 border-l border-gray-200">
        <span class="text-gray-500">Products</span>

        <p>{{ item.products }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { GIFT_CARD_STATUS } from '~/constants';

export default {
  name: "GiftCardMeta",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getBadgeType({ status }) {
      const types = {
        [GIFT_CARD_STATUS.ACTIVE]: 'success',
        [GIFT_CARD_STATUS.INACTIVE]: 'error',
      }

      return types[status] || ''
    }
  }
};
</script>
