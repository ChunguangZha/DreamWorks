// components/shopping-list-large-item-component/shopping-list-large-item-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myData: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '10001', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) {
        console.log('item component: newVal: ' + newVal + ', oldVal: ' + oldVal);
        wx.getStorage({
          key: newVal,
          success: function (res) {
            this.setData(res);
          },
        })
      } 
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    shopId:'10001',
    imgName:'1.jpg',
    title:'五常大米',
    desc:'纯正五常新米，五常市民乐乡，源产地直发',
    price:120,
    size:'5KG',
    url: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function() {
      try {
        wx.setStorageSync('shopInfo', this.myData)
        wx.redirectTo({
          url: '../mall/shopping-item-details/shopping-item-details',
        })
      } catch (e) { }
    }
  }
})
