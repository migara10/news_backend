(self["webpackChunkadmin_dashboard"]=self["webpackChunkadmin_dashboard"]||[]).push([[60],{8239:function(e,t,o){o(1703),function(e,o){o(t)}(0,(function(e){"use strict";function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i,s,n=[],l=!0,a=!1;try{for(o=o.call(e);!(l=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);l=!0);}catch(e){a=!0,s=e}finally{try{l||null==o.return||o.return()}finally{if(a)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}function i(e,o){var i,s,n,l,a=null,r="number"==typeof o?o:(i=t(String(o).split(/(ms|s)/i),2),s=i[0],n=i[1],l=void 0===n?"ms":n,Number(s)*{ms:1,s:1e3}[l]),c=function(){for(var t=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];var n=function(){a=null,e.apply(t,i)};clearTimeout(a),(a=setTimeout(n,r))||e.apply(this,i)};return c.cancel=function(){clearTimeout(a),a=null},c}function s(e){return e.map((function(e){return e.toLowerCase()}))}function n(e,t){var o,i=e?e["debounce-events"]:[];return i&&i.length>0?Array.isArray(i)?s(i):s(i.split(",")):s((o=t,Array.isArray(o)?o:null==o?[]:[o]))}function l(e){return""===e}function a(e,t){return"Enter"===e&&(!t.lock||t.unlock)}function r(e,t,o){return l(e)&&o.fireonempty&&("Enter"===t||" "===t)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.lock,o=void 0!==t&&t,s=e.listenTo,c=void 0===s?"keyup":s,d=e.defaultTime,u=void 0===d?"300ms":d,p=e.fireOnEmpty,h=void 0!==p&&p,m=e.cancelOnEmpty,f=void 0!==m&&m,g=e.trim,v=void 0!==g&&g;return{bind:function(e,t,s){var d=t.value,p=t.arg,m=void 0===p?u:p,g=t.modifiers,y=Object.assign({lock:o,trim:v,fireonempty:h,cancelonempty:f},g),b=n(s.data.attrs,c),_=i((function(e){d(e.target.value,e)}),m);function w(e){var t=y.trim?e.target.value.trim():e.target.value;l(t)&&y.cancelonempty?_.cancel():a(e.key,y)||r(t,e.key,y)?(_.cancel(),d(e.target.value,e)):_(e)}b.forEach((function(t){e.addEventListener(t,w)}))}}}var d={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive("debounce",c(t))}};e.debounce=i,e.default=d,e.vue3Debounce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.lock,o=void 0!==t&&t,s=e.listenTo,c=void 0===s?"keyup":s,d=e.defaultTime,u=void 0===d?"300ms":d,p=e.fireOnEmpty,h=void 0!==p&&p,m=e.cancelOnEmpty,f=void 0!==m&&m,g=e.trim,v=void 0!==g&&g;return{created:function(e,t,s){var d=t.value,p=t.arg,m=void 0===p?u:p,g=t.modifiers,y=Object.assign({lock:o,trim:v,fireonempty:h,cancelonempty:f},g),b=n(s.props,c),_=i((function(e){d(e.target.value,e)}),m);function w(e){var t=y.trim?e.target.value.trim():e.target.value;l(t)&&y.cancelonempty?_.cancel():a(e.key,y)||r(t,e.key,y)?(_.cancel(),d(e.target.value,e)):_(e)}b.forEach((function(t){e.addEventListener(t,w)}))}}},Object.defineProperty(e,"__esModule",{value:!0})}))},9060:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return We}});var i=o(3396),s=o(7139),n=o(9242);const l=e=>((0,i.dD)("data-v-7edca49a"),e=e(),(0,i.Cn)(),e),a={class:"main m-3"},r={class:"row"},c={class:"d-flex"},d={class:"row"},u={class:"d-flex justify-content-between"},p={class:"table"},h=l((()=>(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{scope:"col"},"First Name"),(0,i._)("th",{scope:"col"},"Last Name"),(0,i._)("th",{scope:"col"},"Email"),(0,i._)("th",{scope:"col"})])],-1))),m=["onClick"],f={"aria-label":"Page navigation example"},g={class:"pagination justify-content-center"},v=["onClick"];function y(e,t,o,l,y,b){const _=(0,i.up)("loading"),w=(0,i.up)("side-bar"),O=(0,i.Q2)("debounce");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(_,{active:l.isLoading,"onUpdate:active":t[0]||(t[0]=e=>l.isLoading=e),"can-cancel":!0},null,8,["active"]),(0,i._)("div",a,[(0,i._)("div",r,[(0,i._)("div",c,[(0,i._)("button",{class:(0,s.C_)(l.isActive?"active_btn":"inactive_btn"),onClick:t[1]||(t[1]=e=>l.activateState())}," Admins ",2),(0,i._)("button",{class:(0,s.C_)(l.isActive?"inactive_btn":"active_btn"),onClick:t[2]||(t[2]=e=>l.inActivateState())}," Editors ",2)])]),(0,i._)("div",null,[(0,i.Wm)(w,{ref:"childComponent",onLoading:l.afterSave},null,8,["onLoading"])]),(0,i._)("div",d,[(0,i._)("div",u,[(0,i.wy)((0,i._)("input",{type:"text",style:{width:"60%"},"onUpdate:modelValue":t[3]||(t[3]=e=>l.searchVal=e),autocomplete:"false",onClick:t[4]||(t[4]=(...e)=>l.clickSearch&&l.clickSearch(...e))},null,512),[[n.nr,l.searchVal],[O,l.getAllEmployees,"300ms"]]),(0,i._)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=e=>l.childComponent.show())}," Add New ")])]),(0,i._)("table",p,[h,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.allEmployees,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e},[(0,i._)("td",null,(0,s.zw)(e.firstName),1),(0,i._)("td",null,(0,s.zw)(e.lastName),1),(0,i._)("td",null,(0,s.zw)(e.email),1),(0,i._)("td",null,[(0,i._)("button",{class:(0,s.C_)(["btn",l.isActive?"btn-danger":"btn-success"]),onClick:t=>l.isActive?l.addEditor(e):l.addAdmin(e)},(0,s.zw)(l.isActive?"Remove":"Add"),11,m)])])))),128))])]),(0,i._)("nav",f,[(0,i._)("ul",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.pageCount,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"page-item",key:e},[(0,i._)("a",{class:(0,s.C_)(["page-link pill-btn pill-btn1",`tab_btn${e}`]),onClick:t=>l.setPageNumber(e)},(0,s.zw)(e),11,v)])))),128))])])])])}var b=o(3752),_=o.n(b),w=o(4870),O=o(6265),S=o.n(O),k=o(8239);const C=e=>((0,i.dD)("data-v-7a6fc04a"),e=e(),(0,i.Cn)(),e),A={id:"side_bar",class:"hide1 p-2"},L={class:"header"},V=C((()=>(0,i._)("h6",{class:"m-0 p-1"},"Add New User",-1))),$=["src"],D=C((()=>(0,i._)("hr",{class:"mt-0"},null,-1))),E={class:"form"},F={action:""},x={class:"_row_item"},B=C((()=>(0,i._)("label",{for:""},"First Name",-1))),P={class:"_row_item"},T=C((()=>(0,i._)("label",{for:""},"Last Name",-1))),I={class:"_row_item"},N=C((()=>(0,i._)("label",{for:""},"User Name",-1))),j={class:"_row_item"},M=C((()=>(0,i._)("label",{for:""},"Role",-1))),U={class:"_row_item"},H=C((()=>(0,i._)("label",{for:""},"Email",-1))),K={class:"_row_item"},z=C((()=>(0,i._)("label",{for:""},"Password",-1)));function W(e,t,o,s,l,a){const r=(0,i.up)("v-select");return(0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("div",L,[V,(0,i._)("img",{src:s.imgPath,alt:"",class:"_close_btn",onClick:t[0]||(t[0]=(...e)=>s.hide&&s.hide(...e))},null,8,$)]),D,(0,i._)("div",E,[(0,i._)("form",F,[(0,i._)("div",x,[B,(0,i.wy)((0,i._)("input",{class:"_input",type:"text",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=e=>s.user.firstName=e)},null,512),[[n.nr,s.user.firstName]])]),(0,i._)("div",P,[T,(0,i.wy)((0,i._)("input",{class:"_input",type:"text",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=e=>s.user.lastName=e)},null,512),[[n.nr,s.user.lastName]])]),(0,i._)("div",I,[N,(0,i.wy)((0,i._)("input",{class:"_input",type:"text",autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=e=>s.user.userName=e)},null,512),[[n.nr,s.user.userName]])]),(0,i._)("div",j,[M,(0,i.Wm)(r,{label:"title",class:"_input1 mySelect",options:s.options,reduce:e=>e.value,clearable:!1,modelValue:s.user.role,"onUpdate:modelValue":t[4]||(t[4]=e=>s.user.role=e)},null,8,["options","reduce","modelValue"])]),(0,i._)("div",U,[H,(0,i.wy)((0,i._)("input",{class:"_input",type:"email",autocomplete:"off","onUpdate:modelValue":t[5]||(t[5]=e=>s.user.email=e)},null,512),[[n.nr,s.user.email]])]),(0,i._)("div",K,[z,(0,i.wy)((0,i._)("input",{class:"_input",type:"password",autocomplete:"off","onUpdate:modelValue":t[6]||(t[6]=e=>s.user.password=e)},null,512),[[n.nr,s.user.password]])])])]),(0,i._)("button",{class:"_btn1 btn btn-primary",onClick:t[7]||(t[7]=e=>s.saveNewuser())},"Save")])}var R=Object.defineProperty,q=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,X=(e,t,o)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Z=(e,t)=>{for(var o in t||(t={}))Q.call(t,o)&&X(e,o,t[o]);if(J)for(var o of J(t))G.call(t,o)&&X(e,o,t[o]);return e},ee=(e,t)=>q(e,Y(t));const te={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick((()=>this.maybeAdjustScroll()))}},methods:{maybeAdjustScroll(){var e;const t=(null==(e=this.$refs.dropdownMenu)?void 0:e.children[this.typeAheadPointer])||!1;if(t){const e=this.getDropdownViewport(),{top:o,bottom:i,height:s}=t.getBoundingClientRect();if(o<e.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop;if(i>e.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(e.height-s)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},oe={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=0!==this.selectedValue.length?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},ie={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return this.mutableLoading=null==e?!this.mutableLoading:e}}},se=(e,t)=>{const o=e.__vccOpts||e;for(const[i,s]of t)o[i]=s;return o},ne={},le={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},ae=(0,i._)("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),re=[ae];function ce(e,t){return(0,i.wg)(),(0,i.iD)("svg",le,re)}const de=se(ne,[["render",ce]]),ue={},pe={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},he=(0,i._)("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),me=[he];function fe(e,t){return(0,i.wg)(),(0,i.iD)("svg",pe,me)}const ge=se(ue,[["render",fe]]),ve={Deselect:de,OpenIndicator:ge},ye={mounted(e,{instance:t}){if(t.appendToBody){const{height:o,top:i,left:s,width:n}=t.$refs.toggle.getBoundingClientRect();let l=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset;e.unbindPosition=t.calculatePosition(e,t,{width:n+"px",left:l+s+"px",top:a+i+o+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:t}){t.appendToBody&&(e.unbindPosition&&"function"==typeof e.unbindPosition&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function be(e){const t={};return Object.keys(e).sort().forEach((o=>{t[o]=e[o]})),JSON.stringify(t)}let _e=0;function we(){return++_e}const Oe={components:Z({},ve),directives:{appendToBody:ye},mixins:[te,oe,ie],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return"object"==typeof e?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.\nhttps://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if("object"!=typeof e)return e;try{return e.hasOwnProperty("id")?e.id:be(e)}catch(t){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,t,o){return(t||"").toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,t){return e.filter((e=>{let o=this.getOptionLabel(e);return"number"==typeof o&&(o=o.toString()),this.filterBy(e,o,t)}))}},createOption:{type:Function,default(e){return"object"==typeof this.optionList[0]?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:t}){return e&&!t}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,t)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,t,{width:o,top:i,left:s}){e.style.top=i,e.style.left=s,e.style.width=o}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:t,mutableLoading:o}){return!e&&(t&&!o)}},uid:{type:[String,Number],default:()=>we()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return"undefined"==typeof this.modelValue||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),null!=e&&""!==e?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:Z({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:e=>this.search=e.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:ee(Z({},e),{deselect:this.deselect}),footer:ee(Z({},e),{deselect:this.deselect})}},childComponents(){return Z(Z({},ve),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const t=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const e=this.createOption(this.search);this.optionExists(e)||t.unshift(e)}return t},isValueEmpty(){return 0===this.selectedValue.length},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,t){const o=()=>"function"==typeof this.resetOnOptionsChange?this.resetOnOptionsChange(e,t,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&o()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map((e=>this.findOptionFromReducedValue(e))):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter((t=>!this.optionComparator(t,e)))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){"undefined"==typeof this.modelValue&&(this.$data._value=e),null!==e&&(e=Array.isArray(e)?e.map((e=>this.reduce(e))):this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const t=e.target!==this.searchEl;t&&e.preventDefault();const o=[...this.deselectButtons||[],this.$refs.clearButton];void 0===this.searchEl||o.filter(Boolean).some((t=>t.contains(e.target)||t===e.target))?e.preventDefault():this.open&&t?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some((t=>this.optionComparator(t,e)))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue(e){const t=t=>JSON.stringify(this.reduce(t))===JSON.stringify(e),o=[...this.options,...this.pushedTags].filter(t);return 1===o.length?o[0]:o.find((e=>this.optionComparator(e,this.$data._value)))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some((t=>this.optionComparator(t,e)))},normalizeOptionForSlot(e){return"object"==typeof e?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(!this.mousedown||this.searching){const{clearSearchOnSelect:e,multiple:t}=this;return this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const t=e=>(e.preventDefault(),!this.isComposing&&this.typeAheadSelect()),o={8:e=>this.maybeDeleteValue(),9:e=>this.onTab(),27:e=>this.onEscape(),38:e=>(e.preventDefault(),this.typeAheadUp()),40:e=>(e.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach((e=>o[e]=t));const i=this.mapKeydown(o,this);if("function"==typeof i[e.keyCode])return i[e.keyCode](e)}}},Se=["dir"],ke=["id","aria-expanded","aria-owns"],Ce={ref:"selectedOptions",class:"vs__selected-options"},Ae=["disabled","title","aria-label","onClick"],Le={ref:"actions",class:"vs__actions"},Ve=["disabled"],$e={class:"vs__spinner"},De=["id"],Ee=["id","aria-selected","onMouseover","onClick"],Fe={key:0,class:"vs__no-options"},xe=(0,i.Uk)(" Sorry, no matching options. "),Be=["id"];function Pe(e,t,o,l,a,r){const c=(0,i.Q2)("append-to-body");return(0,i.wg)(),(0,i.iD)("div",{dir:o.dir,class:(0,s.C_)(["v-select",r.stateClasses])},[(0,i.WI)(e.$slots,"header",(0,s.vs)((0,i.F4)(r.scope.header))),(0,i._)("div",{id:`vs${o.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":r.dropdownOpen.toString(),"aria-owns":`vs${o.uid}__listbox`,"aria-label":"Search for option",onMousedown:t[1]||(t[1]=e=>r.toggleDropdown(e))},[(0,i._)("div",Ce,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.selectedValue,((t,n)=>(0,i.WI)(e.$slots,"selected-option-container",{option:r.normalizeOptionForSlot(t),deselect:r.deselect,multiple:o.multiple,disabled:o.disabled},(()=>[((0,i.wg)(),(0,i.iD)("span",{key:o.getOptionKey(t),class:"vs__selected"},[(0,i.WI)(e.$slots,"selected-option",(0,s.vs)((0,i.F4)(r.normalizeOptionForSlot(t))),(()=>[(0,i.Uk)((0,s.zw)(o.getOptionLabel(t)),1)])),o.multiple?((0,i.wg)(),(0,i.iD)("button",{key:0,ref_for:!0,ref:e=>a.deselectButtons[n]=e,disabled:o.disabled,type:"button",class:"vs__deselect",title:`Deselect ${o.getOptionLabel(t)}`,"aria-label":`Deselect ${o.getOptionLabel(t)}`,onClick:e=>r.deselect(t)},[((0,i.wg)(),(0,i.j4)((0,i.LL)(r.childComponents.Deselect)))],8,Ae)):(0,i.kq)("",!0)]))])))),256)),(0,i.WI)(e.$slots,"search",(0,s.vs)((0,i.F4)(r.scope.search)),(()=>[(0,i._)("input",(0,i.dG)({class:"vs__search"},r.scope.search.attributes,(0,i.mx)(r.scope.search.events)),null,16)]))],512),(0,i._)("div",Le,[(0,i.wy)((0,i._)("button",{ref:"clearButton",disabled:o.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:t[0]||(t[0]=(...e)=>r.clearSelection&&r.clearSelection(...e))},[((0,i.wg)(),(0,i.j4)((0,i.LL)(r.childComponents.Deselect)))],8,Ve),[[n.F8,r.showClearButton]]),(0,i.WI)(e.$slots,"open-indicator",(0,s.vs)((0,i.F4)(r.scope.openIndicator)),(()=>[o.noDrop?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)((0,i.LL)(r.childComponents.OpenIndicator),(0,s.vs)((0,i.dG)({key:0},r.scope.openIndicator.attributes)),null,16))])),(0,i.WI)(e.$slots,"spinner",(0,s.vs)((0,i.F4)(r.scope.spinner)),(()=>[(0,i.wy)((0,i._)("div",$e,"Loading...",512),[[n.F8,e.mutableLoading]])]))],512)],40,ke),(0,i.Wm)(n.uT,{name:o.transition},{default:(0,i.w5)((()=>[r.dropdownOpen?(0,i.wy)(((0,i.wg)(),(0,i.iD)("ul",{id:`vs${o.uid}__listbox`,ref:"dropdownMenu",key:`vs${o.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:t[2]||(t[2]=(0,n.iM)(((...e)=>r.onMousedown&&r.onMousedown(...e)),["prevent"])),onMouseup:t[3]||(t[3]=(...e)=>r.onMouseUp&&r.onMouseUp(...e))},[(0,i.WI)(e.$slots,"list-header",(0,s.vs)((0,i.F4)(r.scope.listHeader))),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.filteredOptions,((t,l)=>((0,i.wg)(),(0,i.iD)("li",{id:`vs${o.uid}__option-${l}`,key:o.getOptionKey(t),role:"option",class:(0,s.C_)(["vs__dropdown-option",{"vs__dropdown-option--deselect":r.isOptionDeselectable(t)&&l===e.typeAheadPointer,"vs__dropdown-option--selected":r.isOptionSelected(t),"vs__dropdown-option--highlight":l===e.typeAheadPointer,"vs__dropdown-option--disabled":!o.selectable(t)}]),"aria-selected":l===e.typeAheadPointer||null,onMouseover:i=>o.selectable(t)?e.typeAheadPointer=l:null,onClick:(0,n.iM)((e=>o.selectable(t)?r.select(t):null),["prevent","stop"])},[(0,i.WI)(e.$slots,"option",(0,s.vs)((0,i.F4)(r.normalizeOptionForSlot(t))),(()=>[(0,i.Uk)((0,s.zw)(o.getOptionLabel(t)),1)]))],42,Ee)))),128)),0===r.filteredOptions.length?((0,i.wg)(),(0,i.iD)("li",Fe,[(0,i.WI)(e.$slots,"no-options",(0,s.vs)((0,i.F4)(r.scope.noOptions)),(()=>[xe]))])):(0,i.kq)("",!0),(0,i.WI)(e.$slots,"list-footer",(0,s.vs)((0,i.F4)(r.scope.listFooter)))],40,De)),[[c]]):((0,i.wg)(),(0,i.iD)("ul",{key:1,id:`vs${o.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,Be))])),_:3},8,["name"]),(0,i.WI)(e.$slots,"footer",(0,s.vs)((0,i.F4)(r.scope.footer)))],10,Se)}const Te=se(Oe,[["render",Pe]]);var Ie=o(4677),Ne={components:{vSelect:Te},setup(e,t){const s=(0,Ie.pm)(),n=[],l="aaa",a=(0,w.iH)([]),r=[{title:"Admin",value:"admin"},{title:"Editor",value:"editor"}],c=(0,w.iH)({firstName:"",lastName:"",userName:"",email:"",password:"",role:"",isDeleted:!0,clock:{clockIn:!1,clockout:!1}}),d=()=>{var e=document.getElementById("side_bar");e.classList.add("show"),e.classList.remove("hide"),e.classList.remove("hide1")},u=()=>{var e=document.getElementById("side_bar");e.classList.add("hide"),e.classList.remove("show"),setTimeout((()=>{e.classList.add("hide1")}),260)},p=(0,w.iH)(c.value),h=()=>{S().post("emp",p.value).then((e=>{s.success(e.data.msg,{timeout:2e3}),u(),t.emit("loading")})).catch((e=>{s.error(e.response.data.msg,{timeout:2e3})}))};return(0,i.bv)((()=>{p.value.role=r[0].value})),{data:l,emptyUser:c,user:p,saveNewuser:h,options:r,countries:n,selected:a,show:d,hide:u,toast:s,imgPath:o(6860)}}},je=o(89);const Me=(0,je.Z)(Ne,[["render",W],["__scopeId","data-v-7a6fc04a"]]);var Ue=Me,He=o(2483),Ke={directives:{debounce:(0,k.vue3Debounce)({lock:!0})},components:{sideBar:Ue,Loading:_()},setup(){const e=(0,He.tv)(),t=(0,w.iH)(!1),o="migara",s=(0,w.iH)(null),n=(0,w.iH)(null),l=(0,w.iH)(null),a=(0,w.iH)(null),r=(0,w.iH)(0),c=(0,w.iH)(10),d=(0,w.iH)(null),u=(0,w.iH)(null),p=(0,w.iH)(!0),h=()=>{s.value.show()},m=()=>{s.value.hide()},f=()=>{t.value=!0,m();const e={pageSize:c.value,pageNumber:a.value?a.value:1,search:l.value,active:p.value};S().get("emp",{params:e}).then((e=>{t.value=!1,n.value=e.data.user,r.value=Math.ceil(e.data.count/c.value)}))},g=e=>{t.value=!0,a.value=e,f()},v=()=>{a.value=1},y=()=>{t.value=!0,p.value=!0,g(1)},b=()=>{p.value=!0,g(1)},_=()=>{p.value=!1,g(1)},O=e=>{1==n.value.length&&g(a.value-1),S()["delete"](`emp/editor/${e._id}`).then((()=>{f()})).catch((e=>{console.log(e)}))},k=e=>{1==n.value.length&&g(a.value-1),S()["delete"](`emp/admin/${e._id}`).then((()=>{f()})).catch((e=>{console.log(e)}))};return(0,i.bv)((()=>{f();const t=JSON.parse(localStorage.getItem("user")).role;"admin"!==t&&e.back()})),{isLoading:t,childComponent:s,allEmployees:n,getAllEmployees:f,clickSearch:v,searchVal:l,pageNum:a,pageCount:r,pageSize:c,message:d,debounce:u,setPageNumber:g,name:o,show:h,hide:m,afterSave:y,isActive:p,activateState:b,inActivateState:_,addEditor:O,addAdmin:k}}};const ze=(0,je.Z)(Ke,[["render",y],["__scopeId","data-v-7edca49a"]]);var We=ze},6860:function(e,t,o){"use strict";e.exports=o.p+"img/close.1da5aec7.png"}}]);
//# sourceMappingURL=60.14500b44.js.map