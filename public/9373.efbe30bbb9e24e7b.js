"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[9373],{69373:(V,l,i)=>{i.r(l),i.d(l,{ValidarModule:()=>I});var h=i(96814),c=i(29522),g=i(33594),v=i(83951),p=i(96726),t=i(65879),d=i(22939),u=i(69862),f=i(58504),y=i(26306),x=i(20553);let U=(()=>{class e{constructor(n){this.http=n,this._url=`${x.N.API_URL}/LogIn/`}Validar(n,o,s){const r={c_Id_Usuario:n,c_Id_Dispositivo:o},a=new u.WM({"Content-Type":"application/json",Authorization:`Bearer ${s}`});return this.http.post(this._url+"SetActivarDispositivo",JSON.stringify(r),{headers:a}).pipe((0,y.K)(k=>(console.error(k),(0,f._)({ok:!1,estado:"20",mensaje:"El link ya no es v\xe1lido"}))))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(u.eN))};static#o=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var m=i(32296);const Z=[{path:"",component:(()=>{class e{constructor(n,o,s){this.router=n,this.snackbar=o,this.ValidarService=s,this.Id_Usuario="",this.uniqueID="",this.token=""}ngOnInit(){window;const s=new URLSearchParams(window.location.search).get("token");if(s){const r=decodeURIComponent(s),a=(0,p.Z)(r);a.IdUsuario&&a.IdDispositivo&&(this.Id_Usuario=a.IdUsuario,this.uniqueID=a.IdDispositivo,this.token=r)}}send(){this.ValidarService.Validar(this.Id_Usuario,this.uniqueID,this.token).subscribe(n=>{console.log(n),!0===n.ok?(this.snackbar.open(n.transaccion_Mensaje,"OK",{duration:5e3}),this.router.navigate(["/login"])):(this.snackbar.open("Error: 20, Mensaje: El link ya no es v\xe1lido","OK",{duration:5e3}),this.router.navigate(["/login"]))},n=>{this.snackbar.open("Error: 20, Mensaje: El link ya no es v\xe1lido","OK",{duration:5e3}),this.router.navigate(["/login"])})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(c.F0),t.Y36(d.ux),t.Y36(U))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["vex-coming-soon"]],decls:21,vars:1,consts:[[1,"card","shadow-xl","text-center","max-w-lg","overflow-hidden","p-6","my-4","bg-gradient-to-br","from-blue-200","to-indigo-600","rounded-lg"],[1,"flex","flex-col","items-center"],["src","assets/img/demo/logo.svg",1,"w-16"],[1,"text-2xl","md:text-4xl","font-bold","mt-4"],[1,"text-lg","md:text-xl","font-medium","text-gray-200","mt-2","text-justify"],[1,"bg-app-bar","p-6","rounded-lg"],[1,"list-disc","list-inside","mt-2","text-gray-500","text-left"],[1,"mb-2"],["color","primary","mat-raised-button","","type","button",1,"mt-4","py-2","px-6","bg-blue-500","hover:bg-blue-600","text-white","rounded-md","shadow-lg","focus:outline-none","focus:ring-2","focus:ring-blue-400",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"h2",3),t._uU(4,"\xa1Activa tu Dispositivo de Forma Segura!"),t.qZA(),t.TgZ(5,"h3",4),t._uU(6,"Para garantizar la seguridad de tus credenciales te recomendamos lo siguiente:"),t.qZA(),t.TgZ(7,"div",5)(8,"ul",6)(9,"li",7),t._uU(10,"No compartir tus credenciales con nadie, ni siquiera con personal de soporte."),t.qZA(),t.TgZ(11,"li",7),t._uU(12,"No proporcionar tus correos electr\xf3nicos o contrase\xf1as por correo, mensajes de texto o llamadas telef\xf3nicas no solicitadas."),t.qZA(),t.TgZ(13,"li",7),t._uU(14,"Usar solamente dispositivos de confianza y evitar el uso de dispositivos p\xfablicos o compartidos."),t.qZA(),t.TgZ(15,"li",7),t._uU(16,"Utilizar contrase\xf1as seguras, combinando letras, n\xfameros y caracteres especiales, y cambiarlas regularmente."),t.qZA(),t.TgZ(17,"li",7),t._uU(18,"Revisar regularmente la actividad de tu cuenta y notificar cualquier actividad sospechosa."),t.qZA()(),t.TgZ(19,"button",8),t.NdJ("click",function(){return s.send()}),t._uU(20,"Click aqu\xed para activar dispositivo"),t.qZA()()()()),2&o&&t.Q6J("@fadeInUp",void 0)},dependencies:[m.lW],styles:["[_nghost-%COMP%]{align-content:center;align-items:center;background:#fff url(/assets/img/demo/landscape.jpg);background-size:cover;display:flex;flex-direction:column;height:100%;justify-content:center;justify-items:center;width:100%}"],data:{animation:[v.$]}})}return e})()}];let b=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#o=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(Z),c.Bz,g.d8]})}return e})();var A=i(24516),j=i(30617);let I=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#o=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[h.ez,b,d.ZX,m.ot,A.c,j.Ps]})}return e})()}}]);