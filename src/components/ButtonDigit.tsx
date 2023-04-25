import { Dispatch, SetStateAction } from "react";
import { Digit, Operator } from "../Types";
import { isOperator } from "../util";

type ButtonDigitProp = {
    id: string;
    value: Digit;
    display: string;
    lastKey: string | null;
    setActiveOperator: Dispatch<SetStateAction<Operator | null>>;
    setDisplay: Dispatch<SetStateAction<string>>;
    setLastKey: Dispatch<SetStateAction<string | null>>;
    handleClear: Function
};
export default function ButtonDigit({
    id,
    value,
    lastKey,
    display,
    setLastKey,
    setActiveOperator,
    setDisplay,
    handleClear
}: ButtonDigitProp) {
    const handleNumberButton = (number: Digit) => {
        if (display.length > 13 || (number === "0" && display === "0")) {
            return;
        }
        // number after equals click
        if (lastKey === "=") {
            handleClear(number);
            return;
        }
        // new number after operator
        setLastKey(number.toString());
        if (isOperator(lastKey)) {
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
            onClick={() => handleNumberButton(value)}
        >
            {value}
        </button>
    );
}
