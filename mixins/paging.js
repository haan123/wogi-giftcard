export default {
  data() {
    return {
      currentPage: 1,
      items: [],
      pageSize: 10
    }
  },

  computed: {
    start() {
      return (this.currentPage - 1) * this.pageSize
    },
    end() {
      return this.start + this.pageSize
    },
    pageItems() {
      if (this.items.length <= this.pageSize) {
        return this.items.slice(0)
      }

      return this.items.slice(this.start, this.start + this.pageSize)
    },
    // The total page count
    pageCount() {
      return Math.ceil(this.items.length / this.pageSize)
    },
  },

  methods: {
    setPageSize(size) {
      this.pageSize = size
    },
    setPage(page) {
      if (page >= 1 && page <= this.pageCount) {
        this.currentPage = page
      }
    },
    setItems(items = []) {
      this.items = items
    }
  },
}
