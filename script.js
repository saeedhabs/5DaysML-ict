// script.js

document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').innerText = `Predicted Output: ${data.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
