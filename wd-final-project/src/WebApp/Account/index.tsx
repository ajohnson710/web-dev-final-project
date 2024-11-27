import { Navigate, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";

export default function Profile() {
    return (
      <div>
        <Routes>
                <Route path="/"
                       element={<Navigate to="/Account/Login" />} />
                <Route path="/Login" element={<LogIn />} />
        </Routes>
    </div>
    );
}