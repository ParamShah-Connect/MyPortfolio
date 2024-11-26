import "../styles/lastdiv.css";

export const Lastdiv = () => {
  const handleFacebookClick = (e) => {
    e.preventDefault();  // Prevent the default action (navigation)
    alert("Facebook is unavailable as of now.");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <a href="#" className="fa fa-facebook" onClick={handleFacebookClick}></a>
        <a href="https://www.instagram.com/paramm_w" className="fa fa-instagram"></a>
        <a href="https://x.com/ParamShah166136" className="fa fa-twitter"></a>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="https://github.com/paramshah-connect" className="fa fa-github"></a>
        <a href="https://www.linkedin.com/in/param-shah-285473277/" className="fa fa-linkedin"></a>
      </div>


      <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
        <p style={{ color: "#888", fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} Param Shah. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Lastdiv;
