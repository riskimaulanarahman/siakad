(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[2285],{50464:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const s={components:{certificateForm:a(95083).Z},data:function(){return{uuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("edit-certificate")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const i=(0,a(51900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("academic.edit_certificate")))])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/academic/certificate")}}},[a("i",{staticClass:"fas fa-list"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("academic.certificate")))])])])])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card p-4"},[a("div",{staticClass:"card-body"},[a("certificate-form",{attrs:{uuid:e.uuid}})],1)])])])}),[],!1,null,null,null).exports},95083:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const s={components:{},props:["uuid"],data:function(){return{certificateForm:new Form({certificate_template_id:"",body:"",student_record_id:"",employee_id:"",custom_fields:[]}),type:"",certificate_templates:[],certificate_template_details:[],selected_certificate_template:null,selected_student:null,selected_student_record:null,selected_employee:null,studentFilter:{name:"",page_length:helper.getConfig("page_length")},employeeFilter:{name:"",page_length:helper.getConfig("page_length")},students:{data:[],total:0},employees:{data:[],total:0}}},mounted:function(){this.getPreRequisite()},methods:{getStudentName:function(e){return helper.getStudentName(e)},getStudentFatherName:function(e){return e.parent.father_name},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeCode:function(e){return helper.getEmployeeCode(e)},getCustomFieldName:function(e){return e+"_custom_field"},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/certificate/pre-requisite").then((function(a){e.certificate_templates=a.certificate_templates,e.certificate_template_details=a.certificate_template_details,e.uuid&&e.get(),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onCertificateTemplateSelect:function(e){var t=this;this.certificateForm.certificate_template_id=e.id;var a=this.certificate_template_details.find((function(t){return t.id==e.id}));this.certificateForm.custom_fields=[],void 0!==a&&(this.type=a.type,this.certificateForm.body=a.body,a.options.custom_fields.forEach((function(e){t.certificateForm.custom_fields.push({name:e,value:""})})))},onCertificateTemplateRemove:function(e){this.certificateForm.certificate_template_id="",this.type="",this.certificateForm.body=""},searchStudent:function(e){var t=this,a=this.$loading.show();"number"!=typeof e&&(e=1);var s=helper.getFilterURL(this.studentFilter);axios.get("/api/student/search/name?page="+e+s).then((function(e){if(t.students=e,!e.total)return a.hide(),toastr.error(i18n.general.no_search_result_found);a.hide()})).catch((function(e){a.hide(),helper.showErrorMsg(e)}))},selectStudentRecord:function(e,t){this.certificateForm.student_record_id=t.id,this.selected_student=e,this.selected_student_record=t,this.students=[],this.studentFilter.name="",this.updateTemplate()},searchEmployee:function(e){var t=this,a=this.$loading.show();"number"!=typeof e&&(e=1);var s=helper.getFilterURL(this.employeeFilter);axios.get("/api/employee/search/name?page="+e+s).then((function(e){if(t.employees=e,!e.total)return a.hide(),toastr.error(i18n.general.no_search_result_found);a.hide()})).catch((function(e){a.hide(),helper.showErrorMsg(e)}))},selectEmployee:function(e){this.certificateForm.employee_id=e.id,this.selected_employee=e,this.employees=[],this.employeeFilter.name="",this.updateTemplate()},updateTemplate:function(){var e=this,t=this.certificate_template_details.find((function(t){return t.id==e.certificateForm.certificate_template_id}));if(void 0!==t){var a=t.body;a=this.updateCustomFields(a),this.selected_student||this.selected_employee?this.certificateForm.body=this.selected_student?this.updateStudentRecord(a):this.updateEmployeeRecord(a):this.certificateForm.body=a}},updateStudentRecord:function(e){var t=this.selected_student,a=this.selected_student_record,s=t.parent;if(!a||!s)return e;var i=this.getStudentName(t);return e.replace("#NAME#",i).replace("#FIRST_NAME#",t.first_name).replace("#LAST_NAME#",t.last_name||"").replace("#FATHER_NAME#",s.father_name).replace("#MOTHER_NAME#",s.mother_name).replace("#COURSE#",a.batch.course.name).replace("#BATCH#",a.batch.name).replace("#SESSION#",helper.getDefaultAcademicSession().name).replace("#DATE_OF_BIRTH#",helper.formatDate(t.date_of_birth)).replace("#ADMISSION_NUMBER#",helper.getAdmissionNumber(a.admission)).replace("#DATE_OF_ADMISSION#",helper.formatDate(a.admission.date_of_admission)).replace("#ROLL_NUMBER#",helper.getRollNumber(a)).replace("#CURRENT_DATE#",helper.defaultDate()).replace("#CURRENT_TIME#",helper.defaultTime()).replace("#CURRENT_DATE_TIME#",helper.defaultDateTime()).replace("#PRESENT_ADDRESS#",t.present_address).replace("#PERMANENT_ADDRESS#",t.permanent_address)},updateEmployeeRecord:function(e){var t=this.selected_employee;return e.replace("#NAME#",this.getEmployeeName(t)).replace("#FIRST_NAME#",t.first_name).replace("#LAST_NAME#",t.last_name).replace("#FATHER_NAME#",t.father_name).replace("#MOTHER_NAME#",t.mother_name).replace("#DATE_OF_BIRTH#",helper.formatDate(t.date_of_birth)).replace("#EMPLOYEE_CODE#",this.getEmployeeCode(t)).replace("#DESIGNATION#",helper.getEmployeeDesignationOnDate(t)).replace("#DATE_OF_JOINING#",helper.getEmployeeDateOfJoining(t)).replace("#CURRENT_DATE#",helper.defaultDate()).replace("#CURRENT_TIME#",helper.defaultTime()).replace("#CURRENT_DATE_TIME#",helper.defaultDateTime()).replace("#PRESENT_ADDRESS#",t.present_address).replace("#PERMANENT_ADDRESS#",t.permanent_address)},updateCustomFields:function(e){return this.certificateForm.custom_fields.forEach((function(t){t.value&&(e=e.replace("#"+t.name+"#",t.value))})),e},proceed:function(){this.uuid?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.certificateForm.post("/api/certificate").then((function(a){toastr.success(a.message),e.type=null,e.selected_certificate_template=null,e.certificateForm.custom_fields=[],e.selected_student=null,e.selected_student_record=null,e.selected_employee=null,e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/certificate/"+this.uuid).then((function(a){if(e.certificateForm.certificate_template_id=a.certificate.certificate_template_id,e.selected_certificate_template=a.certificate.certificate_template_id?{id:a.certificate.certificate_template_id,name:a.certificate.certificate_template.name}:null,e.certificateForm.student_record_id=a.certificate.student_record_id,e.certificateForm.employee_id=a.certificate.employee_id,e.type=a.certificate.certificate_template.type,"student"==e.type?(e.selected_student=a.certificate.student_record.student,e.selected_student.student_records=[a.certificate.student_record],e.selected_student.parent=a.certificate.student_record.student.parent):"employee"==e.type&&(e.selected_employee=a.certificate.employee),e.certificateForm.body=a.certificate.body,e.certificateForm.custom_fields=[],a.certificate.options&&a.certificate.options.custom_fields){var s=[];a.certificate.options.custom_fields.forEach((function(e){s.push({name:e.name,value:e.value})})),e.certificateForm.custom_fields=s}t.hide()})).catch((function(a){t.hide(),helper.showErrorMsg(a),e.$router.push("/academic/certificate")}))},update:function(){var e=this,t=this.$loading.show();this.certificateForm.patch("/api/certificate/"+this.uuid).then((function(a){toastr.success(a.message),t.hide(),e.$router.push("/academic/certificate")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},computed:{},filters:{},watch:{"certificateForm.custom_fields":{handler:function(e){this.updateTemplate()},deep:!0}}};const i=(0,a(51900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.certificateForm.errors.clear(t.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-5"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.certificate_template")))]),e._v(" "),a("v-select",{attrs:{label:"name",name:"certificate_template_id",id:"certificate_template_id",options:e.certificate_templates,placeholder:e.trans("academic.select_certificate_template")},on:{select:e.onCertificateTemplateSelect,close:function(t){return e.certificateForm.errors.clear("certificate_template_id")},remove:e.onCertificateTemplateRemove},model:{value:e.selected_certificate_template,callback:function(t){e.selected_certificate_template=t},expression:"selected_certificate_template"}},[e.certificate_templates.length?e._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                "+e._s(e.trans("general.no_option_found"))+"\n                            ")])]),e._v(" "),a("show-error",{attrs:{"form-name":e.certificateForm,"prop-name":"certificate_template_id"}})],1),e._v(" "),"student"==e.type?a("div",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.studentFilter.name,expression:"studentFilter.name"}],staticClass:"form-control",attrs:{type:"text",name:"student_name",placeholder:e.trans("student.student_search_by_name")},domProps:{value:e.studentFilter.name},on:{input:function(t){t.target.composing||e.$set(e.studentFilter,"name",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-info pull-right",attrs:{type:"button"},on:{click:e.searchStudent}},[a("i",{staticClass:"fas fa-search"}),e._v(" "+e._s(e.trans("general.search")))])])])]),e._v(" "),e.students.total?[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[e._v(e._s(e.trans("student.name")))]),e._v(" "),a("th",[e._v(e._s(e.trans("academic.batch")))]),e._v(" "),a("th",[e._v(e._s(e.trans("student.first_guardian_name")))]),e._v(" "),a("th",[e._v(e._s(e.trans("student.contact_number")))]),e._v(" "),a("th",{staticClass:"table-option"})])]),e._v(" "),a("tbody",[e._l(e.students.data,(function(t){return e._l(t.student_records,(function(s){return a("tr",[a("td",[e._v(e._s(e.getStudentName(t)))]),e._v(" "),a("td",[e._v(e._s(s.batch.course.name+" "+s.batch.name))]),e._v(" "),a("td",[e._v(e._s(t.parent.first_guardian_name))]),e._v(" "),a("td",[e._v(e._s(t.contact_number))]),e._v(" "),a("td",{staticClass:"table-option"},[a("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(a){return e.selectStudentRecord(t,s)}}},[e._v(e._s(e.trans("student.select_student")))])])])}))}))],2)])]),e._v(" "),a("pagination-record",{attrs:{"page-length":e.studentFilter.page_length,records:e.students},on:{"update:pageLength":function(t){return e.$set(e.studentFilter,"page_length",t)},"update:page-length":function(t){return e.$set(e.studentFilter,"page_length",t)},updateRecords:e.searchStudent}})]:e._e()],2):e._e(),e._v(" "),"employee"==e.type?a("div",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeFilter.name,expression:"employeeFilter.name"}],staticClass:"form-control",attrs:{type:"text",name:"employee_name",placeholder:e.trans("employee.employee_search_by_name")},domProps:{value:e.employeeFilter.name},on:{input:function(t){t.target.composing||e.$set(e.employeeFilter,"name",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-info pull-right",attrs:{type:"button"},on:{click:e.searchEmployee}},[a("i",{staticClass:"fas fa-search"}),e._v(" "+e._s(e.trans("general.search")))])])])]),e._v(" "),e.employees.total?[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[e._v(e._s(e.trans("employee.code")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.name")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.father_name")))]),e._v(" "),a("th",[e._v(e._s(e.trans("employee.contact_number")))]),e._v(" "),a("th",{staticClass:"table-option"})])]),e._v(" "),a("tbody",e._l(e.employees.data,(function(t){return a("tr",[a("td",[e._v(e._s(e.getEmployeeCode(t)))]),e._v(" "),a("td",[e._v(e._s(e.getEmployeeName(t)))]),e._v(" "),a("td",[e._v(e._s(t.father_name))]),e._v(" "),a("td",[e._v(e._s(t.contact_number))]),e._v(" "),a("td",{staticClass:"table-option"},[a("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(a){return e.selectEmployee(t)}}},[e._v(e._s(e.trans("employee.select_employee")))])])])})),0)])]),e._v(" "),a("pagination-record",{attrs:{"page-length":e.employeeFilter.page_length,records:e.employees},on:{"update:pageLength":function(t){return e.$set(e.employeeFilter,"page_length",t)},"update:page-length":function(t){return e.$set(e.employeeFilter,"page_length",t)},updateRecords:e.searchEmployee}})]:e._e()],2):e._e(),e._v(" "),"student"==e.type&&e.selected_student&&e.selected_student_record?a("div",{staticClass:"m-b-20"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v(e._s(e.trans("student.name")+": "+e.getStudentName(e.selected_student)))]),e._v(" "),a("div",{staticClass:"col-6"},[e._v(e._s(e.trans("student.father_name")+": "+e.getStudentFatherName(e.selected_student))+" "),a("br")]),e._v(" "),a("div",{staticClass:"col-6"},[e._v(e._s(e.trans("academic.batch")+": "+e.selected_student_record.batch.course.name+" "+e.selected_student_record.batch.name))]),e._v(" "),a("div",{staticClass:"col-6"},[e._v(e._s(e.trans("student.contact_number")+": "+e.selected_student.contact_number))])])]):e._e(),e._v(" "),"employee"==e.type&&e.selected_employee?a("div",{staticClass:"m-b-20"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v(e._s(e.trans("employee.code")+": "+e.getEmployeeCode(e.selected_employee)))]),e._v(" "),a("div",{staticClass:"col-6"},[e._v(e._s(e.trans("employee.name")+": "+e.getEmployeeName(e.selected_employee)))]),e._v(" "),a("div",{staticClass:"col-6"},[e._v(e._s(e.trans("employee.father_name")+": "+e.selected_employee.father_name)+" "),a("br")]),e._v(" "),a("div",{staticClass:"col-6"},[e._v(e._s(e.trans("employee.contact_number")+": "+e.selected_employee.contact_number))])])]):e._e(),e._v(" "),e._l(e.certificateForm.custom_fields,(function(t,s){return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(t.name))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"custom_field.value"}],staticClass:"form-control",attrs:{type:"text",name:e.getCustomFieldName(s),placeholder:e.trans("academic.enter_certificate_template_custom_field_value")},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.certificateForm,"prop-name":e.getCustomFieldName(s)}})],1)})),e._v(" "),e.certificateForm.certificate_template_id?a("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))]):e._e()],2),e._v(" "),a("div",{staticClass:"col-12 col-sm-7"},[e.certificateForm.body?a("div",{staticClass:"border p-4",domProps:{innerHTML:e._s(e.certificateForm.body)}}):e._e()])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=edit.js.map?id=8eac068c7613071e763d