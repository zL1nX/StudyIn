var app=getApp();
var util=require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:new Date(),
    movies: [
      { url: "/images/logo2.jpg" },
      { url: "/images/school1.jpg" },
    ],
    placearray:['图书馆','A楼','B楼','C楼','信远楼','其他'],
    classarray: ['高等数学', 'C语言', '大学物理', '线性代数', '概率论与数理统计','电路分析', '模拟电子技术', '数字电子技术', '数据结构', '大学英语', '信号与系统' ,'数据库','其他'],
    datearray: [],
    typearray:[
      {value:'组队自习',checked:'true'},
      {value:'邀请学霸'},
      {value:'公开课'}
    ],
    indexp:0,
    indexc:0,
    indexdate:0,
    begintime:'8:00',
    endtime:'22:30'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let temp = util.formatTime(new Date());
    var day = temp[1];
    var month = temp[0];
    var decmon = [1, 3, 5, 7, 8, 10, 12]
    for (let i = 0; i < 3; i++) {
      if ((day == 31 && (decmon.indexOf(month) != -1)) || day == 30 && (decmon.indexOf(month) == -1)) {
        day = 1;
        month++
      } else {
        day++;
      }
      this.data.datearray.push(month.toString() + '月' + day.toString() + '日')
    }
    
    

    this.setData({
      datearray: this.data.datearray
    })
    
  },
  choosetype:function(e){
    //console.log(e.detail.value)
  },
  chooseplace:function(e){
    
    this.setData({
      indexp:e.detail.value
    })
  },
  choosebegintime:function(e){
    this.setData({
     begintime : e.detail.value
    })
  },
  chooseendtime: function (e) {
    this.setData({
      endtime: e.detail.value
    })
  },
  chooseclass:function(e){
    this.setData({
      indexc:e.detail.value
    })
  },


  choosedate:function(e){
   this.setData({
     indexdate:e.detail.value
   })
   
  },


  formsubmit:function(e){
    
    if (e.detail.value.request.length == 0 || e.detail.value.request.length == 0) {
      
      wx.showToast({

        title: '请完善要求',

        image:'../../images/toast2.png',

        duration: 5000

      })
    }

    else if (e.detail.value.request1.length == 0 || e.detail.value.request1.length == 0) {

        wx.showToast({

          title: '请完善主题 ',

          image: '../../images/toast2.png',

          duration: 5000

        })
      

      setTimeout(function () {

        wx.hideToast()

      }, 5000)

    }
   else {
     
      if (app.globalData.page) {
        
        let pageappend= {
          'question_id': null, 'answer_id': null, 'feed_source_id': null, 'feed_source_name': null, 'feed_source_txt': null, 'feed_source_img': null, 'question': null, 'answer_ctnt': null, 'good_num': null, 'mark_num': null, 'ifmark': null,
            "time_start": null,
              "time_end": null,
                "location": null,
                  "subject": null,
                  "honour":null }
        
        
        /*for(let i=0;i<app.globalData.page.length;i++)
        {
          app.globalData.page[i].question_id++
          
        }*/
        app.globalData.page.map(function add(obj){return obj['question_id']++})
        
        
     
        app.globalData.page=[pageappend].concat(app.globalData.page)
        
    
        
        
        app.globalData.page[0].question_id = app.globalData.page[1].question_id-1
        


        app.globalData.page[0].question = "【" + e.detail.value.type + "】 " + e.detail.value.pickbegintime + "-" + e.detail.value.pickendtime + " | " + this.data.placearray[e.detail.value.pickplace] + ' | ' + this.data.classarray[e.detail.value.pickclass]
        
        app.globalData.page[0].location = this.data.placearray[e.detail.value.pickplace];
        app.globalData.page[0].time_start = e.detail.value.pickbegintime
        app.globalData.page[0].time_end = e.detail.value.pickendtime
        app.globalData.page[0].subject = this.data.classarray[e.detail.value.pickclass]
        app.globalData.page[0].date=this.data.datearray[e.detail.value.pickdate]
        
        
        
        
        
        app.globalData.page[0].answer_ctnt = e.detail.value.request
        app.globalData.page[0].feed_source_name=app.globalData.userInfo.nickName
        app.globalData.page[0].feed_source_img=app.globalData.userInfo.avatarUrl
        app.globalData.page[0].feed_source_txt= e.detail.value.type
        app.globalData.page[0].mark_num = 0
        app.globalData.page[0].good_num = false
        app.globalData.page[0].ifmark=false
        app.globalData.page[0].honour=app.globalData.userInfo.honour
        app.globalData.page[0].question = e.detail.value.request1
        app.globalData.page[0].level=app.globalData.userInfo.level


        wx.showToast({

          title: '提交成功',

          icon: 'success',

          duration: 5000

        })
        setTimeout(function () {

          wx.hideToast()

        }, 5000)
        wx.switchTab({
          url: '../index/index',
        })
      }
      else{
        wx.showToast({

          title: '提交失败',

          icon: 'loading',

          duration: 5000

        })
        setTimeout(function () {

          wx.hideToast()

        }, 5000)
      }
    

   }
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