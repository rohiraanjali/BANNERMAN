import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import { Bannermen } from "./screens/Bannerman";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Bannermen />
  </StrictMode>,
);

