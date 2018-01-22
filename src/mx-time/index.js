define("mx-time/index",["magix","$"],(t,e,_)=>{var i=t("magix"),a=t("$");i.applyStyle("_N","._fy{width:58px;float:left;overflow:hidden}._fz{font-size:30px;height:50px;text-align:center;margin-bottom:10px}._fA{width:28px;height:28px;padding:0}._fB{font-size:27px;float:left;line-height:32px;margin-top:8px;font-weight:bolder;display:inline-block;width:30px;text-align:center}");var n=function(t){if(!t){var e=new Date;t=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}var _=t.split(":");if(3!=_.length)throw new Error("bad time:"+t);return{__cV:parseInt(_[0],10)||0,__gt:parseInt(_[1],10)||0,__gu:parseInt(_[2],10)||0}},s=function(t){return t<10?"0"+t:t};_.exports=i.View.extend({tmpl:{html:'<div class="_fy"><input class="_ap _fz" value="<%=$$.format($$.time[\'__cV\'])%>" <%if($$.types[\'__cV\']){%> mx-change="__gx({type:\'__cV\'})" <%}else{%> disabled<%}%> maxlength="2" mx-keydown="__dY({type:\'__cV\'})" autocomplete="off"><button type="button" class="_an _fA _aa" <%if($$.types[\'__cV\']){%> mx-click="__gw({type:\'__cV\'})" mx-mousedown="__dX({type:\'__cV\'})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button type="button" class="_an _fA _ab" <%if($$.types[\'__cV\']){%> mx-click="__gw({type:\'__cV\',inc:1})" mx-mousedown="__dX({type:\'__cV\',inc:1})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div><span class="_fB">:</span><div class="_fy"><input class="_ap _fz" value="<%=$$.format($$.time[\'__gt\'])%>" <%if($$.types[\'__gt\']){%> mx-change="__gx({type:\'__gt\'})" <%}else{%> disabled<%}%> maxlength="2" mx-keydown="__dY({type:\'__gt\'})" autocomplete="off"><button type="button" class="_an _fA _aa" <%if($$.types[\'__gt\']){%> mx-click="__gw({type:\'__gt\'})" mx-mousedown="__dX({type:\'__gt\'})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button type="button" class="_an _fA _ab" <%if($$.types[\'__gt\']){%> mx-click="__gw({type:\'__gt\',inc:1})" mx-mousedown="__dX({type:\'__gt\',inc:1})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div><span class="_fB">:</span><div class="_fy"><input class="_ap _fz" value="<%=$$.format($$.time[\'__gu\'])%>" <%if($$.types[\'__gu\']){%> mx-change="__gx({type:\'__gu\'})" <%}else{%> disabled<%}%> maxlength="2" mx-keydown="__dY({type:\'__gu\'})" autocomplete="off"><button type="button" class="_an _fA _aa" <%if($$.types[\'__gu\']){%> mx-click="__gw({type:\'__gu\'})" mx-mousedown="__dX({type:\'__gu\'})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button type="button" class="_an _fA _ab" <%if($$.types[\'__gu\']){%> mx-click="__gw({type:\'__gu\',inc:1})" mx-mousedown="__dX({type:\'__gu\',inc:1})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div>'},init:function(t){var e=n(t.time),_=function(t){t||(t="all");var e={__cV:!0,__gt:!0,__gu:!0},_={hour:"__cV",minute:"__gt",second:"__gu"};if("all"!=t)for(var i in _)-1===t.indexOf(i)&&delete e[_[i]];return e}(t.types);this.updater.set({format:s,time:e,types:_})},render:function(){this.updater.digest()},val:function(t){var e=this.updater;if(t){var _=n(t);e.digest({time:_})}return e.get("time")},__gv:function(t,e){var _=this.updater.get("time"),i="__cV"==t?23:59;e?_[t]++:_[t]--,_[t]>i?_[t]=0:_[t]<0&&(_[t]=i),this.updater.digest({time:_})},__v:function(){var t=a("#"+this.id),e=this.updater.get("time");t.trigger({type:"change",time:s(e.__cV)+":"+s(e.__gt)+":"+s(e.__gu)})},"__gw<click>":function(t){if(!this.__dU){var e=t.params;this.__gv(e.type,e.inc),this.__v()}},"__gx<change>":function(t){t.stopPropagation();var e=t.params.type,_="__cV"==e?23:59,i=t.eventTarget,a=i.value,n=parseInt(a,10),d=this.updater.get("time");n||0===n?(n<0?n=0:n>_&&(n=_),n!==d[e]?(d[e]=n,this.updater.digest({time:d}),this.__v()):i.value=s(n)):i.value=s(d[e])},"__dX<mousedown>":function(t){var e=this,_=t.params;e.__dV=setTimeout(e.wrapAsync(function(){e.__dW=setInterval(e.wrapAsync(function(){e.__dU=!0,e.__gv(_.type,_.inc)}),50)}),300)},"__dY<keydown>":function(t){if(38==t.keyCode||40==t.keyCode){t.preventDefault();var e=this;e.__gv(t.params.type,38==t.keyCode),clearTimeout(e.__gy),e.__gy=setTimeout(e.wrapAsync(function(){e.__v()}),100)}},"$doc<mouseup>":function(){var t=this;clearTimeout(t.__dV),clearInterval(t.__dW),setTimeout(t.wrapAsync(function(){t.__dU&&t.__v(),delete t.__dU}),0)}})});