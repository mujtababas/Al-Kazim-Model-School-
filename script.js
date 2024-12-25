// Smooth scroll to top on button click
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Scroll to top button visibility
window.onscroll = function() {
    var scrollBtn = document.getElementById("scroll-to-top-btn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}
// Change background color on scroll
window.onscroll = function() {
    var header = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
// Add fade-in effect on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
// Example using a simple calendar API
document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar-widget');
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    
    // Placeholder for calendar integration (using any JavaScript calendar library)
    calendar.innerHTML = `<p>Displaying events for ${month + 1}/${year}</p>`;
});
// JavaScript for Live Chat
document.getElementById('chat-btn').addEventListener('click', function() {
    document.getElementById('chat-window').style.display = 'block';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-window').style.display = 'none';
});

document.getElementById('send-message').addEventListener('click', function() {
    let message = document.getElementById('chat-input').value;
    if (message) {
        let chatMessages = document.getElementById('chat-messages');
        let newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        document.getElementById('chat-input').value = '';
    }
});
// JavaScript to toggle languages
document.getElementById('language-select').addEventListener('change', function() {
    let language = this.value;
    if (language === 'en') {
        document.body.classList.remove('urdu');
    } else {
        document.body.classList.add('urdu');
    }
});
// JavaScript for Quiz Section
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let result = '';
    let answer = document.querySelector('input[name="question1"]:checked');
    if (answer) {
        result = `You selected: ${answer.value}`;
    } else {
        result = 'Please select an answer.';
    }
    document.getElementById('quiz-result').textContent = result;
});
// JavaScript for Student Portal
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('submit-login').addEventListener('click', function() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Dummy authentication logic
    if (email === 'student@school.com' && password === 'password123') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('student-dashboard').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
});
// JavaScript for Fee Payment (mock)
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    alert(`Payment of ${amount} has been successfully processed.`);
});
// JavaScript for Event Registration
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let selectedEvent = document.getElementById('event').value;
    alert(`You have successfully registered for ${selectedEvent}.`);
});
// JavaScript for Alumni Form
document.getElementById('alumni-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('alumni-name').value;
    let email = document.getElementById('alumni-email').value;
    let achievements = document.getElementById('alumni-achievements').value;
    alert(`Thank you, ${name}! Your achievements have been submitted.`);
});
// JavaScript to handle contact form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.querySelector('[name="name"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="message"]').value;

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
});
