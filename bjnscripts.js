function hideit(x){
  var p = document.getElementById(x);
  var pi = document.getElementById(x+"icon");
  var pb = document.getElementById(x+"body");
  if(pb.style.display ==='none') {
	 pb.style.display = 'block';
	 pi.setAttribute("class", "glyphicon glyphicon-chevron-down");
  } else {
	 pb.style.display = 'none';
	 pi.setAttribute("class", "glyphicon glyphicon-chevron-right");
  }
}


$(document).ready(function () {
	var menu_is_expanded = false;
    var mobile = $(window).width()<768? true:false;
    console.log(mobile);
	$("#mobile_menu_icon").click(function(){
		if (!menu_is_expanded) {
			$("#mobile_menu_icon img").attr("src", "img/close.svg");
			menu_is_expanded = true;
		} else {
			$("#mobile_menu_icon img").attr("src", "img/menu_icon.svg");
			menu_is_expanded = false;
		}
		$(".mobile-menu-list").toggleClass("hidden");
		$(".mobile-menu-list").toggleClass("mobfixed");
		$(".mobile-menu-list").css("top", $("header").outerHeight());
		//return false;
  	});  	
});


var d = new Date();
var n = d.getFullYear();
document.getElementById("curr_year").innerHTML = n+'';
