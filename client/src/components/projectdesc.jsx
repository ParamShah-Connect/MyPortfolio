import { useEffect, useRef } from "react";
import "../styles/projectDesc.css";
import { useLocation, useNavigate } from "react-router-dom";

const Projectdesc = () => {
  const location = useLocation();
  const project = location.state;
  const navigate = useNavigate();

  if (!project) {
    useEffect(() => {
      navigate("/");
      console.log(project.detaiedDesc);
    }, [navigate]);

    return null; // Return null or a loading indicator while navigating
  }

  const images = project.images;
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust the scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust the scroll distance
      behavior: "smooth",
    });
  };

  // Prevent page refresh or navigation
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const message = "Refresh leads to loss of data.Are you sure?";
      e.returnValue = message;
      return message; 
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <h1 id="prjTitle">{project.title}</h1>
      <p style={{ margin: "40px 150px" }}>{project.detaiedDesc}</p>
      <div id="technologies">
        <div>
          <h2>Features:</h2>
          {project.features && project.features.length > 0 ? (
            project.features.map((feature, index) => (
              <div key={index}>
                {index + 1}: {feature}
              </div>
            ))
          ) : (
            <p>No features available</p>
          )}
        </div>
        <div>
          <h2>Technologies used:</h2>
          <br />
          <p className="tech">Frontend: {project.frontend}</p>
          <p className="tech">Backend: {project.backend}</p>
          <p className="tech">Database: {project.database}</p>
          <p>Payment Gateway: {project.paymentGateway ? project.paymentGateway : "Not available"}</p>
        </div>
      </div>
      <div id="projectimages-container" style={{ display: "flex", alignItems: "center" }}>
        <button onClick={scrollLeft} className="scroll-btn">⬅</button>
        <div
          id="projectimages"
          ref={scrollContainerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "10px",
          }}
        >
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Project screenshot ${index + 1}`}
              className="project-image"
              style={{ height: "400px", width: "auto", borderRadius: "8px" }}
            />
          ))}
        </div>
        <button onClick={scrollRight} className="scroll-btn">➡</button>
      </div>
      <p id="copyright">© 2024 Param Shah. All rights reserved</p>
    </div>
  );
};

export default Projectdesc;
