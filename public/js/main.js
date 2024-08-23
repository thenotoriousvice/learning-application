// JavaScript to handle video and quiz interactions

// Function to load video and quiz
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('training-video');
    const quizForm = document.getElementById('quiz-form');
    const message = document.getElementById('message');

    // Load video source dynamically (you can replace the url with a dynamic one from the server)
    video.src = '/videos/Video1.mp4';

    // Handle quiz form submission
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const answer = document.getElementById('answer').value;
        
        // Check the answer (replace with actual logic)
        if (answer === '4') {
            message.textContent = "Correct! You've completed the module.";
        } else {
            message.textContent = "Incorrect! Please try again.";
        }
    });
});
