(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[6023],{77425:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const s={data:function(){return{studentGroupForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.studentGroupForm.post("/api/student/group").then((function(n){toastr.success(n.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/student/group/"+this.id).then((function(n){t.studentGroupForm.name=n.name,t.studentGroupForm.description=n.description,e.hide()})).catch((function(n){e.hide(),helper.showErrorMsg(n),t.$router.push("/configuration/student/group")}))},update:function(){var t=this,e=this.$loading.show();this.studentGroupForm.patch("/api/student/group/"+this.id).then((function(n){toastr.success(n.message),e.hide(),t.$router.push("/configuration/student/group")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}};const o=(0,n(51900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(e){return t.studentGroupForm.errors.clear(e.target.name)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.student_group_name")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentGroupForm.name,expression:"studentGroupForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("student.student_group_name")},domProps:{value:t.studentGroupForm.name},on:{input:function(e){e.target.composing||t.$set(t.studentGroupForm,"name",e.target.value)}}}),t._v(" "),n("show-error",{attrs:{"form-name":t.studentGroupForm,"prop-name":"name"}})],1)]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.student_group_description")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.studentGroupForm.description,expression:"studentGroupForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("student.student_group_description")},domProps:{value:t.studentGroupForm.description},on:{input:function(e){e.target.composing||t.$set(t.studentGroupForm,"description",e.target.value)}}}),t._v(" "),n("show-error",{attrs:{"form-name":t.studentGroupForm,"prop-name":"description"}})],1)])]),t._v(" "),n("div",{staticClass:"card-footer text-right"},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/student/group"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():n("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),n("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?n("span",[t._v(t._s(t.trans("general.update")))]):n("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports},65034:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const s={components:{studentGroupForm:n(77425).Z},data:function(){return{student_groups:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.student.student_group_name}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getStudentGroups()},methods:{getConfig:function(t){return helper.getConfig(t)},getStudentGroups:function(t){var e=this,n=this.$loading.show();"number"!=typeof t&&(t=1);var s=helper.getFilterURL(this.filter);axios.get("/api/student/group?page="+t+s).then((function(t){e.student_groups=t,n.hide()})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))},editStudentGroup:function(t){this.$router.push("/configuration/student/group/"+t.id+"/edit")},confirmDelete:function(t){var e=this;return function(n){return e.deleteStudentGroup(t)}},deleteStudentGroup:function(t){var e=this,n=this.$loading.show();axios.delete("/api/student/group/"+t.id).then((function(t){toastr.success(t.message),e.getStudentGroups(),n.hide()})).catch((function(t){n.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/student/group/print",{filter:this.filter}).then((function(e){var n=window.open("/print");t.hide(),n.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/student/group/pdf",{filter:this.filter}).then((function(n){e.hide(),window.open("/download/report/"+n+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getStudentGroups()},"filter.order":function(t){this.getStudentGroups()},"filter.page_length":function(t){this.getStudentGroups()}},computed:{authToken:function(){return helper.getAuthToken()}}};const o=(0,n(51900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-titles"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("student.student_group"))+" \n                    "),t.student_groups.total?n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.student_groups.total,from:t.student_groups.from,to:t.student_groups.to})))]):n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"action-buttons pull-right"},[t.student_groups.total&&!t.showCreatePanel?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("student.add_new_student_group")))])]):t._e(),t._v(" "),n("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),n("div",{staticClass:"btn-group"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),n("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),n("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[n("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[n("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),n("help-button",{on:{clicked:function(e){t.help_topic="configuration.student.student-group"}}})],1)])])]),t._v(" "),n("div",{staticClass:"container-fluid"},[n("transition",{attrs:{name:"fade"}},[t.showCreatePanel?n("div",{staticClass:"card card-form"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("student.add_new_student_group")))]),t._v(" "),n("student-group-form",{on:{completed:t.getStudentGroups,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[t.student_groups.total?n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm"},[n("thead",[n("tr",[n("th",[t._v(t._s(t.trans("student.student_group_name")))]),t._v(" "),n("th",[t._v(t._s(t.trans("student.student_group_description")))]),t._v(" "),n("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),n("tbody",t._l(t.student_groups.data,(function(e){return n("tr",[n("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.description)}}),t._v(" "),n("td",{staticClass:"table-option"},[n("div",{staticClass:"btn-group"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("student.edit_student_group"),expression:"trans('student.edit_student_group')"}],staticClass:"btn btn-info btn-sm",on:{click:function(n){return n.preventDefault(),t.editStudentGroup(e)}}},[n("i",{staticClass:"fas fa-edit"})]),t._v(" "),n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(student_group)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("student.delete_student_group"),expression:"trans('student.delete_student_group')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[n("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.student_groups.total?t._e():n("module-info",{attrs:{module:"student",title:"student_group_module_title",description:"student_group_module_description",icon:"list"}},[n("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():n("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),n("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.student_groups},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getStudentGroups},nativeOn:{change:function(e){return t.getStudentGroups.apply(null,arguments)}}})],1)])],1),t._v(" "),n("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=d20a0c819339ebbb1622