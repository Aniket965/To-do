$(document).ready(function () {
    var handgone = false;
    setInterval(function () {
        $('.loading').fadeOut(1000);

        if (handgone === false) {
            $('#welcome').fadeIn(1000);
            setInterval(function () {
                if(handgone){
                    $('#welcome').fadeOut(1000);
                }
                $('#todolist').fadeIn(1000);
            }, 1000);
            handgone = true;
        }

    }, 5000);
    $('#welcome').css("color", "red");
    $('#todolist').html(markdown.toHTML(getText('https://raw.githubusercontent.com/Aniket965/To-do/master/README.md')));

});

function getText(myUrl) {
    var result = null;
    $.ajax({
        url: myUrl,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function (data) {
            result = data;
        }
    });
    FileReady = true;
    return result;
}