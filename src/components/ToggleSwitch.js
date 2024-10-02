import React, { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        width: "60px",
        height: "34px",
      }}
    >
      <label
        style={{
          position: "relative",
          display: "inline-block",
          width: "60px",
          height: "34px",
        }}
      >
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
          style={{ opacity: 0, width: 0, height: 0 }}
        />
        <span
          style={{
            position: "absolute",
            cursor: "pointer",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isOn ? "#2196F3" : "#ccc",
            transition: ".4s",
            borderRadius: "34px",
          }}
        />
        <span
          style={{
            position: "absolute",
            content: '""',
            height: "26px",
            width: "26px",
            left: "4px",
            bottom: "4px",
            backgroundColor: "white",
            transition: ".4s",
            borderRadius: "50%",
            transform: isOn ? "translateX(26px)" : "none",
          }}
        />
      </label>
      <p>{isOn ? "Ligado" : "Desligado"}</p>
    </div>
  );
}

export default ToggleSwitch;
