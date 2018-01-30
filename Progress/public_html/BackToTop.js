/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// JavaScript codes for track the page scroll and,
// appear the button if the page is scrolled down. 
// Use JavaScript .scroll() function to know whether the page is scrolled or not.
// As per the below code if the page is scrolled down greater than 100 pixels,
// then the button will display otherwise button will hide.
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
 // JavaScript code for button click event. 
// Once the button is clicked, the page would be scroll to the top.
// We will use the .animate() function and scrollTop event for page scroll to top.

    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

