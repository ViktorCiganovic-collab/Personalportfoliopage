
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;
// Use the MONGO_URI environment variable
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));



// Mongoose model for messages
const msgSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    comment: {type: String, required: true}
});

const Query = mongoose.model('Comment', msgSchema); 

app.post('/submit', async (req, res) => {
console.log(req.body); // Log the incoming data
const { name, email, comment } = req.body;
const newQuery = new Query({ name, email, comment });

try {
await newQuery.save();
return res.status(201).send('<h1>Thanks for your email. I will get back to you.</h1>')
} catch (error) {
return res.status(400).send('Error sending message' + error.message)
}

});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});