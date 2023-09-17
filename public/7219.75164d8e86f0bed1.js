"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[7219],{7219:(S,d,r)=>{r.r(d),r.d(d,{PersonaGridModule:()=>Q});var l=r(6814),m=r(9522),v=r(3594),Z=r(2008),j=r(5982),k=r(8734),h=r(1374),T=r(6820),_=r(3951),A=r(2852),y=r(7398),e=r(5879),b=r(9347),P=r(5250);function I(a,o){if(1&a&&(e.TgZ(0,"a",22,23),e._uU(2),e.qZA()),2&a){const t=o.$implicit,n=e.MAs(1);e.Q6J("active",n.isActive)("disabled",t.disabled)("routerLink",t.route),e.xp6(2),e.hij(" ",t.label," ")}}function z(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"vex-contacts-card",27),e.NdJ("OpenContact",function(s){e.CHM(t);const i=e.oxw(2);return e.KtG(i.OpenContact(s))})("toggleStar",function(s){e.CHM(t);const i=e.oxw(2);return e.KtG(i.toggleStar(s))}),e.qZA()}2&a&&e.Q6J("@fadeInUp",void 0)}function M(a,o){if(1&a&&(e.TgZ(0,"div",24)(1,"div",25),e.YNc(2,z,1,1,"vex-contacts-card",26),e.ALo(3,"async"),e.qZA()()),2&a){const t=e.oxw();e.Q6J("@stagger",void 0),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,3,t.filteredContacts$))("ngForTrackBy",t.trackById)}}function G(a,o){1&a&&(e.TgZ(0,"div",28),e._UZ(1,"img",29),e.TgZ(2,"h2",30),e._uU(3,"No contacts matching your filters"),e.qZA()()),2&a&&e.Q6J("@scaleFadeIn",void 0)}function U(a,o){return o.c_Id_Persona}let p=(()=>{class a{constructor(t,n,s){this.dialog=t,this.route=n,this.CrearUsuariosService=s,this.estado=1,this.contacts=h.s,this.persona=[],this.tableData=[],this.activeCategory="all",this.filteredContacts$=this.route.paramMap.pipe((0,y.U)(i=>i.get("activeCategory")),(0,y.U)(i=>{switch(i){case"all":return this.tableData.filter(f=>1===f.c_Estado);case"frequent":return this.tableData.filter(f=>2===f.c_Estado);default:return[]}})),this.links=[{label:"Activos",route:"all"},{label:"Inactivos",route:"../frequent"}],this.trackById=U}ngOnInit(){this.obtenerTablaData()}obtenerTablaData(){this.CrearUsuariosService.getPersona("").subscribe(t=>{this.persona=t.response,this.tableData=this.persona})}OpenContact(t){this.dialog.open(k._,{data:t||null,width:"600px"})}toggleStar(t){const n=h.s.find(s=>s.id===t);n&&(n.starred=!n.starred)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(b.uw),e.Y36(m.gz),e.Y36(P.x))},a.\u0275cmp=e.Xpm({type:a,selectors:[["vex-contacts-grid"]],decls:27,vars:9,consts:[[1,"h-full","flex","flex-col"],[1,"p-6","pb-0","bg-foreground","shadow-b","flex-none","border-b","border-gray-200"],[1,"container","px-0"],[1,"display-1","font-bold","mt-0","mb-4","flex","items-center"],[1,"w-12","h-12","rounded-full","text-primary","ltr:mr-4","rtl:ml-4","flex","items-center","justify-center","bg-primary/10"],["svgIcon","mat:contacts"],[1,"block"],[1,"flex","items-center"],["mat-tab-nav-bar","",1,"border-0","flex-auto"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink",4,"ngFor","ngForOf"],["color","primary","mat-icon-button","","matTooltip","Search Contacts","type","button",1,"flex-none","hidden","sm:inline-block"],["svgIcon","mat:search"],["color","primary","mat-icon-button","","matTooltip","Export Contacts","type","button",1,"ltr:ml-1","rtl:mr-1","flex-none","hidden","sm:inline-block"],["svgIcon","mat:cloud_download"],["color","primary","mat-icon-button","","matTooltip","Filter Contacts","type","button",1,"ltr:ml-1","rtl:mr-1","flex-none"],["svgIcon","mat:filter_list"],["color","primary","mat-mini-fab","","matTooltip","Registrar Cliente o Proveedor","type","button",1,"ltr:ml-1","rtl:mr-1","flex-none","sm:hidden",3,"click"],["svgIcon","mat:person_add"],["color","primary","mat-flat-button","","type","button",1,"ltr:ml-4","rtl:mr-4","flex-none","hidden","sm:inline-block",3,"click"],["svgIcon","mat:add",1,"ltr:mr-2","rtl:ml-2","ltr:-ml-1","rtl:-mr-1","icon-sm"],["class","overflow-y-auto flex-auto",4,"ngIf"],["class","flex-auto flex flex-col items-center justify-center",4,"ngIf"],["mat-tab-link","","routerLinkActive","",3,"active","disabled","routerLink"],["rla","routerLinkActive"],[1,"overflow-y-auto","flex-auto"],[1,"p-gutter","grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","container"],[3,"OpenContact","toggleStar",4,"ngFor","ngForOf","ngForTrackBy"],[3,"OpenContact","toggleStar"],[1,"flex-auto","flex","flex-col","items-center","justify-center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"span",4),e._UZ(5,"mat-icon",5),e.qZA(),e.TgZ(6,"span",6),e._uU(7,"Clientes y Proveedores"),e.qZA()(),e.TgZ(8,"div",7)(9,"nav",8),e.YNc(10,I,3,4,"a",9),e.qZA(),e.TgZ(11,"button",10),e._UZ(12,"mat-icon",11),e.qZA(),e.TgZ(13,"button",12),e._UZ(14,"mat-icon",13),e.qZA(),e.TgZ(15,"button",14),e._UZ(16,"mat-icon",15),e.qZA(),e.TgZ(17,"button",16),e.NdJ("click",function(){return n.OpenContact()}),e._UZ(18,"mat-icon",17),e.qZA(),e.TgZ(19,"button",18),e.NdJ("click",function(){return n.OpenContact()}),e._UZ(20,"mat-icon",19),e.TgZ(21,"span"),e._uU(22,"Registrar Nuevo"),e.qZA()()()()(),e.YNc(23,M,4,5,"div",20),e.ALo(24,"async"),e.YNc(25,G,4,1,"div",21),e.ALo(26,"async"),e.qZA()),2&t&&(e.xp6(4),e.Q6J("@scaleIn",void 0),e.xp6(2),e.Q6J("@fadeInRight",void 0),e.xp6(4),e.Q6J("ngForOf",n.links),e.xp6(13),e.Q6J("ngIf",e.lcZ(24,5,n.filteredContacts$).length>0),e.xp6(2),e.Q6J("ngIf",0===e.lcZ(26,7,n.filteredContacts$).length))},data:{animation:[Z.a,j.G,T.KF,_.$,A.f]}}),a})();const O=[{path:"",redirectTo:"all",pathMatch:"full"},{path:":activeCategory",component:p,data:{scrollDisabled:!0,toolbarShadowEnabled:!1}}];let J=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.Bz.forChild(O),m.Bz,v.d8]}),a})();var u=r(4104),c=r(2296),B=r(6555),g=r(617),C=r(2596),x=r(3680);let F=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez,c.ot,g.Ps,x.si]}),a})();function w(a,o){1&a&&e._UZ(0,"mat-icon",15)}function N(a,o){1&a&&e._UZ(0,"mat-icon",16)}let R=(()=>{class a{constructor(t){this.pgc=t,this.tableData=[],this.OpenContact=new e.vpe,this.toggleStar=new e.vpe}ngOnInit(){console.log(this.pgc.contacts)}emitToggleStar(t,n){t.stopPropagation(),this.toggleStar.emit(n),console.log(n)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(p))},a.\u0275cmp=e.Xpm({type:a,selectors:[["vex-contacts-card"]],inputs:{contact:"contact"},outputs:{OpenContact:"OpenContact",toggleStar:"toggleStar"},decls:23,vars:6,consts:[[1,"card","overflow-hidden"],["matRipple","",1,"p-4","text-center","hover:bg-hover","trans-ease-out","cursor-pointer","relative",3,"click"],[1,"avatar","h-24","w-24","mx-auto",3,"src"],[1,"title","mb-1","mt-3"],[1,"body-2","text-secondary","flex","items-center","justify-center"],["svgIcon","mat:business",1,"ltr:mr-1","rtl:ml-1","icon-xs"],["svgIcon","mat:phone",1,"ltr:mr-1","rtl:ml-1","icon-xs"],["mat-icon-button","","type","button",1,"absolute","top-2","right-2",3,"click"],["class","text-amber","svgIcon","mat:star",4,"ngIf"],["svgIcon","mat:star_border",4,"ngIf"],[1,"bg-app-bar","p-2","flex","items-center","justify-around"],["mat-icon-button","","type","button",1,"text-secondary"],["svgIcon","mat:phone"],["svgIcon","mat:mail"],["svgIcon","mat:chat"],["svgIcon","mat:star",1,"text-amber"],["svgIcon","mat:star_border"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return n.OpenContact.emit(n.contact.c_Id_Persona)}),e._UZ(2,"img",2),e.TgZ(3,"h2",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"mat-icon",5),e.TgZ(7,"span"),e._uU(8),e.qZA()(),e.TgZ(9,"div",4),e._UZ(10,"mat-icon",6),e.TgZ(11,"span"),e._uU(12),e.qZA()(),e.TgZ(13,"button",7),e.NdJ("click",function(i){return n.emitToggleStar(i,null==n.contact?null:n.contact.c_Id_Persona)}),e.YNc(14,w,1,0,"mat-icon",8),e.YNc(15,N,1,0,"mat-icon",9),e.qZA()(),e.TgZ(16,"div",10)(17,"button",11),e._UZ(18,"mat-icon",12),e.qZA(),e.TgZ(19,"button",11),e._UZ(20,"mat-icon",13),e.qZA(),e.TgZ(21,"button",11),e._UZ(22,"mat-icon",14),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("src",null==n.contact?null:n.contact.c_Img_Base,e.LSH),e.xp6(2),e.Oqu(null==n.contact?null:n.contact.c_Primer_Nombre),e.xp6(4),e.Oqu(null==n.contact?null:n.contact.c_Sucursal),e.xp6(4),e.Oqu(null==n.contact?null:n.contact.c_Fecha_Creacion),e.xp6(2),e.Q6J("ngIf",null==n.contact?null:n.contact.c_Sucursal),e.xp6(1),e.Q6J("ngIf",!(null!=n.contact&&n.contact.c_Sucursal)))},dependencies:[l.O5,c.RK,g.Hw,x.wG]}),a})(),Q=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez,J,u.Nh,c.ot,b.Is,B.Y,g.Ps,C.AV,F]}),a})();e.B6R(p,[l.sg,l.O5,m.rH,m.Od,v.jG,u.BU,u.Nj,c.lW,c.RK,c.nh,g.Hw,C.gM,R],[l.Ov])},1374:(S,d,r)=>{r.d(d,{s:()=>l});const l=[{id:1086,imageSrc:"assets/img/avatars/1.jpg",name:"Guerrero Morales",phone:"+21 (988) 504-2559",company:"Supportal",email:"guerrero.morales@supportal.com",selected:!1,starred:!1},{id:2,imageSrc:"assets/img/avatars/2.jpg",name:"Robin Blackburn",phone:"+5 (911) 423-2538",company:"Polarax",email:"robin.blackburn@polarax.biz",selected:!1,starred:!1},{id:3,imageSrc:"assets/img/avatars/3.jpg",name:"Simone Gallegos",phone:"+2 (948) 573-3528",company:"Applidec",email:"simone.gallegos@applidec.org",selected:!1,starred:!0},{id:4,imageSrc:"assets/img/avatars/4.jpg",name:"Bonner Mcmillan",phone:"+13 (932) 426-2309",company:"Magneato",email:"bonner.mcmillan@magneato.io",selected:!1,starred:!1},{id:5,imageSrc:"assets/img/avatars/5.jpg",name:"Velasquez Spence",phone:"+31 (850) 492-2858",company:"Joviold",email:"velasquez.spence@joviold.co.uk",selected:!1,starred:!1},{id:6,imageSrc:"assets/img/avatars/6.jpg",name:"Orr Fernandez",phone:"+6 (843) 490-2487",company:"Accuprint",email:"orr.fernandez@accuprint.tv",selected:!1,starred:!1},{id:7,imageSrc:"assets/img/avatars/7.jpg",name:"Marcella Russo",phone:"+48 (836) 506-2890",company:"Paprikut",email:"marcella.russo@paprikut.name",selected:!1,starred:!0},{id:8,imageSrc:"assets/img/avatars/8.jpg",name:"Mccormick Ferguson",phone:"+8 (957) 553-2497",company:"Waab",email:"mccormick.ferguson@waab.info",selected:!1,starred:!1},{id:9,imageSrc:"assets/img/avatars/9.jpg",name:"Myrtle Walters",phone:"+29 (846) 562-3339",company:"Hinway",email:"myrtle.walters@hinway.me",selected:!1,starred:!1},{id:10,imageSrc:"assets/img/avatars/10.jpg",name:"Rachael Griffin",phone:"+26 (827) 437-3065",company:"Callflex",email:"rachael.griffin@callflex.net",selected:!1,starred:!1},{id:11,imageSrc:"assets/img/avatars/11.jpg",name:"Carney Emerson",phone:"+24 (821) 560-2716",company:"Motovate",email:"carney.emerson@motovate.ca",selected:!1,starred:!1},{id:12,imageSrc:"assets/img/avatars/12.jpg",name:"Katrina Cooke",phone:"+10 (904) 524-2485",company:"Quarex",email:"katrina.cooke@quarex.biz",selected:!1,starred:!0},{id:13,imageSrc:"assets/img/avatars/13.jpg",name:"Valdez Branch",phone:"+12 (941) 536-2874",company:"Uniworld",email:"valdez.branch@uniworld.com",selected:!1,starred:!1},{id:14,imageSrc:"assets/img/avatars/14.jpg",name:"Dejesus Rogers",phone:"+40 (806) 435-2871",company:"Oronoko",email:"dejesus.rogers@oronoko.biz",selected:!1,starred:!1},{id:15,imageSrc:"assets/img/avatars/15.jpg",name:"Horton Levy",phone:"+19 (932) 552-3976",company:"Zensus",email:"horton.levy@zensus.org",selected:!1,starred:!1},{id:16,imageSrc:"assets/img/avatars/16.jpg",name:"Ivy Mays",phone:"+15 (919) 430-3795",company:"Letpro",email:"ivy.mays@letpro.io",selected:!1,starred:!1},{id:17,imageSrc:"assets/img/avatars/17.jpg",name:"Butler Larsen",phone:"+18 (862) 489-2364",company:"Micronaut",email:"butler.larsen@micronaut.co.uk",selected:!1,starred:!0},{id:18,imageSrc:"assets/img/avatars/18.jpg",name:"Jimmie Clements",phone:"+34 (946) 451-3718",company:"Sarasonic",email:"jimmie.clements@sarasonic.tv",selected:!1,starred:!0},{id:19,imageSrc:"assets/img/avatars/19.jpg",name:"Kasey Rosa",phone:"+44 (910) 404-3456",company:"Cytrak",email:"kasey.rosa@cytrak.name",selected:!1,starred:!1},{id:20,imageSrc:"assets/img/avatars/20.jpg",name:"Emily Schneider",phone:"+40 (870) 564-3250",company:"Noralex",email:"emily.schneider@noralex.info",selected:!1,starred:!1},{id:21,imageSrc:"assets/img/avatars/20.jpg",name:"Lara Witt",phone:"+29 (971) 550-3793",company:"Moltonic",email:"lara.witt@moltonic.me",selected:!1,starred:!0},{id:22,imageSrc:"assets/img/avatars/19.jpg",name:"Hebert Bailey",phone:"+4 (884) 527-3408",company:"Homelux",email:"hebert.bailey@homelux.net",selected:!1,starred:!0},{id:23,imageSrc:"assets/img/avatars/18.jpg",name:"Lynda Garza",phone:"+44 (872) 404-3519",company:"Quonk",email:"lynda.garza@quonk.ca",selected:!1,starred:!0},{id:24,imageSrc:"assets/img/avatars/17.jpg",name:"Stark Fitzgerald",phone:"+7 (999) 438-2471",company:"Farmage",email:"stark.fitzgerald@farmage.biz",selected:!1,starred:!0},{id:25,imageSrc:"assets/img/avatars/16.jpg",name:"Karla Atkins",phone:"+44 (869) 502-3263",company:"Kiggle",email:"karla.atkins@kiggle.com",selected:!1,starred:!1},{id:26,imageSrc:"assets/img/avatars/15.jpg",name:"Wilkerson Beasley",phone:"+29 (889) 462-3929",company:"Naxdis",email:"wilkerson.beasley@naxdis.biz",selected:!1,starred:!1},{id:27,imageSrc:"assets/img/avatars/14.jpg",name:"Webb Stark",phone:"+38 (864) 482-2108",company:"Equitax",email:"webb.stark@equitax.org",selected:!1,starred:!0},{id:28,imageSrc:"assets/img/avatars/13.jpg",name:"Courtney Barrett",phone:"+6 (828) 438-3288",company:"Magnemo",email:"courtney.barrett@magnemo.io",selected:!1,starred:!1},{id:29,imageSrc:"assets/img/avatars/12.jpg",name:"Joanne Anderson",phone:"+27 (994) 435-2952",company:"Extragene",email:"joanne.anderson@extragene.co.uk",selected:!1,starred:!1},{id:30,imageSrc:"assets/img/avatars/11.jpg",name:"Hampton Golden",phone:"+1 (967) 549-3561",company:"Accupharm",email:"hampton.golden@accupharm.tv",selected:!1,starred:!0},{id:31,imageSrc:"assets/img/avatars/10.jpg",name:"Becker Mejia",phone:"+16 (971) 587-3994",company:"Zillacom",email:"becker.mejia@zillacom.name",selected:!1,starred:!0},{id:32,imageSrc:"assets/img/avatars/9.jpg",name:"Marks Benton",phone:"+25 (961) 567-2085",company:"Emoltra",email:"marks.benton@emoltra.info",selected:!1,starred:!0},{id:33,imageSrc:"assets/img/avatars/8.jpg",name:"Mai Wade",phone:"+23 (970) 419-3433",company:"Senmao",email:"mai.wade@senmao.me",selected:!1,starred:!1},{id:34,imageSrc:"assets/img/avatars/7.jpg",name:"Maldonado Moran",phone:"+6 (912) 523-3028",company:"Autograte",email:"maldonado.moran@autograte.net",selected:!1,starred:!0},{id:35,imageSrc:"assets/img/avatars/6.jpg",name:"Jaclyn Maxwell",phone:"+39 (988) 424-2719",company:"Ecratic",email:"jaclyn.maxwell@ecratic.ca",selected:!1,starred:!1},{id:36,imageSrc:"assets/img/avatars/5.jpg",name:"Carmela Barron",phone:"+44 (932) 469-3459",company:"Xinware",email:"carmela.barron@xinware.biz",selected:!1,starred:!1},{id:37,imageSrc:"assets/img/avatars/4.jpg",name:"Araceli Velasquez",phone:"+43 (965) 579-3919",company:"Capscreen",email:"araceli.velasquez@capscreen.com",selected:!1,starred:!1},{id:38,imageSrc:"assets/img/avatars/3.jpg",name:"Gonzales Randolph",phone:"+23 (951) 574-3150",company:"Ronbert",email:"gonzales.randolph@ronbert.biz",selected:!1,starred:!0},{id:39,imageSrc:"assets/img/avatars/2.jpg",name:"Ramirez Burt",phone:"+24 (963) 484-3465",company:"Quizmo",email:"ramirez.burt@quizmo.org",selected:!1,starred:!1},{id:40,imageSrc:"assets/img/avatars/1.jpg",name:"Jessica Frenz",phone:"+49 (332) 45-4234",company:"Bongo",email:"jessica.frenz@bongo.com",selected:!1,starred:!1}]}}]);