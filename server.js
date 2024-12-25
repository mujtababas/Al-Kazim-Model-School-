// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like images, CSS, JS

// Route for handling contact form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Store or process data as needed (e.g., save to a database)
    console.log(`New message from ${name} (${email}): ${message}`);
    res.json({ success: true, message: 'Your message has been sent successfully!' });
});

// Route for handling event registration
app.post('/register-event', (req, res) => {
    const { event, name, email } = req.body;
    // Process event registration (e.g., save to database)
    console.log(`User registered for ${event}: ${name} (${email})`);
    res.json({ success: true, message: `You have successfully registered for ${event}.` });
});

// Dummy API for Live Chat (could be extended to store messages)
app.post('/chat', (req, res) => {
    const { message, user } = req.body;
    console.log(`Chat message from ${user}: ${message}`);
    res.json({ success: true, reply: "Thank you for your message! We'll get back to you soon." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// Route for login authentication
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Dummy check (In real-world, verify against a database)
    if (email === 'student@school.com' && password === 'password123') {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/akms-school', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for contact form submissions
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Save contact form data
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const newMessage = new Contact({ name, email, message });
    newMessage.save()
        .then(() => res.json({ success: true, message: 'Message saved successfully!' }))
        .catch(err => res.status(500).json({ success: false, message: 'Error saving message' }));
});
