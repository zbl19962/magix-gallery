define("mx-checkbox/linkage",["$","magix"],(n,e,i)=>{var t=n("$"),a=n("magix"),r=function(n,e,i){var t=n.find("input[linkage="+i+"]"),a=n.find("input[linkage-parent="+i+"]"),r=!1,c=!1,u=t[0]==e,d=e&&e.checked;a.each(function(n,e){u&&(e.checked=d),e.checked?r=!0:c=!0}),t.prop("indeterminate",!1),r&&!c?t.prop("checked",!0):c&&!r?t.prop("checked",!1):r&&t.prop("indeterminate",!0)},c=function(n,e){var i=function(n){var e={};return(n=t(n)).find("input[linkage-parent]").each(function(n,i){var a=t(i).attr("linkage-parent");e[a]=1}),n.find("input[linkage]").each(function(n,i){var a=t(i).attr("linkage");e[a]=1}),a.keys(e)}(n=t(n));if(i.length)for(var c=0,u=i;c<u.length;c++){var d=u[c];r(n,e,d)}};i.exports={ctor:function(){var n=this;n.on("rendered",function(){c("#"+n.id)}),n.on("domready",function(){c("#"+n.id)})},getSelectedIds:function(n){var e=[];return t("#"+this.id+" input:checked").each(function(i,a){var r=a.value,c=t(a).attr("linkage-parent");c&&r&&(!n||n&&n==c)&&e.push(a.value)}),e},"$input[linkage-parent]<change>":function(n){c("#"+this.id,n.eventTarget)},"$input[linkage]<change>":function(n){c("#"+this.id,n.eventTarget)}}});