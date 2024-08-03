import styles from './Button.module.css'
function Button(props) {
    let {children}=props;
    return(
        <>
        <button>{children}</button>
        </>
    );
}
export default Button;