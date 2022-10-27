import React from "react";
import buttonStyles from "./Button.module.css"

const Button = ({ children }) => {
  return (
    <button className={buttonStyles.button}>{ children }</button>
  )
}

export default Button;