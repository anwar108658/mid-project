import styles from './Throughbody.module.css'
function Throughbody(params) {
    return(
        <>
         <div className={styles["body-about"]}>
        <div className={styles["body-about-pera"]}>
            <h2>Aboout Us</h2>
            <p>Meet our founders</p>
        </div>
        <div className={styles["body-about-image"]}>
            <div className={styles["body-about-child"]}>
                <img className={styles["body-about-same-image"]} src="./image/foto-drr-4457-400x534.jpg" alt="This is a image"/>
                <h2>Mathais Grunsteidl</h2>
                <p className={styles["body-about-intro-title"]}>Co-Founder/DevOps</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi accusantium voluptate sint exercitationem architecto, optio a perferendis tenetur ullam sequi? Illum aspernatur, facilis omnis consectetur eveniet illo sunt, nisi facere ex excepturi quos ratione dolore voluptas!</p>
            </div>
            <div className={styles["body-about-child"]}>
                <img className={styles["body-about-same-image"]} src="./image/foto-drr-4517-400x534.jpg" alt="This is a image"/>
                <h2>Mathais Grunsteidl</h2>
                <p className={styles["body-about-intro-title"]}>Co-Founder/Project Mangement</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi accusantium voluptate sint exercitationem architecto, optio a perferendis tenetur ullam sequi? Illum aspernatur, facilis omnis consectetur eveniet illo sunt, nisi facere ex excepturi quos ratione dolore voluptas!</p>
            </div>
        </div>
        <div className={styles["body-about-content"]}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error recusandae cupiditate quo nobis fugit, perspiciatis perferendis dolor magnam quos tempore tenetur illo dicta ullam. At, inventore similique? Aliquid perferendis neque atque cumque. Aut, aspernatur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error recusandae cupiditate quo nobis fugit, perspiciatis perferendis dolor magnam quos tempore tenetur illo dicta ullam. At, inventore similique? Aliquid perferendis neque atque cumque. Aut, aspernatur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error recusandae cupiditate quo nobis fugit, perspiciatis perferendis dolor magnam quos tempore tenetur illo dicta ullam. At, inventore similique? Aliquid perferendis neque atque cumque. Aut, aspernatur?</p>
            <div><button>Just glink it <i class="fa-solid fa-arrow-right"></i></button></div>
        </div>
    </div>
        </>
    );
}
export default Throughbody;