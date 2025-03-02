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
