//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '蜜蜂邻家铺',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    shoplist: [
      {
        shopId: '10001',
        imgName: '1.jpg',
        title: '五常大米',
        desc: '纯正五常新米，五常市民乐乡，源产地直发',
        price: 120,
        size: '5KG',
        url: ''
      },
      {
        shopId: '10002',
        imgName: '2.jpg',
        title: '0添加手工阿胶',
        desc: '100%手工制作，0添加，放心食用',
        price: 380,
        size: '1KG',
        url: ''
      },
      {
        shopId: '10003',
        imgName: '3.jpg',
        title: '水果大王',
        desc: '海南直销',
        price: 5.8,
        size: '500g',
        url: ''
      },
      {
        shopId: '10004',
        imgName: '4.jpg',
        title: '波尔多红酒',
        desc: '法国进口',
        price: 3800,
        size: '1000g',
        url: ''
      },
      {
        shopId: '10005',
        imgName: '5.jpg',
        title: '黑蜂椴树蜜',
        desc: '有机蜜',
        price: 50,
        size: '500g',
        url: ''
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {

    try {
      for (var i = 0; i < this.data.shoplist.length; i++) {
        wx.setStorage({
          key: this.data.shoplist[i].shopId,
          data: this.data.shoplist[i],
        })
      }
} catch(e) {
  console.log(e);
}

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})