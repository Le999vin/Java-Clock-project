// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Function to update the clock hands based on the current time
    function updateClock() {
        // Get the current time
        const now = new Date();
        const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Select clock hands elements
        const hourHand = document.querySelector(".hour-hand");
        const minHand = document.querySelector(".min-hand");
        const secondHand = document.querySelector(".second-hand");

        // Calculate rotation angles for each hand
        const hourRotation = 360 * (hours / 12) + 360 * (minutes / 60 / 12);
        const minRotation = 360 * (minutes / 60) + 360 * (seconds / 60 / 60);
        const secondRotation = 360 * (seconds / 60);

        // Apply rotation to hands
        hourHand.style.transform = `rotate(${hourRotation}deg)`;
        minHand.style.transform = `rotate(${minRotation}deg)`;
        secondHand.style.transform = `rotate(${secondRotation}deg)`;
    }

    // Set interval to update the clock every second
    setInterval(updateClock, 1000);

    // Initial call to set the clock to the current time
    updateClock();
})

// Function to add clock numbers dynamically
function addClockNumbers() {
    // Select the clock face element
    let clockFace = document.querySelector(".inner-clock-face");

    // Loop to create and append clock numbers
    for (let i = 1; i <= 12; i++) {
        let number = document.createElement("div");
        number.className = "clock-number";
        number.innerHTML = i;
        clockFace.appendChild(number);

        // Calculate the angle for the number's placement
        let angle = (i - 4) * 30;
        
        // Apply transformation to position the number around the clock face
        number.style.transform = `rotate(${angle}deg) translate(-10%, 100%)`;
    }
}

// Call the function to add clock numbers
addClockNumbers;
