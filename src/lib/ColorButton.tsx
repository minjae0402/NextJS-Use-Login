import React from 'react';

interface ColorButtonProps {
  text: string;
  onClick: () => void;
}

const ColorButton: React.FC<ColorButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
    >
      {text}
    </button>
  );
};

export default ColorButton;
