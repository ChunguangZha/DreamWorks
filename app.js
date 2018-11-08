//app.js
const models = require('/models/models.js')

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('getSetting');
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log('getUserInfo: ' + res.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    userDate: null,
  },
  getShopItem: function (shopId) {
    for (var i = 0; i < this.shoplist.length; i++) {
      if (this.shoplist[i].shopId === shopId) {
        return this.shoplist[i];
      }
    }

    var s = new models.shopInfo({ 'shopId': 1 })
    s.shopId = 66;
    return null
  },
  shoplist: [{
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
})