template模块与component组件，是小程序中组件化的方式,
二者的区别是，template模块主要是展示，方法需要在使用template的页面中定义,
component组件，则拥有自己的js文件，整个component组件类似一个page页面,
简单来说，只是展示用，建议使用template，组件中涉及到较多的逻辑，建议使用component。

template模板使用方式
-----------------------------------------------
<!--index.wxml-->

//导入模板
<import src="../../template/template.wxml" />

<view class="container">
  <!-- 引用template模板，用is="easy"的方式，选择模板 -->
  <template is="easy"  data="{{...str}}" /> //传入参数，必须是对象
  <template is="Davi" />
</view>

/**index.wxss**/

@import "../../template/template.wxss";  //引入template样式
.container{
  display:flex;
}
-------------------------------------------------
组件的使用方式
-------------------------------------------------
page中的使用，与template模板不同，component不需要在wxml中引入，但需要在json中指明使用的组件名及路径。

<!--index.wxml-->
<view class="container">
  <hello name="Easy"/>  //使用hello组件，并传入值为“Easy”的name属性（参数）
</view>

//index.json
{
  "usingComponents":{
    "hello":"/components/hello/hello"  //前面的hello是组件名，可以更改。路径指向使用的组件
  }
}
--------------------------------------------------
//怎么使用字体图标
小程序字体图标转换网站
对ttf的文件进行转换
https://transfonter.org/

--------------------------------------------
【rpx】rpx其实是微信对于rem的一种应用的规定，或者说一种设计的方案，官方上规定屏幕宽度为20rem，规定屏幕宽为750rpx。
1rem = 750/20 rpx