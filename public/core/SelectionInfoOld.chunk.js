/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[11],{360:function(ia,da,h){h.r(da);var ca=h(369),ba=h(90),ha=h(30),ea=h(55);ia=function(){function h(){this.nb=this.ce=this.Cb=this.Qb=null;this.re=!1}h.prototype.clear=function(){Object(ha.b)(this.Qb);this.Cb="";Object(ha.b)(this.ce);Object(ha.b)(this.nb);this.re=!1};h.prototype.tc=function(){this.Qb=[];this.ce=[];this.nb=[];this.re=!1};h.prototype.Zu=function(h){for(var r="",f=0,x,n,e;f<h.length;)x=h.charCodeAt(f),9==x?(r+=String.fromCharCode(10),
f++):128>x?(r+=String.fromCharCode(x),f++):191<x&&224>x?(n=h.charCodeAt(f+1),r+=String.fromCharCode((x&31)<<6|n&63),f+=2):(n=h.charCodeAt(f+1),e=h.charCodeAt(f+2),r+=String.fromCharCode((x&15)<<12|(n&63)<<6|e&63),f+=3);return r};h.prototype.initData=function(h){this.Qb=[];this.ce=[];this.nb=[];this.re=!1;try{var r=new ea.a(h);this.Cb="";r.Ca();if(!r.advance())return;var f=r.current.textContent;this.Cb=f=this.Zu(f);Object(ha.b)(this.ce);r.advance();f=r.current.textContent;for(var x=f.split(","),n=
Object(ba.a)(x);n.$j();){var e=n.current;try{var w=parseInt(e.trim());this.ce.push(w)}catch(oa){}}Object(ha.b)(this.Qb);r.advance();f=r.current.textContent;x=f.split(",");for(var y=Object(ba.a)(x);y.$j();){e=y.current;try{w=parseFloat(e.trim()),this.Qb.push(w)}catch(oa){}}Object(ha.b)(this.nb);r.advance();f=r.current.textContent;x=f.split(",");h=[];r=[];f=0;for(var z=Object(ba.a)(x);z.$j();){e=z.current;switch(e){case "Q":f=1;break;case "R":f=2;break;case "S":f=3;break;default:f=0}if(f)h.push(0),
r.push(f);else try{w=parseFloat(e.trim()),h.push(w),r.push(f)}catch(oa){return}}f=0;var ca=h.length;for(z=e=x=0;z<ca;){var da=r[z];if(0<da)f=da,++z,3===f&&(x=h[z],e=h[z+1],z+=2);else if(1===f)for(w=0;8>w;++w)this.nb.push(h[z++]);else if(2===f){var ia=h[z++];var ja=h[z++];var sa=h[z++];var wa=h[z++];this.nb.push(ia);this.nb.push(ja);this.nb.push(sa);this.nb.push(ja);this.nb.push(sa);this.nb.push(wa);this.nb.push(ia);this.nb.push(wa)}else 3===f&&(ia=h[z++],ja=x,sa=h[z++],wa=e,this.nb.push(ia),this.nb.push(ja),
this.nb.push(sa),this.nb.push(ja),this.nb.push(sa),this.nb.push(wa),this.nb.push(ia),this.nb.push(wa))}}catch(oa){return}this.Cb.length&&this.Cb.length===this.ce.length&&8*this.Cb.length===this.nb.length&&(this.re=!0)};h.prototype.ready=function(){return this.re};h.prototype.ks=function(){var h=new ca.a;if(!this.Qb.length)return h.$f(this.Qb,-1,this.Cb,this.nb,0),h;h.$f(this.Qb,1,this.Cb,this.nb,1);return h};h.prototype.Le=function(){return this.nb};h.prototype.getData=function(){return{m_Struct:this.Qb,
m_Str:this.Cb,m_Offsets:this.ce,m_Quads:this.nb,m_Ready:this.re}};return h}();da["default"]=ia},369:function(ia,da,h){var ca=h(51),ba=h(199),ha=h(382);ia=function(){function h(){this.Dd=0;this.eb=this.wa=this.Ae=null;this.mc=0;this.Cd=null}h.prototype.tc=function(){this.Dd=-1;this.mc=0;this.Cd=[]};h.prototype.$f=function(h,x,r,f,aa){this.Dd=x;this.mc=aa;this.Cd=[];this.Ae=h;this.wa=r;this.eb=f};h.prototype.Ia=function(h){return this.Dd===h.Dd};h.prototype.ri=function(){return Math.abs(this.Ae[this.Dd])};
h.prototype.Yj=function(){return 0<this.Ae[this.Dd]};h.prototype.Cc=function(){var h=this.Yj()?6:10,x=new ha.a;x.$f(this.Ae,this.Dd+h,this.Dd,this.wa,this.eb,1);return x};h.prototype.jL=function(h){if(0>h||h>=this.ri()){var x=new ha.a;x.$f(this.Ae,-1,-1,this.wa,this.eb,0);return x}var r=this.Yj()?6:10,f=this.Yj()?5:11;x=new ha.a;x.$f(this.Ae,this.Dd+r+f*h,this.Dd,this.wa,this.eb,1+h);return x};h.prototype.Bf=function(){var z=this.Dd+parseInt(this.Ae[this.Dd+1]);if(z>=this.Ae.length){var x=new h;x.$f(this.Ae,
-1,this.wa,this.eb,0);return x}x=new h;x.$f(this.Ae,z,this.wa,this.eb,this.mc+1);return x};h.prototype.bc=function(h){if(this.Yj())h.fa=this.Ae[this.Dd+2+0],h.da=this.Ae[this.Dd+2+1],h.ga=this.Ae[this.Dd+2+2],h.ea=this.Ae[this.Dd+2+3];else{for(var x=1.79769E308,r=ca.a.MIN,f=1.79769E308,z=ca.a.MIN,n=0;4>n;++n){var e=this.Ae[this.Dd+2+2*n],w=this.Ae[this.Dd+2+2*n+1];x=Math.min(x,e);r=Math.max(r,e);f=Math.min(f,w);z=Math.max(z,w)}h.fa=x;h.da=f;h.ga=r;h.ea=z}};h.prototype.ni=function(){if(this.Cd.length)return this.Cd[0];
var h=new ba.a,x=new ba.a,r=new ha.a;r.tc();var f=this.Cc(),aa=new ha.a;aa.tc();for(var n=this.Cc();!n.Ia(r);n=n.bf())aa=n;r=Array(8);n=Array(8);f.oe(0,r);h.x=(r[0]+r[2]+r[4]+r[6])/4;h.y=(r[1]+r[3]+r[5]+r[7])/4;aa.oe(aa.Wc()-1,n);x.x=(n[0]+n[2]+n[4]+n[6])/4;x.y=(n[1]+n[3]+n[5]+n[7])/4;.01>Math.abs(h.x-x.x)&&.01>Math.abs(h.y-x.y)&&this.Cd.push(0);h=Math.atan2(x.y-h.y,x.x-h.x);h*=180/3.1415926;0>h&&(h+=360);this.Cd.push(h);return 0};return h}();da.a=ia},382:function(ia,da,h){var ca=h(369),ba=h(109),
ha=h(51);ia=function(){function h(){this.ij=this.hd=0;this.eb=this.wa=this.Qb=null;this.mc=0}h.prototype.tc=function(){this.ij=this.hd=-1;this.mc=0};h.prototype.$f=function(h,x,r,f,aa,n){this.hd=x;this.ij=r;this.Qb=h;this.wa=f;this.eb=aa;this.mc=n};h.prototype.Ia=function(h){return this.hd===h.hd};h.prototype.Wc=function(){return parseInt(this.Qb[this.hd])};h.prototype.oh=function(){return parseInt(this.Qb[this.hd+2])};h.prototype.Hb=function(){return parseInt(this.Qb[this.hd+1])};h.prototype.Yj=
function(){return 0<this.Qb[this.ij]};h.prototype.hY=function(){return Math.abs(this.Qb[this.ij])};h.prototype.bf=function(){var z=this.Yj(),x=z?5:11;if(this.hd>=this.ij+(z?6:10)+(this.hY()-1)*x)return z=new h,z.$f(this.Qb,-1,-1,this.wa,this.eb,0),z;z=new h;z.$f(this.Qb,this.hd+x,this.ij,this.wa,this.eb,this.mc+1);return z};h.prototype.IX=function(h){var x=this.Wc();return 0>h||h>=x?-1:parseInt(this.Qb[this.hd+1])+h};h.prototype.oe=function(h,x){h=this.IX(h);if(!(0>h)){var r=new ca.a;r.$f(this.Qb,
this.ij,this.wa,this.eb,0);if(r.Yj()){var f=new ba.a;r.bc(f);r=f.da<f.ea?f.da:f.ea;f=f.da>f.ea?f.da:f.ea;h*=8;x[0]=this.eb[h];x[1]=r;x[2]=this.eb[h+2];x[3]=x[1];x[4]=this.eb[h+4];x[5]=f;x[6]=this.eb[h+6];x[7]=x[5]}else for(h*=8,r=0;8>r;++r)x[r]=this.eb[h+r]}};h.prototype.Kd=function(h){var x=new ca.a;x.$f(this.Qb,this.ij,this.wa,this.eb,0);if(x.Yj()){var r=this.Qb[this.hd+3],f=this.Qb[this.hd+4];if(r>f){var z=r;r=f;f=z}z=new ba.a;x.bc(z);x=z.da<z.ea?z.da:z.ea;z=z.da>z.ea?z.da:z.ea;h[0]=r;h[1]=x;h[2]=
f;h[3]=x;h[4]=f;h[5]=z;h[6]=r;h[7]=z}else for(r=this.hd+3,f=0;8>f;++f)h[f]=this.Qb[r+f]};h.prototype.bc=function(h){var x=new ca.a;x.$f(this.Qb,this.ij,this.wa,this.eb,0);if(x.Yj()){var r=this.Qb[this.hd+3],f=this.Qb[this.hd+4];if(r>f){var z=r;r=f;f=z}z=new ba.a;x.bc(z);x=z.da<z.ea?z.da:z.ea;z=z.da>z.ea?z.da:z.ea;h[0]=r;h[1]=x;h[2]=f;h[3]=z}else{r=1.79769E308;f=ha.a.MIN;x=1.79769E308;z=ha.a.MIN;for(var n=this.hd+3,e=0;4>e;++e){var w=this.Qb[n+2*e],y=this.Qb[n+2*e+1];r=Math.min(r,w);f=Math.max(f,w);
x=Math.min(x,y);z=Math.max(z,y)}h[0]=r;h[1]=x;h[2]=f;h[3]=z}};return h}();da.a=ia}}]);}).call(this || window)
