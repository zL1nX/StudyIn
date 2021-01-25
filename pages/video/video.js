Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoarray: [
      { 'vid': 1, 'vtitle': '信号与系统', 'vimage': '../../images/video_img1.jpg' },
      { 'vid': 2, 'vtitle': '科技英语语法', 'vimage': '../../images/video_img2.jpg' },
      { 'vid': 3, 'vtitle': '通信网络基础', 'vimage': '../../images/video_img3.jpg' },
      { 'vid': 4, 'vtitle': '实用大众线性代数', 'vimage': '../../images/video_img4.jpg' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      video: this.data.videoarray
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
  f1: function (e) {
    var id = e.currentTarget.id
    console.log(id)
    wx.setStorageSync('video', this.data.videoarray[id - 1])
    wx.navigateTo({
      url: '/pages/detail/detail?video_id' + id
    })
  },
})