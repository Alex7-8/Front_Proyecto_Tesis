"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[8331],{98331:(K,x,n)=>{n.r(x),n.d(x,{FacturaServiciosGridModule:()=>H});var u=n(96814),s=n(29522),S=n(33594),I=n(62008),A=n(95982),U=n(75117),M=n(22096),G=n(86820),k=n(83951),J=n(2852),l=n(37398),P=n(96726),w=n(84005),t=n(65879),y=n(19347),O=n(11333),F=n(22939),p=n(74104),h=n(32296),m=n(30617),T=n(92596),Z=n(23680);let j=(()=>{class i{constructor(){this.openContact=new t.vpe,this.toggleStar=new t.vpe}ngOnInit(){}emitToggleStar(o,a){o.stopPropagation(),this.toggleStar.emit(a)}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["vex-contacts-card"]],inputs:{contact:"contact"},outputs:{openContact:"openContact",toggleStar:"toggleStar"},decls:12,vars:3,consts:[[1,"card","overflow-hidden"],["matRipple","",1,"p-4","text-center","hover:bg-hover","trans-ease-out","cursor-pointer","relative",3,"click"],[1,"title","mb-1","mt-3"],[1,"body-2","text-secondary","flex","items-center","justify-center"],["svgIcon","mat:date_range",1,"ltr:mr-1","rtl:ml-1","icon-xs"],[1,"truncate-text"],[1,"bg-app-bar","p-2","flex","items-center","justify-around",2,"height","2rem"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return e.openContact.emit(e.contact.c_Id_Factura)}),t.TgZ(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"mat-icon",4),t.TgZ(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"div",3)(9,"span",5),t._uU(10),t.qZA()()(),t._UZ(11,"div",6),t.qZA()),2&a&&(t.xp6(3),t.Oqu(null==e.contact?null:e.contact.c_Nombre_Estado),t.xp6(4),t.Oqu(null==e.contact?null:e.contact.c_Fecha_Creacion),t.xp6(3),t.Oqu(null==e.contact?null:e.contact.c_Total))},dependencies:[m.Hw,Z.wG],styles:['@charset "UTF-8";.truncate-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}']})}return i})();var b=n(82599);const E=["searchInput"];function B(i,c){if(1&i&&(t.TgZ(0,"a",24,25),t._uU(2),t.qZA()),2&i){const o=c.$implicit,a=t.MAs(1);t.Q6J("active",a.isActive)("disabled",o.disabled)("routerLink",o.route),t.xp6(2),t.hij(" ",o.label," ")}}function N(i,c){if(1&i){const o=t.EpF();t.TgZ(0,"vex-contacts-card",29),t.NdJ("openContact",function(e){t.CHM(o);const r=t.oxw(2);return t.KtG(r.openContact(e))})("toggleStar",function(e){t.CHM(o);const r=t.oxw(2);return t.KtG(r.toggleStar(e))}),t.qZA()}if(2&i){const o=c.$implicit;t.Q6J("@fadeInUp",void 0)("contact",o)}}function Q(i,c){if(1&i&&(t.TgZ(0,"div",26)(1,"div",27),t.YNc(2,N,1,2,"vex-contacts-card",28),t.ALo(3,"async"),t.qZA()()),2&i){const o=t.oxw();t.Q6J("@stagger",void 0),t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,3,o.filteredContacts$))("ngForTrackBy",o.trackById)}}function z(i,c){1&i&&(t.TgZ(0,"div",30),t._UZ(1,"img",31),t.TgZ(2,"h2",32),t._uU(3,"No contacts matching your filters"),t.qZA()()),2&i&&t.Q6J("@scaleFadeIn",void 0)}function L(i,c){return c.c_Id_Factura}const R=[{path:"",redirectTo:"all",pathMatch:"full"},{path:":activeCategory",component:(()=>{class i{buscar(){const o=this.searchInput.nativeElement.value.toLowerCase();if(o){const a=this.Servicio.filter(e=>{for(const r in e)if(e.hasOwnProperty(r)&&"string"==typeof e[r]&&e[r].toLowerCase().includes(o))return!0;return!1});this.filteredContacts$=this.route.paramMap.pipe((0,l.U)(e=>e.get("activeCategory")),(0,l.U)(e=>{switch(e){case"activos":return this.activeCategory=e,a.filter(r=>1===r.c_Id_Estado_Factura);case"inactivos":return this.activeCategory=e,a.filter(r=>5===r.c_Id_Estado_Factura);default:return a}}))}}constructor(o,a,e,r,d,_){this.dialog=o,this.route=a,this.ProductoService=e,this.router=r,this.renderer=d,this.snackBar=_,this.estado=1,this.Servicio=[],this.filteredContacts$=(0,M.of)([]),this.loadingData=!0,this.activeCategory="activos",this.tableData=this.Servicio,this.links=[{label:"Factura",route:"../activos"}],this.trackById=L}ngOnInit(){this.obtenerTablaData()}obtenerTablaData(){this.ProductoService.getProducto("").subscribe(o=>{this.Servicio=o.response,this.tableData=this.Servicio.filter(a=>a.c_Id_Estado_Factura===this.estado),this.filteredContacts$=this.route.paramMap.pipe((0,l.U)(a=>a.get("activeCategory")),(0,l.U)(a=>{switch(a){case"activos":return this.activeCategory=a,this.Servicio.filter(e=>1===e.c_Id_Estado_Factura);case"inactivos":return this.activeCategory=a,this.Servicio.filter(e=>5===e.c_Id_Estado_Factura);default:return this.Servicio}}))})}openContact(o){this.dialog.open(U.v,{data:o||null,width:"55rem"})}toggleStar(o){this.Servicio.find(f=>f.c_Id_Factura===o);const e=localStorage.getItem("token"),d=(0,P.Z)(e).IdUsuario;this.c_Id_UsuarioModificacion=d,"activos"==this.activeCategory?(this.titulo="\xbfEst\xe1s seguro que deseas desactivar la marca?",this.razon="Razon por la cual se desactiva el registro",this.estado=1):(this.titulo="\xbfEst\xe1s seguro de que deseas activar la marca?",this.razon="Razon por la cual se activa el registro",this.estado=2),console.log(this.titulo,this.activeCategory),this.dialog.open(w.$,{height:"20rem",width:"28rem",data:{title:this.titulo,textAreaValue:"",razon:this.razon,valido:!0}}).afterClosed().subscribe(f=>{f&&this.ProductoService.CambiarEstadoProducto(o,this.c_Id_UsuarioModificacion,f).subscribe(g=>{console.log(g),g.ok?(this.snackBar.open(g.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]}),this.obtenerTablaData(),this.filteredContacts$=this.route.paramMap.pipe((0,l.U)(v=>v.get("activeCategory")),(0,l.U)(v=>{switch(v){case"activos":return this.activeCategory=v,this.Servicio.filter(C=>1===C.c_Id_Estado_Factura);case"inactivos":return this.activeCategory=v,this.Servicio.filter(C=>5===C.c_Id_Estado_Factura);default:return this.Servicio}}))):this.snackBar.open("Codigo de Error: "+g.transaccion_Estado+" Mensje: "+g.transaccion_Mensaje,"Cerrar",{duration:1e4,panelClass:["red-snackbar"]})})})}onToggleChange(o){o.checked&&"activos"==this.activeCategory?(this.ProductoService.estado=1,this.router.navigate(["/apps/FacturaVenta/table"])):o.checked&&"inactivos"==this.activeCategory&&(this.ProductoService.estado=2,this.router.navigate(["/apps/FacturaVenta/table"]))}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(y.uw),t.Y36(s.gz),t.Y36(O.U),t.Y36(s.F0),t.Y36(t.Qsj),t.Y36(F.ux))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["vex-contacts-grid"]],viewQuery:function(a,e){if(1&a&&t.Gf(E,7),2&a){let r;t.iGM(r=t.CRH())&&(e.searchInput=r.first)}},decls:30,vars:10,consts:[[1,"h-full","flex","flex-col"],[1,"p-6","pb-0","bg-foreground","shadow-b","flex-none","border-b","border-gray-200"],[1,"container","px-0"],[1,"display-1","font-bold","mt-0","mb-4","flex","items-center"],[1,"w-12","h-12","rounded-full","text-primary","ltr:mr-4","rtl:ml-4","flex","items-center","justify-center","bg-primary/10"],["svgIcon","mat:table_chart"],[1,"block"],[1,"sm:flexi","tems-center","bg-foreground","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-xl","mx-auto"],[1,"search-icon"],["svgIcon","mat:search",1,"text-secondary"],["placeholder","Buscar...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-foreground","flex-auto",3,"input"],["searchInput",""],[1,"flex","items-center"],["mat-tab-nav-bar","",1,"border-0","flex-auto"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink",4,"ngFor","ngForOf"],[1,"ltr:ml-1","rtl:mr-1","flex-none","hidden","sm:inline-block"],["for","gridViewToggle",2,"margin-right","0.3rem"],["id","gridViewToggle","color","primary",3,"checked","change"],["color","primary","mat-mini-fab","","matTooltip","Registrar Producto","type","button",1,"ltr:ml-1","rtl:mr-1","flex-none","sm:hidden",3,"click"],["svgIcon","mat:queue"],["color","primary","mat-flat-button","","type","button",1,"ltr:ml-4","rtl:mr-4","flex-none","hidden","sm:inline-block",3,"click"],["svgIcon","mat:add",1,"ltr:mr-2","rtl:ml-2","ltr:-ml-1","rtl:-mr-1","icon-sm"],["class","overflow-y-auto flex-auto",4,"ngIf"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink"],["rla","routerLinkActive"],[1,"overflow-y-auto","flex-auto"],[1,"p-gutter","grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","container"],[3,"contact","openContact","toggleStar",4,"ngFor","ngForOf","ngForTrackBy"],[3,"contact","openContact","toggleStar"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"span",4),t._UZ(5,"mat-icon",5),t.qZA(),t.TgZ(6,"span",6),t._uU(7,"Factura Venta"),t.qZA()(),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"mat-icon",9),t.qZA(),t.TgZ(11,"input",10,11),t.NdJ("input",function(){return e.buscar()}),t.qZA()(),t.TgZ(13,"div",12)(14,"nav",13),t.YNc(15,B,3,4,"a",14),t.qZA(),t.TgZ(16,"div",15)(17,"label",16),t._uU(18,"Vista de lista"),t.qZA(),t.TgZ(19,"mat-slide-toggle",17),t.NdJ("change",function(d){return e.onToggleChange(d)}),t.qZA()(),t.TgZ(20,"button",18),t.NdJ("click",function(){return e.openContact()}),t._UZ(21,"mat-icon",19),t.qZA(),t.TgZ(22,"button",20),t.NdJ("click",function(){return e.openContact()}),t._UZ(23,"mat-icon",21),t.TgZ(24,"span"),t._uU(25,"Registrar Factura"),t.qZA()()()()(),t.YNc(26,Q,4,5,"div",22),t.ALo(27,"async"),t.YNc(28,z,4,1,"div",23),t.ALo(29,"async"),t.qZA()),2&a&&(t.xp6(4),t.Q6J("@scaleIn",void 0),t.xp6(2),t.Q6J("@fadeInRight",void 0),t.xp6(9),t.Q6J("ngForOf",e.links),t.xp6(4),t.Q6J("checked",!1),t.xp6(7),t.Q6J("ngIf",t.lcZ(27,6,e.filteredContacts$).length>0),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(29,8,e.filteredContacts$).length))},dependencies:[u.sg,u.O5,s.rH,s.Od,S.jG,p.BU,p.Nj,h.lW,h.nh,m.Hw,T.gM,j,b.Rr,u.Ov],styles:['@charset "UTF-8";@media (min-width: 768px){.card-list[_ngcontent-%COMP%]{display:none}}@media (max-width: 767px){.table-list[_ngcontent-%COMP%]{display:none}}.sm-flexi[_ngcontent-%COMP%]{position:relative}.search-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:10px;transform:translateY(-50%)}input[_ngcontent-%COMP%]{padding-left:30px}'],data:{animation:[I.a,A.G,G.KF,k.$,J.f]}})}return i})(),data:{scrollDisabled:!0,toolbarShadowEnabled:!1}}];let Y=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(R),s.Bz,S.d8]})}return i})();var $=n(3398);let V=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[u.ez,h.ot,m.Ps,Z.si]})}return i})();var D=n(498);let H=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[u.ez,Y,p.Nh,F.ZX,h.ot,y.Is,$.n,m.Ps,T.AV,V,b.rP,D.ComponentsSlideToggleModule]})}return i})()}}]);