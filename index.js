const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/courses.json');
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Course API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '04') {
        res.send(courses);
    }
    else {
        const category_courses = courses.filter(course => course.category_id === id);
        res.send(category_courses);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})


app.listen(port, () => {
    console.log('e learning server running on port', port);
});