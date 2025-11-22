import { useState,useEffect } from 'react'
import NewPost from './NewPost.jsx'
import classes from './PostsList.module.css'
import { Post } from './Post.jsx'
import Modal from './modal.jsx'
const PostsList = ({isPosting,visibleStatusHandler})=> {    
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        async function  fetchAllPosts(){
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json()
            setPosts(resData.posts)
        }
        fetchAllPosts()
    },[])
    function addPostHandler(postData){
        fetch('http://localhost:8080/posts',{
            method:'POST',
            body:JSON.stringify(postData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        setPosts((perviousData)=>[postData, ...perviousData])
    }
    let modal;
    if(isPosting){
        modal = <Modal visibleStatus={visibleStatusHandler}>
                    <NewPost onCancel={visibleStatusHandler} onAddPost={addPostHandler}/>
                </Modal>
    }
    return(
         <>
            {modal}
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