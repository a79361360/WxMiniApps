//app.js
App({
  onLaunch: function (e) {
    console.log('onLaunch' + e)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log(res.code)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //切换回前台
  onShow:function(e){
    console.log('onshow'+e)
    console.log(e.path)
    console.log(e.query)
    console.log(e.scene)
  },
  //切换到后台
  onHide: function () {
    console.log('onHide')
  },
  //页面不存在
  onPageNotFound:function(e){
    console.log(e.path)
  },
  globalData: {
    userInfo: null
  }
})