(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-ratings-ratings"],{"95de":function(t,e,i){"use strict";i.r(e);var a=i("bf96"),n=i("a553");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b2d4");var s=i("828b"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0e3bab7d",null,!1,a["a"],void 0);e["default"]=r.exports},"9ad7":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{labelList:[{name:"全部",number:25,type:"all"},{name:"好评",number:23,type:"good"},{name:"中评",number:1,type:"secondary"},{name:"差评",number:1,type:"poor"},{name:"有图",number:12,type:"img"},{name:"视频",number:2,type:"video"},{name:"追加",number:2,type:"append"}],labelIndex:0,ratingsList:[{id:1,username:"大黑哥",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"good",first:{content:"可以，很好吃，买这家很多次了",img:["/static/img/goods/1.png","/static/img/goods/2.png","/static/img/goods/1.png","/static/img/goods/4.png"],video:[{img:"/static/img/goods/1.png",path:"https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4"}]},append:{date:65,content:"追评",img:["/static/img/goods/1.png","/static/img/goods/2.png","/static/img/goods/1.png","/static/img/goods/4.png"],video:[{img:"/static/img/goods/1.png",path:"https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4"}]}},{id:2,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"好评，看图",img:["/static/img/goods/1.png","/static/img/goods/2.png","/static/img/goods/1.png","/static/img/goods/4.png"],video:[]}}],videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:""}},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo")},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){uni.showToast({title:"触发上拉加载"})},methods:{loadRatings:function(t){this.labelIndex=t,uni.showToast({title:"切换评论列表"})},playVideo:function(t){this.videoSrc=t,this.$nextTick((function(){this.videoContext.requestFullScreen({direction:0})}))},stopPlayVideo:function(){this.videoContext.pause()},videoPause:function(){this.videoSrc=""},viderFullscreen:function(t){t.detail.fullScreen?this.videoContext.play():this.stopPlayVideo()},showBigImg:function(t,e){uni.previewImage({current:t,urls:e})}}};e.default=a},a553:function(t,e,i){"use strict";i.r(e);var a=i("9ad7"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},aa38:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.space-split[data-v-0e3bab7d]{height:%?20?%;width:100%}.split-border-attr[data-v-0e3bab7d], .split-border-sm[data-v-0e3bab7d], .split-border-base[data-v-0e3bab7d], .split-border-lg[data-v-0e3bab7d]{background:#f9f9f9;width:100%}.light-text[data-v-0e3bab7d]{color:grey}.split-bottom-border1[data-v-0e3bab7d]{border-bottom:1px solid #f9f9f9}.split-border-sm[data-v-0e3bab7d]{height:%?10?%}.split-border-base[data-v-0e3bab7d]{height:%?15?%}.split-border-lg[data-v-0e3bab7d]{height:%?20?%}.footer-place[data-v-0e3bab7d]{height:%?99?%}.top-space[data-v-0e3bab7d]{height:%?30?%}.header-place[data-v-0e3bab7d]{height:%?100?%;width:100%}.full-button[data-v-0e3bab7d]{height:%?88?%;line-height:%?88?%;font-size:%?32?%;text-align:center;color:#fff;background:#70b162;border-radius:%?5?%}.m-header[data-v-0e3bab7d]{display:flex;flex-direction:row;justify-content:space-between;padding:%?16?% 10px;align-items:center;box-sizing:border-box}.m-header .m-label[data-v-0e3bab7d]{font-size:%?32?%;color:#333}.m-header .m-detail[data-v-0e3bab7d]{font-size:%?28?%;color:#333}.page-footer[data-v-0e3bab7d]{position:fixed;bottom:%?0?%;width:100%;height:%?99?%;border-top:solid %?1?% #eee;background-color:#fff;z-index:2;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box}uni-page-body[data-v-0e3bab7d]{background-color:#fff}body.?%PAGE?%[data-v-0e3bab7d]{background-color:#fff}.myVideo[data-v-0e3bab7d]{position:fixed;top:50%;right:100%}.content[data-v-0e3bab7d]{width:94%;padding:0 3%}.content uni-view[data-v-0e3bab7d]{display:flex}.content .label[data-v-0e3bab7d]{width:100%;flex-wrap:wrap}.content .label uni-view[data-v-0e3bab7d]{padding:0 %?20?%;height:%?50?%;border-radius:%?40?%;border:solid %?1?% #ddd;align-items:center;color:#555;font-size:%?26?%;background-color:#f9f9f9;margin:%?10?% %?20?% %?10?% 0}.content .label uni-view.on[data-v-0e3bab7d]{border:solid %?1?% #70b162;color:#70b162}.content .list[data-v-0e3bab7d]{width:100%;flex-wrap:wrap;padding:%?20?% 0}.content .list .row[data-v-0e3bab7d]{width:100%;margin-top:%?30?%}.content .list .row .left[data-v-0e3bab7d]{width:10vw;flex-shrink:0;margin-right:%?10?%}.content .list .row .left .face[data-v-0e3bab7d]{width:100%}.content .list .row .left .face uni-image[data-v-0e3bab7d]{width:10vw;height:10vw;border-radius:100%}.content .list .row .right[data-v-0e3bab7d]{width:100%;flex-wrap:wrap}.content .list .row .right .name-date[data-v-0e3bab7d]{width:100%;justify-content:space-between;align-items:baseline}.content .list .row .right .name-date .username[data-v-0e3bab7d]{font-size:%?32?%;color:#555}.content .list .row .right .name-date .date[data-v-0e3bab7d]{font-size:%?28?%;color:#aaa}.content .list .row .right .spec[data-v-0e3bab7d]{width:100%;color:#aaa;font-size:%?26?%}.content .list .row .right .first[data-v-0e3bab7d]{width:100%;flex-wrap:wrap}.content .list .row .right .first .rat[data-v-0e3bab7d]{font-size:%?30?%}.content .list .row .right .first .img-video[data-v-0e3bab7d]{width:100%;flex-wrap:wrap}.content .list .row .right .first .img-video .box[data-v-0e3bab7d]{width:calc((84.6vw - %?50?%)/4);height:calc((84.6vw - %?50?%)/4);margin:%?5?% %?5?%;position:relative;justify-content:center;align-items:center}.content .list .row .right .first .img-video .box uni-image[data-v-0e3bab7d]{position:absolute;width:100%;height:100%;border-radius:%?10?%}.content .list .row .right .first .img-video .box .playbtn[data-v-0e3bab7d]{position:absolute}.content .list .row .right .first .img-video .box .playbtn .icon[data-v-0e3bab7d]{font-size:%?80?%;color:hsla(0,0%,100%,.9)}.content .list .row .right .append[data-v-0e3bab7d]{width:100%;flex-wrap:wrap}.content .list .row .right .append .date[data-v-0e3bab7d]{width:100%;height:%?40?%;border-left:%?10?% solid #70b162;padding-left:%?10?%;align-items:center;font-size:%?32?%;margin:%?20?% 0}.content .list .row .right .append .rat[data-v-0e3bab7d]{font-size:%?30?%}.content .list .row .right .append .img-video[data-v-0e3bab7d]{width:100%;flex-wrap:wrap}.content .list .row .right .append .img-video .box[data-v-0e3bab7d]{width:calc((84.6vw - %?10?% - (%?10?% * 4))/4);height:calc((84.6vw - %?10?% - (%?10?% * 4))/4);margin:%?5?% %?5?%;position:relative;justify-content:center;align-items:center}.content .list .row .right .append .img-video .box uni-image[data-v-0e3bab7d]{position:absolute;width:100%;height:100%;border-radius:%?10?%}.content .list .row .right .append .img-video .box .playbtn[data-v-0e3bab7d]{position:absolute}.content .list .row .right .append .img-video .box .playbtn .icon[data-v-0e3bab7d]{font-size:%?80?%;color:hsla(0,0%,100%,.9)}\r\n/*\r\n* <view class="list">\r\n\t\t\t\t<view class="row">\r\n\r\n\t\t\t\t\t<view class="right">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<view class="spec">\r\n\t\t\t\t\t\t\t规格：XL\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t<view class="first">\r\n\t\t\t\t\t\t\t<view class="rat">\r\n\t\t\t\t\t\t\t\t好看，可以，不愧是专业的，才拿到手上就研究了半天才装上\r\n\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t<view class="img-video">\r\n\t\t\t\t\t\t\t\t<view class="box">\r\n\t\t\t\t\t\t\t\t\t<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>\r\n\t\t\t\t\t\t\t\t\t<view class="playbtn">\r\n\t\t\t\t\t\t\t\t\t\t<view class="icon bofang"></view>\r\n\t\t\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t\t<view class="box">\r\n\t\t\t\t\t\t\t\t\t<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>\r\n\t\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t\t<view class="box">\r\n\t\t\t\t\t\t\t\t\t<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>\r\n\t\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t<view class="append">\r\n\t\t\t\t\t\t\t<view class="date">\r\n\t\t\t\t\t\t\t\t65天后追加\r\n\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t<view class="rat">\r\n\t\t\t\t\t\t\t\t好看，可以，不愧是专业的，才拿到手上就研究了半天才装上\r\n\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t<view class="img-video">\r\n\t\t\t\t\t\t\t\t<view class="box">\r\n\t\t\t\t\t\t\t\t\t<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>\r\n\t\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t\t<view class="box">\r\n\t\t\t\t\t\t\t\t\t<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>\r\n\t\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t</view>\r\n\t\t\t</view>\r\n\t\t\t* \r\n\t\t\t* */',""]),t.exports=e},b2d4:function(t,e,i){"use strict";var a=i("f8a0"),n=i.n(a);n.a},bf96:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-video",{directives:[{name:"show",rawName:"v-show",value:t.isPlayVideo,expression:"isPlayVideo"}],staticClass:"myVideo",attrs:{id:"myVideo",src:t.videoSrc,"show-fullscreen-btn":t.showFullscreenBtn,direction:t.videoDirection,"show-play-btn":t.showPlayBtn},on:{pause:function(e){arguments[0]=e=t.$handleEvent(e),t.videoPause.apply(void 0,arguments)},fullscreenchange:function(e){arguments[0]=e=t.$handleEvent(e),t.viderFullscreen.apply(void 0,arguments)}}},[i("v-uni-cover-image",{staticClass:"stopPlayVideoBtn",attrs:{src:"/static/img/close.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stopPlayVideo.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"label"},t._l(t.labelList,(function(e,a){return i("v-uni-view",{key:e.type,class:{on:a==t.labelIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadRatings(a)}}},[t._v(t._s(e.name)+"("+t._s(e.number)+")")])})),1),i("v-uni-view",{staticClass:"list"},t._l(t.ratingsList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"row"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"face"},[i("v-uni-image",{attrs:{src:e.face}})],1)],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"name-date"},[i("v-uni-view",{staticClass:"username"},[t._v(t._s(e.username))]),i("v-uni-view",{staticClass:"date"},[t._v(t._s(e.date))])],1),i("v-uni-view",{staticClass:"spec"},[t._v(t._s(e.spec))]),i("v-uni-view",{staticClass:"first"},[i("v-uni-view",{staticClass:"rat"},[t._v(t._s(e.first.content))]),i("v-uni-view",{staticClass:"img-video"},[t._l(e.first.video,(function(e){return i("v-uni-view",{key:e.path,staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.playVideo(e.path)}}},[i("v-uni-image",{attrs:{mode:"aspectFill",src:e.img}}),i("v-uni-view",{staticClass:"playbtn"},[i("v-uni-view",{staticClass:"icon bofang"})],1)],1)})),t._l(e.first.img,(function(a){return i("v-uni-view",{key:a,staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showBigImg(a,e.first.img)}}},[i("v-uni-image",{attrs:{mode:"aspectFill",src:a}})],1)}))],2)],1),e.append?i("v-uni-view",{staticClass:"append"},[i("v-uni-view",{staticClass:"date"},[t._v(t._s(e.append.date)+"天后追加")]),i("v-uni-view",{staticClass:"rat"},[t._v(t._s(e.append.content))]),i("v-uni-view",{staticClass:"img-video"},[t._l(e.append.video,(function(e){return i("v-uni-view",{key:e.path,staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.playVideo(e.path)}}},[i("v-uni-image",{attrs:{mode:"aspectFill",src:e.img}}),i("v-uni-view",{staticClass:"playbtn"},[i("v-uni-view",{staticClass:"icon bofang"})],1)],1)})),t._l(e.append.img,(function(a){return i("v-uni-view",{key:a,staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showBigImg(a,e.append.img)}}},[i("v-uni-image",{attrs:{mode:"aspectFill",src:a}})],1)}))],2)],1):t._e()],1)],1)})),1)],1)],1)},n=[]},f8a0:function(t,e,i){var a=i("aa38");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("effb35ec",a,!0,{sourceMap:!1,shadowMode:!1})}}]);