$(document).ready(function(){
    $(".b1").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    $("#b1name").focus(function(){
        $(this).css("background-color","#a9d3a0");
    });
    $("#b1name").blur(function(){
        $(this).css("background-color","#ffffff");
    });
    $("#b1email").focus(function(){
        $(this).css("background-color","#a9d3a0");
    });
    $("#b1email").blur(function(){
        $(this).css("background-color","#ffffff");
    });
});
$(document).ready(function(){
    $("#b3").on({
        mouseenter: function(){
            $(this).css("background-color","lightgray"); 
        },
        mouseleave: function(){
            $(this).css("background-color","lightblue");
        },
        click: function(){
            $(this).css("background-color","yellow");
        }
    });
});
i=0;
$(document).ready(function(){
    $("#b1name").keypress(function(){
        $("span").text(i+=1);
    });
    $("#b1email").keypress(function(){
        $("span").text(i+=1);
    });
});