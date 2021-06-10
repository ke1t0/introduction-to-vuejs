// console.log(typeof Vue !== "undefined");
// new Vue({
//     el: "#app",
//     data: {
//         message: "こんにちは！",
//     },
// });

const items = [
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

// const vm = new Vue({
//   el: '#app',
//   data: {
//     items: items,
//   },
// })
// window.vm = vm

// const vm1 = new Vue({
//   el: '#b-button',
//   data: {
//     loggedInButton: 'ログイン済みのため購入できます。',
//   },
// })

// const vm2 = new Vue({
//   el: '#b-button2',
//   data: {
//     loggedInButton: 'ログイン済みのため購入できます。',
//     canBuy: false,
//   },
// })

// // 2.7 フィルタ(filters)

// const filters = new Vue({
//   el: '#filters',
//   data: {
//     items: items,
//   },
//   filters: {
//     numberWithDelimiter(value) {
//       if (!value) {
//         return '0'
//       }
//       return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
//     },
//   },
// })

// // 2.8 算出プロパティ(computed)

// const computed = new Vue({
//   el: '#computed',
//   data: { items: items },
//   // マウントやデータ定義
//   computed: {
//     totalPrice() {
//       return this.items.reduce((sum, item) => {
//         return sum + item.price * item.quantity
//       }, 0)
//     },

//     totalPriceWithTax() {
//       // 算出プロパティに依存した算出プロパティも定義できる
//       return Math.floor(this.totalPrice * 1.08)
//     },
//   },
// })

const vm = new Vue({
  el: '#app',
  data: {
    items: items,
  },

  filters: {
    numberWithDelimiter(value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    },
  },

  computed: {
    totalPrice() {
      return this.items.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0)
    },

    totalPriceWithTax() {
      return Math.floor(this.totalPrice * 1.08)
    },
  },
})
window.vm = vm
