import React from "react";

export default function ButtonDecimal({
    display,
    setDisplay,
}: {
    display: string;
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}) {
    const handleDecimal = () => {
        if (display.includes(".")) {
            return;
        }
        setDisplay((d) => d + ".");
    };
    return (
        <button
            type="button"
            className="btn-digit btn-1"
            id="decimal"
            onClick={handleDecimal}
        >
            .
        </button>
    );
}
