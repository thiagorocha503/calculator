import React from "react";
import { calculate } from "../util";
type ButtonOperatorProp = {
    result: number | null;
    buttonOperator: "-" | "+" | "/" | "*";
    id: string;
    currentOperator: "-" | "+" | "/" | "*" | null;
    lastKey: string | null;
    selected: boolean;
    display: string;
    lastRightNumber: number | null;
    setResult: React.Dispatch<React.SetStateAction<number | null>>;
    setOperator: React.Dispatch<
        React.SetStateAction<"-" | "+" | "*" | "/" | null>
    >;
    setActiveOperator: React.Dispatch<
        React.SetStateAction<"-" | "+" | "/" | "*" | null>
    >;
    setLastKey: React.Dispatch<React.SetStateAction<string | null>>;
};
export default function ButtonOperator({
    id,
    currentOperator: operator,
    buttonOperator,
    result,
    display,
    selected,
    lastKey,
    lastRightNumber,
    setResult,
    setActiveOperator,
    setOperator,
    setLastKey,
}: ButtonOperatorProp) {
    function isOperator(key: string) {
        return key === "-" || key === "+" || key === "*" || key === "/";
    }
    function handleOperator(op: "-" | "+" | "/" | "*" | null) {
        setLastKey(op);
        setActiveOperator(op);
        if (lastRightNumber != null) {
            setOperator(op);
            return;
        }
        if (operator === null) {
            setOperator(op);
            setResult(() => parseFloat(display));
        } else {
            if (isOperator(lastKey as string)) {
                setOperator(op);
                return;
            }
            setResult(
                calculate(
                    result as number,
                    operator,
                    parseFloat(display)
                ) as number
            );
            setOperator(op);
        }
    }
    let str: string = buttonOperator;
    if (buttonOperator === "/") {
        str = "÷";
    }
    if (buttonOperator === "*") {
        str = "×";
    }
    return (
        <button
            type="button"
            className={selected ? "btn-operator-active " : "btn-operator "}
            id={id}
            onClick={() => handleOperator(buttonOperator)}
        >
            {str}
        </button>
    );
}
// × ÷
