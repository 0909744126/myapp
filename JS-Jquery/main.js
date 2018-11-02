$(document).ready(function(){
    $('#id-button').click(function(params) {
        var textbox=$('#id-textbox');
        alert(textbox.val());
});});

$(document).ready(function(){
    $('#id-button1').click(function(params) {
        $('div').addClass('important');
    });
});
$(document).ready(function(){
    $('#id-Hide').click(function(){
        $("p").hide();
    });
});
$(document).ready(function(){
    $('#id-Show').click(function(){
        $("p").show();
        $("h1").show();
    });
});
$(document).ready(function(){
    $("input").keydown(function(){
        $("#id-text1").css("background-color","yellow");
    });
    $("input").keyup(function(){
        $("#id-text1").css("background-color","pink");
    })
});
$(document).ready(function(){
    $("#button").click(function(){
        $("p").hide();
    });
});
$(document).ready(function(){
    $("#demo").click(function(){
        $("#test").hide();
    });
});
$(document).ready(function(){
    $("#demo1").click(function(){
        $(".test").hide();
    });
});
$(document).ready(function(){
    $("#demo2").click(function(){
        $("tr:even").css("background-color","yellow");
    });
});
$(document).ready(function(){
    $("#showtext").click(function(){
        alert("Text: "+$("#show").text());
    });
    $("#showhtml").click(function(){
        alert("Html: "+$("#show").html());
    });
});
$(document).ready(function(){
    $("#showtextvalue").click(function(){
        alert("Value: "+$("#textvalue").val());
    });
});
$(document).ready(function(){
    $("#showURL").click(function(){
        alert($("#git").attr("href"));
    });
});
$(document).ready(function(){
    $("#settext").click(function(){
        $("#para1").text("Hello world!");
    });
    $("#setHTML").click(function(){
        $("#para2").html("<b>Hello world!</b>");
    });
    $("#setValue").click(function(){
        $("#edittext").val("Green Academy");
    });
});
$(document).ready(function(){
    $("#changhref").click(function(){
        $("#git2").attr("href","http://greenacademy.edu.vn");
    });
});
$(document).ready(function(){
    $("#prependtext").click(function(){
        $("#textappend1").append("<b> Appended text</b>");
        $("#textappend2").append("<b> Appended text</b>");
    });
    $("#prependlist").click(function(){
        $("#list1").append("<li>Appended text</li>");
    });
});
$(document).ready(function(){
    $("#apendtext").click(function(){
        $("#textpreppend3").prepend("<b>Prepended text. </b>");
        $("#textpreppend4").prepend("<b>Prepended text. </b>");
    });
    $("#apendlist").click(function(){
        $("#list2").prepend("<li>Prepended text</li>");
    });
});
$(document).ready(function(){
    $("#addbefore").click(function(){
        $("img").before("<b>Before </b>");
    });
    $("#addafter").click(function(){
        $("img").after("<i> After</i>");
    });
});
$(document).ready(function(){
    $("#removediv").click(function(){
        $("#div1").remove();
    });
});
$(document).ready(function(){
    $("#Emptydiv").click(function(){
        $("#div2").empty();
    });
});