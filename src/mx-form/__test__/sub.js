define("mx-form/__test__/sub",["magix","../index","./sub1"],(e,i,s)=>{e("./sub1");var _=e("magix"),a=e("../index");s.exports=_.View.extend({tmpl:{html:'<div class="_av _ai"><label class="_aw _ax">活动名称：</label><div class="_ay"><input mx-ssid="0" class="_ap" placeholder="请填写活动名称" value="<%=$$.nameX1%>" mx-change="__b({c:[{p:\'nameX1\',f:{required:true,blength:[20,50]}}]})" mx-focusout="__b()" mx-focusin="__b()"></div></div><div mx-ssid="1" mx-view="mx-form/__test__/sub1" mx-change="__b({c:[{p:\'name_sub1\',f:{from:\'name\'}}]})" mx-focusout="__b()" mx-focusin="__b()"></div>'},mixins:[a],init:function(e){this.updater.set(e)},render:function(){this.updater.digest()}})});