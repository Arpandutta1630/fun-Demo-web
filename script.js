
function showImages() {
    // Redirect to the new page when "YES" is clicked
    window.location.href = 'viewImages.html';
    
}

function breakHeart() {
    // Implement the breakHeart functionality if needed
    const heart = document.getElementById('heart');

    // Apply breakHeart animation to the heart
    heart.style.animation = 'breakHeart 0.6s linear';
    heart.innerHTML = '💔'; // Change heart to black after it breaks

    // Delay the change to black heart after 2 seconds
    setTimeout(() => {
        heart.style.animation = ''; // Reset animation
        heart.innerHTML = '🖤'; // Ensure the heart stays black
    }, 2000);
}


// Reset the heart animation and content when the animation ends
document.addEventListener('animationend', function (event) {
    const heart = document.getElementById('heart');

    if (event.animationName === 'breakHeart') {
        // Reset heart animation and content
        heart.style.animation = '';
        heart.innerHTML = '❤️';
    }
    
});

