import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// fake comments
// hàm phát đi
function emitComment(id: number) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment cua lesson ${id}`,
      }),
    );
  }, 2000); //hai giây sẽ phát 1 sự kiện đi ở phạm vi globle
}
emitComment(1)
emitComment(2)
emitComment(3)
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
