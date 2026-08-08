import React from "react";
import type { ToastData } from "../contexts/toasterContext";
import styles from "./Toast.module.css";
export default function Toast(props: ToastData) {
  return (
    <div style={{ backgroundColor: props.color }} className={styles.toast}>
      <span className={styles.label}>{props.label}</span>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}
