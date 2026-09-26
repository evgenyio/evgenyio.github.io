(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Qo="186",L0=0,Ll=1,I0=2,Ls=1,D0=2,Cs=3,ui=0,Ze=1,$e=2,Xn=0,ci=1,Fs=2,Il=3,Dl=4,N0=5,ji=100,U0=101,F0=102,O0=103,B0=104,k0=200,z0=201,H0=202,V0=203,hh=204,uh=205,G0=206,W0=207,X0=208,q0=209,$0=210,Y0=211,Z0=212,J0=213,K0=214,jr=0,to=1,eo=2,Os=3,no=4,io=5,so=6,ao=7,jo=0,Q0=1,j0=2,Pn=0,fh=1,dh=2,ph=3,mh=4,gh=5,vh=6,Ja=7,xh=300,Ri=301,ss=302,rr=303,or=304,Ka=306,Ua=1e3,Gn=1001,ro=1002,Be=1003,tu=1004,Js=1005,Ve=1006,lr=1007,Ti=1008,sn=1009,_h=1010,Mh=1011,Bs=1012,tl=1013,Ln=1014,vn=1015,In=1016,el=1017,nl=1018,ks=1020,bh=35902,Sh=35899,yh=1021,wh=1022,xn=1023,$n=1026,Ai=1027,il=1028,sl=1029,Pi=1030,al=1031,rl=1033,Ta=33776,Aa=33777,Ca=33778,Ra=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37488,go=37489,Fa=37490,vo=37491,xo=37808,_o=37809,Mo=37810,bo=37811,So=37812,yo=37813,wo=37814,Eo=37815,To=37816,Ao=37817,Co=37818,Ro=37819,Po=37820,Lo=37821,Io=36492,Do=36494,No=36495,Uo=36283,Fo=36284,Oa=36285,Oo=36286,eu=3200,Ba=0,nu=1,si="",we="srgb",ka="srgb-linear",za="linear",fe="srgb",cr=7680,iu=519,su=512,au=513,ru=514,ol=515,ou=516,lu=517,ll=518,cu=519,hu=35044,Nl=35048,Ul="300 es",Cn=2e3,zs=2001;function uu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ha(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fu(){const s=Ha("canvas");return s.style.display="block",s}const Fl={};function Ol(...s){const t="THREE."+s.shift();console.log(t,...s)}function Eh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=Eh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function se(...s){s=Eh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ns(...s){const t=s.join(" ");t in Fl||(Fl[t]=!0,Gt(...s))}function du(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const pu={[jr]:to,[eo]:so,[no]:ao,[Os]:io,[to]:jr,[so]:eo,[ao]:no,[io]:Os};class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,Bo=180/Math.PI;function os(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function mu(s,t){return(s%t+t)%t}function ur(s,t,e){return(1-e)*s+e*t}function fs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class ot{static{ot.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=a[r+0],d=a[r+1],m=a[r+2],x=a[r+3];if(f!==x||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*x;g<0&&(u=-u,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+x*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=a[r],u=a[r+1],d=a[r+2],m=a[r+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(a/2),u=l(n/2),d=l(i/2),m=l(a/2);switch(r){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(a+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(a-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(r-i)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-a*i),f=2*(a*n-r*e);return this.x=e+l*c+r*f-o*h,this.y=n+l*h+o*c-a*f,this.z=i+l*f+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new P,Bl=new Ge;class qt{static{qt.prototype.isMatrix3=!0}constructor(t,e,n,i,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],S=i[4],_=i[7],w=i[2],E=i[5],C=i[8];return a[0]=r*x+o*v+l*w,a[3]=r*g+o*S+l*E,a[6]=r*p+o*_+l*C,a[1]=c*x+h*v+f*w,a[4]=c*g+h*S+f*E,a[7]=c*p+h*_+f*C,a[2]=u*x+d*v+m*w,a[5]=u*g+d*S+m*E,a[8]=u*p+d*_+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*r-o*c,u=o*l-h*a,d=c*a-r*l,m=e*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=f*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*r)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*a-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dr.makeScale(t,e)),this}rotate(t){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dr.makeRotation(-t)),this}translate(t,e){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new qt,kl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gu(){const s={enabled:!0,workingColorSpace:ka,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===fe&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?za:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ka]:{primaries:t,whitePoint:n,transfer:za,toXYZ:kl,fromXYZ:zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:kl,fromXYZ:zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}const ne=gu();function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Oi;class vu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Ha("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=qn(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xu=0;class cl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(pr(i[r].image)):a.push(pr(i[r]))}else a=pr(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function pr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let _u=0;const mr=new P;class We extends Di{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Gn,i=Gn,a=Ve,r=Ti,o=xn,l=sn,c=We.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=os(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mr).x}get height(){return this.source.getSize(mr).y}get depth(){return this.source.getSize(mr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=xh;We.DEFAULT_ANISOTROPY=1;class be{static{be.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(d+1)/2,w=(p+1)/2,E=(h+u)/4,C=(f+x)/4,b=(m+g)/4;return S>_&&S>w?S<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(S),i=E/n,a=C/n):_>w?_<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(_),n=E/i,a=b/i):w<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(w),n=C/a,i=b/a),this.set(n,i,a,e),this}let v=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends Di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},a=new We(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new cl(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Th extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bu extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ie{static{ie.prototype.isMatrix4=!0}constructor(t,e,n,i,a,r,o,l,c,h,f,u,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,h,f,u,d,m,x,g)}set(t,e,n,i,a,r,o,l,c,h,f,u,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Bi.setFromMatrixColumn(t,0).length(),a=1/Bi.setFromMatrixColumn(t,1).length(),r=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const u=r*h,d=r*f,m=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u+x*o,e[4]=m*o-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-o,e[2]=d*o-m,e[6]=x+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u-x*o,e[4]=-r*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=r*h,e[9]=x-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,m=o*h,x=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=m*f+d,e[1]=f,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-x*f}else if(t.order==="XZY"){const u=r*l,d=r*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=r*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Su,t,yu)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Kn.crossVectors(n,tn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Kn.crossVectors(n,tn)),Kn.normalize(),Ks.crossVectors(tn,Kn),i[0]=Kn.x,i[4]=Ks.x,i[8]=tn.x,i[1]=Kn.y,i[5]=Ks.y,i[9]=tn.y,i[2]=Kn.z,i[6]=Ks.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],S=n[7],_=n[11],w=n[15],E=i[0],C=i[4],b=i[8],T=i[12],R=i[1],D=i[5],B=i[9],O=i[13],N=i[2],L=i[6],G=i[10],W=i[14],K=i[3],q=i[7],Q=i[11],j=i[15];return a[0]=r*E+o*R+l*N+c*K,a[4]=r*C+o*D+l*L+c*q,a[8]=r*b+o*B+l*G+c*Q,a[12]=r*T+o*O+l*W+c*j,a[1]=h*E+f*R+u*N+d*K,a[5]=h*C+f*D+u*L+d*q,a[9]=h*b+f*B+u*G+d*Q,a[13]=h*T+f*O+u*W+d*j,a[2]=m*E+x*R+g*N+p*K,a[6]=m*C+x*D+g*L+p*q,a[10]=m*b+x*B+g*G+p*Q,a[14]=m*T+x*O+g*W+p*j,a[3]=v*E+S*R+_*N+w*K,a[7]=v*C+S*D+_*L+w*q,a[11]=v*b+S*B+_*G+w*Q,a[15]=v*T+S*O+_*W+w*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],v=l*d-c*u,S=o*d-c*f,_=o*u-l*f,w=r*d-c*h,E=r*u-l*h,C=r*f-o*h;return e*(x*v-g*S+p*_)-n*(m*v-g*w+p*E)+i*(m*S-x*w+p*C)-a*(m*_-x*E+g*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-o*c)-n*(a*h-o*l)+i*(a*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=e*o-n*r,S=e*l-i*r,_=e*c-a*r,w=n*l-i*o,E=n*c-a*o,C=i*c-a*l,b=h*x-f*m,T=h*g-u*m,R=h*p-d*m,D=f*g-u*x,B=f*p-d*x,O=u*p-d*g,N=v*O-S*B+_*D+w*R-E*T+C*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return t[0]=(o*O-l*B+c*D)*L,t[1]=(i*B-n*O-a*D)*L,t[2]=(x*C-g*E+p*w)*L,t[3]=(u*E-f*C-d*w)*L,t[4]=(l*R-r*O-c*T)*L,t[5]=(e*O-i*R+a*T)*L,t[6]=(g*_-m*C-p*S)*L,t[7]=(h*C-u*_+d*S)*L,t[8]=(r*B-o*R+c*b)*L,t[9]=(n*R-e*B-a*b)*L,t[10]=(m*E-x*_+p*v)*L,t[11]=(f*_-h*E-d*v)*L,t[12]=(o*T-r*D-l*b)*L,t[13]=(e*D-n*T+i*b)*L,t[14]=(x*S-m*w-g*v)*L,t[15]=(h*w-f*S+u*v)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,f=o+o,u=a*c,d=a*h,m=a*f,x=r*h,g=r*f,p=o*f,v=l*c,S=l*h,_=l*f,w=n.x,E=n.y,C=n.z;return i[0]=(1-(x+p))*w,i[1]=(d+_)*w,i[2]=(m-S)*w,i[3]=0,i[4]=(d-_)*E,i[5]=(1-(u+p))*E,i[6]=(g+v)*E,i[7]=0,i[8]=(m+S)*C,i[9]=(g-v)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),e.identity(),this;let r=Bi.set(i[0],i[1],i[2]).length();const o=Bi.set(i[4],i[5],i[6]).length(),l=Bi.set(i[8],i[9],i[10]).length();a<0&&(r=-r),un.copy(this);const c=1/r,h=1/o,f=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=l,this}makePerspective(t,e,n,i,a,r,o=Cn,l=!1){const c=this.elements,h=2*a/(e-t),f=2*a/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,x;if(l)m=a/(r-a),x=r*a/(r-a);else if(o===Cn)m=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===zs)m=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=Cn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i);let m,x;if(l)m=1/(r-a),x=r/(r-a);else if(o===Cn)m=-2/(r-a),x=-(r+a)/(r-a);else if(o===zs)m=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new P,un=new ie,Su=new P(0,0,0),yu=new P(1,1,1),Kn=new P,Ks=new P,tn=new P,Hl=new ie,Vl=new Ge;class bn{constructor(t=0,e=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wu=0;const Gl=new P,ki=new Ge,Un=new ie,Qs=new P,ds=new P,Eu=new P,Tu=new Ge,Wl=new P(1,0,0),Xl=new P(0,1,0),ql=new P(0,0,1),$l={type:"added"},Au={type:"removed"},zi={type:"childadded",child:null},gr={type:"childremoved",child:null};class Ie extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new P,e=new bn,n=new Ge,i=new P(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new qt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ds,Qs,this.up):Un.lookAt(Qs,ds,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Un),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),zi.child=t,this.dispatchEvent(zi),zi.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au),gr.child=t,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,Eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*n-a[8]*i,a[13]+=n-a[1]*e-a[5]*n-a[9]*i,a[14]+=i-a[2]*e-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),m=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cu={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},js={h:0,s:0,l:0};function xr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=mu(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=xr(r,a,t+1/3),this.g=xr(r,a,t),this.b=xr(r,a,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=we){function n(a){a!==void 0&&parseFloat(a)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=Ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return ne.workingToColorSpace(He.copy(this),t),Math.round(Jt(He.r*255,0,255))*65536+Math.round(Jt(He.g*255,0,255))*256+Math.round(Jt(He.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(He.copy(this),e);const n=He.r,i=He.g,a=He.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=h<=.5?f/(r+o):f/(2-r-o),r){case n:l=(i-a)/f+(i<a?6:0);break;case i:l=(a-n)/f+2;break;case a:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=we){ne.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(js);const n=ur(Qn.h,js.h,e),i=ur(Qn.s,js.s,e),a=ur(Qn.l,js.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Ct;Ct.NAMES=Ah;class ul extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fn=new P,Fn=new P,_r=new P,On=new P,Hi=new P,Vi=new P,Yl=new P,Mr=new P,br=new P,Sr=new P,yr=new be,wr=new be,Er=new be;class gn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fn.subVectors(t,e),i.cross(fn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){fn.subVectors(i,e),Fn.subVectors(n,e),_r.subVectors(t,e);const r=fn.dot(fn),o=fn.dot(Fn),l=fn.dot(_r),c=Fn.dot(Fn),h=Fn.dot(_r),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(r*h-o*l)*u;return a.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,On.x),l.addScaledVector(r,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(t,e,n,i,a,r){return yr.setScalar(0),wr.setScalar(0),Er.setScalar(0),yr.fromBufferAttribute(t,e),wr.fromBufferAttribute(t,n),Er.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(yr,a.x),r.addScaledVector(wr,a.y),r.addScaledVector(Er,a.z),r}static isFrontFacing(t,e,n,i){return fn.subVectors(n,e),Fn.subVectors(t,e),fn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;Hi.subVectors(i,n),Vi.subVectors(a,n),Mr.subVectors(t,n);const l=Hi.dot(Mr),c=Vi.dot(Mr);if(l<=0&&c<=0)return e.copy(n);br.subVectors(t,i);const h=Hi.dot(br),f=Vi.dot(br);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Hi,r);Sr.subVectors(t,a);const d=Hi.dot(Sr),m=Vi.dot(Sr);if(m>=0&&d<=m)return e.copy(a);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Vi,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Yl.subVectors(a,i),o=(f-h)/(f-h+(d-m)),e.copy(i).addScaledVector(Yl,o);const p=1/(g+x+u);return r=x*p,o=u*p,e.copy(n).addScaledVector(Hi,r).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class di{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,dn):dn.fromBufferAttribute(a,r),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),ea.subVectors(this.max,ps),Gi.subVectors(t.a,ps),Wi.subVectors(t.b,ps),Xi.subVectors(t.c,ps),jn.subVectors(Wi,Gi),ti.subVectors(Xi,Wi),gi.subVectors(Gi,Xi);let e=[0,-jn.z,jn.y,0,-ti.z,ti.y,0,-gi.z,gi.y,jn.z,0,-jn.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!Tr(e,Gi,Wi,Xi,ea)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,Gi,Wi,Xi,ea))?!1:(na.crossVectors(jn,ti),e=[na.x,na.y,na.z],Tr(e,Gi,Wi,Xi,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,ta=new di,Gi=new P,Wi=new P,Xi=new P,jn=new P,ti=new P,gi=new P,ps=new P,ea=new P,na=new P,vi=new P;function Tr(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){vi.fromArray(s,a);const o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ce=new P,ia=new ot;let Ru=0;class je extends Di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ru++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),i=Je(i,this.array),a=Je(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ch extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rh extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Pu=new di,ms=new P,Ar=new P;class qs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pu.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Ar)),this.expandByPoint(ms.copy(t.center).sub(Ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Lu=0;const rn=new ie,Cr=new Ie,qi=new P,en=new di,gs=new di,Ue=new P;class Le extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uu(t)?Rh:Ch)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new qt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Cr.lookAt(t),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];en.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(en.min,gs.min),en.expandByPoint(Ue),Ue.addVectors(en.max,gs.max),en.expandByPoint(Ue)):(en.expandByPoint(gs.min),en.expandByPoint(gs.max))}en.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)Ue.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Ue.add(qi)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new P,l[b]=new P;const c=new P,h=new P,f=new P,u=new ot,d=new ot,m=new ot,x=new P,g=new P;function p(b,T,R){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,R),u.fromBufferAttribute(a,b),d.fromBufferAttribute(a,T),m.fromBufferAttribute(a,R),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(D),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(D),o[b].add(x),o[T].add(x),o[R].add(x),l[b].add(g),l[T].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let b=0,T=v.length;b<T;++b){const R=v[b],D=R.start,B=R.count;for(let O=D,N=D+B;O<N;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new P,_=new P,w=new P,E=new P;function C(b){w.fromBufferAttribute(i,b),E.copy(w);const T=o[b];S.copy(T),S.sub(w.multiplyScalar(w.dot(T))).normalize(),_.crossVectors(E,T);const D=_.dot(l[b])<0?-1:1;r.setXYZW(b,S.x,S.y,S.z,D)}for(let b=0,T=v.length;b<T;++b){const R=v[b],D=R.start,B=R.count;for(let O=D,N=D+B;O<N;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),h.subVectors(r,a),f.subVectors(i,a),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),f.subVectors(i,a),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new je(u,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],f=a[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rr=new P,Iu=new P,Du=new qt;class ii{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Rr.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Rr),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Du.getNormalMatrix(t),i=this.coplanarPoint(Rr).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Nu=0;class ls extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=os(),this.name="",this.type="Material",this.blending=ci,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const kn=new P,Pr=new P,sa=new P,aa=new P;class Ph{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pr.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Pr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(sa),o=aa.dot(this.direction),l=-aa.dot(sa),c=aa.lengthSq(),h=Math.abs(1-r*r);let f,u,d,m;if(h>0)if(f=r*l-o,u=r*o-l,m=a*h,f>=0)if(u>=-m)if(u<=m){const x=1/h;f*=x,u*=x,d=f*(f+r*u+2*o)+u*(r*f+u+2*l)+c}else u=a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-r*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(f=Math.max(0,-(r*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c);else u=r>0?-a:a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Pr).addScaledVector(sa,u),d}intersectSphere(t,e){if(t.radius<0)return null;kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-r.x,u=t.y-r.y,d=t.z-r.z,m=e.x-r.x,x=e.y-r.y,g=e.z-r.z,p=n.x-r.x,v=n.y-r.y,S=n.z-r.z,_=Math.abs(l),w=Math.abs(c),E=Math.abs(h);let C,b,T,R,D,B,O,N,L,G,W,K;if(_>=w&&_>=E?(T=l,B=f,L=m,K=p,l>=0?(C=c,b=h,R=u,D=d,O=x,N=g,G=v,W=S):(C=h,b=c,R=d,D=u,O=g,N=x,G=S,W=v)):w>=E?(T=c,B=u,L=x,K=v,c>=0?(C=h,b=l,R=d,D=f,O=g,N=m,G=S,W=p):(C=l,b=h,R=f,D=d,O=m,N=g,G=p,W=S)):(T=h,B=d,L=g,K=S,h>=0?(C=l,b=c,R=f,D=u,O=m,N=x,G=p,W=v):(C=c,b=l,R=u,D=f,O=x,N=m,G=v,W=p)),T===0)return null;const q=C/T,Q=b/T,j=1/T,wt=R-q*B,St=D-Q*B,ee=O-q*L,Wt=N-Q*L,ae=G-q*K,J=W-Q*K,nt=ae*Wt-J*ee,_t=wt*J-St*ae,zt=ee*St-Wt*wt;if(i){if(nt<0||_t<0||zt<0)return null}else if((nt<0||_t<0||zt<0)&&(nt>0||_t>0||zt>0))return null;const Et=nt+_t+zt;if(Et===0)return null;const Ht=j*(nt*B+_t*L+zt*K);return(Et>0?Ht<0:Ht>0)?null:this.at(Ht/Et,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pi extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zl=new ie,xi=new Ph,ra=new qs,Jl=new P,oa=new P,la=new P,ca=new P,Lr=new P,ha=new P,Kl=new P,ua=new P;class jt extends Ie{constructor(t=new Le,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){ha.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],f=a[l];h!==0&&(Lr.fromBufferAttribute(f,t),r?ha.addScaledVector(Lr,h):ha.addScaledVector(Lr.sub(e),h))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(a),xi.copy(t.ray).recast(t.near),!(ra.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ra,Jl)===null||xi.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(Zl.copy(a).invert(),xi.copy(t.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=r[g.materialIndex],v=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,w=S;_<w;_+=3){const E=o.getX(_),C=o.getX(_+1),b=o.getX(_+2);i=fa(this,p,t,n,c,h,f,E,C,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const v=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);i=fa(this,r,t,n,c,h,f,v,S,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=r[g.materialIndex],v=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,w=S;_<w;_+=3){const E=_,C=_+1,b=_+2;i=fa(this,p,t,n,c,h,f,E,C,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const v=g,S=g+1,_=g+2;i=fa(this,r,t,n,c,h,f,v,S,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Uu(s,t,e,n,i,a,r,o){let l;if(t.side===Ze?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===ui,o),l===null)return null;ua.copy(o),ua.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:s}}function fa(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,oa),s.getVertexPosition(l,la),s.getVertexPosition(c,ca);const h=Uu(s,t,e,n,oa,la,ca,Kl);if(h){const f=new P;gn.getBarycoord(Kl,oa,la,ca,f),i&&(h.uv=gn.getInterpolatedAttribute(i,o,l,c,f,new ot)),a&&(h.uv1=gn.getInterpolatedAttribute(a,o,l,c,f,new ot)),r&&(h.normal=gn.getInterpolatedAttribute(r,o,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};gn.getNormal(oa,la,ca,u.normal),h.face=u,h.barycoord=f}return h}class Lh extends We{constructor(t=null,e=1,n=1,i,a,r,o,l,c=Be,h=Be,f,u){super(null,r,o,l,c,h,i,a,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new ie,jl=new ie,da=[],tc=new di,Fu=new ie,vs=new jt,xs=new qs;class Ke extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),tc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(tc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),xs.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),t.ray.intersectsSphere(xs)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,$i),jl.multiplyMatrices(n,$i),vs.matrixWorld=jl,vs.raycast(t,da);for(let r=0,o=da.length;r<o;r++){const l=da[r];l.instanceId=a,l.object=this,e.push(l)}da.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lh(new Float32Array(i*this.count),i,this.count,il,vn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*t;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _i=new qs,Ou=new ot(.5,.5),pa=new P;class fl{constructor(t=new ii,e=new ii,n=new ii,i=new ii,a=new ii,r=new ii){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){const i=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],f=a[5],u=a[6],d=a[7],m=a[8],x=a[9],g=a[10],p=a[11],v=a[12],S=a[13],_=a[14],w=a[15];if(i[0].setComponents(c-r,d-h,p-m,w-v).normalize(),i[1].setComponents(c+r,d+h,p+m,w+v).normalize(),i[2].setComponents(c+o,d+f,p+x,w+S).normalize(),i[3].setComponents(c-o,d-f,p-x,w-S).normalize(),n)i[4].setComponents(l,u,g,_).normalize(),i[5].setComponents(c-l,d-u,p-g,w-_).normalize();else if(i[4].setComponents(c-l,d-u,p-g,w-_).normalize(),e===Cn)i[5].setComponents(c+l,d+u,p+g,w+_).normalize();else if(e===zs)i[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=Ou.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(pa.x=i.normal.x>0?t.max.x:t.min.x,pa.y=i.normal.y>0?t.max.y:t.min.y,pa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ih extends We{constructor(t=[],e=Ri,n,i,a,r,o,l,c,h){super(t,e,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ni extends We{constructor(t,e,n,i,a,r,o,l,c){super(t,e,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends We{constructor(t,e,n=Ln,i,a,r,o=Be,l=Be,c,h=$n,f=1){if(h!==$n&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Bu extends Hs{constructor(t,e=Ln,n=Ri,i,a,r=Be,o=Be,l,c=$n){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,a,r,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dh extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cn extends Le{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,r,a,0),m("z","y","x",1,-1,n,e,-t,r,a,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,a,4),m("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(f,2));function m(x,g,p,v,S,_,w,E,C,b,T){const R=_/C,D=w/b,B=_/2,O=w/2,N=E/2,L=C+1,G=b+1;let W=0,K=0;const q=new P;for(let Q=0;Q<G;Q++){const j=Q*D-O;for(let wt=0;wt<L;wt++){const St=wt*R-B;q[x]=St*v,q[g]=j*S,q[p]=N,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),f.push(wt/C),f.push(1-Q/b),W+=1}}for(let Q=0;Q<b;Q++)for(let j=0;j<C;j++){const wt=u+j+L*Q,St=u+j+L*(Q+1),ee=u+(j+1)+L*(Q+1),Wt=u+(j+1)+L*Q;l.push(wt,St,Wt),l.push(St,ee,Wt),K+=6}o.addGroup(d,K,T),d+=K,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hn extends Le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new P,h=new ot;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends Le{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],f=[],u=[],d=[];let m=0;const x=[],g=n/2;let p=0;v(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(d,2));function v(){const _=new P,w=new P;let E=0;const C=(e-t)/n;for(let b=0;b<=a;b++){const T=[],R=b/a,D=R*(e-t)+t;for(let B=0;B<=i;B++){const O=B/i,N=O*l+o,L=Math.sin(N),G=Math.cos(N);w.x=D*L,w.y=-R*n+g,w.z=D*G,f.push(w.x,w.y,w.z),_.set(L,C,G).normalize(),u.push(_.x,_.y,_.z),d.push(O,1-R),T.push(m++)}x.push(T)}for(let b=0;b<i;b++)for(let T=0;T<a;T++){const R=x[T][b],D=x[T+1][b],B=x[T+1][b+1],O=x[T][b+1];(t>0||T!==0)&&(h.push(R,D,O),E+=3),(e>0||T!==a-1)&&(h.push(D,B,O),E+=3)}c.addGroup(p,E,0),p+=E}function S(_){const w=m,E=new ot,C=new P;let b=0;const T=_===!0?t:e,R=_===!0?1:-1;for(let B=1;B<=i;B++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),m++;const D=m;for(let B=0;B<=i;B++){const N=B/i*l+o,L=Math.cos(N),G=Math.sin(N);C.x=T*G,C.y=g*R,C.z=T*L,f.push(C.x,C.y,C.z),u.push(0,R,0),E.x=L*.5+.5,E.y=G*.5*R+.5,d.push(E.x,E.y),m++}for(let B=0;B<i;B++){const O=w+B,N=D+B;_===!0?h.push(N,N+1,O):h.push(N+1,N,O),b+=3}c.addGroup(p,b,_===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vs extends Fe{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Vs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dl extends Le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),c(n),h(),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(a.slice(),3)),this.setAttribute("uv",new te(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new P,_=new P,w=new P;for(let E=0;E<e.length;E+=3)d(e[E+0],S),d(e[E+1],_),d(e[E+2],w),l(S,_,w,v)}function l(v,S,_,w){const E=w+1,C=[];for(let b=0;b<=E;b++){C[b]=[];const T=v.clone().lerp(_,b/E),R=S.clone().lerp(_,b/E),D=E-b;for(let B=0;B<=D;B++)B===0&&b===E?C[b][B]=T:C[b][B]=T.clone().lerp(R,B/D)}for(let b=0;b<E;b++)for(let T=0;T<2*(E-b)-1;T++){const R=Math.floor(T/2);T%2===0?(u(C[b][R+1]),u(C[b+1][R]),u(C[b][R])):(u(C[b][R+1]),u(C[b+1][R+1]),u(C[b+1][R]))}}function c(v){const S=new P;for(let _=0;_<a.length;_+=3)S.x=a[_+0],S.y=a[_+1],S.z=a[_+2],S.normalize().multiplyScalar(v),a[_+0]=S.x,a[_+1]=S.y,a[_+2]=S.z}function h(){const v=new P;for(let S=0;S<a.length;S+=3){v.x=a[S+0],v.y=a[S+1],v.z=a[S+2];const _=g(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;r.push(_,1-w)}m(),f()}function f(){for(let v=0;v<r.length;v+=6){const S=r[v+0],_=r[v+2],w=r[v+4],E=Math.max(S,_,w),C=Math.min(S,_,w);E>.9&&C<.1&&(S<.2&&(r[v+0]+=1),_<.2&&(r[v+2]+=1),w<.2&&(r[v+4]+=1))}}function u(v){a.push(v.x,v.y,v.z)}function d(v,S){const _=v*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function m(){const v=new P,S=new P,_=new P,w=new P,E=new ot,C=new ot,b=new ot;for(let T=0,R=0;T<a.length;T+=9,R+=6){v.set(a[T+0],a[T+1],a[T+2]),S.set(a[T+3],a[T+4],a[T+5]),_.set(a[T+6],a[T+7],a[T+8]),E.set(r[R+0],r[R+1]),C.set(r[R+2],r[R+3]),b.set(r[R+4],r[R+5]),w.copy(v).add(S).add(_).divideScalar(3);const D=g(w);x(E,R+0,v,D),x(C,R+2,S,D),x(b,R+4,_,D)}}function x(v,S,_,w){w<0&&v.x===1&&(r[S]=v.x-1),_.x===0&&_.z===0&&(r[S]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.vertices,t.indices,t.radius,t.detail)}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(a-1);const h=n[i],u=n[i+1]-h,d=(r-h)/u;return(i+d)/(a-1)}getTangent(t,e){let i=t-1e-4,a=t+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),l=e||(r.isVector2?new ot:new P);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],a=[],r=[],o=new P,l=new ie;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new P)}a[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Jt(i[d-1].dot(i[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,m))}r[d].crossVectors(i[d],a[d])}if(e===!0){let d=Math.acos(Jt(a[0].dot(a[t]),-1,1));d/=t,i[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let m=1;m<=t;m++)a[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),r[m].crossVectors(i[m],a[m])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pl extends Nn{constructor(t=0,e=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){const n=e,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ku extends pl{constructor(t,e,n,i,a,r){super(t,e,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ml(){let s=0,t=0,e=0,n=0;function i(a,r,o,l){s=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){i(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,f){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+f)+(l-o)/f;u*=h,d*=h,i(r,o,u,d)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+n*o}}}const ec=new P,nc=new P,Ir=new ml,Dr=new ml,Nr=new ml;class cs extends Nn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,a=i.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%a]:(nc.subVectors(i[0],i[1]).add(i[0]),c=nc);const f=i[o%a],u=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(ec.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ir.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,g),Dr.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,g),Nr.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Ir.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Dr.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Nr.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Ir.calc(l),Dr.calc(l),Nr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(s,t,e,n,i){const a=(n-t)*.5,r=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*s+e}function zu(s,t){const e=1-s;return e*e*t}function Hu(s,t){return 2*(1-s)*s*t}function Vu(s,t){return s*s*t}function Is(s,t,e,n){return zu(s,t)+Hu(s,e)+Vu(s,n)}function Gu(s,t){const e=1-s;return e*e*e*t}function Wu(s,t){const e=1-s;return 3*e*e*s*t}function Xu(s,t){return 3*(1-s)*s*s*t}function qu(s,t){return s*s*s*t}function Ds(s,t,e,n,i){return Gu(s,t)+Wu(s,e)+Xu(s,n)+qu(s,i)}class Nh extends Nn{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ds(t,i.x,a.x,r.x,o.x),Ds(t,i.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $u extends Nn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ds(t,i.x,a.x,r.x,o.x),Ds(t,i.y,a.y,r.y,o.y),Ds(t,i.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uh extends Nn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yu extends Nn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends Nn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(Is(t,i.x,a.x,r.x),Is(t,i.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends Nn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(Is(t,i.x,a.x,r.x),Is(t,i.y,a.y,r.y),Is(t,i.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,a=(i.length-1)*t,r=Math.floor(a),o=a-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(ic(o,l.x,c.x,h.x,f.x),ic(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var Va=Object.freeze({__proto__:null,ArcCurve:ku,CatmullRomCurve3:cs,CubicBezierCurve:Nh,CubicBezierCurve3:$u,EllipseCurve:pl,LineCurve:Uh,LineCurve3:Yu,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:Oh,SplineCurve:Bh});class Zu extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const r=i[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const r=a[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Va[i.type]().fromJSON(i))}return this}}class ko extends Zu{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uh(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const a=new Fh(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,a,r){const o=new Nh(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,a,r),this}absarc(t,e,n,i,a,r){return this.absellipse(t,e,n,n,i,a,r),this}ellipse(t,e,n,i,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,a,r,o,l),this}absellipse(t,e,n,i,a,r,o,l){const c=new pl(t,e,n,i,a,r,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mn extends ko{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ko().fromJSON(i))}return this}}function Ju(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let a=kh(s,0,i,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=ef(s,t,a,e)),s.length>80*e){o=s[0],l=s[1];let h=o,f=l;for(let u=e;u<i;u+=e){const d=s[u],m=s[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Gs(a,r,e,o,l,c,0),r}function kh(s,t,e,n,i){let a;if(i===df(s,t,e,n)>0)for(let r=t;r<e;r+=n)a=sc(r/n|0,s[r],s[r+1],a);else for(let r=e-n;r>=t;r-=n)a=sc(r/n|0,s[r],s[r+1],a);return a&&as(a,a.next)&&(Xs(a),a=a.next),a}function Li(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(as(e,e.next)||Se(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gs(s,t,e,n,i,a,r){if(!s)return;!r&&a&&of(s,n,i,a);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(a?Qu(s,n,i,a):Ku(s)){t.push(l.i,s.i,c.i),Xs(s),s=c.next,o=c.next;continue}if(s=c,s===o){r?r===1?(s=ju(Li(s),t),Gs(s,t,e,n,i,a,2)):r===2&&tf(s,t,e,n,i,a):Gs(Li(s),t,e,n,i,a,1);break}}}function Ku(s){const t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;const i=t.x,a=e.x,r=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,a,r),f=Math.min(o,l,c),u=Math.max(i,a,r),d=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Rs(i,o,a,l,r,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qu(s,t,e,n){const i=s.prev,a=s,r=s.next;if(Se(i,a,r)>=0)return!1;const o=i.x,l=a.x,c=r.x,h=i.y,f=a.y,u=r.y,d=Math.min(o,l,c),m=Math.min(h,f,u),x=Math.max(o,l,c),g=Math.max(h,f,u),p=zo(d,m,t,e,n),v=zo(x,g,t,e,n);let S=s.prevZ,_=s.nextZ;for(;S&&S.z>=p&&_&&_.z<=v;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=g&&S!==i&&S!==r&&Rs(o,h,l,f,c,u,S.x,S.y)&&Se(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==r&&Rs(o,h,l,f,c,u,_.x,_.y)&&Se(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=m&&S.y<=g&&S!==i&&S!==r&&Rs(o,h,l,f,c,u,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==r&&Rs(o,h,l,f,c,u,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ju(s,t){let e=s;do{const n=e.prev,i=e.next.next;!as(n,i)&&Hh(n,e,e.next,i)&&Ws(n,i)&&Ws(i,n)&&(t.push(n.i,e.i,i.i),Xs(e),Xs(e.next),e=s=i),e=e.next}while(e!==s);return Li(e)}function tf(s,t,e,n,i,a){let r=s;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&hf(r,o)){let l=Vh(r,o);r=Li(r,r.next),l=Li(l,l.next),Gs(r,t,e,n,i,a,0),Gs(l,t,e,n,i,a,0);return}o=o.next}r=r.next}while(r!==s)}function ef(s,t,e,n){const i=[];for(let a=0,r=t.length;a<r;a++){const o=t[a]*n,l=a<r-1?t[a+1]*n:s.length,c=kh(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(cf(c))}i.sort(nf);for(let a=0;a<i.length;a++)e=sf(i[a],e);return e}function nf(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function sf(s,t){const e=af(s,t);if(!e)return t;const n=Vh(e,s);return Li(n,n.next),Li(e,e.next)}function af(s,t){let e=t;const n=s.x,i=s.y;let a=-1/0,r;if(as(s,e))return e;do{if(as(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>a&&(a=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zh(i<c?n:a,i,l,c,i<c?a:n,i,e.x,e.y)){const f=Math.abs(i-e.y)/(n-e.x);Ws(e,s)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&rf(r,e)))&&(r=e,h=f)}e=e.next}while(e!==o);return r}function rf(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function of(s,t,e,n){let i=s;do i.z===0&&(i.z=zo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lf(i)}function lf(s){let t,e=1;do{let n=s,i;s=null;let a=null;for(t=0;n;){t++;let r=n,o=0;for(let c=0;c<e&&(o++,r=r.nextZ,!!r);c++);let l=e;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,l--),a?a.nextZ=i:s=i,i.prevZ=a,a=i;n=r}a.nextZ=null,e*=2}while(t>1);return s}function zo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function cf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function zh(s,t,e,n,i,a,r,o){return(i-r)*(t-o)>=(s-r)*(a-o)&&(s-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(i-r)*(n-o)}function Rs(s,t,e,n,i,a,r,o){return!(s===r&&t===o)&&zh(s,t,e,n,i,a,r,o)}function hf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!uf(s,t)&&(Ws(s,t)&&Ws(t,s)&&ff(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||as(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function as(s,t){return s.x===t.x&&s.y===t.y}function Hh(s,t,e,n){const i=ga(Se(s,t,e)),a=ga(Se(s,t,n)),r=ga(Se(e,n,s)),o=ga(Se(e,n,t));return!!(i!==a&&r!==o||i===0&&ma(s,e,t)||a===0&&ma(s,n,t)||r===0&&ma(e,s,n)||o===0&&ma(e,t,n))}function ma(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ga(s){return s>0?1:s<0?-1:0}function uf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Hh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ws(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function ff(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,a=(s.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&i<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Vh(s,t){const e=Ho(s.i,s.x,s.y),n=Ho(t.i,t.x,t.y),i=s.next,a=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function sc(s,t,e,n){const i=Ho(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ho(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function df(s,t,e,n){let i=0;for(let a=t,r=e-n;a<e;a+=n)i+=(s[r]-s[a])*(s[a+1]+s[r+1]),r=a;return i}class pf{static triangulate(t,e,n=2){return Ju(t,e,n)}}class Wn{static area(t){const e=t.length;let n=0;for(let i=e-1,a=0;a<e;i=a++)n+=t[i].x*t[a].y-t[a].x*t[i].y;return n*.5}static isClockWise(t){return Wn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],a=[];ac(t),rc(n,t);let r=t.length;e.forEach(ac);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,rc(n,e[l]);const o=pf.triangulate(n,i);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function ac(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function rc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class fi extends Le{constructor(t=new Mn([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:mf;let S,_=!1,w,E,C,b;if(p){S=p.getSpacedPoints(h),_=!0,u=!1;const it=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,it),E=new P,C=new P,b=new P}u||(g=0,d=0,m=0,x=0);const T=o.extractPoints(c);let R=T.shape;const D=T.holes;if(!Wn.isClockWise(R)){R=R.reverse();for(let it=0,rt=D.length;it<rt;it++){const lt=D[it];Wn.isClockWise(lt)&&(D[it]=lt.reverse())}}function O(it){const lt=10000000000000001e-36;let ct=it[0];for(let ft=1;ft<=it.length;ft++){const Bt=ft%it.length,Ot=it[Bt],Vt=Ot.x-ct.x,Xt=Ot.y-ct.y,I=Vt*Vt+Xt*Xt,le=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ct.x),Math.abs(ct.y)),Kt=lt*le*le;if(I<=Kt){it.splice(Bt,1),ft--;continue}ct=Ot}}O(R),D.forEach(O);const N=D.length,L=R;for(let it=0;it<N;it++){const rt=D[it];R=R.concat(rt)}function G(it,rt,lt){return rt||se("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(rt,lt)}const W=R.length;function K(it,rt,lt){let ct,ft,Bt;const Ot=it.x-rt.x,Vt=it.y-rt.y,Xt=lt.x-it.x,I=lt.y-it.y,le=Ot*Ot+Vt*Vt,Kt=Ot*I-Vt*Xt;if(Math.abs(Kt)>Number.EPSILON){const A=Math.sqrt(le),M=Math.sqrt(Xt*Xt+I*I),k=rt.x-Vt/A,V=rt.y+Ot/A,Y=lt.x-I/M,ht=lt.y+Xt/M,ut=((Y-k)*I-(ht-V)*Xt)/(Ot*I-Vt*Xt);ct=k+Ot*ut-it.x,ft=V+Vt*ut-it.y;const Z=ct*ct+ft*ft;if(Z<=2)return new ot(ct,ft);Bt=Math.sqrt(Z/2)}else{let A=!1;Ot>Number.EPSILON?Xt>Number.EPSILON&&(A=!0):Ot<-Number.EPSILON?Xt<-Number.EPSILON&&(A=!0):Math.sign(Vt)===Math.sign(I)&&(A=!0),A?(ct=-Vt,ft=Ot,Bt=Math.sqrt(le)):(ct=Ot,ft=Vt,Bt=Math.sqrt(le/2))}return new ot(ct/Bt,ft/Bt)}const q=[];for(let it=0,rt=L.length,lt=rt-1,ct=it+1;it<rt;it++,lt++,ct++)lt===rt&&(lt=0),ct===rt&&(ct=0),q[it]=K(L[it],L[lt],L[ct]);const Q=[];let j,wt=q.concat();for(let it=0,rt=N;it<rt;it++){const lt=D[it];j=[];for(let ct=0,ft=lt.length,Bt=ft-1,Ot=ct+1;ct<ft;ct++,Bt++,Ot++)Bt===ft&&(Bt=0),Ot===ft&&(Ot=0),j[ct]=K(lt[ct],lt[Bt],lt[Ot]);Q.push(j),wt=wt.concat(j)}let St;if(g===0)St=Wn.triangulateShape(L,D);else{const it=[],rt=[];for(let lt=0;lt<g;lt++){const ct=lt/g,ft=d*Math.cos(ct*Math.PI/2),Bt=m*Math.sin(ct*Math.PI/2)+x;for(let Ot=0,Vt=L.length;Ot<Vt;Ot++){const Xt=G(L[Ot],q[Ot],Bt);_t(Xt.x,Xt.y,-ft),ct===0&&it.push(Xt)}for(let Ot=0,Vt=N;Ot<Vt;Ot++){const Xt=D[Ot];j=Q[Ot];const I=[];for(let le=0,Kt=Xt.length;le<Kt;le++){const A=G(Xt[le],j[le],Bt);_t(A.x,A.y,-ft),ct===0&&I.push(A)}ct===0&&rt.push(I)}}St=Wn.triangulateShape(it,rt)}const ee=St.length,Wt=m+x;for(let it=0;it<W;it++){const rt=u?G(R[it],wt[it],Wt):R[it];_?(C.copy(w.normals[0]).multiplyScalar(rt.x),E.copy(w.binormals[0]).multiplyScalar(rt.y),b.copy(S[0]).add(C).add(E),_t(b.x,b.y,b.z)):_t(rt.x,rt.y,0)}for(let it=1;it<=h;it++)for(let rt=0;rt<W;rt++){const lt=u?G(R[rt],wt[rt],Wt):R[rt];_?(C.copy(w.normals[it]).multiplyScalar(lt.x),E.copy(w.binormals[it]).multiplyScalar(lt.y),b.copy(S[it]).add(C).add(E),_t(b.x,b.y,b.z)):_t(lt.x,lt.y,f/h*it)}for(let it=g-1;it>=0;it--){const rt=it/g,lt=d*Math.cos(rt*Math.PI/2),ct=m*Math.sin(rt*Math.PI/2)+x;for(let ft=0,Bt=L.length;ft<Bt;ft++){const Ot=G(L[ft],q[ft],ct);_t(Ot.x,Ot.y,f+lt)}for(let ft=0,Bt=D.length;ft<Bt;ft++){const Ot=D[ft];j=Q[ft];for(let Vt=0,Xt=Ot.length;Vt<Xt;Vt++){const I=G(Ot[Vt],j[Vt],ct);_?_t(I.x,I.y+S[h-1].y,S[h-1].x+lt):_t(I.x,I.y,f+lt)}}}ae(),J();function ae(){const it=i.length/3;if(u){let rt=0,lt=W*rt;for(let ct=0;ct<ee;ct++){const ft=St[ct];zt(ft[2]+lt,ft[1]+lt,ft[0]+lt)}rt=h+g*2,lt=W*rt;for(let ct=0;ct<ee;ct++){const ft=St[ct];zt(ft[0]+lt,ft[1]+lt,ft[2]+lt)}}else{for(let rt=0;rt<ee;rt++){const lt=St[rt];zt(lt[2],lt[1],lt[0])}for(let rt=0;rt<ee;rt++){const lt=St[rt];zt(lt[0]+W*h,lt[1]+W*h,lt[2]+W*h)}}n.addGroup(it,i.length/3-it,0)}function J(){const it=i.length/3;let rt=0;nt(L,rt),rt+=L.length;for(let lt=0,ct=D.length;lt<ct;lt++){const ft=D[lt];nt(ft,rt),rt+=ft.length}n.addGroup(it,i.length/3-it,1)}function nt(it,rt){let lt=it.length;for(;--lt>=0;){const ct=lt;let ft=lt-1;ft<0&&(ft=it.length-1);for(let Bt=0,Ot=h+g*2;Bt<Ot;Bt++){const Vt=W*Bt,Xt=W*(Bt+1),I=rt+ct+Vt,le=rt+ft+Vt,Kt=rt+ft+Xt,A=rt+ct+Xt;Et(I,le,Kt,A)}}}function _t(it,rt,lt){l.push(it),l.push(rt),l.push(lt)}function zt(it,rt,lt){Ht(it),Ht(rt),Ht(lt);const ct=i.length/3,ft=v.generateTopUV(n,i,ct-3,ct-2,ct-1);ue(ft[0]),ue(ft[1]),ue(ft[2])}function Et(it,rt,lt,ct){Ht(it),Ht(rt),Ht(ct),Ht(rt),Ht(lt),Ht(ct);const ft=i.length/3,Bt=v.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);ue(Bt[0]),ue(Bt[1]),ue(Bt[3]),ue(Bt[1]),ue(Bt[2]),ue(Bt[3])}function Ht(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function ue(it){a.push(it.x),a.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gf(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Va[i.type]().fromJSON(i)),new fi(n,t.options)}}const mf={generateTopUV:function(s,t,e,n,i){const a=t[e*3],r=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ot(a,r),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(s,t,e,n,i,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],m=t[i*3+2],x=t[a*3],g=t[a*3+1],p=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new ot(r,1-l),new ot(c,1-f),new ot(u,1-m),new ot(x,1-p)]:[new ot(o,1-l),new ot(h,1-f),new ot(d,1-m),new ot(g,1-p)]}};function gf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const a=s[n];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ns extends dl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ns(t.radius,t.detail)}}class Qa extends Le{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);const a=[],r=[],o=[],l=[],c=[],h=1/e,f=new P,u=new ot,d=new P,m=new P,x=new P;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let v=0;v<=e;v++){const S=n+v*h*i,_=Math.sin(S),w=Math.cos(S);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*_,f.y=t[E].y,f.z=t[E].x*w,r.push(f.x,f.y,f.z),u.x=v/e,u.y=E/(t.length-1),o.push(u.x,u.y);const C=l[3*E+0]*_,b=l[3*E+1],T=l[3*E+0]*w;c.push(C,b,T)}}for(let v=0;v<e;v++)for(let S=0;S<t.length-1;S++){const _=S+v*t.length,w=_,E=_+t.length,C=_+t.length+1,b=_+1;a.push(w,E,b),a.push(C,b,E)}this.setIndex(a),this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.points,t.segments,t.phiStart,t.phiLength)}}class Ye extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const v=p*u-r;for(let S=0;S<c;S++){const _=S*f-a;m.push(_,-v,0),x.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const S=v+c*p,_=v+c*(p+1),w=v+1+c*(p+1),E=v+1+c*p;d.push(S,_,E),d.push(_,w,E)}this.setIndex(d),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tn extends Le{constructor(t=new Mn([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],a=[],r=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(r,2));function c(h){const f=i.length/3,u=h.extractPoints(e);let d=u.shape;const m=u.holes;Wn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Wn.isClockWise(v)===!0&&(m[g]=v.reverse())}const x=Wn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];d=d.concat(v)}for(let g=0,p=d.length;g<p;g++){const v=d[g];i.push(v.x,v.y,0),a.push(0,0,1),r.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){const v=x[g],S=v[0]+f,_=v[1]+f,w=v[2]+f;n.push(S,_,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return vf(e,t)}static fromJSON(t,e){const n=[];for(let i=0,a=t.shapes.length;i<a;i++){const r=e[t.shapes[i]];n.push(r)}return new Tn(n,t.curveSegments)}}function vf(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Me extends Le{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],f=new P,u=new P,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const v=[],S=p/n,_=r+S*o,w=t*Math.cos(_),E=Math.sqrt(t*t-w*w);let C=0;p===0&&r===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let b=0;b<=e;b++){const T=b/e,R=i+T*a;f.x=-E*Math.cos(R),f.y=w,f.z=E*Math.sin(R),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(T+C,1-S),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const S=h[p][v+1],_=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||r>0)&&d.push(S,_,E),(p!==n-1||l<Math.PI)&&d.push(_,w,E)}this.setIndex(d),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hi extends Le{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],u=new P,d=new P,m=new P;for(let x=0;x<=n;x++){const g=r+x/n*o;for(let p=0;p<=i;p++){const v=p/i*a;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){const p=(i+1)*x+g-1,v=(i+1)*(x-1)+g-1,S=(i+1)*(x-1)+g,_=(i+1)*x+g;l.push(p,v,_),l.push(v,S,_)}this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class hs extends Le{constructor(t=new Oh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new P,l=new P,c=new ot;let h=new P;const f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(d,2));function x(){for(let S=0;S<e;S++)g(S);g(a===!1?e:0),v(),p()}function g(S){h=t.getPointAt(S/e,h);const _=r.normals[S],w=r.binormals[S];for(let E=0;E<=i;E++){const C=E/i*Math.PI*2,b=Math.sin(C),T=-Math.cos(C);l.x=T*_.x+b*w.x,l.y=T*_.y+b*w.y,l.z=T*_.z+b*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let _=1;_<=i;_++){const w=(i+1)*(S-1)+(_-1),E=(i+1)*S+(_-1),C=(i+1)*S+_,b=(i+1)*(S-1)+_;m.push(w,E,b),m.push(E,C,b)}}function v(){for(let S=0;S<=e;S++)for(let _=0;_<=i;_++)c.x=S/e,c.y=_/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new hs(new Va[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function rs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(oc(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(oc(i[0])){const a=[];for(let r=0,o=i.length;r<o;r++)a[r]=i[r].clone();t[e][n]=a}else t[e][n]=i.slice();else t[e][n]=i}}return t}function qe(s){const t={};for(let e=0;e<s.length;e++){const n=rs(s[e]);for(const i in n)t[i]=n[i]}return t}function oc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const _f={clone:rs,merge:qe};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new be().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Sf extends Dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pe extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yf extends ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wf extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ef extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gl extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Wh extends gl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ur=new ie,lc=new P,cc=new P;class Xh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ur,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=i?i.z/a.x:1,o=i?i.w/a.y:1,l=i?i.x/a.x:0,c=i?i.y/a.y:0;t.coordinateSystem===zs||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const va=new P,xa=new Ge,wn=new P;class qh extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(va,xa,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,xa,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(va,xa,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,xa,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ei=new P,hc=new ot,uc=new ot;class nn extends qh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Tf extends Xh{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}}class Af extends gl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ja extends qh{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Cf extends Xh{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Cf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Yi=-90,Zi=1;class Rf extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(Yi,Zi,t,e);i.layers=this.layers,this.add(i);const a=new nn(Yi,Zi,t,e);a.layers=this.layers,this.add(a);const r=new nn(Yi,Zi,t,e);r.layers=this.layers,this.add(r);const o=new nn(Yi,Zi,t,e);o.layers=this.layers,this.add(o);const l=new nn(Yi,Zi,t,e);l.layers=this.layers,this.add(l);const c=new nn(Yi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Pf extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const fc=new ie;class Lf{constructor(t,e,n=0,i=1/0){this.ray=new Ph(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(t,e=!0,n=[]){return Vo(t,this,n,e),n.sort(dc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)Vo(t[i],this,n,e);return n.sort(dc),n}}function dc(s,t){return s.distance-t.distance}function Vo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)Vo(a[r],t,e,!0)}}class Yh{static{Yh.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const a=this.elements;return a[0]=t,a[2]=e,a[1]=n,a[3]=i,this}}function pc(s,t,e,n){const i=If(n);switch(e){case yh:return s*t;case il:return s*t/i.components*i.byteLength;case sl:return s*t/i.components*i.byteLength;case Pi:return s*t*2/i.components*i.byteLength;case al:return s*t*2/i.components*i.byteLength;case wh:return s*t*3/i.components*i.byteLength;case xn:return s*t*4/i.components*i.byteLength;case rl:return s*t*4/i.components*i.byteLength;case Ta:case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lo:case ho:return Math.max(s,16)*Math.max(t,8)/4;case oo:case co:return Math.max(s,8)*Math.max(t,8)/2;case uo:case fo:case mo:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case po:case Fa:case vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Io:case Do:case No:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Uo:case Fo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Oa:case Oo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function If(s){switch(s){case sn:case _h:return{byteLength:1,components:1};case Bs:case Mh:case In:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case Ln:case tl:case vn:return{byteLength:4,components:1};case bh:case Sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);function Zh(){let s=null,t=!1,e=null,n=null;function i(a,r){n=s.requestAnimationFrame(i),e(a,r)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Df(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const x=f[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var Nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Id=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Nf,alphahash_pars_fragment:Uf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:kf,aomap_fragment:zf,aomap_pars_fragment:Hf,batching_pars_vertex:Vf,batching_vertex:Gf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:$f,bumpmap_pars_fragment:Yf,clipping_planes_fragment:Zf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Qf,color_fragment:jf,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:sd,defaultnormal_vertex:ad,displacementmap_pars_vertex:rd,displacementmap_vertex:od,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,colorspace_fragment:hd,colorspace_pars_fragment:ud,envmap_fragment:fd,envmap_common_pars_fragment:dd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:Td,envmap_vertex:gd,fog_vertex:vd,fog_pars_vertex:xd,fog_fragment:_d,fog_pars_fragment:Md,gradientmap_pars_fragment:bd,lightmap_pars_fragment:Sd,lights_lambert_fragment:yd,lights_lambert_pars_fragment:wd,lights_pars_begin:Ed,lights_toon_fragment:Ad,lights_toon_pars_fragment:Cd,lights_phong_fragment:Rd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Id,lights_fragment_begin:Dd,lights_fragment_maps:Nd,lights_fragment_end:Ud,lightprobes_pars_fragment:Fd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:zd,map_fragment:Hd,map_pars_fragment:Vd,map_particle_fragment:Gd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:qd,morphinstance_vertex:$d,morphcolor_vertex:Yd,morphnormal_vertex:Zd,morphtarget_pars_vertex:Jd,morphtarget_vertex:Kd,normal_fragment_begin:Qd,normal_fragment_maps:jd,normal_pars_fragment:t1,normal_pars_vertex:e1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:a1,clearcoat_pars_fragment:r1,iridescence_pars_fragment:o1,opaque_fragment:l1,packing:c1,premultiplied_alpha_fragment:h1,project_vertex:u1,dithering_fragment:f1,dithering_pars_fragment:d1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:v1,shadowmap_vertex:x1,shadowmask_pars_fragment:_1,skinbase_vertex:M1,skinning_pars_vertex:b1,skinning_vertex:S1,skinnormal_vertex:y1,specularmap_fragment:w1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:A1,transmission_fragment:C1,transmission_pars_fragment:R1,uv_pars_fragment:P1,uv_pars_vertex:L1,uv_vertex:I1,worldpos_vertex:D1,background_vert:N1,background_frag:U1,backgroundCube_vert:F1,backgroundCube_frag:O1,cube_vert:B1,cube_frag:k1,depth_vert:z1,depth_frag:H1,distance_vert:V1,distance_frag:G1,equirect_vert:W1,equirect_frag:X1,linedashed_vert:q1,linedashed_frag:$1,meshbasic_vert:Y1,meshbasic_frag:Z1,meshlambert_vert:J1,meshlambert_frag:K1,meshmatcap_vert:Q1,meshmatcap_frag:j1,meshnormal_vert:tp,meshnormal_frag:ep,meshphong_vert:np,meshphong_frag:ip,meshphysical_vert:sp,meshphysical_frag:ap,meshtoon_vert:rp,meshtoon_frag:op,points_vert:lp,points_frag:cp,shadow_vert:hp,shadow_frag:up,sprite_vert:fp,sprite_frag:dp},xt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},An={basic:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qe([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qe([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qe([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:qe([xt.common,xt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:qe([xt.lights,xt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};An.physical={uniforms:qe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const _a={r:0,b:0,g:0},pp=new ie,Jh=new qt;Jh.set(-1,0,0,0,1,0,0,0,1);function mp(s,t,e,n,i,a){const r=new Ct(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const _=v.backgroundBlurriness>0;S=t.get(S,_)}return S}function m(v){let S=!1;const _=d(v);_===null?g(r,o):_&&_.isColor&&(g(_,1),S=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,S){const _=d(S);_&&(_.isCubeTexture||_.mapping===Ka)?(c===void 0&&(c=new jt(new cn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:rs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pp.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jh),c.material.toneMapped=ne.getTransfer(_.colorSpace)!==fe,(h!==_||f!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new jt(new Ye(2,2),new Dn({name:"BackgroundMaterial",uniforms:rs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ne.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(_a,Gh(s)),e.buffers.color.setClear(_a.r,_a.g,_a.b,S,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,S=1){r.set(v),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(r,o)},render:m,addToRenderList:x,dispose:p}}function gp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(D,B,O,N,L){let G=!1;const W=f(D,N,O,B);a!==W&&(a=W,c(a.object)),G=d(D,N,O,L),G&&m(D,N,O,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,_(D,B,O,N),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,B,O,N){const L=N.wireframe===!0;let G=n[B.id];G===void 0&&(G={},n[B.id]=G);const W=D.isInstancedMesh===!0?D.id:0;let K=G[W];K===void 0&&(K={},G[W]=K);let q=K[O.id];q===void 0&&(q={},K[O.id]=q);let Q=q[L];return Q===void 0&&(Q=u(l()),q[L]=Q),Q}function u(D){const B=[],O=[],N=[];for(let L=0;L<e;L++)B[L]=0,O[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:N,object:D,attributes:{},index:null}}function d(D,B,O,N){const L=a.attributes,G=B.attributes;let W=0;const K=O.getAttributes();for(const q in K)if(K[q].location>=0){const j=L[q];let wt=G[q];if(wt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(wt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(wt=D.instanceColor)),j===void 0||j.attribute!==wt||wt&&j.data!==wt.data)return!0;W++}return a.attributesNum!==W||a.index!==N}function m(D,B,O,N){const L={},G=B.attributes;let W=0;const K=O.getAttributes();for(const q in K)if(K[q].location>=0){let j=G[q];j===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const wt={};wt.attribute=j,j&&j.data&&(wt.data=j.data),L[q]=wt,W++}a.attributes=L,a.attributesNum=W,a.index=N}function x(){const D=a.newAttributes;for(let B=0,O=D.length;B<O;B++)D[B]=0}function g(D){p(D,0)}function p(D,B){const O=a.newAttributes,N=a.enabledAttributes,L=a.attributeDivisors;O[D]=1,N[D]===0&&(s.enableVertexAttribArray(D),N[D]=1),L[D]!==B&&(s.vertexAttribDivisor(D,B),L[D]=B)}function v(){const D=a.newAttributes,B=a.enabledAttributes;for(let O=0,N=B.length;O<N;O++)B[O]!==D[O]&&(s.disableVertexAttribArray(O),B[O]=0)}function S(D,B,O,N,L,G,W){W===!0?s.vertexAttribIPointer(D,B,O,L,G):s.vertexAttribPointer(D,B,O,N,L,G)}function _(D,B,O,N){x();const L=N.attributes,G=O.getAttributes(),W=B.defaultAttributeValues;for(const K in G){const q=G[K];if(q.location>=0){let Q=L[K];if(Q===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const j=Q.normalized,wt=Q.itemSize,St=t.get(Q);if(St===void 0)continue;const ee=St.buffer,Wt=St.type,ae=St.bytesPerElement,J=Wt===s.INT||Wt===s.UNSIGNED_INT||Q.gpuType===tl;if(Q.isInterleavedBufferAttribute){const nt=Q.data,_t=nt.stride,zt=Q.offset;if(nt.isInstancedInterleavedBuffer){for(let Et=0;Et<q.locationSize;Et++)p(q.location+Et,nt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Et=0;Et<q.locationSize;Et++)g(q.location+Et);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Et=0;Et<q.locationSize;Et++)S(q.location+Et,wt/q.locationSize,Wt,j,_t*ae,(zt+wt/q.locationSize*Et)*ae,J)}else{if(Q.isInstancedBufferAttribute){for(let nt=0;nt<q.locationSize;nt++)p(q.location+nt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let nt=0;nt<q.locationSize;nt++)g(q.location+nt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let nt=0;nt<q.locationSize;nt++)S(q.location+nt,wt/q.locationSize,Wt,j,wt*ae,wt/q.locationSize*nt*ae,J)}}else if(W!==void 0){const j=W[K];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(q.location,j);break;case 3:s.vertexAttrib3fv(q.location,j);break;case 4:s.vertexAttrib4fv(q.location,j);break;default:s.vertexAttrib1fv(q.location,j)}}}}v()}function w(){T();for(const D in n){const B=n[D];for(const O in B){const N=B[O];for(const L in N){const G=N[L];for(const W in G)h(G[W].object),delete G[W];delete N[L]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const B=n[D.id];for(const O in B){const N=B[O];for(const L in N){const G=N[L];for(const W in G)h(G[W].object),delete G[W];delete N[L]}}delete n[D.id]}function C(D){for(const B in n){const O=n[B];for(const N in O){const L=O[N];if(L[D.id]===void 0)continue;const G=L[D.id];for(const W in G)h(G[W].object),delete G[W];delete L[D.id]}}}function b(D){for(const B in n){const O=n[B],N=D.isInstancedMesh===!0?D.id:0,L=O[N];if(L!==void 0){for(const G in L){const W=L[G];for(const K in W)h(W[K].object),delete W[K];delete L[G]}delete O[N],Object.keys(O).length===0&&delete n[B]}}}function T(){R(),r=!0,a!==i&&(a=i,c(a.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function vp(s,t,e){let n;function i(l){n=l}function a(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function xp(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==xn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==sn&&C!==vn&&!b&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:_,maxSamples:w,samples:E}}function _p(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new ii,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||a&&!g)a?h(null):c();else{const v=a?0:n,S=v*4;let _=p.clippingState||null;l.value=_,_=h(m,u,S,d);for(let w=0;w!==S;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,_=d;S!==x;++S,_+=4)r.copy(f[S]).applyMatrix4(v,o),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const es=4,Mp=6,bp=20,Sp=256,_s=new ja,mc=new Ct;let Fr=null,Or=0,Br=0,kr=!1;const yp=new P,Mi=new P;class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,a={}){const{size:r=256,position:o=yp}=a;Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr,Or,Br),this._renderer.xr.enabled=kr,t.scissorTest=!1,Ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:In,format:xn,colorSpace:ka,depthBuffer:!1},i=gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wp(a)),this._blurMaterial=Tp(a,t,e),this._ggxMaterial=Ep(a,t,e)}return i}_compileMaterial(t){const e=new jt(new Le,t);this._renderer.compile(e,_s)}_sceneToCubeUV(t,e,n,i,a){const l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(mc),f.toneMapping=Pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new cn,new pi({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(mc),p=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[S],a.y,a.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[S]));const w=this._cubeSize;Ji(i,_*w,S>2?w:0,w,w),f.setRenderTarget(i),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ri||t.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const a=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Ji(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,_s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let a=1;a<i;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-es?n-m+es:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Ji(a,g,p,3*x,2*x),i.setRenderTarget(a),i.render(o,_s),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=m-n,Ji(t,g,p,3*x,2*x),i.setRenderTarget(t),i.render(o,_s)}_blur(t,e,n,i){const a=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,n,r),this._blurPass(a,t,n,n,r)}_blurPass(t,e,n,i,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],f=3*h*(i>this._lodMax-es?i-this._lodMax+es:0),u=4*(this._cubeSize-h);Ji(e,f,u,3*h,2*h),r.setRenderTarget(e),r.render(l,_s)}}function wp(s){const t=[],e=[];let n=s;const i=s-es+1+Mp;for(let a=0;a<i;a++){const r=Math.pow(2,n);t.push(r);const o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let p=0;p<f;p++){const v=p%3*2/3-1,S=p>2?0:-1,_=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];m.set(_,d*u*p);for(let w=0;w<u;w++){const E=h[w*2]*2-1,C=h[w*2+1]*2-1;p===0?Mi.set(1,C,E):p===1?Mi.set(-E,1,-C):p===2?Mi.set(-E,C,1):p===3?Mi.set(-1,C,-E):p===4?Mi.set(-E,-1,C):Mi.set(E,C,-1),Mi.toArray(x,(p*u+w)*d)}}const g=new Le;g.setAttribute("position",new je(m,d)),g.setAttribute("outputDirection",new je(x,d)),e.push(new jt(g,null)),n>es&&n--}return{lodMeshes:e,sizeLods:t}}function gc(s,t,e){const n=new _n(s,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ep(s,t,e){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Tp(s,t,e){return new Dn({name:"SphericalGaussianBlur",defines:{SAMPLES:bp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function vc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function xc(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function tr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Kh extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ih(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cn(5,5,5),a=new Dn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Xn});a.uniforms.tEquirect.value=e;const r=new jt(i,a),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Ve),new Rf(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}function Ap(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===rr||d===or)if(t.has(u)){const m=t.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const x=new Kh(m.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,m=d===rr||d===or,x=d===Ri||d===ss;if(m||x){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ga(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Ga(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===rr?u.mapping=Ri:d===or&&(u.mapping=ss),u}function l(u){let d=0;const m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Cp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ns("WebGLRenderer: "+n+" extension not supported."),i}}}function Rp(s,t,e,n){const i={},a=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete i[u.id];const d=a.get(u);d&&(t.remove(d),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let x=0;if(m===void 0)return;if(d!==null){const v=d.array;x=d.version;for(let S=0,_=v.length;S<_;S+=3){const w=v[S+0],E=v[S+1],C=v[S+2];u.push(w,E,E,C,C,w)}}else{const v=m.array;x=m.version;for(let S=0,_=v.length/3-1;S<_;S+=3){const w=S+0,E=S+1,C=S+2;u.push(w,E,E,C,C,w)}}const g=new(m.count>=65535?Rh:Ch)(u,1);g.version=x;const p=a.get(f);p&&t.remove(p),a.set(f,g)}function h(f){const u=a.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Pp(s,t,e){let n;function i(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,u){s.drawElements(n,u,a,f*r),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,a,f*r,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:se("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ip(s,t,e){const n=new WeakMap,i=new be;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let _=o.attributes.position.count*S,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*w*4*f),C=new Th(E,_,w,f);C.type=vn,C.needsUpdate=!0;const b=S*4;for(let R=0;R<f;R++){const D=g[R],B=p[R],O=v[R],N=_*w*4*R;for(let L=0;L<D.count;L++){const G=L*b;d===!0&&(i.fromBufferAttribute(D,L),E[N+G+0]=i.x,E[N+G+1]=i.y,E[N+G+2]=i.z,E[N+G+3]=0),m===!0&&(i.fromBufferAttribute(B,L),E[N+G+4]=i.x,E[N+G+5]=i.y,E[N+G+6]=i.z,E[N+G+7]=0),x===!0&&(i.fromBufferAttribute(O,L),E[N+G+8]=i.x,E[N+G+9]=i.y,E[N+G+10]=i.z,E[N+G+11]=O.itemSize===4?i.w:1)}}u={count:f,texture:C,size:new ot(_,w)},n.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Dp(s,t,e,n,i){let a=new WeakMap;function r(c){const h=i.render.frame,f=c.geometry,u=t.get(c,f);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const Np={[fh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[vh]:"AGX_TONE_MAPPING",[Ja]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};function Up(s,t,e,n,i,a){const r=new _n(t,e,{type:s,depthBuffer:i,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Le;c.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new te([0,2,0,0,2,0],2));const h=new Sf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new jt(c,h),u=new ja(-1,1,1,-1,0,1);let d=null,m=null,x=!1,g,p=null,v=[],S=!1;this.setSize=function(_,w){r.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let E=0;E<v.length;E++){const C=v[E];C.setSize&&C.setSize(_,w)}},this.setEffects=function(_){v=_,S=v.length>0&&v[0].isRenderPass===!0;const w=r.width,E=r.height;v.length>0&&o===null&&(o=new _n(w,E,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new _n(w,E,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const b=v[C];b.setSize&&b.setSize(w,E)}},this.begin=function(_,w){if(x||_.toneMapping===Pn&&v.length===0)return!1;if(p=w,w!==null){const E=w.width,C=w.height;(r.width!==E||r.height!==C)&&this.setSize(E,C)}return S===!1&&_.setRenderTarget(r),g=_.toneMapping,_.toneMapping=Pn,!0},this.hasRenderPass=function(){return S},this.end=function(_,w){_.toneMapping=g,x=!0;let E=r,C=o;for(let b=0;b<v.length;b++){const T=v[b];T.enabled!==!1&&(T.render(_,C,E,w),T.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,h.defines={},ne.getTransfer(d)===fe&&(h.defines.SRGB_TRANSFER="");const b=Np[m];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(f,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Qh=new We,Go=new Hs(1,1),jh=new Th,t0=new bu,e0=new Ih,_c=[],Mc=[],bc=new Float32Array(16),Sc=new Float32Array(9),yc=new Float32Array(4);function us(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=_c[i];if(a===void 0&&(a=new Float32Array(i),_c[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function er(s,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Fp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function zp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;yc.set(n),s.uniformMatrix2fv(this.addr,!1,yc),Ne(e,n)}}function Hp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Sc.set(n),s.uniformMatrix3fv(this.addr,!1,Sc),Ne(e,n)}}function Vp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;bc.set(n),s.uniformMatrix4fv(this.addr,!1,bc),Ne(e,n)}}function Gp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function $p(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function Zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function Jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function Kp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Go.compareFunction=e.isReversedDepthBuffer()?ll:ol,a=Go):a=Qh,e.setTexture2D(t||a,i)}function Qp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||t0,i)}function jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||e0,i)}function t2(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jh,i)}function e2(s){switch(s){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return kp;case 35674:return zp;case 35675:return Hp;case 35676:return Vp;case 5124:case 35670:return Gp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return $p;case 36294:return Yp;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return t2}}function n2(s,t){s.uniform1fv(this.addr,t)}function i2(s,t){const e=us(t,this.size,2);s.uniform2fv(this.addr,e)}function s2(s,t){const e=us(t,this.size,3);s.uniform3fv(this.addr,e)}function a2(s,t){const e=us(t,this.size,4);s.uniform4fv(this.addr,e)}function r2(s,t){const e=us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function o2(s,t){const e=us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function l2(s,t){const e=us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function c2(s,t){s.uniform1iv(this.addr,t)}function h2(s,t){s.uniform2iv(this.addr,t)}function u2(s,t){s.uniform3iv(this.addr,t)}function f2(s,t){s.uniform4iv(this.addr,t)}function d2(s,t){s.uniform1uiv(this.addr,t)}function p2(s,t){s.uniform2uiv(this.addr,t)}function m2(s,t){s.uniform3uiv(this.addr,t)}function g2(s,t){s.uniform4uiv(this.addr,t)}function v2(s,t,e){const n=this.cache,i=t.length,a=er(e,i);De(n,a)||(s.uniform1iv(this.addr,a),Ne(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=Go:r=Qh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||r,a[o])}function x2(s,t,e){const n=this.cache,i=t.length,a=er(e,i);De(n,a)||(s.uniform1iv(this.addr,a),Ne(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||t0,a[r])}function _2(s,t,e){const n=this.cache,i=t.length,a=er(e,i);De(n,a)||(s.uniform1iv(this.addr,a),Ne(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||e0,a[r])}function M2(s,t,e){const n=this.cache,i=t.length,a=er(e,i);De(n,a)||(s.uniform1iv(this.addr,a),Ne(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||jh,a[r])}function b2(s){switch(s){case 5126:return n2;case 35664:return i2;case 35665:return s2;case 35666:return a2;case 35674:return r2;case 35675:return o2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return h2;case 35668:case 35672:return u2;case 35669:case 35673:return f2;case 5125:return d2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return _2;case 36289:case 36303:case 36311:case 36292:return M2}}class S2{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=e2(e.type)}}class y2{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b2(e.type)}}class w2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function wc(s,t){s.seq.push(t),s.map[t.id]=t}function E2(s,t,e){const n=s.name,i=n.length;for(zr.lastIndex=0;;){const a=zr.exec(n),r=zr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){wc(e,c===void 0?new S2(o,s,t):new y2(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new w2(o),wc(e,f)),e=f}}}class Pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);E2(o,l,this)}const i=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Ec(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const T2=37297;let A2=0;function C2(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Tc=new qt;function R2(s){ne._getMatrix(Tc,ne.workingColorSpace,s);const t=`mat3( ${Tc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case za:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ac(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+C2(s.getShaderSource(t),o)}else return a}function P2(s,t){const e=R2(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const L2={[fh]:"Linear",[dh]:"Reinhard",[ph]:"Cineon",[mh]:"ACESFilmic",[vh]:"AgX",[Ja]:"Neutral",[gh]:"Custom"};function I2(s,t){const e=L2[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ma=new P;function D2(){ne.getLuminanceCoefficients(Ma);const s=Ma.x.toFixed(4),t=Ma.y.toFixed(4),e=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function U2(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F2(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function Ps(s){return s!==""}function Cc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(s){return s.replace(O2,k2)}const B2=new Map;function k2(s,t){let e=Zt[t];if(e===void 0){const n=B2.get(t);if(n!==void 0)e=Zt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wo(e)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(s){return s.replace(z2,H2)}function H2(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Lc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const V2={[Ls]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function G2(s){return V2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const W2={[Ri]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE_UV"};function X2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":W2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const q2={[ss]:"ENVMAP_MODE_REFRACTION"};function $2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":q2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Y2={[jo]:"ENVMAP_BLENDING_MULTIPLY",[Q0]:"ENVMAP_BLENDING_MIX",[j0]:"ENVMAP_BLENDING_ADD"};function Z2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Y2[s.combine]||"ENVMAP_BLENDING_NONE"}function J2(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function K2(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=G2(e),c=X2(e),h=$2(e),f=Z2(e),u=J2(e),d=N2(e),m=U2(a),x=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ps).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(g=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?I2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,P2("linearToOutputTexel",e.outputColorSpace),D2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),r=Wo(r),r=Cc(r,e),r=Rc(r,e),o=Wo(o),o=Cc(o,e),o=Rc(o,e),r=Pc(r),o=Pc(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+g+r,_=v+p+o,w=Ec(i,i.VERTEX_SHADER,S),E=Ec(i,i.FRAGMENT_SHADER,_);i.attachShader(x,w),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(D){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(x)||"",O=i.getShaderInfoLog(w)||"",N=i.getShaderInfoLog(E)||"",L=B.trim(),G=O.trim(),W=N.trim();let K=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,E);else{const Q=Ac(i,w,"vertex"),j=Ac(i,E,"fragment");se("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+Q+`
`+j)}else L!==""?Gt("WebGLProgram: Program Info Log:",L):(G===""||W==="")&&(q=!1);q&&(D.diagnostics={runnable:K,programLog:L,vertexShader:{log:G,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(E),b=new Pa(i,x),T=F2(i,x)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,T2)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}let Q2=0;class j2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tm(t),e.set(t,n)),n}}class tm{constructor(t){this.id=Q2++,this.code=t,this.usedTimes=0}}function em(s){return s===Pi||s===Fa||s===Oa}function nm(s,t,e,n,i,a){const r=new hl,o=new j2,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,T,R,D,B,O){const N=D.fog,L=B.geometry,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,K=t.get(b.envMap||G,W),q=K&&K.mapping===Ka?K.image.height:null,Q=d[b.type];b.precision!==null&&(u=n.getMaxPrecision(b.precision),u!==b.precision&&Gt("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,wt=j!==void 0?j.length:0;let St=0;L.morphAttributes.position!==void 0&&(St=1),L.morphAttributes.normal!==void 0&&(St=2),L.morphAttributes.color!==void 0&&(St=3);let ee,Wt,ae,J;if(Q){const ve=An[Q];ee=ve.vertexShader,Wt=ve.fragmentShader}else{ee=b.vertexShader,Wt=b.fragmentShader;const ve=o.getVertexShaderStage(b),ce=o.getFragmentShaderStage(b);o.update(b,ve,ce),ae=ve.id,J=ce.id}const nt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),zt=B.isInstancedMesh===!0,Et=B.isBatchedMesh===!0,Ht=!!b.map,ue=!!b.matcap,it=!!K,rt=!!b.aoMap,lt=!!b.lightMap,ct=!!b.bumpMap&&b.wireframe===!1,ft=!!b.normalMap,Bt=!!b.displacementMap,Ot=!!b.emissiveMap,Vt=!!b.metalnessMap,Xt=!!b.roughnessMap,I=b.anisotropy>0,le=b.clearcoat>0,Kt=b.dispersion>0,A=b.retroreflectivity>0,M=b.iridescence>0,k=b.sheen>0,V=b.transmission>0,Y=I&&!!b.anisotropyMap,ht=le&&!!b.clearcoatMap,ut=le&&!!b.clearcoatNormalMap,Z=le&&!!b.clearcoatRoughnessMap,et=M&&!!b.iridescenceMap,dt=M&&!!b.iridescenceThicknessMap,Nt=k&&!!b.sheenColorMap,vt=k&&!!b.sheenRoughnessMap,pt=!!b.specularMap,Ut=!!b.specularColorMap,kt=!!b.specularIntensityMap,$t=V&&!!b.transmissionMap,F=V&&!!b.thicknessMap,mt=!!b.gradientMap,tt=!!b.alphaMap,gt=b.alphaTest>0,yt=!!b.alphaHash,st=!!b.extensions;let Ft=Pn;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const It={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:ee,fragmentShader:Wt,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Et,batchingColor:Et&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ht,matcap:ue,envMap:it,envMapMode:it&&K.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:lt,bumpMap:ct,normalMap:ft,displacementMap:Bt,emissiveMap:Ot,normalMapObjectSpace:ft&&b.normalMapType===nu,normalMapTangentSpace:ft&&b.normalMapType===Ba,packedNormalMap:ft&&b.normalMapType===Ba&&em(b.normalMap.format),metalnessMap:Vt,roughnessMap:Xt,anisotropy:I,anisotropyMap:Y,clearcoat:le,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:Z,dispersion:Kt,retroreflection:A,iridescence:M,iridescenceMap:et,iridescenceThicknessMap:dt,sheen:k,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:pt,specularColorMap:Ut,specularIntensityMap:kt,transmission:V,transmissionMap:$t,thicknessMap:F,gradientMap:mt,opaque:b.transparent===!1&&b.blending===ci&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:yt,combine:b.combine,mapUv:Ht&&m(b.map.channel),aoMapUv:rt&&m(b.aoMap.channel),lightMapUv:lt&&m(b.lightMap.channel),bumpMapUv:ct&&m(b.bumpMap.channel),normalMapUv:ft&&m(b.normalMap.channel),displacementMapUv:Bt&&m(b.displacementMap.channel),emissiveMapUv:Ot&&m(b.emissiveMap.channel),metalnessMapUv:Vt&&m(b.metalnessMap.channel),roughnessMapUv:Xt&&m(b.roughnessMap.channel),anisotropyMapUv:Y&&m(b.anisotropyMap.channel),clearcoatMapUv:ht&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&m(b.sheenRoughnessMap.channel),specularMapUv:pt&&m(b.specularMap.channel),specularColorMapUv:Ut&&m(b.specularColorMap.channel),specularIntensityMapUv:kt&&m(b.specularIntensityMap.channel),transmissionMapUv:$t&&m(b.transmissionMap.channel),thicknessMapUv:F&&m(b.thicknessMap.channel),alphaMapUv:tt&&m(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ft||I),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(Ht||tt),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&ft===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:St,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Ht&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===fe,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$e,flipSided:b.side===Ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)T.push(R),T.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(p(T,b),v(T,b),T.push(s.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function p(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numSunLights),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numSunLightShadows),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),b.push(r.mask)}function S(b){const T=d[b.type];let R;if(T){const D=An[T];R=_f.clone(D.uniforms)}else R=b.uniforms;return R}function _(b,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new K2(s,T,b,i),c.push(R),h.set(T,R)),R}function w(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function E(b){o.remove(b)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function im(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function sm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Ic(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Dc(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,x,g,p){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:r(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},s[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=r(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=p),t++,v}function l(u,d,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);const S=o(u,d,m,x,g,p);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):e.push(S)}function c(u,d,m,x,g,p){const v=o(u,d,m,x,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||sm),n.length>1&&n.sort(d||Ic),i.length>1&&i.sort(d||Ic)}function f(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:l,unshift:c,finish:f,sort:h}}function am(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Dc,s.set(n,[r])):i>=a.length?(r=new Dc,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function rm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ct};break;case"SpotLight":e={position:new P,direction:new P,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function om(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let lm=0;function cm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hm(s){const t=new rm,e=om(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,a=new ie,r=new ie;function o(c){let h=0,f=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,v=0,S=0,_=0,w=0,E=0,C=0,b=0,T=0,R=0;c.sort(cm);for(let B=0,O=c.length;B<O;B++){const N=c[B],L=N.color,G=N.intensity,W=N.distance;let K=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Pi?K=N.shadow.map.texture:K=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=L.r*G,f+=L.g*G,u+=L.b*G;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],G);R++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,j=e.get(N);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=K;const wt=Q.getViewportCount();for(let St=0;St<wt;St++)n.sunShadowMatrix[x+St]=Q.getMatrix(St),n.sunShadowCascade[x+St]=Q._cascadeData[St];x+=wt,m++}n.sun[d]=q,d++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,j=e.get(N);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=N.shadow.matrix,w++}n.directional[g]=q,g++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(L).multiplyScalar(G),q.distance=W,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[v]=q;const Q=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,Q.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[v]=Q.matrix,N.castShadow){const j=e.get(N);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=K,C++}v++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(L).multiplyScalar(G),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=q,S++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const Q=N.shadow,j=e.get(N);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=q,p++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(G),q.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[_]=q,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.sunLength!==d||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==_||D.numSunShadows!==m||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==C||D.numSpotMaps!==b||D.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=S,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.sunLength=d,D.directionalLength=g,D.pointLength=p,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=_,D.numSunShadows=m,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=C,D.numSpotMaps=b,D.numLightProbes=R,n.version=lm++)}function l(c,h){let f=0,u=0,d=0,m=0,x=0,g=0;const p=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const _=c[v];if(_.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),f++}else if(_.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(_.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),r.identity(),a.copy(_.matrixWorld),a.premultiply(p),r.extractRotation(a),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),x++}else if(_.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Nc(s){const t=new hm(s),e=[],n=[],i=[];function a(u){f.camera=u,e.length=0,n.length=0,i.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function um(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Nc(s),t.set(i,[o])):a>=r.length?(o=new Nc(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pm=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],mm=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Uc=new ie,Ms=new P,Hr=new P;function gm(s,t,e){let n=new fl;const i=new ot,a=new ot,r=new be,o=new wf,l=new Ef,c={},h=e.maxTextureSize,f={[ui]:Ze,[Ze]:ui,[$e]:$e},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:fm,fragmentShader:dm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Le;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let p=this.type;this.render=function(E,C,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===D0&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);const T=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Xn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==this.type;O&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(L=>L.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,L=E.length;N<L;N++){const G=E[N],W=G.shadow;if(W===void 0){Gt("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const K=W.getFrameExtents();i.multiply(K),a.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/K.x),i.x=a.x*K.x,W.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/K.y),i.y=a.y*K.y,W.mapSize.y=a.y));const q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Cs){if(G.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new _n(i.x,i.y,{format:Pi,type:In,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new Hs(i.x,i.y,vn),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=$n,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Be,W.map.depthTexture.magFilter=Be}else G.isPointLight?(W.map=new Kh(i.x),W.map.depthTexture=new Bu(i.x,Ln)):(W.map=new _n(i.x,i.y),W.map.depthTexture=new Hs(i.x,i.y,Ln)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=$n,this.type===Ls?(W.map.depthTexture.compareFunction=q?ll:ol,W.map.depthTexture.minFilter=Ve,W.map.depthTexture.magFilter=Ve):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Be,W.map.depthTexture.magFilter=Be);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();G.isPointLight!==!0&&W.updateMatrices(G,b);for(let j=0;j<Q;j++){const wt=W.getCamera(j);if(G.isPointLight){const St=W.camera,ee=W.matrix,Wt=G.distance||St.far;Wt!==St.far&&(St.far=Wt,St.updateProjectionMatrix()),Ms.setFromMatrixPosition(G.matrixWorld),St.position.copy(Ms),Hr.copy(St.position),Hr.add(pm[j]),St.up.copy(mm[j]),St.lookAt(Hr),St.updateMatrixWorld(),ee.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Uc.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Uc,St.coordinateSystem,St.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,j),s.clear();else{j===0&&(s.setRenderTarget(W.map),s.clear());const St=W.getViewport(j);r.set(a.x*St.x,a.y*St.y,a.x*St.z,a.y*St.w),B.viewport(r)}n=W.getFrustum(j),_(C,b,wt,G,this.type)}W.isPointLightShadow!==!0&&this.type===Cs&&v(W,b),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,R,D)};function v(E,C){const b=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new _n(i.x,i.y,{format:Pi,type:In}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,b,u,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,b,d,x,null)}function S(E,C,b,T){let R=null;const D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=R.uuid,O=C.uuid;let N=c[B];N===void 0&&(N={},c[B]=N);let L=N[O];L===void 0&&(L=R.clone(),N[O]=L,C.addEventListener("dispose",w)),R=L}if(R.visible=C.visible,R.wireframe=C.wireframe,T===Cs?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=s.properties.get(R);B.light=b}return R}function _(E,C,b,T,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Cs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const O=t.update(E),N=E.material;if(Array.isArray(N)){const L=O.groups;for(let G=0,W=L.length;G<W;G++){const K=L[G],q=N[K.materialIndex];if(q&&q.visible){const Q=S(E,q,T,R);E.onBeforeShadow(s,E,C,b,O,Q,K),s.renderBufferDirect(b,null,O,Q,E,K),E.onAfterShadow(s,E,C,b,O,Q,K)}}}else if(N.visible){const L=S(E,N,T,R);E.onBeforeShadow(s,E,C,b,O,L,null),s.renderBufferDirect(b,null,O,L,E,null),E.onAfterShadow(s,E,C,b,O,L,null)}}const B=E.children;for(let O=0,N=B.length;O<N;O++)_(B[O],C,b,T,R)}function w(E){E.target.removeEventListener("dispose",w);for(const b in c){const T=c[b],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function vm(s,t){function e(){let F=!1;const mt=new be;let tt=null;const gt=new be(0,0,0,0);return{setMask:function(yt){tt!==yt&&!F&&(s.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){F=yt},setClear:function(yt,st,Ft,It,ve){ve===!0&&(yt*=It,st*=It,Ft*=It),mt.set(yt,st,Ft,It),gt.equals(mt)===!1&&(s.clearColor(yt,st,Ft,It),gt.copy(mt))},reset:function(){F=!1,tt=null,gt.set(-1,0,0,0)}}}function n(){let F=!1,mt=!1,tt=null,gt=null,yt=null;return{setReversed:function(st){if(mt!==st){const Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),mt=st;const It=yt;yt=null,this.setClear(It)}},getReversed:function(){return mt},setTest:function(st){st?nt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(st){tt!==st&&!F&&(s.depthMask(st),tt=st)},setFunc:function(st){if(mt&&(st=pu[st]),gt!==st){switch(st){case jr:s.depthFunc(s.NEVER);break;case to:s.depthFunc(s.ALWAYS);break;case eo:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case no:s.depthFunc(s.EQUAL);break;case io:s.depthFunc(s.GEQUAL);break;case so:s.depthFunc(s.GREATER);break;case ao:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=st}},setLocked:function(st){F=st},setClear:function(st){yt!==st&&(yt=st,mt&&(st=1-st),s.clearDepth(st))},reset:function(){F=!1,tt=null,gt=null,yt=null,mt=!1}}}function i(){let F=!1,mt=null,tt=null,gt=null,yt=null,st=null,Ft=null,It=null,ve=null;return{setTest:function(ce){F||(ce?nt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(ce){mt!==ce&&!F&&(s.stencilMask(ce),mt=ce)},setFunc:function(ce,hn,Sn){(tt!==ce||gt!==hn||yt!==Sn)&&(s.stencilFunc(ce,hn,Sn),tt=ce,gt=hn,yt=Sn)},setOp:function(ce,hn,Sn){(st!==ce||Ft!==hn||It!==Sn)&&(s.stencilOp(ce,hn,Sn),st=ce,Ft=hn,It=Sn)},setLocked:function(ce){F=ce},setClear:function(ce){ve!==ce&&(s.clearStencil(ce),ve=ce)},reset:function(){F=!1,mt=null,tt=null,gt=null,yt=null,st=null,Ft=null,It=null,ve=null}}}const a=new e,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,S=null,_=null,w=null,E=null,C=null,b=new Ct(0,0,0),T=0,R=!1,D=null,B=null,O=null,N=null,L=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=K>=2);let Q=null,j={};const wt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),ee=new be().fromArray(wt),Wt=new be().fromArray(St);function ae(F,mt,tt,gt){const yt=new Uint8Array(4),st=s.createTexture();s.bindTexture(F,st),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<tt;Ft++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(mt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return st}const J={};J[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(s.DEPTH_TEST),r.setFunc(Os),ct(!1),ft(Ll),nt(s.CULL_FACE),rt(Xn);function nt(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function _t(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function zt(F,mt){return u[F]!==mt?(s.bindFramebuffer(F,mt),u[F]=mt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function Et(F,mt){let tt=m,gt=!1;if(F){tt=d.get(mt),tt===void 0&&(tt=[],d.set(mt,tt));const yt=F.textures;if(tt.length!==yt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Ft=yt.length;st<Ft;st++)tt[st]=s.COLOR_ATTACHMENT0+st;tt.length=yt.length,gt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,gt=!0);gt&&s.drawBuffers(tt)}function Ht(F){return x!==F?(s.useProgram(F),x=F,!0):!1}const ue={[ji]:s.FUNC_ADD,[U0]:s.FUNC_SUBTRACT,[F0]:s.FUNC_REVERSE_SUBTRACT};ue[O0]=s.MIN,ue[B0]=s.MAX;const it={[k0]:s.ZERO,[z0]:s.ONE,[H0]:s.SRC_COLOR,[hh]:s.SRC_ALPHA,[$0]:s.SRC_ALPHA_SATURATE,[X0]:s.DST_COLOR,[G0]:s.DST_ALPHA,[V0]:s.ONE_MINUS_SRC_COLOR,[uh]:s.ONE_MINUS_SRC_ALPHA,[q0]:s.ONE_MINUS_DST_COLOR,[W0]:s.ONE_MINUS_DST_ALPHA,[Y0]:s.CONSTANT_COLOR,[Z0]:s.ONE_MINUS_CONSTANT_COLOR,[J0]:s.CONSTANT_ALPHA,[K0]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(F,mt,tt,gt,yt,st,Ft,It,ve,ce){if(F===Xn){g===!0&&(_t(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),F!==N0){if(F!==p||ce!==R){if((v!==ji||w!==ji)&&(s.blendEquation(s.FUNC_ADD),v=ji,w=ji),ce)switch(F){case ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fs:s.blendFunc(s.ONE,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:se("WebGLState: Invalid blending: ",F);break}else switch(F){case ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Il:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",F);break}S=null,_=null,E=null,C=null,b.set(0,0,0),T=0,p=F,R=ce}return}yt=yt||mt,st=st||tt,Ft=Ft||gt,(mt!==v||yt!==w)&&(s.blendEquationSeparate(ue[mt],ue[yt]),v=mt,w=yt),(tt!==S||gt!==_||st!==E||Ft!==C)&&(s.blendFuncSeparate(it[tt],it[gt],it[st],it[Ft]),S=tt,_=gt,E=st,C=Ft),(It.equals(b)===!1||ve!==T)&&(s.blendColor(It.r,It.g,It.b,ve),b.copy(It),T=ve),p=F,R=!1}function lt(F,mt){F.side===$e?_t(s.CULL_FACE):nt(s.CULL_FACE);let tt=F.side===Ze;mt&&(tt=!tt),ct(tt),F.blending===ci&&F.transparent===!1?rt(Xn):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),a.setMask(F.colorWrite);const gt=F.stencilWrite;o.setTest(gt),gt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}function ft(F){F!==L0?(nt(s.CULL_FACE),F!==B&&(F===Ll?s.cullFace(s.BACK):F===I0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),B=F}function Bt(F){F!==O&&(W&&s.lineWidth(F),O=F)}function Ot(F,mt,tt){F?(nt(s.POLYGON_OFFSET_FILL),(N!==mt||L!==tt)&&(N=mt,L=tt,r.getReversed()&&(mt=-mt),s.polygonOffset(mt,tt))):_t(s.POLYGON_OFFSET_FILL)}function Vt(F){F?nt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function Xt(F){F===void 0&&(F=s.TEXTURE0+G-1),Q!==F&&(s.activeTexture(F),Q=F)}function I(F,mt,tt){tt===void 0&&(Q===null?tt=s.TEXTURE0+G-1:tt=Q);let gt=j[tt];gt===void 0&&(gt={type:void 0,texture:void 0},j[tt]=gt),(gt.type!==F||gt.texture!==mt)&&(Q!==tt&&(s.activeTexture(tt),Q=tt),s.bindTexture(F,mt||J[F]),gt.type=F,gt.texture=mt)}function le(){const F=j[Q];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function M(){try{s.texSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function ht(){try{s.texStorage2D(...arguments)}catch(F){se("WebGLState:",F)}}function ut(){try{s.texStorage3D(...arguments)}catch(F){se("WebGLState:",F)}}function Z(){try{s.texImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function et(){try{s.texImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function dt(F){return f[F]!==void 0?f[F]:s.getParameter(F)}function Nt(F,mt){f[F]!==mt&&(s.pixelStorei(F,mt),f[F]=mt)}function vt(F){ee.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ee.copy(F))}function pt(F){Wt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Wt.copy(F))}function Ut(F,mt){let tt=c.get(mt);tt===void 0&&(tt=new WeakMap,c.set(mt,tt));let gt=tt.get(F);gt===void 0&&(gt=s.getUniformBlockIndex(mt,F.name),tt.set(F,gt))}function kt(F,mt){const gt=c.get(mt).get(F);l.get(mt)!==gt&&(s.uniformBlockBinding(mt,gt,F.__bindingPointIndex),l.set(mt,gt))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,j={},u={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,S=null,_=null,w=null,E=null,C=null,b=new Ct(0,0,0),T=0,R=!1,D=null,B=null,O=null,N=null,L=null,ee.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:nt,disable:_t,bindFramebuffer:zt,drawBuffers:Et,useProgram:Ht,setBlending:rt,setMaterial:lt,setFlipSided:ct,setCullFace:ft,setLineWidth:Bt,setPolygonOffset:Ot,setScissorTest:Vt,activeTexture:Xt,bindTexture:I,unbindTexture:le,compressedTexImage2D:Kt,compressedTexImage3D:A,texImage2D:Z,texImage3D:et,pixelStorei:Nt,getParameter:dt,updateUBOMapping:Ut,uniformBlockBinding:kt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:vt,viewport:pt,reset:$t}}function xm(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,M){return m?new OffscreenCanvas(A,M):Ha("canvas")}function g(A,M,k){let V=1;const Y=Kt(A);if((Y.width>k||Y.height>k)&&(V=k/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ht=Math.floor(V*Y.width),ut=Math.floor(V*Y.height);u===void 0&&(u=x(ht,ut));const Z=M?x(ht,ut):u;return Z.width=ht,Z.height=ut,Z.getContext("2d").drawImage(A,0,0,ht,ut),Gt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ht+"x"+ut+")."),Z}else return"data"in A&&Gt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function p(A){return A.generateMipmaps}function v(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,M,k,V,Y,ht=!1){if(A!==null){if(s[A]!==void 0)return s[A];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;V&&(ut=t.get("EXT_texture_norm16"),ut||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.R16_EXT),k===s.SHORT&&ut&&(Z=ut.R16_SNORM_EXT)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RG16_EXT),k===s.SHORT&&ut&&(Z=ut.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&(k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RGB16_EXT),k===s.SHORT&&ut&&(Z=ut.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),M===s.RGBA){const et=ht?za:ne.getTransfer(Y);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=et===fe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RGBA16_EXT),k===s.SHORT&&ut&&(Z=ut.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function w(A,M){let k;return A?M===null||M===Ln||M===ks?k=s.DEPTH24_STENCIL8:M===vn?k=s.DEPTH32F_STENCIL8:M===Bs&&(k=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ln||M===ks?k=s.DEPTH_COMPONENT24:M===vn?k=s.DEPTH_COMPONENT32F:M===Bs&&(k=s.DEPTH_COMPONENT16),k}function E(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==Ve?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function b(A){const M=A.target;M.removeEventListener("dispose",b),D(M)}function T(A){const M=n.get(A);if(M.__webglInit===void 0)return;const k=A.source,V=d.get(k);if(V){const Y=V[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(A),Object.keys(V).length===0&&d.delete(k)}n.remove(A)}function R(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const k=A.source,V=d.get(k);delete V[M.__cacheKey],r.memory.textures--}function D(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let Y=0;Y<M.__webglFramebuffer[V].length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[V][Y]);else s.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)s.deleteFramebuffer(M.__webglFramebuffer[V]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=A.textures;for(let V=0,Y=k.length;V<Y;V++){const ht=n.get(k[V]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),r.memory.textures--),n.remove(k[V])}n.remove(A)}let B=0;function O(){B=0}function N(){return B}function L(A){B=A}function G(){const A=B;return A>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,A}function W(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){const k=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const V=A.image;if(V===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(k,A,M);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function q(A,M){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){_t(k,A,M);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function Q(A,M){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){_t(k,A,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function j(A,M){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){zt(k,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const wt={[Ua]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[ro]:s.MIRRORED_REPEAT},St={[Be]:s.NEAREST,[tu]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[lr]:s.LINEAR_MIPMAP_NEAREST,[Ti]:s.LINEAR_MIPMAP_LINEAR},ee={[su]:s.NEVER,[cu]:s.ALWAYS,[au]:s.LESS,[ol]:s.LEQUAL,[ru]:s.EQUAL,[ll]:s.GEQUAL,[ou]:s.GREATER,[lu]:s.NOTEQUAL};function Wt(A,M){if(M.type===vn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ve||M.magFilter===lr||M.magFilter===Js||M.magFilter===Ti||M.minFilter===Ve||M.minFilter===lr||M.minFilter===Js||M.minFilter===Ti)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,wt[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,wt[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,wt[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,St[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,St[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Be||M.minFilter!==Js&&M.minFilter!==Ti||M.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ae(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const V=M.source;let Y=d.get(V);Y===void 0&&(Y={},d.set(V,Y));const ht=W(M);if(ht!==A.__cacheKey){Y[ht]===void 0&&(Y[ht]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),Y[ht].usedTimes++;const ut=Y[A.__cacheKey];ut!==void 0&&(Y[A.__cacheKey].usedTimes--,ut.usedTimes===0&&R(M)),A.__cacheKey=ht,A.__webglTexture=Y[ht].texture}return k}function J(A,M,k){return Math.floor(Math.floor(A/k)/M)}function nt(A,M,k,V){const ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,k,V,M.data);else{ht.sort((Nt,vt)=>Nt.start-vt.start);let ut=0;for(let Nt=1;Nt<ht.length;Nt++){const vt=ht[ut],pt=ht[Nt],Ut=vt.start+vt.count,kt=J(pt.start,M.width,4),$t=J(vt.start,M.width,4);pt.start<=Ut+1&&kt===$t&&J(pt.start+pt.count-1,M.width,4)===kt?vt.count=Math.max(vt.count,pt.start+pt.count-vt.start):(++ut,ht[ut]=pt)}ht.length=ut+1;const Z=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Nt=0,vt=ht.length;Nt<vt;Nt++){const pt=ht[Nt],Ut=Math.floor(pt.start/4),kt=Math.ceil(pt.count/4),$t=Ut%M.width,F=Math.floor(Ut/M.width),mt=kt,tt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,$t,F,mt,tt,k,V,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function _t(A,M,k){let V=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=s.TEXTURE_3D);const Y=ae(A,M),ht=M.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+k);const ut=n.get(ht);if(ht.version!==ut.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const tt=ne.getPrimaries(ne.workingColorSpace),gt=M.colorSpace===si?null:ne.getPrimaries(M.colorSpace),yt=M.colorSpace===si||tt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let et=g(M.image,!1,i.maxTextureSize);et=le(M,et);const dt=a.convert(M.format,M.colorSpace),Nt=a.convert(M.type);let vt=_(M.internalFormat,dt,Nt,M.normalized,M.colorSpace,M.isVideoTexture);Wt(V,M);let pt;const Ut=M.mipmaps,kt=M.isVideoTexture!==!0,$t=ut.__version===void 0||Y===!0,F=ht.dataReady,mt=E(M,et);if(M.isDepthTexture)vt=w(M.format===Ai,M.type),$t&&(kt?e.texStorage2D(s.TEXTURE_2D,1,vt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,vt,et.width,et.height,0,dt,Nt,null));else if(M.isDataTexture)if(Ut.length>0){kt&&$t&&e.texStorage2D(s.TEXTURE_2D,mt,vt,Ut[0].width,Ut[0].height);for(let tt=0,gt=Ut.length;tt<gt;tt++)pt=Ut[tt],kt?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,Nt,pt.data):e.texImage2D(s.TEXTURE_2D,tt,vt,pt.width,pt.height,0,dt,Nt,pt.data);M.generateMipmaps=!1}else kt?($t&&e.texStorage2D(s.TEXTURE_2D,mt,vt,et.width,et.height),F&&nt(M,et,dt,Nt)):e.texImage2D(s.TEXTURE_2D,0,vt,et.width,et.height,0,dt,Nt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&$t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,vt,Ut[0].width,Ut[0].height,et.depth);for(let tt=0,gt=Ut.length;tt<gt;tt++)if(pt=Ut[tt],M.format!==xn)if(dt!==null)if(kt){if(F)if(M.layerUpdates.size>0){const yt=pc(pt.width,pt.height,M.format,M.type);for(const st of M.layerUpdates){const Ft=pt.data.subarray(st*yt/pt.data.BYTES_PER_ELEMENT,(st+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,st,pt.width,pt.height,1,dt,Ft)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,et.depth,dt,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,vt,pt.width,pt.height,et.depth,0,pt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,et.depth,dt,Nt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,vt,pt.width,pt.height,et.depth,0,dt,Nt,pt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{kt&&$t&&e.texStorage2D(s.TEXTURE_2D,mt,vt,Ut[0].width,Ut[0].height);for(let tt=0,gt=Ut.length;tt<gt;tt++)pt=Ut[tt],M.format!==xn?dt!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,vt,pt.width,pt.height,0,pt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,Nt,pt.data):e.texImage2D(s.TEXTURE_2D,tt,vt,pt.width,pt.height,0,dt,Nt,pt.data)}else if(M.isDataArrayTexture)if(kt){if($t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,vt,et.width,et.height,et.depth),F)if(M.layerUpdates.size>0){const tt=pc(et.width,et.height,M.format,M.type);for(const gt of M.layerUpdates){const yt=et.data.subarray(gt*tt/et.data.BYTES_PER_ELEMENT,(gt+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,et.width,et.height,1,dt,Nt,yt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,dt,Nt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,et.width,et.height,et.depth,0,dt,Nt,et.data);else if(M.isData3DTexture)kt?($t&&e.texStorage3D(s.TEXTURE_3D,mt,vt,et.width,et.height,et.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,dt,Nt,et.data)):e.texImage3D(s.TEXTURE_3D,0,vt,et.width,et.height,et.depth,0,dt,Nt,et.data);else if(M.isFramebufferTexture){if($t)if(kt)e.texStorage2D(s.TEXTURE_2D,mt,vt,et.width,et.height);else{let tt=et.width,gt=et.height;for(let yt=0;yt<mt;yt++)e.texImage2D(s.TEXTURE_2D,yt,vt,tt,gt,0,dt,Nt,null),tt>>=1,gt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const tt=s.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),f.add(M),tt.onpaint=gt=>{const yt=gt.changedElements;for(const st of f)yt.includes(st.image)&&(st.needsUpdate=!0)},tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{const yt=s.RGBA,st=s.RGBA,Ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,st,Ft,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(kt&&$t){const tt=Kt(Ut[0]);e.texStorage2D(s.TEXTURE_2D,mt,vt,tt.width,tt.height)}for(let tt=0,gt=Ut.length;tt<gt;tt++)pt=Ut[tt],kt?F&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,dt,Nt,pt):e.texImage2D(s.TEXTURE_2D,tt,vt,dt,Nt,pt);M.generateMipmaps=!1}else if(kt){if($t){const tt=Kt(et);e.texStorage2D(s.TEXTURE_2D,mt,vt,tt.width,tt.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Nt,et)}else e.texImage2D(s.TEXTURE_2D,0,vt,dt,Nt,et);p(M)&&v(V),ut.__version=ht.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function zt(A,M,k){if(M.image.length!==6)return;const V=ae(A,M),Y=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);const ht=n.get(Y);if(Y.version!==ht.__version||V===!0){e.activeTexture(s.TEXTURE0+k);const ut=ne.getPrimaries(ne.workingColorSpace),Z=M.colorSpace===si?null:ne.getPrimaries(M.colorSpace),et=M.colorSpace===si||ut===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const dt=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let st=0;st<6;st++)!dt&&!Nt?vt[st]=g(M.image[st],!0,i.maxCubemapSize):vt[st]=Nt?M.image[st].image:M.image[st],vt[st]=le(M,vt[st]);const pt=vt[0],Ut=a.convert(M.format,M.colorSpace),kt=a.convert(M.type),$t=_(M.internalFormat,Ut,kt,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,mt=ht.__version===void 0||V===!0,tt=Y.dataReady;let gt=E(M,pt);Wt(s.TEXTURE_CUBE_MAP,M);let yt;if(dt){F&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,$t,pt.width,pt.height);for(let st=0;st<6;st++){yt=vt[st].mipmaps;for(let Ft=0;Ft<yt.length;Ft++){const It=yt[Ft];M.format!==xn?Ut!==null?F?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,It.width,It.height,Ut,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,$t,It.width,It.height,0,It.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,It.width,It.height,Ut,kt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,$t,It.width,It.height,0,Ut,kt,It.data)}}}else{if(yt=M.mipmaps,F&&mt){yt.length>0&&gt++;const st=Kt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,$t,st.width,st.height)}for(let st=0;st<6;st++)if(Nt){F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt[st].width,vt[st].height,Ut,kt,vt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,vt[st].width,vt[st].height,0,Ut,kt,vt[st].data);for(let Ft=0;Ft<yt.length;Ft++){const ve=yt[Ft].image[st].image;F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,ve.width,ve.height,Ut,kt,ve.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,$t,ve.width,ve.height,0,Ut,kt,ve.data)}}else{F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,kt,vt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,Ut,kt,vt[st]);for(let Ft=0;Ft<yt.length;Ft++){const It=yt[Ft];F?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Ut,kt,It.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,$t,Ut,kt,It.image[st])}}}p(M)&&v(s.TEXTURE_CUBE_MAP),ht.__version=Y.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Et(A,M,k,V,Y,ht){const ut=a.convert(k.format,k.colorSpace),Z=a.convert(k.type),et=_(k.internalFormat,ut,Z,k.normalized,k.colorSpace),dt=n.get(M),Nt=n.get(k);if(Nt.__renderTarget=M,!dt.__hasExternalTextures){const vt=Math.max(1,M.width>>ht),pt=Math.max(1,M.height>>ht);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,ht,et,vt,pt,M.depth,0,ut,Z,null):e.texImage2D(Y,ht,et,vt,pt,0,ut,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Y,Nt.__webglTexture,0,Vt(M)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Y,Nt.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(A,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const V=M.depthTexture,Y=V&&V.isDepthTexture?V.type:null,ht=w(M.stencilBuffer,Y),ut=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(M),ht,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(M),ht,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ht,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,A)}else{const V=M.textures;for(let Y=0;Y<V.length;Y++){const ht=V[Y],ut=a.convert(ht.format,ht.colorSpace),Z=a.convert(ht.type),et=_(ht.internalFormat,ut,Z,ht.normalized,ht.colorSpace);Xt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(M),et,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(M),et,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,et,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(A,M,k){const V=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,M.depthTexture);const dt=a.convert(M.depthTexture.format),Nt=a.convert(M.depthTexture.type);let vt;M.depthTexture.format===$n?vt=s.DEPTH_COMPONENT24:M.depthTexture.format===Ai&&(vt=s.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,vt,M.width,M.height,0,dt,Nt,null)}}else K(M.depthTexture,0);const ht=Y.__webglTexture,ut=Vt(M),Z=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,et=M.depthTexture.format===Ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===$n)Xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Z,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,et,Z,ht,0);else if(M.depthTexture.format===Ai)Xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Z,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,et,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(A){const M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=V}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)ue(M.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?ue(M.__webglFramebuffer[0],A,0):ue(M.__webglFramebuffer,A,0)}else if(k){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=s.createRenderbuffer(),Ht(M.__webglDepthbuffer[V],A,!1);else{const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,ht)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ht(M.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,ht)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(A,M,k){const V=n.get(A);M!==void 0&&Et(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&it(A)}function lt(A){const M=A.texture,k=n.get(A),V=n.get(M);A.addEventListener("dispose",b);const Y=A.textures,ht=A.isWebGLCubeRenderTarget===!0,ut=Y.length>1;if(ut||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=M.version,r.memory.textures++),ht){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let et=0;et<M.mipmaps.length;et++)k.__webglFramebuffer[Z][et]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ut)for(let Z=0,et=Y.length;Z<et;Z++){const dt=n.get(Y[Z]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Xt(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){const et=Y[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const dt=a.convert(et.format,et.colorSpace),Nt=a.convert(et.type),vt=_(et.internalFormat,dt,Nt,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),pt=Vt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,vt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ht(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)Et(k.__webglFramebuffer[Z][et],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et);else Et(k.__webglFramebuffer[Z],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(M)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let Z=0,et=Y.length;Z<et;Z++){const dt=Y[Z],Nt=n.get(dt);let vt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,Nt.__webglTexture),Wt(vt,dt),Et(k.__webglFramebuffer,A,dt,s.COLOR_ATTACHMENT0+Z,vt,0),p(dt)&&v(vt)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),Wt(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)Et(k.__webglFramebuffer[et],A,M,s.COLOR_ATTACHMENT0,Z,et);else Et(k.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,Z,0);p(M)&&v(Z),e.unbindTexture()}A.depthBuffer&&it(A)}function ct(A){const M=A.textures;for(let k=0,V=M.length;k<V;k++){const Y=M[k];if(p(Y)){const ht=S(A),ut=n.get(Y).__webglTexture;e.bindTexture(ht,ut),v(ht),e.unbindTexture()}}}const ft=[],Bt=[];function Ot(A){if(A.samples>0){if(Xt(A)===!1){const M=A.textures,k=A.width,V=A.height;let Y=s.COLOR_BUFFER_BIT;const ht=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(A),Z=M.length>1;if(Z)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);const et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const Nt=n.get(M[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,k,V,0,0,k,V,Y,s.NEAREST),l===!0&&(ft.length=0,Bt.length=0,ft.push(s.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ft.push(ht),Bt.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const Nt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function Xt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function I(A){const M=r.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function le(A,M){const k=A.colorSpace,V=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==ka&&k!==si&&(ne.getTransfer(k)===fe?(V!==xn||Y!==sn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",k)),M}function Kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.getTextureUnits=N,this.setTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=rt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _m(s,t){function e(n,i=si){let a;const r=ne.getTransfer(i);if(n===sn)return s.UNSIGNED_BYTE;if(n===el)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_h)return s.BYTE;if(n===Mh)return s.SHORT;if(n===Bs)return s.UNSIGNED_SHORT;if(n===tl)return s.INT;if(n===Ln)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===In)return s.HALF_FLOAT;if(n===yh)return s.ALPHA;if(n===wh)return s.RGB;if(n===xn)return s.RGBA;if(n===$n)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===il)return s.RED;if(n===sl)return s.RED_INTEGER;if(n===Pi)return s.RG;if(n===al)return s.RG_INTEGER;if(n===rl)return s.RGBA_INTEGER;if(n===Ta||n===Aa||n===Ca||n===Ra)if(r===fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===Fa||n===vo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===uo||n===fo)return r===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===po)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===mo)return a.COMPRESSED_R11_EAC;if(n===go)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Fa)return a.COMPRESSED_RG11_EAC;if(n===vo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xo||n===_o||n===Mo||n===bo||n===So||n===yo||n===wo||n===Eo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Lo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===xo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_o)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Co)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Do||n===No)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Io)return r===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===Fo||n===Oa||n===Oo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Uo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Dh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:Mm,fragmentShader:bm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new Ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ym extends Di{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Sm,p={},v=e.getContextAttributes();let S=null,_=null;const w=[],E=[],C=new ot;let b=null,T=null;const R=new nn;R.viewport=new be;const D=new nn;D.viewport=new be;const B=[R,D],O=new Pf;let N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=w[J];return nt===void 0&&(nt=new vr,w[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=w[J];return nt===void 0&&(nt=new vr,w[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=w[J];return nt===void 0&&(nt=new vr,w[J]=nt),nt.getHandSpace()};function G(J){const nt=E.indexOf(J.inputSource);if(nt===-1)return;const _t=w[nt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||r),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let J=0;J<w.length;J++){const nt=E[J];nt!==null&&(E[J]=null,w[J].disconnect(nt))}N=null,L=null,g.reset();for(const J in p)delete p[J];if(t.setRenderTarget(S),d=null,u=null,f=null,i=null,_=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),T!==null){const J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,zt=null,Et=null;v.depth&&(Et=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?Ai:$n,zt=v.stencil?ks:Ln);const Ht={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(Ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new _n(u.textureWidth,u.textureHeight,{format:xn,type:sn,depthTexture:new Hs(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new _n(d.framebufferWidth,d.framebufferHeight,{format:xn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(J){for(let nt=0;nt<J.removed.length;nt++){const _t=J.removed[nt],zt=E.indexOf(_t);zt>=0&&(E[zt]=null,w[zt].disconnect(_t))}for(let nt=0;nt<J.added.length;nt++){const _t=J.added[nt];let zt=E.indexOf(_t);if(zt===-1){for(let Ht=0;Ht<w.length;Ht++)if(Ht>=E.length){E.push(_t),zt=Ht;break}else if(E[Ht]===null){E[Ht]=_t,zt=Ht;break}if(zt===-1)break}const Et=w[zt];Et&&Et.connect(_t)}}const q=new P,Q=new P;function j(J,nt,_t){q.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);const zt=q.distanceTo(Q),Et=nt.projectionMatrix.elements,Ht=_t.projectionMatrix.elements,ue=Et[14]/(Et[10]-1),it=Et[14]/(Et[10]+1),rt=(Et[9]+1)/Et[5],lt=(Et[9]-1)/Et[5],ct=(Et[8]-1)/Et[0],ft=(Ht[8]+1)/Ht[0],Bt=ue*ct,Ot=ue*ft,Vt=zt/(-ct+ft),Xt=Vt*-ct;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xt),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Et[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const I=ue+Vt,le=it+Vt,Kt=Bt-Xt,A=Ot+(zt-Xt),M=rt*it/le*I,k=lt*it/le*I;J.projectionMatrix.makePerspective(Kt,A,M,k,I,le),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function wt(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,_t=J.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),O.near=D.near=R.near=nt,O.far=D.far=R.far=_t,(N!==O.near||L!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,L=O.far),O.layers.mask=J.layers.mask|6,R.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const zt=J.parent,Et=O.cameras;wt(O,zt);for(let Ht=0;Ht<Et.length;Ht++)wt(Et[Ht],zt);Et.length===2?j(O,R,D):O.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),St(J,O,zt)};function St(J,nt,_t){_t===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(J){return p[J]};let ee=null;function Wt(J,nt){if(h=nt.getViewerPose(c||r),m=nt,h!==null){const _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let zt=!1;_t.length!==O.cameras.length&&(O.cameras.length=0,zt=!0);for(let it=0;it<_t.length;it++){const rt=_t[it];let lt=null;if(d!==null)lt=d.getViewport(rt);else{const ft=f.getViewSubImage(u,rt);lt=ft.viewport,it===0&&(t.setRenderTargetTextures(_,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(_))}let ct=B[it];ct===void 0&&(ct=new nn,ct.layers.enable(it),ct.viewport=new be,B[it]=ct),ct.matrix.fromArray(rt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(rt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),it===0&&(O.matrix.copy(ct.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),zt===!0&&O.cameras.push(ct)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const it=f.getDepthInformation(_t[0]);it&&it.isValid&&it.texture&&g.init(it,i.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let it=0;it<_t.length;it++){const rt=_t[it].camera;if(rt){let lt=p[rt];lt||(lt=new Dh,p[rt]=lt);const ct=f.getCameraImage(rt);lt.sourceTexture=ct}}}}for(let _t=0;_t<w.length;_t++){const zt=E[_t],Et=w[_t];zt!==null&&Et!==void 0&&Et.update(zt,nt,c||r)}ee&&ee(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}const ae=new Zh;ae.setAnimationLoop(Wt),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const wm=new ie,n0=new qt;n0.set(-1,0,0,0,1,0,0,0,1);function Em(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,S,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(g,p):p.isMeshLambertMaterial?(a(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(g,p),f(g,p)):p.isMeshPhongMaterial?(a(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(a(g,p),m(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),x(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),S=v.envMap,_=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(n0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tm(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const E=w.program;n.uniformBlockBinding(_,E)}function c(_,w){let E=i[_.id];E===void 0&&(g(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",v));const C=w.program;n.updateUBOMapping(_,C);const b=t.render.frame;a[_.id]!==b&&(u(_),a[_.id]=b)}function h(_){const w=f();_.__bindingPointIndex=w;const E=s.createBuffer(),C=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,E),E}function f(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const w=i[_.id],E=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let b=0,T=E.length;b<T;b++){const R=E[b];if(Array.isArray(R))for(let D=0,B=R.length;D<B;D++)d(R[D],b,D,C);else d(R,b,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,w,E,C){if(x(_,w,E,C)===!0){const b=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){const B=T[D],O=p(B);m(B,_.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,_.__data)}}function m(_,w,E){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,E)}function x(_,w,E,C){const b=_.value,T=w+"_"+E;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:ArrayBuffer.isView(b)?C[T]=b.slice():C[T]=b.clone(),!0;{const R=C[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return C[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function g(_){const w=_.uniforms;let E=0;const C=16;for(let T=0,R=w.length;T<R;T++){const D=Array.isArray(w[T])?w[T]:[w[T]];for(let B=0,O=D.length;B<O;B++){const N=D[B],L=Array.isArray(N.value)?N.value:[N.value];for(let G=0,W=L.length;G<W;G++){const K=L[G],q=p(K),Q=E%C,j=Q%q.boundary,wt=Q+j;E+=j,wt!==0&&C-wt<q.storage&&(E+=C-wt),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=q.storage}}}const b=E%C;return b>0&&(E+=C-b),_.__size=E,_.__cache={},this}function p(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",_),w}function v(_){const w=_.target;w.removeEventListener("dispose",v);const E=r.indexOf(w.__bindingPointIndex);r.splice(E,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete a[w.id]}function S(){for(const _ in i)s.deleteBuffer(i[_]);r=[],i={},a={}}return{bind:l,update:c,dispose:S}}const Am=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function Cm(){return En===null&&(En=new Lh(Am,16,16,Pi,In),En.name="DFG_LUT",En.minFilter=Ve,En.magFilter=Ve,En.wrapS=Gn,En.wrapT=Gn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class i0{constructor(t={}){const{canvas:e=fu(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=sn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const x=d,g=new Set([rl,al,sl]),p=new Set([sn,Ln,Bs,ks,el,nl]),v=new Uint32Array(4),S=new Int32Array(4),_=new P;let w=null,E=null;const C=[],b=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,B=null,O=null,N=null,L=null;this._outputColorSpace=we;let G=0,W=0,K=null,q=-1,Q=null;const j=new be,wt=new be;let St=null;const ee=new Ct(0);let Wt=0,ae=e.width,J=e.height,nt=1,_t=null,zt=null;const Et=new be(0,0,ae,J),Ht=new be(0,0,ae,J);let ue=!1;const it=new fl;let rt=!1,lt=!1;const ct=new ie,ft=new P,Bt=new be,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Xt(){return K===null?nt:1}let I=n;function le(y,U){return e.getContext(y,U)}let Kt,A,M,k,V,Y,ht,ut,Z,et,dt,Nt,vt,pt,Ut,kt,$t,F,mt,tt,gt,yt,st;try{const y={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qo}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",hn,!1),I===null){const U="webgl2";if(I=le(U,y),I===null)throw le(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(y){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),se("WebGLRenderer: "+y.message),y}function Ft(){Kt=new Cp(I),Kt.init(),gt=new _m(I,Kt),A=new xp(I,Kt,t,gt),M=new vm(I,Kt),A.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),O=I.createFramebuffer(),N=I.createFramebuffer(),L=I.createFramebuffer(),k=new Lp(I),V=new im,Y=new xm(I,Kt,M,V,A,gt,k),ht=new Ap(R),ut=new Df(I),yt=new gp(I,ut),Z=new Rp(I,ut,k,yt),et=new Dp(I,Z,ut,yt,k),F=new Ip(I,A,Y),Ut=new _p(V),dt=new nm(R,ht,Kt,A,yt,Ut),Nt=new Em(R,V),vt=new am,pt=new um(Kt),$t=new mp(R,ht,M,et,m,l),kt=new gm(R,et,A),st=new Tm(I,k,A,M),mt=new vp(I,Kt,k),tt=new Pp(I,Kt,k),k.programs=dt.programs,R.capabilities=A,R.extensions=Kt,R.properties=V,R.renderLists=vt,R.shadowMap=kt,R.state=M,R.info=k}x!==sn&&(T=new Up(x,e.width,e.height,o,i,a));const It=new ym(R,I);this.xr=It,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Kt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Kt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(y){y!==void 0&&(nt=y,this.setSize(ae,J,!1))},this.getSize=function(y){return y.set(ae,J)},this.setSize=function(y,U,X=!0){if(It.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=y,J=U,e.width=Math.floor(y*nt),e.height=Math.floor(U*nt),X===!0&&(e.style.width=y+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(ae*nt,J*nt).floor()},this.setDrawingBufferSize=function(y,U,X){ae=y,J=U,nt=X,e.width=Math.floor(y*X),e.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===sn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(Et)},this.setViewport=function(y,U,X,z){y.isVector4?Et.set(y.x,y.y,y.z,y.w):Et.set(y,U,X,z),M.viewport(j.copy(Et).multiplyScalar(nt).round())},this.getScissor=function(y){return y.copy(Ht)},this.setScissor=function(y,U,X,z){y.isVector4?Ht.set(y.x,y.y,y.z,y.w):Ht.set(y,U,X,z),M.scissor(wt.copy(Ht).multiplyScalar(nt).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(y){M.setScissorTest(ue=y)},this.setOpaqueSort=function(y){_t=y},this.setTransparentSort=function(y){zt=y},this.getClearColor=function(y){return y.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,X=!0){let z=0;if(y){let H=!1;if(K!==null){const bt=K.texture.format;H=g.has(bt)}if(H){const bt=K.texture.type,At=p.has(bt),Mt=$t.getClearColor(),Pt=$t.getClearAlpha(),Dt=Mt.r,Yt=Mt.g,Qt=Mt.b;At?(v[0]=Dt,v[1]=Yt,v[2]=Qt,v[3]=Pt,I.clearBufferuiv(I.COLOR,0,v)):(S[0]=Dt,S[1]=Yt,S[2]=Qt,S[3]=Pt,I.clearBufferiv(I.COLOR,0,S))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),$t.dispose(),vt.dispose(),pt.dispose(),V.dispose(),ht.dispose(),et.dispose(),yt.dispose(),st.dispose(),dt.dispose(),It.dispose(),It.removeEventListener("sessionstart",Sl),It.removeEventListener("sessionend",yl),mi.stop()};function ve(y){y.preventDefault(),Ol("WebGLRenderer: Context Lost."),D=!0}function ce(){Ol("WebGLRenderer: Context Restored."),D=!1;const y=k.autoReset,U=kt.enabled,X=kt.autoUpdate,z=kt.needsUpdate,H=kt.type;Ft(),k.autoReset=y,kt.enabled=U,kt.autoUpdate=X,kt.needsUpdate=z,kt.type=H}function hn(y){se("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Sn(y){const U=y.target;U.removeEventListener("dispose",Sn),w0(U)}function w0(y){E0(y),V.remove(y)}function E0(y){const U=V.get(y).programs;U!==void 0&&(U.forEach(function(X){dt.releaseProgram(X)}),y.isShaderMaterial&&dt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,z,H,bt){U===null&&(U=Ot);const At=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=C0(y,U,X,z,H);M.setMaterial(z,At);let Pt=X.index,Dt=1;if(z.wireframe===!0){if(Pt=Z.getWireframeAttribute(X),Pt===void 0)return;Dt=2}const Yt=X.drawRange,Qt=X.attributes.position;let Lt=Yt.start*Dt,he=(Yt.start+Yt.count)*Dt;bt!==null&&(Lt=Math.max(Lt,bt.start*Dt),he=Math.min(he,(bt.start+bt.count)*Dt)),Pt!==null?(Lt=Math.max(Lt,0),he=Math.min(he,Pt.count)):Qt!=null&&(Lt=Math.max(Lt,0),he=Math.min(he,Qt.count));const Ae=he-Lt;if(Ae<0||Ae===1/0)return;yt.setup(H,z,Mt,X,Pt);let _e,me=mt;if(Pt!==null&&(_e=ut.get(Pt),me=tt,me.setIndex(_e)),H.isMesh)z.wireframe===!0?(M.setLineWidth(z.wireframeLinewidth*Xt()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(H.isLine){let ke=z.linewidth;ke===void 0&&(ke=1),M.setLineWidth(ke*Xt()),H.isLineSegments?me.setMode(I.LINES):H.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else H.isPoints?me.setMode(I.POINTS):H.isSprite&&me.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))me.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ke=H._multiDrawStarts,Tt=H._multiDrawCounts,Xe=H._multiDrawCount,re=Pt?ut.get(Pt).bytesPerElement:1,an=V.get(z).currentProgram.getUniforms();for(let yn=0;yn<Xe;yn++)an.setValue(I,"_gl_DrawID",yn),me.render(ke[yn]/re,Tt[yn])}else if(H.isInstancedMesh)me.renderInstances(Lt,Ae,H.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,ke);me.renderInstances(Lt,Ae,Tt)}else me.render(Lt,Ae)};function bl(y,U,X,z){B!==null&&y.isNodeMaterial&&B.setObject(z,y),rt===!0&&Ut.setState(y,X,!1),y.transparent===!0&&y.side===$e&&y.forceSinglePass===!1?(y.side=Ze,y.needsUpdate=!0,Zs(y,U,z),y.side=ui,y.needsUpdate=!0,Zs(y,U,z),y.side=$e):Zs(y,U,z)}this.compile=function(y,U,X=null){X===null&&(X=y),B!==null&&B.renderStart(y,U,X),E=pt.get(X),E.init(U),b.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==X&&y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,rt=Ut.init(this.clippingPlanes,lt),rt===!0&&Ut.setGlobalState(this.clippingPlanes,U),B!==null&&kt.render(E.state.shadowsArray,X,U);const z=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const bt=H.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){const Mt=bt[At];bl(Mt,X,U,H),z.add(Mt)}else bl(bt,X,U,H),z.add(bt)}),E=b.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(y,U,X=null){const z=this.compile(y,U,X);return new Promise(H=>{function bt(){if(z.forEach(function(At){const Pt=V.get(At).currentProgram;(Pt===void 0||Pt.isReady())&&z.delete(At)}),z.size===0){H(y);return}setTimeout(bt,10)}Kt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let sr=null;function T0(y){sr&&sr(y)}function Sl(){mi.stop()}function yl(){mi.start()}const mi=new Zh;mi.setAnimationLoop(T0),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(y){sr=y,It.setAnimationLoop(y),y===null?mi.stop():mi.start()},It.addEventListener("sessionstart",Sl),It.addEventListener("sessionend",yl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(y,U);const X=It.enabled===!0&&It.isPresenting===!0,z=T!==null&&(K===null||X)&&T.begin(R,K);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(U),U=It.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,U,K),E=pt.get(y,b.length),E.init(U),E.state.textureUnits=Y.getTextureUnits(),b.push(E),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),it.setFromProjectionMatrix(ct,Cn,U.reversedDepth),lt=this.localClippingEnabled,rt=Ut.init(this.clippingPlanes,lt),w=vt.get(y,C.length),w.init(),C.push(w),It.enabled===!0&&It.isPresenting===!0){const At=R.xr.getDepthSensingMesh();At!==null&&ar(At,U,-1/0,R.sortObjects)}ar(y,U,0,R.sortObjects),w.finish(),B!==null&&B.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(_t,zt),Vt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Vt&&$t.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ut.beginShadows();const H=E.state.shadowsArray;if(kt.render(H,y,U),rt===!0&&Ut.endShadows(),(z&&T.hasRenderPass())===!1){const At=w.opaque,Mt=w.transmissive;if(E.setupLights(),U.isArrayCamera){const Pt=U.cameras;if(Mt.length>0)for(let Dt=0,Yt=Pt.length;Dt<Yt;Dt++){const Qt=Pt[Dt];El(At,Mt,y,Qt)}Vt&&$t.render(y);for(let Dt=0,Yt=Pt.length;Dt<Yt;Dt++){const Qt=Pt[Dt];wl(w,y,Qt,Qt.viewport)}}else Mt.length>0&&El(At,Mt,y,U),Vt&&$t.render(y),wl(w,y,U)}K!==null&&W===0&&(Y.updateMultisampleRenderTarget(K),Y.updateRenderTargetMipmap(K)),z&&T.end(R),y.isScene===!0&&y.onAfterRender(R,y,U),yt.resetDefaultState(),q=-1,Q=null,b.pop(),b.length>0?(E=b[b.length-1],Y.setTextureUnits(E.state.textureUnits),rt===!0&&Ut.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,B!==null&&B.renderEnd()};function ar(y,U,X,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(it)){z&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ct);const At=et.update(y),Mt=y.material;Mt.visible&&w.push(y,At,Mt,X,Bt.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(it))){const At=et.update(y),Mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Bt.copy(At.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(ct)),Array.isArray(Mt)){const Pt=At.groups;for(let Dt=0,Yt=Pt.length;Dt<Yt;Dt++){const Qt=Pt[Dt],Lt=Mt[Qt.materialIndex];Lt&&Lt.visible&&w.push(y,At,Lt,X,Bt.z,Qt,U)}}else Mt.visible&&w.push(y,At,Mt,X,Bt.z,null,U)}}const bt=y.children;for(let At=0,Mt=bt.length;At<Mt;At++)ar(bt[At],U,X,z)}function wl(y,U,X,z){const{opaque:H,transmissive:bt,transparent:At}=y;E.setupLightsView(X),rt===!0&&Ut.setGlobalState(R.clippingPlanes,X),z&&M.viewport(j.copy(z)),H.length>0&&Ys(H,U,X),bt.length>0&&Ys(bt,U,X),At.length>0&&Ys(At,U,X),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function El(y,U,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const Lt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new _n(1,1,{generateMipmaps:!0,type:Lt?In:sn,minFilter:Ti,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const bt=E.state.transmissionRenderTarget[z.id],At=z.viewport||j;bt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);const Mt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(ee),Wt=R.getClearAlpha(),Wt<1&&R.setClearColor(16777215,.5),R.clear(),Vt&&$t.render(X);const Yt=R.toneMapping;R.toneMapping=Pn;const Qt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),rt===!0&&Ut.setGlobalState(R.clippingPlanes,z),Ys(y,X,z),Y.updateMultisampleRenderTarget(bt),Y.updateRenderTargetMipmap(bt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let he=0,Ae=U.length;he<Ae;he++){const _e=U[he],{object:me,geometry:ke,material:Tt,group:Xe}=_e;if(Tt.side===$e&&me.layers.test(z.layers)){const re=Tt.side;Tt.side=Ze,Tt.needsUpdate=!0,Tl(me,X,z,ke,Tt,Xe),Tt.side=re,Tt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Y.updateMultisampleRenderTarget(bt),Y.updateRenderTargetMipmap(bt))}R.setRenderTarget(Mt,Pt,Dt),R.setClearColor(ee,Wt),Qt!==void 0&&(z.viewport=Qt),R.toneMapping=Yt}function Ys(y,U,X){const z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,bt=y.length;H<bt;H++){const At=y[H],{object:Mt,geometry:Pt,group:Dt}=At;let Yt=At.material;Yt.allowOverride===!0&&z!==null&&(Yt=z),Mt.layers.test(X.layers)&&Tl(Mt,U,X,Pt,Yt,Dt)}}function Tl(y,U,X,z,H,bt){B!==null&&H.isNodeMaterial&&B.setObject(y,H),y.onBeforeRender(R,U,X,z,H,bt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(R,U,X,z,y,bt),H.transparent===!0&&H.side===$e&&H.forceSinglePass===!1?(H.side=Ze,H.needsUpdate=!0,R.renderBufferDirect(X,U,z,H,y,bt),H.side=ui,H.needsUpdate=!0,R.renderBufferDirect(X,U,z,H,y,bt),H.side=$e):R.renderBufferDirect(X,U,z,H,y,bt),y.onAfterRender(R,U,X,z,H,bt)}function Zs(y,U,X){U.isScene!==!0&&(U=Ot);const z=V.get(y),H=E.state.lights,bt=E.state.shadowsArray,At=H.state.version,Mt=dt.getParameters(y,H.state,bt,U,X,E.state.lightProbeGridArray),Pt=dt.getProgramCacheKey(Mt);let Dt=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Yt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=ht.get(y.envMap||z.environment,Yt),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",Sn),Dt=new Map,z.programs=Dt);let Qt=Dt.get(Pt);if(Qt!==void 0){if(z.currentProgram===Qt&&z.lightsStateVersion===At)return Cl(y,Mt),Qt}else Mt.uniforms=dt.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,X,Mt),y.onBeforeCompile(Mt,R),Qt=dt.acquireProgram(Mt,Pt),Dt.set(Pt,Qt),z.uniforms=Mt.uniforms;const Lt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=Ut.uniform),Cl(y,Mt),z.needsLights=P0(y),z.lightsStateVersion=At,z.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.sunLights.value=H.state.sun,Lt.sunLightShadows.value=H.state.sunShadow,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.sunShadowMatrix.value=H.state.sunShadowMatrix,Lt.sunShadowCascade.value=H.state.sunShadowCascade,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Qt,z.uniformsList=null,Qt}function Al(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Pa.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Cl(y,U){const X=V.get(y);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function A0(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let X=0,z=y.length;X<z;X++){const H=y[X];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function C0(y,U,X,z,H){U.isScene!==!0&&(U=Ot),Y.resetTextureUnits();const bt=U.fog,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,Mt=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ne.workingColorSpace,Pt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Dt=ht.get(z.envMap||At,Pt),Yt=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Lt=!!X.morphAttributes.position,he=!!X.morphAttributes.normal,Ae=!!X.morphAttributes.color;let _e=Pn;z.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(_e=R.toneMapping);const me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ke=me!==void 0?me.length:0,Tt=V.get(z),Xe=E.state.lights;if(rt===!0&&(lt===!0||y!==Q)){const xe=y===Q&&z.id===q;Ut.setState(z,y,xe)}let re=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Xe.state.version||Tt.outputColorSpace!==Mt||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==Dt||z.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ut.numPlanes||Tt.numIntersection!==Ut.numIntersection)||Tt.vertexAlphas!==Yt||Tt.vertexTangents!==Qt||Tt.morphTargets!==Lt||Tt.morphNormals!==he||Tt.morphColors!==Ae||Tt.toneMapping!==_e||Tt.morphTargetsCount!==ke||!!Tt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Tt.__version=z.version);let an=Tt.currentProgram;re===!0&&(an=Zs(z,U,H),B&&z.isNodeMaterial&&B.onUpdateProgram(z,an,Tt));let yn=!1,Yn=!1,Ui=!1;const de=an.getUniforms(),Ee=Tt.uniforms;if(M.useProgram(an.program)&&(yn=!0,Yn=!0,Ui=!0),z.id!==q&&(q=z.id,Yn=!0),Tt.needsLights){const xe=A0(E.state.lightProbeGridArray,H);Tt.lightProbeGrid!==xe&&(Tt.lightProbeGrid=xe,Yn=!0)}if(yn||Q!==y){M.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),de.setValue(I,"projectionMatrix",y.projectionMatrix),de.setValue(I,"viewMatrix",y.matrixWorldInverse);const Jn=de.map.cameraPosition;Jn!==void 0&&Jn.setValue(I,ft.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&de.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&de.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Yn=!0,Ui=!0)}if(Tt.needsLights&&(Xe.state.sunShadowMap.length>0&&de.setValue(I,"sunShadowMap",Xe.state.sunShadowMap,Y),Xe.state.directionalShadowMap.length>0&&de.setValue(I,"directionalShadowMap",Xe.state.directionalShadowMap,Y),Xe.state.spotShadowMap.length>0&&de.setValue(I,"spotShadowMap",Xe.state.spotShadowMap,Y),Xe.state.pointShadowMap.length>0&&de.setValue(I,"pointShadowMap",Xe.state.pointShadowMap,Y)),H.isSkinnedMesh){de.setOptional(I,H,"bindMatrix"),de.setOptional(I,H,"bindMatrixInverse");const xe=H.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),de.setValue(I,"boneTexture",xe.boneTexture,Y))}H.isBatchedMesh&&(de.setOptional(I,H,"batchingTexture"),de.setValue(I,"batchingTexture",H._matricesTexture,Y),de.setOptional(I,H,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",H._indirectTexture,Y),de.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&de.setValue(I,"batchingColorTexture",H._colorsTexture,Y));const Zn=X.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&F.update(H,X,an),(Yn||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,de.setValue(I,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Ee.envMapIntensity.value=U.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Cm()),Yn){if(de.setValue(I,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&R0(Ee,Ui),bt&&z.fog===!0&&Nt.refreshFogUniforms(Ee,bt),Nt.refreshMaterialUniforms(Ee,z,nt,J,E.state.transmissionRenderTarget[y.id]),Tt.needsLights&&Tt.lightProbeGrid){const xe=Tt.lightProbeGrid;Ee.probesSH.value=xe.texture,Ee.probesMin.value.copy(xe.boundingBox.min),Ee.probesMax.value.copy(xe.boundingBox.max),Ee.probesResolution.value.copy(xe.resolution)}Pa.upload(I,Al(Tt),Ee,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pa.upload(I,Al(Tt),Ee,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&de.setValue(I,"center",H.center),de.setValue(I,"modelViewMatrix",H.modelViewMatrix),de.setValue(I,"normalMatrix",H.normalMatrix),de.setValue(I,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const xe=z.uniformsGroups;for(let Jn=0,Fi=xe.length;Jn<Fi;Jn++){const Pl=xe[Jn];st.update(Pl,an),st.bind(Pl,an)}}return an}function R0(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function P0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(y,U,X){const z=V.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(y.texture).__webglTexture=U,V.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const X=V.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){K=y,G=U,W=X;let z=null,H=!1,bt=!1;if(y){const Mt=V.get(y);if(Mt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(I.FRAMEBUFFER,Mt.__webglFramebuffer),j.copy(y.viewport),wt.copy(y.scissor),St=y.scissorTest,M.viewport(j),M.scissor(wt),M.setScissorTest(St),q=-1;return}else if(Mt.__webglFramebuffer===void 0)Y.setupRenderTarget(y);else if(Mt.__hasExternalTextures)Y.rebindTextures(y,V.get(y.texture).__webglTexture,V.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Yt=y.depthTexture;if(Mt.__boundDepthTexture!==Yt){if(Yt!==null&&V.has(Yt)&&(y.width!==Yt.image.width||y.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(y)}}const Pt=y.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(bt=!0);const Dt=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?z=Dt[U][X]:z=Dt[U],H=!0):y.samples>0&&Y.useMultisampledRTT(y)===!1?z=V.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[X]:z=Dt,j.copy(y.viewport),wt.copy(y.scissor),St=y.scissorTest}else j.copy(Et).multiplyScalar(nt).floor(),wt.copy(Ht).multiplyScalar(nt).floor(),St=ue;if(X!==0&&(z=O),M.bindFramebuffer(I.FRAMEBUFFER,z)&&M.drawBuffers(y,z),M.viewport(j),M.scissor(wt),M.setScissorTest(St),H){const Mt=V.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,X)}else if(bt){const Mt=U;for(let Pt=0;Pt<y.textures.length;Pt++){const Dt=V.get(y.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,X,Mt)}}else if(y!==null&&X!==0){const Mt=V.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,X)}q=-1};function Rl(y){const U=V.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=A.textureFormatReadable(y.format),U.__typeReadable=A.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,X,z,H,bt,At,Mt=0){if(!(y&&y.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){M.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Dt=y.textures[Mt],Yt=Dt.format,Qt=Dt.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt);const Lt=Rl(Dt);if(Lt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&X>=0&&X<=y.height-H&&I.readPixels(U,X,z,H,gt.convert(Yt),gt.convert(Qt),bt)}finally{const Dt=K!==null?V.get(K).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,U,X,z,H,bt,At,Mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(U>=0&&U<=y.width-z&&X>=0&&X<=y.height-H){M.bindFramebuffer(I.FRAMEBUFFER,Pt);const Dt=y.textures[Mt],Yt=Dt.format,Qt=Dt.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt);const Lt=Rl(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),I.readPixels(U,X,z,H,gt.convert(Yt),gt.convert(Qt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Ae=K!==null?V.get(K).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,Ae);const _e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await du(I,_e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(he),I.deleteSync(_e),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,X=0){const z=Math.pow(2,-X),H=Math.floor(y.image.width*z),bt=Math.floor(y.image.height*z),At=U!==null?U.x:0,Mt=U!==null?U.y:0;Y.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,At,Mt,H,bt),M.unbindTexture()},this.copyTextureToTexture=function(y,U,X=null,z=null,H=0,bt=0){let At,Mt,Pt,Dt,Yt,Qt,Lt,he,Ae;const _e=y.isCompressedTexture?y.mipmaps[bt]:y.image;if(X!==null)At=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Pt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Yt=X.min.y,Qt=X.isBox3?X.min.z:0;else{const Ee=Math.pow(2,-H);At=Math.floor(_e.width*Ee),Mt=Math.floor(_e.height*Ee),y.isDataArrayTexture?Pt=_e.depth:y.isData3DTexture?Pt=Math.floor(_e.depth*Ee):Pt=1,Dt=0,Yt=0,Qt=0}z!==null?(Lt=z.x,he=z.y,Ae=z.z):(Lt=0,he=0,Ae=0);const me=gt.convert(U.format),ke=gt.convert(U.type);let Tt;U.isData3DTexture?(Y.setTexture3D(U,0),Tt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),Tt=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),Tt=I.TEXTURE_2D),M.activeTexture(I.TEXTURE0),M.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Xe=M.getParameter(I.UNPACK_ROW_LENGTH),re=M.getParameter(I.UNPACK_IMAGE_HEIGHT),an=M.getParameter(I.UNPACK_SKIP_PIXELS),yn=M.getParameter(I.UNPACK_SKIP_ROWS),Yn=M.getParameter(I.UNPACK_SKIP_IMAGES);M.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),M.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),M.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),M.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const Ui=y.isDataArrayTexture||y.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Ee=V.get(y),Zn=V.get(U),xe=V.get(Ee.__renderTarget),Jn=V.get(Zn.__renderTarget);M.bindFramebuffer(I.READ_FRAMEBUFFER,xe.__webglFramebuffer),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Fi=0;Fi<Pt;Fi++)Ui&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(y).__webglTexture,H,Qt+Fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(U).__webglTexture,bt,Ae+Fi)),I.blitFramebuffer(Dt,Yt,At,Mt,Lt,he,At,Mt,I.DEPTH_BUFFER_BIT,I.NEAREST);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||V.has(y)){const Ee=V.get(y),Zn=V.get(U);M.bindFramebuffer(I.READ_FRAMEBUFFER,N),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,L);for(let xe=0;xe<Pt;xe++)Ui?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,H,Qt+xe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,H),de?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zn.__webglTexture,bt,Ae+xe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zn.__webglTexture,bt),H!==0?I.blitFramebuffer(Dt,Yt,At,Mt,Lt,he,At,Mt,I.COLOR_BUFFER_BIT,I.NEAREST):de?I.copyTexSubImage3D(Tt,bt,Lt,he,Ae+xe,Dt,Yt,At,Mt):I.copyTexSubImage2D(Tt,bt,Lt,he,Dt,Yt,At,Mt);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else de?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Tt,bt,Lt,he,Ae,At,Mt,Pt,me,ke,_e.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,bt,Lt,he,Ae,At,Mt,Pt,me,_e.data):I.texSubImage3D(Tt,bt,Lt,he,Ae,At,Mt,Pt,me,ke,_e):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,Lt,he,At,Mt,me,ke,_e.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,Lt,he,_e.width,_e.height,me,_e.data):I.texSubImage2D(I.TEXTURE_2D,bt,Lt,he,At,Mt,me,ke,_e);M.pixelStorei(I.UNPACK_ROW_LENGTH,Xe),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),M.pixelStorei(I.UNPACK_SKIP_PIXELS,an),M.pixelStorei(I.UNPACK_SKIP_ROWS,yn),M.pixelStorei(I.UNPACK_SKIP_IMAGES,Yn),bt===0&&U.generateMipmaps&&I.generateMipmap(Tt),M.unbindTexture()},this.initRenderTarget=function(y){V.get(y).__webglFramebuffer===void 0&&Y.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Y.setTextureCube(y,0):y.isData3DTexture?Y.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Y.setTexture2DArray(y,0):Y.setTexture2D(y,0),M.unbindTexture()},this.resetState=function(){G=0,W=0,K=null,M.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class s0 extends ul{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new cn;t.deleteAttribute("uv");const e=new pe({side:Ze}),n=new pe,i=new Af(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const a=new jt(t,e);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new Ke(t,n,6),o=new Ie;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);const l=new jt(t,Ki(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new jt(t,Ki(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new jt(t,Ki(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new jt(t,Ki(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new jt(t,Ki(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new jt(t,Ki(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ki(s){return new yf({color:0,emissive:16777215,emissiveIntensity:s})}class vl{a;b;c;d;constructor(t){this.a=2654435769,this.b=608135816,this.c=3084996962,this.d=t>>>0;for(let e=0;e<15;e++)this.next()}next(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;let t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296}int(t,e){return t+Math.floor(this.next()*(e-t+1))}range(t,e){return t+this.next()*(e-t)}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t){let e=0;for(const i of t)e+=i;if(e<=0)return-1;let n=this.next()*e;for(let i=0;i<t.length;i++)if(n-=t[i],n<0)return i;return t.length-1}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this.next()*(e+1)),i=t[e];t[e]=t[n],t[n]=i}return t}}const ai=["hint","undo","slot","shuffle","grab"],ts={hint:2,slot:3,undo:4,shuffle:6,grab:9},bs={hint:60,undo:80,shuffle:100,slot:140,grab:160},Fc=2,Oc={hidden:7,fence:11,link:14,frozen:22,gate:31},ri=20;function Us(s){return Math.floor((s-1)/ri)}function Rm(s){const t=s.boxes.reduce((e,n)=>e+n.count,0);return Math.round(15+t*.4/s.slots+s.boxes.length*3.5)}function Pm(s,t,e,n=0){const i=s==="superhard"?50:s==="hard"?25:10,a=n===0,r={base:a?i:Math.round(i/3),stars:Math.max(0,t-n)*5,speed:a&&e?s==="superhard"?25:s==="hard"?15:10:0,total:0};return r.total=r.base+r.stars+r.speed,r}function a0(s){if(s<=3)return"cube";const t=["coin","cube","hex","candy","diamond","cube","hex","coin","diamond","candy"],e=new vl(s*40503+17),n=t[(s+e.int(0,2))%t.length];return s>4&&n===a0(s-1)?t[(t.indexOf(n)+1)%t.length]:n}function Lm(s){return Object.keys(Oc).filter(t=>Oc[t]===s)}function Im(s){return ai.filter(t=>ts[t]===s)}const Ss=new P;function on(s,t,e,n,i,a){const r=2*Math.PI*i/4,o=Math.max(a-2*i,0),l=Math.PI/4;Ss.copy(t),Ss[n]=0,Ss.normalize();const c=.5*r/(r+o),h=1-Ss.angleTo(s)/l;return Math.sign(Ss[e])===1?h*c:o/(r+o)+c+c*(1-h)}class Qe extends cn{constructor(t=1,e=1,n=1,i=2,a=.1){const r=i*2+1;if(a=Math.min(t/2,e/2,n/2,a),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:a},r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,h=new P(t,e,n).divideScalar(2).subScalar(a),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,x=new P,g=.5/r;for(let p=0,v=0;p<f.length;p+=3,v+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*a,f[p+1]=h.y*Math.sign(l.y)+c.y*a,f[p+2]=h.z*Math.sign(l.z)+c.z*a,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:x.set(1,0,0),d[v+0]=on(x,c,"z","y",a,n),d[v+1]=1-on(x,c,"y","z",a,e);break;case 1:x.set(-1,0,0),d[v+0]=1-on(x,c,"z","y",a,n),d[v+1]=1-on(x,c,"y","z",a,e);break;case 2:x.set(0,1,0),d[v+0]=1-on(x,c,"x","z",a,t),d[v+1]=on(x,c,"z","x",a,n);break;case 3:x.set(0,-1,0),d[v+0]=1-on(x,c,"x","z",a,t),d[v+1]=1-on(x,c,"z","x",a,n);break;case 4:x.set(0,0,1),d[v+0]=1-on(x,c,"x","y",a,t),d[v+1]=1-on(x,c,"y","x",a,e);break;case 5:x.set(0,0,-1),d[v+0]=on(x,c,"x","y",a,t),d[v+1]=1-on(x,c,"y","x",a,e);break}}static fromJSON(t){return new Qe(t.width,t.height,t.depth,t.segments,t.radius)}}const Xo=.62;function Vr(s,t,e,n=0){const i=Xo/2,a=[[0,-i],[s-e*.6,-i],[s,-i+e*.6],[s,i-e],[s-e*.35,i-e*.2],[s-e,i],[0,i]].map(([r,o])=>new ot(r,o));return new Qa(a,t,n)}function Bc(s){const t=s.toNonIndexed();return s.dispose(),t.computeVertexNormals(),t}function r0(s,t=!1){switch(s){case"coin":return Vr(.46,t?12:18,.08);case"candy":{const e=new Me(.5,t?12:16,t?8:10);return e.scale(.95,Xo,.95),e}case"hex":return Bc(Vr(.52,6,.1,Math.PI/6));case"diamond":return Bc(Vr(.56,4,.12));default:return new Qe(.94,Xo,.94,1,.14)}}function o0(s){const t={cube:.42,coin:.34,candy:.2,hex:.36,diamond:.16};return new pe({roughness:t[s],metalness:s==="diamond"?.08:0,envMapIntensity:s==="diamond"||s==="candy"?1.35:.9})}const qo=1.2,La=1.62,$o=1.48;function Dm(s){return s.aspect>1.15?Um(s):Nm(s)}function Wa(s,t,e){return Array.from({length:s},(n,i)=>t+(i-(s-1)/2)*e)}function Nm(s){const t=30*Math.PI/180,i=Math.min(9.2/s.w,9.2/s.h),a=i*s.w,r=i*s.h,o=.32,l=-a/2,c=-r,h=c-o-i*.35-.12,f=a/2+o+i*.35+.08,u=s.rows,d=R=>{const D=1+.28*R,B=2+.45*R,O=B+1.82+.4*R,N=O+2.05*D+.3*R,L=$o*D;return{k:D,nestZ:B,slotZ:O,queueZ0:N,row:L,maxZ:N+(u-.4)*L+.45}},m=f*2*1.02/Math.max(.3,s.aspect),x=R=>(d(R).maxZ-h)*Math.cos(t)+.8*Math.sin(t)<=m;let g=0;if(x(1))g=1;else if(x(0)){let R=0,D=1;for(let B=0;B<12;B++){const O=(R+D)/2;x(O)?R=O:D=O}g=R}const p=d(g),v=La*p.k,S=qo*p.k,_={x:0,z:p.nestZ},w=Math.min(v,9.4/Math.max(5,s.slots)),E=Wa(s.slots,0,w).map(R=>({x:R,z:p.slotZ})),C=Math.min(v,9.4/Math.max(4,s.columns)),b=Wa(s.columns,0,C),T=Math.max(f,E.length*w/2+.08,s.columns*C/2+.08);return{mode:"portrait",tilt:t,cell:i,picX0:l,picZ0:c,picW:a,picH:r,frame:o,nest:_,slot:E,slotSize:Math.min(S,w*.78),queueCol:b,queueZ0:p.queueZ0,queueRow:p.row,queueRowsVisible:u,boxSize:Math.min(S,C*.78,w*.78),bounds:{minX:-T,maxX:T,minZ:h,maxZ:p.maxZ}}}function Um(s){const n=Math.min(11/s.w,10.4/s.h),i=n*s.w,a=n*s.h,r=.36,o=-6.2,l=3.9,c=o-i/2,h=l-a,f=5.6,u=s.slots>5?Math.min(La,9/s.slots):La,d=3.7,m=Wa(s.slots,f,u).map(C=>({x:C,z:d})),x=s.columns>5?9/s.columns:La,g=Wa(s.columns,f,x),p=d-1.75,v=s.rows,S={x:o,z:l+1.45},_=p-(v+.15)*$o-.4,w=Math.min(c-r,f-m.length*u/2)-.3,E=Math.max(f+m.length*u/2,f+s.columns*x/2)+.3;return{mode:"landscape",tilt:28*Math.PI/180,cell:n,picX0:c,picZ0:h,picW:i,picH:a,frame:r,nest:S,slot:m,slotSize:Math.min(qo,u*.78),queueCol:g,queueZ0:p,queueRow:-$o,queueRowsVisible:v,boxSize:Math.min(qo,x*.78,u*.78),bounds:{minX:w,maxX:E,minZ:Math.min(h-r,_)-.25,maxZ:Math.max(l+r,S.z+.9,d+.9)+.3}}}function kc(s,t,e){return{x:s.picX0+(t+.5)*s.cell,z:s.picZ0+(e+.5)*s.cell}}function zc(s,t,e){return{x:s.queueCol[t],z:s.queueZ0+e*s.queueRow}}const Hc=.62,Vc=.06,Fm=new P(0,0,1),Yo=new Ct("#0d1022");function Xa(s,t,e,n,i){const a=new Mn;return a.moveTo(s+i,t),a.lineTo(s+e-i,t),a.quadraticCurveTo(s+e,t,s+e,t+i),a.lineTo(s+e,t+n-i),a.quadraticCurveTo(s+e,t+n,s+e-i,t+n),a.lineTo(s+i,t+n),a.quadraticCurveTo(s,t+n,s,t+n-i),a.lineTo(s,t+i),a.quadraticCurveTo(s,t,s+i,t),a}function Om(s,t,e,n,i){const a=new ko;return a.moveTo(s+i,t),a.lineTo(s+e-i,t),a.quadraticCurveTo(s+e,t,s+e,t+i),a.lineTo(s+e,t+n-i),a.quadraticCurveTo(s+e,t+n,s+e-i,t+n),a.lineTo(s+i,t+n),a.quadraticCurveTo(s,t+n,s,t+n-i),a.lineTo(s,t+i),a.quadraticCurveTo(s,t,s+i,t),a}class Bm{group=new Pe;cubes;w;h;instOf;present;colors;cellColor;layoutRef;frameMesh=null;floorMesh=null;anims=[];clock=0;m4=new ie;q=new Ge;v=new P;sc=new P;frameMat;frameColor;floorMat;fenceDefs;fences=new Pe;picketGeo;postGeo=new Qe(.14,.5,.14,2,.03);capGeo=new Me(.085,16,12);railGeo=new cn(1,.055,.05);handGeo=new cn(1,.035,.14);fenceMat=new pe({color:"#c0814a",roughness:.62});postMat=new pe({color:"#8f5a31",roughness:.66});capMat=new pe({color:"#ff9f1a",roughness:.3,emissive:"#ff8a00",emissiveIntensity:.25});constructor(t,e,n="#efd3a0",i="cube"){this.w=t.w,this.h=t.h,this.fenceDefs=t.s.fences;const a=new Mn;a.moveTo(-.048,0),a.lineTo(.048,0),a.lineTo(.048,.33),a.lineTo(0,.4),a.lineTo(-.048,.33),a.closePath(),this.picketGeo=new fi(a,{depth:.05,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:1}),this.picketGeo.translate(0,0,-.025),this.group.add(this.fences);const r=t.w*t.h;this.instOf=new Int32Array(r).fill(-1),this.cellColor=new Int16Array(r);const o=[];for(let l=0;l<r;l++)this.cellColor[l]=t.cellColor(l),t.cellColor(l)>=0&&(this.instOf[l]=o.length,o.push(l));this.present=new Uint8Array(r),this.colors=e.map(l=>new Ct(l)),this.cubes=new Ke(r0(i),o0(i),Math.max(1,o.length)),this.cubes.castShadow=!0,this.cubes.receiveShadow=!0,this.cubes.count=o.length,o.forEach((l,c)=>this.cubes.setColorAt(c,this.colors[this.cellColor[l]])),this.cubes.instanceColor&&(this.cubes.instanceColor.needsUpdate=!0),this.group.add(this.cubes),this.frameColor=new Ct(n),this.frameMat=new pe({color:n,roughness:.62,metalness:0}),this.floorMat=new pe({color:"#fbf1dc",roughness:.9,metalness:0});for(let l=0;l<r;l++)this.present[l]=t.cellColor(l)>=0&&!t.eaten[l]?1:0}setLayout(t){this.layoutRef=t,this.buildFrame(t),this.buildFences(t);for(let e=0;e<this.w*this.h;e++)this.instOf[e]>=0&&this.writeMatrix(e,this.present[e]?1:0,0);this.cubes.instanceMatrix.needsUpdate=!0,this.cubes.computeBoundingSphere()}get layout(){return this.layoutRef}setNight(t){this.frameMat.color.copy(this.frameColor),t&&this.frameMat.color.lerp(Yo,.55),this.floorMat.color.set(t?"#7a7f99":"#fbf1dc")}buildFences(t){for(const v of this.fences.children)v instanceof Ke&&v.dispose();if(this.fences.clear(),!this.fenceDefs.length)return;const e=t.cell*.35,n={x0:t.picX0-e-t.frame/2,x1:t.picX0+t.picW+e+t.frame/2,z0:t.picZ0-e-t.frame/2,z1:t.picZ0+t.picH+e+t.frame/2},i=.1+Math.max(.06,Math.min(.2,t.cell*.32)),a=[];for(const v of this.fenceDefs){const S=v.side==="top"||v.side==="bottom",_=S?this.w:this.h,w=Math.max(0,v.from),E=Math.min(_,v.to);if(E<=w)continue;const C=S?t.picX0:t.picZ0,b=S?n.x0:n.z0,T=S?n.x1:n.z1;a.push({horiz:S,fixed:v.side==="top"?n.z0:v.side==="bottom"?n.z1:v.side==="left"?n.x0:n.x1,a:w===0?b:C+w*t.cell,b:E===_?T:C+E*t.cell,gateA:w>0,gateB:E<_})}const r=[],o=[],l=[],c=[],h=[],f=new ie,u=new Ge,d=new P,m=new P(1,1,1),x=(v,S,_)=>v.horiz?d.set(S,_,v.fixed):d.set(v.fixed,_,S),g=.135;for(const v of a){u.setFromAxisAngle(Ie.DEFAULT_UP,v.horiz?0:Math.PI/2);const S=v.b-v.a,_=Math.max(1,Math.round(S/g));for(let w=0;w<=_;w++){const E=v.a+S*w/_,C=.94+w*7919%13/13*.1;m.set(1,C,1),r.push(f.compose(x(v,E,i),u,m).clone())}m.set(1,1,1),m.set(S,1,1),c.push(f.compose(x(v,(v.a+v.b)/2,i+.1),u,m).clone()),h.push(f.compose(x(v,(v.a+v.b)/2,i+.3),u,m).clone()),m.set(1,1,1);for(const[w,E]of[[v.a,v.gateA],[v.b,v.gateB]])m.set(1,E?1.25:1,1),o.push(f.compose(x(v,w,i+(E?.31:.25)),u,m).clone()),m.set(1,1,1),E&&l.push(f.compose(x(v,w,i+.68),u,m).clone())}const p=(v,S,_)=>{if(!_.length)return;const w=new Ke(v,S,_.length);_.forEach((E,C)=>w.setMatrixAt(C,E)),w.castShadow=!0,w.receiveShadow=!0,this.fences.add(w)};p(this.picketGeo,this.fenceMat,r),p(this.railGeo,this.postMat,c),p(this.handGeo,this.postMat,h),p(this.postGeo,this.postMat,o),p(this.capGeo,this.capMat,l)}buildFrame(t){this.frameMesh&&(this.group.remove(this.frameMesh),this.frameMesh.geometry.dispose()),this.floorMesh&&(this.group.remove(this.floorMesh),this.floorMesh.geometry.dispose(),this.floorMat.map?.dispose());const e=t.cell*.35,n=t.picX0-e,i=t.picZ0-e,a=t.picW+e*2,r=t.picH+e*2,o=t.frame,l=Xa(n-o,-(i+r+o),a+o*2,r+o*2,o*1.6);l.holes.push(Om(n,-(i+r),a,r,o*.7));const c=Math.max(.06,Math.min(.2,t.cell*.32)),h=new fi(l,{depth:c,bevelEnabled:!0,bevelThickness:.05,bevelSize:.07,bevelSegments:3,curveSegments:10});h.rotateX(-Math.PI/2),h.translate(0,.05,0),this.frameMesh=new jt(h,this.frameMat),this.frameMesh.castShadow=!0,this.frameMesh.receiveShadow=!0,this.group.add(this.frameMesh);const f=new Tn(Xa(n-.02,-(i+r+.02),a+.04,r+.04,o*.7),8);f.rotateX(-Math.PI/2);const u=f.attributes.uv,d=f.attributes.position;for(let m=0;m<d.count;m++)u.setXY(m,(d.getX(m)-t.picX0)/t.picW,1-(d.getZ(m)-t.picZ0)/t.picH);this.floorMat.map=this.floorTexture(),this.floorMat.needsUpdate=!0,this.floorMesh=new jt(f,this.floorMat),this.floorMesh.position.y=.035,this.floorMesh.receiveShadow=!0,this.group.add(this.floorMesh)}floorTexture(){const t=Math.max(8,Math.min(32,Math.floor(1024/Math.max(this.w,this.h)))),e=document.createElement("canvas");e.width=this.w*t,e.height=this.h*t;const n=e.getContext("2d");n.fillStyle="#f7ead0",n.fillRect(0,0,e.width,e.height);for(let a=0;a<this.h;a++)for(let r=0;r<this.w;r++){const o=a*this.w+r;if(this.cellColor[o]<0)continue;const l=r*t+t/2,c=a*t+t/2,h=n.createRadialGradient(l,c-t*.1,t*.05,l,c,t*.55);h.addColorStop(0,"rgba(214,186,140,0.55)"),h.addColorStop(1,"rgba(214,186,140,0)"),n.fillStyle=h,n.fillRect(r*t,a*t,t,t)}const i=new Ni(e);return i.colorSpace=we,i.anisotropy=4,i}writeMatrix(t,e,n,i=0){const a=this.instOf[t];if(a<0)return;const r=this.layoutRef,o=t%this.w,l=(t-o)/this.w,c=kc(r,o,l);this.v.set(c.x,Vc+Hc*r.cell/2+n,c.z),this.q.setFromAxisAngle(Fm,i);const h=r.cell*e;this.sc.set(h,h,h),this.m4.compose(this.v,this.q,this.sc),this.cubes.setMatrixAt(a,this.m4)}isPresent(t){return this.present[t]===1}cubeWorld(t,e){const n=this.layoutRef,i=t%this.w,a=(t-i)/this.w,r=kc(n,i,a);return e.set(r.x,Vc+Hc*n.cell,r.z)}cubeColor(t){return this.colors[this.cellColor[t]]}remove(t){this.present[t]&&(this.present[t]=0,this.anims=this.anims.filter(e=>e.cell!==t),this.writeMatrix(t,0,0),this.cubes.instanceMatrix.needsUpdate=!0)}wobble(t){this.present[t]&&this.anims.push({cell:t,t:0,dur:.35,kind:"wobble",delay:0})}syncFrom(t,e=!0){for(let n=0;n<this.w*this.h;n++){if(this.instOf[n]<0)continue;const i=t.eaten[n]?0:1;i!==this.present[n]&&(this.present[n]=i,i&&e?this.anims.push({cell:n,t:0,dur:.45,kind:"drop",delay:Math.random()*.35}):this.writeMatrix(n,i,0))}this.cubes.instanceMatrix.needsUpdate=!0}rebuild(){this.layoutRef;let t=0;for(let e=0;e<this.w*this.h;e++){if(this.instOf[e]<0)continue;this.present[e]=1;const n=e%this.w,i=(e-n)/this.w,a=(this.h-1-i)*.045+Math.abs(n-this.w/2)*.012+Math.random()*.05;t=Math.max(t,a),this.anims.push({cell:e,t:0,dur:.5,kind:"drop",delay:a}),this.writeMatrix(e,0,0)}return this.cubes.instanceMatrix.needsUpdate=!0,t+.5}update(t){if(this.clock+=t,!this.anims.length)return;const e=[];for(const n of this.anims){if(n.delay>0){n.delay-=t,e.push(n);continue}n.t+=t;const i=Math.min(1,n.t/n.dur);if(this.present[n.cell]){if(n.kind==="wobble"){const a=(1-i)*.22;this.writeMatrix(n.cell,1,0,Math.sin(i*Math.PI*6)*a)}else{const a=i<.7?i/.7:1,r=(1-a)*(1-a)*2.2*this.layoutRef.cell*4,o=i<.7?1:1+Math.sin((i-.7)/.3*Math.PI)*.12;this.writeMatrix(n.cell,Math.min(1,.3+a*.7)*(2-o),r)}i<1?e.push(n):this.writeMatrix(n.cell,1,0)}}this.anims=e,this.cubes.instanceMatrix.needsUpdate=!0}dispose(){this.cubes.geometry.dispose(),this.cubes.material.dispose(),this.frameMesh?.geometry.dispose(),this.floorMesh?.geometry.dispose(),this.floorMat.map?.dispose(),this.frameMat.dispose(),this.floorMat.dispose();for(const t of this.fences.children)t instanceof Ke&&t.dispose();for(const t of[this.picketGeo,this.postGeo,this.capGeo,this.railGeo,this.handGeo])t.dispose();for(const t of[this.fenceMat,this.postMat,this.capMat])t.dispose()}}const Gc=["bottom","top","left","right"];function l0(s){const t=new Int16Array(s.w*s.h);for(let e=0;e<t.length;e++){const n=s.cells.charCodeAt(e);t[e]=n===46?-1:parseInt(s.cells[e],36)}return t}function km(s){return s>=10&&s%10===0?"superhard":s>=5&&s%5===0?"hard":"normal"}const ln={Queue:0,Slot:1,Done:2},zm=4,Hm=7,bi=1073741823,ba=2;class qa{s;eaten;claimed;air;reach;dist;rd;heaps;heapSize;reachCount;remaining;left;pending;roundNo;boxHidden;boxWhere;boxCol;columns;slots;taps;status;hashA;hashB;constructor(t){this.s=t,this.eaten=new Uint8Array(0),this.claimed=new Uint8Array(0),this.air=new Uint8Array(0),this.reach=new Uint8Array(0),this.dist=new Int32Array(0),this.rd=new Int32Array(0),this.heaps=[],this.heapSize=new Int32Array(0),this.reachCount=new Int32Array(0),this.remaining=new Int32Array(0),this.left=0,this.pending=[],this.roundNo=0,this.boxHidden=new Uint8Array(0),this.boxWhere=new Uint8Array(0),this.boxCol=new Int16Array(0),this.columns=[],this.slots=[],this.taps=0,this.status="playing",this.hashA=0,this.hashB=0}static fromLevel(t){const e=t.picture,n=l0(e),i=e.w,a=e.h,r=e.palette.length,o=i*a,l=new Int32Array(o),c=new Int32Array(o);let h=625341585;for(let L=0;L<o;L++)h^=h<<13,h^=h>>>17,h^=h<<5,l[L]=h,h^=h<<13,h^=h>>>17,h^=h<<5,c[L]=h;const f=t.fences??[],u=Gc.map(L=>{const G=L==="bottom"||L==="top"?i:a,W=new Uint8Array(G).fill(1);for(const K of f)if(K.side===L)for(let q=Math.max(0,K.from);q<Math.min(G,K.to);q++)W[q]=0;return W}),d=u.map(L=>L.includes(1)),m=new Int32Array(o).fill(bi),x=new Uint8Array(o),g=(i-1)/2,[p,v,S,_]=u,w=(L,G,W)=>{m[L]=Math.min(m[L],Math.round(G*ba)),x[L]|=W};for(let L=0;L<i;L++)p[L]&&w((a-1)*i+L,Math.abs(L-g),1),v[L]&&w(L,g+a+Math.min(L,i-1-L),2);for(let L=0;L<a;L++)S[L]&&w(L*i,g+(a-1-L),4),_[L]&&w(L*i+i-1,g+(a-1-L),8);const E=new Int32Array(r);for(let L=0;L<o;L++)n[L]>=0&&E[n[L]]++;const C=t.boxes.reduce((L,G)=>Math.max(L,G.id),-1)+1,b=new Int16Array(C).fill(-1),T=new Int16Array(C),R=new Int16Array(C).fill(-1),D=new Int16Array(C),B=new Map;for(const L of t.boxes)if(b[L.id]=L.color,T[L.id]=L.count,D[L.id]=L.frozen??0,L.link!==void 0&&L.link>=0){R[L.id]=L.link;const G=B.get(L.link);G?G.push(L.id):B.set(L.link,[L.id])}const O=new qa({w:i,h:a,colors:r,cell:n,zobA:l,zobB:c,entry:m,maxDim:Math.max(i,a),edge:x,colorCount:E,boxColor:b,boxCount:T,boxLink:R,boxThaw:D,groups:B,fences:f,open:d});O.eaten=new Uint8Array(o),O.claimed=new Uint8Array(o),O.air=new Uint8Array(o),O.reach=new Uint8Array(o),O.dist=new Int32Array(o).fill(bi),O.rd=new Int32Array(o).fill(bi),O.heaps=Array.from({length:r},(L,G)=>new Int32Array(Math.max(8,E[G]*2))),O.heapSize=new Int32Array(r),O.reachCount=new Int32Array(r),O.remaining=Int32Array.from(E),O.left=E.reduce((L,G)=>L+G,0);const N=[];for(let L=0;L<o;L++)m[L]>=bi||(n[L]<0?(O.air[L]=1,O.dist[L]=m[L],N.push(L)):O.offer(L,m[L]));O.spread(N),O.boxHidden=new Uint8Array(C),O.boxWhere=new Uint8Array(C).fill(ln.Done),O.boxCol=new Int16Array(C).fill(-1);for(const L of t.boxes)O.boxHidden[L.id]=L.hidden?1:0;return O.columns=t.columns.map(L=>L.slice()),O.columns.forEach((L,G)=>{for(const W of L)O.boxWhere[W]=ln.Queue,O.boxCol[W]=G;L.length&&(O.boxHidden[L[0]]=0)}),O.slots=new Array(t.slots).fill(null),O}clone(){const t=new qa(this.s);return t.eaten=this.eaten.slice(),t.claimed=this.claimed.slice(),t.air=this.air.slice(),t.reach=this.reach.slice(),t.dist=this.dist.slice(),t.rd=this.rd.slice(),t.heaps=this.heaps.map((e,n)=>{const i=this.heapSize[n],a=new Int32Array(Math.max(8,i+(i>>1)));return a.set(e.subarray(0,i)),a}),t.heapSize=this.heapSize.slice(),t.reachCount=this.reachCount.slice(),t.remaining=this.remaining.slice(),t.left=this.left,t.pending=this.pending.slice(),t.roundNo=this.roundNo,t.boxHidden=this.boxHidden.slice(),t.boxWhere=this.boxWhere.slice(),t.boxCol=this.boxCol.slice(),t.columns=this.columns.map(e=>e.slice()),t.slots=this.slots.map(e=>e?{box:e.box,color:e.color,left:e.left}:null),t.taps=this.taps,t.status=this.status,t.hashA=this.hashA,t.hashB=this.hashB,t}get w(){return this.s.w}get h(){return this.s.h}cellColor(t){return this.s.cell[t]}isFree(t){return this.s.cell[t]<0||this.eaten[t]===1}edgeMask(t){return this.s.edge[t]}isOpen(t){return this.s.open[Gc.indexOf(t)]}offer(t,e){if(e>=this.rd[t])return;const n=this.s.cell[t];this.reach[t]||(this.reach[t]=1,this.claimed[t]||this.reachCount[n]++),this.rd[t]=e;let i=this.heaps[n],a=this.heapSize[n]++;if(a>=i.length){const o=new Int32Array(i.length*2);o.set(i),this.heaps[n]=i=o}const r=e*4096+t;for(;a>0;){const o=a-1>>1;if(i[o]<=r)break;i[a]=i[o],a=o}i[a]=r}heapPop(t){const e=this.heaps[t],n=--this.heapSize[t];if(n<=0)return;const i=e[n];let a=0;for(;;){const r=a*2+1;if(r>=n)break;const o=r+1,l=o<n&&e[o]<e[r]?o:r;if(e[l]>=i)break;e[a]=e[l],a=l}e[a]=i}spread(t){const{w:e,h:n,cell:i}=this.s,a=[];let r=bi;for(const o of t){const l=this.dist[o];(a[l]??=[]).push(o),l<r&&(r=l)}for(let o=r;o<a.length;o++){const l=a[o];if(l)for(let c=0;c<l.length;c++){const h=l[c];if(this.dist[h]!==o)continue;const f=h%e,u=(h-f)/e;for(let d=0;d<4;d++){let m;if(d===0){if(u+1>=n)continue;m=h+e}else if(d===1){if(u===0)continue;m=h-e}else if(d===2){if(f===0)continue;m=h-1}else{if(f+1>=e)continue;m=h+1}const x=o+ba;i[m]<0||this.eaten[m]?x<this.dist[m]&&(this.air[m]=1,this.dist[m]=x,(a[x]??=[]).push(m)):this.offer(m,x)}}}}findTarget(t){const e=this.heaps[t];for(;this.heapSize[t]>0;){const n=e[0],i=n&4095;if(!this.eaten[i]&&!this.claimed[i]&&this.rd[i]===(n-i)/4096)return i;this.heapPop(t)}return-1}walkTo(t){return this.rd[t]>=bi?1/0:this.rd[t]/ba}exposedCounts(t){const e=t??new Int32Array(this.s.colors);return e.set(this.reachCount),e}exposedCells(){const t=[];for(let e=0;e<this.reach.length;e++)this.reach[e]&&!this.claimed[e]&&t.push(e);return t}tripTo(t){return zm+Math.min(240,Math.round(Hm*this.rd[t]/(ba*this.s.maxDim)))}claim(t){this.claimed[t]=1,this.reach[t]&&this.reachCount[this.s.cell[t]]--,this.pending.push((this.roundNo+this.tripTo(t))*4096+t);let e=this.pending.length-1;const n=this.pending;for(;e>0;){const i=e-1>>1;if(n[i]<=n[e])break;const a=n[e];n[e]=n[i],n[i]=a,e=i}}popPending(){const t=this.pending,e=t[0],n=t.pop();if(t.length){t[0]=n;let i=0;for(;;){const a=i*2+1,r=a+1;let o=i;if(a<t.length&&t[a]<t[o]&&(o=a),r<t.length&&t[r]<t[o]&&(o=r),o===i)break;const l=t[i];t[i]=t[o],t[o]=l,i=o}}return e}eatCell(t){const{cell:e,zobA:n,zobB:i}=this.s;if(this.eaten[t]||e[t]<0)return;this.eaten[t]=1;const a=e[t];this.reach[t]&&!this.claimed[t]&&this.reachCount[a]--,this.reach[t]=0,this.claimed[t]=0,this.remaining[a]--,this.left--,this.hashA^=n[t],this.hashB^=i[t];const r=this.rd[t];this.rd[t]=bi,r<this.dist[t]&&(this.air[t]=1,this.dist[t]=r,this.spread([t]))}flushPending(t){for(;this.pending.length;){const e=this.popPending()%4096;this.eatCell(e),t?.push({t:"pickup",cell:e})}this.left===0&&this.status==="playing"&&(this.status="won",t?.push({t:"won"}))}boxColor(t){return this.s.boxColor[t]}boxCount(t){return this.s.boxCount[t]}boxLink(t){return this.s.boxLink[t]}boxThawAt(t){return this.s.boxThaw[t]}get boxIds(){return this.s.boxColor.length}isFrozen(t){return this.taps<this.s.boxThaw[t]}frozenLeft(t){return Math.max(0,this.s.boxThaw[t]-this.taps)}groupOf(t){const e=this.s.boxLink[t];return e<0?[t]:this.s.groups.get(e)??[t]}freeSlots(){let t=0;for(const e of this.slots)e||t++;return t}firstFreeSlot(t=1){let e=0;for(let n=0;n<this.slots.length;n++)if(e=this.slots[n]?0:e+1,e===t)return n-t+1;return-1}isAvailable(t){if(this.boxWhere[t]!==ln.Queue)return!1;const e=this.columns[this.boxCol[t]],n=this.s.boxLink[t];for(const i of e){if(i===t)return!0;if(n<0||this.s.boxLink[i]!==n)return!1}return!1}canTake(t){if(this.status!=="playing")return!1;const e=this.groupOf(t);if(e.length>this.freeSlots())return!1;for(const n of e)if(this.boxWhere[n]!==ln.Queue||this.isFrozen(n)||!this.isAvailable(n))return!1;return!0}whyNot(t){if(this.boxWhere[t]!==ln.Queue)return"gone";const e=this.groupOf(t);for(const n of e)if(this.isFrozen(n))return"frozen";if(!this.isAvailable(t))return"blocked";for(const n of e)if(!this.isAvailable(n))return"link";return e.length>this.freeSlots()?"slots":"ok"}legalMoves(){const t=[];if(this.status!=="playing"||this.freeSlots()===0)return t;let e=null;for(const n of this.columns){if(!n.length)continue;const i=n[0],a=this.s.boxLink[i];if(a>=0){if(e?.includes(a))continue;(e??=[]).push(a)}this.canTake(i)&&t.push(i)}return t}take(t,e){return this.canTake(t)?(this.moveToSlots(this.groupOf(t),e,!1),!0):!1}grab(t,e){if(this.status!=="playing"||this.boxWhere[t]!==ln.Queue)return!1;const n=this.groupOf(t);if(n.length>this.freeSlots())return!1;for(const i of n)if(this.boxWhere[i]!==ln.Queue||this.isFrozen(i))return!1;return this.moveToSlots(n,e,!0),!0}putVirtual(t,e){const n=this.firstFreeSlot();return n<0?!1:(this.slots[n]={box:-1,color:t,left:e},!0)}moveToSlots(t,e,n){let i=this.firstFreeSlot(t.length);if(i<0){i=0;for(const a of this.slots)a&&(this.slots[i++]=a);this.slots.fill(null,i)}for(const a of t){const r=this.boxCol[a],o=this.columns[r],l=o.indexOf(a);o.splice(l,1),this.slots[i]={box:a,color:this.s.boxColor[a],left:this.s.boxCount[a]},this.boxWhere[a]=ln.Slot,this.boxCol[a]=-1,this.boxHidden[a]&&(this.boxHidden[a]=0,e?.push({t:"reveal",box:a})),e?.push({t:"take",box:a,slot:i,col:r,index:l,grabbed:n||void 0}),i++}this.taps++,this.afterQueueChange(e)}afterQueueChange(t){for(const e of this.columns)e.length&&this.boxHidden[e[0]]&&(this.boxHidden[e[0]]=0,t?.push({t:"reveal",box:e[0]}));if(t)for(const e of this.columns)for(const n of e)this.s.boxThaw[n]===this.taps&&t.push({t:"thaw",box:n})}addSlot(){this.slots.push(null),this.status==="stuck"&&(this.status="playing")}shuffle(t,e){const n=[],i=[];this.columns.forEach((a,r)=>a.forEach((o,l)=>{this.s.boxLink[o]<0&&!this.isFrozen(o)&&(n.push([r,l]),i.push(o))})),t.shuffle(i),n.forEach(([a,r],o)=>{this.columns[a][r]=i[o],this.boxCol[i[o]]=a}),this.status==="stuck"&&(this.status="playing"),this.afterQueueChange(e)}round(t){if(this.status!=="playing")return 0;let e=0;for(;this.pending.length&&Math.floor(this.pending[0]/4096)<=this.roundNo;){const n=this.popPending()%4096;this.eatCell(n),e++,t?.push({t:"pickup",cell:n})}for(let n=0;n<this.slots.length;n++){const i=this.slots[n];if(!i||i.left<=0)continue;const a=this.findTarget(i.color);a<0||(this.claim(a),i.left--,e++,t?.push({t:"ant",slot:n,box:i.box,cell:a,color:i.color,left:i.left,due:this.roundNo+this.tripTo(a)}),!(i.left>0)&&(i.box>=0?this.release(i.box,t):(this.slots[n]=null,t?.push({t:"boxDone",slot:n,box:i.box}))))}return this.roundNo++,this.left===0&&this.status==="playing"?(this.status="won",t?.push({t:"won"}),e):e+this.pending.length}release(t,e){const n=this.groupOf(t),i=a=>this.slots.findIndex(r=>r!==null&&r.box===a);for(const a of n){const r=i(a);if(r>=0&&this.slots[r].left>0)return}for(const a of n){const r=i(a);r<0||(this.slots[r]=null,a>=0&&(this.boxWhere[a]=ln.Done),e?.push({t:"boxDone",slot:r,box:a}))}}isQuiet(){if(this.pending.length)return!1;for(const t of this.slots)if(t&&t.left>0&&this.findTarget(t.color)>=0)return!1;return!0}settle(t){for(;this.status==="playing"&&this.round(t)>0;);this.checkStuck(t)}checkStuck(t){return this.status!=="playing"?this.status==="stuck":this.left>0&&this.isQuiet()&&this.legalMoves().length===0?(this.status="stuck",t?.push({t:"stuck"}),!0):!1}unstick(){this.status==="stuck"&&(this.status="playing")}key(){let t="";for(const e of this.columns)t+=e.length+",";t+="|";for(const e of this.slots)t+=e?e.box+":"+e.left+",":"-,";return t+"|"+this.hashA+","+this.hashB+"|"+this.taps+"|"+this.pending.length}queueSize(){let t=0;for(const e of this.columns)t+=e.length;return t}}const Zo='"Nunito Variable", "Nunito", system-ui, sans-serif';async function Vm(){try{await Promise.all([document.fonts.load(`900 64px ${Zo}`),document.fonts.load(`800 32px ${Zo}`)])}catch{}}class Jo{canvas;texture;ctx;last="";constructor(t=128){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.texture=new Ni(this.canvas),this.texture.colorSpace=we,this.texture.anisotropy=4}draw(t,e={}){const n=t+(e.fill??"")+(e.stroke??"")+(e.shadow??"")+(e.scale??1);if(n===this.last)return;this.last=n;const{ctx:i,canvas:a}=this,r=a.width;if(i.clearRect(0,0,r,r),!t){this.texture.needsUpdate=!0;return}const o=t.length,l=r*(o>=3?.42:o===2?.52:.6)*(e.scale??1);i.font=`900 ${l}px ${Zo}`,i.textAlign="center",i.textBaseline="middle";const c=r*.53;i.lineJoin="round",i.fillStyle=e.shadow??"rgba(20, 12, 30, 0.35)",i.fillText(t,r/2,c+l*.07),i.lineWidth=l*.09,i.strokeStyle=e.stroke??"rgba(38, 28, 60, 0.85)",i.strokeText(t,r/2,c),i.fillStyle=e.fill??"#ffffff",i.fillText(t,r/2,c),this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function xl(s="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=64){const n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d"),a=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);a.addColorStop(0,s),a.addColorStop(1,t),i.fillStyle=a,i.fillRect(0,0,e,e);const r=new Ni(n);return r.colorSpace=we,r}function c0(s=64){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=s/2,i=e.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.moveTo(n,0),e.quadraticCurveTo(n,n,s,n),e.quadraticCurveTo(n,n,n,s),e.quadraticCurveTo(n,n,0,n),e.quadraticCurveTo(n,n,n,0),e.fill();const a=new Ni(t);return a.colorSpace=we,a}function Gm(s=128){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");e.fillStyle="#8f8aa3",e.fillRect(0,0,s,s),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=s*.06;for(let i=-s;i<s*2;i+=s*.22)e.beginPath(),e.moveTo(i,0),e.lineTo(i+s,s),e.stroke();const n=new Ni(t);return n.colorSpace=we,n}function $s(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,l=new Le;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(const h in a){const f=Wc(a[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let x=0;x<r[h].length;++x)d.push(r[h][x][u]);const m=Wc(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Wc(s){let t,e,n,i=-1,a=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*e}const r=new t(a),o=new je(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const x=h.getComponent(u,m);o.setComponent(u+f,m,x)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const Vn=.62,h0=.03;class Wm{body=[];detail={matte:[],metal:[]};add(t,e,n="matte"){if(t.index){const i=t.toNonIndexed();t.dispose(),t=i}if(e){const i=new Ct(e),a=new Float32Array(t.getAttribute("position").count*3);for(let r=0;r<a.length;r+=3)i.toArray(a,r);t.setAttribute("color",new je(a,3)),this.detail[n].push(t)}else this.body.push(t)}block(t,e,n=.02,i,a="matte",r=0){const o=new Qe(...t,2,Math.min(n,Math.min(...t)/2));o.rotateZ(r),o.translate(...e),this.add(o,i,a)}bead(t,e,n,i="matte"){const a=new Me(1,8,6);a.scale(...e),a.translate(...t),this.add(a,n,i)}cord(t,e,n,i="matte",a=!1){const r=new cs(t.map(o=>new P(...o)),a,"centripetal");this.add(new hs(r,Math.max(8,t.length*2),e,5,a),n,i)}rim(t,e,n,i,a,r,o="matte"){const l=[];for(let c=0;c<4;c++){const h=c*Math.PI/2,f=(c===0||c===3?1:-1)*(t/2-i),u=(c<2?1:-1)*(e/2-i);for(let d=0;d<=4;d++){const m=h+d*Math.PI/8;l.push([f+Math.cos(m)*i,n,u+Math.sin(m)*i])}}this.cord(l,a,r,o,!0)}merge(t){const e=$s(t);for(const n of t)n.dispose();return e}}class u0{body;roughness;metalness;details=[];constructor(t){const e=new Wm;this.roughness=t==="metal"?.28:t==="crate"||t==="basket"?.6:.38,this.metalness=t==="metal"?.22:0,t==="crate"?this.crate(e):t==="basket"?this.basket(e):t==="metal"?this.metal(e):this.classic(e),this.body=e.merge(e.body);for(const n of["matte","metal"])e.detail[n].length&&this.details.push({geometry:e.merge(e.detail[n]),material:new pe({vertexColors:!0,roughness:n==="metal"?.32:.72,metalness:n==="metal"?.55:0,envMapIntensity:.85})})}classic(t){t.add(new Qe(1,Vn,1,3,.2))}crate(t){const e="#bb7c3e",n="#e4b778",i="#9b602e",a="#625752";t.block([.86,.44,.86],[0,-.07,0],.06),t.block([.86,.09,.86],[0,.265,0],.035);for(const r of[-1,1]){t.block([1.04,.12,.105],[0,.22,r*.46],.022,n),t.block([.105,.12,.83],[r*.46,.22,0],.022,e),t.block([1.01,.1,.105],[0,-.245,r*.45],.02,e),t.block([.105,.1,.81],[r*.45,-.245,0],.02,n);for(let o=0;o<3;o++){const l=-.16+o*.125;t.block([.87,.115,.065],[0,l,r*.438],.012,o%2?"#d59b58":"#c88b47"),t.block([.065,.115,.87],[r*.438,l,0],.012,o%2?"#c88b47":"#d59b58");for(let c=0;c<2;c++){const h=l-.025+c*.047;t.cord([[-.36,h,r*.473],[-.1,h+.008,r*.475],[.15,h-.007,r*.475],[.35,h,r*.473]],.003,i)}}t.block([.81,.082,.067],[0,-.02,r*.484],.018,n,"matte",r*.42);for(const o of[-1,1]){t.block([.115,.43,.115],[o*.44,-.02,r*.44],.022,e);for(const l of[-.245,.22])t.bead([o*.43,l,r*.518],[.025,.025,.009],a,"metal");t.bead([o*.46,.285,r*.46],[.024,.009,.024],a,"metal")}}for(const r of[-1,1])t.block([.015,.052,.26],[r*.496,.19,0],.007,"#6d462d")}basket(t){const e="#d6a257",n="#efcf91",i="#a66d36",a=new Qe(.92,.47,.88,3,.12),r=a.getAttribute("position");for(let o=0;o<r.count;o++){const l=.85+.15*(r.getY(o)/.47+.5);r.setXYZ(o,r.getX(o)*l,r.getY(o)-.07,r.getZ(o)*l)}a.computeVertexNormals(),t.add(a),t.block([.92,.09,.88],[0,.265,0],.045);for(let o=0;o<6;o++){const l=-.245+o*.076;t.rim(.83+o*.026,.79+o*.026,l,.12,.026,o%2?n:e)}for(const o of[-1,1])for(let l=0;l<7;l++){const c=(l-3)*.105,h=[],f=[];for(let u=0;u<7;u++){const d=-.25+u*.071,m=(l+u)%2?.014:-.01;h.push([c*(.88+u*.02),d,o*(.4+u*.012+m)]),f.push([o*(.42+u*.012+m),d,c*(.88+u*.02)])}t.cord(h,.019,l%2?e:n),t.cord(f,.019,l%2?n:e)}t.rim(1,.96,.215,.14,.042,n),t.rim(.84,.8,-.27,.12,.026,i);for(const o of[-1,1]){t.cord([[-.19,.13,o*.49],[-.16,-.02,o*.54],[0,-.08,o*.555],[.16,-.02,o*.54],[.19,.13,o*.49]],.03,i);for(const l of[-.19,.19])t.bead([l,.13,o*.5],[.035,.045,.018],n)}t.block([.13,.19,.027],[0,.19,.504],.018,"#ad693e"),t.bead([0,.16,.527],[.026,.026,.009],"#e8c978","metal")}metal(t){const e="#c6d4d7",n="#4a5968",i="#525565",a="#dfb660";t.block([.94,.49,.9],[0,-.065,0],.12),t.block([1.01,.15,.97],[0,.235,0],.075),t.rim(.965,.925,.139,.13,.025,n),t.rim(.98,.94,.18,.13,.023,e,"metal"),t.rim(.92,.88,-.265,.13,.032,e,"metal");for(const r of[-1,1]){for(const o of[-1,1])t.block([.17,.17,.17],[r*.393,-.22,o*.375],.04,e,"metal"),t.block([.14,.048,.14],[r*.35,-.29,o*.34],.02,i),t.bead([r*.415,.297,o*.395],[.021,.011,.021],e,"metal");for(const o of[-.23,-.115,0,.115,.23])t.block([.024,.24,.026],[r*.467,-.055,o],.012,e,"metal");t.block([.115,.18,.052],[r*.29,.105,.47],.016,e,"metal"),t.block([.075,.102,.034],[r*.29,.085,.507],.012,a,"metal"),t.bead([r*.29,.165,.509],[.018,.016,.013],n)}t.cord([[-.135,.1,.495],[-.155,.005,.54],[-.1,-.045,.56],[.1,-.045,.56],[.155,.005,.54],[.135,.1,.495]],.026,i),this.antBadge(t,0,-.16,.457,"#d7ded5",n),t.rim(.84,.8,.303,.13,.012,"#dbe1d8","metal");for(const r of[-.12,0,.12])t.block([.062,.01,.018],[r,.312,-.36],.005,n)}antBadge(t,e,n,i,a,r){t.block([.22,.115,.016],[e,n,i],.035,a);for(let o=0;o<3;o++)t.bead([e+(o-1)*.042,n,i+.014],[o===0?.028:.022,.025,.009],r);for(const o of[-1,1])for(let l=0;l<3;l++){const c=e-.015+l*.025;t.cord([[c,n,i+.017],[c-.007,n+o*.035,i+.017]],.004,r)}}createBody(t){const e=new jt(this.body,new pe({color:t,roughness:this.roughness,metalness:this.metalness,envMapIntensity:1}));e.position.y=Vn/2,e.castShadow=e.receiveShadow=!0;for(const n of this.details){const i=new jt(n.geometry,n.material);i.castShadow=i.receiveShadow=!0,e.add(i)}return e}dispose(){this.body.dispose();for(const{geometry:t,material:e}of this.details)t.dispose(),e.dispose()}}const Xc=new Ct("#9b94b3"),Xm=new Ct("#8f8a7c"),qm=new Ct("#ff5a4a"),qc=14,$c=new P(1,0,0);class $m{group=new Pe;boxes=new Map;links=[];boxStyle;iceGeo=new Qe(1.12,Vn*1.25,1.12,2,.16);labelGeo=new Ye(1,1);iceMat=new pe({color:"#cfefff",transparent:!0,opacity:.62,roughness:.08,metalness:.05,envMapIntensity:1.6,depthWrite:!1});linkMat=new pe({color:"#e0b04a",roughness:.28,metalness:.85,envMapIntensity:1.4});linkGeo=new hi(.075,.024,8,18);lq=new Ge;lq2=new Ge;lm=new ie;ls=new P;lp=new P;ldir=new P;mysteryTex=Gm();tray=null;trayMat=new pe({color:"#efd3a0",roughness:.62});padMat=new pe({color:"#d9b67c",roughness:.85});padBase=new Ct("#d9b67c");layout;sim;colors;tmp=new P;tmp2=new P;slotPulse=0;more=[];hint="count";constructor(t,e,n="count",i="classic"){this.boxStyle=new u0(i),this.hint=n,this.sim=t,this.colors=e.map(r=>new Ct(r));for(let r=0;r<t.boxIds;r++)t.boxColor(r)<0||this.boxes.set(r,this.makeBox(r));for(let r=0;r<t.columns.length;r++){const o=new Jo(128),l=new jt(this.labelGeo,new pi({map:o.texture,transparent:!0,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.renderOrder=5,this.group.add(l),this.more.push({mesh:l,label:o})}const a=new Set;for(let r=0;r<t.boxIds;r++){const o=t.boxLink(r);if(o<0||a.has(o))continue;a.add(o);const l=t.groupOf(r);for(let c=0;c+1<l.length;c++){const h=new Ke(this.linkGeo,this.linkMat,qc);h.castShadow=!0,h.frustumCulled=!1,this.group.add(h),this.links.push({a:l[c],b:l[c+1],chain:h})}}}makeBox(t){const e=new Pe,n=this.colors[this.sim.boxColor(t)],i=this.boxStyle.createBody(n),a=i.material;i.userData.boxId=t,e.add(i);const r=new Jo(128),o=new pe({map:r.texture,transparent:!0,depthWrite:!1,roughness:.45,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2}),l=new jt(this.labelGeo,o);l.renderOrder=5,e.add(l);let c=null;return this.sim.boxThawAt(t)>0&&(c=new jt(this.iceGeo,this.iceMat),c.position.y=Vn*1.25/2-.02,c.renderOrder=4,e.add(c)),this.group.add(e),{id:t,group:e,body:i,mat:a,label:r,labelMesh:l,ice:c,color:n,hiddenShown:!1,where:"queue",from:new P,to:new P,t:1,dur:.001,arc:0,shake:0,flip:0,pop:0,bump:0,hint:0,fade:1,row:0}}setSim(t){this.sim=t}setNight(t){this.trayMat.color.set(t?"#6c6586":"#efd3a0"),this.padBase.set(t?"#57506f":"#d9b67c"),this.padMat.color.copy(this.padBase)}setLayout(t){this.layout=t,this.buildTray(t);for(const e of this.boxes.values())e.labelMesh.rotation.set(-Math.PI/2,0,0),e.labelMesh.scale.setScalar(.92);this.more.forEach((e,n)=>{const i=zc(t,n,t.queueRowsVisible-(t.queueRow>0?.4:-.15));e.mesh.position.set(i.x,.02,i.z),e.mesh.scale.setScalar(t.boxSize*.8)}),this.syncFromSim(!1)}buildTray(t){this.tray&&(this.group.remove(this.tray),this.tray.traverse(u=>u.geometry?.dispose()));const e=new Pe,n=t.slot.length,i=n>1?t.slot[1].x-t.slot[0].x:1.6,a=(t.slot[0].x+t.slot[n-1].x)/2,r=t.slot[0].z,o=i*(n-1)+t.slotSize+.55,l=t.slotSize+.55,c=Xa(a-o/2,-(r+l/2),o,l,.4),h=new fi(c,{depth:.12,bevelEnabled:!0,bevelThickness:.05,bevelSize:.06,bevelSegments:3,curveSegments:8});h.rotateX(-Math.PI/2);const f=new jt(h,this.trayMat);f.receiveShadow=!0,f.castShadow=!0,e.add(f);for(const u of t.slot){const d=new jt(new Tn(Xa(u.x-t.slotSize/2-.04,-(u.z+t.slotSize/2+.04),t.slotSize+.08,t.slotSize+.08,.22),6),this.padMat);d.geometry.rotateX(-Math.PI/2),d.position.y=.175,d.receiveShadow=!0,e.add(d)}this.tray=e,this.group.add(e)}columnX(t){const e=this.layout,n=e.queueCol.length,i=n>1?e.queueCol[1]-e.queueCol[0]:1.6,a=(e.queueCol[0]+e.queueCol[n-1])/2,r=[];for(let l=0;l<this.sim.columns.length;l++)this.sim.columns[l].length&&r.push(l);const o=r.indexOf(t);return o<0?e.queueCol[t]:a+(o-(r.length-1)/2)*i}targetOf(t,e){const n=this.sim.boxWhere[t];if(n===ln.Queue){const i=this.sim.boxCol[t],a=this.sim.columns[i].indexOf(t),r=zc(this.layout,i,a);return e.set(this.columnX(i),0,r.z),{where:"queue",row:a}}if(n===ln.Slot){const i=this.sim.slots.findIndex(r=>r?.box===t),a=this.layout.slot[Math.max(0,Math.min(this.layout.slot.length-1,i))];return e.set(a.x,.17,a.z),{where:"slot",row:0}}return{where:"gone",row:0}}syncFromSim(t=!0){for(const e of this.boxes.values()){const{where:n,row:i}=this.targetOf(e.id,this.tmp),a=e.where==="gone";if(n==="gone"){e.where!=="gone"&&(e.where="gone",t?e.pop=Math.max(e.pop,1e-4):e.group.visible=!1);continue}a&&(e.group.visible=!0,e.pop=0);const r=!e.to.equals(this.tmp)||e.where!==n;if(e.row=i,r){e.from.copy(t?e.group.position:this.tmp),e.to.copy(this.tmp),e.t=0;const o=n==="slot"&&e.where==="queue";e.dur=t?o?.42:.26:1e-4,e.arc=o?1.4:0,t||e.group.position.copy(this.tmp)}e.where=n}this.refreshLabels()}refreshLabels(){for(const t of this.boxes.values())this.refreshLabel(t);this.layout&&this.more.forEach((t,e)=>{const n=Math.max(0,this.sim.columns[e].length-this.layout.queueRowsVisible);t.mesh.visible=n>0,t.mesh.position.x=this.columnX(e),n>0&&t.label.draw(this.hint==="mystery"?"?":`+${n}`,{fill:"#ffffff",stroke:"rgba(40, 28, 70, 0.9)",shadow:"rgba(0, 0, 0, 0.3)",scale:.85})})}refreshLabel(t){const e=this.sim.boxHidden[t.id]===1,n=this.sim.isFrozen(t.id);if(e)t.mat.color.copy(Xc),t.mat.map=this.mysteryTex,t.mat.needsUpdate=t.hiddenShown===!1,t.hiddenShown=!0,t.label.draw("?",Zc(Xc));else if(t.hiddenShown&&(t.hiddenShown=!1,t.mat.map=null,t.mat.needsUpdate=!0,t.flip=1),t.mat.color.copy(t.color),n)t.label.draw(String(this.sim.frozenLeft(t.id)),{fill:"#eefaff",stroke:"#3d7fae",shadow:"rgba(30,70,110,0.4)"});else{const i=this.sim.slots.find(r=>r?.box===t.id),a=i?i.left:this.sim.boxWhere[t.id]===ln.Done?0:this.sim.boxCount(t.id);t.label.draw(String(a),Zc(t.color))}t.ice&&!n&&t.ice.visible&&(t.ice.visible=!1)}pick(t){const e=[];for(const i of this.boxes.values())i.where==="queue"&&i.group.visible&&i.fade>.2&&e.push(i.body);const n=t.intersectObjects(e,!1)[0];return n?n.object.userData.boxId:null}shake(t){const e=this.boxes.get(t);e&&(e.shake=.45)}bump(t){const e=this.boxes.get(t);e&&(e.bump=.25)}setHint(t){for(const e of this.boxes.values())e.hint=e.id===t?Math.max(e.hint,.001):0}pulseSlots(){this.slotPulse=1}boxTop(t,e){const n=this.boxes.get(t);if(!n)return e.set(0,0,0);const i=n.t<1?n.to:n.group.position;return e.copy(i).setY(i.y+Vn*this.layout.boxSize)}boxColor(t){return this.colors[this.sim.boxColor(t)]}isSettled(){for(const t of this.boxes.values())if(t.pop>0||t.t<1&&t.where!=="gone")return!1;return!0}update(t,e){const n=this.layout,i=n.boxSize;for(const a of this.boxes.values()){if(a.where==="gone"&&a.pop===0){a.group.visible=!1;continue}if(a.t<1){a.t=Math.min(1,a.t+t/a.dur);const d=Yc(a.t);a.group.position.lerpVectors(a.from,a.to,d),a.group.position.y+=Math.sin(a.t*Math.PI)*a.arc,a.t>=1&&a.arc>0&&(a.bump=.22)}let r=i,o=i,l=i;if(a.bump>0){a.bump=Math.max(0,a.bump-t);const d=a.bump/.22;o*=1-Math.sin(d*Math.PI)*.18,r*=1+Math.sin(d*Math.PI)*.1,l=r}let c=0;if(a.shake>0&&(a.shake=Math.max(0,a.shake-t),c=Math.sin(a.shake*55)*.09*(a.shake/.45)),a.pop>0){a.pop+=t;const d=a.pop/.3,m=d<.35?1+d*.5:Math.max(0,1.18*(1-(d-.35)/.65));if(r*=m,o*=m,l*=m,d>=1){a.group.visible=!1,a.pop=0;continue}}a.hint>0&&(a.hint+=t,a.group.position.y=a.to.y+Math.abs(Math.sin(a.hint*5))*.35);const h=a.where!=="queue"||a.row<n.queueRowsVisible?1:0;a.fade+=(h-a.fade)*Math.min(1,t*8);const f=a.fade,u=.55+.45*f;a.group.scale.set(r*u,o*u,l*u),a.group.visible=f>.05||a.pop>0,a.group.visible&&(a.body.position.x=c,a.labelMesh.position.set(c,Vn+.012,h0),a.labelMesh.visible=f>.75,a.hiddenShown||a.mat.color.copy(a.color).lerp(Xm,(1-f)*.9),a.flip>0?(a.flip=Math.max(0,a.flip-t*2.8),a.body.rotation.x=(1-Yc(1-a.flip))*Math.PI*2*(a.flip>0?1:0)):a.body.rotation.x=0,a.ice&&(a.ice.rotation.y=Math.sin(e*1.3+a.id)*.02))}for(const a of this.links)this.updateChain(a,i);if(this.slotPulse>0){this.slotPulse=Math.max(0,this.slotPulse-t*.7);const a=Math.sin(this.slotPulse*Math.PI*4)*this.slotPulse;this.padMat.color.copy(this.padBase).lerp(qm,Math.max(0,a)*.6)}}updateChain(t,e){const n=this.boxes.get(t.a),i=this.boxes.get(t.b),a=n.group.visible&&i.group.visible&&n.where!=="gone"&&i.where!=="gone"&&n.fade>.3&&i.fade>.3;if(t.chain.visible=a,!a)return;const r=this.tmp.copy(n.group.position),o=this.tmp2.copy(i.group.position),l=this.ldir.subVectors(o,r).setY(0),c=l.length();if(c<1e-4){t.chain.count=0;return}l.divideScalar(c);const h=e*.5*Math.min(1/Math.max(Math.abs(l.x),.001),1/Math.max(Math.abs(l.z),.001),1.4)-.05*e,f=r.y+Vn*e*.55,u=o.y+Vn*e*.55,d=Math.max(.05,c-h*2),m=Math.max(2,Math.min(qc,Math.round(d/(.13*e))+1));this.lq.setFromUnitVectors($c,l);for(let x=0;x<m;x++){const g=m===1?.5:x/(m-1),p=h+d*g,v=Math.sin(g*Math.PI)*Math.min(.12,d*.18);this.ls.set(r.x+l.x*p,f+(u-f)*g-v,r.z+l.z*p),this.lq2.setFromAxisAngle($c,x%2?Math.PI/2:0).premultiply(this.lq),this.lm.compose(this.ls,this.lq2,this.lp.set(1.45*e,e,e)),t.chain.setMatrixAt(x,this.lm)}t.chain.count=m,t.chain.instanceMatrix.needsUpdate=!0}dispose(){for(const t of this.links)t.chain.dispose();for(const t of this.more)t.label.dispose(),t.mesh.material.dispose();for(const t of this.boxes.values())t.mat.dispose(),t.label.dispose(),t.labelMesh.material.dispose();this.boxStyle.dispose(),this.iceGeo.dispose(),this.labelGeo.dispose(),this.iceMat.dispose(),this.linkMat.dispose(),this.linkGeo.dispose(),this.mysteryTex.dispose(),this.trayMat.dispose(),this.padMat.dispose(),this.tray?.traverse(t=>t.geometry?.dispose())}}function Yc(s){return 1-Math.pow(1-s,3)}function Zc(s){const t={h:0,s:0,l:0};s.getHSL(t,we);const e=Math.round(t.h*360),n=Math.round(Math.min(.75,t.s)*100);if(t.l>.78)return{fill:`hsl(${e}, ${Math.round(n*.6)}%, 30%)`,stroke:`hsl(${e}, ${Math.round(n*.4)}%, 98%)`,shadow:`hsla(${e}, ${n}%, 25%, 0.22)`};const i=t.l>.66;return{fill:`hsl(${e}, ${Math.round(n*.5)}%, ${i?99:96}%)`,stroke:`hsl(${e}, ${n}%, ${Math.round(Math.max(.16,t.l*(i?.45:.42))*100)}%)`,shadow:`hsla(${e}, ${n}%, ${Math.round(Math.max(.1,t.l*.3)*100)}%, 0.45)`}}function ge(s,t){const e=s.index?s.toNonIndexed():s;e!==s&&s.dispose(),e.deleteAttribute("uv");const n=new Ct(t),i=e.attributes.position.count,a=new Float32Array(i*3);for(let r=0;r<i;r++)a.set([n.r,n.g,n.b],r*3);return e.setAttribute("color",new je(a,3)),e}function Si(s,t=-.35,e=.5,n=.29){const i=$s(s,!1);for(const a of s)a.dispose();return i.rotateX(t),i.translate(0,e,n),i.computeVertexNormals(),i}function Gr(s,t=.035){return new fi(s,{depth:t,steps:1,curveSegments:8,bevelEnabled:!0,bevelSegments:2,bevelSize:.008,bevelThickness:.008})}function Ym(){const s=new cs([new P(0,.025,0),new P(0,.19,0),new P(.07,.34,0),new P(.2,.36,0),new P(.27,.25,0)]),t=[],e=[],n=16,i=16;for(let r=0;r<=n;r++){const o=r/n,l=s.getPoint(o),c=s.getTangent(o),h=.185*Math.pow(1-o,.85)+.003;for(let f=0;f<=i;f++){const u=f/i*Math.PI*2;if(t.push(l.x+c.y*Math.cos(u)*h,l.y-c.x*Math.cos(u)*h,Math.sin(u)*h*.88),r<n&&f<i){const d=r*(i+1)+f,m=d+i+1;e.push(d,m,d+1,d+1,m,m+1)}}}const a=new Le;return a.setAttribute("position",new te(t,3)),a.setIndex(e),a.computeVertexNormals(),a}function f0(s){switch(s){case"party":{const t=new Vs(.165,.42,20);t.translate(0,.21,0);const e=[ge(t,"#7845db")];for(const a of[.11,.25]){const o=new Fe(.165*(1-(a+.0175)/.42)+.002,.165*(1-(a-.0175)/.42)+.002,.035,20);o.translate(0,a,0),e.push(ge(o,"#fff0bd"))}const n=new hi(.158,.022,6,20);n.rotateX(Math.PI/2),n.translate(0,.015,0);const i=new Me(.055,10,8);return i.translate(0,.425,0),e.push(ge(n,"#51decf"),ge(i,"#51decf")),Si(e,-.1,.53)}case"cap":{const t=new Me(.2,20,10,0,Math.PI*2,0,Math.PI/2);t.scale(1,.78,.95);const e=new Mn;e.moveTo(-.18,.025),e.quadraticCurveTo(-.235,.18,-.18,.265),e.quadraticCurveTo(0,.36,.18,.265),e.quadraticCurveTo(.235,.18,.18,.025),e.closePath();const n=Gr(e,.018);n.rotateX(Math.PI/2),n.translate(0,.006,0);const i=new hi(.197,.014,6,24);i.rotateX(Math.PI/2),i.scale(1,1,.95);const a=new Me(.026,8,6);a.scale(1,.6,1),a.translate(0,.16,0);const r=[ge(t,"#398de8"),ge(n,"#145cba"),ge(i,"#144b9b"),ge(a,"#fff2c8")];for(const l of[-Math.PI/4,Math.PI/4,Math.PI]){const c=[];for(let h=0;h<=8;h++){const f=h/8*Math.PI/2;c.push(new P(Math.sin(l)*Math.sin(f)*.202,Math.cos(f)*.159,Math.cos(l)*Math.sin(f)*.193))}r.push(ge(new hs(new cs(c),8,.005,4,!1),"#a2d5ff"))}const o=new Me(.035,10,6);return o.scale(1,1,.22),o.translate(0,.072,.174),r.push(ge(o,"#fff2c8")),Si(r,.08,.545,.26)}case"bow":{const t=[];for(const i of[-1,1]){const a=new Mn;a.moveTo(0,0),a.bezierCurveTo(.08,.09,.22,.15,.22,.06),a.bezierCurveTo(.245,-.07,.17,-.09,0,0);const r=Gr(a,.055);i<0&&r.rotateY(Math.PI),t.push(ge(r,i<0?"#45d9cb":"#63ead9"));const o=new Mn;o.moveTo(.015,-.005),o.lineTo(.13,-.16),o.lineTo(.065,-.137),o.lineTo(.026,-.175),o.lineTo(-.025,-.025),o.closePath();const l=Gr(o,.018);i<0&&l.rotateY(Math.PI),l.translate(0,0,-.03),t.push(ge(l,"#168f98"))}const e=new Me(.052,12,8);e.scale(.8,1,.8),e.translate(0,0,.036),t.push(ge(e,"#e1fff3"));const n=Si(t,-.6,.66,.3);return n.rotateZ(-.12),n}case"flower":{const t=[],e=new Me(1,10,6);e.scale(.11,.045,.021),e.rotateZ(-.45),e.translate(-.12,-.1,-.03),t.push(ge(e,"#329766"));for(let a=0;a<8;a++){const r=new Me(1,12,8);r.scale(.087,.044,.025),r.translate(.104,0,0),r.rotateZ(a/8*Math.PI*2),t.push(ge(r,a%2?"#fff4ce":"#ffffff"))}const n=new Me(.066,12,8);n.scale(1,1,.55),n.translate(0,0,.025),t.push(ge(n,"#ffc933"));const i=Si(t,-.65,.68,.32);return i.translate(.105,0,0),i}case"sunglasses":{const t=[];for(const i of[-1,1]){const a=new Fe(.075,.075,.02,16);a.rotateX(Math.PI/2),a.translate(i*.095,.41,.535),t.push(ge(a,"#1d1d24"))}const e=new cn(.06,.018,.018);e.translate(0,.43,.54),t.push(ge(e,"#1d1d24"));const n=$s(t,!1);return n.computeVertexNormals(),n}case"tophat":{const t=new Fe(.095,.105,.22,16);t.translate(0,.13,0);const e=new Fe(.17,.17,.022,20);e.translate(0,.02,0);const n=new Fe(.107,.107,.045,16);return n.translate(0,.06,0),Si([ge(t,"#2b2d42"),ge(e,"#2b2d42"),ge(n,"#e63946")])}case"santa":{const t=new hi(.176,.042,8,24);t.rotateX(Math.PI/2),t.scale(1,1,.9),t.translate(0,.025,0);const e=new Me(.068,12,8);return e.translate(.27,.245,0),Si([ge(Ym(),"#cf2145"),ge(t,"#fff8e9"),ge(e,"#fff8e9")],-.08,.55)}case"crown":{const t=[],e=new Fe(.12,.11,.08,16,1,!0);e.translate(0,.04,0),t.push(ge(e,"#ffc933"));for(let n=0;n<5;n++){const i=n/5*Math.PI*2,a=new Vs(.03,.08,6);a.translate(Math.cos(i)*.115,.12,Math.sin(i)*.115),t.push(ge(a,"#ffc933"));const r=new Me(.02,8,6);r.translate(Math.cos(i)*.12,.045,Math.sin(i)*.12),t.push(ge(r,n%2?"#3a86ff":"#e63946"))}return Si(t,-.25)}default:return null}}const yi=700,Ko=6;function d0(){const s=[],t=(n,i,a,r,o,l,c=12)=>{const h=new Me(1,c,Math.round(c*.75));h.scale(n,i,a),h.translate(r,o,l),s.push(h)};t(.25,.21,.31,0,.27,-.33),t(.075,.075,.09,0,.23,-.05,8),t(.13,.12,.17,0,.25,.08,12),t(.22,.2,.21,0,.33,.33);for(const n of[-1,1]){const i=new cs([new P(n*.07,.47,.38),new P(n*.13,.66,.43),new P(n*.22,.72,.6)]);s.push(new hs(i,6,.022,4,!1)),t(.045,.045,.045,n*.22,.72,.6,8)}const e=$s(s.map(n=>n.toNonIndexed()),!1);return e.computeVertexNormals(),e}function $a(s,t,e,n){const i=new Me(s,8,6);i.translate(-n,e,t);const a=new Me(s,8,6);return a.translate(n,e,t),$s([i,a],!1)}function p0(){const s=new cs([new P(0,0,0),new P(.17,.09,0),new P(.3,.02,0),new P(.36,-.2,0)]);return new hs(s,6,.024,4,!1)}function Zm(s,t="none"){const e=new Pe,n=new Ct(s),i={h:0,s:0,l:0};n.getHSL(i);const a=new Ct().setHSL(i.h,Math.min(1,i.s*.9),Math.max(.03,i.l*.45));e.add(new jt(d0(),new pe({color:n,roughness:.32}))),e.add(new jt($a(.085,.47,.4,.1),new pe({color:"#ffffff",roughness:.25}))),e.add(new jt($a(.048,.535,.41,.105),new pe({color:"#15101f",roughness:.2})));const r=p0(),o=new pe({color:a,roughness:.5});for(let c=0;c<Ko;c++){const h=c<3?-1:1,f=c%3,u=new jt(r,o);u.position.set(h*.08,.22,m0[f]),u.rotation.set(0,(h<0?Math.PI:0)-h*g0[f],0),e.add(u)}const l=f0(t);return l&&e.add(new jt(l,new pe({vertexColors:!0,roughness:.45,side:$e}))),e}const m0=[.15,.07,-.01],g0=[.55,0,-.55];class Jm{group=new Pe;body;eyes;pupils;legs;cubes;ants=[];palette;legColors;layout;board;cb;speed=1;m=new ie;m2=new ie;q=new Ge;e=new bn;v=new P;s=new P;one=new P(1,1,1);antSize=.42;rect={x0:0,x1:0,z0:0,z1:0,ix0:0,ix1:0,iz0:0,iz1:0,rim:.2};sim;bfsDist=new Int32Array(0);bfsPrev=new Int32Array(0);ready=new Set;house={x0:0,x1:0,z0:0,z1:0};door={x:0,z:0};hat=null;constructor(t,e,n,i,a="cube",r="none"){this.board=e,this.sim=n,this.cb=i,this.palette=t.map(c=>new Ct(c)),this.legColors=this.palette.map(c=>{const h={h:0,s:0,l:0};return c.getHSL(h),new Ct().setHSL(h.h,Math.min(1,h.s*.9),Math.max(.03,h.l*.45))});const o=new pe({roughness:.32,metalness:0,envMapIntensity:1.1});this.body=new Ke(d0(),o,yi),this.body.castShadow=!0,this.eyes=new Ke($a(.085,.47,.4,.1),new pe({color:"#ffffff",roughness:.25}),yi),this.pupils=new Ke($a(.048,.535,.41,.105),new pe({color:"#15101f",roughness:.2}),yi),this.legs=new Ke(p0(),new pe({roughness:.5}),yi*Ko),this.cubes=new Ke(r0(a,!0),o0(a),yi);const l=f0(r);l&&(this.hat=new Ke(l,new pe({vertexColors:!0,roughness:.45,side:$e}),yi),this.hat.castShadow=!0,this.hat.frustumCulled=!1,this.hat.count=0,this.hat.instanceMatrix.setUsage(Nl),this.group.add(this.hat)),this.cubes.castShadow=!0;for(const c of[this.body,this.eyes,this.pupils,this.legs,this.cubes])c.frustumCulled=!1,c.count=0,c.instanceMatrix.setUsage(Nl),this.group.add(c);this.body.setColorAt(0,this.palette[0]),this.legs.setColorAt(0,this.palette[0]),this.cubes.setColorAt(0,this.palette[0])}setLayout(t){this.layout=t,this.antSize=Math.max(.46,Math.min(.74,t.cell*1.9));const e=t.cell*.35,n=t.picX0-e,i=t.picZ0-e,a=t.picX0+t.picW+e,r=t.picZ0+t.picH+e;this.rect={ix0:n,iz0:i,ix1:a,iz1:r,x0:n-t.frame,z0:i-t.frame,x1:a+t.frame,z1:r+t.frame,rim:Math.max(.06,Math.min(.2,t.cell*.32))+.1};const o=t.boxSize/2+.25,l=t.queueZ0-Math.sign(t.queueRow)*o,c=t.queueZ0+(t.queueRowsVisible+1)*t.queueRow;this.avoid={x0:t.queueCol[0]-o,x1:t.queueCol[t.queueCol.length-1]+o,z0:Math.min(l,c),z1:Math.max(l,c)},this.clear()}avoid={x0:0,x1:0,z0:0,z1:0};get count(){return this.ants.length}setHome(t,e){this.house=t,this.door={x:e.x,z:e.z}}clear(){this.ants.length=0,this.ready.clear()}fadeAll(){for(const t of this.ants)t.phase="fade",t.timer=0;this.ready.clear()}pickup(t){this.ready.add(t),this.ants.some(e=>e.cell===t&&(e.phase==="out"||e.phase==="bite"))||(this.board.remove(t),this.ready.delete(t),this.cb.onPick(t),this.cb.onDeliver())}spawn(t,e,n,i=2,a=0){if(this.ants.length>=yi)return;const r=Math.random(),o=t.x+(r-.5)*.3,l=t.z+.2,c=this.planInside(e,o,l),h=[o,l];this.route(h,c.inside[0],c.inside[1]);const f=h.length/2-1;for(let g=2;g<c.inside.length;g+=2)h.push(c.inside[g],c.inside[g+1]);const u={color:n,cell:e,pts:h,cum:[],dist:0,phase:"out",timer:0,yaw:Math.PI,legPhase:r*6,startY:t.y,seed:r,line:c.block,lineD:[],x:h[0],z:h[1],y:t.y,scale:.2,wait:0,back:c.inside.length/2,spd:1,delay:a};this.measure(u);const d=u.cum[u.cum.length-1],m=3.3;u.spd=Math.max(.7,Math.min(2.2,d/Math.max(.3,i-a-.3)/m));const x=u.cum[f];u.lineD=c.blockD.map(g=>x+g),this.ants.push(u)}cellXZ(t,e){const n=this.layout,i=this.sim.w,a=t%i;return e.x=n.picX0+(a+.5)*n.cell,e.z=n.picZ0+((t-a)/i+.5)*n.cell,e}exitPoint(t,e){const n=this.cellXZ(t,{x:0,z:0}),i=this.rect;return e===1?n.z=i.z1+.25:e===2?n.z=i.z0-.25:e===4?n.x=i.x0-.25:n.x=i.x1+.25,n}planInside(t,e,n){const i=this.sim,a=i.w,r=i.h,o=a*r,c=this.layout.cell;this.bfsDist.length!==o&&(this.bfsDist=new Int32Array(o),this.bfsPrev=new Int32Array(o));const h=this.bfsDist.fill(-1),f=this.bfsPrev,u=K=>i.isFree(K)&&i.air[K]===1;let d=1/0,m=-1,x=0;const g=(K,q)=>{const Q=i.edgeMask(K);for(const j of[1,2,4,8]){if(!(Q&j))continue;const wt=this.exitPoint(K,j),St=q*c+Math.hypot(wt.x-e,wt.z-n)*.8;St<d&&(d=St,m=K,x=j)}};h[t]=0,g(t,0);const p=[t];for(let K=0;K<p.length;K++){const q=p[K],Q=q%a,j=(q-Q)/a;for(let wt=0;wt<4;wt++){const St=wt===2?Q-1:wt===3?Q+1:Q,ee=wt===0?j+1:wt===1?j-1:j;if(St<0||ee<0||St>=a||ee>=r)continue;const Wt=ee*a+St;h[Wt]>=0||!u(Wt)||(h[Wt]=h[q]+1,f[Wt]=q,g(Wt,h[Wt]),p.push(Wt))}}const v=this.cellXZ(t,{x:0,z:0}),S=c*.5+this.antSize*.4,_=[];if(m<0)return _.push(v.x,this.rect.z1+.25,v.x,v.z+S),{inside:_,block:[],blockD:[]};const w=this.exitPoint(m,x),E=(Math.random()-.5)*c*.35,C=x===1||x===2;_.push(w.x+(C?E:0),w.z+(C?0:E));const b=[];for(let K=m;K!==t;K=f[K])b.push(K);const T={x:0,z:0};for(const K of b)this.cellXZ(K,T),_.push(T.x,T.z);const R=b.length?_[_.length-2]:w.x,D=b.length?_[_.length-1]:w.z;let B=R-v.x,O=D-v.z;const N=Math.hypot(B,O)||1;B/=N,O/=N,_.push(v.x+B*S,v.z+O*S);const L=this.smoothPath(_,t),{block:G,blockD:W}=this.blockingCells(L,t);return{inside:L,block:G,blockD:W}}walkable(t,e,n,i,a){const r=this.layout,o=this.sim.w,l=this.sim.h,c=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(c/(r.cell*.3)));for(let f=1;f<h;f++){const u=f/h,d=Math.floor((t+(n-t)*u-r.picX0)/r.cell),m=Math.floor((e+(i-e)*u-r.picZ0)/r.cell);if(d<0||m<0||d>=o||m>=l)continue;const x=m*o+d;if(x!==a&&(!this.sim.isFree(x)||!this.sim.air[x]))return!1}return!0}smoothPath(t,e){const n=t.length/2;if(n<=2)return t;const i=[t[0],t[1]];let a=0;for(;a<n-1;){let r=Math.min(n-1,a+14);for(;r>a+1&&!this.walkable(t[a*2],t[a*2+1],t[r*2],t[r*2+1],e);)r--;i.push(t[r*2],t[r*2+1]),a=r}return i}blockingCells(t,e){const n=this.layout,i=this.sim.w,a=this.sim.h,r=[],o=[],l=new Set;let c=0;const h=this.antSize*.45;for(let f=0;f+3<t.length;f+=2){const u=t[f],d=t[f+1],m=t[f+2],x=t[f+3],g=Math.hypot(m-u,x-d),p=Math.max(1,Math.ceil(g/(n.cell*.25)));for(let v=0;v<=p;v++){const S=v/p,_=Math.floor((u+(m-u)*S-n.picX0)/n.cell),w=Math.floor((d+(x-d)*S-n.picZ0)/n.cell);if(_<0||w<0||_>=i||w>=a)continue;const E=w*i+_;E===e||l.has(E)||this.sim.cellColor(E)<0||(l.add(E),r.push(E),o.push(Math.max(0,c+g*S-h)))}c+=g}return{block:r,blockD:o}}route(t,e,n){const i=t[t.length-2],a=t[t.length-1],r=this.findPath(i,a,e,n,!0)??this.findPath(i,a,e,n,!1)??[];for(const o of r)t.push(o[0]+(Math.random()-.5)*.2,o[1]+(Math.random()-.5)*.2);t.push(e,n)}blocked(t,e,n,i,a){return this.crosses(this.rect,t,e,n,i)||this.crosses(this.house,t,e,n,i)||a&&this.crosses(this.avoid,t,e,n,i)}findPath(t,e,n,i,a){if(!this.blocked(t,e,n,i,a))return[];const r=.3,o=[],l=v=>o.push([v.x0-r,v.z0-r],[v.x1+r,v.z0-r],[v.x1+r,v.z1+r],[v.x0-r,v.z1+r]);l(this.rect),l(this.house),a&&l(this.avoid);const c=o.length,h=(v,S)=>Math.hypot(v[0]-S[0],v[1]-S[1]),f=[t,e],u=[n,i],d=(v,S)=>!this.blocked(v[0],v[1],S[0],S[1],a),m=o.map(v=>d(f,v)),x=o.map(v=>d(v,u));let g=null,p=1/0;for(let v=0;v<c;v++)if(m[v]){if(x[v]){const S=h(f,o[v])+h(o[v],u);S<p&&(p=S,g=[o[v]])}for(let S=0;S<c;S++){if(S===v||!d(o[v],o[S]))continue;const _=h(f,o[v])+h(o[v],o[S]);if(!(_>=p)){if(x[S]){const w=_+h(o[S],u);w<p&&(p=w,g=[o[v],o[S]])}for(let w=0;w<c;w++){if(w===v||w===S||!x[w]||!d(o[S],o[w]))continue;const E=_+h(o[S],o[w])+h(o[w],u);E<p&&(p=E,g=[o[v],o[S],o[w]])}}}}return g}crosses(t,e,n,i,a){const o=t.x0+.05,l=t.x1-.05,c=t.z0+.05,h=t.z1-.05;let f=0,u=1;const d=i-e,m=a-n,x=[-d,d,-m,m],g=[e-o,l-e,n-c,h-n];for(let p=0;p<4;p++)if(x[p]===0){if(g[p]<0)return!1}else{const v=g[p]/x[p];if(x[p]<0){if(v>u)return!1;v>f&&(f=v)}else{if(v<f)return!1;v<u&&(u=v)}}return u-f>1e-4}measure(t){t.cum=[0];for(let e=2;e<t.pts.length;e+=2)t.cum.push(t.cum[t.cum.length-1]+Math.hypot(t.pts[e]-t.pts[e-2],t.pts[e+1]-t.pts[e-1]))}posAt(t,e){const n=t.cum;let i=1;for(;i<n.length-1&&n[i]<e;)i++;const a=n[i]-n[i-1],r=a>0?Math.min(1,Math.max(0,(e-n[i-1])/a)):1;t.x=t.pts[(i-1)*2]+(t.pts[i*2]-t.pts[(i-1)*2])*r,t.z=t.pts[(i-1)*2+1]+(t.pts[i*2+1]-t.pts[(i-1)*2+1])*r}setSim(t){this.sim=t}goHome(t){const e=[],n=Math.max(0,t.pts.length/2-Math.max(2,t.back));for(let a=t.pts.length/2-1;a>=n;a--)e.push(t.pts[a*2],t.pts[a*2+1]);const i=this.door.x+(Math.random()-.5)*.08;this.route(e,i,this.door.z+.35),e.push(i,this.door.z),t.pts=e,t.line=[],t.lineD=[],this.measure(t),t.dist=0,t.phase="home",t.startY=0}update(t,e){const n=3.3*this.speed,i=this.rect,a=[];for(const r of this.ants){if(r.delay>0){r.delay-=t*this.speed,r._s=0,a.push(r);continue}let o=!1;if(r.phase==="out"||r.phase==="home"){const m=r.cum[r.cum.length-1];let x=m;for(let p=0;p<r.line.length;p++)if(this.board.isPresent(r.line[p])){x=Math.min(x,r.lineD[p]-.05);break}const g=r.dist;r.dist=Math.min(x,r.dist+n*t*(r.phase==="out"?r.spd:1)*(.95+r.seed*.1)),r.dist<g&&(r.dist=g),o=r.dist>g+1e-5,!o&&r.dist<m-1e-4?(r.wait+=t*this.speed,r.wait>1.4&&(r.line=[])):r.wait=0,this.posAt(r,r.dist),r.dist>=m-1e-4&&(r.phase==="out"?(r.phase="bite",r.timer=0,this.board.wobble(r.cell)):(r.phase="enter",r.timer=0))}else if(r.phase==="bite")r.timer+=t*this.speed,r.timer>.15&&this.ready.has(r.cell)&&(this.ready.delete(r.cell),this.board.remove(r.cell),this.cb.onPick(r.cell),this.goHome(r));else if(r.phase==="enter"){if(r.timer+=t*this.speed,r.timer>.22){this.cb.onDeliver();continue}}else if(r.phase==="fade"&&(r.timer+=t,r.timer>.35))continue;const l=Math.min(r.cum.length-1,Math.max(1,r.cum.findIndex(m=>m>=r.dist))),c=r.pts[l*2]-r.pts[(l-1)*2],h=r.pts[l*2+1]-r.pts[(l-1)*2+1];if(r.phase!=="bite"){if(c*c+h*h>1e-6){let x=Math.atan2(c,h)-r.yaw;for(;x>Math.PI;)x-=Math.PI*2;for(;x<-Math.PI;)x+=Math.PI*2;r.yaw+=x*Math.min(1,t*14)}}o&&(r.legPhase+=t*n*9);let f=0;r.phase==="out"&&r.startY>0&&(f=Math.max(0,r.startY*(1-r.dist/.6))),r.x>i.x0&&r.x<i.x1&&r.z>i.z0&&r.z<i.z1&&!(r.x>i.ix0&&r.x<i.ix1&&r.z>i.iz0&&r.z<i.iz1)?f=Math.max(f,i.rim):r.x>i.ix0&&r.x<i.ix1&&r.z>i.iz0&&r.z<i.iz1&&(f=Math.max(f,.04)),r.y+=(f-r.y)*Math.min(1,t*18);let d=1;r.phase==="out"&&(r.scale=Math.min(1,r.scale+t*5)),r.phase==="enter"&&(d=Math.max(.01,1-r.timer/.22)),r.phase==="fade"&&(d=Math.max(.01,1-r.timer/.35)),r.scale=Math.min(r.scale,1),r.y-=r.phase==="enter"?r.timer*.8:0,a.push(r),r._s=d*r.scale}this.ants=a,this.writeInstances()}writeInstances(){const t=this.antSize;let e=0,n=0,i=0;const a=this.layout.cell;for(const r of this.ants){const o=r._s*t,l=Math.sin(r.legPhase*2)*.012*t,c=r.phase==="bite"?Math.sin(r.timer*40)*.25:0;this.e.set(c*.5,r.yaw,0),this.q.setFromEuler(this.e),this.v.set(r.x,r.y+l,r.z),this.s.set(o,o,o),this.m.compose(this.v,this.q,this.s),this.body.setMatrixAt(e,this.m),this.eyes.setMatrixAt(e,this.m),this.pupils.setMatrixAt(e,this.m),this.hat?.setMatrixAt(e,this.m),this.body.setColorAt(e,this.palette[r.color]);for(let h=0;h<Ko;h++){const f=h<3?-1:1,u=h%3,d=(u+(f>0?1:0))%2*Math.PI,m=Math.sin(r.legPhase+d)*.38,x=Math.max(0,Math.cos(r.legPhase+d))*.22;this.e.set(0,f<0?Math.PI:0,0);const g=(f<0?Math.PI:0)-f*(g0[u]+m);this.e.set(0,g,f*0+x),this.q.setFromEuler(this.e),this.v.set(f*.08,.22,m0[u]),this.m2.compose(this.v,this.q,this.one),this.m2.premultiply(this.m),this.legs.setMatrixAt(n,this.m2),this.legs.setColorAt(n,this.legColors[r.color]),n++}if(r.phase==="home"||r.phase==="enter"){const h=Math.min(a*.8,o*.55),f=.62*o;this.v.set(r.x+Math.sin(r.yaw)*f,r.y+.34*o+h*.62/2,r.z+Math.cos(r.yaw)*f),this.e.set(0,r.yaw,0),this.q.setFromEuler(this.e);const u=r.phase==="enter"?Math.max(.01,1-r.timer/.22):1;this.s.set(h*u,h*u,h*u),this.m.compose(this.v,this.q,this.s),this.cubes.setMatrixAt(i,this.m),this.cubes.setColorAt(i,this.board.cubeColor(r.cell)),i++}e++}this.body.count=this.eyes.count=this.pupils.count=e,this.legs.count=n,this.cubes.count=i,this.hat&&(this.hat.count=e,this.hat.instanceMatrix.needsUpdate=!0);for(const r of[this.body,this.eyes,this.pupils,this.legs,this.cubes])r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}dispose(){for(const t of[this.body,this.eyes,this.pupils,this.legs,this.cubes,...this.hat?[this.hat]:[]])t.geometry.dispose(),t.material.dispose(),t.dispose()}}function ys(s,t){const e=s/2,n=new Mn;return n.moveTo(-e,0),n.lineTo(e,0),n.lineTo(e,t-e),n.absarc(0,t-e,e,0,Math.PI,!1),n.lineTo(-e,0),n}function wi(s){const t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)}class v0{group=new Pe;body=new Pe;meshes=[];pulse=0;scale=1;panes=[];frontZ=.5;halfW=.6;halfD=.5;constructor(t="#e8674a",e="cottage"){switch(e){case"mushroom":this.mushroom();break;case"cabin":this.cottage({walls:"logs",wall:"#a86f3e",roof:"#5f8f3e",gable:"#8b5a2b",chimney:"#9a9a9a"});break;case"gingerbread":this.cottage({walls:"plain",wall:"#b86a2c",roof:"#5a3217",gable:"#b86a2c",chimney:"#f2f2f2",icing:!0});break;case"igloo":this.igloo();break;case"pumpkin":this.pumpkin();break;case"tower":this.tower(t);break;default:this.cottage({walls:"plain",wall:"#fbecd0",roof:t,gable:"#fbecd0",chimney:"#c0714f"})}this.group.add(this.body),this.setNight(!1)}add(t,e,n,i,a,r={}){const o=r.side??ui,l=r.basic?new pi({color:e,side:o}):new pe({color:e,roughness:r.rough??.7,side:o}),c=new jt(t,l);return c.position.set(n,i,a),c.castShadow=r.shadow??!0,c.receiveShadow=!0,(r.parent??this.body).add(c),this.meshes.push(c),c}pane(t,e,n,i){const a=this.add(t,"#9fd8ff",e,n,i,{shadow:!1,rough:.2});return this.panes.push(a.material),a}door(t,e,n,i,a,r){this.add(new Tn(ys(n+.1,i+.06),12),a,0,e,t+.003,{shadow:!1}),this.add(new Tn(ys(n,i),12),"#2a1810",0,e,t+.006,{shadow:!1,basic:!0});const o=new fi(ys(n,i),{depth:.035,bevelEnabled:!1,curveSegments:10});o.translate(n/2,0,0);const l=new Pe;l.position.set(-n/2,e,t+.01),l.rotation.y=-1.95,this.body.add(l);const c=this.add(o,r,0,0,0,{parent:l});this.add(new Me(.022,10,8),"#f2c14e",n*.82,i*.5,.045,{parent:c,shadow:!1}),this.frontZ=t}cottage(t){if(this.add(new Qe(1.1+.16,.1,.95+.14,2,.04),"#cfc5b6",0,.1/2,0,{rough:.9}),t.walls==="logs"){this.add(new cn(1.1-.1,.8,.95-.1),"#4d321c",0,.1+.8/2,0);const S=.085;for(let _=0;_<5;_++){const w=.1+S+_*.16;for(const E of[-.95/2+S,.95/2-S]){const C=new Fe(S,S,1.26,10);C.rotateZ(Math.PI/2),this.add(C,new Ct(t.wall).offsetHSL(0,0,(wi(_*7+E*10)-.5)*.08).getStyle(),0,w,E,{rough:.85})}for(const E of[-1.1/2+S,1.1/2-S]){const C=new Fe(S,S,1.1099999999999999,10);C.rotateX(Math.PI/2),this.add(C,new Ct(t.wall).offsetHSL(0,0,(wi(_*5+E*10)-.5)*.08).getStyle(),E,w+.08,0,{rough:.85})}}}else this.add(new Qe(1.1,.8,.95,3,.06),t.wall,0,.1+.8/2,0,{rough:.8});const h=new Mn;h.moveTo(-1.1/2,0),h.lineTo(1.1/2,0),h.lineTo(0,.62-.04),h.closePath();const f=new fi(h,{depth:.95-.02,bevelEnabled:!1});f.translate(0,0,-.9299999999999999/2),this.add(f,t.gable,0,.9-.01,0,{rough:.8});const u=1.1/2+.14,d=Math.atan2(.62,1.1/2),m=Math.hypot(u,.62*(u/(1.1/2)))+.02,x=.95+.26,g=new Ct(t.roof).offsetHSL(0,0,-.12).getStyle();for(const S of[-1,1]){const _=new Pe;if(_.position.set(0,.9+.62+.02,0),_.rotation.z=S*-d,this.body.add(_),this.add(new Qe(m,.08,x,2,.03),t.roof,S*m/2,0,0,{parent:_,rough:.55}),t.icing){const w=new Fe(.035,.035,x+.02,8);w.rotateX(Math.PI/2),this.add(w,"#fff8f0",S*m,.02,0,{parent:_,rough:.4});const E=["#ff4d6d","#4cc9f0","#ffd166","#06d6a0"];for(let C=0;C<4;C++){const b=(wi(C*3+(S>0?1:0))-.5)*x*.7;this.add(new Me(.045,10,8),E[(C+(S>0?1:0))%4],S*m*(.25+C*.18),.06,b,{parent:_,rough:.3})}}else for(let w=1;w<=3;w++)this.add(new cn(.03,.02,x+.01),g,S*m*w/4,.045,0,{parent:_,shadow:!1})}this.add(new Qe(.16,.42,.16,2,.02),t.chimney,.3,.9+.62*.55+.12,-.12),this.add(new Qe(.2,.05,.2,2,.015),"#6d4535",.3,.9+.62*.55+.34,-.12);const p=t.icing?"#fff8f0":"#ffffff";this.door(.475,.1,.34,.54,t.icing?"#fff8f0":"#b98a5c",t.icing?"#7a3d12":"#9a5f33");const v=.9+.62*.36;this.add(new Hn(.12,20),p,0,v,.475+.004,{shadow:!1}),this.pane(new Hn(.09,20),0,v,.475+.008),this.add(new Ye(.18,.02),p,0,v,.475+.012,{shadow:!1}),this.add(new Ye(.02,.18),p,0,v,.475+.012,{shadow:!1});for(const S of[-.37,.37])if(this.add(new Ye(.2,.2),p,S,.1+.47,.475+.004,{shadow:!1}),this.pane(new Ye(.15,.15),S,.1+.47,.475+.008),t.walls==="logs")for(const _ of[-1,1])this.add(new Ye(.07,.2),"#5f8f3e",S+_*.14,.1+.47,.475+.006,{shadow:!1});if(this.add(new Qe(.46,.05,.2,2,.02),"#cfc5b6",0,.025,.475+.1,{rough:.9}),t.icing){this.add(new Fe(.03,.03,.5,8),"#ffffff",.34,.25,.475+.12,{rough:.4});for(let S=0;S<4;S++)this.add(new hi(.032,.012,6,12),"#ff4d6d",.34,.08+S*.11,.475+.12,{rough:.4}).rotation.x=Math.PI/2}else this.add(new Ns(.19,1),"#6cbf45",-1.1/2-.08,.15,.475-.05,{rough:.85}),this.add(new Ns(.15,1),"#79c94f",1.1/2+.08,.12,.475-.02,{rough:.85});this.halfW=1.1/2+.14+.05,this.halfD=.95/2+.12}mushroom(){const t=[[0,0],[.46,0],[.49,.25],[.46,.62],[.4,.95],[0,.95]];this.add(new Qa(t.map(([r,o])=>new ot(r,o)),28),"#f3e5c8",0,0,0,{rough:.85});const e=.9,n=new Me(.74,30,14,0,Math.PI*2,0,Math.PI/2);n.scale(1,.62,1),this.add(n,"#e5383b",0,e,0,{rough:.5});const i=new Hn(.73,30);i.rotateX(Math.PI/2),this.add(i,"#ead7b3",0,e,0,{rough:.9,shadow:!1});for(let r=0;r<9;r++){const o=wi(r+3)*Math.PI*2,l=.2+wi(r+11)*.65,c=.74*Math.sin(l*Math.PI*.5),h=e+.62*.74*Math.cos(l*Math.PI*.5)+.01,f=new Me(.07+wi(r+20)*.05,12,8);f.scale(1,1,.3),this.add(f,"#ffffff",Math.cos(o)*c,h,Math.sin(o)*c,{rough:.6,shadow:!1}).lookAt(Math.cos(o)*c*3,h+.9*(1-l),Math.sin(o)*c*3)}this.door(.47,.02,.3,.5,"#c9a06a","#8a5a33");const a=this.add(new Hn(.08,16),"#c9a06a",-.29,.58,.39,{shadow:!1});a.rotation.y=-.65,this.pane(new Hn(.058,16),-.292,.58,.394).rotation.y=-.65,this.add(new Ns(.15,1),"#6cbf45",.5,.1,.35,{rough:.85}),this.halfW=.76,this.halfD=.72}igloo(){this.add(new Me(.72,30,14,0,Math.PI*2,0,Math.PI/2),"#eef7ff",0,0,0,{rough:.6});for(let e=1;e<=4;e++){const n=e*.14,i=Math.sqrt(.72*.72-n*n),a=new hi(i+.004,.012,6,40);a.rotateX(Math.PI/2),this.add(a,"#c7dcee",0,n,0,{shadow:!1})}const t=new Fe(.3,.3,.46,22,1,!0,-Math.PI/2,Math.PI);t.rotateZ(Math.PI/2),t.rotateY(Math.PI/2),this.add(t,"#e6f2fd",0,0,.62,{rough:.6,side:$e}),this.add(new Hn(.25,20,0,Math.PI),"#23364a",0,0,.845,{basic:!0,shadow:!1}),this.frontZ=.845,this.pane(new Hn(.07,14),.3,.44,.56).lookAt(.7,.9,1.4),this.halfW=.74,this.halfD=.8}pumpkin(){const t=new Me(.6,36,18),e=t.attributes.position;for(let a=0;a<e.count;a++){const r=e.getX(a),o=e.getZ(a),l=1+Math.cos(Math.atan2(o,r)*10)*.06;e.setX(a,r*l*1.22),e.setZ(a,o*l*1.06),e.setY(a,e.getY(a)*.86)}t.computeVertexNormals(),this.add(t,"#f77f00",0,.5,0,{rough:.6});const n=new Fe(.05,.08,.22,8);n.rotateZ(.3),this.add(n,"#5a7d2a",.03,1.06,0,{rough:.8});const i=new Me(.12,10,6);i.scale(1,.2,.55),this.add(i,"#7cb342",-.13,1,.02,{rough:.7}).rotation.z=.4,this.door(.62,.02,.3,.44,"#c25e00","#8a4a1e");for(const a of[-1,1]){const r=new Mn;r.moveTo(-.08,0),r.lineTo(.08,0),r.lineTo(0,.12),r.closePath(),this.pane(new Tn(r),a*.25,.66,.58).rotation.y=a*.35}this.halfW=.78,this.halfD=.7}tower(t){const e=new Fe(.46,.52,1.25,22,6),n=e.attributes.position,i=new Float32Array(n.count*3),a=new Ct;for(let l=0;l<n.count;l++)a.set("#b9b3c9").offsetHSL(0,0,(wi(l)-.5)*.1),i.set([a.r,a.g,a.b],l*3);e.setAttribute("color",new je(i,3));const r=new jt(e,new pe({vertexColors:!0,roughness:.9}));r.position.y=.625,r.castShadow=!0,r.receiveShadow=!0,this.body.add(r),this.meshes.push(r),this.add(new Fe(.56,.52,.1,22),"#a39cb6",0,1.25,0,{rough:.9}),this.add(new Vs(.62,.78,22),t,0,1.69,0,{rough:.55}),this.add(new Fe(.012,.012,.4,6),"#6d4535",0,2.25,0);const o=new Mn;o.moveTo(0,0),o.lineTo(.22,-.06),o.lineTo(0,-.13),o.closePath(),this.add(new Tn(o),"#ffd166",.01,2.44,0,{side:$e,shadow:!1}),this.door(.51,0,.32,.5,"#8f8aa3","#7a5433");for(const l of[.8,1.05])this.add(new Tn(ys(.13,.18),8),"#8f8aa3",0,l-.01,.485,{shadow:!1}),this.pane(new Tn(ys(.09,.14),8),0,l,.49);this.halfW=.64,this.halfD=.62}setNight(t){for(const e of this.panes)e.color.set(t?"#ffd27a":"#9fd8ff"),e.emissive.set(t?"#ffb347":"#bfe8ff"),e.emissiveIntensity=t?1.1:.3}setLayout(t){this.scale=t.mode==="portrait"?.8:.9,this.group.position.set(t.nest.x,0,t.nest.z),this.group.scale.setScalar(this.scale)}footprint(){const t=this.group.position,e=(this.halfW+.05)*this.scale,n=this.halfD*this.scale;return{x0:t.x-e,x1:t.x+e,z0:t.z-n,z1:t.z+Math.min(n,this.frontZ*this.scale)}}doorway(t){const e=this.group.position;return t.set(e.x,0,e.z+(this.frontZ+.05)*this.scale)}gulp(){this.pulse=Math.min(1,this.pulse+.25)}update(t){this.pulse>0&&(this.pulse=Math.max(0,this.pulse-t*3));const e=this.pulse*.03;this.body.scale.set(1+e,1-e,1+e)}dispose(){for(const t of this.meshes)t.geometry.dispose(),t.material.dispose()}}const Jc=1400;class Km{group=new Pe;parts=[];meshes;m=new ie;q=new Ge;camQ=new Ge;v=new P;s=new P;z=new P(0,0,1);tmpQ=new Ge;constructor(){const t=new Ye(1,1),e=(n,i)=>{const a=new pi({map:n,transparent:!0,depthWrite:!1,blending:i,side:$e}),r=new Ke(t,a,Jc);return r.frustumCulled=!1,r.count=0,r.renderOrder=10,r.setColorAt(0,new Ct(1,1,1)),this.group.add(r),r};this.meshes=[e(c0(),Fs),e(null,ci),e(xl("rgba(255,255,255,0.9)","rgba(255,255,255,0)"),ci)]}setCamera(t){this.camQ.copy(t.quaternion)}sparkle(t,e,n,i,a=10,r=.6){const o=i instanceof Ct?i:new Ct(i);for(let l=0;l<a;l++){const c=Math.random()*Math.PI*2,h=r*(.5+Math.random());this.add({x:t,y:e,z:n,vx:Math.cos(c)*h,vy:1+Math.random()*1.5,vz:Math.sin(c)*h,life:0,max:.5+Math.random()*.4,size:.25+Math.random()*.25,color:o.clone().lerp(new Ct(1,1,1),.5),spin:0,rot:0,gravity:2.5,kind:0})}}puff(t,e,n,i,a=6,r=.3){const o=i instanceof Ct?i:new Ct(i);for(let l=0;l<a;l++){const c=Math.random()*Math.PI*2;this.add({x:t,y:e,z:n,vx:Math.cos(c)*.8,vy:.4+Math.random()*.5,vz:Math.sin(c)*.8,life:0,max:.35+Math.random()*.25,size:r*(.6+Math.random()*.6),color:o.clone(),spin:0,rot:0,gravity:0,kind:2})}}confetti(t,e,n,i=160,a=5){const r=["#ff5a7a","#ffd23f","#3ec9ff","#7cf07c","#b58cff","#ff9f43"];for(let o=0;o<i;o++){const l=Math.random()*Math.PI*2,c=a*(.3+Math.random()*.7);this.add({x:t+(Math.random()-.5),y:e,z:n+(Math.random()-.5),vx:Math.cos(l)*c,vy:5+Math.random()*6,vz:Math.sin(l)*c*.7,life:0,max:2.2+Math.random()*1.2,size:.16+Math.random()*.12,color:new Ct(r[o%r.length]),spin:(Math.random()-.5)*16,rot:Math.random()*6,gravity:7,kind:1})}}shards(t,e,n,i=14){for(let a=0;a<i;a++){const r=Math.random()*Math.PI*2;this.add({x:t,y:e,z:n,vx:Math.cos(r)*2,vy:2+Math.random()*2,vz:Math.sin(r)*2,life:0,max:.6+Math.random()*.3,size:.12+Math.random()*.12,color:new Ct("#dff6ff"),spin:(Math.random()-.5)*20,rot:0,gravity:9,kind:1})}}add(t){this.parts.length>=Jc&&this.parts.shift(),this.parts.push(t)}get busy(){return this.parts.length>0}update(t){const e=[0,0,0],n=[];for(const i of this.parts){if(i.life+=t,i.life>=i.max)continue;i.vy-=i.gravity*t,i.kind===1&&(i.vx*=1-t*.8,i.vz*=1-t*.8,i.vy<-2.2&&(i.vy=-2.2)),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.y<.02&&i.kind!==2&&(i.y=.02,i.vy=0,i.vx*=.5,i.vz*=.5),i.rot+=i.spin*t,n.push(i);const a=i.life/i.max,r=this.meshes[i.kind],o=e[i.kind]++;let l=i.size;i.kind===0?l*=Math.sin(Math.min(1,a*1.3)*Math.PI):i.kind===2?l*=.6+a*1.2:l*=a>.8?(1-a)/.2:1,this.v.set(i.x,i.y,i.z),this.q.copy(this.camQ),i.kind===1&&this.q.multiply(this.tmpQ.setFromAxisAngle(this.z,i.rot)),this.s.set(l,i.kind===1?l*.6:l,l),this.m.compose(this.v,this.q,this.s),r.setMatrixAt(o,this.m);const c=i.color;i.kind===2?r.setColorAt(o,this.tmpColor.copy(c).multiplyScalar(1-a*.5)):r.setColorAt(o,c)}this.parts=n,this.meshes.forEach((i,a)=>{i.count=e[a],i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0);const r=i.material;a===2&&(r.opacity=.75)})}tmpColor=new Ct;dispose(){for(const t of this.meshes){t.geometry.dispose();const e=t.material;e.map?.dispose(),e.dispose(),t.dispose()}}}function _l(s,t,e,n,i){for(const a of[0,-s,s])if(!(a!==0&&(a<0?t<s-n:t>n)))for(const r of[0,-s,s])r!==0&&(r<0?e<s-n:e>n)||i(t+a,e+r)}function Wr(s,t,e,n,i,a,r,o){for(let l=0;l<i;l++){const c=t.next()*e,h=t.next()*e,f=t.range(a,r),u=t.pick(n);_l(e,c,h,f,(d,m)=>{const x=s.createRadialGradient(d,m,0,d,m,f);x.addColorStop(0,mn(u,o)),x.addColorStop(1,mn(u,0)),s.fillStyle=x,s.fillRect(d-f,m-f,f*2,f*2)})}}function mn(s,t){const e=parseInt(s.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function ws(s,t,e,n,i,a,r,o=-Math.PI/2,l=1.1){s.lineCap="round";for(let c=0;c<i;c++){const h=t.next()*e,f=t.next()*e,u=o+(t.next()-.5)*l*2,d=t.range(a[0],a[1]),m=(t.next()-.5)*d*.6;s.strokeStyle=t.pick(n),s.globalAlpha=t.range(.55,.95),s.lineWidth=t.range(r[0],r[1]),_l(e,h,f,d+2,(x,g)=>{s.beginPath(),s.moveTo(x,g);const p=x+Math.cos(u)*d,v=g+Math.sin(u)*d;s.quadraticCurveTo((x+p)/2+m,(g+v)/2,p,v),s.stroke()})}s.globalAlpha=1}function oi(s,t,e=4,n=2,i="rgba(0,0,0,0.22)"){s.save(),s.shadowColor=i,s.shadowBlur=e,s.shadowOffsetY=n,t(),s.restore()}function Kc(s,t,e,n,i,a,r=5,o=0){oi(s,()=>{s.fillStyle=i;for(let l=0;l<r;l++){const c=o+l/r*Math.PI*2;s.beginPath(),s.ellipse(t+Math.cos(c)*n*.9,e+Math.sin(c)*n*.9,n*.75,n*.55,c,0,Math.PI*2),s.fill()}}),s.fillStyle=a,s.beginPath(),s.arc(t,e,n*.5,0,Math.PI*2),s.fill()}function Qm(s,t,e,n,i,a){s.fillStyle=i;for(let r=0;r<3;r++){const o=a+r/3*Math.PI*2;s.beginPath(),s.arc(t+Math.cos(o)*n,e+Math.sin(o)*n,n,0,Math.PI*2),s.fill()}}function Xr(s,t,e,n,i,a){oi(s,()=>{s.fillStyle=i,s.beginPath(),s.ellipse(t,e,n,n*a.range(.6,.9),a.next()*Math.PI,0,Math.PI*2),s.fill()},3,2),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.ellipse(t-n*.3,e-n*.3,n*.35,n*.2,-.6,0,Math.PI*2),s.fill()}function jm(s,t,e,n,i,a){s.save(),s.translate(t,e),s.rotate(a),oi(s,()=>{s.fillStyle=i,s.beginPath(),s.moveTo(-n/2,0),s.quadraticCurveTo(0,-n*.42,n/2,0),s.quadraticCurveTo(0,n*.42,-n/2,0),s.fill()},5,3),s.strokeStyle="rgba(0,0,0,0.18)",s.lineWidth=Math.max(1,n*.04),s.beginPath(),s.moveTo(-n/2,0),s.lineTo(n/2,0),s.stroke(),s.restore()}function qr(s,t,e,n,i){s.fillStyle=i,s.beginPath(),s.moveTo(t,e-n),s.quadraticCurveTo(t,e,t+n,e),s.quadraticCurveTo(t,e,t,e+n),s.quadraticCurveTo(t,e,t-n,e),s.quadraticCurveTo(t,e,t,e-n),s.fill()}function t3(s,t,e,n,i){const a=s.createRadialGradient(t,e,0,t,e,n*4);a.addColorStop(0,mn(i,.9)),a.addColorStop(.25,mn(i,.35)),a.addColorStop(1,mn(i,0)),s.fillStyle=a,s.fillRect(t-n*4,e-n*4,n*8,n*8),s.fillStyle="#ffffff",s.beginPath(),s.arc(t,e,n*.6,0,Math.PI*2),s.fill()}function Re(s,t,e,n,i){for(let a=0;a<e;a++){const r=t.next()*s,o=t.next()*s;_l(s,r,o,n,i)}}function x0(s,t=1024,e=7){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),a=new vl(e),r=s.ground,o=t/1024;switch(i.fillStyle=r.base,i.fillRect(0,0,t,t),Wr(i,a,t,r.tints,70,90*o,260*o,.45),Wr(i,a,t,r.tints,160,25*o,70*o,.35),r.kind){case"grass":{ws(i,a,t,r.detail,14e3,[7*o,15*o],[1.4*o,2.8*o]),Re(t,a,70,20*o,(l,c)=>Qm(i,l,c,a.range(4,6.5)*o,a.pick(["#6fb34a","#5ea43f","#7fc257"]),a.next()*6)),ws(i,a,t,r.detail,3e3,[6*o,12*o],[1.2*o,2.2*o]),Re(t,a,34,18*o,(l,c)=>Kc(i,l,c,a.range(4.5,7)*o,a.pick(r.accents),"#ffd23f",5,a.next()*6)),Re(t,a,14,16*o,(l,c)=>Xr(i,l,c,a.range(5,10)*o,a.pick(["#bfb6a8","#a89f90","#d2cabc"]),a));break}case"forest":{ws(i,a,t,r.detail,9e3,[5*o,11*o],[1.2*o,2.4*o],0,Math.PI),Re(t,a,90,30*o,(l,c)=>jm(i,l,c,a.range(18,34)*o,a.pick(r.accents),a.next()*6)),i.strokeStyle="#6b4a2b",i.lineWidth=1.2*o,Re(t,a,260,14*o,(l,c)=>{const h=a.next()*6;i.beginPath(),i.moveTo(l,c),i.lineTo(l+Math.cos(h)*12*o,c+Math.sin(h)*12*o),i.stroke()}),Re(t,a,12,16*o,(l,c)=>{const h=a.range(7,11)*o;oi(i,()=>{i.fillStyle="#d64933",i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill()}),i.fillStyle="#fff4e6";for(let f=0;f<4;f++)i.beginPath(),i.arc(l+a.range(-h*.5,h*.5),c+a.range(-h*.5,h*.5),h*.18,0,Math.PI*2),i.fill()}),Re(t,a,18,14*o,(l,c)=>Xr(i,l,c,a.range(5,9)*o,a.pick(["#8b8f7a","#9aa08a"]),a));break}case"sand":{i.strokeStyle=mn("#fff6dc",.5),i.lineWidth=3*o;for(let l=0;l<28;l++){const c=a.next()*t,h=a.range(6,14)*o,f=a.next()*6;i.beginPath();for(let u=-10;u<=t+10;u+=8){const d=c+Math.sin(u/(60*o)+f)*h;u===-10?i.moveTo(u,d):i.lineTo(u,d)}i.stroke()}Re(t,a,9e3,2,(l,c)=>{i.fillStyle=a.pick(r.detail),i.globalAlpha=a.range(.3,.8),i.fillRect(l,c,1.6*o,1.6*o)}),i.globalAlpha=1,Re(t,a,16,20*o,(l,c)=>{const h=a.range(8,13)*o,f=a.next()*6;i.save(),i.translate(l,c),i.rotate(f),oi(i,()=>{i.fillStyle=a.pick(r.accents),i.beginPath(),i.moveTo(0,h*.6),i.arc(0,0,h,Math.PI*1.1,Math.PI*1.9),i.closePath(),i.fill()}),i.strokeStyle="rgba(160,110,80,0.4)",i.lineWidth=1.2*o;for(let u=0;u<5;u++){const d=Math.PI*(1.15+u*.17);i.beginPath(),i.moveTo(0,h*.55),i.lineTo(Math.cos(d)*h*.95,Math.sin(d)*h*.95),i.stroke()}i.restore()}),Re(t,a,6,20*o,(l,c)=>{const h=a.range(10,15)*o;i.save(),i.translate(l,c),i.rotate(a.next()*6),oi(i,()=>{i.fillStyle="#ff8c69",i.beginPath();for(let f=0;f<10;f++){const u=f/10*Math.PI*2,d=f%2===0?h:h*.42;i.lineTo(Math.cos(u)*d,Math.sin(u)*d)}i.closePath(),i.fill()}),i.restore()});break}case"frosting":{i.strokeStyle=mn("#ffffff",.35),i.lineWidth=10*o,i.lineCap="round";for(let l=0;l<40;l++){const c=a.next()*t,h=a.next()*t,f=a.range(30,70)*o;i.beginPath(),i.arc(c,h,f,a.next()*6,a.next()*6+2.5),i.stroke()}Re(t,a,700,8*o,(l,c)=>{i.save(),i.translate(l,c),i.rotate(a.next()*Math.PI),i.fillStyle=a.pick(r.accents);const h=a.range(7,11)*o,f=2.6*o;i.beginPath(),i.roundRect(-h/2,-f/2,h,f,f/2),i.fill(),i.restore()}),Re(t,a,60,8*o,(l,c)=>{const h=a.range(3,5)*o;oi(i,()=>{i.fillStyle="#ffffff",i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill()},3,1)});break}case"night":{ws(i,a,t,r.detail,9e3,[6*o,13*o],[1.3*o,2.4*o]),Re(t,a,50,16*o,(l,c)=>t3(i,l,c,a.range(1.5,3)*o,a.pick(r.accents))),Re(t,a,30,10*o,(l,c)=>qr(i,l,c,a.range(3,6)*o,mn("#fff7c2",.7))),Re(t,a,10,14*o,(l,c)=>Xr(i,l,c,a.range(5,9)*o,"#46507a",a));break}case"snow":{Wr(i,a,t,["#c9dcef","#ffffff"],50,30*o,90*o,.5),Re(t,a,160,8*o,(l,c)=>qr(i,l,c,a.range(2,4.5)*o,mn("#ffffff",.95))),Re(t,a,10,12*o,(l,c)=>{i.fillStyle=mn("#9fbad3",.35);for(let h=0;h<4;h++)i.beginPath(),i.ellipse(l+h*14*o,c+h%2*9*o,3.5*o,5*o,.3,0,Math.PI*2),i.fill()});break}case"magic":{ws(i,a,t,r.detail,11e3,[6*o,13*o],[1.3*o,2.5*o]),Re(t,a,40,18*o,(l,c)=>Kc(i,l,c,a.range(4,6)*o,a.pick(r.accents),"#ffffff",6,a.next()*6)),Re(t,a,26,16*o,(l,c)=>{const h=a.range(5,9)*o;oi(i,()=>{i.fillStyle=a.pick(["#bdf4ff","#ffc6ff","#fff3b0"]),i.beginPath();for(let f=0;f<6;f++){const u=f/6*Math.PI*2;i.lineTo(l+Math.cos(u)*h,c+Math.sin(u)*h*1.3)}i.closePath(),i.fill()})}),Re(t,a,60,10*o,(l,c)=>qr(i,l,c,a.range(2,5)*o,mn("#ffffff",.85)));break}}return n}const Qc=11,jc=new Map;class e3{group=new Pe;plane;mat;dapples=[];dappleMat;center=new ot;night=!1;dappleBase=.16;constructor(){this.mat=new pe({roughness:1,metalness:0,envMapIntensity:.25}),this.plane=new jt(new Ye(160,160),this.mat),this.plane.rotation.x=-Math.PI/2,this.plane.receiveShadow=!0,this.group.add(this.plane),this.dappleMat=new pi({map:xl("rgba(255,250,220,1)","rgba(255,250,220,0)",128),transparent:!0,opacity:.16,depthWrite:!1,blending:Fs});for(let t=0;t<7;t++){const e=new jt(new Ye(1,1),this.dappleMat);e.rotation.x=-Math.PI/2,e.position.y=.01,e.userData={ph:Math.random()*10,r:3+Math.random()*4,sp:.05+Math.random()*.07,ox:(Math.random()-.5)*22,oz:(Math.random()-.5)*22},this.dapples.push(e),this.group.add(e)}}setTheme(t){let e=jc.get(t.id);e||(e=new Ni(x0(t,1024,t.id.length*31+5)),e.colorSpace=we,e.wrapS=e.wrapT=Ua,e.anisotropy=8,e.repeat.set(160/Qc,160/Qc),jc.set(t.id,e)),this.mat.map=e,this.mat.needsUpdate=!0;const n=t.ground.kind==="night";this.dappleBase=n?.06:t.ground.kind==="snow"?.1:.16,this.applyNight()}setNight(t){this.night=t,this.applyNight()}applyNight(){this.mat.color.set(this.night?"#4b5572":"#ffffff"),this.dappleMat.opacity=this.night?0:this.dappleBase}setLayout(t){this.center.set((t.bounds.minX+t.bounds.maxX)/2,(t.bounds.minZ+t.bounds.maxZ)/2)}update(t,e){for(const n of this.dapples){const i=n.userData,a=e*i.sp+i.ph;n.position.x=this.center.x+i.ox+Math.sin(a)*2.5,n.position.z=this.center.y+i.oz+Math.cos(a*.8)*2;const r=i.r*(1+Math.sin(a*2.3)*.12);n.scale.set(r,r,1)}}dispose(){this.plane.geometry.dispose(),this.mat.dispose(),this.dappleMat.map?.dispose(),this.dappleMat.dispose();for(const t of this.dapples)t.geometry.dispose()}}const th={grass:{count:46,tex:"glow",colors:["#fffbe6","#fff4b8","#ffffff"],size:[.08,.16],fall:[-.06,.06],additive:!0,opacity:.9},forest:{count:26,tex:"leaf",colors:["#e0703a","#f2b84b","#c9502e","#a7c957","#d98c2b"],size:[.28,.42],fall:[-.45,-.25],additive:!1,opacity:1},sand:{count:34,tex:"sparkle",colors:["#ffffff","#fff6d8","#d6f6ff"],size:[.14,.26],fall:[-.02,.04],additive:!0,opacity:.85,blink:!0},frosting:{count:40,tex:"sprinkle",colors:["#ff5d8f","#ffd166","#06d6a0","#118ab2","#9b5de5","#ffffff"],size:[.16,.22],fall:[-.55,-.3],additive:!1,opacity:1},night:{count:44,tex:"glow",colors:["#fff7a8","#d9ff8a","#a8fff0"],size:[.14,.24],fall:[-.05,.05],additive:!0,opacity:1,blink:!0},snow:{count:70,tex:"flake",colors:["#ffffff","#f2f9ff"],size:[.1,.2],fall:[-.5,-.28],additive:!1,opacity:.95},magic:{count:46,tex:"sparkle",colors:["#fff3b0","#ffc6ff","#bdf4ff","#ffffff"],size:[.14,.28],fall:[.05,.18],additive:!0,opacity:.95,blink:!0}};function $r(s,t=64){const e=document.createElement("canvas");e.width=e.height=t,s(e.getContext("2d"),t);const n=new Ni(e);return n.colorSpace=we,n}const n3={glow:()=>xl("rgba(255,255,255,1)","rgba(255,255,255,0)",64),sparkle:()=>c0(64),leaf:()=>$r((s,t)=>{s.fillStyle="#ffffff",s.beginPath(),s.moveTo(t*.08,t*.5),s.quadraticCurveTo(t*.5,t*.02,t*.92,t*.5),s.quadraticCurveTo(t*.5,t*.98,t*.08,t*.5),s.fill(),s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=t*.04,s.beginPath(),s.moveTo(t*.1,t*.5),s.lineTo(t*.9,t*.5),s.stroke()}),sprinkle:()=>$r((s,t)=>{s.fillStyle="#ffffff",s.beginPath(),s.roundRect(t*.1,t*.36,t*.8,t*.28,t*.14),s.fill()}),flake:()=>$r((s,t)=>{const e=t/2,n=s.createRadialGradient(e,e,0,e,e,e);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.9)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.beginPath(),s.arc(e,e,e,0,Math.PI*2),s.fill()})};class i3{group=new Pe;mesh=null;motes=[];style=th.grass;box={x0:-10,x1:10,z0:-10,z1:10};m=new ie;q=new Ge;qz=new Ge;v=new P;s=new P;zAxis=new P(0,0,1);tmpC=new Ct;e=new bn;night=!1;baseOpacity=1;setNight(t){this.night=t;const e=this.mesh?.material;e&&(e.opacity=this.baseOpacity*(t?.6:1))}setTheme(t){this.dispose(),this.style=th[t.ground.kind];const e=this.style,n=new pi({map:n3[e.tex](),transparent:!0,depthWrite:!1,opacity:e.opacity,side:$e,blending:e.additive?Fs:ci});this.baseOpacity=e.opacity,n.opacity=e.opacity*(this.night?.6:1),this.mesh=new Ke(new Ye(1,1),n,e.count),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12,this.group.add(this.mesh),this.motes=[];for(let i=0;i<e.count;i++)this.motes.push(this.spawn(!0))}setLayout(t){const e=t.bounds;this.box={x0:e.minX-3,x1:e.maxX+3,z0:e.minZ-3,z1:e.maxZ+3}}spawn(t){const e=this.style,n=this.box,i=e.fall[1]<-.1,a=e.fall[0]>0;return{x:n.x0+Math.random()*(n.x1-n.x0),y:t?.3+Math.random()*5:i?5+Math.random()*1.5:a?.2:.3+Math.random()*5,z:n.z0+Math.random()*(n.z1-n.z0),vx:(Math.random()-.5)*.3,vy:e.fall[0]+Math.random()*(e.fall[1]-e.fall[0]),vz:(Math.random()-.5)*.2,phase:Math.random()*10,rot:Math.random()*Math.PI*2,spin:(Math.random()-.5)*3,size:e.size[0]+Math.random()*(e.size[1]-e.size[0]),rest:0,color:new Ct(e.colors[Math.floor(Math.random()*e.colors.length)])}}update(t,e,n){const i=this.mesh;if(!i)return;const a=this.style,r=this.box,o=Math.sin(e*.3)*.25;for(let l=0;l<this.motes.length;l++){let c=this.motes[l];c.phase+=t,c.rest>0?(c.rest-=t,c.rest<=0&&(c=this.motes[l]=this.spawn(!1))):(c.x+=(c.vx+o+Math.sin(c.phase*1.3)*.25)*t,c.z+=(c.vz+Math.cos(c.phase*.9)*.15)*t,c.y+=(c.vy+Math.sin(c.phase*2.1)*.08)*t,c.rot+=c.spin*t,c.y<.04&&(c.y=.04,c.rest=3+Math.random()*3),(c.y>7||c.x<r.x0-1||c.x>r.x1+1||c.z<r.z0-1||c.z>r.z1+1)&&(c=this.motes[l]=this.spawn(!1)));let h=a.blink?.55+.45*Math.sin(c.phase*3+l):1;c.rest>0&&(h*=Math.min(1,c.rest/1.5)),this.v.set(c.x,c.y,c.z),c.rest>0&&(a.tex==="leaf"||a.tex==="sprinkle")?this.q.setFromEuler(this.e.set(-Math.PI/2,0,c.rot)):this.q.copy(n.quaternion).multiply(this.qz.setFromAxisAngle(this.zAxis,c.rot));const f=c.size*(a.tex==="glow"||a.tex==="sparkle"?h:1);this.s.set(f,f,f),this.m.compose(this.v,this.q,this.s),i.setMatrixAt(l,this.m),i.setColorAt(l,this.tmpC.copy(c.color).multiplyScalar(a.additive?h:1))}i.count=this.motes.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}dispose(){if(!this.mesh)return;this.group.remove(this.mesh),this.mesh.geometry.dispose();const t=this.mesh.material;t.map?.dispose(),t.dispose(),this.mesh.dispose(),this.mesh=null}}const Sa=typeof window<"u"&&(window.matchMedia?.("(pointer: coarse)").matches||(navigator.hardwareConcurrency??8)<=4);class s3{renderer;scene=new ul;camera=new ja(-1,1,1,-1,.1,200);board;queue;ants;nest;fx=new Km;ambient=new i3;ground;layout;sim;level;sun;hemi;raycaster=new Lf;ndc=new ot;cb;width=1;height=1;insets={top:70,bottom:110,left:0,right:0};tmp=new P;levelGroup=new Pe;zoomPunch=0;theme=null;looks={house:"cottage",hat:"none",box:"classic"};night=!1;constructor(t,e){this.cb=e,this.renderer=new i0({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,Sa?1.6:2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ls,this.renderer.toneMapping=Ja,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=we,t.appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("gl");const n=new Ga(this.renderer);this.scene.environment=n.fromScene(new s0,.04).texture,this.scene.environmentIntensity=.42,n.dispose(),this.hemi=new Wh("#fffaf0","#7a8f6a",.9),this.scene.add(this.hemi),this.sun=new $h("#fff4e0",2.9),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(Sa?1024:2048,Sa?1024:2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.02,this.sun.shadow.radius=4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.ground=new e3,this.scene.add(this.ground.group),this.scene.add(this.levelGroup),this.scene.add(this.fx.group),this.scene.add(this.ambient.group)}load(t,e,n){this.unload(),this.level=t,this.sim=e;const i=t.picture.palette,a=t.shape??a0(t.n);this.board=new Bm(e,i,n.frame,a),this.board.cubes.castShadow=!Sa,this.queue=new $m(e,i,t.queueHint??"count",this.looks.box),this.nest=new v0(n.roof,this.looks.house),this.ants=new Jm(i,this.board,e,this.cb,a,this.looks.hat),this.levelGroup.add(this.board.group,this.queue.group,this.nest.group,this.ants.group),this.theme=n,this.ground.setTheme(n),this.ambient.setTheme(n),this.applyLook(),this.relayout(!0)}setNight(t){this.night=t,this.applyLook()}applyLook(){const t=this.theme;if(!t)return;const e=this.night,n=new Ct(t.bg);e&&n.lerp(Yo,.72),this.scene.background=n,this.hemi.color.set(e?"#9aa8e6":t.sky),this.hemi.groundColor.set(t.bounce),e&&this.hemi.groundColor.lerp(Yo,.6),this.hemi.intensity=e?.62:.9,this.sun.color.set(e?"#dbe3ff":"#fff4e0"),this.sun.intensity=e?1.75:2.9,this.renderer.toneMappingExposure=e?.95:1.05,this.scene.environmentIntensity=e?.3:.42,this.ground.setNight(e),this.ambient.setNight(e),this.board?.setNight(e),this.queue?.setNight(e),this.nest?.setNight(e)}setSim(t){this.sim=t,this.queue.setSim(t),this.ants.setSim(t)}unload(){this.board&&(this.levelGroup.clear(),this.board.dispose(),this.queue.dispose(),this.ants.dispose(),this.nest.dispose())}resize(t,e){this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.sim&&this.relayout(!1)}relayout(t){const e=Math.max(100,this.width-this.insets.left-this.insets.right),n=Math.max(100,this.height-this.insets.top-this.insets.bottom),i=Dm({aspect:e/n,w:this.sim.w,h:this.sim.h,slots:this.sim.slots.length,columns:this.sim.columns.length,rows:this.level.visibleRows??3}),a=t||!this.layout||i.mode!==this.layout.mode||i.slot.length!==this.layout.slot.length;if(this.layout=i,a){this.board.setLayout(i),this.queue.setLayout(i),this.nest.setLayout(i),this.ants.setLayout(i);const r=this.nest.doorway(this.tmp);this.ants.setHome(this.nest.footprint(),{x:r.x,z:r.z})}this.fitCamera(e,n),this.ground.setLayout(i),this.ambient.setLayout(i)}fitCamera(t,e){const n=this.layout,i=n.bounds,a=Math.cos(n.tilt),r=Math.sin(n.tilt),o=i.maxX-i.minX,l=(i.maxZ-i.minZ)*a+.8*r,c=Math.max(o/t,l/e)*1.02,h=this.width*c/2,f=this.height*c/2,u=(i.minX+i.maxX)/2,d=(i.minZ+i.maxZ)/2,m=60;this.camera.position.set(u,m*a,d+m*r),this.camera.up.set(0,1,0),this.camera.lookAt(u,0,d);const x=(this.insets.top-this.insets.bottom)/2*c,g=(this.insets.right-this.insets.left)/2*c;this.camera.left=-h+g,this.camera.right=h+g,this.camera.top=f+x,this.camera.bottom=-f+x,this.camera.near=1,this.camera.far=m*2+20,this.camera.zoom=1,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.fx.setCamera(this.camera);const p=Math.max(o,i.maxZ-i.minZ)*.75+2;this.sun.position.set(u-8,22,d-10),this.sun.target.position.set(u,0,d);const v=this.sun.shadow.camera;v.left=-p,v.right=p,v.top=p,v.bottom=-p,v.near=1,v.far=60,v.updateProjectionMatrix()}pickBox(t,e){return this.ndc.set(t/this.width*2-1,-(e/this.height)*2+1),this.queue.group.updateMatrixWorld(),this.raycaster.setFromCamera(this.ndc,this.camera),this.queue.pick(this.raycaster)}toScreen(t){const e=this.tmp.copy(t).project(this.camera);return{x:(e.x+1)/2*this.width,y:(1-e.y)/2*this.height}}apply(t,e=.4){let n=!1;const i=Math.max(1,this.sim.slots.length);for(const a of t)switch(a.t){case"ant":{const r=a.box>=0?this.queue.boxTop(a.box,this.tmp):this.tmp.set(0,0,0),o=a.slot/i*e;this.ants.spawn(r.clone(),a.cell,a.color,(a.due-this.sim.roundNo)*e,o);break}case"pickup":this.ants.pickup(a.cell);break;case"take":case"boxDone":case"reveal":case"thaw":n=!0;break}n?this.queue.syncFromSim(!0):this.queue.refreshLabels()}punch(){this.zoomPunch=1}update(t,e){this.board&&(this.board.update(t),this.queue.update(t,e),this.ants.update(t,e),this.nest.update(t),this.fx.update(t),this.ground.update(t,e),this.ambient.update(t,e,this.camera),this.zoomPunch>0&&(this.zoomPunch=Math.max(0,this.zoomPunch-t*2.5),this.camera.zoom=1+Math.sin(this.zoomPunch*Math.PI)*.015,this.camera.updateProjectionMatrix()),this.renderer.render(this.scene,this.camera))}isIdle(){return this.ants.count===0&&this.queue.isSettled()}dispose(){this.unload(),this.fx.dispose(),this.ambient.dispose(),this.ground.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}function a3(s,t,e,n){let i=0;for(const a of s.groupOf(t)){const r=s.boxColor(a),o=e[r]-(n?n[r]:0),l=s.boxCount(a);o>=l?i+=3e3+l:o>0?i+=1e3+o*8-l:i+=100-l-(n&&n[r]>0?50:0)}return i}function r3(s,t){const e=t??new Int32Array(s.s.colors);e.fill(0);for(const n of s.slots)n&&(e[s.boxColor(n.box)]+=n.left);return e}function Yr(s,t=6e4){const e=new Set,n=[],i=new Int32Array(s.s.colors),a=new Int32Array(s.s.colors);let r=0,o=!1;const l=f=>{if(f.settle(),f.status==="won")return!0;if(f.status==="stuck")return!1;const u=f.key();if(e.has(u))return!1;if(++r>t)return o=!0,!1;const d=f.legalMoves();f.exposedCounts(i),r3(f,a);const m=d.map(x=>[x,a3(f,x,i,a)]);m.sort((x,g)=>g[1]-x[1]);for(const[x]of m){const g=f.clone();if(g.take(x),n.push(x),l(g))return!0;if(n.pop(),o)return!1}return e.add(u),!1},c=s.clone();c.status==="stuck"&&c.unstick();const h=l(c);return{status:h?"solved":o?"unknown":"unsolvable",moves:h?n.slice():[],nodes:r}}const ye=s=>440*Math.pow(2,(s-69)/12),o3={antOut:.07,pick:.05,deliver:.06,tap:.03,pop:.04},ya=[{bpm:92,root:60,chords:[[0,4,7],[7,11,14],[9,12,16],[5,9,12]],scale:[0,2,4,7,9],lead:"marimba",pad:"triangle",padCut:1400,density:.62,sparkle:.1,swing:.06},{bpm:80,root:57,chords:[[0,3,7],[-4,0,3],[3,7,10],[-2,2,5]],scale:[0,3,5,7,10],lead:"kalimba",pad:"sawtooth",padCut:900,density:.52,sparkle:.05,swing:.08},{bpm:84,root:62,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"flute",pad:"triangle",padCut:1200,density:.5,sparkle:.08,swing:.1},{bpm:104,root:65,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"pluck",pad:"square",padCut:1e3,density:.72,sparkle:.12,swing:.12},{bpm:72,root:64,chords:[[0,3,7,10],[-4,0,3,7],[3,7,10,14],[-2,2,5,9]],scale:[0,2,3,7,10],lead:"bell",pad:"sawtooth",padCut:700,density:.42,sparkle:.25,swing:0},{bpm:76,root:67,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"bell",pad:"triangle",padCut:1100,density:.5,sparkle:.3,swing:.04},{bpm:84,root:62,chords:[[0,3,7],[-2,2,5],[-5,-2,2],[-7,-3,0]],scale:[0,2,3,5,7,9],lead:"harp",pad:"sawtooth",padCut:1e3,density:.66,sparkle:.2,swing:.05}];class l3{s;constructor(t){this.s=t>>>0||1}next(){return this.s^=this.s<<13,this.s^=this.s>>>17,this.s^=this.s<<5,(this.s>>>0)/4294967296}}class c3{constructor(t,e,n){this.eng=t,this.th=e;const i=t.ctx;this.out=i.createGain(),this.out.gain.value=0,this.out.gain.linearRampToValueAtTime(1,i.currentTime+2.5),this.out.connect(t.musicBus),this.rng=new l3(n),this.nextBar=i.currentTime+.15,this.timer=window.setInterval(()=>this.schedule(),60),this.schedule()}eng;th;out;timer=0;nextBar;bar=0;lastNote=0;rng;stopped=!1;get barLen(){return 60/this.th.bpm*4}schedule(){const t=this.eng.ctx;if(!(!t||this.stopped))for(;this.nextBar<t.currentTime+.35;)this.playBar(this.nextBar,this.bar),this.nextBar+=this.barLen,this.bar++}playBar(t,e){const n=this.th,i=60/n.bpm,a=n.chords[e%n.chords.length],r=n.root;for(const c of a)this.eng.padVoice(this.out,ye(r+c-12),t,this.barLen,n.pad,n.padCut);this.eng.bassNote(this.out,ye(r+a[0]-24),t,i*1.6),(e%2===1||this.rng.next()<.5)&&this.eng.bassNote(this.out,ye(r+a[0]-24+(this.rng.next()<.3?7:0)),t+i*2,i*1.4);const o=e%4===3?n.density*.55:n.density,l=n.scale;for(let c=0;c<8;c++){if(this.rng.next()>o)continue;let h;if(c%4===0&&this.rng.next()<.7)h=a[Math.floor(this.rng.next()*a.length)];else{const m=Math.round((this.rng.next()-.5)*3);this.lastNote=Math.max(0,Math.min(l.length*2-1,this.lastNote+m)),h=l[this.lastNote%l.length]+12*Math.floor(this.lastNote/l.length)}const f=c%2===1?n.swing*i:0,u=t+c*(i/2)+f,d=r+h+(n.lead==="bell"?12:0);this.eng.leadNote(this.out,n.lead,ye(d),u,i*(.4+this.rng.next()*.5)),n.lead==="harp"&&this.rng.next()<.35&&this.eng.leadNote(this.out,"harp",ye(d+7),u+i/4,i*.4)}if(this.rng.next()<n.sparkle*3){const c=t+Math.floor(this.rng.next()*8)*(i/2);this.eng.sparkleNote(this.out,ye(r+24+l[Math.floor(this.rng.next()*l.length)]),c)}}stop(t){const e=this.eng.ctx;if(this.stopped=!0,clearInterval(this.timer),!e)return;const n=this.out.gain;n.cancelScheduledValues(e.currentTime),n.setValueAtTime(n.value,e.currentTime),n.linearRampToValueAtTime(0,e.currentTime+t),setTimeout(()=>this.out.disconnect(),(t+.5)*1e3)}}class h3{ctx=null;master=null;sfxBus=null;musicBus=null;duckGain=null;reverb=null;noiseBuf=null;last=new Map;sfxVol=.8;musicVol=.5;wantTheme=null;song=null;songTheme=-1;suspendedByHide=!1;get ready(){return!!this.ctx&&this.ctx.state==="running"}unlock(){try{this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume(),this.wantTheme!==null&&!this.song&&this.startMusic(this.wantTheme)}catch{}}init(){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t({latencyHint:"interactive"});this.ctx=e;const n=e.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=12,n.ratio.value=4,n.attack.value=.004,n.release.value=.25,n.connect(e.destination),this.master=e.createGain(),this.master.gain.value=.9,this.master.connect(n),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.duckGain=e.createGain(),this.duckGain.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicVol*.42,this.musicBus.connect(this.duckGain),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(2.4,2.6);const i=e.createGain();i.gain.value=.55,this.reverb.connect(i),i.connect(this.master);const a=e.sampleRate;this.noiseBuf=e.createBuffer(1,a,e.sampleRate);const r=this.noiseBuf.getChannelData(0);for(let o=0;o<a;o++)r[o]=Math.random()*2-1;document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.state==="running"&&(this.suspendedByHide=!0,this.ctx.suspend()):this.suspendedByHide&&(this.suspendedByHide=!1,this.ctx.resume()))})}impulse(t,e){const n=this.ctx,i=Math.floor(n.sampleRate*t),a=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){const o=a.getChannelData(r);for(let l=0;l<i;l++)o[l]=(Math.random()*2-1)*Math.pow(1-l/i,e)}return a}setSfxVolume(t){this.sfxVol=t,this.sfxBus&&this.ctx&&this.sfxBus.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setMusicVolume(t){this.musicVol=t,this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(t*.42,this.ctx.currentTime,.1)}duck(t,e){const n=this.ctx;if(!n||!this.duckGain)return;const i=this.duckGain.gain,a=n.currentTime;i.cancelScheduledValues(a),i.setValueAtTime(i.value,a),i.linearRampToValueAtTime(t,a+.15),i.setValueAtTime(t,a+e),i.linearRampToValueAtTime(1,a+e+1.2)}startMusic(t){this.wantTheme=t,!(!this.ctx||!this.musicBus)&&(this.song&&this.songTheme===t||(this.song?.stop(1.5),this.songTheme=t,this.song=new c3(this,ya[(t%ya.length+ya.length)%ya.length],1234+t*77+Math.floor(Math.random()*1e3))))}stopMusic(t=1){this.wantTheme=null,this.song?.stop(t),this.song=null,this.songTheme=-1}dest(t,e,n){const i=this.ctx;let a=n;if(t!==0&&i.createStereoPanner){const r=i.createStereoPanner();r.pan.value=t,r.connect(n),a=r}if(e>0&&this.reverb){const r=i.createGain();r.gain.value=e,r.connect(this.reverb);const o=i.createGain();return o.connect(a),o.connect(r),o}return a}tone(t,e,n,i={},a){const r=this.ctx,o=r.createOscillator();o.type=i.type??"sine",o.frequency.setValueAtTime(t,e),i.glide&&o.frequency.exponentialRampToValueAtTime(Math.max(20,i.glide),e+n*.8),i.detune&&(o.detune.value=i.detune);const l=r.createGain(),c=i.gain??.3,h=i.attack??.005,f=i.decay??n;l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(c,e+h),l.gain.exponentialRampToValueAtTime(1e-4,e+h+f);let u=o;if(i.filter){const d=r.createBiquadFilter();d.type="lowpass",d.frequency.value=i.filter,o.connect(d),u=d}u.connect(l),l.connect(this.dest(i.pan??0,i.wet??0,a??this.sfxBus)),o.start(e),o.stop(e+h+f+.05)}noise(t,e,n={}){const i=this.ctx,a=i.createBufferSource();a.buffer=this.noiseBuf,a.playbackRate.value=.8+Math.random()*.4;const r=i.createBiquadFilter();r.type=n.type??"bandpass",r.frequency.setValueAtTime(n.freq??2e3,t),n.freqTo&&r.frequency.exponentialRampToValueAtTime(n.freqTo,t+e),r.Q.value=n.q??1;const o=i.createGain(),l=n.attack??.003;o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(n.gain??.2,t+l),o.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(e,l+.01)),a.connect(r),r.connect(o),o.connect(this.dest(n.pan??0,n.wet??0,this.sfxBus)),a.start(t,Math.random()*.5),a.stop(t+e+.05)}fm(t,e,n,i,a,r,o,l,c=0){const h=this.ctx,f=h.createOscillator(),u=h.createOscillator(),d=h.createGain();f.frequency.value=t,u.frequency.value=t*i,d.gain.setValueAtTime(t*a,e),d.gain.exponentialRampToValueAtTime(Math.max(1,t*a*.02),e+n*.6),u.connect(d),d.connect(f.frequency);const m=h.createGain();m.gain.setValueAtTime(1e-4,e),m.gain.linearRampToValueAtTime(r,e+.004),m.gain.exponentialRampToValueAtTime(1e-4,e+n),f.connect(m),m.connect(this.dest(c,o,l??this.sfxBus)),f.start(e),u.start(e),f.stop(e+n+.05),u.stop(e+n+.05)}padVoice(t,e,n,i,a,r){const o=this.ctx,l=o.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(r*.6,n),l.frequency.linearRampToValueAtTime(r,n+i*.5),l.frequency.linearRampToValueAtTime(r*.7,n+i);const c=o.createGain(),h=a==="sawtooth"||a==="square"?.028:.05;c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(h,n+i*.3),c.gain.linearRampToValueAtTime(h*.7,n+i*.85),c.gain.linearRampToValueAtTime(1e-4,n+i+.25),l.connect(c),c.connect(this.dest(0,.5,t));for(const f of[-7,7]){const u=o.createOscillator();u.type=a,u.frequency.value=e,u.detune.value=f,u.connect(l),u.start(n),u.stop(n+i+.3)}}bassNote(t,e,n,i){this.tone(e,n,i,{type:"triangle",gain:.13,attack:.02,decay:i,filter:600},t)}leadNote(t,e,n,i,a){const r=(Math.random()-.5)*.5;switch(e){case"marimba":this.fm(n,i,.55,4,.9,.11,.25,t,r);break;case"kalimba":this.fm(n,i,.8,5.4,.6,.1,.3,t,r);break;case"bell":this.fm(n,i,1.6,3.5,1.2,.06,.5,t,r);break;case"harp":this.tone(n,i,.9,{type:"triangle",gain:.09,attack:.004,decay:.9,pan:r,wet:.4,filter:3e3},t);break;case"pluck":this.tone(n,i,.25,{type:"square",gain:.05,attack:.003,decay:.22,pan:r,wet:.2,filter:1800},t);break;case"flute":this.tone(n,i,a,{type:"sine",gain:.075,attack:.06,decay:a+.2,pan:r,wet:.45},t);break}}sparkleNote(t,e,n){this.fm(e,n,1.2,7.1,.4,.03,.8,t,(Math.random()-.5)*.8)}play(t,e={}){const n=this.ctx;if(!n||n.state!=="running"||this.sfxVol<=.001)return;const i=n.currentTime,a=o3[t];if(a){const r=this.last.get(t)??0;if(i-r<a)return}this.last.set(t,i);try{this.sfx(t,i+.005,e)}catch{}}sfx(t,e,n){const i=n.volume??1,a=n.pan??0,r=o=>1+(Math.random()-.5)*o;switch(t){case"tap":this.tone(760*r(.1),e,.07,{gain:.16*i,glide:520,pan:a}),this.noise(e,.025,{type:"highpass",freq:3e3,gain:.05*i});break;case"button":this.tone(1100,e,.05,{gain:.1*i,glide:800}),this.noise(e,.02,{type:"highpass",freq:4e3,gain:.04*i});break;case"place":this.tone(250*r(.08),e,.16,{type:"sine",gain:.32*i,glide:120,pan:a}),this.noise(e,.08,{type:"lowpass",freq:900,gain:.12*i}),this.tone(1320,e+.02,.1,{type:"sine",gain:.03*i,wet:.3});break;case"invalid":this.tone(210,e,.09,{type:"triangle",gain:.16*i,filter:700}),this.tone(170,e+.09,.12,{type:"triangle",gain:.16*i,filter:600});break;case"antOut":this.noise(e,.012,{type:"highpass",freq:5e3*r(.3),gain:.025*i,pan:(Math.random()-.5)*.6});break;case"pick":this.noise(e,.035,{type:"bandpass",freq:2200*r(.5),q:3,gain:.07*i,pan:(Math.random()-.5)*.8}),this.tone(1100*r(.3),e,.03,{gain:.025*i});break;case"deliver":this.tone(620*r(.25),e,.07,{gain:.045*i,glide:980,wet:.1});break;case"boxDone":{this.tone(300*r(.08),e,.13,{type:"sine",gain:.15*i,glide:560,attack:.006}),this.noise(e,.05,{type:"lowpass",freq:700,gain:.05*i});const o=[67,69,72,74][Math.floor(Math.random()*4)];this.tone(ye(o),e+.06,.55,{type:"triangle",gain:.075*i,attack:.006,decay:.5,filter:1500,wet:.25}),this.tone(ye(o+7),e+.12,.6,{type:"sine",gain:.05*i,attack:.008,decay:.55,wet:.3});break}case"reveal":[84,88,91,96].forEach((o,l)=>this.fm(ye(o),e+l*.045,.6,5.1,.5,.05*i,.6));break;case"thaw":for(let o=0;o<6;o++)this.noise(e+o*.025+Math.random()*.02,.03,{type:"highpass",freq:3500+Math.random()*3e3,gain:.08*i});[91,96,100].forEach((o,l)=>this.fm(ye(o),e+.12+l*.05,.5,6,.4,.035*i,.6));break;case"link":this.fm(1250,e,.25,3.47,1.4,.07*i,.2),this.fm(1580,e+.06,.3,3.47,1.4,.06*i,.2),this.tone(230,e,.14,{gain:.2*i,glide:120});break;case"win":{[72,76,79,84].forEach((c,h)=>this.fm(ye(c),e+h*.12,.7,4,.9,.12*i,.3));const l=e+.55;[60,64,67,72,76].forEach(c=>this.tone(ye(c),l,1.8,{type:"triangle",gain:.06*i,attack:.05,decay:1.8,wet:.5,filter:2500})),[88,91,96].forEach((c,h)=>this.fm(ye(c),l+.1+h*.09,1.2,3.5,.9,.05*i,.6));break}case"lose":[67,64,60,55].forEach((o,l)=>this.tone(ye(o),e+l*.22,.4,{type:"triangle",gain:.12*i,attack:.02,decay:.45,filter:1200,wet:.3}));break;case"star":{const o=[88,91,95][Math.max(0,Math.min(2,Math.round(n.pitch??0)))];this.fm(ye(o),e,1.1,3.5,1,.1*i,.5),this.tone(ye(o+12),e,.4,{gain:.03*i,wet:.5});break}case"coin":this.tone(ye(95),e,.08,{type:"square",gain:.045*i,filter:4e3}),this.tone(ye(100),e+.07,.3,{type:"square",gain:.045*i,filter:4e3,wet:.3});break;case"booster":this.noise(e,.35,{type:"bandpass",freq:500,freqTo:5e3,q:2,gain:.08*i,attack:.1}),[84,88,91,96,100].forEach((o,l)=>this.fm(ye(o),e+.1+l*.04,.5,5,.4,.04*i,.6));break;case"shuffle":for(let o=0;o<7;o++)this.noise(e+o*.045,.04,{type:"bandpass",freq:1800+Math.random()*1500,q:1.5,gain:.09*i});break;case"undo":this.noise(e,.3,{type:"bandpass",freq:4e3,freqTo:400,q:1.5,gain:.1*i,attack:.22}),this.tone(900,e+.05,.25,{gain:.05*i,glide:300});break;case"hint":this.fm(ye(81),e,1.4,3.5,1,.08*i,.6),this.fm(ye(88),e+.15,1.4,3.5,1,.06*i,.6);break;case"unlock":[79,84,88,91,96].forEach((o,l)=>this.fm(ye(o),e+l*.07,.8,4,.8,.08*i,.4));break;case"whoosh":this.noise(e,.25,{type:"bandpass",freq:300,freqTo:2400,q:.8,gain:.05*i,attack:.08});break;case"pop":this.tone(420*r(.2),e,.08,{gain:.14*i,glide:950});break}}}const Rt=new h3,Zr=.4;class u3{level;sim;view;hooks;acc=0;speed=1;paused=!1;playTime=0;history=[];boostersUsed=0;taps=0;finished=null;stuckPending=!1;winPending=!1;total;eaten=0;grabMode=!1;hintId=null;rng;lastDeliverSfx=0;constructor(t,e,n,i){this.view=t,this.level=e,this.hooks=i,this.sim=qa.fromLevel(e),this.total=this.sim.left,this.rng=new vl(e.n*7919+13),t.load(e,this.sim,n)}get progress(){return this.total?this.eaten/this.total:0}get canUndo(){return this.history.length>0&&this.finished!=="won"}get status(){return this.finished??"playing"}onPick(){Rt.play("pick")}onDeliver(){this.eaten++,this.view.nest.gulp();const t=performance.now();t-this.lastDeliverSfx>70&&(this.lastDeliverSfx=t,Rt.play("deliver")),this.hooks.onProgress(this.eaten,this.total)}tap(t,e){if(this.paused||this.finished==="won")return;const n=this.view.pickBox(t,e);if(n===null)return;if(Rt.play("tap"),this.grabMode){this.doGrab(n);return}const i=this.sim.whyNot(n);if(i!=="ok"){this.view.queue.shake(n),Rt.play("invalid"),i!=="gone"&&this.hooks.onToast(i);return}this.pushHistory();const a=[];this.sim.take(n,a),this.taps++,this.afterAction(a);const r=this.sim.groupOf(n);Rt.play(r.length>1?"link":"place")}takeBox(t){if(this.paused||this.finished==="won"||!this.sim.canTake(t))return!1;this.pushHistory();const e=[];return this.sim.take(t,e),this.taps++,this.afterAction(e),Rt.play(this.sim.groupOf(t).length>1?"link":"place"),!0}autoStep(){if(this.finished==="won"||this.sim.status==="won")return"done";if(this.paused||!this.sim.isQuiet())return"wait";const t=this.sim.clone();t.unstick(),t.settle();const e=Yr(t,2e4);return e.status!=="solved"||!e.moves.length?e.status==="solved"?"done":"stuck":(this.finished==="stuck"&&(this.finished=null,this.sim.unstick()),this.takeBox(e.moves[0])?"moved":"wait")}pushHistory(){this.history.push(this.sim.clone()),this.history.length>60&&this.history.shift()}afterAction(t){this.setHint(null),this.view.apply(t);for(const e of t)if(e.t==="reveal")Rt.play("reveal"),this.sparkleBox(e.box,"#ffffff");else if(e.t==="thaw"){Rt.play("thaw");const n=this.view.queue.boxTop(e.box,new P);this.view.fx.shards(n.x,n.y,n.z)}this.finished==="stuck"&&(this.finished=null,this.sim.unstick()),this.stuckPending=!1,this.hooks.onChange(this)}sparkleBox(t,e){const n=this.view.queue.boxTop(t,new P);this.view.fx.sparkle(n.x,n.y+.2,n.z,e,12,1)}update(t,e){if(!this.paused&&this.sim.status==="playing"){this.playTime+=t,this.acc+=t*this.speed;let n=0;for(;this.acc>=Zr&&n++<8;){this.acc-=Zr;const i=[],a=this.sim.round(i);if(i.length&&this.handleRound(i),a===0){this.acc=0,this.sim.checkStuck()&&(this.stuckPending=!0);break}}}this.view.ants.speed=this.speed,this.view.update(this.paused?0:t,e),this.winPending&&this.view.isIdle()&&(this.winPending=!1,this.finished="won",this.hooks.onWin(this)),this.stuckPending&&this.view.isIdle()&&this.sim.status==="stuck"&&(this.stuckPending=!1,this.finished="stuck",this.view.queue.pulseSlots(),this.hooks.onStuck(this))}handleRound(t){this.view.apply(t,Zr);let e=0;for(const n of t)if(n.t==="ant")e++;else if(n.t==="boxDone"){Rt.play("boxDone");const i=this.view.layout.slot[n.slot];this.view.fx.sparkle(i.x,.8,i.z,this.view.queue.boxColor(n.box),14,1.1),this.hooks.onChange(this)}else n.t==="won"&&(this.winPending=!0,this.hooks.onChange(this));e&&Rt.play("antOut")}canUse(t){if(this.finished==="won")return!1;switch(t){case"undo":return this.history.length>0;case"slot":return this.sim.slots.length<7;case"shuffle":return this.sim.queueSize()>1;case"grab":return this.sim.queueSize()>0&&this.sim.freeSlots()>0;case"hint":return this.sim.queueSize()>0}}use(t){if(!this.canUse(t))return!1;let e=!0;switch(t){case"undo":e=this.undo();break;case"slot":this.sim.addSlot(),this.view.relayout(!0),this.view.queue.syncFromSim(!1),this.afterAction([]);break;case"shuffle":e=this.smartShuffle();break;case"grab":return this.grabMode=!0,this.hooks.onToast("grab"),this.hooks.onChange(this),!0;case"hint":e=this.hint();break}return e&&(this.boostersUsed++,Rt.play(t==="undo"?"undo":t==="shuffle"?"shuffle":t==="hint"?"hint":"booster")),e}cancelGrab(){this.grabMode=!1,this.hooks.onChange(this)}doGrab(t){this.pushHistory();const e=[];if(!this.sim.grab(t,e)){this.history.pop(),this.view.queue.shake(t),Rt.play("invalid");return}this.grabMode=!1,this.boostersUsed++,Rt.play("booster"),this.sparkleBox(t,"#fff6a8"),this.afterAction(e)}undo(){const t=this.history.pop();return t?(this.sim=t,this.sim.flushPending(),this.view.ants.fadeAll(),this.rebindView(),this.finished=null,this.stuckPending=!1,this.winPending=!1,this.eaten=this.total-this.sim.left,this.hooks.onProgress(this.eaten,this.total),this.hooks.onChange(this),!0):!1}rebindView(){const t=this.view;t.setSim(this.sim),t.board.syncFrom(this.sim,!0),t.queue.syncFromSim(!0),t.relayout(!0),t.queue.syncFromSim(!1)}smartShuffle(){this.pushHistory();const t=this.sim.clone();t.unstick();let e=null,n=-1/0;for(let a=0;a<14;a++){const r=t.clone();r.shuffle(this.rng);const o=r.clone(),l=Yr(o,1500),c=(l.status==="solved"?1e3:l.status==="unknown"?200:0)+r.legalMoves().length*10+this.rng.next();if(c>n&&(n=c,e=r),l.status==="solved"&&a>=3)break}const i=[];return this.sim=e,this.rebindView(),this.afterAction(i),!0}hint(){const t=this.sim.clone();t.unstick(),t.settle();const e=Yr(t,4e3);return e.status==="solved"&&e.moves.length?(this.setHint(e.moves[0]),!0):(this.hooks.onToast("nohint"),!1)}setHint(t){this.hintId=t,this.view.queue.setHint(t)}get hinted(){return this.hintId}stars(t){return t?1:this.boostersUsed===0?3:2}celebrate(){const t=this.view.layout,e=t.picX0+t.picW/2,n=t.picZ0+t.picH/2;return this.view.fx.confetti(e,1.5,n,180,5),this.view.punch(),this.view.board.rebuild()}dispose(){this.view.unload()}}const Rn=[{id:"meadow",name:{en:"Sunny Meadow",ru:"Солнечный луг"},bg:"#7fbf5a",sky:"#fffbea",bounce:"#6f9a4d",frame:"#f1d39c",soil:"#b07a4b",roof:"#e8674a",ground:{kind:"grass",base:"#86c45b",tints:["#9ad26a","#77b64f","#a7da78","#6fae4a"],detail:["#5f9f3e","#a9dc7b","#8fca60","#4f8c34","#b8e58a"],accents:["#ffffff","#ffe14d","#ff8fb1","#b9a3ff"]},ui:{top:"#bfe9ff",bottom:"#9edc6f",accent:"#ff9f1c",path:"#f3dfb4"},music:0},{id:"forest",name:{en:"Whispering Forest",ru:"Шепчущий лес"},bg:"#3f6b3a",sky:"#f3ffe6",bounce:"#44613a",frame:"#d8b07a",soil:"#8a5a36",roof:"#c4563a",ground:{kind:"forest",base:"#4f7d3e",tints:["#5d8c47","#436d35","#6a8f45","#3b5f2f"],detail:["#7aa04f","#35572a","#8cae5b","#2f4d25"],accents:["#e0703a","#f2b84b","#c9502e","#a7c957"]},ui:{top:"#cdeccf",bottom:"#4f7d3e",accent:"#f2b84b",path:"#d9c29a"},music:1},{id:"sea",name:{en:"Seashell Beach",ru:"Пляж ракушек"},bg:"#f1dca8",sky:"#f4fbff",bounce:"#d9c28f",frame:"#ffffff",soil:"#c9a26b",roof:"#3a9fd8",ground:{kind:"sand",base:"#f1dba6",tints:["#f6e4b8","#e9cf94","#fbeac2","#e3c686"],detail:["#d8bb7e","#fff4d6","#cfae6d","#e7cf9b"],accents:["#ffb4a2","#ffffff","#9ad1d4","#ffd6a5"]},ui:{top:"#8fd8f4",bottom:"#f1dba6",accent:"#ff7b7b",path:"#fff1cf"},music:2},{id:"sweets",name:{en:"Candy Town",ru:"Конфетный город"},bg:"#f7c6dc",sky:"#fff5fb",bounce:"#e8a8c6",frame:"#fff0f6",soil:"#9c5b3b",roof:"#ff7eb6",ground:{kind:"frosting",base:"#f9cfe2",tints:["#fbdbe9","#f5bfd7","#fde6f0","#f2b3cf"],detail:["#ffffff","#f7a8c9"],accents:["#ff5d8f","#ffd166","#06d6a0","#118ab2","#9b5de5","#ffffff"]},ui:{top:"#ffd6e8",bottom:"#f9cfe2",accent:"#ff5d8f",path:"#fff7fb"},music:3},{id:"space",name:{en:"Starry Night",ru:"Звёздная ночь"},bg:"#1d2340",sky:"#c9d4ff",bounce:"#2b2f55",frame:"#c7b8ff",soil:"#5b4a7a",roof:"#7b6cf0",ground:{kind:"night",base:"#2a3358",tints:["#303b66","#232c4d","#36427a","#1f2745"],detail:["#3d4a82","#1b2240","#4a5a96"],accents:["#fff7c2","#a0f0ff","#ffc2f0"]},ui:{top:"#101631",bottom:"#2a3358",accent:"#ffd166",path:"#c7b8ff"},music:4},{id:"winter",name:{en:"Snowy Hills",ru:"Снежные холмы"},bg:"#e9f3fb",sky:"#ffffff",bounce:"#b9d3e8",frame:"#cfe3f3",soil:"#8c6a55",roof:"#d94f4f",ground:{kind:"snow",base:"#eef5fb",tints:["#f7fbff","#e2edf7","#ffffff","#d9e7f3"],detail:["#cfe0ee","#ffffff"],accents:["#ffffff","#bfe3ff","#ffd6e0"]},ui:{top:"#cfe9ff",bottom:"#eef5fb",accent:"#4ea8de",path:"#ffffff"},music:5},{id:"fantasy",name:{en:"Enchanted Glade",ru:"Волшебная поляна"},bg:"#6c4fa3",sky:"#fff0ff",bounce:"#6a4f95",frame:"#f3d6ff",soil:"#7b4e8e",roof:"#a55eea",ground:{kind:"magic",base:"#8a6cc2",tints:["#9b7fd0","#7c5db4","#a78ad8","#6f52a6"],detail:["#b49be0","#6a4c9c","#c7b2ec"],accents:["#fff3b0","#ffc6ff","#bdf4ff","#ffffff"]},ui:{top:"#d7c2ff",bottom:"#8a6cc2",accent:"#ffcf56",path:"#f3e6ff"},music:6}];function li(s){return Rn[(s%Rn.length+Rn.length)%Rn.length]}function $(s,t={},...e){const n=document.createElement(s);if(t.class&&(n.className=t.class),t.html!==void 0&&(n.innerHTML=t.html),t.text!==void 0&&(n.textContent=t.text),t.style&&n.setAttribute("style",t.style),t.attrs)for(const[i,a]of Object.entries(t.attrs))n.setAttribute(i,a);if(t.on)for(const[i,a]of Object.entries(t.on))n.addEventListener(i,a);for(const i of e)i&&n.append(i);return n}function Ya(s,t,e){const n=$("button",{class:"btn "+t,html:s});return n.addEventListener("click",i=>{i.stopPropagation(),Rt.unlock(),Rt.play("button"),e()}),n}const f3={"light-bulb":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M17.651 22.27h-3.89c-.79 0-1.44.64-1.43 1.43v3.89c0 .79.64 1.43 1.43 1.43h.248a1.94 1.94 0 0 0 3.384 0h.258c.79 0 1.43-.64 1.43-1.43V23.7c0-.79-.64-1.43-1.43-1.43"/><path fill="#fcd53f" d="M18.161 23.13c.24 0 .43-.18.45-.41c.07-.86.44-2.95 2.46-5.19a8.66 8.66 0 0 0 3.29-6.31c.02-.24.03-.4.03-.5v-.1c-.06-4.78-3.93-8.62-8.7-8.62a8.69 8.69 0 0 0-8.69 8.6s-.01.24.03.64c.16 2.54 1.4 4.79 3.29 6.28c2.02 2.25 2.42 4.34 2.49 5.2c.02.23.21.41.45.41z"/><path fill="#ffb02e" d="M15.701 10.7c1.62 0 2.94 1.31 2.96 2.93v.08c0 .03 0 .07-.01.13c-.05.84-.46 1.63-1.12 2.15l-.07.05l-.06.06c-1.1 1.22-1.33 4.32-1.37 6.02h-.65c-.05-1.7-.29-4.8-1.39-6.02l-.06-.06l-.07-.05a2.96 2.96 0 0 1-1.12-2.17c0-.04-.01-.07-.01-.09v-.09c.03-1.62 1.36-2.94 2.97-2.94m0-1a3.96 3.96 0 0 0-2.45 7.07c1.2 1.34 1.14 6.36 1.14 6.36h2.64s-.08-5.02 1.13-6.35c.86-.68 1.43-1.71 1.5-2.88c.01-.11.01-.18.01-.23v-.04a3.97 3.97 0 0 0-3.97-3.93"/><path fill="#d3d3d3" d="M19.167 25.053a.5.5 0 1 0-.172-.986l-6.74 1.18a.5.5 0 1 0 .172.986zm-.05 2.15a.5.5 0 0 0-.172-.985l-6.65 1.17a.5.5 0 1 0 .173.984z"/><path fill="#fff478" d="M13.791 5.44c-1.11 1.92-.55 4.32 1.25 5.35s4.15.32 5.26-1.6s.55-4.32-1.25-5.35s-4.15-.32-5.26 1.6"/></g></svg>',magnet:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M11 23v6.06c0 .52-.42.94-.94.94H3.94c-.52 0-.94-.42-.94-.94V23l4.028-2.152zm18 0v6.06c0 .52-.42.94-.94.94h-6.12c-.52 0-.94-.42-.94-.94V23l3.99-2.152z"/><path fill="#f8312f" d="M11 23v-7.94c0-2.75 2.2-5.04 4.95-5.06c2.78-.03 5.05 2.23 5.05 5v8h8v-8c0-7.18-5.82-13-13-13S3 7.82 3 15v8z"/></g></svg>',coin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14"/><path fill="#d3883e" d="M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16S9.925 5 16 5s11 4.925 11 11m-4.68 3.89a.54.54 0 0 0-.51-.37h.03v-7.76c.43-.28.51-.97-.01-1.28l-5.39-3.26a.73.73 0 0 0-.78 0l-5.4 3.26c-.52.31-.44 1-.02 1.28v7.77h-.11c-.24 0-.45.16-.51.39l-.35 1.25c-.1.34.16.68.51.68h12.45c.35-.01.61-.36.5-.71zM11.9 11.88v7.64h1.66v-7.64zm3.31 0v7.64h1.69v-7.64zm3.35 0v7.64h1.62v-7.64z" opacity=".53"/></g></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fcd53f" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.23 2.23 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.28 2.28 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0"/></svg>',"glowing-star":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#fcd53f"><path d="m28.979 17.003l-3.108.214c-.834.06-1.178 1.079-.542 1.608l2.388 1.955c.521.428 1.314.204 1.523-.428l.709-2.127c.219-.632-.292-1.273-.97-1.222M21.75 2.691l-.72 2.9c-.2.78.66 1.41 1.34.98l2.54-1.58c.55-.34.58-1.14.05-1.52l-1.78-1.29a.912.912 0 0 0-1.43.51M6.43 4.995l2.53 1.58c.68.43 1.54-.19 1.35-.98l-.72-2.9a.92.92 0 0 0-1.43-.52l-1.78 1.29c-.53.4-.5 1.19.05 1.53M4.185 20.713l2.29-1.92c.62-.52.29-1.53-.51-1.58l-2.98-.21a.92.92 0 0 0-.94 1.2l.68 2.09c.2.62.97.84 1.46.42m13.61 7.292l-1.12-2.77c-.3-.75-1.36-.75-1.66 0l-1.12 2.77c-.24.6.2 1.26.85 1.26h2.2a.92.92 0 0 0 .85-1.26"/><path d="m17.565 3.324l1.726 3.72c.326.694.967 1.18 1.717 1.29l4.056.624c1.835.278 2.575 2.53 1.293 3.859L23.268 16a2.28 2.28 0 0 0-.612 1.964l.71 4.374c.307 1.885-1.687 3.293-3.354 2.37l-3.405-1.894a2.25 2.25 0 0 0-2.21 0l-3.404 1.895c-1.668.922-3.661-.486-3.355-2.37l.71-4.375A2.28 2.28 0 0 0 7.736 16l-3.088-3.184c-1.293-1.34-.543-3.581 1.293-3.859l4.055-.625a2.3 2.3 0 0 0 1.717-1.29l1.727-3.719c.819-1.765 3.306-1.765 4.124 0"/></g></svg>',locked:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M16 2a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6m0 2.5A3.5 3.5 0 0 1 19.5 8v3a3.5 3.5 0 1 1-7 0V8A3.5 3.5 0 0 1 16 4.5"/><path fill="#f9c23c" d="M5 14a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path fill="#433b6b" d="M17.5 20.5a2.5 2.5 0 1 0-3 0V24a1.5 1.5 0 0 0 3 0z"/></g></svg>',fire:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6723" d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"/><path fill="#ffb02e" d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"/></g></svg>',trophy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="M10.52 7.521a3.435 3.435 0 0 0-4.213-2.369a2 2 0 0 0-.163.046c-2.493.831-2.691 4.214-.455 5.45l4.97 2.75a.866.866 0 1 0 .838-1.516l-4.97-2.75c-.982-.543-.823-1.956.16-2.288l.005-.002l.07-.018c.899-.25 1.834.27 2.093 1.175a.866.866 0 1 0 1.666-.478m11.939.478a1.7 1.7 0 0 1 2.118-1.168l.045.011l.007.002c.981.332 1.14 1.745.158 2.288l-4.97 2.75a.866.866 0 1 0 .84 1.516l4.97-2.75c2.235-1.236 2.037-4.619-.456-5.45a2 2 0 0 0-.164-.046a3.435 3.435 0 0 0-4.213 2.37a.866.866 0 1 0 1.666.477m-5.133 9.511v-4.22h-3.34v4.22c0 .74-.33 1.45-.9 1.92l-1.92 1.6h8.98l-1.92-1.6a2.51 2.51 0 0 1-.9-1.92"/><path fill="#ffb02e" d="M15.658 16.54a6.97 6.97 0 0 1-6.97-6.97V2.71c0-.39.32-.71.71-.71h12.53c.39 0 .71.32.71.71v6.86c0 3.85-3.12 6.97-6.98 6.97"/><path fill="#6d4534" d="M22.792 21.03H8.197c-.77 0-1.423.51-1.571 1.22l-1.614 7.09c-.073.33.19.64.549.64h19.878c.359 0 .622-.31.549-.64l-1.614-7.09c-.158-.71-.812-1.22-1.582-1.22"/><path fill="#ffb02e" d="M18.383 23.96h-5.766a.625.625 0 0 0-.613.64v1.81c0 .35.268.64.613.64h5.766c.335 0 .613-.28.613-.64V24.6c0-.35-.268-.64-.613-.64"/></g></svg>',crown:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" fill-rule="evenodd" d="M6.94 23.5a1.58 1.58 0 1 1-3.16 0a1.58 1.58 0 0 1 3.16 0m21.26 0a1.58 1.58 0 1 1-3.16 0a1.58 1.58 0 0 1 3.16 0" clip-rule="evenodd"/><path fill="#e19747" fill-rule="evenodd" d="m10.25 13.27l3.18 4.27l-6.59.76l2.12-4.89c-.51-.2-.87-.7-.87-1.28c0-.76.62-1.38 1.38-1.38a1.383 1.383 0 0 1 .78 2.52m12.76.14l2.12 4.89l-6.59-.76l3.18-4.27c-.36-.25-.6-.67-.6-1.14c0-.76.62-1.38 1.38-1.38s1.38.62 1.38 1.38c0 .58-.36 1.08-.87 1.28" clip-rule="evenodd"/><path fill="#ffb02e" d="M29.98 13.09c0-.76-.62-1.38-1.38-1.38s-1.38.62-1.38 1.38c0 .28.09.55.23.76c-.22 0-.44.05-.65.19l-3.93 2.54c-.52.33-1.2.21-1.57-.29l-4.37-5.93a.7.7 0 0 0-.11-.13a1.721 1.721 0 1 0-1.66 0c-.04.04-.08.08-.11.13l-4.37 5.93c-.36.5-1.05.62-1.57.29l-3.93-2.54c-.21-.14-.43-.19-.65-.19c.15-.22.23-.48.23-.76c0-.76-.62-1.38-1.38-1.38S2 12.33 2 13.09s.62 1.38 1.38 1.38c.05 0 .1 0 .14-.01c-.13.23-.18.5-.12.79L6 28.22c.19.93 1.01 1.6 1.96 1.6h16.06c.95 0 1.77-.67 1.96-1.6l2.6-12.97c.06-.29 0-.57-.12-.79c.05 0 .1.01.14.01c.76 0 1.38-.62 1.38-1.38"/><path fill="#00a6ed" d="M15.99 26a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/><path fill="#f8312f" fill-rule="evenodd" d="M11 23.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m13 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/></g></svg>',"gem-stone":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" d="M24.21 7.9H7.79a.54.54 0 0 0-.42.21L2.15 15a.52.52 0 0 0 0 .67L15.59 29.9a.52.52 0 0 0 .76 0l13.44-14.23a.52.52 0 0 0 0-.67l-5.16-6.89a.54.54 0 0 0-.42-.21"/><path fill="#1c5cd7" d="M15.594 29.902c.156.166.333.176.402.16l.017-.097V13.996H2.91c-.2.266-.632.837-.754.996c-.152.2-.254.418 0 .688z"/><path fill="#0084ce" d="M15.996 7.9H7.79a.54.54 0 0 0-.42.21l-4.837 6.385c-.202.259-.406.712.501.712c3.37.002 6.156.009 8.106.009c1.046-1.566 2.724-4.077 4.856-7.316"/><path fill="#aeddff" d="m16 30.059l-4.86-14.83h9.72z"/><path fill="#26eafc" d="M24.047 7.9h-8.031v7.298h13.883a.6.6 0 0 0-.1-.197c-.094-.134-4.983-6.642-5.1-6.806s-.328-.295-.652-.295"/><path fill="#b4f6fc" d="m16 7.9l2.43 3.67l2.43 3.66h-9.72l2.43-3.66z"/></g></svg>',"wrapped-gift":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fcd53f" d="M24.888 30H7.112A2.093 2.093 0 0 1 5 27.914V15l10.877-3.06L27 15v12.914C27 29.06 26.06 30 24.888 30"/><path fill="#f8312f" d="M27 5.847c0-3.384-4.045-5.106-6.466-2.763L16 7.479l-4.533-4.395C9.045.73 5 2.463 5 5.847C5 7.04 5.957 8 7.142 8L16 10.17L24.858 8A2.157 2.157 0 0 0 27 5.847"/><path fill="#ffb02e" d="M27.662 8H4.337C3.6 8 3 8.6 3 9.342v4.316C3 14.4 3.6 15 4.338 15h23.324C28.4 15 29 14.4 29 13.658V9.342C29 8.6 28.4 8 27.662 8"/><path fill="#ca0b4a" d="M16.005 3C14.345 3 13 4.37 13 6.06V30h6V6.06C19.01 4.37 17.666 3 16.005 3"/></g></svg>',ant:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M2.01 2.44a.5.5 0 0 1 .5-.5a6.603 6.603 0 0 1 6.61 6.61a.5.5 0 0 1-1 0a5.603 5.603 0 0 0-5.61-5.61a.5.5 0 0 1-.5-.5m14.82 13.517a.5.5 0 1 0-.58-.814l-.536.382a.503.503 0 0 0-.623.445l-5.455 3.9c-.988-.813-2.3-1.203-3.585-1.203c-1.426 0-2.886.481-3.895 1.49a.5.5 0 1 0 .708.706c.781-.781 1.966-1.196 3.187-1.196c1.222 0 2.41.414 3.196 1.197a.5.5 0 0 0 .644.053l4.505-3.22l-7.21 11.538a.5.5 0 1 0 .848.53l7.056-11.291V29.5a.5.5 0 1 0 1 0V16.873l.374-.598a.5.5 0 0 0 .043-.087z"/><path fill="#635994" d="M13.02 16.037c-1 .796-2.62.963-4.45.963c-3.04 0-5.5-.46-5.5-3.5S5.53 8 8.57 8a5.497 5.497 0 0 1 5.495 5.725a3.02 3.02 0 0 1 4.944 2.84c.634-1.017 1.694-1.625 3.461-1.625c4.16 0 7.53 3.37 7.53 7.53S26.63 30 22.47 30s-4.4-3.37-4.4-7.53c0-1.772.044-3.401.415-4.687a3.02 3.02 0 0 1-5.465-1.746"/><path fill="#533566" d="M6.56 10.52c.41 0 .75.33.75.75v.88a.749.749 0 1 1-1.5 0v-.88c.01-.41.34-.75.75-.75"/></g></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f9c23c" d="M10.52 7.052a1.17 1.17 0 0 1-.639-.636L8.93 4.257c-.178-.343-.69-.343-.858 0l-.952 2.16a1.28 1.28 0 0 1-.638.635l-1.214.524a.462.462 0 0 0 0 .838l1.214.524c.293.121.523.353.638.636l.952 2.169c.178.343.69.343.858 0l.952-2.17c.126-.282.356-.504.638-.635l1.214-.524a.462.462 0 0 0 0-.838zm15.054 6.503a3.73 3.73 0 0 1-1.922-1.977L20.79 4.81a1.432 1.432 0 0 0-2.58 0l-2.863 6.768a3.8 3.8 0 0 1-1.921 1.977l-3.622 1.64c-1.072.53-1.072 2.08 0 2.61l3.622 1.64a3.74 3.74 0 0 1 1.922 1.977l2.862 6.768a1.432 1.432 0 0 0 2.58 0l2.863-6.768a3.8 3.8 0 0 1 1.921-1.977l3.622-1.64c1.072-.53 1.072-2.08 0-2.61zM8.281 20.33c.16.392.454.696.822.872l1.55.725a.646.646 0 0 1 0 1.146l-1.55.725c-.368.176-.661.49-.822.872l-1.228 2.977a.61.61 0 0 1-1.106 0L4.72 24.67a1.66 1.66 0 0 0-.822-.872l-1.55-.725a.646.646 0 0 1 0-1.146l1.55-.725c.368-.176.661-.49.822-.872l1.228-2.977a.61.61 0 0 1 1.106 0z"/></svg>',snowflake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#00a6ed" d="m23.564 18.9l5.112-1.36c.553-.15 1.137.15 1.288.71c.15.56-.182 1.12-.735 1.27l-3.11.83l2.224 1.27c.483.28.655.89.373 1.37s-.896.65-1.379.37l-2.224-1.27l.836 3.09c.15.56-.171 1.12-.735 1.27a1.04 1.04 0 0 1-1.278-.73l-1.368-5.08l-2.315-1.33a5.07 5.07 0 0 1-2.747 1.59v2.63l3.744 3.72c.402.4.402 1.06 0 1.46c-.403.4-1.067.4-1.47 0l-2.274-2.26V29a1.006 1.006 0 0 1-2.012 0v-2.54l-2.274 2.26c-.403.4-1.067.4-1.47 0a1.034 1.034 0 0 1 0-1.46l3.744-3.72v-2.63c-1.097-.22-2.033-.8-2.747-1.59l-2.305 1.32l-1.368 5.08c-.151.55-.725.88-1.278.73a1.04 1.04 0 0 1-.735-1.27l.836-3.09l-2.224 1.28A1.02 1.02 0 0 1 4.294 23a.976.976 0 0 1 .363-1.35l2.223-1.28l-3.109-.83a1.04 1.04 0 0 1-.735-1.27c.151-.55.725-.88 1.278-.73l5.112 1.36l2.315-1.33a4.8 4.8 0 0 1-.282-1.57c0-.55.11-1.08.282-1.55l-2.315-1.33l-5.112 1.36a1.04 1.04 0 0 1-1.278-.73c-.15-.56.182-1.12.735-1.27l3.11-.83l-2.224-1.28A1.004 1.004 0 0 1 4.294 9c.272-.48.896-.64 1.369-.37l2.234 1.28l-.836-3.09c-.15-.55.182-1.11.735-1.26s1.117.18 1.268.73l1.368 5.08l2.305 1.32a5.07 5.07 0 0 1 2.747-1.59V8.47L11.74 4.75a1.034 1.034 0 0 1 0-1.46a1.05 1.05 0 0 1 1.469 0l2.274 2.26V3a1.006 1.006 0 0 1 2.012 0v2.55l2.274-2.26a1.05 1.05 0 0 1 1.47 0c.402.4.402 1.06 0 1.46l-3.744 3.72v2.63a5.05 5.05 0 0 1 2.737 1.58l2.314-1.33l1.369-5.08c.151-.55.724-.88 1.278-.73c.553.15.886.72.735 1.27l-.836 3.09l2.224-1.27a1.02 1.02 0 0 1 1.379.37a1 1 0 0 1-.363 1.36l-2.223 1.27l3.109.83c.553.15.885.72.734 1.27c-.15.55-.724.88-1.277.73l-5.112-1.36l-2.314 1.33c.17.49.281 1.02.281 1.57s-.11 1.07-.281 1.57zM19.509 16c0-1.657-1.352-3-3.019-3a3.01 3.01 0 0 0-3.019 3c0 1.657 1.352 3 3.019 3a3.01 3.01 0 0 0 3.019-3"/></svg>',link:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M21.148 21.148c-1.62-.43-2.847-.134-4.62.57l-3.41 3.41a4.52 4.52 0 0 1-6.4 0a4.52 4.52 0 0 1 0-6.4l3.41-3.41h.92l2.39-1.87c1.31-.14 2.68.27 3.68 1.28s1.42 2.37 1.28 3.68c.718.783 1.677.95 2.437.19l.872-2.06c-.27-1.54-1-3.02-2.19-4.21a7.86 7.86 0 0 0-4.21-2.19l-2.19-.674l-2.42 1.233c-.86.38-1.67.92-2.38 1.63l-4 4c-3.09 3.09-3.09 8.12 0 11.21s8.12 3.09 11.21 0l4-4a7.9 7.9 0 0 0 1.62-2.39"/><path fill="#bebebe" d="M27.528 4.318c-3.09-3.09-8.12-3.09-11.21 0l-4 4c-.7.71-1.24 1.52-1.62 2.38a8 8 0 0 1 4.62-.57l3.41-3.41a4.52 4.52 0 0 1 6.4 0c1.76 1.77 1.77 4.64 0 6.4l-3.41 3.41l-.59.59c-.76.76-1.73 1.17-2.72 1.28c-1.31.14-2.68-.27-3.68-1.28s-1.42-2.37-1.28-3.68c-1 .11-1.96.52-2.72 1.28l-.59.59c.27 1.54 1 3.02 2.19 4.21a7.86 7.86 0 0 0 4.21 2.19a7.99 7.99 0 0 0 7-2.2l4-4c3.08-3.07 3.08-8.1-.01-11.19"/></g></svg>',"red-question-mark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f8312f" d="M13.037 20.863c0 1.302 1.145 2.36 2.555 2.36s2.556-1.058 2.556-2.37V19.15c0-.111.073-.209.18-.242C21.676 17.85 24 14.919 24 11.562v-1.254c0-4.239-3.69-7.773-8.227-7.861c-2.28-.05-4.432.744-6.065 2.212c-1.622 1.469-2.523 3.447-2.523 5.552c0 1.311 1.155 2.369 2.566 2.369s2.555-1.058 2.555-2.36c0-.822.35-1.596.986-2.173a3.4 3.4 0 0 1 2.375-.872c1.78.04 3.223 1.45 3.223 3.143v1.244c0 1.468-1.124 2.731-2.683 2.996c-1.834.313-3.17 1.791-3.17 3.514zM15.5 30a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/></svg>',"speaker-high-volume":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#83cbff" d="M23.506 7.975a1 1 0 0 1-.506-.87a1 1 0 0 1 1.506-.86A11 11 0 0 1 30 15.768c0 4.07-2.21 7.622-5.495 9.524a1 1 0 0 1-1.506-.862c0-.359.194-.687.505-.867a9 9 0 0 0 1.86-1.43a8.94 8.94 0 0 0 2.635-6.46a9 9 0 0 0-4.493-7.698m.166 2.653a7 7 0 0 1 2.245 4.924a6.96 6.96 0 0 1-2.241 5.354c-.64.592-1.676.141-1.676-.73c0-.28.112-.55.317-.74a4.98 4.98 0 0 0 1.604-3.668c0-1.45-.618-2.754-1.604-3.667a.97.97 0 0 1-.317-.713v-.028c0-.869 1.035-1.322 1.672-.732"/><path fill="#b4acbc" d="M8.012 23h-4.21C2.808 23 2 22.153 2 21.108V10.892C2 9.847 2.807 9 3.803 9h4.21L19 13a3 3 0 1 1 0 6z"/><path fill="#cdc4d6" d="m16.61 26.83l-8.612-3.829V9.019l8.05-3.788c1.122-.528 2.988.024 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.527"/></g></svg>',"muted-speaker":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M7.803 23h4.21l1-7l-1-7h-4.21C6.807 9 6 9.847 6 10.892v10.216C6 22.153 6.807 23 7.803 23M26 16.023a3.055 3.055 0 1 1-6.11 0a3.055 3.055 0 0 1 6.11 0"/><path fill="#d3d3d3" d="m20.61 26.83l-8.612-3.829V9.02l8.05-3.787c1.122-.529 2.988.023 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.526"/><path fill="#f8312f" d="M24.97 26.652L5.15 6.832A1.19 1.19 0 0 1 6.83 5.15l19.82 19.82a1.19 1.19 0 0 1-1.682 1.682"/></g></svg>',"musical-note":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#402a32" d="M29.41 2.869c0-.53-.46-.93-.98-.86l-16.97 2.2c-.43.06-.76.43-.76.87v13.61c-.59-.2-1.23-.32-1.89-.32c-3.21 0-5.81 2.61-5.81 5.82s2.6 5.81 5.81 5.81s5.81-2.6 5.81-5.81c0-.12-.01-.25-.01-.37v-13.9c0-.39.29-.71.67-.76l9.35-1.21c.46-.06.87.3.87.76v6.53a5.808 5.808 0 0 0-7.71 5.49c0 3.21 2.6 5.81 5.81 5.81s5.81-2.6 5.81-5.81z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M12.847 3.834A2 2 0 0 1 14.84 2h2.32a2 2 0 0 1 1.993 1.834l.235 2.825a.5.5 0 0 0 .821.34l2.164-1.831a2 2 0 0 1 2.706.112l1.64 1.64a2 2 0 0 1 .113 2.707l-1.83 2.163a.5.5 0 0 0 .34.822l2.824.235A2 2 0 0 1 30 14.84v2.32a2 2 0 0 1-1.834 1.993l-2.825.235a.5.5 0 0 0-.34.821l1.831 2.164a2 2 0 0 1-.112 2.706l-1.64 1.64a2 2 0 0 1-2.707.113l-2.164-1.83a.5.5 0 0 0-.82.34l-.236 2.824A2 2 0 0 1 17.16 30h-2.32a2 2 0 0 1-1.993-1.834l-.235-2.825a.5.5 0 0 0-.822-.34l-2.163 1.831a2 2 0 0 1-2.706-.112l-1.64-1.64a2 2 0 0 1-.113-2.707l1.83-2.164a.5.5 0 0 0-.34-.82l-2.824-.236A2 2 0 0 1 2 17.16v-2.32a2 2 0 0 1 1.834-1.993l2.825-.235a.5.5 0 0 0 .34-.822L5.168 9.628A2 2 0 0 1 5.28 6.92l1.64-1.64a2 2 0 0 1 2.707-.113l2.163 1.83a.5.5 0 0 0 .822-.34zM21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"/><path fill="#998ea4" d="M24 16a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-3.5 0a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"/><path fill="#cdc4d6" d="M10.5 16a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"/></g></svg>',house:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" fill-rule="evenodd" d="M10 8.834V3.523A.53.53 0 0 0 9.467 3H6.543A.53.53 0 0 0 6 3.523v8.646l-1 .833v16h22v-15L16.07 3.772z" clip-rule="evenodd"/><path fill="#8c5543" d="M15.92 27.003H8.08c-.04 0-.08-.04-.08-.08v-10.53c0-.75.61-1.36 1.36-1.36h5.29c.75 0 1.36.61 1.36 1.36v10.53c-.01.04-.05.08-.09.08"/><path fill="#402a32" d="M14.5 21.002a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"/><path fill="#d3d3d3" d="M15.96 28.002H8c-.55 0-1-.45-1-1s.45-1 1-1h7.96c.55 0 1 .45 1 1s-.45 1-1 1"/><path fill="#00f397" d="M30 29.002H2v-.09c0-1.06.85-1.91 1.91-1.91h24.18c1.05 0 1.91.85 1.91 1.91z"/><path fill="#f8312f" d="m16.88 2.353l12.76 12.57c.48.47.48 1.23 0 1.69c-.47.47-1.24.47-1.72 0l-11.9-11.72l-11.94 11.76c-.47.47-1.24.47-1.72 0s-.48-1.23 0-1.7l12.8-12.6c.47-.47 1.24-.47 1.72 0"/><path fill="#83cbff" d="M23.14 21.002h-4.28c-.48 0-.86-.38-.86-.86v-4.28c0-.47.38-.86.86-.86h4.28c.47 0 .86.38.86.86v4.28c0 .48-.38.86-.86.86"/></g></svg>',"world-map":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fff" d="M2.52 6.84L8.97 5l.53 11.5l-.53 11.49l-6.12 1.99a.684.684 0 0 1-.85-.66V7.5c0-.31.22-.58.52-.66M15.98 7l6.99-2l.53 11.5l-.51 11.5l-7.01 2L15 18.5z"/><path fill="#e6e6e6" d="M15.98 7L8.97 5v22.99L15.98 30zm13.42-.16L22.97 5v23l6.09 1.98c.43.11.85-.22.85-.66V7.5c0-.31-.21-.58-.51-.66"/><path fill="#00a6ed" d="M3.95 8.34L8.97 7L10 16.5L8.97 26l-4.66 1.42a.687.687 0 0 1-.87-.66V9c0-.31.21-.58.51-.66M15.94 9l7.03-1.98L24 16.5l-1.03 9.49l-7.03 2L15 18.5z"/><path fill="#0074ba" d="M15.94 9L8.97 7.02v18.97l6.97 2zm12-.66l-4.97-1.32v19l4.61 1.42c.44.12.87-.21.87-.66V9c0-.31-.21-.58-.51-.66"/><path fill="#00d26a" d="m14.32 17.64l.53-.53c.072-.063.16-.101.242-.138l.028-.012h.43c.22 0 .4-.18.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4-.18-.4-.4v-1.19c0-.22.18-.4.4-.4h.19c.22 0 .4-.18.4-.4v-.19c0-.22.18-.4.4-.4h1.44c.1 0 .2-.03.27-.1l1.75-1.57c.08-.08.13-.19.13-.3v-.03c0-.55.45-1 1-1h.4c.33 0 .6.27.6.6c0 .22.18.4.4.4h1.19c.22 0 .4-.18.4-.4v-.19c0-.22.18-.4.4-.4h.04c.85 0 1.55.69 1.55 1.55v1.94c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.1c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v1.19c0 .22.18.4.4.4a.4.4 0 0 1 .37.55l-.88 2.19c-.06.15-.21.25-.37.25h-1.12c-.22 0-.4-.18-.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v.19c0 .22-.18.4-.4.4h-.19c-.22 0-.4-.18-.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v.5c0 .06-.01.12-.04.18l-.91 1.83c-.03.06-.04.12-.04.18v1.24c0 .43-.17.84-.47 1.14l-.41.41a.4.4 0 0 1-.29.12h-.43c-.22 0-.4-.18-.4-.4v-2.19c0-.22-.18-.4-.4-.4h-.43a.4.4 0 0 1-.29-.12l-.53-.53c-.22-.22-.35-.53-.35-.85s.12-.62.35-.85m-3.35 5.85c0 .28-.22.5-.5.5c-.27 0-.5-.22-.48-.47v-1.37a.3.3 0 0 0-.09-.22l-.38-.38c-.34-.34-.53-.81-.53-1.29v-1.12a.3.3 0 0 0-.09-.22l-1.25-1.25c-.134-.134-.351-.283-.586-.444c-.499-.343-1.074-.737-1.074-1.146v-2.36c0-.192.165-.367.286-.495c.124-.133.202-.215.004-.215c-.19 0-.37.08-.5.21l-1.26 1.26c-.2.19-.53.06-.53-.22v-.13c0-.08.03-.16.09-.22l.24-.24c.42-.42.66-1 .66-1.6v-.37c0-.38.31-.69.69-.69h.62c.38 0 .69.31.69.69c0 .17.14.31.31.31h.1c.46 0 .9-.19 1.21-.53l.62-.67c.48-.51 1.15-.8 1.85-.8h1.6c.72 0 1.3.58 1.3 1.3c0 .45-.18.88-.5 1.2l-.41.41a.3.3 0 0 0-.09.22v.37c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.19c0 .17-.14.31-.31.31h-.78c-.18 0-.32.14-.31.32l.02.35c.01.17-.13.32-.31.32c-.17 0-.31.14-.31.31v.19c0 .28.22.5.5.5s.5-.22.5-.5s.22-.5.5-.5s.5.22.5.5v.37c0 .08.03.16.09.22l.69.69c.12.12.12.32 0 .44l-.29.29c-.31.31-.74.49-1.18.49c-.17 0-.31.14-.31.31v.19c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.19c0-.17-.14-.31-.31-.31h-.38c-.17 0-.31.14-.31.31v.56c0 .08.03.16.09.22l1.82 1.82c.06.06.14.09.22.09h.44c.28 0 .56.06.81.19l1.17.58c.28.13.45.41.45.72c0 .3-.18.58-.45.72l-.61.31c-.58.29-.94.87-.94 1.52zm11-3.98c0 .31.11.61.3.85l.21.25c.3.37.79.54 1.25.43a.31.31 0 0 0 .24-.3v-.37c0-.16.12-.29.27-.31l.15-.02c.31-.03.58.21.58.52c0 .24.17.46.41.51l.22.05c.19.04.37-.1.37-.3v-.84c0-.55-.45-1-1-1h-.86c-.09 0-.17.04-.23.1l-.37.41a.31.31 0 0 1-.54-.21c0-.17-.14-.31-.31-.31h-.38c-.17.02-.31.16-.31.33zm1.5 4.49c-.28 0-.5-.22-.5-.5v-.67c0-.46.37-.84.83-.84h1.61c.31 0 .56.25.56.56v.95c0 .28-.22.5-.5.5z"/></g></svg>',"framed-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="m2 2l14 3l14-3v28l-14-3l-14 3z"/><path fill="#f3ad61" d="M30 2H2l14 14z"/><path fill="#b97028" d="M30 30H2l14-14z"/><path fill="#aeddff" d="M5 5h22v4.164L18 22L5 19v-3l1.5-3L5 10z"/><path fill="#fff" d="M24.667 10.114A3 3 0 0 1 27 9v6a3 3 0 0 1-2.009-.772a3 3 0 1 1-2.73-3.217a2 2 0 0 1 2.406-.897M5 16v-6c.981 0 1.853.471 2.4 1.2A1 1 0 0 1 9 12a2 2 0 1 1 0 4z"/><path fill="#14a085" d="M8 17.5L5 19v8h22V12c-1.5 0-2.5.5-4 2l-4.5 4.5c-1 1-1.5 1.5-2.5 1l-4-2c-1.6-.8-3.167-.5-4 0"/><path fill="#96c34a" d="M27 26.812V27H5v-.189c2.564-2.579 6.538-4.311 11-4.311s8.436 1.732 11 4.311"/><path fill="#ff822d" d="M19.056 10.185a.75.75 0 0 0 0-1.37a.75.75 0 0 0-.685-1.186a.75.75 0 0 0-1.186-.685a.75.75 0 0 0-1.37 0a.75.75 0 0 0-1.186.685a.75.75 0 0 0-.685 1.186a.75.75 0 0 0 0 1.37a.75.75 0 0 0 .685 1.186a.75.75 0 0 0 1.186.685a.75.75 0 0 0 1.37 0a.75.75 0 0 0 1.186-.685a.75.75 0 0 0 .685-1.186"/><path fill="#f9c23c" d="M18.705 9.5a2.205 2.205 0 1 1-4.41 0a2.205 2.205 0 0 1 4.41 0"/></g></svg>',package:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" d="M15.35 2.143c.32-.19.71-.19 1.02 0l10.92 6.64c.26.16.42.45.42.75L15.86 17.5L4 9.632v-.1c0-.3.16-.59.42-.74z"/><path fill="#ffce7c" d="m15.856 16.246l11.36-6.9a.328.328 0 0 1 .496.282v12.34a1.73 1.73 0 0 1-.83 1.48l-10.64 6.46a.3.3 0 0 1-.087.03a.3.3 0 0 1-.083.011a.9.9 0 0 1-.682-.083h.006L13 19z"/><path fill="#e19747" d="M15.86 29.622v-13.37l-11.35-6.9a.331.331 0 0 0-.51.28v12.34c0 .61.32 1.17.83 1.48l10.57 6.42a.3.3 0 0 0 .46-.25"/><path fill="#d3d3d3" d="M14.5 26.782v-1.96c0-.23-.12-.44-.31-.56l-2.8-1.69c-.19-.11-.43.02-.43.24v1.96c0 .23.12.44.31.56l2.8 1.69c.19.11.43-.02.43-.24"/><path fill="#8c5543" d="M11.76 16.553v-4.56l-3.28-.22v3.16c0 .1.05.2.14.26l2.68 1.63c.2.11.46-.03.46-.27"/><path fill="#a56953" d="m20.34 4.563l-11.86 7.21l3.28 2l11.86-7.2z"/></g></svg>',skull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M16.028 1c-8.282 0-15 6.715-15 14.995c0 2.773.762 4.743 2.286 6.033c1.262 1.067 2.919 1.554 4.714 1.785V28a3.005 3.005 0 0 0 3 2.999a3 3 0 0 0 2.5-1.345a3 3 0 0 0 2.5 1.345a3 3 0 0 0 2.5-1.345a3 3 0 0 0 2.5 1.345c1.652 0 3-1.347 3-3V23.81c1.794-.234 3.451-.72 4.713-1.787c1.524-1.288 2.287-3.256 2.287-6.029c0-8.28-6.718-14.995-15-14.995"/><path fill="#fff" d="M16.028 2c-7.73 0-14 6.268-14 13.995c0 5.178 2.82 6.568 7 6.918V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-5.087c4.18-.36 7-1.74 7-6.918c0-7.727-6.27-13.995-14-13.995"/><path fill="#402a32" d="M14 16.762C14 19.392 11.987 20 9.5 20S5 19.393 5 16.762S7.013 12 9.5 12s4.5 2.13 4.5 4.762m13 0C27 19.392 24.987 20 22.5 20s-4.5-.607-4.5-3.238S20.013 12 22.5 12s4.5 2.13 4.5 4.762M15.01 21.97h1.97c.5 0 .85-.49.68-.96l-.37-1.08c-.19-.56-.71-.93-1.3-.93s-1.12.38-1.31.93l-.36 1.08c-.16.47.19.96.69.96"/></g></svg>',"party-popper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="m5.05 29.9l1.472-.394l.394-.855l2.55.067l2.653-.71l.598-.926l2.482.102l2.591-.694c1.8-.48 2.41-2.74 1.09-4.06L9.56 13.1c-1.32-1.32-3.58-.72-4.06 1.09l-.773 2.887l.108 2.344l-.88.542l-.79 2.951l.132 2.248l-.863.484l-.344 1.284c-.49 1.8 1.16 3.45 2.96 2.97"/><path fill="#3f5fff" d="M7.8 25.053c-1.48-1.383-2.74-3.047-3.854-5.058l.778-2.904c1.278 2.798 2.716 4.889 4.441 6.5c1.663 1.553 3.633 2.697 6.07 3.583l-3.128.837c-1.602-.797-3.027-1.764-4.306-2.958m-3.514 2.833a12 12 0 0 1-1.855-2.234l.745-2.783c.703 1.49 1.49 2.634 2.476 3.557c.984.92 2.208 1.659 3.838 2.285l-2.989.8a12 12 0 0 1-2.215-1.625"/><path fill="#6d4534" d="M19.11 25.69c1.4-1.4-.34-5.4-3.88-8.94S7.7 11.47 6.3 12.87s.34 5.4 3.88 8.94s7.54 5.27 8.93 3.88"/><path fill="#f70a8d" d="M11.61 7.27a9.73 9.73 0 0 1 .72 7.49a9.7 9.7 0 0 1-3.81 5.2c-.52-.65-.97-1.3-1.35-1.93a7.4 7.4 0 0 0 2.91-3.96c.59-1.91.4-3.93-.54-5.69c-.31-.58-.09-1.29.48-1.59c.58-.31 1.29-.09 1.59.48m10.54 9.443a6.65 6.65 0 0 1 6.454-1.01a1.048 1.048 0 0 0 .732-1.965a8.74 8.74 0 0 0-8.486 1.33a1.048 1.048 0 1 0 1.3 1.645M6.01 9.69a1.16 1.16 0 1 0 0-2.32a1.16 1.16 0 0 0 0 2.32m20.12-1.16a1.16 1.16 0 1 1-2.32 0a1.16 1.16 0 0 1 2.32 0"/><path fill="#f9c23c" d="M12.49 3.96a.96.96 0 1 1-1.92 0a.96.96 0 0 1 1.92 0m12.99 20.45a.97.97 0 1 1-1.94 0a.97.97 0 0 1 1.94 0"/><path fill="#00a6ed" d="M21.63 4.02a.95.95 0 0 0-.58-.24a.99.99 0 0 0-1.04.92c-.07 1.1-.83 3.09-1.12 3.76q-.001.008-.005.015q-.005.008-.005.015q-.08.198-.172.39a2.8 2.8 0 0 0-1.358-.92l-.03-.01c-1.35-.45-2.82.28-3.27 1.64c-.22.66-.17 1.36.14 1.98s.84 1.08 1.5 1.3q.106.036.214.045q.76.206 1.465.015a6 6 0 0 1-.099.41c-.14.52.17 1.06.69 1.2a.98.98 0 0 0 1.2-.69a8.2 8.2 0 0 0 .293-2.482q.78-.98 1.247-2.148l.015-.036c.185-.448 1.158-2.802 1.255-4.374c.01-.31-.12-.6-.34-.79m-4.88 5.79c.275.092.558.246.678.876c-.492.457-.808.407-1.088.314a1 1 0 0 0-.102-.028a.6.6 0 0 1-.288-.292a.58.58 0 0 1-.03-.48c.11-.33.47-.51.8-.4zm1.52 8.35c3.41-.95 6.98-.52 10.06 1.22c.57.33.77 1.04.46 1.6c-.32.57-1.04.77-1.61.45a10.85 10.85 0 0 0-8.27-1c-2.31.64-4.29 2-5.72 3.88c-.61-.42-1.24-.9-1.86-1.44c1.73-2.27 4.14-3.93 6.94-4.71m-1.646-1.175a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0"/></g></svg>',"money-bag":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#f3c07b" d="M17.44 3.385c.33.38.89.45 1.3.16c.8-.57 1.84.29 1.43 1.17l-2.42 2.77h-3.87l-2.44-2.8c-.41-.89.63-1.75 1.43-1.18l.07.05c.41.29.97.21 1.29-.17l.87-1.04a.955.955 0 0 1 1.47 0zM4 21.225c0-6.54 5.3-11.84 11.84-11.84s11.84 5.3 11.83 11.84c0 4.83-3.92 8.75-8.75 8.75h-6.17c-4.83 0-8.75-3.92-8.75-8.75"/><path fill="#8c5543" d="M14.12 7.465h3.44c.61 0 1.11.5 1.11 1.11s-.5 1.11-1.11 1.11h-3.44c-.61 0-1.11-.5-1.11-1.11s.5-1.11 1.11-1.11m1.72 11.88h.07c1.5.04 2.7 1.26 2.7 2.76c0 1.28-.87 2.35-2.05 2.67v1.12c0 .4-.32.72-.72.72s-.72-.32-.72-.72v-1.12a2.77 2.77 0 0 1-2.05-2.67c0-.4.32-.72.72-.72s.72.32.72.72c0 .74.59 1.33 1.32 1.33s1.33-.6 1.33-1.33s-.6-1.33-1.33-1.33h-.07a2.765 2.765 0 0 1-2.69-2.76c0-1.28.87-2.35 2.05-2.67v-1.12c0-.4.32-.72.72-.72s.72.32.72.72v1.12c1.18.32 2.05 1.39 2.05 2.67c0 .4-.32.72-.72.72s-.72-.32-.72-.72c0-.73-.6-1.33-1.33-1.33s-1.33.6-1.33 1.33s.6 1.33 1.33 1.33"/></g></svg>',"check-mark-button":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00d26a" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path fill="#f4f4f4" d="M13.242 23c-.383 0-.766-.143-1.059-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.685 4.601L23.443 9.431a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.058a1.5 1.5 0 0 1-1.059.431"/></g></svg>',"cross-mark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f92f60" d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z"/></svg>',"artist-palette":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fbb8ab" d="M21.993 5.854c-6.707-3.42-14.656-2.1-18.279 3.883S2.398 23.68 8.87 27.517c3.18 1.886 8.312 3.811 10.398 1.244c2.044-2.516-.972-4.11-.268-5.502c1.133-2.24 6.2.699 9.515-2.922c3.734-4.082.009-11.151-6.522-14.483M24 19c-1.745 0-3-1.273-3-3s1.255-3 3-3s3 1.273 3 3s-1.255 3-3 3"/><path fill="#8d65c5" d="M14.25 11a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#f70a8d" d="M8.25 15a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#00d26a" d="M8.25 22a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#3f5fff" d="M13.75 26.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/></g></svg>',"four-leaf-clover":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#008463" d="M20.663 29.841a.875.875 0 0 0 .799-1.557zm.799-1.557c-2.708-1.39-3.811-3.233-4.277-5.269c-.49-2.143-.279-4.44-.279-6.89h-1.75c0 2.225-.226 4.881.323 7.28c.573 2.506 1.986 4.795 5.184 6.436z"/><path fill="#00d26a" d="M16.025 9.237c-.095-2.481-.513-5.067-2.134-6.425c-2.253-1.886-5.672.141-5.188 2.922c-3.14-.328-5.257 3.91-2.094 5.907c1.504.948 3.044 1.246 4.85 1.327c-1.827.102-3.381.424-4.9 1.382c-3.162 1.996-1.046 6.234 2.095 5.906c-.485 2.781 2.843 4.693 5.187 2.922c1.447-1.094 1.97-2.979 2.138-4.965c.188 1.986.733 3.871 2.18 4.965c2.344 1.771 5.671-.14 5.187-2.922c3.14.328 5.257-3.91 2.094-5.906c-1.506-.95-3.074-1.275-4.905-1.38c1.83-.077 3.385-.37 4.905-1.33c3.163-1.995 1.047-6.234-2.094-5.906c.484-2.78-2.935-4.808-5.187-2.922c-1.621 1.358-2.04 3.944-2.134 6.425"/></g></svg>',"shooting-star":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M26.33 30H5.67C3.64 30 2 28.36 2 26.33V5.67C2 3.64 3.64 2 5.67 2h13.646l5.651 2.038l3.044 2.17L30 13.63v12.7c0 2.03-1.64 3.67-3.67 3.67"/><path fill="#e1d8ec" d="M8.99 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M5.49 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m19.5 11.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-1 4a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M4.49 25a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m23.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"/><path fill="#a38439" d="M30 5.67C30 3.64 28.36 2 26.33 2h-7.04L9.25 11.6L19.64 24L30 13.64z"/><path fill="#fcd53f" d="m11.03 11.82l2.08 1.87c.39.35.92.48 1.43.35l2.72-.69c1.23-.31 2.3.89 1.84 2.08l-1.09 2.82c-.18.46-.13.98.14 1.4l1.61 2.55c.7 1.1-.19 2.52-1.48 2.38l-2.65-.28a1.56 1.56 0 0 0-1.39.59l-1.64 2.1c-.8 1.03-2.43.68-2.74-.59l-.72-2.93a1.58 1.58 0 0 0-.91-1.07l-2.79-1.17c-1.17-.49-1.3-2.1-.22-2.77l2.39-1.48c.44-.27.72-.75.74-1.27l.1-2.79c.03-1.32 1.59-1.98 2.58-1.1"/></g></svg>',"lady-beetle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#212121" d="M13.57 1.75a.5.5 0 0 0-.865.5l1.429 2.472a6.96 6.96 0 0 0-5.08 6.22L7.827 9.71c-.21-.21-.33-.49-.33-.79v-2a.749.749 0 1 0-1.5 0v2c0 .7.27 1.36.77 1.86l2.45 2.45q.035.031.07.059a6.96 6.96 0 0 0 5.71 5.031v11.1c.33.03.66.05 1 .05s.67-.02 1-.05v-11.1a6.96 6.96 0 0 0 5.706-5.014a1 1 0 0 0 .075-.066l2.45-2.45c.5-.5.77-1.16.77-1.86v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 .31-.12.59-.33.8l-1.226 1.226a6.96 6.96 0 0 0-5.245-6.277L19.1 2.25a.5.5 0 1 0-.865-.5l-1.59 2.75a7 7 0 0 0-1.474.019zm15.148 14.41c.15.15.34.22.53.22s.38-.08.53-.22c.29-.29.29-.77 0-1.06l-.67-.67c-.62-.62-1.44-.96-2.32-.96h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.75c.47 0 .92.18 1.26.52zm-1.47 13.28c-.41 0-.75-.34-.75-.75V26.6c0-.62-.24-1.2-.68-1.64l-2.56-2.56a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.72.72 1.12 1.68 1.12 2.7v2.09c0 .41-.34.75-.75.75m-21.75-.77c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.09c0-1.02.4-1.98 1.12-2.7l2.56-2.56c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.56 2.56a2.3 2.3 0 0 0-.68 1.64zm-2.22-12.53c-.15.15-.34.22-.53.22s-.38-.08-.53-.22a.754.754 0 0 1 0-1.06l.67-.67c.62-.62 1.44-.96 2.32-.96h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75c-.47 0-.92.18-1.26.52z"/><path fill="#f8312f" d="M15.5 9.46H9.318q-.001.007-.005.01q-.005.003-.005.01c-1 .755-1.868 1.674-2.563 2.717L8 15l-2.992 1.71a11 11 0 0 0-.12 1.64c0 5.8 4.44 10.56 10.11 11.07q.25.023.502.036zm1 19.996q.25-.013.497-.036c5.67-.51 10.11-5.27 10.11-11.07q-.001-.823-.116-1.613L24 15l1.253-2.8a11.1 11.1 0 0 0-2.565-2.72v-.02H16.5z"/><path fill="#212121" d="M19.898 14.92a3.9 3.9 0 1 1-7.8 0a3.9 3.9 0 0 1 7.8 0m-7.01 7.15a2.64 2.64 0 1 1-5.28 0a2.64 2.64 0 0 1 5.28 0m-6.07-9.88h-.07c-.9 1.34-1.51 2.89-1.75 4.55c.47.45 1.11.72 1.82.72c1.46 0 2.64-1.18 2.64-2.64s-1.18-2.63-2.64-2.63m18.42 0c.9 1.34 1.51 2.88 1.75 4.55c-.47.45-1.11.72-1.82.73c-1.46 0-2.64-1.18-2.64-2.64s1.18-2.64 2.64-2.64zm-3.49 12.52a2.64 2.64 0 1 0 0-5.28a2.64 2.64 0 0 0 0 5.28m-4.29 1.45a1.46 1.46 0 1 1-2.92 0a1.46 1.46 0 0 1 2.92 0"/></g></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff822d" d="M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.94 2.94 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.94 2.94 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.94 2.94 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.94 2.94 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.94 2.94 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.94 2.94 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.94 2.94 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.94 2.94 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.94 2.94 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.94 2.94 0 0 0 3.249-1.055"/><path fill="#fcd53f" d="M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83s-6.72-9.29-3.83-14.294s9.29-6.72 14.294-3.83s6.72 9.29 3.83 14.294"/></g></svg>',key:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f9c23c" d="M16.248 4.526c2.662-2.69 6.868-3.384 10.038-1.34c4.436 2.851 4.894 8.935 1.396 12.47c-2.31 2.34-5.724 2.927-8.59 1.765a751 751 0 0 0-3.592 3.604a.96.96 0 0 1-.92.22c-.41-.12-.84-.12-1.3.03c-.53.18-.89.81-.87 1.1c.04.63-.06.9-.34 1.19c-.282.296-.58.327-.893.36c-.365.038-.749.078-1.147.54c-.4.47-.47 1.18-.33 1.71c.08.31-.02.68-.3.96c-.5.5-1.86 1.84-1.86 1.84c-1.03 1.03-2.65 1.34-3.91.61a3.205 3.205 0 0 1-.7-5.05l11.69-11.68a10 10 0 0 1-.285-.785c-.848-2.659-.04-5.57 1.913-7.544m7.636 1.3a1.886 1.886 0 0 0 0 2.638a1.84 1.84 0 0 0 2.611 0a1.886 1.886 0 0 0 0-2.638a1.84 1.84 0 0 0-2.611 0"/></svg>',"hourglass-done":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#83cbff" d="M25 6.4V3.9l-9-.4l-9 .4v2.5c0 4 2.8 7.3 6.5 8.2c.3.1.5.4.5.7v1.2c0 .3-.2.6-.5.6C9.8 18 7 21.3 7 25.3V28l9 1l9-1v-2.7c0-4-2.8-7.3-6.5-8.2c-.3-.1-.5-.3-.5-.6v-1.2c0-.3.2-.6.5-.6c3.7-1 6.5-4.3 6.5-8.3"/><path fill="#9b9b9b" d="M7 4h18c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1m0 26h18c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1"/><path fill="#ffb02e" d="M17 19.4v-4.3c0-.7.5-1.2 1.1-1.4c1.7-.4 3.2-1.4 4.3-2.7c.7-.8.1-2-.9-2h-11c-1 0-1.6 1.2-.9 2c1.1 1.3 2.6 2.2 4.3 2.7c.7.2 1.1.7 1.1 1.4V19c0 .7-.3 1-.6 1.1c-3.7.7-6.4 3.5-6.4 6.8V28h16v-1.1c0-3.3-2.7-6.1-6.4-6.8c-.3 0-.6-.3-.6-.7"/><path fill="#fff" d="M21.5 5.8c0-.5.4-.9.9-.9c.6.1 1 .5.9.9c-.1 1.6-.5 3-1.3 4.2c-.8 1.4-2 2.4-3.4 2.9c-.5.2-1 0-1.2-.5s0-1 .5-1.2c2.4-.9 3.4-3.5 3.6-5.4m0 20.1c0 .5.4.9.9.9c.6 0 1-.5.9-.9c-.1-1.6-.5-3-1.3-4.2c-.8-1.4-2-2.4-3.4-2.9c-.5-.2-1 0-1.2.5s0 1 .5 1.2c2.4.9 3.4 3.5 3.6 5.4"/></g></svg>',construction:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M8 20H6v10h2zm18 0h-2v10h2z"/><path fill="#fcd53f" d="m3 12l4-4h5.52l1.98 1l2.96-1h5.06L24 9l3.48-1H28a1 1 0 0 1 1 1v2.52l-.5 2.98l.5 1.98V20a1 1 0 0 1-1 1h-3.52L22 20.5l-2.48.5h-5.04l-1.98-1l-2.98 1H4.49L4 18.5l-1-.974z"/><path fill="#533566" d="M7.475 8H4a1 1 0 0 0-1 1v3.475zm-3 13H4a1 1 0 0 1-1-1v-2.475L12.525 8h4.95zm10 0h-4.95l13-13h4.95zm10 0h-4.95L29 11.525v4.95z"/><path fill="#f8312f" d="M7.5 6A1.5 1.5 0 0 0 6 7.5V8h3v-.5A1.5 1.5 0 0 0 7.5 6m17 0A1.5 1.5 0 0 0 23 7.5V8h3v-.5A1.5 1.5 0 0 0 24.5 6"/></g></svg>',door:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="M8 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"/><path fill="#d3883e" d="M10 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm0 12a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/><path fill="#f9c23c" d="M23.25 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>',"shopping-bags":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="M28.61 30H16.43c-.78 0-1.42-.632-1.42-1.424V15.424c0-.782.63-1.424 1.42-1.424h12.18c.78 0 1.42.632 1.42 1.424v13.162A1.42 1.42 0 0 1 28.61 30"/><path fill="#ff6723" d="M17.563 16.031a.5.5 0 0 1 .5.5v2.684c0 2.035 1.94 3.8 4.484 3.8c2.553 0 4.484-1.764 4.484-3.8V16.53a.5.5 0 0 1 1 0v2.684c0 2.721-2.522 4.8-5.484 4.8c-2.95 0-5.485-2.078-5.485-4.8V16.53a.5.5 0 0 1 .5-.5"/><path fill="#00a6ed" d="M18.13 27.966H3.73c-.95 0-1.73-.77-1.73-1.73V9.726c0-.95.77-1.73 1.73-1.73h14.4c.95 0 1.73.77 1.73 1.73v16.52c0 .95-.77 1.72-1.73 1.72"/><path fill="#0074ba" d="M11.016 2C7.746 2 5 4.375 5 7.425V10.5a.5.5 0 0 0 1 0V7.425C6 5.031 8.189 3 11.016 3s5.015 2.031 5.015 4.425V10.5a.5.5 0 0 0 1 0V7.425c0-3.05-2.746-5.425-6.015-5.425M2 14.69h17.86v2.33H2zm0 4.49h17.86v2.33H2zm17.86 4.49H2V26h17.86z"/></g></svg>',"billed-cap":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><ellipse cx="22.42" cy="7.685" fill="#6683ff" rx="1.313" ry="1.68" transform="rotate(-57.793 22.42 7.685)"/><path fill="#8bafff" fill-rule="evenodd" d="M17 7h3a10 10 0 0 1 4 .832V21H9v-6a8 8 0 0 1 8-8" clip-rule="evenodd"/><path fill="#3c378c" d="M4.5 24c-2 0-3.5-2.5-2.5-3l3.527-1c2.324.5 6.573 1.5 4.973 1.5c-2 0-3.5 2.5-6 2.5"/><path fill="#6a8cff" d="M24 7.832V21h5a1 1 0 0 0 1-1v-3c0-4.1-2.468-7.625-6-9.168"/><path fill="#526ce3" d="m2 21l7-4c7.5 0 11.516 1.61 15 4c-2 2-4 4-7 4s-5.181-1.909-7-3c-2.5-1.5-6-1.5-8-1"/></g></svg>',"top-hat":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#321b41" d="M23.5 30h-15a6.499 6.499 0 1 1 0-12.997h15A6.499 6.499 0 1 1 23.5 30"/><path fill="#533566" d="M6.809 8.44c-.096-2.528 1.048-4.448 3.545-4.448h11.318c1.556 0 3.655 1.173 3.505 4.361c-.12 2.551-.572 10.688-.782 14.438H7.61c-.25-4.02-.73-12.45-.802-14.352"/><path fill="#f8312f" d="M21.717 21.742H10.282c-1.4 0-2.418-.94-2.856-2.27v3.598c0 1.495 1.343 2.677 2.85 2.677h11.446c1.508 0 2.851-1.192 2.851-2.677v-3.537c-.438 1.33-1.456 2.21-2.856 2.21"/></g></svg>',ribbon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M15.995 9.772L7.46 5.413C4.96 4.143 2 5.953 2 8.753v7.98c0 2.8 2.96 4.62 5.46 3.34l.69-.352l-2.84 7.363c-.23.587.38 1.153.95.895l2.26-1.014c.36-.159.78 0 .94.358l.99 2.256c.25.576 1.08.556 1.31-.03l4.23-10.978l4.23 10.978c.23.586 1.06.606 1.31.03l.99-2.256c.16-.358.58-.517.94-.358l2.26 1.014c.57.258 1.18-.308.95-.895l-2.842-7.37l.702.36c2.5 1.28 5.46-.54 5.46-3.34v-7.98c0-2.8-2.96-4.61-5.46-3.34z"/><path fill="#ca0b4a" d="M14.254 6h3.492C18.993 6 20 6.998 20 8.21v8.371l4.54-2.318c2.36-1.2 5.14.36 5.43 2.91c-.28 2.55-3.06 4.12-5.43 2.91l-4.725-2.412A2.25 2.25 0 0 1 17.745 19h-3.49c-.93 0-1.726-.548-2.072-1.333L7.45 20.083c-2.36 1.21-5.15-.36-5.43-2.91c.28-2.55 3.06-4.12 5.43-2.91L12 16.586V8.21C12 6.987 13.007 6 14.254 6"/></g></svg>',sunglasses:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#635994" d="M15.32 14.34c0 3.68-2.98 6.66-6.66 6.66S2 18.02 2 14.34s2.98-3.78 6.66-3.78c2.775 0 5.153.057 6.154 1.664a4.5 4.5 0 0 1 2.394-.003c1.001-1.604 3.378-1.66 6.152-1.66c3.68 0 6.66.1 6.66 3.78S27.04 21 23.36 21a6.66 6.66 0 0 1-6.653-6.954a2.6 2.6 0 0 0-1.394.003q.007.14.007.29"/><path fill="#321b41" d="M23.35 20.08c3.03 0 5.49-2.46 5.49-5.49s-2.46-3.11-5.49-3.11s-5.49.08-5.49 3.11s2.46 5.49 5.49 5.49m-14.69 0c3.03 0 5.49-2.46 5.49-5.49s-2.46-3.043-5.49-3.043s-5.49.013-5.49 3.043s2.46 5.49 5.49 5.49"/><path fill="#d3d3d3" d="M12.4 15.6c.69-.22 1.04-1.1.77-1.95c-.27-.86-1.05-1.37-1.75-1.16c-.69.22-1.04 1.09-.77 1.95s1.05 1.37 1.75 1.16m14.77 0c.69-.22 1.04-1.1.77-1.95c-.27-.86-1.06-1.37-1.75-1.15s-1.04 1.09-.77 1.95s1.05 1.37 1.75 1.15"/></g></svg>',"santa-claus":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M21.2 2H13C9.13 2 6 5.13 6 9h16.96v4.14c.16-.03.33-.05.51-.05c1.56 0 2.82 1.26 2.82 2.82c0 1.12-.65 2.08-1.59 2.54L26.2 23h2V9c0-3.87-3.14-7-7-7"/><path fill="#fdbb11" d="M9 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0m18 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/><path fill="#ffc83d" d="m6.63 22.746l-.61-9.759A8.53 8.53 0 0 1 7.5 7.545l14.81-.236a8.44 8.44 0 0 1 1.669 5.678l-.679 9.759C23.01 25.819 20.635 28 17.74 28h-5.55c-2.895 0-5.271-2.191-5.56-5.254"/><path fill="#e6e6e6" d="M8.192 12.53c.19.24.47.37.76.37c.2 0 .4-.06.56-.19l.005-.003c.077-.054.933-.652 2.186-.497a.945.945 0 1 0 .22-1.88c-2.07-.25-3.5.83-3.56.88a.95.95 0 0 0-.17 1.32m12.03.19c.17.13.37.19.57.19c.28 0 .56-.13.75-.36a.95.95 0 0 0-.17-1.33c-.06-.05-1.49-1.13-3.56-.88a.945.945 0 1 0 .22 1.88c1.27-.16 2.14.46 2.19.5"/><path fill="#fff" d="M8.013 15.38a2.416 2.416 0 0 1 2.34-1.82c1.17 0 2.15.84 2.36 1.94c.05.25-.14.47-.39.47h-3.85c-.3 0-.53-.29-.46-.59m13.557 0a2.416 2.416 0 0 0-2.34-1.82c-1.17 0-2.15.84-2.36 1.94c-.05.25.14.47.39.47h3.85c.3 0 .53-.29.46-.59"/><path fill="#7d4533" d="M9.163 15.56c0-.85.69-1.54 1.54-1.54c.86 0 1.55.7 1.55 1.54c0 .14-.02.28-.06.41h-2.97c-.04-.13-.06-.27-.06-.41m11.247 0c0-.85-.69-1.54-1.54-1.54s-1.54.7-1.55 1.54c0 .14.02.28.06.41h2.97c.04-.13.06-.27.06-.41"/><path fill="#000" d="M10.713 14.68c.49 0 .88.39.88.88c0 .15-.04.28-.11.41h-1.55a.9.9 0 0 1-.1-.41c0-.49.39-.88.88-.88m8.157 0c-.49 0-.88.39-.88.88c0 .15.04.28.1.41h1.56c.06-.12.1-.26.1-.41c0-.49-.39-.88-.88-.88"/><path fill="#fff" d="M10.453 14.96a.27.27 0 1 1-.54 0a.27.27 0 0 1 .54 0m8.207 0a.27.27 0 1 1-.54 0a.27.27 0 0 1 .54 0"/><path fill="#d3d3d3" d="M24.438 23.69c-.162-1.1-.273-2.22-.333-3.33V8L22.59 9l-.1 10.82c-.01.67-.344 1.3-.888 1.69c-.888.62-2.246.47-2.952-.35a1.86 1.86 0 0 0-1.413-.64h-4.575c-.545 0-1.06.23-1.413.64a2.12 2.12 0 0 1-2.815.35a2.07 2.07 0 0 1-.888-1.69L7.437 9H5.922v10.56c-.05 1.38-.172 2.76-.363 4.13a5.854 5.854 0 0 0 4.005 6.41c1.554.5 3.41.89 5.409.9h.06c1.998-.01 3.854-.4 5.408-.9a5.85 5.85 0 0 0 3.996-6.41"/><path fill="#990839" d="M12 20.03v.07c0 1.71 1.39 3.1 3.1 3.1s3.1-1.39 3.1-3.1v-.07z"/><path fill="#e6e6e6" d="M21.702 20.91a1.056 1.056 0 0 0-1.441 0a.59.59 0 0 1-.767.02l-.828-.691A3.22 3.22 0 0 0 16.6 19.5h-3.2c-.757 0-1.493.262-2.065.739l-.829.69a.59.59 0 0 1-.766-.02a1.056 1.056 0 0 0-1.442 0a.935.935 0 0 0 0 1.372a2.68 2.68 0 0 0 1.84.719a2.64 2.64 0 0 0 1.718-.622l.828-.69a1.1 1.1 0 0 1 .705-.253H16.6c.265 0 .51.087.705.253l.828.69c.49.408 1.104.622 1.718.622a2.68 2.68 0 0 0 1.84-.72a.927.927 0 0 0 .01-1.37"/><path fill="#ed9200" d="m14.383 15.474l-.844 2.852c-.171.582.246 1.174.835 1.174h1.252c.589 0 1.006-.592.835-1.174l-.844-2.852a.638.638 0 0 0-1.234 0"/><path fill="#e6e6e6" d="M20.88 5.8c.38-.25.84-.39 1.34-.36c1.11.06 2.01.95 2.12 2.05c.08 1.29-.94 2.37-2.21 2.37c-.46 0-.88-.13-1.23-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-.46 0-.88-.13-1.23-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-.46 0-.88-.13-1.23-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-.46 0-.88-.14-1.22-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-.46 0-.88-.14-1.22-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-1.28 0-2.3-1.08-2.21-2.37c.08-1.1.98-1.99 2.09-2.05c.49-.03.95.11 1.33.36c.23.15.53.16.76 0c.35-.23.78-.37 1.23-.37s.87.14 1.22.37c.23.15.53.15.75 0c.35-.23.78-.37 1.23-.37s.87.14 1.2.38c.23.15.53.15.75 0c.35-.23.78-.37 1.23-.37c.46 0 .88.13 1.23.37c.23.15.53.15.75 0c.35-.23.78-.37 1.23-.37c.46 0 .88.13 1.23.37c.23.15.53.14.76-.01m8.15 18.73a2.03 2.03 0 1 1-4.06 0a2.03 2.03 0 0 1 4.06 0"/><path fill="#d67d00" d="M12.76 16.75a.375.375 0 0 0-.53.01l-.002.002l-.016.016l-.079.067a2.4 2.4 0 0 1-1.513.54a.375.375 0 0 0 0 .75a3.15 3.15 0 0 0 2.135-.84l.01-.01l.003-.003l.002-.001v-.001a.375.375 0 0 0-.01-.53m4.68 0a.375.375 0 0 0-.01.53l.002.002l.045.044q.041.039.115.1a3.15 3.15 0 0 0 1.988.709a.375.375 0 0 0 0-.75a2.4 2.4 0 0 1-1.608-.623l-.002-.003a.375.375 0 0 0-.53-.01" opacity=".5"/></g></svg>',hut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M28 30h-8.43l-3.5-5.31l-3.5 5.31H4V17h24z"/><path fill="#f3ad61" d="M29.93 17.855c0 .63-.51 1.14-1.14 1.14c-.07 0-.16-.01-.23-.02c-1.29-.13-1.4-1.01-2.9-1.01c-1.61 0-1.61 1.03-3.22 1.03s-1.61-1.03-3.22-1.03s-1.61 1.03-3.22 1.03s-1.61-1.03-3.21-1.03c-1.61 0-1.61 1.03-3.21 1.03c-1.61 0-1.61-1.03-3.21-1.03c-1.61 0-1.61 1.03-3.22 1.03h-.03c-.63-.01-1.12-.51-1.12-1.14c0-.16.03-.31.08-.45c.01-.01.02-.02.02-.04c.05-.08.11-.16.16-.23c.78-1.26 1.61-2.48 2.48-3.66c2.65-3.63 5.52-6.7 8.82-9.54c1.45-1.25 3.6-1.25 5.03.02c3.18 2.83 6.08 5.93 8.66 9.52c.87 1.2 1.7 2.44 2.49 3.71c.04.07.08.15.13.22c.03.14.06.29.06.45"/><path fill="#212121" d="M20 30h-8v-4.78c0-1.23 1.143-2.22 2.537-2.22h2.914c1.406 0 2.538 1 2.538 2.22V30z"/></g></svg>',wood:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M24 6.5H8v19c0 1.933 3.582 3.5 8 3.5s8-1.567 8-3.5z"/><path fill="#a56953" d="M16 10c4.418 0 8-1.567 8-3.5S20.418 3 16 3S8 4.567 8 6.5c0 .637.32 1.181 1 1.696c.022.017-.023-.018 0 0V14.5a.5.5 0 0 0 1 0V8.815c.027.014-.028-.014 0 0c1.467.75 3.566 1.185 6 1.185m11.354.768L24 14.12V25.5c0 .888-.755 1.698-2 2.315V23.5a.5.5 0 0 0-1-.008v-9.578a2.5 2.5 0 0 1 .732-1.768l3.5-3.5a1 1 0 0 1 1.414 0l.708.708a1 1 0 0 1 0 1.414m-23.208 8.5L8 23.12v2.38c0 1.105 1.171 2.09 3 2.732v-5.318a2.5 2.5 0 0 0-.732-1.768l-4-4a1 1 0 0 0-1.414 0l-.708.707a1 1 0 0 0 0 1.415M12 15.5a.5.5 0 0 1 1 0v4a.5.5 0 1 1-1 0z"/><path fill="#f3ad61" d="M23 6.25C23 7.769 19.866 9 16 9S9 7.769 9 6.25s3.134-2.75 7-2.75s7 1.231 7 2.75"/><path fill="#6d4534" d="M16 8c2.761 0 5-.84 5-1.875S18.761 4.25 16 4.25s-5 .84-5 1.875S13.239 8 16 8m0-1c-1.657 0-3-.448-3-1s1.343-1 3-1s3 .448 3 1s-1.343 1-3 1"/></g></svg>',ice:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" d="m14.703 11.776l14.342-5.404A1.5 1.5 0 0 1 30 7.769V23.58a2 2 0 0 1-1.311 1.878l-11.311 4.15a4 4 0 0 1-2.465.094a.937.937 0 0 0 1.087-.927v-15.06c0-.85-.514-1.618-1.297-1.939M6.19 11.1a.7.7 0 0 0-.641.242l-1.436 1.673l-.056.056l-.016.02c-.367.456-.571 1.038-.571 1.694c0 1.501 1.124 2.91 2.578 3.124c.043.008.083.012.103.014h.004l.025.003h.003l.031.006l.033.002c1.364.09 2.436-.95 2.522-2.336a3.14 3.14 0 0 0-.462-1.853l-.005-.008q-.115-.179-.22-.325l-.001-.002l-1.36-1.969l-.004-.006a.8.8 0 0 0-.526-.335m5.289 7.415c0-.858.675-1.571 1.576-1.445c.842.107 1.444.91 1.444 1.725c0 .87-.684 1.558-1.572 1.446h-.009c-.83-.12-1.439-.901-1.439-1.726M8.806 21.84c-.9-.126-1.576.587-1.576 1.445c0 .825.61 1.607 1.44 1.725c.903.13 1.58-.585 1.58-1.445c0-.827-.604-1.618-1.444-1.725"/><path fill="#0074ba" d="M2 7.762a1.5 1.5 0 0 1 .94-1.392a.63.63 0 0 0-.077 1.063l8.003 1.298l3.757 3.014c.828.3 1.377 1.09 1.377 1.97v15.06a.934.934 0 0 1-1.257.88l-11.575-4.24A1.77 1.77 0 0 1 2 23.745zm3.93 3.903l-1.45 1.69l-.05.05c-.29.36-.46.83-.46 1.38c0 1.28.97 2.46 2.16 2.63q.038.007.075.01q.038.003.075.01c1.06.07 1.92-.73 1.99-1.87c.04-.56-.11-1.1-.39-1.56c-.07-.11-.14-.21-.21-.31l-1.36-1.97a.3.3 0 0 0-.19-.13a.2.2 0 0 0-.19.07m1.8 11.62c0 .6.45 1.15 1.01 1.23s1.01-.35 1.01-.95c0-.61-.45-1.16-1.01-1.23c-.56-.08-1.01.35-1.01.95m5.26-5.72c-.56-.08-1.01.35-1.01.95s.45 1.15 1.01 1.23c.56.07 1.01-.35 1.01-.95s-.45-1.16-1.01-1.23"/><path fill="#83cbff" d="m17.28 11.775l11.7-4.26c.55-.2.55-.98 0-1.17l-11.7-4.26c-.83-.3-1.74-.3-2.57 0L3.02 6.335c-.55.2-.55.98 0 1.18l11.69 4.26c.83.3 1.74.3 2.57 0m3.35 1.64c.07-.01.13.01.18.07l1.33 1.55c.01.01.02.02.02.03l.01.02c.27.33.42.76.42 1.26c0 1.18-.89 2.26-1.98 2.41c-.05.01-.09.01-.14.01c-.97.06-1.76-.67-1.83-1.71c-.03-.51.1-1.01.35-1.43c.06-.1.12-.19.19-.28l1.25-1.81c.07-.07.14-.11.2-.12m6.11 6.34c.56-.08 1.01.35 1.01.95s-.45 1.15-1.01 1.23s-1.01-.35-1.01-.95s.45-1.15 1.01-1.23"/></g></svg>',"jack-o-lantern":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M13.743 8h3.507c.407 0 .75-.272.75-.614V4.612c0-.535-.793-.816-1.265-.439l-3.506 2.783c-.483.377-.15 1.044.514 1.044"/><path fill="#ff8257" d="M21.438 29h-10.87c-5.718 0-9.83-5.574-8.215-11.137l1.344-4.628C4.77 9.543 8.11 7 11.91 7h8.234c3.83 0 7.2 2.583 8.243 6.337l1.284 4.627C31.216 23.508 27.115 29 21.438 29"/><path fill="#321b41" d="M9.413 15h2.172c.353 0 .545-.434.315-.715l-1.113-1.132a.402.402 0 0 0-.637.008l-1.06 1.132c-.214.281-.023.707.323.707m11 0h2.172c.353 0 .545-.434.315-.715l-1.113-1.132a.402.402 0 0 0-.637.008l-1.06 1.132c-.214.281-.023.707.323.707m.97 2H24c0 3.366-2.548 6.194-5.997 7c-.397-.51-1.12-1.226-2.043-1.226c-1.09 0-1.754.689-2.091 1.19C10.489 23.123 8 20.321 8 17h2.607c.417.501 1.11 1.146 1.983 1.146c1.06 0 1.715-.645 2.062-1.146h2.686c.417.501 1.11 1.146 1.983 1.146c1.06 0 1.715-.645 2.062-1.146"/></g></svg>',"game-die":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3eef8" d="M13.883 2.451L4.494 6.504C3.532 6.934 3 8.024 3 9.127v13.041c0 1.514.546 2.81 1.857 3.39l9.286 4.044a4.53 4.53 0 0 0 3.714 0l9.286-5.047c1.31-.582 1.857-.873 1.857-2.387V9.127c0-1.103-.43-2.192-1.393-2.623l-9.49-4.053a5.2 5.2 0 0 0-4.234 0"/><path fill="#b4acbc" d="M4.857 25.559C3.547 24.977 3 23.682 3 22.168h26c0 1.514-.546 1.87-1.857 2.452l-9.286 4.981a4.53 4.53 0 0 1-3.714 0z"/><path fill="#b4acbc" d="M3 9.234a1.5 1.5 0 0 1 2.117-1.367l9.118 4.119A3 3 0 0 1 16 14.72v13.395a1.5 1.5 0 0 1-2.102 1.374l-9.701-4.254A2 2 0 0 1 3 23.404z"/><path fill="#e1d8ec" d="M29 9.254a1.5 1.5 0 0 0-2.117-1.367l-9.118 4.118A3 3 0 0 0 16 14.74v13.396a1.5 1.5 0 0 0 2.102 1.373l9.701-4.253A2 2 0 0 0 29 23.423z"/><path fill="#433b6b" d="M6.685 15.996c.82-.065 1.407-1.018 1.303-2.119c-.103-1.109-.854-1.946-1.673-1.873c-.82.066-1.407 1.019-1.303 2.12c.103 1.1.854 1.938 1.673 1.872m20.303-1.873c.104-1.1-.483-2.054-1.302-2.12c-.82-.065-1.57.773-1.674 1.873s.483 2.054 1.302 2.12c.82.073 1.57-.764 1.674-1.873m-13 9.754c.104 1.1-.483 2.054-1.303 2.12c-.82.065-1.57-.773-1.673-1.873c-.104-1.101.483-2.054 1.303-2.12c.82-.073 1.57.764 1.673 1.873m8.698-6.873c.82.065 1.406 1.018 1.302 2.119c-.103 1.109-.854 1.946-1.674 1.872c-.82-.065-1.406-1.018-1.302-2.119c.103-1.1.854-1.938 1.674-1.872m-1.698 7.119c.104-1.1-.483-2.054-1.302-2.12c-.82-.065-1.57.773-1.674 1.873s.483 2.054 1.302 2.12c.82.073 1.57-.764 1.674-1.873"/><path fill="#f8312f" d="M16 7.5c1.657 0 3-.448 3-1s-1.343-1-3-1s-3 .448-3 1s1.343 1 3 1"/></g></svg>',mushroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ffce7c" d="M10.992 25.309L13.5 18.5H18l2.831 6.724A2 2 0 0 1 18.988 28h-6.12a2 2 0 0 1-1.876-2.691"/><path fill="#f8312f" d="M4 16c0-2.27.63-4.394 1.727-6.205L9.5 8l3.258-3.557A12 12 0 0 1 16 4c1.626 0 3.176.323 4.59.91l2.91 5.59l4.455 4.456Q28 15.472 28 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path fill="#fbb8ab" d="M12.79 4.434q.079.436.08.896c0 2.74-2.23 4.96-4.97 4.97a4.9 4.9 0 0 1-2.173-.506a12.03 12.03 0 0 1 7.062-5.36m7.784.468A6.6 6.6 0 0 0 19.43 8.63a6.632 6.632 0 0 0 8.528 6.353c-.384-4.567-3.324-8.406-7.385-10.081M14.94 17.04a2.74 2.74 0 1 0 0-5.48a2.74 2.74 0 0 0 0 5.48"/></g></svg>',"evergreen-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.157 30h-6.311c-.536 0-.943-.608-.826-1.243L12.535 26h6.933l.514 2.757c.108.635-.289 1.243-.825 1.243"/><path fill="#44911b" d="m14.877 6.714l-2.699 5.127c-.504.952.12 2.159 1.128 2.159h.602C11.747 14 10 15.592 10 17.561c0 .8.71 1.439 1.579 1.439h.144C9.116 19 7 21.227 7 23.971C7 25.649 8.294 27 9.878 27h12.244C23.716 27 25 25.639 25 23.971C25.01 21.227 22.894 19 20.277 19h.144C21.3 19 22 18.352 22 17.561C22 15.601 20.253 14 18.092 14h.602c1.007 0 1.632-1.196 1.128-2.16l-2.7-5.126c-.493-.952-1.741-.952-2.245 0"/></g></svg>',"deciduous-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M18 22.24h-4v7.78h4z"/><path fill="#44911b" d="M25.9 15.2c.38-.76.6-1.62.6-2.53c0-2.91-2.19-5.3-5-5.63V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v.04a5.662 5.662 0 0 0-4.4 8.16c-1.26.94-2.1 2.43-2.1 4.12c0 2.84 2.32 5.16 5.16 5.16h12.68c2.84 0 5.16-2.32 5.16-5.16c0-1.69-.84-3.18-2.1-4.12"/></g></svg>',tulip:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M16.83 20.16h-2v8.253c-.748-1.858-2.56-3.183-4.68-3.183H8.08a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.793v-.007a.3.3 0 0 0 .12.027h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.919.017-3.59 1.365-4.1 3.197z"/><path fill="#f70a8d" d="M20.83 19.26H10.81v-6.02c0-3.71 1.48-7.26 4.1-9.87l.01-.01c.48-.48 1.26-.48 1.74 0c2.67 2.62 4.17 6.21 4.17 9.95z"/><path fill="#ff6dc6" d="M24.64 4.11c0-.58-.37-1.08-.83-1.09c-3.27-.02-6.08 4.77-7.32 9.46c-.22.83-1.12.81-1.34-.02c-1.23-4.67-4.03-9.44-7.29-9.44c-.47 0-.85.49-.85 1.09v6.21L7 10.31c0 .39.02.78.05 1.16c.08 1.1.29 3.08.62 4.05c1.32 4.09 4.47 6.03 8.16 6.03c3.41 0 6.37-1.54 7.83-5.15c.63-1.46.99-4.06.99-5.84z"/></g></svg>',sunflower:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#44911b" d="M17.107 19.75h-2v8.228c-.755-1.844-2.56-3.158-4.67-3.158h-2.07a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.783v-.006a.3.3 0 0 0 .12.026h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.92.017-3.59 1.365-4.1 3.197z"/><path fill="#fcd53f" d="M23.847 11.78c1.91.53 3.23 1.6 3.1 2.67s-1.66 1.78-3.63 1.84c1.32 1.48 1.85 3.1 1.15 3.93c-.69.82-2.36.58-4.04-.45c.3 1.96-.15 3.61-1.18 3.92s-2.3-.8-3.15-2.58c-.82 1.81-2.08 2.95-3.12 2.65c-1.03-.3-1.5-1.93-1.24-3.88c-1.67 1.07-3.35 1.34-4.06.52s-.21-2.43 1.07-3.93c-1.99-.02-3.54-.71-3.69-1.78s1.15-2.15 3.04-2.71c-1.66-1.09-2.58-2.52-2.13-3.49c.47-1 2.21-1.2 4.15-.58c-.83-1.85-.84-3.61.09-4.19c.89-.56 2.38.15 3.64 1.6c.34-1.89 1.25-3.25 2.31-3.22c.98.01 1.8 1.21 2.13 2.91c1.19-1.27 2.53-1.86 3.37-1.35c.92.55.95 2.24.19 4.06c1.89-.6 3.58-.42 4.05.55c.47.96-.42 2.4-2.05 3.51"/><path fill="#8c5543" d="M16 19a5.861 5.861 0 1 0 0-11.722A5.861 5.861 0 0 0 16 19"/><path fill="#6d4534" d="m21.118 10.281l-.8.8l1.117 1.117l.295-.295a5.9 5.9 0 0 1 .071 2.076l-.366-.366l-1.114 1.114l.96.958a5.9 5.9 0 0 1-2.462 2.594l-1.027-1.023l-1.106 1.106l.515.515a5.9 5.9 0 0 1-2.437-.008l.508-.507l-1.117-1.117l-1.013 1.012a5.9 5.9 0 0 1-1.916-1.717l1.11 1.11l1.112-1.112l-1.112-1.112l-1.112 1.112a6 6 0 0 1-.523-.891l.928-.928l-1.112-1.112l-.325.325a5.9 5.9 0 0 1 .07-1.994l.255.255l1.096-1.095l-.762-.76q.245-.45.564-.85l.905.902l1.12-1.12l-.88-.877a6 6 0 0 1 .885-.53l.702.7l1.12-1.12l-.107-.105a6 6 0 0 1 1.633-.007l-.113.113l1.112 1.112l.716-.716q.47.224.89.523l-.899.9l1.112 1.111l.935-.935q.322.395.572.842m-.392 6.264l-1.113-1.111l-1.114 1.115l1.114 1.11zM11.224 12.9l1.112 1.112l1.098-1.099l-1.113-1.11zm1.804-1.804l1.114 1.11l1.118-1.118l-1.112-1.111zm1.827-1.826l1.112 1.11l1.118-1.117l-1.112-1.112zm1.82 1.817l1.113 1.11l1.116-1.115l-1.112-1.112zm-1.825 1.825l1.114 1.11l1.116-1.117l-1.112-1.11zm-1.807 1.807l1.112 1.112l1.102-1.102l-1.114-1.11zm7.685-1.814L19.61 11.79l-1.116 1.115l1.118 1.116zm-1.822 1.822l-1.118-1.116l-1.116 1.117l1.119 1.115zm-1.822 1.823l-1.12-1.115l-1.102 1.103l1.117 1.117z"/></g></svg>',blossom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M17.096 19.84h-2v8.409c-.708-1.939-2.562-3.339-4.74-3.339h-2.07a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.808a.3.3 0 0 0 .105.02h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.85.016-3.468 1.27-4.04 3z"/><path fill="#d3d3d3" d="M16.055 2c-2.35 0-4.19 2.02-3.97 4.36l.18 1.91l-1.98-.68a3.98 3.98 0 0 0-5.17 2.82c-.55 2.25.92 4.49 3.21 4.88l1.78.3l-1.46 1.8a3.984 3.984 0 0 0 .88 5.83c1.92 1.29 4.54.67 5.69-1.34l.91-1.45l.74 1.45a3.995 3.995 0 0 0 5.69 1.34c1.95-1.31 2.36-4.01.88-5.83l-1.44-1.78l1.9-.32a3.993 3.993 0 0 0 3.21-4.88a3.99 3.99 0 0 0-5.18-2.82l-2 .69l.14-2.01c.13-2.3-1.7-4.27-4.01-4.27"/><path fill="#ffb02e" d="M15.996 17.36a3.78 3.78 0 1 0 0-7.56a3.78 3.78 0 0 0 0 7.56"/></g></svg>',"spiral-shell":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="m6.773 3.614l-.379.36a2.43 2.43 0 0 0-2.065-.708l-1.307.76v4.102l10.014 20.18L26 29.897l.848-.002c3.951-3.77 4.143-10.032.375-13.99l-1.812-1.9a7.5 7.5 0 0 0-2.048-4.57a7.48 7.48 0 0 0-6.188-2.277l-1.622-1.703a3.477 3.477 0 0 0-4.791-.265l.291-.305l-1.14-1.2c-.84-.88-2.25-.92-3.14-.07"/><path fill="#212121" d="m22.781 25.6l2.662 2.794c3.2-3.05 3.32-8.11.27-11.3l-.524-.55a7.46 7.46 0 0 1-2.086 3.52a4.06 4.06 0 0 0-.322 5.537"/><path fill="#9b9b9b" d="M4.375 9c-.276-1.474 2.256-4.406 3.862-5.999a2.2 2.2 0 0 0-1.464.613L3.981 6.27c-.848-1.033-.167-2.355.392-3.009A2.44 2.44 0 0 0 2.86 7.337l-.166.157c-.89.85-.93 2.26-.08 3.15l1.187 1.25a3.51 3.51 0 0 0 .293 4.48L5.88 18.25a9.802 9.802 0 0 0 9.644 11.664l10.688-.019c-5.3-.698-13.53-3.33-14.586-8.895c-1.367-7.207 3.566-11.944 9.887-12.982a7.54 7.54 0 0 0-4.77-.804L7.257 15.43c-.517-.571-1.08-1.544-1.006-2.805c.1-1.7 4.79-6.207 7.124-8.25a3.45 3.45 0 0 0-2.76.95l-5.573 5.31c-.262-.326-.518-.844-.666-1.635"/></g></svg>',"tropical-fish":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#635994" d="M3.39 18.945a1.055 1.055 0 1 0-.671 0a1.055 1.055 0 1 0 .672 0"/><path fill="#f9c23c" d="M23 7h-8.625v23H23a3 3 0 0 0 3-3v-8.058c.002 2.404 1.438 4.152 2.656 4.152c.975 0 1.282-.688 1.313-1.032V16.75c0-1.425-.313-1.656-.875-1.656c-1.995 0-2.983 2.013-3.094 3.363V10a3 3 0 0 0-3-3"/><path fill="#00a6ed" d="M14.5 30C20.851 30 26 24.851 26 18.5S20.851 7 14.5 7a11.46 11.46 0 0 0-7.8 3.05l-.073 16.833A11.46 11.46 0 0 0 14.5 30"/><path fill="#8d65c5" d="M6.627 26.883A11.47 11.47 0 0 1 3 18.5a11.47 11.47 0 0 1 3.7-8.45a10.8 10.8 0 0 1 3.988 8.388c0 3.417-1.586 6.464-4.06 8.445"/><path fill="#f9c23c" d="M18 21.452v-5.874a.7.7 0 0 0-1.174-.516l-2.997 2.754a1 1 0 0 0 .01 1.482l2.995 2.676A.7.7 0 0 0 18 21.452"/><path fill="#1c1c1c" d="M8.172 16.516a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0"/></g></svg>',lollipop:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" d="M15.236 15.79a1.75 1.75 0 0 1 2.474-.054l11.75 11.25a1.75 1.75 0 0 1-2.42 2.528l-11.75-11.25a1.75 1.75 0 0 1-.054-2.474"/><path fill="#5092ff" d="M3.386 6.918a10.05 10.05 0 0 1 3.75-3.658C13.351 6.72 12 12 12 12C9.96 8.791 8.015 7.264 3.386 6.918"/><path fill="#00d26a" d="M2 11.907a9.95 9.95 0 0 1 1.417-5.042C10.297 6.967 12 12 12 12c-3.333-1.748-5.71-2.094-10-.093"/><path fill="#fcd53f" d="M3.293 16.921A9.96 9.96 0 0 1 2 11.844C8.01 8.494 12 12 12 12c-3.783.095-6.017 1.146-8.707 4.921"/><path fill="#ff9f2e" d="M6.921 20.616a10.05 10.05 0 0 1-3.66-3.75C6.79 10.959 12 12 12 12c-3.22 1.904-4.58 4.027-5.079 8.616"/><path fill="#f837a2" d="M6.865 20.583C6.967 13.703 12 12 12 12c-1.827 3.297-2.028 5.775-.093 10a9.95 9.95 0 0 1-5.042-1.417"/><path fill="#c790f1" d="M11.844 21.999C8.494 15.99 12 12 12 12c.173 3.837 1.18 6.105 4.92 8.708a9.95 9.95 0 0 1-5.076 1.29"/><path fill="#5092ff" d="M16.866 20.738C10.96 17.211 12 12 12 12c2.095 3.32 3.973 4.747 8.614 5.082a10.05 10.05 0 0 1-3.748 3.656"/><path fill="#00d26a" d="M20.583 17.135C13.703 17.033 12 12 12 12c3.342 1.803 5.852 2.093 10 .094a9.95 9.95 0 0 1-1.417 5.04"/><path fill="#fcd53f" d="M21.999 12.156L22 12a9.96 9.96 0 0 0-1.292-4.92C18.038 10.964 15.792 11.881 12 12c0 0 3.991 3.507 9.999.156"/><path fill="#ff9f2e" d="M17.082 3.386a10.05 10.05 0 0 1 3.656 3.748C17.211 13.04 12 12 12 12c3.107-1.928 4.712-3.772 5.082-8.614"/><path fill="#f837a2" d="M17.135 3.417A9.95 9.95 0 0 0 12.096 2c2.141 4.27 1.64 6.836-.096 10c0 0 5.033-1.703 5.134-8.583"/><path fill="#c790f1" d="M12.156 2.001L12 2a9.95 9.95 0 0 0-4.916 1.29C11.228 5.88 12.116 8.218 12 12c0 0 3.507-3.991.156-9.999"/></g></svg>',candy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M13 4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .8-.97 1.2-1.54.64l-.05-.05c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l.05.05C5.2 8.03 4.8 9 4 9c-1.1 0-2 .9-2 2s.9 2 2 2h9z"/><path fill="#fcd53f" d="M19 24.488A9 9 0 0 1 16 25c-.824 0-1.621-.11-2.38-.318a9 9 0 0 0 2.74.308a6.41 6.41 0 0 1 .94-7.17a6.42 6.42 0 0 1 7.69-1.46A9 9 0 0 0 25 16c0 1.052-.18 2.062-.512 3l-.26.21h-1.726c-1.93 0-3.268 1.344-3.268 3.274v1.756z"/><path fill="#fcd53f" d="M24.66 13.54a8.9 8.9 0 0 0-2.57-.38c-2.54 0-4.97 1.09-6.66 2.99a9 9 0 0 0-1.79 3.06a8.8 8.8 0 0 0-.46 3.39c.04.7.16 1.39.36 2.06a9 9 0 0 1-2.344-1.048c-.022-.048-.13-.122-.15-.17c-1.438-3.251-.997-7.248 1.514-10.074c1.84-2.07 4.535-3.184 7.105-3.184c1.308 0 2.506.285 3.723.838c.04.018.183.17.222.188c-.44-.7-.99-1.35-1.63-1.93a8.9 8.9 0 0 0-2.41-1.54c-.074 0-.11.06-.183.062a11.8 11.8 0 0 0-8.59 3.977a12 12 0 0 0-2.389 4.09c-.387 1.142-.55 2.29-.581 3.496c-.002.068-.096.124-.097.192a9 9 0 1 1 16.93-6.017"/><path fill="#f8312f" d="M12.69 13.46a9.3 9.3 0 0 1 6.97-3.13c1.35 0 2.7.29 3.95.88c-.44-.7-.99-1.35-1.63-1.93a8.9 8.9 0 0 0-2.41-1.54c-1.63.01-3.21.35-4.71 1c-1.58.69-2.96 1.7-4.11 2.99c-1.07 1.2-1.87 2.58-2.39 4.09c-.41 1.21-.62 2.47-.63 3.75c.5 1.17 1.26 2.25 2.28 3.15c.38.34.78.64 1.19.9c-1.52-3.28-1.06-7.29 1.49-10.16M19 28c0 1.1.9 2 2 2s2-.9 2-2c0-.8.97-1.2 1.54-.64l.05.05c.78.78 2.05.78 2.83 0s.78-2.05 0-2.83l-.05-.05C26.8 23.97 27.2 23 28 23c1.1 0 2-.9 2-2s-.9-2-2-2h-5.5c-1.93 0-3.5 1.57-3.5 3.5z"/><path fill="#f8312f" d="M17.33 17.835c-1.81 2.03-2.13 4.865-.97 7.155c-.94.04-1.89-.07-2.82-.33c-.2-.67-.39-1.369-.43-2.069c-.07-1.16.124-2.372.494-3.462c.39-1.13.988-2.1 1.788-3a9.04 9.04 0 0 1 6.698-3.02c.88 0 1.74.181 2.57.431c.26.92.37 1.87.33 2.82c-.91-.46-1.91-.655-2.9-.655c-1.76 0-3.49.71-4.76 2.13"/></g></svg>',doughnut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M27.32 14C25.67 9.34 21.22 6 16 6S6.33 9.34 4.68 14H4v4c0 6.63 5.37 12 12 12s12-5.37 12-12v-4zm-6.82 3.64c0 2.21-1.79 4-4 4h-1c-2.21 0-4-1.79-4-4s1.79-4 4-4h1c2.21 0 4 1.79 4 4"/><path fill="#6d4534" d="M16 2C9.37 2 4 7.37 4 14s5.37 12 12 12s12-5.37 12-12S22.63 2 16 2m4.5 12c0 2.21-1.79 4-4 4h-1c-2.21 0-4-1.79-4-4s1.79-4 4-4h1c2.21 0 4 1.79 4 4"/><path fill="#00a6ed" d="M12.85 7.76c-.2.2-.54.2-.74 0l-.79-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54.01.74m-6.61 6.26c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm17 2.74c-.2-.2-.2-.54 0-.74l.78-.78c.2-.2.54-.2.74 0s.2.54 0 .74l-.78.78c-.2.21-.54.21-.74 0m-11.48 5c-.2.2-.54.2-.74 0l-.78-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54 0 .74m9.48-13.74c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0z"/><path fill="#ff6dc6" d="M16.24 6.02c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm7.78 5.74c.2.2.54.2.74 0c.21-.2.21-.54 0-.74l-.78-.78c-.2-.2-.54-.2-.74 0s-.2.54 0 .74zM8.24 9.85c-.2-.2-.2-.54 0-.74l.78-.78c.2-.2.54-.2.74 0s.2.54 0 .74l-.78.78c-.2.2-.54.2-.74 0m6 13.17c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm7.52-2.26c-.2.2-.54.2-.74 0l-.78-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54 0 .74m-11.74-2.91c.2.2.54.2.74 0c.21-.21.21-.54 0-.74l-.78-.78c-.2-.2-.54-.2-.74 0s-.2.54 0 .74z"/></g></svg>',"crescent-moon":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fcd53f" d="M23.41 5.632c.5 2.04.56 4.26.02 6.56c-1.26 5.33-5.64 9.51-11.02 10.48c-2.91.53-5.68.13-8.09-.92c-.56-.25-1.09.39-.8.93c2.65 4.88 8.11 8 14.22 7.19c6.23-.83 11.22-5.91 11.97-12.15c.6-5.18-1.6-9.86-5.28-12.75c-.47-.36-1.16.08-1.02.66"/><path fill="#f9c23c" d="M27.87 12.562a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0m-12.92 12.88a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0m11.85-6.47a.99.99 0 1 0 0-1.98a.99.99 0 0 0 0 1.98m-2 3.01a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></g></svg>',"ringed-planet":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff944c" d="M25.054 16.005a9.027 9.027 0 0 1-10.632 8.885C12.794 23.32 11 22.5 9.17 21.875a9 9 0 0 1-2.143-6.566c1.618-3.006 5.046-6.894 8.176-8.294q.408-.037.825-.037c2.077 0 3.99.701 5.515 1.88c.637 1.589 2.11 4.309 3.365 5.512q.146.796.147 1.635"/><path fill="#fbb8ab" d="M11.957 11.909c-1.8 1.921-3.773 2.959-4.93 3.386a9.03 9.03 0 0 1 8.168-8.28c-.252.869-.94 2.442-3.238 4.894m8.638 8.386c1.904-2.145 3.278-4.157 4.302-5.975a9.03 9.03 0 0 0-3.36-5.466c-.637 1.541-2.353 4.264-5.512 7.486c-2.497 2.547-4.798 4.297-6.87 5.52a9.02 9.02 0 0 0 5.295 3.035c2.355-1.312 4.615-2.877 6.145-4.6"/><path fill="#fcd53f" d="M27.231 4.88c-.453-.527-1.06-.703-1.584-.718c-.496-.015-.99.109-1.425.264c-.875.312-1.86.883-2.811 1.522a37 37 0 0 0-2.198 1.608a9 9 0 0 1 2.452 1.398c.402-.299.803-.585 1.194-.847c.898-.602 1.67-1.03 2.237-1.233l.066-.023c-.027.11-.07.247-.137.42c-.28.72-.84 1.66-1.633 2.754c-1.57 2.169-3.85 4.669-5.909 6.752c-1.996 2.02-4.713 4.43-7.096 6.17c-1.199.875-2.26 1.542-3.074 1.915q-.26.119-.452.185c.125-.34.362-.794.725-1.367c.392-.622.876-1.299 1.402-2.023a9 9 0 0 1-1.414-2.478q-.216.3-.438.603l-.07.098c-.587.805-1.188 1.635-1.679 2.411c-.477.755-.924 1.573-1.119 2.35c-.2.801-.194 1.89.737 2.654c.59.484 1.298.504 1.803.435c.523-.07 1.068-.266 1.588-.504c1.049-.48 2.275-1.267 3.524-2.18c2.515-1.837 5.337-4.341 7.413-6.441c2.092-2.118 4.48-4.728 6.166-7.055c.835-1.155 1.55-2.308 1.95-3.338c.354-.914.677-2.29-.218-3.333M6.758 25.451v.012z"/></g></svg>',rocket:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M29.2 2.95c-.947-.947-2.7-.998-3.818-.425c-.913.314-1.874.667-2.854 1.063l.01.01c-2.575 1.095-6.427 3.04-9.51 5.902c-2.164 2.01-3.404 3.556-4.235 4.965l-5.298 1.95a1 1 0 0 0-.362 1.646l11.138 11.137a1 1 0 0 0 1.645-.362l2.204-5.986c1.608-.958 3.223-2.165 4.908-3.85c2.39-2.39 4.366-6.56 5.513-9.357l.009.008c.4-.99.758-1.961 1.074-2.883c.573-1.118.74-2.654-.424-3.818"/><path fill="#f4f4f4" d="M23.299 4.365c-2.517 1.04-6.478 2.978-9.59 5.868c-2.015 1.87-3.172 3.294-3.94 4.55c-.769 1.255-1.175 2.38-1.663 3.74l-.002.007c-.17.474-.35.977-.559 1.514l4.556 4.556c3.602-1.48 6.74-2.828 10.22-6.307c2.351-2.352 4.339-6.642 5.454-9.421z"/><path fill="#9b9b9b" d="M24.528 11.25a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"/><path fill="#83cbff" d="M23.528 11.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"/><path fill="#ff8257" d="M2.451 29.61C1.744 28.905 2.028 24 4.528 23c0 0 2.5-1 4.11.6c1.612 1.601.89 3.4.89 3.4c-.707 2.121-3.718 2.965-4.071 2.61c-.195-.194.156-.55 0-.706c-.157-.157-.398.022-1.06.353c-.472.236-1.663.637-1.946.354"/><path fill="#533566" d="M6.088 21.06a1.5 1.5 0 0 1 2.122 0l3.535 3.536a1.5 1.5 0 1 1-2.121 2.122l-3.536-3.536a1.5 1.5 0 0 1 0-2.121"/><path fill="#f92f60" d="M15.535 18.722c.442-1.2-.725-2.368-1.926-1.926l-7.114 2.619a1 1 0 0 0-.362 1.646l5.138 5.137a1 1 0 0 0 1.645-.362z"/></g></svg>',snowman:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M23.62 12.155c0 1.072-.215 1.972-.659 2.694a11.18 11.18 0 0 1 3.779 8.386c0 1.544-.314 2.852-.934 3.935c-.623 1.086-1.518 1.883-2.58 2.456c-2.08 1.122-4.845 1.409-7.686 1.409s-5.607-.287-7.686-1.409c-1.062-.573-1.957-1.37-2.58-2.457c-.62-1.082-.934-2.39-.934-3.934c0-3.33 1.456-6.32 3.762-8.372c-.441-.725-.652-1.63-.652-2.708a8.074 8.074 0 0 1 8.08-8.08c4.46 0 8.09 3.616 8.09 8.08"/><path fill="#433b6b" d="M6.5 13.575a.5.5 0 0 0-1 0v1.607l-1.09-.954a.5.5 0 1 0-.659.753l2.35 2.054H4.95a.5.5 0 1 0 0 1h2.24q.025 0 .05-.003l1.67 1.46a.5.5 0 0 0 .658-.754l-3.072-2.685l.003-.058zm18.52-.5a.5.5 0 0 1 .5.5v1.607l1.091-.954a.5.5 0 1 1 .658.753l-2.36 2.064h1.111a.5.5 0 0 1 0 1h-2.256L22.11 19.49a.5.5 0 0 1-.658-.753l3.072-2.685l-.003-.058v-2.42a.5.5 0 0 1 .5-.5"/><path fill="#fff" d="M21.535 14.984c.687-.568 1.085-1.453 1.085-2.83c0-3.91-3.18-7.08-7.09-7.08s-7.08 3.16-7.08 7.08c0 1.39.392 2.278 1.072 2.846a10.19 10.19 0 0 0-4.182 8.235c0 5.63 4.57 6.8 10.2 6.8s10.2-1.17 10.2-6.8c0-3.39-1.657-6.396-4.205-8.251"/><path fill="#0074ba" d="M20.54 24.035h-1.01v.5c0 .26-.22.49-.49.49a.49.49 0 0 1-.49-.49v-.5h-1.03v.49a.49.49 0 0 1-.98 0v-.944a.7.7 0 0 1-.03-.196v-5.35h5.03v5.35q0 .084-.02.161v.989c0 .26-.22.49-.49.49a.49.49 0 0 1-.49-.49z"/><path fill="#0084ce" d="M8.815 14.081c-.256.287-.395.793-.395 1.614c0 3.93 3.19 4.39 7.12 4.39s7.12-.46 7.12-4.39c0-.836-.145-1.345-.41-1.63c-.933 1.941-3.53 1.94-6.585 1.94h-.378c-3.035.001-5.56.002-6.472-1.924"/><path fill="#321b41" d="m9.548 6.359l.293-.844l-.8-.332c-.44-1.03.03-2.22 1.06-2.66l1.81-.78c1.03-.44 2.21.03 2.65 1.06l-.403.846l.912.342l.251-.108a.711.711 0 1 1 .56 1.31l-6.04 2.59a.715.715 0 0 1-.94-.37c-.15-.36.01-.79.38-.94z"/><path fill="#0074ba" d="m15.074 3.99l-5.53 2.37l-.503-1.177l5.53-2.37z"/><path fill="#ff6723" d="m19.69 11.135l-4.06-.42c-.45 0-.81.36-.81.81s.36.81.81.81l4.06-.42c.22 0 .4-.18.4-.4s-.18-.38-.4-.38"/><path fill="#433b6b" d="M14.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"/><path fill="#00a6ed" d="M5.28 9.705h.2c.29 0 .53.24.53.53s-.24.53-.53.53h-.2l.15.13c.2.21.2.54 0 .75c-.21.21-.55.21-.75 0l-.14-.14v.2c0 .29-.24.53-.53.53s-.53-.24-.53-.53v-.2l-.14.15c-.21.21-.55.21-.75 0a.525.525 0 0 1 0-.75l.14-.14h-.2c-.29 0-.53-.24-.53-.53s.24-.53.53-.53h.2l-.15-.14a.525.525 0 0 1 0-.75c.21-.21.55-.21.75 0l.14.15v-.2c0-.29.24-.53.53-.53s.53.24.53.53v.2l.14-.15c.21-.21.54-.21.75 0c.2.21.2.54 0 .75zm22.44.23h-.11l.08-.08c.11-.11.11-.29 0-.4a.284.284 0 0 0-.4 0l-.08.08v-.11c0-.15-.13-.28-.28-.28s-.28.13-.28.28v.11l-.08-.08a.284.284 0 0 0-.4 0c-.11.11-.11.29 0 .4l.08.08h-.11c-.15 0-.28.13-.28.28s.13.28.28.28h.11l-.08.08c-.11.11-.11.29 0 .4s.29.11.4 0l.08-.08v.11c0 .15.13.28.28.28s.28-.13.28-.28v-.11l.08.08c.11.11.29.11.4 0s.11-.29 0-.4l-.08-.08h.11c.15 0 .28-.13.28-.28c0-.16-.12-.28-.28-.28m.96 13.02h.11c.16 0 .28.13.28.28s-.13.28-.28.28h-.11l.08.08c.11.11.11.29 0 .4s-.29.11-.4 0l-.08-.08v.11c0 .15-.13.28-.28.28s-.28-.13-.28-.28v-.11l-.08.08c-.11.11-.29.11-.4 0a.284.284 0 0 1 0-.4l.08-.08h-.11c-.15 0-.28-.13-.28-.28s.13-.28.28-.28h.11l-.08-.08a.283.283 0 0 1 .4-.4l.08.08v-.11c0-.15.13-.28.28-.28s.28.13.28.28v.11l.08-.08a.283.283 0 0 1 .4.4z"/><path fill="#26c9fc" d="M26.28 4.705h.2c.29 0 .53.24.54.52c0 .29-.24.53-.53.53h-.2l.14.14c.2.21.2.54 0 .75c-.21.21-.55.21-.75 0l-.14-.14v.21c0 .29-.24.53-.53.53s-.53-.24-.53-.53v-.2l-.14.14c-.21.21-.55.21-.75 0a.525.525 0 0 1 0-.75l.14-.14h-.2c-.29 0-.53-.24-.53-.53s.24-.53.52-.53h.2l-.14-.14a.525.525 0 0 1 0-.75c.21-.21.55-.21.75 0l.14.14v-.2c0-.29.24-.53.53-.53s.53.24.53.53v.2l.14-.14c.21-.21.54-.21.75 0c.2.21.2.54 0 .75zm-19.59.25h.1c.16 0 .29.13.29.28s-.13.28-.28.28h-.11l.08.08c.11.11.11.29 0 .4s-.29.11-.4 0l-.08-.08v.11c0 .15-.13.28-.28.28s-.28-.13-.28-.28v-.11l-.08.08c-.11.11-.29.11-.4 0a.284.284 0 0 1 0-.4l.08-.08h-.11c-.15 0-.28-.13-.28-.28s.13-.28.28-.28h.11l-.08-.08a.284.284 0 0 1 0-.4c.11-.11.29-.11.4 0l.08.08v-.11c0-.15.13-.28.28-.28s.28.13.28.28v.11l.08-.08c.11-.11.29-.11.4 0s.11.29 0 .4zm-2.03 14.98h-.11l.08-.08c.11-.11.11-.29 0-.4a.284.284 0 0 0-.4 0l-.08.08v-.11c0-.15-.13-.28-.28-.28s-.28.13-.28.28v.11l-.08-.08a.284.284 0 0 0-.4 0c-.11.11-.11.29 0 .4l.08.08h-.11c-.15 0-.28.13-.28.28s.13.28.28.28h.11l-.08.08c-.11.11-.11.29 0 .4s.29.11.4 0l.08-.08v.11c0 .15.13.28.28.28s.28-.13.28-.28v-.11l.08.08c.11.11.29.11.4 0s.11-.29 0-.4l-.08-.07h.11c.15 0 .28-.13.28-.28c0-.16-.13-.29-.28-.29"/></g></svg>',"crystal-ball":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M16 27c6.627 0 12-5.373 12-12S22.627 3 16 3S4 8.373 4 15s5.373 12 12 12"/><path fill="#b4acbc" d="M24 24H8l-.921 4.18c-.333.897.433 1.82 1.512 1.82h14.822c1.078 0 1.834-.923 1.512-1.82z"/><path fill="#fcd53f" d="M14.205 6.264a.5.5 0 0 1-.26-.261l-.38-.897a.19.19 0 0 0-.34 0l-.38.897a.48.48 0 0 1-.26.261l-.48.222a.192.192 0 0 0 0 .343l.48.221c.12.05.21.152.26.262l.38.897a.19.19 0 0 0 .34 0l.38-.897a.48.48 0 0 1 .26-.262l.48-.221a.192.192 0 0 0 0-.343zm9.915 4.54a.73.73 0 0 1-.36-.373l-.54-1.28a.274.274 0 0 0-.49 0l-.54 1.28a.73.73 0 0 1-.36.373l-.68.312c-.2.1-.2.393 0 .494l.68.312c.16.07.29.211.36.373l.54 1.28c.1.2.39.2.49 0l.54-1.28a.72.72 0 0 1 .36-.373l.68-.312c.2-.101.2-.393 0-.494zM12.586 14.03c.139.352.398.636.73.792l1.379.655c.407.215.407.83 0 1.046l-1.378.655c-.324.156-.592.44-.73.792l-1.092 2.707a.54.54 0 0 1-.99 0L9.414 17.97a1.46 1.46 0 0 0-.73-.792l-1.379-.655c-.407-.215-.407-.83 0-1.046l1.378-.655c.324-.156.592-.44.73-.792l1.092-2.707a.54.54 0 0 1 .99 0z"/></g></svg>',castle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M18.73 8.235h-5.42c-.3 0-.5-.32-.36-.59l2.71-5.42a.4.4 0 0 1 .72 0l2.71 5.42c.14.27-.06.59-.36.59M12.348 20H3.652c-.485 0-.802-.417-.58-.773l4.348-8.934c.242-.39.918-.39 1.16 0l4.348 8.934c.221.356-.095.773-.58.773m7.304 0h8.696c.485 0 .802-.417.58-.773l-4.348-8.934c-.242-.39-.918-.39-1.16 0l-4.348 8.934c-.221.356.095.773.58.773"/><path fill="#998ea4" d="M19.391 7h-.447a.6.6 0 0 0-.609.605a.606.606 0 0 1-.609.624h-.285a.6.6 0 0 1-.609-.605a.606.606 0 0 0-.609-.624h-.447a.6.6 0 0 0-.608.605a.606.606 0 0 1-.61.624h-.285a.6.6 0 0 1-.608-.605a.606.606 0 0 0-.61-.624h-.446a.616.616 0 0 0-.609.614v3.811c0 .336.167.575.5.575h.5c-.504 0-1 0-1 1v11h8V13c0-1-.496-1-1-1h.5c.333 0 .5-.239.5-.575V7.614A.6.6 0 0 0 19.39 7"/><path fill="#b4acbc" d="M30 19.198v.39L29.99 30H18.957l-2.99-1.697L12.977 30H2V18.599c0-.333.31-.599.66-.599h.47c.35 0 .63.266.63.599s.28.599.63.599h.289c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .63.266.63.599s.28.599.629.599h.3c.35 0 .63-.267.63-.6s.28-.598.63-.598h.47c.35 0 .629.266.629.599s.28.599.63.599h.31c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.349 0 .629.266.629.599s.28.599.63.599h.29c.35 0 .63-.267.63-.6s.28-.598.63-.598h.499c.35 0 .63.266.63.599s.28.599.63.599h.29c.35 0 .63-.267.63-.6s.279-.598.629-.598h.46c.35 0 .63.266.63.599s.28.599.63.599h.29c.35 0 .629-.267.629-.6s.28-.598.63-.598h.47c.35 0 .63.266.63.599s.28.599.63.599h.289c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .63.266.63.599s.28.599.629.599h.29c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .629.266.629.599z"/><path fill="#5235a6" d="M15 14h2v-1c0-.557-.456-1-1-1c-.557 0-1 .456-1 1zm-2 16h5.99v-3.23c0-1.781-1.33-2.77-2.99-2.77c-1.65 0-3 .979-3 2.77z"/><path fill="#26c9fc" d="M7.5 7.306V9.19c0 .215.212.361.414.293l2.35-1.117a.125.125 0 0 0 0-.226l-2.36-1.127a.312.312 0 0 0-.404.293m16 0V9.19c0 .215.212.361.414.293l2.35-1.117a.125.125 0 0 0 0-.226l-2.36-1.127a.312.312 0 0 0-.404.293"/></g></svg>',"cherry-blossom":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6dc6" d="M26.23 19.766c2.47-.8 3.96-3.19 3.76-5.68a.53.53 0 0 0-.43-.47s-.89-.19-1.09-.23c-.1-.02-.14-.15-.08-.22c.13-.14.75-.84.75-.84c.16-.17.19-.44.07-.64c-1.29-2.13-3.9-3.19-6.38-2.38c-.71.23-1.33.65-1.87 1.18c.34-.68.54-1.39.54-2.14c0-2.6-1.81-4.76-4.24-5.33a.56.56 0 0 0-.59.26s-.46.79-.56.97c-.05.09-.19.08-.23.01c-.1-.17-.56-.98-.56-.98c-.12-.2-.36-.32-.58-.26c-2.42.56-4.24 2.72-4.24 5.32c0 .75.21 1.46.54 2.14c-.54-.53-1.15-.94-1.86-1.17c-2.48-.81-5.09.25-6.38 2.38c-.12.2-.09.46.07.64c0 0 .61.68.75.83c.07.07.02.21-.07.23l-1.1.23c-.23.05-.41.24-.43.47a5.48 5.48 0 0 0 3.76 5.68c.72.23 1.46.26 2.22.14c-.68.35-1.28.81-1.72 1.42c-1.53 2.1-1.33 4.91.3 6.8c.15.18.41.23.63.13c0 0 .83-.37 1.02-.46c.09-.04.2.04.19.13l-.12 1.12c-.02.23.1.47.32.56c2.3.96 5.03.28 6.56-1.82c.44-.61.69-1.3.82-2.05c.13.75.38 1.45.82 2.05c1.53 2.1 4.26 2.78 6.56 1.82c.22-.09.34-.32.32-.56c0 0-.1-.91-.12-1.11c-.01-.1.1-.18.19-.14l1.03.46c.21.1.48.05.63-.13c1.63-1.89 1.83-4.7.3-6.8c-.44-.61-1.04-1.06-1.72-1.42c.76.12 1.5.09 2.22-.14"/><path fill="#fff" d="M16.51 13.252a1 1 0 1 0-1 0v1.284a2.47 2.47 0 0 0-1.648 1.198l-1.224-.397a1 1 0 1 0-.309.951l1.225.397q-.014.134-.014.27c0 .64.243 1.224.643 1.663l-.758 1.043a1 1 0 1 0 .809.588l.757-1.043a2.46 2.46 0 0 0 2.033.002l.752 1.04a1 1 0 1 0 .81-.587l-.753-1.04a2.46 2.46 0 0 0 .632-1.937l1.215-.395a1 1 0 1 0-.31-.951l-1.214.394a2.47 2.47 0 0 0-1.646-1.196z"/></g></svg>',herb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#44911b" d="m8.018 29.6l1.14.39l1.35-3.898l4.02.418c.33.03.63-.21.66-.54a.605.605 0 0 0-.54-.66l-3.733-.39a13.2 13.2 0 0 1 5.09-6.46l4.143.44c.33.03.63-.21.66-.54a.605.605 0 0 0-.54-.66l-2.904-.31a14.4 14.4 0 0 0 4.024-6.03l.38-1.09a.6.6 0 0 0-.37-.77a.6.6 0 0 0-.77.37l-.38 1.09a13.2 13.2 0 0 1-4.046 5.824l-1.704-3.504a.605.605 0 1 0-1.09.53l1.806 3.716l-.006.004a14.4 14.4 0 0 0-5.282 6.59l-1.308-2.69a.605.605 0 1 0-1.09.53l1.83 3.763z"/><path fill="#86d72f" d="M23.978 2c-3.34 1.63-4.74 5.66-3.11 9a6.727 6.727 0 0 0 3.11-9m-8.19 7.05l-1.81-3.72a4.226 4.226 0 0 0-1.95 5.65l1.81 3.72a4.23 4.23 0 0 0 1.95-5.65m-5.43 6.39l-2.32-4.76c-2.68 1.31-3.8 4.54-2.49 7.22l2.32 4.76a5.41 5.41 0 0 0 2.49-7.22m17.56.03l-4.12-.43c-2.32-.25-4.39 1.44-4.64 3.76l4.12.43c2.32.24 4.4-1.44 4.64-3.76m-8.57 6.13l5.27.55a5.403 5.403 0 0 1-5.94 4.81l-5.27-.55a5.403 5.403 0 0 1 5.94-4.81"/></g></svg>',"fallen-leaf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M27.91 8.01c-7.13 0-12.91 5.78-12.97 12.66l.06 8.57c0 .43.37.77.79.74C23.71 29.57 30 23.03 30 15.01v-7z"/><path fill="#ca0b4a" d="M19.06 24.92a.753.753 0 0 1-.61-1.19l9.42-13.21c.42-.59.64-1.29.64-2.01l-.01-3.75a.749.749 0 1 1 1.5 0l.02 3.75c0 1.04-.32 2.04-.92 2.89l-9.42 13.21c-.15.2-.38.31-.62.31"/><path fill="#e19747" d="M14.52 2.01c-4.56.04-8.39 3.89-8.39 8.61V12h4.63c5.31 0 9.65-4.24 9.92-9.47a.495.495 0 0 0-.49-.53zM6.24 17.02c3.13.02 5.76 2.67 5.76 5.91v1.08H8.82c-3.65 0-6.63-3.04-6.82-6.64c-.01-.19.14-.36.34-.36z"/><path fill="#d3883e" d="M17.23 4.47c.06.09.09.19.09.29c0 .16-.07.31-.21.41L8.37 11.4c-.56.4-1.22.61-1.91.61H4.5c-.28 0-.5-.23-.5-.5s.22-.49.5-.49h1.96c.48 0 .94-.15 1.33-.43l8.75-6.24c.22-.16.53-.1.69.12m-5.37 18.54h.63c.26 0 .49.2.51.46c.01.29-.21.53-.5.53h-.64c-.69 0-1.35-.21-1.91-.61l-4.26-3.04a.495.495 0 0 1-.11-.69c.01 0 .01-.01.01-.01c.16-.22.46-.27.68-.11l4.26 3.04c.39.28.85.43 1.33.43"/></g></svg>',"maple-leaf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="m29.716 17.803l-2.32-.44a.212.212 0 0 1-.14-.31l2.16-3.47a.208.208 0 0 0-.19-.32l-4.07.37c-.14.01-.26-.12-.22-.26l.64-2.24a.208.208 0 0 0-.31-.23l-4.35 2.75c-.15.09-.34-.03-.32-.2l1.28-9.33c.02-.17-.16-.3-.31-.2l-3.29 2c-.1.06-.24.02-.29-.08l-1.86-3.73a.208.208 0 0 0-.37 0l-1.86 3.73c-.05.11-.19.15-.29.09l-3.4-2.01c-.15-.09-.34.04-.31.21l1.63 9.32c.03.17-.16.3-.31.21l-4.61-2.77c-.16-.1-.36.05-.31.23l.65 2.26c.04.14-.07.28-.22.26l-4.07-.37c-.17-.02-.28.17-.19.32l2.16 3.47a.2.2 0 0 1-.14.31l-2.32.44c-.18.03-.23.27-.07.38l6.54 4.29c.17.11.21.33.1.5l-1.93 2.75c-.09.13.04.31.19.25l8.38-3.06c.36-.13.76-.13 1.12 0l8.38 3.06c.15.06.29-.12.19-.25l-1.93-2.75a.36.36 0 0 1 .1-.5l6.54-4.29c.17-.12.12-.36-.06-.39"/><path fill="#ca0b4a" d="M15.946 11.273a1 1 0 0 1 1 1v8.12l5.443-2.8a1 1 0 0 1 .915 1.779l-6.358 3.27v6.33a1 1 0 1 1-2 0v-6.33l-6.357-3.27a1 1 0 0 1 .915-1.779l5.442 2.8v-8.12a1 1 0 0 1 1-1"/></g></svg>',"palm-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.04 8.86H13.6V30h5.44z"/><path fill="#86d72f" d="M5 8.16c-.552 0-1.009-.45-.92-.996A6.165 6.165 0 0 1 10.16 2c3.4 0 6.16 2.75 6.16 6.16zm11.32 0h11.32c.552 0 1.008-.45.92-.996A6.16 6.16 0 0 0 22.48 2c-3.4 0-6.16 2.76-6.16 6.16"/><path fill="#44911b" d="M15.636 7.624c.413.263.954.263 1.367 0a6.15 6.15 0 0 1 7.657.846a6.17 6.17 0 0 1 .647 7.949c-.322.448-.964.444-1.354.054l-6.926-6.926a1 1 0 0 0-1.414 0l-6.926 6.926c-.39.39-1.032.394-1.355-.054A6.15 6.15 0 0 1 7.98 8.47a6.175 6.175 0 0 1 7.656-.846"/><path fill="#d3883e" d="M15.55 11.93a2.16 2.16 0 1 1-4.32 0a2.16 2.16 0 0 1 4.32 0m5.86 1.77a2.16 2.16 0 1 1-4.32 0a2.16 2.16 0 0 1 4.32 0"/></g></svg>',shortcake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="m3.627 29.82l24.63-7.068l.787-.724V7.978l-1.022-1.98l-25.95 7.345v14.944c0 1.225.496 1.785 1.555 1.532"/><path fill="#ffdea7" d="m13.034 2.508l-9.97 9.223c-1.946 1.662-.935 2.811.934 2.399l23.026-6.606c.592-.14.966-.186.966.499v4.02c0 .687.064 1.045-.374 1.183c0 0-22.205 6.694-22.683 6.824s-1.54.328-1.87.28c-.329-.048-.747-.28-.934-.28s-.187.108-.187.623v2.167c0 .163.14.268.14.268a2.48 2.48 0 0 0 1.916.307l23.244-6.73c.374-.094.748.156.748.623v5.298c0 .322.195.339.332.322c.992-.286 1.678-.873 1.678-1.881V8.023c0-.853-.617-2.278-2.01-2.71L16.96 2.725c-1.047-.218-3.072-.88-3.926-.218"/><path fill="#f8312f" d="M12.024 4.517c.126-.628.335-2.402 2.516-2.836l2.356 1.207l.858 2.575C16.95 7.624 15.29 7.47 14.627 7.47h-1.963c-.64 0-1.004-.364-.916-1.033z"/><path fill="#86d72f" d="M16.94 4.372c-.44-.495-.32-1.25-.32-1.25s-.714 0-1.062-.38l-1.193-1.235c-.064-.088 0-.183.088-.248c0 0 .701-.531 1.789.16c.602.444 1.746 1.862 2.036 2.458c.527.9-.146 1.673-.146 1.673c-.077.095-.167.122-.276 0z"/></g></svg>',cupcake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6dc6" d="M20.086 5.002c.06.05.112.096.164.148c.47.45.77 1.09.76 1.8c0 .379-.084.738-.235 1.06h.745c1.93 0 3.5 1.56 3.49 3.5a3.5 3.5 0 0 1-.34 1.503a3.504 3.504 0 0 1 3.35 3.497c0 1.93-1.57 3.5-3.5 3.5H7.5c-1.93 0-3.5-1.57-3.5-3.5a3.504 3.504 0 0 1 3.34-3.496a3.5 3.5 0 0 1 3.17-5.004h.736a2.5 2.5 0 0 1-.236-1.06c0-.76.33-1.43.85-1.89l3.03-2.64c.64-.56 1.6-.56 2.24 0l2.93 2.56z"/><path fill="#5092ff" d="M18.29 9.46c-.2.2-.2.51 0 .71c.19.2.51.2.71 0l.74-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zM9.2 13.43c0-.28.22-.5.5-.5h1.05c.28 0 .5.22.5.5s-.22.5-.5.5H9.7c-.28 0-.5-.22-.5-.5m11.67 4.68c.2-.2.2-.51 0-.71l-.74-.74c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l.74.74c.2.2.51.2.71 0"/><path fill="#efd5ff" d="M15.99 6.7c.2.2.51.2.71 0c.2-.19.2-.51 0-.7l-.74-.75c-.2-.2-.51-.2-.71 0s-.2.51 0 .71zm4.75 5.08c.2-.2.51-.2.71 0l.74.74c.2.2.2.51 0 .71s-.51.2-.71 0l-.74-.74c-.2-.19-.2-.51 0-.71m-8.88 6.33c-.2-.2-.2-.51 0-.71l.74-.74c.2-.2.51-.2.71 0s.2.51 0 .71l-.74.74c-.19.2-.51.2-.71 0"/><path fill="#ffb02e" d="M12.47 9.46c-.2.2-.2.51 0 .71c.19.2.51.2.7 0l.75-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zm-5.23 6.3c-.2.2-.2.51 0 .71c.2.19.51.19.71 0l.74-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zm16.09.71c-.2-.2-.2-.51 0-.71l.74-.74c.2-.2.51-.2.71 0s.2.51 0 .71l-.74.74c-.2.19-.52.19-.71 0m-7.34-2.31c.2.2.51.2.71 0s.2-.51 0-.71l-.74-.74c-.2-.2-.51-.2-.71 0s-.2.51 0 .71z"/><path fill="#fbb8ab" d="M25.24 19.98H6.78a1.77 1.77 0 0 0-1.7 2.28l2.106 6.896c.12.38.48.64.89.64h15.87c.4 0 .76-.26.89-.64l2.114-6.896c.33-1.14-.52-2.28-1.71-2.28"/><path fill="#5092ff" d="M8 30h16c1.04 0 1.391-.646 1.5-1c0 0 1.936-6.072 1.816-6.564c-.074-.26-.394-.291-.49-.091l-.152.35l-.107-.259c-.07-.16-.426-.37-.779 0l-.748.87c-.066.077-.182.1-.229 0l-.344-.792c-.175-.385-.899-.478-1.464.035l-.803.758c-.148.152-.376.181-.52 0l-.702-.87c-.355-.43-1.19-.244-1.726.152l-.855.718c-.207.146-.464.17-.657 0l-.798-.793c-.45-.361-1.371-.49-1.92.035l-.794.758c-.144.111-.448.129-.626 0l-1.041-.87c-.45-.384-1.307-.314-1.686.152l-.572.718c-.093.106-.262.152-.473 0l-.978-.87c-.386-.325-1.121-.331-1.359.152l-.275.61s-.076.26-.214.108l-.717-.87c-.51-.553-.901 0-.978.259l-.152-.352c-.127-.273-.646 0-.459.657L6.5 29c.077.232.504 1 1.5 1"/><path fill="#3f5fff" d="m11.91 30l-.92-4.598a.5.5 0 0 0-.98.196L10.89 30zm9.2 0l.88-4.402a.5.5 0 0 0-.98-.196L20.09 30zm-4.61-4.5V30h-1v-4.5a.5.5 0 0 1 1 0"/></g></svg>',comet:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="m28.148 3.123l-4.41 3.41v-1.03c0-.53-.64-.8-1.02-.42l-3.94 3.94v-1.39c0-.53-.64-.8-1.02-.42l-4.64 4.64v-1.39c0-.53-.64-.8-1.02-.42l-6.05 6.05a7.007 7.007 0 0 0 0 9.9a7.007 7.007 0 0 0 9.9 0l6.06-6.06c.37-.37.11-1.02-.42-1.02h-1.39l4.64-4.64c.37-.37.11-1.02-.42-1.02h-1.39l3.93-3.93c.37-.37.11-1.02-.42-1.02h-1.03l3.4-4.4c.41-.52-.25-1.18-.76-.78"/><path fill="#f8312f" d="M22.018 10.523a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-6 10.5a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-.5-8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-5.5-4.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4.49 1a.99.99 0 1 1-1.98 0a.99.99 0 0 1 1.98 0m2.01-3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></g></svg>',"christmas-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.157 29.988h-6.311c-.536 0-.943-.47-.826-.96l.515-2.13l3.374-1.059l3.56 1.059l.513 2.13c.108.49-.289.96-.825.96"/><path fill="#44911b" d="m14.86 7.19l-2.68 4.792c-.5.89.12 2.018 1.12 2.018h.608C11.747 14 10 15.592 10 17.56c0 .8.71 1.439 1.579 1.439h.144C9.116 19 7 21.227 7 23.97C7 25.65 8.294 27 9.878 27h12.244C23.716 27 25 25.639 25 23.97c.01-2.743-2.106-4.97-4.723-4.97h.144C21.3 19 22 18.352 22 17.56c0-1.959-1.747-3.56-3.908-3.56h.558c1 0 1.62-1.118 1.12-2.018L17.09 7.19c-.49-.89-1.73-.89-2.23 0"/><path fill="#f8312f" d="M18.982 18.306a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58m-8.005 7.081a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58m12.313-1.359a1.29 1.29 0 1 1-2.58 0a1.29 1.29 0 0 1 2.58 0"/><path fill="#fcd53f" d="M18.289 12.016a1.29 1.29 0 1 1-2.58 0a1.29 1.29 0 0 1 2.58 0m-4.313 5.274a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58M16 23.254a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58"/><path fill="#f9c23c" d="m17.005 3.09l.695.106a.43.43 0 0 1 .242.735l-.503.493a.43.43 0 0 0-.125.377l.116.695a.434.434 0 0 1-.628.455l-.619-.329a.43.43 0 0 0-.406 0l-.619.329a.434.434 0 0 1-.628-.455l.116-.695a.43.43 0 0 0-.126-.377l-.502-.493a.43.43 0 0 1 .242-.735l.696-.097a.44.44 0 0 0 .328-.232l.31-.628a.432.432 0 0 1 .773 0l.309.628a.48.48 0 0 0 .329.223"/></g></svg>',unicorn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00d26a" d="m5.398 4.68l.085-.816l.798-.102l2.3 1.635l-.214 1.1l-1.211.38z"/><path fill="#468cfb" d="M8.705 8.813L7.156 6.877l1.424-1.48l2.026 1.441l-.586 1.259z"/><path fill="#f9c23c" d="m6.293 3.77l-.886.92l-1.536-1.92c-.217-.271.125-.633.408-.431z"/><path fill="#8d65c5" d="M10.554 6.801L13.21 8.69c1.083 2.647-1.064 3.045-2.272 2.913l-2.273-2.84z"/><path fill="#5092ff" d="M11.5 6.781c1.219-1.603 6.658-2.529 3.608.431c-1.81 1.76-1.054 3.632-3.374 4.632c-3.906 1.484-5.046-1.719-4.64-2.125s1.317.463 2.422 0c.686-.288.765-1.335 1.984-2.938"/><path fill="#efd5ff" d="m5.784 23.35l8.62-1.88q.223-.054.45-.123c-3.56 4.081-4.006 8.637-4.006 8.637h15.33c2.14 0 3.82-2.082 3.62-4.222c-.598-6.318-2.785-17.951-10.829-18.03c-1.607-1.224-3.467-1.52-4.586-.402c-3.417 3.418-6.626 6.976-8.794 9.38c-.674.748-1.247 1.384-1.695 1.87c-1.89 2.049-1.45 3.73.22 4.58c.51.26 1.11.31 1.67.19"/><path fill="#ff6dc6" d="M29.906 16.969c0-3.657-2.323-4.209-3.218-4.188c.197.792.28 3.3-.97 7S25.5 28.25 26.189 30c2.671 0 3.718-.344 3.718-2.281z"/><path fill="#c790f1" d="M27.375 17.281c1.063-4-1.875-8.156-4.187-8.156c.812 1.854 1.312 6.219 0 8.344C21.692 19.89 21.453 26.5 22.203 30h4.75c-1.7-4.825-.64-8.719.422-12.719"/><path fill="#bca4eb" d="M14.906 21.281c7.719-6.406 3.656-11.968-1.437-13.03c7.187-5.47 8.864 5.416 7.594 9.124c-2.157 2.313-6.157 3.906-6.157 3.906"/><path fill="#5092ff" d="M22.797 29.984h-6.625c-1.59-6.76 3.796-11.262 4.156-16.302c.4-5.73-3.74-6.79-3.74-6.79c-1.32.33 1.01 1.25-1.58 1.25l-.68-1.45l-.687-1.13c1.64-.45 3.842-.827 6.359.407c3.1 1.518 5.753 5.488 4.688 9.562c-1.063 4.063-3.579 6.992-1.891 14.453"/><path fill="#8d65c5" d="M22.797 29.984h-1.413c-.332-1-.608-2.608-.571-4.484c.056-2.898.682-4.505 2.157-8.296L23.438 16c1.45-3.75-.709-7.5-1.688-8.75l.165.024c2.158 1.934 3.608 5.064 2.773 8.257c-.257.981-.598 1.896-.945 2.824c-1.088 2.918-2.226 5.97-.946 11.63m4.578-12.704c.53-1.993.066-4.025-.82-5.562H26.5c.05.282.115.581.184.895c.304 1.39.672 3.07.035 4.855l-.004.01c-.824 2.308-2.464 6.9-2.059 9.49c.215 1.37.624 2.48.867 3.031h1.43c-1.686-4.785-.658-8.654.396-12.62z"/><path fill="#efd5ff" d="M15.578 9.016c-1.86.25-2.384-.703-2.5-2.453c-.115-1.75-.087-2.262-.087-2.262c0-.34.41-.51.65-.27c0 0 3.28 2.594 3.422 3.532c.14.937-.71 1.348-1.485 1.453"/><path fill="#1c1c1c" d="M12 12a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m-7.09 8.301c-.3.3-.8.3-1.1 0l1.1-1.1c.3.31.3.8 0 1.1m3.777 2.416l-1.864.406a1.794 1.794 0 0 0 1.114-1.972a.512.512 0 1 1 1.008-.173c.106.615.003 1.22-.258 1.739"/></g></svg>',butterfly:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M27.5 2c-.62 0-1.19.23-1.63.6L16 11L6.13 2.6C5.69 2.23 5.12 2 4.5 2A2.5 2.5 0 0 0 2 4.5v9.75C2 16.32 3.68 18 5.75 18H8c-3.31 0-6 2.69-6 6s2.69 6 6 6a6 6 0 0 0 5.67-4.04L16 20.39l2.33 5.57A6 6 0 0 0 24 30c3.31 0 6-2.69 6-6s-2.69-6-6-6h2.25c2.07 0 3.75-1.68 3.75-3.75V4.5A2.5 2.5 0 0 0 27.5 2"/><path fill="#ff822d" d="m10.21 13.96l-4.76-2.75c-.54-.32-1.22.08-1.22.71v2c0 1.7 1.38 3.08 3.08 3.08c.62 0 1.22-.25 1.66-.69l1.37-1.37a.62.62 0 0 0-.13-.98m11.81 0l4.76-2.75c.54-.32 1.22.08 1.22.71v2c0 1.7-1.38 3.08-3.08 3.08c-.62 0-1.22-.25-1.66-.69l-1.37-1.37a.62.62 0 0 1 .13-.98M17 16.85l2.77-1.6c.38-.21.86-.15 1.17.16l.8.8c.29.29.08.79-.33.79H17zm-4.54-1.6l2.77 1.6V17h-4.41c-.41 0-.62-.5-.33-.79l.8-.8c.31-.31.79-.37 1.17-.16"/><path fill="#ff6723" d="M4.23 5.98V8.2c0 .71.38 1.37.99 1.72l10.01 5.78V13L5.76 5.25c-.61-.5-1.53-.06-1.53.73m23.77 0V8.2c0 .71-.38 1.37-.99 1.72L17 15.7V13l9.47-7.75c.61-.5 1.53-.06 1.53.73M12.96 19.5H9.64c-.55 0-.82.66-.43 1.04l2.95 2.95c.31.31.83.2 1-.2l.9-2.15c.33-.77-.25-1.64-1.1-1.64m-6.94.46A4.5 4.5 0 0 0 3.5 24c0 2.47 1.95 4.46 4.41 4.5a4.47 4.47 0 0 0 4.12-2.51l.01-.02q.001-.007.005-.01q.004-.004.005-.01c.22-.47.12-1.04-.25-1.41L7.45 20.2c-.38-.38-.95-.48-1.43-.24m.62 7.05a1.64 1.64 0 1 1 0-3.28a1.64 1.64 0 0 1 0 3.28m12.44-7.51h3.32c.55 0 .82.66.43 1.04l-2.95 2.95c-.31.31-.83.2-1-.2l-.9-2.15c-.33-.77.25-1.64 1.1-1.64m6.94.46c1.49.73 2.52 2.27 2.52 4.04c0 2.47-1.95 4.46-4.41 4.5a4.47 4.47 0 0 1-4.12-2.51l-.01-.01q-.001-.007-.005-.01q-.005-.003-.005-.01c-.22-.47-.12-1.04.25-1.41l4.35-4.35c.38-.38.95-.48 1.43-.24m-.62 6.92a1.64 1.64 0 1 0 0-3.28a1.64 1.64 0 0 0 0 3.28"/><path fill="#212121" d="M13.305 2.193a.5.5 0 0 0-.79.614a11.87 11.87 0 0 1 2.495 7.303a.5.5 0 0 0 .99.1a.5.5 0 0 0 .99-.1c0-2.755.93-5.288 2.495-7.303a.5.5 0 0 0-.79-.614A12.86 12.86 0 0 0 16 9.596a12.86 12.86 0 0 0-2.695-7.403"/><path fill="#321b41" d="M16.917 10.778a2 2 0 1 0-1.84-.003a1.45 1.45 0 0 0-.587 1.165v10.61c0 .8.65 1.45 1.45 1.45h.11c.8 0 1.45-.65 1.45-1.45V11.94c0-.475-.23-.897-.583-1.162"/></g></svg>',honeybee:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#212121" d="M5.43 13.36c-.28 0-.5-.22-.5-.5V12c0-.71-.4-1.35-1.04-1.67l-.67-.38a.5.5 0 1 1 .44-.9l.68.38c.98.49 1.59 1.47 1.59 2.57v.86c0 .28-.22.5-.5.5M24.3 27.001h-1.47c-1.02 0-1.84-.83-1.84-1.84v-3.36c0-.41.34-.75.75-.75s.75.34.75.75v3.35c0 .19.15.34.34.34h1.47c.41 0 .75.34.75.75s-.34.76-.75.76m-14.5 1.98c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.65-.65c.36-.36.56-.85.56-1.36v-1.89c0-.41.34-.75.75-.75s.75.34.75.75v1.89c0 .91-.36 1.77-1 2.42l-.65.65c-.15.15-.34.22-.53.22m8.84-.22c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.65-.65c-.36-.36-.56-.85-.56-1.36v-1.89c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.89c0 .91.35 1.77 1 2.42zM28 16.36l1.78.38c.29.06.29.47 0 .54l-1.78.38l-1-.66z"/><path fill="#ffb02e" d="M17 25.001h2.11c.647 0 1.282-.09 1.89-.26L23.5 17L21 9.28a7 7 0 0 0-1.89-.259H17L15 17zM12 9.147a8 8 0 0 0-4.819 2.884L7.5 13.5v7l-.306 1.507A8 8 0 0 0 12 24.875L14.5 17zM24.5 17l1.5-3.377l2 2.755v1.267l-2 2.754z"/><path fill="#533566" d="M16.98 9.021h-3.77c-.42.01-.83.06-1.23.13v15.72c.4.07.81.12 1.23.13h3.77zm-8.61 4.36c0-.75-.6-1.35-1.34-1.36h-.08c-2.74 0-4.95 2.24-4.95 5s2.22 5 4.95 5h.08c.75-.02 1.34-.62 1.34-1.37zm16.67-1.08l.94 1.3v6.8l-.94 1.3c-.94 1.5-2.4 2.57-4.06 3.03V9.271c1.67.47 3.12 1.53 4.06 3.03"/><path fill="#aeddff" d="M14.94 4.74A4.47 4.47 0 0 1 18.57 3c2.39.04 4.35 1.99 4.41 4.38a4.49 4.49 0 0 1-4.49 4.6H10.9c-.55 0-.86-.63-.54-1.07l4.5-6.06c.02-.03.04-.05.06-.08z"/><path fill="#212121" d="M5.44 18.001a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></g></svg>',snail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="M2.5 3.75C2.5 2.79 3.29 2 4.25 2S6 2.79 6 3.75c0 .7-.41 1.3-1 1.58v3.52H3.5V5.33c-.59-.28-1-.88-1-1.58m3.5 0c0 .7.41 1.3 1 1.58v3.52h1.5V5.33c.59-.28 1-.88 1-1.58C9.5 2.79 8.71 2 7.75 2S6 2.79 6 3.75"/><path fill="#212121" d="M5 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/><path fill="#6d4534" d="M18 5c-4.76 0-8.87 2.77-10.81 6.78V21h-.51c1.65 4.66 6.09 8 11.32 8c6.63 0 12-5.37 12-12S24.63 5 18 5"/><path fill="#f3ad61" d="M11.96 23.35c-1.186-.81-1.99-2.306-1.99-3.76v-8.67c0-2.2-1.78-3.98-3.98-3.98A3.973 3.973 0 0 0 2 10.92v12.76c0 3.45 2.8 6.24 6.24 6.24l20.2.08c.86 0 1.56-.7 1.56-1.56v-.42a3.99 3.99 0 0 0-3.194-3.912A8.6 8.6 0 0 1 19.605 28a8.6 8.6 0 0 1-7.644-4.65"/><path fill="#a56953" d="M29 19.28a9.51 9.51 0 1 1-19.02 0a9.51 9.51 0 0 1 19.02 0m-2.78 2.5a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0"/></g></svg>',seedling:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M22.39 6.45c-2.29 0-4.32 1.08-5.63 2.75v-.47h-.01A7.155 7.155 0 0 0 9.61 2H2c0 3.95 3.2 7.15 7.15 7.15h5.19v12.46h2.42v-8h6.09c3.95 0 7.15-3.2 7.15-7.15h-7.61z"/><path fill="#6d4534" d="M15.55 21a8.99 8.99 0 0 0-8.99 8.99h17.99c0-4.965-4.025-8.99-9-8.99"/></g></svg>',crab:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M12.52 6.48h-.42V5H14c0 .82-.66 1.48-1.48 1.48m0 .33h-.42v1.48H14c0-.82-.66-1.48-1.48-1.48m6.96-.33H20V5h-2c0 .82.66 1.48 1.48 1.48m0 .33H20v1.48h-2c0-.82.66-1.48 1.48-1.48M7.618 12.739a.98.98 0 1 0-.956-.006a.87.87 0 0 0-.394.727a3.65 3.65 0 0 0 3.647 3.648a.868.868 0 1 0 0-1.736a1.913 1.913 0 0 1-1.912-1.912c0-.3-.153-.566-.385-.721m16.837 6.921c-.64.03-.98-.73-.53-1.18l4.33-4.33c.45-.45 1.21-.1 1.18.53c-.05 1.26-.56 2.5-1.52 3.46s-2.2 1.47-3.46 1.52m-1.26.66c-.64 0-.93.78-.46 1.21a5.21 5.21 0 0 0 7.04 0c.47-.43.17-1.21-.46-1.21zm-2.785 2.925a.7.7 0 0 1 .675-.895c1.26.01 2.52.47 3.51 1.4s1.55 2.15 1.65 3.4c.05.63-.7 1-1.16.57l-4.479-4.17c.432.726.696 1.565.73 2.47c.05 1.36-.42 2.61-1.24 3.57c-.41.48-1.2.22-1.22-.42l-.23-6.11a.695.695 0 0 1 1.19-.51q.316.323.573.695M9.205 21.59c.46-.43.17-1.2-.46-1.2h-6.06c-.63 0-.92.77-.46 1.2a5.156 5.156 0 0 0 6.98 0m-1.71-1.86c.63.03.97-.72.52-1.17l-4.29-4.3c-.45-.44-1.2-.1-1.17.53c.05 1.25.56 2.48 1.51 3.43s2.18 1.46 3.43 1.51m3.33 2.66c.63 0 .94.76.48 1.19l-4.44 4.14c-.46.42-1.2.06-1.15-.57c.1-1.25.64-2.46 1.63-3.38c.98-.91 2.23-1.37 3.48-1.38m1.33.28a.695.695 0 0 1 1.19.51l-.23 6.11c-.02.64-.81.9-1.22.42a5.17 5.17 0 0 1-1.24-3.57a5.22 5.22 0 0 1 1.5-3.47m13.418-9.21a.87.87 0 0 0-.39-.724a.98.98 0 1 0-.956 0a.87.87 0 0 0-.39.724a1.91 1.91 0 0 1-1.912 1.912a.868.868 0 0 0 0 1.736a3.65 3.65 0 0 0 3.648-3.648"/><path fill="#533566" d="M13 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/><path fill="#f8312f" d="M8.316 11.5H6C6 7.912 8.902 5 12.5 5v2.326A4.18 4.18 0 0 1 8.316 11.5m15.368 0H26C26 7.912 23.098 5 19.5 5v2.326a4.18 4.18 0 0 0 4.184 4.174M16 27c4.97 0 9-3.901 9-8.713C25 13.465 20.97 13 16 13s-9 .475-9 5.287S11.03 27 16 27"/></g></svg>',cookie:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M2 16c0 9.29 6.27 14 14 14s14-4.74 14-14c0-9.43-6.27-14-14-14S2 6.43 2 16"/><path fill="#6d4534" d="m19.89 8.32l.62.04a.95.95 0 0 0 1.01-1.01l-.04-.61a1.55 1.55 0 0 0-.22-.71a1.51 1.51 0 0 0-1.85-.59c-.8.34-1.14 1.28-.76 2.05c.23.5.72.79 1.24.83m7.03 6.29l.04-.62a.95.95 0 0 0-1.01-1.01l-.61.04c-.24.01-.49.09-.71.22a1.51 1.51 0 0 0-.59 1.85c.34.8 1.28 1.14 2.05.76c.5-.23.79-.72.83-1.24m-16.3 9.91l.05-.77c.04-.64.41-1.24 1.03-1.55a1.85 1.85 0 0 1 2.54.94c.35.84.04 1.82-.73 2.3c-.28.17-.58.26-.88.28l-.76.05c-.71.05-1.3-.54-1.25-1.25m9.78-9.33l.03-.46c.1-1.51-1.15-2.76-2.67-2.67l-.45.03c-.45.02-.9.15-1.32.4a2.93 2.93 0 0 0-1.22 3.62c.65 1.59 2.5 2.26 4.01 1.51c.98-.47 1.56-1.42 1.62-2.43M7.65 9l.03.42c.06.91.59 1.77 1.47 2.21c1.37.68 3.05.07 3.64-1.37c.49-1.21.02-2.63-1.11-3.29a2.65 2.65 0 0 0-1.2-.36l-.41-.03C8.7 6.49 7.57 7.63 7.65 9m16.61 13.82l.02.36c.08 1.17-.9 2.15-2.07 2.07l-.35-.02c-.35-.02-.7-.12-1.03-.31a2.28 2.28 0 0 1-.95-2.81A2.27 2.27 0 0 1 23 20.94c.76.36 1.21 1.09 1.26 1.88m-18.39-5.9l.04.62c.03.52.33 1.01.83 1.24c.77.38 1.71.04 2.05-.76c.28-.67.03-1.46-.59-1.85a1.55 1.55 0 0 0-.71-.22l-.61-.04a.95.95 0 0 0-1.01 1.01"/></g></svg>',"ice-cream":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="M26.778 4.439a.875.875 0 0 0-1.376-1.081l-6.16 7.842a.875.875 0 0 0 .868 1.397a.877.877 0 0 0 1.284.602l8.049-4.467a.875.875 0 1 0-.85-1.53l-7.066 3.922z"/><path fill="#6d4534" d="M15.59 17.75a6.75 6.75 0 1 1-13.5 0a6.75 6.75 0 0 1 13.5 0"/><path fill="#ff8687" d="M29.01 17.625a6.75 6.75 0 1 1-13.5 0a6.75 6.75 0 0 1 13.5 0"/><path fill="#feefc2" d="M24.078 14.922a8.078 8.078 0 1 1-16.156 0a8.078 8.078 0 0 1 16.156 0"/><path fill="#00a6ed" d="M2.722 21.042h25.494c.622 0 .97.71.58 1.194c-.82 1.02-1.98 2.413-2.655 3c-.726.63-2.171 1.55-3.104 2.124a4.16 4.16 0 0 0-1.396 1.399l-.135.224a2 2 0 0 1-1.715.97h-8.644a2 2 0 0 1-1.715-.97l-.134-.224a4.2 4.2 0 0 0-1.397-1.4c-.933-.573-2.378-1.494-3.103-2.124c-.675-.585-1.835-1.978-2.656-2.999a.734.734 0 0 1 .58-1.195"/><path fill="#f8312f" d="M17.95 5.983c0 1.096-.725 1.863-1.984 1.863s-1.983-.767-1.983-1.863a1.983 1.983 0 1 1 3.966 0"/></g></svg>',"cloud-with-snow":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M27.988 3.843C24.085.04 17.863.056 13.998 3.873A5.04 5.04 0 0 0 7.982 5.94A7.47 7.47 0 0 0 1 13.396c0 1.756.612 3.373 1.623 4.652A7.5 7.5 0 0 0 8.593 21h12.715a9.39 9.39 0 0 0 7.648-3.933c3.017-3.96 2.693-9.652-.968-13.224"/><path fill="#00a6ed" d="M10.849 23.03a.77.77 0 0 1 1.303 0l.32.509a.77.77 0 0 0 .737.354l.598-.066a.77.77 0 0 1 .812 1.019l-.197.568a.77.77 0 0 0 .181.796l.425.427a.77.77 0 0 1-.29 1.27l-.568.2a.77.77 0 0 0-.509.639l-.069.597a.77.77 0 0 1-1.174.565l-.51-.318a.77.77 0 0 0-.816 0l-.51.318a.77.77 0 0 1-1.174-.565l-.07-.597a.77.77 0 0 0-.508-.639l-.567-.2a.77.77 0 0 1-.29-1.27l.424-.427a.77.77 0 0 0 .181-.796l-.197-.568a.77.77 0 0 1 .813-1.019l.598.066a.77.77 0 0 0 .735-.354zm10.335-2.364a.588.588 0 0 0-.946-.301a.59.59 0 0 1-.616.088a.588.588 0 0 0-.826.553a.59.59 0 0 1-.315.536a.588.588 0 0 0-.083.99c.18.135.266.36.223.581a.588.588 0 0 0 .723.682a.59.59 0 0 1 .593.188c.28.329.806.254.983-.14a.59.59 0 0 1 .517-.346a.588.588 0 0 0 .504-.857a.59.59 0 0 1 .052-.62a.588.588 0 0 0-.356-.927a.59.59 0 0 1-.453-.427"/><path fill="#f3eef8" d="M14.575 4.71c3.467-3.557 9.158-3.617 12.715-.15c3.297 3.216 3.587 8.346.862 11.913A8.39 8.39 0 0 1 21.308 20H8.593a6.5 6.5 0 0 1-5.18-2.565A6.48 6.48 0 0 1 2 13.397a6.47 6.47 0 0 1 6.584-6.472a4.04 4.04 0 0 1 5.65-1.847q.164-.188.341-.368"/></g></svg>',"magic-wand":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#433b6b" d="m5 29l-2-2l16-16l2 2z"/><path fill="#f4f4f4" d="m18 12l2 2l1.674-1.667c.435-.445.435-1.24 0-1.675l-.33-.331C20.9 9.89 20 10 19.5 10.5zM2.338 29.252l.41.41c.44.452 1.17.452 1.61-.01L6 28.007L4 26l-1.662 1.627a1.146 1.146 0 0 0 0 1.625"/><path fill="#f9c23c" d="M27.87 4.423c.131.284.352.508.644.635l1.215.527a.453.453 0 0 1 0 .83l-1.205.527a1.22 1.22 0 0 0-.643.635l-.954 2.167c-.17.341-.683.341-.854 0l-.954-2.167a1.26 1.26 0 0 0-.643-.635l-1.205-.527a.453.453 0 0 1 0-.83l1.205-.527a1.22 1.22 0 0 0 .643-.635l.954-2.167c.17-.341.683-.341.854 0zm-11.429 1.18a.88.88 0 0 1-.458-.438l-.676-1.49c-.125-.233-.49-.233-.614 0l-.676 1.49a.85.85 0 0 1-.458.438l-.864.36a.309.309 0 0 0 0 .574l.864.36a.9.9 0 0 1 .458.438l.676 1.49c.125.233.49.233.614 0l.676-1.49a.85.85 0 0 1 .458-.438l.864-.36a.309.309 0 0 0 0-.574zm9.51 10.695a.95.95 0 0 1-.46-.48l-.686-1.622c-.128-.261-.492-.261-.61 0l-.685 1.623a.95.95 0 0 1-.46.479l-.857.392c-.257.13-.257.5 0 .62l.856.392a.95.95 0 0 1 .46.48l.686 1.622c.128.261.492.261.61 0l.685-1.622a.95.95 0 0 1 .46-.48l.857-.392c.257-.13.257-.5 0-.62zM12 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m18-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M19 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>',chestnut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M29.68 22.173L16 17L2.32 22.172c1.04 3.97 4.52 7.28 9.39 7.28h8.57c4.88 0 8.36-3.31 9.4-7.28"/><path fill="#6d4534" d="M29.68 22.173c.83-3.16.11-6.75-2.69-9.42l-9.59-9.19c-.78-.75-2.02-.75-2.8 0l-9.59 9.19c-2.8 2.68-3.51 6.26-2.69 9.42z"/></g></svg>'},d3={music:'<path d="M9 18V6l10-2v12M9 10l10-2"/><ellipse cx="6" cy="18" rx="3" ry="2.5" fill="currentColor"/><ellipse cx="16" cy="16" rx="3" ry="2.5" fill="currentColor"/>',sound:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 8a6 6 0 010 8M20 5a10 10 0 010 14"/>',pause:'<path d="M9 6v12M15 6v12"/>',play:'<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>',ff:'<path d="M4 6.5v11l7.5-5.5zM12.5 6.5v11l7.5-5.5z" fill="currentColor"/>',undo:'<path d="M9 13.5L4 8.5l5-5"/><path d="M4.5 8.5H14a5.5 5.5 0 010 11h-3.5"/>',shuffle:'<path d="M3.5 7h3.2c2.2 0 3.4 1 4.6 3l1.4 2.4c1.2 2 2.4 3 4.6 3h3.2"/><path d="M3.5 16.4h3.2c1.4 0 2.4-.4 3.2-1.2M13.7 8.2c.8-.8 1.8-1.2 3.2-1.2h3.6"/><path d="M18 4.5l2.5 2.5L18 9.5M18 13l2.5 2.5L18 18"/>',plus:'<path d="M12 5v14M5 12h14"/>',close:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',restart:'<path d="M19 12a7 7 0 11-2.05-4.95"/><path d="M19.5 4.5v4h-4"/>',map:'<path d="M3.5 6.5l5-2 7 2.5 5-2v13l-5 2-7-2.5-5 2z"/><path d="M8.5 4.5v13M15.5 7v13"/>',home:'<path d="M4 11.5L12 4.5l8 7"/><path d="M6.5 10v9.5h11V10"/><path d="M10 19.5v-5h4v5"/>',back:'<path d="M14.5 5.5L8 12l6.5 6.5"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',slot:'<rect x="4" y="7" width="12" height="12" rx="3"/><path d="M19.5 3.5v6M16.5 6.5h6"/>'};function Te(s,t=24){return`<svg class="ico" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d3[s]??""}</svg>`}function oe(s,t=28,e=""){return f3[s].replace("<svg ",`<svg class="emo ${e}" width="${t}" height="${t}" aria-hidden="true" `)}const p3={title:{ru:"Пиксельный пикник",en:"Pixel Picnic"},level:{ru:"Уровень {n}",en:"Level {n}"},play:{ru:"Играть",en:"Play"},next:{ru:"Дальше",en:"Next"},retry:{ru:"Заново",en:"Retry"},restart:{ru:"Начать заново",en:"Restart"},resume:{ru:"Продолжить",en:"Resume"},map:{ru:"Карта",en:"Map"},toMap:{ru:"К карте уровней",en:"Back to the map"},leaveLevel:{ru:"Выйти к карте уровней? Этот уровень начнётся заново.",en:"Leave for the level map? This level will start over."},leave:{ru:"Выйти",en:"Leave"},stay:{ru:"Играть дальше",en:"Keep playing"},newVersion:{ru:"Вышла новая версия — обновляю…",en:"A new version is out — reloading…"},album:{ru:"Альбом",en:"Album"},settings:{ru:"Настройки",en:"Settings"},paused:{ru:"Пауза",en:"Paused"},hard:{ru:"Сложный",en:"Hard"},superhard:{ru:"Очень сложный",en:"Super hard"},hardLevel:{ru:"Сложный уровень!",en:"Hard level!"},superhardLevel:{ru:"Очень сложный уровень!",en:"Super hard level!"},win1:{ru:"Отлично!",en:"Great!"},win2:{ru:"Великолепно!",en:"Awesome!"},win3:{ru:"Идеально!",en:"Perfect!"},addedAlbum:{ru:"Картинка добавлена в альбом",en:"Picture added to your album"},stuckTitle:{ru:"Колония застряла!",en:"The colony is stuck!"},stuckText:{ru:"Во всех слотах коробки, чьи кубики сейчас недоступны. Используй бустер или начни заново.",en:"Every slot holds a color the ants can’t reach yet. Use a booster or try again."},giveUp:{ru:"Сдаться",en:"Give up"},music:{ru:"Музыка",en:"Music"},sounds:{ru:"Звуки",en:"Sounds"},language:{ru:"Язык",en:"Language"},resetProgress:{ru:"Сбросить прогресс",en:"Reset progress"},resetConfirm:{ru:"Точно сбросить весь прогресс?",en:"Really reset all progress?"},credits:{ru:"Авторы и лицензии",en:"Credits & licenses"},close:{ru:"Закрыть",en:"Close"},buy:{ru:"Купить",en:"Buy"},notEnough:{ru:"Не хватает монет",en:"Not enough coins"},locked:{ru:"Откроется на уровне {n}",en:"Unlocks at level {n}"},world:{ru:"Мир {n}",en:"World {n}"},collected:{ru:"Собрано {a} из {b}",en:"Collected {a} of {b}"},speed:{ru:"Скорость",en:"Speed"},toastBlocked:{ru:"Сначала возьми коробку перед ней",en:"Take the box in front first"},toastFrozen:{ru:"Коробка заморожена — растает через несколько ходов",en:"Frozen — it thaws after a few taps"},toastSlots:{ru:"Нет свободных слотов",en:"No free slots"},toastLink:{ru:"Связанные коробки берутся только вместе",en:"Linked boxes must be taken together"},toastNoHint:{ru:"Отсюда уже не выбраться… Попробуй «Отменить» или «+Слот»",en:"No way out from here… Try Undo or +Slot"},toastGrab:{ru:"Выбери любую коробку в очереди",en:"Pick any box in the queue"},toastLinkSlots:{ru:"Для связанных коробок нужно два свободных слота",en:"Linked boxes need two free slots"},levelShort:{ru:"ур. {n}",en:"lv {n}"},booster_hint:{ru:"Подсказка",en:"Hint"},booster_undo:{ru:"Отменить",en:"Undo"},booster_slot:{ru:"+Слот",en:"+Slot"},booster_shuffle:{ru:"Перемешать",en:"Shuffle"},booster_grab:{ru:"Магнит",en:"Magnet"},boosterDesc_hint:{ru:"Солвер покажет лучшую следующую коробку.",en:"The solver shows the best next box."},boosterDesc_undo:{ru:"Отменяет последний ход.",en:"Takes back your last move."},boosterDesc_slot:{ru:"Добавляет ещё один слот до конца уровня.",en:"Adds one more slot for this level."},boosterDesc_shuffle:{ru:"Перемешивает очередь так, чтобы уровень можно было пройти.",en:"Reshuffles the queue into a solvable order."},boosterDesc_grab:{ru:"Достаёт любую коробку из глубины очереди.",en:"Pulls any box out of the queue."},newMechanic:{ru:"Новинка!",en:"New!"},gotIt:{ru:"Понятно!",en:"Got it!"},tutorial1:{ru:"Нажми на коробку — муравьи выбегут и съедят кубики своего цвета",en:"Tap a box — its ants will run out and eat cubes of their color"},tutorial2:{ru:"Муравьи заходят в рамку с любой стороны и берут кубик, если к нему есть свободный проход",en:"Ants come into the frame from any side and take a cube if there is a free way to it"},debug:{ru:"Режим отладки",en:"Debug mode"},debugHint:{ru:"Все уровни открыты, видна сложность",en:"All levels unlocked, difficulty visible"},debugLevels:{ru:"Все уровни",en:"All levels"},autoSolve:{ru:"Автопрохождение",en:"Auto-solve"},skipLevel:{ru:"Пропустить уровень",en:"Skip level"},on:{ru:"Вкл",en:"On"},auto:{ru:"Авто",en:"Auto"},shop:{ru:"Магазин",en:"Shop"},shopHouses:{ru:"Домики",en:"Houses"},shopAnts:{ru:"Муравьи",en:"Ants"},shopBoxes:{ru:"Коробки",en:"Boxes"},shopBoosters:{ru:"Бустеры",en:"Boosters"},wear:{ru:"Выбрать",en:"Use"},worn:{ru:"Выбрано",en:"In use"},bought:{ru:"Куплено!",en:"Bought!"},rewardLevel:{ru:"Уровень пройден",en:"Level cleared"},rewardHard:{ru:"Сложный уровень",en:"Hard level"},rewardSuperhard:{ru:"Очень сложный уровень",en:"Super hard level"},rewardReplay:{ru:"Повторное прохождение",en:"Replay"},rewardStars:{ru:"Звёзды",en:"Stars"},rewardFast:{ru:"Быстро!",en:"Quick!"},nightMode:{ru:"Ночной режим",en:"Night mode"},off:{ru:"Выкл",en:"Off"},noSolution:{ru:"Солвер не нашёл решения из этой позиции",en:"The solver found no solution from here"},tutorial3:{ru:"Не забивай слоты цветами, до которых муравьям не добраться!",en:"Don’t fill the slots with colors the ants can’t reach!"},mech_hidden_t:{ru:"Коробки-сюрпризы",en:"Mystery boxes"},mech_hidden_d:{ru:"Цвет коробки с «?» откроется, только когда она окажется первой в своём столбце.",en:"A “?” box reveals its color only when it reaches the front of its column."},mech_link_t:{ru:"Связанные коробки",en:"Linked boxes"},mech_link_d:{ru:"Коробки на цепочке берутся только вместе и занимают два слота.",en:"Chained boxes are taken together and need two free slots."},mech_fence_t:{ru:"Заборчик",en:"Fence"},mech_fence_d:{ru:"Через заборчик муравьи не пролезут — заходить придётся с других сторон рамки.",en:"Ants can’t get past a fence — they have to come in from the other sides of the frame."},mech_frozen_t:{ru:"Лёд",en:"Ice"},mech_frozen_d:{ru:"Замороженную коробку нельзя взять. Число на льду — сколько ходов осталось до оттаивания.",en:"A frozen box can’t be taken. The number shows how many taps until it thaws."},mech_gate_t:{ru:"Калитка",en:"Gate"},mech_gate_d:{ru:"В заборе есть калитка с оранжевыми столбиками — муравьи пройдут только через неё.",en:"The fence has a gate between orange-topped posts — that’s the only way in."},boosterUnlocked:{ru:"Новый бустер!",en:"New booster!"},free:{ru:"бесплатно ×{n}",en:"×{n} free"},endless:{ru:"Бесконечный режим",en:"Endless mode"},loading:{ru:"Муравьи готовятся…",en:"Ants are getting ready…"},progress:{ru:"Съедено",en:"Eaten"},creditPictures:{ru:"Эмодзи для картинок уровней",en:"Emoji for level pictures"},creditTools:{ru:"Шрифт и 3D",en:"Font & 3D"},creditTwemoji:{ru:"© Twitter, Inc. и участники",en:"© Twitter, Inc. and contributors"},creditAudio:{ru:"Музыка и звуки",en:"Music & sounds"},creditAudioNote:{ru:"Синтезируются в браузере.",en:"Synthesized in the browser."}};let nr=(navigator.language||"en").toLowerCase().startsWith("ru")?"ru":"en";function wa(s){nr=s,document.documentElement.lang=s}function Jr(){return nr}function at(s,t){let e=p3[s][nr];if(t)for(const[n,i]of Object.entries(t))e=e.replace(`{${n}}`,String(i));return e}function Ii(s){return s?s[nr]:""}const m3='<svg class="emo" width="SIZE" height="SIZE" viewBox="0 0 36 36" aria-hidden="true"><path d="M27 24A10 10 0 0 0 10 13" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M27 24A10 10 0 0 0 10 13" fill="none" stroke="#ff8a3d" stroke-width="5" stroke-linecap="round"/><path d="M7.5 20.5L3.8 10.8 14.6 11.6Z" fill="#ff8a3d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/></svg>',g3='<svg class="emo" width="SIZE" height="SIZE" viewBox="0 0 36 36" aria-hidden="true"><rect x="1.5" y="10" width="33" height="17" rx="5" fill="#e9c58c" stroke="#fff" stroke-width="1.5"/><rect x="5" y="13.5" width="6.5" height="10" rx="2" fill="#c79a5b"/><rect x="13.5" y="13.5" width="6.5" height="10" rx="2" fill="#c79a5b"/><rect x="21.5" y="11.5" width="11" height="14" rx="3" fill="#45c03a" stroke="#fff" stroke-width="1.2"/><path d="M27 15v7M23.5 18.5h7" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>';function _0(s,t=34){return s==="undo"?m3.replaceAll("SIZE",String(t)):s==="slot"?g3.replaceAll("SIZE",String(Math.round(t*1.06))):oe({hint:"light-bulb",undo:"light-bulb",slot:"light-bulb",shuffle:"game-die",grab:"magnet"}[s],t)}class v3{el;top;dock;title;tierEl;fill;progAnt;speedBtn;boosterBtns=new Map;tutorialEl=null;debugEl;handEl=null;sizeObserver=null;constructor(t,e){this.el=$("div",{class:"hud"});const n=$("button",{class:"btn round",html:Te("pause",26),attrs:{"aria-label":"pause"}});n.addEventListener("click",()=>{Rt.play("button"),e.onPause()}),this.title=$("div",{class:"level-name"}),this.tierEl=$("div",{class:"tier hidden"}),this.fill=$("div",{class:"progress-fill"}),this.progAnt=$("span",{html:oe("ant",28)}),this.progAnt.style.position="absolute",this.progAnt.style.left="0%";const i=$("div",{class:"progress"},this.fill,this.progAnt);this.progAnt.firstElementChild?.classList.add("prog-ant"),this.speedBtn=$("button",{class:"btn round white speed-btn",attrs:{"aria-label":at("speed")}}),this.speedBtn.addEventListener("click",()=>{Rt.play("button"),e.onSpeed()});const a=$("button",{class:"btn round white home-btn",html:Te("home",24),attrs:{"aria-label":at("toMap")}});a.addEventListener("click",()=>{Rt.play("button"),e.onHome()}),this.debugEl=$("div",{class:"hud-debug hidden"}),this.top=$("div",{class:"hud-top"},$("div",{class:"hud-left"},n,a),$("div",{class:"hud-title"},$("div",{class:"title-row"},this.title,this.tierEl),i,this.debugEl),this.speedBtn),this.dock=$("div",{class:"boosters"});for(const r of ai){const o=$("button",{class:"booster",attrs:{"aria-label":at(`booster_${r}`)}});o.addEventListener("click",l=>{l.stopPropagation(),Rt.unlock(),e.onBooster(r)}),this.boosterBtns.set(r,o),this.dock.append(o)}this.el.append(this.top,this.dock),t.append(this.el),this.setSpeed(1)}setLevel(t,e){this.title.textContent=at("level",{n:t}),this.tierEl.className="tier "+e+(e==="normal"?" hidden":""),this.tierEl.innerHTML=oe(e==="superhard"?"skull":"fire",16),this.tierEl.title=at(e==="superhard"?"superhard":"hard")}setDebug(t){this.debugEl.classList.toggle("hidden",!t),this.debugEl.textContent=t??""}setProgress(t,e){const n=e?t/e:0;this.fill.style.width=`calc(${(n*100).toFixed(2)}% - 4px)`,this.progAnt.style.left=`${(n*100).toFixed(2)}%`}setSpeed(t){this.speedBtn.innerHTML=`${Te(t===1?"play":"ff",22)}<span>${t}x</span>`}setBoosters(t){for(const e of ai){const n=this.boosterBtns.get(e),i=t[e];n.className=`booster b-${e}`+(i.locked?" locked":"")+(i.active?" active":"")+(!i.locked&&!i.usable?" dim":"");const a=`<span class="bicon">${_0(e)}</span><span class="bname">${at(`booster_${e}`)}</span>`;i.locked?n.innerHTML=a+oe("locked",24,"lock")+`<span class="lvl">${at("levelShort",{n:i.unlockAt})}</span>`:n.innerHTML=a+(i.count>0?`<span class="count">${i.count}</span>`:'<span class="plus">+</span>')}}boosterRect(t){return this.boosterBtns.get(t).getBoundingClientRect()}insets(){const t=this.top.getBoundingClientRect(),e=this.dock.getBoundingClientRect();return{top:t.bottom+6,bottom:window.innerHeight-e.top+8}}banner(t,e){const n=$("div",{class:"banner "+e,html:`${oe(e==="superhard"?"skull":"fire",34)} ${t}`});this.el.append(n),setTimeout(()=>n.remove(),2200)}showTutorial(t,e,n){this.hideTutorial(),this.tutorialEl=$("div",{class:"tutorial",text:t}),this.tutorialEl.style.top=`${e}px`,this.el.append(this.tutorialEl),n&&(this.handEl=$("div",{class:"hand",html:x3}),this.handEl.style.left=`${n.x-8}px`,this.handEl.style.top=`${n.y-4}px`,this.el.append(this.handEl))}hideTutorial(){this.tutorialEl?.remove(),this.handEl?.remove(),this.tutorialEl=this.handEl=null}observe(t){this.sizeObserver?.disconnect(),this.sizeObserver=new ResizeObserver(()=>t()),this.sizeObserver.observe(this.top),this.sizeObserver.observe(this.dock)}destroy(){this.sizeObserver?.disconnect(),this.el.remove()}}const x3='<svg viewBox="0 0 64 64" width="56" height="56"><path d="M22 30V12a5 5 0 0110 0v14l1-1a5 5 0 017 1l1 1a5 5 0 017 2 5 5 0 016 4v12c0 9-7 15-16 15h-4c-6 0-10-3-13-8l-7-12a4.5 4.5 0 017-5z" fill="#fff" stroke="#3b2a55" stroke-width="3.2" stroke-linejoin="round"/><path d="M33 26v8M41 28v7M48 32v5" stroke="#3b2a55" stroke-width="3" stroke-linecap="round"/></svg>';function ir(s,t,e={}){const n=l0(s),i=document.createElement("canvas"),a=Math.min(2,window.devicePixelRatio||1),r=Math.max(s.w,s.h),o=Math.max(1,Math.floor(t*a/r));i.width=s.w*o,i.height=s.h*o,i.style.width=`${s.w*o/a}px`,i.style.height=`${s.h*o/a}px`;const l=i.getContext("2d");e.bg&&(l.fillStyle=e.bg,l.fillRect(0,0,i.width,i.height));const c=e.rounded!==!1&&o>=5?o*.22:0,h=o>=5?Math.max(.5,o*.06):0;for(let f=0;f<s.h;f++)for(let u=0;u<s.w;u++){const d=n[f*s.w+u];d<0||(l.fillStyle=s.palette[d],c>0?(l.beginPath(),l.roundRect(u*o+h,f*o+h,o-h*2,o-h*2,c),l.fill(),l.fillStyle="rgba(255,255,255,0.18)",l.fillRect(u*o+h+c*.5,f*o+h+c*.3,o-h*2-c,Math.max(1,o*.12))):l.fillRect(u*o,f*o,o,o))}return i}const Es=112,Ts=150,eh=190,_3=150,nh=[["four-leaf-clover","tulip","lady-beetle","sunflower","honeybee","blossom","butterfly","seedling"],["mushroom","evergreen-tree","deciduous-tree","fallen-leaf","maple-leaf","snail","chestnut","herb"],["spiral-shell","tropical-fish","palm-tree","crab","sun"],["lollipop","candy","doughnut","cupcake","shortcake","cookie","ice-cream"],["crescent-moon","ringed-planet","rocket","comet","shooting-star","glowing-star"],["snowman","christmas-tree","snowflake","cloud-with-snow","wrapped-gift"],["crystal-ball","castle","unicorn","magic-wand","gem-stone","sparkles","crown"]],ih=new Map;function M3(s){const t=li(s);let e=ih.get(t.id);return e||(e=x0(t,512,99+s).toDataURL("image/jpeg",.86),ih.set(t.id,e)),e}class b3{el;scroll;inner;coinsEl;playBtn;debugBtn;cb;data;width=400;height=0;constructor(t,e){this.cb=e,this.el=$("div",{class:"map"}),this.scroll=$("div",{class:"map-scroll"}),this.inner=$("div",{class:"map-inner"}),this.scroll.append(this.inner),this.coinsEl=$("span");const n=$("div",{class:"pill",html:oe("coin",34)},this.coinsEl),i=$("button",{class:"btn round white",html:oe("framed-picture",30),attrs:{"aria-label":at("album")}});i.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),e.onAlbum()});const a=$("button",{class:"btn round white",html:oe("gear",30),attrs:{"aria-label":at("settings")}});a.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),e.onSettings()}),this.debugBtn=$("button",{class:"btn round white hidden",html:oe("lady-beetle",30),attrs:{"aria-label":at("debugLevels")}}),this.debugBtn.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),e.onDebug()});const r=$("button",{class:"btn round white",html:oe("shopping-bags",30),attrs:{"aria-label":at("shop")}});r.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),e.onShop()});const o=$("div",{class:"topbar"},n,$("div",{class:"right"},this.debugBtn,r,i,a));this.playBtn=Ya("","big green",()=>this.cb.onPlay(this.data.unlocked));const l=$("div",{class:"play-dock"},this.playBtn);this.el.append(this.scroll,o,l),t.append(this.el)}show(t){this.data=t,this.el.classList.remove("hidden"),this.render()}hide(){this.el.classList.add("hidden")}get visible(){return!this.el.classList.contains("hidden")}refreshTop(t=this.data.coins){this.data.coins=t,this.coinsEl.textContent=String(t)}nodeY(t){const e=Us(t),n=eh+(t-1)*Es+(e+1)*Ts-Ts*.5;return this.height-n}nodeX(t){const e=Math.min(120,this.width*.28);return this.width/2+Math.sin(t*.85)*e+Math.sin(t*.31)*e*.25}render(){const t=this.data;this.refreshTop(),this.debugBtn.classList.toggle("hidden",!t.debug),this.playBtn.innerHTML=`${Te("play",26)} ${at("level",{n:t.unlocked})}`;const e=t.debug?Math.max(t.total,t.unlocked+6):Math.max(t.unlocked+6,Math.min(t.total,ri)),n=Us(e)+1,i=Math.min(n*ri,Math.max(e,1));this.width=Math.min(520,window.innerWidth),this.height=eh+i*Es+n*Ts+_3;const a=this.inner;a.innerHTML="",a.style.width=this.width+"px",a.style.height=this.height+"px",this.el.style.background=li(Us(t.unlocked)).bg;for(let c=0;c<n;c++){const h=c*ri+1,f=(c+1)*ri,u=c===n-1?0:this.nodeY(f)-Es/2-Ts*.5,d=c===0?this.height:this.nodeY(h)+Es/2+Ts*.5,m=$("div",{class:"world-bg"});if(m.style.top=u+"px",m.style.height=d-u+"px",m.style.left="calc(50% - 50vw)",m.style.width="100vw",m.style.backgroundImage=`url(${M3(c)})`,m.style.backgroundColor=li(c).ground.base,a.append(m),c>0){const S=$("div",{class:"world-fade"});S.style.top=d-80+"px",S.style.left="calc(50% - 50vw)",S.style.width="100vw",S.style.background=`linear-gradient(180deg, ${li(c).ground.base}00, ${li(c).ground.base}cc 50%, ${li(c-1).ground.base}00)`,a.append(S)}const x=Rn[c%Rn.length],g=h>t.total&&t.total>0,p=$("div",{class:"world-banner",html:`<small>${at("world",{n:c+1})}${g?" · ∞":""}</small>${g?at("endless"):Ii(x.name)}`});p.style.top=this.nodeY(h)+Es*.5+18+"px",p.style.background=`linear-gradient(180deg, ${x.ui.accent}, ${y3(x.ui.accent,-.18)})`,a.append(p);const v=nh[c%nh.length];for(let S=0;S<9;S++){const _=h+Math.floor((S+.5)*(ri/9)),w=this.nodeY(_)+S*37%60-30,C=this.nodeX(_)>this.width/2?-1:1,b=this.width/2+C*(this.width*.36+S*53%40),T=38+S*29%26,R=$("div",{class:"deco",html:oe(v[S%v.length],T)});R.style.left=b-T/2+"px",R.style.top=w-T/2+"px",R.style.transform=`rotate(${S*47%40-20}deg)`,a.append(R)}}const r=[];for(let c=1;c<=i;c++)r.push([this.nodeX(c),this.nodeY(c)]);const o=S3(r),l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.classList.add("trail"),l.setAttribute("width",String(this.width)),l.setAttribute("height",String(this.height)),l.innerHTML=`<path d="${o}" fill="none" stroke="rgba(90,60,30,0.25)" stroke-width="34" stroke-linecap="round" transform="translate(0 4)"/><path d="${o}" fill="none" stroke="#fff4dc" stroke-opacity="0.92" stroke-width="30" stroke-linecap="round"/><path d="${o}" fill="none" stroke="#c7a57a" stroke-opacity="0.55" stroke-width="5" stroke-dasharray="2 14" stroke-linecap="round"/>`,a.append(l);for(let c=1;c<=i;c++){const h=km(c),f=(t.stars[c]??0)>0,u=c===t.unlocked,d=c>t.unlocked&&!t.debug,m=$("button",{class:`node ${h}`+(f?" done":"")+(u?" current":"")+(d?" locked":""),attrs:{"aria-label":at("level",{n:c})}});m.style.left=this.nodeX(c)+"px",m.style.top=this.nodeY(c)+"px";const x=f?t.picture(c):null;if(x){const g=ir(x,44,{rounded:!1});g.className="thumb",m.append(g,$("span",{class:"num-small",text:String(c)}))}else m.append(String(c));if(f){const g=t.stars[c];m.append($("span",{class:"nstars",html:[1,2,3].map(p=>oe("star",20,p<=g?"":"off")).join("")}))}if(!d&&h!=="normal"&&m.append($("span",{class:"badge",html:oe(h==="superhard"?"skull":"fire",26)})),d&&c===t.unlocked+1&&m.append($("span",{class:"lockico",html:oe("locked",22)})),t.debug){const g=t.stats(c);g&&m.append($("span",{class:"dbg",text:`r${Math.round((g.random??0)*100)} c${Math.round(g.casual*100)} 🧠${g.critical??"?"}`}))}if(m.addEventListener("click",()=>{if(Rt.unlock(),d){Rt.play("invalid"),m.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"translateX(0)"}],{duration:220});return}Rt.play("button"),this.cb.onPlay(c)}),a.append(m),u){const g=$("div",{class:"map-ant",html:oe("ant",50)});g.style.left=this.nodeX(c)+"px",g.style.top=this.nodeY(c)+"px",a.append(g)}}requestAnimationFrame(()=>{this.scroll.scrollTop=this.nodeY(t.unlocked)-this.scroll.clientHeight*.55})}}function S3(s){if(s.length<2)return"";let t=`M${s[0][0].toFixed(1)},${s[0][1].toFixed(1)}`;for(let e=0;e<s.length-1;e++){const n=s[Math.max(0,e-1)],i=s[e],a=s[e+1],r=s[Math.min(s.length-1,e+2)],o=i[0]+(a[0]-n[0])/6,l=i[1]+(a[1]-n[1])/6,c=a[0]-(r[0]-i[0])/6,h=a[1]-(r[1]-i[1])/6;t+=` C${o.toFixed(1)},${l.toFixed(1)} ${c.toFixed(1)},${h.toFixed(1)} ${a[0].toFixed(1)},${a[1].toFixed(1)}`}return t}function y3(s,t){const e=parseInt(s.slice(1),16),n=i=>Math.max(0,Math.min(255,Math.round(i+i*t)));return`rgb(${n(e>>16&255)},${n(e>>8&255)},${n(e&255)})`}class w3{el;list;countEl;constructor(t,e){this.el=$("div",{class:"album hidden"});const n=$("button",{class:"btn round white",html:Te("back",26),attrs:{"aria-label":"back"}});n.addEventListener("click",()=>{Rt.play("button"),e()}),this.countEl=$("span");const i=$("div",{class:"topbar"},n,$("div",{class:"pill",html:oe("framed-picture",32)},this.countEl));this.list=$("div"),this.el.append(this.list),t.append(this.el,i),i.classList.add("album-top","hidden"),this.top=i}top;show(t,e){this.el.classList.remove("hidden"),this.top.classList.remove("hidden"),this.list.innerHTML="";let n=0;const i=Math.ceil(t.length/ri);for(let a=0;a<i;a++){const r=Rn[a%Rn.length];this.list.append($("h2",{text:`${at("world",{n:a+1})} · ${Ii(r.name)}`}));const o=$("div",{class:"album-grid"});for(const l of t.filter(c=>Us(c.n)===a)){const c=(e[l.n]??0)>0;c&&n++;const h=$("div",{class:"album-card"+(c?"":" missing")}),f=$("div",{class:"pic"});if(c){const u=ir(l.picture,110,{rounded:!0});u.style.width=u.style.height="",f.append(u)}else f.textContent="?";h.append(f,$("span",{class:"nm",text:c?Ii(l.name)||`#${l.n}`:`#${l.n}`})),o.append(h)}this.list.append(o)}this.countEl.textContent=`${n} / ${t.length}`,this.el.scrollTop=0}hide(){this.el.classList.add("hidden"),this.top.classList.add("hidden")}}const Qi=s=>s===void 0?"—":`${Math.round(s*100)}%`;class E3{constructor(t,e,n){this.onPlay=n,this.el=$("div",{class:"album debug-list hidden"});const i=$("button",{class:"btn round white",html:Te("back",26),attrs:{"aria-label":"back"}});i.addEventListener("click",()=>{Rt.play("button"),e()}),this.summary=$("div",{class:"pill debug-pill"}),this.top=$("div",{class:"topbar album-top hidden"},i,this.summary),this.list=$("div"),this.el.append(this.list),t.append(this.el,this.top)}onPlay;el;list;top;summary;show(t,e){this.el.classList.remove("hidden"),this.top.classList.remove("hidden"),this.list.innerHTML="";const n={normal:[],hard:[],superhard:[]};for(const r of t)r.stats&&n[r.tier].push(r.stats.random??r.stats.casual);const i=r=>r.length?r.reduce((o,l)=>o+l,0)/r.length:void 0;this.summary.innerHTML=`${oe("lady-beetle",28)} ${t.length} · <span class="tier-dot normal"></span>${Qi(i(n.normal))} <span class="tier-dot hard"></span>${Qi(i(n.hard))} <span class="tier-dot superhard"></span>${Qi(i(n.superhard))}`,this.list.append($("p",{class:"debug-legend",html:"random / casual / greedy — доля побед симулированных игроков: жмёт наугад / берёт доступные цвета / жадный. Чем меньше, тем сложнее. 🧠 critical — сколько раз на пути к победе неверная коробка ведёт в тупик (надо подумать). В шапке — средний random по тирам. random / casual / greedy — win rates of simulated players (lower = harder); 🧠 critical — decisions where a wrong box loses."}));const a=Math.ceil(t.length/ri);for(let r=0;r<a;r++){const o=Rn[r%Rn.length];this.list.append($("h2",{text:`${at("world",{n:r+1})} · ${Ii(o.name)}`}));const l=$("div",{class:"debug-grid"});for(const c of t.filter(h=>Us(h.n)===r))l.append(this.card(c,e[c.n]??0));this.list.append(l)}this.el.scrollTop=0}card(t,e){const n=t.stats,i=t.boxes.filter(f=>f.hidden).length,a=new Set(t.boxes.filter(f=>f.link!==void 0).map(f=>f.link)).size,r=t.boxes.filter(f=>f.frozen).length,o=[i?`❓${i}`:"",a?`🔗${a}`:"",r?`❄️${r}`:"",t.fences?.length?`🚧${[...new Set(t.fences.map(f=>f.side[0].toUpperCase()))].join("")}`:""].filter(Boolean).join(" "),l=$("div",{class:"pic"}),c=ir(t.picture,120,{rounded:!0});c.style.width=c.style.height="",l.append(c);const h=$("button",{class:`debug-card ${t.tier}`},$("div",{class:"debug-head",html:`<b>#${t.n}</b> <span class="tier-dot ${t.tier}"></span> ${Ii(t.name)}${e?" "+"★".repeat(e):""}`}),l,$("div",{class:"debug-stats",html:`<b>random ${Qi(n?.random)}</b> · casual ${Qi(n?.casual)} · greedy ${Qi(n?.greedy)}<br>🧠 ${n?.critical??"?"} critical / ${n?.decisions??"?"} decisions<br>${t.picture.w}×${t.picture.h} · ${n?.pixels??"?"} cubes · ${t.picture.palette.length} col<br>${t.boxes.length} boxes · ${t.columns.length} columns · ${t.slots} slots`+(o?`<br>${o}`:"")}));return h.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),this.onPlay(t.n)}),h}hide(){this.el.classList.add("hidden"),this.top.classList.add("hidden")}}let M0;const Ci=[];function T3(s){M0=s}function As(){return Ci.length>0}function Kr(){for(;Ci.length;)Ci[Ci.length-1].close()}function pn(s){const t=s.cls?.split(" ").includes("utility-dialog"),e=document.activeElement,n=$("div",{class:"overlay"}),i=$("div",{class:"dialog"+(s.scroll?" scroll":"")+(s.cls?" "+s.cls:""),attrs:{role:"dialog","aria-modal":"true","aria-label":s.title}});i.append($("div",{class:"dialog-head "+(s.head??"blue"),text:s.title}));let a=!1;const r={el:i,close(){if(a)return;a=!0;const o=Ci.indexOf(r);o>=0&&Ci.splice(o,1),n.classList.add("out"),t&&e?.isConnected&&!e.closest(".overlay.out")&&e.focus({preventScroll:!0}),setTimeout(()=>n.remove(),180)}};if(s.closable!==!1&&s.onClose){const o=$("button",{class:"btn close-x",html:Te("close",22),attrs:{"aria-label":at("close")}});o.addEventListener("click",()=>{Rt.play("button"),r.close(),s.onClose?.()}),i.append(o)}for(const o of s.body??[])i.append(typeof o=="string"?$("p",{html:o}):o);if(s.buttons?.length){const o=$("div",{class:"actions"+(s.row?" row":"")});for(const l of s.buttons)o.append(Ya(l.label,l.cls??"",()=>{l.onClick()!==!1&&r.close()}));i.append(o)}if(n.append(i),M0.append(n),Ci.push(r),t){const o=()=>[...i.querySelectorAll("button:not(:disabled), a[href], input:not(:disabled)")];o()[0]?.focus({preventScroll:!0}),i.addEventListener("keydown",l=>{if(l.key==="Escape"&&s.onClose)l.stopPropagation(),r.close(),s.onClose();else if(l.key==="Tab"){const c=o(),h=c[0],f=c[c.length-1];l.shiftKey&&document.activeElement===h?(l.preventDefault(),f?.focus()):!l.shiftKey&&document.activeElement===f&&(l.preventDefault(),h?.focus())}})}return Rt.play("whoosh",{volume:.5}),r}let Ei=null,sh=0;function zn(s,t,e=1800){Ei||(Ei=$("div",{class:"toast"})),Ei.parentElement!==s&&s.append(Ei),Ei.textContent=t,Ei.classList.add("show"),clearTimeout(sh),sh=window.setTimeout(()=>Ei?.classList.remove("show"),e)}const Ml="pixel-picnic-save-v1";function Ia(){return{v:1,level:1,stars:{},coins:50,boosters:{hint:0,undo:0,slot:0,shuffle:0,grab:0},seen:[],settings:{music:.5,sfx:.8,lang:null,speed:1,debug:!1},looks:{house:"cottage",hat:"none",box:"classic",owned:[]}}}function A3(){try{const s=localStorage.getItem(Ml);if(!s)return Ia();const t=JSON.parse(s),e=Ia();return{...e,...t,boosters:{...e.boosters,...t.boosters??{}},settings:{...e.settings,...t.settings??{}},looks:{...e.looks,...t.looks??{}},stars:t.stars??{},seen:t.seen??[]}}catch{return Ia()}}function Oe(s){try{localStorage.setItem(Ml,JSON.stringify(s))}catch{}}function ah(){try{localStorage.removeItem(Ml)}catch{}return Ia()}const C3="modulepreload",R3=function(s,t){return new URL(s,t).href},rh={},P3=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let c=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(e.map(h=>{if(h=R3(h,n),h in rh)return;rh[h]=!0;const f=h.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(n)for(let m=r.length-1;m>=0;m--){const x=r[m];if(x.href===h&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":C3,f||(d.as="script"),d.crossOrigin="",d.href=h,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((m,x)=>{d.addEventListener("load",m),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return i.then(r=>{for(const o of r||[])o.status==="rejected"&&a(o.reason);return t().catch(a)})};let Da=null,Ea=null;const Na=new Map,Za=new Map;async function b0(){return Da||(Da=(await P3(()=>import("./levels-CYtbz-Kb.js"),[],import.meta.url)).default??[]),Da}function L3(){return Da??[]}async function I3(s){const t=await b0();if(s<=t.length)return t[s-1];const e=Za.get(s);if(e)return e;const n=await S0(s,t);return Za.set(s,n),n}function S0(s,t){Ea||(Ea=new Worker(new URL(""+new URL("genWorker-BiJGAYY5.js",import.meta.url).href,import.meta.url),{type:"module"}),Ea.onmessage=n=>{Na.get(n.data.n)?.(n.data.level),Na.delete(n.data.n)});const e=t[s*7919%t.length];return new Promise(n=>{Na.set(s,n),Ea.postMessage({n:s,picture:e.picture,name:e.name})})}function D3(s){const t=L3();s>t.length&&t.length&&!Za.has(s)&&!Na.has(s)&&S0(s,t).then(e=>Za.set(s,e))}const N3=[{id:"cottage",kind:"house",name:{ru:"Домик",en:"Cottage"},price:0},{id:"mushroom",kind:"house",name:{ru:"Грибной домик",en:"Mushroom House"},price:400},{id:"cabin",kind:"house",name:{ru:"Избушка",en:"Log Cabin"},price:600},{id:"igloo",kind:"house",name:{ru:"Иглу",en:"Igloo"},price:800},{id:"gingerbread",kind:"house",name:{ru:"Пряничный домик",en:"Gingerbread House"},price:1200},{id:"pumpkin",kind:"house",name:{ru:"Тыква",en:"Pumpkin House"},price:1800},{id:"tower",kind:"house",name:{ru:"Башня",en:"Castle Tower"},price:3e3}],U3=[{id:"none",kind:"hat",name:{ru:"Без шапки",en:"No hat"},price:0},{id:"party",kind:"hat",name:{ru:"Колпак",en:"Party Hat"},price:350},{id:"cap",kind:"hat",name:{ru:"Кепка",en:"Cap"},price:450},{id:"bow",kind:"hat",name:{ru:"Бантик",en:"Bow"},price:450},{id:"flower",kind:"hat",name:{ru:"Цветочек",en:"Flower"},price:600},{id:"sunglasses",kind:"hat",name:{ru:"Очки",en:"Sunglasses"},price:800},{id:"tophat",kind:"hat",name:{ru:"Цилиндр",en:"Top Hat"},price:1200},{id:"santa",kind:"hat",name:{ru:"Новогодняя шапка",en:"Santa Hat"},price:1200},{id:"crown",kind:"hat",name:{ru:"Корона",en:"Crown"},price:2500}],F3=[{id:"classic",kind:"box",name:{ru:"Классика",en:"Classic"},price:0},{id:"crate",kind:"box",name:{ru:"Деревянный ящик",en:"Wooden Crate"},price:350},{id:"basket",kind:"box",name:{ru:"Корзинка",en:"Picnic Basket"},price:550},{id:"metal",kind:"box",name:{ru:"Стальной ящик",en:"Metal Case"},price:800}];function oh(s){return`${s.kind}:${s.id}`}const lh=180;let ni=null,y0=null;const ch=new Map;function O3(){if(!ni){ni=new i0({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),ni.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ni.setSize(lh,lh,!1),ni.outputColorSpace=we,ni.toneMapping=Ja;const s=new s0,t=new Ga(ni);y0=t.fromScene(s,.04).texture,s.dispose(),t.dispose()}return ni}function B3(s){s.traverse(t=>{const e=t;if(!e.isMesh)return;e.geometry.dispose();const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n)i.dispose()})}function k3(s,t,e="#e8674a"){const n=`${s}:${t}:${e}`,i=ch.get(n);if(i)return i;const a=O3(),r=new ul;s==="box"&&(r.environment=y0,r.environmentIntensity=.7),r.add(new Wh("#fffaf0","#8a7a6a",1.4));const o=new $h("#fff4e0",2.2);o.position.set(-2,4,3),r.add(o);const l=new nn(28,1,.1,50);let c,h;if(s==="house"){const p=new v0(e,t);c=p.group,h=()=>p.dispose()}else if(s==="box"){const p=new u0(t),v=p.createBody("#aa75eb"),S=new Jo(128);S.draw("24",{fill:"#ffffff",stroke:"#503175",shadow:"rgba(0,0,0,0.2)"});const _=new Ye(.86,.86),w=new pi({map:S.texture,transparent:!0,depthWrite:!1}),E=new jt(_,w);E.rotation.x=-Math.PI/2,E.position.set(0,Vn+.012,h0),c=new Pe,c.add(v,E),h=()=>{v.material.dispose(),p.dispose(),_.dispose(),w.dispose(),S.dispose()}}else c=Zm("#e0663f",t),c.rotation.y=.55,h=()=>B3(c);r.add(c);const f=new di().setFromObject(c),u=f.getCenter(new P),d=f.getSize(new P).length(),m=s==="hat"?.62:s==="box"?.9:1.02;s==="hat"&&u.set(u.x,u.y+.12,u.z+.15);const x=d/(2*Math.tan(l.fov*Math.PI/360))*m;l.position.set(u.x+x*.35,u.y+x*(s==="box"?.7:.45),u.z+x*.82),l.lookAt(u),a.setClearColor(0,0),a.render(r,l);const g=a.domElement.toDataURL("image/png");return h(),ch.set(n,g),g}const z3={hidden:"red-question-mark",fence:"construction",link:"link",frozen:"snowflake",gate:"door"};class H3{save=A3();levels=[];stage=document.getElementById("stage");ui=document.getElementById("ui");view=null;game=null;hud=null;map;album;debugList;autoTimer=0;raf=0;last=0;rescued=!1;tutorial=0;loadingEl=null;darkQuery=window.matchMedia?.("(prefers-color-scheme: dark)");isNight(){const t=this.save.settings.night??"auto";return t==="on"||t==="auto"&&!!this.darkQuery?.matches}applyNight(){const t=this.isNight();document.documentElement.classList.toggle("night",t),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t?"#171a2b":"#86c45b"),this.view?.setNight(t)}async init(){this.applyNight(),this.darkQuery?.addEventListener("change",()=>this.applyNight()),this.save.settings.lang&&wa(this.save.settings.lang),this.loadingEl=$("div",{class:"loading"},$("div",{class:"logo",html:`${oe("ant",96)}<h1>${at("title")}</h1><p>${at("loading")}</p>`})),document.getElementById("app").append(this.loadingEl),this.save.settings.lang?wa(this.save.settings.lang):wa(Jr()),T3(this.ui),await Vm(),this.levels=await b0(),Rt.setMusicVolume(this.save.settings.music),Rt.setSfxVolume(this.save.settings.sfx),this.map=new b3(this.ui,{onPlay:c=>this.play(c),onShop:()=>this.openLooksShop("house"),onSettings:()=>this.openSettings(),onAlbum:()=>this.openAlbum(),onDebug:()=>this.openDebugList()}),this.album=new w3(this.ui,()=>{this.album.hide(),this.showMap()}),this.debugList=new E3(this.ui,()=>{this.debugList.hide(),this.showMap()},c=>{this.debugList.hide(),this.play(c)});const t=()=>Rt.unlock();window.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.checkUpdate()}),window.setInterval(()=>{this.checkUpdate()},5*6e4),window.setTimeout(()=>{this.checkUpdate()},4e3),window.addEventListener("keydown",c=>{c.key==="Escape"&&this.game&&!As()&&this.openPause()}),this.stage.addEventListener("pointerdown",c=>this.onStageTap(c)),this.stage.addEventListener("pointermove",c=>{if(c.pointerType!=="mouse"||!this.game||As())return;const h=this.stage.getBoundingClientRect(),f=this.game.paused?null:this.game.view.pickBox(c.clientX-h.left,c.clientY-h.top);this.stage.style.cursor=f!==null&&(this.game.grabMode||this.game.sim.canTake(f))?"pointer":""}),this.stage.addEventListener("pointerleave",()=>{this.stage.style.cursor=""});const e=new URLSearchParams(location.search);e.has("reset")&&(this.save=ah()),e.has("debug")&&(this.save.settings.debug=e.get("debug")!=="0",Oe(this.save));const n=Number(e.get("boosters"));if(n>0)for(const c of ai)this.save.boosters[c]=n;const i=Number(e.get("coins"));i>0&&(this.save.coins=i);const a=e.get("looks")?.split(",");a?.[0]&&(this.save.looks.house=a[0]),a?.[1]&&(this.save.looks.hat=a[1]),a?.[2]&&(this.save.looks.box=a[2]);const r=Number(e.get("progress"));if(r>1){for(let c=1;c<r;c++)this.save.stars[c]=this.save.stars[c]??(c%4===0?2:3);this.save.level=Math.max(this.save.level,r);for(const c of["tutorial",...ai.map(h=>"booster:"+h)])this.save.seen.includes(c)||this.save.seen.push(c);Oe(this.save)}e.has("demo")&&this.startDemo(Number(e.get("demo"))||0);const o=Number(e.get("level"));if(o>0){this.save.level=Math.max(this.save.level,o);for(const c of["tutorial",...ai.map(h=>"booster:"+h)])this.save.seen.includes(c)||this.save.seen.push(c);Oe(this.save),this.play(o)}else this.showMap();const l=this.loadingEl;setTimeout(()=>{l?.classList.add("out"),setTimeout(()=>l?.remove(),450)},150)}startDemo(t){let e=0,n=-1;setInterval(()=>{this.game&&performance.now()-this.last>120&&(this.last=performance.now(),this.game.update(.05,this.last/1e3))},50),setInterval(()=>{const i=this.game;if(!i||As()||i.status!=="playing"||(i.level.n!==n&&(n=i.level.n,e=0),t&&e>=t))return;const a=i.level.solution?.[e];a!==void 0&&i.sim.isQuiet()&&i.takeBox(a)&&e++},250)}mapData(){return{unlocked:this.save.level,stars:this.save.stars,coins:this.save.coins,total:this.levels.length,picture:t=>this.levels[t-1]?.picture??null,debug:this.save.settings.debug,stats:t=>this.levels[t-1]?.stats}}openDebugList(){this.map.hide(),this.debugList.show(this.levels,this.save.stars)}updateReady=!1;async checkUpdate(){if(!this.updateReady)try{const t=await fetch(`version.json?t=${Date.now()}`,{cache:"no-store"});if(!t.ok)return;const{id:e}=await t.json();if(!e||e==="2026-09-26T09:03:42.419Z")return;this.updateReady=!0,this.game||this.reloadForUpdate()}catch{}}reloadForUpdate(){zn(this.ui,at("newVersion"),2e3),window.setTimeout(()=>location.reload(),700)}showMap(){if(this.updateReady)return this.reloadForUpdate();this.stopLoop(),this.stopAuto(),this.game?.dispose(),this.game=null,this.hud?.destroy(),this.hud=null,this.stage.style.visibility="hidden",this.map.show(this.mapData()),Rt.startMusic(li(Math.floor((this.save.level-1)/20)).music)}openAlbum(){this.map.hide(),this.album.show(this.levels,this.save.stars)}ensureView(){return this.view||(this.view=new s3(this.stage,{onPick:()=>this.game?.onPick(),onDeliver:()=>this.game?.onDeliver()}),this.view.setNight(this.isNight()),this.view.resize(window.innerWidth,window.innerHeight)),this.view}async play(t){Kr();const e=await I3(t),n=Im(t).filter(a=>!this.save.seen.includes("booster:"+a)),i=Lm(t).filter(a=>!this.save.seen.includes("mech:"+a));this.startLevel(e);for(const a of i)this.introMechanic(a);for(const a of n)this.introBooster(a);D3(t+1)}startLevel(t){this.map.hide(),this.album.hide(),this.game?.dispose(),this.hud?.destroy();const e=this.ensureView();e.looks={house:this.save.looks.house,hat:this.save.looks.hat,box:this.save.looks.box},this.stage.style.visibility="visible";const n=li(t.world);if(this.hud=new v3(this.ui,{onPause:()=>this.openPause(),onHome:()=>this.confirmLeave(),onSpeed:()=>this.cycleSpeed(),onBooster:a=>this.onBooster(a)}),this.hud.setLevel(t.n,t.tier),this.hud.setProgress(0,1),this.stopAuto(),this.save.settings.debug){const a=t.stats,r=o=>`${Math.round(o*100)}%`;this.hud.setDebug(a?`random ${a.random===void 0?"?":r(a.random)} · casual ${r(a.casual)} · greedy ${r(a.greedy)} · planner ${a.planner===void 0?"?":r(a.planner)} · 🧠${a.critical??"?"}/${a.decisions??"?"} · ${t.boxes.length} boxes`:`${t.boxes.length} boxes · ${t.picture.palette.length} col`)}const i=this.hud.insets();e.insets={top:i.top,bottom:i.bottom,left:0,right:0},this.hud.observe(()=>this.onResize()),this.rescued=!1,this.game=new u3(e,t,n,{onWin:a=>this.onWin(a),onStuck:()=>this.onStuck(),onProgress:(a,r)=>this.hud?.setProgress(a,r),onToast:a=>this.toast(a),onChange:()=>this.refreshBoosters()}),this.game.speed=this.save.settings.speed,this.hud.setSpeed(this.game.speed),this.refreshBoosters(),Rt.startMusic(n.music),t.tier!=="normal"&&setTimeout(()=>{this.hud?.banner(at(t.tier==="superhard"?"superhardLevel":"hardLevel"),t.tier),Rt.play("unlock",{volume:.6})},350),this.tutorial=t.n===1&&!this.save.seen.includes("tutorial")?1:0,this.tutorial&&setTimeout(()=>this.showTutorialStep(),600),this.startLoop()}startLoop(){this.stopLoop(),this.last=performance.now();const t=e=>{const n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.game?.update(n,e/1e3),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}stopLoop(){cancelAnimationFrame(this.raf),this.raf=0}onResize(){if(this.view&&(this.view.resize(window.innerWidth,window.innerHeight),this.hud&&this.game)){const t=this.hud.insets();this.view.insets={top:t.top,bottom:t.bottom,left:0,right:0},this.view.relayout(!1)}this.map.visible&&this.map.render()}onStageTap(t){if(!this.game||As())return;const e=this.stage.getBoundingClientRect(),n=this.game.taps;this.game.tap(t.clientX-e.left,t.clientY-e.top),this.game.taps!==n&&this.tutorial&&(this.tutorial++,this.showTutorialStep())}cycleSpeed(){if(!this.game)return;const t=this.game.speed>=3?1:this.game.speed+1;this.game.speed=t,this.save.settings.speed=t,Oe(this.save),this.hud?.setSpeed(t)}toast(t){let n={blocked:"toastBlocked",frozen:"toastFrozen",slots:"toastSlots",link:"toastLink",nohint:"toastNoHint",grab:"toastGrab"}[t];t==="slots"&&this.game&&this.game.sim.freeSlots()===1&&(n="toastLinkSlots"),zn(this.ui,at(n),t==="nohint"?3e3:1800)}showTutorialStep(){const t=this.game,e=this.hud;if(!t||!e)return;const n=Math.max(90,e.insets().top+4);if(this.tutorial===1){const i=t.sim.clone(),a=i.legalMoves(),r=i.exposedCounts(),o=t.level.solution?.[0],l=o!==void 0&&i.canTake(o)?o:a.find(h=>r[i.boxColor(h)]>0)??a[0],c=t.view.toScreen(t.view.queue.boxTop(l,new P));e.showTutorial(at("tutorial1"),n,c)}else this.tutorial===2?(e.showTutorial(at("tutorial2"),n),setTimeout(()=>this.tutorial===2&&e.hideTutorial(),5e3)):this.tutorial===3?(e.showTutorial(at("tutorial3"),n),setTimeout(()=>this.tutorial===3&&e.hideTutorial(),5e3)):(e.hideTutorial(),this.tutorial=0,this.markSeen("tutorial"))}markSeen(t){this.save.seen.includes(t)||(this.save.seen.push(t),Oe(this.save))}boosterState(){const t=this.game,e=t?.level.n??1,n={};for(const i of ai)n[i]={count:this.save.boosters[i],locked:e<ts[i],unlockAt:ts[i],active:i==="grab"&&!!t?.grabMode,usable:!!t&&t.canUse(i)};return n}refreshBoosters(){this.hud?.setBoosters(this.boosterState())}onBooster(t){const e=this.game;if(e){if(e.level.n<ts[t]){Rt.play("invalid"),zn(this.ui,at("locked",{n:ts[t]}));return}if(t==="grab"&&e.grabMode){e.cancelGrab(),this.save.boosters.grab++,Oe(this.save),this.refreshBoosters();return}if(this.save.boosters[t]<=0){this.openShop(t);return}if(!e.canUse(t)){Rt.play("invalid"),t==="grab"&&zn(this.ui,at("toastSlots"));return}this.spendBooster(t)}}spendBooster(t,e=!1){const n=this.game;if(!n)return!1;const i=n.use(t);return i&&(this.save.boosters[t]--,e&&(this.rescued=!0),Oe(this.save)),this.refreshBoosters(),i}openLooksShop(t){const e=$("p",{class:"shop-coins",attrs:{"aria-live":"polite"}}),n=$("div",{class:"seg shop-tabs",attrs:{role:"tablist","aria-label":at("shop")}}),i=$("div",{class:"shop-grid",attrs:{id:"shop-items",role:"tabpanel"}}),a=[["house",at("shopHouses")],["hat",at("shopAnts")],["box",at("shopBoxes")],["booster",at("shopBoosters")]],r=new Map,o=new Map;let l=[];const c=()=>{e.innerHTML=`${oe("coin",26)} ${this.save.coins}`;for(const u of l)u()},h=()=>{Oe(this.save),c(),this.map.refreshTop(this.save.coins)},f=()=>{i.replaceChildren(),l=[];for(const[u,d]of r)d.classList.toggle("on",u===t),d.setAttribute("aria-selected",String(u===t)),d.tabIndex=u===t?0:-1;if(i.setAttribute("aria-labelledby",`shop-tab-${t}`),t==="booster")for(const u of ai){const d=$("span",{class:"price"}),m=$("button",{class:"look-card"},$("span",{class:"look-pic booster-pic",html:Qr(u)}),$("span",{class:"nm",text:at(`booster_${u}`)}),d);l.push(()=>{d.innerHTML=`×${this.save.boosters[u]} · ${oe("coin",18)} ${bs[u]}`}),m.addEventListener("click",()=>{if(this.save.coins<bs[u]){Rt.play("invalid"),zn(this.ui,at("notEnough"));return}this.save.coins-=bs[u],this.save.boosters[u]++,Rt.play("coin"),h()}),i.append(m)}else{const u=t==="house"?N3:t==="hat"?U3:F3,d=this.save.looks;for(const m of u){const x=()=>m.price===0||d.owned.includes(oh(m)),g=$("span",{class:"price"}),p=$("button",{class:"look-card"},$("img",{class:"look-pic",attrs:{src:k3(m.kind,m.id),alt:""}}),$("span",{class:"nm",text:Ii(m.name)}),g);l.push(()=>{const v=d[m.kind]===m.id;p.classList.toggle("worn",v),p.classList.toggle("owned",!v&&x()),p.setAttribute("aria-pressed",String(v)),g.innerHTML=v?`${Te("check",16)} ${at("worn")}`:x()?at("wear"):`${oe("coin",18)} ${m.price}`}),p.addEventListener("click",()=>{if(d[m.kind]!==m.id){if(x())Rt.play("button");else{if(this.save.coins<m.price){Rt.play("invalid"),zn(this.ui,at("notEnough"));return}this.save.coins-=m.price,d.owned.push(oh(m)),Rt.play("unlock"),zn(this.ui,at("bought"))}d[m.kind]=m.id,h()}}),i.append(p)}}c(),i.scrollTop=o.get(t)??0};for(const[u,d]of a){const m=$("button",{text:d,attrs:{id:`shop-tab-${u}`,role:"tab","aria-controls":"shop-items"}});m.addEventListener("click",()=>{t!==u&&(o.set(t,i.scrollTop),t=u,Rt.play("button"),f())}),m.addEventListener("keydown",x=>{const g=a.findIndex(([S])=>S===u),p=x.key==="ArrowRight"?(g+1)%a.length:x.key==="ArrowLeft"?(g+a.length-1)%a.length:x.key==="Home"?0:x.key==="End"?a.length-1:-1;if(p<0)return;x.preventDefault();const v=r.get(a[p][0]);v.focus(),v.click()}),r.set(u,m),n.append(m)}pn({title:at("shop"),head:"purple",body:[e,n,i],onClose:()=>{},cls:"wide shop-dialog"}),f()}openShop(t,e=!1){const n=bs[t],i=this.game;i&&(i.paused=!0);const a=$("div",{class:"mech-art",html:Qr(t)});pn({title:at(`booster_${t}`),head:"purple",body:[a,at(`boosterDesc_${t}`),$("p",{class:"subtle",html:`${oe("coin",20)} ${this.save.coins}`})],buttons:[{label:`${at("buy")} <span class="price">${oe("coin",26)} ${n}</span>`,cls:"green",onClick:()=>this.save.coins<n?(Rt.play("invalid"),zn(this.ui,at("notEnough")),!1):(this.save.coins-=n,this.save.boosters[t]++,Oe(this.save),Rt.play("coin"),i&&(i.paused=!1),this.spendBooster(t,e),!0)}],onClose:()=>{i&&(i.paused=!1),e&&i?.status==="stuck"&&this.onStuck()}})}onWin(t){const e=t.level.n,n=t.stars(this.rescued),i=this.save.stars[e]??0,a=t.playTime<=Rm(t.level),r=Pm(t.level.tier,n,a,i),o=i===0;this.save.stars[e]=Math.max(i,n),this.save.coins+=r.total,e>=this.save.level&&(this.save.level=e+1),Oe(this.save);const l=t.celebrate();Rt.duck(.25,2.5),Rt.play("win"),this.tutorial&&(this.hud?.hideTutorial(),this.tutorial=0,this.markSeen("tutorial"));const c=t.playTime;setTimeout(()=>this.showWinDialog(t.level,n,r,c,o),Math.max(900,l*1e3+200))}showWinDialog(t,e,n,i,a){const r=ir(t.picture,130,{rounded:!0,bg:"#fffaf0"});r.classList.add("pic-thumb");const o=$("div",{class:"stars",html:[1,2,3].map(()=>oe("star",64,"star")).join("")}),l=Ii(t.name),c=`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,h=(x,g)=>$("div",{class:"reward-line"+(g?"":" off"),html:`<span>${x}</span><b>+${g}</b>`}),f=$("div",{class:"reward"},h(at(a?t.tier==="normal"?"rewardLevel":t.tier==="hard"?"rewardHard":"rewardSuperhard":"rewardReplay"),n.base),h(at("rewardStars"),n.stars),h(`${at("rewardFast")} · ${c}`,n.speed)),u=$("div",{class:"coins-gain",html:`${oe("coin",30)} +${n.total}`}),d=[o,r];l&&d.push($("p",{html:`<b>${l}</b>`,style:"margin:0 0 6px"})),d.push(f,u),a&&d.push($("p",{class:"subtle",text:at("addedAlbum")})),pn({title:at(e===3?"win3":e===2?"win2":"win1"),head:"green",body:d,buttons:[{label:`${at("next")} ${Te("play",22)}`,cls:"green big",onClick:()=>{this.play(t.n+1)}},{label:`${Te("map",22)} ${at("map")}`,cls:"white small",onClick:()=>this.showMap()}]}),o.querySelectorAll(".star").forEach((x,g)=>{g<e&&setTimeout(()=>{x.classList.add("on"),Rt.play("star",{pitch:g})},350+g*330)}),setTimeout(()=>Rt.play("coin"),350+e*330+150)}onStuck(){const t=this.game;if(!t)return;Rt.play("lose");const e=[],n=t.level.n,i=a=>{if(n<ts[a])return;const r=this.save.boosters[a];e.push({label:`${at(`booster_${a}`)} ${r>0?`<span class="price">×${r}</span>`:`<span class="price">${oe("coin",24)} ${bs[a]}</span>`}`,cls:a==="slot"?"green":"blue",onClick:()=>{r>0?this.spendBooster(a,!0):setTimeout(()=>this.openShop(a,!0),200)}})};i("slot"),i("undo"),i("shuffle"),e.push({label:`${Te("restart",22)} ${at("retry")}`,cls:"white",onClick:()=>{this.restart()}}),pn({title:at("stuckTitle"),head:"red",body:[at("stuckText")],buttons:e})}async restart(){if(!this.game)return;const t=this.game.level;this.startLevel(t)}openPause(){const t=this.game;if(!t)return;t.paused=!0;const e=[{label:`${Te("play",22)} ${at("resume")}`,cls:"green",onClick:()=>{t.paused=!1}},{label:`${Te("restart",22)} ${at("restart")}`,cls:"blue",onClick:()=>{this.restart()}},{label:`${Te("home",22)} ${at("toMap")}`,cls:"white",onClick:()=>this.showMap()}];this.save.settings.debug&&e.push({label:`${oe("lady-beetle",24)} ${at("autoSolve")}`,cls:"purple small",onClick:()=>{t.paused=!1,this.startAuto()}},{label:`${Te("ff",20)} ${at("skipLevel")}`,cls:"purple small",onClick:()=>this.skipLevel()}),pn({title:at("paused"),head:"purple",body:[this.volumeRow("music"),this.volumeRow("sfx")],buttons:e,onClose:()=>{t.paused=!1}})}confirmLeave(){const t=this.game;if(!t)return this.showMap();if(t.taps===0)return this.showMap();t.paused=!0,pn({title:at("toMap"),head:"purple",body:[$("p",{text:at("leaveLevel")})],buttons:[{label:`${Te("home",22)} ${at("leave")}`,cls:"blue",onClick:()=>this.showMap()},{label:`${Te("play",22)} ${at("stay")}`,cls:"green",onClick:()=>{t.paused=!1}}],onClose:()=>{t.paused=!1}})}startAuto(){this.stopAuto();const t=this.game;t&&(t.speed=3,this.hud?.setSpeed(3),this.autoTimer=window.setInterval(()=>{if(this.game!==t)return this.stopAuto();if(As())return;const e=t.autoStep();e==="stuck"?(this.stopAuto(),zn(this.ui,at("noSolution"),2500)):e==="done"&&this.stopAuto()},200))}stopAuto(){clearInterval(this.autoTimer),this.autoTimer=0}skipLevel(){const t=this.game;if(!t)return;const e=t.level.n;this.save.stars[e]=Math.max(this.save.stars[e]??0,1),e>=this.save.level&&(this.save.level=e+1),Oe(this.save),this.play(e+1)}volumeRow(t){const e=at(t==="music"?"music":"sounds"),n=$("input",{attrs:{id:`volume-${t}`,type:"range",min:"0",max:"1",step:"0.05","aria-label":e}});n.value=String(this.save.settings[t]);const i=$("output",{class:"volume-value",attrs:{for:n.id}}),a=()=>{const r=`${Math.round(Number(n.value)*100)}%`;i.textContent=r,n.style.setProperty("--volume",r),n.setAttribute("aria-valuetext",r)};return a(),n.addEventListener("input",()=>{const r=Number(n.value);this.save.settings[t]=r,t==="music"?Rt.setMusicVolume(r):Rt.setSfxVolume(r),a(),Oe(this.save)}),n.addEventListener("change",()=>t==="sfx"&&Rt.play("tap")),$("div",{class:"setting-row volume-setting"},$("label",{class:"setting-name",attrs:{for:n.id}},$("span",{class:`setting-icon ${t}`,html:Te(t==="music"?"music":"sound",20)}),e),$("div",{class:"volume-control"},n,i))}openSettings(){const t=$("div",{class:"seg",attrs:{role:"group","aria-label":at("language")}});["ru","en"].forEach(h=>{const f=$("button",{class:Jr()===h?"on":"",text:h==="ru"?"Русский":"English",attrs:{"aria-pressed":String(Jr()===h)}});f.addEventListener("click",()=>{Rt.play("button"),this.save.settings.lang=h,Oe(this.save),wa(h),Kr(),this.map.render(),this.openSettings()}),t.append(f)});const e=$("div",{class:"setting-row"},$("span",{text:at("language")}),t),n=(h,f)=>{for(const u of h.querySelectorAll("button"))u.classList.toggle("on",u===f),u.setAttribute("aria-pressed",String(u===f))},i=$("div",{class:"seg",attrs:{role:"group","aria-label":at("debug")}});[!0,!1].forEach(h=>{const f=$("button",{class:this.save.settings.debug===h?"on":"",text:at(h?"on":"off"),attrs:{"aria-pressed":String(this.save.settings.debug===h)}});f.addEventListener("click",()=>{Rt.play("button"),this.save.settings.debug=h,Oe(this.save),n(i,f),this.map.show(this.mapData())}),i.append(f)});const a=$("div",{class:"setting-row debug-setting"},$("span",{class:"setting-name"},$("span",{html:oe("lady-beetle",24)}),at("debug")),i,$("small",{class:"setting-hint",text:at("debugHint")})),r=$("div",{class:"seg",attrs:{role:"group","aria-label":at("nightMode")}});["auto","on","off"].forEach(h=>{const f=$("button",{class:(this.save.settings.night??"auto")===h?"on":"",text:at(h==="auto"?"auto":h),attrs:{"aria-pressed":String((this.save.settings.night??"auto")===h)}});f.addEventListener("click",()=>{Rt.play("button"),this.save.settings.night=h,Oe(this.save),this.applyNight(),n(r,f)}),r.append(f)});const o=$("div",{class:"setting-row"},$("span",{class:"setting-name"},$("span",{html:oe("crescent-moon",24)}),at("nightMode")),r),l=Ya(at("credits"),"white small settings-link",()=>this.openCredits());l.append($("span",{class:"forward-icon",html:Te("back",18)}));const c=Ya(at("resetProgress"),"red small settings-reset",()=>{pn({title:at("resetProgress"),head:"red",body:[at("resetConfirm")],row:!0,buttons:[{label:Te("check",24),cls:"red",onClick:()=>{this.save=ah(),Oe(this.save),Kr(),this.showMap()}},{label:Te("close",24),cls:"white",onClick:()=>{}}]})});pn({title:at("settings"),head:"purple",cls:"utility-dialog settings-dialog",body:[$("div",{class:"utility-content"},$("div",{class:"settings-section"},this.volumeRow("music"),this.volumeRow("sfx")),$("div",{class:"settings-section"},e,o),$("div",{class:"settings-section"},a),$("div",{class:"settings-footer"},l,c))],onClose:()=>{}})}openCredits(){const t=(a,r)=>$("a",{text:a,attrs:{href:r,target:"_blank",rel:"noopener noreferrer"}}),e=(a,r,o,l,c)=>$("li",{},$("div",{class:"credit-line"},t(a,r),t(o,l)),c&&$("small",{text:c})),n=$("section",{class:"credit-section"},$("h3",{text:at("creditPictures")}),$("ul",{class:"credit-list"},e("Microsoft Fluent Emoji","https://github.com/microsoft/fluentui-emoji","MIT","https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE"),e("Twemoji","https://github.com/jdecked/twemoji","CC BY 4.0","https://creativecommons.org/licenses/by/4.0/",at("creditTwemoji")),e("Google Noto Emoji","https://github.com/googlefonts/noto-emoji","Apache 2.0","https://github.com/googlefonts/noto-emoji/blob/main/LICENSE","© Google Inc."))),i=$("section",{class:"credit-section"},$("h3",{text:at("creditTools")}),$("ul",{class:"credit-list"},e("Nunito","https://fonts.google.com/specimen/Nunito","SIL OFL 1.1","https://openfontlicense.org/"),e("three.js","https://threejs.org/","MIT","https://github.com/mrdoob/three.js/blob/dev/LICENSE")));pn({title:at("credits"),head:"blue",cls:"utility-dialog credits-dialog",body:[$("div",{class:"utility-content"},n,i,$("section",{class:"credit-section"},$("h3",{text:at("creditAudio")}),$("p",{text:at("creditAudioNote")})))],onClose:()=>{},buttons:[{label:at("close"),cls:"white small utility-done",onClick:()=>{}}]})}introMechanic(t){const e=this.game;e&&(e.paused=!0),pn({title:at("newMechanic"),head:"green",body:[$("div",{class:"mech-art",html:oe(z3[t],84)}),$("p",{html:`<b style="font-size:21px">${at(`mech_${t}_t`)}</b>`}),at(`mech_${t}_d`)],buttons:[{label:at("gotIt"),cls:"green",onClick:()=>{this.markSeen("mech:"+t),e&&(e.paused=!1)}}]}),Rt.play("unlock")}introBooster(t){const e=this.game;e&&(e.paused=!0),this.save.boosters[t]+=Fc,this.markSeen("booster:"+t),Oe(this.save),this.refreshBoosters(),pn({title:at("boosterUnlocked"),head:"purple",body:[$("div",{class:"mech-art",html:Qr(t)}),$("p",{html:`<b style="font-size:21px">${at(`booster_${t}`)}</b> · ${at("free",{n:Fc})}`}),at(`boosterDesc_${t}`)],buttons:[{label:at("gotIt"),cls:"green",onClick:()=>{e&&(e.paused=!1)}}]}),Rt.play("unlock")}}function Qr(s){return _0(s,84)}new H3().init().catch(s=>{console.error(s),document.body.insertAdjacentHTML("beforeend",`<pre style="position:fixed;inset:auto 0 0 0;padding:12px;background:#fff;color:#c00;white-space:pre-wrap">${String(s?.stack??s)}</pre>`)});
