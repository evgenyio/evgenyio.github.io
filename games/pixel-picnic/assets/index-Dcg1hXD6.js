(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Yo="186",T0=0,Cl=1,A0=2,Is=1,C0=2,Rs=3,hi=0,Ye=1,$e=2,Gn=0,li=1,Os=2,Rl=3,Pl=4,R0=5,es=100,P0=101,L0=102,I0=103,D0=104,N0=200,U0=201,F0=202,O0=203,ch=204,hh=205,B0=206,k0=207,z0=208,H0=209,V0=210,G0=211,W0=212,X0=213,q0=214,Kr=0,Qr=1,jr=2,Bs=3,to=4,eo=5,no=6,io=7,Zo=0,$0=1,Y0=2,Rn=0,uh=1,fh=2,dh=3,ph=4,mh=5,gh=6,Za=7,vh=300,Ci=301,os=302,or=303,lr=304,Ja=306,Da=1e3,Hn=1001,so=1002,Be=1003,Z0=1004,Zs=1005,Ve=1006,cr=1007,Ei=1008,en=1009,xh=1010,_h=1011,ks=1012,Jo=1013,Pn=1014,vn=1015,Ln=1016,Ko=1017,Qo=1018,zs=1020,Mh=35902,bh=35899,Sh=1021,yh=1022,xn=1023,Xn=1026,Ti=1027,jo=1028,tl=1029,Ri=1030,el=1031,nl=1033,Ea=33776,Ta=33777,Aa=33778,Ca=33779,ao=35840,ro=35841,oo=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37488,po=37489,Na=37490,mo=37491,go=37808,vo=37809,xo=37810,_o=37811,Mo=37812,bo=37813,So=37814,yo=37815,wo=37816,Eo=37817,To=37818,Ao=37819,Co=37820,Ro=37821,Po=36492,Lo=36494,Io=36495,Do=36283,No=36284,Ua=36285,Uo=36286,J0=3200,Fa=0,K0=1,ni="",we="srgb",Oa="srgb-linear",Ba="linear",fe="srgb",hr=7680,Q0=519,j0=512,tu=513,eu=514,il=515,nu=516,iu=517,sl=518,su=519,au=35044,Ll=35048,Il="300 es",An=2e3,Hs=2001;function ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ka(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ou(){const s=ka("canvas");return s.style.display="block",s}const Dl={};function Nl(...s){const t="THREE."+s.shift();console.log(t,...s)}function wh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=wh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function se(...s){s=wh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ss(...s){const t=s.join(" ");t in Dl||(Dl[t]=!0,Gt(...s))}function lu(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const cu={[Kr]:Qr,[jr]:no,[to]:io,[Bs]:eo,[Qr]:Kr,[no]:jr,[io]:to,[eo]:Bs};class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ur=Math.PI/180,Fo=180/Math.PI;function hs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function hu(s,t){return(s%t+t)%t}function fr(s,t,e){return(1-e)*s+e*t}function ds(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class rt{static{rt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],u=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3];if(f!==_||c!==u||l!==d||h!==g){let m=c*u+l*d+h*g+f*_;m<0&&(u=-u,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,c=c*p+u*o,l=l*p+d*o,h=h*p+g*o,f=f*p+_*o}else{c=c*p+u*o,l=l*p+d*o,h=h*p+g*o,f=f*p+_*o;const v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=a[r],u=a[r+1],d=a[r+2],g=a[r+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(a/2),u=c(n/2),d=c(i/2),g=c(a/2);switch(r){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(a-l)*d,this._z=(r-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(a+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(a-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(r-i)/d,this._x=(a+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+i*l-a*c,this._y=i*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+a*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+a*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*i-o*n),h=2*(o*e-a*i),f=2*(a*n-r*e);return this.x=e+c*l+r*f-o*h,this.y=n+c*h+o*l-a*f,this.z=i+c*f+a*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=i*c-a*o,this.y=a*r-n*c,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dr=new P,Ul=new Ge;class qt{static{qt.prototype.isMatrix3=!0}constructor(t,e,n,i,a,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,c,l)}set(t,e,n,i,a,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],S=i[4],x=i[7],w=i[2],E=i[5],C=i[8];return a[0]=r*_+o*v+c*w,a[3]=r*m+o*S+c*E,a[6]=r*p+o*x+c*C,a[1]=l*_+h*v+f*w,a[4]=l*m+h*S+f*E,a[7]=l*p+h*x+f*C,a[2]=u*_+d*v+g*w,a[5]=u*m+d*S+g*E,a[8]=u*p+d*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*a*h+n*o*c+i*a*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*r-o*l,u=o*c-h*a,d=l*a-r*c,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*r)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*a-o*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-i*l,i*c,-i*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pr.makeScale(t,e)),this}rotate(t){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pr.makeRotation(-t)),this}translate(t,e){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new qt,Fl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uu(){const s={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===fe&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?Ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Oa]:{primaries:t,whitePoint:n,transfer:Ba,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}const te=uu();function Wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function as(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ki;class fu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=ka("canvas")),ki.width=t.width,ki.height=t.height;const i=ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ka("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Wn(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let du=0;class al{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(mr(i[r].image)):a.push(mr(i[r]))}else a=mr(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function mr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let pu=0;const gr=new P;class We extends Ni{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Hn,i=Hn,a=Ve,r=Ei,o=xn,c=en,l=We.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=hs(),this.name="",this.source=new al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gr).x}get height(){return this.source.getSize(gr).y}get depth(){return this.source.getSize(gr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Da:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Da:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=vh;We.DEFAULT_ANISOTROPY=1;class _e{static{_e.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(d+1)/2,w=(p+1)/2,E=(h+u)/4,C=(f+_)/4,b=(g+m)/4;return S>x&&S>w?S<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(S),i=E/n,a=C/n):x>w?x<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),n=E/i,a=b/i):w<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(w),n=C/a,i=b/a),this.set(n,i,a,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mu extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},a=new We(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new al(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eh extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gu extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ne{static{ne.prototype.isMatrix4=!0}constructor(t,e,n,i,a,r,o,c,l,h,f,u,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,c,l,h,f,u,d,g,_,m)}set(t,e,n,i,a,r,o,c,l,h,f,u,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=a,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),a=1/zi.setFromMatrixColumn(t,1).length(),r=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const u=r*h,d=r*f,g=o*h,_=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,_=l*f;e[0]=u+_*o,e[4]=g*o-d,e[8]=r*l,e[1]=r*f,e[5]=r*h,e[9]=-o,e[2]=d*o-g,e[6]=_+u*o,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,_=l*f;e[0]=u-_*o,e[4]=-r*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*h,e[9]=_-u*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,d=r*f,g=o*h,_=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+_,e[1]=c*f,e[5]=_*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,d=r*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*c,d=r*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vu,t,xu)}lookAt(t,e,n){const i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Zn.crossVectors(n,Qe),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Zn.crossVectors(n,Qe)),Zn.normalize(),Js.crossVectors(Qe,Zn),i[0]=Zn.x,i[4]=Js.x,i[8]=Qe.x,i[1]=Zn.y,i[5]=Js.y,i[9]=Qe.y,i[2]=Zn.z,i[6]=Js.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],S=n[7],x=n[11],w=n[15],E=i[0],C=i[4],b=i[8],T=i[12],L=i[1],D=i[5],B=i[9],O=i[13],N=i[2],R=i[6],G=i[10],W=i[14],J=i[3],q=i[7],K=i[11],Q=i[15];return a[0]=r*E+o*L+c*N+l*J,a[4]=r*C+o*D+c*R+l*q,a[8]=r*b+o*B+c*G+l*K,a[12]=r*T+o*O+c*W+l*Q,a[1]=h*E+f*L+u*N+d*J,a[5]=h*C+f*D+u*R+d*q,a[9]=h*b+f*B+u*G+d*K,a[13]=h*T+f*O+u*W+d*Q,a[2]=g*E+_*L+m*N+p*J,a[6]=g*C+_*D+m*R+p*q,a[10]=g*b+_*B+m*G+p*K,a[14]=g*T+_*O+m*W+p*Q,a[3]=v*E+S*L+x*N+w*J,a[7]=v*C+S*D+x*R+w*q,a[11]=v*b+S*B+x*G+w*K,a[15]=v*T+S*O+x*W+w*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],v=c*d-l*u,S=o*d-l*f,x=o*u-c*f,w=r*d-l*h,E=r*u-c*h,C=r*f-o*h;return e*(_*v-m*S+p*x)-n*(g*v-m*w+p*E)+i*(g*S-_*w+p*C)-a*(g*x-_*E+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[1],r=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(r*h-o*l)-n*(a*h-o*c)+i*(a*l-r*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=e*o-n*r,S=e*c-i*r,x=e*l-a*r,w=n*c-i*o,E=n*l-a*o,C=i*l-a*c,b=h*_-f*g,T=h*m-u*g,L=h*p-d*g,D=f*m-u*_,B=f*p-d*_,O=u*p-d*m,N=v*O-S*B+x*D+w*L-E*T+C*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/N;return t[0]=(o*O-c*B+l*D)*R,t[1]=(i*B-n*O-a*D)*R,t[2]=(_*C-m*E+p*w)*R,t[3]=(u*E-f*C-d*w)*R,t[4]=(c*L-r*O-l*T)*R,t[5]=(e*O-i*L+a*T)*R,t[6]=(m*x-g*C-p*S)*R,t[7]=(h*C-u*x+d*S)*R,t[8]=(r*B-o*L+l*b)*R,t[9]=(n*L-e*B-a*b)*R,t[10]=(g*E-_*x+p*v)*R,t[11]=(f*x-h*E-d*v)*R,t[12]=(o*T-r*D-c*b)*R,t[13]=(e*D-n*T+i*b)*R,t[14]=(_*S-g*w-m*v)*R,t[15]=(h*w-f*S+u*v)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,c=t.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,h=r+r,f=o+o,u=a*l,d=a*h,g=a*f,_=r*h,m=r*f,p=o*f,v=c*l,S=c*h,x=c*f,w=n.x,E=n.y,C=n.z;return i[0]=(1-(_+p))*w,i[1]=(d+x)*w,i[2]=(g-S)*w,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(u+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+S)*C,i[9]=(m-v)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),e.identity(),this;let r=zi.set(i[0],i[1],i[2]).length();const o=zi.set(i[4],i[5],i[6]).length(),c=zi.set(i[8],i[9],i[10]).length();a<0&&(r=-r),un.copy(this);const l=1/r,h=1/o,f=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=c,this}makePerspective(t,e,n,i,a,r,o=An,c=!1){const l=this.elements,h=2*a/(e-t),f=2*a/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let g,_;if(c)g=a/(r-a),_=r*a/(r-a);else if(o===An)g=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Hs)g=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=An,c=!1){const l=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,_;if(c)g=1/(r-a),_=r/(r-a);else if(o===An)g=-2/(r-a),_=-(r+a)/(r-a);else if(o===Hs)g=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new P,un=new ne,vu=new P(0,0,0),xu=new P(1,1,1),Zn=new P,Js=new P,Qe=new P,Bl=new ne,kl=new Ge;class Mn{constructor(t=0,e=0,n=0,i=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _u=0;const zl=new P,Hi=new Ge,Nn=new ne,Ks=new P,ps=new P,Mu=new P,bu=new Ge,Hl=new P(1,0,0),Vl=new P(0,1,0),Gl=new P(0,0,1),Wl={type:"added"},Su={type:"removed"},Vi={type:"childadded",child:null},vr={type:"childremoved",child:null};class Le extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new P,e=new Mn,n=new Ge,i=new P(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new qt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ps,Ks,this.up):Nn.lookAt(Ks,ps,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su),vr.child=t,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,bu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*n-a[8]*i,a[13]+=n-a[1]*e-a[5]*n-a[9]*i,a[14]+=i-a[2]*e-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yu={type:"move"};class xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function _r(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=hu(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=_r(r,a,t+1/3),this.g=_r(r,a,t),this.b=_r(r,a,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=we){function n(a){a!==void 0&&parseFloat(a)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=Th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return te.workingToColorSpace(He.copy(this),t),Math.round(Jt(He.r*255,0,255))*65536+Math.round(Jt(He.g*255,0,255))*256+Math.round(Jt(He.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(He.copy(this),e);const n=He.r,i=He.g,a=He.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const f=r-o;switch(l=h<=.5?f/(r+o):f/(2-r-o),r){case n:c=(i-a)/f+(i<a?6:0);break;case i:c=(a-n)/f+2;break;case a:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=we){te.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Qs);const n=fr(Jn.h,Qs.h,e),i=fr(Jn.s,Qs.s,e),a=fr(Jn.l,Qs.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new At;At.NAMES=Th;class ol extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fn=new P,Un=new P,Mr=new P,Fn=new P,Gi=new P,Wi=new P,Xl=new P,br=new P,Sr=new P,yr=new P,wr=new _e,Er=new _e,Tr=new _e;class gn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fn.subVectors(t,e),i.cross(fn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){fn.subVectors(i,e),Un.subVectors(n,e),Mr.subVectors(t,e);const r=fn.dot(fn),o=fn.dot(Un),c=fn.dot(Mr),l=Un.dot(Un),h=Un.dot(Mr),f=r*l-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,d=(l*c-o*h)*u,g=(r*h-o*c)*u;return a.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,a,r,o,c){return this.getBarycoord(t,e,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Fn.x),c.addScaledVector(r,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(t,e,n,i,a,r){return wr.setScalar(0),Er.setScalar(0),Tr.setScalar(0),wr.fromBufferAttribute(t,e),Er.fromBufferAttribute(t,n),Tr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(wr,a.x),r.addScaledVector(Er,a.y),r.addScaledVector(Tr,a.z),r}static isFrontFacing(t,e,n,i){return fn.subVectors(n,e),Un.subVectors(t,e),fn.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;Gi.subVectors(i,n),Wi.subVectors(a,n),br.subVectors(t,n);const c=Gi.dot(br),l=Wi.dot(br);if(c<=0&&l<=0)return e.copy(n);Sr.subVectors(t,i);const h=Gi.dot(Sr),f=Wi.dot(Sr);if(h>=0&&f<=h)return e.copy(i);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Gi,r);yr.subVectors(t,a);const d=Gi.dot(yr),g=Wi.dot(yr);if(g>=0&&d<=g)return e.copy(a);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Wi,o);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Xl.subVectors(a,i),o=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(Xl,o);const p=1/(m+_+u);return r=_*p,o=u*p,e.copy(n).addScaledVector(Gi,r).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ui{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,dn):dn.fromBufferAttribute(a,r),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),ta.subVectors(this.max,ms),Xi.subVectors(t.a,ms),qi.subVectors(t.b,ms),$i.subVectors(t.c,ms),Kn.subVectors(qi,Xi),Qn.subVectors($i,qi),di.subVectors(Xi,$i);let e=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-di.z,di.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,di.z,0,-di.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-di.y,di.x,0];return!Ar(e,Xi,qi,$i,ta)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,Xi,qi,$i,ta))?!1:(ea.crossVectors(Kn,Qn),e=[ea.x,ea.y,ea.z],Ar(e,Xi,qi,$i,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,js=new ui,Xi=new P,qi=new P,$i=new P,Kn=new P,Qn=new P,di=new P,ms=new P,ta=new P,ea=new P,pi=new P;function Ar(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){pi.fromArray(s,a);const o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ae=new P,na=new rt;let wu=0;class nn extends Ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=au,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),a=Ze(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ah extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ch extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Eu=new ui,gs=new P,Cr=new P;class qs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(Cr)),this.expandByPoint(gs.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Tu=0;const an=new ne,Rr=new Le,Yi=new P,je=new ui,vs=new ui,Ue=new P;class Ne extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?Ch:Ah)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new qt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];je.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(je.min,vs.min),je.expandByPoint(Ue),Ue.addVectors(je.max,vs.max),je.expandByPoint(Ue)):(je.expandByPoint(vs.min),je.expandByPoint(vs.max))}je.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)Ue.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ue.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(t,l),Ue.add(Yi)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let b=0;b<n.count;b++)o[b]=new P,c[b]=new P;const l=new P,h=new P,f=new P,u=new rt,d=new rt,g=new rt,_=new P,m=new P;function p(b,T,L){l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,L),u.fromBufferAttribute(a,b),d.fromBufferAttribute(a,T),g.fromBufferAttribute(a,L),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[b].add(_),o[T].add(_),o[L].add(_),c[b].add(m),c[T].add(m),c[L].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let b=0,T=v.length;b<T;++b){const L=v[b],D=L.start,B=L.count;for(let O=D,N=D+B;O<N;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new P,x=new P,w=new P,E=new P;function C(b){w.fromBufferAttribute(i,b),E.copy(w);const T=o[b];S.copy(T),S.sub(w.multiplyScalar(w.dot(T))).normalize(),x.crossVectors(E,T);const D=x.dot(c[b])<0?-1:1;r.setXYZW(b,S.x,S.y,S.z,D)}for(let b=0,T=v.length;b<T;++b){const L=v[b],D=L.start,B=L.count;for(let O=D,N=D+B;O<N;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new P,a=new P,r=new P,o=new P,c=new P,l=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,a),f.subVectors(i,a),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),f.subVectors(i,a),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new nn(u,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],f=a[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pr=new P,Au=new P,Cu=new qt;class ei{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Pr.subVectors(n,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Pr),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cu.getNormalMatrix(t),i=this.coplanarPoint(Pr).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ru=0;class us extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=li,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Bn=new P,Lr=new P,ia=new P,sa=new P;class Rh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Lr.copy(t).add(e).multiplyScalar(.5),ia.copy(e).sub(t).normalize(),sa.copy(this.origin).sub(Lr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(ia),o=sa.dot(this.direction),c=-sa.dot(ia),l=sa.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*c-o,u=r*o-c,g=a*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*o)+u*(r*f+u+2*c)+l}else u=a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*c)+l;else u=-a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-r*a+o)),u=f>0?-a:Math.min(Math.max(-a,-c),a),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-a,-c),a),d=u*(u+2*c)+l):(f=Math.max(0,-(r*a+o)),u=f>0?a:Math.min(Math.max(-a,-c),a),d=-f*f+u*(u+2*c)+l);else u=r>0?-a:a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Lr).addScaledVector(ia,u),d}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,a){const r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-r.x,u=t.y-r.y,d=t.z-r.z,g=e.x-r.x,_=e.y-r.y,m=e.z-r.z,p=n.x-r.x,v=n.y-r.y,S=n.z-r.z,x=Math.abs(c),w=Math.abs(l),E=Math.abs(h);let C,b,T,L,D,B,O,N,R,G,W,J;if(x>=w&&x>=E?(T=c,B=f,R=g,J=p,c>=0?(C=l,b=h,L=u,D=d,O=_,N=m,G=v,W=S):(C=h,b=l,L=d,D=u,O=m,N=_,G=S,W=v)):w>=E?(T=l,B=u,R=_,J=v,l>=0?(C=h,b=c,L=d,D=f,O=m,N=g,G=S,W=p):(C=c,b=h,L=f,D=d,O=g,N=m,G=p,W=S)):(T=h,B=d,R=m,J=S,h>=0?(C=c,b=l,L=f,D=u,O=g,N=_,G=p,W=v):(C=l,b=c,L=u,D=f,O=_,N=g,G=v,W=p)),T===0)return null;const q=C/T,K=b/T,Q=1/T,wt=L-q*B,St=D-K*B,jt=O-q*R,Wt=N-K*R,ae=G-q*J,Z=W-K*J,nt=ae*Wt-Z*jt,_t=wt*Z-St*ae,zt=jt*St-Wt*wt;if(i){if(nt<0||_t<0||zt<0)return null}else if((nt<0||_t<0||zt<0)&&(nt>0||_t>0||zt>0))return null;const Et=nt+_t+zt;if(Et===0)return null;const Ht=Q*(nt*B+_t*R+zt*J);return(Et>0?Ht<0:Ht>0)?null:this.at(Ht/Et,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ui extends us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ql=new ne,mi=new Rh,aa=new qs,$l=new P,ra=new P,oa=new P,la=new P,Ir=new P,ca=new P,Yl=new P,ha=new P;class ee extends Le{constructor(t=new Ne,e=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){ca.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],f=a[c];h!==0&&(Ir.fromBufferAttribute(f,t),r?ca.addScaledVector(Ir,h):ca.addScaledVector(Ir.sub(e),h))}e.add(ca)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(a),mi.copy(t.ray).recast(t.near),!(aa.containsPoint(mi.origin)===!1&&(mi.intersectSphere(aa,$l)===null||mi.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(ql.copy(a).invert(),mi.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=r[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,w=S;x<w;x+=3){const E=o.getX(x),C=o.getX(x+1),b=o.getX(x+2);i=ua(this,p,t,n,l,h,f,E,C,b),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);i=ua(this,r,t,n,l,h,f,v,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=r[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,w=S;x<w;x+=3){const E=x,C=x+1,b=x+2;i=ua(this,p,t,n,l,h,f,E,C,b),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,S=m+1,x=m+2;i=ua(this,r,t,n,l,h,f,v,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Pu(s,t,e,n,i,a,r,o){let c;if(t.side===Ye?c=n.intersectTriangle(r,a,i,!0,o):c=n.intersectTriangle(i,a,r,t.side===hi,o),c===null)return null;ha.copy(o),ha.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ha);return l<e.near||l>e.far?null:{distance:l,point:ha.clone(),object:s}}function ua(s,t,e,n,i,a,r,o,c,l){s.getVertexPosition(o,ra),s.getVertexPosition(c,oa),s.getVertexPosition(l,la);const h=Pu(s,t,e,n,ra,oa,la,Yl);if(h){const f=new P;gn.getBarycoord(Yl,ra,oa,la,f),i&&(h.uv=gn.getInterpolatedAttribute(i,o,c,l,f,new rt)),a&&(h.uv1=gn.getInterpolatedAttribute(a,o,c,l,f,new rt)),r&&(h.normal=gn.getInterpolatedAttribute(r,o,c,l,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};gn.getNormal(ra,oa,la,u.normal),h.face=u,h.barycoord=f}return h}class Ph extends We{constructor(t=null,e=1,n=1,i,a,r,o,c,l=Be,h=Be,f,u){super(null,r,o,c,l,h,i,a,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zl extends nn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new ne,Jl=new ne,fa=[],Kl=new ui,Lu=new ne,xs=new ee,_s=new qs;class Je extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Kl.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Kl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),_s.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Zi),Jl.multiplyMatrices(n,Zi),xs.matrixWorld=Jl,xs.raycast(t,fa);for(let r=0,o=fa.length;r<o;r++){const c=fa[r];c.instanceId=a,c.object=this,e.push(c)}fa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ph(new Float32Array(i*this.count),i,this.count,jo,vn));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*t;return a[c]=o,a.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gi=new qs,Iu=new rt(.5,.5),da=new P;class ll{constructor(t=new ei,e=new ei,n=new ei,i=new ei,a=new ei,r=new ei){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){const i=this.planes,a=t.elements,r=a[0],o=a[1],c=a[2],l=a[3],h=a[4],f=a[5],u=a[6],d=a[7],g=a[8],_=a[9],m=a[10],p=a[11],v=a[12],S=a[13],x=a[14],w=a[15];if(i[0].setComponents(l-r,d-h,p-g,w-v).normalize(),i[1].setComponents(l+r,d+h,p+g,w+v).normalize(),i[2].setComponents(l+o,d+f,p+_,w+S).normalize(),i[3].setComponents(l-o,d-f,p-_,w-S).normalize(),n)i[4].setComponents(c,u,m,x).normalize(),i[5].setComponents(l-c,d-u,p-m,w-x).normalize();else if(i[4].setComponents(l-c,d-u,p-m,w-x).normalize(),e===An)i[5].setComponents(l+c,d+u,p+m,w+x).normalize();else if(e===Hs)i[5].setComponents(c,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Iu.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(da.x=i.normal.x>0?t.max.x:t.min.x,da.y=i.normal.y>0?t.max.y:t.min.y,da.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lh extends We{constructor(t=[],e=Ci,n,i,a,r,o,c,l,h){super(t,e,n,i,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fi extends We{constructor(t,e,n,i,a,r,o,c,l){super(t,e,n,i,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends We{constructor(t,e,n=Pn,i,a,r,o=Be,c=Be,l,h=Xn,f=1){if(h!==Xn&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,i,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new al(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Du extends Vs{constructor(t,e=Pn,n=Ci,i,a,r=Be,o=Be,c,l=Xn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,a,r,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ih extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cn extends Ne{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function g(_,m,p,v,S,x,w,E,C,b,T){const L=x/C,D=w/b,B=x/2,O=w/2,N=E/2,R=C+1,G=b+1;let W=0,J=0;const q=new P;for(let K=0;K<G;K++){const Q=K*D-O;for(let wt=0;wt<R;wt++){const St=wt*L-B;q[_]=St*v,q[m]=Q*S,q[p]=N,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),f.push(wt/C),f.push(1-K/b),W+=1}}for(let K=0;K<b;K++)for(let Q=0;Q<C;Q++){const wt=u+Q+R*K,St=u+Q+R*(K+1),jt=u+(Q+1)+R*(K+1),Wt=u+(Q+1)+R*K;c.push(wt,St,Wt),c.push(St,jt,Wt),J+=6}o.addGroup(d,J,T),d+=J,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class zn extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],c=[],l=new P,h=new rt;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oe extends Ne{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),a=Math.floor(a);const h=[],f=[],u=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function v(){const x=new P,w=new P;let E=0;const C=(e-t)/n;for(let b=0;b<=a;b++){const T=[],L=b/a,D=L*(e-t)+t;for(let B=0;B<=i;B++){const O=B/i,N=O*c+o,R=Math.sin(N),G=Math.cos(N);w.x=D*R,w.y=-L*n+m,w.z=D*G,f.push(w.x,w.y,w.z),x.set(R,C,G).normalize(),u.push(x.x,x.y,x.z),d.push(O,1-L),T.push(g++)}_.push(T)}for(let b=0;b<i;b++)for(let T=0;T<a;T++){const L=_[T][b],D=_[T+1][b],B=_[T+1][b+1],O=_[T][b+1];(t>0||T!==0)&&(h.push(L,D,O),E+=3),(e>0||T!==a-1)&&(h.push(D,B,O),E+=3)}l.addGroup(p,E,0),p+=E}function S(x){const w=g,E=new rt,C=new P;let b=0;const T=x===!0?t:e,L=x===!0?1:-1;for(let B=1;B<=i;B++)f.push(0,m*L,0),u.push(0,L,0),d.push(.5,.5),g++;const D=g;for(let B=0;B<=i;B++){const N=B/i*c+o,R=Math.cos(N),G=Math.sin(N);C.x=T*G,C.y=m*L,C.z=T*R,f.push(C.x,C.y,C.z),u.push(0,L,0),E.x=R*.5+.5,E.y=G*.5*L+.5,d.push(E.x,E.y),g++}for(let B=0;B<i;B++){const O=w+B,N=D+B;x===!0?h.push(N,N+1,O):h.push(N+1,N,O),b+=3}l.addGroup(p,b,x===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ii extends Oe{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new ii(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cl extends Ne{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),l(n),h(),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(a.slice(),3)),this.setAttribute("uv",new ie(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new P,x=new P,w=new P;for(let E=0;E<e.length;E+=3)d(e[E+0],S),d(e[E+1],x),d(e[E+2],w),c(S,x,w,v)}function c(v,S,x,w){const E=w+1,C=[];for(let b=0;b<=E;b++){C[b]=[];const T=v.clone().lerp(x,b/E),L=S.clone().lerp(x,b/E),D=E-b;for(let B=0;B<=D;B++)B===0&&b===E?C[b][B]=T:C[b][B]=T.clone().lerp(L,B/D)}for(let b=0;b<E;b++)for(let T=0;T<2*(E-b)-1;T++){const L=Math.floor(T/2);T%2===0?(u(C[b][L+1]),u(C[b+1][L]),u(C[b][L])):(u(C[b][L+1]),u(C[b+1][L+1]),u(C[b+1][L]))}}function l(v){const S=new P;for(let x=0;x<a.length;x+=3)S.x=a[x+0],S.y=a[x+1],S.z=a[x+2],S.normalize().multiplyScalar(v),a[x+0]=S.x,a[x+1]=S.y,a[x+2]=S.z}function h(){const v=new P;for(let S=0;S<a.length;S+=3){v.x=a[S+0],v.y=a[S+1],v.z=a[S+2];const x=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;r.push(x,1-w)}g(),f()}function f(){for(let v=0;v<r.length;v+=6){const S=r[v+0],x=r[v+2],w=r[v+4],E=Math.max(S,x,w),C=Math.min(S,x,w);E>.9&&C<.1&&(S<.2&&(r[v+0]+=1),x<.2&&(r[v+2]+=1),w<.2&&(r[v+4]+=1))}}function u(v){a.push(v.x,v.y,v.z)}function d(v,S){const x=v*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const v=new P,S=new P,x=new P,w=new P,E=new rt,C=new rt,b=new rt;for(let T=0,L=0;T<a.length;T+=9,L+=6){v.set(a[T+0],a[T+1],a[T+2]),S.set(a[T+3],a[T+4],a[T+5]),x.set(a[T+6],a[T+7],a[T+8]),E.set(r[L+0],r[L+1]),C.set(r[L+2],r[L+3]),b.set(r[L+4],r[L+5]),w.copy(v).add(S).add(x).divideScalar(3);const D=m(w);_(E,L+0,v,D),_(C,L+2,S,D),_(b,L+4,x,D)}}function _(v,S,x,w){w<0&&v.x===1&&(r[S]=v.x-1),x.x===0&&x.z===0&&(r[S]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.vertices,t.indices,t.radius,t.detail)}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(a-1);const h=n[i],u=n[i+1]-h,d=(r-h)/u;return(i+d)/(a-1)}getTangent(t,e){let i=t-1e-4,a=t+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),c=e||(r.isVector2?new rt:new P);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],a=[],r=[],o=new P,c=new ne;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new P)}a[0]=new P,r[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Jt(i[d-1].dot(i[d]),-1,1));a[d].applyMatrix4(c.makeRotationAxis(o,g))}r[d].crossVectors(i[d],a[d])}if(e===!0){let d=Math.acos(Jt(a[0].dot(a[t]),-1,1));d/=t,i[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hl extends Dn{constructor(t=0,e=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new rt){const n=e,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Nu extends hl{constructor(t,e,n,i,a,r){super(t,e,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ul(){let s=0,t=0,e=0,n=0;function i(a,r,o,c){s=a,t=o,e=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){i(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,h,f){let u=(r-a)/l-(o-a)/(l+h)+(o-r)/h,d=(o-r)/h-(c-r)/(h+f)+(c-o)/f;u*=h,d*=h,i(r,o,u,d)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+n*o}}}const Ql=new P,jl=new P,Dr=new ul,Nr=new ul,Ur=new ul;class fl extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,a=i.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%a]:(jl.subVectors(i[0],i[1]).add(i[0]),l=jl);const f=i[o%a],u=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(Ql.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=Ql),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Dr.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,_,m),Nr.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,_,m),Ur.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Dr.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Nr.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Ur.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Dr.calc(c),Nr.calc(c),Ur.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(s,t,e,n,i){const a=(n-t)*.5,r=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+a+r)*c+(-3*e+3*n-2*a-r)*o+a*s+e}function Uu(s,t){const e=1-s;return e*e*t}function Fu(s,t){return 2*(1-s)*s*t}function Ou(s,t){return s*s*t}function Ds(s,t,e,n){return Uu(s,t)+Fu(s,e)+Ou(s,n)}function Bu(s,t){const e=1-s;return e*e*e*t}function ku(s,t){const e=1-s;return 3*e*e*s*t}function zu(s,t){return 3*(1-s)*s*s*t}function Hu(s,t){return s*s*s*t}function Ns(s,t,e,n,i){return Bu(s,t)+ku(s,e)+zu(s,n)+Hu(s,i)}class Dh extends Dn{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ns(t,i.x,a.x,r.x,o.x),Ns(t,i.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vu extends Dn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ns(t,i.x,a.x,r.x,o.x),Ns(t,i.y,a.y,r.y,o.y),Ns(t,i.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nh extends Dn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends Dn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends Dn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(Ds(t,i.x,a.x,r.x),Ds(t,i.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends Dn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(Ds(t,i.x,a.x,r.x),Ds(t,i.y,a.y,r.y),Ds(t,i.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,a=(i.length-1)*t,r=Math.floor(a),o=a-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(tc(o,c.x,l.x,h.x,f.x),tc(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var za=Object.freeze({__proto__:null,ArcCurve:Nu,CatmullRomCurve3:fl,CubicBezierCurve:Dh,CubicBezierCurve3:Vu,EllipseCurve:hl,LineCurve:Nh,LineCurve3:Gu,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:Fh,SplineCurve:Oh});class Wu extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new za[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const r=i[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const r=a[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new za[i.type]().fromJSON(i))}return this}}class Oo extends Wu{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Nh(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const a=new Uh(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,a,r){const o=new Dh(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Oh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,a,r),this}absarc(t,e,n,i,a,r){return this.absellipse(t,e,n,n,i,a,r),this}ellipse(t,e,n,i,a,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,a,r,o,c),this}absellipse(t,e,n,i,a,r,o,c){const l=new hl(t,e,n,i,a,r,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ci extends Oo{constructor(t){super(t),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Oo().fromJSON(i))}return this}}function Xu(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let a=Bh(s,0,i,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l;if(n&&(a=Ju(s,t,a,e)),s.length>80*e){o=s[0],c=s[1];let h=o,f=c;for(let u=e;u<i;u+=e){const d=s[u],g=s[u+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return Gs(a,r,e,o,c,l,0),r}function Bh(s,t,e,n,i){let a;if(i===lf(s,t,e,n)>0)for(let r=t;r<e;r+=n)a=ec(r/n|0,s[r],s[r+1],a);else for(let r=e-n;r>=t;r-=n)a=ec(r/n|0,s[r],s[r+1],a);return a&&ls(a,a.next)&&(Xs(a),a=a.next),a}function Pi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||Me(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gs(s,t,e,n,i,a,r){if(!s)return;!r&&a&&ef(s,n,i,a);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(a?$u(s,n,i,a):qu(s)){t.push(c.i,s.i,l.i),Xs(s),s=l.next,o=l.next;continue}if(s=l,s===o){r?r===1?(s=Yu(Pi(s),t),Gs(s,t,e,n,i,a,2)):r===2&&Zu(s,t,e,n,i,a):Gs(Pi(s),t,e,n,i,a,1);break}}}function qu(s){const t=s.prev,e=s,n=s.next;if(Me(t,e,n)>=0)return!1;const i=t.x,a=e.x,r=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,a,r),f=Math.min(o,c,l),u=Math.max(i,a,r),d=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ps(i,o,a,c,r,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $u(s,t,e,n){const i=s.prev,a=s,r=s.next;if(Me(i,a,r)>=0)return!1;const o=i.x,c=a.x,l=r.x,h=i.y,f=a.y,u=r.y,d=Math.min(o,c,l),g=Math.min(h,f,u),_=Math.max(o,c,l),m=Math.max(h,f,u),p=Bo(d,g,t,e,n),v=Bo(_,m,t,e,n);let S=s.prevZ,x=s.nextZ;for(;S&&S.z>=p&&x&&x.z<=v;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==r&&Ps(o,h,c,f,l,u,S.x,S.y)&&Me(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&Ps(o,h,c,f,l,u,x.x,x.y)&&Me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==r&&Ps(o,h,c,f,l,u,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&Ps(o,h,c,f,l,u,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Yu(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ls(n,i)&&zh(n,e,e.next,i)&&Ws(n,i)&&Ws(i,n)&&(t.push(n.i,e.i,i.i),Xs(e),Xs(e.next),e=s=i),e=e.next}while(e!==s);return Pi(e)}function Zu(s,t,e,n,i,a){let r=s;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&af(r,o)){let c=Hh(r,o);r=Pi(r,r.next),c=Pi(c,c.next),Gs(r,t,e,n,i,a,0),Gs(c,t,e,n,i,a,0);return}o=o.next}r=r.next}while(r!==s)}function Ju(s,t,e,n){const i=[];for(let a=0,r=t.length;a<r;a++){const o=t[a]*n,c=a<r-1?t[a+1]*n:s.length,l=Bh(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(sf(l))}i.sort(Ku);for(let a=0;a<i.length;a++)e=Qu(i[a],e);return e}function Ku(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Qu(s,t){const e=ju(s,t);if(!e)return t;const n=Hh(e,s);return Pi(n,n.next),Pi(e,e.next)}function ju(s,t){let e=t;const n=s.x,i=s.y;let a=-1/0,r;if(ls(s,e))return e;do{if(ls(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>a&&(a=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=c&&n!==e.x&&kh(i<l?n:a,i,c,l,i<l?a:n,i,e.x,e.y)){const f=Math.abs(i-e.y)/(n-e.x);Ws(e,s)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&tf(r,e)))&&(r=e,h=f)}e=e.next}while(e!==o);return r}function tf(s,t){return Me(s.prev,s,t.prev)<0&&Me(t.next,s,s.next)<0}function ef(s,t,e,n){let i=s;do i.z===0&&(i.z=Bo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,nf(i)}function nf(s){let t,e=1;do{let n=s,i;s=null;let a=null;for(t=0;n;){t++;let r=n,o=0;for(let l=0;l<e&&(o++,r=r.nextZ,!!r);l++);let c=e;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:s=i,i.prevZ=a,a=i;n=r}a.nextZ=null,e*=2}while(t>1);return s}function Bo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function sf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function kh(s,t,e,n,i,a,r,o){return(i-r)*(t-o)>=(s-r)*(a-o)&&(s-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(i-r)*(n-o)}function Ps(s,t,e,n,i,a,r,o){return!(s===r&&t===o)&&kh(s,t,e,n,i,a,r,o)}function af(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!rf(s,t)&&(Ws(s,t)&&Ws(t,s)&&of(s,t)&&(Me(s.prev,s,t.prev)||Me(s,t.prev,t))||ls(s,t)&&Me(s.prev,s,s.next)>0&&Me(t.prev,t,t.next)>0)}function Me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ls(s,t){return s.x===t.x&&s.y===t.y}function zh(s,t,e,n){const i=ma(Me(s,t,e)),a=ma(Me(s,t,n)),r=ma(Me(e,n,s)),o=ma(Me(e,n,t));return!!(i!==a&&r!==o||i===0&&pa(s,e,t)||a===0&&pa(s,n,t)||r===0&&pa(e,s,n)||o===0&&pa(e,t,n))}function pa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ma(s){return s>0?1:s<0?-1:0}function rf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&zh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ws(s,t){return Me(s.prev,s,s.next)<0?Me(s,t,s.next)>=0&&Me(s,s.prev,t)>=0:Me(s,t,s.prev)<0||Me(s,s.next,t)<0}function of(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,a=(s.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&i<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Hh(s,t){const e=ko(s.i,s.x,s.y),n=ko(t.i,t.x,t.y),i=s.next,a=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function ec(s,t,e,n){const i=ko(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ko(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lf(s,t,e,n){let i=0;for(let a=t,r=e-n;a<e;a+=n)i+=(s[r]-s[a])*(s[a+1]+s[r+1]),r=a;return i}class cf{static triangulate(t,e,n=2){return Xu(t,e,n)}}class Vn{static area(t){const e=t.length;let n=0;for(let i=e-1,a=0;a<e;i=a++)n+=t[i].x*t[a].y-t[a].x*t[i].y;return n*.5}static isClockWise(t){return Vn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],a=[];nc(t),ic(n,t);let r=t.length;e.forEach(nc);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,ic(n,e[c]);const o=cf.triangulate(n,i);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function nc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ic(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Li extends Ne{constructor(t=new ci([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];r(l)}this.setAttribute("position",new ie(i,3)),this.setAttribute("uv",new ie(a,2)),this.computeVertexNormals();function r(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:hf;let S,x=!1,w,E,C,b;if(p){S=p.getSpacedPoints(h),x=!0,u=!1;const it=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,it),E=new P,C=new P,b=new P}u||(m=0,d=0,g=0,_=0);const T=o.extractPoints(l);let L=T.shape;const D=T.holes;if(!Vn.isClockWise(L)){L=L.reverse();for(let it=0,at=D.length;it<at;it++){const ot=D[it];Vn.isClockWise(ot)&&(D[it]=ot.reverse())}}function O(it){const ot=10000000000000001e-36;let lt=it[0];for(let ft=1;ft<=it.length;ft++){const Bt=ft%it.length,Ot=it[Bt],Vt=Ot.x-lt.x,Xt=Ot.y-lt.y,I=Vt*Vt+Xt*Xt,le=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(lt.x),Math.abs(lt.y)),Kt=ot*le*le;if(I<=Kt){it.splice(Bt,1),ft--;continue}lt=Ot}}O(L),D.forEach(O);const N=D.length,R=L;for(let it=0;it<N;it++){const at=D[it];L=L.concat(at)}function G(it,at,ot){return at||se("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(at,ot)}const W=L.length;function J(it,at,ot){let lt,ft,Bt;const Ot=it.x-at.x,Vt=it.y-at.y,Xt=ot.x-it.x,I=ot.y-it.y,le=Ot*Ot+Vt*Vt,Kt=Ot*I-Vt*Xt;if(Math.abs(Kt)>Number.EPSILON){const A=Math.sqrt(le),M=Math.sqrt(Xt*Xt+I*I),k=at.x-Vt/A,V=at.y+Ot/A,$=ot.x-I/M,ht=ot.y+Xt/M,ut=(($-k)*I-(ht-V)*Xt)/(Ot*I-Vt*Xt);lt=k+Ot*ut-it.x,ft=V+Vt*ut-it.y;const Y=lt*lt+ft*ft;if(Y<=2)return new rt(lt,ft);Bt=Math.sqrt(Y/2)}else{let A=!1;Ot>Number.EPSILON?Xt>Number.EPSILON&&(A=!0):Ot<-Number.EPSILON?Xt<-Number.EPSILON&&(A=!0):Math.sign(Vt)===Math.sign(I)&&(A=!0),A?(lt=-Vt,ft=Ot,Bt=Math.sqrt(le)):(lt=Ot,ft=Vt,Bt=Math.sqrt(le/2))}return new rt(lt/Bt,ft/Bt)}const q=[];for(let it=0,at=R.length,ot=at-1,lt=it+1;it<at;it++,ot++,lt++)ot===at&&(ot=0),lt===at&&(lt=0),q[it]=J(R[it],R[ot],R[lt]);const K=[];let Q,wt=q.concat();for(let it=0,at=N;it<at;it++){const ot=D[it];Q=[];for(let lt=0,ft=ot.length,Bt=ft-1,Ot=lt+1;lt<ft;lt++,Bt++,Ot++)Bt===ft&&(Bt=0),Ot===ft&&(Ot=0),Q[lt]=J(ot[lt],ot[Bt],ot[Ot]);K.push(Q),wt=wt.concat(Q)}let St;if(m===0)St=Vn.triangulateShape(R,D);else{const it=[],at=[];for(let ot=0;ot<m;ot++){const lt=ot/m,ft=d*Math.cos(lt*Math.PI/2),Bt=g*Math.sin(lt*Math.PI/2)+_;for(let Ot=0,Vt=R.length;Ot<Vt;Ot++){const Xt=G(R[Ot],q[Ot],Bt);_t(Xt.x,Xt.y,-ft),lt===0&&it.push(Xt)}for(let Ot=0,Vt=N;Ot<Vt;Ot++){const Xt=D[Ot];Q=K[Ot];const I=[];for(let le=0,Kt=Xt.length;le<Kt;le++){const A=G(Xt[le],Q[le],Bt);_t(A.x,A.y,-ft),lt===0&&I.push(A)}lt===0&&at.push(I)}}St=Vn.triangulateShape(it,at)}const jt=St.length,Wt=g+_;for(let it=0;it<W;it++){const at=u?G(L[it],wt[it],Wt):L[it];x?(C.copy(w.normals[0]).multiplyScalar(at.x),E.copy(w.binormals[0]).multiplyScalar(at.y),b.copy(S[0]).add(C).add(E),_t(b.x,b.y,b.z)):_t(at.x,at.y,0)}for(let it=1;it<=h;it++)for(let at=0;at<W;at++){const ot=u?G(L[at],wt[at],Wt):L[at];x?(C.copy(w.normals[it]).multiplyScalar(ot.x),E.copy(w.binormals[it]).multiplyScalar(ot.y),b.copy(S[it]).add(C).add(E),_t(b.x,b.y,b.z)):_t(ot.x,ot.y,f/h*it)}for(let it=m-1;it>=0;it--){const at=it/m,ot=d*Math.cos(at*Math.PI/2),lt=g*Math.sin(at*Math.PI/2)+_;for(let ft=0,Bt=R.length;ft<Bt;ft++){const Ot=G(R[ft],q[ft],lt);_t(Ot.x,Ot.y,f+ot)}for(let ft=0,Bt=D.length;ft<Bt;ft++){const Ot=D[ft];Q=K[ft];for(let Vt=0,Xt=Ot.length;Vt<Xt;Vt++){const I=G(Ot[Vt],Q[Vt],lt);x?_t(I.x,I.y+S[h-1].y,S[h-1].x+ot):_t(I.x,I.y,f+ot)}}}ae(),Z();function ae(){const it=i.length/3;if(u){let at=0,ot=W*at;for(let lt=0;lt<jt;lt++){const ft=St[lt];zt(ft[2]+ot,ft[1]+ot,ft[0]+ot)}at=h+m*2,ot=W*at;for(let lt=0;lt<jt;lt++){const ft=St[lt];zt(ft[0]+ot,ft[1]+ot,ft[2]+ot)}}else{for(let at=0;at<jt;at++){const ot=St[at];zt(ot[2],ot[1],ot[0])}for(let at=0;at<jt;at++){const ot=St[at];zt(ot[0]+W*h,ot[1]+W*h,ot[2]+W*h)}}n.addGroup(it,i.length/3-it,0)}function Z(){const it=i.length/3;let at=0;nt(R,at),at+=R.length;for(let ot=0,lt=D.length;ot<lt;ot++){const ft=D[ot];nt(ft,at),at+=ft.length}n.addGroup(it,i.length/3-it,1)}function nt(it,at){let ot=it.length;for(;--ot>=0;){const lt=ot;let ft=ot-1;ft<0&&(ft=it.length-1);for(let Bt=0,Ot=h+m*2;Bt<Ot;Bt++){const Vt=W*Bt,Xt=W*(Bt+1),I=at+lt+Vt,le=at+ft+Vt,Kt=at+ft+Xt,A=at+lt+Xt;Et(I,le,Kt,A)}}}function _t(it,at,ot){c.push(it),c.push(at),c.push(ot)}function zt(it,at,ot){Ht(it),Ht(at),Ht(ot);const lt=i.length/3,ft=v.generateTopUV(n,i,lt-3,lt-2,lt-1);ue(ft[0]),ue(ft[1]),ue(ft[2])}function Et(it,at,ot,lt){Ht(it),Ht(at),Ht(lt),Ht(at),Ht(ot),Ht(lt);const ft=i.length/3,Bt=v.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);ue(Bt[0]),ue(Bt[1]),ue(Bt[3]),ue(Bt[1]),ue(Bt[2]),ue(Bt[3])}function Ht(it){i.push(c[it*3+0]),i.push(c[it*3+1]),i.push(c[it*3+2])}function ue(it){a.push(it.x),a.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return uf(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new za[i.type]().fromJSON(i)),new Li(n,t.options)}}const hf={generateTopUV:function(s,t,e,n,i){const a=t[e*3],r=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new rt(a,r),new rt(o,c),new rt(l,h)]},generateSideWallUV:function(s,t,e,n,i,a){const r=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[a*3],m=t[a*3+1],p=t[a*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new rt(r,1-c),new rt(l,1-f),new rt(u,1-g),new rt(_,1-p)]:[new rt(o,1-c),new rt(h,1-f),new rt(d,1-g),new rt(m,1-p)]}};function uf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const a=s[n];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Us extends cl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Us(t.radius,t.detail)}}class Ka extends Ne{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);const a=[],r=[],o=[],c=[],l=[],h=1/e,f=new P,u=new rt,d=new P,g=new P,_=new P;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=e;v++){const S=n+v*h*i,x=Math.sin(S),w=Math.cos(S);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*x,f.y=t[E].y,f.z=t[E].x*w,r.push(f.x,f.y,f.z),u.x=v/e,u.y=E/(t.length-1),o.push(u.x,u.y);const C=c[3*E+0]*x,b=c[3*E+1],T=c[3*E+0]*w;l.push(C,b,T)}}for(let v=0;v<e;v++)for(let S=0;S<t.length-1;S++){const x=S+v*t.length,w=x,E=x+t.length,C=x+t.length+1,b=x+1;a.push(w,E,b),a.push(C,b,E)}this.setIndex(a),this.setAttribute("position",new ie(r,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.points,t.segments,t.phiStart,t.phiLength)}}class Ke extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*u-r;for(let S=0;S<l;S++){const x=S*f-a;g.push(x,-v,0),_.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const S=v+l*p,x=v+l*(p+1),w=v+1+l*(p+1),E=v+1+l*p;d.push(S,x,E),d.push(x,w,E)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.widthSegments,t.heightSegments)}}class En extends Ne{constructor(t=new ci([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],a=[],r=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ie(i,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(r,2));function l(h){const f=i.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;Vn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];Vn.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=Vn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];i.push(v.x,v.y,0),a.push(0,0,1),r.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],S=v[0]+f,x=v[1]+f,w=v[2]+f;n.push(S,x,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ff(e,t)}static fromJSON(t,e){const n=[];for(let i=0,a=t.shapes.length;i<a;i++){const r=e[t.shapes[i]];n.push(r)}return new En(n,t.curveSegments)}}function ff(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ye extends Ne{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],f=new P,u=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],S=p/n,x=r+S*o,w=t*Math.cos(x),E=Math.sqrt(t*t-w*w);let C=0;p===0&&r===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let b=0;b<=e;b++){const T=b/e,L=i+T*a;f.x=-E*Math.cos(L),f.y=w,f.z=E*Math.sin(L),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(T+C,1-S),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const S=h[p][v+1],x=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||r>0)&&d.push(S,x,E),(p!==n-1||c<Math.PI)&&d.push(x,w,E)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ii extends Ne{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],f=[],u=new P,d=new P,g=new P;for(let _=0;_<=n;_++){const m=r+_/n*o;for(let p=0;p<=i;p++){const v=p/i*a;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const p=(i+1)*_+m-1,v=(i+1)*(_-1)+m-1,S=(i+1)*(_-1)+m,x=(i+1)*_+m;c.push(p,v,x),c.push(v,S,x)}this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Qa extends Ne{constructor(t=new Fh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new P,c=new P,l=new rt;let h=new P;const f=[],u=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function _(){for(let S=0;S<e;S++)m(S);m(a===!1?e:0),v(),p()}function m(S){h=t.getPointAt(S/e,h);const x=r.normals[S],w=r.binormals[S];for(let E=0;E<=i;E++){const C=E/i*Math.PI*2,b=Math.sin(C),T=-Math.cos(C);c.x=T*x.x+b*w.x,c.y=T*x.y+b*w.y,c.z=T*x.z+b*w.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let x=1;x<=i;x++){const w=(i+1)*(S-1)+(x-1),E=(i+1)*S+(x-1),C=(i+1)*S+x,b=(i+1)*(S-1)+x;g.push(w,E,b),g.push(E,C,b)}}function v(){for(let S=0;S<=e;S++)for(let x=0;x<=i;x++)l.x=S/e,l.y=x/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qa(new za[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function cs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(sc(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(sc(i[0])){const a=[];for(let r=0,o=i.length;r<o;r++)a[r]=i[r].clone();t[e][n]=a}else t[e][n]=i.slice();else t[e][n]=i}}return t}function qe(s){const t={};for(let e=0;e<s.length;e++){const n=cs(s[e]);for(const i in n)t[i]=n[i]}return t}function sc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function df(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const pf={clone:cs,merge:qe};var mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(i.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class vf extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class me extends us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xf extends us{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _f extends us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mf extends us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dl extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Gh extends dl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Fr=new ne,ac=new P,rc=new P;class Wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(ac),rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Fr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fr,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=i?i.z/a.x:1,o=i?i.w/a.y:1,c=i?i.x/a.x:0,l=i?i.y/a.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ga=new P,va=new Ge,yn=new P;class Xh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ga,va,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,va,yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ga,va,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,va,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jn=new P,oc=new rt,lc=new rt;class tn extends Xh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,oc,lc),e.subVectors(lc,oc)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class bf extends Wh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Sf extends dl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ja extends Xh{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yf extends Wh{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qh extends dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new yf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ji=-90,Ki=1;class wf extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Ji,Ki,t,e);i.layers=this.layers,this.add(i);const a=new tn(Ji,Ki,t,e);a.layers=this.layers,this.add(a);const r=new tn(Ji,Ki,t,e);r.layers=this.layers,this.add(r);const o=new tn(Ji,Ki,t,e);o.layers=this.layers,this.add(o);const c=new tn(Ji,Ki,t,e);c.layers=this.layers,this.add(c);const l=new tn(Ji,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ef extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const cc=new ne;class Tf{constructor(t,e,n=0,i=1/0){this.ray=new Rh(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cc),this}intersectObject(t,e=!0,n=[]){return zo(t,this,n,e),n.sort(hc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)zo(t[i],this,n,e);return n.sort(hc),n}}function hc(s,t){return s.distance-t.distance}function zo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)zo(a[r],t,e,!0)}}class $h{static{$h.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const a=this.elements;return a[0]=t,a[2]=e,a[1]=n,a[3]=i,this}}function uc(s,t,e,n){const i=Af(n);switch(e){case Sh:return s*t;case jo:return s*t/i.components*i.byteLength;case tl:return s*t/i.components*i.byteLength;case Ri:return s*t*2/i.components*i.byteLength;case el:return s*t*2/i.components*i.byteLength;case yh:return s*t*3/i.components*i.byteLength;case xn:return s*t*4/i.components*i.byteLength;case nl:return s*t*4/i.components*i.byteLength;case Ea:case Ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ro:case lo:return Math.max(s,16)*Math.max(t,8)/4;case ao:case oo:return Math.max(s,8)*Math.max(t,8)/2;case co:case ho:case fo:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case uo:case Na:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case _o:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case So:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case yo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Po:case Lo:case Io:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Do:case No:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ua:case Uo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Af(s){switch(s){case en:case xh:return{byteLength:1,components:1};case ks:case _h:case Ln:return{byteLength:2,components:1};case Ko:case Qo:return{byteLength:2,components:4};case Pn:case Jo:case vn:return{byteLength:4,components:1};case Mh:case bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);function Yh(){let s=null,t=!1,e=null,n=null;function i(a,r){n=s.requestAnimationFrame(i),e(a,r)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Cf(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:a,update:r}}var Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
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
#endif`,Ad=`uniform sampler2D dfgLUT;
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
}`,Cd=`
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p1=`float getShadowMask() {
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
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,_1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,w1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P1=`uniform sampler2D t2D;
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`#include <common>
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
}`,F1=`#if DEPTH_PACKING == 3200
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
}`,O1=`#define DISTANCE
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
}`,B1=`#define DISTANCE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`uniform float scale;
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
}`,V1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#define LAMBERT
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
}`,q1=`#define LAMBERT
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
}`,$1=`#define MATCAP
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
}`,Y1=`#define MATCAP
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
}`,Z1=`#define NORMAL
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
}`,J1=`#define NORMAL
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
}`,K1=`#define PHONG
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
}`,Q1=`#define PHONG
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
}`,j1=`#define STANDARD
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
}`,tp=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,op=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Rf,alphahash_pars_fragment:Pf,alphamap_fragment:Lf,alphamap_pars_fragment:If,alphatest_fragment:Df,alphatest_pars_fragment:Nf,aomap_fragment:Uf,aomap_pars_fragment:Ff,batching_pars_vertex:Of,batching_vertex:Bf,begin_vertex:kf,beginnormal_vertex:zf,bsdfs:Hf,iridescence_fragment:Vf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:$f,color_fragment:Yf,color_pars_fragment:Zf,color_pars_vertex:Jf,color_vertex:Kf,common:Qf,cube_uv_reflection_fragment:jf,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:ad,colorspace_pars_fragment:rd,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:bd,envmap_vertex:ud,fog_vertex:fd,fog_pars_vertex:dd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:vd,lights_lambert_fragment:xd,lights_lambert_pars_fragment:_d,lights_pars_begin:Md,lights_toon_fragment:Sd,lights_toon_pars_fragment:yd,lights_phong_fragment:wd,lights_phong_pars_fragment:Ed,lights_physical_fragment:Td,lights_physical_pars_fragment:Ad,lights_fragment_begin:Cd,lights_fragment_maps:Rd,lights_fragment_end:Pd,lightprobes_pars_fragment:Ld,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Nd,logdepthbuf_vertex:Ud,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:Bd,map_particle_pars_fragment:kd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Hd,morphinstance_vertex:Vd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:$d,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:Kd,normalmap_pars_fragment:Qd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:e1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:s1,premultiplied_alpha_fragment:a1,project_vertex:r1,dithering_fragment:o1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:v1,skinnormal_vertex:x1,specularmap_fragment:_1,specularmap_pars_fragment:M1,tonemapping_fragment:b1,tonemapping_pars_fragment:S1,transmission_fragment:y1,transmission_pars_fragment:w1,uv_pars_fragment:E1,uv_pars_vertex:T1,uv_vertex:A1,worldpos_vertex:C1,background_vert:R1,background_frag:P1,backgroundCube_vert:L1,backgroundCube_frag:I1,cube_vert:D1,cube_frag:N1,depth_vert:U1,depth_frag:F1,distance_vert:O1,distance_frag:B1,equirect_vert:k1,equirect_frag:z1,linedashed_vert:H1,linedashed_frag:V1,meshbasic_vert:G1,meshbasic_frag:W1,meshlambert_vert:X1,meshlambert_frag:q1,meshmatcap_vert:$1,meshmatcap_frag:Y1,meshnormal_vert:Z1,meshnormal_frag:J1,meshphong_vert:K1,meshphong_frag:Q1,meshphysical_vert:j1,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:ap,shadow_frag:rp,sprite_vert:op,sprite_frag:lp},xt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Tn={basic:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new At(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qe([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qe([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qe([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:qe([xt.common,xt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:qe([xt.lights,xt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Tn.physical={uniforms:qe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const xa={r:0,b:0,g:0},cp=new ne,Zh=new qt;Zh.set(-1,0,0,0,1,0,0,0,1);function hp(s,t,e,n,i,a){const r=new At(0);let o=i===!0?0:1,c,l,h=null,f=0,u=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const x=v.backgroundBlurriness>0;S=t.get(S,x)}return S}function g(v){let S=!1;const x=d(v);x===null?m(r,o):x&&x.isColor&&(m(x,1),S=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,S){const x=d(S);x&&(x.isCubeTexture||x.mapping===Ja)?(l===void 0&&(l=new ee(new cn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:cs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zh),l.material.toneMapped=te.getTransfer(x.colorSpace)!==fe,(h!==x||f!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ee(new Ke(2,2),new In({name:"BackgroundMaterial",uniforms:cs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,S){v.getRGB(xa,Vh(s)),e.buffers.color.setClear(xa.r,xa.g,xa.b,S,a)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,S=1){r.set(v),o=S,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(r,o)},render:g,addToRenderList:_,dispose:p}}function up(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(D,B,O,N,R){let G=!1;const W=f(D,N,O,B);a!==W&&(a=W,l(a.object)),G=d(D,N,O,R),G&&g(D,N,O,R),R!==null&&t.update(R,s.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,x(D,B,O,N),R!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function c(){return s.createVertexArray()}function l(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,B,O,N){const R=N.wireframe===!0;let G=n[B.id];G===void 0&&(G={},n[B.id]=G);const W=D.isInstancedMesh===!0?D.id:0;let J=G[W];J===void 0&&(J={},G[W]=J);let q=J[O.id];q===void 0&&(q={},J[O.id]=q);let K=q[R];return K===void 0&&(K=u(c()),q[R]=K),K}function u(D){const B=[],O=[],N=[];for(let R=0;R<e;R++)B[R]=0,O[R]=0,N[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:N,object:D,attributes:{},index:null}}function d(D,B,O,N){const R=a.attributes,G=B.attributes;let W=0;const J=O.getAttributes();for(const q in J)if(J[q].location>=0){const Q=R[q];let wt=G[q];if(wt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(wt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(wt=D.instanceColor)),Q===void 0||Q.attribute!==wt||wt&&Q.data!==wt.data)return!0;W++}return a.attributesNum!==W||a.index!==N}function g(D,B,O,N){const R={},G=B.attributes;let W=0;const J=O.getAttributes();for(const q in J)if(J[q].location>=0){let Q=G[q];Q===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const wt={};wt.attribute=Q,Q&&Q.data&&(wt.data=Q.data),R[q]=wt,W++}a.attributes=R,a.attributesNum=W,a.index=N}function _(){const D=a.newAttributes;for(let B=0,O=D.length;B<O;B++)D[B]=0}function m(D){p(D,0)}function p(D,B){const O=a.newAttributes,N=a.enabledAttributes,R=a.attributeDivisors;O[D]=1,N[D]===0&&(s.enableVertexAttribArray(D),N[D]=1),R[D]!==B&&(s.vertexAttribDivisor(D,B),R[D]=B)}function v(){const D=a.newAttributes,B=a.enabledAttributes;for(let O=0,N=B.length;O<N;O++)B[O]!==D[O]&&(s.disableVertexAttribArray(O),B[O]=0)}function S(D,B,O,N,R,G,W){W===!0?s.vertexAttribIPointer(D,B,O,R,G):s.vertexAttribPointer(D,B,O,N,R,G)}function x(D,B,O,N){_();const R=N.attributes,G=O.getAttributes(),W=B.defaultAttributeValues;for(const J in G){const q=G[J];if(q.location>=0){let K=R[J];if(K===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const Q=K.normalized,wt=K.itemSize,St=t.get(K);if(St===void 0)continue;const jt=St.buffer,Wt=St.type,ae=St.bytesPerElement,Z=Wt===s.INT||Wt===s.UNSIGNED_INT||K.gpuType===Jo;if(K.isInterleavedBufferAttribute){const nt=K.data,_t=nt.stride,zt=K.offset;if(nt.isInstancedInterleavedBuffer){for(let Et=0;Et<q.locationSize;Et++)p(q.location+Et,nt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Et=0;Et<q.locationSize;Et++)m(q.location+Et);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Et=0;Et<q.locationSize;Et++)S(q.location+Et,wt/q.locationSize,Wt,Q,_t*ae,(zt+wt/q.locationSize*Et)*ae,Z)}else{if(K.isInstancedBufferAttribute){for(let nt=0;nt<q.locationSize;nt++)p(q.location+nt,K.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let nt=0;nt<q.locationSize;nt++)m(q.location+nt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let nt=0;nt<q.locationSize;nt++)S(q.location+nt,wt/q.locationSize,Wt,Q,wt*ae,wt/q.locationSize*nt*ae,Z)}}else if(W!==void 0){const Q=W[J];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(q.location,Q);break;case 3:s.vertexAttrib3fv(q.location,Q);break;case 4:s.vertexAttrib4fv(q.location,Q);break;default:s.vertexAttrib1fv(q.location,Q)}}}}v()}function w(){T();for(const D in n){const B=n[D];for(const O in B){const N=B[O];for(const R in N){const G=N[R];for(const W in G)h(G[W].object),delete G[W];delete N[R]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const B=n[D.id];for(const O in B){const N=B[O];for(const R in N){const G=N[R];for(const W in G)h(G[W].object),delete G[W];delete N[R]}}delete n[D.id]}function C(D){for(const B in n){const O=n[B];for(const N in O){const R=O[N];if(R[D.id]===void 0)continue;const G=R[D.id];for(const W in G)h(G[W].object),delete G[W];delete R[D.id]}}}function b(D){for(const B in n){const O=n[B],N=D.isInstancedMesh===!0?D.id:0,R=O[N];if(R!==void 0){for(const G in R){const W=R[G];for(const J in W)h(W[J].object),delete W[J];delete R[G]}delete O[N],Object.keys(O).length===0&&delete n[B]}}}function T(){L(),r=!0,a!==i&&(a=i,l(a.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function fp(s,t,e){let n;function i(c){n=c}function a(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function r(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,n,1)}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function dp(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==xn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==en&&C!==vn&&!b&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Gt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:w,samples:E}}function pp(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new ei,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||a&&!m)a?h(null):l();else{const v=a?0:n,S=v*4;let x=p.clippingState||null;c.value=x,x=h(g,u,S,d);for(let w=0;w!==S;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==_;++S,x+=4)r.copy(f[S]).applyMatrix4(v,o),r.normal.toArray(m,x),m[x+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const is=4,mp=6,gp=20,vp=256,Ms=new ja,fc=new At;let Or=null,Br=0,kr=0,zr=!1;const xp=new P,vi=new P;class Ho{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,a={}){const{size:r=256,position:o=xp}=a;Or=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,Br,kr),this._renderer.xr.enabled=zr,t.scissorTest=!1,Qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Ln,format:xn,colorSpace:Oa,depthBuffer:!1},i=dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_p(a)),this._blurMaterial=bp(a,t,e),this._ggxMaterial=Mp(a,t,e)}return i}_compileMaterial(t){const e=new ee(new Ne,t);this._renderer.compile(e,Ms)}_sceneToCubeUV(t,e,n,i,a){const c=new tn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(fc),f.toneMapping=Rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new cn,new Ui({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(fc),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+h[S],a.y,a.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+h[S],a.z)):(c.up.set(0,l[S],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+h[S]));const w=this._cubeSize;Qi(i,x*w,S>2?w:0,w,w),f.setRenderTarget(i),p&&f.render(_,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ci||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());const a=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;Qi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Ms)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let a=1;a<i;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-is?n-g+is:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Qi(a,m,p,3*_,2*_),i.setRenderTarget(a),i.render(o,Ms),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=g-n,Qi(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(o,Ms)}_blur(t,e,n,i){const a=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,a,e,n,r),this._blurPass(a,t,n,n,r)}_blurPass(t,e,n,i,a){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],f=3*h*(i>this._lodMax-is?i-this._lodMax+is:0),u=4*(this._cubeSize-h);Qi(e,f,u,3*h,2*h),r.setRenderTarget(e),r.render(c,Ms)}}function _p(s){const t=[],e=[];let n=s;const i=s-is+1+mp;for(let a=0;a<i;a++){const r=Math.pow(2,n);t.push(r);const o=1/(r-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,d=3,g=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){const v=p%3*2/3-1,S=p>2?0:-1,x=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(x,d*u*p);for(let w=0;w<u;w++){const E=h[w*2]*2-1,C=h[w*2+1]*2-1;p===0?vi.set(1,C,E):p===1?vi.set(-E,1,-C):p===2?vi.set(-E,C,1):p===3?vi.set(-1,C,-E):p===4?vi.set(-E,-1,C):vi.set(E,C,-1),vi.toArray(_,(p*u+w)*d)}}const m=new Ne;m.setAttribute("position",new nn(g,d)),m.setAttribute("outputDirection",new nn(_,d)),e.push(new ee(m,null)),n>is&&n--}return{lodMeshes:e,sizeLods:t}}function dc(s,t,e){const n=new _n(s,t,e);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Mp(s,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bp(s,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:gp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function pc(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function mc(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function tr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jh extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Lh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new cn(5,5,5),a=new In({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Gn});a.uniforms.tEquirect.value=e;const r=new ee(i,a),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Ve),new wf(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}function Sp(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===or||d===lr)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new Jh(g.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,g=d===or||d===lr,_=d===Ci||d===os;if(g||_){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ho(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return g&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new Ho(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===or?u.mapping=Ci:d===lr&&(u.mapping=os),u}function c(u){let d=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function l(u){const d=u.target;d.removeEventListener("dispose",l);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function yp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ss("WebGLRenderer: "+n+" extension not supported."),i}}}function wp(s,t,e,n){const i={},a=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const d=a.get(u);d&&(t.remove(d),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const d in u)t.update(u[d],s.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let S=0,x=v.length;S<x;S+=3){const w=v[S+0],E=v[S+1],C=v[S+2];u.push(w,E,E,C,C,w)}}else{const v=g.array;_=g.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const w=S+0,E=S+1,C=S+2;u.push(w,E,E,C,C,w)}}const m=new(g.count>=65535?Ch:Ah)(u,1);m.version=_;const p=a.get(f);p&&t.remove(p),a.set(f,m)}function h(f){const u=a.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Ep(s,t,e){let n;function i(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function c(f,u){s.drawElements(n,u,a,f*r),e.update(u,n,1)}function l(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,a,f*r,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Tp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:se("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ap(s,t,e){const n=new WeakMap,i=new _e;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=o.attributes.position.count*S,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*w*4*f),C=new Eh(E,x,w,f);C.type=vn,C.needsUpdate=!0;const b=S*4;for(let L=0;L<f;L++){const D=m[L],B=p[L],O=v[L],N=x*w*4*L;for(let R=0;R<D.count;R++){const G=R*b;d===!0&&(i.fromBufferAttribute(D,R),E[N+G+0]=i.x,E[N+G+1]=i.y,E[N+G+2]=i.z,E[N+G+3]=0),g===!0&&(i.fromBufferAttribute(B,R),E[N+G+4]=i.x,E[N+G+5]=i.y,E[N+G+6]=i.z,E[N+G+7]=0),_===!0&&(i.fromBufferAttribute(O,R),E[N+G+8]=i.x,E[N+G+9]=i.y,E[N+G+10]=i.z,E[N+G+11]=O.itemSize===4?i.w:1)}}u={count:f,texture:C,size:new rt(x,w)},n.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Cp(s,t,e,n,i){let a=new WeakMap;function r(l){const h=i.render.frame,f=l.geometry,u=t.get(l,f);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const Rp={[uh]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[dh]:"CINEON_TONE_MAPPING",[ph]:"ACES_FILMIC_TONE_MAPPING",[gh]:"AGX_TONE_MAPPING",[Za]:"NEUTRAL_TONE_MAPPING",[mh]:"CUSTOM_TONE_MAPPING"};function Pp(s,t,e,n,i,a){const r=new _n(t,e,{type:s,depthBuffer:i,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ne;l.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ie([0,2,0,0,2,0],2));const h=new vf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ee(l,h),u=new ja(-1,1,1,-1,0,1);let d=null,g=null,_=!1,m,p=null,v=[],S=!1;this.setSize=function(x,w){r.setSize(x,w),o!==null&&o.setSize(x,w),c!==null&&c.setSize(x,w);for(let E=0;E<v.length;E++){const C=v[E];C.setSize&&C.setSize(x,w)}},this.setEffects=function(x){v=x,S=v.length>0&&v[0].isRenderPass===!0;const w=r.width,E=r.height;v.length>0&&o===null&&(o=new _n(w,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new _n(w,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const b=v[C];b.setSize&&b.setSize(w,E)}},this.begin=function(x,w){if(_||x.toneMapping===Rn&&v.length===0)return!1;if(p=w,w!==null){const E=w.width,C=w.height;(r.width!==E||r.height!==C)&&this.setSize(E,C)}return S===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=Rn,!0},this.hasRenderPass=function(){return S},this.end=function(x,w){x.toneMapping=m,_=!0;let E=r,C=o;for(let b=0;b<v.length;b++){const T=v[b];T.enabled!==!1&&(T.render(x,C,E,w),T.needsSwap!==!1&&(E=C,C=C===o?c:o))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},te.getTransfer(d)===fe&&(h.defines.SRGB_TRANSFER="");const b=Rp[g];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Kh=new We,Vo=new Vs(1,1),Qh=new Eh,jh=new gu,t0=new Lh,gc=[],vc=[],xc=new Float32Array(16),_c=new Float32Array(9),Mc=new Float32Array(4);function fs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=gc[i];if(a===void 0&&(a=new Float32Array(i),gc[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function er(s,t){let e=vc[t];e===void 0&&(e=new Int32Array(t),vc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function Up(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Mc.set(n),s.uniformMatrix2fv(this.addr,!1,Mc),De(e,n)}}function Fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;_c.set(n),s.uniformMatrix3fv(this.addr,!1,_c),De(e,n)}}function Op(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;xc.set(n),s.uniformMatrix4fv(this.addr,!1,xc),De(e,n)}}function Bp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function Vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function qp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Vo.compareFunction=e.isReversedDepthBuffer()?sl:il,a=Vo):a=Kh,e.setTexture2D(t||a,i)}function $p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jh,i)}function Yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||t0,i)}function Zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qh,i)}function Jp(s){switch(s){case 5126:return Lp;case 35664:return Ip;case 35665:return Dp;case 35666:return Np;case 35674:return Up;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return zp;case 35669:case 35673:return Hp;case 5125:return Vp;case 36294:return Gp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Kp(s,t){s.uniform1fv(this.addr,t)}function Qp(s,t){const e=fs(t,this.size,2);s.uniform2fv(this.addr,e)}function jp(s,t){const e=fs(t,this.size,3);s.uniform3fv(this.addr,e)}function t2(s,t){const e=fs(t,this.size,4);s.uniform4fv(this.addr,e)}function e2(s,t){const e=fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function n2(s,t){const e=fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function i2(s,t){const e=fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function s2(s,t){s.uniform1iv(this.addr,t)}function a2(s,t){s.uniform2iv(this.addr,t)}function r2(s,t){s.uniform3iv(this.addr,t)}function o2(s,t){s.uniform4iv(this.addr,t)}function l2(s,t){s.uniform1uiv(this.addr,t)}function c2(s,t){s.uniform2uiv(this.addr,t)}function h2(s,t){s.uniform3uiv(this.addr,t)}function u2(s,t){s.uniform4uiv(this.addr,t)}function f2(s,t,e){const n=this.cache,i=t.length,a=er(e,i);Ie(n,a)||(s.uniform1iv(this.addr,a),De(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=Vo:r=Kh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||r,a[o])}function d2(s,t,e){const n=this.cache,i=t.length,a=er(e,i);Ie(n,a)||(s.uniform1iv(this.addr,a),De(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||jh,a[r])}function p2(s,t,e){const n=this.cache,i=t.length,a=er(e,i);Ie(n,a)||(s.uniform1iv(this.addr,a),De(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||t0,a[r])}function m2(s,t,e){const n=this.cache,i=t.length,a=er(e,i);Ie(n,a)||(s.uniform1iv(this.addr,a),De(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Qh,a[r])}function g2(s){switch(s){case 5126:return Kp;case 35664:return Qp;case 35665:return jp;case 35666:return t2;case 35674:return e2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return s2;case 35667:case 35671:return a2;case 35668:case 35672:return r2;case 35669:case 35673:return o2;case 5125:return l2;case 36294:return c2;case 36295:return h2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return f2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}class v2{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jp(e.type)}}class x2{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g2(e.type)}}class _2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function bc(s,t){s.seq.push(t),s.map[t.id]=t}function M2(s,t,e){const n=s.name,i=n.length;for(Hr.lastIndex=0;;){const a=Hr.exec(n),r=Hr.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){bc(e,l===void 0?new v2(o,s,t):new x2(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new _2(o),bc(e,f)),e=f}}}class Ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),c=t.getUniformLocation(e,o.name);M2(o,c,this)}const i=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Sc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const b2=37297;let S2=0;function y2(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const yc=new qt;function w2(s){te._getMatrix(yc,te.workingColorSpace,s);const t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Ba:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+y2(s.getShaderSource(t),o)}else return a}function E2(s,t){const e=w2(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const T2={[uh]:"Linear",[fh]:"Reinhard",[dh]:"Cineon",[ph]:"ACESFilmic",[gh]:"AgX",[Za]:"Neutral",[mh]:"Custom"};function A2(s,t){const e=T2[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _a=new P;function C2(){te.getLuminanceCoefficients(_a);const s=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function P2(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L2(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function Ls(s){return s!==""}function Ec(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(s){return s.replace(I2,N2)}const D2=new Map;function N2(s,t){let e=Zt[t];if(e===void 0){const n=D2.get(t);if(n!==void 0)e=Zt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Go(e)}const U2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(s){return s.replace(U2,F2)}function F2(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Cc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const O2={[Is]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function B2(s){return O2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k2={[Ci]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Ja]:"ENVMAP_TYPE_CUBE_UV"};function z2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":k2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const H2={[os]:"ENVMAP_MODE_REFRACTION"};function V2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":H2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G2={[Zo]:"ENVMAP_BLENDING_MULTIPLY",[$0]:"ENVMAP_BLENDING_MIX",[Y0]:"ENVMAP_BLENDING_ADD"};function W2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":G2[s.combine]||"ENVMAP_BLENDING_NONE"}function X2(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function q2(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=B2(e),l=z2(e),h=V2(e),f=W2(e),u=X2(e),d=R2(e),g=P2(a),_=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(m=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?A2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,E2("linearToOutputTexel",e.outputColorSpace),C2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),r=Go(r),r=Ec(r,e),r=Tc(r,e),o=Go(o),o=Ec(o,e),o=Tc(o,e),r=Ac(r),o=Ac(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+m+r,x=v+p+o,w=Sc(i,i.VERTEX_SHADER,S),E=Sc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,w),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(w)||"",N=i.getShaderInfoLog(E)||"",R=B.trim(),G=O.trim(),W=N.trim();let J=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,E);else{const K=wc(i,w,"vertex"),Q=wc(i,E,"fragment");se("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+R+`
`+K+`
`+Q)}else R!==""?Gt("WebGLProgram: Program Info Log:",R):(G===""||W==="")&&(q=!1);q&&(D.diagnostics={runnable:J,programLog:R,vertexShader:{log:G,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(E),b=new Ra(i,_),T=L2(i,_)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(_,b2)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S2++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let $2=0;class Y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Z2(t),e.set(t,n)),n}}class Z2{constructor(t){this.id=$2++,this.code=t,this.usedTimes=0}}function J2(s){return s===Ri||s===Na||s===Ua}function K2(s,t,e,n,i,a){const r=new rl,o=new Y2,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,T,L,D,B,O){const N=D.fog,R=B.geometry,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,J=t.get(b.envMap||G,W),q=J&&J.mapping===Ja?J.image.height:null,K=d[b.type];b.precision!==null&&(u=n.getMaxPrecision(b.precision),u!==b.precision&&Gt("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,wt=Q!==void 0?Q.length:0;let St=0;R.morphAttributes.position!==void 0&&(St=1),R.morphAttributes.normal!==void 0&&(St=2),R.morphAttributes.color!==void 0&&(St=3);let jt,Wt,ae,Z;if(K){const ge=Tn[K];jt=ge.vertexShader,Wt=ge.fragmentShader}else{jt=b.vertexShader,Wt=b.fragmentShader;const ge=o.getVertexShaderStage(b),ce=o.getFragmentShaderStage(b);o.update(b,ge,ce),ae=ge.id,Z=ce.id}const nt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),zt=B.isInstancedMesh===!0,Et=B.isBatchedMesh===!0,Ht=!!b.map,ue=!!b.matcap,it=!!J,at=!!b.aoMap,ot=!!b.lightMap,lt=!!b.bumpMap&&b.wireframe===!1,ft=!!b.normalMap,Bt=!!b.displacementMap,Ot=!!b.emissiveMap,Vt=!!b.metalnessMap,Xt=!!b.roughnessMap,I=b.anisotropy>0,le=b.clearcoat>0,Kt=b.dispersion>0,A=b.retroreflectivity>0,M=b.iridescence>0,k=b.sheen>0,V=b.transmission>0,$=I&&!!b.anisotropyMap,ht=le&&!!b.clearcoatMap,ut=le&&!!b.clearcoatNormalMap,Y=le&&!!b.clearcoatRoughnessMap,tt=M&&!!b.iridescenceMap,dt=M&&!!b.iridescenceThicknessMap,Nt=k&&!!b.sheenColorMap,vt=k&&!!b.sheenRoughnessMap,pt=!!b.specularMap,Ut=!!b.specularColorMap,kt=!!b.specularIntensityMap,$t=V&&!!b.transmissionMap,F=V&&!!b.thicknessMap,mt=!!b.gradientMap,j=!!b.alphaMap,gt=b.alphaTest>0,yt=!!b.alphaHash,st=!!b.extensions;let Ft=Rn;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const It={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:jt,fragmentShader:Wt,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Et,batchingColor:Et&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ht,matcap:ue,envMap:it,envMapMode:it&&J.mapping,envMapCubeUVHeight:q,aoMap:at,lightMap:ot,bumpMap:lt,normalMap:ft,displacementMap:Bt,emissiveMap:Ot,normalMapObjectSpace:ft&&b.normalMapType===K0,normalMapTangentSpace:ft&&b.normalMapType===Fa,packedNormalMap:ft&&b.normalMapType===Fa&&J2(b.normalMap.format),metalnessMap:Vt,roughnessMap:Xt,anisotropy:I,anisotropyMap:$,clearcoat:le,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:Y,dispersion:Kt,retroreflection:A,iridescence:M,iridescenceMap:tt,iridescenceThicknessMap:dt,sheen:k,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:pt,specularColorMap:Ut,specularIntensityMap:kt,transmission:V,transmissionMap:$t,thicknessMap:F,gradientMap:mt,opaque:b.transparent===!1&&b.blending===li&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:gt,alphaHash:yt,combine:b.combine,mapUv:Ht&&g(b.map.channel),aoMapUv:at&&g(b.aoMap.channel),lightMapUv:ot&&g(b.lightMap.channel),bumpMapUv:lt&&g(b.bumpMap.channel),normalMapUv:ft&&g(b.normalMap.channel),displacementMapUv:Bt&&g(b.displacementMap.channel),emissiveMapUv:Ot&&g(b.emissiveMap.channel),metalnessMapUv:Vt&&g(b.metalnessMap.channel),roughnessMapUv:Xt&&g(b.roughnessMap.channel),anisotropyMapUv:$&&g(b.anisotropyMap.channel),clearcoatMapUv:ht&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(b.sheenRoughnessMap.channel),specularMapUv:pt&&g(b.specularMap.channel),specularColorMapUv:Ut&&g(b.specularColorMap.channel),specularIntensityMapUv:kt&&g(b.specularIntensityMap.channel),transmissionMapUv:$t&&g(b.transmissionMap.channel),thicknessMapUv:F&&g(b.thicknessMap.channel),alphaMapUv:j&&g(b.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ft||I),vertexNormals:!!R.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!R.attributes.uv&&(Ht||j),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||R.attributes.normal===void 0&&ft===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:St,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Ht&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===fe,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$e,flipSided:b.side===Ye,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function m(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)T.push(L),T.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(p(T,b),v(T,b),T.push(s.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function p(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numSunLights),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numSunLightShadows),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),b.push(r.mask)}function S(b){const T=d[b.type];let L;if(T){const D=Tn[T];L=pf.clone(D.uniforms)}else L=b.uniforms;return L}function x(b,T){let L=h.get(T);return L!==void 0?++L.usedTimes:(L=new q2(s,T,b,i),l.push(L),h.set(T,L)),L}function w(b){if(--b.usedTimes===0){const T=l.indexOf(b);l[T]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function E(b){o.remove(b)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:C}}function Q2(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,c){s.get(r)[o]=c}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function j2(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Rc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pc(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,_,m,p){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},s[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function c(u,d,g,_,m,p,v){v.reversedDepth===!0&&(m=-m);const S=o(u,d,g,_,m,p);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):e.push(S)}function l(u,d,g,_,m,p){const v=o(u,d,g,_,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||j2),n.length>1&&n.sort(d||Rc),i.length>1&&i.sort(d||Rc)}function f(){for(let u=t,d=s.length;u<d;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:c,unshift:l,finish:f,sort:h}}function tm(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Pc,s.set(n,[r])):i>=a.length?(r=new Pc,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function em(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new At};break;case"SpotLight":e={position:new P,direction:new P,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function nm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let im=0;function sm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function am(s){const t=new em,e=nm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,a=new ne,r=new ne;function o(l){let h=0,f=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,S=0,x=0,w=0,E=0,C=0,b=0,T=0,L=0;l.sort(sm);for(let B=0,O=l.length;B<O;B++){const N=l[B],R=N.color,G=N.intensity,W=N.distance;let J=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ri?J=N.shadow.map.texture:J=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=R.r*G,f+=R.g*G,u+=R.b*G;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],G);L++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,Q=e.get(N);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=J;const wt=K.getViewportCount();for(let St=0;St<wt;St++)n.sunShadowMatrix[_+St]=K.getMatrix(St),n.sunShadowCascade[_+St]=K._cascadeData[St];_+=wt,g++}n.sun[d]=q,d++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,Q=e.get(N);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=N.shadow.matrix,w++}n.directional[m]=q,m++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(R).multiplyScalar(G),q.distance=W,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[v]=q;const K=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,K.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[v]=K.matrix,N.castShadow){const Q=e.get(N);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=J,C++}v++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(R).multiplyScalar(G),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=q,S++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const K=N.shadow,Q=e.get(N);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=q,p++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(G),q.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[x]=q,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==C||D.numSpotMaps!==b||D.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=C,D.numSpotMaps=b,D.numLightProbes=L,n.version=im++)}function c(l,h){let f=0,u=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){const x=l[v];if(x.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),f++}else if(x.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(x.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),r.identity(),a.copy(x.matrixWorld),a.premultiply(p),r.extractRotation(a),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Lc(s){const t=new am(s),e=[],n=[],i=[];function a(u){f.camera=u,e.length=0,n.length=0,i.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function rm(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Lc(s),t.set(i,[o])):a>=r.length?(o=new Lc(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lm=`uniform sampler2D shadow_pass;
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
}`,cm=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],hm=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ic=new ne,bs=new P,Vr=new P;function um(s,t,e){let n=new ll;const i=new rt,a=new rt,r=new _e,o=new _f,c=new Mf,l={},h=e.maxTextureSize,f={[hi]:Ye,[Ye]:hi,[$e]:$e},u=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:om,fragmentShader:lm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let p=this.type;this.render=function(E,C,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===C0&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);const T=s.getRenderTarget(),L=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Gn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==this.type;O&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(R=>R.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,R=E.length;N<R;N++){const G=E[N],W=G.shadow;if(W===void 0){Gt("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const J=W.getFrameExtents();i.multiply(J),a.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/J.x),i.x=a.x*J.x,W.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/J.y),i.y=a.y*J.y,W.mapSize.y=a.y));const q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Rs){if(G.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new _n(i.x,i.y,{format:Ri,type:Ln,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new Vs(i.x,i.y,vn),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=Xn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Be,W.map.depthTexture.magFilter=Be}else G.isPointLight?(W.map=new Jh(i.x),W.map.depthTexture=new Du(i.x,Pn)):(W.map=new _n(i.x,i.y),W.map.depthTexture=new Vs(i.x,i.y,Pn)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=Xn,this.type===Is?(W.map.depthTexture.compareFunction=q?sl:il,W.map.depthTexture.minFilter=Ve,W.map.depthTexture.magFilter=Ve):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Be,W.map.depthTexture.magFilter=Be);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();G.isPointLight!==!0&&W.updateMatrices(G,b);for(let Q=0;Q<K;Q++){const wt=W.getCamera(Q);if(G.isPointLight){const St=W.camera,jt=W.matrix,Wt=G.distance||St.far;Wt!==St.far&&(St.far=Wt,St.updateProjectionMatrix()),bs.setFromMatrixPosition(G.matrixWorld),St.position.copy(bs),Vr.copy(St.position),Vr.add(cm[Q]),St.up.copy(hm[Q]),St.lookAt(Vr),St.updateMatrixWorld(),jt.makeTranslation(-bs.x,-bs.y,-bs.z),Ic.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ic,St.coordinateSystem,St.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(W.map),s.clear());const St=W.getViewport(Q);r.set(a.x*St.x,a.y*St.y,a.x*St.z,a.y*St.w),B.viewport(r)}n=W.getFrustum(Q),x(C,b,wt,G,this.type)}W.isPointLightShadow!==!0&&this.type===Rs&&v(W,b),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,L,D)};function v(E,C){const b=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new _n(i.x,i.y,{format:Ri,type:Ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,b,u,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,b,d,_,null)}function S(E,C,b,T){let L=null;const D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)L=D;else if(L=b.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=L.uuid,O=C.uuid;let N=l[B];N===void 0&&(N={},l[B]=N);let R=N[O];R===void 0&&(R=L.clone(),N[O]=R,C.addEventListener("dispose",w)),L=R}if(L.visible=C.visible,L.wireframe=C.wireframe,T===Rs?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:f[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=s.properties.get(L);B.light=b}return L}function x(E,C,b,T,L){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Rs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const O=t.update(E),N=E.material;if(Array.isArray(N)){const R=O.groups;for(let G=0,W=R.length;G<W;G++){const J=R[G],q=N[J.materialIndex];if(q&&q.visible){const K=S(E,q,T,L);E.onBeforeShadow(s,E,C,b,O,K,J),s.renderBufferDirect(b,null,O,K,E,J),E.onAfterShadow(s,E,C,b,O,K,J)}}}else if(N.visible){const R=S(E,N,T,L);E.onBeforeShadow(s,E,C,b,O,R,null),s.renderBufferDirect(b,null,O,R,E,null),E.onAfterShadow(s,E,C,b,O,R,null)}}const B=E.children;for(let O=0,N=B.length;O<N;O++)x(B[O],C,b,T,L)}function w(E){E.target.removeEventListener("dispose",w);for(const b in l){const T=l[b],L=E.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function fm(s,t){function e(){let F=!1;const mt=new _e;let j=null;const gt=new _e(0,0,0,0);return{setMask:function(yt){j!==yt&&!F&&(s.colorMask(yt,yt,yt,yt),j=yt)},setLocked:function(yt){F=yt},setClear:function(yt,st,Ft,It,ge){ge===!0&&(yt*=It,st*=It,Ft*=It),mt.set(yt,st,Ft,It),gt.equals(mt)===!1&&(s.clearColor(yt,st,Ft,It),gt.copy(mt))},reset:function(){F=!1,j=null,gt.set(-1,0,0,0)}}}function n(){let F=!1,mt=!1,j=null,gt=null,yt=null;return{setReversed:function(st){if(mt!==st){const Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),mt=st;const It=yt;yt=null,this.setClear(It)}},getReversed:function(){return mt},setTest:function(st){st?nt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(st){j!==st&&!F&&(s.depthMask(st),j=st)},setFunc:function(st){if(mt&&(st=cu[st]),gt!==st){switch(st){case Kr:s.depthFunc(s.NEVER);break;case Qr:s.depthFunc(s.ALWAYS);break;case jr:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case to:s.depthFunc(s.EQUAL);break;case eo:s.depthFunc(s.GEQUAL);break;case no:s.depthFunc(s.GREATER);break;case io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=st}},setLocked:function(st){F=st},setClear:function(st){yt!==st&&(yt=st,mt&&(st=1-st),s.clearDepth(st))},reset:function(){F=!1,j=null,gt=null,yt=null,mt=!1}}}function i(){let F=!1,mt=null,j=null,gt=null,yt=null,st=null,Ft=null,It=null,ge=null;return{setTest:function(ce){F||(ce?nt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(ce){mt!==ce&&!F&&(s.stencilMask(ce),mt=ce)},setFunc:function(ce,hn,bn){(j!==ce||gt!==hn||yt!==bn)&&(s.stencilFunc(ce,hn,bn),j=ce,gt=hn,yt=bn)},setOp:function(ce,hn,bn){(st!==ce||Ft!==hn||It!==bn)&&(s.stencilOp(ce,hn,bn),st=ce,Ft=hn,It=bn)},setLocked:function(ce){F=ce},setClear:function(ce){ge!==ce&&(s.clearStencil(ce),ge=ce)},reset:function(){F=!1,mt=null,j=null,gt=null,yt=null,st=null,Ft=null,It=null,ge=null}}}const a=new e,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],_=null,m=!1,p=null,v=null,S=null,x=null,w=null,E=null,C=null,b=new At(0,0,0),T=0,L=!1,D=null,B=null,O=null,N=null,R=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=J>=2);let K=null,Q={};const wt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),jt=new _e().fromArray(wt),Wt=new _e().fromArray(St);function ae(F,mt,j,gt){const yt=new Uint8Array(4),st=s.createTexture();s.bindTexture(F,st),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<j;Ft++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(mt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return st}const Z={};Z[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(s.DEPTH_TEST),r.setFunc(Bs),lt(!1),ft(Cl),nt(s.CULL_FACE),at(Gn);function nt(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function _t(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function zt(F,mt){return u[F]!==mt?(s.bindFramebuffer(F,mt),u[F]=mt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function Et(F,mt){let j=g,gt=!1;if(F){j=d.get(mt),j===void 0&&(j=[],d.set(mt,j));const yt=F.textures;if(j.length!==yt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Ft=yt.length;st<Ft;st++)j[st]=s.COLOR_ATTACHMENT0+st;j.length=yt.length,gt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,gt=!0);gt&&s.drawBuffers(j)}function Ht(F){return _!==F?(s.useProgram(F),_=F,!0):!1}const ue={[es]:s.FUNC_ADD,[P0]:s.FUNC_SUBTRACT,[L0]:s.FUNC_REVERSE_SUBTRACT};ue[I0]=s.MIN,ue[D0]=s.MAX;const it={[N0]:s.ZERO,[U0]:s.ONE,[F0]:s.SRC_COLOR,[ch]:s.SRC_ALPHA,[V0]:s.SRC_ALPHA_SATURATE,[z0]:s.DST_COLOR,[B0]:s.DST_ALPHA,[O0]:s.ONE_MINUS_SRC_COLOR,[hh]:s.ONE_MINUS_SRC_ALPHA,[H0]:s.ONE_MINUS_DST_COLOR,[k0]:s.ONE_MINUS_DST_ALPHA,[G0]:s.CONSTANT_COLOR,[W0]:s.ONE_MINUS_CONSTANT_COLOR,[X0]:s.CONSTANT_ALPHA,[q0]:s.ONE_MINUS_CONSTANT_ALPHA};function at(F,mt,j,gt,yt,st,Ft,It,ge,ce){if(F===Gn){m===!0&&(_t(s.BLEND),m=!1);return}if(m===!1&&(nt(s.BLEND),m=!0),F!==R0){if(F!==p||ce!==L){if((v!==es||w!==es)&&(s.blendEquation(s.FUNC_ADD),v=es,w=es),ce)switch(F){case li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Os:s.blendFunc(s.ONE,s.ONE);break;case Rl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:se("WebGLState: Invalid blending: ",F);break}else switch(F){case li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Rl:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",F);break}S=null,x=null,E=null,C=null,b.set(0,0,0),T=0,p=F,L=ce}return}yt=yt||mt,st=st||j,Ft=Ft||gt,(mt!==v||yt!==w)&&(s.blendEquationSeparate(ue[mt],ue[yt]),v=mt,w=yt),(j!==S||gt!==x||st!==E||Ft!==C)&&(s.blendFuncSeparate(it[j],it[gt],it[st],it[Ft]),S=j,x=gt,E=st,C=Ft),(It.equals(b)===!1||ge!==T)&&(s.blendColor(It.r,It.g,It.b,ge),b.copy(It),T=ge),p=F,L=!1}function ot(F,mt){F.side===$e?_t(s.CULL_FACE):nt(s.CULL_FACE);let j=F.side===Ye;mt&&(j=!j),lt(j),F.blending===li&&F.transparent===!1?at(Gn):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),a.setMask(F.colorWrite);const gt=F.stencilWrite;o.setTest(gt),gt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}function ft(F){F!==T0?(nt(s.CULL_FACE),F!==B&&(F===Cl?s.cullFace(s.BACK):F===A0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),B=F}function Bt(F){F!==O&&(W&&s.lineWidth(F),O=F)}function Ot(F,mt,j){F?(nt(s.POLYGON_OFFSET_FILL),(N!==mt||R!==j)&&(N=mt,R=j,r.getReversed()&&(mt=-mt),s.polygonOffset(mt,j))):_t(s.POLYGON_OFFSET_FILL)}function Vt(F){F?nt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function Xt(F){F===void 0&&(F=s.TEXTURE0+G-1),K!==F&&(s.activeTexture(F),K=F)}function I(F,mt,j){j===void 0&&(K===null?j=s.TEXTURE0+G-1:j=K);let gt=Q[j];gt===void 0&&(gt={type:void 0,texture:void 0},Q[j]=gt),(gt.type!==F||gt.texture!==mt)&&(K!==j&&(s.activeTexture(j),K=j),s.bindTexture(F,mt||Z[F]),gt.type=F,gt.texture=mt)}function le(){const F=Q[K];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function M(){try{s.texSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function ht(){try{s.texStorage2D(...arguments)}catch(F){se("WebGLState:",F)}}function ut(){try{s.texStorage3D(...arguments)}catch(F){se("WebGLState:",F)}}function Y(){try{s.texImage2D(...arguments)}catch(F){se("WebGLState:",F)}}function tt(){try{s.texImage3D(...arguments)}catch(F){se("WebGLState:",F)}}function dt(F){return f[F]!==void 0?f[F]:s.getParameter(F)}function Nt(F,mt){f[F]!==mt&&(s.pixelStorei(F,mt),f[F]=mt)}function vt(F){jt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),jt.copy(F))}function pt(F){Wt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Wt.copy(F))}function Ut(F,mt){let j=l.get(mt);j===void 0&&(j=new WeakMap,l.set(mt,j));let gt=j.get(F);gt===void 0&&(gt=s.getUniformBlockIndex(mt,F.name),j.set(F,gt))}function kt(F,mt){const gt=l.get(mt).get(F);c.get(mt)!==gt&&(s.uniformBlockBinding(mt,gt,F.__bindingPointIndex),c.set(mt,gt))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,Q={},u={},d=new WeakMap,g=[],_=null,m=!1,p=null,v=null,S=null,x=null,w=null,E=null,C=null,b=new At(0,0,0),T=0,L=!1,D=null,B=null,O=null,N=null,R=null,jt.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:nt,disable:_t,bindFramebuffer:zt,drawBuffers:Et,useProgram:Ht,setBlending:at,setMaterial:ot,setFlipSided:lt,setCullFace:ft,setLineWidth:Bt,setPolygonOffset:Ot,setScissorTest:Vt,activeTexture:Xt,bindTexture:I,unbindTexture:le,compressedTexImage2D:Kt,compressedTexImage3D:A,texImage2D:Y,texImage3D:tt,pixelStorei:Nt,getParameter:dt,updateUBOMapping:Ut,uniformBlockBinding:kt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:vt,viewport:pt,reset:$t}}function dm(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return g?new OffscreenCanvas(A,M):ka("canvas")}function m(A,M,k){let V=1;const $=Kt(A);if(($.width>k||$.height>k)&&(V=k/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ht=Math.floor(V*$.width),ut=Math.floor(V*$.height);u===void 0&&(u=_(ht,ut));const Y=M?_(ht,ut):u;return Y.width=ht,Y.height=ut,Y.getContext("2d").drawImage(A,0,0,ht,ut),Gt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ht+"x"+ut+")."),Y}else return"data"in A&&Gt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function v(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(A,M,k,V,$,ht=!1){if(A!==null){if(s[A]!==void 0)return s[A];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;V&&(ut=t.get("EXT_texture_norm16"),ut||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===s.RED&&(k===s.FLOAT&&(Y=s.R32F),k===s.HALF_FLOAT&&(Y=s.R16F),k===s.UNSIGNED_BYTE&&(Y=s.R8),k===s.UNSIGNED_SHORT&&ut&&(Y=ut.R16_EXT),k===s.SHORT&&ut&&(Y=ut.R16_SNORM_EXT)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.R8UI),k===s.UNSIGNED_SHORT&&(Y=s.R16UI),k===s.UNSIGNED_INT&&(Y=s.R32UI),k===s.BYTE&&(Y=s.R8I),k===s.SHORT&&(Y=s.R16I),k===s.INT&&(Y=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Y=s.RG32F),k===s.HALF_FLOAT&&(Y=s.RG16F),k===s.UNSIGNED_BYTE&&(Y=s.RG8),k===s.UNSIGNED_SHORT&&ut&&(Y=ut.RG16_EXT),k===s.SHORT&&ut&&(Y=ut.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RG8UI),k===s.UNSIGNED_SHORT&&(Y=s.RG16UI),k===s.UNSIGNED_INT&&(Y=s.RG32UI),k===s.BYTE&&(Y=s.RG8I),k===s.SHORT&&(Y=s.RG16I),k===s.INT&&(Y=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),k===s.UNSIGNED_INT&&(Y=s.RGB32UI),k===s.BYTE&&(Y=s.RGB8I),k===s.SHORT&&(Y=s.RGB16I),k===s.INT&&(Y=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),k===s.UNSIGNED_INT&&(Y=s.RGBA32UI),k===s.BYTE&&(Y=s.RGBA8I),k===s.SHORT&&(Y=s.RGBA16I),k===s.INT&&(Y=s.RGBA32I)),M===s.RGB&&(k===s.UNSIGNED_SHORT&&ut&&(Y=ut.RGB16_EXT),k===s.SHORT&&ut&&(Y=ut.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),M===s.RGBA){const tt=ht?Ba:te.getTransfer($);k===s.FLOAT&&(Y=s.RGBA32F),k===s.HALF_FLOAT&&(Y=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Y=tt===fe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ut&&(Y=ut.RGBA16_EXT),k===s.SHORT&&ut&&(Y=ut.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(A,M){let k;return A?M===null||M===Pn||M===zs?k=s.DEPTH24_STENCIL8:M===vn?k=s.DEPTH32F_STENCIL8:M===ks&&(k=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pn||M===zs?k=s.DEPTH_COMPONENT24:M===vn?k=s.DEPTH_COMPONENT32F:M===ks&&(k=s.DEPTH_COMPONENT16),k}function E(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==Ve?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function b(A){const M=A.target;M.removeEventListener("dispose",b),D(M)}function T(A){const M=n.get(A);if(M.__webglInit===void 0)return;const k=A.source,V=d.get(k);if(V){const $=V[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(A),Object.keys(V).length===0&&d.delete(k)}n.remove(A)}function L(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const k=A.source,V=d.get(k);delete V[M.__cacheKey],r.memory.textures--}function D(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let $=0;$<M.__webglFramebuffer[V].length;$++)s.deleteFramebuffer(M.__webglFramebuffer[V][$]);else s.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)s.deleteFramebuffer(M.__webglFramebuffer[V]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=A.textures;for(let V=0,$=k.length;V<$;V++){const ht=n.get(k[V]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),r.memory.textures--),n.remove(k[V])}n.remove(A)}let B=0;function O(){B=0}function N(){return B}function R(A){B=A}function G(){const A=B;return A>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,A}function W(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function J(A,M){const k=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const V=A.image;if(V===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(k,A,M);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function q(A,M){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){_t(k,A,M);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function K(A,M){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){_t(k,A,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function Q(A,M){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){zt(k,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const wt={[Da]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[so]:s.MIRRORED_REPEAT},St={[Be]:s.NEAREST,[Z0]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[cr]:s.LINEAR_MIPMAP_NEAREST,[Ei]:s.LINEAR_MIPMAP_LINEAR},jt={[j0]:s.NEVER,[su]:s.ALWAYS,[tu]:s.LESS,[il]:s.LEQUAL,[eu]:s.EQUAL,[sl]:s.GEQUAL,[nu]:s.GREATER,[iu]:s.NOTEQUAL};function Wt(A,M){if(M.type===vn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ve||M.magFilter===cr||M.magFilter===Zs||M.magFilter===Ei||M.minFilter===Ve||M.minFilter===cr||M.minFilter===Zs||M.minFilter===Ei)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,wt[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,wt[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,wt[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,St[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,St[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,jt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Be||M.minFilter!==Zs&&M.minFilter!==Ei||M.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ae(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const V=M.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const ht=W(M);if(ht!==A.__cacheKey){$[ht]===void 0&&($[ht]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),$[ht].usedTimes++;const ut=$[A.__cacheKey];ut!==void 0&&($[A.__cacheKey].usedTimes--,ut.usedTimes===0&&L(M)),A.__cacheKey=ht,A.__webglTexture=$[ht].texture}return k}function Z(A,M,k){return Math.floor(Math.floor(A/k)/M)}function nt(A,M,k,V){const ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,k,V,M.data);else{ht.sort((Nt,vt)=>Nt.start-vt.start);let ut=0;for(let Nt=1;Nt<ht.length;Nt++){const vt=ht[ut],pt=ht[Nt],Ut=vt.start+vt.count,kt=Z(pt.start,M.width,4),$t=Z(vt.start,M.width,4);pt.start<=Ut+1&&kt===$t&&Z(pt.start+pt.count-1,M.width,4)===kt?vt.count=Math.max(vt.count,pt.start+pt.count-vt.start):(++ut,ht[ut]=pt)}ht.length=ut+1;const Y=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Nt=0,vt=ht.length;Nt<vt;Nt++){const pt=ht[Nt],Ut=Math.floor(pt.start/4),kt=Math.ceil(pt.count/4),$t=Ut%M.width,F=Math.floor(Ut/M.width),mt=kt,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,$t,F,mt,j,k,V,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function _t(A,M,k){let V=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=s.TEXTURE_3D);const $=ae(A,M),ht=M.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+k);const ut=n.get(ht);if(ht.version!==ut.__version||$===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const j=te.getPrimaries(te.workingColorSpace),gt=M.colorSpace===ni?null:te.getPrimaries(M.colorSpace),yt=M.colorSpace===ni||j===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let tt=m(M.image,!1,i.maxTextureSize);tt=le(M,tt);const dt=a.convert(M.format,M.colorSpace),Nt=a.convert(M.type);let vt=x(M.internalFormat,dt,Nt,M.normalized,M.colorSpace,M.isVideoTexture);Wt(V,M);let pt;const Ut=M.mipmaps,kt=M.isVideoTexture!==!0,$t=ut.__version===void 0||$===!0,F=ht.dataReady,mt=E(M,tt);if(M.isDepthTexture)vt=w(M.format===Ti,M.type),$t&&(kt?e.texStorage2D(s.TEXTURE_2D,1,vt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,vt,tt.width,tt.height,0,dt,Nt,null));else if(M.isDataTexture)if(Ut.length>0){kt&&$t&&e.texStorage2D(s.TEXTURE_2D,mt,vt,Ut[0].width,Ut[0].height);for(let j=0,gt=Ut.length;j<gt;j++)pt=Ut[j],kt?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,dt,Nt,pt.data):e.texImage2D(s.TEXTURE_2D,j,vt,pt.width,pt.height,0,dt,Nt,pt.data);M.generateMipmaps=!1}else kt?($t&&e.texStorage2D(s.TEXTURE_2D,mt,vt,tt.width,tt.height),F&&nt(M,tt,dt,Nt)):e.texImage2D(s.TEXTURE_2D,0,vt,tt.width,tt.height,0,dt,Nt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&$t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,vt,Ut[0].width,Ut[0].height,tt.depth);for(let j=0,gt=Ut.length;j<gt;j++)if(pt=Ut[j],M.format!==xn)if(dt!==null)if(kt){if(F)if(M.layerUpdates.size>0){const yt=uc(pt.width,pt.height,M.format,M.type);for(const st of M.layerUpdates){const Ft=pt.data.subarray(st*yt/pt.data.BYTES_PER_ELEMENT,(st+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,st,pt.width,pt.height,1,dt,Ft)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,tt.depth,dt,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,vt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,tt.depth,dt,Nt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,vt,pt.width,pt.height,tt.depth,0,dt,Nt,pt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{kt&&$t&&e.texStorage2D(s.TEXTURE_2D,mt,vt,Ut[0].width,Ut[0].height);for(let j=0,gt=Ut.length;j<gt;j++)pt=Ut[j],M.format!==xn?dt!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,vt,pt.width,pt.height,0,pt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,dt,Nt,pt.data):e.texImage2D(s.TEXTURE_2D,j,vt,pt.width,pt.height,0,dt,Nt,pt.data)}else if(M.isDataArrayTexture)if(kt){if($t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,vt,tt.width,tt.height,tt.depth),F)if(M.layerUpdates.size>0){const j=uc(tt.width,tt.height,M.format,M.type);for(const gt of M.layerUpdates){const yt=tt.data.subarray(gt*j/tt.data.BYTES_PER_ELEMENT,(gt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,tt.width,tt.height,1,dt,Nt,yt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,Nt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,tt.width,tt.height,tt.depth,0,dt,Nt,tt.data);else if(M.isData3DTexture)kt?($t&&e.texStorage3D(s.TEXTURE_3D,mt,vt,tt.width,tt.height,tt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,Nt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,vt,tt.width,tt.height,tt.depth,0,dt,Nt,tt.data);else if(M.isFramebufferTexture){if($t)if(kt)e.texStorage2D(s.TEXTURE_2D,mt,vt,tt.width,tt.height);else{let j=tt.width,gt=tt.height;for(let yt=0;yt<mt;yt++)e.texImage2D(s.TEXTURE_2D,yt,vt,j,gt,0,dt,Nt,null),j>>=1,gt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),f.add(M),j.onpaint=gt=>{const yt=gt.changedElements;for(const st of f)yt.includes(st.image)&&(st.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{const yt=s.RGBA,st=s.RGBA,Ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,st,Ft,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(kt&&$t){const j=Kt(Ut[0]);e.texStorage2D(s.TEXTURE_2D,mt,vt,j.width,j.height)}for(let j=0,gt=Ut.length;j<gt;j++)pt=Ut[j],kt?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,dt,Nt,pt):e.texImage2D(s.TEXTURE_2D,j,vt,dt,Nt,pt);M.generateMipmaps=!1}else if(kt){if($t){const j=Kt(tt);e.texStorage2D(s.TEXTURE_2D,mt,vt,j.width,j.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Nt,tt)}else e.texImage2D(s.TEXTURE_2D,0,vt,dt,Nt,tt);p(M)&&v(V),ut.__version=ht.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function zt(A,M,k){if(M.image.length!==6)return;const V=ae(A,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);const ht=n.get($);if($.version!==ht.__version||V===!0){e.activeTexture(s.TEXTURE0+k);const ut=te.getPrimaries(te.workingColorSpace),Y=M.colorSpace===ni?null:te.getPrimaries(M.colorSpace),tt=M.colorSpace===ni||ut===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const dt=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let st=0;st<6;st++)!dt&&!Nt?vt[st]=m(M.image[st],!0,i.maxCubemapSize):vt[st]=Nt?M.image[st].image:M.image[st],vt[st]=le(M,vt[st]);const pt=vt[0],Ut=a.convert(M.format,M.colorSpace),kt=a.convert(M.type),$t=x(M.internalFormat,Ut,kt,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,mt=ht.__version===void 0||V===!0,j=$.dataReady;let gt=E(M,pt);Wt(s.TEXTURE_CUBE_MAP,M);let yt;if(dt){F&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,$t,pt.width,pt.height);for(let st=0;st<6;st++){yt=vt[st].mipmaps;for(let Ft=0;Ft<yt.length;Ft++){const It=yt[Ft];M.format!==xn?Ut!==null?F?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,It.width,It.height,Ut,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,$t,It.width,It.height,0,It.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,It.width,It.height,Ut,kt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,$t,It.width,It.height,0,Ut,kt,It.data)}}}else{if(yt=M.mipmaps,F&&mt){yt.length>0&&gt++;const st=Kt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,$t,st.width,st.height)}for(let st=0;st<6;st++)if(Nt){F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt[st].width,vt[st].height,Ut,kt,vt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,vt[st].width,vt[st].height,0,Ut,kt,vt[st].data);for(let Ft=0;Ft<yt.length;Ft++){const ge=yt[Ft].image[st].image;F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,ge.width,ge.height,Ut,kt,ge.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,$t,ge.width,ge.height,0,Ut,kt,ge.data)}}else{F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,kt,vt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,Ut,kt,vt[st]);for(let Ft=0;Ft<yt.length;Ft++){const It=yt[Ft];F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Ut,kt,It.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,$t,Ut,kt,It.image[st])}}}p(M)&&v(s.TEXTURE_CUBE_MAP),ht.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Et(A,M,k,V,$,ht){const ut=a.convert(k.format,k.colorSpace),Y=a.convert(k.type),tt=x(k.internalFormat,ut,Y,k.normalized,k.colorSpace),dt=n.get(M),Nt=n.get(k);if(Nt.__renderTarget=M,!dt.__hasExternalTextures){const vt=Math.max(1,M.width>>ht),pt=Math.max(1,M.height>>ht);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,ht,tt,vt,pt,M.depth,0,ut,Y,null):e.texImage2D($,ht,tt,vt,pt,0,ut,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,$,Nt.__webglTexture,0,Vt(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,$,Nt.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(A,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const V=M.depthTexture,$=V&&V.isDepthTexture?V.type:null,ht=w(M.stencilBuffer,$),ut=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(M),ht,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(M),ht,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ht,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,A)}else{const V=M.textures;for(let $=0;$<V.length;$++){const ht=V[$],ut=a.convert(ht.format,ht.colorSpace),Y=a.convert(ht.type),tt=x(ht.internalFormat,ut,Y,ht.normalized,ht.colorSpace);Xt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(M),tt,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(M),tt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,tt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(A,M,k){const V=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(M.depthTexture);if($.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,M.depthTexture);const dt=a.convert(M.depthTexture.format),Nt=a.convert(M.depthTexture.type);let vt;M.depthTexture.format===Xn?vt=s.DEPTH_COMPONENT24:M.depthTexture.format===Ti&&(vt=s.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,vt,M.width,M.height,0,dt,Nt,null)}}else J(M.depthTexture,0);const ht=$.__webglTexture,ut=Vt(M),Y=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,tt=M.depthTexture.format===Ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xn)Xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Y,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,tt,Y,ht,0);else if(M.depthTexture.format===Ti)Xt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Y,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,tt,Y,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(A){const M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=V}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)ue(M.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?ue(M.__webglFramebuffer[0],A,0):ue(M.__webglFramebuffer,A,0)}else if(k){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=s.createRenderbuffer(),Ht(M.__webglDepthbuffer[V],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ht)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ht(M.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ht)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(A,M,k){const V=n.get(A);M!==void 0&&Et(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&it(A)}function ot(A){const M=A.texture,k=n.get(A),V=n.get(M);A.addEventListener("dispose",b);const $=A.textures,ht=A.isWebGLCubeRenderTarget===!0,ut=$.length>1;if(ut||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=M.version,r.memory.textures++),ht){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let tt=0;tt<M.mipmaps.length;tt++)k.__webglFramebuffer[Y][tt]=s.createFramebuffer()}else k.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)k.__webglFramebuffer[Y]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ut)for(let Y=0,tt=$.length;Y<tt;Y++){const dt=n.get($[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Xt(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){const tt=$[Y];k.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const dt=a.convert(tt.format,tt.colorSpace),Nt=a.convert(tt.type),vt=x(tt.internalFormat,dt,Nt,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),pt=Vt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,vt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ht(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)Et(k.__webglFramebuffer[Y][tt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,tt);else Et(k.__webglFramebuffer[Y],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(M)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let Y=0,tt=$.length;Y<tt;Y++){const dt=$[Y],Nt=n.get(dt);let vt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,Nt.__webglTexture),Wt(vt,dt),Et(k.__webglFramebuffer,A,dt,s.COLOR_ATTACHMENT0+Y,vt,0),p(dt)&&v(vt)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,V.__webglTexture),Wt(Y,M),M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)Et(k.__webglFramebuffer[tt],A,M,s.COLOR_ATTACHMENT0,Y,tt);else Et(k.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,Y,0);p(M)&&v(Y),e.unbindTexture()}A.depthBuffer&&it(A)}function lt(A){const M=A.textures;for(let k=0,V=M.length;k<V;k++){const $=M[k];if(p($)){const ht=S(A),ut=n.get($).__webglTexture;e.bindTexture(ht,ut),v(ht),e.unbindTexture()}}}const ft=[],Bt=[];function Ot(A){if(A.samples>0){if(Xt(A)===!1){const M=A.textures,k=A.width,V=A.height;let $=s.COLOR_BUFFER_BIT;const ht=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(A),Y=M.length>1;if(Y)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);const tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const Nt=n.get(M[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,k,V,0,0,k,V,$,s.NEAREST),c===!0&&(ft.length=0,Bt.length=0,ft.push(s.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ft.push(ht),Bt.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const Nt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function Xt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function I(A){const M=r.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function le(A,M){const k=A.colorSpace,V=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Oa&&k!==ni&&(te.getTransfer(k)===fe?(V!==xn||$!==en)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",k)),M}function Kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.getTextureUnits=N,this.setTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function pm(s,t){function e(n,i=ni){let a;const r=te.getTransfer(i);if(n===en)return s.UNSIGNED_BYTE;if(n===Ko)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return s.BYTE;if(n===_h)return s.SHORT;if(n===ks)return s.UNSIGNED_SHORT;if(n===Jo)return s.INT;if(n===Pn)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===Ln)return s.HALF_FLOAT;if(n===Sh)return s.ALPHA;if(n===yh)return s.RGB;if(n===xn)return s.RGBA;if(n===Xn)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===jo)return s.RED;if(n===tl)return s.RED_INTEGER;if(n===Ri)return s.RG;if(n===el)return s.RG_INTEGER;if(n===nl)return s.RGBA_INTEGER;if(n===Ea||n===Ta||n===Aa||n===Ca)if(r===fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===ro||n===oo||n===lo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===Na||n===mo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===co||n===ho)return r===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===uo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===fo)return a.COMPRESSED_R11_EAC;if(n===po)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Na)return a.COMPRESSED_RG11_EAC;if(n===mo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===go||n===vo||n===xo||n===_o||n===Mo||n===bo||n===So||n===yo||n===wo||n===Eo||n===To||n===Ao||n===Co||n===Ro)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===go)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return r===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Lo||n===Io)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Po)return r===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===No||n===Ua||n===Uo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Do)return a.COMPRESSED_RED_RGTC1_EXT;if(n===No)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gm=`
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

}`;class vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ih(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:mm,fragmentShader:gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends Ni{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new vm,p={},v=e.getContextAttributes();let S=null,x=null;const w=[],E=[],C=new rt;let b=null,T=null;const L=new tn;L.viewport=new _e;const D=new tn;D.viewport=new _e;const B=[L,D],O=new Ef;let N=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=w[Z];return nt===void 0&&(nt=new xr,w[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=w[Z];return nt===void 0&&(nt=new xr,w[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=w[Z];return nt===void 0&&(nt=new xr,w[Z]=nt),nt.getHandSpace()};function G(Z){const nt=E.indexOf(Z.inputSource);if(nt===-1)return;const _t=w[nt];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,l||r),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",J);for(let Z=0;Z<w.length;Z++){const nt=E[Z];nt!==null&&(E[Z]=null,w[Z].disconnect(nt))}N=null,R=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(S),d=null,u=null,f=null,i=null,x=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",W),i.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,zt=null,Et=null;v.depth&&(Et=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?Ti:Xn,zt=v.stencil?zs:Pn);const Ht={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(Ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new _n(u.textureWidth,u.textureHeight,{format:xn,type:en,depthTexture:new Vs(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new _n(d.framebufferWidth,d.framebufferHeight,{format:xn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let nt=0;nt<Z.removed.length;nt++){const _t=Z.removed[nt],zt=E.indexOf(_t);zt>=0&&(E[zt]=null,w[zt].disconnect(_t))}for(let nt=0;nt<Z.added.length;nt++){const _t=Z.added[nt];let zt=E.indexOf(_t);if(zt===-1){for(let Ht=0;Ht<w.length;Ht++)if(Ht>=E.length){E.push(_t),zt=Ht;break}else if(E[Ht]===null){E[Ht]=_t,zt=Ht;break}if(zt===-1)break}const Et=w[zt];Et&&Et.connect(_t)}}const q=new P,K=new P;function Q(Z,nt,_t){q.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const zt=q.distanceTo(K),Et=nt.projectionMatrix.elements,Ht=_t.projectionMatrix.elements,ue=Et[14]/(Et[10]-1),it=Et[14]/(Et[10]+1),at=(Et[9]+1)/Et[5],ot=(Et[9]-1)/Et[5],lt=(Et[8]-1)/Et[0],ft=(Ht[8]+1)/Ht[0],Bt=ue*lt,Ot=ue*ft,Vt=zt/(-lt+ft),Xt=Vt*-lt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xt),Z.translateZ(Vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Et[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const I=ue+Vt,le=it+Vt,Kt=Bt-Xt,A=Ot+(zt-Xt),M=at*it/le*I,k=ot*it/le*I;Z.projectionMatrix.makePerspective(Kt,A,M,k,I,le),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function wt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let nt=Z.near,_t=Z.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),O.near=D.near=L.near=nt,O.far=D.far=L.far=_t,(N!==O.near||R!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,R=O.far),O.layers.mask=Z.layers.mask|6,L.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const zt=Z.parent,Et=O.cameras;wt(O,zt);for(let Ht=0;Ht<Et.length;Ht++)wt(Et[Ht],zt);Et.length===2?Q(O,L,D):O.projectionMatrix.copy(L.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),St(Z,O,zt)};function St(Z,nt,_t){_t===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Fo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let jt=null;function Wt(Z,nt){if(h=nt.getViewerPose(l||r),g=nt,h!==null){const _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let zt=!1;_t.length!==O.cameras.length&&(O.cameras.length=0,zt=!0);for(let it=0;it<_t.length;it++){const at=_t[it];let ot=null;if(d!==null)ot=d.getViewport(at);else{const ft=f.getViewSubImage(u,at);ot=ft.viewport,it===0&&(t.setRenderTargetTextures(x,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(x))}let lt=B[it];lt===void 0&&(lt=new tn,lt.layers.enable(it),lt.viewport=new _e,B[it]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),it===0&&(O.matrix.copy(lt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),zt===!0&&O.cameras.push(lt)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const it=f.getDepthInformation(_t[0]);it&&it.isValid&&it.texture&&m.init(it,i.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let it=0;it<_t.length;it++){const at=_t[it].camera;if(at){let ot=p[at];ot||(ot=new Ih,p[at]=ot);const lt=f.getCameraImage(at);ot.sourceTexture=lt}}}}for(let _t=0;_t<w.length;_t++){const zt=E[_t],Et=w[_t];zt!==null&&Et!==void 0&&Et.update(zt,nt,l||r)}jt&&jt(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ae=new Yh;ae.setAnimationLoop(Wt),this.setAnimationLoop=function(Z){jt=Z},this.dispose=function(){}}}const _m=new ne,e0=new qt;e0.set(-1,0,0,0,1,0,0,0,1);function Mm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),f(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(e0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bm(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,w){const E=w.program;n.uniformBlockBinding(x,E)}function l(x,w){let E=i[x.id];E===void 0&&(m(x),E=h(x),i[x.id]=E,x.addEventListener("dispose",v));const C=w.program;n.updateUBOMapping(x,C);const b=t.render.frame;a[x.id]!==b&&(u(x),a[x.id]=b)}function h(x){const w=f();x.__bindingPointIndex=w;const E=s.createBuffer(),C=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,E),E}function f(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const w=i[x.id],E=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let b=0,T=E.length;b<T;b++){const L=E[b];if(Array.isArray(L))for(let D=0,B=L.length;D<B;D++)d(L[D],b,D,C);else d(L,b,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,w,E,C){if(_(x,w,E,C)===!0){const b=x.__offset,T=x.value;if(Array.isArray(T)){let L=0;for(let D=0;D<T.length;D++){const B=T[D],O=p(B);g(B,x.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,x.__data)}}function g(x,w,E){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,E)}function _(x,w,E,C){const b=x.value,T=w+"_"+E;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:ArrayBuffer.isView(b)?C[T]=b.slice():C[T]=b.clone(),!0;{const L=C[T];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return C[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(L.equals(b)===!1)return L.copy(b),!0}}return!1}function m(x){const w=x.uniforms;let E=0;const C=16;for(let T=0,L=w.length;T<L;T++){const D=Array.isArray(w[T])?w[T]:[w[T]];for(let B=0,O=D.length;B<O;B++){const N=D[B],R=Array.isArray(N.value)?N.value:[N.value];for(let G=0,W=R.length;G<W;G++){const J=R[G],q=p(J),K=E%C,Q=K%q.boundary,wt=K+Q;E+=Q,wt!==0&&C-wt<q.storage&&(E+=C-wt),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=q.storage}}}const b=E%C;return b>0&&(E+=C-b),x.__size=E,x.__cache={},this}function p(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",x),w}function v(x){const w=x.target;w.removeEventListener("dispose",v);const E=r.indexOf(w.__bindingPointIndex);r.splice(E,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete a[w.id]}function S(){for(const x in i)s.deleteBuffer(i[x]);r=[],i={},a={}}return{bind:c,update:l,dispose:S}}const Sm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function ym(){return wn===null&&(wn=new Ph(Sm,16,16,Ri,Ln),wn.name="DFG_LUT",wn.minFilter=Ve,wn.magFilter=Ve,wn.wrapS=Hn,wn.wrapT=Hn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class n0{constructor(t={}){const{canvas:e=ou(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=en}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const _=d,m=new Set([nl,el,tl]),p=new Set([en,Pn,ks,zs,Ko,Qo]),v=new Uint32Array(4),S=new Int32Array(4),x=new P;let w=null,E=null;const C=[],b=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,B=null,O=null,N=null,R=null;this._outputColorSpace=we;let G=0,W=0,J=null,q=-1,K=null;const Q=new _e,wt=new _e;let St=null;const jt=new At(0);let Wt=0,ae=e.width,Z=e.height,nt=1,_t=null,zt=null;const Et=new _e(0,0,ae,Z),Ht=new _e(0,0,ae,Z);let ue=!1;const it=new ll;let at=!1,ot=!1;const lt=new ne,ft=new P,Bt=new _e,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Xt(){return J===null?nt:1}let I=n;function le(y,U){return e.getContext(y,U)}let Kt,A,M,k,V,$,ht,ut,Y,tt,dt,Nt,vt,pt,Ut,kt,$t,F,mt,j,gt,yt,st;try{const y={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",hn,!1),I===null){const U="webgl2";if(I=le(U,y),I===null)throw le(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(y){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),se("WebGLRenderer: "+y.message),y}function Ft(){Kt=new yp(I),Kt.init(),gt=new pm(I,Kt),A=new dp(I,Kt,t,gt),M=new fm(I,Kt),A.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),O=I.createFramebuffer(),N=I.createFramebuffer(),R=I.createFramebuffer(),k=new Tp(I),V=new Q2,$=new dm(I,Kt,M,V,A,gt,k),ht=new Sp(L),ut=new Cf(I),yt=new up(I,ut),Y=new wp(I,ut,k,yt),tt=new Cp(I,Y,ut,yt,k),F=new Ap(I,A,$),Ut=new pp(V),dt=new K2(L,ht,Kt,A,yt,Ut),Nt=new Mm(L,V),vt=new tm,pt=new rm(Kt),$t=new hp(L,ht,M,tt,g,c),kt=new um(L,tt,A),st=new bm(I,k,A,M),mt=new fp(I,Kt,k),j=new Ep(I,Kt,k),k.programs=dt.programs,L.capabilities=A,L.extensions=Kt,L.properties=V,L.renderLists=vt,L.shadowMap=kt,L.state=M,L.info=k}_!==en&&(T=new Pp(_,e.width,e.height,o,i,a));const It=new xm(L,I);this.xr=It,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Kt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Kt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(y){y!==void 0&&(nt=y,this.setSize(ae,Z,!1))},this.getSize=function(y){return y.set(ae,Z)},this.setSize=function(y,U,X=!0){if(It.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=y,Z=U,e.width=Math.floor(y*nt),e.height=Math.floor(U*nt),X===!0&&(e.style.width=y+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(ae*nt,Z*nt).floor()},this.setDrawingBufferSize=function(y,U,X){ae=y,Z=U,nt=X,e.width=Math.floor(y*X),e.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(_===en){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(Et)},this.setViewport=function(y,U,X,z){y.isVector4?Et.set(y.x,y.y,y.z,y.w):Et.set(y,U,X,z),M.viewport(Q.copy(Et).multiplyScalar(nt).round())},this.getScissor=function(y){return y.copy(Ht)},this.setScissor=function(y,U,X,z){y.isVector4?Ht.set(y.x,y.y,y.z,y.w):Ht.set(y,U,X,z),M.scissor(wt.copy(Ht).multiplyScalar(nt).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(y){M.setScissorTest(ue=y)},this.setOpaqueSort=function(y){_t=y},this.setTransparentSort=function(y){zt=y},this.getClearColor=function(y){return y.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,X=!0){let z=0;if(y){let H=!1;if(J!==null){const bt=J.texture.format;H=m.has(bt)}if(H){const bt=J.texture.type,Ct=p.has(bt),Mt=$t.getClearColor(),Pt=$t.getClearAlpha(),Dt=Mt.r,Yt=Mt.g,Qt=Mt.b;Ct?(v[0]=Dt,v[1]=Yt,v[2]=Qt,v[3]=Pt,I.clearBufferuiv(I.COLOR,0,v)):(S[0]=Dt,S[1]=Yt,S[2]=Qt,S[3]=Pt,I.clearBufferiv(I.COLOR,0,S))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",hn,!1),$t.dispose(),vt.dispose(),pt.dispose(),V.dispose(),ht.dispose(),tt.dispose(),yt.dispose(),st.dispose(),dt.dispose(),It.dispose(),It.removeEventListener("sessionstart",_l),It.removeEventListener("sessionend",Ml),fi.stop()};function ge(y){y.preventDefault(),Nl("WebGLRenderer: Context Lost."),D=!0}function ce(){Nl("WebGLRenderer: Context Restored."),D=!1;const y=k.autoReset,U=kt.enabled,X=kt.autoUpdate,z=kt.needsUpdate,H=kt.type;Ft(),k.autoReset=y,kt.enabled=U,kt.autoUpdate=X,kt.needsUpdate=z,kt.type=H}function hn(y){se("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function bn(y){const U=y.target;U.removeEventListener("dispose",bn),_0(U)}function _0(y){M0(y),V.remove(y)}function M0(y){const U=V.get(y).programs;U!==void 0&&(U.forEach(function(X){dt.releaseProgram(X)}),y.isShaderMaterial&&dt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,z,H,bt){U===null&&(U=Ot);const Ct=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=y0(y,U,X,z,H);M.setMaterial(z,Ct);let Pt=X.index,Dt=1;if(z.wireframe===!0){if(Pt=Y.getWireframeAttribute(X),Pt===void 0)return;Dt=2}const Yt=X.drawRange,Qt=X.attributes.position;let Lt=Yt.start*Dt,he=(Yt.start+Yt.count)*Dt;bt!==null&&(Lt=Math.max(Lt,bt.start*Dt),he=Math.min(he,(bt.start+bt.count)*Dt)),Pt!==null?(Lt=Math.max(Lt,0),he=Math.min(he,Pt.count)):Qt!=null&&(Lt=Math.max(Lt,0),he=Math.min(he,Qt.count));const Te=he-Lt;if(Te<0||Te===1/0)return;yt.setup(H,z,Mt,X,Pt);let xe,pe=mt;if(Pt!==null&&(xe=ut.get(Pt),pe=j,pe.setIndex(xe)),H.isMesh)z.wireframe===!0?(M.setLineWidth(z.wireframeLinewidth*Xt()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(H.isLine){let ke=z.linewidth;ke===void 0&&(ke=1),M.setLineWidth(ke*Xt()),H.isLineSegments?pe.setMode(I.LINES):H.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else H.isPoints?pe.setMode(I.POINTS):H.isSprite&&pe.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ke=H._multiDrawStarts,Tt=H._multiDrawCounts,Xe=H._multiDrawCount,re=Pt?ut.get(Pt).bytesPerElement:1,sn=V.get(z).currentProgram.getUniforms();for(let Sn=0;Sn<Xe;Sn++)sn.setValue(I,"_gl_DrawID",Sn),pe.render(ke[Sn]/re,Tt[Sn])}else if(H.isInstancedMesh)pe.renderInstances(Lt,Te,H.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,ke);pe.renderInstances(Lt,Te,Tt)}else pe.render(Lt,Te)};function xl(y,U,X,z){B!==null&&y.isNodeMaterial&&B.setObject(z,y),at===!0&&Ut.setState(y,X,!1),y.transparent===!0&&y.side===$e&&y.forceSinglePass===!1?(y.side=Ye,y.needsUpdate=!0,Ys(y,U,z),y.side=hi,y.needsUpdate=!0,Ys(y,U,z),y.side=$e):Ys(y,U,z)}this.compile=function(y,U,X=null){X===null&&(X=y),B!==null&&B.renderStart(y,U,X),E=pt.get(X),E.init(U),b.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==X&&y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),ot=this.localClippingEnabled,at=Ut.init(this.clippingPlanes,ot),at===!0&&Ut.setGlobalState(this.clippingPlanes,U),B!==null&&kt.render(E.state.shadowsArray,X,U);const z=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const bt=H.material;if(bt)if(Array.isArray(bt))for(let Ct=0;Ct<bt.length;Ct++){const Mt=bt[Ct];xl(Mt,X,U,H),z.add(Mt)}else xl(bt,X,U,H),z.add(bt)}),E=b.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(y,U,X=null){const z=this.compile(y,U,X);return new Promise(H=>{function bt(){if(z.forEach(function(Ct){const Pt=V.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&z.delete(Ct)}),z.size===0){H(y);return}setTimeout(bt,10)}Kt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ar=null;function b0(y){ar&&ar(y)}function _l(){fi.stop()}function Ml(){fi.start()}const fi=new Yh;fi.setAnimationLoop(b0),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(y){ar=y,It.setAnimationLoop(y),y===null?fi.stop():fi.start()},It.addEventListener("sessionstart",_l),It.addEventListener("sessionend",Ml),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(y,U);const X=It.enabled===!0&&It.isPresenting===!0,z=T!==null&&(J===null||X)&&T.begin(L,J);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(U),U=It.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,U,J),E=pt.get(y,b.length),E.init(U),E.state.textureUnits=$.getTextureUnits(),b.push(E),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),it.setFromProjectionMatrix(lt,An,U.reversedDepth),ot=this.localClippingEnabled,at=Ut.init(this.clippingPlanes,ot),w=vt.get(y,C.length),w.init(),C.push(w),It.enabled===!0&&It.isPresenting===!0){const Ct=L.xr.getDepthSensingMesh();Ct!==null&&rr(Ct,U,-1/0,L.sortObjects)}rr(y,U,0,L.sortObjects),w.finish(),B!==null&&B.updateLights(E.state.lightsArray),L.sortObjects===!0&&w.sort(_t,zt),Vt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Vt&&$t.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ut.beginShadows();const H=E.state.shadowsArray;if(kt.render(H,y,U),at===!0&&Ut.endShadows(),(z&&T.hasRenderPass())===!1){const Ct=w.opaque,Mt=w.transmissive;if(E.setupLights(),U.isArrayCamera){const Pt=U.cameras;if(Mt.length>0)for(let Dt=0,Yt=Pt.length;Dt<Yt;Dt++){const Qt=Pt[Dt];Sl(Ct,Mt,y,Qt)}Vt&&$t.render(y);for(let Dt=0,Yt=Pt.length;Dt<Yt;Dt++){const Qt=Pt[Dt];bl(w,y,Qt,Qt.viewport)}}else Mt.length>0&&Sl(Ct,Mt,y,U),Vt&&$t.render(y),bl(w,y,U)}J!==null&&W===0&&($.updateMultisampleRenderTarget(J),$.updateRenderTargetMipmap(J)),z&&T.end(L),y.isScene===!0&&y.onAfterRender(L,y,U),yt.resetDefaultState(),q=-1,K=null,b.pop(),b.length>0?(E=b[b.length-1],$.setTextureUnits(E.state.textureUnits),at===!0&&Ut.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,B!==null&&B.renderEnd()};function rr(y,U,X,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(it)){z&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(lt);const Ct=tt.update(y),Mt=y.material;Mt.visible&&w.push(y,Ct,Mt,X,Bt.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(it))){const Ct=tt.update(y),Mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Bt.copy(Ct.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(lt)),Array.isArray(Mt)){const Pt=Ct.groups;for(let Dt=0,Yt=Pt.length;Dt<Yt;Dt++){const Qt=Pt[Dt],Lt=Mt[Qt.materialIndex];Lt&&Lt.visible&&w.push(y,Ct,Lt,X,Bt.z,Qt,U)}}else Mt.visible&&w.push(y,Ct,Mt,X,Bt.z,null,U)}}const bt=y.children;for(let Ct=0,Mt=bt.length;Ct<Mt;Ct++)rr(bt[Ct],U,X,z)}function bl(y,U,X,z){const{opaque:H,transmissive:bt,transparent:Ct}=y;E.setupLightsView(X),at===!0&&Ut.setGlobalState(L.clippingPlanes,X),z&&M.viewport(Q.copy(z)),H.length>0&&$s(H,U,X),bt.length>0&&$s(bt,U,X),Ct.length>0&&$s(Ct,U,X),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Sl(y,U,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const Lt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new _n(1,1,{generateMipmaps:!0,type:Lt?Ln:en,minFilter:Ei,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const bt=E.state.transmissionRenderTarget[z.id],Ct=z.viewport||Q;bt.setSize(Ct.z*L.transmissionResolutionScale,Ct.w*L.transmissionResolutionScale);const Mt=L.getRenderTarget(),Pt=L.getActiveCubeFace(),Dt=L.getActiveMipmapLevel();L.setRenderTarget(bt),L.getClearColor(jt),Wt=L.getClearAlpha(),Wt<1&&L.setClearColor(16777215,.5),L.clear(),Vt&&$t.render(X);const Yt=L.toneMapping;L.toneMapping=Rn;const Qt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),at===!0&&Ut.setGlobalState(L.clippingPlanes,z),$s(y,X,z),$.updateMultisampleRenderTarget(bt),$.updateRenderTargetMipmap(bt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let he=0,Te=U.length;he<Te;he++){const xe=U[he],{object:pe,geometry:ke,material:Tt,group:Xe}=xe;if(Tt.side===$e&&pe.layers.test(z.layers)){const re=Tt.side;Tt.side=Ye,Tt.needsUpdate=!0,yl(pe,X,z,ke,Tt,Xe),Tt.side=re,Tt.needsUpdate=!0,Lt=!0}}Lt===!0&&($.updateMultisampleRenderTarget(bt),$.updateRenderTargetMipmap(bt))}L.setRenderTarget(Mt,Pt,Dt),L.setClearColor(jt,Wt),Qt!==void 0&&(z.viewport=Qt),L.toneMapping=Yt}function $s(y,U,X){const z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,bt=y.length;H<bt;H++){const Ct=y[H],{object:Mt,geometry:Pt,group:Dt}=Ct;let Yt=Ct.material;Yt.allowOverride===!0&&z!==null&&(Yt=z),Mt.layers.test(X.layers)&&yl(Mt,U,X,Pt,Yt,Dt)}}function yl(y,U,X,z,H,bt){B!==null&&H.isNodeMaterial&&B.setObject(y,H),y.onBeforeRender(L,U,X,z,H,bt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(L,U,X,z,y,bt),H.transparent===!0&&H.side===$e&&H.forceSinglePass===!1?(H.side=Ye,H.needsUpdate=!0,L.renderBufferDirect(X,U,z,H,y,bt),H.side=hi,H.needsUpdate=!0,L.renderBufferDirect(X,U,z,H,y,bt),H.side=$e):L.renderBufferDirect(X,U,z,H,y,bt),y.onAfterRender(L,U,X,z,H,bt)}function Ys(y,U,X){U.isScene!==!0&&(U=Ot);const z=V.get(y),H=E.state.lights,bt=E.state.shadowsArray,Ct=H.state.version,Mt=dt.getParameters(y,H.state,bt,U,X,E.state.lightProbeGridArray),Pt=dt.getProgramCacheKey(Mt);let Dt=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Yt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=ht.get(y.envMap||z.environment,Yt),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",bn),Dt=new Map,z.programs=Dt);let Qt=Dt.get(Pt);if(Qt!==void 0){if(z.currentProgram===Qt&&z.lightsStateVersion===Ct)return El(y,Mt),Qt}else Mt.uniforms=dt.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,X,Mt),y.onBeforeCompile(Mt,L),Qt=dt.acquireProgram(Mt,Pt),Dt.set(Pt,Qt),z.uniforms=Mt.uniforms;const Lt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=Ut.uniform),El(y,Mt),z.needsLights=E0(y),z.lightsStateVersion=Ct,z.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.sunLights.value=H.state.sun,Lt.sunLightShadows.value=H.state.sunShadow,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.sunShadowMatrix.value=H.state.sunShadowMatrix,Lt.sunShadowCascade.value=H.state.sunShadowCascade,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Qt,z.uniformsList=null,Qt}function wl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ra.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function El(y,U){const X=V.get(y);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function S0(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let X=0,z=y.length;X<z;X++){const H=y[X];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function y0(y,U,X,z,H){U.isScene!==!0&&(U=Ot),$.resetTextureUnits();const bt=U.fog,Ct=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,Mt=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:te.workingColorSpace,Pt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Dt=ht.get(z.envMap||Ct,Pt),Yt=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Lt=!!X.morphAttributes.position,he=!!X.morphAttributes.normal,Te=!!X.morphAttributes.color;let xe=Rn;z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(xe=L.toneMapping);const pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ke=pe!==void 0?pe.length:0,Tt=V.get(z),Xe=E.state.lights;if(at===!0&&(ot===!0||y!==K)){const ve=y===K&&z.id===q;Ut.setState(z,y,ve)}let re=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Xe.state.version||Tt.outputColorSpace!==Mt||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==Dt||z.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ut.numPlanes||Tt.numIntersection!==Ut.numIntersection)||Tt.vertexAlphas!==Yt||Tt.vertexTangents!==Qt||Tt.morphTargets!==Lt||Tt.morphNormals!==he||Tt.morphColors!==Te||Tt.toneMapping!==xe||Tt.morphTargetsCount!==ke||!!Tt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Tt.__version=z.version);let sn=Tt.currentProgram;re===!0&&(sn=Ys(z,U,H),B&&z.isNodeMaterial&&B.onUpdateProgram(z,sn,Tt));let Sn=!1,qn=!1,Oi=!1;const de=sn.getUniforms(),Ee=Tt.uniforms;if(M.useProgram(sn.program)&&(Sn=!0,qn=!0,Oi=!0),z.id!==q&&(q=z.id,qn=!0),Tt.needsLights){const ve=S0(E.state.lightProbeGridArray,H);Tt.lightProbeGrid!==ve&&(Tt.lightProbeGrid=ve,qn=!0)}if(Sn||K!==y){M.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),de.setValue(I,"projectionMatrix",y.projectionMatrix),de.setValue(I,"viewMatrix",y.matrixWorldInverse);const Yn=de.map.cameraPosition;Yn!==void 0&&Yn.setValue(I,ft.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&de.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&de.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),K!==y&&(K=y,qn=!0,Oi=!0)}if(Tt.needsLights&&(Xe.state.sunShadowMap.length>0&&de.setValue(I,"sunShadowMap",Xe.state.sunShadowMap,$),Xe.state.directionalShadowMap.length>0&&de.setValue(I,"directionalShadowMap",Xe.state.directionalShadowMap,$),Xe.state.spotShadowMap.length>0&&de.setValue(I,"spotShadowMap",Xe.state.spotShadowMap,$),Xe.state.pointShadowMap.length>0&&de.setValue(I,"pointShadowMap",Xe.state.pointShadowMap,$)),H.isSkinnedMesh){de.setOptional(I,H,"bindMatrix"),de.setOptional(I,H,"bindMatrixInverse");const ve=H.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),de.setValue(I,"boneTexture",ve.boneTexture,$))}H.isBatchedMesh&&(de.setOptional(I,H,"batchingTexture"),de.setValue(I,"batchingTexture",H._matricesTexture,$),de.setOptional(I,H,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",H._indirectTexture,$),de.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&de.setValue(I,"batchingColorTexture",H._colorsTexture,$));const $n=X.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&F.update(H,X,sn),(qn||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,de.setValue(I,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Ee.envMapIntensity.value=U.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=ym()),qn){if(de.setValue(I,"toneMappingExposure",L.toneMappingExposure),Tt.needsLights&&w0(Ee,Oi),bt&&z.fog===!0&&Nt.refreshFogUniforms(Ee,bt),Nt.refreshMaterialUniforms(Ee,z,nt,Z,E.state.transmissionRenderTarget[y.id]),Tt.needsLights&&Tt.lightProbeGrid){const ve=Tt.lightProbeGrid;Ee.probesSH.value=ve.texture,Ee.probesMin.value.copy(ve.boundingBox.min),Ee.probesMax.value.copy(ve.boundingBox.max),Ee.probesResolution.value.copy(ve.resolution)}Ra.upload(I,wl(Tt),Ee,$)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ra.upload(I,wl(Tt),Ee,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&de.setValue(I,"center",H.center),de.setValue(I,"modelViewMatrix",H.modelViewMatrix),de.setValue(I,"normalMatrix",H.normalMatrix),de.setValue(I,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const ve=z.uniformsGroups;for(let Yn=0,Bi=ve.length;Yn<Bi;Yn++){const Al=ve[Yn];st.update(Al,sn),st.bind(Al,sn)}}return sn}function w0(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function E0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(y,U,X){const z=V.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(y.texture).__webglTexture=U,V.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const X=V.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){J=y,G=U,W=X;let z=null,H=!1,bt=!1;if(y){const Mt=V.get(y);if(Mt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(I.FRAMEBUFFER,Mt.__webglFramebuffer),Q.copy(y.viewport),wt.copy(y.scissor),St=y.scissorTest,M.viewport(Q),M.scissor(wt),M.setScissorTest(St),q=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(Mt.__hasExternalTextures)$.rebindTextures(y,V.get(y.texture).__webglTexture,V.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Yt=y.depthTexture;if(Mt.__boundDepthTexture!==Yt){if(Yt!==null&&V.has(Yt)&&(y.width!==Yt.image.width||y.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const Pt=y.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(bt=!0);const Dt=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?z=Dt[U][X]:z=Dt[U],H=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?z=V.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[X]:z=Dt,Q.copy(y.viewport),wt.copy(y.scissor),St=y.scissorTest}else Q.copy(Et).multiplyScalar(nt).floor(),wt.copy(Ht).multiplyScalar(nt).floor(),St=ue;if(X!==0&&(z=O),M.bindFramebuffer(I.FRAMEBUFFER,z)&&M.drawBuffers(y,z),M.viewport(Q),M.scissor(wt),M.setScissorTest(St),H){const Mt=V.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,X)}else if(bt){const Mt=U;for(let Pt=0;Pt<y.textures.length;Pt++){const Dt=V.get(y.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,X,Mt)}}else if(y!==null&&X!==0){const Mt=V.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,X)}q=-1};function Tl(y){const U=V.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=A.textureFormatReadable(y.format),U.__typeReadable=A.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,X,z,H,bt,Ct,Mt=0){if(!(y&&y.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){M.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Dt=y.textures[Mt],Yt=Dt.format,Qt=Dt.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt);const Lt=Tl(Dt);if(Lt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&X>=0&&X<=y.height-H&&I.readPixels(U,X,z,H,gt.convert(Yt),gt.convert(Qt),bt)}finally{const Dt=J!==null?V.get(J).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,U,X,z,H,bt,Ct,Mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(U>=0&&U<=y.width-z&&X>=0&&X<=y.height-H){M.bindFramebuffer(I.FRAMEBUFFER,Pt);const Dt=y.textures[Mt],Yt=Dt.format,Qt=Dt.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt);const Lt=Tl(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),I.readPixels(U,X,z,H,gt.convert(Yt),gt.convert(Qt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Te=J!==null?V.get(J).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,Te);const xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lu(I,xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(he),I.deleteSync(xe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,X=0){const z=Math.pow(2,-X),H=Math.floor(y.image.width*z),bt=Math.floor(y.image.height*z),Ct=U!==null?U.x:0,Mt=U!==null?U.y:0;$.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Ct,Mt,H,bt),M.unbindTexture()},this.copyTextureToTexture=function(y,U,X=null,z=null,H=0,bt=0){let Ct,Mt,Pt,Dt,Yt,Qt,Lt,he,Te;const xe=y.isCompressedTexture?y.mipmaps[bt]:y.image;if(X!==null)Ct=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Pt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Yt=X.min.y,Qt=X.isBox3?X.min.z:0;else{const Ee=Math.pow(2,-H);Ct=Math.floor(xe.width*Ee),Mt=Math.floor(xe.height*Ee),y.isDataArrayTexture?Pt=xe.depth:y.isData3DTexture?Pt=Math.floor(xe.depth*Ee):Pt=1,Dt=0,Yt=0,Qt=0}z!==null?(Lt=z.x,he=z.y,Te=z.z):(Lt=0,he=0,Te=0);const pe=gt.convert(U.format),ke=gt.convert(U.type);let Tt;U.isData3DTexture?($.setTexture3D(U,0),Tt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Tt=I.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Tt=I.TEXTURE_2D),M.activeTexture(I.TEXTURE0),M.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Xe=M.getParameter(I.UNPACK_ROW_LENGTH),re=M.getParameter(I.UNPACK_IMAGE_HEIGHT),sn=M.getParameter(I.UNPACK_SKIP_PIXELS),Sn=M.getParameter(I.UNPACK_SKIP_ROWS),qn=M.getParameter(I.UNPACK_SKIP_IMAGES);M.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),M.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),M.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),M.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const Oi=y.isDataArrayTexture||y.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Ee=V.get(y),$n=V.get(U),ve=V.get(Ee.__renderTarget),Yn=V.get($n.__renderTarget);M.bindFramebuffer(I.READ_FRAMEBUFFER,ve.__webglFramebuffer),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Bi=0;Bi<Pt;Bi++)Oi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(y).__webglTexture,H,Qt+Bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(U).__webglTexture,bt,Te+Bi)),I.blitFramebuffer(Dt,Yt,Ct,Mt,Lt,he,Ct,Mt,I.DEPTH_BUFFER_BIT,I.NEAREST);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||V.has(y)){const Ee=V.get(y),$n=V.get(U);M.bindFramebuffer(I.READ_FRAMEBUFFER,N),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,R);for(let ve=0;ve<Pt;ve++)Oi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,H,Qt+ve):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,H),de?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$n.__webglTexture,bt,Te+ve):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$n.__webglTexture,bt),H!==0?I.blitFramebuffer(Dt,Yt,Ct,Mt,Lt,he,Ct,Mt,I.COLOR_BUFFER_BIT,I.NEAREST):de?I.copyTexSubImage3D(Tt,bt,Lt,he,Te+ve,Dt,Yt,Ct,Mt):I.copyTexSubImage2D(Tt,bt,Lt,he,Dt,Yt,Ct,Mt);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else de?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Tt,bt,Lt,he,Te,Ct,Mt,Pt,pe,ke,xe.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,bt,Lt,he,Te,Ct,Mt,Pt,pe,xe.data):I.texSubImage3D(Tt,bt,Lt,he,Te,Ct,Mt,Pt,pe,ke,xe):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,Lt,he,Ct,Mt,pe,ke,xe.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,Lt,he,xe.width,xe.height,pe,xe.data):I.texSubImage2D(I.TEXTURE_2D,bt,Lt,he,Ct,Mt,pe,ke,xe);M.pixelStorei(I.UNPACK_ROW_LENGTH,Xe),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),M.pixelStorei(I.UNPACK_SKIP_PIXELS,sn),M.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),M.pixelStorei(I.UNPACK_SKIP_IMAGES,qn),bt===0&&U.generateMipmaps&&I.generateMipmap(Tt),M.unbindTexture()},this.initRenderTarget=function(y){V.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),M.unbindTexture()},this.resetState=function(){G=0,W=0,J=null,M.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class wm extends ol{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new cn;t.deleteAttribute("uv");const e=new me({side:Ye}),n=new me,i=new Sf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const a=new ee(t,e);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new Je(t,n,6),o=new Le;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);const c=new ee(t,ji(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new ee(t,ji(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new ee(t,ji(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new ee(t,ji(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new ee(t,ji(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new ee(t,ji(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ji(s){return new xf({color:0,emissive:16777215,emissiveIntensity:s})}class pl{a;b;c;d;constructor(t){this.a=2654435769,this.b=608135816,this.c=3084996962,this.d=t>>>0;for(let e=0;e<15;e++)this.next()}next(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;let t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296}int(t,e){return t+Math.floor(this.next()*(e-t+1))}range(t,e){return t+this.next()*(e-t)}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t){let e=0;for(const i of t)e+=i;if(e<=0)return-1;let n=this.next()*e;for(let i=0;i<t.length;i++)if(n-=t[i],n<0)return i;return t.length-1}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this.next()*(e+1)),i=t[e];t[e]=t[n],t[n]=i}return t}}const si=["hint","undo","slot","shuffle","grab"],ns={hint:2,slot:3,undo:4,shuffle:6,grab:9},Ss={hint:60,undo:80,shuffle:100,slot:140,grab:160},Dc=2,Nc={hidden:7,fence:11,link:14,frozen:22,gate:31},ai=20;function Fs(s){return Math.floor((s-1)/ai)}function Em(s){const t=s.boxes.reduce((e,n)=>e+n.count,0);return Math.round(15+t*.4/s.slots+s.boxes.length*3.5)}function Tm(s,t,e,n=0){const i=s==="superhard"?50:s==="hard"?25:10,a=n===0,r={base:a?i:Math.round(i/3),stars:Math.max(0,t-n)*5,speed:a&&e?s==="superhard"?25:s==="hard"?15:10:0,total:0};return r.total=r.base+r.stars+r.speed,r}function i0(s){if(s<=3)return"cube";const t=["coin","cube","hex","candy","diamond","cube","hex","coin","diamond","candy"],e=new pl(s*40503+17),n=t[(s+e.int(0,2))%t.length];return s>4&&n===i0(s-1)?t[(t.indexOf(n)+1)%t.length]:n}function Am(s){return Object.keys(Nc).filter(t=>Nc[t]===s)}function Cm(s){return si.filter(t=>ns[t]===s)}const ys=new P;function rn(s,t,e,n,i,a){const r=2*Math.PI*i/4,o=Math.max(a-2*i,0),c=Math.PI/4;ys.copy(t),ys[n]=0,ys.normalize();const l=.5*r/(r+o),h=1-ys.angleTo(s)/c;return Math.sign(ys[e])===1?h*l:o/(r+o)+l+l*(1-h)}class ln extends cn{constructor(t=1,e=1,n=1,i=2,a=.1){const r=i*2+1;if(a=Math.min(t/2,e/2,n/2,a),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:a},r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new P,l=new P,h=new P(t,e,n).divideScalar(2).subScalar(a),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,_=new P,m=.5/r;for(let p=0,v=0;p<f.length;p+=3,v+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*a,f[p+1]=h.y*Math.sign(c.y)+l.y*a,f[p+2]=h.z*Math.sign(c.z)+l.z*a,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[v+0]=rn(_,l,"z","y",a,n),d[v+1]=1-rn(_,l,"y","z",a,e);break;case 1:_.set(-1,0,0),d[v+0]=1-rn(_,l,"z","y",a,n),d[v+1]=1-rn(_,l,"y","z",a,e);break;case 2:_.set(0,1,0),d[v+0]=1-rn(_,l,"x","z",a,t),d[v+1]=rn(_,l,"z","x",a,n);break;case 3:_.set(0,-1,0),d[v+0]=1-rn(_,l,"x","z",a,t),d[v+1]=1-rn(_,l,"z","x",a,n);break;case 4:_.set(0,0,1),d[v+0]=1-rn(_,l,"x","y",a,t),d[v+1]=1-rn(_,l,"y","x",a,e);break;case 5:_.set(0,0,-1),d[v+0]=rn(_,l,"x","y",a,t),d[v+1]=1-rn(_,l,"y","x",a,e);break}}static fromJSON(t){return new ln(t.width,t.height,t.depth,t.segments,t.radius)}}const Wo=.62;function Gr(s,t,e,n=0){const i=Wo/2,a=[[0,-i],[s-e*.6,-i],[s,-i+e*.6],[s,i-e],[s-e*.35,i-e*.2],[s-e,i],[0,i]].map(([r,o])=>new rt(r,o));return new Ka(a,t,n)}function Uc(s){const t=s.toNonIndexed();return s.dispose(),t.computeVertexNormals(),t}function s0(s,t=!1){switch(s){case"coin":return Gr(.46,t?12:18,.08);case"candy":{const e=new ye(.5,t?12:16,t?8:10);return e.scale(.95,Wo,.95),e}case"hex":return Uc(Gr(.52,6,.1,Math.PI/6));case"diamond":return Uc(Gr(.56,4,.12));default:return new ln(.94,Wo,.94,1,.14)}}function a0(s){const t={cube:.42,coin:.34,candy:.2,hex:.36,diamond:.16};return new me({roughness:t[s],metalness:s==="diamond"?.08:0,envMapIntensity:s==="diamond"||s==="candy"?1.35:.9})}const Ha=1.2,rs=1.62,Va=1.48;function Rm(s){return s.aspect>1.15?Lm(s):Pm(s)}function Ga(s,t,e){return Array.from({length:s},(n,i)=>t+(i-(s-1)/2)*e)}function Pm(s){const n=Math.min(9.2/s.w,9.2/s.h),i=n*s.w,a=n*s.h,r=.32,o=-i/2,c=-a,l={x:0,z:1.42},h=3.05,f=s.slots>5?Math.min(rs,9.4/s.slots):rs,u=Ga(s.slots,0,f).map(v=>({x:v,z:h})),d=s.columns>5?9.4/s.columns:rs,g=Ga(s.columns,0,d),_=h+1.95,m=s.rows,p=Math.max(i/2+r+n*.35,u.length*f/2,s.columns*d/2)+.08;return{mode:"portrait",tilt:30*Math.PI/180,cell:n,picX0:o,picZ0:c,picW:i,picH:a,frame:r,nest:l,slot:u,slotSize:Math.min(Ha,f*.78),queueCol:g,queueZ0:_,queueRow:Va,queueRowsVisible:m,boxSize:Math.min(Ha,d*.78,f*.78),bounds:{minX:-p,maxX:p,minZ:c-r-n*.35-.12,maxZ:_+(m-.4)*Va+.45}}}function Lm(s){const n=Math.min(11/s.w,10.4/s.h),i=n*s.w,a=n*s.h,r=.36,o=-6.2,c=3.9,l=o-i/2,h=c-a,f=5.6,u=s.slots>5?Math.min(rs,9/s.slots):rs,d=3.7,g=Ga(s.slots,f,u).map(C=>({x:C,z:d})),_=s.columns>5?9/s.columns:rs,m=Ga(s.columns,f,_),p=d-1.75,v=s.rows,S={x:o,z:c+1.45},x=p-(v+.15)*Va-.4,w=Math.min(l-r,f-g.length*u/2)-.3,E=Math.max(f+g.length*u/2,f+s.columns*_/2)+.3;return{mode:"landscape",tilt:28*Math.PI/180,cell:n,picX0:l,picZ0:h,picW:i,picH:a,frame:r,nest:S,slot:g,slotSize:Math.min(Ha,u*.78),queueCol:m,queueZ0:p,queueRow:-Va,queueRowsVisible:v,boxSize:Math.min(Ha,_*.78,u*.78),bounds:{minX:w,maxX:E,minZ:Math.min(h-r,x)-.25,maxZ:Math.max(c+r,S.z+.9,d+.9)+.3}}}function Fc(s,t,e){return{x:s.picX0+(t+.5)*s.cell,z:s.picZ0+(e+.5)*s.cell}}function Oc(s,t,e){return{x:s.queueCol[t],z:s.queueZ0+e*s.queueRow}}const Bc=.62,kc=.06,Im=new P(0,0,1),Dm=new At(1,1,1),Xo=new At("#0d1022");function Wa(s,t,e,n,i){const a=new ci;return a.moveTo(s+i,t),a.lineTo(s+e-i,t),a.quadraticCurveTo(s+e,t,s+e,t+i),a.lineTo(s+e,t+n-i),a.quadraticCurveTo(s+e,t+n,s+e-i,t+n),a.lineTo(s+i,t+n),a.quadraticCurveTo(s,t+n,s,t+n-i),a.lineTo(s,t+i),a.quadraticCurveTo(s,t,s+i,t),a}function Nm(s,t,e,n,i){const a=new Oo;return a.moveTo(s+i,t),a.lineTo(s+e-i,t),a.quadraticCurveTo(s+e,t,s+e,t+i),a.lineTo(s+e,t+n-i),a.quadraticCurveTo(s+e,t+n,s+e-i,t+n),a.lineTo(s+i,t+n),a.quadraticCurveTo(s,t+n,s,t+n-i),a.lineTo(s,t+i),a.quadraticCurveTo(s,t,s+i,t),a}class Um{group=new Pe;cubes;w;h;instOf;present;colors;cellColor;layoutRef;frameMesh=null;floorMesh=null;anims=[];clock=0;hl=new Set;m4=new ne;q=new Ge;v=new P;sc=new P;frameMat;frameColor;floorMat;fenceDefs;fences=new Pe;picketGeo;postGeo=new ln(.14,.5,.14,2,.03);capGeo=new ye(.085,16,12);railGeo=new cn(1,.055,.05);handGeo=new cn(1,.035,.14);fenceMat=new me({color:"#c0814a",roughness:.62});postMat=new me({color:"#8f5a31",roughness:.66});capMat=new me({color:"#ff9f1a",roughness:.3,emissive:"#ff8a00",emissiveIntensity:.25});constructor(t,e,n="#efd3a0",i="cube"){this.w=t.w,this.h=t.h,this.fenceDefs=t.s.fences;const a=new ci;a.moveTo(-.048,0),a.lineTo(.048,0),a.lineTo(.048,.33),a.lineTo(0,.4),a.lineTo(-.048,.33),a.closePath(),this.picketGeo=new Li(a,{depth:.05,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:1}),this.picketGeo.translate(0,0,-.025),this.group.add(this.fences);const r=t.w*t.h;this.instOf=new Int32Array(r).fill(-1),this.cellColor=new Int16Array(r);const o=[];for(let c=0;c<r;c++)this.cellColor[c]=t.cellColor(c),t.cellColor(c)>=0&&(this.instOf[c]=o.length,o.push(c));this.present=new Uint8Array(r),this.colors=e.map(c=>new At(c)),this.cubes=new Je(s0(i),a0(i),Math.max(1,o.length)),this.cubes.castShadow=!0,this.cubes.receiveShadow=!0,this.cubes.count=o.length,o.forEach((c,l)=>this.cubes.setColorAt(l,this.colors[this.cellColor[c]])),this.cubes.instanceColor&&(this.cubes.instanceColor.needsUpdate=!0),this.group.add(this.cubes),this.frameColor=new At(n),this.frameMat=new me({color:n,roughness:.62,metalness:0}),this.floorMat=new me({color:"#fbf1dc",roughness:.9,metalness:0});for(let c=0;c<r;c++)this.present[c]=t.cellColor(c)>=0&&!t.eaten[c]?1:0}setLayout(t){this.layoutRef=t,this.buildFrame(t),this.buildFences(t);for(let e=0;e<this.w*this.h;e++)this.instOf[e]>=0&&this.writeMatrix(e,this.present[e]?1:0,0);this.cubes.instanceMatrix.needsUpdate=!0,this.cubes.computeBoundingSphere()}get layout(){return this.layoutRef}setNight(t){this.frameMat.color.copy(this.frameColor),t&&this.frameMat.color.lerp(Xo,.55),this.floorMat.color.set(t?"#7a7f99":"#fbf1dc")}buildFences(t){for(const v of this.fences.children)v instanceof Je&&v.dispose();if(this.fences.clear(),!this.fenceDefs.length)return;const e=t.cell*.35,n={x0:t.picX0-e-t.frame/2,x1:t.picX0+t.picW+e+t.frame/2,z0:t.picZ0-e-t.frame/2,z1:t.picZ0+t.picH+e+t.frame/2},i=.1+Math.max(.06,Math.min(.2,t.cell*.32)),a=[];for(const v of this.fenceDefs){const S=v.side==="top"||v.side==="bottom",x=S?this.w:this.h,w=Math.max(0,v.from),E=Math.min(x,v.to);if(E<=w)continue;const C=S?t.picX0:t.picZ0,b=S?n.x0:n.z0,T=S?n.x1:n.z1;a.push({horiz:S,fixed:v.side==="top"?n.z0:v.side==="bottom"?n.z1:v.side==="left"?n.x0:n.x1,a:w===0?b:C+w*t.cell,b:E===x?T:C+E*t.cell,gateA:w>0,gateB:E<x})}const r=[],o=[],c=[],l=[],h=[],f=new ne,u=new Ge,d=new P,g=new P(1,1,1),_=(v,S,x)=>v.horiz?d.set(S,x,v.fixed):d.set(v.fixed,x,S),m=.135;for(const v of a){u.setFromAxisAngle(Le.DEFAULT_UP,v.horiz?0:Math.PI/2);const S=v.b-v.a,x=Math.max(1,Math.round(S/m));for(let w=0;w<=x;w++){const E=v.a+S*w/x,C=.94+w*7919%13/13*.1;g.set(1,C,1),r.push(f.compose(_(v,E,i),u,g).clone())}g.set(1,1,1),g.set(S,1,1),l.push(f.compose(_(v,(v.a+v.b)/2,i+.1),u,g).clone()),h.push(f.compose(_(v,(v.a+v.b)/2,i+.3),u,g).clone()),g.set(1,1,1);for(const[w,E]of[[v.a,v.gateA],[v.b,v.gateB]])g.set(1,E?1.25:1,1),o.push(f.compose(_(v,w,i+(E?.31:.25)),u,g).clone()),g.set(1,1,1),E&&c.push(f.compose(_(v,w,i+.68),u,g).clone())}const p=(v,S,x)=>{if(!x.length)return;const w=new Je(v,S,x.length);x.forEach((E,C)=>w.setMatrixAt(C,E)),w.castShadow=!0,w.receiveShadow=!0,this.fences.add(w)};p(this.picketGeo,this.fenceMat,r),p(this.railGeo,this.postMat,l),p(this.handGeo,this.postMat,h),p(this.postGeo,this.postMat,o),p(this.capGeo,this.capMat,c)}buildFrame(t){this.frameMesh&&(this.group.remove(this.frameMesh),this.frameMesh.geometry.dispose()),this.floorMesh&&(this.group.remove(this.floorMesh),this.floorMesh.geometry.dispose(),this.floorMat.map?.dispose());const e=t.cell*.35,n=t.picX0-e,i=t.picZ0-e,a=t.picW+e*2,r=t.picH+e*2,o=t.frame,c=Wa(n-o,-(i+r+o),a+o*2,r+o*2,o*1.6);c.holes.push(Nm(n,-(i+r),a,r,o*.7));const l=Math.max(.06,Math.min(.2,t.cell*.32)),h=new Li(c,{depth:l,bevelEnabled:!0,bevelThickness:.05,bevelSize:.07,bevelSegments:3,curveSegments:10});h.rotateX(-Math.PI/2),h.translate(0,.05,0),this.frameMesh=new ee(h,this.frameMat),this.frameMesh.castShadow=!0,this.frameMesh.receiveShadow=!0,this.group.add(this.frameMesh);const f=new En(Wa(n-.02,-(i+r+.02),a+.04,r+.04,o*.7),8);f.rotateX(-Math.PI/2);const u=f.attributes.uv,d=f.attributes.position;for(let g=0;g<d.count;g++)u.setXY(g,(d.getX(g)-t.picX0)/t.picW,1-(d.getZ(g)-t.picZ0)/t.picH);this.floorMat.map=this.floorTexture(),this.floorMat.needsUpdate=!0,this.floorMesh=new ee(f,this.floorMat),this.floorMesh.position.y=.035,this.floorMesh.receiveShadow=!0,this.group.add(this.floorMesh)}floorTexture(){const t=Math.max(8,Math.min(32,Math.floor(1024/Math.max(this.w,this.h)))),e=document.createElement("canvas");e.width=this.w*t,e.height=this.h*t;const n=e.getContext("2d");n.fillStyle="#f7ead0",n.fillRect(0,0,e.width,e.height);for(let a=0;a<this.h;a++)for(let r=0;r<this.w;r++){const o=a*this.w+r;if(this.cellColor[o]<0)continue;const c=r*t+t/2,l=a*t+t/2,h=n.createRadialGradient(c,l-t*.1,t*.05,c,l,t*.55);h.addColorStop(0,"rgba(214,186,140,0.55)"),h.addColorStop(1,"rgba(214,186,140,0)"),n.fillStyle=h,n.fillRect(r*t,a*t,t,t)}const i=new Fi(e);return i.colorSpace=we,i.anisotropy=4,i}writeMatrix(t,e,n,i=0){const a=this.instOf[t];if(a<0)return;const r=this.layoutRef,o=t%this.w,c=(t-o)/this.w,l=Fc(r,o,c);this.v.set(l.x,kc+Bc*r.cell/2+n,l.z),this.q.setFromAxisAngle(Im,i);const h=r.cell*e;this.sc.set(h,h,h),this.m4.compose(this.v,this.q,this.sc),this.cubes.setMatrixAt(a,this.m4)}isPresent(t){return this.present[t]===1}cubeWorld(t,e){const n=this.layoutRef,i=t%this.w,a=(t-i)/this.w,r=Fc(n,i,a);return e.set(r.x,kc+Bc*n.cell,r.z)}cubeColor(t){return this.colors[this.cellColor[t]]}highlight(t){const e=new Set(t??[]),n=new At;for(const i of this.hl){if(e.has(i))continue;const a=this.instOf[i];this.cubes.setColorAt(a,this.colors[this.cellColor[i]]),this.present[i]&&this.writeMatrix(i,1,0)}for(const i of e){if(this.hl.has(i)||!this.present[i])continue;const a=this.instOf[i];this.cubes.setColorAt(a,n.copy(this.colors[this.cellColor[i]]).lerp(Dm,.45)),this.writeMatrix(i,1.08,this.layoutRef.cell*.3)}this.hl=e,this.cubes.instanceColor&&(this.cubes.instanceColor.needsUpdate=!0),this.cubes.instanceMatrix.needsUpdate=!0}remove(t){this.present[t]&&(this.present[t]=0,this.hl.delete(t)&&this.cubes.setColorAt(this.instOf[t],this.colors[this.cellColor[t]]),this.anims=this.anims.filter(e=>e.cell!==t),this.writeMatrix(t,0,0),this.cubes.instanceMatrix.needsUpdate=!0)}wobble(t){this.present[t]&&this.anims.push({cell:t,t:0,dur:.35,kind:"wobble",delay:0})}syncFrom(t,e=!0){for(let n=0;n<this.w*this.h;n++){if(this.instOf[n]<0)continue;const i=t.eaten[n]?0:1;i!==this.present[n]&&(this.present[n]=i,i&&e?this.anims.push({cell:n,t:0,dur:.45,kind:"drop",delay:Math.random()*.35}):this.writeMatrix(n,i,0))}this.cubes.instanceMatrix.needsUpdate=!0}rebuild(){this.layoutRef;let t=0;for(let e=0;e<this.w*this.h;e++){if(this.instOf[e]<0)continue;this.present[e]=1;const n=e%this.w,i=(e-n)/this.w,a=(this.h-1-i)*.045+Math.abs(n-this.w/2)*.012+Math.random()*.05;t=Math.max(t,a),this.anims.push({cell:e,t:0,dur:.5,kind:"drop",delay:a}),this.writeMatrix(e,0,0)}return this.cubes.instanceMatrix.needsUpdate=!0,t+.5}update(t){if(this.clock+=t,!this.anims.length)return;const e=[];for(const n of this.anims){if(n.delay>0){n.delay-=t,e.push(n);continue}n.t+=t;const i=Math.min(1,n.t/n.dur);if(this.present[n.cell]){if(n.kind==="wobble"){const a=(1-i)*.22;this.writeMatrix(n.cell,1,0,Math.sin(i*Math.PI*6)*a)}else{const a=i<.7?i/.7:1,r=(1-a)*(1-a)*2.2*this.layoutRef.cell*4,o=i<.7?1:1+Math.sin((i-.7)/.3*Math.PI)*.12;this.writeMatrix(n.cell,Math.min(1,.3+a*.7)*(2-o),r)}i<1?e.push(n):this.writeMatrix(n.cell,1,0)}}this.anims=e,this.cubes.instanceMatrix.needsUpdate=!0}dispose(){this.cubes.geometry.dispose(),this.cubes.material.dispose(),this.frameMesh?.geometry.dispose(),this.floorMesh?.geometry.dispose(),this.floorMat.map?.dispose(),this.frameMat.dispose(),this.floorMat.dispose();for(const t of this.fences.children)t instanceof Je&&t.dispose();for(const t of[this.picketGeo,this.postGeo,this.capGeo,this.railGeo,this.handGeo])t.dispose();for(const t of[this.fenceMat,this.postMat,this.capMat])t.dispose()}}const zc=["bottom","top","left","right"];function r0(s){const t=new Int16Array(s.w*s.h);for(let e=0;e<t.length;e++){const n=s.cells.charCodeAt(e);t[e]=n===46?-1:parseInt(s.cells[e],36)}return t}function Fm(s){return s>=10&&s%10===0?"superhard":s>=5&&s%5===0?"hard":"normal"}const on={Queue:0,Slot:1,Done:2},Om=4,Bm=7,xi=1073741823,Ma=2;class Xa{s;eaten;claimed;air;reach;dist;rd;heaps;heapSize;reachCount;remaining;left;pending;roundNo;boxHidden;boxWhere;boxCol;columns;slots;taps;status;hashA;hashB;constructor(t){this.s=t,this.eaten=new Uint8Array(0),this.claimed=new Uint8Array(0),this.air=new Uint8Array(0),this.reach=new Uint8Array(0),this.dist=new Int32Array(0),this.rd=new Int32Array(0),this.heaps=[],this.heapSize=new Int32Array(0),this.reachCount=new Int32Array(0),this.remaining=new Int32Array(0),this.left=0,this.pending=[],this.roundNo=0,this.boxHidden=new Uint8Array(0),this.boxWhere=new Uint8Array(0),this.boxCol=new Int16Array(0),this.columns=[],this.slots=[],this.taps=0,this.status="playing",this.hashA=0,this.hashB=0}static fromLevel(t){const e=t.picture,n=r0(e),i=e.w,a=e.h,r=e.palette.length,o=i*a,c=new Int32Array(o),l=new Int32Array(o);let h=625341585;for(let R=0;R<o;R++)h^=h<<13,h^=h>>>17,h^=h<<5,c[R]=h,h^=h<<13,h^=h>>>17,h^=h<<5,l[R]=h;const f=t.fences??[],u=zc.map(R=>{const G=R==="bottom"||R==="top"?i:a,W=new Uint8Array(G).fill(1);for(const J of f)if(J.side===R)for(let q=Math.max(0,J.from);q<Math.min(G,J.to);q++)W[q]=0;return W}),d=u.map(R=>R.includes(1)),g=new Int32Array(o).fill(xi),_=new Uint8Array(o),m=(i-1)/2,[p,v,S,x]=u,w=(R,G,W)=>{g[R]=Math.min(g[R],Math.round(G*Ma)),_[R]|=W};for(let R=0;R<i;R++)p[R]&&w((a-1)*i+R,Math.abs(R-m),1),v[R]&&w(R,m+a+Math.min(R,i-1-R),2);for(let R=0;R<a;R++)S[R]&&w(R*i,m+(a-1-R),4),x[R]&&w(R*i+i-1,m+(a-1-R),8);const E=new Int32Array(r);for(let R=0;R<o;R++)n[R]>=0&&E[n[R]]++;const C=t.boxes.reduce((R,G)=>Math.max(R,G.id),-1)+1,b=new Int16Array(C).fill(-1),T=new Int16Array(C),L=new Int16Array(C).fill(-1),D=new Int16Array(C),B=new Map;for(const R of t.boxes)if(b[R.id]=R.color,T[R.id]=R.count,D[R.id]=R.frozen??0,R.link!==void 0&&R.link>=0){L[R.id]=R.link;const G=B.get(R.link);G?G.push(R.id):B.set(R.link,[R.id])}const O=new Xa({w:i,h:a,colors:r,cell:n,zobA:c,zobB:l,entry:g,maxDim:Math.max(i,a),edge:_,colorCount:E,boxColor:b,boxCount:T,boxLink:L,boxThaw:D,groups:B,fences:f,open:d});O.eaten=new Uint8Array(o),O.claimed=new Uint8Array(o),O.air=new Uint8Array(o),O.reach=new Uint8Array(o),O.dist=new Int32Array(o).fill(xi),O.rd=new Int32Array(o).fill(xi),O.heaps=Array.from({length:r},(R,G)=>new Int32Array(Math.max(8,E[G]*2))),O.heapSize=new Int32Array(r),O.reachCount=new Int32Array(r),O.remaining=Int32Array.from(E),O.left=E.reduce((R,G)=>R+G,0);const N=[];for(let R=0;R<o;R++)g[R]>=xi||(n[R]<0?(O.air[R]=1,O.dist[R]=g[R],N.push(R)):O.offer(R,g[R]));O.spread(N),O.boxHidden=new Uint8Array(C),O.boxWhere=new Uint8Array(C).fill(on.Done),O.boxCol=new Int16Array(C).fill(-1);for(const R of t.boxes)O.boxHidden[R.id]=R.hidden?1:0;return O.columns=t.columns.map(R=>R.slice()),O.columns.forEach((R,G)=>{for(const W of R)O.boxWhere[W]=on.Queue,O.boxCol[W]=G;R.length&&(O.boxHidden[R[0]]=0)}),O.slots=new Array(t.slots).fill(null),O}clone(){const t=new Xa(this.s);return t.eaten=this.eaten.slice(),t.claimed=this.claimed.slice(),t.air=this.air.slice(),t.reach=this.reach.slice(),t.dist=this.dist.slice(),t.rd=this.rd.slice(),t.heaps=this.heaps.map((e,n)=>{const i=this.heapSize[n],a=new Int32Array(Math.max(8,i+(i>>1)));return a.set(e.subarray(0,i)),a}),t.heapSize=this.heapSize.slice(),t.reachCount=this.reachCount.slice(),t.remaining=this.remaining.slice(),t.left=this.left,t.pending=this.pending.slice(),t.roundNo=this.roundNo,t.boxHidden=this.boxHidden.slice(),t.boxWhere=this.boxWhere.slice(),t.boxCol=this.boxCol.slice(),t.columns=this.columns.map(e=>e.slice()),t.slots=this.slots.map(e=>e?{box:e.box,color:e.color,left:e.left}:null),t.taps=this.taps,t.status=this.status,t.hashA=this.hashA,t.hashB=this.hashB,t}get w(){return this.s.w}get h(){return this.s.h}cellColor(t){return this.s.cell[t]}isFree(t){return this.s.cell[t]<0||this.eaten[t]===1}edgeMask(t){return this.s.edge[t]}isOpen(t){return this.s.open[zc.indexOf(t)]}offer(t,e){if(e>=this.rd[t])return;const n=this.s.cell[t];this.reach[t]||(this.reach[t]=1,this.claimed[t]||this.reachCount[n]++),this.rd[t]=e;let i=this.heaps[n],a=this.heapSize[n]++;if(a>=i.length){const o=new Int32Array(i.length*2);o.set(i),this.heaps[n]=i=o}const r=e*4096+t;for(;a>0;){const o=a-1>>1;if(i[o]<=r)break;i[a]=i[o],a=o}i[a]=r}heapPop(t){const e=this.heaps[t],n=--this.heapSize[t];if(n<=0)return;const i=e[n];let a=0;for(;;){const r=a*2+1;if(r>=n)break;const o=r+1,c=o<n&&e[o]<e[r]?o:r;if(e[c]>=i)break;e[a]=e[c],a=c}e[a]=i}spread(t){const{w:e,h:n,cell:i}=this.s,a=[];let r=xi;for(const o of t){const c=this.dist[o];(a[c]??=[]).push(o),c<r&&(r=c)}for(let o=r;o<a.length;o++){const c=a[o];if(c)for(let l=0;l<c.length;l++){const h=c[l];if(this.dist[h]!==o)continue;const f=h%e,u=(h-f)/e;for(let d=0;d<4;d++){let g;if(d===0){if(u+1>=n)continue;g=h+e}else if(d===1){if(u===0)continue;g=h-e}else if(d===2){if(f===0)continue;g=h-1}else{if(f+1>=e)continue;g=h+1}const _=o+Ma;i[g]<0||this.eaten[g]?_<this.dist[g]&&(this.air[g]=1,this.dist[g]=_,(a[_]??=[]).push(g)):this.offer(g,_)}}}}findTarget(t){const e=this.heaps[t];for(;this.heapSize[t]>0;){const n=e[0],i=n&4095;if(!this.eaten[i]&&!this.claimed[i]&&this.rd[i]===(n-i)/4096)return i;this.heapPop(t)}return-1}walkTo(t){return this.rd[t]>=xi?1/0:this.rd[t]/Ma}exposedCounts(t){const e=t??new Int32Array(this.s.colors);return e.set(this.reachCount),e}exposedCells(){const t=[];for(let e=0;e<this.reach.length;e++)this.reach[e]&&!this.claimed[e]&&t.push(e);return t}tripTo(t){return Om+Math.min(240,Math.round(Bm*this.rd[t]/(Ma*this.s.maxDim)))}claim(t){this.claimed[t]=1,this.reach[t]&&this.reachCount[this.s.cell[t]]--,this.pending.push((this.roundNo+this.tripTo(t))*4096+t);let e=this.pending.length-1;const n=this.pending;for(;e>0;){const i=e-1>>1;if(n[i]<=n[e])break;const a=n[e];n[e]=n[i],n[i]=a,e=i}}popPending(){const t=this.pending,e=t[0],n=t.pop();if(t.length){t[0]=n;let i=0;for(;;){const a=i*2+1,r=a+1;let o=i;if(a<t.length&&t[a]<t[o]&&(o=a),r<t.length&&t[r]<t[o]&&(o=r),o===i)break;const c=t[i];t[i]=t[o],t[o]=c,i=o}}return e}eatCell(t){const{cell:e,zobA:n,zobB:i}=this.s;if(this.eaten[t]||e[t]<0)return;this.eaten[t]=1;const a=e[t];this.reach[t]&&!this.claimed[t]&&this.reachCount[a]--,this.reach[t]=0,this.claimed[t]=0,this.remaining[a]--,this.left--,this.hashA^=n[t],this.hashB^=i[t];const r=this.rd[t];this.rd[t]=xi,r<this.dist[t]&&(this.air[t]=1,this.dist[t]=r,this.spread([t]))}flushPending(t){for(;this.pending.length;){const e=this.popPending()%4096;this.eatCell(e),t?.push({t:"pickup",cell:e})}this.left===0&&this.status==="playing"&&(this.status="won",t?.push({t:"won"}))}boxColor(t){return this.s.boxColor[t]}boxCount(t){return this.s.boxCount[t]}boxLink(t){return this.s.boxLink[t]}boxThawAt(t){return this.s.boxThaw[t]}get boxIds(){return this.s.boxColor.length}isFrozen(t){return this.taps<this.s.boxThaw[t]}frozenLeft(t){return Math.max(0,this.s.boxThaw[t]-this.taps)}groupOf(t){const e=this.s.boxLink[t];return e<0?[t]:this.s.groups.get(e)??[t]}freeSlots(){let t=0;for(const e of this.slots)e||t++;return t}firstFreeSlot(){for(let t=0;t<this.slots.length;t++)if(!this.slots[t])return t;return-1}isAvailable(t){if(this.boxWhere[t]!==on.Queue)return!1;const e=this.columns[this.boxCol[t]],n=this.s.boxLink[t];for(const i of e){if(i===t)return!0;if(n<0||this.s.boxLink[i]!==n)return!1}return!1}canTake(t){if(this.status!=="playing")return!1;const e=this.groupOf(t);if(e.length>this.freeSlots())return!1;for(const n of e)if(this.boxWhere[n]!==on.Queue||this.isFrozen(n)||!this.isAvailable(n))return!1;return!0}whyNot(t){if(this.boxWhere[t]!==on.Queue)return"gone";const e=this.groupOf(t);for(const n of e)if(this.isFrozen(n))return"frozen";if(!this.isAvailable(t))return"blocked";for(const n of e)if(!this.isAvailable(n))return"link";return e.length>this.freeSlots()?"slots":"ok"}legalMoves(){const t=[];if(this.status!=="playing"||this.freeSlots()===0)return t;let e=null;for(const n of this.columns){if(!n.length)continue;const i=n[0],a=this.s.boxLink[i];if(a>=0){if(e?.includes(a))continue;(e??=[]).push(a)}this.canTake(i)&&t.push(i)}return t}take(t,e){return this.canTake(t)?(this.moveToSlots(this.groupOf(t),e,!1),!0):!1}grab(t,e){if(this.status!=="playing"||this.boxWhere[t]!==on.Queue)return!1;const n=this.groupOf(t);if(n.length>this.freeSlots())return!1;for(const i of n)if(this.boxWhere[i]!==on.Queue||this.isFrozen(i))return!1;return this.moveToSlots(n,e,!0),!0}putVirtual(t,e){const n=this.firstFreeSlot();return n<0?!1:(this.slots[n]={box:-1,color:t,left:e},!0)}moveToSlots(t,e,n){for(const i of t){const a=this.boxCol[i],r=this.columns[a],o=r.indexOf(i);r.splice(o,1);const c=this.firstFreeSlot();this.slots[c]={box:i,color:this.s.boxColor[i],left:this.s.boxCount[i]},this.boxWhere[i]=on.Slot,this.boxCol[i]=-1,this.boxHidden[i]&&(this.boxHidden[i]=0,e?.push({t:"reveal",box:i})),e?.push({t:"take",box:i,slot:c,col:a,index:o,grabbed:n||void 0})}this.taps++,this.afterQueueChange(e)}afterQueueChange(t){for(const e of this.columns)e.length&&this.boxHidden[e[0]]&&(this.boxHidden[e[0]]=0,t?.push({t:"reveal",box:e[0]}));if(t)for(const e of this.columns)for(const n of e)this.s.boxThaw[n]===this.taps&&t.push({t:"thaw",box:n})}addSlot(){this.slots.push(null),this.status==="stuck"&&(this.status="playing")}shuffle(t,e){const n=[],i=[];this.columns.forEach((a,r)=>a.forEach((o,c)=>{this.s.boxLink[o]<0&&!this.isFrozen(o)&&(n.push([r,c]),i.push(o))})),t.shuffle(i),n.forEach(([a,r],o)=>{this.columns[a][r]=i[o],this.boxCol[i[o]]=a}),this.status==="stuck"&&(this.status="playing"),this.afterQueueChange(e)}round(t){if(this.status!=="playing")return 0;let e=0;for(;this.pending.length&&Math.floor(this.pending[0]/4096)<=this.roundNo;){const n=this.popPending()%4096;this.eatCell(n),e++,t?.push({t:"pickup",cell:n})}for(let n=0;n<this.slots.length;n++){const i=this.slots[n];if(!i||i.left<=0)continue;const a=this.findTarget(i.color);a<0||(this.claim(a),i.left--,e++,t?.push({t:"ant",slot:n,box:i.box,cell:a,color:i.color,left:i.left,due:this.roundNo+this.tripTo(a)}),!(i.left>0)&&(i.box>=0?this.release(i.box,t):(this.slots[n]=null,t?.push({t:"boxDone",slot:n,box:i.box}))))}return this.roundNo++,this.left===0&&this.status==="playing"?(this.status="won",t?.push({t:"won"}),e):e+this.pending.length}release(t,e){const n=this.groupOf(t),i=a=>this.slots.findIndex(r=>r!==null&&r.box===a);for(const a of n){const r=i(a);if(r>=0&&this.slots[r].left>0)return}for(const a of n){const r=i(a);r<0||(this.slots[r]=null,a>=0&&(this.boxWhere[a]=on.Done),e?.push({t:"boxDone",slot:r,box:a}))}}isQuiet(){if(this.pending.length)return!1;for(const t of this.slots)if(t&&t.left>0&&this.findTarget(t.color)>=0)return!1;return!0}settle(t){for(;this.status==="playing"&&this.round(t)>0;);this.checkStuck(t)}checkStuck(t){return this.status!=="playing"?this.status==="stuck":this.left>0&&this.isQuiet()&&this.legalMoves().length===0?(this.status="stuck",t?.push({t:"stuck"}),!0):!1}unstick(){this.status==="stuck"&&(this.status="playing")}key(){let t="";for(const e of this.columns)t+=e.length+",";t+="|";for(const e of this.slots)t+=e?e.box+":"+e.left+",":"-,";return t+"|"+this.hashA+","+this.hashB+"|"+this.taps+"|"+this.pending.length}queueSize(){let t=0;for(const e of this.columns)t+=e.length;return t}}const qo='"Nunito Variable", "Nunito", system-ui, sans-serif';async function km(){try{await Promise.all([document.fonts.load(`900 64px ${qo}`),document.fonts.load(`800 32px ${qo}`)])}catch{}}class Hc{canvas;texture;ctx;last="";constructor(t=128){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.texture=new Fi(this.canvas),this.texture.colorSpace=we,this.texture.anisotropy=4}draw(t,e={}){const n=t+(e.fill??"")+(e.stroke??"")+(e.shadow??"")+(e.scale??1);if(n===this.last)return;this.last=n;const{ctx:i,canvas:a}=this,r=a.width;if(i.clearRect(0,0,r,r),!t){this.texture.needsUpdate=!0;return}const o=t.length,c=r*(o>=3?.42:o===2?.52:.6)*(e.scale??1);i.font=`900 ${c}px ${qo}`,i.textAlign="center",i.textBaseline="middle";const l=r*.53;i.lineJoin="round",i.fillStyle=e.shadow??"rgba(20, 12, 30, 0.35)",i.fillText(t,r/2,l+c*.07),i.lineWidth=c*.09,i.strokeStyle=e.stroke??"rgba(38, 28, 60, 0.85)",i.strokeText(t,r/2,l),i.fillStyle=e.fill??"#ffffff",i.fillText(t,r/2,l),this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function ml(s="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=64){const n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d"),a=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);a.addColorStop(0,s),a.addColorStop(1,t),i.fillStyle=a,i.fillRect(0,0,e,e);const r=new Fi(n);return r.colorSpace=we,r}function o0(s=64){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=s/2,i=e.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.moveTo(n,0),e.quadraticCurveTo(n,n,s,n),e.quadraticCurveTo(n,n,n,s),e.quadraticCurveTo(n,n,0,n),e.quadraticCurveTo(n,n,n,0),e.fill();const a=new Fi(t);return a.colorSpace=we,a}function zm(s=128){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");e.fillStyle="#8f8aa3",e.fillRect(0,0,s,s),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=s*.06;for(let i=-s;i<s*2;i+=s*.22)e.beginPath(),e.moveTo(i,0),e.lineTo(i+s,s),e.stroke();const n=new Fi(t);return n.colorSpace=we,n}const ti=.62,Vc=new At("#9b94b3"),Hm=new At("#8f8a7c"),Vm=new At("#ff5a4a"),Gc=14,Wc=new P(1,0,0);class Gm{group=new Pe;boxes=new Map;links=[];boxGeo=new ln(1,ti,1,3,.2);iceGeo=new ln(1.12,ti*1.25,1.12,2,.16);labelGeo=new Ke(1,1);iceMat=new me({color:"#cfefff",transparent:!0,opacity:.62,roughness:.08,metalness:.05,envMapIntensity:1.6,depthWrite:!1});linkMat=new me({color:"#e0b04a",roughness:.28,metalness:.85,envMapIntensity:1.4});linkGeo=new Ii(.075,.024,8,18);lq=new Ge;lq2=new Ge;lm=new ne;ls=new P;lp=new P;ldir=new P;mysteryTex=zm();tray=null;trayMat=new me({color:"#efd3a0",roughness:.62});padMat=new me({color:"#d9b67c",roughness:.85});padBase=new At("#d9b67c");layout;sim;colors;tmp=new P;tmp2=new P;slotPulse=0;more=[];hint="count";constructor(t,e,n="count"){this.hint=n,this.sim=t,this.colors=e.map(a=>new At(a));for(let a=0;a<t.boxIds;a++)t.boxColor(a)<0||this.boxes.set(a,this.makeBox(a));for(let a=0;a<t.columns.length;a++){const r=new Hc(128),o=new ee(this.labelGeo,new Ui({map:r.texture,transparent:!0,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.renderOrder=5,this.group.add(o),this.more.push({mesh:o,label:r})}const i=new Set;for(let a=0;a<t.boxIds;a++){const r=t.boxLink(a);if(r<0||i.has(r))continue;i.add(r);const o=t.groupOf(a);for(let c=0;c+1<o.length;c++){const l=new Je(this.linkGeo,this.linkMat,Gc);l.castShadow=!0,l.frustumCulled=!1,this.group.add(l),this.links.push({a:o[c],b:o[c+1],chain:l})}}}makeBox(t){const e=new Pe,n=this.colors[this.sim.boxColor(t)],i=new me({color:n,roughness:.38,metalness:0,envMapIntensity:1}),a=new ee(this.boxGeo,i);a.castShadow=!0,a.receiveShadow=!0,a.position.y=ti/2,a.userData.boxId=t,e.add(a);const r=new Hc(128),o=new me({map:r.texture,transparent:!0,depthWrite:!1,roughness:.45,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2}),c=new ee(this.labelGeo,o);c.renderOrder=5,e.add(c);let l=null;return this.sim.boxThawAt(t)>0&&(l=new ee(this.iceGeo,this.iceMat),l.position.y=ti*1.25/2-.02,l.renderOrder=4,e.add(l)),this.group.add(e),{id:t,group:e,body:a,mat:i,label:r,labelMesh:c,ice:l,color:n,hiddenShown:!1,where:"queue",from:new P,to:new P,t:1,dur:.001,arc:0,shake:0,flip:0,pop:0,bump:0,hint:0,fade:1,row:0}}setSim(t){this.sim=t}setNight(t){this.trayMat.color.set(t?"#6c6586":"#efd3a0"),this.padBase.set(t?"#57506f":"#d9b67c"),this.padMat.color.copy(this.padBase)}setLayout(t){this.layout=t,this.buildTray(t);for(const e of this.boxes.values())e.labelMesh.rotation.set(-Math.PI/2,0,0),e.labelMesh.scale.setScalar(.92);this.more.forEach((e,n)=>{const i=Oc(t,n,t.queueRowsVisible-(t.queueRow>0?.4:-.15));e.mesh.position.set(i.x,.02,i.z),e.mesh.scale.setScalar(t.boxSize*.8)}),this.syncFromSim(!1)}buildTray(t){this.tray&&(this.group.remove(this.tray),this.tray.traverse(u=>u.geometry?.dispose()));const e=new Pe,n=t.slot.length,i=n>1?t.slot[1].x-t.slot[0].x:1.6,a=(t.slot[0].x+t.slot[n-1].x)/2,r=t.slot[0].z,o=i*(n-1)+t.slotSize+.55,c=t.slotSize+.55,l=Wa(a-o/2,-(r+c/2),o,c,.4),h=new Li(l,{depth:.12,bevelEnabled:!0,bevelThickness:.05,bevelSize:.06,bevelSegments:3,curveSegments:8});h.rotateX(-Math.PI/2);const f=new ee(h,this.trayMat);f.receiveShadow=!0,f.castShadow=!0,e.add(f);for(const u of t.slot){const d=new ee(new En(Wa(u.x-t.slotSize/2-.04,-(u.z+t.slotSize/2+.04),t.slotSize+.08,t.slotSize+.08,.22),6),this.padMat);d.geometry.rotateX(-Math.PI/2),d.position.y=.175,d.receiveShadow=!0,e.add(d)}this.tray=e,this.group.add(e)}columnX(t){const e=this.layout,n=e.queueCol.length,i=n>1?e.queueCol[1]-e.queueCol[0]:1.6,a=(e.queueCol[0]+e.queueCol[n-1])/2,r=[];for(let c=0;c<this.sim.columns.length;c++)this.sim.columns[c].length&&r.push(c);const o=r.indexOf(t);return o<0?e.queueCol[t]:a+(o-(r.length-1)/2)*i}targetOf(t,e){const n=this.sim.boxWhere[t];if(n===on.Queue){const i=this.sim.boxCol[t],a=this.sim.columns[i].indexOf(t),r=Oc(this.layout,i,a);return e.set(this.columnX(i),0,r.z),{where:"queue",row:a}}if(n===on.Slot){const i=this.sim.slots.findIndex(r=>r?.box===t),a=this.layout.slot[Math.max(0,Math.min(this.layout.slot.length-1,i))];return e.set(a.x,.17,a.z),{where:"slot",row:0}}return{where:"gone",row:0}}syncFromSim(t=!0){for(const e of this.boxes.values()){const{where:n,row:i}=this.targetOf(e.id,this.tmp),a=e.where==="gone";if(n==="gone"){e.where!=="gone"&&(e.where="gone",t?e.pop=Math.max(e.pop,1e-4):e.group.visible=!1);continue}a&&(e.group.visible=!0,e.pop=0);const r=!e.to.equals(this.tmp)||e.where!==n;if(e.row=i,r){e.from.copy(t?e.group.position:this.tmp),e.to.copy(this.tmp),e.t=0;const o=n==="slot"&&e.where==="queue";e.dur=t?o?.42:.26:1e-4,e.arc=o?1.4:0,t||e.group.position.copy(this.tmp)}e.where=n}this.refreshLabels()}refreshLabels(){for(const t of this.boxes.values())this.refreshLabel(t);this.layout&&this.more.forEach((t,e)=>{const n=Math.max(0,this.sim.columns[e].length-this.layout.queueRowsVisible);t.mesh.visible=n>0,t.mesh.position.x=this.columnX(e),n>0&&t.label.draw(this.hint==="mystery"?"?":`+${n}`,{fill:"#ffffff",stroke:"rgba(40, 28, 70, 0.9)",shadow:"rgba(0, 0, 0, 0.3)",scale:.85})})}refreshLabel(t){const e=this.sim.boxHidden[t.id]===1,n=this.sim.isFrozen(t.id);if(e)t.mat.color.copy(Vc),t.mat.map=this.mysteryTex,t.mat.needsUpdate=t.hiddenShown===!1,t.hiddenShown=!0,t.label.draw("?",qc(Vc));else if(t.hiddenShown&&(t.hiddenShown=!1,t.mat.map=null,t.mat.needsUpdate=!0,t.flip=1),t.mat.color.copy(t.color),n)t.label.draw(String(this.sim.frozenLeft(t.id)),{fill:"#eefaff",stroke:"#3d7fae",shadow:"rgba(30,70,110,0.4)"});else{const i=this.sim.slots.find(r=>r?.box===t.id),a=i?i.left:this.sim.boxWhere[t.id]===on.Done?0:this.sim.boxCount(t.id);t.label.draw(String(a),qc(t.color))}t.ice&&!n&&t.ice.visible&&(t.ice.visible=!1)}pick(t){const e=[];for(const i of this.boxes.values())i.where==="queue"&&i.group.visible&&i.fade>.2&&e.push(i.body);const n=t.intersectObjects(e,!1)[0];return n?n.object.userData.boxId:null}shake(t){const e=this.boxes.get(t);e&&(e.shake=.45)}bump(t){const e=this.boxes.get(t);e&&(e.bump=.25)}setHint(t){for(const e of this.boxes.values())e.hint=e.id===t?Math.max(e.hint,.001):0}pulseSlots(){this.slotPulse=1}boxTop(t,e){const n=this.boxes.get(t);if(!n)return e.set(0,0,0);const i=n.t<1?n.to:n.group.position;return e.copy(i).setY(i.y+ti*this.layout.boxSize)}boxColor(t){return this.colors[this.sim.boxColor(t)]}isSettled(){for(const t of this.boxes.values())if(t.pop>0||t.t<1&&t.where!=="gone")return!1;return!0}update(t,e){const n=this.layout,i=n.boxSize;for(const a of this.boxes.values()){if(a.where==="gone"&&a.pop===0){a.group.visible=!1;continue}if(a.t<1){a.t=Math.min(1,a.t+t/a.dur);const d=Xc(a.t);a.group.position.lerpVectors(a.from,a.to,d),a.group.position.y+=Math.sin(a.t*Math.PI)*a.arc,a.t>=1&&a.arc>0&&(a.bump=.22)}let r=i,o=i,c=i;if(a.bump>0){a.bump=Math.max(0,a.bump-t);const d=a.bump/.22;o*=1-Math.sin(d*Math.PI)*.18,r*=1+Math.sin(d*Math.PI)*.1,c=r}let l=0;if(a.shake>0&&(a.shake=Math.max(0,a.shake-t),l=Math.sin(a.shake*55)*.09*(a.shake/.45)),a.pop>0){a.pop+=t;const d=a.pop/.3,g=d<.35?1+d*.5:Math.max(0,1.18*(1-(d-.35)/.65));if(r*=g,o*=g,c*=g,d>=1){a.group.visible=!1,a.pop=0;continue}}a.hint>0&&(a.hint+=t,a.group.position.y=a.to.y+Math.abs(Math.sin(a.hint*5))*.35);const h=a.where!=="queue"||a.row<n.queueRowsVisible?1:0;a.fade+=(h-a.fade)*Math.min(1,t*8);const f=a.fade,u=.55+.45*f;a.group.scale.set(r*u,o*u,c*u),a.group.visible=f>.05||a.pop>0,a.group.visible&&(a.body.position.x=l,a.labelMesh.position.set(l,ti+.012,0),a.labelMesh.visible=f>.75,a.hiddenShown||a.mat.color.copy(a.color).lerp(Hm,(1-f)*.9),a.flip>0?(a.flip=Math.max(0,a.flip-t*2.8),a.body.rotation.x=(1-Xc(1-a.flip))*Math.PI*2*(a.flip>0?1:0)):a.body.rotation.x=0,a.ice&&(a.ice.rotation.y=Math.sin(e*1.3+a.id)*.02))}for(const a of this.links)this.updateChain(a,i);if(this.slotPulse>0){this.slotPulse=Math.max(0,this.slotPulse-t*.7);const a=Math.sin(this.slotPulse*Math.PI*4)*this.slotPulse;this.padMat.color.copy(this.padBase).lerp(Vm,Math.max(0,a)*.6)}}updateChain(t,e){const n=this.boxes.get(t.a),i=this.boxes.get(t.b),a=n.group.visible&&i.group.visible&&n.where!=="gone"&&i.where!=="gone"&&n.fade>.3&&i.fade>.3;if(t.chain.visible=a,!a)return;const r=this.tmp.copy(n.group.position),o=this.tmp2.copy(i.group.position),c=this.ldir.subVectors(o,r).setY(0),l=c.length();if(l<1e-4){t.chain.count=0;return}c.divideScalar(l);const h=e*.5*Math.min(1/Math.max(Math.abs(c.x),.001),1/Math.max(Math.abs(c.z),.001),1.4)-.05*e,f=r.y+ti*e*.55,u=o.y+ti*e*.55,d=Math.max(.05,l-h*2),g=Math.max(2,Math.min(Gc,Math.round(d/(.13*e))+1));this.lq.setFromUnitVectors(Wc,c);for(let _=0;_<g;_++){const m=g===1?.5:_/(g-1),p=h+d*m,v=Math.sin(m*Math.PI)*Math.min(.12,d*.18);this.ls.set(r.x+c.x*p,f+(u-f)*m-v,r.z+c.z*p),this.lq2.setFromAxisAngle(Wc,_%2?Math.PI/2:0).premultiply(this.lq),this.lm.compose(this.ls,this.lq2,this.lp.set(1.45*e,e,e)),t.chain.setMatrixAt(_,this.lm)}t.chain.count=g,t.chain.instanceMatrix.needsUpdate=!0}dispose(){for(const t of this.links)t.chain.dispose();for(const t of this.more)t.label.dispose(),t.mesh.material.dispose();for(const t of this.boxes.values())t.mat.dispose(),t.label.dispose(),t.labelMesh.material.dispose();this.boxGeo.dispose(),this.iceGeo.dispose(),this.labelGeo.dispose(),this.iceMat.dispose(),this.linkMat.dispose(),this.linkGeo.dispose(),this.mysteryTex.dispose(),this.trayMat.dispose(),this.padMat.dispose(),this.tray?.traverse(t=>t.geometry?.dispose())}}function Xc(s){return 1-Math.pow(1-s,3)}function qc(s){const t={h:0,s:0,l:0};s.getHSL(t,we);const e=Math.round(t.h*360),n=Math.round(Math.min(.75,t.s)*100);if(t.l>.78)return{fill:`hsl(${e}, ${Math.round(n*.6)}%, 30%)`,stroke:`hsl(${e}, ${Math.round(n*.4)}%, 98%)`,shadow:`hsla(${e}, ${n}%, 25%, 0.22)`};const i=t.l>.66;return{fill:`hsl(${e}, ${Math.round(n*.5)}%, ${i?99:96}%)`,stroke:`hsl(${e}, ${n}%, ${Math.round(Math.max(.16,t.l*(i?.45:.42))*100)}%)`,shadow:`hsla(${e}, ${n}%, ${Math.round(Math.max(.1,t.l*.3)*100)}%, 0.45)`}}function nr(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,c=new Ne;let l=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=s[u].attributes.position.count}c.setIndex(f)}for(const h in a){const f=$c(a[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const g=$c(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function $c(s){let t,e,n,i=-1,a=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*e}const r=new t(a),o=new nn(r,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);o.setComponent(u+f,g,_)}}else r.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function be(s,t){const e=s.index?s.toNonIndexed():s;e.deleteAttribute("uv");const n=new At(t),i=e.attributes.position.count,a=new Float32Array(i*3);for(let r=0;r<i;r++)a.set([n.r,n.g,n.b],r*3);return e.setAttribute("color",new nn(a,3)),e}function _i(s,t=-.35){const e=nr(s,!1);return e.rotateX(t),e.translate(0,.5,.29),e.computeVertexNormals(),e}function l0(s){switch(s){case"party":{const t=new ii(.1,.26,16);t.translate(0,.13,0);const e=new Ii(.095,.018,6,20);e.rotateX(Math.PI/2),e.translate(0,.02,0);const n=new ye(.04,10,8);return n.translate(0,.27,0),_i([be(t,"#ff5d8f"),be(e,"#ffd166"),be(n,"#ffd166")])}case"cap":{const t=new ye(.16,16,8,0,Math.PI*2,0,Math.PI/2);t.scale(1,.62,1);const e=new Oe(.15,.15,.02,16,1,!1,-Math.PI/2,Math.PI);e.scale(1,1,1.1),e.translate(0,.01,.06);const n=new ye(.022,8,6);return n.translate(0,.1,0),_i([be(t,"#3a86ff"),be(e,"#1f5fd1"),be(n,"#ffffff")],-.2)}case"bow":{const t=new ii(.07,.12,12);t.rotateZ(-Math.PI/2),t.translate(-.07,0,0);const e=new ii(.07,.12,12);e.rotateZ(Math.PI/2),e.translate(.07,0,0);const n=new ye(.035,10,8),i=[be(t,"#ff4fa3"),be(e,"#ff4fa3"),be(n,"#ff82c3")],a=_i(i,-.5);return a.translate(.07,.02,-.02),a}case"flower":{const t=[];for(let i=0;i<5;i++){const a=new ye(.05,10,6);a.scale(1,.35,.6),a.translate(.055,0,0),a.rotateY(i/5*Math.PI*2),t.push(be(a,"#ffffff"))}const e=new ye(.035,10,8);e.scale(1,.6,1),e.translate(0,.015,0),t.push(be(e,"#ffc933"));const n=_i(t,-.6);return n.translate(.09,.01,0),n}case"sunglasses":{const t=[];for(const i of[-1,1]){const a=new Oe(.075,.075,.02,16);a.rotateX(Math.PI/2),a.translate(i*.095,.41,.535),t.push(be(a,"#1d1d24"))}const e=new cn(.06,.018,.018);e.translate(0,.43,.54),t.push(be(e,"#1d1d24"));const n=nr(t,!1);return n.computeVertexNormals(),n}case"tophat":{const t=new Oe(.095,.105,.22,16);t.translate(0,.13,0);const e=new Oe(.17,.17,.022,20);e.translate(0,.02,0);const n=new Oe(.107,.107,.045,16);return n.translate(0,.06,0),_i([be(t,"#2b2d42"),be(e,"#2b2d42"),be(n,"#e63946")])}case"santa":{const t=new ii(.11,.3,16);t.translate(0,.15,0),t.rotateZ(-.35);const e=new Ii(.1,.035,8,20);e.rotateX(Math.PI/2),e.translate(0,.02,0);const n=new ye(.045,10,8);return n.translate(.11,.3,0),_i([be(t,"#d62828"),be(e,"#ffffff"),be(n,"#ffffff")])}case"crown":{const t=[],e=new Oe(.12,.11,.08,16,1,!0);e.translate(0,.04,0),t.push(be(e,"#ffc933"));for(let n=0;n<5;n++){const i=n/5*Math.PI*2,a=new ii(.03,.08,6);a.translate(Math.cos(i)*.115,.12,Math.sin(i)*.115),t.push(be(a,"#ffc933"));const r=new ye(.02,8,6);r.translate(Math.cos(i)*.12,.045,Math.sin(i)*.12),t.push(be(r,n%2?"#3a86ff":"#e63946"))}return _i(t,-.25)}default:return null}}const Mi=700,$o=6;function c0(){const s=[],t=(n,i,a,r,o,c,l=12)=>{const h=new ye(1,l,Math.round(l*.75));h.scale(n,i,a),h.translate(r,o,c),s.push(h)};t(.25,.21,.31,0,.27,-.33),t(.075,.075,.09,0,.23,-.05,8),t(.13,.12,.17,0,.25,.08,12),t(.22,.2,.21,0,.33,.33);for(const n of[-1,1]){const i=new fl([new P(n*.07,.47,.38),new P(n*.13,.66,.43),new P(n*.22,.72,.6)]);s.push(new Qa(i,6,.022,4,!1)),t(.045,.045,.045,n*.22,.72,.6,8)}const e=nr(s.map(n=>n.toNonIndexed()),!1);return e.computeVertexNormals(),e}function qa(s,t,e,n){const i=new ye(s,8,6);i.translate(-n,e,t);const a=new ye(s,8,6);return a.translate(n,e,t),nr([i,a],!1)}function h0(){const s=new fl([new P(0,0,0),new P(.17,.09,0),new P(.3,.02,0),new P(.36,-.2,0)]);return new Qa(s,6,.024,4,!1)}function Wm(s,t="none"){const e=new Pe,n=new At(s),i={h:0,s:0,l:0};n.getHSL(i);const a=new At().setHSL(i.h,Math.min(1,i.s*.9),Math.max(.03,i.l*.45));e.add(new ee(c0(),new me({color:n,roughness:.32}))),e.add(new ee(qa(.085,.47,.4,.1),new me({color:"#ffffff",roughness:.25}))),e.add(new ee(qa(.048,.535,.41,.105),new me({color:"#15101f",roughness:.2})));const r=h0(),o=new me({color:a,roughness:.5});for(let l=0;l<$o;l++){const h=l<3?-1:1,f=l%3,u=new ee(r,o);u.position.set(h*.08,.22,u0[f]),u.rotation.set(0,(h<0?Math.PI:0)-h*f0[f],0),e.add(u)}const c=l0(t);return c&&e.add(new ee(c,new me({vertexColors:!0,roughness:.45,side:$e}))),e}const u0=[.15,.07,-.01],f0=[.55,0,-.55];class Xm{group=new Pe;body;eyes;pupils;legs;cubes;ants=[];palette;legColors;layout;board;cb;speed=1;m=new ne;m2=new ne;q=new Ge;e=new Mn;v=new P;s=new P;one=new P(1,1,1);antSize=.42;rect={x0:0,x1:0,z0:0,z1:0,ix0:0,ix1:0,iz0:0,iz1:0,rim:.2};sim;bfsDist=new Int32Array(0);bfsPrev=new Int32Array(0);ready=new Set;house={x0:0,x1:0,z0:0,z1:0};door={x:0,z:0};hat=null;constructor(t,e,n,i,a="cube",r="none"){this.board=e,this.sim=n,this.cb=i,this.palette=t.map(l=>new At(l)),this.legColors=this.palette.map(l=>{const h={h:0,s:0,l:0};return l.getHSL(h),new At().setHSL(h.h,Math.min(1,h.s*.9),Math.max(.03,h.l*.45))});const o=new me({roughness:.32,metalness:0,envMapIntensity:1.1});this.body=new Je(c0(),o,Mi),this.body.castShadow=!0,this.eyes=new Je(qa(.085,.47,.4,.1),new me({color:"#ffffff",roughness:.25}),Mi),this.pupils=new Je(qa(.048,.535,.41,.105),new me({color:"#15101f",roughness:.2}),Mi),this.legs=new Je(h0(),new me({roughness:.5}),Mi*$o),this.cubes=new Je(s0(a,!0),a0(a),Mi);const c=l0(r);c&&(this.hat=new Je(c,new me({vertexColors:!0,roughness:.45,side:$e}),Mi),this.hat.castShadow=!0,this.hat.frustumCulled=!1,this.hat.count=0,this.hat.instanceMatrix.setUsage(Ll),this.group.add(this.hat)),this.cubes.castShadow=!0;for(const l of[this.body,this.eyes,this.pupils,this.legs,this.cubes])l.frustumCulled=!1,l.count=0,l.instanceMatrix.setUsage(Ll),this.group.add(l);this.body.setColorAt(0,this.palette[0]),this.legs.setColorAt(0,this.palette[0]),this.cubes.setColorAt(0,this.palette[0])}setLayout(t){this.layout=t,this.antSize=Math.max(.46,Math.min(.74,t.cell*1.9));const e=t.cell*.35,n=t.picX0-e,i=t.picZ0-e,a=t.picX0+t.picW+e,r=t.picZ0+t.picH+e;this.rect={ix0:n,iz0:i,ix1:a,iz1:r,x0:n-t.frame,z0:i-t.frame,x1:a+t.frame,z1:r+t.frame,rim:Math.max(.06,Math.min(.2,t.cell*.32))+.1};const o=t.boxSize/2+.25,c=t.queueZ0-Math.sign(t.queueRow)*o,l=t.queueZ0+(t.queueRowsVisible+1)*t.queueRow;this.avoid={x0:t.queueCol[0]-o,x1:t.queueCol[t.queueCol.length-1]+o,z0:Math.min(c,l),z1:Math.max(c,l)},this.clear()}avoid={x0:0,x1:0,z0:0,z1:0};get count(){return this.ants.length}setHome(t,e){this.house=t,this.door={x:e.x,z:e.z}}clear(){this.ants.length=0,this.ready.clear()}fadeAll(){for(const t of this.ants)t.phase="fade",t.timer=0;this.ready.clear()}pickup(t){this.ready.add(t),this.ants.some(e=>e.cell===t&&(e.phase==="out"||e.phase==="bite"))||(this.board.remove(t),this.ready.delete(t),this.cb.onPick(t),this.cb.onDeliver())}spawn(t,e,n,i=2,a=0){if(this.ants.length>=Mi)return;const r=Math.random(),o=t.x+(r-.5)*.3,c=t.z+.2,l=this.planInside(e,o,c),h=[o,c];this.route(h,l.inside[0],l.inside[1]);const f=h.length/2-1;for(let m=2;m<l.inside.length;m+=2)h.push(l.inside[m],l.inside[m+1]);const u={color:n,cell:e,pts:h,cum:[],dist:0,phase:"out",timer:0,yaw:Math.PI,legPhase:r*6,startY:t.y,seed:r,line:l.block,lineD:[],x:h[0],z:h[1],y:t.y,scale:.2,wait:0,back:l.inside.length/2,spd:1,delay:a};this.measure(u);const d=u.cum[u.cum.length-1],g=3.3;u.spd=Math.max(.7,Math.min(2.2,d/Math.max(.3,i-a-.3)/g));const _=u.cum[f];u.lineD=l.blockD.map(m=>_+m),this.ants.push(u)}cellXZ(t,e){const n=this.layout,i=this.sim.w,a=t%i;return e.x=n.picX0+(a+.5)*n.cell,e.z=n.picZ0+((t-a)/i+.5)*n.cell,e}exitPoint(t,e){const n=this.cellXZ(t,{x:0,z:0}),i=this.rect;return e===1?n.z=i.z1+.25:e===2?n.z=i.z0-.25:e===4?n.x=i.x0-.25:n.x=i.x1+.25,n}planInside(t,e,n){const i=this.sim,a=i.w,r=i.h,o=a*r,l=this.layout.cell;this.bfsDist.length!==o&&(this.bfsDist=new Int32Array(o),this.bfsPrev=new Int32Array(o));const h=this.bfsDist.fill(-1),f=this.bfsPrev,u=J=>i.isFree(J)&&i.air[J]===1;let d=1/0,g=-1,_=0;const m=(J,q)=>{const K=i.edgeMask(J);for(const Q of[1,2,4,8]){if(!(K&Q))continue;const wt=this.exitPoint(J,Q),St=q*l+Math.hypot(wt.x-e,wt.z-n)*.8;St<d&&(d=St,g=J,_=Q)}};h[t]=0,m(t,0);const p=[t];for(let J=0;J<p.length;J++){const q=p[J],K=q%a,Q=(q-K)/a;for(let wt=0;wt<4;wt++){const St=wt===2?K-1:wt===3?K+1:K,jt=wt===0?Q+1:wt===1?Q-1:Q;if(St<0||jt<0||St>=a||jt>=r)continue;const Wt=jt*a+St;h[Wt]>=0||!u(Wt)||(h[Wt]=h[q]+1,f[Wt]=q,m(Wt,h[Wt]),p.push(Wt))}}const v=this.cellXZ(t,{x:0,z:0}),S=l*.5+this.antSize*.4,x=[];if(g<0)return x.push(v.x,this.rect.z1+.25,v.x,v.z+S),{inside:x,block:[],blockD:[]};const w=this.exitPoint(g,_),E=(Math.random()-.5)*l*.35,C=_===1||_===2;x.push(w.x+(C?E:0),w.z+(C?0:E));const b=[];for(let J=g;J!==t;J=f[J])b.push(J);const T={x:0,z:0};for(const J of b)this.cellXZ(J,T),x.push(T.x,T.z);const L=b.length?x[x.length-2]:w.x,D=b.length?x[x.length-1]:w.z;let B=L-v.x,O=D-v.z;const N=Math.hypot(B,O)||1;B/=N,O/=N,x.push(v.x+B*S,v.z+O*S);const R=this.smoothPath(x,t),{block:G,blockD:W}=this.blockingCells(R,t);return{inside:R,block:G,blockD:W}}walkable(t,e,n,i,a){const r=this.layout,o=this.sim.w,c=this.sim.h,l=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(l/(r.cell*.3)));for(let f=1;f<h;f++){const u=f/h,d=Math.floor((t+(n-t)*u-r.picX0)/r.cell),g=Math.floor((e+(i-e)*u-r.picZ0)/r.cell);if(d<0||g<0||d>=o||g>=c)continue;const _=g*o+d;if(_!==a&&(!this.sim.isFree(_)||!this.sim.air[_]))return!1}return!0}smoothPath(t,e){const n=t.length/2;if(n<=2)return t;const i=[t[0],t[1]];let a=0;for(;a<n-1;){let r=Math.min(n-1,a+14);for(;r>a+1&&!this.walkable(t[a*2],t[a*2+1],t[r*2],t[r*2+1],e);)r--;i.push(t[r*2],t[r*2+1]),a=r}return i}blockingCells(t,e){const n=this.layout,i=this.sim.w,a=this.sim.h,r=[],o=[],c=new Set;let l=0;const h=this.antSize*.45;for(let f=0;f+3<t.length;f+=2){const u=t[f],d=t[f+1],g=t[f+2],_=t[f+3],m=Math.hypot(g-u,_-d),p=Math.max(1,Math.ceil(m/(n.cell*.25)));for(let v=0;v<=p;v++){const S=v/p,x=Math.floor((u+(g-u)*S-n.picX0)/n.cell),w=Math.floor((d+(_-d)*S-n.picZ0)/n.cell);if(x<0||w<0||x>=i||w>=a)continue;const E=w*i+x;E===e||c.has(E)||this.sim.cellColor(E)<0||(c.add(E),r.push(E),o.push(Math.max(0,l+m*S-h)))}l+=m}return{block:r,blockD:o}}route(t,e,n){const i=t[t.length-2],a=t[t.length-1],r=this.findPath(i,a,e,n,!0)??this.findPath(i,a,e,n,!1)??[];for(const o of r)t.push(o[0]+(Math.random()-.5)*.2,o[1]+(Math.random()-.5)*.2);t.push(e,n)}blocked(t,e,n,i,a){return this.crosses(this.rect,t,e,n,i)||this.crosses(this.house,t,e,n,i)||a&&this.crosses(this.avoid,t,e,n,i)}findPath(t,e,n,i,a){if(!this.blocked(t,e,n,i,a))return[];const r=.3,o=[],c=v=>o.push([v.x0-r,v.z0-r],[v.x1+r,v.z0-r],[v.x1+r,v.z1+r],[v.x0-r,v.z1+r]);c(this.rect),c(this.house),a&&c(this.avoid);const l=o.length,h=(v,S)=>Math.hypot(v[0]-S[0],v[1]-S[1]),f=[t,e],u=[n,i],d=(v,S)=>!this.blocked(v[0],v[1],S[0],S[1],a),g=o.map(v=>d(f,v)),_=o.map(v=>d(v,u));let m=null,p=1/0;for(let v=0;v<l;v++)if(g[v]){if(_[v]){const S=h(f,o[v])+h(o[v],u);S<p&&(p=S,m=[o[v]])}for(let S=0;S<l;S++){if(S===v||!d(o[v],o[S]))continue;const x=h(f,o[v])+h(o[v],o[S]);if(!(x>=p)){if(_[S]){const w=x+h(o[S],u);w<p&&(p=w,m=[o[v],o[S]])}for(let w=0;w<l;w++){if(w===v||w===S||!_[w]||!d(o[S],o[w]))continue;const E=x+h(o[S],o[w])+h(o[w],u);E<p&&(p=E,m=[o[v],o[S],o[w]])}}}}return m}crosses(t,e,n,i,a){const o=t.x0+.05,c=t.x1-.05,l=t.z0+.05,h=t.z1-.05;let f=0,u=1;const d=i-e,g=a-n,_=[-d,d,-g,g],m=[e-o,c-e,n-l,h-n];for(let p=0;p<4;p++)if(_[p]===0){if(m[p]<0)return!1}else{const v=m[p]/_[p];if(_[p]<0){if(v>u)return!1;v>f&&(f=v)}else{if(v<f)return!1;v<u&&(u=v)}}return u-f>1e-4}measure(t){t.cum=[0];for(let e=2;e<t.pts.length;e+=2)t.cum.push(t.cum[t.cum.length-1]+Math.hypot(t.pts[e]-t.pts[e-2],t.pts[e+1]-t.pts[e-1]))}posAt(t,e){const n=t.cum;let i=1;for(;i<n.length-1&&n[i]<e;)i++;const a=n[i]-n[i-1],r=a>0?Math.min(1,Math.max(0,(e-n[i-1])/a)):1;t.x=t.pts[(i-1)*2]+(t.pts[i*2]-t.pts[(i-1)*2])*r,t.z=t.pts[(i-1)*2+1]+(t.pts[i*2+1]-t.pts[(i-1)*2+1])*r}setSim(t){this.sim=t}goHome(t){const e=[],n=Math.max(0,t.pts.length/2-Math.max(2,t.back));for(let a=t.pts.length/2-1;a>=n;a--)e.push(t.pts[a*2],t.pts[a*2+1]);const i=this.door.x+(Math.random()-.5)*.08;this.route(e,i,this.door.z+.35),e.push(i,this.door.z),t.pts=e,t.line=[],t.lineD=[],this.measure(t),t.dist=0,t.phase="home",t.startY=0}update(t,e){const n=3.3*this.speed,i=this.rect,a=[];for(const r of this.ants){if(r.delay>0){r.delay-=t*this.speed,r._s=0,a.push(r);continue}let o=!1;if(r.phase==="out"||r.phase==="home"){const g=r.cum[r.cum.length-1];let _=g;for(let p=0;p<r.line.length;p++)if(this.board.isPresent(r.line[p])){_=Math.min(_,r.lineD[p]-.05);break}const m=r.dist;r.dist=Math.min(_,r.dist+n*t*(r.phase==="out"?r.spd:1)*(.95+r.seed*.1)),r.dist<m&&(r.dist=m),o=r.dist>m+1e-5,!o&&r.dist<g-1e-4?(r.wait+=t*this.speed,r.wait>1.4&&(r.line=[])):r.wait=0,this.posAt(r,r.dist),r.dist>=g-1e-4&&(r.phase==="out"?(r.phase="bite",r.timer=0,this.board.wobble(r.cell)):(r.phase="enter",r.timer=0))}else if(r.phase==="bite")r.timer+=t*this.speed,r.timer>.15&&this.ready.has(r.cell)&&(this.ready.delete(r.cell),this.board.remove(r.cell),this.cb.onPick(r.cell),this.goHome(r));else if(r.phase==="enter"){if(r.timer+=t*this.speed,r.timer>.22){this.cb.onDeliver();continue}}else if(r.phase==="fade"&&(r.timer+=t,r.timer>.35))continue;const c=Math.min(r.cum.length-1,Math.max(1,r.cum.findIndex(g=>g>=r.dist))),l=r.pts[c*2]-r.pts[(c-1)*2],h=r.pts[c*2+1]-r.pts[(c-1)*2+1];if(r.phase!=="bite"){if(l*l+h*h>1e-6){let _=Math.atan2(l,h)-r.yaw;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;r.yaw+=_*Math.min(1,t*14)}}o&&(r.legPhase+=t*n*9);let f=0;r.phase==="out"&&r.startY>0&&(f=Math.max(0,r.startY*(1-r.dist/.6))),r.x>i.x0&&r.x<i.x1&&r.z>i.z0&&r.z<i.z1&&!(r.x>i.ix0&&r.x<i.ix1&&r.z>i.iz0&&r.z<i.iz1)?f=Math.max(f,i.rim):r.x>i.ix0&&r.x<i.ix1&&r.z>i.iz0&&r.z<i.iz1&&(f=Math.max(f,.04)),r.y+=(f-r.y)*Math.min(1,t*18);let d=1;r.phase==="out"&&(r.scale=Math.min(1,r.scale+t*5)),r.phase==="enter"&&(d=Math.max(.01,1-r.timer/.22)),r.phase==="fade"&&(d=Math.max(.01,1-r.timer/.35)),r.scale=Math.min(r.scale,1),r.y-=r.phase==="enter"?r.timer*.8:0,a.push(r),r._s=d*r.scale}this.ants=a,this.writeInstances()}writeInstances(){const t=this.antSize;let e=0,n=0,i=0;const a=this.layout.cell;for(const r of this.ants){const o=r._s*t,c=Math.sin(r.legPhase*2)*.012*t,l=r.phase==="bite"?Math.sin(r.timer*40)*.25:0;this.e.set(l*.5,r.yaw,0),this.q.setFromEuler(this.e),this.v.set(r.x,r.y+c,r.z),this.s.set(o,o,o),this.m.compose(this.v,this.q,this.s),this.body.setMatrixAt(e,this.m),this.eyes.setMatrixAt(e,this.m),this.pupils.setMatrixAt(e,this.m),this.hat?.setMatrixAt(e,this.m),this.body.setColorAt(e,this.palette[r.color]);for(let h=0;h<$o;h++){const f=h<3?-1:1,u=h%3,d=(u+(f>0?1:0))%2*Math.PI,g=Math.sin(r.legPhase+d)*.38,_=Math.max(0,Math.cos(r.legPhase+d))*.22;this.e.set(0,f<0?Math.PI:0,0);const m=(f<0?Math.PI:0)-f*(f0[u]+g);this.e.set(0,m,f*0+_),this.q.setFromEuler(this.e),this.v.set(f*.08,.22,u0[u]),this.m2.compose(this.v,this.q,this.one),this.m2.premultiply(this.m),this.legs.setMatrixAt(n,this.m2),this.legs.setColorAt(n,this.legColors[r.color]),n++}if(r.phase==="home"||r.phase==="enter"){const h=Math.min(a*.8,o*.55),f=.62*o;this.v.set(r.x+Math.sin(r.yaw)*f,r.y+.34*o+h*.62/2,r.z+Math.cos(r.yaw)*f),this.e.set(0,r.yaw,0),this.q.setFromEuler(this.e);const u=r.phase==="enter"?Math.max(.01,1-r.timer/.22):1;this.s.set(h*u,h*u,h*u),this.m.compose(this.v,this.q,this.s),this.cubes.setMatrixAt(i,this.m),this.cubes.setColorAt(i,this.board.cubeColor(r.cell)),i++}e++}this.body.count=this.eyes.count=this.pupils.count=e,this.legs.count=n,this.cubes.count=i,this.hat&&(this.hat.count=e,this.hat.instanceMatrix.needsUpdate=!0);for(const r of[this.body,this.eyes,this.pupils,this.legs,this.cubes])r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}dispose(){for(const t of[this.body,this.eyes,this.pupils,this.legs,this.cubes,...this.hat?[this.hat]:[]])t.geometry.dispose(),t.material.dispose(),t.dispose()}}function ws(s,t){const e=s/2,n=new ci;return n.moveTo(-e,0),n.lineTo(e,0),n.lineTo(e,t-e),n.absarc(0,t-e,e,0,Math.PI,!1),n.lineTo(-e,0),n}function bi(s){const t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)}class d0{group=new Pe;body=new Pe;meshes=[];pulse=0;scale=1;panes=[];frontZ=.5;halfW=.6;halfD=.5;constructor(t="#e8674a",e="cottage"){switch(e){case"mushroom":this.mushroom();break;case"cabin":this.cottage({walls:"logs",wall:"#a86f3e",roof:"#5f8f3e",gable:"#8b5a2b",chimney:"#9a9a9a"});break;case"gingerbread":this.cottage({walls:"plain",wall:"#b86a2c",roof:"#5a3217",gable:"#b86a2c",chimney:"#f2f2f2",icing:!0});break;case"igloo":this.igloo();break;case"pumpkin":this.pumpkin();break;case"tower":this.tower(t);break;default:this.cottage({walls:"plain",wall:"#fbecd0",roof:t,gable:"#fbecd0",chimney:"#c0714f"})}this.group.add(this.body),this.setNight(!1)}add(t,e,n,i,a,r={}){const o=r.side??hi,c=r.basic?new Ui({color:e,side:o}):new me({color:e,roughness:r.rough??.7,side:o}),l=new ee(t,c);return l.position.set(n,i,a),l.castShadow=r.shadow??!0,l.receiveShadow=!0,(r.parent??this.body).add(l),this.meshes.push(l),l}pane(t,e,n,i){const a=this.add(t,"#9fd8ff",e,n,i,{shadow:!1,rough:.2});return this.panes.push(a.material),a}door(t,e,n,i,a,r){this.add(new En(ws(n+.1,i+.06),12),a,0,e,t+.003,{shadow:!1}),this.add(new En(ws(n,i),12),"#2a1810",0,e,t+.006,{shadow:!1,basic:!0});const o=new Li(ws(n,i),{depth:.035,bevelEnabled:!1,curveSegments:10});o.translate(n/2,0,0);const c=new Pe;c.position.set(-n/2,e,t+.01),c.rotation.y=-1.95,this.body.add(c);const l=this.add(o,r,0,0,0,{parent:c});this.add(new ye(.022,10,8),"#f2c14e",n*.82,i*.5,.045,{parent:l,shadow:!1}),this.frontZ=t}cottage(t){if(this.add(new ln(1.1+.16,.1,.95+.14,2,.04),"#cfc5b6",0,.1/2,0,{rough:.9}),t.walls==="logs"){this.add(new cn(1.1-.1,.8,.95-.1),"#4d321c",0,.1+.8/2,0);const S=.085;for(let x=0;x<5;x++){const w=.1+S+x*.16;for(const E of[-.95/2+S,.95/2-S]){const C=new Oe(S,S,1.26,10);C.rotateZ(Math.PI/2),this.add(C,new At(t.wall).offsetHSL(0,0,(bi(x*7+E*10)-.5)*.08).getStyle(),0,w,E,{rough:.85})}for(const E of[-1.1/2+S,1.1/2-S]){const C=new Oe(S,S,1.1099999999999999,10);C.rotateX(Math.PI/2),this.add(C,new At(t.wall).offsetHSL(0,0,(bi(x*5+E*10)-.5)*.08).getStyle(),E,w+.08,0,{rough:.85})}}}else this.add(new ln(1.1,.8,.95,3,.06),t.wall,0,.1+.8/2,0,{rough:.8});const h=new ci;h.moveTo(-1.1/2,0),h.lineTo(1.1/2,0),h.lineTo(0,.62-.04),h.closePath();const f=new Li(h,{depth:.95-.02,bevelEnabled:!1});f.translate(0,0,-.9299999999999999/2),this.add(f,t.gable,0,.9-.01,0,{rough:.8});const u=1.1/2+.14,d=Math.atan2(.62,1.1/2),g=Math.hypot(u,.62*(u/(1.1/2)))+.02,_=.95+.26,m=new At(t.roof).offsetHSL(0,0,-.12).getStyle();for(const S of[-1,1]){const x=new Pe;if(x.position.set(0,.9+.62+.02,0),x.rotation.z=S*-d,this.body.add(x),this.add(new ln(g,.08,_,2,.03),t.roof,S*g/2,0,0,{parent:x,rough:.55}),t.icing){const w=new Oe(.035,.035,_+.02,8);w.rotateX(Math.PI/2),this.add(w,"#fff8f0",S*g,.02,0,{parent:x,rough:.4});const E=["#ff4d6d","#4cc9f0","#ffd166","#06d6a0"];for(let C=0;C<4;C++){const b=(bi(C*3+(S>0?1:0))-.5)*_*.7;this.add(new ye(.045,10,8),E[(C+(S>0?1:0))%4],S*g*(.25+C*.18),.06,b,{parent:x,rough:.3})}}else for(let w=1;w<=3;w++)this.add(new cn(.03,.02,_+.01),m,S*g*w/4,.045,0,{parent:x,shadow:!1})}this.add(new ln(.16,.42,.16,2,.02),t.chimney,.3,.9+.62*.55+.12,-.12),this.add(new ln(.2,.05,.2,2,.015),"#6d4535",.3,.9+.62*.55+.34,-.12);const p=t.icing?"#fff8f0":"#ffffff";this.door(.475,.1,.34,.54,t.icing?"#fff8f0":"#b98a5c",t.icing?"#7a3d12":"#9a5f33");const v=.9+.62*.36;this.add(new zn(.12,20),p,0,v,.475+.004,{shadow:!1}),this.pane(new zn(.09,20),0,v,.475+.008),this.add(new Ke(.18,.02),p,0,v,.475+.012,{shadow:!1}),this.add(new Ke(.02,.18),p,0,v,.475+.012,{shadow:!1});for(const S of[-.37,.37])if(this.add(new Ke(.2,.2),p,S,.1+.47,.475+.004,{shadow:!1}),this.pane(new Ke(.15,.15),S,.1+.47,.475+.008),t.walls==="logs")for(const x of[-1,1])this.add(new Ke(.07,.2),"#5f8f3e",S+x*.14,.1+.47,.475+.006,{shadow:!1});if(this.add(new ln(.46,.05,.2,2,.02),"#cfc5b6",0,.025,.475+.1,{rough:.9}),t.icing){this.add(new Oe(.03,.03,.5,8),"#ffffff",.34,.25,.475+.12,{rough:.4});for(let S=0;S<4;S++)this.add(new Ii(.032,.012,6,12),"#ff4d6d",.34,.08+S*.11,.475+.12,{rough:.4}).rotation.x=Math.PI/2}else this.add(new Us(.19,1),"#6cbf45",-1.1/2-.08,.15,.475-.05,{rough:.85}),this.add(new Us(.15,1),"#79c94f",1.1/2+.08,.12,.475-.02,{rough:.85});this.halfW=1.1/2+.14+.05,this.halfD=.95/2+.12}mushroom(){const t=[[0,0],[.46,0],[.49,.25],[.46,.62],[.4,.95],[0,.95]];this.add(new Ka(t.map(([r,o])=>new rt(r,o)),28),"#f3e5c8",0,0,0,{rough:.85});const e=.9,n=new ye(.74,30,14,0,Math.PI*2,0,Math.PI/2);n.scale(1,.62,1),this.add(n,"#e5383b",0,e,0,{rough:.5});const i=new zn(.73,30);i.rotateX(Math.PI/2),this.add(i,"#ead7b3",0,e,0,{rough:.9,shadow:!1});for(let r=0;r<9;r++){const o=bi(r+3)*Math.PI*2,c=.2+bi(r+11)*.65,l=.74*Math.sin(c*Math.PI*.5),h=e+.62*.74*Math.cos(c*Math.PI*.5)+.01,f=new ye(.07+bi(r+20)*.05,12,8);f.scale(1,1,.3),this.add(f,"#ffffff",Math.cos(o)*l,h,Math.sin(o)*l,{rough:.6,shadow:!1}).lookAt(Math.cos(o)*l*3,h+.9*(1-c),Math.sin(o)*l*3)}this.door(.47,.02,.3,.5,"#c9a06a","#8a5a33");const a=this.add(new zn(.08,16),"#c9a06a",-.29,.58,.39,{shadow:!1});a.rotation.y=-.65,this.pane(new zn(.058,16),-.292,.58,.394).rotation.y=-.65,this.add(new Us(.15,1),"#6cbf45",.5,.1,.35,{rough:.85}),this.halfW=.76,this.halfD=.72}igloo(){this.add(new ye(.72,30,14,0,Math.PI*2,0,Math.PI/2),"#eef7ff",0,0,0,{rough:.6});for(let e=1;e<=4;e++){const n=e*.14,i=Math.sqrt(.72*.72-n*n),a=new Ii(i+.004,.012,6,40);a.rotateX(Math.PI/2),this.add(a,"#c7dcee",0,n,0,{shadow:!1})}const t=new Oe(.3,.3,.46,22,1,!0,-Math.PI/2,Math.PI);t.rotateZ(Math.PI/2),t.rotateY(Math.PI/2),this.add(t,"#e6f2fd",0,0,.62,{rough:.6,side:$e}),this.add(new zn(.25,20,0,Math.PI),"#23364a",0,0,.845,{basic:!0,shadow:!1}),this.frontZ=.845,this.pane(new zn(.07,14),.3,.44,.56).lookAt(.7,.9,1.4),this.halfW=.74,this.halfD=.8}pumpkin(){const t=new ye(.6,36,18),e=t.attributes.position;for(let a=0;a<e.count;a++){const r=e.getX(a),o=e.getZ(a),c=1+Math.cos(Math.atan2(o,r)*10)*.06;e.setX(a,r*c*1.22),e.setZ(a,o*c*1.06),e.setY(a,e.getY(a)*.86)}t.computeVertexNormals(),this.add(t,"#f77f00",0,.5,0,{rough:.6});const n=new Oe(.05,.08,.22,8);n.rotateZ(.3),this.add(n,"#5a7d2a",.03,1.06,0,{rough:.8});const i=new ye(.12,10,6);i.scale(1,.2,.55),this.add(i,"#7cb342",-.13,1,.02,{rough:.7}).rotation.z=.4,this.door(.62,.02,.3,.44,"#c25e00","#8a4a1e");for(const a of[-1,1]){const r=new ci;r.moveTo(-.08,0),r.lineTo(.08,0),r.lineTo(0,.12),r.closePath(),this.pane(new En(r),a*.25,.66,.58).rotation.y=a*.35}this.halfW=.78,this.halfD=.7}tower(t){const e=new Oe(.46,.52,1.25,22,6),n=e.attributes.position,i=new Float32Array(n.count*3),a=new At;for(let c=0;c<n.count;c++)a.set("#b9b3c9").offsetHSL(0,0,(bi(c)-.5)*.1),i.set([a.r,a.g,a.b],c*3);e.setAttribute("color",new nn(i,3));const r=new ee(e,new me({vertexColors:!0,roughness:.9}));r.position.y=.625,r.castShadow=!0,r.receiveShadow=!0,this.body.add(r),this.meshes.push(r),this.add(new Oe(.56,.52,.1,22),"#a39cb6",0,1.25,0,{rough:.9}),this.add(new ii(.62,.78,22),t,0,1.69,0,{rough:.55}),this.add(new Oe(.012,.012,.4,6),"#6d4535",0,2.25,0);const o=new ci;o.moveTo(0,0),o.lineTo(.22,-.06),o.lineTo(0,-.13),o.closePath(),this.add(new En(o),"#ffd166",.01,2.44,0,{side:$e,shadow:!1}),this.door(.51,0,.32,.5,"#8f8aa3","#7a5433");for(const c of[.8,1.05])this.add(new En(ws(.13,.18),8),"#8f8aa3",0,c-.01,.485,{shadow:!1}),this.pane(new En(ws(.09,.14),8),0,c,.49);this.halfW=.64,this.halfD=.62}setNight(t){for(const e of this.panes)e.color.set(t?"#ffd27a":"#9fd8ff"),e.emissive.set(t?"#ffb347":"#bfe8ff"),e.emissiveIntensity=t?1.1:.3}setLayout(t){this.scale=t.mode==="portrait"?.8:.9,this.group.position.set(t.nest.x,0,t.nest.z),this.group.scale.setScalar(this.scale)}footprint(){const t=this.group.position,e=(this.halfW+.05)*this.scale,n=this.halfD*this.scale;return{x0:t.x-e,x1:t.x+e,z0:t.z-n,z1:t.z+Math.min(n,this.frontZ*this.scale)}}doorway(t){const e=this.group.position;return t.set(e.x,0,e.z+(this.frontZ+.05)*this.scale)}gulp(){this.pulse=Math.min(1,this.pulse+.25)}update(t){this.pulse>0&&(this.pulse=Math.max(0,this.pulse-t*3));const e=this.pulse*.03;this.body.scale.set(1+e,1-e,1+e)}dispose(){for(const t of this.meshes)t.geometry.dispose(),t.material.dispose()}}const Yc=1400;class qm{group=new Pe;parts=[];meshes;m=new ne;q=new Ge;camQ=new Ge;v=new P;s=new P;z=new P(0,0,1);tmpQ=new Ge;constructor(){const t=new Ke(1,1),e=(n,i)=>{const a=new Ui({map:n,transparent:!0,depthWrite:!1,blending:i,side:$e}),r=new Je(t,a,Yc);return r.frustumCulled=!1,r.count=0,r.renderOrder=10,r.setColorAt(0,new At(1,1,1)),this.group.add(r),r};this.meshes=[e(o0(),Os),e(null,li),e(ml("rgba(255,255,255,0.9)","rgba(255,255,255,0)"),li)]}setCamera(t){this.camQ.copy(t.quaternion)}sparkle(t,e,n,i,a=10,r=.6){const o=i instanceof At?i:new At(i);for(let c=0;c<a;c++){const l=Math.random()*Math.PI*2,h=r*(.5+Math.random());this.add({x:t,y:e,z:n,vx:Math.cos(l)*h,vy:1+Math.random()*1.5,vz:Math.sin(l)*h,life:0,max:.5+Math.random()*.4,size:.25+Math.random()*.25,color:o.clone().lerp(new At(1,1,1),.5),spin:0,rot:0,gravity:2.5,kind:0})}}puff(t,e,n,i,a=6,r=.3){const o=i instanceof At?i:new At(i);for(let c=0;c<a;c++){const l=Math.random()*Math.PI*2;this.add({x:t,y:e,z:n,vx:Math.cos(l)*.8,vy:.4+Math.random()*.5,vz:Math.sin(l)*.8,life:0,max:.35+Math.random()*.25,size:r*(.6+Math.random()*.6),color:o.clone(),spin:0,rot:0,gravity:0,kind:2})}}confetti(t,e,n,i=160,a=5){const r=["#ff5a7a","#ffd23f","#3ec9ff","#7cf07c","#b58cff","#ff9f43"];for(let o=0;o<i;o++){const c=Math.random()*Math.PI*2,l=a*(.3+Math.random()*.7);this.add({x:t+(Math.random()-.5),y:e,z:n+(Math.random()-.5),vx:Math.cos(c)*l,vy:5+Math.random()*6,vz:Math.sin(c)*l*.7,life:0,max:2.2+Math.random()*1.2,size:.16+Math.random()*.12,color:new At(r[o%r.length]),spin:(Math.random()-.5)*16,rot:Math.random()*6,gravity:7,kind:1})}}shards(t,e,n,i=14){for(let a=0;a<i;a++){const r=Math.random()*Math.PI*2;this.add({x:t,y:e,z:n,vx:Math.cos(r)*2,vy:2+Math.random()*2,vz:Math.sin(r)*2,life:0,max:.6+Math.random()*.3,size:.12+Math.random()*.12,color:new At("#dff6ff"),spin:(Math.random()-.5)*20,rot:0,gravity:9,kind:1})}}add(t){this.parts.length>=Yc&&this.parts.shift(),this.parts.push(t)}get busy(){return this.parts.length>0}update(t){const e=[0,0,0],n=[];for(const i of this.parts){if(i.life+=t,i.life>=i.max)continue;i.vy-=i.gravity*t,i.kind===1&&(i.vx*=1-t*.8,i.vz*=1-t*.8,i.vy<-2.2&&(i.vy=-2.2)),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.y<.02&&i.kind!==2&&(i.y=.02,i.vy=0,i.vx*=.5,i.vz*=.5),i.rot+=i.spin*t,n.push(i);const a=i.life/i.max,r=this.meshes[i.kind],o=e[i.kind]++;let c=i.size;i.kind===0?c*=Math.sin(Math.min(1,a*1.3)*Math.PI):i.kind===2?c*=.6+a*1.2:c*=a>.8?(1-a)/.2:1,this.v.set(i.x,i.y,i.z),this.q.copy(this.camQ),i.kind===1&&this.q.multiply(this.tmpQ.setFromAxisAngle(this.z,i.rot)),this.s.set(c,i.kind===1?c*.6:c,c),this.m.compose(this.v,this.q,this.s),r.setMatrixAt(o,this.m);const l=i.color;i.kind===2?r.setColorAt(o,this.tmpColor.copy(l).multiplyScalar(1-a*.5)):r.setColorAt(o,l)}this.parts=n,this.meshes.forEach((i,a)=>{i.count=e[a],i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0);const r=i.material;a===2&&(r.opacity=.75)})}tmpColor=new At;dispose(){for(const t of this.meshes){t.geometry.dispose();const e=t.material;e.map?.dispose(),e.dispose(),t.dispose()}}}function gl(s,t,e,n,i){for(const a of[0,-s,s])if(!(a!==0&&(a<0?t<s-n:t>n)))for(const r of[0,-s,s])r!==0&&(r<0?e<s-n:e>n)||i(t+a,e+r)}function Wr(s,t,e,n,i,a,r,o){for(let c=0;c<i;c++){const l=t.next()*e,h=t.next()*e,f=t.range(a,r),u=t.pick(n);gl(e,l,h,f,(d,g)=>{const _=s.createRadialGradient(d,g,0,d,g,f);_.addColorStop(0,mn(u,o)),_.addColorStop(1,mn(u,0)),s.fillStyle=_,s.fillRect(d-f,g-f,f*2,f*2)})}}function mn(s,t){const e=parseInt(s.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function Es(s,t,e,n,i,a,r,o=-Math.PI/2,c=1.1){s.lineCap="round";for(let l=0;l<i;l++){const h=t.next()*e,f=t.next()*e,u=o+(t.next()-.5)*c*2,d=t.range(a[0],a[1]),g=(t.next()-.5)*d*.6;s.strokeStyle=t.pick(n),s.globalAlpha=t.range(.55,.95),s.lineWidth=t.range(r[0],r[1]),gl(e,h,f,d+2,(_,m)=>{s.beginPath(),s.moveTo(_,m);const p=_+Math.cos(u)*d,v=m+Math.sin(u)*d;s.quadraticCurveTo((_+p)/2+g,(m+v)/2,p,v),s.stroke()})}s.globalAlpha=1}function ri(s,t,e=4,n=2,i="rgba(0,0,0,0.22)"){s.save(),s.shadowColor=i,s.shadowBlur=e,s.shadowOffsetY=n,t(),s.restore()}function Zc(s,t,e,n,i,a,r=5,o=0){ri(s,()=>{s.fillStyle=i;for(let c=0;c<r;c++){const l=o+c/r*Math.PI*2;s.beginPath(),s.ellipse(t+Math.cos(l)*n*.9,e+Math.sin(l)*n*.9,n*.75,n*.55,l,0,Math.PI*2),s.fill()}}),s.fillStyle=a,s.beginPath(),s.arc(t,e,n*.5,0,Math.PI*2),s.fill()}function $m(s,t,e,n,i,a){s.fillStyle=i;for(let r=0;r<3;r++){const o=a+r/3*Math.PI*2;s.beginPath(),s.arc(t+Math.cos(o)*n,e+Math.sin(o)*n,n,0,Math.PI*2),s.fill()}}function Xr(s,t,e,n,i,a){ri(s,()=>{s.fillStyle=i,s.beginPath(),s.ellipse(t,e,n,n*a.range(.6,.9),a.next()*Math.PI,0,Math.PI*2),s.fill()},3,2),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.ellipse(t-n*.3,e-n*.3,n*.35,n*.2,-.6,0,Math.PI*2),s.fill()}function Ym(s,t,e,n,i,a){s.save(),s.translate(t,e),s.rotate(a),ri(s,()=>{s.fillStyle=i,s.beginPath(),s.moveTo(-n/2,0),s.quadraticCurveTo(0,-n*.42,n/2,0),s.quadraticCurveTo(0,n*.42,-n/2,0),s.fill()},5,3),s.strokeStyle="rgba(0,0,0,0.18)",s.lineWidth=Math.max(1,n*.04),s.beginPath(),s.moveTo(-n/2,0),s.lineTo(n/2,0),s.stroke(),s.restore()}function qr(s,t,e,n,i){s.fillStyle=i,s.beginPath(),s.moveTo(t,e-n),s.quadraticCurveTo(t,e,t+n,e),s.quadraticCurveTo(t,e,t,e+n),s.quadraticCurveTo(t,e,t-n,e),s.quadraticCurveTo(t,e,t,e-n),s.fill()}function Zm(s,t,e,n,i){const a=s.createRadialGradient(t,e,0,t,e,n*4);a.addColorStop(0,mn(i,.9)),a.addColorStop(.25,mn(i,.35)),a.addColorStop(1,mn(i,0)),s.fillStyle=a,s.fillRect(t-n*4,e-n*4,n*8,n*8),s.fillStyle="#ffffff",s.beginPath(),s.arc(t,e,n*.6,0,Math.PI*2),s.fill()}function Ce(s,t,e,n,i){for(let a=0;a<e;a++){const r=t.next()*s,o=t.next()*s;gl(s,r,o,n,i)}}function p0(s,t=1024,e=7){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),a=new pl(e),r=s.ground,o=t/1024;switch(i.fillStyle=r.base,i.fillRect(0,0,t,t),Wr(i,a,t,r.tints,70,90*o,260*o,.45),Wr(i,a,t,r.tints,160,25*o,70*o,.35),r.kind){case"grass":{Es(i,a,t,r.detail,14e3,[7*o,15*o],[1.4*o,2.8*o]),Ce(t,a,70,20*o,(c,l)=>$m(i,c,l,a.range(4,6.5)*o,a.pick(["#6fb34a","#5ea43f","#7fc257"]),a.next()*6)),Es(i,a,t,r.detail,3e3,[6*o,12*o],[1.2*o,2.2*o]),Ce(t,a,34,18*o,(c,l)=>Zc(i,c,l,a.range(4.5,7)*o,a.pick(r.accents),"#ffd23f",5,a.next()*6)),Ce(t,a,14,16*o,(c,l)=>Xr(i,c,l,a.range(5,10)*o,a.pick(["#bfb6a8","#a89f90","#d2cabc"]),a));break}case"forest":{Es(i,a,t,r.detail,9e3,[5*o,11*o],[1.2*o,2.4*o],0,Math.PI),Ce(t,a,90,30*o,(c,l)=>Ym(i,c,l,a.range(18,34)*o,a.pick(r.accents),a.next()*6)),i.strokeStyle="#6b4a2b",i.lineWidth=1.2*o,Ce(t,a,260,14*o,(c,l)=>{const h=a.next()*6;i.beginPath(),i.moveTo(c,l),i.lineTo(c+Math.cos(h)*12*o,l+Math.sin(h)*12*o),i.stroke()}),Ce(t,a,12,16*o,(c,l)=>{const h=a.range(7,11)*o;ri(i,()=>{i.fillStyle="#d64933",i.beginPath(),i.arc(c,l,h,0,Math.PI*2),i.fill()}),i.fillStyle="#fff4e6";for(let f=0;f<4;f++)i.beginPath(),i.arc(c+a.range(-h*.5,h*.5),l+a.range(-h*.5,h*.5),h*.18,0,Math.PI*2),i.fill()}),Ce(t,a,18,14*o,(c,l)=>Xr(i,c,l,a.range(5,9)*o,a.pick(["#8b8f7a","#9aa08a"]),a));break}case"sand":{i.strokeStyle=mn("#fff6dc",.5),i.lineWidth=3*o;for(let c=0;c<28;c++){const l=a.next()*t,h=a.range(6,14)*o,f=a.next()*6;i.beginPath();for(let u=-10;u<=t+10;u+=8){const d=l+Math.sin(u/(60*o)+f)*h;u===-10?i.moveTo(u,d):i.lineTo(u,d)}i.stroke()}Ce(t,a,9e3,2,(c,l)=>{i.fillStyle=a.pick(r.detail),i.globalAlpha=a.range(.3,.8),i.fillRect(c,l,1.6*o,1.6*o)}),i.globalAlpha=1,Ce(t,a,16,20*o,(c,l)=>{const h=a.range(8,13)*o,f=a.next()*6;i.save(),i.translate(c,l),i.rotate(f),ri(i,()=>{i.fillStyle=a.pick(r.accents),i.beginPath(),i.moveTo(0,h*.6),i.arc(0,0,h,Math.PI*1.1,Math.PI*1.9),i.closePath(),i.fill()}),i.strokeStyle="rgba(160,110,80,0.4)",i.lineWidth=1.2*o;for(let u=0;u<5;u++){const d=Math.PI*(1.15+u*.17);i.beginPath(),i.moveTo(0,h*.55),i.lineTo(Math.cos(d)*h*.95,Math.sin(d)*h*.95),i.stroke()}i.restore()}),Ce(t,a,6,20*o,(c,l)=>{const h=a.range(10,15)*o;i.save(),i.translate(c,l),i.rotate(a.next()*6),ri(i,()=>{i.fillStyle="#ff8c69",i.beginPath();for(let f=0;f<10;f++){const u=f/10*Math.PI*2,d=f%2===0?h:h*.42;i.lineTo(Math.cos(u)*d,Math.sin(u)*d)}i.closePath(),i.fill()}),i.restore()});break}case"frosting":{i.strokeStyle=mn("#ffffff",.35),i.lineWidth=10*o,i.lineCap="round";for(let c=0;c<40;c++){const l=a.next()*t,h=a.next()*t,f=a.range(30,70)*o;i.beginPath(),i.arc(l,h,f,a.next()*6,a.next()*6+2.5),i.stroke()}Ce(t,a,700,8*o,(c,l)=>{i.save(),i.translate(c,l),i.rotate(a.next()*Math.PI),i.fillStyle=a.pick(r.accents);const h=a.range(7,11)*o,f=2.6*o;i.beginPath(),i.roundRect(-h/2,-f/2,h,f,f/2),i.fill(),i.restore()}),Ce(t,a,60,8*o,(c,l)=>{const h=a.range(3,5)*o;ri(i,()=>{i.fillStyle="#ffffff",i.beginPath(),i.arc(c,l,h,0,Math.PI*2),i.fill()},3,1)});break}case"night":{Es(i,a,t,r.detail,9e3,[6*o,13*o],[1.3*o,2.4*o]),Ce(t,a,50,16*o,(c,l)=>Zm(i,c,l,a.range(1.5,3)*o,a.pick(r.accents))),Ce(t,a,30,10*o,(c,l)=>qr(i,c,l,a.range(3,6)*o,mn("#fff7c2",.7))),Ce(t,a,10,14*o,(c,l)=>Xr(i,c,l,a.range(5,9)*o,"#46507a",a));break}case"snow":{Wr(i,a,t,["#c9dcef","#ffffff"],50,30*o,90*o,.5),Ce(t,a,160,8*o,(c,l)=>qr(i,c,l,a.range(2,4.5)*o,mn("#ffffff",.95))),Ce(t,a,10,12*o,(c,l)=>{i.fillStyle=mn("#9fbad3",.35);for(let h=0;h<4;h++)i.beginPath(),i.ellipse(c+h*14*o,l+h%2*9*o,3.5*o,5*o,.3,0,Math.PI*2),i.fill()});break}case"magic":{Es(i,a,t,r.detail,11e3,[6*o,13*o],[1.3*o,2.5*o]),Ce(t,a,40,18*o,(c,l)=>Zc(i,c,l,a.range(4,6)*o,a.pick(r.accents),"#ffffff",6,a.next()*6)),Ce(t,a,26,16*o,(c,l)=>{const h=a.range(5,9)*o;ri(i,()=>{i.fillStyle=a.pick(["#bdf4ff","#ffc6ff","#fff3b0"]),i.beginPath();for(let f=0;f<6;f++){const u=f/6*Math.PI*2;i.lineTo(c+Math.cos(u)*h,l+Math.sin(u)*h*1.3)}i.closePath(),i.fill()})}),Ce(t,a,60,10*o,(c,l)=>qr(i,c,l,a.range(2,5)*o,mn("#ffffff",.85)));break}}return n}const Jc=11,Kc=new Map;class Jm{group=new Pe;plane;mat;dapples=[];dappleMat;center=new rt;night=!1;dappleBase=.16;constructor(){this.mat=new me({roughness:1,metalness:0,envMapIntensity:.25}),this.plane=new ee(new Ke(160,160),this.mat),this.plane.rotation.x=-Math.PI/2,this.plane.receiveShadow=!0,this.group.add(this.plane),this.dappleMat=new Ui({map:ml("rgba(255,250,220,1)","rgba(255,250,220,0)",128),transparent:!0,opacity:.16,depthWrite:!1,blending:Os});for(let t=0;t<7;t++){const e=new ee(new Ke(1,1),this.dappleMat);e.rotation.x=-Math.PI/2,e.position.y=.01,e.userData={ph:Math.random()*10,r:3+Math.random()*4,sp:.05+Math.random()*.07,ox:(Math.random()-.5)*22,oz:(Math.random()-.5)*22},this.dapples.push(e),this.group.add(e)}}setTheme(t){let e=Kc.get(t.id);e||(e=new Fi(p0(t,1024,t.id.length*31+5)),e.colorSpace=we,e.wrapS=e.wrapT=Da,e.anisotropy=8,e.repeat.set(160/Jc,160/Jc),Kc.set(t.id,e)),this.mat.map=e,this.mat.needsUpdate=!0;const n=t.ground.kind==="night";this.dappleBase=n?.06:t.ground.kind==="snow"?.1:.16,this.applyNight()}setNight(t){this.night=t,this.applyNight()}applyNight(){this.mat.color.set(this.night?"#4b5572":"#ffffff"),this.dappleMat.opacity=this.night?0:this.dappleBase}setLayout(t){this.center.set((t.bounds.minX+t.bounds.maxX)/2,(t.bounds.minZ+t.bounds.maxZ)/2)}update(t,e){for(const n of this.dapples){const i=n.userData,a=e*i.sp+i.ph;n.position.x=this.center.x+i.ox+Math.sin(a)*2.5,n.position.z=this.center.y+i.oz+Math.cos(a*.8)*2;const r=i.r*(1+Math.sin(a*2.3)*.12);n.scale.set(r,r,1)}}dispose(){this.plane.geometry.dispose(),this.mat.dispose(),this.dappleMat.map?.dispose(),this.dappleMat.dispose();for(const t of this.dapples)t.geometry.dispose()}}const Qc={grass:{count:46,tex:"glow",colors:["#fffbe6","#fff4b8","#ffffff"],size:[.08,.16],fall:[-.06,.06],additive:!0,opacity:.9},forest:{count:26,tex:"leaf",colors:["#e0703a","#f2b84b","#c9502e","#a7c957","#d98c2b"],size:[.28,.42],fall:[-.45,-.25],additive:!1,opacity:1},sand:{count:34,tex:"sparkle",colors:["#ffffff","#fff6d8","#d6f6ff"],size:[.14,.26],fall:[-.02,.04],additive:!0,opacity:.85,blink:!0},frosting:{count:40,tex:"sprinkle",colors:["#ff5d8f","#ffd166","#06d6a0","#118ab2","#9b5de5","#ffffff"],size:[.16,.22],fall:[-.55,-.3],additive:!1,opacity:1},night:{count:44,tex:"glow",colors:["#fff7a8","#d9ff8a","#a8fff0"],size:[.14,.24],fall:[-.05,.05],additive:!0,opacity:1,blink:!0},snow:{count:70,tex:"flake",colors:["#ffffff","#f2f9ff"],size:[.1,.2],fall:[-.5,-.28],additive:!1,opacity:.95},magic:{count:46,tex:"sparkle",colors:["#fff3b0","#ffc6ff","#bdf4ff","#ffffff"],size:[.14,.28],fall:[.05,.18],additive:!0,opacity:.95,blink:!0}};function $r(s,t=64){const e=document.createElement("canvas");e.width=e.height=t,s(e.getContext("2d"),t);const n=new Fi(e);return n.colorSpace=we,n}const Km={glow:()=>ml("rgba(255,255,255,1)","rgba(255,255,255,0)",64),sparkle:()=>o0(64),leaf:()=>$r((s,t)=>{s.fillStyle="#ffffff",s.beginPath(),s.moveTo(t*.08,t*.5),s.quadraticCurveTo(t*.5,t*.02,t*.92,t*.5),s.quadraticCurveTo(t*.5,t*.98,t*.08,t*.5),s.fill(),s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=t*.04,s.beginPath(),s.moveTo(t*.1,t*.5),s.lineTo(t*.9,t*.5),s.stroke()}),sprinkle:()=>$r((s,t)=>{s.fillStyle="#ffffff",s.beginPath(),s.roundRect(t*.1,t*.36,t*.8,t*.28,t*.14),s.fill()}),flake:()=>$r((s,t)=>{const e=t/2,n=s.createRadialGradient(e,e,0,e,e,e);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.9)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.beginPath(),s.arc(e,e,e,0,Math.PI*2),s.fill()})};class Qm{group=new Pe;mesh=null;motes=[];style=Qc.grass;box={x0:-10,x1:10,z0:-10,z1:10};m=new ne;q=new Ge;qz=new Ge;v=new P;s=new P;zAxis=new P(0,0,1);tmpC=new At;e=new Mn;night=!1;baseOpacity=1;setNight(t){this.night=t;const e=this.mesh?.material;e&&(e.opacity=this.baseOpacity*(t?.6:1))}setTheme(t){this.dispose(),this.style=Qc[t.ground.kind];const e=this.style,n=new Ui({map:Km[e.tex](),transparent:!0,depthWrite:!1,opacity:e.opacity,side:$e,blending:e.additive?Os:li});this.baseOpacity=e.opacity,n.opacity=e.opacity*(this.night?.6:1),this.mesh=new Je(new Ke(1,1),n,e.count),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12,this.group.add(this.mesh),this.motes=[];for(let i=0;i<e.count;i++)this.motes.push(this.spawn(!0))}setLayout(t){const e=t.bounds;this.box={x0:e.minX-3,x1:e.maxX+3,z0:e.minZ-3,z1:e.maxZ+3}}spawn(t){const e=this.style,n=this.box,i=e.fall[1]<-.1,a=e.fall[0]>0;return{x:n.x0+Math.random()*(n.x1-n.x0),y:t?.3+Math.random()*5:i?5+Math.random()*1.5:a?.2:.3+Math.random()*5,z:n.z0+Math.random()*(n.z1-n.z0),vx:(Math.random()-.5)*.3,vy:e.fall[0]+Math.random()*(e.fall[1]-e.fall[0]),vz:(Math.random()-.5)*.2,phase:Math.random()*10,rot:Math.random()*Math.PI*2,spin:(Math.random()-.5)*3,size:e.size[0]+Math.random()*(e.size[1]-e.size[0]),rest:0,color:new At(e.colors[Math.floor(Math.random()*e.colors.length)])}}update(t,e,n){const i=this.mesh;if(!i)return;const a=this.style,r=this.box,o=Math.sin(e*.3)*.25;for(let c=0;c<this.motes.length;c++){let l=this.motes[c];l.phase+=t,l.rest>0?(l.rest-=t,l.rest<=0&&(l=this.motes[c]=this.spawn(!1))):(l.x+=(l.vx+o+Math.sin(l.phase*1.3)*.25)*t,l.z+=(l.vz+Math.cos(l.phase*.9)*.15)*t,l.y+=(l.vy+Math.sin(l.phase*2.1)*.08)*t,l.rot+=l.spin*t,l.y<.04&&(l.y=.04,l.rest=3+Math.random()*3),(l.y>7||l.x<r.x0-1||l.x>r.x1+1||l.z<r.z0-1||l.z>r.z1+1)&&(l=this.motes[c]=this.spawn(!1)));let h=a.blink?.55+.45*Math.sin(l.phase*3+c):1;l.rest>0&&(h*=Math.min(1,l.rest/1.5)),this.v.set(l.x,l.y,l.z),l.rest>0&&(a.tex==="leaf"||a.tex==="sprinkle")?this.q.setFromEuler(this.e.set(-Math.PI/2,0,l.rot)):this.q.copy(n.quaternion).multiply(this.qz.setFromAxisAngle(this.zAxis,l.rot));const f=l.size*(a.tex==="glow"||a.tex==="sparkle"?h:1);this.s.set(f,f,f),this.m.compose(this.v,this.q,this.s),i.setMatrixAt(c,this.m),i.setColorAt(c,this.tmpC.copy(l.color).multiplyScalar(a.additive?h:1))}i.count=this.motes.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}dispose(){if(!this.mesh)return;this.group.remove(this.mesh),this.mesh.geometry.dispose();const t=this.mesh.material;t.map?.dispose(),t.dispose(),this.mesh.dispose(),this.mesh=null}}const ba=typeof window<"u"&&(window.matchMedia?.("(pointer: coarse)").matches||(navigator.hardwareConcurrency??8)<=4);class jm{renderer;scene=new ol;camera=new ja(-1,1,1,-1,.1,200);board;queue;ants;nest;fx=new qm;ambient=new Qm;ground;layout;sim;level;sun;hemi;raycaster=new Tf;ndc=new rt;cb;width=1;height=1;insets={top:70,bottom:110,left:0,right:0};tmp=new P;levelGroup=new Pe;zoomPunch=0;theme=null;looks={house:"cottage",hat:"none"};night=!1;constructor(t,e){this.cb=e,this.renderer=new n0({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,ba?1.6:2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Is,this.renderer.toneMapping=Za,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=we,t.appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("gl");const n=new Ho(this.renderer);this.scene.environment=n.fromScene(new wm,.04).texture,this.scene.environmentIntensity=.42,n.dispose(),this.hemi=new Gh("#fffaf0","#7a8f6a",.9),this.scene.add(this.hemi),this.sun=new qh("#fff4e0",2.9),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(ba?1024:2048,ba?1024:2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.02,this.sun.shadow.radius=4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.ground=new Jm,this.scene.add(this.ground.group),this.scene.add(this.levelGroup),this.scene.add(this.fx.group),this.scene.add(this.ambient.group)}load(t,e,n){this.unload(),this.level=t,this.sim=e;const i=t.picture.palette,a=t.shape??i0(t.n);this.board=new Um(e,i,n.frame,a),this.board.cubes.castShadow=!ba,this.queue=new Gm(e,i,t.queueHint??"count"),this.nest=new d0(n.roof,this.looks.house),this.ants=new Xm(i,this.board,e,this.cb,a,this.looks.hat),this.levelGroup.add(this.board.group,this.queue.group,this.nest.group,this.ants.group),this.theme=n,this.ground.setTheme(n),this.ambient.setTheme(n),this.applyLook(),this.relayout(!0)}setNight(t){this.night=t,this.applyLook()}applyLook(){const t=this.theme;if(!t)return;const e=this.night,n=new At(t.bg);e&&n.lerp(Xo,.72),this.scene.background=n,this.hemi.color.set(e?"#9aa8e6":t.sky),this.hemi.groundColor.set(t.bounce),e&&this.hemi.groundColor.lerp(Xo,.6),this.hemi.intensity=e?.62:.9,this.sun.color.set(e?"#dbe3ff":"#fff4e0"),this.sun.intensity=e?1.75:2.9,this.renderer.toneMappingExposure=e?.95:1.05,this.scene.environmentIntensity=e?.3:.42,this.ground.setNight(e),this.ambient.setNight(e),this.board?.setNight(e),this.queue?.setNight(e),this.nest?.setNight(e)}setSim(t){this.sim=t,this.queue.setSim(t),this.ants.setSim(t)}unload(){this.board&&(this.levelGroup.clear(),this.board.dispose(),this.queue.dispose(),this.ants.dispose(),this.nest.dispose())}resize(t,e){this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.sim&&this.relayout(!1)}relayout(t){const e=Math.max(100,this.width-this.insets.left-this.insets.right),n=Math.max(100,this.height-this.insets.top-this.insets.bottom),i=Rm({aspect:e/n,w:this.sim.w,h:this.sim.h,slots:this.sim.slots.length,columns:this.sim.columns.length,rows:this.level.visibleRows??3}),a=t||!this.layout||i.mode!==this.layout.mode||i.slot.length!==this.layout.slot.length;if(this.layout=i,a){this.board.setLayout(i),this.queue.setLayout(i),this.nest.setLayout(i),this.ants.setLayout(i);const r=this.nest.doorway(this.tmp);this.ants.setHome(this.nest.footprint(),{x:r.x,z:r.z})}this.fitCamera(e,n),this.ground.setLayout(i),this.ambient.setLayout(i)}fitCamera(t,e){const n=this.layout,i=n.bounds,a=Math.cos(n.tilt),r=Math.sin(n.tilt),o=i.maxX-i.minX,c=(i.maxZ-i.minZ)*a+.8*r,l=Math.max(o/t,c/e)*1.02,h=this.width*l/2,f=this.height*l/2,u=(i.minX+i.maxX)/2,d=(i.minZ+i.maxZ)/2,g=60;this.camera.position.set(u,g*a,d+g*r),this.camera.up.set(0,1,0),this.camera.lookAt(u,0,d);const _=(this.insets.top-this.insets.bottom)/2*l,m=(this.insets.right-this.insets.left)/2*l;this.camera.left=-h+m,this.camera.right=h+m,this.camera.top=f+_,this.camera.bottom=-f+_,this.camera.near=1,this.camera.far=g*2+20,this.camera.zoom=1,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.fx.setCamera(this.camera);const p=Math.max(o,i.maxZ-i.minZ)*.75+2;this.sun.position.set(u-8,22,d-10),this.sun.target.position.set(u,0,d);const v=this.sun.shadow.camera;v.left=-p,v.right=p,v.top=p,v.bottom=-p,v.near=1,v.far=60,v.updateProjectionMatrix()}pickBox(t,e){return this.ndc.set(t/this.width*2-1,-(e/this.height)*2+1),this.queue.group.updateMatrixWorld(),this.raycaster.setFromCamera(this.ndc,this.camera),this.queue.pick(this.raycaster)}toScreen(t){const e=this.tmp.copy(t).project(this.camera);return{x:(e.x+1)/2*this.width,y:(1-e.y)/2*this.height}}apply(t,e=.4){let n=!1;const i=Math.max(1,this.sim.slots.length);for(const a of t)switch(a.t){case"ant":{const r=a.box>=0?this.queue.boxTop(a.box,this.tmp):this.tmp.set(0,0,0),o=a.slot/i*e;this.ants.spawn(r.clone(),a.cell,a.color,(a.due-this.sim.roundNo)*e,o);break}case"pickup":this.ants.pickup(a.cell);break;case"take":case"boxDone":case"reveal":case"thaw":n=!0;break}n?this.queue.syncFromSim(!0):this.queue.refreshLabels()}punch(){this.zoomPunch=1}update(t,e){this.board&&(this.board.update(t),this.queue.update(t,e),this.ants.update(t,e),this.nest.update(t),this.fx.update(t),this.ground.update(t,e),this.ambient.update(t,e,this.camera),this.zoomPunch>0&&(this.zoomPunch=Math.max(0,this.zoomPunch-t*2.5),this.camera.zoom=1+Math.sin(this.zoomPunch*Math.PI)*.015,this.camera.updateProjectionMatrix()),this.renderer.render(this.scene,this.camera))}isIdle(){return this.ants.count===0&&this.queue.isSettled()}dispose(){this.unload(),this.fx.dispose(),this.ambient.dispose(),this.ground.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}function t3(s,t,e,n){let i=0;for(const a of s.groupOf(t)){const r=s.boxColor(a),o=e[r]-(n?n[r]:0),c=s.boxCount(a);o>=c?i+=3e3+c:o>0?i+=1e3+o*8-c:i+=100-c-(n&&n[r]>0?50:0)}return i}function e3(s,t){const e=t??new Int32Array(s.s.colors);e.fill(0);for(const n of s.slots)n&&(e[s.boxColor(n.box)]+=n.left);return e}function Yr(s,t=6e4){const e=new Set,n=[],i=new Int32Array(s.s.colors),a=new Int32Array(s.s.colors);let r=0,o=!1;const c=f=>{if(f.settle(),f.status==="won")return!0;if(f.status==="stuck")return!1;const u=f.key();if(e.has(u))return!1;if(++r>t)return o=!0,!1;const d=f.legalMoves();f.exposedCounts(i),e3(f,a);const g=d.map(_=>[_,t3(f,_,i,a)]);g.sort((_,m)=>m[1]-_[1]);for(const[_]of g){const m=f.clone();if(m.take(_),n.push(_),c(m))return!0;if(n.pop(),o)return!1}return e.add(u),!1},l=s.clone();l.status==="stuck"&&l.unstick();const h=c(l);return{status:h?"solved":o?"unknown":"unsolvable",moves:h?n.slice():[],nodes:r}}const Se=s=>440*Math.pow(2,(s-69)/12),n3={antOut:.07,pick:.05,deliver:.06,tap:.03,pop:.04},Sa=[{bpm:92,root:60,chords:[[0,4,7],[7,11,14],[9,12,16],[5,9,12]],scale:[0,2,4,7,9],lead:"marimba",pad:"triangle",padCut:1400,density:.62,sparkle:.1,swing:.06},{bpm:80,root:57,chords:[[0,3,7],[-4,0,3],[3,7,10],[-2,2,5]],scale:[0,3,5,7,10],lead:"kalimba",pad:"sawtooth",padCut:900,density:.52,sparkle:.05,swing:.08},{bpm:84,root:62,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"flute",pad:"triangle",padCut:1200,density:.5,sparkle:.08,swing:.1},{bpm:104,root:65,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"pluck",pad:"square",padCut:1e3,density:.72,sparkle:.12,swing:.12},{bpm:72,root:64,chords:[[0,3,7,10],[-4,0,3,7],[3,7,10,14],[-2,2,5,9]],scale:[0,2,3,7,10],lead:"bell",pad:"sawtooth",padCut:700,density:.42,sparkle:.25,swing:0},{bpm:76,root:67,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"bell",pad:"triangle",padCut:1100,density:.5,sparkle:.3,swing:.04},{bpm:84,root:62,chords:[[0,3,7],[-2,2,5],[-5,-2,2],[-7,-3,0]],scale:[0,2,3,5,7,9],lead:"harp",pad:"sawtooth",padCut:1e3,density:.66,sparkle:.2,swing:.05}];class i3{s;constructor(t){this.s=t>>>0||1}next(){return this.s^=this.s<<13,this.s^=this.s>>>17,this.s^=this.s<<5,(this.s>>>0)/4294967296}}class s3{constructor(t,e,n){this.eng=t,this.th=e;const i=t.ctx;this.out=i.createGain(),this.out.gain.value=0,this.out.gain.linearRampToValueAtTime(1,i.currentTime+2.5),this.out.connect(t.musicBus),this.rng=new i3(n),this.nextBar=i.currentTime+.15,this.timer=window.setInterval(()=>this.schedule(),60),this.schedule()}eng;th;out;timer=0;nextBar;bar=0;lastNote=0;rng;stopped=!1;get barLen(){return 60/this.th.bpm*4}schedule(){const t=this.eng.ctx;if(!(!t||this.stopped))for(;this.nextBar<t.currentTime+.35;)this.playBar(this.nextBar,this.bar),this.nextBar+=this.barLen,this.bar++}playBar(t,e){const n=this.th,i=60/n.bpm,a=n.chords[e%n.chords.length],r=n.root;for(const l of a)this.eng.padVoice(this.out,Se(r+l-12),t,this.barLen,n.pad,n.padCut);this.eng.bassNote(this.out,Se(r+a[0]-24),t,i*1.6),(e%2===1||this.rng.next()<.5)&&this.eng.bassNote(this.out,Se(r+a[0]-24+(this.rng.next()<.3?7:0)),t+i*2,i*1.4);const o=e%4===3?n.density*.55:n.density,c=n.scale;for(let l=0;l<8;l++){if(this.rng.next()>o)continue;let h;if(l%4===0&&this.rng.next()<.7)h=a[Math.floor(this.rng.next()*a.length)];else{const g=Math.round((this.rng.next()-.5)*3);this.lastNote=Math.max(0,Math.min(c.length*2-1,this.lastNote+g)),h=c[this.lastNote%c.length]+12*Math.floor(this.lastNote/c.length)}const f=l%2===1?n.swing*i:0,u=t+l*(i/2)+f,d=r+h+(n.lead==="bell"?12:0);this.eng.leadNote(this.out,n.lead,Se(d),u,i*(.4+this.rng.next()*.5)),n.lead==="harp"&&this.rng.next()<.35&&this.eng.leadNote(this.out,"harp",Se(d+7),u+i/4,i*.4)}if(this.rng.next()<n.sparkle*3){const l=t+Math.floor(this.rng.next()*8)*(i/2);this.eng.sparkleNote(this.out,Se(r+24+c[Math.floor(this.rng.next()*c.length)]),l)}}stop(t){const e=this.eng.ctx;if(this.stopped=!0,clearInterval(this.timer),!e)return;const n=this.out.gain;n.cancelScheduledValues(e.currentTime),n.setValueAtTime(n.value,e.currentTime),n.linearRampToValueAtTime(0,e.currentTime+t),setTimeout(()=>this.out.disconnect(),(t+.5)*1e3)}}class a3{ctx=null;master=null;sfxBus=null;musicBus=null;duckGain=null;reverb=null;noiseBuf=null;last=new Map;sfxVol=.8;musicVol=.5;wantTheme=null;song=null;songTheme=-1;suspendedByHide=!1;get ready(){return!!this.ctx&&this.ctx.state==="running"}unlock(){try{this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume(),this.wantTheme!==null&&!this.song&&this.startMusic(this.wantTheme)}catch{}}init(){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t({latencyHint:"interactive"});this.ctx=e;const n=e.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=12,n.ratio.value=4,n.attack.value=.004,n.release.value=.25,n.connect(e.destination),this.master=e.createGain(),this.master.gain.value=.9,this.master.connect(n),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.duckGain=e.createGain(),this.duckGain.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicVol*.42,this.musicBus.connect(this.duckGain),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(2.4,2.6);const i=e.createGain();i.gain.value=.55,this.reverb.connect(i),i.connect(this.master);const a=e.sampleRate;this.noiseBuf=e.createBuffer(1,a,e.sampleRate);const r=this.noiseBuf.getChannelData(0);for(let o=0;o<a;o++)r[o]=Math.random()*2-1;document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.state==="running"&&(this.suspendedByHide=!0,this.ctx.suspend()):this.suspendedByHide&&(this.suspendedByHide=!1,this.ctx.resume()))})}impulse(t,e){const n=this.ctx,i=Math.floor(n.sampleRate*t),a=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){const o=a.getChannelData(r);for(let c=0;c<i;c++)o[c]=(Math.random()*2-1)*Math.pow(1-c/i,e)}return a}setSfxVolume(t){this.sfxVol=t,this.sfxBus&&this.ctx&&this.sfxBus.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setMusicVolume(t){this.musicVol=t,this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(t*.42,this.ctx.currentTime,.1)}duck(t,e){const n=this.ctx;if(!n||!this.duckGain)return;const i=this.duckGain.gain,a=n.currentTime;i.cancelScheduledValues(a),i.setValueAtTime(i.value,a),i.linearRampToValueAtTime(t,a+.15),i.setValueAtTime(t,a+e),i.linearRampToValueAtTime(1,a+e+1.2)}startMusic(t){this.wantTheme=t,!(!this.ctx||!this.musicBus)&&(this.song&&this.songTheme===t||(this.song?.stop(1.5),this.songTheme=t,this.song=new s3(this,Sa[(t%Sa.length+Sa.length)%Sa.length],1234+t*77+Math.floor(Math.random()*1e3))))}stopMusic(t=1){this.wantTheme=null,this.song?.stop(t),this.song=null,this.songTheme=-1}dest(t,e,n){const i=this.ctx;let a=n;if(t!==0&&i.createStereoPanner){const r=i.createStereoPanner();r.pan.value=t,r.connect(n),a=r}if(e>0&&this.reverb){const r=i.createGain();r.gain.value=e,r.connect(this.reverb);const o=i.createGain();return o.connect(a),o.connect(r),o}return a}tone(t,e,n,i={},a){const r=this.ctx,o=r.createOscillator();o.type=i.type??"sine",o.frequency.setValueAtTime(t,e),i.glide&&o.frequency.exponentialRampToValueAtTime(Math.max(20,i.glide),e+n*.8),i.detune&&(o.detune.value=i.detune);const c=r.createGain(),l=i.gain??.3,h=i.attack??.005,f=i.decay??n;c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(l,e+h),c.gain.exponentialRampToValueAtTime(1e-4,e+h+f);let u=o;if(i.filter){const d=r.createBiquadFilter();d.type="lowpass",d.frequency.value=i.filter,o.connect(d),u=d}u.connect(c),c.connect(this.dest(i.pan??0,i.wet??0,a??this.sfxBus)),o.start(e),o.stop(e+h+f+.05)}noise(t,e,n={}){const i=this.ctx,a=i.createBufferSource();a.buffer=this.noiseBuf,a.playbackRate.value=.8+Math.random()*.4;const r=i.createBiquadFilter();r.type=n.type??"bandpass",r.frequency.setValueAtTime(n.freq??2e3,t),n.freqTo&&r.frequency.exponentialRampToValueAtTime(n.freqTo,t+e),r.Q.value=n.q??1;const o=i.createGain(),c=n.attack??.003;o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(n.gain??.2,t+c),o.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(e,c+.01)),a.connect(r),r.connect(o),o.connect(this.dest(n.pan??0,n.wet??0,this.sfxBus)),a.start(t,Math.random()*.5),a.stop(t+e+.05)}fm(t,e,n,i,a,r,o,c,l=0){const h=this.ctx,f=h.createOscillator(),u=h.createOscillator(),d=h.createGain();f.frequency.value=t,u.frequency.value=t*i,d.gain.setValueAtTime(t*a,e),d.gain.exponentialRampToValueAtTime(Math.max(1,t*a*.02),e+n*.6),u.connect(d),d.connect(f.frequency);const g=h.createGain();g.gain.setValueAtTime(1e-4,e),g.gain.linearRampToValueAtTime(r,e+.004),g.gain.exponentialRampToValueAtTime(1e-4,e+n),f.connect(g),g.connect(this.dest(l,o,c??this.sfxBus)),f.start(e),u.start(e),f.stop(e+n+.05),u.stop(e+n+.05)}padVoice(t,e,n,i,a,r){const o=this.ctx,c=o.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(r*.6,n),c.frequency.linearRampToValueAtTime(r,n+i*.5),c.frequency.linearRampToValueAtTime(r*.7,n+i);const l=o.createGain(),h=a==="sawtooth"||a==="square"?.028:.05;l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(h,n+i*.3),l.gain.linearRampToValueAtTime(h*.7,n+i*.85),l.gain.linearRampToValueAtTime(1e-4,n+i+.25),c.connect(l),l.connect(this.dest(0,.5,t));for(const f of[-7,7]){const u=o.createOscillator();u.type=a,u.frequency.value=e,u.detune.value=f,u.connect(c),u.start(n),u.stop(n+i+.3)}}bassNote(t,e,n,i){this.tone(e,n,i,{type:"triangle",gain:.13,attack:.02,decay:i,filter:600},t)}leadNote(t,e,n,i,a){const r=(Math.random()-.5)*.5;switch(e){case"marimba":this.fm(n,i,.55,4,.9,.11,.25,t,r);break;case"kalimba":this.fm(n,i,.8,5.4,.6,.1,.3,t,r);break;case"bell":this.fm(n,i,1.6,3.5,1.2,.06,.5,t,r);break;case"harp":this.tone(n,i,.9,{type:"triangle",gain:.09,attack:.004,decay:.9,pan:r,wet:.4,filter:3e3},t);break;case"pluck":this.tone(n,i,.25,{type:"square",gain:.05,attack:.003,decay:.22,pan:r,wet:.2,filter:1800},t);break;case"flute":this.tone(n,i,a,{type:"sine",gain:.075,attack:.06,decay:a+.2,pan:r,wet:.45},t);break}}sparkleNote(t,e,n){this.fm(e,n,1.2,7.1,.4,.03,.8,t,(Math.random()-.5)*.8)}play(t,e={}){const n=this.ctx;if(!n||n.state!=="running"||this.sfxVol<=.001)return;const i=n.currentTime,a=n3[t];if(a){const r=this.last.get(t)??0;if(i-r<a)return}this.last.set(t,i);try{this.sfx(t,i+.005,e)}catch{}}sfx(t,e,n){const i=n.volume??1,a=n.pan??0,r=o=>1+(Math.random()-.5)*o;switch(t){case"tap":this.tone(760*r(.1),e,.07,{gain:.16*i,glide:520,pan:a}),this.noise(e,.025,{type:"highpass",freq:3e3,gain:.05*i});break;case"button":this.tone(1100,e,.05,{gain:.1*i,glide:800}),this.noise(e,.02,{type:"highpass",freq:4e3,gain:.04*i});break;case"place":this.tone(250*r(.08),e,.16,{type:"sine",gain:.32*i,glide:120,pan:a}),this.noise(e,.08,{type:"lowpass",freq:900,gain:.12*i}),this.tone(1320,e+.02,.1,{type:"sine",gain:.03*i,wet:.3});break;case"invalid":this.tone(210,e,.09,{type:"triangle",gain:.16*i,filter:700}),this.tone(170,e+.09,.12,{type:"triangle",gain:.16*i,filter:600});break;case"antOut":this.noise(e,.012,{type:"highpass",freq:5e3*r(.3),gain:.025*i,pan:(Math.random()-.5)*.6});break;case"pick":this.noise(e,.035,{type:"bandpass",freq:2200*r(.5),q:3,gain:.07*i,pan:(Math.random()-.5)*.8}),this.tone(1100*r(.3),e,.03,{gain:.025*i});break;case"deliver":this.tone(620*r(.25),e,.07,{gain:.045*i,glide:980,wet:.1});break;case"boxDone":{this.tone(300*r(.08),e,.13,{type:"sine",gain:.15*i,glide:560,attack:.006}),this.noise(e,.05,{type:"lowpass",freq:700,gain:.05*i});const o=[67,69,72,74][Math.floor(Math.random()*4)];this.tone(Se(o),e+.06,.55,{type:"triangle",gain:.075*i,attack:.006,decay:.5,filter:1500,wet:.25}),this.tone(Se(o+7),e+.12,.6,{type:"sine",gain:.05*i,attack:.008,decay:.55,wet:.3});break}case"reveal":[84,88,91,96].forEach((o,c)=>this.fm(Se(o),e+c*.045,.6,5.1,.5,.05*i,.6));break;case"thaw":for(let o=0;o<6;o++)this.noise(e+o*.025+Math.random()*.02,.03,{type:"highpass",freq:3500+Math.random()*3e3,gain:.08*i});[91,96,100].forEach((o,c)=>this.fm(Se(o),e+.12+c*.05,.5,6,.4,.035*i,.6));break;case"link":this.fm(1250,e,.25,3.47,1.4,.07*i,.2),this.fm(1580,e+.06,.3,3.47,1.4,.06*i,.2),this.tone(230,e,.14,{gain:.2*i,glide:120});break;case"win":{[72,76,79,84].forEach((l,h)=>this.fm(Se(l),e+h*.12,.7,4,.9,.12*i,.3));const c=e+.55;[60,64,67,72,76].forEach(l=>this.tone(Se(l),c,1.8,{type:"triangle",gain:.06*i,attack:.05,decay:1.8,wet:.5,filter:2500})),[88,91,96].forEach((l,h)=>this.fm(Se(l),c+.1+h*.09,1.2,3.5,.9,.05*i,.6));break}case"lose":[67,64,60,55].forEach((o,c)=>this.tone(Se(o),e+c*.22,.4,{type:"triangle",gain:.12*i,attack:.02,decay:.45,filter:1200,wet:.3}));break;case"star":{const o=[88,91,95][Math.max(0,Math.min(2,Math.round(n.pitch??0)))];this.fm(Se(o),e,1.1,3.5,1,.1*i,.5),this.tone(Se(o+12),e,.4,{gain:.03*i,wet:.5});break}case"coin":this.tone(Se(95),e,.08,{type:"square",gain:.045*i,filter:4e3}),this.tone(Se(100),e+.07,.3,{type:"square",gain:.045*i,filter:4e3,wet:.3});break;case"booster":this.noise(e,.35,{type:"bandpass",freq:500,freqTo:5e3,q:2,gain:.08*i,attack:.1}),[84,88,91,96,100].forEach((o,c)=>this.fm(Se(o),e+.1+c*.04,.5,5,.4,.04*i,.6));break;case"shuffle":for(let o=0;o<7;o++)this.noise(e+o*.045,.04,{type:"bandpass",freq:1800+Math.random()*1500,q:1.5,gain:.09*i});break;case"undo":this.noise(e,.3,{type:"bandpass",freq:4e3,freqTo:400,q:1.5,gain:.1*i,attack:.22}),this.tone(900,e+.05,.25,{gain:.05*i,glide:300});break;case"hint":this.fm(Se(81),e,1.4,3.5,1,.08*i,.6),this.fm(Se(88),e+.15,1.4,3.5,1,.06*i,.6);break;case"unlock":[79,84,88,91,96].forEach((o,c)=>this.fm(Se(o),e+c*.07,.8,4,.8,.08*i,.4));break;case"whoosh":this.noise(e,.25,{type:"bandpass",freq:300,freqTo:2400,q:.8,gain:.05*i,attack:.08});break;case"pop":this.tone(420*r(.2),e,.08,{gain:.14*i,glide:950});break}}}const Rt=new a3,Zr=.4;class r3{level;sim;view;hooks;acc=0;speed=1;paused=!1;playTime=0;history=[];boostersUsed=0;taps=0;finished=null;stuckPending=!1;winPending=!1;total;eaten=0;grabMode=!1;hintId=null;rng;lastDeliverSfx=0;constructor(t,e,n,i){this.view=t,this.level=e,this.hooks=i,this.sim=Xa.fromLevel(e),this.total=this.sim.left,this.rng=new pl(e.n*7919+13),t.load(e,this.sim,n)}get progress(){return this.total?this.eaten/this.total:0}get canUndo(){return this.history.length>0&&this.finished!=="won"}get status(){return this.finished??"playing"}onPick(){Rt.play("pick")}onDeliver(){this.eaten++,this.view.nest.gulp();const t=performance.now();t-this.lastDeliverSfx>70&&(this.lastDeliverSfx=t,Rt.play("deliver")),this.hooks.onProgress(this.eaten,this.total)}tap(t,e){if(this.paused||this.finished==="won")return;const n=this.view.pickBox(t,e);if(n===null)return;if(Rt.play("tap"),this.grabMode){this.doGrab(n);return}const i=this.sim.whyNot(n);if(i!=="ok"){this.view.queue.shake(n),Rt.play("invalid"),i!=="gone"&&this.hooks.onToast(i);return}this.pushHistory();const a=[];this.sim.take(n,a),this.taps++,this.afterAction(a);const r=this.sim.groupOf(n);Rt.play(r.length>1?"link":"place")}takeBox(t){if(this.paused||this.finished==="won"||!this.sim.canTake(t))return!1;this.pushHistory();const e=[];return this.sim.take(t,e),this.taps++,this.afterAction(e),Rt.play(this.sim.groupOf(t).length>1?"link":"place"),!0}autoStep(){if(this.finished==="won"||this.sim.status==="won")return"done";if(this.paused||!this.sim.isQuiet())return"wait";const t=this.sim.clone();t.unstick(),t.settle();const e=Yr(t,2e4);return e.status!=="solved"||!e.moves.length?e.status==="solved"?"done":"stuck":(this.finished==="stuck"&&(this.finished=null,this.sim.unstick()),this.takeBox(e.moves[0])?"moved":"wait")}hoverId=null;hover(t,e){const n=t<0||this.paused?null:this.view.pickBox(t,e);return n!==this.hoverId&&(this.hoverId=n,this.refreshHover()),n}refreshHover(){const t=this.hoverId;if(t===null||this.sim.boxHidden[t]){this.view.board.highlight(null);return}const e=this.sim.boxColor(t);this.view.board.highlight(this.sim.exposedCells().filter(n=>this.sim.cellColor(n)===e&&this.view.board.isPresent(n)))}pushHistory(){this.history.push(this.sim.clone()),this.history.length>60&&this.history.shift()}afterAction(t){this.setHint(null),this.view.apply(t);for(const e of t)if(e.t==="reveal")Rt.play("reveal"),this.sparkleBox(e.box,"#ffffff");else if(e.t==="thaw"){Rt.play("thaw");const n=this.view.queue.boxTop(e.box,new P);this.view.fx.shards(n.x,n.y,n.z)}this.finished==="stuck"&&(this.finished=null,this.sim.unstick()),this.stuckPending=!1,this.hooks.onChange(this)}sparkleBox(t,e){const n=this.view.queue.boxTop(t,new P);this.view.fx.sparkle(n.x,n.y+.2,n.z,e,12,1)}update(t,e){if(!this.paused&&this.sim.status==="playing"){this.playTime+=t,this.acc+=t*this.speed;let n=0;for(;this.acc>=Zr&&n++<8;){this.acc-=Zr;const i=[],a=this.sim.round(i);if(i.length&&this.handleRound(i),a===0){this.acc=0,this.sim.checkStuck()&&(this.stuckPending=!0);break}}}this.view.ants.speed=this.speed,this.view.update(this.paused?0:t,e),this.winPending&&this.view.isIdle()&&(this.winPending=!1,this.finished="won",this.hooks.onWin(this)),this.stuckPending&&this.view.isIdle()&&this.sim.status==="stuck"&&(this.stuckPending=!1,this.finished="stuck",this.view.queue.pulseSlots(),this.hooks.onStuck(this))}handleRound(t){this.view.apply(t,Zr),this.hoverId!==null&&this.refreshHover();let e=0;for(const n of t)if(n.t==="ant")e++;else if(n.t==="boxDone"){Rt.play("boxDone");const i=this.view.layout.slot[n.slot];this.view.fx.sparkle(i.x,.8,i.z,this.view.queue.boxColor(n.box),14,1.1),this.hooks.onChange(this)}else n.t==="won"&&(this.winPending=!0,this.hooks.onChange(this));e&&Rt.play("antOut")}canUse(t){if(this.finished==="won")return!1;switch(t){case"undo":return this.history.length>0;case"slot":return this.sim.slots.length<7;case"shuffle":return this.sim.queueSize()>1;case"grab":return this.sim.queueSize()>0&&this.sim.freeSlots()>0;case"hint":return this.sim.queueSize()>0}}use(t){if(!this.canUse(t))return!1;let e=!0;switch(t){case"undo":e=this.undo();break;case"slot":this.sim.addSlot(),this.view.relayout(!0),this.view.queue.syncFromSim(!1),this.afterAction([]);break;case"shuffle":e=this.smartShuffle();break;case"grab":return this.grabMode=!0,this.hooks.onToast("grab"),this.hooks.onChange(this),!0;case"hint":e=this.hint();break}return e&&(this.boostersUsed++,Rt.play(t==="undo"?"undo":t==="shuffle"?"shuffle":t==="hint"?"hint":"booster")),e}cancelGrab(){this.grabMode=!1,this.hooks.onChange(this)}doGrab(t){this.pushHistory();const e=[];if(!this.sim.grab(t,e)){this.history.pop(),this.view.queue.shake(t),Rt.play("invalid");return}this.grabMode=!1,this.boostersUsed++,Rt.play("booster"),this.sparkleBox(t,"#fff6a8"),this.afterAction(e)}undo(){const t=this.history.pop();return t?(this.sim=t,this.sim.flushPending(),this.view.ants.fadeAll(),this.rebindView(),this.finished=null,this.stuckPending=!1,this.winPending=!1,this.eaten=this.total-this.sim.left,this.hooks.onProgress(this.eaten,this.total),this.hooks.onChange(this),!0):!1}rebindView(){const t=this.view;t.setSim(this.sim),t.board.syncFrom(this.sim,!0),t.queue.syncFromSim(!0),t.relayout(!0),t.queue.syncFromSim(!1)}smartShuffle(){this.pushHistory();const t=this.sim.clone();t.unstick();let e=null,n=-1/0;for(let a=0;a<14;a++){const r=t.clone();r.shuffle(this.rng);const o=r.clone(),c=Yr(o,1500),l=(c.status==="solved"?1e3:c.status==="unknown"?200:0)+r.legalMoves().length*10+this.rng.next();if(l>n&&(n=l,e=r),c.status==="solved"&&a>=3)break}const i=[];return this.sim=e,this.rebindView(),this.afterAction(i),!0}hint(){const t=this.sim.clone();t.unstick(),t.settle();const e=Yr(t,4e3);return e.status==="solved"&&e.moves.length?(this.setHint(e.moves[0]),!0):(this.hooks.onToast("nohint"),!1)}setHint(t){this.hintId=t,this.view.queue.setHint(t)}get hinted(){return this.hintId}stars(t){return t?1:this.boostersUsed===0?3:2}celebrate(){const t=this.view.layout,e=t.picX0+t.picW/2,n=t.picZ0+t.picH/2;return this.view.fx.confetti(e,1.5,n,180,5),this.view.punch(),this.view.board.rebuild()}dispose(){this.view.unload()}}const Cn=[{id:"meadow",name:{en:"Sunny Meadow",ru:"Солнечный луг"},bg:"#7fbf5a",sky:"#fffbea",bounce:"#6f9a4d",frame:"#f1d39c",soil:"#b07a4b",roof:"#e8674a",ground:{kind:"grass",base:"#86c45b",tints:["#9ad26a","#77b64f","#a7da78","#6fae4a"],detail:["#5f9f3e","#a9dc7b","#8fca60","#4f8c34","#b8e58a"],accents:["#ffffff","#ffe14d","#ff8fb1","#b9a3ff"]},ui:{top:"#bfe9ff",bottom:"#9edc6f",accent:"#ff9f1c",path:"#f3dfb4"},music:0},{id:"forest",name:{en:"Whispering Forest",ru:"Шепчущий лес"},bg:"#3f6b3a",sky:"#f3ffe6",bounce:"#44613a",frame:"#d8b07a",soil:"#8a5a36",roof:"#c4563a",ground:{kind:"forest",base:"#4f7d3e",tints:["#5d8c47","#436d35","#6a8f45","#3b5f2f"],detail:["#7aa04f","#35572a","#8cae5b","#2f4d25"],accents:["#e0703a","#f2b84b","#c9502e","#a7c957"]},ui:{top:"#cdeccf",bottom:"#4f7d3e",accent:"#f2b84b",path:"#d9c29a"},music:1},{id:"sea",name:{en:"Seashell Beach",ru:"Пляж ракушек"},bg:"#f1dca8",sky:"#f4fbff",bounce:"#d9c28f",frame:"#ffffff",soil:"#c9a26b",roof:"#3a9fd8",ground:{kind:"sand",base:"#f1dba6",tints:["#f6e4b8","#e9cf94","#fbeac2","#e3c686"],detail:["#d8bb7e","#fff4d6","#cfae6d","#e7cf9b"],accents:["#ffb4a2","#ffffff","#9ad1d4","#ffd6a5"]},ui:{top:"#8fd8f4",bottom:"#f1dba6",accent:"#ff7b7b",path:"#fff1cf"},music:2},{id:"sweets",name:{en:"Candy Town",ru:"Конфетный город"},bg:"#f7c6dc",sky:"#fff5fb",bounce:"#e8a8c6",frame:"#fff0f6",soil:"#9c5b3b",roof:"#ff7eb6",ground:{kind:"frosting",base:"#f9cfe2",tints:["#fbdbe9","#f5bfd7","#fde6f0","#f2b3cf"],detail:["#ffffff","#f7a8c9"],accents:["#ff5d8f","#ffd166","#06d6a0","#118ab2","#9b5de5","#ffffff"]},ui:{top:"#ffd6e8",bottom:"#f9cfe2",accent:"#ff5d8f",path:"#fff7fb"},music:3},{id:"space",name:{en:"Starry Night",ru:"Звёздная ночь"},bg:"#1d2340",sky:"#c9d4ff",bounce:"#2b2f55",frame:"#c7b8ff",soil:"#5b4a7a",roof:"#7b6cf0",ground:{kind:"night",base:"#2a3358",tints:["#303b66","#232c4d","#36427a","#1f2745"],detail:["#3d4a82","#1b2240","#4a5a96"],accents:["#fff7c2","#a0f0ff","#ffc2f0"]},ui:{top:"#101631",bottom:"#2a3358",accent:"#ffd166",path:"#c7b8ff"},music:4},{id:"winter",name:{en:"Snowy Hills",ru:"Снежные холмы"},bg:"#e9f3fb",sky:"#ffffff",bounce:"#b9d3e8",frame:"#cfe3f3",soil:"#8c6a55",roof:"#d94f4f",ground:{kind:"snow",base:"#eef5fb",tints:["#f7fbff","#e2edf7","#ffffff","#d9e7f3"],detail:["#cfe0ee","#ffffff"],accents:["#ffffff","#bfe3ff","#ffd6e0"]},ui:{top:"#cfe9ff",bottom:"#eef5fb",accent:"#4ea8de",path:"#ffffff"},music:5},{id:"fantasy",name:{en:"Enchanted Glade",ru:"Волшебная поляна"},bg:"#6c4fa3",sky:"#fff0ff",bounce:"#6a4f95",frame:"#f3d6ff",soil:"#7b4e8e",roof:"#a55eea",ground:{kind:"magic",base:"#8a6cc2",tints:["#9b7fd0","#7c5db4","#a78ad8","#6f52a6"],detail:["#b49be0","#6a4c9c","#c7b2ec"],accents:["#fff3b0","#ffc6ff","#bdf4ff","#ffffff"]},ui:{top:"#d7c2ff",bottom:"#8a6cc2",accent:"#ffcf56",path:"#f3e6ff"},music:6}];function oi(s){return Cn[(s%Cn.length+Cn.length)%Cn.length]}function et(s,t={},...e){const n=document.createElement(s);if(t.class&&(n.className=t.class),t.html!==void 0&&(n.innerHTML=t.html),t.text!==void 0&&(n.textContent=t.text),t.style&&n.setAttribute("style",t.style),t.attrs)for(const[i,a]of Object.entries(t.attrs))n.setAttribute(i,a);if(t.on)for(const[i,a]of Object.entries(t.on))n.addEventListener(i,a);for(const i of e)i&&n.append(i);return n}function $a(s,t,e){const n=et("button",{class:"btn "+t,html:s});return n.addEventListener("click",i=>{i.stopPropagation(),Rt.unlock(),Rt.play("button"),e()}),n}const o3={"light-bulb":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M17.651 22.27h-3.89c-.79 0-1.44.64-1.43 1.43v3.89c0 .79.64 1.43 1.43 1.43h.248a1.94 1.94 0 0 0 3.384 0h.258c.79 0 1.43-.64 1.43-1.43V23.7c0-.79-.64-1.43-1.43-1.43"/><path fill="#fcd53f" d="M18.161 23.13c.24 0 .43-.18.45-.41c.07-.86.44-2.95 2.46-5.19a8.66 8.66 0 0 0 3.29-6.31c.02-.24.03-.4.03-.5v-.1c-.06-4.78-3.93-8.62-8.7-8.62a8.69 8.69 0 0 0-8.69 8.6s-.01.24.03.64c.16 2.54 1.4 4.79 3.29 6.28c2.02 2.25 2.42 4.34 2.49 5.2c.02.23.21.41.45.41z"/><path fill="#ffb02e" d="M15.701 10.7c1.62 0 2.94 1.31 2.96 2.93v.08c0 .03 0 .07-.01.13c-.05.84-.46 1.63-1.12 2.15l-.07.05l-.06.06c-1.1 1.22-1.33 4.32-1.37 6.02h-.65c-.05-1.7-.29-4.8-1.39-6.02l-.06-.06l-.07-.05a2.96 2.96 0 0 1-1.12-2.17c0-.04-.01-.07-.01-.09v-.09c.03-1.62 1.36-2.94 2.97-2.94m0-1a3.96 3.96 0 0 0-2.45 7.07c1.2 1.34 1.14 6.36 1.14 6.36h2.64s-.08-5.02 1.13-6.35c.86-.68 1.43-1.71 1.5-2.88c.01-.11.01-.18.01-.23v-.04a3.97 3.97 0 0 0-3.97-3.93"/><path fill="#d3d3d3" d="M19.167 25.053a.5.5 0 1 0-.172-.986l-6.74 1.18a.5.5 0 1 0 .172.986zm-.05 2.15a.5.5 0 0 0-.172-.985l-6.65 1.17a.5.5 0 1 0 .173.984z"/><path fill="#fff478" d="M13.791 5.44c-1.11 1.92-.55 4.32 1.25 5.35s4.15.32 5.26-1.6s.55-4.32-1.25-5.35s-4.15-.32-5.26 1.6"/></g></svg>',magnet:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M11 23v6.06c0 .52-.42.94-.94.94H3.94c-.52 0-.94-.42-.94-.94V23l4.028-2.152zm18 0v6.06c0 .52-.42.94-.94.94h-6.12c-.52 0-.94-.42-.94-.94V23l3.99-2.152z"/><path fill="#f8312f" d="M11 23v-7.94c0-2.75 2.2-5.04 4.95-5.06c2.78-.03 5.05 2.23 5.05 5v8h8v-8c0-7.18-5.82-13-13-13S3 7.82 3 15v8z"/></g></svg>',coin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14"/><path fill="#d3883e" d="M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16S9.925 5 16 5s11 4.925 11 11m-4.68 3.89a.54.54 0 0 0-.51-.37h.03v-7.76c.43-.28.51-.97-.01-1.28l-5.39-3.26a.73.73 0 0 0-.78 0l-5.4 3.26c-.52.31-.44 1-.02 1.28v7.77h-.11c-.24 0-.45.16-.51.39l-.35 1.25c-.1.34.16.68.51.68h12.45c.35-.01.61-.36.5-.71zM11.9 11.88v7.64h1.66v-7.64zm3.31 0v7.64h1.69v-7.64zm3.35 0v7.64h1.62v-7.64z" opacity=".53"/></g></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fcd53f" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.23 2.23 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.28 2.28 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0"/></svg>',"glowing-star":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#fcd53f"><path d="m28.979 17.003l-3.108.214c-.834.06-1.178 1.079-.542 1.608l2.388 1.955c.521.428 1.314.204 1.523-.428l.709-2.127c.219-.632-.292-1.273-.97-1.222M21.75 2.691l-.72 2.9c-.2.78.66 1.41 1.34.98l2.54-1.58c.55-.34.58-1.14.05-1.52l-1.78-1.29a.912.912 0 0 0-1.43.51M6.43 4.995l2.53 1.58c.68.43 1.54-.19 1.35-.98l-.72-2.9a.92.92 0 0 0-1.43-.52l-1.78 1.29c-.53.4-.5 1.19.05 1.53M4.185 20.713l2.29-1.92c.62-.52.29-1.53-.51-1.58l-2.98-.21a.92.92 0 0 0-.94 1.2l.68 2.09c.2.62.97.84 1.46.42m13.61 7.292l-1.12-2.77c-.3-.75-1.36-.75-1.66 0l-1.12 2.77c-.24.6.2 1.26.85 1.26h2.2a.92.92 0 0 0 .85-1.26"/><path d="m17.565 3.324l1.726 3.72c.326.694.967 1.18 1.717 1.29l4.056.624c1.835.278 2.575 2.53 1.293 3.859L23.268 16a2.28 2.28 0 0 0-.612 1.964l.71 4.374c.307 1.885-1.687 3.293-3.354 2.37l-3.405-1.894a2.25 2.25 0 0 0-2.21 0l-3.404 1.895c-1.668.922-3.661-.486-3.355-2.37l.71-4.375A2.28 2.28 0 0 0 7.736 16l-3.088-3.184c-1.293-1.34-.543-3.581 1.293-3.859l4.055-.625a2.3 2.3 0 0 0 1.717-1.29l1.727-3.719c.819-1.765 3.306-1.765 4.124 0"/></g></svg>',locked:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M16 2a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6m0 2.5A3.5 3.5 0 0 1 19.5 8v3a3.5 3.5 0 1 1-7 0V8A3.5 3.5 0 0 1 16 4.5"/><path fill="#f9c23c" d="M5 14a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path fill="#433b6b" d="M17.5 20.5a2.5 2.5 0 1 0-3 0V24a1.5 1.5 0 0 0 3 0z"/></g></svg>',fire:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6723" d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"/><path fill="#ffb02e" d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"/></g></svg>',trophy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="M10.52 7.521a3.435 3.435 0 0 0-4.213-2.369a2 2 0 0 0-.163.046c-2.493.831-2.691 4.214-.455 5.45l4.97 2.75a.866.866 0 1 0 .838-1.516l-4.97-2.75c-.982-.543-.823-1.956.16-2.288l.005-.002l.07-.018c.899-.25 1.834.27 2.093 1.175a.866.866 0 1 0 1.666-.478m11.939.478a1.7 1.7 0 0 1 2.118-1.168l.045.011l.007.002c.981.332 1.14 1.745.158 2.288l-4.97 2.75a.866.866 0 1 0 .84 1.516l4.97-2.75c2.235-1.236 2.037-4.619-.456-5.45a2 2 0 0 0-.164-.046a3.435 3.435 0 0 0-4.213 2.37a.866.866 0 1 0 1.666.477m-5.133 9.511v-4.22h-3.34v4.22c0 .74-.33 1.45-.9 1.92l-1.92 1.6h8.98l-1.92-1.6a2.51 2.51 0 0 1-.9-1.92"/><path fill="#ffb02e" d="M15.658 16.54a6.97 6.97 0 0 1-6.97-6.97V2.71c0-.39.32-.71.71-.71h12.53c.39 0 .71.32.71.71v6.86c0 3.85-3.12 6.97-6.98 6.97"/><path fill="#6d4534" d="M22.792 21.03H8.197c-.77 0-1.423.51-1.571 1.22l-1.614 7.09c-.073.33.19.64.549.64h19.878c.359 0 .622-.31.549-.64l-1.614-7.09c-.158-.71-.812-1.22-1.582-1.22"/><path fill="#ffb02e" d="M18.383 23.96h-5.766a.625.625 0 0 0-.613.64v1.81c0 .35.268.64.613.64h5.766c.335 0 .613-.28.613-.64V24.6c0-.35-.268-.64-.613-.64"/></g></svg>',crown:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" fill-rule="evenodd" d="M6.94 23.5a1.58 1.58 0 1 1-3.16 0a1.58 1.58 0 0 1 3.16 0m21.26 0a1.58 1.58 0 1 1-3.16 0a1.58 1.58 0 0 1 3.16 0" clip-rule="evenodd"/><path fill="#e19747" fill-rule="evenodd" d="m10.25 13.27l3.18 4.27l-6.59.76l2.12-4.89c-.51-.2-.87-.7-.87-1.28c0-.76.62-1.38 1.38-1.38a1.383 1.383 0 0 1 .78 2.52m12.76.14l2.12 4.89l-6.59-.76l3.18-4.27c-.36-.25-.6-.67-.6-1.14c0-.76.62-1.38 1.38-1.38s1.38.62 1.38 1.38c0 .58-.36 1.08-.87 1.28" clip-rule="evenodd"/><path fill="#ffb02e" d="M29.98 13.09c0-.76-.62-1.38-1.38-1.38s-1.38.62-1.38 1.38c0 .28.09.55.23.76c-.22 0-.44.05-.65.19l-3.93 2.54c-.52.33-1.2.21-1.57-.29l-4.37-5.93a.7.7 0 0 0-.11-.13a1.721 1.721 0 1 0-1.66 0c-.04.04-.08.08-.11.13l-4.37 5.93c-.36.5-1.05.62-1.57.29l-3.93-2.54c-.21-.14-.43-.19-.65-.19c.15-.22.23-.48.23-.76c0-.76-.62-1.38-1.38-1.38S2 12.33 2 13.09s.62 1.38 1.38 1.38c.05 0 .1 0 .14-.01c-.13.23-.18.5-.12.79L6 28.22c.19.93 1.01 1.6 1.96 1.6h16.06c.95 0 1.77-.67 1.96-1.6l2.6-12.97c.06-.29 0-.57-.12-.79c.05 0 .1.01.14.01c.76 0 1.38-.62 1.38-1.38"/><path fill="#00a6ed" d="M15.99 26a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/><path fill="#f8312f" fill-rule="evenodd" d="M11 23.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m13 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/></g></svg>',"gem-stone":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" d="M24.21 7.9H7.79a.54.54 0 0 0-.42.21L2.15 15a.52.52 0 0 0 0 .67L15.59 29.9a.52.52 0 0 0 .76 0l13.44-14.23a.52.52 0 0 0 0-.67l-5.16-6.89a.54.54 0 0 0-.42-.21"/><path fill="#1c5cd7" d="M15.594 29.902c.156.166.333.176.402.16l.017-.097V13.996H2.91c-.2.266-.632.837-.754.996c-.152.2-.254.418 0 .688z"/><path fill="#0084ce" d="M15.996 7.9H7.79a.54.54 0 0 0-.42.21l-4.837 6.385c-.202.259-.406.712.501.712c3.37.002 6.156.009 8.106.009c1.046-1.566 2.724-4.077 4.856-7.316"/><path fill="#aeddff" d="m16 30.059l-4.86-14.83h9.72z"/><path fill="#26eafc" d="M24.047 7.9h-8.031v7.298h13.883a.6.6 0 0 0-.1-.197c-.094-.134-4.983-6.642-5.1-6.806s-.328-.295-.652-.295"/><path fill="#b4f6fc" d="m16 7.9l2.43 3.67l2.43 3.66h-9.72l2.43-3.66z"/></g></svg>',"wrapped-gift":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fcd53f" d="M24.888 30H7.112A2.093 2.093 0 0 1 5 27.914V15l10.877-3.06L27 15v12.914C27 29.06 26.06 30 24.888 30"/><path fill="#f8312f" d="M27 5.847c0-3.384-4.045-5.106-6.466-2.763L16 7.479l-4.533-4.395C9.045.73 5 2.463 5 5.847C5 7.04 5.957 8 7.142 8L16 10.17L24.858 8A2.157 2.157 0 0 0 27 5.847"/><path fill="#ffb02e" d="M27.662 8H4.337C3.6 8 3 8.6 3 9.342v4.316C3 14.4 3.6 15 4.338 15h23.324C28.4 15 29 14.4 29 13.658V9.342C29 8.6 28.4 8 27.662 8"/><path fill="#ca0b4a" d="M16.005 3C14.345 3 13 4.37 13 6.06V30h6V6.06C19.01 4.37 17.666 3 16.005 3"/></g></svg>',ant:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M2.01 2.44a.5.5 0 0 1 .5-.5a6.603 6.603 0 0 1 6.61 6.61a.5.5 0 0 1-1 0a5.603 5.603 0 0 0-5.61-5.61a.5.5 0 0 1-.5-.5m14.82 13.517a.5.5 0 1 0-.58-.814l-.536.382a.503.503 0 0 0-.623.445l-5.455 3.9c-.988-.813-2.3-1.203-3.585-1.203c-1.426 0-2.886.481-3.895 1.49a.5.5 0 1 0 .708.706c.781-.781 1.966-1.196 3.187-1.196c1.222 0 2.41.414 3.196 1.197a.5.5 0 0 0 .644.053l4.505-3.22l-7.21 11.538a.5.5 0 1 0 .848.53l7.056-11.291V29.5a.5.5 0 1 0 1 0V16.873l.374-.598a.5.5 0 0 0 .043-.087z"/><path fill="#635994" d="M13.02 16.037c-1 .796-2.62.963-4.45.963c-3.04 0-5.5-.46-5.5-3.5S5.53 8 8.57 8a5.497 5.497 0 0 1 5.495 5.725a3.02 3.02 0 0 1 4.944 2.84c.634-1.017 1.694-1.625 3.461-1.625c4.16 0 7.53 3.37 7.53 7.53S26.63 30 22.47 30s-4.4-3.37-4.4-7.53c0-1.772.044-3.401.415-4.687a3.02 3.02 0 0 1-5.465-1.746"/><path fill="#533566" d="M6.56 10.52c.41 0 .75.33.75.75v.88a.749.749 0 1 1-1.5 0v-.88c.01-.41.34-.75.75-.75"/></g></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f9c23c" d="M10.52 7.052a1.17 1.17 0 0 1-.639-.636L8.93 4.257c-.178-.343-.69-.343-.858 0l-.952 2.16a1.28 1.28 0 0 1-.638.635l-1.214.524a.462.462 0 0 0 0 .838l1.214.524c.293.121.523.353.638.636l.952 2.169c.178.343.69.343.858 0l.952-2.17c.126-.282.356-.504.638-.635l1.214-.524a.462.462 0 0 0 0-.838zm15.054 6.503a3.73 3.73 0 0 1-1.922-1.977L20.79 4.81a1.432 1.432 0 0 0-2.58 0l-2.863 6.768a3.8 3.8 0 0 1-1.921 1.977l-3.622 1.64c-1.072.53-1.072 2.08 0 2.61l3.622 1.64a3.74 3.74 0 0 1 1.922 1.977l2.862 6.768a1.432 1.432 0 0 0 2.58 0l2.863-6.768a3.8 3.8 0 0 1 1.921-1.977l3.622-1.64c1.072-.53 1.072-2.08 0-2.61zM8.281 20.33c.16.392.454.696.822.872l1.55.725a.646.646 0 0 1 0 1.146l-1.55.725c-.368.176-.661.49-.822.872l-1.228 2.977a.61.61 0 0 1-1.106 0L4.72 24.67a1.66 1.66 0 0 0-.822-.872l-1.55-.725a.646.646 0 0 1 0-1.146l1.55-.725c.368-.176.661-.49.822-.872l1.228-2.977a.61.61 0 0 1 1.106 0z"/></svg>',snowflake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#00a6ed" d="m23.564 18.9l5.112-1.36c.553-.15 1.137.15 1.288.71c.15.56-.182 1.12-.735 1.27l-3.11.83l2.224 1.27c.483.28.655.89.373 1.37s-.896.65-1.379.37l-2.224-1.27l.836 3.09c.15.56-.171 1.12-.735 1.27a1.04 1.04 0 0 1-1.278-.73l-1.368-5.08l-2.315-1.33a5.07 5.07 0 0 1-2.747 1.59v2.63l3.744 3.72c.402.4.402 1.06 0 1.46c-.403.4-1.067.4-1.47 0l-2.274-2.26V29a1.006 1.006 0 0 1-2.012 0v-2.54l-2.274 2.26c-.403.4-1.067.4-1.47 0a1.034 1.034 0 0 1 0-1.46l3.744-3.72v-2.63c-1.097-.22-2.033-.8-2.747-1.59l-2.305 1.32l-1.368 5.08c-.151.55-.725.88-1.278.73a1.04 1.04 0 0 1-.735-1.27l.836-3.09l-2.224 1.28A1.02 1.02 0 0 1 4.294 23a.976.976 0 0 1 .363-1.35l2.223-1.28l-3.109-.83a1.04 1.04 0 0 1-.735-1.27c.151-.55.725-.88 1.278-.73l5.112 1.36l2.315-1.33a4.8 4.8 0 0 1-.282-1.57c0-.55.11-1.08.282-1.55l-2.315-1.33l-5.112 1.36a1.04 1.04 0 0 1-1.278-.73c-.15-.56.182-1.12.735-1.27l3.11-.83l-2.224-1.28A1.004 1.004 0 0 1 4.294 9c.272-.48.896-.64 1.369-.37l2.234 1.28l-.836-3.09c-.15-.55.182-1.11.735-1.26s1.117.18 1.268.73l1.368 5.08l2.305 1.32a5.07 5.07 0 0 1 2.747-1.59V8.47L11.74 4.75a1.034 1.034 0 0 1 0-1.46a1.05 1.05 0 0 1 1.469 0l2.274 2.26V3a1.006 1.006 0 0 1 2.012 0v2.55l2.274-2.26a1.05 1.05 0 0 1 1.47 0c.402.4.402 1.06 0 1.46l-3.744 3.72v2.63a5.05 5.05 0 0 1 2.737 1.58l2.314-1.33l1.369-5.08c.151-.55.724-.88 1.278-.73c.553.15.886.72.735 1.27l-.836 3.09l2.224-1.27a1.02 1.02 0 0 1 1.379.37a1 1 0 0 1-.363 1.36l-2.223 1.27l3.109.83c.553.15.885.72.734 1.27c-.15.55-.724.88-1.277.73l-5.112-1.36l-2.314 1.33c.17.49.281 1.02.281 1.57s-.11 1.07-.281 1.57zM19.509 16c0-1.657-1.352-3-3.019-3a3.01 3.01 0 0 0-3.019 3c0 1.657 1.352 3 3.019 3a3.01 3.01 0 0 0 3.019-3"/></svg>',link:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M21.148 21.148c-1.62-.43-2.847-.134-4.62.57l-3.41 3.41a4.52 4.52 0 0 1-6.4 0a4.52 4.52 0 0 1 0-6.4l3.41-3.41h.92l2.39-1.87c1.31-.14 2.68.27 3.68 1.28s1.42 2.37 1.28 3.68c.718.783 1.677.95 2.437.19l.872-2.06c-.27-1.54-1-3.02-2.19-4.21a7.86 7.86 0 0 0-4.21-2.19l-2.19-.674l-2.42 1.233c-.86.38-1.67.92-2.38 1.63l-4 4c-3.09 3.09-3.09 8.12 0 11.21s8.12 3.09 11.21 0l4-4a7.9 7.9 0 0 0 1.62-2.39"/><path fill="#bebebe" d="M27.528 4.318c-3.09-3.09-8.12-3.09-11.21 0l-4 4c-.7.71-1.24 1.52-1.62 2.38a8 8 0 0 1 4.62-.57l3.41-3.41a4.52 4.52 0 0 1 6.4 0c1.76 1.77 1.77 4.64 0 6.4l-3.41 3.41l-.59.59c-.76.76-1.73 1.17-2.72 1.28c-1.31.14-2.68-.27-3.68-1.28s-1.42-2.37-1.28-3.68c-1 .11-1.96.52-2.72 1.28l-.59.59c.27 1.54 1 3.02 2.19 4.21a7.86 7.86 0 0 0 4.21 2.19a7.99 7.99 0 0 0 7-2.2l4-4c3.08-3.07 3.08-8.1-.01-11.19"/></g></svg>',"red-question-mark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f8312f" d="M13.037 20.863c0 1.302 1.145 2.36 2.555 2.36s2.556-1.058 2.556-2.37V19.15c0-.111.073-.209.18-.242C21.676 17.85 24 14.919 24 11.562v-1.254c0-4.239-3.69-7.773-8.227-7.861c-2.28-.05-4.432.744-6.065 2.212c-1.622 1.469-2.523 3.447-2.523 5.552c0 1.311 1.155 2.369 2.566 2.369s2.555-1.058 2.555-2.36c0-.822.35-1.596.986-2.173a3.4 3.4 0 0 1 2.375-.872c1.78.04 3.223 1.45 3.223 3.143v1.244c0 1.468-1.124 2.731-2.683 2.996c-1.834.313-3.17 1.791-3.17 3.514zM15.5 30a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/></svg>',"speaker-high-volume":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#83cbff" d="M23.506 7.975a1 1 0 0 1-.506-.87a1 1 0 0 1 1.506-.86A11 11 0 0 1 30 15.768c0 4.07-2.21 7.622-5.495 9.524a1 1 0 0 1-1.506-.862c0-.359.194-.687.505-.867a9 9 0 0 0 1.86-1.43a8.94 8.94 0 0 0 2.635-6.46a9 9 0 0 0-4.493-7.698m.166 2.653a7 7 0 0 1 2.245 4.924a6.96 6.96 0 0 1-2.241 5.354c-.64.592-1.676.141-1.676-.73c0-.28.112-.55.317-.74a4.98 4.98 0 0 0 1.604-3.668c0-1.45-.618-2.754-1.604-3.667a.97.97 0 0 1-.317-.713v-.028c0-.869 1.035-1.322 1.672-.732"/><path fill="#b4acbc" d="M8.012 23h-4.21C2.808 23 2 22.153 2 21.108V10.892C2 9.847 2.807 9 3.803 9h4.21L19 13a3 3 0 1 1 0 6z"/><path fill="#cdc4d6" d="m16.61 26.83l-8.612-3.829V9.019l8.05-3.788c1.122-.528 2.988.024 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.527"/></g></svg>',"muted-speaker":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M7.803 23h4.21l1-7l-1-7h-4.21C6.807 9 6 9.847 6 10.892v10.216C6 22.153 6.807 23 7.803 23M26 16.023a3.055 3.055 0 1 1-6.11 0a3.055 3.055 0 0 1 6.11 0"/><path fill="#d3d3d3" d="m20.61 26.83l-8.612-3.829V9.02l8.05-3.787c1.122-.529 2.988.023 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.526"/><path fill="#f8312f" d="M24.97 26.652L5.15 6.832A1.19 1.19 0 0 1 6.83 5.15l19.82 19.82a1.19 1.19 0 0 1-1.682 1.682"/></g></svg>',"musical-note":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#402a32" d="M29.41 2.869c0-.53-.46-.93-.98-.86l-16.97 2.2c-.43.06-.76.43-.76.87v13.61c-.59-.2-1.23-.32-1.89-.32c-3.21 0-5.81 2.61-5.81 5.82s2.6 5.81 5.81 5.81s5.81-2.6 5.81-5.81c0-.12-.01-.25-.01-.37v-13.9c0-.39.29-.71.67-.76l9.35-1.21c.46-.06.87.3.87.76v6.53a5.808 5.808 0 0 0-7.71 5.49c0 3.21 2.6 5.81 5.81 5.81s5.81-2.6 5.81-5.81z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M12.847 3.834A2 2 0 0 1 14.84 2h2.32a2 2 0 0 1 1.993 1.834l.235 2.825a.5.5 0 0 0 .821.34l2.164-1.831a2 2 0 0 1 2.706.112l1.64 1.64a2 2 0 0 1 .113 2.707l-1.83 2.163a.5.5 0 0 0 .34.822l2.824.235A2 2 0 0 1 30 14.84v2.32a2 2 0 0 1-1.834 1.993l-2.825.235a.5.5 0 0 0-.34.821l1.831 2.164a2 2 0 0 1-.112 2.706l-1.64 1.64a2 2 0 0 1-2.707.113l-2.164-1.83a.5.5 0 0 0-.82.34l-.236 2.824A2 2 0 0 1 17.16 30h-2.32a2 2 0 0 1-1.993-1.834l-.235-2.825a.5.5 0 0 0-.822-.34l-2.163 1.831a2 2 0 0 1-2.706-.112l-1.64-1.64a2 2 0 0 1-.113-2.707l1.83-2.164a.5.5 0 0 0-.34-.82l-2.824-.236A2 2 0 0 1 2 17.16v-2.32a2 2 0 0 1 1.834-1.993l2.825-.235a.5.5 0 0 0 .34-.822L5.168 9.628A2 2 0 0 1 5.28 6.92l1.64-1.64a2 2 0 0 1 2.707-.113l2.163 1.83a.5.5 0 0 0 .822-.34zM21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"/><path fill="#998ea4" d="M24 16a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-3.5 0a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"/><path fill="#cdc4d6" d="M10.5 16a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"/></g></svg>',house:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" fill-rule="evenodd" d="M10 8.834V3.523A.53.53 0 0 0 9.467 3H6.543A.53.53 0 0 0 6 3.523v8.646l-1 .833v16h22v-15L16.07 3.772z" clip-rule="evenodd"/><path fill="#8c5543" d="M15.92 27.003H8.08c-.04 0-.08-.04-.08-.08v-10.53c0-.75.61-1.36 1.36-1.36h5.29c.75 0 1.36.61 1.36 1.36v10.53c-.01.04-.05.08-.09.08"/><path fill="#402a32" d="M14.5 21.002a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"/><path fill="#d3d3d3" d="M15.96 28.002H8c-.55 0-1-.45-1-1s.45-1 1-1h7.96c.55 0 1 .45 1 1s-.45 1-1 1"/><path fill="#00f397" d="M30 29.002H2v-.09c0-1.06.85-1.91 1.91-1.91h24.18c1.05 0 1.91.85 1.91 1.91z"/><path fill="#f8312f" d="m16.88 2.353l12.76 12.57c.48.47.48 1.23 0 1.69c-.47.47-1.24.47-1.72 0l-11.9-11.72l-11.94 11.76c-.47.47-1.24.47-1.72 0s-.48-1.23 0-1.7l12.8-12.6c.47-.47 1.24-.47 1.72 0"/><path fill="#83cbff" d="M23.14 21.002h-4.28c-.48 0-.86-.38-.86-.86v-4.28c0-.47.38-.86.86-.86h4.28c.47 0 .86.38.86.86v4.28c0 .48-.38.86-.86.86"/></g></svg>',"world-map":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fff" d="M2.52 6.84L8.97 5l.53 11.5l-.53 11.49l-6.12 1.99a.684.684 0 0 1-.85-.66V7.5c0-.31.22-.58.52-.66M15.98 7l6.99-2l.53 11.5l-.51 11.5l-7.01 2L15 18.5z"/><path fill="#e6e6e6" d="M15.98 7L8.97 5v22.99L15.98 30zm13.42-.16L22.97 5v23l6.09 1.98c.43.11.85-.22.85-.66V7.5c0-.31-.21-.58-.51-.66"/><path fill="#00a6ed" d="M3.95 8.34L8.97 7L10 16.5L8.97 26l-4.66 1.42a.687.687 0 0 1-.87-.66V9c0-.31.21-.58.51-.66M15.94 9l7.03-1.98L24 16.5l-1.03 9.49l-7.03 2L15 18.5z"/><path fill="#0074ba" d="M15.94 9L8.97 7.02v18.97l6.97 2zm12-.66l-4.97-1.32v19l4.61 1.42c.44.12.87-.21.87-.66V9c0-.31-.21-.58-.51-.66"/><path fill="#00d26a" d="m14.32 17.64l.53-.53c.072-.063.16-.101.242-.138l.028-.012h.43c.22 0 .4-.18.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4-.18-.4-.4v-1.19c0-.22.18-.4.4-.4h.19c.22 0 .4-.18.4-.4v-.19c0-.22.18-.4.4-.4h1.44c.1 0 .2-.03.27-.1l1.75-1.57c.08-.08.13-.19.13-.3v-.03c0-.55.45-1 1-1h.4c.33 0 .6.27.6.6c0 .22.18.4.4.4h1.19c.22 0 .4-.18.4-.4v-.19c0-.22.18-.4.4-.4h.04c.85 0 1.55.69 1.55 1.55v1.94c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.1c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v1.19c0 .22.18.4.4.4a.4.4 0 0 1 .37.55l-.88 2.19c-.06.15-.21.25-.37.25h-1.12c-.22 0-.4-.18-.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v.19c0 .22-.18.4-.4.4h-.19c-.22 0-.4-.18-.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v.5c0 .06-.01.12-.04.18l-.91 1.83c-.03.06-.04.12-.04.18v1.24c0 .43-.17.84-.47 1.14l-.41.41a.4.4 0 0 1-.29.12h-.43c-.22 0-.4-.18-.4-.4v-2.19c0-.22-.18-.4-.4-.4h-.43a.4.4 0 0 1-.29-.12l-.53-.53c-.22-.22-.35-.53-.35-.85s.12-.62.35-.85m-3.35 5.85c0 .28-.22.5-.5.5c-.27 0-.5-.22-.48-.47v-1.37a.3.3 0 0 0-.09-.22l-.38-.38c-.34-.34-.53-.81-.53-1.29v-1.12a.3.3 0 0 0-.09-.22l-1.25-1.25c-.134-.134-.351-.283-.586-.444c-.499-.343-1.074-.737-1.074-1.146v-2.36c0-.192.165-.367.286-.495c.124-.133.202-.215.004-.215c-.19 0-.37.08-.5.21l-1.26 1.26c-.2.19-.53.06-.53-.22v-.13c0-.08.03-.16.09-.22l.24-.24c.42-.42.66-1 .66-1.6v-.37c0-.38.31-.69.69-.69h.62c.38 0 .69.31.69.69c0 .17.14.31.31.31h.1c.46 0 .9-.19 1.21-.53l.62-.67c.48-.51 1.15-.8 1.85-.8h1.6c.72 0 1.3.58 1.3 1.3c0 .45-.18.88-.5 1.2l-.41.41a.3.3 0 0 0-.09.22v.37c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.19c0 .17-.14.31-.31.31h-.78c-.18 0-.32.14-.31.32l.02.35c.01.17-.13.32-.31.32c-.17 0-.31.14-.31.31v.19c0 .28.22.5.5.5s.5-.22.5-.5s.22-.5.5-.5s.5.22.5.5v.37c0 .08.03.16.09.22l.69.69c.12.12.12.32 0 .44l-.29.29c-.31.31-.74.49-1.18.49c-.17 0-.31.14-.31.31v.19c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.19c0-.17-.14-.31-.31-.31h-.38c-.17 0-.31.14-.31.31v.56c0 .08.03.16.09.22l1.82 1.82c.06.06.14.09.22.09h.44c.28 0 .56.06.81.19l1.17.58c.28.13.45.41.45.72c0 .3-.18.58-.45.72l-.61.31c-.58.29-.94.87-.94 1.52zm11-3.98c0 .31.11.61.3.85l.21.25c.3.37.79.54 1.25.43a.31.31 0 0 0 .24-.3v-.37c0-.16.12-.29.27-.31l.15-.02c.31-.03.58.21.58.52c0 .24.17.46.41.51l.22.05c.19.04.37-.1.37-.3v-.84c0-.55-.45-1-1-1h-.86c-.09 0-.17.04-.23.1l-.37.41a.31.31 0 0 1-.54-.21c0-.17-.14-.31-.31-.31h-.38c-.17.02-.31.16-.31.33zm1.5 4.49c-.28 0-.5-.22-.5-.5v-.67c0-.46.37-.84.83-.84h1.61c.31 0 .56.25.56.56v.95c0 .28-.22.5-.5.5z"/></g></svg>',"framed-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="m2 2l14 3l14-3v28l-14-3l-14 3z"/><path fill="#f3ad61" d="M30 2H2l14 14z"/><path fill="#b97028" d="M30 30H2l14-14z"/><path fill="#aeddff" d="M5 5h22v4.164L18 22L5 19v-3l1.5-3L5 10z"/><path fill="#fff" d="M24.667 10.114A3 3 0 0 1 27 9v6a3 3 0 0 1-2.009-.772a3 3 0 1 1-2.73-3.217a2 2 0 0 1 2.406-.897M5 16v-6c.981 0 1.853.471 2.4 1.2A1 1 0 0 1 9 12a2 2 0 1 1 0 4z"/><path fill="#14a085" d="M8 17.5L5 19v8h22V12c-1.5 0-2.5.5-4 2l-4.5 4.5c-1 1-1.5 1.5-2.5 1l-4-2c-1.6-.8-3.167-.5-4 0"/><path fill="#96c34a" d="M27 26.812V27H5v-.189c2.564-2.579 6.538-4.311 11-4.311s8.436 1.732 11 4.311"/><path fill="#ff822d" d="M19.056 10.185a.75.75 0 0 0 0-1.37a.75.75 0 0 0-.685-1.186a.75.75 0 0 0-1.186-.685a.75.75 0 0 0-1.37 0a.75.75 0 0 0-1.186.685a.75.75 0 0 0-.685 1.186a.75.75 0 0 0 0 1.37a.75.75 0 0 0 .685 1.186a.75.75 0 0 0 1.186.685a.75.75 0 0 0 1.37 0a.75.75 0 0 0 1.186-.685a.75.75 0 0 0 .685-1.186"/><path fill="#f9c23c" d="M18.705 9.5a2.205 2.205 0 1 1-4.41 0a2.205 2.205 0 0 1 4.41 0"/></g></svg>',package:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" d="M15.35 2.143c.32-.19.71-.19 1.02 0l10.92 6.64c.26.16.42.45.42.75L15.86 17.5L4 9.632v-.1c0-.3.16-.59.42-.74z"/><path fill="#ffce7c" d="m15.856 16.246l11.36-6.9a.328.328 0 0 1 .496.282v12.34a1.73 1.73 0 0 1-.83 1.48l-10.64 6.46a.3.3 0 0 1-.087.03a.3.3 0 0 1-.083.011a.9.9 0 0 1-.682-.083h.006L13 19z"/><path fill="#e19747" d="M15.86 29.622v-13.37l-11.35-6.9a.331.331 0 0 0-.51.28v12.34c0 .61.32 1.17.83 1.48l10.57 6.42a.3.3 0 0 0 .46-.25"/><path fill="#d3d3d3" d="M14.5 26.782v-1.96c0-.23-.12-.44-.31-.56l-2.8-1.69c-.19-.11-.43.02-.43.24v1.96c0 .23.12.44.31.56l2.8 1.69c.19.11.43-.02.43-.24"/><path fill="#8c5543" d="M11.76 16.553v-4.56l-3.28-.22v3.16c0 .1.05.2.14.26l2.68 1.63c.2.11.46-.03.46-.27"/><path fill="#a56953" d="m20.34 4.563l-11.86 7.21l3.28 2l11.86-7.2z"/></g></svg>',skull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M16.028 1c-8.282 0-15 6.715-15 14.995c0 2.773.762 4.743 2.286 6.033c1.262 1.067 2.919 1.554 4.714 1.785V28a3.005 3.005 0 0 0 3 2.999a3 3 0 0 0 2.5-1.345a3 3 0 0 0 2.5 1.345a3 3 0 0 0 2.5-1.345a3 3 0 0 0 2.5 1.345c1.652 0 3-1.347 3-3V23.81c1.794-.234 3.451-.72 4.713-1.787c1.524-1.288 2.287-3.256 2.287-6.029c0-8.28-6.718-14.995-15-14.995"/><path fill="#fff" d="M16.028 2c-7.73 0-14 6.268-14 13.995c0 5.178 2.82 6.568 7 6.918V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-5.087c4.18-.36 7-1.74 7-6.918c0-7.727-6.27-13.995-14-13.995"/><path fill="#402a32" d="M14 16.762C14 19.392 11.987 20 9.5 20S5 19.393 5 16.762S7.013 12 9.5 12s4.5 2.13 4.5 4.762m13 0C27 19.392 24.987 20 22.5 20s-4.5-.607-4.5-3.238S20.013 12 22.5 12s4.5 2.13 4.5 4.762M15.01 21.97h1.97c.5 0 .85-.49.68-.96l-.37-1.08c-.19-.56-.71-.93-1.3-.93s-1.12.38-1.31.93l-.36 1.08c-.16.47.19.96.69.96"/></g></svg>',"party-popper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="m5.05 29.9l1.472-.394l.394-.855l2.55.067l2.653-.71l.598-.926l2.482.102l2.591-.694c1.8-.48 2.41-2.74 1.09-4.06L9.56 13.1c-1.32-1.32-3.58-.72-4.06 1.09l-.773 2.887l.108 2.344l-.88.542l-.79 2.951l.132 2.248l-.863.484l-.344 1.284c-.49 1.8 1.16 3.45 2.96 2.97"/><path fill="#3f5fff" d="M7.8 25.053c-1.48-1.383-2.74-3.047-3.854-5.058l.778-2.904c1.278 2.798 2.716 4.889 4.441 6.5c1.663 1.553 3.633 2.697 6.07 3.583l-3.128.837c-1.602-.797-3.027-1.764-4.306-2.958m-3.514 2.833a12 12 0 0 1-1.855-2.234l.745-2.783c.703 1.49 1.49 2.634 2.476 3.557c.984.92 2.208 1.659 3.838 2.285l-2.989.8a12 12 0 0 1-2.215-1.625"/><path fill="#6d4534" d="M19.11 25.69c1.4-1.4-.34-5.4-3.88-8.94S7.7 11.47 6.3 12.87s.34 5.4 3.88 8.94s7.54 5.27 8.93 3.88"/><path fill="#f70a8d" d="M11.61 7.27a9.73 9.73 0 0 1 .72 7.49a9.7 9.7 0 0 1-3.81 5.2c-.52-.65-.97-1.3-1.35-1.93a7.4 7.4 0 0 0 2.91-3.96c.59-1.91.4-3.93-.54-5.69c-.31-.58-.09-1.29.48-1.59c.58-.31 1.29-.09 1.59.48m10.54 9.443a6.65 6.65 0 0 1 6.454-1.01a1.048 1.048 0 0 0 .732-1.965a8.74 8.74 0 0 0-8.486 1.33a1.048 1.048 0 1 0 1.3 1.645M6.01 9.69a1.16 1.16 0 1 0 0-2.32a1.16 1.16 0 0 0 0 2.32m20.12-1.16a1.16 1.16 0 1 1-2.32 0a1.16 1.16 0 0 1 2.32 0"/><path fill="#f9c23c" d="M12.49 3.96a.96.96 0 1 1-1.92 0a.96.96 0 0 1 1.92 0m12.99 20.45a.97.97 0 1 1-1.94 0a.97.97 0 0 1 1.94 0"/><path fill="#00a6ed" d="M21.63 4.02a.95.95 0 0 0-.58-.24a.99.99 0 0 0-1.04.92c-.07 1.1-.83 3.09-1.12 3.76q-.001.008-.005.015q-.005.008-.005.015q-.08.198-.172.39a2.8 2.8 0 0 0-1.358-.92l-.03-.01c-1.35-.45-2.82.28-3.27 1.64c-.22.66-.17 1.36.14 1.98s.84 1.08 1.5 1.3q.106.036.214.045q.76.206 1.465.015a6 6 0 0 1-.099.41c-.14.52.17 1.06.69 1.2a.98.98 0 0 0 1.2-.69a8.2 8.2 0 0 0 .293-2.482q.78-.98 1.247-2.148l.015-.036c.185-.448 1.158-2.802 1.255-4.374c.01-.31-.12-.6-.34-.79m-4.88 5.79c.275.092.558.246.678.876c-.492.457-.808.407-1.088.314a1 1 0 0 0-.102-.028a.6.6 0 0 1-.288-.292a.58.58 0 0 1-.03-.48c.11-.33.47-.51.8-.4zm1.52 8.35c3.41-.95 6.98-.52 10.06 1.22c.57.33.77 1.04.46 1.6c-.32.57-1.04.77-1.61.45a10.85 10.85 0 0 0-8.27-1c-2.31.64-4.29 2-5.72 3.88c-.61-.42-1.24-.9-1.86-1.44c1.73-2.27 4.14-3.93 6.94-4.71m-1.646-1.175a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0"/></g></svg>',"money-bag":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#f3c07b" d="M17.44 3.385c.33.38.89.45 1.3.16c.8-.57 1.84.29 1.43 1.17l-2.42 2.77h-3.87l-2.44-2.8c-.41-.89.63-1.75 1.43-1.18l.07.05c.41.29.97.21 1.29-.17l.87-1.04a.955.955 0 0 1 1.47 0zM4 21.225c0-6.54 5.3-11.84 11.84-11.84s11.84 5.3 11.83 11.84c0 4.83-3.92 8.75-8.75 8.75h-6.17c-4.83 0-8.75-3.92-8.75-8.75"/><path fill="#8c5543" d="M14.12 7.465h3.44c.61 0 1.11.5 1.11 1.11s-.5 1.11-1.11 1.11h-3.44c-.61 0-1.11-.5-1.11-1.11s.5-1.11 1.11-1.11m1.72 11.88h.07c1.5.04 2.7 1.26 2.7 2.76c0 1.28-.87 2.35-2.05 2.67v1.12c0 .4-.32.72-.72.72s-.72-.32-.72-.72v-1.12a2.77 2.77 0 0 1-2.05-2.67c0-.4.32-.72.72-.72s.72.32.72.72c0 .74.59 1.33 1.32 1.33s1.33-.6 1.33-1.33s-.6-1.33-1.33-1.33h-.07a2.765 2.765 0 0 1-2.69-2.76c0-1.28.87-2.35 2.05-2.67v-1.12c0-.4.32-.72.72-.72s.72.32.72.72v1.12c1.18.32 2.05 1.39 2.05 2.67c0 .4-.32.72-.72.72s-.72-.32-.72-.72c0-.73-.6-1.33-1.33-1.33s-1.33.6-1.33 1.33s.6 1.33 1.33 1.33"/></g></svg>',"check-mark-button":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00d26a" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path fill="#f4f4f4" d="M13.242 23c-.383 0-.766-.143-1.059-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.685 4.601L23.443 9.431a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.058a1.5 1.5 0 0 1-1.059.431"/></g></svg>',"cross-mark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f92f60" d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z"/></svg>',"artist-palette":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fbb8ab" d="M21.993 5.854c-6.707-3.42-14.656-2.1-18.279 3.883S2.398 23.68 8.87 27.517c3.18 1.886 8.312 3.811 10.398 1.244c2.044-2.516-.972-4.11-.268-5.502c1.133-2.24 6.2.699 9.515-2.922c3.734-4.082.009-11.151-6.522-14.483M24 19c-1.745 0-3-1.273-3-3s1.255-3 3-3s3 1.273 3 3s-1.255 3-3 3"/><path fill="#8d65c5" d="M14.25 11a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#f70a8d" d="M8.25 15a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#00d26a" d="M8.25 22a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#3f5fff" d="M13.75 26.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/></g></svg>',"four-leaf-clover":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#008463" d="M20.663 29.841a.875.875 0 0 0 .799-1.557zm.799-1.557c-2.708-1.39-3.811-3.233-4.277-5.269c-.49-2.143-.279-4.44-.279-6.89h-1.75c0 2.225-.226 4.881.323 7.28c.573 2.506 1.986 4.795 5.184 6.436z"/><path fill="#00d26a" d="M16.025 9.237c-.095-2.481-.513-5.067-2.134-6.425c-2.253-1.886-5.672.141-5.188 2.922c-3.14-.328-5.257 3.91-2.094 5.907c1.504.948 3.044 1.246 4.85 1.327c-1.827.102-3.381.424-4.9 1.382c-3.162 1.996-1.046 6.234 2.095 5.906c-.485 2.781 2.843 4.693 5.187 2.922c1.447-1.094 1.97-2.979 2.138-4.965c.188 1.986.733 3.871 2.18 4.965c2.344 1.771 5.671-.14 5.187-2.922c3.14.328 5.257-3.91 2.094-5.906c-1.506-.95-3.074-1.275-4.905-1.38c1.83-.077 3.385-.37 4.905-1.33c3.163-1.995 1.047-6.234-2.094-5.906c.484-2.78-2.935-4.808-5.187-2.922c-1.621 1.358-2.04 3.944-2.134 6.425"/></g></svg>',"shooting-star":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M26.33 30H5.67C3.64 30 2 28.36 2 26.33V5.67C2 3.64 3.64 2 5.67 2h13.646l5.651 2.038l3.044 2.17L30 13.63v12.7c0 2.03-1.64 3.67-3.67 3.67"/><path fill="#e1d8ec" d="M8.99 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M5.49 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m19.5 11.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-1 4a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M4.49 25a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m23.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"/><path fill="#a38439" d="M30 5.67C30 3.64 28.36 2 26.33 2h-7.04L9.25 11.6L19.64 24L30 13.64z"/><path fill="#fcd53f" d="m11.03 11.82l2.08 1.87c.39.35.92.48 1.43.35l2.72-.69c1.23-.31 2.3.89 1.84 2.08l-1.09 2.82c-.18.46-.13.98.14 1.4l1.61 2.55c.7 1.1-.19 2.52-1.48 2.38l-2.65-.28a1.56 1.56 0 0 0-1.39.59l-1.64 2.1c-.8 1.03-2.43.68-2.74-.59l-.72-2.93a1.58 1.58 0 0 0-.91-1.07l-2.79-1.17c-1.17-.49-1.3-2.1-.22-2.77l2.39-1.48c.44-.27.72-.75.74-1.27l.1-2.79c.03-1.32 1.59-1.98 2.58-1.1"/></g></svg>',"lady-beetle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#212121" d="M13.57 1.75a.5.5 0 0 0-.865.5l1.429 2.472a6.96 6.96 0 0 0-5.08 6.22L7.827 9.71c-.21-.21-.33-.49-.33-.79v-2a.749.749 0 1 0-1.5 0v2c0 .7.27 1.36.77 1.86l2.45 2.45q.035.031.07.059a6.96 6.96 0 0 0 5.71 5.031v11.1c.33.03.66.05 1 .05s.67-.02 1-.05v-11.1a6.96 6.96 0 0 0 5.706-5.014a1 1 0 0 0 .075-.066l2.45-2.45c.5-.5.77-1.16.77-1.86v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 .31-.12.59-.33.8l-1.226 1.226a6.96 6.96 0 0 0-5.245-6.277L19.1 2.25a.5.5 0 1 0-.865-.5l-1.59 2.75a7 7 0 0 0-1.474.019zm15.148 14.41c.15.15.34.22.53.22s.38-.08.53-.22c.29-.29.29-.77 0-1.06l-.67-.67c-.62-.62-1.44-.96-2.32-.96h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.75c.47 0 .92.18 1.26.52zm-1.47 13.28c-.41 0-.75-.34-.75-.75V26.6c0-.62-.24-1.2-.68-1.64l-2.56-2.56a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.72.72 1.12 1.68 1.12 2.7v2.09c0 .41-.34.75-.75.75m-21.75-.77c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.09c0-1.02.4-1.98 1.12-2.7l2.56-2.56c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.56 2.56a2.3 2.3 0 0 0-.68 1.64zm-2.22-12.53c-.15.15-.34.22-.53.22s-.38-.08-.53-.22a.754.754 0 0 1 0-1.06l.67-.67c.62-.62 1.44-.96 2.32-.96h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75c-.47 0-.92.18-1.26.52z"/><path fill="#f8312f" d="M15.5 9.46H9.318q-.001.007-.005.01q-.005.003-.005.01c-1 .755-1.868 1.674-2.563 2.717L8 15l-2.992 1.71a11 11 0 0 0-.12 1.64c0 5.8 4.44 10.56 10.11 11.07q.25.023.502.036zm1 19.996q.25-.013.497-.036c5.67-.51 10.11-5.27 10.11-11.07q-.001-.823-.116-1.613L24 15l1.253-2.8a11.1 11.1 0 0 0-2.565-2.72v-.02H16.5z"/><path fill="#212121" d="M19.898 14.92a3.9 3.9 0 1 1-7.8 0a3.9 3.9 0 0 1 7.8 0m-7.01 7.15a2.64 2.64 0 1 1-5.28 0a2.64 2.64 0 0 1 5.28 0m-6.07-9.88h-.07c-.9 1.34-1.51 2.89-1.75 4.55c.47.45 1.11.72 1.82.72c1.46 0 2.64-1.18 2.64-2.64s-1.18-2.63-2.64-2.63m18.42 0c.9 1.34 1.51 2.88 1.75 4.55c-.47.45-1.11.72-1.82.73c-1.46 0-2.64-1.18-2.64-2.64s1.18-2.64 2.64-2.64zm-3.49 12.52a2.64 2.64 0 1 0 0-5.28a2.64 2.64 0 0 0 0 5.28m-4.29 1.45a1.46 1.46 0 1 1-2.92 0a1.46 1.46 0 0 1 2.92 0"/></g></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff822d" d="M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.94 2.94 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.94 2.94 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.94 2.94 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.94 2.94 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.94 2.94 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.94 2.94 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.94 2.94 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.94 2.94 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.94 2.94 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.94 2.94 0 0 0 3.249-1.055"/><path fill="#fcd53f" d="M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83s-6.72-9.29-3.83-14.294s9.29-6.72 14.294-3.83s6.72 9.29 3.83 14.294"/></g></svg>',key:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f9c23c" d="M16.248 4.526c2.662-2.69 6.868-3.384 10.038-1.34c4.436 2.851 4.894 8.935 1.396 12.47c-2.31 2.34-5.724 2.927-8.59 1.765a751 751 0 0 0-3.592 3.604a.96.96 0 0 1-.92.22c-.41-.12-.84-.12-1.3.03c-.53.18-.89.81-.87 1.1c.04.63-.06.9-.34 1.19c-.282.296-.58.327-.893.36c-.365.038-.749.078-1.147.54c-.4.47-.47 1.18-.33 1.71c.08.31-.02.68-.3.96c-.5.5-1.86 1.84-1.86 1.84c-1.03 1.03-2.65 1.34-3.91.61a3.205 3.205 0 0 1-.7-5.05l11.69-11.68a10 10 0 0 1-.285-.785c-.848-2.659-.04-5.57 1.913-7.544m7.636 1.3a1.886 1.886 0 0 0 0 2.638a1.84 1.84 0 0 0 2.611 0a1.886 1.886 0 0 0 0-2.638a1.84 1.84 0 0 0-2.611 0"/></svg>',"hourglass-done":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#83cbff" d="M25 6.4V3.9l-9-.4l-9 .4v2.5c0 4 2.8 7.3 6.5 8.2c.3.1.5.4.5.7v1.2c0 .3-.2.6-.5.6C9.8 18 7 21.3 7 25.3V28l9 1l9-1v-2.7c0-4-2.8-7.3-6.5-8.2c-.3-.1-.5-.3-.5-.6v-1.2c0-.3.2-.6.5-.6c3.7-1 6.5-4.3 6.5-8.3"/><path fill="#9b9b9b" d="M7 4h18c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1m0 26h18c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1"/><path fill="#ffb02e" d="M17 19.4v-4.3c0-.7.5-1.2 1.1-1.4c1.7-.4 3.2-1.4 4.3-2.7c.7-.8.1-2-.9-2h-11c-1 0-1.6 1.2-.9 2c1.1 1.3 2.6 2.2 4.3 2.7c.7.2 1.1.7 1.1 1.4V19c0 .7-.3 1-.6 1.1c-3.7.7-6.4 3.5-6.4 6.8V28h16v-1.1c0-3.3-2.7-6.1-6.4-6.8c-.3 0-.6-.3-.6-.7"/><path fill="#fff" d="M21.5 5.8c0-.5.4-.9.9-.9c.6.1 1 .5.9.9c-.1 1.6-.5 3-1.3 4.2c-.8 1.4-2 2.4-3.4 2.9c-.5.2-1 0-1.2-.5s0-1 .5-1.2c2.4-.9 3.4-3.5 3.6-5.4m0 20.1c0 .5.4.9.9.9c.6 0 1-.5.9-.9c-.1-1.6-.5-3-1.3-4.2c-.8-1.4-2-2.4-3.4-2.9c-.5-.2-1 0-1.2.5s0 1 .5 1.2c2.4.9 3.4 3.5 3.6 5.4"/></g></svg>',construction:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M8 20H6v10h2zm18 0h-2v10h2z"/><path fill="#fcd53f" d="m3 12l4-4h5.52l1.98 1l2.96-1h5.06L24 9l3.48-1H28a1 1 0 0 1 1 1v2.52l-.5 2.98l.5 1.98V20a1 1 0 0 1-1 1h-3.52L22 20.5l-2.48.5h-5.04l-1.98-1l-2.98 1H4.49L4 18.5l-1-.974z"/><path fill="#533566" d="M7.475 8H4a1 1 0 0 0-1 1v3.475zm-3 13H4a1 1 0 0 1-1-1v-2.475L12.525 8h4.95zm10 0h-4.95l13-13h4.95zm10 0h-4.95L29 11.525v4.95z"/><path fill="#f8312f" d="M7.5 6A1.5 1.5 0 0 0 6 7.5V8h3v-.5A1.5 1.5 0 0 0 7.5 6m17 0A1.5 1.5 0 0 0 23 7.5V8h3v-.5A1.5 1.5 0 0 0 24.5 6"/></g></svg>',door:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="M8 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"/><path fill="#d3883e" d="M10 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm0 12a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/><path fill="#f9c23c" d="M23.25 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>',"shopping-bags":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="M28.61 30H16.43c-.78 0-1.42-.632-1.42-1.424V15.424c0-.782.63-1.424 1.42-1.424h12.18c.78 0 1.42.632 1.42 1.424v13.162A1.42 1.42 0 0 1 28.61 30"/><path fill="#ff6723" d="M17.563 16.031a.5.5 0 0 1 .5.5v2.684c0 2.035 1.94 3.8 4.484 3.8c2.553 0 4.484-1.764 4.484-3.8V16.53a.5.5 0 0 1 1 0v2.684c0 2.721-2.522 4.8-5.484 4.8c-2.95 0-5.485-2.078-5.485-4.8V16.53a.5.5 0 0 1 .5-.5"/><path fill="#00a6ed" d="M18.13 27.966H3.73c-.95 0-1.73-.77-1.73-1.73V9.726c0-.95.77-1.73 1.73-1.73h14.4c.95 0 1.73.77 1.73 1.73v16.52c0 .95-.77 1.72-1.73 1.72"/><path fill="#0074ba" d="M11.016 2C7.746 2 5 4.375 5 7.425V10.5a.5.5 0 0 0 1 0V7.425C6 5.031 8.189 3 11.016 3s5.015 2.031 5.015 4.425V10.5a.5.5 0 0 0 1 0V7.425c0-3.05-2.746-5.425-6.015-5.425M2 14.69h17.86v2.33H2zm0 4.49h17.86v2.33H2zm17.86 4.49H2V26h17.86z"/></g></svg>',"billed-cap":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><ellipse cx="22.42" cy="7.685" fill="#6683ff" rx="1.313" ry="1.68" transform="rotate(-57.793 22.42 7.685)"/><path fill="#8bafff" fill-rule="evenodd" d="M17 7h3a10 10 0 0 1 4 .832V21H9v-6a8 8 0 0 1 8-8" clip-rule="evenodd"/><path fill="#3c378c" d="M4.5 24c-2 0-3.5-2.5-2.5-3l3.527-1c2.324.5 6.573 1.5 4.973 1.5c-2 0-3.5 2.5-6 2.5"/><path fill="#6a8cff" d="M24 7.832V21h5a1 1 0 0 0 1-1v-3c0-4.1-2.468-7.625-6-9.168"/><path fill="#526ce3" d="m2 21l7-4c7.5 0 11.516 1.61 15 4c-2 2-4 4-7 4s-5.181-1.909-7-3c-2.5-1.5-6-1.5-8-1"/></g></svg>',"top-hat":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#321b41" d="M23.5 30h-15a6.499 6.499 0 1 1 0-12.997h15A6.499 6.499 0 1 1 23.5 30"/><path fill="#533566" d="M6.809 8.44c-.096-2.528 1.048-4.448 3.545-4.448h11.318c1.556 0 3.655 1.173 3.505 4.361c-.12 2.551-.572 10.688-.782 14.438H7.61c-.25-4.02-.73-12.45-.802-14.352"/><path fill="#f8312f" d="M21.717 21.742H10.282c-1.4 0-2.418-.94-2.856-2.27v3.598c0 1.495 1.343 2.677 2.85 2.677h11.446c1.508 0 2.851-1.192 2.851-2.677v-3.537c-.438 1.33-1.456 2.21-2.856 2.21"/></g></svg>',ribbon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M15.995 9.772L7.46 5.413C4.96 4.143 2 5.953 2 8.753v7.98c0 2.8 2.96 4.62 5.46 3.34l.69-.352l-2.84 7.363c-.23.587.38 1.153.95.895l2.26-1.014c.36-.159.78 0 .94.358l.99 2.256c.25.576 1.08.556 1.31-.03l4.23-10.978l4.23 10.978c.23.586 1.06.606 1.31.03l.99-2.256c.16-.358.58-.517.94-.358l2.26 1.014c.57.258 1.18-.308.95-.895l-2.842-7.37l.702.36c2.5 1.28 5.46-.54 5.46-3.34v-7.98c0-2.8-2.96-4.61-5.46-3.34z"/><path fill="#ca0b4a" d="M14.254 6h3.492C18.993 6 20 6.998 20 8.21v8.371l4.54-2.318c2.36-1.2 5.14.36 5.43 2.91c-.28 2.55-3.06 4.12-5.43 2.91l-4.725-2.412A2.25 2.25 0 0 1 17.745 19h-3.49c-.93 0-1.726-.548-2.072-1.333L7.45 20.083c-2.36 1.21-5.15-.36-5.43-2.91c.28-2.55 3.06-4.12 5.43-2.91L12 16.586V8.21C12 6.987 13.007 6 14.254 6"/></g></svg>',sunglasses:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#635994" d="M15.32 14.34c0 3.68-2.98 6.66-6.66 6.66S2 18.02 2 14.34s2.98-3.78 6.66-3.78c2.775 0 5.153.057 6.154 1.664a4.5 4.5 0 0 1 2.394-.003c1.001-1.604 3.378-1.66 6.152-1.66c3.68 0 6.66.1 6.66 3.78S27.04 21 23.36 21a6.66 6.66 0 0 1-6.653-6.954a2.6 2.6 0 0 0-1.394.003q.007.14.007.29"/><path fill="#321b41" d="M23.35 20.08c3.03 0 5.49-2.46 5.49-5.49s-2.46-3.11-5.49-3.11s-5.49.08-5.49 3.11s2.46 5.49 5.49 5.49m-14.69 0c3.03 0 5.49-2.46 5.49-5.49s-2.46-3.043-5.49-3.043s-5.49.013-5.49 3.043s2.46 5.49 5.49 5.49"/><path fill="#d3d3d3" d="M12.4 15.6c.69-.22 1.04-1.1.77-1.95c-.27-.86-1.05-1.37-1.75-1.16c-.69.22-1.04 1.09-.77 1.95s1.05 1.37 1.75 1.16m14.77 0c.69-.22 1.04-1.1.77-1.95c-.27-.86-1.06-1.37-1.75-1.15s-1.04 1.09-.77 1.95s1.05 1.37 1.75 1.15"/></g></svg>',"santa-claus":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M21.2 2H13C9.13 2 6 5.13 6 9h16.96v4.14c.16-.03.33-.05.51-.05c1.56 0 2.82 1.26 2.82 2.82c0 1.12-.65 2.08-1.59 2.54L26.2 23h2V9c0-3.87-3.14-7-7-7"/><path fill="#fdbb11" d="M9 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0m18 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/><path fill="#ffc83d" d="m6.63 22.746l-.61-9.759A8.53 8.53 0 0 1 7.5 7.545l14.81-.236a8.44 8.44 0 0 1 1.669 5.678l-.679 9.759C23.01 25.819 20.635 28 17.74 28h-5.55c-2.895 0-5.271-2.191-5.56-5.254"/><path fill="#e6e6e6" d="M8.192 12.53c.19.24.47.37.76.37c.2 0 .4-.06.56-.19l.005-.003c.077-.054.933-.652 2.186-.497a.945.945 0 1 0 .22-1.88c-2.07-.25-3.5.83-3.56.88a.95.95 0 0 0-.17 1.32m12.03.19c.17.13.37.19.57.19c.28 0 .56-.13.75-.36a.95.95 0 0 0-.17-1.33c-.06-.05-1.49-1.13-3.56-.88a.945.945 0 1 0 .22 1.88c1.27-.16 2.14.46 2.19.5"/><path fill="#fff" d="M8.013 15.38a2.416 2.416 0 0 1 2.34-1.82c1.17 0 2.15.84 2.36 1.94c.05.25-.14.47-.39.47h-3.85c-.3 0-.53-.29-.46-.59m13.557 0a2.416 2.416 0 0 0-2.34-1.82c-1.17 0-2.15.84-2.36 1.94c-.05.25.14.47.39.47h3.85c.3 0 .53-.29.46-.59"/><path fill="#7d4533" d="M9.163 15.56c0-.85.69-1.54 1.54-1.54c.86 0 1.55.7 1.55 1.54c0 .14-.02.28-.06.41h-2.97c-.04-.13-.06-.27-.06-.41m11.247 0c0-.85-.69-1.54-1.54-1.54s-1.54.7-1.55 1.54c0 .14.02.28.06.41h2.97c.04-.13.06-.27.06-.41"/><path fill="#000" d="M10.713 14.68c.49 0 .88.39.88.88c0 .15-.04.28-.11.41h-1.55a.9.9 0 0 1-.1-.41c0-.49.39-.88.88-.88m8.157 0c-.49 0-.88.39-.88.88c0 .15.04.28.1.41h1.56c.06-.12.1-.26.1-.41c0-.49-.39-.88-.88-.88"/><path fill="#fff" d="M10.453 14.96a.27.27 0 1 1-.54 0a.27.27 0 0 1 .54 0m8.207 0a.27.27 0 1 1-.54 0a.27.27 0 0 1 .54 0"/><path fill="#d3d3d3" d="M24.438 23.69c-.162-1.1-.273-2.22-.333-3.33V8L22.59 9l-.1 10.82c-.01.67-.344 1.3-.888 1.69c-.888.62-2.246.47-2.952-.35a1.86 1.86 0 0 0-1.413-.64h-4.575c-.545 0-1.06.23-1.413.64a2.12 2.12 0 0 1-2.815.35a2.07 2.07 0 0 1-.888-1.69L7.437 9H5.922v10.56c-.05 1.38-.172 2.76-.363 4.13a5.854 5.854 0 0 0 4.005 6.41c1.554.5 3.41.89 5.409.9h.06c1.998-.01 3.854-.4 5.408-.9a5.85 5.85 0 0 0 3.996-6.41"/><path fill="#990839" d="M12 20.03v.07c0 1.71 1.39 3.1 3.1 3.1s3.1-1.39 3.1-3.1v-.07z"/><path fill="#e6e6e6" d="M21.702 20.91a1.056 1.056 0 0 0-1.441 0a.59.59 0 0 1-.767.02l-.828-.691A3.22 3.22 0 0 0 16.6 19.5h-3.2c-.757 0-1.493.262-2.065.739l-.829.69a.59.59 0 0 1-.766-.02a1.056 1.056 0 0 0-1.442 0a.935.935 0 0 0 0 1.372a2.68 2.68 0 0 0 1.84.719a2.64 2.64 0 0 0 1.718-.622l.828-.69a1.1 1.1 0 0 1 .705-.253H16.6c.265 0 .51.087.705.253l.828.69c.49.408 1.104.622 1.718.622a2.68 2.68 0 0 0 1.84-.72a.927.927 0 0 0 .01-1.37"/><path fill="#ed9200" d="m14.383 15.474l-.844 2.852c-.171.582.246 1.174.835 1.174h1.252c.589 0 1.006-.592.835-1.174l-.844-2.852a.638.638 0 0 0-1.234 0"/><path fill="#e6e6e6" d="M20.88 5.8c.38-.25.84-.39 1.34-.36c1.11.06 2.01.95 2.12 2.05c.08 1.29-.94 2.37-2.21 2.37c-.46 0-.88-.13-1.23-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-.46 0-.88-.13-1.23-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-.46 0-.88-.13-1.23-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-.46 0-.88-.14-1.22-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-.46 0-.88-.14-1.22-.37a.68.68 0 0 0-.75 0c-.35.23-.78.37-1.23.37c-1.28 0-2.3-1.08-2.21-2.37c.08-1.1.98-1.99 2.09-2.05c.49-.03.95.11 1.33.36c.23.15.53.16.76 0c.35-.23.78-.37 1.23-.37s.87.14 1.22.37c.23.15.53.15.75 0c.35-.23.78-.37 1.23-.37s.87.14 1.2.38c.23.15.53.15.75 0c.35-.23.78-.37 1.23-.37c.46 0 .88.13 1.23.37c.23.15.53.15.75 0c.35-.23.78-.37 1.23-.37c.46 0 .88.13 1.23.37c.23.15.53.14.76-.01m8.15 18.73a2.03 2.03 0 1 1-4.06 0a2.03 2.03 0 0 1 4.06 0"/><path fill="#d67d00" d="M12.76 16.75a.375.375 0 0 0-.53.01l-.002.002l-.016.016l-.079.067a2.4 2.4 0 0 1-1.513.54a.375.375 0 0 0 0 .75a3.15 3.15 0 0 0 2.135-.84l.01-.01l.003-.003l.002-.001v-.001a.375.375 0 0 0-.01-.53m4.68 0a.375.375 0 0 0-.01.53l.002.002l.045.044q.041.039.115.1a3.15 3.15 0 0 0 1.988.709a.375.375 0 0 0 0-.75a2.4 2.4 0 0 1-1.608-.623l-.002-.003a.375.375 0 0 0-.53-.01" opacity=".5"/></g></svg>',hut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M28 30h-8.43l-3.5-5.31l-3.5 5.31H4V17h24z"/><path fill="#f3ad61" d="M29.93 17.855c0 .63-.51 1.14-1.14 1.14c-.07 0-.16-.01-.23-.02c-1.29-.13-1.4-1.01-2.9-1.01c-1.61 0-1.61 1.03-3.22 1.03s-1.61-1.03-3.22-1.03s-1.61 1.03-3.22 1.03s-1.61-1.03-3.21-1.03c-1.61 0-1.61 1.03-3.21 1.03c-1.61 0-1.61-1.03-3.21-1.03c-1.61 0-1.61 1.03-3.22 1.03h-.03c-.63-.01-1.12-.51-1.12-1.14c0-.16.03-.31.08-.45c.01-.01.02-.02.02-.04c.05-.08.11-.16.16-.23c.78-1.26 1.61-2.48 2.48-3.66c2.65-3.63 5.52-6.7 8.82-9.54c1.45-1.25 3.6-1.25 5.03.02c3.18 2.83 6.08 5.93 8.66 9.52c.87 1.2 1.7 2.44 2.49 3.71c.04.07.08.15.13.22c.03.14.06.29.06.45"/><path fill="#212121" d="M20 30h-8v-4.78c0-1.23 1.143-2.22 2.537-2.22h2.914c1.406 0 2.538 1 2.538 2.22V30z"/></g></svg>',wood:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M24 6.5H8v19c0 1.933 3.582 3.5 8 3.5s8-1.567 8-3.5z"/><path fill="#a56953" d="M16 10c4.418 0 8-1.567 8-3.5S20.418 3 16 3S8 4.567 8 6.5c0 .637.32 1.181 1 1.696c.022.017-.023-.018 0 0V14.5a.5.5 0 0 0 1 0V8.815c.027.014-.028-.014 0 0c1.467.75 3.566 1.185 6 1.185m11.354.768L24 14.12V25.5c0 .888-.755 1.698-2 2.315V23.5a.5.5 0 0 0-1-.008v-9.578a2.5 2.5 0 0 1 .732-1.768l3.5-3.5a1 1 0 0 1 1.414 0l.708.708a1 1 0 0 1 0 1.414m-23.208 8.5L8 23.12v2.38c0 1.105 1.171 2.09 3 2.732v-5.318a2.5 2.5 0 0 0-.732-1.768l-4-4a1 1 0 0 0-1.414 0l-.708.707a1 1 0 0 0 0 1.415M12 15.5a.5.5 0 0 1 1 0v4a.5.5 0 1 1-1 0z"/><path fill="#f3ad61" d="M23 6.25C23 7.769 19.866 9 16 9S9 7.769 9 6.25s3.134-2.75 7-2.75s7 1.231 7 2.75"/><path fill="#6d4534" d="M16 8c2.761 0 5-.84 5-1.875S18.761 4.25 16 4.25s-5 .84-5 1.875S13.239 8 16 8m0-1c-1.657 0-3-.448-3-1s1.343-1 3-1s3 .448 3 1s-1.343 1-3 1"/></g></svg>',ice:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" d="m14.703 11.776l14.342-5.404A1.5 1.5 0 0 1 30 7.769V23.58a2 2 0 0 1-1.311 1.878l-11.311 4.15a4 4 0 0 1-2.465.094a.937.937 0 0 0 1.087-.927v-15.06c0-.85-.514-1.618-1.297-1.939M6.19 11.1a.7.7 0 0 0-.641.242l-1.436 1.673l-.056.056l-.016.02c-.367.456-.571 1.038-.571 1.694c0 1.501 1.124 2.91 2.578 3.124c.043.008.083.012.103.014h.004l.025.003h.003l.031.006l.033.002c1.364.09 2.436-.95 2.522-2.336a3.14 3.14 0 0 0-.462-1.853l-.005-.008q-.115-.179-.22-.325l-.001-.002l-1.36-1.969l-.004-.006a.8.8 0 0 0-.526-.335m5.289 7.415c0-.858.675-1.571 1.576-1.445c.842.107 1.444.91 1.444 1.725c0 .87-.684 1.558-1.572 1.446h-.009c-.83-.12-1.439-.901-1.439-1.726M8.806 21.84c-.9-.126-1.576.587-1.576 1.445c0 .825.61 1.607 1.44 1.725c.903.13 1.58-.585 1.58-1.445c0-.827-.604-1.618-1.444-1.725"/><path fill="#0074ba" d="M2 7.762a1.5 1.5 0 0 1 .94-1.392a.63.63 0 0 0-.077 1.063l8.003 1.298l3.757 3.014c.828.3 1.377 1.09 1.377 1.97v15.06a.934.934 0 0 1-1.257.88l-11.575-4.24A1.77 1.77 0 0 1 2 23.745zm3.93 3.903l-1.45 1.69l-.05.05c-.29.36-.46.83-.46 1.38c0 1.28.97 2.46 2.16 2.63q.038.007.075.01q.038.003.075.01c1.06.07 1.92-.73 1.99-1.87c.04-.56-.11-1.1-.39-1.56c-.07-.11-.14-.21-.21-.31l-1.36-1.97a.3.3 0 0 0-.19-.13a.2.2 0 0 0-.19.07m1.8 11.62c0 .6.45 1.15 1.01 1.23s1.01-.35 1.01-.95c0-.61-.45-1.16-1.01-1.23c-.56-.08-1.01.35-1.01.95m5.26-5.72c-.56-.08-1.01.35-1.01.95s.45 1.15 1.01 1.23c.56.07 1.01-.35 1.01-.95s-.45-1.16-1.01-1.23"/><path fill="#83cbff" d="m17.28 11.775l11.7-4.26c.55-.2.55-.98 0-1.17l-11.7-4.26c-.83-.3-1.74-.3-2.57 0L3.02 6.335c-.55.2-.55.98 0 1.18l11.69 4.26c.83.3 1.74.3 2.57 0m3.35 1.64c.07-.01.13.01.18.07l1.33 1.55c.01.01.02.02.02.03l.01.02c.27.33.42.76.42 1.26c0 1.18-.89 2.26-1.98 2.41c-.05.01-.09.01-.14.01c-.97.06-1.76-.67-1.83-1.71c-.03-.51.1-1.01.35-1.43c.06-.1.12-.19.19-.28l1.25-1.81c.07-.07.14-.11.2-.12m6.11 6.34c.56-.08 1.01.35 1.01.95s-.45 1.15-1.01 1.23s-1.01-.35-1.01-.95s.45-1.15 1.01-1.23"/></g></svg>',"jack-o-lantern":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M13.743 8h3.507c.407 0 .75-.272.75-.614V4.612c0-.535-.793-.816-1.265-.439l-3.506 2.783c-.483.377-.15 1.044.514 1.044"/><path fill="#ff8257" d="M21.438 29h-10.87c-5.718 0-9.83-5.574-8.215-11.137l1.344-4.628C4.77 9.543 8.11 7 11.91 7h8.234c3.83 0 7.2 2.583 8.243 6.337l1.284 4.627C31.216 23.508 27.115 29 21.438 29"/><path fill="#321b41" d="M9.413 15h2.172c.353 0 .545-.434.315-.715l-1.113-1.132a.402.402 0 0 0-.637.008l-1.06 1.132c-.214.281-.023.707.323.707m11 0h2.172c.353 0 .545-.434.315-.715l-1.113-1.132a.402.402 0 0 0-.637.008l-1.06 1.132c-.214.281-.023.707.323.707m.97 2H24c0 3.366-2.548 6.194-5.997 7c-.397-.51-1.12-1.226-2.043-1.226c-1.09 0-1.754.689-2.091 1.19C10.489 23.123 8 20.321 8 17h2.607c.417.501 1.11 1.146 1.983 1.146c1.06 0 1.715-.645 2.062-1.146h2.686c.417.501 1.11 1.146 1.983 1.146c1.06 0 1.715-.645 2.062-1.146"/></g></svg>',"game-die":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3eef8" d="M13.883 2.451L4.494 6.504C3.532 6.934 3 8.024 3 9.127v13.041c0 1.514.546 2.81 1.857 3.39l9.286 4.044a4.53 4.53 0 0 0 3.714 0l9.286-5.047c1.31-.582 1.857-.873 1.857-2.387V9.127c0-1.103-.43-2.192-1.393-2.623l-9.49-4.053a5.2 5.2 0 0 0-4.234 0"/><path fill="#b4acbc" d="M4.857 25.559C3.547 24.977 3 23.682 3 22.168h26c0 1.514-.546 1.87-1.857 2.452l-9.286 4.981a4.53 4.53 0 0 1-3.714 0z"/><path fill="#b4acbc" d="M3 9.234a1.5 1.5 0 0 1 2.117-1.367l9.118 4.119A3 3 0 0 1 16 14.72v13.395a1.5 1.5 0 0 1-2.102 1.374l-9.701-4.254A2 2 0 0 1 3 23.404z"/><path fill="#e1d8ec" d="M29 9.254a1.5 1.5 0 0 0-2.117-1.367l-9.118 4.118A3 3 0 0 0 16 14.74v13.396a1.5 1.5 0 0 0 2.102 1.373l9.701-4.253A2 2 0 0 0 29 23.423z"/><path fill="#433b6b" d="M6.685 15.996c.82-.065 1.407-1.018 1.303-2.119c-.103-1.109-.854-1.946-1.673-1.873c-.82.066-1.407 1.019-1.303 2.12c.103 1.1.854 1.938 1.673 1.872m20.303-1.873c.104-1.1-.483-2.054-1.302-2.12c-.82-.065-1.57.773-1.674 1.873s.483 2.054 1.302 2.12c.82.073 1.57-.764 1.674-1.873m-13 9.754c.104 1.1-.483 2.054-1.303 2.12c-.82.065-1.57-.773-1.673-1.873c-.104-1.101.483-2.054 1.303-2.12c.82-.073 1.57.764 1.673 1.873m8.698-6.873c.82.065 1.406 1.018 1.302 2.119c-.103 1.109-.854 1.946-1.674 1.872c-.82-.065-1.406-1.018-1.302-2.119c.103-1.1.854-1.938 1.674-1.872m-1.698 7.119c.104-1.1-.483-2.054-1.302-2.12c-.82-.065-1.57.773-1.674 1.873s.483 2.054 1.302 2.12c.82.073 1.57-.764 1.674-1.873"/><path fill="#f8312f" d="M16 7.5c1.657 0 3-.448 3-1s-1.343-1-3-1s-3 .448-3 1s1.343 1 3 1"/></g></svg>',mushroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ffce7c" d="M10.992 25.309L13.5 18.5H18l2.831 6.724A2 2 0 0 1 18.988 28h-6.12a2 2 0 0 1-1.876-2.691"/><path fill="#f8312f" d="M4 16c0-2.27.63-4.394 1.727-6.205L9.5 8l3.258-3.557A12 12 0 0 1 16 4c1.626 0 3.176.323 4.59.91l2.91 5.59l4.455 4.456Q28 15.472 28 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path fill="#fbb8ab" d="M12.79 4.434q.079.436.08.896c0 2.74-2.23 4.96-4.97 4.97a4.9 4.9 0 0 1-2.173-.506a12.03 12.03 0 0 1 7.062-5.36m7.784.468A6.6 6.6 0 0 0 19.43 8.63a6.632 6.632 0 0 0 8.528 6.353c-.384-4.567-3.324-8.406-7.385-10.081M14.94 17.04a2.74 2.74 0 1 0 0-5.48a2.74 2.74 0 0 0 0 5.48"/></g></svg>',"evergreen-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.157 30h-6.311c-.536 0-.943-.608-.826-1.243L12.535 26h6.933l.514 2.757c.108.635-.289 1.243-.825 1.243"/><path fill="#44911b" d="m14.877 6.714l-2.699 5.127c-.504.952.12 2.159 1.128 2.159h.602C11.747 14 10 15.592 10 17.561c0 .8.71 1.439 1.579 1.439h.144C9.116 19 7 21.227 7 23.971C7 25.649 8.294 27 9.878 27h12.244C23.716 27 25 25.639 25 23.971C25.01 21.227 22.894 19 20.277 19h.144C21.3 19 22 18.352 22 17.561C22 15.601 20.253 14 18.092 14h.602c1.007 0 1.632-1.196 1.128-2.16l-2.7-5.126c-.493-.952-1.741-.952-2.245 0"/></g></svg>',"deciduous-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M18 22.24h-4v7.78h4z"/><path fill="#44911b" d="M25.9 15.2c.38-.76.6-1.62.6-2.53c0-2.91-2.19-5.3-5-5.63V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v.04a5.662 5.662 0 0 0-4.4 8.16c-1.26.94-2.1 2.43-2.1 4.12c0 2.84 2.32 5.16 5.16 5.16h12.68c2.84 0 5.16-2.32 5.16-5.16c0-1.69-.84-3.18-2.1-4.12"/></g></svg>',tulip:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M16.83 20.16h-2v8.253c-.748-1.858-2.56-3.183-4.68-3.183H8.08a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.793v-.007a.3.3 0 0 0 .12.027h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.919.017-3.59 1.365-4.1 3.197z"/><path fill="#f70a8d" d="M20.83 19.26H10.81v-6.02c0-3.71 1.48-7.26 4.1-9.87l.01-.01c.48-.48 1.26-.48 1.74 0c2.67 2.62 4.17 6.21 4.17 9.95z"/><path fill="#ff6dc6" d="M24.64 4.11c0-.58-.37-1.08-.83-1.09c-3.27-.02-6.08 4.77-7.32 9.46c-.22.83-1.12.81-1.34-.02c-1.23-4.67-4.03-9.44-7.29-9.44c-.47 0-.85.49-.85 1.09v6.21L7 10.31c0 .39.02.78.05 1.16c.08 1.1.29 3.08.62 4.05c1.32 4.09 4.47 6.03 8.16 6.03c3.41 0 6.37-1.54 7.83-5.15c.63-1.46.99-4.06.99-5.84z"/></g></svg>',sunflower:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#44911b" d="M17.107 19.75h-2v8.228c-.755-1.844-2.56-3.158-4.67-3.158h-2.07a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.783v-.006a.3.3 0 0 0 .12.026h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.92.017-3.59 1.365-4.1 3.197z"/><path fill="#fcd53f" d="M23.847 11.78c1.91.53 3.23 1.6 3.1 2.67s-1.66 1.78-3.63 1.84c1.32 1.48 1.85 3.1 1.15 3.93c-.69.82-2.36.58-4.04-.45c.3 1.96-.15 3.61-1.18 3.92s-2.3-.8-3.15-2.58c-.82 1.81-2.08 2.95-3.12 2.65c-1.03-.3-1.5-1.93-1.24-3.88c-1.67 1.07-3.35 1.34-4.06.52s-.21-2.43 1.07-3.93c-1.99-.02-3.54-.71-3.69-1.78s1.15-2.15 3.04-2.71c-1.66-1.09-2.58-2.52-2.13-3.49c.47-1 2.21-1.2 4.15-.58c-.83-1.85-.84-3.61.09-4.19c.89-.56 2.38.15 3.64 1.6c.34-1.89 1.25-3.25 2.31-3.22c.98.01 1.8 1.21 2.13 2.91c1.19-1.27 2.53-1.86 3.37-1.35c.92.55.95 2.24.19 4.06c1.89-.6 3.58-.42 4.05.55c.47.96-.42 2.4-2.05 3.51"/><path fill="#8c5543" d="M16 19a5.861 5.861 0 1 0 0-11.722A5.861 5.861 0 0 0 16 19"/><path fill="#6d4534" d="m21.118 10.281l-.8.8l1.117 1.117l.295-.295a5.9 5.9 0 0 1 .071 2.076l-.366-.366l-1.114 1.114l.96.958a5.9 5.9 0 0 1-2.462 2.594l-1.027-1.023l-1.106 1.106l.515.515a5.9 5.9 0 0 1-2.437-.008l.508-.507l-1.117-1.117l-1.013 1.012a5.9 5.9 0 0 1-1.916-1.717l1.11 1.11l1.112-1.112l-1.112-1.112l-1.112 1.112a6 6 0 0 1-.523-.891l.928-.928l-1.112-1.112l-.325.325a5.9 5.9 0 0 1 .07-1.994l.255.255l1.096-1.095l-.762-.76q.245-.45.564-.85l.905.902l1.12-1.12l-.88-.877a6 6 0 0 1 .885-.53l.702.7l1.12-1.12l-.107-.105a6 6 0 0 1 1.633-.007l-.113.113l1.112 1.112l.716-.716q.47.224.89.523l-.899.9l1.112 1.111l.935-.935q.322.395.572.842m-.392 6.264l-1.113-1.111l-1.114 1.115l1.114 1.11zM11.224 12.9l1.112 1.112l1.098-1.099l-1.113-1.11zm1.804-1.804l1.114 1.11l1.118-1.118l-1.112-1.111zm1.827-1.826l1.112 1.11l1.118-1.117l-1.112-1.112zm1.82 1.817l1.113 1.11l1.116-1.115l-1.112-1.112zm-1.825 1.825l1.114 1.11l1.116-1.117l-1.112-1.11zm-1.807 1.807l1.112 1.112l1.102-1.102l-1.114-1.11zm7.685-1.814L19.61 11.79l-1.116 1.115l1.118 1.116zm-1.822 1.822l-1.118-1.116l-1.116 1.117l1.119 1.115zm-1.822 1.823l-1.12-1.115l-1.102 1.103l1.117 1.117z"/></g></svg>',blossom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M17.096 19.84h-2v8.409c-.708-1.939-2.562-3.339-4.74-3.339h-2.07a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.808a.3.3 0 0 0 .105.02h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.85.016-3.468 1.27-4.04 3z"/><path fill="#d3d3d3" d="M16.055 2c-2.35 0-4.19 2.02-3.97 4.36l.18 1.91l-1.98-.68a3.98 3.98 0 0 0-5.17 2.82c-.55 2.25.92 4.49 3.21 4.88l1.78.3l-1.46 1.8a3.984 3.984 0 0 0 .88 5.83c1.92 1.29 4.54.67 5.69-1.34l.91-1.45l.74 1.45a3.995 3.995 0 0 0 5.69 1.34c1.95-1.31 2.36-4.01.88-5.83l-1.44-1.78l1.9-.32a3.993 3.993 0 0 0 3.21-4.88a3.99 3.99 0 0 0-5.18-2.82l-2 .69l.14-2.01c.13-2.3-1.7-4.27-4.01-4.27"/><path fill="#ffb02e" d="M15.996 17.36a3.78 3.78 0 1 0 0-7.56a3.78 3.78 0 0 0 0 7.56"/></g></svg>',"spiral-shell":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="m6.773 3.614l-.379.36a2.43 2.43 0 0 0-2.065-.708l-1.307.76v4.102l10.014 20.18L26 29.897l.848-.002c3.951-3.77 4.143-10.032.375-13.99l-1.812-1.9a7.5 7.5 0 0 0-2.048-4.57a7.48 7.48 0 0 0-6.188-2.277l-1.622-1.703a3.477 3.477 0 0 0-4.791-.265l.291-.305l-1.14-1.2c-.84-.88-2.25-.92-3.14-.07"/><path fill="#212121" d="m22.781 25.6l2.662 2.794c3.2-3.05 3.32-8.11.27-11.3l-.524-.55a7.46 7.46 0 0 1-2.086 3.52a4.06 4.06 0 0 0-.322 5.537"/><path fill="#9b9b9b" d="M4.375 9c-.276-1.474 2.256-4.406 3.862-5.999a2.2 2.2 0 0 0-1.464.613L3.981 6.27c-.848-1.033-.167-2.355.392-3.009A2.44 2.44 0 0 0 2.86 7.337l-.166.157c-.89.85-.93 2.26-.08 3.15l1.187 1.25a3.51 3.51 0 0 0 .293 4.48L5.88 18.25a9.802 9.802 0 0 0 9.644 11.664l10.688-.019c-5.3-.698-13.53-3.33-14.586-8.895c-1.367-7.207 3.566-11.944 9.887-12.982a7.54 7.54 0 0 0-4.77-.804L7.257 15.43c-.517-.571-1.08-1.544-1.006-2.805c.1-1.7 4.79-6.207 7.124-8.25a3.45 3.45 0 0 0-2.76.95l-5.573 5.31c-.262-.326-.518-.844-.666-1.635"/></g></svg>',"tropical-fish":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#635994" d="M3.39 18.945a1.055 1.055 0 1 0-.671 0a1.055 1.055 0 1 0 .672 0"/><path fill="#f9c23c" d="M23 7h-8.625v23H23a3 3 0 0 0 3-3v-8.058c.002 2.404 1.438 4.152 2.656 4.152c.975 0 1.282-.688 1.313-1.032V16.75c0-1.425-.313-1.656-.875-1.656c-1.995 0-2.983 2.013-3.094 3.363V10a3 3 0 0 0-3-3"/><path fill="#00a6ed" d="M14.5 30C20.851 30 26 24.851 26 18.5S20.851 7 14.5 7a11.46 11.46 0 0 0-7.8 3.05l-.073 16.833A11.46 11.46 0 0 0 14.5 30"/><path fill="#8d65c5" d="M6.627 26.883A11.47 11.47 0 0 1 3 18.5a11.47 11.47 0 0 1 3.7-8.45a10.8 10.8 0 0 1 3.988 8.388c0 3.417-1.586 6.464-4.06 8.445"/><path fill="#f9c23c" d="M18 21.452v-5.874a.7.7 0 0 0-1.174-.516l-2.997 2.754a1 1 0 0 0 .01 1.482l2.995 2.676A.7.7 0 0 0 18 21.452"/><path fill="#1c1c1c" d="M8.172 16.516a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0"/></g></svg>',lollipop:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" d="M15.236 15.79a1.75 1.75 0 0 1 2.474-.054l11.75 11.25a1.75 1.75 0 0 1-2.42 2.528l-11.75-11.25a1.75 1.75 0 0 1-.054-2.474"/><path fill="#5092ff" d="M3.386 6.918a10.05 10.05 0 0 1 3.75-3.658C13.351 6.72 12 12 12 12C9.96 8.791 8.015 7.264 3.386 6.918"/><path fill="#00d26a" d="M2 11.907a9.95 9.95 0 0 1 1.417-5.042C10.297 6.967 12 12 12 12c-3.333-1.748-5.71-2.094-10-.093"/><path fill="#fcd53f" d="M3.293 16.921A9.96 9.96 0 0 1 2 11.844C8.01 8.494 12 12 12 12c-3.783.095-6.017 1.146-8.707 4.921"/><path fill="#ff9f2e" d="M6.921 20.616a10.05 10.05 0 0 1-3.66-3.75C6.79 10.959 12 12 12 12c-3.22 1.904-4.58 4.027-5.079 8.616"/><path fill="#f837a2" d="M6.865 20.583C6.967 13.703 12 12 12 12c-1.827 3.297-2.028 5.775-.093 10a9.95 9.95 0 0 1-5.042-1.417"/><path fill="#c790f1" d="M11.844 21.999C8.494 15.99 12 12 12 12c.173 3.837 1.18 6.105 4.92 8.708a9.95 9.95 0 0 1-5.076 1.29"/><path fill="#5092ff" d="M16.866 20.738C10.96 17.211 12 12 12 12c2.095 3.32 3.973 4.747 8.614 5.082a10.05 10.05 0 0 1-3.748 3.656"/><path fill="#00d26a" d="M20.583 17.135C13.703 17.033 12 12 12 12c3.342 1.803 5.852 2.093 10 .094a9.95 9.95 0 0 1-1.417 5.04"/><path fill="#fcd53f" d="M21.999 12.156L22 12a9.96 9.96 0 0 0-1.292-4.92C18.038 10.964 15.792 11.881 12 12c0 0 3.991 3.507 9.999.156"/><path fill="#ff9f2e" d="M17.082 3.386a10.05 10.05 0 0 1 3.656 3.748C17.211 13.04 12 12 12 12c3.107-1.928 4.712-3.772 5.082-8.614"/><path fill="#f837a2" d="M17.135 3.417A9.95 9.95 0 0 0 12.096 2c2.141 4.27 1.64 6.836-.096 10c0 0 5.033-1.703 5.134-8.583"/><path fill="#c790f1" d="M12.156 2.001L12 2a9.95 9.95 0 0 0-4.916 1.29C11.228 5.88 12.116 8.218 12 12c0 0 3.507-3.991.156-9.999"/></g></svg>',candy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M13 4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .8-.97 1.2-1.54.64l-.05-.05c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l.05.05C5.2 8.03 4.8 9 4 9c-1.1 0-2 .9-2 2s.9 2 2 2h9z"/><path fill="#fcd53f" d="M19 24.488A9 9 0 0 1 16 25c-.824 0-1.621-.11-2.38-.318a9 9 0 0 0 2.74.308a6.41 6.41 0 0 1 .94-7.17a6.42 6.42 0 0 1 7.69-1.46A9 9 0 0 0 25 16c0 1.052-.18 2.062-.512 3l-.26.21h-1.726c-1.93 0-3.268 1.344-3.268 3.274v1.756z"/><path fill="#fcd53f" d="M24.66 13.54a8.9 8.9 0 0 0-2.57-.38c-2.54 0-4.97 1.09-6.66 2.99a9 9 0 0 0-1.79 3.06a8.8 8.8 0 0 0-.46 3.39c.04.7.16 1.39.36 2.06a9 9 0 0 1-2.344-1.048c-.022-.048-.13-.122-.15-.17c-1.438-3.251-.997-7.248 1.514-10.074c1.84-2.07 4.535-3.184 7.105-3.184c1.308 0 2.506.285 3.723.838c.04.018.183.17.222.188c-.44-.7-.99-1.35-1.63-1.93a8.9 8.9 0 0 0-2.41-1.54c-.074 0-.11.06-.183.062a11.8 11.8 0 0 0-8.59 3.977a12 12 0 0 0-2.389 4.09c-.387 1.142-.55 2.29-.581 3.496c-.002.068-.096.124-.097.192a9 9 0 1 1 16.93-6.017"/><path fill="#f8312f" d="M12.69 13.46a9.3 9.3 0 0 1 6.97-3.13c1.35 0 2.7.29 3.95.88c-.44-.7-.99-1.35-1.63-1.93a8.9 8.9 0 0 0-2.41-1.54c-1.63.01-3.21.35-4.71 1c-1.58.69-2.96 1.7-4.11 2.99c-1.07 1.2-1.87 2.58-2.39 4.09c-.41 1.21-.62 2.47-.63 3.75c.5 1.17 1.26 2.25 2.28 3.15c.38.34.78.64 1.19.9c-1.52-3.28-1.06-7.29 1.49-10.16M19 28c0 1.1.9 2 2 2s2-.9 2-2c0-.8.97-1.2 1.54-.64l.05.05c.78.78 2.05.78 2.83 0s.78-2.05 0-2.83l-.05-.05C26.8 23.97 27.2 23 28 23c1.1 0 2-.9 2-2s-.9-2-2-2h-5.5c-1.93 0-3.5 1.57-3.5 3.5z"/><path fill="#f8312f" d="M17.33 17.835c-1.81 2.03-2.13 4.865-.97 7.155c-.94.04-1.89-.07-2.82-.33c-.2-.67-.39-1.369-.43-2.069c-.07-1.16.124-2.372.494-3.462c.39-1.13.988-2.1 1.788-3a9.04 9.04 0 0 1 6.698-3.02c.88 0 1.74.181 2.57.431c.26.92.37 1.87.33 2.82c-.91-.46-1.91-.655-2.9-.655c-1.76 0-3.49.71-4.76 2.13"/></g></svg>',doughnut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M27.32 14C25.67 9.34 21.22 6 16 6S6.33 9.34 4.68 14H4v4c0 6.63 5.37 12 12 12s12-5.37 12-12v-4zm-6.82 3.64c0 2.21-1.79 4-4 4h-1c-2.21 0-4-1.79-4-4s1.79-4 4-4h1c2.21 0 4 1.79 4 4"/><path fill="#6d4534" d="M16 2C9.37 2 4 7.37 4 14s5.37 12 12 12s12-5.37 12-12S22.63 2 16 2m4.5 12c0 2.21-1.79 4-4 4h-1c-2.21 0-4-1.79-4-4s1.79-4 4-4h1c2.21 0 4 1.79 4 4"/><path fill="#00a6ed" d="M12.85 7.76c-.2.2-.54.2-.74 0l-.79-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54.01.74m-6.61 6.26c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm17 2.74c-.2-.2-.2-.54 0-.74l.78-.78c.2-.2.54-.2.74 0s.2.54 0 .74l-.78.78c-.2.21-.54.21-.74 0m-11.48 5c-.2.2-.54.2-.74 0l-.78-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54 0 .74m9.48-13.74c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0z"/><path fill="#ff6dc6" d="M16.24 6.02c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm7.78 5.74c.2.2.54.2.74 0c.21-.2.21-.54 0-.74l-.78-.78c-.2-.2-.54-.2-.74 0s-.2.54 0 .74zM8.24 9.85c-.2-.2-.2-.54 0-.74l.78-.78c.2-.2.54-.2.74 0s.2.54 0 .74l-.78.78c-.2.2-.54.2-.74 0m6 13.17c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm7.52-2.26c-.2.2-.54.2-.74 0l-.78-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54 0 .74m-11.74-2.91c.2.2.54.2.74 0c.21-.21.21-.54 0-.74l-.78-.78c-.2-.2-.54-.2-.74 0s-.2.54 0 .74z"/></g></svg>',"crescent-moon":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fcd53f" d="M23.41 5.632c.5 2.04.56 4.26.02 6.56c-1.26 5.33-5.64 9.51-11.02 10.48c-2.91.53-5.68.13-8.09-.92c-.56-.25-1.09.39-.8.93c2.65 4.88 8.11 8 14.22 7.19c6.23-.83 11.22-5.91 11.97-12.15c.6-5.18-1.6-9.86-5.28-12.75c-.47-.36-1.16.08-1.02.66"/><path fill="#f9c23c" d="M27.87 12.562a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0m-12.92 12.88a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0m11.85-6.47a.99.99 0 1 0 0-1.98a.99.99 0 0 0 0 1.98m-2 3.01a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></g></svg>',"ringed-planet":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff944c" d="M25.054 16.005a9.027 9.027 0 0 1-10.632 8.885C12.794 23.32 11 22.5 9.17 21.875a9 9 0 0 1-2.143-6.566c1.618-3.006 5.046-6.894 8.176-8.294q.408-.037.825-.037c2.077 0 3.99.701 5.515 1.88c.637 1.589 2.11 4.309 3.365 5.512q.146.796.147 1.635"/><path fill="#fbb8ab" d="M11.957 11.909c-1.8 1.921-3.773 2.959-4.93 3.386a9.03 9.03 0 0 1 8.168-8.28c-.252.869-.94 2.442-3.238 4.894m8.638 8.386c1.904-2.145 3.278-4.157 4.302-5.975a9.03 9.03 0 0 0-3.36-5.466c-.637 1.541-2.353 4.264-5.512 7.486c-2.497 2.547-4.798 4.297-6.87 5.52a9.02 9.02 0 0 0 5.295 3.035c2.355-1.312 4.615-2.877 6.145-4.6"/><path fill="#fcd53f" d="M27.231 4.88c-.453-.527-1.06-.703-1.584-.718c-.496-.015-.99.109-1.425.264c-.875.312-1.86.883-2.811 1.522a37 37 0 0 0-2.198 1.608a9 9 0 0 1 2.452 1.398c.402-.299.803-.585 1.194-.847c.898-.602 1.67-1.03 2.237-1.233l.066-.023c-.027.11-.07.247-.137.42c-.28.72-.84 1.66-1.633 2.754c-1.57 2.169-3.85 4.669-5.909 6.752c-1.996 2.02-4.713 4.43-7.096 6.17c-1.199.875-2.26 1.542-3.074 1.915q-.26.119-.452.185c.125-.34.362-.794.725-1.367c.392-.622.876-1.299 1.402-2.023a9 9 0 0 1-1.414-2.478q-.216.3-.438.603l-.07.098c-.587.805-1.188 1.635-1.679 2.411c-.477.755-.924 1.573-1.119 2.35c-.2.801-.194 1.89.737 2.654c.59.484 1.298.504 1.803.435c.523-.07 1.068-.266 1.588-.504c1.049-.48 2.275-1.267 3.524-2.18c2.515-1.837 5.337-4.341 7.413-6.441c2.092-2.118 4.48-4.728 6.166-7.055c.835-1.155 1.55-2.308 1.95-3.338c.354-.914.677-2.29-.218-3.333M6.758 25.451v.012z"/></g></svg>',rocket:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M29.2 2.95c-.947-.947-2.7-.998-3.818-.425c-.913.314-1.874.667-2.854 1.063l.01.01c-2.575 1.095-6.427 3.04-9.51 5.902c-2.164 2.01-3.404 3.556-4.235 4.965l-5.298 1.95a1 1 0 0 0-.362 1.646l11.138 11.137a1 1 0 0 0 1.645-.362l2.204-5.986c1.608-.958 3.223-2.165 4.908-3.85c2.39-2.39 4.366-6.56 5.513-9.357l.009.008c.4-.99.758-1.961 1.074-2.883c.573-1.118.74-2.654-.424-3.818"/><path fill="#f4f4f4" d="M23.299 4.365c-2.517 1.04-6.478 2.978-9.59 5.868c-2.015 1.87-3.172 3.294-3.94 4.55c-.769 1.255-1.175 2.38-1.663 3.74l-.002.007c-.17.474-.35.977-.559 1.514l4.556 4.556c3.602-1.48 6.74-2.828 10.22-6.307c2.351-2.352 4.339-6.642 5.454-9.421z"/><path fill="#9b9b9b" d="M24.528 11.25a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"/><path fill="#83cbff" d="M23.528 11.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"/><path fill="#ff8257" d="M2.451 29.61C1.744 28.905 2.028 24 4.528 23c0 0 2.5-1 4.11.6c1.612 1.601.89 3.4.89 3.4c-.707 2.121-3.718 2.965-4.071 2.61c-.195-.194.156-.55 0-.706c-.157-.157-.398.022-1.06.353c-.472.236-1.663.637-1.946.354"/><path fill="#533566" d="M6.088 21.06a1.5 1.5 0 0 1 2.122 0l3.535 3.536a1.5 1.5 0 1 1-2.121 2.122l-3.536-3.536a1.5 1.5 0 0 1 0-2.121"/><path fill="#f92f60" d="M15.535 18.722c.442-1.2-.725-2.368-1.926-1.926l-7.114 2.619a1 1 0 0 0-.362 1.646l5.138 5.137a1 1 0 0 0 1.645-.362z"/></g></svg>',snowman:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M23.62 12.155c0 1.072-.215 1.972-.659 2.694a11.18 11.18 0 0 1 3.779 8.386c0 1.544-.314 2.852-.934 3.935c-.623 1.086-1.518 1.883-2.58 2.456c-2.08 1.122-4.845 1.409-7.686 1.409s-5.607-.287-7.686-1.409c-1.062-.573-1.957-1.37-2.58-2.457c-.62-1.082-.934-2.39-.934-3.934c0-3.33 1.456-6.32 3.762-8.372c-.441-.725-.652-1.63-.652-2.708a8.074 8.074 0 0 1 8.08-8.08c4.46 0 8.09 3.616 8.09 8.08"/><path fill="#433b6b" d="M6.5 13.575a.5.5 0 0 0-1 0v1.607l-1.09-.954a.5.5 0 1 0-.659.753l2.35 2.054H4.95a.5.5 0 1 0 0 1h2.24q.025 0 .05-.003l1.67 1.46a.5.5 0 0 0 .658-.754l-3.072-2.685l.003-.058zm18.52-.5a.5.5 0 0 1 .5.5v1.607l1.091-.954a.5.5 0 1 1 .658.753l-2.36 2.064h1.111a.5.5 0 0 1 0 1h-2.256L22.11 19.49a.5.5 0 0 1-.658-.753l3.072-2.685l-.003-.058v-2.42a.5.5 0 0 1 .5-.5"/><path fill="#fff" d="M21.535 14.984c.687-.568 1.085-1.453 1.085-2.83c0-3.91-3.18-7.08-7.09-7.08s-7.08 3.16-7.08 7.08c0 1.39.392 2.278 1.072 2.846a10.19 10.19 0 0 0-4.182 8.235c0 5.63 4.57 6.8 10.2 6.8s10.2-1.17 10.2-6.8c0-3.39-1.657-6.396-4.205-8.251"/><path fill="#0074ba" d="M20.54 24.035h-1.01v.5c0 .26-.22.49-.49.49a.49.49 0 0 1-.49-.49v-.5h-1.03v.49a.49.49 0 0 1-.98 0v-.944a.7.7 0 0 1-.03-.196v-5.35h5.03v5.35q0 .084-.02.161v.989c0 .26-.22.49-.49.49a.49.49 0 0 1-.49-.49z"/><path fill="#0084ce" d="M8.815 14.081c-.256.287-.395.793-.395 1.614c0 3.93 3.19 4.39 7.12 4.39s7.12-.46 7.12-4.39c0-.836-.145-1.345-.41-1.63c-.933 1.941-3.53 1.94-6.585 1.94h-.378c-3.035.001-5.56.002-6.472-1.924"/><path fill="#321b41" d="m9.548 6.359l.293-.844l-.8-.332c-.44-1.03.03-2.22 1.06-2.66l1.81-.78c1.03-.44 2.21.03 2.65 1.06l-.403.846l.912.342l.251-.108a.711.711 0 1 1 .56 1.31l-6.04 2.59a.715.715 0 0 1-.94-.37c-.15-.36.01-.79.38-.94z"/><path fill="#0074ba" d="m15.074 3.99l-5.53 2.37l-.503-1.177l5.53-2.37z"/><path fill="#ff6723" d="m19.69 11.135l-4.06-.42c-.45 0-.81.36-.81.81s.36.81.81.81l4.06-.42c.22 0 .4-.18.4-.4s-.18-.38-.4-.38"/><path fill="#433b6b" d="M14.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"/><path fill="#00a6ed" d="M5.28 9.705h.2c.29 0 .53.24.53.53s-.24.53-.53.53h-.2l.15.13c.2.21.2.54 0 .75c-.21.21-.55.21-.75 0l-.14-.14v.2c0 .29-.24.53-.53.53s-.53-.24-.53-.53v-.2l-.14.15c-.21.21-.55.21-.75 0a.525.525 0 0 1 0-.75l.14-.14h-.2c-.29 0-.53-.24-.53-.53s.24-.53.53-.53h.2l-.15-.14a.525.525 0 0 1 0-.75c.21-.21.55-.21.75 0l.14.15v-.2c0-.29.24-.53.53-.53s.53.24.53.53v.2l.14-.15c.21-.21.54-.21.75 0c.2.21.2.54 0 .75zm22.44.23h-.11l.08-.08c.11-.11.11-.29 0-.4a.284.284 0 0 0-.4 0l-.08.08v-.11c0-.15-.13-.28-.28-.28s-.28.13-.28.28v.11l-.08-.08a.284.284 0 0 0-.4 0c-.11.11-.11.29 0 .4l.08.08h-.11c-.15 0-.28.13-.28.28s.13.28.28.28h.11l-.08.08c-.11.11-.11.29 0 .4s.29.11.4 0l.08-.08v.11c0 .15.13.28.28.28s.28-.13.28-.28v-.11l.08.08c.11.11.29.11.4 0s.11-.29 0-.4l-.08-.08h.11c.15 0 .28-.13.28-.28c0-.16-.12-.28-.28-.28m.96 13.02h.11c.16 0 .28.13.28.28s-.13.28-.28.28h-.11l.08.08c.11.11.11.29 0 .4s-.29.11-.4 0l-.08-.08v.11c0 .15-.13.28-.28.28s-.28-.13-.28-.28v-.11l-.08.08c-.11.11-.29.11-.4 0a.284.284 0 0 1 0-.4l.08-.08h-.11c-.15 0-.28-.13-.28-.28s.13-.28.28-.28h.11l-.08-.08a.283.283 0 0 1 .4-.4l.08.08v-.11c0-.15.13-.28.28-.28s.28.13.28.28v.11l.08-.08a.283.283 0 0 1 .4.4z"/><path fill="#26c9fc" d="M26.28 4.705h.2c.29 0 .53.24.54.52c0 .29-.24.53-.53.53h-.2l.14.14c.2.21.2.54 0 .75c-.21.21-.55.21-.75 0l-.14-.14v.21c0 .29-.24.53-.53.53s-.53-.24-.53-.53v-.2l-.14.14c-.21.21-.55.21-.75 0a.525.525 0 0 1 0-.75l.14-.14h-.2c-.29 0-.53-.24-.53-.53s.24-.53.52-.53h.2l-.14-.14a.525.525 0 0 1 0-.75c.21-.21.55-.21.75 0l.14.14v-.2c0-.29.24-.53.53-.53s.53.24.53.53v.2l.14-.14c.21-.21.54-.21.75 0c.2.21.2.54 0 .75zm-19.59.25h.1c.16 0 .29.13.29.28s-.13.28-.28.28h-.11l.08.08c.11.11.11.29 0 .4s-.29.11-.4 0l-.08-.08v.11c0 .15-.13.28-.28.28s-.28-.13-.28-.28v-.11l-.08.08c-.11.11-.29.11-.4 0a.284.284 0 0 1 0-.4l.08-.08h-.11c-.15 0-.28-.13-.28-.28s.13-.28.28-.28h.11l-.08-.08a.284.284 0 0 1 0-.4c.11-.11.29-.11.4 0l.08.08v-.11c0-.15.13-.28.28-.28s.28.13.28.28v.11l.08-.08c.11-.11.29-.11.4 0s.11.29 0 .4zm-2.03 14.98h-.11l.08-.08c.11-.11.11-.29 0-.4a.284.284 0 0 0-.4 0l-.08.08v-.11c0-.15-.13-.28-.28-.28s-.28.13-.28.28v.11l-.08-.08a.284.284 0 0 0-.4 0c-.11.11-.11.29 0 .4l.08.08h-.11c-.15 0-.28.13-.28.28s.13.28.28.28h.11l-.08.08c-.11.11-.11.29 0 .4s.29.11.4 0l.08-.08v.11c0 .15.13.28.28.28s.28-.13.28-.28v-.11l.08.08c.11.11.29.11.4 0s.11-.29 0-.4l-.08-.07h.11c.15 0 .28-.13.28-.28c0-.16-.13-.29-.28-.29"/></g></svg>',"crystal-ball":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M16 27c6.627 0 12-5.373 12-12S22.627 3 16 3S4 8.373 4 15s5.373 12 12 12"/><path fill="#b4acbc" d="M24 24H8l-.921 4.18c-.333.897.433 1.82 1.512 1.82h14.822c1.078 0 1.834-.923 1.512-1.82z"/><path fill="#fcd53f" d="M14.205 6.264a.5.5 0 0 1-.26-.261l-.38-.897a.19.19 0 0 0-.34 0l-.38.897a.48.48 0 0 1-.26.261l-.48.222a.192.192 0 0 0 0 .343l.48.221c.12.05.21.152.26.262l.38.897a.19.19 0 0 0 .34 0l.38-.897a.48.48 0 0 1 .26-.262l.48-.221a.192.192 0 0 0 0-.343zm9.915 4.54a.73.73 0 0 1-.36-.373l-.54-1.28a.274.274 0 0 0-.49 0l-.54 1.28a.73.73 0 0 1-.36.373l-.68.312c-.2.1-.2.393 0 .494l.68.312c.16.07.29.211.36.373l.54 1.28c.1.2.39.2.49 0l.54-1.28a.72.72 0 0 1 .36-.373l.68-.312c.2-.101.2-.393 0-.494zM12.586 14.03c.139.352.398.636.73.792l1.379.655c.407.215.407.83 0 1.046l-1.378.655c-.324.156-.592.44-.73.792l-1.092 2.707a.54.54 0 0 1-.99 0L9.414 17.97a1.46 1.46 0 0 0-.73-.792l-1.379-.655c-.407-.215-.407-.83 0-1.046l1.378-.655c.324-.156.592-.44.73-.792l1.092-2.707a.54.54 0 0 1 .99 0z"/></g></svg>',castle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M18.73 8.235h-5.42c-.3 0-.5-.32-.36-.59l2.71-5.42a.4.4 0 0 1 .72 0l2.71 5.42c.14.27-.06.59-.36.59M12.348 20H3.652c-.485 0-.802-.417-.58-.773l4.348-8.934c.242-.39.918-.39 1.16 0l4.348 8.934c.221.356-.095.773-.58.773m7.304 0h8.696c.485 0 .802-.417.58-.773l-4.348-8.934c-.242-.39-.918-.39-1.16 0l-4.348 8.934c-.221.356.095.773.58.773"/><path fill="#998ea4" d="M19.391 7h-.447a.6.6 0 0 0-.609.605a.606.606 0 0 1-.609.624h-.285a.6.6 0 0 1-.609-.605a.606.606 0 0 0-.609-.624h-.447a.6.6 0 0 0-.608.605a.606.606 0 0 1-.61.624h-.285a.6.6 0 0 1-.608-.605a.606.606 0 0 0-.61-.624h-.446a.616.616 0 0 0-.609.614v3.811c0 .336.167.575.5.575h.5c-.504 0-1 0-1 1v11h8V13c0-1-.496-1-1-1h.5c.333 0 .5-.239.5-.575V7.614A.6.6 0 0 0 19.39 7"/><path fill="#b4acbc" d="M30 19.198v.39L29.99 30H18.957l-2.99-1.697L12.977 30H2V18.599c0-.333.31-.599.66-.599h.47c.35 0 .63.266.63.599s.28.599.63.599h.289c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .63.266.63.599s.28.599.629.599h.3c.35 0 .63-.267.63-.6s.28-.598.63-.598h.47c.35 0 .629.266.629.599s.28.599.63.599h.31c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.349 0 .629.266.629.599s.28.599.63.599h.29c.35 0 .63-.267.63-.6s.28-.598.63-.598h.499c.35 0 .63.266.63.599s.28.599.63.599h.29c.35 0 .63-.267.63-.6s.279-.598.629-.598h.46c.35 0 .63.266.63.599s.28.599.63.599h.29c.35 0 .629-.267.629-.6s.28-.598.63-.598h.47c.35 0 .63.266.63.599s.28.599.63.599h.289c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .63.266.63.599s.28.599.629.599h.29c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .629.266.629.599z"/><path fill="#5235a6" d="M15 14h2v-1c0-.557-.456-1-1-1c-.557 0-1 .456-1 1zm-2 16h5.99v-3.23c0-1.781-1.33-2.77-2.99-2.77c-1.65 0-3 .979-3 2.77z"/><path fill="#26c9fc" d="M7.5 7.306V9.19c0 .215.212.361.414.293l2.35-1.117a.125.125 0 0 0 0-.226l-2.36-1.127a.312.312 0 0 0-.404.293m16 0V9.19c0 .215.212.361.414.293l2.35-1.117a.125.125 0 0 0 0-.226l-2.36-1.127a.312.312 0 0 0-.404.293"/></g></svg>',"cherry-blossom":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6dc6" d="M26.23 19.766c2.47-.8 3.96-3.19 3.76-5.68a.53.53 0 0 0-.43-.47s-.89-.19-1.09-.23c-.1-.02-.14-.15-.08-.22c.13-.14.75-.84.75-.84c.16-.17.19-.44.07-.64c-1.29-2.13-3.9-3.19-6.38-2.38c-.71.23-1.33.65-1.87 1.18c.34-.68.54-1.39.54-2.14c0-2.6-1.81-4.76-4.24-5.33a.56.56 0 0 0-.59.26s-.46.79-.56.97c-.05.09-.19.08-.23.01c-.1-.17-.56-.98-.56-.98c-.12-.2-.36-.32-.58-.26c-2.42.56-4.24 2.72-4.24 5.32c0 .75.21 1.46.54 2.14c-.54-.53-1.15-.94-1.86-1.17c-2.48-.81-5.09.25-6.38 2.38c-.12.2-.09.46.07.64c0 0 .61.68.75.83c.07.07.02.21-.07.23l-1.1.23c-.23.05-.41.24-.43.47a5.48 5.48 0 0 0 3.76 5.68c.72.23 1.46.26 2.22.14c-.68.35-1.28.81-1.72 1.42c-1.53 2.1-1.33 4.91.3 6.8c.15.18.41.23.63.13c0 0 .83-.37 1.02-.46c.09-.04.2.04.19.13l-.12 1.12c-.02.23.1.47.32.56c2.3.96 5.03.28 6.56-1.82c.44-.61.69-1.3.82-2.05c.13.75.38 1.45.82 2.05c1.53 2.1 4.26 2.78 6.56 1.82c.22-.09.34-.32.32-.56c0 0-.1-.91-.12-1.11c-.01-.1.1-.18.19-.14l1.03.46c.21.1.48.05.63-.13c1.63-1.89 1.83-4.7.3-6.8c-.44-.61-1.04-1.06-1.72-1.42c.76.12 1.5.09 2.22-.14"/><path fill="#fff" d="M16.51 13.252a1 1 0 1 0-1 0v1.284a2.47 2.47 0 0 0-1.648 1.198l-1.224-.397a1 1 0 1 0-.309.951l1.225.397q-.014.134-.014.27c0 .64.243 1.224.643 1.663l-.758 1.043a1 1 0 1 0 .809.588l.757-1.043a2.46 2.46 0 0 0 2.033.002l.752 1.04a1 1 0 1 0 .81-.587l-.753-1.04a2.46 2.46 0 0 0 .632-1.937l1.215-.395a1 1 0 1 0-.31-.951l-1.214.394a2.47 2.47 0 0 0-1.646-1.196z"/></g></svg>',herb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#44911b" d="m8.018 29.6l1.14.39l1.35-3.898l4.02.418c.33.03.63-.21.66-.54a.605.605 0 0 0-.54-.66l-3.733-.39a13.2 13.2 0 0 1 5.09-6.46l4.143.44c.33.03.63-.21.66-.54a.605.605 0 0 0-.54-.66l-2.904-.31a14.4 14.4 0 0 0 4.024-6.03l.38-1.09a.6.6 0 0 0-.37-.77a.6.6 0 0 0-.77.37l-.38 1.09a13.2 13.2 0 0 1-4.046 5.824l-1.704-3.504a.605.605 0 1 0-1.09.53l1.806 3.716l-.006.004a14.4 14.4 0 0 0-5.282 6.59l-1.308-2.69a.605.605 0 1 0-1.09.53l1.83 3.763z"/><path fill="#86d72f" d="M23.978 2c-3.34 1.63-4.74 5.66-3.11 9a6.727 6.727 0 0 0 3.11-9m-8.19 7.05l-1.81-3.72a4.226 4.226 0 0 0-1.95 5.65l1.81 3.72a4.23 4.23 0 0 0 1.95-5.65m-5.43 6.39l-2.32-4.76c-2.68 1.31-3.8 4.54-2.49 7.22l2.32 4.76a5.41 5.41 0 0 0 2.49-7.22m17.56.03l-4.12-.43c-2.32-.25-4.39 1.44-4.64 3.76l4.12.43c2.32.24 4.4-1.44 4.64-3.76m-8.57 6.13l5.27.55a5.403 5.403 0 0 1-5.94 4.81l-5.27-.55a5.403 5.403 0 0 1 5.94-4.81"/></g></svg>',"fallen-leaf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M27.91 8.01c-7.13 0-12.91 5.78-12.97 12.66l.06 8.57c0 .43.37.77.79.74C23.71 29.57 30 23.03 30 15.01v-7z"/><path fill="#ca0b4a" d="M19.06 24.92a.753.753 0 0 1-.61-1.19l9.42-13.21c.42-.59.64-1.29.64-2.01l-.01-3.75a.749.749 0 1 1 1.5 0l.02 3.75c0 1.04-.32 2.04-.92 2.89l-9.42 13.21c-.15.2-.38.31-.62.31"/><path fill="#e19747" d="M14.52 2.01c-4.56.04-8.39 3.89-8.39 8.61V12h4.63c5.31 0 9.65-4.24 9.92-9.47a.495.495 0 0 0-.49-.53zM6.24 17.02c3.13.02 5.76 2.67 5.76 5.91v1.08H8.82c-3.65 0-6.63-3.04-6.82-6.64c-.01-.19.14-.36.34-.36z"/><path fill="#d3883e" d="M17.23 4.47c.06.09.09.19.09.29c0 .16-.07.31-.21.41L8.37 11.4c-.56.4-1.22.61-1.91.61H4.5c-.28 0-.5-.23-.5-.5s.22-.49.5-.49h1.96c.48 0 .94-.15 1.33-.43l8.75-6.24c.22-.16.53-.1.69.12m-5.37 18.54h.63c.26 0 .49.2.51.46c.01.29-.21.53-.5.53h-.64c-.69 0-1.35-.21-1.91-.61l-4.26-3.04a.495.495 0 0 1-.11-.69c.01 0 .01-.01.01-.01c.16-.22.46-.27.68-.11l4.26 3.04c.39.28.85.43 1.33.43"/></g></svg>',"maple-leaf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="m29.716 17.803l-2.32-.44a.212.212 0 0 1-.14-.31l2.16-3.47a.208.208 0 0 0-.19-.32l-4.07.37c-.14.01-.26-.12-.22-.26l.64-2.24a.208.208 0 0 0-.31-.23l-4.35 2.75c-.15.09-.34-.03-.32-.2l1.28-9.33c.02-.17-.16-.3-.31-.2l-3.29 2c-.1.06-.24.02-.29-.08l-1.86-3.73a.208.208 0 0 0-.37 0l-1.86 3.73c-.05.11-.19.15-.29.09l-3.4-2.01c-.15-.09-.34.04-.31.21l1.63 9.32c.03.17-.16.3-.31.21l-4.61-2.77c-.16-.1-.36.05-.31.23l.65 2.26c.04.14-.07.28-.22.26l-4.07-.37c-.17-.02-.28.17-.19.32l2.16 3.47a.2.2 0 0 1-.14.31l-2.32.44c-.18.03-.23.27-.07.38l6.54 4.29c.17.11.21.33.1.5l-1.93 2.75c-.09.13.04.31.19.25l8.38-3.06c.36-.13.76-.13 1.12 0l8.38 3.06c.15.06.29-.12.19-.25l-1.93-2.75a.36.36 0 0 1 .1-.5l6.54-4.29c.17-.12.12-.36-.06-.39"/><path fill="#ca0b4a" d="M15.946 11.273a1 1 0 0 1 1 1v8.12l5.443-2.8a1 1 0 0 1 .915 1.779l-6.358 3.27v6.33a1 1 0 1 1-2 0v-6.33l-6.357-3.27a1 1 0 0 1 .915-1.779l5.442 2.8v-8.12a1 1 0 0 1 1-1"/></g></svg>',"palm-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.04 8.86H13.6V30h5.44z"/><path fill="#86d72f" d="M5 8.16c-.552 0-1.009-.45-.92-.996A6.165 6.165 0 0 1 10.16 2c3.4 0 6.16 2.75 6.16 6.16zm11.32 0h11.32c.552 0 1.008-.45.92-.996A6.16 6.16 0 0 0 22.48 2c-3.4 0-6.16 2.76-6.16 6.16"/><path fill="#44911b" d="M15.636 7.624c.413.263.954.263 1.367 0a6.15 6.15 0 0 1 7.657.846a6.17 6.17 0 0 1 .647 7.949c-.322.448-.964.444-1.354.054l-6.926-6.926a1 1 0 0 0-1.414 0l-6.926 6.926c-.39.39-1.032.394-1.355-.054A6.15 6.15 0 0 1 7.98 8.47a6.175 6.175 0 0 1 7.656-.846"/><path fill="#d3883e" d="M15.55 11.93a2.16 2.16 0 1 1-4.32 0a2.16 2.16 0 0 1 4.32 0m5.86 1.77a2.16 2.16 0 1 1-4.32 0a2.16 2.16 0 0 1 4.32 0"/></g></svg>',shortcake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="m3.627 29.82l24.63-7.068l.787-.724V7.978l-1.022-1.98l-25.95 7.345v14.944c0 1.225.496 1.785 1.555 1.532"/><path fill="#ffdea7" d="m13.034 2.508l-9.97 9.223c-1.946 1.662-.935 2.811.934 2.399l23.026-6.606c.592-.14.966-.186.966.499v4.02c0 .687.064 1.045-.374 1.183c0 0-22.205 6.694-22.683 6.824s-1.54.328-1.87.28c-.329-.048-.747-.28-.934-.28s-.187.108-.187.623v2.167c0 .163.14.268.14.268a2.48 2.48 0 0 0 1.916.307l23.244-6.73c.374-.094.748.156.748.623v5.298c0 .322.195.339.332.322c.992-.286 1.678-.873 1.678-1.881V8.023c0-.853-.617-2.278-2.01-2.71L16.96 2.725c-1.047-.218-3.072-.88-3.926-.218"/><path fill="#f8312f" d="M12.024 4.517c.126-.628.335-2.402 2.516-2.836l2.356 1.207l.858 2.575C16.95 7.624 15.29 7.47 14.627 7.47h-1.963c-.64 0-1.004-.364-.916-1.033z"/><path fill="#86d72f" d="M16.94 4.372c-.44-.495-.32-1.25-.32-1.25s-.714 0-1.062-.38l-1.193-1.235c-.064-.088 0-.183.088-.248c0 0 .701-.531 1.789.16c.602.444 1.746 1.862 2.036 2.458c.527.9-.146 1.673-.146 1.673c-.077.095-.167.122-.276 0z"/></g></svg>',cupcake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6dc6" d="M20.086 5.002c.06.05.112.096.164.148c.47.45.77 1.09.76 1.8c0 .379-.084.738-.235 1.06h.745c1.93 0 3.5 1.56 3.49 3.5a3.5 3.5 0 0 1-.34 1.503a3.504 3.504 0 0 1 3.35 3.497c0 1.93-1.57 3.5-3.5 3.5H7.5c-1.93 0-3.5-1.57-3.5-3.5a3.504 3.504 0 0 1 3.34-3.496a3.5 3.5 0 0 1 3.17-5.004h.736a2.5 2.5 0 0 1-.236-1.06c0-.76.33-1.43.85-1.89l3.03-2.64c.64-.56 1.6-.56 2.24 0l2.93 2.56z"/><path fill="#5092ff" d="M18.29 9.46c-.2.2-.2.51 0 .71c.19.2.51.2.71 0l.74-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zM9.2 13.43c0-.28.22-.5.5-.5h1.05c.28 0 .5.22.5.5s-.22.5-.5.5H9.7c-.28 0-.5-.22-.5-.5m11.67 4.68c.2-.2.2-.51 0-.71l-.74-.74c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l.74.74c.2.2.51.2.71 0"/><path fill="#efd5ff" d="M15.99 6.7c.2.2.51.2.71 0c.2-.19.2-.51 0-.7l-.74-.75c-.2-.2-.51-.2-.71 0s-.2.51 0 .71zm4.75 5.08c.2-.2.51-.2.71 0l.74.74c.2.2.2.51 0 .71s-.51.2-.71 0l-.74-.74c-.2-.19-.2-.51 0-.71m-8.88 6.33c-.2-.2-.2-.51 0-.71l.74-.74c.2-.2.51-.2.71 0s.2.51 0 .71l-.74.74c-.19.2-.51.2-.71 0"/><path fill="#ffb02e" d="M12.47 9.46c-.2.2-.2.51 0 .71c.19.2.51.2.7 0l.75-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zm-5.23 6.3c-.2.2-.2.51 0 .71c.2.19.51.19.71 0l.74-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zm16.09.71c-.2-.2-.2-.51 0-.71l.74-.74c.2-.2.51-.2.71 0s.2.51 0 .71l-.74.74c-.2.19-.52.19-.71 0m-7.34-2.31c.2.2.51.2.71 0s.2-.51 0-.71l-.74-.74c-.2-.2-.51-.2-.71 0s-.2.51 0 .71z"/><path fill="#fbb8ab" d="M25.24 19.98H6.78a1.77 1.77 0 0 0-1.7 2.28l2.106 6.896c.12.38.48.64.89.64h15.87c.4 0 .76-.26.89-.64l2.114-6.896c.33-1.14-.52-2.28-1.71-2.28"/><path fill="#5092ff" d="M8 30h16c1.04 0 1.391-.646 1.5-1c0 0 1.936-6.072 1.816-6.564c-.074-.26-.394-.291-.49-.091l-.152.35l-.107-.259c-.07-.16-.426-.37-.779 0l-.748.87c-.066.077-.182.1-.229 0l-.344-.792c-.175-.385-.899-.478-1.464.035l-.803.758c-.148.152-.376.181-.52 0l-.702-.87c-.355-.43-1.19-.244-1.726.152l-.855.718c-.207.146-.464.17-.657 0l-.798-.793c-.45-.361-1.371-.49-1.92.035l-.794.758c-.144.111-.448.129-.626 0l-1.041-.87c-.45-.384-1.307-.314-1.686.152l-.572.718c-.093.106-.262.152-.473 0l-.978-.87c-.386-.325-1.121-.331-1.359.152l-.275.61s-.076.26-.214.108l-.717-.87c-.51-.553-.901 0-.978.259l-.152-.352c-.127-.273-.646 0-.459.657L6.5 29c.077.232.504 1 1.5 1"/><path fill="#3f5fff" d="m11.91 30l-.92-4.598a.5.5 0 0 0-.98.196L10.89 30zm9.2 0l.88-4.402a.5.5 0 0 0-.98-.196L20.09 30zm-4.61-4.5V30h-1v-4.5a.5.5 0 0 1 1 0"/></g></svg>',comet:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="m28.148 3.123l-4.41 3.41v-1.03c0-.53-.64-.8-1.02-.42l-3.94 3.94v-1.39c0-.53-.64-.8-1.02-.42l-4.64 4.64v-1.39c0-.53-.64-.8-1.02-.42l-6.05 6.05a7.007 7.007 0 0 0 0 9.9a7.007 7.007 0 0 0 9.9 0l6.06-6.06c.37-.37.11-1.02-.42-1.02h-1.39l4.64-4.64c.37-.37.11-1.02-.42-1.02h-1.39l3.93-3.93c.37-.37.11-1.02-.42-1.02h-1.03l3.4-4.4c.41-.52-.25-1.18-.76-.78"/><path fill="#f8312f" d="M22.018 10.523a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-6 10.5a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-.5-8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-5.5-4.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4.49 1a.99.99 0 1 1-1.98 0a.99.99 0 0 1 1.98 0m2.01-3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></g></svg>',"christmas-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.157 29.988h-6.311c-.536 0-.943-.47-.826-.96l.515-2.13l3.374-1.059l3.56 1.059l.513 2.13c.108.49-.289.96-.825.96"/><path fill="#44911b" d="m14.86 7.19l-2.68 4.792c-.5.89.12 2.018 1.12 2.018h.608C11.747 14 10 15.592 10 17.56c0 .8.71 1.439 1.579 1.439h.144C9.116 19 7 21.227 7 23.97C7 25.65 8.294 27 9.878 27h12.244C23.716 27 25 25.639 25 23.97c.01-2.743-2.106-4.97-4.723-4.97h.144C21.3 19 22 18.352 22 17.56c0-1.959-1.747-3.56-3.908-3.56h.558c1 0 1.62-1.118 1.12-2.018L17.09 7.19c-.49-.89-1.73-.89-2.23 0"/><path fill="#f8312f" d="M18.982 18.306a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58m-8.005 7.081a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58m12.313-1.359a1.29 1.29 0 1 1-2.58 0a1.29 1.29 0 0 1 2.58 0"/><path fill="#fcd53f" d="M18.289 12.016a1.29 1.29 0 1 1-2.58 0a1.29 1.29 0 0 1 2.58 0m-4.313 5.274a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58M16 23.254a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58"/><path fill="#f9c23c" d="m17.005 3.09l.695.106a.43.43 0 0 1 .242.735l-.503.493a.43.43 0 0 0-.125.377l.116.695a.434.434 0 0 1-.628.455l-.619-.329a.43.43 0 0 0-.406 0l-.619.329a.434.434 0 0 1-.628-.455l.116-.695a.43.43 0 0 0-.126-.377l-.502-.493a.43.43 0 0 1 .242-.735l.696-.097a.44.44 0 0 0 .328-.232l.31-.628a.432.432 0 0 1 .773 0l.309.628a.48.48 0 0 0 .329.223"/></g></svg>',unicorn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00d26a" d="m5.398 4.68l.085-.816l.798-.102l2.3 1.635l-.214 1.1l-1.211.38z"/><path fill="#468cfb" d="M8.705 8.813L7.156 6.877l1.424-1.48l2.026 1.441l-.586 1.259z"/><path fill="#f9c23c" d="m6.293 3.77l-.886.92l-1.536-1.92c-.217-.271.125-.633.408-.431z"/><path fill="#8d65c5" d="M10.554 6.801L13.21 8.69c1.083 2.647-1.064 3.045-2.272 2.913l-2.273-2.84z"/><path fill="#5092ff" d="M11.5 6.781c1.219-1.603 6.658-2.529 3.608.431c-1.81 1.76-1.054 3.632-3.374 4.632c-3.906 1.484-5.046-1.719-4.64-2.125s1.317.463 2.422 0c.686-.288.765-1.335 1.984-2.938"/><path fill="#efd5ff" d="m5.784 23.35l8.62-1.88q.223-.054.45-.123c-3.56 4.081-4.006 8.637-4.006 8.637h15.33c2.14 0 3.82-2.082 3.62-4.222c-.598-6.318-2.785-17.951-10.829-18.03c-1.607-1.224-3.467-1.52-4.586-.402c-3.417 3.418-6.626 6.976-8.794 9.38c-.674.748-1.247 1.384-1.695 1.87c-1.89 2.049-1.45 3.73.22 4.58c.51.26 1.11.31 1.67.19"/><path fill="#ff6dc6" d="M29.906 16.969c0-3.657-2.323-4.209-3.218-4.188c.197.792.28 3.3-.97 7S25.5 28.25 26.189 30c2.671 0 3.718-.344 3.718-2.281z"/><path fill="#c790f1" d="M27.375 17.281c1.063-4-1.875-8.156-4.187-8.156c.812 1.854 1.312 6.219 0 8.344C21.692 19.89 21.453 26.5 22.203 30h4.75c-1.7-4.825-.64-8.719.422-12.719"/><path fill="#bca4eb" d="M14.906 21.281c7.719-6.406 3.656-11.968-1.437-13.03c7.187-5.47 8.864 5.416 7.594 9.124c-2.157 2.313-6.157 3.906-6.157 3.906"/><path fill="#5092ff" d="M22.797 29.984h-6.625c-1.59-6.76 3.796-11.262 4.156-16.302c.4-5.73-3.74-6.79-3.74-6.79c-1.32.33 1.01 1.25-1.58 1.25l-.68-1.45l-.687-1.13c1.64-.45 3.842-.827 6.359.407c3.1 1.518 5.753 5.488 4.688 9.562c-1.063 4.063-3.579 6.992-1.891 14.453"/><path fill="#8d65c5" d="M22.797 29.984h-1.413c-.332-1-.608-2.608-.571-4.484c.056-2.898.682-4.505 2.157-8.296L23.438 16c1.45-3.75-.709-7.5-1.688-8.75l.165.024c2.158 1.934 3.608 5.064 2.773 8.257c-.257.981-.598 1.896-.945 2.824c-1.088 2.918-2.226 5.97-.946 11.63m4.578-12.704c.53-1.993.066-4.025-.82-5.562H26.5c.05.282.115.581.184.895c.304 1.39.672 3.07.035 4.855l-.004.01c-.824 2.308-2.464 6.9-2.059 9.49c.215 1.37.624 2.48.867 3.031h1.43c-1.686-4.785-.658-8.654.396-12.62z"/><path fill="#efd5ff" d="M15.578 9.016c-1.86.25-2.384-.703-2.5-2.453c-.115-1.75-.087-2.262-.087-2.262c0-.34.41-.51.65-.27c0 0 3.28 2.594 3.422 3.532c.14.937-.71 1.348-1.485 1.453"/><path fill="#1c1c1c" d="M12 12a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m-7.09 8.301c-.3.3-.8.3-1.1 0l1.1-1.1c.3.31.3.8 0 1.1m3.777 2.416l-1.864.406a1.794 1.794 0 0 0 1.114-1.972a.512.512 0 1 1 1.008-.173c.106.615.003 1.22-.258 1.739"/></g></svg>',butterfly:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M27.5 2c-.62 0-1.19.23-1.63.6L16 11L6.13 2.6C5.69 2.23 5.12 2 4.5 2A2.5 2.5 0 0 0 2 4.5v9.75C2 16.32 3.68 18 5.75 18H8c-3.31 0-6 2.69-6 6s2.69 6 6 6a6 6 0 0 0 5.67-4.04L16 20.39l2.33 5.57A6 6 0 0 0 24 30c3.31 0 6-2.69 6-6s-2.69-6-6-6h2.25c2.07 0 3.75-1.68 3.75-3.75V4.5A2.5 2.5 0 0 0 27.5 2"/><path fill="#ff822d" d="m10.21 13.96l-4.76-2.75c-.54-.32-1.22.08-1.22.71v2c0 1.7 1.38 3.08 3.08 3.08c.62 0 1.22-.25 1.66-.69l1.37-1.37a.62.62 0 0 0-.13-.98m11.81 0l4.76-2.75c.54-.32 1.22.08 1.22.71v2c0 1.7-1.38 3.08-3.08 3.08c-.62 0-1.22-.25-1.66-.69l-1.37-1.37a.62.62 0 0 1 .13-.98M17 16.85l2.77-1.6c.38-.21.86-.15 1.17.16l.8.8c.29.29.08.79-.33.79H17zm-4.54-1.6l2.77 1.6V17h-4.41c-.41 0-.62-.5-.33-.79l.8-.8c.31-.31.79-.37 1.17-.16"/><path fill="#ff6723" d="M4.23 5.98V8.2c0 .71.38 1.37.99 1.72l10.01 5.78V13L5.76 5.25c-.61-.5-1.53-.06-1.53.73m23.77 0V8.2c0 .71-.38 1.37-.99 1.72L17 15.7V13l9.47-7.75c.61-.5 1.53-.06 1.53.73M12.96 19.5H9.64c-.55 0-.82.66-.43 1.04l2.95 2.95c.31.31.83.2 1-.2l.9-2.15c.33-.77-.25-1.64-1.1-1.64m-6.94.46A4.5 4.5 0 0 0 3.5 24c0 2.47 1.95 4.46 4.41 4.5a4.47 4.47 0 0 0 4.12-2.51l.01-.02q.001-.007.005-.01q.004-.004.005-.01c.22-.47.12-1.04-.25-1.41L7.45 20.2c-.38-.38-.95-.48-1.43-.24m.62 7.05a1.64 1.64 0 1 1 0-3.28a1.64 1.64 0 0 1 0 3.28m12.44-7.51h3.32c.55 0 .82.66.43 1.04l-2.95 2.95c-.31.31-.83.2-1-.2l-.9-2.15c-.33-.77.25-1.64 1.1-1.64m6.94.46c1.49.73 2.52 2.27 2.52 4.04c0 2.47-1.95 4.46-4.41 4.5a4.47 4.47 0 0 1-4.12-2.51l-.01-.01q-.001-.007-.005-.01q-.005-.003-.005-.01c-.22-.47-.12-1.04.25-1.41l4.35-4.35c.38-.38.95-.48 1.43-.24m-.62 6.92a1.64 1.64 0 1 0 0-3.28a1.64 1.64 0 0 0 0 3.28"/><path fill="#212121" d="M13.305 2.193a.5.5 0 0 0-.79.614a11.87 11.87 0 0 1 2.495 7.303a.5.5 0 0 0 .99.1a.5.5 0 0 0 .99-.1c0-2.755.93-5.288 2.495-7.303a.5.5 0 0 0-.79-.614A12.86 12.86 0 0 0 16 9.596a12.86 12.86 0 0 0-2.695-7.403"/><path fill="#321b41" d="M16.917 10.778a2 2 0 1 0-1.84-.003a1.45 1.45 0 0 0-.587 1.165v10.61c0 .8.65 1.45 1.45 1.45h.11c.8 0 1.45-.65 1.45-1.45V11.94c0-.475-.23-.897-.583-1.162"/></g></svg>',honeybee:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#212121" d="M5.43 13.36c-.28 0-.5-.22-.5-.5V12c0-.71-.4-1.35-1.04-1.67l-.67-.38a.5.5 0 1 1 .44-.9l.68.38c.98.49 1.59 1.47 1.59 2.57v.86c0 .28-.22.5-.5.5M24.3 27.001h-1.47c-1.02 0-1.84-.83-1.84-1.84v-3.36c0-.41.34-.75.75-.75s.75.34.75.75v3.35c0 .19.15.34.34.34h1.47c.41 0 .75.34.75.75s-.34.76-.75.76m-14.5 1.98c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.65-.65c.36-.36.56-.85.56-1.36v-1.89c0-.41.34-.75.75-.75s.75.34.75.75v1.89c0 .91-.36 1.77-1 2.42l-.65.65c-.15.15-.34.22-.53.22m8.84-.22c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.65-.65c-.36-.36-.56-.85-.56-1.36v-1.89c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.89c0 .91.35 1.77 1 2.42zM28 16.36l1.78.38c.29.06.29.47 0 .54l-1.78.38l-1-.66z"/><path fill="#ffb02e" d="M17 25.001h2.11c.647 0 1.282-.09 1.89-.26L23.5 17L21 9.28a7 7 0 0 0-1.89-.259H17L15 17zM12 9.147a8 8 0 0 0-4.819 2.884L7.5 13.5v7l-.306 1.507A8 8 0 0 0 12 24.875L14.5 17zM24.5 17l1.5-3.377l2 2.755v1.267l-2 2.754z"/><path fill="#533566" d="M16.98 9.021h-3.77c-.42.01-.83.06-1.23.13v15.72c.4.07.81.12 1.23.13h3.77zm-8.61 4.36c0-.75-.6-1.35-1.34-1.36h-.08c-2.74 0-4.95 2.24-4.95 5s2.22 5 4.95 5h.08c.75-.02 1.34-.62 1.34-1.37zm16.67-1.08l.94 1.3v6.8l-.94 1.3c-.94 1.5-2.4 2.57-4.06 3.03V9.271c1.67.47 3.12 1.53 4.06 3.03"/><path fill="#aeddff" d="M14.94 4.74A4.47 4.47 0 0 1 18.57 3c2.39.04 4.35 1.99 4.41 4.38a4.49 4.49 0 0 1-4.49 4.6H10.9c-.55 0-.86-.63-.54-1.07l4.5-6.06c.02-.03.04-.05.06-.08z"/><path fill="#212121" d="M5.44 18.001a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></g></svg>',snail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="M2.5 3.75C2.5 2.79 3.29 2 4.25 2S6 2.79 6 3.75c0 .7-.41 1.3-1 1.58v3.52H3.5V5.33c-.59-.28-1-.88-1-1.58m3.5 0c0 .7.41 1.3 1 1.58v3.52h1.5V5.33c.59-.28 1-.88 1-1.58C9.5 2.79 8.71 2 7.75 2S6 2.79 6 3.75"/><path fill="#212121" d="M5 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/><path fill="#6d4534" d="M18 5c-4.76 0-8.87 2.77-10.81 6.78V21h-.51c1.65 4.66 6.09 8 11.32 8c6.63 0 12-5.37 12-12S24.63 5 18 5"/><path fill="#f3ad61" d="M11.96 23.35c-1.186-.81-1.99-2.306-1.99-3.76v-8.67c0-2.2-1.78-3.98-3.98-3.98A3.973 3.973 0 0 0 2 10.92v12.76c0 3.45 2.8 6.24 6.24 6.24l20.2.08c.86 0 1.56-.7 1.56-1.56v-.42a3.99 3.99 0 0 0-3.194-3.912A8.6 8.6 0 0 1 19.605 28a8.6 8.6 0 0 1-7.644-4.65"/><path fill="#a56953" d="M29 19.28a9.51 9.51 0 1 1-19.02 0a9.51 9.51 0 0 1 19.02 0m-2.78 2.5a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0"/></g></svg>',seedling:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M22.39 6.45c-2.29 0-4.32 1.08-5.63 2.75v-.47h-.01A7.155 7.155 0 0 0 9.61 2H2c0 3.95 3.2 7.15 7.15 7.15h5.19v12.46h2.42v-8h6.09c3.95 0 7.15-3.2 7.15-7.15h-7.61z"/><path fill="#6d4534" d="M15.55 21a8.99 8.99 0 0 0-8.99 8.99h17.99c0-4.965-4.025-8.99-9-8.99"/></g></svg>',crab:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M12.52 6.48h-.42V5H14c0 .82-.66 1.48-1.48 1.48m0 .33h-.42v1.48H14c0-.82-.66-1.48-1.48-1.48m6.96-.33H20V5h-2c0 .82.66 1.48 1.48 1.48m0 .33H20v1.48h-2c0-.82.66-1.48 1.48-1.48M7.618 12.739a.98.98 0 1 0-.956-.006a.87.87 0 0 0-.394.727a3.65 3.65 0 0 0 3.647 3.648a.868.868 0 1 0 0-1.736a1.913 1.913 0 0 1-1.912-1.912c0-.3-.153-.566-.385-.721m16.837 6.921c-.64.03-.98-.73-.53-1.18l4.33-4.33c.45-.45 1.21-.1 1.18.53c-.05 1.26-.56 2.5-1.52 3.46s-2.2 1.47-3.46 1.52m-1.26.66c-.64 0-.93.78-.46 1.21a5.21 5.21 0 0 0 7.04 0c.47-.43.17-1.21-.46-1.21zm-2.785 2.925a.7.7 0 0 1 .675-.895c1.26.01 2.52.47 3.51 1.4s1.55 2.15 1.65 3.4c.05.63-.7 1-1.16.57l-4.479-4.17c.432.726.696 1.565.73 2.47c.05 1.36-.42 2.61-1.24 3.57c-.41.48-1.2.22-1.22-.42l-.23-6.11a.695.695 0 0 1 1.19-.51q.316.323.573.695M9.205 21.59c.46-.43.17-1.2-.46-1.2h-6.06c-.63 0-.92.77-.46 1.2a5.156 5.156 0 0 0 6.98 0m-1.71-1.86c.63.03.97-.72.52-1.17l-4.29-4.3c-.45-.44-1.2-.1-1.17.53c.05 1.25.56 2.48 1.51 3.43s2.18 1.46 3.43 1.51m3.33 2.66c.63 0 .94.76.48 1.19l-4.44 4.14c-.46.42-1.2.06-1.15-.57c.1-1.25.64-2.46 1.63-3.38c.98-.91 2.23-1.37 3.48-1.38m1.33.28a.695.695 0 0 1 1.19.51l-.23 6.11c-.02.64-.81.9-1.22.42a5.17 5.17 0 0 1-1.24-3.57a5.22 5.22 0 0 1 1.5-3.47m13.418-9.21a.87.87 0 0 0-.39-.724a.98.98 0 1 0-.956 0a.87.87 0 0 0-.39.724a1.91 1.91 0 0 1-1.912 1.912a.868.868 0 0 0 0 1.736a3.65 3.65 0 0 0 3.648-3.648"/><path fill="#533566" d="M13 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/><path fill="#f8312f" d="M8.316 11.5H6C6 7.912 8.902 5 12.5 5v2.326A4.18 4.18 0 0 1 8.316 11.5m15.368 0H26C26 7.912 23.098 5 19.5 5v2.326a4.18 4.18 0 0 0 4.184 4.174M16 27c4.97 0 9-3.901 9-8.713C25 13.465 20.97 13 16 13s-9 .475-9 5.287S11.03 27 16 27"/></g></svg>',cookie:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M2 16c0 9.29 6.27 14 14 14s14-4.74 14-14c0-9.43-6.27-14-14-14S2 6.43 2 16"/><path fill="#6d4534" d="m19.89 8.32l.62.04a.95.95 0 0 0 1.01-1.01l-.04-.61a1.55 1.55 0 0 0-.22-.71a1.51 1.51 0 0 0-1.85-.59c-.8.34-1.14 1.28-.76 2.05c.23.5.72.79 1.24.83m7.03 6.29l.04-.62a.95.95 0 0 0-1.01-1.01l-.61.04c-.24.01-.49.09-.71.22a1.51 1.51 0 0 0-.59 1.85c.34.8 1.28 1.14 2.05.76c.5-.23.79-.72.83-1.24m-16.3 9.91l.05-.77c.04-.64.41-1.24 1.03-1.55a1.85 1.85 0 0 1 2.54.94c.35.84.04 1.82-.73 2.3c-.28.17-.58.26-.88.28l-.76.05c-.71.05-1.3-.54-1.25-1.25m9.78-9.33l.03-.46c.1-1.51-1.15-2.76-2.67-2.67l-.45.03c-.45.02-.9.15-1.32.4a2.93 2.93 0 0 0-1.22 3.62c.65 1.59 2.5 2.26 4.01 1.51c.98-.47 1.56-1.42 1.62-2.43M7.65 9l.03.42c.06.91.59 1.77 1.47 2.21c1.37.68 3.05.07 3.64-1.37c.49-1.21.02-2.63-1.11-3.29a2.65 2.65 0 0 0-1.2-.36l-.41-.03C8.7 6.49 7.57 7.63 7.65 9m16.61 13.82l.02.36c.08 1.17-.9 2.15-2.07 2.07l-.35-.02c-.35-.02-.7-.12-1.03-.31a2.28 2.28 0 0 1-.95-2.81A2.27 2.27 0 0 1 23 20.94c.76.36 1.21 1.09 1.26 1.88m-18.39-5.9l.04.62c.03.52.33 1.01.83 1.24c.77.38 1.71.04 2.05-.76c.28-.67.03-1.46-.59-1.85a1.55 1.55 0 0 0-.71-.22l-.61-.04a.95.95 0 0 0-1.01 1.01"/></g></svg>',"ice-cream":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="M26.778 4.439a.875.875 0 0 0-1.376-1.081l-6.16 7.842a.875.875 0 0 0 .868 1.397a.877.877 0 0 0 1.284.602l8.049-4.467a.875.875 0 1 0-.85-1.53l-7.066 3.922z"/><path fill="#6d4534" d="M15.59 17.75a6.75 6.75 0 1 1-13.5 0a6.75 6.75 0 0 1 13.5 0"/><path fill="#ff8687" d="M29.01 17.625a6.75 6.75 0 1 1-13.5 0a6.75 6.75 0 0 1 13.5 0"/><path fill="#feefc2" d="M24.078 14.922a8.078 8.078 0 1 1-16.156 0a8.078 8.078 0 0 1 16.156 0"/><path fill="#00a6ed" d="M2.722 21.042h25.494c.622 0 .97.71.58 1.194c-.82 1.02-1.98 2.413-2.655 3c-.726.63-2.171 1.55-3.104 2.124a4.16 4.16 0 0 0-1.396 1.399l-.135.224a2 2 0 0 1-1.715.97h-8.644a2 2 0 0 1-1.715-.97l-.134-.224a4.2 4.2 0 0 0-1.397-1.4c-.933-.573-2.378-1.494-3.103-2.124c-.675-.585-1.835-1.978-2.656-2.999a.734.734 0 0 1 .58-1.195"/><path fill="#f8312f" d="M17.95 5.983c0 1.096-.725 1.863-1.984 1.863s-1.983-.767-1.983-1.863a1.983 1.983 0 1 1 3.966 0"/></g></svg>',"cloud-with-snow":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M27.988 3.843C24.085.04 17.863.056 13.998 3.873A5.04 5.04 0 0 0 7.982 5.94A7.47 7.47 0 0 0 1 13.396c0 1.756.612 3.373 1.623 4.652A7.5 7.5 0 0 0 8.593 21h12.715a9.39 9.39 0 0 0 7.648-3.933c3.017-3.96 2.693-9.652-.968-13.224"/><path fill="#00a6ed" d="M10.849 23.03a.77.77 0 0 1 1.303 0l.32.509a.77.77 0 0 0 .737.354l.598-.066a.77.77 0 0 1 .812 1.019l-.197.568a.77.77 0 0 0 .181.796l.425.427a.77.77 0 0 1-.29 1.27l-.568.2a.77.77 0 0 0-.509.639l-.069.597a.77.77 0 0 1-1.174.565l-.51-.318a.77.77 0 0 0-.816 0l-.51.318a.77.77 0 0 1-1.174-.565l-.07-.597a.77.77 0 0 0-.508-.639l-.567-.2a.77.77 0 0 1-.29-1.27l.424-.427a.77.77 0 0 0 .181-.796l-.197-.568a.77.77 0 0 1 .813-1.019l.598.066a.77.77 0 0 0 .735-.354zm10.335-2.364a.588.588 0 0 0-.946-.301a.59.59 0 0 1-.616.088a.588.588 0 0 0-.826.553a.59.59 0 0 1-.315.536a.588.588 0 0 0-.083.99c.18.135.266.36.223.581a.588.588 0 0 0 .723.682a.59.59 0 0 1 .593.188c.28.329.806.254.983-.14a.59.59 0 0 1 .517-.346a.588.588 0 0 0 .504-.857a.59.59 0 0 1 .052-.62a.588.588 0 0 0-.356-.927a.59.59 0 0 1-.453-.427"/><path fill="#f3eef8" d="M14.575 4.71c3.467-3.557 9.158-3.617 12.715-.15c3.297 3.216 3.587 8.346.862 11.913A8.39 8.39 0 0 1 21.308 20H8.593a6.5 6.5 0 0 1-5.18-2.565A6.48 6.48 0 0 1 2 13.397a6.47 6.47 0 0 1 6.584-6.472a4.04 4.04 0 0 1 5.65-1.847q.164-.188.341-.368"/></g></svg>',"magic-wand":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#433b6b" d="m5 29l-2-2l16-16l2 2z"/><path fill="#f4f4f4" d="m18 12l2 2l1.674-1.667c.435-.445.435-1.24 0-1.675l-.33-.331C20.9 9.89 20 10 19.5 10.5zM2.338 29.252l.41.41c.44.452 1.17.452 1.61-.01L6 28.007L4 26l-1.662 1.627a1.146 1.146 0 0 0 0 1.625"/><path fill="#f9c23c" d="M27.87 4.423c.131.284.352.508.644.635l1.215.527a.453.453 0 0 1 0 .83l-1.205.527a1.22 1.22 0 0 0-.643.635l-.954 2.167c-.17.341-.683.341-.854 0l-.954-2.167a1.26 1.26 0 0 0-.643-.635l-1.205-.527a.453.453 0 0 1 0-.83l1.205-.527a1.22 1.22 0 0 0 .643-.635l.954-2.167c.17-.341.683-.341.854 0zm-11.429 1.18a.88.88 0 0 1-.458-.438l-.676-1.49c-.125-.233-.49-.233-.614 0l-.676 1.49a.85.85 0 0 1-.458.438l-.864.36a.309.309 0 0 0 0 .574l.864.36a.9.9 0 0 1 .458.438l.676 1.49c.125.233.49.233.614 0l.676-1.49a.85.85 0 0 1 .458-.438l.864-.36a.309.309 0 0 0 0-.574zm9.51 10.695a.95.95 0 0 1-.46-.48l-.686-1.622c-.128-.261-.492-.261-.61 0l-.685 1.623a.95.95 0 0 1-.46.479l-.857.392c-.257.13-.257.5 0 .62l.856.392a.95.95 0 0 1 .46.48l.686 1.622c.128.261.492.261.61 0l.685-1.622a.95.95 0 0 1 .46-.48l.857-.392c.257-.13.257-.5 0-.62zM12 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m18-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M19 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>',chestnut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M29.68 22.173L16 17L2.32 22.172c1.04 3.97 4.52 7.28 9.39 7.28h8.57c4.88 0 8.36-3.31 9.4-7.28"/><path fill="#6d4534" d="M29.68 22.173c.83-3.16.11-6.75-2.69-9.42l-9.59-9.19c-.78-.75-2.02-.75-2.8 0l-9.59 9.19c-2.8 2.68-3.51 6.26-2.69 9.42z"/></g></svg>'},l3={pause:'<path d="M9 6v12M15 6v12"/>',play:'<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>',ff:'<path d="M4 6.5v11l7.5-5.5zM12.5 6.5v11l7.5-5.5z" fill="currentColor"/>',undo:'<path d="M9 13.5L4 8.5l5-5"/><path d="M4.5 8.5H14a5.5 5.5 0 010 11h-3.5"/>',shuffle:'<path d="M3.5 7h3.2c2.2 0 3.4 1 4.6 3l1.4 2.4c1.2 2 2.4 3 4.6 3h3.2"/><path d="M3.5 16.4h3.2c1.4 0 2.4-.4 3.2-1.2M13.7 8.2c.8-.8 1.8-1.2 3.2-1.2h3.6"/><path d="M18 4.5l2.5 2.5L18 9.5M18 13l2.5 2.5L18 18"/>',plus:'<path d="M12 5v14M5 12h14"/>',close:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',restart:'<path d="M19 12a7 7 0 11-2.05-4.95"/><path d="M19.5 4.5v4h-4"/>',map:'<path d="M3.5 6.5l5-2 7 2.5 5-2v13l-5 2-7-2.5-5 2z"/><path d="M8.5 4.5v13M15.5 7v13"/>',home:'<path d="M4 11.5L12 4.5l8 7"/><path d="M6.5 10v9.5h11V10"/><path d="M10 19.5v-5h4v5"/>',back:'<path d="M14.5 5.5L8 12l6.5 6.5"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',slot:'<rect x="4" y="7" width="12" height="12" rx="3"/><path d="M19.5 3.5v6M16.5 6.5h6"/>'};function Re(s,t=24){return`<svg class="ico" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${l3[s]??""}</svg>`}function oe(s,t=28,e=""){return o3[s].replace("<svg ",`<svg class="emo ${e}" width="${t}" height="${t}" aria-hidden="true" `)}const c3={title:{ru:"Пиксельный пикник",en:"Pixel Picnic"},level:{ru:"Уровень {n}",en:"Level {n}"},play:{ru:"Играть",en:"Play"},next:{ru:"Дальше",en:"Next"},retry:{ru:"Заново",en:"Retry"},restart:{ru:"Начать заново",en:"Restart"},resume:{ru:"Продолжить",en:"Resume"},map:{ru:"Карта",en:"Map"},toMap:{ru:"К карте уровней",en:"Back to the map"},leaveLevel:{ru:"Выйти к карте уровней? Этот уровень начнётся заново.",en:"Leave for the level map? This level will start over."},leave:{ru:"Выйти",en:"Leave"},stay:{ru:"Играть дальше",en:"Keep playing"},newVersion:{ru:"Вышла новая версия — обновляю…",en:"A new version is out — reloading…"},album:{ru:"Альбом",en:"Album"},settings:{ru:"Настройки",en:"Settings"},paused:{ru:"Пауза",en:"Paused"},hard:{ru:"Сложный",en:"Hard"},superhard:{ru:"Очень сложный",en:"Super hard"},hardLevel:{ru:"Сложный уровень!",en:"Hard level!"},superhardLevel:{ru:"Очень сложный уровень!",en:"Super hard level!"},win1:{ru:"Отлично!",en:"Great!"},win2:{ru:"Великолепно!",en:"Awesome!"},win3:{ru:"Идеально!",en:"Perfect!"},addedAlbum:{ru:"Картинка добавлена в альбом",en:"Picture added to your album"},stuckTitle:{ru:"Колония застряла!",en:"The colony is stuck!"},stuckText:{ru:"Во всех слотах коробки, чьи кубики сейчас недоступны. Используй бустер или начни заново.",en:"Every slot holds a color the ants can’t reach yet. Use a booster or try again."},giveUp:{ru:"Сдаться",en:"Give up"},music:{ru:"Музыка",en:"Music"},sounds:{ru:"Звуки",en:"Sounds"},language:{ru:"Язык",en:"Language"},resetProgress:{ru:"Сбросить прогресс",en:"Reset progress"},resetConfirm:{ru:"Точно сбросить весь прогресс?",en:"Really reset all progress?"},credits:{ru:"Авторы и лицензии",en:"Credits & licenses"},close:{ru:"Закрыть",en:"Close"},buy:{ru:"Купить",en:"Buy"},notEnough:{ru:"Не хватает монет",en:"Not enough coins"},locked:{ru:"Откроется на уровне {n}",en:"Unlocks at level {n}"},world:{ru:"Мир {n}",en:"World {n}"},collected:{ru:"Собрано {a} из {b}",en:"Collected {a} of {b}"},speed:{ru:"Скорость",en:"Speed"},toastBlocked:{ru:"Сначала возьми коробку перед ней",en:"Take the box in front first"},toastFrozen:{ru:"Коробка заморожена — растает через несколько ходов",en:"Frozen — it thaws after a few taps"},toastSlots:{ru:"Нет свободных слотов",en:"No free slots"},toastLink:{ru:"Связанные коробки берутся только вместе",en:"Linked boxes must be taken together"},toastNoHint:{ru:"Отсюда уже не выбраться… Попробуй «Отменить» или «+Слот»",en:"No way out from here… Try Undo or +Slot"},toastGrab:{ru:"Выбери любую коробку в очереди",en:"Pick any box in the queue"},toastLinkSlots:{ru:"Для связанных коробок нужно два свободных слота",en:"Linked boxes need two free slots"},levelShort:{ru:"ур. {n}",en:"lv {n}"},booster_hint:{ru:"Подсказка",en:"Hint"},booster_undo:{ru:"Отменить",en:"Undo"},booster_slot:{ru:"+Слот",en:"+Slot"},booster_shuffle:{ru:"Перемешать",en:"Shuffle"},booster_grab:{ru:"Магнит",en:"Magnet"},boosterDesc_hint:{ru:"Солвер покажет лучшую следующую коробку.",en:"The solver shows the best next box."},boosterDesc_undo:{ru:"Отменяет последний ход.",en:"Takes back your last move."},boosterDesc_slot:{ru:"Добавляет ещё один слот до конца уровня.",en:"Adds one more slot for this level."},boosterDesc_shuffle:{ru:"Перемешивает очередь так, чтобы уровень можно было пройти.",en:"Reshuffles the queue into a solvable order."},boosterDesc_grab:{ru:"Достаёт любую коробку из глубины очереди.",en:"Pulls any box out of the queue."},newMechanic:{ru:"Новинка!",en:"New!"},gotIt:{ru:"Понятно!",en:"Got it!"},tutorial1:{ru:"Нажми на коробку — муравьи выбегут и съедят кубики своего цвета",en:"Tap a box — its ants will run out and eat cubes of their color"},tutorial2:{ru:"Муравьи заходят в рамку с любой стороны и берут кубик, если к нему есть свободный проход",en:"Ants come into the frame from any side and take a cube if there is a free way to it"},debug:{ru:"Режим отладки",en:"Debug mode"},debugHint:{ru:"Все уровни открыты, видна сложность",en:"All levels unlocked, difficulty visible"},debugLevels:{ru:"Все уровни",en:"All levels"},autoSolve:{ru:"Автопрохождение",en:"Auto-solve"},skipLevel:{ru:"Пропустить уровень",en:"Skip level"},on:{ru:"Вкл",en:"On"},auto:{ru:"Авто",en:"Auto"},shop:{ru:"Магазин",en:"Shop"},shopHouses:{ru:"Домики",en:"Houses"},shopAnts:{ru:"Муравьи",en:"Ants"},shopBoosters:{ru:"Бустеры",en:"Boosters"},wear:{ru:"Выбрать",en:"Use"},worn:{ru:"Выбрано",en:"In use"},bought:{ru:"Куплено!",en:"Bought!"},rewardLevel:{ru:"Уровень пройден",en:"Level cleared"},rewardHard:{ru:"Сложный уровень",en:"Hard level"},rewardSuperhard:{ru:"Очень сложный уровень",en:"Super hard level"},rewardReplay:{ru:"Повторное прохождение",en:"Replay"},rewardStars:{ru:"Звёзды",en:"Stars"},rewardFast:{ru:"Быстро!",en:"Quick!"},nightMode:{ru:"Ночной режим",en:"Night mode"},off:{ru:"Выкл",en:"Off"},noSolution:{ru:"Солвер не нашёл решения из этой позиции",en:"The solver found no solution from here"},tutorial3:{ru:"Не забивай слоты цветами, до которых муравьям не добраться!",en:"Don’t fill the slots with colors the ants can’t reach!"},mech_hidden_t:{ru:"Коробки-сюрпризы",en:"Mystery boxes"},mech_hidden_d:{ru:"Цвет коробки с «?» откроется, только когда она окажется первой в своём столбце.",en:"A “?” box reveals its color only when it reaches the front of its column."},mech_link_t:{ru:"Связанные коробки",en:"Linked boxes"},mech_link_d:{ru:"Коробки на цепочке берутся только вместе и занимают два слота.",en:"Chained boxes are taken together and need two free slots."},mech_fence_t:{ru:"Заборчик",en:"Fence"},mech_fence_d:{ru:"Через заборчик муравьи не пролезут — заходить придётся с других сторон рамки.",en:"Ants can’t get past a fence — they have to come in from the other sides of the frame."},mech_frozen_t:{ru:"Лёд",en:"Ice"},mech_frozen_d:{ru:"Замороженную коробку нельзя взять. Число на льду — сколько ходов осталось до оттаивания.",en:"A frozen box can’t be taken. The number shows how many taps until it thaws."},mech_gate_t:{ru:"Калитка",en:"Gate"},mech_gate_d:{ru:"В заборе есть калитка с оранжевыми столбиками — муравьи пройдут только через неё.",en:"The fence has a gate between orange-topped posts — that’s the only way in."},boosterUnlocked:{ru:"Новый бустер!",en:"New booster!"},free:{ru:"бесплатно ×{n}",en:"×{n} free"},endless:{ru:"Бесконечный режим",en:"Endless mode"},loading:{ru:"Муравьи готовятся…",en:"Ants are getting ready…"},progress:{ru:"Съедено",en:"Eaten"},licenseText:{ru:"Картинки уровней созданы из эмодзи: Microsoft Fluent Emoji (MIT), Twemoji (© Twitter, Inc. и участники, CC BY 4.0, https://creativecommons.org/licenses/by/4.0/) и Google Noto Emoji (Apache 2.0). Шрифт Nunito (SIL OFL 1.1). 3D — three.js (MIT). Музыка и звуки синтезируются в браузере.",en:"Level pictures are made from emoji: Microsoft Fluent Emoji (MIT), Twemoji (© Twitter, Inc. and contributors, CC BY 4.0, https://creativecommons.org/licenses/by/4.0/) and Google Noto Emoji (Apache 2.0). Font: Nunito (SIL OFL 1.1). 3D: three.js (MIT). Music and sounds are synthesized in the browser."}};let ir=(navigator.language||"en").toLowerCase().startsWith("ru")?"ru":"en";function ya(s){ir=s,document.documentElement.lang=s}function jc(){return ir}function ct(s,t){let e=c3[s][ir];if(t)for(const[n,i]of Object.entries(t))e=e.replace(`{${n}}`,String(i));return e}function Di(s){return s?s[ir]:""}const h3='<svg class="emo" width="SIZE" height="SIZE" viewBox="0 0 36 36" aria-hidden="true"><path d="M27 24A10 10 0 0 0 10 13" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M27 24A10 10 0 0 0 10 13" fill="none" stroke="#ff8a3d" stroke-width="5" stroke-linecap="round"/><path d="M7.5 20.5L3.8 10.8 14.6 11.6Z" fill="#ff8a3d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/></svg>',u3='<svg class="emo" width="SIZE" height="SIZE" viewBox="0 0 36 36" aria-hidden="true"><rect x="1.5" y="10" width="33" height="17" rx="5" fill="#e9c58c" stroke="#fff" stroke-width="1.5"/><rect x="5" y="13.5" width="6.5" height="10" rx="2" fill="#c79a5b"/><rect x="13.5" y="13.5" width="6.5" height="10" rx="2" fill="#c79a5b"/><rect x="21.5" y="11.5" width="11" height="14" rx="3" fill="#45c03a" stroke="#fff" stroke-width="1.2"/><path d="M27 15v7M23.5 18.5h7" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>';function m0(s,t=34){return s==="undo"?h3.replaceAll("SIZE",String(t)):s==="slot"?u3.replaceAll("SIZE",String(Math.round(t*1.06))):oe({hint:"light-bulb",undo:"light-bulb",slot:"light-bulb",shuffle:"game-die",grab:"magnet"}[s],t)}class f3{el;top;dock;title;tierEl;fill;progAnt;speedBtn;boosterBtns=new Map;tutorialEl=null;debugEl;handEl=null;sizeObserver=null;constructor(t,e){this.el=et("div",{class:"hud"});const n=et("button",{class:"btn round",html:Re("pause",26),attrs:{"aria-label":"pause"}});n.addEventListener("click",()=>{Rt.play("button"),e.onPause()}),this.title=et("div",{class:"level-name"}),this.tierEl=et("div",{class:"tier hidden"}),this.fill=et("div",{class:"progress-fill"}),this.progAnt=et("span",{html:oe("ant",28)}),this.progAnt.style.position="absolute",this.progAnt.style.left="0%";const i=et("div",{class:"progress"},this.fill,this.progAnt);this.progAnt.firstElementChild?.classList.add("prog-ant"),this.speedBtn=et("button",{class:"btn round white speed-btn",attrs:{"aria-label":ct("speed")}}),this.speedBtn.addEventListener("click",()=>{Rt.play("button"),e.onSpeed()});const a=et("button",{class:"btn round white home-btn",html:Re("home",24),attrs:{"aria-label":ct("toMap")}});a.addEventListener("click",()=>{Rt.play("button"),e.onHome()}),this.debugEl=et("div",{class:"hud-debug hidden"}),this.top=et("div",{class:"hud-top"},et("div",{class:"hud-left"},n,a),et("div",{class:"hud-title"},et("div",{class:"title-row"},this.title,this.tierEl),i,this.debugEl),this.speedBtn),this.dock=et("div",{class:"boosters"});for(const r of si){const o=et("button",{class:"booster",attrs:{"aria-label":ct(`booster_${r}`)}});o.addEventListener("click",c=>{c.stopPropagation(),Rt.unlock(),e.onBooster(r)}),this.boosterBtns.set(r,o),this.dock.append(o)}this.el.append(this.top,this.dock),t.append(this.el),this.setSpeed(1)}setLevel(t,e){this.title.textContent=ct("level",{n:t}),this.tierEl.className="tier "+e+(e==="normal"?" hidden":""),this.tierEl.innerHTML=oe(e==="superhard"?"skull":"fire",16),this.tierEl.title=ct(e==="superhard"?"superhard":"hard")}setDebug(t){this.debugEl.classList.toggle("hidden",!t),this.debugEl.textContent=t??""}setProgress(t,e){const n=e?t/e:0;this.fill.style.width=`calc(${(n*100).toFixed(2)}% - 4px)`,this.progAnt.style.left=`${(n*100).toFixed(2)}%`}setSpeed(t){this.speedBtn.innerHTML=`${Re(t===1?"play":"ff",22)}<span>${t}x</span>`}setBoosters(t){for(const e of si){const n=this.boosterBtns.get(e),i=t[e];n.className=`booster b-${e}`+(i.locked?" locked":"")+(i.active?" active":"")+(!i.locked&&!i.usable?" dim":"");const a=`<span class="bicon">${m0(e)}</span><span class="bname">${ct(`booster_${e}`)}</span>`;i.locked?n.innerHTML=a+oe("locked",24,"lock")+`<span class="lvl">${ct("levelShort",{n:i.unlockAt})}</span>`:n.innerHTML=a+(i.count>0?`<span class="count">${i.count}</span>`:'<span class="plus">+</span>')}}boosterRect(t){return this.boosterBtns.get(t).getBoundingClientRect()}insets(){const t=this.top.getBoundingClientRect(),e=this.dock.getBoundingClientRect();return{top:t.bottom+6,bottom:window.innerHeight-e.top+8}}banner(t,e){const n=et("div",{class:"banner "+e,html:`${oe(e==="superhard"?"skull":"fire",34)} ${t}`});this.el.append(n),setTimeout(()=>n.remove(),2200)}showTutorial(t,e,n){this.hideTutorial(),this.tutorialEl=et("div",{class:"tutorial",text:t}),this.tutorialEl.style.top=`${e}px`,this.el.append(this.tutorialEl),n&&(this.handEl=et("div",{class:"hand",html:d3}),this.handEl.style.left=`${n.x-8}px`,this.handEl.style.top=`${n.y-4}px`,this.el.append(this.handEl))}hideTutorial(){this.tutorialEl?.remove(),this.handEl?.remove(),this.tutorialEl=this.handEl=null}observe(t){this.sizeObserver?.disconnect(),this.sizeObserver=new ResizeObserver(()=>t()),this.sizeObserver.observe(this.top),this.sizeObserver.observe(this.dock)}destroy(){this.sizeObserver?.disconnect(),this.el.remove()}}const d3='<svg viewBox="0 0 64 64" width="56" height="56"><path d="M22 30V12a5 5 0 0110 0v14l1-1a5 5 0 017 1l1 1a5 5 0 017 2 5 5 0 016 4v12c0 9-7 15-16 15h-4c-6 0-10-3-13-8l-7-12a4.5 4.5 0 017-5z" fill="#fff" stroke="#3b2a55" stroke-width="3.2" stroke-linejoin="round"/><path d="M33 26v8M41 28v7M48 32v5" stroke="#3b2a55" stroke-width="3" stroke-linecap="round"/></svg>';function sr(s,t,e={}){const n=r0(s),i=document.createElement("canvas"),a=Math.min(2,window.devicePixelRatio||1),r=Math.max(s.w,s.h),o=Math.max(1,Math.floor(t*a/r));i.width=s.w*o,i.height=s.h*o,i.style.width=`${s.w*o/a}px`,i.style.height=`${s.h*o/a}px`;const c=i.getContext("2d");e.bg&&(c.fillStyle=e.bg,c.fillRect(0,0,i.width,i.height));const l=e.rounded!==!1&&o>=5?o*.22:0,h=o>=5?Math.max(.5,o*.06):0;for(let f=0;f<s.h;f++)for(let u=0;u<s.w;u++){const d=n[f*s.w+u];d<0||(c.fillStyle=s.palette[d],l>0?(c.beginPath(),c.roundRect(u*o+h,f*o+h,o-h*2,o-h*2,l),c.fill(),c.fillStyle="rgba(255,255,255,0.18)",c.fillRect(u*o+h+l*.5,f*o+h+l*.3,o-h*2-l,Math.max(1,o*.12))):c.fillRect(u*o,f*o,o,o))}return i}const Ts=112,As=150,th=190,p3=150,eh=[["four-leaf-clover","tulip","lady-beetle","sunflower","honeybee","blossom","butterfly","seedling"],["mushroom","evergreen-tree","deciduous-tree","fallen-leaf","maple-leaf","snail","chestnut","herb"],["spiral-shell","tropical-fish","palm-tree","crab","sun"],["lollipop","candy","doughnut","cupcake","shortcake","cookie","ice-cream"],["crescent-moon","ringed-planet","rocket","comet","shooting-star","glowing-star"],["snowman","christmas-tree","snowflake","cloud-with-snow","wrapped-gift"],["crystal-ball","castle","unicorn","magic-wand","gem-stone","sparkles","crown"]],nh=new Map;function m3(s){const t=oi(s);let e=nh.get(t.id);return e||(e=p0(t,512,99+s).toDataURL("image/jpeg",.86),nh.set(t.id,e)),e}class g3{el;scroll;inner;coinsEl;playBtn;debugBtn;cb;data;width=400;height=0;constructor(t,e){this.cb=e,this.el=et("div",{class:"map"}),this.scroll=et("div",{class:"map-scroll"}),this.inner=et("div",{class:"map-inner"}),this.scroll.append(this.inner),this.coinsEl=et("span");const n=et("div",{class:"pill",html:oe("coin",34)},this.coinsEl),i=et("button",{class:"btn round white",html:oe("framed-picture",30),attrs:{"aria-label":ct("album")}});i.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),e.onAlbum()});const a=et("button",{class:"btn round white",html:oe("gear",30),attrs:{"aria-label":ct("settings")}});a.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),e.onSettings()}),this.debugBtn=et("button",{class:"btn round white hidden",html:oe("lady-beetle",30),attrs:{"aria-label":ct("debugLevels")}}),this.debugBtn.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),e.onDebug()});const r=et("button",{class:"btn round white",html:oe("shopping-bags",30),attrs:{"aria-label":ct("shop")}});r.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),e.onShop()});const o=et("div",{class:"topbar"},n,et("div",{class:"right"},this.debugBtn,r,i,a));this.playBtn=$a("","big green",()=>this.cb.onPlay(this.data.unlocked));const c=et("div",{class:"play-dock"},this.playBtn);this.el.append(this.scroll,o,c),t.append(this.el)}show(t){this.data=t,this.el.classList.remove("hidden"),this.render()}hide(){this.el.classList.add("hidden")}get visible(){return!this.el.classList.contains("hidden")}refreshTop(){this.coinsEl.textContent=String(this.data.coins)}nodeY(t){const e=Fs(t),n=th+(t-1)*Ts+(e+1)*As-As*.5;return this.height-n}nodeX(t){const e=Math.min(120,this.width*.28);return this.width/2+Math.sin(t*.85)*e+Math.sin(t*.31)*e*.25}render(){const t=this.data;this.refreshTop(),this.debugBtn.classList.toggle("hidden",!t.debug),this.playBtn.innerHTML=`${Re("play",26)} ${ct("level",{n:t.unlocked})}`;const e=t.debug?Math.max(t.total,t.unlocked+6):Math.max(t.unlocked+6,Math.min(t.total,ai)),n=Fs(e)+1,i=Math.min(n*ai,Math.max(e,1));this.width=Math.min(520,window.innerWidth),this.height=th+i*Ts+n*As+p3;const a=this.inner;a.innerHTML="",a.style.width=this.width+"px",a.style.height=this.height+"px",this.el.style.background=oi(Fs(t.unlocked)).bg;for(let l=0;l<n;l++){const h=l*ai+1,f=(l+1)*ai,u=l===n-1?0:this.nodeY(f)-Ts/2-As*.5,d=l===0?this.height:this.nodeY(h)+Ts/2+As*.5,g=et("div",{class:"world-bg"});if(g.style.top=u+"px",g.style.height=d-u+"px",g.style.left="calc(50% - 50vw)",g.style.width="100vw",g.style.backgroundImage=`url(${m3(l)})`,g.style.backgroundColor=oi(l).ground.base,a.append(g),l>0){const S=et("div",{class:"world-fade"});S.style.top=d-80+"px",S.style.left="calc(50% - 50vw)",S.style.width="100vw",S.style.background=`linear-gradient(180deg, ${oi(l).ground.base}00, ${oi(l).ground.base}cc 50%, ${oi(l-1).ground.base}00)`,a.append(S)}const _=Cn[l%Cn.length],m=h>t.total&&t.total>0,p=et("div",{class:"world-banner",html:`<small>${ct("world",{n:l+1})}${m?" · ∞":""}</small>${m?ct("endless"):Di(_.name)}`});p.style.top=this.nodeY(h)+Ts*.5+18+"px",p.style.background=`linear-gradient(180deg, ${_.ui.accent}, ${x3(_.ui.accent,-.18)})`,a.append(p);const v=eh[l%eh.length];for(let S=0;S<9;S++){const x=h+Math.floor((S+.5)*(ai/9)),w=this.nodeY(x)+S*37%60-30,C=this.nodeX(x)>this.width/2?-1:1,b=this.width/2+C*(this.width*.36+S*53%40),T=38+S*29%26,L=et("div",{class:"deco",html:oe(v[S%v.length],T)});L.style.left=b-T/2+"px",L.style.top=w-T/2+"px",L.style.transform=`rotate(${S*47%40-20}deg)`,a.append(L)}}const r=[];for(let l=1;l<=i;l++)r.push([this.nodeX(l),this.nodeY(l)]);const o=v3(r),c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.classList.add("trail"),c.setAttribute("width",String(this.width)),c.setAttribute("height",String(this.height)),c.innerHTML=`<path d="${o}" fill="none" stroke="rgba(90,60,30,0.25)" stroke-width="34" stroke-linecap="round" transform="translate(0 4)"/><path d="${o}" fill="none" stroke="#fff4dc" stroke-opacity="0.92" stroke-width="30" stroke-linecap="round"/><path d="${o}" fill="none" stroke="#c7a57a" stroke-opacity="0.55" stroke-width="5" stroke-dasharray="2 14" stroke-linecap="round"/>`,a.append(c);for(let l=1;l<=i;l++){const h=Fm(l),f=(t.stars[l]??0)>0,u=l===t.unlocked,d=l>t.unlocked&&!t.debug,g=et("button",{class:`node ${h}`+(f?" done":"")+(u?" current":"")+(d?" locked":""),attrs:{"aria-label":ct("level",{n:l})}});g.style.left=this.nodeX(l)+"px",g.style.top=this.nodeY(l)+"px";const _=f?t.picture(l):null;if(_){const m=sr(_,44,{rounded:!1});m.className="thumb",g.append(m,et("span",{class:"num-small",text:String(l)}))}else g.append(String(l));if(f){const m=t.stars[l];g.append(et("span",{class:"nstars",html:[1,2,3].map(p=>oe("star",20,p<=m?"":"off")).join("")}))}if(!d&&h!=="normal"&&g.append(et("span",{class:"badge",html:oe(h==="superhard"?"skull":"fire",26)})),d&&l===t.unlocked+1&&g.append(et("span",{class:"lockico",html:oe("locked",22)})),t.debug){const m=t.stats(l);m&&g.append(et("span",{class:"dbg",text:`r${Math.round((m.random??0)*100)} c${Math.round(m.casual*100)} 🧠${m.critical??"?"}`}))}if(g.addEventListener("click",()=>{if(Rt.unlock(),d){Rt.play("invalid"),g.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"translateX(0)"}],{duration:220});return}Rt.play("button"),this.cb.onPlay(l)}),a.append(g),u){const m=et("div",{class:"map-ant",html:oe("ant",50)});m.style.left=this.nodeX(l)+"px",m.style.top=this.nodeY(l)+"px",a.append(m)}}requestAnimationFrame(()=>{this.scroll.scrollTop=this.nodeY(t.unlocked)-this.scroll.clientHeight*.55})}}function v3(s){if(s.length<2)return"";let t=`M${s[0][0].toFixed(1)},${s[0][1].toFixed(1)}`;for(let e=0;e<s.length-1;e++){const n=s[Math.max(0,e-1)],i=s[e],a=s[e+1],r=s[Math.min(s.length-1,e+2)],o=i[0]+(a[0]-n[0])/6,c=i[1]+(a[1]-n[1])/6,l=a[0]-(r[0]-i[0])/6,h=a[1]-(r[1]-i[1])/6;t+=` C${o.toFixed(1)},${c.toFixed(1)} ${l.toFixed(1)},${h.toFixed(1)} ${a[0].toFixed(1)},${a[1].toFixed(1)}`}return t}function x3(s,t){const e=parseInt(s.slice(1),16),n=i=>Math.max(0,Math.min(255,Math.round(i+i*t)));return`rgb(${n(e>>16&255)},${n(e>>8&255)},${n(e&255)})`}class _3{el;list;countEl;constructor(t,e){this.el=et("div",{class:"album hidden"});const n=et("button",{class:"btn round white",html:Re("back",26),attrs:{"aria-label":"back"}});n.addEventListener("click",()=>{Rt.play("button"),e()}),this.countEl=et("span");const i=et("div",{class:"topbar"},n,et("div",{class:"pill",html:oe("framed-picture",32)},this.countEl));this.list=et("div"),this.el.append(this.list),t.append(this.el,i),i.classList.add("album-top","hidden"),this.top=i}top;show(t,e){this.el.classList.remove("hidden"),this.top.classList.remove("hidden"),this.list.innerHTML="";let n=0;const i=Math.ceil(t.length/ai);for(let a=0;a<i;a++){const r=Cn[a%Cn.length];this.list.append(et("h2",{text:`${ct("world",{n:a+1})} · ${Di(r.name)}`}));const o=et("div",{class:"album-grid"});for(const c of t.filter(l=>Fs(l.n)===a)){const l=(e[c.n]??0)>0;l&&n++;const h=et("div",{class:"album-card"+(l?"":" missing")}),f=et("div",{class:"pic"});if(l){const u=sr(c.picture,110,{rounded:!0});u.style.width=u.style.height="",f.append(u)}else f.textContent="?";h.append(f,et("span",{class:"nm",text:l?Di(c.name)||`#${c.n}`:`#${c.n}`})),o.append(h)}this.list.append(o)}this.countEl.textContent=`${n} / ${t.length}`,this.el.scrollTop=0}hide(){this.el.classList.add("hidden"),this.top.classList.add("hidden")}}const ts=s=>s===void 0?"—":`${Math.round(s*100)}%`;class M3{constructor(t,e,n){this.onPlay=n,this.el=et("div",{class:"album debug-list hidden"});const i=et("button",{class:"btn round white",html:Re("back",26),attrs:{"aria-label":"back"}});i.addEventListener("click",()=>{Rt.play("button"),e()}),this.summary=et("div",{class:"pill debug-pill"}),this.top=et("div",{class:"topbar album-top hidden"},i,this.summary),this.list=et("div"),this.el.append(this.list),t.append(this.el,this.top)}onPlay;el;list;top;summary;show(t,e){this.el.classList.remove("hidden"),this.top.classList.remove("hidden"),this.list.innerHTML="";const n={normal:[],hard:[],superhard:[]};for(const r of t)r.stats&&n[r.tier].push(r.stats.random??r.stats.casual);const i=r=>r.length?r.reduce((o,c)=>o+c,0)/r.length:void 0;this.summary.innerHTML=`${oe("lady-beetle",28)} ${t.length} · <span class="tier-dot normal"></span>${ts(i(n.normal))} <span class="tier-dot hard"></span>${ts(i(n.hard))} <span class="tier-dot superhard"></span>${ts(i(n.superhard))}`,this.list.append(et("p",{class:"debug-legend",html:"random / casual / greedy — доля побед симулированных игроков: жмёт наугад / берёт доступные цвета / жадный. Чем меньше, тем сложнее. 🧠 critical — сколько раз на пути к победе неверная коробка ведёт в тупик (надо подумать). В шапке — средний random по тирам. random / casual / greedy — win rates of simulated players (lower = harder); 🧠 critical — decisions where a wrong box loses."}));const a=Math.ceil(t.length/ai);for(let r=0;r<a;r++){const o=Cn[r%Cn.length];this.list.append(et("h2",{text:`${ct("world",{n:r+1})} · ${Di(o.name)}`}));const c=et("div",{class:"debug-grid"});for(const l of t.filter(h=>Fs(h.n)===r))c.append(this.card(l,e[l.n]??0));this.list.append(c)}this.el.scrollTop=0}card(t,e){const n=t.stats,i=t.boxes.filter(f=>f.hidden).length,a=new Set(t.boxes.filter(f=>f.link!==void 0).map(f=>f.link)).size,r=t.boxes.filter(f=>f.frozen).length,o=[i?`❓${i}`:"",a?`🔗${a}`:"",r?`❄️${r}`:"",t.fences?.length?`🚧${[...new Set(t.fences.map(f=>f.side[0].toUpperCase()))].join("")}`:""].filter(Boolean).join(" "),c=et("div",{class:"pic"}),l=sr(t.picture,120,{rounded:!0});l.style.width=l.style.height="",c.append(l);const h=et("button",{class:`debug-card ${t.tier}`},et("div",{class:"debug-head",html:`<b>#${t.n}</b> <span class="tier-dot ${t.tier}"></span> ${Di(t.name)}${e?" "+"★".repeat(e):""}`}),c,et("div",{class:"debug-stats",html:`<b>random ${ts(n?.random)}</b> · casual ${ts(n?.casual)} · greedy ${ts(n?.greedy)}<br>🧠 ${n?.critical??"?"} critical / ${n?.decisions??"?"} decisions<br>${t.picture.w}×${t.picture.h} · ${n?.pixels??"?"} cubes · ${t.picture.palette.length} col<br>${t.boxes.length} boxes · ${t.columns.length} columns · ${t.slots} slots`+(o?`<br>${o}`:"")}));return h.addEventListener("click",()=>{Rt.unlock(),Rt.play("button"),this.onPlay(t.n)}),h}hide(){this.el.classList.add("hidden"),this.top.classList.add("hidden")}}let g0;const Ai=[];function b3(s){g0=s}function Cs(){return Ai.length>0}function Si(){for(;Ai.length;)Ai[Ai.length-1].close()}function pn(s){const t=et("div",{class:"overlay"}),e=et("div",{class:"dialog"+(s.scroll?" scroll":"")+(s.cls?" "+s.cls:"")});e.append(et("div",{class:"dialog-head "+(s.head??"blue"),text:s.title}));let n=!1;const i={el:e,close(){if(n)return;n=!0;const a=Ai.indexOf(i);a>=0&&Ai.splice(a,1),t.classList.add("out"),setTimeout(()=>t.remove(),180)}};if(s.closable!==!1&&s.onClose){const a=et("button",{class:"btn close-x",html:Re("close",22)});a.addEventListener("click",()=>{Rt.play("button"),i.close(),s.onClose?.()}),e.append(a)}for(const a of s.body??[])e.append(typeof a=="string"?et("p",{html:a}):a);if(s.buttons?.length){const a=et("div",{class:"actions"+(s.row?" row":"")});for(const r of s.buttons)a.append($a(r.label,r.cls??"",()=>{r.onClick()!==!1&&i.close()}));e.append(a)}return t.append(e),g0.append(t),Ai.push(i),Rt.play("whoosh",{volume:.5}),i}let yi=null,ih=0;function kn(s,t,e=1800){yi||(yi=et("div",{class:"toast"})),yi.parentElement!==s&&s.append(yi),yi.textContent=t,yi.classList.add("show"),clearTimeout(ih),ih=window.setTimeout(()=>yi?.classList.remove("show"),e)}const vl="pixel-picnic-save-v1";function Pa(){return{v:1,level:1,stars:{},coins:50,boosters:{hint:0,undo:0,slot:0,shuffle:0,grab:0},seen:[],settings:{music:.5,sfx:.8,lang:null,speed:1,debug:!1},looks:{house:"cottage",hat:"none",owned:[]}}}function S3(){try{const s=localStorage.getItem(vl);if(!s)return Pa();const t=JSON.parse(s),e=Pa();return{...e,...t,boosters:{...e.boosters,...t.boosters??{}},settings:{...e.settings,...t.settings??{}},looks:{...e.looks,...t.looks??{}},stars:t.stars??{},seen:t.seen??[]}}catch{return Pa()}}function Fe(s){try{localStorage.setItem(vl,JSON.stringify(s))}catch{}}function sh(){try{localStorage.removeItem(vl)}catch{}return Pa()}const y3="modulepreload",w3=function(s,t){return new URL(s,t).href},ah={},E3=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let l=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");i=l(e.map(h=>{if(h=w3(h,n),h in ah)return;ah[h]=!0;const f=h.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(n)for(let g=r.length-1;g>=0;g--){const _=r[g];if(_.href===h&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":y3,f||(d.as="script"),d.crossOrigin="",d.href=h,c&&d.setAttribute("nonce",c),document.head.appendChild(d),f)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return i.then(r=>{for(const o of r||[])o.status==="rejected"&&a(o.reason);return t().catch(a)})};let La=null,wa=null;const Ia=new Map,Ya=new Map;async function v0(){return La||(La=(await E3(()=>import("./levels-CYtbz-Kb.js"),[],import.meta.url)).default??[]),La}function T3(){return La??[]}async function A3(s){const t=await v0();if(s<=t.length)return t[s-1];const e=Ya.get(s);if(e)return e;const n=await x0(s,t);return Ya.set(s,n),n}function x0(s,t){wa||(wa=new Worker(new URL(""+new URL("genWorker-D729Jaf4.js",import.meta.url).href,import.meta.url),{type:"module"}),wa.onmessage=n=>{Ia.get(n.data.n)?.(n.data.level),Ia.delete(n.data.n)});const e=t[s*7919%t.length];return new Promise(n=>{Ia.set(s,n),wa.postMessage({n:s,picture:e.picture,name:e.name})})}function C3(s){const t=T3();s>t.length&&t.length&&!Ya.has(s)&&!Ia.has(s)&&x0(s,t).then(e=>Ya.set(s,e))}const R3=[{id:"cottage",kind:"house",name:{ru:"Домик",en:"Cottage"},price:0},{id:"mushroom",kind:"house",name:{ru:"Грибной домик",en:"Mushroom House"},price:400},{id:"cabin",kind:"house",name:{ru:"Избушка",en:"Log Cabin"},price:600},{id:"igloo",kind:"house",name:{ru:"Иглу",en:"Igloo"},price:800},{id:"gingerbread",kind:"house",name:{ru:"Пряничный домик",en:"Gingerbread House"},price:1200},{id:"pumpkin",kind:"house",name:{ru:"Тыква",en:"Pumpkin House"},price:1800},{id:"tower",kind:"house",name:{ru:"Башня",en:"Castle Tower"},price:3e3}],P3=[{id:"none",kind:"hat",name:{ru:"Без шапки",en:"No hat"},price:0},{id:"party",kind:"hat",name:{ru:"Колпак",en:"Party Hat"},price:350},{id:"cap",kind:"hat",name:{ru:"Кепка",en:"Cap"},price:450},{id:"bow",kind:"hat",name:{ru:"Бантик",en:"Bow"},price:450},{id:"flower",kind:"hat",name:{ru:"Цветочек",en:"Flower"},price:600},{id:"sunglasses",kind:"hat",name:{ru:"Очки",en:"Sunglasses"},price:800},{id:"tophat",kind:"hat",name:{ru:"Цилиндр",en:"Top Hat"},price:1200},{id:"santa",kind:"hat",name:{ru:"Новогодняя шапка",en:"Santa Hat"},price:1200},{id:"crown",kind:"hat",name:{ru:"Корона",en:"Crown"},price:2500}];function rh(s){return`${s.kind}:${s.id}`}const oh=180;let wi=null;const lh=new Map;function L3(){return wi||(wi=new n0({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),wi.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),wi.setSize(oh,oh,!1),wi.outputColorSpace=we,wi.toneMapping=Za),wi}function I3(s){s.traverse(t=>{const e=t;if(!e.isMesh)return;e.geometry.dispose();const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n)i.dispose()})}function D3(s,t,e="#e8674a"){const n=`${s}:${t}:${e}`,i=lh.get(n);if(i)return i;const a=L3(),r=new ol;r.add(new Gh("#fffaf0","#8a7a6a",1.4));const o=new qh("#fff4e0",2.2);o.position.set(-2,4,3),r.add(o);const c=new tn(28,1,.1,50);let l,h;if(s==="house"){const p=new d0(e,t);l=p.group,h=()=>p.dispose()}else l=Wm("#e0663f",t),l.rotation.y=.55,h=()=>I3(l);r.add(l);const f=new ui().setFromObject(l),u=f.getCenter(new P),d=f.getSize(new P).length(),g=s==="hat"?.62:1.02;s==="hat"&&u.set(u.x,u.y+.12,u.z+.15);const _=d/(2*Math.tan(c.fov*Math.PI/360))*g;c.position.set(u.x+_*.35,u.y+_*.45,u.z+_*.82),c.lookAt(u),a.setClearColor(0,0),a.render(r,c);const m=a.domElement.toDataURL("image/png");return h(),lh.set(n,m),m}const N3={hidden:"red-question-mark",fence:"construction",link:"link",frozen:"snowflake",gate:"door"};class U3{save=S3();levels=[];stage=document.getElementById("stage");ui=document.getElementById("ui");view=null;game=null;hud=null;map;album;debugList;autoTimer=0;raf=0;last=0;rescued=!1;tutorial=0;loadingEl=null;darkQuery=window.matchMedia?.("(prefers-color-scheme: dark)");isNight(){const t=this.save.settings.night??"auto";return t==="on"||t==="auto"&&!!this.darkQuery?.matches}applyNight(){const t=this.isNight();document.documentElement.classList.toggle("night",t),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t?"#171a2b":"#86c45b"),this.view?.setNight(t)}async init(){this.applyNight(),this.darkQuery?.addEventListener("change",()=>this.applyNight()),this.save.settings.lang&&ya(this.save.settings.lang),this.loadingEl=et("div",{class:"loading"},et("div",{class:"logo",html:`${oe("ant",96)}<h1>${ct("title")}</h1><p>${ct("loading")}</p>`})),document.getElementById("app").append(this.loadingEl),this.save.settings.lang?ya(this.save.settings.lang):ya(jc()),b3(this.ui),await km(),this.levels=await v0(),Rt.setMusicVolume(this.save.settings.music),Rt.setSfxVolume(this.save.settings.sfx),this.map=new g3(this.ui,{onPlay:l=>this.play(l),onShop:()=>this.openLooksShop("house"),onSettings:()=>this.openSettings(),onAlbum:()=>this.openAlbum(),onDebug:()=>this.openDebugList()}),this.album=new _3(this.ui,()=>{this.album.hide(),this.showMap()}),this.debugList=new M3(this.ui,()=>{this.debugList.hide(),this.showMap()},l=>{this.debugList.hide(),this.play(l)});const t=()=>Rt.unlock();window.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.checkUpdate()}),window.setInterval(()=>{this.checkUpdate()},5*6e4),window.setTimeout(()=>{this.checkUpdate()},4e3),window.addEventListener("keydown",l=>{l.key==="Escape"&&this.game&&!Cs()&&this.openPause()}),this.stage.addEventListener("pointerdown",l=>this.onStageTap(l)),this.stage.addEventListener("pointermove",l=>{if(l.pointerType!=="mouse"||!this.game||Cs())return;const h=this.stage.getBoundingClientRect(),f=this.game.hover(l.clientX-h.left,l.clientY-h.top);this.stage.style.cursor=f!==null&&(this.game.grabMode||this.game.sim.canTake(f))?"pointer":""}),this.stage.addEventListener("pointerleave",()=>this.game?.hover(-1,-1));const e=new URLSearchParams(location.search);e.has("reset")&&(this.save=sh()),e.has("debug")&&(this.save.settings.debug=e.get("debug")!=="0",Fe(this.save));const n=Number(e.get("boosters"));if(n>0)for(const l of si)this.save.boosters[l]=n;const i=Number(e.get("coins"));i>0&&(this.save.coins=i);const a=e.get("looks")?.split(",");a?.[0]&&(this.save.looks.house=a[0]),a?.[1]&&(this.save.looks.hat=a[1]);const r=Number(e.get("progress"));if(r>1){for(let l=1;l<r;l++)this.save.stars[l]=this.save.stars[l]??(l%4===0?2:3);this.save.level=Math.max(this.save.level,r);for(const l of["tutorial",...si.map(h=>"booster:"+h)])this.save.seen.includes(l)||this.save.seen.push(l);Fe(this.save)}e.has("demo")&&this.startDemo(Number(e.get("demo"))||0);const o=Number(e.get("level"));if(o>0){this.save.level=Math.max(this.save.level,o);for(const l of["tutorial",...si.map(h=>"booster:"+h)])this.save.seen.includes(l)||this.save.seen.push(l);Fe(this.save),this.play(o)}else this.showMap();const c=this.loadingEl;setTimeout(()=>{c?.classList.add("out"),setTimeout(()=>c?.remove(),450)},150)}startDemo(t){let e=0,n=-1;setInterval(()=>{this.game&&performance.now()-this.last>120&&(this.last=performance.now(),this.game.update(.05,this.last/1e3))},50),setInterval(()=>{const i=this.game;if(!i||Cs()||i.status!=="playing"||(i.level.n!==n&&(n=i.level.n,e=0),t&&e>=t))return;const a=i.level.solution?.[e];a!==void 0&&i.sim.isQuiet()&&i.takeBox(a)&&e++},250)}mapData(){return{unlocked:this.save.level,stars:this.save.stars,coins:this.save.coins,total:this.levels.length,picture:t=>this.levels[t-1]?.picture??null,debug:this.save.settings.debug,stats:t=>this.levels[t-1]?.stats}}openDebugList(){this.map.hide(),this.debugList.show(this.levels,this.save.stars)}updateReady=!1;async checkUpdate(){if(!this.updateReady)try{const t=await fetch(`version.json?t=${Date.now()}`,{cache:"no-store"});if(!t.ok)return;const{id:e}=await t.json();if(!e||e==="2026-09-25T21:50:39.919Z")return;this.updateReady=!0,this.game||this.reloadForUpdate()}catch{}}reloadForUpdate(){kn(this.ui,ct("newVersion"),2e3),window.setTimeout(()=>location.reload(),700)}showMap(){if(this.updateReady)return this.reloadForUpdate();this.stopLoop(),this.stopAuto(),this.game?.dispose(),this.game=null,this.hud?.destroy(),this.hud=null,this.stage.style.visibility="hidden",this.map.show(this.mapData()),Rt.startMusic(oi(Math.floor((this.save.level-1)/20)).music)}openAlbum(){this.map.hide(),this.album.show(this.levels,this.save.stars)}ensureView(){return this.view||(this.view=new jm(this.stage,{onPick:()=>this.game?.onPick(),onDeliver:()=>this.game?.onDeliver()}),this.view.setNight(this.isNight()),this.view.resize(window.innerWidth,window.innerHeight)),this.view}async play(t){Si();const e=await A3(t),n=Cm(t).filter(a=>!this.save.seen.includes("booster:"+a)),i=Am(t).filter(a=>!this.save.seen.includes("mech:"+a));this.startLevel(e);for(const a of i)this.introMechanic(a);for(const a of n)this.introBooster(a);C3(t+1)}startLevel(t){this.map.hide(),this.album.hide(),this.game?.dispose(),this.hud?.destroy();const e=this.ensureView();e.looks={house:this.save.looks.house,hat:this.save.looks.hat},this.stage.style.visibility="visible";const n=oi(t.world);if(this.hud=new f3(this.ui,{onPause:()=>this.openPause(),onHome:()=>this.confirmLeave(),onSpeed:()=>this.cycleSpeed(),onBooster:a=>this.onBooster(a)}),this.hud.setLevel(t.n,t.tier),this.hud.setProgress(0,1),this.stopAuto(),this.save.settings.debug){const a=t.stats,r=o=>`${Math.round(o*100)}%`;this.hud.setDebug(a?`random ${a.random===void 0?"?":r(a.random)} · casual ${r(a.casual)} · greedy ${r(a.greedy)} · planner ${a.planner===void 0?"?":r(a.planner)} · 🧠${a.critical??"?"}/${a.decisions??"?"} · ${t.boxes.length} boxes`:`${t.boxes.length} boxes · ${t.picture.palette.length} col`)}const i=this.hud.insets();e.insets={top:i.top,bottom:i.bottom,left:0,right:0},this.hud.observe(()=>this.onResize()),this.rescued=!1,this.game=new r3(e,t,n,{onWin:a=>this.onWin(a),onStuck:()=>this.onStuck(),onProgress:(a,r)=>this.hud?.setProgress(a,r),onToast:a=>this.toast(a),onChange:()=>this.refreshBoosters()}),this.game.speed=this.save.settings.speed,this.hud.setSpeed(this.game.speed),this.refreshBoosters(),Rt.startMusic(n.music),t.tier!=="normal"&&setTimeout(()=>{this.hud?.banner(ct(t.tier==="superhard"?"superhardLevel":"hardLevel"),t.tier),Rt.play("unlock",{volume:.6})},350),this.tutorial=t.n===1&&!this.save.seen.includes("tutorial")?1:0,this.tutorial&&setTimeout(()=>this.showTutorialStep(),600),this.startLoop()}startLoop(){this.stopLoop(),this.last=performance.now();const t=e=>{const n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.game?.update(n,e/1e3),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}stopLoop(){cancelAnimationFrame(this.raf),this.raf=0}onResize(){if(this.view&&(this.view.resize(window.innerWidth,window.innerHeight),this.hud&&this.game)){const t=this.hud.insets();this.view.insets={top:t.top,bottom:t.bottom,left:0,right:0},this.view.relayout(!1)}this.map.visible&&this.map.render()}onStageTap(t){if(!this.game||Cs())return;const e=this.stage.getBoundingClientRect(),n=this.game.taps;this.game.tap(t.clientX-e.left,t.clientY-e.top),this.game.taps!==n&&this.tutorial&&(this.tutorial++,this.showTutorialStep())}cycleSpeed(){if(!this.game)return;const t=this.game.speed>=3?1:this.game.speed+1;this.game.speed=t,this.save.settings.speed=t,Fe(this.save),this.hud?.setSpeed(t)}toast(t){let n={blocked:"toastBlocked",frozen:"toastFrozen",slots:"toastSlots",link:"toastLink",nohint:"toastNoHint",grab:"toastGrab"}[t];t==="slots"&&this.game&&this.game.sim.freeSlots()===1&&(n="toastLinkSlots"),kn(this.ui,ct(n),t==="nohint"?3e3:1800)}showTutorialStep(){const t=this.game,e=this.hud;if(!t||!e)return;const n=Math.max(90,e.insets().top+4);if(this.tutorial===1){const i=t.sim.clone(),a=i.legalMoves(),r=i.exposedCounts(),o=t.level.solution?.[0],c=o!==void 0&&i.canTake(o)?o:a.find(h=>r[i.boxColor(h)]>0)??a[0],l=t.view.toScreen(t.view.queue.boxTop(c,new P));e.showTutorial(ct("tutorial1"),n,l)}else this.tutorial===2?(e.showTutorial(ct("tutorial2"),n),setTimeout(()=>this.tutorial===2&&e.hideTutorial(),5e3)):this.tutorial===3?(e.showTutorial(ct("tutorial3"),n),setTimeout(()=>this.tutorial===3&&e.hideTutorial(),5e3)):(e.hideTutorial(),this.tutorial=0,this.markSeen("tutorial"))}markSeen(t){this.save.seen.includes(t)||(this.save.seen.push(t),Fe(this.save))}boosterState(){const t=this.game,e=t?.level.n??1,n={};for(const i of si)n[i]={count:this.save.boosters[i],locked:e<ns[i],unlockAt:ns[i],active:i==="grab"&&!!t?.grabMode,usable:!!t&&t.canUse(i)};return n}refreshBoosters(){this.hud?.setBoosters(this.boosterState())}onBooster(t){const e=this.game;if(e){if(e.level.n<ns[t]){Rt.play("invalid"),kn(this.ui,ct("locked",{n:ns[t]}));return}if(t==="grab"&&e.grabMode){e.cancelGrab(),this.save.boosters.grab++,Fe(this.save),this.refreshBoosters();return}if(this.save.boosters[t]<=0){this.openShop(t);return}if(!e.canUse(t)){Rt.play("invalid"),t==="grab"&&kn(this.ui,ct("toastSlots"));return}this.spendBooster(t)}}spendBooster(t,e=!1){const n=this.game;if(!n)return!1;const i=n.use(t);return i&&(this.save.boosters[t]--,e&&(this.rescued=!0),Fe(this.save)),this.refreshBoosters(),i}openLooksShop(t){const e=et("p",{class:"shop-coins",html:`${oe("coin",26)} ${this.save.coins}`}),n=et("div",{class:"seg shop-tabs"}),i=[["house",ct("shopHouses")],["hat",ct("shopAnts")],["booster",ct("shopBoosters")]];for(const[o,c]of i){const l=et("button",{class:o===t?"on":"",text:c});l.addEventListener("click",()=>{Rt.play("button"),Si(),this.openLooksShop(o)}),n.append(l)}const a=et("div",{class:"shop-grid"}),r=()=>{Si(),this.openLooksShop(t),this.map.render()};if(t==="booster")for(const o of si){const c=et("button",{class:"look-card"},et("span",{class:"look-pic booster-pic",html:Jr(o)}),et("span",{class:"nm",text:ct(`booster_${o}`)}),et("span",{class:"price",html:`×${this.save.boosters[o]} · ${oe("coin",18)} ${Ss[o]}`}));c.addEventListener("click",()=>{if(this.save.coins<Ss[o]){Rt.play("invalid"),kn(this.ui,ct("notEnough"));return}this.save.coins-=Ss[o],this.save.boosters[o]++,Fe(this.save),Rt.play("coin"),r()}),a.append(c)}else{const o=t==="house"?R3:P3,c=this.save.looks;for(const l of o){const h=l.price===0||c.owned.includes(rh(l)),f=(t==="house"?c.house:c.hat)===l.id,u=f?`${Re("check",16)} ${ct("worn")}`:h?ct("wear"):`${oe("coin",18)} ${l.price}`,d=et("button",{class:"look-card"+(f?" worn":h?" owned":"")},et("img",{class:"look-pic",attrs:{src:D3(l.kind,l.id),alt:""}}),et("span",{class:"nm",text:Di(l.name)}),et("span",{class:"price",html:u}));d.addEventListener("click",()=>{if(!f){if(h)Rt.play("button");else{if(this.save.coins<l.price){Rt.play("invalid"),kn(this.ui,ct("notEnough"));return}this.save.coins-=l.price,c.owned.push(rh(l)),Rt.play("unlock"),kn(this.ui,ct("bought"))}t==="house"?c.house=l.id:c.hat=l.id,Fe(this.save),r()}}),a.append(d)}}pn({title:ct("shop"),head:"purple",body:[e,n,a],onClose:()=>{},cls:"wide"})}openShop(t,e=!1){const n=Ss[t],i=this.game;i&&(i.paused=!0);const a=et("div",{class:"mech-art",html:Jr(t)});pn({title:ct(`booster_${t}`),head:"purple",body:[a,ct(`boosterDesc_${t}`),et("p",{class:"subtle",html:`${oe("coin",20)} ${this.save.coins}`})],buttons:[{label:`${ct("buy")} <span class="price">${oe("coin",26)} ${n}</span>`,cls:"green",onClick:()=>this.save.coins<n?(Rt.play("invalid"),kn(this.ui,ct("notEnough")),!1):(this.save.coins-=n,this.save.boosters[t]++,Fe(this.save),Rt.play("coin"),i&&(i.paused=!1),this.spendBooster(t,e),!0)}],onClose:()=>{i&&(i.paused=!1),e&&i?.status==="stuck"&&this.onStuck()}})}onWin(t){const e=t.level.n,n=t.stars(this.rescued),i=this.save.stars[e]??0,a=t.playTime<=Em(t.level),r=Tm(t.level.tier,n,a,i),o=i===0;this.save.stars[e]=Math.max(i,n),this.save.coins+=r.total,e>=this.save.level&&(this.save.level=e+1),Fe(this.save);const c=t.celebrate();Rt.duck(.25,2.5),Rt.play("win"),this.tutorial&&(this.hud?.hideTutorial(),this.tutorial=0,this.markSeen("tutorial"));const l=t.playTime;setTimeout(()=>this.showWinDialog(t.level,n,r,l,o),Math.max(900,c*1e3+200))}showWinDialog(t,e,n,i,a){const r=sr(t.picture,130,{rounded:!0,bg:"#fffaf0"});r.classList.add("pic-thumb");const o=et("div",{class:"stars",html:[1,2,3].map(()=>oe("star",64,"star")).join("")}),c=Di(t.name),l=`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,h=(_,m)=>et("div",{class:"reward-line"+(m?"":" off"),html:`<span>${_}</span><b>+${m}</b>`}),f=et("div",{class:"reward"},h(ct(a?t.tier==="normal"?"rewardLevel":t.tier==="hard"?"rewardHard":"rewardSuperhard":"rewardReplay"),n.base),h(ct("rewardStars"),n.stars),h(`${ct("rewardFast")} · ${l}`,n.speed)),u=et("div",{class:"coins-gain",html:`${oe("coin",30)} +${n.total}`}),d=[o,r];c&&d.push(et("p",{html:`<b>${c}</b>`,style:"margin:0 0 6px"})),d.push(f,u),a&&d.push(et("p",{class:"subtle",text:ct("addedAlbum")})),pn({title:ct(e===3?"win3":e===2?"win2":"win1"),head:"green",body:d,buttons:[{label:`${ct("next")} ${Re("play",22)}`,cls:"green big",onClick:()=>{this.play(t.n+1)}},{label:`${Re("map",22)} ${ct("map")}`,cls:"white small",onClick:()=>this.showMap()}]}),o.querySelectorAll(".star").forEach((_,m)=>{m<e&&setTimeout(()=>{_.classList.add("on"),Rt.play("star",{pitch:m})},350+m*330)}),setTimeout(()=>Rt.play("coin"),350+e*330+150)}onStuck(){const t=this.game;if(!t)return;Rt.play("lose");const e=[],n=t.level.n,i=a=>{if(n<ns[a])return;const r=this.save.boosters[a];e.push({label:`${ct(`booster_${a}`)} ${r>0?`<span class="price">×${r}</span>`:`<span class="price">${oe("coin",24)} ${Ss[a]}</span>`}`,cls:a==="slot"?"green":"blue",onClick:()=>{r>0?this.spendBooster(a,!0):setTimeout(()=>this.openShop(a,!0),200)}})};i("slot"),i("undo"),i("shuffle"),e.push({label:`${Re("restart",22)} ${ct("retry")}`,cls:"white",onClick:()=>{this.restart()}}),pn({title:ct("stuckTitle"),head:"red",body:[ct("stuckText")],buttons:e})}async restart(){if(!this.game)return;const t=this.game.level;this.startLevel(t)}openPause(){const t=this.game;if(!t)return;t.paused=!0;const e=[{label:`${Re("play",22)} ${ct("resume")}`,cls:"green",onClick:()=>{t.paused=!1}},{label:`${Re("restart",22)} ${ct("restart")}`,cls:"blue",onClick:()=>{this.restart()}},{label:`${Re("home",22)} ${ct("toMap")}`,cls:"white",onClick:()=>this.showMap()}];this.save.settings.debug&&e.push({label:`${oe("lady-beetle",24)} ${ct("autoSolve")}`,cls:"purple small",onClick:()=>{t.paused=!1,this.startAuto()}},{label:`${Re("ff",20)} ${ct("skipLevel")}`,cls:"purple small",onClick:()=>this.skipLevel()}),pn({title:ct("paused"),head:"purple",body:[this.volumeRow("music"),this.volumeRow("sfx")],buttons:e,onClose:()=>{t.paused=!1}})}confirmLeave(){const t=this.game;if(!t)return this.showMap();if(t.taps===0)return this.showMap();t.paused=!0,pn({title:ct("toMap"),head:"purple",body:[et("p",{text:ct("leaveLevel")})],buttons:[{label:`${Re("home",22)} ${ct("leave")}`,cls:"blue",onClick:()=>this.showMap()},{label:`${Re("play",22)} ${ct("stay")}`,cls:"green",onClick:()=>{t.paused=!1}}],onClose:()=>{t.paused=!1}})}startAuto(){this.stopAuto();const t=this.game;t&&(t.speed=3,this.hud?.setSpeed(3),this.autoTimer=window.setInterval(()=>{if(this.game!==t)return this.stopAuto();if(Cs())return;const e=t.autoStep();e==="stuck"?(this.stopAuto(),kn(this.ui,ct("noSolution"),2500)):e==="done"&&this.stopAuto()},200))}stopAuto(){clearInterval(this.autoTimer),this.autoTimer=0}skipLevel(){const t=this.game;if(!t)return;const e=t.level.n;this.save.stars[e]=Math.max(this.save.stars[e]??0,1),e>=this.save.level&&(this.save.level=e+1),Fe(this.save),this.play(e+1)}volumeRow(t){const e=et("input",{attrs:{type:"range",min:"0",max:"1",step:"0.05"}});return e.value=String(this.save.settings[t]),e.addEventListener("input",()=>{const n=Number(e.value);this.save.settings[t]=n,t==="music"?Rt.setMusicVolume(n):Rt.setSfxVolume(n),Fe(this.save)}),e.addEventListener("change",()=>t==="sfx"&&Rt.play("tap")),et("div",{class:"setting-row"},et("span",{html:`${oe(t==="music"?"musical-note":"speaker-high-volume",26)} ${ct(t==="music"?"music":"sounds")}`}),e)}openSettings(){const t=et("div",{class:"seg"});["ru","en"].forEach(l=>{const h=et("button",{class:jc()===l?"on":"",text:l==="ru"?"Русский":"English"});h.addEventListener("click",()=>{Rt.play("button"),this.save.settings.lang=l,Fe(this.save),ya(l),Si(),this.map.render(),this.openSettings()}),t.append(h)});const e=et("div",{class:"setting-row"},et("span",{text:ct("language")}),t),n=et("div",{class:"seg"});[!0,!1].forEach(l=>{const h=et("button",{class:this.save.settings.debug===l?"on":"",text:ct(l?"on":"off")});h.addEventListener("click",()=>{Rt.play("button"),this.save.settings.debug=l,Fe(this.save),Si(),this.map.show(this.mapData()),this.openSettings()}),n.append(h)});const i=et("div",{class:"setting-row"},et("span",{html:`${oe("lady-beetle",24)} ${ct("debug")}<br><small style="font-size:12px;opacity:.7">${ct("debugHint")}</small>`}),n),a=et("div",{class:"seg"});["auto","on","off"].forEach(l=>{const h=et("button",{class:(this.save.settings.night??"auto")===l?"on":"",text:ct(l==="auto"?"auto":l)});h.addEventListener("click",()=>{Rt.play("button"),this.save.settings.night=l,Fe(this.save),this.applyNight(),Si(),this.openSettings()}),a.append(h)});const r=et("div",{class:"setting-row"},et("span",{html:`${oe("crescent-moon",24)} ${ct("nightMode")}`}),a),o=$a(ct("credits"),"white small",()=>this.openCredits()),c=$a(ct("resetProgress"),"red small",()=>{pn({title:ct("resetProgress"),head:"red",body:[ct("resetConfirm")],row:!0,buttons:[{label:Re("check",24),cls:"red",onClick:()=>{this.save=sh(),Fe(this.save),Si(),this.showMap()}},{label:Re("close",24),cls:"white",onClick:()=>{}}]})});pn({title:ct("settings"),head:"purple",body:[this.volumeRow("music"),this.volumeRow("sfx"),e,r,i,et("div",{class:"actions"},o,c)],onClose:()=>{}})}openCredits(){pn({title:ct("credits"),head:"blue",scroll:!0,body:[et("p",{class:"credits",text:ct("licenseText")})],buttons:[{label:ct("close"),cls:"white small",onClick:()=>{}}]})}introMechanic(t){const e=this.game;e&&(e.paused=!0),pn({title:ct("newMechanic"),head:"green",body:[et("div",{class:"mech-art",html:oe(N3[t],84)}),et("p",{html:`<b style="font-size:21px">${ct(`mech_${t}_t`)}</b>`}),ct(`mech_${t}_d`)],buttons:[{label:ct("gotIt"),cls:"green",onClick:()=>{this.markSeen("mech:"+t),e&&(e.paused=!1)}}]}),Rt.play("unlock")}introBooster(t){const e=this.game;e&&(e.paused=!0),this.save.boosters[t]+=Dc,this.markSeen("booster:"+t),Fe(this.save),this.refreshBoosters(),pn({title:ct("boosterUnlocked"),head:"purple",body:[et("div",{class:"mech-art",html:Jr(t)}),et("p",{html:`<b style="font-size:21px">${ct(`booster_${t}`)}</b> · ${ct("free",{n:Dc})}`}),ct(`boosterDesc_${t}`)],buttons:[{label:ct("gotIt"),cls:"green",onClick:()=>{e&&(e.paused=!1)}}]}),Rt.play("unlock")}}function Jr(s){return m0(s,84)}new U3().init().catch(s=>{console.error(s),document.body.insertAdjacentHTML("beforeend",`<pre style="position:fixed;inset:auto 0 0 0;padding:12px;background:#fff;color:#c00;white-space:pre-wrap">${String(s?.stack??s)}</pre>`)});
