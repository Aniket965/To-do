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
    $('#todolist').html(markdown.toHTML(getText('https://github.com/Aniket965/fampool/blob/master/README.md')));});

//     $.get("https://github.com/Aniket965/fampool/blob/master/README.md?raw=true", function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);

// });

 function getText(myUrl){
            var result = null;
            $.ajax( { url: myUrl, 
                      type: 'get', 
                      dataType: 'html',
                      async: false,
                      success: function(data) { result = data; } 
                    }
            );
            FileReady = true;
            return result;
        }
