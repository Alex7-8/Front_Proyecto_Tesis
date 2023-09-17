"use strict";(self.webpackChunkvex=self.webpackChunkvex||[]).push([[4211],{5982:(N,f,r)=>{r.d(f,{G:()=>t});var a=r(6825);const t=function u(d){return(0,a.X$)("fadeInRight",[(0,a.eR)(":enter",[(0,a.oB)({transform:"translateX(-20px)",opacity:0}),(0,a.jt)(`${d}ms cubic-bezier(0.35, 0, 0.25, 1)`,(0,a.oB)({transform:"translateX(0)",opacity:1}))])])}(400)},3951:(N,f,r)=>{r.d(f,{$:()=>t});var a=r(6825);const t=function u(d){return(0,a.X$)("fadeInUp",[(0,a.eR)(":enter",[(0,a.oB)({transform:"translateY(20px)",opacity:0}),(0,a.jt)(`${d}ms cubic-bezier(0.35, 0, 0.25, 1)`,(0,a.oB)({transform:"translateY(0)",opacity:1}))])])}(400)},2852:(N,f,r)=>{r.d(f,{f:()=>t});var a=r(6825);const t=function u(d){return(0,a.X$)("scaleFadeIn",[(0,a.eR)(":enter",[(0,a.oB)({transform:"scale(0.8)",opacity:0}),(0,a.jt)(`${d}ms cubic-bezier(0.35, 0, 0.25, 1)`,(0,a.oB)({transform:"scale(1)",opacity:1}))])])}(400)},2008:(N,f,r)=>{r.d(f,{a:()=>t});var a=r(6825);const t=function u(d){return(0,a.X$)("scaleIn",[(0,a.eR)(":enter",[(0,a.oB)({transform:"scale(0)"}),(0,a.jt)(`${d}ms cubic-bezier(0.35, 0, 0.25, 1)`,(0,a.oB)({transform:"scale(1)"}))])])}(400)},6820:(N,f,r)=>{r.d(f,{KF:()=>E,Nu:()=>d,v$:()=>h,xg:()=>t});var a=r(6825);function u(p){return(0,a.X$)("stagger",[(0,a.eR)("* => *",[(0,a.IO)(":enter",(0,a.EY)(p,(0,a.pV)()),{optional:!0})])])}const t=u(80),d=u(60),E=u(40),h=u(20)},5896:(N,f,r)=>{r.d(f,{F:()=>h});var a=r(6306),u=r(553),t=r(7398),d=r(5879),E=r(9862);let h=(()=>{class p{constructor(s){this.http=s,this._url=`${u.N.API_URL}/Catalogo/`}getDepartamentos(s){return this.http.get(`${this._url}getDepartamento`,{}).pipe((0,t.U)(i=>i.ok&&Array.isArray(i.response)?i.response.map(l=>({name:l.c_Nombre,Id:l.c_Id_Depto,flag:l.c_Url_IMG})):i.response.map(l=>({name:l.c_Transaccion_Mensaje,Id:l.c_Transaccion_Estado,flag:""}))),(0,a.K)(i=>(console.error(i),[])))}getMunicipioXDepartamentos(s,i){return this.http.get(`${this._url}getMunicipioXDepartamento`,{params:{IdDepartamento:s.toString(),searchTerm:i}}).pipe((0,t.U)(l=>l.ok&&Array.isArray(l.response)?l.response.map(g=>({name:g.c_Nombre,Id:g.c_Id_Municipio,flag:g.c_Url_IMG})):l.response.map(g=>({name:g.c_Transaccion_Mensaje,Id:g.c_Transaccion_Estado,flag:""}))),(0,a.K)(l=>(console.error(l),[])))}getRolPersona(s){return this.http.get(`${this._url}getRolPersona`,{params:{searchTerm:s}})}getRolUsuario(s){return this.http.get(`${this._url}getRolUsuario`,{params:{searchTerm:s}})}getGenero(s){return this.http.get(`${this._url}getGenero`,{params:{searchTerm:s}})}getTipoCuenta(s){return this.http.get(`${this._url}getTipoCuenta`,{params:{searchTerm:s}})}getSucursal(s){return this.http.get(`${this._url}getSucursal`,{}).pipe((0,t.U)(i=>i.ok&&Array.isArray(i.response)?(console.log(i.response),i.response.map(l=>({name:l.c_Nombre,Id:l.c_Id_Sucursal,flag:l.c_Url_Img}))):i.response.map(l=>({name:l.c_Transaccion_Mensaje,Id:l.c_Transaccion_Estado,flag:""}))),(0,a.K)(i=>(console.error(i),[])))}}return p.\u0275fac=function(s){return new(s||p)(d.LFG(E.eN))},p.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},5250:(N,f,r)=>{r.d(f,{x:()=>h});var a=r(9862),u=r(553),t=r(8504),d=r(6306),E=r(5879);let h=(()=>{class p{constructor(s){this.http=s,this._url=`${u.N.API_URL}/Persona/`}setEmpleado(s,i,l,g,C,A,I,Z,T,x,S,v,b,R,q,y,k,L,B,J,K,U,$){const M={c_Id_Usuario:s,c_ID_ROL:i.map(Y=>Y.toString()),c_ID_Rol_Persona:l,c_Id_Tipo_Cuenta:g,c_Id_Sucursal:C,c_Id_Genero:A,c_Id_Municipio:I,c_Primer_Nombre:Z,c_Segundo_Nombre:T,c_Tercer_Nombre:x,c_Primer_Apellido:S,c_Segundo_Apellido:v,c_Apellido_Casada:b,c_DPI:R,c_NIT:q,c_Direccion:y,c_PNumero_Telefono:k,c_SNumero_Telefono:L,c_Correo:B,c_Img_Base:J,c_Descripcion:K,c_Fecha_Nacimiento:U,c_Usuario_Creacion:$};console.log(JSON.stringify(M));const Q=new a.WM({"Content-Type":"application/json"});return this.http.post(this._url+"setEmpleadosA",JSON.stringify(M),{headers:Q}).pipe((0,d.K)(Y=>(console.error(Y),(0,t._)({ok:!1,estado:"401",mensaje:"Sin Autorizacion"}))))}setPersona(s,i,l,g,C,A,I,Z,T,x,S,v,b,R,q,y,k,L,B,J,K){const U={c_ID_Rol_Persona:s,c_Id_Tipo_Cuenta:i,c_Id_Sucursal:l,c_Id_Genero:g,c_Id_Municipio:C,c_Primer_Nombre:A,c_Segundo_Nombre:I,c_Tercer_Nombre:Z,c_Primer_Apellido:T,c_Segundo_Apellido:x,c_Apellido_Casada:S,c_DPI:v,c_NIT:b,c_Direccion:R,c_PNumero_Telefono:q,c_SNumero_Telefono:y,c_Correo:k,c_Img_Base:L,c_Descripcion:B,c_Fecha_Nacimiento:J,c_Usuario_Creacion:K};console.log(JSON.stringify(U));const $=new a.WM({"Content-Type":"application/json"});return this.http.post(this._url+"setPersona",JSON.stringify(U),{headers:$}).pipe((0,d.K)(W=>(console.error(W),(0,t._)({ok:!1,estado:"401",mensaje:"Sin Autorizacion"}))))}putActualizarPersona(s,i,l,g,C,A,I,Z,T,x,S,v,b,R,q,y,k,L,B,J,K){const U={c_Id_Persona:s,c_ID_Rol_Persona:i,c_Id_Sucursal:l,c_Id_Genero:g,c_Id_Municipio:C,c_Primer_Nombre:A,c_Segundo_Nombre:I,c_Tercer_Nombre:Z,c_Primer_Apellido:T,c_Segundo_Apellido:x,c_Apellido_Casada:S,c_DPI:v,c_NIT:b,c_Direccion:R,c_PNumero_Telefono:q,c_SNumero_Telefono:y,c_Correo:k,c_Img_Base:L,c_Descripcion:B,c_Fecha_Nacimiento:J,c_Usuario_Modificacion:K};console.log(JSON.stringify(U));const $=new a.WM({"Content-Type":"application/json"});return this.http.post(this._url+"putActualizarPersona",JSON.stringify(U),{headers:$}).pipe((0,d.K)(W=>(console.error(W),(0,t._)({ok:!1,estado:"401",mensaje:"Sin Autorizacion"}))))}CambiarEstadoPersona(s,i){const l=new a.WM({"Content-Type":"application/json"});return this.http.post(`${this._url}CambiarEstadoPersona?IdP=${s}&IdUM=${i}`,l)}putActualizarEmpleado(s,i,l,g,C,A,I,Z,T,x,S,v,b,R,q,y,k,L,B,J,K,U,$){const M={c_Id_Persona:s,c_Id_Usuario:i,c_ID_ROL:l.map(Y=>Y.toString()),c_ID_Rol_Persona:g,c_Id_Sucursal:C,c_Id_Genero:A,c_Id_Municipio:I,c_Primer_Nombre:Z,c_Segundo_Nombre:T,c_Tercer_Nombre:x,c_Primer_Apellido:S,c_Segundo_Apellido:v,c_Apellido_Casada:b,c_DPI:R,c_NIT:q,c_Direccion:y,c_PNumero_Telefono:k,c_SNumero_Telefono:L,c_Correo:B,c_Img_Base:J,c_Descripcion:K,c_Fecha_Nacimiento:U,c_Usuario_Modificacion:$};console.log(JSON.stringify(M));const Q=new a.WM({"Content-Type":"application/json"});return this.http.post(this._url+"putActualizarEmpleadosA",JSON.stringify(M),{headers:Q}).pipe((0,d.K)(Y=>(console.error(Y),(0,t._)({ok:!1,estado:"401",mensaje:"Sin Autorizacion"}))))}CambiarEstadoEmpleado(s,i,l){const g=new a.WM({"Content-Type":"application/json"});return this.http.post(`${this._url}CambiarEstadoEmpleado?IdP=${s}&IdU=${i}&IdUM=${l}`,g)}getEmpleadoActivo(s){return this.http.get(`${this._url}GetEmpleados`,{params:{searchTerm:s}})}getPersona(s){return this.http.get(`${this._url}GetPersona`,{params:{searchTerm:s}})}getEmpleadoById(s){return this.http.get(`${this._url}GetEmpleadoXIdUA?IdPersona=${s}`)}getPersonaById(s){return this.http.get(`${this._url}GetPersonaById?IdPersona=${s}`)}}return p.\u0275fac=function(s){return new(s||p)(E.LFG(a.eN))},p.\u0275prov=E.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},8734:(N,f,r)=>{r.d(f,{_:()=>ke});var a=r(9347),u=r(6726),t=r(6223),d=r(7921),E=r(7398),h=r(9541),p=r(4005),e=r(5879),s=r(5896),i=r(2939),l=r(5250),g=r(6814),C=r(617),A=r(4516),I=r(1043),Z=r(6385),T=r(8034),x=r(8525),S=r(3680),v=r(7988),b=r(2296);function R(o,c){if(1&o&&(e.TgZ(0,"mat-option",57),e._uU(1),e.qZA()),2&o){const m=c.$implicit;e.Q6J("value",m.c_Id_Rol_Persona),e.xp6(1),e.Oqu(m.c_Descripcion)}}function q(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function y(o,c){if(1&o&&(e.TgZ(0,"mat-option",57)(1,"div",58),e._UZ(2,"img",59),e.TgZ(3,"span",60),e._uU(4),e.qZA()()()),2&o){const m=c.$implicit;e.Q6J("value",m.Id),e.xp6(2),e.Q6J("src",m.flag,e.LSH),e.xp6(2),e.Oqu(m.name)}}function k(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function L(o,c){if(1&o&&(e.TgZ(0,"mat-option",57),e._uU(1),e.qZA()),2&o){const m=c.$implicit;e.Q6J("value",m.c_Id_Tipo_Cuenta),e.xp6(1),e.Oqu(m.c_Descripcion)}}function B(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function J(o,c){if(1&o&&(e.TgZ(0,"mat-option",57),e._uU(1),e.qZA()),2&o){const m=c.$implicit;e.Q6J("value",m.c_Id_Genero),e.xp6(1),e.Oqu(m.c_Descripcion)}}function K(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function U(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function $(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten letras."),e.qZA())}function W(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function M(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten letras."),e.qZA())}function Q(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten letras."),e.qZA())}function Y(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function F(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten letras."),e.qZA())}function z(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function me(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten letras."),e.qZA())}function le(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten letras."),e.qZA())}function ue(o,c){if(1&o&&(e.TgZ(0,"mat-form-field",26)(1,"mat-label"),e._uU(2,"Apellido de Casada"),e.qZA(),e._UZ(3,"input",61)(4,"mat-icon",28),e.YNc(5,le,2,0,"mat-error",21),e.qZA()),2&o){const m=e.oxw();e.xp6(5),e.Q6J("ngIf",m.form.get("Apellido_Casada").hasError("pattern"))}}function pe(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function de(o,c){if(1&o&&(e.TgZ(0,"mat-option",57)(1,"div",58),e._UZ(2,"img",62),e.TgZ(3,"span",60),e._uU(4),e.qZA()()()),2&o){const m=c.$implicit;e.Q6J("value",m.Id),e.xp6(2),e.Q6J("src",m.flag,e.LSH),e.xp6(2),e.Oqu(m.name)}}function ge(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function fe(o,c){if(1&o&&(e.TgZ(0,"mat-option",57)(1,"div",58),e._UZ(2,"img",63),e.TgZ(3,"span",64),e._uU(4),e.qZA()()()),2&o){const m=c.$implicit;e.Q6J("value",m.Id),e.xp6(2),e.Q6J("src",m.flag,e.LSH),e.xp6(2),e.Oqu(m.name)}}function he(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function Ie(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function Ce(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten numeros."),e.qZA())}function Ee(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Debe tener 13 caracteres."),e.qZA())}function Pe(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"No puede exceder de los 13 caracteres."),e.qZA())}function Te(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten numeros."),e.qZA())}function Ae(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Debe tener 8 caracteres."),e.qZA())}function Ze(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"No puede exceder de los 12 caracteres."),e.qZA())}function ve(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function Ue(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten letras, numeros, guiones y comas."),e.qZA())}function Me(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function De(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function Oe(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten numeros."),e.qZA())}function Ne(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten numeros."),e.qZA())}function be(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido."),e.qZA())}function xe(o,c){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Solo se permiten letras, comas y puntos."),e.qZA())}function Se(o,c){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-form-field",26)(2,"mat-label"),e._uU(3,"Razon por la cual se actualiza el registro"),e.qZA(),e._UZ(4,"textarea",65),e.YNc(5,be,2,0,"mat-error",21),e.YNc(6,xe,2,0,"mat-error",21),e.qZA(),e.BQk()),2&o){const m=e.oxw();e.xp6(5),e.Q6J("ngIf",m.form.get("Razon").hasError("required")),e.xp6(1),e.Q6J("ngIf",m.form.get("Razon").hasError("pattern"))}}function Re(o,c){1&o&&(e.ynx(0),e._uU(1,"Actualizar"),e.BQk())}function qe(o,c){1&o&&(e.ynx(0),e._uU(1,"Registrar"),e.BQk())}let ye=50,ke=(()=>{class o{get isEdit(){return!!this.contactId}constructor(m,n,P,D,_,j,G,w,X){this.contactId=m,this.dialogRef=n,this.fb=P,this.catalogoService=D,this.cdr=_,this.ngZone=j,this.snackBar=G,this.CrearUsuariosService=w,this.dialog=X,this.departamentos=[],this.municipios=[],this.sucursal=[],this.imagen="",this.Id_Usuario="",this.Id_Sucursal="",this.titulo="",this.valido=!1,this.descripcion="",this.selectedImage=null,this.selectedImageURL="https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png",this.DeptoCtrl=new t.NI,this.MunCtrl=new t.NI,this.SucCtrl=new t.NI,this.isFormActive=!0}ngOnInit(){this.form=this.fb.group({Nombre:[""],c_Img_Base:["0"],Id_Empleado:[],c_ID_Rol_Persona:[,t.kI.required],c_Id_Sucursal:[,t.kI.required],c_Id_Genero:[,t.kI.required],c_Tipo_Cuenta:[,t.kI.required],Primer_Nombre:["",t.kI.compose([t.kI.required,t.kI.minLength(1),t.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xfc\xdc\xf1\xd1]*$/)])],Segundo_Nombre:["",t.kI.compose([t.kI.required,t.kI.minLength(1),t.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xfc\xdc\xf1\xd1]*$/)])],Tercer_Nombre:["",t.kI.compose([t.kI.minLength(1),t.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xfc\xdc\xf1\xd1]*$/)])],Primer_Apellido:["",t.kI.compose([t.kI.required,t.kI.minLength(1),t.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xfc\xdc\xf1\xd1]*$/)])],Segundo_Apellido:["",t.kI.compose([t.kI.required,t.kI.minLength(1),t.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xfc\xdc\xf1\xd1]*$/)])],Apellido_Casada:["",t.kI.compose([t.kI.minLength(1),t.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xfc\xdc\xf1\xd1]*$/)])],c_Id_Departamento:[,t.kI.required],c_Id_Municipio:[,t.kI.required],DPI:["",t.kI.compose([t.kI.required,t.kI.minLength(13),t.kI.maxLength(13)])],NIT:["",t.kI.compose([t.kI.minLength(8),t.kI.maxLength(12),t.kI.pattern(/^[\d-]*$/)])],Direccion:["",t.kI.compose([t.kI.required,t.kI.minLength(1),t.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xfc\xdc\xf1\xd1\s\d,-]*$/)])],Telefono_Principal:["",t.kI.compose([t.kI.required,t.kI.minLength(8),t.kI.maxLength(8),t.kI.pattern(/^[0-9]*$/)])],Telefono_Secundario:["",t.kI.compose([t.kI.minLength(8),t.kI.maxLength(8),t.kI.pattern(/^[0-9]*$/)])],Correo:["",[t.kI.required,t.kI.email]],Fecha_Nacimiento:["",t.kI.required],c_Usuario_CoM:[""],Razon:["",t.kI.compose([t.kI.required,t.kI.minLength(15),t.kI.maxLength(199),t.kI.pattern(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xfc\xdc\xf1\xd1\s,.]*$/)])]});const m=localStorage.getItem("token"),n=(0,u.Z)(m),D=n.IdSucursal;this.Id_Usuario=n.IdUsuario,this.Id_Sucursal=D,null==this.contactId&&(this.form.patchValue({Nombre:"Registrar Datos",c_Usuario_CoM:this.Id_Usuario,c_Id_Sucursal:parseInt(this.Id_Sucursal,10)}),this.cdr.detectChanges()),null!=this.contactId?(this.valido=!0,this.form.get("c_ID_Rol_Persona")?.reset(),this.form.get("c_ID_Rol_Persona")?.disable(),this.form.get("c_Tipo_Cuenta")?.reset(),this.form.get("c_Tipo_Cuenta")?.disable(),this.CrearUsuariosService.getPersonaById(this.contactId).subscribe(_=>{this.empleado=_,3==_.response.c_Id_Rol_Persona?(this.tipo="Actualizar Proveedor",this._tipo="Proveedor"):(this.tipo="Actualizar Cliente",this._tipo="Cliente"),this.form.patchValue({Nombre:this.tipo,Id_Empleado:_.response.c_Id_Persona,c_ID_Rol_Persona:_.response.c_Id_Rol_Persona,c_Tipo_Cuenta:_.response.c_Id_Tipo_Cuenta,c_Id_Genero:_.response.c_Id_Genero,Primer_Nombre:_.response.c_Primer_Nombre,Segundo_Nombre:_.response.c_Segundo_Nombre,Tercer_Nombre:_.response.c_Tercer_Nombre,Primer_Apellido:_.response.c_Primer_Apellido,Segundo_Apellido:_.response.c_Segundo_Apellido,Apellido_Casada:_.response.c_Apellido_Casada,c_Id_Departamento:_.response.c_Id_Departamento,c_Id_Municipio:_.response.c_Id_Municipio,DPI:_.response.c_DPI,NIT:_.response.c_NIT,Direccion:_.response.c_Direccion,Telefono_Principal:_.response.c_PNumero_Telefono,Telefono_Secundario:_.response.c_SNumero_Telefono,Correo:_.response.c_Correo,Fecha_Nacimiento:_.response.c_Fecha_Nacimiento,c_Id_Sucursal:_.response.c_Id_Sucursal}),this.selectedImageURL=_.response.c_Img_Base?`${_.response.c_Img_Base}`:"https://img.srvcentral.com/Sistema/ImagenPorDefecto/Registro.png",this.ngZone.run(()=>{this.form.get("c_Img_Base")?.setValue(_.response.c_Img_Base)}),this.cdr.detectChanges()},_=>{console.error("Error fetching employee data:",_)})):(this.form.get("Razon")?.reset(),this.form.get("Razon")?.disable()),this.ngZone.run(()=>{this.form.get("c_Usuario_CoM")?.setValue(this.Id_Usuario)}),this.filteredDepartamento$=this.DeptoCtrl.valueChanges.pipe((0,d.O)(""),(0,h.w)(_=>this.catalogoService.getDepartamentos(_)),(0,E.U)(_=>_.slice())),this.form.get("c_Id_Departamento").valueChanges.subscribe(_=>{this.filteredMunicipio$=this.catalogoService.getMunicipioXDepartamentos(_,"")}),this.filteredSucursal$=this.SucCtrl.valueChanges.pipe((0,d.O)(""),(0,h.w)(_=>this.catalogoService.getSucursal(_)),(0,E.U)(_=>_.slice())),this.catalogoService.getRolUsuario("").subscribe(_=>{this.rols=_.response}),this.catalogoService.getGenero("").subscribe(_=>{this.generos=_.response}),this.catalogoService.getTipoCuenta("").subscribe(_=>{this.TipoCuenta=_.response}),this.catalogoService.getRolPersona("").subscribe(_=>{this.roles=_.response})}save(){this.empleado||(this.empleado={...this.form.value,id:ye++}),this.dialogRef.close()}onFileSelected(m){const n=m.target;n?.files?.length&&(this.selectedImage=n.files[0],this.loadImage())}loadImage(){if(this.selectedImage){const m=new FileReader;m.onload=()=>{this.ngZone.run(()=>{this.selectedImageURL=m.result;const P=this.selectedImageURL.split(",");this.imagen=P[1],this.ngZone.run(()=>{this.form.get("c_Img_Base")?.setValue(this.imagen)}),this.cdr.detectChanges()})},m.readAsDataURL(this.selectedImage)}}openConfirmDialog(){this.titulo=null!=this.contactId?"\xbfEst\xe1s seguro que deseas actualizar el "+this._tipo+"?":"\xbfEst\xe1s seguro de que deseas guardar los cambios?",this.dialog.open(p.$,{height:"15rem",width:"25rem",data:{title:this.titulo}}).afterClosed().subscribe(n=>{n&&this.Guardar()})}Guardar(){if(null==this.contactId){this.valido=!1;const m=this.form.get("c_ID_Rol_Persona").value,n=this.form.get("c_Tipo_Cuenta").value,P=this.form.get("c_Id_Sucursal").value,D=this.form.get("c_Id_Genero").value,_=this.form.get("c_Id_Municipio").value,j=this.form.get("Primer_Nombre").value,G=this.form.get("Segundo_Nombre").value,w=this.form.get("Tercer_Nombre").value,X=this.form.get("Primer_Apellido").value,V=this.form.get("Segundo_Apellido").value,H=this.form.get("Apellido_Casada").value,ee=this.form.get("DPI").value,oe=this.form.get("NIT").value,te=this.form.get("Direccion").value,re=this.form.get("Telefono_Principal").value,ne=this.form.get("Telefono_Secundario").value,ae=this.form.get("Correo").value,ie=this.form.get("c_Img_Base").value,se=this.form.get("Fecha_Nacimiento").value;this.descripcion=2==m?"Registro de Nuevo Cliente":"Registro de Nuevo Proveedor";const _e=this.descripcion,ce=this.form.get("c_Usuario_CoM").value;this.CrearUsuariosService.setPersona(m,n,P,D,_,j,G,w,X,V,H,ee,oe,te,re,ne,ae,ie,_e,se,ce).subscribe(O=>{O.ok?(this.dialogRef.close(),location.reload(),this.snackBar.open(O.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]})):this.snackBar.open(`Error: ${O.transaccion_Estado} ${O.transaccion_Mensaje}`,"Cerrar",{duration:1e4,panelClass:["error-snackbar"]})},O=>{this.snackBar.open("Error Inesperado","Cerrar",{duration:15e3,panelClass:["error-snackbar"]})})}else{const m=this.form.get("Id_Empleado").value,n=1,P=this.form.get("c_Id_Sucursal").value,D=this.form.get("c_Id_Genero").value,_=this.form.get("c_Id_Municipio").value,j=this.form.get("Primer_Nombre").value,G=this.form.get("Segundo_Nombre").value,w=this.form.get("Tercer_Nombre").value,X=this.form.get("Primer_Apellido").value,V=this.form.get("Segundo_Apellido").value,H=this.form.get("Apellido_Casada").value,ee=this.form.get("DPI").value,oe=this.form.get("NIT").value,te=this.form.get("Direccion").value,re=this.form.get("Telefono_Principal").value,ne=this.form.get("Telefono_Secundario").value,ae=this.form.get("Correo").value,ie=this.form.get("c_Img_Base").value,se=this.form.get("Razon").value,_e=this.form.get("Fecha_Nacimiento").value,ce=this.form.get("c_Usuario_CoM").value;this.valido=!0,this.CrearUsuariosService.putActualizarPersona(m,n,P,D,_,j,G,w,X,V,H,ee,oe,te,re,ne,ae,ie,se,_e,ce).subscribe(O=>{O.ok?(this.dialogRef.close(),location.reload(),this.snackBar.open(O.transaccion_Mensaje,"Cerrar",{duration:5e3,panelClass:["success-snackbar"]})):this.snackBar.open(`Error: ${O.transaccion_Estado} ${O.transaccion_Mensaje}`,"Cerrar",{duration:1e4,panelClass:["error-snackbar"]})},O=>{this.snackBar.open("Error Inesperado","Cerrar",{duration:15e3,panelClass:["error-snackbar"]})})}}}return o.\u0275fac=function(m){return new(m||o)(e.Y36(a.WI),e.Y36(a.so),e.Y36(t.QS),e.Y36(s.F),e.Y36(e.sBO),e.Y36(e.R0b),e.Y36(i.ux),e.Y36(l.x),e.Y36(a.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["vex-contacts-edit"]],decls:164,vars:52,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title","",1,"flex","items-center"],[1,"headline","m-0","flex-auto"],["mat-icon-button","","type","button",1,"text-secondary",3,"matMenuTriggerFor"],["svgIcon","mat:more_vert"],["mat-dialog-close","","mat-icon-button","","type","button",1,"text-secondary"],["svgIcon","mat:close"],[1,"text-border"],[1,"flex","flex-col","mat-form-field"],[1,"px-6","py-4","flex","flex-col"],[1,"image-upload-container"],[1,"selected-image-container"],[1,"selected-image-wrapper"],["alt","Imagen seleccionada",3,"src"],[1,"button-container"],["for","image-upload",1,"custom-file-upload"],["id","image-upload","type","file","accept","image/*",3,"change"],[1,"flex","flex-col","sm:flex-row","sm:gap-8"],[1,"flex-1","sm:w-1/4"],["formControlName","c_ID_Rol_Persona"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["formControlName","c_Id_Sucursal","placeholder","Sucursal"],["formControlName","c_Tipo_Cuenta"],["formControlName","c_Id_Genero"],[1,"flex","flex-col","sm:flex-row","sm:gap-5"],[1,"flex-auto"],["cdkFocusInitial","","formControlName","Primer_Nombre","matInput",""],["matPrefix","","svgIcon","mat:person"],["cdkFocusInitial","","formControlName","Segundo_Nombre","matInput",""],["cdkFocusInitial","","formControlName","Tercer_Nombre","matInput",""],["cdkFocusInitial","","formControlName","Primer_Apellido","matInput",""],["cdkFocusInitial","","formControlName","Segundo_Apellido","matInput",""],["class","flex-auto",4,"ngIf"],[1,"flex","flex-col","sm:flex-row","sm:gap-6"],["formControlName","Fecha_Nacimiento","matInput","",3,"matDatepicker"],["matPrefix","",1,"block",3,"for"],["datepickerRef",""],["formControlName","c_Id_Departamento","placeholder","Departamento"],["formControlName","c_Id_Municipio","placeholder","Municipio"],[1,"flex","flex-col","sm:flex-row","sm:gap-4"],["cdkFocusInitial","","formControlName","DPI","matInput",""],["cdkFocusInitial","","formControlName","NIT","matInput",""],["cdkFocusInitial","","formControlName","Direccion","matInput",""],["formControlName","Correo","matInput",""],["matPrefix","","svgIcon","mat:email"],["formControlName","Telefono_Principal","matInput",""],["matPrefix","","svgIcon","mat:phone"],["formControlName","Telefono_Secundario","matInput",""],["align","end"],["mat-button","","mat-dialog-close","","type","button"],["color","primary","mat-flat-button","","type","submit",3,"disabled"],["xPosition","before","yPosition","below"],["settingsMenu","matMenu"],["mat-menu-item",""],["svgIcon","mat:search"],["href","https://portal.sat.gob.gt/portal/consulta-cui-nit/","target","_blank"],[3,"value"],[1,"option-container"],[1,"align-middle","mr-4","shadow-lg",2,"width","40%","height","50%",3,"src"],[1,"body-1"],["cdkFocusInitial","","formControlName","Apellido_Casada","matInput",""],[1,"align-middle","mr-4","shadow-lg",2,"width","50%","height","50%",3,"src"],[1,"align-middle","mr-5","shadow-lg",2,"width","20%","height","20%",3,"src"],[1,"body-2"],["formControlName","Razon","matInput",""]],template:function(m,n){if(1&m&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.openConfirmDialog()}),e.TgZ(1,"div",1)(2,"h2",2),e._uU(3),e.qZA(),e.TgZ(4,"button",3),e._UZ(5,"mat-icon",4),e.qZA(),e.TgZ(6,"button",5),e._UZ(7,"mat-icon",6),e.qZA()(),e._UZ(8,"mat-divider",7),e.TgZ(9,"mat-dialog-content",8)(10,"div",9)(11,"div",10)(12,"div",11)(13,"div",12),e._UZ(14,"img",13),e.qZA()(),e.TgZ(15,"div",14)(16,"label",15)(17,"span"),e._uU(18,"Subir Imagen"),e.qZA()(),e.TgZ(19,"input",16),e.NdJ("change",function(D){return n.onFileSelected(D)}),e.qZA()()()(),e.TgZ(20,"div",17)(21,"mat-form-field",18)(22,"mat-label"),e._uU(23,"Tipo"),e.qZA(),e.TgZ(24,"mat-select",19),e.YNc(25,R,2,2,"mat-option",20),e.qZA(),e.YNc(26,q,2,0,"mat-error",21),e.qZA(),e.TgZ(27,"mat-form-field",18)(28,"mat-label"),e._uU(29,"Sucursal"),e.qZA(),e.TgZ(30,"mat-select",22),e.YNc(31,y,5,3,"mat-option",20),e.ALo(32,"async"),e.qZA(),e.YNc(33,k,2,0,"mat-error",21),e.qZA(),e.TgZ(34,"mat-form-field",18)(35,"mat-label"),e._uU(36,"Tipo de Cuenta"),e.qZA(),e.TgZ(37,"mat-select",23),e.YNc(38,L,2,2,"mat-option",20),e.qZA(),e.YNc(39,B,2,0,"mat-error",21),e.qZA(),e.TgZ(40,"mat-form-field",18)(41,"mat-label"),e._uU(42,"Genero"),e.qZA(),e.TgZ(43,"mat-select",24),e.YNc(44,J,2,2,"mat-option",20),e.qZA(),e.YNc(45,K,2,0,"mat-error",21),e.qZA()(),e.TgZ(46,"div",25)(47,"mat-form-field",26)(48,"mat-label"),e._uU(49,"Primer Nombre"),e.qZA(),e._UZ(50,"input",27)(51,"mat-icon",28),e.YNc(52,U,2,0,"mat-error",21),e.YNc(53,$,2,0,"mat-error",21),e.qZA(),e.TgZ(54,"mat-form-field",26)(55,"mat-label"),e._uU(56,"Segundo Nombre"),e.qZA(),e._UZ(57,"input",29)(58,"mat-icon",28),e.YNc(59,W,2,0,"mat-error",21),e.YNc(60,M,2,0,"mat-error",21),e.qZA(),e.TgZ(61,"mat-form-field",26)(62,"mat-label"),e._uU(63,"Tercer Nombre"),e.qZA(),e._UZ(64,"input",30)(65,"mat-icon",28),e.YNc(66,Q,2,0,"mat-error",21),e.qZA()(),e.TgZ(67,"div",25)(68,"mat-form-field",26)(69,"mat-label"),e._uU(70,"Primer Apellido"),e.qZA(),e._UZ(71,"input",31)(72,"mat-icon",28),e.YNc(73,Y,2,0,"mat-error",21),e.YNc(74,F,2,0,"mat-error",21),e.qZA(),e.TgZ(75,"mat-form-field",26)(76,"mat-label"),e._uU(77,"Segundo Apellido"),e.qZA(),e._UZ(78,"input",32)(79,"mat-icon",28),e.YNc(80,z,2,0,"mat-error",21),e.YNc(81,me,2,0,"mat-error",21),e.qZA(),e.YNc(82,ue,6,1,"mat-form-field",33),e.qZA(),e.TgZ(83,"div",34)(84,"mat-form-field")(85,"mat-label"),e._uU(86,"Fecha de Nacimiento"),e.qZA(),e._UZ(87,"input",35)(88,"mat-datepicker-toggle",36)(89,"mat-datepicker",null,37),e.YNc(91,pe,2,0,"mat-error",21),e.qZA(),e.TgZ(92,"mat-form-field")(93,"mat-label"),e._uU(94,"Departamento"),e.qZA(),e.TgZ(95,"mat-select",38),e.YNc(96,de,5,3,"mat-option",20),e.ALo(97,"async"),e.qZA(),e.YNc(98,ge,2,0,"mat-error",21),e.qZA(),e.TgZ(99,"mat-form-field")(100,"mat-label"),e._uU(101,"Municipio"),e.qZA(),e.TgZ(102,"mat-select",39),e.YNc(103,fe,5,3,"mat-option",20),e.ALo(104,"async"),e.qZA(),e.YNc(105,he,2,0,"mat-error",21),e.qZA()(),e.TgZ(106,"div",40)(107,"mat-form-field",26)(108,"mat-label"),e._uU(109,"DPI"),e.qZA(),e._UZ(110,"input",41),e.YNc(111,Ie,2,0,"mat-error",21),e.YNc(112,Ce,2,0,"mat-error",21),e.YNc(113,Ee,2,0,"mat-error",21),e.YNc(114,Pe,2,0,"mat-error",21),e.qZA(),e.TgZ(115,"mat-form-field",26)(116,"mat-label"),e._uU(117,"NIT"),e.qZA(),e._UZ(118,"input",42),e.YNc(119,Te,2,0,"mat-error",21),e.YNc(120,Ae,2,0,"mat-error",21),e.YNc(121,Ze,2,0,"mat-error",21),e.qZA()(),e.TgZ(122,"div",25)(123,"mat-form-field",26)(124,"mat-label"),e._uU(125,"Direccion"),e.qZA(),e._UZ(126,"input",43)(127,"mat-icon",28),e.YNc(128,ve,2,0,"mat-error",21),e.YNc(129,Ue,2,0,"mat-error",21),e.qZA(),e.TgZ(130,"mat-form-field",26)(131,"mat-label"),e._uU(132,"Correo"),e.qZA(),e._UZ(133,"input",44)(134,"mat-icon",45),e.YNc(135,Me,2,0,"mat-error",21),e.qZA()(),e.TgZ(136,"div",25)(137,"mat-form-field",26)(138,"mat-label"),e._uU(139,"Telefono Principal"),e.qZA(),e._UZ(140,"input",46)(141,"mat-icon",47),e.YNc(142,De,2,0,"mat-error",21),e.YNc(143,Oe,2,0,"mat-error",21),e.qZA(),e.TgZ(144,"mat-form-field",26)(145,"mat-label"),e._uU(146,"Telefono Secundario"),e.qZA(),e._UZ(147,"input",48)(148,"mat-icon",47),e.YNc(149,Ne,2,0,"mat-error",21),e.qZA()(),e.TgZ(150,"div",25),e.YNc(151,Se,7,2,"ng-container",21),e.qZA()(),e.TgZ(152,"mat-dialog-actions",49)(153,"button",50),e._uU(154,"Cancel"),e.qZA(),e.TgZ(155,"button",51),e.YNc(156,Re,2,0,"ng-container",21),e.YNc(157,qe,2,0,"ng-container",21),e.qZA()()(),e.TgZ(158,"mat-menu",52,53)(160,"button",54),e._UZ(161,"mat-icon",55),e.TgZ(162,"a",56),e._uU(163,"Buscar en SAT"),e.qZA()()()),2&m){const P=e.MAs(90),D=e.MAs(159);e.Q6J("formGroup",n.form),e.xp6(3),e.Oqu(n.form.get("Nombre").value||""),e.xp6(1),e.Q6J("matMenuTriggerFor",D),e.xp6(10),e.Q6J("src",n.selectedImageURL,e.LSH),e.xp6(11),e.Q6J("ngForOf",n.roles),e.xp6(1),e.Q6J("ngIf",n.form.get("c_ID_Rol_Persona").hasError("required")),e.xp6(5),e.Q6J("ngForOf",e.lcZ(32,46,n.filteredSucursal$)),e.xp6(2),e.Q6J("ngIf",n.form.get("c_Id_Sucursal").hasError("required")),e.xp6(5),e.Q6J("ngForOf",n.TipoCuenta),e.xp6(1),e.Q6J("ngIf",n.form.get("c_Tipo_Cuenta").hasError("required")),e.xp6(5),e.Q6J("ngForOf",n.generos),e.xp6(1),e.Q6J("ngIf",n.form.get("c_Id_Genero").hasError("required")),e.xp6(7),e.Q6J("ngIf",n.form.get("Primer_Nombre").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.form.get("Primer_Nombre").hasError("pattern")),e.xp6(6),e.Q6J("ngIf",n.form.get("Segundo_Nombre").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.form.get("Segundo_Nombre").hasError("pattern")),e.xp6(6),e.Q6J("ngIf",n.form.get("Tercer_Nombre").hasError("pattern")),e.xp6(7),e.Q6J("ngIf",n.form.get("Primer_Apellido").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.form.get("Primer_Apellido").hasError("pattern")),e.xp6(6),e.Q6J("ngIf",n.form.get("Segundo_Apellido").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.form.get("Segundo_Apellido").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",1===n.form.get("c_Id_Genero").value),e.xp6(5),e.Q6J("matDatepicker",P),e.xp6(1),e.Q6J("for",P),e.xp6(3),e.Q6J("ngIf",n.form.get("Fecha_Nacimiento").hasError("required")),e.xp6(5),e.Q6J("ngForOf",e.lcZ(97,48,n.filteredDepartamento$)),e.xp6(2),e.Q6J("ngIf",n.form.get("c_Id_Departamento").hasError("required")),e.xp6(5),e.Q6J("ngForOf",e.lcZ(104,50,n.filteredMunicipio$)),e.xp6(2),e.Q6J("ngIf",n.form.get("c_Id_Municipio").hasError("required")),e.xp6(6),e.Q6J("ngIf",n.form.get("DPI").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.form.get("DPI").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",n.form.get("DPI").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",n.form.get("DPI").hasError("maxlength")),e.xp6(5),e.Q6J("ngIf",n.form.get("NIT").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",n.form.get("NIT").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",n.form.get("NIT").hasError("maxlength")),e.xp6(7),e.Q6J("ngIf",n.form.get("Direccion").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.form.get("Direccion").hasError("pattern")),e.xp6(6),e.Q6J("ngIf",n.form.get("Correo").hasError("required")),e.xp6(7),e.Q6J("ngIf",n.form.get("Telefono_Principal").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.form.get("Telefono_Principal").hasError("pattern")),e.xp6(6),e.Q6J("ngIf",n.form.get("Telefono_Secundario").hasError("pattern")),e.xp6(2),e.Q6J("ngIf",n.contactId),e.xp6(4),e.Q6J("disabled",!n.form.valid),e.xp6(1),e.Q6J("ngIf",n.valido),e.xp6(1),e.Q6J("ngIf",!n.valido)}},dependencies:[g.sg,g.O5,a.ZT,a.uh,a.xY,a.H8,C.Hw,A.Nt,I.KE,I.hX,I.TO,I.qo,Z.d,T.Mq,T.hl,T.nW,x.gD,S.ey,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,v.VK,v.OP,v.p6,b.lW,b.RK,g.Ov],styles:[".image-upload-container[_ngcontent-%COMP%]{width:150px;height:auto;border:2px solid black;position:relative;display:flex;flex-direction:column;align-items:center;text-align:center}.image-upload-container[_ngcontent-%COMP%]   .selected-image-container[_ngcontent-%COMP%]{width:100%;flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden}.image-upload-container[_ngcontent-%COMP%]   .selected-image-container[_ngcontent-%COMP%]   .selected-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain}.image-upload-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.image-upload-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .custom-file-upload[_ngcontent-%COMP%]{cursor:pointer;background-color:#f0f0f0;border:1px solid #ccc;padding:5px 10px;border-radius:5px;transition:background-color .3s ease}.image-upload-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .custom-file-upload[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.image-upload-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.option-container[_ngcontent-%COMP%]{display:flex;align-items:center}.option-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15%;margin-right:5px}.option-container[_ngcontent-%COMP%]   .body-2[_ngcontent-%COMP%]{margin:0}"]}),o})()},6555:(N,f,r)=>{r.d(f,{Y:()=>A});var a=r(6814),u=r(9347),t=r(617),d=r(4516),E=r(6385),h=r(8034),p=r(6223),e=r(7988),s=r(2296),i=r(3680),l=r(8525),g=r(2939),C=r(5879);let A=(()=>{class I{}return I.\u0275fac=function(T){return new(T||I)},I.\u0275mod=C.oAB({type:I}),I.\u0275inj=C.cJS({imports:[a.ez,u.Is,t.Ps,d.c,E.t,h.FA,l.LD,g.ZX,p.UX,e.Tx,s.ot,i.XK]}),I})()},4005:(N,f,r)=>{r.d(f,{$:()=>t});var a=r(9347),u=r(5879);let t=(()=>{class d{constructor(h,p){this.dialogRef=h,this.data=p}}return d.\u0275fac=function(h){return new(h||d)(u.Y36(a.so),u.Y36(a.WI))},d.\u0275cmp=u.Xpm({type:d,selectors:[["app-confirm-dialog"]],decls:8,vars:1,consts:[[1,"dialog-container",2,"margin-top","2rem"],[1,"dialog-title"],[1,"button-container","flex","justify-center","gap-4"],["mat-raised-button","","type","button",1,"btn","secondary",3,"click"],["mat-button","","type","button","color","primary",1,"btn","primary",3,"click"]],template:function(h,p){1&h&&(u.TgZ(0,"div",0)(1,"h2",1),u._uU(2),u.qZA(),u.TgZ(3,"div",2)(4,"button",3),u.NdJ("click",function(){return p.dialogRef.close(!1)}),u._uU(5,"Cancelar"),u.qZA(),u.TgZ(6,"button",4),u.NdJ("click",function(){return p.dialogRef.close(!0)}),u._uU(7,"Aceptar"),u.qZA()()()),2&h&&(u.xp6(2),u.Oqu(p.data.title))},styles:[".dialog-container[_ngcontent-%COMP%]{text-align:center}.dialog-title[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:16px}.button-container[_ngcontent-%COMP%]{margin-top:24px}.mat-button[_ngcontent-%COMP%]{min-width:120px;border-radius:24px;font-weight:500;text-transform:uppercase;font-size:.875rem}.mat-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.btn[_ngcontent-%COMP%]{border:none;color:#fff;padding:14px 28px;cursor:pointer;border-radius:25px}.primary[_ngcontent-%COMP%]{background-color:#007bff}.primary[_ngcontent-%COMP%]:hover{background:#0b7dda}.secondary[_ngcontent-%COMP%]{background-color:#e7e7e7;color:#000}.secondary[_ngcontent-%COMP%]:hover{background:#ddd}"]}),d})()},6726:(N,f,r)=>{function a(p){this.message=p}r.d(f,{Z:()=>h}),(a.prototype=new Error).name="InvalidCharacterError";var u=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(p){var e=String(p).replace(/=+$/,"");if(e.length%4==1)throw new a("'atob' failed: The string to be decoded is not correctly encoded.");for(var s,i,l=0,g=0,C="";i=e.charAt(g++);~i&&(s=l%4?64*s+i:i,l++%4)?C+=String.fromCharCode(255&s>>(-2*l&6)):0)i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);return C};function d(p){this.message=p}(d.prototype=new Error).name="InvalidTokenError";const h=function E(p,e){if("string"!=typeof p)throw new d("Invalid token specified");var s=!0===(e=e||{}).header?0:1;try{return JSON.parse(function t(p){var e=p.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(u(e).replace(/(.)/g,function(i,l){var g=l.charCodeAt(0).toString(16).toUpperCase();return g.length<2&&(g="0"+g),"%"+g}))}catch{return u(e)}}(p.split(".")[s]))}catch(i){throw new d("Invalid token specified: "+i.message)}}}}]);