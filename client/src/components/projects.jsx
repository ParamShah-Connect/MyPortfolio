import "../styles/projects.css";

export const Projects = () => {
  const projectList = [
    {
      title: "Employee Management",
      description: `This project is a functional web application created using Node.js, React, and SQL. It allows users to perform basic tasks like signing up, logging in, and managing data. 
      It provides an interface where users can add, edit, view, and delete records (like tasks, products, or any custom data).`,
      imageSrc: "src/projects/employee-management.png",
      githubLink: "https://github.com/nilapshah1984/Trainee/tree/master/employee_management",
    },
    {
      title: "React E-commerce",
      description: `An e-commerce application built with React and Node.js that allows users to browse products, add them to a cart, and place orders. Features include dynamic filtering and user authentication.`,
      imageSrc: "src/projects/react-ecommerce.png",
      githubLink: "https://github.com/ParamShah-Connect/udemy_clone/",
    },
    {
      title: "Gym Fit",
      description: `A fitness website that offers workout plans and tracking features. Built with React, Node.js, and SQL, it allows users to manage their fitness goals and access a variety of workouts.`,
      imageSrc: "src/projects/gym_fit.png",
      githubLink: "https://github.com/ParamShah-Connect/de_sem_6",
    },
  ];

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
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
