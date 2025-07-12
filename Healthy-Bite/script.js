function fetchDataFromBarcode() {
    const barcode = document.getElementById('barcode-input').value;
    if (!barcode) {
        alert('Please enter or scan a barcode.');
        return;
    }
    // Make an API request to your ML model using the barcode
    fetch(`https://your-ml-model-api.com/barcode?code=${barcode}`)
        .then(response => response.json())
        .then(data => showScoreOnSpeedometer(data.score))
        .catch(error => console.error('Error fetching data:', error));
}

function getNutritionScore() {
    const calories = document.getElementById('calories').value;
    const protein = document.getElementById('protein').value;
    // Collect other input values

    // Send nutritional data to your ML model API
    const payload = { calories, protein }; // Add other nutritional data
    fetch('https://your-ml-model-api.com/nutrition-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => showScoreOnSpeedometer(data.score))
    .catch(error => console.error('Error fetching data:', error));
}

function showScoreOnSpeedometer(score) {
    // Use a library like Chart.js to create a speedometer-like gauge
    const ctx = document.getElementById('speedometer').getContext('2d');
    // Simple example of using a library to draw a speedometer
    new Chart(ctx, {
        type: 'gauge',
        data: {
            datasets: [{
                value: score,
                data: [0, 1, 2, 3, 4, 5],
                backgroundColor: ['#ff0000', '#ff9900', '#ffff00', '#ccff33', '#66ff66'],
            }]
        },
        options: {
            needle: {
                length: 60,
                color: '#000'
            },
            valueLabel: {
                formatter: value => value
            }
        }
    });
}

