var changeBg = function (event) {
    console.log("random color method called");
    var me = event.target
    ,   body = document.getElementById("hi");
    var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    body.style.backgroundColor = randomColor;
    addText(randomColor);
    me.setAttribute("disabled", "disabled");
    setTimeout(function () { clearDisabled(me) }, 500);
}

var setBg = function (event) {
    console.log("set color method called");
    var me = event.target,   body = document.getElementById("hi");
    var colorInput = getColor();
//    console.log(colorInput);
    if (validateColor(colorInput)){
        body.style.backgroundColor = "#" + colorInput;
        addText("#" + colorInput);
    }
    me.setAttribute("disabled", "disabled");
    setTimeout(function () { clearDisabled(me) }, 500);
}

function getColor(){
    var colorElement = document.getElementById("setColor");    
    return colorElement.value;
}

function validateColor (color) {
    if (color.length != 6){
        addText(color.length +" characters given, but 6 needed.");
        return false;
    } else if (isHexadecimal(color) == false) {
        addText("Invalid characters provided.");
        return false;
    } else {
        return true;
    }
}

function incrementColor (color){
    var colorInt = parseInt(color, 16);
    colorInt++;
    return colorInt.toString(16);
}

function clearDisabled(button) {
    var body = document.getElementById("hi");
    button.removeAttribute("disabled");
}

function addText(text){  
    var hexElement = document.getElementById("hex");
    var el = document.createElement("li");
    el.textContent = text;
    el.className += "message";
    hexElement.insertBefore(el, hexElement.childNodes[0]);
}

function isHexadecimal(str)  {   
    for(i=0; i<str.length; i++){
        if (/[a-f0-9]/i.test(str.charAt(i)) == false){
            return false;
        }
    }
} 

var randomColorButton = document.getElementById("randomColorBtn");
var setColorButton = document.getElementById("setColorBtn");
randomColorButton.addEventListener("click", changeBg); 
setColorButton.addEventListener("click", setBg);