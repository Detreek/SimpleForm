import { createContext, useContext } from "react";
export interface ToastData {
  label: string;
  title: string;
  color: string;
}
const toastContext = createContext<(a: ToastData) => void>(() => {});
export const ToastProvider = toastContext.Provider;
export function useToastContext() {
  return useContext(toastContext);
}
