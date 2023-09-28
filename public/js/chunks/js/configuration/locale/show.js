(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[277],{5088:(t,n,o)=>{"use strict";o.d(n,{Z:()=>r});var e=o(94015),s=o.n(e),a=o(23645),l=o.n(a)()(s());l.push([t.id,".list-group-item .active{color:#fff}","",{version:3,sources:["webpack://./resources/js/views/configuration/locale/show.vue"],names:[],mappings:"AAsJA,yBAAA,UAAA",sourcesContent:['<template>\n    <div>\n        <div class="page-titles">\n            <div class="row">\n                <div class="col-12 col-sm-6">\n                    <h3 class="text-themecolor">{{trans(\'configuration.translation\')}} ({{locale.name}}) </h3>\n                </div>\n                <div class="col-12 col-sm-6">\n                    <div class="action-buttons pull-right">\n                        <button class="btn btn-info btn-sm" @click="$router.push(\'/configuration/locale\')"><i class="fas fa-globe"></i> <span class="d-none d-sm-inline">{{trans(\'configuration.locale\')}}</span></button>\n                        <div class="btn-group">\n                            <button type="button" style="margin-top:-5px;" class="btn btn-info btn-sm" href="#" role="button" id="moduleLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                <i class="fas fa-boxes"></i> <span class="d-none d-sm-inline">{{trans(\'configuration.locale_module\')}} <span>({{toWord(module)}})</span> <i class="fas fa-chevron-down"></i> </span>\n                            </button>\n                            <div :class="[\'dropdown-menu\',getConfig(\'direction\') == \'ltr\' ? \'dropdown-menu-right\' : \'\']" aria-labelledby="moduleLink">\n                                <button style="cursor:pointer;" class="dropdown-item" v-for="mod in modules" @click="$router.push(\'/configuration/locale/\'+locale.locale+\'/\'+mod)">\n                                    {{toWord(mod)}} <span v-if="mod == module" class="pull-right"><i class="fas fa-check"></i></span> \n                                </button>\n                            </div>\n                        </div>\n                        <help-button @clicked="help_topic = \'configuration.locale.translation\'"></help-button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="container-fluid">\n            <div class="card">\n                <div class="card-body p-4">\n                    <div v-if="getWordCount">\n                        <div class="row">\n                            <template v-for="(word,index) in words">\n                                <template v-if="typeof word === \'object\'">\n                                    <div class="col-12 col-sm-4" v-for="(wrd,i) in word">\n                                        <div class="form-group">\n                                            <label for="" style="color:red;">{{trans(module+\'.\'+index+\'.\'+i)}}</label>\n                                            \x3c!-- <label for="">{{index}}_{{i}}</label> --\x3e\n                                            <input class="form-control" type="text" v-model="words[index][i]" :name="`${index}_${i}`">\n                                        </div>\n                                    </div>\n                                </template>\n                                <template v-else>\n                                    <div class="col-12 col-sm-4">\n                                        <div class="form-group">\n                                            <label for="" class="font-weight-bold">{{trans(module+\'.\'+index)}}</label>\n                                            \x3c!-- <label for="">{{index}}</label> --\x3e\n                                            <input class="form-control" type="text" v-model="words[index]" :name="index">\n                                        </div>\n                                    </div>\n                                </template>\n                            </template>\n                        </div>\n                        <div class="form-group">\n                            <button class="btn btn-info btn-sm pull-right" @click="saveTranslation">{{trans(\'general.save\')}}</button>\n                        </div>\n                    </div>\n                    <div v-if="!getWordCount">\n                        <p class="alert alert-danger">{{trans(\'general.no_result_found\')}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <right-panel :topic="help_topic"></right-panel>\n    </div>\n</template>\n\n\n<script>\n    export default {\n        data() {\n            return {\n                modules: {},\n                words: {},\n                locale: {},\n                module: (this.$route.params.module) ? this.$route.params.module : \'auth\',\n                help_topic: \'\'\n            };\n        },\n        mounted(){\n            if(!helper.hasPermission(\'access-configuration\')){\n                helper.notAccessibleMsg();\n                this.$router.push(\'/dashboard\');\n            }\n\n            if(!helper.featureAvailable(\'multilingual\')){\n                helper.featureNotAvailableMsg();\n                this.$router.push(\'/dashboard\');\n            }\n\n            this.fetchWords();\n        },\n        methods: {\n            fetchWords(){\n                let loader = this.$loading.show();\n                axios.post(\'/api/locale/fetch\',{\n                    locale: this.$route.params.locale,\n                    module: this.module\n                    })\n                    .then(response => {\n                        this.modules = response.modules;\n                        this.words = response.words;\n                        this.locale = response.locale;\n                        loader.hide();\n                    }).catch(error => {\n                        loader.hide();\n                        helper.showErrorMsg(error);\n                        this.$router.push(\'/configuration/locale\');\n                    });\n            },\n            getName(name){\n                name = helper.ucword(name);\n                return name.replace(/_/g, \' \');\n            },\n            getModuleLink(module){\n                return \'/configuration/locale/\'+this.$route.params.locale+\'/\'+module\n            },\n            saveTranslation(){\n                let loader = this.$loading.show();\n                axios.post(\'/api/locale/translate\',{\n                    locale: this.$route.params.locale,\n                    module: this.module,\n                    words: this.words\n                }).then(response => {\n                    toastr.success(response.message);\n                    loader.hide();\n                }).catch(error => {\n                    loader.hide();\n                    helper.showErrorMsg(error);\n                });\n            },\n            getConfig(config){\n                return helper.getConfig(config);\n            },\n            toWord(word){\n                return helper.toWord(word);\n            }\n        },\n        watch: {\n            \'$route.params.module\'(newModule, oldModule) {\n                this.module = newModule;\n                this.fetchWords();\n            }\n        },\n        computed: {\n            getWordCount(){\n                return _size(this.words);\n            }\n        }\n    }\n<\/script>\n<style>\n    .list-group-item .active {color:#ffffff;}\n</style>\n'],sourceRoot:""}]);const r=l},8318:(t,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>i});const e={data:function(){return{modules:{},words:{},locale:{},module:this.$route.params.module?this.$route.params.module:"auth",help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),helper.featureAvailable("multilingual")||(helper.featureNotAvailableMsg(),this.$router.push("/dashboard")),this.fetchWords()},methods:{fetchWords:function(){var t=this,n=this.$loading.show();axios.post("/api/locale/fetch",{locale:this.$route.params.locale,module:this.module}).then((function(o){t.modules=o.modules,t.words=o.words,t.locale=o.locale,n.hide()})).catch((function(o){n.hide(),helper.showErrorMsg(o),t.$router.push("/configuration/locale")}))},getName:function(t){return(t=helper.ucword(t)).replace(/_/g," ")},getModuleLink:function(t){return"/configuration/locale/"+this.$route.params.locale+"/"+t},saveTranslation:function(){var t=this.$loading.show();axios.post("/api/locale/translate",{locale:this.$route.params.locale,module:this.module,words:this.words}).then((function(n){toastr.success(n.message),t.hide()})).catch((function(n){t.hide(),helper.showErrorMsg(n)}))},getConfig:function(t){return helper.getConfig(t)},toWord:function(t){return helper.toWord(t)}},watch:{"$route.params.module":function(t,n){this.module=t,this.fetchWords()}},computed:{getWordCount:function(){return _size(this.words)}}};var s=o(93379),a=o.n(s),l=o(5088),r={insert:"head",singleton:!1};a()(l.Z,r);l.Z.locals;const i=(0,o(51900).Z)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"page-titles"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("configuration.translation"))+" ("+t._s(t.locale.name)+") ")])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"action-buttons pull-right"},[o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(n){return t.$router.push("/configuration/locale")}}},[o("i",{staticClass:"fas fa-globe"}),t._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("configuration.locale")))])]),t._v(" "),o("div",{staticClass:"btn-group"},[o("button",{staticClass:"btn btn-info btn-sm",staticStyle:{"margin-top":"-5px"},attrs:{type:"button",href:"#",role:"button",id:"moduleLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[o("i",{staticClass:"fas fa-boxes"}),t._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("configuration.locale_module"))+" "),o("span",[t._v("("+t._s(t.toWord(t.module))+")")]),t._v(" "),o("i",{staticClass:"fas fa-chevron-down"})])]),t._v(" "),o("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moduleLink"}},t._l(t.modules,(function(n){return o("button",{staticClass:"dropdown-item",staticStyle:{cursor:"pointer"},on:{click:function(o){return t.$router.push("/configuration/locale/"+t.locale.locale+"/"+n)}}},[t._v("\n                                "+t._s(t.toWord(n))+" "),n==t.module?o("span",{staticClass:"pull-right"},[o("i",{staticClass:"fas fa-check"})]):t._e()])})),0)]),t._v(" "),o("help-button",{on:{clicked:function(n){t.help_topic="configuration.locale.translation"}}})],1)])])]),t._v(" "),o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body p-4"},[t.getWordCount?o("div",[o("div",{staticClass:"row"},[t._l(t.words,(function(n,e){return["object"==typeof n?t._l(n,(function(n,s){return o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{staticStyle:{color:"red"},attrs:{for:""}},[t._v(t._s(t.trans(t.module+"."+e+"."+s)))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.words[e][s],expression:"words[index][i]"}],staticClass:"form-control",attrs:{type:"text",name:e+"_"+s},domProps:{value:t.words[e][s]},on:{input:function(n){n.target.composing||t.$set(t.words[e],s,n.target.value)}}})])])})):[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"font-weight-bold",attrs:{for:""}},[t._v(t._s(t.trans(t.module+"."+e)))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.words[e],expression:"words[index]"}],staticClass:"form-control",attrs:{type:"text",name:e},domProps:{value:t.words[e]},on:{input:function(n){n.target.composing||t.$set(t.words,e,n.target.value)}}})])])]]}))],2),t._v(" "),o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-info btn-sm pull-right",on:{click:t.saveTranslation}},[t._v(t._s(t.trans("general.save")))])])]):t._e(),t._v(" "),t.getWordCount?t._e():o("div",[o("p",{staticClass:"alert alert-danger"},[t._v(t._s(t.trans("general.no_result_found")))])])])])]),t._v(" "),o("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=show.js.map?id=0788313f3a5ecd091451