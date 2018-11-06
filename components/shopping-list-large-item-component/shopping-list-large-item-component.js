// components/shopping-list-large-item-component/shopping-list-large-item-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myData: {
      title: string,
      desc: string,
      imgSrc: string,
      price: number,
      size: string,
      url: string
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgSrc:'',
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
      wx.redirectTo({
        url: this.myData.url,
      })
    }
  }
})
