$(document).ready(function () {
var handgone = false ;
    setInterval(function () {
        $('.loading').fadeOut(1000);
        if(handgone === false) {
            $('#welcome').fadeIn(1000);
            handgone = true;
           
        }
    
}, 5000);
 $('#welcome').css("color" , "red");

});