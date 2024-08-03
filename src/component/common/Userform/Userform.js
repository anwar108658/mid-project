import styles from "./Userform.module.css";
function Userform() {
  return (
    <>
      <div className={styles["body-main-form-container"]}>
        <p id="Contact" className={styles["main-pera"]}>
          Google Maps Rejectd your request. The provided API key is Invalid
        </p>
        <div className={styles["body-child-form-container"]}>
          <div className={styles["form"]}>
            <form action="">
              <h2>Get In Touch</h2>
              <div className={styles["form-control"]}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Email" />
              </div>
              <textarea
                className={styles["form-textarea"]}
                name=""
                id=""
                cols="71"
                rows="5"
                placeholder="Message"
              ></textarea>
              <br></br>
              <button className={styles["form-btn"]}>Send</button>
              <br></br>
              <div className={styles["check"]}>
                <input
                  className={styles["form-input"]}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>By Containing you agree to our Terms And policy</p>
              </div>
            </form>
          </div>
          <div className={styles["form-right"]}>
            <h2>ADDRESS</h2>
            <p>Gulpaalza6/7,Karachi</p>
            <h2>CALL US</h2>
            <p>32558711100000</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Userform;
