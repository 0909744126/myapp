document.write("Screen resolution: "+window.screen.availWidth+" x "+window.screen.availHeight);
function a(params) {
    window.open('https://google.com','_blank')
}
function b(params) {
    window.close();
}
function curr_Location(params) {
    alert(location.href);
}
function change_Location(params) {
    window.location="https://www.google.com/"
}
function Back(params) {
    history.back();
}
document.write("<hr/>");
    document.write("<p>Browser: ");
    document.write(navigator.appName+"</p>");
    document.write("<p>Browserversion: ");
    document.write(navigator.appVersion+"</p>");
    document.write("<p>Code: ");
    document.write(navigator.appCodeName+"</p>");
    document.write("<p>Platform: ");
    document.write(navigator.platform+"</p>");
    document.write("<p>Cookies enabled: ");
    document.write(navigator.cookieEnabled+"</p>");
    document.write("<p>OnLine: ");
    document.write(navigator.onLine+"</p>");

function myFunction(params) {
    alert("Hello");
}
var myElement=document.getElementById("intro");
var x=document.getElementsByTagName("p");
document.getElementById("demo").innerHTML="The text from the intro paragraph is "+myElement.innerHTML;
document.getElementById("demo2").innerHTML="The first paragraph (index 0) is: "+x[2].innerHTML;

var y=document.getElementsByClassName("intro");
document.getElementById("demo3").innerHTML="The first paragraph: "+ y[0].innerHTML;