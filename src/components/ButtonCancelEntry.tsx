type ButtonCancelEntryProps = {
    onClick: () => void;
    preventDefault: (e: React.KeyboardEvent)=> void;
};
export default function ButtonCancelEntry({
    onClick,
    preventDefault: onKeyDown,
}: ButtonCancelEntryProps) {
    return (
        <button
            className="btn-action"
            type="button"
            onClick={() => onClick()}
            onKeyDown={(e) => onKeyDown(e)}
            onKeyUp={(e)=> onKeyDown(e)}
         
        >
            CE
        </button>
    );
}
