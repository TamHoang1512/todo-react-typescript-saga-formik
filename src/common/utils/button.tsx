//button.tsx

import React from "react";

export type ButtonProps = {
  id: string;
  text: string;
  theme: string;
  shortcutKey?: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<ButtonProps> = ({
  id,
  text,
  theme,
  shortcutKey,
  onClick
}) => {
  const buttonStyle = {
    backgroundColor: theme
  };
  const handlePressKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (shortcutKey && event.key === shortcutKey) {
      onClick();
    }
  };
  return (
    <button
      type="submit"
      id={id}
      style={buttonStyle}
      onKeyPress={handlePressKey}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
