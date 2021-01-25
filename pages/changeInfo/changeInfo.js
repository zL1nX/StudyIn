const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    name: '',
    PersonInfo: {
    },
    sexarray: ['男', '女'],
    schoolarray: ['未设置','通信工程学院', '计算机学院'],
    majorarray:[['未设置学院'],['通信工程','信息工程'],['计算机科学与技术','物联网工程']],
    indexsex: app.globalData.InfoIndex.indexsex,
    indexschool: app.globalData.InfoIndex.indexschool,
    indexmajor: app.globalData.InfoIndex.indexmajor,
    c_sex: app.globalData.PersonInfo.sex,
    c_indexsex: app.globalData.PersonInfo.indexsex,
    c_school: app.globalData.PersonInfo.school,
    c_indexschool: app.globalData.InfoIndex.indexschool,
    c_num: app.globalData.PersonInfo.num,
    c_QQ: app.globalData.PersonInfo.QQ,
    c_phonenum: app.globalData.PersonInfo.phonenum,
    c_email: app.globalData.PersonInfo.email,
    c_major: app.globalData.PersonInfo.major,
    c_indexmajor: app.globalData.InfoIndex.indexmajor,
    c_skill: app.globalData.PersonInfo.skill,
    c_other: app.globalData.PersonInfo.other,
    c_wechat: app.globalData.PersonInfo.wechat
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a = app.globalData.PersonInfo
    var that=this
    this.setData({
      avatar: wx.getStorageSync('avatar'),
      name: wx.getStorageSync('name'),
      PersonInfo: a,
      indexsex: app.globalData.InfoIndex.indexsex,
      indexschool: app.globalData.InfoIndex.indexschool,
      indexmajor: app.globalData.InfoIndex.indexmajor,
    })
    console.log("indexmajor="+that.data.indexmajor)
  },

  changeAvatar: function (e) {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        var tempFilePaths = res.tempFilePaths;
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            var savedFilePath = res.savedFilePath;
            wx.setStorageSync('avatar', savedFilePath);
            that.setData({ avatar: savedFilePath });
          }
        });
      }
    })
  },

  choosesex: function (e) {
    var that = this
    this.setData({
      indexsex: e.detail.value
    }),
    this.setData({
      PersonInfo:{
        sex: that.data.sexarray[that.data.indexsex],
        grade: that.data.PersonInfo.grade,
        num: that.data.PersonInfo.num,
        school:that.data.PersonInfo.school,
        major: that.data.PersonInfo.major,
        skill: that.data.PersonInfo.skill,
        other: that.data.PersonInfo.other,
        QQ: that.data.PersonInfo.QQ,
        wechat: that.data.PersonInfo.wechat,
        phonenum: that.data.PersonInfo.phonenum,
        email: that.data.PersonInfo.email
      }
    })
    /*app.globalData.PersonInfo.sex=that.data.PersonInfo.sex
    app.globalData.InfoIndex.indexsex=that.data.indexsex*/
    this.setData({
      c_sex:that.data.PersonInfo.sex,
      c_indexsex:that.data.indexsex
    })
  },

  chooseschool: function (e) {
  var that = this
    this.setData({
      indexschool: e.detail.value
    }),
   this.setData({
    PersonInfo: {
        school: that.data.schoolarray[that.data.indexschool],
        sex: that.data.PersonInfo.sex,
        grade: that.data.PersonInfo.grade,
        num: that.data.PersonInfo.num,
        major: that.data.PersonInfo.major,
        skill: that.data.PersonInfo.skill,
        other: that.data.PersonInfo.other,
        QQ: that.data.PersonInfo.QQ,
        wechat: that.data.PersonInfo.wechat,
        phonenum: that.data.PersonInfo.phonenum,
        email: that.data.PersonInfo.email
      }
    })
  /* app.globalData.PersonInfo.school =  this.data.schoolarray[e.detail.value]
    app.globalData.InfoIndex.indexschool = e.detail.value*/
    this.setData({
      c_school: that.data.schoolarray[e.detail.value],
      c_indexschool: e.detail.value
    })
  },

  inputNumber:function(e){
    var that = this
    this.setData({
      PersonInfo: {
        school: that.data.PersonInfo.school,
        sex: that.data.PersonInfo.sex,
        grade: that.data.PersonInfo.grade,
        num: e.detail.value,
        major: that.data.PersonInfo.major,
        skill: that.data.PersonInfo.skill,
        other: that.data.PersonInfo.other,
        QQ: that.data.PersonInfo.QQ,
        wechat: that.data.PersonInfo.wechat,
        phonenum: that.data.PersonInfo.phonenum,
        email: that.data.PersonInfo.email
      }
    })
 /*   app.globalData.PersonInfo.num=e.detail.value*/
    this.setData({
      c_num: e.detail.value
    })
  },

  inputQQ: function (e) {
    var that = this
    this.setData({
      PersonInfo: {
        school: that.data.PersonInfo.school,
        sex: that.data.PersonInfo.sex,
        grade: that.data.PersonInfo.grade,
        num: that.data.PersonInfo.num,
        major: that.data.PersonInfo.major,
        skill: that.data.PersonInfo.skill,
        other: that.data.PersonInfo.other,
        QQ: e.detail.value,
        wechat: that.data.PersonInfo.wechat,
        phonenum: that.data.PersonInfo.phonenum,
        email: that.data.PersonInfo.email
      }
    })
      /*app.globalData.PersonInfo.QQ = e.detail.value*/
    this.setData({
      c_QQ: e.detail.value
    })
  },

  inputPhonenum: function (e) {
    var that = this
    this.setData({
      PersonInfo: {
        school: that.data.PersonInfo.school,
        sex: that.data.PersonInfo.sex,
        grade: that.data.PersonInfo.grade,
        num: that.data.PersonInfo.num,
        major: that.data.PersonInfo.major,
        skill: that.data.PersonInfo.skill,
        other: that.data.PersonInfo.other,
        QQ:that.data.PersonInfo.QQ,
        wechat: that.data.PersonInfo.wechat,
        phonenum: e.detail.value,
        email: that.data.PersonInfo.email
      }
    })
    /*  app.globalData.PersonInfo.phonenum = e.detail.value*/
    this.setData({
      c_phonenum: e.detail.value
    })
  },
  
  inputEmail: function (e) {
    var that = this
    this.setData({
      PersonInfo: {
        school: that.data.PersonInfo.school,
        sex: that.data.PersonInfo.sex,
        grade: that.data.PersonInfo.grade,
        num: that.data.PersonInfo.num,
        major: that.data.PersonInfo.major,
        skill: that.data.PersonInfo.skill,
        other: that.data.PersonInfo.other,
        QQ: that.data.PersonInfo.QQ,
        wechat: that.data.PersonInfo.wechat,
        phonenum: that.data.PersonInfo.phonenum,
        email: e.detail.value
      }
    })
    /*  app.globalData.PersonInfo.email = e.detail.value*/
    this.setData({
      c_email: e.detail.value
    })
  },

  inputSkill: function (e) {
    var that = this
    this.setData({
      PersonInfo: {
        school: that.data.PersonInfo.school,
        sex: that.data.PersonInfo.sex,
        grade: that.data.PersonInfo.grade,
        num: that.data.PersonInfo.num,
        major: that.data.PersonInfo.major,
        skill: e.detail.value,
        other: that.data.PersonInfo.other,
        QQ: that.data.PersonInfo.QQ,
        wechat: that.data.PersonInfo.wechat,
        phonenum: that.data.PersonInfo.phonenum,
        email: that.data.PersonInfo.email
      }
    })
    /*  app.globalData.PersonInfo.email = e.detail.value*/
    this.setData({
      c_skill: e.detail.value
    })
  },

  inputWechat: function (e) {
    var that = this
    this.setData({
      PersonInfo: {
        school: that.data.PersonInfo.school,
        sex: that.data.PersonInfo.sex,
        grade: that.data.PersonInfo.grade,
        num: that.data.PersonInfo.num,
        major: that.data.PersonInfo.major,
        skill: that.data.PersonInfo.skill,
        other: that.data.PersonInfo.other,
        QQ: that.data.PersonInfo.QQ,
        wechat: e.detail.value,
        phonenum: that.data.PersonInfo.phonenum,
        email: that.data.PersonInfo.email
      }
    })
    /*  app.globalData.PersonInfo.email = e.detail.value*/
    this.setData({
      c_wechat: e.detail.value
    })
  },

  inputOther: function (e) {
    var that = this
    this.setData({
      PersonInfo: {
        school: that.data.PersonInfo.school,
        sex: that.data.PersonInfo.sex,
        grade: that.data.PersonInfo.grade,
        num: that.data.PersonInfo.num,
        major: that.data.PersonInfo.major,
        skill: that.data.PersonInfo.skill,
        other: e.detail.value,
        QQ: that.data.PersonInfo.QQ,
        wechat: that.data.PersonInfo.wechat,
        phonenum: that.data.PersonInfo.phonenum,
        email: that.data.PersonInfo.email
      }
    })
    /*  app.globalData.PersonInfo.email = e.detail.value*/
    this.setData({
      c_other: e.detail.value
    })
  },


  choosemajor: function (e) {
    var that = this
    this.setData({
      indexmajor: e.detail.value
    }),
      this.setData({
        PersonInfo: {
          sex: that.data.PersonInfo.sex,
          grade: that.data.PersonInfo.grade,
          num: that.data.PersonInfo.num,
          school: that.data.PersonInfo.school,
          major: that.data.majorarray[that.data.indexschool][that.data.indexmajor],
          skill: that.data.PersonInfo.skill,
          other: that.data.PersonInfo.other,
          QQ: that.data.PersonInfo.QQ,
          wechat: that.data.PersonInfo.wechat,
          phonenum: that.data.PersonInfo.phonenum,
          email: that.data.PersonInfo.email
        }
      })
   /* app.globalData.PersonInfo.major = that.data.PersonInfo.major
    app.globalData.InfoIndex.indexmajor = that.data.indexmajor*/
    this.setData({
      c_major: that.data.PersonInfo.major,
      c_indexmajor: that.data.indexmajor
    })
  },

  confirm:function(e){
    app.globalData.PersonInfo.sex = this.data.c_sex,
    app.globalData.InfoIndex.indexsex = this.data. c_indexsex
    app.globalData.PersonInfo.school = this.data.c_school
    app.globalData.InfoIndex.indexschool = this.data.c_indexschool
    app.globalData.PersonInfo.num = this.data.c_num
    app.globalData.PersonInfo.QQ = this.data.c_QQ
    app.globalData.PersonInfo.phonenum = this.data.c_phonenum
    app.globalData.PersonInfo.email = this.data.c_email
    app.globalData.PersonInfo.major = this.data.c_major
    app.globalData.InfoIndex.indexmajor = this.data.c_indexmajor
    app.globalData.PersonInfo.skill=this.data.c_skill
    app.globalData.PersonInfo.other=this.data.c_other,
    app.globalData.PersonInfo.wechat = this.data.c_wechat,
    wx.showToast({
        title: '修改成功',
        icon: 'success',
      })
    setTimeout(function () {
      wx.navigateTo({
        url: '../information/information',
      })
    }, 1200)
  
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