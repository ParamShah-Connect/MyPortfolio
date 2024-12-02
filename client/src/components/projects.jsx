import "../styles/projects.css";
import { useNavigate } from "react-router-dom";


export const Projects = () => {
  const navigate=useNavigate();

  const projectList = [
    {
      title: "EMPLOYEE MANAGEMENT",
      description: `This project is a functional web application created using Node.js, React, and SQL. It allows users to perform basic tasks like signing up, logging in, and managing data.`,
      detaiedDesc:"This project is a fully functional web application developed using Node.js, React, and SQL. It allows users to easily sign up, log in, and manage their data with a secure and intuitive interface. The application supports CRUD operations, enabling users to create, read, update, and delete their data. It integrates an SQL database to store and retrieve user information efficiently, ensuring fast access to records. The frontend is built with React and styled using Material-UI, providing a responsive and user-friendly design across devices. Additionally, the application features role-based access control, ensuring that users with different roles can access specific functionalities based on their permissions. This web app provides a seamless experience for managing personal or professional data securely.",
      technologiesUsed: ["Node.js", "React", "SQL"],
      type: "Full-stack application",
      frontend: "React with Material-UI",
      backend: "Node.js with Express.js",
      database: "MySQL",
      features: [
        "Role-based access for managers and employees",
        "CRUD operations for tasks, projects, and employee data",
        "Intuitive UI for task and employee management",
        "Secure authentication for users",
      ],
      purpose: "To streamline employee and task management for organizations",
      imageSrc: "https://mrsoni.me/ZfVZ/",
      githubLink: "https://github.com/nilapshah1984/Trainee/tree/master/employee_management",
      urlname: "employeemanagement",
      images:[
        "https://mrsoni.me/P5Ph",
         "https://mrsoni.me/7nVj",
        "https://mrsoni.me/bCnj",
        "https://mrsoni.me/qPMM"
      ]
    },
    {
      title: "EduMarket",
      description: `An e-commerce application built with React and Node.js that allows users to browse products, add them to a cart, and place orders.`,
      detaiedDesc:"An e-commerce platform developed using React for the front-end and Node.js for the back-end. This web application allows users to browse through various products, view detailed information, add items to their shopping cart, and proceed with placing orders. The system is designed to offer a seamless shopping experience, including features like user authentication, real-time cart updates, and order management. Additionally, the platform supports easy product navigation and efficient payment processing, making it a robust solution for online shopping.",
      technologiesUsed: ["React", "Node.js", "MongoDB"],
      type: "Full-stack application",
      frontend: "React with Redux for state management",
      backend: "Node.js with Express.js",
      database: "MongoDB",
      features: [
        "Product listing with advanced filtering and search capabilities",
        "User authentication (login and signup)",
        "Shopping cart with real-time updates",
        "Order history and user profiles",
        "Admin panel for managing products and orders",
      ],
      purpose: "To provide a seamless online shopping experience for users",
      imageSrc: "https://mrsoni.me/kLIZ/",
      githubLink: "https://github.com/ParamShah-Connect/udemy_clone/",
      urlname: "reactecommerce",
      images:[
        "https://mrsoni.me/1SCl",
        "https://mrsoni.me/4LwU",
        "https://mrsoni.me/oW3k",
        "https://mrsoni.me/ohuI"
      ]
      ,
      paymentGateway:"Braintree",
    },
    {
      title: "FIT-BIT GYM",
      description: `A fitness website that offers workout plans and tracking features. Built with React, Node.js, and SQL, it allows users to manage their fitness goals and access a variety of workouts.`,
      detaiedDesc:"This project is a comprehensive fitness website built using React, Node.js, and SQL, providing users with an interactive platform to manage their fitness journeys. It offers personalized workout plans, progress tracking, and goal-setting features, helping users stay motivated and achieve their fitness objectives. With a sleek, user-friendly interface, users can browse through various workout routines, log their progress, and set fitness goals. The backend uses SQL for efficient data management, ensuring smooth user experience and real-time updates. Whether you're looking to track daily workouts or follow structured plans, this platform offers a seamless solution for fitness enthusiasts of all levels.",
      technologiesUsed: ["React", "Node.js", "SQL"],
      type: "Full-stack application",
      frontend: "React with Bootstrap",
      backend: "Node.js with Express.js",
      database: "PostgreSQL",
      features: [
        "Interactive dashboard for workout tracking",
        "Workout library with filters based on difficulty and focus areas",
        "Goal setting and progress tracking functionality",
        "User-friendly interface for browsing and managing workouts",
      ],
      purpose: "To help users achieve their fitness goals with personalized tools and plans",
      imageSrc: "https://mrsoni.me/m2wL/",
      githubLink: "https://github.com/ParamShah-Connect/de_sem_6",
      urlname: "gymfit",
      images:[
        "https://mrsoni.me/LUz1",
        "https://mrsoni.me/VUry",
        "https://mrsoni.me/KXc4",
        "https://mrsoni.me/c6gh"
      ]
    },
  ];
    
  function goToDescription(project) {
    navigate(`/projects/${project.urlname}`, {
      state: { ...project }, 
    });
  }
  
  return (
    <>
      <h1 style={{ marginTop: "200px", textAlign: "center" }}>My Projects:</h1>
      {projectList.map((project, index) => (
        <div className="projects" key={index}>
          <img src={project.imageSrc} alt={`${project.title} screenshot`} className="prjimg1" />
          <div style={{ textAlign: "center", margin: "100px" }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              style={{
                textDecoration: "none",
                padding: "10px 20px",
                color: "white",
                backgroundColor: "#333",
                borderRadius: "8px",
                fontWeight: "bold",
                display: "inline-block",
                transition: "all 0.3s ease",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
            >
              GitHub Link
            </a>
            <button onClick={()=>goToDescription(project)}>Description</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
