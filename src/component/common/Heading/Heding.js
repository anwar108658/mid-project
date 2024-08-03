import styles from './Heading.module.css'
function Heading(props) {
    let{children}=props
    return(
        <> 
    <h2 className={styles['heading']}>{children}</h2>
    </>
    );
}
export default Heading