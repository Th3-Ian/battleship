(()=>{var t={705:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},476:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},619:(t,e,n)=>{var r=n(403);t.exports={buildBoard:function(){return{columns:10,rows:10,squareArr:[],missedArr:[],placedShips:[],hitNum:0,displayBoard:function(){for(var t=0;t<this.columns*this.rows;t++){var e=Math.floor(t/10),n=t+1-10*e;this.squareArr.push(["a","b","c","d","e","f","g","h","i","j"][e]+n)}return this.squareArr},isEmpty:function(){return!this.squareArr.includes("x")},placeShip:function(t,e){var n=this.squareArr.indexOf(e),o=this.squareArr[n];if(!0===t.horizontal){var a=n+t.length-1,s=this.squareArr[a];try{for(i=0;i<t.length;i++){if(o.charAt(0)!=s.charAt(0))throw new Error("Cannot place, ship is out of bounds");if("O"===this.squareArr[n+i])throw new Error("Error: another ship is at this location");this.placedShips.push(t),t.coordinates.push(n+i),this.squareArr.splice(n+i,1,"O")}}catch(t){return r.openModal("Error",t),void console.error(t)}}else if(!1===t.horizontal)try{var A=this.squareArr[n+10*t.length-10];for(i=0;i<t.length;i++){if(void 0===A)throw new Error("Cannot place, ship is out of bounds");if(n<0)throw new Error("Error: another ship is at this location");if("O"===this.squareArr[n+10*i])throw new Error("Error: another ship is at this location")}for(i=0;i<t.length;i++)this.placedShips.push(t),t.coordinates.push(n+10*i),this.squareArr.splice(n+10*i,1,"O")}catch(t){return r.openModal("ERROR!",t),void console.error(t)}},recieveAttack:function(t){t-=1;var e=this.placedShips;try{if("O"===this.squareArr[t]){console.log("HIT!"),this.hitNum++;for(var n=0;n<e.length;n++)for(var o=0;o<e[n].coordinates.length;o++)e[o].coordinates[o]===t&&(e[n].hit(o),e[n].isSunk());this.squareArr.splice(t,1,"X")}else{if("X"===this.squareArr[t])throw new Error("Error: Already attacked this location");console.log("MISS!"),this.missedArr.push(t),console.log("This is the board missedArr ".concat(this.missedArr)),this.squareArr.splice(t,1,"X")}}catch(t){return console.log(t),void r.openModal("ERROR!",t)}},gameLoss:function(){for(var t=this.placedShips,e=0;e<t.length&&!1!==t[e].sunk;e++)return console.log("Game over"),void r.openModal("GAME OVER","You lost :(")},randPlace:function(t,e,n){var o=this.squareArr.indexOf(e),a=this.squareArr[o],s=n.randomLoc();if(!0===t.horizontal){var A=o+t.length-1,c=this.squareArr[A];try{for(i=0;i<t.length;i++){if(a.charAt(0)!=c.charAt(0))throw new Error("Cannot place, ship is out of bounds");if("O"===this.squareArr[o+i])throw new Error("Error: another ship is at this location");this.placedShips.push(t),t.coordinates.push(o+i),this.squareArr.splice(o+i,1,"O")}}catch(e){console.log("this is the random number horizontal "+s),console.log("this ship will be called again "+t),r.openModal("Error",e),console.error(e),this.randPlace(t,s,n)}}else if(!1===t.horizontal)try{var l=this.squareArr[o+10*t.length-10];for(i=0;i<t.length;i++){if(void 0===l)throw new Error("Cannot place, ship is out of bounds");if(o<0)throw console.log("BUG FIXED"),new Error("Error: another ship is at this location");if("O"===this.squareArr[o+10*i])throw console.log("ANOTHER SHIP AT LOCATION ERROR CAUGHT"),new Error("Error: another ship is at this location")}for(i=0;i<t.length;i++)this.placedShips.push(t),t.coordinates.push(o+10*i),this.squareArr.splice(o+10*i,1,"O")}catch(e){console.log("this is the random number verticle "+s),console.log("this ship will be called again "+t),r.openModal("ERROR!",e),console.error(e),this.randPlace(t,s,n)}}}}}},403:(t,e,n)=>{"use strict";n.r(e),n.d(e,{addNewGameBtn:()=>l,closeModal:()=>c,openModal:()=>A});var r=document.querySelector(".modal"),o=document.querySelector("#overlay"),a=document.querySelector("#newGame"),i=r.querySelector(".title"),s=r.querySelector(".modal-body");function A(t,e){r.classList.add("active"),o.classList.add("active"),i.textContent=t,e&&(s.textContent=e)}function c(){i.textContent="",s.textContent="",r.classList.remove("active"),o.classList.remove("active"),a.classList.remove("active")}function l(){a.classList.add("active")}},285:t=>{t.exports={Player:function(t,e,n){return{name:t,active:!1,attacks:[],gameBoard:e,ships:n,updateTurn:function(){this.active=!this.active},randomNum:function(){var t=Math.floor(100*Math.random());if(!1===this.attacks.includes(t))return t;this.randomNum()},randomLoc:function(){var t=Math.floor(100*Math.random());if(t<10)return"a"+t;var e=(t=t.toString().split(""))[0],n=t[1];return n=parseInt(n)+1,(e=["a","b","c","d","e","f","g","h","i","j"][e])+n},randomBool:function(){return Math.random()<.5}}}}},79:t=>{t.exports={buildShip:function(t,e){return{name:t,length:e,directions:[[],[]],arr:new Array(e).fill("O"),horizontal:!0,sunk:!1,coordinates:[],getShipLength:function(){return"This ship is ".concat(this.length)},getShipDirections:function(){for(var t=0;t<this.arr.length;t++)0!=t?(this.arr[0].push(t),this.arr[1].push(10*t)):(this.arr[0].push(t),this.arr[1].push(t))},hit:function(t){var e=t-1;if(e<this.arr.length)return this.arr.splice(e,1,"X"),console.log(this.arr),this.arr;throw Error("Hit misses")},isSunk:function(){return this.arr.includes("O")?this.sunk=!1:(console.log("".concat(this.name," has been sunk!")),this.sunk=!0)},toggleDirection:function(){this.horizontal=!this.horizontal}}}}},144:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(476),o=n.n(r),a=n(705),i=n.n(a)()(o());i.push([t.id,'*{margin:0;padding:0;font-family:Verdana,Geneva,Tahoma,sans-serif;letter-spacing:2}body{background-color:blue}div{display:block;background-color:wheat}section{display:block;background-color:orange;margin:12px}.main-body{width:90%;display:flex;flex-wrap:wrap;justify-content:center;margin:auto}section{width:600px;min-height:400px}table{width:100%;padding:8px}td,th{border:3px solid #000;width:8.6%;position:relative;text-align:center}td:after{content:"";display:block;margin-top:26px}td,th{width:4rem;height:3.5rem;border:1px solid #ccc;text-align:center}th{background:#add8e6;border-color:#fff}.player-fleet{width:80%;display:flex;flex-wrap:wrap;margin:auto;padding:16px}.boats{display:flex;flex-grow:4;justify-content:space-between;margin:16px}.game-controls{flex-grow:1}.ship{border:3px solid purple;background-color:red;width:3rem;height:2.5rem}.ship-container{display:flex}.modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%) scale(0);transition:200ms ease-in-out;border:2px solid #000;border-radius:12px;z-index:10;background-color:#fff;width:500px;max-width:80%}.modal.active{transform:translate(-50%, -50%) scale(1)}.modal-header{padding:10px 15px;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #000}.modal-header .title{font-size:1.25rem;font-weight:bold}.modal-header .close-modal{cursor:pointer;border:none;outline:none;background:none;font-size:1.25rem;font-weight:bold}.modal-body{padding:10px 15px}#overlay{position:fixed;opacity:0;top:0;left:0;right:0;bottom:0;transition:200ms ease-in-out;background-color:rbga(0, 0, 0, 0.5);pointer-events:none}#overlay.active{opacity:70%;pointer-events:all}#newGame{opacity:0}#newGame.active{opacity:1}',"",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AAEA,EACC,QAAA,CACA,SAAA,CACA,4CAAA,CACA,gBAAA,CAGD,KACE,qBAVG,CAaL,IACC,aAAA,CACA,sBAAA,CAGD,QACC,aAAA,CACA,uBAAA,CACA,WAAA,CAGD,WACC,SAAA,CACA,YAAA,CACA,cAAA,CACA,sBAAA,CACA,WAAA,CAGD,QACC,WAAA,CACA,gBAAA,CAGD,MACC,UAAA,CACA,WAAA,CAGD,MACC,qBAAA,CACC,UAAA,CACA,iBAAA,CACD,iBAAA,CAGD,SACE,UAAA,CACA,aAAA,CACD,eAAA,CAED,MACE,UAAA,CACA,aAAA,CACA,qBAAA,CACA,iBAAA,CAEF,GACE,kBAAA,CACA,iBAAA,CAGF,cACC,SAAA,CACA,YAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CAGD,OACC,YAAA,CACA,WAAA,CACA,6BAAA,CACA,WAAA,CAGD,eACC,WAAA,CAGD,MACC,uBAAA,CACA,oBAAA,CACA,UAAA,CACA,aAAA,CAGD,gBACC,YAAA,CAID,OACC,cAAA,CACA,OAAA,CACA,QAAA,CACA,wCAAA,CACA,4BAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,qBAAA,CACA,WAAA,CACA,aAAA,CAGD,cACC,wCAAA,CAGD,cACC,iBAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,4BAAA,CAGD,qBACC,iBAAA,CACA,gBAAA,CAGD,2BACC,cAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CAGD,YACC,iBAAA,CAGD,SACC,cAAA,CACA,SAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,4BAAA,CACA,mCAAA,CACA,mBAAA,CAGD,gBACC,WAAA,CACA,kBAAA,CAGD,SACC,SAAA,CAGD,gBACC,SAAA",sourcesContent:["$bg: blue;\n\n*{\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: Verdana, Geneva, Tahoma, sans-serif;\n\tletter-spacing: 2;\n}\n\nbody {\n  background-color: $bg;\n}\n\ndiv {\n\tdisplay: block;\n\tbackground-color: wheat;\n}\n\nsection {\n\tdisplay: block;\n\tbackground-color: orange;\n\tmargin: 12px;\n}\n\n.main-body {\n\twidth: 90%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tmargin: auto;\n}\n\nsection {\n\twidth: 600px;\n\tmin-height: 400px;\n}\n\ntable {\n\twidth: 100%;\n\tpadding: 8px;\n}\n\ntd, th {\n\tborder: 3px solid black;\n  width: 8.6%;\n  position: relative;\n\ttext-align: center;\n\n}\ntd:after {\n  content: '';\n  display: block;\n\tmargin-top: 26px;\n}\ntd, th {\n  width: 4rem;\n  height: 3.5rem;\n  border: 1px solid #ccc;\n  text-align: center;\n}\nth {\n  background: lightblue;\n  border-color: white;\n}\n\n.player-fleet {\n\twidth: 80%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin: auto;\n\tpadding: 16px;\n}\n\n.boats {\n\tdisplay: flex;\n\tflex-grow: 4;\n\tjustify-content: space-between;\n\tmargin: 16px;\n}\n\n.game-controls {\n\tflex-grow: 1;\n}\n\n.ship {\n\tborder: 3px solid purple;\n\tbackground-color: red;\n\twidth: 3rem;\n\theight: 2.5rem;\n}\n\n.ship-container {\n\tdisplay: flex;\n}\n\n/* MODAL POP UP */\n.modal {\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%) scale(0);\n\ttransition: 200ms ease-in-out;\n\tborder: 2px solid black;\n\tborder-radius: 12px;\n\tz-index: 10;\n\tbackground-color: white;\n\twidth: 500px;\n\tmax-width: 80%;\n}\n\n.modal.active {\n\ttransform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header {\n\tpadding: 10px 15px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-bottom: 2px solid black;\n}\n\n.modal-header .title {\n\tfont-size: 1.25rem;\n\tfont-weight: bold;\n}\n\n.modal-header .close-modal {\n\tcursor: pointer;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tfont-size: 1.25rem;\n\tfont-weight: bold;\n}\n\n.modal-body {\n\tpadding: 10px 15px;\n}\n\n#overlay {\n\tposition: fixed;\n\topacity: 0;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttransition: 200ms ease-in-out;\n\tbackground-color: rbga(0, 0, 0, .5) ;\n\tpointer-events: none;\n}\n\n#overlay.active {\n\topacity: 70%;\n\tpointer-events: all;\n}\n\n#newGame {\n\topacity: 0;\n}\n\n#newGame.active {\n\topacity: 1;\n}"],sourceRoot:""}]);const s=i},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var A=t[s],c=r.base?A[0]+r.base:A[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var u=n(d),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var h=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var A=r(t,o),c=0;c<a.length;c++){var l=n(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=A}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),A=n.n(s),c=n(216),l=n.n(c),d=n(589),u=n.n(d),p=n(144),h={};h.styleTagTransform=u(),h.setAttributes=A(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var C=n(619),f=n(79),m=n(285),g=n(403),v=[["Carrier",5],["Battleship",4],["Cruiser",3],["Submarine",3],["Destroyer",2]],y=["Ian","Computer"];function b(){for(var t=[],e=0;e<v.length;e++){var n=f.buildShip(v[e][0],v[e][1]);t.push(n)}return t}function x(t){if(document.querySelector("#playerBoard"),document.querySelector("#compBody"),"Computer"!==t.name){if("Ian"===t.name)for(var e=0;e<t.gameBoard.squareArr.length;e++){var n=document.createElement("td"),r=Math.floor(e/10)+1,o=document.querySelector("#playerRow".concat(r));n.textContent=t.gameBoard.squareArr[e],n.setAttribute("id","".concat(t.gameBoard.squareArr[e])),o.appendChild(n)}}else for(var a=0;a<t.gameBoard.squareArr.length;a++){var i=document.createElement("td"),s=Math.floor(a/10)+1,A=document.querySelector("#compRow".concat(s));i.textContent=t.gameBoard.squareArr[a],i.setAttribute("id","".concat(t.gameBoard.squareArr[a])),A.appendChild(i)}}function w(t,e,n,r){var o=document.createElement("div"),a=document.createElement("div");a.className="ship-container",a.classList.add(t.name);for(var i=0;i<t.length;i++){var s=document.createElement("div");s.className="ship",a.appendChild(s)}o.appendChild(r),o.appendChild(a),e.appendChild(o)}function B(t){for(var e=[],n=0;n<t.ships.length;n++)e.push(t.ships[n].name);for(var r=0;r<t.ships.length;r++){var o=t.randomLoc();t.ships[r].horizontal=t.randomBool(),t.gameBoard.randPlace(t.ships[r],o,t)}"Ian"===t.name&&function(t){var e=document.getElementById("playerBoard").querySelectorAll("td");Array.prototype.forEach.call(e,(function(t){t.parentNode.removeChild(t)})),x(t)}(t)}document.getElementById("overlay").addEventListener("click",(function(){g.closeModal()})),document.getElementById("closeModal").addEventListener("click",(function(){g.closeModal()})),document.getElementById("newGame").addEventListener("click",(function(){document.reload()})),document.getElementById("start").addEventListener("click",(function(){!function(){console.log("start game one time");var t=function(t){var e=b(),n=C.buildBoard(),r=new m.Player(t,n,e);return r.gameBoard.displayBoard(),r}(y[0]),e=function(t){console.log("build pc one time");var e=b(),n=C.buildBoard(),r=new m.Player(t,n,e);return r.gameBoard.displayBoard(),B(r),r}(y[1]);x(t),function(t){for(var e=document.querySelector(".boats"),n=0;n<t.ships.length;n++){var r=document.createElement("div");r.textContent=t.ships[n].name+" "+t.ships[n].length,w(t.ships[n],e,0,r)}}(t),x(e),document.getElementById("shuffle").addEventListener("click",(function(){B(t)}))}()})),g.openModal("Game Win","Would you like to start a new game?"),g.addNewGameBtn()})()})();
//# sourceMappingURL=main.js.map