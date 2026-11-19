(()=>{var yd=0,zc=1,vd=2;var $r=1,Sd=2,qs=3,Vi=0,mn=1,Ze=2,rs=0,Ys=1,yi=2,Gc=3,Vc=4,Md=5;var os=100,bd=101,wd=102,Td=103,Ad=104,Ed=200,Cd=201,Rd=202,Id=203,Hc=204,Wc=205,Pd=206,Ld=207,Nd=208,Dd=209,Ud=210,Od=211,Fd=212,Bd=213,kd=214,aa=0,la=1,ca=2,Us=3,ua=4,ha=5,da=6,fa=7,Fa=0,zd=1,Gd=2,si=0,Xc=1,qc=2,Yc=3,Zc=4,Jc=5,Kc=6,$c=7;var jc=300,as=301,Zs=302,Ba=303,ka=304,pa=1e3,ei=1001,ma=1002,qe=1003,Vd=1004;var jr=1005;var fn=1006,za=1007;var qn=1008;var vn=1009,Qc=1010,tu=1011,Js=1012,Ga=1013,Yn=1014,Dn=1015,Zn=1016,Va=1017,Ha=1018,ls=1020,eu=35902,nu=35899,iu=1021,su=1022,Jn=1023,xi=1026,vi=1027,Wa=1028,Xa=1029,Hi=1030,qa=1031;var Ya=1033,Qr=33776,to=33777,eo=33778,no=33779,Za=35840,Ja=35841,Ka=35842,$a=35843,ja=36196,Qa=37492,tl=37496,el=37488,nl=37489,io=37490,il=37491,sl=37808,rl=37809,ol=37810,al=37811,ll=37812,cl=37813,ul=37814,hl=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,xl=37821,_l=36492,yl=36494,vl=36495,Sl=36283,Ml=36284,so=36285,bl=36286;var Cr=2300,ga=2301,ra=2302,Lc=2303,Nc=2400,Dc=2401,Uc=2402;var Hd=3200;var wl=0,Wd=1,Si="",Ke="srgb",Rr="srgb-linear",Ir="linear",pe="srgb";var oa=7680;var Xd=519,qd=512,Yd=513,Zd=514,ru=515,Jd=516,Kd=517,ou=518,au=519,$d=35044,Ks=35048;var lu="300 es",Rn=2e3,Os=2001;function r0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function o0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jd(){let n=Pr("canvas");return n.style.display="block",n}var Xh={},Fs=null;function cu(...n){let t="THREE."+n.shift();Fs?Fs("log",t,...n):console.log(t,...n)}function Qd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Qd(n);let t="THREE."+n.shift();if(Fs)Fs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ht(...n){n=Qd(n);let t="THREE."+n.shift();if(Fs)Fs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Tr(...n){let t=n.join(" ");t in Xh||(Xh[t]=!0,zt(...n))}function tf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var ef={[aa]:aa,[ca]:da,[ua]:ua,[Us]:ha,[la]:la,[da]:ca,[fa]:fa,[ha]:Us},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qh=1234567,Ar=Math.PI/180,Bs=180/Math.PI;function $s(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function uu(n,t){return(n%t+t)%t}function a0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function l0(n,t,e){return n!==t?(e-n)/(t-n):0}function Er(n,t,e){return(1-e)*n+e*t}function c0(n,t,e,i){return Er(n,t,1-Math.exp(-e*i))}function u0(n,t=1){return t-Math.abs(uu(n,t*2)-t)}function h0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function d0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function f0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function p0(n,t){return n+Math.random()*(t-n)}function m0(n){return n*(.5-Math.random())}function g0(n){n!==void 0&&(qh=n);let t=qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x0(n){return n*Ar}function _0(n){return n*Bs}function y0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function v0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),h=o((t-i)/2),m=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*m,a*u,a*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function du(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nf(n,t){if(t.constructor===Float32Array)return n;let e=du(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function sf(n,t){if(t.constructor===Float32Array)return n;let e=du(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var ro={DEG2RAD:Ar,RAD2DEG:Bs,generateUUID:$s,clamp:oe,euclideanModulo:uu,mapLinear:a0,inverseLerp:l0,lerp:Er,damp:c0,pingpong:u0,smoothstep:h0,smootherstep:d0,randInt:f0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:x0,radToDeg:_0,isPowerOfTwo:y0,ceilPowerOfTwo:v0,floorPowerOfTwo:hu,setQuaternionFromProperEuler:S0,normalize:sf,denormalize:nf},xu=class xu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xu.prototype.isVector2=!0;var Kt=xu,In=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],m=r[o+1],p=r[o+2],y=r[o+3];if(f!==y||l!==h||c!==m||u!==p){let g=l*h+c*m+u*p+f*y;g<0&&(h=-h,m=-m,p=-p,y=-y,g=-g);let d=1-a;if(g<.9995){let _=Math.acos(g),w=Math.sin(_);d=Math.sin(d*_)/w,a=Math.sin(a*_)/w,l=l*d+h*a,c=c*d+m*a,u=u*d+p*a,f=f*d+y*a}else{l=l*d+h*a,c=c*d+m*a,u=u*d+p*a,f=f*d+y*a;let _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],m=r[o+2],p=r[o+3];return t[e]=a*p+u*f+l*m-c*h,t[e+1]=l*p+u*h+c*f-a*m,t[e+2]=c*p+u*m+a*h-l*f,t[e+3]=u*p-a*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),m=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*p,this._y=c*m*f-h*u*p,this._z=c*u*p+h*m*f,this._w=c*u*f-h*m*p;break;case"YXZ":this._x=h*u*f+c*m*p,this._y=c*m*f-h*u*p,this._z=c*u*p-h*m*f,this._w=c*u*f+h*m*p;break;case"ZXY":this._x=h*u*f-c*m*p,this._y=c*m*f+h*u*p,this._z=c*u*p+h*m*f,this._w=c*u*f-h*m*p;break;case"ZYX":this._x=h*u*f-c*m*p,this._y=c*m*f+h*u*p,this._z=c*u*p-h*m*f,this._w=c*u*f+h*m*p;break;case"YZX":this._x=h*u*f+c*m*p,this._y=c*m*f+h*u*p,this._z=c*u*p-h*m*f,this._w=c*u*f-h*m*p;break;case"XZY":this._x=h*u*f-c*m*p,this._y=c*m*f-h*u*p,this._z=c*u*p+h*m*f,this._w=c*u*f+h*m*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_u=class _u{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dc.copy(this).projectOnVector(t),this.sub(dc)}reflect(t){return this.sub(dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_u.prototype.isVector3=!0;var k=_u,dc=new k,Yh=new In,yu=class yu{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],p=i[8],y=s[0],g=s[3],d=s[6],_=s[1],w=s[4],S=s[7],E=s[2],A=s[5],x=s[8];return r[0]=o*y+a*_+l*E,r[3]=o*g+a*w+l*A,r[6]=o*d+a*S+l*x,r[1]=c*y+u*_+f*E,r[4]=c*g+u*w+f*A,r[7]=c*d+u*S+f*x,r[2]=h*y+m*_+p*E,r[5]=h*g+m*w+p*A,r[8]=h*d+m*S+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,p=e*f+i*h+s*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=f*y,t[1]=(s*c-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=m*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yu.prototype.isMatrix3=!0;var qt=yu,fc=new qt,Zh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M0(){let n={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rr]:{primaries:t,whitePoint:i,transfer:Ir,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}var re=M0();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vs,xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vs===void 0&&(vs=Pr("canvas")),vs.width=t.width,vs.height=t.height;let s=vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=vs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gi(e[i]/255)*255):e[i]=gi(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},b0=0,ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pc(s[o].image)):r.push(pc(s[o]))}else r=pc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var w0=0,mc=new k,pn=class n extends ni{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ei,s=ei,r=fn,o=qn,a=Jn,l=vn,c=n.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=$s(),this.name="",this.source=new ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pa:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pa:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=jc;pn.DEFAULT_ANISOTROPY=1;var vu=class vu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],p=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,S=(m+1)/2,E=(d+1)/2,A=(u+h)/4,x=(f+y)/4,b=(p+g)/4;return w>S&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=x/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=b/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=x/r,s=b/r),this.set(i,s,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(f-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vu.prototype.isVector4=!0;var Ne=vu,_a=class extends ni{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends _a{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Lr=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Oa=class Oa{constructor(t,e,i,s,r,o,a,l,c,u,f,h,m,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,h,m,p,y,g)}set(t,e,i,s,r,o,a,l,c,u,f,h,m,p,y,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=p,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,m=o*f,p=a*u,y=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+p*c,e[5]=h-y*c,e[9]=-a*l,e[2]=y-h*c,e[6]=p+m*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,m=l*f,p=c*u,y=c*f;e[0]=h+y*a,e[4]=p*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-p,e[6]=y+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,m=l*f,p=c*u,y=c*f;e[0]=h-y*a,e[4]=-o*f,e[8]=p+m*a,e[1]=m+p*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,m=o*f,p=a*u,y=a*f;e[0]=l*u,e[4]=p*c-m,e[8]=h*c+y,e[1]=l*f,e[5]=y*c+h,e[9]=m*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,m=o*c,p=a*l,y=a*c;e[0]=l*u,e[4]=y-h*f,e[8]=p*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*f+p,e[10]=h-y*f}else if(t.order==="XZY"){let h=o*l,m=o*c,p=a*l,y=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+y,e[5]=o*u,e[9]=m*f-p,e[2]=p*f-m,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(T0,t,A0)}lookAt(t,e,i){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ri.crossVectors(i,Mn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ri.crossVectors(i,Mn)),Ri.normalize(),Bo.crossVectors(Mn,Ri),s[0]=Ri.x,s[4]=Bo.x,s[8]=Mn.x,s[1]=Ri.y,s[5]=Bo.y,s[9]=Mn.y,s[2]=Ri.z,s[6]=Bo.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],p=i[2],y=i[6],g=i[10],d=i[14],_=i[3],w=i[7],S=i[11],E=i[15],A=s[0],x=s[4],b=s[8],F=s[12],P=s[1],B=s[5],z=s[9],Z=s[13],I=s[2],H=s[6],K=s[10],J=s[14],T=s[3],C=s[7],L=s[11],G=s[15];return r[0]=o*A+a*P+l*I+c*T,r[4]=o*x+a*B+l*H+c*C,r[8]=o*b+a*z+l*K+c*L,r[12]=o*F+a*Z+l*J+c*G,r[1]=u*A+f*P+h*I+m*T,r[5]=u*x+f*B+h*H+m*C,r[9]=u*b+f*z+h*K+m*L,r[13]=u*F+f*Z+h*J+m*G,r[2]=p*A+y*P+g*I+d*T,r[6]=p*x+y*B+g*H+d*C,r[10]=p*b+y*z+g*K+d*L,r[14]=p*F+y*Z+g*J+d*G,r[3]=_*A+w*P+S*I+E*T,r[7]=_*x+w*B+S*H+E*C,r[11]=_*b+w*z+S*K+E*L,r[15]=_*F+w*Z+S*J+E*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],m=t[14],p=t[3],y=t[7],g=t[11],d=t[15],_=l*m-c*h,w=a*m-c*f,S=a*h-l*f,E=o*m-c*u,A=o*h-l*u,x=o*f-a*u;return e*(y*_-g*w+d*S)-i*(p*_-g*E+d*A)+s*(p*w-y*E+d*x)-r*(p*S-y*A+g*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],m=t[11],p=t[12],y=t[13],g=t[14],d=t[15],_=e*a-i*o,w=e*l-s*o,S=e*c-r*o,E=i*l-s*a,A=i*c-r*a,x=s*c-r*l,b=u*y-f*p,F=u*g-h*p,P=u*d-m*p,B=f*g-h*y,z=f*d-m*y,Z=h*d-m*g,I=_*Z-w*z+S*B+E*P-A*F+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return t[0]=(a*Z-l*z+c*B)*H,t[1]=(s*z-i*Z-r*B)*H,t[2]=(y*x-g*A+d*E)*H,t[3]=(h*A-f*x-m*E)*H,t[4]=(l*P-o*Z-c*F)*H,t[5]=(e*Z-s*P+r*F)*H,t[6]=(g*S-p*x-d*w)*H,t[7]=(u*x-h*S+m*w)*H,t[8]=(o*z-a*P+c*b)*H,t[9]=(i*P-e*z-r*b)*H,t[10]=(p*A-y*S+d*_)*H,t[11]=(f*S-u*A-m*_)*H,t[12]=(a*F-o*B-l*b)*H,t[13]=(e*B-i*F+s*b)*H,t[14]=(y*w-p*E-g*_)*H,t[15]=(u*E-f*w+h*_)*H,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,p=r*f,y=o*u,g=o*f,d=a*f,_=l*c,w=l*u,S=l*f,E=i.x,A=i.y,x=i.z;return s[0]=(1-(y+d))*E,s[1]=(m+S)*E,s[2]=(p-w)*E,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(h+d))*A,s[6]=(g+_)*A,s[7]=0,s[8]=(p+w)*x,s[9]=(g-_)*x,s[10]=(1-(h+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ss.set(s[0],s[1],s[2]).length(),a=Ss.set(s[4],s[5],s[6]).length(),l=Ss.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);let c=1/o,u=1/a,f=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,e.setFromRotationMatrix(zn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Rn,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),m=(i+s)/(i-s),p,y;if(l)p=r/(o-r),y=o*r/(o-r);else if(a===Rn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Os)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Rn,l=!1){let c=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),m=-(i+s)/(i-s),p,y;if(l)p=1/(o-r),y=o/(o-r);else if(a===Rn)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===Os)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Oa.prototype.isMatrix4=!0;var he=Oa,Ss=new k,zn=new he,T0=new k(0,0,0),A0=new k(1,1,1),Ri=new k,Bo=new k,Mn=new k,Kh=new he,$h=new In,Wn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $h.setFromEuler(this),this.setFromQuaternion($h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},E0=0,jh=new k,Ms=new In,hi=new he,ko=new k,yr=new k,C0=new k,R0=new In,Qh=new k(1,0,0),td=new k(0,1,0),ed=new k(0,0,1),nd={type:"added"},I0={type:"removed"},bs={type:"childadded",child:null},gc={type:"childremoved",child:null},ke=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,e=new Wn,i=new In,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new qt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(td,t)}rotateZ(t){return this.rotateOnAxis(ed,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(td,t)}translateZ(t){return this.translateOnAxis(ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ko.copy(t):ko.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(yr,ko,this.up):hi.lookAt(ko,yr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(hi),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nd),bs.child=t,this.dispatchEvent(bs),bs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(I0),gc.child=t,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nd),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,C0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,R0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ke.DEFAULT_UP=new k(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},P0={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),d=this._getHandJoint(c,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,p=.005;c.inputState.pinching&&h>m+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},zo={h:0,s:0,l:0};function xc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=uu(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=xc(o,r,t+1/3),this.g=xc(o,r,t),this.b=xc(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let i=rf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return re.workingToColorSpace(rn.copy(this),t),Math.round(oe(rn.r*255,0,255))*65536+Math.round(oe(rn.g*255,0,255))*256+Math.round(oe(rn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(rn.copy(this),e);let i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ke){re.workingToColorSpace(rn.copy(this),t);let e=rn.r,i=rn.g,s=rn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(zo);let i=Er(Ii.h,zo.h,e),s=Er(Ii.s,zo.s,e),r=Er(Ii.l,zo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Wt;Wt.NAMES=rf;var Nr=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new k,di=new k,_c=new k,fi=new k,ws=new k,Ts=new k,id=new k,yc=new k,vc=new k,Sc=new k,Mc=new Ne,bc=new Ne,wc=new Ne,Di=class n{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Gn.subVectors(s,e),di.subVectors(i,e),_c.subVectors(t,e);let o=Gn.dot(Gn),a=Gn.dot(di),l=Gn.dot(_c),c=di.dot(di),u=di.dot(_c),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,m=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-m-p,p,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Mc.setScalar(0),bc.setScalar(0),wc.setScalar(0),Mc.fromBufferAttribute(t,e),bc.fromBufferAttribute(t,i),wc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Mc,r.x),o.addScaledVector(bc,r.y),o.addScaledVector(wc,r.z),o}static isFrontFacing(t,e,i,s){return Gn.subVectors(i,e),di.subVectors(t,e),Gn.cross(di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Gn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ws.subVectors(s,i),Ts.subVectors(r,i),yc.subVectors(t,i);let l=ws.dot(yc),c=Ts.dot(yc);if(l<=0&&c<=0)return e.copy(i);vc.subVectors(t,s);let u=ws.dot(vc),f=Ts.dot(vc);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(i).addScaledVector(ws,o);Sc.subVectors(t,r);let m=ws.dot(Sc),p=Ts.dot(Sc);if(p>=0&&m<=p)return e.copy(r);let y=m*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Ts,a);let g=u*p-m*f;if(g<=0&&f-u>=0&&m-p>=0)return id.subVectors(r,s),a=(f-u)/(f-u+(m-p)),e.copy(s).addScaledVector(id,a);let d=1/(g+y+h);return o=y*d,a=h*d,e.copy(i).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Vo.subVectors(this.max,vr),As.subVectors(t.a,vr),Es.subVectors(t.b,vr),Cs.subVectors(t.c,vr),Pi.subVectors(Es,As),Li.subVectors(Cs,Es),ji.subVectors(As,Cs);let e=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ji.z,ji.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ji.z,0,-ji.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ji.y,ji.x,0];return!Tc(e,As,Es,Cs,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,As,Es,Cs,Vo))?!1:(Ho.crossVectors(Pi,Li),e=[Ho.x,Ho.y,Ho.z],Tc(e,As,Es,Cs,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pi=[new k,new k,new k,new k,new k,new k,new k,new k],Vn=new k,Go=new Pn,As=new k,Es=new k,Cs=new k,Pi=new k,Li=new k,ji=new k,vr=new k,Vo=new k,Ho=new k,Qi=new k;function Tc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Be=new k,Wo=new Kt,L0=0,$e=class extends ni{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$d,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=t!==void 0?du(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wo.fromBufferAttribute(this,e),Wo.applyMatrix3(t),this.setXY(e,Wo.x,Wo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):nf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sf(t,this.array)}};var Dr=class extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ur=class extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var fe=class extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}},N0=new Pn,Sr=new k,Ac=new k,Ui=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):N0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Ac)),this.expandByPoint(Sr.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},D0=0,Cn=new he,Ec=new ke,Rs=new k,bn=new Pn,Mr=new Pn,Xe=new k,on=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r0(t)?Ur:Dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return Ec.lookAt(t),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(bn.min,Mr.min),bn.expandByPoint(Xe),Xe.addVectors(bn.max,Mr.max),bn.expandByPoint(Xe)):(bn.expandByPoint(Mr.min),bn.expandByPoint(Mr.max))}bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xe.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(t,c),Xe.add(Rs)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new $e(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let F=0;F<i.count;F++)a[F]=new k,l[F]=new k;let u=new k,f=new k,h=new k,m=new Kt,p=new Kt,y=new Kt,g=new k,d=new k;function _(F,P,B){c[F]=c[P]=c[B]=1,u.fromBufferAttribute(i,F),f.fromBufferAttribute(i,P),h.fromBufferAttribute(i,B),m.fromBufferAttribute(r,F),p.fromBufferAttribute(r,P),y.fromBufferAttribute(r,B),f.sub(u),h.sub(u),p.sub(m),y.sub(m);let z=1/(p.x*y.y-y.x*p.y);isFinite(z)&&(g.copy(f).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(z),d.copy(h).multiplyScalar(p.x).addScaledVector(f,-y.x).multiplyScalar(z),a[F].add(g),a[P].add(g),a[B].add(g),l[F].add(d),l[P].add(d),l[B].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,P=w.length;F<P;++F){let B=w[F],z=B.start,Z=B.count;for(let I=z,H=z+Z;I<H;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new k,E=new k,A=new k,x=new k;function b(F){A.fromBufferAttribute(s,F),x.copy(A);let P=a[F];S.copy(P),S.sub(A.multiplyScalar(A.dot(P))).normalize(),E.crossVectors(x,P);let z=E.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,z)}for(let F=0,P=i.count;F<P;++F)c[F]&&b(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(t)for(let h=0,m=t.count;h<m;h+=3){let p=t.getX(h+0),y=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),m=0,p=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let d=0;d<u;d++)h[p++]=c[m++]}return new $e(h,u,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],m=t(h,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Cc=new k,U0=new k,O0=new qt,Hn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Cc.subVectors(i,e).cross(U0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Cc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||O0.getNormalMatrix(t),s=this.coplanarPoint(Cc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},F0=0,Oi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Ys,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Wc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Hn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mi=new k,Rc=new k,Xo=new k,qo=new k,Or=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Rc.copy(t).add(e).multiplyScalar(.5),Xo.copy(e).sub(t).normalize(),qo.copy(this.origin).sub(Rc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xo),a=qo.dot(this.direction),l=-qo.dot(Xo),c=qo.lengthSq(),u=Math.abs(1-o*o),f,h,m,p;if(u>0)if(f=o*l-a,h=o*a-l,p=r*u,f>=0)if(h>=-p)if(h<=p){let y=1/u;f*=y,h*=y,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Rc).addScaledVector(Xo,h),m}intersectSphere(t,e){if(t.radius<0)return null;mi.subVectors(t.center,this.origin);let i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,m=t.z-o.z,p=e.x-o.x,y=e.y-o.y,g=e.z-o.z,d=i.x-o.x,_=i.y-o.y,w=i.z-o.z,S=Math.abs(l),E=Math.abs(c),A=Math.abs(u),x,b,F,P,B,z,Z,I,H,K,J,T;if(S>=E&&S>=A?(F=l,z=f,H=p,T=d,l>=0?(x=c,b=u,P=h,B=m,Z=y,I=g,K=_,J=w):(x=u,b=c,P=m,B=h,Z=g,I=y,K=w,J=_)):E>=A?(F=c,z=h,H=y,T=_,c>=0?(x=u,b=l,P=m,B=f,Z=g,I=p,K=w,J=d):(x=l,b=u,P=f,B=m,Z=p,I=g,K=d,J=w)):(F=u,z=m,H=g,T=w,u>=0?(x=l,b=c,P=f,B=h,Z=p,I=y,K=d,J=_):(x=c,b=l,P=h,B=f,Z=y,I=p,K=_,J=d)),F===0)return null;let C=x/F,L=b/F,G=1/F,Q=P-C*z,ut=B-L*z,V=Z-C*H,rt=I-L*H,et=K-C*T,dt=J-L*T,bt=et*rt-dt*V,Vt=Q*dt-ut*et,Pe=V*ut-rt*Q;if(s){if(bt<0||Vt<0||Pe<0)return null}else if((bt<0||Vt<0||Pe<0)&&(bt>0||Vt>0||Pe>0))return null;let It=bt+Vt+Pe;if(It===0)return null;let le=G*(bt*z+Vt*H+Pe*T);return(It>0?le<0:le>0)?null:this.at(le/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sd=new he,ts=new Or,Yo=new Ui,rd=new k,Zo=new k,Jo=new k,Ko=new k,Ic=new k,$o=new k,od=new k,jo=new k,Bt=class extends ke{constructor(t=new on,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(Ic.fromBufferAttribute(f,t),o?$o.addScaledVector(Ic,u):$o.addScaledVector(Ic.sub(e),u))}e.add($o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Yo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Yo,rd)===null||ts.origin.distanceToSquared(rd)>(t.far-t.near)**2))&&(sd.copy(r).invert(),ts.copy(t.ray).applyMatrix4(sd),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=h.length;p<y;p++){let g=h[p],d=o[g.materialIndex],_=Math.max(g.start,m.start),w=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=_,E=w;S<E;S+=3){let A=a.getX(S),x=a.getX(S+1),b=a.getX(S+2);s=Qo(this,d,t,i,c,u,f,A,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=p,d=y;g<d;g+=3){let _=a.getX(g),w=a.getX(g+1),S=a.getX(g+2);s=Qo(this,o,t,i,c,u,f,_,w,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=h.length;p<y;p++){let g=h[p],d=o[g.materialIndex],_=Math.max(g.start,m.start),w=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=_,E=w;S<E;S+=3){let A=S,x=S+1,b=S+2;s=Qo(this,d,t,i,c,u,f,A,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=p,d=y;g<d;g+=3){let _=g,w=g+1,S=g+2;s=Qo(this,o,t,i,c,u,f,_,w,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function B0(n,t,e,i,s,r,o,a){let l;if(t.side===mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Vi,a),l===null)return null;jo.copy(a),jo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:n}}function Qo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Zo),n.getVertexPosition(l,Jo),n.getVertexPosition(c,Ko);let u=B0(n,t,e,i,Zo,Jo,Ko,od);if(u){let f=new k;Di.getBarycoord(od,Zo,Jo,Ko,f),s&&(u.uv=Di.getInterpolatedAttribute(s,a,l,c,f,new Kt)),r&&(u.uv1=Di.getInterpolatedAttribute(r,a,l,c,f,new Kt)),o&&(u.normal=Di.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new k,materialIndex:0};Di.getNormal(Zo,Jo,Ko,h.normal),u.face=h,u.barycoord=f}return u}var Fr=class extends pn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=qe,u=qe,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vs=class extends $e{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Is=new he,ad=new he,ta=[],ld=new Pn,k0=new he,br=new Bt,wr=new Ui,ii=class extends Bt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,k0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Is),ld.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(ld)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Is),wr.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(i),t.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),ad.multiplyMatrices(i,Is),br.matrixWorld=ad,br.raycast(t,ta);for(let o=0,a=ta.length;o<a;o++){let l=ta[o];l.instanceId=r,l.object=this,e.push(l)}ta.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(s*this.count),s,this.count,Wa,Dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new Ui,z0=new Kt(.5,.5),ea=new k,Fi=class{constructor(t=new Hn,e=new Hn,i=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Rn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],m=r[7],p=r[8],y=r[9],g=r[10],d=r[11],_=r[12],w=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-o,m-u,d-p,E-_).normalize(),s[1].setComponents(c+o,m+u,d+p,E+_).normalize(),s[2].setComponents(c+a,m+f,d+y,E+w).normalize(),s[3].setComponents(c-a,m-f,d-y,E-w).normalize(),i)s[4].setComponents(l,h,g,S).normalize(),s[5].setComponents(c-l,m-h,d-g,E-S).normalize();else if(s[4].setComponents(c-l,m-h,d-g,E-S).normalize(),e===Rn)s[5].setComponents(c+l,m+h,d+g,E+S).normalize();else if(e===Os)s[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=z0.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ea.x=s.normal.x>0?t.max.x:t.min.x,ea.y=s.normal.y>0?t.max.y:t.min.y,ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cd=new he,va=class n{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];cd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Fi),i[s].setFromProjectionMatrix(cd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Fi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Br=class extends pn{constructor(t=[],e=as,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kr=class extends pn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends pn{constructor(t,e,i=Yn,s,r,o,a=qe,l=qe,c,u=xi,f=1){if(u!==xi&&u!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zr=class extends _i{constructor(t,e=Yn,i=as,s,r,o=qe,a=qe,l,c=xi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gr=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xn=class n extends on{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,m=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function p(y,g,d,_,w,S,E,A,x,b,F){let P=S/x,B=E/b,z=S/2,Z=E/2,I=A/2,H=x+1,K=b+1,J=0,T=0,C=new k;for(let L=0;L<K;L++){let G=L*B-Z;for(let Q=0;Q<H;Q++){let ut=Q*P-z;C[y]=ut*_,C[g]=G*w,C[d]=I,c.push(C.x,C.y,C.z),C[y]=0,C[g]=0,C[d]=A>0?1:-1,u.push(C.x,C.y,C.z),f.push(Q/x),f.push(1-L/b),J+=1}}for(let L=0;L<b;L++)for(let G=0;G<x;G++){let Q=h+G+H*L,ut=h+G+H*(L+1),V=h+(G+1)+H*(L+1),rt=h+(G+1)+H*L;l.push(Q,ut,rt),l.push(ut,V,rt),T+=6}a.addGroup(m,T,F),m+=T,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ns=class n extends on{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new k,u=new Kt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let m=i+f/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Hs=class n extends on{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],m=[],p=0,y=[],g=i/2,d=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(m,2));function _(){let S=new k,E=new k,A=0,x=(e-t)/i;for(let b=0;b<=r;b++){let F=[],P=b/r,B=P*(e-t)+t;for(let z=0;z<=s;z++){let Z=z/s,I=Z*l+a,H=Math.sin(I),K=Math.cos(I);E.x=B*H,E.y=-P*i+g,E.z=B*K,f.push(E.x,E.y,E.z),S.set(H,x,K).normalize(),h.push(S.x,S.y,S.z),m.push(Z,1-P),F.push(p++)}y.push(F)}for(let b=0;b<s;b++)for(let F=0;F<r;F++){let P=y[F][b],B=y[F+1][b],z=y[F+1][b+1],Z=y[F][b+1];(t>0||F!==0)&&(u.push(P,B,Z),A+=3),(e>0||F!==r-1)&&(u.push(B,z,Z),A+=3)}c.addGroup(d,A,0),d+=A}function w(S){let E=p,A=new Kt,x=new k,b=0,F=S===!0?t:e,P=S===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,g*P,0),h.push(0,P,0),m.push(.5,.5),p++;let B=p;for(let z=0;z<=s;z++){let I=z/s*l+a,H=Math.cos(I),K=Math.sin(I);x.x=F*K,x.y=g*P,x.z=F*H,f.push(x.x,x.y,x.z),h.push(0,P,0),A.x=H*.5+.5,A.y=K*.5*P+.5,m.push(A.x,A.y),p++}for(let z=0;z<s;z++){let Z=E+z,I=B+z;S===!0?u.push(I,I+1,Z):u.push(I+1,I,Z),b+=3}c.addGroup(d,b,S===!0?1:2),d+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bi=class n extends Hs{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vr=class n extends on{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new k,S=new k,E=new k;for(let A=0;A<e.length;A+=3)m(e[A+0],w),m(e[A+1],S),m(e[A+2],E),l(w,S,E,_)}function l(_,w,S,E){let A=E+1,x=[];for(let b=0;b<=A;b++){x[b]=[];let F=_.clone().lerp(S,b/A),P=w.clone().lerp(S,b/A),B=A-b;for(let z=0;z<=B;z++)z===0&&b===A?x[b][z]=F:x[b][z]=F.clone().lerp(P,z/B)}for(let b=0;b<A;b++)for(let F=0;F<2*(A-b)-1;F++){let P=Math.floor(F/2);F%2===0?(h(x[b][P+1]),h(x[b+1][P]),h(x[b][P])):(h(x[b][P+1]),h(x[b+1][P+1]),h(x[b+1][P]))}}function c(_){let w=new k;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(_),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function u(){let _=new k;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let S=g(_)/2/Math.PI+.5,E=d(_)/Math.PI+.5;o.push(S,1-E)}p(),f()}function f(){for(let _=0;_<o.length;_+=6){let w=o[_+0],S=o[_+2],E=o[_+4],A=Math.max(w,S,E),x=Math.min(w,S,E);A>.9&&x<.1&&(w<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function m(_,w){let S=_*3;w.x=t[S+0],w.y=t[S+1],w.z=t[S+2]}function p(){let _=new k,w=new k,S=new k,E=new k,A=new Kt,x=new Kt,b=new Kt;for(let F=0,P=0;F<r.length;F+=9,P+=6){_.set(r[F+0],r[F+1],r[F+2]),w.set(r[F+3],r[F+4],r[F+5]),S.set(r[F+6],r[F+7],r[F+8]),A.set(o[P+0],o[P+1]),x.set(o[P+2],o[P+3]),b.set(o[P+4],o[P+5]),E.copy(_).add(w).add(S).divideScalar(3);let B=g(E);y(A,P+0,_,B),y(x,P+2,w,B),y(b,P+4,S,B)}}function y(_,w,S,E){E<0&&_.x===1&&(o[w]=_.x-1),S.x===0&&S.z===0&&(o[w]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Hr=class n extends Vr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Wr=class n extends Vr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},an=class n extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,m=[],p=[],y=[],g=[];for(let d=0;d<u;d++){let _=d*h-o;for(let w=0;w<c;w++){let S=w*f-r;p.push(S,-_,0),y.push(0,0,1),g.push(w/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){let w=_+c*d,S=_+c*(d+1),E=_+1+c*(d+1),A=_+1+c*d;m.push(w,S,A),m.push(S,E,A)}this.setIndex(m),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ws=class n extends on{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],f=t,h=(e-t)/s,m=new k,p=new Kt;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let d=r+g/i*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),p.x=(m.x/e+1)/2,p.y=(m.y/e+1)/2,u.push(p.x,p.y)}f+=h}for(let y=0;y<s;y++){let g=y*(i+1);for(let d=0;d<i;d++){let _=d+g,w=_,S=_+i+1,E=_+i+2,A=_+1;a.push(w,S,A),a.push(S,E,A)}}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ln=class n extends on{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new k,h=new k,m=[],p=[],y=[],g=[];for(let d=0;d<=i;d++){let _=[],w=d/i,S=o+w*a,E=t*Math.cos(S),A=Math.sqrt(t*t-E*E),x=0;d===0&&o===0?x=.5/e:d===i&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let F=b/e,P=s+F*r;f.x=-A*Math.cos(P),f.y=E,f.z=A*Math.sin(P),p.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(F+x,1-w),_.push(c++)}u.push(_)}for(let d=0;d<i;d++)for(let _=0;_<e;_++){let w=u[d][_+1],S=u[d][_],E=u[d+1][_],A=u[d+1][_+1];(d!==0||o>0)&&m.push(w,S,A),(d!==i-1||l<Math.PI)&&m.push(S,E,A)}this.setIndex(m),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var is=class n extends on{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new k,m=new k,p=new k;for(let y=0;y<=i;y++){let g=o+y/i*a;for(let d=0;d<=s;d++){let _=d/s*r;m.x=(t+e*Math.cos(g))*Math.cos(_),m.y=(t+e*Math.cos(g))*Math.sin(_),m.z=e*Math.sin(g),c.push(m.x,m.y,m.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(m,h).normalize(),u.push(p.x,p.y,p.z),f.push(d/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let d=(s+1)*y+g-1,_=(s+1)*(y-1)+g-1,w=(s+1)*(y-1)+g,S=(s+1)*y+g;l.push(d,_,S),l.push(_,w,S)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function cs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ud(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ud(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ln(n){let t={};for(let e=0;e<n.length;e++){let i=cs(n[e]);for(let s in i)t[s]=i[s]}return t}function ud(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function G0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function fu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var of={clone:cs,merge:ln},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Kt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Sa=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ye=class extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ma=class extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ba=class extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ps(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function na(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ki=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends ki{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dc:r=t,a=2*e-i;break;case Uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dc:o=t,l=2*i-e;break;case Uc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,p=(i-e)/(s-e),y=p*p,g=y*p,d=-h*g+2*h*y-h*p,_=(1+h)*g+(-1.5-2*h)*y+(-.5+h)*p+1,w=(-1-m)*g+(1.5+m)*y+.5*p,S=m*g-m*y;for(let E=0;E!==a;++E)r[E]=d*o[u+E]+_*o[c+E]+w*o[l+E]+S*o[f+E];return r}},Ta=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},Aa=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ea=class extends ki{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(i-e)/(s-e),y=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*y+o[l+g]*p;return r}let h=a*2,m=t-1;for(let p=0;p!==a;++p){let y=o[c+p],g=o[l+p],d=m*h+p*2,_=f[d],w=f[d+1],S=t*h+p*2,E=u[S],A=u[S+1],x=X0(i,e,_,E,s);r[p]=af(x,y,w,A,g)}return r}};function af(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function W0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function X0(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=af(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=W0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Tn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ps(e,this.TimeBufferType),this.values=Ps(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ps(t.times,Array),values:Ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),na(t.settings)&&(i.settings={inTangents:Ps(t.settings.inTangents,Array),outTangents:Ps(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case ga:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break;case Lc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return ra;case this.InterpolantFactoryMethodBezier:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;na(this.settings)&&(hd(this.settings.inTangents,t),hd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;na(this.settings)&&(dd(this.settings.inTangents,t),dd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&o0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*i,h=f-i,m=f+i;for(let p=0;p!==i;++p){let y=e[f+p];if(y!==e[h+p]||y!==e[m+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*i,h=o*i;for(let m=0;m!==i;++m)e[h+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,na(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function dd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ga;var zi=class extends Tn{constructor(t,e,i){super(t,e,i)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Cr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Tn{constructor(t,e,i,s){super(t,e,i,s)}};Ca.prototype.ValueTypeName="color";var Ra=class extends Tn{constructor(t,e,i,s){super(t,e,i,s)}};Ra.prototype.ValueTypeName="number";var Ia=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xr=class extends Tn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Tn{constructor(t,e,i){super(t,e,i)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Cr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends Tn{constructor(t,e,i,s){super(t,e,i,s)}};Pa.prototype.ValueTypeName="vector";var La=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let m=c[f],p=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lf=new La,Na=class{constructor(t){this.manager=t!==void 0?t:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Na.DEFAULT_MATERIAL_NAME="__DEFAULT";var qr=class extends ke{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Yr=class extends qr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Pc=new he,fd=new k,pd=new k,Da=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fi,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(fd),pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Pc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Os||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ia=new k,sa=new In,ti=new k,Zr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ia,sa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ia,sa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new k,md=new Kt,gd=new Kt,dn=class extends Zr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,md,gd),e.subVectors(gd,md)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ss=class extends Zr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oc=class extends Da{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jr=class extends qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Oc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ls=-90,Ns=1,Xs=class extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Ls,Ns,t,e);s.layers=this.layers,this.add(s);let r=new dn(Ls,Ns,t,e);r.layers=this.layers,this.add(r);let o=new dn(Ls,Ns,t,e);o.layers=this.layers,this.add(o);let a=new dn(Ls,Ns,t,e);a.layers=this.layers,this.add(a);let l=new dn(Ls,Ns,t,e);l.layers=this.layers,this.add(l);let c=new dn(Ls,Ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,m),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ua=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var pu="\\[\\]\\.:\\/",q0=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",Y0="[^"+pu.replace("\\.","")+"]",Z0=/((?:WC+[\/:])*)/.source.replace("WC",mu),J0=/(WCOD+)?/.source.replace("WCOD",Y0),K0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),$0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),j0=new RegExp("^"+Z0+J0+K0+$0+"$"),Q0=["material","materials","bones","map"],Fc=class{constructor(t,e,i){let s=i||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ce=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(t){let e=j0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Q0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Fc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var KS=new Float32Array(1);var xd=new he,Kr=class{constructor(t,e,i=0,s=1/0){this.ray=new Or(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xd),this}intersectObject(t,e=!0,i=[]){return Bc(t,this,i,e),i.sort(_d),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Bc(t[s],this,i,e);return i.sort(_d),i}};function _d(n,t){return n.distance-t.distance}function Bc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Bc(r[o],t,e,!0)}}var Su=class Su{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Su.prototype.isMatrix2=!0;var kc=Su;function gu(n,t,e,i){let s=tg(i);switch(e){case iu:return n*t;case Wa:return n*t/s.components*s.byteLength;case Xa:return n*t/s.components*s.byteLength;case Hi:return n*t*2/s.components*s.byteLength;case qa:return n*t*2/s.components*s.byteLength;case su:return n*t*3/s.components*s.byteLength;case Jn:return n*t*4/s.components*s.byteLength;case Ya:return n*t*4/s.components*s.byteLength;case Qr:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case $a:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(n,8)*Math.max(t,8)/2;case ja:case Qa:case el:case nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tl:case io:case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _l:case yl:case vl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sl:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*8;case so:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tg(n){switch(n){case vn:case Qc:return{byteLength:1,components:1};case Js:case tu:case Zn:return{byteLength:2,components:1};case Va:case Ha:return{byteLength:2,components:4};case Yn:case Ga:case Dn:return{byteLength:4,components:1};case eu:case nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function If(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ag(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,p)=>m.start-p.start);let h=0;for(let m=1;m<f.length;m++){let p=f[h],y=f[m];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++h,f[h]=y)}f.length=h+1;for(let m=0,p=f.length;m<p;m++){let y=f[m];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
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
#endif`,xg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pg=`#define PI 3.141592653589793
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
} // validated`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
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
}`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,rx=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,ox=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`#ifdef USE_MORPHTARGETS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qx=`float getShadowMask() {
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
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,o_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,p_=`#if DEPTH_PACKING == 3200
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
}`,m_=`#define DISTANCE
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
}`,g_=`#define DISTANCE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`uniform float scale;
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
}`,v_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,w_=`#define LAMBERT
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
}`,T_=`#define MATCAP
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
}`,A_=`#define MATCAP
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
}`,E_=`#define NORMAL
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
}`,C_=`#define NORMAL
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
}`,R_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,P_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,N_=`#define TOON
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
}`,D_=`#define TOON
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
}`,U_=`uniform float size;
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
}`,O_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,B_=`uniform vec3 color;
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
}`,k_=`uniform float rotation;
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
}`,z_=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:ug,alphamap_pars_fragment:hg,alphatest_fragment:dg,alphatest_pars_fragment:fg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:xg,begin_vertex:_g,beginnormal_vertex:yg,bsdfs:vg,iridescence_fragment:Sg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Tg,clipping_planes_vertex:Ag,color_fragment:Eg,color_pars_fragment:Cg,color_pars_vertex:Rg,color_vertex:Ig,common:Pg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Ng,displacementmap_vertex:Dg,emissivemap_fragment:Ug,emissivemap_pars_fragment:Og,colorspace_fragment:Fg,colorspace_pars_fragment:Bg,envmap_fragment:kg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Gg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:Qg,envmap_vertex:Hg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:qg,fog_pars_fragment:Yg,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:Jg,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:$g,lights_pars_begin:jg,lights_toon_fragment:tx,lights_toon_pars_fragment:ex,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:sx,lights_physical_pars_fragment:rx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,lightprobes_pars_fragment:cx,logdepthbuf_fragment:ux,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:fx,map_fragment:px,map_pars_fragment:mx,map_particle_fragment:gx,map_particle_pars_fragment:xx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:yx,morphinstance_vertex:vx,morphcolor_vertex:Sx,morphnormal_vertex:Mx,morphtarget_pars_vertex:bx,morphtarget_vertex:wx,normal_fragment_begin:Tx,normal_fragment_maps:Ax,normal_pars_fragment:Ex,normal_pars_vertex:Cx,normal_vertex:Rx,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Dx,opaque_fragment:Ux,packing:Ox,premultiplied_alpha_fragment:Fx,project_vertex:Bx,dithering_fragment:kx,dithering_pars_fragment:zx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Vx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Wx,shadowmap_vertex:Xx,shadowmask_pars_fragment:qx,skinbase_vertex:Yx,skinning_pars_vertex:Zx,skinning_vertex:Jx,skinnormal_vertex:Kx,specularmap_fragment:$x,specularmap_pars_fragment:jx,tonemapping_fragment:Qx,tonemapping_pars_fragment:t_,transmission_fragment:e_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,worldpos_vertex:o_,background_vert:a_,background_frag:l_,backgroundCube_vert:c_,backgroundCube_frag:u_,cube_vert:h_,cube_frag:d_,depth_vert:f_,depth_frag:p_,distance_vert:m_,distance_frag:g_,equirect_vert:x_,equirect_frag:__,linedashed_vert:y_,linedashed_frag:v_,meshbasic_vert:S_,meshbasic_frag:M_,meshlambert_vert:b_,meshlambert_frag:w_,meshmatcap_vert:T_,meshmatcap_frag:A_,meshnormal_vert:E_,meshnormal_frag:C_,meshphong_vert:R_,meshphong_frag:I_,meshphysical_vert:P_,meshphysical_frag:L_,meshtoon_vert:N_,meshtoon_frag:D_,points_vert:U_,points_frag:O_,shadow_vert:F_,shadow_frag:B_,sprite_vert:k_,sprite_frag:z_},Tt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},oi={basic:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:ln([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:ln([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:ln([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:ln([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:ln([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:ln([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:ln([Tt.common,Tt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:ln([Tt.lights,Tt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};oi.physical={uniforms:ln([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Tl={r:0,b:0,g:0},G_=new he,Pf=new qt;Pf.set(-1,0,0,0,1,0,0,0,1);function V_(n,t,e,i,s,r){let o=new Wt(0),a=s===!0?0:1,l,c,u=null,f=0,h=null;function m(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let S=_.backgroundBlurriness>0;w=t.get(w,S)}return w}function p(_){let w=!1,S=m(_);S===null?g(o,a):S&&S.isColor&&(g(S,1),w=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,w){let S=m(w);S&&S.isCubeTexture?(c===void 0&&(c=new Bt(new Xn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:cs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pf),c.material.toneMapped=re.getTransfer(S.colorSpace)!==pe,(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Bt(new an(2,2),new Nn({name:"BackgroundMaterial",uniforms:cs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=re.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,w){_.getRGB(Tl,fu(n)),e.buffers.color.setClear(Tl.r,Tl.g,Tl.b,w,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:y,dispose:d}}function H_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(B,z,Z,I,H){let K=!1,J=f(B,I,Z,z);r!==J&&(r=J,c(r.object)),K=m(B,I,Z,H),K&&p(B,I,Z,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(B,z,Z,I),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function u(B){return n.deleteVertexArray(B)}function f(B,z,Z,I){let H=I.wireframe===!0,K=i[z.id];K===void 0&&(K={},i[z.id]=K);let J=B.isInstancedMesh===!0?B.id:0,T=K[J];T===void 0&&(T={},K[J]=T);let C=T[Z.id];C===void 0&&(C={},T[Z.id]=C);let L=C[H];return L===void 0&&(L=h(l()),C[H]=L),L}function h(B){let z=[],Z=[],I=[];for(let H=0;H<e;H++)z[H]=0,Z[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:I,object:B,attributes:{},index:null}}function m(B,z,Z,I){let H=r.attributes,K=z.attributes,J=0,T=Z.getAttributes();for(let C in T)if(T[C].location>=0){let G=H[C],Q=K[C];if(Q===void 0&&(C==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),C==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),G===void 0||G.attribute!==Q||Q&&G.data!==Q.data)return!0;J++}return r.attributesNum!==J||r.index!==I}function p(B,z,Z,I){let H={},K=z.attributes,J=0,T=Z.getAttributes();for(let C in T)if(T[C].location>=0){let G=K[C];G===void 0&&(C==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),C==="instanceColor"&&B.instanceColor&&(G=B.instanceColor));let Q={};Q.attribute=G,G&&G.data&&(Q.data=G.data),H[C]=Q,J++}r.attributes=H,r.attributesNum=J,r.index=I}function y(){let B=r.newAttributes;for(let z=0,Z=B.length;z<Z;z++)B[z]=0}function g(B){d(B,0)}function d(B,z){let Z=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;Z[B]=1,I[B]===0&&(n.enableVertexAttribArray(B),I[B]=1),H[B]!==z&&(n.vertexAttribDivisor(B,z),H[B]=z)}function _(){let B=r.newAttributes,z=r.enabledAttributes;for(let Z=0,I=z.length;Z<I;Z++)z[Z]!==B[Z]&&(n.disableVertexAttribArray(Z),z[Z]=0)}function w(B,z,Z,I,H,K,J){J===!0?n.vertexAttribIPointer(B,z,Z,H,K):n.vertexAttribPointer(B,z,Z,I,H,K)}function S(B,z,Z,I){y();let H=I.attributes,K=Z.getAttributes(),J=z.defaultAttributeValues;for(let T in K){let C=K[T];if(C.location>=0){let L=H[T];if(L===void 0&&(T==="instanceMatrix"&&B.instanceMatrix&&(L=B.instanceMatrix),T==="instanceColor"&&B.instanceColor&&(L=B.instanceColor)),L!==void 0){let G=L.normalized,Q=L.itemSize,ut=t.get(L);if(ut===void 0)continue;let V=ut.buffer,rt=ut.type,et=ut.bytesPerElement,dt=rt===n.INT||rt===n.UNSIGNED_INT||L.gpuType===Ga;if(L.isInterleavedBufferAttribute){let bt=L.data,Vt=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,Pe=L.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let It=0;It<C.locationSize;It++)d(C.location+It,bt.meshPerAttribute);B.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let It=0;It<C.locationSize;It++)g(C.location+It);n.bindBuffer(n.ARRAY_BUFFER,V);for(let It=0;It<C.locationSize;It++)w(C.location+It,Q/C.locationSize,rt,G,Vt*et,(Pe+Q/C.locationSize*It)*et,dt)}else{if(L.isInstancedBufferAttribute){for(let bt=0;bt<C.locationSize;bt++)d(C.location+bt,L.meshPerAttribute);B.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let bt=0;bt<C.locationSize;bt++)g(C.location+bt);n.bindBuffer(n.ARRAY_BUFFER,V);for(let bt=0;bt<C.locationSize;bt++)w(C.location+bt,Q/C.locationSize,rt,G,Q*et,Q/C.locationSize*bt*et,dt)}}else if(J!==void 0){let G=J[T];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(C.location,G);break;case 3:n.vertexAttrib3fv(C.location,G);break;case 4:n.vertexAttrib4fv(C.location,G);break;default:n.vertexAttrib1fv(C.location,G)}}}}_()}function E(){F();for(let B in i){let z=i[B];for(let Z in z){let I=z[Z];for(let H in I){let K=I[H];for(let J in K)u(K[J].object),delete K[J];delete I[H]}}delete i[B]}}function A(B){if(i[B.id]===void 0)return;let z=i[B.id];for(let Z in z){let I=z[Z];for(let H in I){let K=I[H];for(let J in K)u(K[J].object),delete K[J];delete I[H]}}delete i[B.id]}function x(B){for(let z in i){let Z=i[z];for(let I in Z){let H=Z[I];if(H[B.id]===void 0)continue;let K=H[B.id];for(let J in K)u(K[J].object),delete K[J];delete H[B.id]}}}function b(B){for(let z in i){let Z=i[z],I=B.isInstancedMesh===!0?B.id:0,H=Z[I];if(H!==void 0){for(let K in H){let J=H[K];for(let T in J)u(J[T].object),delete J[T];delete H[K]}delete Z[I],Object.keys(Z).length===0&&delete i[z]}}}function F(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function W_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function X_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Jn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==vn&&x!==Dn&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:S,maxSamples:E,samples:A}}function q_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Hn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){let p=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let _=r?0:i,w=_*4,S=d.clippingState||null;l.value=S,S=u(p,h,w,m);for(let E=0;E!==w;++E)S[E]=e[E];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,m,p){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let d=m+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let w=0,S=m;w!==y;++w,S+=4)o.copy(f[w]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var lo=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:rs});r.uniforms.tEquirect.value=e;let o=new Bt(s,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=fn),new Xs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},cf=256,Y_=3,Z_=20,Lf=256,Nf=16,J_=3,K_=new k,$_=new Wt,El=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xs(1,10,null),this._boxMesh=new Bt(new Xn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=K_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,m=l.autoClearDepth,p=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor($_));let g=new Xs(i,s,u);return g.position.copy(a),g.update(l,t),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=m,l.autoClearStencil=p,t.background=y,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(cf,hu(t))}_fromTexture(t,e){t.mapping===as||t.mapping===Zs?this._setSize(t.image.length===0?cf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=uf(t,!1,!1),i=Math.log2(t)-Y_;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=uf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===as||t.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=j_(),this._integrationMaterial=Q_());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Nf);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-J_)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Lf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ty());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function uf(n,t,e){return new lo(n,{minFilter:qn,generateMipmaps:t,type:Zn,colorSpace:Rr,depthBuffer:e})}function co(n,t,e){return new Nn({name:n,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:mn,blending:rs,depthTest:!1,depthWrite:!1})}function j_(){return co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Q_(){return co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ty(){return co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Z_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function hf(){return co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function df(){return co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ey(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Ba||m===ka)if(t.has(h)){let p=t.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let y=new lo(p.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let m=h.mapping,p=m===Ba||m===ka,y=m===as||m===Zs;if(p||y){let g=e.get(h),d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new El(n)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let _=h.image;return p&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new El(n)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,m){return m===Ba?h.mapping=as:m===ka&&(h.mapping=Zs),h}function l(h){let m=0,p=6;for(let y=0;y<p;y++)h[y]!==void 0&&m++;return m===p}function c(h){let m=h.target;m.removeEventListener("dispose",c);let p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function ny(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Tr("WebGLRenderer: "+i+" extension not supported."),s}}}function iy(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let y=r.get(p);y&&(t.remove(y),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),e.memory.geometries++),y}function u(p){let y=p.attributes;for(let g in y)t.update(y[g],n.ARRAY_BUFFER)}function f(p){let y=p.index,g=p.attributes.position,d=0;if(g===void 0)return;let _=y!==null?y.array.length:g.array.length/3-1,w=g.count>=65535?Ur:Dr,S=new w(Math.ceil(_/3)*6,1),E=S.array;if(y!==null){let x=y.array;d=y.version;for(let b=0,F=0;b<_;b+=3){let P=x[b+0],B=x[b+1],z=x[b+2];E[F++]=P,E[F++]=B,E[F++]=B,E[F++]=z,E[F++]=z,E[F++]=P}}else{d=g.version;for(let x=0,b=0;x<_;x+=3){let F=x+0,P=x+1,B=x+2;E[b++]=F,E[b++]=P,E[b++]=P,E[b++]=B,E[b++]=B,E[b++]=F}}S.version=d;let A=r.get(p);A&&t.remove(A),r.set(p,S)}function h(p){let y=r.get(p);if(y){let g=p.index;g!==null&&y.version<g.version&&f(p)}else f(p);return r.get(p)}function m(){for(let p in s){let y=s[p].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:m}}function sy(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function c(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,f*o,m),e.update(h,i,m))}function u(f,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,m);let y=0;for(let g=0;g<m;g++)y+=h[g];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ry(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function oy(n,t,e){let i=new WeakMap,s=new Ne;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let F=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;m===!0&&(w=1),p===!0&&(w=2),y===!0&&(w=3);let S=a.attributes.position.count*w,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*E*4*f),x=new Lr(A,S,E,f);x.type=Dn,x.needsUpdate=!0;let b=w*4;for(let P=0;P<f;P++){let B=g[P],z=d[P],Z=_[P],I=S*E*4*P;for(let H=0;H<B.count;H++){let K=H*b;m===!0&&(s.fromBufferAttribute(B,H),A[I+K+0]=s.x,A[I+K+1]=s.y,A[I+K+2]=s.z,A[I+K+3]=0),p===!0&&(s.fromBufferAttribute(z,H),A[I+K+4]=s.x,A[I+K+5]=s.y,A[I+K+6]=s.z,A[I+K+7]=0),y===!0&&(s.fromBufferAttribute(Z,H),A[I+K+8]=s.x,A[I+K+9]=s.y,A[I+K+10]=s.z,A[I+K+11]=Z.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new Kt(S,E)},i.set(a,h),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let p=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function ay(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var ly={[Xc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[Zc]:"ACES_FILMIC_TONE_MAPPING",[Kc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[Jc]:"CUSTOM_TONE_MAPPING"};function cy(n,t,e,i,s,r){let o=new wn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new on;u.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new fe([0,2,0,0,2,0],2));let f=new Sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Bt(u,f),m=new ss(-1,1,1,-1,0,1),p=null,y=null,g=!1,d,_=null,w=[],S=!1;this.setSize=function(E,A){o.setSize(E,A),a!==null&&a.setSize(E,A),l!==null&&l.setSize(E,A);for(let x=0;x<w.length;x++){let b=w[x];b.setSize&&b.setSize(E,A)}},this.setEffects=function(E){w=E,S=w.length>0&&w[0].isRenderPass===!0;let A=o.width,x=o.height;w.length>0&&a===null&&(a=new wn(A,x,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new wn(A,x,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(F=>F.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new _i(A,x),r===!0&&(c.format=vi,c.type=ls)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let F=0;F<w.length;F++){let P=w[F];P.setSize&&P.setSize(A,x),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(E,A){if(g||E.toneMapping===si&&w.length===0)return!1;if(_=A,A!==null){let x=A.width,b=A.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return S===!1&&E.setRenderTarget(o),d=E.toneMapping,E.toneMapping=si,!0},this.hasRenderPass=function(){return S},this.end=function(E,A){E.toneMapping=d,g=!0;let x=o,b=a;for(let F=0;F<w.length;F++){let P=w[F];P.enabled!==!1&&(P.render(E,b,x,A),P.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==E.outputColorSpace||y!==E.toneMapping){p=E.outputColorSpace,y=E.toneMapping,f.defines={},re.getTransfer(p)===pe&&(f.defines.SRGB_TRANSFER="");let F=ly[y];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(h,m),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var Df=new pn,Uf=new _i(1,1),Of=new zr(1),Ff=new Lr,Bf=new ya,kf=new Br,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),xf=new Float32Array(4);function Qs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Rl(n,t){let e=pf[t];e===void 0&&(e=new Int32Array(t),pf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function uy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function hy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function py(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;xf.set(i),n.uniformMatrix2fv(this.addr,!1,xf),Ve(e,i)}}function my(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;gf.set(i),n.uniformMatrix3fv(this.addr,!1,gf),Ve(e,i)}}function gy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;mf.set(i),n.uniformMatrix4fv(this.addr,!1,mf),Ve(e,i)}}function xy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _y(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function Sy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function My(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function by(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function Il(n){return n.version===0&&(n.compareFunction=au,n.needsUpdate=!0),n}function Ty(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Il(Uf):r=Df,e.setTexture2D(t||r,s)}function Ay(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bf,s)}function Ey(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Il(Of):r=kf,e.setTextureCube(t||r,s)}function Cy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ff,s)}function Ry(n){switch(n){case 5126:return uy;case 35664:return hy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return xy;case 35667:case 35671:return _y;case 35668:case 35672:return yy;case 35669:case 35673:return vy;case 5125:return Sy;case 36294:return My;case 36295:return by;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Cy}}function Iy(n,t){n.uniform1fv(this.addr,t)}function Py(n,t){let e=Qs(t,this.size,2);n.uniform2fv(this.addr,e)}function Ly(n,t){let e=Qs(t,this.size,3);n.uniform3fv(this.addr,e)}function Ny(n,t){let e=Qs(t,this.size,4);n.uniform4fv(this.addr,e)}function Dy(n,t){let e=Qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Uy(n,t){let e=Qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Oy(n,t){let e=Qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Fy(n,t){n.uniform1iv(this.addr,t)}function By(n,t){n.uniform2iv(this.addr,t)}function ky(n,t){n.uniform3iv(this.addr,t)}function zy(n,t){n.uniform4iv(this.addr,t)}function Gy(n,t){n.uniform1uiv(this.addr,t)}function Vy(n,t){n.uniform2uiv(this.addr,t)}function Hy(n,t){n.uniform3uiv(this.addr,t)}function Wy(n,t){n.uniform4uiv(this.addr,t)}function Xy(n,t,e){let i=this.cache,s=t.length,r=Rl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Il(Uf):o=Df;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function qy(n,t,e){let i=this.cache,s=t.length,r=Rl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bf,r[o])}function Yy(n,t,e){let i=this.cache,s=t.length,r=Rl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Il(Of):o=kf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Zy(n,t,e){let i=this.cache,s=t.length,r=Rl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ff,r[o])}function Jy(n){switch(n){case 5126:return Iy;case 35664:return Py;case 35665:return Ly;case 35666:return Ny;case 35674:return Dy;case 35675:return Uy;case 35676:return Oy;case 5124:case 35670:return Fy;case 35667:case 35671:return By;case 35668:case 35672:return ky;case 35669:case 35673:return zy;case 5125:return Gy;case 36294:return Vy;case 36295:return Hy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Zy}}var wu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ry(e.type)}},Tu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jy(e.type)}},Au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Mu=/(\w+)(\])?(\[|\.)?/g;function _f(n,t){n.seq.push(t),n.map[t.id]=t}function Ky(n,t,e){let i=n.name,s=i.length;for(Mu.lastIndex=0;;){let r=Mu.exec(i),o=Mu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_f(e,c===void 0?new wu(a,n,t):new Tu(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Au(a),_f(e,f)),e=f}}}var js=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ky(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function yf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var $y=37297,jy=0;function Qy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var vf=new qt;function tv(n){re._getMatrix(vf,re.workingColorSpace,n);let t=`mat3( ${vf.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Ir:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Sf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Qy(n.getShaderSource(t),a)}else return r}function ev(n,t){let e=tv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var nv={[Xc]:"Linear",[qc]:"Reinhard",[Yc]:"Cineon",[Zc]:"ACESFilmic",[Kc]:"AgX",[$c]:"Neutral",[Jc]:"Custom"};function iv(n,t){let e=nv[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Al=new k;function sv(){re.getLuminanceCoefficients(Al);let n=Al.x.toFixed(4),t=Al.y.toFixed(4),e=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function ov(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function av(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ao(n){return n!==""}function Mf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function bf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(n){return n.replace(lv,cv)}function cv(n,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Eu(e)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(n){return n.replace(uv,hv)}function hv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var dv={[$r]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function fv(n){return dv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pv={[Zs]:"ENVMAP_MODE_REFRACTION"};function mv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gv={[Fa]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function xv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gv[n.combine]||"ENVMAP_BLENDING_NONE"}function _v(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=mv(e),f=xv(e),h=rv(e),m=ov(r),p=s.createProgram(),y,g,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),g.length>0&&(g+=`
`)):(y=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),g=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Qt.tonemapping_pars_fragment:"",e.toneMapping!==si?iv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ev("linearToOutputTexel",e.outputColorSpace),sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),o=Eu(o),o=Mf(o,e),o=bf(o,e),a=Eu(a),a=Mf(a,e),a=bf(a,e),o=wf(o),a=wf(a),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=d+y+o,w=d+g+a,S=yf(s,s.VERTEX_SHADER,_),E=yf(s,s.FRAGMENT_SHADER,w);s.attachShader(p,S),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(P){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(S)||"",Z=s.getShaderInfoLog(E)||"",I=B.trim(),H=z.trim(),K=Z.trim(),J=!0,T=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,S,E);else{let C=Sf(s,S,"vertex"),L=Sf(s,E,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+C+`
`+L)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(H===""||K==="")&&(T=!1);T&&(P.diagnostics={runnable:J,programLog:I,vertexShader:{log:H,prefix:y},fragmentShader:{log:K,prefix:g}})}s.deleteShader(S),s.deleteShader(E),x=new js(s,p),b=av(s,p)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,$y)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=E,this}var yv=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ru(t),e.set(t,i)),i}},Ru=class{constructor(t){this.id=yv++,this.code=t,this.usedTimes=0}};function vv(n){return n===Hi||n===io||n===so}function Sv(n,t,e,i,s,r){let o=new zs,a=new Cu,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,F,P,B,z){let Z=P.fog,I=B.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=t.get(x.envMap||H,K),T=h[x.type],C=i.precision;x.precision!==null&&(C=i.getMaxPrecision(x.precision),C!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",C,"instead."));let L=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,G=L!==void 0?L.length:0,Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let ut,V,rt,et;if(T){let wt=oi[T];ut=wt.vertexShader,V=wt.fragmentShader}else{ut=x.vertexShader,V=x.fragmentShader;let wt=a.getVertexShaderStage(x),ve=a.getFragmentShaderStage(x);a.update(x,wt,ve),rt=wt.id,et=ve.id}let dt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,It=!!x.map,le=!!x.matcap,ce=!!J,Jt=ce&&J.isPMREMTexture===!0,Ue=!!x.aoMap,Le=!!x.lightMap,at=!!x.bumpMap&&x.wireframe===!1,W=!!x.normalMap,pt=!!x.displacementMap,yt=!!x.emissiveMap,Ot=!!x.metalnessMap,ne=!!x.roughnessMap,Yt=x.anisotropy>0,U=x.clearcoat>0,ye=x.diffuseRoughness>0,Gt=x.dispersion>0,ae=x.retroreflectivity>0,ht=x.iridescence>0,Se=x.sheen>0,Dt=x.transmission>0,kt=Yt&&!!x.anisotropyMap,R=U&&!!x.clearcoatMap,v=U&&!!x.clearcoatNormalMap,X=U&&!!x.clearcoatRoughnessMap,lt=ye&&!!x.diffuseRoughnessMap,st=ht&&!!x.iridescenceMap,mt=ht&&!!x.iridescenceThicknessMap,St=Se&&!!x.sheenColorMap,tt=Se&&!!x.sheenRoughnessMap,nt=!!x.specularMap,xt=!!x.specularColorMap,N=!!x.specularIntensityMap,it=Dt&&!!x.transmissionMap,j=Dt&&!!x.thicknessMap,_t=!!x.gradientMap,ft=!!x.alphaMap,gt=x.alphaTest>0,Ut=!!x.alphaHash,jt=!!x.extensions,ct=si;x.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ct=n.toneMapping);let Ft=Jt?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,$t={shaderID:T,shaderType:x.type,shaderName:x.name,vertexShader:ut,fragmentShader:V,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:C,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:It,matcap:le,envMap:ce,envMapMode:ce&&J.mapping,envMapPMREM:Jt,envMapMaxLod:Jt?Ft.length-1:null,envMapSize:Jt?Ft[0].width:null,aoMap:Ue,lightMap:Le,bumpMap:at,normalMap:W,displacementMap:pt,emissiveMap:yt,normalMapObjectSpace:W&&x.normalMapType===Wd,normalMapTangentSpace:W&&x.normalMapType===wl,packedNormalMap:W&&x.normalMapType===wl&&vv(x.normalMap.format),metalnessMap:Ot,roughnessMap:ne,anisotropy:Yt,anisotropyMap:kt,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:X,diffuseRoughness:ye,diffuseRoughnessMap:lt,dispersion:Gt,retroreflection:ae,iridescence:ht,iridescenceMap:st,iridescenceThicknessMap:mt,sheen:Se,sheenColorMap:St,sheenRoughnessMap:tt,specularMap:nt,specularColorMap:xt,specularIntensityMap:N,transmission:Dt,transmissionMap:it,thicknessMap:j,gradientMap:_t,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:gt,alphaHash:Ut,combine:x.combine,mapUv:It&&m(x.map.channel),aoMapUv:Ue&&m(x.aoMap.channel),lightMapUv:Le&&m(x.lightMap.channel),bumpMapUv:at&&m(x.bumpMap.channel),normalMapUv:W&&m(x.normalMap.channel),displacementMapUv:pt&&m(x.displacementMap.channel),emissiveMapUv:yt&&m(x.emissiveMap.channel),metalnessMapUv:Ot&&m(x.metalnessMap.channel),roughnessMapUv:ne&&m(x.roughnessMap.channel),anisotropyMapUv:kt&&m(x.anisotropyMap.channel),clearcoatMapUv:R&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:lt&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:st&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:St&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:tt&&m(x.sheenRoughnessMap.channel),specularMapUv:nt&&m(x.specularMap.channel),specularColorMapUv:xt&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:it&&m(x.transmissionMap.channel),thicknessMapUv:j&&m(x.thicknessMap.channel),alphaMapUv:ft&&m(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(W||Yt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!I.attributes.uv&&(It||ft),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&W===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Q,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:It&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===pe,decodeVideoTextureEmissive:yt&&x.emissiveMap.isVideoTexture===!0&&re.getTransfer(x.emissiveMap.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ze,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:jt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&x.extensions.multiDraw===!0||Pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)b.push(F),b.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(g(b,x),d(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function d(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let b=h[x.type],F;if(b){let P=oi[b];F=of.clone(P.uniforms)}else F=x.uniforms;return F}function w(x,b){let F=u.get(b);return F!==void 0?++F.usedTimes:(F=new _v(n,b,x,s),c.push(F),u.set(b,F)),F}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function A(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:_,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:A}}function Mv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function bv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Af(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ef(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,p,y,g,d){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:m,material:p,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:d},n[t]=_):(_.id=h.id,_.object=h,_.geometry=m,_.material=p,_.materialVariant=o(h),_.groupOrder=y,_.renderOrder=h.renderOrder,_.z=g,_.group=d),t++,_}function l(h,m,p,y,g,d,_){_.reversedDepth===!0&&(g=-g);let w=a(h,m,p,y,g,d);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(h,m,p,y,g,d){let _=a(h,m,p,y,g,d);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function u(h,m){e.length>1&&e.sort(h||bv),i.length>1&&i.sort(m||Af),s.length>1&&s.sort(m||Af)}function f(){for(let h=t,m=n.length;h<m;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function wv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ef,n.set(i,[o])):s>=r.length?(o=new Ef,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Tv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Wt};break;case"SpotLight":e={position:new k,direction:new k,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function Av(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ev=0;function Cv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rv(n){let t=new Tv,e=Av(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new he,o=new he;function a(c){let u=0,f=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,p=0,y=0,g=0,d=0,_=0,w=0,S=0,E=0,A=0,x=0,b=0,F=0,P=0;c.sort(Cv);for(let z=0,Z=c.length;z<Z;z++){let I=c[z],H=I.color,K=I.intensity,J=I.distance,T=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hi?T=I.shadow.map.texture:T=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=H.r*K,f+=H.g*K,h+=H.b*K;else if(I.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(I.sh.coefficients[C],K);P++}else if(I.isSunLight){let C=t.get(I);if(C.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let L=I.shadow,G=e.get(I);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),i.sunShadow[p]=G,i.sunShadowMap[p]=T;let Q=L.getViewportCount();for(let ut=0;ut<Q;ut++)i.sunShadowMatrix[y+ut]=L.getMatrix(ut),i.sunShadowCascade[y+ut]=L._cascadeData[ut];y+=Q,p++}i.sun[m]=C,m++}else if(I.isDirectionalLight){let C=t.get(I);if(C.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let L=I.shadow,G=e.get(I);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,i.directionalShadow[g]=G,i.directionalShadowMap[g]=T,i.directionalShadowMatrix[g]=I.shadow.matrix,E++}i.directional[g]=C,g++}else if(I.isSpotLight){let C=t.get(I);C.position.setFromMatrixPosition(I.matrixWorld),C.color.copy(H).multiplyScalar(K),C.distance=J,C.coneCos=Math.cos(I.angle),C.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),C.decay=I.decay,i.spot[_]=C;let L=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,L.updateMatrices(I),I.castShadow&&F++),i.spotLightMatrix[_]=L.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=T,x++}_++}else if(I.isRectAreaLight){let C=t.get(I);C.color.copy(H).multiplyScalar(K),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=C,w++}else if(I.isPointLight){let C=t.get(I);if(C.color.copy(I.color).multiplyScalar(I.intensity),C.distance=I.distance,C.decay=I.decay,I.castShadow){let L=I.shadow,G=e.get(I);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,G.shadowCameraNear=L.camera.near,G.shadowCameraFar=L.camera.far,i.pointShadow[d]=G,i.pointShadowMap[d]=T,i.pointShadowMatrix[d]=I.shadow.matrix,A++}i.point[d]=C,d++}else if(I.isHemisphereLight){let C=t.get(I);C.skyColor.copy(I.color).multiplyScalar(K),C.groundColor.copy(I.groundColor).multiplyScalar(K),i.hemi[S]=C,S++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let B=i.hash;(B.sunLength!==m||B.directionalLength!==g||B.pointLength!==d||B.spotLength!==_||B.rectAreaLength!==w||B.hemiLength!==S||B.numSunShadows!==p||B.numDirectionalShadows!==E||B.numPointShadows!==A||B.numSpotShadows!==x||B.numSpotMaps!==b||B.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=g,i.spot.length=_,i.rectArea.length=w,i.point.length=d,i.hemi.length=S,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-F,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=P,B.sunLength=m,B.directionalLength=g,B.pointLength=d,B.spotLength=_,B.rectAreaLength=w,B.hemiLength=S,B.numSunShadows=p,B.numDirectionalShadows=E,B.numPointShadows=A,B.numSpotShadows=x,B.numSpotMaps=b,B.numLightProbes=P,i.version=Ev++)}function l(c,u){let f=0,h=0,m=0,p=0,y=0,g=0,d=u.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){let S=c[_];if(S.isSunLight){let E=i.sun[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),f++}else if(S.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),h++}else if(S.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),p++}else if(S.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(S.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),g++}}}return{setup:a,setupView:l,state:i}}function Cf(n){let t=new Rv(n),e=[],i=[],s=[];function r(f){u.camera=f,e.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):e.push(f)}function a(f){i.push(f)}function l(){t.setup(e),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Iv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Cf(n),t.set(s,[a])):r>=o.length?(a=new Cf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
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
}`,Nv=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Dv=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Rf=new he,oo=new k,bu=new k;function Uv(n,t,e){let i=new Fi,s=new Kt,r=new Kt,o=new Ne,a=new Ma,l=new ba,c={},u=e.maxTextureSize,f={[Vi]:mn,[mn]:Vi,[Ze]:Ze},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let p=new on;p.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let d=this.type;this.render=function(A,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Sd&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let F=n.getRenderTarget(),P=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),z=n.state;z.setBlending(rs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Z=d!==this.type;Z&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=A.length;I<H;I++){let K=A[I],J=K.shadow;if(J===void 0){zt("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let T=J.getFrameExtents();s.multiply(T),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/T.x),s.x=r.x*T.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/T.y),s.y=r.y*T.y,J.mapSize.y=r.y));let C=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=C,J.map===null||Z===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===qs){if(K.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new wn(s.x,s.y,{format:Hi,type:Zn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new _i(s.x,s.y,Dn),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=xi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=qe,J.map.depthTexture.magFilter=qe}else K.isPointLight?(J.map=new lo(s.x),J.map.depthTexture=new zr(s.x,Yn)):(J.map=new wn(s.x,s.y),J.map.depthTexture=new _i(s.x,s.y,Yn)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=xi,this.type===$r?(J.map.depthTexture.compareFunction=C?ou:ru,J.map.depthTexture.minFilter=fn,J.map.depthTexture.magFilter=fn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=qe,J.map.depthTexture.magFilter=qe);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let L=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,b);let G=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:b.layers;for(let Q=0;Q<L;Q++){let ut=J.getCamera(Q);if(K.isPointLight){let V=J.camera,rt=J.matrix,et=K.distance||V.far;et!==V.far&&(V.far=et,V.updateProjectionMatrix()),oo.setFromMatrixPosition(K.matrixWorld),V.position.copy(oo),bu.copy(V.position),bu.add(Nv[Q]),V.up.copy(Dv[Q]),V.lookAt(bu),V.updateMatrixWorld(),rt.makeTranslation(-oo.x,-oo.y,-oo.z),Rf.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Rf,V.coordinateSystem,V.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,Q),n.clear();else{Q===0&&(n.setRenderTarget(J.map),n.clear());let V=J.getViewport(Q);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),z.viewport(o)}i=J.getFrustum(Q),S(x,b,ut,K,G,this.type)}J.isPointLightShadow!==!0&&this.type===qs&&_(J,b),J.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(F,P,B)};function _(A,x){let b=t.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new wn(s.x,s.y,{format:Hi,type:Zn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(x,null,b,h,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(x,null,b,m,y,null)}function w(A,x,b,F){let P=null,B=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)P=B;else if(P=b.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=P.uuid,Z=x.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let H=I[Z];H===void 0&&(H=P.clone(),I[Z]=H,x.addEventListener("dispose",E)),P=H}if(P.visible=x.visible,P.wireframe=x.wireframe,F===qs?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:f[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=n.properties.get(P);z.light=b}return P}function S(A,x,b,F,P,B){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===qs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let I=t.update(A),H=A.material;if(Array.isArray(H)){let K=I.groups;for(let J=0,T=K.length;J<T;J++){let C=K[J],L=H[C.materialIndex];if(L&&L.visible){let G=w(A,L,F,B);A.onBeforeShadow(n,A,x,b,I,G,C),n.renderBufferDirect(b,null,I,G,A,C),A.onAfterShadow(n,A,x,b,I,G,C)}}}else if(H.visible){let K=w(A,H,F,B);A.onBeforeShadow(n,A,x,b,I,K,null),n.renderBufferDirect(b,null,I,K,A,null),A.onAfterShadow(n,A,x,b,I,K,null)}}let Z=A.children;for(let I=0,H=Z.length;I<H;I++)S(Z[I],x,b,F,P,B)}function E(A){A.target.removeEventListener("dispose",E);for(let b in c){let F=c[b],P=A.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}}function Ov(n,t){function e(){let N=!1,it=new Ne,j=null,_t=new Ne(0,0,0,0);return{setMask:function(ft){j!==ft&&!N&&(n.colorMask(ft,ft,ft,ft),j=ft)},setLocked:function(ft){N=ft},setClear:function(ft,gt,Ut,jt,ct){ct===!0&&(ft*=jt,gt*=jt,Ut*=jt),it.set(ft,gt,Ut,jt),_t.equals(it)===!1&&(n.clearColor(ft,gt,Ut,jt),_t.copy(it))},reset:function(){N=!1,j=null,_t.set(-1,0,0,0)}}}function i(){let N=!1,it=!1,j=null,_t=null,ft=null;return{setReversed:function(gt){if(it!==gt){let Ut=t.get("EXT_clip_control");gt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),it=gt;let jt=ft;ft=null,this.setClear(jt)}},getReversed:function(){return it},setTest:function(gt){gt?bt(n.DEPTH_TEST):Vt(n.DEPTH_TEST)},setMask:function(gt){j!==gt&&!N&&(n.depthMask(gt),j=gt)},setFunc:function(gt){if(it&&(gt=ef[gt]),_t!==gt){switch(gt){case aa:n.depthFunc(n.NEVER);break;case la:n.depthFunc(n.ALWAYS);break;case ca:n.depthFunc(n.LESS);break;case Us:n.depthFunc(n.LEQUAL);break;case ua:n.depthFunc(n.EQUAL);break;case ha:n.depthFunc(n.GEQUAL);break;case da:n.depthFunc(n.GREATER);break;case fa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=gt}},setLocked:function(gt){N=gt},setClear:function(gt){ft!==gt&&(ft=gt,it&&(gt=1-gt),n.clearDepth(gt))},reset:function(){N=!1,j=null,_t=null,ft=null,it=!1}}}function s(){let N=!1,it=null,j=null,_t=null,ft=null,gt=null,Ut=null,jt=null,ct=null;return{setTest:function(Ft){N||(Ft?bt(n.STENCIL_TEST):Vt(n.STENCIL_TEST))},setMask:function(Ft){it!==Ft&&!N&&(n.stencilMask(Ft),it=Ft)},setFunc:function(Ft,$t,wt){(j!==Ft||_t!==$t||ft!==wt)&&(n.stencilFunc(Ft,$t,wt),j=Ft,_t=$t,ft=wt)},setOp:function(Ft,$t,wt){(gt!==Ft||Ut!==$t||jt!==wt)&&(n.stencilOp(Ft,$t,wt),gt=Ft,Ut=$t,jt=wt)},setLocked:function(Ft){N=Ft},setClear:function(Ft){ct!==Ft&&(n.clearStencil(Ft),ct=Ft)},reset:function(){N=!1,it=null,j=null,_t=null,ft=null,gt=null,Ut=null,jt=null,ct=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,u={},f={},h={},m=new WeakMap,p=[],y=null,g=!1,d=null,_=null,w=null,S=null,E=null,A=null,x=null,b=new Wt(0,0,0),F=0,P=!1,B=null,z=null,Z=null,I=null,H=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,T=0,C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(C)[1]),J=T>=1):C.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),J=T>=2);let L=null,G={},Q=n.getParameter(n.SCISSOR_BOX),ut=n.getParameter(n.VIEWPORT),V=new Ne().fromArray(Q),rt=new Ne().fromArray(ut);function et(N,it,j,_t){let ft=new Uint8Array(4),gt=n.createTexture();n.bindTexture(N,gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<j;Ut++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(it+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return gt}let dt={};dt[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),bt(n.DEPTH_TEST),o.setFunc(Us),at(!1),W(zc),bt(n.CULL_FACE),Ue(rs);function bt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Vt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Pe(N,it){return h[N]!==it?(n.bindFramebuffer(N,it),h[N]=it,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=it),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=it),!0):!1}function It(N,it){let j=p,_t=!1;if(N){j=m.get(it),j===void 0&&(j=[],m.set(it,j));let ft=N.textures;if(j.length!==ft.length||j[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Ut=ft.length;gt<Ut;gt++)j[gt]=n.COLOR_ATTACHMENT0+gt;j.length=ft.length,_t=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,_t=!0);_t&&n.drawBuffers(j)}function le(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let ce={[os]:n.FUNC_ADD,[bd]:n.FUNC_SUBTRACT,[wd]:n.FUNC_REVERSE_SUBTRACT};ce[Td]=n.MIN,ce[Ad]=n.MAX;let Jt={[Ed]:n.ZERO,[Cd]:n.ONE,[Rd]:n.SRC_COLOR,[Hc]:n.SRC_ALPHA,[Ud]:n.SRC_ALPHA_SATURATE,[Nd]:n.DST_COLOR,[Pd]:n.DST_ALPHA,[Id]:n.ONE_MINUS_SRC_COLOR,[Wc]:n.ONE_MINUS_SRC_ALPHA,[Dd]:n.ONE_MINUS_DST_COLOR,[Ld]:n.ONE_MINUS_DST_ALPHA,[Od]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[Bd]:n.CONSTANT_ALPHA,[kd]:n.ONE_MINUS_CONSTANT_ALPHA};function Ue(N,it,j,_t,ft,gt,Ut,jt,ct,Ft){if(N===rs){g===!0&&(Vt(n.BLEND),g=!1);return}if(g===!1&&(bt(n.BLEND),g=!0),N!==Md){if(N!==d||Ft!==P){if((_!==os||E!==os)&&(n.blendEquation(n.FUNC_ADD),_=os,E=os),Ft)switch(N){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yi:n.blendFunc(n.ONE,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",N);break}else switch(N){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",N);break}w=null,S=null,A=null,x=null,b.set(0,0,0),F=0,d=N,P=Ft}return}ft=ft||it,gt=gt||j,Ut=Ut||_t,(it!==_||ft!==E)&&(n.blendEquationSeparate(ce[it],ce[ft]),_=it,E=ft),(j!==w||_t!==S||gt!==A||Ut!==x)&&(n.blendFuncSeparate(Jt[j],Jt[_t],Jt[gt],Jt[Ut]),w=j,S=_t,A=gt,x=Ut),(jt.equals(b)===!1||ct!==F)&&(n.blendColor(jt.r,jt.g,jt.b,ct),b.copy(jt),F=ct),d=N,P=!1}function Le(N,it){N.side===Ze?Vt(n.CULL_FACE):bt(n.CULL_FACE);let j=N.side===mn;it&&(j=!j),at(j),N.blending===Ys&&N.transparent===!1?Ue(rs):Ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let _t=N.stencilWrite;a.setTest(_t),_t&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),yt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?bt(n.SAMPLE_ALPHA_TO_COVERAGE):Vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(N){B!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),B=N)}function W(N){N!==yd?(bt(n.CULL_FACE),N!==z&&(N===zc?n.cullFace(n.BACK):N===vd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Vt(n.CULL_FACE),z=N}function pt(N){N!==Z&&(J&&n.lineWidth(N),Z=N)}function yt(N,it,j){N?(bt(n.POLYGON_OFFSET_FILL),(I!==it||H!==j)&&(I=it,H=j,o.getReversed()&&(it=-it,j=-j),n.polygonOffset(it,j))):Vt(n.POLYGON_OFFSET_FILL)}function Ot(N){N?bt(n.SCISSOR_TEST):Vt(n.SCISSOR_TEST)}function ne(N){N===void 0&&(N=n.TEXTURE0+K-1),L!==N&&(n.activeTexture(N),L=N)}function Yt(N,it,j){j===void 0&&(L===null?j=n.TEXTURE0+K-1:j=L);let _t=G[j];_t===void 0&&(_t={type:void 0,texture:void 0},G[j]=_t),(_t.type!==N||_t.texture!==it)&&(L!==j&&(n.activeTexture(j),L=j),n.bindTexture(N,it||dt[N]),_t.type=N,_t.texture=it)}function U(){let N=G[L];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ye(){try{n.compressedTexImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function Gt(){try{n.compressedTexImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function ae(){try{n.texSubImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function ht(){try{n.texSubImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function Se(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function Dt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function kt(){try{n.texStorage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function R(){try{n.texStorage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function v(){try{n.texImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function X(){try{n.texImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function lt(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function st(N,it){f[N]!==it&&(n.pixelStorei(N,it),f[N]=it)}function mt(N){V.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),V.copy(N))}function St(N){rt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),rt.copy(N))}function tt(N,it){let j=c.get(it);j===void 0&&(j=new WeakMap,c.set(it,j));let _t=j.get(N);_t===void 0&&(_t=n.getUniformBlockIndex(it,N.name),n.uniformBlockBinding(it,_t,_t),j.set(N,_t))}function nt(N,it,j){let ft=c.get(it).get(N);l[ft]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,ft,j),l[ft]=j)}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},L=null,G={},h={},l={},m=new WeakMap,p=[],y=null,g=!1,d=null,_=null,w=null,S=null,E=null,A=null,x=null,b=new Wt(0,0,0),F=0,P=!1,B=null,z=null,Z=null,I=null,H=null,V.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:bt,disable:Vt,bindFramebuffer:Pe,drawBuffers:It,useProgram:le,setBlending:Ue,setMaterial:Le,setFlipSided:at,setCullFace:W,setLineWidth:pt,setPolygonOffset:yt,setScissorTest:Ot,activeTexture:ne,bindTexture:Yt,unbindTexture:U,compressedTexImage2D:ye,compressedTexImage3D:Gt,texImage2D:v,texImage3D:X,pixelStorei:st,getParameter:lt,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:kt,texStorage3D:R,texSubImage2D:ae,texSubImage3D:ht,compressedTexSubImage2D:Se,compressedTexSubImage3D:Dt,scissor:mt,viewport:St,reset:xt}}function Fv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,u=new WeakMap,f=new Set,h,m=new WeakMap,p=new Set,y=new FinalizationRegistry(R=>p.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,v){return g?new OffscreenCanvas(R,v):Pr("canvas")}function _(R,v,X){let lt=1,st=kt(R);if((st.width>X||st.height>X)&&(lt=X/Math.max(st.width,st.height)),lt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let mt=Math.floor(lt*st.width),St=Math.floor(lt*st.height);h===void 0&&(h=d(mt,St));let tt=v?d(mt,St):h;return tt.width=mt,tt.height=St,tt.getContext("2d").drawImage(R,0,0,mt,St),zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+mt+"x"+St+")."),tt}else return"data"in R&&zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function w(R){return R.generateMipmaps}function S(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(R,v,X,lt,st,mt=!1){if(R!==null){if(n[R]!==void 0)return n[R];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let St;lt&&(St=t.get("EXT_texture_norm16"),St||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=v;if(v===n.RED&&(X===n.FLOAT&&(tt=n.R32F),X===n.HALF_FLOAT&&(tt=n.R16F),X===n.UNSIGNED_BYTE&&(tt=n.R8),X===n.UNSIGNED_SHORT&&St&&(tt=St.R16_EXT),X===n.SHORT&&St&&(tt=St.R16_SNORM_EXT)),v===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.R8UI),X===n.UNSIGNED_SHORT&&(tt=n.R16UI),X===n.UNSIGNED_INT&&(tt=n.R32UI),X===n.BYTE&&(tt=n.R8I),X===n.SHORT&&(tt=n.R16I),X===n.INT&&(tt=n.R32I)),v===n.RG&&(X===n.FLOAT&&(tt=n.RG32F),X===n.HALF_FLOAT&&(tt=n.RG16F),X===n.UNSIGNED_BYTE&&(tt=n.RG8),X===n.UNSIGNED_SHORT&&St&&(tt=St.RG16_EXT),X===n.SHORT&&St&&(tt=St.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RG8UI),X===n.UNSIGNED_SHORT&&(tt=n.RG16UI),X===n.UNSIGNED_INT&&(tt=n.RG32UI),X===n.BYTE&&(tt=n.RG8I),X===n.SHORT&&(tt=n.RG16I),X===n.INT&&(tt=n.RG32I)),v===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),X===n.UNSIGNED_INT&&(tt=n.RGB32UI),X===n.BYTE&&(tt=n.RGB8I),X===n.SHORT&&(tt=n.RGB16I),X===n.INT&&(tt=n.RGB32I)),v===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),X===n.UNSIGNED_INT&&(tt=n.RGBA32UI),X===n.BYTE&&(tt=n.RGBA8I),X===n.SHORT&&(tt=n.RGBA16I),X===n.INT&&(tt=n.RGBA32I)),v===n.RGB&&(X===n.UNSIGNED_SHORT&&St&&(tt=St.RGB16_EXT),X===n.SHORT&&St&&(tt=St.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),v===n.RGBA){let nt=mt?Ir:re.getTransfer(st);X===n.FLOAT&&(tt=n.RGBA32F),X===n.HALF_FLOAT&&(tt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(tt=nt===pe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&St&&(tt=St.RGBA16_EXT),X===n.SHORT&&St&&(tt=St.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(R,v){let X;return R?v===null||v===Yn||v===ls?X=n.DEPTH24_STENCIL8:v===Dn?X=n.DEPTH32F_STENCIL8:v===Js&&(X=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Yn||v===ls?X=n.DEPTH_COMPONENT24:v===Dn?X=n.DEPTH_COMPONENT32F:v===Js&&(X=n.DEPTH_COMPONENT16),X}function b(R,v){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==qe&&R.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function F(R){let v=new WeakRef(R);i.get(R).__ref=v,p.add(v),y.register(R,v,v)}function P(R){let v=i.get(R).__ref;v!==void 0&&(p.delete(v),y.unregister(v))}function B(R){Z(R.target)}function z(R){I(R.target)}function Z(R){R.removeEventListener("dispose",B),P(R),K(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function I(R){R.removeEventListener("dispose",z),P(R),T(R)}function H(){for(let R of p){let v=R.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):Z(v))}p.clear(),f.clear()}function K(R){let v=i.get(R);if(v.__webglInit===void 0)return;let X=R.source,lt=m.get(X);if(lt){let st=lt[v.__cacheKey];st.usedTimes--,st.usedTimes===0&&J(R),Object.keys(lt).length===0&&m.delete(X)}i.remove(R)}function J(R){let v=i.get(R);n.deleteTexture(v.__webglTexture);let X=R.source,lt=m.get(X);delete lt[v.__cacheKey],o.memory.textures--}function T(R){let v=i.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();let X=R.depthTexture;if(X&&X.renderTarget===R&&Z(X),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(v.__webglFramebuffer[st]))for(let mt=0;mt<v.__webglFramebuffer[st].length;mt++)n.deleteFramebuffer(v.__webglFramebuffer[st][mt]);else n.deleteFramebuffer(v.__webglFramebuffer[st]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[st])}else{if(Array.isArray(v.__webglFramebuffer))for(let st=0;st<v.__webglFramebuffer.length;st++)n.deleteFramebuffer(v.__webglFramebuffer[st]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let st=0;st<v.__webglColorRenderbuffer.length;st++)v.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[st]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let lt=R.textures;for(let st=0,mt=lt.length;st<mt;st++){let St=i.get(lt[st]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),o.memory.textures--),i.remove(lt[st])}i.remove(R)}let C=0;function L(){C=0}function G(){return C}function Q(R){C=R}function ut(){let R=C;return R>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function V(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function rt(R,v){let X=i.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let lt=R.image;if(lt===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(X,R,v);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+v)}function et(R,v){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){Le(X,R,v);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+v)}function dt(R,v){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){Le(X,R,v);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+v)}function bt(R,v){let X=i.get(R);if(R.version>0&&X.__version!==R.version){at(X,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+v)}let Vt={[pa]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},Pe={[qe]:n.NEAREST,[Vd]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[za]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},It={[qd]:n.NEVER,[au]:n.ALWAYS,[Yd]:n.LESS,[ru]:n.LEQUAL,[Zd]:n.EQUAL,[ou]:n.GEQUAL,[Jd]:n.GREATER,[Kd]:n.NOTEQUAL};function le(R,v){if(v.type===Dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===za||v.magFilter===jr||v.magFilter===qn||v.minFilter===fn||v.minFilter===za||v.minFilter===jr||v.minFilter===qn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Vt[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Vt[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Vt[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Pe[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Pe[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,It[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==jr&&v.minFilter!==qn||v.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ce(R,v){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",B),F(v));let lt=v.source,st=m.get(lt);st===void 0&&(st={},m.set(lt,st));let mt=V(v);if(mt!==R.__cacheKey){st[mt]===void 0&&(st[mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),st[mt].usedTimes++;let St=st[R.__cacheKey];St!==void 0&&(st[R.__cacheKey].usedTimes--,St.usedTimes===0&&J(v)),R.__cacheKey=mt,R.__webglTexture=st[mt].texture}return X}function Jt(R,v,X){return Math.floor(Math.floor(R/X)/v)}function Ue(R,v,X,lt){let mt=R.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,X,lt,v.data);else{mt.sort((N,it)=>N.start-it.start);let St=0;for(let N=1;N<mt.length;N++){let it=mt[St],j=mt[N],_t=it.start+it.count,ft=Jt(j.start,v.width,4),gt=Jt(it.start,v.width,4);j.start<=_t+1&&ft===gt&&Jt(j.start+j.count-1,v.width,4)===ft?it.count=Math.max(it.count,j.start+j.count-it.start):(++St,mt[St]=j)}mt.length=St+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),nt=e.getParameter(n.UNPACK_SKIP_PIXELS),xt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let N=0,it=mt.length;N<it;N++){let j=mt[N],_t=Math.floor(j.start/4),ft=Math.ceil(j.count/4),gt=_t%v.width,Ut=Math.floor(_t/v.width),jt=ft,ct=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ut),e.texSubImage2D(n.TEXTURE_2D,0,gt,Ut,jt,ct,X,lt,v.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function Le(R,v,X){let lt=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(lt=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(lt=n.TEXTURE_3D);let st=ce(R,v),mt=v.source;e.bindTexture(lt,R.__webglTexture,n.TEXTURE0+X);let St=i.get(mt);if(mt.version!==St.__version||st===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ct=re.getPrimaries(re.workingColorSpace),Ft=v.colorSpace===Si?null:re.getPrimaries(v.colorSpace),$t=v.colorSpace===Si||ct===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let nt=_(v.image,!1,s.maxTextureSize);nt=Dt(v,nt);let xt=r.convert(v.format,v.colorSpace),N=r.convert(v.type),it=A(v.internalFormat,xt,N,v.normalized,v.colorSpace,v.isVideoTexture);le(lt,v);let j,_t=v.mipmaps,ft=v.isVideoTexture!==!0,gt=St.__version===void 0||st===!0,Ut=mt.dataReady,jt=b(v,nt);if(v.isDepthTexture)it=x(v.format===vi,v.type),gt&&(ft?e.texStorage2D(n.TEXTURE_2D,1,it,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,it,nt.width,nt.height,0,xt,N,null));else if(v.isDataTexture)if(_t.length>0){ft&&gt&&e.texStorage2D(n.TEXTURE_2D,jt,it,_t[0].width,_t[0].height);for(let ct=0,Ft=_t.length;ct<Ft;ct++)j=_t[ct],ft?Ut&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,j.width,j.height,xt,N,j.data):e.texImage2D(n.TEXTURE_2D,ct,it,j.width,j.height,0,xt,N,j.data);v.generateMipmaps=!1}else ft?(gt&&e.texStorage2D(n.TEXTURE_2D,jt,it,nt.width,nt.height),Ut&&Ue(v,nt,xt,N)):e.texImage2D(n.TEXTURE_2D,0,it,nt.width,nt.height,0,xt,N,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ft&&gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,jt,it,_t[0].width,_t[0].height,nt.depth);for(let ct=0,Ft=_t.length;ct<Ft;ct++)if(j=_t[ct],v.format!==Jn)if(xt!==null)if(ft){if(Ut)if(v.layerUpdates.size>0){let $t=gu(j.width,j.height,v.format,v.type);for(let wt of v.layerUpdates){let ve=j.data.subarray(wt*$t/j.data.BYTES_PER_ELEMENT,(wt+1)*$t/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,wt,j.width,j.height,1,xt,ve)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,j.width,j.height,nt.depth,xt,j.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,it,j.width,j.height,nt.depth,0,j.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Ut&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,j.width,j.height,nt.depth,xt,N,j.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,it,j.width,j.height,nt.depth,0,xt,N,j.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ft&&gt&&e.texStorage2D(n.TEXTURE_2D,jt,it,_t[0].width,_t[0].height);for(let ct=0,Ft=_t.length;ct<Ft;ct++)j=_t[ct],v.format!==Jn?xt!==null?ft?Ut&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,j.width,j.height,xt,j.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,it,j.width,j.height,0,j.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Ut&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,j.width,j.height,xt,N,j.data):e.texImage2D(n.TEXTURE_2D,ct,it,j.width,j.height,0,xt,N,j.data)}else if(v.isDataArrayTexture)if(ft){if(gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,jt,it,nt.width,nt.height,nt.depth),Ut)if(v.layerUpdates.size>0){let ct=gu(nt.width,nt.height,v.format,v.type);for(let Ft of v.layerUpdates){let $t=nt.data.subarray(Ft*ct/nt.data.BYTES_PER_ELEMENT,(Ft+1)*ct/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ft,nt.width,nt.height,1,xt,N,$t)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,N,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,it,nt.width,nt.height,nt.depth,0,xt,N,nt.data);else if(v.isData3DTexture)ft?(gt&&e.texStorage3D(n.TEXTURE_3D,jt,it,nt.width,nt.height,nt.depth),Ut&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,N,nt.data)):e.texImage3D(n.TEXTURE_3D,0,it,nt.width,nt.height,nt.depth,0,xt,N,nt.data);else if(v.isFramebufferTexture){if(gt)if(ft)e.texStorage2D(n.TEXTURE_2D,jt,it,nt.width,nt.height);else{let ct=nt.width,Ft=nt.height;for(let $t=0;$t<jt;$t++)e.texImage2D(n.TEXTURE_2D,$t,it,ct,Ft,0,xt,N,null),ct>>=1,Ft>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ct=n.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),nt.parentNode!==ct){ct.appendChild(nt),f.add(v),ct.onpaint=Ft=>{let $t=Ft.changedElements;for(let wt of f)$t.includes(wt.image)&&(wt.needsUpdate=!0)},ct.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,nt);else{let $t=n.RGBA,wt=n.RGBA,ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,$t,wt,ve,nt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(_t.length>0){if(ft&&gt){let ct=kt(_t[0]);e.texStorage2D(n.TEXTURE_2D,jt,it,ct.width,ct.height)}for(let ct=0,Ft=_t.length;ct<Ft;ct++)j=_t[ct],ft?Ut&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,xt,N,j):e.texImage2D(n.TEXTURE_2D,ct,it,xt,N,j);v.generateMipmaps=!1}else if(ft){if(gt){let ct=kt(nt);e.texStorage2D(n.TEXTURE_2D,jt,it,ct.width,ct.height)}Ut&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,N,nt)}else e.texImage2D(n.TEXTURE_2D,0,it,xt,N,nt);w(v)&&v.mipmapsAutoUpdate===!0&&S(lt),St.__version=mt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function at(R,v,X){if(v.image.length!==6)return;let lt=ce(R,v),st=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);let mt=i.get(st);if(st.version!==mt.__version||lt===!0){e.activeTexture(n.TEXTURE0+X);let St=re.getPrimaries(re.workingColorSpace),tt=v.colorSpace===Si?null:re.getPrimaries(v.colorSpace),nt=v.colorSpace===Si||St===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let xt=v.isCompressedTexture||v.image[0].isCompressedTexture,N=v.image[0]&&v.image[0].isDataTexture,it=[];for(let wt=0;wt<6;wt++)!xt&&!N?it[wt]=_(v.image[wt],!0,s.maxCubemapSize):it[wt]=N?v.image[wt].image:v.image[wt],it[wt]=Dt(v,it[wt]);let j=it[0],_t=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),gt=A(v.internalFormat,_t,ft,v.normalized,v.colorSpace),Ut=v.isVideoTexture!==!0,jt=mt.__version===void 0||lt===!0,ct=st.dataReady,Ft=b(v,j);le(n.TEXTURE_CUBE_MAP,v);let $t;if(v.isDepthTexture){if(gt=x(v.format===vi,v.type),jt)if(Ut)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,gt,j.width,j.height);else for(let wt=0;wt<6;wt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,j.width,j.height,0,_t,ft,null)}else if(xt){Ut&&jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,gt,j.width,j.height);for(let wt=0;wt<6;wt++){$t=it[wt].mipmaps;for(let ve=0;ve<$t.length;ve++){let He=$t[ve];v.format!==Jn?_t!==null?Ut?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve,0,0,He.width,He.height,_t,He.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve,gt,He.width,He.height,0,He.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve,0,0,He.width,He.height,_t,ft,He.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve,gt,He.width,He.height,0,_t,ft,He.data)}}}else{if($t=v.mipmaps,Ut&&jt){$t.length>0&&Ft++;let wt=kt(it[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,gt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(N){Ut?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,it[wt].width,it[wt].height,_t,ft,it[wt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,it[wt].width,it[wt].height,0,_t,ft,it[wt].data);for(let ve=0;ve<$t.length;ve++){let Ei=$t[ve].image[wt].image;Ut?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve+1,0,0,Ei.width,Ei.height,_t,ft,Ei.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve+1,gt,Ei.width,Ei.height,0,_t,ft,Ei.data)}}else{Ut?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,_t,ft,it[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,_t,ft,it[wt]);for(let ve=0;ve<$t.length;ve++){let He=$t[ve];Ut?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve+1,0,0,_t,ft,He.image[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ve+1,gt,_t,ft,He.image[wt])}}}w(v)&&v.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),mt.__version=st.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function W(R,v,X,lt,st,mt){let St=r.convert(X.format,X.colorSpace),tt=r.convert(X.type),nt=A(X.internalFormat,St,tt,X.normalized,X.colorSpace),xt=i.get(v),N=i.get(X);if(N.__renderTarget=v,!xt.__hasExternalTextures){let it=Math.max(1,v.width>>mt),j=Math.max(1,v.height>>mt);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,mt,nt,it,j,v.depth,0,St,tt,null):e.texImage2D(st,mt,nt,it,j,0,St,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ht(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,st,N.__webglTexture,0,ae(v)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,lt,st,N.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(R,v,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){let lt=v.depthTexture,st=lt&&lt.isDepthTexture?lt.type:null,mt=x(v.stencilBuffer,st),St=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ht(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(v),mt,v.width,v.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(v),mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,mt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,R)}else{let lt=v.textures;for(let st=0;st<lt.length;st++){let mt=lt[st],St=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),nt=A(mt.internalFormat,St,tt,mt.normalized,mt.colorSpace);ht(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(v),nt,v.width,v.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(v),nt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,nt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(R,v,X){let lt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(v.depthTexture);st.__renderTarget=v;let mt=lt?v.depthTexture.image[0]:v.depthTexture.image;(!st.__webglTexture||mt.width!==v.width||mt.height!==v.height)&&(mt.width=v.width,mt.height=v.height,v.depthTexture.needsUpdate=!0),lt?bt(v.depthTexture,0):rt(v.depthTexture,0);let St=st.__webglTexture,tt=ae(v),nt=lt?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,xt=v.depthTexture.format===vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===xi)ht(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,nt,St,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,xt,nt,St,0);else if(v.depthTexture.format===vi)ht(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,nt,St,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,xt,nt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(R){let v=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let lt=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),lt){let st=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,lt.removeEventListener("dispose",st)};lt.addEventListener("dispose",st),v.__depthDisposeCallback=st}v.__boundDepthTexture=lt}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(X)for(let lt=0;lt<6;lt++)yt(v.__webglFramebuffer[lt],R,lt);else R.texture.mipmaps.length>0?yt(v.__webglFramebuffer[0],R,0):yt(v.__webglFramebuffer,R,0);else if(X){v.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[lt]),v.__webglDepthbuffer[lt]===void 0)v.__webglDepthbuffer[lt]=n.createRenderbuffer(),pt(v.__webglDepthbuffer[lt],R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer[lt];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,mt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),pt(v.__webglDepthbuffer,R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(R,v,X){let lt=i.get(R);v!==void 0&&W(lt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ot(R)}function Yt(R){let v=R.texture,X=i.get(R),lt=i.get(v);R.addEventListener("dispose",z),F(R);let st=R.textures,mt=R.isWebGLCubeRenderTarget===!0,St=st.length>1;if(St||(lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture()),lt.__version=v.version,o.memory.textures++),mt){X.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(v.mipmaps.length>0){X.__webglFramebuffer[tt]=[];for(let nt=0;nt<v.mipmaps.length;nt++)X.__webglFramebuffer[tt][nt]=n.createFramebuffer()}else X.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(v.mipmaps.length>0){X.__webglFramebuffer=[];for(let tt=0;tt<v.mipmaps.length;tt++)X.__webglFramebuffer[tt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(St)for(let tt=0,nt=st.length;tt<nt;tt++){let xt=i.get(st[tt]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ht(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let tt=0;tt<st.length;tt++){let nt=st[tt];X.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[tt]);let xt=r.convert(nt.format,nt.colorSpace),N=r.convert(nt.type),it=A(nt.internalFormat,xt,N,nt.normalized,nt.colorSpace,R.isXRRenderTarget===!0),j=ae(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,it,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,X.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),le(n.TEXTURE_CUBE_MAP,v);for(let tt=0;tt<6;tt++)if(v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)W(X.__webglFramebuffer[tt][nt],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else W(X.__webglFramebuffer[tt],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);w(v)?S(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(St){for(let tt=0,nt=st.length;tt<nt;tt++){let xt=st[tt],N=i.get(xt),it=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,N.__webglTexture),le(it,xt),W(X.__webglFramebuffer,R,xt,n.COLOR_ATTACHMENT0+tt,it,0),w(xt)&&S(it)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,lt.__webglTexture),le(tt,v),v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)W(X.__webglFramebuffer[nt],R,v,n.COLOR_ATTACHMENT0,tt,nt);else W(X.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,tt,0);w(v)?S(tt):v.mipmaps.length>0&&n.texParameteri(tt,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Ot(R)}function U(R){let v=R.textures;for(let X=0,lt=v.length;X<lt;X++){let st=v[X];if(w(st)&&st.mipmapsAutoUpdate===!0){let mt=E(R),St=i.get(st).__webglTexture;e.bindTexture(mt,St),S(mt),e.unbindTexture()}}}let ye=[];function Gt(R){if(R.samples>0){if(ht(R)===!1){let v=R.textures,X=R.width,lt=R.height,st=n.COLOR_BUFFER_BIT,mt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(R),tt=v.length>1;if(tt)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);let N=i.get(v[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,X,lt,0,0,X,lt,st,n.NEAREST),l===!0&&(ye.length=0,ye.push(n.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ye.push(mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);let N=i.get(v[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ae(R){return Math.min(s.maxSamples,R.samples)}function ht(R){let v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Se(R){let v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Dt(R,v){let X=R.colorSpace,lt=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Rr&&X!==Si&&(re.getTransfer(X)===pe?(lt!==Jn||st!==vn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",X)),v}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ut,this.resetTextureUnits=L,this.getTextureUnits=G,this.setTextureUnits=Q,this.setTexture2D=rt,this.setTexture2DArray=et,this.setTexture3D=dt,this.setTextureCube=bt,this.rebindTextures=ne,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=W,this.useMultisampledRTT=ht,this.dispose=H}function Bv(n,t){function e(i,s=Si){let r,o=re.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===Va)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qc)return n.BYTE;if(i===tu)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Ga)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Zn)return n.HALF_FLOAT;if(i===iu)return n.ALPHA;if(i===su)return n.RGB;if(i===Jn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===vi)return n.DEPTH_STENCIL;if(i===Wa)return n.RED;if(i===Xa)return n.RED_INTEGER;if(i===Hi)return n.RG;if(i===qa)return n.RG_INTEGER;if(i===Ya)return n.RGBA_INTEGER;if(i===Qr||i===to||i===eo||i===no)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Ka||i===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===Qa||i===tl||i===el||i===nl||i===io||i===il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ja||i===Qa)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===el)return r.COMPRESSED_R11_EAC;if(i===nl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===io)return r.COMPRESSED_RG11_EAC;if(i===il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===yl||i===vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_l)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sl||i===Ml||i===so||i===bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
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

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Nn({vertexShader:kv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new an(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pu=class extends ni{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,p=null,y=typeof XRWebGLBinding<"u",g=new Iu,d={},_=e.getContextAttributes(),w=null,S=null,E=[],A=[],x=new Kt,b=null,F=null,P=new dn;P.viewport=new Ne;let B=new dn;B.viewport=new Ne;let z=[P,B],Z=new Ua,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let rt=E[V];return rt===void 0&&(rt=new Gs,E[V]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(V){let rt=E[V];return rt===void 0&&(rt=new Gs,E[V]=rt),rt.getGripSpace()},this.getHand=function(V){let rt=E[V];return rt===void 0&&(rt=new Gs,E[V]=rt),rt.getHandSpace()};function K(V){let rt=A.indexOf(V.inputSource);if(rt===-1)return;let et=E[rt];et!==void 0&&(et.update(V.inputSource,V.frame,c||o),et.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",T);for(let V=0;V<E.length;V++){let rt=A[V];rt!==null&&(A[V]=null,E[V].disconnect(rt))}I=null,H=null,g.reset();for(let V in d)delete d[V];if(t.setRenderTarget(w),m=null,h=null,f=null,s=null,S=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),F!==null){let V=F.camera;V.fov=F.fov,V.zoom=F.zoom,V.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",T),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,dt=null,bt=null;_.depth&&(bt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?vi:xi,dt=_.stencil?ls:Yn);let Vt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new wn(h.textureWidth,h.textureHeight,{format:Jn,type:vn,depthTexture:new _i(h.textureWidth,h.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let et={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new wn(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function T(V){for(let rt=0;rt<V.removed.length;rt++){let et=V.removed[rt],dt=A.indexOf(et);dt>=0&&(A[dt]=null,E[dt].disconnect(et))}for(let rt=0;rt<V.added.length;rt++){let et=V.added[rt],dt=A.indexOf(et);if(dt===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=A.length){A.push(et),dt=Vt;break}else if(A[Vt]===null){A[Vt]=et,dt=Vt;break}if(dt===-1)break}let bt=E[dt];bt&&bt.connect(et)}}function C(V,rt){rt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(rt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let rt=V.near,et=V.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(et=g.depthFar)),Z.near=B.near=P.near=rt,Z.far=B.far=P.far=et,(I!==Z.near||H!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),I=Z.near,H=Z.far),Z.layers.mask=V.layers.mask|6,P.layers.mask=Z.layers.mask&-5,B.layers.mask=Z.layers.mask&-3;let dt=V.parent,bt=Z.cameras;C(Z,dt);for(let Vt=0;Vt<bt.length;Vt++)C(bt[Vt],dt);Z.projectionMatrix.copy(P.projectionMatrix),Z.projectionMatrixInverse.copy(P.projectionMatrixInverse),F===null&&V.isPerspectiveCamera&&(F={camera:V,fov:V.fov,zoom:V.zoom}),L(V,Z,dt)};function L(V,rt,et){et===null?V.matrix.copy(rt.matrixWorld):(V.matrix.copy(et.matrixWorld),V.matrix.invert(),V.matrix.multiply(rt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(rt.projectionMatrix),V.projectionMatrixInverse.copy(rt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Bs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Z)},this.getCameraTexture=function(V){return d[V]};let G=null;function Q(V,rt){if(u=rt.getViewerPose(c||o),p=rt,u!==null){let et=u.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let dt=!1;et.length!==Z.cameras.length&&(Z.cameras.length=0,dt=!0);for(let It=0;It<et.length;It++){let le=et[It],ce=null;if(m!==null)ce=m.getViewport(le);else{let Ue=f.getViewSubImage(h,le);ce=Ue.viewport,It===0&&(t.setRenderTargetTextures(S,Ue.colorTexture,Ue.depthStencilTexture),t.setRenderTarget(S))}let Jt=z[It];Jt===void 0&&(Jt=new dn,Jt.layers.enable(It),Jt.viewport=new Ne,z[It]=Jt),Jt.matrix.fromArray(le.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(le.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ce.x,ce.y,ce.width,ce.height),It===0&&(Z.matrix.copy(Jt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),dt===!0&&Z.cameras.push(Jt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let It=f.getDepthInformation(et[0]);It&&It.isValid&&It.texture&&g.init(It,s.renderState)}if(bt&&bt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let It=0;It<et.length;It++){let le=et[It].camera;if(le){let ce=d[le];ce||(ce=new Gr,d[le]=ce);let Jt=f.getCameraImage(le);ce.sourceTexture=Jt}}}}for(let et=0;et<E.length;et++){let dt=A[et],bt=E[et];dt!==null&&bt!==void 0&&bt.update(dt,rt,c||o)}G&&G(V,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),p=null}let ut=new If;ut.setAnimationLoop(Q),this.setAnimationLoop=function(V){G=V},this.dispose=function(){}}},Gv=new he,zf=new qt;zf.set(-1,0,0,0,1,0,0,0,1);function Vv(n,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,fu(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,_,w,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(r(g,d),p(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),y(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,_,w):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===mn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===mn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let _=t.get(d),w=_.envMap,S=_.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zf),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,w){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=w*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,_){g.ior.value=d.ior,d.diffuseRoughness>0&&(g.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){let _=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hv(n,t,e,i){let s={},r={};function o(_,w){let S=w.program;i.uniformBlockBinding(_,S,s[_.id])}function a(_,w){let S=s[_.id];S===void 0&&(p(_),S=l(_),s[_.id]=S,_.addEventListener("dispose",g));let E=w.program;i.updateUBOMapping(_,E);let A=t.render.frame;r[_.id]!==A&&(c(_),r[_.id]=A)}function l(_){let w=n.createBuffer(),S=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(_){let w=s[_.id],S=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,x=S.length;A<x;A++){let b=S[A];if(Array.isArray(b))for(let F=0,P=b.length;F<P;F++)u(b[F],A,F,E);else u(b,A,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,w,S,E){if(h(_,w,S,E)===!0){let A=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let F=0;F<x.length;F++){let P=x[F],B=y(P,!0);f(P,_.__data,b),b+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,_.__data)}}function f(_,w,S){typeof _=="number"||typeof _=="boolean"?w[S]=_:_.isMatrix3?(w[S]=_.elements[0],w[S+1]=_.elements[1],w[S+2]=_.elements[2],w[S+3]=0,w[S+4]=_.elements[3],w[S+5]=_.elements[4],w[S+6]=_.elements[5],w[S+7]=0,w[S+8]=_.elements[6],w[S+9]=_.elements[7],w[S+10]=_.elements[8],w[S+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-S),S):_.toArray(w,S)}function h(_,w,S,E){let A=_.value,x=w+"_"+S;if(Array.isArray(A)){E[x]===void 0&&(E[x]=[]);let b=E[x],F=!1;for(let P=0;P<A.length;P++)m(A[P],b,P)===!0&&(F=!0);return F}return m(A,E,x)}function m(_,w,S){if(w[S]===void 0)return typeof _=="number"||typeof _=="boolean"?w[S]=_:ArrayBuffer.isView(_)?w[S]=_.slice():w[S]=_.clone(),!0;{let E=w[S];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return w[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function p(_){let w=_.uniforms,S=0,E=16;for(let x=0,b=w.length;x<b;x++){let F=Array.isArray(w[x])?w[x]:[w[x]];for(let P=0,B=F.length;P<B;P++){let z=F[P],Z=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(w[x])||Array.isArray(z.value),H=S;for(let J=0,T=Z.length;J<T;J++){let C=Z[J],L=y(C,I),G=S%E,Q=G%L.boundary,ut=G+Q;S+=Q,ut!==0&&E-ut<L.storage&&(S+=E-ut),J===0&&(H=S),S+=L.storage}let K=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new K((S-H)/Float32Array.BYTES_PER_ELEMENT),z.__offset=H}}let A=S%E;return A>0&&(S+=E-A),_.__size=S,_.__cache={},this}function y(_,w){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(_){let w=_.target;w.removeEventListener("dispose",g),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:d}}var Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function Xv(){return ri===null&&(ri=new Fr(Wv,16,16,Hi,Zn),ri.name="DFG_LUT",ri.minFilter=fn,ri.magFilter=fn,ri.wrapS=ei,ri.wrapT=ei,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var Cl=class{constructor(t={}){let{canvas:e=jd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=vn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let y=m,g=new Set([Ya,qa,Xa]),d=new Set([vn,Yn,Js,ls,Va,Ha]),_=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},E=null,A=null,x=[],b=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,B=!1,z=null,Z=null,I=null,H=null;this._outputColorSpace=Ke;let K=0,J=0,T=null,C=-1,L=null,G=new Ne,Q=new Ne,ut=null,V=new Wt(0),rt=0,et=e.width,dt=e.height,bt=1,Vt=null,Pe=null,It=new Ne(0,0,et,dt),le=new Ne(0,0,et,dt),ce=!1,Jt=new Fi,Ue=new va,Le=!1,at=!1,W=new he,pt=new k,yt=new Ne,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function Yt(){return T===null?bt:1}let U=i;function ye(M,O){return e.getContext(M,O)}let Gt,ae,ht,Se,Dt,kt,R,v,X,lt,st,mt,St,tt,nt,xt,N,it,j,_t,ft,gt,Ut;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",wt,!1),U===null){let O="webgl2";if(U=ye(O,M),U===null)throw ye(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(M){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Ht("WebGLRenderer: "+M.message),M}function jt(){Gt=new ny(U),Gt.init(),ft=new Bv(U,Gt),ae=new X_(U,Gt,t,ft),ht=new Ov(U,Gt),ae.reversedDepthBuffer&&h&&ht.buffers.depth.setReversed(!0),Z=U.createFramebuffer(),I=U.createFramebuffer(),H=U.createFramebuffer(),Se=new ry(U),Dt=new Mv,kt=new Fv(U,Gt,ht,Dt,ae,ft,Se),R=new ey(P),v=new ag(U),gt=new H_(U,v),X=new iy(U,v,Se,gt),lt=new ay(U,X,v,gt,Se),it=new oy(U,ae,kt),nt=new q_(Dt),st=new Sv(P,R,Gt,ae,gt,nt),mt=new Vv(P,Dt),St=new wv,tt=new Iv(Gt),N=new V_(P,R,ht,lt,p,l),xt=new Uv(P,lt,ae),Ut=new Hv(U,Se,ae,ht),j=new W_(U,Gt,Se),_t=new sy(U,Gt,Se),Se.programs=st.programs,P.capabilities=ae,P.extensions=Gt,P.properties=Dt,P.renderLists=St,P.shadowMap=xt,P.state=ht,P.info=Se}y!==vn&&(F=new cy(y,e.width,e.height,a,s,r));let ct=new Pu(P,U);this.xr=ct,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(M){M!==void 0&&(bt=M,this.setSize(et,dt,!1))},this.getSize=function(M){return M.set(et,dt)},this.setSize=function(M,O,$=!0){if(ct.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=M,dt=O,e.width=Math.floor(M*bt),e.height=Math.floor(O*bt),$===!0&&(e.style.width=M+"px",e.style.height=O+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(et*bt,dt*bt).floor()},this.setDrawingBufferSize=function(M,O,$){et=M,dt=O,bt=$,e.width=Math.floor(M*$),e.height=Math.floor(O*$),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(y===vn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(It)},this.setViewport=function(M,O,$,q){M.isVector4?It.set(M.x,M.y,M.z,M.w):It.set(M,O,$,q),ht.viewport(G.copy(It).multiplyScalar(Yt()).round())},this.getScissor=function(M){return M.copy(le)},this.setScissor=function(M,O,$,q){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,O,$,q),ht.scissor(Q.copy(le).multiplyScalar(Yt()).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(M){ht.setScissorTest(ce=M)},this.setOpaqueSort=function(M){Vt=M},this.setTransparentSort=function(M){Pe=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,$=!0){let q=0;if(M){let Y=!1;if(T!==null){let Mt=T.texture.format;Y=g.has(Mt)}if(Y){let Mt=T.texture.type,Rt=d.has(Mt),vt=N.getClearColor(),At=N.getClearAlpha(),Nt=vt.r,Zt=vt.g,ie=vt.b;Rt?(_[0]=Nt,_[1]=Zt,_[2]=ie,_[3]=At,U.clearBufferuiv(U.COLOR,0,_)):(w[0]=Nt,w[1]=Zt,w[2]=ie,w[3]=At,U.clearBufferiv(U.COLOR,0,w))}else q|=U.COLOR_BUFFER_BIT}O&&(q|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),N.dispose(),St.dispose(),tt.dispose(),kt.dispose(),Dt.dispose(),R.dispose(),lt.dispose(),X.dispose(),gt.dispose(),Ut.dispose(),st.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Uh),ct.removeEventListener("sessionend",Oh),Ji.stop()};function Ft(M){M.preventDefault(),cu("WebGLRenderer: Context Lost."),B=!0}function $t(){cu("WebGLRenderer: Context Restored."),B=!1;let M=Se.autoReset,O=xt.enabled,$=xt.autoUpdate,q=xt.needsUpdate,Y=xt.type;jt(),Se.autoReset=M,xt.enabled=O,xt.autoUpdate=$,xt.needsUpdate=q,xt.type=Y}function wt(M){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ve(M){let O=M.target;O.removeEventListener("dispose",ve),He(O)}function He(M){Ei(M),Dt.remove(M)}function Ei(M){let O=Dt.get(M).programs;O!==void 0&&(O.forEach(function($){st.releaseProgram($)}),M.isShaderMaterial&&st.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,$,q,Y,Mt){O===null&&(O=Ot);let Rt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,vt=n0(M,O,$,q,Y);ht.setMaterial(q,Rt);let At=$.index,Nt=1;if(q.wireframe===!0){if(At=X.getWireframeAttribute($),At===void 0)return;Nt=2}let Zt=$.drawRange,ie=$.attributes.position,Pt=Zt.start*Nt,se=(Zt.start+Zt.count)*Nt;Mt!==null&&(Pt=Math.max(Pt,Mt.start*Nt),se=Math.min(se,(Mt.start+Mt.count)*Nt)),At!==null?(Pt=Math.max(Pt,0),se=Math.min(se,At.count)):ie!=null&&(Pt=Math.max(Pt,0),se=Math.min(se,ie.count));let Fe=se-Pt;if(Fe<0||Fe===1/0)return;gt.setup(Y,q,vt,$,At);let Te,Me=j;if(At!==null&&(Te=v.get(At),Me=_t,Me.setIndex(Te)),Y.isMesh)q.wireframe===!0?(ht.setLineWidth(q.wireframeLinewidth*Yt()),Me.setMode(U.LINES)):Me.setMode(U.TRIANGLES);else if(Y.isLine){let en=q.linewidth;en===void 0&&(en=1),ht.setLineWidth(en*Yt()),Y.isLineSegments?Me.setMode(U.LINES):Y.isLineLoop?Me.setMode(U.LINE_LOOP):Me.setMode(U.LINE_STRIP)}else Y.isPoints?Me.setMode(U.POINTS):Y.isSprite&&Me.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))Me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let en=Y._multiDrawStarts,Lt=Y._multiDrawCounts,hn=Y._multiDrawCount,de=At?v.get(At).bytesPerElement:1,Ki=Dt.get(q).currentProgram.getUniforms();for(let nn=0;nn<hn;nn++)Ki.setValue(U,"_gl_DrawID",nn),Me.render(en[nn]/de,Lt[nn])}else if(Y.isInstancedMesh)Me.renderInstances(Pt,Fe,Y.count);else if($.isInstancedBufferGeometry){let en=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Lt=Math.min($.instanceCount,en);Me.renderInstances(Pt,Fe,Lt)}else Me.render(Pt,Fe)};function Dh(M,O,$,q){z!==null&&M.isNodeMaterial&&z.setObject(q,M),Le===!0&&nt.setState(M,$,!1),M.transparent===!0&&M.side===Ze&&M.forceSinglePass===!1?(M.side=mn,M.needsUpdate=!0,_r(M,O,q),M.side=Vi,M.needsUpdate=!0,_r(M,O,q),M.side=Ze):_r(M,O,q)}this.compile=function(M,O,$=null){$===null&&($=M),z!==null&&z.renderStart(M,O,$),A=tt.get($),A.init(O),b.push(A),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),M!==$&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),at=this.localClippingEnabled,Le=nt.init(this.clippingPlanes,at),Le===!0&&nt.setGlobalState(this.clippingPlanes,O),z!==null&&xt.render(A.state.shadowsArray,$,O);let q=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Mt=Y.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){let vt=Mt[Rt];Dh(vt,$,O,Y),q.add(vt)}else Dh(Mt,$,O,Y),q.add(Mt)}),A=b.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(M,O,$=null){let q=this.compile(M,O,$);return new Promise(Y=>{function Mt(){if(q.forEach(function(Rt){let At=Dt.get(Rt).currentProgram;(At===void 0||At.isReady())&&q.delete(Rt)}),q.size===0){Y(M);return}setTimeout(Mt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let uc=null;function t0(M){uc&&uc(M)}function Uh(){Ji.stop()}function Oh(){Ji.start()}let Ji=new If;Ji.setAnimationLoop(t0),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(M){uc=M,ct.setAnimationLoop(M),M===null?Ji.stop():Ji.start()},ct.addEventListener("sessionstart",Uh),ct.addEventListener("sessionend",Oh),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(M,O);let $=ct.enabled===!0&&ct.isPresenting===!0,q=F!==null&&(T===null||$)&&F.begin(P,T);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,O,T),A=tt.get(M,b.length),A.init(O),A.state.textureUnits=kt.getTextureUnits(),b.push(A),W.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ue.setFromArrayCamera(O):Jt.setFromProjectionMatrix(W,Rn,O.reversedDepth),at=this.localClippingEnabled,Le=nt.init(this.clippingPlanes,at),E=St.get(M,x.length),E.init(),x.push(E),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let Rt=P.xr.getDepthSensingMesh();Rt!==null&&hc(Rt,O,-1/0,P.sortObjects)}hc(M,O,0,P.sortObjects),E.finish(),z!==null&&z.updateLights(A.state.lightsArray),P.sortObjects===!0&&E.sort(Vt,Pe),ne=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ne&&N.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),Le===!0&&nt.beginShadows();let Y=A.state.shadowsArray;if(xt.render(Y,M,O),Le===!0&&nt.endShadows(),(q&&F.hasRenderPass())===!1){let Rt=E.opaque,vt=E.transmissive;if(A.setupLights(),O.isArrayCamera){let At=O.cameras;if(vt.length>0)for(let Nt=0,Zt=At.length;Nt<Zt;Nt++){let ie=At[Nt];Bh(Rt,vt,M,ie)}ne&&N.render(M);for(let Nt=0,Zt=At.length;Nt<Zt;Nt++){let ie=At[Nt];Fh(E,M,ie,ie.viewport)}}else vt.length>0&&Bh(Rt,vt,M,O),ne&&N.render(M),Fh(E,M,O)}T!==null&&J===0&&(kt.updateMultisampleRenderTarget(T),kt.updateRenderTargetMipmap(T)),q&&F.end(P),M.isScene===!0&&M.onAfterRender(P,M,O),gt.resetDefaultState(),C=-1,L=null,b.pop(),b.length>0?(A=b[b.length-1],kt.setTextureUnits(A.state.textureUnits),Le===!0&&nt.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,z!==null&&z.renderEnd()};function hc(M,O,$,q){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){let Rt=O.isArrayCamera?Ue:Jt;if(!M.frustumCulled||M.intersectsFrustum(Rt)){q&&yt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(W);let vt=lt.update(M),At=M.material;At.visible&&E.push(M,vt,At,$,yt.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){let Rt=O.isArrayCamera?Ue:Jt;if(!M.frustumCulled||M.intersectsFrustum(Rt)){let vt=lt.update(M),At=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),yt.copy(M.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),yt.copy(vt.boundingSphere.center)),yt.applyMatrix4(M.matrixWorld).applyMatrix4(W)),Array.isArray(At)){let Nt=vt.groups;for(let Zt=0,ie=Nt.length;Zt<ie;Zt++){let Pt=Nt[Zt],se=At[Pt.materialIndex];se&&se.visible&&E.push(M,vt,se,$,yt.z,Pt,O)}}else At.visible&&E.push(M,vt,At,$,yt.z,null,O)}}}let Mt=M.children;for(let Rt=0,vt=Mt.length;Rt<vt;Rt++)hc(Mt[Rt],O,$,q)}function Fh(M,O,$,q){let{opaque:Y,transmissive:Mt,transparent:Rt}=M;A.setupLightsView($),Le===!0&&nt.setGlobalState(P.clippingPlanes,$),q&&ht.viewport(G.copy(q)),Y.length>0&&Oo(Y,O,$),Mt.length>0&&Oo(Mt,O,$),Rt.length>0&&Oo(Rt,O,$),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Bh(M,O,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){let Pt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new wn(1,1,{generateMipmaps:!0,type:Pt?Zn:vn,minFilter:qn,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let Mt=A.state.transmissionRenderTarget[q.id],Rt=q.viewport||G;Mt.setSize(Rt.z*P.transmissionResolutionScale,Rt.w*P.transmissionResolutionScale);let vt=P.getRenderTarget(),At=P.getActiveCubeFace(),Nt=P.getActiveMipmapLevel();P.setRenderTarget(Mt),P.getClearColor(V),rt=P.getClearAlpha(),rt<1&&P.setClearColor(16777215,.5),P.clear(),ne&&N.render($);let Zt=P.toneMapping;P.toneMapping=si;let ie=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),Le===!0&&nt.setGlobalState(P.clippingPlanes,q),Oo(M,$,q),kt.updateMultisampleRenderTarget(Mt),kt.updateRenderTargetMipmap(Mt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let se=0,Fe=O.length;se<Fe;se++){let Te=O[se],{object:Me,geometry:en,material:Lt,group:hn}=Te;if(Lt.side===Ze&&Me.layers.test(q.layers)){let de=Lt.side;Lt.side=mn,Lt.needsUpdate=!0,kh(Me,$,q,en,Lt,hn),Lt.side=de,Lt.needsUpdate=!0,Pt=!0}}Pt===!0&&(kt.updateMultisampleRenderTarget(Mt),kt.updateRenderTargetMipmap(Mt))}P.setRenderTarget(vt,At,Nt),P.setClearColor(V,rt),ie!==void 0&&(q.viewport=ie),P.toneMapping=Zt}function Oo(M,O,$){let q=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,Mt=M.length;Y<Mt;Y++){let Rt=M[Y],{object:vt,geometry:At,group:Nt}=Rt,Zt=Rt.material;Zt.allowOverride===!0&&q!==null&&(Zt=q),vt.layers.test($.layers)&&kh(vt,O,$,At,Zt,Nt)}}function kh(M,O,$,q,Y,Mt){z!==null&&Y.isNodeMaterial&&z.setObject(M,Y),M.onBeforeRender(P,O,$,q,Y,Mt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(P,O,$,q,M,Mt),Y.transparent===!0&&Y.side===Ze&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,P.renderBufferDirect($,O,q,Y,M,Mt),Y.side=Vi,Y.needsUpdate=!0,P.renderBufferDirect($,O,q,Y,M,Mt),Y.side=Ze):P.renderBufferDirect($,O,q,Y,M,Mt),M.onAfterRender(P,O,$,q,Y,Mt)}function zh(M){let O=0;for(let $ of M)$.texture!==null&&O++;return O}function _r(M,O,$){O.isScene!==!0&&(O=Ot);let q=Dt.get(M),Y=A.state.lights,Mt=A.state.shadowsArray,Rt=Y.state.version,vt=st.getParameters(M,Y.state,Mt,O,$,A.state.lightProbeGridArray),At=st.getProgramCacheKey(vt),Nt=q.programs;q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,q.fog=O.fog;let Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;q.envMap=R.get(M.envMap||q.environment,Zt),q.envMapRotation=q.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",ve),Nt=new Map,q.programs=Nt,q.programVariants=new Map);let ie=Nt.get(At);if(ie!==void 0){if(q.currentProgram===ie&&q.lightsStateVersion===Rt)return Vh(M,vt),ie}else vt.uniforms=st.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,$,vt),M.onBeforeCompile(vt,P),ie=st.acquireProgram(vt,At),Nt.set(At,ie),q.uniforms=vt.uniforms;let Pt=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=nt.uniform),Vh(M,vt),q.needsLights=s0(M),q.lightsStateVersion=Rt,q.needsLights&&(Pt.ambientLightColor.value=Y.state.ambient,Pt.lightProbe.value=Y.state.probe,Pt.sunLights.value=Y.state.sun,Pt.sunLightShadows.value=Y.state.sunShadow,Pt.directionalLights.value=Y.state.directional,Pt.directionalLightShadows.value=Y.state.directionalShadow,Pt.spotLights.value=Y.state.spot,Pt.spotLightShadows.value=Y.state.spotShadow,Pt.rectAreaLights.value=Y.state.rectArea,Pt.ltc_1.value=Y.state.rectAreaLTC1,Pt.ltc_2.value=Y.state.rectAreaLTC2,Pt.pointLights.value=Y.state.point,Pt.pointLightShadows.value=Y.state.pointShadow,Pt.hemisphereLights.value=Y.state.hemi,Pt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Pt.sunShadowCascade.value=Y.state.sunShadowCascade,Pt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Y.state.spotLightMatrix,Pt.spotLightMap.value=Y.state.spotLightMap,Pt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=zh(A.state.lightProbeGridArray),q.currentProgram=ie,q.uniformsList=null,ie}function e0(M,O,$,q,Y){let Mt=Dt.get(M),Rt=Mt.currentProgram.id+","+q+","+Y,vt=Mt.programVariants.get(Rt);return vt===void 0?(vt=_r(M,O,$),Mt.programVariants.set(Rt,vt)):(Mt.currentProgram=vt,Mt.uniformsList=null,Mt.outputColorSpace=q,Mt.toneMapping=Y),vt}function Gh(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=js.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Vh(M,O){let $=Dt.get(M);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function n0(M,O,$,q,Y){O.isScene!==!0&&(O=Ot),kt.resetTextureUnits();let Mt=O.fog,Rt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?O.environment:null,vt=T===null?P.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:re.workingColorSpace,At=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Nt=R.get(q.envMap||Rt,At),Zt=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ie=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pt=!!$.morphAttributes.position,se=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color,Te=si;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Te=P.toneMapping);let Me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,en=Me!==void 0?Me.length:0,Lt=Dt.get(q),hn=A.state.lights;if(Le===!0&&(at===!0||M!==L)){let De=M===L&&q.id===C;nt.setState(q,M,De)}let de=!1,Ki=!1;q.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==hn.state.version||Y.isBatchedMesh&&Lt.batching===!1||!Y.isBatchedMesh&&Lt.batching===!0||Y.isBatchedMesh&&Lt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Lt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Lt.instancing===!1||!Y.isInstancedMesh&&Lt.instancing===!0||Y.isSkinnedMesh&&Lt.skinning===!1||!Y.isSkinnedMesh&&Lt.skinning===!0||Y.isInstancedMesh&&Lt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Lt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Lt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Lt.instancingMorph===!1&&Y.morphTexture!==null||Lt.envMap!==Nt||q.fog===!0&&Lt.fog!==Mt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==nt.numPlanes||Lt.numIntersection!==nt.numIntersection)||Lt.vertexAlphas!==Zt||Lt.vertexTangents!==ie||Lt.morphTargets!==Pt||Lt.morphNormals!==se||Lt.morphColors!==Fe||Lt.morphTargetsCount!==en||Lt.numLightProbeGrids!==zh(A.state.lightProbeGridArray)?de=!0:(Lt.outputColorSpace!==vt||Lt.toneMapping!==Te)&&(Ki=!0):(de=!0,Lt.__version=q.version);let nn=Lt.currentProgram;(de===!0||Ki===!0)&&(nn=Ki===!0?e0(q,O,Y,vt,Te):_r(q,O,Y),z&&q.isNodeMaterial&&z.onUpdateProgram(q,nn,Lt));let Fo=!1,Ci=!1,$i=!1,ue=nn.getUniforms(),Je=Lt.uniforms;if(ht.useProgram(nn.program)&&(Fo=!0,Ci=!0,$i=!0),q.id!==C&&(C=q.id,Ci=!0),Fo||L!==M){ht.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ue.setValue(U,"projectionMatrix",M.projectionMatrix),ue.setValue(U,"viewMatrix",M.matrixWorldInverse);let We=ue.map.cameraPosition;We!==void 0&&We.setValue(U,pt.setFromMatrixPosition(M.matrixWorld)),ae.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ue.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),L!==M&&(L=M,Ci=!0,$i=!0)}if(Lt.needsLights&&(hn.state.sunShadowMap.length>0&&ue.setValue(U,"sunShadowMap",hn.state.sunShadowMap,kt),hn.state.directionalShadowMap.length>0&&ue.setValue(U,"directionalShadowMap",hn.state.directionalShadowMap,kt),hn.state.spotShadowMap.length>0&&ue.setValue(U,"spotShadowMap",hn.state.spotShadowMap,kt),hn.state.pointShadowMap.length>0&&ue.setValue(U,"pointShadowMap",hn.state.pointShadowMap,kt)),Y.isSkinnedMesh){ue.setOptional(U,Y,"bindMatrix"),ue.setOptional(U,Y,"bindMatrixInverse");let De=Y.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ue.setValue(U,"boneTexture",De.boneTexture,kt))}Y.isBatchedMesh&&(ue.setOptional(U,Y,"batchingTexture"),ue.setValue(U,"batchingTexture",Y._matricesTexture,kt),ue.setOptional(U,Y,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",Y._indirectTexture,kt),ue.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",Y._colorsTexture,kt));let kn=$.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&it.update(Y,$,nn),(Ci||Lt.receiveShadow!==Y.receiveShadow)&&(Lt.receiveShadow=Y.receiveShadow,ue.setValue(U,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&O.environment!==null&&(Je.envMapIntensity.value=O.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Xv()),Ci){if(ue.setValue(U,"toneMappingExposure",P.toneMappingExposure),Lt.needsLights&&i0(Je,$i),Mt&&q.fog===!0&&mt.refreshFogUniforms(Je,Mt),mt.refreshMaterialUniforms(Je,q,bt,dt,A.state.transmissionRenderTarget[M.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let De=S,We=0;for(let ui of A.state.lightProbeGridArray)ui.texture!==null&&(De.textures[We]=ui.texture,De.min[We]=ui.boundingBox.min,De.max[We]=ui.boundingBox.max,De.resolution[We]=ui.resolution,We++);for(let ui in De)De[ui].length=We;Je.probesSH.value=De.textures,Je.probesMin.value=De.min,Je.probesMax.value=De.max,Je.probesResolution.value=De.resolution}js.upload(U,Gh(Lt),Je,kt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(js.upload(U,Gh(Lt),Je,kt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ue.setValue(U,"center",Y.center),ue.setValue(U,"modelViewMatrix",Y.modelViewMatrix),ue.setValue(U,"normalMatrix",Y.normalMatrix),ue.setValue(U,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let De=q.uniformsGroups;for(let We=0,ui=De.length;We<ui;We++){let Wh=De[We];Ut.update(Wh,nn),Ut.bind(Wh,nn)}}return nn}function i0(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function s0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,O,$){let q=Dt.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Dt.get(M.texture).__webglTexture=O,Dt.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let $=Dt.get(M);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,$=0){T=M,K=O,J=$;let q=null,Y=!1,Mt=!1;if(M){let vt=Dt.get(M);if(vt.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(U.FRAMEBUFFER,vt.__webglFramebuffer),G.copy(M.viewport),Q.copy(M.scissor),ut=M.scissorTest,ht.viewport(G),ht.scissor(Q),ht.setScissorTest(ut),C=-1;return}else if(vt.__webglFramebuffer===void 0)kt.setupRenderTarget(M);else if(vt.__hasExternalTextures)kt.rebindTextures(M,Dt.get(M.texture).__webglTexture,Dt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Zt=M.depthTexture;if(vt.__boundDepthTexture!==Zt){if(Zt!==null&&Dt.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(M)}}let At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(Mt=!0);let Nt=Dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?q=Nt[O][$]:q=Nt[O],Y=!0):M.samples>0&&kt.useMultisampledRTT(M)===!1?q=Dt.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?q=Nt[$]:q=Nt,G.copy(M.viewport),Q.copy(M.scissor),ut=M.scissorTest}else G.copy(It).multiplyScalar(bt).floor(),Q.copy(le).multiplyScalar(bt).floor(),ut=ce;if($!==0&&(q=Z),ht.bindFramebuffer(U.FRAMEBUFFER,q)&&ht.drawBuffers(M,q),ht.viewport(G),ht.scissor(Q),ht.setScissorTest(ut),Y){let vt=Dt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,vt.__webglTexture,$)}else if(Mt){let vt=O;for(let At=0;At<M.textures.length;At++){let Nt=Dt.get(M.textures[At]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+At,Nt.__webglTexture,$,vt)}}else if(M!==null&&$!==0){let vt=Dt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vt.__webglTexture,$)}C=-1};function Hh(M){let O=Dt.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=ae.textureFormatReadable(M.format),O.__typeReadable=ae.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,$,q,Y,Mt,Rt,vt=0){if(!(M&&M.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(At=At[Rt],Array.isArray(At)&&(At=At[0])),At){ht.bindFramebuffer(U.FRAMEBUFFER,At);try{let Nt=M.textures[vt],Zt=Nt.format,ie=Nt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+vt);let Pt=Hh(Nt);if(Pt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-q&&$>=0&&$<=M.height-Y&&U.readPixels(O,$,q,Y,ft.convert(Zt),ft.convert(ie),Mt)}finally{let Nt=T!==null?Dt.get(T).__webglFramebuffer:null;ht.bindFramebuffer(U.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(M,O,$,q,Y,Mt,Rt,vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(At=At[Rt],Array.isArray(At)&&(At=At[0])),At)if(O>=0&&O<=M.width-q&&$>=0&&$<=M.height-Y){ht.bindFramebuffer(U.FRAMEBUFFER,At);let Nt=M.textures[vt],Zt=Nt.format,ie=Nt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+vt);let Pt=Hh(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),U.readPixels(O,$,q,Y,ft.convert(Zt),ft.convert(ie),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Fe=T!==null?Dt.get(T).__webglFramebuffer:null;ht.bindFramebuffer(U.FRAMEBUFFER,Fe);let Te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await tf(U,Te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(se),U.deleteSync(Te),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(M.image.width*q),Mt=Math.floor(M.image.height*q),Rt=O!==null?O.x:0,vt=O!==null?O.y:0;kt.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Rt,vt,Y,Mt),ht.unbindTexture()},this.copyTextureToTexture=function(M,O,$=null,q=null,Y=0,Mt=0){let Rt,vt,At,Nt,Zt,ie,Pt,se,Fe,Te=M.isCompressedTexture?M.mipmaps[Mt]:M.image;if($!==null)Rt=$.max.x-$.min.x,vt=$.max.y-$.min.y,At=$.isBox3?$.max.z-$.min.z:1,Nt=$.min.x,Zt=$.min.y,ie=$.isBox3?$.min.z:0;else{let ue=Math.pow(2,-Y);Rt=Math.floor(Te.width*ue),vt=Math.floor(Te.height*ue),M.isDataArrayTexture?At=Te.depth:M.isData3DTexture?At=Math.floor(Te.depth*ue):At=1,Nt=0,Zt=0,ie=0}q!==null?(Pt=q.x,se=q.y,Fe=q.z):(Pt=0,se=0,Fe=0);let Me=ft.convert(O.format),en=ft.convert(O.type),Lt;O.isData3DTexture?(kt.setTexture3D(O,0),Lt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(kt.setTexture2DArray(O,0),Lt=U.TEXTURE_2D_ARRAY):(kt.setTexture2D(O,0),Lt=U.TEXTURE_2D),ht.activeTexture(U.TEXTURE0),ht.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),ht.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ht.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let hn=ht.getParameter(U.UNPACK_ROW_LENGTH),de=ht.getParameter(U.UNPACK_IMAGE_HEIGHT),Ki=ht.getParameter(U.UNPACK_SKIP_PIXELS),nn=ht.getParameter(U.UNPACK_SKIP_ROWS),Fo=ht.getParameter(U.UNPACK_SKIP_IMAGES);ht.pixelStorei(U.UNPACK_ROW_LENGTH,Te.width),ht.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Te.height),ht.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),ht.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),ht.pixelStorei(U.UNPACK_SKIP_IMAGES,ie);let Ci=M.isDataArrayTexture||M.isData3DTexture,$i=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let ue=Dt.get(M),Je=Dt.get(O),kn=Dt.get(ue.__renderTarget),De=Dt.get(Je.__renderTarget);ht.bindFramebuffer(U.READ_FRAMEBUFFER,kn.__webglFramebuffer),ht.bindFramebuffer(U.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let We=0;We<At;We++)Ci&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(M).__webglTexture,Y,ie+We),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(O).__webglTexture,Mt,Fe+We)),U.blitFramebuffer(Nt,Zt,Nt+Rt,Zt+vt,Pt,se,Pt+Rt,se+vt,U.DEPTH_BUFFER_BIT,U.NEAREST);ht.bindFramebuffer(U.READ_FRAMEBUFFER,null),ht.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||Dt.has(M)){let ue=Dt.get(M),Je=Dt.get(O);ht.bindFramebuffer(U.READ_FRAMEBUFFER,I),ht.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let kn=0;kn<At;kn++)Ci?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ue.__webglTexture,Y,ie+kn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,Y),$i?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Je.__webglTexture,Mt,Fe+kn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Je.__webglTexture,Mt),Y!==0?U.blitFramebuffer(Nt,Zt,Nt+Rt,Zt+vt,Pt,se,Pt+Rt,se+vt,U.COLOR_BUFFER_BIT,U.NEAREST):$i?U.copyTexSubImage3D(Lt,Mt,Pt,se,Fe+kn,Nt,Zt,Rt,vt):U.copyTexSubImage2D(Lt,Mt,Pt,se,Nt,Zt,Rt,vt);ht.bindFramebuffer(U.READ_FRAMEBUFFER,null),ht.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else $i?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Lt,Mt,Pt,se,Fe,Rt,vt,At,Me,en,Te.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Lt,Mt,Pt,se,Fe,Rt,vt,At,Me,Te.data):U.texSubImage3D(Lt,Mt,Pt,se,Fe,Rt,vt,At,Me,en,Te):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Mt,Pt,se,Rt,vt,Me,en,Te.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Mt,Pt,se,Te.width,Te.height,Me,Te.data):U.texSubImage2D(U.TEXTURE_2D,Mt,Pt,se,Rt,vt,Me,en,Te);ht.pixelStorei(U.UNPACK_ROW_LENGTH,hn),ht.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),ht.pixelStorei(U.UNPACK_SKIP_PIXELS,Ki),ht.pixelStorei(U.UNPACK_SKIP_ROWS,nn),ht.pixelStorei(U.UNPACK_SKIP_IMAGES,Fo),Mt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(Lt),ht.unbindTexture()},this.initRenderTarget=function(M){Dt.get(M).__webglFramebuffer===void 0&&kt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?kt.setTextureCube(M,0):M.isData3DTexture?kt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?kt.setTexture2DArray(M,0):kt.setTexture2D(M,0),ht.unbindTexture()},this.resetState=function(){K=0,J=0,T=null,ht.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var qv=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Gf(n,{background:t="#0d1517",quality:e="high"}={}){let i=new Cl({canvas:n,antialias:e==="high",powerPreference:"default",preserveDrawingBuffer:!1});i.outputColorSpace=Ke,i.shadowMap.enabled=!1;let s=new Nr;s.background=new Wt(t);let r=new ss(-1,1,1,-1,.1,300),o={target:new k(0,0,0),yaw:.5,pitch:.95,span:9,dist:60},a={spanMin:2.2,spanMax:16,pitchMin:.55,pitchMax:1.25,bounds:new Pn(new k(-8,0,-9),new k(8,3,10))},l=1,c=1,u=1,f=!0,h=0,m=0,p=!1,y=new Set,g=new Set,d=new Set,_=new Set,w={top:0,bottom:0,left:0,right:0},S=null;function E(){let W=o.target,pt=Math.cos(o.pitch);r.position.set(W.x+o.dist*pt*Math.sin(o.yaw),W.y+o.dist*Math.sin(o.pitch),W.z+o.dist*pt*Math.cos(o.yaw)),r.lookAt(W);let yt=l/c;r.top=o.span,r.bottom=-o.span,r.left=-o.span*yt,r.right=o.span*yt;let Ot=-(w.left-w.right)/2,ne=-(w.top-w.bottom)/2;Ot||ne?r.setViewOffset(l,c,Ot,ne,l,c):r.clearViewOffset(),r.updateProjectionMatrix(),r.updateMatrixWorld()}function A(W){e=W,u=Math.min(window.devicePixelRatio||1,W==="low"?1.25:2),i.setPixelRatio(u),x()}function x(){let W=n.parentElement?n.parentElement.getBoundingClientRect():n.getBoundingClientRect();l=Math.max(1,Math.round(W.width)),c=Math.max(1,Math.round(W.height)),i.setSize(l,c,!1),n.style.width=l+"px",n.style.height=c+"px",E();for(let pt of _)pt(l,c);b()}function b(){f=!0,!m&&!p&&(m=requestAnimationFrame(P))}let F=0;function P(W){m=0;let pt=Math.min(.05,F?(W-F)/1e3:.016);F=W;for(let yt of[...y]){let Ot=Math.min(1,(W-yt.start)/yt.ms);yt.step(yt.ease(Ot)),Ot>=1&&(y.delete(yt),yt.done())}for(let yt of g)yt(pt,W);if(f||y.size||h>0){E(),i.render(s,S||r),f=!1;for(let yt of d)yt()}y.size||h>0?m=requestAnimationFrame(P):F=0}let B=()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}};function z(W,pt,{easing:yt=qv}={}){return new Promise(Ot=>{if(W<=0||B()){pt(1),b(),Ot();return}let ne={start:performance.now(),ms:W,step:pt,ease:yt,done:Ot};y.add(ne),b()})}function Z(){for(let W of[...y])W.step(1),y.delete(W),W.done();b()}function I(){h++,b();let W=!0;return()=>{W&&(W=!1,h=Math.max(0,h-1),b())}}function H(){o.span=ro.clamp(o.span,a.spanMin,a.spanMax),o.pitch=ro.clamp(o.pitch,a.pitchMin,a.pitchMax),o.target.clamp(a.bounds.min,a.bounds.max)}function K({target:W,yaw:pt,pitch:yt,span:Ot},ne=650){let Yt={t:o.target.clone(),yaw:o.yaw,pitch:o.pitch,span:o.span},U={t:W?W.clone():Yt.t,yaw:pt??Yt.yaw,pitch:yt??Yt.pitch,span:Ot??Yt.span},ye=U.yaw-Yt.yaw;return ye=Math.atan2(Math.sin(ye),Math.cos(ye)),z(ne,Gt=>{o.target.lerpVectors(Yt.t,U.t,Gt),o.yaw=Yt.yaw+ye*Gt,o.pitch=Yt.pitch+(U.pitch-Yt.pitch)*Gt,o.span=Yt.span+(U.span-Yt.span)*Gt,H()})}function J(W,{yaw:pt=o.yaw,pitch:yt=o.pitch,margin:Ot=1.08,insetTop:ne=0,insetBottom:Yt=0}={}){let U={yaw:o.yaw,pitch:o.pitch,span:o.span,t:o.target.clone()};o.yaw=pt,o.pitch=yt,o.span=1,W.getCenter(o.target),E();let ye=new k,Gt=0,ae=0,ht=r.matrixWorldInverse;for(let Dt of[W.min.x,W.max.x])for(let kt of[W.min.y,W.max.y])for(let R of[W.min.z,W.max.z])ye.set(Dt,kt,R).applyMatrix4(ht),Gt=Math.max(Gt,Math.abs(ye.x)),ae=Math.max(ae,Math.abs(ye.y));o.yaw=U.yaw,o.pitch=U.pitch,o.span=U.span,o.target.copy(U.t),E();let Se=Math.max(.3,1-(ne+Yt)/c);return Math.max(ae,Gt*c/l)*Ot/Se}let T=new k;function C(W){return T.copy(W).project(r),{x:(T.x+1)/2*l,y:(1-T.y)/2*c,visible:T.x>-1.02&&T.x<1.02&&T.y>-1.02&&T.y<1.02&&T.z<1}}let L=new Kr,G=new Kt,Q=[],ut=null,V=!0,rt=new Map,et=null;function dt(W,pt,yt=26){let Ot=n.getBoundingClientRect();G.set((W-Ot.left)/Ot.width*2-1,-((pt-Ot.top)/Ot.height)*2+1),L.setFromCamera(G,r);let ne=L.intersectObjects(Q,!0),Yt=Gt=>{for(;Gt&&!Gt.userData.pick;)Gt=Gt.parent;return Gt?Gt.userData.pick:null};if(ne.length)return Yt(ne[0].object);let U=null,ye=yt;for(let Gt of Q){let ae=Yt(Gt);if(!ae)continue;let ht=C(Gt.getWorldPosition(bt)),Se=Math.hypot(ht.x-(W-Ot.left),ht.y-(pt-Ot.top));ht.visible&&Se<ye&&(ye=Se,U=ae)}return U}let bt=new k;function Vt(W,pt,yt){let Ot=o.span*2/c,ne=new k(Math.cos(o.yaw),0,-Math.sin(o.yaw)),Yt=new k(-Math.sin(o.yaw),0,-Math.cos(o.yaw));o.target.copy(yt).addScaledVector(ne,-W*Ot).addScaledVector(Yt,pt*Ot/Math.max(.3,Math.sin(o.pitch)))}function Pe(W){if(V){if(n.setPointerCapture?.(W.pointerId),rt.set(W.pointerId,{x:W.clientX,y:W.clientY,x0:W.clientX,y0:W.clientY,t0:performance.now()}),rt.size===1)et={kind:"one",moved:!1,t:o.target.clone()};else if(rt.size===2){let[pt,yt]=[...rt.values()];et={kind:"two",d0:Math.hypot(pt.x-yt.x,pt.y-yt.y),span:o.span,mid:{x:(pt.x+yt.x)/2,y:(pt.y+yt.y)/2},t:o.target.clone(),moved:!0}}}}function It(W){let pt=rt.get(W.pointerId);if(!(!pt||!et)){if(pt.x=W.clientX,pt.y=W.clientY,et.kind==="one"&&rt.size===1){let yt=pt.x-pt.x0,Ot=pt.y-pt.y0;if(!et.moved&&Math.hypot(yt,Ot)<8)return;et.moved=!0,Vt(yt,Ot,et.t),H(),b(),Jt()}else if(et.kind==="two"&&rt.size===2){let[yt,Ot]=[...rt.values()],ne=Math.hypot(yt.x-Ot.x,yt.y-Ot.y);o.span=et.span*et.d0/Math.max(20,ne);let Yt={x:(yt.x+Ot.x)/2,y:(yt.y+Ot.y)/2};Vt(Yt.x-et.mid.x,Yt.y-et.mid.y,et.t),H(),b(),Jt()}}}function le(W){let pt=rt.get(W.pointerId);if(rt.delete(W.pointerId),pt&&et&&et.kind==="one"&&!et.moved&&performance.now()-pt.t0<450&&ut){let yt=dt(W.clientX,W.clientY);ut(yt,W)}if(rt.size===0)et=null;else if(rt.size===1){let yt=[...rt.values()][0];yt.x0=yt.x,yt.y0=yt.y,et={kind:"one",moved:!0,t:o.target.clone()}}}let ce=null,Jt=()=>{ce&&ce()};function Ue(W,pt=450){return K({yaw:o.yaw+W*Math.PI/2},pt)}function Le(W){V&&(W.preventDefault(),o.span*=Math.exp(W.deltaY*.0012),H(),b())}n.addEventListener("pointerdown",Pe),n.addEventListener("pointermove",It),n.addEventListener("pointerup",le),n.addEventListener("pointercancel",W=>{rt.delete(W.pointerId),rt.size||(et=null)}),n.addEventListener("wheel",Le,{passive:!1}),n.style.touchAction="none";let at=window.ResizeObserver?new ResizeObserver(x):null;return at&&n.parentElement?at.observe(n.parentElement):addEventListener("resize",x),A(e),{renderer:i,scene:s,camera:r,rig:o,limits:a,request:b,tween:z,finishTweens:Z,hold:I,flyTo:K,rotateBy:Ue,fitSpan:J,toScreen:C,pickAt:dt,resize:x,setQuality:A,onUserMove(W){ce=W},setInsets(W){Object.assign(w,W),E(),b()},get insets(){return{...w}},overrideCamera(W){S=W||null,b()},onResize(W){return _.add(W),()=>_.delete(W)},get quality(){return e},get size(){return{width:l,height:c}},setPickables(W){Q=W},onTap(W){ut=W},setInput(W){V=W,W||(rt.clear(),et=null)},onFrame(W){return g.add(W),()=>g.delete(W)},onChange(W){return d.add(W),()=>d.delete(W)},dispose(){p=!0,m&&cancelAnimationFrame(m),at?.disconnect(),i.dispose()}}}var Vf={hall:[-5,5,-4,3.95,"#1d3532"],booth:[-3,3,-7.2,-4.2,"#22232b"],north:[-7,9,-8.8,-7.2,"#2b2f33"],west:[-7,-5.2,-7.2,3.95,"#2b2f33"],lobby:[-7,9,3.95,8,"#1f2638"],store:[5.2,9,-4,3.95,"#262a24"]},Hf=[[-5.2,-.6,3.85,4.05],[.6,5.2,3.85,4.05],[5,5.2,-4,3.85],[-5.2,-5,-4,3.85],[-3.2,-3,-7,-4.2],[3,3.2,-7,-4.2],[-3.2,1.8,-7.2,-7],[2.6,3.2,-7.2,-7],[-7.2,9.2,-9,-8.8],[9,9.2,-8.8,8],[-7.2,-7,-8.8,8],[-7.2,9.2,8,8.2],[5.2,9,-4.2,-4],[5.2,7.1,3.85,4.05],[7.9,9,3.85,4.05]],Wf=[[-5.2,-3.2,-7.2,-4.2],[3.2,9,-7.2,-4.2]],Pl=[-5.2,5.2,-4.2,-4],Ll={x0:-.25,x1:.25,y0:.85,y1:1.2},cn={x0:-.6,x1:.6,z0:-3.3,z1:-2.7,h:.9},us={x0:-.55,x1:.55,z0:-3.25,z1:-2.75,y0:.9,y1:1.4},Nl={x0:-.22,x1:.22,z0:-3.2,z1:-2.8,y:.92},Kn=[0,.94,-3],Lu=[-.2,.2],ai=[0,1.6,.3],uo=[1.2,0,-2.6],Dl=[[.8,0,-2],[1.8,1,-4.3],[7.55,.76,-8.3]],ho=[1.2,0,-4.9],Nu=[1.62,.9,-5.02],fo=[-1,0,-4.6],Xf=[-2.4,0,-6.8],hs=[0,1,-4.3],ds=[8,0,-8.3],Ul=[8.45,.9,-8.5],qf=[1.6,0,4.7],Du=[.95,1,4.05],Yf=[-.95,1,4.05];var $n=[{id:"min",x:-1.8,band:"#c28493",stripes:1},{id:"sera",x:-.6,band:"#839e4e",stripes:2},{id:"doyun",x:.6,band:"#c07fc0",stripes:3},{id:"yujin",x:1.8,band:"#52a660",stripes:4}],li=6.3,Uu={min:[0,0,4.6],sera:[7,0,0],doyun:[-6.1,0,1],yujin:[8,0,-8]},fs={lock:{ring:[.95,4.6],pick:[.95,.9,4.4],focus:[.2,.7,4.3]},fog:{ring:[0,.3],pick:[0,1.2,.3],focus:[.4,.8,-1.3]},drawer:{ring:[0,-3.65],pick:[0,1,-3.65],focus:[0,.9,-3.5]},cue:{ring:[1.2,-5.6],pick:[1.2,.8,-5.2],focus:[1.2,.7,-5]},audio:{ring:[6.6,-8],pick:[7.4,.8,-8],focus:[7.8,.7,-8]},poster:{ring:[-6.4,6],pick:[-6.8,1,6],focus:[-6.6,.8,6]}},Ou=1.75,Ol={all:[-7.2,9.2,-9,8.2],hall:[-5.2,5.2,-4.2,4.6],back:[-3.2,9.2,-9,-4],lobby:[-7.2,9.2,3.9,8.2]},An=.55,Fl=.92,tr={half:1.4,ms:650,pitch:.92},Zf={yaw:0,pitch:.62,halfX:.9,y0:0,y1:1.9,halfZ:.6};function Jf(){return{solid:new Ye({vertexColors:!0}),partition:new Ye({vertexColors:!0}),drawer:new Ye({vertexColors:!0}),doll:new Ye({vertexColors:!0}),glass:new Ye({color:"#a9d4dc",transparent:!0,opacity:.2,depthWrite:!1,side:Ze}),door:new Ye({color:"#8fb8c4",transparent:!0,opacity:.24,depthWrite:!1,side:Ze}),shadow:new be({color:"#000000",transparent:!0,opacity:.34,depthWrite:!1}),pool:new be({vertexColors:!0,transparent:!0,blending:yi,depthWrite:!1}),lens:new Ye({color:"#d9c89a",emissive:"#2a2214"}),proxy:new be({visible:!1})}}var Fu={opacity:.7,emissive:"#3a3428"};function Bu({opacity:n=.42,emissive:t="#000000"}={}){return new Ye({vertexColors:!0,transparent:!0,opacity:n,emissive:t,depthWrite:!1})}function mo(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new on;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let f=n[u],h=0,m=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0,f=[];for(let h=0;h<n.length;++h){let m=n[h].index;for(let p=0;p<m.count;++p)f.push(m.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(f)}for(let u in r){let f=Kf(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){let m=[];for(let y=0;y<o[u].length;++y)m.push(o[u][y][h]);let p=Kf(m);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Kf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new $e(o,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let f=l/e;for(let h=0,m=u.count;h<m;h++)for(let p=0;p<e;p++){let y=u.getComponent(h,p);a.setComponent(h+f,p,y)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var $f=new Wt,jf=new Wt;function Bl(n,t,e){let i=n.index?n.toNonIndexed():n;i.attributes.uv&&i.deleteAttribute("uv"),i.clearGroups();let s=i.attributes.normal,r=i.attributes.position.count,o=new Float32Array(r*3);$f.set(t),jf.set(e||t);for(let a=0;a<r;a++){let l=e&&s.getY(a)>.9?jf:$f;o[a*3]=l.r,o[a*3+1]=l.g,o[a*3+2]=l.b}return i.setAttribute("color",new $e(o,3)),i}var Qf=new he,tp=new In,Yv=new Wn,Zv=new k,Jv=new k;function ku(n,{p:t=[0,0,0],r:e=[0,0,0],s:i=[1,1,1]}={}){return tp.setFromEuler(Yv.set(e[0],e[1],e[2])),Qf.compose(Zv.set(t[0],t[1],t[2]),tp,Jv.set(i[0],i[1],i[2])),n.applyMatrix4(Qf),n}function Ct(n,t,e,i,s,r,o,a){let l=new Xn(t-n,i-e,r-s);return l.translate((n+t)/2,(e+i)/2,(s+r)/2),Bl(l,o,a)}function Qe(n,t,e,i,s){return ku(Bl(new Xn(n,t,e),i),s)}function me(n,t,e,i,s,r,o){return ku(Bl(new Hs(n,t,e,i),s,o),r)}function go(n,t,e){return ku(Bl(n,t),e)}var je=class{constructor(){this.list=[]}add(...t){for(let e of t)e&&this.list.push(e);return this}merge(){if(!this.list.length)return null;let t=mo(this.list,!1);for(let e of this.list)e.dispose();return this.list=[],t.computeBoundingSphere(),t}};var Kv='system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',Un=(n,t=500)=>`${t} ${n}px ${Kv}`;function er(n,t){if(typeof document>"u")return null;let e=document.createElement("canvas");return e.width=n,e.height=t,e}function nr(n){let t=new kr(n);return t.colorSpace=Ke,t.anisotropy=4,t.minFilter=qn,t}function zu(n,t,e){let i=[],s="";for(let r of t.split(" ")){let o=s?s+" "+r:r;n.measureText(o).width>e&&s?(i.push(s),s=r):s=o}return s&&i.push(s),i}function np(){let n=er(1024,192);if(!n)return null;let t=n.getContext("2d");return t.fillStyle="rgba(180, 214, 202, 0.5)",t.font=Un(108,600),t.textAlign="center",t.textBaseline="middle",t.fillText("\uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",512,100),nr(n)}function ip(){let n=er(512,256);if(!n)return null;let t=n.getContext("2d"),e=(i,s,r)=>{t.fillStyle="#0f1a1a",t.fillRect(i,0,256,256),t.strokeStyle="#7fb3a6",t.lineWidth=4,t.strokeRect(i+6,6,244,244),t.fillStyle="#bfe3d6",t.font=Un(30,700),t.textAlign="left",t.textBaseline="top",t.fillText(s,i+18,18),t.font=Un(25);let o=66;for(let a of r)for(let l of zu(t,a,220))t.fillText(l,i+18,o),o+=32};return e(0,"\uC815\uBB38 \uC7A0\uAE08",["01:58 \uC7A0\uAE40 \xB7 \uBD09\uC778","\uBD09\uC778 \uBC88\uD638 \uB300\uC7A5\uACFC \uAC19\uC74C","\uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C","02:19 \uD655\uC778 \uD6C4 \uC5F4\uB9BC"]),e(256,"\uC21C\uCC30 \uD655\uC778",["30\uBD84\uB9C8\uB2E4 \uB204\uB984","02:00 \uCC28\uB840","02:09 \uB20C\uB9BC"]),nr(n)}function sp(){let n=er(256,128);if(!n)return null;let t=n.getContext("2d");return t.fillStyle="#121a1c",t.fillRect(0,0,256,128),t.fillStyle="#d4e4e0",t.textAlign="center",t.textBaseline="middle",t.font=Un(26,700),t.fillText("\uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D",128,40),t.font=Un(26),t.fillText("\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9",128,88),nr(n)}var ep=[["\uC608\uC57D\uD45C","02:30 \uC790\uB3D9 \uC810\uAC80 1\uAC74"],["\uC2E4\uD589 \uAE30\uB85D","02:17:00 \uD050 1\uAC74"],["\uC2E4\uD589 \uBC29\uC2DD","\uC218\uB3D9"],["\uC785\uB825 \uC704\uCE58","\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94"],["\uC11C\uBA85","H.D.Y."],["\uD050 \uB0B4\uC6A9","\uC9C4\uC5F4\uB300 \uC870\uBA85 \uB0AE\uCDA4 + \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638"],["\uC6D0\uACA9 \uC811\uC18D","\uAE30\uB85D \uC5C6\uC74C"]];function rp(){let n=er(640,400);if(!n)return null;let t=n.getContext("2d");t.fillStyle="#0c1416",t.fillRect(0,0,640,400),t.strokeStyle="#3f5a58",t.lineWidth=2,t.fillStyle="#cfe7df",t.font=Un(28),t.textBaseline="middle",t.textAlign="left";let e=52,i=18;return ep.forEach(([s,r],o)=>{let a=i+o*e+e/2;t.fillText(s,20,a),t.fillText(r,168,a),t.beginPath(),t.moveTo(14,i+(o+1)*e),t.lineTo(626,i+(o+1)*e),t.stroke()}),t.beginPath(),t.moveTo(156,i),t.lineTo(156,i+e*ep.length),t.stroke(),nr(n)}function op(){let n=er(512,256);if(!n)return null;let t=n.getContext("2d");for(let s=0;s<3;s++){let r=s*128;t.fillStyle="#e4ddcc",t.fillRect(r+8,8,112,112),t.fillStyle="#1b1f22",t.font=Un(80,700),t.textAlign="center",t.textBaseline="middle",t.fillText(String(s+1),r+64,68)}t.fillStyle="#0c1416",t.fillRect(0,128,512,128),t.strokeStyle="#9fd0c0",t.lineWidth=2,t.font=Un(22),t.fillStyle="#9fd0c0",t.textAlign="left";let e=7,i=()=>(e=e*16807%2147483647)/2147483647;for(let s=0;s<3;s++){let r=150+s*38;t.fillText(String(s+1),10,r),t.beginPath();for(let o=40;o<500;o+=4){let a=6*(i()-.5);o===40?t.moveTo(o,r+a):t.lineTo(o,r+a)}t.stroke()}return nr(n)}function ap(){let n=er(420,500);if(!n)return null;let t=n.getContext("2d");t.fillStyle="#e9e4d8",t.fillRect(0,0,420,500),t.fillStyle="#2a2b2d",t.textAlign="left",t.textBaseline="top",t.font=Un(36,700),t.fillText("\uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",28,30),t.fillStyle="#c8c2b4",t.fillRect(28,84,364,120),t.fillStyle="#2a2b2d",t.font=Un(21,600),t.fillText("\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04 \u2014 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C",28,222),t.fillStyle="#7d7d7a",t.font=Un(21,400);let e=270;for(let i of zu(t,"\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD",340))t.fillText(i,36,e),e+=28;t.fillStyle="#2f55b8",e+=10;for(let i of zu(t,"\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4",340))t.fillText(i,36,e),e+=28;return t.save(),t.translate(250,420),t.rotate(-.08),t.strokeStyle="#b3352d",t.lineWidth=5,t.strokeRect(-140,-38,280,76),t.fillStyle="#b3352d",t.font=Un(22,700),t.textAlign="center",t.textBaseline="middle",t.fillText("\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815",0,-12),t.fillText("01:40",0,18),t.restore(),nr(n)}var xo="#33403e",hp="#5d6f6a",$v="#27312f",jv="#3a4744",lp="#59646a",cp="#2b3236",ir="#4d4234",En=-.45;function sr(n,t,e){let i=new k(ho[0],.84,ho[2]-.02),s=new k(0,Math.cos(En),Math.sin(En)),r=new k(0,-Math.sin(En),Math.cos(En));return i.addScaledVector(new k(1,0,0),n).addScaledVector(r,t).addScaledVector(s,e)}function Qv(){let n=new je;n.add(Ct(-7.5,9.5,-.36,-.006,-9.3,8.5,"#0d1618","#121d20"));for(let[I,H,K,J,T]of Object.values(Vf))n.add(Ct(I,H,-.02,0,K,J,T));for(let[I,H,K,J]of Hf)n.add(Ct(I,H,0,1.2,K,J,xo,hp));for(let[I,H,K,J]of Wf)n.add(Ct(I,H,0,1.2,K,J,$v,jv));n.add(Ct(-.6,-.55,0,1.2,3.86,4.04,"#5b6466","#7a8688"),Ct(.55,.6,0,1.2,3.86,4.04,"#5b6466","#7a8688")),n.add(Ct(-.56,.56,.9,.97,4,4.03,"#d9cfb2"),Ct(-.06,.06,.85,1.02,4.02,4.04,"#e6dec6")),n.add(Ct(.77,1.13,.86,1.14,4.05,4.07,cp)),n.add(Ct(-1.1,-.8,.84,1.14,4.05,4.07,cp),me(.035,.035,.03,10,"#b9b1a2",{p:[-.95,.9,4.085],r:[Math.PI/2,0,0]}));let t=cn,e=us,i=.012;n.add(Ct(t.x0,t.x1,0,t.h,t.z0,t.z1,"#4b5761","#5d6a72"));for(let I of[e.x0,e.x1])for(let H of[e.z0,e.z1])n.add(Ct(I-i,I+i,e.y0,e.y1,H-i,H+i,"#8c9aa0"));n.add(Ct(e.x0,e.x1,e.y1-i,e.y1+i,e.z1-i,e.z1+i,"#8c9aa0"));for(let I of[e.x0,e.x1])n.add(Ct(I-i,I+i,e.y1-i,e.y1+i,e.z0,e.z1,"#8c9aa0"));let[s,r,o]=ai;n.add(me(.2,.22,.04,14,lp,{p:[s,.02,o]}),me(.035,.035,r-.05,8,lp,{p:[s,(r-.05)/2,o]})),n.add(Qe(.17,.13,.3,"#3c464c",{p:[s,r,o-.05]}),me(.045,.045,.06,10,"#161c20",{p:[s,r,o-.23],r:[Math.PI/2,0,0]}));let[a,,l]=uo;n.add(Ct(a-.25,a+.25,0,.36,l-.2,l+.2,"#56605c","#68726e"));let c=-a,u=(t.z0+t.z1)/2-l,f=Math.hypot(c,u),h=c/f,m=u/f;n.add(me(.045,.06,.26,10,"#7a8480",{p:[a+h*.3,.3,l+m*.3],r:[0,Math.atan2(m,-h),Math.PI/2]}));let[p,,y]=ho;n.add(Ct(p-.6,p+.6,0,.78,y-.25,y+.25,"#3a4048","#4a525a"));let g=sr(0,0,0);n.add(Qe(1.2,.05,.44,"#2c3238",{p:[g.x,g.y,g.z],r:[En,0,0]}));let d=sr(-.2,-.02,.027);n.add(Qe(.66,.006,.36,"#141b1e",{p:[d.x,d.y,d.z],r:[En,0,0]}));let _=sr(.42,.08,.035);n.add(me(.035,.035,.03,10,"#b9b1a2",{p:[_.x,_.y,_.z],r:[En,0,0]}));let[w,,S]=fo;n.add(Ct(w-.45,w+.45,.12,.74,S-.25,S+.25,"#3e4753","#4c5662"));for(let I of[-.36,.36])for(let H of[-.18,.18])n.add(me(.06,.06,.04,10,"#1d2226",{p:[w+I,.06,S+H],r:[0,0,Math.PI/2]}));let[E,,A]=Xf;n.add(Ct(E-.6,E-.57,0,1.1,A-.17,A+.17,ir),Ct(E+.57,E+.6,0,1.1,A-.17,A+.17,ir));for(let I of[.08,.5,.92])n.add(Ct(E-.57,E+.57,I,I+.03,A-.17,A+.17,ir,"#5a4e3e"));n.add(Ct(E-.5,E-.15,.11,.32,A-.13,A+.13,"#3f4a50"),Ct(E+.05,E+.45,.53,.72,A-.13,A+.13,"#46504a"));let[x,,b]=ds;n.add(Ct(x-.7,x+.7,.72,.76,b-.32,b+.28,"#4a4d52","#5a5e63"));for(let I of[-.65,.65])for(let H of[-.27,.23])n.add(Ct(x+I-.025,x+I+.025,0,.72,b+H-.025,b+H+.025,"#3a3d42"));n.add(Ct(x-.4,x+.2,.76,.81,b-.25,b+.05,"#262b30","#30363c"));let[F,P,B]=Ul;n.add(Qe(.34,.24,.03,"#2a2f34",{p:[F,P,B],r:[-.2,0,0]})),n.add(Ct(x-.23,x+.23,.42,.47,-7.9,-7.44,"#3b3f45","#474b51"),Ct(x-.23,x+.23,.47,.95,-7.44,-7.39,"#3b3f45"));for(let I of[-.2,.2])for(let H of[-7.87,-7.47])n.add(Ct(x+I-.02,x+I+.02,0,.42,H-.02,H+.02,"#2b2e33"));let[z,,Z]=qf;n.add(Ct(z-.23,z+.23,.42,.47,Z-.23,Z+.23,"#3e4450","#4a5260"),Ct(z-.23,z+.23,.47,.92,Z+.2,Z+.25,"#3e4450"));for(let I of[-.2,.2])for(let H of[-.2,.2])n.add(Ct(z+I-.02,z+I+.02,0,.42,Z+H-.02,Z+H+.02,"#2b2e33"));n.add(Ct(-7,-6.94,.6,1.18,5.3,6.7,"#4a3f33","#5a4d3e"),Ct(-6.94,-6.93,.63,1.15,5.33,6.67,"#6b5a45")),n.add(Ct(-6.93,-6.925,.64,1.14,5.79,6.21,"#d9d4c8")),n.add(Ct(6.1,7.9,.8,.85,-2,-1.2,"#4a4f4a","#5a605a"));for(let I of[6.15,7.85])for(let H of[-1.95,-1.25])n.add(Ct(I-.025,I+.025,0,.8,H-.025,H+.025,"#363a36"));n.add(Ct(8.6,8.95,0,1.1,.5,.53,ir),Ct(8.6,8.95,0,1.1,2.47,2.5,ir));for(let I of[.1,.55,1])n.add(Ct(8.6,8.95,I,I+.03,.53,2.47,ir,"#5a4e3e"));return n.add(Ct(8.65,8.9,.13,.33,.7,1.3,"#4d5550"),Ct(8.65,8.9,.58,.74,1.6,2.3,"#535a52")),n.merge()}function up(n){let t=n.map(([i,s,r,o])=>{let a=new ns(r,28);a.rotateX(-Math.PI/2),a.translate(i,.014,s);let l=a.attributes.position.count,c=new Float32Array(l*3),u=new Wt(o);return c[0]=u.r,c[1]=u.g,c[2]=u.b,a.setAttribute("color",new $e(c,3)),a}),e=mo(t,!1);return t.forEach(i=>i.dispose()),e}function dp(n){let t=new Ae;t.name="static";let e=new Bt(Qv(),n.solid);e.name="solid",t.add(e);let[i,s,r,o]=Pl,a=new Bt(Ct(i,s,0,1.2,r,o,xo,hp),n.partition);a.name="partition",t.add(a);let l=us,c=l.x1-l.x0,u=l.y1-l.y0,f=l.z1-l.z0,h=(l.x0+l.x1)/2,m=(l.y0+l.y1)/2,p=(l.z0+l.z1)/2,y=[new an(c,u).translate(h,m,l.z1),new an(f,u).rotateY(Math.PI/2).translate(l.x0,m,p),new an(f,u).rotateY(Math.PI/2).translate(l.x1,m,p),new an(c,f).rotateX(-Math.PI/2).translate(h,l.y1,p)],g=new Bt(mo(y,!1),n.glass);g.name="cover",g.renderOrder=2,t.add(g),y.forEach(Z=>Z.dispose());let d=new Bt(new an(1.1,1.2).translate(0,1.2/2,3.95),n.door);d.name="door",d.renderOrder=2,t.add(d);let _=new Ae;_.name="drawer";let w=new Bt(Ct(l.x0,l.x1,l.y0,l.y1,cn.z0-.02,cn.z0+.03,"#45525a","#52606a"),n.drawer),S=Nl,E=new Bt(Ct(S.x0,S.x1,S.y-.02,S.y+.01,S.z0,S.z1,"#6a706c","#7d837e"),n.drawer);_.add(w,E),t.add(_);let A=new Bt(new je().add(me(.1,.12,.14,16,"#ffffff",{p:[0,.07,0]}),me(.07,.1,.05,16,"#ffffff",{p:[0,.165,0]})).merge(),n.lens);A.position.set(Kn[0],Kn[1],Kn[2]),A.visible=!1,A.name="lens",t.add(A);let x=np(),b=new Bt(new an(6,1.125).rotateX(-Math.PI/2).translate(0,.004,2.3),new be({map:x,transparent:!0,depthWrite:!1}));b.visible=!!x,b.name="floorText",t.add(b);let F=new Bt(up([[0,4.4,1.3,"#1c2a36"],[ho[0],-5.2,1,"#222c36"],[ds[0],-8,1.1,"#2a2a1e"],[-6.4,6,.9,"#262218"],[0,6.4,3,"#1a2030"],[7,0,1.6,"#1a1e18"]]),n.pool);F.name="pools",t.add(F);let P=new Bt(up([[0,-3,1.8,"#4a3a22"]]),n.pool.clone());P.name="displayPool",t.add(P);let B=new je().add(Ct(-5.2,5.2,1.2,3.6,-4.2,-4,xo),Ct(5,5.2,1.2,3.6,-4.2,4.05,xo),Ct(-5.2,-5,1.2,3.6,-4.2,4.05,xo)).merge(),z=new Bt(B,n.solid);return z.visible=!1,z.name="cctvWalls",t.add(z),{root:t,solid:e,partition:a,cover:g,door:d,drawer:_,panel:w,plate:E,lens:A,floorText:b,pools:F,displayPool:P,cctvWalls:z}}var Mi="#c9c2b4",tS="#ece6da",gn={step:.4,stepMs:400,nodMs:1200,nodAngle:.22,shortNodMs:500,shortNodAngle:.12,breathAmp:.008,breathPeriod:4,phaseStep:1},Wi={tube:"#8a8478",tubeEnd:"#77715f",cap:"#5c6270",notebook:"#6e6050",headphones:"#5e5e66"},Wu=.92,eS=.56,fp=1.9,Gu=null;function nS(){if(Gu)return Gu;let n=new je;n.add(Ct(-.17,.17,-.1,.05,-.11,.11,Mi));for(let t of[-.09,.09])n.add(Ct(t-.065,t+.065,-.88,-.06,-.08,.08,Mi)),n.add(Ct(t-.065,t+.065,-.92,-.86,-.08,.15,Mi));return Gu=n.merge()}function iS(n,t){n.add(go(sS(),Mi,{p:[0,.27,0],s:[1,1,.62]})),n.add(me(.05,.05,.1,8,Mi,{p:[0,.56,0]}));for(let e of[-.25,.25])n.add(me(.05,.045,.5,8,Mi,{p:[e,.24,0]})),n.add(go(new Ln(.055,8,6),t,{p:[e,-.04,.01]}))}var sS=()=>new je().add(me(.2,.17,.52,10,Mi)).merge();function rS(n,t,e){n.add(me(.064,.064,.14,10,t,{p:[.25,.36,0]}));for(let i=0;i<e;i++)n.add(me(.067,.067,.014,10,tS,{p:[.25,.29+(i+1)*.14/(e+1),0]}))}function oS(n){let t=new je;if(iS(t,n.id==="sera"?"#ebe8e1":Mi),rS(t,n.band,n.stripes),n.id==="min"&&t.add(Qe(.085,.115,.025,Wi.notebook,{p:[-.25,-.07,.07]})),n.id==="sera"){let e=[-.25,.3,0];t.add(Qe(.2,.27,.015,"#7a6648",{p:[-.18,.02,.1],r:e})),t.add(Qe(.17,.22,.004,"#dcd6c8",{p:[-.177,.015,.11],r:e})),t.add(Qe(.06,.025,.02,"#5f5a52",{p:[-.19,.15,.13],r:e}))}if(n.id==="doyun"&&(t.add(me(.04,.04,.45,10,Wi.tube,{p:[.02,.3,-.165],r:[0,0,.85]},Wi.tubeEnd)),t.add(Qe(.03,.3,.012,Wi.tubeEnd,{p:[.11,.37,.13],r:[0,0,-.85]}))),n.id==="yujin"){t.add(go(new is(.1,.016,6,14,Math.PI),Wi.headphones,{p:[0,.53,0],r:[-Math.PI/2,0,0]}));for(let e of[-.1,.1])t.add(me(.045,.045,.035,12,Wi.headphones,{p:[e,.53,.01],r:[0,0,Math.PI/2]}))}return t.merge()}function aS(n){let t=new je;return t.add(go(new Ln(.13,12,9),Mi,{p:[0,.15,0]})),n.id==="min"&&t.add(me(.136,.136,.075,14,Wi.cap,{p:[0,.255,0]}),Qe(.22,.014,.11,Wi.cap,{p:[0,.215,.14]})),t.merge()}var Vu=new Map;function lS(n){return Vu.has(n.id)||Vu.set(n.id,{lower:nS(),upper:oS(n),head:aS(n)}),Vu.get(n.id)}var Hu=null;function kl(n,t,{shadow:e,proxy:i}={}){let s=lS(n),r=new Ae;r.name="doll:"+n.id;let o=new Bt(s.lower,t);o.position.y=Wu;let a=new Bt(s.upper,t);a.position.y=Wu;let l=new Bt(s.head,t);if(l.position.y=eS,a.add(l),r.add(o,a),e){Hu=Hu||new ns(.32,20).rotateX(-Math.PI/2).translate(0,.012,0);let c=new Bt(Hu,e);c.renderOrder=1,r.add(c)}if(i){let c=new Bt(i.geometry,i.material);c.position.y=.9,c.userData.pick="p:"+n.id,r.add(c),r.userData.proxy=c}return r.position.set(n.x,0,li),{id:n.id,p:n,root:r,lower:o,upper:a,head:l,material:t}}function Xu(n,t){n.lower.rotation.x=t?-Math.PI/2:0,n.root.position.y=t?.47-Wu+.08:0}var ps=["lock","fog","drawer","cue","audio","poster"],jn={color:{new:"#efb761",seen:"#8fc9bd",asked:"#8fc9bd",closed:"#6b7378"},pulsePeriod:2.4,pulseAmp:.07,selectedScale:1.15,proxyRadius:.7,ringY:.022},ze=new ke,pp=new Wt;function mp(n){let t=new Ae;t.name="spots";let e=[...ps.map(m=>"e:"+m),...$n.map(m=>"p:"+m.id)],i=m=>m[0]==="e"?fs[m.slice(2)].ring:[$n.find(p=>"p:"+p.id===m).x,li],s=new Ws(.42,.5,40).rotateX(-Math.PI/2),r=new ii(s,new be({transparent:!0,opacity:.9,depthWrite:!1}),e.length);r.instanceMatrix.setUsage(Ks),r.renderOrder=3,r.name="rings";let o=new Ws(.34,.62,40).rotateX(-Math.PI/2),a=new ii(o,new be({color:jn.color.new,transparent:!0,opacity:.95,depthWrite:!1}),e.length);a.count=0,a.visible=!1,a.renderOrder=4,a.name="accuse";let l=new ii(new Wr(.11,0),new be({}),ps.length);l.instanceMatrix.setUsage(Ks),l.name="beacons",t.add(r,a,l);let c=new Ln(jn.proxyRadius,8,6),u=[];for(let m of ps){let p=new Bt(c,n.proxy);p.position.fromArray(fs[m].pick),p.userData.pick="e:"+m,t.add(p),u.push(p)}let f={marks:{},selected:null,accuse:null};function h(m=0,p=!1){let y=p?1+jn.pulseAmp*Math.sin(2*Math.PI*m/jn.pulsePeriod):1;e.forEach((d,_)=>{let w=f.marks[d]||"closed",S=(d===f.selected?jn.selectedScale:1)*(w==="new"?y:1),[E,A]=i(d);if(ze.position.set(E,jn.ringY,A),ze.rotation.set(0,0,0),ze.scale.set(S,1,S),ze.updateMatrix(),r.setMatrixAt(_,ze.matrix),r.setColorAt(_,pp.set(jn.color[w]||jn.color.closed)),_<ps.length){let[x,,b]=fs[ps[_]].pick;ze.position.set(x,Ou,b),ze.rotation.set(0,p?m*.6:.4,0),ze.scale.set(S,S,S),ze.updateMatrix(),l.setMatrixAt(_,ze.matrix),l.setColorAt(_,pp)}}),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0;let g=f.accuse?[f.accuse.person?"p:"+f.accuse.person:null,...(f.accuse.proof||[]).map(d=>"e:"+d)].filter(Boolean):[];a.count=g.length,a.visible=g.length>0,g.forEach((d,_)=>{let[w,S]=i(d);ze.position.set(w,jn.ringY+.002,S),ze.rotation.set(0,0,0),ze.scale.set(1,1,1),ze.updateMatrix(),a.setMatrixAt(_,ze.matrix)}),a.instanceMatrix.needsUpdate=!0}return h(),{root:t,rings:r,bold:a,beacons:l,proxies:u,ids:e,set(m,p,y){f.marks=m||{},f.selected=p||null,f.accuse=y||null,h()},animate(m){h(m,!0)},still(){h(0,!1)},anyNew(){return Object.values(f.marks).includes("new")},labelPoint(m){let[p,,y]=fs[m].pick;return new k(p,Ou+.22,y)},dispose(){s.dispose(),o.dispose(),c.dispose(),l.geometry.dispose(),r.material.dispose(),a.material.dispose(),l.material.dispose()}}}var zl=1.3;function gp(){let n=new je().add(me(.14,.16,.03,12,"#5a6266",{p:[0,.015,0]}),me(.018,.018,zl,6,"#b9b4a8",{p:[0,zl/2,0]}),Qe(.34,.2,.012,"#d6cfbd",{p:[.17,zl-.11,0]})).merge(),t=new ii(n,new Ye({vertexColors:!0}),4);t.count=0,t.visible=!1,t.name="pins";let e=[];return{mesh:t,set(i){e=$n.map(s=>s.id).filter(s=>(i||[]).includes(s)),t.count=e.length,t.visible=e.length>0,e.forEach((s,r)=>{ze.position.fromArray(Uu[s]),ze.rotation.set(0,0,0),ze.scale.set(1,1,1),ze.updateMatrix(),t.setMatrixAt(r,ze.matrix)}),t.instanceMatrix.needsUpdate=!0},shown(){return e},labelPoint(i){let[s,,r]=Uu[i];return new k(s,zl+.08,r)},dispose(){n.dispose(),t.material.dispose()}}}var cS=400;function ms(n,t,e=[0,0,1,1]){let i=new an(n,t),s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,e[0]+s.getX(r)*(e[2]-e[0]),e[1]+s.getY(r)*(e[3]-e[1]));return i}var _o=n=>new be({map:n,color:n?"#ffffff":"#20282a",transparent:!0,opacity:0,depthWrite:!1}),xp=()=>new Ye({vertexColors:!0,transparent:!0,opacity:0});function uS(){let n=ip(),t=new Ae,e=new Bt(ms(.34,.26,[0,0,.5,1]).translate(Du[0],Du[1],4.074),_o(n)),i=new Bt(ms(.26,.17,[.5,0,1,1]).translate(Yf[0],1.065,4.074),e.material);return t.add(e,i),{g:t,mats:[e.material],textures:[n]}}function hS(){let n=new Ae,t=3.2,e=t*Math.tan(25*Math.PI/180),i=new Bi(e,t,20,1,!0).rotateX(-Math.PI/2).translate(0,0,t/2),s=new be({color:"#9fd6e0",transparent:!0,opacity:0,depthWrite:!1,side:Ze}),r=new Bt(i,s);r.position.set(ai[0],ai[1],ai[2]-.2),r.lookAt(0,1.1,(cn.z0+cn.z1)/2),r.userData.maxOpacity=.13,r.renderOrder=5;let o=sp(),a=new Bt(ms(.4,.2).rotateX(-Math.PI/2).translate(uo[0],.366,uo[2]),_o(o));return n.add(r,a),{g:n,mats:[s,a.material],textures:[o],cone:r}}function dS(){let n=new je,t=us,e=cn.z0-.03,i="#151a1c",s="#8d969a",r="#a8322a";n.add(Ct(t.x0,t.x1,t.y0-.006,t.y0+.006,e-.006,e,i),Ct(t.x0,t.x1,t.y1-.006,t.y1+.006,e-.006,e,i));for(let p of[t.x0,t.x1])n.add(Ct(p-.006,p+.006,t.y0,t.y1,e-.006,e,i));n.add(Ct(t.x0-.01,t.x1+.01,t.y0-.012,t.y0-.002,cn.z0-.03,cn.z0+.002,"#0b0e10"));for(let p of Lu)n.add(Ct(p-.012,p+.012,.875,.895,-4,cn.z0-.03,s,"#a7b0b4"));let o=Ll;for(let[p,y]of[[-4,-3.992],[-4.208,-4.2]])n.add(Ct(o.x0,o.x1,o.y0,o.y1,p,y,"#2a3134")),n.add(Ct(o.x0-.012,o.x0,o.y0,o.y1,p-.002,y+.002,"#7d8a8c"),Ct(o.x1,o.x1+.012,o.y0,o.y1,p-.002,y+.002,"#7d8a8c")),n.add(Ct(o.x0,o.x1,o.y0-.012,o.y0,p-.002,y+.002,"#7d8a8c"));let[a,l,c]=hs;n.add(Ct(a-.09,a+.09,l-.015,l+.015,c-.035,c-.005,"#a9b2b5"));for(let p of[-.075,.075])n.add(Ct(a+p-.012,a+p+.012,l-.012,l+.012,c-.005,-4.2,"#a9b2b5"));let u=11,f=()=>(u=u*16807%2147483647)/2147483647;for(let p=0;p<18;p++){let y=Lu[p%2]+(f()-.5)*.12,g=-3.4-f()*.55,d=.012+f()*.014,_=p<6?.895:0;n.add(Ct(y-d,y+d,_,_+.004,g-d,g+d,r))}let h=xp(),m=new Ae;return m.add(new Bt(n.merge(),h)),{g:m,mats:[h],textures:[]}}function fS(){let n=rp(),t=new Ae,e=sr(-.2,-.02,.032),i=new k(0,Math.cos(En),Math.sin(En)),s=new k(0,-Math.sin(En),Math.cos(En)),r=new he().makeBasis(new k(-1,0,0),s,i).setPosition(e),o=new Bt(ms(.64,.4).applyMatrix4(r),_o(n)),a=sr(.42,.08,.04),l=new be({color:"#e8f0ea",transparent:!0,opacity:0,depthWrite:!1}),c=new Bt(new is(.06,.009,6,24),l);return c.position.copy(a),c.rotation.x=En-Math.PI/2,t.add(o,c),{g:t,mats:[o.material,l],textures:[n],ring:c}}function pS(){let n=new je,t="#2f3438",e="#7c8487",[i,,s]=Dl[0];n.add(me(.12,.14,.03,12,t,{p:[i,.015,s]}),me(.012,.012,1.25,6,t,{p:[i,.64,s]})),n.add(me(.032,.026,.13,10,e,{p:[i-.03,1.29,s-.05],r:[-1.1,0,.35]}));let[r,o,a]=Dl[1];n.add(Ct(r-.04,r+.04,o-.06,o+.06,-4.24,-4.2,t)),n.add(me(.03,.026,.12,10,e,{p:[r,o,a-.02],r:[Math.PI/2,0,0]}));let[l,c,u]=Dl[2];n.add(me(.05,.06,.02,10,t,{p:[l,c+.01,u]}),me(.008,.008,.24,6,t,{p:[l,c+.13,u]})),n.add(me(.026,.022,.1,10,e,{p:[l,c+.27,u+.03],r:[1,0,0]}));let f=xp(),h=new Bt(n.merge(),f),m=op(),p=[];[[i,1.5,s],[r,1.36,a],[l,c+.46,u]].forEach(([E,A,x],b)=>p.push(ms(.14,.14,[b/4,.5,(b+1)/4,1]).rotateY(An).translate(E,A,x)));let[g,d,_]=Ul;p.push(ms(.3,.075,[0,0,1,.5]).rotateX(-.2).translate(g,d,_+.02));let w=new Bt(new je().add(...p).merge(),_o(m)),S=new Ae;return S.add(h,w),{g:S,mats:[f,w.material],textures:[m]}}function mS(){let n=ap(),t=new Ae,e=new Bt(ms(.42,.5).rotateY(Math.PI/2).translate(-6.918,.89,6),_o(n));return t.add(e),{g:t,mats:[e.material],textures:[n]}}function _p(){let n=new Ae;n.name="details";let t={lock:uS(),fog:hS(),drawer:dS(),cue:fS(),audio:pS(),poster:mS()};for(let[r,o]of Object.entries(t)){o.g.name="detail:"+r,o.g.visible=!1,o.level=0,n.add(o.g);for(let a of o.mats)a.userData.maxOpacity==null&&(a.userData.maxOpacity=1)}t.fog.mats[0].userData.maxOpacity=.13;function e(r,o){r.level=o,r.g.visible=o>.001;for(let a of r.mats)a.opacity=o*a.userData.maxOpacity}let i=new Set,s=!1;return{root:n,parts:t,set(r,{tween:o,instant:a}){i=new Set(r||[]);for(let[l,c]of Object.entries(t)){let u=s||i.has(l)?1:0;if(u===c.level)continue;if(!u||a){e(c,u);continue}let f=c.level;o(cS,h=>e(c,f+(u-f)*h))}},force(r,o){s=r,this.set([...i],o)},hideAll(r){n.visible=!r},unlocked(){return[...i]},dispose(){for(let r of Object.values(t))r.textures.forEach(o=>o?.dispose()),r.mats.forEach(o=>o.dispose()),r.g.traverse(o=>o.geometry?.dispose())}}}var yp=2;function vp(n){let t=new Yr("#9fb7d6","#2a2018",1.1*yp),e=new Jr("#fff1dc",1.4*yp);return e.position.set(6,10,-4),n.add(t,e,e.target),{hemi:t,sun:e}}function Sp(){let n=new Nn({uniforms:{uColor:{value:new Wt("#000000")},uOpacity:{value:0}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uOpacity; void main(){ gl_FragColor = vec4(uColor, uOpacity); }",transparent:!0,depthTest:!1,depthWrite:!1}),t=new Bt(new an(2,2),n);return t.frustumCulled=!1,t.renderOrder=1e3,t.visible=!1,t.name="overlay",{mesh:t,get value(){return n.uniforms.uOpacity.value},set(e,i){i&&n.uniforms.uColor.value.set(i),n.uniforms.uOpacity.value=e,t.visible=e>.001},color(){return"#"+n.uniforms.uColor.value.getHexString()},dispose(){t.geometry.dispose(),n.dispose()}}}function Mp(n=44){let t=new Hr(1,1),e=new Ye({color:"#e8eef0",emissive:"#5a6466",transparent:!0,opacity:0,depthWrite:!1}),i=new ii(t,e,n);i.instanceMatrix.setUsage(Ks),i.visible=!1,i.name="fog",i.renderOrder=6;let s=3,r=()=>(s=s*16807%2147483647)/2147483647,o=Array.from({length:n},()=>({x:(r()-.5)*2.8,y:.3+r()*1.3,z:-3+(r()-.5)*2.2,s:.25+r()*.35,ph:r()*6.28,sp:.3+r()*.5})),a=new ke;function l(u,f=1){o.forEach((h,m)=>{a.position.set(h.x+.15*Math.sin(u*h.sp+h.ph),h.y+.08*Math.sin(u*h.sp*.7+h.ph),h.z+.12*Math.cos(u*h.sp+h.ph));let p=h.s*(.6+.4*f);a.scale.set(p,p*.8,p),a.updateMatrix(),i.setMatrixAt(m,a.matrix)}),i.instanceMatrix.needsUpdate=!0}l(0);let c=0;return{mesh:i,get level(){return c},set(u,f=0){c=u,e.opacity=.55*u,i.visible=u>.001,l(f,u)},animate(u){i.visible&&l(u,c)},dispose(){t.dispose(),e.dispose()}}}var Gl={color:"#ffe2a8",opacity:.55,pad:.03,grow:.06};function bp(n,[t,e,i,s,r,o]){let a=Gl.pad,l=new be({color:Gl.color,transparent:!0,opacity:0,blending:yi,depthWrite:!1}),c=new Bt(new Xn(e-t+a*2,s-i+a*2,o-r+a*2),l);return c.position.set((t+e)/2,(i+s)/2,(r+o)/2),c.renderOrder=7,c.visible=!1,n.add(c),{mesh:c,set(u){l.opacity=Gl.opacity*u,c.scale.setScalar(1+Gl.grow*u),c.visible=u>.001},remove(){n.remove(c),c.geometry.dispose(),l.dispose()}}}function wp(){let n=new Bi(.9,3.4,20,1,!0).rotateZ(Math.PI/2).translate(1.7,0,0),t=new be({color:"#ffcf7a",transparent:!0,opacity:0,blending:yi,depthWrite:!1,side:Ze}),e=new Bt(n,t);return e.visible=!1,e.renderOrder=8,{mesh:e,set(i){t.opacity=.22*i,e.visible=i>.001},dispose(){n.dispose(),t.dispose()}}}function Tp(){let n=new Bi(1,3.2,20,1,!0).translate(0,1.6,0),t=new be({color:"#fff0cc",transparent:!0,opacity:0,blending:yi,depthWrite:!1,side:Ze}),e=new Bt(n,t);return e.visible=!1,e.renderOrder=1001,e.position.set(0,0,-3),{mesh:e,set(i){t.opacity=.35*i,e.visible=i>.001},dispose(){n.dispose(),t.dispose()}}}var bi={fov:50,baseAspect:4/3,filter:"grayscale(1) contrast(1.15) brightness(1.05)",look:[0,1.05,(cn.z0+cn.z1)/2]};function Ap(n){let t=new dn(bi.fov,1,.05,40);t.position.set(ai[0],ai[1],ai[2]-.3),t.lookAt(bi.look[0],bi.look[1],bi.look[2]);let e=!1,i=null,s=n.renderer?.domElement;function r(){let{width:o,height:a}=n.size,l=n.insets||{top:0,bottom:0,left:0,right:0};t.aspect=o/Math.max(1,a);let c=Math.tan(bi.fov*Math.PI/360);t.fov=t.aspect>bi.baseAspect?Math.atan(c*bi.baseAspect/t.aspect)*360/Math.PI:bi.fov;let u=-(l.left-l.right)/2,f=-(l.top-l.bottom)/2;u||f?t.setViewOffset(o,a,u,f,o,a):t.clearViewOffset(),t.updateProjectionMatrix(),t.updateMatrixWorld()}return{camera:t,get on(){return e},enter(){e||(e=!0,t.zoom=1,r(),i=n.onResize(()=>{r()}),s&&(s.style.filter=bi.filter),n.overrideCamera(t))},exit(){e&&(e=!1,i?.(),i=null,t.zoom=1,s&&(s.style.filter=""),n.overrideCamera(null))},refit(){e&&(r(),n.request())},get zoom(){return t.zoom},setZoom(o){t.zoom=o,t.updateProjectionMatrix(),n.request()}}}var gS=.42,xS=.35,gs={minMs:1e3,margin:.88,baseMargin:1.04,share:.5},qu=-(Nl.z0-(Pl[3]+.02)),_S=n=>$n.find(t=>t.id===n);function yS(n){let t=new Set,e=!1,i=n.reduced();return{reduced:i,get stopped(){return e},wait(s){if(e)return Promise.resolve();let r=i?Math.min(s,100):s;return new Promise(o=>{let a={res:o,t:setTimeout(()=>{t.delete(a),o()},r)};t.add(a)})},tw(s,r){return e||i?(r(1),n.stage.request(),Promise.resolve()):n.stage.tween(s,r)},fly(s,r=900){return n.stage.flyTo(s,e||i?0:r)},stop(){e=!0;for(let s of t)clearTimeout(s.t),s.res();t.clear(),n.stage.finishTweens()}}}function Ep(n){let t=null,e=null,i=null,s={on:!1,ghosts:{},extras:[],beamHold:null,beamTimer:0},r=Promise.resolve(),o=0;function a(T,C,L){t||(n.savedYaw=n.stage.rig.yaw),l();let G=++o,Q=r.then(async()=>{if(G!==o)return;let ut=yS(n);t=ut,e=T,n.stage.setInput(!1);let V=/^(ev|story):/.test(T);V&&(n.spots.root.visible=!1);let rt=et=>{try{L?.(et)}catch(dt){console.error(dt)}};try{await C(ut,rt)}finally{V&&(n.spots.root.visible=!s.on),t===ut&&(t=null,e=null,n.stage.setInput(!0)),n.stage.request(),n.kick()}});return r=Q.catch(ut=>console.error(ut)),Q}function l(){t&&t.stop()}let c=[],u=T=>{let C=bp(n.fxRoot,T);return c.push(C),C},f=()=>{for(;c.length;)c.pop().remove()};async function h(T,C,L=1,G=350,Q=350){for(let ut=0;ut<L;ut++)await T.tw(G,V=>C.set(V)),await T.tw(Q,V=>C.set(1-V))}function m(T){let C=Bu(Fu);C.opacity=0;let L=kl(_S(T),C,{});return L.root.visible=!1,n.ghostRoot.add(L.root),L.fade=G=>{C.opacity=Fu.opacity*G,L.root.visible=G>.001},L.remove=()=>{n.ghostRoot.remove(L.root),C.dispose()},L}async function p(T,C,L,G=1.1){for(let[Q,ut]of L){let V=C.root.position.x,rt=C.root.position.z,et=Math.hypot(Q-V,ut-rt);et<.001||(C.root.rotation.y=Math.atan2(Q-V,ut-rt),await T.tw(et/G*1e3,dt=>{C.root.position.x=V+(Q-V)*dt,C.root.position.z=rt+(ut-rt)*dt}))}}let y=(T,C,L)=>{T.root.rotation.y=Math.atan2(C,L)};function g(T,C,L,G=900){return T.shot={box:C,opts:L,margin:L.margin??gs.baseMargin},T.fly(n.poseBox(C,L),G)}function d(T,C){if(C<gs.minMs||T.reduced||T.stopped)return T.wait(C);if(n.cctv.on){let G=n.cctv.zoom,Q=G+(gs.baseMargin/gs.margin-G)*gs.share;return T.tw(C,ut=>n.cctv.setZoom(G+(Q-G)*ut))}if(!T.shot)return T.wait(C);let L=T.shot.margin+(gs.margin-T.shot.margin)*gs.share;return T.shot.margin=L,T.fly(n.poseBox(T.shot.box,{...T.shot.opts,margin:L}),C)}let _=us,w=Ll,S={"ev:lock":async(T,C)=>{let L=u([-.58,.58,.88,1.04,3.99,4.05]),G=u([.77,1.13,.86,1.14,4.04,4.08]),Q=u([-.56,.56,0,1.2,3.92,3.98]),ut=u([-1.1,-.8,.84,1.14,4.04,4.1]);try{await g(T,[-1.5,1.5,0,1.3,3.6,5],{yaw:.3,pitch:.75}),C("locked"),await T.tw(500,V=>{G.set(V),L.set(V)}),await d(T,900),await T.tw(400,V=>{G.set(1-V),L.set(1-V)}),C("opened"),await T.tw(500,V=>Q.set(V)),await d(T,800),await T.tw(400,V=>Q.set(1-V)),C("seal"),await h(T,L,2),C("patrol"),await T.tw(500,V=>ut.set(V)),await d(T,700),await T.tw(400,V=>ut.set(1-V)),C("late"),await h(T,ut,1,500,500),await d(T,300)}finally{f(),await n.restFocus("lock",T)}},"ev:fog":async(T,C)=>{let L=n.S,G=m("sera"),Q=n.stage.hold(),ut={overlay:n.overlay.value,color:n.overlay.color()};n.cctv.enter(),L.cctvWalls.visible=!0,n.details.hideAll(!0),n.spots.root.visible=!1,n.pins.mesh.visible=!1,n.dollRoot.visible=!1,n.overlay.set(0),L.lens.position.fromArray(Kn),L.lens.visible=!0;try{G.root.position.set(1.5,0,-1.9),G.fade(1),C("0152"),await p(T,G,[[.95,-3],[.95,-3.65],[.15,-3.65]],1.6),y(G,0,1),await T.tw(600,V=>{G.upper.rotation.x=1.25*V}),await d(T,600),await T.tw(500,V=>{G.upper.rotation.x=1.25*(1-V)}),await p(T,G,[[.95,-3.65],[.95,-3],[1.6,-1.8]],1.6),await T.tw(300,V=>G.fade(1-V)),C("021659"),await d(T,1e3),C("021700"),await T.tw(450,V=>{n.fog.set(V,performance.now()/1e3),n.overlay.set(V,"#ffffff")}),L.lens.visible=!1,await d(T,1600),C("021708"),await T.tw(800,V=>{n.overlay.set(1-V,"#ffffff"),n.fog.set(1-V,performance.now()/1e3)}),await d(T,700),C("device"),await d(T,1100)}finally{G.remove(),Q(),n.fog.set(0),L.lens.visible=!1,L.cctvWalls.visible=!1,n.overlay.set(ut.overlay,ut.color),n.details.hideAll(!1),n.spots.root.visible=!0,n.pins.mesh.visible=n.pins.shown().length>0,n.dollRoot.visible=!0,n.cctv.exit()}},"ev:drawer":async(T,C)=>{let L=n.S,G=new Bt(L.plate.geometry,Bu());G.material.opacity=0,G.visible=!1,n.fxRoot.add(G);let Q=u([_.x0,_.x1,_.y0,_.y1,_.z0,_.z1]),ut=u([hs[0]-.12,hs[0]+.12,hs[1]-.06,hs[1]+.06,-4.32,-4.2]),V=u([w.x0,w.x1,w.y0,w.y1,-3.995,-3.96]),rt=u([-.24,.24,.86,.91,-4,cn.z0-.02]),et=u([-.3,.3,0,.03,-3.98,-3.35]);try{await Promise.all([g(T,[-1.3,1.3,0,1.4,-4.3,-2.6],{yaw:-2.3,pitch:.82}),T.tw(500,dt=>n.setPartition(1-.72*dt))]),C("cover"),await h(T,Q,1,500,700),C("slide"),G.position.set(0,0,0),await T.tw(300,dt=>{G.material.opacity=gS*dt,G.visible=!0}),await T.tw(1200,dt=>{G.position.z=qu*dt}),await d(T,300),await T.tw(1100,dt=>{G.position.z=qu+(-.03-qu)*dt}),await d(T,500),C("handle"),await h(T,ut,1,500,700),C("nohandle"),await h(T,V,1,500,700),C("wax"),await T.tw(500,dt=>{rt.set(dt),et.set(dt)}),await d(T,800),await T.tw(500,dt=>{rt.set(1-dt),et.set(1-dt)})}finally{n.fxRoot.remove(G),G.material.dispose(),f(),n.setPartition(1),await n.restFocus("drawer",T)}},"ev:cue":async(T,C)=>{let L=u([.62,1.38,.8,1.02,-5.12,-4.86]),G=u([1.54,1.7,.86,.98,-5.1,-4.98]);try{await g(T,[.3,2.1,0,1,-5.5,-4.4],{yaw:Math.PI,pitch:1}),C("schedule"),await h(T,L,1,400,600),await d(T,400),C("run"),await d(T,1500),C("sign"),await h(T,G,1,450,650),await d(T,400),C("bundle"),await d(T,1500),C("remote"),await d(T,1400)}finally{f(),await n.restFocus("cue",T)}},"ev:audio":async(T,C)=>{let L=u([8.28,8.62,.78,1.02,-8.56,-8.4]),G=[u([.66,.94,1.15,1.6,-2.14,-1.86]),u([1.68,1.92,.92,1.46,-4.42,-4.18]),u([7.44,7.66,.78,1.26,-8.42,-8.18])];try{await g(T,[6.9,9.1,0,1.2,-8.9,-7.1],{yaw:An,pitch:.92}),C("0210"),await h(T,L,1,400,600),C("channels"),await g(T,[-.2,9.1,0,1.5,-8.9,-1.6],{yaw:An,pitch:.92});for(let Q of G)await h(T,Q,1,300,450);C("021700"),await T.tw(400,Q=>G.forEach(ut=>ut.set(.6*Q))),await d(T,700),await T.tw(400,Q=>G.forEach(ut=>ut.set(.6*(1-Q)))),C("021703"),await h(T,G[1],2,220,260),C("021705"),await h(T,G[2],2,220,260),await d(T,500)}finally{f(),await n.restFocus("audio",T)}},"ev:poster":async(T,C)=>{let Q=u([-6.93,-6.9,.888,.925,5.78,6.2]),ut=u([-6.93,-6.9,.832,.87,5.8,6.18]),V=u([-6.93,-6.9,.797,.834,5.8,6.18]),rt=u([-6.93,-6.9,.68,.76,5.82,6.12]),et=new Bt(Qe(.1,.07,.1,"#5a4632",{}),n.S.solid.material);et.position.set(-6.6,.72,5.96),et.visible=!1,n.fxRoot.add(et);try{await g(T,[-7,-6.6,.6,1.2,5.65,6.35],{yaw:Math.PI/2,pitch:.6,margin:1.15}),C("credit"),await h(T,Q,1,450,700),C("pencil"),await h(T,ut,1,450,700),C("pen"),await h(T,V,1,450,700),C("stamp"),et.visible=!0,await T.tw(260,dt=>{et.position.x=-6.6-.25*dt}),await T.tw(220,dt=>{et.position.x=-6.85+.25*dt,rt.set(dt)}),et.visible=!1,await d(T,700),await T.tw(500,dt=>rt.set(1-dt)),await d(T,300)}finally{n.fxRoot.remove(et),et.geometry.dispose(),f(),await n.restFocus("poster",T)}},"verdict:dim":async T=>{let C=n.overlay.value;await T.tw(600,L=>n.overlay.set(C+(.4-C)*L,"#000000"))},"verdict:clear":async T=>{let C=n.overlay.value;await T.tw(500,L=>n.overlay.set(C*(1-L)))},"verdict:win":async T=>{let C=n.overlay.value,L=n.S.displayPool,G=L.renderOrder;try{await T.tw(400,Q=>n.overlay.set(C+(.6-C)*Q,"#000000")),L.renderOrder=1002,await T.tw(700,Q=>n.spot.set(Q)),await T.wait(1e3),await T.tw(1e3,Q=>n.overlay.set(.6*(1-Q))),await T.tw(700,Q=>n.spot.set(1-Q))}finally{L.renderOrder=G,n.spot.set(0)}},intro:async T=>{await T.fly(n.poseBox([-1.4,1.4,0,1.4,-3.8,-2.2],{yaw:An,pitch:Fl}),0),await T.wait(700),await T.fly(n.viewPose("all"),5200)}};async function E(T,C){i&&i!==C&&await x(T,i);let L=n.dolls[C];if(!L)return;i=C;let G=li+gn.step,Q=L.root.position.z;await T.tw(gn.stepMs*Math.abs(G-Q)/gn.step,ut=>{L.root.position.z=Q+(G-Q)*ut}),await T.tw(gn.nodMs,ut=>{L.head.rotation.x=gn.nodAngle*Math.sin(Math.PI*ut)}),L.head.rotation.x=0}async function A(T,C){let L=n.dolls[C];L&&(await T.tw(gn.shortNodMs,G=>{L.head.rotation.x=gn.shortNodAngle*Math.sin(Math.PI*G)}),L.head.rotation.x=0)}async function x(T,C){let L=n.dolls[C];if(!L)return;let G=L.root.position.z;await T.tw(gn.stepMs*Math.abs(G-li)/gn.step,Q=>{L.root.position.z=G+(li-G)*Q}),L.head.rotation.x=0,i===C&&(i=null)}function b(T){return s.ghosts[T]||(s.ghosts[T]=m(T))}function F(){s.on||(s.on=!0,n.details.force(!0,{instant:!0,tween:n.stage.tween}))}function P(){if(!s.on)return;s.on=!1,l();for(let C of Object.values(s.ghosts))C.remove();s.ghosts={};for(let C of s.extras)n.fxRoot.remove(C),C.geometry.dispose(),C.material.dispose();s.extras=[],B(),n.beam.set(0);let T=n.S;T.lens.visible=!1,T.lens.material=n.mats.lens,T.lens.position.fromArray(Kn),T.drawer.position.z=0,T.plate.position.z=0,n.fog.set(0),n.setPool(1),n.setPartition(1),n.details.force(!1,{instant:!0,tween:n.stage.tween}),n.spots.root.visible=!0,n.stage.request()}function B(){s.beamHold?.(),s.beamHold=null,clearTimeout(s.beamTimer)}function z(T){let C=n.S;B(),n.beam.set(0);for(let L of Object.values(s.ghosts))L.fade(0),L.upper.rotation.x=0,Xu(L,!1);for(let L of s.extras)L.visible=!1;C.lens.material=n.mats.lens,C.lens.visible=T<=4||T===7,C.lens.position.fromArray(Kn),C.drawer.position.z=T===6?-.03:0,C.plate.position.z=0,n.fog.set(T===6?1:0),n.setPool(T===6?.25:1),n.setPartition(T===4||T===5?.28:1),T===5&&(n.fog.set(xS),n.setPool(.25))}let Z=()=>n.poseBox([-1.5,1.5,0,1.8,-4.2,-1.8],{yaw:An,pitch:.85}),I=()=>n.poseBox([-1.6,2.2,0,1.6,-6,-2.4],{yaw:An,pitch:.95}),H=()=>n.poseBox([-1.6,2.2,0,1.6,-6.4,-2.4],{yaw:An+Math.PI,pitch:.9}),K=[async T=>{let C=J("stampTool",()=>new Bt(Qe(.1,.07,.1,"#5a4632",{}),new be({color:"#5a4632"})));C.position.set(-6.6,.72,5.96);let L=u([-6.93,-6.9,.68,.76,5.82,6.12]);try{await T.fly(n.poseBox([-7,-6.6,.6,1.2,5.65,6.35],{yaw:Math.PI/2,pitch:.6,margin:1.15}),1e3),C.visible=!0,await T.tw(500,G=>{C.position.x=-6.6-.25*G}),await T.tw(400,G=>{C.position.x=-6.85+.25*G,L.set(G)}),C.visible=!1,await T.wait(900),await T.tw(600,G=>L.set(1-G))}finally{f()}},async T=>{let C=b("sera");await T.fly(Z(),1e3),C.root.position.set(1.5,0,-1.9),await T.tw(400,L=>C.fade(L)),await p(T,C,[[.95,-3],[.95,-3.65],[.15,-3.65]]),y(C,0,1),await T.tw(600,L=>{C.upper.rotation.x=1.25*L}),await T.wait(600),await T.tw(500,L=>{C.upper.rotation.x=1.25*(1-L)}),await p(T,C,[[.95,-3.65],[.95,-3],[1.6,-1.8]]),await T.tw(400,L=>C.fade(1-L))},async T=>{let C=u([-.58,.58,.88,1.04,3.99,4.05]),L=u([-.56,.56,0,1.2,3.92,3.98]);try{await T.fly(n.poseBox([-1.5,1.5,0,1.3,3.6,5],{yaw:.3,pitch:.75}),1e3),await T.tw(500,G=>L.set(.6*G)),await h(T,C,2,450,450),await T.tw(500,G=>L.set(.6*(1-G)))}finally{f()}},async T=>{let C=b("yujin"),L=J("recLamp",()=>new Bt(new Ln(.025,10,8),new be({color:"#ff3b30"})));L.position.set(ds[0]+.1,.83,ds[2]+.02),await T.fly(n.poseBox([6.8,9.1,0,1.4,-8.9,-7],{yaw:An,pitch:.9}),1e3),C.root.position.set(ds[0],0,-7.65),y(C,0,-1),Xu(C,!0),await T.tw(600,G=>C.fade(G)),await T.wait(500),L.visible=!0,n.stage.request(),await T.wait(1500)},async T=>{let C=b("doyun"),L=u([1.54,1.7,.86,.98,-5.1,-4.98]),G=n.stage.hold();try{n.setPartition(1),await Promise.all([T.fly(H(),1e3),T.tw(500,Q=>n.setPartition(1-.72*Q))]),C.root.position.set(Nu[0],0,-5.5),y(C,0,1),await T.tw(500,Q=>C.fade(Q)),await T.tw(400,Q=>{C.upper.rotation.x=.3*Q}),await T.tw(250,Q=>L.set(Q)),await T.tw(400,Q=>{C.upper.rotation.x=.3*(1-Q),L.set(1-Q)}),await T.tw(700,Q=>n.setPool(1-.75*Q)),await T.tw(1200,Q=>n.fog.set(Q,performance.now()/1e3)),await T.wait(800)}finally{f(),G()}},async T=>{let C=n.S,L=b("doyun"),G=u([1.68,1.92,.92,1.46,-4.42,-4.18]),Q=n.stage.hold(),ut=C.lens.position.clone();try{await T.fly(H(),900),L.root.position.set(Nu[0],0,-5.5),L.fade(1),await p(T,L,[[.45,-5.3],[.42,-4.7]]),y(L,-1,1),await T.tw(400,et=>{L.upper.rotation.x=-.18*et}),await T.tw(900,et=>{C.drawer.position.z=-.6*et,C.lens.position.z=ut.z-.6*et}),await T.tw(900,et=>{C.plate.position.z=-.9*et,C.lens.position.z=ut.z-.6-.9*et}),await T.tw(500,et=>{L.upper.rotation.x=-.18*(1-et)});let V=C.lens.position.clone(),rt={x:fo[0],y:.745,z:fo[2]};C.lens.material=n.amberLens,n.stage.request(),await T.tw(900,et=>{C.lens.position.set(V.x+(rt.x-V.x)*et,V.y+(rt.y-V.y)*et+.35*Math.sin(Math.PI*et),V.z+(rt.z-V.z)*et)}),C.lens.material=n.mats.lens,n.stage.request(),await h(T,G,2,200,240),await T.tw(700,et=>{C.plate.position.z=-.9*(1-et)}),await T.tw(700,et=>{C.drawer.position.z=-.6+(.6-.03)*et}),await T.wait(500)}finally{C.lens.material=n.mats.lens,f(),Q()}},async T=>{let C=n.stage.hold();try{await T.fly(Z(),1e3),await T.tw(1600,L=>n.fog.set(1-L,performance.now()/1e3)),await T.wait(1200)}finally{C()}},async T=>{let C=n.S;if(C.lens.visible=!1,await T.fly(Z(),1e3),C.lens.material=n.amberLens,C.lens.visible=!0,n.beam.mesh.position.set(Kn[0],Kn[1]+.12,Kn[2]),await T.tw(900,L=>{n.beam.set(L),n.setPool(1)}),!T.reduced&&!T.stopped){s.beamHold=n.stage.hold();let L=performance.now();n.beam.spin=()=>{n.beam.mesh.rotation.y=(performance.now()-L)/1e3*(Math.PI*2/12)},s.beamTimer=setTimeout(B,24e3)}await T.wait(1200)}];function J(T,C){let L=s.extras.find(G=>G.name===T);return L||(L=C(),L.name=T,n.fxRoot.add(L),s.extras.push(L)),L.visible=!1,L}return{get playing(){return e},get storyOn(){return s.on},play(T,{onCue:C}={}){if(T.startsWith("talk:nod:")){let G=T.slice(9);return a(T,Q=>A(Q,G))}if(T.startsWith("talk:")){let G=T.slice(5);return a(T,Q=>G==="end"?i?x(Q,i):Promise.resolve():E(Q,G))}let L=S[T];return L?a(T,L,C):Promise.resolve()},stop(){o++,l()},story(T){return T=Math.max(0,Math.min(7,T|0)),F(),a("story:"+T,async C=>{z(T),await K[T](C)})},storyExit:P,dispose(){P(),f()}}}var rr="02:17, \uB9C8\uC9C0\uB9C9 \uC810\uAC80",Cp="\uB2E8\uD3B8 \uCD94\uB9AC \xB7 \uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",Rp="\uC0C8\uBCBD \uB450 \uC2DC \uC2ED\uCE60 \uBD84. \uC720\uB9AC \uC9C4\uC5F4\uB300\uC5D0 \uC548\uAC1C\uAC00 \uBC00\uB824\uC624\uACE0, \uB4F1\uB300 \uC2DC\uC81C\uD488 \uB80C\uC988\uAC00 \uC0AC\uB77C\uC84C\uB2E4. \uC815\uBB38 \uBD09\uC778\uC740 \uADF8\uB300\uB85C\uB2E4. \uAC1C\uC7A5\uAE4C\uC9C0 \uB0A8\uC740 \uC870\uC0AC \uAE30\uD68C\uB294 \uC544\uD649 \uBC88, \uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uC138 \uBC88.",Ip=["\uD604\uC7A5\uC758 \uC99D\uAC70\uB97C \uCC98\uC74C \uD655\uC778\uD560 \uB54C, \uADF8\uB9AC\uACE0 \uC0AC\uB78C\uC5D0\uAC8C \uCC98\uC74C \uC9C8\uBB38\uD560 \uB54C \uC870\uC0AC \uAE30\uD68C\uB97C \uD55C \uBC88\uC529 \uC501\uB2C8\uB2E4. \uC99D\uAC70 \uC5EC\uC12F \uAC1C\uC640 \uC0AC\uB78C \uB124 \uBA85\uC744 \uD569\uCE58\uBA74 \uC5F4\uC778\uB370 \uAE30\uD68C\uB294 \uC544\uD649 \uBC88\uC774\uB77C, \uD558\uB098\uB294 \uAC74\uB108\uB6F0\uC5B4\uC57C \uD569\uB2C8\uB2E4.","\uB2E4\uC2DC \uC77D\uAE30, \uC99D\uAC70 \uC81C\uC2DC, \uAE30\uB85D \uACE0\uC815, \uD78C\uD2B8\uC5D0\uB294 \uC870\uC0AC \uAE30\uD68C\uB97C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uBA74\uB2F4\uC5D0\uC11C \uC774\uBBF8 \uC9C8\uBB38\uD55C \uC0AC\uB78C\uC5D0\uAC8C\uB294, \uD604\uC7A5\uC5D0\uC11C \uD655\uC778\uD574 \uB454 \uC99D\uAC70\uB97C \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uACB0\uB860\uC740 \uBC94\uC778 \uD55C \uBA85\uACFC \uC99D\uAC70 \uB450 \uAC1C\uB85C \uB0C5\uB2C8\uB2E4. \uD55C \uC99D\uAC70\uB294 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744, \uB2E4\uB978 \uD55C \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC758 \uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098\uB294 \uC9C0\uC810\uC744 \uBCF4\uC5EC \uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uB450 \uC99D\uAC70 \uBAA8\uB450 \uADF8 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC5B4\uC57C \uC81C\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uC138 \uBC88\uC785\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uACE0, \uC138 \uBC88\uC744 \uB2E4 \uC4F0\uBA74 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.","\uC870\uC0AC \uAE30\uB85D\uC740 \uC774 \uAE30\uAE30\uC5D0 \uC790\uB3D9\uC73C\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC571\uC744 \uB2EB\uC558\uB2E4 \uC5F4\uC5B4\uB3C4 \uC774\uC5B4\uC11C \uD560 \uC218 \uC788\uACE0, \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC9C0\uC6CC\uC9D1\uB2C8\uB2E4(\uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4)."],Pp=["\uCC98\uC74C \uD655\uC778\xB7\uCC98\uC74C \uC9C8\uBB38\uC740 \uC870\uC0AC 1\uD68C","\uB2E4\uC2DC \uBCF4\uAE30\xB7\uC81C\uC2DC\xB7\uACE0\uC815\xB7\uD78C\uD2B8\uB294 \uBB34\uB8CC","\uACB0\uB860\uC740 \uD55C \uBA85 + \uC99D\uAC70 \uB450 \uAC1C, \uAE30\uD68C \uC138 \uBC88"],or={lock:[{cue:"locked",t:"01:58 \uC7A0\uAE40 \xB7 \uBD09\uC778"},{cue:"opened",t:"02:19 \uACBD\uBE44\uAC00 \uBD09\uC778\uC744 \uD655\uC778\uD558\uACE0 \uC5F4 \uB54C\uAE4C\uC9C0, \uBB38\uC774 \uC5F4\uB9B0 \uAE30\uB85D\uC740 \uD55C \uAC74\uB3C4 \uC5C6\uC74C"},{cue:"seal",t:"\uADF8\uB54C\uAE4C\uC9C0 \uAE30\uACC4\uC2DD \uBD09\uC778 \uBC88\uD638\uB294 \uB300\uC7A5\uACFC \uAC19\uC558\uACE0, \uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C"},{cue:"patrol",t:"\uC815\uBB38 \uC606 \uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94\uB294 30\uBD84\uB9C8\uB2E4 \uB20C\uB7EC\uC57C \uD568"},{cue:"late",t:"02:00 \uCC28\uB840\uAC00 02:09\uC5D0 \uB20C\uB9BC"}],fog:[{cue:"0152",t:"01:52 \uBB38\uC138\uB77C\uAC00 \uBC1B\uCE68\uB300 \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5 \uCABD\uC73C\uB85C \uD5C8\uB9AC\uB97C \uC219\uC600\uB2E4\uAC00 \uB098\uAC10"},{cue:"021659",t:"02:16:59\uAE4C\uC9C0 \uB80C\uC988\uB294 \uC81C\uC790\uB9AC"},{cue:"021700",t:"02:17:00 \uC548\uAC1C\uAC00 \uD130\uC838 8\uCD08 \uB3D9\uC548 \uD654\uBA74\uC774 \uD558\uC597\uAC8C \uAC00\uB824\uC9D0"},{cue:"021708",t:"\uC548\uAC1C\uAC00 \uAC77\uD78C \uD654\uBA74\uC5D0\uB294 \uB80C\uC988\uAC00 \uC5C6\uC74C \xB7 \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44 \xB7 \uD654\uBA74\uC5D0 \uC0AC\uB78C\uC740 \uC7A1\uD788\uC9C0 \uC54A\uC74C"},{cue:"device",t:"\uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D: \u2018\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9\u2019"}],drawer:[{cue:"cover",t:"\uC720\uB9AC \uB36E\uAC1C\uB294 \uC55E\uACFC \uC606, \uC704\uB9CC \uB9C9\uC74C"},{cue:"slide",t:"\uB4A4\uCABD\uC740 \uC815\uBE44\uC6A9 \uC11C\uB78D\uC758 \uC55E\uD310 \u2014 \uC11C\uB78D\uC744 \uB2F9\uAE30\uBA74 \uB80C\uC988\uB97C \uC62C\uB824 \uB454 \uBC1B\uCE68\uD310\uC774 \uD1B5\uC9F8\uB85C \uB4A4\uB85C \uBE60\uC838\uB098\uC634"},{cue:"handle",t:"\uC190\uC7A1\uC774\uB294 \uCE78\uB9C9\uC774\uBCBD\uC758 \uC810\uAC80\uAD6C \uB108\uBA38, \uC870\uBA85 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uB2EC\uB824 \uC788\uC74C"},{cue:"nohandle",t:"\uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC774\uCABD\uC5D0\uC11C\uB294 \uB2F9\uAE38 \uC218 \uC5C6\uC74C"},{cue:"wax",t:"\uC11C\uB78D\uC740 \uC190\uAC00\uB77D \uB450 \uB9C8\uB514\uB9CC\uD07C \uB35C \uB2EB\uD600 \uC788\uACE0, \uB808\uC77C\uACFC \uADF8 \uC544\uB798 \uBC14\uB2E5\uC5D0 \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8"}],cue:[{cue:"schedule",t:"\uC608\uC57D\uD45C\uC5D0 \uC62C\uB77C \uC788\uB294 \uC790\uB3D9 \uC810\uAC80\uC740 02:30 \uD55C \uAC74\uBFD0"},{cue:"run",t:"\uC2E4\uD589 \uAE30\uB85D: 02:17:00\uC5D0 \uD050 \uD558\uB098\uAC00 \uC2E4\uD589\uB428"},{cue:"sign",t:"\uC2E4\uD589 \uBC29\uC2DD \u2018\uC218\uB3D9\u2019 \xB7 \uC785\uB825 \uC704\uCE58 \u2018\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94\u2019 \xB7 \uC11C\uBA85 \uCE78 \u2018H.D.Y.\u2019"},{cue:"bundle",t:"\uC774 \uD050\uC5D0\uB294 \uC9C4\uC5F4\uB300 \uC870\uBA85\uC744 \uB0AE\uCD94\uB294 \uB3D9\uC791\uACFC \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638\uAC00 \uD568\uAED8 \uBB36\uC5EC \uC788\uC74C"},{cue:"remote",t:"\uC6D0\uACA9 \uC811\uC18D \uAE30\uB85D\uC740 \uC5C6\uC74C"}],audio:[{cue:"0210",t:"02:10\uBD80\uD130 \uB04A\uAE40 \uC5C6\uC774 \uC774\uC5B4\uC9C4 \uB179\uC74C"},{cue:"channels",t:"1\uBC88 \uCC44\uB110 \uC9C4\uC5F4\uB300 \uC55E \uB9C8\uC774\uD06C \xB7 2\uBC88 \uCC44\uB110 \uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C \xB7 3\uBC88 \uCC44\uB110 \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC758 \uBA54\uBAA8\uC6A9 \uB9C8\uC774\uD06C"},{cue:"021700",t:"02:17:00 \uC548\uAC1C \uBD84\uC0AC\uC74C \uC2DC\uC791"},{cue:"021703",t:"02:17:03 2\uBC88 \uCC44\uB110\uC5D0\uB9CC \uAE08\uC18D\uC774 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uD06C\uAC8C \uC7A1\uD798"},{cue:"021705",t:"02:17:05 3\uBC88 \uCC44\uB110\uC5D0 \u201C\uC5B4, \uBC8C\uC368?\u201D\uB77C\uB294 \uC11C\uC720\uC9C4\uC758 \uBAA9\uC18C\uB9AC"}],poster:[{cue:"credit",t:"\uD06C\uB808\uB514\uD2B8\uC758 \u2018\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04\u2019\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C \uD55C \uC0AC\uB78C\uC758 \uC774\uB984\uB9CC \uC2E4\uB824 \uC788\uC74C"},{cue:"pencil",t:"\uC5EC\uBC31\uC758 \uC5F0\uD544 \uBA54\uBAA8: \u2018\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD\u2019"},{cue:"pen",t:"\uD30C\uB780 \uD39C \uBA54\uBAA8: \u2018\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4\u2019"},{cue:"stamp",t:"\uB450 \uBA54\uBAA8 \uC704\uC5D0 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5 \xB7 \uB3C4\uC7A5\uC5D0 \uC801\uD78C \uC2DC\uAC01 01:40"}]},xs={min:{place:"door-out",label:"\uBCF8\uC778 \uC9C4\uC220: \uC815\uBB38 \uC55E"},sera:{place:"conservation",label:"\uBCF8\uC778 \uC9C4\uC220: \uBCF4\uC874\uC2E4"},doyun:{place:"west-corridor",label:"\uBCF8\uC778 \uC9C4\uC220: \uB85C\uBE44 \uCABD \uBCF5\uB3C4"},yujin:{place:"sound-desk",label:"\uBCF8\uC778 \uC9C4\uC220: \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C"}},tn=[["01:40","\uD64D\uBCF4 \uD328\uB110 \uAD50\uC815\uC9C0\uC5D0 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5\uC774 \uCC0D\uD614\uC2B5\uB2C8\uB2E4. \uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C\uC758 \uC774\uB984\uB9CC \uB0A8\uC558\uC2B5\uB2C8\uB2E4."],["01:52","\uBB38\uC138\uB77C\uAC00 \uB9C8\uC9C0\uB9C9 \uC810\uAC80\uC744 \uD588\uACE0, \uBC1B\uCE68\uB300 \uB4A4 \uBC14\uB2E5\uC740 \uAE68\uB057\uD588\uC2B5\uB2C8\uB2E4."],["01:58","\uC815\uBB38\uC774 \uC7A0\uAE30\uACE0 \uBD09\uC778\uB410\uC2B5\uB2C8\uB2E4. 02\uC2DC 19\uBD84\uC5D0 \uBD09\uC778\uC744 \uD480 \uB54C\uAE4C\uC9C0 \uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."],["02:10","\uC11C\uC720\uC9C4\uC774 02\uC2DC 30\uBD84 \uC810\uAC80\uC744 \uAE30\uB2E4\uB9AC\uBA70 \uB179\uC74C\uC744 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4."],["02:17:00","\uD55C\uB3C4\uC724\uC774 \uC870\uBA85 \uBD80\uC2A4 \uCF58\uC194\uC5D0\uC11C \uD050\uB97C \uC190\uC73C\uB85C \uC2E4\uD589\uD588\uC2B5\uB2C8\uB2E4. \uC9C4\uC5F4\uB300 \uC870\uBA85\uC774 \uB0AE\uC544\uC9C0\uACE0 \uC548\uAC1C\uAC00 \uD130\uC84C\uC2B5\uB2C8\uB2E4."],["02:17:03","\uD55C\uB3C4\uC724\uC774 \uBD80\uC2A4 \uC548\uCABD \uC190\uC7A1\uC774\uB85C \uC815\uBE44 \uC11C\uB78D\uC744 \uB2F9\uACA8 \uB80C\uC988\uB97C \uBC1B\uCE68\uD310\uC9F8 \uBE7C\uB0C8\uACE0, \uC7A5\uBE44 \uC218\uB808\uC5D0 \uC2E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC218\uB808\uC758 \uC7A0\uAE08\uC1E0\uAC00 \uB538\uAE4D \uC18C\uB9AC\uB97C \uB0C8\uC2B5\uB2C8\uB2E4."],["02:17:08","\uC548\uAC1C\uAC00 \uAC77\uD614\uC744 \uB54C \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44\uC600\uACE0 \uB80C\uC988\uB9CC \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4."]],ar={title:"\uC0AC\uAC74 \uD574\uACB0",lead:"\uC548\uAC1C\uAC00 \uAC77\uD614\uC2B5\uB2C8\uB2E4. \uB80C\uC988\uAC00 \uC0AC\uB77C\uC9C0\uB294 \uB3D9\uC548 \uC815\uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",method:"\uBB38\uC744 \uC5F4 \uD544\uC694\uAC00 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4. \uC815\uBE44 \uC11C\uB78D\uC740 \uC870\uBA85 \uBD80\uC2A4\uC5D0\uC11C\uB9CC \uB2F9\uAE38 \uC218 \uC788\uC5C8\uACE0, \uC548\uAC1C\uB294 02\uC2DC 30\uBD84 \uC790\uB3D9 \uC810\uAC80\uC5D0 \uBB36\uC5EC \uC788\uB358 \uAC83\uC744 13\uBD84 \uC55E\uB2F9\uACA8 \uC190\uC73C\uB85C \uD130\uB728\uB9B0 \uAC83\uC774\uC5C8\uC2B5\uB2C8\uB2E4.",cross:"\uC11C\uB78D\uC740 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uC5C8\uC9C0\uB9CC \uB204\uAC00 \uB2F9\uACBC\uB294\uC9C0\uB294 \uB9D0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC218\uB3D9 \uC2E4\uD589 \uAE30\uB85D\uC740 \uADF8 \uC2DC\uAC01 \uBD80\uC2A4 \uCF58\uC194 \uC55E\uC5D0 \uB204\uAC00 \uC788\uC5C8\uB294\uC9C0\uB97C \uBCF4\uC5EC \uC8FC\uC5C8\uC9C0\uB9CC \uB80C\uC988\uAC00 \uC5B4\uB5BB\uAC8C \uB098\uAC14\uB294\uC9C0\uB294 \uB9D0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB450 \uC99D\uAC70\uB294 02\uC2DC 17\uBD84\uC774\uB77C\uB294 \uAC19\uC740 \uC2DC\uAC01, \uC870\uBA85 \uBD80\uC2A4\uB77C\uB294 \uAC19\uC740 \uC790\uB9AC\uB97C \uAC00\uB9AC\uCF30\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01 \uBD80\uC2A4\uB97C \uBE44\uC6E0\uACE0 \uCF58\uC194\uC5D0 \uC190\uB3C4 \uB300\uC9C0 \uC54A\uC558\uB2E4\uB358 \uD55C\uB3C4\uC724\uC758 \uB9D0\uC740, \uC790\uC2E0\uC758 \uC11C\uBA85\uC774 \uB0A8\uC740 \uC218\uB3D9 \uC2E4\uD589 \uAE30\uB85D \uC55E\uC5D0\uC11C \uBB34\uB108\uC84C\uC2B5\uB2C8\uB2E4.",motive:"\uD55C\uB3C4\uC724\uC774 \uC124\uACC4\uD55C \uC5F0\uCD9C\uC778\uB370 \uBCF4\uB3C4\uC6A9 \uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C\uC758 \uC774\uB984\uB9CC \uC62C\uB790\uACE0, \uC815\uC815 \uC694\uCCAD\uC740 \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uADF8\uB294 \uADF8\uAC83\uC744 \uCC38\uC744 \uC218 \uC5C6\uC5C8\uB2E4\uACE0 \uB4A4\uB2A6\uAC8C \uC778\uC815\uD588\uC2B5\uB2C8\uB2E4. \uB80C\uC988\uB294 \uC870\uBA85 \uBD80\uC2A4\uC758 \uC7A5\uBE44 \uC218\uB808\uC5D0\uC11C \uB098\uC654\uACE0, \uC774\uC81C \uB2E4\uC2DC \uC81C\uC790\uB9AC\uC5D0\uC11C \uBE5B\uC744 \uB0C5\uB2C8\uB2E4."},Lp="\uC138 \uBC88 \uB0B8 \uACB0\uB860\uC774 \uBAA8\uB450 \uC785\uC99D\uC5D0 \uC774\uB974\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAC1C\uC7A5 \uC2DC\uAC01\uC774 \uB418\uC5B4 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB118\uC5B4\uAC11\uB2C8\uB2E4. \uB204\uAC00 \uD55C \uC77C\uC778\uC9C0\uB294 \uC5EC\uAE30\uC5D0 \uC801\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4.";function Yu(n){let t=[],e=/[.?!…]\s+/g,i=0,s;for(;s=e.exec(n);)t.push(n.slice(i,s.index+1)),i=s.index+s[0].length;t.push(n.slice(i));let r=[],o="";for(let a of t)o=o?o+" "+a:a,(o.length>=12||/[.?!]$/.test(o))&&(r.push(o),o="");return o&&r.push(o),r}var Zu=(n,t,e)=>{let i=n.charCodeAt(n.length-1);return i>=44032&&i<=55203&&(i-44032)%28?t:e},yo=["\uC601","\uD55C","\uB450","\uC138"],Np=["","\uCCAB","\uB450","\uC138"];function Dp(n){let t=Jf(),e=vp(n),i=dp(t);n.add(i.root);let s=mp(t);n.add(s.root);let r={geometry:new Ln(jn.proxyRadius,8,6),material:t.proxy},o=new Ae;o.name="dolls";let a={};for(let _ of $n){let w=kl(_,t.doll,{shadow:t.shadow,proxy:r});a[_.id]=w,o.add(w.root)}n.add(o);let l=gp();n.add(l.mesh);let c=_p();n.add(c.root);let u=new Ae;u.name="fx",n.add(u);let f=new Ae;f.name="ghosts",n.add(f);let h=Sp();n.add(h.mesh);let m=Mp();n.add(m.mesh);let p=wp();n.add(p.mesh);let y=Tp();n.add(y.mesh);let g=new be({color:"#ffb347"}),d=[...s.proxies,...Object.values(a).map(_=>_.root.userData.proxy)];return{scene:n,mats:t,lights:e,S:i,spots:s,dolls:a,dollRoot:o,pins:l,details:c,fxRoot:u,ghostRoot:f,overlay:h,fog:m,beam:p,spot:y,amberLens:g,proxyGeometry:r.geometry,pickables:d}}var vS=n=>{try{return matchMedia(n).matches}catch{return!1}};function Up(n,{onPick:t,onFrame:e,reducedMotion:i=!1}={}){let s=Dp(n.scene),{S:r,spots:o,dolls:a,pins:l,details:c,overlay:u,fog:f,beam:h}=s;n.limits.spanMax=40,n.limits.spanMin=.6,n.setPickables(s.pickables);let m=!!i,p=!1,y=!1,g=()=>m||vS("(prefers-reduced-motion: reduce)"),d=An,_="all",w=null,S=!1,E=!0,A="normal",x=new k,b=new k,F=new k,P=new k;function B([at,W,pt,yt,Ot,ne],{yaw:Yt=d,pitch:U=Fl,margin:ye=1.04}={}){let{width:Gt,height:ae}=n.size,ht=n.insets,Se=new k((at+W)/2,(pt+yt)/2,(Ot+ne)/2);F.set(Math.cos(U)*Math.sin(Yt),Math.sin(U),Math.cos(U)*Math.cos(Yt)),x.set(Math.cos(Yt),0,-Math.sin(Yt)),b.crossVectors(F,x);let Dt=0,kt=0;for(let X of[at,W])for(let lt of[pt,yt])for(let st of[Ot,ne])P.set(X,lt,st).sub(Se),Dt=Math.max(Dt,Math.abs(P.dot(x))),kt=Math.max(kt,Math.abs(P.dot(b)));let R=Math.max(.25,(ae-ht.top-ht.bottom)/ae),v=Math.max(.25,(Gt-ht.left-ht.right)/Gt);return{target:Se,yaw:Yt,pitch:U,span:Math.max(kt/R,Dt/(Gt/ae*v))*ye}}function z(at){let[W,pt,yt,Ot]=Ol[at]||Ol.all;return B([W,pt,0,1.2,yt,Ot],{margin:at==="hall"?1.01:1.04})}function Z(at){if(at&&at.startsWith("p:")){let Yt=$n.find(Gt=>"p:"+Gt.id===at);if(!Yt)return null;let U=Zf,ye=li+gn.step/2;return B([Yt.x-U.halfX,Yt.x+U.halfX,U.y0,U.y1,ye-U.halfZ,ye+U.halfZ],{yaw:U.yaw,pitch:U.pitch,margin:1})}let W=at&&fs[at.slice(2)];if(!W)return null;let[pt,yt,Ot]=W.focus,ne=tr.half;return B([pt-ne,pt+ne,0,yt+.6,Ot-ne,Ot+ne],{pitch:tr.pitch,margin:1})}let I=at=>g()?0:at,H=0,K=0;function J(){o.still();for(let at of Object.values(a))at.upper.scale.y=1}function T(){K=0;let at=typeof document<"u"&&document.hidden;if(y||p||g()||at||performance.now()>H){J(),n.request();return}n.request(),K=setTimeout(T,50)}function C(){y||p||g()||(H=performance.now()+9e3,K||T())}let L=n.onFrame((at,W)=>{let pt=W/1e3;!g()&&!p&&performance.now()<=H&&(o.animate(pt),$n.forEach((yt,Ot)=>{a[yt.id].upper.scale.y=1+gn.breathAmp*Math.sin(2*Math.PI*(pt+Ot*gn.phaseStep)/gn.breathPeriod)})),f.mesh.visible&&!g()&&f.animate(pt),h.mesh.visible&&h.spin&&h.spin()}),G=n.onChange(()=>{try{e?.()}catch(at){console.error(at)}});n.onUserMove(()=>{S=!0,C()});let Q=()=>{document.hidden||C()},ut=!1,V=n.renderer?.domElement,rt=()=>{ut=!0},et=()=>{ut=!1,n.request()};V?.addEventListener?.("webglcontextlost",rt),V?.addEventListener?.("webglcontextrestored",et),typeof document<"u"&&document.addEventListener("visibilitychange",Q);let dt=Ap(n);function bt(at){let W=r.partition.material,pt=at<.999;W.transparent!==pt&&(W.transparent=pt,W.depthWrite=!pt,W.needsUpdate=!0),W.opacity=at,r.partition.renderOrder=pt?3:0}function Vt(at){r.displayPool.material.opacity=at}let Pe={stage:n,S:r,mats:s.mats,dolls:a,dollRoot:s.dollRoot,spots:o,pins:l,details:c,overlay:u,fog:f,beam:h,spot:s.spot,cctv:dt,fxRoot:s.fxRoot,ghostRoot:s.ghostRoot,amberLens:s.amberLens,reduced:g,kick:C,poseBox:B,viewPose:z,setPartition:bt,setPool:Vt,restFocus:(at,W)=>W.fly(Z("e:"+at),tr.ms)},It=Ep(Pe);n.onTap(at=>{if(C(),at&&!It.playing)try{t?.(at)}catch(W){console.error(W)}});function le(){if(It.playing||S)return;let at=w?Z(w):z(_);at&&n.flyTo(at,0)}let ce=n.onResize(()=>{le()}),Jt=at=>n.toScreen(at),Ue=new k,Le={sync(at){if(!at)return;o.set(at.marks,at.selected,at.accuse),c.set(at.unlocked,{instant:E||g(),tween:(pt,yt)=>n.tween(I(pt),yt)}),l.set(at.claims);let W=at.mood||"normal";if(W!==A||E){if(W!=="win"&&It.storyOn&&It.storyExit(),!dt.on){let pt=W==="dim"?.4:0,yt=u.value;Math.abs(pt-yt)>.001&&n.tween(E?0:I(500),Ot=>u.set(yt+(pt-yt)*Ot,"#000000"))}A=W}E=!1,n.request(),C()},view(at,{instant:W,resetYaw:pt}={}){return Ol[at]||(at="all"),pt&&(d=An),_=at,w=null,S=!1,C(),n.flyTo(z(at),W?0:I(tr.ms))},rotate(at,{quiet:W=!1}={}){d+=(at<0?-1:1)*Math.PI/2,W||C();let pt=w&&w.startsWith("p:");return!S&&!pt&&!It.playing?n.flyTo(w?Z(w):z(_),I(450)):n.rotateBy(at<0?-1:1,I(450))},focus(at,{instant:W}={}){if(!at)return w=null,Le.view(_,{instant:W});let pt=Z(at);return pt?(w=at,S=!1,C(),n.flyTo(pt,W?0:I(tr.ms))):Promise.resolve()},setInsets(at){n.setInsets(at||{}),dt.refit(),le()},play(at,{onCue:W}={}){return It.play(at,{onCue:W})},stop(){It.stop()},story(at){return A==="win"?It.story(at):Promise.resolve()},isLost(){if(ut)return!0;try{return!!n.renderer?.getContext?.()?.isContextLost?.()}catch{return!1}},people(){let at=s.dollRoot.visible&&!dt.on;return $n.map(W=>{let pt=Jt(a[W.id].root.localToWorld(Ue.set(0,fp,0)));return{id:"p:"+W.id,key:W.id,x:pt.x,y:pt.y,visible:at&&pt.visible}})},spots(){let at=o.root.visible&&!dt.on;return ps.map(W=>{let pt=Jt(o.labelPoint(W));return{id:"e:"+W,key:W,x:pt.x,y:pt.y,visible:at&&pt.visible}})},pins(){return l.shown().map(at=>{let W=Jt(l.labelPoint(at));return{id:"p:"+at,key:at,x:W.x,y:W.y,visible:!dt.on&&W.visible,label:xs[at]?.label||""}})},setQuality(at){n.setQuality(at==="low"?"low":"high"),f.mesh.count=at==="low"?24:f.mesh.instanceMatrix.count},setReducedMotion(at){m=!!at,m?(J(),n.request()):C()},pause(at){p=!!at,p?(clearTimeout(K),K=0,J(),n.request()):(n.request(),C())},debug(){let at=n.renderer?.info?.render||{};return{view:_,focus:w,unlocked:c.unlocked(),playing:It.playing,story:It.storyOn,drawCalls:at.calls??null,triangles:at.triangles??null}},dispose(){if(y)return;y=!0,clearTimeout(K),It.dispose(),dt.exit(),L(),G(),ce(),typeof document<"u"&&document.removeEventListener("visibilitychange",Q),V?.removeEventListener?.("webglcontextlost",rt),V?.removeEventListener?.("webglcontextrestored",et);let at=new Set;n.scene.traverse(W=>{W.geometry&&!at.has(W.geometry)&&(at.add(W.geometry),W.geometry.dispose());let pt=Array.isArray(W.material)?W.material:W.material?[W.material]:[];for(let yt of pt)at.has(yt)||(at.add(yt),yt.map?.dispose(),yt.dispose())}),c.dispose(),o.dispose(),l.dispose(),n.dispose()}};return n.flyTo(z("all"),0),n.request(),C(),Le}async function Op(n,{onPick:t,onFrame:e,reducedMotion:i}={}){let s=Gf(n);return Up(s,{onPick:t,onFrame:e,reducedMotion:i})}var $u="0217-v3-save";var lr=null,Ku=new Set,vo=()=>{for(let n of Ku)try{n(Xi())}catch{}};function Fp(n){return Ku.add(n),()=>Ku.delete(n)}function Bp(){try{return matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0}catch{return!1}}function Ju(){let n=navigator.userAgent||"";return/iPhone|iPad|iPod/.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?"ios":/Android/.test(n)?"android":"desktop"}function Xi(){return Bp()?{mode:"installed",kind:Ju()}:lr?{mode:"prompt",kind:Ju()}:{mode:"manual",kind:Ju()}}async function kp(){if(!lr)return"unavailable";let n=lr;lr=null;try{await n.prompt();let t=await n.userChoice;return vo(),t&&t.outcome||"dismissed"}catch{return vo(),"error"}}function So(n){return n==="ios"?["\uC0AC\uD30C\uB9AC \uC544\uB798\uCABD\uC758 \uACF5\uC720 \uB2E8\uCD94(\uB124\uBAA8\uC5D0\uC11C \uD654\uC0B4\uD45C\uAC00 \uB098\uC624\uB294 \uBAA8\uC591)\uB97C \uB204\uB985\uB2C8\uB2E4.","\uBAA9\uB85D\uC5D0\uC11C \u300C\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uD648 \uD654\uBA74\uC5D0 \uC0DD\uAE34 \u300C02:17\u300D \uC544\uC774\uCF58\uC73C\uB85C \uC5F4\uBA74 \uC571\uCC98\uB7FC \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4.","\uC544\uC774\uD3F0\uC5D0\uC11C\uB294 \uC0AC\uD30C\uB9AC\uC640 \uD648 \uD654\uBA74 \uC571\uC758 \uC800\uC7A5 \uACF5\uAC04\uC774 \uB530\uB85C\uB77C\uC11C, \uC0AC\uD30C\uB9AC\uC5D0\uC11C \uD558\uB358 \uC870\uC0AC\uC640 \uC5F0 \uD78C\uD2B8\uB294 \uD648 \uD654\uBA74 \uC571\uC73C\uB85C \uC774\uC5B4\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]:n==="android"?["\uD06C\uB86C \uC624\uB978\uCABD \uC704\uC758 \uBA54\uB274(\uC810 \uC138 \uAC1C)\uB97C \uB204\uB985\uB2C8\uB2E4.","\u300C\uC571 \uC124\uCE58\u300D \uB610\uB294 \u300C\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uD648 \uD654\uBA74\uC5D0 \uC0DD\uAE34 \u300C02:17\u300D \uC544\uC774\uCF58\uC73C\uB85C \uC5F4\uBA74 \uC571\uCC98\uB7FC \uC5F4\uB9BD\uB2C8\uB2E4."]:["\uC8FC\uC18C\uCC3D \uC624\uB978\uCABD\uC758 \uC124\uCE58 \uC544\uC774\uCF58\uC744 \uB204\uB974\uAC70\uB098, \uBE0C\uB77C\uC6B0\uC800 \uBA54\uB274\uC5D0\uC11C \u300C\uC571 \uC124\uCE58\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uC124\uCE58\uD55C \uB4A4\uC5D0\uB294 \uC571 \uBAA9\uB85D\uC5D0\uC11C \u300C02:17\u300D\uB85C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}function zp({onUpdate:n}={}){addEventListener("beforeinstallprompt",r=>{r.preventDefault(),lr=r,vo()}),addEventListener("appinstalled",()=>{lr=null,vo()});try{matchMedia("(display-mode: standalone)").addEventListener("change",vo)}catch{}let t=location.protocol==="https:"||location.hostname==="localhost"||location.hostname==="127.0.0.1";if(!("serviceWorker"in navigator)||!t)return{sw:"unsupported"};if(/[?&]nosw\b/.test(location.search))return{sw:"skipped"};let e=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{e&&n&&n()});let i=null,s=Date.now();if(navigator.serviceWorker.register("sw.js").then(r=>{i=r}).catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&i&&Date.now()-s>36e5&&(s=Date.now(),i.update().catch(()=>{}))}),Bp())try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist().catch(()=>{})}catch{}return{sw:"registering"}}function Gp(n){addEventListener("storage",t=>{if(!(t.key!==$u||!t.newValue))try{let e=JSON.parse(t.newValue);n(e&&e.at||0)}catch{}})}function SS(n,t){return JSON.stringify({v:1,at:Date.now(),budget:n.budget,tries:n.tries,seen:[...n.seen],asked:[...n.asked],shown:[...n.shown],pins:[...n.pins],failed:[...n.failed],hints:[...n.hints],extra:t||{}})}function MS(n,{Game:t,EVIDENCE:e,PEOPLE:i,BUDGET:s,TRIES:r,HINTS:o}){let a;try{a=JSON.parse(n)}catch{return null}if(!a||a.v!==1)return null;let l=new Set(e.map(d=>d.id)),c=new Set(i.map(d=>d.id)),u=new Set(o.flatMap(d=>d.levels.map((_,w)=>d.topic+":"+w))),f=d=>Array.isArray(d)?d.filter(_=>typeof _=="string"):[],h=[...new Set(f(a.seen).filter(d=>l.has(d)))],m=[...new Set(f(a.asked).filter(d=>c.has(d)))];if(h.length+m.length>s)return null;let p=t.fresh([...new Set(f(a.hints).filter(d=>u.has(d)))]);for(let d of h)t.inspect(p,d);for(let d of m)t.ask(p,d);for(let d of f(a.shown)){let[_,w]=d.split(":");c.has(_)&&l.has(w)&&t.present(p,_,w)}for(let d of f(a.pins)){let[_,w]=d.split(":");(_==="e"&&p.seen.has(w)||_==="p"&&p.asked.has(w))&&p.pins.add(d)}let y=[...new Set(f(a.failed))].filter(d=>{let[_,w]=d.split("|");return c.has(_)&&w&&w.split("+").length===2&&w.split("+").every(S=>l.has(S))}),g=Number.isInteger(a.tries)?a.tries:r;return g!==r-y.length||g<0?null:(p.failed=y,p.tries=g,{g:p,extra:a.extra&&typeof a.extra=="object"?a.extra:{},at:a.at})}function Vp(n,t){try{return localStorage.setItem($u,SS(n,t)),!0}catch{return!1}}function Hp(n){try{let t=localStorage.getItem($u);return t?MS(t,n):null}catch{return null}}function Wp(){try{let n=document.createElement("canvas");return!!(n.getContext("webgl2")||n.getContext("webgl"))}catch{return!1}}var bo="02\uC2DC 17\uBD84\uC5D0 \uC5B4\uB514\uC5D0\uC11C \uBB34\uC5C7\uC744 \uD558\uACE0 \uC788\uC5C8\uC2B5\uB2C8\uAE4C?",Xp="\uC804\uC2DC\uC2E4\uC740 \uC815\uBB38 \uD558\uB098\uB85C\uB9CC \uB4DC\uB098\uB4E0\uB2E4. \uC720\uB9AC \uC9C4\uC5F4\uB300\uB294 \uC804\uC2DC\uC2E4 \uC548\uCABD \uCE78\uB9C9\uC774\uBCBD \uAC00\uAE4C\uC774\uC5D0 \uC11C \uC788\uACE0, \uADF8 \uBCBD \uB108\uBA38\uAC00 \uC870\uBA85 \uBD80\uC2A4\uB2E4. \uC870\uBA85 \uBD80\uC2A4\uC640 \uC74C\uD5A5 \uB370\uC2A4\uD06C\uB294 \uC804\uC2DC\uC2E4 \uBC16 \uBCF5\uB3C4\uC5D0\uC11C \uB530\uB85C \uB4DC\uB098\uB4E0\uB2E4.",Fn=[{id:"lock",name:"\uC815\uBB38 \uC7A0\uAE08 \uAE30\uB85D",kind:"\uCD9C\uC785",time:"01:58",at:2,tease:"\uC815\uBB38 \uC804\uC790 \uC7A0\uAE08\uC758 \uAE30\uB85D\uACFC \uBD09\uC778 \uB300\uC7A5.",text:"01\uC2DC 58\uBD84\uC5D0 \uC7A0\uAE30\uACE0 \uBD09\uC778\uB41C \uB4A4, 02\uC2DC 19\uBD84\uC5D0 \uACBD\uBE44\uAC00 \uBD09\uC778\uC744 \uD655\uC778\uD558\uACE0 \uC5F4 \uB54C\uAE4C\uC9C0 \uBB38\uC774 \uC5F4\uB9B0 \uAE30\uB85D\uC740 \uD55C \uAC74\uB3C4 \uC5C6\uB2E4. \uADF8\uB54C\uAE4C\uC9C0 \uAE30\uACC4\uC2DD \uBD09\uC778\uC740 \uBC88\uD638\uAC00 \uB300\uC7A5\uACFC \uAC19\uC558\uACE0 \uB72F\uAE34 \uD754\uC801\uC774 \uC5C6\uC5C8\uB2E4. \uC815\uBB38 \uC606 \uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94\uB294 30\uBD84\uB9C8\uB2E4 \uB20C\uB7EC\uC57C \uD558\uB294\uB370, 02\uC2DC 00\uBD84 \uCC28\uB840\uAC00 02\uC2DC 09\uBD84\uC5D0 \uB20C\uB838\uB2E4."},{id:"fog",name:"\uC9C4\uC5F4\uB300 \uC601\uC0C1",kind:"\uD604\uC7A5",time:"02:17:00",at:4,tease:"\uC9C4\uC5F4\uB300 \uC55E\uCABD\uC744 \uBE44\uCD94\uB358 \uCE74\uBA54\uB77C\uC758 \uB179\uD654 \uC601\uC0C1\uACFC \uC548\uAC1C \uC7A5\uCE58\uC758 \uC791\uB3D9 \uAE30\uB85D.",text:"01\uC2DC 52\uBD84, \uBB38\uC138\uB77C\uAC00 \uBC1B\uCE68\uB300 \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5 \uCABD\uC73C\uB85C \uD5C8\uB9AC\uB97C \uC219\uC600\uB2E4\uAC00 \uB098\uAC04\uB2E4. 02\uC2DC 16\uBD84 59\uCD08\uAE4C\uC9C0 \uB80C\uC988\uB294 \uC81C\uC790\uB9AC\uC5D0 \uC788\uB2E4. 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC548\uAC1C\uAC00 \uD130\uC838 8\uCD08 \uB3D9\uC548 \uD654\uBA74\uC774 \uD558\uC597\uAC8C \uAC00\uB824\uC9C0\uACE0, \uC548\uAC1C\uAC00 \uAC77\uD78C \uD654\uBA74\uC5D0\uB294 \uB80C\uC988\uAC00 \uC5C6\uB2E4. \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44\uC774\uACE0, \uD654\uBA74\uC5D0 \uC0AC\uB78C\uC740 \uC7A1\uD788\uC9C0 \uC54A\uB294\uB2E4. \uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D\uC5D0\uB294 \u2018\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9\u2019\uC774\uB77C\uACE0 \uC801\uD600 \uC788\uB2E4."},{id:"drawer",name:"\uC9C4\uC5F4\uB300 \uD6C4\uBA74",kind:"\uD604\uC7A5",time:"02:17 \uC774\uD6C4",at:6,tease:"\uC720\uB9AC \uC9C4\uC5F4\uB300 \uBC1B\uCE68\uB300\uC758 \uB4B7\uBA74.",text:"\uC720\uB9AC \uB36E\uAC1C\uB294 \uC55E\uACFC \uC606, \uC704\uB9CC \uB9C9\uACE0 \uC788\uB2E4. \uB4A4\uCABD\uC744 \uB9C9\uACE0 \uC788\uB294 \uAC83\uC740 \uC815\uBE44\uC6A9 \uC11C\uB78D\uC758 \uC55E\uD310\uC774\uC5B4\uC11C, \uC11C\uB78D\uC744 \uB2F9\uAE30\uBA74 \uB80C\uC988\uB97C \uC62C\uB824 \uB454 \uBC1B\uCE68\uD310\uC774 \uD1B5\uC9F8\uB85C \uB4A4\uB85C \uBE60\uC838\uB098\uC628\uB2E4. \uC190\uC7A1\uC774\uB294 \uCE78\uB9C9\uC774\uBCBD\uC758 \uC810\uAC80\uAD6C \uB108\uBA38, \uC870\uBA85 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uB2EC\uB824 \uC788\uB2E4. \uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC774\uCABD\uC5D0\uC11C\uB294 \uB2F9\uAE38 \uC218 \uC5C6\uB2E4. \uC11C\uB78D\uC740 \uC190\uAC00\uB77D \uB450 \uB9C8\uB514\uB9CC\uD07C \uB35C \uB2EB\uD600 \uC788\uACE0, \uB808\uC77C\uACFC \uADF8 \uC544\uB798 \uBC14\uB2E5\uC5D0 \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8\uAC00 \uB5A8\uC5B4\uC838 \uC788\uB2E4."},{id:"cue",name:"\uC870\uBA85 \uC81C\uC5B4 \uAE30\uB85D",kind:"\uAE30\uB85D",time:"02:17:00",at:3,tease:"\uC870\uBA85 \uCF58\uC194\uC758 \uC608\uC57D\uD45C\uC640 \uC2E4\uD589 \uAE30\uB85D.",text:"\uC608\uC57D\uD45C\uC5D0 \uC62C\uB77C \uC788\uB294 \uC790\uB3D9 \uC810\uAC80\uC740 02\uC2DC 30\uBD84 \uD55C \uAC74\uBFD0\uC774\uB2E4. \uC2E4\uD589 \uAE30\uB85D\uC5D0\uB294 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uD050 \uD558\uB098\uAC00 \uC2E4\uD589\uB410\uB2E4\uACE0 \uB0A8\uC544 \uC788\uB2E4. \uC2E4\uD589 \uBC29\uC2DD\uC740 \u2018\uC218\uB3D9\u2019, \uC785\uB825 \uC704\uCE58\uB294 \u2018\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94\u2019, \uC11C\uBA85 \uCE78\uC740 \u2018H.D.Y.\u2019\uB2E4. \uC774 \uD050\uC5D0\uB294 \uC9C4\uC5F4\uB300 \uC870\uBA85\uC744 \uB0AE\uCD94\uB294 \uB3D9\uC791\uACFC \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638\uAC00 \uD568\uAED8 \uBB36\uC5EC \uC788\uB2E4. \uC6D0\uACA9 \uC811\uC18D \uAE30\uB85D\uC740 \uC5C6\uB2E4."},{id:"audio",name:"\uD604\uC7A5 \uB179\uC74C",kind:"\uAE30\uB85D",time:"02:17:03",at:5,tease:"\uC74C\uD5A5 \uB2F4\uB2F9\uC774 \uC624\uB298 \uBC24 \uB0A8\uAE34 \uB179\uC74C \uD30C\uC77C.",text:"02\uC2DC 10\uBD84\uBD80\uD130 \uB04A\uAE40 \uC5C6\uC774 \uC774\uC5B4\uC9C4 \uB179\uC74C\uC774\uB2E4. 1\uBC88 \uCC44\uB110\uC740 \uC9C4\uC5F4\uB300 \uC55E \uB9C8\uC774\uD06C, 2\uBC88 \uCC44\uB110\uC740 \uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C, 3\uBC88 \uCC44\uB110\uC740 \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC758 \uBA54\uBAA8\uC6A9 \uB9C8\uC774\uD06C\uB2E4. 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC548\uAC1C \uBD84\uC0AC\uC74C\uC774 \uC2DC\uC791\uB418\uACE0, 02\uC2DC 17\uBD84 03\uCD08\uC5D0 2\uBC88 \uCC44\uB110\uC5D0\uB9CC \uAE08\uC18D\uC774 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uD06C\uAC8C \uC7A1\uD78C\uB2E4. 02\uC2DC 17\uBD84 05\uCD08\uC5D0\uB294 3\uBC88 \uCC44\uB110\uC5D0 \u201C\uC5B4, \uBC8C\uC368?\u201D\uB77C\uB294 \uC11C\uC720\uC9C4\uC758 \uBAA9\uC18C\uB9AC\uAC00 \uB4E4\uC5B4 \uC788\uB2E4."},{id:"poster",name:"\uD64D\uBCF4 \uD328\uB110 \uAD50\uC815\uC9C0",kind:"\uBB38\uC11C",time:"01:40",at:1,tease:"\uBCF4\uB3C4\uC6A9 \uD64D\uBCF4 \uD328\uB110\uC758 \uB9C8\uC9C0\uB9C9 \uAD50\uC815\uC9C0.",text:"\uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \u2018\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04\u2019\uB85C \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C \uD55C \uC0AC\uB78C\uC758 \uC774\uB984\uB9CC \uC2E4\uB824 \uC788\uB2E4. \uC5EC\uBC31\uC5D0\uB294 \uC5F0\uD544\uB85C \u2018\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD\u2019, \uD30C\uB780 \uD39C\uC73C\uB85C \u2018\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4\u2019\uB77C\uACE0 \uC801\uD600 \uC788\uB2E4. \uB450 \uBA54\uBAA8 \uC704\uC5D0\uB294 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5\uC774 \uCC0D\uD600 \uC788\uACE0, \uB3C4\uC7A5\uC5D0 \uC801\uD78C \uC2DC\uAC01\uC740 01\uC2DC 40\uBD84\uC774\uB2E4."}],Sn=[{id:"min",name:"\uBC15\uBBFC\uC7AC",role:"\uC57C\uAC04 \uACBD\uBE44",mark:"\u25A3",line:"\u201C\uC81C \uAE30\uB85D\uC5D0\uB294 \uBE60\uC9C4 \uAC83\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.\u201D",say:"\uC800\uB294 \uBC24\uC0C8 \uC815\uBB38 \uC55E\uC744 \uC9C0\uCF30\uC2B5\uB2C8\uB2E4. \uD55C \uBC1C\uC9DD\uB3C4 \uB5A0\uB098\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uCD9C\uC785\uC790 \uC5C6\uC74C, \uC7A0\uAE08 \uC774\uC0C1 \uC5C6\uC74C, \uBD09\uC778 \uC774\uC0C1 \uC5C6\uC74C. \uB2E4\uC2DC \uB9D0\uC500\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC800\uB294 \uBC24\uC0C8 \uC815\uBB38 \uC55E\uC744 \uC9C0\uCF30\uC2B5\uB2C8\uB2E4. \uCD9C\uC785\uC790 \uC5C6\uC74C, \uC7A0\uAE08 \uC774\uC0C1 \uC5C6\uC74C, \uBD09\uC778 \uC774\uC0C1 \uC5C6\uC74C.",other:"\uADF8\uAC83\uC740 \uC81C \uADFC\uBB34 \uAE30\uB85D \uBC16\uC758 \uC77C\uC785\uB2C8\uB2E4. \uCD94\uCE21\uC73C\uB85C \uB9D0\uC500\uB4DC\uB9AC\uC9C0\uB294 \uC54A\uACA0\uC2B5\uB2C8\uB2E4."},{id:"sera",name:"\uBB38\uC138\uB77C",role:"\uBCF4\uC874 \uB2F4\uB2F9",mark:"\u25C8",line:"\u201C\uAE30\uC0AC\uBCF4\uB2E4 \uBCF4\uC874 \uAE30\uB85D\uC774 \uBA3C\uC800\uC608\uC694.\u201D",say:"\uC815\uBB38\uC774 \uBD09\uC778\uB41C \uB4A4\uB85C\uB294 \uBCF4\uC874\uC2E4\uC5D0\uC11C \uC0C1\uD0DC \uAE30\uB85D\uC744 \uC815\uB9AC\uD588\uC5B4\uC694. \uC0AC\uAC74\uC774 \uC54C\uB824\uC9C4 \uB4A4 \uACBD\uBE44\uBD84\uC774 \uBD09\uC778\uC744 \uD480\uC5B4 \uC918\uC11C \uB4E4\uC5B4\uAC14\uACE0, \uBC1B\uCE68\uB300\uB97C \uC0B4\uD53C\uB2E4\uAC00 \uB4A4\uCABD \uBC14\uB2E5\uC5D0\uC11C \uBD89\uC740 \uAC00\uB8E8\uB97C \uBD24\uC5B4\uC694. \uB80C\uC988\uC5D0\uC11C \uB5A8\uC5B4\uC9C4 \uAC83\uC740 \uC544\uB2C8\uC5D0\uC694. \uC5B4\uB514\uC11C \uB098\uC628 \uAC83\uC778\uC9C0\uB294 \uC800\uB3C4 \uBAA8\uB974\uACA0\uC5B4\uC694. \uC624\uB298 \uBC24 \uC9C4\uC5F4\uB300\uC5D0 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC190\uC744 \uB304 \uC0AC\uB78C\uC740 \uC544\uB9C8 \uC800\uC77C \uAC70\uC608\uC694.",other:"\uADF8\uAC74 \uC81C \uBCF4\uC874 \uAE30\uB85D\uACFC\uB294 \uC0C1\uAD00\uC774 \uC5C6\uB294 \uC790\uB8CC\uC608\uC694. \uC81C\uAC00 \uBCF4\uD0E4 \uB9D0\uC774 \uC5C6\uB124\uC694."},{id:"doyun",name:"\uD55C\uB3C4\uC724",role:"\uC870\uBA85 \uC124\uACC4",mark:"\u25C6",line:"\u201C\uC608\uC57D\uD45C\uC5D0 \uB2E4 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.\u201D",say:"02\uC2DC 17\uBD84\uC5D0\uB294 \uBD80\uC2A4\uB97C \uBE44\uC6B0\uACE0 \uB85C\uBE44 \uCABD \uBCF5\uB3C4\uC5D0 \uB098\uC640 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01\uC758 \uC870\uBA85 \uBCC0\uD654\uB294 \uC608\uC57D\uD45C\uC5D0 \uC7A1\uD78C \uC790\uB3D9 \uC810\uAC80\uC785\uB2C8\uB2E4. \uC2DC\uC2A4\uD15C\uC774 \uC54C\uC544\uC11C \uB3CC\uB9B0 \uAC83\uC774\uACE0, \uC800\uB294 \uCF58\uC194\uC5D0 \uC190\uB3C4 \uB300\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",other:"\uADF8 \uC790\uB8CC\uC5D0 \uB300\uD574\uC11C\uB294 \uC81C\uAC00 \uB4DC\uB9B4 \uB9D0\uC500\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC81C\uAC00 \uC544\uB294 \uBC94\uC704 \uBC16\uC758 \uC77C\uC785\uB2C8\uB2E4."},{id:"yujin",name:"\uC11C\uC720\uC9C4",role:"\uC74C\uD5A5 \uB2F4\uB2F9",mark:"\u25C9",line:"\u201C\uB4E4\uC740 \uAC83\uACFC \uBCF8 \uAC83\uC740 \uB2E4\uB974\uC8E0.\u201D",say:"\uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC5D0\uC11C \uC548\uAC1C \uC5F0\uCD9C \uD604\uC7A5\uC74C\uC744 \uB179\uC74C\uD558\uACE0 \uC788\uC5C8\uC5B4\uC694. \uD5E4\uB4DC\uD3F0 \uB108\uBA38\uB85C \uC870\uBA85 \uBD80\uC2A4 \uCABD\uC5D0\uC11C \uC218\uB808\uAC00 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uB0AC\uC5B4\uC694. \uB808\uBCA8 \uBBF8\uD130\uB9CC \uBCF4\uACE0 \uC788\uC5B4\uC11C \uB208\uC73C\uB85C\uB294 \uC544\uBB34\uAC83\uB3C4 \uBCF4\uC9C0 \uBABB\uD588\uC5B4\uC694.",other:"\uADF8 \uC790\uB8CC\uB294 \uC81C\uAC00 \uC9C1\uC811 \uBCF8 \uAC8C \uC544\uB2C8\uB77C\uC11C\uC694. \uC81C \uB179\uC74C\uC5D0 \uB0A8\uC740 \uAC83 \uB9D0\uACE0\uB294 \uC544\uB294 \uBC14\uAC00 \uC5C6\uC5B4\uC694."}],bS={"doyun:cue":"\uC218\uB3D9\uC774\uB77C\uACE0 \uCC0D\uD600 \uC788\uB2E4\uACE0\uC694. \uAE30\uB85D\uC774 \uC798\uBABB \uCC0D\uD78C \uAC78 \uAC81\uB2C8\uB2E4. \uC124\uB839 \uB204\uAC00 \uB2E8\uCD94\uB97C \uB20C\uB800\uB2E4 \uD574\uB3C4, \uC870\uBA85\uC774 \uD55C \uBC88 \uBC14\uB010 \uAC83\uACFC \uB80C\uC988\uAC00 \uC5C6\uC5B4\uC9C4 \uAC83\uC740 \uB2E4\uB978 \uC774\uC57C\uAE30\uC785\uB2C8\uB2E4. \uC870\uBA85 \uAE30\uB85D\uC740 \uB80C\uC988\uAC00 \uB2EB\uD78C \uC720\uB9AC \uB36E\uAC1C\uB97C \uC5B4\uB5BB\uAC8C \uBE60\uC838\uB098\uAC14\uB294\uC9C0 \uD55C \uC904\uB3C4 \uB9D0\uD574 \uC8FC\uC9C0 \uC54A\uC796\uC2B5\uB2C8\uAE4C.","doyun:drawer":"\uC815\uBE44 \uC11C\uB78D \uB9D0\uC500\uC774\uAD70\uC694. \uC190\uC7A1\uC774\uAC00 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uC788\uB294 \uAC83\uC740 \uB9DE\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uADF8 \uC2DC\uAC01 \uBD80\uC2A4\uB294 \uBE44\uC5B4 \uC788\uC5C8\uACE0, \uC548\uAC1C\uB3C4 \uC2DC\uC2A4\uD15C\uC774 \uC608\uC57D\uB300\uB85C \uD130\uB728\uB9B0 \uAC83\uC785\uB2C8\uB2E4. \uC544\uBB34\uB3C4 \uC5C6\uB358 \uC790\uB9AC\uC5D0\uC11C, \uB204\uAC00 \uB9CC\uB4E4\uC9C0\uB3C4 \uC54A\uC740 8\uCD08\uC5D0 \uB9DE\uCDB0 \uC11C\uB78D\uC774 \uB2F9\uACA8\uC84C\uB2E4\uB294 \uB9D0\uC500\uC785\uB2C8\uAE4C.","doyun:fog":"\uC548\uAC1C \uC7A5\uCE58\uB294 \uC2E0\uD638\uB97C \uBC1B\uC73C\uBA74 \uD130\uC9D1\uB2C8\uB2E4. \uC810\uAC80 \uD050\uC5D0 \uC548\uAC1C\uAC00 \uBB36\uC5EC \uC788\uC73C\uB2C8, \uC810\uAC80\uC774 \uB3CC\uBA74 \uC548\uAC1C\uB3C4 \uB098\uC624\uB294 \uAC81\uB2C8\uB2E4. \uC81C\uAC00 \uBCF4\uB0B8 \uC2E0\uD638\uB294 \uC544\uB2D9\uB2C8\uB2E4.","doyun:audio":"\uBD80\uC2A4\uC5D0 \uC7A5\uBE44 \uC218\uB808\uAC00 \uD55C \uB300 \uC788\uC2B5\uB2C8\uB2E4. \uBCBD \uCABD\uC5D0 \uBD99\uC5EC \uB450\uB294\uB370 \uBC14\uD034 \uC7A0\uAE08\uC1E0\uAC00 \uD5D0\uAC70\uC6CC\uC11C \uAC00\uB9CC\uD788 \uB46C\uB3C4 \uD480\uB9B4 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01\uC5D0 \uC65C \uC18C\uB9AC\uAC00 \uB0AC\uB294\uC9C0\uB294 \uC800\uB3C4 \uBAA8\uB974\uACA0\uC2B5\uB2C8\uB2E4.","doyun:poster":"\uADF8 \uC5F0\uD544 \uAE00\uC528\uB294 \uC81C \uAC83\uC785\uB2C8\uB2E4. \uC81C\uAC00 \uC124\uACC4\uD55C \uC5F0\uCD9C\uC778\uB370 \uC774\uB984\uC774 \uBE60\uC84C\uC73C\uB2C8 \uC815\uC815\uC744 \uC694\uCCAD\uD588\uC2B5\uB2C8\uB2E4. \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uACE0, \uAE30\uBD84\uC774 \uC88B\uC558\uB2E4\uACE0\uB294 \uBABB \uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC11C\uC6B4\uD55C \uAC83\uACFC \uC804\uC2DC\uBB3C\uC5D0 \uC190\uC744 \uB300\uB294 \uAC83\uC740 \uB2E4\uB978 \uC77C\uC785\uB2C8\uB2E4.","sera:fog":"\uADF8\uAC74 \uBD09\uC778\uD558\uAE30 \uC804 \uB9C8\uC9C0\uB9C9 \uC810\uAC80\uC774\uC5D0\uC694. \uBC1B\uCE68\uB300 \uC218\uD3C9\uC744 \uBCF4\uB290\uB77C \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5\uAE4C\uC9C0 \uC0B4\uD3C8\uACE0, \uADF8\uB54C\uB294 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC5C8\uC5B4\uC694. \uC810\uAC80\uD45C\uC5D0\uB3C4 \u2018\uB4A4\uCABD \uBC14\uB2E5 \uC774\uBB3C \uC5C6\uC74C\u2019\uC774\uB77C\uACE0 \uC801\uC5B4 \uB480\uC5B4\uC694. \uADF8 \uB4A4\uB85C 02\uC2DC 16\uBD84\uAE4C\uC9C0 \uB80C\uC988\uAC00 \uD654\uBA74\uC5D0 \uADF8\uB300\uB85C \uC788\uC796\uC544\uC694.","sera:drawer":"\uB808\uC77C \uC641\uC2A4\uC600\uAD70\uC694. \uBA3C\uC9C0\uCE58\uACE0\uB294 \uC7A5\uAC11 \uB05D\uC5D0 \uBBF8\uB048\uD558\uAC8C \uBB3B\uC5B4\uB098\uC11C \uC774\uC0C1\uD588\uC5B4\uC694. \uC11C\uB78D\uC774 \uC6C0\uC9C1\uC77C \uB54C \uB808\uC77C\uC5D0\uC11C \uAE4E\uC5EC \uB098\uC624\uB294 \uAC70\uC608\uC694. \uC81C\uAC00 01\uC2DC 52\uBD84\uC5D0 \uBD24\uC744 \uB54C\uB294 \uBC14\uB2E5\uC774 \uAE68\uB057\uD588\uC73C\uB2C8, \uC11C\uB78D\uC740 \uADF8 \uB4A4\uC5D0 \uC6C0\uC9C1\uC778 \uAC70\uC8E0. \uADF8\uB9AC\uACE0 \uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC800\uB294 \uC5F4 \uC218\uAC00 \uC5C6\uC5B4\uC694.","sera:cue":"\uC870\uBA85 \uAE30\uB85D\uC740 \uC81C\uAC00 \uC77D\uC744 \uC904 \uBAB0\uB77C\uC694. \uB2E4\uB9CC 02\uC2DC 30\uBD84 \uC810\uAC80\uC740 \uBCF4\uC874\uC2E4\uC5D0\uB3C4 \uBBF8\uB9AC \uC54C\uB9BC\uC774 \uC654\uC5B4\uC694. 02\uC2DC 17\uBD84\uC5D0 \uBB34\uC5B8\uAC00 \uB3CC\uB9B0\uB2E4\uB294 \uC598\uAE30\uB294 \uB4E4\uC740 \uC801\uC774 \uC5C6\uC5B4\uC694.","sera:lock":"02\uC2DC 19\uBD84\uC5D0 \uBD09\uC778\uC744 \uD480 \uB54C \uC800\uB3C4 \uC606\uC5D0 \uC788\uC5C8\uC5B4\uC694. \uBC88\uD638\uB97C \uB300\uC7A5\uACFC \uB9DE\uCDB0 \uBCF4\uACE0 \uB098\uC11C \uAC19\uC774 \uB4E4\uC5B4\uAC14\uC5B4\uC694. \uADF8 \uC804\uC5D0\uB294 \uC544\uBB34\uB3C4 \uB4E4\uC5B4\uAC00\uC9C0 \uBABB\uD588\uC5B4\uC694.","min:lock":"9\uBD84 \uB2A6\uC740 \uAC83, \uB9DE\uC2B5\uB2C8\uB2E4. \uC790\uB9AC\uB97C \uB72C \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uC544\uCE68 \uAD50\uB300 \uB54C \uC62C\uB9B4 \uADFC\uBB34 \uBCF4\uACE0 \uBB38\uC7A5\uC744 \uC218\uCCA9\uC5D0 \uC801\uC5B4 \uC678\uC6B0\uACE0 \uC788\uC5C8\uACE0, \uADF8\uB7EC\uB2E4 \uC2DC\uAC04\uC744 \uB193\uCCE4\uC2B5\uB2C8\uB2E4. \uAE34\uC7A5\uD558\uBA74 \uB9D0\uC744 \uB354\uB4EC\uC5B4\uC11C \uB298 \uADF8\uB807\uAC8C \uC5F0\uC2B5\uD569\uB2C8\uB2E4. \uC678\uC6B4 \uAC83\uCC98\uB7FC \uB4E4\uB838\uB2E4\uBA74 \uC815\uB9D0 \uC678\uC6E0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB2E8\uCD94\uB97C \uB2A6\uAC8C \uB20C\uB800\uC5B4\uB3C4, \uBD09\uC778\uC744 \uD480 \uB54C\uAE4C\uC9C0 \uADF8 \uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","min:fog":"\uC548\uAC1C\uAC00 \uD130\uC84C\uC744 \uB54C\uB3C4 \uC800\uB294 \uBB38 \uC55E\uC5D0 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC815\uBB38 \uC720\uB9AC \uB108\uBA38\uB85C \uBFCC\uC5F0 \uAC83\uB9CC \uBCF4\uC600\uACE0, \uADF8 \uC548\uC5D0\uC11C \uC6C0\uC9C1\uC774\uB294 \uC0AC\uB78C\uC740 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4.","min:drawer":"\uBC1B\uCE68\uB300 \uB4A4\uC5D0 \uC11C\uB78D\uC774 \uC788\uB2E4\uB294 \uAC83\uC740 \uC9C0\uAE08 \uCC98\uC74C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC81C \uC790\uB9AC\uB294 \uC815\uBB38 \uC55E\uC774\uACE0, \uBCF5\uB3C4\uB294 \uBB38 \uC55E\uC5D0\uC11C \uBCF4\uC774\uB294 \uB370\uAE4C\uC9C0\uB9CC \uBD05\uB2C8\uB2E4. \uC870\uBA85 \uBD80\uC2A4 \uC5F4\uC1E0\uB294 \uC800\uD55C\uD14C \uC5C6\uC2B5\uB2C8\uB2E4.","min:poster":"\uADF8 \uC885\uC774\uB294 01\uC2DC 40\uBD84\uCBE4 \uBCF5\uB3C4 \uAC8C\uC2DC\uD310\uC5D0 \uBD99\uC5B4 \uC788\uB358 \uAC83\uC785\uB2C8\uB2E4. \uB204\uAC00 \uBA54\uBAA8\uB97C \uC801\uC5C8\uB294\uC9C0\uB294 \uBCF4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","yujin:audio":"\uC548\uAC1C\uB294 \uC6D0\uB798 02\uC2DC 30\uBD84 \uC810\uAC80 \uB54C \uD130\uC9C8 \uC608\uC815\uC774\uC5C8\uC5B4\uC694. \uB193\uCE58\uAE30 \uC2EB\uC5B4\uC11C 02\uC2DC 10\uBD84\uBD80\uD130 \uBBF8\uB9AC \uB179\uC74C\uC744 \uAC78\uC5B4 \uB450\uACE0 \uAE30\uB2E4\uB838\uB294\uB370, 13\uBD84\uC774\uB098 \uC77C\uCC0D \uD130\uC84C\uC5B4\uC694. \uADF8\uB798\uC11C \uC81C \uBAA9\uC18C\uB9AC\uAC00 \uB4E4\uC5B4\uAC04 \uAC70\uC608\uC694. \uADF8 \uC21C\uAC04 \uC800\uB294 \uB370\uC2A4\uD06C \uB9C8\uC774\uD06C \uC55E\uC5D0 \uC549\uC544 \uC788\uC5C8\uC5B4\uC694. \uB538\uAE4D \uC18C\uB9AC\uB294 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C\uC5D0\uB9CC \uC7A1\uD614\uACE0\uC694.","yujin:cue":"02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC218\uB3D9 \uC2E4\uD589\uC774\uB77C\uBA74 \uC81C \uB179\uC74C\uACFC \uB9DE\uC544\uC694. 00\uCD08\uC5D0 \uC548\uAC1C\uAC00 \uD130\uC9C0\uACE0 3\uCD08 \uB4A4\uC5D0 \uBD80\uC2A4 \uCABD\uC5D0\uC11C \uB538\uAE4D \uC18C\uB9AC\uAC00 \uB0AC\uAC70\uB4E0\uC694. \uB204\uAC00 \uB20C\uB800\uB294\uC9C0\uB294 \uC18C\uB9AC\uB85C\uB294 \uC54C \uC218 \uC5C6\uC9C0\uB9CC\uC694.","yujin:drawer":"\uADF8 \uC11C\uB78D\uC774 \uC870\uBA85 \uBD80\uC2A4 \uCABD\uC73C\uB85C \uBE60\uC9C4\uB2E4\uBA74 \uC81C\uAC00 \uB4E4\uC740 \uC18C\uB9AC\uAC00 \uB09C \uBC29\uD5A5\uACFC \uAC19\uB124\uC694. \uB2E4\uB9CC \uC800\uB294 \uC218\uB808 \uC18C\uB9AC\uB85C \uB4E4\uC5C8\uC5B4\uC694. \uC11C\uB78D \uC18C\uB9AC\uC778\uC9C0\uB294 \uC7A5\uB2F4\uD558\uC9C0 \uBABB\uD574\uC694.","yujin:poster":"\uD30C\uB780 \uD39C\uC740 \uC81C \uAE00\uC528\uC608\uC694. \uC800\uB3C4 \uC774\uB984\uC774 \uBE60\uC84C\uC73C\uB2C8\uAE4C\uC694. \uD654\uB294 \uB0AC\uC9C0\uB9CC \uADF8 \uC2DC\uAC04\uC5D0 \uC800\uB294 \uB370\uC2A4\uD06C\uC5D0\uC11C \uB179\uC74C\uD558\uACE0 \uC788\uC5C8\uACE0, \uADF8\uAC74 \uD30C\uC77C\uC774 \uB9D0\uD574 \uC918\uC694."},Vl=[{topic:"route",until:"drawer",levels:["\uC815\uBB38\uB3C4 \uC720\uB9AC \uB36E\uAC1C\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uB2E4\uBA74 \uB80C\uC988\uB294 \uBB38\uACFC \uB36E\uAC1C\uAC00 \uC544\uB2CC \uCABD\uC73C\uB85C \uB098\uAC14\uC2B5\uB2C8\uB2E4.","\uCE74\uBA54\uB77C\uB294 \uC9C4\uC5F4\uB300\uC758 \uC55E\uCABD\uB9CC \uBE44\uCDA5\uB2C8\uB2E4. \uD654\uBA74\uC5D0 \uCC0D\uD788\uC9C0 \uC54A\uB294 \uCABD\uC774 \uC5B4\uB514\uC778\uC9C0 \uC0DD\uAC01\uD574 \uBCF4\uC138\uC694.","\uD604\uC7A5 \uD0ED\uC5D0\uC11C \u300C\uC9C4\uC5F4\uB300 \uD6C4\uBA74\u300D\uC744 \uD655\uC778\uD558\uC138\uC694."]},{topic:"record",until:"cue",levels:["\uAE38 \uB2E4\uC74C\uC740 \uC2DC\uAC01\uC785\uB2C8\uB2E4. 02\uC2DC 17\uBD84\uC758 8\uCD08 \uB3D9\uC548 \uBB34\uC5C7\uC774 \uC5B4\uB5A4 \uC21C\uC11C\uB85C \uC6C0\uC9C1\uC600\uB294\uC9C0 \uC801\uC5B4 \uB454 \uAE30\uB85D\uC744 \uCC3E\uC544\uBCF4\uC138\uC694.","\uC548\uAC1C\uB294 \uC800\uC808\uB85C \uD130\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC548\uAC1C \uC7A5\uCE58\uC5D0 \uC2E0\uD638\uB97C \uBCF4\uB0B8 \uCABD\uC758 \uAE30\uB85D\uC774 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.","\uD604\uC7A5 \uD0ED\uC5D0\uC11C \u300C\uC870\uBA85 \uC81C\uC5B4 \uAE30\uB85D\u300D\uC744 \uD655\uC778\uD558\uC138\uC694."]},{topic:"compare",levels:["\uC99D\uAC70\uB294 \uD63C\uC790\uC11C\uB294 \uC0AC\uB78C\uC744 \uAC00\uB9AC\uD0A4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC0AC\uB78C\uB4E4\uC758 \uB9D0\uC744 \uB4E3\uACE0, \uBA74\uB2F4\uC5D0\uC11C \uC99D\uAC70\uB97C \uC81C\uC2DC\uD574 \uAC01\uC790\uC758 \uB9D0\uACFC \uAE30\uB85D\uC774 \uAC19\uC740 \uC774\uC57C\uAE30\uB97C \uD558\uB294\uC9C0 \uB9DE\uB300\uC5B4 \uBCF4\uC138\uC694. \uC99D\uAC70 \uC81C\uC2DC\uB294 \uC870\uC0AC \uAE30\uD68C\uB97C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098 \uBCF4\uC774\uB294 \uC0AC\uB78C\uC774 \uD55C \uBA85\uBFD0\uC774\uB77C\uACE0 \uB2E8\uC815\uD558\uC9C0 \uB9C8\uC138\uC694. \uC5B4\uAE0B\uB098\uB294 \uB300\uBAA9\uB9C8\uB2E4 \uBCF8\uC778\uC758 \uB2F5\uC774 \uC788\uACE0, \uADF8 \uB2F5\uC740 \uB2E4\uB978 \uAE30\uB85D\uC73C\uB85C \uB4B7\uBC1B\uCE68\uB418\uAE30\uB3C4 \uD558\uACE0 \uADF8\uB807\uC9C0 \uC54A\uAE30\uB3C4 \uD569\uB2C8\uB2E4.","\uBB3C\uC744 \uAC83\uC740 \uB450 \uAC00\uC9C0\uC785\uB2C8\uB2E4. \uD558\uB098, \uB80C\uC988\uAC00 \uC0AC\uB77C\uC9C4 8\uCD08 \uB3D9\uC548 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC758 \uB05D\uC5D0 \uC788\uC744 \uC218 \uC788\uC5C8\uB358 \uC0AC\uB78C\uC740 \uB204\uAD6C\uC778\uAC00? \uB458, \uADF8 \uC2DC\uAC01 \uADF8 \uC790\uB9AC\uC758 \uC77C\uC744 \uB450\uACE0 \uAE30\uB85D\uACFC \uB2E4\uB978 \uB9D0\uC744 \uD55C \uC0AC\uB78C\uC740 \uB204\uAD6C\uC778\uAC00? \uB450 \uB2F5\uC774 \uAC19\uC740 \uC0AC\uB78C\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."]},{topic:"accuse",levels:["\uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uC99D\uAC70\uB294 \uD558\uB098\uBFD0\uC785\uB2C8\uB2E4. \uB0A8\uC740 \uD55C \uC790\uB9AC\uC5D0\uB294, \uADF8 \uAE38\uC758 \uB05D\uC5D0 \uADF8 \uC2DC\uAC01 \uB204\uAC00 \uC788\uC5C8\uB294\uC9C0\uB97C \uB9D0\uD574 \uC8FC\uB294 \uAE30\uB85D\uC774 \uB4E4\uC5B4\uAC00\uC57C \uD569\uB2C8\uB2E4.","\uB450 \uC99D\uAC70 \uBAA8\uB450 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC5D0\uAC8C \uC9C1\uC811 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC138\uC694. \uD55C \uC99D\uAC70\uC5D0 \uB300\uD55C \uB2F5\uC744 \uB2E4\uB978 \uC99D\uAC70\uAC00 \uBB34\uB108\uB728\uB9AC\uB294\uC9C0, \uB450 \uB2F5\uC744 \uB098\uB780\uD788 \uB193\uACE0 \uC77D\uC5B4 \uBCF4\uC138\uC694.","\uB450 \uC99D\uAC70\uAC00 \uAC19\uC740 \uC2DC\uAC01, \uAC19\uC740 \uC790\uB9AC\uB97C \uAC00\uB9AC\uD0A4\uB294\uC9C0, \uADF8\uB9AC\uACE0 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC774 \uADF8 \uC2DC\uAC01 \uADF8 \uC790\uB9AC\uC5D0 \uB300\uD574 \uD55C \uB9D0\uACFC \uB9DE\uB294\uC9C0 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uD655\uC778\uD558\uC138\uC694."]}],qp={route:"\uB80C\uC988\uAC00 \uC804\uC2DC\uC2E4 \uBC16\uC73C\uB85C \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uBB3C\uC99D\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC815\uBB38\uC774 \uC7A0\uACA8 \uC788\uC5C8\uB2E4\uB294 \uAE30\uB85D\uC740 \uBB38\uC73C\uB85C\uB294 \uB098\uAC00\uC9C0 \uC54A\uC558\uB2E4\uB294 \uAC83\uB9CC \uB9D0\uD574 \uC904 \uBFD0, \uC5B4\uB5BB\uAC8C \uB098\uAC14\uB294\uC9C0\uB294 \uB9D0\uD574 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",record:"02\uC2DC 17\uBD84\uC5D0 \uC7A5\uCE58\uB97C \uC6C0\uC9C1\uC778 \uC190\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uAE30\uB85D\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAE38\uC744 \uCC3E\uC558\uC5B4\uB3C4 \uADF8 \uC2DC\uAC01\uC5D0 \uB204\uAC00 \uBB34\uC5C7\uC744 \uD588\uB294\uC9C0 \uB9DE\uB300\uC5B4 \uBCFC \uAE30\uB85D\uC774 \uC5C6\uC73C\uBA74 \uC0AC\uB78C\uC744 \uAC00\uB9AC\uD0AC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."},Yp={route:"\uC81C\uCD9C\uD55C \uB450 \uC99D\uAC70\uB85C\uB294 \uB80C\uC988\uAC00 \uB2EB\uD78C \uC720\uB9AC \uB36E\uAC1C\uC640 \uC7A0\uAE34 \uC804\uC2DC\uC2E4\uC744 \uC5B4\uB5BB\uAC8C \uBE60\uC838\uB098\uAC14\uB294\uC9C0 \uC124\uBA85\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uAE38\uC774 \uBE44\uC5B4 \uC788\uC73C\uBA74 \uB204\uAD6C\uB97C \uC9C0\uBAA9\uD574\uB3C4 \uACB0\uB860\uC774 \uC11C\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",link:"\uB80C\uC988\uAC00 \uC804\uC2DC\uC2E4\uC744 \uBE60\uC838\uB098\uAC04 \uAE38\uC740 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC9C0\uBAA9\uD55C \uC0AC\uB78C\uC774 \uADF8 \uAE38\uC744 \uC37C\uB2E4\uB294 \uC810\uC740 \uC785\uC99D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uADF8 \uC0AC\uB78C\uC740 \uC81C\uC2DC\uB41C \uC99D\uAC70\uC5D0 \uB2F5\uC744 \uB0B4\uB193\uC558\uACE0, \uC81C\uCD9C\uD55C \uB450 \uC99D\uAC70\uB85C\uB294 \uADF8 \uB2F5\uC744 \uBB34\uB108\uB728\uB9AC\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."},Mo={culprit:"doyun",route:"drawer",record:"cue"},ee={fresh(n){return{budget:9,tries:3,seen:new Set,asked:new Set,shown:[],pins:new Set,failed:[],hints:n||[]}},inspect(n,t){return n.seen.has(t)?"again":n.budget?(n.seen.add(t),n.budget--,"new"):"blocked"},ask(n,t){return n.asked.has(t)?"again":n.budget?(n.asked.add(t),n.budget--,"new"):"blocked"},present(n,t,e){if(!n.asked.has(t)||!n.seen.has(e))return"blocked";let i=t+":"+e;return n.shown.includes(i)?"again":(n.shown.push(i),"new")},reaction(n,t){return bS[n+":"+t]||Sn.find(e=>e.id===n).other},lacking(n){let t=[];return n.seen.has(Mo.route)||t.push("route"),n.seen.has(Mo.record)||t.push("record"),t},stuck(n){return n.budget===0&&ee.lacking(n).length>0},unheard(n){return n.budget===0&&n.asked.size<Sn.length},ready(n,t,e){let i=[{id:"person",ok:!!t},{id:"proof",ok:e.length===2}];if(t)for(let s of e)i.push({id:"shown",e:s,ok:n.shown.includes(t+":"+s)});return{ok:n.tries>0&&!!t&&e.length===2&&i.every(s=>s.ok),steps:i}},combo(n,t){return n+"|"+[...t].sort().join("+")},tried(n,t,e){return n.failed.includes(ee.combo(t,e))},judge(n,t){let e=t.includes(Mo.route),i=e&&n===Mo.culprit&&t.includes(Mo.record);return{ok:i,kind:i?"win":e?"link":"route"}},submit(n,t,e){if(!ee.ready(n,t,e).ok)return null;let i=ee.judge(t,e);return i.ok||(n.tries--,n.failed.push(ee.combo(t,e))),i},nextHint(n){for(let t of Vl)if(!(t.until&&n.seen.has(t.until)))for(let e=0;e<t.levels.length;e++){let i=t.topic+":"+e;if(!n.hints.includes(i))return i}return null},hintText(n){let[t,e]=n.split(":");return Vl.find(i=>i.topic===t).levels[+e]},takeHint(n){let t=ee.nextHint(n);return t&&n.hints.push(t),t}};var Zp=["lock","fog","drawer","cue","audio","poster"],Jp=["min","sera","doyun","yujin"];function ju(n,t={}){let e=t.verdict||null,i={};for(let s of Zp)i["e:"+s]=n.seen.has(s)?"seen":n.budget?"new":"closed";for(let s of Jp)i["p:"+s]=n.asked.has(s)?"asked":n.budget?"new":"closed";return{unlocked:Zp.filter(s=>n.seen.has(s)),claims:Jp.filter(s=>n.asked.has(s)),marks:i,pinned:[...n.pins].sort(),selected:t.selected||null,accuse:t.tab==="accuse"&&!e?{person:t.person||null,proof:[...t.proof||[]].sort()}:null,mood:e?e.ok?"win":"dim":"normal"}}var $p="0217-v3-sound",we=null,To=null,qi=!0;try{qi=localStorage.getItem($p)!=="off"}catch{}var Ao=()=>qi;function jp(n){qi=!!n;try{localStorage.setItem($p,qi?"on":"off")}catch{}if(we)try{qi?th():we.suspend()}catch{}}var Qp=["pointerdown","pointerup","touchend","click","keydown"],Wl=!1;function Hl(){if(!Wl){Wl=!0;for(let n of Qp)addEventListener(n,tm,{capture:!0,passive:!0})}}function Qu(){if(Wl){Wl=!1;for(let n of Qp)removeEventListener(n,tm,{capture:!0})}}function th(){if(we){if(we.state==="running"){Qu();return}try{we.resume().then(()=>{we&&we.state==="running"?Qu():Hl()},Hl)}catch{Hl()}}}function tm(){if(qi){if(!we){try{navigator.audioSession&&(navigator.audioSession.type="ambient")}catch{}let n=window.AudioContext||window.webkitAudioContext;if(!n){Qu();return}try{we=new n,To=we.createGain(),To.gain.value=.5,To.connect(we.destination)}catch{we=null;return}}th()}}function em(){Hl(),document.addEventListener("visibilitychange",()=>{we&&document.hidden?we.suspend().catch(()=>{}):we&&qi&&th()})}function Bn(n,t,{type:e="sine",gain:i=.12,at:s=0,to:r=null}={}){let o=we.currentTime+s,a=we.createOscillator(),l=we.createGain();a.type=e,a.frequency.setValueAtTime(n,o),r&&a.frequency.exponentialRampToValueAtTime(r,o+t),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(To),a.start(o),a.stop(o+t+.02)}function wo(n,{type:t="bandpass",freq:e=1200,q:i=.8,gain:s=.1,at:r=0,attack:o=.01}={}){let a=we.currentTime+r,l=Math.max(1,Math.floor(we.sampleRate*n)),c=we.createBuffer(1,l,we.sampleRate),u=c.getChannelData(0);for(let p=0;p<l;p++)u[p]=Math.random()*2-1;let f=we.createBufferSource(),h=we.createBiquadFilter(),m=we.createGain();f.buffer=c,h.type=t,h.frequency.value=e,h.Q.value=i,m.gain.setValueAtTime(1e-4,a),m.gain.exponentialRampToValueAtTime(s,a+o),m.gain.exponentialRampToValueAtTime(1e-4,a+n),f.connect(h).connect(m).connect(To),f.start(a),f.stop(a+n+.02)}var Kp={tick(){Bn(1800,.03,{gain:.035})},spend(){Bn(660,.12,{type:"triangle",gain:.1}),Bn(440,.2,{type:"triangle",gain:.1,at:.1})},free(){Bn(880,.09,{gain:.06})},fog(){wo(1.6,{freq:1400,q:.6,gain:.08,attack:.35})},click(){wo(.03,{type:"highpass",freq:3e3,gain:.18}),Bn(2400,.03,{type:"square",gain:.05})},beep(){Bn(1e3,.07,{type:"square",gain:.04}),Bn(1e3,.07,{type:"square",gain:.04,at:.12})},slide(){wo(.32,{freq:2600,q:.7,gain:.1,attack:.06}),wo(.18,{type:"lowpass",freq:700,gain:.06,at:.12})},stamp(){Bn(90,.16,{gain:.22,to:60}),wo(.05,{type:"lowpass",freq:600,gain:.12})},tense(){Bn(110,.9,{type:"sawtooth",gain:.035}),Bn(116,.9,{type:"sawtooth",gain:.03})},solve(){[523,659,784,1047].forEach((n,t)=>Bn(n,.5,{gain:.08,at:t*.12}))},fail(){Bn(220,.6,{type:"triangle",gain:.09,to:165})}};function xn(n){if(!(!qi||!we||we.state!=="running"||!Kp[n]))try{Kp[n]()}catch{}}var D={g:null,ui:null,world:null,no3d:!1,unavailable:!1,talkPid:null,sceneTold:!1,insets:{top:0,bottom:0,left:0,right:0},makeWorld:null},wS=new Set(["sync","pause","setQuality","setInsets","dispose","debug","setReducedMotion"]);function te(n,...t){let e=D.world;if(!e||typeof e[n]!="function"||D.no3d&&!wS.has(n))return Promise.resolve();try{return Promise.resolve(e[n](...t)).catch(()=>{})}catch{return Promise.resolve()}}function cr(n,...t){let e=D.world;if(!e||D.no3d||typeof e[n]!="function")return null;try{return e[n](...t)}catch{return null}}var Qn=()=>!!D.world&&!D.no3d,sm="0217-v3-settings",_n=(()=>{let n={motion:!1,quality:"auto",off3d:!1};try{let t=JSON.parse(localStorage.getItem(sm)||"{}")||{};typeof t.motion=="boolean"&&(n.motion=t.motion),["auto","low","high"].includes(t.quality)&&(n.quality=t.quality),typeof t.off3d=="boolean"&&(n.off3d=t.off3d)}catch{}return n})();function Eo(){try{localStorage.setItem(sm,JSON.stringify(_n))}catch{}}var nm=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}})(),wi=()=>_n.motion||!!(nm&&nm.matches),im=(()=>{try{return matchMedia("(max-height: 520px), (min-width: 960px)")}catch{return null}})(),eh=()=>!!(im&&im.matches);var ot=n=>document.getElementById(n),Et=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),yn=Object.fromEntries(Fn.map(n=>[n.id,n])),Ee=Object.fromEntries(Sn.map(n=>[n.id,n])),ur=["scene","people","notes","accuse"],nh={scene:"\uD604\uC7A5",people:"\uBA74\uB2F4",notes:"\uAE30\uB85D",accuse:"\uC9C0\uBAA9"},Yi=n=>"\u300C"+yn[n].name+"\u300D",hr=n=>Yi(n)+Zu(yn[n].name,"\uC744","\uB97C"),ih=n=>Ee[n].name+Zu(Ee[n].name,"\uC744","\uB97C"),ge=(n,t,e)=>'[data-action="'+n+'"]'+(t?'[data-id="'+t+'"]':"")+(e?'[data-arg="'+e+'"]':""),Xt=(n,t,e,i={})=>'<button type="button"'+(i.cls?' class="'+i.cls+'"':"")+' data-action="'+n+'"'+(t?' data-id="'+t+'"':"")+(i.arg?' data-arg="'+i.arg+'"':"")+(i.attr?" "+i.attr:"")+">"+e+"</button>",TS={min:"#c28493",sera:"#839e4e",doyun:"#c07fc0",yujin:"#52a660"},sh=n=>'<span class="band" aria-hidden="true" style="--band:'+TS[n]+'">'+"<i></i>".repeat(Sn.findIndex(t=>t.id===n)+1)+"</span>";var AS=n=>D.ui.lit&&D.ui.lit.has(n)?" on":"",xe=(n,t,e,i="")=>"<"+n+' data-cue="'+t+'" class="'+i+AS(t)+'">'+e+"</"+n+">",ES={"0152":"01:52","021659":"02:16:59","021700":"02:17:00","021708":"02:17:08"},CS=["0152","021659","021700","021708"];function Xl(){let n="";for(let t of CS)D.ui.lit&&D.ui.lit.has(t)&&(n=ES[t]);return n||"01:52"}var RS={lock:()=>'<div class="lcd">'+xe("p","locked",'<span class="mono">01:58</span> \uC7A0\uAE40 \xB7 \uBD09\uC778')+xe("p","opened",'<span class="mono">02:19</span> \uACBD\uBE44\uAC00 \uBD09\uC778 \uD655\uC778 \uB4A4 \uC5F4\uB9BC \xB7 \uADF8 \uC0AC\uC774 \uC5F4\uB9B0 \uAE30\uB85D \uC5C6\uC74C')+xe("p","seal","\uBD09\uC778 \uBC88\uD638 \xB7 \uB300\uC7A5\uACFC \uAC19\uC74C \xB7 \uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C")+xe("p","patrol","\uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94 \xB7 30\uBD84\uB9C8\uB2E4")+xe("p","late",'<span class="mono">02:00</span> \uCC28\uB840 \u2192 <span class="mono">02:09</span> \uB20C\uB9BC')+"</div>",fog:()=>'<div class="monitor"><div class="screen'+(D.ui.lit&&D.ui.lit.has("021700")&&!D.ui.lit.has("021708")?" white":"")+'"><span class="rec">REC</span><span class="ts mono" id="boardTs">'+Xl()+'</span></div><ol class="strip">'+xe("li","0152",'<b class="mono">01:52</b> \uBC1B\uCE68\uB300 \uB4A4\uB85C \uB3CC\uC544\uAC00 \uC219\uC600\uB2E4\uAC00 \uB098\uAC10')+xe("li","021659",'<b class="mono">02:16:59</b> \uB80C\uC988 \uC81C\uC790\uB9AC')+xe("li","021700",'<b class="mono">02:17:00</b> \uC548\uAC1C \xB7 8\uCD08 \uB3D9\uC548 \uD558\uC580 \uD654\uBA74')+xe("li","021708","\uC548\uAC1C \uAC77\uD798 \xB7 \uB80C\uC988 \uC5C6\uC74C \xB7 \uB36E\uAC1C \uB2EB\uD798 \xB7 \uD654\uBA74\uC5D0 \uC0AC\uB78C\uC740 \uC7A1\uD788\uC9C0 \uC54A\uC74C")+xe("li","device","\uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D \xB7 \uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9")+"</ol></div>",drawer:()=>'<div class="xsec">'+xe("div","nohandle","<b>\uC804\uC2DC\uC2E4 \uCABD</b><small>\uC190\uC7A1\uC774 \uC5C6\uC74C</small>","cell")+xe("div","cover","<b>\uC720\uB9AC \uB36E\uAC1C</b><small>\uC55E \xB7 \uC606 \xB7 \uC704</small>","cell")+xe("div","slide","<b>\uB4A4\uCABD \xB7 \uC11C\uB78D \uC55E\uD310</b><small>\uBC1B\uCE68\uD310\uC774 \uD1B5\uC9F8\uB85C \uB4A4\uB85C \uBE60\uC9D0</small>","cell")+xe("div","handle","<b>\uCE78\uB9C9\uC774\uBCBD \uC810\uAC80\uAD6C \uB108\uBA38</b><small>\uC870\uBA85 \uBD80\uC2A4 \uC548\uCABD \uC190\uC7A1\uC774</small>","cell")+"</div>"+xe("p","wax","\uC11C\uB78D\uC740 \uC190\uAC00\uB77D \uB450 \uB9C8\uB514\uB9CC\uD07C \uB35C \uB2EB\uD798 \xB7 \uB808\uC77C\uACFC \uADF8 \uC544\uB798 \uBC14\uB2E5\uC5D0 \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8","xnote"),cue:()=>'<table class="console"><tbody>'+xe("tr","schedule",'<th>\uC608\uC57D</th><td><span class="mono">02:30</span> \uC790\uB3D9 \uC810\uAC80 \uD55C \uAC74</td>')+xe("tr","run",'<th>\uC2E4\uD589</th><td><span class="mono">02:17:00</span> \uD050 \uD558\uB098</td>')+xe("tr","sign","<th>\uBC29\uC2DD</th><td>\uC218\uB3D9</td>")+xe("tr","sign","<th>\uC785\uB825 \uC704\uCE58</th><td>\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94</td>")+xe("tr","sign",'<th>\uC11C\uBA85 \uCE78</th><td class="mono">H.D.Y.</td>')+xe("tr","bundle","<th>\uD050 \uB0B4\uC6A9</th><td>\uC9C4\uC5F4\uB300 \uC870\uBA85 \uB0AE\uCDA4 + \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638</td>")+xe("tr","remote","<th>\uC6D0\uACA9 \uC811\uC18D</th><td>\uAE30\uB85D \uC5C6\uC74C</td>")+"</tbody></table>",audio:()=>'<div class="wave"><canvas id="waveCv"></canvas>'+xe("p","021705","\u201C\uC5B4, \uBC8C\uC368?\u201D","sub")+'</div><ul class="chs">'+xe("li","channels","<b>1</b> \uC9C4\uC5F4\uB300 \uC55E \uB9C8\uC774\uD06C")+xe("li","channels","<b>2</b> \uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C")+xe("li","channels","<b>3</b> \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C \uBA54\uBAA8\uC6A9 \uB9C8\uC774\uD06C")+"</ul>",poster:()=>'<div class="proof">'+xe("p","credit","\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04 \u2014 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C","credit")+xe("p","pencil","\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD","pencil")+xe("p","pen","\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4","pen")+xe("p","stamp","\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815 \xB7 01:40","stamp")+"</div>"};function om(n){return'<div class="board board-'+n+'" id="board" aria-hidden="true">'+RS[n]()+"</div>"}function rh(n,t){D.ui.lit||(D.ui.lit=new Set),D.ui.lit.add(t);for(let e of document.querySelectorAll('#stage [data-cue="'+t+'"]'))e.classList.add("on");if(n==="audio"&&ql(),n==="fog"){let e=Xl(),i=ot("boardTs"),s=ot("cctvTime");i&&(i.textContent=e),s&&(s.textContent=e);let r=document.querySelector("#board .screen");r&&r.classList.toggle("white",D.ui.lit.has("021700")&&!D.ui.lit.has("021708"))}}var rm={"0210":0,channels:0,"021700":420,"021703":423,"021705":425};function ql(){let n=ot("waveCv");if(!n||!D.ui.lit)return;let t=Math.max(200,n.clientWidth||300),e=156,i=Math.min(2,window.devicePixelRatio||1);n.width=Math.round(t*i),n.height=Math.round(e*i),n.style.height=e+"px";let s=n.getContext("2d");if(!s)return;s.setTransform(i,0,0,i,0,0),s.clearRect(0,0,t,e);let r=D.ui.lit,o=!D.ui.playing,a=22,l=t-8,c=18,u=(e-c-22)/3,f=a+(l-a)*.2,h=a+(l-a)*.25,m=_=>_<=417?a+(f-a)*_/417:h+(l-h)*(_-417)/12,p='system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';s.font="11px "+p,s.textBaseline="middle";let y=7,g=()=>(y=y*16807%2147483647)/2147483647;for(let _=0;_<3;_++){let w=c+u*_+u/2;s.fillStyle="#b3c3bd",s.fillText(String(_+1),6,w),s.strokeStyle="#344744",s.lineWidth=1,s.beginPath(),s.moveTo(a,w),s.lineTo(l,w),s.stroke(),s.strokeStyle="#6a8f84",s.beginPath();for(let S=a;S<=l;S+=2){if(S>f&&S<h)continue;let E=u*.08*(.4+g());s.moveTo(S,w-E),s.lineTo(S,w+E)}s.stroke()}if(s.fillStyle="#b3c3bd",s.fillText("\u2026",(f+h)/2-4,c+u*1.5),r.has("021700")||o){let _=m(420);s.strokeStyle="#efb761",s.setLineDash([4,4]),s.beginPath(),s.moveTo(_,c-4),s.lineTo(_,c+u*3),s.stroke(),s.setLineDash([]),s.fillStyle="#efb761",s.textAlign="right",s.fillText("02:17:00 \uC548\uAC1C \uBD84\uC0AC\uC74C",_-4,9),s.textAlign="left"}if(r.has("021703")||o){let _=m(423),w=c+u*1.5;s.strokeStyle="#f3eee2",s.lineWidth=2,s.beginPath();for(let S=-4;S<=4;S++){let E=u*.46*(1-Math.abs(S)/5);s.moveTo(_+S*1.6,w-E),s.lineTo(_+S*1.6,w+E)}s.stroke(),s.lineWidth=1}if(r.has("021705")||o){let _=m(425),w=m(426.3),S=c+u*2.5;s.strokeStyle="#f3eee2",s.beginPath();for(let E=_;E<=w;E+=2){let A=(E-_)/(w-_),x=u*.32*Math.sin(Math.PI*A)*(.6+.4*Math.abs(Math.sin(A*17)));s.moveTo(E,S-x),s.lineTo(E,S+x)}s.stroke()}s.fillStyle="#b3c3bd";let d=e-8;s.fillText("02:10",a,d);for(let[_,w]of[[423,"03"],[425,"05"]])(r.has(_===423?"021703":"021705")||o)&&(s.textAlign="center",s.fillText(w,m(_),d),s.textAlign="left");if(!o){let _=0;for(let S of Object.keys(rm))r.has(S)&&(_=Math.max(_,rm[S]));let w=m(_);s.strokeStyle="#b1dcc6",s.lineWidth=2,s.beginPath(),s.moveTo(w,c-6),s.lineTo(w,c+u*3+2),s.stroke(),s.lineWidth=1}}var oh=n=>{let[t,e,i]=n.split(":").map(Number);return t*60+e+(i||0)/60},am=oh("01:40"),IS=oh("02:19"),Yl=n=>((oh(n)-am)/(IS-am)*100).toFixed(2)+"%";function lm(n){let t=Fn.filter(o=>n.seen.has(o.id)).sort((o,a)=>o.at-a.at),e=Sn.filter(o=>n.asked.has(o.id)),i='<section class="sec" aria-labelledby="nBar"><h3 id="nBar">\uC2DC\uAC04\uD45C \uB9C9\uB300</h3>';if(!t.length&&!e.length)return i+'<p class="muted caption">\uD655\uC778\uD55C \uC99D\uAC70\uC758 \uC2DC\uAC01\uACFC \uB4E4\uC740 \uC9C4\uC220\uC774 01:40\uBD80\uD130 02:19 \uC0AC\uC774\uC758 \uB9C9\uB300\uC5D0 \uB193\uC785\uB2C8\uB2E4.</p></section>';let s=t.map(o=>{let a=/이후/.test(o.time),l=o.time.replace(/\s*이후/,""),c=(a?'<i class="tlAfter" style="left:'+Yl(l)+';right:0"></i>':"")+'<i class="tlMark" style="left:'+Yl(l)+'"></i>';return'<li class="tl"><span class="tlLabel"><b class="mono">'+Et(o.time)+"</b> "+Et(o.name)+'</span><span class="tlTrack" aria-hidden="true">'+c+"</span></li>"}).concat(e.map(o=>'<li class="tl who"><span class="tlLabel"><b class="mono">02:17</b> '+Et(o.name)+" \xB7 "+Et(xs[o.id].label)+'</span><span class="tlTrack" aria-hidden="true"><i class="tlMark" style="left:'+Yl("02:17")+'"></i></span></li>')),r='<div class="tlAxis" aria-hidden="true">'+["01:40","02:00","02:10"].map(o=>'<span style="left:'+Yl(o)+'">'+o+"</span>").join("")+'<span class="end">02:19</span></div>';return i+'<p class="muted caption">\uD655\uC778\uD55C \uC99D\uAC70\uC758 \uC2DC\uAC01\uACFC, \uC9C8\uBB38\uC5D0 \uB2F5\uD55C \uC0AC\uB78C\uC774 02\uC2DC 17\uBD84\uC5D0 \uC788\uC5C8\uB2E4\uACE0 \uB9D0\uD55C \uC790\uB9AC\uC785\uB2C8\uB2E4.</p><ol class="tlList" role="list">'+s.join("")+"</ol>"+r+"</section>"}var Co=()=>{let n=D.g;return n.budget?"\uB0A8\uC740 \uC870\uC0AC "+n.budget+"\uD68C.":ee.stuck(n)?"\uB0A8\uC740 \uC870\uC0AC 0\uD68C. \uC774 \uD0ED \uB9E8 \uC704\uC758 \uC548\uB0B4\uB97C \uD655\uC778\uD558\uC138\uC694.":"\uB0A8\uC740 \uC870\uC0AC 0\uD68C. \uC99D\uAC70 \uC81C\uC2DC\uC640 \uC9C0\uBAA9\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},Jl=()=>"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uAC00 "+yo[D.g.tries]+" \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.",Kl=n=>n[0]==="e"?yn[n.slice(2)].name:Ee[n.slice(2)].name+"\uC758 \uC9C4\uC220",dr=(n,t)=>Xt("pin",n,(D.g.pins.has(n)?"\uACE0\uC815 \uD574\uC81C":"\uACE0\uC815")+'<span class="sr"> \xB7 '+Et(Kl(n))+"</span>",{cls:"quiet",arg:t});function Zl(){let n=D.g;if(n.budget)return"";let t=ee.unheard(n)?" \uC9C8\uBB38\uD558\uC9C0 \uBABB\uD55C \uC0AC\uB78C\uC740 \uC9C0\uBAA9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uADF8 \uC0AC\uB78C\uC744 \uC9C0\uBAA9\uD558\uB824\uBA74 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.":"";return ee.stuck(n)?'<section class="stuck" aria-labelledby="stuckTitle" data-testid="stuck"><h3 id="stuckTitle" tabindex="-1">\uC9C0\uAE08 \uAE30\uB85D\uC73C\uB85C\uB294 \uC785\uC99D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4</h3><p>\uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uC744 \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4. \uACB0\uB860\uC744 \uC785\uC99D\uD558\uB824\uBA74 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uBB3C\uC99D\uACFC \uADF8 \uC2DC\uAC01\uC758 \uC77C\uC744 \uC801\uC740 \uAE30\uB85D\uC774 \uBAA8\uB450 \uC788\uC5B4\uC57C \uD558\uB294\uB370, \uC774 \uAC00\uC6B4\uB370 \uBE60\uC9C4 \uAC83\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><ul>'+ee.lacking(n).map(e=>"<li>"+qp[e]+"</li>").join("")+'</ul><p>\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC9C0\uAE08\uC758 \uAE30\uB85D\uC740 \uC9C0\uC6CC\uC9C0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4. \uC774\uBC88\uC5D0\uB294 \uBB34\uC5C7\uC744 \uAC74\uB108\uB6F8\uC9C0 \uBA3C\uC800 \uC815\uD558\uACE0 \uC2DC\uC791\uD558\uC138\uC694.</p><div class="row">'+Xt("restart-ask","stuck","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"primary"})+Xt("hint-open","stuck","\uD78C\uD2B8 \uBCF4\uAE30")+"</div></section>":'<p class="info" data-testid="zero">\uC870\uC0AC \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4. \uC99D\uAC70 \uC81C\uC2DC\uC640 \uAE30\uB85D \uC77D\uAE30, \uC9C0\uBAA9\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.'+t+"</p>"}function cm(n){let e=D.g.shown.filter(i=>i.startsWith(n.id+":")).map(i=>{let s=i.split(":")[1];return'<div class="turn" id="r-'+n.id+"-"+s+'" tabindex="-1"><p class="asked">\u2014 '+Et(hr(s))+' \uC81C\uC2DC\uD588\uB2E4.</p><blockquote class="quote">'+Et(ee.reaction(n.id,s))+"</blockquote></div>"});return'<div class="turn"><p class="asked">\u2014 '+Et(bo)+'</p><blockquote class="quote">'+Et(n.say)+"</blockquote></div>"+e.join("")}var ah=n=>D.g.pins.has(n)?" \xB7 \uACE0\uC815\uB428":"",lh={scene(){let n=D.g,t=D.ui;return'<h2 id="stageTitle" tabindex="-1">\uD604\uC7A5 \uC870\uC0AC</h2><p class="muted caption">'+(D.sceneTold?"\uB0A8\uC740 \uC870\uC0AC "+n.budget+"\uD68C \xB7 "+(Qn()?"3D\uB098 \uBAA9\uB85D\uC5D0\uC11C \uACE0\uB974\uC138\uC694.":"\uBAA9\uB85D\uC5D0\uC11C \uACE0\uB974\uC138\uC694."):"\uC99D\uAC70\uB97C \uCC98\uC74C \uD655\uC778\uD560 \uB54C\uB9CC \uC870\uC0AC \uAE30\uD68C\uB97C \uD55C \uBC88 \uC501\uB2C8\uB2E4. \uB2E4\uC2DC \uBCF4\uAE30\uC640 \uACE0\uC815\uC740 \uBB34\uB8CC\uC785\uB2C8\uB2E4."+(Qn()?" 3D \uD654\uBA74\uC744 \uB204\uB974\uBA74 \uACE0\uB974\uAE30\uB9CC \uD558\uACE0, \uC870\uC0AC \uAE30\uD68C\uB294 \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":""))+"</p>"+Zl()+'<ul class="rows" role="list">'+Fn.map(i=>{let s="e:"+i.id,r=n.seen.has(i.id),o=t.selected===s,a=Xt("select",s,'<span class="rowName">'+Et(i.name)+'</span><span class="rowMeta">'+Et(i.kind+" \xB7 "+i.time)+" \xB7 "+(r?"\uD655\uC778\uD568":"\uD655\uC778 \uC804")+ah(s)+"</span>",{cls:"rowBtn",attr:'aria-expanded="'+o+'"'+(o?' aria-controls="rb-'+i.id+'"':"")}),l=o?'<div class="rowBody" id="rb-'+i.id+'"><p class="muted caption">'+Et(i.tease)+'</p><div class="row">'+(r?Xt("board",i.id,'\uB2E4\uC2DC \uBCF4\uAE30<span class="sr"> \xB7 '+Et(i.name)+"</span>",{cls:"primary"})+dr(s):Xt("inspect",i.id,'<span class="sr">'+Et(i.name)+" </span>\uD655\uC778\uD558\uAE30 \xB7 "+(n.budget?"\uC870\uC0AC 1\uD68C":"\uC870\uC0AC \uAE30\uD68C \uC5C6\uC74C"),{cls:"primary",attr:'aria-disabled="'+!n.budget+'"'}))+"</div></div>":"";return'<li class="item1'+(o?" on":"")+(r?" seen":"")+'" id="row-'+i.id+'">'+a+l+"</li>"}).join("")+'</ul><section class="info" aria-labelledby="layoutTitle" data-testid="layout"><h3 id="layoutTitle">\uD604\uC7A5 \uBC30\uCE58</h3><p>'+Et(Xp)+"</p></section>"},board(){let n=D.ui.board,t=yn[n],e=D.ui.lit||new Set,i="e:"+n;return'<p class="pill">'+Et(t.kind+" \xB7 "+t.time)+" \xB7 \uD655\uC778\uD568"+ah(i)+'</p><h2 id="stageTitle" tabindex="-1">'+Et(t.name)+"</h2>"+om(n)+'<h3 class="sr">\uD655\uC778\uD55C \uC0AC\uC2E4</h3><ol class="facts" role="list">'+or[n].map(s=>'<li data-cue="'+s.cue+'" class="'+(e.has(s.cue)?"on":"")+'">'+Et(s.t)+"</li>").join("")+'</ol><details class="raw"><summary>\uC6D0\uBB38 \uAE30\uB85D</summary><blockquote class="quote">'+Et(t.text)+'</blockquote></details><div class="row" id="boardCtl">'+ch()+"</div>"},people(){let n=D.g,t=D.ui,e=Fn.filter(i=>n.seen.has(i.id));return'<h2 id="stageTitle" tabindex="-1">\uC6A9\uC758\uC790 \uBA74\uB2F4</h2><p class="muted caption">\uC0AC\uB78C\uB9C8\uB2E4 \uCCAB \uC9C8\uBB38\uC5D0\uB9CC \uC870\uC0AC \uAE30\uD68C\uB97C \uD55C \uBC88 \uC501\uB2C8\uB2E4. \uC9C4\uC220\uC744 \uB4E4\uC740 \uB4A4\uC5D0\uB294 \uD655\uC778\uD55C \uC99D\uAC70\uB97C \uBB34\uB8CC\uB85C \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>'+Zl()+'<ul class="rows" role="list">'+Sn.map(i=>{let s="p:"+i.id,r=n.asked.has(i.id),o=t.selected===s,a=n.shown.filter(f=>f.startsWith(i.id+":")).length,l='<span aria-hidden="true">'+i.mark+" </span>"+Et(i.role)+(r?" \xB7 \uC9C4\uC220 \uD655\uBCF4"+(e.length?" \xB7 \uC99D\uAC70 \uC81C\uC2DC "+a+"/"+e.length:""):" \xB7 \uC9C8\uBB38 \uC804")+ah(s),c=Xt("select",s,sh(i.id)+'<span class="rowName">'+Et(i.name)+'</span><span class="rowMeta">'+l+"</span>",{cls:"rowBtn",attr:'aria-expanded="'+o+'"'+(o?' aria-controls="pb-'+i.id+'"':"")}),u="";if(o&&!r)u='<div class="rowBody" id="pb-'+i.id+'" tabindex="-1"><p class="muted caption">'+Et(i.line)+'</p><p class="asked">\uC9C8\uBB38: '+Et(bo)+'</p><div class="row">'+Xt("ask",i.id,'<span class="sr">'+Et(i.name)+"\uC5D0\uAC8C </span>\uC9C8\uBB38\uD558\uAE30 \xB7 "+(n.budget?"\uC870\uC0AC 1\uD68C":"\uC870\uC0AC \uAE30\uD68C \uC5C6\uC74C"),{cls:"primary",attr:'aria-disabled="'+!n.budget+'"'})+"</div></div>";else if(o){let f=e.length?'<div class="row">'+e.map(h=>{let m=n.shown.includes(i.id+":"+h.id);return Xt("present",i.id,Et(h.name)+(m?" \xB7 \uC81C\uC2DC\uD568":""),{cls:"chip"+(m?" done":""),arg:h.id})}).join("")+"</div>":'<p class="muted caption">\uC81C\uC2DC\uD560 \uC99D\uAC70\uAC00 \uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uC99D\uAC70\uB97C \uBA3C\uC800 \uD655\uC778\uD558\uC138\uC694.</p>';u='<div class="rowBody"><p class="muted caption">'+Et(i.line)+'</p><div class="row talkCtl" id="talkCtl" data-pid="'+i.id+'"></div><div class="reveal" id="pb-'+i.id+'" tabindex="-1">'+cm(i)+'</div><div class="present" role="group" aria-label="'+Et(i.name)+'\uC5D0\uAC8C \uC99D\uAC70 \uC81C\uC2DC"><h4>\uC99D\uAC70 \uC81C\uC2DC \xB7 \uBB34\uB8CC</h4>'+f+'</div><div class="row">'+(Qn()?Xt("talk-replay",i.id,'\uC9C4\uC220 \uB2E4\uC2DC \uB4E3\uAE30<span class="sr"> \xB7 '+Et(i.name)+"</span>"):"")+dr(s)+"</div></div>"}return'<li class="item1'+(o?" on":"")+(r?" seen":"")+'" id="row-'+i.id+'">'+c+u+"</li>"}).join("")+"</ul>"},notes(){let n=D.g,t=Fn.filter(s=>n.seen.has(s.id)).sort((s,r)=>s.at-r.at),e=Sn.filter(s=>n.asked.has(s.id)),i=[...n.pins].map(s=>{let r=s.slice(2);return'<div class="item"><h4>'+Et(Kl(s))+"</h4><p>"+Et(s[0]==="e"?yn[r].text:Ee[r].say)+'</p><div class="row">'+dr(s,"top")+"</div></div>"});return'<h2 id="stageTitle" tabindex="-1">\uC0AC\uAC74 \uAE30\uB85D</h2><p class="muted caption">\uC77D\uAE30\uC640 \uACE0\uC815\uC740 \uBB34\uB8CC\uC785\uB2C8\uB2E4. \uACE0\uC815\uD55C \uAE30\uB85D\uC740 \uB9E8 \uC704\uC5D0 \uBAA8\uC785\uB2C8\uB2E4.</p><p class="caption" data-testid="summary">\uC99D\uAC70 '+n.seen.size+"/"+Fn.length+" \uD655\uC778 \xB7 \uC9C4\uC220 "+n.asked.size+"/"+Sn.length+" \uD655\uBCF4 \xB7 \uACE0\uC815 "+n.pins.size+"\uAC1C</p>"+Zl()+lm(n)+'<section class="sec" aria-labelledby="nPin"><h3 id="nPin" tabindex="-1">\uACE0\uC815\uD55C \uAE30\uB85D</h3>'+(i.length?i.join(""):'<p class="muted caption">\uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4. \uC99D\uAC70\uB098 \uC9C4\uC220 \uC606\uC758 \u2018\uACE0\uC815\u2019\uC744 \uB204\uB974\uBA74 \uC5EC\uAE30\uC5D0 \uBAA8\uC785\uB2C8\uB2E4.</p>')+'</section><section class="sec" aria-labelledby="nTime"><h3 id="nTime">\uC2DC\uAC04\uD45C</h3>'+(t.length?'<ol class="timeline" role="list">'+t.map(s=>'<li><p><b class="mono">'+Et(s.time)+"</b> "+Et(s.name)+"</p><p>"+Et(s.text)+'</p><div class="row">'+dr("e:"+s.id,"list")+"</div></li>").join("")+"</ol>":'<p class="muted caption">\uD604\uC7A5\uC5D0\uC11C \uC99D\uAC70\uB97C \uD655\uC778\uD558\uBA74 \uC2DC\uAC04 \uC21C\uC11C\uB300\uB85C \uC313\uC785\uB2C8\uB2E4.</p>')+'</section><section class="sec" aria-labelledby="nSay"><h3 id="nSay">\uC9C4\uC220\uACFC \uC81C\uC2DC \uAE30\uB85D</h3>'+(e.length?e.map(s=>'<div class="item"><h4>'+Et(s.name+" \xB7 "+s.role)+"</h4>"+cm(s)+'<div class="row">'+dr("p:"+s.id,"list")+"</div></div>").join(""):'<p class="muted caption">\uBA74\uB2F4\uC5D0\uC11C \uC9C8\uBB38\uD574 \uB4E4\uC740 \uC9C4\uC220\uACFC \uC99D\uAC70\uB97C \uC81C\uC2DC\uD574 \uB4E4\uC740 \uB2F5\uC774 \uC5EC\uAE30\uC5D0 \uB0A8\uC2B5\uB2C8\uB2E4.</p>')+"</section>"+(n.hints.length?'<section class="sec" aria-labelledby="nHint"><h3 id="nHint">\uC5F0 \uD78C\uD2B8</h3><ol class="list">'+n.hints.map(s=>"<li>"+Et(ee.hintText(s))+"</li>").join("")+"</ol></section>":"")},accuse(){let n=D.g,t=D.ui,e=Fn.filter(u=>n.seen.has(u.id)).sort((u,f)=>n.pins.has("e:"+f.id)-n.pins.has("e:"+u.id)),i=t.proof.length,s=i===2,r=ee.ready(n,t.person,t.proof),o=t.person&&Ee[t.person],a=o&&n.asked.has(o.id),l=['<li class="'+(o?"ok":"")+'">'+(o?Et(ih(o.id))+" \uC9C0\uBAA9\uD569\uB2C8\uB2E4.":"\uBC94\uC778 \uD55C \uBA85\uC744 \uACE0\uB974\uC138\uC694.")+"</li>",'<li class="'+(s?"ok":"")+'">'+(s?"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":i?"\uC99D\uAC70\uB97C \uD558\uB098 \uB354 \uACE0\uB974\uC138\uC694.":"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE0\uB974\uC138\uC694.")+"</li>"],c="";if(o&&!a)l.push("<li>"+Et(o.name)+"\uC758 \uC9C4\uC220\uC744 \uC544\uC9C1 \uB4E3\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. "+(n.budget?"\uBA74\uB2F4\uC5D0\uC11C \uBA3C\uC800 \uC9C8\uBB38\uD558\uC138\uC694(\uC870\uC0AC 1\uD68C).":"\uC870\uC0AC \uAE30\uD68C\uAC00 \uC5C6\uC5B4 \uC9C4\uC220\uC744 \uB4E4\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC9C4\uC220\uC744 \uB4E3\uC9C0 \uC54A\uC740 \uC0AC\uB78C\uC740 \uC9C0\uBAA9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")+"</li>");else if(o)for(let u of t.proof){let f=n.shown.includes(o.id+":"+u);l.push('<li class="'+(f?"ok":"")+'">'+Et(o.name)+"\uC5D0\uAC8C "+Et(hr(u))+(f?" \uC81C\uC2DC\uD588\uC2B5\uB2C8\uB2E4.":" \uC544\uC9C1 \uC81C\uC2DC\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")+"</li>")}return o&&i&&!r.steps.filter(u=>u.id==="shown").every(u=>u.ok)&&(a||n.budget)&&(c='<div class="row">'+Xt("goto-person",o.id,"\uBA74\uB2F4\uC5D0\uC11C "+Et(o.name)+"\uC5D0\uAC8C "+(a?"\uC81C\uC2DC\uD558\uAE30":"\uC9C8\uBB38\uD558\uAE30"))+"</div>"),'<h2 id="stageTitle" tabindex="-1">\uCD5C\uC885 \uC9C0\uBAA9</h2><p class="muted caption">\uBC94\uC778 \uD55C \uBA85\uACFC \uC774\uBBF8 \uD655\uC778\uD55C \uC99D\uAC70 \uB450 \uAC1C\uB97C \uC81C\uCD9C\uD569\uB2C8\uB2E4. \uD55C \uC99D\uAC70\uB294 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744, \uB2E4\uB978 \uD55C \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC758 \uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098\uB294 \uC9C0\uC810\uC744 \uBCF4\uC5EC \uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC81C\uCD9C\uD560 \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC5B4\uC57C \uD569\uB2C8\uB2E4. '+(n.tries>1?"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 "+yo[n.tries]+" \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uC2B5\uB2C8\uB2E4.":"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uD55C \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4. \uC774\uBC88\uC5D0 \uD2C0\uB9AC\uBA74 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB05D\uB098\uACE0, \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.")+"</p>"+Zl()+"<fieldset><legend>1. \uBC94\uC778\uC73C\uB85C \uC9C0\uBAA9\uD560 \uC0AC\uB78C</legend>"+Sn.map(u=>'<label class="pick"><input type="radio" name="suspect" value="'+u.id+'"'+(t.person===u.id?" checked":"")+"><span>"+sh(u.id)+Et(u.name)+"<small>"+Et(u.role)+(n.asked.has(u.id)?"":" \xB7 \uC9C4\uC220 \uB4E3\uC9C0 \uC54A\uC74C")+"</small></span></label>").join("")+"</fieldset><fieldset><legend>2. \uC99D\uAC70 \uB450 \uAC1C ("+i+"/2 \uC120\uD0DD)</legend>"+(e.length?e.map(u=>{let f=t.proof.includes(u.id),h=s&&!f;return'<label class="pick'+(h?" off":"")+'"><input type="checkbox" name="proof" value="'+u.id+'" aria-describedby="proofNote"'+(f?" checked":"")+(h?' aria-disabled="true"':"")+"><span>"+Et(u.name)+(n.pins.has("e:"+u.id)?" \xB7 \uACE0\uC815\uB428":"")+"<small>"+Et(u.tease)+(a?n.shown.includes(o.id+":"+u.id)?" \xB7 \uC81C\uC2DC\uD568":" \xB7 \uC544\uC9C1 \uC81C\uC2DC\uD558\uC9C0 \uC54A\uC74C":"")+"</small></span></label>"}).join(""):'<p class="muted caption">\uC544\uC9C1 \uD655\uC778\uD55C \uC99D\uAC70\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uC99D\uAC70\uB97C \uBA3C\uC800 \uD655\uC778\uD558\uC138\uC694.</p>')+'<p class="caption muted" id="proofNote">'+(s?"\uB450 \uAC1C\uB97C \uBAA8\uB450 \uACE8\uB790\uC2B5\uB2C8\uB2E4. \uBC14\uAFB8\uB824\uBA74 \uACE0\uB978 \uC99D\uAC70 \uD558\uB098\uB97C \uBA3C\uC800 \uD574\uC81C\uD558\uC138\uC694.":"")+'</p></fieldset><section class="sec" aria-labelledby="checkTitle"><h3 id="checkTitle" tabindex="-1">3. \uC81C\uCD9C \uC804 \uD655\uC778</h3><ul class="steps" role="list" id="steps" data-testid="steps">'+l.join("")+"</ul>"+c+'</section><p class="sec">'+Xt("submit-ask","","\uACB0\uB860 \uC81C\uCD9C",{cls:"primary",attr:'aria-disabled="'+!r.ok+'" aria-describedby="steps"'})+"</p>"}};function ch(){let n=D.ui.board;return n?(D.ui.playing?Xt("skip-play",n,"\uC7AC\uC0DD \uAC74\uB108\uB6F0\uAE30"):Qn()?Xt("replay",n,"\uB2E4\uC2DC \uC7AC\uC0DD"):"")+dr("e:"+n,"board")+Xt("board-close",n,"\uB2EB\uAE30",{cls:"primary"}):""}function PS(n){let[t,e]=tn[n],i=n===tn.length-1;return'<section class="sec story" aria-labelledby="storyTitle"><h3 id="storyTitle" tabindex="-1">\uC815\uB2F5 \uC7AC\uD604 \xB7 '+(n+1)+"/"+tn.length+'</h3><p class="storyT"><b class="mono">'+t+'</b></p><p class="storyX">'+Et(e)+'</p><div class="row">'+Xt("story-prev","",'<span aria-hidden="true">\u25C0 </span>\uC774\uC804',{attr:'aria-disabled="'+(n===0)+'"'})+Xt("story-next","",(i?"\uB9C8\uBB34\uB9AC":"\uB2E4\uC74C")+'<span aria-hidden="true"> \u25B6</span>',{cls:"primary"})+Xt("story-auto","",D.ui.auto?"\uC790\uB3D9 \uC7AC\uC0DD \uBA48\uCDA4":"\uC790\uB3D9 \uC7AC\uC0DD",{attr:'aria-pressed="'+!!D.ui.auto+'"'})+Xt("story-skip","","\uC7AC\uD604 \uAC74\uB108\uB6F0\uAE30",{cls:"quiet"})+"</div></section>"}function um(){let n=D.g,t=D.ui,e=t.verdict,i=9-n.budget;if(e.ok){let o='<div class="final" data-testid="verdict" data-result="win"><p class="tag" aria-hidden="true">VERDICT</p><h2 id="stageTitle" tabindex="-1">'+Et(ar.title)+"</h2><p>"+Et(ar.lead)+"</p></div>",a=t.story==null?tn.length:t.story;return a<tn.length?o+PS(a):o+'<section class="sec"><h3 id="storyEnd" tabindex="-1">\uC2DC\uAC04\uD45C</h3><ol class="timeline" role="list">'+tn.map(([l,c])=>'<li><p><b class="mono">'+l+"</b> "+Et(c)+"</p></li>").join("")+'</ol></section><section class="sec card"><h3>\uC218\uBC95</h3><p>'+Et(ar.method)+'</p></section><section class="sec card"><h3>\uB450 \uC99D\uAC70\uAC00 \uC11C\uB85C\uB97C \uAC80\uC99D\uD55C \uBC29\uC2DD</h3><p>'+Et(ar.cross)+'</p></section><section class="sec card"><h3>\uB3D9\uAE30</h3><p>'+Et(ar.motive)+'</p></section><p class="sec muted caption">\uC870\uC0AC \uAE30\uD68C '+i+"\uD68C \uC0AC\uC6A9 \xB7 "+Np[3-n.tries+1]+" \uBC88\uC9F8 \uACB0\uB860\uC5D0\uC11C \uD574\uACB0 \xB7 "+(n.hints.length?"\uD78C\uD2B8 "+n.hints.length+"\uAC1C \uC5F4\uB78C":"\uD78C\uD2B8 \uC5C6\uC774 \uD574\uACB0")+'</p><div class="row sec">'+Xt("restart","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uD558\uAE30",{cls:"primary"})+Xt("story-again","","\uC7AC\uD604 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uBCF4\uAE30")+"</div>"}let s=n.tries===0,r='<div class="final bad" data-testid="verdict" data-result="'+(s?"unsolved":"lose")+'" data-kind="'+e.kind+'"><p class="tag" aria-hidden="true">VERDICT</p><h2 id="stageTitle" tabindex="-1">'+(s?"\uBBF8\uACB0":"\uC785\uC99D \uC2E4\uD328")+"</h2><p>"+Et(ih(t.person))+' \uC9C0\uBAA9\uD55C \uACB0\uB860\uC740 \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.</p></div><section class="sec"><h3>\uBB34\uC5C7\uC774 \uBD80\uC871\uD588\uB098</h3><p>'+Yp[e.kind]+"</p></section>";return s?r+'<section class="sec"><p>'+Et(Lp)+'</p></section><p class="sec">'+Xt("restart","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"primary"})+"</p>":r+'<section class="sec"><p>\uC9C0\uBAA9\uD55C \uC0AC\uB78C\uC774 \uB9DE\uC558\uB294\uC9C0 \uD2C0\uB838\uB294\uC9C0\uB294 \uC54C\uB824 \uB4DC\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. '+Jl().replace("\uC2B5\uB2C8\uB2E4.","\uACE0, \uC870\uC0AC \uAE30\uB85D\uC740 \uADF8\uB300\uB85C \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.")+' \uB9C9\uD788\uBA74 \uC704\uCABD\uC758 \uD78C\uD2B8\uB97C \uD55C \uB2E8\uACC4\uC529 \uC5F4\uC5B4 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></section><div class="row sec">'+Xt("resume","verdict","\uAE30\uB85D \uADF8\uB300\uB85C \uC774\uC5B4\uC11C \uC870\uC0AC",{cls:"primary"})+Xt("restart-ask","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"quiet"})+"</div>"}var Re={pid:null,items:[],i:0},pr=()=>Re.items.length>0&&Re.i<Re.items.length,hm=()=>pr()?Re.items[Re.i].who:null;function $l(n,t){Re.pid=n,Re.items=t,Re.i=0,fm()}function dm(){pr()&&(Re.i++,Re.i>=Re.items.length?Ro():fm())}function Ro(){Re.items=[],Re.i=0,Re.pid=null;let n=ot("bubble");n&&(n.hidden=!0),jl()}function fm(){let n=ot("bubble");if(!n)return;let t=Re.items[Re.i];ot("bubbleText").textContent=t.text,ot("bubbleMore").textContent=Re.i<Re.items.length-1?"\uB20C\uB7EC\uC11C \uB2E4\uC74C \xB7 "+(Re.i+1)+"/"+Re.items.length:"\uB20C\uB7EC\uC11C \uB2EB\uAE30",n.classList.toggle("mine",t.who==="q"),n.hidden=D.no3d||!D.world,Ql(),jl()}function jl(){let n=ot("talkCtl");if(!n)return;let t=pr()&&Re.pid===n.dataset.pid&&!D.no3d&&!!D.world;n.innerHTML=t?Xt("talk-next","","\uB2E4\uC74C \uBB38\uC7A5 \xB7 "+(Re.i+1)+"/"+Re.items.length)+Xt("talk-all","","\uBAA8\uB450 \uBCF4\uAE30"):"",n.hidden=!t}function Ql(){let n=ot("bubble");if(!n||n.hidden||!pr())return;let t=Re.items[Re.i],e=null;if(t.who!=="q"){let r=cr("people"),o=Array.isArray(r)?r.find(l=>String(l.id).replace(/^p:/,"")===t.who):null,a=ot("canvas");if(o&&o.visible&&a){let l=a.getBoundingClientRect(),c=l.left+o.x,u=l.top+o.y;u>D.insets.top+60&&u<innerHeight-D.insets.bottom&&(e={x:c,y:u})}}if(!e){n.classList.add("docked"),n.style.left="",n.style.top="";return}n.classList.remove("docked");let i=n.offsetWidth||240,s=Math.min(innerWidth-i/2-8,Math.max(i/2+8,e.x));n.style.left=s+"px",n.style.top=e.y-10+"px"}var tc=["peek","half","full"],pm={peek:"half",half:"full",full:"peek"},NS={peek:"\uCD5C\uC18C",half:"\uC808\uBC18",full:"\uC804\uCCB4"},DS={peek:"\uCD5C\uC18C\uB85C",half:"\uC808\uBC18\uC73C\uB85C",full:"\uC804\uCCB4\uB85C"},Zi={peek:188,half:400,full:600},mm=()=>{},uh=!1;function gm(n){mm=n;let t=ot("handle"),e=ot("sheet"),i=null;t.addEventListener("pointerdown",r=>{r.button||(i={y:r.clientY,h:e.getBoundingClientRect().height,moved:!1,id:r.pointerId},t.setPointerCapture?.(r.pointerId))}),t.addEventListener("pointermove",r=>{if(!i||r.pointerId!==i.id)return;let o=r.clientY-i.y;!i.moved&&Math.abs(o)<6||(i.moved=!0,e.classList.add("drag"),e.style.setProperty("--sheet-h",Math.max(Zi.peek*.6,Math.min(Zi.full,i.h-o))+"px"))});let s=r=>{if(!i||r.pointerId!==i.id)return;let o=i.moved;if(i=null,e.classList.remove("drag"),!o)return;uh=!0,setTimeout(()=>{uh=!1},350);let a=e.getBoundingClientRect().height,l="peek";for(let c of tc)Math.abs(Zi[c]-a)<Math.abs(Zi[l]-a)&&(l=c);Oe(l)};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("keydown",r=>{let o=tc.indexOf(D.ui.sheet),a={ArrowUp:Math.min(2,o+1),ArrowDown:Math.max(0,o-1)}[r.key];a!==void 0&&(r.preventDefault(),Oe(tc[a]))})}var xm=()=>uh;function _m(n,t){let e=parseFloat(getComputedStyle(document.documentElement).fontSize)||16,i=Math.max(120,innerHeight-n-t),s=Math.min(i,Math.max(188,e*11.5));Zi={peek:s,half:Math.min(i,Math.max(s,Math.round(innerHeight*.5))),full:i};let r=ot("sheet");r&&!r.classList.contains("drag")&&r.style.setProperty("--sheet-h",Zi[D.ui.sheet]+"px")}var ym=()=>Zi[D.ui.sheet]||0;function Oe(n,t){if(!tc.includes(n))return;D.ui.sheet=n;let e=ot("sheet"),i=ot("handle");e.dataset.stage=n,e.style.setProperty("--sheet-h",Zi[n]+"px"),i.setAttribute("aria-expanded",String(n!=="peek")),ot("handleText").textContent="\uC870\uC0AC \uD654\uBA74 \uD06C\uAE30: "+NS[n]+". \uB204\uB974\uBA74 "+DS[pm[n]]+" \uBC14\uB01D\uB2C8\uB2E4.",t||mm()}function vm(){Oe(pm[D.ui.sheet]||"half")}var dh=new Map,Sm=new Map;function Mm(n,t,e){let i=dh.get(n);return i||(i=document.createElement("span"),i.className="lbl "+t,ot("labels").appendChild(i),dh.set(n,i)),i.textContent!==e&&(i.textContent=e),i}function OS(n){let t=n.className+"|"+n.textContent,e=Sm.get(t);if(!e){let i=n.hidden;n.hidden=!1,e={w:n.offsetWidth,h:n.offsetHeight},n.hidden=i,e.w&&Sm.set(t,e)}return e}var hh=(n,t)=>n.l<t.r+3&&t.l<n.r+3&&n.t<t.b+3&&t.t<n.b+3;function mr(){let n=ot("labels");if(!n)return;let t=!D.world||D.no3d||!D.ui||!D.ui.started||!!D.ui.verdict||document.body.classList.contains("playing");if(n.hidden=t,t){ec();return}let e=ot("canvas");if(!e){ec();return}let i=e.getBoundingClientRect(),s=D.insets.top+4,r=innerHeight-D.insets.bottom-4,o=D.ui.selected,a=[],l=(p,y,g,d,_,w)=>{let S=i.left+d.x,E=i.top+d.y;!d.visible||E<=s+16||E>=r||S<=i.left||S>=i.right||a.push({key:p,cls:y,text:g,px:S,py:E,selected:!!_,prio:_?0:w})};for(let p of cr("people")||[]){let y=String(p.id).replace(/^p:/,"");Ee[y]&&l("p:"+y,"who",Ee[y].name,p,o==="p:"+y||D.ui.tab==="accuse"&&D.ui.person===y,2)}for(let p of cr("spots")||[]){let y=String(p.id).replace(/^e:/,"");yn[y]&&l("e:"+y,"spot",yn[y].name,p,o==="e:"+y,1)}for(let p of cr("pins")||[]){let y=String(p.id).replace(/^(c|pin|p):/,""),g=p.label||xs[y]&&xs[y].label;g&&l("c:"+y,"claim",g,p,!1,3)}let c=p=>{let y=OS(Mm(p.key,p.cls,p.text));return{l:p.px-y.w/2,r:p.px+y.w/2,t:p.py-y.h,b:p.py}},u=a.filter(p=>p.cls==="who"&&!p.selected);if(u.length>1){let p=u.map(c);if(p.some((y,g)=>p.some((d,_)=>_>g&&hh(y,d)))){for(let g of u)a.splice(a.indexOf(g),1);let y=u.length;a.push({key:"p:group",cls:"who",text:y===4?"\uB85C\uBE44\uC758 \uB124 \uC0AC\uB78C":"\uB85C\uBE44\uC758 "+["","\uD55C","\uB450","\uC138"][y]+" \uC0AC\uB78C",px:u.reduce((g,d)=>g+d.px,0)/y,py:Math.min(...u.map(g=>g.py)),selected:!1,prio:2})}}a.sort((p,y)=>p.prio-y.prio);let f=[],h=new Set,m=new Map;for(let p of a){let y=c(p),g=0;if(!p.selected){let _=y.b-y.t+2;for(let w=0;w<2&&f.some(S=>hh(S,y));w++)g-=_,y={l:y.l,r:y.r,t:y.t-_,b:y.b-_};if(g&&y.t<s||f.some(w=>hh(w,y)))continue}f.push(y),h.add(p.key),m.set(p.key,{x:p.px,y:p.py+g});let d=Mm(p.key,p.cls,p.text);d.hidden=!1,d.style.transform="translate3d("+p.px.toFixed(1)+"px,"+(p.py+g).toFixed(1)+"px,0) translate(-50%,-100%)",d.classList.toggle("on",p.selected)}for(let[p,y]of dh)h.has(p)||(y.hidden=!0);FS(m.get(o),i,r)}function FS(n,t,e){let i=ot("act3d");if(!i)return;let s=D.ui,r=D.g,o=s&&s.selected,[a,l]=String(o||"").split(":"),c=a==="e"?s.tab==="scene"&&!!yn[l]&&!r.seen.has(l):a==="p"?s.tab==="people"&&!!Ee[l]&&!r.asked.has(l):!1;if(!n||!c||!r.budget||s.board){i.hidden=!0;return}let u=a==="e"?"inspect":"ask",f=(a==="e"?"\uD655\uC778\uD558\uAE30":"\uC9C8\uBB38\uD558\uAE30")+" \xB7 \uC870\uC0AC 1\uD68C";(i.dataset.act3d!==u||i.dataset.id!==l)&&(i.dataset.act3d=u,i.dataset.id=l),i.textContent!==f&&(i.textContent=f),i.hidden=!1;let h=i.offsetWidth,m=i.offsetHeight,p=n.y+6;if(p+m>e){i.hidden=!0;return}let y=Math.min(t.right-h/2-4,Math.max(t.left+h/2+4,n.x));i.style.transform="translate3d("+(y-h/2).toFixed(1)+"px,"+p.toFixed(1)+"px,0)"}function ec(){let n=ot("act3d");n&&(n.hidden=!0)}var fh=()=>/KAKAOTALK|NAVER\(inapp|Instagram|FBAN|FBAV|Line\/|DaumApps|everytimeApp|SamsungBrowser\/[\d.]+ .*CrossApp/i.test(navigator.userAgent||"");function ph(){let n=Xi();return n.mode==="installed"?"":fh()?'<p class="info caption">\uBA54\uC2E0\uC800\uB098 \uD3EC\uD138 \uC571 \uC548\uC5D0\uC11C \uC5F4\uB9B0 \uD654\uBA74\uC5D0\uC11C\uB294 \uC571\uC73C\uB85C \uC124\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC624\uB978\uCABD \uC704 \uBA54\uB274\uC5D0\uC11C \u300C\uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30\u300D\uB97C \uACE0\uB978 \uB4A4 \uC124\uCE58\uD558\uC138\uC694. \uC124\uCE58\uD558\uC9C0 \uC54A\uC544\uB3C4 \uC5EC\uAE30\uC11C \uBC14\uB85C \uC870\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>':n.mode==="prompt"?"<p>"+Xt("install","title","\uC571\uC73C\uB85C \uC124\uCE58")+"</p>":n.kind==="ios"?'<details class="caption"><summary>\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\uD558\uAE30</summary><p class="pad0">\uC0AC\uD30C\uB9AC\uC5D0\uC11C \u300C\uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB974\uBA74 \uC571\uCC98\uB7FC \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ol>'+So("ios").map(t=>"<li>"+Et(t)+"</li>").join("")+"</ol></details>":'<details class="caption"><summary>\uC571\uC73C\uB85C \uC124\uCE58\uD558\uB294 \uBC29\uBC95</summary><ol>'+So(n.kind).map(t=>"<li>"+Et(t)+"</li>").join("")+"</ol></details>"}function bm(n){let t=D.g,e=rr.indexOf(","),[i,s]=e<0?[rr,""]:[rr.slice(0,e+1),rr.slice(e+1).trimStart()];return'<div class="titleInner"><p class="tag">'+Et(Cp)+'</p><h1 class="display" id="titleH" tabindex="-1" aria-label="'+Et(rr)+'"><b>'+Et(i)+"</b> "+Et(s||"")+'</h1><p class="lead">'+Et(Rp)+'</p><div class="row">'+(n?Xt("continue","","\uC774\uC5B4\uC11C \uC870\uC0AC \xB7 \uB0A8\uC740 \uC870\uC0AC "+t.budget+"\uD68C \xB7 \uACB0\uB860 "+t.tries+"\uBC88",{cls:"primary"})+Xt("newgame-ask","","\uCC98\uC74C\uBD80\uD130"):Xt("start","","\uC870\uC0AC \uC2DC\uC791",{cls:"primary"}))+Xt("rules-open","title","\uC870\uC0AC \uBC29\uBC95")+'</div><ul class="short caption muted">'+Pp.map(r=>"<li>"+Et(r)+"</li>").join("")+'</ul><div id="installBox">'+ph()+'</div><p class="bottom">\uC624\uD504\uB77C\uC778 \uB2E8\uD3B8 \xB7 \uB300\uC0AC\uB294 \uBAA8\uB450 \uBBF8\uB9AC \uC4F0\uC778 \uAE00\uC785\uB2C8\uB2E4. \uC678\uBD80 \uC5F0\uACB0\uC774\uB098 \uC2E4\uC2DC\uAC04 AI\uB294 \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div>'}function Tm(){return'<dialog id="hintDlg" aria-labelledby="hintTitle"><div class="dlg"><div class="dlgBody" tabindex="0"><h2 id="hintTitle" tabindex="-1">\uD78C\uD2B8</h2><p class="caption muted">\uD78C\uD2B8\uB294 \uC694\uCCAD\uD560 \uB54C\uB9CC, \uB204\uB97C \uB54C\uB9C8\uB2E4 \uD55C \uB2E8\uACC4\uC529 \uC5F4\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uAE30\uD68C\uB294 \uC4F0\uC9C0 \uC54A\uACE0, \uB204\uAC00 \uD55C \uC77C\uC778\uC9C0\uB294 \uC54C\uB824 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uB3C4 \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p><ol id="hintList" data-testid="hints"></ol><p id="hintState" class="caption"></p><p class="sr" id="hintLive" role="status" aria-atomic="true"></p></div><div class="dlgFoot"><button type="button" class="primary" data-action="hint-next" id="hintNext">\uD78C\uD2B8 \uD55C \uB2E8\uACC4 \uC5F4\uAE30</button><button type="button" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog><dialog id="askDlg" aria-labelledby="askTitle" aria-describedby="askBody"><div class="dlg"><div class="dlgBody"><h2 id="askTitle" tabindex="-1"></h2><div id="askBody" class="reveal"></div></div><div class="dlgFoot"><button type="button" class="primary" id="askYes"></button><button type="button" data-action="dialog-close">\uB3CC\uC544\uAC00\uAE30</button></div></div></dialog><dialog id="menuDlg" aria-labelledby="menuTitle"><div class="dlg"><div class="dlgBody"><h2 id="menuTitle" tabindex="-1">\uBA54\uB274</h2><div id="menuBody" class="menuList"></div></div><div class="dlgFoot"><button type="button" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog><dialog id="infoDlg" aria-labelledby="infoTitle"><div class="dlg"><div class="dlgBody" tabindex="0"><h2 id="infoTitle" tabindex="-1"></h2><div id="infoBody" class="reveal"></div></div><div class="dlgFoot"><button type="button" class="primary" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog>'}var mh=null,gh="",Am=0,Em=()=>Am;function Io(n){let t=document.activeElement;t&&t!==document.body&&!t.closest("dialog")&&(mh=t,gh=t.dataset&&t.dataset.action?ge(t.dataset.action,t.dataset.id,t.dataset.arg):t.id?"#"+t.id:""),n.open||n.showModal();let e=n.querySelector("h2");e&&e.focus()}function ci(){for(let n of document.querySelectorAll("dialog[open]"))n.close()}function Cm(n){if(document.querySelector("dialog[open]"))return;let t=document.activeElement;if(t&&t!==document.body&&document.contains(t)&&!t.closest("dialog"))return;let e=s=>s&&document.contains(s)&&s.getClientRects().length>0,i=e(mh)?mh:null;if(!i&&gh){let s=document.querySelector(gh);e(s)&&(i=s)}i=i||n(),i&&i.focus()}function nc(n,t,e,i){ot("askTitle").textContent=n,ot("askBody").innerHTML=t;let s=ot("askYes");s.textContent=e,s.dataset.action=i,Am=performance.now(),ci(),Io(ot("askDlg"))}function xh(){let n=D.g;ot("hintList").innerHTML=n.hints.map(e=>'<li data-testid="hint">'+Et(ee.hintText(e))+"</li>").join(""),ot("hintList").hidden=!n.hints.length;let t=ee.nextHint(n);ot("hintNext").hidden=!t,ot("hintState").textContent=t?n.hints.length?"":"\uC544\uC9C1 \uC5F0 \uD78C\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6D0\uD560 \uB54C \uD55C \uB2E8\uACC4\uC529 \uC5F4\uC5B4 \uBCF4\uC138\uC694.":"\uC5F4 \uC218 \uC788\uB294 \uD78C\uD2B8\uB97C \uBAA8\uB450 \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4."}function _h(n,t){ot("infoTitle").textContent=n,ot("infoBody").innerHTML=t,ci(),Io(ot("infoDlg"))}var Rm=()=>'<ul class="list">'+Ip.map(n=>"<li>"+Et(n)+"</li>").join("")+"</ul>";function Im(){if(fh())return"<p>\uBA54\uC2E0\uC800\uB098 \uD3EC\uD138 \uC571 \uC548\uC5D0\uC11C \uC5F4\uB9B0 \uD654\uBA74\uC5D0\uC11C\uB294 \uC571\uC73C\uB85C \uC124\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC624\uB978\uCABD \uC704 \uBA54\uB274\uC5D0\uC11C \u300C\uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30\u300D\uB97C \uACE0\uB978 \uB4A4 \uC124\uCE58\uD558\uC138\uC694.</p>";let n=Xi();return'<ol class="list">'+So(n.kind).map(t=>"<li>"+Et(t)+"</li>").join("")+"</ol>"}var wm=n=>n?"\uCF1C\uC9D0":"\uAEBC\uC9D0";function yh(){let n=Xi(),t=_n.quality;return Xt("rules-open","menu","\uC870\uC0AC \uBC29\uBC95")+Xt("set-sound","","\uC18C\uB9AC \xB7 "+wm(Ao()),{attr:'aria-pressed="'+Ao()+'"'})+Xt("set-motion","","\uC6C0\uC9C1\uC784 \uC904\uC774\uAE30 \xB7 "+wm(_n.motion),{attr:'aria-pressed="'+_n.motion+'"'})+'<fieldset class="seg"><legend>\uD654\uC9C8</legend><div class="row">'+[["auto","\uC790\uB3D9"],["low","\uB0AE\uC74C"],["high","\uB192\uC74C"]].map(([e,i])=>Xt("set-quality",e,i,{attr:'aria-pressed="'+(t===e)+'"'+(D.no3d?' aria-disabled="true"':"")})).join("")+"</div></fieldset>"+(D.unavailable?'<p class="info caption">\uC774 \uAE30\uAE30\uC5D0\uC11C\uB294 3D \uD654\uBA74\uC744 \uC4F8 \uC218 \uC5C6\uC5B4 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uB0B4\uC6A9\uC740 \uAC19\uC2B5\uB2C8\uB2E4.</p>':Xt("set-3d","",D.no3d?"3D \uCF1C\uAE30":"3D \uB044\uAE30 \xB7 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uAE30",{attr:'aria-pressed="'+D.no3d+'"'}))+(n.mode==="installed"?"":Xt("install","menu","\uC571\uC73C\uB85C \uC124\uCE58"))+(D.ui&&D.ui.started?Xt("restart-ask","menu","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"quiet"}):"")}var Ph=[["all","\uC804\uCCB4"],["hall","\uC804\uC2DC\uC2E4"],["back","\uBD80\uC2A4"],["lobby","\uB85C\uBE44"]],BS={auto:"\uC790\uB3D9",low:"\uB0AE\uC74C",high:"\uB192\uC74C"};function kS(){return'<a class="skip" id="skip" href="#sheetBody" hidden>\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30</a><div id="labels" class="labels" aria-hidden="true" hidden></div><button type="button" id="act3d" class="act3d primary" tabindex="-1" aria-hidden="true" hidden></button><div id="cap3d" class="cap3d" aria-hidden="true" hidden><span id="cap3dText"></span></div><button type="button" id="introSkip" class="introSkip" data-action="intro-skip" hidden>\uC2DC\uC791 \uC5F0\uCD9C \uAC74\uB108\uB6F0\uAE30</button><div id="cctv" class="cctvOverlay" aria-hidden="true" hidden><span class="rec">REC</span> <span id="cctvTime" class="mono"></span></div><div id="bubble" class="bubble" aria-hidden="true" hidden><p id="bubbleText"></p><span id="bubbleMore" class="bubbleMore"></span></div><main id="game" class="game" hidden aria-label="\uC0AC\uAC74 \uC870\uC0AC"><header class="hud" id="hud"><p class="budget" data-testid="budget"><span class="tag">\uB0A8\uC740 \uC870\uC0AC</span> <b id="left">9</b><span>\uD68C</span> <span class="pips" id="pips" aria-hidden="true"></span> <span class="tries"><span class="tag">\uB0A8\uC740 \uACB0\uB860</span> <b id="tries">3</b><span>\uBC88</span></span></p><div class="hudBtns"><button type="button" class="quiet" data-action="hint-open" id="hintBtn">\uD78C\uD2B8</button><button type="button" class="quiet" data-action="menu-open" id="menuBtn">\uBA54\uB274</button></div></header><section class="sheet" id="sheet" data-stage="half" aria-label="\uC870\uC0AC \uD654\uBA74"><div class="viewctl" id="viewctl" role="group" aria-label="3D \uBCF4\uAE30 \uC870\uC791"><div class="vrow">'+Xt("rotate","1",'<span aria-hidden="true">\u21BB</span>',{attr:'aria-label="90\uB3C4 \uB3CC\uB824 \uBCF4\uAE30"'})+Ph.map(([n,t])=>Xt("view",n,t,{attr:'aria-pressed="false"'})).join("")+'</div></div><button type="button" class="handle" id="handle" data-action="sheet" aria-expanded="true" aria-controls="sheetBody"><span class="grip" aria-hidden="true"></span><span class="sr" id="handleText">\uC870\uC0AC \uD654\uBA74 \uD3BC\uCE58\uAE30</span></button><div class="sheetBody" id="sheetBody" tabindex="-1"><p class="notice" id="notice"></p><div id="stage" role="tabpanel" tabindex="-1" data-testid="stage"></div></div></section><div class="tabs" id="tabs" role="tablist" aria-label="\uC870\uC0AC \uBA54\uB274">'+ur.map((n,t)=>'<button type="button" role="tab" id="tab-'+n+'" data-tab="'+n+'" aria-controls="stage" aria-selected="'+(t===0)+'"'+(t?' tabindex="-1"':"")+">"+nh[n]+'<small id="cnt-'+n+'"></small></button>').join("")+'</div></main><section id="title" class="title" aria-labelledby="titleH"></section><p class="sr" id="live" role="status" aria-live="polite" aria-atomic="true"></p><div id="toast" class="toast" role="status" hidden></div>'+Tm()}var zm=n=>({tab:"scene",person:"",proof:[],verdict:null,notice:"",selected:null,board:null,lit:null,playing:null,story:null,auto:!1,view:"all",sheet:"half",started:!!n});function Pm(){D.g=ee.fresh(D.g?D.g.hints:[]),D.ui=zm(!0)}var Lm;function Ie(n,t){D.ui.notice=n,ot("notice").textContent=n;let e=ot("live");e.textContent="",clearTimeout(Lm),Lm=setTimeout(()=>{e.textContent=t||n},80)}var Nm=!1,Sh=!1,Mh=0;function ys(){let n=D.g,t=D.ui;if(!t||!t.started||Sh)return;Vp(n,{tab:t.tab,person:t.person,proof:t.proof,verdict:t.verdict?{ok:t.verdict.ok,kind:t.verdict.kind}:null,view:t.view})?Mh=Date.now():Nm||(Nm=!0,Ie("\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC9C4\uD589\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2EB\uC73C\uBA74 \uAE30\uB85D\uC774 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4."))}var bh=0;function rc(n,t){let e=ot("toast");clearTimeout(bh),e.innerHTML=n,e.hidden=!1,t&&(bh=setTimeout(()=>{e.hidden=!0},t))}var wh=()=>Xt("toast-close","","\uB2EB\uAE30",{cls:"quiet"});function zS(n,t){let e=Ee[t.person]?t.person:"",i=Array.isArray(t.proof)?[...new Set(t.proof.filter(s=>typeof s=="string"&&n.seen.has(s)))].slice(0,2):[];if(t.verdict&&e&&i.length===2){let s=ee.judge(e,i);if(s.ok&&ee.ready(n,e,i).ok)return{v:s,person:e,proof:i};if(!s.ok&&ee.tried(n,e,i))return{v:s,person:e,proof:i}}if(n.tries===0&&n.failed.length){let[s,r]=n.failed[n.failed.length-1].split("|"),o=r.split("+");return{v:ee.judge(s,o),person:s,proof:o}}return null}var oc="";function un(){let n=D.ui,t=!!(n&&n.started),e=t?ot("hud").offsetHeight:0,i=t&&!ot("tabs").hidden?ot("tabs").offsetHeight:0,s=document.documentElement.style;s.setProperty("--hud-h",e+"px"),s.setProperty("--tabs-h",i+"px"),_m(e,i);let r=eh();document.body.classList.toggle("wide",r);let o=!t||r||D.no3d?{top:0,bottom:0,left:0,right:0}:{top:e,bottom:Math.round(i+ym()),left:0,right:0};D.insets=o,s.setProperty("--cap-b",o.bottom+"px"),document.body.classList.toggle("tight",t&&!r&&innerHeight-o.top-o.bottom<170);let a=JSON.stringify(o);a!==oc&&(oc=a,te("setInsets",o))}function Th(n,t="nearest"){let e=ot("sheetBody");if(!n||!e||!e.contains(n))return;let i=n.getBoundingClientRect(),s=e.getBoundingClientRect();(i.top<s.top||i.bottom>s.bottom)&&n.scrollIntoView({block:t,behavior:wi()?"auto":"smooth"})}function Ah(){for(let n of document.querySelectorAll('[data-action="view"]'))n.setAttribute("aria-pressed",String(n.dataset.id===D.ui.view))}function _e(n){let t=D.g,e=D.ui;ot("left").textContent=t.budget,ot("tries").textContent=t.tries,ot("pips").textContent="\u25CF".repeat(t.budget)+"\u25CB".repeat(9-t.budget),ot("cnt-scene").textContent=t.seen.size+"/6",ot("cnt-people").textContent=t.asked.size+"/4",ot("cnt-notes").textContent="\uACE0\uC815 "+t.pins.size,ot("cnt-accuse").textContent=e.proof.length+"/2",ot("tab-scene").setAttribute("aria-label","\uD604\uC7A5, \uC99D\uAC70 6\uAC1C \uC911 "+t.seen.size+"\uAC1C \uD655\uC778"),ot("tab-people").setAttribute("aria-label","\uBA74\uB2F4, 4\uBA85 \uC911 "+t.asked.size+"\uBA85 \uC9C4\uC220 \uD655\uBCF4"),ot("tab-notes").setAttribute("aria-label","\uAE30\uB85D, \uACE0\uC815 "+t.pins.size+"\uAC1C"),ot("tab-accuse").setAttribute("aria-label","\uC9C0\uBAA9, \uC99D\uAC70 2\uAC1C \uC911 "+e.proof.length+"\uAC1C \uC120\uD0DD");for(let r of document.querySelectorAll("[role=tab]")){let o=r.dataset.tab===e.tab;r.setAttribute("aria-selected",String(o)),r.tabIndex=o?0:-1}let i=ot("stage"),s=!!e.verdict&&(e.verdict.ok||t.tries===0);if(ot("tabs").hidden=!!e.verdict,ot("hintBtn").hidden=s,ot("game").classList.toggle("verdict",!!e.verdict),i.setAttribute("role",e.verdict?"region":"tabpanel"),i.setAttribute("aria-labelledby",e.verdict?"stageTitle":"tab-"+e.tab),i.dataset.view=e.verdict?"verdict":e.board?"board":e.tab,ot("notice").textContent=e.notice,i.innerHTML=e.verdict?um():e.tab==="scene"&&e.board?lh.board():lh[e.tab](),e.board==="audio"&&!e.verdict&&requestAnimationFrame(ql),jl(),Ah(),document.title=(e.verdict?"\uD310\uC815":nh[e.tab])+" \xB7 02:17, \uB9C8\uC9C0\uB9C9 \uC810\uAC80",te("sync",ju(t,e)),ys(),un(),mr(),n){let r=null;for(let o of[].concat(n))if(r=document.querySelector(o),r)break;r=r||ot("stageTitle"),r&&(r.focus({preventScroll:!0}),Th(r))}}var sc=0,Eh=0;function Gm(n){document.body.classList.toggle("cctv",n),ot("cctv").hidden=!n,ot("cctvTime").textContent=n&&D.ui.lit&&D.ui.lit.size?Xl():""}var Dm={lock:{locked:"beep"},fog:{"021700":"fog"},drawer:{slide:"slide"},cue:{run:"beep"},audio:{"021703":"click"},poster:{stamp:"stamp"}};function Ch(n){let t=ot("cap3d");t&&(ot("cap3dText").textContent=n||"",t.hidden=!n)}function Vm(n){let t=D.ui,e=++sc;if(clearTimeout(Eh),!Qn()){t.playing=null,t.lit=new Set(or[n].map(s=>s.cue));return}t.lit=new Set,t.playing=n,Wm(!0),Oe("peek",!0),un(),Ch(""),n==="fog"&&Gm(!0);let i=()=>{e===sc&&Hm()};Eh=setTimeout(i,25e3),te("play","ev:"+n,{onCue:s=>{if(e!==sc||D.ui.board!==n)return;let r=Dm[n]&&Dm[n][s];r&&xn(r),rh(n,s);let o=or[n].find(a=>a.cue===s);o&&Ch(o.t)}}).then(i,i)}function Hm(){let n=D.ui,t=n.playing;if(clearTimeout(Eh),sc++,n.playing=null,Gm(!1),Wm(!1),Ch(""),t&&(Oe("half",!0),un()),t&&n.board===t){for(let e of or[t])rh(t,e.cue);Xm()}}function Lh(){D.ui.playing&&te("stop"),Hm()}var ic=0;function Wm(n){ic=Math.max(0,ic+(n?1:-1)),!n&&!D.ui.playing&&(ic=0),document.body.classList.toggle("playing",ic>0),mr()}function Xm(n){let t=ot("boardCtl");if(!t)return;let e=t.contains(document.activeElement);if(t.innerHTML=ch(),e){let i=n&&t.querySelector(n)||t.querySelector('[data-action="replay"]')||t.querySelector('[data-action="board-close"]');i&&i.focus({preventScroll:!0})}}function Um(n){let t=D.ui;Ti(),t.tab="scene",t.selected="e:"+n,t.board=n,D.sceneTold=!0,Oe(Qn()?"peek":"half",!0),un(),te("focus","e:"+n),Vm(n),_e("#stageTitle"),ot("sheetBody").scrollTop=0}function Po(){D.ui.board&&(Lh(),D.ui.board=null,D.ui.lit=null)}function Ti(){Ro(),D.talkPid&&(te("play","talk:end"),D.talkPid=null)}function vh(n){D.talkPid!==n&&(Ti(),D.talkPid=n),te("play","talk:"+n)}var Om=n=>[{who:"q",text:bo}].concat(Yu(Ee[n].say).map(t=>({who:n,text:t}))),Do=0;function qm(n){clearTimeout(Do),D.ui.auto&&(Do=setTimeout(()=>{let t=D.ui;!t.auto||t.story!==n||!t.verdict||!t.verdict.ok||(Lo(n+1),_e(n+1<tn.length?ge("story-auto"):"#stageTitle"))},Qn()?1500:4e3))}var gr=()=>!!(D.ui.verdict&&D.ui.verdict.ok);function Lo(n){if(!gr())return;let t=D.ui;t.story=n,clearTimeout(Do),n===4&&xn("fog"),n===5&&xn("click");let e=te("story",Math.min(n,tn.length));n<tn.length?(Ie(tn[n][0]+" \uC7AC\uD604.",tn[n][0]+". "+tn[n][1]),e.then(()=>qm(n))):(t.auto=!1,Oe("half",!0),Ie("\uC7AC\uD604\uC744 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4."))}var Ym=()=>{if(_n.quality!=="auto")return _n.quality;let n=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4,e=!!(navigator.connection&&navigator.connection.saveData);return n<=4||t<=2||e?"low":"high"};function ac(n){n&&(lc(),Lh(),Ro(),Uo(),ec()),D.no3d=n,document.body.classList.toggle("no3d",n),te("pause",n),oc="",un(),mr(),n||te("view",D.ui.view||"all",{instant:!0}),D.ui.started?_e():Jm()}var Fm=!1;async function Zm(){if(!D.makeWorld)return!1;let n=null;try{n=await D.makeWorld({onPick:XS,onFrame:qS,reducedMotion:wi()})}catch{n=null}if(!n)return D.unavailable=!0,ac(!0),!1;D.world=n;let t=ot("canvas");return t&&!Fm&&(Fm=!0,t.addEventListener("webglcontextlost",()=>{D.no3d||(ac(!0),D.ui.started&&Ie("3D \uD654\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uAC19\uC740 \uC870\uC0AC\uB97C \uC774\uC5B4\uC11C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBA54\uB274\uC758 \u300C3D \uCF1C\uAE30\u300D\uB85C \uB2E4\uC2DC \uCF24 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))})),te("setQuality",Ym()),oc="",un(),te("sync",ju(D.g,D.ui)),D.ui.started?te("view",D.ui.view||"all",{instant:!0}):Jm(),!0}var Rh=0;function Jm(){if(Uo(),!Qn()||wi()||D.ui.started)return;let n=0;Rh=setInterval(()=>{document.hidden||(te("rotate",1,{quiet:!0}),++n>=2&&Uo())},9e3)}function Uo(){clearInterval(Rh),Rh=0}function xr(n){let t=ot("menuBody");t.innerHTML=yh();let e=n&&t.querySelector(n)||ot("menuTitle");e&&e.focus()}var Ih=!1;function GS(){ot("title").innerHTML=bm(Ih)}function Km(){let n=ot("installBox");n&&(n.innerHTML=ph()),ot("menuDlg").open&&xr()}function Bm(){let n=D.ui;ot("title").hidden=!0,ot("game").hidden=!1,ot("skip").hidden=!1,Uo(),Oe(n.verdict?"half":n.tab==="notes"?"full":"half",!0),un(),te("view",n.view||"all",{resetYaw:!0}),Nh()}var No=0;function VS(){Qn()&&(No=1,ot("introSkip").hidden=!1,te("play","intro").then(()=>{let n=No===2;No=0,$m();let t=D.ui;!n||!t.started||t.verdict||t.playing||t.board||(t.selected?te("focus",t.selected):t.view!=="all"&&te("view",t.view))}))}function lc(){if(No!==1)return;No=2;let n=null;try{n=D.world&&D.world.debug?D.world.debug().playing:null}catch{n=null}(n==null||n==="intro")&&te("stop"),$m()}function $m(){let n=ot("introSkip");if(!n||n.hidden)return;let t=document.activeElement===n;n.hidden=!0,t&&ot("stageTitle")&&ot("stageTitle").focus({preventScroll:!0})}var cc=!1;function Nh(){if(!(cc||!D.ui.started))try{history.pushState({g0217:1},""),cc=!0}catch{}}function HS(){let n=document.querySelector("dialog[open]");if(n)return n.close(),!0;let t=D.ui;return t.board&&!t.verdict?(Ai["board-close"](t.board),!0):t.sheet==="full"&&!eh()&&!D.no3d?(Oe("half"),!0):pr()?(Ai["talk-all"](),!0):!1}function WS(){cc=!1,!(!D.ui||!D.ui.started)&&(HS()?Nh():rc("<span>\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uC571\uC744 \uB2EB\uC2B5\uB2C8\uB2E4.</span>",2500))}var Ai={start(){D.ui.started=!0,Bm(),Ie("\uC870\uC0AC\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+D.g.budget+"\uD68C, \uACB0\uB860 "+D.g.tries+"\uBC88."),_e("#stageTitle"),VS()},continue(){D.ui.started=!0,Bm();let n=D.ui.verdict;n&&!n.ok&&te("play","verdict:dim"),Ie(n?"\uD310\uC815 \uD654\uBA74\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4.":"\uC774\uC5B4\uC11C \uC870\uC0AC\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+D.g.budget+"\uD68C, \uACB0\uB860 "+D.g.tries+"\uBC88."),_e("#stageTitle")},"newgame-ask"(){nc("\uCC98\uC74C\uBD80\uD130 \uC870\uC0AC\uD560\uAE4C\uC694?","<p>\uC800\uC7A5\uB41C \uC870\uC0AC \uAE30\uB85D\uACFC \uACE0\uC815, \uC9C0\uBAA9 \uC120\uD0DD\uC774 \uBAA8\uB450 \uC9C0\uC6CC\uC9C0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC73C\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p>","\uCC98\uC74C\uBD80\uD130 \uC870\uC0AC\uD558\uAE30","newgame")},newgame(){ci(),Pm(),Ai.start()},select(n,t){let e=D.ui;if(!e.started||e.verdict)return;let[i,s]=String(n).split(":");if(!(i==="e"?yn[s]:i==="p"&&Ee[s]))return;Po();let r=i==="e"?"scene":"people";if(e.tab!==r&&(e.tab=r,e.notice=""),e.selected===n&&t!==!0){e.selected=null,i==="p"&&Ti(),_e(ge("select",n));return}i==="p"?D.talkPid!==s&&(Ti(),D.talkPid=s,te("play","talk:"+s)):Ti(),e.selected=n,Oe("peek",!0),un(),te("focus",n),_e(ge("select",n));let o=ot("row-"+s);o&&o.scrollIntoView({block:"start"})},inspect(n){let t=ee.inspect(D.g,n);if(t==="blocked")return Ie("\uC870\uC0AC \uAE30\uD68C\uAC00 \uB0A8\uC544 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),_e(ge("inspect",n));t==="new"&&xn("spend"),Ie(hr(n)+" \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4. "+Co(),Yi(n)+" \uD655\uC778. "+yn[n].text+" "+Co()),Um(n)},board(n){D.g.seen.has(n)&&(xn("free"),Ie(Yi(n)+" \uB2E4\uC2DC \uBCF4\uAE30.",Yi(n)+". "+yn[n].text),Um(n))},replay(n){D.ui.board===n&&(te("stop"),Vm(n),te("focus","e:"+n),_e(ge("skip-play",n)))},"skip-play"(n){D.ui.board===n&&(Lh(),Xm(ge("replay",n)))},"board-close"(n){Po(),Oe("peek",!0),_e(ge("select","e:"+n));let t=ot("row-"+n);t&&t.scrollIntoView({block:"start"})},ask(n){let t=ee.ask(D.g,n);if(t==="blocked")return Ie("\uC870\uC0AC \uAE30\uD68C\uAC00 \uB0A8\uC544 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),_e(ge("ask",n));t==="new"&&xn("spend");let e=D.ui;e.tab="people",e.selected="p:"+n,Ie(Ee[n].name+"\uC758 \uC9C4\uC220\uC744 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. "+Co(),Ee[n].name+"\uC758 \uC9C4\uC220. "+Ee[n].say+" "+Co()),vh(n),Oe("peek",!0),un(),$l(n,Om(n)),_e([ge("talk-next"),"#pb-"+n])},"talk-next"(){let n=D.talkPid;dm(),n&&hm()===n&&te("play","talk:nod:"+n);let t=document.querySelector(ge("talk-next"));if(t)t.focus();else if(n){let e=ot("pb-"+n);e&&(e.focus({preventScroll:!0}),Th(e))}},"talk-all"(){let n=D.talkPid;if(Ro(),n){let t=ot("pb-"+n);t&&(t.focus({preventScroll:!0}),Th(t,"start"))}},"talk-replay"(n){if(!D.g.asked.has(n))return;xn("free"),vh(n),Oe("peek",!0),un(),$l(n,Om(n));let t=document.querySelector(ge("talk-next"));t&&t.focus()},present(n,t){let e=D.g,i=ee.present(e,n,t);if(i==="blocked")return;xn("free"),i==="new"?Ie(Ee[n].name+"\uC5D0\uAC8C "+hr(t)+" \uC81C\uC2DC\uD588\uC2B5\uB2C8\uB2E4.",Ee[n].name+"\uC5D0\uAC8C "+Yi(t)+" \uC81C\uC2DC. "+Ee[n].name+": "+ee.reaction(n,t)):Ie("\uC774\uBBF8 \uC81C\uC2DC\uD55C \uC99D\uAC70\uC785\uB2C8\uB2E4.","\uC774\uBBF8 \uC81C\uC2DC\uD55C \uC99D\uAC70\uC785\uB2C8\uB2E4. "+Ee[n].name+": "+ee.reaction(n,t)),D.talkPid===n?te("play","talk:nod:"+n):vh(n),$l(n,Yu(ee.reaction(n,t)).map(r=>({who:n,text:r}))),_e(ge("present",n,t));let s=ot("r-"+n+"-"+t);s&&s.scrollIntoView({block:"nearest",behavior:wi()?"auto":"smooth"})},pin(n,t){let e=D.g,i=[...e.pins],s=i.indexOf(n),r=s<0;r?e.pins.add(n):e.pins.delete(n),xn("free"),Ie((r?"\uACE0\uC815\uD588\uC2B5\uB2C8\uB2E4: ":"\uACE0\uC815\uC744 \uD480\uC5C8\uC2B5\uB2C8\uB2E4: ")+Kl(n));let o=!r&&t==="top"?i[s+1]||i[s-1]:"";_e(!r&&t==="top"?[o?ge("pin",o,"top"):"#nPin","#nPin"]:[ge("pin",n,t),ge("pin",n)])},"goto-person"(n){let t=D.g,e=D.ui,i=e.proof.find(r=>!t.shown.includes(n+":"+r));e.tab="people",e.selected="p:"+n,D.talkPid!==n&&Ti(),Oe("half",!0),un(),te("focus","p:"+n),Ie("\uBA74\uB2F4 \uD0ED\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4.","\uBA74\uB2F4 \uD0ED\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4. "+Ee[n].name+"."),_e([i?ge("present",n,i):"",ge("present",n),ge("ask",n),ge("select","p:"+n)].filter(Boolean));let s=document.activeElement;s&&s!==document.body&&s.scrollIntoView({block:"center"})},"hint-open"(){ot("hintLive").textContent="",xh(),ci(),Io(ot("hintDlg"))},"hint-next"(){let n=D.g,t=ee.takeHint(n);if(xh(),t){ys(),ot("hintState").textContent="\uD78C\uD2B8 "+n.hints.length+"\uB2E8\uACC4\uB97C \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4.",ot("hintLive").textContent="\uD78C\uD2B8 "+n.hints.length+"\uB2E8\uACC4. "+ee.hintText(t);let e=ot("hintList").lastElementChild;e&&e.scrollIntoView({block:"nearest"})}(ot("hintNext").hidden?ot("hintTitle"):ot("hintNext")).focus()},"dialog-close"(){ci()},"toast-close"(){clearTimeout(bh),ot("toast").hidden=!0},"intro-skip"(){lc()},"submit-ask"(){let n=D.g,t=D.ui;if(!ee.ready(n,t.person,t.proof).ok)return Ie("\uC544\uC9C1 \uC81C\uCD9C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC81C\uCD9C \uC804 \uD655\uC778\uC744 \uC0B4\uD3B4 \uC8FC\uC138\uC694."),_e("#checkTitle");nc("\uC774 \uACB0\uB860\uC744 \uC81C\uCD9C\uD560\uAE4C\uC694?","<p>\uC9C0\uBAA9: <b>"+Et(Ee[t.person].name)+"</b></p><p>\uC99D\uAC70: "+Et(t.proof.map(Yi).join(", "))+"</p>"+(ee.tried(n,t.person,t.proof)?"<p>\uC55E\uC11C \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC740 \uACB0\uB860\uACFC \uAC19\uC2B5\uB2C8\uB2E4. \uADF8\uB300\uB85C \uB0B4\uBA74 \uAC19\uC740 \uD310\uC815\uC744 \uBC1B\uACE0 \uAE30\uD68C\uB9CC \uD55C \uBC88 \uC904\uC5B4\uB4ED\uB2C8\uB2E4.</p>":"")+'<p class="muted caption">'+(n.tries>1?"\uB0A8\uC740 \uACB0\uB860 \uAE30\uD68C "+yo[n.tries]+" \uBC88 \uAC00\uC6B4\uB370 \uD55C \uBC88\uC744 \uC501\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uC2B5\uB2C8\uB2E4.":"\uB9C8\uC9C0\uB9C9 \uACB0\uB860 \uAE30\uD68C\uC785\uB2C8\uB2E4. \uD2C0\uB9AC\uBA74 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB05D\uB098\uACE0, \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.")+"</p>","\uC81C\uCD9C\uD558\uAE30","submit")},submit(){ci();let n=D.g,t=D.ui,e=ee.submit(n,t.person,t.proof);if(!e)return _e("#checkTitle");Po(),Ti(),t.verdict=e,t.selected=null,xn("tense"),setTimeout(()=>xn(e.ok?"solve":"fail"),800),Ie(e.ok?"\uC0AC\uAC74 \uD574\uACB0.":n.tries?"\uC785\uC99D \uC2E4\uD328. \uB0A8\uC740 \uACB0\uB860 "+n.tries+"\uBC88.":"\uBBF8\uACB0. \uACB0\uB860 \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4.",e.ok?"\uC0AC\uAC74 \uD574\uACB0. \uACB0\uB860\uC774 \uBC1B\uC544\uB4E4\uC5EC\uC84C\uC2B5\uB2C8\uB2E4.":n.tries?"\uC785\uC99D \uC2E4\uD328. "+Jl():"\uBBF8\uACB0. \uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4."),Oe("half",!0),e.ok?(t.story=0,t.auto=!1,te("play","verdict:win").then(()=>{let i=D.ui;i.verdict&&i.verdict.ok&&i.story===0&&te("story",0)})):te("play","verdict:dim"),_e("#stageTitle"),ot("sheetBody").scrollTop=0},resume(){let n=D.ui;n.verdict=null,n.tab="notes",te("play","verdict:clear"),Oe("full",!0),Ie("\uC870\uC0AC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uACB0\uB860 "+D.g.tries+"\uBC88.","\uC870\uC0AC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4. "+Jl()),_e("#stageTitle"),ot("sheetBody").scrollTop=0},"restart-ask"(){let n=D.g,t=D.ui;if(n.budget===9&&n.tries===3&&!t.person&&!t.proof.length&&!t.verdict)return Ai.restart();nc("\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD560\uAE4C\uC694?","<p>\uC9C0\uAE08\uAE4C\uC9C0\uC758 \uC870\uC0AC \uAE30\uB85D\uACFC \uACE0\uC815, \uC9C0\uBAA9 \uC120\uD0DD\uC774 \uBAA8\uB450 \uC9C0\uC6CC\uC9C0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p>","\uB2E4\uC2DC \uC870\uC0AC\uD558\uAE30","restart")},restart(){ci(),Po(),Ti(),clearTimeout(Do),Pm(),te("play","verdict:clear"),te("view","all"),Oe("half",!0),Ie("\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+D.g.budget+"\uD68C, \uACB0\uB860 "+D.g.tries+"\uBC88."),_e("#stageTitle"),ot("sheetBody").scrollTop=0},"story-next"(){if(!gr())return;let n=D.ui.story==null?0:D.ui.story;Lo(n+1),_e(n+1<tn.length?ge("story-next"):"#stageTitle")},"story-prev"(){if(!gr())return;let n=D.ui.story||0;n<=0||(D.ui.auto=!1,Lo(n-1),_e(ge("story-prev")))},"story-auto"(){if(!gr())return;let n=D.ui;n.auto=!n.auto,n.auto?qm(n.story||0):clearTimeout(Do),Ie(n.auto?"\uC7AC\uD604\uC744 \uC790\uB3D9\uC73C\uB85C \uB118\uAE41\uB2C8\uB2E4.":"\uC790\uB3D9 \uC7AC\uC0DD\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4."),_e(ge("story-auto"))},"story-skip"(){gr()&&(D.ui.auto=!1,Lo(tn.length),_e("#stageTitle"))},"story-again"(){gr()&&(D.ui.auto=!1,Oe("half",!0),Lo(0),_e(ge("story-next")),ot("sheetBody").scrollTop=0)},sheet(){xm()||vm()},view(n){Ph.some(([t])=>t===n)&&(D.ui.view=n,te("view",n),Ah(),ys())},rotate(n){te("rotate",n==="-1"?-1:1)},home(){D.ui.view="all",te("view","all"),Ah(),ys()},"menu-open"(){ot("menuBody").innerHTML=yh(),ci(),Io(ot("menuDlg"))},"rules-open"(){_h("\uC870\uC0AC \uBC29\uBC95",Rm())},install(){if(Xi().mode==="prompt"){ci(),kp().then(n=>{n==="accepted"&&D.ui.started&&Ie("\uC571\uC73C\uB85C \uC124\uCE58\uD588\uC2B5\uB2C8\uB2E4. \uD648 \uD654\uBA74\uC774\uB098 \uC571 \uBAA9\uB85D\uC5D0\uC11C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),Km()});return}_h("\uC571\uC73C\uB85C \uC124\uCE58",Im())},"set-sound"(){jp(!Ao()),xr(ge("set-sound"))},"set-motion"(){_n.motion=!_n.motion,Eo(),document.body.classList.toggle("calm",wi()),te("setReducedMotion",wi()),wi()&&Uo(),xr(ge("set-motion"))},"set-quality"(n){D.no3d||!BS[n]||(_n.quality=n,Eo(),te("setQuality",Ym()),xr(ge("set-quality",n)))},async"set-3d"(){if(D.no3d){_n.off3d=!1,Eo();let n=!1;try{n=!!(D.world&&typeof D.world.isLost=="function"&&D.world.isLost())}catch{n=!0}if(n){try{D.world.dispose()}catch{}D.world=null}if(!D.world&&!await Zm()){let e="3D \uD654\uBA74\uC744 \uB2E4\uC2DC \uB9CC\uB4E4\uC9C0 \uBABB\uD574 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uB0B4\uC6A9\uC740 \uAC19\uC2B5\uB2C8\uB2E4.";D.ui.started?Ie(e):rc("<span>"+e+"</span>"+wh(),6e3),xr();return}ac(!1)}else _n.off3d=!0,Eo(),ac(!0);xr(ge("set-3d"))},reload(){ys(),location.reload()}};function km(n,t){let e=D.ui;!e.started||e.verdict||!ur.includes(n)||(Po(),n!=="people"&&Ti(),e.tab==="scene"&&n!=="scene"&&(D.sceneTold=!0),e.tab=n,e.notice="",Oe(n==="notes"?"full":"half",!0),n==="accuse"&&(e.view="lobby",un(),te("view","lobby")),_e(t?"#tab-"+n:"#stageTitle"),ot("sheetBody").scrollTop=0)}function XS(n){let t=D.ui;if(!t||!t.started||t.verdict||!n||document.querySelector("dialog[open]"))return;let[e,i]=String(n).split(":");if(e==="p"&&Ee[i])return t.tab==="accuse"?(t.person=i,t.notice="",Ie("\uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC744 \uACE8\uB790\uC2B5\uB2C8\uB2E4: "+Ee[i].name+"."),_e('input[name="suspect"][value="'+i+'"]')):Ai.select("p:"+i,!0);e==="e"&&yn[i]&&Ai.select("e:"+i,!0)}function qS(){mr(),Ql()}function jm({root:n,restored:t,makeWorld:e}){if(D.makeWorld=e||null,D.g=ee.fresh(),D.ui=zm(!1),t&&t.g){let i=t.g,s=t.extra||{};D.g=i,Ih=i.budget<9||i.tries<3||i.pins.size>0,ur.includes(s.tab)&&(D.ui.tab=s.tab),typeof s.person=="string"&&Ee[s.person]&&(D.ui.person=s.person),Array.isArray(s.proof)&&(D.ui.proof=[...new Set(s.proof.filter(o=>typeof o=="string"&&i.seen.has(o)))].slice(0,2)),Ph.some(([o])=>o===s.view)&&(D.ui.view=s.view);let r=zS(i,s);r&&(D.ui.verdict=r.v,D.ui.person=r.person,D.ui.proof=r.proof,r.v.ok&&(D.ui.story=tn.length),Ih=!0)}n.innerHTML=kS(),document.body.classList.toggle("calm",wi()),GS(),gm(()=>{un()}),Oe("half",!0),document.addEventListener("pointerdown",()=>lc(),{capture:!0,passive:!0}),document.addEventListener("click",i=>{lc(),D.ui.started&&!cc&&Nh();let s=i.target.closest("dialog");if(s&&i.target===s)return s.close();let r=i.target.closest("[data-act3d]");if(r){xn("tick");let c=Ai[r.dataset.act3d];c&&c(r.dataset.id);return}if(i.target.closest('input[aria-disabled="true"]'))return i.preventDefault(),Ie("\uC99D\uAC70\uB294 \uB450 \uAC1C\uAE4C\uC9C0\uC785\uB2C8\uB2E4. \uD558\uB098\uB97C \uD574\uC81C\uD55C \uB4A4 \uACE0\uB974\uC138\uC694.");let a=i.target.closest("[data-action],[data-tab]");if(!a||a.id==="askYes"&&performance.now()-Em()<400)return;if(xn("tick"),a.dataset.tab)return km(a.dataset.tab,!0);let l=Ai[a.dataset.action];l&&l(a.dataset.id,a.dataset.arg)}),document.addEventListener("change",i=>{let s=i.target,r=D.ui;if(r.started){if(s.name==="suspect")r.person=s.value,r.notice="",_e('input[name="suspect"][value="'+s.value+'"]');else if(s.name==="proof"){s.checked?r.proof.length<2&&r.proof.push(s.value):r.proof=r.proof.filter(a=>a!==s.value);let o=r.proof.length;Ie(o===2?"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":o?"\uC99D\uAC70 \uD55C \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":"\uACE0\uB978 \uC99D\uAC70\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),_e('input[name="proof"][value="'+s.value+'"]')}}}),ot("tabs").addEventListener("keydown",i=>{let s=ur.indexOf(D.ui.tab),r={ArrowRight:(s+1)%4,ArrowLeft:(s+3)%4,Home:0,End:3}[i.key];r!==void 0&&(i.preventDefault(),km(ur[r],!0))}),ot("bubble").addEventListener("click",()=>{xn("tick"),Ai["talk-next"]()});for(let i of document.querySelectorAll("dialog"))i.addEventListener("close",()=>{i.id==="hintDlg"&&D.ui.started&&D.ui.tab==="notes"&&!D.ui.verdict&&_e(),Cm(()=>D.ui.started?ot("hintBtn").hidden?ot("stageTitle"):ot("hintBtn"):ot("titleH"))});if(window.ResizeObserver){let i=new ResizeObserver(()=>un());i.observe(ot("hud")),i.observe(ot("tabs"))}return addEventListener("resize",()=>{un(),mr(),Ql(),D.ui.board==="audio"&&ql()}),document.addEventListener("visibilitychange",()=>{document.hidden&&ys()}),addEventListener("pagehide",ys),addEventListener("popstate",WS),Gp(i=>{Sh||i&&Mh&&i<Mh||(Sh=!0,rc("<span>\uB2E4\uB978 \uCC3D\uC5D0\uC11C \uC774 \uC870\uC0AC\uB97C \uB354 \uCD5C\uADFC\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uCC3D\uC758 \uC9C4\uD589\uC740 \uC774\uC81C \uC790\uB3D9 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span>"+Xt("reload","","\uB2E4\uC2DC \uC5F4\uAE30")+wh()))}),Fp(Km),em(),Object.defineProperty(window,"__app",{configurable:!0,value:Object.freeze({get g(){return D.g},get ui(){return D.ui},get world(){return D.world}})}),_n.off3d?(D.no3d=!0,document.body.classList.add("no3d")):Zm(),un(),{updateReady(){rc("<span>\uC0C8 \uD310\uC774 \uC900\uBE44\uB410\uC2B5\uB2C8\uB2E4</span>"+Xt("reload","","\uB2E4\uC2DC \uC5F4\uAE30")+wh())}}}var Qm=document.getElementById("canvas"),YS=Hp({Game:ee,EVIDENCE:Fn,PEOPLE:Sn,BUDGET:9,TRIES:3,HINTS:Vl});async function ZS(n){if(!Qm||!Wp())return null;try{return await Op(Qm,n)}catch(t){return console.warn("3D \uD654\uBA74\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",t),null}}var JS=jm({root:document.getElementById("ui"),restored:YS,makeWorld:ZS});zp({onUpdate:()=>JS.updateReady()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
