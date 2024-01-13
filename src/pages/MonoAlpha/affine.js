document.addEventListener('DOMContentLoaded', function () {
  const inputText = document.getElementById('inputText');
  const encodeButton = document.getElementById('encodeButton');
  const decodeButton = document.getElementById('decodeButton');
  const cipherInput = document.getElementById('cipherInput');
  const errorMessage = document.getElementById('errorMessage');
  const outputTextArea = document.querySelector('.output');
  const generateButton = document.querySelector('.generate');
  const cipherDisplay = document.getElementById('cipherDisplay');
  const inputDisplay = document.getElementById('inputDisplay');
  const inputMappings = document.getElementById('inputMappings');
  const outputParagraph = document.getElementById('outputParagraph');

  cipherInput.value = 'BCDEFGHIJKLMNOPQRSTUVWXYZA';

  handleCipherInputChange();

  encodeButton.addEventListener('click', handleEncodeButtonClick);
  decodeButton.addEventListener('click', handleDecodeButtonClick);
  generateButton.addEventListener('click', generateRandomAlphabet);
  cipherInput.addEventListener('input', handleCipherInputChange);
  inputText.addEventListener('input', handleInputTextChange);

  function handleCipherInputChange() {
    const cipherAlphabet = cipherInput.value.toUpperCase();

    if (!validateCipherAlphabet(cipherAlphabet)) {
      displayError(
        errorMessage,
        'Error: Cipher alphabet should not contain duplicate characters.'
      );
      cipherDisplay.textContent = '';
    } else {
      errorMessage.textContent = '';
      cipherDisplay.textContent = ` - ${cipherAlphabet}`;
    }
  }

  function handleEncodeButtonClick() {
    const inputTextValue = inputText.value.toUpperCase();
    const cipherAlphabet = cipherInput.value.toUpperCase();

    if (!validateCipherAlphabet(cipherAlphabet)) {
      displayError(
        errorMessage,
        'Error: Cipher alphabet should not contain duplicate characters.'
      );
      return;
    }

    errorMessage.textContent = '';

    const encodedText = encodeText(inputTextValue, cipherAlphabet);
    outputTextArea.value = encodedText;
    updateMappings(inputTextValue, encodedText);
    outputParagraph.textContent = `Using the given monoalphabetic subsitution key the output is " ${encodedText}  "`;
  }

  function handleDecodeButtonClick() {
    const inputTextValue = inputText.value.toUpperCase();
    const cipherAlphabet = cipherInput.value.toUpperCase();

    if (!validateCipherAlphabet(cipherAlphabet)) {
      displayError(
        errorMessage,
        'Error: Cipher alphabet should not contain duplicate characters.'
      );
      return;
    }

    errorMessage.textContent = '';

    const decodedText = decodeText(inputTextValue, cipherAlphabet);
    outputTextArea.value = decodedText;
    updateMappings(inputTextValue, decodedText);
    outputParagraph.textContent = `Using the given monoalphabetic subsitution key the output is "${decodedText}"    `;
  }

  function handleInputTextChange() {
    const inputTextValue = inputText.value.toUpperCase();
    inputDisplay.textContent = ` Now, you can use this key to encrypt your plaintext  "${inputTextValue}"`;
  }

  function updateMappings(originalText, newText) {
    inputMappings.textContent = ''; //

    const maxLength = Math.min(originalText.length, 6);

    for (let i = 0; i < maxLength; i++) {
      if (originalText[i] === ' ') {
        continue;
      }

      let newTextElement = document.createElement('span');
      newTextElement.textContent = newText[i];

      let mappingElement = document.createElement('div');
      mappingElement.classList.add('mapping');

      mappingElement.textContent = `${originalText[i]} maps to `;
      mappingElement.appendChild(newTextElement);

      inputMappings.appendChild(mappingElement);
    }
    let andSoOnElement = document.createElement('div');
    andSoOnElement.textContent = 'and so on...';
    inputMappings.appendChild(andSoOnElement);
  }

  function validateCipherAlphabet(str) {
    return new Set(str).size === str.length;
  }

  function generateRandomAlphabet() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shuffledAlphabet = alphabet
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');

    cipherInput.value = shuffledAlphabet;

    handleCipherInputChange();
  }

  function encodeText(text, cipherAlphabet) {
    return text
      .split('')
      .map((char) => {
        const index = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char);
        return index !== -1 ? cipherAlphabet[index] : char;
      })
      .join('');
  }

  function decodeText(text, cipherAlphabet) {
    return text
      .split('')
      .map((char) => {
        const index = cipherAlphabet.indexOf(char);
        return index !== -1 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index] : char;
      })
      .join('');
  }

  function displayError(element, message) {
    element.textContent = message;
  }

  //Via Keyword

  const KinputText = document.getElementById('KinputText');
  const KencodeButton = document.getElementById('KencodeButton');
  const KdecodeButton = document.getElementById('KdecodeButton');
  const KcipherInput = document.getElementById('KcipherInput');
  const keywordInput = document.getElementById('keywordInput');
  const KerrorMessage = document.getElementById('KerrorMessage');
  const KoutputTextArea = document.querySelector('.Koutput');
  //   const KgenerateButton = document.querySelector('.Kgenerate');
  const KcipherDisplay = document.getElementById('KcipherDisplay');
  const KinputDisplay = document.getElementById('KinputDisplay');
  const KinputMappings = document.getElementById('KinputMappings');
  const KoutputParagraph = document.getElementById('KoutputParagraph');

  KcipherInput.value = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  KhandleCipherInputChange();

  KencodeButton.addEventListener('click', KhandleEncodeButtonClick);
  KdecodeButton.addEventListener('click', KhandleDecodeButtonClick);
  //   KgenerateButton.addEventListener('click', KgenerateRandomAlphabet);
  KcipherInput.addEventListener('input', KhandleCipherInputChange);
  KinputText.addEventListener('input', KhandleInputTextChange);

  function KhandleCipherInputChange() {
    const cipherAlphabet = KcipherInput.value.toUpperCase();

    if (!KvalidateCipherAlphabet(cipherAlphabet)) {
      KdisplayError(
        KerrorMessage,
        'Error: Cipher alphabet should not contain duplicate characters.'
      );
      KcipherDisplay.textContent = '';
    } else {
      KerrorMessage.textContent = '';
    }
  }

  function KhandleEncodeButtonClick() {
    const inputTextValue = KinputText.value.toUpperCase();
    let cipherAlphabet = KcipherInput.value.toUpperCase();
    const keyword = keywordInput.value.toUpperCase();

    if (!KvalidateCipherAlphabet(cipherAlphabet)) {
      KdisplayError(
        KerrorMessage,
        'Error: Cipher alphabet should not contain duplicate characters.'
      );
      return;
    }

    const combinedAlphabetSet = new Set(keyword + cipherAlphabet);
    const combinedAlphabet = Array.from(combinedAlphabetSet).join('');

    KerrorMessage.textContent = '';
    KcipherInput.value = combinedAlphabet;

    const encodedText = KencodeText(inputTextValue, combinedAlphabet);
    KoutputTextArea.value = encodedText;
    KupdateMappings(inputTextValue, encodedText);

    KdisplayKeyword();
    KdisplayCipherAlphabet();
    KdisplayOutput(encodedText);
  }

  function KhandleDecodeButtonClick() {
    const inputTextValue = KinputText.value.toUpperCase();
    let cipherAlphabet = KcipherInput.value.toUpperCase();
    const keyword = keywordInput.value.toUpperCase();

    if (!KvalidateCipherAlphabet(cipherAlphabet)) {
      KdisplayError(
        KerrorMessage,
        'Error: Cipher alphabet should not contain duplicate characters.'
      );
      return;
    }

    const combinedAlphabetSet = new Set(keyword + cipherAlphabet);
    const combinedAlphabet = Array.from(combinedAlphabetSet).join('');

    KerrorMessage.textContent = '';
    KcipherInput.value = combinedAlphabet;

    const decodedText = KdecodeText(inputTextValue, combinedAlphabet);
    KoutputTextArea.value = decodedText;
    KupdateMappings(inputTextValue, decodedText);

    KdisplayKeyword();
    KdisplayCipherAlphabet();
    KdisplayOutput(decodedText);
  }

  function KhandleInputTextChange() {
    const inputTextValue = inputText.value.toUpperCase();
  }

  function KupdateMappings(originalText, newText) {
    KinputMappings.textContent = ''; //

    const maxLength = Math.min(originalText.length, 4);

    for (let i = 0; i < maxLength; i++) {
      // Skip spaces
      if (originalText[i] === ' ') {
        continue;
      }

      let newTextElement = document.createElement('span');
      newTextElement.textContent = newText[i];

      let mappingElement = document.createElement('div');
      mappingElement.classList.add('mapping');

      mappingElement.textContent = `${originalText[i]} maps to `;
      mappingElement.appendChild(newTextElement);

      KinputMappings.appendChild(mappingElement);
    }
    let andSoOnElement = document.createElement('div');
    andSoOnElement.textContent = 'and so on...';
    KinputMappings.appendChild(andSoOnElement);
  }

  function KvalidateCipherAlphabet(str) {
    return new Set(str).size === str.length;
  }

  //   function KgenerateRandomAlphabet() {
  //     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //     const shuffledAlphabet = alphabet
  //       .split('')
  //       .sort(() => Math.random() - 0.5)
  //       .join('');
  //
  //     KcipherInput.value = shuffledAlphabet;
  //
  //     KhandleCipherInputChange();
  //   }

  function KencodeText(text, cipherAlphabet) {
    return text
      .split('')
      .map((char) => {
        const index = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char);
        return index !== -1 ? cipherAlphabet[index] : char;
      })
      .join('');
  }

  function KdecodeText(text, cipherAlphabet) {
    return text
      .split('')
      .map((char) => {
        const index = cipherAlphabet.indexOf(char);
        return index !== -1 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index] : char;
      })
      .join('');
  }
  function KdisplayError(element, message) {
    element.textContent = message;
  }

  function KdisplayKeyword() {
    const keyword = keywordInput.value.toUpperCase();
    const keywordDisplayElement = document.getElementById('keywordDisplay');
    if (!keywordDisplayElement) {
      console.error("Element with id 'keywordDisplay' not found");
      return;
    }
    keywordDisplayElement.textContent = `${keyword}`;
  }

  function KdisplayCipherAlphabet() {
    const cipherAlphabet = KcipherInput.value.toUpperCase().replace(/\s/g, '');
    const cipherAlphabetDisplayElement = document.getElementById(
      'cipherAlphabetDisplay'
    );
    if (!cipherAlphabetDisplayElement) {
      console.error("Element with id 'cipherAlphabetDisplay' not found");
      return;
    }
    cipherAlphabetDisplayElement.textContent = `${cipherAlphabet}`;
  }

  keywordInput.addEventListener('input', function (event) {
    const keywordWithoutSpaces = keywordInput.value.replace(/\s/g, '');

    keywordInput.value = keywordWithoutSpaces;

    KdisplayKeyword();
  });

  keywordInput.addEventListener('keypress', function (event) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  });

  function KdisplayOutput(outputText) {
    const outputDisplayElement = document.getElementById('outputDisplay');
    if (!outputDisplayElement) {
      console.error("Element with id 'outputDisplay' not found");
      return;
    }
    outputDisplayElement.textContent = ` Using the given Cipher Alphabet from the keyword the output is "${outputText}"`;
  }
});

// Function sa images

let myColumnar = document.getElementById('myColumnar');
let columnars = document.getElementById('columnars');
let KKkeyword = document.getElementById('KKkeyword');
let myKeyword = document.getElementById('myKeyword');
let AAafine = document.getElementById('AAafine');
let myAffine = document.getElementById('myAffine');

function openAffine() {
  myAffine.style.display = 'flex';
}

function closeAffine() {
  myAffine.style.display = 'none';
}
function openColumnar() {
  // Check if the event target is an input field or textarea
  if (
    document.activeElement.tagName !== 'INPUT' &&
    document.activeElement.tagName !== 'TEXTAREA'
  ) {
    myColumnar.style.display = 'flex';
  }
}

function closeColumnar() {
  myColumnar.style.display = 'none';
}

function openKeyword() {
  myKeyword.style.display = 'flex';
}

function closeKeyword() {
  myKeyword.style.display = 'none';
}

columnars.addEventListener('click', function (event) {
  event.preventDefault();
  openColumnar();
});

KKkeyword.addEventListener('click', function (event) {
  event.preventDefault();
  openKeyword();
});

AAafine.addEventListener('click', function (event) {
  event.preventDefault();
  openAffine();
});

document.body.addEventListener('click', function (event) {
  // Check if the clicked element is an input field or textarea
  const isInputField =
    event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';

  if (!isInputField && event.target.classList.contains('closeColumnar')) {
    closeColumnar();
  }
});

document.body.addEventListener('click', function (event) {
  // Check if the clicked element is an input field or textarea
  const isInputField =
    event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';

  if (!isInputField && event.target.classList.contains('closeKeyword')) {
    closeKeyword();
  }
});

document.body.addEventListener('click', function (event) {
  // Check if the clicked element is an input field or textarea
  const isInputField =
    event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';

  if (!isInputField && event.target.classList.contains('closeAffine')) {
    closeAffine();
  }
});


// for preloading screen
var loader = document.getElementById("preloading");

window.addEventListener("load", function(load){
  window.removeEventListener("load", load, false);
  this.setTimeout(function(){
    loader.style.display = "none"
  },2000);
},false);

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