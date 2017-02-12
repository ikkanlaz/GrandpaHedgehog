var chatbotInitialize = function () {
    'use strict';
    console.log("chatbotInitialize method called");
    var branch;
    if (document.cookie !=""){
        var visitNumberCookie = new Cookie(findCookie("visit_number"));
        var branchCookie = new Cookie(findCookie("branch"));
        var visitNumber = visitNumberCookie.getValue();
        var branchValue = branchCookie.getValue();
        visitNumberCookie.incrementValue(visitNumber);
        branch = getBranch(branchValue);
        document.cookie = visitNumberCookie.stringify();
    } else {
        createCookie("visit_number","1");
        createCookie("branch","1_a");
        branch = getBranch("1_a");
    }   
    chatbotSpeak(branch);
}

var chatbot = function (event) {
    'use strict';
    console.log("chatbot method called");
    var me = event.target;
    addUserResponse(me.textContent);
    var branch = getBranch(me.value);
    createCookie("branch", me.value);
    chatbotSpeak(branch);
}

var Cookie = function (cookie){
    this.name = cookie.slice(0, cookie.indexOf("="));
    this.value = cookie.slice(cookie.indexOf("=")+1, cookie.length);

    this.stringify = function () {
        return this.name + "=" + this.value;
    }

    this.getName = function () {
        return this.name;
    }

    this.getValue = function () {
        return this.value;
    }

    this.incrementValue = function (value) {
        this.value = parseInt(this.value)+1;
    }
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function getCookieValue(name){  
    var cookie = findCookie(name);
    var value = cookie.slice(cookie.indexOf("=")+1);
    return value;
}

function findCookie (name){
    var cookies = document.cookie;
    var startOfCookie = cookies.indexOf(name);
    var endOfCookie = cookies.indexOf(";", startOfCookie);
    var cookie;
    if (startOfCookie>=0 && endOfCookie>=0){
        cookie = cookies.slice(startOfCookie, endOfCookie);
    } else if (startOfCookie>=0 && endOfCookie<0){
        cookie = cookies.slice(startOfCookie);
    } else {
        throw "Could not locate specified cookie";
    }
    return cookie;
}

function addUserResponse(text){
    var chatbotSection = document.getElementById("chatbotSection");
    var el = document.createElement("li");
    el.textContent = text;
    el.className += "response ";
    chatbotSection.appendChild(el);
}   

function getConversation() {
    var conversation = {"branches":{"1_a":{"botReply":[{"text":"Welcome!","link":null},{"text":"How can I help you?","link":null}],"userReply":[{"text":"Who are you and why are you asking?","branch":"2_a"},{"text":"What can you do?","branch":"2_b"}]},"2_a":{"botReply":[{"text":"My name is Grandpa Hedgehog.","link":null},{"text":"I was built to help you navigate this site, though there isn't much to see yet!","link":null}],"userReply":[{"text":"Oh. That seems unnecessary. So, what should I do?","branch":"2_b"},{"text":"Who created you?","branch":"3_a"}]},"2_b":{"botReply":[{"text":"I can get you a random color","link":null},{"text":"Do you want to try?","link":null}],"userReply":[{"text":"Sure!","branch":"4_a"},{"text":"No thanks. What else can you do?","branch":"4_b"}]},"3_a":{"botReply":[{"text":"I don't know. Why are you asking me?","link":null}],"userReply":[{"text":"???","branch":"5_a"}]},"4_a":{"botReply":[{"text":"Check out Color Changer","link":"http://www.grandpahedgehog.com/boop/ColorChanger.html"}],"userReply":[{"text":"Sure!","branch":"4_a"},{"text":"No. Can you show me something else?","branch":"2_b"}]},"4_b":{"botReply":[{"text":"Want a random word?","link":null}],"userReply":[{"text":"Sure!","branch":"6_a"},{"text":"Nah. What else?","branch":"2_b"}]},"5_a":{"botReply":[{"text":"I don't understand you","link":null},{"text":"Want a random color?","link":null}],"userReply":[{"text":"Sure!","branch":"4_a"},{"text":"Why would I want that?","branch":"4_b"}]},"6_a":{"botReply":[{"text":"Great!","link":null},{"text":"Do you want the clean version?","link":null}],"userReply":[{"text":"Yes","branch":"7_b"},{"text":"No","branch":"7_a"}]},"7_a":{"botReply":[{"text":"Go to Word Pair","link":"http://www.grandpahedgehog.com/boop/wordPair.html"}],"userReply":[{"text":"Okay","branch":"7_a"}]},"7_b":{"botReply":[{"text":"Go to Word Pair - Clean","link":"http://www.grandpahedgehog.com/boop/WordPairClean.html"}],"userReply":[{"text":"Okay","branch":"7_b"}]}}};
    return conversation;
}

function getBranch(branch) {
    var conversation = getConversation();
    return conversation.branches[branch];
}

function chatbotSpeak(branch){
    console.log("chatbotSpeak method called");
    var botReply = branch.botReply;
    botReply.forEach(addChatbotMessage);
    editButtons(branch.userReply);
}

function addChatbotMessage(botReply){
    var chatbotSection = document.getElementById("chatbotSection");
    var el = createMessageElement(botReply);
    chatbotSection.appendChild(el);
}

function createMessageElement(botReply){      
    var el = document.createElement("li");
    if (botReply.link != null){
        var a = document.createElement("a");
        var linkText = document.createTextNode(botReply.text);
        a.appendChild(linkText);
        a.title = botReply.text;
        a.href = botReply.link;
        el.appendChild(a);
    } else {
        el.textContent = botReply.text;
    }
    el.className += "message ";
    return el;
}

function editButtons(userReply){
    if (!userReply[0]){
        hideButton(firstButton);
    } else {
        editButton(userReply[0].branch, userReply[0].text, firstButton);
    }
    if (!userReply[1]) {
        hideButton(secondButton);
    } else {
        editButton(userReply[1].branch, userReply[1].text, secondButton);
    }
    firstButton.scrollIntoView({block: "end", behavior: "smooth"});
};

function editButton(branch, text, button){
    displayButton(button);
    button.value = branch;
    button.innerText = text;
}

function hideButton(button){
    button.style.visibility = "hidden";
};

function displayButton(button){
    button.style.visibility = "visible";
};

function splitString(stringToSplit, separator){
    return stringToSplit.split(separator);
}

var firstButton = document.getElementById("firstButton");
var secondButton = document.getElementById("secondButton");
firstButton.addEventListener("click", chatbot); 
secondButton.addEventListener("click", chatbot);
window.addEventListener("load", chatbotInitialize);