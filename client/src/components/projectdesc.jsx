import { useEffect } from "react";
import "../styles/projectDesc.css";
import { useLocation, useNavigate } from "react-router-dom";

const Projectdesc = () => {
  const location = useLocation();
  const project = location.state;
  const navigate = useNavigate();

  if (!project) {
    useEffect(() => {
      navigate("/");
    }, [navigate]);

    return null; 
  }

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const message = "The data will not be visible. Are you sure you want to reload?";
      e.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const images = project.images;

  return (
    <div className="projectdesc-container">
      <h1 className="project-title">{project.title}</h1>
      <p className="project-description">{project.detaiedDesc}</p>

      <div className="project-details">
        <div className="features">
          <h2>Features:</h2>
          {project.features && project.features.length > 0 ? (
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p>No features available</p>
          )}
        </div>

        <div className="technologies">
          <h2>Technologies Used:</h2>
          <p>Frontend: {project.frontend}</p>
          <p>Backend: {project.backend}</p>
          <p>Database: {project.database}</p>
          <p>Payment Gateway: {project.paymentGateway || "Not available"}</p>
        </div>
      </div>

      <div className="project-images">
        {images.map((imgSrc, index) => (
          <div key={index} className="image-wrapper">
            <img src={imgSrc} alt={`Project screenshot ${index + 1}`} className="project-image" />
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© 2024 Param Shah. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Projectdesc;
