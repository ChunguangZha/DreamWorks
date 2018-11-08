// pages/mall/shopping-item-details/shopping-item-details.js
const app = getApp()

Page({
  properties: {
    shopId: {
      type: String
    }
  },
  

  /**
   * 页面的初始数据
   */
  data: {
    shopInfo: {
      shopId: 100,
      imgName: '1.jpg',
      title: '黑蜂椴树蜜',
      desc: '产自黑蜂自然保护区',
      price: 50,
      size: '500g',
      url: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var item = app.getShopItem(options['shopId']);
    this.setData({
      shopInfo: item
    })
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