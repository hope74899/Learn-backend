import express from 'express';
import session from 'express-session'; // Add express-session for session management
import connect from './index.js';
import { Student } from './models/index.js';
import loginrouter from './routes/index.js'

const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());

// login and signup routes
app.use(loginrouter);

// Middleware for session handling
app.use(session({
    secret: 'your-secret-key', // Replace with your secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to false for HTTP
}));


// Endpoint to get all student records
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).send('Error fetching students: ' + error.message);
    }
});

// Endpoint to create a new student record
app.post('/api/create', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send('Error creating student: ' + error.message);
    }
});

// Endpoint to set search ID in session
app.post('/api/search', (req, res) => {
    try {
        const searchid = req.body.regNo;
        req.session.searchid = searchid;
        console.log('Search ID set in session:', req.session.searchid);
        res.status(200).send('Search ID set successfully.');
    } catch (error) {
        res.status(400).send('Error while setting search ID: ' + error.message);
    }
});

// Endpoint to fetch students based on search ID from session
app.get('/api/uad', async (req, res) => {
    try {
        const searchid = req.session.searchid;
        if (!searchid) {
            return res.status(400).send('No search ID found in session');
        }
        const student = await Student.findOne({ regNo: searchid });
        res.json(student);
    } catch (error) {
        res.status(500).send('Error fetching students: ' + error.message);
    }
});

//Update root
app.put('/api/uad', async (req, res) => {
    let { regNo, name, department, degree, semester } = req.body;
    try {
        const student = await Student.findOneAndUpdate(
            { regNo },
            { name, degree, department, semester },
            { runValidators: true, new: true }
        );
        if (!student) {
            console.log('Student not found');
            return res.status(404).send('Student not found');
        } else {
            console.log('Student information updated successfully', student);
            return res.status(200).send(student);
        }
    } catch (err) {
        console.log('Error updating student:', err);
        return res.status(500).send('Error updating student: ' + err.message);
    }
});

//Delete root

app.delete('/api/uad', async (req, res) => {
    try {
        const searchid = req.session.searchid;
        console.log('Search ID retrieved from session for delete:', searchid);
        if (!searchid) {
            return res.status(400).send('No search ID found in session for delete');
        }
        const student = await Student.findOneAndDelete({ regNo: searchid });
        if (!student) {
            return res.status(404).send('No student found with the given search ID');
        }
        console.log('Student information deleted successfully', student);
        res.status(200).send('Student information deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting student: ' + error.message);
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server on port 3000
const PORT = 3000;
connect.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Connection error:', err);
});
