import { useState } from 'react'
import NewPost from './NewPost.jsx'
import classes from './PostsList.module.css'
import { Post } from './Post.jsx'
import Modal from './modal.jsx'
const PostsList = ()=> {
    const [isVisible,setIsVisible] = useState(true)
    const [enteredBody,setEnteredBodyChange]=useState('')
    const [enteredAuthor,setEnteredAuthorChange]=useState('')

    function bodyChangeHandler(event){
        setEnteredBodyChange(event.target.value)
    }
    function authorChangeHandler(event){
        setEnteredAuthorChange(event.target.value)
    }

    function isVisibleHandler(event){
        setIsVisible(false)
    }

    let modal;
    if(isVisible){
        modal = <Modal visibleStatus={isVisibleHandler}>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
        </Modal>
    }
    return(
         <>
            {modal}
            <ul className ={classes.posts} >
                <Post  author = {enteredAuthor} body = {enteredBody}/>
                <Post  author = "shafayat" body = "o have a cat"/>
            </ul>
        </>
    )
}
export {PostsList}