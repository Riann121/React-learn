import classes from './NewPost.module.css';
function NewPost(prop) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={prop.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={prop.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;