(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[7721],{76199:(o,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});const t={components:{},data:function(){return{configForm:new Form({sms_gateway:"",max_sms_per_chunk:"",twilio_sid:"",twilio_token:"",twilio_sender_mobile:"",twilio_receiver_mobile:"",nexmo_api_key:"",nexmo_api_secret:"",nexmo_sender_mobile:"",nexmo_receiver_mobile:"",custom_sms_api_get_url:"",custom_sms_api_number_prefix:"",custom_sms_api_sender_id_param:"",custom_sms_api_sender_id:"",custom_sms_api_receiver_param:"",custom_sms_api_message_param:"",custom_sms_api_accepts_multiple_receiver:0,config_type:""},!1),help_topic:"",sms_gateways:[{text:"Nexmo",value:"nexmo"},{text:"Custom",value:"custom"}]}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getConfiguration()},methods:{getConfiguration:function(){var o=this,e=this.$loading.show();axios.get("/api/configuration").then((function(s){o.configForm=helper.formAssign(o.configForm,s),e.hide()})).catch((function(o){e.hide(),helper.showErrorMsg(o)}))},submit:function(){var o=this,e=this.$loading.show();this.configForm.config_type="sms",this.configForm.post("/api/configuration").then((function(s){o.$store.dispatch("setConfig",{loaded:!1}),toastr.success(s.message),e.hide()})).catch((function(o){e.hide(),helper.showErrorMsg(o)}))}}};const r=(0,s(51900).Z)(t,(function(){var o=this,e=o.$createElement,s=o._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[o._v(o._s(o.trans("configuration.sms")))])]),o._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return o.$router.push("/dashboard")}}},[s("i",{staticClass:"fas fa-home"}),o._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[o._v(o._s(o.trans("general.home")))])]),o._v(" "),s("help-button",{on:{clicked:function(e){o.help_topic="configuration.sms"}}})],1)])])]),o._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body p-4"},[s("show-tip",{attrs:{module:"configuration",tip:"tip_sms"}}),o._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),o.submit.apply(null,arguments)},keydown:function(e){return o.configForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.sms_gateway")))]),o._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:o.configForm.sms_gateway,expression:"configForm.sms_gateway"}],staticClass:"custom-select col-12",attrs:{name:"sms_gateway"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(o){return o.selected})).map((function(o){return"_value"in o?o._value:o.value}));o.$set(o.configForm,"sms_gateway",e.target.multiple?s:s[0])},function(e){return o.configForm.errors.clear("sms_gateway")}]}},[s("option",{attrs:{value:""}},[o._v(o._s(o.trans("general.select_one")))]),o._v(" "),o._l(o.sms_gateways,(function(e){return s("option",{domProps:{value:e.value}},[o._v("\n                                    "+o._s(e.text)+"\n                                  ")])}))],2),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"sms_gateway"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.max_sms_per_chunk")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.max_sms_per_chunk,expression:"configForm.max_sms_per_chunk"}],staticClass:"form-control",attrs:{type:"text",name:"max_sms_per_chunk",placeholder:o.trans("configuration.max_sms_per_chunk")},domProps:{value:o.configForm.max_sms_per_chunk},on:{input:function(e){e.target.composing||o.$set(o.configForm,"max_sms_per_chunk",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"max_sms_per_chunk"}})],1)])]),o._v(" "),"nexmo"==o.configForm.sms_gateway?[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.nexmo_api_key")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.nexmo_api_key,expression:"configForm.nexmo_api_key"}],staticClass:"form-control",attrs:{type:"text",name:"nexmo_api_key",placeholder:o.trans("configuration.nexmo_api_key")},domProps:{value:o.configForm.nexmo_api_key},on:{input:function(e){e.target.composing||o.$set(o.configForm,"nexmo_api_key",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"nexmo_api_key"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.nexmo_api_secret")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.nexmo_api_secret,expression:"configForm.nexmo_api_secret"}],staticClass:"form-control",attrs:{type:"text",name:"nexmo_api_secret",placeholder:o.trans("configuration.nexmo_api_secret")},domProps:{value:o.configForm.nexmo_api_secret},on:{input:function(e){e.target.composing||o.$set(o.configForm,"nexmo_api_secret",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"nexmo_api_secret"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.sender_mobile")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.nexmo_sender_mobile,expression:"configForm.nexmo_sender_mobile"}],staticClass:"form-control",attrs:{type:"text",name:"nexmo_sender_mobile",placeholder:o.trans("configuration.sender_mobile")},domProps:{value:o.configForm.nexmo_sender_mobile},on:{input:function(e){e.target.composing||o.$set(o.configForm,"nexmo_sender_mobile",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"nexmo_sender_mobile"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.receiver_mobile")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.nexmo_receiver_mobile,expression:"configForm.nexmo_receiver_mobile"}],staticClass:"form-control",attrs:{type:"text",name:"nexmo_receiver_mobile",placeholder:o.trans("configuration.receiver_mobile")},domProps:{value:o.configForm.nexmo_receiver_mobile},on:{input:function(e){e.target.composing||o.$set(o.configForm,"nexmo_receiver_mobile",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"nexmo_receiver_mobile"}})],1)])])]:"twilio"==o.configForm.sms_gateway?[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.twilio_sid")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.twilio_sid,expression:"configForm.twilio_sid"}],staticClass:"form-control",attrs:{type:"text",name:"twilio_sid",placeholder:o.trans("configuration.twilio_sid")},domProps:{value:o.configForm.twilio_sid},on:{input:function(e){e.target.composing||o.$set(o.configForm,"twilio_sid",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"twilio_sid"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.twilio_token")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.twilio_token,expression:"configForm.twilio_token"}],staticClass:"form-control",attrs:{type:"text",name:"twilio_token",placeholder:o.trans("configuration.twilio_token")},domProps:{value:o.configForm.twilio_token},on:{input:function(e){e.target.composing||o.$set(o.configForm,"twilio_token",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"twilio_token"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.sender_mobile")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.twilio_sender_mobile,expression:"configForm.twilio_sender_mobile"}],staticClass:"form-control",attrs:{type:"text",name:"twilio_sender_mobile",placeholder:o.trans("configuration.sender_mobile")},domProps:{value:o.configForm.twilio_sender_mobile},on:{input:function(e){e.target.composing||o.$set(o.configForm,"twilio_sender_mobile",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"twilio_sender_mobile"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.receiver_mobile")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.twilio_receiver_mobile,expression:"configForm.twilio_receiver_mobile"}],staticClass:"form-control",attrs:{type:"text",name:"twilio_receiver_mobile",placeholder:o.trans("configuration.receiver_mobile")},domProps:{value:o.configForm.twilio_receiver_mobile},on:{input:function(e){e.target.composing||o.$set(o.configForm,"twilio_receiver_mobile",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"twilio_receiver_mobile"}})],1)])])]:"custom"==o.configForm.sms_gateway?[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.custom_sms_api_get_url")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.custom_sms_api_get_url,expression:"configForm.custom_sms_api_get_url"}],staticClass:"form-control",attrs:{type:"text",name:"custom_sms_api_get_url",placeholder:o.trans("configuration.custom_sms_api_get_url")},domProps:{value:o.configForm.custom_sms_api_get_url},on:{input:function(e){e.target.composing||o.$set(o.configForm,"custom_sms_api_get_url",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"custom_sms_api_get_url"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.custom_sms_api_number_prefix")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.custom_sms_api_number_prefix,expression:"configForm.custom_sms_api_number_prefix"}],staticClass:"form-control",attrs:{type:"text",name:"custom_sms_api_number_prefix",placeholder:o.trans("configuration.custom_sms_api_number_prefix")},domProps:{value:o.configForm.custom_sms_api_number_prefix},on:{input:function(e){e.target.composing||o.$set(o.configForm,"custom_sms_api_number_prefix",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"custom_sms_api_number_prefix"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.custom_sms_api_sender_id_param")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.custom_sms_api_sender_id_param,expression:"configForm.custom_sms_api_sender_id_param"}],staticClass:"form-control",attrs:{type:"text",name:"custom_sms_api_sender_id_param",placeholder:o.trans("configuration.custom_sms_api_sender_id_param")},domProps:{value:o.configForm.custom_sms_api_sender_id_param},on:{input:function(e){e.target.composing||o.$set(o.configForm,"custom_sms_api_sender_id_param",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"custom_sms_api_sender_id_param"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.custom_sms_api_sender_id")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.custom_sms_api_sender_id,expression:"configForm.custom_sms_api_sender_id"}],staticClass:"form-control",attrs:{type:"text",name:"custom_sms_api_sender_id",placeholder:o.trans("configuration.custom_sms_api_sender_id")},domProps:{value:o.configForm.custom_sms_api_sender_id},on:{input:function(e){e.target.composing||o.$set(o.configForm,"custom_sms_api_sender_id",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"custom_sms_api_sender_id"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.custom_sms_api_receiver_param")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.custom_sms_api_receiver_param,expression:"configForm.custom_sms_api_receiver_param"}],staticClass:"form-control",attrs:{type:"text",name:"custom_sms_api_receiver_param",placeholder:o.trans("configuration.custom_sms_api_receiver_param")},domProps:{value:o.configForm.custom_sms_api_receiver_param},on:{input:function(e){e.target.composing||o.$set(o.configForm,"custom_sms_api_receiver_param",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"custom_sms_api_receiver_param"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.custom_sms_api_message_param")))]),o._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.custom_sms_api_message_param,expression:"configForm.custom_sms_api_message_param"}],staticClass:"form-control",attrs:{type:"text",name:"custom_sms_api_message_param",placeholder:o.trans("configuration.custom_sms_api_message_param")},domProps:{value:o.configForm.custom_sms_api_message_param},on:{input:function(e){e.target.composing||o.$set(o.configForm,"custom_sms_api_message_param",e.target.value)}}}),o._v(" "),s("show-error",{attrs:{"form-name":o.configForm,"prop-name":"custom_sms_api_message_param"}})],1)]),o._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[o._v(o._s(o.trans("configuration.custom_sms_api_accepts_multiple_receiver")))]),o._v(" "),s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:o.configForm.custom_sms_api_accepts_multiple_receiver,expression:"configForm.custom_sms_api_accepts_multiple_receiver"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(o.configForm.custom_sms_api_accepts_multiple_receiver)?o._i(o.configForm.custom_sms_api_accepts_multiple_receiver,"1")>-1:o.configForm.custom_sms_api_accepts_multiple_receiver},on:{change:function(e){var s=o.configForm.custom_sms_api_accepts_multiple_receiver,t=e.target,r=!!t.checked;if(Array.isArray(s)){var i=o._i(s,"1");t.checked?i<0&&o.$set(o.configForm,"custom_sms_api_accepts_multiple_receiver",s.concat(["1"])):i>-1&&o.$set(o.configForm,"custom_sms_api_accepts_multiple_receiver",s.slice(0,i).concat(s.slice(i+1)))}else o.$set(o.configForm,"custom_sms_api_accepts_multiple_receiver",r)}}}),o._v(" "),s("span",{staticClass:"custom-control-label"})])])])])]:o._e(),o._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light pull-right m-t-10",attrs:{type:"submit"}},[o._v(o._s(o.trans("general.save")))])],2)],1)])]),o._v(" "),s("right-panel",{attrs:{topic:o.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=8c12e8dfe81db2bc77cf