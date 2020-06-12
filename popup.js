let speedButton = document.getElementById('speech-button');
speedButton.onclick = function read(){
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, function(selection){
        chrome.extension.getBackgroundPage().console.log(selection);
        if (selection != null){
        }
    });
}