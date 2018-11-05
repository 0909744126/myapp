function change(params) {
    document.getElementById("p2").style.fontStyle="Arial";
    document.getElementById("p2").style.color="blue";
    document.getElementById("p2").style.fontSize="larger";
}
function mOver(obj) {
    obj.innerHTML="Thank you"
}
function mOut(obj) {
    obj.innerHTML="Mouse Over Me"
}
function change1(params) {
    var para=document.createElement("p");
    var node=document.createTextNode("This is new.");
    para.appendChild(node);
    var element=document.getElementById("div1");
    element.appendChild(para);
}
function remove(params) {
    var parent = document.getElementById("div1");
    var child=document.getElementById("p11");
    parent.removeChild(child);
}
var str="Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML=str.substr(7,13);

function Upper(params) {
    var str1=document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML=str1.toUpperCase();
}
