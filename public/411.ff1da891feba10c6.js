"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[411],{20411:(Ct,b,o)=>{o.r(b),o.d(b,{FacturaVentaTableModule:()=>ft});var p=o(96814),u=o(29522),w=o(33594),Q=o(62008),T=o(95982),m=o(56223),A=o(83620),_=o(86820),D=o(65619),t=o(65879),y=o(19347),J=o(11333),F=o(22939),N=o(69162),Y=o(17605);let x=(()=>{class e{constructor(a,n,i,c,s,h,ht,_t,xt){this.dialog=a,this.ProductoService=n,this.snackBar=i,this.router=c,this.renderer=s,this.fb=h,this.ngZone=ht,this.FacturaService=_t,this.ReporteService=xt,this.tablaDataSubject=new D.X([]),this.tablaData$=this.tablaDataSubject.asObservable(),this.searchCtrl=new m.p4,this.RTotal="N/A",this.estado=this.ProductoService.estado,this.Color=["font-medium"],this.Servicio=[],this.menuOpen=!1,this.searchStr$=this.searchCtrl.valueChanges.pipe((0,A.b)(10)),this.activeCategory="Activo",this.tableData=this.Servicio,this.tableColumns=[{label:"No. de Factura",property:"c_Numero_Factura",type:"text",cssClasses:["font-medium"]},{label:"Codigo",property:"c_Codigo",type:"text",cssClasses:["font-medium"]},{label:"Nombre",property:"c_Nombre",type:"text",cssClasses:["font-medium"]},{label:"Cantidad",property:"c_Cantidad",type:"text",cssClasses:["font-medium"]},{label:"Precio",property:"c_Precio",type:"text",cssClasses:["font-medium"]},{label:"SubTotal",property:"c_SubTotal",type:"text",cssClasses:["font-medium"]},{label:"IVA",property:"c_IVA",type:"text",cssClasses:["font-medium"]},{label:"Total",property:"c_Total",type:"text",cssClasses:["font-medium"]},{label:"Fecha",property:"c_Fecha",type:"text",cssClasses:["font-medium,"]},{label:"Usuario",property:"c_Usuario",type:"text",cssClasses:["font-medium"]},{label:"Tipo",property:"c_Tipo",type:"text",cssClasses:["font-medium"]}]}ngOnInit(){this.obtenerTablaData()}setFilter(a){this.activeCategory=a}isActive(a){return this.activeCategory===a}obtenerTablaData(){this.ReporteService.getReporteFacturaByTipo("GA").subscribe(a=>{this.Servicio=a.response,this.tableData=this.Servicio;const i=a.response.reduce((c,s)=>{const h=parseFloat(s.c_Total);return isNaN(h)?c:c+h},0).toFixed(2);this.RTotal=i})}setData(a){this.tableData=a,this.menuOpen=!1}openMenu(){this.menuOpen=!0}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(y.uw),t.Y36(J.U),t.Y36(F.ux),t.Y36(u.F0),t.Y36(t.Qsj),t.Y36(m.QS),t.Y36(t.R0b),t.Y36(N.N),t.Y36(Y.j))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["vex-contacts-table"]],decls:21,vars:8,consts:[[1,"w-full","h-full","flex","flex-col"],[1,"px-gutter","pt-6","pb-20","bg-primary/10","flex-none"],[1,"flex","items-center","container","px-8"],[1,"display-2","font-bold","m-0","flex","items-center","w-full","max-w-3xs","mr-6",2,"white-space","nowrap","margin-right","30rem"],[1,"display-1","font-bold","m-0","flex","items-center","w-full","max-w-3xs","mr-6",2,"margin-left","10px"],[1,"hidden","sm:flex","items-center","bg-foreground","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-xl","mx-auto"],["svgIcon","mat:search",1,"text-secondary","flex-none"],["placeholder","Buscar...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-foreground","flex-auto",3,"formControl"],[1,"flex","flex-col","overflow-hidden","sm:flex-row","sm:gap-4"],[1,"bg-transparent","flex-auto","flex"],["mode","over",3,"opened","openedChange"],[1,"sm:hidden"],[1,"p-gutter","pt-0","flex-auto","flex","items-start"],[1,"hidden","sm:block","ltr:mr-6","rtl:ml-6"],[3,"filterChange"],[1,"card","h-full","overflow-hidden","flex-auto"],[3,"columns","data","searchStr"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4," Reporte Facturas Por A\xf1o Actual "),t.qZA(),t.TgZ(5,"div")(6,"h1",4),t._uU(7),t.qZA()(),t.TgZ(8,"div",5),t._UZ(9,"mat-icon",6)(10,"input",7),t.qZA()()(),t.TgZ(11,"div",8)(12,"mat-drawer-container",9)(13,"mat-drawer",10),t.NdJ("openedChange",function(s){return i.menuOpen=s}),t._UZ(14,"vex-contacts-table-menu",11),t.qZA(),t.TgZ(15,"mat-drawer-content",12)(16,"div",13)(17,"vex-contacts-table-menu",14),t.NdJ("filterChange",function(s){return i.setData(s)}),t.qZA()(),t.TgZ(18,"div",15),t._UZ(19,"vex-contacts-data-table",16),t.ALo(20,"async"),t.qZA()()()()()),2&n&&(t.xp6(7),t.hij("Total Q",i.RTotal,""),t.xp6(3),t.Q6J("formControl",i.searchCtrl),t.xp6(3),t.Q6J("opened",i.menuOpen),t.xp6(6),t.Q6J("columns",i.tableColumns)("data",i.tableData)("searchStr",t.lcZ(20,6,i.searchStr$)))},styles:['@charset "UTF-8";table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;border:1px solid #ccc;text-align:left}.cell[_ngcontent-%COMP%]{cursor:pointer;padding:8px;background-color:#f2f2f2}.cell[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}',".mat-drawer-container[_ngcontent-%COMP%]{background:transparent!important}"],data:{animation:[_.KF,Q.a,T.G]}})}return e})();const U=[{path:"",component:x,data:{scrollDisabled:!0,toolbarShadowEnabled:!0}}];let O=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(U),u.Bz,w.d8]})}return e})();var S=o(32296),l=o(25313),C=o(21476),g=o(13566),Z=o(75986),v=o(30617),d=o(77988),R=o(23680),I=o(95783),$=o(41043),j=o(83951),P=o(2852),M=o(80400);function B(e,r){if(1&e&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&e){const a=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",a.label,"")}}function z(e,r){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const a=r.$implicit,n=t.oxw(2).$implicit;t.Q6J("ngClass",n.cssClasses),t.xp6(1),t.Oqu(a[n.property])}}function H(e,r){if(1&e&&(t.ynx(0,15),t.YNc(1,B,2,1,"th",16),t.YNc(2,z,2,2,"td",17),t.BQk()),2&e){const a=t.oxw().$implicit;t.Q6J("matColumnDef",a.property)}}function G(e,r){if(1&e&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&e){const a=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",a.label,"")}}const k=function(e){return["text-x1",e]};function X(e,r){if(1&e&&(t.TgZ(0,"td",21)(1,"mat-checkbox",22),t.NdJ("click",function(n){return n.stopPropagation()}),t.qZA()()),2&e){const a=r.$implicit,n=t.oxw(2).$implicit;t.Q6J("ngClass",t.VKq(2,k,n.cssClasses)),t.xp6(1),t.Q6J("checked",a[n.property])}}function V(e,r){if(1&e&&(t.ynx(0,15),t.YNc(1,G,2,1,"th",16),t.YNc(2,X,2,4,"td",20),t.BQk()),2&e){const a=t.oxw().$implicit;t.Q6J("matColumnDef",a.property)}}function K(e,r){if(1&e&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&e){const a=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",a.label,"")}}function E(e,r){if(1&e&&(t.TgZ(0,"td",21),t._UZ(1,"img",24),t.qZA()),2&e){const a=r.$implicit,n=t.oxw(2).$implicit;t.Q6J("ngClass",n.cssClasses),t.xp6(1),t.Q6J("src",a[n.property],t.LSH)}}function L(e,r){if(1&e&&(t.ynx(0,23),t.YNc(1,K,2,1,"th",16),t.YNc(2,E,2,2,"td",20),t.BQk()),2&e){const a=t.oxw().$implicit;t.Q6J("matColumnDef",a.property)}}function W(e,r){if(1&e&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",a.label,"")}}function q(e,r){if(1&e&&t._UZ(0,"td",27),2&e){const a=t.oxw(3).$implicit;t.Q6J("ngClass",a.cssClasses)}}function tt(e,r){1&e&&(t.ynx(0),t.YNc(1,W,2,1,"th",16),t.YNc(2,q,1,1,"td",26),t.BQk())}function et(e,r){if(1&e&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",a.label,"")}}function at(e,r){if(1&e&&(t.TgZ(0,"td",27)(1,"button",28),t.NdJ("click",function(n){return n.stopPropagation()}),t._UZ(2,"mat-icon",29),t.qZA()()),2&e){const a=t.oxw(3).$implicit;t.oxw();const n=t.MAs(9);t.Q6J("ngClass",a.cssClasses),t.xp6(1),t.Q6J("matMenuTriggerFor",n)}}function nt(e,r){1&e&&(t.ynx(0),t.YNc(1,et,2,1,"th",16),t.YNc(2,at,3,2,"td",26),t.BQk())}function ot(e,r){if(1&e&&(t.ynx(0,15),t.YNc(1,tt,3,0,"ng-container",25),t.YNc(2,nt,3,0,"ng-container",25),t.BQk()),2&e){const a=t.oxw().$implicit;t.Q6J("matColumnDef",a.property),t.xp6(1),t.Q6J("ngIf","starred"===a.property),t.xp6(1),t.Q6J("ngIf","menu"===a.property)}}function it(e,r){if(1&e&&(t.ynx(0),t.YNc(1,H,3,1,"ng-container",13),t.YNc(2,V,3,1,"ng-container",13),t.YNc(3,L,3,1,"ng-container",14),t.YNc(4,ot,3,3,"ng-container",13),t.BQk()),2&e){const a=r.$implicit;t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(1),t.Q6J("ngIf","checkbox"===a.type),t.xp6(1),t.Q6J("ngIf","image"===a.type),t.xp6(1),t.Q6J("ngIf","button"===a.type)}}function rt(e,r){1&e&&t._UZ(0,"tr",30)}function ct(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"tr",31),t.NdJ("click",function(){const c=t.CHM(a).$implicit,s=t.oxw();return t.KtG(s.openContact.emit(c.c_Numero_Factura))}),t.qZA()}2&e&&t.Q6J("@fadeInUp",void 0)}function lt(e,r){1&e&&(t.TgZ(0,"div",32),t._UZ(1,"img",33),t.TgZ(2,"h2",34),t._uU(3,"No contacts matching your filters"),t.qZA()()),2&e&&t.Q6J("@scaleFadeIn",void 0)}let st=(()=>{class e{constructor(){this.pageSize=15,this.pageSizeOptions=[15,20,50,100,150],this.toggleStar=new t.vpe,this.openContact=new t.vpe,this.dataSource=new l.by}ngOnInit(){}ngOnChanges(a){a.columns&&(this.visibleColumns=this.columns.map(n=>n.property)),a.data&&(this.dataSource.data=this.data),a.searchStr&&(this.dataSource.filter=(this.searchStr||"").trim().toLowerCase())}emitToggleStar(a,n){a.stopPropagation(),this.toggleStar.emit(n)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["vex-contacts-data-table"]],viewQuery:function(n,i){if(1&n&&(t.Gf(C.NW,7),t.Gf(g.YE,7)),2&n){let c;t.iGM(c=t.CRH())&&(i.paginator=c.first),t.iGM(c=t.CRH())&&(i.sort=c.first)}},inputs:{data:"data",columns:"columns",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",searchStr:"searchStr"},outputs:{toggleStar:"toggleStar",openContact:"openContact"},features:[t._Bn([{provide:$.o2,useValue:{appearance:"fill"}}]),t.TTD],decls:18,vars:11,consts:[[1,"h-full","relative"],[1,"flex","flex-col","justify-between"],["mat-table","","matSort","",1,"w-full","flex-auto",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","hover:bg-hover cursor-pointer","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],[1,"sticky","bottom-0","left-0","right-0","border-t","flex-none",3,"pageSize","pageSizeOptions"],["xPosition","before","yPosition","below"],["contactMenu","matMenu"],["mat-menu-item",""],["svgIcon","mat:edit"],["svgIcon","mat:delete_forever"],[3,"matColumnDef",4,"ngIf"],["class","flex flex-col sm:flex-row sm:gap-4",3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","truncate-text","mat-cell","",3,"ngClass",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"truncate-text",3,"ngClass"],["mat-cell","",3,"ngClass",4,"matCellDef"],["mat-cell","",3,"ngClass"],[3,"checked","click"],[1,"flex","flex-col","sm:flex-row","sm:gap-4",3,"matColumnDef"],[1,"avatar","h-18","w-18","align-middle","my-2",3,"src"],[4,"ngIf"],["class","w-10","mat-cell","",3,"ngClass",4,"matCellDef"],["mat-cell","",1,"w-10",3,"ngClass"],["mat-icon-button","","type","button",3,"matMenuTriggerFor","click"],["svgIcon","mat:more_vert"],["mat-header-row",""],["mat-row","",1,"hover:bg-hover","cursor-pointer",3,"click"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(n,i){1&n&&(t.TgZ(0,"vex-scrollbar",0)(1,"div",1)(2,"table",2),t.YNc(3,it,5,4,"ng-container",3),t.YNc(4,rt,1,0,"tr",4),t.YNc(5,ct,1,1,"tr",5),t.qZA(),t.YNc(6,lt,4,1,"div",6),t._UZ(7,"mat-paginator",7),t.qZA()(),t.TgZ(8,"mat-menu",8,9)(10,"button",10),t._UZ(11,"mat-icon",11),t.TgZ(12,"span"),t._uU(13,"Edit Contact"),t.qZA()(),t.TgZ(14,"button",10),t._UZ(15,"mat-icon",12),t.TgZ(16,"span"),t._uU(17,"Delete Contact"),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("@stagger",i.dataSource.filteredData)("dataSource",i.dataSource),t.xp6(1),t.Q6J("ngForOf",i.columns),t.xp6(1),t.Q6J("matHeaderRowDef",i.visibleColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",i.visibleColumns),t.xp6(1),t.Q6J("ngIf",0===i.dataSource.filteredData.length),t.xp6(1),t.ekj("hidden",0===i.dataSource.filteredData.length),t.Q6J("pageSize",i.pageSize)("pageSizeOptions",i.pageSizeOptions))},dependencies:[p.mk,p.sg,p.O5,S.RK,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,C.NW,g.YE,g.nU,Z.oG,v.Hw,d.VK,d.OP,d.p6,M.x],data:{animation:[_.v$,j.$,P.f]}})}return e})();var mt=o(71996);let pt=(()=>{class e{constructor(a,n,i,c){this.CrearUsuariosService=a,this.em=n,this.router=i,this.renderer=c,this.Producto=[],this.items=[{type:"link",id:"Activo",icon:"mat:label",label:"Facturas Activas",classes:{icon:"text-green"}},{type:"link",id:"Inactivo",icon:"mat:label",label:"Facturas Inactivas",classes:{icon:"text-gray"}}],this.filterChange=new t.vpe,this.openAddNew=new t.vpe,this.activeCategory="all",this.tablaDataSubject=new D.X([]),this.tablaData$=this.tablaDataSubject.asObservable()}ngOnInit(){}setFilter(a){this.activeCategory=a}isActive(a){return this.activeCategory===a}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(mt.x),t.Y36(x),t.Y36(u.F0),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["vex-contacts-table-menu"]],inputs:{items:"items"},outputs:{filterChange:"filterChange",openAddNew:"openAddNew"},decls:3,vars:1,consts:[[1,"max-w-3xs","w-full"],[1,"h-14","mb-6","flex","px-gutter","sm:px-0","flex","items-center"],[2,"margin-left","1.3rem"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"div",1)(2,"div",2),t.qZA()),2&n&&t.Q6J("@stagger",void 0)},encapsulation:2,data:{animation:[T.G,_.KF]}})}return e})();var f=o(32651),ut=o(498),gt=o(98525),dt=o(82599);let ft=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({imports:[p.ez,O,ut.ComponentsSlideToggleModule,S.ot,l.p0,C.TU,g.JX,Z.p9,v.Ps,d.Tx,R.si,y.Is,I.Y,m.UX,f.SJ,F.ZX,dt.rP,R.XK,gt.LD]})}return e})();t.B6R(x,[v.Hw,m.Fj,m.JJ,m.oH,f.jA,f.kh,f.LW,st,pt],[p.Ov])}}]);