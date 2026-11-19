(()=>{var af=0,Su=1,lf=2;var Io=1,cf=2,dr=3,as=0,En=1,on=2,Ts=0,fr=1,Ui=2,Mu=3,bu=4,uf=5;var As=100,hf=101,df=102,ff=103,pf=104,mf=200,gf=201,xf=202,_f=203,wu=204,Tu=205,yf=206,vf=207,Sf=208,Mf=209,bf=210,wf=211,Tf=212,Af=213,Ef=214,ka=0,za=1,Ga=2,er=3,Va=4,Ha=5,Wa=6,Xa=7,ml=0,Cf=1,Rf=2,_i=0,Au=1,Eu=2,Cu=3,Ru=4,Iu=5,Lu=6,Pu=7;var Nu=300,Es=301,pr=302,gl=303,xl=304,qa=1e3,mi=1001,Ya=1002,sn=1003,If=1004;var Lo=1005;var Tn=1006,_l=1007;var ri=1008;var Nn=1009,Du=1010,Uu=1011,mr=1012,yl=1013,oi=1014,Yn=1015,ai=1016,vl=1017,Sl=1018,Cs=1020,Ou=35902,Fu=35899,Bu=1021,ku=1022,li=1023,Pi=1026,Oi=1027,Ml=1028,bl=1029,ls=1030,wl=1031;var Tl=1033,Po=33776,No=33777,Do=33778,Uo=33779,Al=35840,El=35841,Cl=35842,Rl=35843,Il=36196,Ll=37492,Pl=37496,Nl=37488,Dl=37489,Oo=37490,Ul=37491,Ol=37808,Fl=37809,Bl=37810,kl=37811,zl=37812,Gl=37813,Vl=37814,Hl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,Zl=37820,Jl=37821,Kl=36492,$l=36494,jl=36495,Ql=36283,tc=36284,Fo=36285,ec=36286;var oo=2300,Za=2301,Fa=2302,fu=2303,pu=2400,mu=2401,gu=2402;var Lf=3200;var nc=0,Pf=1,Fi="",ln="srgb",ao="srgb-linear",lo="linear",ye="srgb";var Ba=7680;var Nf=519,Df=512,Uf=513,Of=514,zu=515,Ff=516,Bf=517,Gu=518,Vu=519,kf=35044,gr=35048;var Hu="300 es",Vn=2e3,nr=2001;function ag(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zf(){let n=co("canvas");return n.style.display="block",n}var Pd={},ir=null;function Wu(...n){let t="THREE."+n.shift();ir?ir("log",t,...n):console.log(t,...n)}function Gf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Gf(n);let t="THREE."+n.shift();if(ir)ir("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Xt(...n){n=Gf(n);let t="THREE."+n.shift();if(ir)ir("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function io(...n){let t=n.join(" ");t in Pd||(Pd[t]=!0,zt(...n))}function Vf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Hf={[ka]:ka,[Ga]:Wa,[Va]:Va,[er]:Ha,[za]:za,[Wa]:Ga,[Xa]:Xa,[Ha]:er},gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,so=Math.PI/180,sr=180/Math.PI;function xr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function de(n,t,e){return Math.max(t,Math.min(e,n))}function Xu(n,t){return(n%t+t)%t}function cg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ug(n,t,e){return n!==t?(e-n)/(t-n):0}function ro(n,t,e){return(1-e)*n+e*t}function hg(n,t,e,i){return ro(n,t,1-Math.exp(-e*i))}function dg(n,t=1){return t-Math.abs(Xu(n,t*2)-t)}function fg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function pg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function mg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function gg(n,t){return n+Math.random()*(t-n)}function xg(n){return n*(.5-Math.random())}function _g(n){n!==void 0&&(Nd=n);let t=Nd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yg(n){return n*so}function vg(n){return n*sr}function Sg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Mg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bg(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wf(n,t){if(t.constructor===Float32Array)return n;let e=Yu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Xf(n,t){if(t.constructor===Float32Array)return n;let e=Yu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Bo={DEG2RAD:so,RAD2DEG:sr,generateUUID:xr,clamp:de,euclideanModulo:Xu,mapLinear:cg,inverseLerp:ug,lerp:ro,damp:hg,pingpong:dg,smoothstep:fg,smootherstep:pg,randInt:mg,randFloat:gg,randFloatSpread:xg,seededRandom:_g,degToRad:yg,radToDeg:vg,isPowerOfTwo:Sg,ceilPowerOfTwo:Mg,floorPowerOfTwo:qu,setQuaternionFromProperEuler:bg,normalize:Xf,denormalize:Wf},ju=class ju{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ju.prototype.isVector2=!0;var Kt=ju,Hn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+d*y;m<0&&(h=-h,p=-p,g=-g,y=-y,m=-m);let f=1-a;if(m<.9995){let _=Math.acos(m),w=Math.sin(_);f=Math.sin(f*_)/w,a=Math.sin(a*_)/w,l=l*f+h*a,c=c*f+p*a,u=u*f+g*a,d=d*f+y*a}else{l=l*f+h*a,c=c*f+p*a,u=u*f+g*a,d=d*f+y*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*p-c*h,t[e+1]=l*g+u*h+c*d-a*p,t[e+2]=c*g+u*p+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qu=class Qu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qu.prototype.isVector3=!0;var G=Qu,Yc=new G,Dd=new Hn,th=class th{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],_=s[1],w=s[4],v=s[7],E=s[2],A=s[5],x=s[8];return r[0]=o*y+a*_+l*E,r[3]=o*m+a*w+l*A,r[6]=o*f+a*v+l*x,r[1]=c*y+u*_+d*E,r[4]=c*m+u*w+d*A,r[7]=c*f+u*v+d*x,r[2]=h*y+p*_+g*E,r[5]=h*m+p*w+g*A,r[8]=h*f+p*v+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=e*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};th.prototype.isMatrix3=!0;var Yt=th,Zc=new Yt,Ud=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wg(){let n={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ao]:{primaries:t,whitePoint:i,transfer:lo,toXYZ:Ud,fromXYZ:Od,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:Ud,fromXYZ:Od,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}var he=wg();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zs,Ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zs===void 0&&(zs=co("canvas")),zs.width=t.width,zs.height=t.height;let s=zs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=zs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=co("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tg=0,rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jc(s[o].image)):r.push(Jc(s[o]))}else r=Jc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ja.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Ag=0,Kc=new G,An=class n extends gi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=mi,s=mi,r=Tn,o=ri,a=li,l=Nn,c=n.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=xr(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Nu;An.DEFAULT_ANISOTROPY=1;var eh=class eh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(p+1)/2,E=(f+1)/2,A=(u+h)/4,x=(d+y)/4,b=(g+m)/4;return w>v&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=x/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=b/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=x/r,s=b/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eh.prototype.isVector4=!0;var Oe=eh,Ka=class extends gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new An({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends Ka{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},uo=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends An{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pl=class pl{constructor(t,e,i,s,r,o,a,l,c,u,d,h,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,h,p,g,y,m)}set(t,e,i,s,r,o,a,l,c,u,d,h,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),o=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,p=o*d,g=a*u,y=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=h-y*c,e[9]=-a*l,e[2]=y-h*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,g=c*u,y=c*d;e[0]=h+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=y+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,g=c*u,y=c*d;e[0]=h-y*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,p=o*d,g=a*u,y=a*d;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-h*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+g,e[10]=h-y*d}else if(t.order==="XZY"){let h=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eg,t,Cg)}lookAt(t,e,i){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Zi.crossVectors(i,Dn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Zi.crossVectors(i,Dn)),Zi.normalize(),ga.crossVectors(Dn,Zi),s[0]=Zi.x,s[4]=ga.x,s[8]=Dn.x,s[1]=Zi.y,s[5]=ga.y,s[9]=Dn.y,s[2]=Zi.z,s[6]=ga.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],_=i[3],w=i[7],v=i[11],E=i[15],A=s[0],x=s[4],b=s[8],O=s[12],I=s[1],U=s[5],z=s[9],X=s[13],L=s[2],H=s[6],K=s[10],Z=s[14],T=s[3],C=s[7],P=s[11],V=s[15];return r[0]=o*A+a*I+l*L+c*T,r[4]=o*x+a*U+l*H+c*C,r[8]=o*b+a*z+l*K+c*P,r[12]=o*O+a*X+l*Z+c*V,r[1]=u*A+d*I+h*L+p*T,r[5]=u*x+d*U+h*H+p*C,r[9]=u*b+d*z+h*K+p*P,r[13]=u*O+d*X+h*Z+p*V,r[2]=g*A+y*I+m*L+f*T,r[6]=g*x+y*U+m*H+f*C,r[10]=g*b+y*z+m*K+f*P,r[14]=g*O+y*X+m*Z+f*V,r[3]=_*A+w*I+v*L+E*T,r[7]=_*x+w*U+v*H+E*C,r[11]=_*b+w*z+v*K+E*P,r[15]=_*O+w*X+v*Z+E*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15],_=l*p-c*h,w=a*p-c*d,v=a*h-l*d,E=o*p-c*u,A=o*h-l*u,x=o*d-a*u;return e*(y*_-m*w+f*v)-i*(g*_-m*E+f*A)+s*(g*w-y*E+f*x)-r*(g*v-y*A+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],_=e*a-i*o,w=e*l-s*o,v=e*c-r*o,E=i*l-s*a,A=i*c-r*a,x=s*c-r*l,b=u*y-d*g,O=u*m-h*g,I=u*f-p*g,U=d*m-h*y,z=d*f-p*y,X=h*f-p*m,L=_*X-w*z+v*U+E*I-A*O+x*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return t[0]=(a*X-l*z+c*U)*H,t[1]=(s*z-i*X-r*U)*H,t[2]=(y*x-m*A+f*E)*H,t[3]=(h*A-d*x-p*E)*H,t[4]=(l*I-o*X-c*O)*H,t[5]=(e*X-s*I+r*O)*H,t[6]=(m*v-g*x-f*w)*H,t[7]=(u*x-h*v+p*w)*H,t[8]=(o*z-a*I+c*b)*H,t[9]=(i*I-e*z-r*b)*H,t[10]=(g*A-y*v+f*_)*H,t[11]=(d*v-u*A-p*_)*H,t[12]=(a*O-o*U-l*b)*H,t[13]=(e*U-i*O+s*b)*H,t[14]=(y*w-g*E-m*_)*H,t[15]=(u*E-d*w+h*_)*H,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,g=r*d,y=o*u,m=o*d,f=a*d,_=l*c,w=l*u,v=l*d,E=i.x,A=i.y,x=i.z;return s[0]=(1-(y+f))*E,s[1]=(p+v)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(h+f))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+w)*x,s[9]=(m-_)*x,s[10]=(1-(h+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Gs.set(s[0],s[1],s[2]).length(),a=Gs.set(s[4],s[5],s[6]).length(),l=Gs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let c=1/o,u=1/a,d=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,e.setFromRotationMatrix(Qn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Vn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Vn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===nr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Vn,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Vn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===nr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};pl.prototype.isMatrix4=!0;var ge=pl,Gs=new G,Qn=new ge,Eg=new G(0,0,0),Cg=new G(1,1,1),Zi=new G,ga=new G,Dn=new G,Fd=new ge,Bd=new Hn,ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rg=0,kd=new G,Vs=new Hn,Ai=new ge,xa=new G,$r=new G,Ig=new G,Lg=new Hn,zd=new G(1,0,0),Gd=new G(0,1,0),Vd=new G(0,0,1),Hd={type:"added"},Pg={type:"removed"},Hs={type:"childadded",child:null},$c={type:"childremoved",child:null},Ye=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new G,e=new ii,i=new Hn,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Yt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(zd,t)}rotateY(t){return this.rotateOnAxis(Gd,t)}rotateZ(t){return this.rotateOnAxis(Vd,t)}translateOnAxis(t,e){return kd.copy(t).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zd,t)}translateY(t){return this.translateOnAxis(Gd,t)}translateZ(t){return this.translateOnAxis(Vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xa.copy(t):xa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt($r,xa,this.up):Ai.lookAt(xa,$r,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pg),$c.child=t,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,Ig),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Lg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new G(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pe=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},_a={h:0,s:0,l:0};function jc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Xu(t,1),e=de(e,0,1),i=de(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=jc(o,r,t+1/3),this.g=jc(o,r,t),this.b=jc(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let i=qf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return he.workingToColorSpace(gn.copy(this),t),Math.round(de(gn.r*255,0,255))*65536+Math.round(de(gn.g*255,0,255))*256+Math.round(de(gn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(gn.copy(this),e);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ln){he.workingToColorSpace(gn.copy(this),t);let e=gn.r,i=gn.g,s=gn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(_a);let i=ro(Ji.h,_a.h,e),s=ro(Ji.s,_a.s,e),r=ro(Ji.l,_a.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new qt;qt.NAMES=qf;var ho=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new G,Ei=new G,Qc=new G,Ci=new G,Ws=new G,Xs=new G,Wd=new G,tu=new G,eu=new G,nu=new G,iu=new Oe,su=new Oe,ru=new Oe,Qi=class n{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ti.subVectors(s,e),Ei.subVectors(i,e),Qc.subVectors(t,e);let o=ti.dot(ti),a=ti.dot(Ei),l=ti.dot(Qc),c=Ei.dot(Ei),u=Ei.dot(Qc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return iu.setScalar(0),su.setScalar(0),ru.setScalar(0),iu.fromBufferAttribute(t,e),su.fromBufferAttribute(t,i),ru.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(iu,r.x),o.addScaledVector(su,r.y),o.addScaledVector(ru,r.z),o}static isFrontFacing(t,e,i,s){return ti.subVectors(i,e),Ei.subVectors(t,e),ti.cross(Ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ti.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),tu.subVectors(t,i);let l=Ws.dot(tu),c=Xs.dot(tu);if(l<=0&&c<=0)return e.copy(i);eu.subVectors(t,s);let u=Ws.dot(eu),d=Xs.dot(eu);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(i).addScaledVector(Ws,o);nu.subVectors(t,r);let p=Ws.dot(nu),g=Xs.dot(nu);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Xs,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Wd.subVectors(r,s),a=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(Wd,a);let f=1/(m+y+h);return o=y*f,a=h*f,e.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ya.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(t.matrixWorld),this.union(ya)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),va.subVectors(this.max,jr),qs.subVectors(t.a,jr),Ys.subVectors(t.b,jr),Zs.subVectors(t.c,jr),Ki.subVectors(Ys,qs),$i.subVectors(Zs,Ys),ys.subVectors(qs,Zs);let e=[0,-Ki.z,Ki.y,0,-$i.z,$i.y,0,-ys.z,ys.y,Ki.z,0,-Ki.x,$i.z,0,-$i.x,ys.z,0,-ys.x,-Ki.y,Ki.x,0,-$i.y,$i.x,0,-ys.y,ys.x,0];return!ou(e,qs,Ys,Zs,va)||(e=[1,0,0,0,1,0,0,0,1],!ou(e,qs,Ys,Zs,va))?!1:(Sa.crossVectors(Ki,$i),e=[Sa.x,Sa.y,Sa.z],ou(e,qs,Ys,Zs,va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ri=[new G,new G,new G,new G,new G,new G,new G,new G],ei=new G,ya=new Wn,qs=new G,Ys=new G,Zs=new G,Ki=new G,$i=new G,ys=new G,jr=new G,va=new G,Sa=new G,vs=new G;function ou(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vs.fromArray(n,r);let a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=t.dot(vs),c=e.dot(vs),u=i.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var qe=new G,Ma=new Kt,Dg=0,cn=class extends gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=kf,this.updateRanges=[],this.gpuType=Yn,this.version=0,this._normalizationScale=t!==void 0?Yu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Xf(t,this.array)}};var fo=class extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var po=class extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var _e=class extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ug=new Wn,Qr=new G,au=new G,ts=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ug.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(au.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(au)),this.expandByPoint(Qr.copy(t.center).sub(au))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Og=0,Gn=new ge,lu=new Ye,Js=new G,Un=new Wn,to=new Wn,nn=new G,xn=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ag(t)?po:fo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return lu.lookAt(t),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Un.min,to.min),Un.expandByPoint(nn),nn.addVectors(Un.max,to.max),Un.expandByPoint(nn)):(Un.expandByPoint(to.min),Un.expandByPoint(to.max))}Un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(t,c),nn.add(Js)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)a[O]=new G,l[O]=new G;let u=new G,d=new G,h=new G,p=new Kt,g=new Kt,y=new Kt,m=new G,f=new G;function _(O,I,U){c[O]=c[I]=c[U]=1,u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,I),h.fromBufferAttribute(i,U),p.fromBufferAttribute(r,O),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,U),d.sub(u),h.sub(u),g.sub(p),y.sub(p);let z=1/(g.x*y.y-y.x*g.y);isFinite(z)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(h,-g.y).multiplyScalar(z),f.copy(h).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(z),a[O].add(m),a[I].add(m),a[U].add(m),l[O].add(f),l[I].add(f),l[U].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,I=w.length;O<I;++O){let U=w[O],z=U.start,X=U.count;for(let L=z,H=z+X;L<H;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new G,E=new G,A=new G,x=new G;function b(O){A.fromBufferAttribute(s,O),x.copy(A);let I=a[O];v.copy(I),v.sub(A.multiplyScalar(A.dot(I))).normalize(),E.crossVectors(x,I);let z=E.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,z)}for(let O=0,I=i.count;O<I;++O)c[O]&&b(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,d=new G;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new cn(h,u,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var cu=new G,Fg=new G,Bg=new Yt,ni=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=cu.subVectors(i,e).cross(Fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(cu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Bg.getNormalMatrix(t),s=this.coplanarPoint(cu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},kg=0,es=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=fr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=Tu,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ni().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ii=new G,uu=new G,ba=new G,wa=new G,mo=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){uu.copy(t).add(e).multiplyScalar(.5),ba.copy(e).sub(t).normalize(),wa.copy(this.origin).sub(uu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ba),a=wa.dot(this.direction),l=-wa.dot(ba),c=wa.lengthSq(),u=Math.abs(1-o*o),d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(uu).addScaledVector(ba,h),p}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,p=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,f=i.x-o.x,_=i.y-o.y,w=i.z-o.z,v=Math.abs(l),E=Math.abs(c),A=Math.abs(u),x,b,O,I,U,z,X,L,H,K,Z,T;if(v>=E&&v>=A?(O=l,z=d,H=g,T=f,l>=0?(x=c,b=u,I=h,U=p,X=y,L=m,K=_,Z=w):(x=u,b=c,I=p,U=h,X=m,L=y,K=w,Z=_)):E>=A?(O=c,z=h,H=y,T=_,c>=0?(x=u,b=l,I=p,U=d,X=m,L=g,K=w,Z=f):(x=l,b=u,I=d,U=p,X=g,L=m,K=f,Z=w)):(O=u,z=p,H=m,T=w,u>=0?(x=l,b=c,I=d,U=h,X=g,L=y,K=f,Z=_):(x=c,b=l,I=h,U=d,X=y,L=g,K=_,Z=f)),O===0)return null;let C=x/O,P=b/O,V=1/O,tt=I-C*z,dt=U-P*z,W=X-C*H,ot=L-P*H,nt=K-C*T,_t=Z-P*T,yt=nt*ot-_t*W,Ht=tt*_t-dt*nt,Ue=W*dt-ot*tt;if(s){if(yt<0||Ht<0||Ue<0)return null}else if((yt<0||Ht<0||Ue<0)&&(yt>0||Ht>0||Ue>0))return null;let Bt=yt+Ht+Ue;if(Bt===0)return null;let Jt=V*(yt*z+Ht*H+Ue*T);return(Bt>0?Jt<0:Jt>0)?null:this.at(Jt/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xd=new ge,Ss=new mo,Ta=new ts,qd=new G,Aa=new G,Ea=new G,Ca=new G,hu=new G,Ra=new G,Yd=new G,Ia=new G,Ft=class extends Ye{constructor(t=new xn,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(hu.fromBufferAttribute(d,t),o?Ra.addScaledVector(hu,u):Ra.addScaledVector(hu.sub(e),u))}e.add(Ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(Ta.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Ta,qd)===null||Ss.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&(Xd.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(Xd),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,E=w;v<E;v+=3){let A=a.getX(v),x=a.getX(v+1),b=a.getX(v+2);s=La(this,f,t,i,c,u,d,A,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let _=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=La(this,o,t,i,c,u,d,_,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,E=w;v<E;v+=3){let A=v,x=v+1,b=v+2;s=La(this,f,t,i,c,u,d,A,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let _=m,w=m+1,v=m+2;s=La(this,o,t,i,c,u,d,_,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function zg(n,t,e,i,s,r,o,a){let l;if(t.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===as,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ia);return c<e.near||c>e.far?null:{distance:c,point:Ia.clone(),object:n}}function La(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Aa),n.getVertexPosition(l,Ea),n.getVertexPosition(c,Ca);let u=zg(n,t,e,i,Aa,Ea,Ca,Yd);if(u){let d=new G;Qi.getBarycoord(Yd,Aa,Ea,Ca,d),s&&(u.uv=Qi.getInterpolatedAttribute(s,a,l,c,d,new Kt)),r&&(u.uv1=Qi.getInterpolatedAttribute(r,a,l,c,d,new Kt)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,l,c,d,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new G,materialIndex:0};Qi.getNormal(Aa,Ea,Ca,h.normal),u.face=h,u.barycoord=d}return u}var go=class extends An{constructor(t=null,e=1,i=1,s,r,o,a,l,c=sn,u=sn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ks=new ge,Zd=new ge,Pa=[],Jd=new Wn,Gg=new ge,eo=new Ft,no=new ts,xi=class extends Ft{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ks),Jd.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Jd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ks),no.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(no)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(i),t.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Zd.multiplyMatrices(i,Ks),eo.matrixWorld=Zd,eo.raycast(t,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=r,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(s*this.count),s,this.count,Ml,Yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ms=new ts,Vg=new Kt(.5,.5),Na=new G,ns=class{constructor(t=new ni,e=new ni,i=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],_=r[12],w=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,p-u,f-g,E-_).normalize(),s[1].setComponents(c+o,p+u,f+g,E+_).normalize(),s[2].setComponents(c+a,p+d,f+y,E+w).normalize(),s[3].setComponents(c-a,p-d,f-y,E-w).normalize(),i)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,f-m,E-v).normalize();else if(s[4].setComponents(c-l,p-h,f-m,E-v).normalize(),e===Vn)s[5].setComponents(c+l,p+h,f+m,E+v).normalize();else if(e===nr)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);let e=Vg.distanceTo(t.center);return Ms.radius=.7071067811865476+e,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Na.x=s.normal.x>0?t.max.x:t.min.x,Na.y=s.normal.y>0?t.max.y:t.min.y,Na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kd=new ge,ja=class n{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Kd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ns),i[s].setFromProjectionMatrix(Kd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ns),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var xo=class extends An{constructor(t=[],e=Es,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ni=class extends An{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends An{constructor(t,e,i=oi,s,r,o,a=sn,l=sn,c,u=Pi,d=1){if(u!==Pi&&u!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_o=class extends Di{constructor(t,e=oi,i=Es,s,r,o=sn,a=sn,l,c=Pi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yo=class extends An{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},si=class n extends xn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2));function g(y,m,f,_,w,v,E,A,x,b,O){let I=v/x,U=E/b,z=v/2,X=E/2,L=A/2,H=x+1,K=b+1,Z=0,T=0,C=new G;for(let P=0;P<K;P++){let V=P*U-X;for(let tt=0;tt<H;tt++){let dt=tt*I-z;C[y]=dt*_,C[m]=V*w,C[f]=L,c.push(C.x,C.y,C.z),C[y]=0,C[m]=0,C[f]=A>0?1:-1,u.push(C.x,C.y,C.z),d.push(tt/x),d.push(1-P/b),Z+=1}}for(let P=0;P<b;P++)for(let V=0;V<x;V++){let tt=h+V+H*P,dt=h+V+H*(P+1),W=h+(V+1)+H*(P+1),ot=h+(V+1)+H*P;l.push(tt,dt,ot),l.push(dt,W,ot),T+=6}a.addGroup(p,T,O),p+=T,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bs=class n extends xn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new G,u=new Kt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cr=class n extends xn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],g=0,y=[],m=i/2,f=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(p,2));function _(){let v=new G,E=new G,A=0,x=(e-t)/i;for(let b=0;b<=r;b++){let O=[],I=b/r,U=I*(e-t)+t;for(let z=0;z<=s;z++){let X=z/s,L=X*l+a,H=Math.sin(L),K=Math.cos(L);E.x=U*H,E.y=-I*i+m,E.z=U*K,d.push(E.x,E.y,E.z),v.set(H,x,K).normalize(),h.push(v.x,v.y,v.z),p.push(X,1-I),O.push(g++)}y.push(O)}for(let b=0;b<s;b++)for(let O=0;O<r;O++){let I=y[O][b],U=y[O+1][b],z=y[O+1][b+1],X=y[O][b+1];(t>0||O!==0)&&(u.push(I,U,X),A+=3),(e>0||O!==r-1)&&(u.push(U,z,X),A+=3)}c.addGroup(f,A,0),f+=A}function w(v){let E=g,A=new Kt,x=new G,b=0,O=v===!0?t:e,I=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*I,0),h.push(0,I,0),p.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let L=z/s*l+a,H=Math.cos(L),K=Math.sin(L);x.x=O*K,x.y=m*I,x.z=O*H,d.push(x.x,x.y,x.z),h.push(0,I,0),A.x=H*.5+.5,A.y=K*.5*I+.5,p.push(A.x,A.y),g++}for(let z=0;z<s;z++){let X=E+z,L=U+z;v===!0?u.push(L,L+1,X):u.push(L+1,L,X),b+=3}c.addGroup(f,b,v===!0?1:2),f+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},is=class n extends cr{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vo=class n extends xn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new G,v=new G,E=new G;for(let A=0;A<e.length;A+=3)p(e[A+0],w),p(e[A+1],v),p(e[A+2],E),l(w,v,E,_)}function l(_,w,v,E){let A=E+1,x=[];for(let b=0;b<=A;b++){x[b]=[];let O=_.clone().lerp(v,b/A),I=w.clone().lerp(v,b/A),U=A-b;for(let z=0;z<=U;z++)z===0&&b===A?x[b][z]=O:x[b][z]=O.clone().lerp(I,z/U)}for(let b=0;b<A;b++)for(let O=0;O<2*(A-b)-1;O++){let I=Math.floor(O/2);O%2===0?(h(x[b][I+1]),h(x[b+1][I]),h(x[b][I])):(h(x[b][I+1]),h(x[b+1][I+1]),h(x[b+1][I]))}}function c(_){let w=new G;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(_),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let _=new G;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let v=m(_)/2/Math.PI+.5,E=f(_)/Math.PI+.5;o.push(v,1-E)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let w=o[_+0],v=o[_+2],E=o[_+4],A=Math.max(w,v,E),x=Math.min(w,v,E);A>.9&&x<.1&&(w<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function p(_,w){let v=_*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){let _=new G,w=new G,v=new G,E=new G,A=new Kt,x=new Kt,b=new Kt;for(let O=0,I=0;O<r.length;O+=9,I+=6){_.set(r[O+0],r[O+1],r[O+2]),w.set(r[O+3],r[O+4],r[O+5]),v.set(r[O+6],r[O+7],r[O+8]),A.set(o[I+0],o[I+1]),x.set(o[I+2],o[I+3]),b.set(o[I+4],o[I+5]),E.copy(_).add(w).add(v).divideScalar(3);let U=m(E);y(A,I+0,_,U),y(x,I+2,w,U),y(b,I+4,v,U)}}function y(_,w,v,E){E<0&&_.x===1&&(o[w]=_.x-1),v.x===0&&v.z===0&&(o[w]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var So=class n extends vo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Mo=class n extends vo{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},un=class n extends xn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){let _=f*h-o;for(let w=0;w<c;w++){let v=w*d-r;g.push(v,-_,0),y.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let w=_+c*f,v=_+c*(f+1),E=_+1+c*(f+1),A=_+1+c*f;p.push(w,v,A),p.push(v,E,A)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ur=class n extends xn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,h=(e-t)/s,p=new G,g=new Kt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let y=0;y<s;y++){let m=y*(i+1);for(let f=0;f<i;f++){let _=f+m,w=_,v=_+i+1,E=_+i+2,A=_+1;a.push(w,v,A),a.push(v,E,A)}}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Xn=class n extends xn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new G,h=new G,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let _=[],w=f/i,v=o+w*a,E=t*Math.cos(v),A=Math.sqrt(t*t-E*E),x=0;f===0&&o===0?x=.5/e:f===i&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let O=b/e,I=s+O*r;d.x=-A*Math.cos(I),d.y=E,d.z=A*Math.sin(I),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(O+x,1-w),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<e;_++){let w=u[f][_+1],v=u[f][_],E=u[f+1][_],A=u[f+1][_+1];(f!==0||o>0)&&p.push(w,v,A),(f!==i-1||l<Math.PI)&&p.push(v,E,A)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bo=class n extends xn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new G,p=new G,g=new G;for(let y=0;y<=i;y++){let m=o+y/i*a;for(let f=0;f<=s;f++){let _=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(_),p.y=(t+e*Math.cos(m))*Math.sin(_),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let f=(s+1)*y+m-1,_=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(f,_,v),l.push(_,w,v)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Rs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if($d(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if($d(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function _n(n){let t={};for(let e=0;e<n.length;e++){let i=Rs(n[e]);for(let s in i)t[s]=i[s]}return t}function $d(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Yf={clone:Rs,merge:_n},Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Hg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Kt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qa=class extends qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var rn=class extends es{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=ml,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},tl=class extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},el=class extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $s(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Da(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ss=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nl=class extends ss{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mu:r=t,a=2*e-i;break;case gu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mu:o=t,l=2*i-e;break;case gu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,f=-h*m+2*h*y-h*g,_=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,w=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let E=0;E!==a;++E)r[E]=f*o[u+E]+_*o[c+E]+w*o[l+E]+v*o[d+E];return r}},il=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},sl=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rl=class extends ss{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let h=a*2,p=t-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],f=p*h+g*2,_=d[f],w=d[f+1],v=t*h+g*2,E=u[v],A=u[v+1],x=Yg(i,e,_,E,s);r[g]=Zf(x,y,w,A,m)}return r}};function Zf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function qg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Yg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Zf(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=qg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Fn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Da(t.settings)&&(i.settings={inTangents:$s(t.settings.inTangents,Array),outTangents:$s(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case Fa:e=this.InterpolantFactoryMethodSmooth;break;case fu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Fa;case this.InterpolantFactoryMethodBezier:return fu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Da(this.settings)&&(jd(this.settings.inTangents,t),jd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Da(this.settings)&&(Qd(this.settings.inTangents,t),Qd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&lg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[h+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)e[h+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Qd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Za;var rs=class extends Fn{constructor(t,e,i){super(t,e,i)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=oo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};ol.prototype.ValueTypeName="color";var al=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};al.prototype.ValueTypeName="number";var ll=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wo=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Fn{constructor(t,e,i){super(t,e,i)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=oo;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};cl.prototype.ValueTypeName="vector";var ul=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jf=new ul,hl=class{constructor(t){this.manager=t!==void 0?t:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=class extends Ye{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ao=class extends To{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},du=new ge,tf=new G,ef=new G,dl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(du,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(du)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ua=new G,Oa=new Hn,pi=new G,Eo=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ua,Oa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Oa,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ua,Oa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Oa,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new G,nf=new Kt,sf=new Kt,wn=class extends Eo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,nf,sf),e.subVectors(sf,nf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(so*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ws=class extends Eo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xu=class extends dl{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends To{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new xu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var js=-90,Qs=1,hr=class extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(js,Qs,t,e);s.layers=this.layers,this.add(s);let r=new wn(js,Qs,t,e);r.layers=this.layers,this.add(r);let o=new wn(js,Qs,t,e);o.layers=this.layers,this.add(o);let a=new wn(js,Qs,t,e);a.layers=this.layers,this.add(a);let l=new wn(js,Qs,t,e);l.layers=this.layers,this.add(l);let c=new wn(js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},fl=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ju="\\[\\]\\.:\\/",Zg=new RegExp("["+Ju+"]","g"),Ku="[^"+Ju+"]",Jg="[^"+Ju.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",Ku),$g=/(WCOD+)?/.source.replace("WCOD",Jg),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),Qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),tx=new RegExp("^"+Kg+$g+jg+Qg+"$"),ex=["material","materials","bones","map"],_u=class{constructor(t,e,i){let s=i||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zg,"")}static parseTrackName(t){let e=tx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=_u;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ab=new Float32Array(1);var rf=new ge,Ro=class{constructor(t,e,i=0,s=1/0){this.ray=new mo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(t,e=!0,i=[]){return yu(t,this,i,e),i.sort(of),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)yu(t[s],this,i,e);return i.sort(of),i}};function of(n,t){return n.distance-t.distance}function yu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)yu(r[o],t,e,!0)}}var nh=class nh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};nh.prototype.isMatrix2=!0;var vu=nh;function $u(n,t,e,i){let s=nx(i);switch(e){case Bu:return n*t;case Ml:return n*t/s.components*s.byteLength;case bl:return n*t/s.components*s.byteLength;case ls:return n*t*2/s.components*s.byteLength;case wl:return n*t*2/s.components*s.byteLength;case ku:return n*t*3/s.components*s.byteLength;case li:return n*t*4/s.components*s.byteLength;case Tl:return n*t*4/s.components*s.byteLength;case Po:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Do:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:case Rl:return Math.max(n,16)*Math.max(t,8)/4;case Al:case Cl:return Math.max(n,8)*Math.max(t,8)/2;case Il:case Ll:case Nl:case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pl:case Oo:case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kl:case $l:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ql:case tc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fo:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nx(n){switch(n){case Nn:case Du:return{byteLength:1,components:1};case mr:case Uu:case ai:return{byteLength:2,components:1};case vl:case Sl:return{byteLength:2,components:4};case oi:case yl:case Yn:return{byteLength:4,components:1};case Ou:case Fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function xp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cx(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x=`#ifdef USE_BATCHING
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
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bx=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nx=`#define PI 3.141592653589793
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
} // validated`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e_=`#ifdef USE_ENVMAP
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
#endif`,n_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
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
#endif`,a_=`uniform sampler2D dfgLUT;
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
}`,l_=`
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,__=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b_=`#if defined( USE_MORPHCOLORS )
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
#endif`,w_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,N_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z_=`float getShadowMask() {
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
}`,J_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform float backgroundBlurriness;
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
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
}`,gy=`#if DEPTH_PACKING == 3200
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
}`,xy=`#define DISTANCE
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
}`,_y=`#define DISTANCE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
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
}`,My=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#define LAMBERT
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
}`,Ay=`#define LAMBERT
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
}`,Ey=`#define MATCAP
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
}`,Cy=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,Iy=`#define NORMAL
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
}`,Ly=`#define PHONG
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
}`,Py=`#define PHONG
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
}`,Ny=`#define STANDARD
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
}`,Dy=`#define STANDARD
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
}`,Uy=`#define TOON
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
}`,Oy=`#define TOON
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
}`,Fy=`uniform float size;
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
}`,By=`uniform vec3 diffuse;
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
}`,ky=`#include <common>
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
}`,zy=`uniform vec3 color;
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
}`,Gy=`uniform float rotation;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:ux,alphahash_pars_fragment:hx,alphamap_fragment:dx,alphamap_pars_fragment:fx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:xx,batching_pars_vertex:_x,batching_vertex:yx,begin_vertex:vx,beginnormal_vertex:Sx,bsdfs:Mx,iridescence_fragment:bx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Cx,color_fragment:Rx,color_pars_fragment:Ix,color_pars_vertex:Lx,color_vertex:Px,common:Nx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Ox,emissivemap_fragment:Fx,emissivemap_pars_fragment:Bx,colorspace_fragment:kx,colorspace_pars_fragment:zx,envmap_fragment:Gx,envmap_common_pars_fragment:Vx,envmap_pars_fragment:Hx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:e_,envmap_vertex:Xx,fog_vertex:qx,fog_pars_vertex:Yx,fog_fragment:Zx,fog_pars_fragment:Jx,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:$x,lights_lambert_fragment:jx,lights_lambert_pars_fragment:Qx,lights_pars_begin:t_,lights_toon_fragment:n_,lights_toon_pars_fragment:i_,lights_phong_fragment:s_,lights_phong_pars_fragment:r_,lights_physical_fragment:o_,lights_physical_pars_fragment:a_,lights_fragment_begin:l_,lights_fragment_maps:c_,lights_fragment_end:u_,lightprobes_pars_fragment:h_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:x_,map_particle_fragment:__,map_particle_pars_fragment:y_,metalnessmap_fragment:v_,metalnessmap_pars_fragment:S_,morphinstance_vertex:M_,morphcolor_vertex:b_,morphnormal_vertex:w_,morphtarget_pars_vertex:T_,morphtarget_vertex:A_,normal_fragment_begin:E_,normal_fragment_maps:C_,normal_pars_fragment:R_,normal_pars_vertex:I_,normal_vertex:L_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:N_,clearcoat_normal_fragment_maps:D_,clearcoat_pars_fragment:U_,iridescence_pars_fragment:O_,opaque_fragment:F_,packing:B_,premultiplied_alpha_fragment:k_,project_vertex:z_,dithering_fragment:G_,dithering_pars_fragment:V_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:Y_,shadowmask_pars_fragment:Z_,skinbase_vertex:J_,skinning_pars_vertex:K_,skinning_vertex:$_,skinnormal_vertex:j_,specularmap_fragment:Q_,specularmap_pars_fragment:ty,tonemapping_fragment:ey,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:sy,uv_pars_fragment:ry,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:ly,background_vert:cy,background_frag:uy,backgroundCube_vert:hy,backgroundCube_frag:dy,cube_vert:fy,cube_frag:py,depth_vert:my,depth_frag:gy,distance_vert:xy,distance_frag:_y,equirect_vert:yy,equirect_frag:vy,linedashed_vert:Sy,linedashed_frag:My,meshbasic_vert:by,meshbasic_frag:wy,meshlambert_vert:Ty,meshlambert_frag:Ay,meshmatcap_vert:Ey,meshmatcap_frag:Cy,meshnormal_vert:Ry,meshnormal_frag:Iy,meshphong_vert:Ly,meshphong_frag:Py,meshphysical_vert:Ny,meshphysical_frag:Dy,meshtoon_vert:Uy,meshtoon_frag:Oy,points_vert:Fy,points_frag:By,shadow_vert:ky,shadow_frag:zy,sprite_vert:Gy,sprite_frag:Vy},At={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},vi={basic:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:_n([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:_n([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new qt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:_n([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:_n([At.points,At.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:_n([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:_n([At.common,At.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:_n([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:_n([At.sprite,At.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:_n([At.common,At.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:_n([At.lights,At.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};vi.physical={uniforms:_n([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var ic={r:0,b:0,g:0},Hy=new ge,_p=new Yt;_p.set(-1,0,0,0,1,0,0,0,1);function Wy(n,t,e,i,s,r){let o=new qt(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let v=_.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(_){let w=!1,v=p(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,w){let v=p(w);v&&v.isCubeTexture?(c===void 0&&(c=new Ft(new si(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Rs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_p),c.material.toneMapped=he.getTransfer(v.colorSpace)!==ye,(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ft(new un(2,2),new qn({name:"BackgroundMaterial",uniforms:Rs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,w){_.getRGB(ic,Zu(n)),e.buffers.color.setClear(ic.r,ic.g,ic.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:y,dispose:f}}function Xy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(U,z,X,L,H){let K=!1,Z=d(U,L,X,z);r!==Z&&(r=Z,c(r.object)),K=p(U,L,X,H),K&&g(U,L,X,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(U,z,X,L),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,z,X,L){let H=L.wireframe===!0,K=i[z.id];K===void 0&&(K={},i[z.id]=K);let Z=U.isInstancedMesh===!0?U.id:0,T=K[Z];T===void 0&&(T={},K[Z]=T);let C=T[X.id];C===void 0&&(C={},T[X.id]=C);let P=C[H];return P===void 0&&(P=h(l()),C[H]=P),P}function h(U){let z=[],X=[],L=[];for(let H=0;H<e;H++)z[H]=0,X[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:L,object:U,attributes:{},index:null}}function p(U,z,X,L){let H=r.attributes,K=z.attributes,Z=0,T=X.getAttributes();for(let C in T)if(T[C].location>=0){let V=H[C],tt=K[C];if(tt===void 0&&(C==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),C==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor)),V===void 0||V.attribute!==tt||tt&&V.data!==tt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==L}function g(U,z,X,L){let H={},K=z.attributes,Z=0,T=X.getAttributes();for(let C in T)if(T[C].location>=0){let V=K[C];V===void 0&&(C==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),C==="instanceColor"&&U.instanceColor&&(V=U.instanceColor));let tt={};tt.attribute=V,V&&V.data&&(tt.data=V.data),H[C]=tt,Z++}r.attributes=H,r.attributesNum=Z,r.index=L}function y(){let U=r.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function m(U){f(U,0)}function f(U,z){let X=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;X[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),H[U]!==z&&(n.vertexAttribDivisor(U,z),H[U]=z)}function _(){let U=r.newAttributes,z=r.enabledAttributes;for(let X=0,L=z.length;X<L;X++)z[X]!==U[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function w(U,z,X,L,H,K,Z){Z===!0?n.vertexAttribIPointer(U,z,X,H,K):n.vertexAttribPointer(U,z,X,L,H,K)}function v(U,z,X,L){y();let H=L.attributes,K=X.getAttributes(),Z=z.defaultAttributeValues;for(let T in K){let C=K[T];if(C.location>=0){let P=H[T];if(P===void 0&&(T==="instanceMatrix"&&U.instanceMatrix&&(P=U.instanceMatrix),T==="instanceColor"&&U.instanceColor&&(P=U.instanceColor)),P!==void 0){let V=P.normalized,tt=P.itemSize,dt=t.get(P);if(dt===void 0)continue;let W=dt.buffer,ot=dt.type,nt=dt.bytesPerElement,_t=ot===n.INT||ot===n.UNSIGNED_INT||P.gpuType===yl;if(P.isInterleavedBufferAttribute){let yt=P.data,Ht=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Ue=P.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Bt=0;Bt<C.locationSize;Bt++)f(C.location+Bt,yt.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Bt=0;Bt<C.locationSize;Bt++)m(C.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Bt=0;Bt<C.locationSize;Bt++)w(C.location+Bt,tt/C.locationSize,ot,V,Ht*nt,(Ue+tt/C.locationSize*Bt)*nt,_t)}else{if(P.isInstancedBufferAttribute){for(let yt=0;yt<C.locationSize;yt++)f(C.location+yt,P.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let yt=0;yt<C.locationSize;yt++)m(C.location+yt);n.bindBuffer(n.ARRAY_BUFFER,W);for(let yt=0;yt<C.locationSize;yt++)w(C.location+yt,tt/C.locationSize,ot,V,tt*nt,tt/C.locationSize*yt*nt,_t)}}else if(Z!==void 0){let V=Z[T];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(C.location,V);break;case 3:n.vertexAttrib3fv(C.location,V);break;case 4:n.vertexAttrib4fv(C.location,V);break;default:n.vertexAttrib1fv(C.location,V)}}}}_()}function E(){O();for(let U in i){let z=i[U];for(let X in z){let L=z[X];for(let H in L){let K=L[H];for(let Z in K)u(K[Z].object),delete K[Z];delete L[H]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let X in z){let L=z[X];for(let H in L){let K=L[H];for(let Z in K)u(K[Z].object),delete K[Z];delete L[H]}}delete i[U.id]}function x(U){for(let z in i){let X=i[z];for(let L in X){let H=X[L];if(H[U.id]===void 0)continue;let K=H[U.id];for(let Z in K)u(K[Z].object),delete K[Z];delete H[U.id]}}}function b(U){for(let z in i){let X=i[z],L=U.isInstancedMesh===!0?U.id:0,H=X[L];if(H!==void 0){for(let K in H){let Z=H[K];for(let T in Z)u(Z[T].object),delete Z[T];delete H[K]}delete X[L],Object.keys(X).length===0&&delete i[z]}}}function O(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function qy(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==li&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Nn&&x!==Yn&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:A}}function Zy(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ni,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,w=_*4,v=f.clippingState||null;l.value=v,v=u(g,h,w,p);for(let E=0;E!==w;++E)v[E]=e[E];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,v=p;w!==y;++w,v+=4)o.copy(d[w]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Go=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new xo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new si(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ts});r.uniforms.tEquirect.value=e;let o=new Ft(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=Tn),new hr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Kf=256,Jy=3,Ky=20,yp=256,vp=16,$y=3,jy=new G,Qy=new qt,rc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hr(1,10,null),this._boxMesh=new Ft(new si(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=jy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(Qy));let m=new hr(i,s,u);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=g,t.background=y,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Kf,qu(t))}_fromTexture(t,e){t.mapping===Es||t.mapping===pr?this._setSize(t.image.length===0?Kf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=$f(t,!1,!1),i=Math.log2(t)-Jy;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=$f(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Es||t.mapping===pr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=tv(),this._integrationMaterial=ev());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/vp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-$y)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(yp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=nv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function $f(n,t,e){return new Go(n,{minFilter:ri,generateMipmaps:t,type:ai,colorSpace:ao,depthBuffer:e})}function Vo(n,t,e){return new qn({name:n,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:En,blending:Ts,depthTest:!1,depthWrite:!1})}function tv(){return Vo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yp}u

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
	`)}function ev(){return Vo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vp}},`

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
	`)}function nv(){return Vo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ky}
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
	`)}function jf(){return Vo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Qf(){return Vo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function iv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===gl||p===xl)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Go(g.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,g=p===gl||p===xl,y=p===Es||p===pr;if(g||y){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new rc(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return g&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new rc(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===gl?h.mapping=Es:p===xl&&(h.mapping=pr),h}function l(h){let p=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&io("WebGLRenderer: "+i+" extension not supported."),s}}}function rv(n,t,e,i){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),e.memory.geometries++),y}function u(g){let y=g.attributes;for(let m in y)t.update(y[m],n.ARRAY_BUFFER)}function d(g){let y=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let _=y!==null?y.array.length:m.array.length/3-1,w=m.count>=65535?po:fo,v=new w(Math.ceil(_/3)*6,1),E=v.array;if(y!==null){let x=y.array;f=y.version;for(let b=0,O=0;b<_;b+=3){let I=x[b+0],U=x[b+1],z=x[b+2];E[O++]=I,E[O++]=U,E[O++]=U,E[O++]=z,E[O++]=z,E[O++]=I}}else{f=m.version;for(let x=0,b=0;x<_;x+=3){let O=x+0,I=x+1,U=x+2;E[b++]=O,E[b++]=I,E[b++]=I,E[b++]=U,E[b++]=U,E[b++]=O}}v.version=f;let A=r.get(g);A&&t.remove(A),r.set(g,v)}function h(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&d(g)}else d(g);return r.get(g)}function p(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function ov(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),e.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),e.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=h[m];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function av(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lv(n,t,e){let i=new WeakMap,s=new Oe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let O=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=a.attributes.position.count*w,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*E*4*d),x=new uo(A,v,E,d);x.type=Yn,x.needsUpdate=!0;let b=w*4;for(let I=0;I<d;I++){let U=m[I],z=f[I],X=_[I],L=v*E*4*I;for(let H=0;H<U.count;H++){let K=H*b;p===!0&&(s.fromBufferAttribute(U,H),A[L+K+0]=s.x,A[L+K+1]=s.y,A[L+K+2]=s.z,A[L+K+3]=0),g===!0&&(s.fromBufferAttribute(z,H),A[L+K+4]=s.x,A[L+K+5]=s.y,A[L+K+6]=s.z,A[L+K+7]=0),y===!0&&(s.fromBufferAttribute(X,H),A[L+K+8]=s.x,A[L+K+9]=s.y,A[L+K+10]=s.z,A[L+K+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new Kt(v,E)},i.set(a,h),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function cv(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var uv={[Au]:"LINEAR_TONE_MAPPING",[Eu]:"REINHARD_TONE_MAPPING",[Cu]:"CINEON_TONE_MAPPING",[Ru]:"ACES_FILMIC_TONE_MAPPING",[Lu]:"AGX_TONE_MAPPING",[Pu]:"NEUTRAL_TONE_MAPPING",[Iu]:"CUSTOM_TONE_MAPPING"};function hv(n,t,e,i,s,r){let o=new On(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new xn;u.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new _e([0,2,0,0,2,0],2));let d=new Qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ft(u,d),p=new ws(-1,1,1,-1,0,1),g=null,y=null,m=!1,f,_=null,w=[],v=!1;this.setSize=function(E,A){o.setSize(E,A),a!==null&&a.setSize(E,A),l!==null&&l.setSize(E,A);for(let x=0;x<w.length;x++){let b=w[x];b.setSize&&b.setSize(E,A)}},this.setEffects=function(E){w=E,v=w.length>0&&w[0].isRenderPass===!0;let A=o.width,x=o.height;w.length>0&&a===null&&(a=new On(A,x,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new On(A,x,{type:ai,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(O=>O.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Di(A,x),r===!0&&(c.format=Oi,c.type=Cs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let O=0;O<w.length;O++){let I=w[O];I.setSize&&I.setSize(A,x),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(E,A){if(m||E.toneMapping===_i&&w.length===0)return!1;if(_=A,A!==null){let x=A.width,b=A.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return v===!1&&E.setRenderTarget(o),f=E.toneMapping,E.toneMapping=_i,!0},this.hasRenderPass=function(){return v},this.end=function(E,A){E.toneMapping=f,m=!0;let x=o,b=a;for(let O=0;O<w.length;O++){let I=w[O];I.enabled!==!1&&(I.render(E,b,x,A),I.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(g!==E.outputColorSpace||y!==E.toneMapping){g=E.outputColorSpace,y=E.toneMapping,d.defines={},he.getTransfer(g)===ye&&(d.defines.SRGB_TRANSFER="");let O=uv[y];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(h,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Sp=new An,Mp=new Di(1,1),bp=new _o(1),wp=new uo,Tp=new $a,Ap=new xo,tp=[],ep=[],np=new Float32Array(16),ip=new Float32Array(9),sp=new Float32Array(4);function yr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=tp[s];if(r===void 0&&(r=new Float32Array(s),tp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ac(n,t){let e=ep[t];e===void 0&&(e=new Int32Array(t),ep[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function pv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function gv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;sp.set(i),n.uniformMatrix2fv(this.addr,!1,sp),Qe(e,i)}}function xv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;ip.set(i),n.uniformMatrix3fv(this.addr,!1,ip),Qe(e,i)}}function _v(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,i))return;np.set(i),n.uniformMatrix4fv(this.addr,!1,np),Qe(e,i)}}function yv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function vv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function Sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function Mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function bv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function Tv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function Av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function lc(n){return n.version===0&&(n.compareFunction=Vu,n.needsUpdate=!0),n}function Ev(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=lc(Mp):r=Sp,e.setTexture2D(t||r,s)}function Cv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Tp,s)}function Rv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=lc(bp):r=Ap,e.setTextureCube(t||r,s)}function Iv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wp,s)}function Lv(n){switch(n){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return vv;case 35668:case 35672:return Sv;case 35669:case 35673:return Mv;case 5125:return bv;case 36294:return wv;case 36295:return Tv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Pv(n,t){n.uniform1fv(this.addr,t)}function Nv(n,t){let e=yr(t,this.size,2);n.uniform2fv(this.addr,e)}function Dv(n,t){let e=yr(t,this.size,3);n.uniform3fv(this.addr,e)}function Uv(n,t){let e=yr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ov(n,t){let e=yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Fv(n,t){let e=yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Bv(n,t){let e=yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function kv(n,t){n.uniform1iv(this.addr,t)}function zv(n,t){n.uniform2iv(this.addr,t)}function Gv(n,t){n.uniform3iv(this.addr,t)}function Vv(n,t){n.uniform4iv(this.addr,t)}function Hv(n,t){n.uniform1uiv(this.addr,t)}function Wv(n,t){n.uniform2uiv(this.addr,t)}function Xv(n,t){n.uniform3uiv(this.addr,t)}function qv(n,t){n.uniform4uiv(this.addr,t)}function Yv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=lc(Mp):o=Sp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Zv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tp,r[o])}function Jv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=lc(bp):o=Ap;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Kv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wp,r[o])}function $v(n){switch(n){case 5126:return Pv;case 35664:return Nv;case 35665:return Dv;case 35666:return Uv;case 35674:return Ov;case 35675:return Fv;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Gv;case 35669:case 35673:return Vv;case 5125:return Hv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Kv}}var rh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lv(e.type)}},oh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$v(e.type)}},ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},ih=/(\w+)(\])?(\[|\.)?/g;function rp(n,t){n.seq.push(t),n.map[t.id]=t}function jv(n,t,e){let i=n.name,s=i.length;for(ih.lastIndex=0;;){let r=ih.exec(i),o=ih.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rp(e,c===void 0?new rh(a,n,t):new oh(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new ah(a),rp(e,d)),e=d}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function op(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Qv=37297,tS=0;function eS(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ap=new Yt;function nS(n){he._getMatrix(ap,he.workingColorSpace,n);let t=`mat3( ${ap.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case lo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+eS(n.getShaderSource(t),a)}else return r}function iS(n,t){let e=nS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var sS={[Au]:"Linear",[Eu]:"Reinhard",[Cu]:"Cineon",[Ru]:"ACESFilmic",[Lu]:"AgX",[Pu]:"Neutral",[Iu]:"Custom"};function rS(n,t){let e=sS[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sc=new G;function oS(){he.getLuminanceCoefficients(sc);let n=sc.x.toFixed(4),t=sc.y.toFixed(4),e=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function lS(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cS(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zo(n){return n!==""}function cp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function up(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var uS=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(n){return n.replace(uS,hS)}function hS(n,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lh(e)}var dS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(n){return n.replace(dS,fS)}function fS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var pS={[Io]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function mS(n){return pS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gS={[pr]:"ENVMAP_MODE_REFRACTION"};function xS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _S={[ml]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[Rf]:"ENVMAP_BLENDING_ADD"};function yS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_S[n.combine]||"ENVMAP_BLENDING_NONE"}function vS(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=mS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=xS(e),d=yS(e),h=aS(e),p=lS(r),g=s.createProgram(),y,m,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(zo).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(zo).join(`
`),m.length>0&&(m+=`
`)):(y=[dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),m=[dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?ie.tonemapping_pars_fragment:"",e.toneMapping!==_i?rS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,iS("linearToOutputTexel",e.outputColorSpace),oS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zo).join(`
`)),o=lh(o),o=cp(o,e),o=up(o,e),a=lh(a),a=cp(a,e),a=up(a,e),o=hp(o),a=hp(a),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=f+y+o,w=f+m+a,v=op(s,s.VERTEX_SHADER,_),E=op(s,s.FRAGMENT_SHADER,w);s.attachShader(g,v),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(I){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(v)||"",X=s.getShaderInfoLog(E)||"",L=U.trim(),H=z.trim(),K=X.trim(),Z=!0,T=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,v,E);else{let C=lp(s,v,"vertex"),P=lp(s,E,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+C+`
`+P)}else L!==""?zt("WebGLProgram: Program Info Log:",L):(H===""||K==="")&&(T=!1);T&&(I.diagnostics={runnable:Z,programLog:L,vertexShader:{log:H,prefix:y},fragmentShader:{log:K,prefix:m}})}s.deleteShader(v),s.deleteShader(E),x=new _r(s,g),b=cS(s,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,Qv)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=E,this}var SS=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new uh(t),e.set(t,i)),i}},uh=class{constructor(t){this.id=SS++,this.code=t,this.usedTimes=0}};function MS(n){return n===ls||n===Oo||n===Fo}function bS(n,t,e,i,s,r){let o=new or,a=new ch,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,O,I,U,z){let X=I.fog,L=U.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||H,K),T=h[x.type],C=i.precision;x.precision!==null&&(C=i.getMaxPrecision(x.precision),C!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",C,"instead."));let P=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,V=P!==void 0?P.length:0,tt=0;L.morphAttributes.position!==void 0&&(tt=1),L.morphAttributes.normal!==void 0&&(tt=2),L.morphAttributes.color!==void 0&&(tt=3);let dt,W,ot,nt;if(T){let Tt=vi[T];dt=Tt.vertexShader,W=Tt.fragmentShader}else{dt=x.vertexShader,W=x.fragmentShader;let Tt=a.getVertexShaderStage(x),be=a.getFragmentShaderStage(x);a.update(x,Tt,be),ot=Tt.id,nt=be.id}let _t=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Ht=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,Bt=!!x.map,Jt=!!x.matcap,fe=!!Z,Qt=fe&&Z.isPMREMTexture===!0,Fe=!!x.aoMap,Be=!!x.lightMap,He=!!x.bumpMap&&x.wireframe===!1,k=!!x.normalMap,lt=!!x.displacementMap,ct=!!x.emissiveMap,It=!!x.metalnessMap,ee=!!x.roughnessMap,$t=x.anisotropy>0,F=x.clearcoat>0,oe=x.diffuseRoughness>0,Wt=x.dispersion>0,le=x.retroreflectivity>0,ft=x.iridescence>0,Me=x.sheen>0,Ut=x.transmission>0,kt=$t&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,S=F&&!!x.clearcoatNormalMap,q=F&&!!x.clearcoatRoughnessMap,ut=oe&&!!x.diffuseRoughnessMap,rt=ft&&!!x.iridescenceMap,mt=ft&&!!x.iridescenceThicknessMap,bt=Me&&!!x.sheenColorMap,et=Me&&!!x.sheenRoughnessMap,it=!!x.specularMap,vt=!!x.specularColorMap,N=!!x.specularIntensityMap,st=Ut&&!!x.transmissionMap,Q=Ut&&!!x.thicknessMap,St=!!x.gradientMap,pt=!!x.alphaMap,gt=x.alphaTest>0,Dt=!!x.alphaHash,ne=!!x.extensions,ht=_i;x.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ht=n.toneMapping);let Ot=Qt?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,te={shaderID:T,shaderType:x.type,shaderName:x.name,vertexShader:dt,fragmentShader:W,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:C,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&U.instanceColor!==null,instancingMorph:Ht&&U.morphTexture!==null,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:Jt,envMap:fe,envMapMode:fe&&Z.mapping,envMapPMREM:Qt,envMapMaxLod:Qt?Ot.length-1:null,envMapSize:Qt?Ot[0].width:null,aoMap:Fe,lightMap:Be,bumpMap:He,normalMap:k,displacementMap:lt,emissiveMap:ct,normalMapObjectSpace:k&&x.normalMapType===Pf,normalMapTangentSpace:k&&x.normalMapType===nc,packedNormalMap:k&&x.normalMapType===nc&&MS(x.normalMap.format),metalnessMap:It,roughnessMap:ee,anisotropy:$t,anisotropyMap:kt,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:q,diffuseRoughness:oe,diffuseRoughnessMap:ut,dispersion:Wt,retroreflection:le,iridescence:ft,iridescenceMap:rt,iridescenceThicknessMap:mt,sheen:Me,sheenColorMap:bt,sheenRoughnessMap:et,specularMap:it,specularColorMap:vt,specularIntensityMap:N,transmission:Ut,transmissionMap:st,thicknessMap:Q,gradientMap:St,opaque:x.transparent===!1&&x.blending===fr&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:gt,alphaHash:Dt,combine:x.combine,mapUv:Bt&&p(x.map.channel),aoMapUv:Fe&&p(x.aoMap.channel),lightMapUv:Be&&p(x.lightMap.channel),bumpMapUv:He&&p(x.bumpMap.channel),normalMapUv:k&&p(x.normalMap.channel),displacementMapUv:lt&&p(x.displacementMap.channel),emissiveMapUv:ct&&p(x.emissiveMap.channel),metalnessMapUv:It&&p(x.metalnessMap.channel),roughnessMapUv:ee&&p(x.roughnessMap.channel),anisotropyMapUv:kt&&p(x.anisotropyMap.channel),clearcoatMapUv:R&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:et&&p(x.sheenRoughnessMap.channel),specularMapUv:it&&p(x.specularMap.channel),specularColorMapUv:vt&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:st&&p(x.transmissionMap.channel),thicknessMapUv:Q&&p(x.thicknessMap.channel),alphaMapUv:pt&&p(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(k||$t),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(Bt||pt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&k===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:tt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:ct&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||Ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)b.push(O),b.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(m(b,x),f(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function f(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let b=h[x.type],O;if(b){let I=vi[b];O=Yf.clone(I.uniforms)}else O=x.uniforms;return O}function w(x,b){let O=u.get(b);return O!==void 0?++O.usedTimes:(O=new vS(n,b,x,s),c.push(O),u.set(b,O)),O}function v(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:_,acquireProgram:w,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:A}}function wS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function TS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function fp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,y,m,f){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},n[t]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=g,_.materialVariant=o(h),_.groupOrder=y,_.renderOrder=h.renderOrder,_.z=m,_.group=f),t++,_}function l(h,p,g,y,m,f,_){_.reversedDepth===!0&&(m=-m);let w=a(h,p,g,y,m,f);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(h,p,g,y,m,f){let _=a(h,p,g,y,m,f);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function u(h,p){e.length>1&&e.sort(h||TS),i.length>1&&i.sort(p||fp),s.length>1&&s.sort(p||fp)}function d(){for(let h=t,p=n.length;h<p;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function AS(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new pp,n.set(i,[o])):s>=r.length?(o=new pp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ES(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new qt};break;case"SpotLight":e={position:new G,direction:new G,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function CS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var RS=0;function IS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function LS(n){let t=new ES,e=CS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new ge,o=new ge;function a(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,_=0,w=0,v=0,E=0,A=0,x=0,b=0,O=0,I=0;c.sort(IS);for(let z=0,X=c.length;z<X;z++){let L=c[z],H=L.color,K=L.intensity,Z=L.distance,T=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ls?T=L.shadow.map.texture:T=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=H.r*K,d+=H.g*K,h+=H.b*K;else if(L.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(L.sh.coefficients[C],K);I++}else if(L.isSunLight){let C=t.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let P=L.shadow,V=e.get(L);V.shadowIntensity=P.intensity,V.shadowBias=P.bias,V.shadowNormalBias=P.normalBias,V.shadowRadius=P.radius,V.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),i.sunShadow[g]=V,i.sunShadowMap[g]=T;let tt=P.getViewportCount();for(let dt=0;dt<tt;dt++)i.sunShadowMatrix[y+dt]=P.getMatrix(dt),i.sunShadowCascade[y+dt]=P._cascadeData[dt];y+=tt,g++}i.sun[p]=C,p++}else if(L.isDirectionalLight){let C=t.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let P=L.shadow,V=e.get(L);V.shadowIntensity=P.intensity,V.shadowBias=P.bias,V.shadowNormalBias=P.normalBias,V.shadowRadius=P.radius,V.shadowMapSize=P.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=T,i.directionalShadowMatrix[m]=L.shadow.matrix,E++}i.directional[m]=C,m++}else if(L.isSpotLight){let C=t.get(L);C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(H).multiplyScalar(K),C.distance=Z,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,i.spot[_]=C;let P=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,P.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[_]=P.matrix,L.castShadow){let V=e.get(L);V.shadowIntensity=P.intensity,V.shadowBias=P.bias,V.shadowNormalBias=P.normalBias,V.shadowRadius=P.radius,V.shadowMapSize=P.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=T,x++}_++}else if(L.isRectAreaLight){let C=t.get(L);C.color.copy(H).multiplyScalar(K),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=C,w++}else if(L.isPointLight){let C=t.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),C.distance=L.distance,C.decay=L.decay,L.castShadow){let P=L.shadow,V=e.get(L);V.shadowIntensity=P.intensity,V.shadowBias=P.bias,V.shadowNormalBias=P.normalBias,V.shadowRadius=P.radius,V.shadowMapSize=P.mapSize,V.shadowCameraNear=P.camera.near,V.shadowCameraFar=P.camera.far,i.pointShadow[f]=V,i.pointShadowMap[f]=T,i.pointShadowMatrix[f]=L.shadow.matrix,A++}i.point[f]=C,f++}else if(L.isHemisphereLight){let C=t.get(L);C.skyColor.copy(L.color).multiplyScalar(K),C.groundColor.copy(L.groundColor).multiplyScalar(K),i.hemi[v]=C,v++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==_||U.rectAreaLength!==w||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==E||U.numPointShadows!==A||U.numSpotShadows!==x||U.numSpotMaps!==b||U.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=w,i.point.length=f,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-O,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=I,U.sunLength=p,U.directionalLength=m,U.pointLength=f,U.spotLength=_,U.rectAreaLength=w,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=E,U.numPointShadows=A,U.numSpotShadows=x,U.numSpotMaps=b,U.numLightProbes=I,i.version=RS++)}function l(c,u){let d=0,h=0,p=0,g=0,y=0,m=0,f=u.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){let v=c[_];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(v.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function mp(n){let t=new LS(n),e=[],i=[],s=[];function r(d){u.camera=d,e.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function PS(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mp(n),t.set(s,[a])):r>=o.length?(a=new mp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var NS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DS=`uniform sampler2D shadow_pass;
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
}`,US=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],OS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],gp=new ge,ko=new G,sh=new G;function FS(n,t,e){let i=new ns,s=new Kt,r=new Kt,o=new Oe,a=new tl,l=new el,c={},u=e.maxTextureSize,d={[as]:En,[En]:as,[on]:on},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:NS,fragmentShader:DS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new xn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ft(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(A,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===cf&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Io);let O=n.getRenderTarget(),I=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ts),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=f!==this.type;X&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=A.length;L<H;L++){let K=A[L],Z=K.shadow;if(Z===void 0){zt("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let T=Z.getFrameExtents();s.multiply(T),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/T.x),s.x=r.x*T.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/T.y),s.y=r.y*T.y,Z.mapSize.y=r.y));let C=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=C,Z.map===null||X===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===dr){if(K.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new On(s.x,s.y,{format:ls,type:ai,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new Di(s.x,s.y,Yn),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=Pi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=sn,Z.map.depthTexture.magFilter=sn}else K.isPointLight?(Z.map=new Go(s.x),Z.map.depthTexture=new _o(s.x,oi)):(Z.map=new On(s.x,s.y),Z.map.depthTexture=new Di(s.x,s.y,oi)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=Pi,this.type===Io?(Z.map.depthTexture.compareFunction=C?Gu:zu,Z.map.depthTexture.minFilter=Tn,Z.map.depthTexture.magFilter=Tn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=sn,Z.map.depthTexture.magFilter=sn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let P=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,b);let V=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:b.layers;for(let tt=0;tt<P;tt++){let dt=Z.getCamera(tt);if(K.isPointLight){let W=Z.camera,ot=Z.matrix,nt=K.distance||W.far;nt!==W.far&&(W.far=nt,W.updateProjectionMatrix()),ko.setFromMatrixPosition(K.matrixWorld),W.position.copy(ko),sh.copy(W.position),sh.add(US[tt]),W.up.copy(OS[tt]),W.lookAt(sh),W.updateMatrixWorld(),ot.makeTranslation(-ko.x,-ko.y,-ko.z),gp.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(gp,W.coordinateSystem,W.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(Z.map),n.clear());let W=Z.getViewport(tt);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(o)}i=Z.getFrustum(tt),v(x,b,dt,K,V,this.type)}Z.isPointLightShadow!==!0&&this.type===dr&&_(Z,b),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(O,I,U)};function _(A,x){let b=t.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new On(s.x,s.y,{format:ls,type:ai}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(x,null,b,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(x,null,b,p,y,null)}function w(A,x,b,O){let I=null,U=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)I=U;else if(I=b.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=I.uuid,X=x.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let H=L[X];H===void 0&&(H=I.clone(),L[X]=H,x.addEventListener("dispose",E)),I=H}if(I.visible=x.visible,I.wireframe=x.wireframe,O===dr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:d[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=n.properties.get(I);z.light=b}return I}function v(A,x,b,O,I,U){if(A.visible===!1)return;if(A.layers.test(I)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===dr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let L=t.update(A),H=A.material;if(Array.isArray(H)){let K=L.groups;for(let Z=0,T=K.length;Z<T;Z++){let C=K[Z],P=H[C.materialIndex];if(P&&P.visible){let V=w(A,P,O,U);A.onBeforeShadow(n,A,x,b,L,V,C),n.renderBufferDirect(b,null,L,V,A,C),A.onAfterShadow(n,A,x,b,L,V,C)}}}else if(H.visible){let K=w(A,H,O,U);A.onBeforeShadow(n,A,x,b,L,K,null),n.renderBufferDirect(b,null,L,K,A,null),A.onAfterShadow(n,A,x,b,L,K,null)}}let X=A.children;for(let L=0,H=X.length;L<H;L++)v(X[L],x,b,O,I,U)}function E(A){A.target.removeEventListener("dispose",E);for(let b in c){let O=c[b],I=A.target.uuid;I in O&&(O[I].dispose(),delete O[I])}}}function BS(n,t){function e(){let N=!1,st=new Oe,Q=null,St=new Oe(0,0,0,0);return{setMask:function(pt){Q!==pt&&!N&&(n.colorMask(pt,pt,pt,pt),Q=pt)},setLocked:function(pt){N=pt},setClear:function(pt,gt,Dt,ne,ht){ht===!0&&(pt*=ne,gt*=ne,Dt*=ne),st.set(pt,gt,Dt,ne),St.equals(st)===!1&&(n.clearColor(pt,gt,Dt,ne),St.copy(st))},reset:function(){N=!1,Q=null,St.set(-1,0,0,0)}}}function i(){let N=!1,st=!1,Q=null,St=null,pt=null;return{setReversed:function(gt){if(st!==gt){let Dt=t.get("EXT_clip_control");gt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),st=gt;let ne=pt;pt=null,this.setClear(ne)}},getReversed:function(){return st},setTest:function(gt){gt?yt(n.DEPTH_TEST):Ht(n.DEPTH_TEST)},setMask:function(gt){Q!==gt&&!N&&(n.depthMask(gt),Q=gt)},setFunc:function(gt){if(st&&(gt=Hf[gt]),St!==gt){switch(gt){case ka:n.depthFunc(n.NEVER);break;case za:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case Xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=gt}},setLocked:function(gt){N=gt},setClear:function(gt){pt!==gt&&(pt=gt,st&&(gt=1-gt),n.clearDepth(gt))},reset:function(){N=!1,Q=null,St=null,pt=null,st=!1}}}function s(){let N=!1,st=null,Q=null,St=null,pt=null,gt=null,Dt=null,ne=null,ht=null;return{setTest:function(Ot){N||(Ot?yt(n.STENCIL_TEST):Ht(n.STENCIL_TEST))},setMask:function(Ot){st!==Ot&&!N&&(n.stencilMask(Ot),st=Ot)},setFunc:function(Ot,te,Tt){(Q!==Ot||St!==te||pt!==Tt)&&(n.stencilFunc(Ot,te,Tt),Q=Ot,St=te,pt=Tt)},setOp:function(Ot,te,Tt){(gt!==Ot||Dt!==te||ne!==Tt)&&(n.stencilOp(Ot,te,Tt),gt=Ot,Dt=te,ne=Tt)},setLocked:function(Ot){N=Ot},setClear:function(Ot){ht!==Ot&&(n.clearStencil(Ot),ht=Ot)},reset:function(){N=!1,st=null,Q=null,St=null,pt=null,gt=null,Dt=null,ne=null,ht=null}}}let r=new e,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,g=[],y=null,m=!1,f=null,_=null,w=null,v=null,E=null,A=null,x=null,b=new qt(0,0,0),O=0,I=!1,U=null,z=null,X=null,L=null,H=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,T=0,C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(C)[1]),Z=T>=1):C.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),Z=T>=2);let P=null,V={},tt=n.getParameter(n.SCISSOR_BOX),dt=n.getParameter(n.VIEWPORT),W=new Oe().fromArray(tt),ot=new Oe().fromArray(dt);function nt(N,st,Q,St){let pt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(N,gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<Q;Dt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(st+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return gt}let _t={};_t[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(n.DEPTH_TEST),o.setFunc(er),He(!1),k(Su),yt(n.CULL_FACE),Fe(Ts);function yt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ht(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ue(N,st){return h[N]!==st?(n.bindFramebuffer(N,st),h[N]=st,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=st),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(N,st){let Q=g,St=!1;if(N){Q=p.get(st),Q===void 0&&(Q=[],p.set(st,Q));let pt=N.textures;if(Q.length!==pt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Dt=pt.length;gt<Dt;gt++)Q[gt]=n.COLOR_ATTACHMENT0+gt;Q.length=pt.length,St=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,St=!0);St&&n.drawBuffers(Q)}function Jt(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let fe={[As]:n.FUNC_ADD,[hf]:n.FUNC_SUBTRACT,[df]:n.FUNC_REVERSE_SUBTRACT};fe[ff]=n.MIN,fe[pf]=n.MAX;let Qt={[mf]:n.ZERO,[gf]:n.ONE,[xf]:n.SRC_COLOR,[wu]:n.SRC_ALPHA,[bf]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[yf]:n.DST_ALPHA,[_f]:n.ONE_MINUS_SRC_COLOR,[Tu]:n.ONE_MINUS_SRC_ALPHA,[Mf]:n.ONE_MINUS_DST_COLOR,[vf]:n.ONE_MINUS_DST_ALPHA,[wf]:n.CONSTANT_COLOR,[Tf]:n.ONE_MINUS_CONSTANT_COLOR,[Af]:n.CONSTANT_ALPHA,[Ef]:n.ONE_MINUS_CONSTANT_ALPHA};function Fe(N,st,Q,St,pt,gt,Dt,ne,ht,Ot){if(N===Ts){m===!0&&(Ht(n.BLEND),m=!1);return}if(m===!1&&(yt(n.BLEND),m=!0),N!==uf){if(N!==f||Ot!==I){if((_!==As||E!==As)&&(n.blendEquation(n.FUNC_ADD),_=As,E=As),Ot)switch(N){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xt("WebGLState: Invalid blending: ",N);break}else switch(N){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mu:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",N);break}w=null,v=null,A=null,x=null,b.set(0,0,0),O=0,f=N,I=Ot}return}pt=pt||st,gt=gt||Q,Dt=Dt||St,(st!==_||pt!==E)&&(n.blendEquationSeparate(fe[st],fe[pt]),_=st,E=pt),(Q!==w||St!==v||gt!==A||Dt!==x)&&(n.blendFuncSeparate(Qt[Q],Qt[St],Qt[gt],Qt[Dt]),w=Q,v=St,A=gt,x=Dt),(ne.equals(b)===!1||ht!==O)&&(n.blendColor(ne.r,ne.g,ne.b,ht),b.copy(ne),O=ht),f=N,I=!1}function Be(N,st){N.side===on?Ht(n.CULL_FACE):yt(n.CULL_FACE);let Q=N.side===En;st&&(Q=!Q),He(Q),N.blending===fr&&N.transparent===!1?Fe(Ts):Fe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let St=N.stencilWrite;a.setTest(St),St&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):Ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(N){U!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),U=N)}function k(N){N!==af?(yt(n.CULL_FACE),N!==z&&(N===Su?n.cullFace(n.BACK):N===lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ht(n.CULL_FACE),z=N}function lt(N){N!==X&&(Z&&n.lineWidth(N),X=N)}function ct(N,st,Q){N?(yt(n.POLYGON_OFFSET_FILL),(L!==st||H!==Q)&&(L=st,H=Q,o.getReversed()&&(st=-st,Q=-Q),n.polygonOffset(st,Q))):Ht(n.POLYGON_OFFSET_FILL)}function It(N){N?yt(n.SCISSOR_TEST):Ht(n.SCISSOR_TEST)}function ee(N){N===void 0&&(N=n.TEXTURE0+K-1),P!==N&&(n.activeTexture(N),P=N)}function $t(N,st,Q){Q===void 0&&(P===null?Q=n.TEXTURE0+K-1:Q=P);let St=V[Q];St===void 0&&(St={type:void 0,texture:void 0},V[Q]=St),(St.type!==N||St.texture!==st)&&(P!==Q&&(n.activeTexture(Q),P=Q),n.bindTexture(N,st||_t[N]),St.type=N,St.texture=st)}function F(){let N=V[P];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Wt(){try{n.compressedTexImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function le(){try{n.texSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ft(){try{n.texSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Me(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function kt(){try{n.texStorage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function R(){try{n.texStorage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function S(){try{n.texImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function q(){try{n.texImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ut(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function rt(N,st){d[N]!==st&&(n.pixelStorei(N,st),d[N]=st)}function mt(N){W.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),W.copy(N))}function bt(N){ot.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ot.copy(N))}function et(N,st){let Q=c.get(st);Q===void 0&&(Q=new WeakMap,c.set(st,Q));let St=Q.get(N);St===void 0&&(St=n.getUniformBlockIndex(st,N.name),n.uniformBlockBinding(st,St,St),Q.set(N,St))}function it(N,st,Q){let pt=c.get(st).get(N);l[pt]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,pt,Q),l[pt]=Q)}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,V={},h={},l={},p=new WeakMap,g=[],y=null,m=!1,f=null,_=null,w=null,v=null,E=null,A=null,x=null,b=new qt(0,0,0),O=0,I=!1,U=null,z=null,X=null,L=null,H=null,W.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:Ht,bindFramebuffer:Ue,drawBuffers:Bt,useProgram:Jt,setBlending:Fe,setMaterial:Be,setFlipSided:He,setCullFace:k,setLineWidth:lt,setPolygonOffset:ct,setScissorTest:It,activeTexture:ee,bindTexture:$t,unbindTexture:F,compressedTexImage2D:oe,compressedTexImage3D:Wt,texImage2D:S,texImage3D:q,pixelStorei:rt,getParameter:ut,updateUBOMapping:et,uniformBlockBinding:it,texStorage2D:kt,texStorage3D:R,texSubImage2D:le,texSubImage3D:ft,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ut,scissor:mt,viewport:bt,reset:vt}}function kS(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,u=new WeakMap,d=new Set,h,p=new WeakMap,g=new Set,y=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,S){return m?new OffscreenCanvas(R,S):co("canvas")}function _(R,S,q){let ut=1,rt=kt(R);if((rt.width>q||rt.height>q)&&(ut=q/Math.max(rt.width,rt.height)),ut<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let mt=Math.floor(ut*rt.width),bt=Math.floor(ut*rt.height);h===void 0&&(h=f(mt,bt));let et=S?f(mt,bt):h;return et.width=mt,et.height=bt,et.getContext("2d").drawImage(R,0,0,mt,bt),zt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+mt+"x"+bt+")."),et}else return"data"in R&&zt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function w(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(R,S,q,ut,rt,mt=!1){if(R!==null){if(n[R]!==void 0)return n[R];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let bt;ut&&(bt=t.get("EXT_texture_norm16"),bt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=S;if(S===n.RED&&(q===n.FLOAT&&(et=n.R32F),q===n.HALF_FLOAT&&(et=n.R16F),q===n.UNSIGNED_BYTE&&(et=n.R8),q===n.UNSIGNED_SHORT&&bt&&(et=bt.R16_EXT),q===n.SHORT&&bt&&(et=bt.R16_SNORM_EXT)),S===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(et=n.R8UI),q===n.UNSIGNED_SHORT&&(et=n.R16UI),q===n.UNSIGNED_INT&&(et=n.R32UI),q===n.BYTE&&(et=n.R8I),q===n.SHORT&&(et=n.R16I),q===n.INT&&(et=n.R32I)),S===n.RG&&(q===n.FLOAT&&(et=n.RG32F),q===n.HALF_FLOAT&&(et=n.RG16F),q===n.UNSIGNED_BYTE&&(et=n.RG8),q===n.UNSIGNED_SHORT&&bt&&(et=bt.RG16_EXT),q===n.SHORT&&bt&&(et=bt.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(et=n.RG8UI),q===n.UNSIGNED_SHORT&&(et=n.RG16UI),q===n.UNSIGNED_INT&&(et=n.RG32UI),q===n.BYTE&&(et=n.RG8I),q===n.SHORT&&(et=n.RG16I),q===n.INT&&(et=n.RG32I)),S===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(et=n.RGB8UI),q===n.UNSIGNED_SHORT&&(et=n.RGB16UI),q===n.UNSIGNED_INT&&(et=n.RGB32UI),q===n.BYTE&&(et=n.RGB8I),q===n.SHORT&&(et=n.RGB16I),q===n.INT&&(et=n.RGB32I)),S===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),q===n.UNSIGNED_INT&&(et=n.RGBA32UI),q===n.BYTE&&(et=n.RGBA8I),q===n.SHORT&&(et=n.RGBA16I),q===n.INT&&(et=n.RGBA32I)),S===n.RGB&&(q===n.UNSIGNED_SHORT&&bt&&(et=bt.RGB16_EXT),q===n.SHORT&&bt&&(et=bt.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),S===n.RGBA){let it=mt?lo:he.getTransfer(rt);q===n.FLOAT&&(et=n.RGBA32F),q===n.HALF_FLOAT&&(et=n.RGBA16F),q===n.UNSIGNED_BYTE&&(et=it===ye?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&bt&&(et=bt.RGBA16_EXT),q===n.SHORT&&bt&&(et=bt.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(R,S){let q;return R?S===null||S===oi||S===Cs?q=n.DEPTH24_STENCIL8:S===Yn?q=n.DEPTH32F_STENCIL8:S===mr&&(q=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===oi||S===Cs?q=n.DEPTH_COMPONENT24:S===Yn?q=n.DEPTH_COMPONENT32F:S===mr&&(q=n.DEPTH_COMPONENT16),q}function b(R,S){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function O(R){let S=new WeakRef(R);i.get(R).__ref=S,g.add(S),y.register(R,S,S)}function I(R){let S=i.get(R).__ref;S!==void 0&&(g.delete(S),y.unregister(S))}function U(R){X(R.target)}function z(R){L(R.target)}function X(R){R.removeEventListener("dispose",U),I(R),K(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&d.delete(R)}function L(R){R.removeEventListener("dispose",z),I(R),T(R)}function H(){for(let R of g){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):X(S))}g.clear(),d.clear()}function K(R){let S=i.get(R);if(S.__webglInit===void 0)return;let q=R.source,ut=p.get(q);if(ut){let rt=ut[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&Z(R),Object.keys(ut).length===0&&p.delete(q)}i.remove(R)}function Z(R){let S=i.get(R);n.deleteTexture(S.__webglTexture);let q=R.source,ut=p.get(q);delete ut[S.__cacheKey],o.memory.textures--}function T(R){let S=i.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let q=R.depthTexture;if(q&&q.renderTarget===R&&X(q),R.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let mt=0;mt<S.__webglFramebuffer[rt].length;mt++)n.deleteFramebuffer(S.__webglFramebuffer[rt][mt]);else n.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)n.deleteFramebuffer(S.__webglFramebuffer[rt]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ut=R.textures;for(let rt=0,mt=ut.length;rt<mt;rt++){let bt=i.get(ut[rt]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(ut[rt])}i.remove(R)}let C=0;function P(){C=0}function V(){return C}function tt(R){C=R}function dt(){let R=C;return R>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function W(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ot(R,S){let q=i.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){let ut=R.image;if(ut===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(q,R,S);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+S)}function nt(R,S){let q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){Be(q,R,S);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+S)}function _t(R,S){let q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){Be(q,R,S);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+S)}function yt(R,S){let q=i.get(R);if(R.version>0&&q.__version!==R.version){He(q,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+S)}let Ht={[qa]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},Ue={[sn]:n.NEAREST,[If]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[_l]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},Bt={[Df]:n.NEVER,[Vu]:n.ALWAYS,[Uf]:n.LESS,[zu]:n.LEQUAL,[Of]:n.EQUAL,[Gu]:n.GEQUAL,[Ff]:n.GREATER,[Bf]:n.NOTEQUAL};function Jt(R,S){if(S.type===Yn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===_l||S.magFilter===Lo||S.magFilter===ri||S.minFilter===Tn||S.minFilter===_l||S.minFilter===Lo||S.minFilter===ri)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ht[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ht[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ht[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ue[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ue[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==Lo&&S.minFilter!==ri||S.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function fe(R,S){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",U),O(S));let ut=S.source,rt=p.get(ut);rt===void 0&&(rt={},p.set(ut,rt));let mt=W(S);if(mt!==R.__cacheKey){rt[mt]===void 0&&(rt[mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),rt[mt].usedTimes++;let bt=rt[R.__cacheKey];bt!==void 0&&(rt[R.__cacheKey].usedTimes--,bt.usedTimes===0&&Z(S)),R.__cacheKey=mt,R.__webglTexture=rt[mt].texture}return q}function Qt(R,S,q){return Math.floor(Math.floor(R/q)/S)}function Fe(R,S,q,ut){let mt=R.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,q,ut,S.data);else{mt.sort((N,st)=>N.start-st.start);let bt=0;for(let N=1;N<mt.length;N++){let st=mt[bt],Q=mt[N],St=st.start+st.count,pt=Qt(Q.start,S.width,4),gt=Qt(st.start,S.width,4);Q.start<=St+1&&pt===gt&&Qt(Q.start+Q.count-1,S.width,4)===pt?st.count=Math.max(st.count,Q.start+Q.count-st.start):(++bt,mt[bt]=Q)}mt.length=bt+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let N=0,st=mt.length;N<st;N++){let Q=mt[N],St=Math.floor(Q.start/4),pt=Math.ceil(Q.count/4),gt=St%S.width,Dt=Math.floor(St/S.width),ne=pt,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(n.TEXTURE_2D,0,gt,Dt,ne,ht,q,ut,S.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function Be(R,S,q){let ut=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ut=n.TEXTURE_3D);let rt=fe(R,S),mt=S.source;e.bindTexture(ut,R.__webglTexture,n.TEXTURE0+q);let bt=i.get(mt);if(mt.version!==bt.__version||rt===!0){if(e.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ht=he.getPrimaries(he.workingColorSpace),Ot=S.colorSpace===Fi?null:he.getPrimaries(S.colorSpace),te=S.colorSpace===Fi||ht===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let it=_(S.image,!1,s.maxTextureSize);it=Ut(S,it);let vt=r.convert(S.format,S.colorSpace),N=r.convert(S.type),st=A(S.internalFormat,vt,N,S.normalized,S.colorSpace,S.isVideoTexture);Jt(ut,S);let Q,St=S.mipmaps,pt=S.isVideoTexture!==!0,gt=bt.__version===void 0||rt===!0,Dt=mt.dataReady,ne=b(S,it);if(S.isDepthTexture)st=x(S.format===Oi,S.type),gt&&(pt?e.texStorage2D(n.TEXTURE_2D,1,st,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,st,it.width,it.height,0,vt,N,null));else if(S.isDataTexture)if(St.length>0){pt&&gt&&e.texStorage2D(n.TEXTURE_2D,ne,st,St[0].width,St[0].height);for(let ht=0,Ot=St.length;ht<Ot;ht++)Q=St[ht],pt?Dt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Q.width,Q.height,vt,N,Q.data):e.texImage2D(n.TEXTURE_2D,ht,st,Q.width,Q.height,0,vt,N,Q.data);S.generateMipmaps=!1}else pt?(gt&&e.texStorage2D(n.TEXTURE_2D,ne,st,it.width,it.height),Dt&&Fe(S,it,vt,N)):e.texImage2D(n.TEXTURE_2D,0,st,it.width,it.height,0,vt,N,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){pt&&gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ne,st,St[0].width,St[0].height,it.depth);for(let ht=0,Ot=St.length;ht<Ot;ht++)if(Q=St[ht],S.format!==li)if(vt!==null)if(pt){if(Dt)if(S.layerUpdates.size>0){let te=$u(Q.width,Q.height,S.format,S.type);for(let Tt of S.layerUpdates){let be=Q.data.subarray(Tt*te/Q.data.BYTES_PER_ELEMENT,(Tt+1)*te/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,Tt,Q.width,Q.height,1,vt,be)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Q.width,Q.height,it.depth,vt,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,st,Q.width,Q.height,it.depth,0,Q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Q.width,Q.height,it.depth,vt,N,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,st,Q.width,Q.height,it.depth,0,vt,N,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{pt&&gt&&e.texStorage2D(n.TEXTURE_2D,ne,st,St[0].width,St[0].height);for(let ht=0,Ot=St.length;ht<Ot;ht++)Q=St[ht],S.format!==li?vt!==null?pt?Dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Q.width,Q.height,vt,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,st,Q.width,Q.height,0,Q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Dt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Q.width,Q.height,vt,N,Q.data):e.texImage2D(n.TEXTURE_2D,ht,st,Q.width,Q.height,0,vt,N,Q.data)}else if(S.isDataArrayTexture)if(pt){if(gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ne,st,it.width,it.height,it.depth),Dt)if(S.layerUpdates.size>0){let ht=$u(it.width,it.height,S.format,S.type);for(let Ot of S.layerUpdates){let te=it.data.subarray(Ot*ht/it.data.BYTES_PER_ELEMENT,(Ot+1)*ht/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ot,it.width,it.height,1,vt,N,te)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,N,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,vt,N,it.data);else if(S.isData3DTexture)pt?(gt&&e.texStorage3D(n.TEXTURE_3D,ne,st,it.width,it.height,it.depth),Dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,N,it.data)):e.texImage3D(n.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,vt,N,it.data);else if(S.isFramebufferTexture){if(gt)if(pt)e.texStorage2D(n.TEXTURE_2D,ne,st,it.width,it.height);else{let ht=it.width,Ot=it.height;for(let te=0;te<ne;te++)e.texImage2D(n.TEXTURE_2D,te,st,ht,Ot,0,vt,N,null),ht>>=1,Ot>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),it.parentNode!==ht){ht.appendChild(it),d.add(S),ht.onpaint=Ot=>{let te=Ot.changedElements;for(let Tt of d)te.includes(Tt.image)&&(Tt.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let te=n.RGBA,Tt=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,te,Tt,be,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(St.length>0){if(pt&&gt){let ht=kt(St[0]);e.texStorage2D(n.TEXTURE_2D,ne,st,ht.width,ht.height)}for(let ht=0,Ot=St.length;ht<Ot;ht++)Q=St[ht],pt?Dt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,vt,N,Q):e.texImage2D(n.TEXTURE_2D,ht,st,vt,N,Q);S.generateMipmaps=!1}else if(pt){if(gt){let ht=kt(it);e.texStorage2D(n.TEXTURE_2D,ne,st,ht.width,ht.height)}Dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,N,it)}else e.texImage2D(n.TEXTURE_2D,0,st,vt,N,it);w(S)&&S.mipmapsAutoUpdate===!0&&v(ut),bt.__version=mt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function He(R,S,q){if(S.image.length!==6)return;let ut=fe(R,S),rt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);let mt=i.get(rt);if(rt.version!==mt.__version||ut===!0){e.activeTexture(n.TEXTURE0+q);let bt=he.getPrimaries(he.workingColorSpace),et=S.colorSpace===Fi?null:he.getPrimaries(S.colorSpace),it=S.colorSpace===Fi||bt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,st=[];for(let Tt=0;Tt<6;Tt++)!vt&&!N?st[Tt]=_(S.image[Tt],!0,s.maxCubemapSize):st[Tt]=N?S.image[Tt].image:S.image[Tt],st[Tt]=Ut(S,st[Tt]);let Q=st[0],St=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),gt=A(S.internalFormat,St,pt,S.normalized,S.colorSpace),Dt=S.isVideoTexture!==!0,ne=mt.__version===void 0||ut===!0,ht=rt.dataReady,Ot=b(S,Q);Jt(n.TEXTURE_CUBE_MAP,S);let te;if(S.isDepthTexture){if(gt=x(S.format===Oi,S.type),ne)if(Dt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,gt,Q.width,Q.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,Q.width,Q.height,0,St,pt,null)}else if(vt){Dt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,gt,Q.width,Q.height);for(let Tt=0;Tt<6;Tt++){te=st[Tt].mipmaps;for(let be=0;be<te.length;be++){let tn=te[be];S.format!==li?St!==null?Dt?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,be,0,0,tn.width,tn.height,St,tn.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,be,gt,tn.width,tn.height,0,tn.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,be,0,0,tn.width,tn.height,St,pt,tn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,be,gt,tn.width,tn.height,0,St,pt,tn.data)}}}else{if(te=S.mipmaps,Dt&&ne){te.length>0&&Ot++;let Tt=kt(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,gt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(N){Dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,st[Tt].width,st[Tt].height,St,pt,st[Tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,st[Tt].width,st[Tt].height,0,St,pt,st[Tt].data);for(let be=0;be<te.length;be++){let qi=te[be].image[Tt].image;Dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,be+1,0,0,qi.width,qi.height,St,pt,qi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,be+1,gt,qi.width,qi.height,0,St,pt,qi.data)}}else{Dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,St,pt,st[Tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,St,pt,st[Tt]);for(let be=0;be<te.length;be++){let tn=te[be];Dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,be+1,0,0,St,pt,tn.image[Tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,be+1,gt,St,pt,tn.image[Tt])}}}w(S)&&S.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),mt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function k(R,S,q,ut,rt,mt){let bt=r.convert(q.format,q.colorSpace),et=r.convert(q.type),it=A(q.internalFormat,bt,et,q.normalized,q.colorSpace),vt=i.get(S),N=i.get(q);if(N.__renderTarget=S,!vt.__hasExternalTextures){let st=Math.max(1,S.width>>mt),Q=Math.max(1,S.height>>mt);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,mt,it,st,Q,S.depth,0,bt,et,null):e.texImage2D(rt,mt,it,st,Q,0,bt,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ft(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,rt,N.__webglTexture,0,le(S)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,rt,N.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(R,S,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){let ut=S.depthTexture,rt=ut&&ut.isDepthTexture?ut.type:null,mt=x(S.stencilBuffer,rt),bt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(S),mt,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(S),mt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,mt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,R)}else{let ut=S.textures;for(let rt=0;rt<ut.length;rt++){let mt=ut[rt],bt=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),it=A(mt.internalFormat,bt,et,mt.normalized,mt.colorSpace);ft(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(S),it,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(S),it,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,it,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(R,S,q){let ut=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=i.get(S.depthTexture);rt.__renderTarget=S;let mt=ut?S.depthTexture.image[0]:S.depthTexture.image;(!rt.__webglTexture||mt.width!==S.width||mt.height!==S.height)&&(mt.width=S.width,mt.height=S.height,S.depthTexture.needsUpdate=!0),ut?yt(S.depthTexture,0):ot(S.depthTexture,0);let bt=rt.__webglTexture,et=le(S),it=ut?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,vt=S.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Pi)ft(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,it,bt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,vt,it,bt,0);else if(S.depthTexture.format===Oi)ft(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,it,bt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,vt,it,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(R){let S=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ut=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ut){let rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ut.removeEventListener("dispose",rt)};ut.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=ut}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let ut=0;ut<6;ut++)ct(S.__webglFramebuffer[ut],R,ut);else R.texture.mipmaps.length>0?ct(S.__webglFramebuffer[0],R,0):ct(S.__webglFramebuffer,R,0);else if(q){S.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ut]),S.__webglDepthbuffer[ut]===void 0)S.__webglDepthbuffer[ut]=n.createRenderbuffer(),lt(S.__webglDepthbuffer[ut],R,!1);else{let rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=S.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,mt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),lt(S.__webglDepthbuffer,R,!1);else{let rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(R,S,q){let ut=i.get(R);S!==void 0&&k(ut.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&It(R)}function $t(R){let S=R.texture,q=i.get(R),ut=i.get(S);R.addEventListener("dispose",z),O(R);let rt=R.textures,mt=R.isWebGLCubeRenderTarget===!0,bt=rt.length>1;if(bt||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=S.version,o.memory.textures++),mt){q.__webglFramebuffer=[];for(let et=0;et<6;et++)if(S.mipmaps.length>0){q.__webglFramebuffer[et]=[];for(let it=0;it<S.mipmaps.length;it++)q.__webglFramebuffer[et][it]=n.createFramebuffer()}else q.__webglFramebuffer[et]=n.createFramebuffer()}else{if(S.mipmaps.length>0){q.__webglFramebuffer=[];for(let et=0;et<S.mipmaps.length;et++)q.__webglFramebuffer[et]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(bt)for(let et=0,it=rt.length;et<it;et++){let vt=i.get(rt[et]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ft(R)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let et=0;et<rt.length;et++){let it=rt[et];q.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[et]);let vt=r.convert(it.format,it.colorSpace),N=r.convert(it.type),st=A(it.internalFormat,vt,N,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),Q=le(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,st,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,q.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,S);for(let et=0;et<6;et++)if(S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)k(q.__webglFramebuffer[et][it],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else k(q.__webglFramebuffer[et],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);w(S)?v(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(bt){for(let et=0,it=rt.length;et<it;et++){let vt=rt[et],N=i.get(vt),st=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,N.__webglTexture),Jt(st,vt),k(q.__webglFramebuffer,R,vt,n.COLOR_ATTACHMENT0+et,st,0),w(vt)&&v(st)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,ut.__webglTexture),Jt(et,S),S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)k(q.__webglFramebuffer[it],R,S,n.COLOR_ATTACHMENT0,et,it);else k(q.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,et,0);w(S)?v(et):S.mipmaps.length>0&&n.texParameteri(et,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&It(R)}function F(R){let S=R.textures;for(let q=0,ut=S.length;q<ut;q++){let rt=S[q];if(w(rt)&&rt.mipmapsAutoUpdate===!0){let mt=E(R),bt=i.get(rt).__webglTexture;e.bindTexture(mt,bt),v(mt),e.unbindTexture()}}}let oe=[];function Wt(R){if(R.samples>0){if(ft(R)===!1){let S=R.textures,q=R.width,ut=R.height,rt=n.COLOR_BUFFER_BIT,mt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(R),et=S.length>1;if(et)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);let N=i.get(S[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,q,ut,0,0,q,ut,rt,n.NEAREST),l===!0&&(oe.length=0,oe.push(n.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&oe.push(mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);let N=i.get(S[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function le(R){return Math.min(s.maxSamples,R.samples)}function ft(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Me(R){let S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Ut(R,S){let q=R.colorSpace,ut=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==ao&&q!==Fi&&(he.getTransfer(q)===ye?(ut!==li||rt!==Nn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",q)),S}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=dt,this.resetTextureUnits=P,this.getTextureUnits=V,this.setTextureUnits=tt,this.setTexture2D=ot,this.setTexture2DArray=nt,this.setTexture3D=_t,this.setTextureCube=yt,this.rebindTextures=ee,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=k,this.useMultisampledRTT=ft,this.dispose=H}function zS(n,t){function e(i,s=Fi){let r,o=he.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Du)return n.BYTE;if(i===Uu)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===yl)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===ku)return n.RGB;if(i===li)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===Ml)return n.RED;if(i===bl)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===Tl)return n.RGBA_INTEGER;if(i===Po||i===No||i===Do||i===Uo)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Al||i===El||i===Cl||i===Rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Ll||i===Pl||i===Nl||i===Dl||i===Oo||i===Ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Ll)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return r.COMPRESSED_R11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oo)return r.COMPRESSED_RG11_EAC;if(i===Ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===Fl||i===Bl||i===kl||i===zl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===$l||i===jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ql||i===tc||i===Fo||i===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var GS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VS=`
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

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new yo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new qn({vertexShader:GS,fragmentShader:VS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dh=class extends gi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new hh,f={},_=e.getContextAttributes(),w=null,v=null,E=[],A=[],x=new Kt,b=null,O=null,I=new wn;I.viewport=new Oe;let U=new wn;U.viewport=new Oe;let z=[I,U],X=new fl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ot=E[W];return ot===void 0&&(ot=new ar,E[W]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(W){let ot=E[W];return ot===void 0&&(ot=new ar,E[W]=ot),ot.getGripSpace()},this.getHand=function(W){let ot=E[W];return ot===void 0&&(ot=new ar,E[W]=ot),ot.getHandSpace()};function K(W){let ot=A.indexOf(W.inputSource);if(ot===-1)return;let nt=E[ot];nt!==void 0&&(nt.update(W.inputSource,W.frame,c||o),nt.dispatchEvent({type:W.type,data:W.inputSource}))}function Z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",T);for(let W=0;W<E.length;W++){let ot=A[W];ot!==null&&(A[W]=null,E[W].disconnect(ot))}L=null,H=null,m.reset();for(let W in f)delete f[W];if(t.setRenderTarget(w),p=null,h=null,d=null,s=null,v=null,dt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),O!==null){let W=O.camera;W.fov=O.fov,W.zoom=O.zoom,W.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",T),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,_t=null,yt=null;_.depth&&(yt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?Oi:Pi,_t=_.stencil?Cs:oi);let Ht={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new On(h.textureWidth,h.textureHeight,{format:li,type:Nn,depthTexture:new Di(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let nt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new On(p.framebufferWidth,p.framebufferHeight,{format:li,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function T(W){for(let ot=0;ot<W.removed.length;ot++){let nt=W.removed[ot],_t=A.indexOf(nt);_t>=0&&(A[_t]=null,E[_t].disconnect(nt))}for(let ot=0;ot<W.added.length;ot++){let nt=W.added[ot],_t=A.indexOf(nt);if(_t===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=A.length){A.push(nt),_t=Ht;break}else if(A[Ht]===null){A[Ht]=nt,_t=Ht;break}if(_t===-1)break}let yt=E[_t];yt&&yt.connect(nt)}}function C(W,ot){ot===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ot.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ot=W.near,nt=W.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),X.near=U.near=I.near=ot,X.far=U.far=I.far=nt,(L!==X.near||H!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),L=X.near,H=X.far),X.layers.mask=W.layers.mask|6,I.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let _t=W.parent,yt=X.cameras;C(X,_t);for(let Ht=0;Ht<yt.length;Ht++)C(yt[Ht],_t);X.projectionMatrix.copy(I.projectionMatrix),X.projectionMatrixInverse.copy(I.projectionMatrixInverse),O===null&&W.isPerspectiveCamera&&(O={camera:W,fov:W.fov,zoom:W.zoom}),P(W,X,_t)};function P(W,ot,nt){nt===null?W.matrix.copy(ot.matrixWorld):(W.matrix.copy(nt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ot.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ot.projectionMatrix),W.projectionMatrixInverse.copy(ot.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=sr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(W){return f[W]};let V=null;function tt(W,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){let nt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let _t=!1;nt.length!==X.cameras.length&&(X.cameras.length=0,_t=!0);for(let Bt=0;Bt<nt.length;Bt++){let Jt=nt[Bt],fe=null;if(p!==null)fe=p.getViewport(Jt);else{let Fe=d.getViewSubImage(h,Jt);fe=Fe.viewport,Bt===0&&(t.setRenderTargetTextures(v,Fe.colorTexture,Fe.depthStencilTexture),t.setRenderTarget(v))}let Qt=z[Bt];Qt===void 0&&(Qt=new wn,Qt.layers.enable(Bt),Qt.viewport=new Oe,z[Bt]=Qt),Qt.matrix.fromArray(Jt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Jt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(fe.x,fe.y,fe.width,fe.height),Bt===0&&(X.matrix.copy(Qt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),_t===!0&&X.cameras.push(Qt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Bt=d.getDepthInformation(nt[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(yt&&yt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Bt=0;Bt<nt.length;Bt++){let Jt=nt[Bt].camera;if(Jt){let fe=f[Jt];fe||(fe=new yo,f[Jt]=fe);let Qt=d.getCameraImage(Jt);fe.sourceTexture=Qt}}}}for(let nt=0;nt<E.length;nt++){let _t=A[nt],yt=E[nt];_t!==null&&yt!==void 0&&yt.update(_t,ot,c||o)}V&&V(W,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}let dt=new xp;dt.setAnimationLoop(tt),this.setAnimationLoop=function(W){V=W},this.dispose=function(){}}},HS=new ge,Ep=new Yt;Ep.set(-1,0,0,0,1,0,0,0,1);function WS(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,w,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===En&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===En&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=t.get(f),w=_.envMap,v=_.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(HS.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ep),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function XS(n,t,e,i){let s={},r={};function o(_,w){let v=w.program;i.uniformBlockBinding(_,v,s[_.id])}function a(_,w){let v=s[_.id];v===void 0&&(g(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",m));let E=w.program;i.updateUBOMapping(_,E);let A=t.render.frame;r[_.id]!==A&&(c(_),r[_.id]=A)}function l(_){let w=n.createBuffer(),v=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,v,E),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(_){let w=s[_.id],v=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,x=v.length;A<x;A++){let b=v[A];if(Array.isArray(b))for(let O=0,I=b.length;O<I;O++)u(b[O],A,O,E);else u(b,A,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,w,v,E){if(h(_,w,v,E)===!0){let A=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let O=0;O<x.length;O++){let I=x[O],U=y(I,!0);d(I,_.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,_.__data)}}function d(_,w,v){typeof _=="number"||typeof _=="boolean"?w[v]=_:_.isMatrix3?(w[v]=_.elements[0],w[v+1]=_.elements[1],w[v+2]=_.elements[2],w[v+3]=0,w[v+4]=_.elements[3],w[v+5]=_.elements[4],w[v+6]=_.elements[5],w[v+7]=0,w[v+8]=_.elements[6],w[v+9]=_.elements[7],w[v+10]=_.elements[8],w[v+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-v),v):_.toArray(w,v)}function h(_,w,v,E){let A=_.value,x=w+"_"+v;if(Array.isArray(A)){E[x]===void 0&&(E[x]=[]);let b=E[x],O=!1;for(let I=0;I<A.length;I++)p(A[I],b,I)===!0&&(O=!0);return O}return p(A,E,x)}function p(_,w,v){if(w[v]===void 0)return typeof _=="number"||typeof _=="boolean"?w[v]=_:ArrayBuffer.isView(_)?w[v]=_.slice():w[v]=_.clone(),!0;{let E=w[v];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return w[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function g(_){let w=_.uniforms,v=0,E=16;for(let x=0,b=w.length;x<b;x++){let O=Array.isArray(w[x])?w[x]:[w[x]];for(let I=0,U=O.length;I<U;I++){let z=O[I],X=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(w[x])||Array.isArray(z.value),H=v;for(let Z=0,T=X.length;Z<T;Z++){let C=X[Z],P=y(C,L),V=v%E,tt=V%P.boundary,dt=V+tt;v+=tt,dt!==0&&E-dt<P.storage&&(v+=E-dt),Z===0&&(H=v),v+=P.storage}let K=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new K((v-H)/Float32Array.BYTES_PER_ELEMENT),z.__offset=H}}let A=v%E;return A>0&&(v+=E-A),_.__size=v,_.__cache={},this}function y(_,w){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let w=_.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:f}}var qS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function YS(){return yi===null&&(yi=new go(qS,16,16,ls,ai),yi.name="DFG_LUT",yi.minFilter=Tn,yi.magFilter=Tn,yi.wrapS=mi,yi.wrapT=mi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var oc=class{constructor(t={}){let{canvas:e=zf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Nn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=p,m=new Set([Tl,wl,bl]),f=new Set([Nn,oi,mr,Cs,vl,Sl]),_=new Uint32Array(4),w=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,A=null,x=[],b=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,z=null,X=null,L=null,H=null;this._outputColorSpace=ln;let K=0,Z=0,T=null,C=-1,P=null,V=new Oe,tt=new Oe,dt=null,W=new qt(0),ot=0,nt=e.width,_t=e.height,yt=1,Ht=null,Ue=null,Bt=new Oe(0,0,nt,_t),Jt=new Oe(0,0,nt,_t),fe=!1,Qt=new ns,Fe=new ja,Be=!1,He=!1,k=new ge,lt=new G,ct=new Oe,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function $t(){return T===null?yt:1}let F=i;function oe(M,B){return e.getContext(M,B)}let Wt,le,ft,Me,Ut,kt,R,S,q,ut,rt,mt,bt,et,it,vt,N,st,Q,St,pt,gt,Dt;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),F===null){let B="webgl2";if(F=oe(B,M),F===null)throw oe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(M){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Xt("WebGLRenderer: "+M.message),M}function ne(){Wt=new sv(F),Wt.init(),pt=new zS(F,Wt),le=new Yy(F,Wt,t,pt),ft=new BS(F,Wt),le.reversedDepthBuffer&&h&&ft.buffers.depth.setReversed(!0),X=F.createFramebuffer(),L=F.createFramebuffer(),H=F.createFramebuffer(),Me=new av(F),Ut=new wS,kt=new kS(F,Wt,ft,Ut,le,pt,Me),R=new iv(I),S=new cx(F),gt=new Xy(F,S),q=new rv(F,S,Me,gt),ut=new cv(F,q,S,gt,Me),st=new lv(F,le,kt),it=new Zy(Ut),rt=new bS(I,R,Wt,le,gt,it),mt=new WS(I,Ut),bt=new AS,et=new PS(Wt),N=new Wy(I,R,ft,ut,g,l),vt=new FS(I,ut,le),Dt=new XS(F,Me,le,ft),Q=new qy(F,Wt,Me),St=new ov(F,Wt,Me),Me.programs=rt.programs,I.capabilities=le,I.extensions=Wt,I.properties=Ut,I.renderLists=bt,I.shadowMap=vt,I.state=ft,I.info=Me}y!==Nn&&(O=new hv(y,e.width,e.height,a,s,r));let ht=new dh(I,F);this.xr=ht,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=Wt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Wt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(M){M!==void 0&&(yt=M,this.setSize(nt,_t,!1))},this.getSize=function(M){return M.set(nt,_t)},this.setSize=function(M,B,$=!0){if(ht.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=M,_t=B,e.width=Math.floor(M*yt),e.height=Math.floor(B*yt),$===!0&&(e.style.width=M+"px",e.style.height=B+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(nt*yt,_t*yt).floor()},this.setDrawingBufferSize=function(M,B,$){nt=M,_t=B,yt=$,e.width=Math.floor(M*$),e.height=Math.floor(B*$),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(y===Nn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(V)},this.getViewport=function(M){return M.copy(Bt)},this.setViewport=function(M,B,$,Y){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,B,$,Y),ft.viewport(V.copy(Bt).multiplyScalar($t()).round())},this.getScissor=function(M){return M.copy(Jt)},this.setScissor=function(M,B,$,Y){M.isVector4?Jt.set(M.x,M.y,M.z,M.w):Jt.set(M,B,$,Y),ft.scissor(tt.copy(Jt).multiplyScalar($t()).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(M){ft.setScissorTest(fe=M)},this.setOpaqueSort=function(M){Ht=M},this.setTransparentSort=function(M){Ue=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,$=!0){let Y=0;if(M){let J=!1;if(T!==null){let wt=T.texture.format;J=m.has(wt)}if(J){let wt=T.texture.type,Rt=f.has(wt),Mt=N.getClearColor(),Et=N.getClearAlpha(),Nt=Mt.r,Zt=Mt.g,ce=Mt.b;Rt?(_[0]=Nt,_[1]=Zt,_[2]=ce,_[3]=Et,F.clearBufferuiv(F.COLOR,0,_)):(w[0]=Nt,w[1]=Zt,w[2]=ce,w[3]=Et,F.clearBufferiv(F.COLOR,0,w))}else Y|=F.COLOR_BUFFER_BIT}B&&(Y|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),N.dispose(),bt.dispose(),et.dispose(),kt.dispose(),Ut.dispose(),R.dispose(),ut.dispose(),q.dispose(),gt.dispose(),Dt.dispose(),rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Md),ht.removeEventListener("sessionend",bd),gs.stop()};function Ot(M){M.preventDefault(),Wu("WebGLRenderer: Context Lost."),U=!0}function te(){Wu("WebGLRenderer: Context Restored."),U=!1;let M=Me.autoReset,B=vt.enabled,$=vt.autoUpdate,Y=vt.needsUpdate,J=vt.type;ne(),Me.autoReset=M,vt.enabled=B,vt.autoUpdate=$,vt.needsUpdate=Y,vt.type=J}function Tt(M){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function be(M){let B=M.target;B.removeEventListener("dispose",be),tn(B)}function tn(M){qi(M),Ut.remove(M)}function qi(M){let B=Ut.get(M).programs;B!==void 0&&(B.forEach(function($){rt.releaseProgram($)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,$,Y,J,wt){B===null&&(B=It);let Rt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Mt=sg(M,B,$,Y,J);ft.setMaterial(Y,Rt);let Et=$.index,Nt=1;if(Y.wireframe===!0){if(Et=q.getWireframeAttribute($),Et===void 0)return;Nt=2}let Zt=$.drawRange,ce=$.attributes.position,Lt=Zt.start*Nt,ue=(Zt.start+Zt.count)*Nt;wt!==null&&(Lt=Math.max(Lt,wt.start*Nt),ue=Math.min(ue,(wt.start+wt.count)*Nt)),Et!==null?(Lt=Math.max(Lt,0),ue=Math.min(ue,Et.count)):ce!=null&&(Lt=Math.max(Lt,0),ue=Math.min(ue,ce.count));let Xe=ue-Lt;if(Xe<0||Xe===1/0)return;gt.setup(J,Y,Mt,$,Et);let Le,Ee=Q;if(Et!==null&&(Le=S.get(Et),Ee=St,Ee.setIndex(Le)),J.isMesh)Y.wireframe===!0?(ft.setLineWidth(Y.wireframeLinewidth*$t()),Ee.setMode(F.LINES)):Ee.setMode(F.TRIANGLES);else if(J.isLine){let fn=Y.linewidth;fn===void 0&&(fn=1),ft.setLineWidth(fn*$t()),J.isLineSegments?Ee.setMode(F.LINES):J.isLineLoop?Ee.setMode(F.LINE_LOOP):Ee.setMode(F.LINE_STRIP)}else J.isPoints?Ee.setMode(F.POINTS):J.isSprite&&Ee.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let fn=J._multiDrawStarts,Pt=J._multiDrawCounts,bn=J._multiDrawCount,xe=Et?S.get(Et).bytesPerElement:1,xs=Ut.get(Y).currentProgram.getUniforms();for(let pn=0;pn<bn;pn++)xs.setValue(F,"_gl_DrawID",pn),Ee.render(fn[pn]/xe,Pt[pn])}else if(J.isInstancedMesh)Ee.renderInstances(Lt,Xe,J.count);else if($.isInstancedBufferGeometry){let fn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pt=Math.min($.instanceCount,fn);Ee.renderInstances(Lt,Xe,Pt)}else Ee.render(Lt,Xe)};function Sd(M,B,$,Y){z!==null&&M.isNodeMaterial&&z.setObject(Y,M),Be===!0&&it.setState(M,$,!1),M.transparent===!0&&M.side===on&&M.forceSinglePass===!1?(M.side=En,M.needsUpdate=!0,Kr(M,B,Y),M.side=as,M.needsUpdate=!0,Kr(M,B,Y),M.side=on):Kr(M,B,Y)}this.compile=function(M,B,$=null){$===null&&($=M),z!==null&&z.renderStart(M,B,$),A=et.get($),A.init(B),b.push(A),$.traverseVisible(function(J){J.isLight&&J.layers.test(B.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),M!==$&&M.traverseVisible(function(J){J.isLight&&J.layers.test(B.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),He=this.localClippingEnabled,Be=it.init(this.clippingPlanes,He),Be===!0&&it.setGlobalState(this.clippingPlanes,B),z!==null&&vt.render(A.state.shadowsArray,$,B);let Y=new Set;return M.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let wt=J.material;if(wt)if(Array.isArray(wt))for(let Rt=0;Rt<wt.length;Rt++){let Mt=wt[Rt];Sd(Mt,$,B,J),Y.add(Mt)}else Sd(wt,$,B,J),Y.add(wt)}),A=b.pop(),z!==null&&z.renderEnd(),Y},this.compileAsync=function(M,B,$=null){let Y=this.compile(M,B,$);return new Promise(J=>{function wt(){if(Y.forEach(function(Rt){let Et=Ut.get(Rt).currentProgram;(Et===void 0||Et.isReady())&&Y.delete(Rt)}),Y.size===0){J(M);return}setTimeout(wt,10)}Wt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Xc=null;function ng(M){Xc&&Xc(M)}function Md(){gs.stop()}function bd(){gs.start()}let gs=new xp;gs.setAnimationLoop(ng),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(M){Xc=M,ht.setAnimationLoop(M),M===null?gs.stop():gs.start()},ht.addEventListener("sessionstart",Md),ht.addEventListener("sessionend",bd),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(M,B);let $=ht.enabled===!0&&ht.isPresenting===!0,Y=O!==null&&(T===null||$)&&O.begin(I,T);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(B),B=ht.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,B,T),A=et.get(M,b.length),A.init(B),A.state.textureUnits=kt.getTextureUnits(),b.push(A),k.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Fe.setFromArrayCamera(B):Qt.setFromProjectionMatrix(k,Vn,B.reversedDepth),He=this.localClippingEnabled,Be=it.init(this.clippingPlanes,He),E=bt.get(M,x.length),E.init(),x.push(E),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let Rt=I.xr.getDepthSensingMesh();Rt!==null&&qc(Rt,B,-1/0,I.sortObjects)}qc(M,B,0,I.sortObjects),E.finish(),z!==null&&z.updateLights(A.state.lightsArray),I.sortObjects===!0&&E.sort(Ht,Ue),ee=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ee&&N.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),Be===!0&&it.beginShadows();let J=A.state.shadowsArray;if(vt.render(J,M,B),Be===!0&&it.endShadows(),(Y&&O.hasRenderPass())===!1){let Rt=E.opaque,Mt=E.transmissive;if(A.setupLights(),B.isArrayCamera){let Et=B.cameras;if(Mt.length>0)for(let Nt=0,Zt=Et.length;Nt<Zt;Nt++){let ce=Et[Nt];Td(Rt,Mt,M,ce)}ee&&N.render(M);for(let Nt=0,Zt=Et.length;Nt<Zt;Nt++){let ce=Et[Nt];wd(E,M,ce,ce.viewport)}}else Mt.length>0&&Td(Rt,Mt,M,B),ee&&N.render(M),wd(E,M,B)}T!==null&&Z===0&&(kt.updateMultisampleRenderTarget(T),kt.updateRenderTargetMipmap(T)),Y&&O.end(I),M.isScene===!0&&M.onAfterRender(I,M,B),gt.resetDefaultState(),C=-1,P=null,b.pop(),b.length>0?(A=b[b.length-1],kt.setTextureUnits(A.state.textureUnits),Be===!0&&it.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,z!==null&&z.renderEnd()};function qc(M,B,$,Y){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){let Rt=B.isArrayCamera?Fe:Qt;if(!M.frustumCulled||M.intersectsFrustum(Rt)){Y&&ct.setFromMatrixPosition(M.matrixWorld).applyMatrix4(k);let Mt=ut.update(M),Et=M.material;Et.visible&&E.push(M,Mt,Et,$,ct.z,null,B)}}else if(M.isMesh||M.isLine||M.isPoints){let Rt=B.isArrayCamera?Fe:Qt;if(!M.frustumCulled||M.intersectsFrustum(Rt)){let Mt=ut.update(M),Et=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ct.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ct.copy(Mt.boundingSphere.center)),ct.applyMatrix4(M.matrixWorld).applyMatrix4(k)),Array.isArray(Et)){let Nt=Mt.groups;for(let Zt=0,ce=Nt.length;Zt<ce;Zt++){let Lt=Nt[Zt],ue=Et[Lt.materialIndex];ue&&ue.visible&&E.push(M,Mt,ue,$,ct.z,Lt,B)}}else Et.visible&&E.push(M,Mt,Et,$,ct.z,null,B)}}}let wt=M.children;for(let Rt=0,Mt=wt.length;Rt<Mt;Rt++)qc(wt[Rt],B,$,Y)}function wd(M,B,$,Y){let{opaque:J,transmissive:wt,transparent:Rt}=M;A.setupLightsView($),Be===!0&&it.setGlobalState(I.clippingPlanes,$),Y&&ft.viewport(V.copy(Y)),J.length>0&&pa(J,B,$),wt.length>0&&pa(wt,B,$),Rt.length>0&&pa(Rt,B,$),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Td(M,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){let Lt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new On(1,1,{generateMipmaps:!0,type:Lt?ai:Nn,minFilter:ri,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let wt=A.state.transmissionRenderTarget[Y.id],Rt=Y.viewport||V;wt.setSize(Rt.z*I.transmissionResolutionScale,Rt.w*I.transmissionResolutionScale);let Mt=I.getRenderTarget(),Et=I.getActiveCubeFace(),Nt=I.getActiveMipmapLevel();I.setRenderTarget(wt),I.getClearColor(W),ot=I.getClearAlpha(),ot<1&&I.setClearColor(16777215,.5),I.clear(),ee&&N.render($);let Zt=I.toneMapping;I.toneMapping=_i;let ce=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),Be===!0&&it.setGlobalState(I.clippingPlanes,Y),pa(M,$,Y),kt.updateMultisampleRenderTarget(wt),kt.updateRenderTargetMipmap(wt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ue=0,Xe=B.length;ue<Xe;ue++){let Le=B[ue],{object:Ee,geometry:fn,material:Pt,group:bn}=Le;if(Pt.side===on&&Ee.layers.test(Y.layers)){let xe=Pt.side;Pt.side=En,Pt.needsUpdate=!0,Ad(Ee,$,Y,fn,Pt,bn),Pt.side=xe,Pt.needsUpdate=!0,Lt=!0}}Lt===!0&&(kt.updateMultisampleRenderTarget(wt),kt.updateRenderTargetMipmap(wt))}I.setRenderTarget(Mt,Et,Nt),I.setClearColor(W,ot),ce!==void 0&&(Y.viewport=ce),I.toneMapping=Zt}function pa(M,B,$){let Y=B.isScene===!0?B.overrideMaterial:null;for(let J=0,wt=M.length;J<wt;J++){let Rt=M[J],{object:Mt,geometry:Et,group:Nt}=Rt,Zt=Rt.material;Zt.allowOverride===!0&&Y!==null&&(Zt=Y),Mt.layers.test($.layers)&&Ad(Mt,B,$,Et,Zt,Nt)}}function Ad(M,B,$,Y,J,wt){z!==null&&J.isNodeMaterial&&z.setObject(M,J),M.onBeforeRender(I,B,$,Y,J,wt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),J.onBeforeRender(I,B,$,Y,M,wt),J.transparent===!0&&J.side===on&&J.forceSinglePass===!1?(J.side=En,J.needsUpdate=!0,I.renderBufferDirect($,B,Y,J,M,wt),J.side=as,J.needsUpdate=!0,I.renderBufferDirect($,B,Y,J,M,wt),J.side=on):I.renderBufferDirect($,B,Y,J,M,wt),M.onAfterRender(I,B,$,Y,J,wt)}function Ed(M){let B=0;for(let $ of M)$.texture!==null&&B++;return B}function Kr(M,B,$){B.isScene!==!0&&(B=It);let Y=Ut.get(M),J=A.state.lights,wt=A.state.shadowsArray,Rt=J.state.version,Mt=rt.getParameters(M,J.state,wt,B,$,A.state.lightProbeGridArray),Et=rt.getProgramCacheKey(Mt),Nt=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=R.get(M.envMap||Y.environment,Zt),Y.envMapRotation=Y.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",be),Nt=new Map,Y.programs=Nt,Y.programVariants=new Map);let ce=Nt.get(Et);if(ce!==void 0){if(Y.currentProgram===ce&&Y.lightsStateVersion===Rt)return Rd(M,Mt),ce}else Mt.uniforms=rt.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,$,Mt),M.onBeforeCompile(Mt,I),ce=rt.acquireProgram(Mt,Et),Nt.set(Et,ce),Y.uniforms=Mt.uniforms;let Lt=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=it.uniform),Rd(M,Mt),Y.needsLights=og(M),Y.lightsStateVersion=Rt,Y.needsLights&&(Lt.ambientLightColor.value=J.state.ambient,Lt.lightProbe.value=J.state.probe,Lt.sunLights.value=J.state.sun,Lt.sunLightShadows.value=J.state.sunShadow,Lt.directionalLights.value=J.state.directional,Lt.directionalLightShadows.value=J.state.directionalShadow,Lt.spotLights.value=J.state.spot,Lt.spotLightShadows.value=J.state.spotShadow,Lt.rectAreaLights.value=J.state.rectArea,Lt.ltc_1.value=J.state.rectAreaLTC1,Lt.ltc_2.value=J.state.rectAreaLTC2,Lt.pointLights.value=J.state.point,Lt.pointLightShadows.value=J.state.pointShadow,Lt.hemisphereLights.value=J.state.hemi,Lt.sunShadowMatrix.value=J.state.sunShadowMatrix,Lt.sunShadowCascade.value=J.state.sunShadowCascade,Lt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Lt.spotLightMatrix.value=J.state.spotLightMatrix,Lt.spotLightMap.value=J.state.spotLightMap,Lt.pointShadowMatrix.value=J.state.pointShadowMatrix),Y.numLightProbeGrids=Ed(A.state.lightProbeGridArray),Y.currentProgram=ce,Y.uniformsList=null,ce}function ig(M,B,$,Y,J){let wt=Ut.get(M),Rt=wt.currentProgram.id+","+Y+","+J,Mt=wt.programVariants.get(Rt);return Mt===void 0?(Mt=Kr(M,B,$),wt.programVariants.set(Rt,Mt)):(wt.currentProgram=Mt,wt.uniformsList=null,wt.outputColorSpace=Y,wt.toneMapping=J),Mt}function Cd(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=_r.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Rd(M,B){let $=Ut.get(M);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function sg(M,B,$,Y,J){B.isScene!==!0&&(B=It),kt.resetTextureUnits();let wt=B.fog,Rt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Mt=T===null?I.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:he.workingColorSpace,Et=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Nt=R.get(Y.envMap||Rt,Et),Zt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ce=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!$.morphAttributes.position,ue=!!$.morphAttributes.normal,Xe=!!$.morphAttributes.color,Le=_i;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Le=I.toneMapping);let Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fn=Ee!==void 0?Ee.length:0,Pt=Ut.get(Y),bn=A.state.lights;if(Be===!0&&(He===!0||M!==P)){let ke=M===P&&Y.id===C;it.setState(Y,M,ke)}let xe=!1,xs=!1;Y.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==bn.state.version||J.isBatchedMesh&&Pt.batching===!1||!J.isBatchedMesh&&Pt.batching===!0||J.isBatchedMesh&&Pt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Pt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Pt.instancing===!1||!J.isInstancedMesh&&Pt.instancing===!0||J.isSkinnedMesh&&Pt.skinning===!1||!J.isSkinnedMesh&&Pt.skinning===!0||J.isInstancedMesh&&Pt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Pt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Pt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Pt.instancingMorph===!1&&J.morphTexture!==null||Pt.envMap!==Nt||Y.fog===!0&&Pt.fog!==wt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==Zt||Pt.vertexTangents!==ce||Pt.morphTargets!==Lt||Pt.morphNormals!==ue||Pt.morphColors!==Xe||Pt.morphTargetsCount!==fn||Pt.numLightProbeGrids!==Ed(A.state.lightProbeGridArray)?xe=!0:(Pt.outputColorSpace!==Mt||Pt.toneMapping!==Le)&&(xs=!0):(xe=!0,Pt.__version=Y.version);let pn=Pt.currentProgram;(xe===!0||xs===!0)&&(pn=xs===!0?ig(Y,B,J,Mt,Le):Kr(Y,B,J),z&&Y.isNodeMaterial&&z.onUpdateProgram(Y,pn,Pt));let ma=!1,Yi=!1,_s=!1,pe=pn.getUniforms(),an=Pt.uniforms;if(ft.useProgram(pn.program)&&(ma=!0,Yi=!0,_s=!0),Y.id!==C&&(C=Y.id,Yi=!0),ma||P!==M){ft.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(F,"projectionMatrix",M.projectionMatrix),pe.setValue(F,"viewMatrix",M.matrixWorldInverse);let en=pe.map.cameraPosition;en!==void 0&&en.setValue(F,lt.setFromMatrixPosition(M.matrixWorld)),le.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pe.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),P!==M&&(P=M,Yi=!0,_s=!0)}if(Pt.needsLights&&(bn.state.sunShadowMap.length>0&&pe.setValue(F,"sunShadowMap",bn.state.sunShadowMap,kt),bn.state.directionalShadowMap.length>0&&pe.setValue(F,"directionalShadowMap",bn.state.directionalShadowMap,kt),bn.state.spotShadowMap.length>0&&pe.setValue(F,"spotShadowMap",bn.state.spotShadowMap,kt),bn.state.pointShadowMap.length>0&&pe.setValue(F,"pointShadowMap",bn.state.pointShadowMap,kt)),J.isSkinnedMesh){pe.setOptional(F,J,"bindMatrix"),pe.setOptional(F,J,"bindMatrixInverse");let ke=J.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),pe.setValue(F,"boneTexture",ke.boneTexture,kt))}J.isBatchedMesh&&(pe.setOptional(F,J,"batchingTexture"),pe.setValue(F,"batchingTexture",J._matricesTexture,kt),pe.setOptional(F,J,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",J._indirectTexture,kt),pe.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",J._colorsTexture,kt));let jn=$.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&st.update(J,$,pn),(Yi||Pt.receiveShadow!==J.receiveShadow)&&(Pt.receiveShadow=J.receiveShadow,pe.setValue(F,"receiveShadow",J.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(an.envMapIntensity.value=B.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=YS()),Yi){if(pe.setValue(F,"toneMappingExposure",I.toneMappingExposure),Pt.needsLights&&rg(an,_s),wt&&Y.fog===!0&&mt.refreshFogUniforms(an,wt),mt.refreshMaterialUniforms(an,Y,yt,_t,A.state.transmissionRenderTarget[M.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let ke=v,en=0;for(let Ti of A.state.lightProbeGridArray)Ti.texture!==null&&(ke.textures[en]=Ti.texture,ke.min[en]=Ti.boundingBox.min,ke.max[en]=Ti.boundingBox.max,ke.resolution[en]=Ti.resolution,en++);for(let Ti in ke)ke[Ti].length=en;an.probesSH.value=ke.textures,an.probesMin.value=ke.min,an.probesMax.value=ke.max,an.probesResolution.value=ke.resolution}_r.upload(F,Cd(Pt),an,kt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_r.upload(F,Cd(Pt),an,kt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pe.setValue(F,"center",J.center),pe.setValue(F,"modelViewMatrix",J.modelViewMatrix),pe.setValue(F,"normalMatrix",J.normalMatrix),pe.setValue(F,"modelMatrix",J.matrixWorld),Y.uniformsGroups!==void 0){let ke=Y.uniformsGroups;for(let en=0,Ti=ke.length;en<Ti;en++){let Ld=ke[en];Dt.update(Ld,pn),Dt.bind(Ld,pn)}}return pn}function rg(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function og(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,B,$){let Y=Ut.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ut.get(M.texture).__webglTexture=B,Ut.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let $=Ut.get(M);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,$=0){T=M,K=B,Z=$;let Y=null,J=!1,wt=!1;if(M){let Mt=Ut.get(M);if(Mt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(F.FRAMEBUFFER,Mt.__webglFramebuffer),V.copy(M.viewport),tt.copy(M.scissor),dt=M.scissorTest,ft.viewport(V),ft.scissor(tt),ft.setScissorTest(dt),C=-1;return}else if(Mt.__webglFramebuffer===void 0)kt.setupRenderTarget(M);else if(Mt.__hasExternalTextures)kt.rebindTextures(M,Ut.get(M.texture).__webglTexture,Ut.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Zt=M.depthTexture;if(Mt.__boundDepthTexture!==Zt){if(Zt!==null&&Ut.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(M)}}let Et=M.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(wt=!0);let Nt=Ut.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[B])?Y=Nt[B][$]:Y=Nt[B],J=!0):M.samples>0&&kt.useMultisampledRTT(M)===!1?Y=Ut.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?Y=Nt[$]:Y=Nt,V.copy(M.viewport),tt.copy(M.scissor),dt=M.scissorTest}else V.copy(Bt).multiplyScalar(yt).floor(),tt.copy(Jt).multiplyScalar(yt).floor(),dt=fe;if($!==0&&(Y=X),ft.bindFramebuffer(F.FRAMEBUFFER,Y)&&ft.drawBuffers(M,Y),ft.viewport(V),ft.scissor(tt),ft.setScissorTest(dt),J){let Mt=Ut.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,$)}else if(wt){let Mt=B;for(let Et=0;Et<M.textures.length;Et++){let Nt=Ut.get(M.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,Nt.__webglTexture,$,Mt)}}else if(M!==null&&$!==0){let Mt=Ut.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,$)}C=-1};function Id(M){let B=Ut.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=le.textureFormatReadable(M.format),B.__typeReadable=le.textureTypeReadable(M.type)),B}this.readRenderTargetPixels=function(M,B,$,Y,J,wt,Rt,Mt=0){if(!(M&&M.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ut.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et){ft.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Nt=M.textures[Mt],Zt=Nt.format,ce=Nt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let Lt=Id(Nt);if(Lt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-Y&&$>=0&&$<=M.height-J&&F.readPixels(B,$,Y,J,pt.convert(Zt),pt.convert(ce),wt)}finally{let Nt=T!==null?Ut.get(T).__webglFramebuffer:null;ft.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(M,B,$,Y,J,wt,Rt,Mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ut.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et)if(B>=0&&B<=M.width-Y&&$>=0&&$<=M.height-J){ft.bindFramebuffer(F.FRAMEBUFFER,Et);let Nt=M.textures[Mt],Zt=Nt.format,ce=Nt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let Lt=Id(Nt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,wt.byteLength,F.STREAM_READ),F.readPixels(B,$,Y,J,pt.convert(Zt),pt.convert(ce),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Xe=T!==null?Ut.get(T).__webglFramebuffer:null;ft.bindFramebuffer(F.FRAMEBUFFER,Xe);let Le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Vf(F,Le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,wt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ue),F.deleteSync(Le),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,$=0){let Y=Math.pow(2,-$),J=Math.floor(M.image.width*Y),wt=Math.floor(M.image.height*Y),Rt=B!==null?B.x:0,Mt=B!==null?B.y:0;kt.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Rt,Mt,J,wt),ft.unbindTexture()},this.copyTextureToTexture=function(M,B,$=null,Y=null,J=0,wt=0){let Rt,Mt,Et,Nt,Zt,ce,Lt,ue,Xe,Le=M.isCompressedTexture?M.mipmaps[wt]:M.image;if($!==null)Rt=$.max.x-$.min.x,Mt=$.max.y-$.min.y,Et=$.isBox3?$.max.z-$.min.z:1,Nt=$.min.x,Zt=$.min.y,ce=$.isBox3?$.min.z:0;else{let pe=Math.pow(2,-J);Rt=Math.floor(Le.width*pe),Mt=Math.floor(Le.height*pe),M.isDataArrayTexture?Et=Le.depth:M.isData3DTexture?Et=Math.floor(Le.depth*pe):Et=1,Nt=0,Zt=0,ce=0}Y!==null?(Lt=Y.x,ue=Y.y,Xe=Y.z):(Lt=0,ue=0,Xe=0);let Ee=pt.convert(B.format),fn=pt.convert(B.type),Pt;B.isData3DTexture?(kt.setTexture3D(B,0),Pt=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(kt.setTexture2DArray(B,0),Pt=F.TEXTURE_2D_ARRAY):(kt.setTexture2D(B,0),Pt=F.TEXTURE_2D),ft.activeTexture(F.TEXTURE0),ft.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),ft.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ft.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let bn=ft.getParameter(F.UNPACK_ROW_LENGTH),xe=ft.getParameter(F.UNPACK_IMAGE_HEIGHT),xs=ft.getParameter(F.UNPACK_SKIP_PIXELS),pn=ft.getParameter(F.UNPACK_SKIP_ROWS),ma=ft.getParameter(F.UNPACK_SKIP_IMAGES);ft.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),ft.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),ft.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),ft.pixelStorei(F.UNPACK_SKIP_ROWS,Zt),ft.pixelStorei(F.UNPACK_SKIP_IMAGES,ce);let Yi=M.isDataArrayTexture||M.isData3DTexture,_s=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let pe=Ut.get(M),an=Ut.get(B),jn=Ut.get(pe.__renderTarget),ke=Ut.get(an.__renderTarget);ft.bindFramebuffer(F.READ_FRAMEBUFFER,jn.__webglFramebuffer),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let en=0;en<Et;en++)Yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(M).__webglTexture,J,ce+en),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(B).__webglTexture,wt,Xe+en)),F.blitFramebuffer(Nt,Zt,Nt+Rt,Zt+Mt,Lt,ue,Lt+Rt,ue+Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||M.isRenderTargetTexture||Ut.has(M)){let pe=Ut.get(M),an=Ut.get(B);ft.bindFramebuffer(F.READ_FRAMEBUFFER,L),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let jn=0;jn<Et;jn++)Yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pe.__webglTexture,J,ce+jn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,J),_s?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,an.__webglTexture,wt,Xe+jn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,an.__webglTexture,wt),J!==0?F.blitFramebuffer(Nt,Zt,Nt+Rt,Zt+Mt,Lt,ue,Lt+Rt,ue+Mt,F.COLOR_BUFFER_BIT,F.NEAREST):_s?F.copyTexSubImage3D(Pt,wt,Lt,ue,Xe+jn,Nt,Zt,Rt,Mt):F.copyTexSubImage2D(Pt,wt,Lt,ue,Nt,Zt,Rt,Mt);ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _s?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Pt,wt,Lt,ue,Xe,Rt,Mt,Et,Ee,fn,Le.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,wt,Lt,ue,Xe,Rt,Mt,Et,Ee,Le.data):F.texSubImage3D(Pt,wt,Lt,ue,Xe,Rt,Mt,Et,Ee,fn,Le):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,wt,Lt,ue,Rt,Mt,Ee,fn,Le.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,wt,Lt,ue,Le.width,Le.height,Ee,Le.data):F.texSubImage2D(F.TEXTURE_2D,wt,Lt,ue,Rt,Mt,Ee,fn,Le);ft.pixelStorei(F.UNPACK_ROW_LENGTH,bn),ft.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe),ft.pixelStorei(F.UNPACK_SKIP_PIXELS,xs),ft.pixelStorei(F.UNPACK_SKIP_ROWS,pn),ft.pixelStorei(F.UNPACK_SKIP_IMAGES,ma),wt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&F.generateMipmap(Pt),ft.unbindTexture()},this.initRenderTarget=function(M){Ut.get(M).__webglFramebuffer===void 0&&kt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?kt.setTextureCube(M,0):M.isData3DTexture?kt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?kt.setTexture2DArray(M,0):kt.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){K=0,Z=0,T=null,ft.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var ZS=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Cp(n,{background:t="#0d1517",quality:e="high"}={}){let i=new oc({canvas:n,antialias:e==="high",powerPreference:"default",preserveDrawingBuffer:!1});i.outputColorSpace=ln,i.shadowMap.enabled=!1;let s=new ho;s.background=new qt(t);let r=new ws(-1,1,1,-1,.1,300),o={target:new G(0,0,0),yaw:.5,pitch:.95,span:9,dist:60},a={spanMin:2.2,spanMax:16,pitchMin:.55,pitchMax:1.25,bounds:new Wn(new G(-8,0,-9),new G(8,3,10))},l=1,c=1,u=1,d=!0,h=0,p=0,g=!1,y=new Set,m=new Set,f=new Set,_=new Set,w={top:0,bottom:0,left:0,right:0},v=null;function E(){let k=o.target,lt=Math.cos(o.pitch);r.position.set(k.x+o.dist*lt*Math.sin(o.yaw),k.y+o.dist*Math.sin(o.pitch),k.z+o.dist*lt*Math.cos(o.yaw)),r.lookAt(k);let ct=l/c;r.top=o.span,r.bottom=-o.span,r.left=-o.span*ct,r.right=o.span*ct;let It=-(w.left-w.right)/2,ee=-(w.top-w.bottom)/2;It||ee?r.setViewOffset(l,c,It,ee,l,c):r.clearViewOffset(),r.updateProjectionMatrix(),r.updateMatrixWorld()}function A(k){e=k,u=Math.min(window.devicePixelRatio||1,k==="low"?1.25:2),i.setPixelRatio(u),x()}function x(){let k=n.parentElement?n.parentElement.getBoundingClientRect():n.getBoundingClientRect();l=Math.max(1,Math.round(k.width)),c=Math.max(1,Math.round(k.height)),i.setSize(l,c,!1),n.style.width=l+"px",n.style.height=c+"px",E();for(let lt of _)lt(l,c);b()}function b(){d=!0,!p&&!g&&(p=requestAnimationFrame(I))}let O=0;function I(k){p=0;let lt=Math.min(.05,O?(k-O)/1e3:.016);O=k;for(let ct of[...y]){let It=Math.min(1,(k-ct.start)/ct.ms);ct.step(ct.ease(It)),It>=1&&(y.delete(ct),ct.done())}for(let ct of m)ct(lt,k);if(d||y.size||h>0){E(),i.render(s,v||r),d=!1;for(let ct of f)ct()}y.size||h>0?p=requestAnimationFrame(I):O=0}let U=()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}};function z(k,lt,{easing:ct=ZS}={}){return new Promise(It=>{if(k<=0||U()){lt(1),b(),It();return}let ee={start:performance.now(),ms:k,step:lt,ease:ct,done:It};y.add(ee),b()})}function X(){for(let k of[...y])k.step(1),y.delete(k),k.done();b()}function L(){h++,b();let k=!0;return()=>{k&&(k=!1,h=Math.max(0,h-1),b())}}function H(){o.span=Bo.clamp(o.span,a.spanMin,a.spanMax),o.pitch=Bo.clamp(o.pitch,a.pitchMin,a.pitchMax),o.target.clamp(a.bounds.min,a.bounds.max)}function K({target:k,yaw:lt,pitch:ct,span:It},ee=650){let $t={t:o.target.clone(),yaw:o.yaw,pitch:o.pitch,span:o.span},F={t:k?k.clone():$t.t,yaw:lt??$t.yaw,pitch:ct??$t.pitch,span:It??$t.span},oe=F.yaw-$t.yaw;return oe=Math.atan2(Math.sin(oe),Math.cos(oe)),z(ee,Wt=>{o.target.lerpVectors($t.t,F.t,Wt),o.yaw=$t.yaw+oe*Wt,o.pitch=$t.pitch+(F.pitch-$t.pitch)*Wt,o.span=$t.span+(F.span-$t.span)*Wt,H()})}function Z(k,{yaw:lt=o.yaw,pitch:ct=o.pitch,margin:It=1.08,insetTop:ee=0,insetBottom:$t=0}={}){let F={yaw:o.yaw,pitch:o.pitch,span:o.span,t:o.target.clone()};o.yaw=lt,o.pitch=ct,o.span=1,k.getCenter(o.target),E();let oe=new G,Wt=0,le=0,ft=r.matrixWorldInverse;for(let Ut of[k.min.x,k.max.x])for(let kt of[k.min.y,k.max.y])for(let R of[k.min.z,k.max.z])oe.set(Ut,kt,R).applyMatrix4(ft),Wt=Math.max(Wt,Math.abs(oe.x)),le=Math.max(le,Math.abs(oe.y));o.yaw=F.yaw,o.pitch=F.pitch,o.span=F.span,o.target.copy(F.t),E();let Me=Math.max(.3,1-(ee+$t)/c);return Math.max(le,Wt*c/l)*It/Me}let T=new G;function C(k){return T.copy(k).project(r),{x:(T.x+1)/2*l,y:(1-T.y)/2*c,visible:T.x>-1.02&&T.x<1.02&&T.y>-1.02&&T.y<1.02&&T.z<1}}let P=new Ro,V=new Kt,tt=[],dt=null,W=!0,ot=new Map,nt=null;function _t(k,lt,ct=26){let It=n.getBoundingClientRect();V.set((k-It.left)/It.width*2-1,-((lt-It.top)/It.height)*2+1),P.setFromCamera(V,r);let ee=P.intersectObjects(tt,!0),$t=Wt=>{for(;Wt&&!Wt.userData.pick;)Wt=Wt.parent;return Wt?Wt.userData.pick:null};if(ee.length)return $t(ee[0].object);let F=null,oe=ct;for(let Wt of tt){let le=$t(Wt);if(!le)continue;let ft=C(Wt.getWorldPosition(yt)),Me=Math.hypot(ft.x-(k-It.left),ft.y-(lt-It.top));ft.visible&&Me<oe&&(oe=Me,F=le)}return F}let yt=new G;function Ht(k,lt,ct){let It=o.span*2/c,ee=new G(Math.cos(o.yaw),0,-Math.sin(o.yaw)),$t=new G(-Math.sin(o.yaw),0,-Math.cos(o.yaw));o.target.copy(ct).addScaledVector(ee,-k*It).addScaledVector($t,lt*It/Math.max(.3,Math.sin(o.pitch)))}function Ue(k){if(W){if(n.setPointerCapture?.(k.pointerId),ot.set(k.pointerId,{x:k.clientX,y:k.clientY,x0:k.clientX,y0:k.clientY,t0:performance.now()}),ot.size===1)nt={kind:"one",moved:!1,t:o.target.clone()};else if(ot.size===2){let[lt,ct]=[...ot.values()];nt={kind:"two",d0:Math.hypot(lt.x-ct.x,lt.y-ct.y),span:o.span,mid:{x:(lt.x+ct.x)/2,y:(lt.y+ct.y)/2},t:o.target.clone(),moved:!0}}}}function Bt(k){let lt=ot.get(k.pointerId);if(!(!lt||!nt)){if(lt.x=k.clientX,lt.y=k.clientY,nt.kind==="one"&&ot.size===1){let ct=lt.x-lt.x0,It=lt.y-lt.y0;if(!nt.moved&&Math.hypot(ct,It)<8)return;nt.moved=!0,Ht(ct,It,nt.t),H(),b(),Qt()}else if(nt.kind==="two"&&ot.size===2){let[ct,It]=[...ot.values()],ee=Math.hypot(ct.x-It.x,ct.y-It.y);o.span=nt.span*nt.d0/Math.max(20,ee);let $t={x:(ct.x+It.x)/2,y:(ct.y+It.y)/2};Ht($t.x-nt.mid.x,$t.y-nt.mid.y,nt.t),H(),b(),Qt()}}}function Jt(k){let lt=ot.get(k.pointerId);if(ot.delete(k.pointerId),lt&&nt&&nt.kind==="one"&&!nt.moved&&performance.now()-lt.t0<450&&dt){let ct=_t(k.clientX,k.clientY);dt(ct,k)}if(ot.size===0)nt=null;else if(ot.size===1){let ct=[...ot.values()][0];ct.x0=ct.x,ct.y0=ct.y,nt={kind:"one",moved:!0,t:o.target.clone()}}}let fe=null,Qt=()=>{fe&&fe()};function Fe(k,lt=450){return K({yaw:o.yaw+k*Math.PI/2},lt)}function Be(k){W&&(k.preventDefault(),o.span*=Math.exp(k.deltaY*.0012),H(),b())}n.addEventListener("pointerdown",Ue),n.addEventListener("pointermove",Bt),n.addEventListener("pointerup",Jt),n.addEventListener("pointercancel",k=>{ot.delete(k.pointerId),ot.size||(nt=null)}),n.addEventListener("wheel",Be,{passive:!1}),n.style.touchAction="none";let He=window.ResizeObserver?new ResizeObserver(x):null;return He&&n.parentElement?He.observe(n.parentElement):addEventListener("resize",x),A(e),{renderer:i,scene:s,camera:r,rig:o,limits:a,request:b,tween:z,finishTweens:X,hold:L,flyTo:K,rotateBy:Fe,fitSpan:Z,toScreen:C,pickAt:_t,resize:x,setQuality:A,onUserMove(k){fe=k},setInsets(k){Object.assign(w,k),E(),b()},get insets(){return{...w}},overrideCamera(k){v=k||null,b()},onResize(k){return _.add(k),()=>_.delete(k)},get quality(){return e},get size(){return{width:l,height:c}},setPickables(k){tt=k},onTap(k){dt=k},setInput(k){W=k,k||(ot.clear(),nt=null)},onFrame(k){return m.add(k),()=>m.delete(k)},onChange(k){return f.add(k),()=>f.delete(k)},dispose(){g=!0,p&&cancelAnimationFrame(p),He?.disconnect(),i.dispose()}}}var Rp={hall:[-5,5,-4,3.95,"#24433f"],booth:[-3,3,-7.2,-4.2,"#2c2f44"],north:[-7,9,-8.8,-7.2,"#2d3a3c"],west:[-7,-5.2,-7.2,3.95,"#2d3a3c"],lobby:[-7,9,3.95,8,"#26355a"],store:[5.2,9,-4,3.95,"#3a3328"]},vr=[[-5.2,-.6,3.85,4.05],[.6,5.2,3.85,4.05],[5,5.2,-4,3.85],[-5.2,-5,-4,3.85],[-3.2,-3,-7,-4.2],[3,3.2,-7,-4.2],[-3.2,1.8,-7.2,-7],[2.6,3.2,-7.2,-7],[-7.2,9.2,-9,-8.8],[9,9.2,-8.8,8],[-7.2,-7,-8.8,8],[-7.2,9.2,8,8.2],[5.2,9,-4.2,-4],[5.2,7.1,3.85,4.05],[7.9,9,3.85,4.05]],Sr=[[-5.2,-3.2,-7.2,-4.2],[3.2,9,-7.2,-4.2]],cs=[-5.2,5.2,-4.2,-4],Mr={x0:-.25,x1:.25,y0:.85,y1:1.2},ze={x0:-.6,x1:.6,z0:-3.3,z1:-2.7,h:.9},Si={x0:-.55,x1:.55,z0:-3.25,z1:-2.75,y0:.9,y1:1.4},cc={x0:-.22,x1:.22,z0:-3.2,z1:-2.8,y:.92},ci=[0,.94,-3],Ho=[-.2,.2],Zn=[0,1.6,.3],ui=[1.2,0,-2.6],Is=[[.8,0,-2],[1.8,1,-4.3],[7.55,.76,-8.3]],Bi=[1.2,0,-4.9],fh=[1.62,.9,-5.02],us=[-1,0,-4.6],Ip=[-2.4,0,-6.8],Mi=[0,1,-4.3],Ls=[8,0,-8.3],uc=[8.45,.9,-8.5],Lp=[1.6,0,4.7],ph=[.95,1,4.05],Pp=[-.95,1,4.05],mh=[-6.95,.9,6],Bn=[{id:"min",x:-1.8,band:"#7c9fd4",stripes:1},{id:"sera",x:-.6,band:"#839e4e",stripes:2},{id:"doyun",x:.6,band:"#c07fc0",stripes:3},{id:"yujin",x:1.8,band:"#52a660",stripes:4}],bi=6.3,Wo={min:[0,0,4.6],sera:[7,0,0],doyun:[-6.1,0,1],yujin:[8,0,-8]},ki={lock:{ring:[.95,4.6],pick:[.95,.9,4.4],focus:[.2,.7,4.3]},fog:{ring:[0,.3],pick:[0,1.2,.3],focus:[.4,.8,-1.3]},drawer:{ring:[0,-3.65],pick:[0,1,-3.65],focus:[0,.9,-3.5]},cue:{ring:[1.2,-5.6],pick:[1.2,.8,-5.2],focus:[1.2,.7,-5]},audio:{ring:[6.6,-8],pick:[7.4,.8,-8],focus:[7.8,.7,-8]},poster:{ring:[-6.4,6],pick:[-6.8,1,6],focus:[-6.6,.8,6]}},gh=1.75,hc={all:[-7.2,9.2,-9,8.2],hall:[-5.2,5.2,-4.2,4.6],back:[-3.2,9.2,-9,-4],lobby:[-7.2,9.2,3.9,8.2]},kn=.55,dc=.92,br={half:1.4,ms:650,pitch:.92},Np={yaw:0,pitch:.5,halfX:2.6,y0:-.8,y1:2.05,halfZ:.75};function JS(){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"#fff"),e.addColorStop(.55,"#9a9a9a"),e.addColorStop(1,"#000"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ni(n)}function Dp(){return{solid:new rn({vertexColors:!0}),partition:new rn({vertexColors:!0}),drawer:new rn({vertexColors:!0}),doll:new rn({vertexColors:!0}),glass:new rn({color:"#bfe6dc",transparent:!0,opacity:.16,depthWrite:!1,side:on}),door:new rn({color:"#8fb8c4",transparent:!0,opacity:.24,depthWrite:!1,side:on}),shadow:new Ae({color:"#000000",transparent:!0,opacity:.5,alphaMap:JS(),depthWrite:!1}),pool:new Ae({vertexColors:!0,transparent:!0,blending:Ui,depthWrite:!1}),lens:new rn({color:"#d9c89a",emissive:"#2a2214"}),proxy:new Ae({visible:!1})}}var xh={opacity:.7,emissive:"#3a3428"};function _h({opacity:n=.42,emissive:t="#000000"}={}){return new rn({vertexColors:!0,transparent:!0,opacity:n,emissive:t,depthWrite:!1})}function Ps(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new xn;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,u),c+=g}}if(e){let u=0,d=[];for(let h=0;h<n.length;++h){let p=n[h].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Up(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let y=0;y<o[u].length;++y)p.push(o[u][y][h]);let g=Up(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Up(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new cn(o,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<e;g++){let y=u.getComponent(h,g);a.setComponent(h+d,g,y)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Op=new qt,Fp=new qt;function fc(n,t,e){let i=n.index?n.toNonIndexed():n;i.attributes.uv&&i.deleteAttribute("uv"),i.clearGroups();let s=i.attributes.normal,r=i.attributes.position.count,o=new Float32Array(r*3);Op.set(t),Fp.set(e||t);for(let a=0;a<r;a++){let l=e&&s.getY(a)>.9?Fp:Op;o[a*3]=l.r,o[a*3+1]=l.g,o[a*3+2]=l.b}return i.setAttribute("color",new cn(o,3)),i}var Bp=new ge,kp=new Hn,KS=new ii,$S=new G,jS=new G;function yh(n,{p:t=[0,0,0],r:e=[0,0,0],s:i=[1,1,1]}={}){return kp.setFromEuler(KS.set(e[0],e[1],e[2])),Bp.compose($S.set(t[0],t[1],t[2]),kp,jS.set(i[0],i[1],i[2])),n.applyMatrix4(Bp),n}function Ct(n,t,e,i,s,r,o,a){let l=new si(t-n,i-e,r-s);return l.translate((n+t)/2,(e+i)/2,(s+r)/2),fc(l,o,a)}function wi(n,t,e,i,s){return yh(fc(new si(n,t,e),i),s)}function Ce(n,t,e,i,s,r,o){return yh(fc(new cr(n,t,e,i),s,o),r)}function pc(n,t,e){return yh(fc(n,t),e)}var hn=class{constructor(){this.list=[]}add(...t){for(let e of t)e&&this.list.push(e);return this}merge(){if(!this.list.length)return null;let t=Ps(this.list,!1);for(let e of this.list)e.dispose();return this.list=[],t.computeBoundingSphere(),t}};var QS='system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',Jn=(n,t=500)=>`${t} ${n}px ${QS}`;function Tr(n,t){if(typeof document>"u")return null;let e=document.createElement("canvas");return e.width=n,e.height=t,e}function Ar(n){let t=new Ni(n);return t.colorSpace=ln,t.anisotropy=4,t.minFilter=ri,t}function vh(n,t,e){let i=[],s="";for(let r of t.split(" ")){let o=s?s+" "+r:r;n.measureText(o).width>e&&s?(i.push(s),s=r):s=o}return s&&i.push(s),i}function Gp(){let n=Tr(1024,192);if(!n)return null;let t=n.getContext("2d");return t.fillStyle="rgba(180, 214, 202, 0.5)",t.font=Jn(108,600),t.textAlign="center",t.textBaseline="middle",t.fillText("\uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",512,100),Ar(n)}function Vp(){let n=Tr(512,256);if(!n)return null;let t=n.getContext("2d"),e=(i,s,r)=>{t.fillStyle="#0f1a1a",t.fillRect(i,0,256,256),t.strokeStyle="#7fb3a6",t.lineWidth=4,t.strokeRect(i+6,6,244,244),t.fillStyle="#bfe3d6",t.font=Jn(30,700),t.textAlign="left",t.textBaseline="top",t.fillText(s,i+18,18),t.font=Jn(25);let o=66;for(let a of r)for(let l of vh(t,a,220))t.fillText(l,i+18,o),o+=32};return e(0,"\uC815\uBB38 \uC7A0\uAE08",["01:58 \uC7A0\uAE40 \xB7 \uBD09\uC778","\uBD09\uC778 \uBC88\uD638 \uB300\uC7A5\uACFC \uAC19\uC74C","\uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C","02:19 \uD655\uC778 \uD6C4 \uC5F4\uB9BC"]),e(256,"\uC21C\uCC30 \uD655\uC778",["30\uBD84\uB9C8\uB2E4 \uB204\uB984","02:00 \uCC28\uB840","02:09 \uB20C\uB9BC"]),Ar(n)}function Hp(){let n=Tr(256,128);if(!n)return null;let t=n.getContext("2d");return t.fillStyle="#121a1c",t.fillRect(0,0,256,128),t.fillStyle="#d4e4e0",t.textAlign="center",t.textBaseline="middle",t.font=Jn(26,700),t.fillText("\uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D",128,40),t.font=Jn(26),t.fillText("\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9",128,88),Ar(n)}var zp=[["\uC608\uC57D\uD45C","02:30 \uC790\uB3D9 \uC810\uAC80 1\uAC74"],["\uC2E4\uD589 \uAE30\uB85D","02:17:00 \uD050 1\uAC74"],["\uC2E4\uD589 \uBC29\uC2DD","\uC218\uB3D9"],["\uC785\uB825 \uC704\uCE58","\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94"],["\uC11C\uBA85","H.D.Y."],["\uD050 \uB0B4\uC6A9","\uC9C4\uC5F4\uB300 \uC870\uBA85 \uB0AE\uCDA4 + \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638"],["\uC6D0\uACA9 \uC811\uC18D","\uAE30\uB85D \uC5C6\uC74C"]];function Wp(){let n=Tr(640,400);if(!n)return null;let t=n.getContext("2d");t.fillStyle="#0c1416",t.fillRect(0,0,640,400),t.strokeStyle="#3f5a58",t.lineWidth=2,t.fillStyle="#cfe7df",t.font=Jn(28),t.textBaseline="middle",t.textAlign="left";let e=52,i=18;return zp.forEach(([s,r],o)=>{let a=i+o*e+e/2;t.fillText(s,20,a),t.fillText(r,168,a),t.beginPath(),t.moveTo(14,i+(o+1)*e),t.lineTo(626,i+(o+1)*e),t.stroke()}),t.beginPath(),t.moveTo(156,i),t.lineTo(156,i+e*zp.length),t.stroke(),Ar(n)}function Xp(){let n=Tr(512,256);if(!n)return null;let t=n.getContext("2d");for(let s=0;s<3;s++){let r=s*128;t.fillStyle="#e4ddcc",t.fillRect(r+8,8,112,112),t.fillStyle="#1b1f22",t.font=Jn(80,700),t.textAlign="center",t.textBaseline="middle",t.fillText(String(s+1),r+64,68)}t.fillStyle="#0c1416",t.fillRect(0,128,512,128),t.strokeStyle="#9fd0c0",t.lineWidth=2,t.font=Jn(22),t.fillStyle="#9fd0c0",t.textAlign="left";let e=7,i=()=>(e=e*16807%2147483647)/2147483647;for(let s=0;s<3;s++){let r=150+s*38;t.fillText(String(s+1),10,r),t.beginPath();for(let o=40;o<500;o+=4){let a=6*(i()-.5);o===40?t.moveTo(o,r+a):t.lineTo(o,r+a)}t.stroke()}return Ar(n)}function qp(){let n=Tr(420,500);if(!n)return null;let t=n.getContext("2d");t.fillStyle="#e9e4d8",t.fillRect(0,0,420,500),t.fillStyle="#2a2b2d",t.textAlign="left",t.textBaseline="top",t.font=Jn(36,700),t.fillText("\uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",28,30),t.fillStyle="#c8c2b4",t.fillRect(28,84,364,120),t.fillStyle="#2a2b2d",t.font=Jn(21,600),t.fillText("\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04 \u2014 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C",28,222),t.fillStyle="#7d7d7a",t.font=Jn(21,400);let e=270;for(let i of vh(t,"\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD",340))t.fillText(i,36,e),e+=28;t.fillStyle="#2f55b8",e+=10;for(let i of vh(t,"\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4",340))t.fillText(i,36,e),e+=28;return t.save(),t.translate(250,420),t.rotate(-.08),t.strokeStyle="#b3352d",t.lineWidth=5,t.strokeRect(-140,-38,280,76),t.fillStyle="#b3352d",t.font=Jn(22,700),t.textAlign="center",t.textBaseline="middle",t.fillText("\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815",0,-12),t.fillText("01:40",0,18),t.restore(),Ar(n)}var Xo="#33403e",$p="#48625c",tM="#27312f",eM="#3a4744",Yp="#59646a",Zp="#2b3236",Er="#4d4234",zn=-.45;function Cr(n,t,e){let i=new G(Bi[0],.84,Bi[2]-.02),s=new G(0,Math.cos(zn),Math.sin(zn)),r=new G(0,-Math.sin(zn),Math.cos(zn));return i.addScaledVector(new G(1,0,0),n).addScaledVector(r,t).addScaledVector(s,e)}function nM(){let n=new hn;n.add(Ct(-7.5,9.5,-.36,-.006,-9.3,8.5,"#0d1618","#121d20"));for(let[L,H,K,Z,T]of Object.values(Rp))n.add(Ct(L,H,-.02,0,K,Z,T));for(let[L,H,K,Z]of vr)n.add(Ct(L,H,0,1.2,K,Z,Xo,$p));for(let[L,H,K,Z]of Sr)n.add(Ct(L,H,0,1.2,K,Z,tM,eM));n.add(Ct(-.6,-.55,0,1.2,3.86,4.04,"#5b6466","#7a8688"),Ct(.55,.6,0,1.2,3.86,4.04,"#5b6466","#7a8688")),n.add(Ct(-.56,.56,.9,.97,4,4.03,"#d9cfb2"),Ct(-.06,.06,.85,1.02,4.02,4.04,"#e6dec6")),n.add(Ct(.77,1.13,.86,1.14,4.05,4.07,Zp)),n.add(Ct(-1.1,-.8,.84,1.14,4.05,4.07,Zp),Ce(.035,.035,.03,10,"#b9b1a2",{p:[-.95,.9,4.085],r:[Math.PI/2,0,0]}));let t=ze,e=Si,i=.012;n.add(Ct(t.x0,t.x1,0,t.h,t.z0,t.z1,"#4b5761","#5d6a72"));for(let L of[e.x0,e.x1])for(let H of[e.z0,e.z1])n.add(Ct(L-i,L+i,e.y0,e.y1,H-i,H+i,"#8c9aa0"));n.add(Ct(e.x0,e.x1,e.y1-i,e.y1+i,e.z1-i,e.z1+i,"#8c9aa0"));for(let L of[e.x0,e.x1])n.add(Ct(L-i,L+i,e.y1-i,e.y1+i,e.z0,e.z1,"#8c9aa0"));let[s,r,o]=Zn;n.add(Ce(.2,.22,.04,14,Yp,{p:[s,.02,o]}),Ce(.035,.035,r-.05,8,Yp,{p:[s,(r-.05)/2,o]})),n.add(wi(.17,.13,.3,"#3c464c",{p:[s,r,o-.05]}),Ce(.045,.045,.06,10,"#161c20",{p:[s,r,o-.23],r:[Math.PI/2,0,0]}));let[a,,l]=ui;n.add(Ct(a-.25,a+.25,0,.36,l-.2,l+.2,"#56605c","#68726e"));let c=-a,u=(t.z0+t.z1)/2-l,d=Math.hypot(c,u),h=c/d,p=u/d;n.add(Ce(.045,.06,.26,10,"#7a8480",{p:[a+h*.3,.3,l+p*.3],r:[0,Math.atan2(p,-h),Math.PI/2]}));let[g,,y]=Bi;n.add(Ct(g-.6,g+.6,0,.78,y-.25,y+.25,"#3a4048","#4a525a"));let m=Cr(0,0,0);n.add(wi(1.2,.05,.44,"#2c3238",{p:[m.x,m.y,m.z],r:[zn,0,0]}));let f=Cr(-.2,-.02,.027);n.add(wi(.66,.006,.36,"#141b1e",{p:[f.x,f.y,f.z],r:[zn,0,0]}));let _=Cr(.42,.08,.035);n.add(Ce(.035,.035,.03,10,"#b9b1a2",{p:[_.x,_.y,_.z],r:[zn,0,0]}));let[w,,v]=us;n.add(Ct(w-.45,w+.45,.12,.74,v-.25,v+.25,"#3e4753","#4c5662"));for(let L of[-.36,.36])for(let H of[-.18,.18])n.add(Ce(.06,.06,.04,10,"#1d2226",{p:[w+L,.06,v+H],r:[0,0,Math.PI/2]}));let[E,,A]=Ip;n.add(Ct(E-.6,E-.57,0,1.1,A-.17,A+.17,Er),Ct(E+.57,E+.6,0,1.1,A-.17,A+.17,Er));for(let L of[.08,.5,.92])n.add(Ct(E-.57,E+.57,L,L+.03,A-.17,A+.17,Er,"#5a4e3e"));n.add(Ct(E-.5,E-.15,.11,.32,A-.13,A+.13,"#3f4a50"),Ct(E+.05,E+.45,.53,.72,A-.13,A+.13,"#46504a"));let[x,,b]=Ls;n.add(Ct(x-.7,x+.7,.72,.76,b-.32,b+.28,"#4a4d52","#5a5e63"));for(let L of[-.65,.65])for(let H of[-.27,.23])n.add(Ct(x+L-.025,x+L+.025,0,.72,b+H-.025,b+H+.025,"#3a3d42"));n.add(Ct(x-.4,x+.2,.76,.81,b-.25,b+.05,"#262b30","#30363c"));let[O,I,U]=uc;n.add(wi(.34,.24,.03,"#2a2f34",{p:[O,I,U],r:[-.2,0,0]})),n.add(Ct(x-.23,x+.23,.42,.47,-7.9,-7.44,"#3b3f45","#474b51"),Ct(x-.23,x+.23,.47,.95,-7.44,-7.39,"#3b3f45"));for(let L of[-.2,.2])for(let H of[-7.87,-7.47])n.add(Ct(x+L-.02,x+L+.02,0,.42,H-.02,H+.02,"#2b2e33"));let[z,,X]=Lp;n.add(Ct(z-.23,z+.23,.42,.47,X-.23,X+.23,"#3e4450","#4a5260"),Ct(z-.23,z+.23,.47,.92,X+.2,X+.25,"#3e4450"));for(let L of[-.2,.2])for(let H of[-.2,.2])n.add(Ct(z+L-.02,z+L+.02,0,.42,X+H-.02,X+H+.02,"#2b2e33"));n.add(Ct(-7,-6.94,.6,1.18,5.3,6.7,"#4a3f33","#5a4d3e"),Ct(-6.94,-6.93,.63,1.15,5.33,6.67,"#6b5a45")),n.add(Ct(-6.93,-6.925,.64,1.14,5.79,6.21,"#d9d4c8")),n.add(Ct(6.1,7.9,.8,.85,-2,-1.2,"#4a4f4a","#5a605a"));for(let L of[6.15,7.85])for(let H of[-1.95,-1.25])n.add(Ct(L-.025,L+.025,0,.8,H-.025,H+.025,"#363a36"));n.add(Ct(8.6,8.95,0,1.1,.5,.53,Er),Ct(8.6,8.95,0,1.1,2.47,2.5,Er));for(let L of[.1,.55,1])n.add(Ct(8.6,8.95,L,L+.03,.53,2.47,Er,"#5a4e3e"));return n.add(Ct(8.65,8.9,.13,.33,.7,1.3,"#4d5550"),Ct(8.65,8.9,.58,.74,1.6,2.3,"#535a52")),n.merge()}function Jp(n,t,e=.004){let i=[];for(let[r,o,a,l]of n){let c=[[r,l,o,l,0,1],[o,a,r,a,0,-1],[o,l,o,a,1,0],[r,a,r,l,-1,0]];for(let[u,d,h,p,g,y]of c){let m=Math.hypot(h-u,p-d);if(m<.05)continue;let f=new un(m,t);f.rotateX(-Math.PI/2),f.rotateY(Math.atan2(g,y)),f.translate((u+h)/2+g*t/2,e,(d+p)/2+y*t/2),i.push(f)}}let s=Ps(i,!1);return i.forEach(r=>r.dispose()),s}var Sh=null;function iM(){if(Sh||typeof document>"u")return Sh;let n=document.createElement("canvas");n.width=4,n.height=64;let t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,64);return e.addColorStop(0,"rgba(0,0,0,0.42)"),e.addColorStop(.45,"rgba(0,0,0,0.16)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,4,64),Sh=new Ni(n)}function Kp(n){let t=n.map(([i,s,r,o])=>{let a=new bs(r,28);a.rotateX(-Math.PI/2),a.translate(i,.014,s);let l=a.attributes.position.count,c=new Float32Array(l*3),u=new qt(o);return c[0]=u.r,c[1]=u.g,c[2]=u.b,a.setAttribute("color",new cn(c,3)),a}),e=Ps(t,!1);return t.forEach(i=>i.dispose()),e}function jp(n){let t=new Pe;t.name="static";let e=new Ft(nM(),n.solid);e.name="solid",t.add(e);let[i,s,r,o]=cs,a=new Ft(Ct(i,s,0,1.2,r,o,Xo,$p),n.partition);a.name="partition",t.add(a);let l=Si,c=l.x1-l.x0,u=l.y1-l.y0,d=l.z1-l.z0,h=(l.x0+l.x1)/2,p=(l.y0+l.y1)/2,g=(l.z0+l.z1)/2,y=[new un(c,u).translate(h,p,l.z1),new un(d,u).rotateY(Math.PI/2).translate(l.x0,p,g),new un(d,u).rotateY(Math.PI/2).translate(l.x1,p,g),new un(c,d).rotateX(-Math.PI/2).translate(h,l.y1,g)],m=new Ft(Ps(y,!1),n.glass);m.name="cover",m.renderOrder=2,t.add(m),y.forEach(C=>C.dispose());let f=new Ft(new un(1.1,1.2).translate(0,1.2/2,3.95),n.door);f.name="door",f.renderOrder=2,t.add(f);let _=new Pe;_.name="drawer";let w=new Ft(Ct(l.x0,l.x1,l.y0,l.y1,ze.z0-.02,ze.z0+.03,"#45525a","#52606a"),n.drawer),v=cc,E=new Ft(Ct(v.x0,v.x1,v.y-.02,v.y+.01,v.z0,v.z1,"#6a706c","#7d837e"),n.drawer);_.add(w,E),t.add(_);let A=new Ft(new hn().add(Ce(.1,.12,.14,16,"#ffffff",{p:[0,.07,0]}),Ce(.07,.1,.05,16,"#ffffff",{p:[0,.165,0]})).merge(),n.lens);A.position.set(ci[0],ci[1],ci[2]),A.visible=!1,A.name="lens",t.add(A);let x=Gp(),b=new Ft(new un(6,1.125).rotateX(-Math.PI/2).translate(0,.004,2.3),new Ae({map:x,transparent:!0,depthWrite:!1}));b.visible=!!x,b.name="floorText",t.add(b);let O=ze,[I,,U]=Bi,[z,,X]=ui,L=iM();if(L){let C=new Ae({map:L,transparent:!0,depthWrite:!1}),P=new Ft(Ps([Jp([...vr,...Sr,cs],.3),Jp([[O.x0,O.x1,O.z0,O.z1],[I-.6,I+.6,U-.25,U+.25],[z-.25,z+.25,X-.2,X+.2]],.18,.005)],!1),C);P.name="ao",P.renderOrder=1,t.add(P)}let H=new Ft(Kp([[0,4.4,1.3,"#1c2a36"],[Bi[0],-5.2,1,"#222c36"],[Ls[0],-8,1.1,"#2a2a1e"],[-6.4,6,.9,"#262218"],[0,6.4,3,"#1a2030"],[7,0,1.6,"#1a1e18"]]),n.pool);H.name="pools",t.add(H);let K=new Ft(Kp([[0,-3,1.8,"#4a3a22"]]),n.pool.clone());K.name="displayPool",t.add(K);let Z=new hn().add(Ct(-5.2,5.2,1.2,3.6,-4.2,-4,Xo),Ct(5,5.2,1.2,3.6,-4.2,4.05,Xo),Ct(-5.2,-5,1.2,3.6,-4.2,4.05,Xo)).merge(),T=new Ft(Z,n.solid);return T.visible=!1,T.name="cctvWalls",t.add(T),{root:t,solid:e,partition:a,cover:m,door:f,drawer:_,panel:w,plate:E,lens:A,floorText:b,pools:H,displayPool:K,cctvWalls:T}}var zi="#c9c2b4",sM="#ece6da",Cn={step:.4,stepMs:400,nodMs:1200,nodAngle:.22,shortNodMs:500,shortNodAngle:.12,breathAmp:.008,breathPeriod:4,phaseStep:1},Th=.92,rM=.56,Qp=1.9,Mh=null;function oM(){if(Mh)return Mh;let n=new hn;n.add(Ct(-.17,.17,-.1,.05,-.11,.11,zi));for(let t of[-.09,.09])n.add(Ct(t-.065,t+.065,-.88,-.06,-.08,.08,zi)),n.add(Ct(t-.065,t+.065,-.92,-.86,-.08,.15,zi));return Mh=n.merge()}function aM(n,t){n.add(pc(lM(),zi,{p:[0,.27,0],s:[1,1,.62]})),n.add(Ce(.05,.05,.1,12,zi,{p:[0,.56,0]}));for(let e of[-.25,.25])n.add(Ce(.05,.045,.5,12,zi,{p:[e,.24,0]})),n.add(pc(new Xn(.055,12,8),t,{p:[e,-.04,.01]}))}var lM=()=>new hn().add(Ce(.2,.17,.52,16,zi)).merge();function cM(n,t,e){n.add(Ce(.064,.064,.14,12,t,{p:[.25,.36,0]}));for(let i=0;i<e;i++)n.add(Ce(.067,.067,.014,12,sM,{p:[.25,.29+(i+1)*.14/(e+1),0]}))}function uM(n){let t=new hn;return aM(t,zi),cM(t,n.band,n.stripes),t.merge()}function hM(n){let t=new hn;return t.add(pc(new Xn(.13,20,14),zi,{p:[0,.15,0]})),t.merge()}var bh=new Map;function dM(n){return bh.has(n.id)||bh.set(n.id,{lower:oM(),upper:uM(n),head:hM(n)}),bh.get(n.id)}var wh=null;function mc(n,t,{shadow:e,proxy:i}={}){let s=dM(n),r=new Pe;r.name="doll:"+n.id;let o=new Ft(s.lower,t);o.position.y=Th;let a=new Ft(s.upper,t);a.position.y=Th;let l=new Ft(s.head,t);if(l.position.y=rM,a.add(l),r.add(o,a),e){wh=wh||new bs(.32,20).rotateX(-Math.PI/2).translate(0,.012,0);let c=new Ft(wh,e);c.renderOrder=1,r.add(c)}if(i){let c=new Ft(i.geometry,i.material);c.position.y=.9,c.userData.pick="p:"+n.id,r.add(c),r.userData.proxy=c}return r.position.set(n.x,0,bi),{id:n.id,p:n,root:r,lower:o,upper:a,head:l,material:t}}function Ah(n,t){n.lower.rotation.x=t?-Math.PI/2:0,n.root.position.y=t?.47-Th+.08:0}var Ns=["lock","fog","drawer","cue","audio","poster"],hi={color:{new:"#efb761",seen:"#8fc9bd",asked:"#8fc9bd",closed:"#6b7378"},pulsePeriod:2.4,pulseAmp:.07,selectedScale:1.15,proxyRadius:.7,ringY:.022},Ze=new Ye,tm=new qt;function em(n){let t=new Pe;t.name="spots";let e=[...Ns.map(p=>"e:"+p),...Bn.map(p=>"p:"+p.id)],i=p=>p[0]==="e"?ki[p.slice(2)].ring:[Bn.find(g=>"p:"+g.id===p).x,bi],s=new ur(.42,.5,40).rotateX(-Math.PI/2),r=new xi(s,new Ae({transparent:!0,opacity:.9,depthWrite:!1}),e.length);r.instanceMatrix.setUsage(gr),r.renderOrder=3,r.name="rings";let o=new ur(.34,.62,40).rotateX(-Math.PI/2),a=new xi(o,new Ae({color:hi.color.new,transparent:!0,opacity:.95,depthWrite:!1}),e.length);a.count=0,a.visible=!1,a.renderOrder=4,a.name="accuse";let l=new xi(new Mo(.11,0),new Ae({}),Ns.length);l.instanceMatrix.setUsage(gr),l.name="beacons",t.add(r,a,l);let c=new Xn(hi.proxyRadius,8,6),u=[];for(let p of Ns){let g=new Ft(c,n.proxy);g.position.fromArray(ki[p].pick),g.userData.pick="e:"+p,t.add(g),u.push(g)}let d={marks:{},selected:null,accuse:null};function h(p=0,g=!1){let y=g?1+hi.pulseAmp*Math.sin(2*Math.PI*p/hi.pulsePeriod):1;e.forEach((f,_)=>{let w=d.marks[f]||"closed",v=(f===d.selected?hi.selectedScale:1)*(w==="new"?y:1),[E,A]=i(f);if(Ze.position.set(E,hi.ringY,A),Ze.rotation.set(0,0,0),Ze.scale.set(v,1,v),Ze.updateMatrix(),r.setMatrixAt(_,Ze.matrix),r.setColorAt(_,tm.set(hi.color[w]||hi.color.closed)),_<Ns.length){let[x,,b]=ki[Ns[_]].pick;Ze.position.set(x,gh,b),Ze.rotation.set(0,g?p*.6:.4,0),Ze.scale.set(v,v,v),Ze.updateMatrix(),l.setMatrixAt(_,Ze.matrix),l.setColorAt(_,tm)}}),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0;let m=d.accuse?[d.accuse.person?"p:"+d.accuse.person:null,...(d.accuse.proof||[]).map(f=>"e:"+f)].filter(Boolean):[];a.count=m.length,a.visible=m.length>0,m.forEach((f,_)=>{let[w,v]=i(f);Ze.position.set(w,hi.ringY+.002,v),Ze.rotation.set(0,0,0),Ze.scale.set(1,1,1),Ze.updateMatrix(),a.setMatrixAt(_,Ze.matrix)}),a.instanceMatrix.needsUpdate=!0}return h(),{root:t,rings:r,bold:a,beacons:l,proxies:u,ids:e,set(p,g,y){d.marks=p||{},d.selected=g||null,d.accuse=y||null,h()},animate(p){h(p,!0)},still(){h(0,!1)},anyNew(){return Object.values(d.marks).includes("new")},labelPoint(p){let[g,,y]=ki[p].pick;return new G(g,gh+.22,y)},dispose(){s.dispose(),o.dispose(),c.dispose(),l.geometry.dispose(),r.material.dispose(),a.material.dispose(),l.material.dispose()}}}var gc=1.3;function nm(){let n=new hn().add(Ce(.14,.16,.03,12,"#5a6266",{p:[0,.015,0]}),Ce(.018,.018,gc,6,"#b9b4a8",{p:[0,gc/2,0]}),wi(.34,.2,.012,"#d6cfbd",{p:[.17,gc-.11,0]})).merge(),t=new xi(n,new rn({vertexColors:!0}),4);t.count=0,t.visible=!1,t.name="pins";let e=[];return{mesh:t,set(i){e=Bn.map(s=>s.id).filter(s=>(i||[]).includes(s)),t.count=e.length,t.visible=e.length>0,e.forEach((s,r)=>{Ze.position.fromArray(Wo[s]),Ze.rotation.set(0,0,0),Ze.scale.set(1,1,1),Ze.updateMatrix(),t.setMatrixAt(r,Ze.matrix)}),t.instanceMatrix.needsUpdate=!0},shown(){return e},labelPoint(i){let[s,,r]=Wo[i];return new G(s,gc+.08,r)},dispose(){n.dispose(),t.material.dispose()}}}var fM=400;function Ds(n,t,e=[0,0,1,1]){let i=new un(n,t),s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,e[0]+s.getX(r)*(e[2]-e[0]),e[1]+s.getY(r)*(e[3]-e[1]));return i}var qo=n=>new Ae({map:n,color:n?"#ffffff":"#20282a",transparent:!0,opacity:0,depthWrite:!1}),im=()=>new rn({vertexColors:!0,transparent:!0,opacity:0});function pM(){let n=Vp(),t=new Pe,e=new Ft(Ds(.34,.26,[0,0,.5,1]).translate(ph[0],ph[1],4.074),qo(n)),i=new Ft(Ds(.26,.17,[.5,0,1,1]).translate(Pp[0],1.065,4.074),e.material);return t.add(e,i),{g:t,mats:[e.material],textures:[n]}}function mM(){let n=new Pe,t=3.2,e=t*Math.tan(25*Math.PI/180),i=new is(e,t,20,1,!0).rotateX(-Math.PI/2).translate(0,0,t/2),s=new Ae({color:"#9fd6e0",transparent:!0,opacity:0,depthWrite:!1,side:on}),r=new Ft(i,s);r.position.set(Zn[0],Zn[1],Zn[2]-.2),r.lookAt(0,1.1,(ze.z0+ze.z1)/2),r.userData.maxOpacity=.13,r.renderOrder=5;let o=Hp(),a=new Ft(Ds(.4,.2).rotateX(-Math.PI/2).translate(ui[0],.366,ui[2]),qo(o));return n.add(r,a),{g:n,mats:[s,a.material],textures:[o],cone:r}}function gM(){let n=new hn,t=Si,e=ze.z0-.03,i="#151a1c",s="#8d969a",r="#a8322a";n.add(Ct(t.x0,t.x1,t.y0-.006,t.y0+.006,e-.006,e,i),Ct(t.x0,t.x1,t.y1-.006,t.y1+.006,e-.006,e,i));for(let g of[t.x0,t.x1])n.add(Ct(g-.006,g+.006,t.y0,t.y1,e-.006,e,i));n.add(Ct(t.x0-.01,t.x1+.01,t.y0-.012,t.y0-.002,ze.z0-.03,ze.z0+.002,"#0b0e10"));for(let g of Ho)n.add(Ct(g-.012,g+.012,.875,.895,-4,ze.z0-.03,s,"#a7b0b4"));let o=Mr;for(let[g,y]of[[-4,-3.992],[-4.208,-4.2]])n.add(Ct(o.x0,o.x1,o.y0,o.y1,g,y,"#2a3134")),n.add(Ct(o.x0-.012,o.x0,o.y0,o.y1,g-.002,y+.002,"#7d8a8c"),Ct(o.x1,o.x1+.012,o.y0,o.y1,g-.002,y+.002,"#7d8a8c")),n.add(Ct(o.x0,o.x1,o.y0-.012,o.y0,g-.002,y+.002,"#7d8a8c"));let[a,l,c]=Mi;n.add(Ct(a-.09,a+.09,l-.015,l+.015,c-.035,c-.005,"#a9b2b5"));for(let g of[-.075,.075])n.add(Ct(a+g-.012,a+g+.012,l-.012,l+.012,c-.005,-4.2,"#a9b2b5"));let u=11,d=()=>(u=u*16807%2147483647)/2147483647;for(let g=0;g<18;g++){let y=Ho[g%2]+(d()-.5)*.12,m=-3.4-d()*.55,f=.012+d()*.014,_=g<6?.895:0;n.add(Ct(y-f,y+f,_,_+.004,m-f,m+f,r))}let h=im(),p=new Pe;return p.add(new Ft(n.merge(),h)),{g:p,mats:[h],textures:[]}}function xM(){let n=Wp(),t=new Pe,e=Cr(-.2,-.02,.032),i=new G(0,Math.cos(zn),Math.sin(zn)),s=new G(0,-Math.sin(zn),Math.cos(zn)),r=new ge().makeBasis(new G(-1,0,0),s,i).setPosition(e),o=new Ft(Ds(.64,.4).applyMatrix4(r),qo(n)),a=Cr(.42,.08,.04),l=new Ae({color:"#e8f0ea",transparent:!0,opacity:0,depthWrite:!1}),c=new Ft(new bo(.06,.009,6,24),l);return c.position.copy(a),c.rotation.x=zn-Math.PI/2,t.add(o,c),{g:t,mats:[o.material,l],textures:[n],ring:c}}function _M(){let n=new hn,t="#2f3438",e="#7c8487",[i,,s]=Is[0];n.add(Ce(.12,.14,.03,12,t,{p:[i,.015,s]}),Ce(.012,.012,1.25,6,t,{p:[i,.64,s]})),n.add(Ce(.032,.026,.13,10,e,{p:[i-.03,1.29,s-.05],r:[-1.1,0,.35]}));let[r,o,a]=Is[1];n.add(Ct(r-.04,r+.04,o-.06,o+.06,-4.24,-4.2,t)),n.add(Ce(.03,.026,.12,10,e,{p:[r,o,a-.02],r:[Math.PI/2,0,0]}));let[l,c,u]=Is[2];n.add(Ce(.05,.06,.02,10,t,{p:[l,c+.01,u]}),Ce(.008,.008,.24,6,t,{p:[l,c+.13,u]})),n.add(Ce(.026,.022,.1,10,e,{p:[l,c+.27,u+.03],r:[1,0,0]}));let d=im(),h=new Ft(n.merge(),d),p=Xp(),g=[];[[i,1.5,s],[r,1.36,a],[l,c+.46,u]].forEach(([E,A,x],b)=>g.push(Ds(.14,.14,[b/4,.5,(b+1)/4,1]).rotateY(kn).translate(E,A,x)));let[m,f,_]=uc;g.push(Ds(.3,.075,[0,0,1,.5]).rotateX(-.2).translate(m,f,_+.02));let w=new Ft(new hn().add(...g).merge(),qo(p)),v=new Pe;return v.add(h,w),{g:v,mats:[d,w.material],textures:[p]}}function yM(){let n=qp(),t=new Pe,e=new Ft(Ds(.42,.5).rotateY(Math.PI/2).translate(-6.918,.89,6),qo(n));return t.add(e),{g:t,mats:[e.material],textures:[n]}}function sm(){let n=new Pe;n.name="details";let t={lock:pM(),fog:mM(),drawer:gM(),cue:xM(),audio:_M(),poster:yM()};for(let[r,o]of Object.entries(t)){o.g.name="detail:"+r,o.g.visible=!1,o.level=0,n.add(o.g);for(let a of o.mats)a.userData.maxOpacity==null&&(a.userData.maxOpacity=1)}t.fog.mats[0].userData.maxOpacity=.13;function e(r,o){r.level=o,r.g.visible=o>.001;for(let a of r.mats)a.opacity=o*a.userData.maxOpacity}let i=new Set,s=!1;return{root:n,parts:t,set(r,{tween:o,instant:a}){i=new Set(r||[]);for(let[l,c]of Object.entries(t)){let u=s||i.has(l)?1:0;if(u===c.level)continue;if(!u||a){e(c,u);continue}let d=c.level;o(fM,h=>e(c,d+(u-d)*h))}},force(r,o){s=r,this.set([...i],o)},hideAll(r){n.visible=!r},unlocked(){return[...i]},dispose(){for(let r of Object.values(t))r.textures.forEach(o=>o?.dispose()),r.mats.forEach(o=>o.dispose()),r.g.traverse(o=>o.geometry?.dispose())}}}var rm=2;function om(n){let t=new Ao("#8fb0d8","#1c2426",.75*rm),e=new Co("#fff1dc",1.5*rm);return e.position.set(.55*12,.8*12,.23*12),n.add(t,e,e.target),{hemi:t,sun:e}}function am(){let n=new qn({uniforms:{uColor:{value:new qt("#000000")},uOpacity:{value:0}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uOpacity; void main(){ gl_FragColor = vec4(uColor, uOpacity); }",transparent:!0,depthTest:!1,depthWrite:!1}),t=new Ft(new un(2,2),n);return t.frustumCulled=!1,t.renderOrder=1e3,t.visible=!1,t.name="overlay",{mesh:t,get value(){return n.uniforms.uOpacity.value},set(e,i){i&&n.uniforms.uColor.value.set(i),n.uniforms.uOpacity.value=e,t.visible=e>.001},color(){return"#"+n.uniforms.uColor.value.getHexString()},dispose(){t.geometry.dispose(),n.dispose()}}}function lm(n=44){let t=new So(1,1),e=new rn({color:"#e8eef0",emissive:"#5a6466",transparent:!0,opacity:0,depthWrite:!1}),i=new xi(t,e,n);i.instanceMatrix.setUsage(gr),i.visible=!1,i.name="fog",i.renderOrder=6;let s=3,r=()=>(s=s*16807%2147483647)/2147483647,o=Array.from({length:n},()=>({x:(r()-.5)*2.8,y:.3+r()*1.3,z:-3+(r()-.5)*2.2,s:.25+r()*.35,ph:r()*6.28,sp:.3+r()*.5})),a=new Ye;function l(u,d=1){o.forEach((h,p)=>{a.position.set(h.x+.15*Math.sin(u*h.sp+h.ph),h.y+.08*Math.sin(u*h.sp*.7+h.ph),h.z+.12*Math.cos(u*h.sp+h.ph));let g=h.s*(.6+.4*d);a.scale.set(g,g*.8,g),a.updateMatrix(),i.setMatrixAt(p,a.matrix)}),i.instanceMatrix.needsUpdate=!0}l(0);let c=0;return{mesh:i,get level(){return c},set(u,d=0){c=u,e.opacity=.55*u,i.visible=u>.001,l(d,u)},animate(u){i.visible&&l(u,c)},dispose(){t.dispose(),e.dispose()}}}var xc={color:"#ffe2a8",opacity:.55,pad:.03,grow:.06};function cm(n,[t,e,i,s,r,o]){let a=xc.pad,l=new Ae({color:xc.color,transparent:!0,opacity:0,blending:Ui,depthWrite:!1}),c=new Ft(new si(e-t+a*2,s-i+a*2,o-r+a*2),l);return c.position.set((t+e)/2,(i+s)/2,(r+o)/2),c.renderOrder=7,c.visible=!1,n.add(c),{mesh:c,set(u){l.opacity=xc.opacity*u,c.scale.setScalar(1+xc.grow*u),c.visible=u>.001},remove(){n.remove(c),c.geometry.dispose(),l.dispose()}}}function um(){let n=new is(.9,3.4,20,1,!0).rotateZ(Math.PI/2).translate(1.7,0,0),t=new Ae({color:"#ffcf7a",transparent:!0,opacity:0,blending:Ui,depthWrite:!1,side:on}),e=new Ft(n,t);return e.visible=!1,e.renderOrder=8,{mesh:e,set(i){t.opacity=.22*i,e.visible=i>.001},dispose(){n.dispose(),t.dispose()}}}function hm(){let n=new is(1,3.2,20,1,!0).translate(0,1.6,0),t=new Ae({color:"#fff0cc",transparent:!0,opacity:0,blending:Ui,depthWrite:!1,side:on}),e=new Ft(n,t);return e.visible=!1,e.renderOrder=1001,e.position.set(0,0,-3),{mesh:e,set(i){t.opacity=.35*i,e.visible=i>.001},dispose(){n.dispose(),t.dispose()}}}var Gi={fov:50,baseAspect:4/3,filter:"grayscale(1) contrast(1.15) brightness(1.05)",look:[0,1.05,(ze.z0+ze.z1)/2]};function dm(n){let t=new wn(Gi.fov,1,.05,40);t.position.set(Zn[0],Zn[1],Zn[2]-.3),t.lookAt(Gi.look[0],Gi.look[1],Gi.look[2]);let e=!1,i=null,s=n.renderer?.domElement;function r(){let{width:o,height:a}=n.size,l=n.insets||{top:0,bottom:0,left:0,right:0};t.aspect=o/Math.max(1,a);let c=Math.tan(Gi.fov*Math.PI/360);t.fov=t.aspect>Gi.baseAspect?Math.atan(c*Gi.baseAspect/t.aspect)*360/Math.PI:Gi.fov;let u=-(l.left-l.right)/2,d=-(l.top-l.bottom)/2;u||d?t.setViewOffset(o,a,u,d,o,a):t.clearViewOffset(),t.updateProjectionMatrix(),t.updateMatrixWorld()}return{camera:t,get on(){return e},enter(){e||(e=!0,t.zoom=1,r(),i=n.onResize(()=>{r()}),s&&(s.style.filter=Gi.filter),n.overrideCamera(t))},exit(){e&&(e=!1,i?.(),i=null,t.zoom=1,s&&(s.style.filter=""),n.overrideCamera(null))},refit(){e&&(r(),n.request())},get zoom(){return t.zoom},setZoom(o){t.zoom=o,t.updateProjectionMatrix(),n.request()}}}var vM=.42,SM=.35,Us={minMs:1e3,margin:.88,baseMargin:1.04,share:.5},Eh=-(cc.z0-(cs[3]+.02)),MM=n=>Bn.find(t=>t.id===n);function bM(n){let t=new Set,e=!1,i=n.reduced();return{reduced:i,get stopped(){return e},wait(s){if(e)return Promise.resolve();let r=i?Math.min(s,100):s;return new Promise(o=>{let a={res:o,t:setTimeout(()=>{t.delete(a),o()},r)};t.add(a)})},tw(s,r){return e||i?(r(1),n.stage.request(),Promise.resolve()):n.stage.tween(s,r)},fly(s,r=900){return n.stage.flyTo(s,e||i?0:r)},stop(){e=!0;for(let s of t)clearTimeout(s.t),s.res();t.clear(),n.stage.finishTweens()}}}function fm(n){let t=null,e=null,i=null,s={on:!1,ghosts:{},extras:[],beamHold:null,beamTimer:0},r=Promise.resolve(),o=0;function a(T,C,P){t||(n.savedYaw=n.stage.rig.yaw),l();let V=++o,tt=r.then(async()=>{if(V!==o)return;let dt=bM(n);t=dt,e=T,n.stage.setInput(!1);let W=/^(ev|story):/.test(T);W&&(n.spots.root.visible=!1);let ot=nt=>{try{P?.(nt)}catch(_t){console.error(_t)}};try{await C(dt,ot)}finally{W&&(n.spots.root.visible=!s.on),t===dt&&(t=null,e=null,n.stage.setInput(!0)),n.stage.request(),n.kick()}});return r=tt.catch(dt=>console.error(dt)),tt}function l(){t&&t.stop()}let c=[],u=T=>{let C=cm(n.fxRoot,T);return c.push(C),C},d=()=>{for(;c.length;)c.pop().remove()};async function h(T,C,P=1,V=350,tt=350){for(let dt=0;dt<P;dt++)await T.tw(V,W=>C.set(W)),await T.tw(tt,W=>C.set(1-W))}function p(T){let C=_h(xh);C.opacity=0;let P=mc(MM(T),C,{});return P.root.visible=!1,n.ghostRoot.add(P.root),P.fade=V=>{C.opacity=xh.opacity*V,P.root.visible=V>.001},P.remove=()=>{n.ghostRoot.remove(P.root),C.dispose()},P}async function g(T,C,P,V=1.1){for(let[tt,dt]of P){let W=C.root.position.x,ot=C.root.position.z,nt=Math.hypot(tt-W,dt-ot);nt<.001||(C.root.rotation.y=Math.atan2(tt-W,dt-ot),await T.tw(nt/V*1e3,_t=>{C.root.position.x=W+(tt-W)*_t,C.root.position.z=ot+(dt-ot)*_t}))}}let y=(T,C,P)=>{T.root.rotation.y=Math.atan2(C,P)};function m(T,C,P,V=900){return T.shot={box:C,opts:P,margin:P.margin??Us.baseMargin},T.fly(n.poseBox(C,P),V)}function f(T,C){if(C<Us.minMs||T.reduced||T.stopped)return T.wait(C);if(n.cctv.on){let V=n.cctv.zoom,tt=V+(Us.baseMargin/Us.margin-V)*Us.share;return T.tw(C,dt=>n.cctv.setZoom(V+(tt-V)*dt))}if(!T.shot)return T.wait(C);let P=T.shot.margin+(Us.margin-T.shot.margin)*Us.share;return T.shot.margin=P,T.fly(n.poseBox(T.shot.box,{...T.shot.opts,margin:P}),C)}let _=Si,w=Mr,v={"ev:lock":async(T,C)=>{let P=u([-.58,.58,.88,1.04,3.99,4.05]),V=u([.77,1.13,.86,1.14,4.04,4.08]),tt=u([-.56,.56,0,1.2,3.92,3.98]),dt=u([-1.1,-.8,.84,1.14,4.04,4.1]);try{await m(T,[-1.5,1.5,0,1.3,3.6,5],{yaw:.3,pitch:.75}),C("locked"),await T.tw(500,W=>{V.set(W),P.set(W)}),await f(T,900),await T.tw(400,W=>{V.set(1-W),P.set(1-W)}),C("opened"),await T.tw(500,W=>tt.set(W)),await f(T,800),await T.tw(400,W=>tt.set(1-W)),C("seal"),await h(T,P,2),C("patrol"),await T.tw(500,W=>dt.set(W)),await f(T,700),await T.tw(400,W=>dt.set(1-W)),C("late"),await h(T,dt,1,500,500),await f(T,300)}finally{d(),await n.restFocus("lock",T)}},"ev:fog":async(T,C)=>{let P=n.S,V=p("sera"),tt=n.stage.hold(),dt={overlay:n.overlay.value,color:n.overlay.color()};n.cctv.enter(),P.cctvWalls.visible=!0,n.details.hideAll(!0),n.spots.root.visible=!1,n.pins.mesh.visible=!1,n.dollRoot.visible=!1,n.overlay.set(0),P.lens.position.fromArray(ci),P.lens.visible=!0;try{V.root.position.set(1.5,0,-1.9),V.fade(1),C("0152"),await g(T,V,[[.95,-3],[.95,-3.65],[.15,-3.65]],1.6),y(V,0,1),await T.tw(600,W=>{V.upper.rotation.x=1.25*W}),await f(T,600),await T.tw(500,W=>{V.upper.rotation.x=1.25*(1-W)}),await g(T,V,[[.95,-3.65],[.95,-3],[1.6,-1.8]],1.6),await T.tw(300,W=>V.fade(1-W)),C("021659"),await f(T,1e3),C("021700"),await T.tw(450,W=>{n.fog.set(W,performance.now()/1e3),n.overlay.set(W,"#ffffff")}),P.lens.visible=!1,await f(T,1600),C("021708"),await T.tw(800,W=>{n.overlay.set(1-W,"#ffffff"),n.fog.set(1-W,performance.now()/1e3)}),await f(T,700),C("device"),await f(T,1100)}finally{V.remove(),tt(),n.fog.set(0),P.lens.visible=!1,P.cctvWalls.visible=!1,n.overlay.set(dt.overlay,dt.color),n.details.hideAll(!1),n.spots.root.visible=!0,n.pins.mesh.visible=n.pins.shown().length>0,n.dollRoot.visible=!0,n.cctv.exit()}},"ev:drawer":async(T,C)=>{let P=n.S,V=new Ft(P.plate.geometry,_h());V.material.opacity=0,V.visible=!1,n.fxRoot.add(V);let tt=u([_.x0,_.x1,_.y0,_.y1,_.z0,_.z1]),dt=u([Mi[0]-.12,Mi[0]+.12,Mi[1]-.06,Mi[1]+.06,-4.32,-4.2]),W=u([w.x0,w.x1,w.y0,w.y1,-3.995,-3.96]),ot=u([-.24,.24,.86,.91,-4,ze.z0-.02]),nt=u([-.3,.3,0,.03,-3.98,-3.35]);try{await Promise.all([m(T,[-1.3,1.3,0,1.4,-4.3,-2.6],{yaw:-2.3,pitch:.82}),T.tw(500,_t=>n.setPartition(1-.72*_t))]),C("cover"),await h(T,tt,1,500,700),C("slide"),V.position.set(0,0,0),await T.tw(300,_t=>{V.material.opacity=vM*_t,V.visible=!0}),await T.tw(1200,_t=>{V.position.z=Eh*_t}),await f(T,300),await T.tw(1100,_t=>{V.position.z=Eh+(-.03-Eh)*_t}),await f(T,500),C("handle"),await h(T,dt,1,500,700),C("nohandle"),await h(T,W,1,500,700),C("wax"),await T.tw(500,_t=>{ot.set(_t),nt.set(_t)}),await f(T,800),await T.tw(500,_t=>{ot.set(1-_t),nt.set(1-_t)})}finally{n.fxRoot.remove(V),V.material.dispose(),d(),n.setPartition(1),await n.restFocus("drawer",T)}},"ev:cue":async(T,C)=>{let P=u([.62,1.38,.8,1.02,-5.12,-4.86]),V=u([1.54,1.7,.86,.98,-5.1,-4.98]);try{await m(T,[.3,2.1,0,1,-5.5,-4.4],{yaw:Math.PI,pitch:1}),C("schedule"),await h(T,P,1,400,600),await f(T,400),C("run"),await f(T,1500),C("sign"),await h(T,V,1,450,650),await f(T,400),C("bundle"),await f(T,1500),C("remote"),await f(T,1400)}finally{d(),await n.restFocus("cue",T)}},"ev:audio":async(T,C)=>{let P=u([8.28,8.62,.78,1.02,-8.56,-8.4]),V=[u([.66,.94,1.15,1.6,-2.14,-1.86]),u([1.68,1.92,.92,1.46,-4.42,-4.18]),u([7.44,7.66,.78,1.26,-8.42,-8.18])];try{await m(T,[6.9,9.1,0,1.2,-8.9,-7.1],{yaw:kn,pitch:.92}),C("0210"),await h(T,P,1,400,600),C("channels"),await m(T,[-.2,9.1,0,1.5,-8.9,-1.6],{yaw:kn,pitch:.92});for(let tt of V)await h(T,tt,1,300,450);C("021700"),await T.tw(400,tt=>V.forEach(dt=>dt.set(.6*tt))),await f(T,700),await T.tw(400,tt=>V.forEach(dt=>dt.set(.6*(1-tt)))),C("021703"),await h(T,V[1],2,220,260),C("021705"),await h(T,V[2],2,220,260),await f(T,500)}finally{d(),await n.restFocus("audio",T)}},"ev:poster":async(T,C)=>{let tt=u([-6.93,-6.9,.888,.925,5.78,6.2]),dt=u([-6.93,-6.9,.832,.87,5.8,6.18]),W=u([-6.93,-6.9,.797,.834,5.8,6.18]),ot=u([-6.93,-6.9,.68,.76,5.82,6.12]),nt=new Ft(wi(.1,.07,.1,"#5a4632",{}),n.S.solid.material);nt.position.set(-6.6,.72,5.96),nt.visible=!1,n.fxRoot.add(nt);try{await m(T,[-7,-6.6,.6,1.2,5.65,6.35],{yaw:Math.PI/2,pitch:.6,margin:1.15}),C("credit"),await h(T,tt,1,450,700),C("pencil"),await h(T,dt,1,450,700),C("pen"),await h(T,W,1,450,700),C("stamp"),nt.visible=!0,await T.tw(260,_t=>{nt.position.x=-6.6-.25*_t}),await T.tw(220,_t=>{nt.position.x=-6.85+.25*_t,ot.set(_t)}),nt.visible=!1,await f(T,700),await T.tw(500,_t=>ot.set(1-_t)),await f(T,300)}finally{n.fxRoot.remove(nt),nt.geometry.dispose(),d(),await n.restFocus("poster",T)}},"verdict:dim":async T=>{let C=n.overlay.value;await T.tw(600,P=>n.overlay.set(C+(.4-C)*P,"#000000"))},"verdict:clear":async T=>{let C=n.overlay.value;await T.tw(500,P=>n.overlay.set(C*(1-P)))},"verdict:win":async T=>{let C=n.overlay.value,P=n.S.displayPool,V=P.renderOrder;try{await T.tw(400,tt=>n.overlay.set(C+(.6-C)*tt,"#000000")),P.renderOrder=1002,await T.tw(700,tt=>n.spot.set(tt)),await T.wait(1e3),await T.tw(1e3,tt=>n.overlay.set(.6*(1-tt))),await T.tw(700,tt=>n.spot.set(1-tt))}finally{P.renderOrder=V,n.spot.set(0)}},intro:async T=>{await T.fly(n.poseBox([-1.4,1.4,0,1.4,-3.8,-2.2],{yaw:kn,pitch:dc}),0),await T.wait(700),await T.fly(n.viewPose("all"),5200)}};async function E(T,C){i&&i!==C&&await x(T,i);let P=n.dolls[C];if(!P)return;i=C;let V=bi+Cn.step,tt=P.root.position.z;await T.tw(Cn.stepMs*Math.abs(V-tt)/Cn.step,dt=>{P.root.position.z=tt+(V-tt)*dt}),await T.tw(Cn.nodMs,dt=>{P.head.rotation.x=Cn.nodAngle*Math.sin(Math.PI*dt)}),P.head.rotation.x=0}async function A(T,C){let P=n.dolls[C];P&&(await T.tw(Cn.shortNodMs,V=>{P.head.rotation.x=Cn.shortNodAngle*Math.sin(Math.PI*V)}),P.head.rotation.x=0)}async function x(T,C){let P=n.dolls[C];if(!P)return;let V=P.root.position.z;await T.tw(Cn.stepMs*Math.abs(V-bi)/Cn.step,tt=>{P.root.position.z=V+(bi-V)*tt}),P.head.rotation.x=0,i===C&&(i=null)}function b(T){return s.ghosts[T]||(s.ghosts[T]=p(T))}function O(){s.on||(s.on=!0,n.details.force(!0,{instant:!0,tween:n.stage.tween}))}function I(){if(!s.on)return;s.on=!1,l();for(let C of Object.values(s.ghosts))C.remove();s.ghosts={};for(let C of s.extras)n.fxRoot.remove(C),C.geometry.dispose(),C.material.dispose();s.extras=[],U(),n.beam.set(0);let T=n.S;T.lens.visible=!1,T.lens.material=n.mats.lens,T.lens.position.fromArray(ci),T.drawer.position.z=0,T.plate.position.z=0,n.fog.set(0),n.setPool(1),n.setPartition(1),n.details.force(!1,{instant:!0,tween:n.stage.tween}),n.spots.root.visible=!0,n.stage.request()}function U(){s.beamHold?.(),s.beamHold=null,clearTimeout(s.beamTimer)}function z(T){let C=n.S;U(),n.beam.set(0);for(let P of Object.values(s.ghosts))P.fade(0),P.upper.rotation.x=0,Ah(P,!1);for(let P of s.extras)P.visible=!1;C.lens.material=n.mats.lens,C.lens.visible=T<=4||T===7,C.lens.position.fromArray(ci),C.drawer.position.z=T===6?-.03:0,C.plate.position.z=0,n.fog.set(T===6?1:0),n.setPool(T===6?.25:1),n.setPartition(T===4||T===5?.28:1),T===5&&(n.fog.set(SM),n.setPool(.25))}let X=()=>n.poseBox([-1.5,1.5,0,1.8,-4.2,-1.8],{yaw:kn,pitch:.85}),L=()=>n.poseBox([-1.6,2.2,0,1.6,-6,-2.4],{yaw:kn,pitch:.95}),H=()=>n.poseBox([-1.6,2.2,0,1.6,-6.4,-2.4],{yaw:kn+Math.PI,pitch:.9}),K=[async T=>{let C=Z("stampTool",()=>new Ft(wi(.1,.07,.1,"#5a4632",{}),new Ae({color:"#5a4632"})));C.position.set(-6.6,.72,5.96);let P=u([-6.93,-6.9,.68,.76,5.82,6.12]);try{await T.fly(n.poseBox([-7,-6.6,.6,1.2,5.65,6.35],{yaw:Math.PI/2,pitch:.6,margin:1.15}),1e3),C.visible=!0,await T.tw(500,V=>{C.position.x=-6.6-.25*V}),await T.tw(400,V=>{C.position.x=-6.85+.25*V,P.set(V)}),C.visible=!1,await T.wait(900),await T.tw(600,V=>P.set(1-V))}finally{d()}},async T=>{let C=b("sera");await T.fly(X(),1e3),C.root.position.set(1.5,0,-1.9),await T.tw(400,P=>C.fade(P)),await g(T,C,[[.95,-3],[.95,-3.65],[.15,-3.65]]),y(C,0,1),await T.tw(600,P=>{C.upper.rotation.x=1.25*P}),await T.wait(600),await T.tw(500,P=>{C.upper.rotation.x=1.25*(1-P)}),await g(T,C,[[.95,-3.65],[.95,-3],[1.6,-1.8]]),await T.tw(400,P=>C.fade(1-P))},async T=>{let C=u([-.58,.58,.88,1.04,3.99,4.05]),P=u([-.56,.56,0,1.2,3.92,3.98]);try{await T.fly(n.poseBox([-1.5,1.5,0,1.3,3.6,5],{yaw:.3,pitch:.75}),1e3),await T.tw(500,V=>P.set(.6*V)),await h(T,C,2,450,450),await T.tw(500,V=>P.set(.6*(1-V)))}finally{d()}},async T=>{let C=b("yujin"),P=Z("recLamp",()=>new Ft(new Xn(.025,10,8),new Ae({color:"#ff3b30"})));P.position.set(Ls[0]+.1,.83,Ls[2]+.02),await T.fly(n.poseBox([6.8,9.1,0,1.4,-8.9,-7],{yaw:kn,pitch:.9}),1e3),C.root.position.set(Ls[0],0,-7.65),y(C,0,-1),Ah(C,!0),await T.tw(600,V=>C.fade(V)),await T.wait(500),P.visible=!0,n.stage.request(),await T.wait(1500)},async T=>{let C=b("doyun"),P=u([1.54,1.7,.86,.98,-5.1,-4.98]),V=n.stage.hold();try{n.setPartition(1),await Promise.all([T.fly(H(),1e3),T.tw(500,tt=>n.setPartition(1-.72*tt))]),C.root.position.set(fh[0],0,-5.5),y(C,0,1),await T.tw(500,tt=>C.fade(tt)),await T.tw(400,tt=>{C.upper.rotation.x=.3*tt}),await T.tw(250,tt=>P.set(tt)),await T.tw(400,tt=>{C.upper.rotation.x=.3*(1-tt),P.set(1-tt)}),await T.tw(700,tt=>n.setPool(1-.75*tt)),await T.tw(1200,tt=>n.fog.set(tt,performance.now()/1e3)),await T.wait(800)}finally{d(),V()}},async T=>{let C=n.S,P=b("doyun"),V=u([1.68,1.92,.92,1.46,-4.42,-4.18]),tt=n.stage.hold(),dt=C.lens.position.clone();try{await T.fly(H(),900),P.root.position.set(fh[0],0,-5.5),P.fade(1),await g(T,P,[[.45,-5.3],[.42,-4.7]]),y(P,-1,1),await T.tw(400,nt=>{P.upper.rotation.x=-.18*nt}),await T.tw(900,nt=>{C.drawer.position.z=-.6*nt,C.lens.position.z=dt.z-.6*nt}),await T.tw(900,nt=>{C.plate.position.z=-.9*nt,C.lens.position.z=dt.z-.6-.9*nt}),await T.tw(500,nt=>{P.upper.rotation.x=-.18*(1-nt)});let W=C.lens.position.clone(),ot={x:us[0],y:.745,z:us[2]};C.lens.material=n.amberLens,n.stage.request(),await T.tw(900,nt=>{C.lens.position.set(W.x+(ot.x-W.x)*nt,W.y+(ot.y-W.y)*nt+.35*Math.sin(Math.PI*nt),W.z+(ot.z-W.z)*nt)}),C.lens.material=n.mats.lens,n.stage.request(),await h(T,V,2,200,240),await T.tw(700,nt=>{C.plate.position.z=-.9*(1-nt)}),await T.tw(700,nt=>{C.drawer.position.z=-.6+(.6-.03)*nt}),await T.wait(500)}finally{C.lens.material=n.mats.lens,d(),tt()}},async T=>{let C=n.stage.hold();try{await T.fly(X(),1e3),await T.tw(1600,P=>n.fog.set(1-P,performance.now()/1e3)),await T.wait(1200)}finally{C()}},async T=>{let C=n.S;if(C.lens.visible=!1,await T.fly(X(),1e3),C.lens.material=n.amberLens,C.lens.visible=!0,n.beam.mesh.position.set(ci[0],ci[1]+.12,ci[2]),await T.tw(900,P=>{n.beam.set(P),n.setPool(1)}),!T.reduced&&!T.stopped){s.beamHold=n.stage.hold();let P=performance.now();n.beam.spin=()=>{n.beam.mesh.rotation.y=(performance.now()-P)/1e3*(Math.PI*2/12)},s.beamTimer=setTimeout(U,24e3)}await T.wait(1200)}];function Z(T,C){let P=s.extras.find(V=>V.name===T);return P||(P=C(),P.name=T,n.fxRoot.add(P),s.extras.push(P)),P.visible=!1,P}return{get playing(){return e},get storyOn(){return s.on},play(T,{onCue:C}={}){if(T.startsWith("talk:nod:")){let V=T.slice(9);return a(T,tt=>A(tt,V))}if(T.startsWith("talk:")){let V=T.slice(5);return a(T,tt=>V==="end"?i?x(tt,i):Promise.resolve():E(tt,V))}let P=v[T];return P?a(T,P,C):Promise.resolve()},stop(){o++,l()},story(T){return T=Math.max(0,Math.min(7,T|0)),O(),a("story:"+T,async C=>{z(T),await K[T](C)})},storyExit:I,dispose(){I(),d()}}}var Rr="02:17, \uB9C8\uC9C0\uB9C9 \uC810\uAC80",pm="\uB2E8\uD3B8 \uCD94\uB9AC \xB7 \uCCAD\uCD08 \uB4F1\uB300 \uAE30\uD68D\uC804",_c="\uC0C8\uBCBD \uB450 \uC2DC \uC2ED\uCE60 \uBD84. \uC720\uB9AC \uC9C4\uC5F4\uB300\uC5D0 \uC548\uAC1C\uAC00 \uBC00\uB824\uC624\uACE0, \uB4F1\uB300 \uC2DC\uC81C\uD488 \uB80C\uC988\uAC00 \uC0AC\uB77C\uC84C\uB2E4. \uC815\uBB38 \uBD09\uC778\uC740 \uADF8\uB300\uB85C\uB2E4. \uAC1C\uC7A5\uAE4C\uC9C0 \uB0A8\uC740 \uC870\uC0AC \uAE30\uD68C\uB294 \uC544\uD649 \uBC88, \uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uC138 \uBC88.",mm=["\uD604\uC7A5\uC758 \uC99D\uAC70\uB97C \uCC98\uC74C \uD655\uC778\uD560 \uB54C, \uADF8\uB9AC\uACE0 \uC0AC\uB78C\uC5D0\uAC8C \uCC98\uC74C \uC9C8\uBB38\uD560 \uB54C \uC870\uC0AC \uAE30\uD68C\uB97C \uD55C \uBC88\uC529 \uC501\uB2C8\uB2E4. \uC99D\uAC70 \uC5EC\uC12F \uAC1C\uC640 \uC0AC\uB78C \uB124 \uBA85\uC744 \uD569\uCE58\uBA74 \uC5F4\uC778\uB370 \uAE30\uD68C\uB294 \uC544\uD649 \uBC88\uC774\uB77C, \uD558\uB098\uB294 \uAC74\uB108\uB6F0\uC5B4\uC57C \uD569\uB2C8\uB2E4.","\uB2E4\uC2DC \uC77D\uAE30, \uC99D\uAC70 \uC81C\uC2DC, \uAE30\uB85D \uACE0\uC815, \uD78C\uD2B8\uC5D0\uB294 \uC870\uC0AC \uAE30\uD68C\uB97C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uBA74\uB2F4\uC5D0\uC11C \uC774\uBBF8 \uC9C8\uBB38\uD55C \uC0AC\uB78C\uC5D0\uAC8C\uB294, \uD604\uC7A5\uC5D0\uC11C \uD655\uC778\uD574 \uB454 \uC99D\uAC70\uB97C \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uACB0\uB860\uC740 \uBC94\uC778 \uD55C \uBA85\uACFC \uC99D\uAC70 \uB450 \uAC1C\uB85C \uB0C5\uB2C8\uB2E4. \uD55C \uC99D\uAC70\uB294 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744, \uB2E4\uB978 \uD55C \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC758 \uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098\uB294 \uC9C0\uC810\uC744 \uBCF4\uC5EC \uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uB450 \uC99D\uAC70 \uBAA8\uB450 \uADF8 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC5B4\uC57C \uC81C\uCD9C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uC138 \uBC88\uC785\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uACE0, \uC138 \uBC88\uC744 \uB2E4 \uC4F0\uBA74 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.","\uC870\uC0AC \uAE30\uB85D\uC740 \uC774 \uAE30\uAE30\uC5D0 \uC790\uB3D9\uC73C\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC571\uC744 \uB2EB\uC558\uB2E4 \uC5F4\uC5B4\uB3C4 \uC774\uC5B4\uC11C \uD560 \uC218 \uC788\uACE0, \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC9C0\uC6CC\uC9D1\uB2C8\uB2E4(\uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4)."],gm=["\uCC98\uC74C \uD655\uC778\xB7\uCC98\uC74C \uC9C8\uBB38\uC740 \uC870\uC0AC 1\uD68C","\uB2E4\uC2DC \uBCF4\uAE30\xB7\uC81C\uC2DC\xB7\uACE0\uC815\xB7\uD78C\uD2B8\uB294 \uBB34\uB8CC","\uACB0\uB860\uC740 \uD55C \uBA85 + \uC99D\uAC70 \uB450 \uAC1C, \uAE30\uD68C \uC138 \uBC88"],Ir={lock:[{cue:"locked",t:"01:58 \uC7A0\uAE40 \xB7 \uBD09\uC778"},{cue:"opened",t:"02:19 \uACBD\uBE44\uAC00 \uBD09\uC778\uC744 \uD655\uC778\uD558\uACE0 \uC5F4 \uB54C\uAE4C\uC9C0, \uBB38\uC774 \uC5F4\uB9B0 \uAE30\uB85D\uC740 \uD55C \uAC74\uB3C4 \uC5C6\uC74C"},{cue:"seal",t:"\uADF8\uB54C\uAE4C\uC9C0 \uAE30\uACC4\uC2DD \uBD09\uC778 \uBC88\uD638\uB294 \uB300\uC7A5\uACFC \uAC19\uC558\uACE0, \uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C"},{cue:"patrol",t:"\uC815\uBB38 \uC606 \uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94\uB294 30\uBD84\uB9C8\uB2E4 \uB20C\uB7EC\uC57C \uD568"},{cue:"late",t:"02:00 \uCC28\uB840\uAC00 02:09\uC5D0 \uB20C\uB9BC"}],fog:[{cue:"0152",t:"01:52 \uBB38\uC138\uB77C\uAC00 \uBC1B\uCE68\uB300 \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5 \uCABD\uC73C\uB85C \uD5C8\uB9AC\uB97C \uC219\uC600\uB2E4\uAC00 \uB098\uAC10"},{cue:"021659",t:"02:16:59\uAE4C\uC9C0 \uB80C\uC988\uB294 \uC81C\uC790\uB9AC"},{cue:"021700",t:"02:17:00 \uC548\uAC1C\uAC00 \uD130\uC838 8\uCD08 \uB3D9\uC548 \uD654\uBA74\uC774 \uD558\uC597\uAC8C \uAC00\uB824\uC9D0"},{cue:"021708",t:"\uC548\uAC1C\uAC00 \uAC77\uD78C \uD654\uBA74\uC5D0\uB294 \uB80C\uC988\uAC00 \uC5C6\uC74C \xB7 \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44 \xB7 \uD654\uBA74\uC5D0 \uC0AC\uB78C\uC740 \uC7A1\uD788\uC9C0 \uC54A\uC74C"},{cue:"device",t:"\uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D: \u2018\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9\u2019"}],drawer:[{cue:"cover",t:"\uC720\uB9AC \uB36E\uAC1C\uB294 \uC55E\uACFC \uC606, \uC704\uB9CC \uB9C9\uC74C"},{cue:"slide",t:"\uB4A4\uCABD\uC740 \uC815\uBE44\uC6A9 \uC11C\uB78D\uC758 \uC55E\uD310 \u2014 \uC11C\uB78D\uC744 \uB2F9\uAE30\uBA74 \uB80C\uC988\uB97C \uC62C\uB824 \uB454 \uBC1B\uCE68\uD310\uC774 \uD1B5\uC9F8\uB85C \uB4A4\uB85C \uBE60\uC838\uB098\uC634"},{cue:"handle",t:"\uC190\uC7A1\uC774\uB294 \uCE78\uB9C9\uC774\uBCBD\uC758 \uC810\uAC80\uAD6C \uB108\uBA38, \uC870\uBA85 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uB2EC\uB824 \uC788\uC74C"},{cue:"nohandle",t:"\uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC774\uCABD\uC5D0\uC11C\uB294 \uB2F9\uAE38 \uC218 \uC5C6\uC74C"},{cue:"wax",t:"\uC11C\uB78D\uC740 \uC190\uAC00\uB77D \uB450 \uB9C8\uB514\uB9CC\uD07C \uB35C \uB2EB\uD600 \uC788\uACE0, \uB808\uC77C\uACFC \uADF8 \uC544\uB798 \uBC14\uB2E5\uC5D0 \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8"}],cue:[{cue:"schedule",t:"\uC608\uC57D\uD45C\uC5D0 \uC62C\uB77C \uC788\uB294 \uC790\uB3D9 \uC810\uAC80\uC740 02:30 \uD55C \uAC74\uBFD0"},{cue:"run",t:"\uC2E4\uD589 \uAE30\uB85D: 02:17:00\uC5D0 \uD050 \uD558\uB098\uAC00 \uC2E4\uD589\uB428"},{cue:"sign",t:"\uC2E4\uD589 \uBC29\uC2DD \u2018\uC218\uB3D9\u2019 \xB7 \uC785\uB825 \uC704\uCE58 \u2018\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94\u2019 \xB7 \uC11C\uBA85 \uCE78 \u2018H.D.Y.\u2019"},{cue:"bundle",t:"\uC774 \uD050\uC5D0\uB294 \uC9C4\uC5F4\uB300 \uC870\uBA85\uC744 \uB0AE\uCD94\uB294 \uB3D9\uC791\uACFC \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638\uAC00 \uD568\uAED8 \uBB36\uC5EC \uC788\uC74C"},{cue:"remote",t:"\uC6D0\uACA9 \uC811\uC18D \uAE30\uB85D\uC740 \uC5C6\uC74C"}],audio:[{cue:"0210",t:"02:10\uBD80\uD130 \uB04A\uAE40 \uC5C6\uC774 \uC774\uC5B4\uC9C4 \uB179\uC74C"},{cue:"channels",t:"1\uBC88 \uCC44\uB110 \uC9C4\uC5F4\uB300 \uC55E \uB9C8\uC774\uD06C \xB7 2\uBC88 \uCC44\uB110 \uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C \xB7 3\uBC88 \uCC44\uB110 \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC758 \uBA54\uBAA8\uC6A9 \uB9C8\uC774\uD06C"},{cue:"021700",t:"02:17:00 \uC548\uAC1C \uBD84\uC0AC\uC74C \uC2DC\uC791"},{cue:"021703",t:"02:17:03 2\uBC88 \uCC44\uB110\uC5D0\uB9CC \uAE08\uC18D\uC774 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uD06C\uAC8C \uC7A1\uD798"},{cue:"021705",t:"02:17:05 3\uBC88 \uCC44\uB110\uC5D0 \u201C\uC5B4, \uBC8C\uC368?\u201D\uB77C\uB294 \uC11C\uC720\uC9C4\uC758 \uBAA9\uC18C\uB9AC"}],poster:[{cue:"credit",t:"\uD06C\uB808\uB514\uD2B8\uC758 \u2018\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04\u2019\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C \uD55C \uC0AC\uB78C\uC758 \uC774\uB984\uB9CC \uC2E4\uB824 \uC788\uC74C"},{cue:"pencil",t:"\uC5EC\uBC31\uC758 \uC5F0\uD544 \uBA54\uBAA8: \u2018\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD\u2019"},{cue:"pen",t:"\uD30C\uB780 \uD39C \uBA54\uBAA8: \u2018\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4\u2019"},{cue:"stamp",t:"\uB450 \uBA54\uBAA8 \uC704\uC5D0 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5 \xB7 \uB3C4\uC7A5\uC5D0 \uC801\uD78C \uC2DC\uAC01 01:40"}]},Vi={min:{place:"door-out",label:"\uBCF8\uC778 \uC9C4\uC220: \uC815\uBB38 \uC55E"},sera:{place:"conservation",label:"\uBCF8\uC778 \uC9C4\uC220: \uBCF4\uC874\uC2E4"},doyun:{place:"west-corridor",label:"\uBCF8\uC778 \uC9C4\uC220: \uB85C\uBE44 \uCABD \uBCF5\uB3C4"},yujin:{place:"sound-desk",label:"\uBCF8\uC778 \uC9C4\uC220: \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C"}},dn=[["01:40","\uD64D\uBCF4 \uD328\uB110 \uAD50\uC815\uC9C0\uC5D0 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5\uC774 \uCC0D\uD614\uC2B5\uB2C8\uB2E4. \uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C\uC758 \uC774\uB984\uB9CC \uB0A8\uC558\uC2B5\uB2C8\uB2E4."],["01:52","\uBB38\uC138\uB77C\uAC00 \uB9C8\uC9C0\uB9C9 \uC810\uAC80\uC744 \uD588\uACE0, \uBC1B\uCE68\uB300 \uB4A4 \uBC14\uB2E5\uC740 \uAE68\uB057\uD588\uC2B5\uB2C8\uB2E4."],["01:58","\uC815\uBB38\uC774 \uC7A0\uAE30\uACE0 \uBD09\uC778\uB410\uC2B5\uB2C8\uB2E4. 02\uC2DC 19\uBD84\uC5D0 \uBD09\uC778\uC744 \uD480 \uB54C\uAE4C\uC9C0 \uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."],["02:10","\uC11C\uC720\uC9C4\uC774 02\uC2DC 30\uBD84 \uC810\uAC80\uC744 \uAE30\uB2E4\uB9AC\uBA70 \uB179\uC74C\uC744 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4."],["02:17:00","\uD55C\uB3C4\uC724\uC774 \uC870\uBA85 \uBD80\uC2A4 \uCF58\uC194\uC5D0\uC11C \uD050\uB97C \uC190\uC73C\uB85C \uC2E4\uD589\uD588\uC2B5\uB2C8\uB2E4. \uC9C4\uC5F4\uB300 \uC870\uBA85\uC774 \uB0AE\uC544\uC9C0\uACE0 \uC548\uAC1C\uAC00 \uD130\uC84C\uC2B5\uB2C8\uB2E4."],["02:17:03","\uD55C\uB3C4\uC724\uC774 \uBD80\uC2A4 \uC548\uCABD \uC190\uC7A1\uC774\uB85C \uC815\uBE44 \uC11C\uB78D\uC744 \uB2F9\uACA8 \uB80C\uC988\uB97C \uBC1B\uCE68\uD310\uC9F8 \uBE7C\uB0C8\uACE0, \uC7A5\uBE44 \uC218\uB808\uC5D0 \uC2E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC218\uB808\uC758 \uC7A0\uAE08\uC1E0\uAC00 \uB538\uAE4D \uC18C\uB9AC\uB97C \uB0C8\uC2B5\uB2C8\uB2E4."],["02:17:08","\uC548\uAC1C\uAC00 \uAC77\uD614\uC744 \uB54C \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44\uC600\uACE0 \uB80C\uC988\uB9CC \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4."]],Lr={title:"\uC0AC\uAC74 \uD574\uACB0",lead:"\uC548\uAC1C\uAC00 \uAC77\uD614\uC2B5\uB2C8\uB2E4. \uB80C\uC988\uAC00 \uC0AC\uB77C\uC9C0\uB294 \uB3D9\uC548 \uC815\uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",method:"\uBB38\uC744 \uC5F4 \uD544\uC694\uAC00 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4. \uC815\uBE44 \uC11C\uB78D\uC740 \uC870\uBA85 \uBD80\uC2A4\uC5D0\uC11C\uB9CC \uB2F9\uAE38 \uC218 \uC788\uC5C8\uACE0, \uC548\uAC1C\uB294 02\uC2DC 30\uBD84 \uC790\uB3D9 \uC810\uAC80\uC5D0 \uBB36\uC5EC \uC788\uB358 \uAC83\uC744 13\uBD84 \uC55E\uB2F9\uACA8 \uC190\uC73C\uB85C \uD130\uB728\uB9B0 \uAC83\uC774\uC5C8\uC2B5\uB2C8\uB2E4.",cross:"\uC11C\uB78D\uC740 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uC5C8\uC9C0\uB9CC \uB204\uAC00 \uB2F9\uACBC\uB294\uC9C0\uB294 \uB9D0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC218\uB3D9 \uC2E4\uD589 \uAE30\uB85D\uC740 \uADF8 \uC2DC\uAC01 \uBD80\uC2A4 \uCF58\uC194 \uC55E\uC5D0 \uB204\uAC00 \uC788\uC5C8\uB294\uC9C0\uB97C \uBCF4\uC5EC \uC8FC\uC5C8\uC9C0\uB9CC \uB80C\uC988\uAC00 \uC5B4\uB5BB\uAC8C \uB098\uAC14\uB294\uC9C0\uB294 \uB9D0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB450 \uC99D\uAC70\uB294 02\uC2DC 17\uBD84\uC774\uB77C\uB294 \uAC19\uC740 \uC2DC\uAC01, \uC870\uBA85 \uBD80\uC2A4\uB77C\uB294 \uAC19\uC740 \uC790\uB9AC\uB97C \uAC00\uB9AC\uCF30\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01 \uBD80\uC2A4\uB97C \uBE44\uC6E0\uACE0 \uCF58\uC194\uC5D0 \uC190\uB3C4 \uB300\uC9C0 \uC54A\uC558\uB2E4\uB358 \uD55C\uB3C4\uC724\uC758 \uB9D0\uC740, \uC790\uC2E0\uC758 \uC11C\uBA85\uC774 \uB0A8\uC740 \uC218\uB3D9 \uC2E4\uD589 \uAE30\uB85D \uC55E\uC5D0\uC11C \uBB34\uB108\uC84C\uC2B5\uB2C8\uB2E4.",motive:"\uD55C\uB3C4\uC724\uC774 \uC124\uACC4\uD55C \uC5F0\uCD9C\uC778\uB370 \uBCF4\uB3C4\uC6A9 \uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C\uC758 \uC774\uB984\uB9CC \uC62C\uB790\uACE0, \uC815\uC815 \uC694\uCCAD\uC740 \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uADF8\uB294 \uADF8\uAC83\uC744 \uCC38\uC744 \uC218 \uC5C6\uC5C8\uB2E4\uACE0 \uB4A4\uB2A6\uAC8C \uC778\uC815\uD588\uC2B5\uB2C8\uB2E4. \uB80C\uC988\uB294 \uC870\uBA85 \uBD80\uC2A4\uC758 \uC7A5\uBE44 \uC218\uB808\uC5D0\uC11C \uB098\uC654\uACE0, \uC774\uC81C \uB2E4\uC2DC \uC81C\uC790\uB9AC\uC5D0\uC11C \uBE5B\uC744 \uB0C5\uB2C8\uB2E4."},xm="\uC138 \uBC88 \uB0B8 \uACB0\uB860\uC774 \uBAA8\uB450 \uC785\uC99D\uC5D0 \uC774\uB974\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAC1C\uC7A5 \uC2DC\uAC01\uC774 \uB418\uC5B4 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB118\uC5B4\uAC11\uB2C8\uB2E4. \uB204\uAC00 \uD55C \uC77C\uC778\uC9C0\uB294 \uC5EC\uAE30\uC5D0 \uC801\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4.";function Yo(n){let t=[],e=/[.?!…]\s+/g,i=0,s;for(;s=e.exec(n);)t.push(n.slice(i,s.index+1)),i=s.index+s[0].length;t.push(n.slice(i));let r=[],o="";for(let a of t)o=o?o+" "+a:a,(o.length>=12||/[.?!]$/.test(o))&&(r.push(o),o="");return o&&r.push(o),r}var Ch=(n,t,e)=>{let i=n.charCodeAt(n.length-1);return i>=44032&&i<=55203&&(i-44032)%28?t:e},Zo=["\uC601","\uD55C","\uB450","\uC138"],_m=["","\uCCAB","\uB450","\uC138"];function ym(n){let t=Dp(),e=om(n),i=jp(t);n.add(i.root);let s=em(t);n.add(s.root);let r={geometry:new Xn(hi.proxyRadius,8,6),material:t.proxy},o=new Pe;o.name="dolls";let a={};for(let _ of Bn){let w=mc(_,t.doll,{shadow:t.shadow,proxy:r});a[_.id]=w,o.add(w.root)}n.add(o);let l=nm();n.add(l.mesh);let c=sm();n.add(c.root);let u=new Pe;u.name="fx",n.add(u);let d=new Pe;d.name="ghosts",n.add(d);let h=am();n.add(h.mesh);let p=lm();n.add(p.mesh);let g=um();n.add(g.mesh);let y=hm();n.add(y.mesh);let m=new Ae({color:"#ffb347"}),f=[...s.proxies,...Object.values(a).map(_=>_.root.userData.proxy)];return{scene:n,mats:t,lights:e,S:i,spots:s,dolls:a,dollRoot:o,pins:l,details:c,fxRoot:u,ghostRoot:d,overlay:h,fog:p,beam:g,spot:y,amberLens:m,proxyGeometry:r.geometry,pickables:f}}var wM=n=>{try{return matchMedia(n).matches}catch{return!1}};function vm(n,{onPick:t,onFrame:e,reducedMotion:i=!1}={}){let s=ym(n.scene),{S:r,spots:o,dolls:a,pins:l,details:c,overlay:u,fog:d,beam:h}=s;n.limits.spanMax=40,n.limits.spanMin=.6,n.setPickables(s.pickables);let p=!!i,g=!1,y=!1,m=()=>p||wM("(prefers-reduced-motion: reduce)"),f=kn,_="all",w=null,v=!1,E=!0,A="normal",x=new G,b=new G,O=new G,I=new G;function U([k,lt,ct,It,ee,$t],{yaw:F=f,pitch:oe=dc,margin:Wt=1.04}={}){let{width:le,height:ft}=n.size,Me=n.insets,Ut=new G((k+lt)/2,(ct+It)/2,(ee+$t)/2);O.set(Math.cos(oe)*Math.sin(F),Math.sin(oe),Math.cos(oe)*Math.cos(F)),x.set(Math.cos(F),0,-Math.sin(F)),b.crossVectors(O,x);let kt=0,R=0;for(let ut of[k,lt])for(let rt of[ct,It])for(let mt of[ee,$t])I.set(ut,rt,mt).sub(Ut),kt=Math.max(kt,Math.abs(I.dot(x))),R=Math.max(R,Math.abs(I.dot(b)));let S=Math.max(.25,(ft-Me.top-Me.bottom)/ft),q=Math.max(.25,(le-Me.left-Me.right)/le);return{target:Ut,yaw:F,pitch:oe,span:Math.max(R/S,kt/(le/ft*q))*Wt}}function z(k){let[lt,ct,It,ee]=hc[k]||hc.all;return U([lt,ct,0,1.2,It,ee],{margin:k==="hall"?1.01:1.04})}let X=Bn.reduce((k,lt)=>k+lt.x,0)/Bn.length;function L(k){if(k&&k.startsWith("p:")){if(!Bn.find(le=>"p:"+le.id===k))return null;let oe=Np,Wt=bi+Cn.step/2;return U([X-oe.halfX,X+oe.halfX,oe.y0,oe.y1,Wt-oe.halfZ,Wt+oe.halfZ],{yaw:oe.yaw,pitch:oe.pitch,margin:1})}let lt=k&&ki[k.slice(2)];if(!lt)return null;let[ct,It,ee]=lt.focus,$t=br.half;return U([ct-$t,ct+$t,0,It+.6,ee-$t,ee+$t],{pitch:br.pitch,margin:1})}let H=k=>m()?0:k,K=0,Z=0;function T(){o.still();for(let k of Object.values(a))k.upper.scale.y=1}function C(){Z=0;let k=typeof document<"u"&&document.hidden;if(y||g||m()||k||performance.now()>K){T(),n.request();return}n.request(),Z=setTimeout(C,50)}function P(){y||g||m()||(K=performance.now()+9e3,Z||C())}let V=n.onFrame((k,lt)=>{let ct=lt/1e3;!m()&&!g&&performance.now()<=K&&(o.animate(ct),Bn.forEach((It,ee)=>{a[It.id].upper.scale.y=1+Cn.breathAmp*Math.sin(2*Math.PI*(ct+ee*Cn.phaseStep)/Cn.breathPeriod)})),d.mesh.visible&&!m()&&d.animate(ct),h.mesh.visible&&h.spin&&h.spin()}),tt=n.onChange(()=>{try{e?.()}catch(k){console.error(k)}});n.onUserMove(()=>{v=!0,P()});let dt=()=>{document.hidden||P()},W=!1,ot=n.renderer?.domElement,nt=()=>{W=!0},_t=()=>{W=!1,n.request()};ot?.addEventListener?.("webglcontextlost",nt),ot?.addEventListener?.("webglcontextrestored",_t),typeof document<"u"&&document.addEventListener("visibilitychange",dt);let yt=dm(n);function Ht(k){let lt=r.partition.material,ct=k<.999;lt.transparent!==ct&&(lt.transparent=ct,lt.depthWrite=!ct,lt.needsUpdate=!0),lt.opacity=k,r.partition.renderOrder=ct?3:0}function Ue(k){r.displayPool.material.opacity=k}let Bt={stage:n,S:r,mats:s.mats,dolls:a,dollRoot:s.dollRoot,spots:o,pins:l,details:c,overlay:u,fog:d,beam:h,spot:s.spot,cctv:yt,fxRoot:s.fxRoot,ghostRoot:s.ghostRoot,amberLens:s.amberLens,reduced:m,kick:P,poseBox:U,viewPose:z,setPartition:Ht,setPool:Ue,restFocus:(k,lt)=>lt.fly(L("e:"+k),br.ms)},Jt=fm(Bt);n.onTap(k=>{if(P(),k&&!Jt.playing)try{t?.(k)}catch(lt){console.error(lt)}});function fe(){if(Jt.playing||v)return;let k=w?L(w):z(_);k&&n.flyTo(k,0)}let Qt=n.onResize(()=>{fe()}),Fe=k=>n.toScreen(k),Be=new G,He={sync(k){if(!k)return;o.set(k.marks,k.selected,k.accuse),c.set(k.unlocked,{instant:E||m(),tween:(ct,It)=>n.tween(H(ct),It)}),l.set(k.claims);let lt=k.mood||"normal";if(lt!==A||E){if(lt!=="win"&&Jt.storyOn&&Jt.storyExit(),!yt.on){let ct=lt==="dim"?.4:0,It=u.value;Math.abs(ct-It)>.001&&n.tween(E?0:H(500),ee=>u.set(It+(ct-It)*ee,"#000000"))}A=lt}E=!1,n.request(),P()},view(k,{instant:lt,resetYaw:ct}={}){return hc[k]||(k="all"),ct&&(f=kn),_=k,w=null,v=!1,P(),n.flyTo(z(k),lt?0:H(br.ms))},rotate(k,{quiet:lt=!1}={}){f+=(k<0?-1:1)*Math.PI/2,lt||P();let ct=w&&w.startsWith("p:");return!v&&!ct&&!Jt.playing?n.flyTo(w?L(w):z(_),H(450)):n.rotateBy(k<0?-1:1,H(450))},focus(k,{instant:lt}={}){if(!k)return w=null,He.view(_,{instant:lt});let ct=L(k);return ct?(w=k,v=!1,P(),n.flyTo(ct,lt?0:H(br.ms))):Promise.resolve()},setInsets(k){n.setInsets(k||{}),yt.refit(),fe()},play(k,{onCue:lt}={}){return Jt.play(k,{onCue:lt})},stop(){Jt.stop()},story(k){return A==="win"?Jt.story(k):Promise.resolve()},isLost(){if(W)return!0;try{return!!n.renderer?.getContext?.()?.isContextLost?.()}catch{return!1}},people(){let k=s.dollRoot.visible&&!yt.on;return Bn.map(lt=>{let ct=Fe(a[lt.id].root.localToWorld(Be.set(0,Qp,0)));return{id:"p:"+lt.id,key:lt.id,x:ct.x,y:ct.y,visible:k&&ct.visible}})},spots(){let k=o.root.visible&&!yt.on;return Ns.map(lt=>{let ct=Fe(o.labelPoint(lt));return{id:"e:"+lt,key:lt,x:ct.x,y:ct.y,visible:k&&ct.visible}})},pins(){return l.shown().map(k=>{let lt=Fe(l.labelPoint(k));return{id:"p:"+k,key:k,x:lt.x,y:lt.y,visible:!yt.on&&lt.visible,label:Vi[k]?.label||""}})},setQuality(k){n.setQuality(k==="low"?"low":"high"),d.mesh.count=k==="low"?24:d.mesh.instanceMatrix.count},setReducedMotion(k){p=!!k,p?(T(),n.request()):P()},pause(k){g=!!k,g?(clearTimeout(Z),Z=0,T(),n.request()):(n.request(),P())},debug(){let k=n.renderer?.info?.render||{};return{view:_,focus:w,unlocked:c.unlocked(),playing:Jt.playing,story:Jt.storyOn,drawCalls:k.calls??null,triangles:k.triangles??null}},dispose(){if(y)return;y=!0,clearTimeout(Z),Jt.dispose(),yt.exit(),V(),tt(),Qt(),typeof document<"u"&&document.removeEventListener("visibilitychange",dt),ot?.removeEventListener?.("webglcontextlost",nt),ot?.removeEventListener?.("webglcontextrestored",_t);let k=new Set;n.scene.traverse(lt=>{lt.geometry&&!k.has(lt.geometry)&&(k.add(lt.geometry),lt.geometry.dispose());let ct=Array.isArray(lt.material)?lt.material:lt.material?[lt.material]:[];for(let It of ct)k.has(It)||(k.add(It),It.map?.dispose(),It.dispose())}),c.dispose(),o.dispose(),l.dispose(),n.dispose()}};return n.flyTo(z("all"),0),n.request(),P(),He}async function Sm(n,{onPick:t,onFrame:e,reducedMotion:i}={}){let s=Cp(n);return vm(s,{onPick:t,onFrame:e,reducedMotion:i})}var Lh="0217-v3-save";var Pr=null,Ih=new Set,Jo=()=>{for(let n of Ih)try{n(hs())}catch{}};function Mm(n){return Ih.add(n),()=>Ih.delete(n)}function bm(){try{return matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0}catch{return!1}}function Rh(){let n=navigator.userAgent||"";return/iPhone|iPad|iPod/.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?"ios":/Android/.test(n)?"android":"desktop"}function hs(){return bm()?{mode:"installed",kind:Rh()}:Pr?{mode:"prompt",kind:Rh()}:{mode:"manual",kind:Rh()}}async function wm(){if(!Pr)return"unavailable";let n=Pr;Pr=null;try{await n.prompt();let t=await n.userChoice;return Jo(),t&&t.outcome||"dismissed"}catch{return Jo(),"error"}}function Ko(n){return n==="ios"?["\uC0AC\uD30C\uB9AC \uC544\uB798\uCABD\uC758 \uACF5\uC720 \uB2E8\uCD94(\uB124\uBAA8\uC5D0\uC11C \uD654\uC0B4\uD45C\uAC00 \uB098\uC624\uB294 \uBAA8\uC591)\uB97C \uB204\uB985\uB2C8\uB2E4.","\uBAA9\uB85D\uC5D0\uC11C \u300C\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uD648 \uD654\uBA74\uC5D0 \uC0DD\uAE34 \u300C02:17\u300D \uC544\uC774\uCF58\uC73C\uB85C \uC5F4\uBA74 \uC571\uCC98\uB7FC \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4.","\uC544\uC774\uD3F0\uC5D0\uC11C\uB294 \uC0AC\uD30C\uB9AC\uC640 \uD648 \uD654\uBA74 \uC571\uC758 \uC800\uC7A5 \uACF5\uAC04\uC774 \uB530\uB85C\uB77C\uC11C, \uC0AC\uD30C\uB9AC\uC5D0\uC11C \uD558\uB358 \uC870\uC0AC\uC640 \uC5F0 \uD78C\uD2B8\uB294 \uD648 \uD654\uBA74 \uC571\uC73C\uB85C \uC774\uC5B4\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]:n==="android"?["\uD06C\uB86C \uC624\uB978\uCABD \uC704\uC758 \uBA54\uB274(\uC810 \uC138 \uAC1C)\uB97C \uB204\uB985\uB2C8\uB2E4.","\u300C\uC571 \uC124\uCE58\u300D \uB610\uB294 \u300C\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uD648 \uD654\uBA74\uC5D0 \uC0DD\uAE34 \u300C02:17\u300D \uC544\uC774\uCF58\uC73C\uB85C \uC5F4\uBA74 \uC571\uCC98\uB7FC \uC5F4\uB9BD\uB2C8\uB2E4."]:["\uC8FC\uC18C\uCC3D \uC624\uB978\uCABD\uC758 \uC124\uCE58 \uC544\uC774\uCF58\uC744 \uB204\uB974\uAC70\uB098, \uBE0C\uB77C\uC6B0\uC800 \uBA54\uB274\uC5D0\uC11C \u300C\uC571 \uC124\uCE58\u300D\uB97C \uACE0\uB985\uB2C8\uB2E4.","\uC124\uCE58\uD55C \uB4A4\uC5D0\uB294 \uC571 \uBAA9\uB85D\uC5D0\uC11C \u300C02:17\u300D\uB85C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}function Tm({onUpdate:n}={}){addEventListener("beforeinstallprompt",r=>{r.preventDefault(),Pr=r,Jo()}),addEventListener("appinstalled",()=>{Pr=null,Jo()});try{matchMedia("(display-mode: standalone)").addEventListener("change",Jo)}catch{}let t=location.protocol==="https:"||location.hostname==="localhost"||location.hostname==="127.0.0.1";if(!("serviceWorker"in navigator)||!t)return{sw:"unsupported"};if(/[?&]nosw\b/.test(location.search))return{sw:"skipped"};let e=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{e&&n&&n()});let i=null,s=Date.now();if(navigator.serviceWorker.register("sw.js").then(r=>{i=r}).catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&i&&Date.now()-s>36e5&&(s=Date.now(),i.update().catch(()=>{}))}),bm())try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist().catch(()=>{})}catch{}return{sw:"registering"}}function Am(n){addEventListener("storage",t=>{if(!(t.key!==Lh||!t.newValue))try{let e=JSON.parse(t.newValue);n(e&&e.at||0)}catch{}})}function TM(n,t){return JSON.stringify({v:1,at:Date.now(),budget:n.budget,tries:n.tries,seen:[...n.seen],asked:[...n.asked],shown:[...n.shown],pins:[...n.pins],failed:[...n.failed],hints:[...n.hints],extra:t||{}})}function AM(n,{Game:t,EVIDENCE:e,PEOPLE:i,BUDGET:s,TRIES:r,HINTS:o}){let a;try{a=JSON.parse(n)}catch{return null}if(!a||a.v!==1)return null;let l=new Set(e.map(f=>f.id)),c=new Set(i.map(f=>f.id)),u=new Set(o.flatMap(f=>f.levels.map((_,w)=>f.topic+":"+w))),d=f=>Array.isArray(f)?f.filter(_=>typeof _=="string"):[],h=[...new Set(d(a.seen).filter(f=>l.has(f)))],p=[...new Set(d(a.asked).filter(f=>c.has(f)))];if(h.length+p.length>s)return null;let g=t.fresh([...new Set(d(a.hints).filter(f=>u.has(f)))]);for(let f of h)t.inspect(g,f);for(let f of p)t.ask(g,f);for(let f of d(a.shown)){let[_,w]=f.split(":");c.has(_)&&l.has(w)&&t.present(g,_,w)}for(let f of d(a.pins)){let[_,w]=f.split(":");(_==="e"&&g.seen.has(w)||_==="p"&&g.asked.has(w))&&g.pins.add(f)}let y=[...new Set(d(a.failed))].filter(f=>{let[_,w]=f.split("|");return c.has(_)&&w&&w.split("+").length===2&&w.split("+").every(v=>l.has(v))}),m=Number.isInteger(a.tries)?a.tries:r;return m!==r-y.length||m<0?null:(g.failed=y,g.tries=m,{g,extra:a.extra&&typeof a.extra=="object"?a.extra:{},at:a.at})}function Em(n,t){try{return localStorage.setItem(Lh,TM(n,t)),!0}catch{return!1}}function Cm(n){try{let t=localStorage.getItem(Lh);return t?AM(t,n):null}catch{return null}}function Rm(){try{let n=document.createElement("canvas");return!!(n.getContext("webgl2")||n.getContext("webgl"))}catch{return!1}}var jo="02\uC2DC 17\uBD84\uC5D0 \uC5B4\uB514\uC5D0\uC11C \uBB34\uC5C7\uC744 \uD558\uACE0 \uC788\uC5C8\uC2B5\uB2C8\uAE4C?",Im="\uC804\uC2DC\uC2E4\uC740 \uC815\uBB38 \uD558\uB098\uB85C\uB9CC \uB4DC\uB098\uB4E0\uB2E4. \uC720\uB9AC \uC9C4\uC5F4\uB300\uB294 \uC804\uC2DC\uC2E4 \uC548\uCABD \uCE78\uB9C9\uC774\uBCBD \uAC00\uAE4C\uC774\uC5D0 \uC11C \uC788\uACE0, \uADF8 \uBCBD \uB108\uBA38\uAC00 \uC870\uBA85 \uBD80\uC2A4\uB2E4. \uC870\uBA85 \uBD80\uC2A4\uC640 \uC74C\uD5A5 \uB370\uC2A4\uD06C\uB294 \uC804\uC2DC\uC2E4 \uBC16 \uBCF5\uB3C4\uC5D0\uC11C \uB530\uB85C \uB4DC\uB098\uB4E0\uB2E4.",Rn=[{id:"lock",name:"\uC815\uBB38 \uC7A0\uAE08 \uAE30\uB85D",kind:"\uCD9C\uC785",time:"01:58",at:2,tease:"\uC815\uBB38 \uC804\uC790 \uC7A0\uAE08\uC758 \uAE30\uB85D\uACFC \uBD09\uC778 \uB300\uC7A5.",text:"01\uC2DC 58\uBD84\uC5D0 \uC7A0\uAE30\uACE0 \uBD09\uC778\uB41C \uB4A4, 02\uC2DC 19\uBD84\uC5D0 \uACBD\uBE44\uAC00 \uBD09\uC778\uC744 \uD655\uC778\uD558\uACE0 \uC5F4 \uB54C\uAE4C\uC9C0 \uBB38\uC774 \uC5F4\uB9B0 \uAE30\uB85D\uC740 \uD55C \uAC74\uB3C4 \uC5C6\uB2E4. \uADF8\uB54C\uAE4C\uC9C0 \uAE30\uACC4\uC2DD \uBD09\uC778\uC740 \uBC88\uD638\uAC00 \uB300\uC7A5\uACFC \uAC19\uC558\uACE0 \uB72F\uAE34 \uD754\uC801\uC774 \uC5C6\uC5C8\uB2E4. \uC815\uBB38 \uC606 \uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94\uB294 30\uBD84\uB9C8\uB2E4 \uB20C\uB7EC\uC57C \uD558\uB294\uB370, 02\uC2DC 00\uBD84 \uCC28\uB840\uAC00 02\uC2DC 09\uBD84\uC5D0 \uB20C\uB838\uB2E4."},{id:"fog",name:"\uC9C4\uC5F4\uB300 \uC601\uC0C1",kind:"\uD604\uC7A5",time:"02:17:00",at:4,tease:"\uC9C4\uC5F4\uB300 \uC55E\uCABD\uC744 \uBE44\uCD94\uB358 \uCE74\uBA54\uB77C\uC758 \uB179\uD654 \uC601\uC0C1\uACFC \uC548\uAC1C \uC7A5\uCE58\uC758 \uC791\uB3D9 \uAE30\uB85D.",text:"01\uC2DC 52\uBD84, \uBB38\uC138\uB77C\uAC00 \uBC1B\uCE68\uB300 \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5 \uCABD\uC73C\uB85C \uD5C8\uB9AC\uB97C \uC219\uC600\uB2E4\uAC00 \uB098\uAC04\uB2E4. 02\uC2DC 16\uBD84 59\uCD08\uAE4C\uC9C0 \uB80C\uC988\uB294 \uC81C\uC790\uB9AC\uC5D0 \uC788\uB2E4. 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC548\uAC1C\uAC00 \uD130\uC838 8\uCD08 \uB3D9\uC548 \uD654\uBA74\uC774 \uD558\uC597\uAC8C \uAC00\uB824\uC9C0\uACE0, \uC548\uAC1C\uAC00 \uAC77\uD78C \uD654\uBA74\uC5D0\uB294 \uB80C\uC988\uAC00 \uC5C6\uB2E4. \uC720\uB9AC \uB36E\uAC1C\uB294 \uB2EB\uD78C \uCC44\uC774\uACE0, \uD654\uBA74\uC5D0 \uC0AC\uB78C\uC740 \uC7A1\uD788\uC9C0 \uC54A\uB294\uB2E4. \uC548\uAC1C \uC7A5\uCE58 \uAE30\uB85D\uC5D0\uB294 \u2018\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9\u2019\uC774\uB77C\uACE0 \uC801\uD600 \uC788\uB2E4."},{id:"drawer",name:"\uC9C4\uC5F4\uB300 \uD6C4\uBA74",kind:"\uD604\uC7A5",time:"02:17 \uC774\uD6C4",at:6,tease:"\uC720\uB9AC \uC9C4\uC5F4\uB300 \uBC1B\uCE68\uB300\uC758 \uB4B7\uBA74.",text:"\uC720\uB9AC \uB36E\uAC1C\uB294 \uC55E\uACFC \uC606, \uC704\uB9CC \uB9C9\uACE0 \uC788\uB2E4. \uB4A4\uCABD\uC744 \uB9C9\uACE0 \uC788\uB294 \uAC83\uC740 \uC815\uBE44\uC6A9 \uC11C\uB78D\uC758 \uC55E\uD310\uC774\uC5B4\uC11C, \uC11C\uB78D\uC744 \uB2F9\uAE30\uBA74 \uB80C\uC988\uB97C \uC62C\uB824 \uB454 \uBC1B\uCE68\uD310\uC774 \uD1B5\uC9F8\uB85C \uB4A4\uB85C \uBE60\uC838\uB098\uC628\uB2E4. \uC190\uC7A1\uC774\uB294 \uCE78\uB9C9\uC774\uBCBD\uC758 \uC810\uAC80\uAD6C \uB108\uBA38, \uC870\uBA85 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uB2EC\uB824 \uC788\uB2E4. \uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC774\uCABD\uC5D0\uC11C\uB294 \uB2F9\uAE38 \uC218 \uC5C6\uB2E4. \uC11C\uB78D\uC740 \uC190\uAC00\uB77D \uB450 \uB9C8\uB514\uB9CC\uD07C \uB35C \uB2EB\uD600 \uC788\uACE0, \uB808\uC77C\uACFC \uADF8 \uC544\uB798 \uBC14\uB2E5\uC5D0 \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8\uAC00 \uB5A8\uC5B4\uC838 \uC788\uB2E4."},{id:"cue",name:"\uC870\uBA85 \uC81C\uC5B4 \uAE30\uB85D",kind:"\uAE30\uB85D",time:"02:17:00",at:3,tease:"\uC870\uBA85 \uCF58\uC194\uC758 \uC608\uC57D\uD45C\uC640 \uC2E4\uD589 \uAE30\uB85D.",text:"\uC608\uC57D\uD45C\uC5D0 \uC62C\uB77C \uC788\uB294 \uC790\uB3D9 \uC810\uAC80\uC740 02\uC2DC 30\uBD84 \uD55C \uAC74\uBFD0\uC774\uB2E4. \uC2E4\uD589 \uAE30\uB85D\uC5D0\uB294 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uD050 \uD558\uB098\uAC00 \uC2E4\uD589\uB410\uB2E4\uACE0 \uB0A8\uC544 \uC788\uB2E4. \uC2E4\uD589 \uBC29\uC2DD\uC740 \u2018\uC218\uB3D9\u2019, \uC785\uB825 \uC704\uCE58\uB294 \u2018\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94\u2019, \uC11C\uBA85 \uCE78\uC740 \u2018H.D.Y.\u2019\uB2E4. \uC774 \uD050\uC5D0\uB294 \uC9C4\uC5F4\uB300 \uC870\uBA85\uC744 \uB0AE\uCD94\uB294 \uB3D9\uC791\uACFC \uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638\uAC00 \uD568\uAED8 \uBB36\uC5EC \uC788\uB2E4. \uC6D0\uACA9 \uC811\uC18D \uAE30\uB85D\uC740 \uC5C6\uB2E4."},{id:"audio",name:"\uD604\uC7A5 \uB179\uC74C",kind:"\uAE30\uB85D",time:"02:17:03",at:5,tease:"\uC74C\uD5A5 \uB2F4\uB2F9\uC774 \uC624\uB298 \uBC24 \uB0A8\uAE34 \uB179\uC74C \uD30C\uC77C.",text:"02\uC2DC 10\uBD84\uBD80\uD130 \uB04A\uAE40 \uC5C6\uC774 \uC774\uC5B4\uC9C4 \uB179\uC74C\uC774\uB2E4. 1\uBC88 \uCC44\uB110\uC740 \uC9C4\uC5F4\uB300 \uC55E \uB9C8\uC774\uD06C, 2\uBC88 \uCC44\uB110\uC740 \uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C, 3\uBC88 \uCC44\uB110\uC740 \uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC758 \uBA54\uBAA8\uC6A9 \uB9C8\uC774\uD06C\uB2E4. 02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC548\uAC1C \uBD84\uC0AC\uC74C\uC774 \uC2DC\uC791\uB418\uACE0, 02\uC2DC 17\uBD84 03\uCD08\uC5D0 2\uBC88 \uCC44\uB110\uC5D0\uB9CC \uAE08\uC18D\uC774 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uD06C\uAC8C \uC7A1\uD78C\uB2E4. 02\uC2DC 17\uBD84 05\uCD08\uC5D0\uB294 3\uBC88 \uCC44\uB110\uC5D0 \u201C\uC5B4, \uBC8C\uC368?\u201D\uB77C\uB294 \uC11C\uC720\uC9C4\uC758 \uBAA9\uC18C\uB9AC\uAC00 \uB4E4\uC5B4 \uC788\uB2E4."},{id:"poster",name:"\uD64D\uBCF4 \uD328\uB110 \uAD50\uC815\uC9C0",kind:"\uBB38\uC11C",time:"01:40",at:1,tease:"\uBCF4\uB3C4\uC6A9 \uD64D\uBCF4 \uD328\uB110\uC758 \uB9C8\uC9C0\uB9C9 \uAD50\uC815\uC9C0.",text:"\uD06C\uB808\uB514\uD2B8\uC5D0\uB294 \u2018\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04\u2019\uB85C \uC804\uC2DC \uD504\uB85C\uB4C0\uC11C \uD55C \uC0AC\uB78C\uC758 \uC774\uB984\uB9CC \uC2E4\uB824 \uC788\uB2E4. \uC5EC\uBC31\uC5D0\uB294 \uC5F0\uD544\uB85C \u2018\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD\u2019, \uD30C\uB780 \uD39C\uC73C\uB85C \u2018\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4\u2019\uB77C\uACE0 \uC801\uD600 \uC788\uB2E4. \uB450 \uBA54\uBAA8 \uC704\uC5D0\uB294 \u2018\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815\u2019 \uB3C4\uC7A5\uC774 \uCC0D\uD600 \uC788\uACE0, \uB3C4\uC7A5\uC5D0 \uC801\uD78C \uC2DC\uAC01\uC740 01\uC2DC 40\uBD84\uC774\uB2E4."}],Je=[{id:"min",name:"\uBC15\uBBFC\uC7AC",role:"\uC57C\uAC04 \uACBD\uBE44",mark:"\u25A3",line:"\u201C\uC81C \uAE30\uB85D\uC5D0\uB294 \uBE60\uC9C4 \uAC83\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.\u201D",say:"\uC800\uB294 \uBC24\uC0C8 \uC815\uBB38 \uC55E\uC744 \uC9C0\uCF30\uC2B5\uB2C8\uB2E4. \uD55C \uBC1C\uC9DD\uB3C4 \uB5A0\uB098\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uCD9C\uC785\uC790 \uC5C6\uC74C, \uC7A0\uAE08 \uC774\uC0C1 \uC5C6\uC74C, \uBD09\uC778 \uC774\uC0C1 \uC5C6\uC74C. \uB2E4\uC2DC \uB9D0\uC500\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC800\uB294 \uBC24\uC0C8 \uC815\uBB38 \uC55E\uC744 \uC9C0\uCF30\uC2B5\uB2C8\uB2E4. \uCD9C\uC785\uC790 \uC5C6\uC74C, \uC7A0\uAE08 \uC774\uC0C1 \uC5C6\uC74C, \uBD09\uC778 \uC774\uC0C1 \uC5C6\uC74C.",other:"\uADF8\uAC83\uC740 \uC81C \uADFC\uBB34 \uAE30\uB85D \uBC16\uC758 \uC77C\uC785\uB2C8\uB2E4. \uCD94\uCE21\uC73C\uB85C \uB9D0\uC500\uB4DC\uB9AC\uC9C0\uB294 \uC54A\uACA0\uC2B5\uB2C8\uB2E4."},{id:"sera",name:"\uBB38\uC138\uB77C",role:"\uBCF4\uC874 \uB2F4\uB2F9",mark:"\u25C8",line:"\u201C\uAE30\uC0AC\uBCF4\uB2E4 \uBCF4\uC874 \uAE30\uB85D\uC774 \uBA3C\uC800\uC608\uC694.\u201D",say:"\uC815\uBB38\uC774 \uBD09\uC778\uB41C \uB4A4\uB85C\uB294 \uBCF4\uC874\uC2E4\uC5D0\uC11C \uC0C1\uD0DC \uAE30\uB85D\uC744 \uC815\uB9AC\uD588\uC5B4\uC694. \uC0AC\uAC74\uC774 \uC54C\uB824\uC9C4 \uB4A4 \uACBD\uBE44\uBD84\uC774 \uBD09\uC778\uC744 \uD480\uC5B4 \uC918\uC11C \uB4E4\uC5B4\uAC14\uACE0, \uBC1B\uCE68\uB300\uB97C \uC0B4\uD53C\uB2E4\uAC00 \uB4A4\uCABD \uBC14\uB2E5\uC5D0\uC11C \uBD89\uC740 \uAC00\uB8E8\uB97C \uBD24\uC5B4\uC694. \uB80C\uC988\uC5D0\uC11C \uB5A8\uC5B4\uC9C4 \uAC83\uC740 \uC544\uB2C8\uC5D0\uC694. \uC5B4\uB514\uC11C \uB098\uC628 \uAC83\uC778\uC9C0\uB294 \uC800\uB3C4 \uBAA8\uB974\uACA0\uC5B4\uC694. \uC624\uB298 \uBC24 \uC9C4\uC5F4\uB300\uC5D0 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC190\uC744 \uB304 \uC0AC\uB78C\uC740 \uC544\uB9C8 \uC800\uC77C \uAC70\uC608\uC694.",other:"\uADF8\uAC74 \uC81C \uBCF4\uC874 \uAE30\uB85D\uACFC\uB294 \uC0C1\uAD00\uC774 \uC5C6\uB294 \uC790\uB8CC\uC608\uC694. \uC81C\uAC00 \uBCF4\uD0E4 \uB9D0\uC774 \uC5C6\uB124\uC694."},{id:"doyun",name:"\uD55C\uB3C4\uC724",role:"\uC870\uBA85 \uC124\uACC4",mark:"\u25C6",line:"\u201C\uC608\uC57D\uD45C\uC5D0 \uB2E4 \uB098\uC640 \uC788\uC2B5\uB2C8\uB2E4.\u201D",say:"02\uC2DC 17\uBD84\uC5D0\uB294 \uBD80\uC2A4\uB97C \uBE44\uC6B0\uACE0 \uB85C\uBE44 \uCABD \uBCF5\uB3C4\uC5D0 \uB098\uC640 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01\uC758 \uC870\uBA85 \uBCC0\uD654\uB294 \uC608\uC57D\uD45C\uC5D0 \uC7A1\uD78C \uC790\uB3D9 \uC810\uAC80\uC785\uB2C8\uB2E4. \uC2DC\uC2A4\uD15C\uC774 \uC54C\uC544\uC11C \uB3CC\uB9B0 \uAC83\uC774\uACE0, \uC800\uB294 \uCF58\uC194\uC5D0 \uC190\uB3C4 \uB300\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",other:"\uADF8 \uC790\uB8CC\uC5D0 \uB300\uD574\uC11C\uB294 \uC81C\uAC00 \uB4DC\uB9B4 \uB9D0\uC500\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC81C\uAC00 \uC544\uB294 \uBC94\uC704 \uBC16\uC758 \uC77C\uC785\uB2C8\uB2E4."},{id:"yujin",name:"\uC11C\uC720\uC9C4",role:"\uC74C\uD5A5 \uB2F4\uB2F9",mark:"\u25C9",line:"\u201C\uB4E4\uC740 \uAC83\uACFC \uBCF8 \uAC83\uC740 \uB2E4\uB974\uC8E0.\u201D",say:"\uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C\uC5D0\uC11C \uC548\uAC1C \uC5F0\uCD9C \uD604\uC7A5\uC74C\uC744 \uB179\uC74C\uD558\uACE0 \uC788\uC5C8\uC5B4\uC694. \uD5E4\uB4DC\uD3F0 \uB108\uBA38\uB85C \uC870\uBA85 \uBD80\uC2A4 \uCABD\uC5D0\uC11C \uC218\uB808\uAC00 \uB538\uAE4D\uD558\uB294 \uC18C\uB9AC\uAC00 \uB0AC\uC5B4\uC694. \uB808\uBCA8 \uBBF8\uD130\uB9CC \uBCF4\uACE0 \uC788\uC5B4\uC11C \uB208\uC73C\uB85C\uB294 \uC544\uBB34\uAC83\uB3C4 \uBCF4\uC9C0 \uBABB\uD588\uC5B4\uC694.",other:"\uADF8 \uC790\uB8CC\uB294 \uC81C\uAC00 \uC9C1\uC811 \uBCF8 \uAC8C \uC544\uB2C8\uB77C\uC11C\uC694. \uC81C \uB179\uC74C\uC5D0 \uB0A8\uC740 \uAC83 \uB9D0\uACE0\uB294 \uC544\uB294 \uBC14\uAC00 \uC5C6\uC5B4\uC694."}],EM={"doyun:cue":"\uC218\uB3D9\uC774\uB77C\uACE0 \uCC0D\uD600 \uC788\uB2E4\uACE0\uC694. \uAE30\uB85D\uC774 \uC798\uBABB \uCC0D\uD78C \uAC78 \uAC81\uB2C8\uB2E4. \uC124\uB839 \uB204\uAC00 \uB2E8\uCD94\uB97C \uB20C\uB800\uB2E4 \uD574\uB3C4, \uC870\uBA85\uC774 \uD55C \uBC88 \uBC14\uB010 \uAC83\uACFC \uB80C\uC988\uAC00 \uC5C6\uC5B4\uC9C4 \uAC83\uC740 \uB2E4\uB978 \uC774\uC57C\uAE30\uC785\uB2C8\uB2E4. \uC870\uBA85 \uAE30\uB85D\uC740 \uB80C\uC988\uAC00 \uB2EB\uD78C \uC720\uB9AC \uB36E\uAC1C\uB97C \uC5B4\uB5BB\uAC8C \uBE60\uC838\uB098\uAC14\uB294\uC9C0 \uD55C \uC904\uB3C4 \uB9D0\uD574 \uC8FC\uC9C0 \uC54A\uC796\uC2B5\uB2C8\uAE4C.","doyun:drawer":"\uC815\uBE44 \uC11C\uB78D \uB9D0\uC500\uC774\uAD70\uC694. \uC190\uC7A1\uC774\uAC00 \uBD80\uC2A4 \uC548\uCABD\uC5D0 \uC788\uB294 \uAC83\uC740 \uB9DE\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uADF8 \uC2DC\uAC01 \uBD80\uC2A4\uB294 \uBE44\uC5B4 \uC788\uC5C8\uACE0, \uC548\uAC1C\uB3C4 \uC2DC\uC2A4\uD15C\uC774 \uC608\uC57D\uB300\uB85C \uD130\uB728\uB9B0 \uAC83\uC785\uB2C8\uB2E4. \uC544\uBB34\uB3C4 \uC5C6\uB358 \uC790\uB9AC\uC5D0\uC11C, \uB204\uAC00 \uB9CC\uB4E4\uC9C0\uB3C4 \uC54A\uC740 8\uCD08\uC5D0 \uB9DE\uCDB0 \uC11C\uB78D\uC774 \uB2F9\uACA8\uC84C\uB2E4\uB294 \uB9D0\uC500\uC785\uB2C8\uAE4C.","doyun:fog":"\uC548\uAC1C \uC7A5\uCE58\uB294 \uC2E0\uD638\uB97C \uBC1B\uC73C\uBA74 \uD130\uC9D1\uB2C8\uB2E4. \uC810\uAC80 \uD050\uC5D0 \uC548\uAC1C\uAC00 \uBB36\uC5EC \uC788\uC73C\uB2C8, \uC810\uAC80\uC774 \uB3CC\uBA74 \uC548\uAC1C\uB3C4 \uB098\uC624\uB294 \uAC81\uB2C8\uB2E4. \uC81C\uAC00 \uBCF4\uB0B8 \uC2E0\uD638\uB294 \uC544\uB2D9\uB2C8\uB2E4.","doyun:audio":"\uBD80\uC2A4\uC5D0 \uC7A5\uBE44 \uC218\uB808\uAC00 \uD55C \uB300 \uC788\uC2B5\uB2C8\uB2E4. \uBCBD \uCABD\uC5D0 \uBD99\uC5EC \uB450\uB294\uB370 \uBC14\uD034 \uC7A0\uAE08\uC1E0\uAC00 \uD5D0\uAC70\uC6CC\uC11C \uAC00\uB9CC\uD788 \uB46C\uB3C4 \uD480\uB9B4 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uC2DC\uAC01\uC5D0 \uC65C \uC18C\uB9AC\uAC00 \uB0AC\uB294\uC9C0\uB294 \uC800\uB3C4 \uBAA8\uB974\uACA0\uC2B5\uB2C8\uB2E4.","doyun:poster":"\uADF8 \uC5F0\uD544 \uAE00\uC528\uB294 \uC81C \uAC83\uC785\uB2C8\uB2E4. \uC81C\uAC00 \uC124\uACC4\uD55C \uC5F0\uCD9C\uC778\uB370 \uC774\uB984\uC774 \uBE60\uC84C\uC73C\uB2C8 \uC815\uC815\uC744 \uC694\uCCAD\uD588\uC2B5\uB2C8\uB2E4. \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uACE0, \uAE30\uBD84\uC774 \uC88B\uC558\uB2E4\uACE0\uB294 \uBABB \uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC11C\uC6B4\uD55C \uAC83\uACFC \uC804\uC2DC\uBB3C\uC5D0 \uC190\uC744 \uB300\uB294 \uAC83\uC740 \uB2E4\uB978 \uC77C\uC785\uB2C8\uB2E4.","sera:fog":"\uADF8\uAC74 \uBD09\uC778\uD558\uAE30 \uC804 \uB9C8\uC9C0\uB9C9 \uC810\uAC80\uC774\uC5D0\uC694. \uBC1B\uCE68\uB300 \uC218\uD3C9\uC744 \uBCF4\uB290\uB77C \uB4A4\uB85C \uB3CC\uC544\uAC00 \uBC14\uB2E5\uAE4C\uC9C0 \uC0B4\uD3C8\uACE0, \uADF8\uB54C\uB294 \uC544\uBB34\uAC83\uB3C4 \uC5C6\uC5C8\uC5B4\uC694. \uC810\uAC80\uD45C\uC5D0\uB3C4 \u2018\uB4A4\uCABD \uBC14\uB2E5 \uC774\uBB3C \uC5C6\uC74C\u2019\uC774\uB77C\uACE0 \uC801\uC5B4 \uB480\uC5B4\uC694. \uADF8 \uB4A4\uB85C 02\uC2DC 16\uBD84\uAE4C\uC9C0 \uB80C\uC988\uAC00 \uD654\uBA74\uC5D0 \uADF8\uB300\uB85C \uC788\uC796\uC544\uC694.","sera:drawer":"\uB808\uC77C \uC641\uC2A4\uC600\uAD70\uC694. \uBA3C\uC9C0\uCE58\uACE0\uB294 \uC7A5\uAC11 \uB05D\uC5D0 \uBBF8\uB048\uD558\uAC8C \uBB3B\uC5B4\uB098\uC11C \uC774\uC0C1\uD588\uC5B4\uC694. \uC11C\uB78D\uC774 \uC6C0\uC9C1\uC77C \uB54C \uB808\uC77C\uC5D0\uC11C \uAE4E\uC5EC \uB098\uC624\uB294 \uAC70\uC608\uC694. \uC81C\uAC00 01\uC2DC 52\uBD84\uC5D0 \uBD24\uC744 \uB54C\uB294 \uBC14\uB2E5\uC774 \uAE68\uB057\uD588\uC73C\uB2C8, \uC11C\uB78D\uC740 \uADF8 \uB4A4\uC5D0 \uC6C0\uC9C1\uC778 \uAC70\uC8E0. \uADF8\uB9AC\uACE0 \uC804\uC2DC\uC2E4 \uCABD\uC5D0\uB294 \uC190\uC7A1\uC774\uAC00 \uC5C6\uC5B4\uC11C \uC800\uB294 \uC5F4 \uC218\uAC00 \uC5C6\uC5B4\uC694.","sera:cue":"\uC870\uBA85 \uAE30\uB85D\uC740 \uC81C\uAC00 \uC77D\uC744 \uC904 \uBAB0\uB77C\uC694. \uB2E4\uB9CC 02\uC2DC 30\uBD84 \uC810\uAC80\uC740 \uBCF4\uC874\uC2E4\uC5D0\uB3C4 \uBBF8\uB9AC \uC54C\uB9BC\uC774 \uC654\uC5B4\uC694. 02\uC2DC 17\uBD84\uC5D0 \uBB34\uC5B8\uAC00 \uB3CC\uB9B0\uB2E4\uB294 \uC598\uAE30\uB294 \uB4E4\uC740 \uC801\uC774 \uC5C6\uC5B4\uC694.","sera:lock":"02\uC2DC 19\uBD84\uC5D0 \uBD09\uC778\uC744 \uD480 \uB54C \uC800\uB3C4 \uC606\uC5D0 \uC788\uC5C8\uC5B4\uC694. \uBC88\uD638\uB97C \uB300\uC7A5\uACFC \uB9DE\uCDB0 \uBCF4\uACE0 \uB098\uC11C \uAC19\uC774 \uB4E4\uC5B4\uAC14\uC5B4\uC694. \uADF8 \uC804\uC5D0\uB294 \uC544\uBB34\uB3C4 \uB4E4\uC5B4\uAC00\uC9C0 \uBABB\uD588\uC5B4\uC694.","min:lock":"9\uBD84 \uB2A6\uC740 \uAC83, \uB9DE\uC2B5\uB2C8\uB2E4. \uC790\uB9AC\uB97C \uB72C \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uC544\uCE68 \uAD50\uB300 \uB54C \uC62C\uB9B4 \uADFC\uBB34 \uBCF4\uACE0 \uBB38\uC7A5\uC744 \uC218\uCCA9\uC5D0 \uC801\uC5B4 \uC678\uC6B0\uACE0 \uC788\uC5C8\uACE0, \uADF8\uB7EC\uB2E4 \uC2DC\uAC04\uC744 \uB193\uCCE4\uC2B5\uB2C8\uB2E4. \uAE34\uC7A5\uD558\uBA74 \uB9D0\uC744 \uB354\uB4EC\uC5B4\uC11C \uB298 \uADF8\uB807\uAC8C \uC5F0\uC2B5\uD569\uB2C8\uB2E4. \uC678\uC6B4 \uAC83\uCC98\uB7FC \uB4E4\uB838\uB2E4\uBA74 \uC815\uB9D0 \uC678\uC6E0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB2E8\uCD94\uB97C \uB2A6\uAC8C \uB20C\uB800\uC5B4\uB3C4, \uBD09\uC778\uC744 \uD480 \uB54C\uAE4C\uC9C0 \uADF8 \uBB38\uC740 \uD55C \uBC88\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.","min:fog":"\uC548\uAC1C\uAC00 \uD130\uC84C\uC744 \uB54C\uB3C4 \uC800\uB294 \uBB38 \uC55E\uC5D0 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \uC815\uBB38 \uC720\uB9AC \uB108\uBA38\uB85C \uBFCC\uC5F0 \uAC83\uB9CC \uBCF4\uC600\uACE0, \uADF8 \uC548\uC5D0\uC11C \uC6C0\uC9C1\uC774\uB294 \uC0AC\uB78C\uC740 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4.","min:drawer":"\uBC1B\uCE68\uB300 \uB4A4\uC5D0 \uC11C\uB78D\uC774 \uC788\uB2E4\uB294 \uAC83\uC740 \uC9C0\uAE08 \uCC98\uC74C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC81C \uC790\uB9AC\uB294 \uC815\uBB38 \uC55E\uC774\uACE0, \uBCF5\uB3C4\uB294 \uBB38 \uC55E\uC5D0\uC11C \uBCF4\uC774\uB294 \uB370\uAE4C\uC9C0\uB9CC \uBD05\uB2C8\uB2E4. \uC870\uBA85 \uBD80\uC2A4 \uC5F4\uC1E0\uB294 \uC800\uD55C\uD14C \uC5C6\uC2B5\uB2C8\uB2E4.","min:poster":"\uADF8 \uC885\uC774\uB294 01\uC2DC 40\uBD84\uCBE4 \uBCF5\uB3C4 \uAC8C\uC2DC\uD310\uC5D0 \uBD99\uC5B4 \uC788\uB358 \uAC83\uC785\uB2C8\uB2E4. \uB204\uAC00 \uBA54\uBAA8\uB97C \uC801\uC5C8\uB294\uC9C0\uB294 \uBCF4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","yujin:audio":"\uC548\uAC1C\uB294 \uC6D0\uB798 02\uC2DC 30\uBD84 \uC810\uAC80 \uB54C \uD130\uC9C8 \uC608\uC815\uC774\uC5C8\uC5B4\uC694. \uB193\uCE58\uAE30 \uC2EB\uC5B4\uC11C 02\uC2DC 10\uBD84\uBD80\uD130 \uBBF8\uB9AC \uB179\uC74C\uC744 \uAC78\uC5B4 \uB450\uACE0 \uAE30\uB2E4\uB838\uB294\uB370, 13\uBD84\uC774\uB098 \uC77C\uCC0D \uD130\uC84C\uC5B4\uC694. \uADF8\uB798\uC11C \uC81C \uBAA9\uC18C\uB9AC\uAC00 \uB4E4\uC5B4\uAC04 \uAC70\uC608\uC694. \uADF8 \uC21C\uAC04 \uC800\uB294 \uB370\uC2A4\uD06C \uB9C8\uC774\uD06C \uC55E\uC5D0 \uC549\uC544 \uC788\uC5C8\uC5B4\uC694. \uB538\uAE4D \uC18C\uB9AC\uB294 \uBD80\uC2A4 \uCABD \uBCBD \uB9C8\uC774\uD06C\uC5D0\uB9CC \uC7A1\uD614\uACE0\uC694.","yujin:cue":"02\uC2DC 17\uBD84 00\uCD08\uC5D0 \uC218\uB3D9 \uC2E4\uD589\uC774\uB77C\uBA74 \uC81C \uB179\uC74C\uACFC \uB9DE\uC544\uC694. 00\uCD08\uC5D0 \uC548\uAC1C\uAC00 \uD130\uC9C0\uACE0 3\uCD08 \uB4A4\uC5D0 \uBD80\uC2A4 \uCABD\uC5D0\uC11C \uB538\uAE4D \uC18C\uB9AC\uAC00 \uB0AC\uAC70\uB4E0\uC694. \uB204\uAC00 \uB20C\uB800\uB294\uC9C0\uB294 \uC18C\uB9AC\uB85C\uB294 \uC54C \uC218 \uC5C6\uC9C0\uB9CC\uC694.","yujin:drawer":"\uADF8 \uC11C\uB78D\uC774 \uC870\uBA85 \uBD80\uC2A4 \uCABD\uC73C\uB85C \uBE60\uC9C4\uB2E4\uBA74 \uC81C\uAC00 \uB4E4\uC740 \uC18C\uB9AC\uAC00 \uB09C \uBC29\uD5A5\uACFC \uAC19\uB124\uC694. \uB2E4\uB9CC \uC800\uB294 \uC218\uB808 \uC18C\uB9AC\uB85C \uB4E4\uC5C8\uC5B4\uC694. \uC11C\uB78D \uC18C\uB9AC\uC778\uC9C0\uB294 \uC7A5\uB2F4\uD558\uC9C0 \uBABB\uD574\uC694.","yujin:poster":"\uD30C\uB780 \uD39C\uC740 \uC81C \uAE00\uC528\uC608\uC694. \uC800\uB3C4 \uC774\uB984\uC774 \uBE60\uC84C\uC73C\uB2C8\uAE4C\uC694. \uD654\uB294 \uB0AC\uC9C0\uB9CC \uADF8 \uC2DC\uAC04\uC5D0 \uC800\uB294 \uB370\uC2A4\uD06C\uC5D0\uC11C \uB179\uC74C\uD558\uACE0 \uC788\uC5C8\uACE0, \uADF8\uAC74 \uD30C\uC77C\uC774 \uB9D0\uD574 \uC918\uC694."},yc=[{topic:"route",until:"drawer",levels:["\uC815\uBB38\uB3C4 \uC720\uB9AC \uB36E\uAC1C\uB3C4 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uB2E4\uBA74 \uB80C\uC988\uB294 \uBB38\uACFC \uB36E\uAC1C\uAC00 \uC544\uB2CC \uCABD\uC73C\uB85C \uB098\uAC14\uC2B5\uB2C8\uB2E4.","\uCE74\uBA54\uB77C\uB294 \uC9C4\uC5F4\uB300\uC758 \uC55E\uCABD\uB9CC \uBE44\uCDA5\uB2C8\uB2E4. \uD654\uBA74\uC5D0 \uCC0D\uD788\uC9C0 \uC54A\uB294 \uCABD\uC774 \uC5B4\uB514\uC778\uC9C0 \uC0DD\uAC01\uD574 \uBCF4\uC138\uC694.","\uD604\uC7A5 \uD0ED\uC5D0\uC11C \u300C\uC9C4\uC5F4\uB300 \uD6C4\uBA74\u300D\uC744 \uD655\uC778\uD558\uC138\uC694."]},{topic:"record",until:"cue",levels:["\uAE38 \uB2E4\uC74C\uC740 \uC2DC\uAC01\uC785\uB2C8\uB2E4. 02\uC2DC 17\uBD84\uC758 8\uCD08 \uB3D9\uC548 \uBB34\uC5C7\uC774 \uC5B4\uB5A4 \uC21C\uC11C\uB85C \uC6C0\uC9C1\uC600\uB294\uC9C0 \uC801\uC5B4 \uB454 \uAE30\uB85D\uC744 \uCC3E\uC544\uBCF4\uC138\uC694.","\uC548\uAC1C\uB294 \uC800\uC808\uB85C \uD130\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC548\uAC1C \uC7A5\uCE58\uC5D0 \uC2E0\uD638\uB97C \uBCF4\uB0B8 \uCABD\uC758 \uAE30\uB85D\uC774 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.","\uD604\uC7A5 \uD0ED\uC5D0\uC11C \u300C\uC870\uBA85 \uC81C\uC5B4 \uAE30\uB85D\u300D\uC744 \uD655\uC778\uD558\uC138\uC694."]},{topic:"compare",levels:["\uC99D\uAC70\uB294 \uD63C\uC790\uC11C\uB294 \uC0AC\uB78C\uC744 \uAC00\uB9AC\uD0A4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC0AC\uB78C\uB4E4\uC758 \uB9D0\uC744 \uB4E3\uACE0, \uBA74\uB2F4\uC5D0\uC11C \uC99D\uAC70\uB97C \uC81C\uC2DC\uD574 \uAC01\uC790\uC758 \uB9D0\uACFC \uAE30\uB85D\uC774 \uAC19\uC740 \uC774\uC57C\uAE30\uB97C \uD558\uB294\uC9C0 \uB9DE\uB300\uC5B4 \uBCF4\uC138\uC694. \uC99D\uAC70 \uC81C\uC2DC\uB294 \uC870\uC0AC \uAE30\uD68C\uB97C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098 \uBCF4\uC774\uB294 \uC0AC\uB78C\uC774 \uD55C \uBA85\uBFD0\uC774\uB77C\uACE0 \uB2E8\uC815\uD558\uC9C0 \uB9C8\uC138\uC694. \uC5B4\uAE0B\uB098\uB294 \uB300\uBAA9\uB9C8\uB2E4 \uBCF8\uC778\uC758 \uB2F5\uC774 \uC788\uACE0, \uADF8 \uB2F5\uC740 \uB2E4\uB978 \uAE30\uB85D\uC73C\uB85C \uB4B7\uBC1B\uCE68\uB418\uAE30\uB3C4 \uD558\uACE0 \uADF8\uB807\uC9C0 \uC54A\uAE30\uB3C4 \uD569\uB2C8\uB2E4.","\uBB3C\uC744 \uAC83\uC740 \uB450 \uAC00\uC9C0\uC785\uB2C8\uB2E4. \uD558\uB098, \uB80C\uC988\uAC00 \uC0AC\uB77C\uC9C4 8\uCD08 \uB3D9\uC548 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC758 \uB05D\uC5D0 \uC788\uC744 \uC218 \uC788\uC5C8\uB358 \uC0AC\uB78C\uC740 \uB204\uAD6C\uC778\uAC00? \uB458, \uADF8 \uC2DC\uAC01 \uADF8 \uC790\uB9AC\uC758 \uC77C\uC744 \uB450\uACE0 \uAE30\uB85D\uACFC \uB2E4\uB978 \uB9D0\uC744 \uD55C \uC0AC\uB78C\uC740 \uB204\uAD6C\uC778\uAC00? \uB450 \uB2F5\uC774 \uAC19\uC740 \uC0AC\uB78C\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."]},{topic:"accuse",levels:["\uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uC99D\uAC70\uB294 \uD558\uB098\uBFD0\uC785\uB2C8\uB2E4. \uB0A8\uC740 \uD55C \uC790\uB9AC\uC5D0\uB294, \uADF8 \uAE38\uC758 \uB05D\uC5D0 \uADF8 \uC2DC\uAC01 \uB204\uAC00 \uC788\uC5C8\uB294\uC9C0\uB97C \uB9D0\uD574 \uC8FC\uB294 \uAE30\uB85D\uC774 \uB4E4\uC5B4\uAC00\uC57C \uD569\uB2C8\uB2E4.","\uB450 \uC99D\uAC70 \uBAA8\uB450 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC5D0\uAC8C \uC9C1\uC811 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC138\uC694. \uD55C \uC99D\uAC70\uC5D0 \uB300\uD55C \uB2F5\uC744 \uB2E4\uB978 \uC99D\uAC70\uAC00 \uBB34\uB108\uB728\uB9AC\uB294\uC9C0, \uB450 \uB2F5\uC744 \uB098\uB780\uD788 \uB193\uACE0 \uC77D\uC5B4 \uBCF4\uC138\uC694.","\uB450 \uC99D\uAC70\uAC00 \uAC19\uC740 \uC2DC\uAC01, \uAC19\uC740 \uC790\uB9AC\uB97C \uAC00\uB9AC\uD0A4\uB294\uC9C0, \uADF8\uB9AC\uACE0 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC774 \uADF8 \uC2DC\uAC01 \uADF8 \uC790\uB9AC\uC5D0 \uB300\uD574 \uD55C \uB9D0\uACFC \uB9DE\uB294\uC9C0 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uD655\uC778\uD558\uC138\uC694."]}],Lm={route:"\uB80C\uC988\uAC00 \uC804\uC2DC\uC2E4 \uBC16\uC73C\uB85C \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uBB3C\uC99D\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC815\uBB38\uC774 \uC7A0\uACA8 \uC788\uC5C8\uB2E4\uB294 \uAE30\uB85D\uC740 \uBB38\uC73C\uB85C\uB294 \uB098\uAC00\uC9C0 \uC54A\uC558\uB2E4\uB294 \uAC83\uB9CC \uB9D0\uD574 \uC904 \uBFD0, \uC5B4\uB5BB\uAC8C \uB098\uAC14\uB294\uC9C0\uB294 \uB9D0\uD574 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",record:"02\uC2DC 17\uBD84\uC5D0 \uC7A5\uCE58\uB97C \uC6C0\uC9C1\uC778 \uC190\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uAE30\uB85D\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAE38\uC744 \uCC3E\uC558\uC5B4\uB3C4 \uADF8 \uC2DC\uAC01\uC5D0 \uB204\uAC00 \uBB34\uC5C7\uC744 \uD588\uB294\uC9C0 \uB9DE\uB300\uC5B4 \uBCFC \uAE30\uB85D\uC774 \uC5C6\uC73C\uBA74 \uC0AC\uB78C\uC744 \uAC00\uB9AC\uD0AC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."},Pm={route:"\uC81C\uCD9C\uD55C \uB450 \uC99D\uAC70\uB85C\uB294 \uB80C\uC988\uAC00 \uB2EB\uD78C \uC720\uB9AC \uB36E\uAC1C\uC640 \uC7A0\uAE34 \uC804\uC2DC\uC2E4\uC744 \uC5B4\uB5BB\uAC8C \uBE60\uC838\uB098\uAC14\uB294\uC9C0 \uC124\uBA85\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uAE38\uC774 \uBE44\uC5B4 \uC788\uC73C\uBA74 \uB204\uAD6C\uB97C \uC9C0\uBAA9\uD574\uB3C4 \uACB0\uB860\uC774 \uC11C\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",link:"\uB80C\uC988\uAC00 \uC804\uC2DC\uC2E4\uC744 \uBE60\uC838\uB098\uAC04 \uAE38\uC740 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC9C0\uBAA9\uD55C \uC0AC\uB78C\uC774 \uADF8 \uAE38\uC744 \uC37C\uB2E4\uB294 \uC810\uC740 \uC785\uC99D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uADF8 \uC0AC\uB78C\uC740 \uC81C\uC2DC\uB41C \uC99D\uAC70\uC5D0 \uB2F5\uC744 \uB0B4\uB193\uC558\uACE0, \uC81C\uCD9C\uD55C \uB450 \uC99D\uAC70\uB85C\uB294 \uADF8 \uB2F5\uC744 \uBB34\uB108\uB728\uB9AC\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."},$o={culprit:"doyun",route:"drawer",record:"cue"},ae={fresh(n){return{budget:9,tries:3,seen:new Set,asked:new Set,shown:[],pins:new Set,failed:[],hints:n||[]}},inspect(n,t){return n.seen.has(t)?"again":n.budget?(n.seen.add(t),n.budget--,"new"):"blocked"},ask(n,t){return n.asked.has(t)?"again":n.budget?(n.asked.add(t),n.budget--,"new"):"blocked"},present(n,t,e){if(!n.asked.has(t)||!n.seen.has(e))return"blocked";let i=t+":"+e;return n.shown.includes(i)?"again":(n.shown.push(i),"new")},reaction(n,t){return EM[n+":"+t]||Je.find(e=>e.id===n).other},lacking(n){let t=[];return n.seen.has($o.route)||t.push("route"),n.seen.has($o.record)||t.push("record"),t},stuck(n){return n.budget===0&&ae.lacking(n).length>0},unheard(n){return n.budget===0&&n.asked.size<Je.length},ready(n,t,e){let i=[{id:"person",ok:!!t},{id:"proof",ok:e.length===2}];if(t)for(let s of e)i.push({id:"shown",e:s,ok:n.shown.includes(t+":"+s)});return{ok:n.tries>0&&!!t&&e.length===2&&i.every(s=>s.ok),steps:i}},combo(n,t){return n+"|"+[...t].sort().join("+")},tried(n,t,e){return n.failed.includes(ae.combo(t,e))},judge(n,t){let e=t.includes($o.route),i=e&&n===$o.culprit&&t.includes($o.record);return{ok:i,kind:i?"win":e?"link":"route"}},submit(n,t,e){if(!ae.ready(n,t,e).ok)return null;let i=ae.judge(t,e);return i.ok||(n.tries--,n.failed.push(ae.combo(t,e))),i},nextHint(n){for(let t of yc)if(!(t.until&&n.seen.has(t.until)))for(let e=0;e<t.levels.length;e++){let i=t.topic+":"+e;if(!n.hints.includes(i))return i}return null},hintText(n){let[t,e]=n.split(":");return yc.find(i=>i.topic===t).levels[+e]},takeHint(n){let t=ae.nextHint(n);return t&&n.hints.push(t),t}};var Nm=["lock","fog","drawer","cue","audio","poster"],Dm=["min","sera","doyun","yujin"];function Ph(n,t={}){let e=t.verdict||null,i={};for(let s of Nm)i["e:"+s]=n.seen.has(s)?"seen":n.budget?"new":"closed";for(let s of Dm)i["p:"+s]=n.asked.has(s)?"asked":n.budget?"new":"closed";return{unlocked:Nm.filter(s=>n.seen.has(s)),claims:Dm.filter(s=>n.asked.has(s)),marks:i,pinned:[...n.pins].sort(),selected:t.selected||null,accuse:t.tab==="accuse"&&!e?{person:t.person||null,proof:[...t.proof||[]].sort()}:null,mood:e?e.ok?"win":"dim":"normal"}}var Om="0217-v3-sound",Re=null,ta=null,ds=!0;try{ds=localStorage.getItem(Om)!=="off"}catch{}var ea=()=>ds;function Fm(n){ds=!!n;try{localStorage.setItem(Om,ds?"on":"off")}catch{}if(Re)try{ds?Dh():Re.suspend()}catch{}}var Bm=["pointerdown","pointerup","touchend","click","keydown"],Sc=!1;function vc(){if(!Sc){Sc=!0;for(let n of Bm)addEventListener(n,km,{capture:!0,passive:!0})}}function Nh(){if(Sc){Sc=!1;for(let n of Bm)removeEventListener(n,km,{capture:!0})}}function Dh(){if(Re){if(Re.state==="running"){Nh();return}try{Re.resume().then(()=>{Re&&Re.state==="running"?Nh():vc()},vc)}catch{vc()}}}function km(){if(ds){if(!Re){try{navigator.audioSession&&(navigator.audioSession.type="ambient")}catch{}let n=window.AudioContext||window.webkitAudioContext;if(!n){Nh();return}try{Re=new n,ta=Re.createGain(),ta.gain.value=.5,ta.connect(Re.destination)}catch{Re=null;return}}Dh()}}function zm(){vc(),document.addEventListener("visibilitychange",()=>{Re&&document.hidden?Re.suspend().catch(()=>{}):Re&&ds&&Dh()})}function In(n,t,{type:e="sine",gain:i=.12,at:s=0,to:r=null}={}){let o=Re.currentTime+s,a=Re.createOscillator(),l=Re.createGain();a.type=e,a.frequency.setValueAtTime(n,o),r&&a.frequency.exponentialRampToValueAtTime(r,o+t),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(ta),a.start(o),a.stop(o+t+.02)}function Qo(n,{type:t="bandpass",freq:e=1200,q:i=.8,gain:s=.1,at:r=0,attack:o=.01}={}){let a=Re.currentTime+r,l=Math.max(1,Math.floor(Re.sampleRate*n)),c=Re.createBuffer(1,l,Re.sampleRate),u=c.getChannelData(0);for(let g=0;g<l;g++)u[g]=Math.random()*2-1;let d=Re.createBufferSource(),h=Re.createBiquadFilter(),p=Re.createGain();d.buffer=c,h.type=t,h.frequency.value=e,h.Q.value=i,p.gain.setValueAtTime(1e-4,a),p.gain.exponentialRampToValueAtTime(s,a+o),p.gain.exponentialRampToValueAtTime(1e-4,a+n),d.connect(h).connect(p).connect(ta),d.start(a),d.stop(a+n+.02)}var Um={tick(){In(1800,.03,{gain:.035})},spend(){In(660,.12,{type:"triangle",gain:.1}),In(440,.2,{type:"triangle",gain:.1,at:.1})},free(){In(880,.09,{gain:.06})},fog(){Qo(1.6,{freq:1400,q:.6,gain:.08,attack:.35})},click(){Qo(.03,{type:"highpass",freq:3e3,gain:.18}),In(2400,.03,{type:"square",gain:.05})},beep(){In(1e3,.07,{type:"square",gain:.04}),In(1e3,.07,{type:"square",gain:.04,at:.12})},slide(){Qo(.32,{freq:2600,q:.7,gain:.1,attack:.06}),Qo(.18,{type:"lowpass",freq:700,gain:.06,at:.12})},stamp(){In(90,.16,{gain:.22,to:60}),Qo(.05,{type:"lowpass",freq:600,gain:.12})},tense(){In(110,.9,{type:"sawtooth",gain:.035}),In(116,.9,{type:"sawtooth",gain:.03})},solve(){[523,659,784,1047].forEach((n,t)=>In(n,.5,{gain:.08,at:t*.12}))},fail(){In(220,.6,{type:"triangle",gain:.09,to:165})},blip(){In(640,.03,{type:"square",gain:.016})},page(){In(392,.35,{type:"triangle",gain:.045}),In(587,.45,{type:"triangle",gain:.035,at:.08})}};function Ke(n){if(!(!ds||!Re||Re.state!=="running"||!Um[n]))try{Um[n]()}catch{}}var D={g:null,ui:null,world:null,no3d:!1,unavailable:!1,talkPid:null,sceneTold:!1,insets:{top:0,bottom:0,left:0,right:0},makeWorld:null},CM=new Set(["sync","pause","setQuality","setInsets","dispose","debug","setReducedMotion"]);function se(n,...t){let e=D.world;if(!e||typeof e[n]!="function"||D.no3d&&!CM.has(n))return Promise.resolve();try{return Promise.resolve(e[n](...t)).catch(()=>{})}catch{return Promise.resolve()}}function Mc(n,...t){let e=D.world;if(!e||D.no3d||typeof e[n]!="function")return null;try{return e[n](...t)}catch{return null}}var $n=()=>!!D.world&&!D.no3d,Gm=new Set;function Nr(n){return Gm.has(n)?!1:(Gm.add(n),!0)}var Wm="0217-v3-settings",Ln=(()=>{let n={motion:!1,quality:"auto",off3d:!1};try{let t=JSON.parse(localStorage.getItem(Wm)||"{}")||{};typeof t.motion=="boolean"&&(n.motion=t.motion),["auto","low","high"].includes(t.quality)&&(n.quality=t.quality),typeof t.off3d=="boolean"&&(n.off3d=t.off3d)}catch{}return n})();function na(){try{localStorage.setItem(Wm,JSON.stringify(Ln))}catch{}}var Vm=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}})(),yn=()=>Ln.motion||!!(Vm&&Vm.matches),Hm=(()=>{try{return matchMedia("(max-height: 520px), (min-width: 960px)")}catch{return null}})(),Uh=()=>!!(Hm&&Hm.matches);var j=n=>document.getElementById(n),xt=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),vn=Object.fromEntries(Rn.map(n=>[n.id,n])),we=Object.fromEntries(Je.map(n=>[n.id,n])),Dr=["scene","people","notes","accuse"],Oh={scene:"\uD604\uC7A5",people:"\uBA74\uB2F4",notes:"\uAE30\uB85D",accuse:"\uC9C0\uBAA9"},fs=n=>"\u300C"+vn[n].name+"\u300D",Ur=n=>fs(n)+Ch(vn[n].name,"\uC744","\uB97C"),Fh=n=>we[n].name+Ch(we[n].name,"\uC744","\uB97C"),ve=(n,t,e)=>'[data-action="'+n+'"]'+(t?'[data-id="'+t+'"]':"")+(e?'[data-arg="'+e+'"]':""),Vt=(n,t,e,i={})=>'<button type="button"'+(i.cls?' class="'+i.cls+'"':"")+' data-action="'+n+'"'+(t?' data-id="'+t+'"':"")+(i.arg?' data-arg="'+i.arg+'"':"")+(i.attr?" "+i.attr:"")+">"+e+"</button>",Hi={min:"#7c9fd4",sera:"#839e4e",doyun:"#c07fc0",yujin:"#52a660"},Os=n=>'<span class="band" aria-hidden="true" style="--band:'+Hi[n]+'">'+"<i></i>".repeat(Je.findIndex(t=>t.id===n)+1)+"</span>",Or=(n,t="")=>'<span class="face'+(t?" "+t:"")+'" data-face="'+xt(n)+'" aria-hidden="true"></span>';var zr=n=>Math.round(n*10)/10,Br=(n,t)=>!!n&&(typeof n.has=="function"?n.has(t):Array.isArray(n)&&n.includes(t));function Vr(n){let t="";for(let e in n){let i=n[e];i==null||i===!1||i===""||(t+=" "+e+'="'+(typeof i=="number"?zr(i):xt(i))+'"')}return t}var RM=/(^|\s)(h|nd)(\s|$)/,bc=n=>RM.test(n||"")?{class:n||void 0}:{class:((n||"")+" d").trim(),pathLength:1},Pn=(...n)=>n.map(t=>typeof t=="number"?zr(t):t).join(" "),jt=(n,t,e,i,s="k")=>"<line"+Vr({x1:n,y1:t,x2:e,y2:i,...bc(s)})+"/>",Gt=(n,t,e,i,s="k",r)=>"<rect"+Vr({x:n,y:t,width:e,height:i,rx:r,...bc(s)})+"/>",me=(n,t,e,i="k")=>"<circle"+Vr({cx:n,cy:t,r:e,...bc(i)})+"/>",Te=(n,t="k",e)=>"<path"+Vr({d:n,...bc(t),...e})+"/>",at=(n,t,e,i,s)=>"<text"+Vr({x:n,y:t,class:i,"text-anchor":s==="m"?"middle":s==="e"?"end":void 0})+">"+xt(e)+"</text>",Sn=(n,t)=>"<g"+Vr(t||{})+">"+n+"</g>",Ie=(n,t,e)=>Sn(t,{"data-cue":n,class:Br(e,n)?"on":void 0});function kr(n,t,e,i,s="k"){let r=Math.atan2(i-t,e-n),o=6,a=.5,l=s.replace(/(^|\s)h(\s|$)/," ").trim()||"k";return jt(n,t,e,i,s)+Te(Pn("M",e-o*Math.cos(r-a),i-o*Math.sin(r-a),"L",e,i,"L",e-o*Math.cos(r+a),i-o*Math.sin(r+a)),l)}function di(n,t,e,i={}){let s=i.label?' role="img" aria-label="'+xt(i.label)+'"':' aria-hidden="true"';return'<svg class="art'+(i.cls?" "+i.cls:"")+(i.draw?" draw":"")+'" viewBox="0 0 '+n+" "+t+'" width="'+n+'" height="'+t+'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false"'+s+">"+e+"</svg>"}function ia(n,t,e,i,s="i"){return Sn(me(0,-21,4.5,s)+Te("M-8 0V-8Q-8 -15 0 -15Q8 -15 8 -8V0",s)+(e?'<path d="M-8 -7H-3" class="band nd" stroke="'+xt(e)+'"/>':"")+(i?at(0,13,i,"sm","m"):""),{class:"who",transform:"translate("+zr(n)+" "+zr(t)+")"})}var Xm=(n,t,e)=>Sn(me(0,0,1.6,"pinDot nd")+jt(0,0,0,-11,"i")+'<path d="M0 -11L9 -8.2L0 -5.4Z" class="flag nd" stroke="'+xt(e)+'" fill="'+xt(e)+'"/>',{transform:"translate("+zr(n)+" "+zr(t)+")"});function wc(n={}){let i=(y,m)=>Gt(y+3,m+3,174,98,"e thin",10),s=(y,m,f,_)=>at(y+14,m+23,f,"tg b")+at(y+30,m+23,_,"b"),r=i(0,0)+s(0,0,"1","\uC870\uC0AC 9\uD68C")+me(26,50,8)+jt(32,56,38,62)+Array.from({length:9},(y,m)=>me(52+m*13,50,3.4,"pip nd")).join("")+at(14,86,"\uCC98\uC74C \uD655\uC778\xB7\uCC98\uC74C \uC9C8\uBB38 = 1\uD68C","sm"),o=180,a=[o+28,o+70,o+110,o+150],l=i(o,0)+s(o,0,"2","\uBB34\uB8CC")+Te(Pn("M",a[0]+8,47,"A 8 8 0 1 1",a[0]+4,43))+Te(Pn("M",a[0]+3,37,"L",a[0]+9,41,"L",a[0]+3,46))+Gt(a[1]-12,42,13,17,"k",2)+kr(a[1]+3,50,a[1]+13,50)+me(a[2],44,5)+jt(a[2],49,a[2],59)+jt(a[2]-7,49,a[2]+7,49)+Te(Pn("M",a[3]-4,55,"A 8 8 0 1 1",a[3]+4,55,"Z"))+jt(a[3]-3,59,a[3]+3,59)+at(a[0],76,"\uB2E4\uC2DC \uBCF4\uAE30","sm tm","m")+at(a[1],76,"\uC81C\uC2DC","sm tm","m")+at(a[2],76,"\uACE0\uC815","sm tm","m")+at(a[3],76,"\uD78C\uD2B8","sm tm","m")+at(o+14,95,"\uC870\uC0AC \uAE30\uD68C\uB97C \uC4F0\uC9C0 \uC54A\uC74C","sm"),c=104,u=i(0,c)+s(0,c,"3","\uACB0\uB860 = 1\uBA85 + \uC99D\uAC70 2\uAC1C")+Gt(16,c+36,34,13,"k fk",2)+Gt(16,c+54,34,13,"k fk",2)+kr(54,c+42,112,c+52)+kr(54,c+60,112,c+58)+ia(132,c+74,"","")+at(14,c+93,"\uADF8 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC","sm"),d=180,h=y=>Te(Pn("M",y,c+38,"L",y+9,c+47,"L",y,c+56,"L",y-9,c+47,"Z"),"g fg"),p=i(d,c)+s(d,c,"4","\uACB0\uB860 \uAE30\uD68C 3\uBC88")+h(d+30)+h(d+56)+h(d+82)+at(d+14,c+76,"\uD2C0\uB824\uB3C4 \uAE30\uB85D\uC740 \uB0A8\uC74C","sm")+at(d+14,c+93,"\uC138 \uBC88 \uD2C0\uB9AC\uBA74 \uBBF8\uACB0","sm"),g="\uC870\uC0AC \uBC29\uBC95: "+gm.join(", ")+". \uACB0\uB860\uC5D0 \uC4F8 \uB450 \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC\uD569\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uAE30\uB85D\uC740 \uB0A8\uACE0, \uC138 \uBC88 \uD2C0\uB9AC\uBA74 \uBBF8\uACB0\uC785\uB2C8\uB2E4.";return di(360,208,r+l+u+p,{label:n.hidden?"":g,cls:"rulesArt"+(n.cls?" "+n.cls:""),draw:n.draw})}var Gr=22,qm=8,Ve=n=>qm+(n+7.2)*Gr,$e=n=>qm+(n+9)*Gr,Fr=([n,t,e,i],s,r)=>Gt(Ve(n),$e(e),(t-n)*Gr,(i-e)*Gr,s,r),IM={lock:[197,311.5,""],fog:[176,216.5,""],drawer:[156,129.5,"e"],cue:[184,80,"e"],audio:[303,34,"e"],poster:[18,326,""]},LM={min:[160,311.5,"e"],sera:[320.8,221,"m"],doyun:[32.6,242,"m"],yujin:[338,45,"e"]},PM=[106.8,146.8,186.8,226.8],NM=366;function Ym(n={}){let t=n.seen,e=n.asked,i=String(n.highlight||"").replace(/^e:/,""),s=I=>Br(t,I),r="";s("fog")&&(r+=Sn(Te(Pn("M",Ve(0),$e(.3)-4,"L",Ve(-.65),$e(ze.z1),"L",Ve(.65),$e(ze.z1),"Z"),"k fk thin"),{"data-part":"cone"})),r+=Sr.map(I=>Fr(I,"solid nd")).join(""),r+=vr.map(I=>Fr(I,"e wall")).join("")+Fr(cs,"e wall"),r+=at(64,287,"\uC804\uC2DC\uC2E4","room")+at(102,62,"\uC870\uBA85 \uBD80\uC2A4","room")+at(20,34,"\uBD81\uCABD \uBCF5\uB3C4","room")+at(360,311.5,"\uB85C\uBE44","room","e")+at(323,150,"\uBCF4\uC874\uC2E4","room","m")+'<text x="0" y="0" class="room" text-anchor="middle" transform="translate(29 150) rotate(-90)">\uC11C\uCABD \uBCF5\uB3C4 (\uB85C\uBE44 \uCABD)</text>';let o=$e(3.95),a=Ve(-.6),l=Ve(.6),c=Ve(0);r+=jt(a,o,l,o,"k")+Te(Pn("M",c-5,o-3,"L",c+5,o+3,"M",c+5,o-3,"L",c-5,o+3),"g")+at(c,285,"\uC815\uBB38 \xB7 \uBD09\uC778","sm tm","m");let u=ze,d=Si;r+=Fr([u.x0,u.x1,u.z0,u.z1],"i")+Fr([d.x0,d.x1,d.z0,d.z1],"k fk thin")+at(148,144,"\uC9C4\uC5F4\uB300","sm tm","e");let[h,,p]=Zn,g=Ve(h),y=$e(p);r+=me(g,y,3,"i")+Te(Pn("M",g,y-3,"L",g-4,y-10,"L",g+4,y-10,"Z"),"i")+at(158,216.5,"\uAC10\uC2DC \uCE74\uBA54\uB77C","sm tm","e");let m=Ve(ui[0]),f=$e(ui[2]);r+=Gt(m-4,f-3,8,6,"i")+jt(m-4,f-1,Ve(.68),$e(-2.78),"e"),(s("fog")||s("cue"))&&(r+=Sn(at(202,152.5,"\uC548\uAC1C \uC7A5\uCE58","sm tm"),{"data-part":"name-fogdev"}));let _=Ve(Bi[0]),w=$e(Bi[2]);r+=Gt(_-10,w-3.5,20,7,"i",1.5),s("cue")&&(r+=Sn(at(207,101.5,"\uCF58\uC194","sm tm"),{"data-part":"name-console"}));let v=Ve(us[0]),E=$e(us[2]);if(r+=Gt(v-11,E-5.5,22,11,"i",1.5)+Gt(v-8,E-2.5,16,5,"e thin",1),(s("audio")||Br(e,"yujin"))&&(r+=Sn(at(130,108.5,"\uC218\uB808","sm tm","e"),{"data-part":"name-cart"})),r+=Fr([7.2,8.8,-8.6,-7.4],"i",2)+at(342.8,62,"\uC74C\uD5A5 \uB370\uC2A4\uD06C","sm tm","m"),r+=jt(Ve(mh[0]),$e(5.6),Ve(mh[0]),$e(6.4),"i thick"),s("drawer")){let I=Mr;r+=Sn(Gt(Ve(I.x0),$e(-4.2),(I.x1-I.x0)*Gr,.2*Gr,"g")+at(176,127,"\uC810\uAC80\uAD6C","sm"),{"data-part":"hatch"}),r+=Sn(Ho.map(X=>jt(Ve(X),$e(-4),Ve(X),$e(u.z0),"k")).join("")+at(176,140,"\uB808\uC77C","sm"),{"data-part":"rails"});let U=Ve(Mi[0]),z=$e(Mi[2]);r+=Sn(Gt(U-4.5,z-2.6,9,2.6,"k",1)+jt(U,97,U,z-4,"e thin")+at(U,94,"\uC190\uC7A1\uC774","sm","m"),{"data-part":"handle"})}s("audio")&&(r+=Sn(Is.map(([I,,U],z)=>me(Ve(I),$e(U),4.5,"k")+at(Ve(I),$e(U)+3,String(z+1),"num","m")).join("")+at(192,165.5,"\uB9C8\uC774\uD06C","sm"),{"data-part":"mics"}));for(let I of Rn){let[U,z]=ki[I.id].ring,X=Ve(U),L=$e(z),H=s(I.id),[K,Z,T]=IM[I.id];r+=Sn((i===I.id?me(X,L,10.5,"g"):"")+me(X,L,6.5,H?"k fk":"e")+(H?me(X,L,2,"dot nd"):"")+at(K,Z,I.name,H?"b":"tm",T),{"data-part":"ev-"+I.id,class:"spot "+(H?"seen":"unseen")+(i===I.id?" hl":"")})}for(let I of Je){if(!Br(e,I.id))continue;let[U,,z]=Wo[I.id],[X,L,H]=LM[I.id];r+=Sn(Xm(Ve(U),$e(z),Hi[I.id])+at(X,L,I.name,"sm",H),{"data-part":"claim-"+I.id,class:"claim"})}r+=Je.map((I,U)=>ia(PM[U],NM,Hi[I.id],I.name)).join("");let A=402;r+=me(14,A-4,5,"k fk")+me(14,A-4,1.6,"dot nd")+at(24,A,"\uD655\uC778\uD55C \uC99D\uAC70","sm")+Sn(me(104,A-4,5,"e")+at(114,A,"\uD655\uC778 \uC804","sm tm"),{class:"unseen"})+Xm(170,A+1,"var(--mute)").replace(/ (stroke|fill)="var\(--mute\)"/g,"")+at(184,A,"\uBCF8\uC778\uC774 \uB9D0\uD55C 02:17\uC758 \uC790\uB9AC","sm");let x=Rn.filter(I=>s(I.id)).map(I=>I.name),b=Je.filter(I=>Br(e,I.id)).map(I=>I.name+" "+Vi[I.id].label.replace(/^본인 진술:\s*/,"")),O="\uAC74\uBB3C \uBC30\uCE58\uB3C4. "+(x.length?"\uD655\uC778\uD55C \uC99D\uAC70: "+x.join(", ")+".":"\uC544\uC9C1 \uD655\uC778\uD55C \uC99D\uAC70\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")+(b.length?" \uBCF8\uC778\uC774 \uB9D0\uD55C 02\uC2DC 17\uBD84\uC758 \uC790\uB9AC: "+b.join(", ")+".":"");return di(378,410,r,{label:O,cls:"planArt",draw:n.draw})}var DM={lock(n){let t=at(12,16,"\uC815\uBB38 \uBC14\uAE65\uC5D0\uC11C \uBCF8 \uBAA8\uC2B5","sm tm")+jt(10,140,350,140,"e");t+=Gt(130,30,100,110,"i")+Gt(134,34,44,106,"k fk")+Gt(182,34,44,106,"k fk")+jt(142,54,158,38,"e thin")+jt(190,54,206,38,"e thin")+jt(172,82,172,98,"i")+jt(188,82,188,98,"i"),t+=Ie("seal",Gt(160,68,40,8,"g",1)+Te("M194 76V80","g")+Gt(188,80,14,18,"g fg",1.5)+at(208,96,"\uBD09\uC778","sm tg")+at(180,160,"\uBD09\uC778 \uBC88\uD638 = \uB300\uC7A5 \xB7 \uB72F\uAE34 \uD754\uC801 \uC5C6\uC74C","","m"),n),t+=Ie("patrol",Gt(56,71,28,28,"e",4)+me(70,85,9)+me(70,85,3.5)+at(70,60,"\uC21C\uCC30 \uD655\uC778 \uB2E8\uCD94","sm","m")+at(70,118,"30\uBD84\uB9C8\uB2E4","sm","m"),n),t+=Ie("locked",Gt(272,64,36,44,"i",3)+Gt(277,68,26,12,"k fk",1.5)+Te("M285 92V88A5 5 0 0 1 295 88V92")+Gt(282,92,16,11,"k",1.5)+at(290,56,"\uC7A0\uAE08 \uD328\uB110","sm","m")+at(290,126,"01:58 \uC7A0\uAE40 \xB7 \uBD09\uC778","sm","m"),n);let e=i=>40+i*290/21;return t+=Ie("locked",me(e(0),206,3.5,"k fk")+at(e(0),224,"01:58","mono sm","m"),n),t+=Ie("opened",jt(e(0)+4,206,e(21)-4,206,"k thick")+me(e(21),206,3.5,"k fk")+at(185,196,"\uC5F4\uB9BC \uAE30\uB85D 0\uAC74","b","m")+at(340,224,"02:19 \uBD09\uC778 \uD655\uC778 \uD6C4 \uC5F4\uB9BC","sm","e"),n),t+=Ie("late",jt(e(2),210,e(2),232,"e")+jt(e(11),210,e(11),232,"e")+Te(Pn("M",e(2)+4,236,"Q",(e(2)+e(11))/2,250,e(11)-4,236))+Te(Pn("M",e(11)-11,236,"L",e(11)-4,236,"L",e(11)-8,242))+at(e(2),258,"02:00 \uCC28\uB840","sm","m")+at(e(11),258,"02:09 \uB20C\uB9BC","sm","m"),n),di(360,266,t)},fog(n){let t=u=>180+u*26,e=u=>30+(u+3.4)*26,i=ze,s=Si,r=at(12,16,"\uC704\uC5D0\uC11C \uBCF8 \uBAA8\uC2B5","sm tm");r+=Te(Pn("M",180,e(.3)-5,"L",t(-.62),e(i.z1),"L",t(.62),e(i.z1),"Z"),"k fk thin"),r+=Gt(t(i.x0),e(i.z0),(i.x1-i.x0)*26,(i.z1-i.z0)*26,"i")+Gt(t(s.x0),e(s.z0),(s.x1-s.x0)*26,(s.z1-s.z0)*26,"k thin")+at(158,44,"\uC9C4\uC5F4\uB300","sm tm","e"),r+=me(180,e(.3),3,"i")+Te(Pn("M",180,e(.3)-3,"L",176,e(.3)-10,"L",184,e(.3)-10,"Z"),"i")+at(190,e(.3)+4,"\uAC10\uC2DC \uCE74\uBA54\uB77C (\uAE30\uB465 \uC704)","sm");let o=t(ui[0]),a=e(ui[2]);r+=Gt(o-4,a-3,8,6,"i")+jt(o-4,a-1,t(.68),e(-2.78),"e")+at(221,a+4,"\uC548\uAC1C \uC7A5\uCE58","sm tm"),r+=Ie("device",at(221,a+19,"\uC678\uBD80 \uC2E0\uD638\uB85C \uC791\uB3D9","sm"),n),r+=at(12,150,"\uB179\uD654 \uD654\uBA74","sm tm");let l=(u,d,h)=>{let p=12+u*86;return Gt(p,158,78,62,"e",4)+me(p+7,165,1.6,"rec nd")+d(p)+Gt(p+25,174,28,22,"k thin")+(h==="on"?me(p+39,188,3.5,"g"):h==="gone"?me(p+39,188,3.5,"e h"):"")+jt(p+27,192,p+51,192,"e")+Gt(p+23,196,32,22,"i occ")},c=(u,d)=>d.map((h,p)=>at(12+u*86+39,236+(p?14*p+1:0),h,p?"sm":"mono sm tg","m")).join("");return r+=Ie("0152",l(0,u=>ia(u+54,218,Hi.sera,"","i")+kr(u+70,182,u+70,196,"e"),"on")+c(0,["01:52","\uBB38\uC138\uB77C","\uBC1B\uCE68\uB300 \uB4A4\uB85C","\uC219\uC600\uB2E4 \uB098\uAC10"]),n),r+=Ie("021659",l(1,()=>"","on")+c(1,["02:16:59","\uB80C\uC988 \uC81C\uC790\uB9AC"]),n),r+=Ie("021700",l(2,()=>"","")+Gt(186,160,74,58,"fogw nd",3)+at(223,194,"\uC548\uAC1C 8\uCD08","b ondark","m")+c(2,["02:17:00","\uD558\uC580 \uD654\uBA74"]),n),r+=Ie("021708",l(3,()=>"","gone")+c(3,["\uAC77\uD78C \uB4A4","\uB80C\uC988 \uC5C6\uC74C","\uB36E\uAC1C \uB2EB\uD798","\uC0AC\uB78C \uC548 \uC7A1\uD798"]),n),di(360,284,r)},drawer(n){let t=g=>30+(-2.55-g)*125,e=g=>236-g*125,i=t(-2.7),s=t(-3.3),r=t(-2.75),o=t(-3.25),a=t(-4),l=t(-4.2),c=e(.9),u=e(1.4),d=e(1.2),h=e(.85),p=jt(12,236,348,236,"e")+at(110,276,"\uC804\uC2DC\uC2E4 \uCABD","room","m")+at(292,276,"\uC870\uBA85 \uBD80\uC2A4","room","m");return p+=Gt(i,c,s-i,236-c,"i")+at((i+s)/2,184,"\uBC1B\uCE68\uB300","sm tm","m"),p+=Gt(a,26,l-a,d-26,"e fe")+Gt(a,h,l-a,236-h,"e fe")+Gt(a,d,l-a,h-d,"g h")+at((a+l)/2,20,"\uCE78\uB9C9\uC774\uBCBD","sm tm","m"),p+=jt(l+4,92,250,76,"e thin")+at(252,76,"\uC810\uAC80\uAD6C","sm"),p+=Ie("cover",Gt(r,u,o-r,c-u,"fk nd")+Te(Pn("M",r,c,"V",u,"H",o))+jt(40,48,r,u,"e thin")+at(12,44,"\uB36E\uAC1C: \uC55E\xB7\uC606\xB7\uC704","sm"),n),p+=Ie("slide",Gt(o,u,s-o,c-u,"k fk")+jt(r+4,e(.92),o-3,e(.92),"k thick")+jt(s,c,l,c,"e")+Gt(156,e(.95)-4,52,4,"k h")+kr(o+2,104,206,104)+jt(s+2,48,(o+s)/2,u+4,"e thin")+at(112,44,"\uB4A4: \uC11C\uB78D \uC55E\uD310","sm")+at(175,152,"\uBC1B\uCE68\uD310\uC774","sm","m")+at(175,166,"\uD1B5\uC9F8\uB85C \uB4A4\uB85C","sm","m"),n),p+=Ie("handle",Te(Pn("M",l,104,"H",l+11,"V",118,"H",l),"k thick")+at(256,116,"\uC190\uC7A1\uC774: \uBD80\uC2A4 \uCABD","sm"),n),p+=Ie("nohandle",Te(Pn("M",s+4,70,"L",s+11,77,"M",s+11,70,"L",s+4,77),"i")+at(s+16,76,"\uC804\uC2DC\uC2E4 \uCABD","sm")+at(s+16,90,"\uC190\uC7A1\uC774 \uC5C6\uC74C","sm"),n),p+=Ie("wax",jt(s,128,s,136,"g")+jt(s+5,128,s+5,136,"g")+jt(s+5,132,150,190,"e thin")+at(152,196,"\uB450 \uB9C8\uB514\uB9CC\uD07C","sm")+at(152,210,"\uB35C \uB2EB\uD798","sm")+[138,146,157,170,181].map((g,y)=>me(g,c-2,y%2?1.6:2,"wax nd")).join("")+[141,150,163,175].map((g,y)=>me(g,233,y%2?1.8:2.2,"wax nd")).join("")+jt(158,237,158,246,"e thin")+at(167,258,"\uB808\uC77C\uACFC \uBC14\uB2E5: \uBD89\uC740 \uC641\uC2A4 \uAC00\uB8E8","sm","m"),n),di(360,284,p)},cue(n){let t=Te("M14 112L28 44H118L132 112Z","i")+Gt(36,52,74,30,"k fk",2)+jt(42,60,92,60,"e thin")+jt(42,67,100,67,"e thin")+jt(42,74,84,74,"e thin")+me(44,98,3.5,"e")+me(58,98,3.5,"e")+me(72,98,3.5,"e")+me(104,98,5,"k")+at(73,128,"\uBD80\uC2A4 \uCF58\uC194","sm tm","m");t+=Gt(142,20,210,128,"e",6);let e=(i,s,r,o,a)=>Ie(o,at(152,i,s,"sm tm")+at(214,i,r,a?"mono":""),n);return t+=e(42,"\uC608\uC57D","02:30 \uC790\uB3D9 \uC810\uAC80 1\uAC74","schedule")+e(66,"\uC2E4\uD589","02:17:00 \uD050 1\uAC74","run")+e(90,"\uBC29\uC2DD","\uC218\uB3D9","sign")+e(114,"\uC785\uB825 \uC704\uCE58","\uBD80\uC2A4 \uCF58\uC194 \uBCF8\uCCB4 \uB2E8\uCD94","sign")+e(138,"\uC11C\uBA85 \uCE78","H.D.Y.","sign",!0),t+=Ie("sign",me(104,98,9,"k thin")+at(104,144,"\uBCF8\uCCB4 \uB2E8\uCD94","sm","m")+jt(104,108,104,132,"e thin"),n),t+=Ie("bundle",jt(247,148,247,168)+me(247,172,4,"k fk")+Te("M243 174Q180 180 94 196")+Te("M251 174Q262 182 266 196")+at(256,168,"\uD55C \uD050\uC5D0 \uD568\uAED8 \uBB36\uC784","sm tm")+Gt(14,196,160,30,"k fk",6)+at(94,216,"\uC9C4\uC5F4\uB300 \uC870\uBA85 \uB0AE\uCDA4","","m")+Gt(186,196,160,30,"k fk",6)+at(266,216,"\uC548\uAC1C \uC7A5\uCE58 \uC791\uB3D9 \uC2E0\uD638","","m"),n),t+=Ie("remote",Te("M14 248A12 12 0 0 1 34 248")+Te("M18 252A7 7 0 0 1 30 252")+me(24,255,1.6,"pinDot nd")+Te("M36 240L44 248M44 240L36 248","i")+at(52,254,"\uC6D0\uACA9 \uC811\uC18D \uAE30\uB85D \uC5C6\uC74C",""),n),di(360,264,t)},audio(n){let e=p=>16+(p+5.4)*22.5,i=p=>12+(p+9)*22.5,l=([p,g,y,m],f)=>{let _=Math.max(p,-5.4),w=Math.min(g,9.2),v=Math.max(y,-9),E=Math.min(m,-1.6);return _<w&&v<E?Gt(e(_),i(v),(w-_)*22.5,(E-v)*22.5,f):""},c=Sr.map(p=>l(p,"solid nd")).join("")+vr.map(p=>l(p,"e wall")).join("")+l(cs,"e wall");c+=jt(e(-5.4),i(-1.6),e(9.2),i(-1.6),"e h");let u=ze;c+=Gt(e(u.x0),i(u.z0),(u.x1-u.x0)*22.5,(u.z1-u.z0)*22.5,"i")+at(e(u.x0)-5,i(u.z1)-2,"\uC9C4\uC5F4\uB300","sm tm","e"),c+=Gt(e(7.2),i(-8.6),1.6*22.5,1.2*22.5,"i",2),c+=at(30,170,"\uC804\uC2DC\uC2E4","room")+at(78,66,"\uC870\uBA85 \uBD80\uC2A4","room")+at(24,34,"\uBD81\uCABD \uBCF5\uB3C4","room");let d=Is.map(([p,,g])=>[e(p),i(g)]),h=([p,g],y)=>me(p,g,6)+at(p,g+3.5,String(y+1),"num","m");return c+=Ie("channels",h(d[0],0)+h(d[1],1)+h(d[2],2)+at(d[0][0]+11,d[0][1]+4,"\uC9C4\uC5F4\uB300 \uC55E","sm")+at(d[1][0]-11,d[1][1]-4,"\uC870\uBA85 \uBD80\uC2A4 \uCABD \uBCBD","sm","e")+at(d[2][0]-11,d[2][1]+4,"\uBCF5\uB3C4 \uB05D \uC74C\uD5A5 \uB370\uC2A4\uD06C","sm","e"),n),c+=Ie("021703",me(d[1][0],d[1][1],11,"g thin"),n)+Ie("021705",me(d[2][0],d[2][1],11,"g thin"),n),di(360,190,c)},poster(n){let t=Te("M40 12H298L320 34V218H40Z","k fk")+Te("M298 12V34H320","k thin");return t+=jt(60,74,300,74,"e thin")+jt(60,86,280,86,"e thin")+jt(60,98,292,98,"e thin"),t+=Ie("credit",at(60,46,"\uAE30\uD68D\xB7\uC81C\uC791 \uCD1D\uAD04","sm tm")+at(60,63,"\uC804\uC2DC \uD504\uB85C\uB4C0\uC11C \uD55C \uC0AC\uB78C\uC758 \uC774\uB984\uB9CC","b"),n),t+=Ie("pencil",at(60,126,"\uC870\uBA85 \uC5F0\uCD9C \uC124\uACC4 \uD45C\uAE30 \uB204\uB77D, \uC815\uC815 \uC694\uCCAD","pencil"),n),t+=Ie("pen",at(60,148,"\uD604\uC7A5 \uC74C\uD5A5 \uD45C\uAE30\uB3C4 \uBE60\uC84C\uC2B5\uB2C8\uB2E4","pen"),n),t+=Ie("stamp",Sn(Gt(-98,-15,196,30,"stampL",3)+at(0,5,"\uBC18\uC601 \uBD88\uAC00, \uC778\uC1C4 \uD655\uC815 \xB7 01:40","stampT b","m"),{transform:"translate(192 173) rotate(-4)"}),n),t+=jt(60,108,300,108,"e h")+at(300,104,"\uC5EC\uBC31","sm tm","e"),di(360,230,t)}};function Zm(n,t={}){let e=DM[n];return e?e(t.lit).replace('class="art"','class="art evArt'+(t.draw?" draw":"")+'"'):""}function Jm(n={}){let t=n.personName||"",e=(n.proof||[]).slice(0,2),i="";i+=t?ia(300,88,n.band||"",t):Sn(ia(300,88,"","","e h")+at(300,101,"\uC9C0\uBAA9\uD560 \uC0AC\uB78C","sm tm","m"));for(let s=0;s<2;s++){let r=12+s*54,o=e[s],a=r+20;i+=o?Gt(10,r,132,40,"k fk",8)+at(76,a+4.5,o.name,"b","m"):Gt(10,r,132,40,"e h",8)+at(76,a+4.5,"\uC99D\uAC70","tm","m");let l=58+s*10,c=214,u=(a+l)/2;o&&t?i+=kr(148,a,280,l,o.shown?"k":"e h")+at(c,s?u+13:u-6,o.shown?"\uC81C\uC2DC\uD568 \u2713":"\uC544\uC9C1",o.shown?"sm tk b":"sm tm","m"):i+=jt(148,a,280,l,"e h")}return di(360,124,i,{cls:"accArt",draw:n.draw})}function Km(n,t={}){let e=n==="route",i="";return i+=e?Gt(14,18,150,44,"e h",22)+at(89,45,"\uB80C\uC988\uAC00 \uB098\uAC04 \uAE38","tm","m")+at(89,84,"\uBE44\uC5B4 \uC788\uC74C","sm tg","m"):Gt(14,18,150,44,"k fk",22)+at(89,45,"\uB80C\uC988\uAC00 \uB098\uAC04 \uAE38","b","m")+at(89,84,"\u2713 \uC124\uBA85\uB428","sm tk","m"),i+=Gt(150,32,60,16,e?"e h":"k",8),e?i+=Gt(196,18,150,44,"e",22)+at(271,45,"\uADF8 \uAE38 \uB05D\uC758 \uC0AC\uB78C","tm","m"):i+=Te("M260 18H218A22 22 0 0 0 218 62H260","k")+Te("M282 18H324A22 22 0 0 1 324 62H282","k")+Te("M264 14L268 24M276 56L280 66","g")+at(271,45,"\uADF8 \uAE38 \uB05D\uC758 \uC0AC\uB78C","b","m")+at(271,84,"\uC774\uC5B4\uC9C0\uC9C0 \uC54A\uC74C","sm tg","m"),di(360,92,i,{cls:"chainArt",draw:t.draw})}function $m(n,t={}){let e=r=>Array.isArray(n)?n.includes(r):Br(n,r),i=(r,o,a)=>e(a)?Gt(r,10,160,48,"e h",10)+at(r+80,39,o,"tm","m")+at(r+80,80,"\uBE60\uC9D0","sm tg","m"):Gt(r,10,160,48,"k fk",10)+at(r+80,39,o,"b","m")+at(r+80,80,"\u2713 \uC788\uC74C","sm tk","m"),s=i(8,"\uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uBB3C\uC99D","route")+at(180,39,"+","b tm","m")+i(192,"\uADF8 \uC2DC\uAC01\uC758 \uC77C\uC744 \uC801\uC740 \uAE30\uB85D","record");return di(360,88,s,{cls:"gapArt",draw:t.draw})}var UM=n=>D.ui.lit&&D.ui.lit.has(n)?" on":"",OM=(n,t,e,i="")=>"<"+n+' data-cue="'+t+'" class="'+i+UM(t)+'">'+e+"</"+n+">",FM={"0152":"01:52","021659":"02:16:59","021700":"02:17:00","021708":"02:17:08"},BM=["0152","021659","021700","021708"];function Tc(){let n="";for(let t of BM)D.ui.lit&&D.ui.lit.has(t)&&(n=FM[t]);return n||"01:52"}var Hr=(n,t)=>Zm(n,{lit:D.ui.lit,draw:t}),kM={lock:n=>Hr("lock",n),fog:n=>'<div class="monitor"><div class="screen'+(D.ui.lit&&D.ui.lit.has("021700")&&!D.ui.lit.has("021708")?" white":"")+'"><span class="rec">REC</span><span class="ts mono" id="boardTs">'+Tc()+"</span></div>"+Hr("fog",n)+"</div>",drawer:n=>Hr("drawer",n),cue:n=>Hr("cue",n),audio:n=>Hr("audio",n)+'<div class="wave"><canvas id="waveCv"></canvas>'+OM("p","021705","\u201C\uC5B4, \uBC8C\uC368?\u201D","sub")+"</div>",poster:n=>Hr("poster",n)};function Qm(n,t){return'<div class="board board-'+n+'" id="board" aria-hidden="true">'+kM[n](t)+"</div>"}function Bh(n,t){D.ui.lit||(D.ui.lit=new Set),D.ui.lit.add(t);for(let e of document.querySelectorAll('#stage [data-cue="'+t+'"]'))e.classList.add("on");if(n==="audio"&&Ac(),n==="fog"){let e=Tc(),i=j("boardTs"),s=j("cctvTime");i&&(i.textContent=e),s&&(s.textContent=e);let r=document.querySelector("#board .screen");r&&r.classList.toggle("white",D.ui.lit.has("021700")&&!D.ui.lit.has("021708"))}}var jm={"0210":0,channels:0,"021700":420,"021703":423,"021705":425};function Ac(){let n=j("waveCv");if(!n||!D.ui.lit)return;let t=Math.max(200,n.clientWidth||300),e=156,i=Math.min(2,window.devicePixelRatio||1);n.width=Math.round(t*i),n.height=Math.round(e*i),n.style.height=e+"px";let s=n.getContext("2d");if(!s)return;s.setTransform(i,0,0,i,0,0),s.clearRect(0,0,t,e);let r=D.ui.lit,o=!D.ui.playing,a=22,l=t-8,c=18,u=(e-c-22)/3,d=a+(l-a)*.2,h=a+(l-a)*.25,p=_=>_<=417?a+(d-a)*_/417:h+(l-h)*(_-417)/12,g='system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';s.font="11px "+g,s.textBaseline="middle";let y=7,m=()=>(y=y*16807%2147483647)/2147483647;for(let _=0;_<3;_++){let w=c+u*_+u/2;s.fillStyle="#b3c3bd",s.fillText(String(_+1),6,w),s.strokeStyle="#344744",s.lineWidth=1,s.beginPath(),s.moveTo(a,w),s.lineTo(l,w),s.stroke(),s.strokeStyle="#6a8f84",s.beginPath();for(let v=a;v<=l;v+=2){if(v>d&&v<h)continue;let E=u*.08*(.4+m());s.moveTo(v,w-E),s.lineTo(v,w+E)}s.stroke()}if(s.fillStyle="#b3c3bd",s.fillText("\u2026",(d+h)/2-4,c+u*1.5),r.has("021700")||o){let _=p(420);s.strokeStyle="#efb761",s.setLineDash([4,4]),s.beginPath(),s.moveTo(_,c-4),s.lineTo(_,c+u*3),s.stroke(),s.setLineDash([]),s.fillStyle="#efb761",s.textAlign="right",s.fillText("02:17:00 \uC548\uAC1C \uBD84\uC0AC\uC74C",_-4,9),s.textAlign="left"}if(r.has("021703")||o){let _=p(423),w=c+u*1.5;s.strokeStyle="#f3eee2",s.lineWidth=2,s.beginPath();for(let v=-4;v<=4;v++){let E=u*.46*(1-Math.abs(v)/5);s.moveTo(_+v*1.6,w-E),s.lineTo(_+v*1.6,w+E)}s.stroke(),s.lineWidth=1}if(r.has("021705")||o){let _=p(425),w=p(426.3),v=c+u*2.5;s.strokeStyle="#f3eee2",s.beginPath();for(let E=_;E<=w;E+=2){let A=(E-_)/(w-_),x=u*.32*Math.sin(Math.PI*A)*(.6+.4*Math.abs(Math.sin(A*17)));s.moveTo(E,v-x),s.lineTo(E,v+x)}s.stroke()}s.fillStyle="#b3c3bd";let f=e-8;s.fillText("02:10",a,f);for(let[_,w]of[[423,"03"],[425,"05"]])(r.has(_===423?"021703":"021705")||o)&&(s.textAlign="center",s.fillText(w,p(_),f),s.textAlign="left");if(!o){let _=0;for(let v of Object.keys(jm))r.has(v)&&(_=Math.max(_,jm[v]));let w=p(_);s.strokeStyle="#b1dcc6",s.lineWidth=2,s.beginPath(),s.moveTo(w,c-6),s.lineTo(w,c+u*3+2),s.stroke(),s.lineWidth=1}}var kh=n=>{let[t,e,i]=n.split(":").map(Number);return t*60+e+(i||0)/60},t0=kh("01:40"),zM=kh("02:19"),Ec=n=>((kh(n)-t0)/(zM-t0)*100).toFixed(2)+"%";function e0(n){let t=Rn.filter(o=>n.seen.has(o.id)).sort((o,a)=>o.at-a.at),e=Je.filter(o=>n.asked.has(o.id)),i='<section class="sec" aria-labelledby="nBar"><h3 id="nBar">\uC2DC\uAC04\uD45C \uB9C9\uB300</h3>';if(!t.length&&!e.length)return i+'<p class="muted caption">\uD655\uC778\uD55C \uC99D\uAC70\uC758 \uC2DC\uAC01\uACFC \uB4E4\uC740 \uC9C4\uC220\uC774 01:40\uBD80\uD130 02:19 \uC0AC\uC774\uC758 \uB9C9\uB300\uC5D0 \uB193\uC785\uB2C8\uB2E4.</p></section>';let s=t.map(o=>{let a=/이후/.test(o.time),l=o.time.replace(/\s*이후/,""),c=(a?'<i class="tlAfter" style="left:'+Ec(l)+';right:0"></i>':"")+'<i class="tlMark" style="left:'+Ec(l)+'"></i>';return'<li class="tl"><span class="tlLabel"><b class="mono">'+xt(o.time)+"</b> "+xt(o.name)+'</span><span class="tlTrack" aria-hidden="true">'+c+"</span></li>"}).concat(e.map(o=>'<li class="tl who"><span class="tlLabel"><b class="mono">02:17</b> '+xt(o.name)+" \xB7 "+xt(Vi[o.id].label)+'</span><span class="tlTrack" aria-hidden="true"><i class="tlMark" style="left:'+Ec("02:17")+'"></i></span></li>')),r='<div class="tlAxis" aria-hidden="true">'+["01:40","02:00","02:10"].map(o=>'<span style="left:'+Ec(o)+'">'+o+"</span>").join("")+'<span class="end">02:19</span></div>';return i+'<p class="muted caption">\uD655\uC778\uD55C \uC99D\uAC70\uC758 \uC2DC\uAC01\uACFC, \uC9C8\uBB38\uC5D0 \uB2F5\uD55C \uC0AC\uB78C\uC774 02\uC2DC 17\uBD84\uC5D0 \uC788\uC5C8\uB2E4\uACE0 \uB9D0\uD55C \uC790\uB9AC\uC785\uB2C8\uB2E4.</p><ol class="tlList" role="list">'+s.join("")+"</ol>"+r+"</section>"}var n0=n=>Ym({seen:D.g.seen,asked:D.g.asked,highlight:n,draw:Nr("plan")}),sa=()=>{let n=D.g;return n.budget?"\uB0A8\uC740 \uC870\uC0AC "+n.budget+"\uD68C.":ae.stuck(n)?"\uB0A8\uC740 \uC870\uC0AC 0\uD68C. \uC774 \uD0ED \uB9E8 \uC704\uC758 \uC548\uB0B4\uB97C \uD655\uC778\uD558\uC138\uC694.":"\uB0A8\uC740 \uC870\uC0AC 0\uD68C. \uC99D\uAC70 \uC81C\uC2DC\uC640 \uC9C0\uBAA9\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},Rc=()=>"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uAC00 "+Zo[D.g.tries]+" \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.",Ic=n=>n[0]==="e"?vn[n.slice(2)].name:we[n.slice(2)].name+"\uC758 \uC9C4\uC220",Wr=(n,t)=>Vt("pin",n,(D.g.pins.has(n)?"\uACE0\uC815 \uD574\uC81C":"\uACE0\uC815")+'<span class="sr"> \xB7 '+xt(Ic(n))+"</span>",{cls:"quiet",arg:t});function Cc(){let n=D.g;if(n.budget)return"";let t=ae.unheard(n)?" \uC9C8\uBB38\uD558\uC9C0 \uBABB\uD55C \uC0AC\uB78C\uC740 \uC9C0\uBAA9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uADF8 \uC0AC\uB78C\uC744 \uC9C0\uBAA9\uD558\uB824\uBA74 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.":"";return ae.stuck(n)?'<section class="stuck" aria-labelledby="stuckTitle" data-testid="stuck"><h3 id="stuckTitle" tabindex="-1">\uC9C0\uAE08 \uAE30\uB85D\uC73C\uB85C\uB294 \uC785\uC99D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4</h3><p>\uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uC744 \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4. \uACB0\uB860\uC744 \uC785\uC99D\uD558\uB824\uBA74 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744 \uBCF4\uC5EC \uC8FC\uB294 \uBB3C\uC99D\uACFC \uADF8 \uC2DC\uAC01\uC758 \uC77C\uC744 \uC801\uC740 \uAE30\uB85D\uC774 \uBAA8\uB450 \uC788\uC5B4\uC57C \uD558\uB294\uB370, \uC774 \uAC00\uC6B4\uB370 \uBE60\uC9C4 \uAC83\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p>'+$m(ae.lacking(n),{draw:Nr("gap")})+"<ul>"+ae.lacking(n).map(e=>"<li>"+Lm[e]+"</li>").join("")+'</ul><p>\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD558\uBA74 \uC9C0\uAE08\uC758 \uAE30\uB85D\uC740 \uC9C0\uC6CC\uC9C0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4. \uC774\uBC88\uC5D0\uB294 \uBB34\uC5C7\uC744 \uAC74\uB108\uB6F8\uC9C0 \uBA3C\uC800 \uC815\uD558\uACE0 \uC2DC\uC791\uD558\uC138\uC694.</p><div class="row">'+Vt("restart-ask","stuck","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"primary"})+Vt("hint-open","stuck","\uD78C\uD2B8 \uBCF4\uAE30")+"</div></section>":'<p class="info" data-testid="zero">\uC870\uC0AC \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4. \uC99D\uAC70 \uC81C\uC2DC\uC640 \uAE30\uB85D \uC77D\uAE30, \uC9C0\uBAA9\uC740 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.'+t+"</p>"}function i0(n){let e=D.g.shown.filter(i=>i.startsWith(n.id+":")).map(i=>{let s=i.split(":")[1];return'<div class="turn" id="r-'+n.id+"-"+s+'" tabindex="-1"><p class="asked">\u2014 '+xt(Ur(s))+' \uC81C\uC2DC\uD588\uB2E4.</p><blockquote class="quote">'+xt(ae.reaction(n.id,s))+"</blockquote></div>"});return'<div class="turn"><p class="asked">\u2014 '+xt(jo)+'</p><blockquote class="quote">'+xt(n.say)+"</blockquote></div>"+e.join("")}var zh=n=>D.g.pins.has(n)?" \xB7 \uACE0\uC815\uB428":"",Gh={scene(){let n=D.g,t=D.ui;return'<h2 id="stageTitle" tabindex="-1">\uD604\uC7A5 \uC870\uC0AC</h2><p class="muted caption">'+(D.sceneTold?"\uB0A8\uC740 \uC870\uC0AC "+n.budget+"\uD68C \xB7 "+($n()?"3D\uB098 \uBAA9\uB85D\uC5D0\uC11C \uACE0\uB974\uC138\uC694.":"\uBAA9\uB85D\uC5D0\uC11C \uACE0\uB974\uC138\uC694."):"\uC99D\uAC70\uB97C \uCC98\uC74C \uD655\uC778\uD560 \uB54C\uB9CC \uC870\uC0AC \uAE30\uD68C\uB97C \uD55C \uBC88 \uC501\uB2C8\uB2E4. \uB2E4\uC2DC \uBCF4\uAE30\uC640 \uACE0\uC815\uC740 \uBB34\uB8CC\uC785\uB2C8\uB2E4."+($n()?" 3D \uD654\uBA74\uC744 \uB204\uB974\uBA74 \uACE0\uB974\uAE30\uB9CC \uD558\uACE0, \uC870\uC0AC \uAE30\uD68C\uB294 \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":""))+"</p>"+Cc()+'<ul class="rows" role="list">'+Rn.map(i=>{let s="e:"+i.id,r=n.seen.has(i.id),o=t.selected===s,a=Vt("select",s,'<span class="rowName">'+xt(i.name)+'</span><span class="rowMeta">'+xt(i.kind+" \xB7 "+i.time)+" \xB7 "+(r?"\uD655\uC778\uD568":"\uD655\uC778 \uC804")+zh(s)+"</span>",{cls:"rowBtn",attr:'aria-expanded="'+o+'"'+(o?' aria-controls="rb-'+i.id+'"':"")}),l=o?'<div class="rowBody" id="rb-'+i.id+'"><p class="muted caption">'+xt(i.tease)+'</p><div class="row">'+(r?Vt("board",i.id,'\uB2E4\uC2DC \uBCF4\uAE30<span class="sr"> \xB7 '+xt(i.name)+"</span>",{cls:"primary"})+Wr(s):Vt("inspect",i.id,'<span class="sr">'+xt(i.name)+" </span>\uD655\uC778\uD558\uAE30 \xB7 "+(n.budget?"\uC870\uC0AC 1\uD68C":"\uC870\uC0AC \uAE30\uD68C \uC5C6\uC74C"),{cls:"primary",attr:'aria-disabled="'+!n.budget+'"'}))+"</div></div>":"";return'<li class="item1'+(o?" on":"")+(r?" seen":"")+'" id="row-'+i.id+'">'+a+l+"</li>"}).join("")+"</ul>"+($n()?"":'<div class="sec">'+n0(t.selected)+"</div>")+'<section class="info" aria-labelledby="layoutTitle" data-testid="layout"><h3 id="layoutTitle">\uD604\uC7A5 \uBC30\uCE58</h3><p>'+xt(Im)+"</p></section>"},board(){let n=D.ui.board,t=vn[n],e=D.ui.lit||new Set,i="e:"+n;return'<p class="pill">'+xt(t.kind+" \xB7 "+t.time)+" \xB7 \uD655\uC778\uD568"+zh(i)+'</p><h2 id="stageTitle" tabindex="-1">'+xt(t.name)+"</h2>"+Qm(n,Nr("ev:"+n))+'<h3 class="sr">\uD655\uC778\uD55C \uC0AC\uC2E4</h3><ol class="facts" role="list">'+Ir[n].map(s=>'<li data-cue="'+s.cue+'" class="'+(e.has(s.cue)?"on":"")+'">'+xt(s.t)+"</li>").join("")+'</ol><details class="raw"><summary>\uC6D0\uBB38 \uAE30\uB85D</summary><blockquote class="quote">'+xt(t.text)+'</blockquote></details><div class="row" id="boardCtl">'+Vh()+"</div>"},people(){let n=D.g,t=D.ui,e=Rn.filter(i=>n.seen.has(i.id));return'<h2 id="stageTitle" tabindex="-1">\uC6A9\uC758\uC790 \uBA74\uB2F4</h2><p class="muted caption">\uC0AC\uB78C\uB9C8\uB2E4 \uCCAB \uC9C8\uBB38\uC5D0\uB9CC \uC870\uC0AC \uAE30\uD68C\uB97C \uD55C \uBC88 \uC501\uB2C8\uB2E4. \uC9C4\uC220\uC744 \uB4E4\uC740 \uB4A4\uC5D0\uB294 \uD655\uC778\uD55C \uC99D\uAC70\uB97C \uBB34\uB8CC\uB85C \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>'+Cc()+'<ul class="rows" role="list">'+Je.map(i=>{let s="p:"+i.id,r=n.asked.has(i.id),o=t.selected===s,a=n.shown.filter(d=>d.startsWith(i.id+":")).length,l='<span aria-hidden="true">'+i.mark+" </span>"+xt(i.role)+(r?" \xB7 \uC9C4\uC220 \uD655\uBCF4"+(e.length?" \xB7 \uC99D\uAC70 \uC81C\uC2DC "+a+"/"+e.length:""):" \xB7 \uC9C8\uBB38 \uC804")+zh(s),c=Vt("select",s,Or(i.id,"avatar")+'<span class="rowWho"><span class="rowTop">'+Os(i.id)+'<span class="rowName">'+xt(i.name)+'</span></span><span class="rowMeta">'+l+"</span></span>",{cls:"rowBtn rowPerson",attr:'aria-expanded="'+o+'"'+(o?' aria-controls="pb-'+i.id+'"':"")}),u="";if(o&&!r)u='<div class="rowBody" id="pb-'+i.id+'" tabindex="-1"><p class="muted caption">'+xt(i.line)+'</p><p class="asked">\uC9C8\uBB38: '+xt(jo)+'</p><div class="row">'+Vt("ask",i.id,'<span class="sr">'+xt(i.name)+"\uC5D0\uAC8C </span>\uC9C8\uBB38\uD558\uAE30 \xB7 "+(n.budget?"\uC870\uC0AC 1\uD68C":"\uC870\uC0AC \uAE30\uD68C \uC5C6\uC74C"),{cls:"primary",attr:'aria-disabled="'+!n.budget+'"'})+"</div></div>";else if(o){let d=e.length?'<div class="row">'+e.map(h=>{let p=n.shown.includes(i.id+":"+h.id);return Vt("present",i.id,xt(h.name)+(p?" \xB7 \uC81C\uC2DC\uD568":""),{cls:"chip"+(p?" done":""),arg:h.id})}).join("")+"</div>":'<p class="muted caption">\uC81C\uC2DC\uD560 \uC99D\uAC70\uAC00 \uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uC99D\uAC70\uB97C \uBA3C\uC800 \uD655\uC778\uD558\uC138\uC694.</p>';u='<div class="rowBody"><p class="muted caption">'+xt(i.line)+'</p><div class="row talkCtl" id="talkCtl" data-pid="'+i.id+'"></div><div class="reveal" id="pb-'+i.id+'" tabindex="-1">'+i0(i)+'</div><div class="present" role="group" aria-label="'+xt(i.name)+'\uC5D0\uAC8C \uC99D\uAC70 \uC81C\uC2DC"><h4>\uC99D\uAC70 \uC81C\uC2DC \xB7 \uBB34\uB8CC</h4>'+d+'</div><div class="row">'+($n()?Vt("talk-replay",i.id,'\uC9C4\uC220 \uB2E4\uC2DC \uB4E3\uAE30<span class="sr"> \xB7 '+xt(i.name)+"</span>"):"")+Wr(s)+"</div></div>"}return'<li class="item1'+(o?" on":"")+(r?" seen":"")+'" id="row-'+i.id+'">'+c+u+"</li>"}).join("")+"</ul>"},notes(){let n=D.g,t=Rn.filter(s=>n.seen.has(s.id)).sort((s,r)=>s.at-r.at),e=Je.filter(s=>n.asked.has(s.id)),i=[...n.pins].map(s=>{let r=s.slice(2);return'<div class="item"><h4>'+xt(Ic(s))+"</h4><p>"+xt(s[0]==="e"?vn[r].text:we[r].say)+'</p><div class="row">'+Wr(s,"top")+"</div></div>"});return'<h2 id="stageTitle" tabindex="-1">\uC0AC\uAC74 \uAE30\uB85D</h2><p class="muted caption">\uC77D\uAE30\uC640 \uACE0\uC815\uC740 \uBB34\uB8CC\uC785\uB2C8\uB2E4. \uACE0\uC815\uD55C \uAE30\uB85D\uC740 \uB9E8 \uC704\uC5D0 \uBAA8\uC785\uB2C8\uB2E4.</p><p class="caption" data-testid="summary">\uC99D\uAC70 '+n.seen.size+"/"+Rn.length+" \uD655\uC778 \xB7 \uC9C4\uC220 "+n.asked.size+"/"+Je.length+" \uD655\uBCF4 \xB7 \uACE0\uC815 "+n.pins.size+"\uAC1C</p>"+Cc()+'<section class="sec" aria-labelledby="nPlan"><h3 id="nPlan">\uBC30\uCE58\uB3C4</h3><p class="muted caption">\uD655\uC778\uD55C \uC99D\uAC70\uC640 \uC9C4\uC220\uC744 \uB4E4\uC740 \uC0AC\uB78C\uC774 \uB9D0\uD55C \uC790\uB9AC\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>'+n0(null)+"</section>"+e0(n)+'<section class="sec" aria-labelledby="nPin"><h3 id="nPin" tabindex="-1">\uACE0\uC815\uD55C \uAE30\uB85D</h3>'+(i.length?i.join(""):'<p class="muted caption">\uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4. \uC99D\uAC70\uB098 \uC9C4\uC220 \uC606\uC758 \u2018\uACE0\uC815\u2019\uC744 \uB204\uB974\uBA74 \uC5EC\uAE30\uC5D0 \uBAA8\uC785\uB2C8\uB2E4.</p>')+'</section><section class="sec" aria-labelledby="nTime"><h3 id="nTime">\uC2DC\uAC04\uD45C</h3>'+(t.length?'<ol class="timeline" role="list">'+t.map(s=>'<li><p><b class="mono">'+xt(s.time)+"</b> "+xt(s.name)+"</p><p>"+xt(s.text)+'</p><div class="row">'+Wr("e:"+s.id,"list")+"</div></li>").join("")+"</ol>":'<p class="muted caption">\uD604\uC7A5\uC5D0\uC11C \uC99D\uAC70\uB97C \uD655\uC778\uD558\uBA74 \uC2DC\uAC04 \uC21C\uC11C\uB300\uB85C \uC313\uC785\uB2C8\uB2E4.</p>')+'</section><section class="sec" aria-labelledby="nSay"><h3 id="nSay">\uC9C4\uC220\uACFC \uC81C\uC2DC \uAE30\uB85D</h3>'+(e.length?e.map(s=>'<div class="item"><h4>'+xt(s.name+" \xB7 "+s.role)+"</h4>"+i0(s)+'<div class="row">'+Wr("p:"+s.id,"list")+"</div></div>").join(""):'<p class="muted caption">\uBA74\uB2F4\uC5D0\uC11C \uC9C8\uBB38\uD574 \uB4E4\uC740 \uC9C4\uC220\uACFC \uC99D\uAC70\uB97C \uC81C\uC2DC\uD574 \uB4E4\uC740 \uB2F5\uC774 \uC5EC\uAE30\uC5D0 \uB0A8\uC2B5\uB2C8\uB2E4.</p>')+"</section>"+(n.hints.length?'<section class="sec" aria-labelledby="nHint"><h3 id="nHint">\uC5F0 \uD78C\uD2B8</h3><ol class="list">'+n.hints.map(s=>"<li>"+xt(ae.hintText(s))+"</li>").join("")+"</ol></section>":"")},accuse(){let n=D.g,t=D.ui,e=Rn.filter(u=>n.seen.has(u.id)).sort((u,d)=>n.pins.has("e:"+d.id)-n.pins.has("e:"+u.id)),i=t.proof.length,s=i===2,r=ae.ready(n,t.person,t.proof),o=t.person&&we[t.person],a=o&&n.asked.has(o.id),l=['<li class="'+(o?"ok":"")+'">'+(o?xt(Fh(o.id))+" \uC9C0\uBAA9\uD569\uB2C8\uB2E4.":"\uBC94\uC778 \uD55C \uBA85\uC744 \uACE0\uB974\uC138\uC694.")+"</li>",'<li class="'+(s?"ok":"")+'">'+(s?"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":i?"\uC99D\uAC70\uB97C \uD558\uB098 \uB354 \uACE0\uB974\uC138\uC694.":"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE0\uB974\uC138\uC694.")+"</li>"],c="";if(o&&!a)l.push("<li>"+xt(o.name)+"\uC758 \uC9C4\uC220\uC744 \uC544\uC9C1 \uB4E3\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. "+(n.budget?"\uBA74\uB2F4\uC5D0\uC11C \uBA3C\uC800 \uC9C8\uBB38\uD558\uC138\uC694(\uC870\uC0AC 1\uD68C).":"\uC870\uC0AC \uAE30\uD68C\uAC00 \uC5C6\uC5B4 \uC9C4\uC220\uC744 \uB4E4\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC9C4\uC220\uC744 \uB4E3\uC9C0 \uC54A\uC740 \uC0AC\uB78C\uC740 \uC9C0\uBAA9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")+"</li>");else if(o)for(let u of t.proof){let d=n.shown.includes(o.id+":"+u);l.push('<li class="'+(d?"ok":"")+'">'+xt(o.name)+"\uC5D0\uAC8C "+xt(Ur(u))+(d?" \uC81C\uC2DC\uD588\uC2B5\uB2C8\uB2E4.":" \uC544\uC9C1 \uC81C\uC2DC\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")+"</li>")}return o&&i&&!r.steps.filter(u=>u.id==="shown").every(u=>u.ok)&&(a||n.budget)&&(c='<div class="row">'+Vt("goto-person",o.id,"\uBA74\uB2F4\uC5D0\uC11C "+xt(o.name)+"\uC5D0\uAC8C "+(a?"\uC81C\uC2DC\uD558\uAE30":"\uC9C8\uBB38\uD558\uAE30"))+"</div>"),'<h2 id="stageTitle" tabindex="-1">\uCD5C\uC885 \uC9C0\uBAA9</h2><p class="muted caption">\uBC94\uC778 \uD55C \uBA85\uACFC \uC774\uBBF8 \uD655\uC778\uD55C \uC99D\uAC70 \uB450 \uAC1C\uB97C \uC81C\uCD9C\uD569\uB2C8\uB2E4. \uD55C \uC99D\uAC70\uB294 \uB80C\uC988\uAC00 \uB098\uAC04 \uAE38\uC744, \uB2E4\uB978 \uD55C \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC758 \uB9D0\uC774 \uAE30\uB85D\uACFC \uC5B4\uAE0B\uB098\uB294 \uC9C0\uC810\uC744 \uBCF4\uC5EC \uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC81C\uCD9C\uD560 \uC99D\uAC70\uB294 \uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC5D0\uAC8C \uBA3C\uC800 \uC81C\uC2DC\uD574 \uB2F5\uC744 \uB4E4\uC5B4 \uB450\uC5B4\uC57C \uD569\uB2C8\uB2E4. '+(n.tries>1?"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 "+Zo[n.tries]+" \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uC2B5\uB2C8\uB2E4.":"\uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB294 \uD55C \uBC88 \uB0A8\uC558\uC2B5\uB2C8\uB2E4. \uC774\uBC88\uC5D0 \uD2C0\uB9AC\uBA74 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB05D\uB098\uACE0, \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.")+"</p>"+Cc()+"<fieldset><legend>1. \uBC94\uC778\uC73C\uB85C \uC9C0\uBAA9\uD560 \uC0AC\uB78C</legend>"+Je.map(u=>'<label class="pick"><input type="radio" name="suspect" value="'+u.id+'"'+(t.person===u.id?" checked":"")+">"+Or(u.id,"avatar sm")+"<span>"+Os(u.id)+xt(u.name)+"<small>"+xt(u.role)+(n.asked.has(u.id)?"":" \xB7 \uC9C4\uC220 \uB4E3\uC9C0 \uC54A\uC74C")+"</small></span></label>").join("")+"</fieldset><fieldset><legend>2. \uC99D\uAC70 \uB450 \uAC1C ("+i+"/2 \uC120\uD0DD)</legend>"+(e.length?e.map(u=>{let d=t.proof.includes(u.id),h=s&&!d;return'<label class="pick'+(h?" off":"")+'"><input type="checkbox" name="proof" value="'+u.id+'" aria-describedby="proofNote"'+(d?" checked":"")+(h?' aria-disabled="true"':"")+"><span>"+xt(u.name)+(n.pins.has("e:"+u.id)?" \xB7 \uACE0\uC815\uB428":"")+"<small>"+xt(u.tease)+(a?n.shown.includes(o.id+":"+u.id)?" \xB7 \uC81C\uC2DC\uD568":" \xB7 \uC544\uC9C1 \uC81C\uC2DC\uD558\uC9C0 \uC54A\uC74C":"")+"</small></span></label>"}).join(""):'<p class="muted caption">\uC544\uC9C1 \uD655\uC778\uD55C \uC99D\uAC70\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uC99D\uAC70\uB97C \uBA3C\uC800 \uD655\uC778\uD558\uC138\uC694.</p>')+'<p class="caption muted" id="proofNote">'+(s?"\uB450 \uAC1C\uB97C \uBAA8\uB450 \uACE8\uB790\uC2B5\uB2C8\uB2E4. \uBC14\uAFB8\uB824\uBA74 \uACE0\uB978 \uC99D\uAC70 \uD558\uB098\uB97C \uBA3C\uC800 \uD574\uC81C\uD558\uC138\uC694.":"")+'</p></fieldset><section class="sec" aria-labelledby="checkTitle"><h3 id="checkTitle" tabindex="-1">3. \uC81C\uCD9C \uC804 \uD655\uC778</h3>'+Jm({personName:o?o.name:"",band:o?Hi[o.id]:"",proof:t.proof.map(u=>({name:vn[u].name,shown:!!o&&n.shown.includes(o.id+":"+u)})),draw:Nr("accuse")})+'<ul class="steps" role="list" id="steps" data-testid="steps">'+l.join("")+"</ul>"+c+'</section><p class="sec">'+Vt("submit-ask","","\uACB0\uB860 \uC81C\uCD9C",{cls:"primary",attr:'aria-disabled="'+!r.ok+'" aria-describedby="steps"'})+"</p>"}};function Vh(){let n=D.ui.board;return n?(D.ui.playing?Vt("skip-play",n,"\uC7AC\uC0DD \uAC74\uB108\uB6F0\uAE30"):$n()?Vt("replay",n,"\uB2E4\uC2DC \uC7AC\uC0DD"):"")+Wr("e:"+n,"board")+Vt("board-close",n,"\uB2EB\uAE30",{cls:"primary"}):""}function GM(n){let[t,e]=dn[n],i=n===dn.length-1;return'<section class="sec story" aria-labelledby="storyTitle"><h3 id="storyTitle" tabindex="-1">\uC815\uB2F5 \uC7AC\uD604 \xB7 '+(n+1)+"/"+dn.length+'</h3><p class="storyT"><b class="mono">'+t+'</b></p><p class="storyX">'+xt(e)+'</p><div class="row">'+Vt("story-prev","",'<span aria-hidden="true">\u25C0 </span>\uC774\uC804',{attr:'aria-disabled="'+(n===0)+'"'})+Vt("story-next","",(i?"\uB9C8\uBB34\uB9AC":"\uB2E4\uC74C")+'<span aria-hidden="true"> \u25B6</span>',{cls:"primary"})+Vt("story-auto","",D.ui.auto?"\uC790\uB3D9 \uC7AC\uC0DD \uBA48\uCDA4":"\uC790\uB3D9 \uC7AC\uC0DD",{attr:'aria-pressed="'+!!D.ui.auto+'"'})+Vt("story-skip","","\uC7AC\uD604 \uAC74\uB108\uB6F0\uAE30",{cls:"quiet"})+"</div></section>"}function s0(){let n=D.g,t=D.ui,e=t.verdict,i=9-n.budget;if(e.ok){let o='<div class="final winHead" data-testid="verdict" data-result="win">'+Or(t.person,"winFace")+'<div><p class="tag" aria-hidden="true">VERDICT</p><h2 id="stageTitle" tabindex="-1">'+xt(Lr.title)+"</h2><p>"+xt(Lr.lead)+"</p></div></div>",a=t.story==null?dn.length:t.story;return a<dn.length?o+GM(a):o+'<section class="sec"><h3 id="storyEnd" tabindex="-1">\uC2DC\uAC04\uD45C</h3><ol class="timeline" role="list">'+dn.map(([l,c])=>'<li><p><b class="mono">'+l+"</b> "+xt(c)+"</p></li>").join("")+'</ol></section><section class="sec card"><h3>\uC218\uBC95</h3><p>'+xt(Lr.method)+'</p></section><section class="sec card"><h3>\uB450 \uC99D\uAC70\uAC00 \uC11C\uB85C\uB97C \uAC80\uC99D\uD55C \uBC29\uC2DD</h3><p>'+xt(Lr.cross)+'</p></section><section class="sec card"><h3>\uB3D9\uAE30</h3><p>'+xt(Lr.motive)+'</p></section><p class="sec muted caption">\uC870\uC0AC \uAE30\uD68C '+i+"\uD68C \uC0AC\uC6A9 \xB7 "+_m[3-n.tries+1]+" \uBC88\uC9F8 \uACB0\uB860\uC5D0\uC11C \uD574\uACB0 \xB7 "+(n.hints.length?"\uD78C\uD2B8 "+n.hints.length+"\uAC1C \uC5F4\uB78C":"\uD78C\uD2B8 \uC5C6\uC774 \uD574\uACB0")+'</p><div class="row sec">'+Vt("restart","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uD558\uAE30",{cls:"primary"})+Vt("story-again","","\uC7AC\uD604 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uBCF4\uAE30")+"</div>"}let s=n.tries===0,r='<div class="final bad" data-testid="verdict" data-result="'+(s?"unsolved":"lose")+'" data-kind="'+e.kind+'"><p class="tag" aria-hidden="true">VERDICT</p><h2 id="stageTitle" tabindex="-1">'+(s?"\uBBF8\uACB0":"\uC785\uC99D \uC2E4\uD328")+"</h2><p>"+xt(Fh(t.person))+' \uC9C0\uBAA9\uD55C \uACB0\uB860\uC740 \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.</p></div><section class="sec"><h3>\uBB34\uC5C7\uC774 \uBD80\uC871\uD588\uB098</h3>'+Km(e.kind,{draw:Nr("chain")})+"<p>"+Pm[e.kind]+"</p></section>";return s?r+'<section class="sec"><p>'+xt(xm)+'</p></section><p class="sec">'+Vt("restart","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"primary"})+"</p>":r+'<section class="sec"><p>\uC9C0\uBAA9\uD55C \uC0AC\uB78C\uC774 \uB9DE\uC558\uB294\uC9C0 \uD2C0\uB838\uB294\uC9C0\uB294 \uC54C\uB824 \uB4DC\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. '+Rc().replace("\uC2B5\uB2C8\uB2E4.","\uACE0, \uC870\uC0AC \uAE30\uB85D\uC740 \uADF8\uB300\uB85C \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.")+' \uB9C9\uD788\uBA74 \uC704\uCABD\uC758 \uD78C\uD2B8\uB97C \uD55C \uB2E8\uACC4\uC529 \uC5F4\uC5B4 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></section><div class="row sec">'+Vt("resume","verdict","\uAE30\uB85D \uADF8\uB300\uB85C \uC774\uC5B4\uC11C \uC870\uC0AC",{cls:"primary"})+Vt("restart-ask","verdict","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"quiet"})+"</div>"}var Ge={pid:null,items:[],i:0},Lc={typeMs:34,flapEvery:3,blinkEvery:3400,blinkMs:150},Yr=0,Hh=0,r0=0,qr=[],ps=0,oa=()=>Ge.items.length>0&&Ge.i<Ge.items.length,o0=()=>oa()?Ge.items[Ge.i].who:null;function Pc(n,t){Ge.pid=n,Ge.items=t,Ge.i=0,u0()}function a0(){oa()&&(Ge.i++,Ge.i>=Ge.items.length?aa():u0())}function l0(){return Yr?(c0(),!0):!1}function aa(){Ge.items=[],Ge.i=0,Ge.pid=null,Wh(),h0(!1),document.body.classList.remove("talking");let n=j("bubble");n&&(n.hidden=!0),Nc()}function ra(n){let t=j("tbFace");t&&(t.dataset.f=String(n))}function Wh(){clearInterval(Yr),Yr=0;let n=j("bubble");n&&n.classList.remove("typing")}function c0(){Wh(),j("tbShown").textContent=qr.join(""),j("tbRest").textContent="",ra(0)}function u0(){let n=j("bubble");if(!n)return;let t=Ge.items[Ge.i],e=t.who==="q";n.classList.toggle("mine",e);let i=j("tbFace");i.hidden=e,e||(i.dataset.face=t.who);let s=j("tbName");s.innerHTML=e?"<b>\uC810\uAC80\uAD00(\uB098)</b> <small>\uC9C8\uBB38</small>":Os(t.who)+"<b>"+xt(we[t.who].name)+"</b> <small>"+xt(we[t.who].role)+"</small>",e?s.style.removeProperty("--who"):s.style.setProperty("--who",Hi[t.who]),j("bubbleMore").textContent=Ge.i<Ge.items.length-1?"\u25BC "+(Ge.i+1)+"/"+Ge.items.length:"\u25A0 \uB2EB\uAE30",n.hidden=D.no3d||!D.world,document.body.classList.toggle("talking",!n.hidden),Wh(),ra(0),qr=Array.from(t.text),ps=0,yn()||n.hidden?(j("tbShown").textContent=t.text,j("tbRest").textContent=""):(j("tbShown").textContent="",j("tbRest").textContent=t.text,n.classList.add("typing"),Yr=setInterval(()=>{ps++,j("tbShown").textContent=qr.slice(0,ps).join(""),j("tbRest").textContent=qr.slice(ps).join("");let r=qr[ps-1]||" ",o=/[\s.,…?!“”"'·]/.test(r);e||ra(o?0:Math.floor(ps/Lc.flapEvery)%2?1:0),!o&&ps%2&&Ke("blip"),ps>=qr.length&&c0()},Lc.typeMs)),h0(!e&&!n.hidden&&!yn()),Nc()}function h0(n){clearInterval(Hh),clearTimeout(r0),Hh=0,n&&(Hh=setInterval(()=>{Yr||(ra(2),r0=setTimeout(()=>{Yr||ra(0)},Lc.blinkMs))},Lc.blinkEvery))}function Nc(){let n=j("talkCtl");if(!n)return;let t=oa()&&Ge.pid===n.dataset.pid&&!D.no3d&&!!D.world;n.innerHTML=t?Vt("talk-next","","\uB2E4\uC74C \uBB38\uC7A5 \xB7 "+(Ge.i+1)+"/"+Ge.items.length)+Vt("talk-all","","\uBAA8\uB450 \uBCF4\uAE30"):"",n.hidden=!t}var Dc=["peek","half","full"],d0={peek:"half",half:"full",full:"peek"},HM={peek:"\uCD5C\uC18C",half:"\uC808\uBC18",full:"\uC804\uCCB4"},WM={peek:"\uCD5C\uC18C\uB85C",half:"\uC808\uBC18\uC73C\uB85C",full:"\uC804\uCCB4\uB85C"},ms={peek:188,half:400,full:600},f0=()=>{},Xh=!1;function p0(n){f0=n;let t=j("handle"),e=j("sheet"),i=null;t.addEventListener("pointerdown",r=>{r.button||(i={y:r.clientY,h:e.getBoundingClientRect().height,moved:!1,id:r.pointerId},t.setPointerCapture?.(r.pointerId))}),t.addEventListener("pointermove",r=>{if(!i||r.pointerId!==i.id)return;let o=r.clientY-i.y;!i.moved&&Math.abs(o)<6||(i.moved=!0,e.classList.add("drag"),e.style.setProperty("--sheet-h",Math.max(ms.peek*.6,Math.min(ms.full,i.h-o))+"px"))});let s=r=>{if(!i||r.pointerId!==i.id)return;let o=i.moved;if(i=null,e.classList.remove("drag"),!o)return;Xh=!0,setTimeout(()=>{Xh=!1},350);let a=e.getBoundingClientRect().height,l="peek";for(let c of Dc)Math.abs(ms[c]-a)<Math.abs(ms[l]-a)&&(l=c);We(l)};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("keydown",r=>{let o=Dc.indexOf(D.ui.sheet),a={ArrowUp:Math.min(2,o+1),ArrowDown:Math.max(0,o-1)}[r.key];a!==void 0&&(r.preventDefault(),We(Dc[a]))})}var m0=()=>Xh;function g0(n,t){let e=parseFloat(getComputedStyle(document.documentElement).fontSize)||16,i=Math.max(120,innerHeight-n-t),s=Math.min(i,Math.max(188,e*11.5));ms={peek:s,half:Math.min(i,Math.max(s,Math.round(innerHeight*.5))),full:i};let r=j("sheet");r&&!r.classList.contains("drag")&&r.style.setProperty("--sheet-h",ms[D.ui.sheet]+"px")}var x0=()=>ms[D.ui.sheet]||0;function We(n,t){if(!Dc.includes(n))return;D.ui.sheet=n;let e=j("sheet"),i=j("handle");e.dataset.stage=n,e.style.setProperty("--sheet-h",ms[n]+"px"),i.setAttribute("aria-expanded",String(n!=="peek")),j("handleText").textContent="\uC870\uC0AC \uD654\uBA74 \uD06C\uAE30: "+HM[n]+". \uB204\uB974\uBA74 "+WM[d0[n]]+" \uBC14\uB01D\uB2C8\uB2E4.",t||f0()}function _0(){We(d0[D.ui.sheet]||"half")}var Yh=new Map,y0=new Map;function v0(n,t,e){let i=Yh.get(n);return i||(i=document.createElement("span"),i.className="lbl "+t,j("labels").appendChild(i),Yh.set(n,i)),i.textContent!==e&&(i.textContent=e),i}function qM(n){let t=n.className+"|"+n.textContent,e=y0.get(t);if(!e){let i=n.hidden;n.hidden=!1,e={w:n.offsetWidth,h:n.offsetHeight},n.hidden=i,e.w&&y0.set(t,e)}return e}var qh=(n,t)=>n.l<t.r+3&&t.l<n.r+3&&n.t<t.b+3&&t.t<n.b+3;function Bs(){let n=j("labels");if(!n)return;let t=document.body.classList,e=!D.world||D.no3d||!D.ui||!D.ui.started||!!D.ui.verdict||t.contains("playing")||t.contains("intro")||t.contains("opening-on");if(n.hidden=e,e){Uc();return}let i=j("canvas");if(!i){Uc();return}let s=i.getBoundingClientRect(),r=D.insets.top+4,o=innerHeight-D.insets.bottom-4,a=D.ui.selected,l=[],c=(y,m,f,_,w,v)=>{let E=s.left+_.x,A=s.top+_.y;!_.visible||A<=r+16||A>=o||E<=s.left||E>=s.right||l.push({key:y,cls:m,text:f,px:E,py:A,selected:!!w,prio:w?0:v})};for(let y of Mc("people")||[]){let m=String(y.id).replace(/^p:/,"");we[m]&&c("p:"+m,"who",we[m].name,y,a==="p:"+m||D.ui.tab==="accuse"&&D.ui.person===m,2)}for(let y of Mc("spots")||[]){let m=String(y.id).replace(/^e:/,"");vn[m]&&c("e:"+m,"spot",vn[m].name,y,a==="e:"+m,1)}for(let y of Mc("pins")||[]){let m=String(y.id).replace(/^(c|pin|p):/,""),f=y.label||Vi[m]&&Vi[m].label;f&&c("c:"+m,"claim",f,y,!1,3)}let u=y=>{let m=qM(v0(y.key,y.cls,y.text)),f=Math.min(s.right-m.w/2-6,Math.max(s.left+m.w/2+6,y.px));return y.cx=f,{l:f-m.w/2,r:f+m.w/2,t:y.py-m.h,b:y.py}},d=l.filter(y=>y.cls==="who"&&!y.selected);if(d.length>1){let y=d.map(u);if(y.some((m,f)=>y.some((_,w)=>w>f&&qh(m,_)))){for(let f of d)l.splice(l.indexOf(f),1);let m=d.length;l.push({key:"p:group",cls:"who",text:m===4?"\uB85C\uBE44\uC758 \uB124 \uC0AC\uB78C":"\uB85C\uBE44\uC758 "+["","\uD55C","\uB450","\uC138"][m]+" \uC0AC\uB78C",px:d.reduce((f,_)=>f+_.px,0)/m,py:Math.min(...d.map(f=>f.py)),selected:!1,prio:2})}}l.sort((y,m)=>y.prio-m.prio);let h=[],p=new Set,g=new Map;for(let y of l){let m=u(y),f=0;if(!y.selected){let w=m.b-m.t+2;for(let v=0;v<2&&h.some(E=>qh(E,m));v++)f-=w,m={l:m.l,r:m.r,t:m.t-w,b:m.b-w};if(f&&m.t<r||h.some(v=>qh(v,m)))continue}h.push(m),p.add(y.key),g.set(y.key,{x:y.cx,y:y.py+f});let _=v0(y.key,y.cls,y.text);_.hidden=!1,_.style.transform="translate3d("+y.cx.toFixed(1)+"px,"+(y.py+f).toFixed(1)+"px,0) translate(-50%,-100%)",_.classList.toggle("on",y.selected)}for(let[y,m]of Yh)p.has(y)||(m.hidden=!0);YM(g.get(a),s,o)}function YM(n,t,e){let i=j("act3d");if(!i)return;let s=D.ui,r=D.g,o=s&&s.selected,[a,l]=String(o||"").split(":"),c=a==="e"?s.tab==="scene"&&!!vn[l]&&!r.seen.has(l):a==="p"?s.tab==="people"&&!!we[l]&&!r.asked.has(l):!1;if(!n||!c||!r.budget||s.board){i.hidden=!0;return}let u=a==="e"?"inspect":"ask",d=(a==="e"?"\uD655\uC778\uD558\uAE30":"\uC9C8\uBB38\uD558\uAE30")+" \xB7 \uC870\uC0AC 1\uD68C";(i.dataset.act3d!==u||i.dataset.id!==l)&&(i.dataset.act3d=u,i.dataset.id=l),i.textContent!==d&&(i.textContent=d),i.hidden=!1;let h=i.offsetWidth,p=i.offsetHeight,g=n.y+6;if(g+p>e){i.hidden=!0;return}let y=Math.min(t.right-h/2-4,Math.max(t.left+h/2+4,n.x));i.style.transform="translate3d("+(y-h/2).toFixed(1)+"px,"+g.toFixed(1)+"px,0)"}function Uc(){let n=j("act3d");n&&(n.hidden=!0)}var Zh=()=>/KAKAOTALK|NAVER\(inapp|Instagram|FBAN|FBAV|Line\/|DaumApps|everytimeApp|SamsungBrowser\/[\d.]+ .*CrossApp/i.test(navigator.userAgent||"");function Jh(){let n=hs();return n.mode==="installed"?"":Zh()?'<p class="info caption">\uBA54\uC2E0\uC800\uB098 \uD3EC\uD138 \uC571 \uC548\uC5D0\uC11C \uC5F4\uB9B0 \uD654\uBA74\uC5D0\uC11C\uB294 \uC571\uC73C\uB85C \uC124\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC624\uB978\uCABD \uC704 \uBA54\uB274\uC5D0\uC11C \u300C\uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30\u300D\uB97C \uACE0\uB978 \uB4A4 \uC124\uCE58\uD558\uC138\uC694. \uC124\uCE58\uD558\uC9C0 \uC54A\uC544\uB3C4 \uC5EC\uAE30\uC11C \uBC14\uB85C \uC870\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>':n.mode==="prompt"?"<p>"+Vt("install","title","\uC571\uC73C\uB85C \uC124\uCE58")+"</p>":n.kind==="ios"?'<details class="caption"><summary>\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\uD558\uAE30</summary><p class="pad0">\uC0AC\uD30C\uB9AC\uC5D0\uC11C \u300C\uACF5\uC720 \u2192 \uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00\u300D\uB97C \uACE0\uB974\uBA74 \uC571\uCC98\uB7FC \uC804\uCCB4 \uD654\uBA74\uC73C\uB85C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ol>'+Ko("ios").map(t=>"<li>"+xt(t)+"</li>").join("")+"</ol></details>":'<details class="caption"><summary>\uC571\uC73C\uB85C \uC124\uCE58\uD558\uB294 \uBC29\uBC95</summary><ol>'+Ko(n.kind).map(t=>"<li>"+xt(t)+"</li>").join("")+"</ol></details>"}function S0(n){let t=D.g,e=Rr.indexOf(","),[i,s]=e<0?[Rr,""]:[Rr.slice(0,e+1),Rr.slice(e+1).trimStart()];return'<div class="titleInner"><p class="tag">'+xt(pm)+'</p><h1 class="display" id="titleH" tabindex="-1" aria-label="'+xt(Rr)+'"><b>'+xt(i)+"</b> "+xt(s||"")+'</h1><p class="lead">'+xt(_c)+'</p><div class="row">'+(n?Vt("continue","","\uC774\uC5B4\uC11C \uC870\uC0AC \xB7 \uB0A8\uC740 \uC870\uC0AC "+t.budget+"\uD68C \xB7 \uACB0\uB860 "+t.tries+"\uBC88",{cls:"primary"})+Vt("newgame-ask","","\uCC98\uC74C\uBD80\uD130"):Vt("start","","\uC870\uC0AC \uC2DC\uC791",{cls:"primary"}))+Vt("rules-open","title","\uC870\uC0AC \uBC29\uBC95")+"</div>"+wc({draw:!0})+'<div id="installBox">'+Jh()+'</div><p class="bottom">\uC624\uD504\uB77C\uC778 \uB2E8\uD3B8 \xB7 \uB300\uC0AC\uB294 \uBAA8\uB450 \uBBF8\uB9AC \uC4F0\uC778 \uAE00\uC785\uB2C8\uB2E4. \uC678\uBD80 \uC5F0\uACB0\uC774\uB098 \uC2E4\uC2DC\uAC04 AI\uB294 \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div>'}var $h={typeMs:42,holdMs:2600,fadeMs:280};function ZM(){let n=Yo(_c);return[{pic:"s1",text:n[0]},{pic:"s2",text:n[1]},{pic:"s3",text:n[2]},{pic:"lineup",head:"\uB85C\uBE44\uC758 \uB124 \uC0AC\uB78C",text:n.slice(3).join(" ")}]}function M0(){return'<section id="opening" class="opening" role="dialog" aria-modal="true" aria-label="\uC624\uD504\uB2DD" hidden><div class="opInner"><div class="opPic" id="opPic" aria-hidden="true"></div><div class="opBox" id="opBox"><p class="opHead" id="opHead" hidden></p><p class="opText" id="opText"><span id="opShown"></span><span id="opRest" class="tbRest" aria-hidden="true"></span></p><span class="opMore" id="opMore" aria-hidden="true"></span></div></div><p class="sr" id="opLive" aria-live="polite"></p><button type="button" class="opSkip" data-action="opening-skip">\uAC74\uB108\uB6F0\uAE30</button></section>'}var JM=n=>n.pic==="lineup"?'<div class="opLine">'+Je.map(t=>'<figure class="opWho">'+Or(t.id,"opFace")+"<figcaption>"+Os(t.id)+"<b>"+xt(t.name)+"</b><small>"+xt(t.role)+"</small></figcaption></figure>").join("")+"</div>":'<img class="opImg" src="px/scene-'+n.pic+'.png" width="160" height="96" alt="" decoding="async">',re=null,jh=()=>!!re;function Qh(n){re&&ed(!0);let t=j("opening");if(!t){n&&n();return}re={beats:ZM(),i:-1,timer:0,typer:0,chars:[],shown:0,done:n};for(let i of re.beats)if(i.pic!=="lineup"){let s=new Image;s.src="px/scene-"+i.pic+".png"}t.hidden=!1,t.classList.remove("out"),document.body.classList.add("opening-on");let e=t.querySelector(".opSkip");e&&e.focus({preventScroll:!0}),td(0)}function td(n){if(!re)return;if(clearTimeout(re.timer),clearInterval(re.typer),re.typer=0,n>=re.beats.length){ed();return}re.i=n;let t=re.beats[n],e=j("opPic");e.classList.remove("show"),e.innerHTML=JM(t),e.dataset.pic=t.pic,requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("show")));let i=j("opHead");if(i.hidden=!t.head,i.textContent=t.head||"",j("opLive").textContent=(t.head?t.head+". ":"")+t.text,j("opMore").textContent="",Ke("page"),re.chars=Array.from(t.text),re.shown=0,yn()){j("opShown").textContent=t.text,j("opRest").textContent="",Kh();return}j("opShown").textContent="",j("opRest").textContent=t.text,re.typer=setInterval(()=>{if(!re)return;re.shown++,j("opShown").textContent=re.chars.slice(0,re.shown).join(""),j("opRest").textContent=re.chars.slice(re.shown).join("");let s=re.chars[re.shown-1]||" ";!/[\s.,…]/.test(s)&&re.shown%2&&Ke("blip"),re.shown>=re.chars.length&&Kh()},$h.typeMs)}function Kh(){re&&(clearInterval(re.typer),re.typer=0,j("opShown").textContent=re.chars.join(""),j("opRest").textContent="",j("opMore").textContent=re.i<re.beats.length-1?"\u25BC":"\u25A0",re.timer=setTimeout(()=>td(re.i+1),$h.holdMs+(yn()?1200:0)))}function b0(){re&&(re.typer?Kh():td(re.i+1))}function Oc(){ed()}function ed(n){if(!re)return;let t=re;re=null,clearTimeout(t.timer),clearInterval(t.typer);let e=j("opening"),i=()=>{e.hidden=!0,e.classList.remove("out"),j("opPic").innerHTML="",document.body.classList.remove("opening-on"),!n&&t.done&&t.done()};yn()||n?i():(e.classList.add("out"),setTimeout(i,$h.fadeMs))}function T0(){return'<dialog id="hintDlg" aria-labelledby="hintTitle"><div class="dlg"><div class="dlgBody" tabindex="0"><h2 id="hintTitle" tabindex="-1">\uD78C\uD2B8</h2><p class="caption muted">\uD78C\uD2B8\uB294 \uC694\uCCAD\uD560 \uB54C\uB9CC, \uB204\uB97C \uB54C\uB9C8\uB2E4 \uD55C \uB2E8\uACC4\uC529 \uC5F4\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uAE30\uD68C\uB294 \uC4F0\uC9C0 \uC54A\uACE0, \uB204\uAC00 \uD55C \uC77C\uC778\uC9C0\uB294 \uC54C\uB824 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uB3C4 \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p><ol id="hintList" data-testid="hints"></ol><p id="hintState" class="caption"></p><p class="sr" id="hintLive" role="status" aria-atomic="true"></p></div><div class="dlgFoot"><button type="button" class="primary" data-action="hint-next" id="hintNext">\uD78C\uD2B8 \uD55C \uB2E8\uACC4 \uC5F4\uAE30</button><button type="button" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog><dialog id="askDlg" aria-labelledby="askTitle" aria-describedby="askBody"><div class="dlg"><div class="dlgBody"><h2 id="askTitle" tabindex="-1"></h2><div id="askBody" class="reveal"></div></div><div class="dlgFoot"><button type="button" class="primary" id="askYes"></button><button type="button" data-action="dialog-close">\uB3CC\uC544\uAC00\uAE30</button></div></div></dialog><dialog id="menuDlg" aria-labelledby="menuTitle"><div class="dlg"><div class="dlgBody"><h2 id="menuTitle" tabindex="-1">\uBA54\uB274</h2><div id="menuBody" class="menuList"></div></div><div class="dlgFoot"><button type="button" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog><dialog id="infoDlg" aria-labelledby="infoTitle"><div class="dlg"><div class="dlgBody" tabindex="0"><h2 id="infoTitle" tabindex="-1"></h2><div id="infoBody" class="reveal"></div></div><div class="dlgFoot"><button type="button" class="primary" data-action="dialog-close">\uB2EB\uAE30</button></div></div></dialog>'}var nd=null,id="",A0=0,E0=()=>A0;function la(n){let t=document.activeElement;t&&t!==document.body&&!t.closest("dialog")&&(nd=t,id=t.dataset&&t.dataset.action?ve(t.dataset.action,t.dataset.id,t.dataset.arg):t.id?"#"+t.id:""),n.open||n.showModal();let e=n.querySelector("h2");e&&e.focus()}function fi(){for(let n of document.querySelectorAll("dialog[open]"))n.close()}function C0(n){if(document.querySelector("dialog[open]"))return;let t=document.activeElement;if(t&&t!==document.body&&document.contains(t)&&!t.closest("dialog"))return;let e=s=>s&&document.contains(s)&&s.getClientRects().length>0,i=e(nd)?nd:null;if(!i&&id){let s=document.querySelector(id);e(s)&&(i=s)}i=i||n(),i&&i.focus()}function Fc(n,t,e,i){j("askTitle").textContent=n,j("askBody").innerHTML=t;let s=j("askYes");s.textContent=e,s.dataset.action=i,A0=performance.now(),fi(),la(j("askDlg"))}function sd(){let n=D.g;j("hintList").innerHTML=n.hints.map(e=>'<li data-testid="hint">'+xt(ae.hintText(e))+"</li>").join(""),j("hintList").hidden=!n.hints.length;let t=ae.nextHint(n);j("hintNext").hidden=!t,j("hintState").textContent=t?n.hints.length?"":"\uC544\uC9C1 \uC5F0 \uD78C\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6D0\uD560 \uB54C \uD55C \uB2E8\uACC4\uC529 \uC5F4\uC5B4 \uBCF4\uC138\uC694.":"\uC5F4 \uC218 \uC788\uB294 \uD78C\uD2B8\uB97C \uBAA8\uB450 \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4."}function rd(n,t){j("infoTitle").textContent=n,j("infoBody").innerHTML=t,fi(),la(j("infoDlg"))}var R0=()=>wc({hidden:!0})+'<ul class="list">'+mm.map(n=>"<li>"+xt(n)+"</li>").join("")+"</ul>";function I0(){if(Zh())return"<p>\uBA54\uC2E0\uC800\uB098 \uD3EC\uD138 \uC571 \uC548\uC5D0\uC11C \uC5F4\uB9B0 \uD654\uBA74\uC5D0\uC11C\uB294 \uC571\uC73C\uB85C \uC124\uCE58\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC624\uB978\uCABD \uC704 \uBA54\uB274\uC5D0\uC11C \u300C\uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30\u300D\uB97C \uACE0\uB978 \uB4A4 \uC124\uCE58\uD558\uC138\uC694.</p>";let n=hs();return'<ol class="list">'+Ko(n.kind).map(t=>"<li>"+xt(t)+"</li>").join("")+"</ol>"}var w0=n=>n?"\uCF1C\uC9D0":"\uAEBC\uC9D0";function od(){let n=hs(),t=Ln.quality;return Vt("rules-open","menu","\uC870\uC0AC \uBC29\uBC95")+(D.ui&&D.ui.started?Vt("opening-replay","menu","\uC624\uD504\uB2DD \uB2E4\uC2DC \uBCF4\uAE30"):"")+Vt("set-sound","","\uC18C\uB9AC \xB7 "+w0(ea()),{attr:'aria-pressed="'+ea()+'"'})+Vt("set-motion","","\uC6C0\uC9C1\uC784 \uC904\uC774\uAE30 \xB7 "+w0(Ln.motion),{attr:'aria-pressed="'+Ln.motion+'"'})+'<fieldset class="seg"><legend>\uD654\uC9C8</legend><div class="row">'+[["auto","\uC790\uB3D9"],["low","\uB0AE\uC74C"],["high","\uB192\uC74C"]].map(([e,i])=>Vt("set-quality",e,i,{attr:'aria-pressed="'+(t===e)+'"'+(D.no3d?' aria-disabled="true"':"")})).join("")+"</div></fieldset>"+(D.unavailable?'<p class="info caption">\uC774 \uAE30\uAE30\uC5D0\uC11C\uB294 3D \uD654\uBA74\uC744 \uC4F8 \uC218 \uC5C6\uC5B4 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uB0B4\uC6A9\uC740 \uAC19\uC2B5\uB2C8\uB2E4.</p>':Vt("set-3d","",D.no3d?"3D \uCF1C\uAE30":"3D \uB044\uAE30 \xB7 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uAE30",{attr:'aria-pressed="'+D.no3d+'"'}))+(n.mode==="installed"?"":Vt("install","menu","\uC571\uC73C\uB85C \uC124\uCE58"))+(D.ui&&D.ui.started?Vt("restart-ask","menu","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC",{cls:"quiet"}):"")}var _d=[["all","\uC804\uCCB4"],["hall","\uC804\uC2DC\uC2E4"],["back","\uBD80\uC2A4"],["lobby","\uB85C\uBE44"]],L0="0217-v3-opening",KM={auto:"\uC790\uB3D9",low:"\uB0AE\uC74C",high:"\uB192\uC74C"};function $M(){return'<a class="skip" id="skip" href="#sheetBody" hidden>\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30</a><div id="labels" class="labels" aria-hidden="true" hidden></div><button type="button" id="act3d" class="act3d primary" tabindex="-1" aria-hidden="true" hidden></button><div id="cap3d" class="cap3d" aria-hidden="true" hidden><span id="cap3dText"></span></div><button type="button" id="introSkip" class="introSkip" data-action="intro-skip" hidden>\uC2DC\uC791 \uC5F0\uCD9C \uAC74\uB108\uB6F0\uAE30</button><div id="cctv" class="cctvOverlay" aria-hidden="true" hidden><span class="rec">REC</span> <span id="cctvTime" class="mono"></span></div><div id="bubble" class="bubble talkbox" aria-hidden="true" hidden><span id="tbFace" class="face tbFace" data-face="" data-f="0"></span><div class="tbBody"><p class="tbName" id="tbName"></p><p id="bubbleText" class="tbText"><span id="tbShown"></span><span id="tbRest" class="tbRest"></span></p><span id="bubbleMore" class="bubbleMore"></span></div></div><main id="game" class="game" hidden aria-label="\uC0AC\uAC74 \uC870\uC0AC"><header class="hud" id="hud"><p class="budget" data-testid="budget"><span class="tag">\uB0A8\uC740 \uC870\uC0AC</span> <b id="left">9</b><span>\uD68C</span> <span class="pips" id="pips" aria-hidden="true"></span> <span class="tries"><span class="tag">\uB0A8\uC740 \uACB0\uB860</span> <b id="tries">3</b><span>\uBC88</span></span></p><div class="hudBtns"><button type="button" class="quiet" data-action="hint-open" id="hintBtn">\uD78C\uD2B8</button><button type="button" class="quiet" data-action="menu-open" id="menuBtn">\uBA54\uB274</button></div></header><section class="sheet" id="sheet" data-stage="half" aria-label="\uC870\uC0AC \uD654\uBA74"><div class="viewctl" id="viewctl" role="group" aria-label="3D \uBCF4\uAE30 \uC870\uC791"><div class="vrow">'+Vt("rotate","1",'<span aria-hidden="true">\u21BB</span>',{attr:'aria-label="90\uB3C4 \uB3CC\uB824 \uBCF4\uAE30"'})+_d.map(([n,t])=>Vt("view",n,t,{attr:'aria-pressed="false"'})).join("")+'</div></div><button type="button" class="handle" id="handle" data-action="sheet" aria-expanded="true" aria-controls="sheetBody"><span class="grip" aria-hidden="true"></span><span class="sr" id="handleText">\uC870\uC0AC \uD654\uBA74 \uD3BC\uCE58\uAE30</span></button><div class="sheetBody" id="sheetBody" tabindex="-1"><p class="notice" id="notice"></p><div id="stage" role="tabpanel" tabindex="-1" data-testid="stage"></div></div></section><div class="tabs" id="tabs" role="tablist" aria-label="\uC870\uC0AC \uBA54\uB274">'+Dr.map((n,t)=>'<button type="button" role="tab" id="tab-'+n+'" data-tab="'+n+'" aria-controls="stage" aria-selected="'+(t===0)+'"'+(t?' tabindex="-1"':"")+">"+Oh[n]+'<small id="cnt-'+n+'"></small></button>').join("")+'</div></main><section id="title" class="title" aria-labelledby="titleH"></section>'+M0()+'<p class="sr" id="live" role="status" aria-live="polite" aria-atomic="true"></p><div id="toast" class="toast" role="status" hidden></div>'+T0()}var V0=n=>({tab:"scene",person:"",proof:[],verdict:null,notice:"",selected:null,board:null,lit:null,playing:null,story:null,auto:!1,view:"all",sheet:"half",started:!!n});function P0(){D.g=ae.fresh(D.g?D.g.hints:[]),D.ui=V0(!0)}var N0;function De(n,t){D.ui.notice=n,j("notice").textContent=n;let e=j("live");e.textContent="",clearTimeout(N0),N0=setTimeout(()=>{e.textContent=t||n},80)}var D0=!1,ld=!1,cd=0;function ks(){let n=D.g,t=D.ui;if(!t||!t.started||ld)return;Em(n,{tab:t.tab,person:t.person,proof:t.proof,verdict:t.verdict?{ok:t.verdict.ok,kind:t.verdict.kind}:null,view:t.view})?cd=Date.now():D0||(D0=!0,De("\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC9C4\uD589\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2EB\uC73C\uBA74 \uAE30\uB85D\uC774 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4."))}var ud=0;function zc(n,t){let e=j("toast");clearTimeout(ud),e.innerHTML=n,e.hidden=!1,t&&(ud=setTimeout(()=>{e.hidden=!0},t))}var hd=()=>Vt("toast-close","","\uB2EB\uAE30",{cls:"quiet"});function jM(n,t){let e=we[t.person]?t.person:"",i=Array.isArray(t.proof)?[...new Set(t.proof.filter(s=>typeof s=="string"&&n.seen.has(s)))].slice(0,2):[];if(t.verdict&&e&&i.length===2){let s=ae.judge(e,i);if(s.ok&&ae.ready(n,e,i).ok)return{v:s,person:e,proof:i};if(!s.ok&&ae.tried(n,e,i))return{v:s,person:e,proof:i}}if(n.tries===0&&n.failed.length){let[s,r]=n.failed[n.failed.length-1].split("|"),o=r.split("+");return{v:ae.judge(s,o),person:s,proof:o}}return null}var Gc="";function Mn(){let n=D.ui,t=!!(n&&n.started),e=t?j("hud").offsetHeight:0,i=t&&!j("tabs").hidden?j("tabs").offsetHeight:0,s=document.documentElement.style;s.setProperty("--hud-h",e+"px"),s.setProperty("--tabs-h",i+"px"),g0(e,i);let r=Uh();document.body.classList.toggle("wide",r);let o=!t||r||D.no3d?{top:0,bottom:0,left:0,right:0}:{top:e,bottom:Math.round(i+x0()),left:0,right:0};D.insets=o,s.setProperty("--cap-b",o.bottom+"px"),document.body.classList.toggle("tight",t&&!r&&innerHeight-o.top-o.bottom<170);let a=JSON.stringify(o);a!==Gc&&(Gc=a,se("setInsets",o))}function dd(n,t="nearest"){let e=j("sheetBody");if(!n||!e||!e.contains(n))return;let i=n.getBoundingClientRect(),s=e.getBoundingClientRect();(i.top<s.top||i.bottom>s.bottom)&&n.scrollIntoView({block:t,behavior:yn()?"auto":"smooth"})}function fd(){for(let n of document.querySelectorAll('[data-action="view"]'))n.setAttribute("aria-pressed",String(n.dataset.id===D.ui.view))}function Se(n){let t=D.g,e=D.ui;j("left").textContent=t.budget,j("tries").textContent=t.tries,j("pips").textContent="\u25CF".repeat(t.budget)+"\u25CB".repeat(9-t.budget),j("cnt-scene").textContent=t.seen.size+"/6",j("cnt-people").textContent=t.asked.size+"/4",j("cnt-notes").textContent="\uACE0\uC815 "+t.pins.size,j("cnt-accuse").textContent="\uC99D\uAC70 "+e.proof.length+"/2",j("tab-scene").setAttribute("aria-label","\uD604\uC7A5, \uC99D\uAC70 6\uAC1C \uC911 "+t.seen.size+"\uAC1C \uD655\uC778"),j("tab-people").setAttribute("aria-label","\uBA74\uB2F4, 4\uBA85 \uC911 "+t.asked.size+"\uBA85 \uC9C4\uC220 \uD655\uBCF4"),j("tab-notes").setAttribute("aria-label","\uAE30\uB85D, \uACE0\uC815 "+t.pins.size+"\uAC1C"),j("tab-accuse").setAttribute("aria-label","\uC9C0\uBAA9, \uC99D\uAC70 2\uAC1C \uC911 "+e.proof.length+"\uAC1C \uC120\uD0DD");for(let r of document.querySelectorAll("[role=tab]")){let o=r.dataset.tab===e.tab;r.setAttribute("aria-selected",String(o)),r.tabIndex=o?0:-1}let i=j("stage"),s=!!e.verdict&&(e.verdict.ok||t.tries===0);if(j("tabs").hidden=!!e.verdict,j("hintBtn").hidden=s,j("game").classList.toggle("verdict",!!e.verdict),i.setAttribute("role",e.verdict?"region":"tabpanel"),i.setAttribute("aria-labelledby",e.verdict?"stageTitle":"tab-"+e.tab),i.dataset.view=e.verdict?"verdict":e.board?"board":e.tab,j("notice").textContent=e.notice,i.innerHTML=e.verdict?s0():e.tab==="scene"&&e.board?Gh.board():Gh[e.tab](),e.board==="audio"&&!e.verdict&&requestAnimationFrame(Ac),Nc(),fd(),document.title=(e.verdict?"\uD310\uC815":Oh[e.tab])+" \xB7 02:17, \uB9C8\uC9C0\uB9C9 \uC810\uAC80",se("sync",Ph(t,e)),ks(),Mn(),Bs(),n){let r=null;for(let o of[].concat(n))if(r=document.querySelector(o),r)break;r=r||j("stageTitle"),r&&(r.focus({preventScroll:!0}),dd(r))}}var kc=0,pd=0;function H0(n){document.body.classList.toggle("cctv",n),j("cctv").hidden=!n,j("cctvTime").textContent=n&&D.ui.lit&&D.ui.lit.size?Tc():""}var U0={lock:{locked:"beep"},fog:{"021700":"fog"},drawer:{slide:"slide"},cue:{run:"beep"},audio:{"021703":"click"},poster:{stamp:"stamp"}};function md(n){let t=j("cap3d");t&&(j("cap3dText").textContent=n||"",t.hidden=!n)}function W0(n){let t=D.ui,e=++kc;if(clearTimeout(pd),!$n()){t.playing=null,t.lit=new Set(Ir[n].map(s=>s.cue));return}t.lit=new Set,t.playing=n,q0(!0),We("peek",!0),Mn(),md(""),n==="fog"&&H0(!0);let i=()=>{e===kc&&X0()};pd=setTimeout(i,25e3),se("play","ev:"+n,{onCue:s=>{if(e!==kc||D.ui.board!==n)return;let r=U0[n]&&U0[n][s];r&&Ke(r),Bh(n,s);let o=Ir[n].find(a=>a.cue===s);o&&md(o.t)}}).then(i,i)}function X0(){let n=D.ui,t=n.playing;if(clearTimeout(pd),kc++,n.playing=null,H0(!1),q0(!1),md(""),t&&(We("half",!0),Mn()),t&&n.board===t){for(let e of Ir[t])Bh(t,e.cue);Y0()}}function yd(){D.ui.playing&&se("stop"),X0()}var Bc=0;function q0(n){Bc=Math.max(0,Bc+(n?1:-1)),!n&&!D.ui.playing&&(Bc=0),document.body.classList.toggle("playing",Bc>0),Bs()}function Y0(n){let t=j("boardCtl");if(!t)return;let e=t.contains(document.activeElement);if(t.innerHTML=Vh(),e){let i=n&&t.querySelector(n)||t.querySelector('[data-action="replay"]')||t.querySelector('[data-action="board-close"]');i&&i.focus({preventScroll:!0})}}function O0(n){let t=D.ui;Wi(),t.tab="scene",t.selected="e:"+n,t.board=n,D.sceneTold=!0,We($n()?"peek":"half",!0),Mn(),se("focus","e:"+n),W0(n),Se("#stageTitle"),j("sheetBody").scrollTop=0}function ca(){D.ui.board&&(yd(),D.ui.board=null,D.ui.lit=null)}function Wi(){aa(),D.talkPid&&(se("play","talk:end"),D.talkPid=null)}function ad(n){D.talkPid!==n&&(Wi(),D.talkPid=n),se("play","talk:"+n)}var F0=n=>[{who:"q",text:jo}].concat(Yo(we[n].say).map(t=>({who:n,text:t}))),da=0;function Z0(n){clearTimeout(da),D.ui.auto&&(da=setTimeout(()=>{let t=D.ui;!t.auto||t.story!==n||!t.verdict||!t.verdict.ok||(ua(n+1),Se(n+1<dn.length?ve("story-auto"):"#stageTitle"))},$n()?1500:4e3))}var Zr=()=>!!(D.ui.verdict&&D.ui.verdict.ok);function ua(n){if(!Zr())return;let t=D.ui;t.story=n,clearTimeout(da),n===4&&Ke("fog"),n===5&&Ke("click");let e=se("story",Math.min(n,dn.length));n<dn.length?(De(dn[n][0]+" \uC7AC\uD604.",dn[n][0]+". "+dn[n][1]),e.then(()=>Z0(n))):(t.auto=!1,We("half",!0),De("\uC7AC\uD604\uC744 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4."))}var J0=()=>{if(Ln.quality!=="auto")return Ln.quality;let n=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4,e=!!(navigator.connection&&navigator.connection.saveData);return n<=4||t<=2||e?"low":"high"};function Vc(n){n&&(Hc(),yd(),aa(),fa(),Uc()),D.no3d=n,document.body.classList.toggle("no3d",n),se("pause",n),Gc="",Mn(),Bs(),n||se("view",D.ui.view||"all",{instant:!0}),D.ui.started?Se():$0()}var B0=!1;async function K0(){if(!D.makeWorld)return!1;let n=null;try{n=await D.makeWorld({onPick:nb,onFrame:ib,reducedMotion:yn()})}catch{n=null}if(!n)return D.unavailable=!0,Vc(!0),!1;D.world=n;let t=j("canvas");return t&&!B0&&(B0=!0,t.addEventListener("webglcontextlost",()=>{D.no3d||(Vc(!0),D.ui.started&&De("3D \uD654\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uAC19\uC740 \uC870\uC0AC\uB97C \uC774\uC5B4\uC11C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBA54\uB274\uC758 \u300C3D \uCF1C\uAE30\u300D\uB85C \uB2E4\uC2DC \uCF24 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))})),se("setQuality",J0()),Gc="",Mn(),se("sync",Ph(D.g,D.ui)),D.ui.started?se("view",D.ui.view||"all",{instant:!0}):$0(),!0}var gd=0;function $0(){if(fa(),!$n()||yn()||D.ui.started)return;let n=0;gd=setInterval(()=>{document.hidden||(se("rotate",1,{quiet:!0}),++n>=2&&fa())},9e3)}function fa(){clearInterval(gd),gd=0}function Jr(n){let t=j("menuBody");t.innerHTML=od();let e=n&&t.querySelector(n)||j("menuTitle");e&&e.focus()}var xd=!1;function QM(){j("title").innerHTML=S0(xd)}function j0(){let n=j("installBox");n&&(n.innerHTML=Jh()),j("menuDlg").open&&Jr()}function k0(){let n=D.ui;j("title").hidden=!0,j("game").hidden=!1,j("skip").hidden=!1,fa(),We(n.verdict?"half":n.tab==="notes"?"full":"half",!0),Mn(),se("view",n.view||"all",{resetYaw:!0}),vd()}var ha=0;function z0(){$n()&&(ha=1,j("introSkip").hidden=!1,document.body.classList.add("intro"),se("play","intro").then(()=>{let n=ha===2;ha=0,Q0(),document.body.classList.remove("intro"),Bs();let t=D.ui;!n||!t.started||t.verdict||t.playing||t.board||(t.selected?se("focus",t.selected):t.view!=="all"&&se("view",t.view))}))}function Hc(){if(ha!==1)return;ha=2,document.body.classList.remove("intro");let n=null;try{n=D.world&&D.world.debug?D.world.debug().playing:null}catch{n=null}(n==null||n==="intro")&&se("stop"),Q0()}function Q0(){let n=j("introSkip");if(!n||n.hidden)return;let t=document.activeElement===n;n.hidden=!0,t&&j("stageTitle")&&j("stageTitle").focus({preventScroll:!0})}var Wc=!1;function vd(){if(!(Wc||!D.ui.started))try{history.pushState({g0217:1},""),Wc=!0}catch{}}function tb(){if(jh())return Oc(),!0;let n=document.querySelector("dialog[open]");if(n)return n.close(),!0;let t=D.ui;return t.board&&!t.verdict?(Xi["board-close"](t.board),!0):t.sheet==="full"&&!Uh()&&!D.no3d?(We("half"),!0):oa()?(Xi["talk-all"](),!0):!1}function eb(){Wc=!1,!(!D.ui||!D.ui.started)&&(tb()?vd():zc("<span>\uD55C \uBC88 \uB354 \uB204\uB974\uBA74 \uC571\uC744 \uB2EB\uC2B5\uB2C8\uB2E4.</span>",2500))}var Xi={start(){D.ui.started=!0,k0(),De("\uC870\uC0AC\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+D.g.budget+"\uD68C, \uACB0\uB860 "+D.g.tries+"\uBC88."),Se("#stageTitle");let n=!1;try{n=localStorage.getItem(L0)==="1",localStorage.setItem(L0,"1")}catch{}n?z0():Qh(()=>{j("stageTitle")&&j("stageTitle").focus({preventScroll:!0}),z0()})},"opening-skip"(){Oc()},"opening-replay"(){fi(),Qh(()=>{let n=j("stageTitle");n&&n.focus({preventScroll:!0})})},continue(){D.ui.started=!0,k0();let n=D.ui.verdict;n&&!n.ok&&se("play","verdict:dim"),De(n?"\uD310\uC815 \uD654\uBA74\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4.":"\uC774\uC5B4\uC11C \uC870\uC0AC\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+D.g.budget+"\uD68C, \uACB0\uB860 "+D.g.tries+"\uBC88."),Se("#stageTitle")},"newgame-ask"(){Fc("\uCC98\uC74C\uBD80\uD130 \uC870\uC0AC\uD560\uAE4C\uC694?","<p>\uC800\uC7A5\uB41C \uC870\uC0AC \uAE30\uB85D\uACFC \uACE0\uC815, \uC9C0\uBAA9 \uC120\uD0DD\uC774 \uBAA8\uB450 \uC9C0\uC6CC\uC9C0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC73C\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p>","\uCC98\uC74C\uBD80\uD130 \uC870\uC0AC\uD558\uAE30","newgame")},newgame(){fi(),P0(),Xi.start()},select(n,t){let e=D.ui;if(!e.started||e.verdict)return;let[i,s]=String(n).split(":");if(!(i==="e"?vn[s]:i==="p"&&we[s]))return;ca();let r=i==="e"?"scene":"people";if(e.tab!==r&&(e.tab=r,e.notice=""),e.selected===n&&t!==!0){e.selected=null,i==="p"&&Wi(),Se(ve("select",n));return}i==="p"?D.talkPid!==s&&(Wi(),D.talkPid=s,se("play","talk:"+s)):Wi(),e.selected=n,We("peek",!0),Mn(),se("focus",n),Se(ve("select",n));let o=j("row-"+s);o&&o.scrollIntoView({block:"start"})},inspect(n){let t=ae.inspect(D.g,n);if(t==="blocked")return De("\uC870\uC0AC \uAE30\uD68C\uAC00 \uB0A8\uC544 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),Se(ve("inspect",n));t==="new"&&Ke("spend"),De(Ur(n)+" \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4. "+sa(),fs(n)+" \uD655\uC778. "+vn[n].text+" "+sa()),O0(n)},board(n){D.g.seen.has(n)&&(Ke("free"),De(fs(n)+" \uB2E4\uC2DC \uBCF4\uAE30.",fs(n)+". "+vn[n].text),O0(n))},replay(n){D.ui.board===n&&(se("stop"),W0(n),se("focus","e:"+n),Se(ve("skip-play",n)))},"skip-play"(n){D.ui.board===n&&(yd(),Y0(ve("replay",n)))},"board-close"(n){ca(),We("peek",!0),Se(ve("select","e:"+n));let t=j("row-"+n);t&&t.scrollIntoView({block:"start"})},ask(n){let t=ae.ask(D.g,n);if(t==="blocked")return De("\uC870\uC0AC \uAE30\uD68C\uAC00 \uB0A8\uC544 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),Se(ve("ask",n));t==="new"&&Ke("spend");let e=D.ui;e.tab="people",e.selected="p:"+n,De(we[n].name+"\uC758 \uC9C4\uC220\uC744 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. "+sa(),we[n].name+"\uC758 \uC9C4\uC220. "+we[n].say+" "+sa()),ad(n),We("peek",!0),Mn(),Pc(n,F0(n)),Se([ve("talk-next"),"#pb-"+n])},"talk-next"(){let n=D.talkPid;a0(),n&&o0()===n&&se("play","talk:nod:"+n);let t=document.querySelector(ve("talk-next"));if(t)t.focus();else if(n){let e=j("pb-"+n);e&&(e.focus({preventScroll:!0}),dd(e))}},"talk-all"(){let n=D.talkPid;if(aa(),n){let t=j("pb-"+n);t&&(t.focus({preventScroll:!0}),dd(t,"start"))}},"talk-replay"(n){if(!D.g.asked.has(n))return;Ke("free"),ad(n),We("peek",!0),Mn(),Pc(n,F0(n));let t=document.querySelector(ve("talk-next"));t&&t.focus()},present(n,t){let e=D.g,i=ae.present(e,n,t);if(i==="blocked")return;Ke("free"),i==="new"?De(we[n].name+"\uC5D0\uAC8C "+Ur(t)+" \uC81C\uC2DC\uD588\uC2B5\uB2C8\uB2E4.",we[n].name+"\uC5D0\uAC8C "+fs(t)+" \uC81C\uC2DC. "+we[n].name+": "+ae.reaction(n,t)):De("\uC774\uBBF8 \uC81C\uC2DC\uD55C \uC99D\uAC70\uC785\uB2C8\uB2E4.","\uC774\uBBF8 \uC81C\uC2DC\uD55C \uC99D\uAC70\uC785\uB2C8\uB2E4. "+we[n].name+": "+ae.reaction(n,t)),D.talkPid===n?se("play","talk:nod:"+n):ad(n),Pc(n,Yo(ae.reaction(n,t)).map(r=>({who:n,text:r}))),Se(ve("present",n,t));let s=j("r-"+n+"-"+t);s&&s.scrollIntoView({block:"nearest",behavior:yn()?"auto":"smooth"})},pin(n,t){let e=D.g,i=[...e.pins],s=i.indexOf(n),r=s<0;r?e.pins.add(n):e.pins.delete(n),Ke("free"),De((r?"\uACE0\uC815\uD588\uC2B5\uB2C8\uB2E4: ":"\uACE0\uC815\uC744 \uD480\uC5C8\uC2B5\uB2C8\uB2E4: ")+Ic(n));let o=!r&&t==="top"?i[s+1]||i[s-1]:"";Se(!r&&t==="top"?[o?ve("pin",o,"top"):"#nPin","#nPin"]:[ve("pin",n,t),ve("pin",n)])},"goto-person"(n){let t=D.g,e=D.ui,i=e.proof.find(r=>!t.shown.includes(n+":"+r));e.tab="people",e.selected="p:"+n,D.talkPid!==n&&Wi(),We("half",!0),Mn(),se("focus","p:"+n),De("\uBA74\uB2F4 \uD0ED\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4.","\uBA74\uB2F4 \uD0ED\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4. "+we[n].name+"."),Se([i?ve("present",n,i):"",ve("present",n),ve("ask",n),ve("select","p:"+n)].filter(Boolean));let s=document.activeElement;s&&s!==document.body&&s.scrollIntoView({block:"center"})},"hint-open"(){j("hintLive").textContent="",sd(),fi(),la(j("hintDlg"))},"hint-next"(){let n=D.g,t=ae.takeHint(n);if(sd(),t){ks(),j("hintState").textContent="\uD78C\uD2B8 "+n.hints.length+"\uB2E8\uACC4\uB97C \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4.",j("hintLive").textContent="\uD78C\uD2B8 "+n.hints.length+"\uB2E8\uACC4. "+ae.hintText(t);let e=j("hintList").lastElementChild;e&&e.scrollIntoView({block:"nearest"})}(j("hintNext").hidden?j("hintTitle"):j("hintNext")).focus()},"dialog-close"(){fi()},"toast-close"(){clearTimeout(ud),j("toast").hidden=!0},"intro-skip"(){Hc()},"submit-ask"(){let n=D.g,t=D.ui;if(!ae.ready(n,t.person,t.proof).ok)return De("\uC544\uC9C1 \uC81C\uCD9C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC81C\uCD9C \uC804 \uD655\uC778\uC744 \uC0B4\uD3B4 \uC8FC\uC138\uC694."),Se("#checkTitle");Fc("\uC774 \uACB0\uB860\uC744 \uC81C\uCD9C\uD560\uAE4C\uC694?","<p>\uC9C0\uBAA9: <b>"+xt(we[t.person].name)+"</b></p><p>\uC99D\uAC70: "+xt(t.proof.map(fs).join(", "))+"</p>"+(ae.tried(n,t.person,t.proof)?"<p>\uC55E\uC11C \uBC1B\uC544\uB4E4\uC5EC\uC9C0\uC9C0 \uC54A\uC740 \uACB0\uB860\uACFC \uAC19\uC2B5\uB2C8\uB2E4. \uADF8\uB300\uB85C \uB0B4\uBA74 \uAC19\uC740 \uD310\uC815\uC744 \uBC1B\uACE0 \uAE30\uD68C\uB9CC \uD55C \uBC88 \uC904\uC5B4\uB4ED\uB2C8\uB2E4.</p>":"")+'<p class="muted caption">'+(n.tries>1?"\uB0A8\uC740 \uACB0\uB860 \uAE30\uD68C "+Zo[n.tries]+" \uBC88 \uAC00\uC6B4\uB370 \uD55C \uBC88\uC744 \uC501\uB2C8\uB2E4. \uD2C0\uB824\uB3C4 \uC870\uC0AC \uAE30\uB85D\uC740 \uB0A8\uC2B5\uB2C8\uB2E4.":"\uB9C8\uC9C0\uB9C9 \uACB0\uB860 \uAE30\uD68C\uC785\uB2C8\uB2E4. \uD2C0\uB9AC\uBA74 \uC0AC\uAC74\uC740 \uBBF8\uACB0\uB85C \uB05D\uB098\uACE0, \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD574\uC57C \uD569\uB2C8\uB2E4.")+"</p>","\uC81C\uCD9C\uD558\uAE30","submit")},submit(){fi();let n=D.g,t=D.ui,e=ae.submit(n,t.person,t.proof);if(!e)return Se("#checkTitle");ca(),Wi(),t.verdict=e,t.selected=null,Ke("tense"),setTimeout(()=>Ke(e.ok?"solve":"fail"),800),De(e.ok?"\uC0AC\uAC74 \uD574\uACB0.":n.tries?"\uC785\uC99D \uC2E4\uD328. \uB0A8\uC740 \uACB0\uB860 "+n.tries+"\uBC88.":"\uBBF8\uACB0. \uACB0\uB860 \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4.",e.ok?"\uC0AC\uAC74 \uD574\uACB0. \uACB0\uB860\uC774 \uBC1B\uC544\uB4E4\uC5EC\uC84C\uC2B5\uB2C8\uB2E4.":n.tries?"\uC785\uC99D \uC2E4\uD328. "+Rc():"\uBBF8\uACB0. \uACB0\uB860\uC744 \uB0BC \uAE30\uD68C\uB97C \uBAA8\uB450 \uC37C\uC2B5\uB2C8\uB2E4."),We("half",!0),e.ok?(t.story=0,t.auto=!1,se("play","verdict:win").then(()=>{let i=D.ui;i.verdict&&i.verdict.ok&&i.story===0&&se("story",0)})):se("play","verdict:dim"),Se("#stageTitle"),j("sheetBody").scrollTop=0},resume(){let n=D.ui;n.verdict=null,n.tab="notes",se("play","verdict:clear"),We("full",!0),De("\uC870\uC0AC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4. \uB0A8\uC740 \uACB0\uB860 "+D.g.tries+"\uBC88.","\uC870\uC0AC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4. "+Rc()),Se("#stageTitle"),j("sheetBody").scrollTop=0},"restart-ask"(){let n=D.g,t=D.ui;if(n.budget===9&&n.tries===3&&!t.person&&!t.proof.length&&!t.verdict)return Xi.restart();Fc("\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD560\uAE4C\uC694?","<p>\uC9C0\uAE08\uAE4C\uC9C0\uC758 \uC870\uC0AC \uAE30\uB85D\uACFC \uACE0\uC815, \uC9C0\uBAA9 \uC120\uD0DD\uC774 \uBAA8\uB450 \uC9C0\uC6CC\uC9C0\uACE0 \uC870\uC0AC \uAE30\uD68C \uC544\uD649 \uBC88\uACFC \uACB0\uB860 \uAE30\uD68C \uC138 \uBC88\uC774 \uB3CC\uC544\uC635\uB2C8\uB2E4. \uC5F0 \uD78C\uD2B8\uB294 \uB0A8\uC2B5\uB2C8\uB2E4.</p>","\uB2E4\uC2DC \uC870\uC0AC\uD558\uAE30","restart")},restart(){fi(),ca(),Wi(),clearTimeout(da),P0(),se("play","verdict:clear"),se("view","all"),We("half",!0),De("\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC870\uC0AC\uD569\uB2C8\uB2E4. \uB0A8\uC740 \uC870\uC0AC "+D.g.budget+"\uD68C, \uACB0\uB860 "+D.g.tries+"\uBC88."),Se("#stageTitle"),j("sheetBody").scrollTop=0},"story-next"(){if(!Zr())return;let n=D.ui.story==null?0:D.ui.story;ua(n+1),Se(n+1<dn.length?ve("story-next"):"#stageTitle")},"story-prev"(){if(!Zr())return;let n=D.ui.story||0;n<=0||(D.ui.auto=!1,ua(n-1),Se(ve("story-prev")))},"story-auto"(){if(!Zr())return;let n=D.ui;n.auto=!n.auto,n.auto?Z0(n.story||0):clearTimeout(da),De(n.auto?"\uC7AC\uD604\uC744 \uC790\uB3D9\uC73C\uB85C \uB118\uAE41\uB2C8\uB2E4.":"\uC790\uB3D9 \uC7AC\uC0DD\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4."),Se(ve("story-auto"))},"story-skip"(){Zr()&&(D.ui.auto=!1,ua(dn.length),Se("#stageTitle"))},"story-again"(){Zr()&&(D.ui.auto=!1,We("half",!0),ua(0),Se(ve("story-next")),j("sheetBody").scrollTop=0)},sheet(){m0()||_0()},view(n){_d.some(([t])=>t===n)&&(D.ui.view=n,se("view",n),fd(),ks())},rotate(n){se("rotate",n==="-1"?-1:1)},home(){D.ui.view="all",se("view","all"),fd(),ks()},"menu-open"(){j("menuBody").innerHTML=od(),fi(),la(j("menuDlg"))},"rules-open"(){rd("\uC870\uC0AC \uBC29\uBC95",R0())},install(){if(hs().mode==="prompt"){fi(),wm().then(n=>{n==="accepted"&&D.ui.started&&De("\uC571\uC73C\uB85C \uC124\uCE58\uD588\uC2B5\uB2C8\uB2E4. \uD648 \uD654\uBA74\uC774\uB098 \uC571 \uBAA9\uB85D\uC5D0\uC11C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),j0()});return}rd("\uC571\uC73C\uB85C \uC124\uCE58",I0())},"set-sound"(){Fm(!ea()),Jr(ve("set-sound"))},"set-motion"(){Ln.motion=!Ln.motion,na(),document.body.classList.toggle("calm",yn()),se("setReducedMotion",yn()),yn()&&fa(),Jr(ve("set-motion"))},"set-quality"(n){D.no3d||!KM[n]||(Ln.quality=n,na(),se("setQuality",J0()),Jr(ve("set-quality",n)))},async"set-3d"(){if(D.no3d){Ln.off3d=!1,na();let n=!1;try{n=!!(D.world&&typeof D.world.isLost=="function"&&D.world.isLost())}catch{n=!0}if(n){try{D.world.dispose()}catch{}D.world=null}if(!D.world&&!await K0()){let e="3D \uD654\uBA74\uC744 \uB2E4\uC2DC \uB9CC\uB4E4\uC9C0 \uBABB\uD574 \uBAA9\uB85D\uC73C\uB85C \uBCF4\uC5EC \uB4DC\uB9BD\uB2C8\uB2E4. \uC870\uC0AC \uB0B4\uC6A9\uC740 \uAC19\uC2B5\uB2C8\uB2E4.";D.ui.started?De(e):zc("<span>"+e+"</span>"+hd(),6e3),Jr();return}Vc(!1)}else Ln.off3d=!0,na(),Vc(!0);Jr(ve("set-3d"))},reload(){ks(),location.reload()}};function G0(n,t){let e=D.ui;!e.started||e.verdict||!Dr.includes(n)||(ca(),n!=="people"&&Wi(),e.tab==="scene"&&n!=="scene"&&(D.sceneTold=!0),e.tab=n,e.notice="",We(n==="notes"?"full":"half",!0),n==="accuse"&&(e.view="lobby",Mn(),se("view","lobby")),Se(t?"#tab-"+n:"#stageTitle"),j("sheetBody").scrollTop=0)}function nb(n){let t=D.ui;if(!t||!t.started||t.verdict||!n||document.querySelector("dialog[open]"))return;let[e,i]=String(n).split(":");if(e==="p"&&we[i])return t.tab==="accuse"?(t.person=i,t.notice="",De("\uC9C0\uBAA9\uD560 \uC0AC\uB78C\uC744 \uACE8\uB790\uC2B5\uB2C8\uB2E4: "+we[i].name+"."),Se('input[name="suspect"][value="'+i+'"]')):Xi.select("p:"+i,!0);e==="e"&&vn[i]&&Xi.select("e:"+i,!0)}function ib(){Bs()}function tg({root:n,restored:t,makeWorld:e}){if(D.makeWorld=e||null,D.g=ae.fresh(),D.ui=V0(!1),t&&t.g){let i=t.g,s=t.extra||{};D.g=i,xd=i.budget<9||i.tries<3||i.pins.size>0,Dr.includes(s.tab)&&(D.ui.tab=s.tab),typeof s.person=="string"&&we[s.person]&&(D.ui.person=s.person),Array.isArray(s.proof)&&(D.ui.proof=[...new Set(s.proof.filter(o=>typeof o=="string"&&i.seen.has(o)))].slice(0,2)),_d.some(([o])=>o===s.view)&&(D.ui.view=s.view);let r=jM(i,s);r&&(D.ui.verdict=r.v,D.ui.person=r.person,D.ui.proof=r.proof,r.v.ok&&(D.ui.story=dn.length),xd=!0)}n.innerHTML=$M(),document.body.classList.toggle("calm",yn()),QM(),p0(()=>{Mn()}),We("half",!0),document.addEventListener("pointerdown",()=>Hc(),{capture:!0,passive:!0}),document.addEventListener("click",i=>{Hc(),D.ui.started&&!Wc&&vd();let s=i.target.closest("dialog");if(s&&i.target===s)return s.close();let r=i.target.closest("[data-act3d]");if(r){Ke("tick");let c=Xi[r.dataset.act3d];c&&c(r.dataset.id);return}if(i.target.closest('input[aria-disabled="true"]'))return i.preventDefault(),De("\uC99D\uAC70\uB294 \uB450 \uAC1C\uAE4C\uC9C0\uC785\uB2C8\uB2E4. \uD558\uB098\uB97C \uD574\uC81C\uD55C \uB4A4 \uACE0\uB974\uC138\uC694.");let a=i.target.closest("[data-action],[data-tab]");if(!a||a.id==="askYes"&&performance.now()-E0()<400)return;if(Ke("tick"),a.dataset.tab)return G0(a.dataset.tab,!0);let l=Xi[a.dataset.action];l&&l(a.dataset.id,a.dataset.arg)}),document.addEventListener("change",i=>{let s=i.target,r=D.ui;if(r.started){if(s.name==="suspect")r.person=s.value,r.notice="",Se('input[name="suspect"][value="'+s.value+'"]');else if(s.name==="proof"){s.checked?r.proof.length<2&&r.proof.push(s.value):r.proof=r.proof.filter(a=>a!==s.value);let o=r.proof.length;De(o===2?"\uC99D\uAC70 \uB450 \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":o?"\uC99D\uAC70 \uD55C \uAC1C\uB97C \uACE8\uB790\uC2B5\uB2C8\uB2E4.":"\uACE0\uB978 \uC99D\uAC70\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),Se('input[name="proof"][value="'+s.value+'"]')}}}),j("tabs").addEventListener("keydown",i=>{let s=Dr.indexOf(D.ui.tab),r={ArrowRight:(s+1)%4,ArrowLeft:(s+3)%4,Home:0,End:3}[i.key];r!==void 0&&(i.preventDefault(),G0(Dr[r],!0))}),j("bubble").addEventListener("click",()=>{Ke("tick"),l0()||Xi["talk-next"]()}),j("opening").addEventListener("click",i=>{i.target.closest(".opSkip")||b0()}),document.addEventListener("keydown",i=>{jh()&&i.key==="Escape"&&(i.preventDefault(),Oc())});for(let i of document.querySelectorAll("dialog"))i.addEventListener("close",()=>{i.id==="hintDlg"&&D.ui.started&&D.ui.tab==="notes"&&!D.ui.verdict&&Se(),C0(()=>D.ui.started?j("hintBtn").hidden?j("stageTitle"):j("hintBtn"):j("titleH"))});if(window.ResizeObserver){let i=new ResizeObserver(()=>Mn());i.observe(j("hud")),i.observe(j("tabs"))}return addEventListener("resize",()=>{Mn(),Bs(),D.ui.board==="audio"&&Ac()}),document.addEventListener("visibilitychange",()=>{document.hidden&&ks()}),addEventListener("pagehide",ks),addEventListener("popstate",eb),Am(i=>{ld||i&&cd&&i<cd||(ld=!0,zc("<span>\uB2E4\uB978 \uCC3D\uC5D0\uC11C \uC774 \uC870\uC0AC\uB97C \uB354 \uCD5C\uADFC\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uCC3D\uC758 \uC9C4\uD589\uC740 \uC774\uC81C \uC790\uB3D9 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span>"+Vt("reload","","\uB2E4\uC2DC \uC5F4\uAE30")+hd()))}),Mm(j0),zm(),Object.defineProperty(window,"__app",{configurable:!0,value:Object.freeze({get g(){return D.g},get ui(){return D.ui},get world(){return D.world}})}),Ln.off3d?(D.no3d=!0,document.body.classList.add("no3d")):K0(),Mn(),{updateReady(){zc("<span>\uC0C8 \uD310\uC774 \uC900\uBE44\uB410\uC2B5\uB2C8\uB2E4</span>"+Vt("reload","","\uB2E4\uC2DC \uC5F4\uAE30")+hd())}}}var eg=document.getElementById("canvas"),sb=Cm({Game:ae,EVIDENCE:Rn,PEOPLE:Je,BUDGET:9,TRIES:3,HINTS:yc});async function rb(n){if(!eg||!Rm())return null;try{return await Sm(eg,n)}catch(t){return console.warn("3D \uD654\uBA74\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",t),null}}var ob=tg({root:document.getElementById("ui"),restored:sb,makeWorld:rb});Tm({onUpdate:()=>ob.updateReady()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
