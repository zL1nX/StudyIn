var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mymark:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mymark = [];
    for (var i = 0; i < app.globalData.page.length; i++) {
      if (app.globalData.page[i].ifmark) {
        mymark.push(app.globalData.page[i])
      }
    }
    this.setData({
      markdata: mymark
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
    
  },

  bindItemTap: function (e) {
    console.log(e)
    console.log(this.data.markdata)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../answer/answer?question_id=' + id
    })
  },

})