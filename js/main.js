// js-nav-button").addEventListener('click', function(){
//         document.getElementById("js-nav-button").classList.toggle("active");
//         document.getElementById("js-nav").classList.toggle("active");
//     },false);

//     var elem = document.querySelector('.main-carousel');
//     var flkty = new Flickity( elem, {
//     // options
//     wrapAround: true,
//     cellAlign: 'left',
//     contain: true, 
//     autoPlay: 5000,
//     selectedAttraction: 0.01,
//     friction: 0.3,
//     });

    

//     document.getElementById("js-watch").addEventListener("animationend", function(){
//         document.getElementById("js-animation").classList.add('none');
//     });

// });


"use strict";

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("js-nav-button").addEventListener('click', function () {
    document.getElementById("js-nav-button").classList.toggle("active");
    document.getElementById("js-nav").classList.toggle("active");
  }, false);
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    // options
    wrapAround: true,
    cellAlign: 'left',
    contain: true,
    autoPlay: 5000,
    selectedAttraction: 0.01,
    friction: 0.3
  });
  document.getElementById("js-watch").addEventListener("animationend", function () {
    document.getElementById("js-animation").classList.add('none');
  });
});