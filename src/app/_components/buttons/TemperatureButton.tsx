"use client";
import React, { useState } from "react";
interface TemperatureButtonProps {
  onClick: () => void;
  //   extraStyles: string;
  content: string;
}

function TemperatureButton({ onClick, content }: TemperatureButtonProps) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <button
      className="temperature-button"
      onClick={() => {
        setIsSelected(!isSelected);
        onClick();
      }}
    >
      {content}
    </button>
  );
}

export default TemperatureButton;
