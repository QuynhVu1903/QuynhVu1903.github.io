

import { useState } from "react";
import Content from "./components/learn/Content";
import ResizeWindow from "./components/learn/ResizeWindow";
import Timers from "./components/learn/Timers";
import CleanUpWithAvatar from "./components/learn/CleanUpWithAvatar";
import CommentBox from "./components/realTime/CommentBox";


export type Person = {
  address: string;
  country: string;
};
// export const data: Person = {
//   address: "Hanoi",
//   country: "Vietnam"
// }

const App = () => {

  const [show, setShow] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showFile, setShowFile] = useState(false);


  return (
    <div className="todo-container">
      <div style={{ padding: 20 }}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content />}
      </div>

      <div style={{ padding: 20 }}>
        <button onClick={() => setShowSize(!showSize)}>Size</button>
        {showSize && <ResizeWindow/>}
      </div>

      <div style={{ padding: 20 }}>
        <button onClick={() => setShowTime(!showTime)}>Count Time</button>
        {showTime && <Timers />}
      </div>
      
      <div style={{ padding: 20 }}>
        <button onClick={() => setShowFile(!showFile)}>Click Me To Choose File</button>
        {showFile && <CleanUpWithAvatar />}
      </div>

      <CommentBox />
    </div>
  );
};

export default App;
