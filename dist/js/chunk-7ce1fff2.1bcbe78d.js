(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ce1fff2"],{"0b71":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"menuNameType"},[t._v(t._s(this.currentArea.name))]),a("form",{on:{submit:function(e){return e.preventDefault(),t.saveAreaBooking()}}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"lable",attrs:{for:"reason"}},[t._v("Motivo")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],staticClass:"form-control rounded-0",staticStyle:{resize:"none"},attrs:{id:"reason",rows:"4",cols:"50",required:""},domProps:{value:t.reason},on:{input:function(e){e.target.composing||(t.reason=e.target.value)}}})])]),a("div",{staticClass:"col-sm-3"},[a("b-form-group",{staticClass:"input",attrs:{id:"input-group-6"}},[a("label",{staticClass:"lable",attrs:{for:"hi"}},[t._v("Hora de Início")]),a("b-form-input",{staticClass:"rounded-0",attrs:{type:"time",id:"hi",required:""},model:{value:t.hi,callback:function(e){t.hi=e},expression:"hi"}})],1),a("b-form-group",{staticClass:"input",attrs:{id:"input-group-6"}},[a("label",{staticClass:"lable",attrs:{for:"date"}},[t._v("Data")]),a("b-form-input",{staticClass:"rounded-0",attrs:{type:"date",required:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),a("div",{staticClass:"col-sm-3"},[a("b-form-group",{staticClass:"input",attrs:{id:"input-group-6"}},[a("label",{staticClass:"lable",attrs:{for:"hf"}},[t._v("Hora do Final")]),a("b-form-input",{staticClass:"rounded-0",attrs:{type:"time",id:"hf",required:""},model:{value:t.hf,callback:function(e){t.hf=e},expression:"hf"}})],1)],1)]),a("b-button",{staticClass:"btn btn-primary border-0",attrs:{type:"submit",value:"Adicionar",squared:""}},[t._v("Confirmar")]),a("b-button",{staticClass:"btn btn-primary border-0",attrs:{type:"button",value:"Adicionar",squared:""},on:{click:function(e){return t.cancelAreaBooking()}}},[t._v("Cancelar")])],1)])])},s=[],n=(a("d3b7"),a("e25e"),a("1276"),a("96cf"),a("a18c")),i={data:function(){return{userName:"",userEmail:"",currentArea:[],areaName:"",reason:"",date:"",hi:"",hf:"",userOn:[]}},created:function(){this.userOn=this.$store.state.loggedUser,localStorage.getItem("currentArea")&&(this.currentArea=JSON.parse(localStorage.getItem("currentArea"))),this.userName=this.$store.getters.getName+" "+this.$store.getters.getLastName,this.userEmail=this.$store.getters.getEmail,this.currentArea=JSON.parse(localStorage.getItem("currentArea")),this.areaName=this.$store.getters.getCurrentArea},methods:{getLastId:function(){return this.$store.getters.areaBookingLastId+1},saveAreaBooking:function(){var t,e,a,r;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:if(t=this.date.split("-"),e=t[0],a=t[2],r=t[1],!(parseInt(e)<(new Date).getFullYear()||parseInt(e)>(new Date).getFullYear()+2)){s.next=8;break}Swal.fire({icon:"warning",text:"Introduza um ano válido!"}),s.next=20;break;case 8:if(!(parseInt(a)<=(new Date).getDate()&&parseInt(r)==(new Date).getMonth()+1)){s.next=12;break}Swal.fire({icon:"warning",text:"Introduza um dia válido!"}),s.next=20;break;case 12:return s.prev=12,s.next=15,regeneratorRuntime.awrap(this.$store.dispatch("postAreaBooking",{id:this.userOn.id,area:this.currentArea.area_id,reason:this.reason,date:this.date,initHour:this.hi,endHour:this.hf}));case 15:s.next=20;break;case 17:s.prev=17,s.t0=s["catch"](12),alert(s.t0);case 20:case"end":return s.stop()}}),null,this,[[12,17]])},cancelAreaBooking:function(){n["a"].push({name:"areasGallery"})}}},o=i,u=(a("d186"),a("2877")),c=Object(u["a"])(o,r,s,!1,null,"181ab0a3",null);e["default"]=c.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),s=a("5899"),n="["+s+"]",i=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),u=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},"97aa":function(t,e,a){},d186:function(t,e,a){"use strict";var r=a("97aa"),s=a.n(r);s.a},e25e:function(t,e,a){var r=a("23e7"),s=a("e583");r({global:!0,forced:parseInt!=s},{parseInt:s})},e583:function(t,e,a){var r=a("da84"),s=a("58a8").trim,n=a("5899"),i=r.parseInt,o=/^[+-]?0[Xx]/,u=8!==i(n+"08")||22!==i(n+"0x16");t.exports=u?function(t,e){var a=s(String(t));return i(a,e>>>0||(o.test(a)?16:10))}:i}}]);
//# sourceMappingURL=chunk-7ce1fff2.1bcbe78d.js.map