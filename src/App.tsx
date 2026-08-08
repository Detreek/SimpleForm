import React, { useState } from "react";
import "./global.css";
import Toast from "./components/Toast";
import { type ToastData, ToastProvider } from "./contexts/toasterContext";
import Contact from "./pages/Contact/Contact";
import styles from "./App.module.css";
export default function App() {
  const [toastSaver, setToastSaver] = useState<ToastData[]>([]);
  const showToast = (a: ToastData) => {
    setToastSaver((prev) => [...prev, a]);

    setTimeout(() => {
      setToastSaver((prev) => prev.filter((item) => item !== a));
    }, 3000);
  };
  return (
    <>
      <ToastProvider value={showToast}>
        <Contact></Contact>
      </ToastProvider>
      <div className={styles.toaster}>
        {toastSaver.map((e) => (
          <Toast title={e.title} label={e.label} color={e.color}></Toast>
        ))}
      </div>
    </>
  );
}
