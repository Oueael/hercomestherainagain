//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.addEventListener('DOMContentLoaded', function() {
    let rainInfoDiv = document.getElementById('rainInfo');
    
    // Replace with the actual API URL and parameters you need
    fetch('https://api.rainviewer.com/public/weather-maps.json')
        .then(response => response.json())
        .then(data => {
            // Assuming 'data' contains a boolean indicating rain presence
            let isRaining = data.rain; // This key may differ based on the API response
            rainInfoDiv.innerHTML = isRaining ? "Yes, it's raining." : "No, it's not raining.";
        })
        .catch(error => {
            rainInfoDiv.innerHTML = "Sorry, unable to fetch rain data.";
            console.error('Error fetching rain data:', error);
        });
});
    