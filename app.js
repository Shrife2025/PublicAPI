import express from "express";
import cors from "cors";

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "*",
    })
);


const courses = [
    {
        id: 1,
        poster:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        courseName: "Full Stack Web Development",
        instructor: "Ahmed Hassan",
        startDate: "2026-10-15",
        registrationStatus: "available",
    },

    {
        id: 2,
        poster:
            "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&q=80",
        courseName: "JavaScript Advanced",
        instructor: "Omar Mohamed",
        startDate: "2026-10-20",
        registrationStatus: "available",
    },

    {
        id: 3,
        poster:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
        courseName: "Python for Beginners",
        instructor: "Sara Ahmed",
        startDate: "2026-11-01",
        registrationStatus: "closed",
    },

    {
        id: 4,
        poster:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        courseName: "Cloud Computing & AWS",
        instructor: "Mohamed Ali",
        startDate: "2026-11-10",
        registrationStatus: "available",
    },

    {
        id: 5,
        poster:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        courseName: "Data Analysis with Python",
        instructor: "Mariam Adel",
        startDate: "2026-11-15",
        registrationStatus: "closed",
    },

    {
        id: 6,
        poster:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        courseName: "React.js Masterclass",
        instructor: "Youssef Ibrahim",
        startDate: "2026-11-20",
        registrationStatus: "available",
    },

    {
        id: 7,
        poster:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
        courseName: "UI/UX Design",
        instructor: "Nourhan Khaled",
        startDate: "2026-12-01",
        registrationStatus: "available",
    },

    {
        id: 8,
        poster:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        courseName: "Computer Science Fundamentals",
        instructor: "Mahmoud Samir",
        startDate: "2026-12-10",
        registrationStatus: "closed",
    },
];

app.get("/get-courses", (req, res) => {
    res.status(200).json({
        courses,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});