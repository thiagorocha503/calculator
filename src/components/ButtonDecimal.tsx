type ButtonDecimalProps = {
    onClick: Function;
    onKeyEvent: (e:React.KeyboardEvent)=>void;
};
export default function ButtonDecimal({
    onClick,
    onKeyEvent: onKeyDown,
}: ButtonDecimalProps) {
    return (
        <button
            type="button"
            className="btn-digit btn-1"
            id="decimal"
            onClick={() => onClick()}
            onKeyDown={(e) => onKeyDown(e)}
            onKeyUp={(e) => onKeyDown(e)}
        >
            .
        </button>
    );
}
