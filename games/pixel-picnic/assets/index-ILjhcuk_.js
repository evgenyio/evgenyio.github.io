(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Bo="186",hu=0,Ml=1,uu=2,Es=1,fu=2,bs=3,xi=0,We=1,cn=2,zn=0,ni=1,Rs=2,Sl=3,bl=4,du=5,qi=100,pu=101,mu=102,gu=103,vu=104,xu=200,_u=201,Mu=202,Su=203,eh=204,nh=205,bu=206,yu=207,wu=208,Eu=209,Tu=210,Au=211,Cu=212,Ru=213,Pu=214,Ga=0,Wa=1,Xa=2,Ps=3,qa=4,$a=5,Ya=6,Za=7,zo=0,Lu=1,Iu=2,En=0,ih=1,sh=2,rh=3,ah=4,oh=5,lh=6,ko=7,ch=300,_i=301,Qi=302,Qr=303,jr=304,Gr=306,Tr=1e3,On=1001,Ja=1002,Ue=1003,Du=1004,Hs=1005,Be=1006,ta=1007,pi=1008,Ye=1009,hh=1010,uh=1011,Ls=1012,Ho=1013,Tn=1014,un=1015,An=1016,Vo=1017,Go=1018,Is=1020,fh=35902,dh=35899,ph=1021,mh=1022,fn=1023,Hn=1026,mi=1027,Wo=1028,Xo=1029,Mi=1030,qo=1031,$o=1033,xr=33776,_r=33777,Mr=33778,Sr=33779,Ka=35840,Qa=35841,ja=35842,to=35843,eo=36196,no=37492,io=37496,so=37488,ro=37489,Ar=37490,ao=37491,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,xo=37818,_o=37819,Mo=37820,So=37821,bo=36492,yo=36494,wo=36495,Eo=36283,To=36284,Cr=36285,Ao=36286,Uu=3200,Rr=0,Nu=1,Qn="",ye="srgb",Pr="srgb-linear",Lr="linear",he="srgb",ea=7680,Fu=519,Ou=512,Bu=513,zu=514,Yo=515,ku=516,Hu=517,Zo=518,Vu=519,Gu=35044,Wu=35048,yl="300 es",yn=2e3,Ds=2001;function Xu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qu(){const s=Ir("canvas");return s.style.display="block",s}const wl={};function El(...s){const t="THREE."+s.shift();console.log(t,...s)}function gh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=gh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ne(...s){s=gh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Zi(...s){const t=s.join(" ");t in wl||(wl[t]=!0,Gt(...s))}function $u(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Yu={[Ga]:Wa,[Xa]:Ya,[qa]:Za,[Ps]:$a,[Wa]:Ga,[Ya]:Xa,[Za]:qa,[$a]:Ps};class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Co=180/Math.PI;function is(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function Zu(s,t){return(s%t+t)%t}function ia(s,t,e){return(1-e)*s+e*t}function ls(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class ot{static{ot.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*_;g<0&&(u=-u,d=-d,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);p=Math.sin(p*v)/y,o=Math.sin(o*v)/y,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+_*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new P,Tl=new ze;class qt{static{qt.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],y=i[4],M=i[7],E=i[2],w=i[5],C=i[8];return r[0]=a*_+o*v+l*E,r[3]=a*g+o*y+l*w,r[6]=a*p+o*M+l*C,r[1]=c*_+h*v+f*E,r[4]=c*g+h*y+f*w,r[7]=c*p+h*M+f*C,r[2]=u*_+d*v+m*E,r[5]=u*g+d*y+m*w,r[8]=u*p+d*M+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ra.makeScale(t,e)),this}rotate(t){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new qt,Al=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ju(){const s={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Lr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pr]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:Al,fromXYZ:Cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Al,fromXYZ:Cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),s}const te=Ju();function kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ci;class Ku{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ci===void 0&&(Ci=Ir("canvas")),Ci.width=t.width,Ci.height=t.height;const i=Ci.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qu=0;class Jo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(aa(i[a].image)):r.push(aa(i[a]))}else r=aa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let ju=0;const oa=new P;class ke extends yi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=On,i=On,r=Be,a=pi,o=fn,l=Ye,c=ke.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=is(),this.name="",this.source=new Jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tr:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tr:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=ch;ke.DEFAULT_ANISOTROPY=1;class xe{static{xe.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(d+1)/2,E=(p+1)/2,w=(h+u)/4,C=(f+_)/4,S=(m+g)/4;return y>M&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=C/n):M>E?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=S/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=S/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tf extends yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new ke(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Jo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends tf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vh extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ee{static{ee.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,f,u,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,d,m,_,g)}set(t,e,n,i,r,a,o,l,c,h,f,u,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,m=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u+_*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u-_*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,m=o*h,_=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){const u=a*l,d=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nf,t,sf)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Xn.crossVectors(n,qe),Xn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Xn.crossVectors(n,qe)),Xn.normalize(),Vs.crossVectors(qe,Xn),i[0]=Xn.x,i[4]=Vs.x,i[8]=qe.x,i[1]=Xn.y,i[5]=Vs.y,i[9]=qe.y,i[2]=Xn.z,i[6]=Vs.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],M=n[11],E=n[15],w=i[0],C=i[4],S=i[8],T=i[12],L=i[1],U=i[5],z=i[9],O=i[13],F=i[2],R=i[6],W=i[10],G=i[14],J=i[3],q=i[7],K=i[11],Q=i[15];return r[0]=a*w+o*L+l*F+c*J,r[4]=a*C+o*U+l*R+c*q,r[8]=a*S+o*z+l*W+c*K,r[12]=a*T+o*O+l*G+c*Q,r[1]=h*w+f*L+u*F+d*J,r[5]=h*C+f*U+u*R+d*q,r[9]=h*S+f*z+u*W+d*K,r[13]=h*T+f*O+u*G+d*Q,r[2]=m*w+_*L+g*F+p*J,r[6]=m*C+_*U+g*R+p*q,r[10]=m*S+_*z+g*W+p*K,r[14]=m*T+_*O+g*G+p*Q,r[3]=v*w+y*L+M*F+E*J,r[7]=v*C+y*U+M*R+E*q,r[11]=v*S+y*z+M*W+E*K,r[15]=v*T+y*O+M*G+E*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],v=l*d-c*u,y=o*d-c*f,M=o*u-l*f,E=a*d-c*h,w=a*u-l*h,C=a*f-o*h;return e*(_*v-g*y+p*M)-n*(m*v-g*E+p*w)+i*(m*y-_*E+p*C)-r*(m*M-_*w+g*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=e*o-n*a,y=e*l-i*a,M=e*c-r*a,E=n*l-i*o,w=n*c-r*o,C=i*c-r*l,S=h*_-f*m,T=h*g-u*m,L=h*p-d*m,U=f*g-u*_,z=f*p-d*_,O=u*p-d*g,F=v*O-y*z+M*U+E*L-w*T+C*S;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/F;return t[0]=(o*O-l*z+c*U)*R,t[1]=(i*z-n*O-r*U)*R,t[2]=(_*C-g*w+p*E)*R,t[3]=(u*w-f*C-d*E)*R,t[4]=(l*L-a*O-c*T)*R,t[5]=(e*O-i*L+r*T)*R,t[6]=(g*M-m*C-p*y)*R,t[7]=(h*C-u*M+d*y)*R,t[8]=(a*z-o*L+c*S)*R,t[9]=(n*L-e*z-r*S)*R,t[10]=(m*w-_*M+p*v)*R,t[11]=(f*M-h*w-d*v)*R,t[12]=(o*T-a*U-l*S)*R,t[13]=(e*U-n*T+i*S)*R,t[14]=(_*y-m*E-g*v)*R,t[15]=(h*E-f*y+u*v)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,_=a*h,g=a*f,p=o*f,v=l*c,y=l*h,M=l*f,E=n.x,w=n.y,C=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+M)*E,i[2]=(m-y)*E,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(u+p))*w,i[6]=(g+v)*w,i[7]=0,i[8]=(m+y)*C,i[9]=(g-v)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),l=Ri.set(i[8],i[9],i[10]).length();r<0&&(a=-a),rn.copy(this);const c=1/a,h=1/o,f=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,e.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=yn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===yn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ds)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=yn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i);let m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===yn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ds)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new P,rn=new ee,nf=new P(0,0,0),sf=new P(1,1,1),Xn=new P,Vs=new P,qe=new P,Rl=new ee,Pl=new ze;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rf=0;const Ll=new P,Pi=new ze,Ln=new ee,Gs=new P,cs=new P,af=new P,of=new ze,Il=new P(1,0,0),Dl=new P(0,1,0),Ul=new P(0,0,1),Nl={type:"added"},lf={type:"removed"},Li={type:"childadded",child:null},la={type:"childremoved",child:null};class Ce extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new P,e=new mn,n=new ze,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new qt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(cs,Gs,this.up):Ln.lookAt(Gs,cs,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nl),Li.child=t,this.dispatchEvent(Li),Li.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lf),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ce.DEFAULT_UP=new P(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ie extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cf={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function ha(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Zu(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ha(a,r,t+1/3),this.g=ha(a,r,t),this.b=ha(a,r,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return te.workingToColorSpace(Oe.copy(this),t),Math.round(Jt(Oe.r*255,0,255))*65536+Math.round(Jt(Oe.g*255,0,255))*256+Math.round(Jt(Oe.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,i=Oe.g,r=Oe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ye){te.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,i=Oe.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Ws);const n=ia(qn.h,Ws.h,e),i=ia(qn.s,Ws.s,e),r=ia(qn.l,Ws.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Ut;Ut.NAMES=xh;class _h extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const an=new P,In=new P,ua=new P,Dn=new P,Ii=new P,Di=new P,Fl=new P,fa=new P,da=new P,pa=new P,ma=new xe,ga=new xe,va=new xe;class hn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),In.subVectors(n,e),ua.subVectors(t,e);const a=an.dot(an),o=an.dot(In),l=an.dot(ua),c=In.dot(In),h=In.dot(ua),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return ma.setScalar(0),ga.setScalar(0),va.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,n),va.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ma,r.x),a.addScaledVector(ga,r.y),a.addScaledVector(va,r.z),a}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),In.subVectors(t,e),an.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),In.subVectors(this.a,this.b),an.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ii.subVectors(i,n),Di.subVectors(r,n),fa.subVectors(t,n);const l=Ii.dot(fa),c=Di.dot(fa);if(l<=0&&c<=0)return e.copy(n);da.subVectors(t,i);const h=Ii.dot(da),f=Di.dot(da);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ii,a);pa.subVectors(t,r);const d=Ii.dot(pa),m=Di.dot(pa);if(m>=0&&d<=m)return e.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Di,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Fl.subVectors(r,i),o=(f-h)/(f-h+(d-m)),e.copy(i).addScaledVector(Fl,o);const p=1/(g+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class wi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),qs.subVectors(this.max,hs),Ui.subVectors(t.a,hs),Ni.subVectors(t.b,hs),Fi.subVectors(t.c,hs),$n.subVectors(Ni,Ui),Yn.subVectors(Fi,Ni),ri.subVectors(Ui,Fi);let e=[0,-$n.z,$n.y,0,-Yn.z,Yn.y,0,-ri.z,ri.y,$n.z,0,-$n.x,Yn.z,0,-Yn.x,ri.z,0,-ri.x,-$n.y,$n.x,0,-Yn.y,Yn.x,0,-ri.y,ri.x,0];return!xa(e,Ui,Ni,Fi,qs)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Ui,Ni,Fi,qs))?!1:($s.crossVectors($n,Yn),e=[$s.x,$s.y,$s.z],xa(e,Ui,Ni,Fi,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new P,new P,new P,new P,new P,new P,new P,new P],on=new P,Xs=new wi,Ui=new P,Ni=new P,Fi=new P,$n=new P,Yn=new P,ri=new P,hs=new P,qs=new P,$s=new P,ai=new P;function xa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ai.fromArray(s,r);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ee=new P,Ys=new ot;let hf=0;class pn extends yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Mh extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sh extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const uf=new wi,us=new P,_a=new P;class Bs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(_a)),this.expandByPoint(us.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ff=0;const Qe=new ee,Ma=new Ce,Oi=new P,$e=new wi,fs=new wi,Le=new P;class De extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?Sh:Mh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors($e.min,fs.min),$e.expandByPoint(Le),Le.addVectors($e.max,fs.max),$e.expandByPoint(Le)):($e.expandByPoint(fs.min),$e.expandByPoint(fs.max))}$e.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),Le.add(Oi)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new P,l[S]=new P;const c=new P,h=new P,f=new P,u=new ot,d=new ot,m=new ot,_=new P,g=new P;function p(S,T,L){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,L),u.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,L),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(U),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(U),o[S].add(_),o[T].add(_),o[L].add(_),l[S].add(g),l[T].add(g),l[L].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let S=0,T=v.length;S<T;++S){const L=v[S],U=L.start,z=L.count;for(let O=U,F=U+z;O<F;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new P,M=new P,E=new P,w=new P;function C(S){E.fromBufferAttribute(i,S),w.copy(E);const T=o[S];y.copy(T),y.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(w,T);const U=M.dot(l[S])<0?-1:1;a.setXYZW(S,y.x,y.y,y.z,U)}for(let S=0,T=v.length;S<T;++S){const L=v[S],U=L.start,z=L.count;for(let O=U,F=U+z;O<F;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new pn(u,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sa=new P,df=new P,pf=new qt;class Kn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Sa.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pf.getNormalMatrix(t),i=this.coplanarPoint(Sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let mf=0;class ss extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=is(),this.name="",this.type="Material",this.blending=ni,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=nh,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Nn=new P,ba=new P,Zs=new P,Js=new P;class bh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ba.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Js.copy(this.origin).sub(ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=Js.dot(this.direction),l=-Js.dot(Zs),c=Js.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ba).addScaledVector(Zs,u),d}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,_=e.y-a.y,g=e.z-a.z,p=n.x-a.x,v=n.y-a.y,y=n.z-a.z,M=Math.abs(l),E=Math.abs(c),w=Math.abs(h);let C,S,T,L,U,z,O,F,R,W,G,J;if(M>=E&&M>=w?(T=l,z=f,R=m,J=p,l>=0?(C=c,S=h,L=u,U=d,O=_,F=g,W=v,G=y):(C=h,S=c,L=d,U=u,O=g,F=_,W=y,G=v)):E>=w?(T=c,z=u,R=_,J=v,c>=0?(C=h,S=l,L=d,U=f,O=g,F=m,W=y,G=p):(C=l,S=h,L=f,U=d,O=m,F=g,W=p,G=y)):(T=h,z=d,R=g,J=y,h>=0?(C=l,S=c,L=f,U=u,O=m,F=_,W=p,G=v):(C=c,S=l,L=u,U=f,O=_,F=m,W=v,G=p)),T===0)return null;const q=C/T,K=S/T,Q=1/T,wt=L-q*z,St=U-K*z,jt=O-q*R,Wt=F-K*R,ie=W-q*J,Z=G-K*J,et=ie*Wt-Z*jt,xt=wt*Z-St*ie,kt=jt*St-Wt*wt;if(i){if(et<0||xt<0||kt<0)return null}else if((et<0||xt<0||kt<0)&&(et>0||xt>0||kt>0))return null;const Et=et+xt+kt;if(Et===0)return null;const Ht=Q*(et*z+xt*R+kt*J);return(Et>0?Ht<0:Ht>0)?null:this.at(Ht/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rs extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ol=new ee,oi=new bh,Ks=new Bs,Bl=new P,Qs=new P,js=new P,tr=new P,ya=new P,er=new P,zl=new P,nr=new P;class de extends Ce{constructor(t=new De,e=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){er.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(ya.fromBufferAttribute(f,t),a?er.addScaledVector(ya,h):er.addScaledVector(ya.sub(e),h))}e.add(er)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(Ks.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Ks,Bl)===null||oi.origin.distanceToSquared(Bl)>(t.far-t.near)**2))&&(Ol.copy(r).invert(),oi.copy(t.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=v,E=y;M<E;M+=3){const w=o.getX(M),C=o.getX(M+1),S=o.getX(M+2);i=ir(this,p,t,n,c,h,f,w,C,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=o.getX(g),y=o.getX(g+1),M=o.getX(g+2);i=ir(this,a,t,n,c,h,f,v,y,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=v,E=y;M<E;M+=3){const w=M,C=M+1,S=M+2;i=ir(this,p,t,n,c,h,f,w,C,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,M=g+2;i=ir(this,a,t,n,c,h,f,v,y,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function gf(s,t,e,n,i,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===xi,o),l===null)return null;nr.copy(o),nr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(nr);return c<e.near||c>e.far?null:{distance:c,point:nr.clone(),object:s}}function ir(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Qs),s.getVertexPosition(l,js),s.getVertexPosition(c,tr);const h=gf(s,t,e,n,Qs,js,tr,zl);if(h){const f=new P;hn.getBarycoord(zl,Qs,js,tr,f),i&&(h.uv=hn.getInterpolatedAttribute(i,o,l,c,f,new ot)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,l,c,f,new ot)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};hn.getNormal(Qs,js,tr,u.normal),h.face=u,h.barycoord=f}return h}class yh extends ke{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ue,h=Ue,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends pn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bi=new ee,Hl=new ee,sr=[],Vl=new wi,vf=new ee,ds=new de,ps=new Bs;class Ze extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),Vl.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Vl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),ps.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bi),Hl.multiplyMatrices(n,Bi),ds.matrixWorld=Hl,ds.raycast(t,sr);for(let a=0,o=sr.length;a<o;a++){const l=sr[a];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new kl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yh(new Float32Array(i*this.count),i,this.count,Wo,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const li=new Bs,xf=new ot(.5,.5),rr=new P;class Qo{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],y=r[13],M=r[14],E=r[15];if(i[0].setComponents(c-a,d-h,p-m,E-v).normalize(),i[1].setComponents(c+a,d+h,p+m,E+v).normalize(),i[2].setComponents(c+o,d+f,p+_,E+y).normalize(),i[3].setComponents(c-o,d-f,p-_,E-y).normalize(),n)i[4].setComponents(l,u,g,M).normalize(),i[5].setComponents(c-l,d-u,p-g,E-M).normalize();else if(i[4].setComponents(c-l,d-u,p-g,E-M).normalize(),e===yn)i[5].setComponents(c+l,d+u,p+g,E+M).normalize();else if(e===Ds)i[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=xf.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(rr.x=i.normal.x>0?t.max.x:t.min.x,rr.y=i.normal.y>0?t.max.y:t.min.y,rr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wh extends ke{constructor(t=[],e=_i,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ei extends ke{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Us extends ke{constructor(t,e,n=Tn,i,r,a,o=Ue,l=Ue,c,h=Hn,f=1){if(h!==Hn&&h!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class _f extends Us{constructor(t,e=Tn,n=_i,i,r,a=Ue,o=Ue,l,c=Hn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Eh extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cn extends De{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function m(_,g,p,v,y,M,E,w,C,S,T){const L=M/C,U=E/S,z=M/2,O=E/2,F=w/2,R=C+1,W=S+1;let G=0,J=0;const q=new P;for(let K=0;K<W;K++){const Q=K*U-O;for(let wt=0;wt<R;wt++){const St=wt*L-z;q[_]=St*v,q[g]=Q*y,q[p]=F,c.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),f.push(wt/C),f.push(1-K/S),G+=1}}for(let K=0;K<S;K++)for(let Q=0;Q<C;Q++){const wt=u+Q+R*K,St=u+Q+R*(K+1),jt=u+(Q+1)+R*(K+1),Wt=u+(Q+1)+R*K;l.push(wt,St,Wt),l.push(St,jt,Wt),J+=6}o.addGroup(d,J,T),d+=J,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Dr extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jo extends De{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new P,M=new P,E=new P;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],M),d(e[w+2],E),l(y,M,E,v)}function l(v,y,M,E){const w=E+1,C=[];for(let S=0;S<=w;S++){C[S]=[];const T=v.clone().lerp(M,S/w),L=y.clone().lerp(M,S/w),U=w-S;for(let z=0;z<=U;z++)z===0&&S===w?C[S][z]=T:C[S][z]=T.clone().lerp(L,z/U)}for(let S=0;S<w;S++)for(let T=0;T<2*(w-S)-1;T++){const L=Math.floor(T/2);T%2===0?(u(C[S][L+1]),u(C[S+1][L]),u(C[S][L])):(u(C[S][L+1]),u(C[S+1][L+1]),u(C[S+1][L]))}}function c(v){const y=new P;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const v=new P;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const M=g(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;a.push(M,1-E)}m(),f()}function f(){for(let v=0;v<a.length;v+=6){const y=a[v+0],M=a[v+2],E=a[v+4],w=Math.max(y,M,E),C=Math.min(y,M,E);w>.9&&C<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,y){const M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function m(){const v=new P,y=new P,M=new P,E=new P,w=new ot,C=new ot,S=new ot;for(let T=0,L=0;T<r.length;T+=9,L+=6){v.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),w.set(a[L+0],a[L+1]),C.set(a[L+2],a[L+3]),S.set(a[L+4],a[L+5]),E.copy(v).add(y).add(M).divideScalar(3);const U=g(E);_(w,L+0,v,U),_(C,L+2,y,U),_(S,L+4,M,U)}}function _(v,y,M,E){E<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=E/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.vertices,t.indices,t.radius,t.detail)}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new ot:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],r=[],a=[],o=new P,l=new ee;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Jt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Jt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tl extends Pn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mf extends tl{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function el(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Gl=new P,Wl=new P,wa=new el,Ea=new el,Ta=new el;class nl extends Pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Wl.subVectors(i[0],i[1]).add(i[0]),c=Wl);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Gl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Gl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),wa.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,g),Ea.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,g),Ta.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ea.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ta.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(wa.calc(l),Ea.calc(l),Ta.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Sf(s,t){const e=1-s;return e*e*t}function bf(s,t){return 2*(1-s)*s*t}function yf(s,t){return s*s*t}function Ts(s,t,e,n){return Sf(s,t)+bf(s,e)+yf(s,n)}function wf(s,t){const e=1-s;return e*e*e*t}function Ef(s,t){const e=1-s;return 3*e*e*s*t}function Tf(s,t){return 3*(1-s)*s*s*t}function Af(s,t){return s*s*s*t}function As(s,t,e,n,i){return wf(s,t)+Ef(s,e)+Tf(s,n)+Af(s,i)}class Th extends Pn{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(As(t,i.x,r.x,a.x,o.x),As(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cf extends Pn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(As(t,i.x,r.x,a.x,o.x),As(t,i.y,r.y,a.y,o.y),As(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ah extends Pn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends Pn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends Pn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,i.x,r.x,a.x),Ts(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends Pn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,i.x,r.x,a.x),Ts(t,i.y,r.y,a.y),Ts(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ph extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Xl(o,l.x,c.x,h.x,f.x),Xl(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var Ur=Object.freeze({__proto__:null,ArcCurve:Mf,CatmullRomCurve3:nl,CubicBezierCurve:Th,CubicBezierCurve3:Cf,EllipseCurve:tl,LineCurve:Ah,LineCurve3:Rf,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:Rh,SplineCurve:Ph});class Pf extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ur[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ur[i.type]().fromJSON(i))}return this}}class Ro extends Pf{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ah(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ch(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Th(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ph(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new tl(t,e,n,i,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class as extends Ro{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ro().fromJSON(i))}return this}}function Lf(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Lh(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ff(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,f=l;for(let u=e;u<i;u+=e){const d=s[u],m=s[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ns(r,a,e,o,l,c,0),a}function Lh(s,t,e,n,i){let r;if(i===$f(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=ql(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ql(a/n|0,s[a],s[a+1],r);return r&&ji(r,r.next)&&(Os(r),r=r.next),r}function Si(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ji(e,e.next)||_e(e.prev,e,e.next)===0)){if(Os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ns(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Hf(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Df(s,n,i,r):If(s)){t.push(l.i,s.i,c.i),Os(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Uf(Si(s),t),Ns(s,t,e,n,i,r,2)):a===2&&Nf(s,t,e,n,i,r):Ns(Si(s),t,e,n,i,r,1);break}}}function If(s){const t=s.prev,e=s,n=s.next;if(_e(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),f=Math.min(o,l,c),u=Math.max(i,r,a),d=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&ys(i,o,r,l,a,c,m.x,m.y)&&_e(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Df(s,t,e,n){const i=s.prev,r=s,a=s.next;if(_e(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),_=Math.max(o,l,c),g=Math.max(h,f,u),p=Po(d,m,t,e,n),v=Po(_,g,t,e,n);let y=s.prevZ,M=s.nextZ;for(;y&&y.z>=p&&M&&M.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&ys(o,h,l,f,c,u,y.x,y.y)&&_e(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==i&&M!==a&&ys(o,h,l,f,c,u,M.x,M.y)&&_e(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&ys(o,h,l,f,c,u,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==i&&M!==a&&ys(o,h,l,f,c,u,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Uf(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ji(n,i)&&Dh(n,e,e.next,i)&&Fs(n,i)&&Fs(i,n)&&(t.push(n.i,e.i,i.i),Os(e),Os(e.next),e=s=i),e=e.next}while(e!==s);return Si(e)}function Nf(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wf(a,o)){let l=Uh(a,o);a=Si(a,a.next),l=Si(l,l.next),Ns(a,t,e,n,i,r,0),Ns(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ff(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Lh(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Gf(c))}i.sort(Of);for(let r=0;r<i.length;r++)e=Bf(i[r],e);return e}function Of(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Bf(s,t){const e=zf(s,t);if(!e)return t;const n=Uh(e,s);return Si(n,n.next),Si(e,e.next)}function zf(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(ji(s,e))return e;do{if(ji(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ih(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const f=Math.abs(i-e.y)/(n-e.x);Fs(e,s)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&kf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function kf(s,t){return _e(s.prev,s,t.prev)<0&&_e(t.next,s,s.next)<0}function Hf(s,t,e,n){let i=s;do i.z===0&&(i.z=Po(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Vf(i)}function Vf(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Po(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Gf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ih(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function ys(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Ih(s,t,e,n,i,r,a,o)}function Wf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Xf(s,t)&&(Fs(s,t)&&Fs(t,s)&&qf(s,t)&&(_e(s.prev,s,t.prev)||_e(s,t.prev,t))||ji(s,t)&&_e(s.prev,s,s.next)>0&&_e(t.prev,t,t.next)>0)}function _e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ji(s,t){return s.x===t.x&&s.y===t.y}function Dh(s,t,e,n){const i=or(_e(s,t,e)),r=or(_e(s,t,n)),a=or(_e(e,n,s)),o=or(_e(e,n,t));return!!(i!==r&&a!==o||i===0&&ar(s,e,t)||r===0&&ar(s,n,t)||a===0&&ar(e,s,n)||o===0&&ar(e,t,n))}function ar(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function or(s){return s>0?1:s<0?-1:0}function Xf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Dh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Fs(s,t){return _e(s.prev,s,s.next)<0?_e(s,t,s.next)>=0&&_e(s,s.prev,t)>=0:_e(s,t,s.prev)<0||_e(s,s.next,t)<0}function qf(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Uh(s,t){const e=Lo(s.i,s.x,s.y),n=Lo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ql(s,t,e,n){const i=Lo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Os(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Lo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $f(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Yf{static triangulate(t,e,n=2){return Lf(t,e,n)}}class Bn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Bn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];$l(t),Yl(n,t);let a=t.length;e.forEach($l);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Yl(n,e[l]);const o=Yf.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function $l(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Yl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class bi extends De{constructor(t=new as([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Zf;let y,M=!1,E,w,C,S;if(p){y=p.getSpacedPoints(h),M=!0,u=!1;const nt=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,nt),w=new P,C=new P,S=new P}u||(g=0,d=0,m=0,_=0);const T=o.extractPoints(c);let L=T.shape;const U=T.holes;if(!Bn.isClockWise(L)){L=L.reverse();for(let nt=0,st=U.length;nt<st;nt++){const at=U[nt];Bn.isClockWise(at)&&(U[nt]=at.reverse())}}function O(nt){const at=10000000000000001e-36;let lt=nt[0];for(let ut=1;ut<=nt.length;ut++){const Bt=ut%nt.length,Ot=nt[Bt],Vt=Ot.x-lt.x,Xt=Ot.y-lt.y,I=Vt*Vt+Xt*Xt,ae=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(lt.x),Math.abs(lt.y)),Kt=at*ae*ae;if(I<=Kt){nt.splice(Bt,1),ut--;continue}lt=Ot}}O(L),U.forEach(O);const F=U.length,R=L;for(let nt=0;nt<F;nt++){const st=U[nt];L=L.concat(st)}function W(nt,st,at){return st||ne("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(st,at)}const G=L.length;function J(nt,st,at){let lt,ut,Bt;const Ot=nt.x-st.x,Vt=nt.y-st.y,Xt=at.x-nt.x,I=at.y-nt.y,ae=Ot*Ot+Vt*Vt,Kt=Ot*I-Vt*Xt;if(Math.abs(Kt)>Number.EPSILON){const A=Math.sqrt(ae),x=Math.sqrt(Xt*Xt+I*I),B=st.x-Vt/A,V=st.y+Ot/A,$=at.x-I/x,ct=at.y+Xt/x,ht=(($-B)*I-(ct-V)*Xt)/(Ot*I-Vt*Xt);lt=B+Ot*ht-nt.x,ut=V+Vt*ht-nt.y;const Y=lt*lt+ut*ut;if(Y<=2)return new ot(lt,ut);Bt=Math.sqrt(Y/2)}else{let A=!1;Ot>Number.EPSILON?Xt>Number.EPSILON&&(A=!0):Ot<-Number.EPSILON?Xt<-Number.EPSILON&&(A=!0):Math.sign(Vt)===Math.sign(I)&&(A=!0),A?(lt=-Vt,ut=Ot,Bt=Math.sqrt(ae)):(lt=Ot,ut=Vt,Bt=Math.sqrt(ae/2))}return new ot(lt/Bt,ut/Bt)}const q=[];for(let nt=0,st=R.length,at=st-1,lt=nt+1;nt<st;nt++,at++,lt++)at===st&&(at=0),lt===st&&(lt=0),q[nt]=J(R[nt],R[at],R[lt]);const K=[];let Q,wt=q.concat();for(let nt=0,st=F;nt<st;nt++){const at=U[nt];Q=[];for(let lt=0,ut=at.length,Bt=ut-1,Ot=lt+1;lt<ut;lt++,Bt++,Ot++)Bt===ut&&(Bt=0),Ot===ut&&(Ot=0),Q[lt]=J(at[lt],at[Bt],at[Ot]);K.push(Q),wt=wt.concat(Q)}let St;if(g===0)St=Bn.triangulateShape(R,U);else{const nt=[],st=[];for(let at=0;at<g;at++){const lt=at/g,ut=d*Math.cos(lt*Math.PI/2),Bt=m*Math.sin(lt*Math.PI/2)+_;for(let Ot=0,Vt=R.length;Ot<Vt;Ot++){const Xt=W(R[Ot],q[Ot],Bt);xt(Xt.x,Xt.y,-ut),lt===0&&nt.push(Xt)}for(let Ot=0,Vt=F;Ot<Vt;Ot++){const Xt=U[Ot];Q=K[Ot];const I=[];for(let ae=0,Kt=Xt.length;ae<Kt;ae++){const A=W(Xt[ae],Q[ae],Bt);xt(A.x,A.y,-ut),lt===0&&I.push(A)}lt===0&&st.push(I)}}St=Bn.triangulateShape(nt,st)}const jt=St.length,Wt=m+_;for(let nt=0;nt<G;nt++){const st=u?W(L[nt],wt[nt],Wt):L[nt];M?(C.copy(E.normals[0]).multiplyScalar(st.x),w.copy(E.binormals[0]).multiplyScalar(st.y),S.copy(y[0]).add(C).add(w),xt(S.x,S.y,S.z)):xt(st.x,st.y,0)}for(let nt=1;nt<=h;nt++)for(let st=0;st<G;st++){const at=u?W(L[st],wt[st],Wt):L[st];M?(C.copy(E.normals[nt]).multiplyScalar(at.x),w.copy(E.binormals[nt]).multiplyScalar(at.y),S.copy(y[nt]).add(C).add(w),xt(S.x,S.y,S.z)):xt(at.x,at.y,f/h*nt)}for(let nt=g-1;nt>=0;nt--){const st=nt/g,at=d*Math.cos(st*Math.PI/2),lt=m*Math.sin(st*Math.PI/2)+_;for(let ut=0,Bt=R.length;ut<Bt;ut++){const Ot=W(R[ut],q[ut],lt);xt(Ot.x,Ot.y,f+at)}for(let ut=0,Bt=U.length;ut<Bt;ut++){const Ot=U[ut];Q=K[ut];for(let Vt=0,Xt=Ot.length;Vt<Xt;Vt++){const I=W(Ot[Vt],Q[Vt],lt);M?xt(I.x,I.y+y[h-1].y,y[h-1].x+at):xt(I.x,I.y,f+at)}}}ie(),Z();function ie(){const nt=i.length/3;if(u){let st=0,at=G*st;for(let lt=0;lt<jt;lt++){const ut=St[lt];kt(ut[2]+at,ut[1]+at,ut[0]+at)}st=h+g*2,at=G*st;for(let lt=0;lt<jt;lt++){const ut=St[lt];kt(ut[0]+at,ut[1]+at,ut[2]+at)}}else{for(let st=0;st<jt;st++){const at=St[st];kt(at[2],at[1],at[0])}for(let st=0;st<jt;st++){const at=St[st];kt(at[0]+G*h,at[1]+G*h,at[2]+G*h)}}n.addGroup(nt,i.length/3-nt,0)}function Z(){const nt=i.length/3;let st=0;et(R,st),st+=R.length;for(let at=0,lt=U.length;at<lt;at++){const ut=U[at];et(ut,st),st+=ut.length}n.addGroup(nt,i.length/3-nt,1)}function et(nt,st){let at=nt.length;for(;--at>=0;){const lt=at;let ut=at-1;ut<0&&(ut=nt.length-1);for(let Bt=0,Ot=h+g*2;Bt<Ot;Bt++){const Vt=G*Bt,Xt=G*(Bt+1),I=st+lt+Vt,ae=st+ut+Vt,Kt=st+ut+Xt,A=st+lt+Xt;Et(I,ae,Kt,A)}}}function xt(nt,st,at){l.push(nt),l.push(st),l.push(at)}function kt(nt,st,at){Ht(nt),Ht(st),Ht(at);const lt=i.length/3,ut=v.generateTopUV(n,i,lt-3,lt-2,lt-1);ce(ut[0]),ce(ut[1]),ce(ut[2])}function Et(nt,st,at,lt){Ht(nt),Ht(st),Ht(lt),Ht(st),Ht(at),Ht(lt);const ut=i.length/3,Bt=v.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);ce(Bt[0]),ce(Bt[1]),ce(Bt[3]),ce(Bt[1]),ce(Bt[2]),ce(Bt[3])}function Ht(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function ce(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ur[i.type]().fromJSON(i)),new bi(n,t.options)}}const Zf={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-f),new ot(u,1-m),new ot(_,1-p)]:[new ot(o,1-l),new ot(h,1-f),new ot(d,1-m),new ot(g,1-p)]}};function Jf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Nr extends jo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nr(t.radius,t.detail)}}class il extends De{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,f=new P,u=new ot,d=new P,m=new P,_=new P;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let v=0;v<=e;v++){const y=n+v*h*i,M=Math.sin(y),E=Math.cos(y);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*M,f.y=t[w].y,f.z=t[w].x*E,a.push(f.x,f.y,f.z),u.x=v/e,u.y=w/(t.length-1),o.push(u.x,u.y);const C=l[3*w+0]*M,S=l[3*w+1],T=l[3*w+0]*E;c.push(C,S,T)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const M=y+v*t.length,E=M,w=M+t.length,C=M+t.length+1,S=M+1;r.push(E,w,S),r.push(C,S,w)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.points,t.segments,t.phiStart,t.phiLength)}}class Je extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*u-a;for(let y=0;y<c;y++){const M=y*f-r;m.push(M,-v,0),_.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,M=v+c*(p+1),E=v+1+c*(p+1),w=v+1+c*p;d.push(y,M,w),d.push(M,E,w)}this.setIndex(d),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.width,t.height,t.widthSegments,t.heightSegments)}}class ts extends De{constructor(t=new as([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(i,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(a,2));function c(h){const f=i.length/3,u=h.extractPoints(e);let d=u.shape;const m=u.holes;Bn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Bn.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=Bn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];d=d.concat(v)}for(let g=0,p=d.length;g<p;g++){const v=d[g];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){const v=_[g],y=v[0]+f,M=v[1]+f,E=v[2]+f;n.push(y,M,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Kf(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new ts(n,t.curveSegments)}}function Kf(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ii extends De{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new P,u=new P,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n,M=a+y*o,E=t*Math.cos(M),w=Math.sqrt(t*t-E*E);let C=0;p===0&&a===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let S=0;S<=e;S++){const T=S/e,L=i+T*r;f.x=-w*Math.cos(L),f.y=E,f.z=w*Math.sin(L),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(T+C,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],M=h[p][v],E=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&d.push(y,M,w),(p!==n-1||l<Math.PI)&&d.push(M,E,w)}this.setIndex(d),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sl extends De{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],u=new P,d=new P,m=new P;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let p=0;p<=i;p++){const v=p/i*r;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){const p=(i+1)*_+g-1,v=(i+1)*(_-1)+g-1,y=(i+1)*(_-1)+g,M=(i+1)*_+g;l.push(p,v,M),l.push(v,y,M)}this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Wr extends De{constructor(t=new Rh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new ot;let h=new P;const f=[],u=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function _(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),v(),p()}function g(y){h=t.getPointAt(y/e,h);const M=a.normals[y],E=a.binormals[y];for(let w=0;w<=i;w++){const C=w/i*Math.PI*2,S=Math.sin(C),T=-Math.cos(C);l.x=T*M.x+S*E.x,l.y=T*M.y+S*E.y,l.z=T*M.z+S*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let M=1;M<=i;M++){const E=(i+1)*(y-1)+(M-1),w=(i+1)*y+(M-1),C=(i+1)*y+M,S=(i+1)*(y-1)+M;m.push(E,w,S),m.push(w,C,S)}}function v(){for(let y=0;y<=e;y++)for(let M=0;M<=i;M++)c.x=y/e,c.y=M/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Wr(new Ur[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function es(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Zl(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Zl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=es(s[e]);for(const i in n)t[i]=n[i]}return t}function Zl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Qf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const jf={clone:es,merge:Ge};var td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(i.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ee().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class nd extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ae extends ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class id extends ss{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sd extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rd extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rl extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class ad extends rl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Aa=new ee,Jl=new P,Kl=new P;class Fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Aa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lr=new P,cr=new ze,xn=new P;class Oh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lr,cr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(lr,cr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new P,Ql=new ot,jl=new ot;class en extends Oh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,jl),e.subVectors(jl,Ql)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class od extends Fh{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}}class ld extends rl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new od}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Xr extends Oh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class cd extends Fh{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hd extends rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new cd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const zi=-90,ki=1;class ud extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(zi,ki,t,e);i.layers=this.layers,this.add(i);const r=new en(zi,ki,t,e);r.layers=this.layers,this.add(r);const a=new en(zi,ki,t,e);a.layers=this.layers,this.add(a);const o=new en(zi,ki,t,e);o.layers=this.layers,this.add(o);const l=new en(zi,ki,t,e);l.layers=this.layers,this.add(l);const c=new en(zi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class fd extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const tc=new ee;class dd{constructor(t,e,n=0,i=1/0){this.ray=new bh(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tc),this}intersectObject(t,e=!0,n=[]){return Io(t,this,n,e),n.sort(ec),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Io(t[i],this,n,e);return n.sort(ec),n}}function ec(s,t){return s.distance-t.distance}function Io(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Io(r[a],t,e,!0)}}class Bh{static{Bh.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}function nc(s,t,e,n){const i=pd(n);switch(e){case ph:return s*t;case Wo:return s*t/i.components*i.byteLength;case Xo:return s*t/i.components*i.byteLength;case Mi:return s*t*2/i.components*i.byteLength;case qo:return s*t*2/i.components*i.byteLength;case mh:return s*t*3/i.components*i.byteLength;case fn:return s*t*4/i.components*i.byteLength;case $o:return s*t*4/i.components*i.byteLength;case xr:case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mr:case Sr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qa:case to:return Math.max(s,16)*Math.max(t,8)/4;case Ka:case ja:return Math.max(s,8)*Math.max(t,8)/2;case eo:case no:case so:case ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case io:case Ar:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case co:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case bo:case yo:case wo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Eo:case To:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Cr:case Ao:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pd(s){switch(s){case Ye:case hh:return{byteLength:1,components:1};case Ls:case uh:case An:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case Tn:case Ho:case un:return{byteLength:4,components:1};case fh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);function zh(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function md(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hd=`vec3 transformedNormal = objectNormal;
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
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
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
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
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
#endif`,p0=`uniform sampler2D dfgLUT;
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
}`,m0=`
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T0=`#if defined( USE_POINTS_UV )
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
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ep=`float getShadowMask() {
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
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,yp=`#if DEPTH_PACKING == 3200
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
}`,wp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Up=`#define MATCAP
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
}`,Np=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,Op=`#define NORMAL
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
}`,Bp=`#define PHONG
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
}`,zp=`#define PHONG
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
}`,kp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,Vp=`#define TOON
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
}`,Gp=`#define TOON
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
}`,Wp=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,$p=`uniform vec3 color;
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
}`,Yp=`uniform float rotation;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:gd,alphahash_pars_fragment:vd,alphamap_fragment:xd,alphamap_pars_fragment:_d,alphatest_fragment:Md,alphatest_pars_fragment:Sd,aomap_fragment:bd,aomap_pars_fragment:yd,batching_pars_vertex:wd,batching_vertex:Ed,begin_vertex:Td,beginnormal_vertex:Ad,bsdfs:Cd,iridescence_fragment:Rd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:$d,envmap_fragment:Yd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:Jd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:l0,envmap_vertex:Qd,fog_vertex:jd,fog_pars_vertex:t0,fog_fragment:e0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:s0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:a0,lights_pars_begin:o0,lights_toon_fragment:c0,lights_toon_pars_fragment:h0,lights_phong_fragment:u0,lights_phong_pars_fragment:f0,lights_physical_fragment:d0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:v0,lightprobes_pars_fragment:x0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:b0,map_fragment:y0,map_pars_fragment:w0,map_particle_fragment:E0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphinstance_vertex:R0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:I0,morphtarget_vertex:D0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:F0,normal_pars_vertex:O0,normal_vertex:B0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:G0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:$0,dithering_fragment:Y0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:j0,shadowmap_vertex:tp,shadowmask_pars_fragment:ep,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:sp,skinnormal_vertex:rp,specularmap_fragment:ap,specularmap_pars_fragment:op,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:hp,transmission_pars_fragment:up,uv_pars_fragment:fp,uv_pars_vertex:dp,uv_vertex:pp,worldpos_vertex:mp,background_vert:gp,background_frag:vp,backgroundCube_vert:xp,backgroundCube_frag:_p,cube_vert:Mp,cube_frag:Sp,depth_vert:bp,depth_frag:yp,distance_vert:wp,distance_frag:Ep,equirect_vert:Tp,equirect_frag:Ap,linedashed_vert:Cp,linedashed_frag:Rp,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Ip,meshlambert_frag:Dp,meshmatcap_vert:Up,meshmatcap_frag:Np,meshnormal_vert:Fp,meshnormal_frag:Op,meshphong_vert:Bp,meshphong_frag:zp,meshphysical_vert:kp,meshphysical_frag:Hp,meshtoon_vert:Vp,meshtoon_frag:Gp,points_vert:Wp,points_frag:Xp,shadow_vert:qp,shadow_frag:$p,sprite_vert:Yp,sprite_frag:Zp},vt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},bn={basic:{uniforms:Ge([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ge([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ge([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ge([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ge([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ge([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ge([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ge([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ge([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ge([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ge([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Ge([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Ge([vt.lights,vt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};bn.physical={uniforms:Ge([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const hr={r:0,b:0,g:0},Jp=new ee,kh=new qt;kh.set(-1,0,0,0,1,0,0,0,1);function Kp(s,t,e,n,i,r){const a=new Ut(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=t.get(y,M)}return y}function m(v){let y=!1;const M=d(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),y=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,y){const M=d(y);M&&(M.isCubeTexture||M.mapping===Gr)?(c===void 0&&(c=new de(new Cn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:es(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kh),c.material.toneMapped=te.getTransfer(M.colorSpace)!==he,(h!==M||f!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new de(new Je(2,2),new Rn({name:"BackgroundMaterial",uniforms:es(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=te.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(hr,Nh(s)),e.buffers.color.setClear(hr.r,hr.g,hr.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:_,dispose:p}}function Qp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(U,z,O,F,R){let W=!1;const G=f(U,F,O,z);r!==G&&(r=G,c(r.object)),W=d(U,F,O,R),W&&m(U,F,O,R),R!==null&&t.update(R,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(U,z,O,F),R!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function f(U,z,O,F){const R=F.wireframe===!0;let W=n[z.id];W===void 0&&(W={},n[z.id]=W);const G=U.isInstancedMesh===!0?U.id:0;let J=W[G];J===void 0&&(J={},W[G]=J);let q=J[O.id];q===void 0&&(q={},J[O.id]=q);let K=q[R];return K===void 0&&(K=u(l()),q[R]=K),K}function u(U){const z=[],O=[],F=[];for(let R=0;R<e;R++)z[R]=0,O[R]=0,F[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:F,object:U,attributes:{},index:null}}function d(U,z,O,F){const R=r.attributes,W=z.attributes;let G=0;const J=O.getAttributes();for(const q in J)if(J[q].location>=0){const Q=R[q];let wt=W[q];if(wt===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(wt=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(wt=U.instanceColor)),Q===void 0||Q.attribute!==wt||wt&&Q.data!==wt.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function m(U,z,O,F){const R={},W=z.attributes;let G=0;const J=O.getAttributes();for(const q in J)if(J[q].location>=0){let Q=W[q];Q===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor));const wt={};wt.attribute=Q,Q&&Q.data&&(wt.data=Q.data),R[q]=wt,G++}r.attributes=R,r.attributesNum=G,r.index=F}function _(){const U=r.newAttributes;for(let z=0,O=U.length;z<O;z++)U[z]=0}function g(U){p(U,0)}function p(U,z){const O=r.newAttributes,F=r.enabledAttributes,R=r.attributeDivisors;O[U]=1,F[U]===0&&(s.enableVertexAttribArray(U),F[U]=1),R[U]!==z&&(s.vertexAttribDivisor(U,z),R[U]=z)}function v(){const U=r.newAttributes,z=r.enabledAttributes;for(let O=0,F=z.length;O<F;O++)z[O]!==U[O]&&(s.disableVertexAttribArray(O),z[O]=0)}function y(U,z,O,F,R,W,G){G===!0?s.vertexAttribIPointer(U,z,O,R,W):s.vertexAttribPointer(U,z,O,F,R,W)}function M(U,z,O,F){_();const R=F.attributes,W=O.getAttributes(),G=z.defaultAttributeValues;for(const J in W){const q=W[J];if(q.location>=0){let K=R[J];if(K===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){const Q=K.normalized,wt=K.itemSize,St=t.get(K);if(St===void 0)continue;const jt=St.buffer,Wt=St.type,ie=St.bytesPerElement,Z=Wt===s.INT||Wt===s.UNSIGNED_INT||K.gpuType===Ho;if(K.isInterleavedBufferAttribute){const et=K.data,xt=et.stride,kt=K.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<q.locationSize;Et++)p(q.location+Et,et.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<q.locationSize;Et++)g(q.location+Et);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Et=0;Et<q.locationSize;Et++)y(q.location+Et,wt/q.locationSize,Wt,Q,xt*ie,(kt+wt/q.locationSize*Et)*ie,Z)}else{if(K.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)p(q.location+et,K.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let et=0;et<q.locationSize;et++)g(q.location+et);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let et=0;et<q.locationSize;et++)y(q.location+et,wt/q.locationSize,Wt,Q,wt*ie,wt/q.locationSize*et*ie,Z)}}else if(G!==void 0){const Q=G[J];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(q.location,Q);break;case 3:s.vertexAttrib3fv(q.location,Q);break;case 4:s.vertexAttrib4fv(q.location,Q);break;default:s.vertexAttrib1fv(q.location,Q)}}}}v()}function E(){T();for(const U in n){const z=n[U];for(const O in z){const F=z[O];for(const R in F){const W=F[R];for(const G in W)h(W[G].object),delete W[G];delete F[R]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;const z=n[U.id];for(const O in z){const F=z[O];for(const R in F){const W=F[R];for(const G in W)h(W[G].object),delete W[G];delete F[R]}}delete n[U.id]}function C(U){for(const z in n){const O=n[z];for(const F in O){const R=O[F];if(R[U.id]===void 0)continue;const W=R[U.id];for(const G in W)h(W[G].object),delete W[G];delete R[U.id]}}}function S(U){for(const z in n){const O=n[z],F=U.isInstancedMesh===!0?U.id:0,R=O[F];if(R!==void 0){for(const W in R){const G=R[W];for(const J in G)h(G[J].object),delete G[J];delete R[W]}delete O[F],Object.keys(O).length===0&&delete n[z]}}}function T(){L(),a=!0,r!==i&&(r=i,c(r.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function jp(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function t1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==fn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const S=C===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ye&&C!==un&&!S&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:E,samples:w}}function e1(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Kn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const v=r?0:n,y=v*4;let M=p.clippingState||null;l.value=M,M=h(m,u,y,d);for(let E=0;E!==y;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,M=d;y!==_;++y,M+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const Yi=4,n1=6,i1=20,s1=256,ms=new Xr,ic=new Ut;let Ca=null,Ra=0,Pa=0,La=!1;const r1=new P,ci=new P;class Do{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=r1}=r;Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Ra,Pa),this._renderer.xr.enabled=La,t.scissorTest=!1,Hi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:An,format:fn,colorSpace:Pr,depthBuffer:!1},i=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=a1(r)),this._blurMaterial=l1(r,t,e),this._ggxMaterial=o1(r,t,e)}return i}_compileMaterial(t){const e=new de(new De,t);this._renderer.compile(e,ms)}_sceneToCubeUV(t,e,n,i,r){const l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ic),f.toneMapping=En,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new Cn,new rs({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(ic),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const E=this._cubeSize;Hi(i,M*E,y>2?E:0,E,E),f.setRenderTarget(i),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Hi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ms)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Yi?n-m+Yi:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Hi(r,g,p,3*_,2*_),i.setRenderTarget(r),i.render(o,ms),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Hi(t,g,p,3*_,2*_),i.setRenderTarget(t),i.render(o,ms)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],f=3*h*(i>this._lodMax-Yi?i-this._lodMax+Yi:0),u=4*(this._cubeSize-h);Hi(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ms)}}function a1(s){const t=[],e=[];let n=s;const i=s-Yi+1+n1;for(let r=0;r<i;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){const v=p%3*2/3-1,y=p>2?0:-1,M=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];m.set(M,d*u*p);for(let E=0;E<u;E++){const w=h[E*2]*2-1,C=h[E*2+1]*2-1;p===0?ci.set(1,C,w):p===1?ci.set(-w,1,-C):p===2?ci.set(-w,C,1):p===3?ci.set(-1,C,-w):p===4?ci.set(-w,-1,C):ci.set(w,C,-1),ci.toArray(_,(p*u+E)*d)}}const g=new De;g.setAttribute("position",new pn(m,d)),g.setAttribute("outputDirection",new pn(_,d)),e.push(new de(g,null)),n>Yi&&n--}return{lodMeshes:e,sizeLods:t}}function sc(s,t,e){const n=new dn(s,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function o1(s,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function l1(s,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:i1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function rc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ac(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hh extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Cn(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:zn});r.uniforms.tEquirect.value=e;const a=new de(i,r),o=e.minFilter;return e.minFilter===pi&&(e.minFilter=Be),new ud(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function c1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Qr||d===jr)if(t.has(u)){const m=t.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new Hh(m.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,m=d===Qr||d===jr,_=d===_i||d===Qi;if(m||_){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Do(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Do(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Qr?u.mapping=_i:d===jr&&(u.mapping=Qi),u}function l(u){let d=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function h1(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Zi("WebGLRenderer: "+n+" extension not supported."),i}}}function u1(s,t,e,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let y=0,M=v.length;y<M;y+=3){const E=v[y+0],w=v[y+1],C=v[y+2];u.push(E,w,w,C,C,E)}}else{const v=m.array;_=m.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const E=y+0,w=y+1,C=y+2;u.push(E,w,w,C,C,E)}}const g=new(m.count>=65535?Sh:Mh)(u,1);g.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function f1(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function d1(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function p1(s,t,e){const n=new WeakMap,i=new xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let M=o.attributes.position.count*y,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*E*4*f),C=new vh(w,M,E,f);C.type=un,C.needsUpdate=!0;const S=y*4;for(let L=0;L<f;L++){const U=g[L],z=p[L],O=v[L],F=M*E*4*L;for(let R=0;R<U.count;R++){const W=R*S;d===!0&&(i.fromBufferAttribute(U,R),w[F+W+0]=i.x,w[F+W+1]=i.y,w[F+W+2]=i.z,w[F+W+3]=0),m===!0&&(i.fromBufferAttribute(z,R),w[F+W+4]=i.x,w[F+W+5]=i.y,w[F+W+6]=i.z,w[F+W+7]=0),_===!0&&(i.fromBufferAttribute(O,R),w[F+W+8]=i.x,w[F+W+9]=i.y,w[F+W+10]=i.z,w[F+W+11]=O.itemSize===4?i.w:1)}}u={count:f,texture:C,size:new ot(M,E)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function m1(s,t,e,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const g1={[ih]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[ah]:"ACES_FILMIC_TONE_MAPPING",[lh]:"AGX_TONE_MAPPING",[ko]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function v1(s,t,e,n,i,r){const a=new dn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new De;c.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new re([0,2,0,0,2,0],2));const h=new nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new de(c,h),u=new Xr(-1,1,1,-1,0,1);let d=null,m=null,_=!1,g,p=null,v=[],y=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let w=0;w<v.length;w++){const C=v[w];C.setSize&&C.setSize(M,E)}},this.setEffects=function(M){v=M,y=v.length>0&&v[0].isRenderPass===!0;const E=a.width,w=a.height;v.length>0&&o===null&&(o=new dn(E,w,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new dn(E,w,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const S=v[C];S.setSize&&S.setSize(E,w)}},this.begin=function(M,E){if(_||M.toneMapping===En&&v.length===0)return!1;if(p=E,E!==null){const w=E.width,C=E.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return y===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=En,!0},this.hasRenderPass=function(){return y},this.end=function(M,E){M.toneMapping=g,_=!0;let w=a,C=o;for(let S=0;S<v.length;S++){const T=v[S];T.enabled!==!1&&(T.render(M,C,w,E),T.needsSwap!==!1&&(w=C,C=C===o?l:o))}if(d!==M.outputColorSpace||m!==M.toneMapping){d=M.outputColorSpace,m=M.toneMapping,h.defines={},te.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");const S=g1[m];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(p),M.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Vh=new ke,Uo=new Us(1,1),Gh=new vh,Wh=new ef,Xh=new wh,oc=[],lc=[],cc=new Float32Array(16),hc=new Float32Array(9),uc=new Float32Array(4);function os(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=oc[i];if(r===void 0&&(r=new Float32Array(i),oc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $r(s,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function x1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function _1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function M1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function S1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function b1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;uc.set(n),s.uniformMatrix2fv(this.addr,!1,uc),Pe(e,n)}}function y1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;hc.set(n),s.uniformMatrix3fv(this.addr,!1,hc),Pe(e,n)}}function w1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;cc.set(n),s.uniformMatrix4fv(this.addr,!1,cc),Pe(e,n)}}function E1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function T1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function A1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function C1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function R1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function P1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function L1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function I1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function D1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uo.compareFunction=e.isReversedDepthBuffer()?Zo:Yo,r=Uo):r=Vh,e.setTexture2D(t||r,i)}function U1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wh,i)}function N1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Xh,i)}function F1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Gh,i)}function O1(s){switch(s){case 5126:return x1;case 35664:return _1;case 35665:return M1;case 35666:return S1;case 35674:return b1;case 35675:return y1;case 35676:return w1;case 5124:case 35670:return E1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return C1;case 5125:return R1;case 36294:return P1;case 36295:return L1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return F1}}function B1(s,t){s.uniform1fv(this.addr,t)}function z1(s,t){const e=os(t,this.size,2);s.uniform2fv(this.addr,e)}function k1(s,t){const e=os(t,this.size,3);s.uniform3fv(this.addr,e)}function H1(s,t){const e=os(t,this.size,4);s.uniform4fv(this.addr,e)}function V1(s,t){const e=os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function G1(s,t){const e=os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function W1(s,t){const e=os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function X1(s,t){s.uniform1iv(this.addr,t)}function q1(s,t){s.uniform2iv(this.addr,t)}function $1(s,t){s.uniform3iv(this.addr,t)}function Y1(s,t){s.uniform4iv(this.addr,t)}function Z1(s,t){s.uniform1uiv(this.addr,t)}function J1(s,t){s.uniform2uiv(this.addr,t)}function K1(s,t){s.uniform3uiv(this.addr,t)}function Q1(s,t){s.uniform4uiv(this.addr,t)}function j1(s,t,e){const n=this.cache,i=t.length,r=$r(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Uo:a=Vh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function tm(s,t,e){const n=this.cache,i=t.length,r=$r(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Wh,r[a])}function em(s,t,e){const n=this.cache,i=t.length,r=$r(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Xh,r[a])}function nm(s,t,e){const n=this.cache,i=t.length,r=$r(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Gh,r[a])}function im(s){switch(s){case 5126:return B1;case 35664:return z1;case 35665:return k1;case 35666:return H1;case 35674:return V1;case 35675:return G1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return $1;case 35669:case 35673:return Y1;case 5125:return Z1;case 36294:return J1;case 36295:return K1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}class sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O1(e.type)}}class rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=im(e.type)}}class am{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function fc(s,t){s.seq.push(t),s.map[t.id]=t}function om(s,t,e){const n=s.name,i=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),a=Ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){fc(e,c===void 0?new sm(o,s,t):new rm(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new am(o),fc(e,f)),e=f}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);om(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function dc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const lm=37297;let cm=0;function hm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const pc=new qt;function um(s){te._getMatrix(pc,te.workingColorSpace,s);const t=`mat3( ${pc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Lr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function mc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hm(s.getShaderSource(t),o)}else return r}function fm(s,t){const e=um(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const dm={[ih]:"Linear",[sh]:"Reinhard",[rh]:"Cineon",[ah]:"ACESFilmic",[lh]:"AgX",[ko]:"Neutral",[oh]:"Custom"};function pm(s,t){const e=dm[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ur=new P;function mm(){te.getLuminanceCoefficients(ur);const s=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function vm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ws(s){return s!==""}function gc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(s){return s.replace(_m,Sm)}const Mm=new Map;function Sm(s,t){let e=Zt[t];if(e===void 0){const n=Mm.get(t);if(n!==void 0)e=Zt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return No(e)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(s){return s.replace(bm,ym)}function ym(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _c(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const wm={[Es]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function Em(s){return wm[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tm={[_i]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE_UV"};function Am(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Tm[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cm={[Qi]:"ENVMAP_MODE_REFRACTION"};function Rm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Cm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pm={[zo]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function Lm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Pm[s.combine]||"ENVMAP_BLENDING_NONE"}function Im(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Em(e),c=Am(e),h=Rm(e),f=Lm(e),u=Im(e),d=gm(e),m=vm(r),_=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ws).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ws).join(`
`),p.length>0&&(p+=`
`)):(g=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),p=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Zt.tonemapping_pars_fragment:"",e.toneMapping!==En?pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,fm("linearToOutputTexel",e.outputColorSpace),mm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),a=No(a),a=gc(a,e),a=vc(a,e),o=No(o),o=gc(o,e),o=vc(o,e),a=xc(a),o=xc(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+a,M=v+p+o,E=dc(i,i.VERTEX_SHADER,y),w=dc(i,i.FRAGMENT_SHADER,M);i.attachShader(_,E),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(U){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(E)||"",F=i.getShaderInfoLog(w)||"",R=z.trim(),W=O.trim(),G=F.trim();let J=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,w);else{const K=mc(i,E,"vertex"),Q=mc(i,w,"fragment");ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+R+`
`+K+`
`+Q)}else R!==""?Gt("WebGLProgram: Program Info Log:",R):(W===""||G==="")&&(q=!1);q&&(U.diagnostics={runnable:J,programLog:R,vertexShader:{log:W,prefix:g},fragmentShader:{log:G,prefix:p}})}i.deleteShader(E),i.deleteShader(w),S=new br(i,_),T=xm(i,_)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(_,lm)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let Um=0;class Nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fm(t),e.set(t,n)),n}}class Fm{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}}function Om(s){return s===Mi||s===Ar||s===Cr}function Bm(s,t,e,n,i,r){const a=new Ko,o=new Nm,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,T,L,U,z,O){const F=U.fog,R=z.geometry,W=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,J=t.get(S.envMap||W,G),q=J&&J.mapping===Gr?J.image.height:null,K=d[S.type];S.precision!==null&&(u=n.getMaxPrecision(S.precision),u!==S.precision&&Gt("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,wt=Q!==void 0?Q.length:0;let St=0;R.morphAttributes.position!==void 0&&(St=1),R.morphAttributes.normal!==void 0&&(St=2),R.morphAttributes.color!==void 0&&(St=3);let jt,Wt,ie,Z;if(K){const me=bn[K];jt=me.vertexShader,Wt=me.fragmentShader}else{jt=S.vertexShader,Wt=S.fragmentShader;const me=o.getVertexShaderStage(S),oe=o.getFragmentShaderStage(S);o.update(S,me,oe),ie=me.id,Z=oe.id}const et=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),kt=z.isInstancedMesh===!0,Et=z.isBatchedMesh===!0,Ht=!!S.map,ce=!!S.matcap,nt=!!J,st=!!S.aoMap,at=!!S.lightMap,lt=!!S.bumpMap&&S.wireframe===!1,ut=!!S.normalMap,Bt=!!S.displacementMap,Ot=!!S.emissiveMap,Vt=!!S.metalnessMap,Xt=!!S.roughnessMap,I=S.anisotropy>0,ae=S.clearcoat>0,Kt=S.dispersion>0,A=S.retroreflectivity>0,x=S.iridescence>0,B=S.sheen>0,V=S.transmission>0,$=I&&!!S.anisotropyMap,ct=ae&&!!S.clearcoatMap,ht=ae&&!!S.clearcoatNormalMap,Y=ae&&!!S.clearcoatRoughnessMap,tt=x&&!!S.iridescenceMap,ft=x&&!!S.iridescenceThicknessMap,It=B&&!!S.sheenColorMap,gt=B&&!!S.sheenRoughnessMap,dt=!!S.specularMap,Dt=!!S.specularColorMap,zt=!!S.specularIntensityMap,$t=V&&!!S.transmissionMap,N=V&&!!S.thicknessMap,pt=!!S.gradientMap,j=!!S.alphaMap,mt=S.alphaTest>0,bt=!!S.alphaHash,it=!!S.extensions;let Nt=En;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Pt={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:Wt,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Et,batchingColor:Et&&z._colorsTexture!==null,instancing:kt,instancingColor:kt&&z.instanceColor!==null,instancingMorph:kt&&z.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:ce,envMap:nt,envMapMode:nt&&J.mapping,envMapCubeUVHeight:q,aoMap:st,lightMap:at,bumpMap:lt,normalMap:ut,displacementMap:Bt,emissiveMap:Ot,normalMapObjectSpace:ut&&S.normalMapType===Nu,normalMapTangentSpace:ut&&S.normalMapType===Rr,packedNormalMap:ut&&S.normalMapType===Rr&&Om(S.normalMap.format),metalnessMap:Vt,roughnessMap:Xt,anisotropy:I,anisotropyMap:$,clearcoat:ae,clearcoatMap:ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:Y,dispersion:Kt,retroreflection:A,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:ft,sheen:B,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:dt,specularColorMap:Dt,specularIntensityMap:zt,transmission:V,transmissionMap:$t,thicknessMap:N,gradientMap:pt,opaque:S.transparent===!1&&S.blending===ni&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:mt,alphaHash:bt,combine:S.combine,mapUv:Ht&&m(S.map.channel),aoMapUv:st&&m(S.aoMap.channel),lightMapUv:at&&m(S.lightMap.channel),bumpMapUv:lt&&m(S.bumpMap.channel),normalMapUv:ut&&m(S.normalMap.channel),displacementMapUv:Bt&&m(S.displacementMap.channel),emissiveMapUv:Ot&&m(S.emissiveMap.channel),metalnessMapUv:Vt&&m(S.metalnessMap.channel),roughnessMapUv:Xt&&m(S.roughnessMap.channel),anisotropyMapUv:$&&m(S.anisotropyMap.channel),clearcoatMapUv:ct&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:It&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&m(S.sheenRoughnessMap.channel),specularMapUv:dt&&m(S.specularMap.channel),specularColorMapUv:Dt&&m(S.specularColorMap.channel),specularIntensityMapUv:zt&&m(S.specularIntensityMap.channel),transmissionMapUv:$t&&m(S.transmissionMap.channel),thicknessMapUv:N&&m(S.thicknessMap.channel),alphaMapUv:j&&m(S.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ut||I),vertexNormals:!!R.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!R.attributes.uv&&(Ht||j),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||R.attributes.normal===void 0&&ut===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:St,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:it&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&S.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function g(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)T.push(L),T.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(p(T,S),v(T,S),T.push(s.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function p(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function y(S){const T=d[S.type];let L;if(T){const U=bn[T];L=jf.clone(U.uniforms)}else L=S.uniforms;return L}function M(S,T){let L=h.get(T);return L!==void 0?++L.usedTimes:(L=new Dm(s,T,S,i),c.push(L),h.set(T,L)),L}function E(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function w(S){o.remove(S)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:y,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:C}}function zm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function km(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Mc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,_,g,p){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=a(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=p),t++,v}function l(u,d,m,_,g,p,v){v.reversedDepth===!0&&(g=-g);const y=o(u,d,m,_,g,p);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):e.push(y)}function c(u,d,m,_,g,p){const v=o(u,d,m,_,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||km),n.length>1&&n.sort(d||Mc),i.length>1&&i.sort(d||Mc)}function f(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function Hm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Sc,s.set(n,[a])):i>=r.length?(a=new Sc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Vm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ut};break;case"SpotLight":e={position:new P,direction:new P,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Wm=0;function Xm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qm(s){const t=new Vm,e=Gm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new ee,a=new ee;function o(c){let h=0,f=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,v=0,y=0,M=0,E=0,w=0,C=0,S=0,T=0,L=0;c.sort(Xm);for(let z=0,O=c.length;z<O;z++){const F=c[z],R=F.color,W=F.intensity,G=F.distance;let J=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Mi?J=F.shadow.map.texture:J=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=R.r*W,f+=R.g*W,u+=R.b*W;else if(F.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(F.sh.coefficients[q],W);L++}else if(F.isSunLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,Q=e.get(F);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=J;const wt=K.getViewportCount();for(let St=0;St<wt;St++)n.sunShadowMatrix[_+St]=K.getMatrix(St),n.sunShadowCascade[_+St]=K._cascadeData[St];_+=wt,m++}n.sun[d]=q,d++}else if(F.isDirectionalLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,Q=e.get(F);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=F.shadow.matrix,E++}n.directional[g]=q,g++}else if(F.isSpotLight){const q=t.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(R).multiplyScalar(W),q.distance=G,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,n.spot[v]=q;const K=F.shadow;if(F.map&&(n.spotLightMap[S]=F.map,S++,K.updateMatrices(F),F.castShadow&&T++),n.spotLightMatrix[v]=K.matrix,F.castShadow){const Q=e.get(F);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=J,C++}v++}else if(F.isRectAreaLight){const q=t.get(F);q.color.copy(R).multiplyScalar(W),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),n.rectArea[y]=q,y++}else if(F.isPointLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),q.distance=F.distance,q.decay=F.decay,F.castShadow){const K=F.shadow,Q=e.get(F);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=F.shadow.matrix,w++}n.point[p]=q,p++}else if(F.isHemisphereLight){const q=t.get(F);q.skyColor.copy(F.color).multiplyScalar(W),q.groundColor.copy(F.groundColor).multiplyScalar(W),n.hemi[M]=q,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const U=n.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==v||U.rectAreaLength!==y||U.hemiLength!==M||U.numSunShadows!==m||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==C||U.numSpotMaps!==S||U.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=y,n.point.length=p,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,U.sunLength=d,U.directionalLength=g,U.pointLength=p,U.spotLength=v,U.rectAreaLength=y,U.hemiLength=M,U.numSunShadows=m,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=C,U.numSpotMaps=S,U.numLightProbes=L,n.version=Wm++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const M=c[v];if(M.isSunLight){const E=n.sun[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),u++}else if(M.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function bc(s){const t=new qm(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $m(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new bc(s),t.set(i,[o])):r>=a.length?(o=new bc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
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
}`,Jm=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Km=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],yc=new ee,gs=new P,Da=new P;function Qm(s,t,e){let n=new Qo;const i=new ot,r=new ot,a=new xe,o=new sd,l=new rd,c={},h=e.maxTextureSize,f={[xi]:We,[We]:xi,[cn]:cn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Ym,fragmentShader:Zm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new De;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new de(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let p=this.type;this.render=function(w,C,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===fu&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Es);const T=s.getRenderTarget(),L=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),z=s.state;z.setBlending(zn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==this.type;O&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(R=>R.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,R=w.length;F<R;F++){const W=w[F],G=W.shadow;if(G===void 0){Gt("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const J=G.getFrameExtents();i.multiply(J),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,G.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===bs){if(W.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new dn(i.x,i.y,{format:Mi,type:An,minFilter:Be,magFilter:Be,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new Us(i.x,i.y,un),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=Hn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ue,G.map.depthTexture.magFilter=Ue}else W.isPointLight?(G.map=new Hh(i.x),G.map.depthTexture=new _f(i.x,Tn)):(G.map=new dn(i.x,i.y),G.map.depthTexture=new Us(i.x,i.y,Tn)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=Hn,this.type===Es?(G.map.depthTexture.compareFunction=q?Zo:Yo,G.map.depthTexture.minFilter=Be,G.map.depthTexture.magFilter=Be):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ue,G.map.depthTexture.magFilter=Ue);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);const K=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();W.isPointLight!==!0&&G.updateMatrices(W,S);for(let Q=0;Q<K;Q++){const wt=G.getCamera(Q);if(W.isPointLight){const St=G.camera,jt=G.matrix,Wt=W.distance||St.far;Wt!==St.far&&(St.far=Wt,St.updateProjectionMatrix()),gs.setFromMatrixPosition(W.matrixWorld),St.position.copy(gs),Da.copy(St.position),Da.add(Jm[Q]),St.up.copy(Km[Q]),St.lookAt(Da),St.updateMatrixWorld(),jt.makeTranslation(-gs.x,-gs.y,-gs.z),yc.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),G._frustum.setFromProjectionMatrix(yc,St.coordinateSystem,St.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(G.map),s.clear());const St=G.getViewport(Q);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),z.viewport(a)}n=G.getFrustum(Q),M(C,S,wt,W,this.type)}G.isPointLightShadow!==!0&&this.type===bs&&v(G,S),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,L,U)};function v(w,C){const S=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new dn(i.x,i.y,{format:Mi,type:An}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,S,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,S,d,_,null)}function y(w,C,S,T){let L=null;const U=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)L=U;else if(L=S.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=L.uuid,O=C.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let R=F[O];R===void 0&&(R=L.clone(),F[O]=R,C.addEventListener("dispose",E)),L=R}if(L.visible=C.visible,L.wireframe=C.wireframe,T===bs?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:f[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=s.properties.get(L);z.light=S}return L}function M(w,C,S,T,L){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===bs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const O=t.update(w),F=w.material;if(Array.isArray(F)){const R=O.groups;for(let W=0,G=R.length;W<G;W++){const J=R[W],q=F[J.materialIndex];if(q&&q.visible){const K=y(w,q,T,L);w.onBeforeShadow(s,w,C,S,O,K,J),s.renderBufferDirect(S,null,O,K,w,J),w.onAfterShadow(s,w,C,S,O,K,J)}}}else if(F.visible){const R=y(w,F,T,L);w.onBeforeShadow(s,w,C,S,O,R,null),s.renderBufferDirect(S,null,O,R,w,null),w.onAfterShadow(s,w,C,S,O,R,null)}}const z=w.children;for(let O=0,F=z.length;O<F;O++)M(z[O],C,S,T,L)}function E(w){w.target.removeEventListener("dispose",E);for(const S in c){const T=c[S],L=w.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function jm(s,t){function e(){let N=!1;const pt=new xe;let j=null;const mt=new xe(0,0,0,0);return{setMask:function(bt){j!==bt&&!N&&(s.colorMask(bt,bt,bt,bt),j=bt)},setLocked:function(bt){N=bt},setClear:function(bt,it,Nt,Pt,me){me===!0&&(bt*=Pt,it*=Pt,Nt*=Pt),pt.set(bt,it,Nt,Pt),mt.equals(pt)===!1&&(s.clearColor(bt,it,Nt,Pt),mt.copy(pt))},reset:function(){N=!1,j=null,mt.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,j=null,mt=null,bt=null;return{setReversed:function(it){if(pt!==it){const Nt=t.get("EXT_clip_control");it?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),pt=it;const Pt=bt;bt=null,this.setClear(Pt)}},getReversed:function(){return pt},setTest:function(it){it?et(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(it){j!==it&&!N&&(s.depthMask(it),j=it)},setFunc:function(it){if(pt&&(it=Yu[it]),mt!==it){switch(it){case Ga:s.depthFunc(s.NEVER);break;case Wa:s.depthFunc(s.ALWAYS);break;case Xa:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case qa:s.depthFunc(s.EQUAL);break;case $a:s.depthFunc(s.GEQUAL);break;case Ya:s.depthFunc(s.GREATER);break;case Za:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=it}},setLocked:function(it){N=it},setClear:function(it){bt!==it&&(bt=it,pt&&(it=1-it),s.clearDepth(it))},reset:function(){N=!1,j=null,mt=null,bt=null,pt=!1}}}function i(){let N=!1,pt=null,j=null,mt=null,bt=null,it=null,Nt=null,Pt=null,me=null;return{setTest:function(oe){N||(oe?et(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(oe){pt!==oe&&!N&&(s.stencilMask(oe),pt=oe)},setFunc:function(oe,sn,gn){(j!==oe||mt!==sn||bt!==gn)&&(s.stencilFunc(oe,sn,gn),j=oe,mt=sn,bt=gn)},setOp:function(oe,sn,gn){(it!==oe||Nt!==sn||Pt!==gn)&&(s.stencilOp(oe,sn,gn),it=oe,Nt=sn,Pt=gn)},setLocked:function(oe){N=oe},setClear:function(oe){me!==oe&&(s.clearStencil(oe),me=oe)},reset:function(){N=!1,pt=null,j=null,mt=null,bt=null,it=null,Nt=null,Pt=null,me=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,v=null,y=null,M=null,E=null,w=null,C=null,S=new Ut(0,0,0),T=0,L=!1,U=null,z=null,O=null,F=null,R=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=J>=2);let K=null,Q={};const wt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),jt=new xe().fromArray(wt),Wt=new xe().fromArray(St);function ie(N,pt,j,mt){const bt=new Uint8Array(4),it=s.createTexture();s.bindTexture(N,it),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<j;Nt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(pt+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return it}const Z={};Z[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(Ps),lt(!1),ut(Ml),et(s.CULL_FACE),st(zn);function et(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function xt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function kt(N,pt){return u[N]!==pt?(s.bindFramebuffer(N,pt),u[N]=pt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function Et(N,pt){let j=m,mt=!1;if(N){j=d.get(pt),j===void 0&&(j=[],d.set(pt,j));const bt=N.textures;if(j.length!==bt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Nt=bt.length;it<Nt;it++)j[it]=s.COLOR_ATTACHMENT0+it;j.length=bt.length,mt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,mt=!0);mt&&s.drawBuffers(j)}function Ht(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const ce={[qi]:s.FUNC_ADD,[pu]:s.FUNC_SUBTRACT,[mu]:s.FUNC_REVERSE_SUBTRACT};ce[gu]=s.MIN,ce[vu]=s.MAX;const nt={[xu]:s.ZERO,[_u]:s.ONE,[Mu]:s.SRC_COLOR,[eh]:s.SRC_ALPHA,[Tu]:s.SRC_ALPHA_SATURATE,[wu]:s.DST_COLOR,[bu]:s.DST_ALPHA,[Su]:s.ONE_MINUS_SRC_COLOR,[nh]:s.ONE_MINUS_SRC_ALPHA,[Eu]:s.ONE_MINUS_DST_COLOR,[yu]:s.ONE_MINUS_DST_ALPHA,[Au]:s.CONSTANT_COLOR,[Cu]:s.ONE_MINUS_CONSTANT_COLOR,[Ru]:s.CONSTANT_ALPHA,[Pu]:s.ONE_MINUS_CONSTANT_ALPHA};function st(N,pt,j,mt,bt,it,Nt,Pt,me,oe){if(N===zn){g===!0&&(xt(s.BLEND),g=!1);return}if(g===!1&&(et(s.BLEND),g=!0),N!==du){if(N!==p||oe!==L){if((v!==qi||E!==qi)&&(s.blendEquation(s.FUNC_ADD),v=qi,E=qi),oe)switch(N){case ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFunc(s.ONE,s.ONE);break;case Sl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sl:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}y=null,M=null,w=null,C=null,S.set(0,0,0),T=0,p=N,L=oe}return}bt=bt||pt,it=it||j,Nt=Nt||mt,(pt!==v||bt!==E)&&(s.blendEquationSeparate(ce[pt],ce[bt]),v=pt,E=bt),(j!==y||mt!==M||it!==w||Nt!==C)&&(s.blendFuncSeparate(nt[j],nt[mt],nt[it],nt[Nt]),y=j,M=mt,w=it,C=Nt),(Pt.equals(S)===!1||me!==T)&&(s.blendColor(Pt.r,Pt.g,Pt.b,me),S.copy(Pt),T=me),p=N,L=!1}function at(N,pt){N.side===cn?xt(s.CULL_FACE):et(s.CULL_FACE);let j=N.side===We;pt&&(j=!j),lt(j),N.blending===ni&&N.transparent===!1?st(zn):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const mt=N.stencilWrite;o.setTest(mt),mt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(N){U!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),U=N)}function ut(N){N!==hu?(et(s.CULL_FACE),N!==z&&(N===Ml?s.cullFace(s.BACK):N===uu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),z=N}function Bt(N){N!==O&&(G&&s.lineWidth(N),O=N)}function Ot(N,pt,j){N?(et(s.POLYGON_OFFSET_FILL),(F!==pt||R!==j)&&(F=pt,R=j,a.getReversed()&&(pt=-pt),s.polygonOffset(pt,j))):xt(s.POLYGON_OFFSET_FILL)}function Vt(N){N?et(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function Xt(N){N===void 0&&(N=s.TEXTURE0+W-1),K!==N&&(s.activeTexture(N),K=N)}function I(N,pt,j){j===void 0&&(K===null?j=s.TEXTURE0+W-1:j=K);let mt=Q[j];mt===void 0&&(mt={type:void 0,texture:void 0},Q[j]=mt),(mt.type!==N||mt.texture!==pt)&&(K!==j&&(s.activeTexture(j),K=j),s.bindTexture(N,pt||Z[N]),mt.type=N,mt.texture=pt)}function ae(){const N=Q[K];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function x(){try{s.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function B(){try{s.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function ct(){try{s.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function ht(){try{s.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Y(){try{s.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function tt(){try{s.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function ft(N){return f[N]!==void 0?f[N]:s.getParameter(N)}function It(N,pt){f[N]!==pt&&(s.pixelStorei(N,pt),f[N]=pt)}function gt(N){jt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),jt.copy(N))}function dt(N){Wt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Wt.copy(N))}function Dt(N,pt){let j=c.get(pt);j===void 0&&(j=new WeakMap,c.set(pt,j));let mt=j.get(N);mt===void 0&&(mt=s.getUniformBlockIndex(pt,N.name),j.set(N,mt))}function zt(N,pt){const mt=c.get(pt).get(N);l.get(pt)!==mt&&(s.uniformBlockBinding(pt,mt,N.__bindingPointIndex),l.set(pt,mt))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,Q={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,v=null,y=null,M=null,E=null,w=null,C=null,S=new Ut(0,0,0),T=0,L=!1,U=null,z=null,O=null,F=null,R=null,jt.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:xt,bindFramebuffer:kt,drawBuffers:Et,useProgram:Ht,setBlending:st,setMaterial:at,setFlipSided:lt,setCullFace:ut,setLineWidth:Bt,setPolygonOffset:Ot,setScissorTest:Vt,activeTexture:Xt,bindTexture:I,unbindTexture:ae,compressedTexImage2D:Kt,compressedTexImage3D:A,texImage2D:Y,texImage3D:tt,pixelStorei:It,getParameter:ft,updateUBOMapping:Dt,uniformBlockBinding:zt,texStorage2D:ct,texStorage3D:ht,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:gt,viewport:dt,reset:$t}}function t2(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):Ir("canvas")}function g(A,x,B){let V=1;const $=Kt(A);if(($.width>B||$.height>B)&&(V=B/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ct=Math.floor(V*$.width),ht=Math.floor(V*$.height);u===void 0&&(u=_(ct,ht));const Y=x?_(ct,ht):u;return Y.width=ct,Y.height=ht,Y.getContext("2d").drawImage(A,0,0,ct,ht),Gt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ht+")."),Y}else return"data"in A&&Gt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function v(A){s.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,x,B,V,$,ct=!1){if(A!==null){if(s[A]!==void 0)return s[A];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;V&&(ht=t.get("EXT_texture_norm16"),ht||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8),B===s.UNSIGNED_SHORT&&ht&&(Y=ht.R16_EXT),B===s.SHORT&&ht&&(Y=ht.R16_SNORM_EXT)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),x===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8),B===s.UNSIGNED_SHORT&&ht&&(Y=ht.RG16_EXT),B===s.SHORT&&ht&&(Y=ht.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(B===s.UNSIGNED_SHORT&&ht&&(Y=ht.RGB16_EXT),B===s.SHORT&&ht&&(Y=ht.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const tt=ct?Lr:te.getTransfer($);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=tt===he?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ht&&(Y=ht.RGBA16_EXT),B===s.SHORT&&ht&&(Y=ht.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function E(A,x){let B;return A?x===null||x===Tn||x===Is?B=s.DEPTH24_STENCIL8:x===un?B=s.DEPTH32F_STENCIL8:x===Ls&&(B=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Tn||x===Is?B=s.DEPTH_COMPONENT24:x===un?B=s.DEPTH_COMPONENT32F:x===Ls&&(B=s.DEPTH_COMPONENT16),B}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ue&&A.minFilter!==Be?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function S(A){const x=A.target;x.removeEventListener("dispose",S),U(x)}function T(A){const x=n.get(A);if(x.__webglInit===void 0)return;const B=A.source,V=d.get(B);if(V){const $=V[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(A),Object.keys(V).length===0&&d.delete(B)}n.remove(A)}function L(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const B=A.source,V=d.get(B);delete V[x.__cacheKey],a.memory.textures--}function U(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let $=0;$<x.__webglFramebuffer[V].length;$++)s.deleteFramebuffer(x.__webglFramebuffer[V][$]);else s.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)s.deleteFramebuffer(x.__webglFramebuffer[V]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let V=0,$=B.length;V<$;V++){const ct=n.get(B[V]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(B[V])}n.remove(A)}let z=0;function O(){z=0}function F(){return z}function R(A){z=A}function W(){const A=z;return A>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),z+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function J(A,x){const B=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const V=A.image;if(V===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function q(A,x){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){xt(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function K(A,x){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){xt(B,A,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function Q(A,x){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){kt(B,A,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}const wt={[Tr]:s.REPEAT,[On]:s.CLAMP_TO_EDGE,[Ja]:s.MIRRORED_REPEAT},St={[Ue]:s.NEAREST,[Du]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[ta]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},jt={[Ou]:s.NEVER,[Vu]:s.ALWAYS,[Bu]:s.LESS,[Yo]:s.LEQUAL,[zu]:s.EQUAL,[Zo]:s.GEQUAL,[ku]:s.GREATER,[Hu]:s.NOTEQUAL};function Wt(A,x){if(x.type===un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Be||x.magFilter===ta||x.magFilter===Hs||x.magFilter===pi||x.minFilter===Be||x.minFilter===ta||x.minFilter===Hs||x.minFilter===pi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,wt[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,wt[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,wt[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,St[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,St[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,jt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ue||x.minFilter!==Hs&&x.minFilter!==pi||x.type===un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const V=x.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const ct=G(x);if(ct!==A.__cacheKey){$[ct]===void 0&&($[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[ct].usedTimes++;const ht=$[A.__cacheKey];ht!==void 0&&($[A.__cacheKey].usedTimes--,ht.usedTimes===0&&L(x)),A.__cacheKey=ct,A.__webglTexture=$[ct].texture}return B}function Z(A,x,B){return Math.floor(Math.floor(A/B)/x)}function et(A,x,B,V){const ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,B,V,x.data);else{ct.sort((It,gt)=>It.start-gt.start);let ht=0;for(let It=1;It<ct.length;It++){const gt=ct[ht],dt=ct[It],Dt=gt.start+gt.count,zt=Z(dt.start,x.width,4),$t=Z(gt.start,x.width,4);dt.start<=Dt+1&&zt===$t&&Z(dt.start+dt.count-1,x.width,4)===zt?gt.count=Math.max(gt.count,dt.start+dt.count-gt.start):(++ht,ct[ht]=dt)}ct.length=ht+1;const Y=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let It=0,gt=ct.length;It<gt;It++){const dt=ct[It],Dt=Math.floor(dt.start/4),zt=Math.ceil(dt.count/4),$t=Dt%x.width,N=Math.floor(Dt/x.width),pt=zt,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,$t,N,pt,j,B,V,x.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function xt(A,x,B){let V=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=s.TEXTURE_3D);const $=ie(A,x),ct=x.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+B);const ht=n.get(ct);if(ct.version!==ht.__version||$===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=te.getPrimaries(te.workingColorSpace),mt=x.colorSpace===Qn?null:te.getPrimaries(x.colorSpace),bt=x.colorSpace===Qn||j===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=g(x.image,!1,i.maxTextureSize);tt=ae(x,tt);const ft=r.convert(x.format,x.colorSpace),It=r.convert(x.type);let gt=M(x.internalFormat,ft,It,x.normalized,x.colorSpace,x.isVideoTexture);Wt(V,x);let dt;const Dt=x.mipmaps,zt=x.isVideoTexture!==!0,$t=ht.__version===void 0||$===!0,N=ct.dataReady,pt=w(x,tt);if(x.isDepthTexture)gt=E(x.format===mi,x.type),$t&&(zt?e.texStorage2D(s.TEXTURE_2D,1,gt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,gt,tt.width,tt.height,0,ft,It,null));else if(x.isDataTexture)if(Dt.length>0){zt&&$t&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let j=0,mt=Dt.length;j<mt;j++)dt=Dt[j],zt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,dt.width,dt.height,ft,It,dt.data):e.texImage2D(s.TEXTURE_2D,j,gt,dt.width,dt.height,0,ft,It,dt.data);x.generateMipmaps=!1}else zt?($t&&e.texStorage2D(s.TEXTURE_2D,pt,gt,tt.width,tt.height),N&&et(x,tt,ft,It)):e.texImage2D(s.TEXTURE_2D,0,gt,tt.width,tt.height,0,ft,It,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&$t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,Dt[0].width,Dt[0].height,tt.depth);for(let j=0,mt=Dt.length;j<mt;j++)if(dt=Dt[j],x.format!==fn)if(ft!==null)if(zt){if(N)if(x.layerUpdates.size>0){const bt=nc(dt.width,dt.height,x.format,x.type);for(const it of x.layerUpdates){const Nt=dt.data.subarray(it*bt/dt.data.BYTES_PER_ELEMENT,(it+1)*bt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,it,dt.width,dt.height,1,ft,Nt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,tt.depth,ft,dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,gt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,tt.depth,ft,It,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,gt,dt.width,dt.height,tt.depth,0,ft,It,dt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{zt&&$t&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let j=0,mt=Dt.length;j<mt;j++)dt=Dt[j],x.format!==fn?ft!==null?zt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,gt,dt.width,dt.height,0,dt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,dt.width,dt.height,ft,It,dt.data):e.texImage2D(s.TEXTURE_2D,j,gt,dt.width,dt.height,0,ft,It,dt.data)}else if(x.isDataArrayTexture)if(zt){if($t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,tt.width,tt.height,tt.depth),N)if(x.layerUpdates.size>0){const j=nc(tt.width,tt.height,x.format,x.type);for(const mt of x.layerUpdates){const bt=tt.data.subarray(mt*j/tt.data.BYTES_PER_ELEMENT,(mt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,tt.width,tt.height,1,ft,It,bt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,It,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,tt.width,tt.height,tt.depth,0,ft,It,tt.data);else if(x.isData3DTexture)zt?($t&&e.texStorage3D(s.TEXTURE_3D,pt,gt,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,It,tt.data)):e.texImage3D(s.TEXTURE_3D,0,gt,tt.width,tt.height,tt.depth,0,ft,It,tt.data);else if(x.isFramebufferTexture){if($t)if(zt)e.texStorage2D(s.TEXTURE_2D,pt,gt,tt.width,tt.height);else{let j=tt.width,mt=tt.height;for(let bt=0;bt<pt;bt++)e.texImage2D(s.TEXTURE_2D,bt,gt,j,mt,0,ft,It,null),j>>=1,mt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),f.add(x),j.onpaint=mt=>{const bt=mt.changedElements;for(const it of f)bt.includes(it.image)&&(it.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{const bt=s.RGBA,it=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,bt,it,Nt,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(zt&&$t){const j=Kt(Dt[0]);e.texStorage2D(s.TEXTURE_2D,pt,gt,j.width,j.height)}for(let j=0,mt=Dt.length;j<mt;j++)dt=Dt[j],zt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,ft,It,dt):e.texImage2D(s.TEXTURE_2D,j,gt,ft,It,dt);x.generateMipmaps=!1}else if(zt){if($t){const j=Kt(tt);e.texStorage2D(s.TEXTURE_2D,pt,gt,j.width,j.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,It,tt)}else e.texImage2D(s.TEXTURE_2D,0,gt,ft,It,tt);p(x)&&v(V),ht.__version=ct.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function kt(A,x,B){if(x.image.length!==6)return;const V=ie(A,x),$=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const ct=n.get($);if($.version!==ct.__version||V===!0){e.activeTexture(s.TEXTURE0+B);const ht=te.getPrimaries(te.workingColorSpace),Y=x.colorSpace===Qn?null:te.getPrimaries(x.colorSpace),tt=x.colorSpace===Qn||ht===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ft=x.isCompressedTexture||x.image[0].isCompressedTexture,It=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!ft&&!It?gt[it]=g(x.image[it],!0,i.maxCubemapSize):gt[it]=It?x.image[it].image:x.image[it],gt[it]=ae(x,gt[it]);const dt=gt[0],Dt=r.convert(x.format,x.colorSpace),zt=r.convert(x.type),$t=M(x.internalFormat,Dt,zt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,pt=ct.__version===void 0||V===!0,j=$.dataReady;let mt=w(x,dt);Wt(s.TEXTURE_CUBE_MAP,x);let bt;if(ft){N&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,$t,dt.width,dt.height);for(let it=0;it<6;it++){bt=gt[it].mipmaps;for(let Nt=0;Nt<bt.length;Nt++){const Pt=bt[Nt];x.format!==fn?Dt!==null?N?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,Pt.width,Pt.height,Dt,Pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,$t,Pt.width,Pt.height,0,Pt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,Pt.width,Pt.height,Dt,zt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,$t,Pt.width,Pt.height,0,Dt,zt,Pt.data)}}}else{if(bt=x.mipmaps,N&&pt){bt.length>0&&mt++;const it=Kt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,$t,it.width,it.height)}for(let it=0;it<6;it++)if(It){N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Dt,zt,gt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,gt[it].width,gt[it].height,0,Dt,zt,gt[it].data);for(let Nt=0;Nt<bt.length;Nt++){const me=bt[Nt].image[it].image;N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,me.width,me.height,Dt,zt,me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,$t,me.width,me.height,0,Dt,zt,me.data)}}else{N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,zt,gt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,Dt,zt,gt[it]);for(let Nt=0;Nt<bt.length;Nt++){const Pt=bt[Nt];N?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,Dt,zt,Pt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,$t,Dt,zt,Pt.image[it])}}}p(x)&&v(s.TEXTURE_CUBE_MAP),ct.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Et(A,x,B,V,$,ct){const ht=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),tt=M(B.internalFormat,ht,Y,B.normalized,B.colorSpace),ft=n.get(x),It=n.get(B);if(It.__renderTarget=x,!ft.__hasExternalTextures){const gt=Math.max(1,x.width>>ct),dt=Math.max(1,x.height>>ct);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,ct,tt,gt,dt,x.depth,0,ht,Y,null):e.texImage2D($,ct,tt,gt,dt,0,ht,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Xt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,$,It.__webglTexture,0,Vt(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,$,It.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(A,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const V=x.depthTexture,$=V&&V.isDepthTexture?V.type:null,ct=E(x.stencilBuffer,$),ht=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(x),ct,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(x),ct,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ct,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,A)}else{const V=x.textures;for(let $=0;$<V.length;$++){const ct=V[$],ht=r.convert(ct.format,ct.colorSpace),Y=r.convert(ct.type),tt=M(ct.internalFormat,ht,Y,ct.normalized,ct.colorSpace);Xt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(x),tt,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(x),tt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,tt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ce(A,x,B){const V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,x.depthTexture);const ft=r.convert(x.depthTexture.format),It=r.convert(x.depthTexture.type);let gt;x.depthTexture.format===Hn?gt=s.DEPTH_COMPONENT24:x.depthTexture.format===mi&&(gt=s.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,gt,x.width,x.height,0,ft,It,null)}}else J(x.depthTexture,0);const ct=$.__webglTexture,ht=Vt(x),Y=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,tt=x.depthTexture.format===mi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hn)Xt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Y,ct,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,tt,Y,ct,0);else if(x.depthTexture.format===mi)Xt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Y,ct,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,tt,Y,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){const x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=V}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)ce(x.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?ce(x.__webglFramebuffer[0],A,0):ce(x.__webglFramebuffer,A,0)}else if(B){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=s.createRenderbuffer(),Ht(x.__webglDepthbuffer[V],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ht(x.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(A,x,B){const V=n.get(A);x!==void 0&&Et(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&nt(A)}function at(A){const x=A.texture,B=n.get(A),V=n.get(x);A.addEventListener("dispose",S);const $=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ht=$.length>1;if(ht||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=x.version,a.memory.textures++),ct){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let tt=0;tt<x.mipmaps.length;tt++)B.__webglFramebuffer[Y][tt]=s.createFramebuffer()}else B.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[Y]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ht)for(let Y=0,tt=$.length;Y<tt;Y++){const ft=n.get($[Y]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Xt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){const tt=$[Y];B.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const ft=r.convert(tt.format,tt.colorSpace),It=r.convert(tt.type),gt=M(tt.internalFormat,ft,It,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),dt=Vt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,gt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ht(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Et(B.__webglFramebuffer[Y][tt],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,tt);else Et(B.__webglFramebuffer[Y],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let Y=0,tt=$.length;Y<tt;Y++){const ft=$[Y],It=n.get(ft);let gt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,It.__webglTexture),Wt(gt,ft),Et(B.__webglFramebuffer,A,ft,s.COLOR_ATTACHMENT0+Y,gt,0),p(ft)&&v(gt)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,V.__webglTexture),Wt(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Et(B.__webglFramebuffer[tt],A,x,s.COLOR_ATTACHMENT0,Y,tt);else Et(B.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Y,0);p(x)&&v(Y),e.unbindTexture()}A.depthBuffer&&nt(A)}function lt(A){const x=A.textures;for(let B=0,V=x.length;B<V;B++){const $=x[B];if(p($)){const ct=y(A),ht=n.get($).__webglTexture;e.bindTexture(ct,ht),v(ct),e.unbindTexture()}}}const ut=[],Bt=[];function Ot(A){if(A.samples>0){if(Xt(A)===!1){const x=A.textures,B=A.width,V=A.height;let $=s.COLOR_BUFFER_BIT;const ct=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(A),Y=x.length>1;if(Y)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);const It=n.get(x[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,B,V,0,0,B,V,$,s.NEAREST),l===!0&&(ut.length=0,Bt.length=0,ut.push(s.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ut.push(ct),Bt.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);const It=n.get(x[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Vt(A){return Math.min(i.maxSamples,A.samples)}function Xt(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ae(A,x){const B=A.colorSpace,V=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Pr&&B!==Qn&&(te.getTransfer(B)===he?(V!==fn||$!==Ye)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",B)),x}function Kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.getTextureUnits=F,this.setTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=st,this.setupRenderTarget=at,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function e2(s,t){function e(n,i=Qn){let r;const a=te.getTransfer(i);if(n===Ye)return s.UNSIGNED_BYTE;if(n===Vo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return s.BYTE;if(n===uh)return s.SHORT;if(n===Ls)return s.UNSIGNED_SHORT;if(n===Ho)return s.INT;if(n===Tn)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===ph)return s.ALPHA;if(n===mh)return s.RGB;if(n===fn)return s.RGBA;if(n===Hn)return s.DEPTH_COMPONENT;if(n===mi)return s.DEPTH_STENCIL;if(n===Wo)return s.RED;if(n===Xo)return s.RED_INTEGER;if(n===Mi)return s.RG;if(n===qo)return s.RG_INTEGER;if(n===$o)return s.RGBA_INTEGER;if(n===xr||n===_r||n===Mr||n===Sr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Qa||n===ja||n===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===no||n===io||n===so||n===ro||n===Ar||n===ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===no)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===so)return r.COMPRESSED_R11_EAC;if(n===ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ar)return r.COMPRESSED_RG11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===xo||n===_o||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===yo||n===wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eo||n===To||n===Cr||n===Ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const n2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i2=`
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

}`;class s2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Eh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:n2,fragmentShader:i2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r2 extends yi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new s2,p={},v=e.getContextAttributes();let y=null,M=null;const E=[],w=[],C=new ot;let S=null,T=null;const L=new en;L.viewport=new xe;const U=new en;U.viewport=new xe;const z=[L,U],O=new fd;let F=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=E[Z];return et===void 0&&(et=new ca,E[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=E[Z];return et===void 0&&(et=new ca,E[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=E[Z];return et===void 0&&(et=new ca,E[Z]=et),et.getHandSpace()};function W(Z){const et=w.indexOf(Z.inputSource);if(et===-1)return;const xt=E[et];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,c||a),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",J);for(let Z=0;Z<E.length;Z++){const et=w[Z];et!==null&&(w[Z]=null,E[Z].disconnect(et))}F=null,R=null,g.reset();for(const Z in p)delete p[Z];if(t.setRenderTarget(y),d=null,u=null,f=null,i=null,M=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(C.width,C.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",G),i.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,kt=null,Et=null;v.depth&&(Et=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=v.stencil?mi:Hn,kt=v.stencil?Is:Tn);const Ht={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new dn(u.textureWidth,u.textureHeight,{format:fn,type:Ye,depthTexture:new Us(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new dn(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Z){for(let et=0;et<Z.removed.length;et++){const xt=Z.removed[et],kt=w.indexOf(xt);kt>=0&&(w[kt]=null,E[kt].disconnect(xt))}for(let et=0;et<Z.added.length;et++){const xt=Z.added[et];let kt=w.indexOf(xt);if(kt===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=w.length){w.push(xt),kt=Ht;break}else if(w[Ht]===null){w[Ht]=xt,kt=Ht;break}if(kt===-1)break}const Et=E[kt];Et&&Et.connect(xt)}}const q=new P,K=new P;function Q(Z,et,xt){q.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(xt.matrixWorld);const kt=q.distanceTo(K),Et=et.projectionMatrix.elements,Ht=xt.projectionMatrix.elements,ce=Et[14]/(Et[10]-1),nt=Et[14]/(Et[10]+1),st=(Et[9]+1)/Et[5],at=(Et[9]-1)/Et[5],lt=(Et[8]-1)/Et[0],ut=(Ht[8]+1)/Ht[0],Bt=ce*lt,Ot=ce*ut,Vt=kt/(-lt+ut),Xt=Vt*-lt;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xt),Z.translateZ(Vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Et[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const I=ce+Vt,ae=nt+Vt,Kt=Bt-Xt,A=Ot+(kt-Xt),x=st*nt/ae*I,B=at*nt/ae*I;Z.projectionMatrix.makePerspective(Kt,A,x,B,I,ae),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function wt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let et=Z.near,xt=Z.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),O.near=U.near=L.near=et,O.far=U.far=L.far=xt,(F!==O.near||R!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,R=O.far),O.layers.mask=Z.layers.mask|6,L.layers.mask=O.layers.mask&-5,U.layers.mask=O.layers.mask&-3;const kt=Z.parent,Et=O.cameras;wt(O,kt);for(let Ht=0;Ht<Et.length;Ht++)wt(Et[Ht],kt);Et.length===2?Q(O,L,U):O.projectionMatrix.copy(L.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),St(Z,O,kt)};function St(Z,et,xt){xt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Co*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let jt=null;function Wt(Z,et){if(h=et.getViewerPose(c||a),m=et,h!==null){const xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let kt=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,kt=!0);for(let nt=0;nt<xt.length;nt++){const st=xt[nt];let at=null;if(d!==null)at=d.getViewport(st);else{const ut=f.getViewSubImage(u,st);at=ut.viewport,nt===0&&(t.setRenderTargetTextures(M,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(M))}let lt=z[nt];lt===void 0&&(lt=new en,lt.layers.enable(nt),lt.viewport=new xe,z[nt]=lt),lt.matrix.fromArray(st.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(st.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(at.x,at.y,at.width,at.height),nt===0&&(O.matrix.copy(lt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),kt===!0&&O.cameras.push(lt)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const nt=f.getDepthInformation(xt[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,i.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let nt=0;nt<xt.length;nt++){const st=xt[nt].camera;if(st){let at=p[st];at||(at=new Eh,p[st]=at);const lt=f.getCameraImage(st);at.sourceTexture=lt}}}}for(let xt=0;xt<E.length;xt++){const kt=w[xt],Et=E[xt];kt!==null&&Et!==void 0&&Et.update(kt,et,c||a)}jt&&jt(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}const ie=new zh;ie.setAnimationLoop(Wt),this.setAnimationLoop=function(Z){jt=Z},this.dispose=function(){}}}const a2=new ee,qh=new qt;qh.set(-1,0,0,0,1,0,0,0,1);function o2(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===We&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===We&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,M=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(a2.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function l2(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const w=E.program;n.uniformBlockBinding(M,w)}function c(M,E){let w=i[M.id];w===void 0&&(g(M),w=h(M),i[M.id]=w,M.addEventListener("dispose",v));const C=E.program;n.updateUBOMapping(M,C);const S=t.render.frame;r[M.id]!==S&&(u(M),r[M.id]=S)}function h(M){const E=f();M.__bindingPointIndex=E;const w=s.createBuffer(),C=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,C,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,w),w}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=i[M.id],w=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let S=0,T=w.length;S<T;S++){const L=w[S];if(Array.isArray(L))for(let U=0,z=L.length;U<z;U++)d(L[U],S,U,C);else d(L,S,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,E,w,C){if(_(M,E,w,C)===!0){const S=M.__offset,T=M.value;if(Array.isArray(T)){let L=0;for(let U=0;U<T.length;U++){const z=T[U],O=p(z);m(z,M.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,M.__data)}}function m(M,E,w){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,w)}function _(M,E,w,C){const S=M.value,T=E+"_"+w;if(C[T]===void 0)return typeof S=="number"||typeof S=="boolean"?C[T]=S:ArrayBuffer.isView(S)?C[T]=S.slice():C[T]=S.clone(),!0;{const L=C[T];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return C[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(L.equals(S)===!1)return L.copy(S),!0}}return!1}function g(M){const E=M.uniforms;let w=0;const C=16;for(let T=0,L=E.length;T<L;T++){const U=Array.isArray(E[T])?E[T]:[E[T]];for(let z=0,O=U.length;z<O;z++){const F=U[z],R=Array.isArray(F.value)?F.value:[F.value];for(let W=0,G=R.length;W<G;W++){const J=R[W],q=p(J),K=w%C,Q=K%q.boundary,wt=K+Q;w+=Q,wt!==0&&C-wt<q.storage&&(w+=C-wt),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=q.storage}}}const S=w%C;return S>0&&(w+=C-S),M.__size=w,M.__cache={},this}function p(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",M),E}function v(M){const E=M.target;E.removeEventListener("dispose",v);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function y(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:y}}const c2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function h2(){return _n===null&&(_n=new yh(c2,16,16,Mi,An),_n.name="DFG_LUT",_n.minFilter=Be,_n.magFilter=Be,_n.wrapS=On,_n.wrapT=On,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class u2{constructor(t={}){const{canvas:e=qu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ye}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=d,g=new Set([$o,qo,Xo]),p=new Set([Ye,Tn,Ls,Is,Vo,Go]),v=new Uint32Array(4),y=new Int32Array(4),M=new P;let E=null,w=null;const C=[],S=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,z=null,O=null,F=null,R=null;this._outputColorSpace=ye;let W=0,G=0,J=null,q=-1,K=null;const Q=new xe,wt=new xe;let St=null;const jt=new Ut(0);let Wt=0,ie=e.width,Z=e.height,et=1,xt=null,kt=null;const Et=new xe(0,0,ie,Z),Ht=new xe(0,0,ie,Z);let ce=!1;const nt=new Qo;let st=!1,at=!1;const lt=new ee,ut=new P,Bt=new xe,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Xt(){return J===null?et:1}let I=n;function ae(b,D){return e.getContext(b,D)}let Kt,A,x,B,V,$,ct,ht,Y,tt,ft,It,gt,dt,Dt,zt,$t,N,pt,j,mt,bt,it;try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bo}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",sn,!1),I===null){const D="webgl2";if(I=ae(D,b),I===null)throw ae(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(b){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),ne("WebGLRenderer: "+b.message),b}function Nt(){Kt=new h1(I),Kt.init(),mt=new e2(I,Kt),A=new t1(I,Kt,t,mt),x=new jm(I,Kt),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=I.createFramebuffer(),F=I.createFramebuffer(),R=I.createFramebuffer(),B=new d1(I),V=new zm,$=new t2(I,Kt,x,V,A,mt,B),ct=new c1(L),ht=new md(I),bt=new Qp(I,ht),Y=new u1(I,ht,B,bt),tt=new m1(I,Y,ht,bt,B),N=new p1(I,A,$),Dt=new e1(V),ft=new Bm(L,ct,Kt,A,bt,Dt),It=new o2(L,V),gt=new Hm,dt=new $m(Kt),$t=new Kp(L,ct,x,tt,m,l),zt=new Qm(L,tt,A),it=new l2(I,B,A,x),pt=new jp(I,Kt,B),j=new f1(I,Kt,B),B.programs=ft.programs,L.capabilities=A,L.extensions=Kt,L.properties=V,L.renderLists=gt,L.shadowMap=zt,L.state=x,L.info=B}_!==Ye&&(T=new v1(_,e.width,e.height,o,i,r));const Pt=new r2(L,I);this.xr=Pt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(ie,Z,!1))},this.getSize=function(b){return b.set(ie,Z)},this.setSize=function(b,D,X=!0){if(Pt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,Z=D,e.width=Math.floor(b*et),e.height=Math.floor(D*et),X===!0&&(e.style.width=b+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(ie*et,Z*et).floor()},this.setDrawingBufferSize=function(b,D,X){ie=b,Z=D,et=X,e.width=Math.floor(b*X),e.height=Math.floor(D*X),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(_===Ye){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,D,X,k){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,D,X,k),x.viewport(Q.copy(Et).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,D,X,k){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,D,X,k),x.scissor(wt.copy(Ht).multiplyScalar(et).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){x.setScissorTest(ce=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,X=!0){let k=0;if(b){let H=!1;if(J!==null){const Mt=J.texture.format;H=g.has(Mt)}if(H){const Mt=J.texture.type,At=p.has(Mt),_t=$t.getClearColor(),Ct=$t.getClearAlpha(),Lt=_t.r,Yt=_t.g,Qt=_t.b;At?(v[0]=Lt,v[1]=Yt,v[2]=Qt,v[3]=Ct,I.clearBufferuiv(I.COLOR,0,v)):(y[0]=Lt,y[1]=Yt,y[2]=Qt,y[3]=Ct,I.clearBufferiv(I.COLOR,0,y))}else k|=I.COLOR_BUFFER_BIT}D&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),$t.dispose(),gt.dispose(),dt.dispose(),V.dispose(),ct.dispose(),tt.dispose(),bt.dispose(),it.dispose(),ft.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",ul),Pt.removeEventListener("sessionend",fl),si.stop()};function me(b){b.preventDefault(),El("WebGLRenderer: Context Lost."),U=!0}function oe(){El("WebGLRenderer: Context Restored."),U=!1;const b=B.autoReset,D=zt.enabled,X=zt.autoUpdate,k=zt.needsUpdate,H=zt.type;Nt(),B.autoReset=b,zt.enabled=D,zt.autoUpdate=X,zt.needsUpdate=k,zt.type=H}function sn(b){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gn(b){const D=b.target;D.removeEventListener("dispose",gn),iu(D)}function iu(b){su(b),V.remove(b)}function su(b){const D=V.get(b).programs;D!==void 0&&(D.forEach(function(X){ft.releaseProgram(X)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,X,k,H,Mt){D===null&&(D=Ot);const At=H.isMesh&&H.matrixWorld.determinantAffine()<0,_t=ou(b,D,X,k,H);x.setMaterial(k,At);let Ct=X.index,Lt=1;if(k.wireframe===!0){if(Ct=Y.getWireframeAttribute(X),Ct===void 0)return;Lt=2}const Yt=X.drawRange,Qt=X.attributes.position;let Rt=Yt.start*Lt,le=(Yt.start+Yt.count)*Lt;Mt!==null&&(Rt=Math.max(Rt,Mt.start*Lt),le=Math.min(le,(Mt.start+Mt.count)*Lt)),Ct!==null?(Rt=Math.max(Rt,0),le=Math.min(le,Ct.count)):Qt!=null&&(Rt=Math.max(Rt,0),le=Math.min(le,Qt.count));const we=le-Rt;if(we<0||we===1/0)return;bt.setup(H,k,_t,X,Ct);let ve,pe=pt;if(Ct!==null&&(ve=ht.get(Ct),pe=j,pe.setIndex(ve)),H.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Xt()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(H.isLine){let Ne=k.linewidth;Ne===void 0&&(Ne=1),x.setLineWidth(Ne*Xt()),H.isLineSegments?pe.setMode(I.LINES):H.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else H.isPoints?pe.setMode(I.POINTS):H.isSprite&&pe.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ne=H._multiDrawStarts,Tt=H._multiDrawCounts,He=H._multiDrawCount,se=Ct?ht.get(Ct).bytesPerElement:1,Ke=V.get(k).currentProgram.getUniforms();for(let vn=0;vn<He;vn++)Ke.setValue(I,"_gl_DrawID",vn),pe.render(Ne[vn]/se,Tt[vn])}else if(H.isInstancedMesh)pe.renderInstances(Rt,we,H.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,Ne);pe.renderInstances(Rt,we,Tt)}else pe.render(Rt,we)};function hl(b,D,X,k){z!==null&&b.isNodeMaterial&&z.setObject(k,b),st===!0&&Dt.setState(b,X,!1),b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=We,b.needsUpdate=!0,ks(b,D,k),b.side=xi,b.needsUpdate=!0,ks(b,D,k),b.side=cn):ks(b,D,k)}this.compile=function(b,D,X=null){X===null&&(X=b),z!==null&&z.renderStart(b,D,X),w=dt.get(X),w.init(D),S.push(w),X.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),b!==X&&b.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),at=this.localClippingEnabled,st=Dt.init(this.clippingPlanes,at),st===!0&&Dt.setGlobalState(this.clippingPlanes,D),z!==null&&zt.render(w.state.shadowsArray,X,D);const k=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const _t=Mt[At];hl(_t,X,D,H),k.add(_t)}else hl(Mt,X,D,H),k.add(Mt)}),w=S.pop(),z!==null&&z.renderEnd(),k},this.compileAsync=function(b,D,X=null){const k=this.compile(b,D,X);return new Promise(H=>{function Mt(){if(k.forEach(function(At){const Ct=V.get(At).currentProgram;(Ct===void 0||Ct.isReady())&&k.delete(At)}),k.size===0){H(b);return}setTimeout(Mt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Jr=null;function ru(b){Jr&&Jr(b)}function ul(){si.stop()}function fl(){si.start()}const si=new zh;si.setAnimationLoop(ru),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(b){Jr=b,Pt.setAnimationLoop(b),b===null?si.stop():si.start()},Pt.addEventListener("sessionstart",ul),Pt.addEventListener("sessionend",fl),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(b,D);const X=Pt.enabled===!0&&Pt.isPresenting===!0,k=T!==null&&(J===null||X)&&T.begin(L,J);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(D),D=Pt.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,D,J),w=dt.get(b,S.length),w.init(D),w.state.textureUnits=$.getTextureUnits(),S.push(w),lt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),nt.setFromProjectionMatrix(lt,yn,D.reversedDepth),at=this.localClippingEnabled,st=Dt.init(this.clippingPlanes,at),E=gt.get(b,C.length),E.init(),C.push(E),Pt.enabled===!0&&Pt.isPresenting===!0){const At=L.xr.getDepthSensingMesh();At!==null&&Kr(At,D,-1/0,L.sortObjects)}Kr(b,D,0,L.sortObjects),E.finish(),z!==null&&z.updateLights(w.state.lightsArray),L.sortObjects===!0&&E.sort(xt,kt),Vt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Vt&&$t.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Dt.beginShadows();const H=w.state.shadowsArray;if(zt.render(H,b,D),st===!0&&Dt.endShadows(),(k&&T.hasRenderPass())===!1){const At=E.opaque,_t=E.transmissive;if(w.setupLights(),D.isArrayCamera){const Ct=D.cameras;if(_t.length>0)for(let Lt=0,Yt=Ct.length;Lt<Yt;Lt++){const Qt=Ct[Lt];pl(At,_t,b,Qt)}Vt&&$t.render(b);for(let Lt=0,Yt=Ct.length;Lt<Yt;Lt++){const Qt=Ct[Lt];dl(E,b,Qt,Qt.viewport)}}else _t.length>0&&pl(At,_t,b,D),Vt&&$t.render(b),dl(E,b,D)}J!==null&&G===0&&($.updateMultisampleRenderTarget(J),$.updateRenderTargetMipmap(J)),k&&T.end(L),b.isScene===!0&&b.onAfterRender(L,b,D),bt.resetDefaultState(),q=-1,K=null,S.pop(),S.length>0?(w=S[S.length-1],$.setTextureUnits(w.state.textureUnits),st===!0&&Dt.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,z!==null&&z.renderEnd()};function Kr(b,D,X,k){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(nt)){k&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);const At=tt.update(b),_t=b.material;_t.visible&&E.push(b,At,_t,X,Bt.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(nt))){const At=tt.update(b),_t=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Bt.copy(At.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(_t)){const Ct=At.groups;for(let Lt=0,Yt=Ct.length;Lt<Yt;Lt++){const Qt=Ct[Lt],Rt=_t[Qt.materialIndex];Rt&&Rt.visible&&E.push(b,At,Rt,X,Bt.z,Qt,D)}}else _t.visible&&E.push(b,At,_t,X,Bt.z,null,D)}}const Mt=b.children;for(let At=0,_t=Mt.length;At<_t;At++)Kr(Mt[At],D,X,k)}function dl(b,D,X,k){const{opaque:H,transmissive:Mt,transparent:At}=b;w.setupLightsView(X),st===!0&&Dt.setGlobalState(L.clippingPlanes,X),k&&x.viewport(Q.copy(k)),H.length>0&&zs(H,D,X),Mt.length>0&&zs(Mt,D,X),At.length>0&&zs(At,D,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function pl(b,D,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const Rt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new dn(1,1,{generateMipmaps:!0,type:Rt?An:Ye,minFilter:pi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const Mt=w.state.transmissionRenderTarget[k.id],At=k.viewport||Q;Mt.setSize(At.z*L.transmissionResolutionScale,At.w*L.transmissionResolutionScale);const _t=L.getRenderTarget(),Ct=L.getActiveCubeFace(),Lt=L.getActiveMipmapLevel();L.setRenderTarget(Mt),L.getClearColor(jt),Wt=L.getClearAlpha(),Wt<1&&L.setClearColor(16777215,.5),L.clear(),Vt&&$t.render(X);const Yt=L.toneMapping;L.toneMapping=En;const Qt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),st===!0&&Dt.setGlobalState(L.clippingPlanes,k),zs(b,X,k),$.updateMultisampleRenderTarget(Mt),$.updateRenderTargetMipmap(Mt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let le=0,we=D.length;le<we;le++){const ve=D[le],{object:pe,geometry:Ne,material:Tt,group:He}=ve;if(Tt.side===cn&&pe.layers.test(k.layers)){const se=Tt.side;Tt.side=We,Tt.needsUpdate=!0,ml(pe,X,k,Ne,Tt,He),Tt.side=se,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&($.updateMultisampleRenderTarget(Mt),$.updateRenderTargetMipmap(Mt))}L.setRenderTarget(_t,Ct,Lt),L.setClearColor(jt,Wt),Qt!==void 0&&(k.viewport=Qt),L.toneMapping=Yt}function zs(b,D,X){const k=D.isScene===!0?D.overrideMaterial:null;for(let H=0,Mt=b.length;H<Mt;H++){const At=b[H],{object:_t,geometry:Ct,group:Lt}=At;let Yt=At.material;Yt.allowOverride===!0&&k!==null&&(Yt=k),_t.layers.test(X.layers)&&ml(_t,D,X,Ct,Yt,Lt)}}function ml(b,D,X,k,H,Mt){z!==null&&H.isNodeMaterial&&z.setObject(b,H),b.onBeforeRender(L,D,X,k,H,Mt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(L,D,X,k,b,Mt),H.transparent===!0&&H.side===cn&&H.forceSinglePass===!1?(H.side=We,H.needsUpdate=!0,L.renderBufferDirect(X,D,k,H,b,Mt),H.side=xi,H.needsUpdate=!0,L.renderBufferDirect(X,D,k,H,b,Mt),H.side=cn):L.renderBufferDirect(X,D,k,H,b,Mt),b.onAfterRender(L,D,X,k,H,Mt)}function ks(b,D,X){D.isScene!==!0&&(D=Ot);const k=V.get(b),H=w.state.lights,Mt=w.state.shadowsArray,At=H.state.version,_t=ft.getParameters(b,H.state,Mt,D,X,w.state.lightProbeGridArray),Ct=ft.getProgramCacheKey(_t);let Lt=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;const Yt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=ct.get(b.envMap||k.environment,Yt),k.envMapRotation=k.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",gn),Lt=new Map,k.programs=Lt);let Qt=Lt.get(Ct);if(Qt!==void 0){if(k.currentProgram===Qt&&k.lightsStateVersion===At)return vl(b,_t),Qt}else _t.uniforms=ft.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,X,_t),b.onBeforeCompile(_t,L),Qt=ft.acquireProgram(_t,Ct),Lt.set(Ct,Qt),k.uniforms=_t.uniforms;const Rt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Dt.uniform),vl(b,_t),k.needsLights=cu(b),k.lightsStateVersion=At,k.needsLights&&(Rt.ambientLightColor.value=H.state.ambient,Rt.lightProbe.value=H.state.probe,Rt.sunLights.value=H.state.sun,Rt.sunLightShadows.value=H.state.sunShadow,Rt.directionalLights.value=H.state.directional,Rt.directionalLightShadows.value=H.state.directionalShadow,Rt.spotLights.value=H.state.spot,Rt.spotLightShadows.value=H.state.spotShadow,Rt.rectAreaLights.value=H.state.rectArea,Rt.ltc_1.value=H.state.rectAreaLTC1,Rt.ltc_2.value=H.state.rectAreaLTC2,Rt.pointLights.value=H.state.point,Rt.pointLightShadows.value=H.state.pointShadow,Rt.hemisphereLights.value=H.state.hemi,Rt.sunShadowMatrix.value=H.state.sunShadowMatrix,Rt.sunShadowCascade.value=H.state.sunShadowCascade,Rt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Rt.spotLightMatrix.value=H.state.spotLightMatrix,Rt.spotLightMap.value=H.state.spotLightMap,Rt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=Qt,k.uniformsList=null,Qt}function gl(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=br.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function vl(b,D){const X=V.get(b);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function au(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let X=0,k=b.length;X<k;X++){const H=b[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function ou(b,D,X,k,H){D.isScene!==!0&&(D=Ot),$.resetTextureUnits();const Mt=D.fog,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,_t=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:te.workingColorSpace,Ct=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Lt=ct.get(k.envMap||At,Ct),Yt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Rt=!!X.morphAttributes.position,le=!!X.morphAttributes.normal,we=!!X.morphAttributes.color;let ve=En;k.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ve=L.toneMapping);const pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ne=pe!==void 0?pe.length:0,Tt=V.get(k),He=w.state.lights;if(st===!0&&(at===!0||b!==K)){const ge=b===K&&k.id===q;Dt.setState(k,b,ge)}let se=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==He.state.version||Tt.outputColorSpace!==_t||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==Lt||k.fog===!0&&Tt.fog!==Mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Dt.numPlanes||Tt.numIntersection!==Dt.numIntersection)||Tt.vertexAlphas!==Yt||Tt.vertexTangents!==Qt||Tt.morphTargets!==Rt||Tt.morphNormals!==le||Tt.morphColors!==we||Tt.toneMapping!==ve||Tt.morphTargetsCount!==Ne||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Tt.__version=k.version);let Ke=Tt.currentProgram;se===!0&&(Ke=ks(k,D,H),z&&k.isNodeMaterial&&z.onUpdateProgram(k,Ke,Tt));let vn=!1,Vn=!1,Ti=!1;const fe=Ke.getUniforms(),be=Tt.uniforms;if(x.useProgram(Ke.program)&&(vn=!0,Vn=!0,Ti=!0),k.id!==q&&(q=k.id,Vn=!0),Tt.needsLights){const ge=au(w.state.lightProbeGridArray,H);Tt.lightProbeGrid!==ge&&(Tt.lightProbeGrid=ge,Vn=!0)}if(vn||K!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(I,"projectionMatrix",b.projectionMatrix),fe.setValue(I,"viewMatrix",b.matrixWorldInverse);const Wn=fe.map.cameraPosition;Wn!==void 0&&Wn.setValue(I,ut.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&fe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,Vn=!0,Ti=!0)}if(Tt.needsLights&&(He.state.sunShadowMap.length>0&&fe.setValue(I,"sunShadowMap",He.state.sunShadowMap,$),He.state.directionalShadowMap.length>0&&fe.setValue(I,"directionalShadowMap",He.state.directionalShadowMap,$),He.state.spotShadowMap.length>0&&fe.setValue(I,"spotShadowMap",He.state.spotShadowMap,$),He.state.pointShadowMap.length>0&&fe.setValue(I,"pointShadowMap",He.state.pointShadowMap,$)),H.isSkinnedMesh){fe.setOptional(I,H,"bindMatrix"),fe.setOptional(I,H,"bindMatrixInverse");const ge=H.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),fe.setValue(I,"boneTexture",ge.boneTexture,$))}H.isBatchedMesh&&(fe.setOptional(I,H,"batchingTexture"),fe.setValue(I,"batchingTexture",H._matricesTexture,$),fe.setOptional(I,H,"batchingIdTexture"),fe.setValue(I,"batchingIdTexture",H._indirectTexture,$),fe.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&fe.setValue(I,"batchingColorTexture",H._colorsTexture,$));const Gn=X.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&N.update(H,X,Ke),(Vn||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,fe.setValue(I,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(be.envMapIntensity.value=D.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=h2()),Vn){if(fe.setValue(I,"toneMappingExposure",L.toneMappingExposure),Tt.needsLights&&lu(be,Ti),Mt&&k.fog===!0&&It.refreshFogUniforms(be,Mt),It.refreshMaterialUniforms(be,k,et,Z,w.state.transmissionRenderTarget[b.id]),Tt.needsLights&&Tt.lightProbeGrid){const ge=Tt.lightProbeGrid;be.probesSH.value=ge.texture,be.probesMin.value.copy(ge.boundingBox.min),be.probesMax.value.copy(ge.boundingBox.max),be.probesResolution.value.copy(ge.resolution)}br.upload(I,gl(Tt),be,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(br.upload(I,gl(Tt),be,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(I,"center",H.center),fe.setValue(I,"modelViewMatrix",H.modelViewMatrix),fe.setValue(I,"normalMatrix",H.normalMatrix),fe.setValue(I,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const ge=k.uniformsGroups;for(let Wn=0,Ai=ge.length;Wn<Ai;Wn++){const _l=ge[Wn];it.update(_l,Ke),it.bind(_l,Ke)}}return Ke}function lu(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function cu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(b,D,X){const k=V.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=D,V.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const X=V.get(b);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,X=0){J=b,W=D,G=X;let k=null,H=!1,Mt=!1;if(b){const _t=V.get(b);if(_t.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,_t.__webglFramebuffer),Q.copy(b.viewport),wt.copy(b.scissor),St=b.scissorTest,x.viewport(Q),x.scissor(wt),x.setScissorTest(St),q=-1;return}else if(_t.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(_t.__hasExternalTextures)$.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(_t.__boundDepthTexture!==Yt){if(Yt!==null&&V.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}const Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Mt=!0);const Lt=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?k=Lt[D][X]:k=Lt[D],H=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?k=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?k=Lt[X]:k=Lt,Q.copy(b.viewport),wt.copy(b.scissor),St=b.scissorTest}else Q.copy(Et).multiplyScalar(et).floor(),wt.copy(Ht).multiplyScalar(et).floor(),St=ce;if(X!==0&&(k=O),x.bindFramebuffer(I.FRAMEBUFFER,k)&&x.drawBuffers(b,k),x.viewport(Q),x.scissor(wt),x.setScissorTest(St),H){const _t=V.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,_t.__webglTexture,X)}else if(Mt){const _t=D;for(let Ct=0;Ct<b.textures.length;Ct++){const Lt=V.get(b.textures[Ct]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,X,_t)}}else if(b!==null&&X!==0){const _t=V.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,X)}q=-1};function xl(b){const D=V.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=A.textureFormatReadable(b.format),D.__typeReadable=A.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,X,k,H,Mt,At,_t=0){if(!(b&&b.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){x.bindFramebuffer(I.FRAMEBUFFER,Ct);try{const Lt=b.textures[_t],Yt=Lt.format,Qt=Lt.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t);const Rt=xl(Lt);if(Rt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-k&&X>=0&&X<=b.height-H&&I.readPixels(D,X,k,H,mt.convert(Yt),mt.convert(Qt),Mt)}finally{const Lt=J!==null?V.get(J).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,D,X,k,H,Mt,At,_t=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(D>=0&&D<=b.width-k&&X>=0&&X<=b.height-H){x.bindFramebuffer(I.FRAMEBUFFER,Ct);const Lt=b.textures[_t],Yt=Lt.format,Qt=Lt.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t);const Rt=xl(Lt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),I.readPixels(D,X,k,H,mt.convert(Yt),mt.convert(Qt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const we=J!==null?V.get(J).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,we);const ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $u(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(le),I.deleteSync(ve),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,X=0){const k=Math.pow(2,-X),H=Math.floor(b.image.width*k),Mt=Math.floor(b.image.height*k),At=D!==null?D.x:0,_t=D!==null?D.y:0;$.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,At,_t,H,Mt),x.unbindTexture()},this.copyTextureToTexture=function(b,D,X=null,k=null,H=0,Mt=0){let At,_t,Ct,Lt,Yt,Qt,Rt,le,we;const ve=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(X!==null)At=X.max.x-X.min.x,_t=X.max.y-X.min.y,Ct=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Yt=X.min.y,Qt=X.isBox3?X.min.z:0;else{const be=Math.pow(2,-H);At=Math.floor(ve.width*be),_t=Math.floor(ve.height*be),b.isDataArrayTexture?Ct=ve.depth:b.isData3DTexture?Ct=Math.floor(ve.depth*be):Ct=1,Lt=0,Yt=0,Qt=0}k!==null?(Rt=k.x,le=k.y,we=k.z):(Rt=0,le=0,we=0);const pe=mt.convert(D.format),Ne=mt.convert(D.type);let Tt;D.isData3DTexture?($.setTexture3D(D,0),Tt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?($.setTexture2DArray(D,0),Tt=I.TEXTURE_2D_ARRAY):($.setTexture2D(D,0),Tt=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const He=x.getParameter(I.UNPACK_ROW_LENGTH),se=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Ke=x.getParameter(I.UNPACK_SKIP_PIXELS),vn=x.getParameter(I.UNPACK_SKIP_ROWS),Vn=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),x.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const Ti=b.isDataArrayTexture||b.isData3DTexture,fe=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const be=V.get(b),Gn=V.get(D),ge=V.get(be.__renderTarget),Wn=V.get(Gn.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,ge.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Ai=0;Ai<Ct;Ai++)Ti&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(b).__webglTexture,H,Qt+Ai),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(D).__webglTexture,Mt,we+Ai)),I.blitFramebuffer(Lt,Yt,At,_t,Rt,le,At,_t,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||V.has(b)){const be=V.get(b),Gn=V.get(D);x.bindFramebuffer(I.READ_FRAMEBUFFER,F),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,R);for(let ge=0;ge<Ct;ge++)Ti?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.__webglTexture,H,Qt+ge):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,H),fe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gn.__webglTexture,Mt,we+ge):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gn.__webglTexture,Mt),H!==0?I.blitFramebuffer(Lt,Yt,At,_t,Rt,le,At,_t,I.COLOR_BUFFER_BIT,I.NEAREST):fe?I.copyTexSubImage3D(Tt,Mt,Rt,le,we+ge,Lt,Yt,At,_t):I.copyTexSubImage2D(Tt,Mt,Rt,le,Lt,Yt,At,_t);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else fe?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Tt,Mt,Rt,le,we,At,_t,Ct,pe,Ne,ve.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,Mt,Rt,le,we,At,_t,Ct,pe,ve.data):I.texSubImage3D(Tt,Mt,Rt,le,we,At,_t,Ct,pe,Ne,ve):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Mt,Rt,le,At,_t,pe,Ne,ve.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Mt,Rt,le,ve.width,ve.height,pe,ve.data):I.texSubImage2D(I.TEXTURE_2D,Mt,Rt,le,At,_t,pe,Ne,ve);x.pixelStorei(I.UNPACK_ROW_LENGTH,He),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,se),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ke),x.pixelStorei(I.UNPACK_SKIP_ROWS,vn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Vn),Mt===0&&D.generateMipmaps&&I.generateMipmap(Tt),x.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){W=0,G=0,J=null,x.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class f2 extends _h{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Cn;t.deleteAttribute("uv");const e=new Ae({side:We}),n=new Ae,i=new ld(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new de(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Ze(t,n,6),o=new Ce;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new de(t,Vi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new de(t,Vi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new de(t,Vi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new de(t,Vi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new de(t,Vi(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new de(t,Vi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Vi(s){return new id({color:0,emissive:16777215,emissiveIntensity:s})}class al{a;b;c;d;constructor(t){this.a=2654435769,this.b=608135816,this.c=3084996962,this.d=t>>>0;for(let e=0;e<15;e++)this.next()}next(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;let t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296}int(t,e){return t+Math.floor(this.next()*(e-t+1))}range(t,e){return t+this.next()*(e-t)}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t){let e=0;for(const i of t)e+=i;if(e<=0)return-1;let n=this.next()*e;for(let i=0;i<t.length;i++)if(n-=t[i],n<0)return i;return t.length-1}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this.next()*(e+1)),i=t[e];t[e]=t[n],t[n]=i}return t}}const gi=["hint","undo","slot","shuffle","grab"],$i={hint:2,slot:3,undo:4,shuffle:6,grab:9},wc={hint:30,undo:40,shuffle:50,slot:70,grab:80},Ec=2,Tc={hidden:7,fence:11,link:14,frozen:22,gate:31},jn=20;function Cs(s){return Math.floor((s-1)/jn)}function d2(s,t){return(s==="superhard"?35:s==="hard"?20:10)+t*3}function $h(s){if(s<=3)return"cube";const t=["coin","cube","hex","candy","diamond","cube","hex","coin","diamond","candy"],e=new al(s*40503+17),n=t[(s+e.int(0,2))%t.length];return s>4&&n===$h(s-1)?t[(t.indexOf(n)+1)%t.length]:n}function p2(s){return Object.keys(Tc).filter(t=>Tc[t]===s)}function m2(s){return gi.filter(t=>$i[t]===s)}const vs=new P;function je(s,t,e,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;vs.copy(t),vs[n]=0,vs.normalize();const c=.5*a/(a+o),h=1-vs.angleTo(s)/l;return Math.sign(vs[e])===1?h*c:o/(a+o)+c+c*(1-h)}class nn extends Cn{constructor(t=1,e=1,n=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,h=new P(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,_=new P,g=.5/a;for(let p=0,v=0;p<f.length;p+=3,v+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[v+0]=je(_,c,"z","y",r,n),d[v+1]=1-je(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[v+0]=1-je(_,c,"z","y",r,n),d[v+1]=1-je(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[v+0]=1-je(_,c,"x","z",r,t),d[v+1]=je(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[v+0]=1-je(_,c,"x","z",r,t),d[v+1]=1-je(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[v+0]=1-je(_,c,"x","y",r,t),d[v+1]=1-je(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[v+0]=je(_,c,"x","y",r,t),d[v+1]=1-je(_,c,"y","x",r,e);break}}static fromJSON(t){return new nn(t.width,t.height,t.depth,t.segments,t.radius)}}const Fo=.62;function Ua(s,t,e,n=0){const i=Fo/2,r=[[0,-i],[s-e*.6,-i],[s,-i+e*.6],[s,i-e],[s-e*.35,i-e*.2],[s-e,i],[0,i]].map(([a,o])=>new ot(a,o));return new il(r,t,n)}function Ac(s){const t=s.toNonIndexed();return s.dispose(),t.computeVertexNormals(),t}function Yh(s,t=!1){switch(s){case"coin":return Ua(.46,t?12:18,.08);case"candy":{const e=new ii(.5,t?12:16,t?8:10);return e.scale(.95,Fo,.95),e}case"hex":return Ac(Ua(.52,6,.1,Math.PI/6));case"diamond":return Ac(Ua(.56,4,.12));default:return new nn(.94,Fo,.94,1,.14)}}function Zh(s){const t={cube:.42,coin:.34,candy:.2,hex:.36,diamond:.16};return new Ae({roughness:t[s],metalness:s==="diamond"?.08:0,envMapIntensity:s==="diamond"||s==="candy"?1.35:.9})}const Fr=1.18,Ki=1.6,Or=1.52;function g2(s){return s.aspect>1.15?x2(s):v2(s)}function Br(s,t,e){return Array.from({length:s},(n,i)=>t+(i-(s-1)/2)*e)}function v2(s){const n=Math.min(9.6/s.w,8.6/s.h),i=n*s.w,r=n*s.h,a=.34,o=-i/2,l=-r,c={x:0,z:1.55},h=3.35,f=s.slots>5?Math.min(Ki,9.4/s.slots):Ki,u=Br(s.slots,0,f).map(v=>({x:v,z:h})),d=s.columns>5?9.4/s.columns:Ki,m=Br(s.columns,0,d),_=5.25,g=4,p=Math.max(i/2+a,u.length*f/2,s.columns*d/2)+.25;return{mode:"portrait",tilt:30*Math.PI/180,cell:n,picX0:o,picZ0:l,picW:i,picH:r,frame:a,nest:c,slot:u,slotSize:Math.min(Fr,f*.78),queueCol:m,queueZ0:_,queueRow:Or,queueRowsVisible:g,boxSize:Math.min(Fr,d*.78,f*.78),bounds:{minX:-p,maxX:p,minZ:l-a-.25,maxZ:_+(g-1)*Or+.9}}}function x2(s){const n=Math.min(11/s.w,10.4/s.h),i=n*s.w,r=n*s.h,a=.36,o=-6.2,l=3.9,c=o-i/2,h=l-r,f=5.6,u=s.slots>5?Math.min(Ki,9/s.slots):Ki,d=3.7,m=Br(s.slots,f,u).map(C=>({x:C,z:d})),_=s.columns>5?9/s.columns:Ki,g=Br(s.columns,f,_),p=d-1.85,v=5,y={x:o,z:l+1.45},M=p-(v-1)*Or-.8,E=Math.min(c-a,f-m.length*u/2)-.3,w=Math.max(f+m.length*u/2,f+s.columns*_/2)+.3;return{mode:"landscape",tilt:28*Math.PI/180,cell:n,picX0:c,picZ0:h,picW:i,picH:r,frame:a,nest:y,slot:m,slotSize:Math.min(Fr,u*.78),queueCol:g,queueZ0:p,queueRow:-Or,queueRowsVisible:v,boxSize:Math.min(Fr,_*.78,u*.78),bounds:{minX:E,maxX:w,minZ:Math.min(h-a,M)-.25,maxZ:Math.max(l+a,y.z+.9,d+.9)+.3}}}function Cc(s,t,e){return{x:s.picX0+(t+.5)*s.cell,z:s.picZ0+(e+.5)*s.cell}}function _2(s,t,e){return{x:s.queueCol[t],z:s.queueZ0+e*s.queueRow}}const Rc=.62,Pc=.06,M2=new P(0,0,1),S2=new Ut(1,1,1);function zr(s,t,e,n,i){const r=new as;return r.moveTo(s+i,t),r.lineTo(s+e-i,t),r.quadraticCurveTo(s+e,t,s+e,t+i),r.lineTo(s+e,t+n-i),r.quadraticCurveTo(s+e,t+n,s+e-i,t+n),r.lineTo(s+i,t+n),r.quadraticCurveTo(s,t+n,s,t+n-i),r.lineTo(s,t+i),r.quadraticCurveTo(s,t,s+i,t),r}function b2(s,t,e,n,i){const r=new Ro;return r.moveTo(s+i,t),r.lineTo(s+e-i,t),r.quadraticCurveTo(s+e,t,s+e,t+i),r.lineTo(s+e,t+n-i),r.quadraticCurveTo(s+e,t+n,s+e-i,t+n),r.lineTo(s+i,t+n),r.quadraticCurveTo(s,t+n,s,t+n-i),r.lineTo(s,t+i),r.quadraticCurveTo(s,t,s+i,t),r}class y2{group=new Ie;cubes;w;h;instOf;present;colors;cellColor;layoutRef;frameMesh=null;floorMesh=null;anims=[];clock=0;hl=new Set;m4=new ee;q=new ze;v=new P;sc=new P;frameMat;floorMat;fenceDefs;fences=new Ie;picketGeo;postGeo=new nn(.14,.5,.14,2,.03);capGeo=new ii(.085,16,12);railGeo=new Cn(1,.055,.05);handGeo=new Cn(1,.035,.14);fenceMat=new Ae({color:"#c0814a",roughness:.62});postMat=new Ae({color:"#8f5a31",roughness:.66});capMat=new Ae({color:"#ff9f1a",roughness:.3,emissive:"#ff8a00",emissiveIntensity:.25});constructor(t,e,n="#efd3a0",i="cube"){this.w=t.w,this.h=t.h,this.fenceDefs=t.s.fences;const r=new as;r.moveTo(-.048,0),r.lineTo(.048,0),r.lineTo(.048,.33),r.lineTo(0,.4),r.lineTo(-.048,.33),r.closePath(),this.picketGeo=new bi(r,{depth:.05,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:1}),this.picketGeo.translate(0,0,-.025),this.group.add(this.fences);const a=t.w*t.h;this.instOf=new Int32Array(a).fill(-1),this.cellColor=new Int16Array(a);const o=[];for(let l=0;l<a;l++)this.cellColor[l]=t.cellColor(l),t.cellColor(l)>=0&&(this.instOf[l]=o.length,o.push(l));this.present=new Uint8Array(a),this.colors=e.map(l=>new Ut(l)),this.cubes=new Ze(Yh(i),Zh(i),Math.max(1,o.length)),this.cubes.castShadow=!0,this.cubes.receiveShadow=!0,this.cubes.count=o.length,o.forEach((l,c)=>this.cubes.setColorAt(c,this.colors[this.cellColor[l]])),this.cubes.instanceColor&&(this.cubes.instanceColor.needsUpdate=!0),this.group.add(this.cubes),this.frameMat=new Ae({color:n,roughness:.62,metalness:0}),this.floorMat=new Ae({color:"#fbf1dc",roughness:.9,metalness:0});for(let l=0;l<a;l++)this.present[l]=t.cellColor(l)>=0&&!t.eaten[l]?1:0}setLayout(t){this.layoutRef=t,this.buildFrame(t),this.buildFences(t);for(let e=0;e<this.w*this.h;e++)this.instOf[e]>=0&&this.writeMatrix(e,this.present[e]?1:0,0);this.cubes.instanceMatrix.needsUpdate=!0,this.cubes.computeBoundingSphere()}get layout(){return this.layoutRef}buildFences(t){for(const v of this.fences.children)v instanceof Ze&&v.dispose();if(this.fences.clear(),!this.fenceDefs.length)return;const e=t.cell*.35,n={x0:t.picX0-e-t.frame/2,x1:t.picX0+t.picW+e+t.frame/2,z0:t.picZ0-e-t.frame/2,z1:t.picZ0+t.picH+e+t.frame/2},i=.1+Math.max(.06,Math.min(.2,t.cell*.32)),r=[];for(const v of this.fenceDefs){const y=v.side==="top"||v.side==="bottom",M=y?this.w:this.h,E=Math.max(0,v.from),w=Math.min(M,v.to);if(w<=E)continue;const C=y?t.picX0:t.picZ0,S=y?n.x0:n.z0,T=y?n.x1:n.z1;r.push({horiz:y,fixed:v.side==="top"?n.z0:v.side==="bottom"?n.z1:v.side==="left"?n.x0:n.x1,a:E===0?S:C+E*t.cell,b:w===M?T:C+w*t.cell,gateA:E>0,gateB:w<M})}const a=[],o=[],l=[],c=[],h=[],f=new ee,u=new ze,d=new P,m=new P(1,1,1),_=(v,y,M)=>v.horiz?d.set(y,M,v.fixed):d.set(v.fixed,M,y),g=.135;for(const v of r){u.setFromAxisAngle(Ce.DEFAULT_UP,v.horiz?0:Math.PI/2);const y=v.b-v.a,M=Math.max(1,Math.round(y/g));for(let E=0;E<=M;E++){const w=v.a+y*E/M,C=.94+E*7919%13/13*.1;m.set(1,C,1),a.push(f.compose(_(v,w,i),u,m).clone())}m.set(1,1,1),m.set(y,1,1),c.push(f.compose(_(v,(v.a+v.b)/2,i+.1),u,m).clone()),h.push(f.compose(_(v,(v.a+v.b)/2,i+.3),u,m).clone()),m.set(1,1,1);for(const[E,w]of[[v.a,v.gateA],[v.b,v.gateB]])m.set(1,w?1.25:1,1),o.push(f.compose(_(v,E,i+(w?.31:.25)),u,m).clone()),m.set(1,1,1),w&&l.push(f.compose(_(v,E,i+.68),u,m).clone())}const p=(v,y,M)=>{if(!M.length)return;const E=new Ze(v,y,M.length);M.forEach((w,C)=>E.setMatrixAt(C,w)),E.castShadow=!0,E.receiveShadow=!0,this.fences.add(E)};p(this.picketGeo,this.fenceMat,a),p(this.railGeo,this.postMat,c),p(this.handGeo,this.postMat,h),p(this.postGeo,this.postMat,o),p(this.capGeo,this.capMat,l)}buildFrame(t){this.frameMesh&&(this.group.remove(this.frameMesh),this.frameMesh.geometry.dispose()),this.floorMesh&&(this.group.remove(this.floorMesh),this.floorMesh.geometry.dispose(),this.floorMat.map?.dispose());const e=t.cell*.35,n=t.picX0-e,i=t.picZ0-e,r=t.picW+e*2,a=t.picH+e*2,o=t.frame,l=zr(n-o,-(i+a+o),r+o*2,a+o*2,o*1.6);l.holes.push(b2(n,-(i+a),r,a,o*.7));const c=Math.max(.06,Math.min(.2,t.cell*.32)),h=new bi(l,{depth:c,bevelEnabled:!0,bevelThickness:.05,bevelSize:.07,bevelSegments:3,curveSegments:10});h.rotateX(-Math.PI/2),h.translate(0,.05,0),this.frameMesh=new de(h,this.frameMat),this.frameMesh.castShadow=!0,this.frameMesh.receiveShadow=!0,this.group.add(this.frameMesh);const f=new ts(zr(n-.02,-(i+a+.02),r+.04,a+.04,o*.7),8);f.rotateX(-Math.PI/2);const u=f.attributes.uv,d=f.attributes.position;for(let m=0;m<d.count;m++)u.setXY(m,(d.getX(m)-t.picX0)/t.picW,1-(d.getZ(m)-t.picZ0)/t.picH);this.floorMat.map=this.floorTexture(),this.floorMat.needsUpdate=!0,this.floorMesh=new de(f,this.floorMat),this.floorMesh.position.y=.035,this.floorMesh.receiveShadow=!0,this.group.add(this.floorMesh)}floorTexture(){const t=Math.max(8,Math.min(32,Math.floor(1024/Math.max(this.w,this.h)))),e=document.createElement("canvas");e.width=this.w*t,e.height=this.h*t;const n=e.getContext("2d");n.fillStyle="#f7ead0",n.fillRect(0,0,e.width,e.height);for(let r=0;r<this.h;r++)for(let a=0;a<this.w;a++){const o=r*this.w+a;if(this.cellColor[o]<0)continue;const l=a*t+t/2,c=r*t+t/2,h=n.createRadialGradient(l,c-t*.1,t*.05,l,c,t*.55);h.addColorStop(0,"rgba(214,186,140,0.55)"),h.addColorStop(1,"rgba(214,186,140,0)"),n.fillStyle=h,n.fillRect(a*t,r*t,t,t)}const i=new Ei(e);return i.colorSpace=ye,i.anisotropy=4,i}writeMatrix(t,e,n,i=0){const r=this.instOf[t];if(r<0)return;const a=this.layoutRef,o=t%this.w,l=(t-o)/this.w,c=Cc(a,o,l);this.v.set(c.x,Pc+Rc*a.cell/2+n,c.z),this.q.setFromAxisAngle(M2,i);const h=a.cell*e;this.sc.set(h,h,h),this.m4.compose(this.v,this.q,this.sc),this.cubes.setMatrixAt(r,this.m4)}isPresent(t){return this.present[t]===1}cubeWorld(t,e){const n=this.layoutRef,i=t%this.w,r=(t-i)/this.w,a=Cc(n,i,r);return e.set(a.x,Pc+Rc*n.cell,a.z)}cubeColor(t){return this.colors[this.cellColor[t]]}highlight(t){const e=new Set(t??[]),n=new Ut;for(const i of this.hl){if(e.has(i))continue;const r=this.instOf[i];this.cubes.setColorAt(r,this.colors[this.cellColor[i]]),this.present[i]&&this.writeMatrix(i,1,0)}for(const i of e){if(this.hl.has(i)||!this.present[i])continue;const r=this.instOf[i];this.cubes.setColorAt(r,n.copy(this.colors[this.cellColor[i]]).lerp(S2,.45)),this.writeMatrix(i,1.08,this.layoutRef.cell*.3)}this.hl=e,this.cubes.instanceColor&&(this.cubes.instanceColor.needsUpdate=!0),this.cubes.instanceMatrix.needsUpdate=!0}remove(t){this.present[t]&&(this.present[t]=0,this.hl.delete(t)&&this.cubes.setColorAt(this.instOf[t],this.colors[this.cellColor[t]]),this.anims=this.anims.filter(e=>e.cell!==t),this.writeMatrix(t,0,0),this.cubes.instanceMatrix.needsUpdate=!0)}wobble(t){this.present[t]&&this.anims.push({cell:t,t:0,dur:.35,kind:"wobble",delay:0})}syncFrom(t,e=!0){for(let n=0;n<this.w*this.h;n++){if(this.instOf[n]<0)continue;const i=t.eaten[n]?0:1;i!==this.present[n]&&(this.present[n]=i,i&&e?this.anims.push({cell:n,t:0,dur:.45,kind:"drop",delay:Math.random()*.35}):this.writeMatrix(n,i,0))}this.cubes.instanceMatrix.needsUpdate=!0}rebuild(){this.layoutRef;let t=0;for(let e=0;e<this.w*this.h;e++){if(this.instOf[e]<0)continue;this.present[e]=1;const n=e%this.w,i=(e-n)/this.w,r=(this.h-1-i)*.045+Math.abs(n-this.w/2)*.012+Math.random()*.05;t=Math.max(t,r),this.anims.push({cell:e,t:0,dur:.5,kind:"drop",delay:r}),this.writeMatrix(e,0,0)}return this.cubes.instanceMatrix.needsUpdate=!0,t+.5}update(t){if(this.clock+=t,!this.anims.length)return;const e=[];for(const n of this.anims){if(n.delay>0){n.delay-=t,e.push(n);continue}n.t+=t;const i=Math.min(1,n.t/n.dur);if(this.present[n.cell]){if(n.kind==="wobble"){const r=(1-i)*.22;this.writeMatrix(n.cell,1,0,Math.sin(i*Math.PI*6)*r)}else{const r=i<.7?i/.7:1,a=(1-r)*(1-r)*2.2*this.layoutRef.cell*4,o=i<.7?1:1+Math.sin((i-.7)/.3*Math.PI)*.12;this.writeMatrix(n.cell,Math.min(1,.3+r*.7)*(2-o),a)}i<1?e.push(n):this.writeMatrix(n.cell,1,0)}}this.anims=e,this.cubes.instanceMatrix.needsUpdate=!0}dispose(){this.cubes.geometry.dispose(),this.cubes.material.dispose(),this.frameMesh?.geometry.dispose(),this.floorMesh?.geometry.dispose(),this.floorMat.map?.dispose(),this.frameMat.dispose(),this.floorMat.dispose();for(const t of this.fences.children)t instanceof Ze&&t.dispose();for(const t of[this.picketGeo,this.postGeo,this.capGeo,this.railGeo,this.handGeo])t.dispose();for(const t of[this.fenceMat,this.postMat,this.capMat])t.dispose()}}const Lc=["bottom","top","left","right"];function Jh(s){const t=new Int16Array(s.w*s.h);for(let e=0;e<t.length;e++){const n=s.cells.charCodeAt(e);t[e]=n===46?-1:parseInt(s.cells[e],36)}return t}function w2(s){return s>=10&&s%10===0?"superhard":s>=5&&s%5===0?"hard":"normal"}const tn={Queue:0,Slot:1,Done:2},E2=14,T2=28,hi=1073741823,fr=2;class kr{s;eaten;claimed;air;reach;dist;rd;heaps;heapSize;reachCount;remaining;left;pending;roundNo;boxHidden;boxWhere;boxCol;columns;slots;taps;status;hashA;hashB;constructor(t){this.s=t,this.eaten=new Uint8Array(0),this.claimed=new Uint8Array(0),this.air=new Uint8Array(0),this.reach=new Uint8Array(0),this.dist=new Int32Array(0),this.rd=new Int32Array(0),this.heaps=[],this.heapSize=new Int32Array(0),this.reachCount=new Int32Array(0),this.remaining=new Int32Array(0),this.left=0,this.pending=[],this.roundNo=0,this.boxHidden=new Uint8Array(0),this.boxWhere=new Uint8Array(0),this.boxCol=new Int16Array(0),this.columns=[],this.slots=[],this.taps=0,this.status="playing",this.hashA=0,this.hashB=0}static fromLevel(t){const e=t.picture,n=Jh(e),i=e.w,r=e.h,a=e.palette.length,o=i*r,l=new Int32Array(o),c=new Int32Array(o);let h=625341585;for(let R=0;R<o;R++)h^=h<<13,h^=h>>>17,h^=h<<5,l[R]=h,h^=h<<13,h^=h>>>17,h^=h<<5,c[R]=h;const f=t.fences??[],u=Lc.map(R=>{const W=R==="bottom"||R==="top"?i:r,G=new Uint8Array(W).fill(1);for(const J of f)if(J.side===R)for(let q=Math.max(0,J.from);q<Math.min(W,J.to);q++)G[q]=0;return G}),d=u.map(R=>R.includes(1)),m=new Int32Array(o).fill(hi),_=new Uint8Array(o),g=(i-1)/2,[p,v,y,M]=u,E=(R,W,G)=>{m[R]=Math.min(m[R],Math.round(W*fr)),_[R]|=G};for(let R=0;R<i;R++)p[R]&&E((r-1)*i+R,Math.abs(R-g),1),v[R]&&E(R,g+r+Math.min(R,i-1-R),2);for(let R=0;R<r;R++)y[R]&&E(R*i,g+(r-1-R),4),M[R]&&E(R*i+i-1,g+(r-1-R),8);const w=new Int32Array(a);for(let R=0;R<o;R++)n[R]>=0&&w[n[R]]++;const C=t.boxes.reduce((R,W)=>Math.max(R,W.id),-1)+1,S=new Int16Array(C).fill(-1),T=new Int16Array(C),L=new Int16Array(C).fill(-1),U=new Int16Array(C),z=new Map;for(const R of t.boxes)if(S[R.id]=R.color,T[R.id]=R.count,U[R.id]=R.frozen??0,R.link!==void 0&&R.link>=0){L[R.id]=R.link;const W=z.get(R.link);W?W.push(R.id):z.set(R.link,[R.id])}const O=new kr({w:i,h:r,colors:a,cell:n,zobA:l,zobB:c,entry:m,maxDim:Math.max(i,r),edge:_,colorCount:w,boxColor:S,boxCount:T,boxLink:L,boxThaw:U,groups:z,fences:f,open:d});O.eaten=new Uint8Array(o),O.claimed=new Uint8Array(o),O.air=new Uint8Array(o),O.reach=new Uint8Array(o),O.dist=new Int32Array(o).fill(hi),O.rd=new Int32Array(o).fill(hi),O.heaps=Array.from({length:a},(R,W)=>new Int32Array(Math.max(8,w[W]*2))),O.heapSize=new Int32Array(a),O.reachCount=new Int32Array(a),O.remaining=Int32Array.from(w),O.left=w.reduce((R,W)=>R+W,0);const F=[];for(let R=0;R<o;R++)m[R]>=hi||(n[R]<0?(O.air[R]=1,O.dist[R]=m[R],F.push(R)):O.offer(R,m[R]));O.spread(F),O.boxHidden=new Uint8Array(C),O.boxWhere=new Uint8Array(C).fill(tn.Done),O.boxCol=new Int16Array(C).fill(-1);for(const R of t.boxes)O.boxHidden[R.id]=R.hidden?1:0;return O.columns=t.columns.map(R=>R.slice()),O.columns.forEach((R,W)=>{for(const G of R)O.boxWhere[G]=tn.Queue,O.boxCol[G]=W;R.length&&(O.boxHidden[R[0]]=0)}),O.slots=new Array(t.slots).fill(null),O}clone(){const t=new kr(this.s);return t.eaten=this.eaten.slice(),t.claimed=this.claimed.slice(),t.air=this.air.slice(),t.reach=this.reach.slice(),t.dist=this.dist.slice(),t.rd=this.rd.slice(),t.heaps=this.heaps.map((e,n)=>{const i=this.heapSize[n],r=new Int32Array(Math.max(8,i+(i>>1)));return r.set(e.subarray(0,i)),r}),t.heapSize=this.heapSize.slice(),t.reachCount=this.reachCount.slice(),t.remaining=this.remaining.slice(),t.left=this.left,t.pending=this.pending.slice(),t.roundNo=this.roundNo,t.boxHidden=this.boxHidden.slice(),t.boxWhere=this.boxWhere.slice(),t.boxCol=this.boxCol.slice(),t.columns=this.columns.map(e=>e.slice()),t.slots=this.slots.map(e=>e?{box:e.box,color:e.color,left:e.left}:null),t.taps=this.taps,t.status=this.status,t.hashA=this.hashA,t.hashB=this.hashB,t}get w(){return this.s.w}get h(){return this.s.h}cellColor(t){return this.s.cell[t]}isFree(t){return this.s.cell[t]<0||this.eaten[t]===1}edgeMask(t){return this.s.edge[t]}isOpen(t){return this.s.open[Lc.indexOf(t)]}offer(t,e){if(e>=this.rd[t])return;const n=this.s.cell[t];this.reach[t]||(this.reach[t]=1,this.claimed[t]||this.reachCount[n]++),this.rd[t]=e;let i=this.heaps[n],r=this.heapSize[n]++;if(r>=i.length){const o=new Int32Array(i.length*2);o.set(i),this.heaps[n]=i=o}const a=e*4096+t;for(;r>0;){const o=r-1>>1;if(i[o]<=a)break;i[r]=i[o],r=o}i[r]=a}heapPop(t){const e=this.heaps[t],n=--this.heapSize[t];if(n<=0)return;const i=e[n];let r=0;for(;;){const a=r*2+1;if(a>=n)break;const o=a+1,l=o<n&&e[o]<e[a]?o:a;if(e[l]>=i)break;e[r]=e[l],r=l}e[r]=i}spread(t){const{w:e,h:n,cell:i}=this.s,r=[];let a=hi;for(const o of t){const l=this.dist[o];(r[l]??=[]).push(o),l<a&&(a=l)}for(let o=a;o<r.length;o++){const l=r[o];if(l)for(let c=0;c<l.length;c++){const h=l[c];if(this.dist[h]!==o)continue;const f=h%e,u=(h-f)/e;for(let d=0;d<4;d++){let m;if(d===0){if(u+1>=n)continue;m=h+e}else if(d===1){if(u===0)continue;m=h-e}else if(d===2){if(f===0)continue;m=h-1}else{if(f+1>=e)continue;m=h+1}const _=o+fr;i[m]<0||this.eaten[m]?_<this.dist[m]&&(this.air[m]=1,this.dist[m]=_,(r[_]??=[]).push(m)):this.offer(m,_)}}}}findTarget(t){const e=this.heaps[t];for(;this.heapSize[t]>0;){const n=e[0],i=n&4095;if(!this.eaten[i]&&!this.claimed[i]&&this.rd[i]===(n-i)/4096)return i;this.heapPop(t)}return-1}walkTo(t){return this.rd[t]>=hi?1/0:this.rd[t]/fr}exposedCounts(t){const e=t??new Int32Array(this.s.colors);return e.set(this.reachCount),e}exposedCells(){const t=[];for(let e=0;e<this.reach.length;e++)this.reach[e]&&!this.claimed[e]&&t.push(e);return t}tripTo(t){return E2+Math.min(240,Math.round(T2*this.rd[t]/(fr*this.s.maxDim)))}claim(t){this.claimed[t]=1,this.reach[t]&&this.reachCount[this.s.cell[t]]--,this.pending.push((this.roundNo+this.tripTo(t))*4096+t);let e=this.pending.length-1;const n=this.pending;for(;e>0;){const i=e-1>>1;if(n[i]<=n[e])break;const r=n[e];n[e]=n[i],n[i]=r,e=i}}popPending(){const t=this.pending,e=t[0],n=t.pop();if(t.length){t[0]=n;let i=0;for(;;){const r=i*2+1,a=r+1;let o=i;if(r<t.length&&t[r]<t[o]&&(o=r),a<t.length&&t[a]<t[o]&&(o=a),o===i)break;const l=t[i];t[i]=t[o],t[o]=l,i=o}}return e}eatCell(t){const{cell:e,zobA:n,zobB:i}=this.s;if(this.eaten[t]||e[t]<0)return;this.eaten[t]=1;const r=e[t];this.reach[t]&&!this.claimed[t]&&this.reachCount[r]--,this.reach[t]=0,this.claimed[t]=0,this.remaining[r]--,this.left--,this.hashA^=n[t],this.hashB^=i[t];const a=this.rd[t];this.rd[t]=hi,a<this.dist[t]&&(this.air[t]=1,this.dist[t]=a,this.spread([t]))}flushPending(t){for(;this.pending.length;){const e=this.popPending()%4096;this.eatCell(e),t?.push({t:"pickup",cell:e})}this.left===0&&this.status==="playing"&&(this.status="won",t?.push({t:"won"}))}boxColor(t){return this.s.boxColor[t]}boxCount(t){return this.s.boxCount[t]}boxLink(t){return this.s.boxLink[t]}boxThawAt(t){return this.s.boxThaw[t]}get boxIds(){return this.s.boxColor.length}isFrozen(t){return this.taps<this.s.boxThaw[t]}frozenLeft(t){return Math.max(0,this.s.boxThaw[t]-this.taps)}groupOf(t){const e=this.s.boxLink[t];return e<0?[t]:this.s.groups.get(e)??[t]}freeSlots(){let t=0;for(const e of this.slots)e||t++;return t}firstFreeSlot(){for(let t=0;t<this.slots.length;t++)if(!this.slots[t])return t;return-1}isAvailable(t){if(this.boxWhere[t]!==tn.Queue)return!1;const e=this.columns[this.boxCol[t]],n=this.s.boxLink[t];for(const i of e){if(i===t)return!0;if(n<0||this.s.boxLink[i]!==n)return!1}return!1}canTake(t){if(this.status!=="playing")return!1;const e=this.groupOf(t);if(e.length>this.freeSlots())return!1;for(const n of e)if(this.boxWhere[n]!==tn.Queue||this.isFrozen(n)||!this.isAvailable(n))return!1;return!0}whyNot(t){if(this.boxWhere[t]!==tn.Queue)return"gone";const e=this.groupOf(t);for(const n of e)if(this.isFrozen(n))return"frozen";if(!this.isAvailable(t))return"blocked";for(const n of e)if(!this.isAvailable(n))return"link";return e.length>this.freeSlots()?"slots":"ok"}legalMoves(){const t=[];if(this.status!=="playing"||this.freeSlots()===0)return t;let e=null;for(const n of this.columns){if(!n.length)continue;const i=n[0],r=this.s.boxLink[i];if(r>=0){if(e?.includes(r))continue;(e??=[]).push(r)}this.canTake(i)&&t.push(i)}return t}take(t,e){return this.canTake(t)?(this.moveToSlots(this.groupOf(t),e,!1),!0):!1}grab(t,e){if(this.status!=="playing"||this.boxWhere[t]!==tn.Queue)return!1;const n=this.groupOf(t);if(n.length>this.freeSlots())return!1;for(const i of n)if(this.boxWhere[i]!==tn.Queue||this.isFrozen(i))return!1;return this.moveToSlots(n,e,!0),!0}putVirtual(t,e){const n=this.firstFreeSlot();return n<0?!1:(this.slots[n]={box:-1,color:t,left:e},!0)}moveToSlots(t,e,n){for(const i of t){const r=this.boxCol[i],a=this.columns[r],o=a.indexOf(i);a.splice(o,1);const l=this.firstFreeSlot();this.slots[l]={box:i,color:this.s.boxColor[i],left:this.s.boxCount[i]},this.boxWhere[i]=tn.Slot,this.boxCol[i]=-1,this.boxHidden[i]&&(this.boxHidden[i]=0,e?.push({t:"reveal",box:i})),e?.push({t:"take",box:i,slot:l,col:r,index:o,grabbed:n||void 0})}this.taps++,this.afterQueueChange(e)}afterQueueChange(t){for(const e of this.columns)e.length&&this.boxHidden[e[0]]&&(this.boxHidden[e[0]]=0,t?.push({t:"reveal",box:e[0]}));if(t)for(const e of this.columns)for(const n of e)this.s.boxThaw[n]===this.taps&&t.push({t:"thaw",box:n})}addSlot(){this.slots.push(null),this.status==="stuck"&&(this.status="playing")}shuffle(t,e){const n=[],i=[];this.columns.forEach((r,a)=>r.forEach((o,l)=>{this.s.boxLink[o]<0&&!this.isFrozen(o)&&(n.push([a,l]),i.push(o))})),t.shuffle(i),n.forEach(([r,a],o)=>{this.columns[r][a]=i[o],this.boxCol[i[o]]=r}),this.status==="stuck"&&(this.status="playing"),this.afterQueueChange(e)}round(t){if(this.status!=="playing")return 0;let e=0;for(;this.pending.length&&Math.floor(this.pending[0]/4096)<=this.roundNo;){const n=this.popPending()%4096;this.eatCell(n),e++,t?.push({t:"pickup",cell:n})}for(let n=0;n<this.slots.length;n++){const i=this.slots[n];if(!i)continue;const r=this.findTarget(i.color);r<0||(this.claim(r),i.left--,e++,t?.push({t:"ant",slot:n,box:i.box,cell:r,color:i.color,left:i.left,due:this.roundNo+this.tripTo(r)}),i.left<=0&&(this.slots[n]=null,i.box>=0&&(this.boxWhere[i.box]=tn.Done),t?.push({t:"boxDone",slot:n,box:i.box})))}return this.roundNo++,this.left===0&&this.status==="playing"?(this.status="won",t?.push({t:"won"}),e):e+this.pending.length}isQuiet(){if(this.pending.length)return!1;for(const t of this.slots)if(t&&this.findTarget(t.color)>=0)return!1;return!0}settle(t){for(;this.status==="playing"&&this.round(t)>0;);this.checkStuck(t)}checkStuck(t){return this.status!=="playing"?this.status==="stuck":this.left>0&&this.isQuiet()&&this.legalMoves().length===0?(this.status="stuck",t?.push({t:"stuck"}),!0):!1}unstick(){this.status==="stuck"&&(this.status="playing")}key(){let t="";for(const e of this.columns)t+=e.length+",";t+="|";for(const e of this.slots)t+=e?e.box+":"+e.left+",":"-,";return t+"|"+this.hashA+","+this.hashB+"|"+this.taps+"|"+this.pending.length}queueSize(){let t=0;for(const e of this.columns)t+=e.length;return t}}const Oo='"Nunito Variable", "Nunito", system-ui, sans-serif';async function A2(){try{await Promise.all([document.fonts.load(`900 64px ${Oo}`),document.fonts.load(`800 32px ${Oo}`)])}catch{}}class C2{canvas;texture;ctx;last="";constructor(t=128){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.texture=new Ei(this.canvas),this.texture.colorSpace=ye,this.texture.anisotropy=4}draw(t,e={}){const n=t+(e.fill??"")+(e.stroke??"")+(e.shadow??"")+(e.scale??1);if(n===this.last)return;this.last=n;const{ctx:i,canvas:r}=this,a=r.width;if(i.clearRect(0,0,a,a),!t){this.texture.needsUpdate=!0;return}const o=t.length,l=a*(o>=3?.42:o===2?.52:.6)*(e.scale??1);i.font=`900 ${l}px ${Oo}`,i.textAlign="center",i.textBaseline="middle";const c=a*.53;i.lineJoin="round",i.fillStyle=e.shadow??"rgba(20, 12, 30, 0.35)",i.fillText(t,a/2,c+l*.07),i.lineWidth=l*.09,i.strokeStyle=e.stroke??"rgba(38, 28, 60, 0.85)",i.strokeText(t,a/2,c),i.fillStyle=e.fill??"#ffffff",i.fillText(t,a/2,c),this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function ol(s="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=64){const n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d"),r=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,s),r.addColorStop(1,t),i.fillStyle=r,i.fillRect(0,0,e,e);const a=new Ei(n);return a.colorSpace=ye,a}function Kh(s=64){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=s/2,i=e.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.moveTo(n,0),e.quadraticCurveTo(n,n,s,n),e.quadraticCurveTo(n,n,n,s),e.quadraticCurveTo(n,n,0,n),e.quadraticCurveTo(n,n,n,0),e.fill();const r=new Ei(t);return r.colorSpace=ye,r}function R2(s=128){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");e.fillStyle="#8f8aa3",e.fillRect(0,0,s,s),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=s*.06;for(let i=-s;i<s*2;i+=s*.22)e.beginPath(),e.moveTo(i,0),e.lineTo(i+s,s),e.stroke();const n=new Ei(t);return n.colorSpace=ye,n}const Jn=.62,Ic=new Ut("#9b94b3"),P2=new Ut("#8f8a7c"),Dc=14,Uc=new P(1,0,0);class L2{group=new Ie;boxes=new Map;links=[];boxGeo=new nn(1,Jn,1,3,.2);iceGeo=new nn(1.12,Jn*1.25,1.12,2,.16);labelGeo=new Je(1,1);iceMat=new Ae({color:"#cfefff",transparent:!0,opacity:.62,roughness:.08,metalness:.05,envMapIntensity:1.6,depthWrite:!1});linkMat=new Ae({color:"#e0b04a",roughness:.28,metalness:.85,envMapIntensity:1.4});linkGeo=new sl(.075,.024,8,18);lq=new ze;lq2=new ze;lm=new ee;ls=new P;lp=new P;ldir=new P;mysteryTex=R2();tray=null;trayMat=new Ae({color:"#efd3a0",roughness:.62});padMat=new Ae({color:"#d9b67c",roughness:.85});layout;sim;colors;tmp=new P;tmp2=new P;slotPulse=0;constructor(t,e){this.sim=t,this.colors=e.map(i=>new Ut(i));for(let i=0;i<t.boxIds;i++)t.boxColor(i)<0||this.boxes.set(i,this.makeBox(i));const n=new Set;for(let i=0;i<t.boxIds;i++){const r=t.boxLink(i);if(r<0||n.has(r))continue;n.add(r);const a=t.groupOf(i);for(let o=0;o+1<a.length;o++){const l=new Ze(this.linkGeo,this.linkMat,Dc);l.castShadow=!0,l.frustumCulled=!1,this.group.add(l),this.links.push({a:a[o],b:a[o+1],chain:l})}}}makeBox(t){const e=new Ie,n=this.colors[this.sim.boxColor(t)],i=new Ae({color:n,roughness:.38,metalness:0,envMapIntensity:1}),r=new de(this.boxGeo,i);r.castShadow=!0,r.receiveShadow=!0,r.position.y=Jn/2,r.userData.boxId=t,e.add(r);const a=new C2(128),o=new Ae({map:a.texture,transparent:!0,depthWrite:!1,roughness:.45,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2}),l=new de(this.labelGeo,o);l.renderOrder=5,e.add(l);let c=null;return this.sim.boxThawAt(t)>0&&(c=new de(this.iceGeo,this.iceMat),c.position.y=Jn*1.25/2-.02,c.renderOrder=4,e.add(c)),this.group.add(e),{id:t,group:e,body:r,mat:i,label:a,labelMesh:l,ice:c,color:n,hiddenShown:!1,where:"queue",from:new P,to:new P,t:1,dur:.001,arc:0,shake:0,flip:0,pop:0,bump:0,hint:0,fade:1,row:0}}setSim(t){this.sim=t}setLayout(t){this.layout=t,this.buildTray(t);for(const e of this.boxes.values())e.labelMesh.rotation.set(-Math.PI/2,0,0),e.labelMesh.scale.setScalar(.92);this.syncFromSim(!1)}buildTray(t){this.tray&&(this.group.remove(this.tray),this.tray.traverse(u=>u.geometry?.dispose()));const e=new Ie,n=t.slot.length,i=n>1?t.slot[1].x-t.slot[0].x:1.6,r=(t.slot[0].x+t.slot[n-1].x)/2,a=t.slot[0].z,o=i*(n-1)+t.slotSize+.55,l=t.slotSize+.55,c=zr(r-o/2,-(a+l/2),o,l,.4),h=new bi(c,{depth:.12,bevelEnabled:!0,bevelThickness:.05,bevelSize:.06,bevelSegments:3,curveSegments:8});h.rotateX(-Math.PI/2);const f=new de(h,this.trayMat);f.receiveShadow=!0,f.castShadow=!0,e.add(f);for(const u of t.slot){const d=new de(new ts(zr(u.x-t.slotSize/2-.04,-(u.z+t.slotSize/2+.04),t.slotSize+.08,t.slotSize+.08,.22),6),this.padMat);d.geometry.rotateX(-Math.PI/2),d.position.y=.175,d.receiveShadow=!0,e.add(d)}this.tray=e,this.group.add(e)}targetOf(t,e){const n=this.sim.boxWhere[t];if(n===tn.Queue){const i=this.sim.boxCol[t],r=this.sim.columns[i].indexOf(t),a=_2(this.layout,i,r);return e.set(a.x,0,a.z),{where:"queue",row:r}}if(n===tn.Slot){const i=this.sim.slots.findIndex(a=>a?.box===t),r=this.layout.slot[Math.max(0,Math.min(this.layout.slot.length-1,i))];return e.set(r.x,.17,r.z),{where:"slot",row:0}}return{where:"gone",row:0}}syncFromSim(t=!0){for(const e of this.boxes.values()){const{where:n,row:i}=this.targetOf(e.id,this.tmp),r=e.where==="gone";if(n==="gone"){e.where!=="gone"&&(e.where="gone",t?e.pop=Math.max(e.pop,1e-4):e.group.visible=!1);continue}r&&(e.group.visible=!0,e.pop=0);const a=!e.to.equals(this.tmp)||e.where!==n;if(e.row=i,a){e.from.copy(t?e.group.position:this.tmp),e.to.copy(this.tmp),e.t=0;const o=n==="slot"&&e.where==="queue";e.dur=t?o?.42:.26:1e-4,e.arc=o?1.4:0,t||e.group.position.copy(this.tmp)}e.where=n}this.refreshLabels()}refreshLabels(){for(const t of this.boxes.values())this.refreshLabel(t)}refreshLabel(t){const e=this.sim.boxHidden[t.id]===1,n=this.sim.isFrozen(t.id);if(e)t.mat.color.copy(Ic),t.mat.map=this.mysteryTex,t.mat.needsUpdate=t.hiddenShown===!1,t.hiddenShown=!0,t.label.draw("?",Fc(Ic));else if(t.hiddenShown&&(t.hiddenShown=!1,t.mat.map=null,t.mat.needsUpdate=!0,t.flip=1),t.mat.color.copy(t.color),n)t.label.draw(String(this.sim.frozenLeft(t.id)),{fill:"#eefaff",stroke:"#3d7fae",shadow:"rgba(30,70,110,0.4)"});else{const i=this.sim.slots.find(a=>a?.box===t.id),r=i?i.left:this.sim.boxWhere[t.id]===tn.Done?0:this.sim.boxCount(t.id);t.label.draw(String(r),Fc(t.color))}t.ice&&!n&&t.ice.visible&&(t.ice.visible=!1)}pick(t){const e=[];for(const i of this.boxes.values())i.where==="queue"&&i.group.visible&&i.fade>.2&&e.push(i.body);const n=t.intersectObjects(e,!1)[0];return n?n.object.userData.boxId:null}shake(t){const e=this.boxes.get(t);e&&(e.shake=.45)}bump(t){const e=this.boxes.get(t);e&&(e.bump=.25)}setHint(t){for(const e of this.boxes.values())e.hint=e.id===t?Math.max(e.hint,.001):0}pulseSlots(){this.slotPulse=1}boxTop(t,e){const n=this.boxes.get(t);if(!n)return e.set(0,0,0);const i=n.t<1?n.to:n.group.position;return e.copy(i).setY(i.y+Jn*this.layout.boxSize)}boxColor(t){return this.colors[this.sim.boxColor(t)]}isSettled(){for(const t of this.boxes.values())if(t.pop>0||t.t<1&&t.where!=="gone")return!1;return!0}update(t,e){const n=this.layout,i=n.boxSize;for(const r of this.boxes.values()){if(r.where==="gone"&&r.pop===0){r.group.visible=!1;continue}if(r.t<1){r.t=Math.min(1,r.t+t/r.dur);const d=Nc(r.t);r.group.position.lerpVectors(r.from,r.to,d),r.group.position.y+=Math.sin(r.t*Math.PI)*r.arc,r.t>=1&&r.arc>0&&(r.bump=.22)}let a=i,o=i,l=i;if(r.bump>0){r.bump=Math.max(0,r.bump-t);const d=r.bump/.22;o*=1-Math.sin(d*Math.PI)*.18,a*=1+Math.sin(d*Math.PI)*.1,l=a}let c=0;if(r.shake>0&&(r.shake=Math.max(0,r.shake-t),c=Math.sin(r.shake*55)*.09*(r.shake/.45)),r.pop>0){r.pop+=t;const d=r.pop/.3,m=d<.35?1+d*.5:Math.max(0,1.18*(1-(d-.35)/.65));if(a*=m,o*=m,l*=m,d>=1){r.group.visible=!1,r.pop=0;continue}}r.hint>0&&(r.hint+=t,r.group.position.y=r.to.y+Math.abs(Math.sin(r.hint*5))*.35);const h=r.where!=="queue"||r.row<n.queueRowsVisible?1:r.row===n.queueRowsVisible?.5:0;r.fade+=(h-r.fade)*Math.min(1,t*8);const f=r.fade,u=.55+.45*f;r.group.scale.set(a*u,o*u,l*u),r.group.visible=f>.05||r.pop>0,r.group.visible&&(r.body.position.x=c,r.labelMesh.position.set(c,Jn+.012,0),r.labelMesh.visible=f>.75,r.hiddenShown||r.mat.color.copy(r.color).lerp(P2,(1-f)*.9),r.flip>0?(r.flip=Math.max(0,r.flip-t*2.8),r.body.rotation.x=(1-Nc(1-r.flip))*Math.PI*2*(r.flip>0?1:0)):r.body.rotation.x=0,r.ice&&(r.ice.rotation.y=Math.sin(e*1.3+r.id)*.02))}for(const r of this.links)this.updateChain(r,i);if(this.slotPulse>0){this.slotPulse=Math.max(0,this.slotPulse-t*.7);const r=Math.sin(this.slotPulse*Math.PI*4)*this.slotPulse;this.padMat.color.setRGB(.85+r*.15,.71-r*.3,.49-r*.3)}}updateChain(t,e){const n=this.boxes.get(t.a),i=this.boxes.get(t.b),r=n.group.visible&&i.group.visible&&n.where!=="gone"&&i.where!=="gone"&&n.fade>.3&&i.fade>.3;if(t.chain.visible=r,!r)return;const a=this.tmp.copy(n.group.position),o=this.tmp2.copy(i.group.position),l=this.ldir.subVectors(o,a).setY(0),c=l.length();if(c<1e-4){t.chain.count=0;return}l.divideScalar(c);const h=e*.5*Math.min(1/Math.max(Math.abs(l.x),.001),1/Math.max(Math.abs(l.z),.001),1.4)-.05*e,f=a.y+Jn*e*.55,u=o.y+Jn*e*.55,d=Math.max(.05,c-h*2),m=Math.max(2,Math.min(Dc,Math.round(d/(.13*e))+1));this.lq.setFromUnitVectors(Uc,l);for(let _=0;_<m;_++){const g=m===1?.5:_/(m-1),p=h+d*g,v=Math.sin(g*Math.PI)*Math.min(.12,d*.18);this.ls.set(a.x+l.x*p,f+(u-f)*g-v,a.z+l.z*p),this.lq2.setFromAxisAngle(Uc,_%2?Math.PI/2:0).premultiply(this.lq),this.lm.compose(this.ls,this.lq2,this.lp.set(1.45*e,e,e)),t.chain.setMatrixAt(_,this.lm)}t.chain.count=m,t.chain.instanceMatrix.needsUpdate=!0}dispose(){for(const t of this.links)t.chain.dispose();for(const t of this.boxes.values())t.mat.dispose(),t.label.dispose(),t.labelMesh.material.dispose();this.boxGeo.dispose(),this.iceGeo.dispose(),this.labelGeo.dispose(),this.iceMat.dispose(),this.linkMat.dispose(),this.linkGeo.dispose(),this.mysteryTex.dispose(),this.trayMat.dispose(),this.padMat.dispose(),this.tray?.traverse(t=>t.geometry?.dispose())}}function Nc(s){return 1-Math.pow(1-s,3)}function Fc(s){const t={h:0,s:0,l:0};s.getHSL(t,ye);const e=Math.round(t.h*360),n=Math.round(Math.min(.75,t.s)*100);if(t.l>.78)return{fill:`hsl(${e}, ${Math.round(n*.6)}%, 30%)`,stroke:`hsl(${e}, ${Math.round(n*.4)}%, 98%)`,shadow:`hsla(${e}, ${n}%, 25%, 0.22)`};const i=t.l>.66;return{fill:`hsl(${e}, ${Math.round(n*.5)}%, ${i?99:96}%)`,stroke:`hsl(${e}, ${n}%, ${Math.round(Math.max(.16,t.l*(i?.45:.42))*100)}%)`,shadow:`hsla(${e}, ${n}%, ${Math.round(Math.max(.1,t.l*.3)*100)}%, 0.45)`}}function Qh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new De;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Oc(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][u]);const m=Oc(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Oc(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new pn(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const _=h.getComponent(u,m);o.setComponent(u+f,m,_)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const Gi=700,Bc=6;function I2(){const s=[],t=(n,i,r,a,o,l,c=12)=>{const h=new ii(1,c,Math.round(c*.75));h.scale(n,i,r),h.translate(a,o,l),s.push(h)};t(.25,.21,.31,0,.27,-.33),t(.075,.075,.09,0,.23,-.05,8),t(.13,.12,.17,0,.25,.08,12),t(.22,.2,.21,0,.33,.33);for(const n of[-1,1]){const i=new nl([new P(n*.07,.47,.38),new P(n*.13,.66,.43),new P(n*.22,.72,.6)]);s.push(new Wr(i,6,.022,4,!1)),t(.045,.045,.045,n*.22,.72,.6,8)}const e=Qh(s.map(n=>n.toNonIndexed()),!1);return e.computeVertexNormals(),e}function zc(s,t,e,n){const i=new ii(s,8,6);i.translate(-n,e,t);const r=new ii(s,8,6);return r.translate(n,e,t),Qh([i,r],!1)}function D2(){const s=new nl([new P(0,0,0),new P(.17,.09,0),new P(.3,.02,0),new P(.36,-.2,0)]);return new Wr(s,6,.024,4,!1)}const U2=[.15,.07,-.01],N2=[.55,0,-.55];class F2{group=new Ie;body;eyes;pupils;legs;cubes;ants=[];palette;legColors;layout;board;cb;speed=1;m=new ee;m2=new ee;q=new ze;e=new mn;v=new P;s=new P;one=new P(1,1,1);antSize=.42;rect={x0:0,x1:0,z0:0,z1:0,ix0:0,ix1:0,iz0:0,iz1:0,rim:.2};sim;bfsDist=new Int32Array(0);bfsPrev=new Int32Array(0);ready=new Set;house={x0:0,x1:0,z0:0,z1:0};door={x:0,z:0};constructor(t,e,n,i,r="cube"){this.board=e,this.sim=n,this.cb=i,this.palette=t.map(o=>new Ut(o)),this.legColors=this.palette.map(o=>{const l={h:0,s:0,l:0};return o.getHSL(l),new Ut().setHSL(l.h,Math.min(1,l.s*.9),Math.max(.03,l.l*.45))});const a=new Ae({roughness:.32,metalness:0,envMapIntensity:1.1});this.body=new Ze(I2(),a,Gi),this.body.castShadow=!0,this.eyes=new Ze(zc(.085,.47,.4,.1),new Ae({color:"#ffffff",roughness:.25}),Gi),this.pupils=new Ze(zc(.048,.535,.41,.105),new Ae({color:"#15101f",roughness:.2}),Gi),this.legs=new Ze(D2(),new Ae({roughness:.5}),Gi*Bc),this.cubes=new Ze(Yh(r,!0),Zh(r),Gi),this.cubes.castShadow=!0;for(const o of[this.body,this.eyes,this.pupils,this.legs,this.cubes])o.frustumCulled=!1,o.count=0,o.instanceMatrix.setUsage(Wu),this.group.add(o);this.body.setColorAt(0,this.palette[0]),this.legs.setColorAt(0,this.palette[0]),this.cubes.setColorAt(0,this.palette[0])}setLayout(t){this.layout=t,this.antSize=Math.max(.46,Math.min(.74,t.cell*1.9));const e=t.cell*.35,n=t.picX0-e,i=t.picZ0-e,r=t.picX0+t.picW+e,a=t.picZ0+t.picH+e;this.rect={ix0:n,iz0:i,ix1:r,iz1:a,x0:n-t.frame,z0:i-t.frame,x1:r+t.frame,z1:a+t.frame,rim:Math.max(.06,Math.min(.2,t.cell*.32))+.1};const o=t.boxSize/2+.25,l=t.queueZ0-Math.sign(t.queueRow)*o,c=t.queueZ0+(t.queueRowsVisible+1)*t.queueRow;this.avoid={x0:t.queueCol[0]-o,x1:t.queueCol[t.queueCol.length-1]+o,z0:Math.min(l,c),z1:Math.max(l,c)},this.clear()}avoid={x0:0,x1:0,z0:0,z1:0};get count(){return this.ants.length}setHome(t,e){this.house=t,this.door={x:e.x,z:e.z}}clear(){this.ants.length=0,this.ready.clear()}fadeAll(){for(const t of this.ants)t.phase="fade",t.timer=0;this.ready.clear()}pickup(t){this.ready.add(t),this.ants.some(e=>e.cell===t&&(e.phase==="out"||e.phase==="bite"))||(this.board.remove(t),this.ready.delete(t),this.cb.onPick(t),this.cb.onDeliver())}spawn(t,e,n,i=2){if(this.ants.length>=Gi)return;const r=Math.random(),a=t.x+(r-.5)*.3,o=t.z+.2,l=this.planInside(e,a,o),c=[a,o];this.route(c,l.inside[0],l.inside[1]);const h=c.length/2-1;for(let _=2;_<l.inside.length;_+=2)c.push(l.inside[_],l.inside[_+1]);const f={color:n,cell:e,pts:c,cum:[],dist:0,phase:"out",timer:0,yaw:Math.PI,legPhase:r*6,startY:t.y,seed:r,line:l.block,lineD:[],x:c[0],z:c[1],y:t.y,scale:.2,wait:0,back:l.inside.length/2,spd:1};this.measure(f);const u=f.cum[f.cum.length-1],d=3.3;f.spd=Math.max(.7,Math.min(2.2,u/Math.max(.3,i-.3)/d));const m=f.cum[h];f.lineD=l.blockD.map(_=>m+_),this.ants.push(f)}cellXZ(t,e){const n=this.layout,i=this.sim.w,r=t%i;return e.x=n.picX0+(r+.5)*n.cell,e.z=n.picZ0+((t-r)/i+.5)*n.cell,e}exitPoint(t,e){const n=this.cellXZ(t,{x:0,z:0}),i=this.rect;return e===1?n.z=i.z1+.25:e===2?n.z=i.z0-.25:e===4?n.x=i.x0-.25:n.x=i.x1+.25,n}planInside(t,e,n){const i=this.sim,r=i.w,a=i.h,o=r*a,c=this.layout.cell;this.bfsDist.length!==o&&(this.bfsDist=new Int32Array(o),this.bfsPrev=new Int32Array(o));const h=this.bfsDist.fill(-1),f=this.bfsPrev,u=J=>i.isFree(J)&&i.air[J]===1;let d=1/0,m=-1,_=0;const g=(J,q)=>{const K=i.edgeMask(J);for(const Q of[1,2,4,8]){if(!(K&Q))continue;const wt=this.exitPoint(J,Q),St=q*c+Math.hypot(wt.x-e,wt.z-n)*.8;St<d&&(d=St,m=J,_=Q)}};h[t]=0,g(t,0);const p=[t];for(let J=0;J<p.length;J++){const q=p[J],K=q%r,Q=(q-K)/r;for(let wt=0;wt<4;wt++){const St=wt===2?K-1:wt===3?K+1:K,jt=wt===0?Q+1:wt===1?Q-1:Q;if(St<0||jt<0||St>=r||jt>=a)continue;const Wt=jt*r+St;h[Wt]>=0||!u(Wt)||(h[Wt]=h[q]+1,f[Wt]=q,g(Wt,h[Wt]),p.push(Wt))}}const v=this.cellXZ(t,{x:0,z:0}),y=c*.5+this.antSize*.4,M=[];if(m<0)return M.push(v.x,this.rect.z1+.25,v.x,v.z+y),{inside:M,block:[],blockD:[]};const E=this.exitPoint(m,_),w=(Math.random()-.5)*c*.35,C=_===1||_===2;M.push(E.x+(C?w:0),E.z+(C?0:w));const S=[];for(let J=m;J!==t;J=f[J])S.push(J);const T={x:0,z:0};for(const J of S)this.cellXZ(J,T),M.push(T.x,T.z);const L=S.length?M[M.length-2]:E.x,U=S.length?M[M.length-1]:E.z;let z=L-v.x,O=U-v.z;const F=Math.hypot(z,O)||1;z/=F,O/=F,M.push(v.x+z*y,v.z+O*y);const R=this.smoothPath(M,t),{block:W,blockD:G}=this.blockingCells(R,t);return{inside:R,block:W,blockD:G}}walkable(t,e,n,i,r){const a=this.layout,o=this.sim.w,l=this.sim.h,c=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(c/(a.cell*.3)));for(let f=1;f<h;f++){const u=f/h,d=Math.floor((t+(n-t)*u-a.picX0)/a.cell),m=Math.floor((e+(i-e)*u-a.picZ0)/a.cell);if(d<0||m<0||d>=o||m>=l)continue;const _=m*o+d;if(_!==r&&(!this.sim.isFree(_)||!this.sim.air[_]))return!1}return!0}smoothPath(t,e){const n=t.length/2;if(n<=2)return t;const i=[t[0],t[1]];let r=0;for(;r<n-1;){let a=Math.min(n-1,r+14);for(;a>r+1&&!this.walkable(t[r*2],t[r*2+1],t[a*2],t[a*2+1],e);)a--;i.push(t[a*2],t[a*2+1]),r=a}return i}blockingCells(t,e){const n=this.layout,i=this.sim.w,r=this.sim.h,a=[],o=[],l=new Set;let c=0;const h=this.antSize*.45;for(let f=0;f+3<t.length;f+=2){const u=t[f],d=t[f+1],m=t[f+2],_=t[f+3],g=Math.hypot(m-u,_-d),p=Math.max(1,Math.ceil(g/(n.cell*.25)));for(let v=0;v<=p;v++){const y=v/p,M=Math.floor((u+(m-u)*y-n.picX0)/n.cell),E=Math.floor((d+(_-d)*y-n.picZ0)/n.cell);if(M<0||E<0||M>=i||E>=r)continue;const w=E*i+M;w===e||l.has(w)||this.sim.cellColor(w)<0||(l.add(w),a.push(w),o.push(Math.max(0,c+g*y-h)))}c+=g}return{block:a,blockD:o}}route(t,e,n){const i=t[t.length-2],r=t[t.length-1],a=this.findPath(i,r,e,n,!0)??this.findPath(i,r,e,n,!1)??[];for(const o of a)t.push(o[0]+(Math.random()-.5)*.2,o[1]+(Math.random()-.5)*.2);t.push(e,n)}blocked(t,e,n,i,r){return this.crosses(this.rect,t,e,n,i)||this.crosses(this.house,t,e,n,i)||r&&this.crosses(this.avoid,t,e,n,i)}findPath(t,e,n,i,r){if(!this.blocked(t,e,n,i,r))return[];const a=.3,o=[],l=v=>o.push([v.x0-a,v.z0-a],[v.x1+a,v.z0-a],[v.x1+a,v.z1+a],[v.x0-a,v.z1+a]);l(this.rect),l(this.house),r&&l(this.avoid);const c=o.length,h=(v,y)=>Math.hypot(v[0]-y[0],v[1]-y[1]),f=[t,e],u=[n,i],d=(v,y)=>!this.blocked(v[0],v[1],y[0],y[1],r),m=o.map(v=>d(f,v)),_=o.map(v=>d(v,u));let g=null,p=1/0;for(let v=0;v<c;v++)if(m[v]){if(_[v]){const y=h(f,o[v])+h(o[v],u);y<p&&(p=y,g=[o[v]])}for(let y=0;y<c;y++){if(y===v||!d(o[v],o[y]))continue;const M=h(f,o[v])+h(o[v],o[y]);if(!(M>=p)){if(_[y]){const E=M+h(o[y],u);E<p&&(p=E,g=[o[v],o[y]])}for(let E=0;E<c;E++){if(E===v||E===y||!_[E]||!d(o[y],o[E]))continue;const w=M+h(o[y],o[E])+h(o[E],u);w<p&&(p=w,g=[o[v],o[y],o[E]])}}}}return g}crosses(t,e,n,i,r){const o=t.x0+.05,l=t.x1-.05,c=t.z0+.05,h=t.z1-.05;let f=0,u=1;const d=i-e,m=r-n,_=[-d,d,-m,m],g=[e-o,l-e,n-c,h-n];for(let p=0;p<4;p++)if(_[p]===0){if(g[p]<0)return!1}else{const v=g[p]/_[p];if(_[p]<0){if(v>u)return!1;v>f&&(f=v)}else{if(v<f)return!1;v<u&&(u=v)}}return u-f>1e-4}measure(t){t.cum=[0];for(let e=2;e<t.pts.length;e+=2)t.cum.push(t.cum[t.cum.length-1]+Math.hypot(t.pts[e]-t.pts[e-2],t.pts[e+1]-t.pts[e-1]))}posAt(t,e){const n=t.cum;let i=1;for(;i<n.length-1&&n[i]<e;)i++;const r=n[i]-n[i-1],a=r>0?Math.min(1,Math.max(0,(e-n[i-1])/r)):1;t.x=t.pts[(i-1)*2]+(t.pts[i*2]-t.pts[(i-1)*2])*a,t.z=t.pts[(i-1)*2+1]+(t.pts[i*2+1]-t.pts[(i-1)*2+1])*a}setSim(t){this.sim=t}goHome(t){const e=[],n=Math.max(0,t.pts.length/2-Math.max(2,t.back));for(let r=t.pts.length/2-1;r>=n;r--)e.push(t.pts[r*2],t.pts[r*2+1]);const i=this.door.x+(Math.random()-.5)*.08;this.route(e,i,this.door.z+.35),e.push(i,this.door.z),t.pts=e,t.line=[],t.lineD=[],this.measure(t),t.dist=0,t.phase="home",t.startY=0}update(t,e){const n=3.3*this.speed,i=this.rect,r=[];for(const a of this.ants){let o=!1;if(a.phase==="out"||a.phase==="home"){const m=a.cum[a.cum.length-1];let _=m;for(let p=0;p<a.line.length;p++)if(this.board.isPresent(a.line[p])){_=Math.min(_,a.lineD[p]-.05);break}const g=a.dist;a.dist=Math.min(_,a.dist+n*t*(a.phase==="out"?a.spd:1)*(.95+a.seed*.1)),a.dist<g&&(a.dist=g),o=a.dist>g+1e-5,!o&&a.dist<m-1e-4?(a.wait+=t*this.speed,a.wait>1.4&&(a.line=[])):a.wait=0,this.posAt(a,a.dist),a.dist>=m-1e-4&&(a.phase==="out"?(a.phase="bite",a.timer=0,this.board.wobble(a.cell)):(a.phase="enter",a.timer=0))}else if(a.phase==="bite")a.timer+=t*this.speed,a.timer>.15&&this.ready.has(a.cell)&&(this.ready.delete(a.cell),this.board.remove(a.cell),this.cb.onPick(a.cell),this.goHome(a));else if(a.phase==="enter"){if(a.timer+=t*this.speed,a.timer>.22){this.cb.onDeliver();continue}}else if(a.phase==="fade"&&(a.timer+=t,a.timer>.35))continue;const l=Math.min(a.cum.length-1,Math.max(1,a.cum.findIndex(m=>m>=a.dist))),c=a.pts[l*2]-a.pts[(l-1)*2],h=a.pts[l*2+1]-a.pts[(l-1)*2+1];if(a.phase!=="bite"){if(c*c+h*h>1e-6){let _=Math.atan2(c,h)-a.yaw;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;a.yaw+=_*Math.min(1,t*14)}}o&&(a.legPhase+=t*n*9);let f=0;a.phase==="out"&&a.startY>0&&(f=Math.max(0,a.startY*(1-a.dist/.6))),a.x>i.x0&&a.x<i.x1&&a.z>i.z0&&a.z<i.z1&&!(a.x>i.ix0&&a.x<i.ix1&&a.z>i.iz0&&a.z<i.iz1)?f=Math.max(f,i.rim):a.x>i.ix0&&a.x<i.ix1&&a.z>i.iz0&&a.z<i.iz1&&(f=Math.max(f,.04)),a.y+=(f-a.y)*Math.min(1,t*18);let d=1;a.phase==="out"&&(a.scale=Math.min(1,a.scale+t*5)),a.phase==="enter"&&(d=Math.max(.01,1-a.timer/.22)),a.phase==="fade"&&(d=Math.max(.01,1-a.timer/.35)),a.scale=Math.min(a.scale,1),a.y-=a.phase==="enter"?a.timer*.8:0,r.push(a),a._s=d*a.scale}this.ants=r,this.writeInstances()}writeInstances(){const t=this.antSize;let e=0,n=0,i=0;const r=this.layout.cell;for(const a of this.ants){const o=a._s*t,l=Math.sin(a.legPhase*2)*.012*t,c=a.phase==="bite"?Math.sin(a.timer*40)*.25:0;this.e.set(c*.5,a.yaw,0),this.q.setFromEuler(this.e),this.v.set(a.x,a.y+l,a.z),this.s.set(o,o,o),this.m.compose(this.v,this.q,this.s),this.body.setMatrixAt(e,this.m),this.eyes.setMatrixAt(e,this.m),this.pupils.setMatrixAt(e,this.m),this.body.setColorAt(e,this.palette[a.color]);for(let h=0;h<Bc;h++){const f=h<3?-1:1,u=h%3,d=(u+(f>0?1:0))%2*Math.PI,m=Math.sin(a.legPhase+d)*.38,_=Math.max(0,Math.cos(a.legPhase+d))*.22;this.e.set(0,f<0?Math.PI:0,0);const g=(f<0?Math.PI:0)-f*(N2[u]+m);this.e.set(0,g,f*0+_),this.q.setFromEuler(this.e),this.v.set(f*.08,.22,U2[u]),this.m2.compose(this.v,this.q,this.one),this.m2.premultiply(this.m),this.legs.setMatrixAt(n,this.m2),this.legs.setColorAt(n,this.legColors[a.color]),n++}if(a.phase==="home"||a.phase==="enter"){const h=Math.min(r*.8,o*.55),f=.62*o;this.v.set(a.x+Math.sin(a.yaw)*f,a.y+.34*o+h*.62/2,a.z+Math.cos(a.yaw)*f),this.e.set(0,a.yaw,0),this.q.setFromEuler(this.e);const u=a.phase==="enter"?Math.max(.01,1-a.timer/.22):1;this.s.set(h*u,h*u,h*u),this.m.compose(this.v,this.q,this.s),this.cubes.setMatrixAt(i,this.m),this.cubes.setColorAt(i,this.board.cubeColor(a.cell)),i++}e++}this.body.count=this.eyes.count=this.pupils.count=e,this.legs.count=n,this.cubes.count=i;for(const a of[this.body,this.eyes,this.pupils,this.legs,this.cubes])a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)}dispose(){for(const t of[this.body,this.eyes,this.pupils,this.legs,this.cubes])t.geometry.dispose(),t.material.dispose(),t.dispose()}}function Na(s,t){const e=s/2,n=new as;return n.moveTo(-e,0),n.lineTo(e,0),n.lineTo(e,t-e),n.absarc(0,t-e,e,0,Math.PI,!1),n.lineTo(-e,0),n}const Mn=1.1,ui=.95,Fa=.8,Fn=.1,fi=.62,kc=.14;class O2{group=new Ie;body=new Ie;meshes=[];pulse=0;scale=1;constructor(t="#e8674a"){const e=(v,y,M,E,w,C={})=>{const S=C.basic?new rs({color:y}):new Ae({color:y,roughness:C.rough??.7}),T=new de(v,S);return T.position.set(M,E,w),T.castShadow=C.shadow??!0,T.receiveShadow=!0,(C.parent??this.body).add(T),this.meshes.push(T),T},n="#fbecd0",i=Fn+Fa,r=ui/2;e(new nn(Mn+.16,Fn,ui+.14,2,.04),"#cfc5b6",0,Fn/2,0,{rough:.9}),e(new nn(Mn,Fa,ui,3,.06),n,0,Fn+Fa/2,0,{rough:.8});const a=new as;a.moveTo(-Mn/2,0),a.lineTo(Mn/2,0),a.lineTo(0,fi-.04),a.closePath();const o=new bi(a,{depth:ui-.02,bevelEnabled:!1});o.translate(0,0,-.9299999999999999/2),e(o,n,0,i-.01,0,{rough:.8});const l=Mn/2+kc,c=Math.atan2(fi,Mn/2),h=Math.hypot(l,fi*(l/(Mn/2)))+.02,f=ui+.26,u=new Ut(t).offsetHSL(0,0,-.12).getStyle();for(const v of[-1,1]){const y=new Ie;y.position.set(0,i+fi+.02,0),y.rotation.z=v*-c,this.body.add(y),e(new nn(h,.08,f,2,.03),t,v*h/2,0,0,{parent:y,rough:.55});for(let M=1;M<=3;M++)e(new Cn(.03,.02,f+.01),u,v*h*M/4,.045,0,{parent:y,shadow:!1})}e(new nn(.16,.42,.16,2,.02),"#c0714f",.3,i+fi*.55+.12,-.12),e(new nn(.2,.05,.2,2,.015),"#6d4535",.3,i+fi*.55+.34,-.12),e(new ts(Na(.44,.6),12),"#b98a5c",0,Fn,r+.003,{shadow:!1}),e(new ts(Na(.34,.54),12),"#2a1810",0,Fn,r+.006,{shadow:!1,basic:!0});const d=new bi(Na(.34,.54),{depth:.035,bevelEnabled:!1,curveSegments:10});d.translate(.17,0,0);const m=new Ie;m.position.set(-.17,Fn,r+.01),m.rotation.y=-1.95,this.body.add(m);const _=e(d,"#9a5f33",0,0,0,{parent:m});e(new ii(.022,10,8),"#f2c14e",.28,.27,.045,{parent:_,shadow:!1});const g=i+fi*.36;e(new Dr(.12,20),"#ffffff",0,g,r+.004,{shadow:!1});const p=e(new Dr(.09,20),"#9fd8ff",0,g,r+.008,{shadow:!1,rough:.2});p.material.emissive.set("#bfe8ff"),p.material.emissiveIntensity=.3,e(new Je(.18,.02),"#ffffff",0,g,r+.012,{shadow:!1}),e(new Je(.02,.18),"#ffffff",0,g,r+.012,{shadow:!1});for(const v of[-.37,.37]){e(new Je(.2,.2),"#ffffff",v,Fn+.47,r+.004,{shadow:!1});const y=e(new Je(.15,.15),"#9fd8ff",v,Fn+.47,r+.008,{shadow:!1,rough:.2});y.material.emissive.set("#bfe8ff"),y.material.emissiveIntensity=.3}e(new nn(.46,.05,.2,2,.02),"#cfc5b6",0,.025,r+.1,{rough:.9}),e(new Nr(.19,1),"#6cbf45",-Mn/2-.08,.15,r-.05,{rough:.85}),e(new Nr(.15,1),"#79c94f",Mn/2+.08,.12,r-.02,{rough:.85}),this.group.add(this.body)}setLayout(t){this.scale=t.mode==="portrait"?.8:.95,this.group.position.set(t.nest.x,0,t.nest.z),this.group.scale.setScalar(this.scale)}footprint(){const t=this.group.position,e=(Mn/2+kc+.1)*this.scale,n=(ui/2+.15)*this.scale;return{x0:t.x-e,x1:t.x+e,z0:t.z-n,z1:t.z+n}}doorway(t){const e=this.group.position;return t.set(e.x,0,e.z+(ui/2+.05)*this.scale)}gulp(){this.pulse=Math.min(1,this.pulse+.25)}update(t){this.pulse>0&&(this.pulse=Math.max(0,this.pulse-t*3));const e=this.pulse*.03;this.body.scale.set(1+e,1-e,1+e)}dispose(){for(const t of this.meshes)t.geometry.dispose(),t.material.dispose()}}const Hc=1400;class B2{group=new Ie;parts=[];meshes;m=new ee;q=new ze;camQ=new ze;v=new P;s=new P;z=new P(0,0,1);tmpQ=new ze;constructor(){const t=new Je(1,1),e=(n,i)=>{const r=new rs({map:n,transparent:!0,depthWrite:!1,blending:i,side:cn}),a=new Ze(t,r,Hc);return a.frustumCulled=!1,a.count=0,a.renderOrder=10,a.setColorAt(0,new Ut(1,1,1)),this.group.add(a),a};this.meshes=[e(Kh(),Rs),e(null,ni),e(ol("rgba(255,255,255,0.9)","rgba(255,255,255,0)"),ni)]}setCamera(t){this.camQ.copy(t.quaternion)}sparkle(t,e,n,i,r=10,a=.6){const o=i instanceof Ut?i:new Ut(i);for(let l=0;l<r;l++){const c=Math.random()*Math.PI*2,h=a*(.5+Math.random());this.add({x:t,y:e,z:n,vx:Math.cos(c)*h,vy:1+Math.random()*1.5,vz:Math.sin(c)*h,life:0,max:.5+Math.random()*.4,size:.25+Math.random()*.25,color:o.clone().lerp(new Ut(1,1,1),.5),spin:0,rot:0,gravity:2.5,kind:0})}}puff(t,e,n,i,r=6,a=.3){const o=i instanceof Ut?i:new Ut(i);for(let l=0;l<r;l++){const c=Math.random()*Math.PI*2;this.add({x:t,y:e,z:n,vx:Math.cos(c)*.8,vy:.4+Math.random()*.5,vz:Math.sin(c)*.8,life:0,max:.35+Math.random()*.25,size:a*(.6+Math.random()*.6),color:o.clone(),spin:0,rot:0,gravity:0,kind:2})}}confetti(t,e,n,i=160,r=5){const a=["#ff5a7a","#ffd23f","#3ec9ff","#7cf07c","#b58cff","#ff9f43"];for(let o=0;o<i;o++){const l=Math.random()*Math.PI*2,c=r*(.3+Math.random()*.7);this.add({x:t+(Math.random()-.5),y:e,z:n+(Math.random()-.5),vx:Math.cos(l)*c,vy:5+Math.random()*6,vz:Math.sin(l)*c*.7,life:0,max:2.2+Math.random()*1.2,size:.16+Math.random()*.12,color:new Ut(a[o%a.length]),spin:(Math.random()-.5)*16,rot:Math.random()*6,gravity:7,kind:1})}}shards(t,e,n,i=14){for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2;this.add({x:t,y:e,z:n,vx:Math.cos(a)*2,vy:2+Math.random()*2,vz:Math.sin(a)*2,life:0,max:.6+Math.random()*.3,size:.12+Math.random()*.12,color:new Ut("#dff6ff"),spin:(Math.random()-.5)*20,rot:0,gravity:9,kind:1})}}add(t){this.parts.length>=Hc&&this.parts.shift(),this.parts.push(t)}get busy(){return this.parts.length>0}update(t){const e=[0,0,0],n=[];for(const i of this.parts){if(i.life+=t,i.life>=i.max)continue;i.vy-=i.gravity*t,i.kind===1&&(i.vx*=1-t*.8,i.vz*=1-t*.8,i.vy<-2.2&&(i.vy=-2.2)),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.y<.02&&i.kind!==2&&(i.y=.02,i.vy=0,i.vx*=.5,i.vz*=.5),i.rot+=i.spin*t,n.push(i);const r=i.life/i.max,a=this.meshes[i.kind],o=e[i.kind]++;let l=i.size;i.kind===0?l*=Math.sin(Math.min(1,r*1.3)*Math.PI):i.kind===2?l*=.6+r*1.2:l*=r>.8?(1-r)/.2:1,this.v.set(i.x,i.y,i.z),this.q.copy(this.camQ),i.kind===1&&this.q.multiply(this.tmpQ.setFromAxisAngle(this.z,i.rot)),this.s.set(l,i.kind===1?l*.6:l,l),this.m.compose(this.v,this.q,this.s),a.setMatrixAt(o,this.m);const c=i.color;i.kind===2?a.setColorAt(o,this.tmpColor.copy(c).multiplyScalar(1-r*.5)):a.setColorAt(o,c)}this.parts=n,this.meshes.forEach((i,r)=>{i.count=e[r],i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0);const a=i.material;r===2&&(a.opacity=.75)})}tmpColor=new Ut;dispose(){for(const t of this.meshes){t.geometry.dispose();const e=t.material;e.map?.dispose(),e.dispose(),t.dispose()}}}function ll(s,t,e,n,i){for(const r of[0,-s,s])if(!(r!==0&&(r<0?t<s-n:t>n)))for(const a of[0,-s,s])a!==0&&(a<0?e<s-n:e>n)||i(t+r,e+a)}function Oa(s,t,e,n,i,r,a,o){for(let l=0;l<i;l++){const c=t.next()*e,h=t.next()*e,f=t.range(r,a),u=t.pick(n);ll(e,c,h,f,(d,m)=>{const _=s.createRadialGradient(d,m,0,d,m,f);_.addColorStop(0,ln(u,o)),_.addColorStop(1,ln(u,0)),s.fillStyle=_,s.fillRect(d-f,m-f,f*2,f*2)})}}function ln(s,t){const e=parseInt(s.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function xs(s,t,e,n,i,r,a,o=-Math.PI/2,l=1.1){s.lineCap="round";for(let c=0;c<i;c++){const h=t.next()*e,f=t.next()*e,u=o+(t.next()-.5)*l*2,d=t.range(r[0],r[1]),m=(t.next()-.5)*d*.6;s.strokeStyle=t.pick(n),s.globalAlpha=t.range(.55,.95),s.lineWidth=t.range(a[0],a[1]),ll(e,h,f,d+2,(_,g)=>{s.beginPath(),s.moveTo(_,g);const p=_+Math.cos(u)*d,v=g+Math.sin(u)*d;s.quadraticCurveTo((_+p)/2+m,(g+v)/2,p,v),s.stroke()})}s.globalAlpha=1}function ti(s,t,e=4,n=2,i="rgba(0,0,0,0.22)"){s.save(),s.shadowColor=i,s.shadowBlur=e,s.shadowOffsetY=n,t(),s.restore()}function Vc(s,t,e,n,i,r,a=5,o=0){ti(s,()=>{s.fillStyle=i;for(let l=0;l<a;l++){const c=o+l/a*Math.PI*2;s.beginPath(),s.ellipse(t+Math.cos(c)*n*.9,e+Math.sin(c)*n*.9,n*.75,n*.55,c,0,Math.PI*2),s.fill()}}),s.fillStyle=r,s.beginPath(),s.arc(t,e,n*.5,0,Math.PI*2),s.fill()}function z2(s,t,e,n,i,r){s.fillStyle=i;for(let a=0;a<3;a++){const o=r+a/3*Math.PI*2;s.beginPath(),s.arc(t+Math.cos(o)*n,e+Math.sin(o)*n,n,0,Math.PI*2),s.fill()}}function Ba(s,t,e,n,i,r){ti(s,()=>{s.fillStyle=i,s.beginPath(),s.ellipse(t,e,n,n*r.range(.6,.9),r.next()*Math.PI,0,Math.PI*2),s.fill()},3,2),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.ellipse(t-n*.3,e-n*.3,n*.35,n*.2,-.6,0,Math.PI*2),s.fill()}function k2(s,t,e,n,i,r){s.save(),s.translate(t,e),s.rotate(r),ti(s,()=>{s.fillStyle=i,s.beginPath(),s.moveTo(-n/2,0),s.quadraticCurveTo(0,-n*.42,n/2,0),s.quadraticCurveTo(0,n*.42,-n/2,0),s.fill()},5,3),s.strokeStyle="rgba(0,0,0,0.18)",s.lineWidth=Math.max(1,n*.04),s.beginPath(),s.moveTo(-n/2,0),s.lineTo(n/2,0),s.stroke(),s.restore()}function za(s,t,e,n,i){s.fillStyle=i,s.beginPath(),s.moveTo(t,e-n),s.quadraticCurveTo(t,e,t+n,e),s.quadraticCurveTo(t,e,t,e+n),s.quadraticCurveTo(t,e,t-n,e),s.quadraticCurveTo(t,e,t,e-n),s.fill()}function H2(s,t,e,n,i){const r=s.createRadialGradient(t,e,0,t,e,n*4);r.addColorStop(0,ln(i,.9)),r.addColorStop(.25,ln(i,.35)),r.addColorStop(1,ln(i,0)),s.fillStyle=r,s.fillRect(t-n*4,e-n*4,n*8,n*8),s.fillStyle="#ffffff",s.beginPath(),s.arc(t,e,n*.6,0,Math.PI*2),s.fill()}function Te(s,t,e,n,i){for(let r=0;r<e;r++){const a=t.next()*s,o=t.next()*s;ll(s,a,o,n,i)}}function jh(s,t=1024,e=7){const n=document.createElement("canvas");n.width=n.height=t;const i=n.getContext("2d"),r=new al(e),a=s.ground,o=t/1024;switch(i.fillStyle=a.base,i.fillRect(0,0,t,t),Oa(i,r,t,a.tints,70,90*o,260*o,.45),Oa(i,r,t,a.tints,160,25*o,70*o,.35),a.kind){case"grass":{xs(i,r,t,a.detail,14e3,[7*o,15*o],[1.4*o,2.8*o]),Te(t,r,70,20*o,(l,c)=>z2(i,l,c,r.range(4,6.5)*o,r.pick(["#6fb34a","#5ea43f","#7fc257"]),r.next()*6)),xs(i,r,t,a.detail,3e3,[6*o,12*o],[1.2*o,2.2*o]),Te(t,r,34,18*o,(l,c)=>Vc(i,l,c,r.range(4.5,7)*o,r.pick(a.accents),"#ffd23f",5,r.next()*6)),Te(t,r,14,16*o,(l,c)=>Ba(i,l,c,r.range(5,10)*o,r.pick(["#bfb6a8","#a89f90","#d2cabc"]),r));break}case"forest":{xs(i,r,t,a.detail,9e3,[5*o,11*o],[1.2*o,2.4*o],0,Math.PI),Te(t,r,90,30*o,(l,c)=>k2(i,l,c,r.range(18,34)*o,r.pick(a.accents),r.next()*6)),i.strokeStyle="#6b4a2b",i.lineWidth=1.2*o,Te(t,r,260,14*o,(l,c)=>{const h=r.next()*6;i.beginPath(),i.moveTo(l,c),i.lineTo(l+Math.cos(h)*12*o,c+Math.sin(h)*12*o),i.stroke()}),Te(t,r,12,16*o,(l,c)=>{const h=r.range(7,11)*o;ti(i,()=>{i.fillStyle="#d64933",i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill()}),i.fillStyle="#fff4e6";for(let f=0;f<4;f++)i.beginPath(),i.arc(l+r.range(-h*.5,h*.5),c+r.range(-h*.5,h*.5),h*.18,0,Math.PI*2),i.fill()}),Te(t,r,18,14*o,(l,c)=>Ba(i,l,c,r.range(5,9)*o,r.pick(["#8b8f7a","#9aa08a"]),r));break}case"sand":{i.strokeStyle=ln("#fff6dc",.5),i.lineWidth=3*o;for(let l=0;l<28;l++){const c=r.next()*t,h=r.range(6,14)*o,f=r.next()*6;i.beginPath();for(let u=-10;u<=t+10;u+=8){const d=c+Math.sin(u/(60*o)+f)*h;u===-10?i.moveTo(u,d):i.lineTo(u,d)}i.stroke()}Te(t,r,9e3,2,(l,c)=>{i.fillStyle=r.pick(a.detail),i.globalAlpha=r.range(.3,.8),i.fillRect(l,c,1.6*o,1.6*o)}),i.globalAlpha=1,Te(t,r,16,20*o,(l,c)=>{const h=r.range(8,13)*o,f=r.next()*6;i.save(),i.translate(l,c),i.rotate(f),ti(i,()=>{i.fillStyle=r.pick(a.accents),i.beginPath(),i.moveTo(0,h*.6),i.arc(0,0,h,Math.PI*1.1,Math.PI*1.9),i.closePath(),i.fill()}),i.strokeStyle="rgba(160,110,80,0.4)",i.lineWidth=1.2*o;for(let u=0;u<5;u++){const d=Math.PI*(1.15+u*.17);i.beginPath(),i.moveTo(0,h*.55),i.lineTo(Math.cos(d)*h*.95,Math.sin(d)*h*.95),i.stroke()}i.restore()}),Te(t,r,6,20*o,(l,c)=>{const h=r.range(10,15)*o;i.save(),i.translate(l,c),i.rotate(r.next()*6),ti(i,()=>{i.fillStyle="#ff8c69",i.beginPath();for(let f=0;f<10;f++){const u=f/10*Math.PI*2,d=f%2===0?h:h*.42;i.lineTo(Math.cos(u)*d,Math.sin(u)*d)}i.closePath(),i.fill()}),i.restore()});break}case"frosting":{i.strokeStyle=ln("#ffffff",.35),i.lineWidth=10*o,i.lineCap="round";for(let l=0;l<40;l++){const c=r.next()*t,h=r.next()*t,f=r.range(30,70)*o;i.beginPath(),i.arc(c,h,f,r.next()*6,r.next()*6+2.5),i.stroke()}Te(t,r,700,8*o,(l,c)=>{i.save(),i.translate(l,c),i.rotate(r.next()*Math.PI),i.fillStyle=r.pick(a.accents);const h=r.range(7,11)*o,f=2.6*o;i.beginPath(),i.roundRect(-h/2,-f/2,h,f,f/2),i.fill(),i.restore()}),Te(t,r,60,8*o,(l,c)=>{const h=r.range(3,5)*o;ti(i,()=>{i.fillStyle="#ffffff",i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill()},3,1)});break}case"night":{xs(i,r,t,a.detail,9e3,[6*o,13*o],[1.3*o,2.4*o]),Te(t,r,50,16*o,(l,c)=>H2(i,l,c,r.range(1.5,3)*o,r.pick(a.accents))),Te(t,r,30,10*o,(l,c)=>za(i,l,c,r.range(3,6)*o,ln("#fff7c2",.7))),Te(t,r,10,14*o,(l,c)=>Ba(i,l,c,r.range(5,9)*o,"#46507a",r));break}case"snow":{Oa(i,r,t,["#c9dcef","#ffffff"],50,30*o,90*o,.5),Te(t,r,160,8*o,(l,c)=>za(i,l,c,r.range(2,4.5)*o,ln("#ffffff",.95))),Te(t,r,10,12*o,(l,c)=>{i.fillStyle=ln("#9fbad3",.35);for(let h=0;h<4;h++)i.beginPath(),i.ellipse(l+h*14*o,c+h%2*9*o,3.5*o,5*o,.3,0,Math.PI*2),i.fill()});break}case"magic":{xs(i,r,t,a.detail,11e3,[6*o,13*o],[1.3*o,2.5*o]),Te(t,r,40,18*o,(l,c)=>Vc(i,l,c,r.range(4,6)*o,r.pick(a.accents),"#ffffff",6,r.next()*6)),Te(t,r,26,16*o,(l,c)=>{const h=r.range(5,9)*o;ti(i,()=>{i.fillStyle=r.pick(["#bdf4ff","#ffc6ff","#fff3b0"]),i.beginPath();for(let f=0;f<6;f++){const u=f/6*Math.PI*2;i.lineTo(l+Math.cos(u)*h,c+Math.sin(u)*h*1.3)}i.closePath(),i.fill()})}),Te(t,r,60,10*o,(l,c)=>za(i,l,c,r.range(2,5)*o,ln("#ffffff",.85)));break}}return n}const Gc=11,Wc=new Map;class V2{group=new Ie;plane;mat;dapples=[];dappleMat;center=new ot;constructor(){this.mat=new Ae({roughness:1,metalness:0,envMapIntensity:.25}),this.plane=new de(new Je(160,160),this.mat),this.plane.rotation.x=-Math.PI/2,this.plane.receiveShadow=!0,this.group.add(this.plane),this.dappleMat=new rs({map:ol("rgba(255,250,220,1)","rgba(255,250,220,0)",128),transparent:!0,opacity:.16,depthWrite:!1,blending:Rs});for(let t=0;t<7;t++){const e=new de(new Je(1,1),this.dappleMat);e.rotation.x=-Math.PI/2,e.position.y=.01,e.userData={ph:Math.random()*10,r:3+Math.random()*4,sp:.05+Math.random()*.07,ox:(Math.random()-.5)*22,oz:(Math.random()-.5)*22},this.dapples.push(e),this.group.add(e)}}setTheme(t){let e=Wc.get(t.id);e||(e=new Ei(jh(t,1024,t.id.length*31+5)),e.colorSpace=ye,e.wrapS=e.wrapT=Tr,e.anisotropy=8,e.repeat.set(160/Gc,160/Gc),Wc.set(t.id,e)),this.mat.map=e,this.mat.needsUpdate=!0;const n=t.ground.kind==="night";this.dappleMat.opacity=n?.06:t.ground.kind==="snow"?.1:.16}setLayout(t){this.center.set((t.bounds.minX+t.bounds.maxX)/2,(t.bounds.minZ+t.bounds.maxZ)/2)}update(t,e){for(const n of this.dapples){const i=n.userData,r=e*i.sp+i.ph;n.position.x=this.center.x+i.ox+Math.sin(r)*2.5,n.position.z=this.center.y+i.oz+Math.cos(r*.8)*2;const a=i.r*(1+Math.sin(r*2.3)*.12);n.scale.set(a,a,1)}}dispose(){this.plane.geometry.dispose(),this.mat.dispose(),this.dappleMat.map?.dispose(),this.dappleMat.dispose();for(const t of this.dapples)t.geometry.dispose()}}const Xc={grass:{count:46,tex:"glow",colors:["#fffbe6","#fff4b8","#ffffff"],size:[.08,.16],fall:[-.06,.06],additive:!0,opacity:.9},forest:{count:26,tex:"leaf",colors:["#e0703a","#f2b84b","#c9502e","#a7c957","#d98c2b"],size:[.28,.42],fall:[-.45,-.25],additive:!1,opacity:1},sand:{count:34,tex:"sparkle",colors:["#ffffff","#fff6d8","#d6f6ff"],size:[.14,.26],fall:[-.02,.04],additive:!0,opacity:.85,blink:!0},frosting:{count:40,tex:"sprinkle",colors:["#ff5d8f","#ffd166","#06d6a0","#118ab2","#9b5de5","#ffffff"],size:[.16,.22],fall:[-.55,-.3],additive:!1,opacity:1},night:{count:44,tex:"glow",colors:["#fff7a8","#d9ff8a","#a8fff0"],size:[.14,.24],fall:[-.05,.05],additive:!0,opacity:1,blink:!0},snow:{count:70,tex:"flake",colors:["#ffffff","#f2f9ff"],size:[.1,.2],fall:[-.5,-.28],additive:!1,opacity:.95},magic:{count:46,tex:"sparkle",colors:["#fff3b0","#ffc6ff","#bdf4ff","#ffffff"],size:[.14,.28],fall:[.05,.18],additive:!0,opacity:.95,blink:!0}};function ka(s,t=64){const e=document.createElement("canvas");e.width=e.height=t,s(e.getContext("2d"),t);const n=new Ei(e);return n.colorSpace=ye,n}const G2={glow:()=>ol("rgba(255,255,255,1)","rgba(255,255,255,0)",64),sparkle:()=>Kh(64),leaf:()=>ka((s,t)=>{s.fillStyle="#ffffff",s.beginPath(),s.moveTo(t*.08,t*.5),s.quadraticCurveTo(t*.5,t*.02,t*.92,t*.5),s.quadraticCurveTo(t*.5,t*.98,t*.08,t*.5),s.fill(),s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=t*.04,s.beginPath(),s.moveTo(t*.1,t*.5),s.lineTo(t*.9,t*.5),s.stroke()}),sprinkle:()=>ka((s,t)=>{s.fillStyle="#ffffff",s.beginPath(),s.roundRect(t*.1,t*.36,t*.8,t*.28,t*.14),s.fill()}),flake:()=>ka((s,t)=>{const e=t/2,n=s.createRadialGradient(e,e,0,e,e,e);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.9)"),n.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=n,s.beginPath(),s.arc(e,e,e,0,Math.PI*2),s.fill()})};class W2{group=new Ie;mesh=null;motes=[];style=Xc.grass;box={x0:-10,x1:10,z0:-10,z1:10};m=new ee;q=new ze;qz=new ze;v=new P;s=new P;zAxis=new P(0,0,1);tmpC=new Ut;e=new mn;setTheme(t){this.dispose(),this.style=Xc[t.ground.kind];const e=this.style,n=new rs({map:G2[e.tex](),transparent:!0,depthWrite:!1,opacity:e.opacity,side:cn,blending:e.additive?Rs:ni});this.mesh=new Ze(new Je(1,1),n,e.count),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12,this.group.add(this.mesh),this.motes=[];for(let i=0;i<e.count;i++)this.motes.push(this.spawn(!0))}setLayout(t){const e=t.bounds;this.box={x0:e.minX-3,x1:e.maxX+3,z0:e.minZ-3,z1:e.maxZ+3}}spawn(t){const e=this.style,n=this.box,i=e.fall[1]<-.1,r=e.fall[0]>0;return{x:n.x0+Math.random()*(n.x1-n.x0),y:t?.3+Math.random()*5:i?5+Math.random()*1.5:r?.2:.3+Math.random()*5,z:n.z0+Math.random()*(n.z1-n.z0),vx:(Math.random()-.5)*.3,vy:e.fall[0]+Math.random()*(e.fall[1]-e.fall[0]),vz:(Math.random()-.5)*.2,phase:Math.random()*10,rot:Math.random()*Math.PI*2,spin:(Math.random()-.5)*3,size:e.size[0]+Math.random()*(e.size[1]-e.size[0]),rest:0,color:new Ut(e.colors[Math.floor(Math.random()*e.colors.length)])}}update(t,e,n){const i=this.mesh;if(!i)return;const r=this.style,a=this.box,o=Math.sin(e*.3)*.25;for(let l=0;l<this.motes.length;l++){let c=this.motes[l];c.phase+=t,c.rest>0?(c.rest-=t,c.rest<=0&&(c=this.motes[l]=this.spawn(!1))):(c.x+=(c.vx+o+Math.sin(c.phase*1.3)*.25)*t,c.z+=(c.vz+Math.cos(c.phase*.9)*.15)*t,c.y+=(c.vy+Math.sin(c.phase*2.1)*.08)*t,c.rot+=c.spin*t,c.y<.04&&(c.y=.04,c.rest=3+Math.random()*3),(c.y>7||c.x<a.x0-1||c.x>a.x1+1||c.z<a.z0-1||c.z>a.z1+1)&&(c=this.motes[l]=this.spawn(!1)));let h=r.blink?.55+.45*Math.sin(c.phase*3+l):1;c.rest>0&&(h*=Math.min(1,c.rest/1.5)),this.v.set(c.x,c.y,c.z),c.rest>0&&(r.tex==="leaf"||r.tex==="sprinkle")?this.q.setFromEuler(this.e.set(-Math.PI/2,0,c.rot)):this.q.copy(n.quaternion).multiply(this.qz.setFromAxisAngle(this.zAxis,c.rot));const f=c.size*(r.tex==="glow"||r.tex==="sparkle"?h:1);this.s.set(f,f,f),this.m.compose(this.v,this.q,this.s),i.setMatrixAt(l,this.m),i.setColorAt(l,this.tmpC.copy(c.color).multiplyScalar(r.additive?h:1))}i.count=this.motes.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}dispose(){if(!this.mesh)return;this.group.remove(this.mesh),this.mesh.geometry.dispose();const t=this.mesh.material;t.map?.dispose(),t.dispose(),this.mesh.dispose(),this.mesh=null}}const dr=typeof window<"u"&&(window.matchMedia?.("(pointer: coarse)").matches||(navigator.hardwareConcurrency??8)<=4);class X2{renderer;scene=new _h;camera=new Xr(-1,1,1,-1,.1,200);board;queue;ants;nest;fx=new B2;ambient=new W2;ground;layout;sim;level;sun;hemi;raycaster=new dd;ndc=new ot;cb;width=1;height=1;insets={top:70,bottom:110,left:0,right:0};tmp=new P;levelGroup=new Ie;zoomPunch=0;constructor(t,e){this.cb=e,this.renderer=new u2({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,dr?1.6:2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Es,this.renderer.toneMapping=ko,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=ye,t.appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("gl");const n=new Do(this.renderer);this.scene.environment=n.fromScene(new f2,.04).texture,this.scene.environmentIntensity=.42,n.dispose(),this.hemi=new ad("#fffaf0","#7a8f6a",.9),this.scene.add(this.hemi),this.sun=new hd("#fff4e0",2.9),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(dr?1024:2048,dr?1024:2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.02,this.sun.shadow.radius=4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.ground=new V2,this.scene.add(this.ground.group),this.scene.add(this.levelGroup),this.scene.add(this.fx.group),this.scene.add(this.ambient.group)}load(t,e,n){this.unload(),this.level=t,this.sim=e;const i=t.picture.palette,r=t.shape??$h(t.n);this.board=new y2(e,i,n.frame,r),this.board.cubes.castShadow=!dr,this.queue=new L2(e,i),this.nest=new O2(n.roof),this.ants=new F2(i,this.board,e,this.cb,r),this.levelGroup.add(this.board.group,this.queue.group,this.nest.group,this.ants.group),this.hemi.color.set(n.sky),this.hemi.groundColor.set(n.bounce),this.scene.background=new Ut(n.bg),this.ground.setTheme(n),this.ambient.setTheme(n),this.relayout(!0)}setSim(t){this.sim=t,this.queue.setSim(t),this.ants.setSim(t)}unload(){this.board&&(this.levelGroup.clear(),this.board.dispose(),this.queue.dispose(),this.ants.dispose(),this.nest.dispose())}resize(t,e){this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.sim&&this.relayout(!1)}relayout(t){const e=Math.max(100,this.width-this.insets.left-this.insets.right),n=Math.max(100,this.height-this.insets.top-this.insets.bottom),i=g2({aspect:e/n,w:this.sim.w,h:this.sim.h,slots:this.sim.slots.length,columns:this.sim.columns.length}),r=t||!this.layout||i.mode!==this.layout.mode||i.slot.length!==this.layout.slot.length;if(this.layout=i,r){this.board.setLayout(i),this.queue.setLayout(i),this.nest.setLayout(i),this.ants.setLayout(i);const a=this.nest.doorway(this.tmp);this.ants.setHome(this.nest.footprint(),{x:a.x,z:a.z})}this.fitCamera(e,n),this.ground.setLayout(i),this.ambient.setLayout(i)}fitCamera(t,e){const n=this.layout,i=n.bounds,r=Math.cos(n.tilt),a=Math.sin(n.tilt),o=i.maxX-i.minX,l=(i.maxZ-i.minZ)*r+.8*a,c=Math.max(o/t,l/e)*1.02,h=this.width*c/2,f=this.height*c/2,u=(i.minX+i.maxX)/2,d=(i.minZ+i.maxZ)/2,m=60;this.camera.position.set(u,m*r,d+m*a),this.camera.up.set(0,1,0),this.camera.lookAt(u,0,d);const _=(this.insets.bottom-this.insets.top)/2*c,g=(this.insets.right-this.insets.left)/2*c;this.camera.left=-h+g,this.camera.right=h+g,this.camera.top=f+_,this.camera.bottom=-f+_,this.camera.near=1,this.camera.far=m*2+20,this.camera.zoom=1,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.fx.setCamera(this.camera);const p=Math.max(o,i.maxZ-i.minZ)*.75+2;this.sun.position.set(u-8,22,d-10),this.sun.target.position.set(u,0,d);const v=this.sun.shadow.camera;v.left=-p,v.right=p,v.top=p,v.bottom=-p,v.near=1,v.far=60,v.updateProjectionMatrix()}pickBox(t,e){return this.ndc.set(t/this.width*2-1,-(e/this.height)*2+1),this.queue.group.updateMatrixWorld(),this.raycaster.setFromCamera(this.ndc,this.camera),this.queue.pick(this.raycaster)}toScreen(t){const e=this.tmp.copy(t).project(this.camera);return{x:(e.x+1)/2*this.width,y:(1-e.y)/2*this.height}}apply(t,e=.105){let n=!1;for(const i of t)switch(i.t){case"ant":{const r=i.box>=0?this.queue.boxTop(i.box,this.tmp):this.tmp.set(0,0,0);this.ants.spawn(r.clone(),i.cell,i.color,(i.due-this.sim.roundNo)*e);break}case"pickup":this.ants.pickup(i.cell);break;case"take":case"boxDone":case"reveal":case"thaw":n=!0;break}n?this.queue.syncFromSim(!0):this.queue.refreshLabels()}punch(){this.zoomPunch=1}update(t,e){this.board&&(this.board.update(t),this.queue.update(t,e),this.ants.update(t,e),this.nest.update(t),this.fx.update(t),this.ground.update(t,e),this.ambient.update(t,e,this.camera),this.zoomPunch>0&&(this.zoomPunch=Math.max(0,this.zoomPunch-t*2.5),this.camera.zoom=1+Math.sin(this.zoomPunch*Math.PI)*.015,this.camera.updateProjectionMatrix()),this.renderer.render(this.scene,this.camera))}isIdle(){return this.ants.count===0&&this.queue.isSettled()}dispose(){this.unload(),this.fx.dispose(),this.ambient.dispose(),this.ground.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}function q2(s,t,e,n){let i=0;for(const r of s.groupOf(t)){const a=s.boxColor(r),o=e[a]-(n?n[a]:0),l=s.boxCount(r);o>=l?i+=3e3+l:o>0?i+=1e3+o*8-l:i+=100-l-(n&&n[a]>0?50:0)}return i}function $2(s,t){const e=t??new Int32Array(s.s.colors);e.fill(0);for(const n of s.slots)n&&(e[s.boxColor(n.box)]+=n.left);return e}function Ha(s,t=6e4){const e=new Set,n=[],i=new Int32Array(s.s.colors),r=new Int32Array(s.s.colors);let a=0,o=!1;const l=f=>{if(f.settle(),f.status==="won")return!0;if(f.status==="stuck")return!1;const u=f.key();if(e.has(u))return!1;if(++a>t)return o=!0,!1;const d=f.legalMoves();f.exposedCounts(i),$2(f,r);const m=d.map(_=>[_,q2(f,_,i,r)]);m.sort((_,g)=>g[1]-_[1]);for(const[_]of m){const g=f.clone();if(g.take(_),n.push(_),l(g))return!0;if(n.pop(),o)return!1}return e.add(u),!1},c=s.clone();c.status==="stuck"&&c.unstick();const h=l(c);return{status:h?"solved":o?"unknown":"unsolvable",moves:h?n.slice():[],nodes:a}}const Me=s=>440*Math.pow(2,(s-69)/12),Y2={antOut:.07,pick:.05,deliver:.06,tap:.03,pop:.04},pr=[{bpm:92,root:60,chords:[[0,4,7],[7,11,14],[9,12,16],[5,9,12]],scale:[0,2,4,7,9],lead:"marimba",pad:"triangle",padCut:1400,density:.62,sparkle:.1,swing:.06},{bpm:80,root:57,chords:[[0,3,7],[-4,0,3],[3,7,10],[-2,2,5]],scale:[0,3,5,7,10],lead:"kalimba",pad:"sawtooth",padCut:900,density:.52,sparkle:.05,swing:.08},{bpm:84,root:62,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"flute",pad:"triangle",padCut:1200,density:.5,sparkle:.08,swing:.1},{bpm:104,root:65,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"pluck",pad:"square",padCut:1e3,density:.72,sparkle:.12,swing:.12},{bpm:72,root:64,chords:[[0,3,7,10],[-4,0,3,7],[3,7,10,14],[-2,2,5,9]],scale:[0,2,3,7,10],lead:"bell",pad:"sawtooth",padCut:700,density:.42,sparkle:.25,swing:0},{bpm:76,root:67,chords:[[0,4,7],[-3,0,4],[-7,-3,0],[-5,-1,2]],scale:[0,2,4,7,9],lead:"bell",pad:"triangle",padCut:1100,density:.5,sparkle:.3,swing:.04},{bpm:84,root:62,chords:[[0,3,7],[-2,2,5],[-5,-2,2],[-7,-3,0]],scale:[0,2,3,5,7,9],lead:"harp",pad:"sawtooth",padCut:1e3,density:.66,sparkle:.2,swing:.05}];class Z2{s;constructor(t){this.s=t>>>0||1}next(){return this.s^=this.s<<13,this.s^=this.s>>>17,this.s^=this.s<<5,(this.s>>>0)/4294967296}}class J2{constructor(t,e,n){this.eng=t,this.th=e;const i=t.ctx;this.out=i.createGain(),this.out.gain.value=0,this.out.gain.linearRampToValueAtTime(1,i.currentTime+2.5),this.out.connect(t.musicBus),this.rng=new Z2(n),this.nextBar=i.currentTime+.15,this.timer=window.setInterval(()=>this.schedule(),60),this.schedule()}eng;th;out;timer=0;nextBar;bar=0;lastNote=0;rng;stopped=!1;get barLen(){return 60/this.th.bpm*4}schedule(){const t=this.eng.ctx;if(!(!t||this.stopped))for(;this.nextBar<t.currentTime+.35;)this.playBar(this.nextBar,this.bar),this.nextBar+=this.barLen,this.bar++}playBar(t,e){const n=this.th,i=60/n.bpm,r=n.chords[e%n.chords.length],a=n.root;for(const c of r)this.eng.padVoice(this.out,Me(a+c-12),t,this.barLen,n.pad,n.padCut);this.eng.bassNote(this.out,Me(a+r[0]-24),t,i*1.6),(e%2===1||this.rng.next()<.5)&&this.eng.bassNote(this.out,Me(a+r[0]-24+(this.rng.next()<.3?7:0)),t+i*2,i*1.4);const o=e%4===3?n.density*.55:n.density,l=n.scale;for(let c=0;c<8;c++){if(this.rng.next()>o)continue;let h;if(c%4===0&&this.rng.next()<.7)h=r[Math.floor(this.rng.next()*r.length)];else{const m=Math.round((this.rng.next()-.5)*3);this.lastNote=Math.max(0,Math.min(l.length*2-1,this.lastNote+m)),h=l[this.lastNote%l.length]+12*Math.floor(this.lastNote/l.length)}const f=c%2===1?n.swing*i:0,u=t+c*(i/2)+f,d=a+h+(n.lead==="bell"?12:0);this.eng.leadNote(this.out,n.lead,Me(d),u,i*(.4+this.rng.next()*.5)),n.lead==="harp"&&this.rng.next()<.35&&this.eng.leadNote(this.out,"harp",Me(d+7),u+i/4,i*.4)}if(this.rng.next()<n.sparkle*3){const c=t+Math.floor(this.rng.next()*8)*(i/2);this.eng.sparkleNote(this.out,Me(a+24+l[Math.floor(this.rng.next()*l.length)]),c)}}stop(t){const e=this.eng.ctx;if(this.stopped=!0,clearInterval(this.timer),!e)return;const n=this.out.gain;n.cancelScheduledValues(e.currentTime),n.setValueAtTime(n.value,e.currentTime),n.linearRampToValueAtTime(0,e.currentTime+t),setTimeout(()=>this.out.disconnect(),(t+.5)*1e3)}}class K2{ctx=null;master=null;sfxBus=null;musicBus=null;duckGain=null;reverb=null;noiseBuf=null;last=new Map;sfxVol=.8;musicVol=.5;wantTheme=null;song=null;songTheme=-1;suspendedByHide=!1;get ready(){return!!this.ctx&&this.ctx.state==="running"}unlock(){try{this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume(),this.wantTheme!==null&&!this.song&&this.startMusic(this.wantTheme)}catch{}}init(){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t({latencyHint:"interactive"});this.ctx=e;const n=e.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=12,n.ratio.value=4,n.attack.value=.004,n.release.value=.25,n.connect(e.destination),this.master=e.createGain(),this.master.gain.value=.9,this.master.connect(n),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.duckGain=e.createGain(),this.duckGain.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicVol*.42,this.musicBus.connect(this.duckGain),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(2.4,2.6);const i=e.createGain();i.gain.value=.55,this.reverb.connect(i),i.connect(this.master);const r=e.sampleRate;this.noiseBuf=e.createBuffer(1,r,e.sampleRate);const a=this.noiseBuf.getChannelData(0);for(let o=0;o<r;o++)a[o]=Math.random()*2-1;document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.state==="running"&&(this.suspendedByHide=!0,this.ctx.suspend()):this.suspendedByHide&&(this.suspendedByHide=!1,this.ctx.resume()))})}impulse(t,e){const n=this.ctx,i=Math.floor(n.sampleRate*t),r=n.createBuffer(2,i,n.sampleRate);for(let a=0;a<2;a++){const o=r.getChannelData(a);for(let l=0;l<i;l++)o[l]=(Math.random()*2-1)*Math.pow(1-l/i,e)}return r}setSfxVolume(t){this.sfxVol=t,this.sfxBus&&this.ctx&&this.sfxBus.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}setMusicVolume(t){this.musicVol=t,this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(t*.42,this.ctx.currentTime,.1)}duck(t,e){const n=this.ctx;if(!n||!this.duckGain)return;const i=this.duckGain.gain,r=n.currentTime;i.cancelScheduledValues(r),i.setValueAtTime(i.value,r),i.linearRampToValueAtTime(t,r+.15),i.setValueAtTime(t,r+e),i.linearRampToValueAtTime(1,r+e+1.2)}startMusic(t){this.wantTheme=t,!(!this.ctx||!this.musicBus)&&(this.song&&this.songTheme===t||(this.song?.stop(1.5),this.songTheme=t,this.song=new J2(this,pr[(t%pr.length+pr.length)%pr.length],1234+t*77+Math.floor(Math.random()*1e3))))}stopMusic(t=1){this.wantTheme=null,this.song?.stop(t),this.song=null,this.songTheme=-1}dest(t,e,n){const i=this.ctx;let r=n;if(t!==0&&i.createStereoPanner){const a=i.createStereoPanner();a.pan.value=t,a.connect(n),r=a}if(e>0&&this.reverb){const a=i.createGain();a.gain.value=e,a.connect(this.reverb);const o=i.createGain();return o.connect(r),o.connect(a),o}return r}tone(t,e,n,i={},r){const a=this.ctx,o=a.createOscillator();o.type=i.type??"sine",o.frequency.setValueAtTime(t,e),i.glide&&o.frequency.exponentialRampToValueAtTime(Math.max(20,i.glide),e+n*.8),i.detune&&(o.detune.value=i.detune);const l=a.createGain(),c=i.gain??.3,h=i.attack??.005,f=i.decay??n;l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(c,e+h),l.gain.exponentialRampToValueAtTime(1e-4,e+h+f);let u=o;if(i.filter){const d=a.createBiquadFilter();d.type="lowpass",d.frequency.value=i.filter,o.connect(d),u=d}u.connect(l),l.connect(this.dest(i.pan??0,i.wet??0,r??this.sfxBus)),o.start(e),o.stop(e+h+f+.05)}noise(t,e,n={}){const i=this.ctx,r=i.createBufferSource();r.buffer=this.noiseBuf,r.playbackRate.value=.8+Math.random()*.4;const a=i.createBiquadFilter();a.type=n.type??"bandpass",a.frequency.setValueAtTime(n.freq??2e3,t),n.freqTo&&a.frequency.exponentialRampToValueAtTime(n.freqTo,t+e),a.Q.value=n.q??1;const o=i.createGain(),l=n.attack??.003;o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(n.gain??.2,t+l),o.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(e,l+.01)),r.connect(a),a.connect(o),o.connect(this.dest(n.pan??0,n.wet??0,this.sfxBus)),r.start(t,Math.random()*.5),r.stop(t+e+.05)}fm(t,e,n,i,r,a,o,l,c=0){const h=this.ctx,f=h.createOscillator(),u=h.createOscillator(),d=h.createGain();f.frequency.value=t,u.frequency.value=t*i,d.gain.setValueAtTime(t*r,e),d.gain.exponentialRampToValueAtTime(Math.max(1,t*r*.02),e+n*.6),u.connect(d),d.connect(f.frequency);const m=h.createGain();m.gain.setValueAtTime(1e-4,e),m.gain.linearRampToValueAtTime(a,e+.004),m.gain.exponentialRampToValueAtTime(1e-4,e+n),f.connect(m),m.connect(this.dest(c,o,l??this.sfxBus)),f.start(e),u.start(e),f.stop(e+n+.05),u.stop(e+n+.05)}padVoice(t,e,n,i,r,a){const o=this.ctx,l=o.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(a*.6,n),l.frequency.linearRampToValueAtTime(a,n+i*.5),l.frequency.linearRampToValueAtTime(a*.7,n+i);const c=o.createGain(),h=r==="sawtooth"||r==="square"?.028:.05;c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(h,n+i*.3),c.gain.linearRampToValueAtTime(h*.7,n+i*.85),c.gain.linearRampToValueAtTime(1e-4,n+i+.25),l.connect(c),c.connect(this.dest(0,.5,t));for(const f of[-7,7]){const u=o.createOscillator();u.type=r,u.frequency.value=e,u.detune.value=f,u.connect(l),u.start(n),u.stop(n+i+.3)}}bassNote(t,e,n,i){this.tone(e,n,i,{type:"triangle",gain:.13,attack:.02,decay:i,filter:600},t)}leadNote(t,e,n,i,r){const a=(Math.random()-.5)*.5;switch(e){case"marimba":this.fm(n,i,.55,4,.9,.11,.25,t,a);break;case"kalimba":this.fm(n,i,.8,5.4,.6,.1,.3,t,a);break;case"bell":this.fm(n,i,1.6,3.5,1.2,.06,.5,t,a);break;case"harp":this.tone(n,i,.9,{type:"triangle",gain:.09,attack:.004,decay:.9,pan:a,wet:.4,filter:3e3},t);break;case"pluck":this.tone(n,i,.25,{type:"square",gain:.05,attack:.003,decay:.22,pan:a,wet:.2,filter:1800},t);break;case"flute":this.tone(n,i,r,{type:"sine",gain:.075,attack:.06,decay:r+.2,pan:a,wet:.45},t);break}}sparkleNote(t,e,n){this.fm(e,n,1.2,7.1,.4,.03,.8,t,(Math.random()-.5)*.8)}play(t,e={}){const n=this.ctx;if(!n||n.state!=="running"||this.sfxVol<=.001)return;const i=n.currentTime,r=Y2[t];if(r){const a=this.last.get(t)??0;if(i-a<r)return}this.last.set(t,i);try{this.sfx(t,i+.005,e)}catch{}}sfx(t,e,n){const i=n.volume??1,r=n.pan??0,a=o=>1+(Math.random()-.5)*o;switch(t){case"tap":this.tone(760*a(.1),e,.07,{gain:.16*i,glide:520,pan:r}),this.noise(e,.025,{type:"highpass",freq:3e3,gain:.05*i});break;case"button":this.tone(1100,e,.05,{gain:.1*i,glide:800}),this.noise(e,.02,{type:"highpass",freq:4e3,gain:.04*i});break;case"place":this.tone(250*a(.08),e,.16,{type:"sine",gain:.32*i,glide:120,pan:r}),this.noise(e,.08,{type:"lowpass",freq:900,gain:.12*i}),this.tone(1320,e+.02,.1,{type:"sine",gain:.03*i,wet:.3});break;case"invalid":this.tone(210,e,.09,{type:"triangle",gain:.16*i,filter:700}),this.tone(170,e+.09,.12,{type:"triangle",gain:.16*i,filter:600});break;case"antOut":this.noise(e,.012,{type:"highpass",freq:5e3*a(.3),gain:.025*i,pan:(Math.random()-.5)*.6});break;case"pick":this.noise(e,.035,{type:"bandpass",freq:2200*a(.5),q:3,gain:.07*i,pan:(Math.random()-.5)*.8}),this.tone(1100*a(.3),e,.03,{gain:.025*i});break;case"deliver":this.tone(620*a(.25),e,.07,{gain:.045*i,glide:980,wet:.1});break;case"boxDone":{this.tone(300*a(.08),e,.13,{type:"sine",gain:.15*i,glide:560,attack:.006}),this.noise(e,.05,{type:"lowpass",freq:700,gain:.05*i});const o=[67,69,72,74][Math.floor(Math.random()*4)];this.tone(Me(o),e+.06,.55,{type:"triangle",gain:.075*i,attack:.006,decay:.5,filter:1500,wet:.25}),this.tone(Me(o+7),e+.12,.6,{type:"sine",gain:.05*i,attack:.008,decay:.55,wet:.3});break}case"reveal":[84,88,91,96].forEach((o,l)=>this.fm(Me(o),e+l*.045,.6,5.1,.5,.05*i,.6));break;case"thaw":for(let o=0;o<6;o++)this.noise(e+o*.025+Math.random()*.02,.03,{type:"highpass",freq:3500+Math.random()*3e3,gain:.08*i});[91,96,100].forEach((o,l)=>this.fm(Me(o),e+.12+l*.05,.5,6,.4,.035*i,.6));break;case"link":this.fm(1250,e,.25,3.47,1.4,.07*i,.2),this.fm(1580,e+.06,.3,3.47,1.4,.06*i,.2),this.tone(230,e,.14,{gain:.2*i,glide:120});break;case"win":{[72,76,79,84].forEach((c,h)=>this.fm(Me(c),e+h*.12,.7,4,.9,.12*i,.3));const l=e+.55;[60,64,67,72,76].forEach(c=>this.tone(Me(c),l,1.8,{type:"triangle",gain:.06*i,attack:.05,decay:1.8,wet:.5,filter:2500})),[88,91,96].forEach((c,h)=>this.fm(Me(c),l+.1+h*.09,1.2,3.5,.9,.05*i,.6));break}case"lose":[67,64,60,55].forEach((o,l)=>this.tone(Me(o),e+l*.22,.4,{type:"triangle",gain:.12*i,attack:.02,decay:.45,filter:1200,wet:.3}));break;case"star":{const o=[88,91,95][Math.max(0,Math.min(2,Math.round(n.pitch??0)))];this.fm(Me(o),e,1.1,3.5,1,.1*i,.5),this.tone(Me(o+12),e,.4,{gain:.03*i,wet:.5});break}case"coin":this.tone(Me(95),e,.08,{type:"square",gain:.045*i,filter:4e3}),this.tone(Me(100),e+.07,.3,{type:"square",gain:.045*i,filter:4e3,wet:.3});break;case"booster":this.noise(e,.35,{type:"bandpass",freq:500,freqTo:5e3,q:2,gain:.08*i,attack:.1}),[84,88,91,96,100].forEach((o,l)=>this.fm(Me(o),e+.1+l*.04,.5,5,.4,.04*i,.6));break;case"shuffle":for(let o=0;o<7;o++)this.noise(e+o*.045,.04,{type:"bandpass",freq:1800+Math.random()*1500,q:1.5,gain:.09*i});break;case"undo":this.noise(e,.3,{type:"bandpass",freq:4e3,freqTo:400,q:1.5,gain:.1*i,attack:.22}),this.tone(900,e+.05,.25,{gain:.05*i,glide:300});break;case"hint":this.fm(Me(81),e,1.4,3.5,1,.08*i,.6),this.fm(Me(88),e+.15,1.4,3.5,1,.06*i,.6);break;case"unlock":[79,84,88,91,96].forEach((o,l)=>this.fm(Me(o),e+l*.07,.8,4,.8,.08*i,.4));break;case"whoosh":this.noise(e,.25,{type:"bandpass",freq:300,freqTo:2400,q:.8,gain:.05*i,attack:.08});break;case"pop":this.tone(420*a(.2),e,.08,{gain:.14*i,glide:950});break}}}const Ft=new K2,Va=.105;class Q2{level;sim;view;hooks;acc=0;speed=1;paused=!1;history=[];boostersUsed=0;taps=0;finished=null;stuckPending=!1;winPending=!1;total;eaten=0;grabMode=!1;hintId=null;rng;lastDeliverSfx=0;constructor(t,e,n,i){this.view=t,this.level=e,this.hooks=i,this.sim=kr.fromLevel(e),this.total=this.sim.left,this.rng=new al(e.n*7919+13),t.load(e,this.sim,n)}get progress(){return this.total?this.eaten/this.total:0}get canUndo(){return this.history.length>0&&this.finished!=="won"}get status(){return this.finished??"playing"}onPick(){Ft.play("pick")}onDeliver(){this.eaten++,this.view.nest.gulp();const t=performance.now();t-this.lastDeliverSfx>70&&(this.lastDeliverSfx=t,Ft.play("deliver")),this.hooks.onProgress(this.eaten,this.total)}tap(t,e){if(this.paused||this.finished==="won")return;const n=this.view.pickBox(t,e);if(n===null)return;if(Ft.play("tap"),this.grabMode){this.doGrab(n);return}const i=this.sim.whyNot(n);if(i!=="ok"){this.view.queue.shake(n),Ft.play("invalid"),i!=="gone"&&this.hooks.onToast(i);return}this.pushHistory();const r=[];this.sim.take(n,r),this.taps++,this.afterAction(r);const a=this.sim.groupOf(n);Ft.play(a.length>1?"link":"place")}takeBox(t){if(this.paused||this.finished==="won"||!this.sim.canTake(t))return!1;this.pushHistory();const e=[];return this.sim.take(t,e),this.taps++,this.afterAction(e),Ft.play(this.sim.groupOf(t).length>1?"link":"place"),!0}autoStep(){if(this.finished==="won"||this.sim.status==="won")return"done";if(this.paused||!this.sim.isQuiet())return"wait";const t=this.sim.clone();t.unstick(),t.settle();const e=Ha(t,2e4);return e.status!=="solved"||!e.moves.length?e.status==="solved"?"done":"stuck":(this.finished==="stuck"&&(this.finished=null,this.sim.unstick()),this.takeBox(e.moves[0])?"moved":"wait")}hoverId=null;hover(t,e){const n=t<0||this.paused?null:this.view.pickBox(t,e);return n!==this.hoverId&&(this.hoverId=n,this.refreshHover()),n}refreshHover(){const t=this.hoverId;if(t===null||this.sim.boxHidden[t]){this.view.board.highlight(null);return}const e=this.sim.boxColor(t);this.view.board.highlight(this.sim.exposedCells().filter(n=>this.sim.cellColor(n)===e&&this.view.board.isPresent(n)))}pushHistory(){this.history.push(this.sim.clone()),this.history.length>60&&this.history.shift()}afterAction(t){this.setHint(null),this.view.apply(t);for(const e of t)if(e.t==="reveal")Ft.play("reveal"),this.sparkleBox(e.box,"#ffffff");else if(e.t==="thaw"){Ft.play("thaw");const n=this.view.queue.boxTop(e.box,new P);this.view.fx.shards(n.x,n.y,n.z)}this.finished==="stuck"&&(this.finished=null,this.sim.unstick()),this.stuckPending=!1,this.hooks.onChange(this)}sparkleBox(t,e){const n=this.view.queue.boxTop(t,new P);this.view.fx.sparkle(n.x,n.y+.2,n.z,e,12,1)}update(t,e){if(!this.paused&&this.sim.status==="playing"){this.acc+=t*this.speed;let n=0;for(;this.acc>=Va&&n++<8;){this.acc-=Va;const i=[],r=this.sim.round(i);if(i.length&&this.handleRound(i),r===0){this.acc=0,this.sim.checkStuck()&&(this.stuckPending=!0);break}}}this.view.ants.speed=this.speed,this.view.update(this.paused?0:t,e),this.winPending&&this.view.isIdle()&&(this.winPending=!1,this.finished="won",this.hooks.onWin(this)),this.stuckPending&&this.view.isIdle()&&this.sim.status==="stuck"&&(this.stuckPending=!1,this.finished="stuck",this.view.queue.pulseSlots(),this.hooks.onStuck(this))}handleRound(t){this.view.apply(t,Va),this.hoverId!==null&&this.refreshHover();let e=0;for(const n of t)if(n.t==="ant")e++;else if(n.t==="boxDone"){Ft.play("boxDone");const i=this.view.layout.slot[n.slot];this.view.fx.sparkle(i.x,.8,i.z,this.view.queue.boxColor(n.box),14,1.1),this.hooks.onChange(this)}else n.t==="won"&&(this.winPending=!0,this.hooks.onChange(this));e&&Ft.play("antOut")}canUse(t){if(this.finished==="won")return!1;switch(t){case"undo":return this.history.length>0;case"slot":return this.sim.slots.length<7;case"shuffle":return this.sim.queueSize()>1;case"grab":return this.sim.queueSize()>0&&this.sim.freeSlots()>0;case"hint":return this.sim.queueSize()>0}}use(t){if(!this.canUse(t))return!1;let e=!0;switch(t){case"undo":e=this.undo();break;case"slot":this.sim.addSlot(),this.view.relayout(!0),this.view.queue.syncFromSim(!1),this.afterAction([]);break;case"shuffle":e=this.smartShuffle();break;case"grab":return this.grabMode=!0,this.hooks.onToast("grab"),this.hooks.onChange(this),!0;case"hint":e=this.hint();break}return e&&(this.boostersUsed++,Ft.play(t==="undo"?"undo":t==="shuffle"?"shuffle":t==="hint"?"hint":"booster")),e}cancelGrab(){this.grabMode=!1,this.hooks.onChange(this)}doGrab(t){this.pushHistory();const e=[];if(!this.sim.grab(t,e)){this.history.pop(),this.view.queue.shake(t),Ft.play("invalid");return}this.grabMode=!1,this.boostersUsed++,Ft.play("booster"),this.sparkleBox(t,"#fff6a8"),this.afterAction(e)}undo(){const t=this.history.pop();return t?(this.sim=t,this.sim.flushPending(),this.view.ants.fadeAll(),this.rebindView(),this.finished=null,this.stuckPending=!1,this.winPending=!1,this.eaten=this.total-this.sim.left,this.hooks.onProgress(this.eaten,this.total),this.hooks.onChange(this),!0):!1}rebindView(){const t=this.view;t.setSim(this.sim),t.board.syncFrom(this.sim,!0),t.queue.syncFromSim(!0),t.relayout(!0),t.queue.syncFromSim(!1)}smartShuffle(){this.pushHistory();const t=this.sim.clone();t.unstick();let e=null,n=-1/0;for(let r=0;r<14;r++){const a=t.clone();a.shuffle(this.rng);const o=a.clone(),l=Ha(o,1500),c=(l.status==="solved"?1e3:l.status==="unknown"?200:0)+a.legalMoves().length*10+this.rng.next();if(c>n&&(n=c,e=a),l.status==="solved"&&r>=3)break}const i=[];return this.sim=e,this.rebindView(),this.afterAction(i),!0}hint(){const t=this.sim.clone();t.unstick(),t.settle();const e=Ha(t,4e3);return e.status==="solved"&&e.moves.length?(this.setHint(e.moves[0]),!0):(this.hooks.onToast("nohint"),!1)}setHint(t){this.hintId=t,this.view.queue.setHint(t)}get hinted(){return this.hintId}stars(t){return t?1:this.boostersUsed===0?3:2}celebrate(){const t=this.view.layout,e=t.picX0+t.picW/2,n=t.picZ0+t.picH/2;return this.view.fx.confetti(e,1.5,n,180,5),this.view.punch(),this.view.board.rebuild()}dispose(){this.view.unload()}}const wn=[{id:"meadow",name:{en:"Sunny Meadow",ru:"Солнечный луг"},bg:"#7fbf5a",sky:"#fffbea",bounce:"#6f9a4d",frame:"#f1d39c",soil:"#b07a4b",roof:"#e8674a",ground:{kind:"grass",base:"#86c45b",tints:["#9ad26a","#77b64f","#a7da78","#6fae4a"],detail:["#5f9f3e","#a9dc7b","#8fca60","#4f8c34","#b8e58a"],accents:["#ffffff","#ffe14d","#ff8fb1","#b9a3ff"]},ui:{top:"#bfe9ff",bottom:"#9edc6f",accent:"#ff9f1c",path:"#f3dfb4"},music:0},{id:"forest",name:{en:"Whispering Forest",ru:"Шепчущий лес"},bg:"#3f6b3a",sky:"#f3ffe6",bounce:"#44613a",frame:"#d8b07a",soil:"#8a5a36",roof:"#c4563a",ground:{kind:"forest",base:"#4f7d3e",tints:["#5d8c47","#436d35","#6a8f45","#3b5f2f"],detail:["#7aa04f","#35572a","#8cae5b","#2f4d25"],accents:["#e0703a","#f2b84b","#c9502e","#a7c957"]},ui:{top:"#cdeccf",bottom:"#4f7d3e",accent:"#f2b84b",path:"#d9c29a"},music:1},{id:"sea",name:{en:"Seashell Beach",ru:"Пляж ракушек"},bg:"#f1dca8",sky:"#f4fbff",bounce:"#d9c28f",frame:"#ffffff",soil:"#c9a26b",roof:"#3a9fd8",ground:{kind:"sand",base:"#f1dba6",tints:["#f6e4b8","#e9cf94","#fbeac2","#e3c686"],detail:["#d8bb7e","#fff4d6","#cfae6d","#e7cf9b"],accents:["#ffb4a2","#ffffff","#9ad1d4","#ffd6a5"]},ui:{top:"#8fd8f4",bottom:"#f1dba6",accent:"#ff7b7b",path:"#fff1cf"},music:2},{id:"sweets",name:{en:"Candy Town",ru:"Конфетный город"},bg:"#f7c6dc",sky:"#fff5fb",bounce:"#e8a8c6",frame:"#fff0f6",soil:"#9c5b3b",roof:"#ff7eb6",ground:{kind:"frosting",base:"#f9cfe2",tints:["#fbdbe9","#f5bfd7","#fde6f0","#f2b3cf"],detail:["#ffffff","#f7a8c9"],accents:["#ff5d8f","#ffd166","#06d6a0","#118ab2","#9b5de5","#ffffff"]},ui:{top:"#ffd6e8",bottom:"#f9cfe2",accent:"#ff5d8f",path:"#fff7fb"},music:3},{id:"space",name:{en:"Starry Night",ru:"Звёздная ночь"},bg:"#1d2340",sky:"#c9d4ff",bounce:"#2b2f55",frame:"#c7b8ff",soil:"#5b4a7a",roof:"#7b6cf0",ground:{kind:"night",base:"#2a3358",tints:["#303b66","#232c4d","#36427a","#1f2745"],detail:["#3d4a82","#1b2240","#4a5a96"],accents:["#fff7c2","#a0f0ff","#ffc2f0"]},ui:{top:"#101631",bottom:"#2a3358",accent:"#ffd166",path:"#c7b8ff"},music:4},{id:"winter",name:{en:"Snowy Hills",ru:"Снежные холмы"},bg:"#e9f3fb",sky:"#ffffff",bounce:"#b9d3e8",frame:"#cfe3f3",soil:"#8c6a55",roof:"#d94f4f",ground:{kind:"snow",base:"#eef5fb",tints:["#f7fbff","#e2edf7","#ffffff","#d9e7f3"],detail:["#cfe0ee","#ffffff"],accents:["#ffffff","#bfe3ff","#ffd6e0"]},ui:{top:"#cfe9ff",bottom:"#eef5fb",accent:"#4ea8de",path:"#ffffff"},music:5},{id:"fantasy",name:{en:"Enchanted Glade",ru:"Волшебная поляна"},bg:"#6c4fa3",sky:"#fff0ff",bounce:"#6a4f95",frame:"#f3d6ff",soil:"#7b4e8e",roof:"#a55eea",ground:{kind:"magic",base:"#8a6cc2",tints:["#9b7fd0","#7c5db4","#a78ad8","#6f52a6"],detail:["#b49be0","#6a4c9c","#c7b2ec"],accents:["#fff3b0","#ffc6ff","#bdf4ff","#ffffff"]},ui:{top:"#d7c2ff",bottom:"#8a6cc2",accent:"#ffcf56",path:"#f3e6ff"},music:6}];function ei(s){return wn[(s%wn.length+wn.length)%wn.length]}function rt(s,t={},...e){const n=document.createElement(s);if(t.class&&(n.className=t.class),t.html!==void 0&&(n.innerHTML=t.html),t.text!==void 0&&(n.textContent=t.text),t.style&&n.setAttribute("style",t.style),t.attrs)for(const[i,r]of Object.entries(t.attrs))n.setAttribute(i,r);if(t.on)for(const[i,r]of Object.entries(t.on))n.addEventListener(i,r);for(const i of e)i&&n.append(i);return n}function Hr(s,t,e){const n=rt("button",{class:"btn "+t,html:s});return n.addEventListener("click",i=>{i.stopPropagation(),Ft.unlock(),Ft.play("button"),e()}),n}const j2={"light-bulb":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M17.651 22.27h-3.89c-.79 0-1.44.64-1.43 1.43v3.89c0 .79.64 1.43 1.43 1.43h.248a1.94 1.94 0 0 0 3.384 0h.258c.79 0 1.43-.64 1.43-1.43V23.7c0-.79-.64-1.43-1.43-1.43"/><path fill="#fcd53f" d="M18.161 23.13c.24 0 .43-.18.45-.41c.07-.86.44-2.95 2.46-5.19a8.66 8.66 0 0 0 3.29-6.31c.02-.24.03-.4.03-.5v-.1c-.06-4.78-3.93-8.62-8.7-8.62a8.69 8.69 0 0 0-8.69 8.6s-.01.24.03.64c.16 2.54 1.4 4.79 3.29 6.28c2.02 2.25 2.42 4.34 2.49 5.2c.02.23.21.41.45.41z"/><path fill="#ffb02e" d="M15.701 10.7c1.62 0 2.94 1.31 2.96 2.93v.08c0 .03 0 .07-.01.13c-.05.84-.46 1.63-1.12 2.15l-.07.05l-.06.06c-1.1 1.22-1.33 4.32-1.37 6.02h-.65c-.05-1.7-.29-4.8-1.39-6.02l-.06-.06l-.07-.05a2.96 2.96 0 0 1-1.12-2.17c0-.04-.01-.07-.01-.09v-.09c.03-1.62 1.36-2.94 2.97-2.94m0-1a3.96 3.96 0 0 0-2.45 7.07c1.2 1.34 1.14 6.36 1.14 6.36h2.64s-.08-5.02 1.13-6.35c.86-.68 1.43-1.71 1.5-2.88c.01-.11.01-.18.01-.23v-.04a3.97 3.97 0 0 0-3.97-3.93"/><path fill="#d3d3d3" d="M19.167 25.053a.5.5 0 1 0-.172-.986l-6.74 1.18a.5.5 0 1 0 .172.986zm-.05 2.15a.5.5 0 0 0-.172-.985l-6.65 1.17a.5.5 0 1 0 .173.984z"/><path fill="#fff478" d="M13.791 5.44c-1.11 1.92-.55 4.32 1.25 5.35s4.15.32 5.26-1.6s.55-4.32-1.25-5.35s-4.15-.32-5.26 1.6"/></g></svg>',magnet:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M11 23v6.06c0 .52-.42.94-.94.94H3.94c-.52 0-.94-.42-.94-.94V23l4.028-2.152zm18 0v6.06c0 .52-.42.94-.94.94h-6.12c-.52 0-.94-.42-.94-.94V23l3.99-2.152z"/><path fill="#f8312f" d="M11 23v-7.94c0-2.75 2.2-5.04 4.95-5.06c2.78-.03 5.05 2.23 5.05 5v8h8v-8c0-7.18-5.82-13-13-13S3 7.82 3 15v8z"/></g></svg>',coin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14"/><path fill="#d3883e" d="M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16S9.925 5 16 5s11 4.925 11 11m-4.68 3.89a.54.54 0 0 0-.51-.37h.03v-7.76c.43-.28.51-.97-.01-1.28l-5.39-3.26a.73.73 0 0 0-.78 0l-5.4 3.26c-.52.31-.44 1-.02 1.28v7.77h-.11c-.24 0-.45.16-.51.39l-.35 1.25c-.1.34.16.68.51.68h12.45c.35-.01.61-.36.5-.71zM11.9 11.88v7.64h1.66v-7.64zm3.31 0v7.64h1.69v-7.64zm3.35 0v7.64h1.62v-7.64z" opacity=".53"/></g></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fcd53f" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.23 2.23 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.28 2.28 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0"/></svg>',"glowing-star":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#fcd53f"><path d="m28.979 17.003l-3.108.214c-.834.06-1.178 1.079-.542 1.608l2.388 1.955c.521.428 1.314.204 1.523-.428l.709-2.127c.219-.632-.292-1.273-.97-1.222M21.75 2.691l-.72 2.9c-.2.78.66 1.41 1.34.98l2.54-1.58c.55-.34.58-1.14.05-1.52l-1.78-1.29a.912.912 0 0 0-1.43.51M6.43 4.995l2.53 1.58c.68.43 1.54-.19 1.35-.98l-.72-2.9a.92.92 0 0 0-1.43-.52l-1.78 1.29c-.53.4-.5 1.19.05 1.53M4.185 20.713l2.29-1.92c.62-.52.29-1.53-.51-1.58l-2.98-.21a.92.92 0 0 0-.94 1.2l.68 2.09c.2.62.97.84 1.46.42m13.61 7.292l-1.12-2.77c-.3-.75-1.36-.75-1.66 0l-1.12 2.77c-.24.6.2 1.26.85 1.26h2.2a.92.92 0 0 0 .85-1.26"/><path d="m17.565 3.324l1.726 3.72c.326.694.967 1.18 1.717 1.29l4.056.624c1.835.278 2.575 2.53 1.293 3.859L23.268 16a2.28 2.28 0 0 0-.612 1.964l.71 4.374c.307 1.885-1.687 3.293-3.354 2.37l-3.405-1.894a2.25 2.25 0 0 0-2.21 0l-3.404 1.895c-1.668.922-3.661-.486-3.355-2.37l.71-4.375A2.28 2.28 0 0 0 7.736 16l-3.088-3.184c-1.293-1.34-.543-3.581 1.293-3.859l4.055-.625a2.3 2.3 0 0 0 1.717-1.29l1.727-3.719c.819-1.765 3.306-1.765 4.124 0"/></g></svg>',locked:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M16 2a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6m0 2.5A3.5 3.5 0 0 1 19.5 8v3a3.5 3.5 0 1 1-7 0V8A3.5 3.5 0 0 1 16 4.5"/><path fill="#f9c23c" d="M5 14a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path fill="#433b6b" d="M17.5 20.5a2.5 2.5 0 1 0-3 0V24a1.5 1.5 0 0 0 3 0z"/></g></svg>',fire:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6723" d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"/><path fill="#ffb02e" d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"/></g></svg>',trophy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="M10.52 7.521a3.435 3.435 0 0 0-4.213-2.369a2 2 0 0 0-.163.046c-2.493.831-2.691 4.214-.455 5.45l4.97 2.75a.866.866 0 1 0 .838-1.516l-4.97-2.75c-.982-.543-.823-1.956.16-2.288l.005-.002l.07-.018c.899-.25 1.834.27 2.093 1.175a.866.866 0 1 0 1.666-.478m11.939.478a1.7 1.7 0 0 1 2.118-1.168l.045.011l.007.002c.981.332 1.14 1.745.158 2.288l-4.97 2.75a.866.866 0 1 0 .84 1.516l4.97-2.75c2.235-1.236 2.037-4.619-.456-5.45a2 2 0 0 0-.164-.046a3.435 3.435 0 0 0-4.213 2.37a.866.866 0 1 0 1.666.477m-5.133 9.511v-4.22h-3.34v4.22c0 .74-.33 1.45-.9 1.92l-1.92 1.6h8.98l-1.92-1.6a2.51 2.51 0 0 1-.9-1.92"/><path fill="#ffb02e" d="M15.658 16.54a6.97 6.97 0 0 1-6.97-6.97V2.71c0-.39.32-.71.71-.71h12.53c.39 0 .71.32.71.71v6.86c0 3.85-3.12 6.97-6.98 6.97"/><path fill="#6d4534" d="M22.792 21.03H8.197c-.77 0-1.423.51-1.571 1.22l-1.614 7.09c-.073.33.19.64.549.64h19.878c.359 0 .622-.31.549-.64l-1.614-7.09c-.158-.71-.812-1.22-1.582-1.22"/><path fill="#ffb02e" d="M18.383 23.96h-5.766a.625.625 0 0 0-.613.64v1.81c0 .35.268.64.613.64h5.766c.335 0 .613-.28.613-.64V24.6c0-.35-.268-.64-.613-.64"/></g></svg>',crown:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" fill-rule="evenodd" d="M6.94 23.5a1.58 1.58 0 1 1-3.16 0a1.58 1.58 0 0 1 3.16 0m21.26 0a1.58 1.58 0 1 1-3.16 0a1.58 1.58 0 0 1 3.16 0" clip-rule="evenodd"/><path fill="#e19747" fill-rule="evenodd" d="m10.25 13.27l3.18 4.27l-6.59.76l2.12-4.89c-.51-.2-.87-.7-.87-1.28c0-.76.62-1.38 1.38-1.38a1.383 1.383 0 0 1 .78 2.52m12.76.14l2.12 4.89l-6.59-.76l3.18-4.27c-.36-.25-.6-.67-.6-1.14c0-.76.62-1.38 1.38-1.38s1.38.62 1.38 1.38c0 .58-.36 1.08-.87 1.28" clip-rule="evenodd"/><path fill="#ffb02e" d="M29.98 13.09c0-.76-.62-1.38-1.38-1.38s-1.38.62-1.38 1.38c0 .28.09.55.23.76c-.22 0-.44.05-.65.19l-3.93 2.54c-.52.33-1.2.21-1.57-.29l-4.37-5.93a.7.7 0 0 0-.11-.13a1.721 1.721 0 1 0-1.66 0c-.04.04-.08.08-.11.13l-4.37 5.93c-.36.5-1.05.62-1.57.29l-3.93-2.54c-.21-.14-.43-.19-.65-.19c.15-.22.23-.48.23-.76c0-.76-.62-1.38-1.38-1.38S2 12.33 2 13.09s.62 1.38 1.38 1.38c.05 0 .1 0 .14-.01c-.13.23-.18.5-.12.79L6 28.22c.19.93 1.01 1.6 1.96 1.6h16.06c.95 0 1.77-.67 1.96-1.6l2.6-12.97c.06-.29 0-.57-.12-.79c.05 0 .1.01.14.01c.76 0 1.38-.62 1.38-1.38"/><path fill="#00a6ed" d="M15.99 26a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/><path fill="#f8312f" fill-rule="evenodd" d="M11 23.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m13 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/></g></svg>',"gem-stone":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" d="M24.21 7.9H7.79a.54.54 0 0 0-.42.21L2.15 15a.52.52 0 0 0 0 .67L15.59 29.9a.52.52 0 0 0 .76 0l13.44-14.23a.52.52 0 0 0 0-.67l-5.16-6.89a.54.54 0 0 0-.42-.21"/><path fill="#1c5cd7" d="M15.594 29.902c.156.166.333.176.402.16l.017-.097V13.996H2.91c-.2.266-.632.837-.754.996c-.152.2-.254.418 0 .688z"/><path fill="#0084ce" d="M15.996 7.9H7.79a.54.54 0 0 0-.42.21l-4.837 6.385c-.202.259-.406.712.501.712c3.37.002 6.156.009 8.106.009c1.046-1.566 2.724-4.077 4.856-7.316"/><path fill="#aeddff" d="m16 30.059l-4.86-14.83h9.72z"/><path fill="#26eafc" d="M24.047 7.9h-8.031v7.298h13.883a.6.6 0 0 0-.1-.197c-.094-.134-4.983-6.642-5.1-6.806s-.328-.295-.652-.295"/><path fill="#b4f6fc" d="m16 7.9l2.43 3.67l2.43 3.66h-9.72l2.43-3.66z"/></g></svg>',"wrapped-gift":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fcd53f" d="M24.888 30H7.112A2.093 2.093 0 0 1 5 27.914V15l10.877-3.06L27 15v12.914C27 29.06 26.06 30 24.888 30"/><path fill="#f8312f" d="M27 5.847c0-3.384-4.045-5.106-6.466-2.763L16 7.479l-4.533-4.395C9.045.73 5 2.463 5 5.847C5 7.04 5.957 8 7.142 8L16 10.17L24.858 8A2.157 2.157 0 0 0 27 5.847"/><path fill="#ffb02e" d="M27.662 8H4.337C3.6 8 3 8.6 3 9.342v4.316C3 14.4 3.6 15 4.338 15h23.324C28.4 15 29 14.4 29 13.658V9.342C29 8.6 28.4 8 27.662 8"/><path fill="#ca0b4a" d="M16.005 3C14.345 3 13 4.37 13 6.06V30h6V6.06C19.01 4.37 17.666 3 16.005 3"/></g></svg>',ant:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M2.01 2.44a.5.5 0 0 1 .5-.5a6.603 6.603 0 0 1 6.61 6.61a.5.5 0 0 1-1 0a5.603 5.603 0 0 0-5.61-5.61a.5.5 0 0 1-.5-.5m14.82 13.517a.5.5 0 1 0-.58-.814l-.536.382a.503.503 0 0 0-.623.445l-5.455 3.9c-.988-.813-2.3-1.203-3.585-1.203c-1.426 0-2.886.481-3.895 1.49a.5.5 0 1 0 .708.706c.781-.781 1.966-1.196 3.187-1.196c1.222 0 2.41.414 3.196 1.197a.5.5 0 0 0 .644.053l4.505-3.22l-7.21 11.538a.5.5 0 1 0 .848.53l7.056-11.291V29.5a.5.5 0 1 0 1 0V16.873l.374-.598a.5.5 0 0 0 .043-.087z"/><path fill="#635994" d="M13.02 16.037c-1 .796-2.62.963-4.45.963c-3.04 0-5.5-.46-5.5-3.5S5.53 8 8.57 8a5.497 5.497 0 0 1 5.495 5.725a3.02 3.02 0 0 1 4.944 2.84c.634-1.017 1.694-1.625 3.461-1.625c4.16 0 7.53 3.37 7.53 7.53S26.63 30 22.47 30s-4.4-3.37-4.4-7.53c0-1.772.044-3.401.415-4.687a3.02 3.02 0 0 1-5.465-1.746"/><path fill="#533566" d="M6.56 10.52c.41 0 .75.33.75.75v.88a.749.749 0 1 1-1.5 0v-.88c.01-.41.34-.75.75-.75"/></g></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f9c23c" d="M10.52 7.052a1.17 1.17 0 0 1-.639-.636L8.93 4.257c-.178-.343-.69-.343-.858 0l-.952 2.16a1.28 1.28 0 0 1-.638.635l-1.214.524a.462.462 0 0 0 0 .838l1.214.524c.293.121.523.353.638.636l.952 2.169c.178.343.69.343.858 0l.952-2.17c.126-.282.356-.504.638-.635l1.214-.524a.462.462 0 0 0 0-.838zm15.054 6.503a3.73 3.73 0 0 1-1.922-1.977L20.79 4.81a1.432 1.432 0 0 0-2.58 0l-2.863 6.768a3.8 3.8 0 0 1-1.921 1.977l-3.622 1.64c-1.072.53-1.072 2.08 0 2.61l3.622 1.64a3.74 3.74 0 0 1 1.922 1.977l2.862 6.768a1.432 1.432 0 0 0 2.58 0l2.863-6.768a3.8 3.8 0 0 1 1.921-1.977l3.622-1.64c1.072-.53 1.072-2.08 0-2.61zM8.281 20.33c.16.392.454.696.822.872l1.55.725a.646.646 0 0 1 0 1.146l-1.55.725c-.368.176-.661.49-.822.872l-1.228 2.977a.61.61 0 0 1-1.106 0L4.72 24.67a1.66 1.66 0 0 0-.822-.872l-1.55-.725a.646.646 0 0 1 0-1.146l1.55-.725c.368-.176.661-.49.822-.872l1.228-2.977a.61.61 0 0 1 1.106 0z"/></svg>',snowflake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#00a6ed" d="m23.564 18.9l5.112-1.36c.553-.15 1.137.15 1.288.71c.15.56-.182 1.12-.735 1.27l-3.11.83l2.224 1.27c.483.28.655.89.373 1.37s-.896.65-1.379.37l-2.224-1.27l.836 3.09c.15.56-.171 1.12-.735 1.27a1.04 1.04 0 0 1-1.278-.73l-1.368-5.08l-2.315-1.33a5.07 5.07 0 0 1-2.747 1.59v2.63l3.744 3.72c.402.4.402 1.06 0 1.46c-.403.4-1.067.4-1.47 0l-2.274-2.26V29a1.006 1.006 0 0 1-2.012 0v-2.54l-2.274 2.26c-.403.4-1.067.4-1.47 0a1.034 1.034 0 0 1 0-1.46l3.744-3.72v-2.63c-1.097-.22-2.033-.8-2.747-1.59l-2.305 1.32l-1.368 5.08c-.151.55-.725.88-1.278.73a1.04 1.04 0 0 1-.735-1.27l.836-3.09l-2.224 1.28A1.02 1.02 0 0 1 4.294 23a.976.976 0 0 1 .363-1.35l2.223-1.28l-3.109-.83a1.04 1.04 0 0 1-.735-1.27c.151-.55.725-.88 1.278-.73l5.112 1.36l2.315-1.33a4.8 4.8 0 0 1-.282-1.57c0-.55.11-1.08.282-1.55l-2.315-1.33l-5.112 1.36a1.04 1.04 0 0 1-1.278-.73c-.15-.56.182-1.12.735-1.27l3.11-.83l-2.224-1.28A1.004 1.004 0 0 1 4.294 9c.272-.48.896-.64 1.369-.37l2.234 1.28l-.836-3.09c-.15-.55.182-1.11.735-1.26s1.117.18 1.268.73l1.368 5.08l2.305 1.32a5.07 5.07 0 0 1 2.747-1.59V8.47L11.74 4.75a1.034 1.034 0 0 1 0-1.46a1.05 1.05 0 0 1 1.469 0l2.274 2.26V3a1.006 1.006 0 0 1 2.012 0v2.55l2.274-2.26a1.05 1.05 0 0 1 1.47 0c.402.4.402 1.06 0 1.46l-3.744 3.72v2.63a5.05 5.05 0 0 1 2.737 1.58l2.314-1.33l1.369-5.08c.151-.55.724-.88 1.278-.73c.553.15.886.72.735 1.27l-.836 3.09l2.224-1.27a1.02 1.02 0 0 1 1.379.37a1 1 0 0 1-.363 1.36l-2.223 1.27l3.109.83c.553.15.885.72.734 1.27c-.15.55-.724.88-1.277.73l-5.112-1.36l-2.314 1.33c.17.49.281 1.02.281 1.57s-.11 1.07-.281 1.57zM19.509 16c0-1.657-1.352-3-3.019-3a3.01 3.01 0 0 0-3.019 3c0 1.657 1.352 3 3.019 3a3.01 3.01 0 0 0 3.019-3"/></svg>',link:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M21.148 21.148c-1.62-.43-2.847-.134-4.62.57l-3.41 3.41a4.52 4.52 0 0 1-6.4 0a4.52 4.52 0 0 1 0-6.4l3.41-3.41h.92l2.39-1.87c1.31-.14 2.68.27 3.68 1.28s1.42 2.37 1.28 3.68c.718.783 1.677.95 2.437.19l.872-2.06c-.27-1.54-1-3.02-2.19-4.21a7.86 7.86 0 0 0-4.21-2.19l-2.19-.674l-2.42 1.233c-.86.38-1.67.92-2.38 1.63l-4 4c-3.09 3.09-3.09 8.12 0 11.21s8.12 3.09 11.21 0l4-4a7.9 7.9 0 0 0 1.62-2.39"/><path fill="#bebebe" d="M27.528 4.318c-3.09-3.09-8.12-3.09-11.21 0l-4 4c-.7.71-1.24 1.52-1.62 2.38a8 8 0 0 1 4.62-.57l3.41-3.41a4.52 4.52 0 0 1 6.4 0c1.76 1.77 1.77 4.64 0 6.4l-3.41 3.41l-.59.59c-.76.76-1.73 1.17-2.72 1.28c-1.31.14-2.68-.27-3.68-1.28s-1.42-2.37-1.28-3.68c-1 .11-1.96.52-2.72 1.28l-.59.59c.27 1.54 1 3.02 2.19 4.21a7.86 7.86 0 0 0 4.21 2.19a7.99 7.99 0 0 0 7-2.2l4-4c3.08-3.07 3.08-8.1-.01-11.19"/></g></svg>',"red-question-mark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f8312f" d="M13.037 20.863c0 1.302 1.145 2.36 2.555 2.36s2.556-1.058 2.556-2.37V19.15c0-.111.073-.209.18-.242C21.676 17.85 24 14.919 24 11.562v-1.254c0-4.239-3.69-7.773-8.227-7.861c-2.28-.05-4.432.744-6.065 2.212c-1.622 1.469-2.523 3.447-2.523 5.552c0 1.311 1.155 2.369 2.566 2.369s2.555-1.058 2.555-2.36c0-.822.35-1.596.986-2.173a3.4 3.4 0 0 1 2.375-.872c1.78.04 3.223 1.45 3.223 3.143v1.244c0 1.468-1.124 2.731-2.683 2.996c-1.834.313-3.17 1.791-3.17 3.514zM15.5 30a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/></svg>',"speaker-high-volume":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#83cbff" d="M23.506 7.975a1 1 0 0 1-.506-.87a1 1 0 0 1 1.506-.86A11 11 0 0 1 30 15.768c0 4.07-2.21 7.622-5.495 9.524a1 1 0 0 1-1.506-.862c0-.359.194-.687.505-.867a9 9 0 0 0 1.86-1.43a8.94 8.94 0 0 0 2.635-6.46a9 9 0 0 0-4.493-7.698m.166 2.653a7 7 0 0 1 2.245 4.924a6.96 6.96 0 0 1-2.241 5.354c-.64.592-1.676.141-1.676-.73c0-.28.112-.55.317-.74a4.98 4.98 0 0 0 1.604-3.668c0-1.45-.618-2.754-1.604-3.667a.97.97 0 0 1-.317-.713v-.028c0-.869 1.035-1.322 1.672-.732"/><path fill="#b4acbc" d="M8.012 23h-4.21C2.808 23 2 22.153 2 21.108V10.892C2 9.847 2.807 9 3.803 9h4.21L19 13a3 3 0 1 1 0 6z"/><path fill="#cdc4d6" d="m16.61 26.83l-8.612-3.829V9.019l8.05-3.788c1.122-.528 2.988.024 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.527"/></g></svg>',"muted-speaker":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M7.803 23h4.21l1-7l-1-7h-4.21C6.807 9 6 9.847 6 10.892v10.216C6 22.153 6.807 23 7.803 23M26 16.023a3.055 3.055 0 1 1-6.11 0a3.055 3.055 0 0 1 6.11 0"/><path fill="#d3d3d3" d="m20.61 26.83l-8.612-3.829V9.02l8.05-3.787c1.122-.529 2.988.023 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.526"/><path fill="#f8312f" d="M24.97 26.652L5.15 6.832A1.19 1.19 0 0 1 6.83 5.15l19.82 19.82a1.19 1.19 0 0 1-1.682 1.682"/></g></svg>',"musical-note":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#402a32" d="M29.41 2.869c0-.53-.46-.93-.98-.86l-16.97 2.2c-.43.06-.76.43-.76.87v13.61c-.59-.2-1.23-.32-1.89-.32c-3.21 0-5.81 2.61-5.81 5.82s2.6 5.81 5.81 5.81s5.81-2.6 5.81-5.81c0-.12-.01-.25-.01-.37v-13.9c0-.39.29-.71.67-.76l9.35-1.21c.46-.06.87.3.87.76v6.53a5.808 5.808 0 0 0-7.71 5.49c0 3.21 2.6 5.81 5.81 5.81s5.81-2.6 5.81-5.81z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M12.847 3.834A2 2 0 0 1 14.84 2h2.32a2 2 0 0 1 1.993 1.834l.235 2.825a.5.5 0 0 0 .821.34l2.164-1.831a2 2 0 0 1 2.706.112l1.64 1.64a2 2 0 0 1 .113 2.707l-1.83 2.163a.5.5 0 0 0 .34.822l2.824.235A2 2 0 0 1 30 14.84v2.32a2 2 0 0 1-1.834 1.993l-2.825.235a.5.5 0 0 0-.34.821l1.831 2.164a2 2 0 0 1-.112 2.706l-1.64 1.64a2 2 0 0 1-2.707.113l-2.164-1.83a.5.5 0 0 0-.82.34l-.236 2.824A2 2 0 0 1 17.16 30h-2.32a2 2 0 0 1-1.993-1.834l-.235-2.825a.5.5 0 0 0-.822-.34l-2.163 1.831a2 2 0 0 1-2.706-.112l-1.64-1.64a2 2 0 0 1-.113-2.707l1.83-2.164a.5.5 0 0 0-.34-.82l-2.824-.236A2 2 0 0 1 2 17.16v-2.32a2 2 0 0 1 1.834-1.993l2.825-.235a.5.5 0 0 0 .34-.822L5.168 9.628A2 2 0 0 1 5.28 6.92l1.64-1.64a2 2 0 0 1 2.707-.113l2.163 1.83a.5.5 0 0 0 .822-.34zM21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"/><path fill="#998ea4" d="M24 16a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-3.5 0a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"/><path fill="#cdc4d6" d="M10.5 16a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"/></g></svg>',house:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" fill-rule="evenodd" d="M10 8.834V3.523A.53.53 0 0 0 9.467 3H6.543A.53.53 0 0 0 6 3.523v8.646l-1 .833v16h22v-15L16.07 3.772z" clip-rule="evenodd"/><path fill="#8c5543" d="M15.92 27.003H8.08c-.04 0-.08-.04-.08-.08v-10.53c0-.75.61-1.36 1.36-1.36h5.29c.75 0 1.36.61 1.36 1.36v10.53c-.01.04-.05.08-.09.08"/><path fill="#402a32" d="M14.5 21.002a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"/><path fill="#d3d3d3" d="M15.96 28.002H8c-.55 0-1-.45-1-1s.45-1 1-1h7.96c.55 0 1 .45 1 1s-.45 1-1 1"/><path fill="#00f397" d="M30 29.002H2v-.09c0-1.06.85-1.91 1.91-1.91h24.18c1.05 0 1.91.85 1.91 1.91z"/><path fill="#f8312f" d="m16.88 2.353l12.76 12.57c.48.47.48 1.23 0 1.69c-.47.47-1.24.47-1.72 0l-11.9-11.72l-11.94 11.76c-.47.47-1.24.47-1.72 0s-.48-1.23 0-1.7l12.8-12.6c.47-.47 1.24-.47 1.72 0"/><path fill="#83cbff" d="M23.14 21.002h-4.28c-.48 0-.86-.38-.86-.86v-4.28c0-.47.38-.86.86-.86h4.28c.47 0 .86.38.86.86v4.28c0 .48-.38.86-.86.86"/></g></svg>',"world-map":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fff" d="M2.52 6.84L8.97 5l.53 11.5l-.53 11.49l-6.12 1.99a.684.684 0 0 1-.85-.66V7.5c0-.31.22-.58.52-.66M15.98 7l6.99-2l.53 11.5l-.51 11.5l-7.01 2L15 18.5z"/><path fill="#e6e6e6" d="M15.98 7L8.97 5v22.99L15.98 30zm13.42-.16L22.97 5v23l6.09 1.98c.43.11.85-.22.85-.66V7.5c0-.31-.21-.58-.51-.66"/><path fill="#00a6ed" d="M3.95 8.34L8.97 7L10 16.5L8.97 26l-4.66 1.42a.687.687 0 0 1-.87-.66V9c0-.31.21-.58.51-.66M15.94 9l7.03-1.98L24 16.5l-1.03 9.49l-7.03 2L15 18.5z"/><path fill="#0074ba" d="M15.94 9L8.97 7.02v18.97l6.97 2zm12-.66l-4.97-1.32v19l4.61 1.42c.44.12.87-.21.87-.66V9c0-.31-.21-.58-.51-.66"/><path fill="#00d26a" d="m14.32 17.64l.53-.53c.072-.063.16-.101.242-.138l.028-.012h.43c.22 0 .4-.18.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4-.18-.4-.4v-1.19c0-.22.18-.4.4-.4h.19c.22 0 .4-.18.4-.4v-.19c0-.22.18-.4.4-.4h1.44c.1 0 .2-.03.27-.1l1.75-1.57c.08-.08.13-.19.13-.3v-.03c0-.55.45-1 1-1h.4c.33 0 .6.27.6.6c0 .22.18.4.4.4h1.19c.22 0 .4-.18.4-.4v-.19c0-.22.18-.4.4-.4h.04c.85 0 1.55.69 1.55 1.55v1.94c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.1c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v1.19c0 .22.18.4.4.4a.4.4 0 0 1 .37.55l-.88 2.19c-.06.15-.21.25-.37.25h-1.12c-.22 0-.4-.18-.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v.19c0 .22-.18.4-.4.4h-.19c-.22 0-.4-.18-.4-.4v-.19c0-.22-.18-.4-.4-.4h-.19c-.22 0-.4.18-.4.4v.5c0 .06-.01.12-.04.18l-.91 1.83c-.03.06-.04.12-.04.18v1.24c0 .43-.17.84-.47 1.14l-.41.41a.4.4 0 0 1-.29.12h-.43c-.22 0-.4-.18-.4-.4v-2.19c0-.22-.18-.4-.4-.4h-.43a.4.4 0 0 1-.29-.12l-.53-.53c-.22-.22-.35-.53-.35-.85s.12-.62.35-.85m-3.35 5.85c0 .28-.22.5-.5.5c-.27 0-.5-.22-.48-.47v-1.37a.3.3 0 0 0-.09-.22l-.38-.38c-.34-.34-.53-.81-.53-1.29v-1.12a.3.3 0 0 0-.09-.22l-1.25-1.25c-.134-.134-.351-.283-.586-.444c-.499-.343-1.074-.737-1.074-1.146v-2.36c0-.192.165-.367.286-.495c.124-.133.202-.215.004-.215c-.19 0-.37.08-.5.21l-1.26 1.26c-.2.19-.53.06-.53-.22v-.13c0-.08.03-.16.09-.22l.24-.24c.42-.42.66-1 .66-1.6v-.37c0-.38.31-.69.69-.69h.62c.38 0 .69.31.69.69c0 .17.14.31.31.31h.1c.46 0 .9-.19 1.21-.53l.62-.67c.48-.51 1.15-.8 1.85-.8h1.6c.72 0 1.3.58 1.3 1.3c0 .45-.18.88-.5 1.2l-.41.41a.3.3 0 0 0-.09.22v.37c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.19c0 .17-.14.31-.31.31h-.78c-.18 0-.32.14-.31.32l.02.35c.01.17-.13.32-.31.32c-.17 0-.31.14-.31.31v.19c0 .28.22.5.5.5s.5-.22.5-.5s.22-.5.5-.5s.5.22.5.5v.37c0 .08.03.16.09.22l.69.69c.12.12.12.32 0 .44l-.29.29c-.31.31-.74.49-1.18.49c-.17 0-.31.14-.31.31v.19c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.19c0-.17-.14-.31-.31-.31h-.38c-.17 0-.31.14-.31.31v.56c0 .08.03.16.09.22l1.82 1.82c.06.06.14.09.22.09h.44c.28 0 .56.06.81.19l1.17.58c.28.13.45.41.45.72c0 .3-.18.58-.45.72l-.61.31c-.58.29-.94.87-.94 1.52zm11-3.98c0 .31.11.61.3.85l.21.25c.3.37.79.54 1.25.43a.31.31 0 0 0 .24-.3v-.37c0-.16.12-.29.27-.31l.15-.02c.31-.03.58.21.58.52c0 .24.17.46.41.51l.22.05c.19.04.37-.1.37-.3v-.84c0-.55-.45-1-1-1h-.86c-.09 0-.17.04-.23.1l-.37.41a.31.31 0 0 1-.54-.21c0-.17-.14-.31-.31-.31h-.38c-.17.02-.31.16-.31.33zm1.5 4.49c-.28 0-.5-.22-.5-.5v-.67c0-.46.37-.84.83-.84h1.61c.31 0 .56.25.56.56v.95c0 .28-.22.5-.5.5z"/></g></svg>',"framed-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="m2 2l14 3l14-3v28l-14-3l-14 3z"/><path fill="#f3ad61" d="M30 2H2l14 14z"/><path fill="#b97028" d="M30 30H2l14-14z"/><path fill="#aeddff" d="M5 5h22v4.164L18 22L5 19v-3l1.5-3L5 10z"/><path fill="#fff" d="M24.667 10.114A3 3 0 0 1 27 9v6a3 3 0 0 1-2.009-.772a3 3 0 1 1-2.73-3.217a2 2 0 0 1 2.406-.897M5 16v-6c.981 0 1.853.471 2.4 1.2A1 1 0 0 1 9 12a2 2 0 1 1 0 4z"/><path fill="#14a085" d="M8 17.5L5 19v8h22V12c-1.5 0-2.5.5-4 2l-4.5 4.5c-1 1-1.5 1.5-2.5 1l-4-2c-1.6-.8-3.167-.5-4 0"/><path fill="#96c34a" d="M27 26.812V27H5v-.189c2.564-2.579 6.538-4.311 11-4.311s8.436 1.732 11 4.311"/><path fill="#ff822d" d="M19.056 10.185a.75.75 0 0 0 0-1.37a.75.75 0 0 0-.685-1.186a.75.75 0 0 0-1.186-.685a.75.75 0 0 0-1.37 0a.75.75 0 0 0-1.186.685a.75.75 0 0 0-.685 1.186a.75.75 0 0 0 0 1.37a.75.75 0 0 0 .685 1.186a.75.75 0 0 0 1.186.685a.75.75 0 0 0 1.37 0a.75.75 0 0 0 1.186-.685a.75.75 0 0 0 .685-1.186"/><path fill="#f9c23c" d="M18.705 9.5a2.205 2.205 0 1 1-4.41 0a2.205 2.205 0 0 1 4.41 0"/></g></svg>',package:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" d="M15.35 2.143c.32-.19.71-.19 1.02 0l10.92 6.64c.26.16.42.45.42.75L15.86 17.5L4 9.632v-.1c0-.3.16-.59.42-.74z"/><path fill="#ffce7c" d="m15.856 16.246l11.36-6.9a.328.328 0 0 1 .496.282v12.34a1.73 1.73 0 0 1-.83 1.48l-10.64 6.46a.3.3 0 0 1-.087.03a.3.3 0 0 1-.083.011a.9.9 0 0 1-.682-.083h.006L13 19z"/><path fill="#e19747" d="M15.86 29.622v-13.37l-11.35-6.9a.331.331 0 0 0-.51.28v12.34c0 .61.32 1.17.83 1.48l10.57 6.42a.3.3 0 0 0 .46-.25"/><path fill="#d3d3d3" d="M14.5 26.782v-1.96c0-.23-.12-.44-.31-.56l-2.8-1.69c-.19-.11-.43.02-.43.24v1.96c0 .23.12.44.31.56l2.8 1.69c.19.11.43-.02.43-.24"/><path fill="#8c5543" d="M11.76 16.553v-4.56l-3.28-.22v3.16c0 .1.05.2.14.26l2.68 1.63c.2.11.46-.03.46-.27"/><path fill="#a56953" d="m20.34 4.563l-11.86 7.21l3.28 2l11.86-7.2z"/></g></svg>',skull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#9b9b9b" d="M16.028 1c-8.282 0-15 6.715-15 14.995c0 2.773.762 4.743 2.286 6.033c1.262 1.067 2.919 1.554 4.714 1.785V28a3.005 3.005 0 0 0 3 2.999a3 3 0 0 0 2.5-1.345a3 3 0 0 0 2.5 1.345a3 3 0 0 0 2.5-1.345a3 3 0 0 0 2.5 1.345c1.652 0 3-1.347 3-3V23.81c1.794-.234 3.451-.72 4.713-1.787c1.524-1.288 2.287-3.256 2.287-6.029c0-8.28-6.718-14.995-15-14.995"/><path fill="#fff" d="M16.028 2c-7.73 0-14 6.268-14 13.995c0 5.178 2.82 6.568 7 6.918V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-5.087c4.18-.36 7-1.74 7-6.918c0-7.727-6.27-13.995-14-13.995"/><path fill="#402a32" d="M14 16.762C14 19.392 11.987 20 9.5 20S5 19.393 5 16.762S7.013 12 9.5 12s4.5 2.13 4.5 4.762m13 0C27 19.392 24.987 20 22.5 20s-4.5-.607-4.5-3.238S20.013 12 22.5 12s4.5 2.13 4.5 4.762M15.01 21.97h1.97c.5 0 .85-.49.68-.96l-.37-1.08c-.19-.56-.71-.93-1.3-.93s-1.12.38-1.31.93l-.36 1.08c-.16.47.19.96.69.96"/></g></svg>',"party-popper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f9c23c" d="m5.05 29.9l1.472-.394l.394-.855l2.55.067l2.653-.71l.598-.926l2.482.102l2.591-.694c1.8-.48 2.41-2.74 1.09-4.06L9.56 13.1c-1.32-1.32-3.58-.72-4.06 1.09l-.773 2.887l.108 2.344l-.88.542l-.79 2.951l.132 2.248l-.863.484l-.344 1.284c-.49 1.8 1.16 3.45 2.96 2.97"/><path fill="#3f5fff" d="M7.8 25.053c-1.48-1.383-2.74-3.047-3.854-5.058l.778-2.904c1.278 2.798 2.716 4.889 4.441 6.5c1.663 1.553 3.633 2.697 6.07 3.583l-3.128.837c-1.602-.797-3.027-1.764-4.306-2.958m-3.514 2.833a12 12 0 0 1-1.855-2.234l.745-2.783c.703 1.49 1.49 2.634 2.476 3.557c.984.92 2.208 1.659 3.838 2.285l-2.989.8a12 12 0 0 1-2.215-1.625"/><path fill="#6d4534" d="M19.11 25.69c1.4-1.4-.34-5.4-3.88-8.94S7.7 11.47 6.3 12.87s.34 5.4 3.88 8.94s7.54 5.27 8.93 3.88"/><path fill="#f70a8d" d="M11.61 7.27a9.73 9.73 0 0 1 .72 7.49a9.7 9.7 0 0 1-3.81 5.2c-.52-.65-.97-1.3-1.35-1.93a7.4 7.4 0 0 0 2.91-3.96c.59-1.91.4-3.93-.54-5.69c-.31-.58-.09-1.29.48-1.59c.58-.31 1.29-.09 1.59.48m10.54 9.443a6.65 6.65 0 0 1 6.454-1.01a1.048 1.048 0 0 0 .732-1.965a8.74 8.74 0 0 0-8.486 1.33a1.048 1.048 0 1 0 1.3 1.645M6.01 9.69a1.16 1.16 0 1 0 0-2.32a1.16 1.16 0 0 0 0 2.32m20.12-1.16a1.16 1.16 0 1 1-2.32 0a1.16 1.16 0 0 1 2.32 0"/><path fill="#f9c23c" d="M12.49 3.96a.96.96 0 1 1-1.92 0a.96.96 0 0 1 1.92 0m12.99 20.45a.97.97 0 1 1-1.94 0a.97.97 0 0 1 1.94 0"/><path fill="#00a6ed" d="M21.63 4.02a.95.95 0 0 0-.58-.24a.99.99 0 0 0-1.04.92c-.07 1.1-.83 3.09-1.12 3.76q-.001.008-.005.015q-.005.008-.005.015q-.08.198-.172.39a2.8 2.8 0 0 0-1.358-.92l-.03-.01c-1.35-.45-2.82.28-3.27 1.64c-.22.66-.17 1.36.14 1.98s.84 1.08 1.5 1.3q.106.036.214.045q.76.206 1.465.015a6 6 0 0 1-.099.41c-.14.52.17 1.06.69 1.2a.98.98 0 0 0 1.2-.69a8.2 8.2 0 0 0 .293-2.482q.78-.98 1.247-2.148l.015-.036c.185-.448 1.158-2.802 1.255-4.374c.01-.31-.12-.6-.34-.79m-4.88 5.79c.275.092.558.246.678.876c-.492.457-.808.407-1.088.314a1 1 0 0 0-.102-.028a.6.6 0 0 1-.288-.292a.58.58 0 0 1-.03-.48c.11-.33.47-.51.8-.4zm1.52 8.35c3.41-.95 6.98-.52 10.06 1.22c.57.33.77 1.04.46 1.6c-.32.57-1.04.77-1.61.45a10.85 10.85 0 0 0-8.27-1c-2.31.64-4.29 2-5.72 3.88c-.61-.42-1.24-.9-1.86-1.44c1.73-2.27 4.14-3.93 6.94-4.71m-1.646-1.175a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0"/></g></svg>',"money-bag":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#f3c07b" d="M17.44 3.385c.33.38.89.45 1.3.16c.8-.57 1.84.29 1.43 1.17l-2.42 2.77h-3.87l-2.44-2.8c-.41-.89.63-1.75 1.43-1.18l.07.05c.41.29.97.21 1.29-.17l.87-1.04a.955.955 0 0 1 1.47 0zM4 21.225c0-6.54 5.3-11.84 11.84-11.84s11.84 5.3 11.83 11.84c0 4.83-3.92 8.75-8.75 8.75h-6.17c-4.83 0-8.75-3.92-8.75-8.75"/><path fill="#8c5543" d="M14.12 7.465h3.44c.61 0 1.11.5 1.11 1.11s-.5 1.11-1.11 1.11h-3.44c-.61 0-1.11-.5-1.11-1.11s.5-1.11 1.11-1.11m1.72 11.88h.07c1.5.04 2.7 1.26 2.7 2.76c0 1.28-.87 2.35-2.05 2.67v1.12c0 .4-.32.72-.72.72s-.72-.32-.72-.72v-1.12a2.77 2.77 0 0 1-2.05-2.67c0-.4.32-.72.72-.72s.72.32.72.72c0 .74.59 1.33 1.32 1.33s1.33-.6 1.33-1.33s-.6-1.33-1.33-1.33h-.07a2.765 2.765 0 0 1-2.69-2.76c0-1.28.87-2.35 2.05-2.67v-1.12c0-.4.32-.72.72-.72s.72.32.72.72v1.12c1.18.32 2.05 1.39 2.05 2.67c0 .4-.32.72-.72.72s-.72-.32-.72-.72c0-.73-.6-1.33-1.33-1.33s-1.33.6-1.33 1.33s.6 1.33 1.33 1.33"/></g></svg>',"check-mark-button":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00d26a" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path fill="#f4f4f4" d="M13.242 23c-.383 0-.766-.143-1.059-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.685 4.601L23.443 9.431a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.058a1.5 1.5 0 0 1-1.059.431"/></g></svg>',"cross-mark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f92f60" d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z"/></svg>',"artist-palette":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fbb8ab" d="M21.993 5.854c-6.707-3.42-14.656-2.1-18.279 3.883S2.398 23.68 8.87 27.517c3.18 1.886 8.312 3.811 10.398 1.244c2.044-2.516-.972-4.11-.268-5.502c1.133-2.24 6.2.699 9.515-2.922c3.734-4.082.009-11.151-6.522-14.483M24 19c-1.745 0-3-1.273-3-3s1.255-3 3-3s3 1.273 3 3s-1.255 3-3 3"/><path fill="#8d65c5" d="M14.25 11a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#f70a8d" d="M8.25 15a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#00d26a" d="M8.25 22a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/><path fill="#3f5fff" d="M13.75 26.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"/></g></svg>',"four-leaf-clover":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#008463" d="M20.663 29.841a.875.875 0 0 0 .799-1.557zm.799-1.557c-2.708-1.39-3.811-3.233-4.277-5.269c-.49-2.143-.279-4.44-.279-6.89h-1.75c0 2.225-.226 4.881.323 7.28c.573 2.506 1.986 4.795 5.184 6.436z"/><path fill="#00d26a" d="M16.025 9.237c-.095-2.481-.513-5.067-2.134-6.425c-2.253-1.886-5.672.141-5.188 2.922c-3.14-.328-5.257 3.91-2.094 5.907c1.504.948 3.044 1.246 4.85 1.327c-1.827.102-3.381.424-4.9 1.382c-3.162 1.996-1.046 6.234 2.095 5.906c-.485 2.781 2.843 4.693 5.187 2.922c1.447-1.094 1.97-2.979 2.138-4.965c.188 1.986.733 3.871 2.18 4.965c2.344 1.771 5.671-.14 5.187-2.922c3.14.328 5.257-3.91 2.094-5.906c-1.506-.95-3.074-1.275-4.905-1.38c1.83-.077 3.385-.37 4.905-1.33c3.163-1.995 1.047-6.234-2.094-5.906c.484-2.78-2.935-4.808-5.187-2.922c-1.621 1.358-2.04 3.944-2.134 6.425"/></g></svg>',"shooting-star":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M26.33 30H5.67C3.64 30 2 28.36 2 26.33V5.67C2 3.64 3.64 2 5.67 2h13.646l5.651 2.038l3.044 2.17L30 13.63v12.7c0 2.03-1.64 3.67-3.67 3.67"/><path fill="#e1d8ec" d="M8.99 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M5.49 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m19.5 11.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-1 4a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M4.49 25a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m23.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"/><path fill="#a38439" d="M30 5.67C30 3.64 28.36 2 26.33 2h-7.04L9.25 11.6L19.64 24L30 13.64z"/><path fill="#fcd53f" d="m11.03 11.82l2.08 1.87c.39.35.92.48 1.43.35l2.72-.69c1.23-.31 2.3.89 1.84 2.08l-1.09 2.82c-.18.46-.13.98.14 1.4l1.61 2.55c.7 1.1-.19 2.52-1.48 2.38l-2.65-.28a1.56 1.56 0 0 0-1.39.59l-1.64 2.1c-.8 1.03-2.43.68-2.74-.59l-.72-2.93a1.58 1.58 0 0 0-.91-1.07l-2.79-1.17c-1.17-.49-1.3-2.1-.22-2.77l2.39-1.48c.44-.27.72-.75.74-1.27l.1-2.79c.03-1.32 1.59-1.98 2.58-1.1"/></g></svg>',"lady-beetle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#212121" d="M13.57 1.75a.5.5 0 0 0-.865.5l1.429 2.472a6.96 6.96 0 0 0-5.08 6.22L7.827 9.71c-.21-.21-.33-.49-.33-.79v-2a.749.749 0 1 0-1.5 0v2c0 .7.27 1.36.77 1.86l2.45 2.45q.035.031.07.059a6.96 6.96 0 0 0 5.71 5.031v11.1c.33.03.66.05 1 .05s.67-.02 1-.05v-11.1a6.96 6.96 0 0 0 5.706-5.014a1 1 0 0 0 .075-.066l2.45-2.45c.5-.5.77-1.16.77-1.86v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 .31-.12.59-.33.8l-1.226 1.226a6.96 6.96 0 0 0-5.245-6.277L19.1 2.25a.5.5 0 1 0-.865-.5l-1.59 2.75a7 7 0 0 0-1.474.019zm15.148 14.41c.15.15.34.22.53.22s.38-.08.53-.22c.29-.29.29-.77 0-1.06l-.67-.67c-.62-.62-1.44-.96-2.32-.96h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.75c.47 0 .92.18 1.26.52zm-1.47 13.28c-.41 0-.75-.34-.75-.75V26.6c0-.62-.24-1.2-.68-1.64l-2.56-2.56a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.72.72 1.12 1.68 1.12 2.7v2.09c0 .41-.34.75-.75.75m-21.75-.77c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.09c0-1.02.4-1.98 1.12-2.7l2.56-2.56c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.56 2.56a2.3 2.3 0 0 0-.68 1.64zm-2.22-12.53c-.15.15-.34.22-.53.22s-.38-.08-.53-.22a.754.754 0 0 1 0-1.06l.67-.67c.62-.62 1.44-.96 2.32-.96h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75c-.47 0-.92.18-1.26.52z"/><path fill="#f8312f" d="M15.5 9.46H9.318q-.001.007-.005.01q-.005.003-.005.01c-1 .755-1.868 1.674-2.563 2.717L8 15l-2.992 1.71a11 11 0 0 0-.12 1.64c0 5.8 4.44 10.56 10.11 11.07q.25.023.502.036zm1 19.996q.25-.013.497-.036c5.67-.51 10.11-5.27 10.11-11.07q-.001-.823-.116-1.613L24 15l1.253-2.8a11.1 11.1 0 0 0-2.565-2.72v-.02H16.5z"/><path fill="#212121" d="M19.898 14.92a3.9 3.9 0 1 1-7.8 0a3.9 3.9 0 0 1 7.8 0m-7.01 7.15a2.64 2.64 0 1 1-5.28 0a2.64 2.64 0 0 1 5.28 0m-6.07-9.88h-.07c-.9 1.34-1.51 2.89-1.75 4.55c.47.45 1.11.72 1.82.72c1.46 0 2.64-1.18 2.64-2.64s-1.18-2.63-2.64-2.63m18.42 0c.9 1.34 1.51 2.88 1.75 4.55c-.47.45-1.11.72-1.82.73c-1.46 0-2.64-1.18-2.64-2.64s1.18-2.64 2.64-2.64zm-3.49 12.52a2.64 2.64 0 1 0 0-5.28a2.64 2.64 0 0 0 0 5.28m-4.29 1.45a1.46 1.46 0 1 1-2.92 0a1.46 1.46 0 0 1 2.92 0"/></g></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff822d" d="M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.94 2.94 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.94 2.94 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.94 2.94 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.94 2.94 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.94 2.94 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.94 2.94 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.94 2.94 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.94 2.94 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.94 2.94 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.94 2.94 0 0 0 3.249-1.055"/><path fill="#fcd53f" d="M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83s-6.72-9.29-3.83-14.294s9.29-6.72 14.294-3.83s6.72 9.29 3.83 14.294"/></g></svg>',key:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#f9c23c" d="M16.248 4.526c2.662-2.69 6.868-3.384 10.038-1.34c4.436 2.851 4.894 8.935 1.396 12.47c-2.31 2.34-5.724 2.927-8.59 1.765a751 751 0 0 0-3.592 3.604a.96.96 0 0 1-.92.22c-.41-.12-.84-.12-1.3.03c-.53.18-.89.81-.87 1.1c.04.63-.06.9-.34 1.19c-.282.296-.58.327-.893.36c-.365.038-.749.078-1.147.54c-.4.47-.47 1.18-.33 1.71c.08.31-.02.68-.3.96c-.5.5-1.86 1.84-1.86 1.84c-1.03 1.03-2.65 1.34-3.91.61a3.205 3.205 0 0 1-.7-5.05l11.69-11.68a10 10 0 0 1-.285-.785c-.848-2.659-.04-5.57 1.913-7.544m7.636 1.3a1.886 1.886 0 0 0 0 2.638a1.84 1.84 0 0 0 2.611 0a1.886 1.886 0 0 0 0-2.638a1.84 1.84 0 0 0-2.611 0"/></svg>',"hourglass-done":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#83cbff" d="M25 6.4V3.9l-9-.4l-9 .4v2.5c0 4 2.8 7.3 6.5 8.2c.3.1.5.4.5.7v1.2c0 .3-.2.6-.5.6C9.8 18 7 21.3 7 25.3V28l9 1l9-1v-2.7c0-4-2.8-7.3-6.5-8.2c-.3-.1-.5-.3-.5-.6v-1.2c0-.3.2-.6.5-.6c3.7-1 6.5-4.3 6.5-8.3"/><path fill="#9b9b9b" d="M7 4h18c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1m0 26h18c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1"/><path fill="#ffb02e" d="M17 19.4v-4.3c0-.7.5-1.2 1.1-1.4c1.7-.4 3.2-1.4 4.3-2.7c.7-.8.1-2-.9-2h-11c-1 0-1.6 1.2-.9 2c1.1 1.3 2.6 2.2 4.3 2.7c.7.2 1.1.7 1.1 1.4V19c0 .7-.3 1-.6 1.1c-3.7.7-6.4 3.5-6.4 6.8V28h16v-1.1c0-3.3-2.7-6.1-6.4-6.8c-.3 0-.6-.3-.6-.7"/><path fill="#fff" d="M21.5 5.8c0-.5.4-.9.9-.9c.6.1 1 .5.9.9c-.1 1.6-.5 3-1.3 4.2c-.8 1.4-2 2.4-3.4 2.9c-.5.2-1 0-1.2-.5s0-1 .5-1.2c2.4-.9 3.4-3.5 3.6-5.4m0 20.1c0 .5.4.9.9.9c.6 0 1-.5.9-.9c-.1-1.6-.5-3-1.3-4.2c-.8-1.4-2-2.4-3.4-2.9c-.5-.2-1 0-1.2.5s0 1 .5 1.2c2.4.9 3.4 3.5 3.6 5.4"/></g></svg>',construction:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="M8 20H6v10h2zm18 0h-2v10h2z"/><path fill="#fcd53f" d="m3 12l4-4h5.52l1.98 1l2.96-1h5.06L24 9l3.48-1H28a1 1 0 0 1 1 1v2.52l-.5 2.98l.5 1.98V20a1 1 0 0 1-1 1h-3.52L22 20.5l-2.48.5h-5.04l-1.98-1l-2.98 1H4.49L4 18.5l-1-.974z"/><path fill="#533566" d="M7.475 8H4a1 1 0 0 0-1 1v3.475zm-3 13H4a1 1 0 0 1-1-1v-2.475L12.525 8h4.95zm10 0h-4.95l13-13h4.95zm10 0h-4.95L29 11.525v4.95z"/><path fill="#f8312f" d="M7.5 6A1.5 1.5 0 0 0 6 7.5V8h3v-.5A1.5 1.5 0 0 0 7.5 6m17 0A1.5 1.5 0 0 0 23 7.5V8h3v-.5A1.5 1.5 0 0 0 24.5 6"/></g></svg>',door:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="M8 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"/><path fill="#d3883e" d="M10 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm0 12a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/><path fill="#f9c23c" d="M23.25 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>',mushroom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ffce7c" d="M10.992 25.309L13.5 18.5H18l2.831 6.724A2 2 0 0 1 18.988 28h-6.12a2 2 0 0 1-1.876-2.691"/><path fill="#f8312f" d="M4 16c0-2.27.63-4.394 1.727-6.205L9.5 8l3.258-3.557A12 12 0 0 1 16 4c1.626 0 3.176.323 4.59.91l2.91 5.59l4.455 4.456Q28 15.472 28 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path fill="#fbb8ab" d="M12.79 4.434q.079.436.08.896c0 2.74-2.23 4.96-4.97 4.97a4.9 4.9 0 0 1-2.173-.506a12.03 12.03 0 0 1 7.062-5.36m7.784.468A6.6 6.6 0 0 0 19.43 8.63a6.632 6.632 0 0 0 8.528 6.353c-.384-4.567-3.324-8.406-7.385-10.081M14.94 17.04a2.74 2.74 0 1 0 0-5.48a2.74 2.74 0 0 0 0 5.48"/></g></svg>',"evergreen-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.157 30h-6.311c-.536 0-.943-.608-.826-1.243L12.535 26h6.933l.514 2.757c.108.635-.289 1.243-.825 1.243"/><path fill="#44911b" d="m14.877 6.714l-2.699 5.127c-.504.952.12 2.159 1.128 2.159h.602C11.747 14 10 15.592 10 17.561c0 .8.71 1.439 1.579 1.439h.144C9.116 19 7 21.227 7 23.971C7 25.649 8.294 27 9.878 27h12.244C23.716 27 25 25.639 25 23.971C25.01 21.227 22.894 19 20.277 19h.144C21.3 19 22 18.352 22 17.561C22 15.601 20.253 14 18.092 14h.602c1.007 0 1.632-1.196 1.128-2.16l-2.7-5.126c-.493-.952-1.741-.952-2.245 0"/></g></svg>',"deciduous-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M18 22.24h-4v7.78h4z"/><path fill="#44911b" d="M25.9 15.2c.38-.76.6-1.62.6-2.53c0-2.91-2.19-5.3-5-5.63V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v.04a5.662 5.662 0 0 0-4.4 8.16c-1.26.94-2.1 2.43-2.1 4.12c0 2.84 2.32 5.16 5.16 5.16h12.68c2.84 0 5.16-2.32 5.16-5.16c0-1.69-.84-3.18-2.1-4.12"/></g></svg>',tulip:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M16.83 20.16h-2v8.253c-.748-1.858-2.56-3.183-4.68-3.183H8.08a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.793v-.007a.3.3 0 0 0 .12.027h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.919.017-3.59 1.365-4.1 3.197z"/><path fill="#f70a8d" d="M20.83 19.26H10.81v-6.02c0-3.71 1.48-7.26 4.1-9.87l.01-.01c.48-.48 1.26-.48 1.74 0c2.67 2.62 4.17 6.21 4.17 9.95z"/><path fill="#ff6dc6" d="M24.64 4.11c0-.58-.37-1.08-.83-1.09c-3.27-.02-6.08 4.77-7.32 9.46c-.22.83-1.12.81-1.34-.02c-1.23-4.67-4.03-9.44-7.29-9.44c-.47 0-.85.49-.85 1.09v6.21L7 10.31c0 .39.02.78.05 1.16c.08 1.1.29 3.08.62 4.05c1.32 4.09 4.47 6.03 8.16 6.03c3.41 0 6.37-1.54 7.83-5.15c.63-1.46.99-4.06.99-5.84z"/></g></svg>',sunflower:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#44911b" d="M17.107 19.75h-2v8.228c-.755-1.844-2.56-3.158-4.67-3.158h-2.07a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.783v-.006a.3.3 0 0 0 .12.026h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.92.017-3.59 1.365-4.1 3.197z"/><path fill="#fcd53f" d="M23.847 11.78c1.91.53 3.23 1.6 3.1 2.67s-1.66 1.78-3.63 1.84c1.32 1.48 1.85 3.1 1.15 3.93c-.69.82-2.36.58-4.04-.45c.3 1.96-.15 3.61-1.18 3.92s-2.3-.8-3.15-2.58c-.82 1.81-2.08 2.95-3.12 2.65c-1.03-.3-1.5-1.93-1.24-3.88c-1.67 1.07-3.35 1.34-4.06.52s-.21-2.43 1.07-3.93c-1.99-.02-3.54-.71-3.69-1.78s1.15-2.15 3.04-2.71c-1.66-1.09-2.58-2.52-2.13-3.49c.47-1 2.21-1.2 4.15-.58c-.83-1.85-.84-3.61.09-4.19c.89-.56 2.38.15 3.64 1.6c.34-1.89 1.25-3.25 2.31-3.22c.98.01 1.8 1.21 2.13 2.91c1.19-1.27 2.53-1.86 3.37-1.35c.92.55.95 2.24.19 4.06c1.89-.6 3.58-.42 4.05.55c.47.96-.42 2.4-2.05 3.51"/><path fill="#8c5543" d="M16 19a5.861 5.861 0 1 0 0-11.722A5.861 5.861 0 0 0 16 19"/><path fill="#6d4534" d="m21.118 10.281l-.8.8l1.117 1.117l.295-.295a5.9 5.9 0 0 1 .071 2.076l-.366-.366l-1.114 1.114l.96.958a5.9 5.9 0 0 1-2.462 2.594l-1.027-1.023l-1.106 1.106l.515.515a5.9 5.9 0 0 1-2.437-.008l.508-.507l-1.117-1.117l-1.013 1.012a5.9 5.9 0 0 1-1.916-1.717l1.11 1.11l1.112-1.112l-1.112-1.112l-1.112 1.112a6 6 0 0 1-.523-.891l.928-.928l-1.112-1.112l-.325.325a5.9 5.9 0 0 1 .07-1.994l.255.255l1.096-1.095l-.762-.76q.245-.45.564-.85l.905.902l1.12-1.12l-.88-.877a6 6 0 0 1 .885-.53l.702.7l1.12-1.12l-.107-.105a6 6 0 0 1 1.633-.007l-.113.113l1.112 1.112l.716-.716q.47.224.89.523l-.899.9l1.112 1.111l.935-.935q.322.395.572.842m-.392 6.264l-1.113-1.111l-1.114 1.115l1.114 1.11zM11.224 12.9l1.112 1.112l1.098-1.099l-1.113-1.11zm1.804-1.804l1.114 1.11l1.118-1.118l-1.112-1.111zm1.827-1.826l1.112 1.11l1.118-1.117l-1.112-1.112zm1.82 1.817l1.113 1.11l1.116-1.115l-1.112-1.112zm-1.825 1.825l1.114 1.11l1.116-1.117l-1.112-1.11zm-1.807 1.807l1.112 1.112l1.102-1.102l-1.114-1.11zm7.685-1.814L19.61 11.79l-1.116 1.115l1.118 1.116zm-1.822 1.822l-1.118-1.116l-1.116 1.117l1.119 1.115zm-1.822 1.823l-1.12-1.115l-1.102 1.103l1.117 1.117z"/></g></svg>',blossom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M17.096 19.84h-2v8.409c-.708-1.939-2.562-3.339-4.74-3.339h-2.07a.28.28 0 0 0-.28.28v.42c0 2.4 1.95 4.35 4.26 4.37l2.88.01a.3.3 0 0 0 .097-.02h1.808a.3.3 0 0 0 .105.02h2.07c2.7 0 4.9-2.15 5.04-4.81a.253.253 0 0 0-.25-.27l-2.88.01c-1.85.016-3.468 1.27-4.04 3z"/><path fill="#d3d3d3" d="M16.055 2c-2.35 0-4.19 2.02-3.97 4.36l.18 1.91l-1.98-.68a3.98 3.98 0 0 0-5.17 2.82c-.55 2.25.92 4.49 3.21 4.88l1.78.3l-1.46 1.8a3.984 3.984 0 0 0 .88 5.83c1.92 1.29 4.54.67 5.69-1.34l.91-1.45l.74 1.45a3.995 3.995 0 0 0 5.69 1.34c1.95-1.31 2.36-4.01.88-5.83l-1.44-1.78l1.9-.32a3.993 3.993 0 0 0 3.21-4.88a3.99 3.99 0 0 0-5.18-2.82l-2 .69l.14-2.01c.13-2.3-1.7-4.27-4.01-4.27"/><path fill="#ffb02e" d="M15.996 17.36a3.78 3.78 0 1 0 0-7.56a3.78 3.78 0 0 0 0 7.56"/></g></svg>',"spiral-shell":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="m6.773 3.614l-.379.36a2.43 2.43 0 0 0-2.065-.708l-1.307.76v4.102l10.014 20.18L26 29.897l.848-.002c3.951-3.77 4.143-10.032.375-13.99l-1.812-1.9a7.5 7.5 0 0 0-2.048-4.57a7.48 7.48 0 0 0-6.188-2.277l-1.622-1.703a3.477 3.477 0 0 0-4.791-.265l.291-.305l-1.14-1.2c-.84-.88-2.25-.92-3.14-.07"/><path fill="#212121" d="m22.781 25.6l2.662 2.794c3.2-3.05 3.32-8.11.27-11.3l-.524-.55a7.46 7.46 0 0 1-2.086 3.52a4.06 4.06 0 0 0-.322 5.537"/><path fill="#9b9b9b" d="M4.375 9c-.276-1.474 2.256-4.406 3.862-5.999a2.2 2.2 0 0 0-1.464.613L3.981 6.27c-.848-1.033-.167-2.355.392-3.009A2.44 2.44 0 0 0 2.86 7.337l-.166.157c-.89.85-.93 2.26-.08 3.15l1.187 1.25a3.51 3.51 0 0 0 .293 4.48L5.88 18.25a9.802 9.802 0 0 0 9.644 11.664l10.688-.019c-5.3-.698-13.53-3.33-14.586-8.895c-1.367-7.207 3.566-11.944 9.887-12.982a7.54 7.54 0 0 0-4.77-.804L7.257 15.43c-.517-.571-1.08-1.544-1.006-2.805c.1-1.7 4.79-6.207 7.124-8.25a3.45 3.45 0 0 0-2.76.95l-5.573 5.31c-.262-.326-.518-.844-.666-1.635"/></g></svg>',"tropical-fish":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#635994" d="M3.39 18.945a1.055 1.055 0 1 0-.671 0a1.055 1.055 0 1 0 .672 0"/><path fill="#f9c23c" d="M23 7h-8.625v23H23a3 3 0 0 0 3-3v-8.058c.002 2.404 1.438 4.152 2.656 4.152c.975 0 1.282-.688 1.313-1.032V16.75c0-1.425-.313-1.656-.875-1.656c-1.995 0-2.983 2.013-3.094 3.363V10a3 3 0 0 0-3-3"/><path fill="#00a6ed" d="M14.5 30C20.851 30 26 24.851 26 18.5S20.851 7 14.5 7a11.46 11.46 0 0 0-7.8 3.05l-.073 16.833A11.46 11.46 0 0 0 14.5 30"/><path fill="#8d65c5" d="M6.627 26.883A11.47 11.47 0 0 1 3 18.5a11.47 11.47 0 0 1 3.7-8.45a10.8 10.8 0 0 1 3.988 8.388c0 3.417-1.586 6.464-4.06 8.445"/><path fill="#f9c23c" d="M18 21.452v-5.874a.7.7 0 0 0-1.174-.516l-2.997 2.754a1 1 0 0 0 .01 1.482l2.995 2.676A.7.7 0 0 0 18 21.452"/><path fill="#1c1c1c" d="M8.172 16.516a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0"/></g></svg>',lollipop:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3c07b" d="M15.236 15.79a1.75 1.75 0 0 1 2.474-.054l11.75 11.25a1.75 1.75 0 0 1-2.42 2.528l-11.75-11.25a1.75 1.75 0 0 1-.054-2.474"/><path fill="#5092ff" d="M3.386 6.918a10.05 10.05 0 0 1 3.75-3.658C13.351 6.72 12 12 12 12C9.96 8.791 8.015 7.264 3.386 6.918"/><path fill="#00d26a" d="M2 11.907a9.95 9.95 0 0 1 1.417-5.042C10.297 6.967 12 12 12 12c-3.333-1.748-5.71-2.094-10-.093"/><path fill="#fcd53f" d="M3.293 16.921A9.96 9.96 0 0 1 2 11.844C8.01 8.494 12 12 12 12c-3.783.095-6.017 1.146-8.707 4.921"/><path fill="#ff9f2e" d="M6.921 20.616a10.05 10.05 0 0 1-3.66-3.75C6.79 10.959 12 12 12 12c-3.22 1.904-4.58 4.027-5.079 8.616"/><path fill="#f837a2" d="M6.865 20.583C6.967 13.703 12 12 12 12c-1.827 3.297-2.028 5.775-.093 10a9.95 9.95 0 0 1-5.042-1.417"/><path fill="#c790f1" d="M11.844 21.999C8.494 15.99 12 12 12 12c.173 3.837 1.18 6.105 4.92 8.708a9.95 9.95 0 0 1-5.076 1.29"/><path fill="#5092ff" d="M16.866 20.738C10.96 17.211 12 12 12 12c2.095 3.32 3.973 4.747 8.614 5.082a10.05 10.05 0 0 1-3.748 3.656"/><path fill="#00d26a" d="M20.583 17.135C13.703 17.033 12 12 12 12c3.342 1.803 5.852 2.093 10 .094a9.95 9.95 0 0 1-1.417 5.04"/><path fill="#fcd53f" d="M21.999 12.156L22 12a9.96 9.96 0 0 0-1.292-4.92C18.038 10.964 15.792 11.881 12 12c0 0 3.991 3.507 9.999.156"/><path fill="#ff9f2e" d="M17.082 3.386a10.05 10.05 0 0 1 3.656 3.748C17.211 13.04 12 12 12 12c3.107-1.928 4.712-3.772 5.082-8.614"/><path fill="#f837a2" d="M17.135 3.417A9.95 9.95 0 0 0 12.096 2c2.141 4.27 1.64 6.836-.096 10c0 0 5.033-1.703 5.134-8.583"/><path fill="#c790f1" d="M12.156 2.001L12 2a9.95 9.95 0 0 0-4.916 1.29C11.228 5.88 12.116 8.218 12 12c0 0 3.507-3.991.156-9.999"/></g></svg>',candy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M13 4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .8-.97 1.2-1.54.64l-.05-.05c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l.05.05C5.2 8.03 4.8 9 4 9c-1.1 0-2 .9-2 2s.9 2 2 2h9z"/><path fill="#fcd53f" d="M19 24.488A9 9 0 0 1 16 25c-.824 0-1.621-.11-2.38-.318a9 9 0 0 0 2.74.308a6.41 6.41 0 0 1 .94-7.17a6.42 6.42 0 0 1 7.69-1.46A9 9 0 0 0 25 16c0 1.052-.18 2.062-.512 3l-.26.21h-1.726c-1.93 0-3.268 1.344-3.268 3.274v1.756z"/><path fill="#fcd53f" d="M24.66 13.54a8.9 8.9 0 0 0-2.57-.38c-2.54 0-4.97 1.09-6.66 2.99a9 9 0 0 0-1.79 3.06a8.8 8.8 0 0 0-.46 3.39c.04.7.16 1.39.36 2.06a9 9 0 0 1-2.344-1.048c-.022-.048-.13-.122-.15-.17c-1.438-3.251-.997-7.248 1.514-10.074c1.84-2.07 4.535-3.184 7.105-3.184c1.308 0 2.506.285 3.723.838c.04.018.183.17.222.188c-.44-.7-.99-1.35-1.63-1.93a8.9 8.9 0 0 0-2.41-1.54c-.074 0-.11.06-.183.062a11.8 11.8 0 0 0-8.59 3.977a12 12 0 0 0-2.389 4.09c-.387 1.142-.55 2.29-.581 3.496c-.002.068-.096.124-.097.192a9 9 0 1 1 16.93-6.017"/><path fill="#f8312f" d="M12.69 13.46a9.3 9.3 0 0 1 6.97-3.13c1.35 0 2.7.29 3.95.88c-.44-.7-.99-1.35-1.63-1.93a8.9 8.9 0 0 0-2.41-1.54c-1.63.01-3.21.35-4.71 1c-1.58.69-2.96 1.7-4.11 2.99c-1.07 1.2-1.87 2.58-2.39 4.09c-.41 1.21-.62 2.47-.63 3.75c.5 1.17 1.26 2.25 2.28 3.15c.38.34.78.64 1.19.9c-1.52-3.28-1.06-7.29 1.49-10.16M19 28c0 1.1.9 2 2 2s2-.9 2-2c0-.8.97-1.2 1.54-.64l.05.05c.78.78 2.05.78 2.83 0s.78-2.05 0-2.83l-.05-.05C26.8 23.97 27.2 23 28 23c1.1 0 2-.9 2-2s-.9-2-2-2h-5.5c-1.93 0-3.5 1.57-3.5 3.5z"/><path fill="#f8312f" d="M17.33 17.835c-1.81 2.03-2.13 4.865-.97 7.155c-.94.04-1.89-.07-2.82-.33c-.2-.67-.39-1.369-.43-2.069c-.07-1.16.124-2.372.494-3.462c.39-1.13.988-2.1 1.788-3a9.04 9.04 0 0 1 6.698-3.02c.88 0 1.74.181 2.57.431c.26.92.37 1.87.33 2.82c-.91-.46-1.91-.655-2.9-.655c-1.76 0-3.49.71-4.76 2.13"/></g></svg>',doughnut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M27.32 14C25.67 9.34 21.22 6 16 6S6.33 9.34 4.68 14H4v4c0 6.63 5.37 12 12 12s12-5.37 12-12v-4zm-6.82 3.64c0 2.21-1.79 4-4 4h-1c-2.21 0-4-1.79-4-4s1.79-4 4-4h1c2.21 0 4 1.79 4 4"/><path fill="#6d4534" d="M16 2C9.37 2 4 7.37 4 14s5.37 12 12 12s12-5.37 12-12S22.63 2 16 2m4.5 12c0 2.21-1.79 4-4 4h-1c-2.21 0-4-1.79-4-4s1.79-4 4-4h1c2.21 0 4 1.79 4 4"/><path fill="#00a6ed" d="M12.85 7.76c-.2.2-.54.2-.74 0l-.79-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54.01.74m-6.61 6.26c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm17 2.74c-.2-.2-.2-.54 0-.74l.78-.78c.2-.2.54-.2.74 0s.2.54 0 .74l-.78.78c-.2.21-.54.21-.74 0m-11.48 5c-.2.2-.54.2-.74 0l-.78-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54 0 .74m9.48-13.74c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0z"/><path fill="#ff6dc6" d="M16.24 6.02c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm7.78 5.74c.2.2.54.2.74 0c.21-.2.21-.54 0-.74l-.78-.78c-.2-.2-.54-.2-.74 0s-.2.54 0 .74zM8.24 9.85c-.2-.2-.2-.54 0-.74l.78-.78c.2-.2.54-.2.74 0s.2.54 0 .74l-.78.78c-.2.2-.54.2-.74 0m6 13.17c-.2.2-.2.54 0 .74c.2.21.54.21.74 0l.78-.78c.2-.2.2-.54 0-.74s-.54-.2-.74 0zm7.52-2.26c-.2.2-.54.2-.74 0l-.78-.78c-.2-.2-.2-.54 0-.74s.54-.2.74 0l.78.78c.21.2.21.54 0 .74m-11.74-2.91c.2.2.54.2.74 0c.21-.21.21-.54 0-.74l-.78-.78c-.2-.2-.54-.2-.74 0s-.2.54 0 .74z"/></g></svg>',"crescent-moon":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#fcd53f" d="M23.41 5.632c.5 2.04.56 4.26.02 6.56c-1.26 5.33-5.64 9.51-11.02 10.48c-2.91.53-5.68.13-8.09-.92c-.56-.25-1.09.39-.8.93c2.65 4.88 8.11 8 14.22 7.19c6.23-.83 11.22-5.91 11.97-12.15c.6-5.18-1.6-9.86-5.28-12.75c-.47-.36-1.16.08-1.02.66"/><path fill="#f9c23c" d="M27.87 12.562a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0m-12.92 12.88a1.57 1.57 0 1 1-3.14 0a1.57 1.57 0 0 1 3.14 0m11.85-6.47a.99.99 0 1 0 0-1.98a.99.99 0 0 0 0 1.98m-2 3.01a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></g></svg>',"ringed-planet":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff944c" d="M25.054 16.005a9.027 9.027 0 0 1-10.632 8.885C12.794 23.32 11 22.5 9.17 21.875a9 9 0 0 1-2.143-6.566c1.618-3.006 5.046-6.894 8.176-8.294q.408-.037.825-.037c2.077 0 3.99.701 5.515 1.88c.637 1.589 2.11 4.309 3.365 5.512q.146.796.147 1.635"/><path fill="#fbb8ab" d="M11.957 11.909c-1.8 1.921-3.773 2.959-4.93 3.386a9.03 9.03 0 0 1 8.168-8.28c-.252.869-.94 2.442-3.238 4.894m8.638 8.386c1.904-2.145 3.278-4.157 4.302-5.975a9.03 9.03 0 0 0-3.36-5.466c-.637 1.541-2.353 4.264-5.512 7.486c-2.497 2.547-4.798 4.297-6.87 5.52a9.02 9.02 0 0 0 5.295 3.035c2.355-1.312 4.615-2.877 6.145-4.6"/><path fill="#fcd53f" d="M27.231 4.88c-.453-.527-1.06-.703-1.584-.718c-.496-.015-.99.109-1.425.264c-.875.312-1.86.883-2.811 1.522a37 37 0 0 0-2.198 1.608a9 9 0 0 1 2.452 1.398c.402-.299.803-.585 1.194-.847c.898-.602 1.67-1.03 2.237-1.233l.066-.023c-.027.11-.07.247-.137.42c-.28.72-.84 1.66-1.633 2.754c-1.57 2.169-3.85 4.669-5.909 6.752c-1.996 2.02-4.713 4.43-7.096 6.17c-1.199.875-2.26 1.542-3.074 1.915q-.26.119-.452.185c.125-.34.362-.794.725-1.367c.392-.622.876-1.299 1.402-2.023a9 9 0 0 1-1.414-2.478q-.216.3-.438.603l-.07.098c-.587.805-1.188 1.635-1.679 2.411c-.477.755-.924 1.573-1.119 2.35c-.2.801-.194 1.89.737 2.654c.59.484 1.298.504 1.803.435c.523-.07 1.068-.266 1.588-.504c1.049-.48 2.275-1.267 3.524-2.18c2.515-1.837 5.337-4.341 7.413-6.441c2.092-2.118 4.48-4.728 6.166-7.055c.835-1.155 1.55-2.308 1.95-3.338c.354-.914.677-2.29-.218-3.333M6.758 25.451v.012z"/></g></svg>',rocket:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M29.2 2.95c-.947-.947-2.7-.998-3.818-.425c-.913.314-1.874.667-2.854 1.063l.01.01c-2.575 1.095-6.427 3.04-9.51 5.902c-2.164 2.01-3.404 3.556-4.235 4.965l-5.298 1.95a1 1 0 0 0-.362 1.646l11.138 11.137a1 1 0 0 0 1.645-.362l2.204-5.986c1.608-.958 3.223-2.165 4.908-3.85c2.39-2.39 4.366-6.56 5.513-9.357l.009.008c.4-.99.758-1.961 1.074-2.883c.573-1.118.74-2.654-.424-3.818"/><path fill="#f4f4f4" d="M23.299 4.365c-2.517 1.04-6.478 2.978-9.59 5.868c-2.015 1.87-3.172 3.294-3.94 4.55c-.769 1.255-1.175 2.38-1.663 3.74l-.002.007c-.17.474-.35.977-.559 1.514l4.556 4.556c3.602-1.48 6.74-2.828 10.22-6.307c2.351-2.352 4.339-6.642 5.454-9.421z"/><path fill="#9b9b9b" d="M24.528 11.25a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"/><path fill="#83cbff" d="M23.528 11.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"/><path fill="#ff8257" d="M2.451 29.61C1.744 28.905 2.028 24 4.528 23c0 0 2.5-1 4.11.6c1.612 1.601.89 3.4.89 3.4c-.707 2.121-3.718 2.965-4.071 2.61c-.195-.194.156-.55 0-.706c-.157-.157-.398.022-1.06.353c-.472.236-1.663.637-1.946.354"/><path fill="#533566" d="M6.088 21.06a1.5 1.5 0 0 1 2.122 0l3.535 3.536a1.5 1.5 0 1 1-2.121 2.122l-3.536-3.536a1.5 1.5 0 0 1 0-2.121"/><path fill="#f92f60" d="M15.535 18.722c.442-1.2-.725-2.368-1.926-1.926l-7.114 2.619a1 1 0 0 0-.362 1.646l5.138 5.137a1 1 0 0 0 1.645-.362z"/></g></svg>',snowman:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M23.62 12.155c0 1.072-.215 1.972-.659 2.694a11.18 11.18 0 0 1 3.779 8.386c0 1.544-.314 2.852-.934 3.935c-.623 1.086-1.518 1.883-2.58 2.456c-2.08 1.122-4.845 1.409-7.686 1.409s-5.607-.287-7.686-1.409c-1.062-.573-1.957-1.37-2.58-2.457c-.62-1.082-.934-2.39-.934-3.934c0-3.33 1.456-6.32 3.762-8.372c-.441-.725-.652-1.63-.652-2.708a8.074 8.074 0 0 1 8.08-8.08c4.46 0 8.09 3.616 8.09 8.08"/><path fill="#433b6b" d="M6.5 13.575a.5.5 0 0 0-1 0v1.607l-1.09-.954a.5.5 0 1 0-.659.753l2.35 2.054H4.95a.5.5 0 1 0 0 1h2.24q.025 0 .05-.003l1.67 1.46a.5.5 0 0 0 .658-.754l-3.072-2.685l.003-.058zm18.52-.5a.5.5 0 0 1 .5.5v1.607l1.091-.954a.5.5 0 1 1 .658.753l-2.36 2.064h1.111a.5.5 0 0 1 0 1h-2.256L22.11 19.49a.5.5 0 0 1-.658-.753l3.072-2.685l-.003-.058v-2.42a.5.5 0 0 1 .5-.5"/><path fill="#fff" d="M21.535 14.984c.687-.568 1.085-1.453 1.085-2.83c0-3.91-3.18-7.08-7.09-7.08s-7.08 3.16-7.08 7.08c0 1.39.392 2.278 1.072 2.846a10.19 10.19 0 0 0-4.182 8.235c0 5.63 4.57 6.8 10.2 6.8s10.2-1.17 10.2-6.8c0-3.39-1.657-6.396-4.205-8.251"/><path fill="#0074ba" d="M20.54 24.035h-1.01v.5c0 .26-.22.49-.49.49a.49.49 0 0 1-.49-.49v-.5h-1.03v.49a.49.49 0 0 1-.98 0v-.944a.7.7 0 0 1-.03-.196v-5.35h5.03v5.35q0 .084-.02.161v.989c0 .26-.22.49-.49.49a.49.49 0 0 1-.49-.49z"/><path fill="#0084ce" d="M8.815 14.081c-.256.287-.395.793-.395 1.614c0 3.93 3.19 4.39 7.12 4.39s7.12-.46 7.12-4.39c0-.836-.145-1.345-.41-1.63c-.933 1.941-3.53 1.94-6.585 1.94h-.378c-3.035.001-5.56.002-6.472-1.924"/><path fill="#321b41" d="m9.548 6.359l.293-.844l-.8-.332c-.44-1.03.03-2.22 1.06-2.66l1.81-.78c1.03-.44 2.21.03 2.65 1.06l-.403.846l.912.342l.251-.108a.711.711 0 1 1 .56 1.31l-6.04 2.59a.715.715 0 0 1-.94-.37c-.15-.36.01-.79.38-.94z"/><path fill="#0074ba" d="m15.074 3.99l-5.53 2.37l-.503-1.177l5.53-2.37z"/><path fill="#ff6723" d="m19.69 11.135l-4.06-.42c-.45 0-.81.36-.81.81s.36.81.81.81l4.06-.42c.22 0 .4-.18.4-.4s-.18-.38-.4-.38"/><path fill="#433b6b" d="M14.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"/><path fill="#00a6ed" d="M5.28 9.705h.2c.29 0 .53.24.53.53s-.24.53-.53.53h-.2l.15.13c.2.21.2.54 0 .75c-.21.21-.55.21-.75 0l-.14-.14v.2c0 .29-.24.53-.53.53s-.53-.24-.53-.53v-.2l-.14.15c-.21.21-.55.21-.75 0a.525.525 0 0 1 0-.75l.14-.14h-.2c-.29 0-.53-.24-.53-.53s.24-.53.53-.53h.2l-.15-.14a.525.525 0 0 1 0-.75c.21-.21.55-.21.75 0l.14.15v-.2c0-.29.24-.53.53-.53s.53.24.53.53v.2l.14-.15c.21-.21.54-.21.75 0c.2.21.2.54 0 .75zm22.44.23h-.11l.08-.08c.11-.11.11-.29 0-.4a.284.284 0 0 0-.4 0l-.08.08v-.11c0-.15-.13-.28-.28-.28s-.28.13-.28.28v.11l-.08-.08a.284.284 0 0 0-.4 0c-.11.11-.11.29 0 .4l.08.08h-.11c-.15 0-.28.13-.28.28s.13.28.28.28h.11l-.08.08c-.11.11-.11.29 0 .4s.29.11.4 0l.08-.08v.11c0 .15.13.28.28.28s.28-.13.28-.28v-.11l.08.08c.11.11.29.11.4 0s.11-.29 0-.4l-.08-.08h.11c.15 0 .28-.13.28-.28c0-.16-.12-.28-.28-.28m.96 13.02h.11c.16 0 .28.13.28.28s-.13.28-.28.28h-.11l.08.08c.11.11.11.29 0 .4s-.29.11-.4 0l-.08-.08v.11c0 .15-.13.28-.28.28s-.28-.13-.28-.28v-.11l-.08.08c-.11.11-.29.11-.4 0a.284.284 0 0 1 0-.4l.08-.08h-.11c-.15 0-.28-.13-.28-.28s.13-.28.28-.28h.11l-.08-.08a.283.283 0 0 1 .4-.4l.08.08v-.11c0-.15.13-.28.28-.28s.28.13.28.28v.11l.08-.08a.283.283 0 0 1 .4.4z"/><path fill="#26c9fc" d="M26.28 4.705h.2c.29 0 .53.24.54.52c0 .29-.24.53-.53.53h-.2l.14.14c.2.21.2.54 0 .75c-.21.21-.55.21-.75 0l-.14-.14v.21c0 .29-.24.53-.53.53s-.53-.24-.53-.53v-.2l-.14.14c-.21.21-.55.21-.75 0a.525.525 0 0 1 0-.75l.14-.14h-.2c-.29 0-.53-.24-.53-.53s.24-.53.52-.53h.2l-.14-.14a.525.525 0 0 1 0-.75c.21-.21.55-.21.75 0l.14.14v-.2c0-.29.24-.53.53-.53s.53.24.53.53v.2l.14-.14c.21-.21.54-.21.75 0c.2.21.2.54 0 .75zm-19.59.25h.1c.16 0 .29.13.29.28s-.13.28-.28.28h-.11l.08.08c.11.11.11.29 0 .4s-.29.11-.4 0l-.08-.08v.11c0 .15-.13.28-.28.28s-.28-.13-.28-.28v-.11l-.08.08c-.11.11-.29.11-.4 0a.284.284 0 0 1 0-.4l.08-.08h-.11c-.15 0-.28-.13-.28-.28s.13-.28.28-.28h.11l-.08-.08a.284.284 0 0 1 0-.4c.11-.11.29-.11.4 0l.08.08v-.11c0-.15.13-.28.28-.28s.28.13.28.28v.11l.08-.08c.11-.11.29-.11.4 0s.11.29 0 .4zm-2.03 14.98h-.11l.08-.08c.11-.11.11-.29 0-.4a.284.284 0 0 0-.4 0l-.08.08v-.11c0-.15-.13-.28-.28-.28s-.28.13-.28.28v.11l-.08-.08a.284.284 0 0 0-.4 0c-.11.11-.11.29 0 .4l.08.08h-.11c-.15 0-.28.13-.28.28s.13.28.28.28h.11l-.08.08c-.11.11-.11.29 0 .4s.29.11.4 0l.08-.08v.11c0 .15.13.28.28.28s.28-.13.28-.28v-.11l.08.08c.11.11.29.11.4 0s.11-.29 0-.4l-.08-.07h.11c.15 0 .28-.13.28-.28c0-.16-.13-.29-.28-.29"/></g></svg>',"crystal-ball":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M16 27c6.627 0 12-5.373 12-12S22.627 3 16 3S4 8.373 4 15s5.373 12 12 12"/><path fill="#b4acbc" d="M24 24H8l-.921 4.18c-.333.897.433 1.82 1.512 1.82h14.822c1.078 0 1.834-.923 1.512-1.82z"/><path fill="#fcd53f" d="M14.205 6.264a.5.5 0 0 1-.26-.261l-.38-.897a.19.19 0 0 0-.34 0l-.38.897a.48.48 0 0 1-.26.261l-.48.222a.192.192 0 0 0 0 .343l.48.221c.12.05.21.152.26.262l.38.897a.19.19 0 0 0 .34 0l.38-.897a.48.48 0 0 1 .26-.262l.48-.221a.192.192 0 0 0 0-.343zm9.915 4.54a.73.73 0 0 1-.36-.373l-.54-1.28a.274.274 0 0 0-.49 0l-.54 1.28a.73.73 0 0 1-.36.373l-.68.312c-.2.1-.2.393 0 .494l.68.312c.16.07.29.211.36.373l.54 1.28c.1.2.39.2.49 0l.54-1.28a.72.72 0 0 1 .36-.373l.68-.312c.2-.101.2-.393 0-.494zM12.586 14.03c.139.352.398.636.73.792l1.379.655c.407.215.407.83 0 1.046l-1.378.655c-.324.156-.592.44-.73.792l-1.092 2.707a.54.54 0 0 1-.99 0L9.414 17.97a1.46 1.46 0 0 0-.73-.792l-1.379-.655c-.407-.215-.407-.83 0-1.046l1.378-.655c.324-.156.592-.44.73-.792l1.092-2.707a.54.54 0 0 1 .99 0z"/></g></svg>',castle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M18.73 8.235h-5.42c-.3 0-.5-.32-.36-.59l2.71-5.42a.4.4 0 0 1 .72 0l2.71 5.42c.14.27-.06.59-.36.59M12.348 20H3.652c-.485 0-.802-.417-.58-.773l4.348-8.934c.242-.39.918-.39 1.16 0l4.348 8.934c.221.356-.095.773-.58.773m7.304 0h8.696c.485 0 .802-.417.58-.773l-4.348-8.934c-.242-.39-.918-.39-1.16 0l-4.348 8.934c-.221.356.095.773.58.773"/><path fill="#998ea4" d="M19.391 7h-.447a.6.6 0 0 0-.609.605a.606.606 0 0 1-.609.624h-.285a.6.6 0 0 1-.609-.605a.606.606 0 0 0-.609-.624h-.447a.6.6 0 0 0-.608.605a.606.606 0 0 1-.61.624h-.285a.6.6 0 0 1-.608-.605a.606.606 0 0 0-.61-.624h-.446a.616.616 0 0 0-.609.614v3.811c0 .336.167.575.5.575h.5c-.504 0-1 0-1 1v11h8V13c0-1-.496-1-1-1h.5c.333 0 .5-.239.5-.575V7.614A.6.6 0 0 0 19.39 7"/><path fill="#b4acbc" d="M30 19.198v.39L29.99 30H18.957l-2.99-1.697L12.977 30H2V18.599c0-.333.31-.599.66-.599h.47c.35 0 .63.266.63.599s.28.599.63.599h.289c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .63.266.63.599s.28.599.629.599h.3c.35 0 .63-.267.63-.6s.28-.598.63-.598h.47c.35 0 .629.266.629.599s.28.599.63.599h.31c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.349 0 .629.266.629.599s.28.599.63.599h.29c.35 0 .63-.267.63-.6s.28-.598.63-.598h.499c.35 0 .63.266.63.599s.28.599.63.599h.29c.35 0 .63-.267.63-.6s.279-.598.629-.598h.46c.35 0 .63.266.63.599s.28.599.63.599h.29c.35 0 .629-.267.629-.6s.28-.598.63-.598h.47c.35 0 .63.266.63.599s.28.599.63.599h.289c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .63.266.63.599s.28.599.629.599h.29c.35 0 .63-.267.63-.6s.28-.598.63-.598h.46c.35 0 .629.266.629.599z"/><path fill="#5235a6" d="M15 14h2v-1c0-.557-.456-1-1-1c-.557 0-1 .456-1 1zm-2 16h5.99v-3.23c0-1.781-1.33-2.77-2.99-2.77c-1.65 0-3 .979-3 2.77z"/><path fill="#26c9fc" d="M7.5 7.306V9.19c0 .215.212.361.414.293l2.35-1.117a.125.125 0 0 0 0-.226l-2.36-1.127a.312.312 0 0 0-.404.293m16 0V9.19c0 .215.212.361.414.293l2.35-1.117a.125.125 0 0 0 0-.226l-2.36-1.127a.312.312 0 0 0-.404.293"/></g></svg>',"cherry-blossom":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6dc6" d="M26.23 19.766c2.47-.8 3.96-3.19 3.76-5.68a.53.53 0 0 0-.43-.47s-.89-.19-1.09-.23c-.1-.02-.14-.15-.08-.22c.13-.14.75-.84.75-.84c.16-.17.19-.44.07-.64c-1.29-2.13-3.9-3.19-6.38-2.38c-.71.23-1.33.65-1.87 1.18c.34-.68.54-1.39.54-2.14c0-2.6-1.81-4.76-4.24-5.33a.56.56 0 0 0-.59.26s-.46.79-.56.97c-.05.09-.19.08-.23.01c-.1-.17-.56-.98-.56-.98c-.12-.2-.36-.32-.58-.26c-2.42.56-4.24 2.72-4.24 5.32c0 .75.21 1.46.54 2.14c-.54-.53-1.15-.94-1.86-1.17c-2.48-.81-5.09.25-6.38 2.38c-.12.2-.09.46.07.64c0 0 .61.68.75.83c.07.07.02.21-.07.23l-1.1.23c-.23.05-.41.24-.43.47a5.48 5.48 0 0 0 3.76 5.68c.72.23 1.46.26 2.22.14c-.68.35-1.28.81-1.72 1.42c-1.53 2.1-1.33 4.91.3 6.8c.15.18.41.23.63.13c0 0 .83-.37 1.02-.46c.09-.04.2.04.19.13l-.12 1.12c-.02.23.1.47.32.56c2.3.96 5.03.28 6.56-1.82c.44-.61.69-1.3.82-2.05c.13.75.38 1.45.82 2.05c1.53 2.1 4.26 2.78 6.56 1.82c.22-.09.34-.32.32-.56c0 0-.1-.91-.12-1.11c-.01-.1.1-.18.19-.14l1.03.46c.21.1.48.05.63-.13c1.63-1.89 1.83-4.7.3-6.8c-.44-.61-1.04-1.06-1.72-1.42c.76.12 1.5.09 2.22-.14"/><path fill="#fff" d="M16.51 13.252a1 1 0 1 0-1 0v1.284a2.47 2.47 0 0 0-1.648 1.198l-1.224-.397a1 1 0 1 0-.309.951l1.225.397q-.014.134-.014.27c0 .64.243 1.224.643 1.663l-.758 1.043a1 1 0 1 0 .809.588l.757-1.043a2.46 2.46 0 0 0 2.033.002l.752 1.04a1 1 0 1 0 .81-.587l-.753-1.04a2.46 2.46 0 0 0 .632-1.937l1.215-.395a1 1 0 1 0-.31-.951l-1.214.394a2.47 2.47 0 0 0-1.646-1.196z"/></g></svg>',herb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#44911b" d="m8.018 29.6l1.14.39l1.35-3.898l4.02.418c.33.03.63-.21.66-.54a.605.605 0 0 0-.54-.66l-3.733-.39a13.2 13.2 0 0 1 5.09-6.46l4.143.44c.33.03.63-.21.66-.54a.605.605 0 0 0-.54-.66l-2.904-.31a14.4 14.4 0 0 0 4.024-6.03l.38-1.09a.6.6 0 0 0-.37-.77a.6.6 0 0 0-.77.37l-.38 1.09a13.2 13.2 0 0 1-4.046 5.824l-1.704-3.504a.605.605 0 1 0-1.09.53l1.806 3.716l-.006.004a14.4 14.4 0 0 0-5.282 6.59l-1.308-2.69a.605.605 0 1 0-1.09.53l1.83 3.763z"/><path fill="#86d72f" d="M23.978 2c-3.34 1.63-4.74 5.66-3.11 9a6.727 6.727 0 0 0 3.11-9m-8.19 7.05l-1.81-3.72a4.226 4.226 0 0 0-1.95 5.65l1.81 3.72a4.23 4.23 0 0 0 1.95-5.65m-5.43 6.39l-2.32-4.76c-2.68 1.31-3.8 4.54-2.49 7.22l2.32 4.76a5.41 5.41 0 0 0 2.49-7.22m17.56.03l-4.12-.43c-2.32-.25-4.39 1.44-4.64 3.76l4.12.43c2.32.24 4.4-1.44 4.64-3.76m-8.57 6.13l5.27.55a5.403 5.403 0 0 1-5.94 4.81l-5.27-.55a5.403 5.403 0 0 1 5.94-4.81"/></g></svg>',"fallen-leaf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="M27.91 8.01c-7.13 0-12.91 5.78-12.97 12.66l.06 8.57c0 .43.37.77.79.74C23.71 29.57 30 23.03 30 15.01v-7z"/><path fill="#ca0b4a" d="M19.06 24.92a.753.753 0 0 1-.61-1.19l9.42-13.21c.42-.59.64-1.29.64-2.01l-.01-3.75a.749.749 0 1 1 1.5 0l.02 3.75c0 1.04-.32 2.04-.92 2.89l-9.42 13.21c-.15.2-.38.31-.62.31"/><path fill="#e19747" d="M14.52 2.01c-4.56.04-8.39 3.89-8.39 8.61V12h4.63c5.31 0 9.65-4.24 9.92-9.47a.495.495 0 0 0-.49-.53zM6.24 17.02c3.13.02 5.76 2.67 5.76 5.91v1.08H8.82c-3.65 0-6.63-3.04-6.82-6.64c-.01-.19.14-.36.34-.36z"/><path fill="#d3883e" d="M17.23 4.47c.06.09.09.19.09.29c0 .16-.07.31-.21.41L8.37 11.4c-.56.4-1.22.61-1.91.61H4.5c-.28 0-.5-.23-.5-.5s.22-.49.5-.49h1.96c.48 0 .94-.15 1.33-.43l8.75-6.24c.22-.16.53-.1.69.12m-5.37 18.54h.63c.26 0 .49.2.51.46c.01.29-.21.53-.5.53h-.64c-.69 0-1.35-.21-1.91-.61l-4.26-3.04a.495.495 0 0 1-.11-.69c.01 0 .01-.01.01-.01c.16-.22.46-.27.68-.11l4.26 3.04c.39.28.85.43 1.33.43"/></g></svg>',"maple-leaf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f8312f" d="m29.716 17.803l-2.32-.44a.212.212 0 0 1-.14-.31l2.16-3.47a.208.208 0 0 0-.19-.32l-4.07.37c-.14.01-.26-.12-.22-.26l.64-2.24a.208.208 0 0 0-.31-.23l-4.35 2.75c-.15.09-.34-.03-.32-.2l1.28-9.33c.02-.17-.16-.3-.31-.2l-3.29 2c-.1.06-.24.02-.29-.08l-1.86-3.73a.208.208 0 0 0-.37 0l-1.86 3.73c-.05.11-.19.15-.29.09l-3.4-2.01c-.15-.09-.34.04-.31.21l1.63 9.32c.03.17-.16.3-.31.21l-4.61-2.77c-.16-.1-.36.05-.31.23l.65 2.26c.04.14-.07.28-.22.26l-4.07-.37c-.17-.02-.28.17-.19.32l2.16 3.47a.2.2 0 0 1-.14.31l-2.32.44c-.18.03-.23.27-.07.38l6.54 4.29c.17.11.21.33.1.5l-1.93 2.75c-.09.13.04.31.19.25l8.38-3.06c.36-.13.76-.13 1.12 0l8.38 3.06c.15.06.29-.12.19-.25l-1.93-2.75a.36.36 0 0 1 .1-.5l6.54-4.29c.17-.12.12-.36-.06-.39"/><path fill="#ca0b4a" d="M15.946 11.273a1 1 0 0 1 1 1v8.12l5.443-2.8a1 1 0 0 1 .915 1.779l-6.358 3.27v6.33a1 1 0 1 1-2 0v-6.33l-6.357-3.27a1 1 0 0 1 .915-1.779l5.442 2.8v-8.12a1 1 0 0 1 1-1"/></g></svg>',"palm-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.04 8.86H13.6V30h5.44z"/><path fill="#86d72f" d="M5 8.16c-.552 0-1.009-.45-.92-.996A6.165 6.165 0 0 1 10.16 2c3.4 0 6.16 2.75 6.16 6.16zm11.32 0h11.32c.552 0 1.008-.45.92-.996A6.16 6.16 0 0 0 22.48 2c-3.4 0-6.16 2.76-6.16 6.16"/><path fill="#44911b" d="M15.636 7.624c.413.263.954.263 1.367 0a6.15 6.15 0 0 1 7.657.846a6.17 6.17 0 0 1 .647 7.949c-.322.448-.964.444-1.354.054l-6.926-6.926a1 1 0 0 0-1.414 0l-6.926 6.926c-.39.39-1.032.394-1.355-.054A6.15 6.15 0 0 1 7.98 8.47a6.175 6.175 0 0 1 7.656-.846"/><path fill="#d3883e" d="M15.55 11.93a2.16 2.16 0 1 1-4.32 0a2.16 2.16 0 0 1 4.32 0m5.86 1.77a2.16 2.16 0 1 1-4.32 0a2.16 2.16 0 0 1 4.32 0"/></g></svg>',shortcake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="m3.627 29.82l24.63-7.068l.787-.724V7.978l-1.022-1.98l-25.95 7.345v14.944c0 1.225.496 1.785 1.555 1.532"/><path fill="#ffdea7" d="m13.034 2.508l-9.97 9.223c-1.946 1.662-.935 2.811.934 2.399l23.026-6.606c.592-.14.966-.186.966.499v4.02c0 .687.064 1.045-.374 1.183c0 0-22.205 6.694-22.683 6.824s-1.54.328-1.87.28c-.329-.048-.747-.28-.934-.28s-.187.108-.187.623v2.167c0 .163.14.268.14.268a2.48 2.48 0 0 0 1.916.307l23.244-6.73c.374-.094.748.156.748.623v5.298c0 .322.195.339.332.322c.992-.286 1.678-.873 1.678-1.881V8.023c0-.853-.617-2.278-2.01-2.71L16.96 2.725c-1.047-.218-3.072-.88-3.926-.218"/><path fill="#f8312f" d="M12.024 4.517c.126-.628.335-2.402 2.516-2.836l2.356 1.207l.858 2.575C16.95 7.624 15.29 7.47 14.627 7.47h-1.963c-.64 0-1.004-.364-.916-1.033z"/><path fill="#86d72f" d="M16.94 4.372c-.44-.495-.32-1.25-.32-1.25s-.714 0-1.062-.38l-1.193-1.235c-.064-.088 0-.183.088-.248c0 0 .701-.531 1.789.16c.602.444 1.746 1.862 2.036 2.458c.527.9-.146 1.673-.146 1.673c-.077.095-.167.122-.276 0z"/></g></svg>',cupcake:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ff6dc6" d="M20.086 5.002c.06.05.112.096.164.148c.47.45.77 1.09.76 1.8c0 .379-.084.738-.235 1.06h.745c1.93 0 3.5 1.56 3.49 3.5a3.5 3.5 0 0 1-.34 1.503a3.504 3.504 0 0 1 3.35 3.497c0 1.93-1.57 3.5-3.5 3.5H7.5c-1.93 0-3.5-1.57-3.5-3.5a3.504 3.504 0 0 1 3.34-3.496a3.5 3.5 0 0 1 3.17-5.004h.736a2.5 2.5 0 0 1-.236-1.06c0-.76.33-1.43.85-1.89l3.03-2.64c.64-.56 1.6-.56 2.24 0l2.93 2.56z"/><path fill="#5092ff" d="M18.29 9.46c-.2.2-.2.51 0 .71c.19.2.51.2.71 0l.74-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zM9.2 13.43c0-.28.22-.5.5-.5h1.05c.28 0 .5.22.5.5s-.22.5-.5.5H9.7c-.28 0-.5-.22-.5-.5m11.67 4.68c.2-.2.2-.51 0-.71l-.74-.74c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l.74.74c.2.2.51.2.71 0"/><path fill="#efd5ff" d="M15.99 6.7c.2.2.51.2.71 0c.2-.19.2-.51 0-.7l-.74-.75c-.2-.2-.51-.2-.71 0s-.2.51 0 .71zm4.75 5.08c.2-.2.51-.2.71 0l.74.74c.2.2.2.51 0 .71s-.51.2-.71 0l-.74-.74c-.2-.19-.2-.51 0-.71m-8.88 6.33c-.2-.2-.2-.51 0-.71l.74-.74c.2-.2.51-.2.71 0s.2.51 0 .71l-.74.74c-.19.2-.51.2-.71 0"/><path fill="#ffb02e" d="M12.47 9.46c-.2.2-.2.51 0 .71c.19.2.51.2.7 0l.75-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zm-5.23 6.3c-.2.2-.2.51 0 .71c.2.19.51.19.71 0l.74-.74c.2-.2.2-.51 0-.71s-.51-.2-.71 0zm16.09.71c-.2-.2-.2-.51 0-.71l.74-.74c.2-.2.51-.2.71 0s.2.51 0 .71l-.74.74c-.2.19-.52.19-.71 0m-7.34-2.31c.2.2.51.2.71 0s.2-.51 0-.71l-.74-.74c-.2-.2-.51-.2-.71 0s-.2.51 0 .71z"/><path fill="#fbb8ab" d="M25.24 19.98H6.78a1.77 1.77 0 0 0-1.7 2.28l2.106 6.896c.12.38.48.64.89.64h15.87c.4 0 .76-.26.89-.64l2.114-6.896c.33-1.14-.52-2.28-1.71-2.28"/><path fill="#5092ff" d="M8 30h16c1.04 0 1.391-.646 1.5-1c0 0 1.936-6.072 1.816-6.564c-.074-.26-.394-.291-.49-.091l-.152.35l-.107-.259c-.07-.16-.426-.37-.779 0l-.748.87c-.066.077-.182.1-.229 0l-.344-.792c-.175-.385-.899-.478-1.464.035l-.803.758c-.148.152-.376.181-.52 0l-.702-.87c-.355-.43-1.19-.244-1.726.152l-.855.718c-.207.146-.464.17-.657 0l-.798-.793c-.45-.361-1.371-.49-1.92.035l-.794.758c-.144.111-.448.129-.626 0l-1.041-.87c-.45-.384-1.307-.314-1.686.152l-.572.718c-.093.106-.262.152-.473 0l-.978-.87c-.386-.325-1.121-.331-1.359.152l-.275.61s-.076.26-.214.108l-.717-.87c-.51-.553-.901 0-.978.259l-.152-.352c-.127-.273-.646 0-.459.657L6.5 29c.077.232.504 1 1.5 1"/><path fill="#3f5fff" d="m11.91 30l-.92-4.598a.5.5 0 0 0-.98.196L10.89 30zm9.2 0l.88-4.402a.5.5 0 0 0-.98-.196L20.09 30zm-4.61-4.5V30h-1v-4.5a.5.5 0 0 1 1 0"/></g></svg>',comet:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3d3d3" d="m28.148 3.123l-4.41 3.41v-1.03c0-.53-.64-.8-1.02-.42l-3.94 3.94v-1.39c0-.53-.64-.8-1.02-.42l-4.64 4.64v-1.39c0-.53-.64-.8-1.02-.42l-6.05 6.05a7.007 7.007 0 0 0 0 9.9a7.007 7.007 0 0 0 9.9 0l6.06-6.06c.37-.37.11-1.02-.42-1.02h-1.39l4.64-4.64c.37-.37.11-1.02-.42-1.02h-1.39l3.93-3.93c.37-.37.11-1.02-.42-1.02h-1.03l3.4-4.4c.41-.52-.25-1.18-.76-.78"/><path fill="#f8312f" d="M22.018 10.523a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-6 10.5a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-.5-8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-5.5-4.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4.49 1a.99.99 0 1 1-1.98 0a.99.99 0 0 1 1.98 0m2.01-3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></g></svg>',"christmas-tree":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#6d4534" d="M19.157 29.988h-6.311c-.536 0-.943-.47-.826-.96l.515-2.13l3.374-1.059l3.56 1.059l.513 2.13c.108.49-.289.96-.825.96"/><path fill="#44911b" d="m14.86 7.19l-2.68 4.792c-.5.89.12 2.018 1.12 2.018h.608C11.747 14 10 15.592 10 17.56c0 .8.71 1.439 1.579 1.439h.144C9.116 19 7 21.227 7 23.97C7 25.65 8.294 27 9.878 27h12.244C23.716 27 25 25.639 25 23.97c.01-2.743-2.106-4.97-4.723-4.97h.144C21.3 19 22 18.352 22 17.56c0-1.959-1.747-3.56-3.908-3.56h.558c1 0 1.62-1.118 1.12-2.018L17.09 7.19c-.49-.89-1.73-.89-2.23 0"/><path fill="#f8312f" d="M18.982 18.306a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58m-8.005 7.081a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58m12.313-1.359a1.29 1.29 0 1 1-2.58 0a1.29 1.29 0 0 1 2.58 0"/><path fill="#fcd53f" d="M18.289 12.016a1.29 1.29 0 1 1-2.58 0a1.29 1.29 0 0 1 2.58 0m-4.313 5.274a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58M16 23.254a1.29 1.29 0 1 0 0-2.58a1.29 1.29 0 0 0 0 2.58"/><path fill="#f9c23c" d="m17.005 3.09l.695.106a.43.43 0 0 1 .242.735l-.503.493a.43.43 0 0 0-.125.377l.116.695a.434.434 0 0 1-.628.455l-.619-.329a.43.43 0 0 0-.406 0l-.619.329a.434.434 0 0 1-.628-.455l.116-.695a.43.43 0 0 0-.126-.377l-.502-.493a.43.43 0 0 1 .242-.735l.696-.097a.44.44 0 0 0 .328-.232l.31-.628a.432.432 0 0 1 .773 0l.309.628a.48.48 0 0 0 .329.223"/></g></svg>',unicorn:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#00d26a" d="m5.398 4.68l.085-.816l.798-.102l2.3 1.635l-.214 1.1l-1.211.38z"/><path fill="#468cfb" d="M8.705 8.813L7.156 6.877l1.424-1.48l2.026 1.441l-.586 1.259z"/><path fill="#f9c23c" d="m6.293 3.77l-.886.92l-1.536-1.92c-.217-.271.125-.633.408-.431z"/><path fill="#8d65c5" d="M10.554 6.801L13.21 8.69c1.083 2.647-1.064 3.045-2.272 2.913l-2.273-2.84z"/><path fill="#5092ff" d="M11.5 6.781c1.219-1.603 6.658-2.529 3.608.431c-1.81 1.76-1.054 3.632-3.374 4.632c-3.906 1.484-5.046-1.719-4.64-2.125s1.317.463 2.422 0c.686-.288.765-1.335 1.984-2.938"/><path fill="#efd5ff" d="m5.784 23.35l8.62-1.88q.223-.054.45-.123c-3.56 4.081-4.006 8.637-4.006 8.637h15.33c2.14 0 3.82-2.082 3.62-4.222c-.598-6.318-2.785-17.951-10.829-18.03c-1.607-1.224-3.467-1.52-4.586-.402c-3.417 3.418-6.626 6.976-8.794 9.38c-.674.748-1.247 1.384-1.695 1.87c-1.89 2.049-1.45 3.73.22 4.58c.51.26 1.11.31 1.67.19"/><path fill="#ff6dc6" d="M29.906 16.969c0-3.657-2.323-4.209-3.218-4.188c.197.792.28 3.3-.97 7S25.5 28.25 26.189 30c2.671 0 3.718-.344 3.718-2.281z"/><path fill="#c790f1" d="M27.375 17.281c1.063-4-1.875-8.156-4.187-8.156c.812 1.854 1.312 6.219 0 8.344C21.692 19.89 21.453 26.5 22.203 30h4.75c-1.7-4.825-.64-8.719.422-12.719"/><path fill="#bca4eb" d="M14.906 21.281c7.719-6.406 3.656-11.968-1.437-13.03c7.187-5.47 8.864 5.416 7.594 9.124c-2.157 2.313-6.157 3.906-6.157 3.906"/><path fill="#5092ff" d="M22.797 29.984h-6.625c-1.59-6.76 3.796-11.262 4.156-16.302c.4-5.73-3.74-6.79-3.74-6.79c-1.32.33 1.01 1.25-1.58 1.25l-.68-1.45l-.687-1.13c1.64-.45 3.842-.827 6.359.407c3.1 1.518 5.753 5.488 4.688 9.562c-1.063 4.063-3.579 6.992-1.891 14.453"/><path fill="#8d65c5" d="M22.797 29.984h-1.413c-.332-1-.608-2.608-.571-4.484c.056-2.898.682-4.505 2.157-8.296L23.438 16c1.45-3.75-.709-7.5-1.688-8.75l.165.024c2.158 1.934 3.608 5.064 2.773 8.257c-.257.981-.598 1.896-.945 2.824c-1.088 2.918-2.226 5.97-.946 11.63m4.578-12.704c.53-1.993.066-4.025-.82-5.562H26.5c.05.282.115.581.184.895c.304 1.39.672 3.07.035 4.855l-.004.01c-.824 2.308-2.464 6.9-2.059 9.49c.215 1.37.624 2.48.867 3.031h1.43c-1.686-4.785-.658-8.654.396-12.62z"/><path fill="#efd5ff" d="M15.578 9.016c-1.86.25-2.384-.703-2.5-2.453c-.115-1.75-.087-2.262-.087-2.262c0-.34.41-.51.65-.27c0 0 3.28 2.594 3.422 3.532c.14.937-.71 1.348-1.485 1.453"/><path fill="#1c1c1c" d="M12 12a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m-7.09 8.301c-.3.3-.8.3-1.1 0l1.1-1.1c.3.31.3.8 0 1.1m3.777 2.416l-1.864.406a1.794 1.794 0 0 0 1.114-1.972a.512.512 0 1 1 1.008-.173c.106.615.003 1.22-.258 1.739"/></g></svg>',butterfly:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#533566" d="M27.5 2c-.62 0-1.19.23-1.63.6L16 11L6.13 2.6C5.69 2.23 5.12 2 4.5 2A2.5 2.5 0 0 0 2 4.5v9.75C2 16.32 3.68 18 5.75 18H8c-3.31 0-6 2.69-6 6s2.69 6 6 6a6 6 0 0 0 5.67-4.04L16 20.39l2.33 5.57A6 6 0 0 0 24 30c3.31 0 6-2.69 6-6s-2.69-6-6-6h2.25c2.07 0 3.75-1.68 3.75-3.75V4.5A2.5 2.5 0 0 0 27.5 2"/><path fill="#ff822d" d="m10.21 13.96l-4.76-2.75c-.54-.32-1.22.08-1.22.71v2c0 1.7 1.38 3.08 3.08 3.08c.62 0 1.22-.25 1.66-.69l1.37-1.37a.62.62 0 0 0-.13-.98m11.81 0l4.76-2.75c.54-.32 1.22.08 1.22.71v2c0 1.7-1.38 3.08-3.08 3.08c-.62 0-1.22-.25-1.66-.69l-1.37-1.37a.62.62 0 0 1 .13-.98M17 16.85l2.77-1.6c.38-.21.86-.15 1.17.16l.8.8c.29.29.08.79-.33.79H17zm-4.54-1.6l2.77 1.6V17h-4.41c-.41 0-.62-.5-.33-.79l.8-.8c.31-.31.79-.37 1.17-.16"/><path fill="#ff6723" d="M4.23 5.98V8.2c0 .71.38 1.37.99 1.72l10.01 5.78V13L5.76 5.25c-.61-.5-1.53-.06-1.53.73m23.77 0V8.2c0 .71-.38 1.37-.99 1.72L17 15.7V13l9.47-7.75c.61-.5 1.53-.06 1.53.73M12.96 19.5H9.64c-.55 0-.82.66-.43 1.04l2.95 2.95c.31.31.83.2 1-.2l.9-2.15c.33-.77-.25-1.64-1.1-1.64m-6.94.46A4.5 4.5 0 0 0 3.5 24c0 2.47 1.95 4.46 4.41 4.5a4.47 4.47 0 0 0 4.12-2.51l.01-.02q.001-.007.005-.01q.004-.004.005-.01c.22-.47.12-1.04-.25-1.41L7.45 20.2c-.38-.38-.95-.48-1.43-.24m.62 7.05a1.64 1.64 0 1 1 0-3.28a1.64 1.64 0 0 1 0 3.28m12.44-7.51h3.32c.55 0 .82.66.43 1.04l-2.95 2.95c-.31.31-.83.2-1-.2l-.9-2.15c-.33-.77.25-1.64 1.1-1.64m6.94.46c1.49.73 2.52 2.27 2.52 4.04c0 2.47-1.95 4.46-4.41 4.5a4.47 4.47 0 0 1-4.12-2.51l-.01-.01q-.001-.007-.005-.01q-.005-.003-.005-.01c-.22-.47-.12-1.04.25-1.41l4.35-4.35c.38-.38.95-.48 1.43-.24m-.62 6.92a1.64 1.64 0 1 0 0-3.28a1.64 1.64 0 0 0 0 3.28"/><path fill="#212121" d="M13.305 2.193a.5.5 0 0 0-.79.614a11.87 11.87 0 0 1 2.495 7.303a.5.5 0 0 0 .99.1a.5.5 0 0 0 .99-.1c0-2.755.93-5.288 2.495-7.303a.5.5 0 0 0-.79-.614A12.86 12.86 0 0 0 16 9.596a12.86 12.86 0 0 0-2.695-7.403"/><path fill="#321b41" d="M16.917 10.778a2 2 0 1 0-1.84-.003a1.45 1.45 0 0 0-.587 1.165v10.61c0 .8.65 1.45 1.45 1.45h.11c.8 0 1.45-.65 1.45-1.45V11.94c0-.475-.23-.897-.583-1.162"/></g></svg>',honeybee:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#212121" d="M5.43 13.36c-.28 0-.5-.22-.5-.5V12c0-.71-.4-1.35-1.04-1.67l-.67-.38a.5.5 0 1 1 .44-.9l.68.38c.98.49 1.59 1.47 1.59 2.57v.86c0 .28-.22.5-.5.5M24.3 27.001h-1.47c-1.02 0-1.84-.83-1.84-1.84v-3.36c0-.41.34-.75.75-.75s.75.34.75.75v3.35c0 .19.15.34.34.34h1.47c.41 0 .75.34.75.75s-.34.76-.75.76m-14.5 1.98c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.65-.65c.36-.36.56-.85.56-1.36v-1.89c0-.41.34-.75.75-.75s.75.34.75.75v1.89c0 .91-.36 1.77-1 2.42l-.65.65c-.15.15-.34.22-.53.22m8.84-.22c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.65-.65c-.36-.36-.56-.85-.56-1.36v-1.89c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.89c0 .91.35 1.77 1 2.42zM28 16.36l1.78.38c.29.06.29.47 0 .54l-1.78.38l-1-.66z"/><path fill="#ffb02e" d="M17 25.001h2.11c.647 0 1.282-.09 1.89-.26L23.5 17L21 9.28a7 7 0 0 0-1.89-.259H17L15 17zM12 9.147a8 8 0 0 0-4.819 2.884L7.5 13.5v7l-.306 1.507A8 8 0 0 0 12 24.875L14.5 17zM24.5 17l1.5-3.377l2 2.755v1.267l-2 2.754z"/><path fill="#533566" d="M16.98 9.021h-3.77c-.42.01-.83.06-1.23.13v15.72c.4.07.81.12 1.23.13h3.77zm-8.61 4.36c0-.75-.6-1.35-1.34-1.36h-.08c-2.74 0-4.95 2.24-4.95 5s2.22 5 4.95 5h.08c.75-.02 1.34-.62 1.34-1.37zm16.67-1.08l.94 1.3v6.8l-.94 1.3c-.94 1.5-2.4 2.57-4.06 3.03V9.271c1.67.47 3.12 1.53 4.06 3.03"/><path fill="#aeddff" d="M14.94 4.74A4.47 4.47 0 0 1 18.57 3c2.39.04 4.35 1.99 4.41 4.38a4.49 4.49 0 0 1-4.49 4.6H10.9c-.55 0-.86-.63-.54-1.07l4.5-6.06c.02-.03.04-.05.06-.08z"/><path fill="#212121" d="M5.44 18.001a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></g></svg>',snail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#d3883e" d="M2.5 3.75C2.5 2.79 3.29 2 4.25 2S6 2.79 6 3.75c0 .7-.41 1.3-1 1.58v3.52H3.5V5.33c-.59-.28-1-.88-1-1.58m3.5 0c0 .7.41 1.3 1 1.58v3.52h1.5V5.33c.59-.28 1-.88 1-1.58C9.5 2.79 8.71 2 7.75 2S6 2.79 6 3.75"/><path fill="#212121" d="M5 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/><path fill="#6d4534" d="M18 5c-4.76 0-8.87 2.77-10.81 6.78V21h-.51c1.65 4.66 6.09 8 11.32 8c6.63 0 12-5.37 12-12S24.63 5 18 5"/><path fill="#f3ad61" d="M11.96 23.35c-1.186-.81-1.99-2.306-1.99-3.76v-8.67c0-2.2-1.78-3.98-3.98-3.98A3.973 3.973 0 0 0 2 10.92v12.76c0 3.45 2.8 6.24 6.24 6.24l20.2.08c.86 0 1.56-.7 1.56-1.56v-.42a3.99 3.99 0 0 0-3.194-3.912A8.6 8.6 0 0 1 19.605 28a8.6 8.6 0 0 1-7.644-4.65"/><path fill="#a56953" d="M29 19.28a9.51 9.51 0 1 1-19.02 0a9.51 9.51 0 0 1 19.02 0m-2.78 2.5a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0"/></g></svg>',seedling:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#86d72f" d="M22.39 6.45c-2.29 0-4.32 1.08-5.63 2.75v-.47h-.01A7.155 7.155 0 0 0 9.61 2H2c0 3.95 3.2 7.15 7.15 7.15h5.19v12.46h2.42v-8h6.09c3.95 0 7.15-3.2 7.15-7.15h-7.61z"/><path fill="#6d4534" d="M15.55 21a8.99 8.99 0 0 0-8.99 8.99h17.99c0-4.965-4.025-8.99-9-8.99"/></g></svg>',crab:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M12.52 6.48h-.42V5H14c0 .82-.66 1.48-1.48 1.48m0 .33h-.42v1.48H14c0-.82-.66-1.48-1.48-1.48m6.96-.33H20V5h-2c0 .82.66 1.48 1.48 1.48m0 .33H20v1.48h-2c0-.82.66-1.48 1.48-1.48M7.618 12.739a.98.98 0 1 0-.956-.006a.87.87 0 0 0-.394.727a3.65 3.65 0 0 0 3.647 3.648a.868.868 0 1 0 0-1.736a1.913 1.913 0 0 1-1.912-1.912c0-.3-.153-.566-.385-.721m16.837 6.921c-.64.03-.98-.73-.53-1.18l4.33-4.33c.45-.45 1.21-.1 1.18.53c-.05 1.26-.56 2.5-1.52 3.46s-2.2 1.47-3.46 1.52m-1.26.66c-.64 0-.93.78-.46 1.21a5.21 5.21 0 0 0 7.04 0c.47-.43.17-1.21-.46-1.21zm-2.785 2.925a.7.7 0 0 1 .675-.895c1.26.01 2.52.47 3.51 1.4s1.55 2.15 1.65 3.4c.05.63-.7 1-1.16.57l-4.479-4.17c.432.726.696 1.565.73 2.47c.05 1.36-.42 2.61-1.24 3.57c-.41.48-1.2.22-1.22-.42l-.23-6.11a.695.695 0 0 1 1.19-.51q.316.323.573.695M9.205 21.59c.46-.43.17-1.2-.46-1.2h-6.06c-.63 0-.92.77-.46 1.2a5.156 5.156 0 0 0 6.98 0m-1.71-1.86c.63.03.97-.72.52-1.17l-4.29-4.3c-.45-.44-1.2-.1-1.17.53c.05 1.25.56 2.48 1.51 3.43s2.18 1.46 3.43 1.51m3.33 2.66c.63 0 .94.76.48 1.19l-4.44 4.14c-.46.42-1.2.06-1.15-.57c.1-1.25.64-2.46 1.63-3.38c.98-.91 2.23-1.37 3.48-1.38m1.33.28a.695.695 0 0 1 1.19.51l-.23 6.11c-.02.64-.81.9-1.22.42a5.17 5.17 0 0 1-1.24-3.57a5.22 5.22 0 0 1 1.5-3.47m13.418-9.21a.87.87 0 0 0-.39-.724a.98.98 0 1 0-.956 0a.87.87 0 0 0-.39.724a1.91 1.91 0 0 1-1.912 1.912a.868.868 0 0 0 0 1.736a3.65 3.65 0 0 0 3.648-3.648"/><path fill="#533566" d="M13 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/><path fill="#f8312f" d="M8.316 11.5H6C6 7.912 8.902 5 12.5 5v2.326A4.18 4.18 0 0 1 8.316 11.5m15.368 0H26C26 7.912 23.098 5 19.5 5v2.326a4.18 4.18 0 0 0 4.184 4.174M16 27c4.97 0 9-3.901 9-8.713C25 13.465 20.97 13 16 13s-9 .475-9 5.287S11.03 27 16 27"/></g></svg>',cookie:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M2 16c0 9.29 6.27 14 14 14s14-4.74 14-14c0-9.43-6.27-14-14-14S2 6.43 2 16"/><path fill="#6d4534" d="m19.89 8.32l.62.04a.95.95 0 0 0 1.01-1.01l-.04-.61a1.55 1.55 0 0 0-.22-.71a1.51 1.51 0 0 0-1.85-.59c-.8.34-1.14 1.28-.76 2.05c.23.5.72.79 1.24.83m7.03 6.29l.04-.62a.95.95 0 0 0-1.01-1.01l-.61.04c-.24.01-.49.09-.71.22a1.51 1.51 0 0 0-.59 1.85c.34.8 1.28 1.14 2.05.76c.5-.23.79-.72.83-1.24m-16.3 9.91l.05-.77c.04-.64.41-1.24 1.03-1.55a1.85 1.85 0 0 1 2.54.94c.35.84.04 1.82-.73 2.3c-.28.17-.58.26-.88.28l-.76.05c-.71.05-1.3-.54-1.25-1.25m9.78-9.33l.03-.46c.1-1.51-1.15-2.76-2.67-2.67l-.45.03c-.45.02-.9.15-1.32.4a2.93 2.93 0 0 0-1.22 3.62c.65 1.59 2.5 2.26 4.01 1.51c.98-.47 1.56-1.42 1.62-2.43M7.65 9l.03.42c.06.91.59 1.77 1.47 2.21c1.37.68 3.05.07 3.64-1.37c.49-1.21.02-2.63-1.11-3.29a2.65 2.65 0 0 0-1.2-.36l-.41-.03C8.7 6.49 7.57 7.63 7.65 9m16.61 13.82l.02.36c.08 1.17-.9 2.15-2.07 2.07l-.35-.02c-.35-.02-.7-.12-1.03-.31a2.28 2.28 0 0 1-.95-2.81A2.27 2.27 0 0 1 23 20.94c.76.36 1.21 1.09 1.26 1.88m-18.39-5.9l.04.62c.03.52.33 1.01.83 1.24c.77.38 1.71.04 2.05-.76c.28-.67.03-1.46-.59-1.85a1.55 1.55 0 0 0-.71-.22l-.61-.04a.95.95 0 0 0-1.01 1.01"/></g></svg>',"ice-cream":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="M26.778 4.439a.875.875 0 0 0-1.376-1.081l-6.16 7.842a.875.875 0 0 0 .868 1.397a.877.877 0 0 0 1.284.602l8.049-4.467a.875.875 0 1 0-.85-1.53l-7.066 3.922z"/><path fill="#6d4534" d="M15.59 17.75a6.75 6.75 0 1 1-13.5 0a6.75 6.75 0 0 1 13.5 0"/><path fill="#ff8687" d="M29.01 17.625a6.75 6.75 0 1 1-13.5 0a6.75 6.75 0 0 1 13.5 0"/><path fill="#feefc2" d="M24.078 14.922a8.078 8.078 0 1 1-16.156 0a8.078 8.078 0 0 1 16.156 0"/><path fill="#00a6ed" d="M2.722 21.042h25.494c.622 0 .97.71.58 1.194c-.82 1.02-1.98 2.413-2.655 3c-.726.63-2.171 1.55-3.104 2.124a4.16 4.16 0 0 0-1.396 1.399l-.135.224a2 2 0 0 1-1.715.97h-8.644a2 2 0 0 1-1.715-.97l-.134-.224a4.2 4.2 0 0 0-1.397-1.4c-.933-.573-2.378-1.494-3.103-2.124c-.675-.585-1.835-1.978-2.656-2.999a.734.734 0 0 1 .58-1.195"/><path fill="#f8312f" d="M17.95 5.983c0 1.096-.725 1.863-1.984 1.863s-1.983-.767-1.983-1.863a1.983 1.983 0 1 1 3.966 0"/></g></svg>',"cloud-with-snow":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#b4acbc" d="M27.988 3.843C24.085.04 17.863.056 13.998 3.873A5.04 5.04 0 0 0 7.982 5.94A7.47 7.47 0 0 0 1 13.396c0 1.756.612 3.373 1.623 4.652A7.5 7.5 0 0 0 8.593 21h12.715a9.39 9.39 0 0 0 7.648-3.933c3.017-3.96 2.693-9.652-.968-13.224"/><path fill="#00a6ed" d="M10.849 23.03a.77.77 0 0 1 1.303 0l.32.509a.77.77 0 0 0 .737.354l.598-.066a.77.77 0 0 1 .812 1.019l-.197.568a.77.77 0 0 0 .181.796l.425.427a.77.77 0 0 1-.29 1.27l-.568.2a.77.77 0 0 0-.509.639l-.069.597a.77.77 0 0 1-1.174.565l-.51-.318a.77.77 0 0 0-.816 0l-.51.318a.77.77 0 0 1-1.174-.565l-.07-.597a.77.77 0 0 0-.508-.639l-.567-.2a.77.77 0 0 1-.29-1.27l.424-.427a.77.77 0 0 0 .181-.796l-.197-.568a.77.77 0 0 1 .813-1.019l.598.066a.77.77 0 0 0 .735-.354zm10.335-2.364a.588.588 0 0 0-.946-.301a.59.59 0 0 1-.616.088a.588.588 0 0 0-.826.553a.59.59 0 0 1-.315.536a.588.588 0 0 0-.083.99c.18.135.266.36.223.581a.588.588 0 0 0 .723.682a.59.59 0 0 1 .593.188c.28.329.806.254.983-.14a.59.59 0 0 1 .517-.346a.588.588 0 0 0 .504-.857a.59.59 0 0 1 .052-.62a.588.588 0 0 0-.356-.927a.59.59 0 0 1-.453-.427"/><path fill="#f3eef8" d="M14.575 4.71c3.467-3.557 9.158-3.617 12.715-.15c3.297 3.216 3.587 8.346.862 11.913A8.39 8.39 0 0 1 21.308 20H8.593a6.5 6.5 0 0 1-5.18-2.565A6.48 6.48 0 0 1 2 13.397a6.47 6.47 0 0 1 6.584-6.472a4.04 4.04 0 0 1 5.65-1.847q.164-.188.341-.368"/></g></svg>',"magic-wand":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#433b6b" d="m5 29l-2-2l16-16l2 2z"/><path fill="#f4f4f4" d="m18 12l2 2l1.674-1.667c.435-.445.435-1.24 0-1.675l-.33-.331C20.9 9.89 20 10 19.5 10.5zM2.338 29.252l.41.41c.44.452 1.17.452 1.61-.01L6 28.007L4 26l-1.662 1.627a1.146 1.146 0 0 0 0 1.625"/><path fill="#f9c23c" d="M27.87 4.423c.131.284.352.508.644.635l1.215.527a.453.453 0 0 1 0 .83l-1.205.527a1.22 1.22 0 0 0-.643.635l-.954 2.167c-.17.341-.683.341-.854 0l-.954-2.167a1.26 1.26 0 0 0-.643-.635l-1.205-.527a.453.453 0 0 1 0-.83l1.205-.527a1.22 1.22 0 0 0 .643-.635l.954-2.167c.17-.341.683-.341.854 0zm-11.429 1.18a.88.88 0 0 1-.458-.438l-.676-1.49c-.125-.233-.49-.233-.614 0l-.676 1.49a.85.85 0 0 1-.458.438l-.864.36a.309.309 0 0 0 0 .574l.864.36a.9.9 0 0 1 .458.438l.676 1.49c.125.233.49.233.614 0l.676-1.49a.85.85 0 0 1 .458-.438l.864-.36a.309.309 0 0 0 0-.574zm9.51 10.695a.95.95 0 0 1-.46-.48l-.686-1.622c-.128-.261-.492-.261-.61 0l-.685 1.623a.95.95 0 0 1-.46.479l-.857.392c-.257.13-.257.5 0 .62l.856.392a.95.95 0 0 1 .46.48l.686 1.622c.128.261.492.261.61 0l.685-1.622a.95.95 0 0 1 .46-.48l.857-.392c.257-.13.257-.5 0-.62zM12 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m18-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M19 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>',chestnut:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#f3ad61" d="M29.68 22.173L16 17L2.32 22.172c1.04 3.97 4.52 7.28 9.39 7.28h8.57c4.88 0 8.36-3.31 9.4-7.28"/><path fill="#6d4534" d="M29.68 22.173c.83-3.16.11-6.75-2.69-9.42l-9.59-9.19c-.78-.75-2.02-.75-2.8 0l-9.59 9.19c-2.8 2.68-3.51 6.26-2.69 9.42z"/></g></svg>'},tg={pause:'<path d="M9 6v12M15 6v12"/>',play:'<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>',ff:'<path d="M4 6.5v11l7.5-5.5zM12.5 6.5v11l7.5-5.5z" fill="currentColor"/>',undo:'<path d="M9 13.5L4 8.5l5-5"/><path d="M4.5 8.5H14a5.5 5.5 0 010 11h-3.5"/>',shuffle:'<path d="M3.5 7h3.2c2.2 0 3.4 1 4.6 3l1.4 2.4c1.2 2 2.4 3 4.6 3h3.2"/><path d="M3.5 16.4h3.2c1.4 0 2.4-.4 3.2-1.2M13.7 8.2c.8-.8 1.8-1.2 3.2-1.2h3.6"/><path d="M18 4.5l2.5 2.5L18 9.5M18 13l2.5 2.5L18 18"/>',plus:'<path d="M12 5v14M5 12h14"/>',close:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',restart:'<path d="M19 12a7 7 0 11-2.05-4.95"/><path d="M19.5 4.5v4h-4"/>',map:'<path d="M3.5 6.5l5-2 7 2.5 5-2v13l-5 2-7-2.5-5 2z"/><path d="M8.5 4.5v13M15.5 7v13"/>',home:'<path d="M4 11.5L12 4.5l8 7"/><path d="M6.5 10v9.5h11V10"/><path d="M10 19.5v-5h4v5"/>',back:'<path d="M14.5 5.5L8 12l6.5 6.5"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',slot:'<rect x="4" y="7" width="12" height="12" rx="3"/><path d="M19.5 3.5v6M16.5 6.5h6"/>'};function Se(s,t=24){return`<svg class="ico" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${tg[s]??""}</svg>`}function ue(s,t=28,e=""){return j2[s].replace("<svg ",`<svg class="emo ${e}" width="${t}" height="${t}" aria-hidden="true" `)}const eg={title:{ru:"Пиксельный пикник",en:"Pixel Picnic"},level:{ru:"Уровень {n}",en:"Level {n}"},play:{ru:"Играть",en:"Play"},next:{ru:"Дальше",en:"Next"},retry:{ru:"Заново",en:"Retry"},restart:{ru:"Начать заново",en:"Restart"},resume:{ru:"Продолжить",en:"Resume"},map:{ru:"Карта",en:"Map"},toMap:{ru:"К карте уровней",en:"Back to the map"},leaveLevel:{ru:"Выйти к карте уровней? Этот уровень начнётся заново.",en:"Leave for the level map? This level will start over."},leave:{ru:"Выйти",en:"Leave"},stay:{ru:"Играть дальше",en:"Keep playing"},newVersion:{ru:"Вышла новая версия — обновляю…",en:"A new version is out — reloading…"},album:{ru:"Альбом",en:"Album"},settings:{ru:"Настройки",en:"Settings"},paused:{ru:"Пауза",en:"Paused"},hard:{ru:"Сложный",en:"Hard"},superhard:{ru:"Очень сложный",en:"Super hard"},hardLevel:{ru:"Сложный уровень!",en:"Hard level!"},superhardLevel:{ru:"Очень сложный уровень!",en:"Super hard level!"},win1:{ru:"Отлично!",en:"Great!"},win2:{ru:"Великолепно!",en:"Awesome!"},win3:{ru:"Идеально!",en:"Perfect!"},addedAlbum:{ru:"Картинка добавлена в альбом",en:"Picture added to your album"},stuckTitle:{ru:"Колония застряла!",en:"The colony is stuck!"},stuckText:{ru:"Во всех слотах коробки, чьи кубики сейчас недоступны. Используй бустер или начни заново.",en:"Every slot holds a color the ants can’t reach yet. Use a booster or try again."},giveUp:{ru:"Сдаться",en:"Give up"},music:{ru:"Музыка",en:"Music"},sounds:{ru:"Звуки",en:"Sounds"},language:{ru:"Язык",en:"Language"},resetProgress:{ru:"Сбросить прогресс",en:"Reset progress"},resetConfirm:{ru:"Точно сбросить весь прогресс?",en:"Really reset all progress?"},credits:{ru:"Авторы и лицензии",en:"Credits & licenses"},close:{ru:"Закрыть",en:"Close"},buy:{ru:"Купить",en:"Buy"},notEnough:{ru:"Не хватает монет",en:"Not enough coins"},locked:{ru:"Откроется на уровне {n}",en:"Unlocks at level {n}"},world:{ru:"Мир {n}",en:"World {n}"},collected:{ru:"Собрано {a} из {b}",en:"Collected {a} of {b}"},speed:{ru:"Скорость",en:"Speed"},toastBlocked:{ru:"Сначала возьми коробку перед ней",en:"Take the box in front first"},toastFrozen:{ru:"Коробка заморожена — растает через несколько ходов",en:"Frozen — it thaws after a few taps"},toastSlots:{ru:"Нет свободных слотов",en:"No free slots"},toastLink:{ru:"Связанные коробки берутся только вместе",en:"Linked boxes must be taken together"},toastNoHint:{ru:"Отсюда уже не выбраться… Попробуй «Отменить» или «+Слот»",en:"No way out from here… Try Undo or +Slot"},toastGrab:{ru:"Выбери любую коробку в очереди",en:"Pick any box in the queue"},toastLinkSlots:{ru:"Для связанных коробок нужно два свободных слота",en:"Linked boxes need two free slots"},booster_hint:{ru:"Подсказка",en:"Hint"},booster_undo:{ru:"Отменить",en:"Undo"},booster_slot:{ru:"+Слот",en:"+Slot"},booster_shuffle:{ru:"Перемешать",en:"Shuffle"},booster_grab:{ru:"Магнит",en:"Magnet"},boosterDesc_hint:{ru:"Солвер покажет лучшую следующую коробку.",en:"The solver shows the best next box."},boosterDesc_undo:{ru:"Отменяет последний ход.",en:"Takes back your last move."},boosterDesc_slot:{ru:"Добавляет ещё один слот до конца уровня.",en:"Adds one more slot for this level."},boosterDesc_shuffle:{ru:"Перемешивает очередь так, чтобы уровень можно было пройти.",en:"Reshuffles the queue into a solvable order."},boosterDesc_grab:{ru:"Достаёт любую коробку из глубины очереди.",en:"Pulls any box out of the queue."},newMechanic:{ru:"Новинка!",en:"New!"},gotIt:{ru:"Понятно!",en:"Got it!"},tutorial1:{ru:"Нажми на коробку — муравьи выбегут и съедят кубики своего цвета",en:"Tap a box — its ants will run out and eat cubes of their color"},tutorial2:{ru:"Муравьи заходят в рамку с любой стороны и берут кубик, если к нему есть свободный проход",en:"Ants come into the frame from any side and take a cube if there is a free way to it"},debug:{ru:"Режим отладки",en:"Debug mode"},debugHint:{ru:"Все уровни открыты, видна сложность",en:"All levels unlocked, difficulty visible"},debugLevels:{ru:"Все уровни",en:"All levels"},autoSolve:{ru:"Автопрохождение",en:"Auto-solve"},skipLevel:{ru:"Пропустить уровень",en:"Skip level"},on:{ru:"Вкл",en:"On"},off:{ru:"Выкл",en:"Off"},noSolution:{ru:"Солвер не нашёл решения из этой позиции",en:"The solver found no solution from here"},tutorial3:{ru:"Не забивай слоты цветами, до которых муравьям не добраться!",en:"Don’t fill the slots with colors the ants can’t reach!"},mech_hidden_t:{ru:"Коробки-сюрпризы",en:"Mystery boxes"},mech_hidden_d:{ru:"Цвет коробки с «?» откроется, только когда она окажется первой в своём столбце.",en:"A “?” box reveals its color only when it reaches the front of its column."},mech_link_t:{ru:"Связанные коробки",en:"Linked boxes"},mech_link_d:{ru:"Коробки на цепочке берутся только вместе и занимают два слота.",en:"Chained boxes are taken together and need two free slots."},mech_fence_t:{ru:"Заборчик",en:"Fence"},mech_fence_d:{ru:"Через заборчик муравьи не пролезут — заходить придётся с других сторон рамки.",en:"Ants can’t get past a fence — they have to come in from the other sides of the frame."},mech_frozen_t:{ru:"Лёд",en:"Ice"},mech_frozen_d:{ru:"Замороженную коробку нельзя взять. Число на льду — сколько ходов осталось до оттаивания.",en:"A frozen box can’t be taken. The number shows how many taps until it thaws."},mech_gate_t:{ru:"Калитка",en:"Gate"},mech_gate_d:{ru:"В заборе есть калитка с оранжевыми столбиками — муравьи пройдут только через неё.",en:"The fence has a gate between orange-topped posts — that’s the only way in."},boosterUnlocked:{ru:"Новый бустер!",en:"New booster!"},free:{ru:"бесплатно ×{n}",en:"×{n} free"},endless:{ru:"Бесконечный режим",en:"Endless mode"},loading:{ru:"Муравьи готовятся…",en:"Ants are getting ready…"},progress:{ru:"Съедено",en:"Eaten"},licenseText:{ru:"Картинки уровней созданы из эмодзи: Microsoft Fluent Emoji (MIT), Twemoji (© Twitter, Inc. и участники, CC BY 4.0, https://creativecommons.org/licenses/by/4.0/) и Google Noto Emoji (Apache 2.0). Шрифт Nunito (SIL OFL 1.1). 3D — three.js (MIT). Музыка и звуки синтезируются в браузере.",en:"Level pictures are made from emoji: Microsoft Fluent Emoji (MIT), Twemoji (© Twitter, Inc. and contributors, CC BY 4.0, https://creativecommons.org/licenses/by/4.0/) and Google Noto Emoji (Apache 2.0). Font: Nunito (SIL OFL 1.1). 3D: three.js (MIT). Music and sounds are synthesized in the browser."}};let Yr=(navigator.language||"en").toLowerCase().startsWith("ru")?"ru":"en";function mr(s){Yr=s,document.documentElement.lang=s}function qc(){return Yr}function yt(s,t){let e=eg[s][Yr];if(t)for(const[n,i]of Object.entries(t))e=e.replace(`{${n}}`,String(i));return e}function ns(s){return s?s[Yr]:""}const ng={hint:"light-bulb",undo:"undo",slot:"slot",shuffle:"shuffle",grab:"magnet"};function $c(s){const t=ng[s];return t==="undo"||t==="shuffle"||t==="slot"?`<span style="color:${t==="undo"?"#ff8a3d":t==="shuffle"?"#3aa0ff":"#35b84a"}">${Se(t,34)}</span>`:ue(t,36)}class ig{el;top;dock;title;tierEl;fill;progAnt;speedBtn;boosterBtns=new Map;tutorialEl=null;debugEl;handEl=null;sizeObserver=null;constructor(t,e){this.el=rt("div",{class:"hud"});const n=rt("button",{class:"btn round",html:Se("pause",26),attrs:{"aria-label":"pause"}});n.addEventListener("click",()=>{Ft.play("button"),e.onPause()}),this.title=rt("div",{class:"level-name"}),this.tierEl=rt("div",{class:"tier hidden"}),this.fill=rt("div",{class:"progress-fill"}),this.progAnt=rt("span",{html:ue("ant",28)}),this.progAnt.style.position="absolute",this.progAnt.style.left="0%";const i=rt("div",{class:"progress"},this.fill,this.progAnt);this.progAnt.firstElementChild?.classList.add("prog-ant"),this.speedBtn=rt("button",{class:"btn round white speed-btn",attrs:{"aria-label":yt("speed")}}),this.speedBtn.addEventListener("click",()=>{Ft.play("button"),e.onSpeed()});const r=rt("button",{class:"btn round white home-btn",html:Se("home",24),attrs:{"aria-label":yt("toMap")}});r.addEventListener("click",()=>{Ft.play("button"),e.onHome()}),this.debugEl=rt("div",{class:"hud-debug hidden"}),this.top=rt("div",{class:"hud-top"},rt("div",{class:"hud-left"},n,r),rt("div",{class:"hud-title"},this.title,rt("div",{},this.tierEl),i,this.debugEl),this.speedBtn),this.dock=rt("div",{class:"boosters"});for(const a of gi){const o=rt("button",{class:"booster",attrs:{"aria-label":yt(`booster_${a}`)}});o.addEventListener("click",l=>{l.stopPropagation(),Ft.unlock(),e.onBooster(a)}),this.boosterBtns.set(a,o),this.dock.append(o)}this.el.append(this.top,this.dock),t.append(this.el),this.setSpeed(1)}setLevel(t,e){this.title.textContent=yt("level",{n:t}),this.tierEl.className="tier "+e+(e==="normal"?" hidden":""),this.tierEl.innerHTML=e==="superhard"?`${ue("skull",16)} ${yt("superhard")}`:`${ue("fire",16)} ${yt("hard")}`}setDebug(t){this.debugEl.classList.toggle("hidden",!t),this.debugEl.textContent=t??""}setProgress(t,e){const n=e?t/e:0;this.fill.style.width=`calc(${(n*100).toFixed(2)}% - 4px)`,this.progAnt.style.left=`${(n*100).toFixed(2)}%`}setSpeed(t){this.speedBtn.innerHTML=`${Se(t===1?"play":"ff",22)}<span>${t}x</span>`}setBoosters(t){for(const e of gi){const n=this.boosterBtns.get(e),i=t[e];n.className="booster"+(i.locked?" locked":"")+(i.active?" active":"")+(!i.locked&&!i.usable?" dim":""),i.locked?n.innerHTML=$c(e)+ue("locked",26,"lock")+`<span class="lvl">${i.unlockAt}</span>`:n.innerHTML=$c(e)+(i.count>0?`<span class="count">${i.count}</span>`:'<span class="plus">+</span>')}}boosterRect(t){return this.boosterBtns.get(t).getBoundingClientRect()}insets(){const t=this.top.getBoundingClientRect(),e=this.dock.getBoundingClientRect();return{top:t.bottom+6,bottom:window.innerHeight-e.top+8}}banner(t,e){const n=rt("div",{class:"banner "+e,html:`${ue(e==="superhard"?"skull":"fire",34)} ${t}`});this.el.append(n),setTimeout(()=>n.remove(),2200)}showTutorial(t,e,n){this.hideTutorial(),this.tutorialEl=rt("div",{class:"tutorial",text:t}),this.tutorialEl.style.top=`${e}px`,this.el.append(this.tutorialEl),n&&(this.handEl=rt("div",{class:"hand",html:sg}),this.handEl.style.left=`${n.x-8}px`,this.handEl.style.top=`${n.y-4}px`,this.el.append(this.handEl))}hideTutorial(){this.tutorialEl?.remove(),this.handEl?.remove(),this.tutorialEl=this.handEl=null}observe(t){this.sizeObserver?.disconnect(),this.sizeObserver=new ResizeObserver(()=>t()),this.sizeObserver.observe(this.top),this.sizeObserver.observe(this.dock)}destroy(){this.sizeObserver?.disconnect(),this.el.remove()}}const sg='<svg viewBox="0 0 64 64" width="56" height="56"><path d="M22 30V12a5 5 0 0110 0v14l1-1a5 5 0 017 1l1 1a5 5 0 017 2 5 5 0 016 4v12c0 9-7 15-16 15h-4c-6 0-10-3-13-8l-7-12a4.5 4.5 0 017-5z" fill="#fff" stroke="#3b2a55" stroke-width="3.2" stroke-linejoin="round"/><path d="M33 26v8M41 28v7M48 32v5" stroke="#3b2a55" stroke-width="3" stroke-linecap="round"/></svg>';function Zr(s,t,e={}){const n=Jh(s),i=document.createElement("canvas"),r=Math.min(2,window.devicePixelRatio||1),a=Math.max(s.w,s.h),o=Math.max(1,Math.floor(t*r/a));i.width=s.w*o,i.height=s.h*o,i.style.width=`${s.w*o/r}px`,i.style.height=`${s.h*o/r}px`;const l=i.getContext("2d");e.bg&&(l.fillStyle=e.bg,l.fillRect(0,0,i.width,i.height));const c=e.rounded!==!1&&o>=5?o*.22:0,h=o>=5?Math.max(.5,o*.06):0;for(let f=0;f<s.h;f++)for(let u=0;u<s.w;u++){const d=n[f*s.w+u];d<0||(l.fillStyle=s.palette[d],c>0?(l.beginPath(),l.roundRect(u*o+h,f*o+h,o-h*2,o-h*2,c),l.fill(),l.fillStyle="rgba(255,255,255,0.18)",l.fillRect(u*o+h+c*.5,f*o+h+c*.3,o-h*2-c,Math.max(1,o*.12))):l.fillRect(u*o,f*o,o,o))}return i}const _s=112,Ms=150,Yc=190,rg=150,Zc=[["four-leaf-clover","tulip","lady-beetle","sunflower","honeybee","blossom","butterfly","seedling"],["mushroom","evergreen-tree","deciduous-tree","fallen-leaf","maple-leaf","snail","chestnut","herb"],["spiral-shell","tropical-fish","palm-tree","crab","sun"],["lollipop","candy","doughnut","cupcake","shortcake","cookie","ice-cream"],["crescent-moon","ringed-planet","rocket","comet","shooting-star","glowing-star"],["snowman","christmas-tree","snowflake","cloud-with-snow","wrapped-gift"],["crystal-ball","castle","unicorn","magic-wand","gem-stone","sparkles","crown"]],Jc=new Map;function ag(s){const t=ei(s);let e=Jc.get(t.id);return e||(e=jh(t,512,99+s).toDataURL("image/jpeg",.86),Jc.set(t.id,e)),e}class og{el;scroll;inner;coinsEl;playBtn;debugBtn;cb;data;width=400;height=0;constructor(t,e){this.cb=e,this.el=rt("div",{class:"map"}),this.scroll=rt("div",{class:"map-scroll"}),this.inner=rt("div",{class:"map-inner"}),this.scroll.append(this.inner),this.coinsEl=rt("span");const n=rt("div",{class:"pill",html:ue("coin",34)},this.coinsEl),i=rt("button",{class:"btn round white",html:ue("framed-picture",30),attrs:{"aria-label":yt("album")}});i.addEventListener("click",()=>{Ft.unlock(),Ft.play("button"),e.onAlbum()});const r=rt("button",{class:"btn round white",html:ue("gear",30),attrs:{"aria-label":yt("settings")}});r.addEventListener("click",()=>{Ft.unlock(),Ft.play("button"),e.onSettings()}),this.debugBtn=rt("button",{class:"btn round white hidden",html:ue("lady-beetle",30),attrs:{"aria-label":yt("debugLevels")}}),this.debugBtn.addEventListener("click",()=>{Ft.unlock(),Ft.play("button"),e.onDebug()});const a=rt("div",{class:"topbar"},n,rt("div",{class:"right"},this.debugBtn,i,r));this.playBtn=Hr("","big green",()=>this.cb.onPlay(this.data.unlocked));const o=rt("div",{class:"play-dock"},this.playBtn);this.el.append(this.scroll,a,o),t.append(this.el)}show(t){this.data=t,this.el.classList.remove("hidden"),this.render()}hide(){this.el.classList.add("hidden")}get visible(){return!this.el.classList.contains("hidden")}refreshTop(){this.coinsEl.textContent=String(this.data.coins)}nodeY(t){const e=Cs(t),n=Yc+(t-1)*_s+(e+1)*Ms-Ms*.5;return this.height-n}nodeX(t){const e=Math.min(120,this.width*.28);return this.width/2+Math.sin(t*.85)*e+Math.sin(t*.31)*e*.25}render(){const t=this.data;this.refreshTop(),this.debugBtn.classList.toggle("hidden",!t.debug),this.playBtn.innerHTML=`${Se("play",26)} ${yt("level",{n:t.unlocked})}`;const e=t.debug?Math.max(t.total,t.unlocked+6):Math.max(t.unlocked+6,Math.min(t.total,jn)),n=Cs(e)+1,i=Math.min(n*jn,Math.max(e,1));this.width=Math.min(520,window.innerWidth),this.height=Yc+i*_s+n*Ms+rg;const r=this.inner;r.innerHTML="",r.style.width=this.width+"px",r.style.height=this.height+"px",this.el.style.background=ei(Cs(t.unlocked)).bg;for(let c=0;c<n;c++){const h=c*jn+1,f=(c+1)*jn,u=c===n-1?0:this.nodeY(f)-_s/2-Ms*.5,d=c===0?this.height:this.nodeY(h)+_s/2+Ms*.5,m=rt("div",{class:"world-bg"});if(m.style.top=u+"px",m.style.height=d-u+"px",m.style.left="calc(50% - 50vw)",m.style.width="100vw",m.style.backgroundImage=`url(${ag(c)})`,m.style.backgroundColor=ei(c).ground.base,r.append(m),c>0){const y=rt("div",{class:"world-fade"});y.style.top=d-80+"px",y.style.left="calc(50% - 50vw)",y.style.width="100vw",y.style.background=`linear-gradient(180deg, ${ei(c).ground.base}00, ${ei(c).ground.base}cc 50%, ${ei(c-1).ground.base}00)`,r.append(y)}const _=wn[c%wn.length],g=h>t.total&&t.total>0,p=rt("div",{class:"world-banner",html:`<small>${yt("world",{n:c+1})}${g?" · ∞":""}</small>${g?yt("endless"):ns(_.name)}`});p.style.top=this.nodeY(h)+_s*.5+18+"px",p.style.background=`linear-gradient(180deg, ${_.ui.accent}, ${cg(_.ui.accent,-.18)})`,r.append(p);const v=Zc[c%Zc.length];for(let y=0;y<9;y++){const M=h+Math.floor((y+.5)*(jn/9)),E=this.nodeY(M)+y*37%60-30,C=this.nodeX(M)>this.width/2?-1:1,S=this.width/2+C*(this.width*.36+y*53%40),T=38+y*29%26,L=rt("div",{class:"deco",html:ue(v[y%v.length],T)});L.style.left=S-T/2+"px",L.style.top=E-T/2+"px",L.style.transform=`rotate(${y*47%40-20}deg)`,r.append(L)}}const a=[];for(let c=1;c<=i;c++)a.push([this.nodeX(c),this.nodeY(c)]);const o=lg(a),l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.classList.add("trail"),l.setAttribute("width",String(this.width)),l.setAttribute("height",String(this.height)),l.innerHTML=`<path d="${o}" fill="none" stroke="rgba(90,60,30,0.25)" stroke-width="34" stroke-linecap="round" transform="translate(0 4)"/><path d="${o}" fill="none" stroke="#fff4dc" stroke-opacity="0.92" stroke-width="30" stroke-linecap="round"/><path d="${o}" fill="none" stroke="#c7a57a" stroke-opacity="0.55" stroke-width="5" stroke-dasharray="2 14" stroke-linecap="round"/>`,r.append(l);for(let c=1;c<=i;c++){const h=w2(c),f=(t.stars[c]??0)>0,u=c===t.unlocked,d=c>t.unlocked&&!t.debug,m=rt("button",{class:`node ${h}`+(f?" done":"")+(u?" current":"")+(d?" locked":""),attrs:{"aria-label":yt("level",{n:c})}});m.style.left=this.nodeX(c)+"px",m.style.top=this.nodeY(c)+"px";const _=f?t.picture(c):null;if(_){const g=Zr(_,44,{rounded:!1});g.className="thumb",m.append(g,rt("span",{class:"num-small",text:String(c)}))}else m.append(String(c));if(f){const g=t.stars[c];m.append(rt("span",{class:"nstars",html:[1,2,3].map(p=>ue("star",20,p<=g?"":"off")).join("")}))}if(!d&&h!=="normal"&&m.append(rt("span",{class:"badge",html:ue(h==="superhard"?"skull":"fire",26)})),d&&c===t.unlocked+1&&m.append(rt("span",{class:"lockico",html:ue("locked",22)})),t.debug){const g=t.stats(c);g&&m.append(rt("span",{class:"dbg",text:`r${Math.round((g.random??0)*100)} c${Math.round(g.casual*100)} 🧠${g.critical??"?"}`}))}if(m.addEventListener("click",()=>{if(Ft.unlock(),d){Ft.play("invalid"),m.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"translateX(0)"}],{duration:220});return}Ft.play("button"),this.cb.onPlay(c)}),r.append(m),u){const g=rt("div",{class:"map-ant",html:ue("ant",50)});g.style.left=this.nodeX(c)+"px",g.style.top=this.nodeY(c)+"px",r.append(g)}}requestAnimationFrame(()=>{this.scroll.scrollTop=this.nodeY(t.unlocked)-this.scroll.clientHeight*.55})}}function lg(s){if(s.length<2)return"";let t=`M${s[0][0].toFixed(1)},${s[0][1].toFixed(1)}`;for(let e=0;e<s.length-1;e++){const n=s[Math.max(0,e-1)],i=s[e],r=s[e+1],a=s[Math.min(s.length-1,e+2)],o=i[0]+(r[0]-n[0])/6,l=i[1]+(r[1]-n[1])/6,c=r[0]-(a[0]-i[0])/6,h=r[1]-(a[1]-i[1])/6;t+=` C${o.toFixed(1)},${l.toFixed(1)} ${c.toFixed(1)},${h.toFixed(1)} ${r[0].toFixed(1)},${r[1].toFixed(1)}`}return t}function cg(s,t){const e=parseInt(s.slice(1),16),n=i=>Math.max(0,Math.min(255,Math.round(i+i*t)));return`rgb(${n(e>>16&255)},${n(e>>8&255)},${n(e&255)})`}class hg{el;list;countEl;constructor(t,e){this.el=rt("div",{class:"album hidden"});const n=rt("button",{class:"btn round white",html:Se("back",26),attrs:{"aria-label":"back"}});n.addEventListener("click",()=>{Ft.play("button"),e()}),this.countEl=rt("span");const i=rt("div",{class:"topbar"},n,rt("div",{class:"pill",html:ue("framed-picture",32)},this.countEl));this.list=rt("div"),this.el.append(this.list),t.append(this.el,i),i.classList.add("album-top","hidden"),this.top=i}top;show(t,e){this.el.classList.remove("hidden"),this.top.classList.remove("hidden"),this.list.innerHTML="";let n=0;const i=Math.ceil(t.length/jn);for(let r=0;r<i;r++){const a=wn[r%wn.length];this.list.append(rt("h2",{text:`${yt("world",{n:r+1})} · ${ns(a.name)}`}));const o=rt("div",{class:"album-grid"});for(const l of t.filter(c=>Cs(c.n)===r)){const c=(e[l.n]??0)>0;c&&n++;const h=rt("div",{class:"album-card"+(c?"":" missing")}),f=rt("div",{class:"pic"});if(c){const u=Zr(l.picture,110,{rounded:!0});u.style.width=u.style.height="",f.append(u)}else f.textContent="?";h.append(f,rt("span",{class:"nm",text:c?ns(l.name)||`#${l.n}`:`#${l.n}`})),o.append(h)}this.list.append(o)}this.countEl.textContent=`${n} / ${t.length}`,this.el.scrollTop=0}hide(){this.el.classList.add("hidden"),this.top.classList.add("hidden")}}const Wi=s=>s===void 0?"—":`${Math.round(s*100)}%`;class ug{constructor(t,e,n){this.onPlay=n,this.el=rt("div",{class:"album debug-list hidden"});const i=rt("button",{class:"btn round white",html:Se("back",26),attrs:{"aria-label":"back"}});i.addEventListener("click",()=>{Ft.play("button"),e()}),this.summary=rt("div",{class:"pill debug-pill"}),this.top=rt("div",{class:"topbar album-top hidden"},i,this.summary),this.list=rt("div"),this.el.append(this.list),t.append(this.el,this.top)}onPlay;el;list;top;summary;show(t,e){this.el.classList.remove("hidden"),this.top.classList.remove("hidden"),this.list.innerHTML="";const n={normal:[],hard:[],superhard:[]};for(const a of t)a.stats&&n[a.tier].push(a.stats.random??a.stats.casual);const i=a=>a.length?a.reduce((o,l)=>o+l,0)/a.length:void 0;this.summary.innerHTML=`${ue("lady-beetle",28)} ${t.length} · <span class="tier-dot normal"></span>${Wi(i(n.normal))} <span class="tier-dot hard"></span>${Wi(i(n.hard))} <span class="tier-dot superhard"></span>${Wi(i(n.superhard))}`,this.list.append(rt("p",{class:"debug-legend",html:"random / casual / greedy — доля побед симулированных игроков: жмёт наугад / берёт доступные цвета / жадный. Чем меньше, тем сложнее. 🧠 critical — сколько раз на пути к победе неверная коробка ведёт в тупик (надо подумать). В шапке — средний random по тирам. random / casual / greedy — win rates of simulated players (lower = harder); 🧠 critical — decisions where a wrong box loses."}));const r=Math.ceil(t.length/jn);for(let a=0;a<r;a++){const o=wn[a%wn.length];this.list.append(rt("h2",{text:`${yt("world",{n:a+1})} · ${ns(o.name)}`}));const l=rt("div",{class:"debug-grid"});for(const c of t.filter(h=>Cs(h.n)===a))l.append(this.card(c,e[c.n]??0));this.list.append(l)}this.el.scrollTop=0}card(t,e){const n=t.stats,i=t.boxes.filter(f=>f.hidden).length,r=new Set(t.boxes.filter(f=>f.link!==void 0).map(f=>f.link)).size,a=t.boxes.filter(f=>f.frozen).length,o=[i?`❓${i}`:"",r?`🔗${r}`:"",a?`❄️${a}`:"",t.fences?.length?`🚧${[...new Set(t.fences.map(f=>f.side[0].toUpperCase()))].join("")}`:""].filter(Boolean).join(" "),l=rt("div",{class:"pic"}),c=Zr(t.picture,120,{rounded:!0});c.style.width=c.style.height="",l.append(c);const h=rt("button",{class:`debug-card ${t.tier}`},rt("div",{class:"debug-head",html:`<b>#${t.n}</b> <span class="tier-dot ${t.tier}"></span> ${ns(t.name)}${e?" "+"★".repeat(e):""}`}),l,rt("div",{class:"debug-stats",html:`<b>random ${Wi(n?.random)}</b> · casual ${Wi(n?.casual)} · greedy ${Wi(n?.greedy)}<br>🧠 ${n?.critical??"?"} critical / ${n?.decisions??"?"} decisions<br>${t.picture.w}×${t.picture.h} · ${n?.pixels??"?"} cubes · ${t.picture.palette.length} col<br>${t.boxes.length} boxes · ${t.columns.length} columns · ${t.slots} slots`+(o?`<br>${o}`:"")}));return h.addEventListener("click",()=>{Ft.unlock(),Ft.play("button"),this.onPlay(t.n)}),h}hide(){this.el.classList.add("hidden"),this.top.classList.add("hidden")}}let tu;const vi=[];function fg(s){tu=s}function Ss(){return vi.length>0}function gr(){for(;vi.length;)vi[vi.length-1].close()}function Sn(s){const t=rt("div",{class:"overlay"}),e=rt("div",{class:"dialog"+(s.scroll?" scroll":"")});e.append(rt("div",{class:"dialog-head "+(s.head??"blue"),text:s.title}));let n=!1;const i={el:e,close(){if(n)return;n=!0;const r=vi.indexOf(i);r>=0&&vi.splice(r,1),t.classList.add("out"),setTimeout(()=>t.remove(),180)}};if(s.closable!==!1&&s.onClose){const r=rt("button",{class:"btn close-x",html:Se("close",22)});r.addEventListener("click",()=>{Ft.play("button"),i.close(),s.onClose?.()}),e.append(r)}for(const r of s.body??[])e.append(typeof r=="string"?rt("p",{html:r}):r);if(s.buttons?.length){const r=rt("div",{class:"actions"+(s.row?" row":"")});for(const a of s.buttons)r.append(Hr(a.label,a.cls??"",()=>{a.onClick()!==!1&&i.close()}));e.append(r)}return t.append(e),tu.append(t),vi.push(i),Ft.play("whoosh",{volume:.5}),i}let di=null,Kc=0;function Xi(s,t,e=1800){di||(di=rt("div",{class:"toast"})),di.parentElement!==s&&s.append(di),di.textContent=t,di.classList.add("show"),clearTimeout(Kc),Kc=window.setTimeout(()=>di?.classList.remove("show"),e)}const cl="pixel-picnic-save-v1";function yr(){return{v:1,level:1,stars:{},coins:120,boosters:{hint:0,undo:0,slot:0,shuffle:0,grab:0},seen:[],settings:{music:.5,sfx:.8,lang:null,speed:1,debug:!1}}}function dg(){try{const s=localStorage.getItem(cl);if(!s)return yr();const t=JSON.parse(s),e=yr();return{...e,...t,boosters:{...e.boosters,...t.boosters??{}},settings:{...e.settings,...t.settings??{}},stars:t.stars??{},seen:t.seen??[]}}catch{return yr()}}function Ve(s){try{localStorage.setItem(cl,JSON.stringify(s))}catch{}}function Qc(){try{localStorage.removeItem(cl)}catch{}return yr()}const pg="modulepreload",mg=function(s,t){return new URL(s,t).href},jc={},gg=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let c=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(e.map(h=>{if(h=mg(h,n),h in jc)return;jc[h]=!0;const f=h.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(n)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===h&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":pg,f||(d.as="script"),d.crossOrigin="",d.href=h,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};let wr=null,vr=null;const Er=new Map,Vr=new Map;async function eu(){return wr||(wr=(await gg(()=>import("./levels-UDuyeIiM.js"),[],import.meta.url)).default??[]),wr}function vg(){return wr??[]}async function xg(s){const t=await eu();if(s<=t.length)return t[s-1];const e=Vr.get(s);if(e)return e;const n=await nu(s,t);return Vr.set(s,n),n}function nu(s,t){vr||(vr=new Worker(new URL(""+new URL("genWorker-BoFi4bWR.js",import.meta.url).href,import.meta.url),{type:"module"}),vr.onmessage=n=>{Er.get(n.data.n)?.(n.data.level),Er.delete(n.data.n)});const e=t[s*7919%t.length];return new Promise(n=>{Er.set(s,n),vr.postMessage({n:s,picture:e.picture,name:e.name})})}function _g(s){const t=vg();s>t.length&&t.length&&!Vr.has(s)&&!Er.has(s)&&nu(s,t).then(e=>Vr.set(s,e))}const Mg={hidden:"red-question-mark",fence:"construction",link:"link",frozen:"snowflake",gate:"door"};class Sg{save=dg();levels=[];stage=document.getElementById("stage");ui=document.getElementById("ui");view=null;game=null;hud=null;map;album;debugList;autoTimer=0;raf=0;last=0;rescued=!1;tutorial=0;loadingEl=null;async init(){this.save.settings.lang&&mr(this.save.settings.lang),this.loadingEl=rt("div",{class:"loading"},rt("div",{class:"logo",html:`${ue("ant",96)}<h1>${yt("title")}</h1><p>${yt("loading")}</p>`})),document.getElementById("app").append(this.loadingEl),this.save.settings.lang?mr(this.save.settings.lang):mr(qc()),fg(this.ui),await A2(),this.levels=await eu(),Ft.setMusicVolume(this.save.settings.music),Ft.setSfxVolume(this.save.settings.sfx),this.map=new og(this.ui,{onPlay:l=>this.play(l),onSettings:()=>this.openSettings(),onAlbum:()=>this.openAlbum(),onDebug:()=>this.openDebugList()}),this.album=new hg(this.ui,()=>{this.album.hide(),this.showMap()}),this.debugList=new ug(this.ui,()=>{this.debugList.hide(),this.showMap()},l=>{this.debugList.hide(),this.play(l)});const t=()=>Ft.unlock();window.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.checkUpdate()}),window.setInterval(()=>{this.checkUpdate()},5*6e4),window.setTimeout(()=>{this.checkUpdate()},4e3),window.addEventListener("keydown",l=>{l.key==="Escape"&&this.game&&!Ss()&&this.openPause()}),this.stage.addEventListener("pointerdown",l=>this.onStageTap(l)),this.stage.addEventListener("pointermove",l=>{if(l.pointerType!=="mouse"||!this.game||Ss())return;const c=this.stage.getBoundingClientRect(),h=this.game.hover(l.clientX-c.left,l.clientY-c.top);this.stage.style.cursor=h!==null&&(this.game.grabMode||this.game.sim.canTake(h))?"pointer":""}),this.stage.addEventListener("pointerleave",()=>this.game?.hover(-1,-1));const e=new URLSearchParams(location.search);e.has("reset")&&(this.save=Qc()),e.has("debug")&&(this.save.settings.debug=e.get("debug")!=="0",Ve(this.save));const n=Number(e.get("boosters"));if(n>0)for(const l of gi)this.save.boosters[l]=n;const i=Number(e.get("coins"));i>0&&(this.save.coins=i);const r=Number(e.get("progress"));if(r>1){for(let l=1;l<r;l++)this.save.stars[l]=this.save.stars[l]??(l%4===0?2:3);this.save.level=Math.max(this.save.level,r);for(const l of["tutorial",...gi.map(c=>"booster:"+c)])this.save.seen.includes(l)||this.save.seen.push(l);Ve(this.save)}e.has("demo")&&this.startDemo(Number(e.get("demo"))||0);const a=Number(e.get("level"));if(a>0){this.save.level=Math.max(this.save.level,a);for(const l of["tutorial",...gi.map(c=>"booster:"+c)])this.save.seen.includes(l)||this.save.seen.push(l);Ve(this.save),this.play(a)}else this.showMap();const o=this.loadingEl;setTimeout(()=>{o?.classList.add("out"),setTimeout(()=>o?.remove(),450)},150)}startDemo(t){let e=0,n=-1;setInterval(()=>{this.game&&performance.now()-this.last>120&&(this.last=performance.now(),this.game.update(.05,this.last/1e3))},50),setInterval(()=>{const i=this.game;if(!i||Ss()||i.status!=="playing"||(i.level.n!==n&&(n=i.level.n,e=0),t&&e>=t))return;const r=i.level.solution?.[e];r!==void 0&&i.sim.isQuiet()&&i.takeBox(r)&&e++},250)}mapData(){return{unlocked:this.save.level,stars:this.save.stars,coins:this.save.coins,total:this.levels.length,picture:t=>this.levels[t-1]?.picture??null,debug:this.save.settings.debug,stats:t=>this.levels[t-1]?.stats}}openDebugList(){this.map.hide(),this.debugList.show(this.levels,this.save.stars)}updateReady=!1;async checkUpdate(){if(!this.updateReady)try{const t=await fetch(`version.json?t=${Date.now()}`,{cache:"no-store"});if(!t.ok)return;const{id:e}=await t.json();if(!e||e==="2026-09-25T20:11:10.887Z")return;this.updateReady=!0,this.game||this.reloadForUpdate()}catch{}}reloadForUpdate(){Xi(this.ui,yt("newVersion"),2e3),window.setTimeout(()=>location.reload(),700)}showMap(){if(this.updateReady)return this.reloadForUpdate();this.stopLoop(),this.stopAuto(),this.game?.dispose(),this.game=null,this.hud?.destroy(),this.hud=null,this.stage.style.visibility="hidden",this.map.show(this.mapData()),Ft.startMusic(ei(Math.floor((this.save.level-1)/20)).music)}openAlbum(){this.map.hide(),this.album.show(this.levels,this.save.stars)}ensureView(){return this.view||(this.view=new X2(this.stage,{onPick:()=>this.game?.onPick(),onDeliver:()=>this.game?.onDeliver()}),this.view.resize(window.innerWidth,window.innerHeight)),this.view}async play(t){gr();const e=await xg(t),n=m2(t).filter(r=>!this.save.seen.includes("booster:"+r)),i=p2(t).filter(r=>!this.save.seen.includes("mech:"+r));this.startLevel(e);for(const r of i)this.introMechanic(r);for(const r of n)this.introBooster(r);_g(t+1)}startLevel(t){this.map.hide(),this.album.hide(),this.game?.dispose(),this.hud?.destroy();const e=this.ensureView();this.stage.style.visibility="visible";const n=ei(t.world);if(this.hud=new ig(this.ui,{onPause:()=>this.openPause(),onHome:()=>this.confirmLeave(),onSpeed:()=>this.cycleSpeed(),onBooster:r=>this.onBooster(r)}),this.hud.setLevel(t.n,t.tier),this.hud.setProgress(0,1),this.stopAuto(),this.save.settings.debug){const r=t.stats,a=o=>`${Math.round(o*100)}%`;this.hud.setDebug(r?`random ${r.random===void 0?"?":a(r.random)} · casual ${a(r.casual)} · greedy ${a(r.greedy)} · 🧠 ${r.critical??"?"}/${r.decisions??"?"} · ${r.pixels} cubes · ${t.boxes.length} boxes`:`${t.boxes.length} boxes · ${t.picture.palette.length} col`)}const i=this.hud.insets();e.insets={top:i.top,bottom:i.bottom,left:0,right:0},this.hud.observe(()=>this.onResize()),this.rescued=!1,this.game=new Q2(e,t,n,{onWin:r=>this.onWin(r),onStuck:()=>this.onStuck(),onProgress:(r,a)=>this.hud?.setProgress(r,a),onToast:r=>this.toast(r),onChange:()=>this.refreshBoosters()}),this.game.speed=this.save.settings.speed,this.hud.setSpeed(this.game.speed),this.refreshBoosters(),Ft.startMusic(n.music),t.tier!=="normal"&&setTimeout(()=>{this.hud?.banner(yt(t.tier==="superhard"?"superhardLevel":"hardLevel"),t.tier),Ft.play("unlock",{volume:.6})},350),this.tutorial=t.n===1&&!this.save.seen.includes("tutorial")?1:0,this.tutorial&&setTimeout(()=>this.showTutorialStep(),600),this.startLoop()}startLoop(){this.stopLoop(),this.last=performance.now();const t=e=>{const n=Math.min(.05,(e-this.last)/1e3);this.last=e,this.game?.update(n,e/1e3),this.raf=requestAnimationFrame(t)};this.raf=requestAnimationFrame(t)}stopLoop(){cancelAnimationFrame(this.raf),this.raf=0}onResize(){if(this.view&&(this.view.resize(window.innerWidth,window.innerHeight),this.hud&&this.game)){const t=this.hud.insets();this.view.insets={top:t.top,bottom:t.bottom,left:0,right:0},this.view.relayout(!1)}this.map.visible&&this.map.render()}onStageTap(t){if(!this.game||Ss())return;const e=this.stage.getBoundingClientRect(),n=this.game.taps;this.game.tap(t.clientX-e.left,t.clientY-e.top),this.game.taps!==n&&this.tutorial&&(this.tutorial++,this.showTutorialStep())}cycleSpeed(){if(!this.game)return;const t=this.game.speed>=3?1:this.game.speed+1;this.game.speed=t,this.save.settings.speed=t,Ve(this.save),this.hud?.setSpeed(t)}toast(t){let n={blocked:"toastBlocked",frozen:"toastFrozen",slots:"toastSlots",link:"toastLink",nohint:"toastNoHint",grab:"toastGrab"}[t];t==="slots"&&this.game&&this.game.sim.freeSlots()===1&&(n="toastLinkSlots"),Xi(this.ui,yt(n),t==="nohint"?3e3:1800)}showTutorialStep(){const t=this.game,e=this.hud;if(!t||!e)return;const n=Math.max(90,e.insets().top+4);if(this.tutorial===1){const i=t.sim.clone(),r=i.legalMoves(),a=i.exposedCounts(),o=t.level.solution?.[0],l=o!==void 0&&i.canTake(o)?o:r.find(h=>a[i.boxColor(h)]>0)??r[0],c=t.view.toScreen(t.view.queue.boxTop(l,new P));e.showTutorial(yt("tutorial1"),n,c)}else this.tutorial===2?(e.showTutorial(yt("tutorial2"),n),setTimeout(()=>this.tutorial===2&&e.hideTutorial(),5e3)):this.tutorial===3?(e.showTutorial(yt("tutorial3"),n),setTimeout(()=>this.tutorial===3&&e.hideTutorial(),5e3)):(e.hideTutorial(),this.tutorial=0,this.markSeen("tutorial"))}markSeen(t){this.save.seen.includes(t)||(this.save.seen.push(t),Ve(this.save))}boosterState(){const t=this.game,e=t?.level.n??1,n={};for(const i of gi)n[i]={count:this.save.boosters[i],locked:e<$i[i],unlockAt:$i[i],active:i==="grab"&&!!t?.grabMode,usable:!!t&&t.canUse(i)};return n}refreshBoosters(){this.hud?.setBoosters(this.boosterState())}onBooster(t){const e=this.game;if(e){if(e.level.n<$i[t]){Ft.play("invalid"),Xi(this.ui,yt("locked",{n:$i[t]}));return}if(t==="grab"&&e.grabMode){e.cancelGrab(),this.save.boosters.grab++,Ve(this.save),this.refreshBoosters();return}if(this.save.boosters[t]<=0){this.openShop(t);return}if(!e.canUse(t)){Ft.play("invalid"),t==="grab"&&Xi(this.ui,yt("toastSlots"));return}this.spendBooster(t)}}spendBooster(t,e=!1){const n=this.game;if(!n)return!1;const i=n.use(t);return i&&(this.save.boosters[t]--,e&&(this.rescued=!0),Ve(this.save)),this.refreshBoosters(),i}openShop(t,e=!1){const n=wc[t],i=this.game;i&&(i.paused=!0);const r=rt("div",{class:"mech-art",html:th(t)});Sn({title:yt(`booster_${t}`),head:"purple",body:[r,yt(`boosterDesc_${t}`),rt("p",{class:"subtle",html:`${ue("coin",20)} ${this.save.coins}`})],buttons:[{label:`${yt("buy")} <span class="price">${ue("coin",26)} ${n}</span>`,cls:"green",onClick:()=>this.save.coins<n?(Ft.play("invalid"),Xi(this.ui,yt("notEnough")),!1):(this.save.coins-=n,this.save.boosters[t]++,Ve(this.save),Ft.play("coin"),i&&(i.paused=!1),this.spendBooster(t,e),!0)}],onClose:()=>{i&&(i.paused=!1),e&&i?.status==="stuck"&&this.onStuck()}})}onWin(t){const e=t.level.n,n=t.stars(this.rescued),i=d2(t.level.tier,n),r=!(this.save.stars[e]>0);this.save.stars[e]=Math.max(this.save.stars[e]??0,n),this.save.coins+=i,e>=this.save.level&&(this.save.level=e+1),Ve(this.save);const a=t.celebrate();Ft.duck(.25,2.5),Ft.play("win"),this.tutorial&&(this.hud?.hideTutorial(),this.tutorial=0,this.markSeen("tutorial")),setTimeout(()=>this.showWinDialog(t.level,n,i,r),Math.max(900,a*1e3+200))}showWinDialog(t,e,n,i){const r=Zr(t.picture,150,{rounded:!0,bg:"#fffaf0"});r.classList.add("pic-thumb");const a=rt("div",{class:"stars",html:[1,2,3].map(()=>ue("star",64,"star")).join("")}),o=ns(t.name),l=rt("div",{class:"coins-gain",html:`${ue("coin",30)} +${n}`}),c=[a,r];o&&c.push(rt("p",{html:`<b>${o}</b>`,style:"margin:0 0 6px"})),c.push(l),i&&c.push(rt("p",{class:"subtle",text:yt("addedAlbum")})),Sn({title:yt(e===3?"win3":e===2?"win2":"win1"),head:"green",body:c,buttons:[{label:`${yt("next")} ${Se("play",22)}`,cls:"green big",onClick:()=>{this.play(t.n+1)}},{label:`${Se("map",22)} ${yt("map")}`,cls:"white small",onClick:()=>this.showMap()}]}),a.querySelectorAll(".star").forEach((f,u)=>{u<e&&setTimeout(()=>{f.classList.add("on"),Ft.play("star",{pitch:u})},350+u*330)}),setTimeout(()=>Ft.play("coin"),350+e*330+150)}onStuck(){const t=this.game;if(!t)return;Ft.play("lose");const e=[],n=t.level.n,i=r=>{if(n<$i[r])return;const a=this.save.boosters[r];e.push({label:`${yt(`booster_${r}`)} ${a>0?`<span class="price">×${a}</span>`:`<span class="price">${ue("coin",24)} ${wc[r]}</span>`}`,cls:r==="slot"?"green":"blue",onClick:()=>{a>0?this.spendBooster(r,!0):setTimeout(()=>this.openShop(r,!0),200)}})};i("slot"),i("undo"),i("shuffle"),e.push({label:`${Se("restart",22)} ${yt("retry")}`,cls:"white",onClick:()=>{this.restart()}}),Sn({title:yt("stuckTitle"),head:"red",body:[yt("stuckText")],buttons:e})}async restart(){if(!this.game)return;const t=this.game.level;this.startLevel(t)}openPause(){const t=this.game;if(!t)return;t.paused=!0;const e=[{label:`${Se("play",22)} ${yt("resume")}`,cls:"green",onClick:()=>{t.paused=!1}},{label:`${Se("restart",22)} ${yt("restart")}`,cls:"blue",onClick:()=>{this.restart()}},{label:`${Se("home",22)} ${yt("toMap")}`,cls:"white",onClick:()=>this.showMap()}];this.save.settings.debug&&e.push({label:`${ue("lady-beetle",24)} ${yt("autoSolve")}`,cls:"purple small",onClick:()=>{t.paused=!1,this.startAuto()}},{label:`${Se("ff",20)} ${yt("skipLevel")}`,cls:"purple small",onClick:()=>this.skipLevel()}),Sn({title:yt("paused"),head:"purple",body:[this.volumeRow("music"),this.volumeRow("sfx")],buttons:e,onClose:()=>{t.paused=!1}})}confirmLeave(){const t=this.game;if(!t)return this.showMap();if(t.taps===0)return this.showMap();t.paused=!0,Sn({title:yt("toMap"),head:"purple",body:[rt("p",{text:yt("leaveLevel")})],buttons:[{label:`${Se("home",22)} ${yt("leave")}`,cls:"blue",onClick:()=>this.showMap()},{label:`${Se("play",22)} ${yt("stay")}`,cls:"green",onClick:()=>{t.paused=!1}}],onClose:()=>{t.paused=!1}})}startAuto(){this.stopAuto();const t=this.game;t&&(t.speed=3,this.hud?.setSpeed(3),this.autoTimer=window.setInterval(()=>{if(this.game!==t)return this.stopAuto();if(Ss())return;const e=t.autoStep();e==="stuck"?(this.stopAuto(),Xi(this.ui,yt("noSolution"),2500)):e==="done"&&this.stopAuto()},200))}stopAuto(){clearInterval(this.autoTimer),this.autoTimer=0}skipLevel(){const t=this.game;if(!t)return;const e=t.level.n;this.save.stars[e]=Math.max(this.save.stars[e]??0,1),e>=this.save.level&&(this.save.level=e+1),Ve(this.save),this.play(e+1)}volumeRow(t){const e=rt("input",{attrs:{type:"range",min:"0",max:"1",step:"0.05"}});return e.value=String(this.save.settings[t]),e.addEventListener("input",()=>{const n=Number(e.value);this.save.settings[t]=n,t==="music"?Ft.setMusicVolume(n):Ft.setSfxVolume(n),Ve(this.save)}),e.addEventListener("change",()=>t==="sfx"&&Ft.play("tap")),rt("div",{class:"setting-row"},rt("span",{html:`${ue(t==="music"?"musical-note":"speaker-high-volume",26)} ${yt(t==="music"?"music":"sounds")}`}),e)}openSettings(){const t=rt("div",{class:"seg"});["ru","en"].forEach(o=>{const l=rt("button",{class:qc()===o?"on":"",text:o==="ru"?"Русский":"English"});l.addEventListener("click",()=>{Ft.play("button"),this.save.settings.lang=o,Ve(this.save),mr(o),gr(),this.map.render(),this.openSettings()}),t.append(l)});const e=rt("div",{class:"setting-row"},rt("span",{text:yt("language")}),t),n=rt("div",{class:"seg"});[!0,!1].forEach(o=>{const l=rt("button",{class:this.save.settings.debug===o?"on":"",text:yt(o?"on":"off")});l.addEventListener("click",()=>{Ft.play("button"),this.save.settings.debug=o,Ve(this.save),gr(),this.map.show(this.mapData()),this.openSettings()}),n.append(l)});const i=rt("div",{class:"setting-row"},rt("span",{html:`${ue("lady-beetle",24)} ${yt("debug")}<br><small style="font-size:12px;opacity:.7">${yt("debugHint")}</small>`}),n),r=Hr(yt("credits"),"white small",()=>this.openCredits()),a=Hr(yt("resetProgress"),"red small",()=>{Sn({title:yt("resetProgress"),head:"red",body:[yt("resetConfirm")],row:!0,buttons:[{label:Se("check",24),cls:"red",onClick:()=>{this.save=Qc(),Ve(this.save),gr(),this.showMap()}},{label:Se("close",24),cls:"white",onClick:()=>{}}]})});Sn({title:yt("settings"),head:"purple",body:[this.volumeRow("music"),this.volumeRow("sfx"),e,i,rt("div",{class:"actions"},r,a)],onClose:()=>{}})}openCredits(){Sn({title:yt("credits"),head:"blue",scroll:!0,body:[rt("p",{class:"credits",text:yt("licenseText")})],buttons:[{label:yt("close"),cls:"white small",onClick:()=>{}}]})}introMechanic(t){const e=this.game;e&&(e.paused=!0),Sn({title:yt("newMechanic"),head:"green",body:[rt("div",{class:"mech-art",html:ue(Mg[t],84)}),rt("p",{html:`<b style="font-size:21px">${yt(`mech_${t}_t`)}</b>`}),yt(`mech_${t}_d`)],buttons:[{label:yt("gotIt"),cls:"green",onClick:()=>{this.markSeen("mech:"+t),e&&(e.paused=!1)}}]}),Ft.play("unlock")}introBooster(t){const e=this.game;e&&(e.paused=!0),this.save.boosters[t]+=Ec,this.markSeen("booster:"+t),Ve(this.save),this.refreshBoosters(),Sn({title:yt("boosterUnlocked"),head:"purple",body:[rt("div",{class:"mech-art",html:th(t)}),rt("p",{html:`<b style="font-size:21px">${yt(`booster_${t}`)}</b> · ${yt("free",{n:Ec})}`}),yt(`boosterDesc_${t}`)],buttons:[{label:yt("gotIt"),cls:"green",onClick:()=>{e&&(e.paused=!1)}}]}),Ft.play("unlock")}}function th(s){switch(s){case"hint":return ue("light-bulb",84);case"grab":return ue("magnet",84);case"undo":return`<span style="color:#ff8a3d">${Se("undo",84)}</span>`;case"shuffle":return`<span style="color:#3aa0ff">${Se("shuffle",84)}</span>`;case"slot":return`<span style="color:#35b84a">${Se("slot",84)}</span>`}}new Sg().init().catch(s=>{console.error(s),document.body.insertAdjacentHTML("beforeend",`<pre style="position:fixed;inset:auto 0 0 0;padding:12px;background:#fff;color:#c00;white-space:pre-wrap">${String(s?.stack??s)}</pre>`)});
