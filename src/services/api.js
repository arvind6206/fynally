// -------------------- STUDENT RESOURCES --------------------
export const fetchResources = async () => [
  {
    id: 1,
    title: "FreeCodeCamp: Full Web Development",
    category: "Web Development",
    link: "https://www.freecodecamp.org/",
    image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    title: "MDN Web Docs",
    category: "Web Development",
    link: "https://developer.mozilla.org/",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 3,
    title: "Khan Academy – Computer Science",
    category: "Computer Science",
    link: "https://www.khanacademy.org/computing/computer-science",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 4,
    title: "Coursera Free Courses",
    category: "Learning Platforms",
    link: "https://www.coursera.org/courses?query=free",
    image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 5,
    title: "EdX Free Courses",
    category: "Learning Platforms",
    link: "https://www.edx.org/course",
    image: "https://images.unsplash.com/photo-1600195077077-7c815f540a3d?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  // ... duplicate or extend until 50+ resources
];

// -------------------- LEARNING COURSES --------------------
export const fetchLearning = async () => [
  {
    id: 1,
    title: "React Basics",
    category: "Frontend",
    docLink: "https://reactjs.org/docs/getting-started.html",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "JavaScript ES6 Tutorial",
    category: "Frontend",
    docLink: "https://www.freecodecamp.org/news/learn-es6/",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Node.js Guide",
    category: "Backend",
    docLink: "https://nodejs.org/en/docs/guides/",
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "MongoDB Basics",
    category: "Backend",
    docLink: "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
    image: "https://images.unsplash.com/photo-1658204238967-3a81a063d162?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Python for Beginners",
    category: "Programming",
    docLink: "https://www.python.org/about/gettingstarted/",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // ... add more courses as needed
];

// -------------------- INTERNSHIPS --------------------
export const fetchInternships = async () => [
  {
    id: 1,
    company: "Google",
    role: "Frontend Intern",
    link: "https://careers.google.com/jobs/results/",
    image: "https://source.unsplash.com/400x300/?google,office",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Backend Intern",
    link: "https://careers.microsoft.com/",
    image: "https://source.unsplash.com/400x300/?microsoft,office",
  },
  {
    id: 3,
    company: "Amazon",
    role: "Software Developer Intern",
    link: "https://www.amazon.jobs/en/",
    image: "https://source.unsplash.com/400x300/?amazon,office",
  },
  {
    id: 4,
    company: "TCS",
    role: "Java Intern",
    link: "https://www.tcs.com/careers",
    image: "https://source.unsplash.com/400x300/?tcs,office",
  },
  {
    id: 5,
    company: "Infosys",
    role: "Fullstack Intern",
    link: "https://www.infosys.com/careers/",
    image: "https://source.unsplash.com/400x300/?infosys,office",
  },
  // ... add more internships
];

// -------------------- EMPLOYMENT / JOBS --------------------
export const fetchEmployment = async () => [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    link: "https://careers.google.com/jobs/results/",
    image: "https://source.unsplash.com/400x300/?google,office",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Backend Developer",
    link: "https://careers.microsoft.com/",
    image: "https://source.unsplash.com/400x300/?microsoft,office",
  },
  {
    id: 3,
    company: "Amazon",
    role: "Software Engineer",
    link: "https://www.amazon.jobs/en/",
    image: "https://source.unsplash.com/400x300/?amazon,office",
  },
  {
    id: 4,
    company: "TCS",
    role: "Java Developer",
    link: "https://www.tcs.com/careers",
    image: "https://source.unsplash.com/400x300/?tcs,office",
  },
  {
    id: 5,
    company: "Infosys",
    role: "Fullstack Developer",
    link: "https://www.infosys.com/careers/",
    image: "https://source.unsplash.com/400x300/?infosys,office",
  },
  // ... add more jobs
];
