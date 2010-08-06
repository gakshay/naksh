// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// custom sorting function
(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text(); }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);

function sortCountries(){
$countries = $("ul#countries")
$data = $countries.clone();
  var $countriesSorted = $data.find("li").sorted({
          by: function(v) {
            return $(v).find('input').val().toLowerCase();
          }
        });
  $countries.quicksand($countriesSorted, {
        duration: 800,
        easing: 'easeInOutQuad'
      });
}

function sortStates(){
$states = $("ul#states").find("li");
  var $statesSorted = $states.sorted({
          by: function(v) {
            return $(v).find('input').val().toLowerCase();
          }
        });
  $("ul#states").quicksand($statesSorted, {
        duration: 800,
        easing: 'easeInOutQuad'
      });
}

function shuffleStates(ele) {
  // attempt to call Quicksand on every click
  //$("#countries input").click(function(e) {
      var $filteredData = $state_data.find('li[data-country=' + $(ele).parent().attr("data-id") + ']');
      var $filteredCData = $city_data.find('li[data-country=' + $(ele).parent().attr("data-id") + ']');
       var $sortedData = $filteredData.sorted({
        by: function(v) {
           return $(v).find('input').val().toLowerCase();
					}
        });
				var $sortedCData = $filteredCData.sorted({
	        by: function(v) {
	           return $(v).find('input').val().toLowerCase();
						}
	        });
    // finally, call quicksand
    $states.quicksand($sortedData, {
      duration: 800,
      easing: 'easeInOutQuad'
    });
		$cities.quicksand($sortedCData, {
      duration: 800,
      easing: 'easeInOutQuad'
    });
	}//);
//});

function shuffleCities(ele) {
    var $filteredData = $city_data.find('li[data-state=' + $(ele).parent().attr("data-id") + ']');
     var $sortedData = $filteredData.sorted({
      by: function(v) {
         return $(v).find('input').val().toLowerCase();
				}
      });
  // finally, call quicksand
  $cities.quicksand($sortedData, {
    duration: 800,
    easing: 'easeInOutQuad'
  });
}
//});

function selectAddress(ele){
  var $filteredData = $address_data.find('li[data-city=' + $(ele).parent().attr("data-id") + ']');
//  $address.quicksand($filteredData, {
//    duration: 100,
//    easing: 'easeInOutQuad'
//  });
//  $address.removeClass("hidden").addClass("show");
	$("#dialog-modal pre").text($filteredData.find('pre').text());
	$('#dialog-modal').dialog('open');
			return false;
}


$(function() {
		// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
		$("#dialog-model").dialog("destroy");
	
		$("#dialog-modal").dialog({
			height: 300,
			width: 450,
			modal: true,
			autoOpen: false
		});
	});


