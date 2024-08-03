import Button from '../Button/Button';
import styles from './description.module.css'

function Description() {
    return(
        <>
        <div className={styles['container']}>
            <div>
                <img className={styles['image']} src="image/programming-1080x841.png"></img>
            </div>
            <div className={styles['second-child-container']}>
                <h2>In The Need Of Custom Data?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque quia doloribus aliquid aperiam sunt omnis repudiandae suscipit animi voluptates pariatur praesentium laudantium accusantium alias magnam ex eaque placeat, tenetur quod. Autem ea sed praesentium commodi magni? Debitis dolorem quas ullam dolores optio nesciunt possimus vitae libero illo! Et doloribus, est facilis quidem voluptatum quibusdam earum laboriosam reiciendis inventore labore!! Et doloribus, est facilis quidem voluptatum quibusdam earum laboriosam reiciendis inventore labore!! Et doloribus, est facilis quidem voluptatum quibusdam earum laboriosam reiciendis inventore labore!</p>
                <Button>Just Glink It</Button>
            </div>
        </div>
        
        </>
    );
}
export default Description;