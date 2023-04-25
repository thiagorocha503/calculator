import React from "react";
type ButtonDecimalProps = {
    display: string;
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
    handleClear: Function;
    lastKey: string | null;
};
export default function ButtonDecimal({
    display,
    setDisplay,
    handleClear,
    lastKey,
}: ButtonDecimalProps) {
    const handleDecimal = () => {
        if (lastKey === "=") {
            handleClear("0.");
            return;
        }
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
