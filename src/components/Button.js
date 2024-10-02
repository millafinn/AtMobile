import React from "react";
import styles from "../styles/Button.module.css";

function Button({ primary, size, children, ...props }) {
  const className = `${styles.button} ${primary ? styles.primary : ""} ${
    styles[size]
  }`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
