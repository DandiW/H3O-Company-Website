var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();

    var backgroundColor = this.style.backgroundColor;
    //this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}

var vid = document.getElementById("bgvid");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 




//---------------- smooth scrolling---------------
$(document).ready(function(){
	
	$(function() {
  $("nav a").click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top-77 }, 1000);
        return false;
      }
  });
}); 

////position indicator------------------------
 
    var homepos = $("#home").offset().top;
    var marketpos = $("#market").offset().top;
    var productpos = $("#product").offset().top;

    var $homenav = $("#l1");
    var $marketnav = $("#l2");
    var $productnav = $("#l3");
   
    var $activeClass = $homenav;

 $(window).scroll(function(){   
    var scrollPos = $(document).scrollTop() + 70;
    var winHeight = $(window).height();
    var docHeight = $(document).height();

     if(scrollPos < marketpos){
               // console.log("home");

      $activeClass.removeClass("active-nav");
      $activeClass = $homenav;
      $activeClass.addClass("active-nav");
    }
    else if((scrollPos > marketpos) && (scrollPos < productpos)){
                      //  console.log("market");

      $activeClass.removeClass("active-nav");
      $activeClass = $marketnav;
      $activeClass.addClass("active-nav");
    }
     
     else if(scrollPos > productpos){
                      //  console.log("market");

      $activeClass.removeClass("active-nav");
      $activeClass = $productnav;
      $activeClass.addClass("active-nav");
    }

    else {
      $activeClass.addClass("active-nav")
    }
});

});

    



//--------------------Header------------------------
/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var AnimatedHeader = (function() {

  var docElem = document.documentElement,
    header = document.querySelector('.header'),
    didScroll = false,
    changeHeaderOn = 65;

  function init() {
    window.addEventListener('scroll', function(event) {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    }, false);
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
      classie.add(header, 'header-shrink');
    } else {
      classie.remove(header, 'header-shrink');
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();

( function( window ) {

'use strict';





// ----------------------Get the modal-----------------
var modal = document.getElementById('myModal');


var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
    modal.style.display = "none";
}



