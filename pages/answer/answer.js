//answer.js
var util = require('../../utils/util.js')
var app=getApp()
Page({
  data: {
    motto: 'APP',
    userInfo: {},
    feeddata:[],
    
  },
  //事件处理函数
  /*toQuestion: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  }*/
  onLoad: function (option) {
    app.globalData.pid = option.question_id
    var feed = app.globalData.page.find(function (x) { return x.question_id == option.question_id })
    var that = this
    //调用应用实例的方法获取全局数据
    this.setData({
      feeddata: feed
    })
  },

  
  tapOrder:function(e){
    if ((app.globalData.userInfo.honour >= 30 && app.globalData.page[app.globalData.pid - 1].feed_source_txt == "邀请学霸") || app.globalData.page[app.globalData.pid - 1].feed_source_txt == "组队自习"){
      app.globalData.page[app.globalData.pid - 1].good_num = !app.globalData.page[app.globalData.pid - 1].good_num

      this.setData({
        feeddata: app.globalData.page[app.globalData.pid - 1]
      })
      wx.showToast({
        title: "预约成功",
        icon:"success",
        duration: 1600
      })
      setTimeout(function () {
        wx.navigateBack({
          delta:1
        })

      }, 1600)
    }else{
      wx.showToast({
        title:"当前荣誉值不足",
        image:"../../images/toast2.png",
        duration:3000
      })
      setTimeout(function () {

        wx.hideToast()

      }, 3000)

      console.log("wrong")
    }
    
  },


  tapMark:function(e){
    
    var temp = app.globalData.page[app.globalData.pid-1].mark_num
    app.globalData.page[app.globalData.pid-1].ifmark = !app.globalData.page[app.globalData.pid-1].ifmark
    if (app.globalData.page[app.globalData.pid-1].ifmark)
    {
      app.globalData.page[app.globalData.pid-1].mark_num = parseInt(temp) + 1
    }
    else{
      app.globalData.page[app.globalData.pid-1].mark_num = parseInt(temp) - 1
    }
   
    this.setData({
      feeddata: app.globalData.page[app.globalData.pid-1]
    })
    
  },


  viewInfo: function () {
    
    var id = app.globalData.pid
   
    wx.navigateTo({
      url: '../person_detail/person_detail?question_id=' + id
    })
  }


  
})
