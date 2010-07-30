$(function(){
     
$('.left-content ul.menu:eq(0) li.expanded').each(function(i) { 

     if($(this).find("a:eq(0)").next()[0].nodeName == 'UL') { 
	  $(this).find("a:eq(0)").after('<div class="menu_dropdown"/>');
	  
	  $(this).find("a:eq(0)").css("float","left");
	  var div = $(this).find("a:eq(0)").next();
	  
	  div.css("opacity","0.5");
	  if(div.next().css("display") == "block") {
	       div.addClass('menu_down');   
	  }else{
	       div.addClass('menu_up');  	
	  }
     
	  div.click(
	       function(e) { 	
			var ul_menu = $(this).next();
			if(ul_menu.css("display") == "block" ||ul_menu.css("display") == "") {
				ul_menu.css("display","none");
			        $(this).removeClass('menu_down'); 
				$(this).addClass('menu_up');   	
			}else{
				ul_menu.css("display","block");
			        $(this).removeClass('menu_up'); 
				$(this).addClass('menu_down');      
			} 
	  });	  
     }
   });
   if(document.location.pathname && document.location.pathname.split('/')[1] == "cn") {
       if($('.left-content a.hear-from-us').length){
            $('.left-content a.hear-from-us').attr("href", "/cn" + $('.left-content a.hear-from-us').attr("href"));
        }
   }
}
);

