import "./comments.css"
import React,{useState} from "react";
function Comments(){
const [name,setName]=useState("")
const [favoriteMovie,setFavoriteMovie]=useState("")
const [comment,setComent]=useState("")
const [post,setPost]=useState("")
function handleSubmit(e){
e.preventDefault()
setPost([name,favoriteMovie,comment])
}
    return (
        <div className="comments-sec">
            <h2>Leave us your comment about our movies</h2>
            <form onSubmit={handleSubmit} >
            <div>
            <label>
                Name
                <input 
                name="name"
                placeholder="Enter your Name"
                value={name} 
                onChange={(e)=>{setName(e.target.value)}}></input>
            </label>
            </div>
            <div>
            <label>
                Favorite Movie
                <input 
                placeholder="Enter Favorite movie" 
                value={favoriteMovie}
                onChange={(e)=>{setFavoriteMovie(e.target.value)}}></input>
            </label>
            </div>
            <div>
            <label>
                Comment
                <textarea type="textarea" 
                placeholder="Leave a comment here" 
                value={comment} 
                onChange={(e)=>{setComent(e.target.value)}}></textarea>
            </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
            <div>
        <h2>Our Customers comments</h2>
        <div>
            <h3>{post[0]}</h3>
            <h4>{post[1]}</h4>
            <p>{post[2]}</p>
        </div>
    </div>
        </div>
    )
}
export default Comments;