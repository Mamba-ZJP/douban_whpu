// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    show: false,
    selectData: ['欧美', '中国台湾', '中国香港', '大陆', '日本', '韩国'],
    index: 0
  },
  selectTap: function() {
    wx.showToast({
      title: '成功'
    })
    this.setData({
      show: !this.data.show
    })
  }, 
  // 点击下拉列表
  optionTap: function(e) {
    let page = this;
    let Index = e.currentTarget.dataset.index;
    let name = this.data.selectData[Index];
    this.setData({
      index: Index,
      show: !this.data.show
    })
    wx.request({
      url: 'https://movie.douban.com/j/search_subjects?type=movie&tag=' + name,
      header: {
        'Content-type': 'json'
      },
      success: function(res) {
        let result = res.data.subjects;
        page.setData({movies: result});
      }
    })
  },
  // 准备跳转页面
  detail: function(e) {
    getApp().detail(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this;
    wx.request({
      url: 'https://movie.douban.com/j/search_subjects?type=movie&tag=北美',
      header: {
        'Content-type': 'json'
      },
      success: function(res) {
        let result = res.data.subjects;
        page.setData({movies: result});
      }
    })
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