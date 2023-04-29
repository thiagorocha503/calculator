import { useEffect, useState } from "react";
import Display from "./components/Display";
import ButtonDecimal from "./components/ButtonDecimal";
import ButtonEquals from "./components/ButtonEquals";
import ButtonDigit from "./components/ButtonDigit";
import ButtonToggle from "./components/ButtonToggle";
import ButtonClear from "./components/ButtonClear";
import ButtonOperator from "./components/ButtonOperator";
import ButtonCancelEntry from "./components/ButtonCancelEntry";
import { Operator } from "./types/Operator";
import { Digit } from "./types/Digit";
const EQUALS_REGEX = /(Enter)|=/;
const NUMBER_REGEX = /\d/;
const DECIMAL_REGEX = /\.|,/;
const SUM_OR_MINUS = /\+|-/;

function App() {
    const [operator, setOperator] = useState<Operator | null>(null);
    const [display, setDisplay] = useState<string>("0");
    const [result, setResult] = useState<number | null>(null);
    const [lastKey, setLastKey] = useState<string | null>(null); // last key(digit, operator and dot)
    const [lastRightNumber, setLastRightNumber] = useState<number | null>(null); // right operand  of last operation
    const [activeOperator, setActiveOperator] = useState<Operator | null>(null); // active math operation

    function isOperator(key: string | null) {
        return key === "-" || key === "+" || key === "×" || key === "÷";
    }
    // listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;
            if (DECIMAL_REGEX.test(key)) {
                handleDecimal();
                return;
            }
            if (EQUALS_REGEX.test(key)) {
                handleEquals();
                return;
            }
            if (NUMBER_REGEX.test(key)) {
                handleNumberButton(key as Digit);
                return;
            }
            if (SUM_OR_MINUS.test(key)) {
                handleOperator(key as Operator);
            }
            if (key === "/") {
                handleOperator("÷");
                return;
            }
            if (key === "*") {
                handleOperator("×");
                return;
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });
    // prevent Ente key click one button
    const keyPreventDefault = (e: React.KeyboardEvent): void => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    useEffect(() => {
        console.log(
            `display: ${display}, operator: ${operator}, result: ${result}, last_key: ${lastKey}`
        );
    }, [display, operator, result, lastKey]);

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
            if (isOperator(lastKey as string)) {
                setOperator(op);
                return;
            }
            const a = calculate(
                result as number,
                operator,
                parseFloat(display)
            ) as number;
            setResult(a);
            setOperator(op);
        }
    }
    const handleNumberButton = (number: Digit) => {
        if (display.length > 13 || (number === "0" && display === "0")) {
            return;
        }
        // number after equals
        if (lastKey === "=") {
            handleClear(number);
            return;
        }
        // new number after operator, clear display
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

    const handleEquals = () => {
        setActiveOperator(null);

        if (lastKey === "=" && operator != null) {
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
    function calculate(num1: number, op: Operator | null, num2: number) {
        if (op === "+") {
            return num1 + num2;
        } else if (op === "-") {
            return num1 - num2;
        } else if (op === "×") {
            return num1 * num2;
        } else if (op === "÷") {
            return num1 / num2;
        }
    }
    const handleInvert = () => {
        if (display === "0") {
            return;
        }
        if (display.includes("-")) {
            setDisplay((display) => display.substring(1, display.length));
        } else {
            setDisplay((display) => `-${display}`);
        }
    };
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
    const handleClear = (new_display: string = "0") => {
        setDisplay(new_display);
        setResult(0);
        setOperator(null);
        setLastKey(null);
        setLastRightNumber(null);
        setActiveOperator(null);
    };

    function buildOperator(id: string, value: Operator) {
        return (
            <ButtonOperator
                id={id}
                operator={value}
                selected={activeOperator === value}
                onClick={handleOperator}
                preventDefault={keyPreventDefault}
            />
        );
    }
    function buildDigitButton(id: string, digit: Digit) {
        return (
            <ButtonDigit
                id={id}
                number={digit}
                onClick={handleNumberButton}
                preventDefault={keyPreventDefault}
            />
        );
    }
    const handleCE = () => {
        setDisplay("0");
    };
    return (
        <div id="app">
            <Display text={display} />
            <div id="keyboard">
                <div>
                    <ButtonClear
                        handleClear={handleClear}
                        preventDefault={keyPreventDefault}
                    />
                    <ButtonCancelEntry
                        onClick={handleCE}
                        preventDefault={keyPreventDefault}
                    />
                    <ButtonToggle
                        onClick={handleInvert}
                        onKeyEvent={keyPreventDefault}
                    />
                    {buildOperator("divide", "÷")}
                </div>
                <div>
                    {buildDigitButton("seven", "7")}
                    {buildDigitButton("eight", "8")}
                    {buildDigitButton("nine", "9")}
                    {buildOperator("multiply", "×")}
                </div>
                <div>
                    {buildDigitButton("four", "4")}
                    {buildDigitButton("five", "5")}
                    {buildDigitButton("six", "6")}
                    {buildOperator("subtract", "-")}
                </div>
                <div>
                    {buildDigitButton("one", "1")}
                    {buildDigitButton("two", "2")}
                    {buildDigitButton("three", "3")}
                    {buildOperator("add", "+")}
                </div>
                <div>
                    {buildDigitButton("zero", "0")}
                    <ButtonDecimal
                        onClick={handleDecimal}
                        onKeyEvent={keyPreventDefault}
                    />
                    <ButtonEquals
                        onClick={handleEquals}
                        preventDefault={keyPreventDefault}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
