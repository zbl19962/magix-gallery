define("mx-color/picker",["magix","$","../mx-monitor/index","./index"],(i,t,_)=>{var o=i("magix"),e=i("$"),n=i("../mx-monitor/index");i("./index"),_.exports=o.View.extend({tmpl:{html:'<div mx-change="__aJ()" id="cpcnt_<%=$$.viewId%>"></div>'},init:function(i){var t=this;t.__J=i.placement,t.__K=i.align,t.__av=i.showAlpha,n.__d();var _=e("#"+t.id);t.__au=i.color||_.val(),t.__e=_,(_=_.prev("input")).prop("vframe",t.owner);var o=function(){t.__f()},h=function(i){i.color||i.stopPropagation()};t.on("destroy",function(){n.__g(t),n.__h(),_.off("click",o).off("change",h)}),_.on("click",o).on("change",h),t.__i=_,_.prop("autocomplete","off")},__j:function(i){return o.inside(i,this.id)||o.inside(i,"temp_"+this.id)||o.inside(i,this.__i[0])},render:function(){this.updater.digest({viewId:this.id})},__f:function(){if(!this.__k){var i=this.__e,t=this.__i;this.__k=!0,i.show(),this.__m||(this.__m=!0,this.owner.mountVframe("cpcnt_"+this.id,"mx-color/index",{showBtns:!0,showAlpha:this.__av,color:this.__au})),n.__l(this);var _=t.offset(),o=void 0,e=void 0;switch(this.__J){case"top":e=_.top-i.outerHeight()-5;break;default:e=_.top+t.outerHeight()+5}switch(this.__K){case"right":o=_.left+t.outerWidth()-i.outerWidth();break;default:o=_.left}i.offset({left:o,top:e})}},__a:function(){this.__k&&(this.__e.hide(),this.__k=!1,n.__g(this))},"__aJ<change>":function(i){i.stopPropagation(),this.__a(),this.__i.val(i.color).trigger({type:"change",color:i.color})}})});