//let voices = []

window.onload = function(){
    $(document).ready(function() {
        const $valueSpan = $('.valueSpan');
        const $value = $('#speed');
        $valueSpan.html('x' + ($value.val() / 100).toFixed(2));
        $value.on('input change', () => {
            $valueSpan.html('x' + ($value.val() / 100).toFixed(2));
        });
    });

    /*
    chrome.tts.getVoices(
        function(voices) {
            for (let i = 0; i < voices.length; i++){
                chrome.extension.getBackgroundPage().console.log(voices[i]);
                voices.push(voices[i]);
            }
        }
    );
    */

   chrome.extension.getBackgroundPage().console.log('ok');
    
    let speedButton = document.getElementById('speech-button');
    speedButton.onclick = function read(){
        chrome.tabs.executeScript({
            code: 'window.getSelection().toString();'
        }, 
        function(selection){
            const $value = $('#speed');
    
            if (selection[0] === ''){
                chrome.tts.speak('Please Select Text');
            }
            else {
                if ($value.val() == 0) return;
                chrome.tts.speak(selection[0], {'lang': 'en-US', 'rate': $value.val() / 100});
            }
        });
    }
}