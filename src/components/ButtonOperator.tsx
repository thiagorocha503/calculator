import { Operator } from "../types/Operator";

type ButtonOperatorProp = {
    operator: Operator;
    id: string;
    selected: boolean;
    onClick: (e: Operator) => void;
    preventDefault: (e:React.KeyboardEvent)=> void;
};
export default function ButtonOperator({
    id,
    operator,
    selected,
    onClick,
    preventDefault
}: ButtonOperatorProp) {
    return (
        <button
            type="button"
            className={"btn-operator " + (selected ? "active" : "")}
            id={id}
            onClick={() => onClick(operator)}
            onKeyDown={(e) => preventDefault(e)}
            onKeyUp={(e) => preventDefault(e)}
        >
            {operator}
        </button>
    );
}
