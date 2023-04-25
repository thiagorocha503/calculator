import { Dispatch, SetStateAction } from "react";
import { calculate } from "../util";
import { Operator } from "../Types";

type ButtonEqualsProp = {
    operator: Operator | null;
    result: number | null;
    display: string;
    last_key: null | string;
    lastRightNumber: number | null;
    setDisplay: Dispatch<SetStateAction<string>>;
    setResult: Dispatch<SetStateAction<number | null>>;
    setActiveOperator: Dispatch<SetStateAction<Operator | null>>;
    setLastKey: Dispatch<SetStateAction<string | null>>;
    setLastRightNumber: Dispatch<SetStateAction<number | null>>;
};
export default function ButtonEquals({
    operator,
    display,
    result,

    last_key,
    lastRightNumber,
    setDisplay,
    setResult,
    setActiveOperator,
    setLastKey,
    setLastRightNumber,
}: ButtonEqualsProp) {
    const handleEquals = () => {
        setActiveOperator(null);
        if (last_key === "=") {
            console.log(
                `$ result: ${result}, operador: ${operator}, right: ${lastRightNumber}`
            );
            const d: number = calculate(
                result as number,
                operator,
                lastRightNumber as number
            ) as number;
            setDisplay(d.toString());
            setResult(d);
            return;
        }
        if (operator != null && result != null) {
            const r: number = calculate(
                result,
                operator,
                parseFloat(display)
            ) as number;
            setLastRightNumber(parseFloat(display));
            setResult(r);
            setDisplay(r.toString());
        }
        setLastKey("=");
    };
    return (
        <button
            type="button"
            className="btn-operator btn-1"
            id="equals"
            value="="
            onClick={() => handleEquals()}
        >
            =
        </button>
    );
}
