(()=>{"use strict";var o,e;console.log((o=[1,2,3],e=[4,5,6],[...o,...e])),console.log(function(){const o=new Set([1,2,3,4,3,4,5,6]);return Array.from(o)}());let[l,n,t=100]=[45.123,39.987,120];console.log(l);let{name:s,age:c,address:{city:a,street:g}}={name:"Іван",age:25,address:{city:"Львів",street:"Шевченка 10"}};console.log(a),console.log(function(){let o="JS is cool, JSrocks, JSfan, JAVA".matchAll(/JS/g),e=[];for(const l of o)e.push(l[0]);return e}());console.log(["Hi"]);const i={email:!0};!function(){let o=i;void 0===o?console.log("Немає даних"):console.log(o)}();const r={theme:"",language:"uk"};r.theme||="light",r.language&&="uk"!==r.language?r.language:"Default",r.fontSize??=16,console.log(r);const u=[10,20,30,40,50];console.log(u.at(-1)),console.log(u.at(-2)),console.log(u.at(-3));const f={[Symbol.for("name")]:"user_id",name:"Анна",age:23,city:"Київ"};console.log(f[Symbol.for("name")]),console.log(f.name);const m=function*(){yield 1,yield 2,yield 3,yield 4,yield 5}();for(const o of m)console.log(o)})();