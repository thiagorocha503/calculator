import { Digit } from "../types/Digit";

type ButtonDigitProp = {
    id: string;
    number: Digit;
    onClick: (num: Digit) => void;
    preventDefault: (e:React.KeyboardEvent)=> void;
};

export default function ButtonDigit({
    id,
    preventDefault,
    number,
    onClick,
}: ButtonDigitProp) {
    return (
        <button
            type="button"
            className="btn-digit"
            id={id}
            onClick={() => onClick(number)}
            onKeyDown={(e) => preventDefault(e)}
            onKeyUp={(e) => preventDefault(e)}
        >
            {number}
        </button>
    );
}
