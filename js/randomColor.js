var changeBg = function (event) {
    console.log("random color method called");
    var me = event.target
    ,   body = document.getElementById("hi");
    var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    body.style.backgroundColor = randomColor;
    addText(randomColor);
    me.setAttribute("disabled", "disabled");
    setTimeout(function () { clearDisabled(me) }, 1000);
}

var setBg = function (event) {
    console.log("set color method called");
    var me = event.target,   body = document.getElementById("hi");
    var color = document.getElementById("setColor");    
    var colorInput = color.value;
    if (colorInput.length != 6){
        addText(colorInput.length +" characters given, but 6 needed.");

    } else if (isHexadecimal(colorInput) == false) {
        addText("Invalid characters provided.");
    } else {
        body.style.backgroundColor = "#" + colorInput;
        addText("#" + colorInput);
    }
    me.setAttribute("disabled", "disabled");
    setTimeout(function () { clearDisabled(me) }, 1000);
}

function clearDisabled(button) {
    var body = document.getElementById("hi");
    button.removeAttribute("disabled");
}

function addText(text){  
    var hexElement = document.getElementById("hex");
    var el = document.createElement("p");
    el.textContent = text;
    hexElement.appendChild(el);
}

function isHexadecimal(str)  {   
    for(i=0; i<str.length; i++){
        if (/[a-f0-9]/i.test(str.charAt(i)) == false){
            return false;
        }
    }
} 

var button = document.getElementById("randomColorBtn");
var setColorButton = document.getElementById("setColorBtn");
button.addEventListener("click", changeBg); 
setColorButton.addEventListener("click", setBg);