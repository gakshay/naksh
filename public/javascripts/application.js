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

$(function() {
  // get the first collection
  var $states = $('#states');
  var $cities = $('#cities');
  console.log($states);
  // clone applications to get a second collection
  var $sdata = $states.clone(true);
  var $cdata = $cities.clone(true);
  // attempt to call Quicksand on every click
  $("#countries input").click(function(e) {
      var $sfilteredData = $sdata.find('li[data-country=' + $(this).parent().attr("data-id") + ']');
      var $cfilteredData = $cdata.find('li[data-country=' + $(this).parent().attr("data-id") + ']');
       var $ssortedData = $sfilteredData.sorted({
        by: function(v) {
           return $(v).find('input').val().toLowerCase();
        }
      });
      var $csortedData = $cfilteredData.sorted({
        by: function(v) {
           return $(v).find('input').val().toLowerCase();
        }
      });
    // finally, call quicksand
    $states.quicksand($ssortedData, {
      duration: 800,
      easing: 'easeInOutQuad'
    });
    // finally, call quicksand
    $cities.quicksand($csortedData, {
      duration: 800,
      easing: 'easeInOutQuad'
    });

  });

  $("#states input").click(function(e) {
      var $ap_cities = $('#cities');
      alert("here");
      // clone applications to get a second collection
      var $ap_data = $ap_cities.clone(true);
      var $cfilteredData = $ap_data.find('li[data-state=' + $(this).parent().attr("data-id") + ']');
      var $csortedData = $cfilteredData.sorted({
        by: function(v) {
           return $(v).find('input').val().toLowerCase();
        }
      });
    // finally, call quicksand
    $ap_cities.quicksand($csortedData, {
      duration: 800,
      easing: 'easeInOutQuad'
    });

  });

});


