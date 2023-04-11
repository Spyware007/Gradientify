import React, { useState } from "react";
import "./ThicknessPicker.css";

function ThicknessPicker(props) {
  const [thickness, setThickness] = useState(50);

  function handleThicknessChange(event) {
    const newThickness = event.target.value;
    setThickness(newThickness);
    props.onChange(newThickness);
  }

  return (
    <div className="thickness-picker">
      <label>Thickness: {`${Math.round((thickness / 100) * 10) / 10}rem`}</label>
      <input
        type="range"
        min="1"
        max="100"
        defaultValue="50"
        onChange={handleThicknessChange}
        className="progress"
      />
    </div>
  );
}

export default ThicknessPicker;
