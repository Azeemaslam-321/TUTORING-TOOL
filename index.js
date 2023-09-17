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
const chatbotImage = document.getElementById("chatbot-image");//
// JavaScript for your chatbot



// JavaScript code for search.html (Search Page)
document.addEventListener('DOMContentLoaded', function () {
    const errorMessage = document.getElementById('error-message'); 

    document.getElementById('search-button').addEventListener('click', function () {
        const searchTopic = document.getElementById('search-topic').value;
        if (searchTopic === "") {
            errorMessage.textContent = "Please enter a topic"; 
            return;
        } else {
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
                teacherList.innerHTML = '<p style="color: red; text-align: center;font-size:20px;margin-bottom:15px">No teachers found for this topic.</p>';
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
                            <p>Contact: ${teacher.email}</p>
                            <p>Phone: ${teacher.phone}</p>
                            <!-- Add more teacher details here -->
                        </div>
                    `;
                    teacherList.appendChild(teacherCard);
                });
            }   
        }
    });
});

// Add this function to toggle teacher details
function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.classList.toggle('show-details');
}
