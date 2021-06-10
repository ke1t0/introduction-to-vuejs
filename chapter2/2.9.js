const items2 = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0,
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0,
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0,
  },
]

const vm2 = new Vue({
  el: '#app2',
  data: {
    items2: items2,
  },

  filters: {
    numberWithDelimiter(value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/, '$1')
    },
  },

  methods: {
    doBuy() {
      alert(`${this.totalPriceWithTax}円のお買い上げ！`)
      this.items2.forEach((item) => {
        item.quantity = 0
      })
    },
  },

  computed: {
    totalPrice() {
      return this.items2.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0)
    },

    totalPriceWithTax() {
      return Math.floor(this.totalPrice * 1.08)
    },

    canBuy() {
      return this.totalPrice >= 1000
    },

    errorMessageStyle() {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red',
      }
    },
  },
})
