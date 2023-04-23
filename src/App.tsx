import { useEffect, useState } from "react";
import Display from "./components/Display";
import ButtonDecimal from "./components/ButtonDecimal";
import ButtonEquals from "./components/ButtonEquals";
import ButtonDigit from "./components/ButtonDigit";
import ButtonToggle from "./components/ButtonToggle";
import ButtonClear from "./components/ButtonClear";
import ButtonOperator from "./components/ButtonOperator";
import ButtonCancelEntry from "./components/ButtonCancelEntry";

function App() {
    const [operator, setOperator] = useState<"-" | "+" | "*" | "/" | null>(
        null
    );
    const [display, setDisplay] = useState<string>("0");
    const [result, setResult] = useState<number | null>(null);
    const [lastKey, setLastKey] = useState<string | null>(null); // last key(digit, operator and dot)
    const [lastRightNumber, setLastRightNumber] = useState<number | null>(null); // right operand  of last operation
    const [activeOperator, setActiveOperator] = useState<
        "+" | "-" | "*" | "/" | null
    >(null);

    useEffect(() => {
        console.log(
            `display: ${display}, operator: ${operator}, result: ${result}, last_key: ${lastKey}`
        );
    }, [display, operator, result, lastKey]);

    const handleClear = () => {
        setDisplay("0");
        setResult(0);
        setOperator(null);
        setLastKey(null);
        setLastRightNumber(null);
        setActiveOperator(null);
    };

    function buildOperator(
        id: string,

        button_operator: "-" | "+" | "*" | "/"
    ) {
        return (
            <ButtonOperator
                id={id}
                buttonOperator={button_operator}
                currentOperator={operator}
                display={display}
                lastKey={lastKey}
                result={result}
                selected={activeOperator === button_operator}
                lastRightNumber={lastRightNumber}
                setResult={setResult}
                setOperator={setOperator}
                setLastKey={setLastKey}
                setActiveOperator={setActiveOperator}
            />
        );
    }
    function buildDigitButton(
        id: string,
        digit: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    ) {
        return (
            <ButtonDigit
                id={id}
                digit={digit}
                display={display}
                last_key={lastKey}
                setActiveOperator={setActiveOperator}
                setDisplay={setDisplay}
                setLastKey={setLastKey}
            />
        );
    }
    return (
        <div id="app">
            <Display text={display} />
            <div id="keyboard">
                <div>
                    <ButtonClear handleClear={handleClear} />
                    <ButtonCancelEntry setDisplay={setDisplay} />
                    <ButtonToggle display={display} setDisplay={setDisplay} />
                    {buildOperator("divide", "/")}
                </div>
                <div>
                    {buildDigitButton("seven", "7")}
                    {buildDigitButton("eight", "8")}
                    {buildDigitButton("nine", "9")}
                    {buildOperator("multiply", "*")}
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
                    <ButtonDigit
                        id="zero"
                        digit="0"
                        display={display}
                        last_key={lastKey}
                        setActiveOperator={setActiveOperator}
                        setDisplay={setDisplay}
                        setLastKey={setLastKey}
                    />
                    <ButtonDecimal display={display} setDisplay={setDisplay} />
                    <ButtonEquals
                        display={display}
                        lastRightNumber={lastRightNumber}
                        last_key={lastKey}
                        operator={operator}
                        result={result}
                        setActiveOperator={setActiveOperator}
                        setDisplay={setDisplay}
                        setLastKey={setLastKey}
                        setLastRightNumber={setLastRightNumber}
                        setResult={setResult}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
