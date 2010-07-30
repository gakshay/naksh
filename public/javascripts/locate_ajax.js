$(document).ready(initialize_locator);
function initialize_locator(){
    var path=document.location.pathname,lang='';
    if(path) {
        path=path.split("/");
        if(path[1] == 'cn'){
            lang = "?lang="+path[1];
        }
    }
    $.get('/locator.php'+lang, null, update_location_details);
}
function update_location_details(data){     
    var result = Drupal.parseJson(data);
    if(result.header.length > 0 && result.footer.length > 0)  {
        $("div#global_offices_header").html(result.header);
        $('div#global_offices_footer').html(result.footer);
    }
}
