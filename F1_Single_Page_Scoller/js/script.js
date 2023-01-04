$(function(){
		$('#menu').slicknav({
            label:"", 
            closeOnClick: true,
            easingOpen:"swing",
            easingClose:"swing",
            position: true,
        });
	});



  $(window).load(function() {
 $('.flexslider').flexslider({
        slideshow: true,
        animationLoop: true,
        slideshowSpeed: 3000,
        animation: "swing",
    });
  });
//puts slick nav behind header
$('#menu').slicknav({
    prependTo:'#mainHeader'
});


//plays video muted upon start up
 $(document).ready(function() {
     $('video').prop('muted',true).play()
 });