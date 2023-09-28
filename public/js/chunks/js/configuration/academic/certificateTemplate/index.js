(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[3279],{14930:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const i={data:function(){return{certificateTemplateForm:new Form({name:"",type:"",body:"",custom_fields:[]}),student_custom_fields:[],employee_custom_fields:[]}},props:["id"],mounted:function(){this.id&&this.get(),this.getPreRequisite()},methods:{getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/academic/certificate/template/pre-requisite").then((function(a){t.student_custom_fields=a.student_custom_fields,t.employee_custom_fields=a.employee_custom_fields,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},addRow:function(){this.certificateTemplateForm.custom_fields.push({name:""})},getCustomFieldName:function(t){return t+"_custom_field_name"},confirmDeleteCustomField:function(t){var e=this;return function(a){return e.deleteCustomField(t)}},deleteCustomField:function(t){this.certificateTemplateForm.custom_fields.splice(t,1)},proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.certificateTemplateForm.post("/api/academic/certificate/template").then((function(a){toastr.success(a.message),t.certificateTemplateForm.custom_fields=[],t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/academic/certificate/template/"+this.id).then((function(a){t.certificateTemplateForm.name=a.name,t.certificateTemplateForm.type=a.type,t.certificateTemplateForm.body=a.body,a.options.custom_fields.forEach((function(e){t.certificateTemplateForm.custom_fields.push({name:e})})),e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/configuration/academic/certificate/template")}))},update:function(){var t=this,e=this.$loading.show();this.certificateTemplateForm.patch("/api/academic/certificate/template/"+this.id).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/configuration/academic/certificate/template")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const s=(0,a(51900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.certificateTemplateForm.errors.clear(e.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.certificate_template_name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.certificateTemplateForm.name,expression:"certificateTemplateForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("academic.certificate_template_name")},domProps:{value:t.certificateTemplateForm.name},on:{input:function(e){e.target.composing||t.$set(t.certificateTemplateForm,"name",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.certificateTemplateForm,"prop-name":"name"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"radio radio-success"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.certificateTemplateForm.type,expression:"certificateTemplateForm.type"}],attrs:{type:"radio",value:"student",id:"student",name:"type"},domProps:{checked:t.certificateTemplateForm.type,checked:t._q(t.certificateTemplateForm.type,"student")},on:{click:function(e){return t.certificateTemplateForm.errors.clear("type")},change:function(e){return t.$set(t.certificateTemplateForm,"type","student")}}}),t._v(" "),a("label",{attrs:{for:"student"}},[t._v(t._s(t.trans("student.student")))])]),t._v(" "),a("div",{staticClass:"radio radio-success"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.certificateTemplateForm.type,expression:"certificateTemplateForm.type"}],attrs:{type:"radio",value:"employee",id:"employee",name:"type"},domProps:{checked:!t.certificateTemplateForm.type,checked:t._q(t.certificateTemplateForm.type,"employee")},on:{click:function(e){return t.certificateTemplateForm.errors.clear("type")},change:function(e){return t.$set(t.certificateTemplateForm,"type","employee")}}}),t._v(" "),a("label",{attrs:{for:"employee"}},[t._v(t._s(t.trans("employee.employee")))])]),t._v(" "),a("show-error",{attrs:{"form-name":t.certificateTemplateForm,"prop-name":"type"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-info btn-sm waves-effect waves-light pull-right",attrs:{type:"button"},on:{click:t.addRow}},[t._v(t._s(t.trans("academic.add_new_certificate_template_custom_field")))])])])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},t._l(t.certificateTemplateForm.custom_fields,(function(e,i){return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.certificate_template_custom_field"))+" "+t._s(i+1))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-11"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"custom_field.name"}],staticClass:"form-control",attrs:{type:"text",name:t.getCustomFieldName(i),placeholder:t.trans("academic.certificate_template_custom_field_name")},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.certificateTemplateForm,"prop-name":t.getCustomFieldName(i)}})],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-1"},[a("label",{attrs:{for:""}},[a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDeleteCustomField(i)},expression:"{ok: confirmDeleteCustomField(index)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("academic.delete_certificate_template_custom_field"),expression:"trans('academic.delete_certificate_template_custom_field')"}],key:i+"_delete_custom_field",staticClass:"btn btn-xs btn-danger",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-times"})])])])])])})),0),t._v(" "),a("div",{staticClass:"col-12"},[t.certificateTemplateForm.type?a("p",[t._v(t._s(t.trans("academic.certificate_template_available_variables"))+": \n\t            \t\t"),"student"==t.certificateTemplateForm.type?a("span",[t._v(t._s(t.student_custom_fields.join(", ")))]):t._e(),t._v(" "),"employee"==t.certificateTemplateForm.type?a("span",[t._v(t._s(t.employee_custom_fields.join(", ")))]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("html-editor",{attrs:{name:"body",model:t.certificateTemplateForm.body,height:"300",isUpdate:!!t.id},on:{"update:model":function(e){return t.$set(t.certificateTemplateForm,"body",e)},clearErrors:function(e){return t.certificateTemplateForm.errors.clear("body")}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.certificateTemplateForm,"prop-name":"body"}})],1)])]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/academic/certificate/template"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?a("span",[t._v(t._s(t.trans("general.update")))]):a("span",[t._v(t._s(t.trans("general.save")))])])],1)])])}),[],!1,null,null,null).exports},78838:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const i={components:{certificateTemplateForm:a(14930).Z},data:function(){return{certificate_templates:{total:0,data:[]},filter:{sort_by:"name",order:"asc",name:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.academic.certificate_template_name},{value:"type",translation:i18n.academic.certificate_template_type}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getCertificateTemplates()},methods:{getConfig:function(t){return helper.getConfig(t)},getCertificateTemplates:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1);var i=helper.getFilterURL(this.filter);axios.get("/api/academic/certificate/template?page="+t+i).then((function(t){e.certificate_templates=t,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},editCertificateTemplate:function(t){this.$router.push("/configuration/academic/certificate/template/"+t.id+"/edit")},confirmDelete:function(t){var e=this;return function(a){return e.deleteCertificateTemplate(t)}},deleteCertificateTemplate:function(t){var e=this,a=this.$loading.show();axios.delete("/api/academic/certificate/template/"+t.id).then((function(t){toastr.success(t.message),e.getCertificateTemplates(),a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/academic/certificate/template/print",{filter:this.filter}).then((function(e){var a=window.open("/print");t.hide(),a.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/academic/certificate/template/pdf",{filter:this.filter}).then((function(a){e.hide(),window.open("/download/report/"+a+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getCertificateTemplates()},"filter.order":function(t){this.getCertificateTemplates()},"filter.page_length":function(t){this.getCertificateTemplates()}},computed:{authToken:function(){return helper.getAuthToken()}}};const s=(0,a(51900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("academic.certificate_template"))+" \n                    "),t.certificate_templates.total?a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.certificate_templates.total,from:t.certificate_templates.from,to:t.certificate_templates.to})))]):a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[t.certificate_templates.total&&!t.showCreatePanel?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("academic.add_new_certificate_template")))])]):t._e(),t._v(" "),a("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),a("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[a("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[a("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),a("help-button",{on:{clicked:function(e){t.help_topic="configuration.academic.certificate_template"}}})],1)])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade"}},[t.showCreatePanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("academic.add_new_certificate_template")))]),t._v(" "),a("certificate-template-form",{on:{completed:t.getCertificateTemplates,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.certificate_templates.total?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.trans("academic.certificate_template_name")))]),t._v(" "),a("th",[t._v(t._s(t.trans("academic.certificate_template_type")))]),t._v(" "),a("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),a("tbody",t._l(t.certificate_templates.data,(function(e){return a("tr",[a("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),a("td",{domProps:{textContent:t._s("student"==e.type?t.trans("student.student"):t.trans("employee.employee"))}}),t._v(" "),a("td",{staticClass:"table-option"},[a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("academic.edit_certificate_template"),expression:"trans('academic.edit_certificate_template')"}],staticClass:"btn btn-info btn-sm",on:{click:function(a){return a.preventDefault(),t.editCertificateTemplate(e)}}},[a("i",{staticClass:"fas fa-edit"})]),t._v(" "),a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(certificate_template)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("academic.delete_certificate_template"),expression:"trans('academic.delete_certificate_template')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[a("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.certificate_templates.total?t._e():a("module-info",{attrs:{module:"academic",title:"certificate_template_module_title",description:"certificate_template_module_description",icon:"list"}},[a("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():a("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),a("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.certificate_templates},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getCertificateTemplates},nativeOn:{change:function(e){return t.getCertificateTemplates.apply(null,arguments)}}})],1)])],1),t._v(" "),a("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=e458d6c4d08dcfc7573c