var util = require('../../utils/util.js')
var app = getApp()

Page({
  data:{
    userInfo: {},
    feeddata: [],
    remain:null,
  },
  onLoad: function (option) {
    var feed = app.globalData.page[app.globalData.pid - 1]
    let l = feed.level;
    let h = feed.honour;
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
      feeddata:feed,
      remain:this.data.remain,
      levelarr:app.globalData.levelarr
    })
  },
  onShow: function () {
    this.onLoad()
  },

})