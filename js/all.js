$(document).ready (function(){
    var headerPhoneListOpen = $('.header-phone-List-open');
    var headerMenuBar = $('.bar');

    headerMenuBar.click(function(){
        headerPhoneListOpen.toggleClass('.show-header-list');
    })
}) 
