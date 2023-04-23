import React from "react";

type ButtonDigitProp = {
    id: string;
    digit:  "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    
    display: string;
    last_key: string | null;
    setActiveOperator: React.Dispatch<
        React.SetStateAction<"-" | "+" | "*" | "/" | null>
    >;
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
    setLastKey: React.Dispatch<React.SetStateAction<string | null>>;
};
export default function ButtonDigit({
    id,
    digit,
    last_key,

    display,
    setLastKey,
    setActiveOperator,
    setDisplay,
}: ButtonDigitProp) {
    const handleNumberButton = (
        number: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    ) => {
        if (display.length > 13) {
            return;
        }
        if (number === "0" && display === "0") {
            return;
        }
        // new number after operator
        setLastKey(number.toString());
        if (/[-+/*]/.test(last_key ?? "")) {
            setDisplay(number);
            setActiveOperator(null);
            return;
        }
        if (display === "0") {
            setDisplay(number);
        } else {
            setDisplay((d) => `${d}${number}`);
        }
    };
    return (
        <button
            type="button"
            className="btn-digit"
            id={id}
            onClick={() => handleNumberButton(digit)}
        >
            {digit}
        </button>
    );
}
