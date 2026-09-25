(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Ao="186",qh=0,cl=1,$h=2,gs=1,Yh=2,ds=3,hi=0,Ge=1,je=2,Un=0,Qn=1,Ms=2,hl=3,ul=4,Zh=5,Fi=100,Jh=101,Kh=102,Qh=103,jh=104,tu=200,eu=201,nu=202,iu=203,zc=204,kc=205,su=206,ru=207,au=208,ou=209,lu=210,cu=211,hu=212,uu=213,fu=214,Da=0,Ua=1,Na=2,Ss=3,Fa=4,Oa=5,Ba=6,za=7,Co=0,du=1,pu=2,Sn=0,Hc=1,Vc=2,Gc=3,Wc=4,Xc=5,qc=6,Ro=7,$c=300,ui=301,Vi=302,Xr=303,qr=304,Dr=306,xr=1e3,In=1001,ka=1002,De=1003,mu=1004,Us=1005,Oe=1006,$r=1007,ai=1008,Ye=1009,Yc=1010,Zc=1011,bs=1012,Po=1013,bn=1014,cn=1015,yn=1016,Lo=1017,Io=1018,ys=1020,Jc=35902,Kc=35899,Qc=1021,jc=1022,hn=1023,Fn=1026,oi=1027,Do=1028,Uo=1029,fi=1030,No=1031,Fo=1033,hr=33776,ur=33777,fr=33778,dr=33779,Ha=35840,Va=35841,Ga=35842,Wa=35843,Xa=36196,qa=37492,$a=37496,Ya=37488,Za=37489,_r=37490,Ja=37491,Ka=37808,Qa=37809,ja=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,uo=36492,fo=36494,po=36495,mo=36283,go=36284,Mr=36285,vo=36286,gu=3200,Sr=0,vu=1,Yn="",be="srgb",br="srgb-linear",yr="linear",ue="srgb",Yr=7680,xu=519,_u=512,Mu=513,Su=514,Oo=515,bu=516,yu=517,Bo=518,wu=519,Eu=35044,Tu=35048,fl="300 es",_n=2e3,ws=2001;function Au(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cu(){const s=wr("canvas");return s.style.display="block",s}const dl={};function pl(...s){const t="THREE."+s.shift();console.log(t,...s)}function th(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=th(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ee(...s){s=th(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function zi(...s){const t=s.join(" ");t in dl||(dl[t]=!0,Gt(...s))}function Ru(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Pu={[Da]:Ua,[Na]:Ba,[Fa]:za,[Ss]:Oa,[Ua]:Da,[Ba]:Na,[za]:Fa,[Oa]:Ss};class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,xo=180/Math.PI;function $i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function Lu(s,t){return(s%t+t)%t}function Jr(s,t,e){return(1-e)*s+e*t}function Ki(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class at{static{at.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],g=r[a+2],S=r[a+3];if(f!==S||c!==u||l!==d||h!==g){let m=c*u+l*d+h*g+f*S;m<0&&(u=-u,d=-d,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,c=c*p+u*o,l=l*p+d*o,h=h*p+g*o,f=f*p+S*o}else{c=c*p+u*o,l=l*p+d*o,h=h*p+g*o,f=f*p+S*o;const M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(r/2),u=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=i+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kr.copy(this).projectOnVector(t),this.sub(Kr)}reflect(t){return this.sub(Kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new P,ml=new Xe;class qt{static{qt.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],S=i[0],m=i[3],p=i[6],M=i[1],w=i[4],_=i[7],E=i[2],y=i[5],C=i[8];return r[0]=a*S+o*M+c*E,r[3]=a*m+o*w+c*y,r[6]=a*p+o*_+c*C,r[1]=l*S+h*M+f*E,r[4]=l*m+h*w+f*y,r[7]=l*p+h*_+f*C,r[2]=u*S+d*M+g*E,r[5]=u*m+d*w+g*y,r[8]=u*p+d*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=f*S,t[1]=(i*l-h*n)*S,t[2]=(o*n-i*a)*S,t[3]=u*S,t[4]=(h*e-i*c)*S,t[5]=(i*r-o*e)*S,t[6]=d*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new qt,gl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iu(){const s={enabled:!0,workingColorSpace:br,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?yr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[br]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),s}const te=Iu();function Nn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mi;class Du{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=wr("canvas")),Mi.width=t.width,Mi.height=t.height;const i=Mi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uu=0;class zo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jr(i[a].image)):r.push(jr(i[a]))}else r=jr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Du.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let Nu=0;const ta=new P;class Be extends pi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=In,i=In,r=Oe,a=ai,o=hn,c=Ye,l=Be.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=$i(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ta).x}get height(){return this.source.getSize(ta).y}get depth(){return this.source.getSize(ta).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=$c;Be.DEFAULT_ANISOTROPY=1;class xe{static{xe.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,_=(d+1)/2,E=(p+1)/2,y=(h+u)/4,C=(f+S)/4,v=(g+m)/4;return w>_&&w>E?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=y/n,r=C/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=y/i,r=v/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=v/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-S)/M,this.z=(u-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fu extends pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Be(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new zo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class eh extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ou extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ne{static{ne.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,c,l,h,f,u,d,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,f,u,d,g,S,m)}set(t,e,n,i,r,a,o,c,l,h,f,u,d,g,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,g=o*h,S=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-S*l,e[9]=-o*c,e[2]=S-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,S=l*f;e[0]=u+S*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=S+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,S=l*f;e[0]=u-S*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,d=a*f,g=o*h,S=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+S,e[1]=c*f,e[5]=S*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,d=a*l,g=o*c,S=o*l;e[0]=c*h,e[4]=S-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-S*f}else if(t.order==="XZY"){const u=a*c,d=a*l,g=o*c,S=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+S,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=S*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bu,t,zu)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Hn.crossVectors(n,qe),Hn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Hn.crossVectors(n,qe)),Hn.normalize(),Ns.crossVectors(qe,Hn),i[0]=Hn.x,i[4]=Ns.x,i[8]=qe.x,i[1]=Hn.y,i[5]=Ns.y,i[9]=qe.y,i[2]=Hn.z,i[6]=Ns.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],S=n[6],m=n[10],p=n[14],M=n[3],w=n[7],_=n[11],E=n[15],y=i[0],C=i[4],v=i[8],T=i[12],R=i[1],I=i[5],F=i[9],z=i[13],D=i[2],B=i[6],q=i[10],W=i[14],Q=i[3],X=i[7],J=i[11],K=i[15];return r[0]=a*y+o*R+c*D+l*Q,r[4]=a*C+o*I+c*B+l*X,r[8]=a*v+o*F+c*q+l*J,r[12]=a*T+o*z+c*W+l*K,r[1]=h*y+f*R+u*D+d*Q,r[5]=h*C+f*I+u*B+d*X,r[9]=h*v+f*F+u*q+d*J,r[13]=h*T+f*z+u*W+d*K,r[2]=g*y+S*R+m*D+p*Q,r[6]=g*C+S*I+m*B+p*X,r[10]=g*v+S*F+m*q+p*J,r[14]=g*T+S*z+m*W+p*K,r[3]=M*y+w*R+_*D+E*Q,r[7]=M*C+w*I+_*B+E*X,r[11]=M*v+w*F+_*q+E*J,r[15]=M*T+w*z+_*W+E*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],S=t[7],m=t[11],p=t[15],M=c*d-l*u,w=o*d-l*f,_=o*u-c*f,E=a*d-l*h,y=a*u-c*h,C=a*f-o*h;return e*(S*M-m*w+p*_)-n*(g*M-m*E+p*y)+i*(g*w-S*E+p*C)-r*(g*_-S*y+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],S=t[13],m=t[14],p=t[15],M=e*o-n*a,w=e*c-i*a,_=e*l-r*a,E=n*c-i*o,y=n*l-r*o,C=i*l-r*c,v=h*S-f*g,T=h*m-u*g,R=h*p-d*g,I=f*m-u*S,F=f*p-d*S,z=u*p-d*m,D=M*z-w*F+_*I+E*R-y*T+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return t[0]=(o*z-c*F+l*I)*B,t[1]=(i*F-n*z-r*I)*B,t[2]=(S*C-m*y+p*E)*B,t[3]=(u*y-f*C-d*E)*B,t[4]=(c*R-a*z-l*T)*B,t[5]=(e*z-i*R+r*T)*B,t[6]=(m*_-g*C-p*w)*B,t[7]=(h*C-u*_+d*w)*B,t[8]=(a*F-o*R+l*v)*B,t[9]=(n*R-e*F-r*v)*B,t[10]=(g*y-S*_+p*M)*B,t[11]=(f*_-h*y-d*M)*B,t[12]=(o*T-a*I-c*v)*B,t[13]=(e*I-n*T+i*v)*B,t[14]=(S*w-g*E-m*M)*B,t[15]=(h*E-f*w+u*M)*B,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,S=a*h,m=a*f,p=o*f,M=c*l,w=c*h,_=c*f,E=n.x,y=n.y,C=n.z;return i[0]=(1-(S+p))*E,i[1]=(d+_)*E,i[2]=(g-w)*E,i[3]=0,i[4]=(d-_)*y,i[5]=(1-(u+p))*y,i[6]=(m+M)*y,i[7]=0,i[8]=(g+w)*C,i[9]=(m-M)*C,i[10]=(1-(u+S))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Si.set(i[0],i[1],i[2]).length();const o=Si.set(i[4],i[5],i[6]).length(),c=Si.set(i[8],i[9],i[10]).length();r<0&&(a=-a),nn.copy(this);const l=1/a,h=1/o,f=1/c;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=_n,c=!1){const l=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let g,S;if(c)g=r/(a-r),S=a*r/(a-r);else if(o===_n)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ws)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=_n,c=!1){const l=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,S;if(c)g=1/(a-r),S=a/(a-r);else if(o===_n)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===ws)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new P,nn=new ne,Bu=new P(0,0,0),zu=new P(1,1,1),Hn=new P,Ns=new P,qe=new P,xl=new ne,_l=new Xe;class tn{constructor(t=0,e=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ku=0;const Ml=new P,bi=new Xe,Tn=new ne,Fs=new P,Qi=new P,Hu=new P,Vu=new Xe,Sl=new P(1,0,0),bl=new P(0,1,0),yl=new P(0,0,1),wl={type:"added"},Gu={type:"removed"},yi={type:"childadded",child:null},ea={type:"childremoved",child:null};class Le extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new P,e=new tn,n=new Xe,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new qt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Sl,t)}rotateY(t){return this.rotateOnAxis(bl,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sl,t)}translateY(t){return this.translateOnAxis(bl,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Qi,Fs,this.up):Tn.lookAt(Fs,Qi,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(Tn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),yi.child=t,this.dispatchEvent(yi),yi.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),ea.child=t,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ve extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wu={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function ia(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Lu(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ia(a,r,t+1/3),this.g=ia(a,r,t),this.b=ia(a,r,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return te.workingToColorSpace(Fe.copy(this),t),Math.round(Jt(Fe.r*255,0,255))*65536+Math.round(Jt(Fe.g*255,0,255))*256+Math.round(Jt(Fe.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,r=Fe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=be){te.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Os);const n=Jr(Vn.h,Os.h,e),i=Jr(Vn.s,Os.s,e),r=Jr(Vn.l,Os.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Nt;Nt.NAMES=nh;class ih extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const sn=new P,An=new P,sa=new P,Cn=new P,wi=new P,Ei=new P,El=new P,ra=new P,aa=new P,oa=new P,la=new xe,ca=new xe,ha=new xe;class ln{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),An.subVectors(n,e),sa.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(An),c=sn.dot(sa),l=An.dot(An),h=An.dot(sa),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(la,r.x),a.addScaledVector(ca,r.y),a.addScaledVector(ha,r.z),a}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),An.subVectors(t,e),sn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),sn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;wi.subVectors(i,n),Ei.subVectors(r,n),ra.subVectors(t,n);const c=wi.dot(ra),l=Ei.dot(ra);if(c<=0&&l<=0)return e.copy(n);aa.subVectors(t,i);const h=wi.dot(aa),f=Ei.dot(aa);if(h>=0&&f<=h)return e.copy(i);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(wi,a);oa.subVectors(t,r);const d=wi.dot(oa),g=Ei.dot(oa);if(g>=0&&d<=g)return e.copy(r);const S=d*l-c*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ei,o);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return El.subVectors(r,i),o=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(El,o);const p=1/(m+S+u);return a=S*p,o=u*p,e.copy(n).addScaledVector(wi,a).addScaledVector(Ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),zs.subVectors(this.max,ji),Ti.subVectors(t.a,ji),Ai.subVectors(t.b,ji),Ci.subVectors(t.c,ji),Gn.subVectors(Ai,Ti),Wn.subVectors(Ci,Ai),ti.subVectors(Ti,Ci);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ti.z,ti.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ti.z,0,-ti.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ti.y,ti.x,0];return!ua(e,Ti,Ai,Ci,zs)||(e=[1,0,0,0,1,0,0,0,1],!ua(e,Ti,Ai,Ci,zs))?!1:(ks.crossVectors(Gn,Wn),e=[ks.x,ks.y,ks.z],ua(e,Ti,Ai,Ci,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rn=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,Bs=new mi,Ti=new P,Ai=new P,Ci=new P,Gn=new P,Wn=new P,ti=new P,ji=new P,zs=new P,ks=new P,ei=new P;function ua(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ei.fromArray(s,r);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),c=t.dot(ei),l=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const we=new P,Hs=new at;let Xu=0;class fn extends pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class sh extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rh extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const qu=new mi,ts=new P,fa=new P;class Ls{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ts,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(fa)),this.expandByPoint(ts.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $u=0;const Je=new ne,da=new Le,Ri=new P,$e=new mi,es=new mi,Pe=new P;class Ie extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?rh:sh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors($e.min,es.min),$e.expandByPoint(Pe),Pe.addVectors($e.max,es.max),$e.expandByPoint(Pe)):($e.expandByPoint(es.min),$e.expandByPoint(es.max))}$e.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(Ri.fromBufferAttribute(t,l),Pe.add(Ri)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new P,c[v]=new P;const l=new P,h=new P,f=new P,u=new at,d=new at,g=new at,S=new P,m=new P;function p(v,T,R){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),o[v].add(S),o[T].add(S),o[R].add(S),c[v].add(m),c[T].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,T=M.length;v<T;++v){const R=M[v],I=R.start,F=R.count;for(let z=I,D=I+F;z<D;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const w=new P,_=new P,E=new P,y=new P;function C(v){E.fromBufferAttribute(i,v),y.copy(E);const T=o[v];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),_.crossVectors(y,T);const I=_.dot(c[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,I)}for(let v=0,T=M.length;v<T;++v){const R=M[v],I=R.start,F=R.count;for(let z=I,D=I+F;z<D;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?d=c[S]*o.data.stride+o.offset:d=c[S]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new fn(u,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new P,Yu=new P,Zu=new qt;class $n{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=pa.subVectors(n,e).cross(Yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zu.getNormalMatrix(t),i=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ju=0;class Yi extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Qn,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=kc,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Pn=new P,ma=new P,Vs=new P,Gs=new P;class ah{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ma.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Gs.copy(this.origin).sub(ma);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Vs),o=Gs.dot(this.direction),c=-Gs.dot(Vs),l=Gs.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const S=1/h;f*=S,u*=S,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ma).addScaledVector(Vs,u),d}intersectSphere(t,e){if(t.radius<0)return null;Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=n.x-a.x,M=n.y-a.y,w=n.z-a.z,_=Math.abs(c),E=Math.abs(l),y=Math.abs(h);let C,v,T,R,I,F,z,D,B,q,W,Q;if(_>=E&&_>=y?(T=c,F=f,B=g,Q=p,c>=0?(C=l,v=h,R=u,I=d,z=S,D=m,q=M,W=w):(C=h,v=l,R=d,I=u,z=m,D=S,q=w,W=M)):E>=y?(T=l,F=u,B=S,Q=M,l>=0?(C=h,v=c,R=d,I=f,z=m,D=g,q=w,W=p):(C=c,v=h,R=f,I=d,z=g,D=m,q=p,W=w)):(T=h,F=d,B=m,Q=w,h>=0?(C=c,v=l,R=f,I=u,z=g,D=S,q=p,W=M):(C=l,v=c,R=u,I=f,z=S,D=g,q=M,W=p)),T===0)return null;const X=C/T,J=v/T,K=1/T,yt=R-X*F,St=I-J*F,jt=z-X*B,Wt=D-J*B,ie=q-X*Q,Z=W-J*Q,et=ie*Wt-Z*jt,xt=yt*Z-St*ie,kt=jt*St-Wt*yt;if(i){if(et<0||xt<0||kt<0)return null}else if((et<0||xt<0||kt<0)&&(et>0||xt>0||kt>0))return null;const wt=et+xt+kt;if(wt===0)return null;const Ht=K*(et*F+xt*B+kt*Q);return(wt>0?Ht<0:Ht>0)?null:this.at(Ht/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zi extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tl=new ne,ni=new ah,Ws=new Ls,Al=new P,Xs=new P,qs=new P,$s=new P,ga=new P,Ys=new P,Cl=new P,Zs=new P;class ae extends Le{constructor(t=new Ie,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(ga.fromBufferAttribute(f,t),a?Ys.addScaledVector(ga,h):Ys.addScaledVector(ga.sub(e),h))}e.add(Ys)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Ws.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ws,Al)===null||ni.origin.distanceToSquared(Al)>(t.far-t.near)**2))&&(Tl.copy(r).invert(),ni.copy(t.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,E=w;_<E;_+=3){const y=o.getX(_),C=o.getX(_+1),v=o.getX(_+2);i=Js(this,p,t,n,l,h,f,y,C,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const M=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);i=Js(this,a,t,n,l,h,f,M,w,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,E=w;_<E;_+=3){const y=_,C=_+1,v=_+2;i=Js(this,p,t,n,l,h,f,y,C,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),S=Math.min(c.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const M=m,w=m+1,_=m+2;i=Js(this,a,t,n,l,h,f,M,w,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ku(s,t,e,n,i,r,a,o){let c;if(t.side===Ge?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===hi,o),c===null)return null;Zs.copy(o),Zs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zs);return l<e.near||l>e.far?null:{distance:l,point:Zs.clone(),object:s}}function Js(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Xs),s.getVertexPosition(c,qs),s.getVertexPosition(l,$s);const h=Ku(s,t,e,n,Xs,qs,$s,Cl);if(h){const f=new P;ln.getBarycoord(Cl,Xs,qs,$s,f),i&&(h.uv=ln.getInterpolatedAttribute(i,o,c,l,f,new at)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,c,l,f,new at)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,c,l,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};ln.getNormal(Xs,qs,$s,u.normal),h.face=u,h.barycoord=f}return h}class oh extends Be{constructor(t=null,e=1,n=1,i,r,a,o,c,l=De,h=De,f,u){super(null,a,o,c,l,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rl extends fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pi=new ne,Pl=new ne,Ks=[],Ll=new mi,Qu=new ne,ns=new ae,is=new Ls;class xn extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),Ll.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Ll)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),is.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Pi),Pl.multiplyMatrices(n,Pi),ns.matrixWorld=Pl,ns.raycast(t,Ks);for(let a=0,o=Ks.length;a<o;a++){const c=Ks[a];c.instanceId=r,c.object=this,e.push(c)}Ks.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new oh(new Float32Array(i*this.count),i,this.count,Do,cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ii=new Ls,ju=new at(.5,.5),Qs=new P;class Ho{constructor(t=new $n,e=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],S=r[9],m=r[10],p=r[11],M=r[12],w=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-a,d-h,p-g,E-M).normalize(),i[1].setComponents(l+a,d+h,p+g,E+M).normalize(),i[2].setComponents(l+o,d+f,p+S,E+w).normalize(),i[3].setComponents(l-o,d-f,p-S,E-w).normalize(),n)i[4].setComponents(c,u,m,_).normalize(),i[5].setComponents(l-c,d-u,p-m,E-_).normalize();else if(i[4].setComponents(l-c,d-u,p-m,E-_).normalize(),e===_n)i[5].setComponents(l+c,d+u,p+m,E+_).normalize();else if(e===ws)i[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){ii.center.set(0,0,0);const e=ju.distanceTo(t.center);return ii.radius=.7071067811865476+e,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Qs.x=i.normal.x>0?t.max.x:t.min.x,Qs.y=i.normal.y>0?t.max.y:t.min.y,Qs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lh extends Be{constructor(t=[],e=ui,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gi extends Be{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends Be{constructor(t,e,n=bn,i,r,a,o=De,c=De,l,h=Fn,f=1){if(h!==Fn&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class tf extends Es{constructor(t,e=bn,n=ui,i,r,a=De,o=De,c,l=Fn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ch extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vi extends Ie{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function g(S,m,p,M,w,_,E,y,C,v,T){const R=_/C,I=E/v,F=_/2,z=E/2,D=y/2,B=C+1,q=v+1;let W=0,Q=0;const X=new P;for(let J=0;J<q;J++){const K=J*I-z;for(let yt=0;yt<B;yt++){const St=yt*R-F;X[S]=St*M,X[m]=K*w,X[p]=D,l.push(X.x,X.y,X.z),X[S]=0,X[m]=0,X[p]=y>0?1:-1,h.push(X.x,X.y,X.z),f.push(yt/C),f.push(1-J/v),W+=1}}for(let J=0;J<v;J++)for(let K=0;K<C;K++){const yt=u+K+B*J,St=u+K+B*(J+1),jt=u+(K+1)+B*(J+1),Wt=u+(K+1)+B*J;c.push(yt,St,Wt),c.push(St,jt,Wt),Q+=6}o.addGroup(d,Q,T),d+=Q,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Vo extends Ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Go extends Ie{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const S=[],m=n/2;let p=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function M(){const _=new P,E=new P;let y=0;const C=(e-t)/n;for(let v=0;v<=r;v++){const T=[],R=v/r,I=R*(e-t)+t;for(let F=0;F<=i;F++){const z=F/i,D=z*c+o,B=Math.sin(D),q=Math.cos(D);E.x=I*B,E.y=-R*n+m,E.z=I*q,f.push(E.x,E.y,E.z),_.set(B,C,q).normalize(),u.push(_.x,_.y,_.z),d.push(z,1-R),T.push(g++)}S.push(T)}for(let v=0;v<i;v++)for(let T=0;T<r;T++){const R=S[T][v],I=S[T+1][v],F=S[T+1][v+1],z=S[T][v+1];(t>0||T!==0)&&(h.push(R,I,z),y+=3),(e>0||T!==r-1)&&(h.push(I,F,z),y+=3)}l.addGroup(p,y,0),p+=y}function w(_){const E=g,y=new at,C=new P;let v=0;const T=_===!0?t:e,R=_===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),g++;const I=g;for(let F=0;F<=i;F++){const D=F/i*c+o,B=Math.cos(D),q=Math.sin(D);C.x=T*q,C.y=m*R,C.z=T*B,f.push(C.x,C.y,C.z),u.push(0,R,0),y.x=B*.5+.5,y.y=q*.5*R+.5,d.push(y.x,y.y),g++}for(let F=0;F<i;F++){const z=E+F,D=I+F;_===!0?h.push(D,D+1,z):h.push(D+1,D,z),v+=3}l.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wo extends Ie{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const w=new P,_=new P,E=new P;for(let y=0;y<e.length;y+=3)d(e[y+0],w),d(e[y+1],_),d(e[y+2],E),c(w,_,E,M)}function c(M,w,_,E){const y=E+1,C=[];for(let v=0;v<=y;v++){C[v]=[];const T=M.clone().lerp(_,v/y),R=w.clone().lerp(_,v/y),I=y-v;for(let F=0;F<=I;F++)F===0&&v===y?C[v][F]=T:C[v][F]=T.clone().lerp(R,F/I)}for(let v=0;v<y;v++)for(let T=0;T<2*(y-v)-1;T++){const R=Math.floor(T/2);T%2===0?(u(C[v][R+1]),u(C[v+1][R]),u(C[v][R])):(u(C[v][R+1]),u(C[v+1][R+1]),u(C[v+1][R]))}}function l(M){const w=new P;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(M),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){const M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const _=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;a.push(_,1-E)}g(),f()}function f(){for(let M=0;M<a.length;M+=6){const w=a[M+0],_=a[M+2],E=a[M+4],y=Math.max(w,_,E),C=Math.min(w,_,E);y>.9&&C<.1&&(w<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,w){const _=M*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const M=new P,w=new P,_=new P,E=new P,y=new at,C=new at,v=new at;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),y.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),E.copy(M).add(w).add(_).divideScalar(3);const I=m(E);S(y,R+0,M,I),S(C,R+2,w,I),S(v,R+4,_,I)}}function S(M,w,_,E){E<0&&M.x===1&&(a[w]=M.x-1),_.x===0&&_.z===0&&(a[w]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.vertices,t.indices,t.radius,t.detail)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new at:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],r=[],a=[],o=new P,c=new ne;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Jt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Jt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xo extends En{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ef extends Xo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Il=new P,Dl=new P,va=new qo,xa=new qo,_a=new qo;class $o extends En{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Dl.subVectors(i[0],i[1]).add(i[0]),l=Dl);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Il.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),va.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,S,m),xa.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,S,m),_a.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),xa.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),_a.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(va.calc(c),xa.calc(c),_a.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ul(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function nf(s,t){const e=1-s;return e*e*t}function sf(s,t){return 2*(1-s)*s*t}function rf(s,t){return s*s*t}function vs(s,t,e,n){return nf(s,t)+sf(s,e)+rf(s,n)}function af(s,t){const e=1-s;return e*e*e*t}function of(s,t){const e=1-s;return 3*e*e*s*t}function lf(s,t){return 3*(1-s)*s*s*t}function cf(s,t){return s*s*s*t}function xs(s,t,e,n,i){return af(s,t)+of(s,e)+lf(s,n)+cf(s,i)}class hh extends En{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xs(t,i.x,r.x,a.x,o.x),xs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hf extends En{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xs(t,i.x,r.x,a.x,o.x),xs(t,i.y,r.y,a.y,o.y),xs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uh extends En{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends En{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends En{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,i.x,r.x,a.x),vs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dh extends En{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,i.x,r.x,a.x),vs(t,i.y,r.y,a.y),vs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ph extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Ul(o,c.x,l.x,h.x,f.x),Ul(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var Er=Object.freeze({__proto__:null,ArcCurve:ef,CatmullRomCurve3:$o,CubicBezierCurve:hh,CubicBezierCurve3:hf,EllipseCurve:Xo,LineCurve:uh,LineCurve3:uf,QuadraticBezierCurve:fh,QuadraticBezierCurve3:dh,SplineCurve:ph});class ff extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Er[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Er[i.type]().fromJSON(i))}return this}}class _o extends ff{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new uh(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new fh(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new hh(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ph(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new Xo(t,e,n,i,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ur extends _o{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new _o().fromJSON(i))}return this}}function df(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=mh(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=xf(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let h=o,f=c;for(let u=e;u<i;u+=e){const d=s[u],g=s[u+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return Ts(r,a,e,o,c,l,0),a}function mh(s,t,e,n,i){let r;if(i===Rf(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Nl(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Nl(a/n|0,s[a],s[a+1],r);return r&&Gi(r,r.next)&&(Cs(r),r=r.next),r}function di(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Gi(e,e.next)||_e(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(s,t,e,n,i,r,a){if(!s)return;!a&&r&&yf(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?mf(s,n,i,r):pf(s)){t.push(c.i,s.i,l.i),Cs(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=gf(di(s),t),Ts(s,t,e,n,i,r,2)):a===2&&vf(s,t,e,n,i,r):Ts(di(s),t,e,n,i,r,1);break}}}function pf(s){const t=s.prev,e=s,n=s.next;if(_e(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,r,a),f=Math.min(o,c,l),u=Math.max(i,r,a),d=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&ps(i,o,r,c,a,l,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mf(s,t,e,n){const i=s.prev,r=s,a=s.next;if(_e(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,f=r.y,u=a.y,d=Math.min(o,c,l),g=Math.min(h,f,u),S=Math.max(o,c,l),m=Math.max(h,f,u),p=Mo(d,g,t,e,n),M=Mo(S,m,t,e,n);let w=s.prevZ,_=s.nextZ;for(;w&&w.z>=p&&_&&_.z<=M;){if(w.x>=d&&w.x<=S&&w.y>=g&&w.y<=m&&w!==i&&w!==a&&ps(o,h,c,f,l,u,w.x,w.y)&&_e(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=d&&_.x<=S&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&ps(o,h,c,f,l,u,_.x,_.y)&&_e(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=S&&w.y>=g&&w.y<=m&&w!==i&&w!==a&&ps(o,h,c,f,l,u,w.x,w.y)&&_e(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=S&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&ps(o,h,c,f,l,u,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function gf(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Gi(n,i)&&vh(n,e,e.next,i)&&As(n,i)&&As(i,n)&&(t.push(n.i,e.i,i.i),Cs(e),Cs(e.next),e=s=i),e=e.next}while(e!==s);return di(e)}function vf(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tf(a,o)){let c=xh(a,o);a=di(a,a.next),c=di(c,c.next),Ts(a,t,e,n,i,r,0),Ts(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function xf(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=mh(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Ef(l))}i.sort(_f);for(let r=0;r<i.length;r++)e=Mf(i[r],e);return e}function _f(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Mf(s,t){const e=Sf(s,t);if(!e)return t;const n=xh(e,s);return di(n,n.next),di(e,e.next)}function Sf(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(Gi(s,e))return e;do{if(Gi(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&gh(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const f=Math.abs(i-e.y)/(n-e.x);As(e,s)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&bf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function bf(s,t){return _e(s.prev,s,t.prev)<0&&_e(t.next,s,s.next)<0}function yf(s,t,e,n){let i=s;do i.z===0&&(i.z=Mo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,wf(i)}function wf(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Mo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ef(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function gh(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function ps(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&gh(s,t,e,n,i,r,a,o)}function Tf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Af(s,t)&&(As(s,t)&&As(t,s)&&Cf(s,t)&&(_e(s.prev,s,t.prev)||_e(s,t.prev,t))||Gi(s,t)&&_e(s.prev,s,s.next)>0&&_e(t.prev,t,t.next)>0)}function _e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Gi(s,t){return s.x===t.x&&s.y===t.y}function vh(s,t,e,n){const i=tr(_e(s,t,e)),r=tr(_e(s,t,n)),a=tr(_e(e,n,s)),o=tr(_e(e,n,t));return!!(i!==r&&a!==o||i===0&&js(s,e,t)||r===0&&js(s,n,t)||a===0&&js(e,s,n)||o===0&&js(e,t,n))}function js(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function tr(s){return s>0?1:s<0?-1:0}function Af(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&vh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function As(s,t){return _e(s.prev,s,s.next)<0?_e(s,t,s.next)>=0&&_e(s,s.prev,t)>=0:_e(s,t,s.prev)<0||_e(s,s.next,t)<0}function Cf(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function xh(s,t){const e=So(s.i,s.x,s.y),n=So(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nl(s,t,e,n){const i=So(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function So(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rf(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Pf{static triangulate(t,e,n=2){return df(t,e,n)}}class Dn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Fl(t),Ol(n,t);let a=t.length;e.forEach(Fl);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Ol(n,e[c]);const o=Pf.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Fl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ol(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Rs extends Ie{constructor(t=new Ur([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Lf;let w,_=!1,E,y,C,v;if(p){w=p.getSpacedPoints(h),_=!0,u=!1;const nt=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,nt),y=new P,C=new P,v=new P}u||(m=0,d=0,g=0,S=0);const T=o.extractPoints(l);let R=T.shape;const I=T.holes;if(!Dn.isClockWise(R)){R=R.reverse();for(let nt=0,st=I.length;nt<st;nt++){const ot=I[nt];Dn.isClockWise(ot)&&(I[nt]=ot.reverse())}}function z(nt){const ot=10000000000000001e-36;let lt=nt[0];for(let ut=1;ut<=nt.length;ut++){const Bt=ut%nt.length,Ot=nt[Bt],Vt=Ot.x-lt.x,Xt=Ot.y-lt.y,L=Vt*Vt+Xt*Xt,oe=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(lt.x),Math.abs(lt.y)),Kt=ot*oe*oe;if(L<=Kt){nt.splice(Bt,1),ut--;continue}lt=Ot}}z(R),I.forEach(z);const D=I.length,B=R;for(let nt=0;nt<D;nt++){const st=I[nt];R=R.concat(st)}function q(nt,st,ot){return st||ee("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(st,ot)}const W=R.length;function Q(nt,st,ot){let lt,ut,Bt;const Ot=nt.x-st.x,Vt=nt.y-st.y,Xt=ot.x-nt.x,L=ot.y-nt.y,oe=Ot*Ot+Vt*Vt,Kt=Ot*L-Vt*Xt;if(Math.abs(Kt)>Number.EPSILON){const A=Math.sqrt(oe),x=Math.sqrt(Xt*Xt+L*L),O=st.x-Vt/A,V=st.y+Ot/A,$=ot.x-L/x,ct=ot.y+Xt/x,ht=(($-O)*L-(ct-V)*Xt)/(Ot*L-Vt*Xt);lt=O+Ot*ht-nt.x,ut=V+Vt*ht-nt.y;const Y=lt*lt+ut*ut;if(Y<=2)return new at(lt,ut);Bt=Math.sqrt(Y/2)}else{let A=!1;Ot>Number.EPSILON?Xt>Number.EPSILON&&(A=!0):Ot<-Number.EPSILON?Xt<-Number.EPSILON&&(A=!0):Math.sign(Vt)===Math.sign(L)&&(A=!0),A?(lt=-Vt,ut=Ot,Bt=Math.sqrt(oe)):(lt=Ot,ut=Vt,Bt=Math.sqrt(oe/2))}return new at(lt/Bt,ut/Bt)}const X=[];for(let nt=0,st=B.length,ot=st-1,lt=nt+1;nt<st;nt++,ot++,lt++)ot===st&&(ot=0),lt===st&&(lt=0),X[nt]=Q(B[nt],B[ot],B[lt]);const J=[];let K,yt=X.concat();for(let nt=0,st=D;nt<st;nt++){const ot=I[nt];K=[];for(let lt=0,ut=ot.length,Bt=ut-1,Ot=lt+1;lt<ut;lt++,Bt++,Ot++)Bt===ut&&(Bt=0),Ot===ut&&(Ot=0),K[lt]=Q(ot[lt],ot[Bt],ot[Ot]);J.push(K),yt=yt.concat(K)}let St;if(m===0)St=Dn.triangulateShape(B,I);else{const nt=[],st=[];for(let ot=0;ot<m;ot++){const lt=ot/m,ut=d*Math.cos(lt*Math.PI/2),Bt=g*Math.sin(lt*Math.PI/2)+S;for(let Ot=0,Vt=B.length;Ot<Vt;Ot++){const Xt=q(B[Ot],X[Ot],Bt);xt(Xt.x,Xt.y,-ut),lt===0&&nt.push(Xt)}for(let Ot=0,Vt=D;Ot<Vt;Ot++){const Xt=I[Ot];K=J[Ot];const L=[];for(let oe=0,Kt=Xt.length;oe<Kt;oe++){const A=q(Xt[oe],K[oe],Bt);xt(A.x,A.y,-ut),lt===0&&L.push(A)}lt===0&&st.push(L)}}St=Dn.triangulateShape(nt,st)}const jt=St.length,Wt=g+S;for(let nt=0;nt<W;nt++){const st=u?q(R[nt],yt[nt],Wt):R[nt];_?(C.copy(E.normals[0]).multiplyScalar(st.x),y.copy(E.binormals[0]).multiplyScalar(st.y),v.copy(w[0]).add(C).add(y),xt(v.x,v.y,v.z)):xt(st.x,st.y,0)}for(let nt=1;nt<=h;nt++)for(let st=0;st<W;st++){const ot=u?q(R[st],yt[st],Wt):R[st];_?(C.copy(E.normals[nt]).multiplyScalar(ot.x),y.copy(E.binormals[nt]).multiplyScalar(ot.y),v.copy(w[nt]).add(C).add(y),xt(v.x,v.y,v.z)):xt(ot.x,ot.y,f/h*nt)}for(let nt=m-1;nt>=0;nt--){const st=nt/m,ot=d*Math.cos(st*Math.PI/2),lt=g*Math.sin(st*Math.PI/2)+S;for(let ut=0,Bt=B.length;ut<Bt;ut++){const Ot=q(B[ut],X[ut],lt);xt(Ot.x,Ot.y,f+ot)}for(let ut=0,Bt=I.length;ut<Bt;ut++){const Ot=I[ut];K=J[ut];for(let Vt=0,Xt=Ot.length;Vt<Xt;Vt++){const L=q(Ot[Vt],K[Vt],lt);_?xt(L.x,L.y+w[h-1].y,w[h-1].x+ot):xt(L.x,L.y,f+ot)}}}ie(),Z();function ie(){const nt=i.length/3;if(u){let st=0,ot=W*st;for(let lt=0;lt<jt;lt++){const ut=St[lt];kt(ut[2]+ot,ut[1]+ot,ut[0]+ot)}st=h+m*2,ot=W*st;for(let lt=0;lt<jt;lt++){const ut=St[lt];kt(ut[0]+ot,ut[1]+ot,ut[2]+ot)}}else{for(let st=0;st<jt;st++){const ot=St[st];kt(ot[2],ot[1],ot[0])}for(let st=0;st<jt;st++){const ot=St[st];kt(ot[0]+W*h,ot[1]+W*h,ot[2]+W*h)}}n.addGroup(nt,i.length/3-nt,0)}function Z(){const nt=i.length/3;let st=0;et(B,st),st+=B.length;for(let ot=0,lt=I.length;ot<lt;ot++){const ut=I[ot];et(ut,st),st+=ut.length}n.addGroup(nt,i.length/3-nt,1)}function et(nt,st){let ot=nt.length;for(;--ot>=0;){const lt=ot;let ut=ot-1;ut<0&&(ut=nt.length-1);for(let Bt=0,Ot=h+m*2;Bt<Ot;Bt++){const Vt=W*Bt,Xt=W*(Bt+1),L=st+lt+Vt,oe=st+ut+Vt,Kt=st+ut+Xt,A=st+lt+Xt;wt(L,oe,Kt,A)}}}function xt(nt,st,ot){c.push(nt),c.push(st),c.push(ot)}function kt(nt,st,ot){Ht(nt),Ht(st),Ht(ot);const lt=i.length/3,ut=M.generateTopUV(n,i,lt-3,lt-2,lt-1);he(ut[0]),he(ut[1]),he(ut[2])}function wt(nt,st,ot,lt){Ht(nt),Ht(st),Ht(lt),Ht(st),Ht(ot),Ht(lt);const ut=i.length/3,Bt=M.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);he(Bt[0]),he(Bt[1]),he(Bt[3]),he(Bt[1]),he(Bt[2]),he(Bt[3])}function Ht(nt){i.push(c[nt*3+0]),i.push(c[nt*3+1]),i.push(c[nt*3+2])}function he(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return If(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Er[i.type]().fromJSON(i)),new Rs(n,t.options)}}const Lf={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new at(r,a),new at(o,c),new at(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],g=t[i*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-f),new at(u,1-g),new at(S,1-p)]:[new at(o,1-c),new at(h,1-f),new at(d,1-g),new at(m,1-p)]}};function If(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yo extends Wo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yo(t.radius,t.detail)}}class Zo extends Ie{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,f=new P,u=new at,d=new P,g=new P,S=new P;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,S.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(S.x,S.y,S.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),c.push(d.x,d.y,d.z),S.copy(g)}for(let M=0;M<=e;M++){const w=n+M*h*i,_=Math.sin(w),E=Math.cos(w);for(let y=0;y<=t.length-1;y++){f.x=t[y].x*_,f.y=t[y].y,f.z=t[y].x*E,a.push(f.x,f.y,f.z),u.x=M/e,u.y=y/(t.length-1),o.push(u.x,u.y);const C=c[3*y+0]*_,v=c[3*y+1],T=c[3*y+0]*E;l.push(C,v,T)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){const _=w+M*t.length,E=_,y=_+t.length,C=_+t.length+1,v=_+1;r.push(E,y,v),r.push(C,v,y)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.points,t.segments,t.phiStart,t.phiLength)}}class On extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],S=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let w=0;w<l;w++){const _=w*f-r;g.push(_,-M,0),S.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const w=M+l*p,_=M+l*(p+1),E=M+1+l*(p+1),y=M+1+l*p;d.push(w,_,y),d.push(_,E,y)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(S,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.widthSegments,t.heightSegments)}}class Nr extends Ie{constructor(t=new Ur([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new re(i,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(a,2));function l(h){const f=i.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;Dn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Dn.isClockWise(M)===!0&&(g[m]=M.reverse())}const S=Dn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];i.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=S.length;m<p;m++){const M=S[m],w=M[0]+f,_=M[1]+f,E=M[2]+f;n.push(w,_,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Df(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new Nr(n,t.curveSegments)}}function Df(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Ps extends Ie{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new P,u=new P,d=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){const M=[],w=p/n,_=a+w*o,E=t*Math.cos(_),y=Math.sqrt(t*t-E*E);let C=0;p===0&&a===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){const T=v/e,R=i+T*r;f.x=-y*Math.cos(R),f.y=E,f.z=y*Math.sin(R),g.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),m.push(T+C,1-w),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const w=h[p][M+1],_=h[p][M],E=h[p+1][M],y=h[p+1][M+1];(p!==0||a>0)&&d.push(w,_,y),(p!==n-1||c<Math.PI)&&d.push(_,E,y)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(S,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fr extends Ie{constructor(t=new dh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,l=new at;let h=new P;const f=[],u=[],d=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function S(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),M(),p()}function m(w){h=t.getPointAt(w/e,h);const _=a.normals[w],E=a.binormals[w];for(let y=0;y<=i;y++){const C=y/i*Math.PI*2,v=Math.sin(C),T=-Math.cos(C);c.x=T*_.x+v*E.x,c.y=T*_.y+v*E.y,c.z=T*_.z+v*E.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let _=1;_<=i;_++){const E=(i+1)*(w-1)+(_-1),y=(i+1)*w+(_-1),C=(i+1)*w+_,v=(i+1)*(w-1)+_;g.push(E,y,v),g.push(y,C,v)}}function M(){for(let w=0;w<=e;w++)for(let _=0;_<=i;_++)l.x=w/e,l.y=_/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Fr(new Er[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Wi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Bl(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Bl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const n=Wi(s[e]);for(const i in n)t[i]=n[i]}return t}function Bl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Uf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _h(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Nf={clone:Wi,merge:He};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Nt().setHex(i.value);break;case"v2":this.uniforms[n].value=new at().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Bf extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Te extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zf extends Yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Co,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kf extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hf extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jo extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Vf extends Jo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ma=new ne,zl=new P,kl=new P;class Mh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(zl),kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ma,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===ws||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const er=new P,nr=new Xe,mn=new P;class Sh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(er,nr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,nr,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(er,nr,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,nr,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new P,Hl=new at,Vl=new at;class Qe extends Sh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Vl),e.subVectors(Vl,Hl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Gf extends Mh{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class Wf extends Jo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Or extends Sh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xf extends Mh{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qf extends Jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Xf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Li=-90,Ii=1;class $f extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(Li,Ii,t,e);i.layers=this.layers,this.add(i);const r=new Qe(Li,Ii,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Li,Ii,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Li,Ii,t,e);o.layers=this.layers,this.add(o);const c=new Qe(Li,Ii,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Li,Ii,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yf extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Gl=new ne;class Zf{constructor(t,e,n=0,i=1/0){this.ray=new ah(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(t,e=!0,n=[]){return bo(t,this,n,e),n.sort(Wl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)bo(t[i],this,n,e);return n.sort(Wl),n}}function Wl(s,t){return s.distance-t.distance}function bo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)bo(r[a],t,e,!0)}}class bh{static{bh.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}function Xl(s,t,e,n){const i=Jf(n);switch(e){case Qc:return s*t;case Do:return s*t/i.components*i.byteLength;case Uo:return s*t/i.components*i.byteLength;case fi:return s*t*2/i.components*i.byteLength;case No:return s*t*2/i.components*i.byteLength;case jc:return s*t*3/i.components*i.byteLength;case hn:return s*t*4/i.components*i.byteLength;case Fo:return s*t*4/i.components*i.byteLength;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fr:case dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Va:case Wa:return Math.max(s,16)*Math.max(t,8)/4;case Ha:case Ga:return Math.max(s,8)*Math.max(t,8)/2;case Xa:case qa:case Ya:case Za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $a:case _r:case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case uo:case fo:case po:return Math.ceil(s/4)*Math.ceil(t/4)*16;case mo:case go:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Mr:case vo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jf(s){switch(s){case Ye:case Yc:return{byteLength:1,components:1};case bs:case Zc:case yn:return{byteLength:2,components:1};case Lo:case Io:return{byteLength:2,components:4};case bn:case Po:case cn:return{byteLength:4,components:1};case Jc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);function yh(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Kf(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],S=f[d];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,f[u]=S)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const S=f[d];s.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
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
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sd=`#define PI 3.141592653589793
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
} // validated`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yd=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
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
}`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
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
#endif`,Jd=`uniform sampler2D dfgLUT;
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
}`,Kd=`
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l0=`#if defined( USE_POINTS_UV )
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
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
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
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O0=`float getShadowMask() {
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
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
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
}`,rp=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,up=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,dp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define MATCAP
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
}`,vp=`#define MATCAP
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
}`,xp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,Mp=`#define PHONG
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
}`,Sp=`#define PHONG
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
}`,bp=`#define STANDARD
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
}`,yp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Ep=`#define TOON
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
}`,Tp=`uniform float size;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Rp=`uniform vec3 color;
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
}`,Pp=`uniform float rotation;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Qf,alphahash_pars_fragment:jf,alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:ad,batching_vertex:od,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:fd,clipping_planes_fragment:dd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:vd,color_pars_fragment:xd,color_pars_vertex:_d,color_vertex:Md,common:Sd,cube_uv_reflection_fragment:bd,defaultnormal_vertex:yd,displacementmap_pars_vertex:wd,displacementmap_vertex:Ed,emissivemap_fragment:Td,emissivemap_pars_fragment:Ad,colorspace_fragment:Cd,colorspace_pars_fragment:Rd,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Id,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Wd,envmap_vertex:Ud,fog_vertex:Nd,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:kd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Gd,lights_toon_fragment:Xd,lights_toon_pars_fragment:qd,lights_phong_fragment:$d,lights_phong_pars_fragment:Yd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Jd,lights_fragment_begin:Kd,lights_fragment_maps:Qd,lights_fragment_end:jd,lightprobes_pars_fragment:t0,logdepthbuf_fragment:e0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:f0,morphnormal_vertex:d0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:v0,normal_pars_fragment:x0,normal_pars_vertex:_0,normal_vertex:M0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:w0,iridescence_pars_fragment:E0,opaque_fragment:T0,packing:A0,premultiplied_alpha_fragment:C0,project_vertex:R0,dithering_fragment:P0,dithering_pars_fragment:L0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:N0,shadowmap_vertex:F0,shadowmask_pars_fragment:O0,skinbase_vertex:B0,skinning_pars_vertex:z0,skinning_vertex:k0,skinnormal_vertex:H0,specularmap_fragment:V0,specularmap_pars_fragment:G0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:$0,uv_pars_fragment:Y0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:K0,background_vert:Q0,background_frag:j0,backgroundCube_vert:tp,backgroundCube_frag:ep,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:rp,distance_vert:ap,distance_frag:op,equirect_vert:lp,equirect_frag:cp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:fp,meshbasic_frag:dp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:vp,meshnormal_vert:xp,meshnormal_frag:_p,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:bp,meshphysical_frag:yp,meshtoon_vert:wp,meshtoon_frag:Ep,points_vert:Tp,points_frag:Ap,shadow_vert:Cp,shadow_frag:Rp,sprite_vert:Pp,sprite_frag:Lp},vt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},vn={basic:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:He([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:He([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:He([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:He([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:He([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:He([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:He([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:He([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:He([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:He([vt.lights,vt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};vn.physical={uniforms:He([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ir={r:0,b:0,g:0},Ip=new ne,wh=new qt;wh.set(-1,0,0,0,1,0,0,0,1);function Dp(s,t,e,n,i,r){const a=new Nt(0);let o=i===!0?0:1,c,l,h=null,f=0,u=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const _=M.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(M){let w=!1;const _=d(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),w=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(M,w){const _=d(w);_&&(_.isCubeTexture||_.mapping===Dr)?(l===void 0&&(l=new ae(new vi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Wi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(wh),l.material.toneMapped=te.getTransfer(_.colorSpace)!==ue,(h!==_||f!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ae(new On(2,2),new wn({name:"BackgroundMaterial",uniforms:Wi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(ir,_h(s)),e.buffers.color.setClear(ir.r,ir.g,ir.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:S,dispose:p}}function Up(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(I,F,z,D,B){let q=!1;const W=f(I,D,z,F);r!==W&&(r=W,l(r.object)),q=d(I,D,z,B),q&&g(I,D,z,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(I,F,z,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function f(I,F,z,D){const B=D.wireframe===!0;let q=n[F.id];q===void 0&&(q={},n[F.id]=q);const W=I.isInstancedMesh===!0?I.id:0;let Q=q[W];Q===void 0&&(Q={},q[W]=Q);let X=Q[z.id];X===void 0&&(X={},Q[z.id]=X);let J=X[B];return J===void 0&&(J=u(c()),X[B]=J),J}function u(I){const F=[],z=[],D=[];for(let B=0;B<e;B++)F[B]=0,z[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:D,object:I,attributes:{},index:null}}function d(I,F,z,D){const B=r.attributes,q=F.attributes;let W=0;const Q=z.getAttributes();for(const X in Q)if(Q[X].location>=0){const K=B[X];let yt=q[X];if(yt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(yt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(yt=I.instanceColor)),K===void 0||K.attribute!==yt||yt&&K.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function g(I,F,z,D){const B={},q=F.attributes;let W=0;const Q=z.getAttributes();for(const X in Q)if(Q[X].location>=0){let K=q[X];K===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const yt={};yt.attribute=K,K&&K.data&&(yt.data=K.data),B[X]=yt,W++}r.attributes=B,r.attributesNum=W,r.index=D}function S(){const I=r.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const z=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;z[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),B[I]!==F&&(s.vertexAttribDivisor(I,F),B[I]=F)}function M(){const I=r.newAttributes,F=r.enabledAttributes;for(let z=0,D=F.length;z<D;z++)F[z]!==I[z]&&(s.disableVertexAttribArray(z),F[z]=0)}function w(I,F,z,D,B,q,W){W===!0?s.vertexAttribIPointer(I,F,z,B,q):s.vertexAttribPointer(I,F,z,D,B,q)}function _(I,F,z,D){S();const B=D.attributes,q=z.getAttributes(),W=F.defaultAttributeValues;for(const Q in q){const X=q[Q];if(X.location>=0){let J=B[Q];if(J===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const K=J.normalized,yt=J.itemSize,St=t.get(J);if(St===void 0)continue;const jt=St.buffer,Wt=St.type,ie=St.bytesPerElement,Z=Wt===s.INT||Wt===s.UNSIGNED_INT||J.gpuType===Po;if(J.isInterleavedBufferAttribute){const et=J.data,xt=et.stride,kt=J.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<X.locationSize;wt++)p(X.location+wt,et.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<X.locationSize;wt++)m(X.location+wt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let wt=0;wt<X.locationSize;wt++)w(X.location+wt,yt/X.locationSize,Wt,K,xt*ie,(kt+yt/X.locationSize*wt)*ie,Z)}else{if(J.isInstancedBufferAttribute){for(let et=0;et<X.locationSize;et++)p(X.location+et,J.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let et=0;et<X.locationSize;et++)m(X.location+et);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let et=0;et<X.locationSize;et++)w(X.location+et,yt/X.locationSize,Wt,K,yt*ie,yt/X.locationSize*et*ie,Z)}}else if(W!==void 0){const K=W[Q];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(X.location,K);break;case 3:s.vertexAttrib3fv(X.location,K);break;case 4:s.vertexAttrib4fv(X.location,K);break;default:s.vertexAttrib1fv(X.location,K)}}}}M()}function E(){T();for(const I in n){const F=n[I];for(const z in F){const D=F[z];for(const B in D){const q=D[B];for(const W in q)h(q[W].object),delete q[W];delete D[B]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const z in F){const D=F[z];for(const B in D){const q=D[B];for(const W in q)h(q[W].object),delete q[W];delete D[B]}}delete n[I.id]}function C(I){for(const F in n){const z=n[F];for(const D in z){const B=z[D];if(B[I.id]===void 0)continue;const q=B[I.id];for(const W in q)h(q[W].object),delete q[W];delete B[I.id]}}}function v(I){for(const F in n){const z=n[F],D=I.isInstancedMesh===!0?I.id:0,B=z[D];if(B!==void 0){for(const q in B){const W=B[q];for(const Q in W)h(W[Q].object),delete W[Q];delete B[q]}delete z[D],Object.keys(z).length===0&&delete n[F]}}}function T(){R(),a=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function Np(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==hn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ye&&C!==cn&&!v&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Gt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,maxSamples:E,samples:y}}function Op(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new $n,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,w=M*4;let _=p.clippingState||null;c.value=_,_=h(g,u,w,d);for(let E=0;E!==w;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=c.value,g!==!0||m===null){const p=d+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=d;w!==S;++w,_+=4)a.copy(f[w]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Bi=4,Bp=6,zp=20,kp=256,ss=new Or,ql=new Nt;let Sa=null,ba=0,ya=0,wa=!1;const Hp=new P,si=new P;class yo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Hp}=r;Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,ba,ya),this._renderer.xr.enabled=wa,t.scissorTest=!1,Di(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:yn,format:hn,colorSpace:br,depthBuffer:!1},i=$l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vp(r)),this._blurMaterial=Wp(r,t,e),this._ggxMaterial=Gp(r,t,e)}return i}_compileMaterial(t){const e=new ae(new Ie,t);this._renderer.compile(e,ss)}_sceneToCubeUV(t,e,n,i,r){const c=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ql),f.toneMapping=Sn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new vi,new Zi({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(ql),p=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):_===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));const E=this._cubeSize;Di(i,_*E,w>2?E:0,E,E),f.setRenderTarget(i),p&&f.render(S,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ui||t.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Di(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ss)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,d=f*u,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-Bi?n-g+Bi:0),p=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Di(r,m,p,3*S,2*S),i.setRenderTarget(r),i.render(o,ss),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Di(t,m,p,3*S,2*S),i.setRenderTarget(t),i.render(o,ss)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],f=3*h*(i>this._lodMax-Bi?i-this._lodMax+Bi:0),u=4*(this._cubeSize-h);Di(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(c,ss)}}function Vp(s){const t=[],e=[];let n=s;const i=s-Bi+1+Bp;for(let r=0;r<i;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,d=3,g=new Float32Array(d*u*f),S=new Float32Array(d*u*f);for(let p=0;p<f;p++){const M=p%3*2/3-1,w=p>2?0:-1,_=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(_,d*u*p);for(let E=0;E<u;E++){const y=h[E*2]*2-1,C=h[E*2+1]*2-1;p===0?si.set(1,C,y):p===1?si.set(-y,1,-C):p===2?si.set(-y,C,1):p===3?si.set(-1,C,-y):p===4?si.set(-y,-1,C):si.set(y,C,-1),si.toArray(S,(p*u+E)*d)}}const m=new Ie;m.setAttribute("position",new fn(g,d)),m.setAttribute("outputDirection",new fn(S,d)),e.push(new ae(m,null)),n>Bi&&n--}return{lodMeshes:e,sizeLods:t}}function $l(s,t,e){const n=new un(s,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Gp(s,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Wp(s,t,e){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:zp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Yl(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Zl(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Br(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Eh extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vi(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Un});r.uniforms.tEquirect.value=e;const a=new ae(i,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=Oe),new $f(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function Xp(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Xr||d===qr)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new Eh(g.height);return S.fromEquirectangularTexture(s,u),t.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,g=d===Xr||d===qr,S=d===ui||d===Vi;if(g||S){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new yo(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new yo(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Xr?u.mapping=ui:d===qr&&(u.mapping=Vi),u}function c(u){let d=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&d++;return d===g}function l(u){const d=u.target;d.removeEventListener("dispose",l);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function qp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&zi("WebGLRenderer: "+n+" extension not supported."),i}}}function $p(s,t,e,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const d in u)t.update(u[d],s.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(d!==null){const M=d.array;S=d.version;for(let w=0,_=M.length;w<_;w+=3){const E=M[w+0],y=M[w+1],C=M[w+2];u.push(E,y,y,C,C,E)}}else{const M=g.array;S=g.version;for(let w=0,_=M.length/3-1;w<_;w+=3){const E=w+0,y=w+1,C=w+2;u.push(E,y,y,C,C,E)}}const m=new(g.count>=65535?rh:sh)(u,1);m.version=S;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Yp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let S=0;for(let m=0;m<d;m++)S+=u[m];e.update(S,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Zp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jp(s,t,e){const n=new WeakMap,i=new xe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;d===!0&&(w=1),g===!0&&(w=2),S===!0&&(w=3);let _=o.attributes.position.count*w,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const y=new Float32Array(_*E*4*f),C=new eh(y,_,E,f);C.type=cn,C.needsUpdate=!0;const v=w*4;for(let R=0;R<f;R++){const I=m[R],F=p[R],z=M[R],D=_*E*4*R;for(let B=0;B<I.count;B++){const q=B*v;d===!0&&(i.fromBufferAttribute(I,B),y[D+q+0]=i.x,y[D+q+1]=i.y,y[D+q+2]=i.z,y[D+q+3]=0),g===!0&&(i.fromBufferAttribute(F,B),y[D+q+4]=i.x,y[D+q+5]=i.y,y[D+q+6]=i.z,y[D+q+7]=0),S===!0&&(i.fromBufferAttribute(z,B),y[D+q+8]=i.x,y[D+q+9]=i.y,y[D+q+10]=i.z,y[D+q+11]=z.itemSize===4?i.w:1)}}u={count:f,texture:C,size:new at(_,E)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<l.length;S++)d+=l[S];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Kp(s,t,e,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Qp={[Hc]:"LINEAR_TONE_MAPPING",[Vc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Ro]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function jp(s,t,e,n,i,r){const a=new un(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ie;l.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new re([0,2,0,0,2,0],2));const h=new Bf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ae(l,h),u=new Or(-1,1,1,-1,0,1);let d=null,g=null,S=!1,m,p=null,M=[],w=!1;this.setSize=function(_,E){a.setSize(_,E),o!==null&&o.setSize(_,E),c!==null&&c.setSize(_,E);for(let y=0;y<M.length;y++){const C=M[y];C.setSize&&C.setSize(_,E)}},this.setEffects=function(_){M=_,w=M.length>0&&M[0].isRenderPass===!0;const E=a.width,y=a.height;M.length>0&&o===null&&(o=new un(E,y,{type:yn,depthBuffer:!1,stencilBuffer:!1}),c=new un(E,y,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){const v=M[C];v.setSize&&v.setSize(E,y)}},this.begin=function(_,E){if(S||_.toneMapping===Sn&&M.length===0)return!1;if(p=E,E!==null){const y=E.width,C=E.height;(a.width!==y||a.height!==C)&&this.setSize(y,C)}return w===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Sn,!0},this.hasRenderPass=function(){return w},this.end=function(_,E){_.toneMapping=m,S=!0;let y=a,C=o;for(let v=0;v<M.length;v++){const T=M[v];T.enabled!==!1&&(T.render(_,C,y,E),T.needsSwap!==!1&&(y=C,C=C===o?c:o))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,h.defines={},te.getTransfer(d)===ue&&(h.defines.SRGB_TRANSFER="");const v=Qp[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,_.setRenderTarget(p),_.render(f,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Th=new Be,wo=new Es(1,1),Ah=new eh,Ch=new Ou,Rh=new lh,Jl=[],Kl=[],Ql=new Float32Array(16),jl=new Float32Array(9),tc=new Float32Array(4);function Ji(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Jl[i];if(r===void 0&&(r=new Float32Array(i),Jl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function zr(s,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function t1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function e1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function n1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function i1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function s1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;tc.set(n),s.uniformMatrix2fv(this.addr,!1,tc),Re(e,n)}}function r1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;jl.set(n),s.uniformMatrix3fv(this.addr,!1,jl),Re(e,n)}}function a1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Ql.set(n),s.uniformMatrix4fv(this.addr,!1,Ql),Re(e,n)}}function o1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function l1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function c1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function h1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function u1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function f1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function d1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function p1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function m1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wo.compareFunction=e.isReversedDepthBuffer()?Bo:Oo,r=wo):r=Th,e.setTexture2D(t||r,i)}function g1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ch,i)}function v1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rh,i)}function x1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ah,i)}function _1(s){switch(s){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return s1;case 35675:return r1;case 35676:return a1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return h1;case 5125:return u1;case 36294:return f1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}function M1(s,t){s.uniform1fv(this.addr,t)}function S1(s,t){const e=Ji(t,this.size,2);s.uniform2fv(this.addr,e)}function b1(s,t){const e=Ji(t,this.size,3);s.uniform3fv(this.addr,e)}function y1(s,t){const e=Ji(t,this.size,4);s.uniform4fv(this.addr,e)}function w1(s,t){const e=Ji(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function E1(s,t){const e=Ji(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function T1(s,t){const e=Ji(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function A1(s,t){s.uniform1iv(this.addr,t)}function C1(s,t){s.uniform2iv(this.addr,t)}function R1(s,t){s.uniform3iv(this.addr,t)}function P1(s,t){s.uniform4iv(this.addr,t)}function L1(s,t){s.uniform1uiv(this.addr,t)}function I1(s,t){s.uniform2uiv(this.addr,t)}function D1(s,t){s.uniform3uiv(this.addr,t)}function U1(s,t){s.uniform4uiv(this.addr,t)}function N1(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=wo:a=Th;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function F1(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ch,r[a])}function O1(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Rh,r[a])}function B1(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ah,r[a])}function z1(s){switch(s){case 5126:return M1;case 35664:return S1;case 35665:return b1;case 35666:return y1;case 35674:return w1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return I1;case 36295:return D1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return B1}}class k1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_1(e.type)}}class H1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=z1(e.type)}}class V1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function ec(s,t){s.seq.push(t),s.map[t.id]=t}function G1(s,t,e){const n=s.name,i=n.length;for(Ea.lastIndex=0;;){const r=Ea.exec(n),a=Ea.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ec(e,l===void 0?new k1(o,s,t):new H1(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new V1(o),ec(e,f)),e=f}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);G1(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function nc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const W1=37297;let X1=0;function q1(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ic=new qt;function $1(s){te._getMatrix(ic,te.workingColorSpace,s);const t=`mat3( ${ic.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case yr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function sc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+q1(s.getShaderSource(t),o)}else return r}function Y1(s,t){const e=$1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Z1={[Hc]:"Linear",[Vc]:"Reinhard",[Gc]:"Cineon",[Wc]:"ACESFilmic",[qc]:"AgX",[Ro]:"Neutral",[Xc]:"Custom"};function J1(s,t){const e=Z1[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sr=new P;function K1(){te.getLuminanceCoefficients(sr);const s=sr.x.toFixed(4),t=sr.y.toFixed(4),e=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function j1(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ms(s){return s!==""}function rc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ac(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(s){return s.replace(em,im)}const nm=new Map;function im(s,t){let e=Zt[t];if(e===void 0){const n=nm.get(t);if(n!==void 0)e=Zt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eo(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(s){return s.replace(sm,rm)}function rm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const am={[gs]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function om(s){return am[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lm={[ui]:"ENVMAP_TYPE_CUBE",[Vi]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function cm(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":lm[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const hm={[Vi]:"ENVMAP_MODE_REFRACTION"};function um(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fm={[Co]:"ENVMAP_BLENDING_MULTIPLY",[du]:"ENVMAP_BLENDING_MIX",[pu]:"ENVMAP_BLENDING_ADD"};function dm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fm[s.combine]||"ENVMAP_BLENDING_NONE"}function pm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=om(e),l=cm(e),h=um(e),f=dm(e),u=pm(e),d=Q1(e),g=j1(r),S=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(m=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?J1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Y1("linearToOutputTexel",e.outputColorSpace),K1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=Eo(a),a=rc(a,e),a=ac(a,e),o=Eo(o),o=rc(o,e),o=ac(o,e),a=oc(a),o=oc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+a,_=M+p+o,E=nc(i,i.VERTEX_SHADER,w),y=nc(i,i.FRAGMENT_SHADER,_);i.attachShader(S,E),i.attachShader(S,y),e.index0AttributeName!==void 0?i.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function C(I){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(S)||"",z=i.getShaderInfoLog(E)||"",D=i.getShaderInfoLog(y)||"",B=F.trim(),q=z.trim(),W=D.trim();let Q=!0,X=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,E,y);else{const J=sc(i,E,"vertex"),K=sc(i,y,"fragment");ee("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+J+`
`+K)}else B!==""?Gt("WebGLProgram: Program Info Log:",B):(q===""||W==="")&&(X=!1);X&&(I.diagnostics={runnable:Q,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(E),i.deleteShader(y),v=new pr(i,S),T=tm(i,S)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(S,W1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X1++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=y,this}let gm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xm(t),e.set(t,n)),n}}class xm{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}}function _m(s){return s===fi||s===_r||s===Mr}function Mm(s,t,e,n,i,r){const a=new ko,o=new vm,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,T,R,I,F,z){const D=I.fog,B=F.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=t.get(v.envMap||q,W),X=Q&&Q.mapping===Dr?Q.image.height:null,J=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Gt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,yt=K!==void 0?K.length:0;let St=0;B.morphAttributes.position!==void 0&&(St=1),B.morphAttributes.normal!==void 0&&(St=2),B.morphAttributes.color!==void 0&&(St=3);let jt,Wt,ie,Z;if(J){const me=vn[J];jt=me.vertexShader,Wt=me.fragmentShader}else{jt=v.vertexShader,Wt=v.fragmentShader;const me=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,me,le),ie=me.id,Z=le.id}const et=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),kt=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,Ht=!!v.map,he=!!v.matcap,nt=!!Q,st=!!v.aoMap,ot=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,ut=!!v.normalMap,Bt=!!v.displacementMap,Ot=!!v.emissiveMap,Vt=!!v.metalnessMap,Xt=!!v.roughnessMap,L=v.anisotropy>0,oe=v.clearcoat>0,Kt=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,O=v.sheen>0,V=v.transmission>0,$=L&&!!v.anisotropyMap,ct=oe&&!!v.clearcoatMap,ht=oe&&!!v.clearcoatNormalMap,Y=oe&&!!v.clearcoatRoughnessMap,tt=x&&!!v.iridescenceMap,ft=x&&!!v.iridescenceThicknessMap,It=O&&!!v.sheenColorMap,gt=O&&!!v.sheenRoughnessMap,dt=!!v.specularMap,Dt=!!v.specularColorMap,zt=!!v.specularIntensityMap,$t=V&&!!v.transmissionMap,N=V&&!!v.thicknessMap,pt=!!v.gradientMap,j=!!v.alphaMap,mt=v.alphaTest>0,bt=!!v.alphaHash,it=!!v.extensions;let Ut=Sn;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Pt={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:jt,fragmentShader:Wt,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:kt,instancingColor:kt&&F.instanceColor!==null,instancingMorph:kt&&F.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:he,envMap:nt,envMapMode:nt&&Q.mapping,envMapCubeUVHeight:X,aoMap:st,lightMap:ot,bumpMap:lt,normalMap:ut,displacementMap:Bt,emissiveMap:Ot,normalMapObjectSpace:ut&&v.normalMapType===vu,normalMapTangentSpace:ut&&v.normalMapType===Sr,packedNormalMap:ut&&v.normalMapType===Sr&&_m(v.normalMap.format),metalnessMap:Vt,roughnessMap:Xt,anisotropy:L,anisotropyMap:$,clearcoat:oe,clearcoatMap:ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:Y,dispersion:Kt,retroreflection:A,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:ft,sheen:O,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:dt,specularColorMap:Dt,specularIntensityMap:zt,transmission:V,transmissionMap:$t,thicknessMap:N,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Qn&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:mt,alphaHash:bt,combine:v.combine,mapUv:Ht&&g(v.map.channel),aoMapUv:st&&g(v.aoMap.channel),lightMapUv:ot&&g(v.lightMap.channel),bumpMapUv:lt&&g(v.bumpMap.channel),normalMapUv:ut&&g(v.normalMap.channel),displacementMapUv:Bt&&g(v.displacementMap.channel),emissiveMapUv:Ot&&g(v.emissiveMap.channel),metalnessMapUv:Vt&&g(v.metalnessMap.channel),roughnessMapUv:Xt&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:ct&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(v.sheenRoughnessMap.channel),specularMapUv:dt&&g(v.specularMap.channel),specularColorMapUv:Dt&&g(v.specularColorMap.channel),specularIntensityMapUv:zt&&g(v.specularIntensityMap.channel),transmissionMapUv:$t&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ut||L),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Ht||j),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:St,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Ot&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===je,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(T,v),M(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){const T=d[v.type];let R;if(T){const I=vn[T];R=Nf.clone(I.uniforms)}else R=v.uniforms;return R}function _(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new mm(s,T,v,i),l.push(R),h.set(T,R)),R}function E(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function y(v){o.remove(v)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:E,releaseShaderCache:y,programs:l,dispose:C}}function Sm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function bm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function cc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,S,m,p){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},s[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=g,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function c(u,d,g,S,m,p,M){M.reversedDepth===!0&&(m=-m);const w=o(u,d,g,S,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):e.push(w)}function l(u,d,g,S,m,p){const M=o(u,d,g,S,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||bm),n.length>1&&n.sort(d||cc),i.length>1&&i.sort(d||cc)}function f(){for(let u=t,d=s.length;u<d;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:h}}function ym(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new hc,s.set(n,[a])):i>=r.length?(a=new hc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function wm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Nt};break;case"SpotLight":e={position:new P,direction:new P,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Em(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Tm=0;function Am(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cm(s){const t=new wm,e=Em(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new ne,a=new ne;function o(l){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,S=0,m=0,p=0,M=0,w=0,_=0,E=0,y=0,C=0,v=0,T=0,R=0;l.sort(Am);for(let F=0,z=l.length;F<z;F++){const D=l[F],B=D.color,q=D.intensity,W=D.distance;let Q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===fi?Q=D.shadow.map.texture:Q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*q,f+=B.g*q,u+=B.b*q;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],q);R++}else if(D.isSunLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,K=e.get(D);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=Q;const yt=J.getViewportCount();for(let St=0;St<yt;St++)n.sunShadowMatrix[S+St]=J.getMatrix(St),n.sunShadowCascade[S+St]=J._cascadeData[St];S+=yt,g++}n.sun[d]=X,d++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,K=e.get(D);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=X,m++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(q),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[M]=X;const J=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,J.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[M]=J.matrix,D.castShadow){const K=e.get(D);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=Q,C++}M++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(B).multiplyScalar(q),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=X,w++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const J=D.shadow,K=e.get(D);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=D.shadow.matrix,y++}n.point[p]=X,p++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(q),X.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[_]=X,_++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==E||I.numPointShadows!==y||I.numSpotShadows!==C||I.numSpotMaps!==v||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=E,I.numPointShadows=y,I.numSpotShadows=C,I.numSpotMaps=v,I.numLightProbes=R,n.version=Tm++)}function c(l,h){let f=0,u=0,d=0,g=0,S=0,m=0;const p=h.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){const _=l[M];if(_.isSunLight){const E=n.sun[f];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),f++}else if(_.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),u++}else if(_.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const E=n.rectArea[S];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(_.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function uc(s){const t=new Cm(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Rm(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new uc(s),t.set(i,[o])):r>=a.length?(o=new uc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lm=`uniform sampler2D shadow_pass;
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
}`,Im=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Dm=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],fc=new ne,rs=new P,Ta=new P;function Um(s,t,e){let n=new Ho;const i=new at,r=new at,a=new xe,o=new kf,c=new Hf,l={},h=e.maxTextureSize,f={[hi]:Ge,[Ge]:hi,[je]:je},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Pm,fragmentShader:Lm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ae(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(y,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Yh&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);const T=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Un),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=y.length;D<B;D++){const q=y[D],W=q.shadow;if(W===void 0){Gt("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Q=W.getFrameExtents();i.multiply(Q),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,W.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ds){if(q.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new un(i.x,i.y,{format:fi,type:yn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Es(i.x,i.y,cn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Fn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=De,W.map.depthTexture.magFilter=De}else q.isPointLight?(W.map=new Eh(i.x),W.map.depthTexture=new tf(i.x,bn)):(W.map=new un(i.x,i.y),W.map.depthTexture=new Es(i.x,i.y,bn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Fn,this.type===gs?(W.map.depthTexture.compareFunction=X?Bo:Oo,W.map.depthTexture.minFilter=Oe,W.map.depthTexture.magFilter=Oe):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=De,W.map.depthTexture.magFilter=De);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,v);for(let K=0;K<J;K++){const yt=W.getCamera(K);if(q.isPointLight){const St=W.camera,jt=W.matrix,Wt=q.distance||St.far;Wt!==St.far&&(St.far=Wt,St.updateProjectionMatrix()),rs.setFromMatrixPosition(q.matrixWorld),St.position.copy(rs),Ta.copy(St.position),Ta.add(Im[K]),St.up.copy(Dm[K]),St.lookAt(Ta),St.updateMatrixWorld(),jt.makeTranslation(-rs.x,-rs.y,-rs.z),fc.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),W._frustum.setFromProjectionMatrix(fc,St.coordinateSystem,St.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,K),s.clear();else{K===0&&(s.setRenderTarget(W.map),s.clear());const St=W.getViewport(K);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),F.viewport(a)}n=W.getFrustum(K),_(C,v,yt,q,this.type)}W.isPointLightShadow!==!0&&this.type===ds&&M(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,R,I)};function M(y,C){const v=t.update(S);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new un(i.x,i.y,{format:fi,type:yn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(C,null,v,u,S,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(C,null,v,d,S,null)}function w(y,C,v,T){let R=null;const I=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=R.uuid,z=C.uuid;let D=l[F];D===void 0&&(D={},l[F]=D);let B=D[z];B===void 0&&(B=R.clone(),D[z]=B,C.addEventListener("dispose",E)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,T===ds?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=s.properties.get(R);F.light=v}return R}function _(y,C,v,T,R){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===ds)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);const z=t.update(y),D=y.material;if(Array.isArray(D)){const B=z.groups;for(let q=0,W=B.length;q<W;q++){const Q=B[q],X=D[Q.materialIndex];if(X&&X.visible){const J=w(y,X,T,R);y.onBeforeShadow(s,y,C,v,z,J,Q),s.renderBufferDirect(v,null,z,J,y,Q),y.onAfterShadow(s,y,C,v,z,J,Q)}}}else if(D.visible){const B=w(y,D,T,R);y.onBeforeShadow(s,y,C,v,z,B,null),s.renderBufferDirect(v,null,z,B,y,null),y.onAfterShadow(s,y,C,v,z,B,null)}}const F=y.children;for(let z=0,D=F.length;z<D;z++)_(F[z],C,v,T,R)}function E(y){y.target.removeEventListener("dispose",E);for(const v in l){const T=l[v],R=y.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Nm(s,t){function e(){let N=!1;const pt=new xe;let j=null;const mt=new xe(0,0,0,0);return{setMask:function(bt){j!==bt&&!N&&(s.colorMask(bt,bt,bt,bt),j=bt)},setLocked:function(bt){N=bt},setClear:function(bt,it,Ut,Pt,me){me===!0&&(bt*=Pt,it*=Pt,Ut*=Pt),pt.set(bt,it,Ut,Pt),mt.equals(pt)===!1&&(s.clearColor(bt,it,Ut,Pt),mt.copy(pt))},reset:function(){N=!1,j=null,mt.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,j=null,mt=null,bt=null;return{setReversed:function(it){if(pt!==it){const Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),pt=it;const Pt=bt;bt=null,this.setClear(Pt)}},getReversed:function(){return pt},setTest:function(it){it?et(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(it){j!==it&&!N&&(s.depthMask(it),j=it)},setFunc:function(it){if(pt&&(it=Pu[it]),mt!==it){switch(it){case Da:s.depthFunc(s.NEVER);break;case Ua:s.depthFunc(s.ALWAYS);break;case Na:s.depthFunc(s.LESS);break;case Ss:s.depthFunc(s.LEQUAL);break;case Fa:s.depthFunc(s.EQUAL);break;case Oa:s.depthFunc(s.GEQUAL);break;case Ba:s.depthFunc(s.GREATER);break;case za:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=it}},setLocked:function(it){N=it},setClear:function(it){bt!==it&&(bt=it,pt&&(it=1-it),s.clearDepth(it))},reset:function(){N=!1,j=null,mt=null,bt=null,pt=!1}}}function i(){let N=!1,pt=null,j=null,mt=null,bt=null,it=null,Ut=null,Pt=null,me=null;return{setTest:function(le){N||(le?et(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(le){pt!==le&&!N&&(s.stencilMask(le),pt=le)},setFunc:function(le,en,dn){(j!==le||mt!==en||bt!==dn)&&(s.stencilFunc(le,en,dn),j=le,mt=en,bt=dn)},setOp:function(le,en,dn){(it!==le||Ut!==en||Pt!==dn)&&(s.stencilOp(le,en,dn),it=le,Ut=en,Pt=dn)},setLocked:function(le){N=le},setClear:function(le){me!==le&&(s.clearStencil(le),me=le)},reset:function(){N=!1,pt=null,j=null,mt=null,bt=null,it=null,Ut=null,Pt=null,me=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],S=null,m=!1,p=null,M=null,w=null,_=null,E=null,y=null,C=null,v=new Nt(0,0,0),T=0,R=!1,I=null,F=null,z=null,D=null,B=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=Q>=2);let J=null,K={};const yt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),jt=new xe().fromArray(yt),Wt=new xe().fromArray(St);function ie(N,pt,j,mt){const bt=new Uint8Array(4),it=s.createTexture();s.bindTexture(N,it),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<j;Ut++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(pt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return it}const Z={};Z[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(Ss),lt(!1),ut(cl),et(s.CULL_FACE),st(Un);function et(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function xt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function kt(N,pt){return u[N]!==pt?(s.bindFramebuffer(N,pt),u[N]=pt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function wt(N,pt){let j=g,mt=!1;if(N){j=d.get(pt),j===void 0&&(j=[],d.set(pt,j));const bt=N.textures;if(j.length!==bt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Ut=bt.length;it<Ut;it++)j[it]=s.COLOR_ATTACHMENT0+it;j.length=bt.length,mt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,mt=!0);mt&&s.drawBuffers(j)}function Ht(N){return S!==N?(s.useProgram(N),S=N,!0):!1}const he={[Fi]:s.FUNC_ADD,[Jh]:s.FUNC_SUBTRACT,[Kh]:s.FUNC_REVERSE_SUBTRACT};he[Qh]=s.MIN,he[jh]=s.MAX;const nt={[tu]:s.ZERO,[eu]:s.ONE,[nu]:s.SRC_COLOR,[zc]:s.SRC_ALPHA,[lu]:s.SRC_ALPHA_SATURATE,[au]:s.DST_COLOR,[su]:s.DST_ALPHA,[iu]:s.ONE_MINUS_SRC_COLOR,[kc]:s.ONE_MINUS_SRC_ALPHA,[ou]:s.ONE_MINUS_DST_COLOR,[ru]:s.ONE_MINUS_DST_ALPHA,[cu]:s.CONSTANT_COLOR,[hu]:s.ONE_MINUS_CONSTANT_COLOR,[uu]:s.CONSTANT_ALPHA,[fu]:s.ONE_MINUS_CONSTANT_ALPHA};function st(N,pt,j,mt,bt,it,Ut,Pt,me,le){if(N===Un){m===!0&&(xt(s.BLEND),m=!1);return}if(m===!1&&(et(s.BLEND),m=!0),N!==Zh){if(N!==p||le!==R){if((M!==Fi||E!==Fi)&&(s.blendEquation(s.FUNC_ADD),M=Fi,E=Fi),le)switch(N){case Qn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ms:s.blendFunc(s.ONE,s.ONE);break;case hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ul:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ee("WebGLState: Invalid blending: ",N);break}else switch(N){case Qn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hl:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",N);break}w=null,_=null,y=null,C=null,v.set(0,0,0),T=0,p=N,R=le}return}bt=bt||pt,it=it||j,Ut=Ut||mt,(pt!==M||bt!==E)&&(s.blendEquationSeparate(he[pt],he[bt]),M=pt,E=bt),(j!==w||mt!==_||it!==y||Ut!==C)&&(s.blendFuncSeparate(nt[j],nt[mt],nt[it],nt[Ut]),w=j,_=mt,y=it,C=Ut),(Pt.equals(v)===!1||me!==T)&&(s.blendColor(Pt.r,Pt.g,Pt.b,me),v.copy(Pt),T=me),p=N,R=!1}function ot(N,pt){N.side===je?xt(s.CULL_FACE):et(s.CULL_FACE);let j=N.side===Ge;pt&&(j=!j),lt(j),N.blending===Qn&&N.transparent===!1?st(Un):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const mt=N.stencilWrite;o.setTest(mt),mt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(N){I!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),I=N)}function ut(N){N!==qh?(et(s.CULL_FACE),N!==F&&(N===cl?s.cullFace(s.BACK):N===$h?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),F=N}function Bt(N){N!==z&&(W&&s.lineWidth(N),z=N)}function Ot(N,pt,j){N?(et(s.POLYGON_OFFSET_FILL),(D!==pt||B!==j)&&(D=pt,B=j,a.getReversed()&&(pt=-pt),s.polygonOffset(pt,j))):xt(s.POLYGON_OFFSET_FILL)}function Vt(N){N?et(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function Xt(N){N===void 0&&(N=s.TEXTURE0+q-1),J!==N&&(s.activeTexture(N),J=N)}function L(N,pt,j){j===void 0&&(J===null?j=s.TEXTURE0+q-1:j=J);let mt=K[j];mt===void 0&&(mt={type:void 0,texture:void 0},K[j]=mt),(mt.type!==N||mt.texture!==pt)&&(J!==j&&(s.activeTexture(j),J=j),s.bindTexture(N,pt||Z[N]),mt.type=N,mt.texture=pt)}function oe(){const N=K[J];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function x(){try{s.texSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function O(){try{s.texSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function ct(){try{s.texStorage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function ht(){try{s.texStorage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function Y(){try{s.texImage2D(...arguments)}catch(N){ee("WebGLState:",N)}}function tt(){try{s.texImage3D(...arguments)}catch(N){ee("WebGLState:",N)}}function ft(N){return f[N]!==void 0?f[N]:s.getParameter(N)}function It(N,pt){f[N]!==pt&&(s.pixelStorei(N,pt),f[N]=pt)}function gt(N){jt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),jt.copy(N))}function dt(N){Wt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Wt.copy(N))}function Dt(N,pt){let j=l.get(pt);j===void 0&&(j=new WeakMap,l.set(pt,j));let mt=j.get(N);mt===void 0&&(mt=s.getUniformBlockIndex(pt,N.name),j.set(N,mt))}function zt(N,pt){const mt=l.get(pt).get(N);c.get(pt)!==mt&&(s.uniformBlockBinding(pt,mt,N.__bindingPointIndex),c.set(pt,mt))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,K={},u={},d=new WeakMap,g=[],S=null,m=!1,p=null,M=null,w=null,_=null,E=null,y=null,C=null,v=new Nt(0,0,0),T=0,R=!1,I=null,F=null,z=null,D=null,B=null,jt.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:xt,bindFramebuffer:kt,drawBuffers:wt,useProgram:Ht,setBlending:st,setMaterial:ot,setFlipSided:lt,setCullFace:ut,setLineWidth:Bt,setPolygonOffset:Ot,setScissorTest:Vt,activeTexture:Xt,bindTexture:L,unbindTexture:oe,compressedTexImage2D:Kt,compressedTexImage3D:A,texImage2D:Y,texImage3D:tt,pixelStorei:It,getParameter:ft,updateUBOMapping:Dt,uniformBlockBinding:zt,texStorage2D:ct,texStorage3D:ht,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:gt,viewport:dt,reset:$t}}function Fm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,x){return g?new OffscreenCanvas(A,x):wr("canvas")}function m(A,x,O){let V=1;const $=Kt(A);if(($.width>O||$.height>O)&&(V=O/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ct=Math.floor(V*$.width),ht=Math.floor(V*$.height);u===void 0&&(u=S(ct,ht));const Y=x?S(ct,ht):u;return Y.width=ct,Y.height=ht,Y.getContext("2d").drawImage(A,0,0,ct,ht),Gt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ht+")."),Y}else return"data"in A&&Gt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,x,O,V,$,ct=!1){if(A!==null){if(s[A]!==void 0)return s[A];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;V&&(ht=t.get("EXT_texture_norm16"),ht||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8),O===s.UNSIGNED_SHORT&&ht&&(Y=ht.R16_EXT),O===s.SHORT&&ht&&(Y=ht.R16_SNORM_EXT)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),x===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8),O===s.UNSIGNED_SHORT&&ht&&(Y=ht.RG16_EXT),O===s.SHORT&&ht&&(Y=ht.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_SHORT&&ht&&(Y=ht.RGB16_EXT),O===s.SHORT&&ht&&(Y=ht.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const tt=ct?yr:te.getTransfer($);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=tt===ue?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&ht&&(Y=ht.RGBA16_EXT),O===s.SHORT&&ht&&(Y=ht.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function E(A,x){let O;return A?x===null||x===bn||x===ys?O=s.DEPTH24_STENCIL8:x===cn?O=s.DEPTH32F_STENCIL8:x===bs&&(O=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bn||x===ys?O=s.DEPTH_COMPONENT24:x===cn?O=s.DEPTH_COMPONENT32F:x===bs&&(O=s.DEPTH_COMPONENT16),O}function y(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==De&&A.minFilter!==Oe?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function v(A){const x=A.target;x.removeEventListener("dispose",v),I(x)}function T(A){const x=n.get(A);if(x.__webglInit===void 0)return;const O=A.source,V=d.get(O);if(V){const $=V[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(A),Object.keys(V).length===0&&d.delete(O)}n.remove(A)}function R(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const O=A.source,V=d.get(O);delete V[x.__cacheKey],a.memory.textures--}function I(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let $=0;$<x.__webglFramebuffer[V].length;$++)s.deleteFramebuffer(x.__webglFramebuffer[V][$]);else s.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)s.deleteFramebuffer(x.__webglFramebuffer[V]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let V=0,$=O.length;V<$;V++){const ct=n.get(O[V]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(A)}let F=0;function z(){F=0}function D(){return F}function B(A){F=A}function q(){const A=F;return A>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,A}function W(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Q(A,x){const O=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const V=A.image;if(V===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(O,A,x);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function X(A,x){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){xt(O,A,x);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function J(A,x){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){xt(O,A,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function K(A,x){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){kt(O,A,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const yt={[xr]:s.REPEAT,[In]:s.CLAMP_TO_EDGE,[ka]:s.MIRRORED_REPEAT},St={[De]:s.NEAREST,[mu]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[Oe]:s.LINEAR,[$r]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},jt={[_u]:s.NEVER,[wu]:s.ALWAYS,[Mu]:s.LESS,[Oo]:s.LEQUAL,[Su]:s.EQUAL,[Bo]:s.GEQUAL,[bu]:s.GREATER,[yu]:s.NOTEQUAL};function Wt(A,x){if(x.type===cn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Oe||x.magFilter===$r||x.magFilter===Us||x.magFilter===ai||x.minFilter===Oe||x.minFilter===$r||x.minFilter===Us||x.minFilter===ai)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,yt[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,yt[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,yt[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,St[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,St[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,jt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===De||x.minFilter!==Us&&x.minFilter!==ai||x.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const V=x.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const ct=W(x);if(ct!==A.__cacheKey){$[ct]===void 0&&($[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[ct].usedTimes++;const ht=$[A.__cacheKey];ht!==void 0&&($[A.__cacheKey].usedTimes--,ht.usedTimes===0&&R(x)),A.__cacheKey=ct,A.__webglTexture=$[ct].texture}return O}function Z(A,x,O){return Math.floor(Math.floor(A/O)/x)}function et(A,x,O,V){const ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,V,x.data);else{ct.sort((It,gt)=>It.start-gt.start);let ht=0;for(let It=1;It<ct.length;It++){const gt=ct[ht],dt=ct[It],Dt=gt.start+gt.count,zt=Z(dt.start,x.width,4),$t=Z(gt.start,x.width,4);dt.start<=Dt+1&&zt===$t&&Z(dt.start+dt.count-1,x.width,4)===zt?gt.count=Math.max(gt.count,dt.start+dt.count-gt.start):(++ht,ct[ht]=dt)}ct.length=ht+1;const Y=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let It=0,gt=ct.length;It<gt;It++){const dt=ct[It],Dt=Math.floor(dt.start/4),zt=Math.ceil(dt.count/4),$t=Dt%x.width,N=Math.floor(Dt/x.width),pt=zt,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,$t,N,pt,j,O,V,x.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function xt(A,x,O){let V=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=s.TEXTURE_3D);const $=ie(A,x),ct=x.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+O);const ht=n.get(ct);if(ct.version!==ht.__version||$===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=te.getPrimaries(te.workingColorSpace),mt=x.colorSpace===Yn?null:te.getPrimaries(x.colorSpace),bt=x.colorSpace===Yn||j===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=m(x.image,!1,i.maxTextureSize);tt=oe(x,tt);const ft=r.convert(x.format,x.colorSpace),It=r.convert(x.type);let gt=_(x.internalFormat,ft,It,x.normalized,x.colorSpace,x.isVideoTexture);Wt(V,x);let dt;const Dt=x.mipmaps,zt=x.isVideoTexture!==!0,$t=ht.__version===void 0||$===!0,N=ct.dataReady,pt=y(x,tt);if(x.isDepthTexture)gt=E(x.format===oi,x.type),$t&&(zt?e.texStorage2D(s.TEXTURE_2D,1,gt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,gt,tt.width,tt.height,0,ft,It,null));else if(x.isDataTexture)if(Dt.length>0){zt&&$t&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let j=0,mt=Dt.length;j<mt;j++)dt=Dt[j],zt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,dt.width,dt.height,ft,It,dt.data):e.texImage2D(s.TEXTURE_2D,j,gt,dt.width,dt.height,0,ft,It,dt.data);x.generateMipmaps=!1}else zt?($t&&e.texStorage2D(s.TEXTURE_2D,pt,gt,tt.width,tt.height),N&&et(x,tt,ft,It)):e.texImage2D(s.TEXTURE_2D,0,gt,tt.width,tt.height,0,ft,It,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&$t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,Dt[0].width,Dt[0].height,tt.depth);for(let j=0,mt=Dt.length;j<mt;j++)if(dt=Dt[j],x.format!==hn)if(ft!==null)if(zt){if(N)if(x.layerUpdates.size>0){const bt=Xl(dt.width,dt.height,x.format,x.type);for(const it of x.layerUpdates){const Ut=dt.data.subarray(it*bt/dt.data.BYTES_PER_ELEMENT,(it+1)*bt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,it,dt.width,dt.height,1,ft,Ut)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,tt.depth,ft,dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,gt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,tt.depth,ft,It,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,gt,dt.width,dt.height,tt.depth,0,ft,It,dt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{zt&&$t&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let j=0,mt=Dt.length;j<mt;j++)dt=Dt[j],x.format!==hn?ft!==null?zt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,gt,dt.width,dt.height,0,dt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,dt.width,dt.height,ft,It,dt.data):e.texImage2D(s.TEXTURE_2D,j,gt,dt.width,dt.height,0,ft,It,dt.data)}else if(x.isDataArrayTexture)if(zt){if($t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,tt.width,tt.height,tt.depth),N)if(x.layerUpdates.size>0){const j=Xl(tt.width,tt.height,x.format,x.type);for(const mt of x.layerUpdates){const bt=tt.data.subarray(mt*j/tt.data.BYTES_PER_ELEMENT,(mt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,tt.width,tt.height,1,ft,It,bt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,It,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,tt.width,tt.height,tt.depth,0,ft,It,tt.data);else if(x.isData3DTexture)zt?($t&&e.texStorage3D(s.TEXTURE_3D,pt,gt,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,It,tt.data)):e.texImage3D(s.TEXTURE_3D,0,gt,tt.width,tt.height,tt.depth,0,ft,It,tt.data);else if(x.isFramebufferTexture){if($t)if(zt)e.texStorage2D(s.TEXTURE_2D,pt,gt,tt.width,tt.height);else{let j=tt.width,mt=tt.height;for(let bt=0;bt<pt;bt++)e.texImage2D(s.TEXTURE_2D,bt,gt,j,mt,0,ft,It,null),j>>=1,mt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),f.add(x),j.onpaint=mt=>{const bt=mt.changedElements;for(const it of f)bt.includes(it.image)&&(it.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{const bt=s.RGBA,it=s.RGBA,Ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,bt,it,Ut,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(zt&&$t){const j=Kt(Dt[0]);e.texStorage2D(s.TEXTURE_2D,pt,gt,j.width,j.height)}for(let j=0,mt=Dt.length;j<mt;j++)dt=Dt[j],zt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,ft,It,dt):e.texImage2D(s.TEXTURE_2D,j,gt,ft,It,dt);x.generateMipmaps=!1}else if(zt){if($t){const j=Kt(tt);e.texStorage2D(s.TEXTURE_2D,pt,gt,j.width,j.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,It,tt)}else e.texImage2D(s.TEXTURE_2D,0,gt,ft,It,tt);p(x)&&M(V),ht.__version=ct.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function kt(A,x,O){if(x.image.length!==6)return;const V=ie(A,x),$=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const ct=n.get($);if($.version!==ct.__version||V===!0){e.activeTexture(s.TEXTURE0+O);const ht=te.getPrimaries(te.workingColorSpace),Y=x.colorSpace===Yn?null:te.getPrimaries(x.colorSpace),tt=x.colorSpace===Yn||ht===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ft=x.isCompressedTexture||x.image[0].isCompressedTexture,It=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!ft&&!It?gt[it]=m(x.image[it],!0,i.maxCubemapSize):gt[it]=It?x.image[it].image:x.image[it],gt[it]=oe(x,gt[it]);const dt=gt[0],Dt=r.convert(x.format,x.colorSpace),zt=r.convert(x.type),$t=_(x.internalFormat,Dt,zt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,pt=ct.__version===void 0||V===!0,j=$.dataReady;let mt=y(x,dt);Wt(s.TEXTURE_CUBE_MAP,x);let bt;if(ft){N&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,$t,dt.width,dt.height);for(let it=0;it<6;it++){bt=gt[it].mipmaps;for(let Ut=0;Ut<bt.length;Ut++){const Pt=bt[Ut];x.format!==hn?Dt!==null?N?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,Pt.width,Pt.height,Dt,Pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,$t,Pt.width,Pt.height,0,Pt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,Pt.width,Pt.height,Dt,zt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,$t,Pt.width,Pt.height,0,Dt,zt,Pt.data)}}}else{if(bt=x.mipmaps,N&&pt){bt.length>0&&mt++;const it=Kt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,$t,it.width,it.height)}for(let it=0;it<6;it++)if(It){N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Dt,zt,gt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,gt[it].width,gt[it].height,0,Dt,zt,gt[it].data);for(let Ut=0;Ut<bt.length;Ut++){const me=bt[Ut].image[it].image;N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,me.width,me.height,Dt,zt,me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,$t,me.width,me.height,0,Dt,zt,me.data)}}else{N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,zt,gt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,Dt,zt,gt[it]);for(let Ut=0;Ut<bt.length;Ut++){const Pt=bt[Ut];N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Dt,zt,Pt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,$t,Dt,zt,Pt.image[it])}}}p(x)&&M(s.TEXTURE_CUBE_MAP),ct.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function wt(A,x,O,V,$,ct){const ht=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),tt=_(O.internalFormat,ht,Y,O.normalized,O.colorSpace),ft=n.get(x),It=n.get(O);if(It.__renderTarget=x,!ft.__hasExternalTextures){const gt=Math.max(1,x.width>>ct),dt=Math.max(1,x.height>>ct);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,ct,tt,gt,dt,x.depth,0,ht,Y,null):e.texImage2D($,ct,tt,gt,dt,0,ht,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Xt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,$,It.__webglTexture,0,Vt(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,$,It.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(A,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const V=x.depthTexture,$=V&&V.isDepthTexture?V.type:null,ct=E(x.stencilBuffer,$),ht=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(x),ct,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(x),ct,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ct,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,A)}else{const V=x.textures;for(let $=0;$<V.length;$++){const ct=V[$],ht=r.convert(ct.format,ct.colorSpace),Y=r.convert(ct.type),tt=_(ct.internalFormat,ht,Y,ct.normalized,ct.colorSpace);Xt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(x),tt,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(x),tt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,tt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(A,x,O){const V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,x.depthTexture);const ft=r.convert(x.depthTexture.format),It=r.convert(x.depthTexture.type);let gt;x.depthTexture.format===Fn?gt=s.DEPTH_COMPONENT24:x.depthTexture.format===oi&&(gt=s.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,gt,x.width,x.height,0,ft,It,null)}}else Q(x.depthTexture,0);const ct=$.__webglTexture,ht=Vt(x),Y=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,tt=x.depthTexture.format===oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fn)Xt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Y,ct,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,tt,Y,ct,0);else if(x.depthTexture.format===oi)Xt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Y,ct,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,tt,Y,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){const x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=V}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)he(x.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?he(x.__webglFramebuffer[0],A,0):he(x.__webglFramebuffer,A,0)}else if(O){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=s.createRenderbuffer(),Ht(x.__webglDepthbuffer[V],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ht(x.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(A,x,O){const V=n.get(A);x!==void 0&&wt(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&nt(A)}function ot(A){const x=A.texture,O=n.get(A),V=n.get(x);A.addEventListener("dispose",v);const $=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ht=$.length>1;if(ht||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=x.version,a.memory.textures++),ct){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let tt=0;tt<x.mipmaps.length;tt++)O.__webglFramebuffer[Y][tt]=s.createFramebuffer()}else O.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ht)for(let Y=0,tt=$.length;Y<tt;Y++){const ft=n.get($[Y]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Xt(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){const tt=$[Y];O.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ft=r.convert(tt.format,tt.colorSpace),It=r.convert(tt.type),gt=_(tt.internalFormat,ft,It,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),dt=Vt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,gt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ht(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)wt(O.__webglFramebuffer[Y][tt],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,tt);else wt(O.__webglFramebuffer[Y],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let Y=0,tt=$.length;Y<tt;Y++){const ft=$[Y],It=n.get(ft);let gt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,It.__webglTexture),Wt(gt,ft),wt(O.__webglFramebuffer,A,ft,s.COLOR_ATTACHMENT0+Y,gt,0),p(ft)&&M(gt)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,V.__webglTexture),Wt(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)wt(O.__webglFramebuffer[tt],A,x,s.COLOR_ATTACHMENT0,Y,tt);else wt(O.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Y,0);p(x)&&M(Y),e.unbindTexture()}A.depthBuffer&&nt(A)}function lt(A){const x=A.textures;for(let O=0,V=x.length;O<V;O++){const $=x[O];if(p($)){const ct=w(A),ht=n.get($).__webglTexture;e.bindTexture(ct,ht),M(ct),e.unbindTexture()}}}const ut=[],Bt=[];function Ot(A){if(A.samples>0){if(Xt(A)===!1){const x=A.textures,O=A.width,V=A.height;let $=s.COLOR_BUFFER_BIT;const ct=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(A),Y=x.length>1;if(Y)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);const It=n.get(x[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,O,V,0,0,O,V,$,s.NEAREST),c===!0&&(ut.length=0,Bt.length=0,ut.push(s.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ut.push(ct),Bt.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);const It=n.get(x[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function Xt(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function oe(A,x){const O=A.colorSpace,V=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==br&&O!==Yn&&(te.getTransfer(O)===ue?(V!==hn||$!==Ye)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",O)),x}function Kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=st,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Om(s,t){function e(n,i=Yn){let r;const a=te.getTransfer(i);if(n===Ye)return s.UNSIGNED_BYTE;if(n===Lo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return s.BYTE;if(n===Zc)return s.SHORT;if(n===bs)return s.UNSIGNED_SHORT;if(n===Po)return s.INT;if(n===bn)return s.UNSIGNED_INT;if(n===cn)return s.FLOAT;if(n===yn)return s.HALF_FLOAT;if(n===Qc)return s.ALPHA;if(n===jc)return s.RGB;if(n===hn)return s.RGBA;if(n===Fn)return s.DEPTH_COMPONENT;if(n===oi)return s.DEPTH_STENCIL;if(n===Do)return s.RED;if(n===Uo)return s.RED_INTEGER;if(n===fi)return s.RG;if(n===No)return s.RG_INTEGER;if(n===Fo)return s.RGBA_INTEGER;if(n===hr||n===ur||n===fr||n===dr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===$a||n===Ya||n===Za||n===_r||n===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xa||n===qa)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return r.COMPRESSED_R11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===Qa||n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mo||n===go||n===Mr||n===vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
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

}`;class km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ch(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hm extends pi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const S=typeof XRWebGLBinding<"u",m=new km,p={},M=e.getContextAttributes();let w=null,_=null;const E=[],y=[],C=new at;let v=null,T=null;const R=new Qe;R.viewport=new xe;const I=new Qe;I.viewport=new xe;const F=[R,I],z=new Yf;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=E[Z];return et===void 0&&(et=new na,E[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=E[Z];return et===void 0&&(et=new na,E[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=E[Z];return et===void 0&&(et=new na,E[Z]=et),et.getHandSpace()};function q(Z){const et=y.indexOf(Z.inputSource);if(et===-1)return;const xt=E[et];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,l||a),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<E.length;Z++){const et=y[Z];et!==null&&(y[Z]=null,E[Z].disconnect(et))}D=null,B=null,m.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(w),d=null,u=null,f=null,i=null,_=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,kt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=M.stencil?oi:Fn,kt=M.stencil?ys:bn);const Ht={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new un(u.textureWidth,u.textureHeight,{format:hn,type:Ye,depthTexture:new Es(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new un(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Z){for(let et=0;et<Z.removed.length;et++){const xt=Z.removed[et],kt=y.indexOf(xt);kt>=0&&(y[kt]=null,E[kt].disconnect(xt))}for(let et=0;et<Z.added.length;et++){const xt=Z.added[et];let kt=y.indexOf(xt);if(kt===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=y.length){y.push(xt),kt=Ht;break}else if(y[Ht]===null){y[Ht]=xt,kt=Ht;break}if(kt===-1)break}const wt=E[kt];wt&&wt.connect(xt)}}const X=new P,J=new P;function K(Z,et,xt){X.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const kt=X.distanceTo(J),wt=et.projectionMatrix.elements,Ht=xt.projectionMatrix.elements,he=wt[14]/(wt[10]-1),nt=wt[14]/(wt[10]+1),st=(wt[9]+1)/wt[5],ot=(wt[9]-1)/wt[5],lt=(wt[8]-1)/wt[0],ut=(Ht[8]+1)/Ht[0],Bt=he*lt,Ot=he*ut,Vt=kt/(-lt+ut),Xt=Vt*-lt;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xt),Z.translateZ(Vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),wt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const L=he+Vt,oe=nt+Vt,Kt=Bt-Xt,A=Ot+(kt-Xt),x=st*nt/oe*L,O=ot*nt/oe*L;Z.projectionMatrix.makePerspective(Kt,A,x,O,L,oe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function yt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let et=Z.near,xt=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),z.near=I.near=R.near=et,z.far=I.far=R.far=xt,(D!==z.near||B!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,B=z.far),z.layers.mask=Z.layers.mask|6,R.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;const kt=Z.parent,wt=z.cameras;yt(z,kt);for(let Ht=0;Ht<wt.length;Ht++)yt(wt[Ht],kt);wt.length===2?K(z,R,I):z.projectionMatrix.copy(R.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),St(Z,z,kt)};function St(Z,et,xt){xt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return p[Z]};let jt=null;function Wt(Z,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let kt=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,kt=!0);for(let nt=0;nt<xt.length;nt++){const st=xt[nt];let ot=null;if(d!==null)ot=d.getViewport(st);else{const ut=f.getViewSubImage(u,st);ot=ut.viewport,nt===0&&(t.setRenderTargetTextures(_,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(_))}let lt=F[nt];lt===void 0&&(lt=new Qe,lt.layers.enable(nt),lt.viewport=new xe,F[nt]=lt),lt.matrix.fromArray(st.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(st.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),nt===0&&(z.matrix.copy(lt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),kt===!0&&z.cameras.push(lt)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const nt=f.getDepthInformation(xt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,i.renderState)}if(wt&&wt.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let nt=0;nt<xt.length;nt++){const st=xt[nt].camera;if(st){let ot=p[st];ot||(ot=new ch,p[st]=ot);const lt=f.getCameraImage(st);ot.sourceTexture=lt}}}}for(let xt=0;xt<E.length;xt++){const kt=y[xt],wt=E[xt];kt!==null&&wt!==void 0&&wt.update(kt,et,l||a)}jt&&jt(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ie=new yh;ie.setAnimationLoop(Wt),this.setAnimationLoop=function(Z){jt=Z},this.dispose=function(){}}}const Vm=new ne,Ph=new qt;Ph.set(-1,0,0,0,1,0,0,0,1);function Gm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_h(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,w,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),w=M.envMap,_=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ph),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){const y=E.program;n.uniformBlockBinding(_,y)}function l(_,E){let y=i[_.id];y===void 0&&(m(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",M));const C=E.program;n.updateUBOMapping(_,C);const v=t.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){const E=f();_.__bindingPointIndex=E;const y=s.createBuffer(),C=_.__size,v=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const E=i[_.id],y=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let v=0,T=y.length;v<T;v++){const R=y[v];if(Array.isArray(R))for(let I=0,F=R.length;I<F;I++)d(R[I],v,I,C);else d(R,v,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,E,y,C){if(S(_,E,y,C)===!0){const v=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){const F=T[I],z=p(F);g(F,_.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,_.__data)}}function g(_,E,y){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,y)}function S(_,E,y,C){const v=_.value,T=E+"_"+y;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{const R=C[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(_){const E=_.uniforms;let y=0;const C=16;for(let T=0,R=E.length;T<R;T++){const I=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,z=I.length;F<z;F++){const D=I[F],B=Array.isArray(D.value)?D.value:[D.value];for(let q=0,W=B.length;q<W;q++){const Q=B[q],X=p(Q),J=y%C,K=J%X.boundary,yt=J+K;y+=K,yt!==0&&C-yt<X.storage&&(y+=C-yt),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=X.storage}}}const v=y%C;return v>0&&(y+=C-v),_.__size=y,_.__cache={},this}function p(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",_),E}function M(_){const E=_.target;E.removeEventListener("dispose",M);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function w(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:w}}const Xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gn=null;function qm(){return gn===null&&(gn=new oh(Xm,16,16,fi,yn),gn.name="DFG_LUT",gn.minFilter=Oe,gn.magFilter=Oe,gn.wrapS=In,gn.wrapT=In,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}class $m{constructor(t={}){const{canvas:e=Cu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ye}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=d,m=new Set([Fo,No,Uo]),p=new Set([Ye,bn,bs,ys,Lo,Io]),M=new Uint32Array(4),w=new Int32Array(4),_=new P;let E=null,y=null;const C=[],v=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,F=null,z=null,D=null,B=null;this._outputColorSpace=be;let q=0,W=0,Q=null,X=-1,J=null;const K=new xe,yt=new xe;let St=null;const jt=new Nt(0);let Wt=0,ie=e.width,Z=e.height,et=1,xt=null,kt=null;const wt=new xe(0,0,ie,Z),Ht=new xe(0,0,ie,Z);let he=!1;const nt=new Ho;let st=!1,ot=!1;const lt=new ne,ut=new P,Bt=new xe,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Xt(){return Q===null?et:1}let L=n;function oe(b,U){return e.getContext(b,U)}let Kt,A,x,O,V,$,ct,ht,Y,tt,ft,It,gt,dt,Dt,zt,$t,N,pt,j,mt,bt,it;try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ao}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",en,!1),L===null){const U="webgl2";if(L=oe(U,b),L===null)throw oe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(b){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",en,!1),ee("WebGLRenderer: "+b.message),b}function Ut(){Kt=new qp(L),Kt.init(),mt=new Om(L,Kt),A=new Fp(L,Kt,t,mt),x=new Nm(L,Kt),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),z=L.createFramebuffer(),D=L.createFramebuffer(),B=L.createFramebuffer(),O=new Zp(L),V=new Sm,$=new Fm(L,Kt,x,V,A,mt,O),ct=new Xp(R),ht=new Kf(L),bt=new Up(L,ht),Y=new $p(L,ht,O,bt),tt=new Kp(L,Y,ht,bt,O),N=new Jp(L,A,$),Dt=new Op(V),ft=new Mm(R,ct,Kt,A,bt,Dt),It=new Gm(R,V),gt=new ym,dt=new Rm(Kt),$t=new Dp(R,ct,x,tt,g,c),zt=new Um(R,tt,A),it=new Wm(L,O,A,x),pt=new Np(L,Kt,O),j=new Yp(L,Kt,O),O.programs=ft.programs,R.capabilities=A,R.extensions=Kt,R.properties=V,R.renderLists=gt,R.shadowMap=zt,R.state=x,R.info=O}S!==Ye&&(T=new jp(S,e.width,e.height,o,i,r));const Pt=new Hm(R,L);this.xr=Pt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(ie,Z,!1))},this.getSize=function(b){return b.set(ie,Z)},this.setSize=function(b,U,G=!0){if(Pt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,Z=U,e.width=Math.floor(b*et),e.height=Math.floor(U*et),G===!0&&(e.style.width=b+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(ie*et,Z*et).floor()},this.setDrawingBufferSize=function(b,U,G){ie=b,Z=U,et=G,e.width=Math.floor(b*G),e.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(S===Ye){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(K)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,U,G,k){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,U,G,k),x.viewport(K.copy(wt).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,U,G,k){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,U,G,k),x.scissor(yt.copy(Ht).multiplyScalar(et).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){x.setScissorTest(he=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,G=!0){let k=0;if(b){let H=!1;if(Q!==null){const Mt=Q.texture.format;H=m.has(Mt)}if(H){const Mt=Q.texture.type,Tt=p.has(Mt),_t=$t.getClearColor(),Ct=$t.getClearAlpha(),Lt=_t.r,Yt=_t.g,Qt=_t.b;Tt?(M[0]=Lt,M[1]=Yt,M[2]=Qt,M[3]=Ct,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=Lt,w[1]=Yt,w[2]=Qt,w[3]=Ct,L.clearBufferiv(L.COLOR,0,w))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",en,!1),$t.dispose(),gt.dispose(),dt.dispose(),V.dispose(),ct.dispose(),tt.dispose(),bt.dispose(),it.dispose(),ft.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",tl),Pt.removeEventListener("sessionend",el),jn.stop()};function me(b){b.preventDefault(),pl("WebGLRenderer: Context Lost."),I=!0}function le(){pl("WebGLRenderer: Context Restored."),I=!1;const b=O.autoReset,U=zt.enabled,G=zt.autoUpdate,k=zt.needsUpdate,H=zt.type;Ut(),O.autoReset=b,zt.enabled=U,zt.autoUpdate=G,zt.needsUpdate=k,zt.type=H}function en(b){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dn(b){const U=b.target;U.removeEventListener("dispose",dn),zh(U)}function zh(b){kh(b),V.remove(b)}function kh(b){const U=V.get(b).programs;U!==void 0&&(U.forEach(function(G){ft.releaseProgram(G)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,k,H,Mt){U===null&&(U=Ot);const Tt=H.isMesh&&H.matrixWorld.determinantAffine()<0,_t=Gh(b,U,G,k,H);x.setMaterial(k,Tt);let Ct=G.index,Lt=1;if(k.wireframe===!0){if(Ct=Y.getWireframeAttribute(G),Ct===void 0)return;Lt=2}const Yt=G.drawRange,Qt=G.attributes.position;let Rt=Yt.start*Lt,ce=(Yt.start+Yt.count)*Lt;Mt!==null&&(Rt=Math.max(Rt,Mt.start*Lt),ce=Math.min(ce,(Mt.start+Mt.count)*Lt)),Ct!==null?(Rt=Math.max(Rt,0),ce=Math.min(ce,Ct.count)):Qt!=null&&(Rt=Math.max(Rt,0),ce=Math.min(ce,Qt.count));const ye=ce-Rt;if(ye<0||ye===1/0)return;bt.setup(H,k,_t,G,Ct);let ve,pe=pt;if(Ct!==null&&(ve=ht.get(Ct),pe=j,pe.setIndex(ve)),H.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Xt()),pe.setMode(L.LINES)):pe.setMode(L.TRIANGLES);else if(H.isLine){let Ue=k.linewidth;Ue===void 0&&(Ue=1),x.setLineWidth(Ue*Xt()),H.isLineSegments?pe.setMode(L.LINES):H.isLineLoop?pe.setMode(L.LINE_LOOP):pe.setMode(L.LINE_STRIP)}else H.isPoints?pe.setMode(L.POINTS):H.isSprite&&pe.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ue=H._multiDrawStarts,Et=H._multiDrawCounts,ze=H._multiDrawCount,se=Ct?ht.get(Ct).bytesPerElement:1,Ze=V.get(k).currentProgram.getUniforms();for(let pn=0;pn<ze;pn++)Ze.setValue(L,"_gl_DrawID",pn),pe.render(Ue[pn]/se,Et[pn])}else if(H.isInstancedMesh)pe.renderInstances(Rt,ye,H.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Et=Math.min(G.instanceCount,Ue);pe.renderInstances(Rt,ye,Et)}else pe.render(Rt,ye)};function jo(b,U,G,k){F!==null&&b.isNodeMaterial&&F.setObject(k,b),st===!0&&Dt.setState(b,G,!1),b.transparent===!0&&b.side===je&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,Ds(b,U,k),b.side=hi,b.needsUpdate=!0,Ds(b,U,k),b.side=je):Ds(b,U,k)}this.compile=function(b,U,G=null){G===null&&(G=b),F!==null&&F.renderStart(b,U,G),y=dt.get(G),y.init(U),v.push(y),G.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),b!==G&&b.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),ot=this.localClippingEnabled,st=Dt.init(this.clippingPlanes,ot),st===!0&&Dt.setGlobalState(this.clippingPlanes,U),F!==null&&zt.render(y.state.shadowsArray,G,U);const k=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){const _t=Mt[Tt];jo(_t,G,U,H),k.add(_t)}else jo(Mt,G,U,H),k.add(Mt)}),y=v.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(b,U,G=null){const k=this.compile(b,U,G);return new Promise(H=>{function Mt(){if(k.forEach(function(Tt){const Ct=V.get(Tt).currentProgram;(Ct===void 0||Ct.isReady())&&k.delete(Tt)}),k.size===0){H(b);return}setTimeout(Mt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Gr=null;function Hh(b){Gr&&Gr(b)}function tl(){jn.stop()}function el(){jn.start()}const jn=new yh;jn.setAnimationLoop(Hh),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){Gr=b,Pt.setAnimationLoop(b),b===null?jn.stop():jn.start()},Pt.addEventListener("sessionstart",tl),Pt.addEventListener("sessionend",el),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(b,U);const G=Pt.enabled===!0&&Pt.isPresenting===!0,k=T!==null&&(Q===null||G)&&T.begin(R,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(U),U=Pt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,U,Q),y=dt.get(b,v.length),y.init(U),y.state.textureUnits=$.getTextureUnits(),v.push(y),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(lt,_n,U.reversedDepth),ot=this.localClippingEnabled,st=Dt.init(this.clippingPlanes,ot),E=gt.get(b,C.length),E.init(),C.push(E),Pt.enabled===!0&&Pt.isPresenting===!0){const Tt=R.xr.getDepthSensingMesh();Tt!==null&&Wr(Tt,U,-1/0,R.sortObjects)}Wr(b,U,0,R.sortObjects),E.finish(),F!==null&&F.updateLights(y.state.lightsArray),R.sortObjects===!0&&E.sort(xt,kt),Vt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Vt&&$t.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Dt.beginShadows();const H=y.state.shadowsArray;if(zt.render(H,b,U),st===!0&&Dt.endShadows(),(k&&T.hasRenderPass())===!1){const Tt=E.opaque,_t=E.transmissive;if(y.setupLights(),U.isArrayCamera){const Ct=U.cameras;if(_t.length>0)for(let Lt=0,Yt=Ct.length;Lt<Yt;Lt++){const Qt=Ct[Lt];il(Tt,_t,b,Qt)}Vt&&$t.render(b);for(let Lt=0,Yt=Ct.length;Lt<Yt;Lt++){const Qt=Ct[Lt];nl(E,b,Qt,Qt.viewport)}}else _t.length>0&&il(Tt,_t,b,U),Vt&&$t.render(b),nl(E,b,U)}Q!==null&&W===0&&($.updateMultisampleRenderTarget(Q),$.updateRenderTargetMipmap(Q)),k&&T.end(R),b.isScene===!0&&b.onAfterRender(R,b,U),bt.resetDefaultState(),X=-1,J=null,v.pop(),v.length>0?(y=v[v.length-1],$.setTextureUnits(y.state.textureUnits),st===!0&&Dt.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,F!==null&&F.renderEnd()};function Wr(b,U,G,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)y.pushLightProbeGrid(b);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(nt)){k&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);const Tt=tt.update(b),_t=b.material;_t.visible&&E.push(b,Tt,_t,G,Bt.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(nt))){const Tt=tt.update(b),_t=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Bt.copy(Tt.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(_t)){const Ct=Tt.groups;for(let Lt=0,Yt=Ct.length;Lt<Yt;Lt++){const Qt=Ct[Lt],Rt=_t[Qt.materialIndex];Rt&&Rt.visible&&E.push(b,Tt,Rt,G,Bt.z,Qt,U)}}else _t.visible&&E.push(b,Tt,_t,G,Bt.z,null,U)}}const Mt=b.children;for(let Tt=0,_t=Mt.length;Tt<_t;Tt++)Wr(Mt[Tt],U,G,k)}function nl(b,U,G,k){const{opaque:H,transmissive:Mt,transparent:Tt}=b;y.setupLightsView(G),st===!0&&Dt.setGlobalState(R.clippingPlanes,G),k&&x.viewport(K.copy(k)),H.length>0&&Is(H,U,G),Mt.length>0&&Is(Mt,U,G),Tt.length>0&&Is(Tt,U,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function il(b,U,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[k.id]===void 0){const Rt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[k.id]=new un(1,1,{generateMipmaps:!0,type:Rt?yn:Ye,minFilter:ai,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const Mt=y.state.transmissionRenderTarget[k.id],Tt=k.viewport||K;Mt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);const _t=R.getRenderTarget(),Ct=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(jt),Wt=R.getClearAlpha(),Wt<1&&R.setClearColor(16777215,.5),R.clear(),Vt&&$t.render(G);const Yt=R.toneMapping;R.toneMapping=Sn;const Qt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),st===!0&&Dt.setGlobalState(R.clippingPlanes,k),Is(b,G,k),$.updateMultisampleRenderTarget(Mt),$.updateRenderTargetMipmap(Mt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ce=0,ye=U.length;ce<ye;ce++){const ve=U[ce],{object:pe,geometry:Ue,material:Et,group:ze}=ve;if(Et.side===je&&pe.layers.test(k.layers)){const se=Et.side;Et.side=Ge,Et.needsUpdate=!0,sl(pe,G,k,Ue,Et,ze),Et.side=se,Et.needsUpdate=!0,Rt=!0}}Rt===!0&&($.updateMultisampleRenderTarget(Mt),$.updateRenderTargetMipmap(Mt))}R.setRenderTarget(_t,Ct,Lt),R.setClearColor(jt,Wt),Qt!==void 0&&(k.viewport=Qt),R.toneMapping=Yt}function Is(b,U,G){const k=U.isScene===!0?U.overrideMaterial:null;for(let H=0,Mt=b.length;H<Mt;H++){const Tt=b[H],{object:_t,geometry:Ct,group:Lt}=Tt;let Yt=Tt.material;Yt.allowOverride===!0&&k!==null&&(Yt=k),_t.layers.test(G.layers)&&sl(_t,U,G,Ct,Yt,Lt)}}function sl(b,U,G,k,H,Mt){F!==null&&H.isNodeMaterial&&F.setObject(b,H),b.onBeforeRender(R,U,G,k,H,Mt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(R,U,G,k,b,Mt),H.transparent===!0&&H.side===je&&H.forceSinglePass===!1?(H.side=Ge,H.needsUpdate=!0,R.renderBufferDirect(G,U,k,H,b,Mt),H.side=hi,H.needsUpdate=!0,R.renderBufferDirect(G,U,k,H,b,Mt),H.side=je):R.renderBufferDirect(G,U,k,H,b,Mt),b.onAfterRender(R,U,G,k,H,Mt)}function Ds(b,U,G){U.isScene!==!0&&(U=Ot);const k=V.get(b),H=y.state.lights,Mt=y.state.shadowsArray,Tt=H.state.version,_t=ft.getParameters(b,H.state,Mt,U,G,y.state.lightProbeGridArray),Ct=ft.getProgramCacheKey(_t);let Lt=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const Yt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=ct.get(b.envMap||k.environment,Yt),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",dn),Lt=new Map,k.programs=Lt);let Qt=Lt.get(Ct);if(Qt!==void 0){if(k.currentProgram===Qt&&k.lightsStateVersion===Tt)return al(b,_t),Qt}else _t.uniforms=ft.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,G,_t),b.onBeforeCompile(_t,R),Qt=ft.acquireProgram(_t,Ct),Lt.set(Ct,Qt),k.uniforms=_t.uniforms;const Rt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Dt.uniform),al(b,_t),k.needsLights=Xh(b),k.lightsStateVersion=Tt,k.needsLights&&(Rt.ambientLightColor.value=H.state.ambient,Rt.lightProbe.value=H.state.probe,Rt.sunLights.value=H.state.sun,Rt.sunLightShadows.value=H.state.sunShadow,Rt.directionalLights.value=H.state.directional,Rt.directionalLightShadows.value=H.state.directionalShadow,Rt.spotLights.value=H.state.spot,Rt.spotLightShadows.value=H.state.spotShadow,Rt.rectAreaLights.value=H.state.rectArea,Rt.ltc_1.value=H.state.rectAreaLTC1,Rt.ltc_2.value=H.state.rectAreaLTC2,Rt.pointLights.value=H.state.point,Rt.pointLightShadows.value=H.state.pointShadow,Rt.hemisphereLights.value=H.state.hemi,Rt.sunShadowMatrix.value=H.state.sunShadowMatrix,Rt.sunShadowCascade.value=H.state.sunShadowCascade,Rt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Rt.spotLightMatrix.value=H.state.spotLightMatrix,Rt.spotLightMap.value=H.state.spotLightMap,Rt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=y.state.lightProbeGridArray.length>0,k.currentProgram=Qt,k.uniformsList=null,Qt}function rl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=pr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function al(b,U){const G=V.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Vh(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let G=0,k=b.length;G<k;G++){const H=b[G];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function Gh(b,U,G,k,H){U.isScene!==!0&&(U=Ot),$.resetTextureUnits();const Mt=U.fog,Tt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,_t=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:te.workingColorSpace,Ct=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Lt=ct.get(k.envMap||Tt,Ct),Yt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Qt=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Rt=!!G.morphAttributes.position,ce=!!G.morphAttributes.normal,ye=!!G.morphAttributes.color;let ve=Sn;k.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ve=R.toneMapping);const pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ue=pe!==void 0?pe.length:0,Et=V.get(k),ze=y.state.lights;if(st===!0&&(ot===!0||b!==J)){const ge=b===J&&k.id===X;Dt.setState(k,b,ge)}let se=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ze.state.version||Et.outputColorSpace!==_t||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==Lt||k.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Dt.numPlanes||Et.numIntersection!==Dt.numIntersection)||Et.vertexAlphas!==Yt||Et.vertexTangents!==Qt||Et.morphTargets!==Rt||Et.morphNormals!==ce||Et.morphColors!==ye||Et.toneMapping!==ve||Et.morphTargetsCount!==Ue||!!Et.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Et.__version=k.version);let Ze=Et.currentProgram;se===!0&&(Ze=Ds(k,U,H),F&&k.isNodeMaterial&&F.onUpdateProgram(k,Ze,Et));let pn=!1,Bn=!1,xi=!1;const de=Ze.getUniforms(),Se=Et.uniforms;if(x.useProgram(Ze.program)&&(pn=!0,Bn=!0,xi=!0),k.id!==X&&(X=k.id,Bn=!0),Et.needsLights){const ge=Vh(y.state.lightProbeGridArray,H);Et.lightProbeGrid!==ge&&(Et.lightProbeGrid=ge,Bn=!0)}if(pn||J!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),de.setValue(L,"projectionMatrix",b.projectionMatrix),de.setValue(L,"viewMatrix",b.matrixWorldInverse);const kn=de.map.cameraPosition;kn!==void 0&&kn.setValue(L,ut.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&de.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&de.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,Bn=!0,xi=!0)}if(Et.needsLights&&(ze.state.sunShadowMap.length>0&&de.setValue(L,"sunShadowMap",ze.state.sunShadowMap,$),ze.state.directionalShadowMap.length>0&&de.setValue(L,"directionalShadowMap",ze.state.directionalShadowMap,$),ze.state.spotShadowMap.length>0&&de.setValue(L,"spotShadowMap",ze.state.spotShadowMap,$),ze.state.pointShadowMap.length>0&&de.setValue(L,"pointShadowMap",ze.state.pointShadowMap,$)),H.isSkinnedMesh){de.setOptional(L,H,"bindMatrix"),de.setOptional(L,H,"bindMatrixInverse");const ge=H.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(L,"boneTexture",ge.boneTexture,$))}H.isBatchedMesh&&(de.setOptional(L,H,"batchingTexture"),de.setValue(L,"batchingTexture",H._matricesTexture,$),de.setOptional(L,H,"batchingIdTexture"),de.setValue(L,"batchingIdTexture",H._indirectTexture,$),de.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&de.setValue(L,"batchingColorTexture",H._colorsTexture,$));const zn=G.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&N.update(H,G,Ze),(Bn||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,de.setValue(L,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Se.envMapIntensity.value=U.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=qm()),Bn){if(de.setValue(L,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&Wh(Se,xi),Mt&&k.fog===!0&&It.refreshFogUniforms(Se,Mt),It.refreshMaterialUniforms(Se,k,et,Z,y.state.transmissionRenderTarget[b.id]),Et.needsLights&&Et.lightProbeGrid){const ge=Et.lightProbeGrid;Se.probesSH.value=ge.texture,Se.probesMin.value.copy(ge.boundingBox.min),Se.probesMax.value.copy(ge.boundingBox.max),Se.probesResolution.value.copy(ge.resolution)}pr.upload(L,rl(Et),Se,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pr.upload(L,rl(Et),Se,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&de.setValue(L,"center",H.center),de.setValue(L,"modelViewMatrix",H.modelViewMatrix),de.setValue(L,"normalMatrix",H.normalMatrix),de.setValue(L,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const ge=k.uniformsGroups;for(let kn=0,_i=ge.length;kn<_i;kn++){const ll=ge[kn];it.update(ll,Ze),it.bind(ll,Ze)}}return Ze}function Wh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Xh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,U,G){const k=V.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=U,V.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const G=V.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,G=0){Q=b,q=U,W=G;let k=null,H=!1,Mt=!1;if(b){const _t=V.get(b);if(_t.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,_t.__webglFramebuffer),K.copy(b.viewport),yt.copy(b.scissor),St=b.scissorTest,x.viewport(K),x.scissor(yt),x.setScissorTest(St),X=-1;return}else if(_t.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(_t.__hasExternalTextures)$.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(_t.__boundDepthTexture!==Yt){if(Yt!==null&&V.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}const Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Mt=!0);const Lt=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?k=Lt[U][G]:k=Lt[U],H=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?k=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?k=Lt[G]:k=Lt,K.copy(b.viewport),yt.copy(b.scissor),St=b.scissorTest}else K.copy(wt).multiplyScalar(et).floor(),yt.copy(Ht).multiplyScalar(et).floor(),St=he;if(G!==0&&(k=z),x.bindFramebuffer(L.FRAMEBUFFER,k)&&x.drawBuffers(b,k),x.viewport(K),x.scissor(yt),x.setScissorTest(St),H){const _t=V.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,G)}else if(Mt){const _t=U;for(let Ct=0;Ct<b.textures.length;Ct++){const Lt=V.get(b.textures[Ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,G,_t)}}else if(b!==null&&G!==0){const _t=V.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,G)}X=-1};function ol(b){const U=V.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=A.textureFormatReadable(b.format),U.__typeReadable=A.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,G,k,H,Mt,Tt,_t=0){if(!(b&&b.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){x.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Lt=b.textures[_t],Yt=Lt.format,Qt=Lt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t);const Rt=ol(Lt);if(Rt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&G>=0&&G<=b.height-H&&L.readPixels(U,G,k,H,mt.convert(Yt),mt.convert(Qt),Mt)}finally{const Lt=Q!==null?V.get(Q).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,U,G,k,H,Mt,Tt,_t=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct)if(U>=0&&U<=b.width-k&&G>=0&&G<=b.height-H){x.bindFramebuffer(L.FRAMEBUFFER,Ct);const Lt=b.textures[_t],Yt=Lt.format,Qt=Lt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t);const Rt=ol(Lt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ce),L.bufferData(L.PIXEL_PACK_BUFFER,Mt.byteLength,L.STREAM_READ),L.readPixels(U,G,k,H,mt.convert(Yt),mt.convert(Qt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const ye=Q!==null?V.get(Q).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,ye);const ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ru(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Mt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ce),L.deleteSync(ve),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,G=0){const k=Math.pow(2,-G),H=Math.floor(b.image.width*k),Mt=Math.floor(b.image.height*k),Tt=U!==null?U.x:0,_t=U!==null?U.y:0;$.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,Tt,_t,H,Mt),x.unbindTexture()},this.copyTextureToTexture=function(b,U,G=null,k=null,H=0,Mt=0){let Tt,_t,Ct,Lt,Yt,Qt,Rt,ce,ye;const ve=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(G!==null)Tt=G.max.x-G.min.x,_t=G.max.y-G.min.y,Ct=G.isBox3?G.max.z-G.min.z:1,Lt=G.min.x,Yt=G.min.y,Qt=G.isBox3?G.min.z:0;else{const Se=Math.pow(2,-H);Tt=Math.floor(ve.width*Se),_t=Math.floor(ve.height*Se),b.isDataArrayTexture?Ct=ve.depth:b.isData3DTexture?Ct=Math.floor(ve.depth*Se):Ct=1,Lt=0,Yt=0,Qt=0}k!==null?(Rt=k.x,ce=k.y,ye=k.z):(Rt=0,ce=0,ye=0);const pe=mt.convert(U.format),Ue=mt.convert(U.type);let Et;U.isData3DTexture?($.setTexture3D(U,0),Et=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Et=L.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Et=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ze=x.getParameter(L.UNPACK_ROW_LENGTH),se=x.getParameter(L.UNPACK_IMAGE_HEIGHT),Ze=x.getParameter(L.UNPACK_SKIP_PIXELS),pn=x.getParameter(L.UNPACK_SKIP_ROWS),Bn=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,ve.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),x.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Qt);const xi=b.isDataArrayTexture||b.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Se=V.get(b),zn=V.get(U),ge=V.get(Se.__renderTarget),kn=V.get(zn.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,ge.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let _i=0;_i<Ct;_i++)xi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(b).__webglTexture,H,Qt+_i),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(U).__webglTexture,Mt,ye+_i)),L.blitFramebuffer(Lt,Yt,Tt,_t,Rt,ce,Tt,_t,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||V.has(b)){const Se=V.get(b),zn=V.get(U);x.bindFramebuffer(L.READ_FRAMEBUFFER,D),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let ge=0;ge<Ct;ge++)xi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,H,Qt+ge):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,H),de?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zn.__webglTexture,Mt,ye+ge):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zn.__webglTexture,Mt),H!==0?L.blitFramebuffer(Lt,Yt,Tt,_t,Rt,ce,Tt,_t,L.COLOR_BUFFER_BIT,L.NEAREST):de?L.copyTexSubImage3D(Et,Mt,Rt,ce,ye+ge,Lt,Yt,Tt,_t):L.copyTexSubImage2D(Et,Mt,Rt,ce,Lt,Yt,Tt,_t);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else de?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Et,Mt,Rt,ce,ye,Tt,_t,Ct,pe,Ue,ve.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Et,Mt,Rt,ce,ye,Tt,_t,Ct,pe,ve.data):L.texSubImage3D(Et,Mt,Rt,ce,ye,Tt,_t,Ct,pe,Ue,ve):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Mt,Rt,ce,Tt,_t,pe,Ue,ve.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Mt,Rt,ce,ve.width,ve.height,pe,ve.data):L.texSubImage2D(L.TEXTURE_2D,Mt,Rt,ce,Tt,_t,pe,Ue,ve);x.pixelStorei(L.UNPACK_ROW_LENGTH,ze),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),x.pixelStorei(L.UNPACK_SKIP_ROWS,pn),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Bn),Mt===0&&U.generateMipmaps&&L.generateMipmap(Et),x.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){q=0,W=0,Q=null,x.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class Ym extends ih{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new vi;t.deleteAttribute("uv");const e=new Te({side:Ge}),n=new Te,i=new Wf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new ae(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new xn(t,n,6),o=new Le;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new ae(t,Ui(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new ae(t,Ui(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new ae(t,Ui(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new ae(t,Ui(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new ae(t,Ui(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new ae(t,Ui(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ui(s){return new zf({color:0,emissive:16777215,emissiveIntensity:s})}const as=new P;function Ke(s,t,e,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;as.copy(t),as[n]=0,as.normalize();const l=.5*a/(a+o),h=1-as.angleTo(s)/c;return Math.sign(as[e])===1?h*l:o/(a+o)+l+l*(1-h)}class Xi extends vi{constructor(t=1,e=1,n=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new P,l=new P,h=new P(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,S=new P,m=.5/a;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*r,f[p+1]=h.y*Math.sign(c.y)+l.y*r,f[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:S.set(1,0,0),d[M+0]=Ke(S,l,"z","y",r,n),d[M+1]=1-Ke(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),d[M+0]=1-Ke(S,l,"z","y",r,n),d[M+1]=1-Ke(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),d[M+0]=1-Ke(S,l,"x","z",r,t),d[M+1]=Ke(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),d[M+0]=1-Ke(S,l,"x","z",r,t),d[M+1]=1-Ke(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),d[M+0]=1-Ke(S,l,"x","y",r,t),d[M+1]=1-Ke(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),d[M+0]=Ke(S,l,"x","y",r,t),d[M+1]=1-Ke(S,l,"y","x",r,e);break}}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.segments,t.radius)}}const Tr=1.18,Hi=1.6,Ar=1.52;function Zm(s){return s.aspect>1.15?Km(s):Jm(s)}function Cr(s,t,e){return Array.from({length:s},(n,i)=>t+(i-(s-1)/2)*e)}function Jm(s){const n=Math.min(9.6/s.w,8.6/s.h),i=n*s.w,r=n*s.h,a=.34,o=-i/2,c=-r,l={x:0,z:1.55},h=3.35,f=s.slots>5?Math.min(Hi,9.4/s.slots):Hi,u=Cr(s.slots,0,f).map(M=>({x:M,z:h})),d=s.columns>5?9.4/s.columns:Hi,g=Cr(s.columns,0,d),S=5.25,m=4,p=Math.max(i/2+a,u.length*f/2,s.columns*d/2)+.25;return{mode:"portrait",tilt:30*Math.PI/180,cell:n,picX0:o,picZ0:c,picW:i,picH:r,frame:a,nest:l,slot:u,slotSize:Math.min(Tr,f*.78),queueCol:g,queueZ0:S,queueRow:Ar,queueRowsVisible:m,boxSize:Math.min(Tr,d*.78,f*.78),bounds:{minX:-p,maxX:p,minZ:c-a-.25,maxZ:S+(m-1)*Ar+.9}}}function Km(s){const n=Math.min(11/s.w,10.4/s.h),i=n*s.w,r=n*s.h,a=.36,o=-6.2,c=3.9,l=o-i/2,h=c-r,f=5.6,u=s.slots>5?Math.min(Hi,9/s.slots):Hi,d=3.7,g=Cr(s.slots,f,u).map(C=>({x:C,z:d})),S=s.columns>5?9/s.columns:Hi,m=Cr(s.columns,f,S),p=d-1.85,M=5,w={x:.1,z:5},_=p-(M-1)*Ar-.8,E=Math.min(l-a,f-g.length*u/2)-.3,y=Math.max(f+g.length*u/2,f+s.columns*S/2)+.3;return{mode:"landscape",tilt:28*Math.PI/180,cell:n,picX0:l,picZ0:h,picW:i,picH:r,frame:a,nest:w,slot:g,slotSize:Math.min(Tr,u*.78),queueCol:m,queueZ0:p,queueRow:-Ar,queueRowsVisible:M,boxSize:Math.min(Tr,S*.78,u*.78),bounds:{minX:E,maxX:y,minZ:Math.min(h-a,_)-.25,maxZ:Math.max(c+a,w.z+.9,d+.9)+.3}}}function dc(s,t,e){return{x:s.picX0+(t+.5)*s.cell,z:s.picZ0+(e+.5)*s.cell}}function Qm(s,t,e){return{x:s.queueCol[t],z:s.queueZ0+e*s.queueRow}}const Aa=.62,pc=.06,jm=new P(0,0,1),t2=new Nt(1,1,1);function Rr(s,t,e,n,i){const r=new Ur;return r.moveTo(s+i,t),r.lineTo(s+e-i,t),r.quadraticCurveTo(s+e,t,s+e,t+i),r.lineTo(s+e,t+n-i),r.quadraticCurveTo(s+e,t+n,s+e-i,t+n),r.lineTo(s+i,t+n),r.quadraticCurveTo(s,t+n,s,t+n-i),r.lineTo(s,t+i),r.quadraticCurveTo(s,t,s+i,t),r}function e2(s,t,e,n,i){const r=new _o;return r.moveTo(s+i,t),r.lineTo(s+e-i,t),r.quadraticCurveTo(s+e,t,s+e,t+i),r.lineTo(s+e,t+n-i),r.quadraticCurveTo(s+e,t+n,s+e-i,t+n),r.lineTo(s+i,t+n),r.quadraticCurveTo(s,t+n,s,t+n-i),r.lineTo(s,t+i),r.quadraticCurveTo(s,t,s+i,t),r}class n2{group=new Ve;cubes;w;h;instOf;present;colors;cellColor;layoutRef;frameMesh=null;floorMesh=null;anims=[];clock=0;hl=new Set;m4=new ne;q=new Xe;v=new P;sc=new P;frameMat;floorMat;sides;gates=new Ve;gateGeo;gateMat=new Te({color:"#ffffff",roughness:.4,emissive:"#fff3c4",emissiveIntensity:.35});constructor(t,e,n="#efd3a0"){this.w=t.w,this.h=t.h,this.sides=t.s.sides;const i=new Ur;i.moveTo(-.16,.05),i.lineTo(0,-.1),i.lineTo(.16,.05),i.lineTo(.16,.13),i.lineTo(0,-.02),i.lineTo(-.16,.13),i.closePath(),this.gateGeo=new Rs(i,{depth:.05,bevelEnabled:!1}),this.gateGeo.rotateX(-Math.PI/2),this.gateGeo.rotateY(Math.PI),this.group.add(this.gates);const r=t.w*t.h;this.instOf=new Int32Array(r).fill(-1),this.cellColor=new Int16Array(r);const a=[];for(let l=0;l<r;l++)this.cellColor[l]=t.cellColor(l),t.cellColor(l)>=0&&(this.instOf[l]=a.length,a.push(l));this.present=new Uint8Array(r),this.colors=e.map(l=>new Nt(l));const o=new Xi(.94,Aa,.94,1,.14),c=new Te({roughness:.42,metalness:0,envMapIntensity:.9});this.cubes=new xn(o,c,Math.max(1,a.length)),this.cubes.castShadow=!0,this.cubes.receiveShadow=!0,this.cubes.count=a.length,a.forEach((l,h)=>this.cubes.setColorAt(h,this.colors[this.cellColor[l]])),this.cubes.instanceColor&&(this.cubes.instanceColor.needsUpdate=!0),this.group.add(this.cubes),this.frameMat=new Te({color:n,roughness:.62,metalness:0}),this.floorMat=new Te({color:"#fbf1dc",roughness:.9,metalness:0});for(let l=0;l<r;l++)this.present[l]=t.cellColor(l)>=0&&!t.eaten[l]?1:0}setLayout(t){this.layoutRef=t,this.buildFrame(t),this.buildGates(t);for(let e=0;e<this.w*this.h;e++)this.instOf[e]>=0&&this.writeMatrix(e,this.present[e]?1:0,0);this.cubes.instanceMatrix.needsUpdate=!0,this.cubes.computeBoundingSphere()}get layout(){return this.layoutRef}buildGates(t){this.gates.clear();const e=t.cell*.35,n=t.picX0-e-t.frame/2,i=t.picX0+t.picW+e+t.frame/2,r=t.picZ0-e-t.frame/2,a=t.picZ0+t.picH+e+t.frame/2,o=Math.max(.06,Math.min(.2,t.cell*.32))+.16,c=(l,h,f)=>{const u=new ae(this.gateGeo,this.gateMat);u.position.set(l,o,h),u.rotation.y=f,u.userData.base=o,this.gates.add(u)};for(const l of this.sides)for(const h of[.2,.5,.8])l==="bottom"?c(n+(i-n)*h,a,Math.PI):l==="top"?c(n+(i-n)*h,r,0):l==="left"?c(n,r+(a-r)*h,-Math.PI/2):c(i,r+(a-r)*h,Math.PI/2)}buildFrame(t){this.frameMesh&&(this.group.remove(this.frameMesh),this.frameMesh.geometry.dispose()),this.floorMesh&&(this.group.remove(this.floorMesh),this.floorMesh.geometry.dispose(),this.floorMat.map?.dispose());const e=t.cell*.35,n=t.picX0-e,i=t.picZ0-e,r=t.picW+e*2,a=t.picH+e*2,o=t.frame,c=Rr(n-o,-(i+a+o),r+o*2,a+o*2,o*1.6);c.holes.push(e2(n,-(i+a),r,a,o*.7));const l=Math.max(.06,Math.min(.2,t.cell*.32)),h=new Rs(c,{depth:l,bevelEnabled:!0,bevelThickness:.05,bevelSize:.07,bevelSegments:3,curveSegments:10});h.rotateX(-Math.PI/2),h.translate(0,.05,0),this.frameMesh=new ae(h,this.frameMat),this.frameMesh.castShadow=!0,this.frameMesh.receiveShadow=!0,this.group.add(this.frameMesh);const f=new Nr(Rr(n-.02,-(i+a+.02),r+.04,a+.04,o*.7),8);f.rotateX(-Math.PI/2);const u=f.attributes.uv,d=f.attributes.position;for(let g=0;g<d.count;g++)u.setXY(g,(d.getX(g)-t.picX0)/t.picW,1-(d.getZ(g)-t.picZ0)/t.picH);this.floorMat.map=this.floorTexture(),this.floorMat.needsUpdate=!0,this.floorMesh=new ae(f,this.floorMat),this.floorMesh.position.y=.035,this.floorMesh.receiveShadow=!0,this.group.add(this.floorMesh)}floorTexture(){const t=Math.max(8,Math.min(32,Math.floor(1024/Math.max(this.w,this.h)))),e=document.createElement("canvas");e.width=this.w*t,e.height=this.h*t;const n=e.getContext("2d");n.fillStyle="#f7ead0",n.fillRect(0,0,e.width,e.height);for(let r=0;r<this.h;r++)for(let a=0;a<this.w;a++){const o=r*this.w+a;if(this.cellColor[o]<0)continue;const c=a*t+t/2,l=r*t+t/2,h=n.createRadialGradient(c,l-t*.1,t*.05,c,l,t*.55);h.addColorStop(0,"rgba(214,186,140,0.55)"),h.addColorStop(1,"rgba(214,186,140,0)"),n.fillStyle=h,n.fillRect(a*t,r*t,t,t)}const i=new gi(e);return i.colorSpace=be,i.anisotropy=4,i}writeMatrix(t,e,n,i=0){const r=this.instOf[t];if(r<0)return;const a=this.layoutRef,o=t%this.w,c=(t-o)/this.w,l=dc(a,o,c);this.v.set(l.x,pc+Aa*a.cell/2+n,l.z),this.q.setFromAxisAngle(jm,i);const h=a.cell*e;this.sc.set(h,h,h),this.m4.compose(this.v,this.q,this.sc),this.cubes.setMatrixAt(r,this.m4)}isPresent(t){return this.present[t]===1}cubeWorld(t,e){const n=this.layoutRef,i=t%this.w,r=(t-i)/this.w,a=dc(n,i,r);return e.set(a.x,pc+Aa*n.cell,a.z)}cubeColor(t){return this.colors[this.cellColor[t]]}highlight(t){const e=new Set(t??[]),n=new Nt;for(const i of this.hl){if(e.has(i))continue;const r=this.instOf[i];this.cubes.setColorAt(r,this.colors[this.cellColor[i]]),this.present[i]&&this.writeMatrix(i,1,0)}for(const i of e){if(this.hl.has(i)||!this.present[i])continue;const r=this.instOf[i];this.cubes.setColorAt(r,n.copy(this.colors[this.cellColor[i]]).lerp(t2,.45)),this.writeMatrix(i,1.08,this.layoutRef.cell*.3)}this.hl=e,this.cubes.instanceColor&&(this.cubes.instanceColor.needsUpdate=!0),this.cubes.instanceMatrix.needsUpdate=!0}remove(t){this.present[t]&&(this.present[t]=0,this.hl.delete(t)&&this.cubes.setColorAt(this.instOf[t],this.colors[this.cellColor[t]]),this.anims=this.anims.filter(e=>e.cell!==t),this.writeMatrix(t,0,0),this.cubes.instanceMatrix.needsUpdate=!0)}wobble(t){this.present[t]&&this.anims.push({cell:t,t:0,dur:.35,kind:"wobble",delay:0})}syncFrom(t,e=!0){for(let n=0;n<this.w*this.h;n++){if(this.instOf[n]<0)continue;const i=t.eaten[n]?0:1;i!==this.present[n]&&(this.present[n]=i,i&&e?this.anims.push({cell:n,t:0,dur:.45,kind:"drop",delay:Math.random()*.35}):this.writeMatrix(n,i,0))}this.cubes.instanceMatrix.needsUpdate=!0}rebuild(){this.layoutRef;let t=0;for(let e=0;e<this.w*this.h;e++){if(this.instOf[e]<0)continue;this.present[e]=1;const n=e%this.w,i=(e-n)/this.w,r=(this.h-1-i)*.045+Math.abs(n-this.w/2)*.012+Math.random()*.05;t=Math.max(t,r),this.anims.push({cell:e,t:0,dur:.5,kind:"drop",delay:r}),this.writeMatrix(e,0,0)}return this.cubes.instanceMatrix.needsUpdate=!0,t+.5}update(t){this.clock+=t;let e=0;for(const i of this.gates.children){const r=(Math.sin(this.clock*3-e*.7)+1)/2;i.position.y=i.userData.base+r*.06,i.scale.setScalar(.9+r*.2),e++}if(!this.anims.length)return;const n=[];for(const i of this.anims){if(i.delay>0){i.delay-=t,n.push(i);continue}i.t+=t;const r=Math.min(1,i.t/i.dur);if(this.present[i.cell]){if(i.kind==="wobble"){const a=(1-r)*.22;this.writeMatrix(i.cell,1,0,Math.sin(r*Math.PI*6)*a)}else{const a=r<.7?r/.7:1,o=(1-a)*(1-a)*2.2*this.layoutRef.cell*4,c=r<.7?1:1+Math.sin((r-.7)/.3*Math.PI)*.12;this.writeMatrix(i.cell,Math.min(1,.3+a*.7)*(2-c),o)}r<1?n.push(i):this.writeMatrix(i.cell,1,0)}}this.anims=n,this.cubes.instanceMatrix.needsUpdate=!0}dispose(){this.cubes.geometry.dispose(),this.cubes.material.dispose(),this.frameMesh?.geometry.dispose(),this.floorMesh?.geometry.dispose(),this.floorMat.map?.dispose(),this.frameMat.dispose(),this.floorMat.dispose(),this.gateGeo.dispose(),this.gateMat.dispose()}}const i2=["bottom","top","left","right"];function Lh(s){const t=new Int16Array(s.w*s.h);for(let e=0;e<t.length;e++){const n=s.cells.charCodeAt(e);t[e]=n===46?-1:parseInt(s.cells[e],36)}return t}function s2(s){return s>=10&&s%10===0?"superhard":s>=5&&s%5===0?"hard":"normal"}const an={Queue:0,Slot:1,Done:2};class Pr{s;eaten;air;reach;heaps;heapSize;reachCount;remaining;left;boxHidden;boxWhere;boxCol;columns;slots;taps;status;hashA;hashB;constructor(t){this.s=t,this.eaten=new Uint8Array(0),this.air=new Uint8Array(0),this.reach=new Uint8Array(0),this.heaps=[],this.heapSize=new Int32Array(0),this.reachCount=new Int32Array(0),this.remaining=new Int32Array(0),this.left=0,this.boxHidden=new Uint8Array(0),this.boxWhere=new Uint8Array(0),this.boxCol=new Int16Array(0),this.columns=[],this.slots=[],this.taps=0,this.status="playing",this.hashA=0,this.hashB=0}static fromLevel(t){const e=t.picture,n=Lh(e),i=e.w,r=e.h,a=e.palette.length,o=i*r,c=new Int32Array(o),l=new Int32Array(o);let h=625341585;for(let v=0;v<o;v++)h^=h<<13,h^=h>>>17,h^=h<<5,c[v]=h,h^=h<<13,h^=h>>>17,h^=h<<5,l[v]=h;const f=t.sides.length?t.sides.slice():["bottom"],u=i2.map(v=>f.includes(v)),d=new Int32Array(o),g=new Uint8Array(o);for(let v=0;v<r;v++)for(let T=0;T<i;T++){const R=v*i+T;let I=1<<20,F=0;const z=(q,W)=>{(q<I||q===I&&W<F)&&(I=q,F=W)},D=Math.round(Math.abs(T-(i-1)/2)*2),B=Math.round(Math.abs(v-(r-1)/2)*2);u[0]&&z(r-1-v,D),u[1]&&z(v,D),u[2]&&z(T,B),u[3]&&z(i-1-T,B),d[R]=I*256+F,u[0]&&v===r-1&&(g[R]|=1),u[1]&&v===0&&(g[R]|=2),u[2]&&T===0&&(g[R]|=4),u[3]&&T===i-1&&(g[R]|=8)}const S=new Int32Array(a);for(let v=0;v<o;v++)n[v]>=0&&S[n[v]]++;const m=t.boxes.reduce((v,T)=>Math.max(v,T.id),-1)+1,p=new Int16Array(m).fill(-1),M=new Int16Array(m),w=new Int16Array(m).fill(-1),_=new Int16Array(m),E=new Map;for(const v of t.boxes)if(p[v.id]=v.color,M[v.id]=v.count,_[v.id]=v.frozen??0,v.link!==void 0&&v.link>=0){w[v.id]=v.link;const T=E.get(v.link);T?T.push(v.id):E.set(v.link,[v.id])}const y=new Pr({w:i,h:r,colors:a,cell:n,zobA:c,zobB:l,prio:d,edge:g,colorCount:S,boxColor:p,boxCount:M,boxLink:w,boxThaw:_,groups:E,sides:f,open:u});y.eaten=new Uint8Array(o),y.air=new Uint8Array(o),y.reach=new Uint8Array(o),y.heaps=Array.from({length:a},(v,T)=>new Int32Array(Math.max(1,S[T]))),y.heapSize=new Int32Array(a),y.reachCount=new Int32Array(a),y.remaining=Int32Array.from(S),y.left=S.reduce((v,T)=>v+T,0);const C=[];for(let v=0;v<o;v++)g[v]&&(n[v]<0?y.air[v]||(y.air[v]=1,C.push(v)):y.markReach(v));y.flood(C),y.boxHidden=new Uint8Array(m),y.boxWhere=new Uint8Array(m).fill(an.Done),y.boxCol=new Int16Array(m).fill(-1);for(const v of t.boxes)y.boxHidden[v.id]=v.hidden?1:0;return y.columns=t.columns.map(v=>v.slice()),y.columns.forEach((v,T)=>{for(const R of v)y.boxWhere[R]=an.Queue,y.boxCol[R]=T;v.length&&(y.boxHidden[v[0]]=0)}),y.slots=new Array(t.slots).fill(null),y}clone(){const t=new Pr(this.s);return t.eaten=this.eaten.slice(),t.air=this.air.slice(),t.reach=this.reach.slice(),t.heaps=this.heaps.map((e,n)=>{const i=new Int32Array(e.length);return i.set(e.subarray(0,this.heapSize[n])),i}),t.heapSize=this.heapSize.slice(),t.reachCount=this.reachCount.slice(),t.remaining=this.remaining.slice(),t.left=this.left,t.boxHidden=this.boxHidden.slice(),t.boxWhere=this.boxWhere.slice(),t.boxCol=this.boxCol.slice(),t.columns=this.columns.map(e=>e.slice()),t.slots=this.slots.map(e=>e?{box:e.box,left:e.left}:null),t.taps=this.taps,t.status=this.status,t.hashA=this.hashA,t.hashB=this.hashB,t}get w(){return this.s.w}get h(){return this.s.h}cellColor(t){return this.s.cell[t]}isFree(t){return this.s.cell[t]<0||this.eaten[t]===1}edgeMask(t){return this.s.edge[t]}less(t,e){const n=this.s.prio[t],i=this.s.prio[e];return n<i||n===i&&t<e}markReach(t){if(this.reach[t])return;this.reach[t]=1;const e=this.s.cell[t];this.reachCount[e]++;const n=this.heaps[e];let i=this.heapSize[e]++;for(n[i]=t;i>0;){const r=i-1>>1;if(!this.less(n[i],n[r]))break;const a=n[i];n[i]=n[r],n[r]=a,i=r}}heapPop(t){const e=this.heaps[t],n=--this.heapSize[t];if(n<=0)return;e[0]=e[n];let i=0;for(;;){const r=i*2+1,a=r+1;let o=i;if(r<n&&this.less(e[r],e[o])&&(o=r),a<n&&this.less(e[a],e[o])&&(o=a),o===i)break;const c=e[i];e[i]=e[o],e[o]=c,i=o}}flood(t){const{w:e,h:n,cell:i}=this.s;for(let r=0;r<t.length;r++){const a=t[r],o=a%e,c=(a-o)/e;for(let l=0;l<4;l++){let h=o,f=c;if(l===0?f++:l===1?f--:l===2?h--:h++,h<0||f<0||h>=e||f>=n)continue;const u=f*e+h;i[u]<0||this.eaten[u]?this.air[u]||(this.air[u]=1,t.push(u)):this.markReach(u)}}}findTarget(t){const e=this.heaps[t];for(;this.heapSize[t]>0&&this.eaten[e[0]];)this.heapPop(t);return this.heapSize[t]>0?e[0]:-1}exposedCounts(t){const e=t??new Int32Array(this.s.colors);return e.set(this.reachCount),e}exposedCells(){const t=[];for(let e=0;e<this.reach.length;e++)this.reach[e]&&t.push(e);return t}eatCell(t){const{w:e,h:n,cell:i,zobA:r,zobB:a,edge:o}=this.s;if(this.eaten[t]||i[t]<0)return;this.eaten[t]=1;const c=i[t];this.remaining[c]--,this.left--,this.hashA^=r[t],this.hashB^=a[t],this.reach[t]&&(this.reach[t]=0,this.reachCount[c]--);const l=t%e,h=(t-l)/e;let f=o[t]!==0;f||(h+1<n&&this.air[t+e]||h>0&&this.air[t-e]||l>0&&this.air[t-1]||l+1<e&&this.air[t+1])&&(f=!0),f&&!this.air[t]&&(this.air[t]=1,this.flood([t]))}boxColor(t){return this.s.boxColor[t]}boxCount(t){return this.s.boxCount[t]}boxLink(t){return this.s.boxLink[t]}boxThawAt(t){return this.s.boxThaw[t]}get boxIds(){return this.s.boxColor.length}isFrozen(t){return this.taps<this.s.boxThaw[t]}frozenLeft(t){return Math.max(0,this.s.boxThaw[t]-this.taps)}groupOf(t){const e=this.s.boxLink[t];return e<0?[t]:this.s.groups.get(e)??[t]}freeSlots(){let t=0;for(const e of this.slots)e||t++;return t}firstFreeSlot(){for(let t=0;t<this.slots.length;t++)if(!this.slots[t])return t;return-1}isAvailable(t){if(this.boxWhere[t]!==an.Queue)return!1;const e=this.columns[this.boxCol[t]],n=this.s.boxLink[t];for(const i of e){if(i===t)return!0;if(n<0||this.s.boxLink[i]!==n)return!1}return!1}canTake(t){if(this.status!=="playing")return!1;const e=this.groupOf(t);if(e.length>this.freeSlots())return!1;for(const n of e)if(this.boxWhere[n]!==an.Queue||this.isFrozen(n)||!this.isAvailable(n))return!1;return!0}whyNot(t){if(this.boxWhere[t]!==an.Queue)return"gone";const e=this.groupOf(t);for(const n of e)if(this.isFrozen(n))return"frozen";if(!this.isAvailable(t))return"blocked";for(const n of e)if(!this.isAvailable(n))return"link";return e.length>this.freeSlots()?"slots":"ok"}legalMoves(){const t=[];if(this.status!=="playing"||this.freeSlots()===0)return t;let e=null;for(const n of this.columns){if(!n.length)continue;const i=n[0],r=this.s.boxLink[i];if(r>=0){if(e?.includes(r))continue;(e??=[]).push(r)}this.canTake(i)&&t.push(i)}return t}take(t,e){return this.canTake(t)?(this.moveToSlots(this.groupOf(t),e,!1),!0):!1}grab(t,e){if(this.status!=="playing"||this.boxWhere[t]!==an.Queue)return!1;const n=this.groupOf(t);if(n.length>this.freeSlots())return!1;for(const i of n)if(this.boxWhere[i]!==an.Queue||this.isFrozen(i))return!1;return this.moveToSlots(n,e,!0),!0}moveToSlots(t,e,n){for(const i of t){const r=this.boxCol[i],a=this.columns[r],o=a.indexOf(i);a.splice(o,1);const c=this.firstFreeSlot();this.slots[c]={box:i,left:this.s.boxCount[i]},this.boxWhere[i]=an.Slot,this.boxCol[i]=-1,this.boxHidden[i]&&(this.boxHidden[i]=0,e?.push({t:"reveal",box:i})),e?.push({t:"take",box:i,slot:c,col:r,index:o,grabbed:n||void 0})}this.taps++,this.afterQueueChange(e)}afterQueueChange(t){for(const e of this.columns)e.length&&this.boxHidden[e[0]]&&(this.boxHidden[e[0]]=0,t?.push({t:"reveal",box:e[0]}));if(t)for(const e of this.columns)for(const n of e)this.s.boxThaw[n]===this.taps&&t.push({t:"thaw",box:n})}addSlot(){this.slots.push(null),this.status==="stuck"&&(this.status="playing")}shuffle(t,e){const n=[],i=[];this.columns.forEach((r,a)=>r.forEach((o,c)=>{this.s.boxLink[o]<0&&!this.isFrozen(o)&&(n.push([a,c]),i.push(o))})),t.shuffle(i),n.forEach(([r,a],o)=>{this.columns[r][a]=i[o],this.boxCol[i[o]]=r}),this.status==="stuck"&&(this.status="playing"),this.afterQueueChange(e)}round(t){if(this.status!=="playing")return 0;let e=0;for(let n=0;n<this.slots.length;n++){const i=this.slots[n];if(!i)continue;const r=this.s.boxColor[i.box],a=this.findTarget(r);a<0||(this.eatCell(a),i.left--,e++,t?.push({t:"ant",slot:n,box:i.box,cell:a,color:r,left:i.left}),i.left<=0&&(this.slots[n]=null,this.boxWhere[i.box]=an.Done,t?.push({t:"boxDone",slot:n,box:i.box})))}return this.left===0&&this.status==="playing"&&(this.status="won",t?.push({t:"won"})),e}isQuiet(){for(const t of this.slots)if(t&&this.findTarget(this.s.boxColor[t.box])>=0)return!1;return!0}settle(t){for(;this.status==="playing"&&this.round(t)>0;);this.checkStuck(t)}checkStuck(t){return this.status!=="playing"?this.status==="stuck":this.left>0&&this.isQuiet()&&this.legalMoves().length===0?(this.status="stuck",t?.push({t:"stuck"}),!0):!1}unstick(){this.status==="stuck"&&(this.status="playing")}key(){let t="";for(const e of this.columns)t+=e.length+",";t+="|";for(const e of this.slots)t+=e?e.box+":"+e.left+",":"-,";return t+"|"+this.hashA+","+this.hashB+"|"+this.taps}queueSize(){let t=0;for(const e of this.columns)t+=e.length;return t}}const To='"Nunito Variable", "Nunito", system-ui, sans-serif';async function r2(){try{await Promise.all([document.fonts.load(`900 64px ${To}`),document.fonts.load(`800 32px ${To}`)])}catch{}}class a2{canvas;texture;ctx;last="";constructor(t=128){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.texture=new gi(this.canvas),this.texture.colorSpace=be,this.texture.anisotropy=4}draw(t,e={}){const n=t+(e.fill??"")+(e.stroke??"")+(e.shadow??"")+(e.scale??1);if(n===this.last)return;this.last=n;const{ctx:i,canvas:r}=this,a=r.width;if(i.clearRect(0,0,a,a),!t){this.texture.needsUpdate=!0;return}const o=t.length,c=a*(o>=3?.42:o===2?.52:.6)*(e.scale??1);i.font=`900 ${c}px ${To}`,i.textAlign="center",i.textBaseline="middle";const l=a*.53;i.lineJoin="round",i.fillStyle=e.shadow??"rgba(20, 12, 30, 0.35)",i.fillText(t,a/2,l+c*.07),i.lineWidth=c*.09,i.strokeStyle=e.stroke??"rgba(38, 28, 60, 0.85)",i.strokeText(t,a/2,l),i.fillStyle=e.fill??"#ffffff",i.fillText(t,a/2,l),this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function kr(s="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=64){const n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d"),r=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,s),r.addColorStop(1,t),i.fillStyle=r,i.fillRect(0,0,e,e);const a=new gi(n);return a.colorSpace=be,a}function Ih(s=64){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=s/2,i=e.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.moveTo(n,0),e.quadraticCurveTo(n,n,s,n),e.quadraticCurveTo(n,n,n,s),e.quadraticCurveTo(n,n,0,n),e.quadraticCurveTo(n,n,n,0),e.fill();const r=new gi(t);return r.colorSpace=be,r}function o2(s=128){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");e.fillStyle="#8f8aa3",e.fillRect(0,0,s,s),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=s*.06;for(let i=-s;i<s*2;i+=s*.22)e.beginPath(),e.moveTo(i,0),e.lineTo(i+s,s),e.stroke();const n=new gi(t);return n.colorSpace=be,n}const qn=.62,mc=new Nt("#9b94b3"),l2=new Nt("#8f8a7c");class c2{group=new Ve;boxes=new Map;links=[];boxGeo=new Xi(1,qn,1,3,.2);iceGeo=new Xi(1.12,qn*1.25,1.12,2,.16);labelGeo=new On(1,1);iceMat=new Te({color:"#cfefff",transparent:!0,opacity:.62,roughness:.08,metalness:.05,envMapIntensity:1.6,depthWrite:!1});linkMat=new Te({color:"#8a5a32",roughness:.55,emissive:"#3a2210",emissiveIntensity:.25});linkGeo=new Go(.15,.15,1,14,1);mysteryTex=o2();tray=null;trayMat=new Te({color:"#efd3a0",roughness:.62});padMat=new Te({color:"#d9b67c",roughness:.85});layout;sim;colors;tmp=new P;tmp2=new P;up=new P(0,1,0);slotPulse=0;constructor(t,e){this.sim=t,this.colors=e.map(i=>new Nt(i));for(let i=0;i<t.boxIds;i++)t.boxColor(i)<0||this.boxes.set(i,this.makeBox(i));const n=new Set;for(let i=0;i<t.boxIds;i++){const r=t.boxLink(i);if(r<0||n.has(r))continue;n.add(r);const a=t.groupOf(i);for(let o=0;o+1<a.length;o++){const c=new ae(this.linkGeo,this.linkMat);c.castShadow=!0,this.group.add(c),this.links.push({a:a[o],b:a[o+1],mesh:c})}}}makeBox(t){const e=new Ve,n=this.colors[this.sim.boxColor(t)],i=new Te({color:n,roughness:.38,metalness:0,envMapIntensity:1}),r=new ae(this.boxGeo,i);r.castShadow=!0,r.receiveShadow=!0,r.position.y=qn/2,r.userData.boxId=t,e.add(r);const a=new a2(128),o=new Te({map:a.texture,transparent:!0,depthWrite:!1,roughness:.45,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2}),c=new ae(this.labelGeo,o);c.renderOrder=5,e.add(c);let l=null;return this.sim.boxThawAt(t)>0&&(l=new ae(this.iceGeo,this.iceMat),l.position.y=qn*1.25/2-.02,l.renderOrder=4,e.add(l)),this.group.add(e),{id:t,group:e,body:r,mat:i,label:a,labelMesh:c,ice:l,color:n,hiddenShown:!1,where:"queue",from:new P,to:new P,t:1,dur:.001,arc:0,shake:0,flip:0,pop:0,bump:0,hint:0,fade:1,row:0}}setSim(t){this.sim=t}setLayout(t){this.layout=t,this.buildTray(t);for(const e of this.boxes.values())e.labelMesh.rotation.set(-Math.PI/2,0,0),e.labelMesh.scale.setScalar(.92);this.syncFromSim(!1)}buildTray(t){this.tray&&(this.group.remove(this.tray),this.tray.traverse(u=>u.geometry?.dispose()));const e=new Ve,n=t.slot.length,i=n>1?t.slot[1].x-t.slot[0].x:1.6,r=(t.slot[0].x+t.slot[n-1].x)/2,a=t.slot[0].z,o=i*(n-1)+t.slotSize+.55,c=t.slotSize+.55,l=Rr(r-o/2,-(a+c/2),o,c,.4),h=new Rs(l,{depth:.12,bevelEnabled:!0,bevelThickness:.05,bevelSize:.06,bevelSegments:3,curveSegments:8});h.rotateX(-Math.PI/2);const f=new ae(h,this.trayMat);f.receiveShadow=!0,f.castShadow=!0,e.add(f);for(const u of t.slot){const d=new ae(new Nr(Rr(u.x-t.slotSize/2-.04,-(u.z+t.slotSize/2+.04),t.slotSize+.08,t.slotSize+.08,.22),6),this.padMat);d.geometry.rotateX(-Math.PI/2),d.position.y=.175,d.receiveShadow=!0,e.add(d)}this.tray=e,this.group.add(e)}targetOf(t,e){const n=this.sim.boxWhere[t];if(n===an.Queue){const i=this.sim.boxCol[t],r=this.sim.columns[i].indexOf(t),a=Qm(this.layout,i,r);return e.set(a.x,0,a.z),{where:"queue",row:r}}if(n===an.Slot){const i=this.sim.slots.findIndex(a=>a?.box===t),r=this.layout.slot[Math.max(0,Math.min(this.layout.slot.length-1,i))];return e.set(r.x,.17,r.z),{where:"slot",row:0}}return{where:"gone",row:0}}syncFromSim(t=!0){for(const e of this.boxes.values()){const{where:n,row:i}=this.targetOf(e.id,this.tmp),r=e.where==="gone";if(n==="gone"){e.where!=="gone"&&(e.where="gone",t?e.pop=Math.max(e.pop,1e-4):e.group.visible=!1);continue}r&&(e.group.visible=!0,e.pop=0);const a=!e.to.equals(this.tmp)||e.where!==n;if(e.row=i,a){e.from.copy(t?e.group.position:this.tmp),e.to.copy(this.tmp),e.t=0;const o=n==="slot"&&e.where==="queue";e.dur=t?o?.42:.26:1e-4,e.arc=o?1.4:0,t||e.group.position.copy(this.tmp)}e.where=n}this.refreshLabels()}refreshLabels(){for(const t of this.boxes.values())this.refreshLabel(t)}refreshLabel(t){const e=this.sim.boxHidden[t.id]===1,n=this.sim.isFrozen(t.id);if(e)t.mat.color.copy(mc),t.mat.map=this.mysteryTex,t.mat.needsUpdate=t.hiddenShown===!1,t.hiddenShown=!0,t.label.draw("?",vc(mc));else if(t.hiddenShown&&(t.hiddenShown=!1,t.mat.map=null,t.mat.needsUpdate=!0,t.flip=1),t.mat.color.copy(t.color),n)t.label.draw(String(this.sim.frozenLeft(t.id)),{fill:"#eefaff",stroke:"#3d7fae",shadow:"rgba(30,70,110,0.4)"});else{const i=this.sim.slots.find(a=>a?.box===t.id),r=i?i.left:this.sim.boxCount(t.id);t.label.draw(String(r),vc(t.color))}t.ice&&!n&&t.ice.visible&&(t.ice.visible=!1)}pick(t){const e=[];for(const i of this.boxes.values())i.where==="queue"&&i.group.visible&&i.fade>.2&&e.push(i.body);const n=t.intersectObjects(e,!1)[0];return n?n.object.userData.boxId:null}shake(t){const e=this.boxes.get(t);e&&(e.shake=.45)}bump(t){const e=this.boxes.get(t);e&&(e.bump=.25)}setHint(t){for(const e of this.boxes.values())e.hint=e.id===t?Math.max(e.hint,.001):0}pulseSlots(){this.slotPulse=1}boxTop(t,e){const n=this.boxes.get(t);if(!n)return e.set(0,0,0);const i=n.t<1?n.to:n.group.position;return e.copy(i).setY(i.y+qn*this.layout.boxSize)}boxColor(t){return this.colors[this.sim.boxColor(t)]}isSettled(){for(const t of this.boxes.values())if(t.pop>0||t.t<1&&t.where!=="gone")return!1;return!0}update(t,e){const n=this.layout,i=n.boxSize;for(const r of this.boxes.values()){if(r.where==="gone"&&r.pop===0){r.group.visible=!1;continue}if(r.t<1){r.t=Math.min(1,r.t+t/r.dur);const d=gc(r.t);r.group.position.lerpVectors(r.from,r.to,d),r.group.position.y+=Math.sin(r.t*Math.PI)*r.arc,r.t>=1&&r.arc>0&&(r.bump=.22)}let a=i,o=i,c=i;if(r.bump>0){r.bump=Math.max(0,r.bump-t);const d=r.bump/.22;o*=1-Math.sin(d*Math.PI)*.18,a*=1+Math.sin(d*Math.PI)*.1,c=a}let l=0;if(r.shake>0&&(r.shake=Math.max(0,r.shake-t),l=Math.sin(r.shake*55)*.09*(r.shake/.45)),r.pop>0){r.pop+=t;const d=r.pop/.3,g=d<.35?1+d*.5:Math.max(0,1.18*(1-(d-.35)/.65));if(a*=g,o*=g,c*=g,d>=1){r.group.visible=!1,r.pop=0;continue}}r.hint>0&&(r.hint+=t,r.group.position.y=r.to.y+Math.abs(Math.sin(r.hint*5))*.35);const h=r.where!=="queue"||r.row<n.queueRowsVisible?1:r.row===n.queueRowsVisible?.5:0;r.fade+=(h-r.fade)*Math.min(1,t*8);const f=r.fade,u=.55+.45*f;r.group.scale.set(a*u,o*u,c*u),r.group.visible=f>.05||r.pop>0,r.group.visible&&(r.body.position.x=l,r.labelMesh.position.set(l,qn+.012,0),r.labelMesh.visible=f>.75,r.hiddenShown||r.mat.color.copy(r.color).lerp(l2,(1-f)*.9),r.flip>0?(r.flip=Math.max(0,r.flip-t*2.8),r.body.rotation.x=(1-gc(1-r.flip))*Math.PI*2*(r.flip>0?1:0)):r.body.rotation.x=0,r.ice&&(r.ice.rotation.y=Math.sin(e*1.3+r.id)*.02))}for(const r of this.links){const a=this.boxes.get(r.a),o=this.boxes.get(r.b),c=a.group.visible&&o.group.visible&&a.where!=="gone"&&o.where!=="gone"&&a.fade>.3&&o.fade>.3;if(r.mesh.visible=c,!c)continue;this.tmp.copy(a.group.position).setY(a.group.position.y+qn*i*.92),this.tmp2.copy(o.group.position).setY(o.group.position.y+qn*i*.92);const l=this.tmp.distanceTo(this.tmp2);r.mesh.position.addVectors(this.tmp,this.tmp2).multiplyScalar(.5),r.mesh.scale.set(i,Math.max(.01,l-i*.5),i),r.mesh.quaternion.setFromUnitVectors(this.up,this.tmp2.sub(this.tmp).normalize())}if(this.slotPulse>0){this.slotPulse=Math.max(0,this.slotPulse-t*.7);const r=Math.sin(this.slotPulse*Math.PI*4)*this.slotPulse;this.padMat.color.setRGB(.85+r*.15,.71-r*.3,.49-r*.3)}}dispose(){for(const t of this.boxes.values())t.mat.dispose(),t.label.dispose(),t.labelMesh.material.dispose();this.boxGeo.dispose(),this.iceGeo.dispose(),this.labelGeo.dispose(),this.iceMat.dispose(),this.linkMat.dispose(),this.linkGeo.dispose(),this.mysteryTex.dispose(),this.trayMat.dispose(),this.padMat.dispose(),this.tray?.traverse(t=>t.geometry?.dispose())}}function gc(s){return 1-Math.pow(1-s,3)}function vc(s){const t={h:0,s:0,l:0};s.getHSL(t,be);const e=Math.round(t.h*360),n=Math.round(Math.min(.75,t.s)*100),i=t.l>.72;return{fill:`hsl(${e}, ${Math.round(n*.5)}%, ${i?99:96}%)`,stroke:`hsl(${e}, ${n}%, ${Math.round(Math.max(.16,t.l*(i?.5:.42))*100)}%)`,shadow:`hsla(${e}, ${n}%, ${Math.round(Math.max(.1,t.l*.3)*100)}%, 0.45)`}}function Dh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ie;let l=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=s[u].attributes.position.count}c.setIndex(f)}for(const h in r){const f=xc(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let S=0;S<a[h].length;++S)d.push(a[h][S][u]);const g=xc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function xc(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new fn(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const S=h.getComponent(u,g);o.setComponent(u+f,g,S)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const Ni=700,_c=6;function h2(){const s=[],t=(n,i,r,a,o,c,l=12)=>{const h=new Ps(1,l,Math.round(l*.75));h.scale(n,i,r),h.translate(a,o,c),s.push(h)};t(.25,.21,.31,0,.27,-.33),t(.075,.075,.09,0,.23,-.05,8),t(.13,.12,.17,0,.25,.08,12),t(.22,.2,.21,0,.33,.33);for(const n of[-1,1]){const i=new $o([new P(n*.07,.47,.38),new P(n*.13,.66,.43),new P(n*.22,.72,.6)]);s.push(new Fr(i,6,.022,4,!1)),t(.045,.045,.045,n*.22,.72,.6,8)}const e=Dh(s.map(n=>n.toNonIndexed()),!1);return e.computeVertexNormals(),e}function Mc(s,t,e,n){const i=new Ps(s,8,6);i.translate(-n,e,t);const r=new Ps(s,8,6);return r.translate(n,e,t),Dh([i,r],!1)}function u2(){const s=new $o([new P(0,0,0),new P(.17,.09,0),new P(.3,.02,0),new P(.36,-.2,0)]);return new Fr(s,6,.024,4,!1)}const f2=[.15,.07,-.01],d2=[.55,0,-.55];class p2{group=new Ve;body;eyes;pupils;legs;cubes;ants=[];palette;legColors;layout;board;cb;speed=1;m=new ne;m2=new ne;q=new Xe;e=new tn;v=new P;s=new P;one=new P(1,1,1);antSize=.42;rect={x0:0,x1:0,z0:0,z1:0,ix0:0,ix1:0,iz0:0,iz1:0,rim:.2};sim;bfsDist=new Int32Array(0);bfsPrev=new Int32Array(0);constructor(t,e,n,i){this.board=e,this.sim=n,this.cb=i,this.palette=t.map(a=>new Nt(a)),this.legColors=this.palette.map(a=>{const o={h:0,s:0,l:0};return a.getHSL(o),new Nt().setHSL(o.h,Math.min(1,o.s*.9),Math.max(.03,o.l*.45))});const r=new Te({roughness:.32,metalness:0,envMapIntensity:1.1});this.body=new xn(h2(),r,Ni),this.body.castShadow=!0,this.eyes=new xn(Mc(.085,.47,.4,.1),new Te({color:"#ffffff",roughness:.25}),Ni),this.pupils=new xn(Mc(.048,.535,.41,.105),new Te({color:"#15101f",roughness:.2}),Ni),this.legs=new xn(u2(),new Te({roughness:.5}),Ni*_c),this.cubes=new xn(new Xi(1,.62,1,1,.14),new Te({roughness:.42}),Ni),this.cubes.castShadow=!0;for(const a of[this.body,this.eyes,this.pupils,this.legs,this.cubes])a.frustumCulled=!1,a.count=0,a.instanceMatrix.setUsage(Tu),this.group.add(a);this.body.setColorAt(0,this.palette[0]),this.legs.setColorAt(0,this.palette[0]),this.cubes.setColorAt(0,this.palette[0])}setLayout(t){this.layout=t,this.antSize=Math.max(.46,Math.min(.74,t.cell*1.9));const e=t.cell*.35,n=t.picX0-e,i=t.picZ0-e,r=t.picX0+t.picW+e,a=t.picZ0+t.picH+e;this.rect={ix0:n,iz0:i,ix1:r,iz1:a,x0:n-t.frame,z0:i-t.frame,x1:r+t.frame,z1:a+t.frame,rim:Math.max(.06,Math.min(.2,t.cell*.32))+.1};const o=t.boxSize/2+.25,c=t.queueZ0-Math.sign(t.queueRow)*o,l=t.queueZ0+(t.queueRowsVisible+1)*t.queueRow;this.avoid={x0:t.queueCol[0]-o,x1:t.queueCol[t.queueCol.length-1]+o,z0:Math.min(c,l),z1:Math.max(c,l)},this.clear()}avoid={x0:0,x1:0,z0:0,z1:0};get count(){return this.ants.length}clear(){this.ants.length=0}fadeAll(){for(const t of this.ants)t.phase="fade",t.timer=0}spawn(t,e,n){if(this.ants.length>=Ni){this.board.remove(e),this.cb.onPick(e),this.cb.onDeliver();return}const i=Math.random(),r=t.x+(i-.5)*.3,a=t.z+.2,o=this.planInside(e,r,a),c=[r,a];this.route(c,o.inside[0],o.inside[1]);const l=c.length/2-1;for(let u=2;u<o.inside.length;u+=2)c.push(o.inside[u],o.inside[u+1]);const h={color:n,cell:e,pts:c,cum:[],dist:0,phase:"out",timer:0,yaw:Math.PI,legPhase:i*6,startY:t.y,seed:i,line:o.block,lineD:[],x:c[0],z:c[1],y:t.y,scale:.2,wait:0,back:o.inside.length/2};this.measure(h);const f=h.cum[l];h.lineD=o.blockD.map(u=>f+u),this.ants.push(h)}cellXZ(t,e){const n=this.layout,i=this.sim.w,r=t%i;return e.x=n.picX0+(r+.5)*n.cell,e.z=n.picZ0+((t-r)/i+.5)*n.cell,e}exitPoint(t,e){const n=this.cellXZ(t,{x:0,z:0}),i=this.rect;return e===1?n.z=i.z1+.25:e===2?n.z=i.z0-.25:e===4?n.x=i.x0-.25:n.x=i.x1+.25,n}planInside(t,e,n){const i=this.sim,r=i.w,a=i.h,o=r*a,l=this.layout.cell;this.bfsDist.length!==o&&(this.bfsDist=new Int32Array(o),this.bfsPrev=new Int32Array(o));const h=this.bfsDist.fill(-1),f=this.bfsPrev,u=Q=>i.isFree(Q)&&i.air[Q]===1;let d=1/0,g=-1,S=0;const m=(Q,X)=>{const J=i.edgeMask(Q);for(const K of[1,2,4,8]){if(!(J&K))continue;const yt=this.exitPoint(Q,K),St=X*l+Math.hypot(yt.x-e,yt.z-n)*.8;St<d&&(d=St,g=Q,S=K)}};h[t]=0,m(t,0);const p=[t];for(let Q=0;Q<p.length;Q++){const X=p[Q],J=X%r,K=(X-J)/r;for(let yt=0;yt<4;yt++){const St=yt===2?J-1:yt===3?J+1:J,jt=yt===0?K+1:yt===1?K-1:K;if(St<0||jt<0||St>=r||jt>=a)continue;const Wt=jt*r+St;h[Wt]>=0||!u(Wt)||(h[Wt]=h[X]+1,f[Wt]=X,m(Wt,h[Wt]),p.push(Wt))}}const M=this.cellXZ(t,{x:0,z:0}),w=l*.5+this.antSize*.4,_=[];if(g<0)return _.push(M.x,this.rect.z1+.25,M.x,M.z+w),{inside:_,block:[],blockD:[]};const E=this.exitPoint(g,S),y=(Math.random()-.5)*l*.35,C=S===1||S===2;_.push(E.x+(C?y:0),E.z+(C?0:y));const v=[];for(let Q=g;Q!==t;Q=f[Q])v.push(Q);const T={x:0,z:0};for(const Q of v)this.cellXZ(Q,T),_.push(T.x,T.z);const R=v.length?_[_.length-2]:E.x,I=v.length?_[_.length-1]:E.z;let F=R-M.x,z=I-M.z;const D=Math.hypot(F,z)||1;F/=D,z/=D,_.push(M.x+F*w,M.z+z*w);const B=this.smoothPath(_,t),{block:q,blockD:W}=this.blockingCells(B,t);return{inside:B,block:q,blockD:W}}walkable(t,e,n,i,r){const a=this.layout,o=this.sim.w,c=this.sim.h,l=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(l/(a.cell*.3)));for(let f=1;f<h;f++){const u=f/h,d=Math.floor((t+(n-t)*u-a.picX0)/a.cell),g=Math.floor((e+(i-e)*u-a.picZ0)/a.cell);if(d<0||g<0||d>=o||g>=c)continue;const S=g*o+d;if(S!==r&&(!this.sim.isFree(S)||!this.sim.air[S]))return!1}return!0}smoothPath(t,e){const n=t.length/2;if(n<=2)return t;const i=[t[0],t[1]];let r=0;for(;r<n-1;){let a=Math.min(n-1,r+14);for(;a>r+1&&!this.walkable(t[r*2],t[r*2+1],t[a*2],t[a*2+1],e);)a--;i.push(t[a*2],t[a*2+1]),r=a}return i}blockingCells(t,e){const n=this.layout,i=this.sim.w,r=this.sim.h,a=[],o=[],c=new Set;let l=0;const h=this.antSize*.45;for(let f=0;f+3<t.length;f+=2){const u=t[f],d=t[f+1],g=t[f+2],S=t[f+3],m=Math.hypot(g-u,S-d),p=Math.max(1,Math.ceil(m/(n.cell*.25)));for(let M=0;M<=p;M++){const w=M/p,_=Math.floor((u+(g-u)*w-n.picX0)/n.cell),E=Math.floor((d+(S-d)*w-n.picZ0)/n.cell);if(_<0||E<0||_>=i||E>=r)continue;const y=E*i+_;y===e||c.has(y)||this.sim.cellColor(y)<0||(c.add(y),a.push(y),o.push(Math.max(0,l+m*w-h)))}l+=m}return{block:a,blockD:o}}route(t,e,n){const i=t[t.length-2],r=t[t.length-1],a=this.findPath(i,r,e,n,!0)??this.findPath(i,r,e,n,!1)??[];for(const o of a)t.push(o[0]+(Math.random()-.5)*.2,o[1]+(Math.random()-.5)*.2);t.push(e,n)}blocked(t,e,n,i,r){return this.crosses(this.rect,t,e,n,i)||r&&this.crosses(this.avoid,t,e,n,i)}findPath(t,e,n,i,r){if(!this.blocked(t,e,n,i,r))return[];const a=.3,o=[],c=M=>o.push([M.x0-a,M.z0-a],[M.x1+a,M.z0-a],[M.x1+a,M.z1+a],[M.x0-a,M.z1+a]);c(this.rect),r&&c(this.avoid);const l=o.length,h=(M,w)=>Math.hypot(M[0]-w[0],M[1]-w[1]),f=[t,e],u=[n,i],d=(M,w)=>!this.blocked(M[0],M[1],w[0],w[1],r),g=o.map(M=>d(f,M)),S=o.map(M=>d(M,u));let m=null,p=1/0;for(let M=0;M<l;M++)if(g[M]){if(S[M]){const w=h(f,o[M])+h(o[M],u);w<p&&(p=w,m=[o[M]])}for(let w=0;w<l;w++){if(w===M||!d(o[M],o[w]))continue;const _=h(f,o[M])+h(o[M],o[w]);if(!(_>=p)){if(S[w]){const E=_+h(o[w],u);E<p&&(p=E,m=[o[M],o[w]])}for(let E=0;E<l;E++){if(E===M||E===w||!S[E]||!d(o[w],o[E]))continue;const y=_+h(o[w],o[E])+h(o[E],u);y<p&&(p=y,m=[o[M],o[w],o[E]])}}}}return m}crosses(t,e,n,i,r){const o=t.x0+.05,c=t.x1-.05,l=t.z0+.05,h=t.z1-.05;let f=0,u=1;const d=i-e,g=r-n,S=[-d,d,-g,g],m=[e-o,c-e,n-l,h-n];for(let p=0;p<4;p++)if(S[p]===0){if(m[p]<0)return!1}else{const M=m[p]/S[p];if(S[p]<0){if(M>u)return!1;M>f&&(f=M)}else{if(M<f)return!1;M<u&&(u=M)}}return u-f>1e-4}measure(t){t.cum=[0];for(let e=2;e<t.pts.length;e+=2)t.cum.push(t.cum[t.cum.length-1]+Math.hypot(t.pts[e]-t.pts[e-2],t.pts[e+1]-t.pts[e-1]))}posAt(t,e){const n=t.cum;let i=1;for(;i<n.length-1&&n[i]<e;)i++;const r=n[i]-n[i-1],a=r>0?Math.min(1,Math.max(0,(e-n[i-1])/r)):1;t.x=t.pts[(i-1)*2]+(t.pts[i*2]-t.pts[(i-1)*2])*a,t.z=t.pts[(i-1)*2+1]+(t.pts[i*2+1]-t.pts[(i-1)*2+1])*a}setSim(t){this.sim=t}goHome(t){const e=this.layout,n=[],i=Math.max(0,t.pts.length/2-Math.max(2,t.back));for(let o=t.pts.length/2-1;o>=i;o--)n.push(t.pts[o*2],t.pts[o*2+1]);const r=e.nest.x+(Math.random()-.5)*.25,a=e.nest.z+(Math.random()-.5)*.15;this.route(n,r,a),t.pts=n,t.line=[],t.lineD=[],this.measure(t),t.dist=0,t.phase="home",t.startY=0}update(t,e){const n=3.3*this.speed,i=this.rect,r=[];for(const a of this.ants){let o=!1;if(a.phase==="out"||a.phase==="home"){const g=a.cum[a.cum.length-1];let S=g;for(let p=0;p<a.line.length;p++)if(this.board.isPresent(a.line[p])){S=Math.min(S,a.lineD[p]-.05);break}const m=a.dist;a.dist=Math.min(S,a.dist+n*t*(.9+a.seed*.2)),a.dist<m&&(a.dist=m),o=a.dist>m+1e-5,!o&&a.dist<g-1e-4?(a.wait+=t*this.speed,a.wait>1.4&&(a.line=[])):a.wait=0,this.posAt(a,a.dist),a.dist>=g-1e-4&&(a.phase==="out"?(a.phase="bite",a.timer=0,this.board.wobble(a.cell)):(a.phase="enter",a.timer=0))}else if(a.phase==="bite")a.timer+=t*this.speed,a.timer>.2&&(this.board.remove(a.cell),this.cb.onPick(a.cell),this.goHome(a));else if(a.phase==="enter"){if(a.timer+=t*this.speed,a.timer>.22){this.cb.onDeliver();continue}}else if(a.phase==="fade"&&(a.timer+=t,a.timer>.35))continue;const c=Math.min(a.cum.length-1,Math.max(1,a.cum.findIndex(g=>g>=a.dist))),l=a.pts[c*2]-a.pts[(c-1)*2],h=a.pts[c*2+1]-a.pts[(c-1)*2+1];if(a.phase!=="bite"){if(l*l+h*h>1e-6){let S=Math.atan2(l,h)-a.yaw;for(;S>Math.PI;)S-=Math.PI*2;for(;S<-Math.PI;)S+=Math.PI*2;a.yaw+=S*Math.min(1,t*14)}}o&&(a.legPhase+=t*n*9);let f=0;a.phase==="out"&&a.startY>0&&(f=Math.max(0,a.startY*(1-a.dist/.6))),a.x>i.x0&&a.x<i.x1&&a.z>i.z0&&a.z<i.z1&&!(a.x>i.ix0&&a.x<i.ix1&&a.z>i.iz0&&a.z<i.iz1)?f=Math.max(f,i.rim):a.x>i.ix0&&a.x<i.ix1&&a.z>i.iz0&&a.z<i.iz1&&(f=Math.max(f,.04)),a.y+=(f-a.y)*Math.min(1,t*18);let d=1;a.phase==="out"&&(a.scale=Math.min(1,a.scale+t*5)),a.phase==="enter"&&(d=Math.max(.01,1-a.timer/.22)),a.phase==="fade"&&(d=Math.max(.01,1-a.timer/.35)),a.scale=Math.min(a.scale,1),a.y-=a.phase==="enter"?a.timer*.8:0,r.push(a),a._s=d*a.scale}this.ants=r,this.writeInstances()}writeInstances(){const t=this.antSize;let e=0,n=0,i=0;const r=this.layout.cell;for(const a of this.ants){const o=a._s*t,c=Math.sin(a.legPhase*2)*.012*t,l=a.phase==="bite"?Math.sin(a.timer*40)*.25:0;this.e.set(l*.5,a.yaw,0),this.q.setFromEuler(this.e),this.v.set(a.x,a.y+c,a.z),this.s.set(o,o,o),this.m.compose(this.v,this.q,this.s),this.body.setMatrixAt(e,this.m),this.eyes.setMatrixAt(e,this.m),this.pupils.setMatrixAt(e,this.m),this.body.setColorAt(e,this.palette[a.color]);for(let h=0;h<_c;h++){const f=h<3?-1:1,u=h%3,d=(u+(f>0?1:0))%2*Math.PI,g=Math.sin(a.legPhase+d)*.38,S=Math.max(0,Math.cos(a.legPhase+d))*.22;this.e.set(0,f<0?Math.PI:0,0);const m=(f<0?Math.PI:0)-f*(d2[u]+g);this.e.set(0,m,f*0+S),this.q.setFromEuler(this.e),this.v.set(f*.08,.22,f2[u]),this.m2.compose(this.v,this.q,this.one),this.m2.premultiply(this.m),this.legs.setMatrixAt(n,this.m2),this.legs.setColorAt(n,this.legColors[a.color]),n++}if(a.phase==="home"||a.phase==="enter"){const h=Math.min(r*.8,o*.55),f=.62*o;this.v.set(a.x+Math.sin(a.yaw)*f,a.y+.34*o+h*.62/2,a.z+Math.cos(a.yaw)*f),this.e.set(0,a.yaw,0),this.q.setFromEuler(this.e);const u=a.phase==="enter"?Math.max(.01,1-a.timer/.22):1;this.s.set(h*u,h*u,h*u),this.m.compose(this.v,this.q,this.s),this.cubes.setMatrixAt(i,this.m),this.cubes.setColorAt(i,this.board.cubeColor(a.cell)),i++}e++}this.body.count=this.eyes.count=this.pupils.count=e,this.legs.count=n,this.cubes.count=i;for(const a of[this.body,this.eyes,this.pupils,this.legs,this.cubes])a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)}dispose(){for(const t of[this.body,this.eyes,this.pupils,this.legs,this.cubes])t.geometry.dispose(),t.material.dispose(),t.dispose()}}class m2{group=new Ve;mound;hole;crumbs;pulse=0;constructor(t="#a8764c"){const e=[];for(let l=0;l<=16;l++){const h=l/16,f=.95*(1-h*.62),u=Math.sin(h*Math.PI*.5)*.34;e.push(new at(f,u))}e.push(new at(.001,.34));const i=new Zo(e,40),r=i.attributes.position;for(let l=0;l<r.count;l++){const h=r.getX(l),f=r.getZ(l),u=Math.atan2(f,h),d=1+Math.sin(u*5)*.04+Math.sin(u*11+1.3)*.025;r.setX(l,h*d),r.setZ(l,f*d*.8)}i.computeVertexNormals(),this.mound=new ae(i,new Te({color:t,roughness:.95,side:je})),this.mound.castShadow=!0,this.mound.receiveShadow=!0,this.group.add(this.mound);const a=kr("rgba(20,10,5,1)","rgba(40,22,10,0)",128);this.hole=new ae(new Vo(.44,32),new Zi({map:a,transparent:!0,depthWrite:!1})),this.hole.rotation.x=-Math.PI/2,this.hole.scale.set(1,.72,1),this.hole.position.y=.345,this.group.add(this.hole);const o=26;this.crumbs=new xn(new Yo(.06,0),new Te({color:"#8d603c",roughness:1}),o),this.crumbs.castShadow=!0;const c=new ne;for(let l=0;l<o;l++){const h=l/o*Math.PI*2+Math.random()*.3,f=.95+Math.random()*.35,u=.6+Math.random()*.9;c.compose(new P(Math.cos(h)*f,.03,Math.sin(h)*f*.8),new Xe().setFromEuler(new tn(Math.random()*3,Math.random()*3,0)),new P(u,u*.7,u)),this.crumbs.setMatrixAt(l,c)}this.group.add(this.crumbs)}setLayout(t){this.group.position.set(t.nest.x,0,t.nest.z);const e=t.mode==="portrait"?.9:1.05;this.group.scale.setScalar(e)}gulp(){this.pulse=Math.min(1,this.pulse+.25)}update(t){this.pulse>0&&(this.pulse=Math.max(0,this.pulse-t*3));const e=this.pulse*.05;this.mound.scale.set(1+e,1-e,1+e)}dispose(){this.mound.geometry.dispose(),this.mound.material.dispose(),this.hole.geometry.dispose();const t=this.hole.material;t.map?.dispose(),t.dispose(),this.crumbs.geometry.dispose(),this.crumbs.material.dispose()}}const Sc=1400;class g2{group=new Ve;parts=[];meshes;m=new ne;q=new Xe;camQ=new Xe;v=new P;s=new P;z=new P(0,0,1);tmpQ=new Xe;constructor(){const t=new On(1,1),e=(n,i)=>{const r=new Zi({map:n,transparent:!0,depthWrite:!1,blending:i,side:je}),a=new xn(t,r,Sc);return a.frustumCulled=!1,a.count=0,a.renderOrder=10,a.setColorAt(0,new Nt(1,1,1)),this.group.add(a),a};this.meshes=[e(Ih(),Ms),e(null,Qn),e(kr("rgba(255,255,255,0.9)","rgba(255,255,255,0)"),Qn)]}setCamera(t){this.camQ.copy(t.quaternion)}sparkle(t,e,n,i,r=10,a=.6){const o=i instanceof Nt?i:new Nt(i);for(let c=0;c<r;c++){const l=Math.random()*Math.PI*2,h=a*(.5+Math.random());this.add({x:t,y:e,z:n,vx:Math.cos(l)*h,vy:1+Math.random()*1.5,vz:Math.sin(l)*h,life:0,max:.5+Math.random()*.4,size:.25+Math.random()*.25,color:o.clone().lerp(new Nt(1,1,1),.5),spin:0,rot:0,gravity:2.5,kind:0})}}puff(t,e,n,i,r=6,a=.3){const o=i instanceof Nt?i:new Nt(i);for(let c=0;c<r;c++){const l=Math.random()*Math.PI*2;this.add({x:t,y:e,z:n,vx:Math.cos(l)*.8,vy:.4+Math.random()*.5,vz:Math.sin(l)*.8,life:0,max:.35+Math.random()*.25,size:a*(.6+Math.random()*.6),color:o.clone(),spin:0,rot:0,gravity:0,kind:2})}}confetti(t,e,n,i=160,r=5){const a=["#ff5a7a","#ffd23f","#3ec9ff","#7cf07c","#b58cff","#ff9f43"];for(let o=0;o<i;o++){const c=Math.random()*Math.PI*2,l=r*(.3+Math.random()*.7);this.add({x:t+(Math.random()-.5),y:e,z:n+(Math.random()-.5),vx:Math.cos(c)*l,vy:5+Math.random()*6,vz:Math.sin(c)*l*.7,life:0,max:2.2+Math.random()*1.2,size:.16+Math.random()*.12,color:new Nt(a[o%a.length]),spin:(Math.random()-.5)*16,rot:Math.random()*6,gravity:7,kind:1})}}shards(t,e,n,i=14){for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2;this.add({x:t,y:e,z:n,vx:Math.cos(a)*2,vy:2+Math.random()*2,vz:Math.sin(a)*2,life:0,max:.6+Math.random()*.3,size:.12+Math.random()*.12,color:new Nt("#dff6ff"),spin:(Math.random()-.5)*20,rot:0,gravity:9,kind:1})}}add(t){this.parts.length>=Sc&&this.parts.shift(),this.parts.push(t)}get busy(){return this.parts.length>0}update(t){const e=[0,0,0],n=[];for(const i of this.parts){if(i.life+=t,i.life>=i.max)continue;i.vy-=i.gravity*t,i.kind===1&&(i.vx*=1-t*.8,i.vz*=1-t*.8,i.vy<-2.2&&(i.vy=-2.2)),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.y<.02&&i.kind!==2&&(i.y=.02,i.vy=0,i.vx*=.5,i.vz*=.5),i.rot+=i.spin*t,n.push(i);const r=i.life/i.max,a=this.meshes[i.kind],o=e[i.kind]++;let c=i.size;i.kind===0?c*=Math.sin(Math.min(1,r*1.3)*Math.PI):i.kind===2?c*=.6+r*1.2:c*=r>.8?(1-r)/.2:1,this.v.set(i.x,i.y,i.z),this.q.copy(this.camQ),i.kind===1&&this.q.multiply(this.tmpQ.setFromAxisAngle(this.z,i.rot)),this.s.set(c,i.kind===1?c*.6:c,c),this.m.compose(this.v,this.q,this.s),a.setMatrixAt(o,this.m);const l=i.color;i.kind===2?a.setColorAt(o,this.tmpColor.copy(l).multiplyScalar(1-r*.5)):a.setColorAt(o,l)}this.parts=n,this.meshes.forEach((i,r)=>{i.count=e[r],i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0);const a=i.material;r===2&&(a.opacity=.75)})}tmpColor=new Nt;dispose(){for(const t of this.meshes){t.geometry.dispose();const e=t.material;e.map?.dispose(),e.dispose(),t.dispose()}}}class Uh{a;b;c;d;constructor(t){this.a=2654435769,this.b=608135816,this.c=3084996962,this.d=t>>>0;for(let e=0;e<15;e++)this.next()}next(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;let t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296}int(t,e){return t+Math.floor(this.next()*(e-t+1))}range(t,e){return t+this.next()*(e-t)}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t){let e=0;for(const i of t)e+=i;if(e<=0)return-1;let n=this.next()*e;for(let i=0;i<t.length;i++)if(n-=t[i],n<0)return i;return t.length-1}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this.next()*(e+1)),i=t[e];t[e]=t[n],t[n]=i}return t}}function Ko(s,t,e,n,i){for(const r of[0,-s,s])if(!(r!==0&&(r<0?t<s-n:t>n)))for(const a of[0,-s,s])a!==0&&(a<0?e<s-n:e>n)||i(t+r,e+a)}function Ca(s,t,e,n,i,r,a,o){for(let c=0;c<i;c++){const l=t.next()*e,h=t.next()*e,f=t.range(r,a),u=t.pick(n);Ko(e,l,h,f,(d,g)=>{const S=s.createRadialGradient(d,g,0,d,g,f);S.addColorStop(0,on(u,o)),S.addColorStop(1,on(u,0)),s.fillStyle=S,s.fillRect(d-f,g-f,f*2,f*2)})}}function on(s,t){const e=parseInt(s.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function os(s,t,e,n,i,r,a,o=-Math.PI/2,c=1.1){s.lineCap="round";for(let l=0;l<i;l++){const h=t.next()*e,f=t.next()*e,u=o+(t.next()-.5)*c*2,d=t.range(r[0],r[1]),g=(t.next()-.5)*d*.6;s.strokeStyle=t.pick(n),s.globalAlpha=t.range(.55,.95),s.lineWidth=t.range(a[0],a[1]),Ko(e,h,f,d+2,(S,m)=>{s.beginPath(),s.moveTo(S,m);const p=S+Math.cos(u)*d,M=m+Math.sin(u)*d;s.quadraticCurveTo((S+p)/2+g,(m+M)/2,p,M),s.stroke()})}s.globalAlpha=1}function Zn(s,t,e=4,n=2,i="rgba(0,0,0,0.22)"){s.save(),s.shadowColor=i,s.shadowBlur=e,s.shadowOffsetY=n,t(),s.restore()}function bc(s,t,e,n,i,r,a=5,o=0){Zn(s,()=>{s.fillStyle=i;for(let c=0;c<a;c++){const l=o+c/a*Math.PI*2;s.beginPath(),s.ellipse(t+Math.cos(l)*n*.9,e+Math.sin(l)*n*.9,n*.75,n*.55,l,0,Math.PI*2),s.fill()}}),s.fillStyle=r,s.beginPath(),s.arc(t,e,n*.5,0,Math.PI*2),s.fill()}function v2(s,t,e,n,i,r){s.fillStyle=i;for(let a=0;a<3;a++){const o=r+a/3*Math.PI*2;s.beginPath(),s.arc(t+Math.cos(o)*n,e+Math.sin(o)*n,n,0,Math.PI*2),s.fill()}}function Ra(s,t,e,n,i,r){Zn(s,()=>{s.fillStyle=i,s.beginPath(),s.ellipse(t,e,n,n*r.range(.6,.9),r.next()*Math.PI,0,Math.PI*2),s.fill()},3,2),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.ellipse(t-n*.3,e-n*.3,n*.35,n*.2,-.6,0,Math.PI*2),s.fill()}function x2(s,t,e,n,i,r){s.save(),s.translate(t,e),s.rotate(r),Zn(s,()=>{s.fillStyle=i,s.beginPath(),s.moveTo(-n/2,0),s.quadraticCurveTo(0,-n*.42,n/2,0),s.quadraticCurveTo(0,n*.42,-n/2,0),s.fill()},5,3),s.strokeStyle="rgba(0,0,0,0.18)",s.lineWidth=Math.max(1,n*.04),s.beginPath(),s.moveTo(-n/2,0),s.lineTo(n/2,0),s.stroke(),s.restore()}function Pa(s,t,e,n,i){s.fillStyle=i,s.beginPath(),s.moveTo(t,e-n),s.quadraticCurveTo(t,e,t+n,e),s.quadraticCurveTo(t,e,t,e+n),s.quadraticCurveTo(t,e,t-n,e),s.quadraticCurveTo(t,e,t,e-n),s.fill()}function _2(s,t,e,n,i){const r=s.createRadialGradient(t,e,0,t,e,n*4);r.addColorStop(0,on(i,.9)),r.addColorStop(.25,on(i,.35)),r.addColorStop(1,on(i,0)),s.fillStyle=r,s.fillRect(t-n*4,e-n*4,n*8,n*8),s.fillStyle="#ffffff",s.beginPath(),s.arc(t,e,n*.6,0,Math.PI*2),s.fill()}function Ee(s,t,e,n,i){for(let r=0;r<e;r++){const a=t.next()*s,o=t.next()*s;Ko(s,a,o,n,i)}}function Nh(s,t=1024,e=7){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),r=new Uh(e),a=s.ground,o=t/1024;switch(i.fillStyle=a.base,i.fillRect(0,0,t,t),Ca(i,r,t,a.tints,70,90*o,260*o,.45),Ca(i,r,t,a.tints,160,25*o,70*o,.35),a.kind){case"grass":{os(i,r,t,a.detail,14e3,[7*o,15*o],[1.4*o,2.8*o]),Ee(t,r,70,20*o,(c,l)=>v2(i,c,l,r.range(4,6.5)*o,r.pick(["#6fb34a","#5ea43f","#7fc257"]),r.next()*6)),os(i,r,t,a.detail,3e3,[6*o,12*o],[1.2*o,2.2*o]),Ee(t,r,34,18*o,(c,l)=>bc(i,c,l,r.range(4.5,7)*o,r.pick(a.accents),"#ffd23f",5,r.next()*6)),Ee(t,r,14,16*o,(c,l)=>Ra(i,c,l,r.range(5,10)*o,r.pick(["#bfb6a8","#a89f90","#d2cabc"]),r));break}case"forest":{os(i,r,t,a.detail,9e3,[5*o,11*o],[1.2*o,2.4*o],0,Math.PI),Ee(t,r,90,30*o,(c,l)=>x2(i,c,l,r.range(18,34)*o,r.pick(a.accents),r.next()*6)),i.strokeStyle="#6b4a2b",i.lineWidth=1.2*o,Ee(t,r,260,14*o,(c,l)=>{const h=r.next()*6;i.beginPath(),i.moveTo(c,l),i.lineTo(c+Math.cos(h)*12*o,l+Math.sin(h)*12*o),i.stroke()}),Ee(t,r,12,16*o,(c,l)=>{const h=r.range(7,11)*o;Zn(i,()=>{i.fillStyle="#d64933",i.beginPath(),i.arc(c,l,h,0,Math.PI*2),i.fill()}),i.fillStyle="#fff4e6";for(let f=0;f<4;f++)i.beginPath(),i.arc(c+r.range(-h*.5,h*.5),l+r.range(-h*.5,h*.5),h*.18,0,Math.PI*2),i.fill()}),Ee(t,r,18,14*o,(c,l)=>Ra(i,c,l,r.range(5,9)*o,r.pick(["#8b8f7a","#9aa08a"]),r));break}case"sand":{i.strokeStyle=on("#fff6dc",.5),i.lineWidth=3*o;for(let c=0;c<28;c++){const l=r.next()*t,h=r.range(6,14)*o,f=r.next()*6;i.beginPath();for(let u=-10;u<=t+10;u+=8){const d=l+Math.sin(u/(60*o)+f)*h;u===-10?i.moveTo(u,d):i.lineTo(u,d)}i.stroke()}Ee(t,r,9e3,2,(c,l)=>{i.fillStyle=r.pick(a.detail),i.globalAlpha=r.range(.3,.8),i.fillRect(c,l,1.6*o,1.6*o)}),i.globalAlpha=1,Ee(t,r,16,20*o,(c,l)=>{const h=r.range(8,13)*o,f=r.next()*6;i.save(),i.translate(c,l),i.rotate(f),Zn(i,()=>{i.fillStyle=r.pick(a.accents),i.beginPath(),i.moveTo(0,h*.6),i.arc(0,0,h,Math.PI*1.1,Math.PI*1.9),i.closePath(),i.fill()}),i.strokeStyle="rgba(160,110,80,0.4)",i.lineWidth=1.2*o;for(let u=0;u<5;u++){const d=Math.PI*(1.15+u*.17);i.beginPath(),i.moveTo(0,h*.55),i.lineTo(Math.cos(d)*h*.95,Math.sin(d)*h*.95),i.stroke()}i.restore()}),Ee(t,r,6,20*o,(c,l)=>{const h=r.range(10,15)*o;i.save(),i.translate(c,l),i.rotate(r.next()*6),Zn(i,()=>{i.fillStyle="#ff8c69",i.beginPath();for(let f=0;f<10;f++){const u=f/10*Math.PI*2,d=f%2===0?h:h*.42;i.lineTo(Math.cos(u)*d,Math.sin(u)*d)}i.closePath(),i.fill()}),i.restore()});break}case"frosting":{i.strokeStyle=on("#ffffff",.35),i.lineWidth=10*o,i.lineCap="round";for(let c=0;c<40;c++){const l=r.next()*t,h=r.next()*t,f=r.range(30,70)*o;i.beginPath(),i.arc(l,h,f,r.next()*6,r.next()*6+2.5),i.stroke()}Ee(t,r,700,8*o,(c,l)=>{i.save(),i.translate(c,l),i.rotate(r.next()*Math.PI),i.fillStyle=r.pick(a.accents);const h=r.range(7,11)*o,f=2.6*o;i.beginPath(),i.roundRect(-h/2,-f/2,h,f,f/2),i.fill(),i.restore()}),Ee(t,r,60,8*o,(c,l)=>{const h=r.range(3,5)*o;Zn(i,()=>{i.fillStyle="#ffffff",i.beginPath(),i.arc(c,l,h,0,Math.PI*2),i.fill()},3,1)});break}case"night":{os(i,r,t,a.detail,9e3,[6*o,13*o],[1.3*o,2.4*o]),Ee(t,r,50,16*o,(c,l)=>_2(i,c,l,r.range(1.5,3)*o,r.pick(a.accents))),Ee(t,r,30,10*o,(c,l)=>Pa(i,c,l,r.range(3,6)*o,on("#fff7c2",.7))),Ee(t,r,10,14*o,(c,l)=>Ra(i,c,l,r.range(5,9)*o,"#46507a",r));break}case"snow":{Ca(i,r,t,["#c9dcef","#ffffff"],50,30*o,90*o,.5),Ee(t,r,160,8*o,(c,l)=>Pa(i,c,l,r.range(2,4.5)*o,on("#ffffff",.95))),Ee(t,r,10,12*o,(c,l)=>{i.fillStyle=on("#9fbad3",.35);for(let h=0;h<4;h++)i.beginPath(),i.ellipse(c+h*14*o,l+h%2*9*o,3.5*o,5*o,.3,0,Math.PI*2),i.fill()});break}case"magic":{os(i,r,t,a.detail,11e3,[6*o,13*o],[1.3*o,2.5*o]),Ee(t,r,40,18*o,(c,l)=>bc(i,c,l,r.range(4,6)*o,r.pick(a.accents),"#ffffff",6,r.next()*6)),Ee(t,r,26,16*o,(c,l)=>{const h=r.range(5,9)*o;Zn(i,()=>{i.fillStyle=r.pick(["#bdf4ff","#ffc6ff","#fff3b0"]),i.beginPath();for(let f=0;f<6;f++){const u=f/6*Math.PI*2;i.lineTo(c+Math.cos(u)*h,l+Math.sin(u)*h*1.3)}i.closePath(),i.fill()})}),Ee(t,r,60,10*o,(c,l)=>Pa(i,c,l,r.range(2,5)*o,on("#ffffff",.85)));break}}return n}const yc=11,wc=new Map;class M2{group=new Ve;plane;mat;dapples=[];dappleMat;center=new at;constructor(){this.mat=new Te({roughness:1,metalness:0,envMapIntensity:.25}),this.plane=new ae(new On(160,160),this.mat),this.plane.rotation.x=-Math.PI/2,this.plane.receiveShadow=!0,this.group.add(this.plane),this.dappleMat=new Zi({map:kr("rgba(255,250,220,1)","rgba(255,250,220,0)",128),transparent:!0,opacity:.16,depthWrite:!1,blending:Ms});for(let t=0;t<7;t++){const e=new ae(new On(1,1),this.dappleMat);e.rotation.x=-Math.PI/2,e.position.y=.01,e.userData={ph:Math.random()*10,r:3+Math.random()*4,sp:.05+Math.random()*.07,ox:(Math.random()-.5)*22,oz:(Math.random()-.5)*22},this.dapples.push(e),this.group.add(e)}}setTheme(t){let e=wc.get(t.id);e||(e=new gi(Nh(t,1024,t.id.length*31+5)),e.colorSpace=be,e.wrapS=e.wrapT=xr,e.anisotropy=8,e.repeat.set(160/yc,160/yc),wc.set(t.id,e)),this.mat.map=e,this.mat.needsUpdate=!0;const n=t.ground.kind==="night";this.dappleMat.opacity=n?.06:t.ground.kind==="snow"?.1:.16}setLayout(t){this.center.set((t.bounds.minX+t.bounds.maxX)/2,(t.bounds.minZ+t.bounds.maxZ)/2)}update(t,e){for(const n of this.dapples){const i=n.userData,r=e*i.sp+i.ph;n.position.x=this.center.x+i.ox+Math.sin(r)*2.5,n.position.z=this.center.y+i.oz+Math.cos(r*.8)*2;const a=i.r*(1+Math.sin(r*2.3)*.12);n.scale.set(a,a,1)}}dispose(){this.plane.geometry.dispose(),this.mat.dispose(),this.dappleMat.map?.dispose(),this.dappleMat.dispose();for(const t of this.dapples)t.geometry.dispose()}}const Ec={grass:{count:46,tex:"glow",colors:["#fffbe6","#fff4b8","#ffffff"],size:[.08,.16],fall:[-.06,.06],additive:!0,opacity:.9},forest:{count:26,tex:"leaf",colors:["#e0703a","#f2b84b","#c9502e","#a7c957","#d98c2b"],size:[.28,.42],fall:[-.45,-.25],additive:!1,opacity:1},sand:{count:34,tex:"sparkle",colors:["#ffffff","#fff6d8","#d6f6ff"],size:[.14,.26],fall:[-.02,.04],additive:!0,opacity:.85,blink:!0},frosting:{count:40,tex:"sprinkle",colors:["#ff5d8f","#ffd166","#06d6a0","#118ab2","#9b5de5","#ffffff"],size:[.16,.22],fall:[-.55,-.3],additive:!1,opacity:1},night:{count:44,tex:"glow",colors:["#fff7a8","#d9ff8a","#a8fff0"],size:[.14,.24],fall:[-.05,.05],additive:!0,opacity:1,blink:!0},snow:{count:70,tex:"flake",colors:["#ffffff","#f2f9ff"],size:[.1,.2],fall:[-.5,-.28],additive:!1,opacity:.95},magic:{count:46,tex:"sparkle",colors:["#fff3b0","#ffc6ff","#bdf4ff","#ffffff"],size:[.14,.28],fall:[.05,.18],additive:!0,opacity:.95,blink:!0}};function La(s,t=64){const e=document.createElement("canvas");e.width=e.height=t,s(e.getContext("2d"),t);const n=new gi(e);return n.colorSpace=be,n}const S2={glow:()=>kr("rgba(255,255,255,1)","rgba(255,255,255,0)",64),sparkle:()=>Ih(64),leaf:()=>La((s,t)=>{s.fillStyle="#ffffff",s.beginPath(),s.moveTo(t*.08,t*.5),s.quadraticCurveTo(t*.5,t*.02,t*.92,t*.5),s.quadraticCurveTo(t*.5,t*.98,t*.08,t*.5),s.fill(),s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=t*.04,s.beginPath(),s.moveTo(t*.1,t*.5),s.lineTo(t*.9,t*.5),s.stroke()}),sprinkle:()=>La((s,t)=>{s.fillStyle="#ffffff",s.beginPath(),s.roundRect(t*.1,t*.36,t*.8,t*.28,t*.14),s.fill()}),flake:()=>La((s,t)=>{const e=t/2,n=s.createRadialGradient(e,e,0,e,e,e);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.9)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.beginPath(),s.arc(e,e,e,0,Math.PI*2),s.fill()})};class b2{group=new Ve;mesh=null;motes=[];style=Ec.grass;box={x0:-10,x1:10,z0:-10,z1:10};m=new ne;q=new Xe;qz=new Xe;v=new P;s=new P;zAxis=new P(0,0,1);tmpC=new Nt;e=new tn;setTheme(t){this.dispose(),this.style=Ec[t.ground.kind];const e=this.style,n=new Zi({map:S2[e.tex](),transparent:!0,depthWrite:!1,opacity:e.opacity,side:je,blending:e.additive?Ms:Qn});this.mesh=new xn(new On(1,1),n,e.count),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12,this.group.add(this.mesh),this.motes=[];for(let i=0;i<e.count;i++)this.motes.push(this.spawn(!0))}setLayout(t){const e=t.bounds;this.box={x0:e.minX-3,x1:e.maxX+3,z0:e.minZ-3,z1:e.maxZ+3}}spawn(t){const e=this.style,n=this.box,i=e.fall[1]<-.1,r=e.fall[0]>0;return{x:n.x0+Math.random()*(n.x1-n.x0),y:t?.3+Math.random()*5:i?5+Math.random()*1.5:r?.2:.3+Math.random()*5,z:n.z0+Math.random()*(n.z1-n.z0),vx:(Math.random()-.5)*.3,vy:e.fall[0]+Math.random()*(e.fall[1]-e.fall[0]),vz:(Math.random()-.5)*.2,phase:Math.random()*10,rot:Math.random()*Math.PI*2,spin:(Math.random()-.5)*3,size:e.size[0]+Math.random()*(e.size[1]-e.size[0]),rest:0,color:new Nt(e.colors[Math.floor(Math.random()*e.colors.length)])}}update(t,e,n){const i=this.mesh;if(!i)return;const r=this.style,a=this.box,o=Math.sin(e*.3)*.25;for(let c=0;c<this.motes.length;c++){let l=this.motes[c];l.phase+=t,l.rest>0?(l.rest-=t,l.rest<=0&&(l=this.motes[c]=this.spawn(!1))):(l.x+=(l.vx+o+Math.sin(l.phase*1.3)*.25)*t,l.z+=(l.vz+Math.cos(l.phase*.9)*.15)*t,l.y+=(l.vy+Math.sin(l.phase*2.1)*.08)*t,l.rot+=l.spin*t,l.y<.04&&(l.y=.04,l.rest=3+Math.random()*3),(l.y>7||l.x<a.x0-1||l.x>a.x1+1||l.z<a.z0-1||l.z>a.z1+1)&&(l=this.motes[c]=this.spawn(!1)));let h=r.blink?.55+.45*Math.sin(l.phase*3+c):1;l.rest>0&&(h*=Math.min(1,l.rest/1.5)),this.v.set(l.x,l.y,l.z),l.rest>0&&(r.tex==="leaf"||r.tex==="sprinkle")?this.q.setFromEuler(this.e.set(-Math.PI/2,0,l.rot)):this.q.copy(n.quaternion).multiply(this.qz.setFromAxisAngle(this.zAxis,l.rot));const f=l.size*(r.tex==="glow"||r.tex==="sparkle"?h:1);this.s.set(f,f,f),this.m.compose(this.v,this.q,this.s),i.setMatrixAt(c,this.m),i.setColorAt(c,this.tmpC.copy(l.color).multiplyScalar(r.additive?h:1))}i.count=this.motes.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}dispose(){if(!this.mesh)return;this.group.remove(this.mesh),this.mesh.geometry.dispose();const t=this.mesh.material;t.map?.dispose(),t.dispose(),this.mesh.dispose(),this.mesh=null}}const rr=typeof window<"u"&&(window.matchMedia?.("(pointer: coarse)").matches||(navigator.hardwareConcurrency??8)<=4);class y2{renderer;scene=new ih;camera=new Or(-1,1,1,-1,.1,200);board;queue;ants;nest;fx=new g2;ambient=new b2;ground;layout;sim;level;sun;hemi;raycaster=new Zf;ndc=new at;cb;width=1;height=1;insets={top:70,bottom:110,left:0,right:0};tmp=new P;levelGroup=new Ve;zoomPunch=0;constructor(t,e){this.cb=e,this.renderer=new $m({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,rr?1.6:2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=gs,this.renderer.toneMapping=Ro,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=be,t.appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("gl");const n=new yo(this.renderer);this.scene.environment=n.fromScene(new Ym,.04).texture,this.scene.environmentIntensity=.42,n.dispose(),this.hemi=new Vf("#fffaf0","#7a8f6a",.9),this.scene.add(this.hemi),this.sun=new qf("#fff4e0",2.9),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(rr?1024:2048,rr?1024:2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.02,this.sun.shadow.radius=4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.ground=new M2,this.scene.add(this.ground.group),this.scene.add(this.levelGroup),this.scene.add(this.fx.group),this.scene.add(this.ambient.group)}load(t,e,n){this.unload(),this.level=t,this.sim=e;const i=t.picture.palette;this.board=new n2(e,i,n.frame),this.board.cubes.castShadow=!rr,this.queue=new c2(e,i),this.nest=new m2(n.soil),this.ants=new p2(i,this.board,e,this.cb),this.levelGroup.add(this.board.group,this.queue.group,this.nest.group,this.ants.group),this.hemi.color.set(n.sky),this.hemi.groundColor.set(n.bounce),this.scene.background=new Nt(n.bg),this.ground.setTheme(n),this.ambient.setTheme(n),this.relayout(!0)}setSim(t){this.sim=t,this.queue.setSim(t),this.ants.setSim(t)}unload(){this.board&&(this.levelGroup.clear(),this.board.dispose(),this.queue.dispose(),this.ants.dispose(),this.nest.dispose())}resize(t,e){this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.sim&&this.relayout(!1)}relayout(t){const e=Math.max(100,this.width-this.insets.left-this.insets.right),n=Math.max(100,this.height-this.insets.top-this.insets.bottom),i=Zm({aspect:e/n,w:this.sim.w,h:this.sim.h,slots:this.sim.slots.length,columns:this.sim.columns.length}),r=t||!this.layout||i.mode!==this.layout.mode||i.slot.length!==this.layout.slot.length;this.layout=i,r&&(this.board.setLayout(i),this.queue.setLayout(i),this.nest.setLayout(i),this.ants.setLayout(i)),this.fitCamera(e,n),this.ground.setLayout(i),this.ambient.setLayout(i)}fitCamera(t,e){const n=this.layout,i=n.bounds,r=Math.cos(n.tilt),a=Math.sin(n.tilt),o=i.maxX-i.minX,c=(i.maxZ-i.minZ)*r+.8*a,l=Math.max(o/t,c/e)*1.02,h=this.width*l/2,f=this.height*l/2,u=(i.minX+i.maxX)/2,d=(i.minZ+i.maxZ)/2,g=60;this.camera.position.set(u,g*r,d+g*a),this.camera.up.set(0,1,0),this.camera.lookAt(u,0,d);const S=(this.insets.bottom-this.insets.top)/2*l,m=(this.insets.right-this.insets.left)/2*l;this.camera.left=-h+m,this.camera.right=h+m,this.camera.top=f+S,this.camera.bottom=-f+S,this.camera.near=1,this.camera.far=g*2+20,this.camera.zoom=1,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.fx.setCamera(this.camera);const p=Math.max(o,i.maxZ-i.minZ)*.75+2;this.sun.position.set(u-8,22,d-10),this.sun.target.position.set(u,0,d);const M=this.sun.shadow.camera;M.left=-p,M.right=p,M.top=p,M.bottom=-p,M.near=1,M.far=60,M.updateProjectionMatrix()}pickBox(t,e){return this.ndc.set(t/this.width*2-1,-(e/this.height)*2+1),this.queue.group.updateMatrixWorld(),this.raycaster.setFromCamera(this.ndc,this.camera),this.queue.pick(this.raycaster)}toScreen(t){const e=this.tmp.copy(t).project(this.camera);return{x:(e.x+1)/2*this.width,y:(1-e.y)/2*this.height}}apply(t){let e=!1;for(const n of t)switch(n.t){case"ant":{const i=this.queue.boxTop(n.box,this.tmp);this.ants.spawn(i.clone(),n.cell,n.color);break}case"take":case"boxDone":case"reveal":case"thaw":e=!0;break}e?this.queue.syncFromSim(!0):this.queue.refreshLabels()}punch(){this.zoomPunch=1}update(t,e){this.board&&(this.board.update(t),this.queue.update(t,e),this.ants.update(t,e),this.nest.update(t),this.fx.update(t),this.ground.update(t,e),this.ambient.update(t,e,this.camera),this.zoomPunch>0&&(this.zoomPunch=Math.max(0,this.zoomPunch-t*2.5),this.camera.zoom=1+Math.sin(this.zoomPunch*Math.PI)*.015,this.camera.updateProjectionMatrix()),this.renderer.render(this.scene,this.camera))}isIdle(){return this.ants.count===0&&this.queue.isSettled()}dispose(){this.unload(),this.fx.dispose(),this.ambient.dispose(),this.ground.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}function w2(s,t,e,n){let i=0;for(const r of s.groupOf(t)){const a=s.boxColor(r),o=e[a]-(n?n[a]:0),c=s.boxCount(r);o>=c?i+=3e3+c:o>0?i+=1e3+o*8-c:i+=100-c-(n&&n[a]>0?50:0)}return i}function E2(s,t){const e=t??new Int32Array(s.s.colors);e.fill(0);for(const n of s.slots)n&&(e[s.boxColor(n.box)]+=n.left);return e}function Ia(s,t=6e4){const e=new Set,n=[],i=new Int32Array(s.s.colors),r=new Int32Array(s.s.colors);let a=0,o=!1;const c=f=>{if(f.settle(),f.status==="won")return!0;if(f.status==="stuck")return!1;const u=f.key();if(e.has(u))return!1;if(++a>t)return o=!0,!1;const d=f.legalMoves();f.exposedCounts(i),E2(f,r);const g=d.map(S=>[S,w2(f,S,i,r)]);g.sort((S,m)=>m[1]-S[1]);for(const[S]of g){const m=f.clone();if(m.take(S),n.push(S),c(m))return!0;if(n.pop(),o)return!1}return e.add(u),!1},l=s.clone();l.status==="stuck"&&l.unstick();const h=c(l);return{status:h?"solved":o?"unknown":"unsolvable",moves:h?n.slice():[],nodes:a}}const Me=s=>440*Math.pow(2,(s-69)/12),T2={antOut:.07,pick:.05,deliver:.06,tap:.03,pop:.04},ar=[{bpm:92,root:60,chords:[[0,4,7],[7,11,14],[9,12,16],[5,9,12]],scale:[0,2,4,7,9],lead:"marimba",pad:"triangle",padCut:1400,density:.62,sparkle:.1,swing:.06},{bpm:80,root:57,chords:[[0,3,7],[-4,0,3],[3,7,10],[-2,2,5]],scale:[0,3,5,7,10],lead:"kalimba",pad:"sawtooth",padCut:900,density:.52,sparkle:.05,swing:.08},{bpm:84,root:62,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"flute",pad:"triangle",padCut:1200,density:.5,sparkle:.08,swing:.1},{bpm:104,root:65,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"pluck",pad:"square",padCut:1e3,density:.72,sparkle:.12,swing:.12},{bpm:72,root:64,chords:[[0,3,7,10],[-4,0,3,7],[3,7,10,14],[-2,2,5,9]],scale:[0,2,3,7,10],lead:"bell",pad:"sawtooth",padCut:700,density:.42,sparkle:.25,swing:0},{bpm:76,root:67,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"bell",pad:"triangle",padCut:1100,density:.5,sparkle:.3,swing:.04},{bpm:84,root:62,chords:[[0,3,7],[-2,2,5],[-5,-2,2],[-7,-3,0]],scale:[0,2,3,5,7,9],lead:"harp",pad:"sawtooth",padCut:1e3,density:.66,sparkle:.2,swing:.05}];class A2{s;constructor(t){this.s=t>>>0||1}next(){return this.s^=this.s<<13,this.s^=this.s>>>17,this.s^=this.s<<5,(this.s>>>0)/4294967296}}class C2{constructor(t,e,n){this.eng=t,this.th=e;const i=t.ctx;this.out=i.createGain(),this.out.gain.value=0,this.out.gain.linearRampToValueAtTime(1,i.currentTime+2.5),this.out.connect(t.musicBus),this.rng=new A2(n),this.nextBar=i.currentTime+.15,this.timer=window.setInterval(()=>this.schedule(),60),this.schedule()}eng;th;out;timer=0;nextBar;bar=0;lastNote=0;rng;stopped=!1;get barLen(){return 60/this.th.bpm*4}schedule(){const t=this.eng.ctx;if(!(!t||this.stopped))for(;this.nextBar<t.currentTime+.35;)this.playBar(this.nextBar,this.bar),this.nextBar+=this.barLen,this.bar++}playBar(t,e){const n=this.th,i=60/n.bpm,r=n.chords[e%n.chords.length],a=n.root;for(const l of r)this.eng.padVoice(this.out,Me(a+l-12),t,this.barLen,n.pad,n.padCut);this.eng.bassNote(this.out,Me(a+r[0]-24),t,i*1.6),(e%2===1||this.rng.next()<.5)&&this.eng.bassNote(this.out,Me(a+r[0]-24+(this.rng.next()<.3?7:0)),t+i*2,i*1.4);const o=e%4===3?n.density*.55:n.density,c=n.scale;for(let l=0;l<8;l++){if(this.rng.next()>o)continue;let h;if(l%4===0&&this.rng.next()<.7)h=r[Math.floor(this.rng.next()*r.length)];else{const g=Math.round((this.rng.next()-.5)*3);this.lastNote=Math.max(0,Math.min(c.length*2-1,this.lastNote+g)),h=c[this.lastNote%c.length]+12*Math.floor(this.lastNote/c.length)}const f=l%2===1?n.swing*i:0,u=t+l*(i/2)+f,d=a+h+(n.lead==="bell"?12:0);this.eng.leadNote(this.out,n.lead,Me(d),u,i*(.4+this.rng.next()*.5)),n.lead==="harp"&&this.rng.next()<.35&&this.eng.leadNote(this.out,"harp",Me(d+7),u+i/4,i*.4)}if(this.rng.next()<n.sparkle*3){const l=t+Math.floor(this.rng.next()*8)*(i/2);this.eng.sparkleNote(this.out,Me(a+24+c[Math.floor(this.rng.next()*c.length)]),l)}}stop(t){const e=this.eng.ctx;if(this.stopped=!0,clearInterval(this.timer),!e)return;const n=this.out.gain;n.cancelScheduledValues(e.currentTime),n.setValueAtTime(n.value,e.currentTime),n.linearRampToValueAtTime(0,e.currentTime+t),setTimeout(()=>this.out.disconnect(),(t+.5)*1e3)}}class R2{ctx=null;master=null;sfxBus=null;musicBus=null;duckGain=null;reverb=null;noiseBuf=null;last=new Map;sfxVol=.8;musicVol=.5;wantTheme=null;song=null;songTheme=-1;suspendedByHide=!1;get ready(){return!!this.ctx&&this.ctx.state==="running"}unlock(){try{this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume(),this.wantTheme!==null&&!this.song&&this.startMusic(this.wantTheme)}catch{}}init(){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t({latencyHint:"interactive"});this.ctx=e;const n=e.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=12,n.ratio.value=4,n.attack.value=.004,n.release.value=.25,n.connect(e.destination),this.master=e.createGain(),this.master.gain.value=.9,this.master.connect(n),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.duckGain=e.createGain(),this.duckGain.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicVol*.42,this.musicBus.connect(this.duckGain),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(2.4,2.6);const i=e.createGain();i.gain.value=.55,this.reverb.connect(i),i.connect(this.master);const r=e.sampleRate;this.noiseBuf=e.createBuffer(1,r,e.sampleRate);const a=this.noiseBuf.getChannelData(0);for(let o=0;o<r;o++)a[o]=Math.random()*2-1;document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.state==="running"&&(this.suspendedByHide=!0,this.ctx.suspend()):this.suspendedByHide&&(this.suspendedByHide=!1,this.ctx.resume()))})}impulse(t,e){const n=this.ctx,i=Math.floor(n.sampleRate*t),r=n.createBuffer(2,i,n.sampleRate);for(let a=0;a<2;a++){const o=r.getChannelData(a);for(let c=0;c<i;c++)o[c]=(Math.random()*2-1)*Math.pow(1-c/i,e)}return r}setSfxVolume(t){this.sfxVol=t,this.sfxBus&&this.ctx&&this.sfxBus.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setMusicVolume(t){this.musicVol=t,this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(t*.42,this.ctx.currentTime,.1)}duck(t,e){const n=this.ctx;if(!n||!this.duckGain)return;const i=this.duckGain.gain,r=n.currentTime;i.cancelScheduledValues(r),i.setValueAtTime(i.value,r),i.linearRampToValueAtTime(t,r+.15),i.setValueAtTime(t,r+e),i.linearRampToValueAtTime(1,r+e+1.2)}startMusic(t){this.wantTheme=t,!(!this.ctx||!this.musicBus)&&(this.song&&this.songTheme===t||(this.song?.stop(1.5),this.songTheme=t,this.song=new C2(this,ar[(t%ar.length+ar.length)%ar.length],1234+t*77+Math.floor(Math.random()*1e3))))}stopMusic(t=1){this.wantTheme=null,this.song?.stop(t),this.song=null,this.songTheme=-1}dest(t,e,n){const i=this.ctx;let r=n;if(t!==0&&i.createStereoPanner){const a=i.createStereoPanner();a.pan.value=t,a.connect(n),r=a}if(e>0&&this.reverb){const a=i.createGain();a.gain.value=e,a.connect(this.reverb);const o=i.createGain();return o.connect(r),o.connect(a),o}return r}tone(t,e,n,i={},r){const a=this.ctx,o=a.createOscillator();o.type=i.type??"sine",o.frequency.setValueAtTime(t,e),i.glide&&o.frequency.exponentialRampToValueAtTime(Math.max(20,i.glide),e+n*.8),i.detune&&(o.detune.value=i.detune);const c=a.createGain(),l=i.gain??.3,h=i.attack??.005,f=i.decay??n;c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(l,e+h),c.gain.exponentialRampToValueAtTime(1e-4,e+h+f);let u=o;if(i.filter){const d=a.createBiquadFilter();d.type="lowpass",d.frequency.value=i.filter,o.connect(d),u=d}u.connect(c),c.connect(this.dest(i.pan??0,i.wet??0,r??this.sfxBus)),o.start(e),o.stop(e+h+f+.05)}noise(t,e,n={}){const i=this.ctx,r=i.createBufferSource();r.buffer=this.noiseBuf,r.playbackRate.value=.8+Math.random()*.4;const a=i.createBiquadFilter();a.type=n.type??"bandpass",a.frequency.setValueAtTime(n.freq??2e3,t),n.freqTo&&a.frequency.exponentialRampToValueAtTime(n.freqTo,t+e),a.Q.value=n.q??1;const o=i.createGain(),c=n.attack??.003;o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(n.gain??.2,t+c),o.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(e,c+.01)),r.connect(a),a.connect(o),o.connect(this.dest(n.pan??0,n.wet??0,this.sfxBus)),r.start(t,Math.random()*.5),r.stop(t+e+.05)}fm(t,e,n,i,r,a,o,c,l=0){const h=this.ctx,f=h.createOscillator(),u=h.createOscillator(),d=h.createGain();f.frequency.value=t,u.frequency.value=t*i,d.gain.setValueAtTime(t*r,e),d.gain.exponentialRampToValueAtTime(Math.max(1,t*r*.02),e+n*.6),u.connect(d),d.connect(f.frequency);const g=h.createGain();g.gain.setValueAtTime(1e-4,e),g.gain.linearRampToValueAtTime(a,e+.004),g.gain.exponentialRampToValueAtTime(1e-4,e+n),f.connect(g),g.connect(this.dest(l,o,c??this.sfxBus)),f.start(e),u.start(e),f.stop(e+n+.05),u.stop(e+n+.05)}padVoice(t,e,n,i,r,a){const o=this.ctx,c=o.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(a*.6,n),c.frequency.linearRampToValueAtTime(a,n+i*.5),c.frequency.linearRampToValueAtTime(a*.7,n+i);const l=o.createGain(),h=r==="sawtooth"||r==="square"?.028:.05;l.gain.setValueAtTime(1e-4,n),l.gain.linearRampToValueAtTime(h,n+i*.3),l.gain.linearRampToValueAtTime(h*.7,n+i*.85),l.gain.linearRampToValueAtTime(1e-4,n+i+.25),c.connect(l),l.connect(this.dest(0,.5,t));for(const f of[-7,7]){const u=o.createOscillator();u.type=r,u.frequency.value=e,u.detune.value=f,u.connect(c),u.start(n),u.stop(n+i+.3)}}bassNote(t,e,n,i){this.tone(e,n,i,{type:"triangle",gain:.13,attack:.02,decay:i,filter:600},t)}leadNote(t,e,n,i,r){const a=(Math.random()-.5)*.5;switch(e){case"marimba":this.fm(n,i,.55,4,.9,.11,.25,t,a);break;case"kalimba":this.fm(n,i,.8,5.4,.6,.1,.3,t,a);break;case"bell":this.fm(n,i,1.6,3.5,1.2,.06,.5,t,a);break;case"harp":this.tone(n,i,.9,{type:"triangle",gain:.09,attack:.004,decay:.9,pan:a,wet:.4,filter:3e3},t);break;case"pluck":this.tone(n,i,.25,{type:"square",gain:.05,attack:.003,decay:.22,pan:a,wet:.2,filter:1800},t);break;case"flute":this.tone(n,i,r,{type:"sine",gain:.075,attack:.06,decay:r+.2,pan:a,wet:.45},t);break}}sparkleNote(t,e,n){this.fm(e,n,1.2,7.1,.4,.03,.8,t,(Math.random()-.5)*.8)}play(t,e={}){const n=this.ctx;if(!n||n.state!=="running"||this.sfxVol<=.001)return;const i=n.currentTime,r=T2[t];if(r){const a=this.last.get(t)??0;if(i-a<r)return}this.last.set(t,i);try{this.sfx(t,i+.005,e)}catch{}}sfx(t,e,n){const i=n.volume??1,r=n.pan??0,a=o=>1+(Math.random()-.5)*o;switch(t){case"tap":this.tone(760*a(.1),e,.07,{gain:.16*i,glide:520,pan:r}),this.noise(e,.025,{type:"highpass",freq:3e3,gain:.05*i});break;case"button":this.tone(1100,e,.05,{gain:.1*i,glide:800}),this.noise(e,.02,{type:"highpass",freq:4e3,gain:.04*i});break;case"place":this.tone(250*a(.08),e,.16,{type:"sine",gain:.32*i,glide:120,pan:r}),this.noise(e,.08,{type:"lowpass",freq:900,gain:.12*i}),this.tone(1320,e+.02,.1,{type:"sine",gain:.03*i,wet:.3});break;case"invalid":this.tone(210,e,.09,{type:"triangle",gain:.16*i,filter:700}),this.tone(170,e+.09,.12,{type:"triangle",gain:.16*i,filter:600});break;case"antOut":this.noise(e,.012,{type:"highpass",freq:5e3*a(.3),gain:.025*i,pan:(Math.random()-.5)*.6});break;case"pick":this.noise(e,.035,{type:"bandpass",freq:2200*a(.5),q:3,gain:.07*i,pan:(Math.random()-.5)*.8}),this.tone(1100*a(.3),e,.03,{gain:.025*i});break;case"deliver":this.tone(620*a(.25),e,.07,{gain:.045*i,glide:980,wet:.1});break;case"boxDone":this.fm(Me(88),e,.7,3.5,.8,.09*i,.4),this.fm(Me(95),e+.08,.9,3.5,.8,.07*i,.4);break;case"reveal":[84,88,91,96].forEach((o,c)=>this.fm(Me(o),e+c*.045,.6,5.1,.5,.05*i,.6));break;case"thaw":for(let o=0;o<6;o++)this.noise(e+o*.025+Math.random()*.02,.03,{type:"highpass",freq:3500+Math.random()*3e3,gain:.08*i});[91,96,100].forEach((o,c)=>this.fm(Me(o),e+.12+c*.05,.5,6,.4,.035*i,.6));break;case"link":this.fm(1250,e,.25,3.47,1.4,.07*i,.2),this.fm(1580,e+.06,.3,3.47,1.4,.06*i,.2),this.tone(230,e,.14,{gain:.2*i,glide:120});break;case"win":{[72,76,79,84].forEach((l,h)=>this.fm(Me(l),e+h*.12,.7,4,.9,.12*i,.3));const c=e+.55;[60,64,67,72,76].forEach(l=>this.tone(Me(l),c,1.8,{type:"triangle",gain:.06*i,attack:.05,decay:1.8,wet:.5,filter:2500})),[88,91,96].forEach((l,h)=>this.fm(Me(l),c+.1+h*.09,1.2,3.5,.9,.05*i,.6));break}case"lose":[67,64,60,55].forEach((o,c)=>this.tone(Me(o),e+c*.22,.4,{type:"triangle",gain:.12*i,attack:.02,decay:.45,filter:1200,wet:.3}));break;case"star":{const o=[88,91,95][Math.max(0,Math.min(2,Math.round(n.pitch??0)))];this.fm(Me(o),e,1.1,3.5,1,.1*i,.5),this.tone(Me(o+12),e,.4,{gain:.03*i,wet:.5});break}case"coin":this.tone(Me(95),e,.08,{type:"square",gain:.045*i,filter:4e3}),this.tone(Me(100),e+.07,.3,{type:"square",gain:.045*i,filter:4e3,wet:.3});break;case"booster":this.noise(e,.35,{type:"bandpass",freq:500,freqTo:5e3,q:2,gain:.08*i,attack:.1}),[84,88,91,96,100].forEach((o,c)=>this.fm(Me(o),e+.1+c*.04,.5,5,.4,.04*i,.6));break;case"shuffle":for(let o=0;o<7;o++)this.noise(e+o*.045,.04,{type:"bandpass",freq:1800+Math.random()*1500,q:1.5,gain:.09*i});break;case"undo":this.noise(e,.3,{type:"bandpass",freq:4e3,freqTo:400,q:1.5,gain:.1*i,attack:.22}),this.tone(900,e+.05,.25,{gain:.05*i,glide:300});break;case"hint":this.fm(Me(81),e,1.4,3.5,1,.08*i,.6),this.fm(Me(88),e+.15,1.4,3.5,1,.06*i,.6);break;case"unlock":[79,84,88,91,96].forEach((o,c)=>this.fm(Me(o),e+c*.07,.8,4,.8,.08*i,.4));break;case"whoosh":this.noise(e,.25,{type:"bandpass",freq:300,freqTo:2400,q:.8,gain:.05*i,attack:.08});break;case"pop":this.tone(420*a(.2),e,.08,{gain:.14*i,glide:950});break}}}const Ft=new R2,Tc=.105;class P2{level;sim;view;hooks;acc=0;speed=1;paused=!1;history=[];boostersUsed=0;taps=0;finished=null;stuckPending=!1;winPending=!1;total;eaten=0;grabMode=!1;hintId=null;rng;lastDeliverSfx=0;constructor(t,e,n,i){this.view=t,this.level=e,this.hooks=i,this.sim=Pr.fromLevel(e),this.total=this.sim.left,this.rng=new Uh(e.n*7919+13),t.load(e,this.sim,n)}get progress(){return this.total?this.eaten/this.total:0}get canUndo(){return this.history.length>0&&this.finished!=="won"}get status(){return this.finished??"playing"}onPick(){Ft.play("pick")}onDeliver(){this.eaten++,this.view.nest.gulp();const t=performance.now();t-this.lastDeliverSfx>70&&(this.lastDeliverSfx=t,Ft.play("deliver")),this.hooks.onProgress(this.eaten,this.total)}tap(t,e){if(this.paused||this.finished==="won")return;const n=this.view.pickBox(t,e);if(n===null)return;if(Ft.play("tap"),this.grabMode){this.doGrab(n);return}const i=this.sim.whyNot(n);if(i!=="ok"){this.view.queue.shake(n),Ft.play("invalid"),i!=="gone"&&this.hooks.onToast(i);return}this.pushHistory();const r=[];this.sim.take(n,r),this.taps++,this.afterAction(r);const a=this.sim.groupOf(n);Ft.play(a.length>1?"link":"place")}takeBox(t){if(this.paused||this.finished==="won"||!this.sim.canTake(t))return!1;this.pushHistory();const e=[];return this.sim.take(t,e),this.taps++,this.afterAction(e),Ft.play(this.sim.groupOf(t).length>1?"link":"place"),!0}autoStep(){if(this.finished==="won"||this.sim.status==="won")return"done";if(this.paused||!this.sim.isQuiet())return"wait";const t=this.sim.clone();t.unstick(),t.settle();const e=Ia(t,2e4);return e.status!=="solved"||!e.moves.length?e.status==="solved"?"done":"stuck":(this.finished==="stuck"&&(this.finished=null,this.sim.unstick()),this.takeBox(e.moves[0])?"moved":"wait")}hoverId=null;hover(t,e){const n=t<0||this.paused?null:this.view.pickBox(t,e);return n!==this.hoverId&&(this.hoverId=n,this.refreshHover()),n}refreshHover(){const t=this.hoverId;if(t===null||this.sim.boxHidden[t]){this.view.board.highlight(null);return}const e=this.sim.boxColor(t);this.view.board.highlight(this.sim.exposedCells().filter(n=>this.sim.cellColor(n)===e&&this.view.board.isPresent(n)))}pushHistory(){this.history.push(this.sim.clone()),this.history.length>60&&this.history.shift()}afterAction(t){this.setHint(null),this.view.apply(t);for(const e of t)if(e.t==="reveal")Ft.play("reveal"),this.sparkleBox(e.box,"#ffffff");else if(e.t==="thaw"){Ft.play("thaw");const n=this.view.queue.boxTop(e.box,new P);this.view.fx.shards(n.x,n.y,n.z)}this.finished==="stuck"&&(this.finished=null,this.sim.unstick()),this.stuckPending=!1,this.hooks.onChange(this)}sparkleBox(t,e){const n=this.view.queue.boxTop(t,new P);this.view.fx.sparkle(n.x,n.y+.2,n.z,e,12,1)}update(t,e){if(!this.paused&&this.sim.status==="playing"){this.acc+=t*this.speed;let n=0;for(;this.acc>=Tc&&n++<8;){this.acc-=Tc;const i=[],r=this.sim.round(i);if(i.length&&this.handleRound(i),r===0){this.acc=0,this.sim.checkStuck()&&(this.stuckPending=!0);break}}}this.view.ants.speed=this.speed,this.view.update(this.paused?0:t,e),this.winPending&&this.view.isIdle()&&(this.winPending=!1,this.finished="won",this.hooks.onWin(this)),this.stuckPending&&this.view.isIdle()&&this.sim.status==="stuck"&&(this.stuckPending=!1,this.finished="stuck",this.view.queue.pulseSlots(),this.hooks.onStuck(this))}handleRound(t){this.view.apply(t),this.hoverId!==null&&this.refreshHover();let e=0;for(const n of t)if(n.t==="ant")e++;else if(n.t==="boxDone"){Ft.play("boxDone");const i=this.view.layout.slot[n.slot];this.view.fx.sparkle(i.x,.8,i.z,this.view.queue.boxColor(n.box),14,1.1),this.hooks.onChange(this)}else n.t==="won"&&(this.winPending=!0,this.hooks.onChange(this));e&&Ft.play("antOut")}canUse(t){if(this.finished==="won")return!1;switch(t){case"undo":return this.history.length>0;case"slot":return this.sim.slots.length<7;case"shuffle":return this.sim.queueSize()>1;case"grab":return this.sim.queueSize()>0&&this.sim.freeSlots()>0;case"hint":return this.sim.queueSize()>0}}use(t){if(!this.canUse(t))return!1;let e=!0;switch(t){case"undo":e=this.undo();break;case"slot":this.sim.addSlot(),this.view.relayout(!0),this.view.queue.syncFromSim(!1),this.afterAction([]);break;case"shuffle":e=this.smartShuffle();break;case"grab":return this.grabMode=!0,this.hooks.onToast("grab"),this.hooks.onChange(this),!0;case"hint":e=this.hint();break}return e&&(this.boostersUsed++,Ft.play(t==="undo"?"undo":t==="shuffle"?"shuffle":t==="hint"?"hint":"booster")),e}cancelGrab(){this.grabMode=!1,this.hooks.onChange(this)}doGrab(t){this.pushHistory();const e=[];if(!this.sim.grab(t,e)){this.history.pop(),this.view.queue.shake(t),Ft.play("invalid");return}this.grabMode=!1,this.boostersUsed++,Ft.play("booster"),this.sparkleBox(t,"#fff6a8"),this.afterAction(e)}undo(){const t=this.history.pop();return t?(this.sim=t,this.view.ants.fadeAll(),this.rebindView(),this.finished=null,this.stuckPending=!1,this.winPending=!1,this.eaten=this.total-this.sim.left,this.hooks.onProgress(this.eaten,this.total),this.hooks.onChange(this),!0):!1}rebindView(){const t=this.view;t.setSim(this.sim),t.board.syncFrom(this.sim,!0),t.queue.syncFromSim(!0),t.relayout(!0),t.queue.syncFromSim(!1)}smartShuffle(){this.pushHistory();const t=this.sim.clone();t.unstick();let e=null,n=-1/0;for(let r=0;r<14;r++){const a=t.clone();a.shuffle(this.rng);const o=a.clone(),c=Ia(o,1500),l=(c.status==="solved"?1e3:c.status==="unknown"?200:0)+a.legalMoves().length*10+this.rng.next();if(l>n&&(n=l,e=a),c.status==="solved"&&r>=3)break}const i=[];return this.sim=e,this.rebindView(),this.afterAction(i),!0}hint(){const t=this.sim.clone();t.unstick(),t.settle();const e=Ia(t,4e3);return e.status==="solved"&&e.moves.length?(this.setHint(e.moves[0]),!0):(this.hooks.onToast("nohint"),!1)}setHint(t){this.hintId=t,this.view.queue.setHint(t)}get hinted(){return this.hintId}stars(t){return t?1:this.boostersUsed===0?3:2}celebrate(){const t=this.view.layout,e=t.picX0+t.picW/2,n=t.picZ0+t.picH/2;return this.view.fx.confetti(e,1.5,n,180,5),this.view.punch(),this.view.board.rebuild()}dispose(){this.view.unload()}}const Mn=[{id:"meadow",name:{en:"Sunny Meadow",ru:"Солнечный луг"},bg:"#7fbf5a",sky:"#fffbea",bounce:"#6f9a4d",frame:"#f1d39c",soil:"#b07a4b",ground:{kind:"grass",base:"#86c45b",tints:["#9ad26a","#77b64f","#a7da78","#6fae4a"],detail:["#5f9f3e","#a9dc7b","#8fca60","#4f8c34","#b8e58a"],accents:["#ffffff","#ffe14d","#ff8fb1","#b9a3ff"]},ui:{top:"#bfe9ff",bottom:"#9edc6f",accent:"#ff9f1c",path:"#f3dfb4"},music:0},{id:"forest",name:{en:"Whispering Forest",ru:"Шепчущий лес"},bg:"#3f6b3a",sky:"#f3ffe6",bounce:"#44613a",frame:"#d8b07a",soil:"#8a5a36",ground:{kind:"forest",base:"#4f7d3e",tints:["#5d8c47","#436d35","#6a8f45","#3b5f2f"],detail:["#7aa04f","#35572a","#8cae5b","#2f4d25"],accents:["#e0703a","#f2b84b","#c9502e","#a7c957"]},ui:{top:"#cdeccf",bottom:"#4f7d3e",accent:"#f2b84b",path:"#d9c29a"},music:1},{id:"sea",name:{en:"Seashell Beach",ru:"Пляж ракушек"},bg:"#f1dca8",sky:"#f4fbff",bounce:"#d9c28f",frame:"#ffffff",soil:"#c9a26b",ground:{kind:"sand",base:"#f1dba6",tints:["#f6e4b8","#e9cf94","#fbeac2","#e3c686"],detail:["#d8bb7e","#fff4d6","#cfae6d","#e7cf9b"],accents:["#ffb4a2","#ffffff","#9ad1d4","#ffd6a5"]},ui:{top:"#8fd8f4",bottom:"#f1dba6",accent:"#ff7b7b",path:"#fff1cf"},music:2},{id:"sweets",name:{en:"Candy Town",ru:"Конфетный город"},bg:"#f7c6dc",sky:"#fff5fb",bounce:"#e8a8c6",frame:"#fff0f6",soil:"#9c5b3b",ground:{kind:"frosting",base:"#f9cfe2",tints:["#fbdbe9","#f5bfd7","#fde6f0","#f2b3cf"],detail:["#ffffff","#f7a8c9"],accents:["#ff5d8f","#ffd166","#06d6a0","#118ab2","#9b5de5","#ffffff"]},ui:{top:"#ffd6e8",bottom:"#f9cfe2",accent:"#ff5d8f",path:"#fff7fb"},music:3},{id:"space",name:{en:"Starry Night",ru:"Звёздная ночь"},bg:"#1d2340",sky:"#c9d4ff",bounce:"#2b2f55",frame:"#c7b8ff",soil:"#5b4a7a",ground:{kind:"night",base:"#2a3358",tints:["#303b66","#232c4d","#36427a","#1f2745"],detail:["#3d4a82","#1b2240","#4a5a96"],accents:["#fff7c2","#a0f0ff","#ffc2f0"]},ui:{top:"#101631",bottom:"#2a3358",accent:"#ffd166",path:"#c7b8ff"},music:4},{id:"winter",name:{en:"Snowy Hills",ru:"Снежные холмы"},bg:"#e9f3fb",sky:"#ffffff",bounce:"#b9d3e8",frame:"#cfe3f3",soil:"#8c6a55",ground:{kind:"snow",base:"#eef5fb",tints:["#f7fbff","#e2edf7","#ffffff","#d9e7f3"],detail:["#cfe0ee","#ffffff"],accents:["#ffffff","#bfe3ff","#ffd6e0"]},ui:{top:"#cfe9ff",bottom:"#eef5fb",accent:"#4ea8de",path:"#ffffff"},music:5},{id:"fantasy",name:{en:"Enchanted Glade",ru:"Волшебная поляна"},bg:"#6c4fa3",sky:"#fff0ff",bounce:"#6a4f95",frame:"#f3d6ff",soil:"#7b4e8e",ground:{kind:"magic",base:"#8a6cc2",tints:["#9b7fd0","#7c5db4","#a78ad8","#6f52a6"],detail:["#b49be0","#6a4c9c","#c7b2ec"],accents:["#fff3b0","#ffc6ff","#bdf4ff","#ffffff"]},ui:{top:"#d7c2ff",bottom:"#8a6cc2",accent:"#ffcf56",path:"#f3e6ff"},music:6}];function Jn(s){return Mn[(s%Mn.length+Mn.length)%Mn.length]}function rt(s,t={},...e){const n=document.createElement(s);if(t.class&&(n.className=t.class),t.html!==void 0&&(n.innerHTML=t.html),t.text!==void 0&&(n.textContent=t.text),t.style&&n.setAttribute("style",t.style),t.attrs)for(const[i,r]of Object.entries(t.attrs))n.setAttribute(i,r);if(t.on)for(const[i,r]of Object.entries(t.on))n.addEventListener(i,r);for(const i of e)i&&n.append(i);return n}function Lr(s,t,e){const n=rt("button",{class:"btn "+t,html:s});return n.addEventListener("click",i=>{i.stopPropagation(),Ft.unlock(),Ft.play("button"),e()}),n}const L2={"light-bulb":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M17.651 22.27h-3.89c-.79 0-1.44.64-1.43 1.43v3.89c0 .79.64 1.43 1.43 1.43h.248a1.94 1.94 0 0 0 3.384 0h.258c.79 0 1.43-.64 1.43-1.43V23.7c0-.79-.64-1.43-1.43-1.43"/><path fill="#fcd53f" d="M18.161 23.13c.24 0 .43-.18.45-.41c.07-.86.44-2.95 2.46-5.19a8.66 8.66 0 0 0 3.29-6.31c.02-.24.03-.4.03-.5v-.1c-.06-4.78-3.93-8.62-8.7-8.62a8.69 8.69 0 0 0-8.69 8.6s-.01.24.03.64c.16 2.54 1.4 4.79 3.29 6.28c2.02 2.25 2.42 4.34 2.49 5.2c.02.23.21.41.45.41z"/><path fill="#ffb02e" d="M15.701 10.7c1.62 0 2.94 1.31 2.96 2.93v.08c0 .03 0 .07-.01.13c-.05.84-.46 1.63-1.12 2.15l-.07.05l-.06.06c-1.1 1.22-1.33 4.32-1.37 6.02h-.65c-.05-1.7-.29-4.8-1.39-6.02l-.06-.06l-.07-.05a2.96 2.96 0 0 1-1.12-2.17c0-.04-.01-.07-.01-.09v-.09c.03-1.62 1.36-2.94 2.97-2.94m0-1a3.96 3.96 0 0 0-2.45 7.07c1.2 1.34 1.14 6.36 1.14 6.36h2.64s-.08-5.02 1.13-6.35c.86-.68 1.43-1.71 1.5-2.88c.01-.11.01-.18.01-.23v-.04a3.97 3.97 0 0 0-3.97-3.93"/><path fill="#d3d3d3" d="M19.167 25.053a.5.5 0 1 0-.172-.986l-6.74 1.18a.5.5 0 1 0 .172.986zm-.05 2.15a.5.5 0 0 0-.172-.985l-6.65 1.17a.5.5 0 1 0 .173.984z"/><path fill="#fff478" d="M13.791 5.44c-1.11 1.92-.55 4.32 1.25 5.35s4.15.32 5.26-1.6s.55-4.32-1.25-5.35s-4.15-.32-5.26 1.6"/></g></svg>',magnet:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M11 23v6.06c0 .52-.42.94-.94.94H3.94c-.52 0-.94-.42-.94-.94V23l4.028-2.152zm18 0v6.06c0 .52-.42.94-.94.94h-6.12c-.52 0-.94-.42-.94-.94V23l3.99-2.152z"/><path fill="#f8312f" d="M11 23v-7.94c0-2.75 2.2-5.04 4.95-5.06c2.78-.03 5.05 2.23 5.05 5v8h8v-8c0-7.18-5.82-13-13-13S3 7.82 3 15v8z"/></g></svg>',coin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14"/><path fill="#d3883e" d="M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16S9.925 5 16 5s11 4.925 11 11m-4.68 3.89a.54.54 0 0 0-.51-.37h.03v-7.76c.43-.28.51-.97-.01-1.28l-5.39-3.26a.73.73 0 0 0-.78 0l-5.4 3.26c-.52.31-.44 1-.02 1.28v7.77h-.11c-.24 0-.45.16-.51.39l-.35 1.25c-.1.34.16.68.51.68h12.45c.35-.01.61-.36.5-.71zM11.9 11.88v7.64h1.66v-7.64zm3.31 0v7.64h1.69v-7.64zm3.35 0v7.64h1.62v-7.64z" opacity=".53"/></g></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fcd53f" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.23 2.23 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.28 2.28 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0"/></svg>',"glowing-star":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#fcd53f"><path d="m28.979 17.003l-3.108.214c-.834.06-1.178 1.079-.542 1.608l2.388 1.955c.521.428 1.314.204 1.523-.428l.709-2.127c.219-.632-.292-1.273-.97-1.222M21.75 2.691l-.72 2.9c-.2.78.66 1.41 1.34.98l2.54-1.58c.55-.34.58-1.14.05-1.52l-1.78-1.29a.912.912 0 0 0-1.43.51M6.43 4.995l2.53 1.58c.68.43 1.54-.19 1.35-.98l-.72-2.9a.92.92 0 0 0-1.43-.52l-1.78 1.29c-.53.4-.5 1.19.05 1.53M4.185 20.713l2.29-1.92c.62-.52.29-1.53-.51-1.58l-2.98-.21a.92.92 0 0 0-.94 1.2l.68 2.09c.2.62.97.84 1.46.42m13.61 7.292l-1.12-2.77c-.3-.75-1.36-.75-1.66 0l-1.12 2.77c-.24.6.2 1.26.85 1.26h2.2a.92.92 0 0 0 .85-1.26"/><path d="m17.565 3.324l1.726 3.72c.326.694.967 1.18 1.717 1.29l4.056.624c1.835.278 2.575 2.53 1.293 3.859L23.268 16a2.28 2.28 0 0 0-.612 1.964l.71 4.374c.307 1.885-1.687 3.293-3.354 2.37l-3.405-1.894a2.25 2.25 0 0 0-2.21 0l-3.404 1.895c-1.668.922-3.661-.486-3.355-2.37l.71-4.375A2.28 2.28 0 0 0 7.736 16l-3.088-3.184c-1.293-1.34-.543-3.581 1.293-3.859l4.055-.625a2.3 2.3 0 0 0 1.717-1.29l1.727-3.719c.819-1.765 3.306-1.765 4.124 0"/></g></svg>',locked:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M16 2a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6m0 2.5A3.5 3.5 0 0 1 19.5 8v3a3.5 3.5 0 1 1-7 0V8A3.5 3.5 0 0 1 16 4.5"/><path fill="#f9c23c" d="M5 14a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path fill="#433b6b" d="M17.5 20.5a2.5 2.5 0 1 0-3 0V24a1.5 1.5 0 0 0 3 0z"/></g></svg>',fire:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6723" d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"/><path fill="#ffb02e" d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"/></g></svg>',trophy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="M10.52 7.521a3.435 3.435 0 0 0-4.213-2.369a2 2 0 0 0-.163.046c-2.493.831-2.691 4.214-.455 5.45l4.97 2.75a.866.866 0 1 0 .838-1.516l-4.97-2.75c-.982-.543-.823-1.956.16-2.288l.005-.002l.07-.018c.899-.25 1.834.27 2.093 1.175a.866.866 0 1 0 1.666-.478m11.939.478a1.7 1.7 0 0 1 2.118-1.168l.045.011l.007.002c.981.332 1.14 1.745.158 2.288l-4.97 2.75a.866.866 0 1 0 .84 1.516l4.97-2.75c2.235-1.236 2.037-4.619-.456-5.45a2 2 0 0 0-.164-.046a3.435 3.435 0 0 0-4.213 2.37a.866.866 0 1 0 1.666.477m-5.133 9.511v-4.22h-3.34v4.22c0 .74-.33 1.45-.9 1.92l-1.92 1.6h8.98l-1.92-1.6a2.51 2.51 0 0 1-.9-1.92"/><path fill="#ffb02e" d="M15.658 16.54a6.97 6.97 0 0 1-6.97-6.97V2.71c0-.39.32-.71.71-.71h12.53c.39 0 .71.32.71.71v6.86c0 3.85-3.12 6.97-6.98 6.97"/><path fill="#6d4534" d="M22.792 21.03H8.197c-.77 0-1.423.51-1.571 1.22l-1.614 7.09c-.073.33.19.64.549.64h19.878c.359 0 .622-.31.549-.64l-1.614-7.09c-.158-.71-.812-1.22-1.582-1.22"/><path fill="#ffb02e" d="M18.383 23.96h-5.766a.625.625 0 0 0-.613.64v1.81c0 .35.268.64.613.64h5.766c.335 0 .613-.28.613-.64V24.6c0-.35-.268-.64-.613-.64"/></g></svg>',crown:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" fill-rule="evenodd" d="M6.94 23.5a1.58 1.58 0 1 1-3.16 0a1.58 1.58 0 0 1 3.16 0m21.26 0a1.58 1.58 0 1 1-3.16 0a1.58 1.58 0 0 1 3.16 0" clip-rule="evenodd"/><path fill="#e19747" fill-rule="evenodd" d="m10.25 13.27l3.18 4.27l-6.59.76l2.12-4.89c-.51-.2-.87-.7-.87-1.28c0-.76.62-1.38 1.38-1.38a1.383 1.383 0 0 1 .78 2.52m12.76.14l2.12 4.89l-6.59-.76l3.18-4.27c-.36-.25-.6-.67-.6-1.14c0-.76.62-1.38 1.38-1.38s1.38.62 1.38 1.38c0 .58-.36 1.08-.87 1.28" clip-rule="evenodd"/><path fill="#ffb02e" d="M29.98 13.09c0-.76-.62-1.38-1.38-1.38s-1.38.62-1.38 1.38c0 .28.09.55.23.76c-.22 0-.44.05-.65.19l-3.93 2.54c-.52.33-1.2.21-1.57-.29l-4.37-5.93a.7.7 0 0 0-.11-.13a1.721 1.721 0 1 0-1.66 0c-.04.04-.08.08-.11.13l-4.37 5.93c-.36.5-1.05.62-1.57.29l-3.93-2.54c-.21-.14-.43-.19-.65-.19c.15-.22.23-.48.23-.76c0-.76-.62-1.38-1.38-1.38S2 12.33 2 13.09s.62 1.38 1.38 1.38c.05 0 .1 0 .14-.01c-.13.23-.18.5-.12.79L6 28.22c.19.93 1.01 1.6 1.96 1.6h16.06c.95 0 1.77-.67 1.96-1.6l2.6-12.97c.06-.29 0-.57-.12-.79c.05 0 .1.01.14.01c.76 0 1.38-.62 1.38-1.38"/><path fill="#00a6ed" d="M15.99 26a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/><path fill="#f8312f" fill-rule="evenodd" d="M11 23.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m13 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/></g></svg>',"gem-stone":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" d="M24.21 7.9H7.79a.54.54 0 0 0-.42.21L2.15 15a.52.52 0 0 0 0 .67L15.59 29.9a.52.52 0 0 0 .76 0l13.44-14.23a.52.52 0 0 0 0-.67l-5.16-6.89a.54.54 0 0 0-.42-.21"/><path fill="#1c5cd7" d="M15.594 29.902c.156.166.333.176.402.16l.017-.097V13.996H2.91c-.2.266-.632.837-.754.996c-.152.2-.254.418 0 .688z"/><path fill="#0084ce" d="M15.996 7.9H7.79a.54.54 0 0 0-.42.21l-4.837 6.385c-.202.259-.406.712.501.712c3.37.002 6.156.009 8.106.009c1.046-1.566 2.724-4.077 4.856-7.316"/><path fill="#aeddff" d="m16 30.059l-4.86-14.83h9.72z"/><path fill="#26eafc" d="M24.047 7.9h-8.031v7.298h13.883a.6.6 0 0 0-.1-.197c-.094-.134-4.983-6.642-5.1-6.806s-.328-.295-.652-.295"/><path fill="#b4f6fc" d="m16 7.9l2.43 3.67l2.43 3.66h-9.72l2.43-3.66z"/></g></svg>',"wrapped-gift":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fcd53f" d="M24.888 30H7.112A2.093 2.093 0 0 1 5 27.914V15l10.877-3.06L27 15v12.914C27 29.06 26.06 30 24.888 30"/><path fill="#f8312f" d="M27 5.847c0-3.384-4.045-5.106-6.466-2.763L16 7.479l-4.533-4.395C9.045.73 5 2.463 5 5.847C5 7.04 5.957 8 7.142 8L16 10.17L24.858 8A2.157 2.157 0 0 0 27 5.847"/><path fill="#ffb02e" d="M27.662 8H4.337C3.6 8 3 8.6 3 9.342v4.316C3 14.4 3.6 15 4.338 15h23.324C28.4 15 29 14.4 29 13.658V9.342C29 8.6 28.4 8 27.662 8"/><path fill="#ca0b4a" d="M16.005 3C14.345 3 13 4.37 13 6.06V30h6V6.06C19.01 4.37 17.666 3 16.005 3"/></g></svg>',ant:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M2.01 2.44a.5.5 0 0 1 .5-.5a6.603 6.603 0 0 1 6.61 6.61a.5.5 0 0 1-1 0a5.603 5.603 0 0 0-5.61-5.61a.5.5 0 0 1-.5-.5m14.82 13.517a.5.5 0 1 0-.58-.814l-.536.382a.503.503 0 0 0-.623.445l-5.455 3.9c-.988-.813-2.3-1.203-3.585-1.203c-1.426 0-2.886.481-3.895 1.49a.5.5 0 1 0 .708.706c.781-.781 1.966-1.196 3.187-1.196c1.222 0 2.41.414 3.196 1.197a.5.5 0 0 0 .644.053l4.505-3.22l-7.21 11.538a.5.5 0 1 0 .848.53l7.056-11.291V29.5a.5.5 0 1 0 1 0V16.873l.374-.598a.5.5 0 0 0 .043-.087z"/><path fill="#635994" d="M13.02 16.037c-1 .796-2.62.963-4.45.963c-3.04 0-5.5-.46-5.5-3.5S5.53 8 8.57 8a5.497 5.497 0 0 1 5.495 5.725a3.02 3.02 0 0 1 4.944 2.84c.634-1.017 1.694-1.625 3.461-1.625c4.16 0 7.53 3.37 7.53 7.53S26.63 30 22.47 30s-4.4-3.37-4.4-7.53c0-1.772.044-3.401.415-4.687a3.02 3.02 0 0 1-5.465-1.746"/><path fill="#533566" d="M6.56 10.52c.41 0 .75.33.75.75v.88a.749.749 0 1 1-1.5 0v-.88c.01-.41.34-.75.75-.75"/></g></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f9c23c" d="M10.52 7.052a1.17 1.17 0 0 1-.639-.636L8.93 4.257c-.178-.343-.69-.343-.858 0l-.952 2.16a1.28 1.28 0 0 1-.638.635l-1.214.524a.462.462 0 0 0 0 .838l1.214.524c.293.121.523.353.638.636l.952 2.169c.178.343.69.343.858 0l.952-2.17c.126-.282.356-.504.638-.635l1.214-.524a.462.462 0 0 0 0-.838zm15.054 6.503a3.73 3.73 0 0 1-1.922-1.977L20.79 4.81a1.432 1.432 0 0 0-2.58 0l-2.863 6.768a3.8 3.8 0 0 1-1.921 1.977l-3.622 1.64c-1.072.53-1.072 2.08 0 2.61l3.622 1.64a3.74 3.74 0 0 1 1.922 1.977l2.862 6.768a1.432 1.432 0 0 0 2.58 0l2.863-6.768a3.8 3.8 0 0 1 1.921-1.977l3.622-1.64c1.072-.53 1.072-2.08 0-2.61zM8.281 20.33c.16.392.454.696.822.872l1.55.725a.646.646 0 0 1 0 1.146l-1.55.725c-.368.176-.661.49-.822.872l-1.228 2.977a.61.61 0 0 1-1.106 0L4.72 24.67a1.66 1.66 0 0 0-.822-.872l-1.55-.725a.646.646 0 0 1 0-1.146l1.55-.725c.368-.176.661-.49.822-.872l1.228-2.977a.61.61 0 0 1 1.106 0z"/></svg>',snowflake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#00a6ed" d="m23.564 18.9l5.112-1.36c.553-.15 1.137.15 1.288.71c.15.56-.182 1.12-.735 1.27l-3.11.83l2.224 1.27c.483.28.655.89.373 1.37s-.896.65-1.379.37l-2.224-1.27l.836 3.09c.15.56-.171 1.12-.735 1.27a1.04 1.04 0 0 1-1.278-.73l-1.368-5.08l-2.315-1.33a5.07 5.07 0 0 1-2.747 1.59v2.63l3.744 3.72c.402.4.402 1.06 0 1.46c-.403.4-1.067.4-1.47 0l-2.274-2.26V29a1.006 1.006 0 0 1-2.012 0v-2.54l-2.274 2.26c-.403.4-1.067.4-1.47 0a1.034 1.034 0 0 1 0-1.46l3.744-3.72v-2.63c-1.097-.22-2.033-.8-2.747-1.59l-2.305 1.32l-1.368 5.08c-.151.55-.725.88-1.278.73a1.04 1.04 0 0 1-.735-1.27l.836-3.09l-2.224 1.28A1.02 1.02 0 0 1 4.294 23a.976.976 0 0 1 .363-1.35l2.223-1.28l-3.109-.83a1.04 1.04 0 0 1-.735-1.27c.151-.55.725-.88 1.278-.73l5.112 1.36l2.315-1.33a4.8 4.8 0 0 1-.282-1.57c0-.55.11-1.08.282-1.55l-2.315-1.33l-5.112 1.36a1.04 1.04 0 0 1-1.278-.73c-.15-.56.182-1.12.735-1.27l3.11-.83l-2.224-1.28A1.004 1.004 0 0 1 4.294 9c.272-.48.896-.64 1.369-.37l2.234 1.28l-.836-3.09c-.15-.55.182-1.11.735-1.26s1.117.18 1.268.73l1.368 5.08l2.305 1.32a5.07 5.07 0 0 1 2.747-1.59V8.47L11.74 4.75a1.034 1.034 0 0 1 0-1.46a1.05 1.05 0 0 1 1.469 0l2.274 2.26V3a1.006 1.006 0 0 1 2.012 0v2.55l2.274-2.26a1.05 1.05 0 0 1 1.47 0c.402.4.402 1.06 0 1.46l-3.744 3.72v2.63a5.05 5.05 0 0 1 2.737 1.58l2.314-1.33l1.369-5.08c.151-.55.724-.88 1.278-.73c.553.15.886.72.735 1.27l-.836 3.09l2.224-1.27a1.02 1.02 0 0 1 1.379.37a1 1 0 0 1-.363 1.36l-2.223 1.27l3.109.83c.553.15.885.72.734 1.27c-.15.55-.724.88-1.277.73l-5.112-1.36l-2.314 1.33c.17.49.281 1.02.281 1.57s-.11 1.07-.281 1.57zM19.509 16c0-1.657-1.352-3-3.019-3a3.01 3.01 0 0 0-3.019 3c0 1.657 1.352 3 3.019 3a3.01 3.01 0 0 0 3.019-3"/></svg>',link:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M21.148 21.148c-1.62-.43-2.847-.134-4.62.57l-3.41 3.41a4.52 4.52 0 0 1-6.4 0a4.52 4.52 0 0 1 0-6.4l3.41-3.41h.92l2.39-1.87c1.31-.14 2.68.27 3.68 1.28s1.42 2.37 1.28 3.68c.718.783 1.677.95 2.437.19l.872-2.06c-.27-1.54-1-3.02-2.19-4.21a7.86 7.86 0 0 0-4.21-2.19l-2.19-.674l-2.42 1.233c-.86.38-1.67.92-2.38 1.63l-4 4c-3.09 3.09-3.09 8.12 0 11.21s8.12 3.09 11.21 0l4-4a7.9 7.9 0 0 0 1.62-2.39"/><path fill="#bebebe" d="M27.528 4.318c-3.09-3.09-8.12-3.09-11.21 0l-4 4c-.7.71-1.24 1.52-1.62 2.38a8 8 0 0 1 4.62-.57l3.41-3.41a4.52 4.52 0 0 1 6.4 0c1.76 1.77 1.77 4.64 0 6.4l-3.41 3.41l-.59.59c-.76.76-1.73 1.17-2.72 1.28c-1.31.14-2.68-.27-3.68-1.28s-1.42-2.37-1.28-3.68c-1 .11-1.96.52-2.72 1.28l-.59.59c.27 1.54 1 3.02 2.19 4.21a7.86 7.86 0 0 0 4.21 2.19a7.99 7.99 0 0 0 7-2.2l4-4c3.08-3.07 3.08-8.1-.01-11.19"/></g></svg>',"red-question-mark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f8312f" d="M13.037 20.863c0 1.302 1.145 2.36 2.555 2.36s2.556-1.058 2.556-2.37V19.15c0-.111.073-.209.18-.242C21.676 17.85 24 14.919 24 11.562v-1.254c0-4.239-3.69-7.773-8.227-7.861c-2.28-.05-4.432.744-6.065 2.212c-1.622 1.469-2.523 3.447-2.523 5.552c0 1.311 1.155 2.369 2.566 2.369s2.555-1.058 2.555-2.36c0-.822.35-1.596.986-2.173a3.4 3.4 0 0 1 2.375-.872c1.78.04 3.223 1.45 3.223 3.143v1.244c0 1.468-1.124 2.731-2.683 2.996c-1.834.313-3.17 1.791-3.17 3.514zM15.5 30a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/></svg>',"speaker-high-volume":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#83cbff" d="M23.506 7.975a1 1 0 0 1-.506-.87a1 1 0 0 1 1.506-.86A11 11 0 0 1 30 15.768c0 4.07-2.21 7.622-5.495 9.524a1 1 0 0 1-1.506-.862c0-.359.194-.687.505-.867a9 9 0 0 0 1.86-1.43a8.94 8.94 0 0 0 2.635-6.46a9 9 0 0 0-4.493-7.698m.166 2.653a7 7 0 0 1 2.245 4.924a6.96 6.96 0 0 1-2.241 5.354c-.64.592-1.676.141-1.676-.73c0-.28.112-.55.317-.74a4.98 4.98 0 0 0 1.604-3.668c0-1.45-.618-2.754-1.604-3.667a.97.97 0 0 1-.317-.713v-.028c0-.869 1.035-1.322 1.672-.732"/><path fill="#b4acbc" d="M8.012 23h-4.21C2.808 23 2 22.153 2 21.108V10.892C2 9.847 2.807 9 3.803 9h4.21L19 13a3 3 0 1 1 0 6z"/><path fill="#cdc4d6" d="m16.61 26.83l-8.612-3.829V9.019l8.05-3.788c1.122-.528 2.988.024 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.527"/></g></svg>',"muted-speaker":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M7.803 23h4.21l1-7l-1-7h-4.21C6.807 9 6 9.847 6 10.892v10.216C6 22.153 6.807 23 7.803 23M26 16.023a3.055 3.055 0 1 1-6.11 0a3.055 3.055 0 0 1 6.11 0"/><path fill="#d3d3d3" d="m20.61 26.83l-8.612-3.829V9.02l8.05-3.787c1.122-.529 2.988.023 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.526"/><path fill="#f8312f" d="M24.97 26.652L5.15 6.832A1.19 1.19 0 0 1 6.83 5.15l19.82 19.82a1.19 1.19 0 0 1-1.682 1.682"/></g></svg>',"musical-note":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#402a32" d="M29.41 2.869c0-.53-.46-.93-.98-.86l-16.97 2.2c-.43.06-.76.43-.76.87v13.61c-.59-.2-1.23-.32-1.89-.32c-3.21 0-5.81 2.61-5.81 5.82s2.6 5.81 5.81 5.81s5.81-2.6 5.81-5.81c0-.12-.01-.25-.01-.37v-13.9c0-.39.29-.71.67-.76l9.35-1.21c.46-.06.87.3.87.76v6.53a5.808 5.808 0 0 0-7.71 5.49c0 3.21 2.6 5.81 5.81 5.81s5.81-2.6 5.81-5.81z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M12.847 3.834A2 2 0 0 1 14.84 2h2.32a2 2 0 0 1 1.993 1.834l.235 2.825a.5.5 0 0 0 .821.34l2.164-1.831a2 2 0 0 1 2.706.112l1.64 1.64a2 2 0 0 1 .113 2.707l-1.83 2.163a.5.5 0 0 0 .34.822l2.824.235A2 2 0 0 1 30 14.84v2.32a2 2 0 0 1-1.834 1.993l-2.825.235a.5.5 0 0 0-.34.821l1.831 2.164a2 2 0 0 1-.112 2.706l-1.64 1.64a2 2 0 0 1-2.707.113l-2.164-1.83a.5.5 0 0 0-.82.34l-.236 2.824A2 2 0 0 1 17.16 30h-2.32a2 2 0 0 1-1.993-1.834l-.235-2.825a.5.5 0 0 0-.822-.34l-2.163 1.831a2 2 0 0 1-2.706-.112l-1.64-1.64a2 2 0 0 1-.113-2.707l1.83-2.164a.5.5 0 0 0-.34-.82l-2.824-.236A2 2 0 0 1 2 17.16v-2.32a2 2 0 0 1 1.834-1.993l2.825-.235a.5.5 0 0 0 .34-.822L5.168 9.628A2 2 0 0 1 5.28 6.92l1.64-1.64a2 2 0 0 1 2.707-.113l2.163 1.83a.5.5 0 0 0 .822-.34zM21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"/><path fill="#998ea4" d="M24 16a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-3.5 0a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"/><path fill="#cdc4d6" d="M10.5 16a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"/></g></svg>',house:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" fill-rule="evenodd" d="M10 8.834V3.523A.53.53 0 0 0 9.467 3H6.543A.53.53 0 0 0 6 3.523v8.646l-1 .833v16h22v-15L16.07 3.772z" clip-rule="evenodd"/><path fill="#8c5543" d="M15.92 27.003H8.08c-.04 0-.08-.04-.08-.08v-10.53c0-.75.61-1.36 1.36-1.36h5.29c.75 0 1.36.61 1.36 1.36v10.53c-.01.04-.05.08-.09.08"/><path fill="#402a32" d="M14.5 21.002a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"/><path fill="#d3d3d3" d="M15.96 28.002H8c-.55 0-1-.45-1-1s.45-1 1-1h7.96c.55 0 1 .45 1 1s-.45 1-1 1"/><path fill="#00f397" d="M30 29.002H2v-.09c0-1.06.85-1.91 1.91-1.91h24.18c1.05 0 1.91.85 1.91 1.91z"/><path fill="#f8312f" d="m16.88 2.353l12.76 12.57c.48.47.48 1.23 0 1.69c-.47.47-1.24.47-1.72 0l-11.9-11.72l-11.94 11.76c-.47.47-1.24.47-1.72 0s-.48-1.23 0-1.7l12.8-12.6c.47-.47 1.24-.47 1.72 0"/><path fill="#83cbff" d="M23.14 21.002h-4.28c-.48 0-.86-.38-.86-.86v-4.28c0-.47.38-.86.86-.86h4.28c.47 0 .86.38.86.86v4.28c0 .48-.38.86-.86.86"/></g></svg>',"world-map":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fff" d="M2.52 6.84L8.97 5l.53 11.5l-.53 11.49l-6.12 1.99a.684.684 0 0 1-.85-.66V7.5c0-.31.22-.58.52-.66M15.98 7l6.99-2l.53 11.5l-.51 11.5l-7.01 2L15 18.5z"/><path fill="#e6e6e6" d="M15.98 7L8.97 5v22.99L15.98 30zm13.42-.16L22.97 5v23l6.09 1.98c.43.11.85-.22.85-.66V7.5c0-.31-.21-.58-.51-.66"/><path fill="#00a6ed" d="M3.95 8.34L8.97 7L10 16.5L8.97 26l-4.66 1.42a.687.687 0 0 1-.87-.66V9c0-.31.21-.58.51-.66M15.94 9l7.03-1.98L24 16.5l-1.03 9.49l-7.03 2L15 18.5z"/><path fill="#0074ba" d="M15.94 9L8.97 7.02v18.97l6.97 2zm12-.66l-4.97-1.32v19l4.61 1.42c.44.12.87-.21.87-.66V9c0-.31-.21-.58-.51-.66"/><path fill="#00d26a" d="m14.32 17.64l.53-.53c.072-.063.16-.101.242-.138l.028-.012h.43c.22 0 .4-.18.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4-.18-.4-.4v-1.19c0-.22.18-.4.4-.4h.19c.22 0 .4-.18.4-.4v-.19c0-.22.18-.4.4-.4h1.44c.1 0 .2-.03.27-.1l1.75-1.57c.08-.08.13-.19.13-.3v-.03c0-.55.45-1 1-1h.4c.33 0 .6.27.6.6c0 .22.18.4.4.4h1.19c.22 0 .4-.18.4-.4v-.19c0-.22.18-.4.4-.4h.04c.85 0 1.55.69 1.55 1.55v1.94c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.1c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v1.19c0 .22.18.4.4.4a.4.4 0 0 1 .37.55l-.88 2.19c-.06.15-.21.25-.37.25h-1.12c-.22 0-.4-.18-.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v.19c0 .22-.18.4-.4.4h-.19c-.22 0-.4-.18-.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v.5c0 .06-.01.12-.04.18l-.91 1.83c-.03.06-.04.12-.04.18v1.24c0 .43-.17.84-.47 1.14l-.41.41a.4.4 0 0 1-.29.12h-.43c-.22 0-.4-.18-.4-.4v-2.19c0-.22-.18-.4-.4-.4h-.43a.4.4 0 0 1-.29-.12l-.53-.53c-.22-.22-.35-.53-.35-.85s.12-.62.35-.85m-3.35 5.85c0 .28-.22.5-.5.5c-.27 0-.5-.22-.48-.47v-1.37a.3.3 0 0 0-.09-.22l-.38-.38c-.34-.34-.53-.81-.53-1.29v-1.12a.3.3 0 0 0-.09-.22l-1.25-1.25c-.134-.134-.351-.283-.586-.444c-.499-.343-1.074-.737-1.074-1.146v-2.36c0-.192.165-.367.286-.495c.124-.133.202-.215.004-.215c-.19 0-.37.08-.5.21l-1.26 1.26c-.2.19-.53.06-.53-.22v-.13c0-.08.03-.16.09-.22l.24-.24c.42-.42.66-1 .66-1.6v-.37c0-.38.31-.69.69-.69h.62c.38 0 .69.31.69.69c0 .17.14.31.31.31h.1c.46 0 .9-.19 1.21-.53l.62-.67c.48-.51 1.15-.8 1.85-.8h1.6c.72 0 1.3.58 1.3 1.3c0 .45-.18.88-.5 1.2l-.41.41a.3.3 0 0 0-.09.22v.37c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.19c0 .17-.14.31-.31.31h-.78c-.18 0-.32.14-.31.32l.02.35c.01.17-.13.32-.31.32c-.17 0-.31.14-.31.31v.19c0 .28.22.5.5.5s.5-.22.5-.5s.22-.5.5-.5s.5.22.5.5v.37c0 .08.03.16.09.22l.69.69c.12.12.12.32 0 .44l-.29.29c-.31.31-.74.49-1.18.49c-.17 0-.31.14-.31.31v.19c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.19c0-.17-.14-.31-.31-.31h-.38c-.17 0-.31.14-.31.31v.56c0 .08.03.16.09.22l1.82 1.82c.06.06.14.09.22.09h.44c.28 0 .56.06.81.19l1.17.58c.28.13.45.41.45.72c0 .3-.18.58-.45.72l-.61.31c-.58.29-.94.87-.94 1.52zm11-3.98c0 .31.11.61.3.85l.21.25c.3.37.79.54 1.25.43a.31.31 0 0 0 .24-.3v-.37c0-.16.12-.29.27-.31l.15-.02c.31-.03.58.21.58.52c0 .24.17.46.41.51l.22.05c.19.04.37-.1.37-.3v-.84c0-.55-.45-1-1-1h-.86c-.09 0-.17.04-.23.1l-.37.41a.31.31 0 0 1-.54-.21c0-.17-.14-.31-.31-.31h-.38c-.17.02-.31.16-.31.33zm1.5 4.49c-.28 0-.5-.22-.5-.5v-.67c0-.46.37-.84.83-.84h1.61c.31 0 .56.25.56.56v.95c0 .28-.22.5-.5.5z"/></g></svg>',"framed-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="m2 2l14 3l14-3v28l-14-3l-14 3z"/><path fill="#f3ad61" d="M30 2H2l14 14z"/><path fill="#b97028" d="M30 30H2l14-14z"/><path fill="#aeddff" d="M5 5h22v4.164L18 22L5 19v-3l1.5-3L5 10z"/><path fill="#fff" d="M24.667 10.114A3 3 0 0 1 27 9v6a3 3 0 0 1-2.009-.772a3 3 0 1 1-2.73-3.217a2 2 0 0 1 2.406-.897M5 16v-6c.981 0 1.853.471 2.4 1.2A1 1 0 0 1 9 12a2 2 0 1 1 0 4z"/><path fill="#14a085" d="M8 17.5L5 19v8h22V12c-1.5 0-2.5.5-4 2l-4.5 4.5c-1 1-1.5 1.5-2.5 1l-4-2c-1.6-.8-3.167-.5-4 0"/><path fill="#96c34a" d="M27 26.812V27H5v-.189c2.564-2.579 6.538-4.311 11-4.311s8.436 1.732 11 4.311"/><path fill="#ff822d" d="M19.056 10.185a.75.75 0 0 0 0-1.37a.75.75 0 0 0-.685-1.186a.75.75 0 0 0-1.186-.685a.75.75 0 0 0-1.37 0a.75.75 0 0 0-1.186.685a.75.75 0 0 0-.685 1.186a.75.75 0 0 0 0 1.37a.75.75 0 0 0 .685 1.186a.75.75 0 0 0 1.186.685a.75.75 0 0 0 1.37 0a.75.75 0 0 0 1.186-.685a.75.75 0 0 0 .685-1.186"/><path fill="#f9c23c" d="M18.705 9.5a2.205 2.205 0 1 1-4.41 0a2.205 2.205 0 0 1 4.41 0"/></g></svg>',package:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" d="M15.35 2.143c.32-.19.71-.19 1.02 0l10.92 6.64c.26.16.42.45.42.75L15.86 17.5L4 9.632v-.1c0-.3.16-.59.42-.74z"/><path fill="#ffce7c" d="m15.856 16.246l11.36-6.9a.328.328 0 0 1 .496.282v12.34a1.73 1.73 0 0 1-.83 1.48l-10.64 6.46a.3.3 0 0 1-.087.03a.3.3 0 0 1-.083.011a.9.9 0 0 1-.682-.083h.006L13 19z"/><path fill="#e19747" d="M15.86 29.622v-13.37l-11.35-6.9a.331.331 0 0 0-.51.28v12.34c0 .61.32 1.17.83 1.48l10.57 6.42a.3.3 0 0 0 .46-.25"/><path fill="#d3d3d3" d="M14.5 26.782v-1.96c0-.23-.12-.44-.31-.56l-2.8-1.69c-.19-.11-.43.02-.43.24v1.96c0 .23.12.44.31.56l2.8 1.69c.19.11.43-.02.43-.24"/><path fill="#8c5543" d="M11.76 16.553v-4.56l-3.28-.22v3.16c0 .1.05.2.14.26l2.68 1.63c.2.11.46-.03.46-.27"/><path fill="#a56953" d="m20.34 4.563l-11.86 7.21l3.28 2l11.86-7.2z"/></g></svg>',skull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M16.028 1c-8.282 0-15 6.715-15 14.995c0 2.773.762 4.743 2.286 6.033c1.262 1.067 2.919 1.554 4.714 1.785V28a3.005 3.005 0 0 0 3 2.999a3 3 0 0 0 2.5-1.345a3 3 0 0 0 2.5 1.345a3 3 0 0 0 2.5-1.345a3 3 0 0 0 2.5 1.345c1.652 0 3-1.347 3-3V23.81c1.794-.234 3.451-.72 4.713-1.787c1.524-1.288 2.287-3.256 2.287-6.029c0-8.28-6.718-14.995-15-14.995"/><path fill="#fff" d="M16.028 2c-7.73 0-14 6.268-14 13.995c0 5.178 2.82 6.568 7 6.918V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-5.087c4.18-.36 7-1.74 7-6.918c0-7.727-6.27-13.995-14-13.995"/><path fill="#402a32" d="M14 16.762C14 19.392 11.987 20 9.5 20S5 19.393 5 16.762S7.013 12 9.5 12s4.5 2.13 4.5 4.762m13 0C27 19.392 24.987 20 22.5 20s-4.5-.607-4.5-3.238S20.013 12 22.5 12s4.5 2.13 4.5 4.762M15.01 21.97h1.97c.5 0 .85-.49.68-.96l-.37-1.08c-.19-.56-.71-.93-1.3-.93s-1.12.38-1.31.93l-.36 1.08c-.16.47.19.96.69.96"/></g></svg>',"party-popper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="m5.05 29.9l1.472-.394l.394-.855l2.55.067l2.653-.71l.598-.926l2.482.102l2.591-.694c1.8-.48 2.41-2.74 1.09-4.06L9.56 13.1c-1.32-1.32-3.58-.72-4.06 1.09l-.773 2.887l.108 2.344l-.88.542l-.79 2.951l.132 2.248l-.863.484l-.344 1.284c-.49 1.8 1.16 3.45 2.96 2.97"/><path fill="#3f5fff" d="M7.8 25.053c-1.48-1.383-2.74-3.047-3.854-5.058l.778-2.904c1.278 2.798 2.716 4.889 4.441 6.5c1.663 1.553 3.633 2.697 6.07 3.583l-3.128.837c-1.602-.797-3.027-1.764-4.306-2.958m-3.514 2.833a12 12 0 0 1-1.855-2.234l.745-2.783c.703 1.49 1.49 2.634 2.476 3.557c.984.92 2.208 1.659 3.838 2.285l-2.989.8a12 12 0 0 1-2.215-1.625"/><path fill="#6d4534" d="M19.11 25.69c1.4-1.4-.34-5.4-3.88-8.94S7.7 11.47 6.3 12.87s.34 5.4 3.88 8.94s7.54 5.27 8.93 3.88"/><path fill="#f70a8d" d="M11.61 7.27a9.73 9.73 0 0 1 .72 7.49a9.7 9.7 0 0 1-3.81 5.2c-.52-.65-.97-1.3-1.35-1.93a7.4 7.4 0 0 0 2.91-3.96c.59-1.91.4-3.93-.54-5.69c-.31-.58-.09-1.29.48-1.59c.58-.31 1.29-.09 1.59.48m10.54 9.443a6.65 6.65 0 0 1 6.454-1.01a1.048 1.048 0 0 0 .732-1.965a8.74 8.74 0 0 0-8.486 1.33a1.048 1.048 0 1 0 1.3 1.645M6.01 9.69a1.16 1.16 0 1 0 0-2.32a1.16 1.16 0 0 0 0 2.32m20.12-1.16a1.16 1.16 0 1 1-2.32 0a1.16 1.16 0 0 1 2.32 0"/><path fill="#f9c23c" d="M12.49 3.96a.96.96 0 1 1-1.92 0a.96.96 0 0 1 1.92 0m12.99 20.45a.97.97 0 1 1-1.94 0a.97.97 0 0 1 1.94 0"/><path fill="#00a6ed" d="M21.63 4.02a.95.95 0 0 0-.58-.24a.99.99 0 0 0-1.04.92c-.07 1.1-.83 3.09-1.12 3.76q-.001.008-.005.015q-.005.008-.005.015q-.08.198-.172.39a2.8 2.8 0 0 0-1.358-.92l-.03-.01c-1.35-.45-2.82.28-3.27 1.64c-.22.66-.17 1.36.14 1.98s.84 1.08 1.5 1.3q.106.036.214.045q.76.206 1.465.015a6 6 0 0 1-.099.41c-.14.52.17 1.06.69 1.2a.98.98 0 0 0 1.2-.69a8.2 8.2 0 0 0 .293-2.482q.78-.98 1.247-2.148l.015-.036c.185-.448 1.158-2.802 1.255-4.374c.01-.31-.12-.6-.34-.79m-4.88 5.79c.275.092.558.246.678.876c-.492.457-.808.407-1.088.314a1 1 0 0 0-.102-.028a.6.6 0 0 1-.288-.292a.58.58 0 0 1-.03-.48c.11-.33.47-.51.8-.4zm1.52 8.35c3.41-.95 6.98-.52 10.06 1.22c.57.33.77 1.04.46 1.6c-.32.57-1.04.77-1.61.45a10.85 10.85 0 0 0-8.27-1c-2.31.64-4.29 2-5.72 3.88c-.61-.42-1.24-.9-1.86-1.44c1.73-2.27 4.14-3.93 6.94-4.71m-1.646-1.175a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0"/></g></svg>',"money-bag":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#f3c07b" d="M17.44 3.385c.33.38.89.45 1.3.16c.8-.57 1.84.29 1.43 1.17l-2.42 2.77h-3.87l-2.44-2.8c-.41-.89.63-1.75 1.43-1.18l.07.05c.41.29.97.21 1.29-.17l.87-1.04a.955.955 0 0 1 1.47 0zM4 21.225c0-6.54 5.3-11.84 11.84-11.84s11.84 5.3 11.83 11.84c0 4.83-3.92 8.75-8.75 8.75h-6.17c-4.83 0-8.75-3.92-8.75-8.75"/><path fill="#8c5543" d="M14.12 7.465h3.44c.61 0 1.11.5 1.11 1.11s-.5 1.11-1.11 1.11h-3.44c-.61 0-1.11-.5-1.11-1.11s.5-1.11 1.11-1.11m1.72 11.88h.07c1.5.04 2.7 1.26 2.7 2.76c0 1.28-.87 2.35-2.05 2.67v1.12c0 .4-.32.72-.72.72s-.72-.32-.72-.72v-1.12a2.77 2.77 0 0 1-2.05-2.67c0-.4.32-.72.72-.72s.72.32.72.72c0 .74.59 1.33 1.32 1.33s1.33-.6 1.33-1.33s-.6-1.33-1.33-1.33h-.07a2.765 2.765 0 0 1-2.69-2.76c0-1.28.87-2.35 2.05-2.67v-1.12c0-.4.32-.72.72-.72s.72.32.72.72v1.12c1.18.32 2.05 1.39 2.05 2.67c0 .4-.32.72-.72.72s-.72-.32-.72-.72c0-.73-.6-1.33-1.33-1.33s-1.33.6-1.33 1.33s.6 1.33 1.33 1.33"/></g></svg>',"check-mark-button":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00d26a" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path fill="#f4f4f4" d="M13.242 23c-.383 0-.766-.143-1.059-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.685 4.601L23.443 9.431a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.058a1.5 1.5 0 0 1-1.059.431"/></g></svg>',"cross-mark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f92f60" d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z"/></svg>',"artist-palette":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fbb8ab" d="M21.993 5.854c-6.707-3.42-14.656-2.1-18.279 3.883S2.398 23.68 8.87 27.517c3.18 1.886 8.312 3.811 10.398 1.244c2.044-2.516-.972-4.11-.268-5.502c1.133-2.24 6.2.699 9.515-2.922c3.734-4.082.009-11.151-6.522-14.483M24 19c-1.745 0-3-1.273-3-3s1.255-3 3-3s3 1.273 3 3s-1.255 3-3 3"/><path fill="#8d65c5" d="M14.25 11a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#f70a8d" d="M8.25 15a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#00d26a" d="M8.25 22a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#3f5fff" d="M13.75 26.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/></g></svg>',"four-leaf-clover":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#008463" d="M20.663 29.841a.875.875 0 0 0 .799-1.557zm.799-1.557c-2.708-1.39-3.811-3.233-4.277-5.269c-.49-2.143-.279-4.44-.279-6.89h-1.75c0 2.225-.226 4.881.323 7.28c.573 2.506 1.986 4.795 5.184 6.436z"/><path fill="#00d26a" d="M16.025 9.237c-.095-2.481-.513-5.067-2.134-6.425c-2.253-1.886-5.672.141-5.188 2.922c-3.14-.328-5.257 3.91-2.094 5.907c1.504.948 3.044 1.246 4.85 1.327c-1.827.102-3.381.424-4.9 1.382c-3.162 1.996-1.046 6.234 2.095 5.906c-.485 2.781 2.843 4.693 5.187 2.922c1.447-1.094 1.97-2.979 2.138-4.965c.188 1.986.733 3.871 2.18 4.965c2.344 1.771 5.671-.14 5.187-2.922c3.14.328 5.257-3.91 2.094-5.906c-1.506-.95-3.074-1.275-4.905-1.38c1.83-.077 3.385-.37 4.905-1.33c3.163-1.995 1.047-6.234-2.094-5.906c.484-2.78-2.935-4.808-5.187-2.922c-1.621 1.358-2.04 3.944-2.134 6.425"/></g></svg>',"shooting-star":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M26.33 30H5.67C3.64 30 2 28.36 2 26.33V5.67C2 3.64 3.64 2 5.67 2h13.646l5.651 2.038l3.044 2.17L30 13.63v12.7c0 2.03-1.64 3.67-3.67 3.67"/><path fill="#e1d8ec" d="M8.99 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M5.49 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m19.5 11.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-1 4a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M4.49 25a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m23.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"/><path fill="#a38439" d="M30 5.67C30 3.64 28.36 2 26.33 2h-7.04L9.25 11.6L19.64 24L30 13.64z"/><path fill="#fcd53f" d="m11.03 11.82l2.08 1.87c.39.35.92.48 1.43.35l2.72-.69c1.23-.31 2.3.89 1.84 2.08l-1.09 2.82c-.18.46-.13.98.14 1.4l1.61 2.55c.7 1.1-.19 2.52-1.48 2.38l-2.65-.28a1.56 1.56 0 0 0-1.39.59l-1.64 2.1c-.8 1.03-2.43.68-2.74-.59l-.72-2.93a1.58 1.58 0 0 0-.91-1.07l-2.79-1.17c-1.17-.49-1.3-2.1-.22-2.77l2.39-1.48c.44-.27.72-.75.74-1.27l.1-2.79c.03-1.32 1.59-1.98 2.58-1.1"/></g></svg>',"lady-beetle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#212121" d="M13.57 1.75a.5.5 0 0 0-.865.5l1.429 2.472a6.96 6.96 0 0 0-5.08 6.22L7.827 9.71c-.21-.21-.33-.49-.33-.79v-2a.749.749 0 1 0-1.5 0v2c0 .7.27 1.36.77 1.86l2.45 2.45q.035.031.07.059a6.96 6.96 0 0 0 5.71 5.031v11.1c.33.03.66.05 1 .05s.67-.02 1-.05v-11.1a6.96 6.96 0 0 0 5.706-5.014a1 1 0 0 0 .075-.066l2.45-2.45c.5-.5.77-1.16.77-1.86v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 .31-.12.59-.33.8l-1.226 1.226a6.96 6.96 0 0 0-5.245-6.277L19.1 2.25a.5.5 0 1 0-.865-.5l-1.59 2.75a7 7 0 0 0-1.474.019zm15.148 14.41c.15.15.34.22.53.22s.38-.08.53-.22c.29-.29.29-.77 0-1.06l-.67-.67c-.62-.62-1.44-.96-2.32-.96h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.75c.47 0 .92.18 1.26.52zm-1.47 13.28c-.41 0-.75-.34-.75-.75V26.6c0-.62-.24-1.2-.68-1.64l-2.56-2.56a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.72.72 1.12 1.68 1.12 2.7v2.09c0 .41-.34.75-.75.75m-21.75-.77c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.09c0-1.02.4-1.98 1.12-2.7l2.56-2.56c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.56 2.56a2.3 2.3 0 0 0-.68 1.64zm-2.22-12.53c-.15.15-.34.22-.53.22s-.38-.08-.53-.22a.754.754 0 0 1 0-1.06l.67-.67c.62-.62 1.44-.96 2.32-.96h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75c-.47 0-.92.18-1.26.52z"/><path fill="#f8312f" d="M15.5 9.46H9.318q-.001.007-.005.01q-.005.003-.005.01c-1 .755-1.868 1.674-2.563 2.717L8 15l-2.992 1.71a11 11 0 0 0-.12 1.64c0 5.8 4.44 10.56 10.11 11.07q.25.023.502.036zm1 19.996q.25-.013.497-.036c5.67-.51 10.11-5.27 10.11-11.07q-.001-.823-.116-1.613L24 15l1.253-2.8a11.1 11.1 0 0 0-2.565-2.72v-.02H16.5z"/><path fill="#212121" d="M19.898 14.92a3.9 3.9 0 1 1-7.8 0a3.9 3.9 0 0 1 7.8 0m-7.01 7.15a2.64 2.64 0 1 1-5.28 0a2.64 2.64 0 0 1 5.28 0m-6.07-9.88h-.07c-.9 1.34-1.51 2.89-1.75 4.55c.47.45 1.11.72 1.82.72c1.46 0 2.64-1.18 2.64-2.64s-1.18-2.63-2.64-2.63m18.42 0c.9 1.34 1.51 2.88 1.75 4.55c-.47.45-1.11.72-1.82.73c-1.46 0-2.64-1.18-2.64-2.64s1.18-2.64 2.64-2.64zm-3.49 12.52a2.64 2.64 0 1 0 0-5.28a2.64 2.64 0 0 0 0 5.28m-4.29 1.45a1.46 1.46 0 1 1-2.92 0a1.46 1.46 0 0 1 2.92 0"/></g></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff822d" d="M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.94 2.94 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.94 2.94 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.94 2.94 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.94 2.94 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.94 2.94 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.94 2.94 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.94 2.94 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.94 2.94 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.94 2.94 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.94 2.94 0 0 0 3.249-1.055"/><path fill="#fcd53f" d="M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83s-6.72-9.29-3.83-14.294s9.29-6.72 14.294-3.83s6.72 9.29 3.83 14.294"/></g></svg>',key:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f9c23c" d="M16.248 4.526c2.662-2.69 6.868-3.384 10.038-1.34c4.436 2.851 4.894 8.935 1.396 12.47c-2.31 2.34-5.724 2.927-8.59 1.765a751 751 0 0 0-3.592 3.604a.96.96 0 0 1-.92.22c-.41-.12-.84-.12-1.3.03c-.53.18-.89.81-.87 1.1c.04.63-.06.9-.34 1.19c-.282.296-.58.327-.893.36c-.365.038-.749.078-1.147.54c-.4.47-.47 1.18-.33 1.71c.08.31-.02.68-.3.96c-.5.5-1.86 1.84-1.86 1.84c-1.03 1.03-2.65 1.34-3.91.61a3.205 3.205 0 0 1-.7-5.05l11.69-11.68a10 10 0 0 1-.285-.785c-.848-2.659-.04-5.57 1.913-7.544m7.636 1.3a1.886 1.886 0 0 0 0 2.638a1.84 1.84 0 0 0 2.611 0a1.886 1.886 0 0 0 0-2.638a1.84 1.84 0 0 0-2.611 0"/></svg>',"hourglass-done":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#83cbff" d="M25 6.4V3.9l-9-.4l-9 .4v2.5c0 4 2.8 7.3 6.5 8.2c.3.1.5.4.5.7v1.2c0 .3-.2.6-.5.6C9.8 18 7 21.3 7 25.3V28l9 1l9-1v-2.7c0-4-2.8-7.3-6.5-8.2c-.3-.1-.5-.3-.5-.6v-1.2c0-.3.2-.6.5-.6c3.7-1 6.5-4.3 6.5-8.3"/><path fill="#9b9b9b" d="M7 4h18c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1m0 26h18c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1"/><path fill="#ffb02e" d="M17 19.4v-4.3c0-.7.5-1.2 1.1-1.4c1.7-.4 3.2-1.4 4.3-2.7c.7-.8.1-2-.9-2h-11c-1 0-1.6 1.2-.9 2c1.1 1.3 2.6 2.2 4.3 2.7c.7.2 1.1.7 1.1 1.4V19c0 .7-.3 1-.6 1.1c-3.7.7-6.4 3.5-6.4 6.8V28h16v-1.1c0-3.3-2.7-6.1-6.4-6.8c-.3 0-.6-.3-.6-.7"/><path fill="#fff" d="M21.5 5.8c0-.5.4-.9.9-.9c.6.1 1 .5.9.9c-.1 1.6-.5 3-1.3 4.2c-.8 1.4-2 2.4-3.4 2.9c-.5.2-1 0-1.2-.5s0-1 .5-1.2c2.4-.9 3.4-3.5 3.6-5.4m0 20.1c0 .5.4.9.9.9c.6 0 1-.5.9-.9c-.1-1.6-.5-3-1.3-4.2c-.8-1.4-2-2.4-3.4-2.9c-.5-.2-1 0-1.2.5s0 1 .5 1.2c2.4.9 3.4 3.5 3.6 5.4"/></g></svg>',mushroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ffce7c" d="M10.992 25.309L13.5 18.5H18l2.831 6.724A2 2 0 0 1 18.988 28h-6.12a2 2 0 0 1-1.876-2.691"/><path fill="#f8312f" d="M4 16c0-2.27.63-4.394 1.727-6.205L9.5 8l3.258-3.557A12 12 0 0 1 16 4c1.626 0 3.176.323 4.59.91l2.91 5.59l4.455 4.456Q28 15.472 28 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path fill="#fbb8ab" d="M12.79 4.434q.079.436.08.896c0 2.74-2.23 4.96-4.97 4.97a4.9 4.9 0 0 1-2.173-.506a12.03 12.03 0 0 1 7.062-5.36m7.784.468A6.6 6.6 0 0 0 19.43 8.63a6.632 6.632 0 0 0 8.528 6.353c-.384-4.567-3.324-8.406-7.385-10.081M14.94 17.04a2.74 2.74 0 1 0 0-5.48a2.74 2.74 0 0 0 0 5.48"/></g></svg>',"evergreen-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.157 30h-6.311c-.536 0-.943-.608-.826-1.243L12.535 26h6.933l.514 2.757c.108.635-.289 1.243-.825 1.243"/><path fill="#44911b" d="m14.877 6.714l-2.699 5.127c-.504.952.12 2.159 1.128 2.159h.602C11.747 14 10 15.592 10 17.561c0 .8.71 1.439 1.579 1.439h.144C9.116 19 7 21.227 7 23.971C7 25.649 8.294 27 9.878 27h12.244C23.716 27 25 25.639 25 23.971C25.01 21.227 22.894 19 20.277 19h.144C21.3 19 22 18.352 22 17.561C22 15.601 20.253 14 18.092 14h.602c1.007 0 1.632-1.196 1.128-2.16l-2.7-5.126c-.493-.952-1.741-.952-2.245 0"/></g></svg>',"deciduous-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M18 22.24h-4v7.78h4z"/><path fill="#44911b" d="M25.9 15.2c.38-.76.6-1.62.6-2.53c0-2.91-2.19-5.3-5-5.63V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v.04a5.662 5.662 0 0 0-4.4 8.16c-1.26.94-2.1 2.43-2.1 4.12c0 2.84 2.32 5.16 5.16 5.16h12.68c2.84 0 5.16-2.32 5.16-5.16c0-1.69-.84-3.18-2.1-4.12"/></g></svg>',tulip:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M16.83 20.16h-2v8.253c-.748-1.858-2.56-3.183-4.68-3.183H8.08a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.793v-.007a.3.3 0 0 0 .12.027h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.919.017-3.59 1.365-4.1 3.197z"/><path fill="#f70a8d" d="M20.83 19.26H10.81v-6.02c0-3.71 1.48-7.26 4.1-9.87l.01-.01c.48-.48 1.26-.48 1.74 0c2.67 2.62 4.17 6.21 4.17 9.95z"/><path fill="#ff6dc6" d="M24.64 4.11c0-.58-.37-1.08-.83-1.09c-3.27-.02-6.08 4.77-7.32 9.46c-.22.83-1.12.81-1.34-.02c-1.23-4.67-4.03-9.44-7.29-9.44c-.47 0-.85.49-.85 1.09v6.21L7 10.31c0 .39.02.78.05 1.16c.08 1.1.29 3.08.62 4.05c1.32 4.09 4.47 6.03 8.16 6.03c3.41 0 6.37-1.54 7.83-5.15c.63-1.46.99-4.06.99-5.84z"/></g></svg>',sunflower:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#44911b" d="M17.107 19.75h-2v8.228c-.755-1.844-2.56-3.158-4.67-3.158h-2.07a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.783v-.006a.3.3 0 0 0 .12.026h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.92.017-3.59 1.365-4.1 3.197z"/><path fill="#fcd53f" d="M23.847 11.78c1.91.53 3.23 1.6 3.1 2.67s-1.66 1.78-3.63 1.84c1.32 1.48 1.85 3.1 1.15 3.93c-.69.82-2.36.58-4.04-.45c.3 1.96-.15 3.61-1.18 3.92s-2.3-.8-3.15-2.58c-.82 1.81-2.08 2.95-3.12 2.65c-1.03-.3-1.5-1.93-1.24-3.88c-1.67 1.07-3.35 1.34-4.06.52s-.21-2.43 1.07-3.93c-1.99-.02-3.54-.71-3.69-1.78s1.15-2.15 3.04-2.71c-1.66-1.09-2.58-2.52-2.13-3.49c.47-1 2.21-1.2 4.15-.58c-.83-1.85-.84-3.61.09-4.19c.89-.56 2.38.15 3.64 1.6c.34-1.89 1.25-3.25 2.31-3.22c.98.01 1.8 1.21 2.13 2.91c1.19-1.27 2.53-1.86 3.37-1.35c.92.55.95 2.24.19 4.06c1.89-.6 3.58-.42 4.05.55c.47.96-.42 2.4-2.05 3.51"/><path fill="#8c5543" d="M16 19a5.861 5.861 0 1 0 0-11.722A5.861 5.861 0 0 0 16 19"/><path fill="#6d4534" d="m21.118 10.281l-.8.8l1.117 1.117l.295-.295a5.9 5.9 0 0 1 .071 2.076l-.366-.366l-1.114 1.114l.96.958a5.9 5.9 0 0 1-2.462 2.594l-1.027-1.023l-1.106 1.106l.515.515a5.9 5.9 0 0 1-2.437-.008l.508-.507l-1.117-1.117l-1.013 1.012a5.9 5.9 0 0 1-1.916-1.717l1.11 1.11l1.112-1.112l-1.112-1.112l-1.112 1.112a6 6 0 0 1-.523-.891l.928-.928l-1.112-1.112l-.325.325a5.9 5.9 0 0 1 .07-1.994l.255.255l1.096-1.095l-.762-.76q.245-.45.564-.85l.905.902l1.12-1.12l-.88-.877a6 6 0 0 1 .885-.53l.702.7l1.12-1.12l-.107-.105a6 6 0 0 1 1.633-.007l-.113.113l1.112 1.112l.716-.716q.47.224.89.523l-.899.9l1.112 1.111l.935-.935q.322.395.572.842m-.392 6.264l-1.113-1.111l-1.114 1.115l1.114 1.11zM11.224 12.9l1.112 1.112l1.098-1.099l-1.113-1.11zm1.804-1.804l1.114 1.11l1.118-1.118l-1.112-1.111zm1.827-1.826l1.112 1.11l1.118-1.117l-1.112-1.112zm1.82 1.817l1.113 1.11l1.116-1.115l-1.112-1.112zm-1.825 1.825l1.114 1.11l1.116-1.117l-1.112-1.11zm-1.807 1.807l1.112 1.112l1.102-1.102l-1.114-1.11zm7.685-1.814L19.61 11.79l-1.116 1.115l1.118 1.116zm-1.822 1.822l-1.118-1.116l-1.116 1.117l1.119 1.115zm-1.822 1.823l-1.12-1.115l-1.102 1.103l1.117 1.117z"/></g></svg>',blossom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M17.096 19.84h-2v8.409c-.708-1.939-2.562-3.339-4.74-3.339h-2.07a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.808a.3.3 0 0 0 .105.02h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.85.016-3.468 1.27-4.04 3z"/><path fill="#d3d3d3" d="M16.055 2c-2.35 0-4.19 2.02-3.97 4.36l.18 1.91l-1.98-.68a3.98 3.98 0 0 0-5.17 2.82c-.55 2.25.92 4.49 3.21 4.88l1.78.3l-1.46 1.8a3.984 3.984 0 0 0 .88 5.83c1.92 1.29 4.54.67 5.69-1.34l.91-1.45l.74 1.45a3.995 3.995 0 0 0 5.69 1.34c1.95-1.31 2.36-4.01.88-5.83l-1.44-1.78l1.9-.32a3.993 3.993 0 0 0 3.21-4.88a3.99 3.99 0 0 0-5.18-2.82l-2 .69l.14-2.01c.13-2.3-1.7-4.27-4.01-4.27"/><path fill="#ffb02e" d="M15.996 17.36a3.78 3.78 0 1 0 0-7.56a3.78 3.78 0 0 0 0 7.56"/></g></svg>',"spiral-shell":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="m6.773 3.614l-.379.36a2.43 2.43 0 0 0-2.065-.708l-1.307.76v4.102l10.014 20.18L26 29.897l.848-.002c3.951-3.77 4.143-10.032.375-13.99l-1.812-1.9a7.5 7.5 0 0 0-2.048-4.57a7.48 7.48 0 0 0-6.188-2.277l-1.622-1.703a3.477 3.477 0 0 0-4.791-.265l.291-.305l-1.14-1.2c-.84-.88-2.25-.92-3.14-.07"/><path fill="#212121" d="m22.781 25.6l2.662 2.794c3.2-3.05 3.32-8.11.27-11.3l-.524-.55a7.46 7.46 0 0 1-2.086 3.52a4.06 4.06 0 0 0-.322 5.537"/><path fill="#9b9b9b" d="M4.375 9c-.276-1.474 2.256-4.406 3.862-5.999a2.2 2.2 0 0 0-1.464.613L3.981 6.27c-.848-1.033-.167-2.355.392-3.009A2.44 2.44 0 0 0 2.86 7.337l-.166.157c-.89.85-.93 2.26-.08 3.15l1.187 1.25a3.51 3.51 0 0 0 .293 4.48L5.88 18.25a9.802 9.802 0 0 0 9.644 11.664l10.688-.019c-5.3-.698-13.53-3.33-14.586-8.895c-1.367-7.207 3.566-11.944 9.887-12.982a7.54 7.54 0 0 0-4.77-.804L7.257 15.43c-.517-.571-1.08-1.544-1.006-2.805c.1-1.7 4.79-6.207 7.124-8.25a3.45 3.45 0 0 0-2.76.95l-5.573 5.31c-.262-.326-.518-.844-.666-1.635"/></g></svg>',"tropical-fish":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#635994" d="M3.39 18.945a1.055 1.055 0 1 0-.671 0a1.055 1.055 0 1 0 .672 0"/><path fill="#f9c23c" d="M23 7h-8.625v23H23a3 3 0 0 0 3-3v-8.058c.002 2.404 1.438 4.152 2.656 4.152c.975 0 1.282-.688 1.313-1.032V16.75c0-1.425-.313-1.656-.875-1.656c-1.995 0-2.983 2.013-3.094 3.363V10a3 3 0 0 0-3-3"/><path fill="#00a6ed" d="M14.5 30C20.851 30 26 24.851 26 18.5S20.851 7 14.5 7a11.46 11.46 0 0 0-7.8 3.05l-.073 16.833A11.46 11.46 0 0 0 14.5 30"/><path fill="#8d65c5" d="M6.627 26.883A11.47 11.47 0 0 1 3 18.5a11.47 11.47 0 0 1 3.7-8.45a10.8 10.8 0 0 1 3.988 8.388c0 3.417-1.586 6.464-4.06 8.445"/><path fill="#f9c23c" d="M18 21.452v-5.874a.7.7 0 0 0-1.174-.516l-2.997 2.754a1 1 0 0 0 .01 1.482l2.995 2.676A.7.7 0 0 0 18 21.452"/><path fill="#1c1c1c" d="M8.172 16.516a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0"/></g></svg>',lollipop:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" d="M15.236 15.79a1.75 1.75 0 0 1 2.474-.054l11.75 11.25a1.75 1.75 0 0 1-2.42 2.528l-11.75-11.25a1.75 1.75 0 0 1-.054-2.474"/><path fill="#5092ff" d="M3.386 6.918a10.05 10.05 0 0 1 3.75-3.658C13.351 6.72 12 12 12 12C9.96 8.791 8.015 7.264 3.386 6.918"/><path fill="#00d26a" d="M2 11.907a9.95 9.95 0 0 1 1.417-5.042C10.297 6.967 12 12 12 12c-3.333-1.748-5.71-2.094-10-.093"/><path fill="#fcd53f" d="M3.293 16.921A9.96 9.96 0 0 1 2 11.844C8.01 8.494 12 12 12 12c-3.783.095-6.017 1.146-8.707 4.921"/><path fill="#ff9f2e" d="M6.921 20.616a10.05 10.05 0 0 1-3.66-3.75C6.79 10.959 12 12 12 12c-3.22 1.904-4.58 4.027-5.079 8.616"/><path fill="#f837a2" d="M6.865 20.583C6.967 13.703 12 12 12 12c-1.827 3.297-2.028 5.775-.093 10a9.95 9.95 0 0 1-5.042-1.417"/><path fill="#c790f1" d="M11.844 21.999C8.494 15.99 12 12 12 12c.173 3.837 1.18 6.105 4.92 8.708a9.95 9.95 0 0 1-5.076 1.29"/><path fill="#5092ff" d="M16.866 20.738C10.96 17.211 12 12 12 12c2.095 3.32 3.973 4.747 8.614 5.082a10.05 10.05 0 0 1-3.748 3.656"/><path fill="#00d26a" d="M20.583 17.135C13.703 17.033 12 12 12 12c3.342 1.803 5.852 2.093 10 .094a9.95 9.95 0 0 1-1.417 5.04"/><path fill="#fcd53f" d="M21.999 12.156L22 12a9.96 9.96 0 0 0-1.292-4.92C18.038 10.964 15.792 11.881 12 12c0 0 3.991 3.507 9.999.156"/><path fill="#ff9f2e" d="M17.082 3.386a10.05 10.05 0 0 1 3.656 3.748C17.211 13.04 12 12 12 12c3.107-1.928 4.712-3.772 5.082-8.614"/><path fill="#f837a2" d="M17.135 3.417A9.95 9.95 0 0 0 12.096 2c2.141 4.27 1.64 6.836-.096 10c0 0 5.033-1.703 5.134-8.583"/><path fill="#c790f1" d="M12.156 2.001L12 2a9.95 9.95 0 0 0-4.916 1.29C11.228 5.88 12.116 8.218 12 12c0 0 3.507-3.991.156-9.999"/></g></svg>',candy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M13 4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .8-.97 1.2-1.54.64l-.05-.05c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l.05.05C5.2 8.03 4.8 9 4 9c-1.1 0-2 .9-2 2s.9 2 2 2h9z"/><path fill="#fcd53f" d="M19 24.488A9 9 0 0 1 16 25c-.824 0-1.621-.11-2.38-.318a9 9 0 0 0 2.74.308a6.41 6.41 0 0 1 .94-7.17a6.42 6.42 0 0 1 7.69-1.46A9 9 0 0 0 25 16c0 1.052-.18 2.062-.512 3l-.26.21h-1.726c-1.93 0-3.268 1.344-3.268 3.274v1.756z"/><path fill="#fcd53f" d="M24.66 13.54a8.9 8.9 0 0 0-2.57-.38c-2.54 0-4.97 1.09-6.66 2.99a9 9 0 0 0-1.79 3.06a8.8 8.8 0 0 0-.46 3.39c.04.7.16 1.39.36 2.06a9 9 0 0 1-2.344-1.048c-.022-.048-.13-.122-.15-.17c-1.438-3.251-.997-7.248 1.514-10.074c1.84-2.07 4.535-3.184 7.105-3.184c1.308 0 2.506.285 3.723.838c.04.018.183.17.222.188c-.44-.7-.99-1.35-1.63-1.93a8.9 8.9 0 0 0-2.41-1.54c-.074 0-.11.06-.183.062a11.8 11.8 0 0 0-8.59 3.977a12 12 0 0 0-2.389 4.09c-.387 1.142-.55 2.29-.581 3.496c-.002.068-.096.124-.097.192a9 9 0 1 1 16.93-6.017"/><path fill="#f8312f" d="M12.69 13.46a9.3 9.3 0 0 1 6.97-3.13c1.35 0 2.7.29 3.95.88c-.44-.7-.99-1.35-1.63-1.93a8.9 8.9 0 0 0-2.41-1.54c-1.63.01-3.21.35-4.71 1c-1.58.69-2.96 1.7-4.11 2.99c-1.07 1.2-1.87 2.58-2.39 4.09c-.41 1.21-.62 2.47-.63 3.75c.5 1.17 1.26 2.25 2.28 3.15c.38.34.78.64 1.19.9c-1.52-3.28-1.06-7.29 1.49-10.16M19 28c0 1.1.9 2 2 2s2-.9 2-2c0-.8.97-1.2 1.54-.64l.05.05c.78.78 2.05.78 2.83 0s.78-2.05 0-2.83l-.05-.05C26.8 23.97 27.2 23 28 23c1.1 0 2-.9 2-2s-.9-2-2-2h-5.5c-1.93 0-3.5 1.57-3.5 3.5z"/><path fill="#f8312f" d="M17.33 17.835c-1.81 2.03-2.13 4.865-.97 7.155c-.94.04-1.89-.07-2.82-.33c-.2-.67-.39-1.369-.43-2.069c-.07-1.16.124-2.372.494-3.462c.39-1.13.988-2.1 1.788-3a9.04 9.04 0 0 1 6.698-3.02c.88 0 1.74.181 2.57.431c.26.92.37 1.87.33 2.82c-.91-.46-1.91-.655-2.9-.655c-1.76 0-3.49.71-4.76 2.13"/></g></svg>',doughnut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M27.32 14C25.67 9.34 21.22 6 16 6S6.33 9.34 4.68 14H4v4c0 6.63 5.37 12 12 12s12-5.37 12-12v-4zm-6.82 3.64c0 2.21-1.79 4-4 4h-1c-2.21 0-4-1.79-4-4s1.79-4 4-4h1c2.21 0 4 1.79 4 4"/><path fill="#6d4534" d="M16 2C9.37 2 4 7.37 4 14s5.37 12 12 12s12-5.37 12-12S22.63 2 16 2m4.5 12c0 2.21-1.79 4-4 4h-1c-2.21 0-4-1.79-4-4s1.79-4 4-4h1c2.21 0 4 1.79 4 4"/><path fill="#00a6ed" d="M12.85 7.76c-.2.2-.54.2-.74 0l-.79-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54.01.74m-6.61 6.26c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm17 2.74c-.2-.2-.2-.54 0-.74l.78-.78c.2-.2.54-.2.74 0s.2.54 0 .74l-.78.78c-.2.21-.54.21-.74 0m-11.48 5c-.2.2-.54.2-.74 0l-.78-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54 0 .74m9.48-13.74c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0z"/><path fill="#ff6dc6" d="M16.24 6.02c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm7.78 5.74c.2.2.54.2.74 0c.21-.2.21-.54 0-.74l-.78-.78c-.2-.2-.54-.2-.74 0s-.2.54 0 .74zM8.24 9.85c-.2-.2-.2-.54 0-.74l.78-.78c.2-.2.54-.2.74 0s.2.54 0 .74l-.78.78c-.2.2-.54.2-.74 0m6 13.17c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm7.52-2.26c-.2.2-.54.2-.74 0l-.78-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54 0 .74m-11.74-2.91c.2.2.54.2.74 0c.21-.21.21-.54 0-.74l-.78-.78c-.2-.2-.54-.2-.74 0s-.2.54 0 .74z"/></g></svg>',"crescent-moon":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fcd53f" d="M23.41 5.632c.5 2.04.56 4.26.02 6.56c-1.26 5.33-5.64 9.51-11.02 10.48c-2.91.53-5.68.13-8.09-.92c-.56-.25-1.09.39-.8.93c2.65 4.88 8.11 8 14.22 7.19c6.23-.83 11.22-5.91 11.97-12.15c.6-5.18-1.6-9.86-5.28-12.75c-.47-.36-1.16.08-1.02.66"/><path fill="#f9c23c" d="M27.87 12.562a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0m-12.92 12.88a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0m11.85-6.47a.99.99 0 1 0 0-1.98a.99.99 0 0 0 0 1.98m-2 3.01a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></g></svg>',"ringed-planet":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff944c" d="M25.054 16.005a9.027 9.027 0 0 1-10.632 8.885C12.794 23.32 11 22.5 9.17 21.875a9 9 0 0 1-2.143-6.566c1.618-3.006 5.046-6.894 8.176-8.294q.408-.037.825-.037c2.077 0 3.99.701 5.515 1.88c.637 1.589 2.11 4.309 3.365 5.512q.146.796.147 1.635"/><path fill="#fbb8ab" d="M11.957 11.909c-1.8 1.921-3.773 2.959-4.93 3.386a9.03 9.03 0 0 1 8.168-8.28c-.252.869-.94 2.442-3.238 4.894m8.638 8.386c1.904-2.145 3.278-4.157 4.302-5.975a9.03 9.03 0 0 0-3.36-5.466c-.637 1.541-2.353 4.264-5.512 7.486c-2.497 2.547-4.798 4.297-6.87 5.52a9.02 9.02 0 0 0 5.295 3.035c2.355-1.312 4.615-2.877 6.145-4.6"/><path fill="#fcd53f" d="M27.231 4.88c-.453-.527-1.06-.703-1.584-.718c-.496-.015-.99.109-1.425.264c-.875.312-1.86.883-2.811 1.522a37 37 0 0 0-2.198 1.608a9 9 0 0 1 2.452 1.398c.402-.299.803-.585 1.194-.847c.898-.602 1.67-1.03 2.237-1.233l.066-.023c-.027.11-.07.247-.137.42c-.28.72-.84 1.66-1.633 2.754c-1.57 2.169-3.85 4.669-5.909 6.752c-1.996 2.02-4.713 4.43-7.096 6.17c-1.199.875-2.26 1.542-3.074 1.915q-.26.119-.452.185c.125-.34.362-.794.725-1.367c.392-.622.876-1.299 1.402-2.023a9 9 0 0 1-1.414-2.478q-.216.3-.438.603l-.07.098c-.587.805-1.188 1.635-1.679 2.411c-.477.755-.924 1.573-1.119 2.35c-.2.801-.194 1.89.737 2.654c.59.484 1.298.504 1.803.435c.523-.07 1.068-.266 1.588-.504c1.049-.48 2.275-1.267 3.524-2.18c2.515-1.837 5.337-4.341 7.413-6.441c2.092-2.118 4.48-4.728 6.166-7.055c.835-1.155 1.55-2.308 1.95-3.338c.354-.914.677-2.29-.218-3.333M6.758 25.451v.012z"/></g></svg>',rocket:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M29.2 2.95c-.947-.947-2.7-.998-3.818-.425c-.913.314-1.874.667-2.854 1.063l.01.01c-2.575 1.095-6.427 3.04-9.51 5.902c-2.164 2.01-3.404 3.556-4.235 4.965l-5.298 1.95a1 1 0 0 0-.362 1.646l11.138 11.137a1 1 0 0 0 1.645-.362l2.204-5.986c1.608-.958 3.223-2.165 4.908-3.85c2.39-2.39 4.366-6.56 5.513-9.357l.009.008c.4-.99.758-1.961 1.074-2.883c.573-1.118.74-2.654-.424-3.818"/><path fill="#f4f4f4" d="M23.299 4.365c-2.517 1.04-6.478 2.978-9.59 5.868c-2.015 1.87-3.172 3.294-3.94 4.55c-.769 1.255-1.175 2.38-1.663 3.74l-.002.007c-.17.474-.35.977-.559 1.514l4.556 4.556c3.602-1.48 6.74-2.828 10.22-6.307c2.351-2.352 4.339-6.642 5.454-9.421z"/><path fill="#9b9b9b" d="M24.528 11.25a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"/><path fill="#83cbff" d="M23.528 11.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"/><path fill="#ff8257" d="M2.451 29.61C1.744 28.905 2.028 24 4.528 23c0 0 2.5-1 4.11.6c1.612 1.601.89 3.4.89 3.4c-.707 2.121-3.718 2.965-4.071 2.61c-.195-.194.156-.55 0-.706c-.157-.157-.398.022-1.06.353c-.472.236-1.663.637-1.946.354"/><path fill="#533566" d="M6.088 21.06a1.5 1.5 0 0 1 2.122 0l3.535 3.536a1.5 1.5 0 1 1-2.121 2.122l-3.536-3.536a1.5 1.5 0 0 1 0-2.121"/><path fill="#f92f60" d="M15.535 18.722c.442-1.2-.725-2.368-1.926-1.926l-7.114 2.619a1 1 0 0 0-.362 1.646l5.138 5.137a1 1 0 0 0 1.645-.362z"/></g></svg>',snowman:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M23.62 12.155c0 1.072-.215 1.972-.659 2.694a11.18 11.18 0 0 1 3.779 8.386c0 1.544-.314 2.852-.934 3.935c-.623 1.086-1.518 1.883-2.58 2.456c-2.08 1.122-4.845 1.409-7.686 1.409s-5.607-.287-7.686-1.409c-1.062-.573-1.957-1.37-2.58-2.457c-.62-1.082-.934-2.39-.934-3.934c0-3.33 1.456-6.32 3.762-8.372c-.441-.725-.652-1.63-.652-2.708a8.074 8.074 0 0 1 8.08-8.08c4.46 0 8.09 3.616 8.09 8.08"/><path fill="#433b6b" d="M6.5 13.575a.5.5 0 0 0-1 0v1.607l-1.09-.954a.5.5 0 1 0-.659.753l2.35 2.054H4.95a.5.5 0 1 0 0 1h2.24q.025 0 .05-.003l1.67 1.46a.5.5 0 0 0 .658-.754l-3.072-2.685l.003-.058zm18.52-.5a.5.5 0 0 1 .5.5v1.607l1.091-.954a.5.5 0 1 1 .658.753l-2.36 2.064h1.111a.5.5 0 0 1 0 1h-2.256L22.11 19.49a.5.5 0 0 1-.658-.753l3.072-2.685l-.003-.058v-2.42a.5.5 0 0 1 .5-.5"/><path fill="#fff" d="M21.535 14.984c.687-.568 1.085-1.453 1.085-2.83c0-3.91-3.18-7.08-7.09-7.08s-7.08 3.16-7.08 7.08c0 1.39.392 2.278 1.072 2.846a10.19 10.19 0 0 0-4.182 8.235c0 5.63 4.57 6.8 10.2 6.8s10.2-1.17 10.2-6.8c0-3.39-1.657-6.396-4.205-8.251"/><path fill="#0074ba" d="M20.54 24.035h-1.01v.5c0 .26-.22.49-.49.49a.49.49 0 0 1-.49-.49v-.5h-1.03v.49a.49.49 0 0 1-.98 0v-.944a.7.7 0 0 1-.03-.196v-5.35h5.03v5.35q0 .084-.02.161v.989c0 .26-.22.49-.49.49a.49.49 0 0 1-.49-.49z"/><path fill="#0084ce" d="M8.815 14.081c-.256.287-.395.793-.395 1.614c0 3.93 3.19 4.39 7.12 4.39s7.12-.46 7.12-4.39c0-.836-.145-1.345-.41-1.63c-.933 1.941-3.53 1.94-6.585 1.94h-.378c-3.035.001-5.56.002-6.472-1.924"/><path fill="#321b41" d="m9.548 6.359l.293-.844l-.8-.332c-.44-1.03.03-2.22 1.06-2.66l1.81-.78c1.03-.44 2.21.03 2.65 1.06l-.403.846l.912.342l.251-.108a.711.711 0 1 1 .56 1.31l-6.04 2.59a.715.715 0 0 1-.94-.37c-.15-.36.01-.79.38-.94z"/><path fill="#0074ba" d="m15.074 3.99l-5.53 2.37l-.503-1.177l5.53-2.37z"/><path fill="#ff6723" d="m19.69 11.135l-4.06-.42c-.45 0-.81.36-.81.81s.36.81.81.81l4.06-.42c.22 0 .4-.18.4-.4s-.18-.38-.4-.38"/><path fill="#433b6b" d="M14.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"/><path fill="#00a6ed" d="M5.28 9.705h.2c.29 0 .53.24.53.53s-.24.53-.53.53h-.2l.15.13c.2.21.2.54 0 .75c-.21.21-.55.21-.75 0l-.14-.14v.2c0 .29-.24.53-.53.53s-.53-.24-.53-.53v-.2l-.14.15c-.21.21-.55.21-.75 0a.525.525 0 0 1 0-.75l.14-.14h-.2c-.29 0-.53-.24-.53-.53s.24-.53.53-.53h.2l-.15-.14a.525.525 0 0 1 0-.75c.21-.21.55-.21.75 0l.14.15v-.2c0-.29.24-.53.53-.53s.53.24.53.53v.2l.14-.15c.21-.21.54-.21.75 0c.2.21.2.54 0 .75zm22.44.23h-.11l.08-.08c.11-.11.11-.29 0-.4a.284.284 0 0 0-.4 0l-.08.08v-.11c0-.15-.13-.28-.28-.28s-.28.13-.28.28v.11l-.08-.08a.284.284 0 0 0-.4 0c-.11.11-.11.29 0 .4l.08.08h-.11c-.15 0-.28.13-.28.28s.13.28.28.28h.11l-.08.08c-.11.11-.11.29 0 .4s.29.11.4 0l.08-.08v.11c0 .15.13.28.28.28s.28-.13.28-.28v-.11l.08.08c.11.11.29.11.4 0s.11-.29 0-.4l-.08-.08h.11c.15 0 .28-.13.28-.28c0-.16-.12-.28-.28-.28m.96 13.02h.11c.16 0 .28.13.28.28s-.13.28-.28.28h-.11l.08.08c.11.11.11.29 0 .4s-.29.11-.4 0l-.08-.08v.11c0 .15-.13.28-.28.28s-.28-.13-.28-.28v-.11l-.08.08c-.11.11-.29.11-.4 0a.284.284 0 0 1 0-.4l.08-.08h-.11c-.15 0-.28-.13-.28-.28s.13-.28.28-.28h.11l-.08-.08a.283.283 0 0 1 .4-.4l.08.08v-.11c0-.15.13-.28.28-.28s.28.13.28.28v.11l.08-.08a.283.283 0 0 1 .4.4z"/><path fill="#26c9fc" d="M26.28 4.705h.2c.29 0 .53.24.54.52c0 .29-.24.53-.53.53h-.2l.14.14c.2.21.2.54 0 .75c-.21.21-.55.21-.75 0l-.14-.14v.21c0 .29-.24.53-.53.53s-.53-.24-.53-.53v-.2l-.14.14c-.21.21-.55.21-.75 0a.525.525 0 0 1 0-.75l.14-.14h-.2c-.29 0-.53-.24-.53-.53s.24-.53.52-.53h.2l-.14-.14a.525.525 0 0 1 0-.75c.21-.21.55-.21.75 0l.14.14v-.2c0-.29.24-.53.53-.53s.53.24.53.53v.2l.14-.14c.21-.21.54-.21.75 0c.2.21.2.54 0 .75zm-19.59.25h.1c.16 0 .29.13.29.28s-.13.28-.28.28h-.11l.08.08c.11.11.11.29 0 .4s-.29.11-.4 0l-.08-.08v.11c0 .15-.13.28-.28.28s-.28-.13-.28-.28v-.11l-.08.08c-.11.11-.29.11-.4 0a.284.284 0 0 1 0-.4l.08-.08h-.11c-.15 0-.28-.13-.28-.28s.13-.28.28-.28h.11l-.08-.08a.284.284 0 0 1 0-.4c.11-.11.29-.11.4 0l.08.08v-.11c0-.15.13-.28.28-.28s.28.13.28.28v.11l.08-.08c.11-.11.29-.11.4 0s.11.29 0 .4zm-2.03 14.98h-.11l.08-.08c.11-.11.11-.29 0-.4a.284.284 0 0 0-.4 0l-.08.08v-.11c0-.15-.13-.28-.28-.28s-.28.13-.28.28v.11l-.08-.08a.284.284 0 0 0-.4 0c-.11.11-.11.29 0 .4l.08.08h-.11c-.15 0-.28.13-.28.28s.13.28.28.28h.11l-.08.08c-.11.11-.11.29 0 .4s.29.11.4 0l.08-.08v.11c0 .15.13.28.28.28s.28-.13.28-.28v-.11l.08.08c.11.11.29.11.4 0s.11-.29 0-.4l-.08-.07h.11c.15 0 .28-.13.28-.28c0-.16-.13-.29-.28-.29"/></g></svg>',"crystal-ball":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M16 27c6.627 0 12-5.373 12-12S22.627 3 16 3S4 8.373 4 15s5.373 12 12 12"/><path fill="#b4acbc" d="M24 24H8l-.921 4.18c-.333.897.433 1.82 1.512 1.82h14.822c1.078 0 1.834-.923 1.512-1.82z"/><path fill="#fcd53f" d="M14.205 6.264a.5.5 0 0 1-.26-.261l-.38-.897a.19.19 0 0 0-.34 0l-.38.897a.48.48 0 0 1-.26.261l-.48.222a.192.192 0 0 0 0 .343l.48.221c.12.05.21.152.26.262l.38.897a.19.19 0 0 0 .34 0l.38-.897a.48.48 0 0 1 .26-.262l.48-.221a.192.192 0 0 0 0-.343zm9.915 4.54a.73.73 0 0 1-.36-.373l-.54-1.28a.274.274 0 0 0-.49 0l-.54 1.28a.73.73 0 0 1-.36.373l-.68.312c-.2.1-.2.393 0 .494l.68.312c.16.07.29.211.36.373l.54 1.28c.1.2.39.2.49 0l.54-1.28a.72.72 0 0 1 .36-.373l.68-.312c.2-.101.2-.393 0-.494zM12.586 14.03c.139.352.398.636.73.792l1.379.655c.407.215.407.83 0 1.046l-1.378.655c-.324.156-.592.44-.73.792l-1.092 2.707a.54.54 0 0 1-.99 0L9.414 17.97a1.46 1.46 0 0 0-.73-.792l-1.379-.655c-.407-.215-.407-.83 0-1.046l1.378-.655c.324-.156.592-.44.73-.792l1.092-2.707a.54.54 0 0 1 .99 0z"/></g></svg>',castle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M18.73 8.235h-5.42c-.3 0-.5-.32-.36-.59l2.71-5.42a.4.4 0 0 1 .72 0l2.71 5.42c.14.27-.06.59-.36.59M12.348 20H3.652c-.485 0-.802-.417-.58-.773l4.348-8.934c.242-.39.918-.39 1.16 0l4.348 8.934c.221.356-.095.773-.58.773m7.304 0h8.696c.485 0 .802-.417.58-.773l-4.348-8.934c-.242-.39-.918-.39-1.16 0l-4.348 8.934c-.221.356.095.773.58.773"/><path fill="#998ea4" d="M19.391 7h-.447a.6.6 0 0 0-.609.605a.606.606 0 0 1-.609.624h-.285a.6.6 0 0 1-.609-.605a.606.606 0 0 0-.609-.624h-.447a.6.6 0 0 0-.608.605a.606.606 0 0 1-.61.624h-.285a.6.6 0 0 1-.608-.605a.606.606 0 0 0-.61-.624h-.446a.616.616 0 0 0-.609.614v3.811c0 .336.167.575.5.575h.5c-.504 0-1 0-1 1v11h8V13c0-1-.496-1-1-1h.5c.333 0 .5-.239.5-.575V7.614A.6.6 0 0 0 19.39 7"/><path fill="#b4acbc" d="M30 19.198v.39L29.99 30H18.957l-2.99-1.697L12.977 30H2V18.599c0-.333.31-.599.66-.599h.47c.35 0 .63.266.63.599s.28.599.63.599h.289c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .63.266.63.599s.28.599.629.599h.3c.35 0 .63-.267.63-.6s.28-.598.63-.598h.47c.35 0 .629.266.629.599s.28.599.63.599h.31c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.349 0 .629.266.629.599s.28.599.63.599h.29c.35 0 .63-.267.63-.6s.28-.598.63-.598h.499c.35 0 .63.266.63.599s.28.599.63.599h.29c.35 0 .63-.267.63-.6s.279-.598.629-.598h.46c.35 0 .63.266.63.599s.28.599.63.599h.29c.35 0 .629-.267.629-.6s.28-.598.63-.598h.47c.35 0 .63.266.63.599s.28.599.63.599h.289c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .63.266.63.599s.28.599.629.599h.29c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .629.266.629.599z"/><path fill="#5235a6" d="M15 14h2v-1c0-.557-.456-1-1-1c-.557 0-1 .456-1 1zm-2 16h5.99v-3.23c0-1.781-1.33-2.77-2.99-2.77c-1.65 0-3 .979-3 2.77z"/><path fill="#26c9fc" d="M7.5 7.306V9.19c0 .215.212.361.414.293l2.35-1.117a.125.125 0 0 0 0-.226l-2.36-1.127a.312.312 0 0 0-.404.293m16 0V9.19c0 .215.212.361.414.293l2.35-1.117a.125.125 0 0 0 0-.226l-2.36-1.127a.312.312 0 0 0-.404.293"/></g></svg>',"cherry-blossom":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6dc6" d="M26.23 19.766c2.47-.8 3.96-3.19 3.76-5.68a.53.53 0 0 0-.43-.47s-.89-.19-1.09-.23c-.1-.02-.14-.15-.08-.22c.13-.14.75-.84.75-.84c.16-.17.19-.44.07-.64c-1.29-2.13-3.9-3.19-6.38-2.38c-.71.23-1.33.65-1.87 1.18c.34-.68.54-1.39.54-2.14c0-2.6-1.81-4.76-4.24-5.33a.56.56 0 0 0-.59.26s-.46.79-.56.97c-.05.09-.19.08-.23.01c-.1-.17-.56-.98-.56-.98c-.12-.2-.36-.32-.58-.26c-2.42.56-4.24 2.72-4.24 5.32c0 .75.21 1.46.54 2.14c-.54-.53-1.15-.94-1.86-1.17c-2.48-.81-5.09.25-6.38 2.38c-.12.2-.09.46.07.64c0 0 .61.68.75.83c.07.07.02.21-.07.23l-1.1.23c-.23.05-.41.24-.43.47a5.48 5.48 0 0 0 3.76 5.68c.72.23 1.46.26 2.22.14c-.68.35-1.28.81-1.72 1.42c-1.53 2.1-1.33 4.91.3 6.8c.15.18.41.23.63.13c0 0 .83-.37 1.02-.46c.09-.04.2.04.19.13l-.12 1.12c-.02.23.1.47.32.56c2.3.96 5.03.28 6.56-1.82c.44-.61.69-1.3.82-2.05c.13.75.38 1.45.82 2.05c1.53 2.1 4.26 2.78 6.56 1.82c.22-.09.34-.32.32-.56c0 0-.1-.91-.12-1.11c-.01-.1.1-.18.19-.14l1.03.46c.21.1.48.05.63-.13c1.63-1.89 1.83-4.7.3-6.8c-.44-.61-1.04-1.06-1.72-1.42c.76.12 1.5.09 2.22-.14"/><path fill="#fff" d="M16.51 13.252a1 1 0 1 0-1 0v1.284a2.47 2.47 0 0 0-1.648 1.198l-1.224-.397a1 1 0 1 0-.309.951l1.225.397q-.014.134-.014.27c0 .64.243 1.224.643 1.663l-.758 1.043a1 1 0 1 0 .809.588l.757-1.043a2.46 2.46 0 0 0 2.033.002l.752 1.04a1 1 0 1 0 .81-.587l-.753-1.04a2.46 2.46 0 0 0 .632-1.937l1.215-.395a1 1 0 1 0-.31-.951l-1.214.394a2.47 2.47 0 0 0-1.646-1.196z"/></g></svg>',herb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#44911b" d="m8.018 29.6l1.14.39l1.35-3.898l4.02.418c.33.03.63-.21.66-.54a.605.605 0 0 0-.54-.66l-3.733-.39a13.2 13.2 0 0 1 5.09-6.46l4.143.44c.33.03.63-.21.66-.54a.605.605 0 0 0-.54-.66l-2.904-.31a14.4 14.4 0 0 0 4.024-6.03l.38-1.09a.6.6 0 0 0-.37-.77a.6.6 0 0 0-.77.37l-.38 1.09a13.2 13.2 0 0 1-4.046 5.824l-1.704-3.504a.605.605 0 1 0-1.09.53l1.806 3.716l-.006.004a14.4 14.4 0 0 0-5.282 6.59l-1.308-2.69a.605.605 0 1 0-1.09.53l1.83 3.763z"/><path fill="#86d72f" d="M23.978 2c-3.34 1.63-4.74 5.66-3.11 9a6.727 6.727 0 0 0 3.11-9m-8.19 7.05l-1.81-3.72a4.226 4.226 0 0 0-1.95 5.65l1.81 3.72a4.23 4.23 0 0 0 1.95-5.65m-5.43 6.39l-2.32-4.76c-2.68 1.31-3.8 4.54-2.49 7.22l2.32 4.76a5.41 5.41 0 0 0 2.49-7.22m17.56.03l-4.12-.43c-2.32-.25-4.39 1.44-4.64 3.76l4.12.43c2.32.24 4.4-1.44 4.64-3.76m-8.57 6.13l5.27.55a5.403 5.403 0 0 1-5.94 4.81l-5.27-.55a5.403 5.403 0 0 1 5.94-4.81"/></g></svg>',"fallen-leaf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M27.91 8.01c-7.13 0-12.91 5.78-12.97 12.66l.06 8.57c0 .43.37.77.79.74C23.71 29.57 30 23.03 30 15.01v-7z"/><path fill="#ca0b4a" d="M19.06 24.92a.753.753 0 0 1-.61-1.19l9.42-13.21c.42-.59.64-1.29.64-2.01l-.01-3.75a.749.749 0 1 1 1.5 0l.02 3.75c0 1.04-.32 2.04-.92 2.89l-9.42 13.21c-.15.2-.38.31-.62.31"/><path fill="#e19747" d="M14.52 2.01c-4.56.04-8.39 3.89-8.39 8.61V12h4.63c5.31 0 9.65-4.24 9.92-9.47a.495.495 0 0 0-.49-.53zM6.24 17.02c3.13.02 5.76 2.67 5.76 5.91v1.08H8.82c-3.65 0-6.63-3.04-6.82-6.64c-.01-.19.14-.36.34-.36z"/><path fill="#d3883e" d="M17.23 4.47c.06.09.09.19.09.29c0 .16-.07.31-.21.41L8.37 11.4c-.56.4-1.22.61-1.91.61H4.5c-.28 0-.5-.23-.5-.5s.22-.49.5-.49h1.96c.48 0 .94-.15 1.33-.43l8.75-6.24c.22-.16.53-.1.69.12m-5.37 18.54h.63c.26 0 .49.2.51.46c.01.29-.21.53-.5.53h-.64c-.69 0-1.35-.21-1.91-.61l-4.26-3.04a.495.495 0 0 1-.11-.69c.01 0 .01-.01.01-.01c.16-.22.46-.27.68-.11l4.26 3.04c.39.28.85.43 1.33.43"/></g></svg>',"maple-leaf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="m29.716 17.803l-2.32-.44a.212.212 0 0 1-.14-.31l2.16-3.47a.208.208 0 0 0-.19-.32l-4.07.37c-.14.01-.26-.12-.22-.26l.64-2.24a.208.208 0 0 0-.31-.23l-4.35 2.75c-.15.09-.34-.03-.32-.2l1.28-9.33c.02-.17-.16-.3-.31-.2l-3.29 2c-.1.06-.24.02-.29-.08l-1.86-3.73a.208.208 0 0 0-.37 0l-1.86 3.73c-.05.11-.19.15-.29.09l-3.4-2.01c-.15-.09-.34.04-.31.21l1.63 9.32c.03.17-.16.3-.31.21l-4.61-2.77c-.16-.1-.36.05-.31.23l.65 2.26c.04.14-.07.28-.22.26l-4.07-.37c-.17-.02-.28.17-.19.32l2.16 3.47a.2.2 0 0 1-.14.31l-2.32.44c-.18.03-.23.27-.07.38l6.54 4.29c.17.11.21.33.1.5l-1.93 2.75c-.09.13.04.31.19.25l8.38-3.06c.36-.13.76-.13 1.12 0l8.38 3.06c.15.06.29-.12.19-.25l-1.93-2.75a.36.36 0 0 1 .1-.5l6.54-4.29c.17-.12.12-.36-.06-.39"/><path fill="#ca0b4a" d="M15.946 11.273a1 1 0 0 1 1 1v8.12l5.443-2.8a1 1 0 0 1 .915 1.779l-6.358 3.27v6.33a1 1 0 1 1-2 0v-6.33l-6.357-3.27a1 1 0 0 1 .915-1.779l5.442 2.8v-8.12a1 1 0 0 1 1-1"/></g></svg>',"palm-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.04 8.86H13.6V30h5.44z"/><path fill="#86d72f" d="M5 8.16c-.552 0-1.009-.45-.92-.996A6.165 6.165 0 0 1 10.16 2c3.4 0 6.16 2.75 6.16 6.16zm11.32 0h11.32c.552 0 1.008-.45.92-.996A6.16 6.16 0 0 0 22.48 2c-3.4 0-6.16 2.76-6.16 6.16"/><path fill="#44911b" d="M15.636 7.624c.413.263.954.263 1.367 0a6.15 6.15 0 0 1 7.657.846a6.17 6.17 0 0 1 .647 7.949c-.322.448-.964.444-1.354.054l-6.926-6.926a1 1 0 0 0-1.414 0l-6.926 6.926c-.39.39-1.032.394-1.355-.054A6.15 6.15 0 0 1 7.98 8.47a6.175 6.175 0 0 1 7.656-.846"/><path fill="#d3883e" d="M15.55 11.93a2.16 2.16 0 1 1-4.32 0a2.16 2.16 0 0 1 4.32 0m5.86 1.77a2.16 2.16 0 1 1-4.32 0a2.16 2.16 0 0 1 4.32 0"/></g></svg>',shortcake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="m3.627 29.82l24.63-7.068l.787-.724V7.978l-1.022-1.98l-25.95 7.345v14.944c0 1.225.496 1.785 1.555 1.532"/><path fill="#ffdea7" d="m13.034 2.508l-9.97 9.223c-1.946 1.662-.935 2.811.934 2.399l23.026-6.606c.592-.14.966-.186.966.499v4.02c0 .687.064 1.045-.374 1.183c0 0-22.205 6.694-22.683 6.824s-1.54.328-1.87.28c-.329-.048-.747-.28-.934-.28s-.187.108-.187.623v2.167c0 .163.14.268.14.268a2.48 2.48 0 0 0 1.916.307l23.244-6.73c.374-.094.748.156.748.623v5.298c0 .322.195.339.332.322c.992-.286 1.678-.873 1.678-1.881V8.023c0-.853-.617-2.278-2.01-2.71L16.96 2.725c-1.047-.218-3.072-.88-3.926-.218"/><path fill="#f8312f" d="M12.024 4.517c.126-.628.335-2.402 2.516-2.836l2.356 1.207l.858 2.575C16.95 7.624 15.29 7.47 14.627 7.47h-1.963c-.64 0-1.004-.364-.916-1.033z"/><path fill="#86d72f" d="M16.94 4.372c-.44-.495-.32-1.25-.32-1.25s-.714 0-1.062-.38l-1.193-1.235c-.064-.088 0-.183.088-.248c0 0 .701-.531 1.789.16c.602.444 1.746 1.862 2.036 2.458c.527.9-.146 1.673-.146 1.673c-.077.095-.167.122-.276 0z"/></g></svg>',cupcake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6dc6" d="M20.086 5.002c.06.05.112.096.164.148c.47.45.77 1.09.76 1.8c0 .379-.084.738-.235 1.06h.745c1.93 0 3.5 1.56 3.49 3.5a3.5 3.5 0 0 1-.34 1.503a3.504 3.504 0 0 1 3.35 3.497c0 1.93-1.57 3.5-3.5 3.5H7.5c-1.93 0-3.5-1.57-3.5-3.5a3.504 3.504 0 0 1 3.34-3.496a3.5 3.5 0 0 1 3.17-5.004h.736a2.5 2.5 0 0 1-.236-1.06c0-.76.33-1.43.85-1.89l3.03-2.64c.64-.56 1.6-.56 2.24 0l2.93 2.56z"/><path fill="#5092ff" d="M18.29 9.46c-.2.2-.2.51 0 .71c.19.2.51.2.71 0l.74-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zM9.2 13.43c0-.28.22-.5.5-.5h1.05c.28 0 .5.22.5.5s-.22.5-.5.5H9.7c-.28 0-.5-.22-.5-.5m11.67 4.68c.2-.2.2-.51 0-.71l-.74-.74c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l.74.74c.2.2.51.2.71 0"/><path fill="#efd5ff" d="M15.99 6.7c.2.2.51.2.71 0c.2-.19.2-.51 0-.7l-.74-.75c-.2-.2-.51-.2-.71 0s-.2.51 0 .71zm4.75 5.08c.2-.2.51-.2.71 0l.74.74c.2.2.2.51 0 .71s-.51.2-.71 0l-.74-.74c-.2-.19-.2-.51 0-.71m-8.88 6.33c-.2-.2-.2-.51 0-.71l.74-.74c.2-.2.51-.2.71 0s.2.51 0 .71l-.74.74c-.19.2-.51.2-.71 0"/><path fill="#ffb02e" d="M12.47 9.46c-.2.2-.2.51 0 .71c.19.2.51.2.7 0l.75-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zm-5.23 6.3c-.2.2-.2.51 0 .71c.2.19.51.19.71 0l.74-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zm16.09.71c-.2-.2-.2-.51 0-.71l.74-.74c.2-.2.51-.2.71 0s.2.51 0 .71l-.74.74c-.2.19-.52.19-.71 0m-7.34-2.31c.2.2.51.2.71 0s.2-.51 0-.71l-.74-.74c-.2-.2-.51-.2-.71 0s-.2.51 0 .71z"/><path fill="#fbb8ab" d="M25.24 19.98H6.78a1.77 1.77 0 0 0-1.7 2.28l2.106 6.896c.12.38.48.64.89.64h15.87c.4 0 .76-.26.89-.64l2.114-6.896c.33-1.14-.52-2.28-1.71-2.28"/><path fill="#5092ff" d="M8 30h16c1.04 0 1.391-.646 1.5-1c0 0 1.936-6.072 1.816-6.564c-.074-.26-.394-.291-.49-.091l-.152.35l-.107-.259c-.07-.16-.426-.37-.779 0l-.748.87c-.066.077-.182.1-.229 0l-.344-.792c-.175-.385-.899-.478-1.464.035l-.803.758c-.148.152-.376.181-.52 0l-.702-.87c-.355-.43-1.19-.244-1.726.152l-.855.718c-.207.146-.464.17-.657 0l-.798-.793c-.45-.361-1.371-.49-1.92.035l-.794.758c-.144.111-.448.129-.626 0l-1.041-.87c-.45-.384-1.307-.314-1.686.152l-.572.718c-.093.106-.262.152-.473 0l-.978-.87c-.386-.325-1.121-.331-1.359.152l-.275.61s-.076.26-.214.108l-.717-.87c-.51-.553-.901 0-.978.259l-.152-.352c-.127-.273-.646 0-.459.657L6.5 29c.077.232.504 1 1.5 1"/><path fill="#3f5fff" d="m11.91 30l-.92-4.598a.5.5 0 0 0-.98.196L10.89 30zm9.2 0l.88-4.402a.5.5 0 0 0-.98-.196L20.09 30zm-4.61-4.5V30h-1v-4.5a.5.5 0 0 1 1 0"/></g></svg>',comet:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="m28.148 3.123l-4.41 3.41v-1.03c0-.53-.64-.8-1.02-.42l-3.94 3.94v-1.39c0-.53-.64-.8-1.02-.42l-4.64 4.64v-1.39c0-.53-.64-.8-1.02-.42l-6.05 6.05a7.007 7.007 0 0 0 0 9.9a7.007 7.007 0 0 0 9.9 0l6.06-6.06c.37-.37.11-1.02-.42-1.02h-1.39l4.64-4.64c.37-.37.11-1.02-.42-1.02h-1.39l3.93-3.93c.37-.37.11-1.02-.42-1.02h-1.03l3.4-4.4c.41-.52-.25-1.18-.76-.78"/><path fill="#f8312f" d="M22.018 10.523a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-6 10.5a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-.5-8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-5.5-4.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4.49 1a.99.99 0 1 1-1.98 0a.99.99 0 0 1 1.98 0m2.01-3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></g></svg>',"christmas-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.157 29.988h-6.311c-.536 0-.943-.47-.826-.96l.515-2.13l3.374-1.059l3.56 1.059l.513 2.13c.108.49-.289.96-.825.96"/><path fill="#44911b" d="m14.86 7.19l-2.68 4.792c-.5.89.12 2.018 1.12 2.018h.608C11.747 14 10 15.592 10 17.56c0 .8.71 1.439 1.579 1.439h.144C9.116 19 7 21.227 7 23.97C7 25.65 8.294 27 9.878 27h12.244C23.716 27 25 25.639 25 23.97c.01-2.743-2.106-4.97-4.723-4.97h.144C21.3 19 22 18.352 22 17.56c0-1.959-1.747-3.56-3.908-3.56h.558c1 0 1.62-1.118 1.12-2.018L17.09 7.19c-.49-.89-1.73-.89-2.23 0"/><path fill="#f8312f" d="M18.982 18.306a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58m-8.005 7.081a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58m12.313-1.359a1.29 1.29 0 1 1-2.58 0a1.29 1.29 0 0 1 2.58 0"/><path fill="#fcd53f" d="M18.289 12.016a1.29 1.29 0 1 1-2.58 0a1.29 1.29 0 0 1 2.58 0m-4.313 5.274a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58M16 23.254a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58"/><path fill="#f9c23c" d="m17.005 3.09l.695.106a.43.43 0 0 1 .242.735l-.503.493a.43.43 0 0 0-.125.377l.116.695a.434.434 0 0 1-.628.455l-.619-.329a.43.43 0 0 0-.406 0l-.619.329a.434.434 0 0 1-.628-.455l.116-.695a.43.43 0 0 0-.126-.377l-.502-.493a.43.43 0 0 1 .242-.735l.696-.097a.44.44 0 0 0 .328-.232l.31-.628a.432.432 0 0 1 .773 0l.309.628a.48.48 0 0 0 .329.223"/></g></svg>',unicorn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00d26a" d="m5.398 4.68l.085-.816l.798-.102l2.3 1.635l-.214 1.1l-1.211.38z"/><path fill="#468cfb" d="M8.705 8.813L7.156 6.877l1.424-1.48l2.026 1.441l-.586 1.259z"/><path fill="#f9c23c" d="m6.293 3.77l-.886.92l-1.536-1.92c-.217-.271.125-.633.408-.431z"/><path fill="#8d65c5" d="M10.554 6.801L13.21 8.69c1.083 2.647-1.064 3.045-2.272 2.913l-2.273-2.84z"/><path fill="#5092ff" d="M11.5 6.781c1.219-1.603 6.658-2.529 3.608.431c-1.81 1.76-1.054 3.632-3.374 4.632c-3.906 1.484-5.046-1.719-4.64-2.125s1.317.463 2.422 0c.686-.288.765-1.335 1.984-2.938"/><path fill="#efd5ff" d="m5.784 23.35l8.62-1.88q.223-.054.45-.123c-3.56 4.081-4.006 8.637-4.006 8.637h15.33c2.14 0 3.82-2.082 3.62-4.222c-.598-6.318-2.785-17.951-10.829-18.03c-1.607-1.224-3.467-1.52-4.586-.402c-3.417 3.418-6.626 6.976-8.794 9.38c-.674.748-1.247 1.384-1.695 1.87c-1.89 2.049-1.45 3.73.22 4.58c.51.26 1.11.31 1.67.19"/><path fill="#ff6dc6" d="M29.906 16.969c0-3.657-2.323-4.209-3.218-4.188c.197.792.28 3.3-.97 7S25.5 28.25 26.189 30c2.671 0 3.718-.344 3.718-2.281z"/><path fill="#c790f1" d="M27.375 17.281c1.063-4-1.875-8.156-4.187-8.156c.812 1.854 1.312 6.219 0 8.344C21.692 19.89 21.453 26.5 22.203 30h4.75c-1.7-4.825-.64-8.719.422-12.719"/><path fill="#bca4eb" d="M14.906 21.281c7.719-6.406 3.656-11.968-1.437-13.03c7.187-5.47 8.864 5.416 7.594 9.124c-2.157 2.313-6.157 3.906-6.157 3.906"/><path fill="#5092ff" d="M22.797 29.984h-6.625c-1.59-6.76 3.796-11.262 4.156-16.302c.4-5.73-3.74-6.79-3.74-6.79c-1.32.33 1.01 1.25-1.58 1.25l-.68-1.45l-.687-1.13c1.64-.45 3.842-.827 6.359.407c3.1 1.518 5.753 5.488 4.688 9.562c-1.063 4.063-3.579 6.992-1.891 14.453"/><path fill="#8d65c5" d="M22.797 29.984h-1.413c-.332-1-.608-2.608-.571-4.484c.056-2.898.682-4.505 2.157-8.296L23.438 16c1.45-3.75-.709-7.5-1.688-8.75l.165.024c2.158 1.934 3.608 5.064 2.773 8.257c-.257.981-.598 1.896-.945 2.824c-1.088 2.918-2.226 5.97-.946 11.63m4.578-12.704c.53-1.993.066-4.025-.82-5.562H26.5c.05.282.115.581.184.895c.304 1.39.672 3.07.035 4.855l-.004.01c-.824 2.308-2.464 6.9-2.059 9.49c.215 1.37.624 2.48.867 3.031h1.43c-1.686-4.785-.658-8.654.396-12.62z"/><path fill="#efd5ff" d="M15.578 9.016c-1.86.25-2.384-.703-2.5-2.453c-.115-1.75-.087-2.262-.087-2.262c0-.34.41-.51.65-.27c0 0 3.28 2.594 3.422 3.532c.14.937-.71 1.348-1.485 1.453"/><path fill="#1c1c1c" d="M12 12a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m-7.09 8.301c-.3.3-.8.3-1.1 0l1.1-1.1c.3.31.3.8 0 1.1m3.777 2.416l-1.864.406a1.794 1.794 0 0 0 1.114-1.972a.512.512 0 1 1 1.008-.173c.106.615.003 1.22-.258 1.739"/></g></svg>',butterfly:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M27.5 2c-.62 0-1.19.23-1.63.6L16 11L6.13 2.6C5.69 2.23 5.12 2 4.5 2A2.5 2.5 0 0 0 2 4.5v9.75C2 16.32 3.68 18 5.75 18H8c-3.31 0-6 2.69-6 6s2.69 6 6 6a6 6 0 0 0 5.67-4.04L16 20.39l2.33 5.57A6 6 0 0 0 24 30c3.31 0 6-2.69 6-6s-2.69-6-6-6h2.25c2.07 0 3.75-1.68 3.75-3.75V4.5A2.5 2.5 0 0 0 27.5 2"/><path fill="#ff822d" d="m10.21 13.96l-4.76-2.75c-.54-.32-1.22.08-1.22.71v2c0 1.7 1.38 3.08 3.08 3.08c.62 0 1.22-.25 1.66-.69l1.37-1.37a.62.62 0 0 0-.13-.98m11.81 0l4.76-2.75c.54-.32 1.22.08 1.22.71v2c0 1.7-1.38 3.08-3.08 3.08c-.62 0-1.22-.25-1.66-.69l-1.37-1.37a.62.62 0 0 1 .13-.98M17 16.85l2.77-1.6c.38-.21.86-.15 1.17.16l.8.8c.29.29.08.79-.33.79H17zm-4.54-1.6l2.77 1.6V17h-4.41c-.41 0-.62-.5-.33-.79l.8-.8c.31-.31.79-.37 1.17-.16"/><path fill="#ff6723" d="M4.23 5.98V8.2c0 .71.38 1.37.99 1.72l10.01 5.78V13L5.76 5.25c-.61-.5-1.53-.06-1.53.73m23.77 0V8.2c0 .71-.38 1.37-.99 1.72L17 15.7V13l9.47-7.75c.61-.5 1.53-.06 1.53.73M12.96 19.5H9.64c-.55 0-.82.66-.43 1.04l2.95 2.95c.31.31.83.2 1-.2l.9-2.15c.33-.77-.25-1.64-1.1-1.64m-6.94.46A4.5 4.5 0 0 0 3.5 24c0 2.47 1.95 4.46 4.41 4.5a4.47 4.47 0 0 0 4.12-2.51l.01-.02q.001-.007.005-.01q.004-.004.005-.01c.22-.47.12-1.04-.25-1.41L7.45 20.2c-.38-.38-.95-.48-1.43-.24m.62 7.05a1.64 1.64 0 1 1 0-3.28a1.64 1.64 0 0 1 0 3.28m12.44-7.51h3.32c.55 0 .82.66.43 1.04l-2.95 2.95c-.31.31-.83.2-1-.2l-.9-2.15c-.33-.77.25-1.64 1.1-1.64m6.94.46c1.49.73 2.52 2.27 2.52 4.04c0 2.47-1.95 4.46-4.41 4.5a4.47 4.47 0 0 1-4.12-2.51l-.01-.01q-.001-.007-.005-.01q-.005-.003-.005-.01c-.22-.47-.12-1.04.25-1.41l4.35-4.35c.38-.38.95-.48 1.43-.24m-.62 6.92a1.64 1.64 0 1 0 0-3.28a1.64 1.64 0 0 0 0 3.28"/><path fill="#212121" d="M13.305 2.193a.5.5 0 0 0-.79.614a11.87 11.87 0 0 1 2.495 7.303a.5.5 0 0 0 .99.1a.5.5 0 0 0 .99-.1c0-2.755.93-5.288 2.495-7.303a.5.5 0 0 0-.79-.614A12.86 12.86 0 0 0 16 9.596a12.86 12.86 0 0 0-2.695-7.403"/><path fill="#321b41" d="M16.917 10.778a2 2 0 1 0-1.84-.003a1.45 1.45 0 0 0-.587 1.165v10.61c0 .8.65 1.45 1.45 1.45h.11c.8 0 1.45-.65 1.45-1.45V11.94c0-.475-.23-.897-.583-1.162"/></g></svg>',honeybee:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#212121" d="M5.43 13.36c-.28 0-.5-.22-.5-.5V12c0-.71-.4-1.35-1.04-1.67l-.67-.38a.5.5 0 1 1 .44-.9l.68.38c.98.49 1.59 1.47 1.59 2.57v.86c0 .28-.22.5-.5.5M24.3 27.001h-1.47c-1.02 0-1.84-.83-1.84-1.84v-3.36c0-.41.34-.75.75-.75s.75.34.75.75v3.35c0 .19.15.34.34.34h1.47c.41 0 .75.34.75.75s-.34.76-.75.76m-14.5 1.98c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.65-.65c.36-.36.56-.85.56-1.36v-1.89c0-.41.34-.75.75-.75s.75.34.75.75v1.89c0 .91-.36 1.77-1 2.42l-.65.65c-.15.15-.34.22-.53.22m8.84-.22c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.65-.65c-.36-.36-.56-.85-.56-1.36v-1.89c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.89c0 .91.35 1.77 1 2.42zM28 16.36l1.78.38c.29.06.29.47 0 .54l-1.78.38l-1-.66z"/><path fill="#ffb02e" d="M17 25.001h2.11c.647 0 1.282-.09 1.89-.26L23.5 17L21 9.28a7 7 0 0 0-1.89-.259H17L15 17zM12 9.147a8 8 0 0 0-4.819 2.884L7.5 13.5v7l-.306 1.507A8 8 0 0 0 12 24.875L14.5 17zM24.5 17l1.5-3.377l2 2.755v1.267l-2 2.754z"/><path fill="#533566" d="M16.98 9.021h-3.77c-.42.01-.83.06-1.23.13v15.72c.4.07.81.12 1.23.13h3.77zm-8.61 4.36c0-.75-.6-1.35-1.34-1.36h-.08c-2.74 0-4.95 2.24-4.95 5s2.22 5 4.95 5h.08c.75-.02 1.34-.62 1.34-1.37zm16.67-1.08l.94 1.3v6.8l-.94 1.3c-.94 1.5-2.4 2.57-4.06 3.03V9.271c1.67.47 3.12 1.53 4.06 3.03"/><path fill="#aeddff" d="M14.94 4.74A4.47 4.47 0 0 1 18.57 3c2.39.04 4.35 1.99 4.41 4.38a4.49 4.49 0 0 1-4.49 4.6H10.9c-.55 0-.86-.63-.54-1.07l4.5-6.06c.02-.03.04-.05.06-.08z"/><path fill="#212121" d="M5.44 18.001a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></g></svg>',snail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="M2.5 3.75C2.5 2.79 3.29 2 4.25 2S6 2.79 6 3.75c0 .7-.41 1.3-1 1.58v3.52H3.5V5.33c-.59-.28-1-.88-1-1.58m3.5 0c0 .7.41 1.3 1 1.58v3.52h1.5V5.33c.59-.28 1-.88 1-1.58C9.5 2.79 8.71 2 7.75 2S6 2.79 6 3.75"/><path fill="#212121" d="M5 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/><path fill="#6d4534" d="M18 5c-4.76 0-8.87 2.77-10.81 6.78V21h-.51c1.65 4.66 6.09 8 11.32 8c6.63 0 12-5.37 12-12S24.63 5 18 5"/><path fill="#f3ad61" d="M11.96 23.35c-1.186-.81-1.99-2.306-1.99-3.76v-8.67c0-2.2-1.78-3.98-3.98-3.98A3.973 3.973 0 0 0 2 10.92v12.76c0 3.45 2.8 6.24 6.24 6.24l20.2.08c.86 0 1.56-.7 1.56-1.56v-.42a3.99 3.99 0 0 0-3.194-3.912A8.6 8.6 0 0 1 19.605 28a8.6 8.6 0 0 1-7.644-4.65"/><path fill="#a56953" d="M29 19.28a9.51 9.51 0 1 1-19.02 0a9.51 9.51 0 0 1 19.02 0m-2.78 2.5a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0"/></g></svg>',seedling:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M22.39 6.45c-2.29 0-4.32 1.08-5.63 2.75v-.47h-.01A7.155 7.155 0 0 0 9.61 2H2c0 3.95 3.2 7.15 7.15 7.15h5.19v12.46h2.42v-8h6.09c3.95 0 7.15-3.2 7.15-7.15h-7.61z"/><path fill="#6d4534" d="M15.55 21a8.99 8.99 0 0 0-8.99 8.99h17.99c0-4.965-4.025-8.99-9-8.99"/></g></svg>',crab:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M12.52 6.48h-.42V5H14c0 .82-.66 1.48-1.48 1.48m0 .33h-.42v1.48H14c0-.82-.66-1.48-1.48-1.48m6.96-.33H20V5h-2c0 .82.66 1.48 1.48 1.48m0 .33H20v1.48h-2c0-.82.66-1.48 1.48-1.48M7.618 12.739a.98.98 0 1 0-.956-.006a.87.87 0 0 0-.394.727a3.65 3.65 0 0 0 3.647 3.648a.868.868 0 1 0 0-1.736a1.913 1.913 0 0 1-1.912-1.912c0-.3-.153-.566-.385-.721m16.837 6.921c-.64.03-.98-.73-.53-1.18l4.33-4.33c.45-.45 1.21-.1 1.18.53c-.05 1.26-.56 2.5-1.52 3.46s-2.2 1.47-3.46 1.52m-1.26.66c-.64 0-.93.78-.46 1.21a5.21 5.21 0 0 0 7.04 0c.47-.43.17-1.21-.46-1.21zm-2.785 2.925a.7.7 0 0 1 .675-.895c1.26.01 2.52.47 3.51 1.4s1.55 2.15 1.65 3.4c.05.63-.7 1-1.16.57l-4.479-4.17c.432.726.696 1.565.73 2.47c.05 1.36-.42 2.61-1.24 3.57c-.41.48-1.2.22-1.22-.42l-.23-6.11a.695.695 0 0 1 1.19-.51q.316.323.573.695M9.205 21.59c.46-.43.17-1.2-.46-1.2h-6.06c-.63 0-.92.77-.46 1.2a5.156 5.156 0 0 0 6.98 0m-1.71-1.86c.63.03.97-.72.52-1.17l-4.29-4.3c-.45-.44-1.2-.1-1.17.53c.05 1.25.56 2.48 1.51 3.43s2.18 1.46 3.43 1.51m3.33 2.66c.63 0 .94.76.48 1.19l-4.44 4.14c-.46.42-1.2.06-1.15-.57c.1-1.25.64-2.46 1.63-3.38c.98-.91 2.23-1.37 3.48-1.38m1.33.28a.695.695 0 0 1 1.19.51l-.23 6.11c-.02.64-.81.9-1.22.42a5.17 5.17 0 0 1-1.24-3.57a5.22 5.22 0 0 1 1.5-3.47m13.418-9.21a.87.87 0 0 0-.39-.724a.98.98 0 1 0-.956 0a.87.87 0 0 0-.39.724a1.91 1.91 0 0 1-1.912 1.912a.868.868 0 0 0 0 1.736a3.65 3.65 0 0 0 3.648-3.648"/><path fill="#533566" d="M13 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/><path fill="#f8312f" d="M8.316 11.5H6C6 7.912 8.902 5 12.5 5v2.326A4.18 4.18 0 0 1 8.316 11.5m15.368 0H26C26 7.912 23.098 5 19.5 5v2.326a4.18 4.18 0 0 0 4.184 4.174M16 27c4.97 0 9-3.901 9-8.713C25 13.465 20.97 13 16 13s-9 .475-9 5.287S11.03 27 16 27"/></g></svg>',cookie:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M2 16c0 9.29 6.27 14 14 14s14-4.74 14-14c0-9.43-6.27-14-14-14S2 6.43 2 16"/><path fill="#6d4534" d="m19.89 8.32l.62.04a.95.95 0 0 0 1.01-1.01l-.04-.61a1.55 1.55 0 0 0-.22-.71a1.51 1.51 0 0 0-1.85-.59c-.8.34-1.14 1.28-.76 2.05c.23.5.72.79 1.24.83m7.03 6.29l.04-.62a.95.95 0 0 0-1.01-1.01l-.61.04c-.24.01-.49.09-.71.22a1.51 1.51 0 0 0-.59 1.85c.34.8 1.28 1.14 2.05.76c.5-.23.79-.72.83-1.24m-16.3 9.91l.05-.77c.04-.64.41-1.24 1.03-1.55a1.85 1.85 0 0 1 2.54.94c.35.84.04 1.82-.73 2.3c-.28.17-.58.26-.88.28l-.76.05c-.71.05-1.3-.54-1.25-1.25m9.78-9.33l.03-.46c.1-1.51-1.15-2.76-2.67-2.67l-.45.03c-.45.02-.9.15-1.32.4a2.93 2.93 0 0 0-1.22 3.62c.65 1.59 2.5 2.26 4.01 1.51c.98-.47 1.56-1.42 1.62-2.43M7.65 9l.03.42c.06.91.59 1.77 1.47 2.21c1.37.68 3.05.07 3.64-1.37c.49-1.21.02-2.63-1.11-3.29a2.65 2.65 0 0 0-1.2-.36l-.41-.03C8.7 6.49 7.57 7.63 7.65 9m16.61 13.82l.02.36c.08 1.17-.9 2.15-2.07 2.07l-.35-.02c-.35-.02-.7-.12-1.03-.31a2.28 2.28 0 0 1-.95-2.81A2.27 2.27 0 0 1 23 20.94c.76.36 1.21 1.09 1.26 1.88m-18.39-5.9l.04.62c.03.52.33 1.01.83 1.24c.77.38 1.71.04 2.05-.76c.28-.67.03-1.46-.59-1.85a1.55 1.55 0 0 0-.71-.22l-.61-.04a.95.95 0 0 0-1.01 1.01"/></g></svg>',"ice-cream":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="M26.778 4.439a.875.875 0 0 0-1.376-1.081l-6.16 7.842a.875.875 0 0 0 .868 1.397a.877.877 0 0 0 1.284.602l8.049-4.467a.875.875 0 1 0-.85-1.53l-7.066 3.922z"/><path fill="#6d4534" d="M15.59 17.75a6.75 6.75 0 1 1-13.5 0a6.75 6.75 0 0 1 13.5 0"/><path fill="#ff8687" d="M29.01 17.625a6.75 6.75 0 1 1-13.5 0a6.75 6.75 0 0 1 13.5 0"/><path fill="#feefc2" d="M24.078 14.922a8.078 8.078 0 1 1-16.156 0a8.078 8.078 0 0 1 16.156 0"/><path fill="#00a6ed" d="M2.722 21.042h25.494c.622 0 .97.71.58 1.194c-.82 1.02-1.98 2.413-2.655 3c-.726.63-2.171 1.55-3.104 2.124a4.16 4.16 0 0 0-1.396 1.399l-.135.224a2 2 0 0 1-1.715.97h-8.644a2 2 0 0 1-1.715-.97l-.134-.224a4.2 4.2 0 0 0-1.397-1.4c-.933-.573-2.378-1.494-3.103-2.124c-.675-.585-1.835-1.978-2.656-2.999a.734.734 0 0 1 .58-1.195"/><path fill="#f8312f" d="M17.95 5.983c0 1.096-.725 1.863-1.984 1.863s-1.983-.767-1.983-1.863a1.983 1.983 0 1 1 3.966 0"/></g></svg>',"cloud-with-snow":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M27.988 3.843C24.085.04 17.863.056 13.998 3.873A5.04 5.04 0 0 0 7.982 5.94A7.47 7.47 0 0 0 1 13.396c0 1.756.612 3.373 1.623 4.652A7.5 7.5 0 0 0 8.593 21h12.715a9.39 9.39 0 0 0 7.648-3.933c3.017-3.96 2.693-9.652-.968-13.224"/><path fill="#00a6ed" d="M10.849 23.03a.77.77 0 0 1 1.303 0l.32.509a.77.77 0 0 0 .737.354l.598-.066a.77.77 0 0 1 .812 1.019l-.197.568a.77.77 0 0 0 .181.796l.425.427a.77.77 0 0 1-.29 1.27l-.568.2a.77.77 0 0 0-.509.639l-.069.597a.77.77 0 0 1-1.174.565l-.51-.318a.77.77 0 0 0-.816 0l-.51.318a.77.77 0 0 1-1.174-.565l-.07-.597a.77.77 0 0 0-.508-.639l-.567-.2a.77.77 0 0 1-.29-1.27l.424-.427a.77.77 0 0 0 .181-.796l-.197-.568a.77.77 0 0 1 .813-1.019l.598.066a.77.77 0 0 0 .735-.354zm10.335-2.364a.588.588 0 0 0-.946-.301a.59.59 0 0 1-.616.088a.588.588 0 0 0-.826.553a.59.59 0 0 1-.315.536a.588.588 0 0 0-.083.99c.18.135.266.36.223.581a.588.588 0 0 0 .723.682a.59.59 0 0 1 .593.188c.28.329.806.254.983-.14a.59.59 0 0 1 .517-.346a.588.588 0 0 0 .504-.857a.59.59 0 0 1 .052-.62a.588.588 0 0 0-.356-.927a.59.59 0 0 1-.453-.427"/><path fill="#f3eef8" d="M14.575 4.71c3.467-3.557 9.158-3.617 12.715-.15c3.297 3.216 3.587 8.346.862 11.913A8.39 8.39 0 0 1 21.308 20H8.593a6.5 6.5 0 0 1-5.18-2.565A6.48 6.48 0 0 1 2 13.397a6.47 6.47 0 0 1 6.584-6.472a4.04 4.04 0 0 1 5.65-1.847q.164-.188.341-.368"/></g></svg>',"magic-wand":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#433b6b" d="m5 29l-2-2l16-16l2 2z"/><path fill="#f4f4f4" d="m18 12l2 2l1.674-1.667c.435-.445.435-1.24 0-1.675l-.33-.331C20.9 9.89 20 10 19.5 10.5zM2.338 29.252l.41.41c.44.452 1.17.452 1.61-.01L6 28.007L4 26l-1.662 1.627a1.146 1.146 0 0 0 0 1.625"/><path fill="#f9c23c" d="M27.87 4.423c.131.284.352.508.644.635l1.215.527a.453.453 0 0 1 0 .83l-1.205.527a1.22 1.22 0 0 0-.643.635l-.954 2.167c-.17.341-.683.341-.854 0l-.954-2.167a1.26 1.26 0 0 0-.643-.635l-1.205-.527a.453.453 0 0 1 0-.83l1.205-.527a1.22 1.22 0 0 0 .643-.635l.954-2.167c.17-.341.683-.341.854 0zm-11.429 1.18a.88.88 0 0 1-.458-.438l-.676-1.49c-.125-.233-.49-.233-.614 0l-.676 1.49a.85.85 0 0 1-.458.438l-.864.36a.309.309 0 0 0 0 .574l.864.36a.9.9 0 0 1 .458.438l.676 1.49c.125.233.49.233.614 0l.676-1.49a.85.85 0 0 1 .458-.438l.864-.36a.309.309 0 0 0 0-.574zm9.51 10.695a.95.95 0 0 1-.46-.48l-.686-1.622c-.128-.261-.492-.261-.61 0l-.685 1.623a.95.95 0 0 1-.46.479l-.857.392c-.257.13-.257.5 0 .62l.856.392a.95.95 0 0 1 .46.48l.686 1.622c.128.261.492.261.61 0l.685-1.622a.95.95 0 0 1 .46-.48l.857-.392c.257-.13.257-.5 0-.62zM12 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m18-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M19 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>',chestnut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M29.68 22.173L16 17L2.32 22.172c1.04 3.97 4.52 7.28 9.39 7.28h8.57c4.88 0 8.36-3.31 9.4-7.28"/><path fill="#6d4534" d="M29.68 22.173c.83-3.16.11-6.75-2.69-9.42l-9.59-9.19c-.78-.75-2.02-.75-2.8 0l-9.59 9.19c-2.8 2.68-3.51 6.26-2.69 9.42z"/></g></svg>'},I2={pause:'<path d="M9 6v12M15 6v12"/>',play:'<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>',ff:'<path d="M4 6.5v11l7.5-5.5zM12.5 6.5v11l7.5-5.5z" fill="currentColor"/>',undo:'<path d="M9 7L4.5 11.5 9 16"/><path d="M5 11.5h8.5a5.5 5.5 0 010 11H11" transform="translate(0 -3)"/>',shuffle:'<path d="M3.5 7h3.2c2.2 0 3.4 1 4.6 3l1.4 2.4c1.2 2 2.4 3 4.6 3h3.2"/><path d="M3.5 16.4h3.2c1.4 0 2.4-.4 3.2-1.2M13.7 8.2c.8-.8 1.8-1.2 3.2-1.2h3.6"/><path d="M18 4.5l2.5 2.5L18 9.5M18 13l2.5 2.5L18 18"/>',plus:'<path d="M12 5v14M5 12h14"/>',close:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',restart:'<path d="M19 12a7 7 0 11-2.05-4.95"/><path d="M19.5 4.5v4h-4"/>',map:'<path d="M3.5 6.5l5-2 7 2.5 5-2v13l-5 2-7-2.5-5 2z"/><path d="M8.5 4.5v13M15.5 7v13"/>',back:'<path d="M14.5 5.5L8 12l6.5 6.5"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',slot:'<rect x="4" y="7" width="12" height="12" rx="3"/><path d="M19.5 3.5v6M16.5 6.5h6"/>'};function Ae(s,t=24){return`<svg class="ico" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I2[s]??""}</svg>`}function fe(s,t=28,e=""){return L2[s].replace("<svg ",`<svg class="emo ${e}" width="${t}" height="${t}" aria-hidden="true" `)}const D2={title:{ru:"Пиксельный пикник",en:"Pixel Picnic"},level:{ru:"Уровень {n}",en:"Level {n}"},play:{ru:"Играть",en:"Play"},next:{ru:"Дальше",en:"Next"},retry:{ru:"Заново",en:"Retry"},restart:{ru:"Начать заново",en:"Restart"},resume:{ru:"Продолжить",en:"Resume"},map:{ru:"Карта",en:"Map"},album:{ru:"Альбом",en:"Album"},settings:{ru:"Настройки",en:"Settings"},paused:{ru:"Пауза",en:"Paused"},hard:{ru:"Сложный",en:"Hard"},superhard:{ru:"Очень сложный",en:"Super hard"},hardLevel:{ru:"Сложный уровень!",en:"Hard level!"},superhardLevel:{ru:"Очень сложный уровень!",en:"Super hard level!"},win1:{ru:"Отлично!",en:"Great!"},win2:{ru:"Великолепно!",en:"Awesome!"},win3:{ru:"Идеально!",en:"Perfect!"},addedAlbum:{ru:"Картинка добавлена в альбом",en:"Picture added to your album"},stuckTitle:{ru:"Колония застряла!",en:"The colony is stuck!"},stuckText:{ru:"Во всех слотах коробки, чьи кубики сейчас недоступны. Используй бустер или начни заново.",en:"Every slot holds a color the ants can’t reach yet. Use a booster or try again."},giveUp:{ru:"Сдаться",en:"Give up"},music:{ru:"Музыка",en:"Music"},sounds:{ru:"Звуки",en:"Sounds"},language:{ru:"Язык",en:"Language"},resetProgress:{ru:"Сбросить прогресс",en:"Reset progress"},resetConfirm:{ru:"Точно сбросить весь прогресс?",en:"Really reset all progress?"},credits:{ru:"Авторы и лицензии",en:"Credits & licenses"},close:{ru:"Закрыть",en:"Close"},buy:{ru:"Купить",en:"Buy"},notEnough:{ru:"Не хватает монет",en:"Not enough coins"},locked:{ru:"Откроется на уровне {n}",en:"Unlocks at level {n}"},world:{ru:"Мир {n}",en:"World {n}"},collected:{ru:"Собрано {a} из {b}",en:"Collected {a} of {b}"},speed:{ru:"Скорость",en:"Speed"},toastBlocked:{ru:"Сначала возьми коробку перед ней",en:"Take the box in front first"},toastFrozen:{ru:"Коробка заморожена — растает через несколько ходов",en:"Frozen — it thaws after a few taps"},toastSlots:{ru:"Нет свободных слотов",en:"No free slots"},toastLink:{ru:"Связанные коробки берутся только вместе",en:"Linked boxes must be taken together"},toastNoHint:{ru:"Отсюда уже не выбраться… Попробуй «Отменить» или «+Слот»",en:"No way out from here… Try Undo or +Slot"},toastGrab:{ru:"Выбери любую коробку в очереди",en:"Pick any box in the queue"},toastLinkSlots:{ru:"Для связанных коробок нужно два свободных слота",en:"Linked boxes need two free slots"},booster_hint:{ru:"Подсказка",en:"Hint"},booster_undo:{ru:"Отменить",en:"Undo"},booster_slot:{ru:"+Слот",en:"+Slot"},booster_shuffle:{ru:"Перемешать",en:"Shuffle"},booster_grab:{ru:"Магнит",en:"Magnet"},boosterDesc_hint:{ru:"Солвер покажет лучшую следующую коробку.",en:"The solver shows the best next box."},boosterDesc_undo:{ru:"Отменяет последний ход.",en:"Takes back your last move."},boosterDesc_slot:{ru:"Добавляет ещё один слот до конца уровня.",en:"Adds one more slot for this level."},boosterDesc_shuffle:{ru:"Перемешивает очередь так, чтобы уровень можно было пройти.",en:"Reshuffles the queue into a solvable order."},boosterDesc_grab:{ru:"Достаёт любую коробку из глубины очереди.",en:"Pulls any box out of the queue."},newMechanic:{ru:"Новинка!",en:"New!"},gotIt:{ru:"Понятно!",en:"Got it!"},tutorial1:{ru:"Нажми на коробку — муравьи выбегут и съедят кубики своего цвета",en:"Tap a box — its ants will run out and eat cubes of their color"},tutorial2:{ru:"Муравьи дотянутся до кубика, если к нему есть проход от открытой стороны рамки",en:"Ants can reach a cube if there is a free way to it from an open side of the frame"},debug:{ru:"Режим отладки",en:"Debug mode"},debugHint:{ru:"Все уровни открыты, видна сложность",en:"All levels unlocked, difficulty visible"},debugLevels:{ru:"Все уровни",en:"All levels"},autoSolve:{ru:"Автопрохождение",en:"Auto-solve"},skipLevel:{ru:"Пропустить уровень",en:"Skip level"},on:{ru:"Вкл",en:"On"},off:{ru:"Выкл",en:"Off"},noSolution:{ru:"Солвер не нашёл решения из этой позиции",en:"The solver found no solution from here"},tutorial3:{ru:"Не забивай слоты цветами, до которых муравьям не добраться!",en:"Don’t fill the slots with colors the ants can’t reach!"},mech_hidden_t:{ru:"Коробки-сюрпризы",en:"Mystery boxes"},mech_hidden_d:{ru:"Цвет коробки с «?» откроется, только когда она окажется первой в своём столбце.",en:"A “?” box reveals its color only when it reaches the front of its column."},mech_link_t:{ru:"Связанные коробки",en:"Linked boxes"},mech_link_d:{ru:"Коробки на верёвочке берутся только вместе и занимают два слота.",en:"Roped boxes are taken together and need two free slots."},mech_top_t:{ru:"Второй вход",en:"Second entrance"},mech_top_d:{ru:"Муравьи прокопали туннель: теперь они грызут картинку ещё и сверху!",en:"The ants dug a tunnel: now they can nibble the picture from the top too!"},mech_frozen_t:{ru:"Лёд",en:"Ice"},mech_frozen_d:{ru:"Замороженную коробку нельзя взять. Число на льду — сколько ходов осталось до оттаивания.",en:"A frozen box can’t be taken. The number shows how many taps until it thaws."},mech_sides_t:{ru:"Боковые входы",en:"Side entrances"},mech_sides_d:{ru:"Теперь муравьи могут подобраться к картинке слева и справа.",en:"Now ants can reach the picture from the left and right sides too."},boosterUnlocked:{ru:"Новый бустер!",en:"New booster!"},free:{ru:"бесплатно ×{n}",en:"×{n} free"},endless:{ru:"Бесконечный режим",en:"Endless mode"},loading:{ru:"Муравьи готовятся…",en:"Ants are getting ready…"},progress:{ru:"Съедено",en:"Eaten"},licenseText:{ru:"Картинки уровней созданы из эмодзи: Microsoft Fluent Emoji (MIT) и Twemoji (© Twitter, Inc. и участники, CC BY 4.0, https://creativecommons.org/licenses/by/4.0/). Шрифт Nunito (SIL OFL 1.1). 3D — three.js (MIT). Музыка и звуки синтезируются в браузере.",en:"Level pictures are made from emoji: Microsoft Fluent Emoji (MIT) and Twemoji (© Twitter, Inc. and contributors, CC BY 4.0, https://creativecommons.org/licenses/by/4.0/). Font: Nunito (SIL OFL 1.1). 3D: three.js (MIT). Music and sounds are synthesized in the browser."}};let Hr=(navigator.language||"en").toLowerCase().startsWith("ru")?"ru":"en";function or(s){Hr=s,document.documentElement.lang=s}function Ac(){return Hr}function At(s,t){let e=D2[s][Hr];if(t)for(const[n,i]of Object.entries(t))e=e.replace(`{${n}}`,String(i));return e}function qi(s){return s?s[Hr]:""}const li=["hint","undo","slot","shuffle","grab"],Oi={hint:2,slot:3,undo:4,shuffle:6,grab:9},Cc={hint:30,undo:40,shuffle:50,slot:70,grab:80},Rc=2,Pc={hidden:8,link:12,top:18,frozen:25,sides:34},Kn=20;function _s(s){return Math.floor((s-1)/Kn)}function U2(s,t){return(s==="superhard"?35:s==="hard"?20:10)+t*3}function N2(s){return Object.keys(Pc).filter(t=>Pc[t]===s)}function F2(s){return li.filter(t=>Oi[t]===s)}const O2={hint:"light-bulb",undo:"undo",slot:"slot",shuffle:"shuffle",grab:"magnet"};function Lc(s){const t=O2[s];return t==="undo"||t==="shuffle"||t==="slot"?`<span style="color:${t==="undo"?"#ff8a3d":t==="shuffle"?"#3aa0ff":"#35b84a"}">${Ae(t,34)}</span>`:fe(t,36)}class B2{el;top;dock;title;tierEl;fill;progAnt;speedBtn;boosterBtns=new Map;tutorialEl=null;debugEl;handEl=null;constructor(t,e){this.el=rt("div",{class:"hud"});const n=rt("button",{class:"btn round",html:Ae("pause",26),attrs:{"aria-label":"pause"}});n.addEventListener("click",()=>{Ft.play("button"),e.onPause()}),this.title=rt("div",{class:"level-name"}),this.tierEl=rt("div",{class:"tier hidden"}),this.fill=rt("div",{class:"progress-fill"}),this.progAnt=rt("span",{html:fe("ant",28)}),this.progAnt.style.position="absolute",this.progAnt.style.left="0%";const i=rt("div",{class:"progress"},this.fill,this.progAnt);this.progAnt.firstElementChild?.classList.add("prog-ant"),this.speedBtn=rt("button",{class:"btn round white speed-btn",attrs:{"aria-label":At("speed")}}),this.speedBtn.addEventListener("click",()=>{Ft.play("button"),e.onSpeed()}),this.debugEl=rt("div",{class:"hud-debug hidden"}),this.top=rt("div",{class:"hud-top"},n,rt("div",{class:"hud-title"},this.title,rt("div",{},this.tierEl),i,this.debugEl),this.speedBtn),this.dock=rt("div",{class:"boosters"});for(const r of li){const a=rt("button",{class:"booster",attrs:{"aria-label":At(`booster_${r}`)}});a.addEventListener("click",o=>{o.stopPropagation(),Ft.unlock(),e.onBooster(r)}),this.boosterBtns.set(r,a),this.dock.append(a)}this.el.append(this.top,this.dock),t.append(this.el),this.setSpeed(1)}setLevel(t,e){this.title.textContent=At("level",{n:t}),this.tierEl.className="tier "+e+(e==="normal"?" hidden":""),this.tierEl.innerHTML=e==="superhard"?`${fe("skull",16)} ${At("superhard")}`:`${fe("fire",16)} ${At("hard")}`}setDebug(t){this.debugEl.classList.toggle("hidden",!t),this.debugEl.textContent=t??""}setProgress(t,e){const n=e?t/e:0;this.fill.style.width=`calc(${(n*100).toFixed(2)}% - 4px)`,this.progAnt.style.left=`${(n*100).toFixed(2)}%`}setSpeed(t){this.speedBtn.innerHTML=`${Ae(t===1?"play":"ff",22)}<span>${t}x</span>`}setBoosters(t){for(const e of li){const n=this.boosterBtns.get(e),i=t[e];n.className="booster"+(i.locked?" locked":"")+(i.active?" active":"")+(!i.locked&&!i.usable?" dim":""),i.locked?n.innerHTML=Lc(e)+fe("locked",26,"lock")+`<span class="lvl">${i.unlockAt}</span>`:n.innerHTML=Lc(e)+(i.count>0?`<span class="count">${i.count}</span>`:'<span class="plus">+</span>')}}boosterRect(t){return this.boosterBtns.get(t).getBoundingClientRect()}insets(){const t=this.top.getBoundingClientRect(),e=this.dock.getBoundingClientRect();return{top:t.bottom+6,bottom:window.innerHeight-e.top+8}}banner(t,e){const n=rt("div",{class:"banner "+e,html:`${fe(e==="superhard"?"skull":"fire",34)} ${t}`});this.el.append(n),setTimeout(()=>n.remove(),2200)}showTutorial(t,e,n){this.hideTutorial(),this.tutorialEl=rt("div",{class:"tutorial",text:t}),this.tutorialEl.style.top=`${e}px`,this.el.append(this.tutorialEl),n&&(this.handEl=rt("div",{class:"hand",html:z2}),this.handEl.style.left=`${n.x-8}px`,this.handEl.style.top=`${n.y-4}px`,this.el.append(this.handEl))}hideTutorial(){this.tutorialEl?.remove(),this.handEl?.remove(),this.tutorialEl=this.handEl=null}destroy(){this.el.remove()}}const z2='<svg viewBox="0 0 64 64" width="56" height="56"><path d="M22 30V12a5 5 0 0110 0v14l1-1a5 5 0 017 1l1 1a5 5 0 017 2 5 5 0 016 4v12c0 9-7 15-16 15h-4c-6 0-10-3-13-8l-7-12a4.5 4.5 0 017-5z" fill="#fff" stroke="#3b2a55" stroke-width="3.2" stroke-linejoin="round"/><path d="M33 26v8M41 28v7M48 32v5" stroke="#3b2a55" stroke-width="3" stroke-linecap="round"/></svg>';function Vr(s,t,e={}){const n=Lh(s),i=document.createElement("canvas"),r=Math.min(2,window.devicePixelRatio||1),a=Math.max(s.w,s.h),o=Math.max(1,Math.floor(t*r/a));i.width=s.w*o,i.height=s.h*o,i.style.width=`${s.w*o/r}px`,i.style.height=`${s.h*o/r}px`;const c=i.getContext("2d");e.bg&&(c.fillStyle=e.bg,c.fillRect(0,0,i.width,i.height));const l=e.rounded!==!1&&o>=5?o*.22:0,h=o>=5?Math.max(.5,o*.06):0;for(let f=0;f<s.h;f++)for(let u=0;u<s.w;u++){const d=n[f*s.w+u];d<0||(c.fillStyle=s.palette[d],l>0?(c.beginPath(),c.roundRect(u*o+h,f*o+h,o-h*2,o-h*2,l),c.fill(),c.fillStyle="rgba(255,255,255,0.18)",c.fillRect(u*o+h+l*.5,f*o+h+l*.3,o-h*2-l,Math.max(1,o*.12))):c.fillRect(u*o,f*o,o,o))}return i}const ls=112,cs=150,Ic=190,k2=150,Dc=[["four-leaf-clover","tulip","lady-beetle","sunflower","honeybee","blossom","butterfly","seedling"],["mushroom","evergreen-tree","deciduous-tree","fallen-leaf","maple-leaf","snail","chestnut","herb"],["spiral-shell","tropical-fish","palm-tree","crab","sun"],["lollipop","candy","doughnut","cupcake","shortcake","cookie","ice-cream"],["crescent-moon","ringed-planet","rocket","comet","shooting-star","glowing-star"],["snowman","christmas-tree","snowflake","cloud-with-snow","wrapped-gift"],["crystal-ball","castle","unicorn","magic-wand","gem-stone","sparkles","crown"]],Uc=new Map;function H2(s){const t=Jn(s);let e=Uc.get(t.id);return e||(e=Nh(t,512,99+s).toDataURL("image/jpeg",.86),Uc.set(t.id,e)),e}class V2{el;scroll;inner;coinsEl;playBtn;debugBtn;cb;data;width=400;height=0;constructor(t,e){this.cb=e,this.el=rt("div",{class:"map"}),this.scroll=rt("div",{class:"map-scroll"}),this.inner=rt("div",{class:"map-inner"}),this.scroll.append(this.inner),this.coinsEl=rt("span");const n=rt("div",{class:"pill",html:fe("coin",34)},this.coinsEl),i=rt("button",{class:"btn round white",html:fe("framed-picture",30),attrs:{"aria-label":At("album")}});i.addEventListener("click",()=>{Ft.unlock(),Ft.play("button"),e.onAlbum()});const r=rt("button",{class:"btn round white",html:fe("gear",30),attrs:{"aria-label":At("settings")}});r.addEventListener("click",()=>{Ft.unlock(),Ft.play("button"),e.onSettings()}),this.debugBtn=rt("button",{class:"btn round white hidden",html:fe("lady-beetle",30),attrs:{"aria-label":At("debugLevels")}}),this.debugBtn.addEventListener("click",()=>{Ft.unlock(),Ft.play("button"),e.onDebug()});const a=rt("div",{class:"topbar"},n,rt("div",{class:"right"},this.debugBtn,i,r));this.playBtn=Lr("","big green",()=>this.cb.onPlay(this.data.unlocked));const o=rt("div",{class:"play-dock"},this.playBtn);this.el.append(this.scroll,a,o),t.append(this.el)}show(t){this.data=t,this.el.classList.remove("hidden"),this.render()}hide(){this.el.classList.add("hidden")}get visible(){return!this.el.classList.contains("hidden")}refreshTop(){this.coinsEl.textContent=String(this.data.coins)}nodeY(t){const e=_s(t),n=Ic+(t-1)*ls+(e+1)*cs-cs*.5;return this.height-n}nodeX(t){const e=Math.min(120,this.width*.28);return this.width/2+Math.sin(t*.85)*e+Math.sin(t*.31)*e*.25}render(){const t=this.data;this.refreshTop(),this.debugBtn.classList.toggle("hidden",!t.debug),this.playBtn.innerHTML=`${Ae("play",26)} ${At("level",{n:t.unlocked})}`;const e=t.debug?Math.max(t.total,t.unlocked+6):Math.max(t.unlocked+6,Math.min(t.total,Kn)),n=_s(e)+1,i=Math.min(n*Kn,Math.max(e,1));this.width=Math.min(520,window.innerWidth),this.height=Ic+i*ls+n*cs+k2;const r=this.inner;r.innerHTML="",r.style.width=this.width+"px",r.style.height=this.height+"px",this.el.style.background=Jn(_s(t.unlocked)).bg;for(let l=0;l<n;l++){const h=l*Kn+1,f=(l+1)*Kn,u=l===n-1?0:this.nodeY(f)-ls/2-cs*.5,d=l===0?this.height:this.nodeY(h)+ls/2+cs*.5,g=rt("div",{class:"world-bg"});if(g.style.top=u+"px",g.style.height=d-u+"px",g.style.left="calc(50% - 50vw)",g.style.width="100vw",g.style.backgroundImage=`url(${H2(l)})`,g.style.backgroundColor=Jn(l).ground.base,r.append(g),l>0){const w=rt("div",{class:"world-fade"});w.style.top=d-80+"px",w.style.left="calc(50% - 50vw)",w.style.width="100vw",w.style.background=`linear-gradient(180deg, ${Jn(l).ground.base}00, ${Jn(l).ground.base}cc 50%, ${Jn(l-1).ground.base}00)`,r.append(w)}const S=Mn[l%Mn.length],m=h>t.total&&t.total>0,p=rt("div",{class:"world-banner",html:`<small>${At("world",{n:l+1})}${m?" · ∞":""}</small>${m?At("endless"):qi(S.name)}`});p.style.top=this.nodeY(h)+ls*.5+18+"px",p.style.background=`linear-gradient(180deg, ${S.ui.accent}, ${W2(S.ui.accent,-.18)})`,r.append(p);const M=Dc[l%Dc.length];for(let w=0;w<9;w++){const _=h+Math.floor((w+.5)*(Kn/9)),E=this.nodeY(_)+w*37%60-30,C=this.nodeX(_)>this.width/2?-1:1,v=this.width/2+C*(this.width*.36+w*53%40),T=38+w*29%26,R=rt("div",{class:"deco",html:fe(M[w%M.length],T)});R.style.left=v-T/2+"px",R.style.top=E-T/2+"px",R.style.transform=`rotate(${w*47%40-20}deg)`,r.append(R)}}const a=[];for(let l=1;l<=i;l++)a.push([this.nodeX(l),this.nodeY(l)]);const o=G2(a),c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.classList.add("trail"),c.setAttribute("width",String(this.width)),c.setAttribute("height",String(this.height)),c.innerHTML=`<path d="${o}" fill="none" stroke="rgba(90,60,30,0.25)" stroke-width="34" stroke-linecap="round" transform="translate(0 4)"/><path d="${o}" fill="none" stroke="#fff4dc" stroke-opacity="0.92" stroke-width="30" stroke-linecap="round"/><path d="${o}" fill="none" stroke="#c7a57a" stroke-opacity="0.55" stroke-width="5" stroke-dasharray="2 14" stroke-linecap="round"/>`,r.append(c);for(let l=1;l<=i;l++){const h=s2(l),f=(t.stars[l]??0)>0,u=l===t.unlocked,d=l>t.unlocked&&!t.debug,g=rt("button",{class:`node ${h}`+(f?" done":"")+(u?" current":"")+(d?" locked":""),attrs:{"aria-label":At("level",{n:l})}});g.style.left=this.nodeX(l)+"px",g.style.top=this.nodeY(l)+"px";const S=f?t.picture(l):null;if(S){const m=Vr(S,44,{rounded:!1});m.className="thumb",g.append(m,rt("span",{class:"num-small",text:String(l)}))}else g.append(String(l));if(f){const m=t.stars[l];g.append(rt("span",{class:"nstars",html:[1,2,3].map(p=>fe("star",20,p<=m?"":"off")).join("")}))}if(!d&&h!=="normal"&&g.append(rt("span",{class:"badge",html:fe(h==="superhard"?"skull":"fire",26)})),d&&l===t.unlocked+1&&g.append(rt("span",{class:"lockico",html:fe("locked",22)})),t.debug){const m=t.stats(l);m&&g.append(rt("span",{class:"dbg",text:`c${Math.round(m.casual*100)} g${Math.round(m.greedy*100)} 🧠${m.critical??"?"}`}))}if(g.addEventListener("click",()=>{if(Ft.unlock(),d){Ft.play("invalid"),g.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"translateX(0)"}],{duration:220});return}Ft.play("button"),this.cb.onPlay(l)}),r.append(g),u){const m=rt("div",{class:"map-ant",html:fe("ant",50)});m.style.left=this.nodeX(l)+"px",m.style.top=this.nodeY(l)+"px",r.append(m)}}requestAnimationFrame(()=>{this.scroll.scrollTop=this.nodeY(t.unlocked)-this.scroll.clientHeight*.55})}}function G2(s){if(s.length<2)return"";let t=`M${s[0][0].toFixed(1)},${s[0][1].toFixed(1)}`;for(let e=0;e<s.length-1;e++){const n=s[Math.max(0,e-1)],i=s[e],r=s[e+1],a=s[Math.min(s.length-1,e+2)],o=i[0]+(r[0]-n[0])/6,c=i[1]+(r[1]-n[1])/6,l=r[0]-(a[0]-i[0])/6,h=r[1]-(a[1]-i[1])/6;t+=` C${o.toFixed(1)},${c.toFixed(1)} ${l.toFixed(1)},${h.toFixed(1)} ${r[0].toFixed(1)},${r[1].toFixed(1)}`}return t}function W2(s,t){const e=parseInt(s.slice(1),16),n=i=>Math.max(0,Math.min(255,Math.round(i+i*t)));return`rgb(${n(e>>16&255)},${n(e>>8&255)},${n(e&255)})`}class X2{el;list;countEl;constructor(t,e){this.el=rt("div",{class:"album hidden"});const n=rt("button",{class:"btn round white",html:Ae("back",26),attrs:{"aria-label":"back"}});n.addEventListener("click",()=>{Ft.play("button"),e()}),this.countEl=rt("span");const i=rt("div",{class:"topbar"},n,rt("div",{class:"pill",html:fe("framed-picture",32)},this.countEl));this.list=rt("div"),this.el.append(this.list),t.append(this.el,i),i.classList.add("album-top","hidden"),this.top=i}top;show(t,e){this.el.classList.remove("hidden"),this.top.classList.remove("hidden"),this.list.innerHTML="";let n=0;const i=Math.ceil(t.length/Kn);for(let r=0;r<i;r++){const a=Mn[r%Mn.length];this.list.append(rt("h2",{text:`${At("world",{n:r+1})} · ${qi(a.name)}`}));const o=rt("div",{class:"album-grid"});for(const c of t.filter(l=>_s(l.n)===r)){const l=(e[c.n]??0)>0;l&&n++;const h=rt("div",{class:"album-card"+(l?"":" missing")}),f=rt("div",{class:"pic"});if(l){const u=Vr(c.picture,110,{rounded:!0});u.style.width=u.style.height="",f.append(u)}else f.textContent="?";h.append(f,rt("span",{class:"nm",text:l?qi(c.name)||`#${c.n}`:`#${c.n}`})),o.append(h)}this.list.append(o)}this.countEl.textContent=`${n} / ${t.length}`,this.el.scrollTop=0}hide(){this.el.classList.add("hidden"),this.top.classList.add("hidden")}}const hs=s=>s===void 0?"—":`${Math.round(s*100)}%`;class q2{constructor(t,e,n){this.onPlay=n,this.el=rt("div",{class:"album debug-list hidden"});const i=rt("button",{class:"btn round white",html:Ae("back",26),attrs:{"aria-label":"back"}});i.addEventListener("click",()=>{Ft.play("button"),e()}),this.summary=rt("div",{class:"pill debug-pill"}),this.top=rt("div",{class:"topbar album-top hidden"},i,this.summary),this.list=rt("div"),this.el.append(this.list),t.append(this.el,this.top)}onPlay;el;list;top;summary;show(t,e){this.el.classList.remove("hidden"),this.top.classList.remove("hidden"),this.list.innerHTML="";const n={normal:[],hard:[],superhard:[]};for(const a of t)a.stats&&n[a.tier].push(a.stats.casual);const i=a=>a.length?a.reduce((o,c)=>o+c,0)/a.length:void 0;this.summary.innerHTML=`${fe("lady-beetle",28)} ${t.length} · <span class="tier-dot normal"></span>${hs(i(n.normal))} <span class="tier-dot hard"></span>${hs(i(n.hard))} <span class="tier-dot superhard"></span>${hs(i(n.superhard))}`,this.list.append(rt("p",{class:"debug-legend",html:"casual / greedy — доля побед симулированных игроков (случайный разумный / жадный), чем меньше, тем сложнее. 🧠 critical — сколько раз на пути к победе неверная коробка ведёт в тупик (надо подумать). casual / greedy — win rate of simulated players (lower = harder); 🧠 critical — decisions where a wrong box loses."}));const r=Math.ceil(t.length/Kn);for(let a=0;a<r;a++){const o=Mn[a%Mn.length];this.list.append(rt("h2",{text:`${At("world",{n:a+1})} · ${qi(o.name)}`}));const c=rt("div",{class:"debug-grid"});for(const l of t.filter(h=>_s(h.n)===a))c.append(this.card(l,e[l.n]??0));this.list.append(c)}this.el.scrollTop=0}card(t,e){const n=t.stats,i=t.boxes.filter(f=>f.hidden).length,r=new Set(t.boxes.filter(f=>f.link!==void 0).map(f=>f.link)).size,a=t.boxes.filter(f=>f.frozen).length,o=[i?`❓${i}`:"",r?`🔗${r}`:"",a?`❄️${a}`:"",t.sides.length>1?`🚪${t.sides.map(f=>f[0].toUpperCase()).join("")}`:""].filter(Boolean).join(" "),c=rt("div",{class:"pic"}),l=Vr(t.picture,120,{rounded:!0});l.style.width=l.style.height="",c.append(l);const h=rt("button",{class:`debug-card ${t.tier}`},rt("div",{class:"debug-head",html:`<b>#${t.n}</b> <span class="tier-dot ${t.tier}"></span> ${qi(t.name)}${e?" "+"★".repeat(e):""}`}),c,rt("div",{class:"debug-stats",html:`<b>casual ${hs(n?.casual)}</b> · greedy ${hs(n?.greedy)}<br>🧠 ${n?.critical??"?"} critical / ${n?.decisions??"?"} decisions<br>${t.picture.w}×${t.picture.h} · ${n?.pixels??"?"} cubes · ${t.picture.palette.length} col<br>${t.boxes.length} boxes · ${t.columns.length} columns · ${t.slots} slots`+(o?`<br>${o}`:"")}));return h.addEventListener("click",()=>{Ft.unlock(),Ft.play("button"),this.onPlay(t.n)}),h}hide(){this.el.classList.add("hidden"),this.top.classList.add("hidden")}}let Fh;const ci=[];function $2(s){Fh=s}function us(){return ci.length>0}function lr(){for(;ci.length;)ci[ci.length-1].close()}function Ln(s){const t=rt("div",{class:"overlay"}),e=rt("div",{class:"dialog"+(s.scroll?" scroll":"")});e.append(rt("div",{class:"dialog-head "+(s.head??"blue"),text:s.title}));let n=!1;const i={el:e,close(){if(n)return;n=!0;const r=ci.indexOf(i);r>=0&&ci.splice(r,1),t.classList.add("out"),setTimeout(()=>t.remove(),180)}};if(s.closable!==!1&&s.onClose){const r=rt("button",{class:"btn close-x",html:Ae("close",22)});r.addEventListener("click",()=>{Ft.play("button"),i.close(),s.onClose?.()}),e.append(r)}for(const r of s.body??[])e.append(typeof r=="string"?rt("p",{html:r}):r);if(s.buttons?.length){const r=rt("div",{class:"actions"+(s.row?" row":"")});for(const a of s.buttons)r.append(Lr(a.label,a.cls??"",()=>{a.onClick()!==!1&&i.close()}));e.append(r)}return t.append(e),Fh.append(t),ci.push(i),Ft.play("whoosh",{volume:.5}),i}let ri=null,Nc=0;function fs(s,t,e=1800){ri||(ri=rt("div",{class:"toast"})),ri.parentElement!==s&&s.append(ri),ri.textContent=t,ri.classList.add("show"),clearTimeout(Nc),Nc=window.setTimeout(()=>ri?.classList.remove("show"),e)}const Qo="pixel-picnic-save-v1";function mr(){return{v:1,level:1,stars:{},coins:120,boosters:{hint:0,undo:0,slot:0,shuffle:0,grab:0},seen:[],settings:{music:.5,sfx:.8,lang:null,speed:1,debug:!1}}}function Y2(){try{const s=localStorage.getItem(Qo);if(!s)return mr();const t=JSON.parse(s),e=mr();return{...e,...t,boosters:{...e.boosters,...t.boosters??{}},settings:{...e.settings,...t.settings??{}},stars:t.stars??{},seen:t.seen??[]}}catch{return mr()}}function ke(s){try{localStorage.setItem(Qo,JSON.stringify(s))}catch{}}function Fc(){try{localStorage.removeItem(Qo)}catch{}return mr()}const Z2="modulepreload",J2=function(s,t){return new URL(s,t).href},Oc={},K2=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let l=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");i=l(e.map(h=>{if(h=J2(h,n),h in Oc)return;Oc[h]=!0;const f=h.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(n)for(let g=a.length-1;g>=0;g--){const S=a[g];if(S.href===h&&(!f||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":Z2,f||(d.as="script"),d.crossOrigin="",d.href=h,c&&d.setAttribute("nonce",c),document.head.appendChild(d),f)return new Promise((g,S)=>{d.addEventListener("load",g),d.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};let gr=null,cr=null;const vr=new Map,Ir=new Map;async function Oh(){return gr||(gr=(await K2(()=>import("./levels-B5OaRdUO.js"),[],import.meta.url)).default??[]),gr}function Q2(){return gr??[]}async function j2(s){const t=await Oh();if(s<=t.length)return t[s-1];const e=Ir.get(s);if(e)return e;const n=await Bh(s,t);return Ir.set(s,n),n}function Bh(s,t){cr||(cr=new Worker(new URL(""+new URL("genWorker-CQhd8hIJ.js",import.meta.url).href,import.meta.url),{type:"module"}),cr.onmessage=n=>{vr.get(n.data.n)?.(n.data.level),vr.delete(n.data.n)});const e=t[s*7919%t.length];return new Promise(n=>{vr.set(s,n),cr.postMessage({n:s,picture:e.picture,name:e.name,sides:e.sides})})}function tg(s){const t=Q2();s>t.length&&t.length&&!Ir.has(s)&&!vr.has(s)&&Bh(s,t).then(e=>Ir.set(s,e))}const eg={hidden:"red-question-mark",link:"link",top:"ant",frozen:"snowflake",sides:"world-map"};class ng{save=Y2();levels=[];stage=document.getElementById("stage");ui=document.getElementById("ui");view=null;game=null;hud=null;map;album;debugList;autoTimer=0;raf=0;last=0;rescued=!1;tutorial=0;loadingEl=null;async init(){this.save.settings.lang&&or(this.save.settings.lang),this.loadingEl=rt("div",{class:"loading"},rt("div",{class:"logo",html:`${fe("ant",96)}<h1>${At("title")}</h1><p>${At("loading")}</p>`})),document.getElementById("app").append(this.loadingEl),this.save.settings.lang?or(this.save.settings.lang):or(Ac()),$2(this.ui),await r2(),this.levels=await Oh(),Ft.setMusicVolume(this.save.settings.music),Ft.setSfxVolume(this.save.settings.sfx),this.map=new V2(this.ui,{onPlay:c=>this.play(c),onSettings:()=>this.openSettings(),onAlbum:()=>this.openAlbum(),onDebug:()=>this.openDebugList()}),this.album=new X2(this.ui,()=>{this.album.hide(),this.showMap()}),this.debugList=new q2(this.ui,()=>{this.debugList.hide(),this.showMap()},c=>{this.debugList.hide(),this.play(c)});const t=()=>Ft.unlock();window.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("keydown",c=>{c.key==="Escape"&&this.game&&!us()&&this.openPause()}),this.stage.addEventListener("pointerdown",c=>this.onStageTap(c)),this.stage.addEventListener("pointermove",c=>{if(c.pointerType!=="mouse"||!this.game||us())return;const l=this.stage.getBoundingClientRect(),h=this.game.hover(c.clientX-l.left,c.clientY-l.top);this.stage.style.cursor=h!==null&&(this.game.grabMode||this.game.sim.canTake(h))?"pointer":""}),this.stage.addEventListener("pointerleave",()=>this.game?.hover(-1,-1));const e=new URLSearchParams(location.search);e.has("reset")&&(this.save=Fc()),e.has("debug")&&(this.save.settings.debug=e.get("debug")!=="0",ke(this.save));const n=Number(e.get("boosters"));if(n>0)for(const c of li)this.save.boosters[c]=n;const i=Number(e.get("coins"));i>0&&(this.save.coins=i);const r=Number(e.get("progress"));if(r>1){for(let c=1;c<r;c++)this.save.stars[c]=this.save.stars[c]??(c%4===0?2:3);this.save.level=Math.max(this.save.level,r);for(const c of["tutorial",...li.map(l=>"booster:"+l)])this.save.seen.includes(c)||this.save.seen.push(c);ke(this.save)}e.has("demo")&&this.startDemo(Number(e.get("demo"))||0);const a=Number(e.get("level"));if(a>0){this.save.level=Math.max(this.save.level,a);for(const c of["tutorial",...li.map(l=>"booster:"+l)])this.save.seen.includes(c)||this.save.seen.push(c);ke(this.save),this.play(a)}else this.showMap();const o=this.loadingEl;setTimeout(()=>{o?.classList.add("out"),setTimeout(()=>o?.remove(),450)},150)}startDemo(t){let e=0,n=-1;setInterval(()=>{this.game&&performance.now()-this.last>120&&(this.last=performance.now(),this.game.update(.05,this.last/1e3))},50),setInterval(()=>{const i=this.game;if(!i||us()||i.status!=="playing"||(i.level.n!==n&&(n=i.level.n,e=0),t&&e>=t))return;const r=i.level.solution?.[e];r!==void 0&&i.sim.isQuiet()&&i.takeBox(r)&&e++},250)}mapData(){return{unlocked:this.save.level,stars:this.save.stars,coins:this.save.coins,total:this.levels.length,picture:t=>this.levels[t-1]?.picture??null,debug:this.save.settings.debug,stats:t=>this.levels[t-1]?.stats}}openDebugList(){this.map.hide(),this.debugList.show(this.levels,this.save.stars)}showMap(){this.stopLoop(),this.stopAuto(),this.game?.dispose(),this.game=null,this.hud?.destroy(),this.hud=null,this.stage.style.visibility="hidden",this.map.show(this.mapData()),Ft.startMusic(Jn(Math.floor((this.save.level-1)/20)).music)}openAlbum(){this.map.hide(),this.album.show(this.levels,this.save.stars)}ensureView(){return this.view||(this.view=new y2(this.stage,{onPick:()=>this.game?.onPick(),onDeliver:()=>this.game?.onDeliver()}),this.view.resize(window.innerWidth,window.innerHeight)),this.view}async play(t){lr();const e=await j2(t),n=F2(t).filter(r=>!this.save.seen.includes("booster:"+r)),i=N2(t).filter(r=>!this.save.seen.includes("mech:"+r));this.startLevel(e);for(const r of i)this.introMechanic(r);for(const r of n)this.introBooster(r);tg(t+1)}startLevel(t){this.map.hide(),this.album.hide(),this.game?.dispose(),this.hud?.destroy();const e=this.ensureView();this.stage.style.visibility="visible";const n=Jn(t.world);if(this.hud=new B2(this.ui,{onPause:()=>this.openPause(),onSpeed:()=>this.cycleSpeed(),onBooster:r=>this.onBooster(r)}),this.hud.setLevel(t.n,t.tier),this.hud.setProgress(0,1),this.stopAuto(),this.save.settings.debug){const r=t.stats,a=o=>`${Math.round(o*100)}%`;this.hud.setDebug(r?`casual ${a(r.casual)} · greedy ${a(r.greedy)} · 🧠 ${r.critical??"?"}/${r.decisions??"?"} · ${r.pixels} cubes · ${t.boxes.length} boxes`:`${t.boxes.length} boxes · ${t.picture.palette.length} col`)}const i=this.hud.insets();e.insets={top:i.top,bottom:i.bottom,left:0,right:0},this.rescued=!1,this.game=new P2(e,t,n,{onWin:r=>this.onWin(r),onStuck:()=>this.onStuck(),onProgress:(r,a)=>this.hud?.setProgress(r,a),onToast:r=>this.toast(r),onChange:()=>this.refreshBoosters()}),this.game.speed=this.save.settings.speed,this.hud.setSpeed(this.game.speed),this.refreshBoosters(),Ft.startMusic(n.music),t.tier!=="normal"&&setTimeout(()=>{this.hud?.banner(At(t.tier==="superhard"?"superhardLevel":"hardLevel"),t.tier),Ft.play("unlock",{volume:.6})},350),this.tutorial=t.n===1&&!this.save.seen.includes("tutorial")?1:0,this.tutorial&&setTimeout(()=>this.showTutorialStep(),600),this.startLoop()}startLoop(){this.stopLoop(),this.last=performance.now();const t=e=>{const n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.game?.update(n,e/1e3),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}stopLoop(){cancelAnimationFrame(this.raf),this.raf=0}onResize(){if(this.view&&(this.view.resize(window.innerWidth,window.innerHeight),this.hud&&this.game)){const t=this.hud.insets();this.view.insets={top:t.top,bottom:t.bottom,left:0,right:0},this.view.relayout(!1)}this.map.visible&&this.map.render()}onStageTap(t){if(!this.game||us())return;const e=this.stage.getBoundingClientRect(),n=this.game.taps;this.game.tap(t.clientX-e.left,t.clientY-e.top),this.game.taps!==n&&this.tutorial&&(this.tutorial++,this.showTutorialStep())}cycleSpeed(){if(!this.game)return;const t=this.game.speed>=3?1:this.game.speed+1;this.game.speed=t,this.save.settings.speed=t,ke(this.save),this.hud?.setSpeed(t)}toast(t){let n={blocked:"toastBlocked",frozen:"toastFrozen",slots:"toastSlots",link:"toastLink",nohint:"toastNoHint",grab:"toastGrab"}[t];t==="slots"&&this.game&&this.game.sim.freeSlots()===1&&(n="toastLinkSlots"),fs(this.ui,At(n),t==="nohint"?3e3:1800)}showTutorialStep(){const t=this.game,e=this.hud;if(!t||!e)return;const n=Math.max(90,e.insets().top+4);if(this.tutorial===1){const i=t.sim.clone(),r=i.legalMoves(),a=i.exposedCounts(),o=t.level.solution?.[0],c=o!==void 0&&i.canTake(o)?o:r.find(h=>a[i.boxColor(h)]>0)??r[0],l=t.view.toScreen(t.view.queue.boxTop(c,new P));e.showTutorial(At("tutorial1"),n,l)}else this.tutorial===2?(e.showTutorial(At("tutorial2"),n),setTimeout(()=>this.tutorial===2&&e.hideTutorial(),5e3)):this.tutorial===3?(e.showTutorial(At("tutorial3"),n),setTimeout(()=>this.tutorial===3&&e.hideTutorial(),5e3)):(e.hideTutorial(),this.tutorial=0,this.markSeen("tutorial"))}markSeen(t){this.save.seen.includes(t)||(this.save.seen.push(t),ke(this.save))}boosterState(){const t=this.game,e=t?.level.n??1,n={};for(const i of li)n[i]={count:this.save.boosters[i],locked:e<Oi[i],unlockAt:Oi[i],active:i==="grab"&&!!t?.grabMode,usable:!!t&&t.canUse(i)};return n}refreshBoosters(){this.hud?.setBoosters(this.boosterState())}onBooster(t){const e=this.game;if(e){if(e.level.n<Oi[t]){Ft.play("invalid"),fs(this.ui,At("locked",{n:Oi[t]}));return}if(t==="grab"&&e.grabMode){e.cancelGrab(),this.save.boosters.grab++,ke(this.save),this.refreshBoosters();return}if(this.save.boosters[t]<=0){this.openShop(t);return}if(!e.canUse(t)){Ft.play("invalid"),t==="grab"&&fs(this.ui,At("toastSlots"));return}this.spendBooster(t)}}spendBooster(t,e=!1){const n=this.game;if(!n)return!1;const i=n.use(t);return i&&(this.save.boosters[t]--,e&&(this.rescued=!0),ke(this.save)),this.refreshBoosters(),i}openShop(t,e=!1){const n=Cc[t],i=this.game;i&&(i.paused=!0);const r=rt("div",{class:"mech-art",html:Bc(t)});Ln({title:At(`booster_${t}`),head:"purple",body:[r,At(`boosterDesc_${t}`),rt("p",{class:"subtle",html:`${fe("coin",20)} ${this.save.coins}`})],buttons:[{label:`${At("buy")} <span class="price">${fe("coin",26)} ${n}</span>`,cls:"green",onClick:()=>this.save.coins<n?(Ft.play("invalid"),fs(this.ui,At("notEnough")),!1):(this.save.coins-=n,this.save.boosters[t]++,ke(this.save),Ft.play("coin"),i&&(i.paused=!1),this.spendBooster(t,e),!0)}],onClose:()=>{i&&(i.paused=!1),e&&i?.status==="stuck"&&this.onStuck()}})}onWin(t){const e=t.level.n,n=t.stars(this.rescued),i=U2(t.level.tier,n),r=!(this.save.stars[e]>0);this.save.stars[e]=Math.max(this.save.stars[e]??0,n),this.save.coins+=i,e>=this.save.level&&(this.save.level=e+1),ke(this.save);const a=t.celebrate();Ft.duck(.25,2.5),Ft.play("win"),this.tutorial&&(this.hud?.hideTutorial(),this.tutorial=0,this.markSeen("tutorial")),setTimeout(()=>this.showWinDialog(t.level,n,i,r),Math.max(900,a*1e3+200))}showWinDialog(t,e,n,i){const r=Vr(t.picture,150,{rounded:!0,bg:"#fffaf0"});r.classList.add("pic-thumb");const a=rt("div",{class:"stars",html:[1,2,3].map(()=>fe("star",64,"star")).join("")}),o=qi(t.name),c=rt("div",{class:"coins-gain",html:`${fe("coin",30)} +${n}`}),l=[a,r];o&&l.push(rt("p",{html:`<b>${o}</b>`,style:"margin:0 0 6px"})),l.push(c),i&&l.push(rt("p",{class:"subtle",text:At("addedAlbum")})),Ln({title:At(e===3?"win3":e===2?"win2":"win1"),head:"green",body:l,buttons:[{label:`${At("next")} ${Ae("play",22)}`,cls:"green big",onClick:()=>{this.play(t.n+1)}},{label:`${Ae("map",22)} ${At("map")}`,cls:"white small",onClick:()=>this.showMap()}]}),a.querySelectorAll(".star").forEach((f,u)=>{u<e&&setTimeout(()=>{f.classList.add("on"),Ft.play("star",{pitch:u})},350+u*330)}),setTimeout(()=>Ft.play("coin"),350+e*330+150)}onStuck(){const t=this.game;if(!t)return;Ft.play("lose");const e=[],n=t.level.n,i=r=>{if(n<Oi[r])return;const a=this.save.boosters[r];e.push({label:`${At(`booster_${r}`)} ${a>0?`<span class="price">×${a}</span>`:`<span class="price">${fe("coin",24)} ${Cc[r]}</span>`}`,cls:r==="slot"?"green":"blue",onClick:()=>{a>0?this.spendBooster(r,!0):setTimeout(()=>this.openShop(r,!0),200)}})};i("slot"),i("undo"),i("shuffle"),e.push({label:`${Ae("restart",22)} ${At("retry")}`,cls:"white",onClick:()=>{this.restart()}}),Ln({title:At("stuckTitle"),head:"red",body:[At("stuckText")],buttons:e})}async restart(){if(!this.game)return;const t=this.game.level;this.startLevel(t)}openPause(){const t=this.game;if(!t)return;t.paused=!0;const e=[{label:`${Ae("play",22)} ${At("resume")}`,cls:"green",onClick:()=>{t.paused=!1}},{label:`${Ae("restart",22)} ${At("restart")}`,cls:"blue",onClick:()=>{this.restart()}},{label:`${Ae("map",22)} ${At("map")}`,cls:"white",onClick:()=>this.showMap()}];this.save.settings.debug&&e.push({label:`${fe("lady-beetle",24)} ${At("autoSolve")}`,cls:"purple small",onClick:()=>{t.paused=!1,this.startAuto()}},{label:`${Ae("ff",20)} ${At("skipLevel")}`,cls:"purple small",onClick:()=>this.skipLevel()}),Ln({title:At("paused"),head:"purple",body:[this.volumeRow("music"),this.volumeRow("sfx")],buttons:e,onClose:()=>{t.paused=!1}})}startAuto(){this.stopAuto();const t=this.game;t&&(t.speed=3,this.hud?.setSpeed(3),this.autoTimer=window.setInterval(()=>{if(this.game!==t)return this.stopAuto();if(us())return;const e=t.autoStep();e==="stuck"?(this.stopAuto(),fs(this.ui,At("noSolution"),2500)):e==="done"&&this.stopAuto()},200))}stopAuto(){clearInterval(this.autoTimer),this.autoTimer=0}skipLevel(){const t=this.game;if(!t)return;const e=t.level.n;this.save.stars[e]=Math.max(this.save.stars[e]??0,1),e>=this.save.level&&(this.save.level=e+1),ke(this.save),this.play(e+1)}volumeRow(t){const e=rt("input",{attrs:{type:"range",min:"0",max:"1",step:"0.05"}});return e.value=String(this.save.settings[t]),e.addEventListener("input",()=>{const n=Number(e.value);this.save.settings[t]=n,t==="music"?Ft.setMusicVolume(n):Ft.setSfxVolume(n),ke(this.save)}),e.addEventListener("change",()=>t==="sfx"&&Ft.play("tap")),rt("div",{class:"setting-row"},rt("span",{html:`${fe(t==="music"?"musical-note":"speaker-high-volume",26)} ${At(t==="music"?"music":"sounds")}`}),e)}openSettings(){const t=rt("div",{class:"seg"});["ru","en"].forEach(o=>{const c=rt("button",{class:Ac()===o?"on":"",text:o==="ru"?"Русский":"English"});c.addEventListener("click",()=>{Ft.play("button"),this.save.settings.lang=o,ke(this.save),or(o),lr(),this.map.render(),this.openSettings()}),t.append(c)});const e=rt("div",{class:"setting-row"},rt("span",{text:At("language")}),t),n=rt("div",{class:"seg"});[!0,!1].forEach(o=>{const c=rt("button",{class:this.save.settings.debug===o?"on":"",text:At(o?"on":"off")});c.addEventListener("click",()=>{Ft.play("button"),this.save.settings.debug=o,ke(this.save),lr(),this.map.show(this.mapData()),this.openSettings()}),n.append(c)});const i=rt("div",{class:"setting-row"},rt("span",{html:`${fe("lady-beetle",24)} ${At("debug")}<br><small style="font-size:12px;opacity:.7">${At("debugHint")}</small>`}),n),r=Lr(At("credits"),"white small",()=>this.openCredits()),a=Lr(At("resetProgress"),"red small",()=>{Ln({title:At("resetProgress"),head:"red",body:[At("resetConfirm")],row:!0,buttons:[{label:Ae("check",24),cls:"red",onClick:()=>{this.save=Fc(),ke(this.save),lr(),this.showMap()}},{label:Ae("close",24),cls:"white",onClick:()=>{}}]})});Ln({title:At("settings"),head:"purple",body:[this.volumeRow("music"),this.volumeRow("sfx"),e,i,rt("div",{class:"actions"},r,a)],onClose:()=>{}})}openCredits(){Ln({title:At("credits"),head:"blue",scroll:!0,body:[rt("p",{class:"credits",text:At("licenseText")})],buttons:[{label:At("close"),cls:"white small",onClick:()=>{}}]})}introMechanic(t){const e=this.game;e&&(e.paused=!0),Ln({title:At("newMechanic"),head:"green",body:[rt("div",{class:"mech-art",html:fe(eg[t],84)}),rt("p",{html:`<b style="font-size:21px">${At(`mech_${t}_t`)}</b>`}),At(`mech_${t}_d`)],buttons:[{label:At("gotIt"),cls:"green",onClick:()=>{this.markSeen("mech:"+t),e&&(e.paused=!1)}}]}),Ft.play("unlock")}introBooster(t){const e=this.game;e&&(e.paused=!0),this.save.boosters[t]+=Rc,this.markSeen("booster:"+t),ke(this.save),this.refreshBoosters(),Ln({title:At("boosterUnlocked"),head:"purple",body:[rt("div",{class:"mech-art",html:Bc(t)}),rt("p",{html:`<b style="font-size:21px">${At(`booster_${t}`)}</b> · ${At("free",{n:Rc})}`}),At(`boosterDesc_${t}`)],buttons:[{label:At("gotIt"),cls:"green",onClick:()=>{e&&(e.paused=!1)}}]}),Ft.play("unlock")}}function Bc(s){switch(s){case"hint":return fe("light-bulb",84);case"grab":return fe("magnet",84);case"undo":return`<span style="color:#ff8a3d">${Ae("undo",84)}</span>`;case"shuffle":return`<span style="color:#3aa0ff">${Ae("shuffle",84)}</span>`;case"slot":return`<span style="color:#35b84a">${Ae("slot",84)}</span>`}}new ng().init().catch(s=>{console.error(s),document.body.insertAdjacentHTML("beforeend",`<pre style="position:fixed;inset:auto 0 0 0;padding:12px;background:#fff;color:#c00;white-space:pre-wrap">${String(s?.stack??s)}</pre>`)});
