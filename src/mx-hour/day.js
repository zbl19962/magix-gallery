define("mx-hour/day",["magix","$","./index"],(i,t,e)=>{var a=i("magix"),n=i("$"),_=i("./index");a.applyStyle("_w","._dB{padding:0;height:38.4px;text-align:center}"),e.exports=a.View.extend({tmpl:{html:'<table class="_W"><thead><tr><%for(var _=0;_<24;_++){%><th class="_dB"><%=(\'0\'+_).slice(-2)%></th><%}%></tr></thead><tbody id="range_<%=$$.viewId%>" mx-view="mx-hour/index" mx-change="__cV()"></tbody></table>'},init:function(i){this.__cU=i.hours,this.__i=n("#"+this.id)},render:function(){this.updater.digest({viewId:this.id}),this.val(this.__cU)},val:function(i){return i&&(this.__cU=_.improve(i),n("#range_"+this.id).invokeView("val",[i])),this.__cU},"__cV<change>":function(i){i.stopPropagation(),this.__cU=i.range,this.__i.val(i.range).trigger({type:"change",hours:i.range})}})});