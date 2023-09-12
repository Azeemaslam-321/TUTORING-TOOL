let loggedIn = false; // Initial login status

function login() {
    loggedIn = true;
    // Show content when logged in
    document.getElementById("teacher-list").style.display = "block";
    document.getElementById("logout-link").style.display = "block";
    document.getElementById("login-link").style.display = "none";
}

function logout() {
    loggedIn = false;
    // Hide content when logged out
    document.getElementById("teacher-list").style.display = "none";
    document.getElementById("logout-link").style.display = "none";
    document.getElementById("login-link").style.display = "block";
}

// JavaScript code for search.html (Search Page)
document.getElementById('search-button').addEventListener('click', function () {
    const searchTopic = document.getElementById('search-topic').value;

    // Simulated teacher data (replace this with actual data from your database)
    const teachers = [
        { name: 'Mrs. Shan-e-Fatima', subject: 'Soft Computing', rating: 4.5, description: 'I am an AI teacher with 10 years of experience.' },
        { name: 'Teacher 2', subject: 'Data', rating: 4.2, description: 'I specialize in physics and chemistry.' },
        { name: 'Teacher 3', subject: 'History', rating: 4.8, description: 'I have a passion for ancient civilizations.' },
        // Add more teacher data as needed
    ];

    // Perform a simulated search based on the entered topic
    const searchResults = teachers.filter(teacher => teacher.subject.toLowerCase().includes(searchTopic.toLowerCase()));

    // Update the "teacher-list" section with the search results
    const teacherList = document.getElementById('teacher-list');
    teacherList.innerHTML = ''; // Clear previous results

    if (searchResults.length === 0) {
        teacherList.innerHTML = '<p>No teachers found for this topic.</p>';
    } else {
        searchResults.forEach(teacher => {
            const teacherCard = document.createElement('div');
            teacherCard.classList.add('teacher-card');
            teacherCard.innerHTML = `
                <h3>${teacher.name}</h3>
                <p>Subject: ${teacher.subject}</p>
                <p>Rating: ${teacher.rating}</p>
                <p>${teacher.description}</p>
                <button class="learn-more-button" onclick="toggleDetails(this)">Learn More</button>
                <div class="teacher-details">
                    <p>${teacher.description}</p>
                    <!-- Add more teacher details here -->
                </div>
            `;
            teacherList.appendChild(teacherCard);
        });
    }
});

// JavaScript code for profile.html (Profile Page)
function loadUserProfile() {
    // Simulate loading a user's profile data
    const userProfileData = {
        username: 'JohnDoe',
        email: 'john.doe@email.com',
        // Add more user profile data here
    };

    const userProfileContainer = document.getElementById('user-profile');

    // Clear any previous profile information
    userProfileContainer.innerHTML = '';

    // Display user profile information
    const usernameElement = document.createElement('p');
    usernameElement.textContent = `Username: ${userProfileData.username}`;

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${userProfileData.email}`;

    // Add more profile information elements as needed

    userProfileContainer.appendChild(usernameElement);
    userProfileContainer.appendChild(emailElement);
    // Append additional profile information elements here
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
