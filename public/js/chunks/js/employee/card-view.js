(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[7698],{14432:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(94015),a=n.n(o),s=n(23645),r=n.n(s)()(a());r.push([e.id,".card.employee-card[data-v-e2c36622]{cursor:pointer;opacity:.9;transition:all .3s ease-in-out}.card.employee-card .employee-info .employee-thumb[data-v-e2c36622]{background:#e1e2e3;border-radius:50%;float:left;height:100px;margin-right:20px;overflow:hidden;text-align:center;width:100px}.card.employee-card .employee-info .employee-thumb i[data-v-e2c36622]{font-size:50px;padding-top:25px}.card.employee-card .employee-info .employee-thumb img[data-v-e2c36622]{width:100%}.card.employee-card .employee-info p[data-v-e2c36622]{margin-bottom:0;min-height:100px;padding-top:10px}.card.employee-card .employee-info p span[data-v-e2c36622]{display:block}.card.employee-card .employee-info p span.employee-name[data-v-e2c36622]{font-size:120%;font-weight:500}.card.employee-card .employee-info p span.batch[data-v-e2c36622]{font-size:100%}.card.employee-card .employee-info p span.other[data-v-e2c36622]{font-size:90%}","",{version:3,sources:["webpack://./resources/js/views/employee/card-view.vue"],names:[],mappings:"AAsbA,qCAGI,cAAA,CAFA,UAAA,CACA,8BApbJ,CAwbQ,oEAKI,kBAAA,CADA,iBAAA,CAHA,UAAA,CAEA,YAAA,CAGA,iBAAA,CAEA,eAAA,CADA,iBAAA,CALA,WAhbZ,CAubY,sEAEI,cAAA,CADA,gBApbhB,CAubY,wEACI,UArbhB,CAwbQ,sDAEI,eAAA,CACA,gBAAA,CAFA,gBApbZ,CAwbY,2DACI,aAtbhB,CAwbgB,yEACI,cAAA,CACA,eAtbpB,CAwbgB,iEACI,cAtbpB,CAwbgB,iEACI,aAtbpB",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.card.employee-card {\n    opacity: 0.9;\n    transition: all 0.3s ease-in-out;\n    cursor: pointer;\n\n    .employee-info {\n        .employee-thumb {\n            float: left;\n            width: 100px;\n            height: 100px;\n            border-radius: 50%;\n            background: #e1e2e3;\n            margin-right: 20px;\n            text-align: center;\n            overflow: hidden;\n            i {\n                padding-top: 25px;\n                font-size: 50px;\n            }\n            img {\n                width: 100%;\n            }\n        }\n        p{\n            padding-top: 10px;\n            margin-bottom: 0;\n            min-height: 100px;\n\n            span {\n                display: block;\n\n                &.employee-name{\n                    font-size: 120%;\n                    font-weight: 500;\n                }\n                &.batch{\n                    font-size: 100%;\n                }\n                &.other{\n                    font-size: 90%;\n                }\n            }\n        }\n    }\n}\n"],sourceRoot:""}]);const i=r},68367:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});const o={components:{employeeForm:n(30671).Z},data:function(){return{employees:{total:0,data:[]},selectAll:!1,employeeGroupForm:new Form({ids:[],employee_group_id:"",action:"attach"}),employee_groups:[],selected_group:null,filter:{sort_by:"first_name",order:"asc",page_length:12,first_name:"",middle_name:"",last_name:"",father_name:"",department_id:[],designation_id:[],employee_group_id:[],status:"active"},orderByOptions:[{value:"first_name",translation:i18n.employee.first_name}],showFilterPanel:!1,showCreatePanel:!1,help_topic:"",departments:[],selected_departments:null,designations:[],selected_designations:null,selected_employee_groups:null,statuses:[{text:i18n.employee.status_active,value:"active"},{text:i18n.employee.status_inactive,value:"inactive"}]}},mounted:function(){helper.hasPermission("list-employee")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getEmployees(),helper.showDemoNotification(["employee"])},methods:{hasPermission:function(e){return helper.hasPermission(e)},getConfig:function(e){return helper.getConfig(e)},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeCode:function(e){return helper.getEmployeeCode(e)},getEmployees:function(e){var t=this,n=this.$loading.show();"number"!=typeof e&&(e=1),this.selectAll=!1;var o=helper.getFilterURL(this.filter);axios.get("/api/employee?page="+e+o).then((function(e){t.employees=e.employees,t.departments=e.filters.departments,t.designations=e.filters.designations,t.employee_categories=e.filters.employee_categories,t.employee_groups=e.filters.employee_groups;var o=[];t.employees.data.forEach((function(e){o.push(e.id)})),t.selectAll=o.every((function(e){return t.employeeGroupForm.ids.indexOf(e)>-1}))?1:0,n.hide()})).catch((function(e){n.hide(),helper.showErrorMsg(e)}))},toggleSelectAll:function(){var e=this;this.selectAll?this.employees.data.forEach((function(t){e.employeeGroupForm.ids.indexOf(t.id)<0&&e.employeeGroupForm.ids.push(t.id)})):this.employees.data.forEach((function(t){var n=e.employeeGroupForm.ids.indexOf(t.id);n>=0&&e.employeeGroupForm.ids.splice(n,1)}))},getStatus:function(e){var t=e.employee_terms;return t.length&&t[0].date_of_joining<=helper.today()&&(!t[0].date_of_leaving||t[0].date_of_leaving>=helper.today())?'<span class="label label-success">'+i18n.employee.status_active+"</span>":'<span class="label label-danger">'+i18n.employee.status_inactive+"</span>"},print:function(){var e=this.$loading.show();axios.post("/api/employee/print",{filter:this.filter}).then((function(t){var n=window.open("/print");e.hide(),n.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/employee/pdf",{filter:this.filter}).then((function(n){t.hide(),window.open("/download/report/"+n+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},exportExcel:function(){return"/api/employee?action=excel"+helper.getFilterURL(this.filter)+"&token="+this.authToken},onDepartmentSelect:function(e){this.filter.department_id.push(e.id)},onDepartmentRemove:function(e){this.filter.department_id.splice(this.filter.department_id.indexOf(e.id),1)},onDesignationSelect:function(e){this.filter.designation_id.push(e.id)},onDesignationRemove:function(e){this.filter.designation_id.splice(this.filter.designation_id.indexOf(e.id),1)},onEmployeeGroupSelect:function(e){this.filter.employee_group_id.push(e.id)},onEmployeeGroupRemove:function(e){this.filter.employee_group_id.splice(this.filter.employee_group_id.indexOf(e.id),1)},onGroupSelect:function(e){this.employeeGroupForm.employee_group_id=e.id},confirmGroupAction:function(){var e=this;return function(t){return e.groupAction()}},groupAction:function(){var e=this,t=this.$loading.show();this.employeeGroupForm.post("/api/employee/action/group").then((function(n){toastr.success(n.message),e.getEmployees(),e.employeeGroupForm.action="attach",e.selected_group=null,e.employeeGroupForm.ids=[],t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},navigateToEmployee:function(e){this.$router.push("/employee/"+e.uuid)},isToday:function(e){return moment(e).format("MM-DD")==moment(helper.today()).format("MM-DD")}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getEmployees()},"filter.order":function(e){this.getEmployees()},"filter.page_length":function(e){this.getEmployees()}},computed:{authToken:function(){return helper.getAuthToken()}}};var a=n(93379),s=n.n(a),r=n(14432),i={insert:"head",singleton:!1};s()(r.Z,i);r.Z.locals;const l=(0,n(51900).Z)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page-titles"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.employee"))+" \n                    "),e.employees.total?n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.employees.total,from:e.employees.from,to:e.employees.to})))]):n("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"action-buttons pull-right"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.list_view"),expression:"trans('general.list_view')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/list")}}},[n("i",{staticClass:"fas fa-list"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.list_view")))])]),e._v(" "),e.employees.total&&!e.showCreatePanel&&e.hasPermission("create-employee")?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[n("i",{staticClass:"fas fa-plus"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.add_new_employee")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():n("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[n("i",{staticClass:"fas fa-filter"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),n("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),n("div",{staticClass:"btn-group"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),n("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[n("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[n("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))]),e._v(" "),n("a",{staticClass:"dropdown-item custom-dropdown",attrs:{href:e.exportExcel()}},[n("i",{staticClass:"fas fa-file-excel"}),e._v(" "+e._s(e.trans("general.generate_excel")))])])]),e._v(" "),n("help-button",{on:{clicked:function(t){e.help_topic="employee"}}})],1)])])]),e._v(" "),n("div",{staticClass:"container-fluid"},[n("transition",{attrs:{name:"fade"}},[e.showFilterPanel?n("div",{staticClass:"card card-form"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.first_name")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.first_name,expression:"filter.first_name"}],staticClass:"form-control",attrs:{name:"first_name",placeholder:e.trans("employee.first_name")},domProps:{value:e.filter.first_name},on:{input:function(t){t.target.composing||e.$set(e.filter,"first_name",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.middle_name")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.middle_name,expression:"filter.middle_name"}],staticClass:"form-control",attrs:{name:"middle_name",placeholder:e.trans("employee.middle_name")},domProps:{value:e.filter.middle_name},on:{input:function(t){t.target.composing||e.$set(e.filter,"middle_name",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.last_name")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.last_name,expression:"filter.last_name"}],staticClass:"form-control",attrs:{name:"last_name",placeholder:e.trans("employee.last_name")},domProps:{value:e.filter.last_name},on:{input:function(t){t.target.composing||e.$set(e.filter,"last_name",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.father_name")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.father_name,expression:"filter.father_name"}],staticClass:"form-control",attrs:{name:"father_name",placeholder:e.trans("employee.father_name")},domProps:{value:e.filter.father_name},on:{input:function(t){t.target.composing||e.$set(e.filter,"father_name",t.target.value)}}})])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.department")))]),e._v(" "),n("v-select",{attrs:{label:"name","track-by":"id",name:"department_id",id:"department_id",options:e.departments,placeholder:e.trans("employee.select_department"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_departments},on:{select:e.onDepartmentSelect,remove:e.onDepartmentRemove},model:{value:e.selected_departments,callback:function(t){e.selected_departments=t},expression:"selected_departments"}},[e.departments.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.designation")))]),e._v(" "),n("v-select",{attrs:{label:"name","track-by":"id","group-values":"designations","group-label":"employee_category","group-select":!1,name:"designation_id",id:"designation_id",options:e.designations,placeholder:e.trans("employee.select_designation"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_designations},on:{select:e.onDesignationSelect,remove:e.onDesignationRemove},model:{value:e.selected_designations,callback:function(t){e.selected_designations=t},expression:"selected_designations"}},[e.designations.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_group")))]),e._v(" "),n("v-select",{attrs:{label:"name","track-by":"id",name:"employee_group_id",id:"employee_group_id",options:e.employee_groups,placeholder:e.trans("employee.select_employee_group"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_employee_groups},on:{select:e.onEmployeeGroupSelect,remove:e.onEmployeeGroupRemove},model:{value:e.selected_employee_groups,callback:function(t){e.selected_employee_groups=t},expression:"selected_employee_groups"}},[e.employee_groups.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.status")))]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.filter.status,expression:"filter.status"}],staticClass:"custom-select col-12",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.filter,"status",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.statuses,(function(t){return n("option",{domProps:{value:t.value}},[e._v("\n                                    "+e._s(t.text)+"\n                                  ")])}))],2)])])]),e._v(" "),n("div",{staticClass:"card-footer text-right"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),n("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getEmployees}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.showCreatePanel?n("div",{staticClass:"card card-form"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("employee.add_new_employee")))]),e._v(" "),n("employee-form",{on:{completed:e.getEmployees,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]),e._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body p-4"},[n("div",{staticClass:"row"},e._l(e.employees.data,(function(t){return n("div",{key:t.uuid,staticClass:"col-md-3 col-12"},[n("div",{staticClass:"card card-box with-shadow employee-card"},[n("div",{staticClass:"card-body"},[e.isToday(t.date_of_birth)?n("div",{staticClass:"ribbon ribbon-top-left"},[n("span",{staticClass:"ribbon-red"},[n("i",{staticClass:"fas fa-birthday-cake"}),e._v(" "+e._s(e.trans("calendar.birthday")))])]):e._e(),e._v(" "),e.isToday(t.date_of_anniversary)?n("div",{staticClass:"ribbon ribbon-top-left"},[n("span",{staticClass:"ribbon-red"},[n("i",{staticClass:"fas fa-birthday-cake"}),e._v(" "+e._s(e.trans("calendar.anniversary")))])]):e._e(),e._v(" "),t.employee_terms[0]&&e.isToday(t.employee_terms[0].date_of_joining)?n("div",{staticClass:"ribbon ribbon-top-left"},[n("span",{staticClass:"ribbon-red"},[n("i",{staticClass:"fas fa-birthday-cake"}),e._v(" "+e._s(e.trans("calendar.work_anniversary_short")))])]):e._e(),e._v(" "),n("div",{staticClass:"employee-info",on:{click:function(n){return e.navigateToEmployee(t)}}},[n("span",{staticClass:"employee-thumb pull-left"},[t.photo?[n("img",{staticStyle:{height:"inherit",width:"auto"},attrs:{src:"/"+t.photo}})]:["female"==t.gender?n("img",{staticClass:"img-circle",attrs:{src:"/images/avatar_female.png"}}):n("img",{staticClass:"img-circle",attrs:{src:"/images/avatar_male.png"}})]],2),e._v(" "),n("p",[n("span",{staticClass:"other small text-muted"},[e._v(e._s(t.employee_code)+" \n                                            "),t.age?[e._v("("+e._s(t.age.years+" "+e.trans("list.year")+" "+t.age.months+" "+e.trans("list.month"))+")")]:e._e()],2),e._v(" "),n("span",{staticClass:"employee-name"},[e._v(e._s(t.name)+" "),n("span",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(e.getStatus(t))}})]),e._v(" "),n("span",{staticClass:"other small text-muted"},[t.employee_designations.length&&t.employee_designations[0].department_id?[e._v(e._s(t.employee_designations[0].department.name))]:e._e(),e._v(" "),t.employee_designations.length?[e._v("\n                                                "+e._s(t.employee_designations[0].designation.name+" ("+t.employee_designations[0].designation.employee_category.name+")")+"\n                                            ")]:e._e()],2),e._v(" "),n("span",{staticClass:"other small text-muted"},[t.employee_terms[0]?[e._v(e._s(e.trans("general.since"))+" "+e._s(e._f("moment")(t.employee_terms[0].date_of_joining)))]:e._e(),e._v(" "),n("i",{staticClass:"fas fa-mobile"}),e._v(" "+e._s(t.contact_number)+"\n                                        ")],2)])])])])])})),0),e._v(" "),e.employees.total?e._e():n("module-info",{attrs:{module:"employee",title:"employee_module_title",description:"employee_module_description",icon:"check-circle"}},[n("div",{attrs:{slot:"btn"},slot:"btn"},[e.showCreatePanel?e._e():n("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[n("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))])])]),e._v(" "),n("pagination-record",{attrs:{"show-page-length":!1,"page-length":e.filter.page_length,records:e.employees},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getEmployees}})],1),e._v(" "),e.employeeGroupForm.ids.length&&e.hasPermission("edit-employee")?n("div",{staticClass:"m-t-10 card-body border-top p-4"},[n("h4",{staticClass:"card-title"}),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)},keydown:function(t){return e.employeeGroupForm.errors.clear(t.target.name)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_group")))]),e._v(" "),n("v-select",{attrs:{label:"name","track-by":"id",name:"group_id",id:"group_id",options:e.employee_groups,placeholder:e.trans("employee.select_employee_group")},on:{select:e.onGroupSelect,remove:function(t){e.employeeGroupForm.employee_group_id=""}},model:{value:e.selected_group,callback:function(t){e.selected_group=t},expression:"selected_group"}},[e.employee_groups.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])]),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeGroupForm,"prop-name":"group_id"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"radio radio-success m-t-20"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.action,expression:"employeeGroupForm.action"}],attrs:{type:"radio",value:"attach",id:"type_attach",name:"action"},domProps:{checked:"attach"==e.employeeGroupForm.action,checked:e._q(e.employeeGroupForm.action,"attach")},on:{click:function(t){return e.employeeGroupForm.errors.clear("action")},change:function(t){return e.$set(e.employeeGroupForm,"action","attach")}}}),e._v(" "),n("label",{attrs:{for:"type_attach"}},[e._v(e._s(e.trans("general.add")))])]),e._v(" "),n("div",{staticClass:"radio radio-success"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.action,expression:"employeeGroupForm.action"}],attrs:{type:"radio",value:"detach",id:"type_detach",name:"action"},domProps:{checked:"detach"==e.employeeGroupForm.action,checked:e._q(e.employeeGroupForm.action,"detach")},on:{click:function(t){return e.employeeGroupForm.errors.clear("action")},change:function(t){return e.$set(e.employeeGroupForm,"action","detach")}}}),e._v(" "),n("label",{attrs:{for:"type_detach"}},[e._v(e._s(e.trans("general.remove")))])]),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeGroupForm,"prop-name":"action"}})],1)])]),e._v(" "),n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmGroupAction()},expression:"{ok: confirmGroupAction()}"}],key:"group-action",staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"}},[e._v(e._s(e.trans("general.save")))])])]):e._e()])],1),e._v(" "),n("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,"e2c36622",null).exports},30671:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const o={components:{},data:function(){return{employeeForm:new Form({first_name:"",middle_name:"",last_name:"",father_name:"",mother_name:"",contact_number:"",date_of_joining:"",date_of_birth:"",department_id:"",designation_id:"",gender:"",code:"",prefix:""}),codes:[],genders:[],departments:[],selected_department:null,designations:[],selected_designation:null}},mounted:function(){this.getPreRequisite()},methods:{getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/pre-requisite").then((function(n){e.departments=n.departments,e.designations=n.designations,e.genders=n.genders,e.codes=n.codes,e.employeeForm.prefix=helper.getConfig("employee_code_prefix"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},submit:function(){var e=this,t=this.$loading.show();this.employeeForm.post("/api/employee").then((function(n){toastr.success(n.message),e.selected_designation=null,e.selected_department=null,e.getPreRequisite(),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onDesignationSelect:function(e){this.employeeForm.designation_id=e.id},onDepartmentSelect:function(e){this.employeeForm.department_id=e.id},getConfig:function(e){return helper.getConfig(e)}},watch:{"employeeForm.prefix":function(e){var t=this.codes.find((function(t){return t.prefix==e}));this.employeeForm.code=void 0===t?helper.formatWithPadding(1,helper.getConfig("employee_code_digit")):helper.formatWithPadding(t.code+1,helper.getConfig("employee_code_digit"))}}};const a=(0,n(51900).Z)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)},keydown:function(t){return e.employeeForm.errors.clear(t.target.name)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.code")))]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.prefix,expression:"employeeForm.prefix"}],staticClass:"form-control",attrs:{type:"text",name:"prefix",placeholder:e.trans("employee.employee_code_prefix")},domProps:{value:e.employeeForm.prefix},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"prefix",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"col-12 col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.code,expression:"employeeForm.code"}],staticClass:"form-control",attrs:{type:"text",name:"code",placeholder:e.trans("employee.code")},domProps:{value:e.employeeForm.code},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"code",t.target.value)}}})])]),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"code"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.name")))]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.first_name,expression:"employeeForm.first_name"}],staticClass:"form-control",attrs:{type:"text",name:"first_name",placeholder:e.trans("employee.first_name")},domProps:{value:e.employeeForm.first_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"first_name",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"first_name"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.middle_name,expression:"employeeForm.middle_name"}],staticClass:"form-control",attrs:{type:"text",name:"middle_name",placeholder:e.trans("employee.middle_name")},domProps:{value:e.employeeForm.middle_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"middle_name",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"middle_name"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.last_name,expression:"employeeForm.last_name"}],staticClass:"form-control",attrs:{type:"text",name:"last_name",placeholder:e.trans("employee.last_name")},domProps:{value:e.employeeForm.last_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"last_name",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"last_name"}})],1)])])])]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.department")))]),e._v(" "),n("v-select",{attrs:{label:"name",name:"department_id",id:"department_id",options:e.departments,placeholder:e.trans("employee.select_department")},on:{select:e.onDepartmentSelect,close:function(t){return e.employeeForm.errors.clear("department_id")},remove:function(t){e.employeeForm.department_id=""}},model:{value:e.selected_department,callback:function(t){e.selected_department=t},expression:"selected_department"}},[e.departments.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"department_id"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.designation")))]),e._v(" "),n("v-select",{attrs:{label:"name","group-values":"designations","group-label":"employee_category","group-select":!1,name:"designation_id",id:"designation_id",options:e.designations,placeholder:e.trans("employee.select_designation")},on:{select:e.onDesignationSelect,close:function(t){return e.employeeForm.errors.clear("designation_id")},remove:function(t){e.employeeForm.designation_id=""}},model:{value:e.selected_designation,callback:function(t){e.selected_designation=t},expression:"selected_designation"}},[e.designations.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"designation_id"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.father_name")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.father_name,expression:"employeeForm.father_name"}],staticClass:"form-control",attrs:{type:"text",name:"father_name",placeholder:e.trans("employee.father_name")},domProps:{value:e.employeeForm.father_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"father_name",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"father_name"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.mother_name")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.mother_name,expression:"employeeForm.mother_name"}],staticClass:"form-control",attrs:{type:"text",name:"mother_name",placeholder:e.trans("employee.mother_name")},domProps:{value:e.employeeForm.mother_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"mother_name",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"mother_name"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.contact_number")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.contact_number,expression:"employeeForm.contact_number"}],staticClass:"form-control",attrs:{type:"text",name:"contact_number",placeholder:e.trans("employee.contact_number")},domProps:{value:e.employeeForm.contact_number},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"contact_number",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"contact_number"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.gender")))]),e._v(" "),n("div",{staticClass:"radio radio-info p-l-0"},e._l(e.genders,(function(t){return n("div",{staticClass:"form-check form-check-inline "},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.gender,expression:"employeeForm.gender"}],staticClass:"form-check-input",attrs:{type:"radio",id:t.id,name:"gender"},domProps:{value:t.id,checked:e.employeeForm.gender==t.id,checked:e._q(e.employeeForm.gender,t.id)},on:{click:function(t){return e.employeeForm.errors.clear("gender")},change:function(n){return e.$set(e.employeeForm,"gender",t.id)}}}),e._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:t.id}},[e._v(" "+e._s(e.trans("list."+t.id)))])])})),0),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"gender"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.date_of_birth")))]),e._v(" "),n("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("employee.date_of_birth")},on:{selected:function(t){return e.employeeForm.errors.clear("date_of_birth")}},model:{value:e.employeeForm.date_of_birth,callback:function(t){e.$set(e.employeeForm,"date_of_birth",t)},expression:"employeeForm.date_of_birth"}}),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"date_of_birth"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-3"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.date_of_joining")))]),e._v(" "),n("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("employee.date_of_joining")},on:{selected:function(t){return e.employeeForm.errors.clear("date_of_joining")}},model:{value:e.employeeForm.date_of_joining,callback:function(t){e.$set(e.employeeForm,"date_of_joining",t)},expression:"employeeForm.date_of_joining"}}),e._v(" "),n("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"date_of_joining"}})],1)])]),e._v(" "),n("div",{staticClass:"card-footer text-right"},[n("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),n("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=card-view.js.map?id=7f098e87c5204b4160e7