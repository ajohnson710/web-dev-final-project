import { Link } from "react-router-dom";

const post = { image: "", name: "My first post", description: "This is an example post"}

export default function ExplorePage() {
    return(
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-explore-title">Explore</h1> <hr />
            <h2 id="wd-explore-recents-posts">Recent Posts</h2> <hr />
            <div id="wd-explore-posts" className="row"></div>
                <div id="wd-dashboard-courses" className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link to={{/* Fill later*/}}
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <img src={post.image} width="100%" height={160} />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                {post.name} </h5>
                                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                {post.description} </p>
                            
                            </div>
                        </Link>
                    </div>
                </div>
        </div> 
      </div>
    </div>
    );
}