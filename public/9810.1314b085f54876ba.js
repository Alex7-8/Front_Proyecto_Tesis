"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[9810],{59810:(W,S,o)=>{o.r(S),o.d(S,{SerieFacturaGridModule:()=>X});var l=o(96814),d=o(29522),x=o(33594),I=o(62008),A=o(95982),U=o(29602),k=o(22096),M=o(86820),G=o(83951),J=o(2852),u=o(37398),O=o(96726),w=o(84005),t=o(65879),y=o(19347),E=o(91249),F=o(22939),v=o(74104),g=o(32296),f=o(30617),T=o(92596),Z=o(23680);function N(a,c){1&a&&t._UZ(0,"mat-icon",10)}function j(a,c){1&a&&t._UZ(0,"mat-icon",11)}let Q=(()=>{class a{constructor(){this.openContact=new t.vpe,this.toggleStar=new t.vpe}ngOnInit(){}emitToggleStar(n,i){n.stopPropagation(),this.toggleStar.emit(i)}static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["vex-contacts-card"]],inputs:{contact:"contact"},outputs:{openContact:"openContact",toggleStar:"toggleStar"},decls:15,vars:5,consts:[[1,"card","overflow-hidden"],["matRipple","",1,"p-4","text-center","hover:bg-hover","trans-ease-out","cursor-pointer","relative",3,"click"],[1,"title","mb-1","mt-3"],[1,"body-2","text-secondary","flex","items-center","justify-center"],["svgIcon","mat:date_range",1,"ltr:mr-1","rtl:ml-1","icon-xs"],[1,"truncate-text"],["mat-icon-button","","type","button",1,"absolute","top-2","right-2",3,"click"],["svgIcon","mat:cancel",4,"ngIf"],["svgIcon","mat:control_point",4,"ngIf"],[1,"bg-app-bar","p-2","flex","items-center","justify-around",2,"height","2rem"],["svgIcon","mat:cancel"],["svgIcon","mat:control_point"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return e.openContact.emit(e.contact.c_Id_Serie)}),t.TgZ(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"mat-icon",4),t.TgZ(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"div",3)(9,"span",5),t._uU(10),t.qZA()(),t.TgZ(11,"button",6),t.NdJ("click",function(s){return e.emitToggleStar(s,null==e.contact?null:e.contact.c_Id_Serie)}),t.YNc(12,N,1,0,"mat-icon",7),t.YNc(13,j,1,0,"mat-icon",8),t.qZA()(),t._UZ(14,"div",9),t.qZA()),2&i&&(t.xp6(3),t.Oqu(null==e.contact?null:e.contact.c_Nombre),t.xp6(4),t.Oqu(null==e.contact?null:e.contact.c_Fecha_Creacion),t.xp6(3),t.Oqu(null==e.contact?null:e.contact.c_Descripcion),t.xp6(2),t.Q6J("ngIf",1==(null==e.contact?null:e.contact.c_Estado)),t.xp6(1),t.Q6J("ngIf",2==(null==e.contact?null:e.contact.c_Estado)))},dependencies:[l.O5,g.RK,f.Hw,Z.wG],styles:['@charset "UTF-8";.truncate-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}']})}return a})();var _=o(82599);const B=["searchInput"];function Y(a,c){if(1&a&&(t.TgZ(0,"a",24,25),t._uU(2),t.qZA()),2&a){const n=c.$implicit,i=t.MAs(1);t.Q6J("active",i.isActive)("disabled",n.disabled)("routerLink",n.route),t.xp6(2),t.hij(" ",n.label," ")}}function R(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"vex-contacts-card",29),t.NdJ("openContact",function(e){t.CHM(n);const r=t.oxw(2);return t.KtG(r.openContact(e))})("toggleStar",function(e){t.CHM(n);const r=t.oxw(2);return t.KtG(r.toggleStar(e))}),t.qZA()}if(2&a){const n=c.$implicit;t.Q6J("@fadeInUp",void 0)("contact",n)}}function z(a,c){if(1&a&&(t.TgZ(0,"div",26)(1,"div",27),t.YNc(2,R,1,2,"vex-contacts-card",28),t.ALo(3,"async"),t.qZA()()),2&a){const n=t.oxw();t.Q6J("@stagger",void 0),t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,3,n.filteredContacts$))("ngForTrackBy",n.trackById)}}function L(a,c){1&a&&(t.TgZ(0,"div",30),t._UZ(1,"img",31),t.TgZ(2,"h2",32),t._uU(3,"No contacts matching your filters"),t.qZA()()),2&a&&t.Q6J("@scaleFadeIn",void 0)}function P(a,c){return c.c_Id_Serie}const $=[{path:"",redirectTo:"all",pathMatch:"full"},{path:":activeCategory",component:(()=>{class a{buscar(){const n=this.searchInput.nativeElement.value.toLowerCase();if(n){const i=this.Categoria.filter(e=>{for(const r in e)if(e.hasOwnProperty(r)&&"string"==typeof e[r]&&e[r].toLowerCase().includes(n))return!0;return!1});this.filteredContacts$=this.route.paramMap.pipe((0,u.U)(e=>e.get("activeCategory")),(0,u.U)(e=>{switch(e){case"activos":return this.activeCategory=e,i.filter(r=>1===r.c_Estado);case"inactivos":return this.activeCategory=e,i.filter(r=>2===r.c_Estado);default:return i}}))}}constructor(n,i,e,r,s,b){this.dialog=n,this.route=i,this.SerieFacturaService=e,this.router=r,this.renderer=s,this.snackBar=b,this.estado=1,this.Categoria=[],this.filteredContacts$=(0,k.of)([]),this.loadingData=!0,this.activeCategory="activos",this.tableData=this.Categoria,this.links=[{label:"Activos",route:"../activos"},{label:"Inactivos",route:"../inactivos"}],this.trackById=P}ngOnInit(){this.obtenerTablaData()}obtenerTablaData(){this.SerieFacturaService.getSerieFactura("").subscribe(n=>{this.Categoria=n.response,this.tableData=this.Categoria.filter(i=>i.c_Estado===this.estado),this.filteredContacts$=this.route.paramMap.pipe((0,u.U)(i=>i.get("activeCategory")),(0,u.U)(i=>{switch(i){case"activos":return this.activeCategory=i,this.Categoria.filter(e=>1===e.c_Estado);case"inactivos":return this.activeCategory=i,this.Categoria.filter(e=>2===e.c_Estado);default:return this.Categoria}}))})}openContact(n){this.dialog.open(U.f,{data:n||null,width:"45rem"})}toggleStar(n){this.Categoria.find(h=>h.c_Id_Serie===n);const e=localStorage.getItem("token"),s=(0,O.Z)(e).IdUsuario;this.c_Id_UsuarioModificacion=s,"activos"==this.activeCategory?(this.titulo="\xbfEst\xe1s seguro que deseas desactivar la serie?",this.razon="Razon por la cual se desactiva el registro",this.estado=1):(this.titulo="\xbfEst\xe1s seguro de que deseas activar la serie?",this.razon="Razon por la cual se activa el registro",this.estado=2),console.log(this.titulo,this.activeCategory),this.dialog.open(w.$,{height:"20rem",width:"28rem",data:{title:this.titulo,textAreaValue:"",razon:this.razon,valido:!0}}).afterClosed().subscribe(h=>{h&&this.SerieFacturaService.CambiarEstadoSerie(n,this.c_Id_UsuarioModificacion,h).subscribe(m=>{console.log(m),m.ok?(this.snackBar.open(m.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]}),this.obtenerTablaData(),this.filteredContacts$=this.route.paramMap.pipe((0,u.U)(p=>p.get("activeCategory")),(0,u.U)(p=>{switch(p){case"activos":return this.activeCategory=p,this.Categoria.filter(C=>1===C.c_Estado);case"inactivos":return this.activeCategory=p,this.Categoria.filter(C=>2===C.c_Estado);default:return this.Categoria}}))):this.snackBar.open("Codigo de Error: "+m.transaccion_Estado+" Mensje: "+m.transaccion_Mensaje,"Cerrar",{duration:1e4,panelClass:["red-snackbar"]})})})}onToggleChange(n){n.checked&&"activos"==this.activeCategory?(this.SerieFacturaService.estado=1,this.router.navigate(["/apps/SerieFactura/table"])):n.checked&&"inactivos"==this.activeCategory&&(this.SerieFacturaService.estado=2,this.router.navigate(["/apps/SerieFactura/table"]))}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(y.uw),t.Y36(d.gz),t.Y36(E.K),t.Y36(d.F0),t.Y36(t.Qsj),t.Y36(F.ux))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["vex-contacts-grid"]],viewQuery:function(i,e){if(1&i&&t.Gf(B,7),2&i){let r;t.iGM(r=t.CRH())&&(e.searchInput=r.first)}},decls:30,vars:10,consts:[[1,"h-full","flex","flex-col"],[1,"p-6","pb-0","bg-foreground","shadow-b","flex-none","border-b","border-gray-200"],[1,"container","px-0"],[1,"display-1","font-bold","mt-0","mb-4","flex","items-center"],[1,"w-12","h-12","rounded-full","text-primary","ltr:mr-4","rtl:ml-4","flex","items-center","justify-center","bg-primary/10"],["svgIcon","mat:table_chart"],[1,"block"],[1,"sm:flexi","tems-center","bg-foreground","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-xl","mx-auto"],[1,"search-icon"],["svgIcon","mat:search",1,"text-secondary"],["placeholder","Buscar...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-foreground","flex-auto",3,"input"],["searchInput",""],[1,"flex","items-center"],["mat-tab-nav-bar","",1,"border-0","flex-auto"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink",4,"ngFor","ngForOf"],[1,"ltr:ml-1","rtl:mr-1","flex-none","hidden","sm:inline-block"],["for","gridViewToggle",2,"margin-right","0.3rem"],["id","gridViewToggle","color","primary",3,"checked","change"],["color","primary","mat-mini-fab","","matTooltip","Registrar Categoria","type","button",1,"ltr:ml-1","rtl:mr-1","flex-none","sm:hidden",3,"click"],["svgIcon","mat:person_add"],["color","primary","mat-flat-button","","type","button",1,"ltr:ml-4","rtl:mr-4","flex-none","hidden","sm:inline-block",3,"click"],["svgIcon","mat:add",1,"ltr:mr-2","rtl:ml-2","ltr:-ml-1","rtl:-mr-1","icon-sm"],["class","overflow-y-auto flex-auto",4,"ngIf"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink"],["rla","routerLinkActive"],[1,"overflow-y-auto","flex-auto"],[1,"p-gutter","grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","container"],[3,"contact","openContact","toggleStar",4,"ngFor","ngForOf","ngForTrackBy"],[3,"contact","openContact","toggleStar"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"span",4),t._UZ(5,"mat-icon",5),t.qZA(),t.TgZ(6,"span",6),t._uU(7,"Serie de Facturas"),t.qZA()(),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"mat-icon",9),t.qZA(),t.TgZ(11,"input",10,11),t.NdJ("input",function(){return e.buscar()}),t.qZA()(),t.TgZ(13,"div",12)(14,"nav",13),t.YNc(15,Y,3,4,"a",14),t.qZA(),t.TgZ(16,"div",15)(17,"label",16),t._uU(18,"Vista de lista"),t.qZA(),t.TgZ(19,"mat-slide-toggle",17),t.NdJ("change",function(s){return e.onToggleChange(s)}),t.qZA()(),t.TgZ(20,"button",18),t.NdJ("click",function(){return e.openContact()}),t._UZ(21,"mat-icon",19),t.qZA(),t.TgZ(22,"button",20),t.NdJ("click",function(){return e.openContact()}),t._UZ(23,"mat-icon",21),t.TgZ(24,"span"),t._uU(25,"Registrar Serie"),t.qZA()()()()(),t.YNc(26,z,4,5,"div",22),t.ALo(27,"async"),t.YNc(28,L,4,1,"div",23),t.ALo(29,"async"),t.qZA()),2&i&&(t.xp6(4),t.Q6J("@scaleIn",void 0),t.xp6(2),t.Q6J("@fadeInRight",void 0),t.xp6(9),t.Q6J("ngForOf",e.links),t.xp6(4),t.Q6J("checked",!1),t.xp6(7),t.Q6J("ngIf",t.lcZ(27,6,e.filteredContacts$).length>0),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(29,8,e.filteredContacts$).length))},dependencies:[l.sg,l.O5,d.rH,d.Od,x.jG,v.BU,v.Nj,g.lW,g.nh,f.Hw,T.gM,Q,_.Rr,l.Ov],styles:['@charset "UTF-8";@media (min-width: 768px){.card-list[_ngcontent-%COMP%]{display:none}}@media (max-width: 767px){.table-list[_ngcontent-%COMP%]{display:none}}.sm-flexi[_ngcontent-%COMP%]{position:relative}.search-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:10px;transform:translateY(-50%)}input[_ngcontent-%COMP%]{padding-left:30px}'],data:{animation:[I.a,A.G,M.KF,G.$,J.f]}})}return a})(),data:{scrollDisabled:!0,toolbarShadowEnabled:!1}}];let D=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[d.Bz.forChild($),d.Bz,x.d8]})}return a})();var H=o(41123);let K=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[l.ez,g.ot,f.Ps,Z.si]})}return a})();var V=o(498);let X=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[l.ez,D,v.Nh,F.ZX,g.ot,y.Is,H.Z,f.Ps,T.AV,K,_.rP,V.ComponentsSlideToggleModule]})}return a})()}}]);