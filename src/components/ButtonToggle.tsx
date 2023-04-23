import React from "react";

type ButtonToggleProp = {
    display: string;
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
};
export default function ButtonToggle({ display, setDisplay }: ButtonToggleProp) {
    const handleReverter = () => {
        if (display === "0") {
            return;
        }
        if (display.includes("-")) {
            setDisplay((display) => display.substring(1, display.length));
        } else {
            setDisplay((display) => `-${display}`);
        }
    };
    return (
        <button
            type="button"
            className="btn-action"
            id=""
            onClick={handleReverter}
        >
            ±
        </button>
    );
}
