var oteljs=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r,i,o,a,s,u,c,l,f;function d(e,t){return{name:e,dataType:r.Boolean,value:t}}function v(e,t){return i.validateInt(t),{name:e,dataType:r.Int64,value:t}}function p(e,t){return{name:e,dataType:r.Double,value:t}}function y(e,t){return{name:e,dataType:r.String,value:t}}function h(e,t,n){var r=n.map(function(t){return{name:e+"."+t.name,value:t.value,dataType:t.dataType}});return g(r,e,t),r}function g(e,t,n){e.push(y("zC."+t,n))}n.r(t),function(e){e[e.String=0]="String",e[e.Boolean=1]="Boolean",e[e.Int64=2]="Int64",e[e.Double=3]="Double"}(r||(r={})),function(e){var t=-9007199254740991,n=9007199254740991,i=/^[A-Z][a-zA-Z0-9]*$/,o=/^[a-zA-Z0-9_\.]*$/;function a(e){return void 0!==e&&o.test(e)}function s(e){if(!((t=e.name)&&a(t)&&t.length+5<100))throw new Error("Invalid dataField name");var t;e.dataType===r.Int64&&u(e.value)}function u(e){if("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e<t||e>n)throw{message:"Invalid integer "+JSON.stringify(e)}}e.validateTelemetryEvent=function(e){if(!function(e){if(!e||e.length>98)return!1;var t,n=e.split("."),r=n[n.length-1];return function(e){return!!e&&e.length>=3&&"Office"===e[0]}(n)&&(void 0!==(t=r)&&i.test(t))}(e.eventName))throw new Error("Invalid eventName");if(e.eventContract&&!a(e.eventContract.name))throw new Error("Invalid eventContract");if(null!=e.dataFields)for(var t=0;t<e.dataFields.length;t++)s(e.dataFields[t])},e.validateInt=u}(i||(i={})),function(e){var t="Office.System.Result";e.getFields=function(e,n){var r=[];return r.push(v(e+".Code",n.code)),void 0!==n.type&&r.push(y(e+".Type",n.type)),void 0!==n.tag&&r.push(v(e+".Tag",n.tag)),g(r,e,t),r}}(o||(o={})),function(e){e.contractName="Office.System.Activity",e.getFields=function(t){var n=[];return void 0!==t.cV&&n.push(y("Activity.CV",t.cV)),n.push(v("Activity.Duration",t.duration)),n.push(v("Activity.Count",t.count)),n.push(v("Activity.AggMode",t.aggMode)),void 0!==t.success&&n.push(d("Activity.Success",t.success)),void 0!==t.result&&n.push.apply(n,o.getFields("Activity.Result",t.result)),g(n,"Activity",e.contractName),n}}(a||(a={})),function(e){var t="Office.System.Host";e.getFields=function(e,n){var r=[];return void 0!==n.id&&r.push(y(e+".Id",n.id)),void 0!==n.version&&r.push(y(e+".Version",n.version)),void 0!==n.sessionId&&r.push(y(e+".SessionId",n.sessionId)),g(r,e,t),r}}(s||(s={})),function(e){var t="Office.System.SDX";e.getFields=function(e,n){var r=[];return void 0!==n.id&&r.push(y(e+".Id",n.id)),void 0!==n.version&&r.push(y(e+".Version",n.version)),void 0!==n.instanceId&&r.push(y(e+".InstanceId",n.instanceId)),void 0!==n.name&&r.push(y(e+".Name",n.name)),void 0!==n.marketplaceType&&r.push(y(e+".MarketplaceType",n.marketplaceType)),void 0!==n.sessionId&&r.push(y(e+".SessionId",n.sessionId)),void 0!==n.browserToken&&r.push(y(e+".BrowserToken",n.browserToken)),void 0!==n.osfRuntimeVersion&&r.push(y(e+".OsfRuntimeVersion",n.osfRuntimeVersion)),void 0!==n.officeJsVersion&&r.push(y(e+".OfficeJsVersion",n.officeJsVersion)),void 0!==n.hostJsVersion&&r.push(y(e+".HostJsVersion",n.hostJsVersion)),void 0!==n.assetId&&r.push(y(e+".AssetId",n.assetId)),void 0!==n.providerName&&r.push(y(e+".ProviderName",n.providerName)),void 0!==n.type&&r.push(y(e+".Type",n.type)),void 0!==n.url&&r.push(y(e+".Url",n.url)),g(r,e,t),r}}(u||(u={})),function(e){var t="Office.System.Funnel";e.getFields=function(e,n){var r=[];return void 0!==n.name&&r.push(y(e+".Name",n.name)),void 0!==n.state&&r.push(y(e+".State",n.state)),g(r,e,t),r}}(c||(c={})),function(e){var t="Office.System.UserAction";e.getFields=function(e,n){var r=[];return void 0!==n.id&&r.push(v(e+".Id",n.id)),void 0!==n.name&&r.push(y(e+".Name",n.name)),void 0!==n.commandSurface&&r.push(y(e+".CommandSurface",n.commandSurface)),void 0!==n.parentName&&r.push(y(e+".ParentName",n.parentName)),void 0!==n.triggerMethod&&r.push(y(e+".TriggerMethod",n.triggerMethod)),void 0!==n.timeOffsetMs&&r.push(v(e+".TimeOffsetMs",n.timeOffsetMs)),g(r,e,t),r}}(l||(l={})),function(e){var t="Office.System.Error";e.getFields=function(e,n){var r=[];return r.push(y(e+".ErrorGroup",n.errorGroup)),r.push(v(e+".Tag",n.tag)),void 0!==n.code&&r.push(v(e+".Code",n.code)),void 0!==n.id&&r.push(v(e+".Id",n.id)),void 0!==n.count&&r.push(v(e+".Count",n.count)),g(r,e,t),r}}(f||(f={}));var m,T,S=a,F=o,b=f,w=c,N=s,C=u,E=l;!function(e){!function(e){!function(e){e.Activity=S,e.Result=F,e.Error=b,e.Funnel=w,e.Host=N,e.SDX=C,e.UserAction=E}(e.System||(e.System={}))}(e.Office||(e.Office={}))}(m||(m={})),function(e){var t,n=0;e.getNext=function(){return void 0===t&&(t=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=[],n=0;n<22;n++)t.push(e.charAt(Math.floor(Math.random()*e.length)));return t.join("")}()),new r(t,++n)},e.getNextChild=function(e){return new r(e.getString(),++e.nextChild)};var r=function(){function e(e,t){this.base=e,this.id=t,this.nextChild=0}return e.prototype.getString=function(){return this.base+"."+this.id},e}();e.CV=r}(T||(T={}));var A,k,_=function(){function e(){this._listeners=[]}return e.prototype.fireEvent=function(e){this._listeners.forEach(function(t){return t(e)})},e.prototype.addListener=function(e){e&&this._listeners.push(e)},e.prototype.removeListener=function(e){this._listeners=this._listeners.filter(function(t){return t!==e})},e.prototype.getListenerCount=function(){return this._listeners.length},e}(),x=new _;function I(){return x}function O(e,t,n){x.fireEvent({level:e,category:t,message:n})}!function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Info=2]="Info",e[e.Verbose=3]="Verbose"}(A||(A={})),function(e){e[e.Core=0]="Core",e[e.Sink=1]="Sink",e[e.Transport=2]="Transport"}(k||(k={}));var P=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},D=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},M=function(){return 1e3*Date.now()};"object"==typeof window.performance&&"now"in window.performance&&(M=function(){return 1e3*Math.floor(window.performance.now())});var j,V,L,U,B,J,R,H,z=function(){function e(e,t,n){this._optionalEventFlags={},this._ended=!1,this._telemetryLogger=e,this._activityName=t,this._cv=n?T.getNextChild(n._cv):T.getNext(),this._dataFields=[],this._success=void 0,this._startTime=M()}return e.createNew=function(t,n){return new e(t,n)},e.prototype.createChildActivity=function(t){return new e(this._telemetryLogger,t,this)},e.prototype.setEventFlags=function(e){this._optionalEventFlags=e},e.prototype.addDataField=function(e){this._dataFields.push(e)},e.prototype.addDataFields=function(e){var t;(t=this._dataFields).push.apply(t,e)},e.prototype.setSuccess=function(e){this._success=e},e.prototype.setResult=function(e,t,n){this._result={code:e,type:t,tag:n}},e.prototype.endNow=function(){if(!this._ended){void 0===this._success&&void 0===this._result&&O(A.Warning,k.Core,function(){return"Activity does not have success or result set"});var e=M()-this._startTime;this._ended=!0;var t={duration:e,count:1,aggMode:0,cV:this._cv.getString(),success:this._success,result:this._result};return this._telemetryLogger.sendActivity(this._activityName,t,this._dataFields,this._optionalEventFlags)}O(A.Error,k.Core,function(){return"Activity has already ended"})},e.prototype.executeAsync=function(e){return P(this,void 0,void 0,function(){var t=this;return D(this,function(n){return[2,e(this).then(function(e){return t.endNow(),e}).catch(function(e){throw t.endNow(),e})]})})},e.prototype.executeSync=function(e){try{var t=e(this);return this.endNow(),t}catch(e){throw this.endNow(),e}},e.prototype.executeChildActivityAsync=function(e,t){return P(this,void 0,void 0,function(){return D(this,function(n){return[2,this.createChildActivity(e).executeAsync(t)]})})},e.prototype.executeChildActivitySync=function(e,t){return this.createChildActivity(e).executeSync(t)},e}();function G(e){var t={costPriority:U.Normal,samplingPolicy:V.Measure,persistencePriority:L.Normal,dataCategories:B.NotSet,diagnosticLevel:J.FullEvent};return e.eventFlags&&e.eventFlags.dataCategories||O(A.Error,k.Core,function(){return"Event is missing DataCategories event flag"}),e.eventFlags?(e.eventFlags.costPriority&&(t.costPriority=e.eventFlags.costPriority),e.eventFlags.samplingPolicy&&(t.samplingPolicy=e.eventFlags.samplingPolicy),e.eventFlags.persistencePriority&&(t.persistencePriority=e.eventFlags.persistencePriority),e.eventFlags.dataCategories&&(t.dataCategories=e.eventFlags.dataCategories),e.eventFlags.diagnosticLevel&&(t.diagnosticLevel=e.eventFlags.diagnosticLevel),t):t}!function(e){e[e.EssentialServiceMetadata=1]="EssentialServiceMetadata",e[e.AccountData=2]="AccountData",e[e.SystemMetadata=4]="SystemMetadata",e[e.OrganizationIdentifiableInformation=8]="OrganizationIdentifiableInformation",e[e.EndUserIdentifiableInformation=16]="EndUserIdentifiableInformation",e[e.CustomerContent=32]="CustomerContent",e[e.AccessControl=64]="AccessControl"}(j||(j={})),function(e){e[e.NotSet=0]="NotSet",e[e.Measure=1]="Measure",e[e.Diagnostics=2]="Diagnostics",e[e.CriticalBusinessImpact=191]="CriticalBusinessImpact",e[e.CriticalCensus=192]="CriticalCensus",e[e.CriticalExperimentation=193]="CriticalExperimentation",e[e.CriticalUsage=194]="CriticalUsage"}(V||(V={})),function(e){e[e.NotSet=0]="NotSet",e[e.Normal=1]="Normal",e[e.High=2]="High"}(L||(L={})),function(e){e[e.NotSet=0]="NotSet",e[e.Normal=1]="Normal",e[e.High=2]="High"}(U||(U={})),function(e){e[e.NotSet=0]="NotSet",e[e.SoftwareSetup=1]="SoftwareSetup",e[e.ProductServiceUsage=2]="ProductServiceUsage",e[e.ProductServicePerformance=4]="ProductServicePerformance",e[e.DeviceConfiguration=8]="DeviceConfiguration",e[e.InkingTypingSpeech=16]="InkingTypingSpeech"}(B||(B={})),function(e){e[e.ReservedDoNotUse=0]="ReservedDoNotUse",e[e.BasicEvent=10]="BasicEvent",e[e.FullEvent=100]="FullEvent",e[e.NecessaryServiceDataEvent=110]="NecessaryServiceDataEvent",e[e.AlwaysOnNecessaryServiceDataEvent=120]="AlwaysOnNecessaryServiceDataEvent"}(J||(J={})),function(e){e[e.Aria=0]="Aria",e[e.Nexus=1]="Nexus"}(R||(R={})),function(e){var t={},n={},r={};function i(e){if("object"!=typeof e)throw new Error("tokenTree must be an object");r=function e(t,n){if("object"!=typeof n)return n;for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r];o in t&&(t[o],1)?t[o]=e(t[o],n[o]):t[o]=n[o]}return t}(r,e)}function o(e){if(t[e])return t[e];var n=s(e,R.Aria);return"string"==typeof n?(t[e]=n,n):void 0}function a(e){if(n[e])return n[e];var t=s(e,R.Nexus);return"number"==typeof t?(n[e]=t,t):void 0}function s(e,t){var n=e.split("."),i=r,o=void 0;if(i){for(var a=0;a<n.length-1;a++)i[n[a]]&&(i=i[n[a]],t===R.Aria&&"string"==typeof i.ariaTenantToken?o=i.ariaTenantToken:t===R.Nexus&&"number"==typeof i.nexusTenantToken&&(o=i.nexusTenantToken));return o}}e.setTenantToken=function(e,t,n){var r=e.split(".");if(r.length<2||"Office"!==r[0])O(A.Error,k.Core,function(){return"Invalid namespace: "+e});else{var o=Object.create(Object.prototype);t&&(o.ariaTenantToken=t),n&&(o.nexusTenantToken=n);var a,s=o;for(a=r.length-1;a>=0;--a){var u=Object.create(Object.prototype);u[r[a]]=s,s=u}i(s)}},e.setTenantTokens=i,e.getTenantTokens=function(e){var t=o(e),n=a(e);if(!n||!t)throw new Error("Could not find tenant token");return{ariaTenantToken:t,nexusTenantToken:n}},e.getAriaTenantToken=o,e.getNexusTenantToken=a,e.clear=function(){t={},n={},r={}}}(H||(H={}));var W,Z="3.1.9",X=function(){function e(e,t){var n,r;this.onSendEvent=new _,this.persistentDataFields=[],e?(this.onSendEvent=e.onSendEvent,(n=this.persistentDataFields).push.apply(n,e.persistentDataFields)):this.persistentDataFields.push(y("OTelJS.Version",Z)),t&&(r=this.persistentDataFields).push.apply(r,t)}return e.prototype.sendTelemetryEvent=function(e){try{if(0===this.onSendEvent.getListenerCount())return void O(A.Warning,k.Core,function(){return"No telemetry sinks are attached."});var t=this.cloneEvent(e);this.processTelemetryEvent(t),this.onSendEvent.fireEvent(t)}catch(e){var n;n=e instanceof Error?e.message:JSON.stringify(e),O(A.Error,k.Core,function(){return n})}},e.prototype.processTelemetryEvent=function(e){var t;e.telemetryProperties||(e.telemetryProperties=H.getTenantTokens(e.eventName)),(t=e.dataFields).push.apply(t,this.persistentDataFields),i.validateTelemetryEvent(e)},e.prototype.addSink=function(e){this.onSendEvent.addListener(function(t){return e.sendTelemetryEvent(t)})},e.prototype.setTenantToken=function(e,t,n){H.setTenantToken(e,t,n)},e.prototype.setTenantTokens=function(e){H.setTenantTokens(e)},e.prototype.cloneEvent=function(e){var t={eventName:e.eventName,eventFlags:e.eventFlags};return e.telemetryProperties&&(t.telemetryProperties={ariaTenantToken:e.telemetryProperties.ariaTenantToken,nexusTenantToken:e.telemetryProperties.nexusTenantToken}),e.eventContract&&(t.eventContract={name:e.eventContract.name,dataFields:e.eventContract.dataFields.slice()}),t.dataFields=e.dataFields?e.dataFields.slice():[],t},e}(),$=(W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}W(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),q=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},K=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},Q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return $(t,e),t.prototype.executeActivityAsync=function(e,t){return q(this,void 0,void 0,function(){return K(this,function(n){return[2,this.createNewActivity(e).executeAsync(t)]})})},t.prototype.executeActivitySync=function(e,t){return this.createNewActivity(e).executeSync(t)},t.prototype.createNewActivity=function(e){return z.createNew(this,e)},t.prototype.sendActivity=function(e,t,n,r){return this.sendTelemetryEvent({eventName:e,eventContract:{name:m.Office.System.Activity.contractName,dataFields:m.Office.System.Activity.getFields(t)},dataFields:n,eventFlags:r})},t.prototype.sendError=function(e){var t=f.getFields("Error",e.error);return null!=e.dataFields&&t.push.apply(t,e.dataFields),this.sendTelemetryEvent({eventName:e.eventName,dataFields:t,eventFlags:e.eventFlags})},t}(X);n.d(t,"Contracts",function(){return m}),n.d(t,"ActivityScope",function(){return z}),n.d(t,"getFieldsForContract",function(){return h}),n.d(t,"addContractField",function(){return g}),n.d(t,"DataClassification",function(){return j}),n.d(t,"makeBooleanDataField",function(){return d}),n.d(t,"makeInt64DataField",function(){return v}),n.d(t,"makeDoubleDataField",function(){return p}),n.d(t,"makeStringDataField",function(){return y}),n.d(t,"DataFieldType",function(){return r}),n.d(t,"getEffectiveEventFlags",function(){return G}),n.d(t,"SamplingPolicy",function(){return V}),n.d(t,"PersistencePriority",function(){return L}),n.d(t,"CostPriority",function(){return U}),n.d(t,"DataCategories",function(){return B}),n.d(t,"DiagnosticLevel",function(){return J}),n.d(t,"LogLevel",function(){return A}),n.d(t,"Category",function(){return k}),n.d(t,"onNotification",function(){return I}),n.d(t,"logNotification",function(){return O}),n.d(t,"SuppressNexus",function(){return-1}),n.d(t,"SimpleTelemetryLogger",function(){return X}),n.d(t,"TelemetryLogger",function(){return Q})}]);