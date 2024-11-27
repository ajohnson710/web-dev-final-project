import { Navigate, Route, Routes } from "react-router-dom";
import WebAppNavigation from "./Navigation";
import Home from "./Home"
import ExplorePage from "./ExplorePage";
import Account from "./Account";

export default function WebApp() {
    return(
        <div id="wd-webapp">
            <WebAppNavigation />
            <div className="wd-main-content-offset px-3" style={{ paddingTop: "160px" }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="/Home" element={ <Home /> } />
                    <Route path="/Explore" element={ <ExplorePage />} />
                    <Route path="/Account/*" element={ <Account />} />
                </Routes>
                
            </div>
        </div>
    );
}