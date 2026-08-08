// import rocket from "../../../../public/roket.png";
import { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import { useToastContext } from "../../../contexts/toasterContext";
export default function Form() {
  const [LastName, setLastName] = useState<string | null>(null);
  const [FirstName, setFirstName] = useState<string | null>(null);
  const [Email, setEmail] = useState<string | null>(null);
  const [PhoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [Message, setMessage] = useState<string | null>(null);
  const showToast = useToastContext();
  const sendForm = () => {
    if (!FirstName || !LastName) {
      showToast({
        label: "Error",
        title: "Last Name or First Name is null",
        color: "#763AF5",
      });
    }
    if (!PhoneNumber || !Email) {
      showToast({
        label: "Error",
        title: "PhoneNumber or Email is null",
        color: "#763AF5",
      });
    }

    const data = JSON.stringify({
      LastName,
      FirstName,
      Email,
      PhoneNumber,
      Message,
    });
    axios.post("formGetter", data);
  };
  return (
    <div className={styles.main}>
      <div className={styles.main_text_conteiner}>
        <h1 className={styles.heading}>Let's connect constellations</h1>
        <span className={styles.paragraph}>
          Let's align our constellations! Reach out and let the
          <br /> magic of collaboration illuminate our skies.
        </span>
      </div>
      {/* <form> */}
      <div className={styles.inicials}>
        <input
          className={styles.inputs}
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value.toString());
          }}
        ></input>
        <input
          className={styles.inputs}
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value.toString());
          }}
        ></input>
      </div>
      <input
        className={styles.contactData}
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value.toString());
        }}
      ></input>
      <input
        className={styles.contactData}
        type="tel"
        pattern="[0-9]{10,15}"
        required
        placeholder="Phone Number"
        onChange={(e) => {
          setPhoneNumber(e.target.value.toString());
        }}
      ></input>
      <input
        className={styles.message}
        placeholder="Message"
        onChange={(e) => {
          setMessage(e.target.value.toString());
        }}
      ></input>

      <button className={styles.sender} onClick={sendForm}>
        Send it to the moon
        {/* <img src={rocket} className={styles.rocket} /> */}
      </button>
      {/* </form> */}
    </div>
  );
}
