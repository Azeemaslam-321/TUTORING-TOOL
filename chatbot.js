const userInput = document.getElementById("user-input");
const chatHistory = document.getElementById("chat-history");
// const chatbotImage = document.getElementById("chatbot-image");

function appendMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);

    // Set the appropriate image based on the sender
    const imageSrc = sender === "bot"
        ? "https://cdn-icons-gif.flaticon.com/12134/12134116.gif"
        : "https://cdn-icons-gif.flaticon.com/11870/11870989.gif";

    const image = document.createElement("img");
    image.src = imageSrc;
    image.height = 30;
    image.width = 30;
    image.alt = `${sender} Image`;

    messageDiv.appendChild(image);

    const span = document.createElement("span");
    span.textContent = `${sender.charAt(0).toUpperCase() + sender.slice(1)}:`;
    messageDiv.appendChild(span);

    const text = document.createElement("p");
    text.textContent = message;
    messageDiv.appendChild(text);

    chatHistory.appendChild(messageDiv);
}
// hello there
const chatbotResponses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a chatbot, but thanks for asking!",
    "services": "We offer a wide range of services. How can I help you with that?",
    "contact": "You can contact us at contact@yourwebsite.com.",
    "how i can search for a course?": "Go to the search box and type the name of the course.",
    "what can you do?": "I can answer questions, provide information, and chat with you. Just ask me anything!",
    "help": "Sure, I can help. What do you need assistance with?",
    "what is your name": "I'm a chatbot.",
    "bye": "Bye! Have a great day!",
};

function generateChatbotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    for (const keyword in chatbotResponses) {
        if (userMessage.includes(keyword)) {
            const response = chatbotResponses[keyword];
            if (Array.isArray(response)) {
                // If it's an array, randomly choose a response
                return response[Math.floor(Math.random() * response.length)];
            } else {
                return response;
            }
        }
    }
    return "I'm sorry, I didn't understand that. Please ask another question.";
}

function handleUserInput() {
    const message = userInput.value;
    if (message.trim() !== "") {
        appendMessage(message, "user");
        userInput.value = "";

        // Simulate a bot response (you can replace this with actual chatbot logic)
        setTimeout(() => {
            const botResponse = generateChatbotResponse(message);
            appendMessage(botResponse, "bot");
        }, 1000);
    }
}

document.getElementById("send-button").addEventListener("click", handleUserInput);                                                              

userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});

// Initial bot message
setTimeout(() => {
    const initialBotMessage = "Hi there! How can I help you?";
    appendMessage(initialBotMessage, "bot");
}, 1000);
