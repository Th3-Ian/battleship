(()=>{var t={705:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var A=0;A<t.length;A++){var l=[].concat(t[A]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},476:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},619:(t,e,n)=>{var r=n(403),o=n(395);t.exports={buildBoard:function(){return{columns:10,rows:10,squareArr:[],hitArr:[],missedArr:[],placedShips:[],hitNum:0,displayBoard:function(){for(var t=0;t<this.columns*this.rows;t++){var e=Math.floor(t/10),n=t+1-10*e;this.squareArr.push(["a","b","c","d","e","f","g","h","i","j"][e]+n)}return this.squareArr},isEmpty:function(){return!this.squareArr.includes("x")},placeShip:function(t,e,n){var a=this.squareArr.indexOf(e),s=this.squareArr[a];if(!0===t.horizontal){var c=a+t.length-1,A=this.squareArr[c];try{for(i=0;i<t.length;i++){if(s.charAt(0)!=A.charAt(0))throw new Error("Cannot place, ship is out of bounds");if("O"===this.squareArr[a+i])throw new Error("Error: another ship is at this location");t.coordinates.push(a+i),this.squareArr.splice(a+i,1,"O")}this.placedShips.push(t),o.removeEL(n),o.resetUI(n)}catch(t){return r.openModal("Error",t),void console.error(t)}}else if(!1===t.horizontal)try{var l=this.squareArr[a+10*t.length-10];for(i=0;i<t.length;i++){if(void 0===l)throw new Error("Cannot place, ship is out of bounds");if(a<0)throw new Error("Error: another ship is at this location");if("O"===this.squareArr[a+10*i])throw new Error("Error: another ship is at this location")}for(i=0;i<t.length;i++)t.coordinates.push(a+10*i),this.squareArr.splice(a+10*i,1,"O");this.placedShips.push(t),o.removeEL(n),o.resetUI(n)}catch(t){return r.openModal("ERROR!",t),void console.error(t)}},recieveAttack:function(t,e){var n=this.placedShips;console.log(n);try{if("O"===this.squareArr[t]){this.hitNum++,this.hitArr.push(t);for(var a=0;a<n.length;a++)for(var i=0;i<n[a].coordinates.length;i++)n[a].coordinates[i]===parseInt(t)&&(n[a].hit(i),n[a].isSunk());this.squareArr.splice(t,1,"X"),o.updateActvPlyr(),o.gameLoop()}else{if("X"===this.squareArr[t])throw new Error("Error: Already attacked this location");console.log("MISS!"),this.missedArr.push(t),this.squareArr.splice(t,1,"X"),o.updateActvPlyr(),o.gameLoop()}}catch(t){return console.log(e.name),"Player"===e.name&&r.openModal("ERROR!",t),void o.gameLoop()}},gameLoss:function(){for(var t=this.placedShips,e=0;e<t.length&&!1!==t[e].sunk;e++)return console.log("Game over"),void r.openModal("GAME OVER","You lost :(")},randPlace:function(t,e,n){var r=this.squareArr.indexOf(e),o=this.squareArr[r],a=n.randomLoc();if(!0===t.horizontal){var s=r+t.length-1,c=this.squareArr[s];try{for(i=0;i<t.length;i++){if(o.charAt(0)!=c.charAt(0))throw new Error("Cannot place, ship is out of bounds");if("O"===this.squareArr[r+i])throw new Error("Error: another ship is at this location");t.coordinates.push(r+i),this.squareArr.splice(r+i,1,"O")}this.placedShips.push(t)}catch(e){this.randPlace(t,a,n)}}else if(!1===t.horizontal)try{var A=this.squareArr[r+10*t.length-10];for(i=0;i<t.length;i++){if(void 0===A)throw new Error("Cannot place, ship is out of bounds");if(r<0)throw new Error("Error: another ship is at this location");if("O"===this.squareArr[r+10*i])throw console.log("ANOTHER SHIP AT LOCATION ERROR CAUGHT"),new Error("Error: another ship is at this location")}for(i=0;i<t.length;i++)t.coordinates.push(r+10*i),this.squareArr.splice(r+10*i,1,"O");this.placedShips.push(t)}catch(e){console.log("this is the random number verticle "+a),console.log("this ship will be called again "+t),console.error(e),this.randPlace(t,a,n)}}}}}},395:(t,e,n)=>{"use strict";n.r(e),n.d(e,{gameLoop:()=>L,removeEL:()=>R,resetUI:()=>U,updateActvPlyr:()=>j});var r=n(379),o=n.n(r),a=n(795),s=n.n(a),c=n(569),A=n.n(c),l=n(565),d=n.n(l),u=n(216),p=n.n(u),h=n(589),C=n.n(h),f=n(144),m={};function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}m.styleTagTransform=C(),m.setAttributes=d(),m.insert=A().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=p(),o()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=n(619),y=n(79),b=n(285),w=n(403),x=[["Carrier",5],["Battleship",4],["Cruiser",3],["Submarine",3],["Destroyer",2]],B=document.getElementById("horizontal"),E=0,S=["Player","Computer"],k=function(t){var e=G(),n=v.buildBoard(),r=new b.Player(t,n,e);return r.gameBoard.displayBoard(),r.active=!0,r}(S[0]),q=function(t){var e=G(),n=v.buildBoard(),r=new b.Player(t,n,e);return r.gameBoard.displayBoard(),O(r),r}(S[1]);function L(){var t=k.randomNum();!0===k.active?function(){I(q),z(q);for(var t=document.querySelectorAll(".comp-square"),e=function(e){t[e].addEventListener("click",(function(n){var r=t[e].dataset.num;q.gameBoard.recieveAttack(r,k)})),t[e].addEventListener("mouseover",(function(){t[e].classList.add("selected")})),t[e].addEventListener("mouseout",(function(){t[e].classList.remove("selected")}))},n=0;n<t.length;n++)e(n)}():!0===q.active&&(I(k),z(k),k.gameBoard.recieveAttack(t))}function G(){for(var t=[],e=0;e<x.length;e++){var n=y.buildShip(x[e][0],x[e][1]);t.push(n)}return t}function D(t){if(document.querySelector("#playerBoard"),document.querySelector("#compBody"),"Computer"!==t.name){if("Player"===t.name)for(var e=0;e<t.gameBoard.squareArr.length;e++){var n=document.createElement("td"),r=Math.floor(e/10)+1,o=document.querySelector("#playerRow".concat(r));n.textContent=t.gameBoard.squareArr[e],n.setAttribute("id","".concat(t.gameBoard.squareArr[e])),n.setAttribute("data-num","".concat(e)),n.setAttribute("class","player-square"),o.appendChild(n)}}else for(var a=0;a<t.gameBoard.squareArr.length;a++){var i=document.createElement("td"),s=Math.floor(a/10)+1,c=document.querySelector("#computerRow".concat(s));i.textContent=t.gameBoard.squareArr[a],i.setAttribute("id","".concat(t.gameBoard.squareArr[a])),i.setAttribute("class","comp-square"),i.setAttribute("data-num","".concat(a)),c.appendChild(i)}}function M(t,e,n,r){var o=document.createElement("div"),a=document.createElement("div");a.setAttribute("class","".concat(t.name," ship-container")),a.setAttribute("id","".concat(t.name));for(var i=0;i<t.length;i++);o.appendChild(r),o.appendChild(a),e.appendChild(o)}function O(t){for(var e=[],n=0;n<t.ships.length;n++)e.push(t.ships[n].name);for(var r=0;r<t.ships.length;r++){var o=t.randomLoc();t.ships[r].horizontal=t.randomBool(),t.gameBoard.randPlace(t.ships[r],o,t)}"Player"===t.name&&(I(t),z(t),L())}function I(t){var e=t.name.toLowerCase(),n=document.getElementById("".concat(e,"Board")).querySelectorAll("td");Array.prototype.forEach.call(n,(function(t){t.parentNode.removeChild(t)})),D(t)}function P(t,e){var n=document.getElementsByClassName("ship-container");Array.prototype.slice.call(n).forEach((function(t){t.classList.remove("selected")})),t.classList.add("selected"),function(t,e){var n=t.id,r=e.ships.find((function(t){return t.name===n}));B.addEventListener("click",(function(){r.toggleDirection(),B.textContent="",!0===r.horizontal?B.textContent="Horizontal":B.textContent="Verticle"}))}(t,e),function(t,e){for(var n=document.getElementsByClassName("player-square"),r=t.id,o=function(o){var a=e.ships.find((function(t){return t.name===r}));n[o].addEventListener("click",(function(r){var i=n[o].id;e.gameBoard.placeShip(a,i,t),I(e),z(e)})),n[o].addEventListener("mouseover",(function(){n[o].classList.add("selected")})),n[o].addEventListener("mouseout",(function(){n[o].classList.remove("selected")}))},a=0;a<n.length;a++)o(a)}(t,e)}function U(t){for(var e=document.getElementsByClassName("ship-container"),n=0;n<e.length;n++)e[n].classList.remove("selected");B.textContent="Horizontal"}function j(){k.toggleActive(),q.toggleActive()}function z(t){var e,n=[],r=(t.name.toLowerCase(),function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}(t.ships));try{for(r.s();!(e=r.n()).done;){var o=e.value;for(i=0;i<o.coordinates.length;i++)n.push(o.coordinates[i])}}catch(t){r.e(t)}finally{r.f()}!function(t){var e=t.name.toLowerCase(),n=document.getElementById("".concat(e,"Board")),r=t.gameBoard.hitArr;if(r!==[])for(i=0;i<r.length;i++)n.querySelector("[data-num='".concat(r[i],"']")).classList.add("hit-space")}(t),function(t){var e=t.name.toLowerCase(),n=document.getElementById("".concat(e,"Board")),r=t.gameBoard.missedArr;if(r!==[])for(i=0;i<r.length;i++)n.querySelector("[data-num='".concat(r[i],"']")).classList.add("miss-space")}(t)}function R(t){t.replaceWith(t.cloneNode(!0)),5==++E&&L()}document.getElementById("overlay").addEventListener("click",(function(){w.closeModal()})),document.getElementById("closeModal").addEventListener("click",(function(){w.closeModal()})),document.getElementById("newGame").addEventListener("click",(function(){document.reload()})),document.getElementById("start").addEventListener("click",(function(){D(k),function(t){for(var e=document.querySelector(".boats"),n=0;n<t.ships.length;n++){var r=document.createElement("div");r.textContent=t.ships[n].name+" "+t.ships[n].length,M(t.ships[n],e,0,r)}}(k),D(q),document.getElementById("shuffle").addEventListener("click",(function(){O(k)})),function(t){for(var e=document.getElementsByClassName("ship-container"),n=0;n<e.length;n++)e[n].addEventListener("click",(function(e){P(e.target,t)}))}(k)}),{once:!0})},403:(t,e,n)=>{"use strict";n.r(e),n.d(e,{addNewGameBtn:()=>l,closeModal:()=>A,openModal:()=>c});var r=document.querySelector(".modal"),o=document.querySelector("#overlay"),a=document.querySelector("#newGame"),i=r.querySelector(".title"),s=r.querySelector(".modal-body");function c(t,e){r.classList.add("active"),o.classList.add("active"),i.textContent=t,e&&(s.textContent=e)}function A(){i.textContent="",s.textContent="",r.classList.remove("active"),o.classList.remove("active"),a.classList.remove("active")}function l(){a.classList.add("active")}},285:t=>{t.exports={Player:function(t,e,n){return{name:t,active:!1,attacks:[],gameBoard:e,ships:n,updateTurn:function(){this.active=!this.active},randomNum:function(){var t=Math.floor(100*Math.random());if(!1===this.attacks.includes(t))return t;this.randomNum()},randomLoc:function(){var t=Math.floor(100*Math.random());if(t<10)return"a"+t;var e=(t=t.toString().split(""))[0],n=t[1];return n=parseInt(n)+1,(e=["a","b","c","d","e","f","g","h","i","j"][e])+n},randomBool:function(){return Math.random()<.5},toggleActive:function(){this.active=!this.active}}}}},79:(t,e,n)=>{var r=n(403);t.exports={buildShip:function(t,e){return{name:t,length:e,directions:[[],[]],arr:new Array(e).fill("O"),horizontal:!0,sunk:!1,coordinates:[],getShipLength:function(){return"This ship is ".concat(this.length)},getShipDirections:function(){for(var t=0;t<this.arr.length;t++)0!=t?(this.arr[0].push(t),this.arr[1].push(10*t)):(this.arr[0].push(t),this.arr[1].push(t))},hit:function(t){var e=t-1;return this.arr.splice(e,1,"X"),this.arr},isSunk:function(){return this.arr.includes("O")?this.sunk=!1:(r.openModal("Ship Sunk!","".concat(this.name," has been sunk!")),this.sunk=!0)},toggleDirection:function(){this.horizontal=!this.horizontal}}}}},144:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(476),o=n.n(r),a=n(705),i=n.n(a)()(o());i.push([t.id,'*{margin:0;padding:0;font-family:Verdana,Geneva,Tahoma,sans-serif;letter-spacing:2}body{background-color:blue}div{display:block;background-color:wheat}section{display:block;background-color:orange;margin:12px}.main-body{width:90%;display:flex;flex-wrap:wrap;justify-content:center;margin:auto}section{width:600px;min-height:400px}table{width:100%;padding:8px}td,th{border:3px solid #000;width:8.6%;position:relative;text-align:center}td:after{content:"";display:block;margin-top:26px}td,th{width:4rem;height:3.5rem;border:1px solid #ccc;text-align:center}th{background:#add8e6;border-color:#fff}.player-fleet{width:80%;display:flex;flex-wrap:wrap;margin:auto;padding:16px}.boats{display:flex;flex-grow:4;justify-content:space-between;margin:16px}.game-controls{flex-grow:1}.ship{border:3px solid purple;background-color:red;width:3rem;height:2.5rem}.ship-container{display:block;border:1px #00008b solid;padding-right:10px;background-color:green;z-index:4;height:2.5rem}.Carrier{width:15rem}.Battleship{width:12rem}.Cruiser{width:9rem}.Submarine{width:9rem}.Destroyer{width:6rem}.modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%) scale(0);transition:200ms ease-in-out;border:2px solid #000;border-radius:12px;z-index:10;background-color:#fff;width:500px;max-width:80%}.modal.active{transform:translate(-50%, -50%) scale(1)}.modal-header{padding:10px 15px;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #000}.modal-header .title{font-size:1.25rem;font-weight:bold}.modal-header .close-modal{cursor:pointer;border:none;outline:none;background:none;font-size:1.25rem;font-weight:bold}.modal-body{padding:10px 15px}#overlay{position:fixed;opacity:0;top:0;left:0;right:0;bottom:0;transition:200ms ease-in-out;background-color:rbga(0, 0, 0, 0.5);pointer-events:none}#overlay.active{opacity:70%;pointer-events:all}#newGame{opacity:0}#newGame.active{opacity:1}.selected{outline:4px;border-color:#688eac;box-shadow:0 10px 15px #accfeb}.hidden{display:none}.hit-space{background-color:green}.miss-space{background-color:red}',"",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AAEA,EACC,QAAA,CACA,SAAA,CACA,4CAAA,CACA,gBAAA,CAGD,KACE,qBAVG,CAaL,IACC,aAAA,CACA,sBAAA,CAGD,QACC,aAAA,CACA,uBAAA,CACA,WAAA,CAGD,WACC,SAAA,CACA,YAAA,CACA,cAAA,CACA,sBAAA,CACA,WAAA,CAGD,QACC,WAAA,CACA,gBAAA,CAGD,MACC,UAAA,CACA,WAAA,CAGD,MACC,qBAAA,CACC,UAAA,CACA,iBAAA,CACD,iBAAA,CAGD,SACE,UAAA,CACA,aAAA,CACD,eAAA,CAED,MACE,UAAA,CACA,aAAA,CACA,qBAAA,CACA,iBAAA,CAEF,GACE,kBAAA,CACA,iBAAA,CAGF,cACC,SAAA,CACA,YAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CAGD,OACC,YAAA,CACA,WAAA,CACA,6BAAA,CACA,WAAA,CAGD,eACC,WAAA,CAGD,MACC,uBAAA,CACA,oBAAA,CACA,UAAA,CACA,aAAA,CAGD,gBACC,aAAA,CACA,wBAAA,CACA,kBAAA,CACA,sBAAA,CACA,SAAA,CACA,aAAA,CAGD,SACC,WAAA,CAGD,YACC,WAAA,CAGD,SACC,UAAA,CAGD,WACC,UAAA,CAED,WACC,UAAA,CAID,OACC,cAAA,CACA,OAAA,CACA,QAAA,CACA,wCAAA,CACA,4BAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,qBAAA,CACA,WAAA,CACA,aAAA,CAGD,cACC,wCAAA,CAGD,cACC,iBAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,4BAAA,CAGD,qBACC,iBAAA,CACA,gBAAA,CAGD,2BACC,cAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CAGD,YACC,iBAAA,CAGD,SACC,cAAA,CACA,SAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,4BAAA,CACA,mCAAA,CACA,mBAAA,CAGD,gBACC,WAAA,CACA,kBAAA,CAGD,SACC,SAAA,CAGD,gBACC,SAAA,CAGD,UACC,WAAA,CACA,oBAAA,CACA,8BAAA,CAGD,QACC,YAAA,CAGD,WACC,sBAAA,CAGD,YACC,oBAAA",sourcesContent:["$bg: blue;\n\n*{\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: Verdana, Geneva, Tahoma, sans-serif;\n\tletter-spacing: 2;\n}\n\nbody {\n  background-color: $bg;\n}\n\ndiv {\n\tdisplay: block;\n\tbackground-color: wheat;\n}\n\nsection {\n\tdisplay: block;\n\tbackground-color: orange;\n\tmargin: 12px;\n}\n\n.main-body {\n\twidth: 90%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tmargin: auto;\n}\n\nsection {\n\twidth: 600px;\n\tmin-height: 400px;\n}\n\ntable {\n\twidth: 100%;\n\tpadding: 8px;\n}\n\ntd, th {\n\tborder: 3px solid black;\n  width: 8.6%;\n  position: relative;\n\ttext-align: center;\n\n}\ntd:after {\n  content: '';\n  display: block;\n\tmargin-top: 26px;\n}\ntd, th {\n  width: 4rem;\n  height: 3.5rem;\n  border: 1px solid #ccc;\n  text-align: center;\n}\nth {\n  background: lightblue;\n  border-color: white;\n}\n\n.player-fleet {\n\twidth: 80%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmargin: auto;\n\tpadding: 16px;\n}\n\n.boats {\n\tdisplay: flex;\n\tflex-grow: 4;\n\tjustify-content: space-between;\n\tmargin: 16px;\n}\n\n.game-controls {\n\tflex-grow: 1;\n}\n\n.ship {\n\tborder: 3px solid purple;\n\tbackground-color: red;\n\twidth: 3rem;\n\theight: 2.5rem;\n}\n\n.ship-container {\n\tdisplay: block;\n\tborder: 1px darkblue solid;\n\tpadding-right: 10px;\n\tbackground-color: green;\n\tz-index: 4;\n\theight: 2.5rem;\n}\n\n.Carrier {\n\twidth: 15rem;\n}\n\n.Battleship {\n\twidth: 12rem;\n}\n\n.Cruiser {\n\twidth: 9rem;\n}\n\n.Submarine {\n\twidth: 9rem;\n}\n.Destroyer {\n\twidth: 6rem;\n}\n\n/* MODAL POP UP */\n.modal {\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%) scale(0);\n\ttransition: 200ms ease-in-out;\n\tborder: 2px solid black;\n\tborder-radius: 12px;\n\tz-index: 10;\n\tbackground-color: white;\n\twidth: 500px;\n\tmax-width: 80%;\n}\n\n.modal.active {\n\ttransform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header {\n\tpadding: 10px 15px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-bottom: 2px solid black;\n}\n\n.modal-header .title {\n\tfont-size: 1.25rem;\n\tfont-weight: bold;\n}\n\n.modal-header .close-modal {\n\tcursor: pointer;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tfont-size: 1.25rem;\n\tfont-weight: bold;\n}\n\n.modal-body {\n\tpadding: 10px 15px;\n}\n\n#overlay {\n\tposition: fixed;\n\topacity: 0;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttransition: 200ms ease-in-out;\n\tbackground-color: rbga(0, 0, 0, .5) ;\n\tpointer-events: none;\n}\n\n#overlay.active {\n\topacity: 70%;\n\tpointer-events: all;\n}\n\n#newGame {\n\topacity: 0;\n}\n\n#newGame.active {\n\topacity: 1;\n}\n\n.selected {\n\toutline: 4px;\n\tborder-color: #688eac;\n\tbox-shadow: 0 10px 15px #accfeb;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.hit-space {\n\tbackground-color: green;\n}\n\n.miss-space {\n\tbackground-color: red;\n}"],sourceRoot:""}]);const s=i},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],A=r.base?c[0]+r.base:c[0],l=a[A]||0,d="".concat(A," ").concat(l);a[A]=l+1;var u=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var h=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),A=0;A<a.length;A++){var l=n(a[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0,n(395)})();
//# sourceMappingURL=main.js.map