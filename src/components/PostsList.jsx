import NewPost from './NewPost.jsx'
import classes from './PostsList.module.css'
import { Post } from './Post.jsx'
const PostsList = ()=> {
    return(
         <>
            <NewPost />
            <ul className ={classes.posts} >
                <Post  author = "rian" body = "dog is my pet"/>
                <Post  author = "shafayat" body = "o have a cat"/>
            </ul>
        </>
    )
}
export {PostsList}