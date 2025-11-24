import classes from './PostsList.module.css'
import { Post } from './Post.jsx'
import { useLoaderData } from 'react-router-dom'
const PostsList = ()=> {   
    const posts = useLoaderData() 

    useEffect(()=>{
        async function  fetchAllPosts(){
            
            setPosts(resData.posts)
        }
        fetchAllPosts()
    },[])
    return(
         <>
            {posts.length > 0 &&(
            <ul className ={classes.posts} >
                {posts.map((post) => <Post key={post.body} author = {post.author} body = {post.body}/>)} 
                
            </ul>
            )}
            {posts.length === 0 &&(
                <div style={{textAlign:'center', color:'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}
export {PostsList}