(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[927],{53641:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});const a={components:{},data:function(){return{list:{total:0,data:[]},batches:[],selected_batches:null,footer:[],filter:{sort_by:"name",order:"asc",first_name:"",last_name:"",min_balance:"",batch_id:[],page_length:helper.getConfig("page_length")},selectAll:!1,sendSMSForm:new Form({ids:[],sms:""}),orderByOptions:[{value:"admission_number",translation:i18n.student.admission_number},{value:"name",translation:i18n.student.name},{value:"first_guardian_name",translation:i18n.student.first_guardian_name},{value:"total",translation:i18n.finance.total_fee},{value:"concession",translation:i18n.finance.total_concession},{value:"paid",translation:i18n.finance.paid_fee},{value:"balance",translation:i18n.finance.balance_fee},{value:"late",translation:i18n.finance.late_fee_charged}],showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-fee-report")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getSummary()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getSummary:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1),this.selectAll=!1;var a=helper.getFilterURL(this.filter);axios.get("/api/fee/report/summary?page="+t+a).then((function(t){e.list=t.list,e.footer=t.footer,e.batches=t.filters.batches;var a=[];e.list.data.forEach((function(t){a.push(t.id)})),e.selectAll=a.every((function(t){return e.sendSMSForm.ids.indexOf(t)>-1}))?1:0,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},toggleSelectAll:function(){var t=this;this.selectAll?this.list.data.forEach((function(e){t.sendSMSForm.ids.indexOf(e.id)<0&&t.sendSMSForm.ids.push(e.id)})):this.list.data.forEach((function(e){var s=t.sendSMSForm.ids.indexOf(e.id);s>=0&&t.sendSMSForm.ids.splice(s,1)}))},getConfig:function(t){return helper.getConfig(t)},print:function(){var t=this.$loading.show();axios.post("/api/fee/report/summary/print",{filter:this.filter}).then((function(e){var s=window.open("/print");t.hide(),s.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/fee/report/summary/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onBatchSelect:function(t){this.filter.batch_id.push(t.id)},onBatchRemove:function(t){this.filter.batch_id.splice(this.filter.batch_id.indexOf(t.id),1)},confirmSendAction:function(){var t=this;return function(e){return t.sendSMS()}},sendSMS:function(){var t=this,e=this.$loading.show();this.sendSMSForm.filter=this.filter,this.sendSMSForm.post("/api/fee/report/summary/sms").then((function(s){toastr.success(s.message),t.sendSMSForm.ids=[],e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getSummary()},"filter.order":function(t){this.getSummary()},"filter.page_length":function(t){this.getSummary()}},computed:{authToken:function(){return helper.getAuthToken()},sampleMessage:function(){var t=this.list.data[0];return this.sendSMSForm.sms.replace("#NAME#",t.name).replace("#BATCH#",t.batch).replace("#FIRST_GUARDIAN_NAME#",t.first_guardian_name).replace("#LATE_FEE#",t.late).replace("#TOTAL_FEE#",t.total).replace("#PAID_FEE#",t.paid).replace("#BALANCE_FEE#",t.balance)},characterCount:function(){return this.sendSMSForm.sms.length}}};const n=(0,s(51900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("finance.fee_summary_report"))+" \n                    "),t.list.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.list.total,from:t.list.from,to:t.list.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[t.showFilterPanel?t._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),s("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),s("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[s("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),s("help-button",{on:{clicked:function(e){t.help_topic="finance.fee.report.summary"}}})],1)])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[t.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.first_name,expression:"filter.first_name"}],staticClass:"form-control",attrs:{type:"text",name:"first_name",placeholder:t.trans("student.first_name")},domProps:{value:t.filter.first_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"first_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.last_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.last_name,expression:"filter.last_name"}],staticClass:"form-control",attrs:{type:"text",name:"last_name",placeholder:t.trans("student.last_name")},domProps:{value:t.filter.last_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"last_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_batches},on:{select:t.onBatchSelect,remove:t.onBatchRemove},model:{value:t.selected_batches,callback:function(e){t.selected_batches=e},expression:"selected_batches"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("finance.balance_fee_greater_than")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.min_balance,expression:"filter.min_balance"}],staticClass:"form-control",attrs:{type:"text",name:"min_balance",placeholder:t.trans("student.min_balance")},domProps:{value:t.filter.min_balance},on:{input:function(e){e.target.composing||t.$set(t.filter,"min_balance",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getSummary}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.list.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[t.hasPermission("send-sms")?s("th",{staticClass:"select-all"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,"1")>-1:t.selectAll},on:{change:[function(e){var s=t.selectAll,a=e.target,n=!!a.checked;if(Array.isArray(s)){var r=t._i(s,"1");a.checked?r<0&&(t.selectAll=s.concat(["1"])):r>-1&&(t.selectAll=s.slice(0,r).concat(s.slice(r+1)))}else t.selectAll=n},t.toggleSelectAll]}}),t._v(" "),s("span",{staticClass:"custom-control-label"})])]):t._e(),t._v(" "),s("th",[t._v(t._s(t.trans("student.admission_number_short")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.name")))]),t._v(" "),s("th",[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.first_guardian_name")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.contact_number")))]),t._v(" "),s("th",[t._v(t._s(t.trans("finance.total_fee")))]),t._v(" "),s("th",[t._v(t._s(t.trans("finance.other")))]),t._v(" "),s("th",[t._v(t._s(t.trans("finance.total_concession")))]),t._v(" "),s("th",[t._v(t._s(t.trans("finance.paid_fee")))]),t._v(" "),s("th",[t._v(t._s(t.trans("finance.balance_fee")))]),t._v(" "),s("th",[t._v(t._s(t.trans("finance.late_fee_charged")))]),t._v(" "),s("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),s("tbody",t._l(t.list.data,(function(e){return s("tr",[t.hasPermission("send-sms")?s("td",{staticClass:"select-all"},[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sendSMSForm.ids,expression:"sendSMSForm.ids"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.sendSMSForm.ids)?t._i(t.sendSMSForm.ids,e.id)>-1:t.sendSMSForm.ids},on:{change:function(s){var a=t.sendSMSForm.ids,n=s.target,r=!!n.checked;if(Array.isArray(a)){var o=e.id,i=t._i(a,o);n.checked?i<0&&t.$set(t.sendSMSForm,"ids",a.concat([o])):i>-1&&t.$set(t.sendSMSForm,"ids",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.sendSMSForm,"ids",r)}}}),t._v(" "),s("span",{staticClass:"custom-control-label"})])]):t._e(),t._v(" "),s("td",{domProps:{textContent:t._s(e.admission_number)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.batch)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.first_guardian_name)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.contact_number)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.total)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.other)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.concession)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.paid)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.balance)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.late)}}),t._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.view_detail"),expression:"trans('general.view_detail')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return t.$router.push("/student/"+e.uuid+"/fee/"+e.id)}}},[s("i",{staticClass:"fas fa-arrow-circle-right"})])])])])})),0),t._v(" "),s("tfoot",[s("tr",[s("th",{attrs:{colspan:"6"}}),t._v(" "),s("th",[t._v(t._s(t.footer.grand_total))]),t._v(" "),s("th",[t._v(t._s(t.footer.grand_other))]),t._v(" "),s("th",[t._v(t._s(t.footer.grand_concession))]),t._v(" "),s("th",[t._v(t._s(t.footer.grand_paid))]),t._v(" "),s("th",[t._v(t._s(t.footer.grand_balance))]),t._v(" "),s("th",[t._v(t._s(t.footer.grand_late))]),t._v(" "),s("th")])])])]):t._e(),t._v(" "),t.list.total?t._e():s("module-info",{attrs:{module:"finance",title:"fee_summary_report_module_title",description:"fee_summary_report_module_description",icon:"list"}}),t._v(" "),s("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.list},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getSummary}})],1),t._v(" "),t.sendSMSForm.ids.length&&t.hasPermission("send-sms")?s("div",{staticClass:"m-t-10 card-body border-top p-4"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("communication.send_sms")))]),t._v(" "),s("p",[t._v(t._s(t.trans("general.total_selected",{type:t.trans("student.student"),count:t.sendSMSForm.ids.length})))]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)},keydown:function(e){return t.sendSMSForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("communication.sms"))+" "+t._s(t.trans("communication.character_count",{count:t.characterCount}))+" ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sendSMSForm.sms,expression:"sendSMSForm.sms"}],staticClass:"form-control",attrs:{rows:"2",name:"sms",placeholder:t.trans("communication.sms")},domProps:{value:t.sendSMSForm.sms},on:{input:function(e){e.target.composing||t.$set(t.sendSMSForm,"sms",e.target.value)}}}),t._v(" "),s("p",{staticClass:"help-block font-80pc"},[t._v(t._s(t.trans("communication.template_variable_tip")))]),t._v(" "),s("p",{staticClass:"help-block font-90pc"},[t._v(t._s(t.trans("communication.available_variables"))+": NAME, BATCH, FIRST_GUARDIAN_NAME, LATE_FEE, TOTAL_FEE, PAID_FEE, BALANCE_FEE")]),t._v(" "),s("show-error",{attrs:{"form-name":t.sendSMSForm,"prop-name":"sms"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("communication.sample_sms")))]),t._v(" "),s("p",[t._v(t._s(t.sampleMessage))])])])]),t._v(" "),s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmSendAction()},expression:"{ok: confirmSendAction()}"}],key:"send-summary",staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"}},[t._v(t._s(t.trans("general.send")))])])]):t._e()])],1),t._v(" "),s("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=summary.js.map?id=d5fb7fbbd953dce2125d