var common = require('../common.js');
var app = getApp()
Page({
  data: {
    phone: '就是看看是不是这个值',
    password: '',
    array: [1, 2, 3, 4, 5],
    view:'qiu',
    item:{
      username:'qiu',
      userpwd:'123456789',
      sex:'男'
    },
    flag:false
  },
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      wx.switchTab({
        url: "../default/index"
      })
    }
  },
  onLoad: function (e) {
    console.log('login onLoad' + e)
  },
  onReady: function () {
    console.log('login onReady')
  },
  onShow: function () {
    console.log('login onShow')
  }, onHide: function () {
    console.log('login onHide')
  }, onUnload: function () {
    console.log('login onUnload')
  }, onPullDownRefresh: function () {
    console.log('login onPullDownRefresh')
    wx.stopPullDownRefresh()
  },
  onReachBottom: function () {
    console.log('login onReachBottom')
  },
  onShareAppMessage: function () {
    console.log('login onShareAppMessage')
    return { title: '标题', path: '/pages/default/index' }
  },
  onPageScroll: function () {
    console.log('login onPageScroll')
  },
  viewTap: function () {
    console.log(this.customData.hi)
    common.sayHello('MINA')
    common.sayGoodbye('MINA')
    //wx.navigateTo({
    //  url: '/pages/index/index',
    //  success: function () {
    //    console.log(1)
    //  }
    //})
  },
  customData: {
    hi: 'MINA'
  }
})