<template>
  <div class="c-pagination inline-flex items-center gap-2 px-4 py-2 rounded-xl shadow bg-white">
    <!-- Prev -->
    <button
      class="p-2 rounded"
      :disabled="value === 1"
      @click="onPrev"
    >
      <CIcon name="ArrowBack" class="w-6" />
    </button>

    <!-- Pages -->
    <button
      v-for="(page, i) in pages"
      :key="i"
      class="min-w-8 px-3 py-1 rounded-md text-sm font-medium bg-transparent"
      :class="[
        page === value
          ? 'text-blue-600 font-semibold'
          : page === '...'
          ? 'cursor-default text-gray-400'
          : 'text-gray-600'
      ]"
      :disabled="page === '...'"
      @click="page !== '...' && onPageClick(page)"
    >
      {{ page }}
    </button>

    <!-- Next -->
    <button
      class="p-2 rounded disabled:opacity-40"
      :disabled="value === total"
      @click="onNext"
    >
      <CIcon name="ArrowForward" class="w-6" />
    </button>
  </div>
</template>

<script>
import CIcon from '@/components/CIcon.vue'

export default {
  name: "CPagination",
  components: { CIcon },
  props: {
    total: { type: Number, required: true },
    value: { type: Number, required: true },
    maxVisible: { type: Number, default: 7 },
    showEdges: { type: Boolean, default: true }
  },
  data() {
    return {
      currentPage: this.value,
    }
  },
  computed: {
    pages() {
      const { total, currentPage, maxVisible, showEdges } = this;

      // nếu tổng trang nhỏ hoặc bằng maxVisible => hiển thị tất cả
      if (total <= maxVisible) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }

      const edgesCount = showEdges ? 2 : 0;
      let blockSize = Math.max(1, maxVisible - edgesCount); // số slot dành cho các số trang giữa (có thể bị giảm trong vòng lặp)

      while (blockSize >= 1) {
        // tính start/end cho block số trang xấp xỉ ở giữa currentPage
        let start = currentPage - Math.floor((blockSize - 1) / 2);
        let end = start + blockSize - 1;

        // clamp vào khoảng [2, total-1] khi showEdges = true
        if (showEdges) {
          if (start < 2) {
            start = 2;
            end = start + blockSize - 1;
          }
          if (end > total - 1) {
            end = total - 1;
            start = end - blockSize + 1;
          }
        } else {
          // nếu không show edges thì cho phép từ 1..total
          if (start < 1) {
            start = 1;
            end = start + blockSize - 1;
          }
          if (end > total) {
            end = total;
            start = end - blockSize + 1;
          }
        }

        // build pages với dots nếu cần
        const pages = [];

        if (showEdges) {
          pages.push(1);
        }

        if (showEdges && start > 2) {
          pages.push('...');
        }

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }

        if (showEdges && end < total - 1) {
          pages.push('...');
        }

        if (showEdges) {
          pages.push(total);
        }

        // nếu danh sách vừa maxVisible => return
        if (pages.length <= maxVisible) {
          return pages;
        }

        // nếu quá dài thì giảm blockSize và thử lại
        blockSize--;
      }

      // fallback an toàn
      return [1, '...', total];

    }
  },
  methods: {
    onNext() {
      this.setPage(this.currentPage + 1)
    },
    onPrev() {
      this.setPage(this.currentPage - 1)
    },
    onPageClick(page) {
      this.setPage(page)
    },
    setPage(page) {
      this.currentPage = page

      this.$emit('input', this.currentPage)
    }
  }
}
</script>

<style scoped>
.c-pagination button {
  transition: all 0.2s ease;
  background: transparent;
  cursor: pointer;
}
</style>
