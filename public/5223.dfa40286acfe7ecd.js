"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[5223],{35223:(W,x,i)=>{i.r(x),i.d(x,{EmpleadoGridModule:()=>X});var l=i(96814),d=i(29522),_=i(33594),U=i(62008),A=i(95982),k=i(38188),G=i(22096),S=i(86820),J=i(83951),M=i(2852),m=i(37398),O=i(96726),F=i(84005),t=i(65879),y=i(19347),N=i(71996),Z=i(22939),v=i(74104),p=i(32296),f=i(30617),T=i(92596),b=i(23680);function Q(o,s){1&o&&t._UZ(0,"mat-icon",11)}function j(o,s){1&o&&t._UZ(0,"mat-icon",12)}let B=(()=>{class o{constructor(){this.openContact=new t.vpe,this.toggleStar=new t.vpe}ngOnInit(){}emitToggleStar(n,a){n.stopPropagation(),this.toggleStar.emit(a)}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["vex-contacts-card"]],inputs:{contact:"contact"},outputs:{openContact:"openContact",toggleStar:"toggleStar"},decls:17,vars:6,consts:[[1,"card","overflow-hidden"],["matRipple","",1,"p-4","text-center","hover:bg-hover","trans-ease-out","cursor-pointer","relative",3,"click"],[1,"avatar","h-24","w-24","mx-auto",3,"src"],[1,"title","mb-1","mt-3"],[1,"body-2","text-secondary","flex","items-center","justify-center"],["svgIcon","mat:business",1,"ltr:mr-1","rtl:ml-1","icon-xs"],["svgIcon","mat:person_outline",1,"ltr:mr-1","rtl:ml-1","icon-xs"],["mat-icon-button","","type","button",1,"absolute","top-2","right-2",3,"click"],["svgIcon","mat:cancel",4,"ngIf"],["svgIcon","mat:control_point",4,"ngIf"],[1,"bg-app-bar","p-2","flex","items-center","justify-around",2,"height","2rem"],["svgIcon","mat:cancel"],["svgIcon","mat:control_point"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return e.openContact.emit(e.contact.c_Id_Persona)}),t._UZ(2,"img",2),t.TgZ(3,"h2",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"mat-icon",5),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",4),t._UZ(10,"mat-icon",6),t.TgZ(11,"span"),t._uU(12),t.qZA()(),t.TgZ(13,"button",7),t.NdJ("click",function(c){return e.emitToggleStar(c,null==e.contact?null:e.contact.c_Id_Persona)}),t.YNc(14,Q,1,0,"mat-icon",8),t.YNc(15,j,1,0,"mat-icon",9),t.qZA()(),t._UZ(16,"div",10),t.qZA()),2&a&&(t.xp6(2),t.Q6J("src",null==e.contact?null:e.contact.c_Img_Base,t.LSH),t.xp6(2),t.Oqu(null==e.contact?null:e.contact.c_Primer_Nombre),t.xp6(4),t.Oqu(null==e.contact?null:e.contact.c_Sucursal),t.xp6(4),t.Oqu(null==e.contact?null:e.contact.c_ID_ROL),t.xp6(2),t.Q6J("ngIf",1==(null==e.contact?null:e.contact.c_Estado)),t.xp6(1),t.Q6J("ngIf",2==(null==e.contact?null:e.contact.c_Estado)))},dependencies:[l.O5,p.RK,f.Hw,b.wG]})}return o})();var E=i(82599);const w=["searchInput"];function P(o,s){if(1&o&&(t.TgZ(0,"a",24,25),t._uU(2),t.qZA()),2&o){const n=s.$implicit,a=t.MAs(1);t.Q6J("active",a.isActive)("disabled",n.disabled)("routerLink",n.route),t.xp6(2),t.hij(" ",n.label," ")}}function L(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"vex-contacts-card",29),t.NdJ("openContact",function(e){t.CHM(n);const r=t.oxw(2);return t.KtG(r.openContact(e))})("toggleStar",function(e){t.CHM(n);const r=t.oxw(2);return t.KtG(r.toggleStar(e))}),t.qZA()}if(2&o){const n=s.$implicit;t.Q6J("@fadeInUp",void 0)("contact",n)}}function R(o,s){if(1&o&&(t.TgZ(0,"div",26)(1,"div",27),t.YNc(2,L,1,2,"vex-contacts-card",28),t.ALo(3,"async"),t.qZA()()),2&o){const n=t.oxw();t.Q6J("@stagger",void 0),t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,3,n.filteredContacts$))("ngForTrackBy",n.trackById)}}function Y(o,s){1&o&&(t.TgZ(0,"div",30),t._UZ(1,"img",31),t.TgZ(2,"h2",32),t._uU(3,"No contacts matching your filters"),t.qZA()()),2&o&&t.Q6J("@scaleFadeIn",void 0)}function z(o,s){return s.c_Id_Persona}const $=[{path:"",redirectTo:"all",pathMatch:"full"},{path:":activeCategory",component:(()=>{class o{buscar(){const n=this.searchInput.nativeElement.value.toLowerCase();if(n){const a=this.empleado.filter(e=>{for(const r in e)if(e.hasOwnProperty(r)&&"string"==typeof e[r]&&e[r].toLowerCase().includes(n))return!0;return!1});this.filteredContacts$=this.route.paramMap.pipe((0,m.U)(e=>e.get("activeCategory")),(0,m.U)(e=>{switch(e){case"activos":return this.activeCategory=e,a.filter(r=>1===r.c_Estado);case"inactivos":return this.activeCategory=e,a.filter(r=>2===r.c_Estado);default:return a}}))}}constructor(n,a,e,r,c,I){this.dialog=n,this.route=a,this.CrearUsuariosService=e,this.router=r,this.renderer=c,this.snackBar=I,this.estado=1,this.empleado=[],this.filteredContacts$=(0,G.of)([]),this.loadingData=!0,this.activeCategory="activos",this.tableData=this.empleado,this.links=[{label:"Activos",route:"../activos"},{label:"Inactivos",route:"../inactivos"}],this.trackById=z}ngOnInit(){this.obtenerTablaData()}obtenerTablaData(){this.CrearUsuariosService.getEmpleado("").subscribe(n=>{this.empleado=n.response,this.tableData=this.empleado.filter(a=>a.c_Estado===this.estado),this.filteredContacts$=this.route.paramMap.pipe((0,m.U)(a=>a.get("activeCategory")),(0,m.U)(a=>{switch(a){case"activos":return this.activeCategory=a,this.empleado.filter(e=>1===e.c_Estado);case"inactivos":return this.activeCategory=a,this.empleado.filter(e=>2===e.c_Estado);default:return this.empleado}}))})}openContact(n){this.dialog.open(k.t,{data:n||null,width:"70rem"})}toggleStar(n){const a=this.empleado.find(h=>h.c_Id_Persona===n),e=localStorage.getItem("token"),c=(0,O.Z)(e).IdUsuario;this.c_Id_UsuarioModificacion=c,"activos"==this.activeCategory?(this.titulo="\xbfEst\xe1s seguro que deseas desactivar el empleado?",this.razon="Razon por la cual se desactiva el registro",this.estado=1):(this.titulo="\xbfEst\xe1s seguro de que deseas activar el empleado?",this.razon="Razon por la cual se activa el registro",this.estado=2),console.log(this.titulo,this.activeCategory),this.dialog.open(F.$,{height:"20rem",width:"28rem",data:{title:this.titulo,textAreaValue:"",razon:this.razon,valido:!0}}).afterClosed().subscribe(h=>{h&&this.CrearUsuariosService.CambiarEstadoEmpleado(n,a.c_Id_Usuario,this.c_Id_UsuarioModificacion,h).subscribe(u=>{console.log(u),u.ok?(this.snackBar.open(u.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]}),this.obtenerTablaData(),this.filteredContacts$=this.route.paramMap.pipe((0,m.U)(g=>g.get("activeCategory")),(0,m.U)(g=>{switch(g){case"activos":return this.activeCategory=g,this.empleado.filter(C=>1===C.c_Estado);case"inactivos":return this.activeCategory=g,this.empleado.filter(C=>2===C.c_Estado);default:return this.empleado}}))):this.snackBar.open("Codigo de Error: "+u.transaccion_Estado+" Mensje: "+u.transaccion_Mensaje,"Cerrar",{duration:1e4,panelClass:["red-snackbar"]})})})}onToggleChange(n){n.checked&&"activos"==this.activeCategory?(this.CrearUsuariosService.estado=1,this.router.navigate(["/apps/empleado/table"])):n.checked&&"inactivos"==this.activeCategory&&(this.CrearUsuariosService.estado=2,this.router.navigate(["/apps/empleado/table"]))}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(y.uw),t.Y36(d.gz),t.Y36(N.x),t.Y36(d.F0),t.Y36(t.Qsj),t.Y36(Z.ux))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["vex-contacts-grid"]],viewQuery:function(a,e){if(1&a&&t.Gf(w,7),2&a){let r;t.iGM(r=t.CRH())&&(e.searchInput=r.first)}},decls:30,vars:10,consts:[[1,"h-full","flex","flex-col"],[1,"p-6","pb-0","bg-foreground","shadow-b","flex-none","border-b","border-gray-200"],[1,"container","px-0"],[1,"display-1","font-bold","mt-0","mb-4","flex","items-center"],[1,"w-12","h-12","rounded-full","text-primary","ltr:mr-4","rtl:ml-4","flex","items-center","justify-center","bg-primary/10"],["svgIcon","mat:contacts"],[1,"block"],[1,"sm:flexi","tems-center","bg-foreground","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-xl","mx-auto"],[1,"search-icon"],["svgIcon","mat:search",1,"text-secondary"],["placeholder","Buscar...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-foreground","flex-auto",3,"input"],["searchInput",""],[1,"flex","items-center"],["mat-tab-nav-bar","",1,"border-0","flex-auto"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink",4,"ngFor","ngForOf"],[1,"ltr:ml-1","rtl:mr-1","flex-none","hidden","sm:inline-block"],["for","gridViewToggle",2,"margin-right","0.3rem"],["id","gridViewToggle","color","primary",3,"checked","change"],["color","primary","mat-mini-fab","","matTooltip","Registrar Empleado","type","button",1,"ltr:ml-1","rtl:mr-1","flex-none","sm:hidden",3,"click"],["svgIcon","mat:person_add"],["color","primary","mat-flat-button","","type","button",1,"ltr:ml-4","rtl:mr-4","flex-none","hidden","sm:inline-block",3,"click"],["svgIcon","mat:add",1,"ltr:mr-2","rtl:ml-2","ltr:-ml-1","rtl:-mr-1","icon-sm"],["class","overflow-y-auto flex-auto",4,"ngIf"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink"],["rla","routerLinkActive"],[1,"overflow-y-auto","flex-auto"],[1,"p-gutter","grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","container"],[3,"contact","openContact","toggleStar",4,"ngFor","ngForOf","ngForTrackBy"],[3,"contact","openContact","toggleStar"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"span",4),t._UZ(5,"mat-icon",5),t.qZA(),t.TgZ(6,"span",6),t._uU(7,"Empleados"),t.qZA()(),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"mat-icon",9),t.qZA(),t.TgZ(11,"input",10,11),t.NdJ("input",function(){return e.buscar()}),t.qZA()(),t.TgZ(13,"div",12)(14,"nav",13),t.YNc(15,P,3,4,"a",14),t.qZA(),t.TgZ(16,"div",15)(17,"label",16),t._uU(18,"Vista de lista"),t.qZA(),t.TgZ(19,"mat-slide-toggle",17),t.NdJ("change",function(c){return e.onToggleChange(c)}),t.qZA()(),t.TgZ(20,"button",18),t.NdJ("click",function(){return e.openContact()}),t._UZ(21,"mat-icon",19),t.qZA(),t.TgZ(22,"button",20),t.NdJ("click",function(){return e.openContact()}),t._UZ(23,"mat-icon",21),t.TgZ(24,"span"),t._uU(25,"Registrar Nuevo"),t.qZA()()()()(),t.YNc(26,R,4,5,"div",22),t.ALo(27,"async"),t.YNc(28,Y,4,1,"div",23),t.ALo(29,"async"),t.qZA()),2&a&&(t.xp6(4),t.Q6J("@scaleIn",void 0),t.xp6(2),t.Q6J("@fadeInRight",void 0),t.xp6(9),t.Q6J("ngForOf",e.links),t.xp6(4),t.Q6J("checked",!1),t.xp6(7),t.Q6J("ngIf",t.lcZ(27,6,e.filteredContacts$).length>0),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(29,8,e.filteredContacts$).length))},dependencies:[l.sg,l.O5,d.rH,d.Od,_.jG,v.BU,v.Nj,p.lW,p.nh,f.Hw,T.gM,B,E.Rr,l.Ov],styles:['@charset "UTF-8";@media (min-width: 768px){.card-list[_ngcontent-%COMP%]{display:none}}@media (max-width: 767px){.table-list[_ngcontent-%COMP%]{display:none}}.sm-flexi[_ngcontent-%COMP%]{position:relative}.search-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:10px;transform:translateY(-50%)}input[_ngcontent-%COMP%]{padding-left:30px}'],data:{animation:[U.a,A.G,S.KF,J.$,M.f]}})}return o})(),data:{scrollDisabled:!0,toolbarShadowEnabled:!1}}];let D=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[d.Bz.forChild($),d.Bz,_.d8]})}return o})();var H=i(82063);let V=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.ez,p.ot,f.Ps,b.si]})}return o})();var K=i(498);let X=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.ez,D,v.Nh,Z.ZX,p.ot,y.Is,H.Q,f.Ps,T.AV,V,E.rP,K.ComponentsSlideToggleModule]})}return o})()}}]);