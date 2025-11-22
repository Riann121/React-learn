import classes from './Modal.module.css'

function Modal ({children,visibleStatus}){
    return(
        <>
            <div className={classes.backdrop} onClick={visibleStatus}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal