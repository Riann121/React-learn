import classes from './NewPost.module.css';
import Modal from '../components/modal';
import { Form, Link } from 'react-router-dom';
function NewPost() {


  return (
    <Modal>
    <Form method='POST' className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name"  required />
      </p>
      <p className={classes.actions}>
        <Link to = ".." type='button'>Cancel</Link>
        <button>Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;
export function action(){
  fetch('http://localhost:8080/posts',{
            method:'POST',
            body:JSON.stringify(postData),
            headers:{
                'Content-Type':'application/json'
            }
        })
}