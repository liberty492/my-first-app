import "./styles.css";
import { useState } from "react";

export default function App() {
  const [chkValue, setChkValue] = useState(true);
  return (
    <div className="App">
      <input
        type="checkbox"
        onClick={() => setChkValue(!chkValue)}
      />
      <input type="button" disabled={chkValue} value="delete" />
    </div>
  );
}
