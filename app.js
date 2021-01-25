//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var name = wx.getStorageSync('name');
    var avatar = wx.getStorageSync('avatar');
    /*if (!name || !avatar) {
      //获取用户信息
      wx.getUserInfo({
        success: function (res) {
          var userInfo = res.userInfo;
          wx.setStorageSync('name', userInfo.nickName);
          wx.setStorageSync('avatar', userInfo.avatarUrl);
        }
      });
    }*/

  },
  /*getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  }*/
  getLevel:function(honour){
    var level = 0;
    var arr=[10,15,25,30]
    for(let i=0;honour;i++){
      honour-=arr[i]
      if(honour>=0){
        level++
      }
    }
    return level
  },
  globalData:{
    userInfo:null,
    page:null,
    pageid:null,
    levelarr: [{ "name": "学渣", "std": 10 }, { "name": "学弱", "std": 15 }, { "name": "学酥", "std": 25 }, { "name": "学霸", "std": 30 }, { "name": "学神", "std": 100 }],
    PersonInfo:
    {
        sex: "未设置",
        grade: "大一",
        num: "未设置",
        school: "未设置",
        major: "未设置",
        skill: "未设置",
        other: "未设置",
        QQ:"未设置",
        wechat:"未设置",
        phonenum:"未设置",
        email:"未设置",
    },
    InfoIndex:
    {
      indexsex: 0,
      indexschool: 0,
      indexmajor: 0
    },
   
  }
})