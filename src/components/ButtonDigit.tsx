import { Dispatch, SetStateAction } from "react";
import { Digit, Operator } from "../Types";
import { isOperator } from "../util";

type ButtonDigitProp = {
    id: string;
    value: Digit;
    display: string;
    last_key: string | null;
    setActiveOperator: Dispatch<SetStateAction<Operator | null>>;
    setDisplay: Dispatch<SetStateAction<string>>;
    setLastKey: Dispatch<SetStateAction<string | null>>;
};
export default function ButtonDigit({
    id,
    value: digit,
    last_key,

    display,
    setLastKey,
    setActiveOperator,
    setDisplay,
}: ButtonDigitProp) {
    const handleNumberButton = (number: Digit) => {
        if (display.length > 13) {
            return;
        }
        if (number === "0" && display === "0") {
            return;
        }
        // new number after operator
        setLastKey(number.toString());
        if (isOperator(last_key)) {
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
