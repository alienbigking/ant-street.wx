// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: null,
    active: 0,
    color: '#fe0000',
    cameraHeight: "0px",
    isShowPopup:false,
    photoSrc:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("home页面渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().init();
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

  },

  // 自定义组件方法
  onCameraError() {

  },
  onOpenCamera() {
    console.log("打开相机");
    wx.hideTabBar({
      animation: true,
      fail:function(){
        console.log("隐藏失败")
      },
      success:function(){
        console.log("隐藏成功");
      }
    })
    this.setData({
      isShowPopup:true,
      cameraHeight: "80vh"
    });
  },
  onTakePhoto(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log("拍摄成功",res);
        this.setData({
          photoSrc: res.tempImagePath
        })
      }
    })
  },
  onClosePopup() {
    this.setData({
      isShowPopup:false,
      cameraHeight: 0 + "px"
    });
    console.log("关闭相机");
  },
})