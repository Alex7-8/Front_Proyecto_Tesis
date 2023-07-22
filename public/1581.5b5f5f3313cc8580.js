"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[1581],{3951:(k,f,s)=>{s.d(f,{$:()=>m});var u=s(6825);const m=function d(l){return(0,u.X$)("fadeInUp",[(0,u.eR)(":enter",[(0,u.oB)({transform:"translateY(20px)",opacity:0}),(0,u.jt)(`${l}ms cubic-bezier(0.35, 0, 0.25, 1)`,(0,u.oB)({transform:"translateY(0)",opacity:1}))])])}(400)},1581:(k,f,s)=>{s.r(f),s.d(f,{LoginModule:()=>$});var u=s(6814),d=s(9522),m=s(3594),l=s(6223),x=s(3951),t=s(5879),b=s(2939),U=s(553),S=s(9862);let A=(()=>{class e{constructor(o){this.http=o,this._url=`${U.N.API_URL}/LogIn/LogIn`}LogIn(o,n,a,r){return this.http.post(this._url,{c_Id_Usuario:o,c_Contrasenia:n,c_Direccion_IP:a,c_Id_Dispositivo:r})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(S.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function I(e){this.message=e}(I.prototype=new Error).name="InvalidCharacterError";var D=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(e){var i=String(e).replace(/=+$/,"");if(i.length%4==1)throw new I("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,n,a=0,r=0,c="";n=i.charAt(r++);~n&&(o=a%4?64*o+n:n,a++%4)?c+=String.fromCharCode(255&o>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return c};function p(e){this.message=e}(p.prototype=new Error).name="InvalidTokenError";let J=(()=>{class e{constructor(){this.dirIP="",this.uniqueID="",this.initData()}initData(){this.getLocalIPAddress(o=>{this.dirIP=o||""})}UniqueID(){this.generateBrowserFingerprint();let r=""+localStorage.getItem("token_dispositivo");if(r){const c=localStorage.getItem("token_dispositivo");c&&(r=this.decodeToken(c),this.uniqueID=r)}return-1===r.search("-")&&(r=this.generateUniqueID(),localStorage.setItem("uniqueID",r),this.uniqueID=r),r}getLocalIPAddress(o){fetch("https://api.ipify.org?format=json").then(n=>n.json()).then(n=>o(n.ip)).catch(n=>{console.error("Error al obtener la IP local:",n),o(void 0)})}generateBrowserFingerprint(){return[navigator.userAgent,screen.width,screen.height,screen.colorDepth].join("|")}generateUniqueID(){return`${screen.width}-${screen.height}-${screen.colorDepth}`}decodeToken(o){try{return function q(e,i){if("string"!=typeof e)throw new p("Invalid token specified");var o=!0===(i=i||{}).header?0:1;try{return JSON.parse(function C(e){var i=e.replace(/-/g,"+").replace(/_/g,"/");switch(i.length%4){case 0:break;case 2:i+="==";break;case 3:i+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(D(i).replace(/(.)/g,function(n,a){var r=a.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}catch{return D(i)}}(e.split(".")[o]))}catch(n){throw new p("Invalid token specified: "+n.message)}}(o).IdDispositivo}catch(n){return console.error("Error al decodificar el token:",n),""}}getDirIP(){return this.dirIP}getUniqueID(){return this.uniqueID=this.UniqueID(),this.uniqueID}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=s(4516),g=s(1043),L=s(617),T=s(2596),y=s(2296),w=s(5986);function M(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"We need an email address to log you in"),t.qZA())}function E(e,i){1&e&&t._UZ(0,"mat-icon",23)}function P(e,i){1&e&&t._UZ(0,"mat-icon",24)}function N(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"We need a password to log you in"),t.qZA())}const Y=function(){return["/forgot-password"]},F=function(){return["/register"]},Q=[{path:"",component:(()=>{class e{constructor(o,n,a,r,c){this.router=o,this.fb=n,this.snackbar=a,this.loginService=r,this.datosService=c,this.inputType="password",this.visible=!1}ngOnInit(){this.form=this.fb.group({email:["",l.kI.required],password:["",l.kI.required]})}send(){const o=this.form.get("email").value,n=this.form.get("password").value,a=this.datosService.getDirIP(),r=this.datosService.getUniqueID();this.loginService.LogIn(o,n,a,r).subscribe(c=>{if(!0===c.ok){const h=c.transaccion_Mensaje,v=c.token||"";""!==v&&localStorage.setItem("token",v),this.snackbar.open(h,"OK",{duration:5e3}),this.router.navigate(["/"])}else{const h=c.token_Dispositivo||"";"0"!==h&&(localStorage.setItem("token_dispositivo",h),localStorage.removeItem("uniqueID")),this.snackbar.open(`Estado: ${c.transaccion_Estado}, Mensaje: ${c.transaccion_Mensaje}`,"OK",{duration:5e3})}},c=>{console.error(c)})}toggleVisibility(){this.visible?(this.inputType="password",this.visible=!1):(this.inputType="text",this.visible=!0)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.F0),t.Y36(l.QS),t.Y36(b.ux),t.Y36(A),t.Y36(J))},e.\u0275cmp=t.Xpm({type:e,selectors:[["vex-login"]],decls:39,vars:11,consts:[[1,"w-full","h-full","bg-pattern","flex","flex-col","items-center","justify-center"],[1,"card","overflow-hidden","w-full","max-w-md"],[1,"p-6","pb-0","flex","flex-col","items-center","justify-center"],[1,"fill-current","text-center"],["src","assets/img/demo/logo.svg",1,"w-16"],[1,"text-center","mt-4"],[1,"title","m-0"],[1,"body-2","text-secondary","m-0"],[1,"p-6","flex","flex-col","gap-4",3,"formGroup"],[1,"flex","flex-col"],[1,"flex-1"],["formControlName","email","matInput","","required",""],[4,"ngIf"],["formControlName","password","matInput","","required","",3,"type"],["mat-icon-button","","matSuffix","","matTooltip","Toggle Visibility","type","button",3,"click"],["svgIcon","mat:visibility",4,"ngIf"],["svgIcon","mat:visibility_off",4,"ngIf"],[1,"flex","items-center","justify-between"],["color","primary",1,"caption"],[1,"caption",3,"routerLink"],["color","primary","mat-raised-button","","type","button",3,"click"],[1,"text-secondary","text-center"],[3,"routerLink"],["svgIcon","mat:visibility"],["svgIcon","mat:visibility_off"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"h2",6),t._uU(7,"Welcome back"),t.qZA(),t.TgZ(8,"h4",7),t._uU(9,"Sign in with your credentials below."),t.qZA()(),t.TgZ(10,"div",8)(11,"div",9)(12,"mat-form-field",10)(13,"mat-label"),t._uU(14,"E-Mail"),t.qZA(),t._UZ(15,"input",11),t.YNc(16,M,2,0,"mat-error",12),t.qZA(),t.TgZ(17,"mat-form-field",10)(18,"mat-label"),t._uU(19,"Password"),t.qZA(),t._UZ(20,"input",13),t.TgZ(21,"button",14),t.NdJ("click",function(){return n.toggleVisibility()}),t.YNc(22,E,1,0,"mat-icon",15),t.YNc(23,P,1,0,"mat-icon",16),t.qZA(),t.TgZ(24,"mat-hint"),t._uU(25,"Click the eye to toggle visibility"),t.qZA(),t.YNc(26,N,2,0,"mat-error",12),t.qZA()(),t.TgZ(27,"div",17)(28,"mat-checkbox",18),t._uU(29,"Remember Me"),t.qZA(),t.TgZ(30,"a",19),t._uU(31,"Forgot Password?"),t.qZA()(),t.TgZ(32,"button",20),t.NdJ("click",function(){return n.send()}),t._uU(33," SIGN IN "),t.qZA(),t.TgZ(34,"p",21),t._uU(35," Don't have an account?"),t._UZ(36,"br"),t.TgZ(37,"a",22),t._uU(38,"Click here to create one"),t.qZA()()()()()),2&o&&(t.xp6(1),t.Q6J("@fadeInUp",void 0),t.xp6(9),t.Q6J("formGroup",n.form),t.xp6(6),t.Q6J("ngIf",n.form.get("email").hasError("required")),t.xp6(4),t.Q6J("type",n.inputType),t.xp6(2),t.Q6J("ngIf",n.visible),t.xp6(1),t.Q6J("ngIf",!n.visible),t.xp6(3),t.Q6J("ngIf",n.form.get("password").hasError("required")),t.xp6(4),t.Q6J("routerLink",t.DdM(9,Y)),t.xp6(7),t.Q6J("routerLink",t.DdM(10,F)))},dependencies:[u.O5,d.rH,m.jG,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,Z.Nt,g.KE,g.hX,g.bx,g.TO,g.R9,L.Hw,T.gM,y.lW,y.RK,w.oG],data:{animation:[x.$]},changeDetection:0}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(Q),d.Bz,m.d8]}),e})(),$=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,R,l.UX,Z.c,L.Ps,b.ZX,T.AV,y.ot,w.p9]}),e})()}}]);