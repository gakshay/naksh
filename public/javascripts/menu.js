$(document).ready(attach_menu_events);
$(document).ready(enable_mailto_links);
$(document).ready(open_external_links_in_new_window);

function attach_menu_events() {
    $('#primary-navigation').find('ul:eq(0)').children('li.expanded').hover(function() {
        $(this).children('ul.menu').css('display', 'block');

        $(this).children('ul.menu').each(function(){
            child = $(this).children('li.expanded:first');
            number_of_children = $(this).children('li.expanded').length;            
            if(number_of_children > 0)
                $(this).css('width',(child.outerWidth(true)*(number_of_children-1))+child.width()+'px');
            });

    }, function() {
        $(this).children('ul.menu').css('display', 'none');
    });
    $('#primary-navigation').find('ul:eq(0)').find('li.expanded ul').each(function(){
            $(this).children("li").addClass("leaf");
            if($(this).children("li").length>1) {
                $(this).children("li:first").addClass("first");
                $(this).children("li:last").addClass("last");
            }
    });
    $(".active").parents("li").addClass("active-trail");
    $('#primary-navigation').find('ul:eq(0)').children('li').hover(function() {
        $(this).addClass('highlighted');
    }, function() {
        $(this).removeClass('highlighted');
    });
    $('#primary-navigation ul.menu li.expanded ul.menu li.leaf').each(function() {
        if( ( $(this).siblings().length && ($(this).siblings().hasClass('expanded') || !$(this).siblings().hasClass('leaf')) )  || $(this).prev().hasClass('expanded')) {
            //console.debug(this);
            $(this).removeClass('leaf');
        }
    });
}

function open_external_links_in_new_window() {
   $('a').filter(function(){
        if ($(this).attr('href') !== undefined) {
		return ($(this).attr('href').substring(0,7) == 'http://');
	}
    }).attr('target','_blank');
}


function enable_mailto_links() {
    $('a.mail-to').each( function() {
        $(this).attr('href',"mailto:"+$(this).html());
    });
}
