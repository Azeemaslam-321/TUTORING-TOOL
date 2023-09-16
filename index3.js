// JavaScript code for index3.js
function loadUserProfile() {
    // Simulate loading a user's profile data
    const userProfileData = {
      
        // Add more user profile data here
    };

    const userProfileContainer = document.querySelector('.user-profile');

    // Clear any previous profile information
    userProfileContainer.innerHTML = '';

    // Display user profile information
    for (const key in userProfileData) {
        const detailElement = document.createElement('p');
        detailElement.innerHTML = `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${userProfileData[key]}`;
        userProfileContainer.appendChild(detailElement);
    }
    // Add more profile information elements as needed
}

// Call the loadUserProfile function when the profile page is loaded
window.addEventListener('DOMContentLoaded', function () {
    if (document.URL.includes('profile.html')) {
        // Load user profile when the profile page is loaded
        loadUserProfile();
    }
});

function toggleDetails(button) {
    const details = button.nextElementSibling; // Get the sibling div for details
    details.classList.toggle('show-details'); // Toggle the visibility
}

// JavaScript for responsive navigation menu
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-links');

// Toggle the "active" class on the menu button and menu when clicked
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('active');
    navMenu.classList.toggle('active');
});
