import styles from './peragraph.module.css'

function Peragraph(props) {
   let {children}=props;
    return(
        <>
        <p className={styles['pera']}>{children}</p>
        </>
    );
}
export default Peragraph;