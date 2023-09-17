"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[5759],{5759:(vt,v,i)=>{i.r(v),i.d(v,{PersonaTableModule:()=>Tt});var l=i(6814),y=i(9522),N=i(3594),t=i(5879),Q=i(2008),P=i(5982),m=i(6223),U=i(3620),h=i(6820),M=i(8734),w=i(5619),k=i(6726),O=i(4005),D=i(9347),Z=i(5250),S=i(2939);let C=(()=>{class n{constructor(e,a,s){this.dialog=e,this.CrearUsuariosService=a,this.snackBar=s,this.tablaDataSubject=new w.X([]),this.tablaData$=this.tablaDataSubject.asObservable(),this.searchCtrl=new m.p4,this.searchStr$=this.searchCtrl.valueChanges.pipe((0,U.b)(10)),this.estado=1,this.Color=["font-medium"],this.persona=[],this.menuOpen=!1,this.activeCategory="Activo",this.tableData=this.persona,this.tableColumns=[{label:"",property:"c_Img_Base",type:"image",cssClasses:["h-9 rounded-full"]},{label:"Nombre",property:"c_Primer_Nombre",type:"text",cssClasses:["font-medium"]},{label:"Sucursal",property:"c_Sucursal",type:"text",cssClasses:["font-medium"]},{label:"Departamento",property:"c_Departamento",type:"text",cssClasses:["font-medium"]},{label:"Municipio",property:"c_Municipio",type:"text",cssClasses:["font-medium"]},{label:"Usuario que lo creo",property:"c_Usuario_Creacion",type:"text",cssClasses:["font-medium"]},{label:"Usuario que lo modifico",property:"c_Usuario_Modificacion",type:"text",cssClasses:["font-medium"]},{label:"Fecha de creacion",property:"c_Fecha_Creacion",type:"text",cssClasses:["font-medium"]},{label:"Fecha de modificacion",property:"c_Fecha_Modificacion",type:"text",cssClasses:["font-medium"]},{label:"Tipo",property:"c_Tipo",type:"text",cssClasses:this.Color},{label:"Cambiar Estado",property:"starred",type:"button",cssClasses:["text-secondary w-10"]}],this.filterChange=new t.vpe,this.openAddNew=new t.vpe,this.items=[{type:"link",id:"Activo",icon:"mat:label",label:"Activos",classes:{icon:"text-green"}},{type:"link",id:"Inactivo",icon:"mat:label",label:"Inactivos",classes:{icon:"text-gray"}}]}ngOnInit(){this.obtenerTablaData()}setFilter(e){this.activeCategory=e,"Activo"===e&&(this.Color=["text-green"],this.tableData=this.persona.filter(a=>1===a.c_Estado),this.Color=["text-green"]),"Inactivo"===e&&(this.tableData=this.persona.filter(a=>2===a.c_Estado),this.Color=["text-red"])}isActive(e){return this.activeCategory===e}obtenerTablaData(){this.CrearUsuariosService.getPersona("").subscribe(e=>{this.persona=e.response,this.tableData=this.persona.filter(a=>a.c_Estado===this.estado)})}openContact(e){this.dialog.open(M._,{data:e||null,width:"70rem"})}toggleStar(e){const a=this.persona.find(b=>b.c_Id_Persona===e),s=localStorage.getItem("token"),p=(0,k.Z)(s).IdUsuario;this.c_Id_UsuarioModificacion=p,"PROVEEDOR"==a.c_Tipo&&(this.tipo="Proveedor"),"CLIENTE"==a.c_Tipo&&(this.tipo="Cliente"),"Activo"==this.activeCategory?(this.titulo="\xbfEst\xe1s seguro que deseas desactivar el "+this.tipo+"?",this.estado=1):(this.titulo="\xbfEst\xe1s seguro de que deseas activar el  "+this.tipo+"?",this.estado=2),console.log(this.titulo,this.activeCategory),this.dialog.open(O.$,{height:"15rem",width:"25rem",data:{title:this.titulo}}).afterClosed().subscribe(b=>{b&&this.CrearUsuariosService.CambiarEstadoPersona(e,this.c_Id_UsuarioModificacion).subscribe(T=>{console.log(T),T.ok?(this.snackBar.open(T.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]}),this.obtenerTablaData()):this.snackBar.open("No se ha cambiado el estado del empleado","Cerrar",{duration:4e3,panelClass:["red-snackbar"]})})})}setData(e){this.tableData=e,this.menuOpen=!1}openMenu(){this.menuOpen=!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(D.uw),t.Y36(Z.x),t.Y36(S.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["vex-contacts-table"]],inputs:{items:"items"},outputs:{filterChange:"filterChange",openAddNew:"openAddNew"},decls:23,vars:10,consts:[[1,"w-full","h-full","flex","flex-col"],[1,"px-gutter","pt-6","pb-20","bg-primary/10","flex-none"],[1,"flex","items-center","container","px-0"],["mat-icon-button","","type","button",1,"sm:hidden","text-primary-contrast",3,"click"],["svgIcon","mat:menu"],[1,"display-1","font-bold","m-0","flex","items-center","w-full","max-w-3xs","mr-6"],[1,"w-12","h-12","rounded-full","text-primary","ltr:mr-4","rtl:ml-4","bg-primary/10","hidden","sm:flex","items-center","justify-center"],["svgIcon","mat:contacts"],[1,"block"],[1,"hidden","sm:flex","items-center","bg-foreground","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-xl","mx-auto"],["svgIcon","mat:search",1,"text-secondary","flex-none"],["placeholder","Buscar...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-foreground","flex-auto",3,"formControl"],[1,"flex","flex-col","overflow-hidden","sm:flex-row","sm:gap-4"],[1,"bg-transparent","flex-auto","flex"],["mode","over",3,"opened","openedChange"],[1,"sm:hidden",3,"openAddNew"],[1,"p-gutter","pt-0","flex-auto","flex","items-start"],[1,"hidden","sm:block","ltr:mr-6","rtl:ml-6"],[3,"filterChange","openAddNew"],[1,"card","h-full","overflow-hidden","flex-auto"],[3,"columns","data","searchStr","openContact","toggleStar"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){return a.openMenu()}),t._UZ(4,"mat-icon",4),t.qZA(),t.TgZ(5,"h2",5)(6,"span",6),t._UZ(7,"mat-icon",7),t.qZA(),t.TgZ(8,"span",8),t._uU(9,"Clientes y Proveedores"),t.qZA()(),t.TgZ(10,"div",9),t._UZ(11,"mat-icon",10)(12,"input",11),t.qZA()()(),t.TgZ(13,"div",12)(14,"mat-drawer-container",13)(15,"mat-drawer",14),t.NdJ("openedChange",function(r){return a.menuOpen=r}),t.TgZ(16,"vex-contacts-table-menu",15),t.NdJ("openAddNew",function(){return a.openContact()}),t.qZA()(),t.TgZ(17,"mat-drawer-content",16)(18,"div",17)(19,"vex-contacts-table-menu",18),t.NdJ("filterChange",function(r){return a.setData(r)})("openAddNew",function(){return a.openContact()}),t.qZA()(),t.TgZ(20,"div",19)(21,"vex-contacts-data-table",20),t.NdJ("openContact",function(r){return a.openContact(r)})("toggleStar",function(r){return a.toggleStar(r)}),t.ALo(22,"async"),t.qZA()()()()()()),2&e&&(t.xp6(3),t.Q6J("@scaleIn",void 0),t.xp6(3),t.Q6J("@scaleIn",void 0),t.xp6(2),t.Q6J("@fadeInRight",void 0),t.xp6(4),t.Q6J("formControl",a.searchCtrl),t.xp6(3),t.Q6J("opened",a.menuOpen),t.xp6(6),t.Q6J("columns",a.tableColumns)("data",a.tableData)("searchStr",t.lcZ(22,8,a.searchStr$)))},styles:['@charset "UTF-8";table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;border:1px solid #ccc;text-align:left}.cell[_ngcontent-%COMP%]{cursor:pointer;padding:8px;background-color:#f2f2f2}.cell[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}',".mat-drawer-container[_ngcontent-%COMP%]{background:transparent!important}"],data:{animation:[h.KF,Q.a,P.G]}}),n})();const Y=[{path:"",component:C,data:{scrollDisabled:!0,toolbarShadowEnabled:!0}}];let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[y.Bz.forChild(Y),y.Bz,N.d8]}),n})();var d=i(2296),c=i(5313),x=i(1476),u=i(3566),I=i(5986),_=i(617),g=i(7988),J=i(3680),F=i(5783),R=i(1043),j=i(3951),B=i(2852),E=i(400);function z(n,o){if(1&n&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}function H(n,o){if(1&n&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&n){const e=o.$implicit,a=t.oxw(2).$implicit;t.Q6J("ngClass",a.cssClasses),t.xp6(1),t.Oqu(e[a.property])}}function G(n,o){if(1&n&&(t.ynx(0,15),t.YNc(1,z,2,1,"th",16),t.YNc(2,H,2,2,"td",17),t.BQk()),2&n){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property)}}function K(n,o){if(1&n&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}const X=function(n){return["text-x1",n]};function V(n,o){if(1&n&&(t.TgZ(0,"td",19)(1,"mat-checkbox",20),t.NdJ("click",function(a){return a.stopPropagation()}),t.qZA()()),2&n){const e=o.$implicit,a=t.oxw(2).$implicit;t.Q6J("ngClass",t.VKq(2,X,a.cssClasses)),t.xp6(1),t.Q6J("checked",e[a.property])}}function q(n,o){if(1&n&&(t.ynx(0,15),t.YNc(1,K,2,1,"th",16),t.YNc(2,V,2,4,"td",17),t.BQk()),2&n){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property)}}function L(n,o){if(1&n&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}function W(n,o){if(1&n&&(t.TgZ(0,"td",19),t._UZ(1,"img",22),t.qZA()),2&n){const e=o.$implicit,a=t.oxw(2).$implicit;t.Q6J("ngClass",a.cssClasses),t.xp6(1),t.Q6J("src",e[a.property],t.LSH)}}function tt(n,o){if(1&n&&(t.ynx(0,21),t.YNc(1,L,2,1,"th",16),t.YNc(2,W,2,2,"td",17),t.BQk()),2&n){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property)}}function et(n,o){if(1&n&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&n){const e=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}function nt(n,o){1&n&&t._UZ(0,"mat-icon",29)}function at(n,o){1&n&&t._UZ(0,"mat-icon",30)}function ot(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",25)(1,"button",26),t.NdJ("click",function(s){const p=t.CHM(e).$implicit,A=t.oxw(4);return t.KtG(A.emitToggleStar(s,p.c_Id_Persona))}),t.YNc(2,nt,1,0,"mat-icon",27),t.YNc(3,at,1,0,"mat-icon",28),t.qZA()()}if(2&n){const e=o.$implicit,a=t.oxw(3).$implicit;t.Q6J("ngClass",a.cssClasses),t.xp6(2),t.Q6J("ngIf",e[a.property]),t.xp6(1),t.Q6J("ngIf",!e[a.property])}}function it(n,o){1&n&&(t.ynx(0),t.YNc(1,et,2,1,"th",16),t.YNc(2,ot,4,3,"td",24),t.BQk())}function st(n,o){if(1&n&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&n){const e=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",e.label,"")}}function rt(n,o){if(1&n&&(t.TgZ(0,"td",25)(1,"button",31),t.NdJ("click",function(a){return a.stopPropagation()}),t._UZ(2,"mat-icon",32),t.qZA()()),2&n){const e=t.oxw(3).$implicit;t.oxw();const a=t.MAs(9);t.Q6J("ngClass",e.cssClasses),t.xp6(1),t.Q6J("matMenuTriggerFor",a)}}function ct(n,o){1&n&&(t.ynx(0),t.YNc(1,st,2,1,"th",16),t.YNc(2,rt,3,2,"td",24),t.BQk())}function lt(n,o){if(1&n&&(t.ynx(0,15),t.YNc(1,it,3,0,"ng-container",23),t.YNc(2,ct,3,0,"ng-container",23),t.BQk()),2&n){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property),t.xp6(1),t.Q6J("ngIf","starred"===e.property),t.xp6(1),t.Q6J("ngIf","menu"===e.property)}}function mt(n,o){if(1&n&&(t.ynx(0),t.YNc(1,G,3,1,"ng-container",13),t.YNc(2,q,3,1,"ng-container",13),t.YNc(3,tt,3,1,"ng-container",14),t.YNc(4,lt,3,3,"ng-container",13),t.BQk()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf","text"===e.type),t.xp6(1),t.Q6J("ngIf","checkbox"===e.type),t.xp6(1),t.Q6J("ngIf","image"===e.type),t.xp6(1),t.Q6J("ngIf","button"===e.type)}}function pt(n,o){1&n&&t._UZ(0,"tr",33)}function dt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr",34),t.NdJ("click",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.openContact.emit(r.c_Id_Persona))}),t.qZA()}2&n&&t.Q6J("@fadeInUp",void 0)}function ut(n,o){1&n&&(t.TgZ(0,"div",35),t._UZ(1,"img",36),t.TgZ(2,"h2",37),t._uU(3,"No contacts matching your filters"),t.qZA()()),2&n&&t.Q6J("@scaleFadeIn",void 0)}let _t=(()=>{class n{constructor(){this.pageSize=15,this.pageSizeOptions=[15,20,50],this.toggleStar=new t.vpe,this.openContact=new t.vpe,this.dataSource=new c.by}ngOnInit(){}ngOnChanges(e){e.columns&&(this.visibleColumns=this.columns.map(a=>a.property)),e.data&&(this.dataSource.data=this.data),e.searchStr&&(this.dataSource.filter=(this.searchStr||"").trim().toLowerCase())}emitToggleStar(e,a){e.stopPropagation(),this.toggleStar.emit(a)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["vex-contacts-data-table"]],viewQuery:function(e,a){if(1&e&&(t.Gf(x.NW,7),t.Gf(u.YE,7)),2&e){let s;t.iGM(s=t.CRH())&&(a.paginator=s.first),t.iGM(s=t.CRH())&&(a.sort=s.first)}},inputs:{data:"data",columns:"columns",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",searchStr:"searchStr"},outputs:{toggleStar:"toggleStar",openContact:"openContact"},features:[t._Bn([{provide:R.o2,useValue:{appearance:"fill"}}]),t.TTD],decls:18,vars:11,consts:[[1,"h-full","relative"],[1,"flex","flex-col","justify-between"],["mat-table","","matSort","",1,"w-full","flex-auto",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","hover:bg-hover cursor-pointer","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],[1,"sticky","bottom-0","left-0","right-0","border-t","flex-none",3,"pageSize","pageSizeOptions"],["xPosition","before","yPosition","below"],["contactMenu","matMenu"],["mat-menu-item",""],["svgIcon","mat:edit"],["svgIcon","mat:delete_forever"],[3,"matColumnDef",4,"ngIf"],["class","flex flex-col sm:flex-row sm:gap-4",3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"ngClass"],[3,"checked","click"],[1,"flex","flex-col","sm:flex-row","sm:gap-4",3,"matColumnDef"],[1,"avatar","h-18","w-18","align-middle","my-2",3,"src"],[4,"ngIf"],["class","w-10","mat-cell","",3,"ngClass",4,"matCellDef"],["mat-cell","",1,"w-10",3,"ngClass"],["mat-icon-button","","type","button",3,"click"],["class","text-amber","svgIcon","mat:remove_circle",4,"ngIf"],["svgIcon","mat:remove_circle_outline",4,"ngIf"],["svgIcon","mat:remove_circle",1,"text-amber"],["svgIcon","mat:remove_circle_outline"],["mat-icon-button","","type","button",3,"matMenuTriggerFor","click"],["svgIcon","mat:more_vert"],["mat-header-row",""],["mat-row","",1,"hover:bg-hover","cursor-pointer",3,"click"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(e,a){1&e&&(t.TgZ(0,"vex-scrollbar",0)(1,"div",1)(2,"table",2),t.YNc(3,mt,5,4,"ng-container",3),t.YNc(4,pt,1,0,"tr",4),t.YNc(5,dt,1,1,"tr",5),t.qZA(),t.YNc(6,ut,4,1,"div",6),t._UZ(7,"mat-paginator",7),t.qZA()(),t.TgZ(8,"mat-menu",8,9)(10,"button",10),t._UZ(11,"mat-icon",11),t.TgZ(12,"span"),t._uU(13,"Edit Contact"),t.qZA()(),t.TgZ(14,"button",10),t._UZ(15,"mat-icon",12),t.TgZ(16,"span"),t._uU(17,"Delete Contact"),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("@stagger",a.dataSource.filteredData)("dataSource",a.dataSource),t.xp6(1),t.Q6J("ngForOf",a.columns),t.xp6(1),t.Q6J("matHeaderRowDef",a.visibleColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",a.visibleColumns),t.xp6(1),t.Q6J("ngIf",0===a.dataSource.filteredData.length),t.xp6(1),t.ekj("hidden",0===a.dataSource.filteredData.length),t.Q6J("pageSize",a.pageSize)("pageSizeOptions",a.pageSizeOptions))},dependencies:[l.mk,l.sg,l.O5,d.RK,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,x.NW,u.YE,u.nU,I.oG,_.Hw,g.VK,g.OP,g.p6,E.x],data:{animation:[h.v$,j.$,B.f]}}),n})();var gt=i(6555);const ft=function(n){return{"bg-primary/10 text-primary":n}};function ht(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,r=t.oxw();return t.KtG(r.setFilter(s.id))}),t._UZ(1,"mat-icon",9),t.TgZ(2,"span"),t._uU(3),t.qZA()()}if(2&n){const e=t.oxw().$implicit,a=t.oxw();t.Q6J("@fadeInRight",void 0)("ngClass",t.VKq(5,ft,a.isActive(e.id))),t.xp6(1),t.Q6J("ngClass",null==e.classes?null:e.classes.icon)("svgIcon",e.icon),t.xp6(2),t.Oqu(e.label)}}function Ct(n,o){if(1&n&&(t.TgZ(0,"h3",10),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("@fadeInRight",void 0),t.xp6(1),t.Oqu(e.label)}}function xt(n,o){if(1&n&&(t.ynx(0),t.YNc(1,ht,4,7,"a",6),t.YNc(2,Ct,2,2,"h3",7),t.BQk()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf","link"===e.type),t.xp6(1),t.Q6J("ngIf","subheading"===e.type)}}let bt=(()=>{class n{constructor(e,a){this.CrearUsuariosService=e,this.PTC=a,this.empleado=[],this.items=[{type:"link",id:"Activo",icon:"mat:label",label:"Activos",classes:{icon:"text-green"}},{type:"link",id:"Inactivo",icon:"mat:label",label:"Inactivos",classes:{icon:"text-gray"}}],this.filterChange=new t.vpe,this.openAddNew=new t.vpe,this.activeCategory="all",this.tablaDataSubject=new w.X([]),this.tablaData$=this.tablaDataSubject.asObservable()}ngOnInit(){}setFilter(e){this.activeCategory=e,"Activo"===e&&(this.PTC.tableData=this.PTC.persona.filter(a=>1===a.c_Estado)),"Inactivo"===e&&(this.PTC.tableData=this.PTC.persona.filter(a=>2===a.c_Estado))}isActive(e){return this.activeCategory===e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z.x),t.Y36(C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["vex-contacts-table-menu"]],inputs:{items:"items"},outputs:{filterChange:"filterChange",openAddNew:"openAddNew"},decls:8,vars:2,consts:[[1,"max-w-3xs","w-full"],[1,"h-14","mb-6","flex","px-gutter","sm:px-0","flex","items-center"],["color","primary","mat-raised-button","","type","button",1,"flex-auto",3,"click"],["svgIcon","mat:add",1,"ltr:-ml-4","ltr:mr-2","rtl:ml-2","icon-sm"],[1,"px-gutter","sm:px-0"],[4,"ngFor","ngForOf"],["class","rounded h-10 px-4 cursor-pointer hover:bg-primary/10 mt-1 font-medium flex items-center transition duration-200 ease-out","matRipple","",3,"ngClass","click",4,"ngIf"],["class","caption text-secondary font-medium mb-0 mt-6",4,"ngIf"],["matRipple","",1,"rounded","h-10","px-4","cursor-pointer","hover:bg-primary/10","mt-1","font-medium","flex","items-center","transition","duration-200","ease-out",3,"ngClass","click"],[1,"ltr:mr-3","rtl:ml-3",3,"ngClass","svgIcon"],[1,"caption","text-secondary","font-medium","mb-0","mt-6"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return a.openAddNew.emit()}),t._UZ(3,"mat-icon",3),t.TgZ(4,"span"),t._uU(5,"Registrar Nuevo"),t.qZA()()(),t.TgZ(6,"div",4),t.YNc(7,xt,3,2,"ng-container",5),t.qZA()()),2&e&&(t.Q6J("@stagger",void 0),t.xp6(7),t.Q6J("ngForOf",a.items))},dependencies:[l.mk,l.sg,l.O5,d.lW,_.Hw,J.wG],encapsulation:2,data:{animation:[P.G,h.KF]}}),n})();var f=i(2651);let Tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,$,d.ot,c.p0,x.TU,u.JX,I.p9,_.Ps,g.Tx,J.si,D.Is,F.Y,gt.Y,m.UX,f.SJ,S.ZX]}),n})();t.B6R(C,[d.RK,_.Hw,m.Fj,m.JJ,m.oH,f.jA,f.kh,f.LW,_t,bt],[l.Ov])}}]);