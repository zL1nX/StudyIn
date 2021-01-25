var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentid:null,
    acceptorder:[],
    myorder:[],
    star: 0,
    starMap: [
      '非常差',
      '差',
      '一般',
      '好',
      '非常好',
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    for (var i = 0; i < app.globalData.page.length; i++) {
      if (app.globalData.page[i].good_num && app.globalData.page[i].feed_source_name != app.globalData.userInfo.nickName) {
        this.data.acceptorder.push(app.globalData.page[i])
      }
      else if (app.globalData.userInfo.nickName == app.globalData.page[i].feed_source_name){
        this.data.myorder.push(app.globalData.page[i])
      }
    }
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });   
    this.setData({
      orderdata:this.data.acceptorder,
      orderdata2:this.data.myorder,
      ifstared:false,
      currentTab:0
    })
  },



//页内tab的两个函数
  bindChangetab: function (e) {
    var that = this;
    that.setData({ 
      currentTab: e.detail.current 
      });

  }, 
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },






  popmodal:function(e){
    this.data.currentid=e.target.dataset.idx
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
        
      })
    }.bind(this), 200)
  },


  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  myStarChoose(e) {
    let star = parseInt(e.target.dataset.star) || 0;
    this.setData({
      star: star,
    });
  },

  starsubmit:function(){
    let f = length => Array.from({ length }).map((v, k) => k);
    this.setData({
      list:f(this.data.star),
      ifstared:true,
      showModalStatus:false,
      cid:this.data.currentid
    })
    wx.showToast({

      title: '评价成功',

      icon: 'success',

      duration: 5000

    })
    setTimeout(function () {
      wx.hideToast()

    }, 5000)

    var that = this;
    let target = app.globalData.page.find(function (o) { return o.feed_source_name == that.data.acceptorder[that.data.currentid].feed_source_name })
    target.score = ( parseInt(target.score) + 2 * parseInt(this.data.star)).toString()
    if(this.data.star >= 3){
    target.honour = (parseInt(target.honour) + 1).toString()}

    app.globalData.userInfo.score = (parseInt(app.globalData.userInfo.score) + parseInt(this.data.star)).toString()
    app.globalData.userInfo.honour = (parseInt(app.globalData.userInfo.honour)+1).toString()
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