//index.js

var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    feed: [],
    feed_length: 0,
    level:1,
    
  },
  //事件处理函数
  bindItemTap: function (e) {
    var id = e.currentTarget.id
    
    wx.navigateTo({
      url: '../answer/answer?question_id=' + id
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据

    




    /*app.getUserInfo(function(userInfo){
      that.setData({
        userInfo : userInfo
      })*/
      
    
    
    
    this.getData();
    
  },

  

  onShow: function () {
    this.onLoad()
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
  },


  //网络请求数据, 实现首页刷新
  refresh0: function () {
    var index_api = '';
    util.getData(index_api)
      .then(function (data) {
        //this.setData({
        //
        //});
      });
  },

  //使用本地 fake 数据实现刷新效果
  getData: function () {
    
    var feed = util.getData2();
    
    if (!app.globalData.page) { app.globalData.page = feed.data;}
    
    
   
    this.setData({
      feed: app.globalData.page,
      feed_length: app.globalData.page.length,
    });
    //app.globalData.page = feed_data
    
  },
  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
    var feed = util.getData2();
    
    var feed_data = feed.data;
    
    if(!app.globalData.page){
      app.globalData.page = feed_data;
    }
    this.setData({
      feed: app.globalData.page,
      feed_length: feed_data.length
    });
    
    
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)

  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })
    var next = util.getNext();
    var next_data = next.data;
    //app.globalData.page = this.data.feed.concat(next_data)
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
    
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  }
})
