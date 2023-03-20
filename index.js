async function detectLanguage(text) {
    const apiKey = '6a5414e030c4d822b94fdda6ee2f73052e4c8153b5e85cc9ceae292b'; // Replace with your Text Razor API key
    const response = await fetch(`https://api.textrazor.com/v1/language?text=${encodeURIComponent(text)}`, {
      headers: {
        'X-TextRazor-Key': apiKey
      }
    });
    const data = await response.json();
    return data.language.isoCode;
  }
  
  const inputForm = document.getElementById('input-form');
  const inputField = document.getElementById('input-field');
  const resultContainer = document.getElementById('result-container');
  
  inputForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = inputField.value.trim();
    if (input === '') {
      resultContainer.innerHTML = 'Please enter some text';
    } else {
      try {
        const languageCode = await detectLanguage(input);
        resultContainer.innerHTML = `Detected language code: ${languageCode}`;
      } catch (error) {
        console.error(error);
        resultContainer.innerHTML = 'Error detecting language';
      }
    }
  });
  