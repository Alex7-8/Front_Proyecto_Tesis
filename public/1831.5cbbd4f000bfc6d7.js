"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[1831],{71831:(wt,y,i)=>{i.r(y),i.d(y,{FacturaVentaTableModule:()=>St});var m=i(96814),g=i(29522),A=i(33594),N=i(62008),S=i(95982),u=i(56223),Q=i(83620),b=i(86820),U=i(68520),w=i(65619),k=i(96726),Y=i(84005),t=i(65879),Z=i(19347),M=i(11333),D=i(22939),O=i(69162);let T=(()=>{class a{constructor(e,n,o,r,s,v,d,p){this.dialog=e,this.ProductoService=n,this.snackBar=o,this.router=r,this.renderer=s,this.fb=v,this.ngZone=d,this.FacturaService=p,this.tablaDataSubject=new w.X([]),this.tablaData$=this.tablaDataSubject.asObservable(),this.searchCtrl=new u.p4,this.estado=this.ProductoService.estado,this.Color=["font-medium"],this.Servicio=[],this.menuOpen=!1,this.searchStr$=this.searchCtrl.valueChanges.pipe((0,Q.b)(10)),this.activeCategory="Activo",this.tableData=this.Servicio,this.tableColumns=[{label:"Numero de Factura",property:"c_Id_Factura",type:"text",cssClasses:["font-medium"]},{label:"Total Facturado",property:"c_Total",type:"text",cssClasses:["font-medium"]},{label:"Estado",property:"c_Nombre_Estado",type:"text",cssClasses:["font-medium"]},{label:"Numero de Serie",property:"c_Numero_Serie",type:"text",cssClasses:["font-medium"]},{label:"Cliente",property:"c_Nombre_Cliente",type:"text",cssClasses:["font-medium"]},{label:"Sucursal",property:"c_Nombre_Sucursal",type:"text",cssClasses:["font-medium"]},{label:"Usuario que lo creo",property:"c_Usuario_Creacion",type:"text",cssClasses:["font-medium"]},{label:"Usuario que lo modifico",property:"c_Usuario_Modificacion",type:"text",cssClasses:["font-medium"]},{label:"Fecha de creacion",property:"c_Fecha_Creacion",type:"text",cssClasses:["font-medium,"]},{label:"Fecha de modificacion",property:"c_Fecha_Modificacion",type:"text",cssClasses:["font-medium"]}]}ngOnInit(){this.obtenerTablaData(),this.checkScreenSize()}setFilter(e){this.activeCategory=e,"Activo"===e&&(this.Color=["text-green"],this.tableData=this.Servicio.filter(n=>1===n.c_Id_Estado_Factura),this.estado=1,this.Color=["text-green"],console.log(this.Color)),"Inactivo"===e&&(this.tableData=this.Servicio.filter(n=>5===n.c_Id_Estado_Factura),this.estado=5,this.Color=["text-red"])}isActive(e){return this.activeCategory===e}obtenerTablaData(){this.FacturaService.getFacturaVentaProductosByDia().subscribe(e=>{this.Servicio=e.response,this.tableData=this.Servicio.filter(n=>n.c_Id_Estado_Factura===this.estado)})}openContact(e){this.dialog.open(U.O,{data:e||null,width:"90rem"})}toggleStar(e){this.Servicio.find(d=>d.c_Id_Factura===e);const o=localStorage.getItem("token"),s=(0,k.Z)(o).IdUsuario;this.c_Id_UsuarioModificacion=s,"Activo"==this.activeCategory?(this.titulo="\xbfEst\xe1s seguro que deseas anular la factura?",this.razon="Razon por la cual se desactiva el registro",this.estado=1):(this.titulo="\xbfEst\xe1s seguro de que deseas activar la factura?",this.razon="Razon por la cual se activa el registro",this.estado=5),console.log(this.titulo,this.activeCategory),this.dialog.open(Y.$,{height:"20rem",width:"28rem",data:{title:this.titulo,textAreaValue:"",razon:this.razon,valido:!0}}).afterClosed().subscribe(d=>{d&&this.FacturaService.CambiarEstadoFactura(e,this.c_Id_UsuarioModificacion,d).subscribe(p=>{p.ok?(this.snackBar.open(p.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]}),this.obtenerTablaData()):this.snackBar.open("Codigo de Error: "+p.transaccion_Estado+" Mensje: "+p.transaccion_Mensaje,"Cerrar",{duration:1e4,panelClass:["red-snackbar"]})})})}setData(e){this.tableData=e,this.menuOpen=!1}openMenu(){this.menuOpen=!0}onResize(e){this.checkScreenSize()}checkScreenSize(){window.innerWidth<768&&this.router.navigate(["/apps/FacturaVenta/grid/activos"])}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(Z.uw),t.Y36(M.U),t.Y36(D.ux),t.Y36(g.F0),t.Y36(t.Qsj),t.Y36(u.QS),t.Y36(t.R0b),t.Y36(O.N))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["vex-contacts-table"]],hostBindings:function(n,o){1&n&&t.NdJ("resize",function(s){return o.onResize(s)},!1,t.Jf7)},decls:23,vars:10,consts:[[1,"w-full","h-full","flex","flex-col"],[1,"px-gutter","pt-6","pb-20","bg-primary/10","flex-none"],[1,"flex","items-center","container","px-0"],["mat-icon-button","","type","button",1,"sm:hidden","text-primary-contrast",3,"click"],["svgIcon","mat:menu"],[1,"display-1","font-bold","m-0","flex","items-center","w-full","max-w-3xs","mr-6"],[1,"w-12","h-12","rounded-full","text-primary","ltr:mr-4","rtl:ml-4","bg-primary/10","hidden","sm:flex","items-center","justify-center"],["svgIcon","mat:table_chart"],[1,"block"],[1,"hidden","sm:flex","items-center","bg-foreground","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-xl","mx-auto"],["svgIcon","mat:search",1,"text-secondary","flex-none"],["placeholder","Buscar...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-foreground","flex-auto",3,"formControl"],[1,"flex","flex-col","overflow-hidden","sm:flex-row","sm:gap-4"],[1,"bg-transparent","flex-auto","flex"],["mode","over",3,"opened","openedChange"],[1,"sm:hidden",3,"openAddNew"],[1,"p-gutter","pt-0","flex-auto","flex","items-start"],[1,"hidden","sm:block","ltr:mr-6","rtl:ml-6"],[3,"filterChange","openAddNew"],[1,"card","h-full","overflow-hidden","flex-auto"],[3,"columns","data","searchStr","openContact","toggleStar"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){return o.openMenu()}),t._UZ(4,"mat-icon",4),t.qZA(),t.TgZ(5,"h2",5)(6,"span",6),t._UZ(7,"mat-icon",7),t.qZA(),t.TgZ(8,"span",8),t._uU(9,"Factura Venta"),t.qZA()(),t.TgZ(10,"div",9),t._UZ(11,"mat-icon",10)(12,"input",11),t.qZA()()(),t.TgZ(13,"div",12)(14,"mat-drawer-container",13)(15,"mat-drawer",14),t.NdJ("openedChange",function(s){return o.menuOpen=s}),t.TgZ(16,"vex-contacts-table-menu",15),t.NdJ("openAddNew",function(){return o.openContact()}),t.qZA()(),t.TgZ(17,"mat-drawer-content",16)(18,"div",17)(19,"vex-contacts-table-menu",18),t.NdJ("filterChange",function(s){return o.setData(s)})("openAddNew",function(){return o.openContact()}),t.qZA()(),t.TgZ(20,"div",19)(21,"vex-contacts-data-table",20),t.NdJ("openContact",function(s){return o.openContact(s)})("toggleStar",function(s){return o.toggleStar(s)}),t.ALo(22,"async"),t.qZA()()()()()()),2&n&&(t.xp6(3),t.Q6J("@scaleIn",void 0),t.xp6(3),t.Q6J("@scaleIn",void 0),t.xp6(2),t.Q6J("@fadeInRight",void 0),t.xp6(4),t.Q6J("formControl",o.searchCtrl),t.xp6(3),t.Q6J("opened",o.menuOpen),t.xp6(6),t.Q6J("columns",o.tableColumns)("data",o.tableData)("searchStr",t.lcZ(22,8,o.searchStr$)))},styles:['@charset "UTF-8";table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;border:1px solid #ccc;text-align:left}.cell[_ngcontent-%COMP%]{cursor:pointer;padding:8px;background-color:#f2f2f2}.cell[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.truncate-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px}',".mat-drawer-container[_ngcontent-%COMP%]{background:transparent!important}"],data:{animation:[b.KF,N.a,S.G]}})}return a})();const $=[{path:"",component:T,data:{scrollDisabled:!0,toolbarShadowEnabled:!0}}];let z=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[g.Bz.forChild($),g.Bz,A.d8]})}return a})();var _=i(32296),l=i(25313),F=i(21476),f=i(13566),V=i(75986),h=i(30617),x=i(77988),I=i(23680),R=i(95783),j=i(41043),B=i(83951),E=i(2852),P=i(80400);function H(a,c){if(1&a&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&a){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}function G(a,c){if(1&a&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&a){const e=c.$implicit,n=t.oxw(2).$implicit;t.Q6J("ngClass",n.cssClasses),t.xp6(1),t.Oqu(e[n.property])}}function K(a,c){if(1&a&&(t.ynx(0,15),t.YNc(1,H,2,1,"th",16),t.YNc(2,G,2,2,"td",17),t.BQk()),2&a){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property)}}function X(a,c){if(1&a&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&a){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}const W=function(a){return["text-x1",a]};function L(a,c){if(1&a&&(t.TgZ(0,"td",21)(1,"mat-checkbox",22),t.NdJ("click",function(n){return n.stopPropagation()}),t.qZA()()),2&a){const e=c.$implicit,n=t.oxw(2).$implicit;t.Q6J("ngClass",t.VKq(2,W,n.cssClasses)),t.xp6(1),t.Q6J("checked",e[n.property])}}function q(a,c){if(1&a&&(t.ynx(0,15),t.YNc(1,X,2,1,"th",16),t.YNc(2,L,2,4,"td",20),t.BQk()),2&a){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property)}}function tt(a,c){if(1&a&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&a){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}function et(a,c){if(1&a&&(t.TgZ(0,"td",21),t._UZ(1,"img",24),t.qZA()),2&a){const e=c.$implicit,n=t.oxw(2).$implicit;t.Q6J("ngClass",n.cssClasses),t.xp6(1),t.Q6J("src",e[n.property],t.LSH)}}function at(a,c){if(1&a&&(t.ynx(0,23),t.YNc(1,tt,2,1,"th",16),t.YNc(2,et,2,2,"td",20),t.BQk()),2&a){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property)}}function nt(a,c){if(1&a&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&a){const e=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}function ot(a,c){1&a&&t._UZ(0,"mat-icon",31)}function it(a,c){1&a&&t._UZ(0,"mat-icon",32)}function ct(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"td",27)(1,"button",28),t.NdJ("click",function(o){const s=t.CHM(e).$implicit,v=t.oxw(4);return t.KtG(v.emitToggleStar(o,s.c_Id_Factura))}),t.YNc(2,ot,1,0,"mat-icon",29),t.YNc(3,it,1,0,"mat-icon",30),t.qZA()()}if(2&a){const e=c.$implicit,n=t.oxw(3).$implicit;t.Q6J("ngClass",n.cssClasses),t.xp6(2),t.Q6J("ngIf",2==e.c_Id_Estado_Factura),t.xp6(1),t.Q6J("ngIf",1==e.c_Id_Estado_Factura)}}function rt(a,c){1&a&&(t.ynx(0),t.YNc(1,nt,2,1,"th",16),t.YNc(2,ct,4,3,"td",26),t.BQk())}function st(a,c){if(1&a&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&a){const e=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}function lt(a,c){if(1&a&&(t.TgZ(0,"td",27)(1,"button",33),t.NdJ("click",function(n){return n.stopPropagation()}),t._UZ(2,"mat-icon",34),t.qZA()()),2&a){const e=t.oxw(3).$implicit;t.oxw();const n=t.MAs(9);t.Q6J("ngClass",e.cssClasses),t.xp6(1),t.Q6J("matMenuTriggerFor",n)}}function mt(a,c){1&a&&(t.ynx(0),t.YNc(1,st,2,1,"th",16),t.YNc(2,lt,3,2,"td",26),t.BQk())}function ut(a,c){if(1&a&&(t.ynx(0,15),t.YNc(1,rt,3,0,"ng-container",25),t.YNc(2,mt,3,0,"ng-container",25),t.BQk()),2&a){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property),t.xp6(1),t.Q6J("ngIf","starred"===e.property),t.xp6(1),t.Q6J("ngIf","menu"===e.property)}}function dt(a,c){if(1&a&&(t.ynx(0),t.YNc(1,K,3,1,"ng-container",13),t.YNc(2,q,3,1,"ng-container",13),t.YNc(3,at,3,1,"ng-container",14),t.YNc(4,ut,3,3,"ng-container",13),t.BQk()),2&a){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf","text"===e.type),t.xp6(1),t.Q6J("ngIf","checkbox"===e.type),t.xp6(1),t.Q6J("ngIf","image"===e.type),t.xp6(1),t.Q6J("ngIf","button"===e.type)}}function pt(a,c){1&a&&t._UZ(0,"tr",35)}function gt(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"tr",36),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.openContact.emit(r.c_Id_Factura))}),t.qZA()}2&a&&t.Q6J("@fadeInUp",void 0)}function _t(a,c){1&a&&(t.TgZ(0,"div",37),t._UZ(1,"img",38),t.TgZ(2,"h2",39),t._uU(3,"No contacts matching your filters"),t.qZA()()),2&a&&t.Q6J("@scaleFadeIn",void 0)}let ft=(()=>{class a{constructor(){this.pageSize=15,this.pageSizeOptions=[15,20,50],this.toggleStar=new t.vpe,this.openContact=new t.vpe,this.dataSource=new l.by}ngOnInit(){}ngOnChanges(e){e.columns&&(this.visibleColumns=this.columns.map(n=>n.property)),e.data&&(this.dataSource.data=this.data),e.searchStr&&(this.dataSource.filter=(this.searchStr||"").trim().toLowerCase())}emitToggleStar(e,n){e.stopPropagation(),this.toggleStar.emit(n)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["vex-contacts-data-table"]],viewQuery:function(n,o){if(1&n&&(t.Gf(F.NW,7),t.Gf(f.YE,7)),2&n){let r;t.iGM(r=t.CRH())&&(o.paginator=r.first),t.iGM(r=t.CRH())&&(o.sort=r.first)}},inputs:{data:"data",columns:"columns",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",searchStr:"searchStr"},outputs:{toggleStar:"toggleStar",openContact:"openContact"},features:[t._Bn([{provide:j.o2,useValue:{appearance:"fill"}}]),t.TTD],decls:18,vars:11,consts:[[1,"h-full","relative"],[1,"flex","flex-col","justify-between"],["mat-table","","matSort","",1,"w-full","flex-auto",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","hover:bg-hover cursor-pointer","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],[1,"sticky","bottom-0","left-0","right-0","border-t","flex-none",3,"pageSize","pageSizeOptions"],["xPosition","before","yPosition","below"],["contactMenu","matMenu"],["mat-menu-item",""],["svgIcon","mat:edit"],["svgIcon","mat:delete_forever"],[3,"matColumnDef",4,"ngIf"],["class","flex flex-col sm:flex-row sm:gap-4",3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","truncate-text","mat-cell","",3,"ngClass",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"truncate-text",3,"ngClass"],["mat-cell","",3,"ngClass",4,"matCellDef"],["mat-cell","",3,"ngClass"],[3,"checked","click"],[1,"flex","flex-col","sm:flex-row","sm:gap-4",3,"matColumnDef"],[1,"avatar","h-18","w-18","align-middle","my-2",3,"src"],[4,"ngIf"],["class","w-10","mat-cell","",3,"ngClass",4,"matCellDef"],["mat-cell","",1,"w-10",3,"ngClass"],["mat-icon-button","","type","button",3,"click"],["svgIcon","mat:control_point",4,"ngIf"],["svgIcon","mat:cancel",4,"ngIf"],["svgIcon","mat:control_point"],["svgIcon","mat:cancel"],["mat-icon-button","","type","button",3,"matMenuTriggerFor","click"],["svgIcon","mat:more_vert"],["mat-header-row",""],["mat-row","",1,"hover:bg-hover","cursor-pointer",3,"click"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(n,o){1&n&&(t.TgZ(0,"vex-scrollbar",0)(1,"div",1)(2,"table",2),t.YNc(3,dt,5,4,"ng-container",3),t.YNc(4,pt,1,0,"tr",4),t.YNc(5,gt,1,1,"tr",5),t.qZA(),t.YNc(6,_t,4,1,"div",6),t._UZ(7,"mat-paginator",7),t.qZA()(),t.TgZ(8,"mat-menu",8,9)(10,"button",10),t._UZ(11,"mat-icon",11),t.TgZ(12,"span"),t._uU(13,"Edit Contact"),t.qZA()(),t.TgZ(14,"button",10),t._UZ(15,"mat-icon",12),t.TgZ(16,"span"),t._uU(17,"Delete Contact"),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("@stagger",o.dataSource.filteredData)("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngForOf",o.columns),t.xp6(1),t.Q6J("matHeaderRowDef",o.visibleColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.visibleColumns),t.xp6(1),t.Q6J("ngIf",0===o.dataSource.filteredData.length),t.xp6(1),t.ekj("hidden",0===o.dataSource.filteredData.length),t.Q6J("pageSize",o.pageSize)("pageSizeOptions",o.pageSizeOptions))},dependencies:[m.mk,m.sg,m.O5,_.RK,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,F.NW,f.YE,f.nU,V.oG,h.Hw,x.VK,x.OP,x.p6,P.x],styles:[".truncate-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px}"],data:{animation:[b.v$,B.$,E.f]}})}return a})();var ht=i(98866),xt=i(71996),J=i(82599);const Ct=function(a){return{"bg-primary/10 text-primary":a}};function vt(a,c){if(1&a){const e=t.EpF();t.TgZ(0,"a",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw();return t.KtG(r.setFilter(o.id))}),t._UZ(1,"mat-icon",12),t.TgZ(2,"span"),t._uU(3),t.qZA()()}if(2&a){const e=t.oxw().$implicit,n=t.oxw();t.Q6J("@fadeInRight",void 0)("ngClass",t.VKq(5,Ct,n.isActive(e.id))),t.xp6(1),t.Q6J("ngClass",null==e.classes?null:e.classes.icon)("svgIcon",e.icon),t.xp6(2),t.Oqu(e.label)}}function bt(a,c){if(1&a&&(t.TgZ(0,"h3",13),t._uU(1),t.qZA()),2&a){const e=t.oxw().$implicit;t.Q6J("@fadeInRight",void 0),t.xp6(1),t.Oqu(e.label)}}function Tt(a,c){if(1&a&&(t.ynx(0),t.YNc(1,vt,4,7,"a",9),t.YNc(2,bt,2,2,"h3",10),t.BQk()),2&a){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf","link"===e.type),t.xp6(1),t.Q6J("ngIf","subheading"===e.type)}}let Ft=(()=>{class a{constructor(e,n,o,r){this.CrearUsuariosService=e,this.em=n,this.router=o,this.renderer=r,this.Producto=[],this.items=[{type:"link",id:"Activo",icon:"mat:label",label:"Facturas Activas",classes:{icon:"text-green"}},{type:"link",id:"Inactivo",icon:"mat:label",label:"Facturas Inactivas",classes:{icon:"text-gray"}}],this.filterChange=new t.vpe,this.openAddNew=new t.vpe,this.activeCategory="all",this.tablaDataSubject=new w.X([]),this.tablaData$=this.tablaDataSubject.asObservable()}ngOnInit(){}onToggleChange(e){e.checked&&"Activo"==this.em.activeCategory?(this.router.navigate(["/apps/producto/grid/activos"]),this.em.activeCategory="Activo"):e.checked&&"Inactivo"==this.em.activeCategory&&this.router.navigate(["/apps/producto/grid/inactivos"])}setFilter(e){this.activeCategory=e,"Activo"===e&&(this.em.activeCategory="Activo",this.em.tableData=this.em.Servicio.filter(n=>1===n.c_Id_Estado_Factura)),"Inactivo"===e&&(this.em.activeCategory="Inactivo",this.em.tableData=this.em.Servicio.filter(n=>5===n.c_Id_Estado_Factura))}isActive(e){return this.activeCategory===e}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(xt.x),t.Y36(T),t.Y36(g.F0),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["vex-contacts-table-menu"]],inputs:{items:"items"},outputs:{filterChange:"filterChange",openAddNew:"openAddNew"},decls:12,vars:3,consts:[[1,"max-w-3xs","w-full"],[1,"h-14","mb-6","flex","px-gutter","sm:px-0","flex","items-center"],["color","primary","mat-raised-button","","type","button",1,"flex-auto",3,"click"],["svgIcon","mat:add",1,"ltr:-ml-4","ltr:mr-2","rtl:ml-2","icon-sm"],[2,"margin-left","1.3rem"],["for","gridViewToggle",2,"margin-right","0.5rem"],["id","gridViewToggle","color","primary",3,"checked","change"],[1,"px-gutter","sm:px-0"],[4,"ngFor","ngForOf"],["class","rounded h-10 px-4 cursor-pointer hover:bg-primary/10 mt-1 font-medium flex items-center transition duration-200 ease-out","matRipple","",3,"ngClass","click",4,"ngIf"],["class","caption text-secondary font-medium mb-0 mt-6",4,"ngIf"],["matRipple","",1,"rounded","h-10","px-4","cursor-pointer","hover:bg-primary/10","mt-1","font-medium","flex","items-center","transition","duration-200","ease-out",3,"ngClass","click"],[1,"ltr:mr-3","rtl:ml-3",3,"ngClass","svgIcon"],[1,"caption","text-secondary","font-medium","mb-0","mt-6"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return o.openAddNew.emit()}),t._UZ(3,"mat-icon",3),t.TgZ(4,"span"),t._uU(5,"Registrar Factura"),t.qZA()()(),t.TgZ(6,"div",4)(7,"label",5),t._uU(8,"Vista de cuadr\xedcula"),t.qZA(),t.TgZ(9,"mat-slide-toggle",6),t.NdJ("change",function(s){return o.onToggleChange(s)}),t.qZA()(),t.TgZ(10,"div",7),t.YNc(11,Tt,3,2,"ng-container",8),t.qZA()()),2&n&&(t.Q6J("@stagger",void 0),t.xp6(9),t.Q6J("checked",!1),t.xp6(2),t.Q6J("ngForOf",o.items))},dependencies:[m.mk,m.sg,m.O5,_.lW,h.Hw,I.wG,J.Rr],encapsulation:2,data:{animation:[S.G,b.KF]}})}return a})();var C=i(32651),yt=i(498);let St=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[m.ez,z,yt.ComponentsSlideToggleModule,_.ot,l.p0,F.TU,f.JX,V.p9,h.Ps,x.Tx,I.si,Z.Is,R.Y,ht.o,u.UX,C.SJ,D.ZX,J.rP]})}return a})();t.B6R(T,[_.RK,h.Hw,u.Fj,u.JJ,u.oH,C.jA,C.kh,C.LW,ft,Ft],[m.Ov])}}]);