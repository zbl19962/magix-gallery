define("__test__/test",["magix","../mx-form/index","./ctrl","mx-pagination/index"],(t,e,i)=>{t("./ctrl"),t("mx-pagination/index");var n=t("magix");n.applyStyle("_f","._aR{color:red}");var a=t("../mx-form/index"),s=function(){n.State.digest({go:20})};i.exports=n.View.extend({tmpl:{html:'<div><div anim="true" style="background:red;" mx-view="__test__/ctrl"><div mx-view="mx-pagination/index?total=100&page=<%!$eu($$.list.length)%>"></div></div></div><div><%for(var _=0;_<10;_++){%><div style="float:left;margin:4px;padding:2px;border:solid 6px <%if($$.active==_){%>red<%}else{%>green<%}%>"><img src="http://iph.href.lu/80x40"></div><%}%></div><button type="button" class="_an _ao" mx-click="increase()">increase</button><button type="button" class="_an _ao _v" mx-click="decrease()">decrease</button><button type="button" class="_an _ao _v" mx-click="start()">start</button>'},mixins:[a],init:function(){this.observeState("go"),s()},render:function(){this.updater.digest({list:[1,2],Math:Math});new Promise(function(t,e){setTimeout(function(){t("ok")},2e3)}).then(this.wrapAsync(function(t){return new Promise(function(t,e){setTimeout(function(){t("_aS")},2e3)})})).then(this.wrapAsync(function(t){}))},"increase<click>":function(){var t=this.updater.get("list");t.push(n.guid()),this.updater.digest({list:t})},"decrease<click>":function(){this.owner.mountVframe("vf_1_"+this.id,"__test__/test")},"remove<click>":function(t){var e=this.updater.get("list");e.splice(t.params.i,1),this.updater.digest({list:e})},"start<click>":function(){var t=this,e=0;setInterval(function(){++e>=10&&(e=0),t.updater.digest({active:e})},150)}})});