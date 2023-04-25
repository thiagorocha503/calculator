import { Dispatch, SetStateAction } from "react";
import { calculate, isOperator } from "../util";
import { Operator } from "../Types";
type ButtonOperatorProp = {
    result: number | null;
    value: Operator;
    id: string;
    operator: Operator | null;
    lastKey: string | null;
    selected: boolean;
    display: string;
    lastRightNumber: number | null;
    setResult: Dispatch<SetStateAction<number | null>>;
    setOperator: Dispatch<SetStateAction<Operator | null>>;
    setActiveOperator: React.Dispatch<SetStateAction<Operator | null>>;
    setLastKey: Dispatch<SetStateAction<string | null>>;
};
export default function ButtonOperator({
    id,
    operator,
    value,
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
    function handleOperator(op: Operator | null) {
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
            if (isOperator(lastKey)) {
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

    return (
        <button
            type="button"
            className={selected ? "btn-operator-active " : "btn-operator "}
            id={id}
            onClick={() => handleOperator(value)}
        >
            {value}
        </button>
    );
}
// × ÷
