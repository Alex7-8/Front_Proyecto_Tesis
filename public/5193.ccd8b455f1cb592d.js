"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[5193,498],{85001:(x,h,t)=>{t.d(h,{n:()=>a});var o=t(37398),e=t(65879),g=t(63537),f=t(96814);function i(r,u){if(1&r&&(e.TgZ(0,"h1",4),e._uU(1),e.qZA()),2&r){const p=e.oxw();e.xp6(1),e.Oqu(p.current)}}const s=function(r,u){return{fixed:r,"w-full":u}},n=["*"];let a=(()=>{class r{constructor(p){this.configService=p,this.fixed$=this.configService.config$.pipe((0,o.U)(m=>m.toolbar.fixed)),this.isVerticalLayout$=this.configService.select(m=>m.layout).pipe((0,o.U)(m=>"vertical"===m))}static#t=this.\u0275fac=function(m){return new(m||r)(e.Y36(g.E))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["vex-secondary-toolbar"]],inputs:{current:"current",crumbs:"crumbs"},ngContentSelectors:n,decls:9,vars:13,consts:[[1,"secondary-toolbar-placeholder"],[1,"secondary-toolbar","shadow-b","py-1","z-40","border-t","flex",3,"ngClass"],[1,"px-gutter","flex","items-center","flex-auto"],["class","subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3 flex-none",4,"ngIf"],[1,"subheading-2","font-medium","m-0","ltr:pr-3","rtl:pl-3","ltr:border-r","rtl:border-l","ltr:mr-3","rtl:ml-3","flex-none"]],template:function(m,y){1&m&&(e.F$t(),e.TgZ(0,"div",0),e._uU(1,"\xa0"),e.qZA(),e.TgZ(2,"div",1),e.ALo(3,"async"),e.ALo(4,"async"),e.TgZ(5,"div",2),e.ALo(6,"async"),e.YNc(7,i,2,1,"h1",3),e.Hsn(8),e.qZA()()),2&m&&(e.xp6(2),e.Q6J("ngClass",e.WLB(10,s,e.lcZ(3,4,y.fixed$),!e.lcZ(4,6,y.fixed$))),e.xp6(3),e.ekj("container",e.lcZ(6,8,y.isVerticalLayout$)),e.xp6(2),e.Q6J("ngIf",y.current))},dependencies:[f.mk,f.O5,f.Ov],styles:[".secondary-toolbar[_ngcontent-%COMP%]{background:var(--secondary-toolbar-background);height:var(--secondary-toolbar-height);margin-top:calc(var(--secondary-toolbar-height) * -1)}.secondary-toolbar.fixed[_ngcontent-%COMP%]{width:var(--toolbar-width)}.secondary-toolbar-placeholder[_ngcontent-%COMP%]{height:var(--secondary-toolbar-height)}  .is-mobile .fixed{width:100%}  body .fixed{width:calc(100% - var(--sidenav-width))}  vex-breadcrumbs{display:none}@media (min-width: 600px){  vex-breadcrumbs{display:block}}"]})}return r})()},64876:(x,h,t)=>{t.d(h,{u:()=>e});var o=t(65879);let e=(()=>{class g{constructor(){this.VPersona=!1,this.validarFactura=!1,this.selectedImageURL="https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png"}RecibirFacturaCF(i,s){this.idSerie=i,this.idsl=s}RecibirFacturaCliente(i,s,n){this.idSerie=i,this.idsl=s,this.idPersona=n}RecibirBody(i){this.body=i}RecibirDatosFactura(i,s,n,a,r,u,p){this.idProducto=i,this.NombreProducto=s,this.Cantidad=n,this.Precio=a,this.SubTotal=r,this.IVA=u,this.Total=p}VerificarPersona(i){this.VPersona=i}static#t=this.\u0275fac=function(s){return new(s||g)};static#e=this.\u0275prov=o.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},15193:(x,h,t)=>{t.r(h),t.d(h,{SocialModule:()=>Z});var o=t(96814),e=t(29522),g=t(33594),f=t(62008),i=t(95982),s=t(96726),n=t(65879),a=t(64876);const u=[{path:"",component:(()=>{class c{constructor(l,d,v){this.cdr=l,this.ngZone=d,this.TService=v,this.Nombre="",this.foto="",this.selectedImage=null,this.selectedImageURL="https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png",this.links=[{label:"ABOUT",route:"./",routerLinkActiveOptions:{exact:!0}},{label:"TIMELINE",route:"./timeline"},{label:"FRIENDS",route:"",disabled:!0},{label:"PHOTOS",route:"",disabled:!0}]}ngOnInit(){const l=localStorage.getItem("token"),d=(0,s.Z)(l),T=d.FotoEmpleado;this.Nombre=d.IdUsuario,this.selectedImageURL=T}onFileSelected(l){const d=l.target;d?.files?.length&&(this.selectedImage=d.files[0],this.loadImage())}loadImage(){if(this.selectedImage){const l=new FileReader;l.onload=()=>{this.ngZone.run(()=>{this.selectedImageURL=l.result;const v=this.selectedImageURL.split(",");this.foto=v[1],this.ngZone.run(()=>{this.TService.foto=this.foto}),this.cdr.detectChanges()})},l.readAsDataURL(this.selectedImage)}}static#t=this.\u0275fac=function(d){return new(d||c)(n.Y36(n.sBO),n.Y36(n.R0b),n.Y36(a.u))};static#e=this.\u0275cmp=n.Xpm({type:c,selectors:[["vex-social"]],decls:13,vars:2,consts:[[1,"container","py-gutter"],[1,"card","overflow-hidden"],[1,"h-64","relative","overflow-hidden"],["src","assets/img/demo/landscape.jpg",1,"w-full","h-full","object-cover"],[1,"absolute","bg-contrast-black","opacity-25","top-0","right-0","bottom-0","left-0","w-full","h-full","z-0"],[1,"z-10","relative","-mt-16","px-gutter","flex","items-center"],[2,"text-align","center"],["for","image-upload",1,"custom-file-upload"],["alt","Imagen seleccionada",1,"avatar","h-24","w-24","flex-none","align-start","hidden","sm:block","border-2","border-white",3,"src"],["id","image-upload","type","file","accept","image/*",3,"change"],[1,"max-w-full","flex-auto","sm:ltr:ml-6","sm:rtl:mr-6"],[1,"h-16","flex","items-end"]],template:function(d,v){1&d&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3)(4,"div",4),n.qZA(),n.TgZ(5,"div",5)(6,"div",6)(7,"label",7),n._UZ(8,"img",8),n.TgZ(9,"input",9),n.NdJ("change",function(M){return v.onFileSelected(M)}),n.qZA()()(),n.TgZ(10,"div",10),n._UZ(11,"div",11),n.qZA()()(),n._UZ(12,"router-outlet"),n.qZA()),2&d&&(n.xp6(8),n.Q6J("@scaleIn",void 0)("src",v.selectedImageURL,n.LSH))},dependencies:[e.lC],data:{animation:[f.a,i.G]}})}return c})(),data:{toolbarShadowEnabled:!0,containerEnabled:!0},children:[{path:"",loadChildren:()=>Promise.all([t.e(8592),t.e(2570)]).then(t.bind(t,42570)).then(c=>c.SocialProfileModule)},{path:"timeline",loadChildren:()=>Promise.all([t.e(8592),t.e(3024)]).then(t.bind(t,63024)).then(c=>c.SocialTimelineModule)}]}];let p=(()=>{class c{static#t=this.\u0275fac=function(d){return new(d||c)};static#e=this.\u0275mod=n.oAB({type:c});static#o=this.\u0275inj=n.cJS({imports:[e.Bz.forChild(u),e.Bz,g.d8]})}return c})();var m=t(62051),y=t(74104),C=t(32296),I=t(30617),E=t(23680),S=t(498),P=t(82599),O=t(92596);let Z=(()=>{class c{static#t=this.\u0275fac=function(d){return new(d||c)};static#e=this.\u0275mod=n.oAB({type:c});static#o=this.\u0275inj=n.cJS({imports:[o.ez,p,m.G,y.Nh,C.ot,I.Ps,E.si,P.rP,S.ComponentsSlideToggleModule,O.AV]})}return c})()},23568:(x,h,t)=>{t.d(h,{g:()=>i});var o=t(65879),e=t(74104),g=t(82599),f=t(20467);let i=(()=>{class s{constructor(){this.slideToggleHTML='<mat-slide-toggle [checked]="true"></mat-slide-toggle>\n<mat-slide-toggle color="primary" [checked]="true"></mat-slide-toggle>\n<mat-slide-toggle color="accent" [checked]="true"></mat-slide-toggle>\n<mat-slide-toggle color="warn" [checked]="true"></mat-slide-toggle>\n<mat-slide-toggle disabled></mat-slide-toggle>'}ngOnInit(){}static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275cmp=o.Xpm({type:s,selectors:[["vex-components-overview-slide-toggle"]],decls:23,vars:5,consts:[[1,"card","flex","flex-col","sm:flex-row"],[1,"p-6"],[1,"title","mt-0","mb-4"],[1,"flex","flex-col","items-center","gap-6"],[3,"checked"],["color","primary",3,"checked"],["color","accent",3,"checked"],["color","warn",3,"checked"],["disabled",""],[1,"border-l","flex-1"],[1,"body-2","text-secondary","m-0"],["label","DESCRIPTION"],["label","SOURCE CODE"],[3,"vexHighlight"]],template:function(r,u){1&r&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),o._uU(3,"Preview"),o.qZA(),o.TgZ(4,"div",3),o._UZ(5,"mat-slide-toggle",4)(6,"mat-slide-toggle",5)(7,"mat-slide-toggle",6)(8,"mat-slide-toggle",7)(9,"mat-slide-toggle",8),o.qZA()(),o.TgZ(10,"div",9)(11,"div",1)(12,"h2",2),o._uU(13,"Slide Toggle"),o.qZA(),o.TgZ(14,"h4",10),o._uU(15,"<mat-slide-toggle>"),o.qZA()(),o.TgZ(16,"mat-tab-group")(17,"mat-tab",11)(18,"p",1),o._uU(19," On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it\u2019s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button. "),o.qZA()(),o.TgZ(20,"mat-tab",12)(21,"pre"),o._UZ(22,"code",13),o.qZA()()()()()),2&r&&(o.xp6(5),o.Q6J("checked",!0),o.xp6(1),o.Q6J("checked",!0),o.xp6(1),o.Q6J("checked",!0),o.xp6(1),o.Q6J("checked",!0),o.xp6(14),o.Q6J("vexHighlight",u.slideToggleHTML))},dependencies:[e.uX,e.SP,g.Rr,f.Z]})}return s})()},92924:(x,h,t)=>{t.d(h,{L:()=>s});var o=t(96814),e=t(74104),g=t(82599),f=t(48138),i=t(65879);let s=(()=>{class n{static#t=this.\u0275fac=function(u){return new(u||n)};static#e=this.\u0275mod=i.oAB({type:n});static#o=this.\u0275inj=i.cJS({imports:[o.ez,e.Nh,g.rP,f._]})}return n})()},498:(x,h,t)=>{t.r(h),t.d(h,{ComponentsSlideToggleModule:()=>b});var o=t(96814),e=t(29522),g=t(33594),f=t(86820),i=t(62008),s=t(95982),n=t(83951),a=t(65879),r=t(94373),u=t(85001),p=t(16072),m=t(17727),y=t(23568);const C=function(){return["Components","Slide Toggle"]},E=[{path:"",component:(()=>{class l{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(T){return new(T||l)};static#e=this.\u0275cmp=a.Xpm({type:l,selectors:[["vex-components-slide-toggle"]],decls:5,vars:4,consts:[["current","Slide Toggle"],[3,"crumbs"],[1,"container"],[1,"block"]],template:function(T,M){1&T&&(a.TgZ(0,"vex-page-layout")(1,"vex-secondary-toolbar",0),a._UZ(2,"vex-breadcrumbs",1),a.qZA(),a.TgZ(3,"vex-page-layout-content",2),a._UZ(4,"vex-components-overview-slide-toggle",3),a.qZA()()),2&T&&(a.Q6J("@stagger",void 0),a.xp6(2),a.Q6J("crumbs",a.DdM(3,C)),a.xp6(2),a.Q6J("@fadeInUp",void 0))},dependencies:[r.n,u.n,p.w,m.d,y.g],data:{animation:[f.xg,i.a,s.G,n.$]}})}return l})()}];let S=(()=>{class l{static#t=this.\u0275fac=function(T){return new(T||l)};static#e=this.\u0275mod=a.oAB({type:l});static#o=this.\u0275inj=a.cJS({imports:[e.Bz.forChild(E),e.Bz,g.d8]})}return l})();var P=t(20021),O=t(13680),Z=t(62051),c=t(92924);let b=(()=>{class l{static#t=this.\u0275fac=function(T){return new(T||l)};static#e=this.\u0275mod=a.oAB({type:l});static#o=this.\u0275inj=a.cJS({imports:[o.ez,S,P.J,O.K,Z.G,c.L]})}return l})()}}]);