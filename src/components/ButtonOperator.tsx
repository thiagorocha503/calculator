import { Operator } from "../Types";
type ButtonOperatorProp = {
    operator: Operator;
    id: string;
    selected: boolean;
    onClick: (e: Operator) => void;
};
export default function ButtonOperator({
    id,
    operator,
    onClick,
    selected,
}: ButtonOperatorProp) {
    return (
        <button
            type="button"
            className={ "btn-operator " + (selected ? "active" : "")}
            id={id}
            onClick={() => onClick(operator)}
        >
            {operator}
        </button>
    );
}
