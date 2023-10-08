"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[6726],{26726:(N,V,c)=>{c.d(V,{g6:()=>H,fi:()=>te});var w=c(15861),e=c(65879);const C={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},T=new e.OlP("config",{providedIn:"root",factory:()=>({modules:C})});var m=c(96814),v=c(6593),x=c(74911),E=c(2664),y=c(46973),b=c(80305);function L(i,l){const t="object"==typeof l;return new Promise((n,s)=>{const o=new b.Hp({next:r=>{n(r),o.unsubscribe()},error:s,complete:()=>{t?n(l.defaultValue):s(new y.K)}});i.subscribe(o)})}var P=c(47394),Y=c(92438),k=c(67081),I=c(21631),R=c(83620),F=c(56223);function j(i,l){1&i&&e._UZ(0,"div",2)}function G(i,l){1&i&&e._UZ(0,"pre",2)}function J(i,l){if(1&i&&(e.ynx(0),e.YNc(1,j,1,0,"div",1),e.YNc(2,G,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}function B(i,l){1&i&&e._UZ(0,"div",2)}function A(i,l){1&i&&e._UZ(0,"pre",2)}function Z(i,l){if(1&i&&(e.ynx(0),e.YNc(1,B,1,0,"div",1),e.YNc(2,A,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}const U=[[["","quill-editor-toolbar",""]]],W=["[quill-editor-toolbar]"];function $(i,l){1&i&&e._UZ(0,"div",1)}function _(i,l){1&i&&e._UZ(0,"pre",1)}const Q=(i,l)=>i||l||"html";let z=(()=>{class i{constructor(t,n){var s=this;this.config=n,this.quill$=(0,x.P)((0,w.Z)(function*(){if(!s.Quill){const o=s.document.addEventListener;s.document.addEventListener=s.document.__zone_symbol__addEventListener||s.document.addEventListener;const r=yield c.e(7536).then(c.t.bind(c,87536,19));s.document.addEventListener=o,s.Quill=r.default?r.default:r}return s.config.customOptions?.forEach(o=>{const r=s.Quill.import(o.import);r.whitelist=o.whitelist,s.Quill.register(r,!0,s.config.suppressGlobalRegisterWarning)}),yield s.registerCustomModules(s.Quill,s.config.customModules,s.config.suppressGlobalRegisterWarning)})).pipe((0,k.d)({bufferSize:1,refCount:!0})),this.document=t.get(m.K0),this.config||(this.config={modules:C})}getQuill(){return this.quill$}registerCustomModules(t,n,s){return(0,w.Z)(function*(){if(Array.isArray(n))for(let{implementation:o,path:r}of n)(0,E.b)(o)&&(o=yield L(o)),t.register(r,o,s);return t})()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e.zs3),e.LFG(T,8))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),K=(()=>{class i{constructor(t,n,s,o,r,f,g,p){this.elementRef=n,this.cd=s,this.domSanitizer=o,this.platformId=r,this.renderer=f,this.zone=g,this.service=p,this.required=!1,this.customToolbarPosition="top",this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new e.vpe,this.onEditorChanged=new e.vpe,this.onContentChanged=new e.vpe,this.onSelectionChanged=new e.vpe,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.disabled=!1,this.preserve=!1,this.toolbarPosition="top",this.subscription=null,this.quillSubscription=null,this.valueGetter=(a,d)=>{let u=d.querySelector(".ql-editor").innerHTML;("<p><br></p>"===u||"<div><br></div>"===u)&&(u=this.defaultEmptyValue);let h=u;const q=Q(this.format,this.service.config.format);if("text"===q)h=a.getText();else if("object"===q)h=a.getContents();else if("json"===q)try{h=JSON.stringify(a.getContents())}catch{h=a.getText()}return h},this.valueSetter=(a,d)=>{const u=Q(this.format,this.service.config.format);if("html"===u)return([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(d=this.domSanitizer.sanitize(e.q3G.HTML,d)),a.clipboard.convert(d);if("json"===u)try{return JSON.parse(d)}catch{return[{insert:d}]}return d},this.selectionChangeHandler=(a,d,u)=>{const h=!a&&!!this.onModelTouched;!this.onBlur.observed&&!this.onFocus.observed&&!this.onSelectionChanged.observed&&!h||this.zone.run(()=>{null===a?this.onBlur.emit({editor:this.quillEditor,source:u}):null===d&&this.onFocus.emit({editor:this.quillEditor,source:u}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:d,range:a,source:u}),h&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(a,d,u)=>{const h=this.quillEditor.getText(),q=this.quillEditor.getContents();let M=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===M||"<div><br></div>"===M)&&(M=this.defaultEmptyValue);const O=this.trackChanges||this.service.config.trackChanges,D=("user"===u||O&&"all"===O)&&!!this.onModelChange;!this.onContentChanged.observed&&!D||this.zone.run(()=>{D&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:q,delta:a,editor:this.quillEditor,html:M,oldDelta:d,source:u,text:h}),this.cd.markForCheck()})},this.editorChangeHandler=(a,d,u,h)=>{if(this.onEditorChanged.observed)if("text-change"===a){const q=this.quillEditor.getText(),M=this.quillEditor.getContents();let O=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===O||"<div><br></div>"===O)&&(O=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:M,delta:d,editor:this.quillEditor,event:a,html:O,oldDelta:u,source:h,text:q}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:a,oldRange:u,range:d,source:h}),this.cd.markForCheck()})},this.document=t.get(m.K0)}static normalizeClassNames(t){return t.trim().split(" ").reduce((s,o)=>{const r=o.trim();return r&&s.push(r),s},[])}ngOnInit(){this.preserve=this.preserveWhitespace,this.toolbarPosition=this.customToolbarPosition}ngAfterViewInit(){(0,m.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe((0,I.z)(t=>{const n=[this.service.registerCustomModules(t,this.customModules)],s=this.beforeRender??this.service.config.beforeRender;return s&&n.push(s()),Promise.all(n).then(()=>t)})).subscribe(t=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const n=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),s=Object.assign({},this.modules||this.service.config.modules);n?s.toolbar=n:void 0===s.toolbar&&(s.toolbar=C.toolbar);let o=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===o&&(o="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(u=>{this.renderer.setStyle(this.editorElem,u,this.styles[u])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(u=>{const h=t.import(u.import);h.whitelist=u.whitelist,t.register(h,!0)});let r=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;r||(r=this.service.config.bounds?this.service.config.bounds:this.document.body);let f=this.debug;!f&&!1!==f&&this.service.config.debug&&(f=this.service.config.debug);let g=this.readOnly;!g&&!1!==this.readOnly&&(g=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let p=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(p=this.service.config.defaultEmptyValue);let a=this.scrollingContainer;!a&&null!==this.scrollingContainer&&(a=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let d=this.formats;if(!d&&void 0===d&&(d=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new t(this.editorElem,{bounds:r,debug:f,formats:d,modules:s,placeholder:o,readOnly:g,defaultEmptyValue:p,scrollingContainer:a,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const h=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");h?.dataset&&(h.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===Q(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const h=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(h,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observed||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor),this.onEditorCreated.complete()})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=t.defaultEmptyValue.currentValue),t.styles){const n=t.styles.currentValue,s=t.styles.previousValue;s&&Object.keys(s).forEach(o=>{this.renderer.removeStyle(this.editorElem,o)}),n&&Object.keys(n).forEach(o=>{this.renderer.setStyle(this.editorElem,o,this.styles[o])})}if(t.classes){const n=t.classes.currentValue,s=t.classes.previousValue;s&&this.removeClasses(s),n&&this.addClasses(n)}t.debounceTime&&this.addQuillEventListeners()}}addClasses(t){i.normalizeClassNames(t).forEach(n=>{this.renderer.addClass(this.editorElem,n)})}removeClasses(t){i.normalizeClassNames(t).forEach(n=>{this.renderer.removeClass(this.editorElem,n)})}writeValue(t){if(this.filterNull&&null===t||(this.content=t,!this.quillEditor))return;const n=Q(this.format,this.service.config.format),s=this.valueSetter(this.quillEditor,t);if(this.compareValues){const o=this.quillEditor.getContents();if(JSON.stringify(o)===JSON.stringify(s))return}t?"text"===n?this.quillEditor.setText(t):this.quillEditor.setContents(s):this.quillEditor.setText("")}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;const t={};let n=!0;const s=this.quillEditor.getText(),o=this.trimOnValidation?s.trim().length:1===s.length&&0===s.trim().length?0:s.length-1,r=this.quillEditor.getContents().ops,f=r&&1===r.length&&["\n",""].includes(r[0].insert);return this.minLength&&o&&o<this.minLength&&(t.minLengthError={given:o,minLength:this.minLength},n=!1),this.maxLength&&o>this.maxLength&&(t.maxLengthError={given:o,maxLength:this.maxLength},n=!1),this.required&&!o&&f&&(t.requiredError={empty:!0},n=!1),n?null:t}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new P.w0,this.subscription.add((0,Y.R)(this.quillEditor,"selection-change").subscribe(([s,o,r])=>{this.selectionChangeHandler(s,o,r)}));let t=(0,Y.R)(this.quillEditor,"text-change"),n=(0,Y.R)(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(t=t.pipe((0,R.b)(this.debounceTime)),n=n.pipe((0,R.b)(this.debounceTime))),this.subscription.add(t.subscribe(([s,o,r])=>{this.textChangeHandler(s,o,r)})),this.subscription.add(n.subscribe(([s,o,r,f])=>{this.editorChangeHandler(s,o,r,f)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(v.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(z))},i.\u0275dir=e.lG2({type:i,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",beforeRender:"beforeRender",styles:"styles",strict:"strict",scrollingContainer:"scrollingContainer",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[e.TTD]}),i})(),H=(()=>{class i extends K{constructor(t,n,s,o,r,f,g,p){super(t,n,s,o,r,f,g,p)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(v.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-editor"]],standalone:!0,features:[e._Bn([{multi:!0,provide:F.JU,useExisting:(0,e.Gpc)(()=>i)},{multi:!0,provide:F.Cf,useExisting:(0,e.Gpc)(()=>i)}]),e.qOj,e.jDz],ngContentSelectors:W,decls:3,vars:2,consts:[[4,"ngIf"],["quill-editor-element","",4,"ngIf"],["quill-editor-element",""]],template:function(t,n){1&t&&(e.F$t(U),e.YNc(0,J,3,2,"ng-container",0),e.Hsn(1),e.YNc(2,Z,3,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","top"!==n.toolbarPosition),e.xp6(2),e.Q6J("ngIf","top"===n.toolbarPosition))},dependencies:[m.ez,m.O5],styles:["[_nghost-%COMP%]{display:inline-block}"]}),i})(),X=(()=>{class i{constructor(t,n){this.sanitizer=t,this.service=n,this.content="",this.innerHTML="",this.themeClass="ql-snow"}ngOnChanges(t){if(t.theme?this.themeClass=`ql-${t.theme.currentValue||(this.service.config.theme?this.service.config.theme:"snow")} ngx-quill-view-html`:this.theme||(this.themeClass=`ql-${this.service.config.theme?this.service.config.theme:"snow"} ngx-quill-view-html`),t.content){const n=t.content.currentValue,s=[!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1;this.innerHTML=s?n:this.sanitizer.bypassSecurityTrustHtml(n)}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(v.H7),e.Y36(z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-view-html"]],inputs:{content:"content",theme:"theme",sanitize:"sanitize"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:2,consts:[[1,"ql-container",3,"ngClass"],[1,"ql-editor",3,"innerHTML"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA()),2&t&&(e.Q6J("ngClass",n.themeClass),e.xp6(1),e.Q6J("innerHTML",n.innerHTML,e.oJD))},dependencies:[m.ez,m.mk],styles:[".ql-container.ngx-quill-view-html{border:0}\n"],encapsulation:2}),i})(),ee=(()=>{class i{constructor(t,n,s,o,r,f){this.elementRef=t,this.renderer=n,this.zone=s,this.service=o,this.domSanitizer=r,this.platformId=f,this.strict=!0,this.customModules=[],this.customOptions=[],this.preserveWhitespace=!1,this.onEditorCreated=new e.vpe,this.preserve=!1,this.quillSubscription=null,this.valueSetter=(g,p)=>{const a=Q(this.format,this.service.config.format);let d=p;if("text"===a)g.setText(d);else{if("html"===a)([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(p=this.domSanitizer.sanitize(e.q3G.HTML,p)),d=g.clipboard.convert(p);else if("json"===a)try{d=JSON.parse(p)}catch{d=[{insert:p}]}g.setContents(d)}}}ngOnInit(){this.preserve=this.preserveWhitespace}ngOnChanges(t){this.quillEditor&&t.content&&this.valueSetter(this.quillEditor,t.content.currentValue)}ngAfterViewInit(){(0,m.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe((0,I.z)(t=>{const n=[this.service.registerCustomModules(t,this.customModules)],s=this.beforeRender??this.service.config.beforeRender;return s&&n.push(s()),Promise.all(n).then(()=>t)})).subscribe(t=>{const n=Object.assign({},this.modules||this.service.config.modules);n.toolbar=!1,this.customOptions.forEach(f=>{const g=t.import(f.import);g.whitelist=f.whitelist,t.register(g,!0)});let s=this.debug;!s&&!1!==s&&this.service.config.debug&&(s=this.service.config.debug);let o=this.formats;!o&&void 0===o&&(o=this.service.config.formats?Object.assign({},this.service.config.formats):null===this.service.config.formats?null:void 0);const r=this.theme||(this.service.config.theme?this.service.config.theme:"snow");this.editorElem=this.elementRef.nativeElement.querySelector("[quill-view-element]"),this.zone.runOutsideAngular(()=>{this.quillEditor=new t(this.editorElem,{debug:s,formats:o,modules:n,readOnly:!0,strict:this.strict,theme:r})}),this.renderer.addClass(this.editorElem,"ngx-quill-view"),this.content&&this.valueSetter(this.quillEditor,this.content),this.onEditorCreated.observers.length&&requestAnimationFrame(()=>{this.onEditorCreated.emit(this.quillEditor),this.onEditorCreated.complete()})}))}ngOnDestroy(){this.quillSubscription?.unsubscribe(),this.quillSubscription=null}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(z),e.Y36(v.H7),e.Y36(e.Lbi))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-view"]],inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",formats:"formats",sanitize:"sanitize",beforeRender:"beforeRender",strict:"strict",content:"content",customModules:"customModules",customOptions:"customOptions",preserveWhitespace:"preserveWhitespace"},outputs:{onEditorCreated:"onEditorCreated"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:2,consts:[["quill-view-element","",4,"ngIf"],["quill-view-element",""]],template:function(t,n){1&t&&(e.YNc(0,$,1,0,"div",0),e.YNc(1,_,1,0,"pre",0)),2&t&&(e.Q6J("ngIf",!n.preserve),e.xp6(1),e.Q6J("ngIf",n.preserve))},dependencies:[m.ez,m.O5],styles:[".ql-container.ngx-quill-view{border:0}\n"],encapsulation:2}),i})(),te=(()=>{class i{static forRoot(t){return{ngModule:i,providers:[{provide:T,useValue:t}]}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[H,ee,X]}),i})()},15861:(N,V,c)=>{function w(C,T,S,m,v,x,E){try{var y=C[x](E),b=y.value}catch(L){return void S(L)}y.done?T(b):Promise.resolve(b).then(m,v)}function e(C){return function(){var T=this,S=arguments;return new Promise(function(m,v){var x=C.apply(T,S);function E(b){w(x,m,v,E,y,"next",b)}function y(b){w(x,m,v,E,y,"throw",b)}E(void 0)})}}c.d(V,{Z:()=>e})}}]);