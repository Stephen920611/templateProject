(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"6An9":function(e,a,t){"use strict";t.r(a);t("GOpK");var n,l,r,m,i=t("D012"),s=(t("fl6I"),t("6Jb1")),c=(t("xju3"),t("993v")),o=(t("7lm+"),t("Oy9c")),d=(t("56BP"),t("9B4d")),u=(t("flUi"),t("BFxG")),p=t("zAuD"),f=t.n(p),E=t("43Yg"),h=t.n(E),I=t("/tCh"),b=t.n(I),T=t("scpF"),v=t.n(T),y=t("O/V9"),N=t.n(y),k=t("Tfcp"),C=t.n(k),A=t("8aBX"),g=t.n(A),G=(t("inXZ"),t("db/f")),U=(t("QnEw"),t("52uI")),S=(t("oVBX"),t("Mbjn")),P=t("2w0b"),w=t.n(P),F=t("LneV"),B=t("YF1u"),x=t.n(B),q=t("qj9E"),M=t("zHco"),L=t("MV62"),D=S["a"].Item,O=U["a"].Option,V=G["a"].TextArea,H=(n=Object(F["connect"])(function(e){var a=e.addInfo,t=e.checkRecord;e.loading;return{addInfo:a,checkRecord:t}}),l=S["a"].create(),n(r=l((m=function(e){function a(){var e;return h()(this,a),e=v()(this,N()(a).call(this)),e.onSubmitData=function(a){var t=C()(e),n=e.props,l=n.dispatch,r=n.form;n.addRow;a.preventDefault(),r.validateFieldsAndScroll(function(e,a){if(!e){var n=q["a"].auth.getLoginInfo(),r=n.data.id,m={member:{area:a.area,name:q["a"].lodash.isUndefined(a.name)?"":a.name,age:q["a"].lodash.isUndefined(a.age)?"":a.age,gender:q["a"].lodash.isUndefined(a.gender)?"":a.gender,nativePlace:q["a"].lodash.isUndefined(a.nativePlace)?"":a.nativePlace,address:q["a"].lodash.isUndefined(a.address)?"":a.address,idCard:q["a"].lodash.isUndefined(a.idCard)?"":a.idCard,phoneNum:q["a"].lodash.isUndefined(a.phoneNum)?"":a.phoneNum,baseInfo:q["a"].lodash.isUndefined(a.baseInfo)?"":a.baseInfo,fillUserId:r},memberActivity:{backFromWhere:q["a"].lodash.isUndefined(a.backFromWhere)?"":a.backFromWhere,backTime:q["a"].lodash.isUndefined(a.backTime)?"":q["a"].helper.dateFormat(a.backTime),backType:q["a"].lodash.isUndefined(a.backType)?"":a.backType,carNum:q["a"].lodash.isUndefined(a.carNum)?"":a.carNum,wayCity:q["a"].lodash.isUndefined(a.wayCity)?"":a.wayCity,fillUserId:r},memberTouch:{isTouchSuspect:q["a"].lodash.isUndefined(a.isTouchSuspect)?"":a.isTouchSuspect,suspectName:q["a"].lodash.isUndefined(a.suspectName)?"":a.suspectName,suspectIdCard:q["a"].lodash.isUndefined(a.suspectIdCard)?"":a.suspectIdCard,suspectTime:q["a"].lodash.isUndefined(a.suspectTime)?"":q["a"].helper.dateFormat(a.suspectTime),suspectPoint:q["a"].lodash.isUndefined(a.suspectPoint)?"":a.suspectPoint,isTouchIntimate:q["a"].lodash.isUndefined(a.isTouchIntimate)?"":a.isTouchIntimate,intimateName:q["a"].lodash.isUndefined(a.intimateName)?"":a.intimateName,intimateIdCard:q["a"].lodash.isUndefined(a.intimateIdCard)?"":a.intimateIdCard,intimateTime:q["a"].lodash.isUndefined(a.intimateTime)?"":q["a"].helper.dateFormat(a.intimateTime),intimatePoint:q["a"].lodash.isUndefined(a.intimatePoint)?"":a.intimatePoint,isTouchInfector:q["a"].lodash.isUndefined(a.isTouchInfector)?"":a.isTouchInfector,infectorName:q["a"].lodash.isUndefined(a.infectorName)?"":a.infectorName,infectorIdCard:q["a"].lodash.isUndefined(a.infectorIdCard)?"":a.infectorIdCard,infectorTime:q["a"].lodash.isUndefined(a.infectorTime)?"":q["a"].helper.dateFormat(a.infectorTime),infectorPoint:q["a"].lodash.isUndefined(a.infectorPoint)?"":a.infectorPoint,fillUserId:r},memberCurstate:{bodyCondition:q["a"].lodash.isUndefined(a.bodyCondition)?"":a.bodyCondition,hasSeek:q["a"].lodash.isUndefined(a.hasSeek)?"":a.hasSeek,seekHospital:q["a"].lodash.isUndefined(a.seekHospital)?"":a.seekHospital,seekTime:q["a"].lodash.isUndefined(a.seekTime)?"":q["a"].helper.dateFormat(a.seekTime),controlMeasures:q["a"].lodash.isUndefined(a.controlMeasures)?"":a.controlMeasures,controlTime:q["a"].lodash.isUndefined(a.controlTime)?"":q["a"].helper.dateFormat(a.controlTime),nextMeasures:q["a"].lodash.isUndefined(a.nextMeasures)?"":a.nextMeasures,fillUserId:r}};new Promise(function(e,a){l({type:"addInfo/addInfoAction",params:m,resolve:e,reject:a})}).then(function(e){0===e.code?(q["a"].prompt.success("\u63d0\u4ea4\u6210\u529f"),t.resetForm()):q["a"].prompt.error(e.msg)})}})},e.checkAge=function(e,a,t){var n=/^(?:[0-9][0-9]?|1[01][0-9]|200)$/;n.test(a)?t():t("\u5e74\u9f84\u8f93\u5165\u4e0d\u5408\u6cd5\uff01")},e.resetForm=function(){e.props.form.resetFields()},e.renderSelect=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=q["a"].auth.getLoginInfo();return e.map(function(e,n){return w.a.createElement(O,{key:n,value:e.name,disabled:!!a&&t.data.area!==e.name},e.name)})},e.state={formItemLayout:{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16},md:{span:16}}},formItemHalf:{labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:12}}},submitFormLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},baseInfoSelect:[],bodyConditionSelect:[],activities:{},currentInfo:{},member:{},touch:[],basicPersonnelInformation:{msg:"success",code:0,activities:[{id:1362,memberId:2476,backFromWhere:"\u7701\u5185",backTime:"2020-02-02 17:37",backType:"\u81ea\u9a7e",carNum:"\u9c81fb7l21",wayCity:"\u6dc4\u535a\u4e34\u6dc4\u533a",createTime:"2020-02-11 11:40",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}],currnets:[{id:1494,memberId:2476,bodyCondition:"\u6b63\u5e38",hasSeek:"\u662f",seekHospital:"\u83b1\u5c71\u6bd3\u749c\u9876",seekTime:"2020-02-08 08:39",controlMeasures:"\u5c45\u5bb6\u9694\u79bb",controlTime:"2020-02-05 11:40",nextMeasures:"\u5c45\u5bb6\u9694\u79bb",createTime:"2020-02-11 11:42",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}],member:{id:2476,area:"\u83b1\u5c71\u533a",name:"\u5218\u6653\u6668",address:"\u83b1\u5c71\u6cb3\u897f\u57ce\u5e02\u82b1\u56ed",idCard:"370781199312257865",phoneNum:"17862886396",age:26,gender:"\u7537",nativePlace:"\u5c71\u4e1c\u6f4d\u574a",baseInfo:"\u6b63\u5e38",createTime:"2020-02-11 11:39",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"},touch:[{id:1128,memberId:2476,isTouchSuspect:"\u662f",suspectName:"\u6d4b\u8bd51",suspectIdCard:"838288281873322",suspectTime:"2020-02-01 11:38",suspectPoint:"\u4e34\u6dc4\u535a\u4e34\u6dc4\u533a",isTouchIntimate:"\u662f",intimateName:"\u6d4b\u8bd52",intimateIdCard:"\u5c31\u662f\u5c31\u662f\u9526\u6c5f\u5927\u9152\u5e97",intimateTime:"2020-01-01 11:39",intimatePoint:"\u9752\u5dde\u5e02\u516c\u5b89\u5c40",isTouchInfector:"\u5426",infectorName:"\u6d4b\u8bd53",infectorIdCard:"\u8fd9\u5b69\u5b50\u5c31\u662f\u5c31\u662f\u5c31\u662f",infectorTime:"2020-02-09 11:39",infectorPoint:"\u83b1\u5c71\u6cb3\u897f\u8d70\u5eca",createTime:"2020-02-11 11:41",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}]}},e}return g()(a,e),b()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=(e.location,this);new Promise(function(e,t){a({type:"checkRecord/fetchSelectInfoAction",params:{type:"BASE_INFO"},resolve:e,reject:t})}).then(function(e){0===e.code?t.setState({baseInfoSelect:e.data}):q["a"].prompt.error(e.msg)}),new Promise(function(e,t){a({type:"checkRecord/fetchSelectInfoAction",params:{type:"BODY_CONDITION"},resolve:e,reject:t})}).then(function(e){0===e.code?t.setState({bodyConditionSelect:e.data}):q["a"].prompt.error(e.msg)})}},{key:"render",value:function(){var e=this.props,a=e.fetchStatus,t=e.form,n=t.getFieldDecorator,l=(t.getFieldValue,this.state),r=(l.activities,l.currentInfo,l.member,l.touch,l.formItemLayout),m=l.formItemHalf,p=l.submitFormLayout,E=l.bodyConditionSelect,h=l.baseInfoSelect,I=(q["a"].auth.getLoginInfo(),[{id:"GA001",key:"GA001",name:"\u829d\u7f58\u533a",pId:"GA",title:"\u829d\u7f58\u533a"},{id:"GA002",key:"GA002",name:"\u798f\u5c71\u533a",pId:"GA",value:"\u798f\u5c71\u533a"},{id:"GA003",key:"GA003",name:"\u83b1\u5c71\u533a",pId:"GA",value:"\u83b1\u5c71\u533a"},{id:"GA004",key:"GA004",name:"\u725f\u5e73\u533a",pId:"GA",value:"\u725f\u5e73\u533a"},{id:"GA005",key:"GA005",name:"\u6d77\u9633\u5e02",pId:"GA",value:"\u6d77\u9633\u5e02"},{id:"GA006",key:"GA006",name:"\u83b1\u9633\u5e02",pId:"GA",value:"\u83b1\u9633\u5e02"},{id:"GA007",key:"GA007",name:"\u6816\u971e\u5e02",pId:"GA",value:"\u6816\u971e\u5e02"},{id:"GA008",key:"GA008",name:"\u84ec\u83b1\u5e02",pId:"GA",value:"\u84ec\u83b1\u5e02"},{id:"GA009",key:"GA009",name:"\u957f\u5c9b\u53bf",pId:"GA",value:"\u957f\u5c9b\u53bf"},{id:"GA010",key:"GA010",name:"\u9f99\u53e3\u5e02",pId:"GA",value:"\u9f99\u53e3\u5e02"},{id:"GA011",key:"GA011",name:"\u62db\u8fdc\u5e02",pId:"GA",value:"\u62db\u8fdc\u5e02"},{id:"GA012",key:"GA012",name:"\u83b1\u5dde\u5e02",pId:"GA",value:"\u83b1\u5dde\u5e02"},{id:"GA013",key:"GA013",name:"\u5f00\u53d1\u533a",pId:"GA",value:"\u5f00\u53d1\u533a"},{id:"GA014",key:"GA014",name:"\u9ad8\u65b0\u533a",pId:"GA",value:"\u9ad8\u65b0\u533a"},{id:"GA015",key:"GA015",name:"\u4fdd\u7a0e\u6e2f\u533a",pId:"GA",value:"\u4fdd\u7a0e\u6e2f\u533a"},{id:"GA016",key:"GA016",name:"\u6606\u5d5b\u5c71\u4fdd\u62a4\u533a",pId:"GA",value:"\u6606\u5d5b\u5c71\u4fdd\u62a4\u533a"}]),b=[{linkTo:"/addInfo",name:"\u4fe1\u606f\u7ba1\u7406"},{name:"\u65b0\u589e\u4fe1\u606f"}];return w.a.createElement(M["a"],{title:"\u65b0\u589e\u4fe1\u606f",isSpecialBreadcrumb:!0,breadcrumbName:w.a.createElement(L["a"],{dataSource:b})},w.a.createElement("div",null,w.a.createElement("div",{className:x.a.detailItem},w.a.createElement(S["a"],{onSubmit:this.onSubmitData,hideRequiredMark:!0},w.a.createElement("div",{className:x.a.detailTitleName},"\u4eba\u5458\u57fa\u672c\u4fe1\u606f"),w.a.createElement(c["a"],{style:{marginBottom:20},loading:a},w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u53bf\u5e02\u533a\uff1a"}),n("area",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u53bf\u5e02\u533a"}],initialValue:q["a"].auth.getLoginInfo().data.area})(w.a.createElement(U["a"],{getPopupContainer:function(e){return e.parentNode},placeholder:"\u8bf7\u9009\u62e9\u53bf\u5e02\u533a"},this.renderSelect(I,!0))))),w.a.createElement(u["a"],{span:6,className:x.a.detailBtns},w.a.createElement(S["a"].Item,f()({},r,{label:"\u59d3\u540d\uff1a"}),n("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}]})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d"})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u5e74\u9f84\uff1a"}),n("age",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u5e74\u9f84"},{validator:this.checkAge}]})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u5e74\u9f84"})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u6027\u522b\uff1a"}),n("gender",{rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u6027\u522b"}]})(w.a.createElement(d["a"].Group,null,w.a.createElement(d["a"],{value:"\u7537"},"\u7537"),w.a.createElement(d["a"],{value:"\u5973"},"\u5973")))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u7c4d\u8d2f\uff1a"}),n("nativePlace",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u7c4d\u8d2f"}]})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u7c4d\u8d2f"})))),w.a.createElement(u["a"],{span:6,className:x.a.detailBtns},w.a.createElement(S["a"].Item,f()({},r,{label:"\u4f4f\u5740\uff1a"}),n("address",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f4f\u5740"}]})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u4f4f\u5740"})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u8eab\u4efd\u8bc1\u53f7\u7801\uff1a"}),n("idCard",{rules:[{message:"\u8bf7\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7\u7801"}]})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7\u7801"})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u8054\u7cfb\u7535\u8bdd\uff1a"}),n("phoneNum",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8054\u7cfb\u7535\u8bdd"}]})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u8054\u7cfb\u7535\u8bdd"}))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u88ab\u8c03\u67e5\u4eba\u57fa\u672c\u60c5\u51b5\uff1a"}),n("baseInfo",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u88ab\u8c03\u67e5\u4eba\u57fa\u672c\u60c5\u51b5"}]})(w.a.createElement(U["a"],{getPopupContainer:function(e){return e.parentNode},placeholder:"\u8bf7\u9009\u62e9\u88ab\u8c03\u67e5\u4eba\u57fa\u672c\u60c5\u51b5"},this.renderSelect(h))))))),w.a.createElement("div",{className:x.a.detailTitleName},"\u4eba\u5458\u6d3b\u52a8\u4fe1\u606f"),w.a.createElement(c["a"],{style:{marginBottom:20},loading:a},w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u4ece\u4f55\u5730\u6765\u70df(\u8fd4\u70df)\uff1a"}),n("backFromWhere",{rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u4ece\u4f55\u5730\u6765\u70df(\u8fd4\u70df)"}]})(w.a.createElement(d["a"].Group,null,w.a.createElement(d["a"],{value:"\u6b66\u6c49"},"\u6b66\u6c49"),w.a.createElement(d["a"],{value:"\u6e56\u5317"},"\u6e56\u5317"),w.a.createElement(d["a"],{value:"\u5916\u7701"},"\u5916\u7701"),w.a.createElement(d["a"],{value:"\u7701\u5185"},"\u7701\u5185"))))),w.a.createElement(u["a"],{span:6,className:x.a.detailBtns},w.a.createElement(S["a"].Item,f()({},r,{label:"\u6765\u70df(\u8fd4\u70df)\u65f6\u95f4\uff1a"}),n("backTime",{rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u6765\u70df(\u8fd4\u70df)\u65f6\u95f4"}]})(w.a.createElement(s["a"],{showTime:!0})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u6765\u70df(\u8fd4\u70df)\u65b9\u5f0f\uff1a"}),n("backType",{rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u6765\u70df(\u8fd4\u70df)\u65b9\u5f0f"}]})(w.a.createElement(U["a"],{getPopupContainer:function(e){return e.parentNode},placeholder:"\u8bf7\u9009\u62e9\u6765\u70df(\u8fd4\u70df)\u65b9\u5f0f"},w.a.createElement(O,{value:"\u98de\u673a",key:"\u98de\u673a"},"\u98de\u673a"),w.a.createElement(O,{value:"\u706b\u8f66",key:"\u706b\u8f66"},"\u706b\u8f66"),w.a.createElement(O,{value:"\u8239",key:"\u8239"},"\u8239"),w.a.createElement(O,{value:"\u5ba2\u8f66",key:"\u5ba2\u8f66"},"\u5ba2\u8f66"),w.a.createElement(O,{value:"\u81ea\u9a7e",key:"\u81ea\u9a7e"},"\u81ea\u9a7e"))))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u822a\u73ed/\u8f66\u6b21/\u8239\u6b21/\u8f66\u724c\u53f7\uff1a"}),n("carNum",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u822a\u73ed/\u8f66\u6b21/\u8239\u6b21/\u8f66\u724c\u53f7"}]})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u822a\u73ed/\u8f66\u6b21/\u8239\u6b21/\u8f66\u724c\u53f7"}))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:12},w.a.createElement(S["a"].Item,f()({},r,{label:"\u671f\u95f4\u8fd8\u5230\u8fc7\u54ea\u4e9b\u57ce\u5e02"}),n("wayCity",{})(w.a.createElement(V,{placeholder:"\u8bf7\u8f93\u5165\u671f\u95f4\u8fd8\u5230\u8fc7\u54ea\u4e9b\u57ce\u5e02",autoSize:{minRows:2,maxRows:6}})))))),w.a.createElement("div",{className:x.a.detailTitleName},"\u4eba\u5458\u63a5\u89e6\u4fe1\u606f"),w.a.createElement(c["a"],{style:{marginBottom:20},loading:a},w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:12},w.a.createElement(S["a"].Item,f()({},m,{label:"\u662f\u5426\u4e0e\u786e\u8bca\u3001\u7591\u4f3c\u75c5\u4f8b\u5bc6\u5207\u63a5\u89e6\u8fc7\uff1a"}),n("isTouchSuspect",{initialValue:"\u5426"})(w.a.createElement(d["a"].Group,null,w.a.createElement(d["a"],{value:"\u662f"},"\u662f"),w.a.createElement(d["a"],{value:"\u5426"},"\u5426")))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"}),n("suspectName",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u8005\u59d3\u540d"})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"}),n("suspectIdCard",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7"})))),w.a.createElement(u["a"],{span:6,className:x.a.detailBtns},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u65f6\u95f4\uff1a"}),n("suspectTime",{})(w.a.createElement(s["a"],{showTime:!0})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u5730\u70b9\uff1a"}),n("suspectPoint",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u5730\u70b9"}))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:12},w.a.createElement(S["a"].Item,f()({},m,{label:"\u662f\u5426\u4e0e\u5bc6\u5207\u63a5\u89e6\u8005\u5171\u540c\u751f\u6d3b\u3001\u5de5\u4f5c\u3001\u5b66\u4e60\u3001\u805a\u4f1a\u8fc7\uff1a"}),n("isTouchIntimate",{initialValue:"\u5426"})(w.a.createElement(d["a"].Group,null,w.a.createElement(d["a"],{value:"\u662f"},"\u662f"),w.a.createElement(d["a"],{value:"\u5426"},"\u5426")))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"}),n("intimateName",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u8005\u59d3\u540d"})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"}),n("intimateIdCard",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7"})))),w.a.createElement(u["a"],{span:6,className:x.a.detailBtns},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u65f6\u95f4\uff1a"}),n("intimateTime",{})(w.a.createElement(s["a"],{showTime:!0})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u5730\u70b9\uff1a"}),n("intimatePoint",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u5730\u70b9"}))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:12},w.a.createElement(S["a"].Item,f()({},m,{label:"\u662f\u5426\u4e0e\u91cd\u70b9\u75ab\u533a\u4eba\u5458\u63a5\u89e6\u8fc7\uff1a"}),n("isTouchInfector",{initialValue:"\u5426"})(w.a.createElement(d["a"].Group,null,w.a.createElement(d["a"],{value:"\u662f"},"\u662f"),w.a.createElement(d["a"],{value:"\u5426"},"\u5426")))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"}),n("infectorName",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u8005\u59d3\u540d"})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"}),n("infectorIdCard",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7"})))),w.a.createElement(u["a"],{span:6,className:x.a.detailBtns},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u65f6\u95f4\uff1a"}),n("infectorTime",{})(w.a.createElement(s["a"],{showTime:!0})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u63a5\u89e6\u5730\u70b9\uff1a"}),n("infectorPoint",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u63a5\u89e6\u5730\u70b9"})))))),w.a.createElement("div",{className:x.a.detailTitleName},"\u4eba\u5458\u5f53\u524d\u72b6\u6001"),w.a.createElement(c["a"],{style:{marginBottom:20},loading:a},w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u8eab\u4f53\u72b6\u51b5\uff1a"}),n("bodyCondition",{})(w.a.createElement(U["a"],{getPopupContainer:function(e){return e.parentNode},placeholder:"\u8bf7\u9009\u62e9\u8eab\u4f53\u72b6\u51b5"},this.renderSelect(E))))),w.a.createElement(u["a"],{span:6,className:x.a.detailBtns},w.a.createElement(S["a"].Item,f()({},r,{label:"\u662f\u5426\u5c31\u533b\uff1a"}),n("hasSeek",{})(w.a.createElement(d["a"].Group,null,w.a.createElement(d["a"],{value:"\u662f"},"\u662f"),w.a.createElement(d["a"],{value:"\u5426"},"\u5426"))))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u5c31\u533b\u533b\u9662\uff1a"}),n("seekHospital",{})(w.a.createElement(G["a"],{autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u5c31\u533b\u533b\u9662"})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u5c31\u533b\u65f6\u95f4\uff1a"}),n("seekTime",{})(w.a.createElement(s["a"],{showTime:!0}))))),w.a.createElement(o["a"],{className:x.a.detailTitle},w.a.createElement(u["a"],{span:12},w.a.createElement(S["a"].Item,f()({},r,{label:"\u662f\u5426\u91c7\u53d6\u8fc7\u9632\u62a4\u63aa\u65bd\uff1a"}),n("controlMeasures",{})(w.a.createElement(d["a"].Group,null,w.a.createElement(d["a"],{value:"\u5c45\u5bb6\u9694\u79bb"},"\u5c45\u5bb6\u9694\u79bb"),w.a.createElement(d["a"],{value:"\u96c6\u4e2d\u9694\u79bb"},"\u96c6\u4e2d\u9694\u79bb"),w.a.createElement(d["a"],{value:"\u5426"},"\u5426"))))),w.a.createElement(u["a"],{span:6,className:x.a.detailBtns},w.a.createElement(S["a"].Item,f()({},r,{label:"\u4f55\u65f6\u91c7\u53d6\u63aa\u65bd"}),n("controlTime",{})(w.a.createElement(s["a"],{showTime:!0})))),w.a.createElement(u["a"],{span:6},w.a.createElement(S["a"].Item,f()({},r,{label:"\u4e0b\u6b65\u62df\u91c7\u53d6\u63aa\u65bd\uff1a"}),n("nextMeasures",{})(w.a.createElement(d["a"].Group,null,w.a.createElement(d["a"],{value:"\u5c45\u5bb6\u9694\u79bb"},"\u5c45\u5bb6\u9694\u79bb"),w.a.createElement(d["a"],{value:"\u96c6\u4e2d\u9694\u79bb"},"\u96c6\u4e2d\u9694\u79bb"))))))),w.a.createElement(D,f()({},p,{style:{marginTop:32,paddingBottom:24,textAlign:"center"}}),w.a.createElement(i["a"],{style:{marginLeft:16},type:"primary",htmlType:"submit"},"\u4fdd\u5b58"),w.a.createElement(i["a"],{style:{marginLeft:8},type:"primary",onClick:this.resetForm},"\u6e05\u7a7a"))))))}}]),a}(P["PureComponent"]),r=m))||r)||r);a["default"]=H}}]);