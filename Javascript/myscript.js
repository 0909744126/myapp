function clickMe(params) {
    alert ("Hi!");
}
function changeImg() {
    var image=document.getElementById('myImg');
    if(image.name=="h1")
    {
        image.src="image/h2.jpg";
        image.name="h2";
    } else{
        image.src="image/h1.jpg";
        image.name="h1";
    }
}
function changeFont(params) {
    var changeFont=document.getElementById('demo');
    if(changeFont.style.color=="black")
    {
    changeFont.style.fontSize="25px";
    changeFont.style.color="red";
    }else{
        changeFont.style.color="black";
    }
}
function checkValue(params) {
    var input=document.getElementById('number').value;
    document.getElementById('text').innerHTML=input;
    if (input<10&&input>1) {
        alert("Input OK");
    }else
    {
        alert("Input not valid");
    }
}
function Calculate(params) {
    var x=document.getElementById('x').value;
    var y=document.getElementById('y').value;
    var z=x+y;
    document.getElementById('z').innerHTML=z;
}
function Tryit(params) {
    var date = new Date().getHours()
}