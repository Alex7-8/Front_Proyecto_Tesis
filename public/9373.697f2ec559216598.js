"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[9373],{69373:(F,d,n)=>{n.r(d),n.d(d,{ValidarModule:()=>j});var v=n(96814),l=n(29522),f=n(33594),y=n(83951),u=n(96726),t=n(65879),m=n(22939),h=n(69862),x=n(58504),k=n(26306),I=n(20553);let T=(()=>{class e{constructor(a){this.http=a,this._url=`${I.N.API_URL}/LogIn/`}Validar(a,o,s){const r={c_Id_Usuario:a,c_Id_Dispositivo:o},p=new h.WM({"Content-Type":"application/json",Authorization:`Bearer ${s}`});return this.http.post(this._url+"SetActivarDispositivo",JSON.stringify(r),{headers:p}).pipe((0,k.K)(c=>(console.error(c),(0,x._)({ok:!1,estado:"20",mensaje:"El link ya no es v\xe1lido"}))))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(h.eN))};static#o=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var g=n(32296);const U=[{path:"",component:(()=>{class e{constructor(a,o,s){this.router=a,this.snackbar=o,this.ValidarService=s,this.Id_Usuario="",this.uniqueID="",this.token=""}ngOnInit(){window;const s=new URLSearchParams(window.location.search).get("token");if(s){const r=decodeURIComponent(s);(0,u.Z)(r),localStorage.setItem("token_Temporal",r);const c=localStorage.getItem("token_Temporal"),i=(0,u.Z)(c);i.IdUsuario&&i.IdDispositivo&&(this.Id_Usuario=i.IdUsuario,this.uniqueID=i.IdDispositivo,this.token=c)}}send(){console.log(this.Id_Usuario,this.uniqueID,this.token),this.ValidarService.Validar(this.Id_Usuario,this.uniqueID,this.token).subscribe(a=>{console.log(a),!0===a.ok?(this.snackbar.open(a.transaccion_Mensaje,"OK",{duration:5e3}),this.router.navigate(["/login"]),localStorage.removeItem("token_Temporal")):(this.snackbar.open("Error: 20, Mensaje: El link ya no es v\xe1lido","OK",{duration:5e3}),this.router.navigate(["/login"]),localStorage.removeItem("token_Temporal"))},a=>{this.snackbar.open("Error: 20, Mensaje: El link ya no es v\xe1lido","OK",{duration:5e3}),this.router.navigate(["/login"]),localStorage.removeItem("token_Temporal")})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(l.F0),t.Y36(m.ux),t.Y36(T))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["vex-coming-soon"]],decls:21,vars:1,consts:[[1,"card","shadow-xl","text-center","max-w-lg","overflow-hidden","p-6","my-4","bg-gradient-to-br","from-blue-200","to-indigo-600","rounded-lg"],[1,"flex","flex-col","items-center"],["src","assets/img/demo/logo.svg",1,"w-16"],[1,"text-2xl","md:text-4xl","font-bold","mt-4"],[1,"text-lg","md:text-xl","font-medium","text-gray-200","mt-2","text-justify"],[1,"bg-app-bar","p-6","rounded-lg"],[1,"list-disc","list-inside","mt-2","text-gray-500","text-left"],[1,"mb-2"],["color","primary","mat-raised-button","","type","button",1,"mt-4","py-2","px-6","bg-blue-500","hover:bg-blue-600","text-white","rounded-md","shadow-lg","focus:outline-none","focus:ring-2","focus:ring-blue-400",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"h2",3),t._uU(4,"\xa1Activa tu Dispositivo de Forma Segura!"),t.qZA(),t.TgZ(5,"h3",4),t._uU(6,"Para garantizar la seguridad de tus credenciales te recomendamos lo siguiente:"),t.qZA(),t.TgZ(7,"div",5)(8,"ul",6)(9,"li",7),t._uU(10,"No compartir tus credenciales con nadie, ni siquiera con personal de soporte."),t.qZA(),t.TgZ(11,"li",7),t._uU(12,"No proporcionar tus correos electr\xf3nicos o contrase\xf1as por correo, mensajes de texto o llamadas telef\xf3nicas no solicitadas."),t.qZA(),t.TgZ(13,"li",7),t._uU(14,"Usar solamente dispositivos de confianza y evitar el uso de dispositivos p\xfablicos o compartidos."),t.qZA(),t.TgZ(15,"li",7),t._uU(16,"Utilizar contrase\xf1as seguras, combinando letras, n\xfameros y caracteres especiales, y cambiarlas regularmente."),t.qZA(),t.TgZ(17,"li",7),t._uU(18,"Revisar regularmente la actividad de tu cuenta y notificar cualquier actividad sospechosa."),t.qZA()(),t.TgZ(19,"button",8),t.NdJ("click",function(){return s.send()}),t._uU(20,"Click aqu\xed para activar dispositivo"),t.qZA()()()()),2&o&&t.Q6J("@fadeInUp",void 0)},dependencies:[g.lW],styles:["[_nghost-%COMP%]{align-content:center;align-items:center;background:#fff url(/assets/img/demo/landscape.jpg);background-size:cover;display:flex;flex-direction:column;height:100%;justify-content:center;justify-items:center;width:100%}"],data:{animation:[y.$]}})}return e})()}];let Z=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#o=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(U),l.Bz,f.d8]})}return e})();var b=n(24516),A=n(30617);let j=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#o=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[v.ez,Z,m.ZX,g.ot,b.c,A.Ps]})}return e})()}}]);