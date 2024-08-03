import styles from './Nav.module.css';
import Button from '../Button/Button';
function Nav(){
    return(
        <>
        <div className={styles['nav-container']}>
         <img className={styles['nav-img']} src="image/Glinkimage.png" alt="This is a company Logo"/>
         <ul className={styles['nav-ul']}>
            
            <a href="#home"><li>Home</li></a>
            <a href="#hello"><li>Services</li></a>
            <a href="#about"><li>About Us</li></a>
            <a href="#Contact"><Button><li>Contact</li></Button></a>
         </ul>
         </div>
        </>
    );

}
export default Nav;