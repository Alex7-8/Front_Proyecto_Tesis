"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[6779],{16779:(W,x,i)=>{i.r(x),i.d(x,{VentaGridModule:()=>X});var s=i(96814),l=i(29522),y=i(33594),S=i(62008),U=i(95982),A=i(64435),M=i(22096),G=i(86820),k=i(83951),P=i(2852),d=i(37398),J=i(96726),w=i(84005),t=i(65879),T=i(19347),F=i(11333),Z=i(22939),h=i(74104),u=i(32296),p=i(30617),_=i(92596),b=i(23680);function O(e,r){1&e&&t._UZ(0,"mat-icon",11)}function E(e,r){1&e&&t._UZ(0,"mat-icon",12)}let N=(()=>{class e{constructor(){this.openContact=new t.vpe,this.toggleStar=new t.vpe}ngOnInit(){}emitToggleStar(o,n){o.stopPropagation(),this.toggleStar.emit(n)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["vex-contacts-card"]],inputs:{contact:"contact"},outputs:{openContact:"openContact",toggleStar:"toggleStar"},decls:16,vars:6,consts:[[1,"card","overflow-hidden"],["matRipple","",1,"p-4","text-center","hover:bg-hover","trans-ease-out","cursor-pointer","relative",3,"click"],[1,"avatar","h-24","w-24","mx-auto",3,"src"],[1,"title","mb-1","mt-3"],[1,"body-2","text-secondary","flex","items-center","justify-center"],["svgIcon","mat:date_range",1,"ltr:mr-1","rtl:ml-1","icon-xs"],[1,"truncate-text"],["mat-icon-button","","type","button",1,"absolute","top-2","right-2",3,"click"],["svgIcon","mat:cancel",4,"ngIf"],["svgIcon","mat:control_point",4,"ngIf"],[1,"bg-app-bar","p-2","flex","items-center","justify-around",2,"height","2rem"],["svgIcon","mat:cancel"],["svgIcon","mat:control_point"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return n.openContact.emit(n.contact.c_Id_Producto)}),t._UZ(2,"img",2),t.TgZ(3,"h2",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"mat-icon",5),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"div",4)(10,"span",6),t._uU(11),t.qZA()(),t.TgZ(12,"button",7),t.NdJ("click",function(c){return n.emitToggleStar(c,null==n.contact?null:n.contact.c_Id_Producto)}),t.YNc(13,O,1,0,"mat-icon",8),t.YNc(14,E,1,0,"mat-icon",9),t.qZA()(),t._UZ(15,"div",10),t.qZA()),2&o&&(t.xp6(2),t.Q6J("src",null==n.contact?null:n.contact.c_Url_IMG,t.LSH),t.xp6(2),t.Oqu(null==n.contact?null:n.contact.c_Nombre_Producto),t.xp6(4),t.Oqu(null==n.contact?null:n.contact.c_Fecha_Creacion),t.xp6(3),t.Oqu(null==n.contact?null:n.contact.c_Descripcion),t.xp6(2),t.Q6J("ngIf",1==(null==n.contact?null:n.contact.c_Estado)),t.xp6(1),t.Q6J("ngIf",2==(null==n.contact?null:n.contact.c_Estado)))},dependencies:[s.O5,u.RK,p.Hw,b.wG],styles:['@charset "UTF-8";.truncate-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}']}),e})();var I=i(82599);const Q=["searchInput"];function j(e,r){if(1&e&&(t.TgZ(0,"a",24,25),t._uU(2),t.qZA()),2&e){const o=r.$implicit,n=t.MAs(1);t.Q6J("active",n.isActive)("disabled",o.disabled)("routerLink",o.route),t.xp6(2),t.hij(" ",o.label," ")}}function B(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"vex-contacts-card",29),t.NdJ("openContact",function(a){t.CHM(o);const c=t.oxw(2);return t.KtG(c.openContact(a))})("toggleStar",function(a){t.CHM(o);const c=t.oxw(2);return t.KtG(c.toggleStar(a))}),t.qZA()}if(2&e){const o=r.$implicit;t.Q6J("@fadeInUp",void 0)("contact",o)}}function R(e,r){if(1&e&&(t.TgZ(0,"div",26)(1,"div",27),t.YNc(2,B,1,2,"vex-contacts-card",28),t.ALo(3,"async"),t.qZA()()),2&e){const o=t.oxw();t.Q6J("@stagger",void 0),t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,3,o.filteredContacts$))("ngForTrackBy",o.trackById)}}function Y(e,r){1&e&&(t.TgZ(0,"div",30),t._UZ(1,"img",31),t.TgZ(2,"h2",32),t._uU(3,"No contacts matching your filters"),t.qZA()()),2&e&&t.Q6J("@scaleFadeIn",void 0)}function L(e,r){return r.c_Id_Producto}const z=[{path:"",redirectTo:"all",pathMatch:"full"},{path:":activeCategory",component:(()=>{class e{buscar(){const o=this.searchInput.nativeElement.value.toLowerCase();if(o){const n=this.Servicio.filter(a=>{for(const c in a)if(a.hasOwnProperty(c)&&"string"==typeof a[c]&&a[c].toLowerCase().includes(o))return!0;return!1});this.filteredContacts$=this.route.paramMap.pipe((0,d.U)(a=>a.get("activeCategory")),(0,d.U)(a=>{switch(a){case"activos":return this.activeCategory=a,n.filter(c=>1===c.c_Estado);case"inactivos":return this.activeCategory=a,n.filter(c=>2===c.c_Estado);default:return n}}))}}constructor(o,n,a,c,f,V){this.dialog=o,this.route=n,this.ProductoService=a,this.router=c,this.renderer=f,this.snackBar=V,this.estado=1,this.Servicio=[],this.filteredContacts$=(0,M.of)([]),this.loadingData=!0,this.activeCategory="activos",this.tableData=this.Servicio,this.links=[{label:"Activos",route:"../activos"},{label:"Inactivos",route:"../inactivos"}],this.trackById=L}ngOnInit(){this.obtenerTablaData()}obtenerTablaData(){this.ProductoService.getProducto("").subscribe(o=>{this.Servicio=o.response,this.tableData=this.Servicio.filter(n=>n.c_Estado===this.estado),this.filteredContacts$=this.route.paramMap.pipe((0,d.U)(n=>n.get("activeCategory")),(0,d.U)(n=>{switch(n){case"activos":return this.activeCategory=n,this.Servicio.filter(a=>1===a.c_Estado);case"inactivos":return this.activeCategory=n,this.Servicio.filter(a=>2===a.c_Estado);default:return this.Servicio}}))})}openContact(o){this.dialog.open(A.a,{data:o||null,width:"55rem"})}toggleStar(o){this.Servicio.find(v=>v.c_Id_Producto===o);const a=localStorage.getItem("token"),f=(0,J.Z)(a).IdUsuario;this.c_Id_UsuarioModificacion=f,"activos"==this.activeCategory?(this.titulo="\xbfEst\xe1s seguro que deseas desactivar la marca?",this.razon="Razon por la cual se desactiva el registro",this.estado=1):(this.titulo="\xbfEst\xe1s seguro de que deseas activar la marca?",this.razon="Razon por la cual se activa el registro",this.estado=2),console.log(this.titulo,this.activeCategory),this.dialog.open(w.$,{height:"20rem",width:"28rem",data:{title:this.titulo,textAreaValue:"",razon:this.razon,valido:!0}}).afterClosed().subscribe(v=>{v&&this.ProductoService.CambiarEstadoProducto(o,this.c_Id_UsuarioModificacion,v).subscribe(g=>{console.log(g),g.ok?(this.snackBar.open(g.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]}),this.obtenerTablaData(),this.filteredContacts$=this.route.paramMap.pipe((0,d.U)(m=>m.get("activeCategory")),(0,d.U)(m=>{switch(m){case"activos":return this.activeCategory=m,this.Servicio.filter(C=>1===C.c_Estado);case"inactivos":return this.activeCategory=m,this.Servicio.filter(C=>2===C.c_Estado);default:return this.Servicio}}))):this.snackBar.open("Codigo de Error: "+g.transaccion_Estado+" Mensje: "+g.transaccion_Mensaje,"Cerrar",{duration:1e4,panelClass:["red-snackbar"]})})})}onToggleChange(o){o.checked&&"activos"==this.activeCategory?(this.ProductoService.estado=1,this.router.navigate(["/apps/producto/table"])):o.checked&&"inactivos"==this.activeCategory&&(this.ProductoService.estado=2,this.router.navigate(["/apps/producto/table"]))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(T.uw),t.Y36(l.gz),t.Y36(F.U),t.Y36(l.F0),t.Y36(t.Qsj),t.Y36(Z.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["vex-contacts-grid"]],viewQuery:function(o,n){if(1&o&&t.Gf(Q,7),2&o){let a;t.iGM(a=t.CRH())&&(n.searchInput=a.first)}},decls:30,vars:10,consts:[[1,"h-full","flex","flex-col"],[1,"p-6","pb-0","bg-foreground","shadow-b","flex-none","border-b","border-gray-200"],[1,"container","px-0"],[1,"display-1","font-bold","mt-0","mb-4","flex","items-center"],[1,"w-12","h-12","rounded-full","text-primary","ltr:mr-4","rtl:ml-4","flex","items-center","justify-center","bg-primary/10"],["svgIcon","mat:table_chart"],[1,"block"],[1,"sm:flexi","tems-center","bg-foreground","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-xl","mx-auto"],[1,"search-icon"],["svgIcon","mat:search",1,"text-secondary"],["placeholder","Buscar...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-foreground","flex-auto",3,"input"],["searchInput",""],[1,"flex","items-center"],["mat-tab-nav-bar","",1,"border-0","flex-auto"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink",4,"ngFor","ngForOf"],[1,"ltr:ml-1","rtl:mr-1","flex-none","hidden","sm:inline-block"],["for","gridViewToggle",2,"margin-right","0.3rem"],["id","gridViewToggle","color","primary",3,"checked","change"],["color","primary","mat-mini-fab","","matTooltip","Registrar Producto","type","button",1,"ltr:ml-1","rtl:mr-1","flex-none","sm:hidden",3,"click"],["svgIcon","mat:queue"],["color","primary","mat-flat-button","","type","button",1,"ltr:ml-4","rtl:mr-4","flex-none","hidden","sm:inline-block",3,"click"],["svgIcon","mat:add",1,"ltr:mr-2","rtl:ml-2","ltr:-ml-1","rtl:-mr-1","icon-sm"],["class","overflow-y-auto flex-auto",4,"ngIf"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink"],["rla","routerLinkActive"],[1,"overflow-y-auto","flex-auto"],[1,"p-gutter","grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","container"],[3,"contact","openContact","toggleStar",4,"ngFor","ngForOf","ngForTrackBy"],[3,"contact","openContact","toggleStar"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"span",4),t._UZ(5,"mat-icon",5),t.qZA(),t.TgZ(6,"span",6),t._uU(7,"Productos"),t.qZA()(),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"mat-icon",9),t.qZA(),t.TgZ(11,"input",10,11),t.NdJ("input",function(){return n.buscar()}),t.qZA()(),t.TgZ(13,"div",12)(14,"nav",13),t.YNc(15,j,3,4,"a",14),t.qZA(),t.TgZ(16,"div",15)(17,"label",16),t._uU(18,"Vista de lista"),t.qZA(),t.TgZ(19,"mat-slide-toggle",17),t.NdJ("change",function(c){return n.onToggleChange(c)}),t.qZA()(),t.TgZ(20,"button",18),t.NdJ("click",function(){return n.openContact()}),t._UZ(21,"mat-icon",19),t.qZA(),t.TgZ(22,"button",20),t.NdJ("click",function(){return n.openContact()}),t._UZ(23,"mat-icon",21),t.TgZ(24,"span"),t._uU(25,"Registrar Producto"),t.qZA()()()()(),t.YNc(26,R,4,5,"div",22),t.ALo(27,"async"),t.YNc(28,Y,4,1,"div",23),t.ALo(29,"async"),t.qZA()),2&o&&(t.xp6(4),t.Q6J("@scaleIn",void 0),t.xp6(2),t.Q6J("@fadeInRight",void 0),t.xp6(9),t.Q6J("ngForOf",n.links),t.xp6(4),t.Q6J("checked",!1),t.xp6(7),t.Q6J("ngIf",t.lcZ(27,6,n.filteredContacts$).length>0),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(29,8,n.filteredContacts$).length))},dependencies:[s.sg,s.O5,l.rH,l.Od,y.jG,h.BU,h.Nj,u.lW,u.nh,p.Hw,_.gM,N,I.Rr,s.Ov],styles:['@charset "UTF-8";@media (min-width: 768px){.card-list[_ngcontent-%COMP%]{display:none}}@media (max-width: 767px){.table-list[_ngcontent-%COMP%]{display:none}}.sm-flexi[_ngcontent-%COMP%]{position:relative}.search-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:10px;transform:translateY(-50%)}input[_ngcontent-%COMP%]{padding-left:30px}'],data:{animation:[S.a,U.G,G.KF,k.$,P.f]}}),e})(),data:{scrollDisabled:!0,toolbarShadowEnabled:!1}}];let $=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(z),l.Bz,y.d8]}),e})();var D=i(15516);let H=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,u.ot,p.Ps,b.si]}),e})();var K=i(498);let X=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,$,h.Nh,Z.ZX,u.ot,T.Is,D.M,p.Ps,_.AV,H,I.rP,K.ComponentsSlideToggleModule]}),e})()}}]);