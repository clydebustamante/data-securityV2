var clickOne = document.getElementById("button1");
var clickTwo = document.getElementById("button2");
var clickThree = document.getElementById("button3");
var resultE = document.getElementById("buttonEncrypt");
var resultD = document.getElementById("buttonDecrypt");

resultE.addEventListener("click", function() {
    var notEmpty = document.getElementById("srcText").value.length;
    if(notEmpty != 0)
    {
            clickOne.style.border= 'transparent';
            clickTwo.style.border= 'transparent';
            clickThree.style.border= 'transparent';
            checkResult();
    }
    else
    {
            clickOne.style.border= 'transparent';
            clickTwo.style.border= 'transparent';
            clickThree.style.border= 'transparent';
            clickOne.disabled = true;
            clickTwo.disabled = true;
            clickThree.disabled = true;
    }
});

resultD.addEventListener("click", function() {
    var notEmpty = document.getElementById("srcText").value.length;
    if(notEmpty != 0)
    {
    checkResult();
    }
    else
    {
        clickOne.style.border= 'transparent';
        clickTwo.style.border= 'transparent';
        clickThree.style.border= 'transparent';
        clickOne.disabled = true;
        clickTwo.disabled = true;
        clickThree.disabled = true;
    }
});

    function checkResult() {
        clickOne.disabled = false;
        clickTwo.disabled = false;
        clickThree.disabled = false;
        clickOne.style.backgroundColor = '#FF3136';
    }

    var DecryptMode = true;
    var KeepAllCharacters = false;

    function encodeClick() {
        if (!checkText() || !checkKey())
            return;
        var output = document.getElementById('resultText1');
        document.getElementById('resultLabel1').innerHTML = 'Encrypted Ciphertext (<span style="color: #fff;">1st Level</span>):';
        document.getElementById('gridHeader').innerText = 'Grid: Encryption\n: One Level';
        showElement('result');
        hideElement('resultBox');
        scrollTo('result');
        DecryptMode = false;
        updateTexts();
        output.style.display = 'block';
        document.getElementById('grid1').style.display = "block";
        var encrypt = document.getElementById('buttonEncrypt');
        var decrypt = document.getElementById('buttonDecrypt');
        encrypt.style.backgroundColor = '#FF3136';
        encrypt.style.borderRadius= '4px';
        decrypt.style.backgroundColor = '#FF3136';
        document.getElementById('resultLabel1').style.display = "block";
        clickTwo.style.backgroundColor = '#ff3136';
        clickThree.style.backgroundColor = '#ff3136';
        document.getElementById('grid2').style.display = 'none';
        document.getElementById('resultText2').style.display = 'none';
        document.getElementById('grid3').style.display = 'none';
        document.getElementById('resultText3').style.display = 'none';
        document.getElementById('resultLabel2').style.display = 'none';
        document.getElementById('resultLabel3').style.display = 'none';
        document.getElementById('instruction').style.display = 'block';
        document.getElementById('bylevel').style.display = 'block';
    }   

    function decodeClick() {
        if (!checkText() || !checkKey())
            return;
        var output = document.getElementById('resultText1');
        document.getElementById('resultLabel1').innerHTML = 'Decrypted Ciphertext (<span style="color: #fff;">1st Level</span>):';
        document.getElementById('gridHeader').innerText = 'Grid: Decryption\n: One Level';
        showElement('result');
        showElement('resultBox');
        scrollTo('result');
        DecryptMode = true;
        updateTexts();
        output.style.display = 'block';
        document.getElementById('grid1').style.display = "block";
        var decrypt = document.getElementById('buttonDecrypt');
        var encrypt = document.getElementById('buttonEncrypt');
        decrypt.style.backgroundColor = '#ff3136';
        decrypt.style.borderRadius= '4px';
        encrypt.style.backgroundColor = '#ff3136';
        document.getElementById('resultLabel1').style.display = "block";
        clickTwo.style.backgroundColor = '#ff3136';
        clickThree.style.backgroundColor = '#ff3136';
        document.getElementById('grid2').style.display = 'none';
        document.getElementById('resultText2').style.display = 'none';
        document.getElementById('grid3').style.display = 'none';
        document.getElementById('resultText3').style.display = 'none';
        document.getElementById('resultLabel2').style.display = 'none';
        document.getElementById('resultLabel3').style.display = 'none';
        document.getElementById('instruction').style.display = 'block';
        document.getElementById('bylevel').style.display = 'block';
    }

    function showElement(id) {
        document.getElementById(id).classList.remove('collapse');
    }

    function hideElement(id) {
        document.getElementById(id).classList.add('collapse');
    }

    function toggleElement(id) {
        if (document.getElementById(id).classList.contains('collapse'))
            showElement(id);
        else
            hideElement(id);
    }

    function scrollTo(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    function removeSpaces() {
        pushToHistory();
        document.getElementById("srcText").value = document.getElementById("srcText").value.replace(/\s/g, '');
        updateResult();
      }
    
      function lettersOnly() {
        pushToHistory();
        document.getElementById("srcText").value = document.getElementById("srcText").value.replace(/[^a-zA-Z]/g, '');
        updateResult();
      }
    
      function reverseText() {
        pushToHistory();
        document.getElementById("srcText").value = document.getElementById("srcText").value.split('').reverse().join('');
        updateResult();
      }
    
      function toUpperCase() {
        pushToHistory();
        document.getElementById("srcText").value = document.getElementById("srcText").value.toUpperCase();
        updateResult();
      }
    
      function toLowerCase() {
        pushToHistory();
        document.getElementById("srcText").value = document.getElementById("srcText").value.toLowerCase();
        updateResult();
      }

      function updateResult() {
        const result = document.getElementById("srcText").value;
        document.getElementById("result").value = result;
        // You may need to update the result grid as well if needed
      }

    function checkText() {
        if (document.getElementById('srcText').value.length === 0 && document.getElementById('key1').value.length === 0  ) {
            document.getElementById('srcText').classList.add('is-invalid');
            document.getElementById('gridHeader').innerText = 'Grid View Guidance';
            document.getElementById('gridLabel').innerText = '- Enter keyword, and click decode or encode to show'; 
            document.getElementById('grid1').style.display = "none";
            document.getElementById('gridLabel').style.display = "block";
            var encrypt = document.getElementById('buttonEncrypt');
            var decrypt = document.getElementById('buttonDecrypt');
            encrypt.style.backgroundColor = '#FF3136';
x
            decrypt.style.backgroundColor = '#FF3136';
            return false;
        }
        else if (document.getElementById('srcText').value.length === 0 && document.getElementById('key1').value.length !== 0  ) {
            document.getElementById('srcText').classList.add('is-invalid');
            document.getElementById('gridHeader').innerText = 'Grid View Guidance';
            document.getElementById('gridLabel').innerText = '- Please enter a plaintext'; 
            document.getElementById('grid1').style.display = "none";
            document.getElementById('gridLabel').style.display = "block";
            var encrypt = document.getElementById('buttonEncrypt');
            var decrypt = document.getElementById('buttonDecrypt');
            encrypt.style.backgroundColor = '#FF3136';
            decrypt.style.backgroundColor = '#FF3136';
            return false;
        }
        else if (document.getElementById('srcText').value.length !== 0 && document.getElementById('key1').value.length === 0  ) {
            document.getElementById('srcText').classList.add('is-invalid');
            document.getElementById('gridHeader').innerText = 'Grid View Guidance';
            document.getElementById('gridLabel').innerText = '- Please enter a keyword';    
            document.getElementById('grid1').style.display = "none";
            document.getElementById('gridLabel').style.display = "block";
            var encrypt = document.getElementById('buttonEncrypt');
            var decrypt = document.getElementById('buttonDecrypt');
            encrypt.style.backgroundColor = '#FF3136';
            decrypt.style.backgroundColor = '#FF3136';
            return false;
        }
        else {
            document.getElementById('srcText').classList.remove('is-invalid');
            return true;
        }
    }

    function checkKey() {
        if (document.getElementById('key1').value.length === 0) {
            document.getElementById('key1').classList.add('is-invalid');
            document.getElementById('gridLabel').style.display = "block";
            document.getElementById('grid1').style.display = "none";
            document.getElementById("resultText1").value = '';
            document.getElementById("resultText1").style.display = 'none';
            document.getElementById("resultLabel1").style.display = 'none';
            var encrypt = document.getElementById("buttonEncrypt");
            var decrypt = document.getElementById("buttonDecrypt");
            encrypt.style.backgroundColor = '#FF3136';
            decrypt.style.backgroundColor = '#FF3136';
            return true;
        }
        else {
            document.getElementById('key1').classList.remove('is-invalid');
            document.getElementById('gridLabel').style.display = "none";
            document.getElementById('grid1').style.display = "block";
            return true;
        }
        }


    function getAlphabet() {
            var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (alphabet.length === 0)
                alphabet = new Array(95).fill(0).map(function (_, i) { return String.fromCharCode(i+32) }).join('');
            return alphabet;
        }


    function getSrcText() {
        var text = document.getElementById('srcText').value;
        document.getElementById('gridLabel').style.display = "block";
        return text.replace(/ /g, '-');
    }


    function getKey() {
        var key = document.getElementById("key1").value;
        var keyword = key.length;
        if(keyword > 0){
        key = key.trim().toUpperCase();
        document.getElementById('grid1').style.display = "block";
        return key.replace(/ /g, '-');
        }
        else {
        document.getElementById('grid1').style.display = "none";
        return key;
        }
    }
    
    function getKeyShifts(key, keyAlphabet) {
        var arr = new Array(key.length);
        for (var i = 0; i < key.length; i++) {
            var p = keyAlphabet.indexOf(key[i]);
            arr[i] = p;
        }

        return arr;
    }
    function updateTexts() {
        var originalText = getSrcText();
        var alphabet = getAlphabet();
        var key = getKey();
        var keyLength = key.length;
        var keyAlphabet = alphabet.length != 95 ? alphabet : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var resultText1 = '';
        var resultText2 = '';
        var resultText3 = '';

        if (!KeepAllCharacters) {
            var textMask = getTextMask(originalText, options, alphabet);
            var normalizedText = getNormalizedText(originalText, textMask);
            
            if (normalizedText.length > 0 && keyLength > 0) {
                var transformedText = DecryptMode ? decrypt(normalizedText, alphabet, key, keyAlphabet) : encrypt(normalizedText, alphabet, key, keyAlphabet);
                resultText1 = restoreText(originalText, transformedText, textMask);
            }

        } else {
            if (keyLength > 0) {
                resultText1 = DecryptMode ? decrypt1(originalText, alphabet, key, keyAlphabet) : encrypt1(originalText, alphabet, key, keyAlphabet);
                resultText2 = DecryptMode ? decrypt2(resultText1, alphabet, key, keyAlphabet) : encrypt2(resultText1, alphabet, key, keyAlphabet);
                resultText3 = DecryptMode ? decrypt3(resultText2, alphabet, key, keyAlphabet) : encrypt3(resultText2, alphabet, key, keyAlphabet);
                document.getElementById('gridLabel').style.display = "none";
            }
        }

        document.getElementById("resultText1").value = resultText1;
        document.getElementById("resultText2").value = resultText2;
        document.getElementById("resultText3").value = resultText3;
    }

    function clearText() {
        document.getElementById("srcText").value = '';
        document.getElementById("key1").value = '';
        document.getElementById('gridHeader').innerText = 'Grid View Guidance';
        var encrypt = document.getElementById("buttonEncrypt");
        var decrypt = document.getElementById("buttonDecrypt");
        encrypt.style.backgroundColor = '#FF3136';
        decrypt.style.backgroundColor = '#FF3136';
        document.getElementById('grid1').style.display = "none";
        document.getElementById('grid2').style.display = "none";
        document.getElementById('grid3').style.display = "none";
        document.getElementById('gridLabel').style.display = "block";
        document.getElementById('buttonCancel').style.backgroundColor = '#FF3136';
        document.getElementById('resultLabel1').style.display = 'none';
        document.getElementById('resultLabel2').style.display = 'none';
        document.getElementById('resultLabel3').style.display = 'none';
        document.getElementById("resultText1").style.display = 'none';
        document.getElementById("resultText2").style.display = 'none';
        document.getElementById("resultText3").style.display = 'none';
        document.getElementById('instruction').style.display = 'none';
        document.getElementById('bylevel').style.display = 'none';
        var clickOne = document.getElementById("button1");
        var clickTwo = document.getElementById("button2");
        var clickThree = document.getElementById("button3");
        clickOne.disabled = true;
        clickTwo.disabled = true;
        clickThree.disabled = true;
        clickOne.style.backgroundColor = '#FF3136';
        clickTwo.style.backgroundColor = '#FF3136';
        clickThree.style.backgroundColor = '#FF3136';
        clickOne.style.border = 'transparent';
        clickTwo.style.border = 'transparent';
        clickThree.style.border = 'transparent';
        document.getElementById('gridLabel').innerText = '- Enter keyword, and click decode or encode to show.'; 
    }

    
    function encrypt1(originalText, alphabet, key, keyAlphabet) {
        var columnorder = getColumnOrder(key);
        var columns1 = Array(key.length).fill('');
        for (var i = 0; i < originalText.length; i++) {
            columns1[i % key.length] += originalText[i];
        }
        var dst = '';
        for (var i = 0; i < key.length; i++) {
            dst += columns1[columnorder[i]];
        }
        var grid1 = generateLevel1Grid(key, columns1, columnorder);
        document.getElementById("grid1").innerHTML = grid1;
        return dst;
    }

    function decrypt1(originalText, alphabet, key, keyAlphabet) {
        var columnorder = getColumnOrder(key);
        var p = 0;
        var columns1 = Array(key.length).fill('');
        for (var i = 0; i < key.length; i++) {
            var k = columnorder[i];
            var l = Math.floor(originalText.length / key.length);
            if (k < originalText.length % key.length)
                l++;
            columns1[k] = originalText.slice(p, p + l);
            p += l;
        }
        var dst = '';
        for (var i = 0; i < originalText.length; i++) {
            var k = i % key.length;
            dst += columns1[k][Math.floor(i / key.length)];
        }
        var grid1 = generateLevel1Grid(key, columns1, columnorder);
        document.getElementById("grid1").innerHTML = grid1;
        return dst;
    }

    function encrypt2(resultText1, alphabet, key, keyAlphabet) {
        var columnorder = getColumnOrder(key);
        var columns2 = Array(key.length).fill('');
        for (var i = 0; i < resultText1.length; i++) {
            columns2[i % key.length] += resultText1[i];
        }
        var dst = '';
        for (var i = 0; i < key.length; i++) {
            dst += columns2[columnorder[i]];
        }
        var grid2 = generateLevel2Grid(key, columns2, columnorder);
        document.getElementById("grid2").innerHTML = grid2;
        return dst;
    }

    function decrypt2(resultText1, alphabet, key, keyAlphabet) {
        var columnorder = getColumnOrder(key);
        var p = 0;
        var columns2 = Array(resultText1.length).fill('');
        for (var i = 0; i < key.length; i++) {
            var k = columnorder[i];
            var l = Math.floor(resultText1.length / key.length);
            if (k < resultText1.length % key.length)
                l++;
            columns2[k] = resultText1.slice(p, p + l);
            p += l;
        }
        var dst = '';
        for (var i = 0; i < resultText1.length; i++) {
            var k = i % key.length;
            dst += columns2[k][Math.floor(i / key.length)];
        }
        var grid2 = generateLevel2Grid(key, columns2, columnorder);
        document.getElementById("grid2").innerHTML = grid2;
        return dst;
    }

    function encrypt3(resultText2, alphabet, key, keyAlphabet) {
        var columnorder = getColumnOrder(key);
        var columns3 = Array(key.length).fill('');
        for (var i = 0; i < resultText2.length; i++) {
            columns3[i % key.length] += resultText2[i];
        }
        var dst = '';
        for (var i = 0; i < key.length; i++) {
            dst += columns3[columnorder[i]];
        }
        var grid3 = generateLevel3Grid(key, columns3, columnorder);
        document.getElementById("grid3").innerHTML = grid3;
        return dst;
    }

    function decrypt3(resultText2, alphabet, key, keyAlphabet) {
        var columnorder = getColumnOrder(key);
        var p = 0;
        var columns3 = Array(key.length).fill('');
        for (var i = 0; i < key.length; i++) {
            var k = columnorder[i];
            var l = Math.floor(resultText2.length / key.length);
            if (k < resultText2.length % key.length)
                l++;
            columns3[k] = resultText2.slice(p, p + l);
            p += l;
        }
        var dst = '';
        for (var i = 0; i < resultText2.length; i++) {
            var k = i % key.length;
            dst += columns3[k][Math.floor(i / key.length)];
        }
        var grid3 = generateLevel3Grid(key, columns3, columnorder);
        document.getElementById("grid3").innerHTML = grid3;
        return dst;
    }

    function getColumnOrder(key) {
        var sortedkey = key.split('').sort().join('');
        var columnorder = Array(key.length);
        var columnorder2 = Array(key.length);
        var p = 0;
        var pch = '';
        for (var i = 0; i < sortedkey.length; i++) {
            if (pch != sortedkey[i])
                p = 0;
            pch = sortedkey[i];
            p = key.indexOf(pch, p);
            columnorder[i] = p;
            columnorder2[p] = i;
            p++;
        }

        return columnorder;
    }

    function getInverseColumnOrder(columnorder) {
        var columnorder2 = Array(columnorder.length);
        for (var i = 0; i < columnorder.length; i++) {
            columnorder2[columnorder[i]] = i;
        }

        return columnorder2;
    }

    function generateLevel1Grid(key, columns1, columnorder) {
        var grid1 = '';
        var columnorder2 = getInverseColumnOrder(columnorder);
        var textColor = 'white';
        for (var i = 0; i < key.length; i++) {
            grid1 += '\t' + '<span style="color:' + textColor + ';">' + (columnorder2[i] + 1).toString() + '</span>\t';
            textColor = (textColor === 'black') ? 'blue' : 'white';
        }
        grid1 += '\t\t\r\n';

        textColor = 'white';

        for (var i = 0; i < key.length; i++) {
            grid1 += '\t' + '<span style="color:' + textColor + ';">' + key[i] + '</span>\t';
            textColor = (textColor === 'black') ? 'blue' : 'white';
        }
        grid1 += '\t\t\r\n\n';

        for (var i = 0; i < (columns1[0]).length; i++) {
            textColor = 'white';
            for (var j = 0; j < key.length; j++) {
                grid1 += '\t-\t';
                if (i < columns1[j].length) {
                    var replacementValue = '' + '<span style="color:' + textColor + ';">' + columns1[j][i] + '</span>\t';
                    grid1 = grid1.replace(/-\t/g, replacementValue);
                    textColor = (textColor === 'black') ? 'blue' : 'white'; 
                }
            }
            grid1 += '\r\n';
        }

        return 'Level 1:</span>\n\n'+ grid1;
    }

    function generateLevel2Grid(key, columns2, columnorder) {
        var grid2 = '';
        var columnorder2 = getInverseColumnOrder(columnorder);
        var textColor = 'white';
        for (var i = 0; i < key.length; i++) {
            grid2 += '\t' + '<span style="color:' + textColor + ';">' + (columnorder2[i] + 1).toString() + '</span>\t';
            textColor = (textColor === 'black') ? 'blue' : 'white';
        }
        grid2 += '\t\t\r\n';

        textColor = 'white';

        for (var i = 0; i < key.length; i++) {
            grid2 += '\t' + '<span style="color:' + textColor + ';">' + key[i] + '</span>\t';
            textColor = (textColor === 'black') ? 'blue' : 'white';
        }
        grid2 += '\t\t\r\n\n';

        for (var i = 0; i < (columns2[0]).length; i++) {
            textColor = 'white';
            for (var j = 0; j < key.length; j++) {
                grid2 += '\t-\t';
                if (i < columns2[j].length) {
                    var replacementValue = '' + '<span style="color:' + textColor + ';">' + columns2[j][i] + '</span>\t';
                    grid2 = grid2.replace(/-\t/g, replacementValue);
                    textColor = (textColor === 'black') ? 'blue' : 'white'; 
                }
            }
            grid2 += '\r\n';
        }

        return '\n\n\nLevel 2:\n\n'+ grid2;
    }

    function generateLevel3Grid(key, columns3, columnorder) {
        var grid3 = '';
        var columnorder2 = getInverseColumnOrder(columnorder);
        var textColor = 'white';
        for (var i = 0; i < key.length; i++) {
            grid3 += '\t' + '<span style="color:' + textColor + ';">' + (columnorder2[i] + 1).toString() + '</span>\t';
            textColor = (textColor === 'black') ? 'blue' : 'white';
        }
        grid3 += '\t\t\r\n';

        textColor = 'white';

        for (var i = 0; i < key.length; i++) {
            grid3 += '\t' + '<span style="color:' + textColor + ';">' + key[i] + '</span>\t';
            textColor = (textColor === 'black') ? 'blue' : 'white';
        }
        grid3 += '\t\t\r\n\n';

        for (var i = 0; i < (columns3[0]).length; i++) {
            textColor = 'white';
            for (var j = 0; j < key.length; j++) {
                grid3 += '\t-\t';
                if (i < columns3[j].length) {
                    var replacementValue = '' + '<span style="color:' + textColor + ';">' + columns3[j][i] + '</span>\t';
                    grid3 = grid3.replace(/-\t/g, replacementValue);
                    textColor = (textColor === 'black') ? 'blue' : 'white'; 
                }
            }
            grid3 += '\r\n';
        }

        return '\nLevel 3:\n\n'+ grid3;
    }
    

    KeepAllCharacters = true;

  const content = document.getElementById('changeContent');
  let isEncryptClicked = false;

    function changeContentOne() {
        isEncryptClicked = document.getElementById('buttonEncrypt').classList.contains('clicked');
        if(isEncryptClicked) {
        clickOne.style.backgroundColor = '#FF3136';
        clickTwo.style.backgroundColor = '#FF3136';
        clickThree.style.backgroundColor = '#FF3136';
        document.getElementById('gridHeader').innerText = 'Grid: Encryption\n: One Level';
        document.getElementById('grid1').style.display = 'block';
        document.getElementById('resultText1').style.display = 'block';
        document.getElementById('grid2').style.display = 'none';
        document.getElementById('grid3').style.display = 'none';
        document.getElementById('resultText2').style.display = 'none';
        document.getElementById('resultText3').style.display = 'none';
        document.getElementById('resultLabel1').innerHTML = 'Encrypted Ciphertext (<span style="color: #fff;">1st Level</span>):';
        document.getElementById('resultLabel1').style.display = 'block';
        document.getElementById('resultLabel2').style.display = 'none';
        document.getElementById('resultLabel3').style.display = 'none';
        scrollTo('result');
        }
        else {
        clickOne.style.backgroundColor = '#FF3136';
        clickTwo.style.backgroundColor = '#FF3136';
        clickThree.style.backgroundColor = '#FF3136';
        document.getElementById('gridHeader').innerText = 'Grid: Decryption\n: One Level';
        document.getElementById('grid1').style.display = 'block';
        document.getElementById('resultText1').style.display = 'block';
        document.getElementById('grid2').style.display = 'none';
        document.getElementById('grid3').style.display = 'none';
        document.getElementById('resultText2').style.display = 'none';
        document.getElementById('resultText3').style.display = 'none';
        document.getElementById('resultLabel1').innerHTML = 'Decrypted Ciphertext (<span style="color: #fff;">1st Level</span>):';
        document.getElementById('resultLabel1').style.display = 'block';
        document.getElementById('resultLabel2').style.display = 'none';
        document.getElementById('resultLabel3').style.display = 'none';
        scrollTo('result');
        }
    }

  function changeContentTwo() {
        isEncryptClicked = document.getElementById('buttonEncrypt').classList.contains('clicked');
        if(isEncryptClicked) {
        clickTwo.style.backgroundColor = '#FF3136';
        clickOne.style.backgroundColor = '#FF3136';
        clickThree.style.backgroundColor = '#FF3136';
        document.getElementById('gridHeader').innerText = 'Grid: Encryption\n: Two Levels';
        document.getElementById('grid1').style.display = 'block';
        document.getElementById('resultText1').style.display = 'block';
        document.getElementById('grid2').style.display = 'block';
        document.getElementById('resultText2').style.display = 'block';
        document.getElementById('grid3').style.display = 'none';
        document.getElementById('resultText3').style.display = 'none';
        document.getElementById('resultLabel1').innerHTML = 'Encrypted Ciphertext (<span style="color: #fff;">1st Level</span>):';
        document.getElementById('resultLabel1').style.display = 'block';
        document.getElementById('resultLabel2').innerHTML = 'Encrypted Ciphertext (<span style="color: #fff;">2nd Level</span>):';
        document.getElementById('resultLabel2').style.display = 'block';
        document.getElementById('resultLabel3').style.display = 'none';
        scrollTo('result');
        }
        else {
        clickTwo.style.backgroundColor = '#FF3136';
        clickOne.style.backgroundColor = '#FF3136';
        clickThree.style.backgroundColor = '#FF3136';
        document.getElementById('gridHeader').innerText = 'Grid: Decryption\n: Two Levels';
        document.getElementById('grid1').style.display = 'block';
        document.getElementById('resultText1').style.display = 'block';
        document.getElementById('grid2').style.display = 'block';
        document.getElementById('resultText2').style.display = 'block';
        document.getElementById('grid3').style.display = 'none';
        document.getElementById('resultText3').style.display = 'none';
        document.getElementById('resultLabel1').innerHTML = 'Decrypted Ciphertext (<span style="color: #fff;">1st Level</span>):';
        document.getElementById('resultLabel1').style.display = 'block';
        document.getElementById('resultLabel2').innerHTML = 'Decrypted Ciphertext (<span style="color: #fff;">2nd Level</span>):';
        document.getElementById('resultLabel2').style.display = 'block';
        document.getElementById('resultLabel3').style.display = 'none';
        scrollTo('result');
        }
    }

  function changeContentThree() {
        isEncryptClicked = document.getElementById('buttonEncrypt').classList.contains('clicked');
        if(isEncryptClicked) {
        clickThree.style.backgroundColor = '#FF3136';
        clickOne.style.backgroundColor = '#FF3136';
        clickTwo.style.backgroundColor = '#FF3136';
        document.getElementById('gridHeader').innerText = 'Grid: Encryption\n: Three Levels';
        document.getElementById('grid1').style.display = 'block';
        document.getElementById('resultText1').style.display = 'block';
        document.getElementById('grid2').style.display = 'block';
        document.getElementById('resultText2').style.display = 'block';
        document.getElementById('grid3').style.display = 'block';
        document.getElementById('resultText3').style.display = 'block';
        document.getElementById('resultLabel1').innerHTML = 'Encrypted Ciphertext (<span style="color: #fff;">1st Level</span>):';
        document.getElementById('resultLabel1').style.display = 'block';
        document.getElementById('resultLabel2').innerHTML = 'Encrypted Ciphertext (<span style="color: #fff;">2nd Level</span>):';
        document.getElementById('resultLabel2').style.display = 'block';
        document.getElementById('resultLabel3').innerHTML = 'Encrypted Ciphertext (<span style="color: #fff;">3rd Level</span>):';
        document.getElementById('resultLabel3').style.display = 'block';
        scrollTo('result');
        }
        else {
        clickThree.style.backgroundColor = '#FF3136';
        clickOne.style.backgroundColor = '#FF3136';
        clickTwo.style.backgroundColor = '#FF3136';
        document.getElementById('gridHeader').innerText = 'Grid: Decryption\n: Three Levels';
        document.getElementById('grid1').style.display = 'block';
        document.getElementById('resultText1').style.display = 'block';
        document.getElementById('grid2').style.display = 'block';
        document.getElementById('resultText2').style.display = 'block';
        document.getElementById('grid3').style.display = 'block';
        document.getElementById('resultText3').style.display = 'block';
        document.getElementById('resultLabel1').innerHTML = 'Decrypted Ciphertext (<span style="color: #fff;">1st Level</span>):';
        document.getElementById('resultLabel1').style.display = 'block';
        document.getElementById('resultLabel2').innerHTML = 'Decrypted Ciphertext (<span style="color: #fff;">2nd Level</span>):';
        document.getElementById('resultLabel2').style.display = 'block';
        document.getElementById('resultLabel3').innerHTML = 'Decrypted Ciphertext (<span style="color: #fff;">3rd Level</span>):';
        document.getElementById('resultLabel3').style.display = 'block';
        scrollTo('result');
        }
    }

clickOne.addEventListener('click', changeContentOne);
clickTwo.addEventListener('click', changeContentTwo);
clickThree.addEventListener('click', changeContentThree);

document.getElementById('buttonEncrypt').addEventListener('click', function () {
    this.classList.add('clicked');
    document.getElementById('buttonDecrypt').classList.remove('clicked');
});

document.getElementById('buttonDecrypt').addEventListener('click', function () {
    this.classList.add('clicked');
    document.getElementById('buttonEncrypt').classList.remove('clicked');
});


// modal open
document.addEventListener("DOMContentLoaded", function () {
    openModal();

    document.querySelector(".close").addEventListener("click", function () {
        closeModal();
    });
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


		// for preloading screen
		var loader = document.getElementById("preloading");

		window.addEventListener("load", function (load) {
			window.removeEventListener("load", load, false);
			this.setTimeout(function () {
				loader.style.display = "none"
			}, 3000);
		}, false);