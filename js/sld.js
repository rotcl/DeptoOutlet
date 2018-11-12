$(function() {
  var header = $('header');
  var backgrounds = ['url(img/header2.jpg)' , 
						'url(img/header3.jpg)',
						'url(img/header4.jpg)',
						'url(img/header1.jpg)',];
  var current = 0;

function nextBackground() {
  header.css(
   'background-image',
    backgrounds[current = ++current % backgrounds.length],
 );

 setTimeout(nextBackground, 3500);
 }
 setTimeout(nextBackground, 3500);
   header('background-image', backgrounds[0]);
 });
