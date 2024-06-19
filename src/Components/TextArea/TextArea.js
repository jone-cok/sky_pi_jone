import { useState } from "react";
import './TextArea.css';

function TextArea() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea className="TextArea" value={textarea} onChange={handleChange} />
    </form>
  )
}
export default TextArea; // Don’t forget to use export default!