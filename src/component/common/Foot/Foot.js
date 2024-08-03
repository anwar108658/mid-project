import styles from './Foot.module.css';
function Foot() {
    return(
        <>
         <footer>
        <div>
            <img src="./image/accent1-transparent-128x128.png" alt="This is a image"/>
        </div>
        <div>
            <h2>Address</h2>
            <p><i class="fa-solid fa-thumbs-up"></i> Huptas pltat /67323 new karachi pakistan</p>
            <p><i class="fa-solid fa-thumbs-up"></i> 0255522222222</p>
            <p><i class="fa-solid fa-thumbs-up"></i> @gmail.com</p>
        </div>
        <div>
            <h2>Links</h2>
            <p><i class="fa-solid fa-arrow-right"></i> Huptas pltat</p>
            <p><i class="fa-solid fa-arrow-right"></i> 0255522222222</p>
            <p><i class="fa-solid fa-arrow-right"></i> @gmail.com</p>
        </div>
        <div>
            <h2>Links</h2>
            <p><i class="fa-solid fa-arrow-right"></i> Huptas pltat</p>
            <p><i class="fa-solid fa-arrow-right"></i> 0255522222222</p>
            <p><i class="fa-solid fa-arrow-right"></i> @gmail.com</p>
        </div>
        
    </footer>
    <div id="about" className={styles["footer-pera"]}><p>All Right Reserved 2002 Glink</p></div>

        </>
    );
}
export default Foot