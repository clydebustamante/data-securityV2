function updateTexts() {
    var originalText = getSrcText();
    var alphabet = getAlphabet();
    var key = getKey();
    var keyLength = key.length;
    var keyAlphabet = alphabet.length != 95 ? alphabet : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var resultText1 = '';
    var resultText2 = '';
    var resultText3 = '';

    if (!KeepAllCharacters) 
    {
        var textMask = getTextMask(originalText, options, alphabet);
        var normalizedText= getNormalizedText(originalText, textMask);

        if (normalizedText.length > 0 && keylength > 0) 
        {
            var transformedText = DecryptMode ? decrypt(normalizedText, alphabet, key, keyAlphabet) : encrypt(normalizedText, alphabet, key, keyAlphabet);
            resultText1 = restoreText(originalText, transformedText, textMask);
        }
    }

    else
    {
        if (keyLength > 0) 
        {
            //Level 1
            resultText1 = DecryptMode ? decrypt1(originalText, alphabet, key, keyAlphabet) : encrypt1(originalText, alphabet, key, keyAlphabet);
            //Level 2
            resultText2 = DecryptMode ? decrypt2(resultText1, alphabet, key, keyAlphabet) : encrypt2(resultText1, alphabet, key, keyAlphabet);
            //Level 3
            resultText3 = DecryptMode ? decrypt3(resultText2, alphabet, key, keyAlphabet) : encrypt3(resultText2, alphabet, key, keyAlphabet);
            document.getElementById('gridLabel').style.display = "none";
        }

    }

    document.getElementsById("resultText1").value = resultText1;
    document.getElementsById("resultText2").value = resultText2;
    document.getElementsById("resultText3").value = resultText3;
}

function clearText() {
    document.getElementById("srcText").value = '';
    document.getElementById("key1").value = '';
    document.getElementById("gridHeader").value = '';
}