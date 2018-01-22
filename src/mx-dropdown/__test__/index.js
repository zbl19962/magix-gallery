define("mx-dropdown/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(e,t,i)=>{e("../index"),e("__test__/hl");var n=e("magix"),a=e("mx-gtip/index");i.exports=n.View.extend({tmpl:{html:'<h2>mx-dropdown</h2><h3>默认</h3><div class="_B _ai"><div mx-change="showWeek()" style="width:150px;" mx-view="mx-dropdown/index?searchbox=<%@$$.searchbox%>&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i value="mon" class="_ah">周一</i><i value="wed" class="_ah">周三</i><i value="thu" class="_ah">周四</i><i value="fri" class="_ah">周五</i><i value="sat" class="_ah">周六</i></div><button mx-click="test()" class="_an _s _ao">toggle searchbox</button><div mx-change="showWeek()" class="_v" style="width:150px;border-radius: 4px 0 0 4px;" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&disabled=true"><i value="mon" class="_ah">周一</i><i value="wed" class="_ah">周三</i><i value="thu" class="_ah">周四</i><i value="fri" class="_ah">周五</i><i value="sat" class="_ah">周六</i></div><div mx-change="showWeek()" style="width:150px;margin-left:-1px; border-radius: 0 4px 4px 0" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i value="mon" class="_ah">周一</i><i value="wed" class="_ah">周三</i><i value="thu" class="_ah">周四</i><i value="fri" class="_ah">周五</i><i value="sat" class="_ah">周六</i></div></div><div class="_B"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-dropdown\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeek()"\n    class="fl" style="width:150px;"&gt;\n    &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre><div class="_z">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeek&lt;change&gt;\' (e) {\n        this.gtipRB(\'text:\' + e.text + \',value:\' + e.value);\n    }\n});</pre></div><h3 class="_f">单选带分组</h3><div class="_B _ai"><div mx-change="showWeek()" class="_aa" style="width:150px;" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i group="true" class="_ah">本周日期</i><i value="mon" class="_ah">周一</i><i value="wed" class="_ah">周三</i><i value="thu" class="_ah">周四</i><i value="fri" class="_ah">周五</i><i value="sat" class="_ah">周六</i><i group="true" class="_ah">下周日期</i><i value="next-mon" class="_ah">下周一</i><i value="next-wed" class="_ah">下周三</i><i value="next-thu" class="_ah">下周四</i><i value="next-fri" class="_ah">下周五</i><i value="next-sat" class="_ah">下周六</i></div></div><div class="_B"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-dropdown\n    searchbox="true"\n    empty-text="请选择日期"\n    mx-change="showWeek()"\n    class="fl" style="width:150px;"&gt;\n    &lt;mx-dropdown.item group="true"&gt;本周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="fri"&gt;周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="sat"&gt;周六&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item group="true"&gt;下周日期&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-mon"&gt;下周一&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-wed"&gt;下周三&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-thu"&gt;下周四&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-fri"&gt;下周五&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="next-sat"&gt;下周六&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre><div class="_z">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showWeek&lt;change&gt;\' (e) {\n        this.gtipRB(\'text:\' + e.text + \',value:\' + e.value);\n    }\n});</pre></div><h3 class="_f">动态数据并设置选中</h3><div class="_B _ai"><div mx-change="showUser()" class="_aa" style="width:200px;" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@$$.userSelected%>&list=<%@$$.userList%>"></div></div><div class="_B"><div>HTML Code:</div><pre lang="html" mx-view="__test__/hl">&lt;mx-dropdown\n    searchbox="true"\n    empty-text="请选择用户"\n    text-key="name"\n    value-key="id"\n    selected="&lt;%@ userSelected %&gt;"\n    list="&lt;%@ userList %&gt;"\n    mx-change="showUser()"\n    class="fl" style="width:200px;"&gt;\n&lt;/mx-dropdown&gt;</pre><div class="_z">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: \'xinglie\',\n                id: 58782\n            }, {\n                name: \'xinglie1\',\n                id: 587821\n            }, {\n                name: \'xinglie2\',\n                id: 587822\n            }, {\n                name: \'xinglie3\',\n                id: 587823\n            }, {\n                name: \'xinglie4\',\n                id: 587824\n            }, {\n                name: \'xinglie5\',\n                id: 587825\n            }, {\n                name: \'xinglie6\',\n                id: 587826\n            }, {\n                name: \'xinglie7\',\n                id: 587827\n            }, {\n                name: \'xinglie8\',\n                id: 587828\n            }, {\n                name: \'xinglie9\',\n                id: 587829\n            }],\n            userSelected: 587828\n        });\n    },\n    \'showUser&lt;change&gt;\' (e) {\n        this.gtipRB(\'name:\' + e.text + \',id:\' + e.value);\n    }\n});</pre></div>'},mixins:[a],render:function(){this.updater.digest({userList:[{name:"xinglie",id:58782},{name:"xinglie1",id:587821},{name:"xinglie2",id:587822},{name:"xinglie3",id:587823},{name:"xinglie4",id:587824},{name:"xinglie5",id:587825},{name:"xinglie6",id:587826},{name:"xinglie7",id:587827},{name:"xinglie8",id:587828},{name:"xinglie9",id:587829}],userSelected:587828,usersSelected:[58782,587829]})},"showWeek<change>":function(e){this.gtipRB("text:"+e.text+",value:"+e.value)},"showUser<change>":function(e){this.gtipRB("name:"+e.text+",id:"+e.value)},"showWeeks<change>":function(e){this.gtipRB("values:"+e.values)},"showUsers<change>":function(e){this.gtipRB("user ids:"+e.values)},"test<click>":function(e){this.updater.digest({searchbox:!this.updater.get("searchbox")})}})});