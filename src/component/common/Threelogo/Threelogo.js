import styles from './Threelogo.module.css';
function Threelogo() {
    return(
        <>
    <div className={styles["body-supported-pera"]}>
        <h2>Suported Chains</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, rerum repudiandae possimus suscipit error, eaque debitis inventore exercitationem tempore enim id quo?</p>
    </div>
    <div className={styles["body-content-card-image"]}>
        <div><img src="./image/ethereum-logo-landscape-black-white-240x187.png" alt="This is a image"/></div>
        <div><img src="./image/polygon-white-240x187.png" alt="This is a image"/></div>
        <div><img src="./image/more-white.png-506x394.png" alt="This is a image"/></div>
    </div>
        </>
    );
}
export default Threelogo;