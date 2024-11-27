import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
    const [credentials, setCredentials] = useState<any>({});
    const navigate = useNavigate();

    const login =  () => {
        navigate("/Home");
    };
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h1 className="text-center mb-4">Log In</h1>
            
                <input defaultValue={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="form-control mb-2" placeholder="username" id="wd-username" />
                <input defaultValue={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
                <button onClick={login} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
                <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
            </div>
        </div>
    );
}