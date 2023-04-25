import { Operator } from "./Types";

export function calculate(
    num1: number,
    op: Operator | null,
    num2: number
) {
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
export function isOperator(key: string| null) {
    return key === "-" || key === "+" || key === "×" || key === "÷";
}
