import React from "react";
import Form from "./Components/Form";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.main}>
        <h1 className={styles.main_title}>Get in touch</h1>
        <span className={styles.p}>
          Reach out, and let's create a universe of possibilities together!
        </span>
      </div>
      <div className={styles.form}>
        <Form></Form>
        <div className={styles.pic}>
          <div className={styles.picture_text_group}>
            <span className={styles.picture_text}>
              “Two lunar months revealed Earth's fragile beauty against vast
              <br />
              silence, transforming my view of our place in the universe.
              <br />
            </span>
            <span className={styles.picture_text_author}> Irinel Traista</span>
          </div>
        </div>
        <div className={styles.ellipseOne}></div>
        <div className={styles.ellipseTwo}></div>
        <div className={styles.ellipseThree}></div>
      </div>
    </div>
  );
}
