(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[7088],{10540:(s,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const a={components:{},data:function(){return{passwordForm:new Form({current_password:"",new_password:"",new_password_confirmation:""}),content:"change password"}},mounted:function(){},methods:{changePassword:function(){var s=this.$loading.show();this.passwordForm.post("/api/change/password").then((function(t){toastr.success(t.message),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getConfig:function(s){return helper.getConfig(s)},getAuthUser:function(s){return helper.getAuthUser(s)}}};const o=(0,r(51900).Z)(a,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[s._v(s._s(s.trans("auth.change_password"))+" "),r("span",{staticClass:"card-subtitle"},[s._v(s._s(s.getAuthUser("name"))+" ("+s._s(s.getAuthUser("email"))+")")])])]),s._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return s.$router.push("/dashboard")}}},[r("i",{staticClass:"fas fa-home"}),s._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[s._v(s._s(s.trans("general.dashboard")))])])])])])]),s._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-8"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body p-4"},[r("form",{on:{submit:function(t){return t.preventDefault(),s.changePassword.apply(null,arguments)},keydown:function(t){return s.passwordForm.errors.clear(t.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[s._v(s._s(s.trans("auth.current_password")))]),s._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordForm.current_password,expression:"passwordForm.current_password"}],staticClass:"form-control",attrs:{type:"password",name:"current_password",placeholder:s.trans("auth.current_password")},domProps:{value:s.passwordForm.current_password},on:{input:function(t){t.target.composing||s.$set(s.passwordForm,"current_password",t.target.value)}}}),s._v(" "),r("show-error",{attrs:{"form-name":s.passwordForm,"prop-name":"current_password"}})],1)]),s._v(" "),r("div",{staticClass:"col-12 col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[s._v(s._s(s.trans("auth.new_password")))]),s._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordForm.new_password,expression:"passwordForm.new_password"}],staticClass:"form-control",attrs:{type:"password",name:"new_password",placeholder:s.trans("auth.new_password")},domProps:{value:s.passwordForm.new_password},on:{input:function(t){t.target.composing||s.$set(s.passwordForm,"new_password",t.target.value)}}}),s._v(" "),r("show-error",{attrs:{"form-name":s.passwordForm,"prop-name":"new_password"}})],1)]),s._v(" "),r("div",{staticClass:"col-12 col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[s._v(s._s(s.trans("auth.new_password_confirmation")))]),s._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordForm.new_password_confirmation,expression:"passwordForm.new_password_confirmation"}],staticClass:"form-control",attrs:{type:"password",name:"new_password_confirmation",placeholder:s.trans("auth.new_password_confirmation")},domProps:{value:s.passwordForm.new_password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.passwordForm,"new_password_confirmation",t.target.value)}}}),s._v(" "),r("show-error",{attrs:{"form-name":s.passwordForm,"prop-name":"new_password_confirmation"}})],1)])]),s._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light pull-right m-t-10",attrs:{type:"submit"}},[s._v(s._s(s.trans("auth.change_password")))])])])])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=changePassword.js.map?id=1712e6406e9c6e29967f