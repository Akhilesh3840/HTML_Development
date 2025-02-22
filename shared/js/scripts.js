$(function(){
	$('#header').load('shared/header.html');
	$('#footer').load('shared/footer.html');	
});


$(document).ready(function() {
	$(".search").click(function() {
	   $(".search-box").toggle();
	   $("input[type='text']").focus();
	 });

	 $(".toggle-bar").click(function(){
		$(".header-menu").toggleClass("open-menu");
	});

 });
