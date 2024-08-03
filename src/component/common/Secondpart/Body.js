import styles from './Secondpart.module.css';
import Heading from '../Heading/Heding';
function Body() {
    return(
        <>
        <div className={styles['body-container']}>
            <div className={styles['body-pera']}>
            <Heading>Secured</Heading>
            <p>oracle nodes for your blockchain application</p>
            <img src="image/powered-by-standard-black-resize-180x30.png"></img>
            </div>
            <div><img className={styles['body-img']} src="image/order-2-1080x848.jpg"></img></div>   
        </div>
        </>
    );
}
export default Body;