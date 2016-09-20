function startAd(){  
    var bgtl = new TimelineLite();
    bgtl.to("#bradBackground", .8, {opacity:0})
        .to("#bradBackground", .8, {opacity:1}, 8)
        .to("#bradBackground", .8, {opacity:0}, 10);
    
    var sq1tl = new TimelineLite();
    sq1tl.from("#watchbg", .8, {opacity:0, ease: Power3.easeOut})
        .from("#c1", 2.8, {opacity:0, rotationZ:-120, ease: Power2.easeOut})
        .from("#watch_face_bg2", .8, {opacity:0, ease: Power2.easeOut}, 4)
        .from("#c2", 2.8, {opacity:0, rotationZ:-120, ease: Power2.easeOut}, "-=.2")
        .to("#c1", .8, {opacity:0, ease: Power2.easeOut}, 8)
        .to("#c2", .8, {opacity:0, ease: Power2.easeOut}, 8)
        .to("#watch_face_bg2", .8, {opacity:0, ease: Power2.easeOut}, 8)
        .to("#watch_face_bg1", .8, {opacity:0, ease: Power2.easeOut}, 8)
        .to("#watchbg ", .8, {opacity:0, ease: Power2.easeOut}, 8);
    
    var sq2tl = new TimelineLite();
    sq2tl.from("#watch_face_bg3", .8, {opacity:0, ease: Power2.easeOut})
        .to("#watchbg ", .8, {opacity:1, ease: Power2.easeOut})
        .from("#c3", 3, {opacity:0, rotationZ:-120, ease: Power2.easeOut})
        .from("#c4", 1.4, {opacity:0, rotationZ:-30, ease: Power2.easeOut}, "-=1")
        .to("#watch_face_bg3", .8, {opacity:0, ease: Power2.easeOut}, 6.4)
        .to("#watchbg ", .8, {opacity:0, ease: Power2.easeOut}, 6.4)
        .to("#c3", .8, {opacity:0,  ease: Power2.easeOut}, 6.4)
        .to("#c4", .8, {opacity:0,  ease: Power2.easeOut}, 6.4);
    
    var ttl = new TimelineLite();
    ttl.from("#t1", .8, {scale:0, opacity:0, ease: Power3.easeOut})
        .to("#t1", .8, {opacity:0, y:-40, ease: Power3.easeOut}, 3)
        .from("#t2", .8, {opacity:0, ease: Power3.easeOut}, 3.2)
        .from("#t3", .8, {opacity:0, ease: Power3.easeOut}, 3.2)
        .to("#t3", .8, {opacity:0, ease: Power3.easeOut}, 7)
        .from("#t4", .8, {opacity:0, ease: Power3.easeOut}, 7)
        .from("#t5", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 11)
        .to("#t4", .8, {opacity:0, ease: Power3.easeOut}, 11)
        .to("#t2", .8, {opacity:0, y:-20, ease: Power3.easeOut}, 11)
        .to("#t5", .8, {y:-40, opacity:0, ease: Power3.easeOut}, 13)
        .from("#t6", .8, {opacity:0, ease: Power3.easeOut}, 13.4)
        .from("#t7", .8, {opacity:0, ease: Power3.easeOut}, 13.4)
        .from("#t8", .8, {opacity:0, ease: Power3.easeOut}, 15.8)
        .to("#t7", .8, {opacity:0, ease: Power3.easeOut},15.8) 
        .to("#t6", .8, {opacity:0, y:-20, ease: Power3.easeOut}, 18.6)
        .to("#t8", .8, {opacity:0, ease: Power3.easeOut},18.6)
        .from("#t9", .8, {opacity:0, ease: Power3.easeOut}, 18.6)
        .from("#t10", .8, {opacity:0, ease: Power3.easeOut}, 18.6);
    
    var itl = new TimelineLite();
    itl.from("#i1", .8, {scale:0, opacity:0, ease: Power3.easeOut})
        .to("#i1", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 4)
        .from("#i2", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 4)
        .to("#i2", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 8)
        .from("#i3", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 10)
        .to("#i3", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 12.8)
        .from("#i4", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 12.8)
        .to("#i4", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 15.6);
    
    var wtl = new TimelineLite();
    wtl.from("#dotwatch", .8, {scale:0, opacity:0, ease: Power3.easeOut})
        .to("#dotwatch", .8, {y:40, opacity:0, ease: Power3.easeOut}, 3)
         .to("#dotwatch", .8, {y:0, scale:0}, 10)
         .to("#dotwatch", .8, {opacity:1, scale:1, ease: Power3.easeOut}, 11)
        .to("#dotwatch", .8, {y:40,opacity:0, ease: Power3.easeOut}, 13);
    
    var ctl = new TimelineLite();
    ctl.from("#comp1", .8, {scale:0, y:-100, opacity:0, ease: Power3.easeOut})
        .from("#comp2", .8, {scale:0, y:100, opacity:0, ease: Power3.easeOut}, 0);
    
    var ctatl = new TimelineLite();
    ctatl.from("#bradCtaButton", .8, {opacity:0,ease: Power3.easeOut});
   
    tl.add(ttl, 0);
    tl.add(wtl, 0);
    tl.add(bgtl, 3);
    tl.add(sq1tl, 3);
    tl.add(itl, 3);
    tl.add(sq2tl, 12.2);
    tl.add(ctl, 18.8);
    tl.add(ctatl, 18.8);
    
    
    tl.totalDuration(15);
           
};

function addListeners(){
    document.getElementById("bradContent").addEventListener("click", clickthrough);
};

function clickthrough() {
    EB.clickthrough();
}


function animationComplete(evt){
};

function checkInit() {
              if (!EB.isInitialized()) {
                 EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit); 
                 // This code checks whether the EB object is initialized, if the object is initialized, it
                     //launches the function "onInit", otherwise "EB_INITIALIZED" event. 
              }
              else {
                      onInit();
               }         
               function onInit() {
    
    TweenLite.set("#bradContainer", {opacity:1});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);


$("#play").click(function() {
  //play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
  //if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

  if(tl.progress() != 1){
    //carl just changed this again
		tl.play();
  } else {
    tl.restart();
  }
});
		
$("#pause").click(function() {
		tl.pause();
});
		
$("#restart").click(function() {
		tl.restart();
});		
	
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
});	
		
function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
} 	