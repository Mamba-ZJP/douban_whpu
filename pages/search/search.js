// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: {},
    inputVal: ""
  },
  Search: function () {
    let page = this;
    console.log(1);
    wx.request({
      url: 'http://api.vopipi.cn/api/search?wd=' + page.data.inputVal,
      header: {
        'Content-type': 'json',
        'token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjExNy4xMzYuNTMuNDYiLCJ1YSI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MS4wLjQ0NzIuMTE0IFNhZmFyaS81MzcuMzYiLCJ0aW1lIjo2Mzc2MDE0OTA4MDI0MDkyODksInRpbWVvdXQiOiIyMDIxLTA3LTI0VDE2OjMxOjIwLjI0MDkyODkrMDg6MDAifQ.VYOSuEfI3tBYr_EAjm3ECT0Z2XKOesun4J0sXo-eJw8"
      },
      success: function (res) {
        console.log(res);
        page.setData({
          movies: res.data.data
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})