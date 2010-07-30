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
$countries = $("ul#countries").find("li");
  var $countriesSorted = $countries.sorted({
          by: function(v) {
            return $(v).find('input').val().toLowerCase();
          }
        });
  $("ul#countries").quicksand($countriesSorted, {
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
	$("#countries input").click(function(e) {
		var c = $(this).parent().attr("data-id");
		console.log(c);
	  $("#states").quicksand($("#states > li." + c), {
      duration: 800,
      easing: 'easeInOutQuad'
    });
	e.preventDefault(); 
	});
});



// // DOMContentLoaded
// $(function() {
// 
//   // bind radiobuttons in the form
//   var $filterType = $('#countries');
//   // var $filterSort = $('#filter input[name="sort"]');
// 
//   // get the first collection
//   var $applications = $('#states');
// 
//   // clone applications to get a second collection
//   var $data = $applications.clone();
// 
//   // attempt to call Quicksand on every form change
//   $filterType.change(function(e) {
//       var $filteredData = $data.find('li');
// 
//     // if sorted by size
//     // if ($('#filter input[name="sort"]:checked').val() == "size") {
//     //      var $sortedData = $filteredData.sorted({
//     //        by: function(v) {
//     //          return parseFloat($(v).find('span[data-type=size]').text());
//     //        }
//     //      });
//     //    } else {
//       // if sorted by name
//       var $sortedData = $filteredData.sorted({
//         by: function(v) {
//           return $(v).find('input').value().toLowerCase();
//         }
//       });
//     //}   
// 
//     // finally, call quicksand
//     $applications.quicksand($sortedData, {
//       duration: 800,
//       easing: 'easeInOutQuad'
//     });
// 
//   });
// 
// });
