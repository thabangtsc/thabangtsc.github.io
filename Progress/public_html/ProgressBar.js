/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {

//jQuery time
var current_bbbee, next_bbbee, previous_bbbee; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
if(animating) return false;
animating = true;

current_bbbee = $(this).parent();
next_bbbee = $(this).parent().next();

//activate next step on progressbar using the index of next_bbbee
$("#progressbar li").eq($("fieldset").index(next_bbbee)).addClass("active");

//show the next fieldset
next_bbbee.show(); 
//hide the current fieldset with style
current_bbbee.animate({opacity: 0}, {
step: function(now, mx) {
//as the opacity of current_bbbee reduces to 0 - stored in "now"
//1. scale current_fs down to 80%
scale = 1 - (1 - now) * 0.2;
//2. bring next_fs from the right(50%)
left = (now * 50)+"%";
//3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_bbbee.css({'transform': 'scale('+scale+')'});
next_bbbee.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_bbbee.hide();
animating = false;
}, 
//this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});

$(".previous").click(function(){
if(animating) return false;
animating = true;

current_bbbee = $(this).parent();
previous_bbbee = $(this).parent().prev();

//de-activate current step on progressbar
$("#progressbar li").eq($("fieldset").index(current_bbbee)).removeClass("active");

//show the previous fieldset
previous_bbbee.show(); 
//hide the current fieldset with style
current_bbbee.animate({opacity: 0}, {
step: function(now, mx) {
//as the opacity of current_fs reduces to 0 - stored in "now"
//1. scale previous_fs from 80% to 100%
scale = 0.8 + (1 - now) * 0.2;
//2. take current_fs to the right(50%) - from 0%
left = ((1-now) * 50)+"%";
//3. increase opacity of previous_bbbee to 1 as it moves in
opacity = 1 - now;
current_bbbee.css({'left': left});
previous_bbbee.css({'transform': 'scale('+scale+')', 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_bbbee.hide();
animating = false;
}, 
//this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});

$(".submit").click(function(){
return false;
});

});

