import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle SPA redirect from 404.html
const redirectPath = sessionStorage.getItem('spa-redirect');
if (redirectPath) {
  sessionStorage.removeItem('spa-redirect');
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById("root")!).render(<App />);
