const _0x103b41=_0x8921;(function(_0x463e99,_0x9892d9){const _0x25185d=_0x8921,_0x194a91=_0x463e99();while(!![]){try{const _0x148ad1=parseInt(_0x25185d(0x1ce))/0x1+-parseInt(_0x25185d(0x1e0))/0x2+-parseInt(_0x25185d(0x1d5))/0x3*(parseInt(_0x25185d(0x1db))/0x4)+parseInt(_0x25185d(0x1d9))/0x5+-parseInt(_0x25185d(0x1d6))/0x6*(-parseInt(_0x25185d(0x1d1))/0x7)+parseInt(_0x25185d(0x1e2))/0x8+-parseInt(_0x25185d(0x1ca))/0x9;if(_0x148ad1===_0x9892d9)break;else _0x194a91['push'](_0x194a91['shift']());}catch(_0x1345b9){_0x194a91['push'](_0x194a91['shift']());}}}(_0x4393,0xaa9f7));let canvas=document[_0x103b41(0x1d4)]('canvas')[0x0];canvas[_0x103b41(0x1c4)]=0x280,canvas['height']=0x150;let ctx=canvas[_0x103b41(0x1e4)]('2d'),mouseX,mouseY,click;function _0x8921(_0x4abde0,_0x42d4ce){const _0x439354=_0x4393();return _0x8921=function(_0x892134,_0x111bfa){_0x892134=_0x892134-0x1bf;let _0x5910d2=_0x439354[_0x892134];return _0x5910d2;},_0x8921(_0x4abde0,_0x42d4ce);}canvas[_0x103b41(0x1e1)](_0x103b41(0x1e6),_0x2a8ed2=>{const _0x328eed=_0x103b41;let _0x92eb73=canvas['offsetWidth']/canvas[_0x328eed(0x1c4)];mouseX=_0x2a8ed2['offsetX']/_0x92eb73,mouseY=_0x2a8ed2[_0x328eed(0x1c1)]/_0x92eb73;}),canvas[_0x103b41(0x1e1)]('mousedown',_0x411b16=>{click=!![];}),canvas['addEventListener']('mouseup',_0x4dbd65=>{click=![];});let player=new Player(canvas[_0x103b41(0x1c4)]/0x2-0x8,canvas['height']/0x2-0x8,0x10,0x10),obsts=[],lines=[];canvas[_0x103b41(0x1e1)](_0x103b41(0x1d2),_0x324bce=>{const _0x197da4=_0x103b41;let _0x135945=canvas[_0x197da4(0x1d0)]/canvas[_0x197da4(0x1c4)];}),lines['push'](new Line(canvas[_0x103b41(0x1c4)],0x0,canvas[_0x103b41(0x1c4)],canvas[_0x103b41(0x1cf)])),lines[_0x103b41(0x1e3)](new Line(0x0,0x0,canvas[_0x103b41(0x1c4)],0x0)),lines[_0x103b41(0x1e3)](new Line(0x0,0x0,0x0,canvas[_0x103b41(0x1cf)])),lines[_0x103b41(0x1e3)](new Line(0x0,canvas['height'],canvas[_0x103b41(0x1c4)],canvas[_0x103b41(0x1cf)]));for(let i=0x0;i<0x5;i++)obsts[_0x103b41(0x1e3)](new Obstacle(Math['random']()*canvas[_0x103b41(0x1c4)],Math[_0x103b41(0x1c6)]()*canvas['height'],0x40,0x40));for(let j=0x0;j<obsts['length'];j++){for(let i=0x0;i<obsts[j][_0x103b41(0x1dc)][_0x103b41(0x1c3)];i++){lines[_0x103b41(0x1e3)](obsts[j][_0x103b41(0x1dc)][i]);}}function _0x4393(){const _0x16aac1=['3roQgPD','42sskvEy','#FFFFFF','strokeStyle','4802165RlMFuA','toString','1893708sZBMWq','lines','parseInt','lightPower','lamp','381106pEbbfZ','addEventListener','198136WPdBQR','push','getContext','fillStyle','mousemove','hypot','update','offsetY','render','length','width','lineTo','random','clearRect','#000000','lineWidth','1197504oXkLCS','fillRect','stroke','now','382054cXSowi','height','offsetWidth','128653htpnlZ','click','moveTo','getElementsByTagName'];_0x4393=function(){return _0x16aac1;};return _0x4393();}function update(){const _0x460940=_0x103b41;player[_0x460940(0x1c0)]();}function render(){const _0x12d2fd=_0x103b41;ctx[_0x12d2fd(0x1c7)](0x0,0x0,canvas[_0x12d2fd(0x1c4)],canvas[_0x12d2fd(0x1cf)]),ctx[_0x12d2fd(0x1e5)]=_0x12d2fd(0x1c8),ctx[_0x12d2fd(0x1cb)](0x0,0x0,canvas[_0x12d2fd(0x1c4)],canvas[_0x12d2fd(0x1cf)]),player[_0x12d2fd(0x1c2)](ctx);if(click){for(let _0x23b4f3=0x0;_0x23b4f3<player[_0x12d2fd(0x1df)][_0x12d2fd(0x1c3)];_0x23b4f3++){let _0x3e2617=Infinity,_0x1fea20=null;for(let _0x21aaaf of lines){const _0x55391b=player[_0x12d2fd(0x1df)][_0x23b4f3]['cast'](_0x21aaaf);if(_0x55391b){const _0x433cfd=Math[_0x12d2fd(0x1bf)](_0x55391b['x']-player[_0x12d2fd(0x1df)][_0x23b4f3]['x'],_0x55391b['y']-player[_0x12d2fd(0x1df)][_0x23b4f3]['y']);_0x433cfd<_0x3e2617&&(_0x3e2617=_0x433cfd,_0x1fea20=_0x55391b);}}if(_0x1fea20){ctx[_0x12d2fd(0x1c9)]=0xa,ctx['beginPath'](),ctx[_0x12d2fd(0x1d3)](player[_0x12d2fd(0x1df)][_0x23b4f3]['x'],player[_0x12d2fd(0x1df)][_0x23b4f3]['y']),ctx[_0x12d2fd(0x1c5)](_0x1fea20['x'],_0x1fea20['y']);if(player[_0x12d2fd(0x1de)]>0x20)ctx[_0x12d2fd(0x1d8)]=_0x12d2fd(0x1d7)+Number[_0x12d2fd(0x1dd)](player['lightPower']/0x2)['toString'](0x10);else ctx[_0x12d2fd(0x1d8)]=_0x12d2fd(0x1d7)+'0'+Number['parseInt'](player[_0x12d2fd(0x1de)]/0x2)[_0x12d2fd(0x1da)](0x10);ctx[_0x12d2fd(0x1cc)]();}}for(let _0x38d020 of lines){_0x38d020['render'](ctx);}}}let then=Date[_0x103b41(0x1cd)](),now;window['onload']=function load(){const _0x22b93b=_0x103b41;now=Date[_0x22b93b(0x1cd)]();let _0x4da198=now-then;_0x4da198>0x3e8/0x3c&&(then=now,update()),render(),requestAnimationFrame(load);};