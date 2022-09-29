import "./comments.css"
import CommentsList from "./CommentsList";
function Comments(){

    return (
        <div className="comments-sec">
            <h2>Leave us your comment about our movies</h2>
            <div>
            <label>
                Name
                <input placeholder="Enter your Name"></input>
            </label>
            </div>
            <div>
            <label>
                Favorite Movie
                <input placeholder="Enter Favorite movie"></input>
            </label>
            </div>
            <div>
            <label>
                Comment
                <textarea type="textarea" placeholder="Leave a comment here" ></textarea>
            </label>
            </div>
            <div>
                <CommentsList />
            </div>
        </div>
    )
}
export default Comments;