// JavaScript for overlay loading effect
window.onload = function () {
    const overlay = document.querySelector('.overlay');

    // Show overlay after 1 second
    setTimeout(() => {
        overlay.classList.add('show');
    }, 1000);

    // Hide overlay after 4 seconds
    setTimeout(() => {
        overlay.classList.remove('show');
    }, 4000);
};

// Simulate live viewer count
function updateLiveViewers() {
    const viewerCountEl = document.getElementById("viewer-count");
    const viewerPercentEl = document.getElementById("viewer-percent");

    // Simulate total possible viewers (change this to a real API later)
    const totalPossibleViewers = 5000;

    // Generate a random number of current live viewers (for simulation)
    const currentViewers = Math.floor(Math.random() * totalPossibleViewers) + 100; // Min 100 viewers

    // Calculate percentage
    const viewerPercentage = ((currentViewers / totalPossibleViewers) * 100).toFixed(2);

    // Update UI
    viewerCountEl.textContent = currentViewers;
    viewerPercentEl.textContent = viewerPercentage;

    // Refresh the count every 5 seconds
    setTimeout(updateLiveViewers, 5000);
}

// Start live viewer count simulation
updateLiveViewers();
