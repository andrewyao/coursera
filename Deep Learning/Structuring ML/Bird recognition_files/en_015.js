(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1Tsj":function(module,e,t){"use strict";t.r(e);var r=t("lSNA"),o=t.n(r),s=t("VbXa"),n=t.n(s),a=t("sbe7"),u=t.n(a),c=t("sQ/U"),i=t("K2XA"),m=t("vsdT"),p=t("8cuT"),l=t.n(p),d=t("e13k"),g=t("JUgE"),I=t("4Qgh"),f=t("hyqV"),C=t("MnCE"),S=t("+9K8"),h=function(e){function ReadingItem(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).state={readingCml:null},t}n()(ReadingItem,e);var t=ReadingItem.prototype;return t.componentDidMount=function componentDidMount(){var e=this,t=this.props,r=t.computedItem,o=t.courseId,s=t.courseSlug,n=r.id;Object(m.a)({itemId:n,courseId:o,courseSlug:s}).then(function(t){e.setState({readingCml:t})})},t.render=function render(){var e,t=this.props,r=t.computedItem,s=t.courseId,n=t.courseSlug,a=t.itemMetadata,m=t.courseMaterials,p=t.courseProgress,l=this.state.readingCml,C=I.a.NAME,S=I.a.USER_ID,h,v=m.getNeighbors(a).nextItemMetadataOrItemGroup;return u.a.createElement(i.a,{className:"rc-ReadingItem",feedbackType:"reading",computedItem:r,courseId:s},!l&&u.a.createElement(d.a,null),l&&u.a.createElement("div",null,u.a.createElement(g.a,{cml:l,shouldApplyTracking:!0,variableData:(e={},o()(e,C,c.a.get().fullName),o()(e,S,c.a.get().id),e)}),u.a.createElement(f.a,{courseId:s,courseSlug:n,itemId:r.id,isComplete:r.isCompleted,nextItem:v,courseProgress:p})))},ReadingItem}(u.a.Component);e.default=Object(C.compose)(l()(["CourseStore","ProgressStore"],function(e){var t=e.CourseStore,r=e.ProgressStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug(),courseMaterials:t.getMaterials(),courseProgress:r.courseProgress}}),S.a)(h)},"24m0":function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"2ngF":function(module,e,t){"use strict";var r=t("wiyT"),o=t.n(r),s=t("CWYE"),n=t("IAOZ"),a=Object(s.a)(n.d.supplementCompletionApi,{type:"rest"}),u=Object(s.a)(n.d.supplementStartApi,{type:"rest"});function updateSupplementProgress(e){var t=e.itemId,r=e.courseId,s=e.userId,n=e.api,a={data:{userId:s,courseId:r,itemId:t}};return o()(n.post("",a))}var c={markComplete:function markComplete(e,t,r){return updateSupplementProgress({itemId:e,courseId:t,userId:r,api:a})},markStarted:function markStarted(e,t,r){return updateSupplementProgress({itemId:e,courseId:t,userId:r,api:u})}};e.a=c;var i=c.markComplete,m=c.markStarted},"4Qgh":function(module,e,t){"use strict";var r={NAME:"NAME",USER_ID:"USER_ID",HASHED_USER_ID:"HASHED_USER_ID"};e.a=r;var o=r.NAME,s=r.USER_ID,n=r.HASHED_USER_ID},FUJf:function(module,exports,e){},J4HX:function(module,e,t){"use strict";e.a={supplementsApi:"onDemandSupplements.v1"}},MC18:function(module,exports,e){var t=e("24m0"),r=t.default?t.default:{},o,s=(0,e("HdzH").default)(r);s.getLocale=function(){return"en"},module.exports=s},hyqV:function(module,e,t){"use strict";var r=t("VbXa"),o=t.n(r),s=t("sbe7"),n=t.n(s),a=t("17x9"),u=t.n(a),c=t("+LJP"),i=t("sQ/U"),m=t("y1LI"),p=t("IAOZ"),l=t("E4RX"),d=t("StP4"),g=t("Nher"),I=t("2ngF"),f=t("MC18"),C=t.n(f),S=t("m3i1"),h=t.n(S),v=function(e){function ReadingCompleteButton(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).markComplete=function(){var e=t.context.executeAction,r=t.props,o=r.itemId,s=r.courseId,n=r.courseProgress,a;n.getItemProgress(o).setState(p.e,{refreshCourseProgress:!0}),e(l.b,{courseProgress:n}),I.a.markComplete(o,s,i.a.get().id).then(t.refreshCourseProgress).done()},t.goToNextItem=function(){var e=t.props,r=e.nextItem,o=e.router;r&&o.push(r.getLink(),{trigger:!0})},t.refreshCourseProgress=function(){var e=t.props,r=e.courseId,o=e.courseSlug,s=t.context.executeAction;s(l.a,{courseId:r,refreshProgress:!0}),s(g.b,{courseId:r}),s(d.b,{courseSlug:o,refetch:!0})},t}var t;return o()(ReadingCompleteButton,e),ReadingCompleteButton.prototype.render=function render(){var e=this.props,t=e.isComplete,r=e.nextItem;return n.a.createElement("div",{className:"rc-ReadingCompleteButton horizontal-box align-items-right"},t?n.a.createElement("div",{className:"completed"},n.a.createElement(m.a,{name:"checkmark",className:"color-success-dark"})," ",C()("Complete"),!!r&&n.a.createElement("button",{className:"primary next-item",type:"submit",onClick:this.goToNextItem},C()("Go to next item"))):n.a.createElement("button",{className:"primary mark-complete",type:"submit",onClick:this.markComplete},C()("Mark as completed")))},ReadingCompleteButton}(n.a.Component);v.contextTypes={router:u.a.object,executeAction:u.a.func.isRequired},e.a=Object(c.a)(function(e){return{router:e}})(v)},m3i1:function(module,exports,e){var t=e("FUJf"),r;"string"==typeof t&&(t=[[module.i,t,""]]);var o={transform:void 0},s=e("aET+")(t,o);t.locals&&(module.exports=t.locals)},vsdT:function(module,e,t){"use strict";var r=t("J4HX"),o=t("eBhw");e.a=function(e){var t=e.itemId,s=e.courseId,n=e.courseSlug,a,u={includes:["asset"],fields:["openCourseAssets.v1(typeName)","openCourseAssets.v1(definition)"]};return new o.a({itemId:t,courseId:s,courseSlug:n}).getWithCourseItemId(r.a.supplementsApi,u).then(function(e){return e.linked["openCourseAssets.v1"][0]})}}}]);
//# sourceMappingURL=en.23.d8906baaf4ca653a968c.js.map