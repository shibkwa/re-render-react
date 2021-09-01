import { ChildArea } from "./ChildArea";
import { useState, useCallback } from "react";

import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = (e) => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [open]);

  // const [count, setCount] = useState(0);

  // const onClickCountUp = () => {
  //   setCount(count + 1);
  // };
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button> */}
    </div>
  );
}
