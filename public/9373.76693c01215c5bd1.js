"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[9373],{69373:(F,f,n)=>{n.r(f),n.d(f,{ValidarModule:()=>C});var h=n(96814),u=n(29522),x=n(33594),y=n(83951),V=n(96726),t=n(65879),g=n(22939),p=n(69862),Z=n(58504),b=n(26306),U=n(20553);let k=(()=>{class o{constructor(e){this.http=e,this._url=`${U.N.API_URL}/LogIn/`}Validar(e,r,a){const i={c_Id_Usuario:e,c_Id_Dispositivo:r},c=new p.WM({"Content-Type":"application/json",Authorization:`Bearer ${a}`});return this.http.post(this._url+"SetActivarDispositivo",JSON.stringify(i),{headers:c}).pipe((0,b.K)(m=>(console.error(m),(0,Z._)({ok:!1,estado:"20",mensaje:"El link ya no es v\xe1lido"}))))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(p.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=n(32296);const A=[{path:"",component:(()=>{class o{constructor(e,r,a){this.router=e,this.snackbar=r,this.ValidarService=a,this.Id_Usuario="",this.uniqueID="",this.token=""}ngOnInit(){}send(){const e=window.location.href,r=e.indexOf("#");if(-1!==r){const a=e.substring(r+1),i="token=",c=a.indexOf(i);if(-1!==c){const m=a.substring(c+i.length),d=decodeURIComponent(m);this.token=d;const l=(0,V.Z)(d);this.Id_Usuario=l.IdUsuario,this.uniqueID=l.IdDispositivo}window.location.href=e}this.ValidarService.Validar(this.Id_Usuario,this.uniqueID,this.token).subscribe(a=>{this.snackbar.open(!0===a.ok?a.transaccion_Mensaje:"Error: 20, Mensaje: El link ya no es v\xe1lido","OK",{duration:5e3})},a=>{this.snackbar.open("Error: 20, Mensaje: El link ya no es v\xe1lido","OK",{duration:5e3})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.F0),t.Y36(g.ux),t.Y36(k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["vex-coming-soon"]],decls:21,vars:1,consts:[[1,"card","shadow-xl","text-center","max-w-lg","overflow-hidden","p-6","my-4","bg-gradient-to-br","from-blue-200","to-indigo-600","rounded-lg"],[1,"flex","flex-col","items-center"],["src","assets/img/demo/logo.svg",1,"w-16"],[1,"text-2xl","md:text-4xl","font-bold","mt-4"],[1,"text-lg","md:text-xl","font-medium","text-gray-200","mt-2","text-justify"],[1,"bg-app-bar","p-6","rounded-lg"],[1,"list-disc","list-inside","mt-2","text-gray-500","text-left"],[1,"mb-2"],["color","primary","mat-raised-button","","type","button",1,"mt-4","py-2","px-6","bg-blue-500","hover:bg-blue-600","text-white","rounded-md","shadow-lg","focus:outline-none","focus:ring-2","focus:ring-blue-400",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"h2",3),t._uU(4,"\xa1Activa tu Dispositivo de Forma Segura!"),t.qZA(),t.TgZ(5,"h3",4),t._uU(6,"Para garantizar la seguridad de tus credenciales te recomendamos lo siguiente:"),t.qZA(),t.TgZ(7,"div",5)(8,"ul",6)(9,"li",7),t._uU(10,"No compartir tus credenciales con nadie, ni siquiera con personal de soporte."),t.qZA(),t.TgZ(11,"li",7),t._uU(12,"No proporcionar tus correos electr\xf3nicos o contrase\xf1as por correo, mensajes de texto o llamadas telef\xf3nicas no solicitadas."),t.qZA(),t.TgZ(13,"li",7),t._uU(14,"Usar solamente dispositivos de confianza y evitar el uso de dispositivos p\xfablicos o compartidos."),t.qZA(),t.TgZ(15,"li",7),t._uU(16,"Utilizar contrase\xf1as seguras, combinando letras, n\xfameros y caracteres especiales, y cambiarlas regularmente."),t.qZA(),t.TgZ(17,"li",7),t._uU(18,"Revisar regularmente la actividad de tu cuenta y notificar cualquier actividad sospechosa."),t.qZA()(),t.TgZ(19,"button",8),t.NdJ("click",function(){return r.send()}),t._uU(20,"Click aqu\xed para activar dispositivo"),t.qZA()()()()),2&e&&t.Q6J("@fadeInUp",void 0)},dependencies:[v.lW],styles:["[_nghost-%COMP%]{align-content:center;align-items:center;background:#fff url(/assets/img/demo/landscape.jpg);background-size:cover;display:flex;flex-direction:column;height:100%;justify-content:center;justify-items:center;width:100%}"],data:{animation:[y.$]}}),o})()}];let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(A),u.Bz,x.d8]}),o})();var I=n(24516),T=n(30617);let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.ez,j,g.ZX,v.ot,I.c,T.Ps]}),o})()}}]);