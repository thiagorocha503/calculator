export default function ButtonClear({
    handleClear,
    preventDefault: onKeyEvent,
}: {
    handleClear: Function;
    preventDefault: (e:React.KeyboardEvent)=> void;
}) {
    return (
        <button
            type="button"
            className="btn-action"
            id="clear"
            onClick={() => handleClear()}
            onKeyDown={(e) => onKeyEvent(e)}
            onKeyUp={(e) => onKeyEvent(e)}
            >
            C
        </button>
    );
}
