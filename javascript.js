$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});

// scroll function
function scrollToID(id, speed){
	var offSet = 0;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}


(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger--htx");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

 $(".c-hamburger--htx").click(function(){
    if ($("#main_nav").css("display") == 'none') {
     $("#main_nav").slideDown(500);
   } else {
      $("#main_nav").slideUp(500);
   }
});

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      // navAppear();
      // navDissappear();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

// Scroll Magic Animation

var controller = new ScrollMagic.Controller();
// var controller2 = new ScrollMagic.Controller();

var titleScene = new ScrollMagic.Scene({
	triggerElement: '.top_letter', 
	offset: 100,
	triggerHook: 0.1,
	reverse: false
	// duration: 300
})

.setClassToggle('.top_letter','fade-in')
.addIndicators({
	name: 'fade scene 1'
})
.addTo(controller);


var titleBottom = new ScrollMagic.Scene({
	triggerElement: '.top_letter',
	offset: 100,
	triggerHook: 0.1,
	reverse: false
	// duration: 300
})

.setClassToggle('.bottom_letter','fade-bottom')
.addIndicators({
	name: 'fade scene 2'
})
.addTo(controller);

var titleBottom = new ScrollMagic.Scene({
	triggerElement: '.top_letter',
	offset: 100,
	triggerHook: 0.1,
	reverse: false
	// duration: 300
})

.setClassToggle('.title_dev','fade-bottom')
.addIndicators({
	name: 'fade scene 3'
})
.addTo(controller);

var titleAbout = new ScrollMagic.Scene({
	triggerElement: '.top_letter', 
	offset: 800,
	triggerHook: 0.1,
	reverse: false
	// duration: 300
})

.setClassToggle('#about_left','fade-in')
.addIndicators({
	name: 'fade about'
})
.addTo(controller);

var titleWork = new ScrollMagic.Scene({
	triggerElement: '.top_letter', 
	offset: 1500,
	triggerHook: 0.1,
	reverse: false
	// duration: 300
})

.setClassToggle('#work_left','fade-in')
.addIndicators({
	name: 'fade work'
})
.addTo(controller);

var titleContact = new ScrollMagic.Scene({
	triggerElement: '.top_letter', 
	offset: 2200,
	triggerHook: 0.1,
	reverse: false
	// duration: 300
})

.setClassToggle('#contact_left','fade-in')
.addIndicators({
	name: 'fade contact'
})
.addTo(controller);

var aboutScroll = new ScrollMagic.Scene({
	triggerElement: '#about_right', 
	offset: 0,
	triggerHook: 0,
	duration: 50
})

.setClassToggle('#about_right','scroll')
.addIndicators({
	name: 'aboutScroll'
})
.addTo(controller);

var aboutScrollEnd = new ScrollMagic.Scene({
	triggerElement: '#about_right', 
	offset: 50,
	triggerHook: 0
})

.setClassToggle('#about_right','scroll_end')
.addIndicators({
	name: 'aboutScrollEnd'
})
.addTo(controller);

var workScroll = new ScrollMagic.Scene({
	triggerElement: '#work_right', 
	offset: 0,
	triggerHook: 0,
	duration: 50
})

.setClassToggle('#work_right','scroll')
.addIndicators({
	name: 'workScroll'
})
.addTo(controller);

var workScrollEnd = new ScrollMagic.Scene({
	triggerElement: '#work_right', 
	offset: 50,
	triggerHook: 0
})

.setClassToggle('#work_right','scroll_end')
.addIndicators({
	name: 'workScrollEnd'
})
.addTo(controller);

//Hover Hexagon Function

// $('.hexagon').on('hover', function(event) {
// 		event.preventDefault();
// 		$('html, body').animate({scrollTop:0}, 'slow'); 		
// 	});


// $(window).on('scroll', function() {
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test_about = 750;
//     var scroll_pos_test_work = 1500;             // set to whatever you want it to be

//     if(y_scroll_pos > scroll_pos_test_about) {
//     	$('#about_right').css({"overflow":"auto"});
//     }

//     if(y_scroll_pos > scroll_pos_test_work) {
//         $('#work_right').css({"overflow":"auto"});
//     }
    // if(y_scroll_pos < scroll_pos_test) {
    // 	$('#about_right').css({"overflow":"none"});
    // }

});






