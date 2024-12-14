import "../styles/admin.css";

export const Admin = () => {
  return (
    <>
    <h1 id="adminName">Hey Param</h1>
    <form id="loginForm">

        <input type="email" id="userEmail" placeholder="Enter email"/> <br />
        <input type="password" id="userPassword" placeholder="Enter password"/> <br />
        <input type="submit" value="Submit response" id="submitRes"/>
    </form>
    </>
  )
}

export default Admin;