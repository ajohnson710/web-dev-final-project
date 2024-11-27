import ExplorePage from "../ExplorePage";
import PostControls from "./PostControls";

export default function Home() {
    return(
        <div className="d-flex" id="wd-home">
            <div className="flex-fill">
                {<ExplorePage />}
            </div>
            <div className="d-none d-md-block">
                <PostControls />
            </div>
            
        </div>
    );
}