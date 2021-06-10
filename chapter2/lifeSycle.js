const lifeSycle = new Vue({
  el: '#lifeSycle',
  data() {
    return {
      count: 0,
      timerId: null,
    }
  },

  created() {
    console.log('created')
    console.log(this.count)
    console.log(this.$el)

    this.timerId = setInterval(() => (this.count += 1), 1000)
  },

  mounted() {
    console.log('mounted')
    console.log(this.$el)
  },

  beforeDestroy() {
    console.log('beforeDestroy')
    clearInterval(this.timerId)
  },
})
