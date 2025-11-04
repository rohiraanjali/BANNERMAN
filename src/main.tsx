import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import { Bannerman } from "./screens/Bannerman";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Bannerman />
  </StrictMode>,
);

