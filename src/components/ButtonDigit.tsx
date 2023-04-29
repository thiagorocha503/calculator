import { Digit } from "../types/Digit";

type ButtonDigitProp = {
    id: string;
    number: Digit;
    onClick: (num: Digit) => void;
};
export default function ButtonDigit({ id, number, onClick }: ButtonDigitProp) {
    return (
        <button
            type="button"
            className="btn-digit"
            id={id}
            onClick={() => onClick(number)}
        >
            {number}
        </button>
    );
}
