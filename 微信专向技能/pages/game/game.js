//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tiqu: {

    },
    ts: true,
    daan: true
  },
  XYT() {
    wx.navigateTo({
      url: '/pages/xiayiti/xiayiti',
    })
  },
  onLoad: function () {
    var qb = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=1',
      success: function (data) {
        wx.setStorageSync('qb', data)
      }
    })
    qb = wx.getStorageSync('qb')
    this.setData({
      tiqu: qb
    })
  },
  TS: function () {
    this.setData({
      ts: false
    })
  },
  DA: function () {
    this.setData({
      daan: false
    })
  }
})

