define("mx-tree/index",["magix","./branch"],(e,t,i)=>{e("./branch");var p=e("magix");p.applyStyle("_Q",'._fG{padding-left:15px}._fH{line-height:22px;padding:0 4px;position:relative;border-left:1px solid #e6e6e6}._fH:before{content:"";position:absolute;border-top:1px solid #e6e6e6;width:12px;left:0;top:10px}._fI{width:14px;height:14px;float:left;text-align:center;font-weight:800;margin-left:-11px;margin-top:-2px;position:relative;z-index:2}._fJ{display:inline-block;background-color:#fff;width:10px;height:10px;line-height:6px;border:1px solid #e6e6e6;font-size:11px}._fK{margin-left:10px}._fL{padding:0}._fM{border-left-color:transparent}._fM:after{border-left:1px solid #e6e6e6;top:-2px}._fM:after,._fN:after{content:"";position:absolute;left:-1px;width:1px;height:13px}._fN:after{border-left:1px solid #fff;top:-3px}._fO{padding:1px 3px;line-height:1}._fP{margin:2px 2px 0 0}'),i.exports=p.View.extend({tmpl:{html:'<div id="tree_<%=$$.id%>" mx-view="mx-tree/branch?valueKey=<%!$eu($$.valueKey)%>&textKey=<%!$eu($$.textKey)%>&parentKey=<%!$eu($$.parentKey)%>&fromTop=<%@true%>&list=<%@$$.list%>"></div>'},init:function(e){this.__c=e},render:function(){var e=this.__c,t=e.valueKey||"id",i=e.parentKey||"pId",r=function(e,t,i){for(var r={},n={},l=[],o=0,f=e.length;o<f;o++){var x=p.mix({},e[o]);r[x[t]]=x,n[x[t]]&&(x.children=n[x[t]]),p.has(x,i)&&""!==x[i]?r[x[i]]?(r[x[i]].children||(r[x[i]].children=[])).push(x):n[x[i]]?n[x[i]].push(x):n[x[i]]=[x]:l.push(x)}return{list:l,map:r}}(e.list,t,i);this.updater.digest({id:this.id,valueKey:t,parentKey:i,textKey:e.textKey||"text",list:r.list})}})});