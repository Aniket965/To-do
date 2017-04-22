$(document).ready(function () {
    var handgone = false;
    setInterval(function () {
        $('.loading').fadeOut(1000);
        if (handgone === false) {
            $('#welcome').fadeIn(1000);
            handgone = true;

        }

    }, 5000);
    $('#welcome').css("color", "red");
    $('#todolist').html(markdown.toHTML('Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it'));});

    $.get("https://github.com/Aniket965/fampool/blob/master/README.md?raw=true", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);

});