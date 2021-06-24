// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },

  detail: function (e) {
    // console.log(e.currentTarget);
    // 获取当前的电影ID
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id,
    });
  }
})