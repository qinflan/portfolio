import React from "react";
import "./Button.css";

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, children, onClick }) => {
  return (
    <button className="button-container" onClick={onClick}>
      <div className="button-icon">{icon}</div>
      {label && <div className="b-caption-sm">{label}</div>}
      {children}
    </button>
  );
};

export default Button;
