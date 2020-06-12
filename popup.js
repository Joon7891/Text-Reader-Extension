let all_voices = []

window.onload = function(){
    chrome.tts.getVoices(
        function(voices) {
            for (let i = 0; i < voices.length; i++){
                all_voices.push(voices[i]);
            }
        }
    );

    $(document).ready(function() {
        // Updating slider
        const $valueSpan = $('.valueSpan');
        const $value = $('#speed');
        $valueSpan.html('x' + ($value.val() / 100).toFixed(2));
        $value.on('input change', () => {
            $valueSpan.html('x' + ($value.val() / 100).toFixed(2));
        });

        // Updating languages drop down menu
        chrome.extension.getBackgroundPage().console.log(all_voices.length);
    });
    
    let speedButton = document.getElementById('speech-button');
    if (speedButton !== null){
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
}