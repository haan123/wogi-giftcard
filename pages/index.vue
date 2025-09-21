<template>
  <div class="pb-10">
    <h1 class="mt-10 mb-16">Brands</h1>

    <GiftCardList :items="pageItems" />

    <div class="flex flex-col md:flex-row items-center px-2">
      <CPagination v-model="currentPage" :total="pageCount" class="mt-12 mb-4" />

      <span class="text-gray-500 md:ml-auto">
        <b class="text-black">{{ start + 1 }} - {{ end }}</b> of <b class="text-black">{{ items.length }}</b> results
      </span>
    </div>
  </div>
</template>

<script>
import paging from '@/mixins/paging'
import data from '~/db/data';

export default {
  name: 'IndexPage',
  mixins: [paging],
  layout: 'MainLayout',
  data() {
    return {
      pageSize: 8,
      items: data,
    }
  },
}
</script>
