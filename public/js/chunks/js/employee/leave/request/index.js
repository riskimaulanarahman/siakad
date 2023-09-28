(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[7728],{95488:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});const a={components:{},data:function(){return{leave_requests:{total:0,data:[]},filter:{sort_by:"created_at",order:"desc",employee_id:[],leave_type_id:[],page_length:helper.getConfig("page_length")},orderByOptions:[{value:"created_at",translation:i18n.general.created_at},{value:"start_date",translation:i18n.employee.leave_request_start_date},{value:"end_date",translation:i18n.employee.leave_request_end_date}],employees:[],leave_types:[],selected_employees:null,selected_leave_types:null,showFilterPanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("request-leave")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getLeaveRequests()},methods:{hasPermission:function(e){return helper.hasPermission(e)},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeCode:function(e){return helper.getEmployeeCode(e)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)},getLeaveRequests:function(e){var t=this,s=this.$loading.show();"number"!=typeof e&&(e=1);var a=helper.getFilterURL(this.filter);axios.get("/api/employee/leave/request?page="+e+a).then((function(e){t.leave_requests=e.leave_requests,t.employees=e.filters.employees,t.leave_types=e.filters.leave_types,s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},getLeaveRequestCount:function(e){var t=e.options.holidays.excluded||[];e.options.holidays.included;return helper.getDateDiff(e.start_date,e.end_date)+1-t.length},getLeaveRequestStatus:function(e){return helper.getLeaveRequestStatus(e)},editLeaveRequest:function(e){this.$router.push("/employee/leave/request/"+e.uuid+"/edit")},confirmDelete:function(e){var t=this;return function(s){return t.deleteLeaveRequest(e)}},deleteLeaveRequest:function(e){var t=this,s=this.$loading.show();axios.delete("/api/employee/leave/request/"+e.uuid).then((function(e){toastr.success(e.message),t.getLeaveRequests(),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},print:function(){var e=this.$loading.show();axios.post("/api/employee/leave/request/print",{filter:this.filter}).then((function(t){var s=window.open("/print");e.hide(),s.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/employee/leave/request/pdf",{filter:this.filter}).then((function(s){t.hide(),window.open("/download/report/"+s+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onEmployeeSelect:function(e){this.filter.employee_id.push(e.id)},onEmployeeRemove:function(e){this.filter.employee_id.splice(this.filter.employee_id.indexOf(e.id),1)},onLeaveTypeSelect:function(e){this.filter.leave_type_id.push(e.id)},onLeaveTypeRemove:function(e){this.filter.leave_type_id.splice(this.filter.leave_type_id.indexOf(e.id),1)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getLeaveRequests()},"filter.order":function(e){this.getLeaveRequests()},"filter.page_length":function(e){this.getLeaveRequests()}},computed:{authToken:function(){return helper.getAuthToken()}}};const n=(0,s(51900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.leave_request"))+" \n                    "),e.leave_requests.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.leave_requests.total,from:e.leave_requests.from,to:e.leave_requests.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[e.leave_requests.total?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/leave/request/create")}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.request_leave")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),s("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),s("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[s("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),s("help-button",{on:{clicked:function(t){e.help_topic="employee.leave.request"}}})],1)])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[e.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"employee_id",id:"employee_id",options:e.employees,placeholder:e.trans("employee.select_employee"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_employees},on:{select:e.onEmployeeSelect,remove:e.onEmployeeRemove},model:{value:e.selected_employees,callback:function(t){e.selected_employees=t},expression:"selected_employees"}},[e.employees.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.leave_type")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"leave_type_id",id:"leave_type_id",options:e.leave_types,placeholder:e.trans("employee.select_leave_type"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_leave_types},on:{select:e.onLeaveTypeSelect,remove:e.onLeaveTypeRemove},model:{value:e.selected_leave_types,callback:function(t){e.selected_leave_types=t},expression:"selected_leave_types"}},[e.leave_types.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)])]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getLeaveRequests}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e.leave_requests.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.trans("employee.name")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.designation")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.leave_type")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.leave_request_period")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.leave_request_count")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.leave_request_status")))]),e._v(" "),s("th",[e._v(e._s(e.trans("employee.leave_requested_by")))]),e._v(" "),s("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),s("tbody",e._l(e.leave_requests.data,(function(t){return s("tr",[s("td",{domProps:{textContent:e._s(e.getEmployeeName(t.employee)+" ("+e.getEmployeeCode(t.employee)+")")}}),e._v(" "),s("td",{domProps:{textContent:e._s(e.getEmployeeDesignationOnDate(t.employee,t.end_date))}}),e._v(" "),s("td",{domProps:{textContent:e._s(t.leave_type.name)}}),e._v(" "),s("td",[e._v(e._s(e._f("moment")(t.start_date))+" "+e._s(e.trans("general.to"))+" "+e._s(e._f("moment")(t.end_date)))]),e._v(" "),s("td",[e._v(e._s(e.getLeaveRequestCount(t)))]),e._v(" "),s("td",e._l(e.getLeaveRequestStatus(t),(function(t){return s("span",{class:["label","label-"+t.color,"m-r-5"]},[e._v(e._s(t.label))])})),0),e._v(" "),s("td",{domProps:{textContent:e._s(e.getEmployeeName(t.requester_user.employee)+" ("+e.getEmployeeCode(t.requester_user.employee)+")")}}),e._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.view"),expression:"trans('general.view')"}],staticClass:"btn btn-success btn-sm",on:{click:function(s){return e.$router.push("/employee/leave/request/"+t.uuid)}}},[s("i",{staticClass:"fas fa-arrow-circle-right"})]),e._v(" "),"pending"==t.status?[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.edit_leave_request"),expression:"trans('employee.edit_leave_request')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return s.preventDefault(),e.editLeaveRequest(t)}}},[s("i",{staticClass:"fas fa-edit"})]),e._v(" "),s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(leave_request)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.delete_leave_request"),expression:"trans('employee.delete_leave_request')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})])]:e._e()],2)])])})),0)])]):e._e(),e._v(" "),e.leave_requests.total?e._e():s("module-info",{attrs:{module:"employee",title:"leave_request_module_title",description:"leave_request_module_description",icon:"list"}},[s("div",{attrs:{slot:"btn"},slot:"btn"},[s("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){return e.$router.push("/employee/leave/request/create")}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))])])]),e._v(" "),s("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.leave_requests},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getLeaveRequests}})],1)])],1),e._v(" "),s("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=index.js.map?id=ec5a14c637f667bbe166