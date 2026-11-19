(()=>{var op=0,ch=1,ap=2;var Zo=1,lp=2,kr=3,_s=0,En=1,on=2,Vs=0,zr=1,Vi=2,uh=3,hh=4,cp=5;var Hs=100,up=101,hp=102,dp=103,fp=104,pp=200,mp=201,gp=202,xp=203,dh=204,fh=205,_p=206,yp=207,vp=208,bp=209,Sp=210,Mp=211,wp=212,Ap=213,Tp=214,al=0,ll=1,cl=2,Cr=3,ul=4,hl=5,dl=6,fl=7,Fl=0,Ep=1,Cp=2,Si=0,ph=1,mh=2,gh=3,xh=4,_h=5,yh=6,vh=7;var bh=300,Ws=301,Gr=302,Bl=303,kl=304,pl=1e3,yi=1001,ml=1002,sn=1003,Rp=1004;var Jo=1005;var An=1006,zl=1007;var oi=1008;var Pn=1009,Sh=1010,Mh=1011,Vr=1012,Gl=1013,ai=1014,Zn=1015,li=1016,Vl=1017,Hl=1018,Xs=1020,wh=35902,Ah=35899,Th=1021,Eh=1022,ci=1023,ki=1026,Hi=1027,Wl=1028,Xl=1029,ys=1030,ql=1031;var Yl=1033,Ko=33776,$o=33777,jo=33778,Qo=33779,Zl=35840,Jl=35841,Kl=35842,$l=35843,jl=36196,Ql=37492,tc=37496,ec=37488,nc=37489,ta=37490,ic=37491,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,uc=37814,hc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,xc=37821,_c=36492,yc=36494,vc=36495,bc=36283,Sc=36284,ea=36285,Mc=36286;var Ao=2300,gl=2301,rl=2302,eh=2303,nh=2400,ih=2401,sh=2402;var Ip=3200;var wc=0,Lp=1,Wi="",ln="srgb",To="srgb-linear",Eo="linear",we="srgb";var ol=7680;var Pp=519,Dp=512,Np=513,Up=514,Ch=515,Op=516,Fp=517,Rh=518,Ih=519,Bp=35044,Hr=35048;var Lh="300 es",Hn=2e3,Rr=2001;function Xx(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kp(){let n=Co("canvas");return n.style.display="block",n}var Pf={},Ir=null;function Ph(...n){let t="THREE."+n.shift();Ir?Ir("log",t,...n):console.log(t,...n)}function zp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Gt(...n){n=zp(n);let t="THREE."+n.shift();if(Ir)Ir("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Xt(...n){n=zp(n);let t="THREE."+n.shift();if(Ir)Ir("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function So(...n){let t=n.join(" ");t in Pf||(Pf[t]=!0,Gt(...n))}function Gp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Vp={[al]:al,[cl]:dl,[ul]:ul,[Cr]:hl,[ll]:ll,[dl]:cl,[fl]:fl,[hl]:Cr},vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=1234567,Mo=Math.PI/180,Lr=180/Math.PI;function Wr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function de(n,t,e){return Math.max(t,Math.min(e,n))}function Dh(n,t){return(n%t+t)%t}function Yx(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Zx(n,t,e){return n!==t?(e-n)/(t-n):0}function wo(n,t,e){return(1-e)*n+e*t}function Jx(n,t,e,i){return wo(n,t,1-Math.exp(-e*i))}function Kx(n,t=1){return t-Math.abs(Dh(n,t*2)-t)}function $x(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function jx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qx(n,t){return n+Math.floor(Math.random()*(t-n+1))}function t_(n,t){return n+Math.random()*(t-n)}function e_(n){return n*(.5-Math.random())}function n_(n){n!==void 0&&(Df=n);let t=Df+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function i_(n){return n*Mo}function s_(n){return n*Lr}function r_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function o_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function a_(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Uh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hp(n,t){if(t.constructor===Float32Array)return n;let e=Uh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Wp(n,t){if(t.constructor===Float32Array)return n;let e=Uh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var na={DEG2RAD:Mo,RAD2DEG:Lr,generateUUID:Wr,clamp:de,euclideanModulo:Dh,mapLinear:Yx,inverseLerp:Zx,lerp:wo,damp:Jx,pingpong:Kx,smoothstep:$x,smootherstep:jx,randInt:Qx,randFloat:t_,randFloatSpread:e_,seededRandom:n_,degToRad:i_,radToDeg:s_,isPowerOfTwo:r_,ceilPowerOfTwo:o_,floorPowerOfTwo:Nh,setQuaternionFromProperEuler:a_,normalize:Wp,denormalize:Hp},zh=class zh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zh.prototype.isVector2=!0;var Kt=zh,Wn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+d*y;m<0&&(h=-h,p=-p,g=-g,y=-y,m=-m);let f=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);f=Math.sin(f*_)/b,a=Math.sin(a*_)/b,l=l*f+h*a,c=c*f+p*a,u=u*f+g*a,d=d*f+y*a}else{l=l*f+h*a,c=c*f+p*a,u=u*f+g*a,d=d*f+y*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*p-c*h,t[e+1]=l*g+u*h+c*d-a*p,t[e+2]=c*g+u*p+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gh=class Gh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Uu.copy(this).projectOnVector(t),this.sub(Uu)}reflect(t){return this.sub(Uu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;var V=Gh,Uu=new V,Nf=new Wn,Vh=class Vh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],_=s[1],b=s[4],v=s[7],E=s[2],T=s[5],x=s[8];return r[0]=o*y+a*_+l*E,r[3]=o*m+a*b+l*T,r[6]=o*f+a*v+l*x,r[1]=c*y+u*_+d*E,r[4]=c*m+u*b+d*T,r[7]=c*f+u*v+d*x,r[2]=h*y+p*_+g*E,r[5]=h*m+p*b+g*T,r[8]=h*f+p*v+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=e*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return So("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ou.makeScale(t,e)),this}rotate(t){return So("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ou.makeRotation(-t)),this}translate(t,e){return So("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ou.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vh.prototype.isMatrix3=!0;var Yt=Vh,Ou=new Yt,Uf=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l_(){let n={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[To]:{primaries:t,whitePoint:i,transfer:Eo,toXYZ:Uf,fromXYZ:Of,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:i,transfer:we,toXYZ:Uf,fromXYZ:Of,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}var he=l_();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fr,xl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fr===void 0&&(fr=Co("canvas")),fr.width=t.width,fr.height=t.height;let s=fr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Co("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bi(e[i]/255)*255):e[i]=Bi(e[i]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},c_=0,Pr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fu(s[o].image)):r.push(Fu(s[o]))}else r=Fu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Fu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var u_=0,Bu=new V,Tn=class n extends vi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=yi,s=yi,r=An,o=oi,a=ci,l=Pn,c=n.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Wr(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pl:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pl:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=bh;Tn.DEFAULT_ANISOTROPY=1;var Hh=class Hh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(p+1)/2,E=(f+1)/2,T=(u+h)/4,x=(d+y)/4,M=(g+m)/4;return b>v&&b>E?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=x/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=M/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=x/r,s=M/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hh.prototype.isVector4=!0;var Fe=Hh,_l=class extends vi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Tn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends _l{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ro=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ol=class Ol{constructor(t,e,i,s,r,o,a,l,c,u,d,h,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,h,p,g,y,m)}set(t,e,i,s,r,o,a,l,c,u,d,h,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ol().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/pr.setFromMatrixColumn(t,0).length(),r=1/pr.setFromMatrixColumn(t,1).length(),o=1/pr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,p=o*d,g=a*u,y=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=h-y*c,e[9]=-a*l,e[2]=y-h*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,g=c*u,y=c*d;e[0]=h+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=y+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,g=c*u,y=c*d;e[0]=h-y*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,p=o*d,g=a*u,y=a*d;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-h*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+g,e[10]=h-y*d}else if(t.order==="XZY"){let h=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h_,t,d_)}lookAt(t,e,i){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),rs.crossVectors(i,Nn),rs.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),rs.crossVectors(i,Nn)),rs.normalize(),Ba.crossVectors(Nn,rs),s[0]=rs.x,s[4]=Ba.x,s[8]=Nn.x,s[1]=rs.y,s[5]=Ba.y,s[9]=Nn.y,s[2]=rs.z,s[6]=Ba.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],_=i[3],b=i[7],v=i[11],E=i[15],T=s[0],x=s[4],M=s[8],O=s[12],C=s[1],U=s[5],z=s[9],X=s[13],L=s[2],G=s[6],$=s[10],Y=s[14],A=s[3],R=s[7],D=s[11],H=s[15];return r[0]=o*T+a*C+l*L+c*A,r[4]=o*x+a*U+l*G+c*R,r[8]=o*M+a*z+l*$+c*D,r[12]=o*O+a*X+l*Y+c*H,r[1]=u*T+d*C+h*L+p*A,r[5]=u*x+d*U+h*G+p*R,r[9]=u*M+d*z+h*$+p*D,r[13]=u*O+d*X+h*Y+p*H,r[2]=g*T+y*C+m*L+f*A,r[6]=g*x+y*U+m*G+f*R,r[10]=g*M+y*z+m*$+f*D,r[14]=g*O+y*X+m*Y+f*H,r[3]=_*T+b*C+v*L+E*A,r[7]=_*x+b*U+v*G+E*R,r[11]=_*M+b*z+v*$+E*D,r[15]=_*O+b*X+v*Y+E*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15],_=l*p-c*h,b=a*p-c*d,v=a*h-l*d,E=o*p-c*u,T=o*h-l*u,x=o*d-a*u;return e*(y*_-m*b+f*v)-i*(g*_-m*E+f*T)+s*(g*b-y*E+f*x)-r*(g*v-y*T+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],_=e*a-i*o,b=e*l-s*o,v=e*c-r*o,E=i*l-s*a,T=i*c-r*a,x=s*c-r*l,M=u*y-d*g,O=u*m-h*g,C=u*f-p*g,U=d*m-h*y,z=d*f-p*y,X=h*f-p*m,L=_*X-b*z+v*U+E*C-T*O+x*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return t[0]=(a*X-l*z+c*U)*G,t[1]=(s*z-i*X-r*U)*G,t[2]=(y*x-m*T+f*E)*G,t[3]=(h*T-d*x-p*E)*G,t[4]=(l*C-o*X-c*O)*G,t[5]=(e*X-s*C+r*O)*G,t[6]=(m*v-g*x-f*b)*G,t[7]=(u*x-h*v+p*b)*G,t[8]=(o*z-a*C+c*M)*G,t[9]=(i*C-e*z-r*M)*G,t[10]=(g*T-y*v+f*_)*G,t[11]=(d*v-u*T-p*_)*G,t[12]=(a*O-o*U-l*M)*G,t[13]=(e*U-i*O+s*M)*G,t[14]=(y*b-g*E-m*_)*G,t[15]=(u*E-d*b+h*_)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,g=r*d,y=o*u,m=o*d,f=a*d,_=l*c,b=l*u,v=l*d,E=i.x,T=i.y,x=i.z;return s[0]=(1-(y+f))*E,s[1]=(p+v)*E,s[2]=(g-b)*E,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(h+f))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+b)*x,s[9]=(m-_)*x,s[10]=(1-(h+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=pr.set(s[0],s[1],s[2]).length(),a=pr.set(s[4],s[5],s[6]).length(),l=pr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let c=1/o,u=1/a,d=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,e.setFromRotationMatrix(ti),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Hn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Hn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Rr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Hn,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Hn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Rr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ol.prototype.isMatrix4=!0;var _e=Ol,pr=new V,ti=new _e,h_=new V(0,0,0),d_=new V(1,1,1),rs=new V,Ba=new V,Nn=new V,Ff=new _e,Bf=new Wn,si=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ff.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ff,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},f_=0,kf=new V,mr=new Wn,Di=new _e,ka=new V,go=new V,p_=new V,m_=new Wn,zf=new V(1,0,0),Gf=new V(0,1,0),Vf=new V(0,0,1),Hf={type:"added"},g_={type:"removed"},gr={type:"childadded",child:null},ku={type:"childremoved",child:null},Ye=class n extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new si,i=new Wn,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Yt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(zf,t)}rotateY(t){return this.rotateOnAxis(Gf,t)}rotateZ(t){return this.rotateOnAxis(Vf,t)}translateOnAxis(t,e){return kf.copy(t).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zf,t)}translateY(t){return this.translateOnAxis(Gf,t)}translateZ(t){return this.translateOnAxis(Vf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ka.copy(t):ka.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(go,ka,this.up):Di.lookAt(ka,go,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Di),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hf),gr.child=t,this.dispatchEvent(gr),gr.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(g_),ku.child=t,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hf),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,p_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,m_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new V(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var De=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},x_={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new De;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},za={h:0,s:0,l:0};function zu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Dh(t,1),e=de(e,0,1),i=de(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=zu(o,r,t+1/3),this.g=zu(o,r,t),this.b=zu(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function i(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let i=Xp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return he.workingToColorSpace(yn.copy(this),t),Math.round(de(yn.r*255,0,255))*65536+Math.round(de(yn.g*255,0,255))*256+Math.round(de(yn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=ln){he.workingToColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(za);let i=wo(os.h,za.h,e),s=wo(os.s,za.s,e),r=wo(os.l,za.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new qt;qt.NAMES=Xp;var Io=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new V,Ni=new V,Gu=new V,Ui=new V,xr=new V,_r=new V,Wf=new V,Vu=new V,Hu=new V,Wu=new V,Xu=new Fe,qu=new Fe,Yu=new Fe,us=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ei.subVectors(s,e),Ni.subVectors(i,e),Gu.subVectors(t,e);let o=ei.dot(ei),a=ei.dot(Ni),l=ei.dot(Gu),c=Ni.dot(Ni),u=Ni.dot(Gu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Xu.setScalar(0),qu.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(t,e),qu.fromBufferAttribute(t,i),Yu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xu,r.x),o.addScaledVector(qu,r.y),o.addScaledVector(Yu,r.z),o}static isFrontFacing(t,e,i,s){return ei.subVectors(i,e),Ni.subVectors(t,e),ei.cross(Ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ei.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;xr.subVectors(s,i),_r.subVectors(r,i),Vu.subVectors(t,i);let l=xr.dot(Vu),c=_r.dot(Vu);if(l<=0&&c<=0)return e.copy(i);Hu.subVectors(t,s);let u=xr.dot(Hu),d=_r.dot(Hu);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(i).addScaledVector(xr,o);Wu.subVectors(t,r);let p=xr.dot(Wu),g=_r.dot(Wu);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(_r,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Wf.subVectors(r,s),a=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(Wf,a);let f=1/(m+y+h);return o=y*f,a=h*f,e.copy(i).addScaledVector(xr,o).addScaledVector(_r,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(t.matrixWorld),this.union(Ga)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xo),Va.subVectors(this.max,xo),yr.subVectors(t.a,xo),vr.subVectors(t.b,xo),br.subVectors(t.c,xo),as.subVectors(vr,yr),ls.subVectors(br,vr),Os.subVectors(yr,br);let e=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Os.z,Os.y,as.z,0,-as.x,ls.z,0,-ls.x,Os.z,0,-Os.x,-as.y,as.x,0,-ls.y,ls.x,0,-Os.y,Os.x,0];return!Zu(e,yr,vr,br,Va)||(e=[1,0,0,0,1,0,0,0,1],!Zu(e,yr,vr,br,Va))?!1:(Ha.crossVectors(as,ls),e=[Ha.x,Ha.y,Ha.z],Zu(e,yr,vr,br,Va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new V,new V,new V,new V,new V,new V,new V,new V],ni=new V,Ga=new Xn,yr=new V,vr=new V,br=new V,as=new V,ls=new V,Os=new V,xo=new V,Va=new V,Ha=new V,Fs=new V;function Zu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fs.fromArray(n,r);let a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=t.dot(Fs),c=e.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var qe=new V,Wa=new Kt,__=0,cn=class extends vi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bp,this.updateRanges=[],this.gpuType=Zn,this.version=0,this._normalizationScale=t!==void 0?Uh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wa.fromBufferAttribute(this,e),Wa.applyMatrix3(t),this.setXY(e,Wa.x,Wa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wp(t,this.array)}};var Lo=class extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Po=class extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ve=class extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}},y_=new Xn,_o=new V,Ju=new V,hs=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):y_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);let e=_o.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_o,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ju.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(Ju)),this.expandByPoint(_o.copy(t.center).sub(Ju))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},v_=0,Vn=new _e,Ku=new Ye,Sr=new V,Un=new Xn,yo=new Xn,nn=new V,vn=class n extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xx(t)?Po:Lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return Ku.lookAt(t),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Un.min,yo.min),Un.expandByPoint(nn),nn.addVectors(Un.max,yo.max),Un.expandByPoint(nn)):(Un.expandByPoint(yo.min),Un.expandByPoint(yo.max))}Un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(t,c),nn.add(Sr)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)a[O]=new V,l[O]=new V;let u=new V,d=new V,h=new V,p=new Kt,g=new Kt,y=new Kt,m=new V,f=new V;function _(O,C,U){c[O]=c[C]=c[U]=1,u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,U),p.fromBufferAttribute(r,O),g.fromBufferAttribute(r,C),y.fromBufferAttribute(r,U),d.sub(u),h.sub(u),g.sub(p),y.sub(p);let z=1/(g.x*y.y-y.x*g.y);isFinite(z)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(h,-g.y).multiplyScalar(z),f.copy(h).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(z),a[O].add(m),a[C].add(m),a[U].add(m),l[O].add(f),l[C].add(f),l[U].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let O=0,C=b.length;O<C;++O){let U=b[O],z=U.start,X=U.count;for(let L=z,G=z+X;L<G;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new V,E=new V,T=new V,x=new V;function M(O){T.fromBufferAttribute(s,O),x.copy(T);let C=a[O];v.copy(C),v.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(x,C);let z=E.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,z)}for(let O=0,C=i.count;O<C;++O)c[O]&&M(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new cn(h,u,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $u=new V,b_=new V,S_=new Yt,ii=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=$u.subVectors(i,e).cross(b_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta($u),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||S_.getNormalMatrix(t),s=this.coplanarPoint($u).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},M_=0,ds=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=zr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ol,this.stencilZFail=ol,this.stencilZPass=ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ii().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new V,ju=new V,Xa=new V,qa=new V,Do=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ju.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),qa.copy(this.origin).sub(ju);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xa),a=qa.dot(this.direction),l=-qa.dot(Xa),c=qa.lengthSq(),u=Math.abs(1-o*o),d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ju).addScaledVector(Xa,h),p}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,p=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,f=i.x-o.x,_=i.y-o.y,b=i.z-o.z,v=Math.abs(l),E=Math.abs(c),T=Math.abs(u),x,M,O,C,U,z,X,L,G,$,Y,A;if(v>=E&&v>=T?(O=l,z=d,G=g,A=f,l>=0?(x=c,M=u,C=h,U=p,X=y,L=m,$=_,Y=b):(x=u,M=c,C=p,U=h,X=m,L=y,$=b,Y=_)):E>=T?(O=c,z=h,G=y,A=_,c>=0?(x=u,M=l,C=p,U=d,X=m,L=g,$=b,Y=f):(x=l,M=u,C=d,U=p,X=g,L=m,$=f,Y=b)):(O=u,z=p,G=m,A=b,u>=0?(x=l,M=c,C=d,U=h,X=g,L=y,$=f,Y=_):(x=c,M=l,C=h,U=d,X=y,L=g,$=_,Y=f)),O===0)return null;let R=x/O,D=M/O,H=1/O,tt=C-R*z,ft=U-D*z,W=X-R*G,ot=L-D*G,nt=$-R*A,_t=Y-D*A,yt=nt*ot-_t*W,Ht=tt*_t-ft*nt,Oe=W*ft-ot*tt;if(s){if(yt<0||Ht<0||Oe<0)return null}else if((yt<0||Ht<0||Oe<0)&&(yt>0||Ht>0||Oe>0))return null;let kt=yt+Ht+Oe;if(kt===0)return null;let Jt=H*(yt*z+Ht*G+Oe*A);return(kt>0?Jt<0:Jt>0)?null:this.at(Jt/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xf=new _e,Bs=new Do,Ya=new hs,qf=new V,Za=new V,Ja=new V,Ka=new V,Qu=new V,$a=new V,Yf=new V,ja=new V,Bt=class extends Ye{constructor(t=new vn,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Qu.fromBufferAttribute(d,t),o?$a.addScaledVector(Qu,u):$a.addScaledVector(Qu.sub(e),u))}e.add($a)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!(Ya.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Ya,qf)===null||Bs.origin.distanceToSquared(qf)>(t.far-t.near)**2))&&(Xf.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,E=b;v<E;v+=3){let T=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);s=Qa(this,f,t,i,c,u,d,T,x,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let _=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=Qa(this,o,t,i,c,u,d,_,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,E=b;v<E;v+=3){let T=v,x=v+1,M=v+2;s=Qa(this,f,t,i,c,u,d,T,x,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let _=m,b=m+1,v=m+2;s=Qa(this,o,t,i,c,u,d,_,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function w_(n,t,e,i,s,r,o,a){let l;if(t.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===_s,a),l===null)return null;ja.copy(a),ja.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ja);return c<e.near||c>e.far?null:{distance:c,point:ja.clone(),object:n}}function Qa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Za),n.getVertexPosition(l,Ja),n.getVertexPosition(c,Ka);let u=w_(n,t,e,i,Za,Ja,Ka,Yf);if(u){let d=new V;us.getBarycoord(Yf,Za,Ja,Ka,d),s&&(u.uv=us.getInterpolatedAttribute(s,a,l,c,d,new Kt)),r&&(u.uv1=us.getInterpolatedAttribute(r,a,l,c,d,new Kt)),o&&(u.normal=us.getInterpolatedAttribute(o,a,l,c,d,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new V,materialIndex:0};us.getNormal(Za,Ja,Ka,h.normal),u.face=h,u.barycoord=d}return u}var No=class extends Tn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=sn,u=sn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mr=new _e,Zf=new _e,tl=[],Jf=new Xn,A_=new _e,vo=new Bt,bo=new hs,bi=class extends Bt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,A_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mr),Jf.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Jf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mr),bo.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(bo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(i),t.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Zf.multiplyMatrices(i,Mr),vo.matrixWorld=Zf,vo.raycast(t,tl);for(let o=0,a=tl.length;o<a;o++){let l=tl[o];l.instanceId=r,l.object=this,e.push(l)}tl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new No(new Float32Array(s*this.count),s,this.count,Wl,Zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new hs,T_=new Kt(.5,.5),el=new V,fs=class{constructor(t=new ii,e=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],_=r[12],b=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,p-u,f-g,E-_).normalize(),s[1].setComponents(c+o,p+u,f+g,E+_).normalize(),s[2].setComponents(c+a,p+d,f+y,E+b).normalize(),s[3].setComponents(c-a,p-d,f-y,E-b).normalize(),i)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,f-m,E-v).normalize();else if(s[4].setComponents(c-l,p-h,f-m,E-v).normalize(),e===Hn)s[5].setComponents(c+l,p+h,f+m,E+v).normalize();else if(e===Rr)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);let e=T_.distanceTo(t.center);return ks.radius=.7071067811865476+e,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(el.x=s.normal.x>0?t.max.x:t.min.x,el.y=s.normal.y>0?t.max.y:t.min.y,el.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kf=new _e,vl=class n{constructor(){this.coordinateSystem=Hn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Kf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new fs),i[s].setFromProjectionMatrix(Kf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new fs),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Uo=class extends Tn{constructor(t=[],e=Ws,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zi=class extends Tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends Tn{constructor(t,e,i=ai,s,r,o,a=sn,l=sn,c,u=ki,d=1){if(u!==ki&&u!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oo=class extends Gi{constructor(t,e=ai,i=Ws,s,r,o=sn,a=sn,l,c=ki){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fo=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ri=class n extends vn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2));function g(y,m,f,_,b,v,E,T,x,M,O){let C=v/x,U=E/M,z=v/2,X=E/2,L=T/2,G=x+1,$=M+1,Y=0,A=0,R=new V;for(let D=0;D<$;D++){let H=D*U-X;for(let tt=0;tt<G;tt++){let ft=tt*C-z;R[y]=ft*_,R[m]=H*b,R[f]=L,c.push(R.x,R.y,R.z),R[y]=0,R[m]=0,R[f]=T>0?1:-1,u.push(R.x,R.y,R.z),d.push(tt/x),d.push(1-D/M),Y+=1}}for(let D=0;D<M;D++)for(let H=0;H<x;H++){let tt=h+H+G*D,ft=h+H+G*(D+1),W=h+(H+1)+G*(D+1),ot=h+(H+1)+G*D;l.push(tt,ft,ot),l.push(ft,W,ot),A+=6}a.addGroup(p,A,O),p+=A,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zs=class n extends vn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new V,u=new Kt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Or=class n extends vn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],g=0,y=[],m=i/2,f=0;_(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(p,2));function _(){let v=new V,E=new V,T=0,x=(e-t)/i;for(let M=0;M<=r;M++){let O=[],C=M/r,U=C*(e-t)+t;for(let z=0;z<=s;z++){let X=z/s,L=X*l+a,G=Math.sin(L),$=Math.cos(L);E.x=U*G,E.y=-C*i+m,E.z=U*$,d.push(E.x,E.y,E.z),v.set(G,x,$).normalize(),h.push(v.x,v.y,v.z),p.push(X,1-C),O.push(g++)}y.push(O)}for(let M=0;M<s;M++)for(let O=0;O<r;O++){let C=y[O][M],U=y[O+1][M],z=y[O+1][M+1],X=y[O][M+1];(t>0||O!==0)&&(u.push(C,U,X),T+=3),(e>0||O!==r-1)&&(u.push(U,z,X),T+=3)}c.addGroup(f,T,0),f+=T}function b(v){let E=g,T=new Kt,x=new V,M=0,O=v===!0?t:e,C=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*C,0),h.push(0,C,0),p.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let L=z/s*l+a,G=Math.cos(L),$=Math.sin(L);x.x=O*$,x.y=m*C,x.z=O*G,d.push(x.x,x.y,x.z),h.push(0,C,0),T.x=G*.5+.5,T.y=$*.5*C+.5,p.push(T.x,T.y),g++}for(let z=0;z<s;z++){let X=E+z,L=U+z;v===!0?u.push(L,L+1,X):u.push(L+1,L,X),M+=3}c.addGroup(f,M,v===!0?1:2),f+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ps=class n extends Or{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bo=class n extends vn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let b=new V,v=new V,E=new V;for(let T=0;T<e.length;T+=3)p(e[T+0],b),p(e[T+1],v),p(e[T+2],E),l(b,v,E,_)}function l(_,b,v,E){let T=E+1,x=[];for(let M=0;M<=T;M++){x[M]=[];let O=_.clone().lerp(v,M/T),C=b.clone().lerp(v,M/T),U=T-M;for(let z=0;z<=U;z++)z===0&&M===T?x[M][z]=O:x[M][z]=O.clone().lerp(C,z/U)}for(let M=0;M<T;M++)for(let O=0;O<2*(T-M)-1;O++){let C=Math.floor(O/2);O%2===0?(h(x[M][C+1]),h(x[M+1][C]),h(x[M][C])):(h(x[M][C+1]),h(x[M+1][C+1]),h(x[M+1][C]))}}function c(_){let b=new V;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(_),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){let _=new V;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let v=m(_)/2/Math.PI+.5,E=f(_)/Math.PI+.5;o.push(v,1-E)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let b=o[_+0],v=o[_+2],E=o[_+4],T=Math.max(b,v,E),x=Math.min(b,v,E);T>.9&&x<.1&&(b<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function p(_,b){let v=_*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){let _=new V,b=new V,v=new V,E=new V,T=new Kt,x=new Kt,M=new Kt;for(let O=0,C=0;O<r.length;O+=9,C+=6){_.set(r[O+0],r[O+1],r[O+2]),b.set(r[O+3],r[O+4],r[O+5]),v.set(r[O+6],r[O+7],r[O+8]),T.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),M.set(o[C+4],o[C+5]),E.copy(_).add(b).add(v).divideScalar(3);let U=m(E);y(T,C+0,_,U),y(x,C+2,b,U),y(M,C+4,v,U)}}function y(_,b,v,E){E<0&&_.x===1&&(o[b]=_.x-1),v.x===0&&v.z===0&&(o[b]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var ko=class n extends Bo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var zo=class n extends Bo{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},un=class n extends vn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){let _=f*h-o;for(let b=0;b<c;b++){let v=b*d-r;g.push(v,-_,0),y.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let b=_+c*f,v=_+c*(f+1),E=_+1+c*(f+1),T=_+1+c*f;p.push(b,v,T),p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Fr=class n extends vn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,h=(e-t)/s,p=new V,g=new Kt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let y=0;y<s;y++){let m=y*(i+1);for(let f=0;f<i;f++){let _=f+m,b=_,v=_+i+1,E=_+i+2,T=_+1;a.push(b,v,T),a.push(v,E,T)}}this.setIndex(a),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var qn=class n extends vn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new V,h=new V,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let _=[],b=f/i,v=o+b*a,E=t*Math.cos(v),T=Math.sqrt(t*t-E*E),x=0;f===0&&o===0?x=.5/e:f===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let O=M/e,C=s+O*r;d.x=-T*Math.cos(C),d.y=E,d.z=T*Math.sin(C),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(O+x,1-b),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<e;_++){let b=u[f][_+1],v=u[f][_],E=u[f+1][_],T=u[f+1][_+1];(f!==0||o>0)&&p.push(b,v,T),(f!==i-1||l<Math.PI)&&p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Go=class n extends vn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new V,p=new V,g=new V;for(let y=0;y<=i;y++){let m=o+y/i*a;for(let f=0;f<=s;f++){let _=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(_),p.y=(t+e*Math.cos(m))*Math.sin(_),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let f=(s+1)*y+m-1,_=(s+1)*(y-1)+m-1,b=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(f,_,v),l.push(_,b,v)}this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function qs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if($f(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if($f(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=qs(n[e]);for(let s in i)t[s]=i[s]}return t}function $f(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function E_(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Oh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var qp={clone:qs,merge:bn},C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=E_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Kt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _e().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},bl=class extends Yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var rn=class extends ds{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Sl=class extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ml=class extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function nl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ms=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wl=class extends ms{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ih:r=t,a=2*e-i;break;case sh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ih:o=t,l=2*i-e;break;case sh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,f=-h*m+2*h*y-h*g,_=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,b=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let E=0;E!==a;++E)r[E]=f*o[u+E]+_*o[c+E]+b*o[l+E]+v*o[d+E];return r}},Al=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Tl=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},El=class extends ms{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let h=a*2,p=t-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],f=p*h+g*2,_=d[f],b=d[f+1],v=t*h+g*2,E=u[v],T=u[v+1],x=L_(i,e,_,E,s);r[g]=Yp(x,y,b,T,m)}return r}};function Yp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function I_(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function L_(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Yp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=I_(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Fn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),nl(t.settings)&&(i.settings={inTangents:wr(t.settings.inTangents,Array),outTangents:wr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new El(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ao:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case rl:e=this.InterpolantFactoryMethodSmooth;break;case eh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Gt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return rl;case this.InterpolantFactoryMethodBezier:return eh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;nl(this.settings)&&(jf(this.settings.inTangents,t),jf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;nl(this.settings)&&(Qf(this.settings.inTangents,t),Qf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[h+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)e[h+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,nl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Qf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=gl;var gs=class extends Fn{constructor(t,e,i){super(t,e,i)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ao;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};Cl.prototype.ValueTypeName="color";var Rl=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};Rl.prototype.ValueTypeName="number";var Il=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vo=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Fn{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ao;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};Ll.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zp=new Pl,Dl=class{constructor(t){this.manager=t!==void 0?t:Zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ho=class extends Ye{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wo=class extends Ho{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},th=new _e,tp=new V,ep=new V,Nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tp.setFromMatrixPosition(t.matrixWorld),e.position.copy(tp),ep.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ep),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(th,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Rr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(th)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},il=new V,sl=new Wn,_i=new V,Xo=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(il,sl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,sl,_i.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(il,sl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,sl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new V,np=new Kt,ip=new Kt,wn=class extends Xo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,np,ip),e.subVectors(ip,np)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Gs=class extends Xo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rh=class extends Nl{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends Ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new rh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ar=-90,Tr=1,Br=class extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(Ar,Tr,t,e);s.layers=this.layers,this.add(s);let r=new wn(Ar,Tr,t,e);r.layers=this.layers,this.add(r);let o=new wn(Ar,Tr,t,e);o.layers=this.layers,this.add(o);let a=new wn(Ar,Tr,t,e);a.layers=this.layers,this.add(a);let l=new wn(Ar,Tr,t,e);l.layers=this.layers,this.add(l);let c=new wn(Ar,Tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ul=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Fh="\\[\\]\\.:\\/",P_=new RegExp("["+Fh+"]","g"),Bh="[^"+Fh+"]",D_="[^"+Fh.replace("\\.","")+"]",N_=/((?:WC+[\/:])*)/.source.replace("WC",Bh),U_=/(WCOD+)?/.source.replace("WCOD",D_),O_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),F_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),B_=new RegExp("^"+N_+U_+O_+F_+"$"),k_=["material","materials","bones","map"],oh=class{constructor(t,e,i){let s=i||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P_,"")}static parseTrackName(t){let e=B_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);k_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=oh;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g2=new Float32Array(1);var sp=new _e,Yo=class{constructor(t,e,i=0,s=1/0){this.ray=new Do(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sp),this}intersectObject(t,e=!0,i=[]){return ah(t,this,i,e),i.sort(rp),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ah(t[s],this,i,e);return i.sort(rp),i}};function rp(n,t){return n.distance-t.distance}function ah(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ah(r[o],t,e,!0)}}var Wh=class Wh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Wh.prototype.isMatrix2=!0;var lh=Wh;function kh(n,t,e,i){let s=z_(i);switch(e){case Th:return n*t;case Wl:return n*t/s.components*s.byteLength;case Xl:return n*t/s.components*s.byteLength;case ys:return n*t*2/s.components*s.byteLength;case ql:return n*t*2/s.components*s.byteLength;case Eh:return n*t*3/s.components*s.byteLength;case ci:return n*t*4/s.components*s.byteLength;case Yl:return n*t*4/s.components*s.byteLength;case Ko:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jo:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jl:case $l:return Math.max(n,16)*Math.max(t,8)/4;case Zl:case Kl:return Math.max(n,8)*Math.max(t,8)/2;case jl:case Ql:case ec:case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tc:case ta:case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _c:case yc:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bc:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ea:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z_(n){switch(n){case Pn:case Sh:return{byteLength:1,components:1};case Vr:case Mh:case li:return{byteLength:2,components:1};case Vl:case Hl:return{byteLength:2,components:4};case ai:case Gl:case Zn:return{byteLength:4,components:1};case wh:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function gm(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Y_(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
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
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ty=`#ifdef USE_AOMAP
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
#endif`,ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ny=`#ifdef USE_BATCHING
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
#endif`,iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ay=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xy=`#define PI 3.141592653589793
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
} // validated`,_y=`vec3 transformedNormal = objectNormal;
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
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,by=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
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
}`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,By=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ky=`#ifdef USE_ENVMAP
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
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wy=`PhysicalMaterial material;
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
#endif`,Xy=`uniform sampler2D dfgLUT;
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
}`,qy=`
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
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iv=`#if defined( USE_POINTS_UV )
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
#endif`,sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,av=`#if defined( USE_MORPHCOLORS )
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
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
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
#endif`,uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
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
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pv=`float getShadowMask() {
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
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,Uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gv=`#ifdef USE_TRANSMISSION
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
#endif`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zv=`uniform sampler2D t2D;
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`uniform float backgroundBlurriness;
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
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
}`,t1=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
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
}`,o1=`uniform vec3 diffuse;
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
}`,a1=`#include <common>
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,d1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,p1=`#define NORMAL
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
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,_1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,v1=`#define TOON
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
}`,b1=`uniform float size;
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
}`,S1=`uniform vec3 diffuse;
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
}`,M1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,A1=`uniform float rotation;
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
}`,T1=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Z_,alphahash_pars_fragment:J_,alphamap_fragment:K_,alphamap_pars_fragment:$_,alphatest_fragment:j_,alphatest_pars_fragment:Q_,aomap_fragment:ty,aomap_pars_fragment:ey,batching_pars_vertex:ny,batching_vertex:iy,begin_vertex:sy,beginnormal_vertex:ry,bsdfs:oy,iridescence_fragment:ay,bumpmap_pars_fragment:ly,clipping_planes_fragment:cy,clipping_planes_pars_fragment:uy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:dy,color_fragment:fy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:gy,common:xy,defaultnormal_vertex:_y,displacementmap_pars_vertex:yy,displacementmap_vertex:vy,emissivemap_fragment:by,emissivemap_pars_fragment:Sy,colorspace_fragment:My,colorspace_pars_fragment:wy,envmap_fragment:Ay,envmap_common_pars_fragment:Ty,envmap_pars_fragment:Ey,envmap_pars_vertex:Cy,envmap_physical_pars_fragment:ky,envmap_vertex:Ry,fog_vertex:Iy,fog_pars_vertex:Ly,fog_fragment:Py,fog_pars_fragment:Dy,gradientmap_pars_fragment:Ny,lightmap_pars_fragment:Uy,lights_lambert_fragment:Oy,lights_lambert_pars_fragment:Fy,lights_pars_begin:By,lights_toon_fragment:zy,lights_toon_pars_fragment:Gy,lights_phong_fragment:Vy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Wy,lights_physical_pars_fragment:Xy,lights_fragment_begin:qy,lights_fragment_maps:Yy,lights_fragment_end:Zy,lightprobes_pars_fragment:Jy,logdepthbuf_fragment:Ky,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:Qy,map_fragment:tv,map_pars_fragment:ev,map_particle_fragment:nv,map_particle_pars_fragment:iv,metalnessmap_fragment:sv,metalnessmap_pars_fragment:rv,morphinstance_vertex:ov,morphcolor_vertex:av,morphnormal_vertex:lv,morphtarget_pars_vertex:cv,morphtarget_vertex:uv,normal_fragment_begin:hv,normal_fragment_maps:dv,normal_pars_fragment:fv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:_v,clearcoat_pars_fragment:yv,iridescence_pars_fragment:vv,opaque_fragment:bv,packing:Sv,premultiplied_alpha_fragment:Mv,project_vertex:wv,dithering_fragment:Av,dithering_pars_fragment:Tv,roughnessmap_fragment:Ev,roughnessmap_pars_fragment:Cv,shadowmap_pars_fragment:Rv,shadowmap_pars_vertex:Iv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Pv,skinbase_vertex:Dv,skinning_pars_vertex:Nv,skinning_vertex:Uv,skinnormal_vertex:Ov,specularmap_fragment:Fv,specularmap_pars_fragment:Bv,tonemapping_fragment:kv,tonemapping_pars_fragment:zv,transmission_fragment:Gv,transmission_pars_fragment:Vv,uv_pars_fragment:Hv,uv_pars_vertex:Wv,uv_vertex:Xv,worldpos_vertex:qv,background_vert:Yv,background_frag:Zv,backgroundCube_vert:Jv,backgroundCube_frag:Kv,cube_vert:$v,cube_frag:jv,depth_vert:Qv,depth_frag:t1,distance_vert:e1,distance_frag:n1,equirect_vert:i1,equirect_frag:s1,linedashed_vert:r1,linedashed_frag:o1,meshbasic_vert:a1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:u1,meshmatcap_vert:h1,meshmatcap_frag:d1,meshnormal_vert:f1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:x1,meshphysical_frag:_1,meshtoon_vert:y1,meshtoon_frag:v1,points_vert:b1,points_frag:S1,shadow_vert:M1,shadow_frag:w1,sprite_vert:A1,sprite_frag:T1},Tt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},wi={basic:{uniforms:bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:bn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:bn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:bn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:bn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:bn([Tt.points,Tt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:bn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:bn([Tt.common,Tt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:bn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:bn([Tt.sprite,Tt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:bn([Tt.common,Tt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:bn([Tt.lights,Tt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};wi.physical={uniforms:bn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Ac={r:0,b:0,g:0},E1=new _e,xm=new Yt;xm.set(-1,0,0,0,1,0,0,0,1);function C1(n,t,e,i,s,r){let o=new qt(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let v=_.backgroundBlurriness>0;b=t.get(b,v)}return b}function g(_){let b=!1,v=p(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,b){let v=p(b);v&&v.isCubeTexture?(c===void 0&&(c=new Bt(new ri(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:qs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xm),c.material.toneMapped=he.getTransfer(v.colorSpace)!==we,(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Bt(new un(2,2),new Yn({name:"BackgroundMaterial",uniforms:qs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==we,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Ac,Oh(n)),e.buffers.color.setClear(Ac.r,Ac.g,Ac.b,b,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:y,dispose:f}}function R1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(U,z,X,L,G){let $=!1,Y=d(U,L,X,z);r!==Y&&(r=Y,c(r.object)),$=p(U,L,X,G),$&&g(U,L,X,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(U,z,X,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,z,X,L){let G=L.wireframe===!0,$=i[z.id];$===void 0&&($={},i[z.id]=$);let Y=U.isInstancedMesh===!0?U.id:0,A=$[Y];A===void 0&&(A={},$[Y]=A);let R=A[X.id];R===void 0&&(R={},A[X.id]=R);let D=R[G];return D===void 0&&(D=h(l()),R[G]=D),D}function h(U){let z=[],X=[],L=[];for(let G=0;G<e;G++)z[G]=0,X[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:L,object:U,attributes:{},index:null}}function p(U,z,X,L){let G=r.attributes,$=z.attributes,Y=0,A=X.getAttributes();for(let R in A)if(A[R].location>=0){let H=G[R],tt=$[R];if(tt===void 0&&(R==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),R==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor)),H===void 0||H.attribute!==tt||tt&&H.data!==tt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function g(U,z,X,L){let G={},$=z.attributes,Y=0,A=X.getAttributes();for(let R in A)if(A[R].location>=0){let H=$[R];H===void 0&&(R==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),R==="instanceColor"&&U.instanceColor&&(H=U.instanceColor));let tt={};tt.attribute=H,H&&H.data&&(tt.data=H.data),G[R]=tt,Y++}r.attributes=G,r.attributesNum=Y,r.index=L}function y(){let U=r.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function m(U){f(U,0)}function f(U,z){let X=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;X[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),G[U]!==z&&(n.vertexAttribDivisor(U,z),G[U]=z)}function _(){let U=r.newAttributes,z=r.enabledAttributes;for(let X=0,L=z.length;X<L;X++)z[X]!==U[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function b(U,z,X,L,G,$,Y){Y===!0?n.vertexAttribIPointer(U,z,X,G,$):n.vertexAttribPointer(U,z,X,L,G,$)}function v(U,z,X,L){y();let G=L.attributes,$=X.getAttributes(),Y=z.defaultAttributeValues;for(let A in $){let R=$[A];if(R.location>=0){let D=G[A];if(D===void 0&&(A==="instanceMatrix"&&U.instanceMatrix&&(D=U.instanceMatrix),A==="instanceColor"&&U.instanceColor&&(D=U.instanceColor)),D!==void 0){let H=D.normalized,tt=D.itemSize,ft=t.get(D);if(ft===void 0)continue;let W=ft.buffer,ot=ft.type,nt=ft.bytesPerElement,_t=ot===n.INT||ot===n.UNSIGNED_INT||D.gpuType===Gl;if(D.isInterleavedBufferAttribute){let yt=D.data,Ht=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Oe=D.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let kt=0;kt<R.locationSize;kt++)f(R.location+kt,yt.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let kt=0;kt<R.locationSize;kt++)m(R.location+kt);n.bindBuffer(n.ARRAY_BUFFER,W);for(let kt=0;kt<R.locationSize;kt++)b(R.location+kt,tt/R.locationSize,ot,H,Ht*nt,(Oe+tt/R.locationSize*kt)*nt,_t)}else{if(D.isInstancedBufferAttribute){for(let yt=0;yt<R.locationSize;yt++)f(R.location+yt,D.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let yt=0;yt<R.locationSize;yt++)m(R.location+yt);n.bindBuffer(n.ARRAY_BUFFER,W);for(let yt=0;yt<R.locationSize;yt++)b(R.location+yt,tt/R.locationSize,ot,H,tt*nt,tt/R.locationSize*yt*nt,_t)}}else if(Y!==void 0){let H=Y[A];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(R.location,H);break;case 3:n.vertexAttrib3fv(R.location,H);break;case 4:n.vertexAttrib4fv(R.location,H);break;default:n.vertexAttrib1fv(R.location,H)}}}}_()}function E(){O();for(let U in i){let z=i[U];for(let X in z){let L=z[X];for(let G in L){let $=L[G];for(let Y in $)u($[Y].object),delete $[Y];delete L[G]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let X in z){let L=z[X];for(let G in L){let $=L[G];for(let Y in $)u($[Y].object),delete $[Y];delete L[G]}}delete i[U.id]}function x(U){for(let z in i){let X=i[z];for(let L in X){let G=X[L];if(G[U.id]===void 0)continue;let $=G[U.id];for(let Y in $)u($[Y].object),delete $[Y];delete G[U.id]}}}function M(U){for(let z in i){let X=i[z],L=U.isInstancedMesh===!0?U.id:0,G=X[L];if(G!==void 0){for(let $ in G){let Y=G[$];for(let A in Y)u(Y[A].object),delete Y[A];delete G[$]}delete X[L],Object.keys(X).length===0&&delete i[z]}}}function O(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function I1(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function L1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ci&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Pn&&x!==Zn&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:v,maxSamples:E,samples:T}}function P1(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ii,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,b=_*4,v=f.clippingState||null;l.value=v,v=u(g,h,b,p);for(let E=0;E!==b;++E)v[E]=e[E];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,v=p;b!==y;++b,v+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ra=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Uo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Vs});r.uniforms.tEquirect.value=e;let o=new Bt(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=An),new Br(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Jp=256,D1=3,N1=20,_m=256,ym=16,U1=3,O1=new V,F1=new qt,Ec=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Br(1,10,null),this._boxMesh=new Bt(new ri(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=O1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(F1));let m=new Br(i,s,u);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=g,t.background=y,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Jp,Nh(t))}_fromTexture(t,e){t.mapping===Ws||t.mapping===Gr?this._setSize(t.image.length===0?Jp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Kp(t,!1,!1),i=Math.log2(t)-D1;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Kp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ws||t.mapping===Gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$p()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=B1(),this._integrationMaterial=k1());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ym);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-U1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(_m*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=z1());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Kp(n,t,e){return new ra(n,{minFilter:oi,generateMipmaps:t,type:li,colorSpace:To,depthBuffer:e})}function oa(n,t,e){return new Yn({name:n,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:En,blending:Vs,depthTest:!1,depthWrite:!1})}function B1(){return oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_m}u

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
	`)}function k1(){return oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ym}},`

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
	`)}function z1(){return oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${N1}
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
	`)}function $p(){return oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function jp(){return oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function G1(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Bl||p===kl)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new ra(g.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,g=p===Bl||p===kl,y=p===Ws||p===Gr;if(g||y){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Ec(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return g&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new Ec(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Bl?h.mapping=Ws:p===kl&&(h.mapping=Gr),h}function l(h){let p=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function V1(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&So("WebGLRenderer: "+i+" extension not supported."),s}}}function H1(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),e.memory.geometries++),y}function u(g){let y=g.attributes;for(let m in y)t.update(y[m],n.ARRAY_BUFFER)}function d(g){let y=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let _=y!==null?y.array.length:m.array.length/3-1,b=m.count>=65535?Po:Lo,v=new b(Math.ceil(_/3)*6,1),E=v.array;if(y!==null){let x=y.array;f=y.version;for(let M=0,O=0;M<_;M+=3){let C=x[M+0],U=x[M+1],z=x[M+2];E[O++]=C,E[O++]=U,E[O++]=U,E[O++]=z,E[O++]=z,E[O++]=C}}else{f=m.version;for(let x=0,M=0;x<_;x+=3){let O=x+0,C=x+1,U=x+2;E[M++]=O,E[M++]=C,E[M++]=C,E[M++]=U,E[M++]=U,E[M++]=O}}v.version=f;let T=r.get(g);T&&t.remove(T),r.set(g,v)}function h(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&d(g)}else d(g);return r.get(g)}function p(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function W1(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),e.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=h[m];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function X1(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function q1(n,t,e){let i=new WeakMap,s=new Fe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let O=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let v=a.attributes.position.count*b,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*E*4*d),x=new Ro(T,v,E,d);x.type=Zn,x.needsUpdate=!0;let M=b*4;for(let C=0;C<d;C++){let U=m[C],z=f[C],X=_[C],L=v*E*4*C;for(let G=0;G<U.count;G++){let $=G*M;p===!0&&(s.fromBufferAttribute(U,G),T[L+$+0]=s.x,T[L+$+1]=s.y,T[L+$+2]=s.z,T[L+$+3]=0),g===!0&&(s.fromBufferAttribute(z,G),T[L+$+4]=s.x,T[L+$+5]=s.y,T[L+$+6]=s.z,T[L+$+7]=0),y===!0&&(s.fromBufferAttribute(X,G),T[L+$+8]=s.x,T[L+$+9]=s.y,T[L+$+10]=s.z,T[L+$+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new Kt(v,E)},i.set(a,h),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Y1(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Z1={[ph]:"LINEAR_TONE_MAPPING",[mh]:"REINHARD_TONE_MAPPING",[gh]:"CINEON_TONE_MAPPING",[xh]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[_h]:"CUSTOM_TONE_MAPPING"};function J1(n,t,e,i,s,r){let o=new On(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new vn;u.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ve([0,2,0,0,2,0],2));let d=new bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Bt(u,d),p=new Gs(-1,1,1,-1,0,1),g=null,y=null,m=!1,f,_=null,b=[],v=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),l!==null&&l.setSize(E,T);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(E,T)}},this.setEffects=function(E){b=E,v=b.length>0&&b[0].isRenderPass===!0;let T=o.width,x=o.height;b.length>0&&a===null&&(a=new On(T,x,{type:li,depthBuffer:!1,stencilBuffer:!1}),l=new On(T,x,{type:li,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(O=>O.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Gi(T,x),r===!0&&(c.format=Hi,c.type=Xs)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let O=0;O<b.length;O++){let C=b[O];C.setSize&&C.setSize(T,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,T){if(m||E.toneMapping===Si&&b.length===0)return!1;if(_=T,T!==null){let x=T.width,M=T.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return v===!1&&E.setRenderTarget(o),f=E.toneMapping,E.toneMapping=Si,!0},this.hasRenderPass=function(){return v},this.end=function(E,T){E.toneMapping=f,m=!0;let x=o,M=a;for(let O=0;O<b.length;O++){let C=b[O];C.enabled!==!1&&(C.render(E,M,x,T),C.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(g!==E.outputColorSpace||y!==E.toneMapping){g=E.outputColorSpace,y=E.toneMapping,d.defines={},he.getTransfer(g)===we&&(d.defines.SRGB_TRANSFER="");let O=Z1[y];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(h,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var vm=new Tn,bm=new Gi(1,1),Sm=new Oo(1),Mm=new Ro,wm=new yl,Am=new Uo,Qp=[],tm=[],em=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function qr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Qp[s];if(r===void 0&&(r=new Float32Array(s),Qp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Rc(n,t){let e=tm[t];e===void 0&&(e=new Int32Array(t),tm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function K1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function j1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function Q1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function tb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;im.set(i),n.uniformMatrix2fv(this.addr,!1,im),Qe(e,i)}}function eb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;nm.set(i),n.uniformMatrix3fv(this.addr,!1,nm),Qe(e,i)}}function nb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;em.set(i),n.uniformMatrix4fv(this.addr,!1,em),Qe(e,i)}}function ib(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function rb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function ob(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function ab(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function cb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function ub(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function Ic(n){return n.version===0&&(n.compareFunction=Ih,n.needsUpdate=!0),n}function hb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ic(bm):r=vm,e.setTexture2D(t||r,s)}function db(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||wm,s)}function fb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ic(Sm):r=Am,e.setTextureCube(t||r,s)}function pb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Mm,s)}function mb(n){switch(n){case 5126:return K1;case 35664:return $1;case 35665:return j1;case 35666:return Q1;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(n,t){n.uniform1fv(this.addr,t)}function xb(n,t){let e=qr(t,this.size,2);n.uniform2fv(this.addr,e)}function _b(n,t){let e=qr(t,this.size,3);n.uniform3fv(this.addr,e)}function yb(n,t){let e=qr(t,this.size,4);n.uniform4fv(this.addr,e)}function vb(n,t){let e=qr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bb(n,t){let e=qr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sb(n,t){let e=qr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Mb(n,t){n.uniform1iv(this.addr,t)}function wb(n,t){n.uniform2iv(this.addr,t)}function Ab(n,t){n.uniform3iv(this.addr,t)}function Tb(n,t){n.uniform4iv(this.addr,t)}function Eb(n,t){n.uniform1uiv(this.addr,t)}function Cb(n,t){n.uniform2uiv(this.addr,t)}function Rb(n,t){n.uniform3uiv(this.addr,t)}function Ib(n,t){n.uniform4uiv(this.addr,t)}function Lb(n,t,e){let i=this.cache,s=t.length,r=Rc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ic(bm):o=vm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Pb(n,t,e){let i=this.cache,s=t.length,r=Rc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wm,r[o])}function Db(n,t,e){let i=this.cache,s=t.length,r=Rc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ic(Sm):o=Am;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Nb(n,t,e){let i=this.cache,s=t.length,r=Rc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mm,r[o])}function Ub(n){switch(n){case 5126:return gb;case 35664:return xb;case 35665:return _b;case 35666:return yb;case 35674:return vb;case 35675:return bb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return wb;case 35668:case 35672:return Ab;case 35669:case 35673:return Tb;case 5125:return Eb;case 36294:return Cb;case 36295:return Rb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Nb}}var Yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mb(e.type)}},Zh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ub(e.type)}},Jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Xh=/(\w+)(\])?(\[|\.)?/g;function sm(n,t){n.seq.push(t),n.map[t.id]=t}function Ob(n,t,e){let i=n.name,s=i.length;for(Xh.lastIndex=0;;){let r=Xh.exec(i),o=Xh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sm(e,c===void 0?new Yh(a,n,t):new Zh(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Jh(a),sm(e,d)),e=d}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ob(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function rm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Fb=37297,Bb=0;function kb(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var om=new Yt;function zb(n){he._getMatrix(om,he.workingColorSpace,n);let t=`mat3( ${om.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case Eo:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function am(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+kb(n.getShaderSource(t),a)}else return r}function Gb(n,t){let e=zb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Vb={[ph]:"Linear",[mh]:"Reinhard",[gh]:"Cineon",[xh]:"ACESFilmic",[yh]:"AgX",[vh]:"Neutral",[_h]:"Custom"};function Hb(n,t){let e=Vb[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tc=new V;function Wb(){he.getLuminanceCoefficients(Tc);let n=Tc.x.toFixed(4),t=Tc.y.toFixed(4),e=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function qb(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Yb(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function sa(n){return n!==""}function lm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(n){return n.replace(Zb,Jb)}function Jb(n,t){let e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Kh(e)}var Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(n){return n.replace(Kb,$b)}function $b(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var jb={[Zo]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function Qb(n){return jb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tS={[Gr]:"ENVMAP_MODE_REFRACTION"};function eS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nS={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[Ep]:"ENVMAP_BLENDING_MIX",[Cp]:"ENVMAP_BLENDING_ADD"};function iS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":nS[n.combine]||"ENVMAP_BLENDING_NONE"}function sS(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Qb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=eS(e),d=iS(e),h=Xb(e),p=qb(r),g=s.createProgram(),y,m,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(sa).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(sa).join(`
`),m.length>0&&(m+=`
`)):(y=[hm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),m=[hm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?re.tonemapping_pars_fragment:"",e.toneMapping!==Si?Hb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Gb("linearToOutputTexel",e.outputColorSpace),Wb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),o=Kh(o),o=lm(o,e),o=cm(o,e),a=Kh(a),a=lm(a,e),a=cm(a,e),o=um(o),a=um(a),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=f+y+o,b=f+m+a,v=rm(s,s.VERTEX_SHADER,_),E=rm(s,s.FRAGMENT_SHADER,b);s.attachShader(g,v),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(v)||"",X=s.getShaderInfoLog(E)||"",L=U.trim(),G=z.trim(),$=X.trim(),Y=!0,A=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,v,E);else{let R=am(s,v,"vertex"),D=am(s,E,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+R+`
`+D)}else L!==""?Gt("WebGLProgram: Program Info Log:",L):(G===""||$==="")&&(A=!1);A&&(C.diagnostics={runnable:Y,programLog:L,vertexShader:{log:G,prefix:y},fragmentShader:{log:$,prefix:m}})}s.deleteShader(v),s.deleteShader(E),x=new Xr(s,g),M=Yb(s,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,Fb)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=E,this}var rS=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new jh(t),e.set(t,i)),i}},jh=class{constructor(t){this.id=rS++,this.code=t,this.usedTimes=0}};function oS(n){return n===ys||n===ta||n===ea}function aS(n,t,e,i,s,r){let o=new Dr,a=new $h,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,M,O,C,U,z){let X=C.fog,L=U.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||G,$),A=h[x.type],R=i.precision;x.precision!==null&&(R=i.getMaxPrecision(x.precision),R!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",R,"instead."));let D=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,H=D!==void 0?D.length:0,tt=0;L.morphAttributes.position!==void 0&&(tt=1),L.morphAttributes.normal!==void 0&&(tt=2),L.morphAttributes.color!==void 0&&(tt=3);let ft,W,ot,nt;if(A){let At=wi[A];ft=At.vertexShader,W=At.fragmentShader}else{ft=x.vertexShader,W=x.fragmentShader;let At=a.getVertexShaderStage(x),Te=a.getFragmentShaderStage(x);a.update(x,At,Te),ot=At.id,nt=Te.id}let _t=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Ht=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,kt=!!x.map,Jt=!!x.matcap,me=!!Y,ee=me&&Y.isPMREMTexture===!0,Be=!!x.aoMap,ke=!!x.lightMap,We=!!x.bumpMap&&x.wireframe===!1,k=!!x.normalMap,lt=!!x.displacementMap,ct=!!x.emissiveMap,Lt=!!x.metalnessMap,ie=!!x.roughnessMap,jt=x.anisotropy>0,F=x.clearcoat>0,oe=x.diffuseRoughness>0,Wt=x.dispersion>0,ae=x.retroreflectivity>0,pt=x.iridescence>0,Ae=x.sheen>0,Ot=x.transmission>0,zt=jt&&!!x.anisotropyMap,I=F&&!!x.clearcoatMap,S=F&&!!x.clearcoatNormalMap,Z=F&&!!x.clearcoatRoughnessMap,ut=oe&&!!x.diffuseRoughnessMap,rt=pt&&!!x.iridescenceMap,gt=pt&&!!x.iridescenceThicknessMap,Mt=Ae&&!!x.sheenColorMap,et=Ae&&!!x.sheenRoughnessMap,it=!!x.specularMap,vt=!!x.specularColorMap,N=!!x.specularIntensityMap,st=Ot&&!!x.transmissionMap,Q=Ot&&!!x.thicknessMap,bt=!!x.gradientMap,mt=!!x.alphaMap,xt=x.alphaTest>0,Ut=!!x.alphaHash,se=!!x.extensions,ht=Si;x.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ht=n.toneMapping);let Ft=ee?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,ne={shaderID:A,shaderType:x.type,shaderName:x.name,vertexShader:ft,fragmentShader:W,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:R,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&U.instanceColor!==null,instancingMorph:Ht&&U.morphTexture!==null,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:Jt,envMap:me,envMapMode:me&&Y.mapping,envMapPMREM:ee,envMapMaxLod:ee?Ft.length-1:null,envMapSize:ee?Ft[0].width:null,aoMap:Be,lightMap:ke,bumpMap:We,normalMap:k,displacementMap:lt,emissiveMap:ct,normalMapObjectSpace:k&&x.normalMapType===Lp,normalMapTangentSpace:k&&x.normalMapType===wc,packedNormalMap:k&&x.normalMapType===wc&&oS(x.normalMap.format),metalnessMap:Lt,roughnessMap:ie,anisotropy:jt,anisotropyMap:zt,clearcoat:F,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:Z,diffuseRoughness:oe,diffuseRoughnessMap:ut,dispersion:Wt,retroreflection:ae,iridescence:pt,iridescenceMap:rt,iridescenceThicknessMap:gt,sheen:Ae,sheenColorMap:Mt,sheenRoughnessMap:et,specularMap:it,specularColorMap:vt,specularIntensityMap:N,transmission:Ot,transmissionMap:st,thicknessMap:Q,gradientMap:bt,opaque:x.transparent===!1&&x.blending===zr&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:xt,alphaHash:Ut,combine:x.combine,mapUv:kt&&p(x.map.channel),aoMapUv:Be&&p(x.aoMap.channel),lightMapUv:ke&&p(x.lightMap.channel),bumpMapUv:We&&p(x.bumpMap.channel),normalMapUv:k&&p(x.normalMap.channel),displacementMapUv:lt&&p(x.displacementMap.channel),emissiveMapUv:ct&&p(x.emissiveMap.channel),metalnessMapUv:Lt&&p(x.metalnessMap.channel),roughnessMapUv:ie&&p(x.roughnessMap.channel),anisotropyMapUv:zt&&p(x.anisotropyMap.channel),clearcoatMapUv:I&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:et&&p(x.sheenRoughnessMap.channel),specularMapUv:it&&p(x.specularMap.channel),specularColorMapUv:vt&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:st&&p(x.transmissionMap.channel),thicknessMapUv:Q&&p(x.thicknessMap.channel),alphaMapUv:mt&&p(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(k||jt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(kt||mt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&k===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:tt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===we,decodeVideoTextureEmissive:ct&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===we,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||Oe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function y(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)M.push(O),M.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(m(M,x),f(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function f(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let M=h[x.type],O;if(M){let C=wi[M];O=qp.clone(C.uniforms)}else O=x.uniforms;return O}function b(x,M){let O=u.get(M);return O!==void 0?++O.usedTimes:(O=new sS(n,M,x,s),c.push(O),u.set(M,O)),O}function v(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:_,acquireProgram:b,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:T}}function lS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function dm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function fm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,y,m,f){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},n[t]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=g,_.materialVariant=o(h),_.groupOrder=y,_.renderOrder=h.renderOrder,_.z=m,_.group=f),t++,_}function l(h,p,g,y,m,f,_){_.reversedDepth===!0&&(m=-m);let b=a(h,p,g,y,m,f);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function c(h,p,g,y,m,f){let _=a(h,p,g,y,m,f);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function u(h,p){e.length>1&&e.sort(h||cS),i.length>1&&i.sort(p||dm),s.length>1&&s.sort(p||dm)}function d(){for(let h=t,p=n.length;h<p;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function uS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new fm,n.set(i,[o])):s>=r.length?(o=new fm,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function hS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new qt};break;case"SpotLight":e={position:new V,direction:new V,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function dS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var fS=0;function pS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mS(n){let t=new hS,e=dS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new _e,o=new _e;function a(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,_=0,b=0,v=0,E=0,T=0,x=0,M=0,O=0,C=0;c.sort(pS);for(let z=0,X=c.length;z<X;z++){let L=c[z],G=L.color,$=L.intensity,Y=L.distance,A=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ys?A=L.shadow.map.texture:A=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=G.r*$,d+=G.g*$,h+=G.b*$;else if(L.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(L.sh.coefficients[R],$);C++}else if(L.isSunLight){let R=t.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let D=L.shadow,H=e.get(L);H.shadowIntensity=D.intensity,H.shadowBias=D.bias,H.shadowNormalBias=D.normalBias,H.shadowRadius=D.radius,H.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),i.sunShadow[g]=H,i.sunShadowMap[g]=A;let tt=D.getViewportCount();for(let ft=0;ft<tt;ft++)i.sunShadowMatrix[y+ft]=D.getMatrix(ft),i.sunShadowCascade[y+ft]=D._cascadeData[ft];y+=tt,g++}i.sun[p]=R,p++}else if(L.isDirectionalLight){let R=t.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let D=L.shadow,H=e.get(L);H.shadowIntensity=D.intensity,H.shadowBias=D.bias,H.shadowNormalBias=D.normalBias,H.shadowRadius=D.radius,H.shadowMapSize=D.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=A,i.directionalShadowMatrix[m]=L.shadow.matrix,E++}i.directional[m]=R,m++}else if(L.isSpotLight){let R=t.get(L);R.position.setFromMatrixPosition(L.matrixWorld),R.color.copy(G).multiplyScalar($),R.distance=Y,R.coneCos=Math.cos(L.angle),R.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),R.decay=L.decay,i.spot[_]=R;let D=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,D.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[_]=D.matrix,L.castShadow){let H=e.get(L);H.shadowIntensity=D.intensity,H.shadowBias=D.bias,H.shadowNormalBias=D.normalBias,H.shadowRadius=D.radius,H.shadowMapSize=D.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=A,x++}_++}else if(L.isRectAreaLight){let R=t.get(L);R.color.copy(G).multiplyScalar($),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),i.rectArea[b]=R,b++}else if(L.isPointLight){let R=t.get(L);if(R.color.copy(L.color).multiplyScalar(L.intensity),R.distance=L.distance,R.decay=L.decay,L.castShadow){let D=L.shadow,H=e.get(L);H.shadowIntensity=D.intensity,H.shadowBias=D.bias,H.shadowNormalBias=D.normalBias,H.shadowRadius=D.radius,H.shadowMapSize=D.mapSize,H.shadowCameraNear=D.camera.near,H.shadowCameraFar=D.camera.far,i.pointShadow[f]=H,i.pointShadowMap[f]=A,i.pointShadowMatrix[f]=L.shadow.matrix,T++}i.point[f]=R,f++}else if(L.isHemisphereLight){let R=t.get(L);R.skyColor.copy(L.color).multiplyScalar($),R.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[v]=R,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==_||U.rectAreaLength!==b||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==E||U.numPointShadows!==T||U.numSpotShadows!==x||U.numSpotMaps!==M||U.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=f,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-O,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=C,U.sunLength=p,U.directionalLength=m,U.pointLength=f,U.spotLength=_,U.rectAreaLength=b,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=E,U.numPointShadows=T,U.numSpotShadows=x,U.numSpotMaps=M,U.numLightProbes=C,i.version=fS++)}function l(c,u){let d=0,h=0,p=0,g=0,y=0,m=0,f=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let v=c[_];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(v.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function pm(n){let t=new mS(n),e=[],i=[],s=[];function r(d){u.camera=d,e.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function gS(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new pm(n),t.set(s,[a])):r>=o.length?(a=new pm(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var xS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
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
}`,yS=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],vS=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],mm=new _e,ia=new V,qh=new V;function bS(n,t,e){let i=new fs,s=new Kt,r=new Kt,o=new Fe,a=new Sl,l=new Ml,c={},u=e.maxTextureSize,d={[_s]:En,[En]:_s,[on]:on},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:xS,fragmentShader:_S}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new vn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let f=this.type;this.render=function(T,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===lp&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zo);let O=n.getRenderTarget(),C=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Vs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=f!==this.type;X&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=T.length;L<G;L++){let $=T[L],Y=$.shadow;if(Y===void 0){Gt("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let A=Y.getFrameExtents();s.multiply(A),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/A.x),s.x=r.x*A.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/A.y),s.y=r.y*A.y,Y.mapSize.y=r.y));let R=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=R,Y.map===null||X===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===kr){if($.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new On(s.x,s.y,{format:ys,type:li,minFilter:An,magFilter:An,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new Gi(s.x,s.y,Zn),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=ki,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=sn,Y.map.depthTexture.magFilter=sn}else $.isPointLight?(Y.map=new ra(s.x),Y.map.depthTexture=new Oo(s.x,ai)):(Y.map=new On(s.x,s.y),Y.map.depthTexture=new Gi(s.x,s.y,ai)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=ki,this.type===Zo?(Y.map.depthTexture.compareFunction=R?Rh:Ch,Y.map.depthTexture.minFilter=An,Y.map.depthTexture.magFilter=An):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=sn,Y.map.depthTexture.magFilter=sn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let D=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();$.isPointLight!==!0&&Y.updateMatrices($,M);let H=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:M.layers;for(let tt=0;tt<D;tt++){let ft=Y.getCamera(tt);if($.isPointLight){let W=Y.camera,ot=Y.matrix,nt=$.distance||W.far;nt!==W.far&&(W.far=nt,W.updateProjectionMatrix()),ia.setFromMatrixPosition($.matrixWorld),W.position.copy(ia),qh.copy(W.position),qh.add(yS[tt]),W.up.copy(vS[tt]),W.lookAt(qh),W.updateMatrixWorld(),ot.makeTranslation(-ia.x,-ia.y,-ia.z),mm.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(mm,W.coordinateSystem,W.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(Y.map),n.clear());let W=Y.getViewport(tt);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(o)}i=Y.getFrustum(tt),v(x,M,ft,$,H,this.type)}Y.isPointLightShadow!==!0&&this.type===kr&&_(Y,M),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(O,C,U)};function _(T,x){let M=t.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new On(s.x,s.y,{format:ys,type:li}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,M,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,M,p,y,null)}function b(T,x,M,O){let C=null,U=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)C=U;else if(C=M.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=C.uuid,X=x.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let G=L[X];G===void 0&&(G=C.clone(),L[X]=G,x.addEventListener("dispose",E)),C=G}if(C.visible=x.visible,C.wireframe=x.wireframe,O===kr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=n.properties.get(C);z.light=M}return C}function v(T,x,M,O,C,U){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===kr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let L=t.update(T),G=T.material;if(Array.isArray(G)){let $=L.groups;for(let Y=0,A=$.length;Y<A;Y++){let R=$[Y],D=G[R.materialIndex];if(D&&D.visible){let H=b(T,D,O,U);T.onBeforeShadow(n,T,x,M,L,H,R),n.renderBufferDirect(M,null,L,H,T,R),T.onAfterShadow(n,T,x,M,L,H,R)}}}else if(G.visible){let $=b(T,G,O,U);T.onBeforeShadow(n,T,x,M,L,$,null),n.renderBufferDirect(M,null,L,$,T,null),T.onAfterShadow(n,T,x,M,L,$,null)}}let X=T.children;for(let L=0,G=X.length;L<G;L++)v(X[L],x,M,O,C,U)}function E(T){T.target.removeEventListener("dispose",E);for(let M in c){let O=c[M],C=T.target.uuid;C in O&&(O[C].dispose(),delete O[C])}}}function SS(n,t){function e(){let N=!1,st=new Fe,Q=null,bt=new Fe(0,0,0,0);return{setMask:function(mt){Q!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),Q=mt)},setLocked:function(mt){N=mt},setClear:function(mt,xt,Ut,se,ht){ht===!0&&(mt*=se,xt*=se,Ut*=se),st.set(mt,xt,Ut,se),bt.equals(st)===!1&&(n.clearColor(mt,xt,Ut,se),bt.copy(st))},reset:function(){N=!1,Q=null,bt.set(-1,0,0,0)}}}function i(){let N=!1,st=!1,Q=null,bt=null,mt=null;return{setReversed:function(xt){if(st!==xt){let Ut=t.get("EXT_clip_control");xt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),st=xt;let se=mt;mt=null,this.setClear(se)}},getReversed:function(){return st},setTest:function(xt){xt?yt(n.DEPTH_TEST):Ht(n.DEPTH_TEST)},setMask:function(xt){Q!==xt&&!N&&(n.depthMask(xt),Q=xt)},setFunc:function(xt){if(st&&(xt=Vp[xt]),bt!==xt){switch(xt){case al:n.depthFunc(n.NEVER);break;case ll:n.depthFunc(n.ALWAYS);break;case cl:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=xt}},setLocked:function(xt){N=xt},setClear:function(xt){mt!==xt&&(mt=xt,st&&(xt=1-xt),n.clearDepth(xt))},reset:function(){N=!1,Q=null,bt=null,mt=null,st=!1}}}function s(){let N=!1,st=null,Q=null,bt=null,mt=null,xt=null,Ut=null,se=null,ht=null;return{setTest:function(Ft){N||(Ft?yt(n.STENCIL_TEST):Ht(n.STENCIL_TEST))},setMask:function(Ft){st!==Ft&&!N&&(n.stencilMask(Ft),st=Ft)},setFunc:function(Ft,ne,At){(Q!==Ft||bt!==ne||mt!==At)&&(n.stencilFunc(Ft,ne,At),Q=Ft,bt=ne,mt=At)},setOp:function(Ft,ne,At){(xt!==Ft||Ut!==ne||se!==At)&&(n.stencilOp(Ft,ne,At),xt=Ft,Ut=ne,se=At)},setLocked:function(Ft){N=Ft},setClear:function(Ft){ht!==Ft&&(n.clearStencil(Ft),ht=Ft)},reset:function(){N=!1,st=null,Q=null,bt=null,mt=null,xt=null,Ut=null,se=null,ht=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,g=[],y=null,m=!1,f=null,_=null,b=null,v=null,E=null,T=null,x=null,M=new qt(0,0,0),O=0,C=!1,U=null,z=null,X=null,L=null,G=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,A=0,R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(R)[1]),Y=A>=1):R.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Y=A>=2);let D=null,H={},tt=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),W=new Fe().fromArray(tt),ot=new Fe().fromArray(ft);function nt(N,st,Q,bt){let mt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(N,xt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<Q;Ut++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(st+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return xt}let _t={};_t[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(n.DEPTH_TEST),o.setFunc(Cr),We(!1),k(ch),yt(n.CULL_FACE),Be(Vs);function yt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ht(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Oe(N,st){return h[N]!==st?(n.bindFramebuffer(N,st),h[N]=st,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=st),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=st),!0):!1}function kt(N,st){let Q=g,bt=!1;if(N){Q=p.get(st),Q===void 0&&(Q=[],p.set(st,Q));let mt=N.textures;if(Q.length!==mt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Ut=mt.length;xt<Ut;xt++)Q[xt]=n.COLOR_ATTACHMENT0+xt;Q.length=mt.length,bt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,bt=!0);bt&&n.drawBuffers(Q)}function Jt(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let me={[Hs]:n.FUNC_ADD,[up]:n.FUNC_SUBTRACT,[hp]:n.FUNC_REVERSE_SUBTRACT};me[dp]=n.MIN,me[fp]=n.MAX;let ee={[pp]:n.ZERO,[mp]:n.ONE,[gp]:n.SRC_COLOR,[dh]:n.SRC_ALPHA,[Sp]:n.SRC_ALPHA_SATURATE,[vp]:n.DST_COLOR,[_p]:n.DST_ALPHA,[xp]:n.ONE_MINUS_SRC_COLOR,[fh]:n.ONE_MINUS_SRC_ALPHA,[bp]:n.ONE_MINUS_DST_COLOR,[yp]:n.ONE_MINUS_DST_ALPHA,[Mp]:n.CONSTANT_COLOR,[wp]:n.ONE_MINUS_CONSTANT_COLOR,[Ap]:n.CONSTANT_ALPHA,[Tp]:n.ONE_MINUS_CONSTANT_ALPHA};function Be(N,st,Q,bt,mt,xt,Ut,se,ht,Ft){if(N===Vs){m===!0&&(Ht(n.BLEND),m=!1);return}if(m===!1&&(yt(n.BLEND),m=!0),N!==cp){if(N!==f||Ft!==C){if((_!==Hs||E!==Hs)&&(n.blendEquation(n.FUNC_ADD),_=Hs,E=Hs),Ft)switch(N){case zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.ONE,n.ONE);break;case uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xt("WebGLState: Invalid blending: ",N);break}else switch(N){case zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uh:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hh:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",N);break}b=null,v=null,T=null,x=null,M.set(0,0,0),O=0,f=N,C=Ft}return}mt=mt||st,xt=xt||Q,Ut=Ut||bt,(st!==_||mt!==E)&&(n.blendEquationSeparate(me[st],me[mt]),_=st,E=mt),(Q!==b||bt!==v||xt!==T||Ut!==x)&&(n.blendFuncSeparate(ee[Q],ee[bt],ee[xt],ee[Ut]),b=Q,v=bt,T=xt,x=Ut),(se.equals(M)===!1||ht!==O)&&(n.blendColor(se.r,se.g,se.b,ht),M.copy(se),O=ht),f=N,C=!1}function ke(N,st){N.side===on?Ht(n.CULL_FACE):yt(n.CULL_FACE);let Q=N.side===En;st&&(Q=!Q),We(Q),N.blending===zr&&N.transparent===!1?Be(Vs):Be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let bt=N.stencilWrite;a.setTest(bt),bt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):Ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){U!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),U=N)}function k(N){N!==op?(yt(n.CULL_FACE),N!==z&&(N===ch?n.cullFace(n.BACK):N===ap?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ht(n.CULL_FACE),z=N}function lt(N){N!==X&&(Y&&n.lineWidth(N),X=N)}function ct(N,st,Q){N?(yt(n.POLYGON_OFFSET_FILL),(L!==st||G!==Q)&&(L=st,G=Q,o.getReversed()&&(st=-st,Q=-Q),n.polygonOffset(st,Q))):Ht(n.POLYGON_OFFSET_FILL)}function Lt(N){N?yt(n.SCISSOR_TEST):Ht(n.SCISSOR_TEST)}function ie(N){N===void 0&&(N=n.TEXTURE0+$-1),D!==N&&(n.activeTexture(N),D=N)}function jt(N,st,Q){Q===void 0&&(D===null?Q=n.TEXTURE0+$-1:Q=D);let bt=H[Q];bt===void 0&&(bt={type:void 0,texture:void 0},H[Q]=bt),(bt.type!==N||bt.texture!==st)&&(D!==Q&&(n.activeTexture(Q),D=Q),n.bindTexture(N,st||_t[N]),bt.type=N,bt.texture=st)}function F(){let N=H[D];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Wt(){try{n.compressedTexImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ae(){try{n.texSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function pt(){try{n.texSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Ae(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Ot(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function zt(){try{n.texStorage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function I(){try{n.texStorage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function S(){try{n.texImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Z(){try{n.texImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ut(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function rt(N,st){d[N]!==st&&(n.pixelStorei(N,st),d[N]=st)}function gt(N){W.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),W.copy(N))}function Mt(N){ot.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ot.copy(N))}function et(N,st){let Q=c.get(st);Q===void 0&&(Q=new WeakMap,c.set(st,Q));let bt=Q.get(N);bt===void 0&&(bt=n.getUniformBlockIndex(st,N.name),n.uniformBlockBinding(st,bt,bt),Q.set(N,bt))}function it(N,st,Q){let mt=c.get(st).get(N);l[mt]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,mt,Q),l[mt]=Q)}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},D=null,H={},h={},l={},p=new WeakMap,g=[],y=null,m=!1,f=null,_=null,b=null,v=null,E=null,T=null,x=null,M=new qt(0,0,0),O=0,C=!1,U=null,z=null,X=null,L=null,G=null,W.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:Ht,bindFramebuffer:Oe,drawBuffers:kt,useProgram:Jt,setBlending:Be,setMaterial:ke,setFlipSided:We,setCullFace:k,setLineWidth:lt,setPolygonOffset:ct,setScissorTest:Lt,activeTexture:ie,bindTexture:jt,unbindTexture:F,compressedTexImage2D:oe,compressedTexImage3D:Wt,texImage2D:S,texImage3D:Z,pixelStorei:rt,getParameter:ut,updateUBOMapping:et,uniformBlockBinding:it,texStorage2D:zt,texStorage3D:I,texSubImage2D:ae,texSubImage3D:pt,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ot,scissor:gt,viewport:Mt,reset:vt}}function MS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,u=new WeakMap,d=new Set,h,p=new WeakMap,g=new Set,y=new FinalizationRegistry(I=>g.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(I,S){return m?new OffscreenCanvas(I,S):Co("canvas")}function _(I,S,Z){let ut=1,rt=zt(I);if((rt.width>Z||rt.height>Z)&&(ut=Z/Math.max(rt.width,rt.height)),ut<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let gt=Math.floor(ut*rt.width),Mt=Math.floor(ut*rt.height);h===void 0&&(h=f(gt,Mt));let et=S?f(gt,Mt):h;return et.width=gt,et.height=Mt,et.getContext("2d").drawImage(I,0,0,gt,Mt),Gt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+gt+"x"+Mt+")."),et}else return"data"in I&&Gt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),I;return I}function b(I){return I.generateMipmaps}function v(I){n.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(I,S,Z,ut,rt,gt=!1){if(I!==null){if(n[I]!==void 0)return n[I];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Mt;ut&&(Mt=t.get("EXT_texture_norm16"),Mt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=S;if(S===n.RED&&(Z===n.FLOAT&&(et=n.R32F),Z===n.HALF_FLOAT&&(et=n.R16F),Z===n.UNSIGNED_BYTE&&(et=n.R8),Z===n.UNSIGNED_SHORT&&Mt&&(et=Mt.R16_EXT),Z===n.SHORT&&Mt&&(et=Mt.R16_SNORM_EXT)),S===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(et=n.R8UI),Z===n.UNSIGNED_SHORT&&(et=n.R16UI),Z===n.UNSIGNED_INT&&(et=n.R32UI),Z===n.BYTE&&(et=n.R8I),Z===n.SHORT&&(et=n.R16I),Z===n.INT&&(et=n.R32I)),S===n.RG&&(Z===n.FLOAT&&(et=n.RG32F),Z===n.HALF_FLOAT&&(et=n.RG16F),Z===n.UNSIGNED_BYTE&&(et=n.RG8),Z===n.UNSIGNED_SHORT&&Mt&&(et=Mt.RG16_EXT),Z===n.SHORT&&Mt&&(et=Mt.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(et=n.RG8UI),Z===n.UNSIGNED_SHORT&&(et=n.RG16UI),Z===n.UNSIGNED_INT&&(et=n.RG32UI),Z===n.BYTE&&(et=n.RG8I),Z===n.SHORT&&(et=n.RG16I),Z===n.INT&&(et=n.RG32I)),S===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(et=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(et=n.RGB16UI),Z===n.UNSIGNED_INT&&(et=n.RGB32UI),Z===n.BYTE&&(et=n.RGB8I),Z===n.SHORT&&(et=n.RGB16I),Z===n.INT&&(et=n.RGB32I)),S===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),Z===n.UNSIGNED_INT&&(et=n.RGBA32UI),Z===n.BYTE&&(et=n.RGBA8I),Z===n.SHORT&&(et=n.RGBA16I),Z===n.INT&&(et=n.RGBA32I)),S===n.RGB&&(Z===n.UNSIGNED_SHORT&&Mt&&(et=Mt.RGB16_EXT),Z===n.SHORT&&Mt&&(et=Mt.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),S===n.RGBA){let it=gt?Eo:he.getTransfer(rt);Z===n.FLOAT&&(et=n.RGBA32F),Z===n.HALF_FLOAT&&(et=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(et=it===we?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Mt&&(et=Mt.RGBA16_EXT),Z===n.SHORT&&Mt&&(et=Mt.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(I,S){let Z;return I?S===null||S===ai||S===Xs?Z=n.DEPTH24_STENCIL8:S===Zn?Z=n.DEPTH32F_STENCIL8:S===Vr&&(Z=n.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ai||S===Xs?Z=n.DEPTH_COMPONENT24:S===Zn?Z=n.DEPTH_COMPONENT32F:S===Vr&&(Z=n.DEPTH_COMPONENT16),Z}function M(I,S){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==sn&&I.minFilter!==An?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function O(I){let S=new WeakRef(I);i.get(I).__ref=S,g.add(S),y.register(I,S,S)}function C(I){let S=i.get(I).__ref;S!==void 0&&(g.delete(S),y.unregister(S))}function U(I){X(I.target)}function z(I){L(I.target)}function X(I){I.removeEventListener("dispose",U),C(I),$(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&d.delete(I)}function L(I){I.removeEventListener("dispose",z),C(I),A(I)}function G(){for(let I of g){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):X(S))}g.clear(),d.clear()}function $(I){let S=i.get(I);if(S.__webglInit===void 0)return;let Z=I.source,ut=p.get(Z);if(ut){let rt=ut[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&Y(I),Object.keys(ut).length===0&&p.delete(Z)}i.remove(I)}function Y(I){let S=i.get(I);n.deleteTexture(S.__webglTexture);let Z=I.source,ut=p.get(Z);delete ut[S.__cacheKey],o.memory.textures--}function A(I){let S=i.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let Z=I.depthTexture;if(Z&&Z.renderTarget===I&&X(Z),I.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let gt=0;gt<S.__webglFramebuffer[rt].length;gt++)n.deleteFramebuffer(S.__webglFramebuffer[rt][gt]);else n.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)n.deleteFramebuffer(S.__webglFramebuffer[rt]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ut=I.textures;for(let rt=0,gt=ut.length;rt<gt;rt++){let Mt=i.get(ut[rt]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(ut[rt])}i.remove(I)}let R=0;function D(){R=0}function H(){return R}function tt(I){R=I}function ft(){let I=R;return I>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function W(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ot(I,S){let Z=i.get(I);if(I.isVideoTexture&&Ae(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){let ut=I.image;if(ut===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Z,I,S);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+S)}function nt(I,S){let Z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){ke(Z,I,S);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+S)}function _t(I,S){let Z=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){ke(Z,I,S);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+S)}function yt(I,S){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){We(Z,I,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+S)}let Ht={[pl]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[ml]:n.MIRRORED_REPEAT},Oe={[sn]:n.NEAREST,[Rp]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[zl]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},kt={[Dp]:n.NEVER,[Ih]:n.ALWAYS,[Np]:n.LESS,[Ch]:n.LEQUAL,[Up]:n.EQUAL,[Rh]:n.GEQUAL,[Op]:n.GREATER,[Fp]:n.NOTEQUAL};function Jt(I,S){if(S.type===Zn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===An||S.magFilter===zl||S.magFilter===Jo||S.magFilter===oi||S.minFilter===An||S.minFilter===zl||S.minFilter===Jo||S.minFilter===oi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Ht[S.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Ht[S.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Ht[S.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Oe[S.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Oe[S.minFilter]),S.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,kt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==Jo&&S.minFilter!==oi||S.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function me(I,S){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",U),O(S));let ut=S.source,rt=p.get(ut);rt===void 0&&(rt={},p.set(ut,rt));let gt=W(S);if(gt!==I.__cacheKey){rt[gt]===void 0&&(rt[gt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),rt[gt].usedTimes++;let Mt=rt[I.__cacheKey];Mt!==void 0&&(rt[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&Y(S)),I.__cacheKey=gt,I.__webglTexture=rt[gt].texture}return Z}function ee(I,S,Z){return Math.floor(Math.floor(I/Z)/S)}function Be(I,S,Z,ut){let gt=I.updateRanges;if(gt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,Z,ut,S.data);else{gt.sort((N,st)=>N.start-st.start);let Mt=0;for(let N=1;N<gt.length;N++){let st=gt[Mt],Q=gt[N],bt=st.start+st.count,mt=ee(Q.start,S.width,4),xt=ee(st.start,S.width,4);Q.start<=bt+1&&mt===xt&&ee(Q.start+Q.count-1,S.width,4)===mt?st.count=Math.max(st.count,Q.start+Q.count-st.start):(++Mt,gt[Mt]=Q)}gt.length=Mt+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let N=0,st=gt.length;N<st;N++){let Q=gt[N],bt=Math.floor(Q.start/4),mt=Math.ceil(Q.count/4),xt=bt%S.width,Ut=Math.floor(bt/S.width),se=mt,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ut),e.texSubImage2D(n.TEXTURE_2D,0,xt,Ut,se,ht,Z,ut,S.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function ke(I,S,Z){let ut=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ut=n.TEXTURE_3D);let rt=me(I,S),gt=S.source;e.bindTexture(ut,I.__webglTexture,n.TEXTURE0+Z);let Mt=i.get(gt);if(gt.version!==Mt.__version||rt===!0){if(e.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ht=he.getPrimaries(he.workingColorSpace),Ft=S.colorSpace===Wi?null:he.getPrimaries(S.colorSpace),ne=S.colorSpace===Wi||ht===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let it=_(S.image,!1,s.maxTextureSize);it=Ot(S,it);let vt=r.convert(S.format,S.colorSpace),N=r.convert(S.type),st=T(S.internalFormat,vt,N,S.normalized,S.colorSpace,S.isVideoTexture);Jt(ut,S);let Q,bt=S.mipmaps,mt=S.isVideoTexture!==!0,xt=Mt.__version===void 0||rt===!0,Ut=gt.dataReady,se=M(S,it);if(S.isDepthTexture)st=x(S.format===Hi,S.type),xt&&(mt?e.texStorage2D(n.TEXTURE_2D,1,st,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,st,it.width,it.height,0,vt,N,null));else if(S.isDataTexture)if(bt.length>0){mt&&xt&&e.texStorage2D(n.TEXTURE_2D,se,st,bt[0].width,bt[0].height);for(let ht=0,Ft=bt.length;ht<Ft;ht++)Q=bt[ht],mt?Ut&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Q.width,Q.height,vt,N,Q.data):e.texImage2D(n.TEXTURE_2D,ht,st,Q.width,Q.height,0,vt,N,Q.data);S.generateMipmaps=!1}else mt?(xt&&e.texStorage2D(n.TEXTURE_2D,se,st,it.width,it.height),Ut&&Be(S,it,vt,N)):e.texImage2D(n.TEXTURE_2D,0,st,it.width,it.height,0,vt,N,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){mt&&xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,se,st,bt[0].width,bt[0].height,it.depth);for(let ht=0,Ft=bt.length;ht<Ft;ht++)if(Q=bt[ht],S.format!==ci)if(vt!==null)if(mt){if(Ut)if(S.layerUpdates.size>0){let ne=kh(Q.width,Q.height,S.format,S.type);for(let At of S.layerUpdates){let Te=Q.data.subarray(At*ne/Q.data.BYTES_PER_ELEMENT,(At+1)*ne/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,At,Q.width,Q.height,1,vt,Te)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Q.width,Q.height,it.depth,vt,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,st,Q.width,Q.height,it.depth,0,Q.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Ut&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Q.width,Q.height,it.depth,vt,N,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,st,Q.width,Q.height,it.depth,0,vt,N,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{mt&&xt&&e.texStorage2D(n.TEXTURE_2D,se,st,bt[0].width,bt[0].height);for(let ht=0,Ft=bt.length;ht<Ft;ht++)Q=bt[ht],S.format!==ci?vt!==null?mt?Ut&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Q.width,Q.height,vt,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,st,Q.width,Q.height,0,Q.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Ut&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Q.width,Q.height,vt,N,Q.data):e.texImage2D(n.TEXTURE_2D,ht,st,Q.width,Q.height,0,vt,N,Q.data)}else if(S.isDataArrayTexture)if(mt){if(xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,se,st,it.width,it.height,it.depth),Ut)if(S.layerUpdates.size>0){let ht=kh(it.width,it.height,S.format,S.type);for(let Ft of S.layerUpdates){let ne=it.data.subarray(Ft*ht/it.data.BYTES_PER_ELEMENT,(Ft+1)*ht/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ft,it.width,it.height,1,vt,N,ne)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,N,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,vt,N,it.data);else if(S.isData3DTexture)mt?(xt&&e.texStorage3D(n.TEXTURE_3D,se,st,it.width,it.height,it.depth),Ut&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,N,it.data)):e.texImage3D(n.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,vt,N,it.data);else if(S.isFramebufferTexture){if(xt)if(mt)e.texStorage2D(n.TEXTURE_2D,se,st,it.width,it.height);else{let ht=it.width,Ft=it.height;for(let ne=0;ne<se;ne++)e.texImage2D(n.TEXTURE_2D,ne,st,ht,Ft,0,vt,N,null),ht>>=1,Ft>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),it.parentNode!==ht){ht.appendChild(it),d.add(S),ht.onpaint=Ft=>{let ne=Ft.changedElements;for(let At of d)ne.includes(At.image)&&(At.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let ne=n.RGBA,At=n.RGBA,Te=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ne,At,Te,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(bt.length>0){if(mt&&xt){let ht=zt(bt[0]);e.texStorage2D(n.TEXTURE_2D,se,st,ht.width,ht.height)}for(let ht=0,Ft=bt.length;ht<Ft;ht++)Q=bt[ht],mt?Ut&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,vt,N,Q):e.texImage2D(n.TEXTURE_2D,ht,st,vt,N,Q);S.generateMipmaps=!1}else if(mt){if(xt){let ht=zt(it);e.texStorage2D(n.TEXTURE_2D,se,st,ht.width,ht.height)}Ut&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,N,it)}else e.texImage2D(n.TEXTURE_2D,0,st,vt,N,it);b(S)&&S.mipmapsAutoUpdate===!0&&v(ut),Mt.__version=gt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function We(I,S,Z){if(S.image.length!==6)return;let ut=me(I,S),rt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Z);let gt=i.get(rt);if(rt.version!==gt.__version||ut===!0){e.activeTexture(n.TEXTURE0+Z);let Mt=he.getPrimaries(he.workingColorSpace),et=S.colorSpace===Wi?null:he.getPrimaries(S.colorSpace),it=S.colorSpace===Wi||Mt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,st=[];for(let At=0;At<6;At++)!vt&&!N?st[At]=_(S.image[At],!0,s.maxCubemapSize):st[At]=N?S.image[At].image:S.image[At],st[At]=Ot(S,st[At]);let Q=st[0],bt=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),xt=T(S.internalFormat,bt,mt,S.normalized,S.colorSpace),Ut=S.isVideoTexture!==!0,se=gt.__version===void 0||ut===!0,ht=rt.dataReady,Ft=M(S,Q);Jt(n.TEXTURE_CUBE_MAP,S);let ne;if(S.isDepthTexture){if(xt=x(S.format===Hi,S.type),se)if(Ut)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,xt,Q.width,Q.height);else for(let At=0;At<6;At++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,xt,Q.width,Q.height,0,bt,mt,null)}else if(vt){Ut&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,xt,Q.width,Q.height);for(let At=0;At<6;At++){ne=st[At].mipmaps;for(let Te=0;Te<ne.length;Te++){let tn=ne[Te];S.format!==ci?bt!==null?Ut?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Te,0,0,tn.width,tn.height,bt,tn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Te,xt,tn.width,tn.height,0,tn.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Te,0,0,tn.width,tn.height,bt,mt,tn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Te,xt,tn.width,tn.height,0,bt,mt,tn.data)}}}else{if(ne=S.mipmaps,Ut&&se){ne.length>0&&Ft++;let At=zt(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,xt,At.width,At.height)}for(let At=0;At<6;At++)if(N){Ut?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,st[At].width,st[At].height,bt,mt,st[At].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,xt,st[At].width,st[At].height,0,bt,mt,st[At].data);for(let Te=0;Te<ne.length;Te++){let is=ne[Te].image[At].image;Ut?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Te+1,0,0,is.width,is.height,bt,mt,is.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Te+1,xt,is.width,is.height,0,bt,mt,is.data)}}else{Ut?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,bt,mt,st[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,xt,bt,mt,st[At]);for(let Te=0;Te<ne.length;Te++){let tn=ne[Te];Ut?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Te+1,0,0,bt,mt,tn.image[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Te+1,xt,bt,mt,tn.image[At])}}}b(S)&&S.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),gt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function k(I,S,Z,ut,rt,gt){let Mt=r.convert(Z.format,Z.colorSpace),et=r.convert(Z.type),it=T(Z.internalFormat,Mt,et,Z.normalized,Z.colorSpace),vt=i.get(S),N=i.get(Z);if(N.__renderTarget=S,!vt.__hasExternalTextures){let st=Math.max(1,S.width>>gt),Q=Math.max(1,S.height>>gt);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,gt,it,st,Q,S.depth,0,Mt,et,null):e.texImage2D(rt,gt,it,st,Q,0,Mt,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),pt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,rt,N.__webglTexture,0,ae(S)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,rt,N.__webglTexture,gt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(I,S,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),S.depthBuffer){let ut=S.depthTexture,rt=ut&&ut.isDepthTexture?ut.type:null,gt=x(S.stencilBuffer,rt),Mt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(S),gt,S.width,S.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(S),gt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,gt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,I)}else{let ut=S.textures;for(let rt=0;rt<ut.length;rt++){let gt=ut[rt],Mt=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),it=T(gt.internalFormat,Mt,et,gt.normalized,gt.colorSpace);pt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(S),it,S.width,S.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(S),it,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,it,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(I,S,Z){let ut=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=i.get(S.depthTexture);rt.__renderTarget=S;let gt=ut?S.depthTexture.image[0]:S.depthTexture.image;(!rt.__webglTexture||gt.width!==S.width||gt.height!==S.height)&&(gt.width=S.width,gt.height=S.height,S.depthTexture.needsUpdate=!0),ut?yt(S.depthTexture,0):ot(S.depthTexture,0);let Mt=rt.__webglTexture,et=ae(S),it=ut?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,vt=S.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===ki)pt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,it,Mt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,vt,it,Mt,0);else if(S.depthTexture.format===Hi)pt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,it,Mt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,vt,it,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(I){let S=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let ut=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ut){let rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ut.removeEventListener("dispose",rt)};ut.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=ut}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let ut=0;ut<6;ut++)ct(S.__webglFramebuffer[ut],I,ut);else I.texture.mipmaps.length>0?ct(S.__webglFramebuffer[0],I,0):ct(S.__webglFramebuffer,I,0);else if(Z){S.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ut]),S.__webglDepthbuffer[ut]===void 0)S.__webglDepthbuffer[ut]=n.createRenderbuffer(),lt(S.__webglDepthbuffer[ut],I,!1);else{let rt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,gt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),lt(S.__webglDepthbuffer,I,!1);else{let rt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,gt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(I,S,Z){let ut=i.get(I);S!==void 0&&k(ut.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Lt(I)}function jt(I){let S=I.texture,Z=i.get(I),ut=i.get(S);I.addEventListener("dispose",z),O(I);let rt=I.textures,gt=I.isWebGLCubeRenderTarget===!0,Mt=rt.length>1;if(Mt||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=S.version,o.memory.textures++),gt){Z.__webglFramebuffer=[];for(let et=0;et<6;et++)if(S.mipmaps.length>0){Z.__webglFramebuffer[et]=[];for(let it=0;it<S.mipmaps.length;it++)Z.__webglFramebuffer[et][it]=n.createFramebuffer()}else Z.__webglFramebuffer[et]=n.createFramebuffer()}else{if(S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let et=0;et<S.mipmaps.length;et++)Z.__webglFramebuffer[et]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let et=0,it=rt.length;et<it;et++){let vt=i.get(rt[et]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&pt(I)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let et=0;et<rt.length;et++){let it=rt[et];Z.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[et]);let vt=r.convert(it.format,it.colorSpace),N=r.convert(it.type),st=T(it.internalFormat,vt,N,it.normalized,it.colorSpace,I.isXRRenderTarget===!0),Q=ae(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,st,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,Z.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(Z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(gt){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,S);for(let et=0;et<6;et++)if(S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)k(Z.__webglFramebuffer[et][it],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else k(Z.__webglFramebuffer[et],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);b(S)?v(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let et=0,it=rt.length;et<it;et++){let vt=rt[et],N=i.get(vt),st=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(st=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,N.__webglTexture),Jt(st,vt),k(Z.__webglFramebuffer,I,vt,n.COLOR_ATTACHMENT0+et,st,0),b(vt)&&v(st)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(et=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,ut.__webglTexture),Jt(et,S),S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)k(Z.__webglFramebuffer[it],I,S,n.COLOR_ATTACHMENT0,et,it);else k(Z.__webglFramebuffer,I,S,n.COLOR_ATTACHMENT0,et,0);b(S)?v(et):S.mipmaps.length>0&&n.texParameteri(et,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&Lt(I)}function F(I){let S=I.textures;for(let Z=0,ut=S.length;Z<ut;Z++){let rt=S[Z];if(b(rt)&&rt.mipmapsAutoUpdate===!0){let gt=E(I),Mt=i.get(rt).__webglTexture;e.bindTexture(gt,Mt),v(gt),e.unbindTexture()}}}let oe=[];function Wt(I){if(I.samples>0){if(pt(I)===!1){let S=I.textures,Z=I.width,ut=I.height,rt=n.COLOR_BUFFER_BIT,gt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(I),et=S.length>1;if(et)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);let N=i.get(S[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,Z,ut,0,0,Z,ut,rt,n.NEAREST),l===!0&&(oe.length=0,oe.push(n.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&oe.push(gt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);let N=i.get(S[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ae(I){return Math.min(s.maxSamples,I.samples)}function pt(I){let S=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(I){let S=o.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function Ot(I,S){let Z=I.colorSpace,ut=I.format,rt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==To&&Z!==Wi&&(he.getTransfer(Z)===we?(ut!==ci||rt!==Pn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",Z)),S}function zt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=ft,this.resetTextureUnits=D,this.getTextureUnits=H,this.setTextureUnits=tt,this.setTexture2D=ot,this.setTexture2DArray=nt,this.setTexture3D=_t,this.setTextureCube=yt,this.rebindTextures=ie,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=k,this.useMultisampledRTT=pt,this.dispose=G}function wS(n,t){function e(i,s=Wi){let r,o=he.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ah)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sh)return n.BYTE;if(i===Mh)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===Gl)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===Th)return n.ALPHA;if(i===Eh)return n.RGB;if(i===ci)return n.RGBA;if(i===ki)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===Wl)return n.RED;if(i===Xl)return n.RED_INTEGER;if(i===ys)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===Ko||i===$o||i===jo||i===Qo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===Jl||i===Kl||i===$l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jl||i===Ql||i===tc||i===ec||i===nc||i===ta||i===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jl||i===Ql)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ec)return r.COMPRESSED_R11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ta)return r.COMPRESSED_RG11_EAC;if(i===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_c||i===yc||i===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_c)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bc||i===Sc||i===ea||i===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var AS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TS=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Fo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Yn({vertexShader:AS,fragmentShader:TS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},td=class extends vi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Qh,f={},_=e.getContextAttributes(),b=null,v=null,E=[],T=[],x=new Kt,M=null,O=null,C=new wn;C.viewport=new Fe;let U=new wn;U.viewport=new Fe;let z=[C,U],X=new Ul,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ot=E[W];return ot===void 0&&(ot=new Nr,E[W]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(W){let ot=E[W];return ot===void 0&&(ot=new Nr,E[W]=ot),ot.getGripSpace()},this.getHand=function(W){let ot=E[W];return ot===void 0&&(ot=new Nr,E[W]=ot),ot.getHandSpace()};function $(W){let ot=T.indexOf(W.inputSource);if(ot===-1)return;let nt=E[ot];nt!==void 0&&(nt.update(W.inputSource,W.frame,c||o),nt.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",A);for(let W=0;W<E.length;W++){let ot=T[W];ot!==null&&(T[W]=null,E[W].disconnect(ot))}L=null,G=null,m.reset();for(let W in f)delete f[W];if(t.setRenderTarget(b),p=null,h=null,d=null,s=null,v=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),O!==null){let W=O.camera;W.fov=O.fov,W.zoom=O.zoom,W.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",A),_.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,_t=null,yt=null;_.depth&&(yt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?Hi:ki,_t=_.stencil?Xs:ai);let Ht={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new On(h.textureWidth,h.textureHeight,{format:ci,type:Pn,depthTexture:new Gi(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let nt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new On(p.framebufferWidth,p.framebufferHeight,{format:ci,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(W){for(let ot=0;ot<W.removed.length;ot++){let nt=W.removed[ot],_t=T.indexOf(nt);_t>=0&&(T[_t]=null,E[_t].disconnect(nt))}for(let ot=0;ot<W.added.length;ot++){let nt=W.added[ot],_t=T.indexOf(nt);if(_t===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=T.length){T.push(nt),_t=Ht;break}else if(T[Ht]===null){T[Ht]=nt,_t=Ht;break}if(_t===-1)break}let yt=E[_t];yt&&yt.connect(nt)}}function R(W,ot){ot===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ot.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ot=W.near,nt=W.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),X.near=U.near=C.near=ot,X.far=U.far=C.far=nt,(L!==X.near||G!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),L=X.near,G=X.far),X.layers.mask=W.layers.mask|6,C.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let _t=W.parent,yt=X.cameras;R(X,_t);for(let Ht=0;Ht<yt.length;Ht++)R(yt[Ht],_t);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),O===null&&W.isPerspectiveCamera&&(O={camera:W,fov:W.fov,zoom:W.zoom}),D(W,X,_t)};function D(W,ot,nt){nt===null?W.matrix.copy(ot.matrixWorld):(W.matrix.copy(nt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ot.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ot.projectionMatrix),W.projectionMatrixInverse.copy(ot.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Lr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(W){return f[W]};let H=null;function tt(W,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){let nt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let _t=!1;nt.length!==X.cameras.length&&(X.cameras.length=0,_t=!0);for(let kt=0;kt<nt.length;kt++){let Jt=nt[kt],me=null;if(p!==null)me=p.getViewport(Jt);else{let Be=d.getViewSubImage(h,Jt);me=Be.viewport,kt===0&&(t.setRenderTargetTextures(v,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(v))}let ee=z[kt];ee===void 0&&(ee=new wn,ee.layers.enable(kt),ee.viewport=new Fe,z[kt]=ee),ee.matrix.fromArray(Jt.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Jt.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(me.x,me.y,me.width,me.height),kt===0&&(X.matrix.copy(ee.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),_t===!0&&X.cameras.push(ee)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let kt=d.getDepthInformation(nt[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,s.renderState)}if(yt&&yt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let kt=0;kt<nt.length;kt++){let Jt=nt[kt].camera;if(Jt){let me=f[Jt];me||(me=new Fo,f[Jt]=me);let ee=d.getCameraImage(Jt);me.sourceTexture=ee}}}}for(let nt=0;nt<E.length;nt++){let _t=T[nt],yt=E[nt];_t!==null&&yt!==void 0&&yt.update(_t,ot,c||o)}H&&H(W,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}let ft=new gm;ft.setAnimationLoop(tt),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}},ES=new _e,Tm=new Yt;Tm.set(-1,0,0,0,1,0,0,0,1);function CS(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Oh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,b,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===En&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===En&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=t.get(f),b=_.envMap,v=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(ES.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tm),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function RS(n,t,e,i){let s={},r={};function o(_,b){let v=b.program;i.uniformBlockBinding(_,v,s[_.id])}function a(_,b){let v=s[_.id];v===void 0&&(g(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",m));let E=b.program;i.updateUBOMapping(_,E);let T=t.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let b=n.createBuffer(),v=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,v,E),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],v=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,x=v.length;T<x;T++){let M=v[T];if(Array.isArray(M))for(let O=0,C=M.length;O<C;O++)u(M[O],T,O,E);else u(M,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,b,v,E){if(h(_,b,v,E)===!0){let T=_.__offset,x=_.value;if(Array.isArray(x)){let M=0;for(let O=0;O<x.length;O++){let C=x[O],U=y(C,!0);d(C,_.__data,M),M+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,_.__data)}}function d(_,b,v){typeof _=="number"||typeof _=="boolean"?b[v]=_:_.isMatrix3?(b[v]=_.elements[0],b[v+1]=_.elements[1],b[v+2]=_.elements[2],b[v+3]=0,b[v+4]=_.elements[3],b[v+5]=_.elements[4],b[v+6]=_.elements[5],b[v+7]=0,b[v+8]=_.elements[6],b[v+9]=_.elements[7],b[v+10]=_.elements[8],b[v+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-v),v):_.toArray(b,v)}function h(_,b,v,E){let T=_.value,x=b+"_"+v;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);let M=E[x],O=!1;for(let C=0;C<T.length;C++)p(T[C],M,C)===!0&&(O=!0);return O}return p(T,E,x)}function p(_,b,v){if(b[v]===void 0)return typeof _=="number"||typeof _=="boolean"?b[v]=_:ArrayBuffer.isView(_)?b[v]=_.slice():b[v]=_.clone(),!0;{let E=b[v];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return b[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function g(_){let b=_.uniforms,v=0,E=16;for(let x=0,M=b.length;x<M;x++){let O=Array.isArray(b[x])?b[x]:[b[x]];for(let C=0,U=O.length;C<U;C++){let z=O[C],X=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(b[x])||Array.isArray(z.value),G=v;for(let Y=0,A=X.length;Y<A;Y++){let R=X[Y],D=y(R,L),H=v%E,tt=H%D.boundary,ft=H+tt;v+=tt,ft!==0&&E-ft<D.storage&&(v+=E-ft),Y===0&&(G=v),v+=D.storage}let $=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new $((v-G)/Float32Array.BYTES_PER_ELEMENT),z.__offset=G}}let T=v%E;return T>0&&(v+=E-T),_.__size=v,_.__cache={},this}function y(_,b){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:f}}var IS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function LS(){return Mi===null&&(Mi=new No(IS,16,16,ys,li),Mi.name="DFG_LUT",Mi.minFilter=An,Mi.magFilter=An,Mi.wrapS=yi,Mi.wrapT=yi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var Cc=class{constructor(t={}){let{canvas:e=kp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Pn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=p,m=new Set([Yl,ql,Xl]),f=new Set([Pn,ai,Vr,Xs,Vl,Hl]),_=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,T=null,x=[],M=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,z=null,X=null,L=null,G=null;this._outputColorSpace=ln;let $=0,Y=0,A=null,R=-1,D=null,H=new Fe,tt=new Fe,ft=null,W=new qt(0),ot=0,nt=e.width,_t=e.height,yt=1,Ht=null,Oe=null,kt=new Fe(0,0,nt,_t),Jt=new Fe(0,0,nt,_t),me=!1,ee=new fs,Be=new vl,ke=!1,We=!1,k=new _e,lt=new V,ct=new Fe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function jt(){return A===null?yt:1}let F=i;function oe(w,B){return e.getContext(w,B)}let Wt,ae,pt,Ae,Ot,zt,I,S,Z,ut,rt,gt,Mt,et,it,vt,N,st,Q,bt,mt,xt,Ut;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",At,!1),F===null){let B="webgl2";if(F=oe(B,w),F===null)throw oe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(w){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Xt("WebGLRenderer: "+w.message),w}function se(){Wt=new V1(F),Wt.init(),mt=new wS(F,Wt),ae=new L1(F,Wt,t,mt),pt=new SS(F,Wt),ae.reversedDepthBuffer&&h&&pt.buffers.depth.setReversed(!0),X=F.createFramebuffer(),L=F.createFramebuffer(),G=F.createFramebuffer(),Ae=new X1(F),Ot=new lS,zt=new MS(F,Wt,pt,Ot,ae,mt,Ae),I=new G1(C),S=new Y_(F),xt=new R1(F,S),Z=new H1(F,S,Ae,xt),ut=new Y1(F,Z,S,xt,Ae),st=new q1(F,ae,zt),it=new P1(Ot),rt=new aS(C,I,Wt,ae,xt,it),gt=new CS(C,Ot),Mt=new uS,et=new gS(Wt),N=new C1(C,I,pt,ut,g,l),vt=new bS(C,ut,ae),Ut=new RS(F,Ae,ae,pt),Q=new I1(F,Wt,Ae),bt=new W1(F,Wt,Ae),Ae.programs=rt.programs,C.capabilities=ae,C.extensions=Wt,C.properties=Ot,C.renderLists=Mt,C.shadowMap=vt,C.state=pt,C.info=Ae}y!==Pn&&(O=new J1(y,e.width,e.height,a,s,r));let ht=new td(C,F);this.xr=ht,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=Wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(w){w!==void 0&&(yt=w,this.setSize(nt,_t,!1))},this.getSize=function(w){return w.set(nt,_t)},this.setSize=function(w,B,j=!0){if(ht.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=w,_t=B,e.width=Math.floor(w*yt),e.height=Math.floor(B*yt),j===!0&&(e.style.width=w+"px",e.style.height=B+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(nt*yt,_t*yt).floor()},this.setDrawingBufferSize=function(w,B,j){nt=w,_t=B,yt=j,e.width=Math.floor(w*j),e.height=Math.floor(B*j),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(y===Pn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(kt)},this.setViewport=function(w,B,j,J){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,B,j,J),pt.viewport(H.copy(kt).multiplyScalar(jt()).round())},this.getScissor=function(w){return w.copy(Jt)},this.setScissor=function(w,B,j,J){w.isVector4?Jt.set(w.x,w.y,w.z,w.w):Jt.set(w,B,j,J),pt.scissor(tt.copy(Jt).multiplyScalar(jt()).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){pt.setScissorTest(me=w)},this.setOpaqueSort=function(w){Ht=w},this.setTransparentSort=function(w){Oe=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,j=!0){let J=0;if(w){let K=!1;if(A!==null){let wt=A.texture.format;K=m.has(wt)}if(K){let wt=A.texture.type,It=f.has(wt),St=N.getClearColor(),Et=N.getClearAlpha(),Nt=St.r,Zt=St.g,ce=St.b;It?(_[0]=Nt,_[1]=Zt,_[2]=ce,_[3]=Et,F.clearBufferuiv(F.COLOR,0,_)):(b[0]=Nt,b[1]=Zt,b[2]=ce,b[3]=Et,F.clearBufferiv(F.COLOR,0,b))}else J|=F.COLOR_BUFFER_BIT}B&&(J|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),z=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",At,!1),N.dispose(),Mt.dispose(),et.dispose(),zt.dispose(),Ot.dispose(),I.dispose(),ut.dispose(),Z.dispose(),xt.dispose(),Ut.dispose(),rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Sf),ht.removeEventListener("sessionend",Mf),Ds.stop()};function Ft(w){w.preventDefault(),Ph("WebGLRenderer: Context Lost."),U=!0}function ne(){Ph("WebGLRenderer: Context Restored."),U=!1;let w=Ae.autoReset,B=vt.enabled,j=vt.autoUpdate,J=vt.needsUpdate,K=vt.type;se(),Ae.autoReset=w,vt.enabled=B,vt.autoUpdate=j,vt.needsUpdate=J,vt.type=K}function At(w){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){let B=w.target;B.removeEventListener("dispose",Te),tn(B)}function tn(w){is(w),Ot.remove(w)}function is(w){let B=Ot.get(w).programs;B!==void 0&&(B.forEach(function(j){rt.releaseProgram(j)}),w.isShaderMaterial&&rt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,j,J,K,wt){B===null&&(B=Lt);let It=K.isMesh&&K.matrixWorld.determinantAffine()<0,St=Vx(w,B,j,J,K);pt.setMaterial(J,It);let Et=j.index,Nt=1;if(J.wireframe===!0){if(Et=Z.getWireframeAttribute(j),Et===void 0)return;Nt=2}let Zt=j.drawRange,ce=j.attributes.position,Pt=Zt.start*Nt,ue=(Zt.start+Zt.count)*Nt;wt!==null&&(Pt=Math.max(Pt,wt.start*Nt),ue=Math.min(ue,(wt.start+wt.count)*Nt)),Et!==null?(Pt=Math.max(Pt,0),ue=Math.min(ue,Et.count)):ce!=null&&(Pt=Math.max(Pt,0),ue=Math.min(ue,ce.count));let Xe=ue-Pt;if(Xe<0||Xe===1/0)return;xt.setup(K,J,St,j,Et);let Pe,Re=Q;if(Et!==null&&(Pe=S.get(Et),Re=bt,Re.setIndex(Pe)),K.isMesh)J.wireframe===!0?(pt.setLineWidth(J.wireframeLinewidth*jt()),Re.setMode(F.LINES)):Re.setMode(F.TRIANGLES);else if(K.isLine){let gn=J.linewidth;gn===void 0&&(gn=1),pt.setLineWidth(gn*jt()),K.isLineSegments?Re.setMode(F.LINES):K.isLineLoop?Re.setMode(F.LINE_LOOP):Re.setMode(F.LINE_STRIP)}else K.isPoints?Re.setMode(F.POINTS):K.isSprite&&Re.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let gn=K._multiDrawStarts,Dt=K._multiDrawCounts,Mn=K._multiDrawCount,ye=Et?S.get(Et).bytesPerElement:1,Ns=Ot.get(J).currentProgram.getUniforms();for(let xn=0;xn<Mn;xn++)Ns.setValue(F,"_gl_DrawID",xn),Re.render(gn[xn]/ye,Dt[xn])}else if(K.isInstancedMesh)Re.renderInstances(Pt,Xe,K.count);else if(j.isInstancedBufferGeometry){let gn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Dt=Math.min(j.instanceCount,gn);Re.renderInstances(Pt,Xe,Dt)}else Re.render(Pt,Xe)};function bf(w,B,j,J){z!==null&&w.isNodeMaterial&&z.setObject(J,w),ke===!0&&it.setState(w,j,!1),w.transparent===!0&&w.side===on&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,mo(w,B,J),w.side=_s,w.needsUpdate=!0,mo(w,B,J),w.side=on):mo(w,B,J)}this.compile=function(w,B,j=null){j===null&&(j=w),z!==null&&z.renderStart(w,B,j),T=et.get(j),T.init(B),M.push(T),j.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),w!==j&&w.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),We=this.localClippingEnabled,ke=it.init(this.clippingPlanes,We),ke===!0&&it.setGlobalState(this.clippingPlanes,B),z!==null&&vt.render(T.state.shadowsArray,j,B);let J=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let wt=K.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){let St=wt[It];bf(St,j,B,K),J.add(St)}else bf(wt,j,B,K),J.add(wt)}),T=M.pop(),z!==null&&z.renderEnd(),J},this.compileAsync=function(w,B,j=null){let J=this.compile(w,B,j);return new Promise(K=>{function wt(){if(J.forEach(function(It){let Et=Ot.get(It).currentProgram;(Et===void 0||Et.isReady())&&J.delete(It)}),J.size===0){K(w);return}setTimeout(wt,10)}Wt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Du=null;function zx(w){Du&&Du(w)}function Sf(){Ds.stop()}function Mf(){Ds.start()}let Ds=new gm;Ds.setAnimationLoop(zx),typeof self<"u"&&Ds.setContext(self),this.setAnimationLoop=function(w){Du=w,ht.setAnimationLoop(w),w===null?Ds.stop():Ds.start()},ht.addEventListener("sessionstart",Sf),ht.addEventListener("sessionend",Mf),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(w,B);let j=ht.enabled===!0&&ht.isPresenting===!0,J=O!==null&&(A===null||j)&&O.begin(C,A);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(B),B=ht.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,B,A),T=et.get(w,M.length),T.init(B),T.state.textureUnits=zt.getTextureUnits(),M.push(T),k.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Be.setFromArrayCamera(B):ee.setFromProjectionMatrix(k,Hn,B.reversedDepth),We=this.localClippingEnabled,ke=it.init(this.clippingPlanes,We),E=Mt.get(w,x.length),E.init(),x.push(E),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let It=C.xr.getDepthSensingMesh();It!==null&&Nu(It,B,-1/0,C.sortObjects)}Nu(w,B,0,C.sortObjects),E.finish(),z!==null&&z.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(Ht,Oe),ie=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ie&&N.addToRenderList(E,w),this.info.autoReset===!0&&this.info.reset(),ke===!0&&it.beginShadows();let K=T.state.shadowsArray;if(vt.render(K,w,B),ke===!0&&it.endShadows(),(J&&O.hasRenderPass())===!1){let It=E.opaque,St=E.transmissive;if(T.setupLights(),B.isArrayCamera){let Et=B.cameras;if(St.length>0)for(let Nt=0,Zt=Et.length;Nt<Zt;Nt++){let ce=Et[Nt];Af(It,St,w,ce)}ie&&N.render(w);for(let Nt=0,Zt=Et.length;Nt<Zt;Nt++){let ce=Et[Nt];wf(E,w,ce,ce.viewport)}}else St.length>0&&Af(It,St,w,B),ie&&N.render(w),wf(E,w,B)}A!==null&&Y===0&&(zt.updateMultisampleRenderTarget(A),zt.updateRenderTargetMipmap(A)),J&&O.end(C),w.isScene===!0&&w.onAfterRender(C,w,B),xt.resetDefaultState(),R=-1,D=null,M.pop(),M.length>0?(T=M[M.length-1],zt.setTextureUnits(T.state.textureUnits),ke===!0&&it.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,z!==null&&z.renderEnd()};function Nu(w,B,j,J){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let It=B.isArrayCamera?Be:ee;if(!w.frustumCulled||w.intersectsFrustum(It)){J&&ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);let St=ut.update(w),Et=w.material;Et.visible&&E.push(w,St,Et,j,ct.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let It=B.isArrayCamera?Be:ee;if(!w.frustumCulled||w.intersectsFrustum(It)){let St=ut.update(w),Et=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ct.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ct.copy(St.boundingSphere.center)),ct.applyMatrix4(w.matrixWorld).applyMatrix4(k)),Array.isArray(Et)){let Nt=St.groups;for(let Zt=0,ce=Nt.length;Zt<ce;Zt++){let Pt=Nt[Zt],ue=Et[Pt.materialIndex];ue&&ue.visible&&E.push(w,St,ue,j,ct.z,Pt,B)}}else Et.visible&&E.push(w,St,Et,j,ct.z,null,B)}}}let wt=w.children;for(let It=0,St=wt.length;It<St;It++)Nu(wt[It],B,j,J)}function wf(w,B,j,J){let{opaque:K,transmissive:wt,transparent:It}=w;T.setupLightsView(j),ke===!0&&it.setGlobalState(C.clippingPlanes,j),J&&pt.viewport(H.copy(J)),K.length>0&&Oa(K,B,j),wt.length>0&&Oa(wt,B,j),It.length>0&&Oa(It,B,j),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Af(w,B,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Pt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new On(1,1,{generateMipmaps:!0,type:Pt?li:Pn,minFilter:oi,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let wt=T.state.transmissionRenderTarget[J.id],It=J.viewport||H;wt.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);let St=C.getRenderTarget(),Et=C.getActiveCubeFace(),Nt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(W),ot=C.getClearAlpha(),ot<1&&C.setClearColor(16777215,.5),C.clear(),ie&&N.render(j);let Zt=C.toneMapping;C.toneMapping=Si;let ce=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),ke===!0&&it.setGlobalState(C.clippingPlanes,J),Oa(w,j,J),zt.updateMultisampleRenderTarget(wt),zt.updateRenderTargetMipmap(wt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ue=0,Xe=B.length;ue<Xe;ue++){let Pe=B[ue],{object:Re,geometry:gn,material:Dt,group:Mn}=Pe;if(Dt.side===on&&Re.layers.test(J.layers)){let ye=Dt.side;Dt.side=En,Dt.needsUpdate=!0,Tf(Re,j,J,gn,Dt,Mn),Dt.side=ye,Dt.needsUpdate=!0,Pt=!0}}Pt===!0&&(zt.updateMultisampleRenderTarget(wt),zt.updateRenderTargetMipmap(wt))}C.setRenderTarget(St,Et,Nt),C.setClearColor(W,ot),ce!==void 0&&(J.viewport=ce),C.toneMapping=Zt}function Oa(w,B,j){let J=B.isScene===!0?B.overrideMaterial:null;for(let K=0,wt=w.length;K<wt;K++){let It=w[K],{object:St,geometry:Et,group:Nt}=It,Zt=It.material;Zt.allowOverride===!0&&J!==null&&(Zt=J),St.layers.test(j.layers)&&Tf(St,B,j,Et,Zt,Nt)}}function Tf(w,B,j,J,K,wt){z!==null&&K.isNodeMaterial&&z.setObject(w,K),w.onBeforeRender(C,B,j,J,K,wt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(C,B,j,J,w,wt),K.transparent===!0&&K.side===on&&K.forceSinglePass===!1?(K.side=En,K.needsUpdate=!0,C.renderBufferDirect(j,B,J,K,w,wt),K.side=_s,K.needsUpdate=!0,C.renderBufferDirect(j,B,J,K,w,wt),K.side=on):C.renderBufferDirect(j,B,J,K,w,wt),w.onAfterRender(C,B,j,J,K,wt)}function Ef(w){let B=0;for(let j of w)j.texture!==null&&B++;return B}function mo(w,B,j){B.isScene!==!0&&(B=Lt);let J=Ot.get(w),K=T.state.lights,wt=T.state.shadowsArray,It=K.state.version,St=rt.getParameters(w,K.state,wt,B,j,T.state.lightProbeGridArray),Et=rt.getProgramCacheKey(St),Nt=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,J.fog=B.fog;let Zt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=I.get(w.envMap||J.environment,Zt),J.envMapRotation=J.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",Te),Nt=new Map,J.programs=Nt,J.programVariants=new Map);let ce=Nt.get(Et);if(ce!==void 0){if(J.currentProgram===ce&&J.lightsStateVersion===It)return Rf(w,St),ce}else St.uniforms=rt.getUniforms(w),z!==null&&w.isNodeMaterial&&z.build(w,j,St),w.onBeforeCompile(St,C),ce=rt.acquireProgram(St,Et),Nt.set(Et,ce),J.uniforms=St.uniforms;let Pt=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=it.uniform),Rf(w,St),J.needsLights=Wx(w),J.lightsStateVersion=It,J.needsLights&&(Pt.ambientLightColor.value=K.state.ambient,Pt.lightProbe.value=K.state.probe,Pt.sunLights.value=K.state.sun,Pt.sunLightShadows.value=K.state.sunShadow,Pt.directionalLights.value=K.state.directional,Pt.directionalLightShadows.value=K.state.directionalShadow,Pt.spotLights.value=K.state.spot,Pt.spotLightShadows.value=K.state.spotShadow,Pt.rectAreaLights.value=K.state.rectArea,Pt.ltc_1.value=K.state.rectAreaLTC1,Pt.ltc_2.value=K.state.rectAreaLTC2,Pt.pointLights.value=K.state.point,Pt.pointLightShadows.value=K.state.pointShadow,Pt.hemisphereLights.value=K.state.hemi,Pt.sunShadowMatrix.value=K.state.sunShadowMatrix,Pt.sunShadowCascade.value=K.state.sunShadowCascade,Pt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Pt.spotLightMatrix.value=K.state.spotLightMatrix,Pt.spotLightMap.value=K.state.spotLightMap,Pt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.numLightProbeGrids=Ef(T.state.lightProbeGridArray),J.currentProgram=ce,J.uniformsList=null,ce}function Gx(w,B,j,J,K){let wt=Ot.get(w),It=wt.currentProgram.id+","+J+","+K,St=wt.programVariants.get(It);return St===void 0?(St=mo(w,B,j),wt.programVariants.set(It,St)):(wt.currentProgram=St,wt.uniformsList=null,wt.outputColorSpace=J,wt.toneMapping=K),St}function Cf(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Xr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Rf(w,B){let j=Ot.get(w);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Vx(w,B,j,J,K){B.isScene!==!0&&(B=Lt),zt.resetTextureUnits();let wt=B.fog,It=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?B.environment:null,St=A===null?C.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:he.workingColorSpace,Et=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Nt=I.get(J.envMap||It,Et),Zt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ce=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Pt=!!j.morphAttributes.position,ue=!!j.morphAttributes.normal,Xe=!!j.morphAttributes.color,Pe=Si;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=C.toneMapping);let Re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gn=Re!==void 0?Re.length:0,Dt=Ot.get(J),Mn=T.state.lights;if(ke===!0&&(We===!0||w!==D)){let ze=w===D&&J.id===R;it.setState(J,w,ze)}let ye=!1,Ns=!1;J.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Mn.state.version||K.isBatchedMesh&&Dt.batching===!1||!K.isBatchedMesh&&Dt.batching===!0||K.isBatchedMesh&&Dt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Dt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Dt.instancing===!1||!K.isInstancedMesh&&Dt.instancing===!0||K.isSkinnedMesh&&Dt.skinning===!1||!K.isSkinnedMesh&&Dt.skinning===!0||K.isInstancedMesh&&Dt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Dt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Dt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Dt.instancingMorph===!1&&K.morphTexture!==null||Dt.envMap!==Nt||J.fog===!0&&Dt.fog!==wt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==Zt||Dt.vertexTangents!==ce||Dt.morphTargets!==Pt||Dt.morphNormals!==ue||Dt.morphColors!==Xe||Dt.morphTargetsCount!==gn||Dt.numLightProbeGrids!==Ef(T.state.lightProbeGridArray)?ye=!0:(Dt.outputColorSpace!==St||Dt.toneMapping!==Pe)&&(Ns=!0):(ye=!0,Dt.__version=J.version);let xn=Dt.currentProgram;(ye===!0||Ns===!0)&&(xn=Ns===!0?Gx(J,B,K,St,Pe):mo(J,B,K),z&&J.isNodeMaterial&&z.onUpdateProgram(J,xn,Dt));let Fa=!1,ss=!1,Us=!1,ge=xn.getUniforms(),an=Dt.uniforms;if(pt.useProgram(xn.program)&&(Fa=!0,ss=!0,Us=!0),J.id!==R&&(R=J.id,ss=!0),Fa||D!==w){pt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(F,"projectionMatrix",w.projectionMatrix),ge.setValue(F,"viewMatrix",w.matrixWorldInverse);let en=ge.map.cameraPosition;en!==void 0&&en.setValue(F,lt.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ge.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,ss=!0,Us=!0)}if(Dt.needsLights&&(Mn.state.sunShadowMap.length>0&&ge.setValue(F,"sunShadowMap",Mn.state.sunShadowMap,zt),Mn.state.directionalShadowMap.length>0&&ge.setValue(F,"directionalShadowMap",Mn.state.directionalShadowMap,zt),Mn.state.spotShadowMap.length>0&&ge.setValue(F,"spotShadowMap",Mn.state.spotShadowMap,zt),Mn.state.pointShadowMap.length>0&&ge.setValue(F,"pointShadowMap",Mn.state.pointShadowMap,zt)),K.isSkinnedMesh){ge.setOptional(F,K,"bindMatrix"),ge.setOptional(F,K,"bindMatrixInverse");let ze=K.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ge.setValue(F,"boneTexture",ze.boneTexture,zt))}K.isBatchedMesh&&(ge.setOptional(F,K,"batchingTexture"),ge.setValue(F,"batchingTexture",K._matricesTexture,zt),ge.setOptional(F,K,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",K._indirectTexture,zt),ge.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",K._colorsTexture,zt));let Qn=j.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&st.update(K,j,xn),(ss||Dt.receiveShadow!==K.receiveShadow)&&(Dt.receiveShadow=K.receiveShadow,ge.setValue(F,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&B.environment!==null&&(an.envMapIntensity.value=B.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=LS()),ss){if(ge.setValue(F,"toneMappingExposure",C.toneMappingExposure),Dt.needsLights&&Hx(an,Us),wt&&J.fog===!0&&gt.refreshFogUniforms(an,wt),gt.refreshMaterialUniforms(an,J,yt,_t,T.state.transmissionRenderTarget[w.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let ze=v,en=0;for(let Pi of T.state.lightProbeGridArray)Pi.texture!==null&&(ze.textures[en]=Pi.texture,ze.min[en]=Pi.boundingBox.min,ze.max[en]=Pi.boundingBox.max,ze.resolution[en]=Pi.resolution,en++);for(let Pi in ze)ze[Pi].length=en;an.probesSH.value=ze.textures,an.probesMin.value=ze.min,an.probesMax.value=ze.max,an.probesResolution.value=ze.resolution}Xr.upload(F,Cf(Dt),an,zt)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Xr.upload(F,Cf(Dt),an,zt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ge.setValue(F,"center",K.center),ge.setValue(F,"modelViewMatrix",K.modelViewMatrix),ge.setValue(F,"normalMatrix",K.normalMatrix),ge.setValue(F,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let ze=J.uniformsGroups;for(let en=0,Pi=ze.length;en<Pi;en++){let Lf=ze[en];Ut.update(Lf,xn),Ut.bind(Lf,xn)}}return xn}function Hx(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Wx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,B,j){let J=Ot.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ot.get(w.texture).__webglTexture=B,Ot.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let j=Ot.get(w);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,j=0){A=w,$=B,Y=j;let J=null,K=!1,wt=!1;if(w){let St=Ot.get(w);if(St.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(F.FRAMEBUFFER,St.__webglFramebuffer),H.copy(w.viewport),tt.copy(w.scissor),ft=w.scissorTest,pt.viewport(H),pt.scissor(tt),pt.setScissorTest(ft),R=-1;return}else if(St.__webglFramebuffer===void 0)zt.setupRenderTarget(w);else if(St.__hasExternalTextures)zt.rebindTextures(w,Ot.get(w.texture).__webglTexture,Ot.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Zt=w.depthTexture;if(St.__boundDepthTexture!==Zt){if(Zt!==null&&Ot.has(Zt)&&(w.width!==Zt.image.width||w.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(w)}}let Et=w.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(wt=!0);let Nt=Ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[B])?J=Nt[B][j]:J=Nt[B],K=!0):w.samples>0&&zt.useMultisampledRTT(w)===!1?J=Ot.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?J=Nt[j]:J=Nt,H.copy(w.viewport),tt.copy(w.scissor),ft=w.scissorTest}else H.copy(kt).multiplyScalar(yt).floor(),tt.copy(Jt).multiplyScalar(yt).floor(),ft=me;if(j!==0&&(J=X),pt.bindFramebuffer(F.FRAMEBUFFER,J)&&pt.drawBuffers(w,J),pt.viewport(H),pt.scissor(tt),pt.setScissorTest(ft),K){let St=Ot.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,j)}else if(wt){let St=B;for(let Et=0;Et<w.textures.length;Et++){let Nt=Ot.get(w.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,Nt.__webglTexture,j,St)}}else if(w!==null&&j!==0){let St=Ot.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,j)}R=-1};function If(w){let B=Ot.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=ae.textureFormatReadable(w.format),B.__typeReadable=ae.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,j,J,K,wt,It,St=0){if(!(w&&w.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Et=Et[It],Array.isArray(Et)&&(Et=Et[0])),Et){pt.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Nt=w.textures[St],Zt=Nt.format,ce=Nt.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let Pt=If(Nt);if(Pt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-J&&j>=0&&j<=w.height-K&&F.readPixels(B,j,J,K,mt.convert(Zt),mt.convert(ce),wt)}finally{let Nt=A!==null?Ot.get(A).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,B,j,J,K,wt,It,St=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Et=Et[It],Array.isArray(Et)&&(Et=Et[0])),Et)if(B>=0&&B<=w.width-J&&j>=0&&j<=w.height-K){pt.bindFramebuffer(F.FRAMEBUFFER,Et);let Nt=w.textures[St],Zt=Nt.format,ce=Nt.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let Pt=If(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,wt.byteLength,F.STREAM_READ),F.readPixels(B,j,J,K,mt.convert(Zt),mt.convert(ce),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Xe=A!==null?Ot.get(A).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Xe);let Pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Gp(F,Pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,wt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ue),F.deleteSync(Pe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,j=0){let J=Math.pow(2,-j),K=Math.floor(w.image.width*J),wt=Math.floor(w.image.height*J),It=B!==null?B.x:0,St=B!==null?B.y:0;zt.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,It,St,K,wt),pt.unbindTexture()},this.copyTextureToTexture=function(w,B,j=null,J=null,K=0,wt=0){let It,St,Et,Nt,Zt,ce,Pt,ue,Xe,Pe=w.isCompressedTexture?w.mipmaps[wt]:w.image;if(j!==null)It=j.max.x-j.min.x,St=j.max.y-j.min.y,Et=j.isBox3?j.max.z-j.min.z:1,Nt=j.min.x,Zt=j.min.y,ce=j.isBox3?j.min.z:0;else{let ge=Math.pow(2,-K);It=Math.floor(Pe.width*ge),St=Math.floor(Pe.height*ge),w.isDataArrayTexture?Et=Pe.depth:w.isData3DTexture?Et=Math.floor(Pe.depth*ge):Et=1,Nt=0,Zt=0,ce=0}J!==null?(Pt=J.x,ue=J.y,Xe=J.z):(Pt=0,ue=0,Xe=0);let Re=mt.convert(B.format),gn=mt.convert(B.type),Dt;B.isData3DTexture?(zt.setTexture3D(B,0),Dt=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(zt.setTexture2DArray(B,0),Dt=F.TEXTURE_2D_ARRAY):(zt.setTexture2D(B,0),Dt=F.TEXTURE_2D),pt.activeTexture(F.TEXTURE0),pt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),pt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),pt.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let Mn=pt.getParameter(F.UNPACK_ROW_LENGTH),ye=pt.getParameter(F.UNPACK_IMAGE_HEIGHT),Ns=pt.getParameter(F.UNPACK_SKIP_PIXELS),xn=pt.getParameter(F.UNPACK_SKIP_ROWS),Fa=pt.getParameter(F.UNPACK_SKIP_IMAGES);pt.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),pt.pixelStorei(F.UNPACK_SKIP_ROWS,Zt),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,ce);let ss=w.isDataArrayTexture||w.isData3DTexture,Us=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let ge=Ot.get(w),an=Ot.get(B),Qn=Ot.get(ge.__renderTarget),ze=Ot.get(an.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,Qn.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let en=0;en<Et;en++)ss&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(w).__webglTexture,K,ce+en),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(B).__webglTexture,wt,Xe+en)),F.blitFramebuffer(Nt,Zt,Nt+It,Zt+St,Pt,ue,Pt+It,ue+St,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||Ot.has(w)){let ge=Ot.get(w),an=Ot.get(B);pt.bindFramebuffer(F.READ_FRAMEBUFFER,L),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,G);for(let Qn=0;Qn<Et;Qn++)ss?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.__webglTexture,K,ce+Qn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,K),Us?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,an.__webglTexture,wt,Xe+Qn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,an.__webglTexture,wt),K!==0?F.blitFramebuffer(Nt,Zt,Nt+It,Zt+St,Pt,ue,Pt+It,ue+St,F.COLOR_BUFFER_BIT,F.NEAREST):Us?F.copyTexSubImage3D(Dt,wt,Pt,ue,Xe+Qn,Nt,Zt,It,St):F.copyTexSubImage2D(Dt,wt,Pt,ue,Nt,Zt,It,St);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Us?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Dt,wt,Pt,ue,Xe,It,St,Et,Re,gn,Pe.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Dt,wt,Pt,ue,Xe,It,St,Et,Re,Pe.data):F.texSubImage3D(Dt,wt,Pt,ue,Xe,It,St,Et,Re,gn,Pe):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,wt,Pt,ue,It,St,Re,gn,Pe.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,wt,Pt,ue,Pe.width,Pe.height,Re,Pe.data):F.texSubImage2D(F.TEXTURE_2D,wt,Pt,ue,It,St,Re,gn,Pe);pt.pixelStorei(F.UNPACK_ROW_LENGTH,Mn),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,Ns),pt.pixelStorei(F.UNPACK_SKIP_ROWS,xn),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,Fa),wt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&F.generateMipmap(Dt),pt.unbindTexture()},this.initRenderTarget=function(w){Ot.get(w).__webglFramebuffer===void 0&&zt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?zt.setTextureCube(w,0):w.isData3DTexture?zt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?zt.setTexture2DArray(w,0):zt.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){$=0,Y=0,A=null,pt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var PS=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Em(n,{background:t="#0d1517",quality:e="high"}={}){let i=new Cc({canvas:n,antialias:e==="high",powerPreference:"default",preserveDrawingBuffer:!1});i.outputColorSpace=ln,i.shadowMap.enabled=!1;let s=new Io;s.background=new qt(t);let r=new Gs(-1,1,1,-1,.1,300),o={target:new V(0,0,0),yaw:.5,pitch:.95,span:9,dist:60},a={spanMin:2.2,spanMax:16,pitchMin:.55,pitchMax:1.25,bounds:new Xn(new V(-8,0,-9),new V(8,3,10))},l=1,c=1,u=1,d=!0,h=0,p=0,g=!1,y=new Set,m=new Set,f=new Set,_=new Set,b={top:0,bottom:0,left:0,right:0},v=null;function E(){let k=o.target,lt=Math.cos(o.pitch);r.position.set(k.x+o.dist*lt*Math.sin(o.yaw),k.y+o.dist*Math.sin(o.pitch),k.z+o.dist*lt*Math.cos(o.yaw)),r.lookAt(k);let ct=l/c;r.top=o.span,r.bottom=-o.span,r.left=-o.span*ct,r.right=o.span*ct;let Lt=-(b.left-b.right)/2,ie=-(b.top-b.bottom)/2;Lt||ie?r.setViewOffset(l,c,Lt,ie,l,c):r.clearViewOffset(),r.updateProjectionMatrix(),r.updateMatrixWorld()}function T(k){e=k,u=Math.min(window.devicePixelRatio||1,k==="low"?1.25:2),i.setPixelRatio(u),x()}function x(){let k=n.parentElement?n.parentElement.getBoundingClientRect():n.getBoundingClientRect();l=Math.max(1,Math.round(k.width)),c=Math.max(1,Math.round(k.height)),i.setSize(l,c,!1),n.style.width=l+"px",n.style.height=c+"px",E();for(let lt of _)lt(l,c);M()}function M(){d=!0,!p&&!g&&(p=requestAnimationFrame(C))}let O=0;function C(k){p=0;let lt=Math.min(.05,O?(k-O)/1e3:.016);O=k;for(let ct of[...y]){let Lt=Math.min(1,(k-ct.start)/ct.ms);ct.step(ct.ease(Lt)),Lt>=1&&(y.delete(ct),ct.done())}for(let ct of m)ct(lt,k);if(d||y.size||h>0){E(),i.render(s,v||r),d=!1;for(let ct of f)ct()}y.size||h>0?p=requestAnimationFrame(C):O=0}let U=()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}};function z(k,lt,{easing:ct=PS}={}){return new Promise(Lt=>{if(k<=0||U()){lt(1),M(),Lt();return}let ie={start:performance.now(),ms:k,step:lt,ease:ct,done:Lt};y.add(ie),M()})}function X(){for(let k of[...y])k.step(1),y.delete(k),k.done();M()}function L(){h++,M();let k=!0;return()=>{k&&(k=!1,h=Math.max(0,h-1),M())}}function G(){o.span=na.clamp(o.span,a.spanMin,a.spanMax),o.pitch=na.clamp(o.pitch,a.pitchMin,a.pitchMax),o.target.clamp(a.bounds.min,a.bounds.max)}function $({target:k,yaw:lt,pitch:ct,span:Lt},ie=650){let jt={t:o.target.clone(),yaw:o.yaw,pitch:o.pitch,span:o.span},F={t:k?k.clone():jt.t,yaw:lt??jt.yaw,pitch:ct??jt.pitch,span:Lt??jt.span},oe=F.yaw-jt.yaw;return oe=Math.atan2(Math.sin(oe),Math.cos(oe)),z(ie,Wt=>{o.target.lerpVectors(jt.t,F.t,Wt),o.yaw=jt.yaw+oe*Wt,o.pitch=jt.pitch+(F.pitch-jt.pitch)*Wt,o.span=jt.span+(F.span-jt.span)*Wt,G()})}function Y(k,{yaw:lt=o.yaw,pitch:ct=o.pitch,margin:Lt=1.08,insetTop:ie=0,insetBottom:jt=0}={}){let F={yaw:o.yaw,pitch:o.pitch,span:o.span,t:o.target.clone()};o.yaw=lt,o.pitch=ct,o.span=1,k.getCenter(o.target),E();let oe=new V,Wt=0,ae=0,pt=r.matrixWorldInverse;for(let Ot of[k.min.x,k.max.x])for(let zt of[k.min.y,k.max.y])for(let I of[k.min.z,k.max.z])oe.set(Ot,zt,I).applyMatrix4(pt),Wt=Math.max(Wt,Math.abs(oe.x)),ae=Math.max(ae,Math.abs(oe.y));o.yaw=F.yaw,o.pitch=F.pitch,o.span=F.span,o.target.copy(F.t),E();let Ae=Math.max(.3,1-(ie+jt)/c);return Math.max(ae,Wt*c/l)*Lt/Ae}let A=new V;function R(k){return A.copy(k).project(r),{x:(A.x+1)/2*l,y:(1-A.y)/2*c,visible:A.x>-1.02&&A.x<1.02&&A.y>-1.02&&A.y<1.02&&A.z<1}}let D=new Yo,H=new Kt,tt=[],ft=null,W=!0,ot=new Map,nt=null;function _t(k,lt,ct=26){let Lt=n.getBoundingClientRect();H.set((k-Lt.left)/Lt.width*2-1,-((lt-Lt.top)/Lt.height)*2+1),D.setFromCamera(H,r);let ie=D.intersectObjects(tt,!0),jt=Wt=>{for(;Wt&&!Wt.userData.pick;)Wt=Wt.parent;return Wt?Wt.userData.pick:null};if(ie.length)return jt(ie[0].object);let F=null,oe=ct;for(let Wt of tt){let ae=jt(Wt);if(!ae)continue;let pt=R(Wt.getWorldPosition(yt)),Ae=Math.hypot(pt.x-(k-Lt.left),pt.y-(lt-Lt.top));pt.visible&&Ae<oe&&(oe=Ae,F=ae)}return F}let yt=new V;function Ht(k,lt,ct){let Lt=o.span*2/c,ie=new V(Math.cos(o.yaw),0,-Math.sin(o.yaw)),jt=new V(-Math.sin(o.yaw),0,-Math.cos(o.yaw));o.target.copy(ct).addScaledVector(ie,-k*Lt).addScaledVector(jt,lt*Lt/Math.max(.3,Math.sin(o.pitch)))}function Oe(k){if(W){if(n.setPointerCapture?.(k.pointerId),ot.set(k.pointerId,{x:k.clientX,y:k.clientY,x0:k.clientX,y0:k.clientY,t0:performance.now()}),ot.size===1)nt={kind:"one",moved:!1,t:o.target.clone()};else if(ot.size===2){let[lt,ct]=[...ot.values()];nt={kind:"two",d0:Math.hypot(lt.x-ct.x,lt.y-ct.y),span:o.span,mid:{x:(lt.x+ct.x)/2,y:(lt.y+ct.y)/2},t:o.target.clone(),moved:!0}}}}function kt(k){let lt=ot.get(k.pointerId);if(!(!lt||!nt)){if(lt.x=k.clientX,lt.y=k.clientY,nt.kind==="one"&&ot.size===1){let ct=lt.x-lt.x0,Lt=lt.y-lt.y0;if(!nt.moved&&Math.hypot(ct,Lt)<8)return;nt.moved=!0,Ht(ct,Lt,nt.t),G(),M(),ee()}else if(nt.kind==="two"&&ot.size===2){let[ct,Lt]=[...ot.values()],ie=Math.hypot(ct.x-Lt.x,ct.y-Lt.y);o.span=nt.span*nt.d0/Math.max(20,ie);let jt={x:(ct.x+Lt.x)/2,y:(ct.y+Lt.y)/2};Ht(jt.x-nt.mid.x,jt.y-nt.mid.y,nt.t),G(),M(),ee()}}}function Jt(k){let lt=ot.get(k.pointerId);if(ot.delete(k.pointerId),lt&&nt&&nt.kind==="one"&&!nt.moved&&performance.now()-lt.t0<450&&ft){let ct=_t(k.clientX,k.clientY);ft(ct,k)}if(ot.size===0)nt=null;else if(ot.size===1){let ct=[...ot.values()][0];ct.x0=ct.x,ct.y0=ct.y,nt={kind:"one",moved:!0,t:o.target.clone()}}}let me=null,ee=()=>{me&&me()};function Be(k,lt=450){return $({yaw:o.yaw+k*Math.PI/2},lt)}function ke(k){W&&(k.preventDefault(),o.span*=Math.exp(k.deltaY*.0012),G(),M())}n.addEventListener("pointerdown",Oe),n.addEventListener("pointermove",kt),n.addEventListener("pointerup",Jt),n.addEventListener("pointercancel",k=>{ot.delete(k.pointerId),ot.size||(nt=null)}),n.addEventListener("wheel",ke,{passive:!1}),n.style.touchAction="none";let We=window.ResizeObserver?new ResizeObserver(x):null;return We&&n.parentElement?We.observe(n.parentElement):addEventListener("resize",x),T(e),{renderer:i,scene:s,camera:r,rig:o,limits:a,request:M,tween:z,finishTweens:X,hold:L,flyTo:$,rotateBy:Be,fitSpan:Y,toScreen:R,pickAt:_t,resize:x,setQuality:T,onUserMove(k){me=k},setInsets(k){Object.assign(b,k),E(),M()},get insets(){return{...b}},overrideCamera(k){v=k||null,M()},onResize(k){return _.add(k),()=>_.delete(k)},get quality(){return e},get size(){return{width:l,height:c}},setPickables(k){tt=k},onTap(k){ft=k},setInput(k){W=k,k||(ot.clear(),nt=null)},onFrame(k){return m.add(k),()=>m.delete(k)},onChange(k){return f.add(k),()=>f.delete(k)},dispose(){g=!0,p&&cancelAnimationFrame(p),We?.disconnect(),i.dispose()}}}var Cm={hall:[-5,5,-4,3.95,"#24433f"],booth:[-3,3,-7.2,-4.2,"#2c2f44"],north:[-7,9,-8.8,-7.2,"#2d3a3c"],west:[-7,-5.2,-7.2,3.95,"#2d3a3c"],lobby:[-7,9,3.95,8,"#26355a"],store:[5.2,9,-4,3.95,"#3a3328"]},Yr=[[-5.2,-.6,3.85,4.05],[.6,5.2,3.85,4.05],[5,5.2,-4,3.85],[-5.2,-5,-4,3.85],[-3.2,-3,-7,-4.2],[3,3.2,-7,-4.2],[-3.2,1.8,-7.2,-7],[2.6,3.2,-7.2,-7],[-7.2,9.2,-9,-8.8],[9,9.2,-8.8,8],[-7.2,-7,-8.8,8],[-7.2,9.2,8,8.2],[5.2,9,-4.2,-4],[5.2,7.1,3.85,4.05],[7.9,9,3.85,4.05]],Zr=[[-5.2,-3.2,-7.2,-4.2],[3.2,9,-7.2,-4.2]],vs=[-5.2,5.2,-4.2,-4],Jr={x0:-.25,x1:.25,y0:.85,y1:1.2},Ge={x0:-.6,x1:.6,z0:-3.3,z1:-2.7,h:.9},Ai={x0:-.55,x1:.55,z0:-3.25,z1:-2.75,y0:.9,y1:1.4},Lc={x0:-.22,x1:.22,z0:-3.2,z1:-2.8,y:.92},ui=[0,.94,-3],aa=[-.2,.2],Jn=[0,1.6,.3],hi=[1.2,0,-2.6],Ys=[[.8,0,-2],[1.8,1,-4.3],[7.55,.76,-8.3]],Xi=[1.2,0,-4.9],ed=[1.62,.9,-5.02],bs=[-1,0,-4.6],Rm=[-2.4,0,-6.8],Ti=[0,1,-4.3],Zs=[8,0,-8.3],Pc=[8.45,.9,-8.5],Im=[1.6,0,4.7],nd=[.95,1,4.05],Lm=[-.95,1,4.05],id=[-6.95,.9,6],Bn=[{id:"min",x:-1.8,band:"#7c9fd4",stripes:1},{id:"sera",x:-.6,band:"#839e4e",stripes:2},{id:"doyun",x:.6,band:"#c07fc0",stripes:3},{id:"yujin",x:1.8,band:"#52a660",stripes:4}],Ei=6.3,la={min:[0,0,4.6],sera:[7,0,0],doyun:[-6.1,0,1],yujin:[8,0,-8]},qi={lock:{ring:[.95,4.6],pick:[.95,.9,4.4],focus:[.2,.7,4.3]},fog:{ring:[0,.3],pick:[0,1.2,.3],focus:[.4,.8,-1.3]},drawer:{ring:[0,-3.65],pick:[0,1,-3.65],focus:[0,.9,-3.5]},cue:{ring:[1.2,-5.6],pick:[1.2,.8,-5.2],focus:[1.2,.7,-5]},audio:{ring:[6.6,-8],pick:[7.4,.8,-8],focus:[7.8,.7,-8]},poster:{ring:[-6.4,6],pick:[-6.8,1,6],focus:[-6.6,.8,6]}},sd=1.75,Dc={all:[-7.2,9.2,-9,8.2],hall:[-5.2,5.2,-4.2,4.6],back:[-3.2,9.2,-9,-4],lobby:[-7.2,9.2,3.9,8.2]},kn=.55,Nc=.92,Kr={half:1.4,ms:650,pitch:.92},Pm={yaw:0,pitch:.5,halfX:2.6,y0:-.8,y1:2.05,halfZ:.75};function DS(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"#fff"),e.addColorStop(.55,"#9a9a9a"),e.addColorStop(1,"#000"),t.fillStyle=e,t.fillRect(0,0,64,64),new zi(n)}function Dm(){return{solid:new rn({vertexColors:!0}),partition:new rn({vertexColors:!0}),drawer:new rn({vertexColors:!0}),doll:new rn({vertexColors:!0}),glass:new rn({color:"#bfe6dc",transparent:!0,opacity:.16,depthWrite:!1,side:on}),door:new rn({color:"#8fb8c4",transparent:!0,opacity:.24,depthWrite:!1,side:on}),shadow:new Ce({color:"#000000",transparent:!0,opacity:.5,alphaMap:DS(),depthWrite:!1}),pool:new Ce({vertexColors:!0,transparent:!0,blending:Vi,depthWrite:!1}),lens:new rn({color:"#d9c89a",emissive:"#2a2214"}),proxy:new Ce({visible:!1})}}var rd={opacity:.7,emissive:"#3a3428"};function od({opacity:n=.42,emissive:t="#000000"}={}){return new rn({vertexColors:!0,transparent:!0,opacity:n,emissive:t,depthWrite:!1})}function Js(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new vn;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(e){let u=0,d=[];for(let h=0;h<n.length;++h){let p=n[h].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Nm(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let y=0;y<o[u].length;++y)p.push(o[u][y][h]);let g=Nm(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Nm(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new cn(o,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<e;g++){let y=u.getComponent(h,g);a.setComponent(h+d,g,y)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Um=new qt,Om=new qt;function Uc(n,t,e){let i=n.index?n.toNonIndexed():n;i.attributes.uv&&i.deleteAttribute("uv"),i.clearGroups();let s=i.attributes.normal,r=i.attributes.position.count,o=new Float32Array(r*3);Um.set(t),Om.set(e||t);for(let a=0;a<r;a++){let l=e&&s.getY(a)>.9?Om:Um;o[a*3]=l.r,o[a*3+1]=l.g,o[a*3+2]=l.b}return i.setAttribute("color",new cn(o,3)),i}var Fm=new _e,Bm=new Wn,NS=new si,US=new V,OS=new V;function ad(n,{p:t=[0,0,0],r:e=[0,0,0],s:i=[1,1,1]}={}){return Bm.setFromEuler(NS.set(e[0],e[1],e[2])),Fm.compose(US.set(t[0],t[1],t[2]),Bm,OS.set(i[0],i[1],i[2])),n.applyMatrix4(Fm),n}function Rt(n,t,e,i,s,r,o,a){let l=new ri(t-n,i-e,r-s);return l.translate((n+t)/2,(e+i)/2,(s+r)/2),Uc(l,o,a)}function Ci(n,t,e,i,s){return ad(Uc(new ri(n,t,e),i),s)}function Ie(n,t,e,i,s,r,o){return ad(Uc(new Or(n,t,e,i),s,o),r)}function Oc(n,t,e){return ad(Uc(n,t),e)}var hn=class{constructor(){this.list=[]}add(...t){for(let e of t)e&&this.list.push(e);return this}merge(){if(!this.list.length)return null;let t=Js(this.list,!1);for(let e of this.list)e.dispose();return this.list=[],t.computeBoundingSphere(),t}};var FS='system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',Kn=(n,t=500)=>`${t} ${n}px ${FS}`;function jr(n,t){if(typeof document>"u")return null;let e=document.createElement("canvas");return e.width=n,e.height=t,e}function Qr(n){let t=new zi(n);return t.colorSpace=ln,t.anisotropy=4,t.minFilter=oi,t}function ld(n,t,e){let i=[],s="";for(let r of t.split(" ")){let o=s?s+" "+r:r;n.measureText(o).width>e&&s?(i.push(s),s=r):s=o}return s&&i.push(s),i}function zm(){let n=jr(1024,192);if(!n)return null;let t=n.getContext("2d");return t.fillStyle="rgba(180, 214, 202, 0.5)",t.font=Kn(108,600),t.textAlign="center",t.textBaseline="middle",t.fillText("\uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",512,100),Qr(n)}function Gm(){let n=jr(512,256);if(!n)return null;let t=n.getContext("2d"),e=(i,s,r)=>{t.fillStyle="#0f1a1a",t.fillRect(i,0,256,256),t.strokeStyle="#7fb3a6",t.lineWidth=4,t.strokeRect(i+6,6,244,244),t.fillStyle="#bfe3d6",t.font=Kn(30,700),t.textAlign="left",t.textBaseline="top",t.fillText(s,i+18,18),t.font=Kn(25);let o=66;for(let a of r)for(let l of ld(t,a,220))t.fillText(l,i+18,o),o+=32};return e(0,"\uC815\uBB38 \uC7A0\uAE08",["01:58 \uC7A0\uAE40 \xB7 \uBD09\uC778","\uBD09\uC778 \uBC88\uD638 \uB300\uC7A5\uACFC \uAC19\uC74C","\uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C","02:19 \uD655\uC778 \uD6C4 \uC5F4\uB9BC"]),e(256,"\uC21C\uCC30 \uD655\uC778",["30\uBD84\uB9C8\uB2E4 \uB204\uB984","02:00 \uCC28\uB840","02:09 \uB20C\uB9BC"]),Qr(n)}function Vm(){let n=jr(256,128);if(!n)return null;let t=n.getContext("2d");return t.fillStyle="#121a1c",t.fillRect(0,0,256,128),t.fillStyle="#d4e4e0",t.textAlign="center",t.textBaseline="middle",t.font=Kn(26,700),t.fillText("\uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D",128,40),t.font=Kn(26),t.fillText("\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9",128,88),Qr(n)}var km=[["\uC608\uC57D\uD45C","02:30 \uC790\uB3D9 \uC810\uAC80 1\uAC74"],["\uC2E4\uD589 \uAE30\uB85D","02:17:00 \uD050 1\uAC74"],["\uC2E4\uD589 \uBC29\uC2DD","\uC218\uB3D9"],["\uC785\uB825 \uC704\uCE58","\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94"],["\uC11C\uBA85","H.D.Y."],["\uD050 \uB0B4\uC6A9","\uC9C4\uC5F4\uB300 \uC870\uBA85 \uB0AE\uCDA4 + \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638"],["\uC6D0\uACA9 \uC811\uC18D","\uAE30\uB85D \uC5C6\uC74C"]];function Hm(){let n=jr(640,400);if(!n)return null;let t=n.getContext("2d");t.fillStyle="#0c1416",t.fillRect(0,0,640,400),t.strokeStyle="#3f5a58",t.lineWidth=2,t.fillStyle="#cfe7df",t.font=Kn(28),t.textBaseline="middle",t.textAlign="left";let e=52,i=18;return km.forEach(([s,r],o)=>{let a=i+o*e+e/2;t.fillText(s,20,a),t.fillText(r,168,a),t.beginPath(),t.moveTo(14,i+(o+1)*e),t.lineTo(626,i+(o+1)*e),t.stroke()}),t.beginPath(),t.moveTo(156,i),t.lineTo(156,i+e*km.length),t.stroke(),Qr(n)}function Wm(){let n=jr(512,256);if(!n)return null;let t=n.getContext("2d");for(let s=0;s<3;s++){let r=s*128;t.fillStyle="#e4ddcc",t.fillRect(r+8,8,112,112),t.fillStyle="#1b1f22",t.font=Kn(80,700),t.textAlign="center",t.textBaseline="middle",t.fillText(String(s+1),r+64,68)}t.fillStyle="#0c1416",t.fillRect(0,128,512,128),t.strokeStyle="#9fd0c0",t.lineWidth=2,t.font=Kn(22),t.fillStyle="#9fd0c0",t.textAlign="left";let e=7,i=()=>(e=e*16807%2147483647)/2147483647;for(let s=0;s<3;s++){let r=150+s*38;t.fillText(String(s+1),10,r),t.beginPath();for(let o=40;o<500;o+=4){let a=6*(i()-.5);o===40?t.moveTo(o,r+a):t.lineTo(o,r+a)}t.stroke()}return Qr(n)}function Xm(){let n=jr(420,500);if(!n)return null;let t=n.getContext("2d");t.fillStyle="#e9e4d8",t.fillRect(0,0,420,500),t.fillStyle="#2a2b2d",t.textAlign="left",t.textBaseline="top",t.font=Kn(36,700),t.fillText("\uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",28,30),t.fillStyle="#c8c2b4",t.fillRect(28,84,364,120),t.fillStyle="#2a2b2d",t.font=Kn(21,600),t.fillText("\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04 \u2014 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C",28,222),t.fillStyle="#7d7d7a",t.font=Kn(21,400);let e=270;for(let i of ld(t,"\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD",340))t.fillText(i,36,e),e+=28;t.fillStyle="#2f55b8",e+=10;for(let i of ld(t,"\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4",340))t.fillText(i,36,e),e+=28;return t.save(),t.translate(250,420),t.rotate(-.08),t.strokeStyle="#b3352d",t.lineWidth=5,t.strokeRect(-140,-38,280,76),t.fillStyle="#b3352d",t.font=Kn(22,700),t.textAlign="center",t.textBaseline="middle",t.fillText("\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815",0,-12),t.fillText("01:40",0,18),t.restore(),Qr(n)}var ca="#33403e",Km="#48625c",BS="#27312f",kS="#3a4744",qm="#59646a",Ym="#2b3236",to="#4d4234",zn=-.45;function eo(n,t,e){let i=new V(Xi[0],.84,Xi[2]-.02),s=new V(0,Math.cos(zn),Math.sin(zn)),r=new V(0,-Math.sin(zn),Math.cos(zn));return i.addScaledVector(new V(1,0,0),n).addScaledVector(r,t).addScaledVector(s,e)}function zS(){let n=new hn;n.add(Rt(-7.5,9.5,-.36,-.006,-9.3,8.5,"#0d1618","#121d20"));for(let[L,G,$,Y,A]of Object.values(Cm))n.add(Rt(L,G,-.02,0,$,Y,A));for(let[L,G,$,Y]of Yr)n.add(Rt(L,G,0,1.2,$,Y,ca,Km));for(let[L,G,$,Y]of Zr)n.add(Rt(L,G,0,1.2,$,Y,BS,kS));n.add(Rt(-.6,-.55,0,1.2,3.86,4.04,"#5b6466","#7a8688"),Rt(.55,.6,0,1.2,3.86,4.04,"#5b6466","#7a8688")),n.add(Rt(-.56,.56,.9,.97,4,4.03,"#d9cfb2"),Rt(-.06,.06,.85,1.02,4.02,4.04,"#e6dec6")),n.add(Rt(.77,1.13,.86,1.14,4.05,4.07,Ym)),n.add(Rt(-1.1,-.8,.84,1.14,4.05,4.07,Ym),Ie(.035,.035,.03,10,"#b9b1a2",{p:[-.95,.9,4.085],r:[Math.PI/2,0,0]}));let t=Ge,e=Ai,i=.012;n.add(Rt(t.x0,t.x1,0,t.h,t.z0,t.z1,"#4b5761","#5d6a72"));for(let L of[e.x0,e.x1])for(let G of[e.z0,e.z1])n.add(Rt(L-i,L+i,e.y0,e.y1,G-i,G+i,"#8c9aa0"));n.add(Rt(e.x0,e.x1,e.y1-i,e.y1+i,e.z1-i,e.z1+i,"#8c9aa0"));for(let L of[e.x0,e.x1])n.add(Rt(L-i,L+i,e.y1-i,e.y1+i,e.z0,e.z1,"#8c9aa0"));let[s,r,o]=Jn;n.add(Ie(.2,.22,.04,14,qm,{p:[s,.02,o]}),Ie(.035,.035,r-.05,8,qm,{p:[s,(r-.05)/2,o]})),n.add(Ci(.17,.13,.3,"#3c464c",{p:[s,r,o-.05]}),Ie(.045,.045,.06,10,"#161c20",{p:[s,r,o-.23],r:[Math.PI/2,0,0]}));let[a,,l]=hi;n.add(Rt(a-.25,a+.25,0,.36,l-.2,l+.2,"#56605c","#68726e"));let c=-a,u=(t.z0+t.z1)/2-l,d=Math.hypot(c,u),h=c/d,p=u/d;n.add(Ie(.045,.06,.26,10,"#7a8480",{p:[a+h*.3,.3,l+p*.3],r:[0,Math.atan2(p,-h),Math.PI/2]}));let[g,,y]=Xi;n.add(Rt(g-.6,g+.6,0,.78,y-.25,y+.25,"#3a4048","#4a525a"));let m=eo(0,0,0);n.add(Ci(1.2,.05,.44,"#2c3238",{p:[m.x,m.y,m.z],r:[zn,0,0]}));let f=eo(-.2,-.02,.027);n.add(Ci(.66,.006,.36,"#141b1e",{p:[f.x,f.y,f.z],r:[zn,0,0]}));let _=eo(.42,.08,.035);n.add(Ie(.035,.035,.03,10,"#b9b1a2",{p:[_.x,_.y,_.z],r:[zn,0,0]}));let[b,,v]=bs;n.add(Rt(b-.45,b+.45,.12,.74,v-.25,v+.25,"#3e4753","#4c5662"));for(let L of[-.36,.36])for(let G of[-.18,.18])n.add(Ie(.06,.06,.04,10,"#1d2226",{p:[b+L,.06,v+G],r:[0,0,Math.PI/2]}));let[E,,T]=Rm;n.add(Rt(E-.6,E-.57,0,1.1,T-.17,T+.17,to),Rt(E+.57,E+.6,0,1.1,T-.17,T+.17,to));for(let L of[.08,.5,.92])n.add(Rt(E-.57,E+.57,L,L+.03,T-.17,T+.17,to,"#5a4e3e"));n.add(Rt(E-.5,E-.15,.11,.32,T-.13,T+.13,"#3f4a50"),Rt(E+.05,E+.45,.53,.72,T-.13,T+.13,"#46504a"));let[x,,M]=Zs;n.add(Rt(x-.7,x+.7,.72,.76,M-.32,M+.28,"#4a4d52","#5a5e63"));for(let L of[-.65,.65])for(let G of[-.27,.23])n.add(Rt(x+L-.025,x+L+.025,0,.72,M+G-.025,M+G+.025,"#3a3d42"));n.add(Rt(x-.4,x+.2,.76,.81,M-.25,M+.05,"#262b30","#30363c"));let[O,C,U]=Pc;n.add(Ci(.34,.24,.03,"#2a2f34",{p:[O,C,U],r:[-.2,0,0]})),n.add(Rt(x-.23,x+.23,.42,.47,-7.9,-7.44,"#3b3f45","#474b51"),Rt(x-.23,x+.23,.47,.95,-7.44,-7.39,"#3b3f45"));for(let L of[-.2,.2])for(let G of[-7.87,-7.47])n.add(Rt(x+L-.02,x+L+.02,0,.42,G-.02,G+.02,"#2b2e33"));let[z,,X]=Im;n.add(Rt(z-.23,z+.23,.42,.47,X-.23,X+.23,"#3e4450","#4a5260"),Rt(z-.23,z+.23,.47,.92,X+.2,X+.25,"#3e4450"));for(let L of[-.2,.2])for(let G of[-.2,.2])n.add(Rt(z+L-.02,z+L+.02,0,.42,X+G-.02,X+G+.02,"#2b2e33"));n.add(Rt(-7,-6.94,.6,1.18,5.3,6.7,"#4a3f33","#5a4d3e"),Rt(-6.94,-6.93,.63,1.15,5.33,6.67,"#6b5a45")),n.add(Rt(-6.93,-6.925,.64,1.14,5.79,6.21,"#d9d4c8")),n.add(Rt(6.1,7.9,.8,.85,-2,-1.2,"#4a4f4a","#5a605a"));for(let L of[6.15,7.85])for(let G of[-1.95,-1.25])n.add(Rt(L-.025,L+.025,0,.8,G-.025,G+.025,"#363a36"));n.add(Rt(8.6,8.95,0,1.1,.5,.53,to),Rt(8.6,8.95,0,1.1,2.47,2.5,to));for(let L of[.1,.55,1])n.add(Rt(8.6,8.95,L,L+.03,.53,2.47,to,"#5a4e3e"));return n.add(Rt(8.65,8.9,.13,.33,.7,1.3,"#4d5550"),Rt(8.65,8.9,.58,.74,1.6,2.3,"#535a52")),n.merge()}function Zm(n,t,e=.004){let i=[];for(let[r,o,a,l]of n){let c=[[r,l,o,l,0,1],[o,a,r,a,0,-1],[o,l,o,a,1,0],[r,a,r,l,-1,0]];for(let[u,d,h,p,g,y]of c){let m=Math.hypot(h-u,p-d);if(m<.05)continue;let f=new un(m,t);f.rotateX(-Math.PI/2),f.rotateY(Math.atan2(g,y)),f.translate((u+h)/2+g*t/2,e,(d+p)/2+y*t/2),i.push(f)}}let s=Js(i,!1);return i.forEach(r=>r.dispose()),s}var cd=null;function GS(){if(cd||typeof document>"u")return cd;let n=document.createElement("canvas");n.width=4,n.height=64;let t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,64);return e.addColorStop(0,"rgba(0,0,0,0.42)"),e.addColorStop(.45,"rgba(0,0,0,0.16)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,4,64),cd=new zi(n)}function Jm(n){let t=n.map(([i,s,r,o])=>{let a=new zs(r,28);a.rotateX(-Math.PI/2),a.translate(i,.014,s);let l=a.attributes.position.count,c=new Float32Array(l*3),u=new qt(o);return c[0]=u.r,c[1]=u.g,c[2]=u.b,a.setAttribute("color",new cn(c,3)),a}),e=Js(t,!1);return t.forEach(i=>i.dispose()),e}function $m(n){let t=new De;t.name="static";let e=new Bt(zS(),n.solid);e.name="solid",t.add(e);let[i,s,r,o]=vs,a=new Bt(Rt(i,s,0,1.2,r,o,ca,Km),n.partition);a.name="partition",t.add(a);let l=Ai,c=l.x1-l.x0,u=l.y1-l.y0,d=l.z1-l.z0,h=(l.x0+l.x1)/2,p=(l.y0+l.y1)/2,g=(l.z0+l.z1)/2,y=[new un(c,u).translate(h,p,l.z1),new un(d,u).rotateY(Math.PI/2).translate(l.x0,p,g),new un(d,u).rotateY(Math.PI/2).translate(l.x1,p,g),new un(c,d).rotateX(-Math.PI/2).translate(h,l.y1,g)],m=new Bt(Js(y,!1),n.glass);m.name="cover",m.renderOrder=2,t.add(m),y.forEach(R=>R.dispose());let f=new Bt(new un(1.1,1.2).translate(0,1.2/2,3.95),n.door);f.name="door",f.renderOrder=2,t.add(f);let _=new De;_.name="drawer";let b=new Bt(Rt(l.x0,l.x1,l.y0,l.y1,Ge.z0-.02,Ge.z0+.03,"#45525a","#52606a"),n.drawer),v=Lc,E=new Bt(Rt(v.x0,v.x1,v.y-.02,v.y+.01,v.z0,v.z1,"#6a706c","#7d837e"),n.drawer);_.add(b,E),t.add(_);let T=new Bt(new hn().add(Ie(.1,.12,.14,16,"#ffffff",{p:[0,.07,0]}),Ie(.07,.1,.05,16,"#ffffff",{p:[0,.165,0]})).merge(),n.lens);T.position.set(ui[0],ui[1],ui[2]),T.visible=!1,T.name="lens",t.add(T);let x=zm(),M=new Bt(new un(6,1.125).rotateX(-Math.PI/2).translate(0,.004,2.3),new Ce({map:x,transparent:!0,depthWrite:!1}));M.visible=!!x,M.name="floorText",t.add(M);let O=Ge,[C,,U]=Xi,[z,,X]=hi,L=GS();if(L){let R=new Ce({map:L,transparent:!0,depthWrite:!1}),D=new Bt(Js([Zm([...Yr,...Zr,vs],.3),Zm([[O.x0,O.x1,O.z0,O.z1],[C-.6,C+.6,U-.25,U+.25],[z-.25,z+.25,X-.2,X+.2]],.18,.005)],!1),R);D.name="ao",D.renderOrder=1,t.add(D)}let G=new Bt(Jm([[0,4.4,1.3,"#1c2a36"],[Xi[0],-5.2,1,"#222c36"],[Zs[0],-8,1.1,"#2a2a1e"],[-6.4,6,.9,"#262218"],[0,6.4,3,"#1a2030"],[7,0,1.6,"#1a1e18"]]),n.pool);G.name="pools",t.add(G);let $=new Bt(Jm([[0,-3,1.8,"#4a3a22"]]),n.pool.clone());$.name="displayPool",t.add($);let Y=new hn().add(Rt(-5.2,5.2,1.2,3.6,-4.2,-4,ca),Rt(5,5.2,1.2,3.6,-4.2,4.05,ca),Rt(-5.2,-5,1.2,3.6,-4.2,4.05,ca)).merge(),A=new Bt(Y,n.solid);return A.visible=!1,A.name="cctvWalls",t.add(A),{root:t,solid:e,partition:a,cover:m,door:f,drawer:_,panel:b,plate:E,lens:T,floorText:M,pools:G,displayPool:$,cctvWalls:A}}var Yi="#c9c2b4",VS="#ece6da",Cn={step:.4,stepMs:400,nodMs:1200,nodAngle:.22,shortNodMs:500,shortNodAngle:.12,breathAmp:.008,breathPeriod:4,phaseStep:1},fd=.92,HS=.56,jm=1.9,ud=null;function WS(){if(ud)return ud;let n=new hn;n.add(Rt(-.17,.17,-.1,.05,-.11,.11,Yi));for(let t of[-.09,.09])n.add(Rt(t-.065,t+.065,-.88,-.06,-.08,.08,Yi)),n.add(Rt(t-.065,t+.065,-.92,-.86,-.08,.15,Yi));return ud=n.merge()}function XS(n,t){n.add(Oc(qS(),Yi,{p:[0,.27,0],s:[1,1,.62]})),n.add(Ie(.05,.05,.1,12,Yi,{p:[0,.56,0]}));for(let e of[-.25,.25])n.add(Ie(.05,.045,.5,12,Yi,{p:[e,.24,0]})),n.add(Oc(new qn(.055,12,8),t,{p:[e,-.04,.01]}))}var qS=()=>new hn().add(Ie(.2,.17,.52,16,Yi)).merge();function YS(n,t,e){n.add(Ie(.064,.064,.14,12,t,{p:[.25,.36,0]}));for(let i=0;i<e;i++)n.add(Ie(.067,.067,.014,12,VS,{p:[.25,.29+(i+1)*.14/(e+1),0]}))}function ZS(n){let t=new hn;return XS(t,Yi),YS(t,n.band,n.stripes),t.merge()}function JS(n){let t=new hn;return t.add(Oc(new qn(.13,20,14),Yi,{p:[0,.15,0]})),t.merge()}var hd=new Map;function KS(n){return hd.has(n.id)||hd.set(n.id,{lower:WS(),upper:ZS(n),head:JS(n)}),hd.get(n.id)}var dd=null;function Fc(n,t,{shadow:e,proxy:i}={}){let s=KS(n),r=new De;r.name="doll:"+n.id;let o=new Bt(s.lower,t);o.position.y=fd;let a=new Bt(s.upper,t);a.position.y=fd;let l=new Bt(s.head,t);if(l.position.y=HS,a.add(l),r.add(o,a),e){dd=dd||new zs(.32,20).rotateX(-Math.PI/2).translate(0,.012,0);let c=new Bt(dd,e);c.renderOrder=1,r.add(c)}if(i){let c=new Bt(i.geometry,i.material);c.position.y=.9,c.userData.pick="p:"+n.id,r.add(c),r.userData.proxy=c}return r.position.set(n.x,0,Ei),{id:n.id,p:n,root:r,lower:o,upper:a,head:l,material:t}}function pd(n,t){n.lower.rotation.x=t?-Math.PI/2:0,n.root.position.y=t?.47-fd+.08:0}var Ks=["lock","fog","drawer","cue","audio","poster"],di={color:{new:"#efb761",seen:"#8fc9bd",asked:"#8fc9bd",closed:"#6b7378"},pulsePeriod:2.4,pulseAmp:.07,selectedScale:1.15,proxyRadius:.7,ringY:.022},Ze=new Ye,Qm=new qt;function t0(n){let t=new De;t.name="spots";let e=[...Ks.map(p=>"e:"+p),...Bn.map(p=>"p:"+p.id)],i=p=>p[0]==="e"?qi[p.slice(2)].ring:[Bn.find(g=>"p:"+g.id===p).x,Ei],s=new Fr(.42,.5,40).rotateX(-Math.PI/2),r=new bi(s,new Ce({transparent:!0,opacity:.9,depthWrite:!1}),e.length);r.instanceMatrix.setUsage(Hr),r.renderOrder=3,r.name="rings";let o=new Fr(.34,.62,40).rotateX(-Math.PI/2),a=new bi(o,new Ce({color:di.color.new,transparent:!0,opacity:.95,depthWrite:!1}),e.length);a.count=0,a.visible=!1,a.renderOrder=4,a.name="accuse";let l=new bi(new zo(.11,0),new Ce({}),Ks.length);l.instanceMatrix.setUsage(Hr),l.name="beacons",t.add(r,a,l);let c=new qn(di.proxyRadius,8,6),u=[];for(let p of Ks){let g=new Bt(c,n.proxy);g.position.fromArray(qi[p].pick),g.userData.pick="e:"+p,t.add(g),u.push(g)}let d={marks:{},selected:null,accuse:null};function h(p=0,g=!1){let y=g?1+di.pulseAmp*Math.sin(2*Math.PI*p/di.pulsePeriod):1;e.forEach((f,_)=>{let b=d.marks[f]||"closed",v=(f===d.selected?di.selectedScale:1)*(b==="new"?y:1),[E,T]=i(f);if(Ze.position.set(E,di.ringY,T),Ze.rotation.set(0,0,0),Ze.scale.set(v,1,v),Ze.updateMatrix(),r.setMatrixAt(_,Ze.matrix),r.setColorAt(_,Qm.set(di.color[b]||di.color.closed)),_<Ks.length){let[x,,M]=qi[Ks[_]].pick;Ze.position.set(x,sd,M),Ze.rotation.set(0,g?p*.6:.4,0),Ze.scale.set(v,v,v),Ze.updateMatrix(),l.setMatrixAt(_,Ze.matrix),l.setColorAt(_,Qm)}}),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0;let m=d.accuse?[d.accuse.person?"p:"+d.accuse.person:null,...(d.accuse.proof||[]).map(f=>"e:"+f)].filter(Boolean):[];a.count=m.length,a.visible=m.length>0,m.forEach((f,_)=>{let[b,v]=i(f);Ze.position.set(b,di.ringY+.002,v),Ze.rotation.set(0,0,0),Ze.scale.set(1,1,1),Ze.updateMatrix(),a.setMatrixAt(_,Ze.matrix)}),a.instanceMatrix.needsUpdate=!0}return h(),{root:t,rings:r,bold:a,beacons:l,proxies:u,ids:e,set(p,g,y){d.marks=p||{},d.selected=g||null,d.accuse=y||null,h()},animate(p){h(p,!0)},still(){h(0,!1)},anyNew(){return Object.values(d.marks).includes("new")},labelPoint(p){let[g,,y]=qi[p].pick;return new V(g,sd+.22,y)},dispose(){s.dispose(),o.dispose(),c.dispose(),l.geometry.dispose(),r.material.dispose(),a.material.dispose(),l.material.dispose()}}}var Bc=1.3;function e0(){let n=new hn().add(Ie(.14,.16,.03,12,"#5a6266",{p:[0,.015,0]}),Ie(.018,.018,Bc,6,"#b9b4a8",{p:[0,Bc/2,0]}),Ci(.34,.2,.012,"#d6cfbd",{p:[.17,Bc-.11,0]})).merge(),t=new bi(n,new rn({vertexColors:!0}),4);t.count=0,t.visible=!1,t.name="pins";let e=[];return{mesh:t,set(i){e=Bn.map(s=>s.id).filter(s=>(i||[]).includes(s)),t.count=e.length,t.visible=e.length>0,e.forEach((s,r)=>{Ze.position.fromArray(la[s]),Ze.rotation.set(0,0,0),Ze.scale.set(1,1,1),Ze.updateMatrix(),t.setMatrixAt(r,Ze.matrix)}),t.instanceMatrix.needsUpdate=!0},shown(){return e},labelPoint(i){let[s,,r]=la[i];return new V(s,Bc+.08,r)},dispose(){n.dispose(),t.material.dispose()}}}var $S=400;function $s(n,t,e=[0,0,1,1]){let i=new un(n,t),s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,e[0]+s.getX(r)*(e[2]-e[0]),e[1]+s.getY(r)*(e[3]-e[1]));return i}var ua=n=>new Ce({map:n,color:n?"#ffffff":"#20282a",transparent:!0,opacity:0,depthWrite:!1}),n0=()=>new rn({vertexColors:!0,transparent:!0,opacity:0});function jS(){let n=Gm(),t=new De,e=new Bt($s(.34,.26,[0,0,.5,1]).translate(nd[0],nd[1],4.074),ua(n)),i=new Bt($s(.26,.17,[.5,0,1,1]).translate(Lm[0],1.065,4.074),e.material);return t.add(e,i),{g:t,mats:[e.material],textures:[n]}}function QS(){let n=new De,t=3.2,e=t*Math.tan(25*Math.PI/180),i=new ps(e,t,20,1,!0).rotateX(-Math.PI/2).translate(0,0,t/2),s=new Ce({color:"#9fd6e0",transparent:!0,opacity:0,depthWrite:!1,side:on}),r=new Bt(i,s);r.position.set(Jn[0],Jn[1],Jn[2]-.2),r.lookAt(0,1.1,(Ge.z0+Ge.z1)/2),r.userData.maxOpacity=.13,r.renderOrder=5;let o=Vm(),a=new Bt($s(.4,.2).rotateX(-Math.PI/2).translate(hi[0],.366,hi[2]),ua(o));return n.add(r,a),{g:n,mats:[s,a.material],textures:[o],cone:r}}function tM(){let n=new hn,t=Ai,e=Ge.z0-.03,i="#151a1c",s="#8d969a",r="#a8322a";n.add(Rt(t.x0,t.x1,t.y0-.006,t.y0+.006,e-.006,e,i),Rt(t.x0,t.x1,t.y1-.006,t.y1+.006,e-.006,e,i));for(let g of[t.x0,t.x1])n.add(Rt(g-.006,g+.006,t.y0,t.y1,e-.006,e,i));n.add(Rt(t.x0-.01,t.x1+.01,t.y0-.012,t.y0-.002,Ge.z0-.03,Ge.z0+.002,"#0b0e10"));for(let g of aa)n.add(Rt(g-.012,g+.012,.875,.895,-4,Ge.z0-.03,s,"#a7b0b4"));let o=Jr;for(let[g,y]of[[-4,-3.992],[-4.208,-4.2]])n.add(Rt(o.x0,o.x1,o.y0,o.y1,g,y,"#2a3134")),n.add(Rt(o.x0-.012,o.x0,o.y0,o.y1,g-.002,y+.002,"#7d8a8c"),Rt(o.x1,o.x1+.012,o.y0,o.y1,g-.002,y+.002,"#7d8a8c")),n.add(Rt(o.x0,o.x1,o.y0-.012,o.y0,g-.002,y+.002,"#7d8a8c"));let[a,l,c]=Ti;n.add(Rt(a-.09,a+.09,l-.015,l+.015,c-.035,c-.005,"#a9b2b5"));for(let g of[-.075,.075])n.add(Rt(a+g-.012,a+g+.012,l-.012,l+.012,c-.005,-4.2,"#a9b2b5"));let u=11,d=()=>(u=u*16807%2147483647)/2147483647;for(let g=0;g<18;g++){let y=aa[g%2]+(d()-.5)*.12,m=-3.4-d()*.55,f=.012+d()*.014,_=g<6?.895:0;n.add(Rt(y-f,y+f,_,_+.004,m-f,m+f,r))}let h=n0(),p=new De;return p.add(new Bt(n.merge(),h)),{g:p,mats:[h],textures:[]}}function eM(){let n=Hm(),t=new De,e=eo(-.2,-.02,.032),i=new V(0,Math.cos(zn),Math.sin(zn)),s=new V(0,-Math.sin(zn),Math.cos(zn)),r=new _e().makeBasis(new V(-1,0,0),s,i).setPosition(e),o=new Bt($s(.64,.4).applyMatrix4(r),ua(n)),a=eo(.42,.08,.04),l=new Ce({color:"#e8f0ea",transparent:!0,opacity:0,depthWrite:!1}),c=new Bt(new Go(.06,.009,6,24),l);return c.position.copy(a),c.rotation.x=zn-Math.PI/2,t.add(o,c),{g:t,mats:[o.material,l],textures:[n],ring:c}}function nM(){let n=new hn,t="#2f3438",e="#7c8487",[i,,s]=Ys[0];n.add(Ie(.12,.14,.03,12,t,{p:[i,.015,s]}),Ie(.012,.012,1.25,6,t,{p:[i,.64,s]})),n.add(Ie(.032,.026,.13,10,e,{p:[i-.03,1.29,s-.05],r:[-1.1,0,.35]}));let[r,o,a]=Ys[1];n.add(Rt(r-.04,r+.04,o-.06,o+.06,-4.24,-4.2,t)),n.add(Ie(.03,.026,.12,10,e,{p:[r,o,a-.02],r:[Math.PI/2,0,0]}));let[l,c,u]=Ys[2];n.add(Ie(.05,.06,.02,10,t,{p:[l,c+.01,u]}),Ie(.008,.008,.24,6,t,{p:[l,c+.13,u]})),n.add(Ie(.026,.022,.1,10,e,{p:[l,c+.27,u+.03],r:[1,0,0]}));let d=n0(),h=new Bt(n.merge(),d),p=Wm(),g=[];[[i,1.5,s],[r,1.36,a],[l,c+.46,u]].forEach(([E,T,x],M)=>g.push($s(.14,.14,[M/4,.5,(M+1)/4,1]).rotateY(kn).translate(E,T,x)));let[m,f,_]=Pc;g.push($s(.3,.075,[0,0,1,.5]).rotateX(-.2).translate(m,f,_+.02));let b=new Bt(new hn().add(...g).merge(),ua(p)),v=new De;return v.add(h,b),{g:v,mats:[d,b.material],textures:[p]}}function iM(){let n=Xm(),t=new De,e=new Bt($s(.42,.5).rotateY(Math.PI/2).translate(-6.918,.89,6),ua(n));return t.add(e),{g:t,mats:[e.material],textures:[n]}}function i0(){let n=new De;n.name="details";let t={lock:jS(),fog:QS(),drawer:tM(),cue:eM(),audio:nM(),poster:iM()};for(let[r,o]of Object.entries(t)){o.g.name="detail:"+r,o.g.visible=!1,o.level=0,n.add(o.g);for(let a of o.mats)a.userData.maxOpacity==null&&(a.userData.maxOpacity=1)}t.fog.mats[0].userData.maxOpacity=.13;function e(r,o){r.level=o,r.g.visible=o>.001;for(let a of r.mats)a.opacity=o*a.userData.maxOpacity}let i=new Set,s=!1;return{root:n,parts:t,set(r,{tween:o,instant:a}){i=new Set(r||[]);for(let[l,c]of Object.entries(t)){let u=s||i.has(l)?1:0;if(u===c.level)continue;if(!u||a){e(c,u);continue}let d=c.level;o($S,h=>e(c,d+(u-d)*h))}},force(r,o){s=r,this.set([...i],o)},hideAll(r){n.visible=!r},unlocked(){return[...i]},dispose(){for(let r of Object.values(t))r.textures.forEach(o=>o?.dispose()),r.mats.forEach(o=>o.dispose()),r.g.traverse(o=>o.geometry?.dispose())}}}var s0=2;function r0(n){let t=new Wo("#8fb0d8","#1c2426",.75*s0),e=new qo("#fff1dc",1.5*s0);return e.position.set(.55*12,.8*12,.23*12),n.add(t,e,e.target),{hemi:t,sun:e}}function o0(){let n=new Yn({uniforms:{uColor:{value:new qt("#000000")},uOpacity:{value:0}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uOpacity; void main(){ gl_FragColor = vec4(uColor, uOpacity); }",transparent:!0,depthTest:!1,depthWrite:!1}),t=new Bt(new un(2,2),n);return t.frustumCulled=!1,t.renderOrder=1e3,t.visible=!1,t.name="overlay",{mesh:t,get value(){return n.uniforms.uOpacity.value},set(e,i){i&&n.uniforms.uColor.value.set(i),n.uniforms.uOpacity.value=e,t.visible=e>.001},color(){return"#"+n.uniforms.uColor.value.getHexString()},dispose(){t.geometry.dispose(),n.dispose()}}}function a0(n=44){let t=new ko(1,1),e=new rn({color:"#e8eef0",emissive:"#5a6466",transparent:!0,opacity:0,depthWrite:!1}),i=new bi(t,e,n);i.instanceMatrix.setUsage(Hr),i.visible=!1,i.name="fog",i.renderOrder=6;let s=3,r=()=>(s=s*16807%2147483647)/2147483647,o=Array.from({length:n},()=>({x:(r()-.5)*2.8,y:.3+r()*1.3,z:-3+(r()-.5)*2.2,s:.25+r()*.35,ph:r()*6.28,sp:.3+r()*.5})),a=new Ye;function l(u,d=1){o.forEach((h,p)=>{a.position.set(h.x+.15*Math.sin(u*h.sp+h.ph),h.y+.08*Math.sin(u*h.sp*.7+h.ph),h.z+.12*Math.cos(u*h.sp+h.ph));let g=h.s*(.6+.4*d);a.scale.set(g,g*.8,g),a.updateMatrix(),i.setMatrixAt(p,a.matrix)}),i.instanceMatrix.needsUpdate=!0}l(0);let c=0;return{mesh:i,get level(){return c},set(u,d=0){c=u,e.opacity=.55*u,i.visible=u>.001,l(d,u)},animate(u){i.visible&&l(u,c)},dispose(){t.dispose(),e.dispose()}}}var kc={color:"#ffe2a8",opacity:.55,pad:.03,grow:.06};function l0(n,[t,e,i,s,r,o]){let a=kc.pad,l=new Ce({color:kc.color,transparent:!0,opacity:0,blending:Vi,depthWrite:!1}),c=new Bt(new ri(e-t+a*2,s-i+a*2,o-r+a*2),l);return c.position.set((t+e)/2,(i+s)/2,(r+o)/2),c.renderOrder=7,c.visible=!1,n.add(c),{mesh:c,set(u){l.opacity=kc.opacity*u,c.scale.setScalar(1+kc.grow*u),c.visible=u>.001},remove(){n.remove(c),c.geometry.dispose(),l.dispose()}}}function c0(){let n=new ps(.9,3.4,20,1,!0).rotateZ(Math.PI/2).translate(1.7,0,0),t=new Ce({color:"#ffcf7a",transparent:!0,opacity:0,blending:Vi,depthWrite:!1,side:on}),e=new Bt(n,t);return e.visible=!1,e.renderOrder=8,{mesh:e,set(i){t.opacity=.22*i,e.visible=i>.001},dispose(){n.dispose(),t.dispose()}}}function u0(){let n=new ps(1,3.2,20,1,!0).translate(0,1.6,0),t=new Ce({color:"#fff0cc",transparent:!0,opacity:0,blending:Vi,depthWrite:!1,side:on}),e=new Bt(n,t);return e.visible=!1,e.renderOrder=1001,e.position.set(0,0,-3),{mesh:e,set(i){t.opacity=.35*i,e.visible=i>.001},dispose(){n.dispose(),t.dispose()}}}var Zi={fov:50,baseAspect:4/3,filter:"grayscale(1) contrast(1.15) brightness(1.05)",look:[0,1.05,(Ge.z0+Ge.z1)/2]};function h0(n){let t=new wn(Zi.fov,1,.05,40);t.position.set(Jn[0],Jn[1],Jn[2]-.3),t.lookAt(Zi.look[0],Zi.look[1],Zi.look[2]);let e=!1,i=null,s=n.renderer?.domElement;function r(){let{width:o,height:a}=n.size,l=n.insets||{top:0,bottom:0,left:0,right:0};t.aspect=o/Math.max(1,a);let c=Math.tan(Zi.fov*Math.PI/360);t.fov=t.aspect>Zi.baseAspect?Math.atan(c*Zi.baseAspect/t.aspect)*360/Math.PI:Zi.fov;let u=-(l.left-l.right)/2,d=-(l.top-l.bottom)/2;u||d?t.setViewOffset(o,a,u,d,o,a):t.clearViewOffset(),t.updateProjectionMatrix(),t.updateMatrixWorld()}return{camera:t,get on(){return e},enter(){e||(e=!0,t.zoom=1,r(),i=n.onResize(()=>{r()}),s&&(s.style.filter=Zi.filter),n.overrideCamera(t))},exit(){e&&(e=!1,i?.(),i=null,t.zoom=1,s&&(s.style.filter=""),n.overrideCamera(null))},refit(){e&&(r(),n.request())},get zoom(){return t.zoom},setZoom(o){t.zoom=o,t.updateProjectionMatrix(),n.request()}}}var sM=.42,rM=.35,js={minMs:1e3,margin:.88,baseMargin:1.04,share:.5},md=-(Lc.z0-(vs[3]+.02)),oM=n=>Bn.find(t=>t.id===n);function aM(n){let t=new Set,e=!1,i=n.reduced();return{reduced:i,get stopped(){return e},wait(s){if(e)return Promise.resolve();let r=i?Math.min(s,100):s;return new Promise(o=>{let a={res:o,t:setTimeout(()=>{t.delete(a),o()},r)};t.add(a)})},tw(s,r){return e||i?(r(1),n.stage.request(),Promise.resolve()):n.stage.tween(s,r)},fly(s,r=900){return n.stage.flyTo(s,e||i?0:r)},stop(){e=!0;for(let s of t)clearTimeout(s.t),s.res();t.clear(),n.stage.finishTweens()}}}function d0(n){let t=null,e=null,i=null,s={on:!1,ghosts:{},extras:[],beamHold:null,beamTimer:0},r=Promise.resolve(),o=0;function a(A,R,D){t||(n.savedYaw=n.stage.rig.yaw),l();let H=++o,tt=r.then(async()=>{if(H!==o)return;let ft=aM(n);t=ft,e=A,n.stage.setInput(!1);let W=/^(ev|story):/.test(A);W&&(n.spots.root.visible=!1);let ot=nt=>{try{D?.(nt)}catch(_t){console.error(_t)}};try{await R(ft,ot)}finally{W&&(n.spots.root.visible=!s.on),t===ft&&(t=null,e=null,n.stage.setInput(!0)),n.stage.request(),n.kick()}});return r=tt.catch(ft=>console.error(ft)),tt}function l(){t&&t.stop()}let c=[],u=A=>{let R=l0(n.fxRoot,A);return c.push(R),R},d=()=>{for(;c.length;)c.pop().remove()};async function h(A,R,D=1,H=350,tt=350){for(let ft=0;ft<D;ft++)await A.tw(H,W=>R.set(W)),await A.tw(tt,W=>R.set(1-W))}function p(A){let R=od(rd);R.opacity=0;let D=Fc(oM(A),R,{});return D.root.visible=!1,n.ghostRoot.add(D.root),D.fade=H=>{R.opacity=rd.opacity*H,D.root.visible=H>.001},D.remove=()=>{n.ghostRoot.remove(D.root),R.dispose()},D}async function g(A,R,D,H=1.1){for(let[tt,ft]of D){let W=R.root.position.x,ot=R.root.position.z,nt=Math.hypot(tt-W,ft-ot);nt<.001||(R.root.rotation.y=Math.atan2(tt-W,ft-ot),await A.tw(nt/H*1e3,_t=>{R.root.position.x=W+(tt-W)*_t,R.root.position.z=ot+(ft-ot)*_t}))}}let y=(A,R,D)=>{A.root.rotation.y=Math.atan2(R,D)};function m(A,R,D,H=900){return A.shot={box:R,opts:D,margin:D.margin??js.baseMargin},A.fly(n.poseBox(R,D),H)}function f(A,R){if(R<js.minMs||A.reduced||A.stopped)return A.wait(R);if(n.cctv.on){let H=n.cctv.zoom,tt=H+(js.baseMargin/js.margin-H)*js.share;return A.tw(R,ft=>n.cctv.setZoom(H+(tt-H)*ft))}if(!A.shot)return A.wait(R);let D=A.shot.margin+(js.margin-A.shot.margin)*js.share;return A.shot.margin=D,A.fly(n.poseBox(A.shot.box,{...A.shot.opts,margin:D}),R)}let _=Ai,b=Jr,v={"ev:lock":async(A,R)=>{let D=u([-.58,.58,.88,1.04,3.99,4.05]),H=u([.77,1.13,.86,1.14,4.04,4.08]),tt=u([-.56,.56,0,1.2,3.92,3.98]),ft=u([-1.1,-.8,.84,1.14,4.04,4.1]);try{await m(A,[-1.5,1.5,0,1.3,3.6,5],{yaw:.3,pitch:.75}),R("locked"),await A.tw(500,W=>{H.set(W),D.set(W)}),await f(A,900),await A.tw(400,W=>{H.set(1-W),D.set(1-W)}),R("opened"),await A.tw(500,W=>tt.set(W)),await f(A,800),await A.tw(400,W=>tt.set(1-W)),R("seal"),await h(A,D,2),R("patrol"),await A.tw(500,W=>ft.set(W)),await f(A,700),await A.tw(400,W=>ft.set(1-W)),R("late"),await h(A,ft,1,500,500),await f(A,300)}finally{d(),await n.restFocus("lock",A)}},"ev:fog":async(A,R)=>{let D=n.S,H=p("sera"),tt=n.stage.hold(),ft={overlay:n.overlay.value,color:n.overlay.color()};n.cctv.enter(),D.cctvWalls.visible=!0,n.details.hideAll(!0),n.spots.root.visible=!1,n.pins.mesh.visible=!1,n.dollRoot.visible=!1,n.overlay.set(0),D.lens.position.fromArray(ui),D.lens.visible=!0;try{H.root.position.set(1.5,0,-1.9),H.fade(1),R("0152"),await g(A,H,[[.95,-3],[.95,-3.65],[.15,-3.65]],1.6),y(H,0,1),await A.tw(600,W=>{H.upper.rotation.x=1.25*W}),await f(A,600),await A.tw(500,W=>{H.upper.rotation.x=1.25*(1-W)}),await g(A,H,[[.95,-3.65],[.95,-3],[1.6,-1.8]],1.6),await A.tw(300,W=>H.fade(1-W)),R("021659"),await f(A,1e3),R("021700"),await A.tw(450,W=>{n.fog.set(W,performance.now()/1e3),n.overlay.set(W,"#ffffff")}),D.lens.visible=!1,await f(A,1600),R("021708"),await A.tw(800,W=>{n.overlay.set(1-W,"#ffffff"),n.fog.set(1-W,performance.now()/1e3)}),await f(A,700),R("device"),await f(A,1100)}finally{H.remove(),tt(),n.fog.set(0),D.lens.visible=!1,D.cctvWalls.visible=!1,n.overlay.set(ft.overlay,ft.color),n.details.hideAll(!1),n.spots.root.visible=!0,n.pins.mesh.visible=n.pins.shown().length>0,n.dollRoot.visible=!0,n.cctv.exit()}},"ev:drawer":async(A,R)=>{let D=n.S,H=new Bt(D.plate.geometry,od());H.material.opacity=0,H.visible=!1,n.fxRoot.add(H);let tt=u([_.x0,_.x1,_.y0,_.y1,_.z0,_.z1]),ft=u([Ti[0]-.12,Ti[0]+.12,Ti[1]-.06,Ti[1]+.06,-4.32,-4.2]),W=u([b.x0,b.x1,b.y0,b.y1,-3.995,-3.96]),ot=u([-.24,.24,.86,.91,-4,Ge.z0-.02]),nt=u([-.3,.3,0,.03,-3.98,-3.35]);try{await Promise.all([m(A,[-1.3,1.3,0,1.4,-4.3,-2.6],{yaw:-2.3,pitch:.82}),A.tw(500,_t=>n.setPartition(1-.72*_t))]),R("cover"),await h(A,tt,1,500,700),R("slide"),H.position.set(0,0,0),await A.tw(300,_t=>{H.material.opacity=sM*_t,H.visible=!0}),await A.tw(1200,_t=>{H.position.z=md*_t}),await f(A,300),await A.tw(1100,_t=>{H.position.z=md+(-.03-md)*_t}),await f(A,500),R("handle"),await h(A,ft,1,500,700),R("nohandle"),await h(A,W,1,500,700),R("wax"),await A.tw(500,_t=>{ot.set(_t),nt.set(_t)}),await f(A,800),await A.tw(500,_t=>{ot.set(1-_t),nt.set(1-_t)})}finally{n.fxRoot.remove(H),H.material.dispose(),d(),n.setPartition(1),await n.restFocus("drawer",A)}},"ev:cue":async(A,R)=>{let D=u([.62,1.38,.8,1.02,-5.12,-4.86]),H=u([1.54,1.7,.86,.98,-5.1,-4.98]);try{await m(A,[.3,2.1,0,1,-5.5,-4.4],{yaw:Math.PI,pitch:1}),R("schedule"),await h(A,D,1,400,600),await f(A,400),R("run"),await f(A,1500),R("sign"),await h(A,H,1,450,650),await f(A,400),R("bundle"),await f(A,1500),R("remote"),await f(A,1400)}finally{d(),await n.restFocus("cue",A)}},"ev:audio":async(A,R)=>{let D=u([8.28,8.62,.78,1.02,-8.56,-8.4]),H=[u([.66,.94,1.15,1.6,-2.14,-1.86]),u([1.68,1.92,.92,1.46,-4.42,-4.18]),u([7.44,7.66,.78,1.26,-8.42,-8.18])];try{await m(A,[6.9,9.1,0,1.2,-8.9,-7.1],{yaw:kn,pitch:.92}),R("0210"),await h(A,D,1,400,600),R("channels"),await m(A,[-.2,9.1,0,1.5,-8.9,-1.6],{yaw:kn,pitch:.92});for(let tt of H)await h(A,tt,1,300,450);R("021700"),await A.tw(400,tt=>H.forEach(ft=>ft.set(.6*tt))),await f(A,700),await A.tw(400,tt=>H.forEach(ft=>ft.set(.6*(1-tt)))),R("021703"),await h(A,H[1],2,220,260),R("021705"),await h(A,H[2],2,220,260),await f(A,500)}finally{d(),await n.restFocus("audio",A)}},"ev:poster":async(A,R)=>{let tt=u([-6.93,-6.9,.888,.925,5.78,6.2]),ft=u([-6.93,-6.9,.832,.87,5.8,6.18]),W=u([-6.93,-6.9,.797,.834,5.8,6.18]),ot=u([-6.93,-6.9,.68,.76,5.82,6.12]),nt=new Bt(Ci(.1,.07,.1,"#5a4632",{}),n.S.solid.material);nt.position.set(-6.6,.72,5.96),nt.visible=!1,n.fxRoot.add(nt);try{await m(A,[-7,-6.6,.6,1.2,5.65,6.35],{yaw:Math.PI/2,pitch:.6,margin:1.15}),R("credit"),await h(A,tt,1,450,700),R("pencil"),await h(A,ft,1,450,700),R("pen"),await h(A,W,1,450,700),R("stamp"),nt.visible=!0,await A.tw(260,_t=>{nt.position.x=-6.6-.25*_t}),await A.tw(220,_t=>{nt.position.x=-6.85+.25*_t,ot.set(_t)}),nt.visible=!1,await f(A,700),await A.tw(500,_t=>ot.set(1-_t)),await f(A,300)}finally{n.fxRoot.remove(nt),nt.geometry.dispose(),d(),await n.restFocus("poster",A)}},"verdict:dim":async A=>{let R=n.overlay.value;await A.tw(600,D=>n.overlay.set(R+(.4-R)*D,"#000000"))},"verdict:clear":async A=>{let R=n.overlay.value;await A.tw(500,D=>n.overlay.set(R*(1-D)))},"verdict:win":async A=>{let R=n.overlay.value,D=n.S.displayPool,H=D.renderOrder;try{await A.tw(400,tt=>n.overlay.set(R+(.6-R)*tt,"#000000")),D.renderOrder=1002,await A.tw(700,tt=>n.spot.set(tt)),await A.wait(1e3),await A.tw(1e3,tt=>n.overlay.set(.6*(1-tt))),await A.tw(700,tt=>n.spot.set(1-tt))}finally{D.renderOrder=H,n.spot.set(0)}},intro:async A=>{await A.fly(n.poseBox([-1.4,1.4,0,1.4,-3.8,-2.2],{yaw:kn,pitch:Nc}),0),await A.wait(700),await A.fly(n.viewPose("all"),5200)}};async function E(A,R){i&&i!==R&&await x(A,i);let D=n.dolls[R];if(!D)return;i=R;let H=Ei+Cn.step,tt=D.root.position.z;await A.tw(Cn.stepMs*Math.abs(H-tt)/Cn.step,ft=>{D.root.position.z=tt+(H-tt)*ft}),await A.tw(Cn.nodMs,ft=>{D.head.rotation.x=Cn.nodAngle*Math.sin(Math.PI*ft)}),D.head.rotation.x=0}async function T(A,R){let D=n.dolls[R];D&&(await A.tw(Cn.shortNodMs,H=>{D.head.rotation.x=Cn.shortNodAngle*Math.sin(Math.PI*H)}),D.head.rotation.x=0)}async function x(A,R){let D=n.dolls[R];if(!D)return;let H=D.root.position.z;await A.tw(Cn.stepMs*Math.abs(H-Ei)/Cn.step,tt=>{D.root.position.z=H+(Ei-H)*tt}),D.head.rotation.x=0,i===R&&(i=null)}function M(A){return s.ghosts[A]||(s.ghosts[A]=p(A))}function O(){s.on||(s.on=!0,n.details.force(!0,{instant:!0,tween:n.stage.tween}))}function C(){if(!s.on)return;s.on=!1,l();for(let R of Object.values(s.ghosts))R.remove();s.ghosts={};for(let R of s.extras)n.fxRoot.remove(R),R.geometry.dispose(),R.material.dispose();s.extras=[],U(),n.beam.set(0);let A=n.S;A.lens.visible=!1,A.lens.material=n.mats.lens,A.lens.position.fromArray(ui),A.drawer.position.z=0,A.plate.position.z=0,n.fog.set(0),n.setPool(1),n.setPartition(1),n.details.force(!1,{instant:!0,tween:n.stage.tween}),n.spots.root.visible=!0,n.stage.request()}function U(){s.beamHold?.(),s.beamHold=null,clearTimeout(s.beamTimer)}function z(A){let R=n.S;U(),n.beam.set(0);for(let D of Object.values(s.ghosts))D.fade(0),D.upper.rotation.x=0,pd(D,!1);for(let D of s.extras)D.visible=!1;R.lens.material=n.mats.lens,R.lens.visible=A<=4||A===7,R.lens.position.fromArray(ui),R.drawer.position.z=A===6?-.03:0,R.plate.position.z=0,n.fog.set(A===6?1:0),n.setPool(A===6?.25:1),n.setPartition(A===4||A===5?.28:1),A===5&&(n.fog.set(rM),n.setPool(.25))}let X=()=>n.poseBox([-1.5,1.5,0,1.8,-4.2,-1.8],{yaw:kn,pitch:.85}),L=()=>n.poseBox([-1.6,2.2,0,1.6,-6,-2.4],{yaw:kn,pitch:.95}),G=()=>n.poseBox([-1.6,2.2,0,1.6,-6.4,-2.4],{yaw:kn+Math.PI,pitch:.9}),$=[async A=>{let R=Y("stampTool",()=>new Bt(Ci(.1,.07,.1,"#5a4632",{}),new Ce({color:"#5a4632"})));R.position.set(-6.6,.72,5.96);let D=u([-6.93,-6.9,.68,.76,5.82,6.12]);try{await A.fly(n.poseBox([-7,-6.6,.6,1.2,5.65,6.35],{yaw:Math.PI/2,pitch:.6,margin:1.15}),1e3),R.visible=!0,await A.tw(500,H=>{R.position.x=-6.6-.25*H}),await A.tw(400,H=>{R.position.x=-6.85+.25*H,D.set(H)}),R.visible=!1,await A.wait(900),await A.tw(600,H=>D.set(1-H))}finally{d()}},async A=>{let R=M("sera");await A.fly(X(),1e3),R.root.position.set(1.5,0,-1.9),await A.tw(400,D=>R.fade(D)),await g(A,R,[[.95,-3],[.95,-3.65],[.15,-3.65]]),y(R,0,1),await A.tw(600,D=>{R.upper.rotation.x=1.25*D}),await A.wait(600),await A.tw(500,D=>{R.upper.rotation.x=1.25*(1-D)}),await g(A,R,[[.95,-3.65],[.95,-3],[1.6,-1.8]]),await A.tw(400,D=>R.fade(1-D))},async A=>{let R=u([-.58,.58,.88,1.04,3.99,4.05]),D=u([-.56,.56,0,1.2,3.92,3.98]);try{await A.fly(n.poseBox([-1.5,1.5,0,1.3,3.6,5],{yaw:.3,pitch:.75}),1e3),await A.tw(500,H=>D.set(.6*H)),await h(A,R,2,450,450),await A.tw(500,H=>D.set(.6*(1-H)))}finally{d()}},async A=>{let R=M("yujin"),D=Y("recLamp",()=>new Bt(new qn(.025,10,8),new Ce({color:"#ff3b30"})));D.position.set(Zs[0]+.1,.83,Zs[2]+.02),await A.fly(n.poseBox([6.8,9.1,0,1.4,-8.9,-7],{yaw:kn,pitch:.9}),1e3),R.root.position.set(Zs[0],0,-7.65),y(R,0,-1),pd(R,!0),await A.tw(600,H=>R.fade(H)),await A.wait(500),D.visible=!0,n.stage.request(),await A.wait(1500)},async A=>{let R=M("doyun"),D=u([1.54,1.7,.86,.98,-5.1,-4.98]),H=n.stage.hold();try{n.setPartition(1),await Promise.all([A.fly(G(),1e3),A.tw(500,tt=>n.setPartition(1-.72*tt))]),R.root.position.set(ed[0],0,-5.5),y(R,0,1),await A.tw(500,tt=>R.fade(tt)),await A.tw(400,tt=>{R.upper.rotation.x=.3*tt}),await A.tw(250,tt=>D.set(tt)),await A.tw(400,tt=>{R.upper.rotation.x=.3*(1-tt),D.set(1-tt)}),await A.tw(700,tt=>n.setPool(1-.75*tt)),await A.tw(1200,tt=>n.fog.set(tt,performance.now()/1e3)),await A.wait(800)}finally{d(),H()}},async A=>{let R=n.S,D=M("doyun"),H=u([1.68,1.92,.92,1.46,-4.42,-4.18]),tt=n.stage.hold(),ft=R.lens.position.clone();try{await A.fly(G(),900),D.root.position.set(ed[0],0,-5.5),D.fade(1),await g(A,D,[[.45,-5.3],[.42,-4.7]]),y(D,-1,1),await A.tw(400,nt=>{D.upper.rotation.x=-.18*nt}),await A.tw(900,nt=>{R.drawer.position.z=-.6*nt,R.lens.position.z=ft.z-.6*nt}),await A.tw(900,nt=>{R.plate.position.z=-.9*nt,R.lens.position.z=ft.z-.6-.9*nt}),await A.tw(500,nt=>{D.upper.rotation.x=-.18*(1-nt)});let W=R.lens.position.clone(),ot={x:bs[0],y:.745,z:bs[2]};R.lens.material=n.amberLens,n.stage.request(),await A.tw(900,nt=>{R.lens.position.set(W.x+(ot.x-W.x)*nt,W.y+(ot.y-W.y)*nt+.35*Math.sin(Math.PI*nt),W.z+(ot.z-W.z)*nt)}),R.lens.material=n.mats.lens,n.stage.request(),await h(A,H,2,200,240),await A.tw(700,nt=>{R.plate.position.z=-.9*(1-nt)}),await A.tw(700,nt=>{R.drawer.position.z=-.6+(.6-.03)*nt}),await A.wait(500)}finally{R.lens.material=n.mats.lens,d(),tt()}},async A=>{let R=n.stage.hold();try{await A.fly(X(),1e3),await A.tw(1600,D=>n.fog.set(1-D,performance.now()/1e3)),await A.wait(1200)}finally{R()}},async A=>{let R=n.S;if(R.lens.visible=!1,await A.fly(X(),1e3),R.lens.material=n.amberLens,R.lens.visible=!0,n.beam.mesh.position.set(ui[0],ui[1]+.12,ui[2]),await A.tw(900,D=>{n.beam.set(D),n.setPool(1)}),!A.reduced&&!A.stopped){s.beamHold=n.stage.hold();let D=performance.now();n.beam.spin=()=>{n.beam.mesh.rotation.y=(performance.now()-D)/1e3*(Math.PI*2/12)},s.beamTimer=setTimeout(U,24e3)}await A.wait(1200)}];function Y(A,R){let D=s.extras.find(H=>H.name===A);return D||(D=R(),D.name=A,n.fxRoot.add(D),s.extras.push(D)),D.visible=!1,D}return{get playing(){return e},get storyOn(){return s.on},play(A,{onCue:R}={}){if(A.startsWith("talk:nod:")){let H=A.slice(9);return a(A,tt=>T(tt,H))}if(A.startsWith("talk:")){let H=A.slice(5);return a(A,tt=>H==="end"?i?x(tt,i):Promise.resolve():E(tt,H))}let D=v[A];return D?a(A,D,R):Promise.resolve()},stop(){o++,l()},story(A){return A=Math.max(0,Math.min(7,A|0)),O(),a("story:"+A,async R=>{z(A),await $[A](R)})},storyExit:C,dispose(){C(),d()}}}var no="02:17, \uB9C8\uC9C0\uB9C9 \uC810\uAC80",f0="\uB2E8\uD3B8 \uCD94\uB9AC \xB7 \uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",zc="\uC0C8\uBCBD \uB450 \uC2DC \uC2ED\uCE60 \uBD84. \uC720\uB9AC \uC9C4\uC5F4\uB300\uC5D0 \uC548\uAC1C\uAC00 \uBC00\uB824\uC624\uACE0, \uB4F1\uB300 \uC2DC\uC81C\uD488 \uB80C\uC988\uAC00 \uC0AC\uB77C\uC84C\uB2E4. \uC815\uBB38 \uBD09\uC778\uC740 \uADF8\uB300\uB85C\uB2E4. \uAC1C\uC7A5\uAE4C\uC9C0 \uB0A8\uC740 \uC870\uC0AC \uAE30\uD68C\uB294 \uC544\uD649 \uBC88, \uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uC138 \uBC88.",p0=["\uD604\uC7A5\uC758 \uC99D\uAC70\uB97C \uCC98\uC74C \uD655\uC778\uD560 \uB54C, \uADF8\uB9AC\uACE0 \uC0AC\uB78C\uC5D0\uAC8C \uCC98\uC74C \uC9C8\uBB38\uD560 \uB54C \uC870\uC0AC \uAE30\uD68C\uB97C \uD55C \uBC88\uC529 \uC501\uB2C8\uB2E4. \uC99D\uAC70 \uC5EC\uC12F \uAC1C\uC640 \uC0AC\uB78C \uB124 \uBA85\uC744 \uD569\uCE58\uBA74 \uC5F4\uC778\uB370 \uAE30\uD68C\uB294 \uC544\uD649 \uBC88\uC774\uB77C, \uD558\uB098\uB294 \uAC74\uB108\uB6F0\uC5B4\uC57C \uD569\uB2C8\uB2E4.","\uB2E4\uC2DC \uC77D\uAE30, \uC99D\uAC70 \uC81C\uC2DC, \uAE30\uB85D \uACE0\uC815, \uD78C\uD2B8\uC5D0\uB294 \uC870\uC0AC \uAE30\uD68C\uB97C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uBA74\uB2F4\uC5D0\uC11C \uC774\uBBF8 \uC9C8\uBB38\uD55C \uC0AC\uB78C\uC5D0\uAC8C\uB294, \uD604\uC7A5\uC5D0\uC11C \uD655\uC778\uD574 \uB454 \uC99D\uAC70\uB97C \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uACB0\uB860\uC740 \uBC94\uC778 \uD55C \uBA85\uACFC \uC99D\uAC70 \uB450 \uAC1C\uB85C \uB0C5\uB2C8\uB2E4. \uD55C \uC99D\uAC70\uB294 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744, \uB2E4\uB978 \uD55C \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC758 \uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098\uB294 \uC9C0\uC810\uC744 \uBCF4\uC5EC \uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uB450 \uC99D\uAC70 \uBAA8\uB450 \uADF8 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC5B4\uC57C \uC81C\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uC138 \uBC88\uC785\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uACE0, \uC138 \uBC88\uC744 \uB2E4 \uC4F0\uBA74 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.","\uC870\uC0AC \uAE30\uB85D\uC740 \uC774 \uAE30\uAE30\uC5D0 \uC790\uB3D9\uC73C\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC571\uC744 \uB2EB\uC558\uB2E4 \uC5F4\uC5B4\uB3C4 \uC774\uC5B4\uC11C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC9C0\uC6CC\uC9C0\uACE0, \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4."],m0=["\uCC98\uC74C \uD655\uC778\xB7\uCC98\uC74C \uC9C8\uBB38\uC740 \uC870\uC0AC 1\uD68C","\uB2E4\uC2DC \uBCF4\uAE30\xB7\uC81C\uC2DC\xB7\uACE0\uC815\xB7\uD78C\uD2B8\uB294 \uBB34\uB8CC","\uACB0\uB860\uC740 \uD55C \uBA85 + \uC99D\uAC70 \uB450 \uAC1C, \uAE30\uD68C \uC138 \uBC88"],Ss={lock:[{cue:"locked",t:"01:58 \uC7A0\uAE40 \xB7 \uBD09\uC778"},{cue:"opened",t:"02:19 \uACBD\uBE44\uAC00 \uBD09\uC778\uC744 \uD655\uC778\uD558\uACE0 \uC5F4 \uB54C\uAE4C\uC9C0, \uBB38\uC774 \uC5F4\uB9B0 \uAE30\uB85D\uC740 \uD55C \uAC74\uB3C4 \uC5C6\uC74C"},{cue:"seal",t:"\uADF8\uB54C\uAE4C\uC9C0 \uAE30\uACC4\uC2DD \uBD09\uC778 \uBC88\uD638\uB294 \uB300\uC7A5\uACFC \uAC19\uC558\uACE0, \uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C"},{cue:"patrol",t:"\uC815\uBB38 \uC606 \uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94\uB294 30\uBD84\uB9C8\uB2E4 \uB20C\uB7EC\uC57C \uD568"},{cue:"late",t:"02:00 \uCC28\uB840\uAC00 02:09\uC5D0 \uB20C\uB9BC"}],fog:[{cue:"0152",t:"01:52 \uBB38\uC138\uB77C\uAC00 \uBC1B\uCE68\uB300 \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5 \uCABD\uC73C\uB85C \uD5C8\uB9AC\uB97C \uC219\uC600\uB2E4\uAC00 \uB098\uAC10"},{cue:"021659",t:"02:16:59\uAE4C\uC9C0 \uB80C\uC988\uB294 \uC81C\uC790\uB9AC"},{cue:"021700",t:"02:17:00 \uC548\uAC1C\uAC00 \uD130\uC838 8\uCD08 \uB3D9\uC548 \uD654\uBA74\uC774 \uD558\uC597\uAC8C \uAC00\uB824\uC9D0"},{cue:"021708",t:"\uC548\uAC1C\uAC00 \uAC77\uD78C \uD654\uBA74\uC5D0\uB294 \uB80C\uC988\uAC00 \uC5C6\uC74C \xB7 \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44 \xB7 \uD654\uBA74\uC5D0 \uC0AC\uB78C\uC740 \uC7A1\uD788\uC9C0 \uC54A\uC74C"},{cue:"device",t:"\uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D: \u2018\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9\u2019"}],drawer:[{cue:"cover",t:"\uC720\uB9AC \uB36E\uAC1C\uB294 \uC55E\uACFC \uC606, \uC704\uB9CC \uB9C9\uC74C"},{cue:"slide",t:"\uB4A4\uCABD\uC740 \uC815\uBE44\uC6A9 \uC11C\uB78D\uC758 \uC55E\uD310 \u2014 \uC11C\uB78D\uC744 \uB2F9\uAE30\uBA74 \uB80C\uC988\uB97C \uC62C\uB824 \uB454 \uBC1B\uCE68\uD310\uC774 \uD1B5\uC9F8\uB85C \uB4A4\uB85C \uBE60\uC838\uB098\uC634"},{cue:"handle",t:"\uC190\uC7A1\uC774\uB294 \uCE78\uB9C9\uC774\uBCBD\uC758 \uC810\uAC80\uAD6C \uB108\uBA38, \uC870\uBA85 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uB2EC\uB824 \uC788\uC74C"},{cue:"nohandle",t:"\uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC774\uCABD\uC5D0\uC11C\uB294 \uB2F9\uAE38 \uC218 \uC5C6\uC74C"},{cue:"wax",t:"\uC11C\uB78D\uC740 \uC190\uAC00\uB77D \uB450 \uB9C8\uB514\uB9CC\uD07C \uB35C \uB2EB\uD600 \uC788\uACE0, \uB808\uC77C\uACFC \uADF8 \uC544\uB798 \uBC14\uB2E5\uC5D0 \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8"}],cue:[{cue:"schedule",t:"\uC608\uC57D\uD45C\uC5D0 \uC62C\uB77C \uC788\uB294 \uC790\uB3D9 \uC810\uAC80\uC740 02:30 \uD55C \uAC74\uBFD0"},{cue:"run",t:"\uC2E4\uD589 \uAE30\uB85D: 02:17:00\uC5D0 \uD050 \uD558\uB098\uAC00 \uC2E4\uD589\uB428"},{cue:"sign",t:"\uC2E4\uD589 \uBC29\uC2DD \u2018\uC218\uB3D9\u2019 \xB7 \uC785\uB825 \uC704\uCE58 \u2018\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94\u2019 \xB7 \uC11C\uBA85 \uCE78 \u2018H.D.Y.\u2019"},{cue:"bundle",t:"\uC774 \uD050\uC5D0\uB294 \uC9C4\uC5F4\uB300 \uC870\uBA85\uC744 \uB0AE\uCD94\uB294 \uB3D9\uC791\uACFC \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638\uAC00 \uD568\uAED8 \uBB36\uC5EC \uC788\uC74C"},{cue:"remote",t:"\uC6D0\uACA9 \uC811\uC18D \uAE30\uB85D\uC740 \uC5C6\uC74C"}],audio:[{cue:"0210",t:"02:10\uBD80\uD130 \uB04A\uAE40 \uC5C6\uC774 \uC774\uC5B4\uC9C4 \uB179\uC74C"},{cue:"channels",t:"1\uBC88 \uCC44\uB110 \uC9C4\uC5F4\uB300 \uC55E \uB9C8\uC774\uD06C \xB7 2\uBC88 \uCC44\uB110 \uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C \xB7 3\uBC88 \uCC44\uB110 \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC758 \uBA54\uBAA8\uC6A9 \uB9C8\uC774\uD06C"},{cue:"021700",t:"02:17:00 \uC548\uAC1C \uBD84\uC0AC\uC74C \uC2DC\uC791"},{cue:"021703",t:"02:17:03 2\uBC88 \uCC44\uB110\uC5D0\uB9CC \uAE08\uC18D\uC774 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uD06C\uAC8C \uC7A1\uD798"},{cue:"021705",t:"02:17:05 3\uBC88 \uCC44\uB110\uC5D0 \u201C\uC5B4, \uBC8C\uC368?\u201D\uB77C\uB294 \uC11C\uC720\uC9C4\uC758 \uBAA9\uC18C\uB9AC"}],poster:[{cue:"credit",t:"\uD06C\uB808\uB514\uD2B8\uC758 \u2018\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04\u2019\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C \uD55C \uC0AC\uB78C\uC758 \uC774\uB984\uB9CC \uC2E4\uB824 \uC788\uC74C"},{cue:"pencil",t:"\uC5EC\uBC31\uC758 \uC5F0\uD544 \uBA54\uBAA8: \u2018\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD\u2019"},{cue:"pen",t:"\uD30C\uB780 \uD39C \uBA54\uBAA8: \u2018\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4\u2019"},{cue:"stamp",t:"\uB450 \uBA54\uBAA8 \uC704\uC5D0 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5 \xB7 \uB3C4\uC7A5\uC5D0 \uC801\uD78C \uC2DC\uAC01 01:40"}]},fi={min:{place:"door-out",label:"\uBCF8\uC778 \uC9C4\uC220: \uC815\uBB38 \uC55E"},sera:{place:"conservation",label:"\uBCF8\uC778 \uC9C4\uC220: \uBCF4\uC874\uC2E4"},doyun:{place:"west-corridor",label:"\uBCF8\uC778 \uC9C4\uC220: \uB85C\uBE44 \uCABD \uBCF5\uB3C4"},yujin:{place:"sound-desk",label:"\uBCF8\uC778 \uC9C4\uC220: \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C"}},Sn=[["01:40","\uD64D\uBCF4 \uD328\uB110 \uAD50\uC815\uC9C0\uC5D0 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5\uC774 \uCC0D\uD614\uC2B5\uB2C8\uB2E4. \uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C\uC758 \uC774\uB984\uB9CC \uB0A8\uC558\uC2B5\uB2C8\uB2E4."],["01:52","\uBB38\uC138\uB77C\uAC00 \uB9C8\uC9C0\uB9C9 \uC810\uAC80\uC744 \uD588\uACE0, \uBC1B\uCE68\uB300 \uB4A4 \uBC14\uB2E5\uC740 \uAE68\uB057\uD588\uC2B5\uB2C8\uB2E4."],["01:58","\uC815\uBB38\uC774 \uC7A0\uAE30\uACE0 \uBD09\uC778\uB410\uC2B5\uB2C8\uB2E4. 02\uC2DC 19\uBD84\uC5D0 \uBD09\uC778\uC744 \uD480 \uB54C\uAE4C\uC9C0 \uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."],["02:10","\uC11C\uC720\uC9C4\uC774 02\uC2DC 30\uBD84 \uC810\uAC80\uC744 \uAE30\uB2E4\uB9AC\uBA70 \uB179\uC74C\uC744 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4."],["02:17:00","\uD55C\uB3C4\uC724\uC774 \uC870\uBA85 \uBD80\uC2A4 \uCF58\uC194\uC5D0\uC11C \uD050\uB97C \uC190\uC73C\uB85C \uC2E4\uD589\uD588\uC2B5\uB2C8\uB2E4. \uC9C4\uC5F4\uB300 \uC870\uBA85\uC774 \uB0AE\uC544\uC9C0\uACE0 \uC548\uAC1C\uAC00 \uD130\uC84C\uC2B5\uB2C8\uB2E4."],["02:17:03","\uD55C\uB3C4\uC724\uC774 \uBD80\uC2A4 \uC548\uCABD \uC190\uC7A1\uC774\uB85C \uC815\uBE44 \uC11C\uB78D\uC744 \uB2F9\uACA8 \uB80C\uC988\uB97C \uBC1B\uCE68\uD310\uC9F8 \uBE7C\uB0C8\uACE0, \uC7A5\uBE44 \uC218\uB808\uC5D0 \uC2E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC218\uB808\uC758 \uC7A0\uAE08\uC1E0\uAC00 \uB538\uAE4D \uC18C\uB9AC\uB97C \uB0C8\uC2B5\uB2C8\uB2E4."],["02:17:08","\uC548\uAC1C\uAC00 \uAC77\uD614\uC744 \uB54C \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44\uC600\uACE0 \uB80C\uC988\uB9CC \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4."]],g0={title:"\uC0AC\uAC74 \uD574\uACB0",lead:"\uC548\uAC1C\uAC00 \uAC77\uD614\uC2B5\uB2C8\uB2E4. \uB80C\uC988\uAC00 \uC0AC\uB77C\uC9C0\uB294 \uB3D9\uC548 \uC815\uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",method:"\uBB38\uC744 \uC5F4 \uD544\uC694\uAC00 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4. \uC815\uBE44 \uC11C\uB78D\uC740 \uC870\uBA85 \uBD80\uC2A4\uC5D0\uC11C\uB9CC \uB2F9\uAE38 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC548\uAC1C\uB294 02\uC2DC 30\uBD84 \uC790\uB3D9 \uC810\uAC80\uC5D0 \uBB36\uC5EC \uC788\uC5C8\uB294\uB370, 13\uBD84 \uC55E\uB2F9\uACA8 \uC190\uC73C\uB85C \uD130\uB728\uB9B0 \uAC83\uC774\uC5C8\uC2B5\uB2C8\uB2E4.",cross:"\uC11C\uB78D\uC740 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uC5C8\uC9C0\uB9CC \uB204\uAC00 \uB2F9\uACBC\uB294\uC9C0\uB294 \uB9D0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC218\uB3D9 \uC2E4\uD589 \uAE30\uB85D\uC740 \uADF8 \uC2DC\uAC01 \uBD80\uC2A4 \uCF58\uC194 \uC55E\uC5D0 \uB204\uAC00 \uC788\uC5C8\uB294\uC9C0\uB97C \uBCF4\uC5EC \uC8FC\uC5C8\uC9C0\uB9CC \uB80C\uC988\uAC00 \uC5B4\uB5BB\uAC8C \uB098\uAC14\uB294\uC9C0\uB294 \uB9D0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB450 \uC99D\uAC70\uB294 02\uC2DC 17\uBD84\uC774\uB77C\uB294 \uAC19\uC740 \uC2DC\uAC01, \uC870\uBA85 \uBD80\uC2A4\uB77C\uB294 \uAC19\uC740 \uC790\uB9AC\uB97C \uAC00\uB9AC\uCF30\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01 \uBD80\uC2A4\uB97C \uBE44\uC6E0\uACE0 \uCF58\uC194\uC5D0 \uC190\uB3C4 \uB300\uC9C0 \uC54A\uC558\uB2E4\uB358 \uD55C\uB3C4\uC724\uC758 \uB9D0\uC740, \uC790\uC2E0\uC758 \uC11C\uBA85\uC774 \uB0A8\uC740 \uC218\uB3D9 \uC2E4\uD589 \uAE30\uB85D \uC55E\uC5D0\uC11C \uBB34\uB108\uC84C\uC2B5\uB2C8\uB2E4.",motive:"\uD55C\uB3C4\uC724\uC774 \uC124\uACC4\uD55C \uC5F0\uCD9C\uC778\uB370 \uBCF4\uB3C4\uC6A9 \uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C\uC758 \uC774\uB984\uB9CC \uC62C\uB790\uACE0, \uC815\uC815 \uC694\uCCAD\uC740 \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uADF8\uB294 \uADF8 \uC77C\uC744 \uCC38\uC744 \uC218 \uC5C6\uC5C8\uB2E4\uACE0 \uB4A4\uB2A6\uAC8C \uC778\uC815\uD588\uC2B5\uB2C8\uB2E4. \uB80C\uC988\uB294 \uC870\uBA85 \uBD80\uC2A4\uC758 \uC7A5\uBE44 \uC218\uB808\uC5D0\uC11C \uB098\uC654\uACE0, \uC774\uC81C \uB2E4\uC2DC \uC81C\uC790\uB9AC\uC5D0\uC11C \uBE5B\uC744 \uB0C5\uB2C8\uB2E4."},x0="\uC138 \uBC88 \uB0B8 \uACB0\uB860\uC744 \uD558\uB098\uB3C4 \uC785\uC99D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAC1C\uC7A5 \uC2DC\uAC01\uC774 \uB418\uC5B4 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB118\uC5B4\uAC11\uB2C8\uB2E4. \uB204\uAC00 \uD55C \uC77C\uC778\uC9C0\uB294 \uC5EC\uAE30\uC5D0 \uC801\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4.";function Ji(n){let t=[],e=/[.?!…]\s+/g,i=0,s;for(;s=e.exec(n);)t.push(n.slice(i,s.index+1)),i=s.index+s[0].length;t.push(n.slice(i));let r=[],o="";for(let a of t)o=o?o+" "+a:a,(o.length>=12||/[.?!]$/.test(o))&&(r.push(o),o="");return o&&r.push(o),r}var gd=(n,t,e)=>{let i=n.charCodeAt(n.length-1);return i>=44032&&i<=55203&&(i-44032)%28?t:e},ha=["\uC601","\uD55C","\uB450","\uC138"],_0=["","\uCCAB","\uB450","\uC138"];function y0(n){let t=Dm(),e=r0(n),i=$m(t);n.add(i.root);let s=t0(t);n.add(s.root);let r={geometry:new qn(di.proxyRadius,8,6),material:t.proxy},o=new De;o.name="dolls";let a={};for(let _ of Bn){let b=Fc(_,t.doll,{shadow:t.shadow,proxy:r});a[_.id]=b,o.add(b.root)}n.add(o);let l=e0();n.add(l.mesh);let c=i0();n.add(c.root);let u=new De;u.name="fx",n.add(u);let d=new De;d.name="ghosts",n.add(d);let h=o0();n.add(h.mesh);let p=a0();n.add(p.mesh);let g=c0();n.add(g.mesh);let y=u0();n.add(y.mesh);let m=new Ce({color:"#ffb347"}),f=[...s.proxies,...Object.values(a).map(_=>_.root.userData.proxy)];return{scene:n,mats:t,lights:e,S:i,spots:s,dolls:a,dollRoot:o,pins:l,details:c,fxRoot:u,ghostRoot:d,overlay:h,fog:p,beam:g,spot:y,amberLens:m,proxyGeometry:r.geometry,pickables:f}}var cM=n=>{try{return matchMedia(n).matches}catch{return!1}};function v0(n,{onPick:t,onFrame:e,reducedMotion:i=!1}={}){let s=y0(n.scene),{S:r,spots:o,dolls:a,pins:l,details:c,overlay:u,fog:d,beam:h}=s;n.limits.spanMax=40,n.limits.spanMin=.6,n.setPickables(s.pickables);let p=!!i,g=!1,y=!1,m=()=>p||cM("(prefers-reduced-motion: reduce)"),f=kn,_="all",b=null,v=!1,E=!0,T="normal",x=new V,M=new V,O=new V,C=new V;function U([k,lt,ct,Lt,ie,jt],{yaw:F=f,pitch:oe=Nc,margin:Wt=1.04}={}){let{width:ae,height:pt}=n.size,Ae=n.insets,Ot=new V((k+lt)/2,(ct+Lt)/2,(ie+jt)/2);O.set(Math.cos(oe)*Math.sin(F),Math.sin(oe),Math.cos(oe)*Math.cos(F)),x.set(Math.cos(F),0,-Math.sin(F)),M.crossVectors(O,x);let zt=0,I=0;for(let ut of[k,lt])for(let rt of[ct,Lt])for(let gt of[ie,jt])C.set(ut,rt,gt).sub(Ot),zt=Math.max(zt,Math.abs(C.dot(x))),I=Math.max(I,Math.abs(C.dot(M)));let S=Math.max(.25,(pt-Ae.top-Ae.bottom)/pt),Z=Math.max(.25,(ae-Ae.left-Ae.right)/ae);return{target:Ot,yaw:F,pitch:oe,span:Math.max(I/S,zt/(ae/pt*Z))*Wt}}function z(k){let[lt,ct,Lt,ie]=Dc[k]||Dc.all;return U([lt,ct,0,1.2,Lt,ie],{margin:k==="hall"?1.01:1.04})}let X=Bn.reduce((k,lt)=>k+lt.x,0)/Bn.length;function L(k){if(k&&k.startsWith("p:")){if(!Bn.find(ae=>"p:"+ae.id===k))return null;let oe=Pm,Wt=Ei+Cn.step/2;return U([X-oe.halfX,X+oe.halfX,oe.y0,oe.y1,Wt-oe.halfZ,Wt+oe.halfZ],{yaw:oe.yaw,pitch:oe.pitch,margin:1})}let lt=k&&qi[k.slice(2)];if(!lt)return null;let[ct,Lt,ie]=lt.focus,jt=Kr.half;return U([ct-jt,ct+jt,0,Lt+.6,ie-jt,ie+jt],{pitch:Kr.pitch,margin:1})}let G=k=>m()?0:k,$=0,Y=0;function A(){o.still();for(let k of Object.values(a))k.upper.scale.y=1}function R(){Y=0;let k=typeof document<"u"&&document.hidden;if(y||g||m()||k||performance.now()>$){A(),n.request();return}n.request(),Y=setTimeout(R,50)}function D(){y||g||m()||($=performance.now()+9e3,Y||R())}let H=n.onFrame((k,lt)=>{let ct=lt/1e3;!m()&&!g&&performance.now()<=$&&(o.animate(ct),Bn.forEach((Lt,ie)=>{a[Lt.id].upper.scale.y=1+Cn.breathAmp*Math.sin(2*Math.PI*(ct+ie*Cn.phaseStep)/Cn.breathPeriod)})),d.mesh.visible&&!m()&&d.animate(ct),h.mesh.visible&&h.spin&&h.spin()}),tt=n.onChange(()=>{try{e?.()}catch(k){console.error(k)}});n.onUserMove(()=>{v=!0,D()});let ft=()=>{document.hidden||D()},W=!1,ot=n.renderer?.domElement,nt=()=>{W=!0},_t=()=>{W=!1,n.request()};ot?.addEventListener?.("webglcontextlost",nt),ot?.addEventListener?.("webglcontextrestored",_t),typeof document<"u"&&document.addEventListener("visibilitychange",ft);let yt=h0(n);function Ht(k){let lt=r.partition.material,ct=k<.999;lt.transparent!==ct&&(lt.transparent=ct,lt.depthWrite=!ct,lt.needsUpdate=!0),lt.opacity=k,r.partition.renderOrder=ct?3:0}function Oe(k){r.displayPool.material.opacity=k}let kt={stage:n,S:r,mats:s.mats,dolls:a,dollRoot:s.dollRoot,spots:o,pins:l,details:c,overlay:u,fog:d,beam:h,spot:s.spot,cctv:yt,fxRoot:s.fxRoot,ghostRoot:s.ghostRoot,amberLens:s.amberLens,reduced:m,kick:D,poseBox:U,viewPose:z,setPartition:Ht,setPool:Oe,restFocus:(k,lt)=>lt.fly(L("e:"+k),Kr.ms)},Jt=d0(kt);n.onTap(k=>{if(D(),k&&!Jt.playing)try{t?.(k)}catch(lt){console.error(lt)}});function me(){if(Jt.playing||v)return;let k=b?L(b):z(_);k&&n.flyTo(k,0)}let ee=n.onResize(()=>{me()}),Be=k=>n.toScreen(k),ke=new V,We={sync(k){if(!k)return;o.set(k.marks,k.selected,k.accuse),c.set(k.unlocked,{instant:E||m(),tween:(ct,Lt)=>n.tween(G(ct),Lt)}),l.set(k.claims);let lt=k.mood||"normal";if(lt!==T||E){if(lt!=="win"&&Jt.storyOn&&Jt.storyExit(),!yt.on){let ct=lt==="dim"?.4:0,Lt=u.value;Math.abs(ct-Lt)>.001&&n.tween(E?0:G(500),ie=>u.set(Lt+(ct-Lt)*ie,"#000000"))}T=lt}E=!1,n.request(),D()},view(k,{instant:lt,resetYaw:ct}={}){return Dc[k]||(k="all"),ct&&(f=kn),_=k,b=null,v=!1,D(),n.flyTo(z(k),lt?0:G(Kr.ms))},rotate(k,{quiet:lt=!1}={}){f+=(k<0?-1:1)*Math.PI/2,lt||D();let ct=b&&b.startsWith("p:");return!v&&!ct&&!Jt.playing?n.flyTo(b?L(b):z(_),G(450)):n.rotateBy(k<0?-1:1,G(450))},focus(k,{instant:lt}={}){if(!k)return b=null,We.view(_,{instant:lt});let ct=L(k);return ct?(b=k,v=!1,D(),n.flyTo(ct,lt?0:G(Kr.ms))):Promise.resolve()},setInsets(k){n.setInsets(k||{}),yt.refit(),me()},play(k,{onCue:lt}={}){return Jt.play(k,{onCue:lt})},stop(){Jt.stop()},story(k){return T==="win"?Jt.story(k):Promise.resolve()},isLost(){if(W)return!0;try{return!!n.renderer?.getContext?.()?.isContextLost?.()}catch{return!1}},people(){let k=s.dollRoot.visible&&!yt.on;return Bn.map(lt=>{let ct=Be(a[lt.id].root.localToWorld(ke.set(0,jm,0)));return{id:"p:"+lt.id,key:lt.id,x:ct.x,y:ct.y,visible:k&&ct.visible}})},spots(){let k=o.root.visible&&!yt.on;return Ks.map(lt=>{let ct=Be(o.labelPoint(lt));return{id:"e:"+lt,key:lt,x:ct.x,y:ct.y,visible:k&&ct.visible}})},pins(){return l.shown().map(k=>{let lt=Be(l.labelPoint(k));return{id:"p:"+k,key:k,x:lt.x,y:lt.y,visible:!yt.on&&lt.visible,label:fi[k]?.label||""}})},setQuality(k){n.setQuality(k==="low"?"low":"high"),d.mesh.count=k==="low"?24:d.mesh.instanceMatrix.count},setReducedMotion(k){p=!!k,p?(A(),n.request()):D()},pause(k){g=!!k,g?(clearTimeout(Y),Y=0,A(),n.request()):(n.request(),D())},debug(){let k=n.renderer?.info?.render||{};return{view:_,focus:b,unlocked:c.unlocked(),playing:Jt.playing,story:Jt.storyOn,drawCalls:k.calls??null,triangles:k.triangles??null}},dispose(){if(y)return;y=!0,clearTimeout(Y),Jt.dispose(),yt.exit(),H(),tt(),ee(),typeof document<"u"&&document.removeEventListener("visibilitychange",ft),ot?.removeEventListener?.("webglcontextlost",nt),ot?.removeEventListener?.("webglcontextrestored",_t);let k=new Set;n.scene.traverse(lt=>{lt.geometry&&!k.has(lt.geometry)&&(k.add(lt.geometry),lt.geometry.dispose());let ct=Array.isArray(lt.material)?lt.material:lt.material?[lt.material]:[];for(let Lt of ct)k.has(Lt)||(k.add(Lt),Lt.map?.dispose(),Lt.dispose())}),c.dispose(),o.dispose(),l.dispose(),n.dispose()}};return n.flyTo(z("all"),0),n.request(),D(),We}async function b0(n,{onPick:t,onFrame:e,reducedMotion:i}={}){let s=Em(n);return v0(s,{onPick:t,onFrame:e,reducedMotion:i})}var yd="0217-v3-save";var io=null,_d=new Set,da=()=>{for(let n of _d)try{n(Ms())}catch{}};function S0(n){return _d.add(n),()=>_d.delete(n)}function M0(){try{return matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0}catch{return!1}}function xd(){let n=navigator.userAgent||"";return/iPhone|iPad|iPod/.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?"ios":/Android/.test(n)?"android":"desktop"}function Ms(){return M0()?{mode:"installed",kind:xd()}:io?{mode:"prompt",kind:xd()}:{mode:"manual",kind:xd()}}async function w0(){if(!io)return"unavailable";let n=io;io=null;try{await n.prompt();let t=await n.userChoice;return da(),t&&t.outcome||"dismissed"}catch{return da(),"error"}}function fa(n){return n==="ios"?["\uC0AC\uD30C\uB9AC \uC544\uB798\uCABD\uC758 \uACF5\uC720 \uB2E8\uCD94(\uB124\uBAA8\uC5D0\uC11C \uD654\uC0B4\uD45C\uAC00 \uB098\uC624\uB294 \uBAA8\uC591)\uB97C \uB204\uB985\uB2C8\uB2E4.","\uBAA9\uB85D\uC5D0\uC11C \u300C\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uD648 \uD654\uBA74\uC5D0 \uC0DD\uAE34 \u300C02:17\u300D \uC544\uC774\uCF58\uC73C\uB85C \uC5F4\uBA74 \uC571\uCC98\uB7FC \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4.","\uC544\uC774\uD3F0\uC5D0\uC11C\uB294 \uC0AC\uD30C\uB9AC\uC640 \uD648 \uD654\uBA74 \uC571\uC758 \uC800\uC7A5 \uACF5\uAC04\uC774 \uB530\uB85C\uB77C\uC11C, \uC0AC\uD30C\uB9AC\uC5D0\uC11C \uD558\uB358 \uC870\uC0AC\uC640 \uC5F0 \uD78C\uD2B8\uB294 \uD648 \uD654\uBA74 \uC571\uC73C\uB85C \uC774\uC5B4\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]:n==="android"?["\uD06C\uB86C \uC624\uB978\uCABD \uC704\uC758 \uBA54\uB274(\uC810 \uC138 \uAC1C)\uB97C \uB204\uB985\uB2C8\uB2E4.","\u300C\uC571 \uC124\uCE58\u300D \uB610\uB294 \u300C\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uD648 \uD654\uBA74\uC5D0 \uC0DD\uAE34 \u300C02:17\u300D \uC544\uC774\uCF58\uC73C\uB85C \uC5F4\uBA74 \uC571\uCC98\uB7FC \uC5F4\uB9BD\uB2C8\uB2E4."]:["\uC8FC\uC18C\uCC3D \uC624\uB978\uCABD\uC758 \uC124\uCE58 \uC544\uC774\uCF58\uC744 \uB204\uB974\uAC70\uB098, \uBE0C\uB77C\uC6B0\uC800 \uBA54\uB274\uC5D0\uC11C \u300C\uC571 \uC124\uCE58\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uC124\uCE58\uD55C \uB4A4\uC5D0\uB294 \uC571 \uBAA9\uB85D\uC5D0\uC11C \u300C02:17\u300D\uB85C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}function A0({onUpdate:n}={}){addEventListener("beforeinstallprompt",r=>{r.preventDefault(),io=r,da()}),addEventListener("appinstalled",()=>{io=null,da()});try{matchMedia("(display-mode: standalone)").addEventListener("change",da)}catch{}let t=location.protocol==="https:"||location.hostname==="localhost"||location.hostname==="127.0.0.1";if(!("serviceWorker"in navigator)||!t)return{sw:"unsupported"};if(/[?&]nosw\b/.test(location.search))return{sw:"skipped"};let e=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{e&&n&&n()});let i=null,s=Date.now();if(navigator.serviceWorker.register("sw.js").then(r=>{i=r}).catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&i&&Date.now()-s>36e5&&(s=Date.now(),i.update().catch(()=>{}))}),M0())try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist().catch(()=>{})}catch{}return{sw:"registering"}}function T0(n){addEventListener("storage",t=>{if(!(t.key!==yd||!t.newValue))try{let e=JSON.parse(t.newValue);n(e&&e.at||0)}catch{}})}function uM(n,t){return JSON.stringify({v:1,at:Date.now(),budget:n.budget,tries:n.tries,seen:[...n.seen],asked:[...n.asked],shown:[...n.shown],pins:[...n.pins],failed:[...n.failed],hints:[...n.hints],extra:t||{}})}function hM(n,{Game:t,EVIDENCE:e,PEOPLE:i,BUDGET:s,TRIES:r,HINTS:o}){let a;try{a=JSON.parse(n)}catch{return null}if(!a||a.v!==1)return null;let l=new Set(e.map(f=>f.id)),c=new Set(i.map(f=>f.id)),u=new Set(o.flatMap(f=>f.levels.map((_,b)=>f.topic+":"+b))),d=f=>Array.isArray(f)?f.filter(_=>typeof _=="string"):[],h=[...new Set(d(a.seen).filter(f=>l.has(f)))],p=[...new Set(d(a.asked).filter(f=>c.has(f)))];if(h.length+p.length>s)return null;let g=t.fresh([...new Set(d(a.hints).filter(f=>u.has(f)))]);for(let f of h)t.inspect(g,f);for(let f of p)t.ask(g,f);for(let f of d(a.shown)){let[_,b]=f.split(":");c.has(_)&&l.has(b)&&t.present(g,_,b)}for(let f of d(a.pins)){let[_,b]=f.split(":");(_==="e"&&g.seen.has(b)||_==="p"&&g.asked.has(b))&&g.pins.add(f)}let y=[...new Set(d(a.failed))].filter(f=>{let[_,b]=f.split("|");return c.has(_)&&b&&b.split("+").length===2&&b.split("+").every(v=>l.has(v))}),m=Number.isInteger(a.tries)?a.tries:r;return m!==r-y.length||m<0?null:(g.failed=y,g.tries=m,{g,extra:a.extra&&typeof a.extra=="object"?a.extra:{},at:a.at})}function E0(n,t){try{return localStorage.setItem(yd,uM(n,t)),!0}catch{return!1}}function C0(n){try{let t=localStorage.getItem(yd);return t?hM(t,n):null}catch{return null}}function R0(){try{let n=document.createElement("canvas");return!!(n.getContext("webgl2")||n.getContext("webgl"))}catch{return!1}}var ma="02\uC2DC 17\uBD84\uC5D0 \uC5B4\uB514\uC5D0\uC11C \uBB34\uC5C7\uC744 \uD558\uACE0 \uC788\uC5C8\uC2B5\uB2C8\uAE4C?",I0="\uC804\uC2DC\uC2E4\uC740 \uC815\uBB38 \uD558\uB098\uB85C\uB9CC \uB4DC\uB098\uB4E0\uB2E4. \uC720\uB9AC \uC9C4\uC5F4\uB300\uB294 \uC804\uC2DC\uC2E4 \uC548\uCABD \uCE78\uB9C9\uC774\uBCBD \uAC00\uAE4C\uC774\uC5D0 \uC11C \uC788\uACE0, \uADF8 \uBCBD \uB108\uBA38\uAC00 \uC870\uBA85 \uBD80\uC2A4\uB2E4. \uC870\uBA85 \uBD80\uC2A4\uC640 \uC74C\uD5A5 \uB370\uC2A4\uD06C\uB294 \uC804\uC2DC\uC2E4 \uBC16 \uBCF5\uB3C4\uC5D0\uC11C \uB530\uB85C \uB4DC\uB098\uB4E0\uB2E4.",Rn=[{id:"lock",name:"\uC815\uBB38 \uC7A0\uAE08 \uAE30\uB85D",kind:"\uCD9C\uC785",time:"01:58",at:2,tease:"\uC815\uBB38 \uC804\uC790 \uC7A0\uAE08\uC758 \uAE30\uB85D\uACFC \uBD09\uC778 \uB300\uC7A5.",text:"01\uC2DC 58\uBD84\uC5D0 \uC7A0\uAE30\uACE0 \uBD09\uC778\uB410\uB2E4. 02\uC2DC 19\uBD84\uC5D0 \uACBD\uBE44\uAC00 \uBD09\uC778\uC744 \uD655\uC778\uD558\uACE0 \uC5F4 \uB54C\uAE4C\uC9C0 \uBB38\uC774 \uC5F4\uB9B0 \uAE30\uB85D\uC740 \uD55C \uAC74\uB3C4 \uC5C6\uB2E4. \uADF8\uB54C\uAE4C\uC9C0 \uAE30\uACC4\uC2DD \uBD09\uC778\uC740 \uBC88\uD638\uAC00 \uB300\uC7A5\uACFC \uAC19\uC558\uACE0 \uB72F\uAE34 \uD754\uC801\uC774 \uC5C6\uC5C8\uB2E4. \uC815\uBB38 \uC606 \uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94\uB294 30\uBD84\uB9C8\uB2E4 \uB20C\uB7EC\uC57C \uD558\uB294\uB370, 02\uC2DC 00\uBD84 \uCC28\uB840\uAC00 02\uC2DC 09\uBD84\uC5D0 \uB20C\uB838\uB2E4."},{id:"fog",name:"\uC9C4\uC5F4\uB300 \uC601\uC0C1",kind:"\uD604\uC7A5",time:"02:17:00",at:4,tease:"\uC9C4\uC5F4\uB300 \uC55E\uCABD\uC744 \uBE44\uCD94\uB358 \uCE74\uBA54\uB77C\uC758 \uB179\uD654 \uC601\uC0C1\uACFC \uC548\uAC1C \uC7A5\uCE58\uC758 \uC791\uB3D9 \uAE30\uB85D.",text:"01\uC2DC 52\uBD84, \uBB38\uC138\uB77C\uAC00 \uBC1B\uCE68\uB300 \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5 \uCABD\uC73C\uB85C \uD5C8\uB9AC\uB97C \uC219\uC600\uB2E4\uAC00 \uB098\uAC04\uB2E4. 02\uC2DC 16\uBD84 59\uCD08\uAE4C\uC9C0 \uB80C\uC988\uB294 \uC81C\uC790\uB9AC\uC5D0 \uC788\uB2E4. 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC548\uAC1C\uAC00 \uD130\uC838 8\uCD08 \uB3D9\uC548 \uD654\uBA74\uC774 \uD558\uC597\uAC8C \uAC00\uB824\uC9C0\uACE0, \uC548\uAC1C\uAC00 \uAC77\uD78C \uD654\uBA74\uC5D0\uB294 \uB80C\uC988\uAC00 \uC5C6\uB2E4. \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44\uC774\uACE0, \uD654\uBA74\uC5D0 \uC0AC\uB78C\uC740 \uC7A1\uD788\uC9C0 \uC54A\uB294\uB2E4. \uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D\uC5D0\uB294 \u2018\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9\u2019\uC774\uB77C\uACE0 \uC801\uD600 \uC788\uB2E4."},{id:"drawer",name:"\uC9C4\uC5F4\uB300 \uD6C4\uBA74",kind:"\uD604\uC7A5",time:"02:17 \uC774\uD6C4",at:6,tease:"\uC720\uB9AC \uC9C4\uC5F4\uB300 \uBC1B\uCE68\uB300\uC758 \uB4B7\uBA74.",text:"\uC720\uB9AC \uB36E\uAC1C\uB294 \uC55E\uACFC \uC606, \uC704\uB9CC \uB9C9\uACE0 \uC788\uB2E4. \uB4A4\uCABD\uC740 \uC815\uBE44\uC6A9 \uC11C\uB78D\uC758 \uC55E\uD310\uC774 \uB9C9\uACE0 \uC788\uB2E4. \uC11C\uB78D\uC744 \uB2F9\uAE30\uBA74 \uB80C\uC988\uB97C \uC62C\uB824 \uB454 \uBC1B\uCE68\uD310\uC774 \uD1B5\uC9F8\uB85C \uB4A4\uB85C \uBE60\uC838\uB098\uC628\uB2E4. \uC190\uC7A1\uC774\uB294 \uCE78\uB9C9\uC774\uBCBD\uC758 \uC810\uAC80\uAD6C \uB108\uBA38, \uC870\uBA85 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uB2EC\uB824 \uC788\uB2E4. \uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC774\uCABD\uC5D0\uC11C\uB294 \uB2F9\uAE38 \uC218 \uC5C6\uB2E4. \uC11C\uB78D\uC740 \uC190\uAC00\uB77D \uB450 \uB9C8\uB514\uB9CC\uD07C \uB35C \uB2EB\uD600 \uC788\uB2E4. \uB808\uC77C\uACFC \uADF8 \uC544\uB798 \uBC14\uB2E5\uC5D0 \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8\uAC00 \uB5A8\uC5B4\uC838 \uC788\uB2E4."},{id:"cue",name:"\uC870\uBA85 \uC81C\uC5B4 \uAE30\uB85D",kind:"\uAE30\uB85D",time:"02:17:00",at:3,tease:"\uC870\uBA85 \uCF58\uC194\uC758 \uC608\uC57D\uD45C\uC640 \uC2E4\uD589 \uAE30\uB85D.",text:"\uC608\uC57D\uD45C\uC5D0 \uC62C\uB77C \uC788\uB294 \uC790\uB3D9 \uC810\uAC80\uC740 02\uC2DC 30\uBD84 \uD55C \uAC74\uBFD0\uC774\uB2E4. \uC2E4\uD589 \uAE30\uB85D\uC5D0\uB294 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uD050 \uD558\uB098\uAC00 \uC2E4\uD589\uB410\uB2E4\uACE0 \uB0A8\uC544 \uC788\uB2E4. \uC2E4\uD589 \uBC29\uC2DD\uC740 \u2018\uC218\uB3D9\u2019, \uC785\uB825 \uC704\uCE58\uB294 \u2018\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94\u2019, \uC11C\uBA85 \uCE78\uC740 \u2018H.D.Y.\u2019\uB2E4. \uC774 \uD050\uC5D0\uB294 \uC9C4\uC5F4\uB300 \uC870\uBA85\uC744 \uB0AE\uCD94\uB294 \uB3D9\uC791\uACFC \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638\uAC00 \uD568\uAED8 \uBB36\uC5EC \uC788\uB2E4. \uC6D0\uACA9 \uC811\uC18D \uAE30\uB85D\uC740 \uC5C6\uB2E4."},{id:"audio",name:"\uD604\uC7A5 \uB179\uC74C",kind:"\uAE30\uB85D",time:"02:17:03",at:5,tease:"\uC74C\uD5A5 \uB2F4\uB2F9\uC774 \uC624\uB298 \uBC24 \uB0A8\uAE34 \uB179\uC74C \uD30C\uC77C.",text:"02\uC2DC 10\uBD84\uBD80\uD130 \uB04A\uAE40 \uC5C6\uC774 \uC774\uC5B4\uC9C4 \uB179\uC74C\uC774\uB2E4. 1\uBC88 \uCC44\uB110\uC740 \uC9C4\uC5F4\uB300 \uC55E \uB9C8\uC774\uD06C, 2\uBC88 \uCC44\uB110\uC740 \uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C, 3\uBC88 \uCC44\uB110\uC740 \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC758 \uBA54\uBAA8\uC6A9 \uB9C8\uC774\uD06C\uB2E4. 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC548\uAC1C \uBD84\uC0AC\uC74C\uC774 \uC2DC\uC791\uB41C\uB2E4. 02\uC2DC 17\uBD84 03\uCD08\uC5D0 2\uBC88 \uCC44\uB110\uC5D0\uB9CC \uAE08\uC18D\uC774 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uD06C\uAC8C \uC7A1\uD78C\uB2E4. 02\uC2DC 17\uBD84 05\uCD08\uC5D0\uB294 3\uBC88 \uCC44\uB110\uC5D0 \u201C\uC5B4, \uBC8C\uC368?\u201D\uB77C\uB294 \uC11C\uC720\uC9C4\uC758 \uBAA9\uC18C\uB9AC\uAC00 \uB4E4\uC5B4 \uC788\uB2E4."},{id:"poster",name:"\uD64D\uBCF4 \uD328\uB110 \uAD50\uC815\uC9C0",kind:"\uBB38\uC11C",time:"01:40",at:1,tease:"\uBCF4\uB3C4\uC6A9 \uD64D\uBCF4 \uD328\uB110\uC758 \uB9C8\uC9C0\uB9C9 \uAD50\uC815\uC9C0.",text:"\uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \u2018\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04\u2019\uB85C \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C \uD55C \uC0AC\uB78C\uC758 \uC774\uB984\uB9CC \uC2E4\uB824 \uC788\uB2E4. \uC5EC\uBC31\uC5D0\uB294 \uC5F0\uD544\uB85C \u2018\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD\u2019, \uD30C\uB780 \uD39C\uC73C\uB85C \u2018\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4\u2019\uB77C\uACE0 \uC801\uD600 \uC788\uB2E4. \uB450 \uBA54\uBAA8 \uC704\uC5D0\uB294 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5\uC774 \uCC0D\uD600 \uC788\uACE0, \uB3C4\uC7A5\uC5D0 \uC801\uD78C \uC2DC\uAC01\uC740 01\uC2DC 40\uBD84\uC774\uB2E4."}],Je=[{id:"min",name:"\uBC15\uBBFC\uC7AC",role:"\uC57C\uAC04 \uACBD\uBE44",mark:"\u25A3",line:"\u201C\uC81C \uAE30\uB85D\uC5D0\uB294 \uBE60\uC9C4 \uAC83\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.\u201D",say:"\uC800\uB294 \uBC24\uC0C8 \uC815\uBB38 \uC55E\uC744 \uC9C0\uCF30\uC2B5\uB2C8\uB2E4. \uD55C \uBC1C\uC9DD\uB3C4 \uB5A0\uB098\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uCD9C\uC785\uC790 \uC5C6\uC74C, \uC7A0\uAE08 \uC774\uC0C1 \uC5C6\uC74C, \uBD09\uC778 \uC774\uC0C1 \uC5C6\uC74C. \uB2E4\uC2DC \uB9D0\uC500\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC800\uB294 \uBC24\uC0C8 \uC815\uBB38 \uC55E\uC744 \uC9C0\uCF30\uC2B5\uB2C8\uB2E4. \uCD9C\uC785\uC790 \uC5C6\uC74C, \uC7A0\uAE08 \uC774\uC0C1 \uC5C6\uC74C, \uBD09\uC778 \uC774\uC0C1 \uC5C6\uC74C.",other:"\uADF8\uAC83\uC740 \uC81C \uADFC\uBB34 \uAE30\uB85D \uBC16\uC758 \uC77C\uC785\uB2C8\uB2E4. \uCD94\uCE21\uC73C\uB85C \uB9D0\uC500\uB4DC\uB9AC\uC9C0\uB294 \uC54A\uACA0\uC2B5\uB2C8\uB2E4."},{id:"sera",name:"\uBB38\uC138\uB77C",role:"\uBCF4\uC874 \uB2F4\uB2F9",mark:"\u25C8",line:"\u201C\uAE30\uC0AC\uBCF4\uB2E4 \uBCF4\uC874 \uAE30\uB85D\uC774 \uBA3C\uC800\uC608\uC694.\u201D",say:"\uC815\uBB38\uC774 \uBD09\uC778\uB41C \uB4A4\uB85C\uB294 \uBCF4\uC874\uC2E4\uC5D0\uC11C \uC0C1\uD0DC \uAE30\uB85D\uC744 \uC815\uB9AC\uD588\uC5B4\uC694. \uC0AC\uAC74\uC774 \uC54C\uB824\uC9C4 \uB4A4 \uACBD\uBE44\uBD84\uC774 \uBD09\uC778\uC744 \uD480\uC5B4 \uC918\uC11C \uB4E4\uC5B4\uAC14\uC5B4\uC694. \uBC1B\uCE68\uB300\uB97C \uC0B4\uD53C\uB2E4\uAC00 \uB4A4\uCABD \uBC14\uB2E5\uC5D0\uC11C \uBD89\uC740 \uAC00\uB8E8\uB97C \uBD24\uC5B4\uC694. \uB80C\uC988\uC5D0\uC11C \uB5A8\uC5B4\uC9C4 \uAC74 \uC544\uB2C8\uC5D0\uC694. \uC5B4\uB514\uC11C \uB098\uC654\uB294\uC9C0\uB294 \uC800\uB3C4 \uBAA8\uB974\uACA0\uC5B4\uC694. \uC624\uB298 \uBC24 \uC9C4\uC5F4\uB300\uC5D0 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC190\uC744 \uB304 \uC0AC\uB78C\uC740 \uC544\uB9C8 \uC800\uC77C \uAC70\uC608\uC694.",other:"\uADF8\uAC74 \uC81C \uBCF4\uC874 \uAE30\uB85D\uACFC\uB294 \uC0C1\uAD00\uC774 \uC5C6\uB294 \uC790\uB8CC\uC608\uC694. \uC81C\uAC00 \uBCF4\uD0E4 \uB9D0\uC774 \uC5C6\uB124\uC694."},{id:"doyun",name:"\uD55C\uB3C4\uC724",role:"\uC870\uBA85 \uC124\uACC4",mark:"\u25C6",line:"\u201C\uC608\uC57D\uD45C\uC5D0 \uB2E4 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.\u201D",say:"02\uC2DC 17\uBD84\uC5D0\uB294 \uBD80\uC2A4\uB97C \uBE44\uC6B0\uACE0 \uB85C\uBE44 \uCABD \uBCF5\uB3C4\uC5D0 \uB098\uC640 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01\uC758 \uC870\uBA85 \uBCC0\uD654\uB294 \uC608\uC57D\uD45C\uC5D0 \uC7A1\uD78C \uC790\uB3D9 \uC810\uAC80\uC785\uB2C8\uB2E4. \uC2DC\uC2A4\uD15C\uC774 \uC54C\uC544\uC11C \uB3CC\uB9B0 \uAC83\uC774\uACE0, \uC800\uB294 \uCF58\uC194\uC5D0 \uC190\uB3C4 \uB300\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",other:"\uADF8 \uC790\uB8CC\uB294 \uC81C\uAC00 \uB4DC\uB9B4 \uB9D0\uC500\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC81C\uAC00 \uC544\uB294 \uBC94\uC704 \uBC16\uC758 \uC77C\uC785\uB2C8\uB2E4."},{id:"yujin",name:"\uC11C\uC720\uC9C4",role:"\uC74C\uD5A5 \uB2F4\uB2F9",mark:"\u25C9",line:"\u201C\uB4E4\uC740 \uAC83\uACFC \uBCF8 \uAC83\uC740 \uB2E4\uB974\uC8E0.\u201D",say:"\uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC5D0\uC11C \uC548\uAC1C \uC5F0\uCD9C \uD604\uC7A5\uC74C\uC744 \uB179\uC74C\uD558\uACE0 \uC788\uC5C8\uC5B4\uC694. \uD5E4\uB4DC\uD3F0 \uB108\uBA38\uB85C \uC870\uBA85 \uBD80\uC2A4 \uCABD\uC5D0\uC11C \uC218\uB808\uAC00 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uB0AC\uC5B4\uC694. \uB808\uBCA8 \uBBF8\uD130\uB9CC \uBCF4\uACE0 \uC788\uC5B4\uC11C \uB208\uC73C\uB85C\uB294 \uC544\uBB34\uAC83\uB3C4 \uBCF4\uC9C0 \uBABB\uD588\uC5B4\uC694.",other:"\uADF8 \uC790\uB8CC\uB294 \uC81C\uAC00 \uC9C1\uC811 \uBCF8 \uAC8C \uC544\uB2C8\uB77C\uC11C\uC694. \uC81C \uB179\uC74C\uC5D0 \uB0A8\uC740 \uAC83 \uB9D0\uACE0\uB294 \uC544\uB294 \uAC8C \uC5C6\uC5B4\uC694."}],dM={"doyun:cue":"\uC218\uB3D9\uC774\uB77C\uACE0 \uCC0D\uD600 \uC788\uB2E4\uACE0\uC694. \uAE30\uB85D\uC774 \uC798\uBABB \uCC0D\uD78C \uAC78 \uAC81\uB2C8\uB2E4. \uC124\uB839 \uB204\uAC00 \uB2E8\uCD94\uB97C \uB20C\uB800\uC5B4\uB3C4 \uC870\uBA85\uC774 \uD55C \uBC88 \uBC14\uB010 \uAC83\uACFC \uB80C\uC988\uAC00 \uC5C6\uC5B4\uC9C4 \uAC74 \uBCC4\uAC1C\uC785\uB2C8\uB2E4. \uC870\uBA85 \uAE30\uB85D\uC5D0\uB294 \uB2EB\uD78C \uC720\uB9AC \uB36E\uAC1C\uB97C \uB80C\uC988\uAC00 \uC5B4\uB5BB\uAC8C \uBE60\uC838\uB098\uAC14\uB294\uC9C0 \uD55C \uC904\uB3C4 \uC5C6\uC796\uC2B5\uB2C8\uAE4C.","doyun:drawer":"\uC815\uBE44 \uC11C\uB78D \uB9D0\uC500\uC774\uAD70\uC694. \uC190\uC7A1\uC774\uAC00 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uC788\uB294 \uAC83\uC740 \uB9DE\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uADF8 \uC2DC\uAC01 \uBD80\uC2A4\uB294 \uBE44\uC5B4 \uC788\uC5C8\uACE0, \uC548\uAC1C\uB3C4 \uC2DC\uC2A4\uD15C\uC774 \uC608\uC57D\uB300\uB85C \uD130\uB728\uB9B0 \uAC83\uC785\uB2C8\uB2E4. \uBE48 \uBD80\uC2A4\uC5D0\uC11C, \uB204\uAC00 \uB9CC\uB4E4\uC9C0\uB3C4 \uC54A\uC740 8\uCD08\uC5D0 \uB9DE\uCDB0 \uC11C\uB78D\uC774 \uB2F9\uACA8\uC84C\uB2E4\uB294 \uB9D0\uC500\uC785\uB2C8\uAE4C.","doyun:fog":"\uC548\uAC1C \uC7A5\uCE58\uB294 \uC2E0\uD638\uB97C \uBC1B\uC73C\uBA74 \uD130\uC9D1\uB2C8\uB2E4. \uC810\uAC80 \uD050\uC5D0 \uC548\uAC1C\uAC00 \uBB36\uC5EC \uC788\uC73C\uB2C8, \uC810\uAC80\uC774 \uB3CC\uBA74 \uC548\uAC1C\uB3C4 \uB098\uC624\uB294 \uAC81\uB2C8\uB2E4. \uC81C\uAC00 \uBCF4\uB0B8 \uC2E0\uD638\uB294 \uC544\uB2D9\uB2C8\uB2E4.","doyun:audio":"\uBD80\uC2A4\uC5D0 \uC7A5\uBE44 \uC218\uB808\uAC00 \uD55C \uB300 \uC788\uC2B5\uB2C8\uB2E4. \uBCBD \uCABD\uC5D0 \uBD99\uC5EC \uB450\uB294\uB370 \uBC14\uD034 \uC7A0\uAE08\uC1E0\uAC00 \uD5D0\uAC70\uC6CC\uC11C \uAC00\uB9CC\uD788 \uB46C\uB3C4 \uD480\uB9B4 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01\uC5D0 \uC65C \uC18C\uB9AC\uAC00 \uB0AC\uB294\uC9C0\uB294 \uC800\uB3C4 \uBAA8\uB974\uACA0\uC2B5\uB2C8\uB2E4.","doyun:poster":"\uADF8 \uC5F0\uD544 \uAE00\uC528\uB294 \uC81C \uAC83\uC785\uB2C8\uB2E4. \uC81C\uAC00 \uC124\uACC4\uD55C \uC5F0\uCD9C\uC778\uB370 \uC774\uB984\uC774 \uBE60\uC84C\uC73C\uB2C8 \uC815\uC815\uC744 \uC694\uCCAD\uD588\uC2B5\uB2C8\uB2E4. \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uACE0, \uAE30\uBD84\uC774 \uC88B\uC558\uB2E4\uACE0\uB294 \uBABB \uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC11C\uC6B4\uD55C \uAC83\uACFC \uC804\uC2DC\uBB3C\uC5D0 \uC190\uC744 \uB300\uB294 \uAC83\uC740 \uB2E4\uB978 \uC77C\uC785\uB2C8\uB2E4.","sera:fog":"\uADF8\uAC74 \uBD09\uC778\uD558\uAE30 \uC804 \uB9C8\uC9C0\uB9C9 \uC810\uAC80\uC774\uC5D0\uC694. \uBC1B\uCE68\uB300 \uC218\uD3C9\uC744 \uBCF4\uB290\uB77C \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5\uAE4C\uC9C0 \uC0B4\uD3C8\uACE0, \uADF8\uB54C\uB294 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC5C8\uC5B4\uC694. \uC810\uAC80\uD45C\uC5D0\uB3C4 \u2018\uB4A4\uCABD \uBC14\uB2E5 \uC774\uBB3C \uC5C6\uC74C\u2019\uC774\uB77C\uACE0 \uC801\uC5B4 \uB480\uC5B4\uC694. \uADF8 \uB4A4\uB85C 02\uC2DC 16\uBD84\uAE4C\uC9C0 \uB80C\uC988\uAC00 \uD654\uBA74\uC5D0 \uADF8\uB300\uB85C \uC788\uC796\uC544\uC694.","sera:drawer":"\uB808\uC77C \uC641\uC2A4\uC600\uAD70\uC694. \uBA3C\uC9C0\uCE58\uACE0\uB294 \uC7A5\uAC11 \uB05D\uC5D0 \uBBF8\uB048\uD558\uAC8C \uBB3B\uC5B4\uB098\uC11C \uC774\uC0C1\uD588\uC5B4\uC694. \uC11C\uB78D\uC774 \uC6C0\uC9C1\uC77C \uB54C \uB808\uC77C\uC5D0\uC11C \uAE4E\uC5EC \uB098\uC624\uB294 \uAC70\uC608\uC694. \uC81C\uAC00 01\uC2DC 52\uBD84\uC5D0 \uBD24\uC744 \uB54C\uB294 \uBC14\uB2E5\uC774 \uAE68\uB057\uD588\uC73C\uB2C8, \uC11C\uB78D\uC740 \uADF8 \uB4A4\uC5D0 \uC6C0\uC9C1\uC778 \uAC70\uC8E0. \uADF8\uB9AC\uACE0 \uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC800\uB294 \uC5F4 \uC218\uAC00 \uC5C6\uC5B4\uC694.","sera:cue":"\uC870\uBA85 \uAE30\uB85D\uC740 \uC81C\uAC00 \uC77D\uC744 \uC904 \uBAB0\uB77C\uC694. \uB2E4\uB9CC 02\uC2DC 30\uBD84 \uC810\uAC80\uC740 \uBCF4\uC874\uC2E4\uC5D0\uB3C4 \uBBF8\uB9AC \uC54C\uB9BC\uC774 \uC654\uC5B4\uC694. 02\uC2DC 17\uBD84\uC5D0 \uBB34\uC5B8\uAC00 \uB3CC\uB9B0\uB2E4\uB294 \uC598\uAE30\uB294 \uB4E4\uC740 \uC801\uC774 \uC5C6\uC5B4\uC694.","sera:lock":"02\uC2DC 19\uBD84\uC5D0 \uBD09\uC778\uC744 \uD480 \uB54C \uC800\uB3C4 \uC606\uC5D0 \uC788\uC5C8\uC5B4\uC694. \uBC88\uD638\uB97C \uB300\uC7A5\uACFC \uB9DE\uCDB0 \uBCF4\uACE0 \uB098\uC11C \uAC19\uC774 \uB4E4\uC5B4\uAC14\uC5B4\uC694. \uADF8 \uC804\uC5D0\uB294 \uC544\uBB34\uB3C4 \uB4E4\uC5B4\uAC00\uC9C0 \uBABB\uD588\uC5B4\uC694.","min:lock":"9\uBD84 \uB2A6\uC740 \uAC83, \uB9DE\uC2B5\uB2C8\uB2E4. \uC790\uB9AC\uB97C \uB72C \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uC544\uCE68 \uAD50\uB300 \uB54C \uC62C\uB9B4 \uADFC\uBB34 \uBCF4\uACE0 \uBB38\uC7A5\uC744 \uC218\uCCA9\uC5D0 \uC801\uC5B4 \uC678\uC6B0\uB2E4\uAC00 \uC2DC\uAC04\uC744 \uB193\uCCE4\uC2B5\uB2C8\uB2E4. \uAE34\uC7A5\uD558\uBA74 \uB9D0\uC744 \uB354\uB4EC\uC5B4\uC11C \uB298 \uADF8\uB807\uAC8C \uC5F0\uC2B5\uD569\uB2C8\uB2E4. \uC678\uC6B4 \uAC83\uCC98\uB7FC \uB4E4\uB838\uB2E4\uBA74 \uC815\uB9D0 \uC678\uC6E0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB2E8\uCD94\uB97C \uB2A6\uAC8C \uB20C\uB800\uC5B4\uB3C4, \uBD09\uC778\uC744 \uD480 \uB54C\uAE4C\uC9C0 \uADF8 \uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","min:fog":"\uC548\uAC1C\uAC00 \uD130\uC84C\uC744 \uB54C\uB3C4 \uC800\uB294 \uBB38 \uC55E\uC5D0 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC815\uBB38 \uC720\uB9AC \uB108\uBA38\uB85C \uBFCC\uC5F0 \uAC83\uB9CC \uBCF4\uC600\uACE0, \uADF8 \uC548\uC5D0\uC11C \uC6C0\uC9C1\uC774\uB294 \uC0AC\uB78C\uC740 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4.","min:drawer":"\uBC1B\uCE68\uB300 \uB4A4\uC5D0 \uC11C\uB78D\uC774 \uC788\uB2E4\uB294 \uAC83\uC740 \uC9C0\uAE08 \uCC98\uC74C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC81C \uC790\uB9AC\uB294 \uC815\uBB38 \uC55E\uC774\uACE0, \uBCF5\uB3C4\uB294 \uBB38 \uC55E\uC5D0\uC11C \uBCF4\uC774\uB294 \uB370\uAE4C\uC9C0\uB9CC \uBD05\uB2C8\uB2E4. \uC870\uBA85 \uBD80\uC2A4 \uC5F4\uC1E0\uB294 \uC800\uD55C\uD14C \uC5C6\uC2B5\uB2C8\uB2E4.","min:poster":"\uADF8 \uC885\uC774\uB294 01\uC2DC 40\uBD84\uCBE4 \uBCF5\uB3C4 \uAC8C\uC2DC\uD310\uC5D0 \uBD99\uC5B4 \uC788\uB358 \uAC83\uC785\uB2C8\uB2E4. \uB204\uAC00 \uBA54\uBAA8\uB97C \uC801\uC5C8\uB294\uC9C0\uB294 \uBCF4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","yujin:audio":"\uC548\uAC1C\uB294 \uC6D0\uB798 02\uC2DC 30\uBD84 \uC810\uAC80 \uB54C \uD130\uC9C8 \uC608\uC815\uC774\uC5C8\uC5B4\uC694. \uB193\uCE58\uAE30 \uC2EB\uC5B4\uC11C 02\uC2DC 10\uBD84\uBD80\uD130 \uBBF8\uB9AC \uB179\uC74C\uC744 \uAC78\uC5B4 \uB480\uC5B4\uC694. \uAE30\uB2E4\uB9AC\uB294\uB370 13\uBD84\uC774\uB098 \uC77C\uCC0D \uD130\uC84C\uC5B4\uC694. \uADF8\uB798\uC11C \uC81C \uBAA9\uC18C\uB9AC\uAC00 \uB4E4\uC5B4\uAC04 \uAC70\uC608\uC694. \uADF8 \uC21C\uAC04 \uC800\uB294 \uB370\uC2A4\uD06C \uB9C8\uC774\uD06C \uC55E\uC5D0 \uC549\uC544 \uC788\uC5C8\uC5B4\uC694. \uB538\uAE4D \uC18C\uB9AC\uB294 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C\uC5D0\uB9CC \uC7A1\uD614\uACE0\uC694.","yujin:cue":"02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC218\uB3D9 \uC2E4\uD589\uC774\uB77C\uBA74 \uC81C \uB179\uC74C\uACFC \uB9DE\uC544\uC694. 00\uCD08\uC5D0 \uC548\uAC1C\uAC00 \uD130\uC9C0\uACE0 3\uCD08 \uB4A4\uC5D0 \uBD80\uC2A4 \uCABD\uC5D0\uC11C \uB538\uAE4D \uC18C\uB9AC\uAC00 \uB0AC\uAC70\uB4E0\uC694. \uB204\uAC00 \uB20C\uB800\uB294\uC9C0\uB294 \uC18C\uB9AC\uB85C\uB294 \uC54C \uC218 \uC5C6\uC9C0\uB9CC\uC694.","yujin:drawer":"\uADF8 \uC11C\uB78D\uC774 \uC870\uBA85 \uBD80\uC2A4 \uCABD\uC73C\uB85C \uBE60\uC9C4\uB2E4\uBA74 \uC81C\uAC00 \uC18C\uB9AC\uB97C \uB4E4\uC740 \uBC29\uD5A5\uACFC \uAC19\uB124\uC694. \uB2E4\uB9CC \uC800\uB294 \uC218\uB808 \uC18C\uB9AC\uB85C \uB4E4\uC5C8\uC5B4\uC694. \uC11C\uB78D \uC18C\uB9AC\uC778\uC9C0\uB294 \uC7A5\uB2F4\uD558\uC9C0 \uBABB\uD574\uC694.","yujin:poster":"\uD30C\uB780 \uD39C\uC740 \uC81C \uAE00\uC528\uC608\uC694. \uC800\uB3C4 \uC774\uB984\uC774 \uBE60\uC84C\uC73C\uB2C8\uAE4C\uC694. \uD654\uB294 \uB0AC\uC9C0\uB9CC \uADF8 \uC2DC\uAC04\uC5D0 \uC800\uB294 \uB370\uC2A4\uD06C\uC5D0\uC11C \uB179\uC74C\uD558\uACE0 \uC788\uC5C8\uACE0, \uADF8\uAC74 \uD30C\uC77C\uC774 \uB9D0\uD574 \uC918\uC694."},Gc=[{topic:"route",until:"drawer",levels:["\uC815\uBB38\uB3C4 \uC720\uB9AC \uB36E\uAC1C\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uB2E4\uBA74 \uB80C\uC988\uB294 \uBB38\uACFC \uB36E\uAC1C\uAC00 \uC544\uB2CC \uCABD\uC73C\uB85C \uB098\uAC14\uC2B5\uB2C8\uB2E4.","\uCE74\uBA54\uB77C\uB294 \uC9C4\uC5F4\uB300\uC758 \uC55E\uCABD\uB9CC \uBE44\uCDA5\uB2C8\uB2E4. \uD654\uBA74\uC5D0 \uCC0D\uD788\uC9C0 \uC54A\uB294 \uCABD\uC774 \uC5B4\uB514\uC778\uC9C0 \uC0DD\uAC01\uD574 \uBCF4\uC138\uC694.","\uD604\uC7A5 \uD0ED\uC5D0\uC11C \u300C\uC9C4\uC5F4\uB300 \uD6C4\uBA74\u300D\uC744 \uD655\uC778\uD558\uC138\uC694."]},{topic:"record",until:"cue",levels:["\uAE38 \uB2E4\uC74C\uC740 \uC2DC\uAC01\uC785\uB2C8\uB2E4. 02\uC2DC 17\uBD84\uC758 8\uCD08 \uB3D9\uC548 \uBB34\uC5C7\uC774 \uC5B4\uB5A4 \uC21C\uC11C\uB85C \uC6C0\uC9C1\uC600\uB294\uC9C0 \uC801\uC5B4 \uB454 \uAE30\uB85D\uC744 \uCC3E\uC544\uBCF4\uC138\uC694.","\uC548\uAC1C\uB294 \uC800\uC808\uB85C \uD130\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC548\uAC1C \uC7A5\uCE58\uC5D0 \uC2E0\uD638\uB97C \uBCF4\uB0B8 \uCABD\uC758 \uAE30\uB85D\uC774 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.","\uD604\uC7A5 \uD0ED\uC5D0\uC11C \u300C\uC870\uBA85 \uC81C\uC5B4 \uAE30\uB85D\u300D\uC744 \uD655\uC778\uD558\uC138\uC694."]},{topic:"compare",levels:["\uC99D\uAC70\uB9CC\uC73C\uB85C\uB294 \uC0AC\uB78C\uC744 \uAC00\uB9AC\uD0AC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0AC\uB78C\uB4E4\uC758 \uB9D0\uC744 \uB4E3\uACE0, \uBA74\uB2F4\uC5D0\uC11C \uC99D\uAC70\uB97C \uC81C\uC2DC\uD574 \uAC01\uC790\uC758 \uB9D0\uACFC \uAE30\uB85D\uC774 \uAC19\uC740 \uC774\uC57C\uAE30\uB97C \uD558\uB294\uC9C0 \uB9DE\uB300\uC5B4 \uBCF4\uC138\uC694. \uC99D\uAC70 \uC81C\uC2DC\uC5D0\uB294 \uC870\uC0AC \uAE30\uD68C\uB97C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098 \uBCF4\uC774\uB294 \uC0AC\uB78C\uC774 \uD55C \uBA85\uBFD0\uC774\uB77C\uACE0 \uB2E8\uC815\uD558\uC9C0 \uB9C8\uC138\uC694. \uC5B4\uAE0B\uB098\uB294 \uB300\uBAA9\uB9C8\uB2E4 \uBCF8\uC778\uC758 \uB2F5\uC774 \uC788\uACE0, \uADF8 \uB2F5\uC740 \uB2E4\uB978 \uAE30\uB85D\uC73C\uB85C \uB4B7\uBC1B\uCE68\uB418\uAE30\uB3C4 \uD558\uACE0 \uADF8\uB807\uC9C0 \uC54A\uAE30\uB3C4 \uD569\uB2C8\uB2E4.","\uBB3C\uC744 \uAC83\uC740 \uB450 \uAC00\uC9C0\uC785\uB2C8\uB2E4. \uD558\uB098, \uB80C\uC988\uAC00 \uC0AC\uB77C\uC9C4 8\uCD08 \uB3D9\uC548 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC758 \uB05D\uC5D0 \uB204\uAC00 \uC788\uC744 \uC218 \uC788\uC5C8\uB294\uAC00? \uB458, \uADF8 \uC2DC\uAC01 \uADF8 \uC790\uB9AC\uC758 \uC77C\uC744 \uB450\uACE0 \uB204\uAC00 \uAE30\uB85D\uACFC \uB2E4\uB978 \uB9D0\uC744 \uD588\uB294\uAC00? \uB450 \uB2F5\uC774 \uAC19\uC740 \uC0AC\uB78C\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."]},{topic:"accuse",levels:["\uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uC99D\uAC70\uB294 \uD558\uB098\uBFD0\uC785\uB2C8\uB2E4. \uB0A8\uC740 \uD55C \uC790\uB9AC\uC5D0\uB294, \uADF8 \uAE38\uC758 \uB05D\uC5D0 \uADF8 \uC2DC\uAC01 \uB204\uAC00 \uC788\uC5C8\uB294\uC9C0\uB97C \uB9D0\uD574 \uC8FC\uB294 \uAE30\uB85D\uC774 \uB4E4\uC5B4\uAC00\uC57C \uD569\uB2C8\uB2E4.","\uB450 \uC99D\uAC70 \uBAA8\uB450 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC5D0\uAC8C \uC9C1\uC811 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC138\uC694. \uD55C \uC99D\uAC70\uC5D0 \uB300\uD55C \uB2F5\uC744 \uB2E4\uB978 \uC99D\uAC70\uAC00 \uBB34\uB108\uB728\uB9AC\uB294\uC9C0, \uB450 \uB2F5\uC744 \uB098\uB780\uD788 \uB193\uACE0 \uC77D\uC5B4 \uBCF4\uC138\uC694.","\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uB450 \uC99D\uAC70\uAC00 \uAC19\uC740 \uC2DC\uAC01, \uAC19\uC740 \uC790\uB9AC\uB97C \uAC00\uB9AC\uD0A4\uB294\uC9C0, \uADF8\uB9AC\uACE0 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC774 \uADF8 \uC2DC\uAC01 \uADF8 \uC790\uB9AC\uC5D0 \uB300\uD574 \uD55C \uB9D0\uACFC \uB9DE\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."]}],L0={route:"\uB80C\uC988\uAC00 \uC804\uC2DC\uC2E4 \uBC16\uC73C\uB85C \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uBB3C\uC99D\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC815\uBB38\uC774 \uC7A0\uACA8 \uC788\uC5C8\uB2E4\uB294 \uAE30\uB85D\uC740 \uBB38\uC73C\uB85C\uB294 \uB098\uAC00\uC9C0 \uC54A\uC558\uB2E4\uB294 \uAC83\uB9CC \uB9D0\uD574 \uC904 \uBFD0, \uC5B4\uB5BB\uAC8C \uB098\uAC14\uB294\uC9C0\uB294 \uB9D0\uD574 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",record:"02\uC2DC 17\uBD84\uC5D0 \uC7A5\uCE58\uB97C \uC6C0\uC9C1\uC778 \uC190\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uAE30\uB85D\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAE38\uC744 \uCC3E\uC558\uC5B4\uB3C4 \uADF8 \uC2DC\uAC01\uC5D0 \uB204\uAC00 \uBB34\uC5C7\uC744 \uD588\uB294\uC9C0 \uB9DE\uB300\uC5B4 \uBCFC \uAE30\uB85D\uC774 \uC5C6\uC73C\uBA74 \uC0AC\uB78C\uC744 \uAC00\uB9AC\uD0AC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."},P0={route:"\uC81C\uCD9C\uD55C \uB450 \uC99D\uAC70\uB85C\uB294 \uB2EB\uD78C \uC720\uB9AC \uB36E\uAC1C\uC640 \uC7A0\uAE34 \uC804\uC2DC\uC2E4\uC744 \uB80C\uC988\uAC00 \uC5B4\uB5BB\uAC8C \uBE60\uC838\uB098\uAC14\uB294\uC9C0 \uC124\uBA85\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uAE38\uC744 \uBC1D\uD788\uC9C0 \uBABB\uD558\uBA74 \uB204\uAD6C\uB97C \uC9C0\uBAA9\uD574\uB3C4 \uACB0\uB860\uC774 \uC11C\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",link:"\uB80C\uC988\uAC00 \uC804\uC2DC\uC2E4\uC744 \uBE60\uC838\uB098\uAC04 \uAE38\uC740 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC9C0\uBAA9\uD55C \uC0AC\uB78C\uC774 \uADF8 \uAE38\uC744 \uC37C\uB2E4\uB294 \uC810\uC740 \uC785\uC99D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uADF8 \uC0AC\uB78C\uC740 \uC81C\uC2DC\uB41C \uC99D\uAC70\uC5D0 \uB2F5\uC744 \uB0B4\uB193\uC558\uACE0, \uC81C\uCD9C\uD55C \uB450 \uC99D\uAC70\uB85C\uB294 \uADF8 \uB2F5\uC744 \uBB34\uB108\uB728\uB9AC\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."},pa={culprit:"doyun",route:"drawer",record:"cue"},fe={fresh(n){return{budget:9,tries:3,seen:new Set,asked:new Set,shown:[],pins:new Set,failed:[],hints:n||[]}},inspect(n,t){return n.seen.has(t)?"again":n.budget?(n.seen.add(t),n.budget--,"new"):"blocked"},ask(n,t){return n.asked.has(t)?"again":n.budget?(n.asked.add(t),n.budget--,"new"):"blocked"},present(n,t,e){if(!n.asked.has(t)||!n.seen.has(e))return"blocked";let i=t+":"+e;return n.shown.includes(i)?"again":(n.shown.push(i),"new")},reaction(n,t){return dM[n+":"+t]||Je.find(e=>e.id===n).other},lacking(n){let t=[];return n.seen.has(pa.route)||t.push("route"),n.seen.has(pa.record)||t.push("record"),t},stuck(n){return n.budget===0&&fe.lacking(n).length>0},unheard(n){return n.budget===0&&n.asked.size<Je.length},ready(n,t,e){let i=[{id:"person",ok:!!t},{id:"proof",ok:e.length===2}];if(t)for(let s of e)i.push({id:"shown",e:s,ok:n.shown.includes(t+":"+s)});return{ok:n.tries>0&&!!t&&e.length===2&&i.every(s=>s.ok),steps:i}},combo(n,t){return n+"|"+[...t].sort().join("+")},tried(n,t,e){return n.failed.includes(fe.combo(t,e))},judge(n,t){let e=t.includes(pa.route),i=e&&n===pa.culprit&&t.includes(pa.record);return{ok:i,kind:i?"win":e?"link":"route"}},submit(n,t,e){if(!fe.ready(n,t,e).ok)return null;let i=fe.judge(t,e);return i.ok||(n.tries--,n.failed.push(fe.combo(t,e))),i},nextHint(n){for(let t of Gc)if(!(t.until&&n.seen.has(t.until)))for(let e=0;e<t.levels.length;e++){let i=t.topic+":"+e;if(!n.hints.includes(i))return i}return null},hintText(n){let[t,e]=n.split(":");return Gc.find(i=>i.topic===t).levels[+e]},takeHint(n){let t=fe.nextHint(n);return t&&n.hints.push(t),t}};var P={g:null,ui:null,world:null,no3d:!1,unavailable:!1,talkPid:null,sceneTold:!1,insets:{top:0,bottom:0,left:0,right:0},makeWorld:null},vd=n=>({tab:"scene",person:"",proof:[],verdict:null,notice:"",selected:null,board:null,lit:null,playing:null,story:null,auto:!1,view:"all",started:!!n,card:null,cardTab:"art",notesPage:"plan",winPage:"time",accusePage:"pick",pg:{}}),fM=new Set(["sync","pause","setQuality","setInsets","dispose","debug","setReducedMotion"]);function $t(n,...t){let e=P.world;if(!e||typeof e[n]!="function"||P.no3d&&!fM.has(n))return Promise.resolve();try{return Promise.resolve(e[n](...t)).catch(()=>{})}catch{return Promise.resolve()}}function Vc(n,...t){let e=P.world;if(!e||P.no3d||typeof e[n]!="function")return null;try{return e[n](...t)}catch{return null}}var Ki=()=>!!P.world&&!P.no3d,D0=new Set;function Qs(n){return D0.has(n)?!1:(D0.add(n),!0)}var O0="0217-v3-settings",In=(()=>{let n={motion:!1,quality:"auto",off3d:!1};try{let t=JSON.parse(localStorage.getItem(O0)||"{}")||{};typeof t.motion=="boolean"&&(n.motion=t.motion),["auto","low","high"].includes(t.quality)&&(n.quality=t.quality),typeof t.off3d=="boolean"&&(n.off3d=t.off3d)}catch{}return n})();function ga(){try{localStorage.setItem(O0,JSON.stringify(In))}catch{}}var N0=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}})(),dn=()=>In.motion||!!(N0&&N0.matches),U0=(()=>{try{return matchMedia("(max-height: 520px), (min-width: 960px)")}catch{return null}})(),Hc=()=>!!(U0&&U0.matches);var k0="0217-v3-sound";var Se=null,tr=null,xa=null,Wc=null,ws=!0;try{ws=localStorage.getItem(k0)!=="off"}catch{}var jn=()=>ws;function z0(n){ws=!!n;try{localStorage.setItem(k0,ws?"on":"off")}catch{}if(Se)try{ws?Sd():Se.suspend()}catch{}}var G0=["pointerdown","pointerup","touchend","click","keydown"],qc=!1;function Xc(){if(!qc){qc=!0;for(let n of G0)addEventListener(n,W0,{capture:!0,passive:!0})}}function bd(){if(qc){qc=!1;for(let n of G0)removeEventListener(n,W0,{capture:!0})}}var V0=[];function H0(n){typeof n=="function"&&V0.push(n)}function F0(){for(let n of V0)try{n()}catch{}}function Sd(){if(Se){if(Se.state==="running"){bd(),F0();return}try{Se.resume().then(()=>{Se&&Se.state==="running"?(bd(),F0()):Xc()},Xc)}catch{Xc()}}}function W0(){if(ws){if(!Se){try{navigator.audioSession&&(navigator.audioSession.type="ambient")}catch{}let n=window.AudioContext||window.webkitAudioContext;if(!n){bd();return}try{Se=new n,tr=Se.createGain(),tr.gain.value=.5,tr.connect(Se.destination),xa=Se.createGain(),xa.gain.value=.05,xa.connect(tr),Wc=Se.createGain(),Wc.connect(tr)}catch{Se=null,xa=Wc=null;return}}Sd()}}function er(){return Se?{ctx:Se,voiceBus:Wc,musicBus:xa}:null}function X0(){Xc(),document.addEventListener("visibilitychange",()=>{Se&&document.hidden?Se.suspend().catch(()=>{}):Se&&ws&&Sd()})}function be(n,t,{type:e="sine",gain:i=.12,at:s=0,to:r=null}={}){let o=Se.currentTime+s,a=Se.createOscillator(),l=Se.createGain();a.type=e,a.frequency.setValueAtTime(n,o),r&&a.frequency.exponentialRampToValueAtTime(r,o+t),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(tr),a.start(o),a.stop(o+t+.02)}function $i(n,{type:t="bandpass",freq:e=1200,q:i=.8,gain:s=.1,at:r=0,attack:o=.01}={}){let a=Se.currentTime+r,l=Math.max(1,Math.floor(Se.sampleRate*n)),c=Se.createBuffer(1,l,Se.sampleRate),u=c.getChannelData(0);for(let g=0;g<l;g++)u[g]=Math.random()*2-1;let d=Se.createBufferSource(),h=Se.createBiquadFilter(),p=Se.createGain();d.buffer=c,h.type=t,h.frequency.value=e,h.Q.value=i,p.gain.setValueAtTime(1e-4,a),p.gain.exponentialRampToValueAtTime(s,a+o),p.gain.exponentialRampToValueAtTime(1e-4,a+n),d.connect(h).connect(p).connect(tr),d.start(a),d.stop(a+n+.02)}var B0={tick(){be(1800,.03,{gain:.035})},spend(){be(660,.12,{type:"triangle",gain:.1}),be(440,.2,{type:"triangle",gain:.1,at:.1})},free(){be(880,.09,{gain:.06})},fog(){$i(1.6,{freq:1400,q:.6,gain:.08,attack:.35})},click(){$i(.03,{type:"highpass",freq:3e3,gain:.18}),be(2400,.03,{type:"square",gain:.05})},beep(){be(1e3,.07,{type:"square",gain:.04}),be(1e3,.07,{type:"square",gain:.04,at:.12})},slide(){$i(.32,{freq:2600,q:.7,gain:.1,attack:.06}),$i(.18,{type:"lowpass",freq:700,gain:.06,at:.12})},stamp(){be(90,.16,{gain:.22,to:60}),$i(.05,{type:"lowpass",freq:600,gain:.12})},tense(){be(110,.9,{type:"sawtooth",gain:.035}),be(116,.9,{type:"sawtooth",gain:.03})},solve(){[523,659,784,1047].forEach((n,t)=>be(n,.5,{gain:.08,at:t*.12}))},fail(){be(220,.6,{type:"triangle",gain:.09,to:165})},blip(){be(640,.03,{type:"square",gain:.016})},page(){be(392,.35,{type:"triangle",gain:.045}),be(587,.45,{type:"triangle",gain:.035,at:.08})},reveal(){be(784,.16,{type:"triangle",gain:.07}),be(1175,.3,{type:"triangle",gain:.055,at:.07}),$i(.25,{type:"highpass",freq:5e3,gain:.025,attack:.05,at:.05})},pin(){be(1480,.05,{type:"triangle",gain:.08}),$i(.025,{type:"highpass",freq:4e3,gain:.07})},unpin(){be(1180,.08,{type:"triangle",gain:.06,to:820})},hint(){be(988,.12,{gain:.06}),be(1319,.28,{gain:.05,at:.1})},notice(){be(1047,.16,{gain:.05}),be(784,.24,{gain:.04,at:.09})},submit(){$i(.05,{type:"lowpass",freq:900,gain:.12}),be(150,.2,{type:"triangle",gain:.14,to:95})},verdict(){be(392,.7,{type:"triangle",gain:.06}),be(587,.7,{type:"triangle",gain:.045,at:.05}),$i(.6,{freq:900,q:.7,gain:.035,attack:.3})},story(){be(523,.25,{type:"triangle",gain:.045}),be(659,.35,{type:"triangle",gain:.035,at:.07})},dialog(){be(880,.06,{type:"triangle",gain:.05}),be(1320,.09,{type:"triangle",gain:.04,at:.04})},tab(){be(1100,.04,{type:"triangle",gain:.05})}};function Ke(n){if(!(!ws||!Se||Se.state!=="running"||!B0[n]))try{B0[n]()}catch{}}var _a={opening:{bpm:84,tpb:4,loop:4,gain:.856,form:["A","B","C","D","T"],ch:{p1:{duty:.25,vol:.6,a:.02,d:.4,s:.45,r:.35,vib:6},p2:{duty:.125,vol:.42,a:.004,d:.28,s:.12,r:.25,vib:0},tri:{vol:.9,a:.015,d:.2,s:.8,r:.25},noise:{vol:.32}},sections:{A:{len:32,p1:[[0,4,"D5",.62],[4,2,"E5",.58],[6,6,"A5",.68],[12,2,"G5",.58],[14,2,"E5",.54],[16,6,"F5",.64],[22,2,"D5",.54],[24,8,"E5",.6]],p2:[[0,2,"D4",.3,.125],[2,2,"F4",.34,.125],[4,2,"A4",.4,.25],[6,2,"E5",.48,.5],[8,2,"D5",.44,.5],[10,2,"A4",.4,.25],[12,2,"F4",.33,.125],[14,2,"A4",.3,.125],[16,2,"D4",.3,.125],[18,2,"F4",.35,.125],[20,2,"A4",.42,.25],[22,2,"C5",.48,.5],[24,2,"A4",.45,.5],[26,2,"F4",.4,.25],[28,2,"D4",.33,.125],[30,2,"F4",.3,.125]],tri:[[0,16,"D3",.66],[16,10,"D3",.64],[26,6,"A2",.6]],noise:[[4,1,"h",.25],[12,1,"h",.2],[16,3,"b",.28],[20,1,"h",.25],[28,1,"h",.2]]},B:{len:32,p1:[[0,4,"D5",.68],[4,2,"F5",.62],[6,6,"A5",.72],[12,2,"G5",.62],[14,2,"F5",.58],[16,6,"G5",.68],[22,2,"E5",.58],[24,8,"D5",.62]],p2:[[0,2,"Bb3",.33,.125],[2,2,"F4",.38,.125],[4,2,"A4",.45,.25],[6,2,"D5",.54,.5],[8,2,"A4",.48,.5],[10,2,"F4",.42,.25],[12,2,"D4",.35,.125],[14,2,"F4",.32,.125],[16,2,"C4",.33,.125],[18,2,"E4",.38,.125],[20,2,"G4",.45,.25],[22,2,"C5",.54,.5],[24,2,"G4",.48,.5],[26,2,"E4",.42,.25],[28,2,"C4",.35,.125],[30,2,"E4",.32,.125]],tri:[[0,10,"Bb2",.72],[10,6,"F3",.6],[16,10,"C3",.72],[26,6,"G3",.6]],noise:[[0,3,"b",.4],[4,1,"h",.25],[12,1,"h",.2],[16,3,"b",.4],[20,1,"h",.25],[28,1,"h",.2]]},C:{len:32,p1:[[0,4,"G5",.72],[4,2,"A5",.68],[6,6,"D6",.78],[12,2,"C6",.68],[14,2,"Bb5",.64],[16,8,"A5",.72],[24,4,"G5",.6],[28,4,"E5",.55]],p2:[[0,2,"G3",.35,.125],[2,2,"D4",.4,.125],[4,2,"Bb4",.47,.25],[6,2,"D5",.56,.5],[8,2,"Bb4",.5,.5],[10,2,"D4",.44,.25],[12,2,"Bb3",.37,.125],[14,2,"D4",.34,.125],[16,2,"A3",.35,.125],[18,2,"E4",.4,.125],[20,2,"A4",.47,.25],[22,2,"D5",.54,.5],[24,4,"C#5",.48,.25],[28,4,"A4",.38,.125]],tri:[[0,10,"G2",.75],[10,6,"D3",.62],[16,16,"A2",.72]],noise:[[0,1,"k",.4],[4,1,"h",.25],[12,1,"h",.22],[16,1,"k",.4],[20,1,"h",.25],[28,3,"b",.35]]},D:{len:32,p1:[[0,4,"F5",.7],[4,2,"G5",.64],[6,6,"A5",.72],[12,2,"F5",.6],[14,2,"D5",.56],[16,6,"E5",.64],[22,2,"G5",.56],[24,8,"E5",.52]],p2:[[0,2,"Bb3",.33,.125],[2,2,"F4",.38,.125],[4,2,"A4",.45,.25],[6,2,"D5",.54,.5],[8,2,"A4",.48,.5],[10,2,"F4",.42,.25],[12,2,"D4",.35,.125],[14,2,"F4",.32,.125],[16,2,"C4",.33,.125],[18,2,"E4",.38,.125],[20,2,"G4",.44,.25],[22,2,"C5",.5,.5],[24,4,"G4",.4,.25],[28,4,"E4",.32,.125]],tri:[[0,10,"Bb2",.72],[10,6,"F3",.6],[16,16,"C3",.66]],noise:[[0,1,"k",.4],[4,1,"h",.25],[8,1,"k",.3],[12,1,"h",.22],[16,1,"k",.36],[20,1,"h",.22],[24,3,"b",.3]]},T:{len:64,p1:[[0,4,"D5",.46],[4,2,"E5",.44],[6,10,"A5",.5],[32,4,"D5",.46],[36,2,"F5",.44],[38,6,"A5",.48],[44,4,"G5",.44],[48,16,"E5",.48]],p2:[[0,4,"D4",.28,.125],[4,4,"A4",.34,.25],[8,4,"D5",.4,.5],[12,4,"E5",.34,.25],[16,4,"D4",.3,.125],[20,4,"G4",.36,.25],[24,4,"B4",.42,.5],[28,4,"D5",.36,.25],[32,4,"D4",.3,.125],[36,4,"F4",.36,.25],[40,4,"A4",.42,.5],[44,4,"D5",.36,.25],[48,4,"A3",.3,.125],[52,4,"E4",.36,.25],[56,4,"A4",.42,.5],[60,4,"C#5",.38,.25]],tri:[[0,16,"D3",.54],[16,16,"B2",.54],[32,16,"Bb2",.56],[48,16,"A2",.58]],noise:[[8,1,"h",.18],[24,3,"b",.26],[40,1,"h",.18],[60,4,"b",.3]]}}},investigate:{bpm:72,tpb:4,loop:0,gain:.994,form:["A","B","C","A2","D","E"],ch:{p1:{duty:.5,vol:.28,a:.06,d:.5,s:.5,r:.45,vib:6},p2:{duty:.25,vol:.22,a:.004,d:.8,s:0,r:.3,vib:0},tri:{vol:.54,a:.02,d:.3,s:.85,r:.18},noise:{vol:.14}},sections:{A:{len:64,p1:[[12,4,"D5",.55],[16,10,"F5",.6],[28,4,"E5",.5],[32,7,"D5",.55],[40,6,"Bb4",.5],[48,12,"E5",.55]],p2:[[4,4,"F4",.5],[8,4,"A4",.5],[20,4,"A4",.5],[24,4,"D5",.45],[36,4,"A4",.5],[44,4,"G4",.4],[52,4,"A4",.5],[56,4,"D5",.45]],tri:[[0,14,"D3",.8],[16,14,"Bb2",.8],[32,14,"G2",.8],[48,9,"A2",.8],[58,5,"E3",.6]],noise:[[24,3,"b",.4],[44,1,"h",.25],[56,3,"b",.35]]},B:{len:64,p1:[[2,5,"C5",.5],[8,7,"G5",.55],[18,8,"E5",.55],[28,4,"D5",.5],[32,7,"F5",.55],[40,6,"C5",.5],[48,12,"B4",.55]],p2:[[4,4,"A4",.5],[12,4,"C5",.4],[20,4,"G4",.5],[24,4,"C5",.4],[36,4,"A4",.5],[44,4,"F4",.4],[52,4,"G4",.5],[56,4,"D5",.45],[60,4,"G5",.28,.125]],tri:[[0,14,"F3",.75],[16,14,"E3",.75],[32,14,"D3",.8],[48,9,"G2",.8],[58,5,"D3",.6]],noise:[[8,3,"b",.35],[28,1,"h",.2],[40,3,"b",.35],[60,1,"h",.2]]},C:{len:64,p1:[[20,10,"F4",.45],[32,13,"E4",.5],[52,8,"G4",.45]],p2:[[4,4,"A4",.5],[8,4,"D5",.45],[12,4,"F5",.4],[24,5,"A5",.26,.125],[36,4,"G4",.5],[40,4,"C5",.45],[44,4,"E5",.4],[56,5,"G5",.26,.125]],tri:[[0,14,"Bb2",.8],[16,14,"D3",.7],[32,14,"A2",.8],[48,14,"E3",.7]],noise:[[28,3,"b",.35],[60,3,"b",.3]]},A2:{len:64,p1:[[4,10,"A4",.5],[16,10,"D5",.55],[28,4,"C5",.45],[32,7,"Bb4",.5],[40,6,"G4",.45],[48,12,"A4",.5]],p2:[[8,4,"D5",.4],[12,4,"F5",.35],[24,4,"F5",.4],[28,4,"A5",.25,.125],[40,4,"D5",.4],[44,4,"G5",.3],[56,4,"E5",.4],[60,4,"A5",.25,.125]],tri:[[0,10,"D3",.8],[10,4,"A3",.55],[16,14,"Bb2",.8],[32,10,"G2",.8],[42,4,"D3",.55],[48,9,"A2",.8],[58,5,"E3",.6]],noise:[[12,3,"b",.3],[44,1,"h",.2],[52,3,"b",.3]]},D:{len:64,p1:[[2,5,"D5",.5],[8,7,"Bb4",.5],[16,10,"F5",.6],[28,4,"E5",.5],[32,10,"G5",.58],[44,4,"F5",.5],[48,6,"D5",.55],[56,7,"E5",.5]],p2:[[4,4,"A4",.5],[12,4,"G4",.4],[20,4,"A4",.5],[24,4,"D5",.45],[36,4,"Bb4",.5],[40,4,"D5",.45],[52,4,"A4",.5],[60,4,"A5",.26,.125]],tri:[[0,14,"G3",.7],[16,14,"F3",.75],[32,14,"Eb3",.75],[48,8,"A2",.8],[57,6,"E3",.6]],noise:[[8,1,"h",.2],[24,1,"h",.2],[28,3,"b",.35],[40,1,"h",.2],[60,3,"b",.3]]},E:{len:64,p1:[[0,10,"F5",.55],[12,4,"D5",.5],[18,7,"E5",.55],[26,5,"C5",.5],[32,6,"D5",.5],[40,7,"A4",.5],[48,7,"D5",.5],[56,7,"C#5",.5]],p2:[[4,4,"A4",.5],[8,4,"D5",.45],[20,4,"G4",.5],[28,4,"E4",.45],[36,4,"F5",.38],[44,4,"F4",.4],[52,4,"A4",.5],[60,4,"E5",.4]],tri:[[0,14,"D3",.8],[16,14,"C3",.75],[32,14,"Bb2",.8],[48,14,"A2",.8]],noise:[[8,3,"b",.35],[40,3,"b",.35],[60,1,"h",.2]]}}},accuse:{bpm:96,tpb:4,loop:0,gain:.829,form:["A","B","A2","C"],ch:{p1:{duty:.25,vol:.5,a:.02,d:.4,s:.6,r:.3,vib:6},p2:{duty:.125,vol:.44,a:.003,d:.2,s:0,r:.08,vib:0},tri:{vol:.9,a:.005,d:.1,s:.8,r:.06},noise:{vol:.4}},sections:{A:{len:64,p1:[[4,10,"A5",.65],[16,6,"G5",.6],[22,10,"E5",.65],[32,12,"F5",.65],[44,4,"D5",.55],[48,14,"E5",.6]],p2:[[0,2,"D4",.75],[2,2,"A4",.45],[4,2,"C5",.65],[6,2,"A4",.45],[8,2,"D4",.6],[10,2,"A4",.45],[12,2,"D5",.7],[14,2,"A4",.45],[16,2,"D4",.75],[18,2,"A4",.45],[20,2,"D5",.65],[22,2,"A4",.45],[24,2,"D4",.6],[26,2,"A4",.45],[28,2,"C5",.7],[30,2,"A4",.45],[32,2,"D4",.75],[34,2,"Bb4",.45],[36,2,"D5",.65],[38,2,"Bb4",.45],[40,2,"D4",.6],[42,2,"Bb4",.45],[44,2,"C5",.7],[46,2,"Bb4",.45],[48,2,"E4",.75],[50,2,"G4",.45],[52,2,"C5",.65],[54,2,"G4",.45],[56,2,"E4",.6],[58,2,"G4",.45],[60,2,"D5",.7],[62,2,"G4",.45]],tri:[[0,5,"D2",.85],[6,5,"D2",.7],[12,3,"A2",.65],[16,5,"D2",.85],[22,5,"D2",.7],[28,3,"A2",.65],[32,5,"Bb1",.85],[38,5,"Bb1",.7],[44,3,"F2",.65],[48,5,"C2",.85],[54,5,"C2",.7],[60,3,"G2",.65]],noise:[[0,1,"k",.55],[4,1,"h",.3],[6,1,"k",.4],[10,1,"h",.25],[12,2,"b",.4],[14,1,"h",.25],[16,1,"k",.55],[20,1,"h",.3],[22,1,"k",.4],[26,1,"h",.25],[28,2,"b",.4],[30,1,"h",.25],[32,1,"k",.55],[36,1,"h",.3],[38,1,"k",.4],[42,1,"h",.25],[44,2,"b",.4],[46,1,"h",.25],[48,1,"k",.55],[52,1,"h",.3],[54,1,"k",.4],[58,1,"h",.25],[60,2,"b",.4],[62,1,"h",.25]]},B:{len:64,p1:[[2,6,"D5",.6],[8,8,"E5",.65],[16,6,"G5",.65],[22,10,"D5",.6],[32,6,"F5",.6],[38,10,"D5",.6],[48,8,"G5",.65],[56,8,"E5",.6]],p2:[[0,2,"D4",.75],[2,2,"B4",.45],[4,2,"C5",.65],[6,2,"B4",.45],[8,2,"D4",.6],[10,2,"B4",.45],[12,2,"D5",.7],[14,2,"B4",.45],[16,2,"D4",.75],[18,2,"B4",.45],[20,2,"D5",.65],[22,2,"B4",.45],[24,2,"D4",.6],[26,2,"B4",.45],[28,2,"A4",.7],[30,2,"B4",.45],[32,2,"D4",.75],[34,2,"Bb4",.45],[36,2,"D5",.65],[38,2,"Bb4",.45],[40,2,"D4",.6],[42,2,"Bb4",.45],[44,2,"C5",.7],[46,2,"Bb4",.45],[48,2,"E4",.75],[50,2,"G4",.45],[52,2,"C5",.65],[54,2,"G4",.45],[56,2,"E4",.6],[58,2,"G4",.45],[60,2,"D5",.7],[62,2,"G4",.45]],tri:[[0,5,"G2",.85],[6,5,"G2",.7],[12,3,"D2",.65],[16,5,"G2",.85],[22,5,"G2",.7],[28,3,"D3",.65],[32,5,"Bb1",.85],[38,5,"Bb1",.7],[44,3,"F2",.65],[48,5,"C2",.85],[54,5,"C2",.7],[60,3,"E2",.65]],noise:[[0,1,"k",.55],[4,1,"h",.3],[6,1,"k",.4],[8,1,"h",.2],[10,1,"h",.25],[12,2,"b",.4],[14,1,"h",.25],[16,1,"k",.55],[20,1,"h",.3],[22,1,"k",.4],[24,1,"h",.2],[26,1,"h",.25],[28,2,"b",.4],[30,1,"h",.25],[32,1,"k",.55],[36,1,"h",.3],[38,1,"k",.4],[40,1,"h",.2],[42,1,"h",.25],[44,2,"b",.4],[46,1,"h",.25],[48,1,"k",.55],[52,1,"h",.3],[54,1,"k",.4],[56,1,"h",.2],[58,1,"h",.25],[60,2,"b",.4],[62,1,"h",.25]]},A2:{len:64,p1:[[6,10,"F5",.6],[16,6,"E5",.6],[22,8,"D5",.6],[34,6,"F5",.6],[40,8,"A5",.65],[48,14,"G5",.62]],p2:[[0,2,"D4",.75],[2,2,"A4",.45],[4,2,"C5",.65],[6,2,"A4",.45],[8,2,"D4",.6],[10,2,"A4",.45],[12,2,"D5",.7],[14,2,"A4",.45],[16,2,"D4",.75],[18,2,"A4",.45],[20,2,"D5",.65],[22,2,"A4",.45],[24,2,"D4",.6],[26,2,"A4",.45],[28,2,"C5",.7],[30,2,"A4",.45],[32,2,"D4",.75],[34,2,"Bb4",.45],[36,2,"D5",.65],[38,2,"Bb4",.45],[40,2,"D4",.6],[42,2,"Bb4",.45],[44,2,"C5",.7],[46,2,"Bb4",.45],[48,2,"E4",.75],[50,2,"G4",.45],[52,2,"C5",.65],[54,2,"G4",.45],[56,2,"E4",.6],[58,2,"G4",.45],[60,2,"D5",.7],[62,2,"G4",.45]],tri:[[0,5,"D2",.85],[6,5,"D2",.7],[12,3,"A2",.65],[16,5,"D2",.85],[22,5,"D2",.7],[28,3,"A2",.65],[32,5,"Bb1",.85],[38,5,"Bb1",.7],[44,3,"F2",.65],[48,5,"C2",.85],[54,5,"C2",.7],[60,3,"G2",.65]],noise:[[0,1,"k",.55],[4,1,"h",.3],[6,1,"k",.4],[10,1,"h",.25],[12,2,"b",.4],[14,1,"h",.25],[16,1,"k",.55],[20,1,"h",.3],[22,1,"k",.4],[26,1,"h",.25],[28,2,"b",.4],[30,1,"h",.25],[32,1,"k",.55],[36,1,"h",.3],[38,1,"k",.4],[42,1,"h",.25],[44,2,"b",.4],[46,1,"h",.25],[48,1,"k",.55],[52,1,"h",.3],[54,1,"k",.4],[58,1,"h",.25],[60,2,"b",.4],[62,2,"o",.22]]},C:{len:64,p1:[[0,12,"A5",.65],[12,4,"G5",.55],[16,6,"G5",.6],[22,10,"D5",.6],[32,12,"F5",.65],[44,4,"E5",.55],[48,10,"D5",.6],[58,6,"E5",.55]],p2:[[0,2,"C4",.75],[2,2,"A4",.45],[4,2,"C5",.65],[6,2,"A4",.45],[8,2,"C4",.6],[10,2,"A4",.45],[12,2,"D5",.7],[14,2,"A4",.45],[16,2,"D4",.75],[18,2,"B4",.45],[20,2,"D5",.65],[22,2,"B4",.45],[24,2,"D4",.6],[26,2,"B4",.45],[28,2,"C5",.7],[30,2,"B4",.45],[32,2,"D4",.75],[34,2,"Bb4",.45],[36,2,"D5",.65],[38,2,"Bb4",.45],[40,2,"D4",.6],[42,2,"Bb4",.45],[44,2,"C5",.7],[46,2,"Bb4",.45],[48,2,"E4",.75],[50,2,"A4",.45],[52,2,"B4",.65],[54,2,"A4",.45],[56,2,"E4",.6],[58,2,"A4",.45],[60,2,"D5",.6],[62,2,"A4",.4]],tri:[[0,5,"F2",.85],[6,5,"F2",.7],[12,3,"C3",.65],[16,5,"G2",.85],[22,5,"G2",.7],[28,3,"D2",.65],[32,5,"Bb1",.85],[38,5,"Bb1",.7],[44,3,"F2",.65],[48,5,"A1",.85],[54,5,"A1",.7],[60,3,"E2",.65]],noise:[[0,1,"k",.55],[4,1,"h",.3],[6,1,"k",.4],[10,1,"h",.25],[12,2,"b",.4],[14,1,"h",.25],[16,1,"k",.55],[20,1,"h",.3],[22,1,"k",.4],[26,1,"h",.25],[28,2,"b",.4],[30,1,"h",.25],[32,1,"k",.55],[36,1,"h",.3],[38,1,"k",.4],[42,1,"h",.25],[44,2,"b",.4],[46,1,"h",.25],[48,1,"k",.55],[52,1,"h",.3],[54,1,"k",.4],[58,1,"h",.25],[60,2,"b",.38],[62,1,"h",.22]]}}},story:{bpm:72,tpb:4,loop:0,gain:.764,form:["A","B","A2","C"],ch:{p1:{duty:.5,vol:.44,a:.03,d:.5,s:.55,r:.4,vib:5},p2:{duty:.25,vol:.27,a:.004,d:.5,s:0,r:.25,vib:0},tri:{vol:.72,a:.01,d:.2,s:.8,r:.2},noise:{vol:.13}},sections:{A:{len:64,p1:[[4,2,"A4",.6],[6,2,"D5",.65],[8,8,"E5",.75],[20,2,"F#5",.7],[22,2,"E5",.65],[24,6,"D5",.7],[30,2,"A4",.55],[32,8,"B4",.7],[40,4,"D5",.65],[44,4,"F#5",.7],[48,6,"E5",.7],[54,2,"D5",.6],[56,8,"A4",.6]],p2:[[0,2,"A3",.5],[2,2,"D4",.45],[4,2,"F#4",.5],[6,4,"A4",.5],[12,4,"E4",.35],[16,2,"B3",.5],[18,2,"D4",.45],[20,2,"F#4",.5],[22,4,"A4",.5],[28,4,"D4",.35],[32,2,"G3",.5],[34,2,"B3",.45],[36,2,"D4",.5],[38,4,"F#4",.55],[44,4,"B3",.35],[48,2,"F#3",.5],[50,2,"A3",.45],[52,2,"D4",.5],[54,4,"F#4",.55],[60,4,"A3",.35]],tri:[[0,12,"D3",.8],[12,4,"A2",.6],[16,12,"B2",.8],[28,4,"A2",.6],[32,12,"G2",.8],[44,4,"D3",.6],[48,12,"F#2",.8],[60,4,"A2",.6]],noise:[[4,3,"b",.4],[12,1,"h",.3],[20,3,"b",.4],[28,1,"h",.3],[36,3,"b",.4],[44,1,"h",.3],[52,3,"b",.4],[60,1,"h",.3]]},B:{len:64,p1:[[2,2,"B4",.65],[4,2,"E5",.7],[6,6,"G5",.8],[12,4,"F#5",.75],[16,8,"E5",.75],[24,2,"D5",.65],[26,6,"B4",.6],[36,2,"C#5",.65],[38,2,"E5",.7],[40,6,"A5",.85],[46,2,"F#5",.75],[48,10,"D5",.7]],p2:[[0,2,"G3",.55],[2,2,"B3",.5],[4,2,"E4",.55],[6,4,"G4",.6],[12,4,"D4",.4],[16,2,"A3",.55],[18,2,"B3",.5],[20,2,"D4",.55],[22,4,"G4",.6],[28,4,"E4",.4],[32,2,"A3",.55],[34,2,"C#4",.5],[36,2,"E4",.55],[38,4,"F#4",.6],[44,4,"C#4",.4],[48,2,"B3",.5],[50,2,"D4",.45],[52,2,"F#4",.5],[54,4,"B4",.5],[60,4,"F#4",.35]],tri:[[0,12,"E3",.85],[12,4,"B2",.65],[16,12,"A2",.85],[28,4,"E3",.65],[32,12,"F#2",.85],[44,4,"C#3",.65],[48,12,"B2",.8],[60,4,"C#3",.6]],noise:[[4,3,"b",.45],[12,1,"h",.3],[20,3,"b",.45],[28,1,"h",.3],[30,1,"h",.2],[36,3,"b",.45],[44,1,"h",.3],[52,3,"b",.4],[60,1,"h",.3],[62,1,"h",.2]]},A2:{len:64,p1:[[4,2,"D5",.6],[6,2,"F#5",.65],[8,6,"A5",.7],[14,2,"F#5",.6],[16,6,"F#5",.65],[22,2,"E5",.6],[24,6,"D5",.65],[30,2,"B4",.55],[32,6,"B4",.65],[38,2,"D5",.6],[40,4,"G5",.7],[44,4,"F#5",.65],[48,6,"F#5",.65],[54,2,"E5",.6],[56,8,"D5",.6]],p2:[[0,4,"A3",.5],[4,4,"D4",.45],[8,8,"F#4",.5],[16,4,"B3",.5],[20,4,"D4",.45],[24,8,"F#4",.5],[32,4,"G3",.5],[36,4,"B3",.45],[40,4,"D4",.5],[44,4,"G4",.45],[48,4,"A3",.5],[52,4,"D4",.45],[56,4,"F#4",.5],[60,4,"A4",.4]],tri:[[0,14,"D3",.75],[16,12,"B2",.75],[28,4,"A2",.55],[32,14,"G2",.75],[48,12,"F#2",.75],[60,4,"A2",.55]],noise:[[4,3,"b",.35],[20,3,"b",.35],[36,3,"b",.35],[52,3,"b",.35],[60,1,"h",.25]]},C:{len:64,p1:[[4,2,"B4",.6],[6,2,"D5",.65],[8,6,"G5",.75],[14,2,"F#5",.65],[16,4,"E5",.7],[20,4,"D5",.65],[24,8,"A4",.6],[36,2,"B4",.6],[38,2,"D5",.65],[40,8,"E5",.7],[48,8,"D5",.7],[56,8,"C#5",.6]],p2:[[0,2,"G3",.5],[2,2,"B3",.45],[4,2,"D4",.5],[6,4,"G4",.55],[12,4,"D4",.35],[16,2,"F#3",.5],[18,2,"A3",.45],[20,2,"D4",.5],[22,4,"F#4",.55],[28,4,"A3",.35],[32,2,"B3",.5],[34,2,"D4",.45],[36,2,"E4",.5],[38,4,"G4",.55],[44,4,"D4",.35],[48,2,"A3",.5],[50,2,"D4",.45],[52,2,"E4",.5],[54,2,"A4",.5],[56,2,"C#4",.4],[58,2,"E4",.4],[60,4,"A4",.4]],tri:[[0,12,"G2",.8],[12,4,"D3",.6],[16,12,"F#2",.8],[28,4,"D3",.6],[32,12,"E3",.8],[44,4,"B2",.6],[48,16,"A2",.8]],noise:[[4,3,"b",.4],[12,1,"h",.3],[20,3,"b",.4],[28,1,"h",.3],[36,3,"b",.4],[44,1,"h",.3],[52,3,"b",.4],[60,1,"h",.25]]}}},win:{bpm:96,tpb:4,loop:null,gain:.826,form:["W"],ch:{p1:{duty:.25,vol:.52,a:.01,d:.4,s:.6,r:.9,vib:6},p2:{duty:.5,vol:.28,a:.005,d:.4,s:.4,r:.9,vib:0},tri:{vol:.78,a:.005,d:.1,s:.85,r:.7},noise:{vol:.18}},sections:{W:{len:44,p1:[[0,2,"B4",.6],[2,2,"D5",.65],[4,4,"A5",.75],[8,2,"F#5",.65],[10,2,"G5",.7],[12,4,"E5",.65],[16,2,"C#5",.6],[18,2,"E5",.65],[20,3,"A5",.75],[23,1,"G5",.6],[24,20,"F#5",.7]],p2:[[0,2,"G4",.5],[2,2,"B4",.45],[4,2,"D5",.5],[6,2,"B4",.45],[8,2,"G4",.5],[10,2,"B4",.45],[12,2,"D5",.5],[14,2,"B4",.45],[16,2,"A4",.5],[18,2,"C#5",.45],[20,2,"E5",.5],[22,2,"C#5",.45],[24,2,"D4",.5],[26,2,"A4",.5],[28,2,"D5",.5],[30,4,"A4",.5],[34,10,"D6",.3]],tri:[[0,16,"G3",.75],[16,8,"A3",.75],[24,20,"D3",.8]],noise:[[0,2,"b",.4],[24,3,"b",.35]]}}},wrong:{bpm:90,tpb:4,loop:null,gain:1.281,form:["X"],ch:{p1:{duty:.25,vol:.46,a:.01,d:.6,s:.4,r:.7,vib:5},p2:{duty:.5,vol:.27,a:.01,d:.5,s:.4,r:.7,vib:0},tri:{vol:.66,a:.005,d:.1,s:.8,r:.6},noise:{vol:.14}},sections:{X:{len:18,p1:[[0,2,"A5",.6],[2,2,"F#5",.55],[4,13,"E5",.5]],p2:[[0,4,"D5",.45],[4,6,"B4",.4],[10,7,"A4",.4]],tri:[[0,4,"D3",.7],[4,13,"G3",.65]],noise:[[0,2,"b",.35]]}}},unsolved:{bpm:66,tpb:4,loop:null,gain:1.285,form:["U"],ch:{p1:{duty:.25,vol:.4,a:.02,d:1.2,s:.3,r:.9,vib:5},p2:{duty:.5,vol:.24,a:.02,d:1.2,s:.3,r:.9,vib:0},tri:{vol:.68,a:.01,d:.8,s:.6,r:.8},noise:{vol:.12}},sections:{U:{len:24,p1:[[0,4,"F#5",.55],[4,2,"D5",.5],[6,2,"B4",.5],[8,4,"C#5",.45],[12,12,"A4",.38]],p2:[[0,8,"D4",.45],[8,4,"E4",.4],[12,12,"D4",.35]],tri:[[0,8,"B2",.7],[8,4,"A2",.65],[12,12,"G2",.6]],noise:[[0,3,"b",.3]]}}}};var q0=["p1","p2","tri","noise"],pM={p1:[48,96],p2:[48,96],tri:[28,72]},Ad=[.125,.25,.5,.75],mM={k:"\uD0A5(\uB0AE\uC740 \uCFF5)",s:"\uC2A4\uB124\uC5B4",h:"\uB2EB\uD78C \uD558\uC774\uD587",o:"\uC5F4\uB9B0 \uD558\uC774\uD587",b:"\uBE0C\uB7EC\uC2DC(\uBD80\uB4DC\uB7EC\uC6B4 \uC26C\uC775)"},gM=[2,3,4,6,8],Z0=.3,Md={p1:{duty:.5,vol:.5,a:.005,d:.15,s:.6,r:.08,vib:0},p2:{duty:.25,vol:.4,a:.005,d:.15,s:.5,r:.08,vib:0},tri:{vol:.7,a:.003,d:.05,s:.9,r:.05,vib:0},noise:{vol:.35}},wd={vol:[0,1],a:[.001,.5],d:[.01,2],s:[0,1],r:[.01,1.5],vib:[0,30]},Yc=(n,t,e,i)=>typeof n=="number"&&isFinite(n)?Math.min(e,Math.max(t,n)):i,xM={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function _M(n){if(typeof n=="number")return Math.round(n);let t=/^([A-Ga-g])([#b]?)(-?\d)$/.exec(String(n).trim());return t?12*(+t[3]+1)+xM[t[1].toUpperCase()]+(t[2]==="#"?1:t[2]==="b"?-1:0):NaN}var yM=n=>440*Math.pow(2,(n-69)/12);function J0(n){let t=[],e=Yc(n&&n.bpm,40,220,90),i=gM.includes(n&&n.tpb)?n.tpb:4;(!n||n.bpm!==e)&&t.push("bpm\uC744 "+e+"\uB85C \uB9DE\uCDA4"),n&&n.tpb!==i&&t.push("tpb\uB97C "+i+"\uB85C \uB9DE\uCDA4");let s=60/e/i,r={};for(let b of q0){let v=n&&n.ch&&n.ch[b]||{},E={...Md[b]};for(let T of Object.keys(wd))T in E&&(E[T]=Yc(v[T],wd[T][0],wd[T][1],Md[b][T]));"duty"in E&&(E.duty=Ad.includes(v.duty)?v.duty:Md[b].duty),E.g=Yc(n&&n.gain,.05,4,1),r[b]=E}let o=n&&n.sections||{},a=Array.isArray(n&&n.form)?n.form:[],l=Number.isInteger(n&&n.loop)&&n.loop>=0&&n.loop<a.length?n.loop:-1;n&&n.loop!=null&&l<0&&t.push("loop \uBC88\uD638\uAC00 form \uBC16\uC774\uB77C \uD55C \uBC88\uB9CC \uC7AC\uC0DD");let c=[],u=[],d=0,h=null,p=0;a.forEach((b,v)=>{let E=o[b];if(!E){t.push("\uC5C6\uB294 \uAD6C\uAC04 "+b);return}v===l&&(h=d);let T=Math.max(1,Math.round(+E.len||0));+E.len>0||t.push(b+": len\uC774 \uC5C6\uC74C");for(let x of q0){let M=(Array.isArray(E[x])?E[x]:[]).filter(Array.isArray).slice().sort((C,U)=>C[0]-U[0]),O=null;for(let C of M){let U=Math.round(+C[0]),X=Math.round(+C[1]),L=Yc(C[3],0,1,.8);if(!(U>=0)||U>=T||!(X>0)){t.push(b+"."+x+": \uBC84\uB9B0 \uC74C "+JSON.stringify(C));continue}U+X>T&&(X=T-U);let G;if(x==="noise"){if(G=String(C[2]),!(G in mM)){t.push(b+".noise: \uBAA8\uB974\uB294 \uC18C\uB9AC "+G);continue}}else{if(G=_M(C[2]),!isFinite(G)){t.push(b+"."+x+": \uC77D\uC9C0 \uBABB\uD55C \uC74C "+C[2]);continue}let[Y,A]=pM[x];(G<Y||G>A)&&(t.push(b+"."+x+": \uC74C\uC5ED \uBC16 "+C[2]),G=Math.min(A,Math.max(Y,G)))}let $={ch:x,tick:d+U,len:X,note:G,vel:L,duty:x[0]==="p"&&Ad.includes(C[4])?C[4]:null,i:p++};O&&O.tick+O.len>$.tick&&(O.len=$.tick-O.tick),O&&O.len<=0&&(O.dead=!0),(h!==null?u:c).push($),O=$}}d+=T});let g=b=>v=>({ch:v.ch,t:(v.tick-b)*s,dur:v.len*s,note:v.note,vel:v.vel,duty:v.duty,i:v.i,tick:v.tick-b,len:v.len}),y=(b,v)=>b.t-v.t||b.i-v.i,m=b=>!b.dead,f=c.filter(m).map(g(0)).sort(y),_=u.filter(m).map(g(h||0)).sort(y);return{bpm:e,tpb:i,spt:s,ch:r,intro:f,loop:_,introDur:(h===null?d:h)*s,loopDur:h===null?0:(d-h)*s,totalTicks:d,loopTick:h,warn:t}}var Y0=new WeakMap;function vM(n){let t=Y0.get(n);if(t)return t;t={pulse:{}};for(let o of Ad){let l=new Float32Array(49),c=new Float32Array(49);for(let u=1;u<=48;u++)l[u]=Math.sin(u*Math.PI*o)/u;t.pulse[o]=n.createPeriodicWave(l,c)}let e=Math.floor(n.sampleRate),i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0),r=790078401;for(let o=0;o<e;o++)r^=r<<13,r^=r>>>17,r^=r<<5,s[o]=(r>>>0)/4294967295*2-1;return t.noise=i,Y0.set(n,t),t}function bM(n,t,e,i,{a:s,d:r,s:o,r:a}){let l=t+Math.max(e,.012),c=u=>u<t+s?i*(u-t)/s:u<t+s+r?i*(1-(1-o)*(u-t-s)/r):i*o;return n.setValueAtTime(0,t),l>t+s?(n.linearRampToValueAtTime(i,t+s),l>t+s+r?(n.linearRampToValueAtTime(i*o,t+s+r),n.setValueAtTime(i*o,l)):n.linearRampToValueAtTime(c(l),l)):n.linearRampToValueAtTime(c(l),l),n.linearRampToValueAtTime(0,l+a),l+a}var SM={s:{type:"bandpass",f:1900,q:.9,a:.002,dec:.14,g:1},h:{type:"highpass",f:7e3,q:.7,a:.001,dec:.04,g:.7},o:{type:"highpass",f:6e3,q:.7,a:.002,dec:.28,g:.55},b:{type:"bandpass",f:3200,q:.5,a:.03,dec:0,g:.6}};function MM(n,t,e,i,s,r){let o=Z0*s.vol*i.vel*(s.g||1);if(i.note==="k"){let h=n.createOscillator(),p=n.createGain();return p.gain.value=0,h.type="triangle",h.frequency.setValueAtTime(150,r),h.frequency.exponentialRampToValueAtTime(45,r+.12),p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(o*1.6,r+.003),p.gain.linearRampToValueAtTime(o*.5,r+.06),p.gain.linearRampToValueAtTime(0,r+.18),h.connect(p).connect(e),h.start(r),h.stop(r+.2),h.onended=()=>{try{p.disconnect()}catch{}},r+.2}let a=SM[i.note],l=a.dec||Math.max(.08,Math.min(.6,i.dur)),c=n.createBufferSource(),u=n.createBiquadFilter(),d=n.createGain();return d.gain.value=0,c.buffer=t.noise,u.type=a.type,u.frequency.value=a.f,u.Q.value=a.q,d.gain.setValueAtTime(0,r),d.gain.linearRampToValueAtTime(o*a.g,r+a.a),d.gain.linearRampToValueAtTime(0,r+a.a+l),c.connect(u).connect(d).connect(e),c.start(r,i.i*.137%.6,a.a+l+.02),c.onended=()=>{try{d.disconnect()}catch{}},r+a.a+l}function K0(n,t,e,i,s){let r=vM(n);if(e.ch==="noise")return MM(n,r,t,e,i,s);let o=n.createOscillator(),a=n.createGain();a.gain.value=0,e.ch==="tri"?o.type="triangle":o.setPeriodicWave(r.pulse[e.duty||i.duty]),o.frequency.value=yM(e.note);let l=bM(a.gain,s,e.dur,Z0*i.vol*e.vel*(i.g||1),i),c=null;if(i.vib>0&&e.dur>.3){c=n.createOscillator();let u=n.createGain();c.frequency.value=5.5,u.gain.setValueAtTime(0,s),u.gain.setValueAtTime(0,s+.15),u.gain.linearRampToValueAtTime(i.vib,s+.35),c.connect(u).connect(o.detune),c.start(s),c.stop(l+.02)}return o.connect(a).connect(t),o.start(s),o.stop(l+.02),o.onended=()=>{try{a.disconnect()}catch{}},l}var Q0="0217-v3-music",tg=Math.pow(10,-8/20),eg=.4,wM=100,nr=!0;try{nr=localStorage.getItem(Q0)!=="off"}catch{}var Dn=null,As=null,ng=0,Ri=null,Zc=!1,$0={},ig=n=>$0[n]||(_a[n]?$0[n]=J0(_a[n]):null),AM=n=>{let t=ig(n);return!!(t&&t.loopDur>0)};function TM(){let n=er();return!n||!n.musicBus?null:((!Ri||Ri.context!==n.ctx)&&(Ri=n.ctx.createGain(),Ri.gain.value=Zc?tg:1,Ri.connect(n.musicBus)),n)}function j0(n){let t=n.ctx,e=t.currentTime,i=e+eg;for(let s=0;s<4096;s++){let r=n.inLoop?n.c.loop:n.c.intro;if(n.idx>=r.length){if(!n.inLoop){if(n.c.loopDur>0&&n.c.loop.length){n.inLoop=!0,n.base=n.t0+n.c.introDur,n.idx=0;continue}n.done=!0;return}if(n.base+n.c.loopDur>i)return;n.base+=n.c.loopDur,n.idx=0;continue}let o=r[n.idx],a=(n.inLoop?n.base:n.t0)+o.t;if(a>i)return;if(a>=e-.03)try{K0(t,n.gain,o,n.c.ch[o.ch],Math.max(a,e))}catch{}n.idx++}}function sg(n,t){let e=TM(),i=ig(n);if(!e||!i)return;let s=e.ctx,r=s.currentTime,o=s.createGain(),a=r+.06;t>0&&(o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(1,r+t/1e3)),o.connect(Ri);let l={name:n,ctx:s,c:i,gain:o,t0:a,base:a,inLoop:!1,idx:0,done:!1};l.timer=setInterval(()=>{j0(l),l.done&&s.currentTime>a+i.introDur+3&&(Jc(l,0),As===n&&(As=null))},wM),Dn=l,j0(l)}function Jc(n,t){clearInterval(n.timer),Dn===n&&(Dn=null);try{let e=n.ctx.currentTime,i=n.gain.gain,s=Math.max(.03,t/1e3);i.cancelAndHoldAtTime?i.cancelAndHoldAtTime(e):(i.cancelScheduledValues(e),i.setValueAtTime(i.value,e)),i.linearRampToValueAtTime(0,e+s),setTimeout(()=>{try{n.gain.disconnect()}catch{}},s*1e3+eg*1e3+1600)}catch{}}function Td(n,{fadeMs:t=600}={}){if(!_a[n]||(As=n,ng=Date.now(),Dn&&Dn.name===n&&!Dn.done))return;let e=!!Dn;Dn&&Jc(Dn,t),!(!nr||!jn()||!er())&&sg(n,e?t:Math.min(t,300))}function rg({fadeMs:n=600}={}){As=null,Dn&&Jc(Dn,n)}var ya=()=>nr;function og(n){nr=!!n;try{localStorage.setItem(Q0,nr?"on":"off")}catch{}if(!nr){Dn&&Jc(Dn,400);return}ag()}function Kc(n){if(Zc=!!n,!!Ri)try{let t=Ri.context.currentTime;Ri.gain.cancelScheduledValues(t),Ri.gain.setTargetAtTime(Zc?tg:1,t,Zc?.05:.25)}catch{}}var qE=Object.keys(_a);function ag(){!nr||Dn||!As||!jn()||!er()||(AM(As)||Date.now()-ng<1500?sg(As,800):As=null)}H0(ag);var cg="0217-v3-voice",EM="voice/index.json";var Ed=()=>null,Cd=()=>null,Ts=!0;try{Ts=localStorage.getItem(cg)!=="off"}catch{}var Sa=null,$c=null,va=null,ba=new Map,ir=new Map,ji=null,jc=0,ug=(n,t)=>n+"\0"+String(t).trim();function hg(){return va||(va=fetch(EM).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{Sa=new Map,$c=new Map;for(let t of n.lines||[])Sa.set(ug(t.who,t.text),{file:t.file,seconds:t.seconds}),$c.has(t.who)||$c.set(t.who,[]),$c.get(t.who).push(t.file);return!0}).catch(()=>(va=null,!1)),va)}function dg(n={}){typeof n.getCtx=="function"&&(Ed=n.getCtx),typeof n.getDest=="function"&&(Cd=n.getDest),hg()}function Qc(n,t){return Sa&&Sa.get(ug(n,t))||null}function Qi(){return Ts}function fg(n){Ts=!!n;try{localStorage.setItem(cg,Ts?"on":"off")}catch{}Ts||tu()}function CM(n){if(!ba.has(n)){let t=fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.arrayBuffer()});t.catch(()=>ba.delete(n)),ba.set(n,t)}return ba.get(n)}function RM(n,t){return new Promise((e,i)=>{try{let s=n.decodeAudioData(t,e,i);s&&typeof s.then=="function"&&s.then(e,i)}catch(s){i(s)}})}function lg(n,t){for(ir.delete(n),ir.set(n,t);ir.size>48;)ir.delete(ir.keys().next().value)}async function IM(n,t){if(ir.has(t)){let s=ir.get(t);return lg(t,s),s}let e=await CM(t),i=await RM(n,e.slice(0));return ba.delete(t),lg(t,i),i}function tu(){jc++;let n=ji;if(ji=null,n){if(n.src){try{n.src.onended=null,n.src.stop()}catch{}try{n.src.disconnect()}catch{}}n.finish()}}function pg(n,t){tu();let e=jc;return new Promise(i=>{let s=!1,r=()=>{s||(s=!0,i())};if(!Ts)return r();let o={src:null,finish:r};ji=o,(async()=>{Sa||await hg();let a=Qc(n,t),l=Ed&&Ed();if(!a||!l||e!==jc||!Ts)return ji===o&&(ji=null),r();if(l.state==="suspended"&&l.resume)try{l.resume().catch(()=>{})}catch{}let c=await IM(l,a.file);if(e!==jc||!Ts)return r();let u=l.createBufferSource();u.buffer=c,u.connect(Cd&&Cd()||l.destination),o.src=u,u.onended=()=>{ji===o&&(ji=null);try{u.disconnect()}catch{}r()},u.start()})().catch(()=>{ji===o&&(ji=null),r()})})}var mg=!1;function gg(){mg||(mg=!0,dg({getCtx:()=>(er()||{}).ctx||null,getDest:()=>(er()||{}).voiceBus||null}))}function LM(){let n=P.ui;return document.body.classList.contains("opening-on")||!n||!n.started?"opening":n.verdict?n.verdict.ok?"story":null:n.tab==="accuse"?"accuse":"investigate"}var Rd=null,eu=0;function sr(){if(eu)return;let n=LM();n!==Rd&&(Rd=n,n?Td(n,{fadeMs:800}):rg({fadeMs:800}))}function xg(n,t){clearTimeout(eu),Rd=null,Td(n?"win":t?"unsolved":"wrong",{fadeMs:250}),eu=setTimeout(()=>{eu=0,sr()},n?7e3:t?5600:3100)}var Id=0;function Ma(n,t){if(!Qi()||!jn()||!Qc(n,t))return Promise.resolve(!1);let e=++Id;return Kc(!0),pg(n,t).then(()=>(e===Id&&Kc(!1),!0))}var Ld=0;async function _g(n,t){let e=++Ld;for(let i of t){if(Ld!==e)return;await Ma(n,i)}}function ts(){Ld++,Id++,tu(),Kc(!1)}var nu=(n,t)=>{let e=Qc(n,t);return e&&Qi()&&jn()?e.seconds:0};var yg=["lock","fog","drawer","cue","audio","poster"],vg=["min","sera","doyun","yujin"];function Pd(n,t={}){let e=t.verdict||null,i={};for(let s of yg)i["e:"+s]=n.seen.has(s)?"seen":n.budget?"new":"closed";for(let s of vg)i["p:"+s]=n.asked.has(s)?"asked":n.budget?"new":"closed";return{unlocked:yg.filter(s=>n.seen.has(s)),claims:vg.filter(s=>n.asked.has(s)),marks:i,pinned:[...n.pins].sort(),selected:t.selected||null,accuse:t.tab==="accuse"&&!e?{person:t.person||null,proof:[...t.proof||[]].sort()}:null,mood:e?e.ok?"win":"dim":"normal"}}var q=n=>document.getElementById(n),dt=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),fn=Object.fromEntries(Rn.map(n=>[n.id,n])),Me=Object.fromEntries(Je.map(n=>[n.id,n])),so=["scene","people","notes","accuse"],Dd={scene:"\uD604\uC7A5",people:"\uBA74\uB2F4",notes:"\uAE30\uB85D",accuse:"\uC9C0\uBAA9"},Es=n=>"\u300C"+fn[n].name+"\u300D",rr=n=>Es(n)+gd(fn[n].name,"\uC744","\uB97C"),Nd=n=>Me[n].name+gd(Me[n].name,"\uC744","\uB97C"),le=(n,t,e)=>'[data-action="'+n+'"]'+(t?'[data-id="'+t+'"]':"")+(e?'[data-arg="'+e+'"]':""),Ct=(n,t,e,i={})=>'<button type="button"'+(i.cls?' class="'+i.cls+'"':"")+' data-action="'+n+'"'+(t?' data-id="'+t+'"':"")+(i.arg?' data-arg="'+i.arg+'"':"")+(i.attr?" "+i.attr:"")+">"+e+"</button>",es={min:"#7c9fd4",sera:"#839e4e",doyun:"#c07fc0",yujin:"#52a660"},Cs=n=>'<span class="band" aria-hidden="true" style="--band:'+es[n]+'">'+"<i></i>".repeat(Je.findIndex(t=>t.id===n)+1)+"</span>",Rs=(n,t="")=>'<span class="face'+(t?" "+t:"")+'" data-face="'+dt(n)+'" aria-hidden="true"></span>';var lo=n=>Math.round(n*10)/10,oo=(n,t)=>!!n&&(typeof n.has=="function"?n.has(t):Array.isArray(n)&&n.includes(t));function uo(n){let t="";for(let e in n){let i=n[e];i==null||i===!1||i===""||(t+=" "+e+'="'+(typeof i=="number"?lo(i):dt(i))+'"')}return t}var PM=/(^|\s)(h|nd)(\s|$)/,iu=n=>PM.test(n||"")?{class:n||void 0}:{class:((n||"")+" d").trim(),pathLength:1},Ln=(...n)=>n.map(t=>typeof t=="number"?lo(t):t).join(" "),Qt=(n,t,e,i,s="k")=>"<line"+uo({x1:n,y1:t,x2:e,y2:i,...iu(s)})+"/>",Vt=(n,t,e,i,s="k",r)=>"<rect"+uo({x:n,y:t,width:e,height:i,rx:r,...iu(s)})+"/>",xe=(n,t,e,i="k")=>"<circle"+uo({cx:n,cy:t,r:e,...iu(i)})+"/>",Ee=(n,t="k",e)=>"<path"+uo({d:n,...iu(t),...e})+"/>",at=(n,t,e,i,s)=>"<text"+uo({x:n,y:t,class:i,"text-anchor":s==="m"?"middle":s==="e"?"end":void 0})+">"+dt(e)+"</text>",pn=(n,t)=>"<g"+uo(t||{})+">"+n+"</g>",Le=(n,t,e)=>pn(t,{"data-cue":n,class:oo(e,n)?"on":void 0});function ao(n,t,e,i,s="k"){let r=Math.atan2(i-t,e-n),o=6,a=.5,l=s.replace(/(^|\s)h(\s|$)/," ").trim()||"k";return Qt(n,t,e,i,s)+Ee(Ln("M",e-o*Math.cos(r-a),i-o*Math.sin(r-a),"L",e,i,"L",e-o*Math.cos(r+a),i-o*Math.sin(r+a)),l)}function pi(n,t,e,i={}){let s=i.label?' role="img" aria-label="'+dt(i.label)+'"':' aria-hidden="true"';return'<svg class="art'+(i.cls?" "+i.cls:"")+(i.draw?" draw":"")+'" viewBox="0 0 '+n+" "+t+'" width="'+n+'" height="'+t+'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false"'+s+">"+e+"</svg>"}function wa(n,t,e,i,s="i"){return pn(xe(0,-21,4.5,s)+Ee("M-8 0V-8Q-8 -15 0 -15Q8 -15 8 -8V0",s)+(e?'<path d="M-8 -7H-3" class="band nd" stroke="'+dt(e)+'"/>':"")+(i?at(0,13,i,"sm","m"):""),{class:"who",transform:"translate("+lo(n)+" "+lo(t)+")"})}var bg=(n,t,e)=>pn(xe(0,0,1.6,"pinDot nd")+Qt(0,0,0,-11,"i")+'<path d="M0 -11L9 -8.2L0 -5.4Z" class="flag nd" stroke="'+dt(e)+'" fill="'+dt(e)+'"/>',{transform:"translate("+lo(n)+" "+lo(t)+")"});function su(n={}){let i=(m,f)=>Vt(m+3,f+3,174,98,"e thin",10),s=(m,f,_,b)=>at(m+14,f+23,_,"tg b")+at(m+30,f+23,b,"b"),r=i(0,0)+s(0,0,"1","\uC870\uC0AC 9\uD68C")+xe(26,50,8)+Qt(32,56,38,62)+Array.from({length:9},(m,f)=>xe(52+f*13,50,3.4,"pip nd")).join("")+at(14,86,"\uCC98\uC74C \uD655\uC778\xB7\uCC98\uC74C \uC9C8\uBB38 = 1\uD68C","sm"),o=180,a=[0,100,200,300],l=(m,f,_,b,v)=>pn(m,{transform:"translate("+b+" "+v+") scale(0.8) translate("+-f+" "+-_+")"}),c=i(o,0)+s(o,0,"2","\uBB34\uB8CC")+l(Ee(Ln("M",a[0]+8,47,"A 8 8 0 1 1",a[0]+4,43))+Ee(Ln("M",a[0]+3,37,"L",a[0]+9,41,"L",a[0]+3,46)),a[0],47,o+22,44)+l(Vt(a[1]-12,42,13,17,"k",2)+ao(a[1]+3,50,a[1]+13,50),a[1],50,o+115,44)+l(xe(a[2],44,5)+Qt(a[2],49,a[2],59)+Qt(a[2]-7,49,a[2]+7,49),a[2],51,o+22,68)+l(Ee(Ln("M",a[3]-4,55,"A 8 8 0 1 1",a[3]+4,55,"Z"))+Qt(a[3]-3,59,a[3]+3,59),a[3],51,o+115,68)+at(o+36,49,"\uB2E4\uC2DC \uBCF4\uAE30","sm tm")+at(o+129,49,"\uC81C\uC2DC","sm tm")+at(o+36,73,"\uACE0\uC815","sm tm")+at(o+129,73,"\uD78C\uD2B8","sm tm")+at(o+14,95,"\uC870\uC0AC \uAE30\uD68C\uB97C \uC4F0\uC9C0 \uC54A\uC74C","sm"),u=104,d=i(0,u)+s(0,u,"3","\uACB0\uB860 = 1\uBA85 + \uC99D\uAC70 2\uAC1C")+Vt(16,u+36,34,13,"k fk",2)+Vt(16,u+54,34,13,"k fk",2)+ao(54,u+42,112,u+52)+ao(54,u+60,112,u+58)+wa(132,u+74,"","")+at(14,u+93,"\uADF8 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC","sm"),h=180,p=m=>Ee(Ln("M",m,u+38,"L",m+9,u+47,"L",m,u+56,"L",m-9,u+47,"Z"),"g fg"),g=i(h,u)+s(h,u,"4","\uACB0\uB860 \uAE30\uD68C 3\uBC88")+p(h+30)+p(h+56)+p(h+82)+at(h+14,u+76,"\uD2C0\uB824\uB3C4 \uAE30\uB85D\uC740 \uB0A8\uC74C","sm")+at(h+14,u+93,"\uC138 \uBC88 \uD2C0\uB9AC\uBA74 \uBBF8\uACB0","sm"),y="\uC870\uC0AC \uBC29\uBC95: "+m0.join(", ")+". \uACB0\uB860\uC5D0 \uC4F8 \uB450 \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC\uD569\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uAE30\uB85D\uC740 \uB0A8\uACE0, \uC138 \uBC88 \uD2C0\uB9AC\uBA74 \uBBF8\uACB0\uC785\uB2C8\uB2E4.";return pi(360,208,r+c+d+g,{label:n.hidden?"":y,cls:"rulesArt"+(n.cls?" "+n.cls:""),draw:n.draw})}var co=22,Sg=8,He=n=>Sg+(n+7.2)*co,$e=n=>Sg+(n+9)*co,ro=([n,t,e,i],s,r)=>Vt(He(n),$e(e),(t-n)*co,(i-e)*co,s,r),DM={lock:[197,311.5,""],fog:[176,216.5,""],drawer:[156,131,"e"],cue:[203,84,""],audio:[303,27,"e"],poster:[18,326,""]},NM={min:[160,311.5,"e"],sera:[320.8,221,"m"],doyun:[32.6,242,"m"],yujin:[303,44,"e"]},UM=[100.8,148.8,196.8,244.8],OM=366;function Mg(n={}){let t=n.seen,e=n.asked,i=String(n.highlight||"").replace(/^e:/,""),s=C=>oo(t,C),r="";s("fog")&&(r+=pn(Ee(Ln("M",He(0),$e(.3)-4,"L",He(-.65),$e(Ge.z1),"L",He(.65),$e(Ge.z1),"Z"),"k fk thin"),{"data-part":"cone"})),r+=Zr.map(C=>ro(C,"solid nd")).join(""),r+=Yr.map(C=>ro(C,"e wall")).join("")+ro(vs,"e wall"),r+=at(64,287,"\uC804\uC2DC\uC2E4","room")+at(104,64,"\uC870\uBA85 \uBD80\uC2A4","room")+at(20,34,"\uBD81\uCABD \uBCF5\uB3C4","room")+at(360,311.5,"\uB85C\uBE44","room","e")+at(323,150,"\uBCF4\uC874\uC2E4","room","m")+'<text x="0" y="0" class="room" text-anchor="middle" transform="translate(29 150) rotate(-90)">\uC11C\uCABD \uBCF5\uB3C4 (\uB85C\uBE44 \uCABD)</text>';let o=$e(3.95),a=He(-.6),l=He(.6),c=He(0);r+=Qt(a,o,l,o,"k")+Ee(Ln("M",c-5,o-3,"L",c+5,o+3,"M",c+5,o-3,"L",c-5,o+3),"g")+at(c,285,"\uC815\uBB38 \xB7 \uBD09\uC778","sm tm","m");let u=Ge,d=Ai;r+=ro([u.x0,u.x1,u.z0,u.z1],"i")+ro([d.x0,d.x1,d.z0,d.z1],"k fk thin")+at(149,150,"\uC9C4\uC5F4\uB300","sm tm","e");let[h,,p]=Jn,g=He(h),y=$e(p);r+=xe(g,y,3,"i")+Ee(Ln("M",g,y-3,"L",g-4,y-10,"L",g+4,y-10,"Z"),"i")+at(158,216.5,"\uAC10\uC2DC \uCE74\uBA54\uB77C","sm tm","e");let m=He(hi[0]),f=$e(hi[2]);r+=Vt(m-4,f-3,8,6,"i")+Qt(m-4,f-1,He(.68),$e(-2.78),"e"),(s("fog")||s("cue"))&&(r+=pn(at(204,162,"\uC548\uAC1C \uC7A5\uCE58","sm tm"),{"data-part":"name-fogdev"}));let _=He(Xi[0]),b=$e(Xi[2]);r+=Vt(_-10,b-3.5,20,7,"i",1.5),s("cue")&&(r+=pn(at(207,103,"\uCF58\uC194","sm tm"),{"data-part":"name-console"}));let v=He(bs[0]),E=$e(bs[2]);if(r+=Vt(v-11,E-5.5,22,11,"i",1.5)+Vt(v-8,E-2.5,16,5,"e thin",1),(s("audio")||oo(e,"yujin"))&&(r+=pn(at(130,108.5,"\uC218\uB808","sm tm","e"),{"data-part":"name-cart"})),r+=ro([7.2,8.8,-8.6,-7.4],"i",2)+at(362,66,"\uC74C\uD5A5 \uB370\uC2A4\uD06C","sm tm","e"),r+=Qt(He(id[0]),$e(5.6),He(id[0]),$e(6.4),"i thick"),s("drawer")){let C=Jr;r+=pn(Vt(He(C.x0),$e(-4.2),(C.x1-C.x0)*co,.2*co,"g")+at(175,130.5,"\uC810\uAC80\uAD6C","sm"),{"data-part":"hatch"}),r+=pn(aa.map(X=>Qt(He(X),$e(-4),He(X),$e(u.z0),"k")).join("")+at(182,146.5,"\uB808\uC77C","sm"),{"data-part":"rails"});let U=He(Ti[0]),z=$e(Ti[2]);r+=pn(Vt(U-4.5,z-2.6,9,2.6,"k",1)+Qt(U,97,U,z-4,"e thin")+at(U,94,"\uC190\uC7A1\uC774","sm","m"),{"data-part":"handle"})}s("audio")&&(r+=pn(Ys.map(([C,,U],z)=>xe(He(C),$e(U),4.5,"k")+at(He(C),$e(U)+3,String(z+1),"num","m")).join("")+at(192,179,"\uB9C8\uC774\uD06C","sm"),{"data-part":"mics"}));for(let C of Rn){let[U,z]=qi[C.id].ring,X=He(U),L=$e(z),G=s(C.id),[$,Y,A]=DM[C.id];r+=pn((i===C.id?xe(X,L,10.5,"g"):"")+xe(X,L,6.5,G?"k fk":"e")+(G?xe(X,L,2,"dot nd"):"")+at($,Y,C.name,G?"b":"tm",A),{"data-part":"ev-"+C.id,class:"spot "+(G?"seen":"unseen")+(i===C.id?" hl":"")})}for(let C of Je){if(!oo(e,C.id))continue;let[U,,z]=la[C.id],[X,L,G]=NM[C.id];r+=pn(bg(He(U),$e(z),es[C.id])+at(X,L,C.name,"sm",G),{"data-part":"claim-"+C.id,class:"claim"})}r+=Je.map((C,U)=>wa(UM[U],OM,es[C.id],C.name)).join("");let T=402;r+=xe(14,T-4,5,"k fk")+xe(14,T-4,1.6,"dot nd")+at(24,T,"\uD655\uC778\uD55C \uC99D\uAC70","sm")+pn(xe(104,T-4,5,"e")+at(114,T,"\uD655\uC778 \uC804","sm tm"),{class:"unseen"})+bg(170,T+1,"var(--mute)").replace(/ (stroke|fill)="var\(--mute\)"/g,"")+at(184,T,"\uBCF8\uC778\uC774 \uB9D0\uD55C 02:17\uC758 \uC790\uB9AC","sm");let x=Rn.filter(C=>s(C.id)).map(C=>C.name),M=Je.filter(C=>oo(e,C.id)).map(C=>C.name+" "+fi[C.id].label.replace(/^본인 진술:\s*/,"")),O="\uAC74\uBB3C \uBC30\uCE58\uB3C4. "+(x.length?"\uD655\uC778\uD55C \uC99D\uAC70: "+x.join(", ")+".":"\uC544\uC9C1 \uD655\uC778\uD55C \uC99D\uAC70\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")+(M.length?" \uBCF8\uC778\uC774 \uB9D0\uD55C 02\uC2DC 17\uBD84\uC758 \uC790\uB9AC: "+M.join(", ")+".":"");return pi(378,410,r,{label:O,cls:"planArt",draw:n.draw})}var FM={lock(n){let t=at(12,16,"\uC815\uBB38 \uBC14\uAE65\uC5D0\uC11C \uBCF8 \uBAA8\uC2B5","sm tm")+Qt(10,140,350,140,"e");t+=Vt(130,30,100,110,"i")+Vt(134,34,44,106,"k fk")+Vt(182,34,44,106,"k fk")+Qt(142,54,158,38,"e thin")+Qt(190,54,206,38,"e thin")+Qt(172,82,172,98,"i")+Qt(188,82,188,98,"i"),t+=Le("seal",Vt(160,68,40,8,"g",1)+Ee("M194 76V80","g")+Vt(188,80,14,18,"g fg",1.5)+at(208,96,"\uBD09\uC778","sm tg")+at(180,160,"\uBD09\uC778 \uBC88\uD638 = \uB300\uC7A5 \xB7 \uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C","","m"),n),t+=Le("patrol",Vt(56,71,28,28,"e",4)+xe(70,85,9)+xe(70,85,3.5)+at(70,60,"\uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94","sm","m")+at(70,118,"30\uBD84\uB9C8\uB2E4","sm","m"),n),t+=Le("locked",Vt(272,64,36,44,"i",3)+Vt(277,68,26,12,"k fk",1.5)+Ee("M285 92V88A5 5 0 0 1 295 88V92")+Vt(282,92,16,11,"k",1.5)+at(290,56,"\uC7A0\uAE08 \uD328\uB110","sm","m")+at(290,126,"01:58 \uC7A0\uAE40 \xB7 \uBD09\uC778","sm","m"),n);let e=i=>40+i*290/21;return t+=Le("locked",xe(e(0),206,3.5,"k fk")+at(e(0),224,"01:58","mono sm","m"),n),t+=Le("opened",Qt(e(0)+4,206,e(21)-4,206,"k thick")+xe(e(21),206,3.5,"k fk")+at(185,196,"\uC5F4\uB9BC \uAE30\uB85D 0\uAC74","b","m")+at(340,224,"02:19 \uBD09\uC778 \uD655\uC778 \uD6C4 \uC5F4\uB9BC","sm","e"),n),t+=Le("late",Qt(e(2),210,e(2),232,"e")+Qt(e(11),210,e(11),232,"e")+Ee(Ln("M",e(2)+4,236,"Q",(e(2)+e(11))/2,250,e(11)-4,236))+Ee(Ln("M",e(11)-11,236,"L",e(11)-4,236,"L",e(11)-8,242))+at(e(2),258,"02:00 \uCC28\uB840","sm","m")+at(e(11),258,"02:09 \uB20C\uB9BC","sm","m"),n),pi(360,266,t)},fog(n){let t=u=>180+u*26,e=u=>30+(u+3.4)*26,i=Ge,s=Ai,r=at(12,16,"\uC704\uC5D0\uC11C \uBCF8 \uBAA8\uC2B5","sm tm");r+=Ee(Ln("M",180,e(.3)-5,"L",t(-.62),e(i.z1),"L",t(.62),e(i.z1),"Z"),"k fk thin"),r+=Vt(t(i.x0),e(i.z0),(i.x1-i.x0)*26,(i.z1-i.z0)*26,"i")+Vt(t(s.x0),e(s.z0),(s.x1-s.x0)*26,(s.z1-s.z0)*26,"k thin")+at(158,44,"\uC9C4\uC5F4\uB300","sm tm","e"),r+=xe(180,e(.3),3,"i")+Ee(Ln("M",180,e(.3)-3,"L",176,e(.3)-10,"L",184,e(.3)-10,"Z"),"i")+at(190,e(.3)+4,"\uAC10\uC2DC \uCE74\uBA54\uB77C (\uAE30\uB465 \uC704)","sm");let o=t(hi[0]),a=e(hi[2]);r+=Vt(o-4,a-3,8,6,"i")+Qt(o-4,a-1,t(.68),e(-2.78),"e")+at(221,a+4,"\uC548\uAC1C \uC7A5\uCE58","sm tm"),r+=Le("device",at(221,a+21,"\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9","sm"),n),r+=at(12,146,"\uB179\uD654 \uD654\uBA74","sm tm");let l=(u,d,h)=>{let p=12+u*86;return Vt(p,158,78,62,"e",4)+xe(p+7,165,1.6,"rec nd")+d(p)+Vt(p+25,174,28,22,"k thin")+(h==="on"?xe(p+39,188,3.5,"g"):h==="gone"?xe(p+39,188,3.5,"e h"):"")+Qt(p+27,192,p+51,192,"e")+Vt(p+23,196,32,22,"i occ")},c=(u,d)=>d.map((h,p)=>at(12+u*86+39,232+16*p,h,p?"sm":"mono sm tg","m")).join("");return r+='<g transform="translate(0 -8)">',r+=Le("0152",l(0,u=>wa(u+54,218,es.sera,"","i")+ao(u+70,182,u+70,196,"e"),"on")+c(0,["01:52","\uBB38\uC138\uB77C","\uBC1B\uCE68\uB300 \uB4A4\uB85C","\uC219\uC600\uB2E4 \uB098\uAC10"]),n),r+=Le("021659",l(1,()=>"","on")+c(1,["02:16:59","\uB80C\uC988 \uC81C\uC790\uB9AC"]),n),r+=Le("021700",l(2,()=>"","")+Vt(186,160,74,58,"fogw nd",3)+at(223,194,"\uC548\uAC1C 8\uCD08","b ondark","m")+c(2,["02:17:00","\uD558\uC580 \uD654\uBA74"]),n),r+=Le("021708",l(3,()=>"","gone")+c(3,["\uAC77\uD78C \uB4A4","\uB80C\uC988 \uC5C6\uC74C","\uB36E\uAC1C \uB2EB\uD798","\uC0AC\uB78C \uC548 \uC7A1\uD798"]),n),r+="</g>",pi(360,284,r)},drawer(n){let t=g=>30+(-2.55-g)*125,e=g=>236-g*125,i=t(-2.7),s=t(-3.3),r=t(-2.75),o=t(-3.25),a=t(-4),l=t(-4.2),c=e(.9),u=e(1.4),d=e(1.2),h=e(.85),p=Qt(12,236,348,236,"e")+at(110,276,"\uC804\uC2DC\uC2E4 \uCABD","room","m")+at(292,276,"\uC870\uBA85 \uBD80\uC2A4","room","m");return p+=Vt(i,c,s-i,236-c,"i")+at((i+s)/2,184,"\uBC1B\uCE68\uB300","sm tm","m"),p+=Vt(a,26,l-a,d-26,"e fe")+Vt(a,h,l-a,236-h,"e fe")+Vt(a,d,l-a,h-d,"g h")+at((a+l)/2,20,"\uCE78\uB9C9\uC774\uBCBD","sm tm","m"),p+=Qt(l+4,92,250,76,"e thin")+at(252,76,"\uC810\uAC80\uAD6C","sm"),p+=Le("cover",Vt(r,u,o-r,c-u,"fk nd")+Ee(Ln("M",r,c,"V",u,"H",o))+Qt(40,48,r,u,"e thin")+at(12,44,"\uB36E\uAC1C: \uC55E\xB7\uC606\xB7\uC704","sm"),n),p+=Le("slide",Vt(o,u,s-o,c-u,"k fk")+Qt(r+4,e(.92),o-3,e(.92),"k thick")+Qt(s,c,l,c,"e")+Vt(156,e(.95)-4,52,4,"k h")+ao(o+2,104,206,104)+Qt(s+2,48,(o+s)/2,u+4,"e thin")+at(112,44,"\uB4A4: \uC11C\uB78D \uC55E\uD310","sm")+at(175,151,"\uBC1B\uCE68\uD310\uC774","sm","m")+at(175,168,"\uD1B5\uC9F8\uB85C \uB4A4\uB85C","sm","m"),n),p+=Le("handle",Ee(Ln("M",l,104,"H",l+11,"V",118,"H",l),"k thick")+at(256,116,"\uC190\uC7A1\uC774: \uBD80\uC2A4 \uCABD","sm"),n),p+=Le("nohandle",Ee(Ln("M",s+4,70,"L",s+11,77,"M",s+11,70,"L",s+4,77),"i")+at(s+16,73,"\uC804\uC2DC\uC2E4 \uCABD","sm")+at(s+16,90,"\uC190\uC7A1\uC774 \uC5C6\uC74C","sm"),n),p+=Le("wax",Qt(s,128,s,136,"g")+Qt(s+5,128,s+5,136,"g")+Qt(s+5,132,150,190,"e thin")+at(152,195,"\uB450 \uB9C8\uB514\uB9CC\uD07C","sm")+at(152,212,"\uB35C \uB2EB\uD798","sm")+[138,146,157,170,181].map((g,y)=>xe(g,c-2,y%2?1.6:2,"wax nd")).join("")+[141,150,163,175].map((g,y)=>xe(g,233,y%2?1.8:2.2,"wax nd")).join("")+Qt(158,237,158,246,"e thin")+at(167,258,"\uB808\uC77C\uACFC \uBC14\uB2E5: \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8","sm","m"),n),pi(360,284,p)},cue(n){let t=Ee("M14 112L28 44H118L132 112Z","i")+Vt(36,52,74,30,"k fk",2)+Qt(42,60,92,60,"e thin")+Qt(42,67,100,67,"e thin")+Qt(42,74,84,74,"e thin")+xe(44,98,3.5,"e")+xe(58,98,3.5,"e")+xe(72,98,3.5,"e")+xe(104,98,5,"k")+at(73,128,"\uBD80\uC2A4 \uCF58\uC194","sm tm","m");t+=Vt(142,20,210,128,"e",6);let e=(i,s,r,o,a)=>Le(o,at(150,i,s,"sm tm")+at(218,i,r,a?"mono":""),n);return t+=e(42,"\uC608\uC57D","02:30 \uC790\uB3D9 \uC810\uAC80 1\uAC74","schedule")+e(66,"\uC2E4\uD589","02:17:00 \uD050 1\uAC74","run")+e(90,"\uBC29\uC2DD","\uC218\uB3D9","sign")+e(114,"\uC785\uB825 \uC704\uCE58","\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94","sign")+e(138,"\uC11C\uBA85 \uCE78","H.D.Y.","sign",!0),t+=Le("sign",xe(104,98,9,"k thin")+at(104,144,"\uBCF8\uCCB4 \uB2E8\uCD94","sm","m")+Qt(104,108,104,132,"e thin"),n),t+=Le("bundle",Qt(247,148,247,168)+xe(247,172,4,"k fk")+Ee("M243 174Q180 180 94 196")+Ee("M251 174Q262 182 266 196")+at(256,168,"\uD55C \uD050\uC5D0 \uD568\uAED8 \uBB36\uC784","sm tm")+Vt(14,196,160,30,"k fk",6)+at(94,216,"\uC9C4\uC5F4\uB300 \uC870\uBA85 \uB0AE\uCDA4","","m")+Vt(186,196,160,30,"k fk",6)+at(266,216,"\uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638","","m"),n),t+=Le("remote",Ee("M14 248A12 12 0 0 1 34 248")+Ee("M18 252A7 7 0 0 1 30 252")+xe(24,255,1.6,"pinDot nd")+Ee("M36 240L44 248M44 240L36 248","i")+at(52,254,"\uC6D0\uACA9 \uC811\uC18D \uAE30\uB85D \uC5C6\uC74C",""),n),pi(360,264,t)},audio(n){let e=p=>16+(p+5.4)*22.5,i=p=>12+(p+9)*22.5,l=([p,g,y,m],f)=>{let _=Math.max(p,-5.4),b=Math.min(g,9.2),v=Math.max(y,-9),E=Math.min(m,-1.6);return _<b&&v<E?Vt(e(_),i(v),(b-_)*22.5,(E-v)*22.5,f):""},c=Zr.map(p=>l(p,"solid nd")).join("")+Yr.map(p=>l(p,"e wall")).join("")+l(vs,"e wall");c+=Qt(e(-5.4),i(-1.6),e(9.2),i(-1.6),"e h");let u=Ge;c+=Vt(e(u.x0),i(u.z0),(u.x1-u.x0)*22.5,(u.z1-u.z0)*22.5,"i")+at(e(u.x0)-5,i(u.z1)-2,"\uC9C4\uC5F4\uB300","sm tm","e"),c+=Vt(e(7.2),i(-8.6),1.6*22.5,1.2*22.5,"i",2),c+=at(30,170,"\uC804\uC2DC\uC2E4","room")+at(78,66,"\uC870\uBA85 \uBD80\uC2A4","room")+at(24,34,"\uBD81\uCABD \uBCF5\uB3C4","room");let d=Ys.map(([p,,g])=>[e(p),i(g)]),h=([p,g],y)=>xe(p,g,6)+at(p,g+3.5,String(y+1),"num","m");return c+=Le("channels",h(d[0],0)+h(d[1],1)+h(d[2],2)+at(d[0][0]+11,d[0][1]+4,"\uC9C4\uC5F4\uB300 \uC55E","sm")+at(d[1][0]-11,d[1][1]-4,"\uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD","sm","e")+at(d[2][0]-11,d[2][1]+4,"\uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C","sm","e"),n),c+=Le("021703",xe(d[1][0],d[1][1],11,"g thin"),n)+Le("021705",xe(d[2][0],d[2][1],11,"g thin"),n),pi(360,190,c)},poster(n){let t=Ee("M40 12H298L320 34V218H40Z","k fk")+Ee("M298 12V34H320","k thin");return t+=Qt(60,74,300,74,"e thin")+Qt(60,86,280,86,"e thin")+Qt(60,98,292,98,"e thin"),t+=Le("credit",at(60,46,"\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04","sm tm")+at(60,63,"\uC804\uC2DC \uD504\uB85C\uB4C0\uC11C \uD55C \uC0AC\uB78C\uC758 \uC774\uB984\uB9CC","b"),n),t+=Le("pencil",at(60,126,"\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD","pencil"),n),t+=Le("pen",at(60,148,"\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4","pen"),n),t+=Le("stamp",pn(Vt(-98,-15,196,30,"stampL",3)+at(0,5,"\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815 \xB7 01:40","stampT b","m"),{transform:"translate(192 173) rotate(-4)"}),n),t+=Qt(60,108,300,108,"e h")+at(300,104,"\uC5EC\uBC31","sm tm","e"),pi(360,230,t)}};function wg(n,t={}){let e=FM[n];return e?e(t.lit).replace('class="art"','class="art evArt'+(t.draw?" draw":"")+'"'):""}function Ag(n={}){let t=n.personName||"",e=(n.proof||[]).slice(0,2),i="";i+=t?wa(300,88,n.band||"",t):pn(wa(300,88,"","","e h")+at(300,101,"\uC9C0\uBAA9\uD560 \uC0AC\uB78C","sm tm","m"));for(let s=0;s<2;s++){let r=12+s*54,o=e[s],a=r+20;i+=o?Vt(10,r,132,40,"k fk",8)+at(76,a+4.5,o.name,"b","m"):Vt(10,r,132,40,"e h",8)+at(76,a+4.5,"\uC99D\uAC70","tm","m");let l=58+s*10,c=214,u=(a+l)/2;o&&t?i+=ao(148,a,280,l,o.shown?"k":"e h")+at(c,s?u+13:u-6,o.shown?"\uC81C\uC2DC\uD568 \u2713":"\uC544\uC9C1",o.shown?"sm tk b":"sm tm","m"):i+=Qt(148,a,280,l,"e h")}return pi(360,124,i,{cls:"accArt",draw:n.draw})}function Tg(n,t={}){let e=n==="route",i="";return i+=e?Vt(14,18,150,44,"e h",22)+at(89,45,"\uB80C\uC988\uAC00 \uB098\uAC04 \uAE38","tm","m")+at(89,84,"\uBE44\uC5B4 \uC788\uC74C","sm tg","m"):Vt(14,18,150,44,"k fk",22)+at(89,45,"\uB80C\uC988\uAC00 \uB098\uAC04 \uAE38","b","m")+at(89,84,"\u2713 \uC124\uBA85\uB428","sm tk","m"),i+=Vt(150,32,60,16,e?"e h":"k",8),e?i+=Vt(196,18,150,44,"e",22)+at(271,45,"\uADF8 \uAE38 \uB05D\uC758 \uC0AC\uB78C","tm","m"):i+=Ee("M260 18H218A22 22 0 0 0 218 62H260","k")+Ee("M282 18H324A22 22 0 0 1 324 62H282","k")+Ee("M264 14L268 24M276 56L280 66","g")+at(271,45,"\uADF8 \uAE38 \uB05D\uC758 \uC0AC\uB78C","b","m")+at(271,84,"\uC774\uC5B4\uC9C0\uC9C0 \uC54A\uC74C","sm tg","m"),pi(360,92,i,{cls:"chainArt",draw:t.draw})}function Eg(n,t={}){let e=r=>Array.isArray(n)?n.includes(r):oo(n,r),i=(r,o,a)=>e(a)?Vt(r,10,160,48,"e h",10)+at(r+80,39,o,"tm","m")+at(r+80,80,"\uBE60\uC9D0","sm tg","m"):Vt(r,10,160,48,"k fk",10)+at(r+80,39,o,"b","m")+at(r+80,80,"\u2713 \uC788\uC74C","sm tk","m"),s=i(8,"\uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uBB3C\uC99D","route")+at(180,39,"+","b tm","m")+i(192,"\uADF8 \uC2DC\uAC01\uC758 \uC77C\uC744 \uC801\uC740 \uAE30\uB85D","record");return pi(360,88,s,{cls:"gapArt",draw:t.draw})}var BM=n=>P.ui.lit&&P.ui.lit.has(n)?" on":"",kM=(n,t,e,i="")=>"<"+n+' data-cue="'+t+'" class="'+i+BM(t)+'">'+e+"</"+n+">",zM={"0152":"01:52","021659":"02:16:59","021700":"02:17:00","021708":"02:17:08"},GM=["0152","021659","021700","021708"];function ru(){let n="";for(let t of GM)P.ui.lit&&P.ui.lit.has(t)&&(n=zM[t]);return n||"01:52"}var ho=(n,t)=>wg(n,{lit:P.ui.lit,draw:t}),VM={lock:n=>ho("lock",n),fog:n=>'<div class="monitor"><div class="screen'+(P.ui.lit&&P.ui.lit.has("021700")&&!P.ui.lit.has("021708")?" white":"")+'"><span class="rec">REC</span><span class="ts mono" id="boardTs">'+ru()+"</span></div>"+ho("fog",n)+"</div>",drawer:n=>ho("drawer",n),cue:n=>ho("cue",n),audio:n=>ho("audio",n)+'<div class="wave"><canvas id="waveCv"></canvas>'+kM("p","021705","\u201C\uC5B4, \uBC8C\uC368?\u201D","sub")+"</div>",poster:n=>ho("poster",n)};function Rg(n,t){return'<div class="board board-'+n+'" id="board" aria-hidden="true">'+VM[n](t)+"</div>"}function Ud(n,t){P.ui.lit||(P.ui.lit=new Set),P.ui.lit.add(t);for(let o of document.querySelectorAll('#stage [data-cue="'+t+'"]'))o.classList.add("on");let e=Ss[n]||[],i=e.filter(o=>P.ui.lit.has(o.cue)).length,s=q("factCount");s&&P.ui.playing&&(s.textContent="\uC7AC\uC0DD \uC911 \xB7 \uC0AC\uC2E4 "+i+"/"+e.length);let r=q("ct-facts");if(r&&(r.textContent="\uC0AC\uC2E4 "+i),n==="audio"&&fo(),n==="fog"){let o=ru(),a=q("boardTs"),l=q("cctvTime");a&&(a.textContent=o),l&&(l.textContent=o);let c=document.querySelector("#board .screen");c&&c.classList.toggle("white",P.ui.lit.has("021700")&&!P.ui.lit.has("021708"))}}var Cg={"0210":0,channels:0,"021700":420,"021703":423,"021705":425};function fo(){let n=q("waveCv");if(!n||!P.ui.lit)return;let t=Math.max(200,n.clientWidth||300),e=n.clientHeight||128,i=Math.min(2,window.devicePixelRatio||1);n.width=Math.round(t*i),n.height=Math.round(e*i);let s=n.getContext("2d");if(!s)return;s.setTransform(i,0,0,i,0,0),s.clearRect(0,0,t,e);let r=P.ui.lit,o=!P.ui.playing,a=22,l=t-8,c=18,u=(e-c-22)/3,d=a+(l-a)*.2,h=a+(l-a)*.25,p=_=>_<=417?a+(d-a)*_/417:h+(l-h)*(_-417)/12,g='system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';s.font="13px "+g,s.textBaseline="middle";let y=7,m=()=>(y=y*16807%2147483647)/2147483647;for(let _=0;_<3;_++){let b=c+u*_+u/2;s.fillStyle="#b3c3bd",s.fillText(String(_+1),6,b),s.strokeStyle="#344744",s.lineWidth=1,s.beginPath(),s.moveTo(a,b),s.lineTo(l,b),s.stroke(),s.strokeStyle="#6a8f84",s.beginPath();for(let v=a;v<=l;v+=2){if(v>d&&v<h)continue;let E=u*.08*(.4+m());s.moveTo(v,b-E),s.lineTo(v,b+E)}s.stroke()}if(s.fillStyle="#b3c3bd",s.fillText("\u2026",(d+h)/2-4,c+u*1.5),r.has("021700")||o){let _=p(420);s.strokeStyle="#efb761",s.setLineDash([4,4]),s.beginPath(),s.moveTo(_,c-4),s.lineTo(_,c+u*3),s.stroke(),s.setLineDash([]),s.fillStyle="#efb761",s.textAlign="right",s.fillText("02:17:00 \uC548\uAC1C \uBD84\uC0AC\uC74C",_-4,9),s.textAlign="left"}if(r.has("021703")||o){let _=p(423),b=c+u*1.5;s.strokeStyle="#f3eee2",s.lineWidth=2,s.beginPath();for(let v=-4;v<=4;v++){let E=u*.46*(1-Math.abs(v)/5);s.moveTo(_+v*1.6,b-E),s.lineTo(_+v*1.6,b+E)}s.stroke(),s.lineWidth=1}if(r.has("021705")||o){let _=p(425),b=p(426.3),v=c+u*2.5;s.strokeStyle="#f3eee2",s.beginPath();for(let E=_;E<=b;E+=2){let T=(E-_)/(b-_),x=u*.32*Math.sin(Math.PI*T)*(.6+.4*Math.abs(Math.sin(T*17)));s.moveTo(E,v-x),s.lineTo(E,v+x)}s.stroke()}s.fillStyle="#b3c3bd";let f=e-8;s.fillText("02:10",a,f);for(let[_,b]of[[423,"03"],[425,"05"]])(r.has(_===423?"021703":"021705")||o)&&(s.textAlign="center",s.fillText(b,p(_),f),s.textAlign="left");if(!o){let _=0;for(let v of Object.keys(Cg))r.has(v)&&(_=Math.max(_,Cg[v]));let b=p(_);s.strokeStyle="#b1dcc6",s.lineWidth=2,s.beginPath(),s.moveTo(b,c-6),s.lineTo(b,c+u*3+2),s.stroke(),s.lineWidth=1}}var Od=n=>{let[t,e,i]=n.split(":").map(Number);return t*60+e+(i||0)/60},Ig=Od("01:40"),HM=Od("02:19"),ou=n=>((Od(n)-Ig)/(HM-Ig)*100).toFixed(2)+"%";function Lg(n){let t=Rn.filter(r=>n.seen.has(r.id)).sort((r,o)=>r.at-o.at),e=Je.filter(r=>n.asked.has(r.id));if(!t.length&&!e.length)return{caption:"\uD655\uC778\uD55C \uC99D\uAC70\uC758 \uC2DC\uAC01\uACFC \uB4E4\uC740 \uC9C4\uC220\uC774 01:40\uBD80\uD130 02:19\uAE4C\uC9C0\uC758 \uB9C9\uB300\uC5D0 \uB193\uC785\uB2C8\uB2E4.",rows:[],axis:""};let i=t.map(r=>{let o=/이후/.test(r.time),a=r.time.replace(/\s*이후/,""),l=(o?'<i class="tlAfter" style="left:'+ou(a)+';right:0"></i>':"")+'<i class="tlMark" style="left:'+ou(a)+'"></i>';return'<li class="tl"><button type="button" class="tlBtn" data-action="board" data-id="'+r.id+'"><span class="tlLabel"><b class="mono">'+dt(r.time)+"</b> "+dt(r.name)+'</span><span class="tlTrack" aria-hidden="true">'+l+"</span></button></li>"}).concat(e.map(r=>'<li class="tl who"><button type="button" class="tlBtn" data-action="transcript" data-id="'+r.id+'"><span class="tlLabel"><b class="mono">02:17</b> '+dt(r.name)+" \xB7 "+dt(fi[r.id].label)+'</span><span class="tlTrack" aria-hidden="true"><i class="tlMark" style="left:'+ou("02:17")+'"></i></span></button></li>')),s='<li class="tlAxisLi" aria-hidden="true"><span class="tlAxisPad"></span><span class="tlAxis">'+["01:40","02:00","02:10"].map(r=>'<span style="left:'+ou(r)+'">'+r+"</span>").join("")+'<span class="end">02:19</span></span></li>';return{caption:"\uD655\uC778\uD55C \uC99D\uAC70\uC758 \uC2DC\uAC01\uACFC, \uC9C8\uBB38\uC5D0 \uB2F5\uD55C \uC0AC\uB78C\uC774 02\uC2DC 17\uBD84\uC5D0 \uC788\uC5C8\uB2E4\uACE0 \uB9D0\uD55C \uC790\uB9AC\uC785\uB2C8\uB2E4.",rows:i,axis:s}}var Pg=8;function mn(n,t,e={}){let i=e.list?"<"+e.list+' class="pgList '+(e.listCls||"")+'" role="list">'+t.join("")+"</"+e.list+">":t.map(s=>'<div class="pgc">'+s+"</div>").join("");return'<div class="pager" data-pg="'+n+'"'+(e.list?' data-list="'+e.list+'" data-list-cls="'+(e.listCls||"")+'"':"")+(e.label?' aria-label="'+e.label+'"':"")+'><div class="pgBody" id="pgb-'+n+'">'+i+'</div><div class="pgNav" hidden>'+Ct("pg",n,'<span aria-hidden="true">\u25C0 </span>\uC774\uC804 \uCABD',{arg:"prev",cls:"pgBtn"})+'<span class="pgNum" aria-hidden="true"></span>'+Ct("pg",n,'\uB2E4\uC74C \uCABD<span aria-hidden="true"> \u25B6</span>',{arg:"next",cls:"pgBtn"})+"</div></div>"}var Bd=n=>{let t=n.querySelector(".pgBody");return!!(t&&t.getClientRects().length)},Dg=()=>P.ui?P.ui.pg||(P.ui.pg={}):{},Ta=n=>[...n.querySelector(".pgBody").children].filter(t=>t.classList.contains("pg"));function WM(n){let t=n.querySelector(".pgBody"),e=n.dataset.list,i=Ta(n),s=[];if(i.length)for(let r of i){let o=e?r.firstElementChild:r;o&&s.push(...o.children)}else{let r=e?t.firstElementChild:t;r&&s.push(...r.children)}return s}function Ng(n){let t=n.querySelector(".pgBody"),e=n.querySelector(".pgNav"),i=n.dataset.pg,s=n.dataset.list;if(!t||!e)return;if(!Bd(n)){n.dataset.dirty="1";return}delete n.dataset.dirty;let r=document.activeElement,o=r&&n.contains(r)?r:null,a=WM(n);a.forEach((m,f)=>{m.dataset.i=String(f),m.classList.add("pgc")}),t.textContent="";let l=t;s&&(l=document.createElement(s),l.className="pgList "+(n.dataset.listCls||""),l.setAttribute("role","list"),t.appendChild(l));for(let m of a)l.appendChild(m);e.hidden=!0;let c=t.clientHeight,u=a.map(m=>m.offsetHeight),d=u.reduce((m,f)=>m+f,0)+Pg*Math.max(0,a.length-1),h;if(d<=c+.5||a.length<=1)h=[a.map((m,f)=>f)];else{e.hidden=!1,c=t.clientHeight,h=[];let m=[],f=0;u.forEach((_,b)=>{let v=m.length?Pg+_:_;m.length&&f+v>c+.5?(h.push(m),m=[b],f=_):(m.push(b),f+=v)}),m.length&&h.push(m)}t.textContent="";let p=h.length;h.forEach((m,f)=>{let _=document.createElement("div");_.className="pg",_.tabIndex=-1,_.dataset.first=String(m[0]),p>1&&(_.setAttribute("role","group"),_.setAttribute("aria-label",f+1+"/"+p+"\uCABD"));let b=_;s&&(b=document.createElement(s),b.className=n.dataset.listCls||"",b.setAttribute("role","list"),s==="ol"&&(b.start=m[0]+1),_.appendChild(b));for(let v of m)b.appendChild(a[v]);m.length===1&&u[m[0]]>c+.5&&_.classList.add("pgTall"),t.appendChild(_)});let g=Dg()[i]||0,y=0;h.forEach((m,f)=>{m[0]<=g&&(y=f)}),kd(n,y),o&&document.contains(o)&&(au(o),o.focus({preventScroll:!0}))}function kd(n,t,e){let i=Ta(n),s=i.length;if(!s)return;t=Math.max(0,Math.min(s-1,t)),i.forEach((c,u)=>{c.hidden=u!==t,c.classList.toggle("enter",!!e&&u===t&&!dn())});let r=n.querySelector(".pgNav");r.hidden=s<=1;let o=r.querySelector(".pgNum");o&&(o.textContent=t+1+"/"+s);let[a,l]=r.querySelectorAll('[data-action="pg"]');return a&&a.setAttribute("aria-disabled",String(t===0)),l&&l.setAttribute("aria-disabled",String(t===s-1)),Dg()[n.dataset.pg]=+i[t].dataset.first,n.dataset.page=String(t),{idx:t,N:s}}function ns(n=document){if(n)for(let t of n.querySelectorAll(".pager"))Ng(t)}var XM=n=>[...document.querySelectorAll('.pager[data-pg="'+n+'"]')].find(Bd)||document.querySelector('.pager[data-pg="'+n+'"]');function Aa(n,t){let e=XM(n);if(!e)return!1;e.dataset.dirty&&Ng(e);let i=Ta(e),s=+(e.dataset.page||0),r=t==="prev"?s-1:t==="next"?s+1:+t;if(r<0||r>=i.length||r===s)return!1;let o=kd(e,r,!0),a=Ta(e)[o.idx];a&&a.focus({preventScroll:!0});let l=q("pageLive");return l&&(l.textContent=o.idx+1+"/"+o.N+"\uCABD"),!0}function au(n){if(!n)return;let t=n.closest&&n.closest(".pg");if(!t||!t.hidden)return;let e=t.closest(".pager");e&&kd(e,Ta(e).indexOf(t))}var Fd=0;function lu(){Fd||(Fd=requestAnimationFrame(()=>{Fd=0,ns(document)}))}function Ug(){let n=null;document.addEventListener("pointerdown",t=>{let e=t.target.closest&&t.target.closest(".pgBody");n=e&&!t.target.closest("input,select,textarea")?{x:t.clientX,y:t.clientY,b:e}:null},{passive:!0}),document.addEventListener("pointerup",t=>{if(!n)return;let e=n;n=null;let i=t.clientX-e.x,s=t.clientY-e.y;if(Math.abs(i)<48||Math.abs(s)>=.6*Math.abs(i))return;let r=e.b.closest(".pager");r&&Aa(r.dataset.pg,i<0?"next":"prev")},{passive:!0}),document.addEventListener("keydown",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;let e=document.activeElement,i=e&&e.closest?e.closest(".pager"):null;if(t.key==="PageDown"||t.key==="PageUp"){if(!i){let s=document.querySelector("dialog[open]")||q("deck");i=s&&[...s.querySelectorAll(".pager")].find(Bd)}if(!i)return;Aa(i.dataset.pg,t.key==="PageDown"?"next":"prev")&&t.preventDefault();return}(t.key==="ArrowRight"||t.key==="ArrowLeft")&&i&&!e.closest("[role=tablist],[role=radiogroup],input,textarea,select,.tiles")&&Aa(i.dataset.pg,t.key==="ArrowRight"?"next":"prev")&&t.preventDefault()})}var zd=(n,t={})=>Mg({seen:P.g.seen,asked:P.g.asked,highlight:n,draw:t.draw===!1?!1:Qs("plan")}),Ea=()=>{let n=P.g;return n.budget?"\uB0A8\uC740 \uC870\uC0AC "+n.budget+"\uD68C.":fe.stuck(n)?"\uB0A8\uC740 \uC870\uC0AC 0\uD68C. \uC704\uCABD \uC548\uB0B4 \uC904\uC744 \uD655\uC778\uD558\uC138\uC694.":"\uB0A8\uC740 \uC870\uC0AC 0\uD68C. \uC99D\uAC70 \uC81C\uC2DC\uC640 \uC9C0\uBAA9\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},du=()=>"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uAC00 "+ha[P.g.tries]+" \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.",fu=n=>n[0]==="e"?fn[n.slice(2)].name:Me[n.slice(2)].name+"\uC758 \uC9C4\uC220",hu=(n,t)=>Ct("pin",n,(P.g.pins.has(n)?"\uACE0\uC815 \uD574\uC81C":"\uACE0\uC815")+'<span class="sr"> \xB7 '+dt(fu(n))+"</span>",{cls:"quiet pinBtn",arg:t}),YM=n=>P.g.pins.has(n)?" \xB7 \uACE0\uC815\uB428":"",Fg=()=>Ct("card-close","",'\uB2EB\uAE30<span aria-hidden="true"> \u2715</span>',{cls:"quiet xBtn"});function uu(n,t,e,i,s,r,o=""){return'<div class="seg'+(o?" "+o:"")+'" role="tablist" aria-label="'+r+'">'+i.map(([a,l])=>'<button type="button" role="tab" id="'+t+"-"+a+'" data-action="'+n+'" data-id="'+a+'" aria-controls="'+e+"-"+a+'" aria-selected="'+(a===s)+'" tabindex="'+(a===s?0:-1)+'">'+l+"</button>").join("")+"</div>"}var mi=(n,t,e,i,s,r="")=>'<div class="tabp'+(r?" "+r:"")+'" role="tabpanel" id="'+t+"-"+e+'" aria-labelledby="'+n+"-"+e+'" data-page="'+e+'"'+(e===i?"":" hidden")+">"+s+"</div>";function Bg(){let n=P.g;return!n||n.budget?null:fe.stuck(n)?{testid:"stuck",action:"stuck-open",text:"\uC9C0\uAE08 \uAE30\uB85D\uC73C\uB85C\uB294 \uC785\uC99D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 \xB7 \uC790\uC138\uD788"}:{testid:"zero",action:"zero-open",text:"\uC870\uC0AC \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4. \uC99D\uAC70 \uC81C\uC2DC\uC640 \uAE30\uB85D \uC77D\uAE30, \uC9C0\uBAA9\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \xB7 \uC790\uC138\uD788"}}function ZM(){let n=P.g;return"\uC870\uC0AC \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4. \uC99D\uAC70 \uC81C\uC2DC\uC640 \uAE30\uB85D \uC77D\uAE30, \uC9C0\uBAA9\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."+(fe.unheard(n)?" \uC9C8\uBB38\uD558\uC9C0 \uBABB\uD55C \uC0AC\uB78C\uC740 \uC9C0\uBAA9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uADF8 \uC0AC\uB78C\uC744 \uC9C0\uBAA9\uD558\uB824\uBA74 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.":"")}function JM(){let n=P.g,t=fe.lacking(n);return["<p>\uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uC744 \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4. \uACB0\uB860\uC744 \uC785\uC99D\uD558\uB824\uBA74 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uBB3C\uC99D\uACFC \uADF8 \uC2DC\uAC01\uC758 \uC77C\uC744 \uC801\uC740 \uAE30\uB85D\uC774 \uBAA8\uB450 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774 \uAC00\uC6B4\uB370 \uBE60\uC9C4 \uAC83\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p>",Eg(t,{draw:Qs("gap")})].concat(t.map(e=>'<ul class="whyList"><li>'+L0[e]+"</li></ul>")).concat(["<p>\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC9C0\uAE08\uC758 \uAE30\uB85D\uC740 \uC9C0\uC6CC\uC9C0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4. \uC774\uBC88\uC5D0\uB294 \uBB34\uC5C7\uC744 \uAC74\uB108\uB6F8\uC9C0 \uBA3C\uC800 \uC815\uD558\uACE0 \uC2DC\uC791\uD558\uC138\uC694.</p>"])}var KM=()=>"\uBC94\uC778 \uD55C \uBA85\uACFC \uC774\uBBF8 \uD655\uC778\uD55C \uC99D\uAC70 \uB450 \uAC1C\uB97C \uC81C\uCD9C\uD569\uB2C8\uB2E4. \uD55C \uC99D\uAC70\uB294 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744, \uB2E4\uB978 \uD55C \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC758 \uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098\uB294 \uC9C0\uC810\uC744 \uBCF4\uC5EC \uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC81C\uCD9C\uD560 \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC5B4\uC57C \uD569\uB2C8\uB2E4. "+(P.g.tries>1?"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 "+ha[P.g.tries]+" \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uC2B5\uB2C8\uB2E4.":"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uD55C \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4. \uC774\uBC88\uC5D0 \uD2C0\uB9AC\uBA74 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB05D\uB098\uACE0, \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.");function kg(n){let t=P.g;return['<div class="turn"><p class="asked">\u2014 '+dt(ma)+'</p><blockquote class="quote">'+dt(n.say)+"</blockquote></div>"].concat(t.shown.filter(e=>e.startsWith(n.id+":")).map(e=>{let i=e.split(":")[1];return'<div class="turn" id="r-'+n.id+"-"+i+'" tabindex="-1"><p class="asked">\u2014 '+dt(rr(i))+' \uC81C\uC2DC\uD588\uB2E4.</p><blockquote class="quote">'+dt(fe.reaction(n.id,i))+"</blockquote></div>"}))}var $M=n=>kg(n).join(""),Gd=(n,t)=>'[data-action="present"][data-id="'+n+'"]'+(t?'[data-arg="'+t+'"]':""),Og=(n,t,e)=>n||!e&&t===0?"0":"-1",Vd={scene(){let n=P.g,t=P.ui,e=t.selected&&t.selected.startsWith("e:")?t.selected.slice(2):"",i=Rn.map((r,o)=>{let a="e:"+r.id,l=n.seen.has(r.id),c=e===r.id,u=n.pins.has(a);return'<button type="button" class="tile'+(l?" seen":"")+'" data-action="select" data-id="'+a+'" id="row-'+r.id+'" aria-pressed="'+c+'" tabindex="'+Og(c,o,!!e)+'"><span class="tTime">'+dt(r.time)+'</span><span class="tName">'+dt(r.name)+'</span><span class="tStat">'+(l?"\u2713 \uD655\uC778\uD568":"\uD655\uC778 \uC804")+'</span><span class="sr">, '+dt(r.kind)+(u?", \uACE0\uC815\uB428":"")+"</span>"+(u?'<span class="pinMark" aria-hidden="true">\u25C6</span>':"")+"</button>"}).join(""),s;if(e){let r=fn[e],o="e:"+e,a=n.seen.has(e);s='<p class="actLine">'+dt(r.kind+" \xB7 "+r.tease)+'</p><div class="actRow">'+(a?Ct("board",r.id,'\uB2E4\uC2DC \uBCF4\uAE30<span class="sr"> \xB7 '+dt(r.name)+"</span>",{cls:"primary grow"})+hu(o,"act"):Ct("inspect",r.id,'<span class="sr">'+dt(r.name)+" </span>\uD655\uC778\uD558\uAE30 \xB7 "+(n.budget?"\uC870\uC0AC 1\uD68C":"\uC870\uC0AC \uAE30\uD68C \uC5C6\uC74C"),{cls:"primary grow",attr:'aria-disabled="'+!n.budget+'"'}))+"</div>"}else s='<p class="actLine">\uCC98\uC74C \uD655\uC778\uD560 \uB54C\uB9CC \uC870\uC0AC 1\uD68C \xB7 \uB2E4\uC2DC \uBCF4\uAE30\xB7\uACE0\uC815\uC740 \uBB34\uB8CC</p><div class="actRow">'+Ct("layout-open","","\uD604\uC7A5 \uBC30\uCE58")+"</div>";return'<h2 id="stageTitle" class="sr" tabindex="-1">\uD604\uC7A5 \uC870\uC0AC</h2><div class="tiles tiles3" role="group" aria-label="\uC99D\uAC70 6\uAC1C">'+i+'</div><div id="act" class="act">'+s+"</div>"},board(){let n=P.ui,t=n.board,e=fn[t],i=n.lit||new Set,s="e:"+t,r=n.cardTab||"art",o=Ss[t],a=o.filter(d=>i.has(d.cue)).length,l="";for(let d of o)i.has(d.cue)&&(l=d.t);let c='<div class="evRun"><div class="evHead"><p class="evName">'+dt(e.name)+'</p><span id="factCount" class="factCount">'+(n.playing?"\uC7AC\uC0DD \uC911 \xB7 \uC0AC\uC2E4 "+a+"/"+o.length:"")+'</span></div><p id="factStrip" class="factStrip" aria-hidden="true">'+dt(l)+"</p></div>",u='<div class="card evCard"><div class="chead"><p class="pill">'+dt(e.kind+" \xB7 "+e.time)+" \xB7 \uD655\uC778\uD568"+YM(s)+'</p><h2 id="stageTitle" tabindex="-1">'+dt(e.name)+"</h2></div>"+uu("card-tab","ct","cp",[["art","\uB3C4\uBA74"],["facts","\uC0AC\uC2E4 "+a],["raw","\uC6D0\uBB38"]],r,"\uC99D\uAC70 \uBCF4\uAE30")+'<div class="cbody">'+mi("ct","cp","art",r,mn("ev-art",[Rg(t,Qs("ev:"+t))]))+mi("ct","cp","facts",r,'<h3 class="sr">\uD655\uC778\uD55C \uC0AC\uC2E4</h3>'+mn("ev-facts",['<ol class="facts" role="list">'+o.map(d=>'<li data-cue="'+d.cue+'" class="'+(i.has(d.cue)?"on":"")+'">'+dt(d.t)+"</li>").join("")+"</ol>"]))+mi("ct","cp","raw",r,'<h3 class="sr">\uC6D0\uBB38 \uAE30\uB85D</h3>'+mn("ev-raw",['<blockquote class="quote">'+dt(e.text)+"</blockquote>"]))+"</div></div>";return'<div class="ev">'+c+u+'<div class="cfoot" id="boardCtl">'+Hd()+"</div></div>"},people(){let n=P.g,t=P.ui,e=Rn.filter(l=>n.seen.has(l.id)),i=t.selected&&t.selected.startsWith("p:")?t.selected.slice(2):"",s=Je.map((l,c)=>{let u="p:"+l.id,d=n.asked.has(l.id),h=i===l.id,p=n.shown.filter(f=>f.startsWith(l.id+":")).length,g=n.pins.has(u),y=d?e.length?"\uC81C\uC2DC "+p+"/"+e.length:"\uC9C4\uC220 \u2713":"\uC9C8\uBB38 \uC804",m=", "+l.role+(d?", \uC9C4\uC220 \uD655\uBCF4"+(e.length?", \uC99D\uAC70 \uC81C\uC2DC "+p+"/"+e.length:""):", \uC9C8\uBB38 \uC804")+(g?", \uACE0\uC815\uB428":"");return'<button type="button" class="tile ptile'+(d?" seen":"")+'" data-action="select" data-id="'+u+'" id="row-'+l.id+'" aria-pressed="'+h+'" tabindex="'+Og(h,c,!!i)+'">'+Rs(l.id,"pface")+Cs(l.id).replace('class="band"','class="band pband"')+'<span class="tName pName">'+dt(l.name)+'</span><span class="pRole" aria-hidden="true">'+dt(l.role)+'</span><span class="tStat" aria-hidden="true">'+y+'</span><span class="sr">'+dt(m)+"</span>"+(g?'<span class="pinMark" aria-hidden="true">\u25C6</span>':"")+"</button>"}).join(""),r,o="",a=i?Me[i]:null;if(!a)r='<p class="actLine">\uCCAB \uC9C8\uBB38\uB9CC \uC870\uC0AC 1\uD68C \xB7 \uC9C4\uC220\uC744 \uB4E4\uC740 \uB4A4 \uC99D\uAC70 \uC81C\uC2DC\uB294 \uBB34\uB8CC</p>';else if(!n.asked.has(a.id))r='<p class="actLine pLine">'+dt(a.line)+'</p><p class="actLine">\uC9C8\uBB38: '+dt(ma)+'</p><div class="actRow">'+Ct("ask",a.id,'<span class="sr">'+dt(a.name)+"\uC5D0\uAC8C </span>\uC9C8\uBB38\uD558\uAE30 \xB7 "+(n.budget?"\uC870\uC0AC 1\uD68C":"\uC870\uC0AC \uAE30\uD68C \uC5C6\uC74C"),{cls:"primary grow",attr:'aria-disabled="'+!n.budget+'"'})+"</div>";else{let l="p:"+a.id,c=n.shown.filter(d=>d.startsWith(a.id+":")).length,u=Rn.map(d=>{if(!n.seen.has(d.id))return'<button type="button" class="chip off" aria-disabled="true" aria-describedby="chipNote">\uD655\uC778 \uC804<span class="sr"> '+dt(d.name)+"</span></button>";let h=n.shown.includes(a.id+":"+d.id);return Ct("present",a.id,'<span class="cName">'+dt(d.name)+"</span>"+(h?'<span class="sr"> \xB7 \uC81C\uC2DC\uD568</span><span class="ok" aria-hidden="true">\u2713</span>':""),{cls:"chip"+(h?" done":""),arg:d.id})}).join("");r='<div class="presHead"><h4>\uC99D\uAC70 \uC81C\uC2DC \xB7 \uBB34\uB8CC</h4>'+Ct("transcript",a.id,"\uC9C4\uC220 \uBCF4\uAE30 \xB7 \uB2F5\uBCC0 "+(1+c))+hu(l,"act")+'</div><div class="chips" role="group" aria-label="'+dt(a.name)+'\uC5D0\uAC8C \uC99D\uAC70 \uC81C\uC2DC">'+u+'</div><p id="chipNote" class="sr">\uD604\uC7A5\uC5D0\uC11C \uBA3C\uC800 \uD655\uC778\uD55C \uC99D\uAC70\uB9CC \uC81C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>',o='<div id="pb-'+a.id+'" class="sr" tabindex="-1">'+$M(a)+"</div>"}return'<h2 id="stageTitle" class="sr" tabindex="-1">\uC6A9\uC758\uC790 \uBA74\uB2F4</h2><div class="tiles tiles4" role="group" aria-label="\uC6A9\uC758\uC790 4\uBA85">'+s+'</div><div id="act" class="act">'+r+"</div>"+o},notes(){let n=P.g,t=P.ui,e=t.notesPage||"plan",i='<div class="nHead"><h2 id="stageTitle" tabindex="-1">\uC0AC\uAC74 \uAE30\uB85D</h2><p class="caption" data-testid="summary">\uC99D\uAC70 '+n.seen.size+"/"+Rn.length+" \uD655\uC778 \xB7 \uC9C4\uC220 "+n.asked.size+"/"+Je.length+" \uD655\uBCF4 \xB7 \uACE0\uC815 "+n.pins.size+"\uAC1C</p></div>",s=Lg(n),r=a=>{let l=n.asked.has(a.id),c=Rs(a.id,"avatar")+'<span class="nWho"><span class="nTop">'+Cs(a.id)+"<b>"+dt(a.name)+'</b><span class="nRole">'+dt(a.role)+'</span></span><span class="nClaim">'+(l?dt(fi[a.id].label):"\uC9C8\uBB38 \uC804 \xB7 \uBA74\uB2F4\uC73C\uB85C \uAC00\uAE30")+'</span></span><span class="nGo" aria-hidden="true">\u203A</span>';return l?Ct("transcript",a.id,c,{cls:"nRow"}):Ct("goto-person",a.id,c+'<span class="sr"> \uBA74\uB2F4\uC5D0\uC11C '+dt(a.name)+"\uC5D0\uAC8C \uC9C8\uBB38\uD558\uAE30</span>",{cls:"nRow"})},o=[...n.pins].map(a=>{let l=a.slice(2),c=a[0]==="e";return Ct(c?"board":"transcript",l,"<b>"+dt(fu(a))+"</b><small>"+(c?"\uC99D\uAC70 \xB7 "+dt(fn[l].time):"\uC9C4\uC220")+"</small>",{cls:"pinTile"})});return'<div class="notes" data-page="'+e+'">'+i+uu("notes-page","nt","np",[["plan","\uBC30\uCE58\uB3C4"],["time","\uC2DC\uAC04\uD45C"],["people","\uC9C4\uC220"],["pins","\uACE0\uC815 "+n.pins.size]],e,"\uAE30\uB85D \uBCF4\uAE30")+mi("nt","np","plan",e,mn("n-plan",['<p class="muted caption">\uD655\uC778\uD55C \uC99D\uAC70\uC640, \uC9C4\uC220\uD55C \uC0AC\uB78C\uC774 \uB9D0\uD55C \uC790\uB9AC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p>'+zd(null)]))+mi("nt","np","time",e,'<p class="muted caption">'+s.caption+"</p>"+(s.rows.length?mn("n-time",s.rows.concat([s.axis]),{list:"ol",listCls:"tlList"}):""))+mi("nt","np","people",e,'<h3 class="sr">\uC9C4\uC220\uACFC \uC81C\uC2DC \uAE30\uB85D</h3>'+mn("n-people",Je.map(r)))+mi("nt","np","pins",e,'<h3 id="nPin" class="sr" tabindex="-1">\uACE0\uC815\uD55C \uAE30\uB85D</h3>'+(o.length?mn("n-pins",['<div class="pinGrid">'+o.join("")+"</div>"]):'<p class="muted caption">\uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4. \uC99D\uAC70\uB098 \uC9C4\uC220 \uC606\uC758 \u2018\uACE0\uC815\u2019\uC744 \uB204\uB974\uBA74 \uC5EC\uAE30\uC5D0 \uBAA8\uC785\uB2C8\uB2E4.</p>'))+"</div>"},accuse(){let n=P.g,t=P.ui,e=t.proof.length,i=e===2,s=fe.ready(n,t.person,t.proof),r=t.person&&Me[t.person],o=r&&n.asked.has(r.id),a=['<li class="'+(r?"ok":"")+'">'+(r?dt(Nd(r.id))+" \uC9C0\uBAA9\uD569\uB2C8\uB2E4.":"\uBC94\uC778 \uD55C \uBA85\uC744 \uACE0\uB974\uC138\uC694.")+"</li>",'<li class="'+(i?"ok":"")+'">'+(i?"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":e?"\uC99D\uAC70\uB97C \uD558\uB098 \uB354 \uACE0\uB974\uC138\uC694.":"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE0\uB974\uC138\uC694.")+"</li>"],l="";if(r&&!o)a.push("<li>"+dt(r.name)+"\uC758 \uC9C4\uC220\uC744 \uC544\uC9C1 \uB4E3\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. "+(n.budget?"\uBA74\uB2F4\uC5D0\uC11C \uBA3C\uC800 \uC9C8\uBB38\uD558\uC138\uC694(\uC870\uC0AC 1\uD68C).":"\uC870\uC0AC \uAE30\uD68C\uAC00 \uC5C6\uC5B4 \uC9C4\uC220\uC744 \uB4E4\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC9C4\uC220\uC744 \uB4E3\uC9C0 \uC54A\uC740 \uC0AC\uB78C\uC740 \uC9C0\uBAA9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")+"</li>");else if(r)for(let h of t.proof){let p=n.shown.includes(r.id+":"+h);a.push('<li class="'+(p?"ok":"")+'">'+dt(r.name)+"\uC5D0\uAC8C "+dt(rr(h))+(p?" \uC81C\uC2DC\uD588\uC2B5\uB2C8\uB2E4.":" \uC544\uC9C1 \uC81C\uC2DC\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")+"</li>")}r&&e&&!s.steps.filter(h=>h.id==="shown").every(h=>h.ok)&&(o||n.budget)&&(l=Ct("goto-person",r.id,"\uBA74\uB2F4\uC5D0\uC11C "+dt(r.name)+"\uC5D0\uAC8C "+(o?"\uC81C\uC2DC\uD558\uAE30":"\uC9C8\uBB38\uD558\uAE30"),{cls:"grow goBtn"}));let c=Je.map(h=>'<label class="pick tile ptile apick"><input type="radio" class="vh" name="suspect" value="'+h.id+'"'+(t.person===h.id?" checked":"")+">"+Rs(h.id,"aface")+Cs(h.id).replace('class="band"','class="band pband"')+'<span class="tName pName">'+dt(h.name)+'</span><span class="tStat">'+(n.asked.has(h.id)?"\uC9C4\uC220 \u2713":"\uC9C4\uC220 \uC5C6\uC74C")+'</span><span class="sr">, '+dt(h.role)+"</span></label>").join(""),u=Rn.map(h=>{if(!n.seen.has(h.id))return'<label class="pick tile etile unseen"><input type="checkbox" class="vh" name="proof" value="'+h.id+'" disabled><span class="eName" aria-hidden="true">\uD655\uC778 \uC804</span><span class="sr">'+dt(h.name)+", \uD655\uC778 \uC804</span></label>";let p=t.proof.includes(h.id),g=i&&!p,y=o&&n.shown.includes(r.id+":"+h.id),m=n.pins.has("e:"+h.id);return'<label class="pick tile etile'+(g?" off":"")+'"><input type="checkbox" class="vh" name="proof" value="'+h.id+'" aria-describedby="proofNote"'+(p?" checked":"")+(g?' aria-disabled="true"':"")+'><span class="eName">'+dt(h.name)+'</span><span class="sr">'+(m?" \xB7 \uACE0\uC815\uB428":"")+(o?y?" \xB7 \uC81C\uC2DC\uD568":" \xB7 \uC544\uC9C1 \uC81C\uC2DC\uD558\uC9C0 \uC54A\uC74C":"")+"</span>"+(y?'<span class="okMark" aria-hidden="true">\u2713</span>':"")+(m?'<span class="pinMark" aria-hidden="true">\u25C6</span>':"")+"</label>"}).join(""),d=t.accusePage||"pick";return'<h2 id="stageTitle" class="sr" tabindex="-1">\uCD5C\uC885 \uC9C0\uBAA9</h2><div class="acc" data-page="'+d+'">'+uu("accuse-page","at","ap",[["pick","1\xB72 \uACE0\uB974\uAE30"],["check","3 \uD655\uC778"]],d,"\uC9C0\uBAA9 \uB2E8\uACC4","accSeg")+'<div class="accPick" id="ap-pick" role="tabpanel" aria-labelledby="at-pick"><fieldset class="pickSet ps1"><legend>1 \uBC94\uC778 \uD55C \uBA85</legend><div class="lgSide"><span class="triesChip'+(n.tries===1?" last":"")+'">'+(n.tries===1?"\uB9C8\uC9C0\uB9C9 \uAE30\uD68C":"\uACB0\uB860 \uAE30\uD68C "+n.tries+"\uBC88")+"</span>"+Ct("accuse-info","",'<span aria-hidden="true">\u24D8 </span>\uC870\uAC74',{cls:"quiet infoBtn"})+'</div><div class="picks4">'+c+'</div></fieldset><fieldset class="pickSet ps2"><legend>2 \uC99D\uAC70 \uB450 \uAC1C ('+e+'/2)</legend><div class="picks3">'+u+'</div><p class="sr" id="proofNote">'+(i?"\uB450 \uAC1C\uB97C \uBAA8\uB450 \uACE8\uB790\uC2B5\uB2C8\uB2E4. \uBC14\uAFB8\uB824\uBA74 \uACE0\uB978 \uC99D\uAC70 \uD558\uB098\uB97C \uBA3C\uC800 \uBE7C\uC138\uC694.":"")+'</p></fieldset></div><div class="accCheck" id="ap-check" role="tabpanel" aria-labelledby="at-check"><h3 id="checkTitle" tabindex="-1">3 \uC81C\uCD9C \uC804 \uD655\uC778</h3><ul class="steps" role="list" id="steps" data-testid="steps">'+a.join("")+'</ul><div class="actRow accRow">'+l+Ct("submit-ask","","\uACB0\uB860 \uC81C\uCD9C",{cls:"primary grow",attr:'aria-disabled="'+!s.ok+'" aria-describedby="steps"'})+"</div></div></div>"}};function Hd(){let n=P.ui.board;return n?(P.ui.playing?Ct("skip-play",n,"\uC7AC\uC0DD \uAC74\uB108\uB6F0\uAE30"):Ki()?Ct("replay",n,"\uB2E4\uC2DC \uC7AC\uC0DD"):"")+hu("e:"+n,"board")+Ct("board-close",n,"\uB2EB\uAE30",{cls:"primary"}):""}function cu(n,t,e,i,s=""){return'<div class="card sCard"'+s+'><div class="chead"><h2 id="stageTitle" tabindex="-1">'+t+"</h2>"+Fg()+'</div><div class="cbody">'+mn(n,e)+'</div><div class="cfoot">'+i+"</div></div>"}function zg(){let n=P.ui.card,t=P.g;if(n.kind==="talk"){let e=Me[n.id],i="p:"+e.id;return'<div class="card tCard"><div class="chead">'+Rs(e.id,"avatar")+'<div class="cTitle"><h2 id="stageTitle" tabindex="-1">'+dt(e.name+" \xB7 "+e.role)+'</h2><p class="sub">\uC9C4\uC220\uACFC \uC81C\uC2DC \uAE30\uB85D</p></div>'+Fg()+'</div><div class="cbody">'+mn("tr-"+e.id,kg(e))+'</div><div class="cfoot">'+Ct("talk-replay",e.id,'\uC9C4\uC220 \uB2E4\uC2DC \uB4E3\uAE30<span class="sr"> \xB7 '+dt(e.name)+"</span>")+hu(i,"card")+Ct("card-close","","\uB2EB\uAE30",{cls:"primary"})+"</div></div>"}return n.kind==="layout"?cu("layout","\uD604\uC7A5 \uBC30\uCE58",["<p>"+dt(I0)+"</p>"],Ct("notes-page","plan","\uBC30\uCE58\uB3C4 \uBCF4\uAE30")+Ct("card-close","","\uB2EB\uAE30",{cls:"primary"}),' data-testid="layout"'):n.kind==="accuse"?cu("accinfo","\uC9C0\uBAA9 \uC870\uAC74",Ji(KM()).map(e=>"<p>"+dt(e)+"</p>"),Ct("card-close","","\uB2EB\uAE30",{cls:"primary"})):n.kind==="stuck"?cu("stuck",'<span id="stuckTitle">\uC9C0\uAE08 \uAE30\uB85D\uC73C\uB85C\uB294 \uC785\uC99D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4</span>',JM(),Ct("restart-ask","stuck","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"primary"})+Ct("hint-open","stuck","\uD78C\uD2B8 \uBCF4\uAE30"),' data-testid="stuck-card"'):cu("zero","\uC870\uC0AC \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4",["<p>"+dt(ZM())+"</p>"],Ct("card-close","","\uB2EB\uAE30",{cls:"primary"}),' data-testid="zero-card"')}function Gg(){let n=P.g,t=P.ui,e=t.verdict,i=9-n.budget;if(e.ok){let o=Sn,a=g0,l='<div class="final winHead" data-testid="verdict" data-result="win">'+Rs(t.person,"winFace")+'<div class="whText"><div class="whTop"><p class="tag" aria-hidden="true">VERDICT</p><h2 id="stageTitle" tabindex="-1">'+dt(a.title)+'</h2></div><p class="whLead">'+dt(a.lead)+"</p></div></div>",c=t.story==null?o.length:t.story;if(c<o.length){let[h,p]=o[c],g=c===o.length-1,y=o.map((m,f)=>'<i class="'+(f<=c?"on":"")+'"></i>').join("");return l+'<section class="story" aria-labelledby="storyTitle"><div class="stHead"><h3 id="storyTitle" tabindex="-1">\uC815\uB2F5 \uC7AC\uD604 \xB7 '+(c+1)+"/"+o.length+'</h3><span class="stPips" aria-hidden="true">'+y+"</span>"+Ct("story-skip","","\uC7AC\uD604 \uAC74\uB108\uB6F0\uAE30",{cls:"quiet"})+'</div><p class="storyT"><b class="mono">'+h+'</b></p><p class="storyX">'+dt(p)+'</p></section><div class="actRow stRow">'+Ct("story-prev","",'<span aria-hidden="true">\u25C0 </span>\uC774\uC804',{attr:'aria-disabled="'+(c===0)+'"'})+Ct("story-next","",(g?"\uB9C8\uBB34\uB9AC":"\uB2E4\uC74C")+'<span aria-hidden="true"> \u25B6</span>',{cls:"primary"})+Ct("story-auto","",P.ui.auto?"\uC790\uB3D9 \uC7AC\uC0DD \uBA48\uCDA4":"\uC790\uB3D9 \uC7AC\uC0DD",{attr:'aria-pressed="'+!!P.ui.auto+'"'})+"</div>"}let u=t.winPage||"time",d='<h3 id="storyEnd" class="sr" tabindex="-1">\uC2DC\uAC04\uD45C</h3><p class="muted caption">\uC870\uC0AC \uAE30\uD68C '+i+"\uD68C \uC0AC\uC6A9 \xB7 "+_0[3-n.tries+1]+" \uBC88\uC9F8 \uACB0\uB860\uC5D0\uC11C \uD574\uACB0 \xB7 "+(n.hints.length?"\uD78C\uD2B8 "+n.hints.length+"\uAC1C \uC5F4\uB78C":"\uD78C\uD2B8 \uC5C6\uC774 \uD574\uACB0")+"</p>";return'<div class="winSum">'+l+uu("win-page","wt","wp",[["time","\uC2DC\uAC04\uD45C"],["method","\uC218\uBC95"],["cross","\uAC80\uC99D"],["motive","\uB3D9\uAE30"]],u,"\uD574\uACB0 \uC694\uC57D")+'<div class="cbody">'+mi("wt","wp","time",u,mn("win-time",[d].concat(o.map(([h,p])=>'<div class="wRow"><b class="mono">'+h+"</b><p>"+dt(p)+"</p></div>"))))+mi("wt","wp","method",u,mn("win-method",['<h3 class="sr">\uC218\uBC95</h3><p>'+dt(a.method)+"</p>"]))+mi("wt","wp","cross",u,mn("win-cross",["<h3>\uB450 \uC99D\uAC70\uAC00 \uC11C\uB85C\uB97C \uAC80\uC99D\uD55C \uBC29\uC2DD</h3>"].concat(Ji(a.cross).map(h=>"<p>"+dt(h)+"</p>"))))+mi("wt","wp","motive",u,mn("win-motive",['<h3 class="sr">\uB3D9\uAE30</h3><p>'+dt(a.motive)+"</p>"]))+'</div><div class="actRow vRow">'+Ct("restart","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uD558\uAE30",{cls:"primary"})+Ct("story-again","","\uC7AC\uD604 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uBCF4\uAE30")+"</div></div>"}let s=n.tries===0,r=['<div class="final bad" data-testid="verdict" data-result="'+(s?"unsolved":"lose")+'" data-kind="'+e.kind+'"><p class="tag" aria-hidden="true">VERDICT</p><h2 id="stageTitle" tabindex="-1">'+(s?"\uBBF8\uACB0":"\uC785\uC99D \uC2E4\uD328")+"</h2><p>"+dt(Nd(t.person))+" \uC9C0\uBAA9\uD55C \uACB0\uB860\uC740 \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.</p></div>","<h3>\uBB34\uC5C7\uC774 \uBD80\uC871\uD588\uB098</h3>"+Tg(e.kind,{draw:Qs("chain")}),"<p>"+P0[e.kind]+"</p>",s?"<p>"+dt(x0)+"</p>":"<p>\uC9C0\uBAA9\uD55C \uC0AC\uB78C\uC774 \uB9DE\uC558\uB294\uC9C0 \uD2C0\uB838\uB294\uC9C0\uB294 \uC54C\uB824 \uB4DC\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. "+du().replace("\uC2B5\uB2C8\uB2E4.","\uACE0, \uC870\uC0AC \uAE30\uB85D\uC740 \uADF8\uB300\uB85C \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.")+" \uB9C9\uD788\uBA74 \uC704\uCABD\uC758 \uD78C\uD2B8\uB97C \uD55C \uB2E8\uACC4\uC529 \uC5F4\uC5B4 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>"];return mn("verdict",r)+'<div class="actRow vRow">'+(s?Ct("restart","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"primary"}):Ct("resume","verdict","\uAE30\uB85D \uADF8\uB300\uB85C \uC774\uC5B4\uC11C \uC870\uC0AC",{cls:"primary"})+Ct("restart-ask","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"quiet"}))+"</div>"}var Ve={pid:null,items:[],i:0},Xd=null;function Hg(n){Xd=n}var pu={typeMs:34,flapEvery:3,blinkEvery:3400,blinkMs:150},po=0,Wd=0,Vg=0,lr=[],Is=0,Ls=()=>Ve.items.length>0&&Ve.i<Ve.items.length,Wg=()=>Ls()?Ve.items[Ve.i].who:null;function mu(n,t){Ve.pid=n,Ve.items=t,Ve.i=0;let e=q("talkSr");e&&(e.textContent=t.map(i=>(i.who==="q"?"\uC810\uAC80\uAD00(\uB098): ":Me[i.who].name+": ")+i.text).join(" ")),Zg()}function Xg(){if(Ls())if(Ve.i++,Ve.i>=Ve.items.length){let n=Ve.pid;cr(),Xd&&Xd(n)}else Zg()}function qg(){return po?(Yg(),!0):!1}function cr(){Ve.items=[],Ve.i=0,Ve.pid=null,qd(),Jg(!1),ts(),document.body.classList.remove("talking");let n=q("bubble");n&&(n.hidden=!0);let t=q("talkSr");t&&(t.textContent=""),gu()}function Ca(n){let t=q("tbFace");t&&(t.dataset.f=String(n))}function qd(){clearInterval(po),po=0;let n=q("bubble");n&&n.classList.remove("typing")}function Yg(){qd(),q("tbShown").textContent=lr.join(""),q("tbRest").textContent="",Ca(0)}function Zg(){let n=q("bubble");if(!n)return;let t=Ve.items[Ve.i],e=t.who==="q";n.classList.toggle("mine",e);let i=q("tbFace");i.hidden=e,e||(i.dataset.face=t.who);let s=q("tbName");s.innerHTML=e?"<b>\uC810\uAC80\uAD00(\uB098)</b> <small>\uC9C8\uBB38</small>":Cs(t.who)+"<b>"+dt(Me[t.who].name)+"</b> <small>"+dt(Me[t.who].role)+"</small>",e?s.style.removeProperty("--who"):s.style.setProperty("--who",es[t.who]),q("bubbleMore").textContent=Ve.i<Ve.items.length-1?"\u25BC "+(Ve.i+1)+"/"+Ve.items.length:"\u25A0 \uB2EB\uAE30",n.hidden=!1,document.body.classList.add("talking"),qd(),Ca(0),lr=Array.from(t.text),Is=0;let r=e?0:nu(t.who,t.text);e?ts():Ma(t.who,t.text);let o=r?Math.max(25,Math.min(90,r*1e3/Math.max(1,lr.length))):pu.typeMs;dn()||n.hidden?(q("tbShown").textContent=t.text,q("tbRest").textContent=""):(q("tbShown").textContent="",q("tbRest").textContent=t.text,n.classList.add("typing"),po=setInterval(()=>{Is++,q("tbShown").textContent=lr.slice(0,Is).join(""),q("tbRest").textContent=lr.slice(Is).join("");let a=lr[Is-1]||" ",l=/[\s.,…?!“”"'·]/.test(a);e||Ca(l?0:Math.floor(Is/pu.flapEvery)%2?1:0),!l&&Is%2&&!r&&Ke("blip"),Is>=lr.length&&Yg()},o)),Jg(!e&&!n.hidden&&!dn()),gu()}function Jg(n){clearInterval(Wd),clearTimeout(Vg),Wd=0,n&&(Wd=setInterval(()=>{po||(Ca(2),Vg=setTimeout(()=>{po||Ca(0)},pu.blinkMs))},pu.blinkEvery))}function gu(){let n=q("talkCtl");if(!n)return;let t=Ls(),e=t?Ct("talk-next","","\uB2E4\uC74C \uBB38\uC7A5 \xB7 "+(Ve.i+1)+"/"+Ve.items.length,{cls:"primary grow"})+Ct("talk-all","","\uBAA8\uB450 \uBCF4\uAE30"):"";if(n.innerHTML!==e){let s=n.contains(document.activeElement);if(n.innerHTML=e,s){let r=n.querySelector('[data-action="talk-next"]');r&&r.focus({preventScroll:!0})}}n.hidden=!t;let i=q("talkArea");i&&(i.hidden=!t)}var jM={play:22,talk:22,replay:11,card:36,accuse:33,story:21.5,win:31,lose:37};function Zd(){let n=P.ui;return!n||!n.started?"title":n.verdict?n.verdict.ok?(n.story==null?Sn.length:n.story)<Sn.length?"story":"win":"lose":n.board?n.playing?"replay":"card":n.card?"card":Ls()?"talk":n.tab==="notes"?"notes":n.tab==="accuse"?"accuse":"play"}var Yd=null;function Jd(){Yd=null}function $g(n){n!==Yd&&(Yd=n,$t("pause",n))}function jg(n,t,e){let i=q("deck"),s=document.body,r=document.documentElement.style;if(e=e||Zd(),s.dataset.mode=e,i&&(i.dataset.mode=e),e==="title"||Hc())return i&&(i.dataset.w3d=""),s.classList.remove("w3d-off"),r.removeProperty("--deck-h"),r.removeProperty("--w3d-h"),$g(!!P.no3d),{top:0,bottom:0,left:0,right:0,w3d:-1};let o=Math.max(0,Math.round(innerHeight-n-t)),a=parseFloat(getComputedStyle(document.documentElement).fontSize)||16,l=e==="notes"?o:Math.min(o,Math.round(a*(jM[e]||22))),c=o-l;return c<120&&(c=0,l=o),r.setProperty("--deck-h",l+"px"),r.setProperty("--w3d-h",c+"px"),i&&(i.dataset.w3d=String(c)),s.classList.toggle("w3d-off",c===0),$g(c===0||!!P.no3d),{top:n,bottom:t+l,left:0,right:0,w3d:c}}var $d=new Map,Qg=new Map;function tx(n,t,e){let i=$d.get(n);return i||(i=document.createElement("span"),i.className="lbl "+t,q("labels").appendChild(i),$d.set(n,i)),i.textContent!==e&&(i.textContent=e),i}function t2(n){let t=n.className+"|"+n.textContent,e=Qg.get(t);if(!e){let i=n.hidden;n.hidden=!1,e={w:n.offsetWidth,h:n.offsetHeight},n.hidden=i,e.w&&Qg.set(t,e)}return e}var Kd=(n,t)=>n.l<t.r+3&&t.l<n.r+3&&n.t<t.b+3&&t.t<n.b+3;function ur(){let n=q("labels");if(!n)return;let t=document.body.classList,e=!P.world||P.no3d||!P.ui||!P.ui.started||!!P.ui.verdict||t.contains("playing")||t.contains("intro")||t.contains("opening-on");if(n.hidden=e,e){xu();return}let i=q("canvas");if(!i){xu();return}let s=i.getBoundingClientRect(),r=P.insets.top+4,o=innerHeight-P.insets.bottom-4,a=P.ui.selected,l=[],c=(y,m,f,_,b,v)=>{let E=s.left+_.x,T=s.top+_.y;!_.visible||T<=r+16||T>=o||E<=s.left||E>=s.right||l.push({key:y,cls:m,text:f,px:E,py:T,selected:!!b,prio:b?0:v})};for(let y of Vc("people")||[]){let m=String(y.id).replace(/^p:/,"");Me[m]&&c("p:"+m,"who",Me[m].name,y,a==="p:"+m||P.ui.tab==="accuse"&&P.ui.person===m,2)}for(let y of Vc("spots")||[]){let m=String(y.id).replace(/^e:/,"");fn[m]&&c("e:"+m,"spot",fn[m].name,y,a==="e:"+m,1)}for(let y of Vc("pins")||[]){let m=String(y.id).replace(/^(c|pin|p):/,""),f=y.label||fi[m]&&fi[m].label;f&&c("c:"+m,"claim",f,y,!1,3)}let u=y=>{let m=t2(tx(y.key,y.cls,y.text)),f=Math.min(s.right-m.w/2-6,Math.max(s.left+m.w/2+6,y.px));return y.cx=f,{l:f-m.w/2,r:f+m.w/2,t:y.py-m.h,b:y.py}},d=l.filter(y=>y.cls==="who"&&!y.selected);if(d.length>1){let y=d.map(u);if(y.some((m,f)=>y.some((_,b)=>b>f&&Kd(m,_)))){for(let f of d)l.splice(l.indexOf(f),1);let m=d.length;l.push({key:"p:group",cls:"who",text:m===4?"\uB85C\uBE44\uC758 \uB124 \uC0AC\uB78C":"\uB85C\uBE44\uC758 "+["","\uD55C","\uB450","\uC138"][m]+" \uC0AC\uB78C",px:d.reduce((f,_)=>f+_.px,0)/m,py:Math.min(...d.map(f=>f.py)),selected:!1,prio:2})}}l.sort((y,m)=>y.prio-m.prio);let h=[],p=new Set,g=new Map;for(let y of l){let m=u(y),f=0;if(!y.selected){let b=m.b-m.t+2;for(let v=0;v<2&&h.some(E=>Kd(E,m));v++)f-=b,m={l:m.l,r:m.r,t:m.t-b,b:m.b-b};if(f&&m.t<r||h.some(v=>Kd(v,m)))continue}h.push(m),p.add(y.key),g.set(y.key,{x:y.cx,y:y.py+f});let _=tx(y.key,y.cls,y.text);_.hidden=!1,_.style.transform="translate3d("+y.cx.toFixed(1)+"px,"+(y.py+f).toFixed(1)+"px,0) translate(-50%,-100%)",_.classList.toggle("on",y.selected)}for(let[y,m]of $d)p.has(y)||(m.hidden=!0);e2(g.get(a),s,o)}function e2(n,t,e){let i=q("act3d");if(!i)return;let s=P.ui,r=P.g,o=s&&s.selected,[a,l]=String(o||"").split(":"),c=a==="e"?s.tab==="scene"&&!!fn[l]&&!r.seen.has(l):a==="p"?s.tab==="people"&&!!Me[l]&&!r.asked.has(l):!1;if(!n||!c||!r.budget||s.board){i.hidden=!0;return}let u=a==="e"?"inspect":"ask",d=(a==="e"?"\uD655\uC778\uD558\uAE30":"\uC9C8\uBB38\uD558\uAE30")+" \xB7 \uC870\uC0AC 1\uD68C";(i.dataset.act3d!==u||i.dataset.id!==l)&&(i.dataset.act3d=u,i.dataset.id=l),i.textContent!==d&&(i.textContent=d),i.hidden=!1;let h=i.offsetWidth,p=i.offsetHeight,g=n.y+6;if(g+p>e){i.hidden=!0;return}let y=Math.min(t.right-h/2-4,Math.max(t.left+h/2+4,n.x));i.style.transform="translate3d("+(y-h/2).toFixed(1)+"px,"+g.toFixed(1)+"px,0)"}function xu(){let n=q("act3d");n&&(n.hidden=!0)}var jd=()=>/KAKAOTALK|NAVER\(inapp|Instagram|FBAN|FBAV|Line\/|DaumApps|everytimeApp|SamsungBrowser\/[\d.]+ .*CrossApp/i.test(navigator.userAgent||"");function Qd(){let n=Ms();return n.mode==="installed"?"":jd()?'<p class="info caption">\uBA54\uC2E0\uC800\uB098 \uD3EC\uD138 \uC571 \uC548\uC5D0\uC11C \uC5F4\uBA74 \uC571\uC73C\uB85C \uC124\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC624\uB978\uCABD \uC704 \uBA54\uB274\uC5D0\uC11C \u300C\uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30\u300D\uB97C \uACE0\uB978 \uB4A4 \uC124\uCE58\uD558\uC138\uC694. \uC124\uCE58\uD558\uC9C0 \uC54A\uC544\uB3C4 \uC5EC\uAE30\uC11C \uBC14\uB85C \uC870\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>':n.mode==="prompt"?"<p>"+Ct("install","title","\uC571\uC73C\uB85C \uC124\uCE58")+"</p>":n.kind==="ios"?'<details class="caption"><summary>\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\uD558\uAE30</summary><p class="pad0">\uC0AC\uD30C\uB9AC\uC5D0\uC11C \u300C\uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB974\uBA74 \uC571\uCC98\uB7FC \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ol>'+fa("ios").map(t=>"<li>"+dt(t)+"</li>").join("")+"</ol></details>":'<details class="caption"><summary>\uC571\uC73C\uB85C \uC124\uCE58\uD558\uB294 \uBC29\uBC95</summary><ol>'+fa(n.kind).map(t=>"<li>"+dt(t)+"</li>").join("")+"</ol></details>"}function ex(n){let t=P.g,e=no.indexOf(","),[i,s]=e<0?[no,""]:[no.slice(0,e+1),no.slice(e+1).trimStart()];return'<div class="titleInner"><p class="tag">'+dt(f0)+'</p><h1 class="display" id="titleH" tabindex="-1" aria-label="'+dt(no)+'"><b>'+dt(i)+"</b> "+dt(s||"")+'</h1><p class="lead">'+dt(zc)+'</p><div class="titleRow">'+(n?Ct("continue","","\uC774\uC5B4\uC11C \uC870\uC0AC \xB7 \uB0A8\uC740 \uC870\uC0AC "+t.budget+"\uD68C \xB7 \uACB0\uB860 "+t.tries+"\uBC88",{cls:"primary wide1"})+Ct("newgame-ask","","\uCC98\uC74C\uBD80\uD130"):Ct("start","","\uC870\uC0AC \uC2DC\uC791",{cls:"primary"}))+Ct("rules-open","title","\uC870\uC0AC \uBC29\uBC95")+'</div><div class="titleRules">'+su({draw:!0})+'</div><div id="installBox">'+Qd()+'</div><p class="bottom">\uC624\uD504\uB77C\uC778 \uB2E8\uD3B8 \xB7 \uB300\uC0AC\uB294 \uBAA8\uB450 \uBBF8\uB9AC \uC4F4 \uAE00\uC785\uB2C8\uB2E4. \uC678\uBD80 \uC5F0\uACB0\uC774\uB098 \uC2E4\uC2DC\uAC04 AI\uB294 \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div>'}var ef={typeMs:42,holdMs:2600,fadeMs:280};function n2(){let n=Ji(zc);return[{pic:"s1",text:n[0]},{pic:"s2",text:n[1]},{pic:"s3",text:n[2]},{pic:"lineup",head:"\uB85C\uBE44\uC758 \uB124 \uC0AC\uB78C",text:n.slice(3).join(" ")}]}function nx(){return'<section id="opening" class="opening" role="dialog" aria-modal="true" aria-label="\uC624\uD504\uB2DD" hidden><div class="opInner"><div class="opPic" id="opPic" aria-hidden="true"></div><div class="opBox" id="opBox"><p class="opHead" id="opHead" hidden></p><p class="opText" id="opText"><span id="opShown"></span><span id="opRest" class="tbRest" aria-hidden="true"></span></p><span class="opMore" id="opMore" aria-hidden="true"></span></div></div><p class="sr" id="opLive" aria-live="polite"></p><button type="button" class="opSkip" data-action="opening-skip">\uAC74\uB108\uB6F0\uAE30</button></section>'}var i2=n=>n.pic==="lineup"?'<div class="opLine">'+Je.map(t=>'<figure class="opWho">'+Rs(t.id,"opFace")+"<figcaption>"+Cs(t.id)+"<b>"+dt(t.name)+"</b><small>"+dt(t.role)+"</small></figcaption></figure>").join("")+"</div>":'<img class="opImg" src="px/scene-'+n.pic+'.png" width="160" height="96" alt="" decoding="async">',te=null,_u=()=>!!te;function nf(n){te&&rf(!0);let t=q("opening");if(!t){n&&n();return}te={beats:n2(),i:-1,timer:0,typer:0,chars:[],shown:0,done:n};for(let i of te.beats)if(i.pic!=="lineup"){let s=new Image;s.src="px/scene-"+i.pic+".png"}t.hidden=!1,t.classList.remove("out"),document.body.classList.add("opening-on"),sr();let e=t.querySelector(".opSkip");e&&e.focus({preventScroll:!0}),sf(0)}function sf(n){if(!te)return;if(clearTimeout(te.timer),clearInterval(te.typer),te.typer=0,n>=te.beats.length){rf();return}te.i=n;let t=te.beats[n],e=q("opPic");e.classList.remove("show"),e.innerHTML=i2(t),e.dataset.pic=t.pic,requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("show")));let i=q("opHead");i.hidden=!t.head,i.textContent=t.head||"",q("opLive").textContent=(t.head?t.head+". ":"")+t.text,q("opMore").textContent="",Ke("page"),te.chars=Array.from(t.text),te.shown=0;let s=nu("narrator",t.text);Ma("narrator",t.text);let r=s?Math.max(30,Math.min(110,s*1e3/Math.max(1,te.chars.length))):ef.typeMs;if(dn()){q("opShown").textContent=t.text,q("opRest").textContent="",tf();return}q("opShown").textContent="",q("opRest").textContent=t.text,te.typer=setInterval(()=>{if(!te)return;te.shown++,q("opShown").textContent=te.chars.slice(0,te.shown).join(""),q("opRest").textContent=te.chars.slice(te.shown).join("");let o=te.chars[te.shown-1]||" ";!/[\s.,…]/.test(o)&&te.shown%2&&!s&&Ke("blip"),te.shown>=te.chars.length&&tf()},r)}function tf(){te&&(clearInterval(te.typer),te.typer=0,q("opShown").textContent=te.chars.join(""),q("opRest").textContent="",q("opMore").textContent=(te.i<te.beats.length-1?"\u25BC ":"\u25A0 ")+(te.i+1)+"/"+te.beats.length,te.timer=setTimeout(()=>sf(te.i+1),ef.holdMs+(dn()?1200:0)))}function ix(){te&&(te.typer?tf():sf(te.i+1))}function yu(){rf()}function rf(n){if(!te)return;let t=te;te=null,clearTimeout(t.timer),clearInterval(t.typer);let e=q("opening");ts();let i=()=>{e.hidden=!0,e.classList.remove("out"),q("opPic").innerHTML="",document.body.classList.remove("opening-on"),sr(),!n&&t.done&&t.done()};dn()||n?i():(e.classList.add("out"),setTimeout(i,ef.fadeMs))}function sx(){return'<dialog id="hintDlg" aria-labelledby="hintTitle"><div class="dlg"><div class="dlgBody"><div class="hintTop"><h2 id="hintTitle" tabindex="-1">\uD78C\uD2B8</h2><p class="caption muted" id="hintCount"></p></div><p class="caption muted">\uD78C\uD2B8\uB294 \uBC84\uD2BC\uC744 \uB204\uB97C \uB54C\uB9CC \uD55C \uB2E8\uACC4\uC529 \uC5F4\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uAE30\uD68C\uB294 \uC4F0\uC9C0 \uC54A\uACE0, \uB204\uAC00 \uD55C \uC77C\uC778\uC9C0\uB294 \uC54C\uB824 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uB3C4 \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p><ol id="hintList" data-testid="hints"></ol><div class="pgNav hintNav" id="hintNav" hidden>'+Ct("pg","hints",'<span aria-hidden="true">\u25C0 </span>\uC774\uC804 \uD78C\uD2B8',{arg:"prev",cls:"pgBtn"})+'<span class="pgNum" id="hintNum" aria-hidden="true"></span>'+Ct("pg","hints",'\uB2E4\uC74C \uD78C\uD2B8<span aria-hidden="true"> \u25B6</span>',{arg:"next",cls:"pgBtn"})+'</div><p id="hintState" class="caption"></p><p class="sr" id="hintLive" role="status" aria-atomic="true"></p></div><div class="dlgFoot"><button type="button" class="primary" data-action="hint-next" id="hintNext">\uD78C\uD2B8 \uD55C \uB2E8\uACC4 \uC5F4\uAE30</button><button type="button" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog><dialog id="askDlg" aria-labelledby="askTitle" aria-describedby="askBody"><div class="dlg"><div class="dlgBody"><h2 id="askTitle" tabindex="-1"></h2><div id="askBody" class="reveal"></div></div><div class="dlgFoot"><button type="button" class="primary" id="askYes"></button><button type="button" data-action="dialog-close">\uB3CC\uC544\uAC00\uAE30</button></div></div></dialog><dialog id="menuDlg" aria-labelledby="menuTitle"><div class="dlg"><div class="dlgBody"><h2 id="menuTitle" tabindex="-1">\uBA54\uB274</h2><div id="menuBody" class="menuList"></div></div><div class="dlgFoot"><button type="button" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog><dialog id="infoDlg" aria-labelledby="infoTitle"><div class="dlg"><div class="dlgBody" tabindex="0"><h2 id="infoTitle" tabindex="-1"></h2><div id="infoBody" class="reveal"></div></div><div class="dlgFoot"><button type="button" class="primary" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog>'}var of=null,af="",rx=0,ox=()=>rx;function Ra(n){let t=document.activeElement;t&&t!==document.body&&!t.closest("dialog")&&(of=t,af=t.dataset&&t.dataset.action?le(t.dataset.action,t.dataset.id,t.dataset.arg):t.id?"#"+t.id:""),n.open||n.showModal();let e=n.querySelector("h2");e&&e.focus()}function gi(){for(let n of document.querySelectorAll("dialog[open]"))n.close()}function ax(n){if(document.querySelector("dialog[open]"))return;let t=document.activeElement;if(t&&t!==document.body&&document.contains(t)&&!t.closest("dialog"))return;let e=s=>s&&document.contains(s)&&s.getClientRects().length>0,i=e(of)?of:null;if(!i&&af){let s=document.querySelector(af);e(s)&&(i=s)}i=i||n(),i&&i.focus()}function bu(n,t,e,i){q("askTitle").textContent=n,q("askBody").innerHTML=t;let s=q("askYes");s.textContent=e,s.dataset.action=i,rx=performance.now(),gi(),Ra(q("askDlg"))}function Su(){let n=P.g,t=n.hints.length,e=P.ui.pg||(P.ui.pg={}),i=e.hints;(typeof i!="number"||i<0||i>=t)&&(i=t-1),e.hints=i,q("hintList").innerHTML=n.hints.map((a,l)=>'<li data-testid="hint" value="'+(l+1)+'"'+(l===i?"":" hidden")+">"+dt(fe.hintText(a))+"</li>").join(""),q("hintList").hidden=!t,q("hintCount").textContent=t?t+"\uB2E8\uACC4 \uC5F4\uB9BC":"",q("hintNav").hidden=t<=1,q("hintNum").textContent=t?i+1+"/"+t:"";let[s,r]=q("hintNav").querySelectorAll('[data-action="pg"]');s.setAttribute("aria-disabled",String(i<=0)),r.setAttribute("aria-disabled",String(i>=t-1));let o=fe.nextHint(n);q("hintNext").hidden=!o,q("hintState").textContent=o?t?"":"\uC544\uC9C1 \uC5F0 \uD78C\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6D0\uD560 \uB54C \uD55C \uB2E8\uACC4\uC529 \uC5F4\uC5B4 \uBCF4\uC138\uC694.":"\uC5F4 \uC218 \uC788\uB294 \uD78C\uD2B8\uB97C \uBAA8\uB450 \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4."}function lx(n,t){if(n!=="hints")return!1;let e=P.g.hints.length,i=P.ui.pg||(P.ui.pg={}),s=typeof i.hints=="number"?i.hints:e-1,r=t==="prev"?s-1:s+1;if(r<0||r>=e)return!1;i.hints=r,Su();let o=q("pageLive");o&&(o.textContent="\uD78C\uD2B8 "+(r+1)+"/"+e);let a=q("hintNav").querySelector('[data-arg="'+t+'"]');if(a&&a.getAttribute("aria-disabled")!=="true")a.focus();else{let l=q("hintNav").querySelector('[data-arg="'+(t==="prev"?"next":"prev")+'"]');l&&l.focus()}return!0}function lf(n,t){q("infoTitle").textContent=n,q("infoBody").innerHTML=t;let e=t.includes('class="pager"');q("infoDlg").classList.toggle("paged",e),e&&P.ui&&((P.ui.pg||(P.ui.pg={})).rules=0),gi(),Ra(q("infoDlg")),e&&ns(q("infoDlg"))}var cx=()=>mn("rules",[su({hidden:!0})].concat(p0.map(n=>'<ul class="list"><li>'+dt(n)+"</li></ul>")));function ux(){if(jd())return"<p>\uBA54\uC2E0\uC800\uB098 \uD3EC\uD138 \uC571 \uC548\uC5D0\uC11C \uC5F4\uBA74 \uC571\uC73C\uB85C \uC124\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC624\uB978\uCABD \uC704 \uBA54\uB274\uC5D0\uC11C \u300C\uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30\u300D\uB97C \uACE0\uB978 \uB4A4 \uC124\uCE58\uD558\uC138\uC694.</p>";let n=Ms();return'<ol class="list">'+fa(n.kind).map(t=>"<li>"+dt(t)+"</li>").join("")+"</ol>"}var vu=n=>n?"\uCF1C\uC9D0":"\uAEBC\uC9D0";function cf(){let n=Ms(),t=In.quality;return'<div class="menuGrid">'+Ct("rules-open","menu","\uC870\uC0AC \uBC29\uBC95")+(P.ui&&P.ui.started?Ct("opening-replay","menu","\uC624\uD504\uB2DD \uB2E4\uC2DC \uBCF4\uAE30"):"")+Ct("set-sound","","\uC18C\uB9AC \xB7 "+vu(jn()),{attr:'aria-pressed="'+jn()+'"'})+Ct("set-music","","\uC74C\uC545 \xB7 "+vu(ya()),{attr:'aria-pressed="'+ya()+'"'})+Ct("set-voice","","\uBAA9\uC18C\uB9AC \xB7 "+vu(Qi()),{attr:'aria-pressed="'+Qi()+'"'})+Ct("set-motion","","\uC6C0\uC9C1\uC784 \uC904\uC774\uAE30 \xB7 "+vu(In.motion),{attr:'aria-pressed="'+In.motion+'"'})+'<fieldset class="qSeg full"><legend>\uD654\uC9C8</legend><div class="row">'+[["auto","\uC790\uB3D9"],["low","\uB0AE\uC74C"],["high","\uB192\uC74C"]].map(([e,i])=>Ct("set-quality",e,i,{attr:'aria-pressed="'+(t===e)+'"'+(P.no3d?' aria-disabled="true"':"")})).join("")+"</div></fieldset>"+(P.unavailable?'<p class="info caption full">\uC774 \uAE30\uAE30\uC5D0\uC11C\uB294 3D \uD654\uBA74\uC744 \uC4F8 \uC218 \uC5C6\uC5B4 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uB0B4\uC6A9\uC740 \uAC19\uC2B5\uB2C8\uB2E4.</p>':Ct("set-3d","",P.no3d?"3D \uCF1C\uAE30":"3D \uB044\uAE30 \xB7 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uAE30",{cls:"full",attr:'aria-pressed="'+P.no3d+'"'}))+(n.mode==="installed"?"":Ct("install","menu","\uC571\uC73C\uB85C \uC124\uCE58"))+(P.ui&&P.ui.started?Ct("restart-ask","menu","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"quiet"}):"")+"</div>"}var Da=[["all","\uC804\uCCB4"],["hall","\uC804\uC2DC\uC2E4"],["back","\uBD80\uC2A4"],["lobby","\uB85C\uBE44"]],hx="0217-v3-opening",s2={auto:"\uC790\uB3D9",low:"\uB0AE\uC74C",high:"\uB192\uC74C"};function r2(){return'<a class="skip" id="skip" href="#deck" hidden>\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30</a><div id="labels" class="labels" aria-hidden="true" hidden></div><button type="button" id="act3d" class="act3d primary" tabindex="-1" aria-hidden="true" hidden></button><button type="button" id="introSkip" class="introSkip" data-action="intro-skip" hidden>\uC2DC\uC791 \uC5F0\uCD9C \uAC74\uB108\uB6F0\uAE30</button><div id="cctv" class="cctvOverlay" aria-hidden="true" hidden><span class="rec">REC</span> <span id="cctvTime" class="mono"></span></div><main id="game" class="game" hidden aria-label="\uC0AC\uAC74 \uC870\uC0AC"><header class="hud" id="hud"><div class="hudRow"><p class="budget" data-testid="budget"><span class="tag"><span class="hudOpt">\uB0A8\uC740 </span>\uC870\uC0AC</span> <b id="left">9</b><span>\uD68C</span> <span class="pips" id="pips" aria-hidden="true"></span> <span class="tries"><span class="tag"><span class="hudOpt">\uB0A8\uC740 </span>\uACB0\uB860</span> <b id="tries">3</b><span>\uBC88</span> <span class="pips tryPips" id="tryPips" aria-hidden="true"></span></span></p><div class="hudBtns"><button type="button" class="quiet" data-action="hint-open" id="hintBtn">\uD78C\uD2B8</button><button type="button" class="quiet" data-action="menu-open" id="menuBtn">\uBA54\uB274</button></div></div><button type="button" id="status" class="statusBar" hidden></button></header><div class="viewctl" id="viewctl" role="group" aria-label="3D \uBCF4\uAE30 \uC870\uC791">'+Ct("rotate","1",'<span aria-hidden="true">\u21BB</span>',{attr:'aria-label="90\uB3C4 \uB3CC\uB824 \uBCF4\uAE30"'})+'<button type="button" data-action="view-menu" id="viewMenu" aria-expanded="false" aria-controls="viewPop">\uC2DC\uC810 \xB7 <span id="viewName">\uC804\uCCB4</span><span aria-hidden="true"> \u25BE</span></button><div class="viewPop" id="viewPop" role="group" aria-label="\uC2DC\uC810" hidden>'+Da.map(([n,t])=>Ct("view",n,t,{attr:'aria-pressed="false"'})).join("")+'</div></div><p class="notice" id="notice" aria-hidden="true"></p><div class="mini" id="mini" aria-hidden="true" hidden></div><section class="deck" id="deck" aria-label="\uC870\uC0AC \uD654\uBA74" tabindex="-1"><div class="coach" id="coach" hidden></div><div class="talkArea" id="talkArea" hidden><div id="bubble" class="bubble talkbox" aria-hidden="true" hidden><span id="tbFace" class="face tbFace" data-face="" data-f="0"></span><div class="tbBody"><p class="tbName" id="tbName"></p><p id="bubbleText" class="tbText"><span id="tbShown"></span><span id="tbRest" class="tbRest"></span></p><span id="bubbleMore" class="bubbleMore"></span></div></div><div class="row talkCtl" id="talkCtl" hidden></div><p class="sr" id="talkSr"></p></div><div id="stage" role="tabpanel" tabindex="-1" data-testid="stage"></div></section><div class="tabs" id="tabs" role="tablist" aria-label="\uC870\uC0AC \uBA54\uB274">'+so.map((n,t)=>'<button type="button" role="tab" id="tab-'+n+'" data-tab="'+n+'" aria-controls="stage" aria-selected="'+(t===0)+'"'+(t?' tabindex="-1"':"")+">"+Dd[n]+'<small id="cnt-'+n+'"></small></button>').join("")+'</div></main><section id="title" class="title" aria-labelledby="titleH"></section>'+nx()+'<p class="sr" id="live" role="status" aria-live="polite" aria-atomic="true"></p><p class="sr" id="pageLive" role="status" aria-live="polite" aria-atomic="true"></p><div id="toast" class="toast" role="status" hidden></div>'+sx()}function dx(){P.g=fe.fresh(P.g?P.g.hints:[]),P.ui=vd(!0)}var fx,px;function Ue(n,t){P.ui.notice=n,q("notice").textContent=n,clearTimeout(px),px=setTimeout(()=>{P.ui.notice===n&&(P.ui.notice=""),q("notice").textContent===n&&(q("notice").textContent="")},dn()?6e3:4e3);let e=q("live");e.textContent="",clearTimeout(fx),fx=setTimeout(()=>{e.textContent=t||n},80)}var mx=!1,hf=!1,df=0;function dr(){let n=P.g,t=P.ui;if(!t||!t.started||hf)return;E0(n,{tab:t.tab,person:t.person,proof:t.proof,verdict:t.verdict?{ok:t.verdict.ok,kind:t.verdict.kind}:null,view:t.view})?df=Date.now():mx||(mx=!0,Ue("\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC9C4\uD589\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2EB\uC73C\uBA74 \uAE30\uB85D\uC774 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4."))}var ff=0;function Eu(n,t){let e=q("toast");clearTimeout(ff),e.innerHTML=n,e.hidden=!1,t&&(ff=setTimeout(()=>{e.hidden=!0},t))}var pf=()=>Ct("toast-close","","\uB2EB\uAE30",{cls:"quiet"});function o2(n,t){let e=Me[t.person]?t.person:"",i=Array.isArray(t.proof)?[...new Set(t.proof.filter(s=>typeof s=="string"&&n.seen.has(s)))].slice(0,2):[];if(t.verdict&&e&&i.length===2){let s=fe.judge(e,i);if(s.ok&&fe.ready(n,e,i).ok)return{v:s,person:e,proof:i};if(!s.ok&&fe.tried(n,e,i))return{v:s,person:e,proof:i}}if(n.tries===0&&n.failed.length){let[s,r]=n.failed[n.failed.length-1].split("|"),o=r.split("+");return{v:fe.judge(s,o),person:s,proof:o}}return null}var Cu="";function Gn(){let n=P.ui,t=!!(n&&n.started),e=Zd();document.body.dataset.mode=e;let i=t?q("hud").offsetHeight:0,s=t&&!q("tabs").hidden?q("tabs").offsetHeight:0,r=document.documentElement.style;r.setProperty("--hud-h",i+"px"),r.setProperty("--tabs-h",s+"px");let o=Hc();document.body.classList.toggle("wide",o);let a=jg(i,s,e),l=!t||o||P.no3d?{top:0,bottom:0,left:0,right:0}:{top:a.top,bottom:a.bottom,left:0,right:0};P.insets=l,document.body.classList.toggle("tight",t&&!o&&a.w3d>=0&&a.w3d<140);let c=JSON.stringify(l);c!==Cu&&(Cu=c,$t("setInsets",l))}function mf(){for(let e of document.querySelectorAll('[data-action="view"]'))e.setAttribute("aria-pressed",String(e.dataset.id===P.ui.view));let n=Da.find(([e])=>e===P.ui.view)||Da[0],t=q("viewName");t&&(t.textContent=n[1])}function Ru(n){let t=q("viewPop");!t||t.hidden||(t.hidden=!0,q("viewMenu").setAttribute("aria-expanded","false"),n&&q("viewMenu").focus())}function Au(n,t){let e=q(n+"-"+t);if(!e)return;let i=e.closest("[role=tablist]");for(let s of i.querySelectorAll("[role=tab]")){let r=s===e;s.setAttribute("aria-selected",String(r)),s.tabIndex=r?0:-1;let o=q(s.getAttribute("aria-controls"));o&&o.classList.contains("tabp")&&(o.hidden=!r)}}function a2(){return"<p>\uC99D\uAC70\uB97C \uCC98\uC74C \uD655\uC778\uD560 \uB54C\uB9CC \uC870\uC0AC \uAE30\uD68C\uB97C \uD55C \uBC88 \uC501\uB2C8\uB2E4. \uB2E4\uC2DC \uBCF4\uAE30\uC640 \uACE0\uC815\uC740 \uBB34\uB8CC\uC785\uB2C8\uB2E4."+(Ki()?" 3D \uD654\uBA74\uC744 \uB204\uB974\uBA74 \uACE0\uB974\uAE30\uB9CC \uD558\uACE0, \uC870\uC0AC \uAE30\uD68C\uB294 \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"")+'</p><div class="row">'+Ct("coach-close","","\uC54C\uACA0\uC5B4\uC694",{cls:"primary"})+"</div>"}var wx=()=>{let n=document.activeElement;return!n||n===document.body?"":n.dataset&&n.dataset.action?le(n.dataset.action,n.dataset.id,n.dataset.arg):n.id?"#"+n.id:""};function pe(n){let t=P.g,e=P.ui;q("left").textContent=t.budget,q("tries").textContent=t.tries,q("pips").textContent="\u25CF".repeat(t.budget)+"\u25CB".repeat(9-t.budget),q("tryPips").textContent="\u25C6".repeat(t.tries)+"\u25C7".repeat(3-t.tries),q("cnt-scene").textContent=t.seen.size+"/6",q("cnt-people").textContent=t.asked.size+"/4",q("cnt-notes").textContent="\uACE0\uC815 "+t.pins.size,q("cnt-accuse").textContent="\uC99D\uAC70 "+e.proof.length+"/2",q("tab-scene").setAttribute("aria-label","\uD604\uC7A5, \uC99D\uAC70 6\uAC1C \uC911 "+t.seen.size+"\uAC1C \uD655\uC778"),q("tab-people").setAttribute("aria-label","\uBA74\uB2F4, 4\uBA85 \uC911 "+t.asked.size+"\uBA85 \uC9C4\uC220 \uD655\uBCF4"),q("tab-notes").setAttribute("aria-label","\uAE30\uB85D, \uACE0\uC815 "+t.pins.size+"\uAC1C"),q("tab-accuse").setAttribute("aria-label","\uC9C0\uBAA9, \uC99D\uAC70 2\uAC1C \uC911 "+e.proof.length+"\uAC1C \uC120\uD0DD");for(let c of q("tabs").querySelectorAll("[role=tab]")){let u=c.dataset.tab===e.tab;c.setAttribute("aria-selected",String(u)),c.tabIndex=u?0:-1}let i=Bg(),s=q("status");s.hidden=!i,i?(s.dataset.testid=i.testid,s.dataset.action=i.action,s.textContent!==i.text&&(s.textContent=i.text)):(delete s.dataset.testid,delete s.dataset.action,s.textContent="");let r=q("stage"),o=!!e.verdict&&(e.verdict.ok||t.tries===0);q("tabs").hidden=!!e.verdict,q("hintBtn").hidden=o,q("game").classList.toggle("verdict",!!e.verdict),r.setAttribute("role",e.verdict?"region":"tabpanel"),r.setAttribute("aria-labelledby",e.verdict?"stageTitle":"tab-"+e.tab),r.dataset.view=e.verdict?"verdict":e.board?"board":e.card?"card":e.tab,q("notice").textContent=e.notice,r.innerHTML=e.verdict?Gg():e.board?Vd.board():e.card?zg():Vd[e.tab](),gu(),mf(),document.title=(e.verdict?"\uD310\uC815":Dd[e.tab])+" \xB7 02:17, \uB9C8\uC9C0\uB9C9 \uC810\uAC80",Gn();let a=q("coach"),l=!e.verdict&&e.tab==="scene"&&!P.sceneTold&&document.body.dataset.mode==="play";if(l&&a.hidden&&(a.innerHTML=a2()),a.hidden=!l,document.body.classList.toggle("coaching",l),ns(q("deck")),P.no3d){let c=q("mini");c.hidden=!1,c.innerHTML=zd(e.selected,{draw:!1})}else q("mini").hidden=!0;if(e.board==="audio"&&!e.verdict&&requestAnimationFrame(fo),$t("sync",Pd(t,e)),sr(),dr(),ur(),n){let c=null;for(let u of[].concat(n)){if(!u)continue;let d=document.querySelector(u);if(d&&(au(d),d.getClientRects().length)){c=d;break}}c=c||q("stageTitle"),c&&(au(c),c.focus({preventScroll:!0}))}}var Tu=0,gf=0;function Ax(n){document.body.classList.toggle("cctv",n),q("cctv").hidden=!n,q("cctvTime").textContent=n&&P.ui.lit&&P.ui.lit.size?ru():""}var gx={lock:{locked:"beep"},fog:{"021700":"fog"},drawer:{slide:"slide"},cue:{run:"beep"},audio:{"021703":"click"},poster:{stamp:"stamp"}};function xx(n){let t=q("factStrip");t&&(t.textContent=n||"")}function Tx(n){let t=P.ui,e=++Tu;if(clearTimeout(gf),!Ki()){t.playing=null,t.lit=new Set(Ss[n].map(s=>s.cue));return}t.lit=new Set,t.playing=n,Cx(!0),Gn(),xx(""),n==="fog"&&Ax(!0);let i=()=>{e===Tu&&Ex()};gf=setTimeout(i,25e3),$t("play","ev:"+n,{onCue:s=>{if(e!==Tu||P.ui.board!==n)return;let r=gx[n]&&gx[n][s];r&&Ke(r),Ud(n,s);let o=Ss[n].find(a=>a.cue===s);o&&xx(o.t)}}).then(i,i)}function Ex(){let n=P.ui,t=n.playing;if(clearTimeout(gf),Tu++,n.playing=null,Ax(!1),Cx(!1),!!t)if(n.board===t){n.cardTab="art",Au("ct","art"),Gn();for(let i of Ss[t])Ud(t,i.cue);let e=q("factCount");e&&(e.textContent=""),ns(q("deck")),t==="audio"&&fo(),Rx()}else Gn()}function yf(){P.ui.playing&&$t("stop"),Ex()}var Mu=0;function Cx(n){Mu=Math.max(0,Mu+(n?1:-1)),!n&&!P.ui.playing&&(Mu=0),document.body.classList.toggle("playing",Mu>0),ur()}function Rx(n){let t=q("boardCtl");if(!t)return;let e=t.contains(document.activeElement);if(t.innerHTML=Hd(),e){let i=n&&t.querySelector(n)||t.querySelector('[data-action="replay"]')||t.querySelector('[data-action="board-close"]');i&&i.focus({preventScroll:!0})}}function _x(n){let t=P.ui;Li(),t.tab="scene",t.selected="e:"+n,t.board=n,t.card=null,t.cardTab="art",P.sceneTold=!0;let e=t.pg||(t.pg={});e["ev-art"]=e["ev-facts"]=e["ev-raw"]=0,t.playing=Ki()?n:null,Gn(),$t("focus","e:"+n),Tx(n),pe([le("skip-play",n),"#stageTitle"])}function Ii(){P.ui.board&&(yf(),P.ui.board=null,P.ui.lit=null)}function Li(){cr(),P.talkPid&&($t("play","talk:end"),P.talkPid=null)}var La="",Ix=n=>n?[La?Gd(n,La):"",Gd(n),le("transcript",n),le("select","p:"+n)]:["#stageTitle"];function uf(n){P.talkPid!==n&&(Li(),P.talkPid=n),$t("play","talk:"+n)}var yx=n=>[{who:"q",text:ma}].concat(Ji(Me[n].say).map(t=>({who:n,text:t}))),Na=0;function Lx(n){clearTimeout(Na),P.ui.auto&&(Na=setTimeout(()=>{let t=P.ui;!t.auto||t.story!==n||!t.verdict||!t.verdict.ok||(Ia(n+1),pe(n+1<Sn.length?le("story-auto"):"#stageTitle"))},Ki()?1500:4e3))}var hr=()=>!!(P.ui.verdict&&P.ui.verdict.ok);function Ia(n){if(!hr())return;let t=P.ui;t.story=n,clearTimeout(Na),n===4&&Ke("fog"),n===5&&Ke("click");let e=$t("story",Math.min(n,Sn.length));n<Sn.length?(Ue(Sn[n][0]+" \uC7AC\uD604.",Sn[n][0]+". "+Sn[n][1]),Ke("story"),_g("narrator",Ji(Sn[n][1])),e.then(()=>Lx(n))):(ts(),t.auto=!1,(t.pg||(t.pg={}))["win-time"]=0,Ue("\uC7AC\uD604\uC744 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4."))}var Px=()=>{if(In.quality!=="auto")return In.quality;let n=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4,e=!!(navigator.connection&&navigator.connection.saveData);return n<=4||t<=2||e?"low":"high"};function Iu(n){n&&(Lu(),yf(),cr(),Ua(),xu()),P.no3d=n,document.body.classList.toggle("no3d",n),$t("pause",n),Jd(),Cu="",Gn(),ur(),n||$t("view",P.ui.view||"all",{instant:!0}),P.ui.started?pe():Nx()}var vx=!1;async function Dx(){if(!P.makeWorld)return!1;let n=null;try{n=await P.makeWorld({onPick:h2,onFrame:d2,reducedMotion:dn()})}catch{n=null}if(!n)return P.unavailable=!0,Iu(!0),!1;P.world=n;let t=q("canvas");return t&&!vx&&(vx=!0,t.addEventListener("webglcontextlost",()=>{P.no3d||(Iu(!0),P.ui.started&&Ue("3D \uD654\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uC870\uC0AC\uB294 \uADF8\uB300\uB85C \uC774\uC5B4\uC9D1\uB2C8\uB2E4. \uBA54\uB274\uC758 \u300C3D \uCF1C\uAE30\u300D\uB85C \uB2E4\uC2DC \uCF24 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))})),$t("setQuality",Px()),Cu="",Jd(),Gn(),$t("sync",Pd(P.g,P.ui)),P.ui.started?$t("view",P.ui.view||"all",{instant:!0}):Nx(),!0}var xf=0;function Nx(){if(Ua(),!Ki()||dn()||P.ui.started)return;let n=0;xf=setInterval(()=>{document.hidden||($t("rotate",1,{quiet:!0}),++n>=2&&Ua())},9e3)}function Ua(){clearInterval(xf),xf=0}function Ps(n){let t=q("menuBody");t.innerHTML=cf();let e=n&&t.querySelector(n)||q("menuTitle");e&&e.focus()}var _f=!1;function l2(){q("title").innerHTML=ex(_f)}function Ux(){let n=q("installBox");n&&(n.innerHTML=Qd()),q("menuDlg").open&&Ps()}function bx(){let n=P.ui;q("title").hidden=!0,q("game").hidden=!1,q("skip").hidden=!1,Ua(),Gn(),$t("view",n.view||"all",{resetYaw:!0}),vf()}var Pa=0;function Sx(){Ki()&&(Pa=1,q("introSkip").hidden=!1,document.body.classList.add("intro"),$t("play","intro").then(()=>{let n=Pa===2;Pa=0,Ox(),document.body.classList.remove("intro"),ur();let t=P.ui;!n||!t.started||t.verdict||t.playing||t.board||(t.selected?$t("focus",t.selected):t.view!=="all"&&$t("view",t.view))}))}function Lu(){if(Pa!==1)return;Pa=2,document.body.classList.remove("intro");let n=null;try{n=P.world&&P.world.debug?P.world.debug().playing:null}catch{n=null}(n==null||n==="intro")&&$t("stop"),Ox()}function Ox(){let n=q("introSkip");if(!n||n.hidden)return;let t=document.activeElement===n;n.hidden=!0,t&&q("stageTitle")&&q("stageTitle").focus({preventScroll:!0})}var Pu=!1;function vf(){if(!(Pu||!P.ui.started))try{history.pushState({g0217:1},""),Pu=!0}catch{}}function Fx(){if(_u())return yu(),!0;let n=document.querySelector("dialog[open]");if(n)return n.close(),!0;let t=P.ui;return q("viewPop").hidden?t.card&&!t.verdict?(xi["card-close"](),!0):t.board&&!t.verdict?(xi["board-close"](t.board),!0):Ls()?(xi["talk-all"](),!0):q("coach").hidden?!1:(xi["coach-close"](),!0):(Ru(!0),!0)}function c2(){Pu=!1,!(!P.ui||!P.ui.started)&&(Fx()?vf():Eu("<span>\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uC571\uC744 \uB2EB\uC2B5\uB2C8\uB2E4.</span>",2500))}var xi={start(){P.ui.started=!0,bx(),Ue("\uC870\uC0AC\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+P.g.budget+"\uD68C, \uACB0\uB860 "+P.g.tries+"\uBC88."),pe("#stageTitle");let n=!1;try{n=localStorage.getItem(hx)==="1",localStorage.setItem(hx,"1")}catch{}n?Sx():nf(()=>{q("stageTitle")&&q("stageTitle").focus({preventScroll:!0}),Sx()})},"opening-skip"(){yu()},"opening-replay"(){gi(),nf(()=>{let n=q("stageTitle");n&&n.focus({preventScroll:!0})})},continue(){P.ui.started=!0,bx();let n=P.ui.verdict;n&&!n.ok&&$t("play","verdict:dim"),Ue(n?"\uD310\uC815 \uD654\uBA74\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4.":"\uC774\uC5B4\uC11C \uC870\uC0AC\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+P.g.budget+"\uD68C, \uACB0\uB860 "+P.g.tries+"\uBC88."),pe("#stageTitle")},"newgame-ask"(){bu("\uCC98\uC74C\uBD80\uD130 \uC870\uC0AC\uD560\uAE4C\uC694?","<p>\uC800\uC7A5\uB41C \uC870\uC0AC \uAE30\uB85D\uACFC \uACE0\uC815, \uC9C0\uBAA9 \uC120\uD0DD\uC744 \uBAA8\uB450 \uC9C0\uC6B0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC73C\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p>","\uCC98\uC74C\uBD80\uD130 \uC870\uC0AC\uD558\uAE30","newgame")},newgame(){gi(),dx(),xi.start()},select(n,t){let e=P.ui;if(!e.started||e.verdict)return;let[i,s]=String(n).split(":");if(!(i==="e"?fn[s]:i==="p"&&Me[s]))return;Ii(),e.card=null,P.sceneTold=!0;let r=i==="e"?"scene":"people";if(e.tab!==r&&(e.tab=r,e.notice=""),e.selected===n&&t!==!0){e.selected=null,i==="p"&&Li(),pe(le("select",n));return}i==="p"?P.talkPid!==s&&(Li(),P.talkPid=s,$t("play","talk:"+s)):Li(),e.selected=n,$t("focus",n),pe(le("select",n))},inspect(n){let t=fe.inspect(P.g,n);if(t==="blocked")return Ue("\uC870\uC0AC \uAE30\uD68C\uAC00 \uB0A8\uC544 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),pe(le("inspect",n));t==="new"&&Ke("spend"),Ue(rr(n)+" \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4. "+Ea(),Es(n)+" \uD655\uC778. "+fn[n].text+" "+Ea()),_x(n)},board(n){P.g.seen.has(n)&&(Ke("free"),Ue(Es(n)+" \uB2E4\uC2DC \uBCF4\uAE30.",Es(n)+". "+fn[n].text),_x(n))},replay(n){P.ui.board===n&&($t("stop"),Tx(n),$t("focus","e:"+n),pe(le("skip-play",n)))},"skip-play"(n){P.ui.board===n&&(yf(),Rx(le("replay",n)))},"board-close"(n){Ii(),pe(le("select","e:"+n)),$t("focus","e:"+n,{instant:!0})},ask(n){let t=fe.ask(P.g,n);if(t==="blocked")return Ue("\uC870\uC0AC \uAE30\uD68C\uAC00 \uB0A8\uC544 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),pe(le("ask",n));t==="new"&&Ke("spend");let e=P.ui;e.tab="people",e.selected="p:"+n,e.card=null,La="",Ue(Me[n].name+"\uC758 \uC9C4\uC220\uC744 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. "+Ea(),Me[n].name+"\uC758 \uC9C4\uC220. "+Me[n].say+" "+Ea()),uf(n),mu(n,yx(n)),pe([le("talk-next"),"#pb-"+n])},"talk-next"(){let n=P.talkPid;if(Xg(),Ls()){n&&Wg()===n&&$t("play","talk:nod:"+n);let t=document.querySelector(le("talk-next"));t&&t.focus({preventScroll:!0})}},"talk-all"(){let n=P.talkPid||(P.ui.selected&&P.ui.selected.startsWith("p:")?P.ui.selected.slice(2):"");cr(),pe(Ix(n))},"talk-replay"(n){if(!P.g.asked.has(n))return;Ke("free");let t=P.ui;Ii(),t.card=null,t.tab="people",t.selected="p:"+n,La="",uf(n),mu(n,yx(n)),pe(le("talk-next"))},present(n,t){let e=P.g,i=fe.present(e,n,t);i!=="blocked"&&(Ke("free"),i==="new"?Ue(Me[n].name+"\uC5D0\uAC8C "+rr(t)+" \uC81C\uC2DC\uD588\uC2B5\uB2C8\uB2E4.",Me[n].name+"\uC5D0\uAC8C "+Es(t)+" \uC81C\uC2DC. "+Me[n].name+": "+fe.reaction(n,t)):Ue("\uC774\uBBF8 \uC81C\uC2DC\uD55C \uC99D\uAC70\uC785\uB2C8\uB2E4.","\uC774\uBBF8 \uC81C\uC2DC\uD55C \uC99D\uAC70\uC785\uB2C8\uB2E4. "+Me[n].name+": "+fe.reaction(n,t)),P.talkPid===n?$t("play","talk:nod:"+n):uf(n),La=t,mu(n,[{who:"q",text:rr(t)+" \uC81C\uC2DC\uD588\uB2E4."}].concat(Ji(fe.reaction(n,t)).map(s=>({who:n,text:s})))),pe([le("talk-next"),le("present",n,t)]))},pin(n,t){let e=P.g,i=[...e.pins],s=i.indexOf(n),r=s<0;r?e.pins.add(n):e.pins.delete(n),Ke(r?"pin":"unpin"),Ue((r?"\uACE0\uC815\uD588\uC2B5\uB2C8\uB2E4: ":"\uACE0\uC815\uC744 \uD480\uC5C8\uC2B5\uB2C8\uB2E4: ")+fu(n));let o=!r&&t==="top"?i[s+1]||i[s-1]:"";pe(!r&&t==="top"?[o?le("pin",o,"top"):"#nPin","#nPin"]:[le("pin",n,t),le("pin",n)])},"goto-person"(n){let t=P.g,e=P.ui,i=e.proof.find(s=>!t.shown.includes(n+":"+s));Ii(),e.card=null,e.tab="people",e.selected="p:"+n,P.talkPid!==n&&Li(),Gn(),$t("focus","p:"+n),Ue("\uBA74\uB2F4 \uD0ED\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4.","\uBA74\uB2F4 \uD0ED\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4. "+Me[n].name+"."),pe([i?le("present",n,i):"",le("present",n),le("ask",n),le("select","p:"+n)].filter(Boolean))},"hint-open"(){q("hintLive").textContent="",(P.ui.pg||(P.ui.pg={})).hints=P.g.hints.length-1,Su(),gi(),Ra(q("hintDlg"))},"hint-next"(){let n=P.g,t=fe.takeHint(n);t&&((P.ui.pg||(P.ui.pg={})).hints=n.hints.length-1),Su(),t&&(dr(),q("hintState").textContent="\uD78C\uD2B8 "+n.hints.length+"\uB2E8\uACC4\uB97C \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4.",q("hintLive").textContent="\uD78C\uD2B8 "+n.hints.length+"\uB2E8\uACC4. "+fe.hintText(t)),(q("hintNext").hidden?q("hintTitle"):q("hintNext")).focus()},"dialog-close"(){gi()},"toast-close"(){clearTimeout(ff),q("toast").hidden=!0},"intro-skip"(){Lu()},"submit-ask"(){let n=P.g,t=P.ui;if(!fe.ready(n,t.person,t.proof).ok)return Ue("\uC544\uC9C1 \uC81C\uCD9C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC81C\uCD9C \uC804 \uD655\uC778 \uBAA9\uB85D\uC744 \uBCF4\uC138\uC694."),pe("#checkTitle");let i=Me[t.person];bu("\uC774 \uACB0\uB860\uC744 \uC81C\uCD9C\uD560\uAE4C\uC694?","<p>\uC9C0\uBAA9: <b>"+dt(i.name)+"</b></p><p>\uC99D\uAC70: "+dt(t.proof.map(Es).join(", "))+"</p>"+Ag({personName:i.name,band:es[i.id],proof:t.proof.map(s=>({name:fn[s].name,shown:n.shown.includes(i.id+":"+s)})),draw:Qs("accuse")})+(fe.tried(n,t.person,t.proof)?"<p>\uC55E\uC11C \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC740 \uACB0\uB860\uACFC \uAC19\uC2B5\uB2C8\uB2E4. \uADF8\uB300\uB85C \uB0B4\uBA74 \uAC19\uC740 \uD310\uC815\uC744 \uBC1B\uACE0 \uAE30\uD68C\uB9CC \uD55C \uBC88 \uC904\uC5B4\uB4ED\uB2C8\uB2E4.</p>":"")+'<p class="muted caption">'+(n.tries>1?"\uB0A8\uC740 \uACB0\uB860 \uAE30\uD68C "+ha[n.tries]+" \uBC88 \uAC00\uC6B4\uB370 \uD55C \uBC88\uC744 \uC501\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uC2B5\uB2C8\uB2E4.":"\uB9C8\uC9C0\uB9C9 \uACB0\uB860 \uAE30\uD68C\uC785\uB2C8\uB2E4. \uD2C0\uB9AC\uBA74 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB05D\uB098\uACE0, \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.")+"</p>","\uC81C\uCD9C\uD558\uAE30","submit")},submit(){gi();let n=P.g,t=P.ui,e=fe.submit(n,t.person,t.proof);if(!e)return pe("#checkTitle");Ii(),Li(),t.verdict=e,t.selected=null,t.card=null,t.winPage="time";let i=t.pg||(t.pg={});i.verdict=0,i["win-time"]=0,Ke("verdict"),xg(e.ok,!e.ok&&n.tries===0),Ue(e.ok?"\uC0AC\uAC74 \uD574\uACB0.":n.tries?"\uC785\uC99D \uC2E4\uD328. \uB0A8\uC740 \uACB0\uB860 "+n.tries+"\uBC88.":"\uBBF8\uACB0. \uACB0\uB860 \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4.",e.ok?"\uC0AC\uAC74 \uD574\uACB0. \uACB0\uB860\uC774 \uBC1B\uC544\uB4E4\uC5EC\uC84C\uC2B5\uB2C8\uB2E4.":n.tries?"\uC785\uC99D \uC2E4\uD328. "+du():"\uBBF8\uACB0. \uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4."),e.ok?(t.story=0,t.auto=!1,$t("play","verdict:win").then(()=>{let s=P.ui;s.verdict&&s.verdict.ok&&s.story===0&&$t("story",0)})):$t("play","verdict:dim"),pe("#stageTitle")},resume(){let n=P.ui;n.verdict=null,n.tab="notes",n.notesPage="time",$t("play","verdict:clear"),Ue("\uC870\uC0AC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uACB0\uB860 "+P.g.tries+"\uBC88.","\uC870\uC0AC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4. "+du()),pe("#stageTitle")},"restart-ask"(){let n=P.g,t=P.ui;if(n.budget===9&&n.tries===3&&!t.person&&!t.proof.length&&!t.verdict)return xi.restart();bu("\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD560\uAE4C\uC694?","<p>\uC9C0\uAE08\uAE4C\uC9C0\uC758 \uC870\uC0AC \uAE30\uB85D\uACFC \uACE0\uC815, \uC9C0\uBAA9 \uC120\uD0DD\uC774 \uBAA8\uB450 \uC9C0\uC6CC\uC9C0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p>","\uB2E4\uC2DC \uC870\uC0AC\uD558\uAE30","restart")},restart(){gi(),Ii(),Li(),clearTimeout(Na),dx(),$t("play","verdict:clear"),$t("view","all"),Ue("\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+P.g.budget+"\uD68C, \uACB0\uB860 "+P.g.tries+"\uBC88."),pe("#stageTitle")},"story-next"(){if(!hr())return;let n=P.ui.story==null?0:P.ui.story;Ia(n+1),pe(n+1<Sn.length?le("story-next"):"#stageTitle")},"story-prev"(){if(!hr())return;let n=P.ui.story||0;n<=0||(P.ui.auto=!1,Ia(n-1),pe(le("story-prev")))},"story-auto"(){if(!hr())return;let n=P.ui;n.auto=!n.auto,n.auto?Lx(n.story||0):clearTimeout(Na),Ue(n.auto?"\uC7AC\uD604\uC744 \uC790\uB3D9\uC73C\uB85C \uB118\uAE41\uB2C8\uB2E4.":"\uC790\uB3D9 \uC7AC\uC0DD\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4."),pe(le("story-auto"))},"story-skip"(){hr()&&(P.ui.auto=!1,Ia(Sn.length),pe("#stageTitle"))},"story-again"(){hr()&&(P.ui.auto=!1,Ia(0),pe(le("story-next")))},view(n){Da.some(([t])=>t===n)&&(P.ui.view=n,$t("view",n),mf(),Ru(!0),dr())},"view-menu"(){let n=q("viewPop"),t=n.hidden;if(n.hidden=!t,q("viewMenu").setAttribute("aria-expanded",String(t)),t){let e=n.querySelector('[aria-pressed="true"]')||n.querySelector("button");e&&e.focus()}},"coach-close"(){P.sceneTold=!0,q("coach").hidden=!0,document.body.classList.remove("coaching");let n=q("stageTitle");n&&n.focus({preventScroll:!0})},"card-tab"(n){let t=P.ui;!t.board||!["art","facts","raw"].includes(n)||(t.cardTab=n,Au("ct",n),ns(q("deck")),n==="art"&&t.board==="audio"&&fo())},"notes-page"(n){let t=P.ui;if(!["plan","time","people","pins"].includes(n)||t.verdict)return;if(t.notesPage=n,t.tab!=="notes"||t.card||t.board)return Ii(),t.card=null,Li(),t.tab="notes",t.notice="",pe("#nt-"+n);Au("nt",n);let e=document.querySelector("#stage .notes");e&&(e.dataset.page=n),ns(q("deck"))},"win-page"(n){let t=P.ui;!hr()||!["time","method","cross","motive"].includes(n)||(t.winPage=n,Au("wt",n),ns(q("deck")))},"accuse-page"(n){let t=P.ui;if(!["pick","check"].includes(n))return;t.accusePage=n;let e=document.querySelector("#stage .acc");e&&(e.dataset.page=n);for(let i of document.querySelectorAll(".accSeg [role=tab]")){let s=i.dataset.id===n;i.setAttribute("aria-selected",String(s)),i.tabIndex=s?0:-1}},pg(n,t){n==="hints"?lx("hints",t):Aa(n,t)},transcript(n,t){let e=P.ui;if(!P.g.asked.has(n)||e.verdict)return;let i=wx();Ii(),cr(),e.card={kind:"talk",id:n,arg:t||"",from:i},(e.pg||(e.pg={}))["tr-"+n]=0,pe(t?["#r-"+n+"-"+t,"#stageTitle"]:"#stageTitle")},"card-close"(){let n=P.ui,t=n.card;t&&(n.card=null,pe([t.from,"#stageTitle"].filter(Boolean)))},"layout-open"(){wu("layout")},"stuck-open"(){wu("stuck")},"zero-open"(){wu("zero")},"accuse-info"(){wu("accuse")},rotate(n){Ru(),$t("rotate",n==="-1"?-1:1)},home(){P.ui.view="all",$t("view","all"),mf(),dr()},"menu-open"(){q("menuBody").innerHTML=cf(),gi(),Ra(q("menuDlg"))},"rules-open"(){lf("\uC870\uC0AC \uBC29\uBC95",cx())},install(){if(Ms().mode==="prompt"){gi(),w0().then(n=>{n==="accepted"&&P.ui.started&&Ue("\uC571\uC73C\uB85C \uC124\uCE58\uD588\uC2B5\uB2C8\uB2E4. \uD648 \uD654\uBA74\uC774\uB098 \uC571 \uBAA9\uB85D\uC5D0\uC11C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),Ux()});return}lf("\uC571\uC73C\uB85C \uC124\uCE58",ux())},"set-sound"(){z0(!jn()),jn()||ts(),Ps(le("set-sound"))},"set-music"(){og(!ya()),sr(),Ps(le("set-music"))},"set-voice"(){fg(!Qi()),Qi()||ts(),Ps(le("set-voice"))},"set-motion"(){In.motion=!In.motion,ga(),document.body.classList.toggle("calm",dn()),$t("setReducedMotion",dn()),dn()&&Ua(),Ps(le("set-motion"))},"set-quality"(n){P.no3d||!s2[n]||(In.quality=n,ga(),$t("setQuality",Px()),Ps(le("set-quality",n)))},async"set-3d"(){if(P.no3d){In.off3d=!1,ga();let n=!1;try{n=!!(P.world&&typeof P.world.isLost=="function"&&P.world.isLost())}catch{n=!0}if(n){try{P.world.dispose()}catch{}P.world=null}if(!P.world&&!await Dx()){let e="3D \uD654\uBA74\uC744 \uB2E4\uC2DC \uCF1C\uC9C0 \uBABB\uD574 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uB0B4\uC6A9\uC740 \uAC19\uC2B5\uB2C8\uB2E4.";P.ui.started?Ue(e):Eu("<span>"+e+"</span>"+pf(),6e3),Ps();return}Iu(!1)}else In.off3d=!0,ga(),Iu(!0);Ps(le("set-3d"))},reload(){dr(),location.reload()}},u2={layout:"layout",accuse:"accinfo",stuck:"stuck",zero:"zero"};function wu(n){let t=P.ui;if(!t.started||t.verdict)return;let e=wx();Ii(),cr(),t.card={kind:n,from:e},(t.pg||(t.pg={}))[u2[n]]=0,pe("#stageTitle")}function Mx(n,t){let e=P.ui;!e.started||e.verdict||!so.includes(n)||(Ii(),e.card=null,n!=="people"&&Li(),P.sceneTold=!0,e.tab=n,e.notice="",n==="accuse"&&(e.view="lobby",Gn(),$t("view","lobby")),pe(t?"#tab-"+n:"#stageTitle"))}function h2(n){let t=P.ui;if(!t||!t.started||t.verdict||!n||document.querySelector("dialog[open]"))return;let[e,i]=String(n).split(":");if(e==="p"&&Me[i])return t.tab==="accuse"?(t.person=i,t.notice="",Ue("\uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC744 \uACE8\uB790\uC2B5\uB2C8\uB2E4: "+Me[i].name+"."),pe('input[name="suspect"][value="'+i+'"]')):xi.select("p:"+i,!0);e==="e"&&fn[i]&&xi.select("e:"+i,!0)}function d2(){ur()}function Bx({root:n,restored:t,makeWorld:e}){if(P.makeWorld=e||null,P.g=fe.fresh(),P.ui=vd(!1),t&&t.g){let i=t.g,s=t.extra||{};P.g=i,_f=i.budget<9||i.tries<3||i.pins.size>0,so.includes(s.tab)&&(P.ui.tab=s.tab),typeof s.person=="string"&&Me[s.person]&&(P.ui.person=s.person),Array.isArray(s.proof)&&(P.ui.proof=[...new Set(s.proof.filter(o=>typeof o=="string"&&i.seen.has(o)))].slice(0,2)),Da.some(([o])=>o===s.view)&&(P.ui.view=s.view);let r=o2(i,s);r&&(P.ui.verdict=r.v,P.ui.person=r.person,P.ui.proof=r.proof,r.v.ok&&(P.ui.story=Sn.length),_f=!0)}n.innerHTML=r2(),document.body.classList.toggle("calm",dn()),l2(),Ug(),Hg(i=>{P.ui.started&&!P.ui.verdict&&pe(Ix(i))}),document.addEventListener("pointerdown",()=>Lu(),{capture:!0,passive:!0}),document.addEventListener("click",i=>{Lu(),P.ui.started&&!Pu&&vf();let s=i.target.closest("dialog");if(s&&i.target===s)return s.close();let r=i.target.closest("[data-act3d]");if(r){Ke("tick");let c=xi[r.dataset.act3d];c&&c(r.dataset.id);return}if(i.target.closest('input[aria-disabled="true"]'))return i.preventDefault(),Ue("\uC99D\uAC70\uB294 \uB450 \uAC1C\uAE4C\uC9C0\uC785\uB2C8\uB2E4. \uD558\uB098\uB97C \uBE80 \uB4A4 \uACE0\uB974\uC138\uC694.");let a=i.target.closest("[data-action],[data-tab]");if(!a||a.id==="askYes"&&performance.now()-ox()<400)return;if(Ke("tick"),a.dataset.tab)return Mx(a.dataset.tab,!0);let l=xi[a.dataset.action];l&&l(a.dataset.id,a.dataset.arg)}),document.addEventListener("change",i=>{let s=i.target,r=P.ui;if(r.started){if(s.name==="suspect")r.person=s.value,r.notice="",pe('input[name="suspect"][value="'+s.value+'"]');else if(s.name==="proof"){s.checked?r.proof.length<2&&r.proof.push(s.value):r.proof=r.proof.filter(a=>a!==s.value);let o=r.proof.length;Ue(o===2?"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":o?"\uC99D\uAC70 \uD55C \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":"\uACE0\uB978 \uC99D\uAC70\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),pe('input[name="proof"][value="'+s.value+'"]')}}}),q("tabs").addEventListener("keydown",i=>{let s=so.indexOf(P.ui.tab),r={ArrowRight:(s+1)%4,ArrowLeft:(s+3)%4,ArrowDown:(s+1)%4,ArrowUp:(s+3)%4,Home:0,End:3}[i.key];r!==void 0&&(i.preventDefault(),Mx(so[r],!0))}),document.addEventListener("keydown",i=>{if(i.altKey||i.ctrlKey||i.metaKey)return;let s=document.activeElement;if(i.key==="Escape"){!_u()&&!document.querySelector("dialog[open]")&&P.ui.started&&Fx()&&i.preventDefault();return}if(!s||!s.closest)return;let r=s.getAttribute("role")==="tab"?s.closest(".seg[role=tablist]"):null;if(r){let a=[...r.querySelectorAll("[role=tab]")],l=a.indexOf(s),c={ArrowRight:l+1,ArrowDown:l+1,ArrowLeft:l-1,ArrowUp:l-1,Home:0,End:a.length-1}[i.key];if(c===void 0)return;i.preventDefault();let u=a[(c+a.length)%a.length];u.click();let d=q(u.id);d&&d.focus();return}let o=s.classList.contains("tile")?s.closest(".tiles"):null;if(o){let a=[...o.querySelectorAll(".tile")],l=a.indexOf(s),c=o.classList.contains("tiles3")?3:4,u={ArrowRight:l+1,ArrowLeft:l-1,ArrowDown:l+c,ArrowUp:l-c,Home:0,End:a.length-1}[i.key];if(u===void 0||u<0||u>=a.length)return;i.preventDefault();for(let d of a)d.tabIndex=-1;a[u].tabIndex=0,a[u].focus()}}),document.addEventListener("pointerdown",i=>{!q("viewPop").hidden&&!i.target.closest("#viewctl")&&Ru()},{passive:!0}),q("bubble").addEventListener("click",()=>{Ke("tick"),qg()||xi["talk-next"]()}),q("opening").addEventListener("click",i=>{i.target.closest(".opSkip")||ix()}),document.addEventListener("keydown",i=>{_u()&&i.key==="Escape"&&(i.preventDefault(),yu())});for(let i of document.querySelectorAll("dialog"))i.addEventListener("close",()=>{ax(()=>P.ui.started?q("hintBtn").hidden?q("stageTitle"):q("hintBtn"):q("titleH"))});if(window.ResizeObserver){let i=new ResizeObserver(()=>Gn());i.observe(q("hud")),i.observe(q("tabs"));let s=new ResizeObserver(()=>lu());s.observe(q("deck"));for(let r of document.querySelectorAll("dialog .dlgBody"))s.observe(r)}try{document.fonts.ready.then(()=>lu())}catch{}return addEventListener("resize",()=>{Gn(),ur(),lu(),P.ui.board==="audio"&&requestAnimationFrame(fo)}),document.addEventListener("visibilitychange",()=>{document.hidden&&dr()}),addEventListener("pagehide",dr),addEventListener("popstate",c2),T0(i=>{hf||i&&df&&i<df||(hf=!0,Eu("<span>\uB2E4\uB978 \uCC3D\uC5D0\uC11C \uC774 \uC870\uC0AC\uB97C \uB354 \uB098\uC911\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uCC3D\uC758 \uC9C4\uD589\uC740 \uC774\uC81C \uC790\uB3D9 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span>"+Ct("reload","","\uB2E4\uC2DC \uC5F4\uAE30")+pf()))}),S0(Ux),X0(),gg(),Object.defineProperty(window,"__app",{configurable:!0,value:Object.freeze({get g(){return P.g},get ui(){return P.ui},get world(){return P.world}})}),In.off3d?(P.no3d=!0,document.body.classList.add("no3d")):Dx(),Gn(),{updateReady(){Eu("<span>\uC0C8 \uBC84\uC804\uC774 \uB098\uC654\uC2B5\uB2C8\uB2E4</span>"+Ct("reload","","\uB2E4\uC2DC \uC5F4\uAE30")+pf())}}}var kx=document.getElementById("canvas"),f2=C0({Game:fe,EVIDENCE:Rn,PEOPLE:Je,BUDGET:9,TRIES:3,HINTS:Gc});async function p2(n){if(!kx||!R0())return null;try{return await b0(kx,n)}catch(t){return console.warn("3D \uD654\uBA74\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",t),null}}var m2=Bx({root:document.getElementById("ui"),restored:f2,makeWorld:p2});A0({onUpdate:()=>m2.updateReady()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
