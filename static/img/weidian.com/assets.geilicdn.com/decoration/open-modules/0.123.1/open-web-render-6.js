(window.openRenderLibJsonp=window.openRenderLibJsonp||[]).push([[6],{108:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(o(79)),i=d(o(151)),s=d(o(106)),r=d(o(101));function d(e){return e&&e.__esModule?e:{default:e}}t.default={findNodesHandler:function(e){for(var t=[],o=0;o<e.length;o++){var n=(0,r.default)(e[o],6),i=n[0],s=n[1],d=n[2],u=n[3],a=n[4],l=n[5];this.findNodesActionHandle(t,i,s,d,u,a,l)}return t},findNodesActionHandle:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2],d=arguments[3],u=arguments[4],a=arguments[5],l=arguments[6],p=t,c=null,h=void 0;p.nodes&&o>0;){p=p.nodes;for(var f=0;f<p.length;f++)this.findNodesActionHandle(e,p[f],o-1,d,u,a,l)}if(0==o){var m=function(e,t){var o=(0,s.default)(e),n=(0,r.default)(o,2),i=(n[0],n[1]);return!!t[i]&&(0,s.default)(e[i]).every(function(o){return e[i][o]===t[i][o]})},v=function(e,t){var o=!1;return"string"==typeof e&&t.type===e?o=!0:"object"===(void 0===e?"undefined":(0,i.default)(e))&&t.type===e.type&&m(e,t)&&(o=!0),o};switch(u){case"FIND":v(d,p)&&p&&e.push(p);break;case"DELETE":c=p.nodes&&p.nodes.find(function(e){return"string"==typeof d&&e.type===d?e:"object"===(void 0===d?"undefined":(0,i.default)(d))&&e.type===d.type&&m(d,e)?e:void 0}),h=p.nodes&&p.nodes.indexOf(c),p.length>0&&h>-1&&p.splice(h,1);break;case"UPDATE":if(v(d,p)){var y=p[a];p[a]=(0,n.default)({},y,l)}}return e}}}},279:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCouponListByShop=function(e,t,o){var i=e.shop_id,s=e.buyer_id;(0,n.ThorMin)("/vmpcoupon/getCouponListByShop/1.0",{shop_id:i,buyer_id:s,page_size:100,querySource:"shopDetail",includeShopDiscountCoupon:!0},t,o)},t.fetchShopCoupon=function(e,t,o){var i=e.shopId,s=e.retailId,r=e.couponId;(0,n.ThorMin)("/vmpcoupon/fetchShopCoupon/1.0",{shop_id:i,retail_id:s||i,coupon_id:r,type:"h5"},t,o,"GET",!0)},t.batchFetchShopCoupon=function(e,t,o){var i=e.couponList,s=e.userId;(0,n.ThorMin)("/vmpcoupon/buyer.batchFetchShopCoupon/1.0",{couponQueryList:i.map(function(e){return e.appId="shop_"+s+"_"+Date.now()+"_"+e.retailId+"_"+e.couponId,e}),fromScope:"vmpcoupon"},t,o,"GET",!0)};var n=o(82)},512:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(o(105)),i=d(o(80)),s=o(89),r=d(o(698));function d(e){return e&&e.__esModule?e:{default:e}}t.default={methods:{setDataTemplate:function(e){(0,s.setDataTemplate)({template:e,customModuleStyleOption:r.default,model:this.model,pageStyle:this.pageStyle}),this.isPC&&this.$set(this.model,"moduleDefaultStyle",JSON.parse((0,i.default)(r.default)))},findLimit:function(e){if(!e.nodes)return!1;var t=!0,o=!1,i=void 0;try{for(var s,r=(0,n.default)(e.nodes);!(t=(s=r.next()).done);t=!0){var d=s.value;if("list"===d.type)return d.attr?d.attr.limit:void 0}}catch(e){o=!0,i=e}finally{try{!t&&r.return&&r.return()}finally{if(o)throw i}}}}}},513:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MainMixin=t.StoreMixin=t.couponStore=void 0;var n=o(83),i=o(279),s=window.API,r=s.env,d=s.Bus,u=s.Echo,a=s.navUrl,l=s.isLogin,p=s.urlQuery,c=r.get(),h=r.get("envStr"),f=t.couponStore={received:[],listeners:[],receive:function(e,t){-1===this.received.indexOf(e)&&this.received.push(e),this.listeners.forEach(function(o){o&&o(e,t)})},onReceive:function(e){this.listeners.push(e)}};t.StoreMixin={mounted:function(){var e=this;f.onReceive(function(t,o){console.log(28,"行: (id, updateData)",t,o),e.updateCoupon(t,o)})},methods:{syncReceiveCoupon:function(e,t){f.receive(e,t)}}},t.MainMixin={data:function(){return{ArrayCache:[],shopId:c.shopId,userId:c.userId,shopOffs:c.shopOffs,moneyOff:c.moneyOff,freeShipping:c.freePostageEnterShow,shopMoneyFreePostages:c.shopMoneyFreePostages,shopNumFreePostages:c.shopNumFreePostages,isShowArrow:!0,isDecorate:c.isDecorate,isPC:c.isPC,isMock:c.isMock}},computed:{offs:function(){return this.moneyOff?this.moneyOff:this.shopOffs&&this.shopOffs.length?this.shopOffs.reduce(function(e,t){var o=e;return o+="满"+parseInt(t.full_price||t.fullPrice)+"元减"+parseInt(t.reduce_price||t.reducePrice)+"元 "},"").replace(/；$/,""):""},isShow:function(){return this.model.showContent&&this.model.showContent.length>0||this.model.content&&this.model.content.length>0||this.offs||this.freeShipping},isBuyerView:function(){return"rt"===this.env&&!r.get("isDecorate")}},watch:{offs:function(e){e&&u&&this.$nextTick(u.render)},freeShipping:function(e){e&&u&&this.$nextTick(u.render)}},created:function(){var e=this,t=this;if(t.model&&t.template){if(t.toggleContent&&t.toggleContent(),"rt"===this.env&&!0!==this.isMock||p&&p("mock")){var o=this.model.isMock;return o||this.$set(this.model,"content",[]),this.getCouponList(function(n){n&&n.length>0?(o&&t.$emit("removeMockData"),e.isBuyerView&&n.find(function(e){return 1===e.isCouponGift})&&document.addEventListener("visibilitychange",e.visibilitychangeHandler),t.$set(e.model,"content",n),t.mergeData()):(o||e.isDecorate)&&(t.$emit("setMockData"),e.model.mock_data&&(e.model.content=e.model.mock_data.content),e.shopOffs=e.model.shopOffs,e.freeShipping=e.model.freePostageEnterShow),t.toggleContent&&t.toggleContent()}),!1}("rt"!==this.env||this.isMock)&&(this.shopOffs=this.model.shopOffs||c.shopOffs,this.freeShipping=this.model.freePostageEnterShow||c.freePostageEnterShow)}},beforeDestroy:function(){this.isBuyerView&&document.removeEventListener("visibilitychange",this.visibilitychangeHandler)},methods:{visibilitychangeHandler:function(){var e=this,t=this;"visible"===document.visibilityState&&this.getCouponList(function(o){o&&o.length>0&&(t.$set(e.model,"content",o),t.mergeData()),t.toggleContent&&t.toggleContent()})},getCouponList:function(e){return(0,n.GetSectionInfo)(this.model,{shopId:c.shopId,couponSize:this.model.couponSize,couponIds:this.model.couponIds,couponGiftSize:this.model.couponGiftSize,couponGiftIds:this.model.couponGiftIds,queryType:this.model.queryType,orderType:this.model.orderType}).then(function(t){var o=t.result,n=o&&o.couponList&&o.couponList.map(function(e){return{id:e.couponId,status:e.status,end_time:e.endTime,start_time:e.startTime,reduceType:e.reduceType,appOnly:e.appOnly,shop_id:e.shopId,full:e.fullAmount,reduceText:e.reduceText,scopeText:e.couponScopeText,thresholdText:e.thresholdText,item_id:e.itemIds,couponName:e.couponTitleForBuyer,hasUseLimit:e.hasUseLimit,validTimeText:e.validTimeText,alreadyFetchCnt:e.alreadyFetchCnt,couponNum:e.couponNum,isCouponGift:e.isCouponGift,giftType:e.giftType}});e&&e(n)})},updateCoupon:function(e,t){var o=this.model.content.find(function(t){return t.id===e});if(!o||!t)return!1;if(4===t.status){var n=this.model.content,i=n.findIndex(function(e){return e.id===o.id});return i>-1&&n.splice(i,1)}for(var s in t)void 0!==o[s]&&(o[s]=t[s]);this.mergeData()},receiveCoupon:function(e,t){var o=this;return!o.isDecorate&&(!e.status&&(e.status=3,void(e.isCouponGift?window.location.href="https://h5."+h+"weidian.com/m/mkt-h5-coupon-bag/activity.html?couponPackageId="+e.id+"&shopId="+o.shopId:l(!0)&&(0,i.fetchShopCoupon)({retailId:o.shopId,shopId:e.shopId,couponId:e.id},function(t){if(t){var n=t.buyer_coupon_status,i={status:n,validTimeText:"",end_time:t.dynamicEndTimeText};if(0!=n&&2==e.reduceType&&(i.reduceText=t.reduce),o.syncReceiveCoupon(e.id,i),2!=e.reduceType){if(!e.appOnly||r.get("isBuyerAppOnly")||r.get("isMall"))d.emit("showToast",{content:"领取成功",delay:1500});else if(0===e.item_id.length){var s={title:"领取成功",content:'成功添加到 "我的订单"-"卡券包"\n有效期至'+e.endTime+"\n券面额："+t.reduceText};s.content='成功添加到 "我的订单"-"卡券包"\n本优惠券仅可在微店App使用\n有效期至'+e.endTime,s.buttons=["取消",{txt:"去微店APP",exe:function(e){e(),a(c.appUrl,"goAppFromCoupon")}}],d.emit("showConfirm",s)}}else d.emit("showCouponSuccessDialog",{price:t.reduce,fullPrice:e.full})}},function(t){e.status=0,d.emit("showToast",{content:t&&t.status&&t.status.message||"领取优惠券失败"})}))))},showRemoteArea:function(){if(!window.isPreview){var e=[],t=[],o=[];this.shopMoneyFreePostages&&this.shopMoneyFreePostages.map(function(e){t.push(e.freeInfo)}),this.shopNumFreePostages&&this.shopNumFreePostages.map(function(e){o.push(e.freeInfo)}),t.length&&(e.push({tag:"满金额包邮"}),e.push({txt:t.join("\n\n")})),o.length&&(e.push({tag:"满件数包邮"}),e.push({txt:o.join("\n\n")})),0==e.length&&(e=this.freeShipping),d.emit("showConfirm",{title:"【店铺包邮规则】",content:e,textAlign:"left"})}}}}},514:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=o(101),s=(n=i)&&n.__esModule?n:{default:n};function r(e){var t="string"==typeof e?e.replace(/\./g,"/").split(" ")[0]:e,o=new Date(t),n=o.getFullYear(),i=o.getMonth()+1,s=o.getDate();return n+"."+(i>=10?i:"0"+i)+"."+(s>=10?s:"0"+s)}t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9999,o=e.id,n=e.type,i=e.couponName,d=e.couponTitleForBuyer,u=e.status,a=e.reduceType,l=e.couponNum,p=e.isCouponGift,c=e.reduceText&&function(e){var t=e.split("."),o=(0,s.default)(t,2),n=o[0],i=o[1];i=i&&0===parseInt(i)?"":"."+i;return parseFloat(n+i)}(e.reduceText)||"",h=-1===String(e.full).indexOf(".")?parseInt(e.full)/100:parseFloat(e.full),f="",m=e.thresholdText;switch(t>0&&c>t&&(c=t+"+"),Number(a)){case 0:f="￥";break;case 1:c+="折";break;case 2:f=0===u?"最高":"￥";break;case 3:if(m){var v=m.match(/\d+(\.\d+)?/g);h=v&&v[0]}f="兑换商品";break;case 4:if(m){var y=m.match(/\d+(\.\d+)?/g);h=y&&y[0]}f="赠品券"}var g="满"+h+"可用";h&&"无门槛"!==m||(g=h="无门槛"),p&&(g=h=l+"张优惠券",f="超值券包");var C,T=e.start_time&&e.end_time&&r(e.start_time)+"-"+r(e.end_time)||"";return e.validTimeText&&!e.alreadyFetchCnt&&(T=e.validTimeText),{id:o,buyerLimit:e.buyer_limit,type:n,typeName:e.scopeText||("shop"===n?"全店通用":"限定商品"),reduce:c,full:h,fullTxt:g,status:u,shopId:e.shop_id,appOnly:e.shop_coupon&&e.shop_coupon.app_only||e.appOnly,hideReceived:0===e.status,hideUnreceived:e.status>0,hideSoldOut:e.status<2,hideReceivedBg:1!==e.status,endTime:"string"==typeof e.end_time?e.end_time.replace(/\./g,"/").split(" ")[0]:(C=new Date(e.end_time),C.getFullYear()+"/"+(C.getMonth()+1)+"/"+C.getDate()),prefixReduce:f,item_id:e.item_id,reduceType:a,validTimeTxt:T,couponName:i||d,isCouponGift:p}}},698:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={1001:{moduleBgColor:{expr:"template['style']['backgroundColor']",value:""},fontColor:{expr:[{parentNode:"template['nodes'][0]['nodes'][0]",findOption:{type:"cell",relation:{hide:"hideUnreceived"}},childrenIndexArr:[0,1],updatedCss:"color"},{parentNode:"template['nodes'][0]['nodes'][0]",findOption:{type:"cell",childLength:3},childrenIndexArr:[0,1,2],updatedCss:"color"}],value:""},tagBgColor:{expr:"template['nodes'][0]['nodes'][0]['nodes'][7]['style']['backgroundColor']",value:""},tagFontColor:{expr:"template['nodes'][0]['nodes'][0]['nodes'][7]['style']['color']",value:""},fullFontColor:{expr:[{parentNode:"template",multiple:!0,findOption:{type:"cell"},childrenIndexArr:[{type:"txt"}],updatedCss:"color"}],value:""}},1002:{moduleBgColor:{expr:"template['style']['backgroundColor']",value:""},nameFontColor:{expr:[{parentNode:"template['nodes'][0]['nodes'][0]",findOption:{relation:{value:"couponName",hide:"hideUnreceived3"}},updatedCss:"color"}]},fontColor:{expr:[{parentNode:"template['nodes'][0]['nodes'][0]",findOption:{type:"cell",relation:{hide:"hideUnreceived"}},childrenIndexArr:[0,1],updatedCss:"color"},{parentNode:"template['nodes'][0]['nodes'][0]",findOption:{relation:{value:"fullTxt",hide:"hideUnreceived"}},updatedCss:"color"}],value:""},tagFontColor:{expr:[{parentNode:"template['nodes'][0]['nodes'][0]",multiple:!0,findOption:{relation:{value:"typeName",hide:"hideUnreceived"}},updatedCss:"color"},{parentNode:"template['nodes'][0]['nodes'][0]",multiple:!0,findOption:{relation:{value:"typeName",hide:"hideUnreceived2"}},updatedCss:"color"},{parentNode:"template['nodes'][0]['nodes'][0]",multiple:!0,findOption:{relation:{value:"typeName",hide:"hideUnreceived3"}},updatedCss:"color"}],value:""},timeFontColor:{expr:[{parentNode:"template['nodes'][0]['nodes'][0]",multiple:!0,findOption:{relation:{value:"validTimeTxt",hide:"hideUnreceived"}},updatedCss:"color"},{parentNode:"template['nodes'][0]['nodes'][0]",multiple:!0,findOption:{relation:{value:"validTimeTxt",hide:"hideUnreceived2"}},updatedCss:"color"},{parentNode:"template['nodes'][0]['nodes'][0]",multiple:!0,findOption:{relation:{value:"validTimeTxt",hide:"hideUnreceived3"}},updatedCss:"color"}],value:""},fullFontColor:{expr:[{parentNode:"template",multiple:!0,findOption:{type:"cell"},childrenIndexArr:[{type:"txt"}],updatedCss:"color"}],value:""}}}}}]);