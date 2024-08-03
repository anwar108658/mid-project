import styles from './Card.module.css';
import { AiFillLike } from "react-icons/ai";
function Card() {
    
    return(
        <>
            <div className={styles['card']}>
                <div className={styles['child-card']}>
                < AiFillLike size={40} color='rgb(10,50,50)' />
                <h2>Like</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione repellendus magnam maxime.</p>
                </div>
                <div className={styles['child-card']}>
                < AiFillLike size={40} color='rgb(10,50,50)'/>
                <h2>Mange</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione repellendus magnam maxime.</p>
                </div>
                <div className={styles['child-card']}>
                < AiFillLike size={40} color='rgb(10,50,50)'/>
                <h2>Secure</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione repellendus magnam maxime.</p>
                </div>
                <div className={styles['child-card']}>
                < AiFillLike size={40} color='rgb(10,50,50)' />
                <h2>Fast</h2>
                <p id='hello'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione repellendus magnam maxime.</p>
                </div>
            </div>
        </>
    );
}
export default Card;