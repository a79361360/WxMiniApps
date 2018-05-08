
const app = getApp()
// page.js
Page({
  data: {
    msg: '秋秋在这里',
    title: '这是标题',
    count: 1
  },
  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  }
})