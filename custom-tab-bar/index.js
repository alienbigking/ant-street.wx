// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    isShow: true,
    list: [{
        url: "/pages/home/home",
        icon: "iconshouye",
        text: "首页"
      },
      {
        url: "/pages/follow/follow",
        icon: "iconicon_xinyong_xianxing_jijin-",
        text: "关注"
      },
      {
        url: "/pages/classify/classify",
        icon: "iconfenlei",
        text: "类别"
      }, {
        url: "/pages/chat/chat",
        icon: "iconliaotian1",
        text: "聊天"
      }, {
        url: "/pages/personal/personal",
        icon: "iconicon_personal",
        text: "个人中心"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        active: event.detail
      });
      wx.switchTab({
        url: this.data.list[event.detail].url
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });

    }
  }
})