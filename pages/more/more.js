//logs.js
var util = require('../../utils/util.js')
var context = new wx.createCanvasContext('canvasid', this);
var strat_num = 1, end_num = 20;
var sAngle = 1.5 * Math.PI, eAngle = 0;  
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    tapped:false,
    remain:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function () {
    let l = app.globalData.userInfo.level;
    let h = app.globalData.userInfo.honour;
    let sum = 0;
    if (l == 0) { this.data.remain = h }
    else {
      while (l) {
        sum += app.globalData.levelarr[l - 1].std;
        l--;
      }
    }
    this.data.remain = h - sum
    this.setData({
      userInfo:app.globalData.userInfo,
      buttontxt:"我要签到",
      levelarr:app.globalData.levelarr,
      remain:this.data.remain
    })
  },
  onReady: function () {
   
    // 获得circle组件
    this.drawProgressbg();
    this.drawCircle(this.data.remain*2/app.globalData.levelarr[app.globalData.userInfo.level].std)  //2 ==> 100%
  },
  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(4);// 设置圆环的宽度
    ctx.setStrokeStyle('#aeaeae'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath();//开始一个新的路径
    ctx.arc(70, 70, 50, 0, 2 * Math.PI, false);
    //设置一个原点(110,110)，半径为100的圆的路径到当前路径
    ctx.stroke();//对当前路径进行描边
    ctx.draw();
  },
  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "#2661DD");
    gradient.addColorStop("0.5", "#40ED94");
    gradient.addColorStop("1.0", "#5956CC");

    context.setLineWidth(10);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(70, 70, 50, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },
  changeInfo:function(){
    wx.navigateTo({
      url:'../information/information'
    })
  },
  pushRequest:function(){
    wx.navigateTo({
      url: '../request/request',
    })
  },
  myOrder: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },
  myMark: function () {
    wx.navigateTo({
      url: '../mark/mark',
    })
  },
  myVideo: function () {
    wx.navigateTo({
      url: '../video/video',
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../about/about',
    })
  },
  scoreShop:function(){
    wx.navigateTo({
      url: '../shop/shop',
    })
  },
  member: function() {
    wx.showToast({
      icon: "none",
      title: '暂未开放，敬请期待',
      duration:2000
    })
  },



  //签到
  bindsign: function () {
    if (!this.data.tapped) {
      this.data.tapped = true
      app.globalData.userInfo.score++
      this.setData({
        tapping: false,
        buttontxt: "已签到",
        userInfo: app.globalData.userInfo
      })

      wx.showToast({
        title: '签到成功',
        icon:'success',
        duration:1000
      })

      setTimeout(function () {
        this.setData({
          tapping: true,
          buttontxt: '我要签到',
        })
        this.data.tapped = false
      }.bind(this), 10000)
      //设一个很长的时间就可以模拟一天
    }

  },
  onShow:function(){
    this.onLoad()
  }
})