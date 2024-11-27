import { Link } from "react-router-dom";

export default function WebAppNavigation() {

  return (
    <div 
      id="wd-webapp-navigation" 
      className="navbar navbar-expand-lg navbar-dark bg-black fixed-top" 
      style={{ height: 150 }}>
        <div className="container-fluid d-flex flex-column align-items-start">
        {/* Website Name */}
        <div className="mb-3">
          <h1 className="text-white">Web App</h1>
        </div>
        {/* Buttons */}
        <div className="d-flex align-items-center w-100">
          {/* Left-aligned buttons */}
          <div className="d-flex gap-3">
            <Link to="/Home">
                <button className="btn btn-outline-light">Home</button>
            </Link>
            <button className="btn btn-outline-light">Search</button>
            <Link to="/Explore">
            <button className="btn btn-outline-light">Explore</button>
            </Link>
            <button className="btn btn-outline-light">Following</button>
          </div>
          {/* Right-aligned button */}
          <Link to="/Account" className="ms-auto">
            <button className="btn btn-outline-light">Login</button>
          </Link>
        </div>
      </div>
    </div>

);
}