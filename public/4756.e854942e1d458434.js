"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[4756],{34756:(et,T,a)=>{a.r(T),a.d(T,{ClienteGridModule:()=>tt});var c=a(96814),l=a(29522),Z=a(33594),G=a(62008),M=a(95982),k=a(94921),J=a(86820),S=a(83951),E=a(2852),P=a(22096),d=a(37398),y=a(96726),N=a(84005),t=a(65879),v=a(19347),R=a(71996),b=a(22939);const w=["searchInput"];function F(o,r){if(1&o&&(t.TgZ(0,"a",21,22),t._uU(2),t.qZA()),2&o){const n=r.$implicit,e=t.MAs(1);t.Q6J("active",e.isActive)("disabled",n.disabled)("routerLink",n.route),t.xp6(2),t.hij(" ",n.label," ")}}function Q(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"button",23),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.OpenContact())}),t._UZ(2,"mat-icon",24),t.qZA(),t.TgZ(3,"button",25),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.OpenContact())}),t._UZ(4,"mat-icon",26),t.TgZ(5,"span"),t._uU(6,"Registrar Cliente"),t.qZA()()()}}function Y(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"vex-contacts-card",30),t.NdJ("OpenContact",function(i){t.CHM(n);const s=t.oxw(2);return t.KtG(s.OpenContact(i))})("toggleStar",function(i){t.CHM(n);const s=t.oxw(2);return t.KtG(s.toggleStar(i))}),t.qZA()}if(2&o){const n=r.$implicit;t.Q6J("@fadeInUp",void 0)("contact",n)}}function B(o,r){if(1&o&&(t.TgZ(0,"div",27)(1,"div",28),t.YNc(2,Y,1,2,"vex-contacts-card",29),t.ALo(3,"async"),t.qZA()()),2&o){const n=t.oxw();t.Q6J("@stagger",void 0),t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,3,n.filteredContacts$))("ngForTrackBy",n.trackById)}}function j(o,r){1&o&&(t.TgZ(0,"div",31),t._UZ(1,"img",32),t.TgZ(2,"h2",33),t._uU(3,"No contacts matching your filters"),t.qZA()()),2&o&&t.Q6J("@scaleFadeIn",void 0)}function L(o,r){return r.c_Id_Persona}let C=(()=>{class o{buscar(){const n=this.searchInput.nativeElement.value.toLowerCase();if(n){const e=this.persona.filter(i=>{for(const s in i)if(i.hasOwnProperty(s)&&"string"==typeof i[s]&&i[s].toLowerCase().includes(n))return!0;return!1});this.filteredContacts$=this.route.paramMap.pipe((0,d.U)(i=>i.get("activeCategory")),(0,d.U)(i=>{switch(i){case"activos":return this.activeCategory=i,e.filter(s=>1===s.c_Estado);case"inactivos":return this.activeCategory=i,e.filter(s=>2===s.c_Estado);default:return e}}))}}constructor(n,e,i,s,m,O,u,g){this.dialog=n,this.route=e,this.CrearUsuariosService=i,this.router=s,this.renderer=m,this.cd=O,this.ngZone=u,this.snackBar=g,this.estado=1,this.persona=[],this.rol=[],this.filteredContacts$=(0,P.of)([]),this.loadingData=!0,this.tableData=this.persona,this.activeCategory="activos",this.links=[{label:"Activos",route:"../activos"},{label:"Inactivos",route:"../inactivos"}],this.trackById=L}ngOnInit(){this.obtenerTablaData();const n=localStorage.getItem("token"),e=(0,y.Z)(n);this.rol=e.role}obtenerTablaData(){this.CrearUsuariosService.getPersona("").subscribe(n=>{this.persona=n.response,this.tableData=this.persona.filter(e=>e.c_Estado===this.estado),this.filteredContacts$=this.route.paramMap.pipe((0,d.U)(e=>e.get("activeCategory")),(0,d.U)(e=>{switch(e){case"activos":return this.activeCategory=e,this.persona.filter(i=>1===i.c_Estado);case"inactivos":return this.activeCategory=e,this.persona.filter(i=>2===i.c_Estado);default:return this.persona}}))})}OpenContact(n){this.dialog.open(k.P,{data:n||null,width:"60rem"})}toggleStar(n){const e=this.persona.find(u=>u.c_Id_Persona===n),i=localStorage.getItem("token"),m=(0,y.Z)(i).IdUsuario;this.c_Id_UsuarioModificacion=m,this.c_Id_UsuarioModificacion=m,"PROVEEDOR"==e.c_Tipo&&(this.tipo="Proveedor"),"CLIENTE"==e.c_Tipo&&(this.tipo="Cliente"),"activos"==this.activeCategory?(this.titulo="\xbfEst\xe1s seguro que deseas desactivar el  "+this.tipo+"?",this.razon="Razon por la cual se desactiva el registro",this.estado=1):(this.titulo="\xbfEst\xe1s seguro de que deseas activar el "+this.tipo+"?",this.razon="Razon por la cual se activa el registro",this.estado=2),this.dialog.open(N.$,{height:"20rem",width:"28rem",data:{title:this.titulo,textAreaValue:"",razon:this.razon,valido:!0}}).afterClosed().subscribe(u=>{u&&this.CrearUsuariosService.CambiarEstadoPersona(e.c_Id_Persona,this.c_Id_UsuarioModificacion,u).subscribe(g=>{g.ok?(this.snackBar.open(g.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]}),this.obtenerTablaData(),this.filteredContacts$=this.route.paramMap.pipe((0,d.U)(f=>f.get("activeCategory")),(0,d.U)(f=>{switch(f){case"activos":return this.activeCategory=f,this.persona.filter(x=>1===x.c_Estado);case"inactivos":return this.activeCategory=f,this.persona.filter(x=>2===x.c_Estado);default:return this.persona}}))):this.snackBar.open("Codigo de Error: "+g.transaccion_Estado+" Mensje: "+g.transaccion_Mensaje,"Cerrar",{duration:4e3,panelClass:["red-snackbar"]})})})}onToggleChange(n){"activos"==this.activeCategory?(this.CrearUsuariosService.estado=1,this.router.navigate(["/apps/Cliente/table"])):n.checked&&"inactivos"==this.activeCategory&&(this.CrearUsuariosService.estado=2,this.router.navigate(["/apps/Cliente/table"]))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(v.uw),t.Y36(l.gz),t.Y36(R.x),t.Y36(l.F0),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(b.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["vex-contacts-grid"]],viewQuery:function(n,e){if(1&n&&t.Gf(w,7),2&n){let i;t.iGM(i=t.CRH())&&(e.searchInput=i.first)}},decls:25,vars:11,consts:[[1,"h-full","flex","flex-col"],[1,"p-6","pb-0","bg-foreground","shadow-xl","flex-none","border-b","border-gray-200"],[1,"container","px-0"],[1,"display-1","font-bold","mt-0","mb-4","flex","items-center"],[1,"w-12","h-12","rounded-full","text-primary","ltr:mr-4","rtl:ml-4","flex","items-center","justify-center","bg-primary/10"],["svgIcon","mat:contacts"],[1,"block"],[1,"sm:flexi","tems-center","bg-foreground","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-xl","mx-auto"],[1,"search-icon"],["svgIcon","mat:search",1,"text-secondary"],["placeholder","Buscar...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-foreground","flex-auto",3,"input"],["searchInput",""],[1,"flex","items-center"],["mat-tab-nav-bar","",1,"border-0","flex-auto"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink",4,"ngFor","ngForOf"],[1,"ltr:ml-1","rtl:mr-1","flex-none","hidden","sm:inline-block"],["for","gridViewToggle",2,"margin-right","0.3rem"],["id","gridViewToggle","color","primary",3,"checked","change"],[4,"ngIf"],["class","overflow-y-auto flex-auto",4,"ngIf"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink"],["rla","routerLinkActive"],["color","primary","mat-mini-fab","","matTooltip","Registrar Cliente","type","button",1,"ltr:ml-1","rtl:mr-1","flex-none","sm:hidden",3,"click"],["svgIcon","mat:person_add"],["color","primary","mat-flat-button","","type","button",1,"ltr:ml-4","rtl:mr-4","flex-none","hidden","sm:inline-block",3,"click"],["svgIcon","mat:add",1,"ltr:mr-2","rtl:ml-2","ltr:-ml-1","rtl:-mr-1","icon-sm"],[1,"overflow-y-auto","flex-auto"],[1,"p-gutter","grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","container"],[3,"contact","OpenContact","toggleStar",4,"ngFor","ngForOf","ngForTrackBy"],[3,"contact","OpenContact","toggleStar"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"span",4),t._UZ(5,"mat-icon",5),t.qZA(),t.TgZ(6,"span",6),t._uU(7,"Clientes"),t.qZA()(),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"mat-icon",9),t.qZA(),t.TgZ(11,"input",10,11),t.NdJ("input",function(){return e.buscar()}),t.qZA()(),t.TgZ(13,"div",12)(14,"nav",13),t.YNc(15,F,3,4,"a",14),t.qZA(),t.TgZ(16,"div",15)(17,"label",16),t._uU(18,"Vista de lista"),t.qZA(),t.TgZ(19,"mat-slide-toggle",17),t.NdJ("change",function(s){return e.onToggleChange(s)}),t.qZA()(),t.YNc(20,Q,7,0,"div",18),t.qZA()()(),t.YNc(21,B,4,5,"div",19),t.ALo(22,"async"),t.YNc(23,j,4,1,"div",20),t.ALo(24,"async"),t.qZA()),2&n&&(t.xp6(4),t.Q6J("@scaleIn",void 0),t.xp6(2),t.Q6J("@fadeInRight",void 0),t.xp6(9),t.Q6J("ngForOf",e.links),t.xp6(4),t.Q6J("checked",!1),t.xp6(1),t.Q6J("ngIf",e.rol.includes("CAJERO")),t.xp6(1),t.Q6J("ngIf",t.lcZ(22,7,e.filteredContacts$).length>0),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(24,9,e.filteredContacts$).length))},styles:['@charset "UTF-8";@media (min-width: 768px){.card-list[_ngcontent-%COMP%]{display:none}}@media (max-width: 767px){.table-list[_ngcontent-%COMP%]{display:none}}.sm-flexi[_ngcontent-%COMP%]{position:relative}.search-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:10px;transform:translateY(-50%)}input[_ngcontent-%COMP%]{padding-left:30px}'],data:{animation:[G.a,M.G,J.KF,S.$,E.f]}}),o})();const z=[{path:"",redirectTo:"activos",pathMatch:"full"},{path:":activeCategory",component:C,data:{scrollDisabled:!0,toolbarShadowEnabled:!1}}];let $=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(z),l.Bz,Z.d8]}),o})();var _=a(74104),p=a(32296),H=a(71523),h=a(30617),I=a(92596),U=a(23680);let D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,p.ot,h.Ps,U.si]}),o})();var K=a(498),A=a(82599);function V(o,r){if(1&o&&(t.TgZ(0,"div",5),t._UZ(1,"mat-icon",11),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&o){const n=t.oxw();t.xp6(3),t.Oqu(null==n.contact?null:n.contact.c_Empresa)}}function X(o,r){1&o&&t._UZ(0,"mat-icon",12)}function W(o,r){1&o&&t._UZ(0,"mat-icon",13)}let q=(()=>{class o{constructor(n,e){this.dialog=n,this.pgc=e,this.OpenContact=new t.vpe,this.toggleStar=new t.vpe}ngOnInit(){}emitToggleStar(n,e){n.stopPropagation(),this.toggleStar.emit(e)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(v.uw),t.Y36(C))},o.\u0275cmp=t.Xpm({type:o,selectors:[["vex-contacts-card"]],inputs:{contact:"contact",searchStr:"searchStr"},outputs:{OpenContact:"OpenContact",toggleStar:"toggleStar"},decls:14,vars:6,consts:[[1,"card","overflow-hidden"],["matRipple","",1,"p-4","text-center","hover:bg-hover","trans-ease-out","cursor-pointer","relative",3,"click"],[1,"avatar","h-24","w-24","mx-auto",3,"src"],[1,"title","mb-1","mt-3"],["class","body-2 text-secondary flex items-center justify-center",4,"ngIf"],[1,"body-2","text-secondary","flex","items-center","justify-center"],["svgIcon","mat:person_outline",1,"ltr:mr-1","rtl:ml-1","icon-xs"],["mat-icon-button","","type","button",1,"absolute","top-2","right-2",3,"click"],["svgIcon","mat:cancel",4,"ngIf"],["svgIcon","mat:control_point",4,"ngIf"],[1,"bg-app-bar","p-2","flex","items-center","justify-around",2,"height","2rem"],["svgIcon","mat:business",1,"ltr:mr-1","rtl:ml-1","icon-xs"],["svgIcon","mat:cancel"],["svgIcon","mat:control_point"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return e.OpenContact.emit(e.contact.c_Id_Persona)}),t._UZ(2,"img",2),t.TgZ(3,"h2",3),t._uU(4),t.qZA(),t.YNc(5,V,4,1,"div",4),t.TgZ(6,"div",5),t._UZ(7,"mat-icon",6),t.TgZ(8,"span"),t._uU(9),t.qZA()(),t.TgZ(10,"button",7),t.NdJ("click",function(s){return e.emitToggleStar(s,null==e.contact?null:e.contact.c_Id_Persona)}),t.YNc(11,X,1,0,"mat-icon",8),t.YNc(12,W,1,0,"mat-icon",9),t.qZA()(),t._UZ(13,"div",10),t.qZA()),2&n&&(t.xp6(2),t.Q6J("src",null==e.contact?null:e.contact.c_Img_Base,t.LSH),t.xp6(2),t.Oqu(null==e.contact?null:e.contact.c_Primer_Nombre),t.xp6(1),t.Q6J("ngIf",3===(null==e.contact?null:e.contact.c_Id_Rol_Persona)),t.xp6(4),t.Oqu(null==e.contact?null:e.contact.c_Tipo),t.xp6(2),t.Q6J("ngIf",1==(null==e.contact?null:e.contact.c_Estado)),t.xp6(1),t.Q6J("ngIf",2==(null==e.contact?null:e.contact.c_Estado)))},dependencies:[c.O5,p.RK,h.Hw,U.wG]}),o})(),tt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,$,_.Nh,p.ot,v.Is,H.u,h.Ps,I.AV,D,b.ZX,A.rP,K.ComponentsSlideToggleModule]}),o})();t.B6R(C,[c.sg,c.O5,l.rH,l.Od,Z.jG,_.BU,_.Nj,p.lW,p.nh,h.Hw,I.gM,q,A.Rr],[c.Ov])}}]);