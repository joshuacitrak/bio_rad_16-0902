function startAd(){var bgtl=new TimelineLite;bgtl.to("#bradBackground",.8,{opacity:0}).to("#bradBackground",.8,{opacity:1},5.4).to("#bradBackground",.8,{opacity:0},7.4);var ttl=new TimelineLite;ttl.from("#t1",.8,{scale:0,opacity:0,ease:Power3.easeOut}).to("#t1",.8,{opacity:0,x:-20,ease:Power3.easeOut},3.6).from("#t2",.8,{opacity:0,ease:Power3.easeOut},3.8).from("#t3",.8,{opacity:0,ease:Power3.easeOut},3.8).to("#t3",.8,{opacity:0,ease:Power3.easeOut},5.6).from("#t4",.8,{opacity:0,ease:Power3.easeOut},5.6).from("#t5",.8,{opacity:0,ease:Power3.easeOut},9).to("#t4",.8,{opacity:0,ease:Power3.easeOut},9).to("#t5",.8,{x:-20,opacity:0,ease:Power3.easeOut},11).to("#t2",.8,{opacity:0,ease:Power3.easeOut},9).from("#t6",.8,{opacity:0,ease:Power3.easeOut},11).from("#t7",.8,{opacity:0,ease:Power3.easeOut},11).from("#t10",.8,{opacity:0,ease:Power3.easeOut},13).to("#t6",.8,{opacity:0,ease:Power3.easeOut},16).to("#t7",.8,{opacity:0,ease:Power3.easeOut},13).to("#t10",.8,{opacity:0,ease:Power3.easeOut},16).from("#t8",.8,{opacity:0,ease:Power3.easeOut},16).from("#t9",.8,{opacity:0,ease:Power3.easeOut},16);var itl=new TimelineLite;itl.from("#i1",.8,{scale:0,opacity:0,ease:Power3.easeOut}).to("#i1",.8,{scale:0,opacity:0,ease:Power3.easeOut},2).from("#i2",.8,{scale:0,opacity:0,ease:Power3.easeOut},2).to("#i2",.8,{scale:0,opacity:0,ease:Power3.easeOut},5.4).from("#i3",.8,{scale:0,opacity:0,ease:Power3.easeOut},7.4).to("#i3",.8,{scale:0,opacity:0,ease:Power3.easeOut},9.4).from("#i4",.8,{scale:0,opacity:0,ease:Power3.easeOut},9.4).to("#i4",.8,{scale:0,opacity:0,ease:Power3.easeOut},12.4);var wtl=new TimelineLite;wtl.from("#dotwatch",.8,{scale:0,opacity:0,ease:Power3.easeOut}).to("#dotwatch",.8,{x:20,opacity:0,ease:Power3.easeOut},3.6).from("#watchbg",.8,{opacity:0,ease:Power3.easeOut},3.6).from("#watch_face_bg1",.8,{opacity:0,ease:Power3.easeOut},3.6).from("#c1",1.4,{opacity:0,rotationZ:-30,ease:Power3.easeOut},4).from("#c2",1.4,{opacity:0,rotationZ:-30,ease:Power3.easeOut},4.4).from("#watch_face_bg2",.8,{opacity:0,ease:Power3.easeOut},5.6).from("#c3",1.4,{opacity:0,rotationZ:-30,ease:Power3.easeOut},5.8).from("#c4",1.4,{opacity:0,rotationZ:-30,ease:Power3.easeOut},6).to("#c1",.8,{opacity:0,ease:Power3.easeOut},9).to("#c2",.8,{opacity:0,ease:Power3.easeOut},9).to("#c3",.8,{opacity:0,ease:Power3.easeOut},9).to("#c4",.8,{opacity:0,ease:Power3.easeOut},9).to("#watch_face_bg2",.8,{opacity:0,ease:Power3.easeOut},9).to("#watch_face_bg1",.8,{opacity:0,ease:Power3.easeOut},9).to("#watchbg ",.8,{opacity:0,ease:Power3.easeOut},9).to("#dotwatch",.8,{x:0},8).to("#dotwatch",.8,{opacity:1,ease:Power3.easeOut},9).to("#dotwatch",.8,{x:20,opacity:0,ease:Power3.easeOut},11).from("#watch_face_bg3",.8,{opacity:0,ease:Power3.easeOut},11).to("#watchbg ",.8,{opacity:1,ease:Power3.easeOut},11).from("#c5",1.4,{opacity:0,rotationZ:-30,ease:Power3.easeOut},11.4).from("#c6",1.4,{opacity:0,rotationZ:-30,ease:Power3.easeOut},11.8).from("#c7",1,{opacity:0,rotationZ:-30,ease:Power3.easeOut},13).to("#watch_face_bg3",.8,{opacity:0,ease:Power3.easeOut},16).to("#watchbg ",.8,{opacity:0,ease:Power3.easeOut},16).to("#c5",.8,{opacity:0,ease:Power3.easeOut},16).to("#c6",.8,{opacity:0,ease:Power3.easeOut},16).to("#c7",.8,{opacity:0,ease:Power3.easeOut},16);var wttl=new TimelineLite;wttl.from("#watch_txt1",.8,{opacity:0,ease:Power3.easeOut}).to("#watch_txt1",.8,{opacity:0,ease:Power3.easeOut},2.4).from("#watch_txt2",.8,{opacity:0,ease:Power3.easeOut},7).to("#watch_txt2",.8,{opacity:0,ease:Power3.easeOut},9.6);var ctl=new TimelineLite;ctl.from("#comp1",.8,{scale:0,x:-20,opacity:0,ease:Power3.easeOut}).from("#comp2",.8,{scale:0,x:20,opacity:0,ease:Power3.easeOut},0);var ctatl=new TimelineLite;ctatl.from("#bradCtaButton",.8,{opacity:0,ease:Power3.easeOut}),tl.add(ttl,0),tl.add(wtl,0),tl.add(bgtl,3.6),tl.add(itl,3.6),tl.add(wttl,6.4),tl.add(ctl,16),tl.add(ctatl,16),tl.totalDuration(15)}function addListeners(){document.getElementById("bradContent").addEventListener("click",clickthrough)}function clickthrough(){EB.clickthrough()}function animationComplete(evt){}function checkInit(){function onInit(){TweenLite.set("#bradContainer",{opacity:1}),addListeners(),startAd()}EB.isInitialized()?onInit():EB.addEventListener(EBG.EventName.EB_INITIALIZED,onInit)}function updateSlider(){$("#slider").slider("value",100*tl.progress())}window.addEventListener("load",checkInit);var tl=new TimelineLite({onUpdate:updateSlider});tl.eventCallback("onComplete",animationComplete),$("#play").click(function(){1!=tl.progress()?tl.play():tl.restart()}),$("#pause").click(function(){tl.pause()}),$("#restart").click(function(){tl.restart()}),$("#slider").slider({range:!1,min:0,max:100,step:.1,slide:function(event,ui){tl.pause(),tl.progress(ui.value/100)}});